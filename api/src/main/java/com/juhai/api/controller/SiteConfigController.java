package com.juhai.api.controller;

import cn.hutool.core.collection.CollStreamUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.juhai.api.controller.request.MessageTextRequest;
import com.juhai.commons.entity.MessageText;
import com.juhai.commons.entity.Paramter;
import com.juhai.commons.entity.Version;
import com.juhai.commons.service.MessageTextService;
import com.juhai.commons.service.ParamterService;
import com.juhai.commons.service.VersionService;
import com.juhai.commons.utils.R;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

@Slf4j
@Api(value = "获取系统配置相关", tags = "获取系统配置相关")
@RequestMapping("/system")
@RestController
public class SiteConfigController {

    @Autowired
    private ParamterService paramterService;

    @Autowired
    private VersionService versionService;

    @Autowired
    private MessageTextService messageTextService;

    @ApiOperation(value = "获取系统配置")
    @GetMapping("/config")
    public R config(HttpServletRequest httpServletRequest) {
        List<Paramter> list = paramterService.list(new LambdaQueryWrapper<Paramter>().eq(Paramter::getIsShow, 0));
        Map<String, Object> map = CollStreamUtil.toMap(list, Paramter::getParamKey, Paramter::getParamValue);

        List<Version> versions = versionService.list();
        map.put("version", versions);

        return R.ok().put("data", map);
    }

    @ApiOperation(value = "获取文本配置")
    @GetMapping("/text")
    public R text(HttpServletRequest httpServletRequest, @Validated MessageTextRequest request) {
        MessageText text = messageTextService.getOne(new LambdaQueryWrapper<MessageText>().eq(MessageText::getCode, request.getCode()));
        if (text != null) {
            return R.ok().put("data", text.getContent());
        }
        return R.ok().put("data", "");
    }
}
