import Vue from "vue";
import * as base from "plugins/base.js";
Vue.prototype.$base = base;
//统一API资源管理
//登录
export const user_login = (data) => {
  return new Promise((resolve, reject) => {
    base
      .request({
        url: "user/login",
        method: "post",
        data: data,
      })
      .then((res) => {
        resolve(res);
      })
      .catch(() => {
        reject();
      });
  });
};
//注册
export const user_register = (data) => {
  return new Promise((resolve, reject) => {
    base
      .request({
        url: "user/register",
        method: "post",
        data: data,
      })
      .then((res) => {
        resolve(res);
      });
  });
};

//退出登陆
export const user_logout = (data) => {
  return new Promise((resolve, reject) => {
    base
      .request({
        url: "user/logout",
        method: "post",
        data: data,
      })
      .then((res) => {
        resolve(res);
      });
  });
};

//用户数据详情
export const user_info = (data) => {
  return new Promise((resolve, reject) => {
    base
      .request({
        url: "user/info",
        method: "get",
        data: data,
      })
      .then((res) => {
        resolve(res);
      });
  });
};

//系统资源
export const system_config = (data) => {
  return new Promise((resolve, reject) => {
    base
      .request({
        url: "system/config",
        method: "get",
        data: data,
      })
      .then((res) => {
        resolve(res);
      });
  });
};

//退出登陆
export const schedule = (data) => {
  return new Promise((resolve, reject) => {
    base
      .request({
        url: "user/opinion/schedule",
        method: "post",
        data: data,
      })
      .then((res) => {
        resolve(res);
      });
  });
};

//提交意见
export const apply = (data) => {
  return new Promise((resolve, reject) => {
    base
      .request({
        url: "user/yijian/apply",
        method: "post",
        data: data,
      })
      .then((res) => {
        resolve(res);
      });
  });
};

//申请救济金
export const opinion_apply = (data) => {
  return new Promise((resolve, reject) => {
    base
      .request({
        url: "user/opinion/apply",
        method: "post",
        data: data,
      })
      .then((res) => {
        resolve(res);
      });
  });
};

