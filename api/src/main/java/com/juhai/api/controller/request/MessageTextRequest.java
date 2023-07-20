package com.juhai.api.controller.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
@ApiModel(value = "文本请求类", description = "文本请求参数")
public class MessageTextRequest {

    @NotNull(message = "system.param.err")
    @ApiModelProperty(value = "代码", example = "dunaifen123", required = true)
    private String code;
}
