package com.juhai.api.controller.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
@ApiModel(value = "收货地址请求类", description = "收货地址请求参数")
public class AddressRequest {

    @NotNull(message = "system.param.err")
    @ApiModelProperty(value = "收货地址", example = "北京天安门广场", required = true)
    private String address;

    @NotNull(message = "system.param.err")
    @ApiModelProperty(value = "用户手机号", example = "15152033333", required = true)
    private String userPhone;

}
