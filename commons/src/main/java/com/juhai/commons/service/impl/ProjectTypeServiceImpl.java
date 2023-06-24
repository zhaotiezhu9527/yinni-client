package com.juhai.commons.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.juhai.commons.entity.ProjectType;
import com.juhai.commons.service.ProjectTypeService;
import com.juhai.commons.mapper.ProjectTypeMapper;
import org.springframework.stereotype.Service;

/**
* @author Administrator
* @description 针对表【t_project_type】的数据库操作Service实现
* @createDate 2023-06-24 14:30:26
*/
@Service
public class ProjectTypeServiceImpl extends ServiceImpl<ProjectTypeMapper, ProjectType>
    implements ProjectTypeService{

}




