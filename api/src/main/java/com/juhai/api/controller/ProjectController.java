package com.juhai.api.controller;

import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.date.DateUnit;
import cn.hutool.core.date.DateUtil;
import com.alibaba.fastjson2.JSONArray;
import com.alibaba.fastjson2.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.juhai.api.utils.JwtUtils;
import com.juhai.commons.entity.Project;
import com.juhai.commons.entity.ProjectType;
import com.juhai.commons.entity.User;
import com.juhai.commons.service.ParamterService;
import com.juhai.commons.service.ProjectService;
import com.juhai.commons.service.ProjectTypeService;
import com.juhai.commons.service.UserService;
import com.juhai.commons.utils.MsgUtil;
import com.juhai.commons.utils.R;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Slf4j
@Api(value = "项目相关", tags = "项目相关")
@RequestMapping("/project")
@RestController
public class ProjectController {
    @Autowired
    private ProjectService projectService;

    @Autowired
    private ParamterService paramterService;

    @Autowired
    private UserService userService;

    @Autowired
    private ProjectTypeService projectTypeService;

    @ApiOperation(value = "获取项目列表")
    @GetMapping("/list")
    public R list(HttpServletRequest httpServletRequest) {
        String id = httpServletRequest.getParameter("id");
        List<Project> list = projectService.list(
                new LambdaQueryWrapper<Project>()
                        .eq(StringUtils.isNotBlank(id), Project::getTypeId, id)
                        .eq(Project::getStatus, 0)
                        .orderByDesc(Project::getSort)
        );
        JSONArray array = new JSONArray();
        if (CollUtil.isNotEmpty(list)) {
            Date now = new Date();
            Map<String, String> map = paramterService.getAllParamByMap();
            for (Project project : list) {
                JSONObject temp = new JSONObject();
                // 获取当前小时
                Date nextHour = null;
                if (project.getLimitTime().intValue() == 3 || project.getLimitTime().intValue() == 5 || project.getLimitTime().intValue() == 10) {
                    nextHour = getNextTime(now, project.getLimitTime().intValue(), 60);
                } else if (project.getLimitTime().intValue() == 720) {
                    nextHour = getNextTime(now, project.getLimitTime().intValue(), 1440);
                } else if (project.getLimitTime().intValue() == 1440) {
                    nextHour = DateUtil.endOfDay(now);
                } else {
                    continue;
                }
                int status = 0;
                // 不在时间区间内 过滤
                if (!DateUtil.isIn(now, project.getStartTime(), project.getEndTime())) {
                    status = 1;
                }


                temp.put("projectId", project.getId());
                temp.put("projectName", project.getProjectName());
                temp.put("projectAmount", project.getProjectAmount());
                temp.put("incomeRate", project.getIncomeRate());
                temp.put("limitTime", project.getLimitTime());
                temp.put("minAmount", project.getMinAmount());
                temp.put("startTime", project.getStartTime());
                temp.put("schedule", project.getSchedule());
                temp.put("guaranteeCompany", map.get("guarantee_company"));
                temp.put("img", map.get("resource_domain") + project.getImg());
                temp.put("time", DateUtil.between(now, nextHour, DateUnit.SECOND));
                temp.put("status", status);
                array.add(temp);
            }
        }
        return R.ok().put("data", array);
    }

    /**
     * 获取下一次时间
     * @param now
     * @param offset
     * @return
     */
    private Date getNextTime(Date now, int offset, int count) {
        Date curHour = DateUtil.beginOfHour(now);
        Date nextHour = null;
        int length = count / offset;
        // 十分钟一期
        for (int i = 0; i < length; i++) {
            nextHour = DateUtil.offsetMinute(curHour, offset);
            if (DateUtil.isIn(now, curHour, nextHour)) {
                break;
            }
            curHour = nextHour;
        }
        return nextHour;
    }

    @ApiOperation(value = "获取项目详情")
    @GetMapping("/detail/{id}")
    public R list(HttpServletRequest httpServletRequest, @PathVariable("id") String id) {
        Project project = projectService.getById(id);
        if (project == null) {
            return R.error(MsgUtil.get("system.project.invalid"));
        }

        if(project.getStatus().intValue() == 1 || !DateUtil.isIn(new Date(), project.getStartTime(), project.getEndTime())) {
            return R.error(MsgUtil.get("system.project.finshed"));
        }

        Date now = new Date();
        Map<String, String> map = paramterService.getAllParamByMap();
        JSONObject temp = new JSONObject();
        temp.put("projectId", project.getId());
        temp.put("projectName", project.getProjectName());
        temp.put("projectAmount", project.getProjectAmount());
        temp.put("incomeRate", project.getIncomeRate());
        temp.put("limitTime", project.getLimitTime());
        temp.put("minAmount", project.getMinAmount());
        temp.put("startTime", project.getStartTime());
        temp.put("schedule", project.getSchedule());
        temp.put("guaranteeCompany", map.get("guarantee_company"));
        temp.put("img", map.get("resource_domain") + project.getImg());

//        temp.put("time", DateUtil.between(now, getNextTime(now, project.getLimitTime().intValue()), DateUnit.SECOND));
        temp.put("time", 0);

        String userName = JwtUtils.getUserName(httpServletRequest);
        User user = userService.getUserByName(userName);
        temp.put("userBalance", user.getBalance());

        return R.ok().put("data", temp);
    }


    @ApiOperation(value = "获取所有项目分类")
    @GetMapping("/allType")
    public R allType(HttpServletRequest httpServletRequest) {

        List<ProjectType> list = projectTypeService.list(new LambdaQueryWrapper<ProjectType>().eq(ProjectType::getStatus, 0).orderByDesc(ProjectType::getSort));

        Map<String, String> map = paramterService.getAllParamByMap();

        JSONArray array = new JSONArray();
        for (ProjectType projectType : list) {
            JSONObject object = new JSONObject();
            object.put("id", projectType.getId());
            object.put("name", projectType.getTypeName());
            object.put("img", map.get("resource_domain") + projectType.getImg());
            array.add(object);
        }
        return R.ok().put("list", array);
    }
}
