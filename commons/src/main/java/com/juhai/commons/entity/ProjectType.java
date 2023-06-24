package com.juhai.commons.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import lombok.Data;

/**
 * 
 * @TableName t_project_type
 */
@TableName(value ="t_project_type")
@Data
public class ProjectType implements Serializable {
    /**
     * id
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    /**
     * 分类名称
     */
    @TableField(value = "type_name")
    private String typeName;

    /**
     * 0:启用 1:停用
     */
    @TableField(value = "status")
    private Integer status;

    /**
     * 排序号
     */
    @TableField(value = "sort")
    private Integer sort;

    @TableField(exist = false)
    private static final long serialVersionUID = 1L;
}