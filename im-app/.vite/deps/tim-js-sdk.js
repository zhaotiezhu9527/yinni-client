import {
  __commonJS
} from "./chunk-RSJERJUL.js";

// ../../../../../../Users/riverwater/Desktop/project/self/web/im-app/node_modules/tim-js-sdk/tim-js.js
var require_tim_js = __commonJS({
  "../../../../../../Users/riverwater/Desktop/project/self/web/im-app/node_modules/tim-js-sdk/tim-js.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).TIM = t();
    }(exports, function() {
      function e(e2, t2) {
        var n2 = Object.keys(e2);
        if (Object.getOwnPropertySymbols) {
          var o2 = Object.getOwnPropertySymbols(e2);
          t2 && (o2 = o2.filter(function(t3) {
            return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
          })), n2.push.apply(n2, o2);
        }
        return n2;
      }
      function t(t2) {
        for (var n2 = 1; n2 < arguments.length; n2++) {
          var o2 = null != arguments[n2] ? arguments[n2] : {};
          n2 % 2 ? e(Object(o2), true).forEach(function(e2) {
            r(t2, e2, o2[e2]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(o2)) : e(Object(o2)).forEach(function(e2) {
            Object.defineProperty(t2, e2, Object.getOwnPropertyDescriptor(o2, e2));
          });
        }
        return t2;
      }
      function n(e2) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
          return typeof e3;
        } : function(e3) {
          return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
        })(e2);
      }
      function o(e2, t2) {
        if (!(e2 instanceof t2))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(e2, t2) {
        for (var n2 = 0; n2 < t2.length; n2++) {
          var o2 = t2[n2];
          o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e2, o2.key, o2);
        }
      }
      function a(e2, t2, n2) {
        return t2 && s(e2.prototype, t2), n2 && s(e2, n2), Object.defineProperty(e2, "prototype", { writable: false }), e2;
      }
      function r(e2, t2, n2) {
        return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
      }
      function i(e2, t2) {
        if ("function" != typeof t2 && null !== t2)
          throw new TypeError("Super expression must either be null or a function");
        e2.prototype = Object.create(t2 && t2.prototype, { constructor: { value: e2, writable: true, configurable: true } }), Object.defineProperty(e2, "prototype", { writable: false }), t2 && c(e2, t2);
      }
      function u(e2) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e3) {
          return e3.__proto__ || Object.getPrototypeOf(e3);
        })(e2);
      }
      function c(e2, t2) {
        return (c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e3, t3) {
          return e3.__proto__ = t3, e3;
        })(e2, t2);
      }
      function l() {
        if ("undefined" == typeof Reflect || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if ("function" == typeof Proxy)
          return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (e2) {
          return false;
        }
      }
      function p(e2, t2, n2) {
        return (p = l() ? Reflect.construct.bind() : function(e3, t3, n3) {
          var o2 = [null];
          o2.push.apply(o2, t3);
          var s2 = new (Function.bind.apply(e3, o2))();
          return n3 && c(s2, n3.prototype), s2;
        }).apply(null, arguments);
      }
      function d(e2) {
        var t2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
        return (d = function(e3) {
          if (null === e3 || (n2 = e3, -1 === Function.toString.call(n2).indexOf("[native code]")))
            return e3;
          var n2;
          if ("function" != typeof e3)
            throw new TypeError("Super expression must either be null or a function");
          if (void 0 !== t2) {
            if (t2.has(e3))
              return t2.get(e3);
            t2.set(e3, o2);
          }
          function o2() {
            return p(e3, arguments, u(this).constructor);
          }
          return o2.prototype = Object.create(e3.prototype, { constructor: { value: o2, enumerable: false, writable: true, configurable: true } }), c(o2, e3);
        })(e2);
      }
      function g(e2, t2) {
        if (null == e2)
          return {};
        var n2, o2, s2 = function(e3, t3) {
          if (null == e3)
            return {};
          var n3, o3, s3 = {}, a3 = Object.keys(e3);
          for (o3 = 0; o3 < a3.length; o3++)
            n3 = a3[o3], t3.indexOf(n3) >= 0 || (s3[n3] = e3[n3]);
          return s3;
        }(e2, t2);
        if (Object.getOwnPropertySymbols) {
          var a2 = Object.getOwnPropertySymbols(e2);
          for (o2 = 0; o2 < a2.length; o2++)
            n2 = a2[o2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (s2[n2] = e2[n2]);
        }
        return s2;
      }
      function _(e2) {
        if (void 0 === e2)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e2;
      }
      function h(e2, t2) {
        if (t2 && ("object" == typeof t2 || "function" == typeof t2))
          return t2;
        if (void 0 !== t2)
          throw new TypeError("Derived constructors may only return object or undefined");
        return _(e2);
      }
      function f(e2) {
        var t2 = l();
        return function() {
          var n2, o2 = u(e2);
          if (t2) {
            var s2 = u(this).constructor;
            n2 = Reflect.construct(o2, arguments, s2);
          } else
            n2 = o2.apply(this, arguments);
          return h(this, n2);
        };
      }
      function v(e2, t2) {
        return M(e2) || function(e3, t3) {
          var n2 = null == e3 ? null : "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
          if (null == n2)
            return;
          var o2, s2, a2 = [], r2 = true, i2 = false;
          try {
            for (n2 = n2.call(e3); !(r2 = (o2 = n2.next()).done) && (a2.push(o2.value), !t3 || a2.length !== t3); r2 = true)
              ;
          } catch (u2) {
            i2 = true, s2 = u2;
          } finally {
            try {
              r2 || null == n2.return || n2.return();
            } finally {
              if (i2)
                throw s2;
            }
          }
          return a2;
        }(e2, t2) || I(e2, t2) || T();
      }
      function m(e2) {
        return function(e3) {
          if (Array.isArray(e3))
            return C(e3);
        }(e2) || y(e2) || I(e2) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function M(e2) {
        if (Array.isArray(e2))
          return e2;
      }
      function y(e2) {
        if ("undefined" != typeof Symbol && null != e2[Symbol.iterator] || null != e2["@@iterator"])
          return Array.from(e2);
      }
      function I(e2, t2) {
        if (e2) {
          if ("string" == typeof e2)
            return C(e2, t2);
          var n2 = Object.prototype.toString.call(e2).slice(8, -1);
          return "Object" === n2 && e2.constructor && (n2 = e2.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e2) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? C(e2, t2) : void 0;
        }
      }
      function C(e2, t2) {
        (null == t2 || t2 > e2.length) && (t2 = e2.length);
        for (var n2 = 0, o2 = new Array(t2); n2 < t2; n2++)
          o2[n2] = e2[n2];
        return o2;
      }
      function T() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function D(e2, t2) {
        var n2 = "undefined" != typeof Symbol && e2[Symbol.iterator] || e2["@@iterator"];
        if (!n2) {
          if (Array.isArray(e2) || (n2 = I(e2)) || t2 && e2 && "number" == typeof e2.length) {
            n2 && (e2 = n2);
            var o2 = 0, s2 = function() {
            };
            return { s: s2, n: function() {
              return o2 >= e2.length ? { done: true } : { done: false, value: e2[o2++] };
            }, e: function(e3) {
              throw e3;
            }, f: s2 };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var a2, r2 = true, i2 = false;
        return { s: function() {
          n2 = n2.call(e2);
        }, n: function() {
          var e3 = n2.next();
          return r2 = e3.done, e3;
        }, e: function(e3) {
          i2 = true, a2 = e3;
        }, f: function() {
          try {
            r2 || null == n2.return || n2.return();
          } finally {
            if (i2)
              throw a2;
          }
        } };
      }
      var E = { SDK_READY: "sdkStateReady", SDK_NOT_READY: "sdkStateNotReady", SDK_DESTROY: "sdkDestroy", MESSAGE_RECEIVED: "onMessageReceived", MESSAGE_MODIFIED: "onMessageModified", MESSAGE_REVOKED: "onMessageRevoked", MESSAGE_READ_BY_PEER: "onMessageReadByPeer", MESSAGE_READ_RECEIPT_RECEIVED: "onMessageReadReceiptReceived", MESSAGE_EXTENSIONS_UPDATED: "onMessageExtensionsUpdated", MESSAGE_EXTENSIONS_DELETED: "onMessageExtensionsDeleted", CONVERSATION_LIST_UPDATED: "onConversationListUpdated", TOTAL_UNREAD_MESSAGE_COUNT_UPDATED: "onTotalUnreadMessageCountUpdated", CONVERSATION_GROUP_LIST_UPDATED: "onConversationGroupListUpdated", CONVERSATION_IN_GROUP_UPDATED: "onConversationInGroupUpdated", GROUP_LIST_UPDATED: "onGroupListUpdated", GROUP_SYSTEM_NOTICE_RECEIVED: "receiveGroupSystemNotice", GROUP_ATTRIBUTES_UPDATED: "groupAttributesUpdated", GROUP_COUNTER_UPDATED: "onGroupCounterUpdated", TOPIC_CREATED: "onTopicCreated", TOPIC_DELETED: "onTopicDeleted", TOPIC_UPDATED: "onTopicUpdated", PROFILE_UPDATED: "onProfileUpdated", USER_STATUS_UPDATED: "onUserStatusUpdated", BLACKLIST_UPDATED: "blacklistUpdated", FRIEND_LIST_UPDATED: "onFriendListUpdated", FRIEND_GROUP_LIST_UPDATED: "onFriendGroupListUpdated", FRIEND_APPLICATION_LIST_UPDATED: "onFriendApplicationListUpdated", KICKED_OUT: "kickedOut", ERROR: "error", NET_STATE_CHANGE: "netStateChange", SDK_RELOAD: "sdkReload" }, S = { MSG_TEXT: "TIMTextElem", MSG_IMAGE: "TIMImageElem", MSG_SOUND: "TIMSoundElem", MSG_AUDIO: "TIMSoundElem", MSG_FILE: "TIMFileElem", MSG_FACE: "TIMFaceElem", MSG_VIDEO: "TIMVideoFileElem", MSG_GEO: "TIMLocationElem", MSG_LOCATION: "TIMLocationElem", MSG_GRP_TIP: "TIMGroupTipElem", MSG_GRP_SYS_NOTICE: "TIMGroupSystemNoticeElem", MSG_CUSTOM: "TIMCustomElem", MSG_MERGER: "TIMRelayElem", MSG_PRIORITY_HIGH: "High", MSG_PRIORITY_NORMAL: "Normal", MSG_PRIORITY_LOW: "Low", MSG_PRIORITY_LOWEST: "Lowest", CONV_C2C: "C2C", CONV_GROUP: "GROUP", CONV_TOPIC: "TOPIC", CONV_SYSTEM: "@TIM#SYSTEM", CONV_AT_ME: 1, CONV_AT_ALL: 2, CONV_AT_ALL_AT_ME: 3, CONV_MARK_TYPE_STAR: 1, CONV_MARK_TYPE_UNREAD: 2, CONV_MARK_TYPE_FOLD: 4, CONV_MARK_TYPE_HIDE: 8, GRP_PRIVATE: "Private", GRP_WORK: "Private", GRP_PUBLIC: "Public", GRP_CHATROOM: "ChatRoom", GRP_MEETING: "ChatRoom", GRP_AVCHATROOM: "AVChatRoom", GRP_COMMUNITY: "Community", GRP_MBR_ROLE_OWNER: "Owner", GRP_MBR_ROLE_ADMIN: "Admin", GRP_MBR_ROLE_MEMBER: "Member", GRP_MBR_ROLE_CUSTOM: "Custom", GRP_TIP_MBR_JOIN: 1, GRP_TIP_MBR_QUIT: 2, GRP_TIP_MBR_KICKED_OUT: 3, GRP_TIP_MBR_SET_ADMIN: 4, GRP_TIP_MBR_CANCELED_ADMIN: 5, GRP_TIP_GRP_PROFILE_UPDATED: 6, GRP_TIP_MBR_PROFILE_UPDATED: 7, GRP_TIP_BAN_AVCHATROOM_MEMBER: 10, GRP_TIP_UNBAN_AVCHATROOM_MEMBER: 11, MSG_REMIND_ACPT_AND_NOTE: "AcceptAndNotify", MSG_REMIND_ACPT_NOT_NOTE: "AcceptNotNotify", MSG_REMIND_DISCARD: "Discard", GENDER_UNKNOWN: "Gender_Type_Unknown", GENDER_FEMALE: "Gender_Type_Female", GENDER_MALE: "Gender_Type_Male", KICKED_OUT_MULT_ACCOUNT: "multipleAccount", KICKED_OUT_MULT_DEVICE: "multipleDevice", KICKED_OUT_USERSIG_EXPIRED: "userSigExpired", KICKED_OUT_REST_API: "REST_API_Kick", ALLOW_TYPE_ALLOW_ANY: "AllowType_Type_AllowAny", ALLOW_TYPE_NEED_CONFIRM: "AllowType_Type_NeedConfirm", ALLOW_TYPE_DENY_ANY: "AllowType_Type_DenyAny", FORBID_TYPE_NONE: "AdminForbid_Type_None", FORBID_TYPE_SEND_OUT: "AdminForbid_Type_SendOut", JOIN_OPTIONS_FREE_ACCESS: "FreeAccess", JOIN_OPTIONS_NEED_PERMISSION: "NeedPermission", JOIN_OPTIONS_DISABLE_APPLY: "DisableApply", JOIN_STATUS_SUCCESS: "JoinedSuccess", JOIN_STATUS_ALREADY_IN_GROUP: "AlreadyInGroup", JOIN_STATUS_WAIT_APPROVAL: "WaitAdminApproval", INVITE_OPTIONS_DISABLE_INVITE: "DisableInvite", INVITE_OPTIONS_NEED_PERMISSION: "NeedPermission", INVITE_OPTIONS_FREE_ACCESS: "FreeAccess", GRP_PROFILE_OWNER_ID: "ownerID", GRP_PROFILE_CREATE_TIME: "createTime", GRP_PROFILE_LAST_INFO_TIME: "lastInfoTime", GRP_PROFILE_MEMBER_NUM: "memberNum", GRP_PROFILE_MAX_MEMBER_NUM: "maxMemberNum", GRP_PROFILE_JOIN_OPTION: "joinOption", GRP_PROFILE_INVITE_OPTION: "inviteOption", GRP_PROFILE_INTRODUCTION: "introduction", GRP_PROFILE_NOTIFICATION: "notification", GRP_PROFILE_MUTE_ALL_MBRS: "muteAllMembers", SNS_ADD_TYPE_SINGLE: "Add_Type_Single", SNS_ADD_TYPE_BOTH: "Add_Type_Both", SNS_DELETE_TYPE_SINGLE: "Delete_Type_Single", SNS_DELETE_TYPE_BOTH: "Delete_Type_Both", SNS_APPLICATION_TYPE_BOTH: "Pendency_Type_Both", SNS_APPLICATION_SENT_TO_ME: "Pendency_Type_ComeIn", SNS_APPLICATION_SENT_BY_ME: "Pendency_Type_SendOut", SNS_APPLICATION_AGREE: "Response_Action_Agree", SNS_APPLICATION_AGREE_AND_ADD: "Response_Action_AgreeAndAdd", SNS_CHECK_TYPE_BOTH: "CheckResult_Type_Both", SNS_CHECK_TYPE_SINGLE: "CheckResult_Type_Single", SNS_TYPE_NO_RELATION: "CheckResult_Type_NoRelation", SNS_TYPE_A_WITH_B: "CheckResult_Type_AWithB", SNS_TYPE_B_WITH_A: "CheckResult_Type_BWithA", SNS_TYPE_BOTH_WAY: "CheckResult_Type_BothWay", NET_STATE_CONNECTED: "connected", NET_STATE_CONNECTING: "connecting", NET_STATE_DISCONNECTED: "disconnected", MSG_AT_ALL: "__kImSDK_MesssageAtALL__", READ_ALL_C2C_MSG: "readAllC2CMessage", READ_ALL_GROUP_MSG: "readAllGroupMessage", READ_ALL_MSG: "readAllMessage", USER_STATUS_UNKNOWN: 0, USER_STATUS_ONLINE: 1, USER_STATUS_OFFLINE: 2, USER_STATUS_UNLOGINED: 3 }, k = function() {
        function e2() {
          o(this, e2), this.cache = [], this.options = null;
        }
        return a(e2, [{ key: "use", value: function(e3) {
          if ("function" != typeof e3)
            throw "middleware must be a function";
          return this.cache.push(e3), this;
        } }, { key: "next", value: function(e3) {
          if (this.middlewares && this.middlewares.length > 0)
            return this.middlewares.shift().call(this, this.options, this.next.bind(this));
        } }, { key: "run", value: function(e3) {
          return this.middlewares = this.cache.map(function(e4) {
            return e4;
          }), this.options = e3, this.next();
        } }]), e2;
      }(), L = function() {
        function e2() {
          var t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          o(this, e2), this.high = t2, this.low = n2;
        }
        return a(e2, [{ key: "equal", value: function(e3) {
          return null !== e3 && (this.low === e3.low && this.high === e3.high);
        } }, { key: "toString", value: function() {
          var e3 = Number(this.high).toString(16), t2 = Number(this.low).toString(16);
          if (t2.length < 8)
            for (var n2 = 8 - t2.length; n2; )
              t2 = "0" + t2, n2--;
          return e3 + t2;
        } }]), e2;
      }(), A = { TEST: { CHINA: { DEFAULT: "wss://wss-dev.tim.qq.com" }, OVERSEA: { DEFAULT: "wss://wss-dev.tim.qq.com" }, SINGAPORE: { DEFAULT: "wss://wsssgp-dev.im.qcloud.com" }, KOREA: { DEFAULT: "wss://wsskr-dev.im.qcloud.com" }, GERMANY: { DEFAULT: "wss://wssger-dev.im.qcloud.com" }, IND: { DEFAULT: "wss://wssind-dev.im.qcloud.com" }, JPN: { DEFAULT: "wss://wssjpn-dev.im.qcloud.com" }, USA: { DEFAULT: "wss://wssusa-dev.im.qcloud.com" } }, PRODUCTION: { CHINA: { DEFAULT: "wss://wss.im.qcloud.com", BACKUP: "wss://wss.tim.qq.com", STAT: "https://events.im.qcloud.com", ANYCAST: "wss://162.14.13.203" }, OVERSEA: { DEFAULT: "wss://wss.im.qcloud.com", BACKUP: "wss://wss.my-imcloud.com", STAT: "https://api.my-imcloud.com" }, SINGAPORE: { DEFAULT: "wss://wsssgp.im.qcloud.com", BACKUP: "wss://wsssgp.my-imcloud.com", STAT: "https://apisgp.my-imcloud.com" }, KOREA: { DEFAULT: "wss://wsskr.im.qcloud.com", BACKUP: "wss://wsskr.my-imcloud.com", STAT: "https://apikr.my-imcloud.com" }, GERMANY: { DEFAULT: "wss://wssger.im.qcloud.com", BACKUP: "wss://wssger.my-imcloud.com", STAT: "https://apiger.my-imcloud.com" }, IND: { DEFAULT: "wss://wssind.my-imcloud.com", BACKUP: "wss://wssind.im.qcloud.com", STAT: "https://apiind.my-imcloud.com" }, JPN: { DEFAULT: "wss://wssjpn.im.qcloud.com", BACKUP: "wss://wssjpn.my-imcloud.com", STAT: "https://apijpn.my-imcloud.com" }, USA: { DEFAULT: "wss://wssusa.im.qcloud.com", BACKUP: "wss://wssusa.my-imcloud.com", STAT: "https://apiusa.my-imcloud.com" } } }, R = { ANDROID: 2, IOS: 3, MAC: 4, WEB: 7, WX_MP: 8, QQ_MP: 9, TT_MP: 10, BAIDU_MP: 11, ALI_MP: 12, IPAD: 13, UNI_NATIVE_APP: 15 }, N = "1.7.3", O = 537048168, G = "CHINA", U = "OVERSEA", P = "SINGAPORE", b = "KOREA", w = "GERMANY", F = "IND", q = "JPN", x = "USA", V = { HOST: { CURRENT: { DEFAULT: "wss://wss.im.qcloud.com", STAT: "https://events.im.qcloud.com" }, setCurrent: function() {
        var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : G;
        this.CURRENT = A.PRODUCTION[e2];
      } }, NAME: { OPEN_IM: "openim", OPEN_IM_MSG_EXT: "openim_msg_ext_http_svc", GROUP: "group_open_http_svc", GROUP_AVCHATROOM: "group_open_avchatroom_http_svc", GROUP_COMMUNITY: "million_group_open_http_svc", GROUP_ATTR: "group_open_attr_http_svc", FRIEND: "sns", PROFILE: "profile", RECENT_CONTACT: "recentcontact", PIC: "openpic", BIG_GROUP_NO_AUTH: "group_open_http_noauth_svc", BIG_GROUP_LONG_POLLING: "group_open_long_polling_http_svc", BIG_GROUP_LONG_POLLING_NO_AUTH: "group_open_long_polling_http_noauth_svc", IM_OPEN_STAT: "imopenstat", WEB_IM: "webim", IM_COS_SIGN: "im_cos_sign_svr", CUSTOM_UPLOAD: "im_cos_msg", HEARTBEAT: "heartbeat", IM_OPEN_PUSH: "im_open_push", IM_OPEN_STATUS: "im_open_status", IM_LONG_MESSAGE: "im_long_msg", IM_CONFIG_MANAGER: "im_sdk_config_mgr", STAT_SERVICE: "StatSvc", OVERLOAD_PUSH: "OverLoadPush", IM_MSG_AUDIT_MGR: "im_msg_audit_mgr", TUIROOM_SVR: "tui_room_svr", IM_OPEN_TRANSLATE: "im_open_translate" }, CMD: { LOGIN: "wslogin", LOGOUT_LONG_POLL: "longpollinglogout", LOGOUT: "wslogout", HELLO: "wshello", STAT_BACKGROUND: "ws_stat_background", STAT_FOREGROUND: "ws_stat_foreground", SET_TOKEN: "ws_stat_settoken", PORTRAIT_GET: "portrait_get_all", PORTRAIT_SET: "portrait_set", GET_LONG_POLL_ID: "getlongpollingid", LONG_POLL: "longpolling", AVCHATROOM_LONG_POLL: "get_msg", ADD_FRIEND: "friend_add", UPDATE_FRIEND: "friend_update", GET_FRIEND_LIST: "friend_get", GET_FRIEND_PROFILE: "friend_get_specified", DELETE_FRIEND: "friend_delete", CHECK_FRIEND: "friend_check", GET_FRIEND_GROUP_LIST: "group_get", RESPOND_FRIEND_APPLICATION: "friend_response", GET_FRIEND_APPLICATION_LIST: "pendency_get", DELETE_FRIEND_APPLICATION: "pendency_delete", REPORT_FRIEND_APPLICATION: "pendency_report", GET_GROUP_APPLICATION: "get_pendency", CREATE_FRIEND_GROUP: "group_add", DELETE_FRIEND_GROUP: "group_delete", UPDATE_FRIEND_GROUP: "group_update", GET_BLACKLIST: "black_list_get", ADD_BLACKLIST: "black_list_add", DELETE_BLACKLIST: "black_list_delete", CREATE_GROUP: "create_group", GET_JOINED_GROUPS: "get_joined_group_list", SET_GROUP_ATTRIBUTES: "set_group_attr", MODIFY_GROUP_ATTRIBUTES: "modify_group_attr", DELETE_GROUP_ATTRIBUTES: "delete_group_attr", CLEAR_GROUP_ATTRIBUTES: "clear_group_attr", GET_GROUP_ATTRIBUTES: "get_group_attr", SEND_MESSAGE: "sendmsg", REVOKE_C2C_MESSAGE: "msgwithdraw", DELETE_C2C_MESSAGE: "delete_c2c_msg_ramble", MODIFY_C2C_MESSAGE: "modify_c2c_msg", MODIFY_C2C_MESSAGE_EXTENSIONS: "set_key_values", GET_C2C_MESSAGE_EXTENSIONS: "get_key_values", SEND_GROUP_MESSAGE: "send_group_msg", REVOKE_GROUP_MESSAGE: "group_msg_recall", DELETE_GROUP_MESSAGE: "delete_group_ramble_msg_by_seq", MODIFY_GROUP_MESSAGE: "modify_group_msg", MODIFY_GROUP_MESSAGE_EXTENSIONS: "group_set_key_values", GET_GROUP_MESSAGE_EXTENSIONS: "group_get_key_values", GET_GROUP_INFO: "get_group_self_member_info", GET_GROUP_MEMBER_INFO: "get_specified_group_member_info", GET_GROUP_MEMBER_LIST: "get_group_member_info", GET_AVCHATROOM_MEMBER_LIST: "get_members", MARK_AVCHATROOM_MEMBER_INFO: "modify_user_info", QUIT_GROUP: "quit_group", CHANGE_GROUP_OWNER: "change_group_owner", DESTROY_GROUP: "destroy_group", ADD_GROUP_MEMBER: "add_group_member", DELETE_GROUP_MEMBER: "delete_group_member", BAN_AVCHATROOM_MEMBER: "ban_group_member", SEARCH_GROUP_BY_ID: "get_group_public_info", APPLY_JOIN_GROUP: "apply_join_group", HANDLE_APPLY_JOIN_GROUP: "handle_apply_join_group", HANDLE_INVITE_JOIN_GROUP: "handle_invite_join_permission_group", HANDLE_GROUP_INVITATION: "handle_invite_join_group", MODIFY_GROUP_INFO: "modify_group_base_info", MODIFY_GROUP_MEMBER_INFO: "modify_group_member_info", DELETE_GROUP_SYSTEM_MESSAGE: "deletemsg", DELETE_GROUP_AT_TIPS: "deletemsg", GET_GROUP_NOTIFY: "get_group_notify", GET_CONVERSATION_LIST: "get", PAGING_GET_CONVERSATION_LIST: "page_get", DELETE_CONVERSATION: "batch_delete", CLEAR_HISTORY_MESSAGE: "clear_msg", PIN_CONVERSATION: "top", SET_CONVERSATION_CUSTOM_DATA: "mark_contact", MARK_CONVERSATION: "mark_contact", CREATE_CONVERSATION_GROUP: "create_contact_group", DELETE_CONVERSATION_GROUP: "del_contact_group", UPDATE_CONVERSATION_GROUP: "update_contact_group", GET_CONVERSATION_GROUP_LIST: "get_contact_group", GET_MESSAGES: "getmsg", GET_C2C_ROAM_MESSAGES: "getroammsg", SET_C2C_PEER_MUTE_NOTIFICATIONS: "set_c2c_peer_mute_notifications", GET_C2C_PEER_MUTE_NOTIFICATIONS: "get_c2c_peer_mute_notifications", GET_GROUP_ROAM_MESSAGES: "group_msg_get", GET_READ_RECEIPT: "get_group_msg_receipt", GET_READ_RECEIPT_DETAIL: "get_group_msg_receipt_detail", SEND_READ_RECEIPT: "group_msg_receipt", SEND_C2C_READ_RECEIPT: "c2c_msg_read_receipt", SET_C2C_MESSAGE_READ: "msgreaded", GET_PEER_READ_TIME: "get_peer_read_time", SET_GROUP_MESSAGE_READ: "msg_read_report", FILE_READ_AND_WRITE_AUTHKEY: "authkey", FILE_UPLOAD: "pic_up", COS_SIGN: "cos", COS_PRE_SIG: "pre_sig", VIDEO_COVER: "video_cover", TIM_WEB_REPORT_V2: "tim_web_report_v2", BIG_DATA_HALLWAY_AUTH_KEY: "authkey", GET_ONLINE_MEMBER_NUM: "get_online_member_num", ALIVE: "alive", MESSAGE_PUSH: "msg_push", MULTI_MESSAGE_PUSH: "multi_msg_push_ws", MESSAGE_PUSH_ACK: "ws_msg_push_ack", STATUS_FORCE_OFFLINE: "stat_forceoffline", DOWNLOAD_MERGER_MESSAGE: "get_relay_json_msg", UPLOAD_MERGER_MESSAGE: "save_relay_json_msg", FETCH_CLOUD_CONTROL_CONFIG: "fetch_config", PUSHED_CLOUD_CONTROL_CONFIG: "push_configv2", FETCH_COMMERCIAL_CONFIG: "fetch_imsdk_purchase_bitsv2", PUSHED_COMMERCIAL_CONFIG: "push_imsdk_purchase_bitsv2", KICK_OTHER: "KickOther", OVERLOAD_NOTIFY: "notify2", SET_ALL_MESSAGE_READ: "read_all_unread_msg", CREATE_TOPIC: "create_topic", DELETE_TOPIC: "destroy_topic", UPDATE_TOPIC_PROFILE: "modify_topic", GET_TOPIC_LIST: "get_topic", SET_SELF_STATUS: "ws_set_custom_status", GET_USER_STATUS: "ws_get_user_status", SUBSCRIBE_USER_STATUS: "ws_status_subscribe", UNSUBSCRIBE_USER_STATUS: "ws_status_unsubscribe", GET_RPOFANITY_LIST: "get_local_words", TRANSLATE_TEXT: "ws_batch_trans_text", UPDATE_GROUP_COUNTER: "update_group_counter", GET_GROUP_COUNTER: "get_group_counter" }, CHANNEL: { SOCKET: 1, XHR: 2, AUTO: 0 }, NAME_VERSION: { openim: "v4", group_open_http_svc: "v4", sns: "v4", profile: "v4", recentcontact: "v4", openpic: "v4", group_open_http_noauth_svc: "v4", group_open_long_polling_http_svc: "v4", group_open_long_polling_http_noauth_svc: "v4", imopenstat: "v4", im_cos_sign_svr: "v4", im_cos_msg: "v4", webim: "v4", im_open_push: "v4", im_open_status: "v4" } }, B = { SEARCH_MSG: new L(0, Math.pow(2, 0)).toString(), SEARCH_GRP_SNS: new L(0, Math.pow(2, 1)).toString(), AVCHATROOM_HISTORY_MSG: new L(0, Math.pow(2, 2)).toString(), GRP_COMMUNITY: new L(0, Math.pow(2, 3)).toString(), MSG_TO_SPECIFIED_GRP_MBR: new L(0, Math.pow(2, 4)).toString(), AVCHATROOM_MBR_LIST: new L(0, Math.pow(2, 6)).toString(), USER_STATUS: new L(0, Math.pow(2, 7)).toString(), CONV_MARK: new L(0, Math.pow(2, 9)).toString(), CONV_GROUP: new L(0, Math.pow(2, 10)).toString(), AVCHATROOM_BAN_MBR: new L(0, Math.pow(2, 11)).toString(), MSG_EXT: new L(0, Math.pow(2, 13)).toString(), GRP_COUNTER: new L(0, Math.pow(2, 15)).toString() }, H = "c2c_text_message", K = "c2c_custom_message", W = "group_text_message", Y = "group_custom_message", j = "user_profile", z = "group_profile", J = "group_member_profile";
      V.HOST.setCurrent(G);
      var X = "undefined" != typeof wx && "function" == typeof wx.getSystemInfoSync && Boolean(wx.getSystemInfoSync().fontSizeSetting), Q = "undefined" != typeof qq && "function" == typeof qq.getSystemInfoSync && Boolean(qq.getSystemInfoSync().fontSizeSetting), Z = "undefined" != typeof tt && "function" == typeof tt.getSystemInfoSync && Boolean(tt.getSystemInfoSync().fontSizeSetting), $ = "undefined" != typeof swan && "function" == typeof swan.getSystemInfoSync && Boolean(swan.getSystemInfoSync().fontSizeSetting), ee = "undefined" != typeof my && "function" == typeof my.getSystemInfoSync && Boolean(my.getSystemInfoSync().fontSizeSetting), te = "undefined" != typeof jd && "function" == typeof jd.getSystemInfoSync, ne = "undefined" != typeof uni && "undefined" == typeof window && "function" == typeof uni.requireNativePlugin, oe = "undefined" != typeof uni, se = X || Q || Z || $ || ee || ne || te, ae = ("undefined" != typeof uni || "undefined" != typeof window) && !se, re = Q ? qq : Z ? tt : $ ? swan : ee ? my : X ? wx : ne ? uni : te ? jd : {}, ie = ae && window && window.navigator && window.navigator.userAgent || "", ue = /(micromessenger|webbrowser)/i.test(ie), ce = /AppleWebKit\/([\d.]+)/i.exec(ie);
      ce && parseFloat(ce.pop());
      var le, pe, de = (le = "WEB", ue ? le = "WEB" : Q ? le = "QQ_MP" : Z ? le = "TT_MP" : $ ? le = "BAIDU_MP" : ee ? le = "ALI_MP" : X ? le = "WX_MP" : ne && (le = "UNI_NATIVE_APP"), R[le]), ge = /iPad/i.test(ie), _e = /iPhone/i.test(ie) && !ge, he = /iPod/i.test(ie), fe = _e || ge || he, ve = (pe = ie.match(/OS (\d+)_/i)) && pe[1] ? pe[1] : null, me = /Android/i.test(ie), Me = function() {
        var e2 = ie.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
        if (!e2)
          return null;
        var t2 = e2[1] && parseFloat(e2[1]), n2 = e2[2] && parseFloat(e2[2]);
        return t2 && n2 ? parseFloat(e2[1] + "." + e2[2]) : t2 || null;
      }();
      !function() {
        var e2 = ie.match(/Chrome\/(\d+)/);
        e2 && e2[1] && parseFloat(e2[1]);
      }();
      var ye = /MSIE/.test(ie) || ie.indexOf("Trident") > -1 && ie.indexOf("rv:11.0") > -1, Ie = function() {
        var e2 = /MSIE\s(\d+)\.\d/.exec(ie), t2 = e2 && parseFloat(e2[1]);
        return !t2 && /Trident\/7.0/i.test(ie) && /rv:11.0/.test(ie) && (t2 = 11), t2;
      }();
      !function() {
        var e2 = ie.match(/TBS\/(\d+)/i);
        if (e2 && e2[1])
          e2[1];
      }();
      var Ce, Te, De = /Windows/i.test(ie), Ee = /MAC OS X/i.test(ie), Se = ae && "undefined" != typeof Worker && !ye, ke = me || fe, Le = ae && void 0 !== window.tencent_cloud_im_csig_flutter_for_web_25F_cy;
      Ce = "undefined" != typeof console ? console : "undefined" != typeof global && global.console ? global.console : "undefined" != typeof window && window.console ? window.console : {};
      for (var Ae = function() {
      }, Re = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "group", "groupCollapsed", "groupEnd", "info", "log", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], Ne = Re.length; Ne--; )
        Te = Re[Ne], console[Te] || (Ce[Te] = Ae);
      var Oe = Ce, Ge = 0, Ue = function() {
        return (/* @__PURE__ */ new Date()).getTime() + Ge;
      }, Pe = function() {
        Ge = 0;
      }, be = function() {
        return Math.floor(Ue() / 1e3);
      }, we = 0;
      function Fe() {
        return Ht() ? "%c TIM %c" : "TIM";
      }
      function qe() {
        var e2, t2 = ((e2 = /* @__PURE__ */ new Date()).setTime(Ue()), e2);
        return t2.toLocaleTimeString("en-US", { hour12: false }) + "." + function(e3) {
          var t3;
          switch (e3.toString().length) {
            case 1:
              t3 = "00" + e3;
              break;
            case 2:
              t3 = "0" + e3;
              break;
            default:
              t3 = e3;
          }
          return t3;
        }(t2.getMilliseconds());
      }
      var xe = { arguments2String: function(e2) {
        var t2 = "";
        if (1 === e2.length)
          t2 = e2[0];
        else
          for (var n2 = 0, o2 = e2.length; n2 < o2; n2++)
            rt(e2[n2]) ? ut(e2[n2]) ? t2 += dt(e2[n2]) : t2 += JSON.stringify(e2[n2]) : t2 += e2[n2], t2 += " ";
        return t2;
      }, _exec: function(e2, t2) {
        Ht() ? Oe[e2](Fe(), "background:#0abf5b; padding:1px; border-radius:3px; color: #fff", "background:transparent", qe(), t2) : Oe[e2]("".concat(Fe(), " ").concat(qe(), " ").concat(t2));
      }, d: function() {
        if (we <= -1) {
          var e2 = this.arguments2String(arguments);
          this._exec("debug", e2);
        }
      }, l: function() {
        if (we <= 0) {
          var e2 = this.arguments2String(arguments);
          this._exec("log", e2);
        }
      }, log: function() {
        if (we <= 0) {
          var e2 = this.arguments2String(arguments);
          this._exec("log", e2);
        }
      }, i: function() {
        if (we <= 1) {
          var e2 = this.arguments2String(arguments);
          this._exec("info", e2);
        }
      }, w: function() {
        if (we <= 2) {
          var e2 = this.arguments2String(arguments);
          this._exec("warn", e2);
        }
      }, e: function() {
        if (we <= 3) {
          var e2 = this.arguments2String(arguments);
          this._exec("error", e2);
        }
      }, setLevel: function(e2) {
        e2 < 4 && this._exec("log", "set level from " + we + " to " + e2), we = e2;
      }, getLevel: function() {
        return we;
      } }, Ve = { JPG: 1, JPEG: 1, GIF: 2, PNG: 3, BMP: 4, UNKNOWN: 255 }, Be = { NICK: "Tag_Profile_IM_Nick", GENDER: "Tag_Profile_IM_Gender", BIRTHDAY: "Tag_Profile_IM_BirthDay", LOCATION: "Tag_Profile_IM_Location", SELFSIGNATURE: "Tag_Profile_IM_SelfSignature", ALLOWTYPE: "Tag_Profile_IM_AllowType", LANGUAGE: "Tag_Profile_IM_Language", AVATAR: "Tag_Profile_IM_Image", MESSAGESETTINGS: "Tag_Profile_IM_MsgSettings", ADMINFORBIDTYPE: "Tag_Profile_IM_AdminForbidType", LEVEL: "Tag_Profile_IM_Level", ROLE: "Tag_Profile_IM_Role" }, He = { UNKNOWN: "Gender_Type_Unknown", FEMALE: "Gender_Type_Female", MALE: "Gender_Type_Male" }, Ke = { NONE: "AdminForbid_Type_None", SEND_OUT: "AdminForbid_Type_SendOut" }, We = { NEED_CONFIRM: "AllowType_Type_NeedConfirm", ALLOW_ANY: "AllowType_Type_AllowAny", DENY_ANY: "AllowType_Type_DenyAny" }, Ye = "JoinedSuccess", je = "WaitAdminApproval", ze = "@TGS#_", Je = "@TOPIC#_", Xe = ["url"], Qe = function(e2) {
        return "map" === ct(e2);
      }, Ze = function(e2) {
        return "file" === ct(e2);
      }, $e = function(e2) {
        return null !== e2 && ("number" == typeof e2 && !isNaN(e2 - 0) || "object" === n(e2) && e2.constructor === Number);
      }, et = function(e2) {
        return "string" == typeof e2;
      }, nt = function(e2) {
        return null !== e2 && "object" === n(e2);
      }, ot = function(e2) {
        if ("object" !== n(e2) || null === e2)
          return false;
        var t2 = Object.getPrototypeOf(e2);
        if (null === t2)
          return true;
        for (var o2 = t2; null !== Object.getPrototypeOf(o2); )
          o2 = Object.getPrototypeOf(o2);
        return t2 === o2;
      }, st = function(e2) {
        return "function" == typeof Array.isArray ? Array.isArray(e2) : "array" === ct(e2);
      }, at = function(e2) {
        return void 0 === e2;
      }, rt = function(e2) {
        return st(e2) || nt(e2);
      }, it = function(e2) {
        return "function" == typeof e2;
      }, ut = function(e2) {
        return e2 instanceof Error;
      }, ct = function(e2) {
        return Object.prototype.toString.call(e2).match(/^\[object (.*)\]$/)[1].toLowerCase();
      }, lt = function(e2) {
        if ("string" != typeof e2)
          return false;
        var t2 = e2[0];
        return !/[^a-zA-Z0-9]/.test(t2);
      };
      Date.now || (Date.now = function() {
        return (/* @__PURE__ */ new Date()).getTime();
      });
      var pt = function e2(t2, n2, o2, s2) {
        if (!rt(t2) || !rt(n2))
          return 0;
        for (var a2, r2 = 0, i2 = Object.keys(n2), u2 = 0, c2 = i2.length; u2 < c2; u2++)
          if (a2 = i2[u2], !(at(n2[a2]) || o2 && o2.includes(a2)))
            if (rt(t2[a2]) && rt(n2[a2]))
              r2 += e2(t2[a2], n2[a2], o2, s2);
            else {
              if (s2 && s2.includes(n2[a2]))
                continue;
              t2[a2] !== n2[a2] && (t2[a2] = n2[a2], r2 += 1);
            }
        return r2;
      }, dt = function(e2) {
        return JSON.stringify(e2, ["message", "code"]);
      }, gt = function(e2) {
        if (0 === e2.length)
          return 0;
        for (var t2 = 0, n2 = 0, o2 = "undefined" != typeof document && void 0 !== document.characterSet ? document.characterSet : "UTF-8"; void 0 !== e2[t2]; )
          n2 += e2[t2++].charCodeAt[t2] <= 255 ? 1 : false === o2 ? 3 : 2;
        return n2;
      }, _t = function(e2) {
        var t2 = e2 || 99999999;
        return Math.round(Math.random() * t2);
      }, ht = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", ft = ht.length, vt = function(e2, t2) {
        for (var n2 in e2)
          if (e2[n2] === t2)
            return true;
        return false;
      }, mt = {}, Mt = function(e2) {
        return -1 === e2.indexOf("http://") || -1 === e2.indexOf("https://") ? "https://" + e2 : e2.replace(/https|http/, "https");
      }, yt = function e2(t2) {
        if (0 === Object.getOwnPropertyNames(t2).length)
          return /* @__PURE__ */ Object.create(null);
        var o2 = Array.isArray(t2) ? [] : /* @__PURE__ */ Object.create(null), s2 = "";
        for (var a2 in t2)
          null !== t2[a2] ? void 0 !== t2[a2] ? (s2 = n(t2[a2]), ["string", "number", "function", "boolean"].indexOf(s2) >= 0 ? o2[a2] = t2[a2] : o2[a2] = e2(t2[a2])) : o2[a2] = void 0 : o2[a2] = null;
        return o2;
      };
      function It(e2, t2) {
        if (!st(e2) || !st(t2))
          return false;
        var n2 = false;
        return t2.forEach(function(t3) {
          var o2 = t3.key, s2 = t3.value, a2 = e2.find(function(e3) {
            return e3.key === o2;
          });
          a2 ? a2.value !== s2 && (a2.value = s2, n2 = true) : (e2.push({ key: o2, value: s2 }), n2 = true);
        }), n2;
      }
      var Ct = function(e2) {
        return e2 === S.GRP_AVCHATROOM;
      }, Tt = function(e2) {
        var t2 = e2.type, n2 = e2.groupID;
        return t2 === S.GRP_COMMUNITY || "".concat(n2).startsWith(ze) && !"".concat(n2).includes(Je);
      }, Dt = function(e2) {
        return "".concat(e2).startsWith(ze) && "".concat(e2).includes(Je);
      }, Et = function(e2) {
        return et(e2) && e2.slice(0, 3) === S.CONV_C2C;
      }, St = function(e2) {
        return et(e2) && e2.slice(0, 5) === S.CONV_GROUP;
      }, kt = function(e2) {
        return et(e2) && e2 === S.CONV_SYSTEM;
      };
      function Lt(e2, t2) {
        var n2 = {};
        return Object.keys(e2).forEach(function(o2) {
          n2[o2] = t2(e2[o2], o2);
        }), n2;
      }
      function At(e2) {
        return se ? new Promise(function(t2, n2) {
          re.getImageInfo({ src: e2, success: function(e3) {
            t2({ width: e3.width, height: e3.height });
          }, fail: function() {
            t2({ width: 0, height: 0 });
          } });
        }) : ye && 9 === Ie ? Promise.resolve({ width: 0, height: 0 }) : new Promise(function(t2, n2) {
          var o2 = new Image();
          o2.onload = function() {
            t2({ width: this.width, height: this.height }), o2 = null;
          }, o2.onerror = function() {
            t2({ width: 0, height: 0 }), o2 = null;
          }, o2.src = e2;
        });
      }
      function Rt() {
        function e2() {
          return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
        }
        return "".concat(e2() + e2()).concat(e2()).concat(e2()).concat(e2()).concat(e2()).concat(e2()).concat(e2());
      }
      function Nt() {
        var e2 = "unknown";
        if (Ee && (e2 = "mac"), De && (e2 = "windows"), fe && (e2 = "ios"), me && (e2 = "android"), se)
          try {
            var t2 = re.getSystemInfoSync().platform;
            void 0 !== t2 && (e2 = t2);
          } catch (n2) {
          }
        return e2;
      }
      function Ot(e2, t2) {
        e2 = e2.split("."), t2 = t2.split(".");
        for (var n2 = Math.max(e2.length, t2.length); e2.length < n2; )
          e2.push("0");
        for (; t2.length < n2; )
          t2.push("0");
        for (var o2 = 0; o2 < n2; o2++) {
          var s2 = parseInt(e2[o2]), a2 = parseInt(t2[o2]);
          if (s2 > a2)
            return 1;
          if (s2 < a2)
            return -1;
        }
        return 0;
      }
      function Gt(e2) {
        var t2 = e2.originUrl, n2 = void 0 === t2 ? void 0 : t2, o2 = e2.originWidth, s2 = e2.originHeight, a2 = e2.min, r2 = void 0 === a2 ? 198 : a2, i2 = parseInt(o2), u2 = parseInt(s2), c2 = { url: void 0, width: 0, height: 0 };
        if ((i2 <= u2 ? i2 : u2) <= r2)
          c2.url = n2, c2.width = i2, c2.height = u2;
        else {
          u2 <= i2 ? (c2.width = Math.ceil(i2 * r2 / u2), c2.height = r2) : (c2.width = r2, c2.height = Math.ceil(u2 * r2 / i2));
          var l2 = n2 && n2.indexOf("?") > -1 ? "".concat(n2, "&") : "".concat(n2, "?");
          c2.url = "".concat(l2, 198 === r2 ? "imageView2/3/w/198/h/198" : "imageView2/3/w/720/h/720");
        }
        return at(n2) ? (c2.url, g(c2, Xe)) : c2;
      }
      function Ut(e2) {
        var t2 = e2[2];
        e2[2] = e2[1], e2[1] = t2;
        for (var n2 = 0; n2 < e2.length; n2++)
          e2[n2].setType(n2);
      }
      function Pt(e2) {
        var t2 = e2.servcmd;
        return t2.slice(t2.indexOf(".") + 1);
      }
      function bt(e2, t2) {
        return Math.round(Number(e2) * Math.pow(10, t2)) / Math.pow(10, t2);
      }
      function wt(e2, t2) {
        return e2.includes(t2);
      }
      function Ft(e2, t2) {
        return e2.includes(t2);
      }
      function qt(e2) {
        return e2.split(Je)[0];
      }
      var xt = function(e2, t2, n2) {
        if (at(t2))
          return "";
        switch (e2) {
          case S.MSG_TEXT:
            return t2.text;
          case S.MSG_IMAGE:
            return n2 ? "[Image]" : "[图片]";
          case S.MSG_LOCATION:
            return n2 ? "[Location]" : "[位置]";
          case S.MSG_AUDIO:
            return n2 ? "[Voice]" : "[语音]";
          case S.MSG_VIDEO:
            return n2 ? "[Video]" : "[视频]";
          case S.MSG_FILE:
            return n2 ? "[File]" : "[文件]";
          case S.MSG_CUSTOM:
            return n2 ? "[Custom Messages]" : "[自定义消息]";
          case S.MSG_GRP_TIP:
            return n2 ? "[Group Notification]" : "[群提示消息]";
          case S.MSG_GRP_SYS_NOTICE:
            return n2 ? "[Group System Message]" : "[群系统通知]";
          case S.MSG_FACE:
            return n2 ? "[Animated Sticker]" : "[动画表情]";
          case S.MSG_MERGER:
            return n2 ? "[Chat Record]" : "[聊天记录]";
          default:
            return "";
        }
      };
      function Vt(e2) {
        return e2 === S.MSG_TEXT || e2 === S.MSG_CUSTOM || e2 === S.MSG_LOCATION || e2 === S.MSG_FACE;
      }
      function Bt(e2) {
        var t2 = [];
        if (!et(e2))
          return t2;
        var n2 = e2.length;
        if (0 === n2)
          return t2;
        for (var o2 = n2 - 1; o2 >= 0; o2--)
          "1" === e2[o2] && t2.push(Math.pow(2, n2 - o2 - 1));
        return t2;
      }
      function Ht() {
        return !ye && !se;
      }
      function Kt(e2) {
        return "the length of userIDList cannot exceed ".concat(e2);
      }
      function Wt(e2, t2) {
        if (e2) {
          var n2 = e2;
          return t2 && (e2.startsWith("http://") ? n2 = e2.replace(/^http:\/\/[^/]+/, t2) : e2.startsWith("https://") && (n2 = e2.replace(/^https:\/\/[^/]+/, t2))), n2;
        }
      }
      var Yt = Object.prototype.hasOwnProperty;
      function jt(e2) {
        if (null == e2)
          return true;
        if ("boolean" == typeof e2)
          return false;
        if ("number" == typeof e2)
          return 0 === e2;
        if ("string" == typeof e2)
          return 0 === e2.length;
        if ("function" == typeof e2)
          return 0 === e2.length;
        if (Array.isArray(e2))
          return 0 === e2.length;
        if (e2 instanceof Error)
          return "" === e2.message;
        if (ot(e2)) {
          for (var t2 in e2)
            if (Yt.call(e2, t2))
              return false;
          return true;
        }
        return !(!Qe(e2) && (n2 = e2, "set" !== ct(n2)) && !Ze(e2)) && 0 === e2.size;
        var n2;
      }
      function zt(e2, t2, n2) {
        if (void 0 === t2)
          return true;
        var o2 = true;
        if (ot(t2))
          Object.keys(t2).forEach(function(s3) {
            var a2 = 1 === e2.length ? e2[0][s3] : void 0;
            o2 = !!Jt(a2, t2[s3], n2, s3) && o2;
          });
        else if (st(t2))
          for (var s2 = 0; s2 < t2.length; s2++)
            o2 = !!Jt(e2[s2], t2[s2], n2, t2[s2].name) && o2;
        if (o2)
          return o2;
        throw new Error("Params validate failed.");
      }
      function Jt(e2, t2, n2, o2) {
        if (void 0 === t2)
          return true;
        var s2 = true;
        if (t2.required && jt(e2) && (xe.e("[".concat(n2, '] Missing required params: "').concat(o2, '".')), s2 = false), !jt(e2)) {
          var a2 = ct(e2), r2 = t2.type.toLowerCase();
          a2 !== r2 && ("asyncfunction" === a2 && "function" === r2 || (xe.e("[".concat(n2, '] Invalid params: type check failed for "').concat(o2, '".Expected ').concat(t2.type, ".")), s2 = false));
        }
        return t2.validator && !t2.validator(e2) && (xe.e("[".concat(n2, "] Invalid params: custom validator check failed for params.")), s2 = false), s2;
      }
      var Xt, Qt = { UNSEND: "unSend", SUCCESS: "success", FAIL: "fail" }, Zt = { NOT_START: "notStart", PENDING: "pending", RESOLVED: "resolved", REJECTED: "rejected" }, $t = function(e2) {
        if (!e2)
          return false;
        if (Et(e2) || St(e2) || kt(e2))
          return true;
        var t2 = Sn("InvalidConversationID", e2);
        return t2 && xe.w(t2), false;
      }, en = function(e2) {
        "" !== e2.desc && "" !== Sn("API_REFER") && xe.w("[".concat(e2.api, "] | ").concat(e2.param, " | ").concat(e2.desc, ", ").concat(Sn("API_REFER")).concat(e2.api));
      }, tn = function() {
        return Sn("StringRequiredLog");
      }, nn = function(e2) {
        return Sn("NonEmptyStringRequiredLog", e2);
      }, on = function() {
        return Sn("NumberRequiredLog");
      }, sn = function() {
        return Sn("UndefinedNotAllowedLog");
      }, an = function() {
        return Sn("FileRequiredLog");
      }, rn = function() {
        return Sn("FunctionRequiredLog");
      }, un = function() {
        return Sn("ArrayRequiredLog");
      }, cn = function() {
        return Sn("NonEmptyArrayLog");
      }, ln = function() {
        return Sn("CallbackMissingLog");
      }, pn = function() {
        return Sn("PositiveIntegerRequiredLog");
      }, dn = function(e2, t2) {
        return Sn("StringNotLongerThanLog", e2, t2);
      }, gn = function(e2, t2) {
        return Sn("NumberLessThanLog", e2, t2);
      }, _n = function(e2) {
        return Sn("KeyValueStringRequiredLog", e2);
      }, hn = function() {
        return Sn("PlainObjectRequiredLog");
      }, fn = function() {
        return Sn("NonEmptyContentRequiredLog");
      }, vn = function() {
        return Sn("FileNotSelectedLog");
      }, mn = function() {
        return Sn("MessageInstanceRequiredLog");
      }, Mn = function() {
        return Sn("NonAnonymousFunctionLog");
      }, yn = function() {
        return Sn("MessageExtensionNotAvailableLog");
      }, In = { type: "String", required: true }, Cn = { type: "Array", required: true }, Tn = { type: "Object", required: true }, Dn = { type: "Boolean", required: true }, En = { type: "number", required: true }, Sn = null, kn = { hookGetAPITips: function(e2) {
        Sn = e2;
      }, login: { userID: In, userSig: In }, addToBlacklist: { userIDList: Cn }, removeFromBlacklist: { userIDList: Cn }, on: [{ name: "eventName", type: "String", validator: function(e2) {
        return "string" == typeof e2 && 0 !== e2.length || (en({ api: "on", param: "eventName", desc: nn("eventName") }), false);
      } }, { name: "handler", type: "Function", validator: function(e2) {
        return "function" != typeof e2 ? (en({ api: "on", param: "handler", desc: rn() }), false) : ("" === e2.name && en({ api: "on", param: "handler", desc: Mn() }), true);
      } }], once: [{ name: "eventName", type: "String", validator: function(e2) {
        return "string" == typeof e2 && 0 !== e2.length || (en({ api: "once", param: "eventName", desc: nn("eventName") }), false);
      } }, { name: "handler", type: "Function", validator: function(e2) {
        return "function" != typeof e2 ? (en({ api: "once", param: "handler", desc: rn() }), false) : ("" === e2.name && en({ api: "once", param: "handler", desc: Mn() }), true);
      } }], off: [{ name: "eventName", type: "String", validator: function(e2) {
        return "string" == typeof e2 && 0 !== e2.length || (en({ api: "off", param: "eventName", desc: nn("eventName") }), false);
      } }, { name: "handler", type: "Function", validator: function(e2) {
        return "function" != typeof e2 ? (en({ api: "off", param: "handler", desc: rn() }), false) : ("" === e2.name && en({ api: "off", param: "handler", desc: Mn() }), true);
      } }], sendMessage: [t({ name: "message" }, Tn)], setMessageExtensions: [t(t({ name: "message" }, Tn), {}, { validator: function(e2) {
        return e2.status === Qt.SUCCESS && true === e2.isSupportExtension || (en({ api: "setMessageExtensions", param: "message", desc: yn() }), false);
      } }), t({ name: "extensions" }, Cn)], getMessageExtensions: [t(t({ name: "message" }, Tn), {}, { validator: function(e2) {
        return e2.status === Qt.SUCCESS && true === e2.isSupportExtension || (en({ api: "getMessageExtensions", param: "message", desc: yn() }), false);
      } })], deleteMessageExtensions: [t(t({ name: "message" }, Tn), {}, { validator: function(e2) {
        return e2.status === Qt.SUCCESS && true === e2.isSupportExtension || (en({ api: "deleteMessageExtensions", param: "message", desc: yn() }), false);
      } })], getMessageList: { conversationID: t(t({}, In), {}, { validator: function(e2) {
        return $t(e2);
      } }), nextReqMessageID: { type: "String" }, count: { type: "Number", validator: function(e2) {
        return !(!at(e2) && !/^[1-9][0-9]*$/.test(e2)) || (en({ api: "getMessageList", param: "count", desc: pn() }), false);
      } } }, getMessageListHopping: { conversationID: t(t({}, In), {}, { validator: function(e2) {
        return $t(e2);
      } }), sequence: { type: "Number" }, time: { type: "Number" }, direction: { type: "Number", validator: function(e2) {
        return !(!at(e2) && 0 !== e2 && 1 !== e2) || (en({ api: "getMessageListHopping", param: "direction", desc: Sn("0Or1RequiredLog") }), false);
      } }, count: { type: "Number", validator: function(e2) {
        return !(!at(e2) && !/^[1-9][0-9]*$/.test(e2)) || (en({ api: "getMessageListHopping", param: "count", desc: pn }), false);
      } } }, setMessageRead: { conversationID: t(t({}, In), {}, { validator: function(e2) {
        return $t(e2);
      } }) }, setAllMessageRead: { scope: { type: "String", required: false, validator: function(e2) {
        return !e2 || -1 !== [S.READ_ALL_C2C_MSG, S.READ_ALL_GROUP_MSG, S.READ_ALL_MSG].indexOf(e2) || (en({ api: "setAllMessageRead", param: "scope", desc: "TIM.TYPES.READ_ALL_C2C_MSG or TIM.TYPES.READ_ALL_GROUP_MSG or TIM.TYPES.READ_ALL_MSG required" }), false);
      } } }, getConversationProfile: [t(t({ name: "conversationID" }, In), {}, { validator: function(e2) {
        return $t(e2);
      } })], clearHistoryMessage: [t(t({ name: "conversationID" }, In), {}, { validator: function(e2) {
        return $t(e2);
      } })], pinConversation: { conversationID: t(t({}, In), {}, { validator: function(e2) {
        return $t(e2);
      } }), isPinned: t({}, Dn) }, setConversationCustomData: { conversationIDList: t({}, Cn), customData: { type: "String", validator: function(e2) {
        return et(e2) ? !(e2.length > 256) || (en({ api: "setConversationCustomData", param: "customData", desc: dn("customData", 256) }), false) : (en({ api: "setConversationCustomData", param: "customData", desc: tn() }), false);
      } } }, markConversation: { conversationIDList: t({}, Cn), markType: { type: "number", validator: function(e2) {
        return $e(e2) ? e2 <= 0 ? (en({ api: "markConversation", param: "markType", desc: (t2 = "markType", n2 = 0, Sn("NumberGreaterThanLog", t2, n2)) }), false) : !(e2 >= Math.pow(2, 64)) || (en({ api: "markConversation", param: "markType", desc: gn("markType", "Math.pow(2,64)") }), false) : (en({ api: "markConversation", param: "markType", desc: on() }), false);
        var t2, n2;
      } }, enableMark: t({}, Dn) }, createConversationGroup: { conversationIDList: t({}, Cn), groupName: t(t({}, In), {}, { validator: function(e2) {
        return !!e2 && (!(e2.length > 32) || (en({ api: "createConversationGroup", param: "groupName", desc: dn("groupName", 32) }), false));
      } }) }, deleteConversationGroup: [t({ name: "groupName" }, In)], renameConversationGroup: { oldName: t({}, In), newName: t(t({}, In), {}, { validator: function(e2) {
        return !!e2 && (!(e2.length > 32) || (en({ api: "renameConversationGroup", param: "newName", desc: dn("newName", 32) }), false));
      } }) }, addConversationsToGroup: { conversationIDList: t({}, Cn), groupName: t({}, In) }, deleteConversationsFromGroup: { conversationIDList: t({}, Cn), groupName: t({}, In) }, getGroupList: { groupProfileFilter: { type: "Array" } }, getGroupProfile: { groupID: In, groupCustomFieldFilter: { type: "Array" }, memberCustomFieldFilter: { type: "Array" } }, getGroupProfileAdvance: { groupIDList: Cn }, createGroup: { name: In }, joinGroup: { groupID: In, type: { type: "String" }, applyMessage: { type: "String" } }, quitGroup: [t({ name: "groupID" }, In)], handleApplication: { message: Tn, handleAction: In, handleMessage: { type: "String" } }, changeGroupOwner: { groupID: In, newOwnerID: In }, updateGroupProfile: { groupID: In, muteAllMembers: { type: "Boolean" } }, dismissGroup: [t({ name: "groupID" }, In)], searchGroupByID: [t({ name: "groupID" }, In)], initGroupAttributes: { groupID: In, groupAttributes: t(t({}, Tn), {}, { validator: function(e2) {
        var t2 = true;
        return Object.keys(e2).forEach(function(n2) {
          if (!et(e2[n2]))
            return en({ api: "initGroupAttributes", param: "groupAttributes", desc: _n("value") }), t2 = false;
        }), t2;
      } }) }, setGroupAttributes: { groupID: In, groupAttributes: t(t({}, Tn), {}, { validator: function(e2) {
        var t2 = true;
        return Object.keys(e2).forEach(function(n2) {
          if (!et(e2[n2]))
            return en({ api: "setGroupAttributes", param: "groupAttributes", desc: _n("value") }), t2 = false;
        }), t2;
      } }) }, deleteGroupAttributes: { groupID: In, keyList: { type: "Array", validator: function(e2) {
        if (at(e2) || !st(e2))
          return en({ api: "deleteGroupAttributes", param: "keyList", desc: un() }), false;
        if (!jt(e2)) {
          var t2 = true;
          return e2.forEach(function(e3) {
            if (!et(e3))
              return en({ api: "deleteGroupAttributes", param: "keyList", desc: Sn("StringArrayRequiredLog") }), t2 = false;
          }), t2;
        }
        return true;
      } } }, getGroupAttributes: { groupID: In, keyList: { type: "Array", validator: function(e2) {
        if (at(e2) || !st(e2))
          return en({ api: "getGroupAttributes", param: "keyList", desc: un() }), false;
        if (!jt(e2)) {
          var t2 = true;
          return e2.forEach(function(e3) {
            if (!et(e3))
              return en({ api: "getGroupAttributes", param: "keyList", desc: _n("key") }), t2 = false;
          }), t2;
        }
        return true;
      } } }, setGroupCounters: { groupID: In, counters: Tn }, increaseGroupCounter: { groupID: In, key: In, value: En }, decreaseGroupCounter: { groupID: In, key: In, value: En }, getGroupCounters: { groupID: In }, getGroupMemberList: { groupID: In, count: { type: "Number" } }, getGroupMemberProfile: { groupID: In, userIDList: Cn, memberCustomFieldFilter: { type: "Array" } }, addGroupMember: { groupID: In, userIDList: Cn }, setGroupMemberRole: { groupID: In, userID: In, role: In }, setGroupMemberMuteTime: { groupID: In, userID: In, muteTime: { type: "Number", validator: function(e2) {
        return e2 >= 0;
      } } }, setGroupMemberNameCard: { groupID: In, userID: { type: "String" }, nameCard: { type: "String", validator: function(e2) {
        return et(e2) ? (e2.length, true) : (en({ api: "setGroupMemberNameCard", param: "nameCard", desc: tn() }), false);
      } } }, setGroupMemberCustomField: { groupID: In, userID: { type: "String" }, memberCustomField: Cn }, deleteGroupMember: { groupID: In }, markGroupMemberList: { groupID: In, markType: { type: "number", validator: function(e2) {
        return $e(e2) ? !(e2 < 1e3) || (en({ api: "markGroupMemberList", param: "markType", desc: (t2 = "markType", n2 = 1e3, Sn("NumberGreaterOrEqualLog", t2, n2)) }), false) : (en({ api: "markGroupMemberList", param: "markType", desc: on() }), false);
        var t2, n2;
      } }, userIDList: t({}, Cn), enableMark: t({}, Dn) }, createTextMessage: { to: In, conversationType: In, payload: t(t({}, Tn), {}, { validator: function(e2) {
        return ot(e2) ? et(e2.text) ? 0 !== e2.text.length || (en({ api: "createTextMessage", param: "payload.text", desc: fn() }), false) : (en({ api: "createTextMessage", param: "payload.text", desc: tn() }), false) : (en({ api: "createTextMessage", param: "payload", desc: hn() }), false);
      } }) }, createTextAtMessage: { to: In, conversationType: In, payload: t(t({}, Tn), {}, { validator: function(e2) {
        return ot(e2) ? et(e2.text) ? 0 === e2.text.length ? (en({ api: "createTextAtMessage", param: "payload.text", desc: fn() }), false) : !(e2.atUserList && !st(e2.atUserList)) || (en({ api: "createTextAtMessage", param: "payload.atUserList", desc: un() }), false) : (en({ api: "createTextAtMessage", param: "payload.text", desc: tn() }), false) : (en({ api: "createTextAtMessage", param: "payload", desc: hn() }), false);
      } }) }, createCustomMessage: { to: In, conversationType: In, payload: t(t({}, Tn), {}, { validator: function(e2) {
        return ot(e2) ? e2.data && !et(e2.data) ? (en({ api: "createCustomMessage", param: "payload.data", desc: tn() }), false) : e2.description && !et(e2.description) ? (en({ api: "createCustomMessage", param: "payload.description", desc: tn() }), false) : !(e2.extension && !et(e2.extension)) || (en({ api: "createCustomMessage", param: "payload.extension", desc: tn() }), false) : (en({ api: "createCustomMessage", param: "payload", desc: hn() }), false);
      } }) }, createImageMessage: { to: In, conversationType: In, payload: t(t({}, Tn), {}, { validator: function(e2) {
        if (!ot(e2))
          return en({ api: "createImageMessage", param: "payload", desc: hn() }), false;
        if (at(e2.file))
          return en({ api: "createImageMessage", param: "payload.file", desc: sn() }), false;
        if (ae) {
          if (!(e2.file instanceof HTMLInputElement || Ze(e2.file)))
            return ot(e2.file) && "undefined" != typeof uni ? 0 !== e2.file.tempFilePaths.length && 0 !== e2.file.tempFiles.length || (en({ api: "createImageMessage", param: "payload.file", desc: vn() }), false) : (en({ api: "createImageMessage", param: "payload.file", desc: an() }), false);
          if (e2.file instanceof HTMLInputElement && 0 === e2.file.files.length)
            return en({ api: "createImageMessage", param: "payload.file", desc: vn() }), false;
        }
        return true;
      }, onProgress: { type: "Function", required: false, validator: function(e2) {
        return at(e2) && en({ api: "createImageMessage", param: "onProgress", desc: ln() }), true;
      } } }) }, createAudioMessage: { to: In, conversationType: In, payload: t(t({}, Tn), {}, { validator: function(e2) {
        return !!ot(e2) || (en({ api: "createAudioMessage", param: "payload", desc: hn() }), false);
      } }), onProgress: { type: "Function", required: false, validator: function(e2) {
        return at(e2) && en({ api: "createAudioMessage", param: "onProgress", desc: ln() }), true;
      } } }, createVideoMessage: { to: In, conversationType: In, payload: t(t({}, Tn), {}, { validator: function(e2) {
        if (!ot(e2))
          return en({ api: "createVideoMessage", param: "payload", desc: hn() }), false;
        if (at(e2.file))
          return en({ api: "createVideoMessage", param: "payload.file", desc: sn() }), false;
        if (ae) {
          if (!(e2.file instanceof HTMLInputElement || Ze(e2.file)))
            return ot(e2.file) && "undefined" != typeof uni ? !!Ze(e2.file.tempFile) || (en({ api: "createVideoMessage", param: "payload.file", desc: vn() }), false) : (en({ api: "createVideoMessage", param: "payload.file", desc: an() }), false);
          if (e2.file instanceof HTMLInputElement && 0 === e2.file.files.length)
            return en({ api: "createVideoMessage", param: "payload.file", desc: vn() }), false;
        }
        return true;
      } }), onProgress: { type: "Function", required: false, validator: function(e2) {
        return at(e2) && en({ api: "createVideoMessage", param: "onProgress", desc: ln() }), true;
      } } }, createFaceMessage: { to: In, conversationType: In, payload: t(t({}, Tn), {}, { validator: function(e2) {
        return ot(e2) ? $e(e2.index) ? !!et(e2.data) || (en({ api: "createFaceMessage", param: "payload.data", desc: tn() }), false) : (en({ api: "createFaceMessage", param: "payload.index", desc: on() }), false) : (en({ api: "createFaceMessage", param: "payload", desc: hn() }), false);
      } }) }, createFileMessage: { to: In, conversationType: In, payload: t(t({}, Tn), {}, { validator: function(e2) {
        if (!ot(e2))
          return en({ api: "createFileMessage", param: "payload", desc: hn() }), false;
        if (at(e2.file))
          return en({ api: "createFileMessage", param: "payload.file", desc: sn() }), false;
        if (ae) {
          if (!(e2.file instanceof HTMLInputElement || Ze(e2.file)))
            return ot(e2.file) && "undefined" != typeof uni ? 0 !== e2.file.tempFilePaths.length && 0 !== e2.file.tempFiles.length || (en({ api: "createFileMessage", param: "payload.file", desc: vn() }), false) : (en({ api: "createFileMessage", param: "payload.file", desc: an() }), false);
          if (e2.file instanceof HTMLInputElement && 0 === e2.file.files.length)
            return en({ api: "createFileMessage", param: "payload.file", desc: vn() }), false;
        }
        return true;
      } }), onProgress: { type: "Function", required: false, validator: function(e2) {
        return at(e2) && en({ api: "createFileMessage", param: "onProgress", desc: ln() }), true;
      } } }, createLocationMessage: { to: In, conversationType: In, payload: t(t({}, Tn), {}, { validator: function(e2) {
        return ot(e2) ? et(e2.description) ? $e(e2.longitude) ? !!$e(e2.latitude) || (en({ api: "createLocationMessage", param: "payload.latitude", desc: on() }), false) : (en({ api: "createLocationMessage", param: "payload.longitude", desc: on() }), false) : (en({ api: "createLocationMessage", param: "payload.description", desc: tn() }), false) : (en({ api: "createLocationMessage", param: "payload", desc: hn() }), false);
      } }) }, createMergerMessage: { to: In, conversationType: In, payload: t(t({}, Tn), {}, { validator: function(e2) {
        if (jt(e2.messageList))
          return en({ api: "createMergerMessage", param: "payload.messageList", desc: cn() }), false;
        if (jt(e2.compatibleText))
          return en({ api: "createMergerMessage", param: "payload.compatibleText", desc: nn("compatibleText") }), false;
        var t2 = false;
        return e2.messageList.forEach(function(e3) {
          e3.status === Qt.FAIL && (t2 = true);
        }), !t2 || (en({ api: "createMergerMessage", param: "payload.messageList", desc: Sn("MergeFailedMessageLog") }), false);
      } }) }, revokeMessage: [t(t({ name: "message" }, Tn), {}, { validator: function(e2) {
        return jt(e2) ? (en({ api: "revokeMessage", param: "message", desc: mn() }), false) : e2.conversationType === S.CONV_SYSTEM ? (en({ api: "revokeMessage", param: "message", desc: Sn("MessageCanBeRevokedDesc") }), false) : true !== e2.isRevoked || (en({ api: "revokeMessage", param: "message", desc: Sn("MessageRevokedLog") }), false);
      } })], deleteMessage: [t(t({ name: "messageList" }, Cn), {}, { validator: function(e2) {
        return !jt(e2) || (en({ api: "deleteMessage", param: "messageList", desc: cn() }), false);
      } })], translateText: { sourceTextList: Cn, sourceLanguage: In, targetLanguage: In }, modifyMessage: [t(t({ name: "message" }, Tn), {}, { validator: function(e2) {
        return jt(e2) ? (en({ api: "modifyMessage", param: "message", desc: mn() }), false) : e2.conversationType === S.CONV_SYSTEM ? (en({ api: "modifyMessage", param: "message", desc: Sn("MessageCanBeModifiedLog") }), false) : true !== e2._onlineOnlyFlag || (en({ api: "modifyMessage", param: "message", desc: Sn("OnlineMessageNotSupportLog") }), false);
      } })], getUserProfile: { userIDList: { type: "Array", validator: function(e2) {
        return st(e2) ? (0 === e2.length && en({ api: "getUserProfile", param: "userIDList", desc: cn() }), true) : (en({ api: "getUserProfile", param: "userIDList", desc: un() }), false);
      } } }, updateMyProfile: { profileCustomField: { type: "Array", validator: function(e2) {
        return !!at(e2) || (!!st(e2) || (en({ api: "updateMyProfile", param: "profileCustomField", desc: un() }), false));
      } } }, setSelfStatus: { customStatus: { type: "String", validator: function(e2) {
        return !!et(e2) || (en({ api: "setSelfStatus", param: "customStatus", desc: tn() }), false);
      } } }, getUserStatus: { userIDList: { type: "Array", validator: function(e2) {
        return st(e2) ? 0 !== e2.length || (en({ api: "getUserStatus", param: "userIDList", desc: cn() }), false) : (en({ api: "getUserStatus", param: "userIDList", desc: un() }), false);
      } } }, subscribeUserStatus: { userIDList: { type: "Array", validator: function(e2) {
        return st(e2) ? 0 !== e2.length || (en({ api: "subscribeUserStatus", param: "userIDList", desc: cn() }), false) : (en({ api: "subscribeUserStatus", param: "userIDList", desc: un() }), false);
      } } }, unsubscribeUserStatus: { userIDList: { type: "Array", validator: function(e2) {
        return !e2 || (!!st(e2) || (en({ api: "subscribeUserStatus", param: "userIDList", desc: un() }), false));
      } } }, addFriend: { to: In, source: { type: "String", required: true, validator: function(e2) {
        return !!e2 && (e2.startsWith("AddSource_Type_") ? !(e2.replace("AddSource_Type_", "").length > 8) || (en({ api: "addFriend", param: "source", desc: dn("keyword", 8) }), false) : (en({ api: "addFriend", param: "source", desc: Sn("SourcePrefixLog") }), false));
      } }, remark: { type: "String", required: false, validator: function(e2) {
        return !(et(e2) && e2.length > 96) || (en({ api: "addFriend", param: "remark", desc: dn("remark", 96) }), false);
      } } }, deleteFriend: { userIDList: Cn }, checkFriend: { userIDList: Cn }, getFriendProfile: { userIDList: Cn }, updateFriend: { userID: In, remark: { type: "String", required: false, validator: function(e2) {
        return !(et(e2) && e2.length > 96) || (en({ api: "updateFriend", param: "remark", desc: dn("remark", 96) }), false);
      } }, friendCustomField: { type: "Array", required: false, validator: function(e2) {
        if (e2) {
          if (!st(e2))
            return en({ api: "updateFriend", param: "friendCustomField", desc: un() }), false;
          var t2 = true;
          return e2.forEach(function(e3) {
            return et(e3.key) && -1 !== e3.key.indexOf("Tag_SNS_Custom") ? et(e3.value) ? e3.key.replace("Tag_SNS_Custom_", "").length > 8 ? (en({ api: "updateFriend", param: "friendCustomField", desc: dn("keyword", 8) }), t2 = false) : void 0 : (en({ api: "updateFriend", param: "friendCustomField", desc: _n("value") }), t2 = false) : (en({ api: "updateFriend", param: "friendCustomField", desc: Sn("FriendCustomFieldPrefixLog") }), t2 = false);
          }), t2;
        }
        return true;
      } } }, acceptFriendApplication: { userID: In }, refuseFriendApplication: { userID: In }, deleteFriendApplication: { userID: In }, createFriendGroup: { name: In }, deleteFriendGroup: { name: In }, addToFriendGroup: { name: In, userIDList: Cn }, removeFromFriendGroup: { name: In, userIDList: Cn }, renameFriendGroup: { oldName: In, newName: In }, sendMessageReadReceipt: [{ name: "messageList", type: "Array", validator: function(e2) {
        return st(e2) ? 0 !== e2.length || (en({ api: "sendMessageReadReceipt", param: "messageList", desc: cn() }), false) : (en({ api: "sendMessageReadReceipt", param: "messageList", desc: un() }), false);
      } }], getMessageReadReceiptList: [{ name: "messageList", type: "Array", validator: function(e2) {
        return st(e2) ? 0 !== e2.length || (en({ api: "getMessageReadReceiptList", param: "messageList", desc: cn() }), false) : (en({ api: "getMessageReadReceiptList", param: "messageList", desc: un() }), false);
      } }], createTopicInCommunity: { groupID: In, topicName: In }, deleteTopicFromCommunity: { groupID: In, topicIDList: { type: "Array", validator: function(e2) {
        return !e2 || (!!st(e2) || (en({ api: "deleteTopicFromCommunity", param: "topicIDList", desc: un() }), false));
      } } }, updateTopicProfile: { groupID: In, topicID: In }, getTopicList: { groupID: In, topicIDList: { type: "Array", validator: function(e2) {
        return !e2 || (!!st(e2) || (en({ api: "getTopicList", param: "topicIDList", desc: un() }), false));
      } } } }, Ln = { login: 1, logout: 1, on: 1, once: 1, off: 1, setLogLevel: 1, registerPlugin: 1, destroy: 1, createTextMessage: 1, createTextAtMessage: 1, createImageMessage: 1, createAudioMessage: 1, createVideoMessage: 1, createCustomMessage: 1, createFaceMessage: 1, createFileMessage: 1, createLocationMessage: 1, createMergerMessage: 1, downloadMergerMessage: 1, createForwardMessage: 1, sendMessage: 1, resendMessage: 1, revokeMessage: 1, deleteMessage: 1, translateText: 1, modifyMessage: 1, sendMessageReadReceipt: 1, getGroupMessageReadMemberList: 1, getMessageReadReceiptList: 1, setMessageExtensions: 1, getMessageExtensions: 1, deleteMessageExtensions: 1, getMessageList: 1, findMessage: 1, getMessageListHopping: 1, setMessageRead: 1, setAllMessageRead: 1, getConversationList: 1, getConversationProfile: 1, deleteConversation: 1, pinConversation: 1, getTotalUnreadMessageCount: 1, setConversationCustomData: 1, markConversation: 1, createConversationGroup: 1, getConversationGroupList: 1, deleteConversationGroup: 1, renameConversationGroup: 1, addConversationsToGroup: 1, deleteConversationsFromGroup: 1, clearHistoryMessage: 1, getGroupList: 1, getGroupProfile: 1, createGroup: 1, joinGroup: 1, updateGroupProfile: 1, quitGroup: 1, dismissGroup: 1, changeGroupOwner: 1, searchGroupByID: 1, setMessageRemindType: 1, getGroupApplicationList: 1, handleGroupApplication: 1, initGroupAttributes: 1, setGroupAttributes: 1, deleteGroupAttributes: 1, getGroupAttributes: 1, setGroupCounters: 1, increaseGroupCounter: 1, decreaseGroupCounter: 1, getGroupCounters: 1, getJoinedCommunityList: 1, createTopicInCommunity: 1, deleteTopicFromCommunity: 1, updateTopicProfile: 1, getTopicList: 1, getGroupMemberProfile: 1, getGroupMemberList: 1, addGroupMember: 1, deleteGroupMember: 1, setGroupMemberNameCard: 1, setGroupMemberMuteTime: 1, setGroupMemberRole: 1, setGroupMemberCustomField: 1, getGroupOnlineMemberCount: 1, markGroupMemberList: 1, getMyProfile: 1, getUserProfile: 1, updateMyProfile: 1, setSelfStatus: 1, getUserStatus: 1, subscribeUserStatus: 1, unsubscribeUserStatus: 1, getBlacklist: 1, addToBlacklist: 1, removeFromBlacklist: 1, getFriendList: 1, addFriend: 1, deleteFriend: 1, checkFriend: 1, updateFriend: 1, getFriendProfile: 1, getFriendApplicationList: 1, refuseFriendApplication: 1, deleteFriendApplication: 1, acceptFriendApplication: 1, setFriendApplicationRead: 1, getFriendGroupList: 1, createFriendGroup: 1, renameFriendGroup: 1, deleteFriendGroup: 1, addToFriendGroup: 1, removeFromFriendGroup: 1, callExperimentalAPI: 1 }, An = 1, Rn = 2, Nn = 3, On = 4, Gn = 6, Un = 7, Pn = 8, bn = 9, wn = 10, Fn = 11, qn = 12, xn = 13, Vn = 14, Bn = 15, Hn = 16, Kn = 17, Wn = 18, Yn = 19, jn = 20, zn = 21, Jn = 22, Xn = 23, Qn = 24, Zn = 25, $n = 26, eo = 27, to = 28, no = 29, oo = 30, so = 31, ao = 32, ro = function() {
        function e2(t2) {
          o(this, e2), this._m = t2, this._n = "";
        }
        return a(e2, [{ key: "isLoggedIn", value: function() {
          return this._m.getModule(qn).isLoggedIn();
        } }, { key: "isOversea", value: function() {
          return this._m.getModule(qn).isOversea();
        } }, { key: "isPrivateNetWork", value: function() {
          return this._m.getModule(qn).isPrivateNetWork();
        } }, { key: "getFileDownloadProxy", value: function() {
          return this._m.getModule(qn).getFileDownloadProxy();
        } }, { key: "getMyUserID", value: function() {
          return this._m.getModule(qn).getUserID();
        } }, { key: "getMyTinyID", value: function() {
          return this._m.getModule(qn).getTinyID();
        } }, { key: "getSDKAppID", value: function() {
          return this._m.getModule(qn).getSDKAppID();
        } }, { key: "isIntl", value: function() {
          return this._m.getModule(qn).isIntl();
        } }, { key: "isDevMode", value: function() {
          return this._m.getModule(qn).isDevMode();
        } }, { key: "getModule", value: function(e3) {
          return this._m.getModule(e3);
        } }, { key: "getPlatform", value: function() {
          return de;
        } }, { key: "getNetworkType", value: function() {
          return this._m.getModule(Bn).getNetworkType();
        } }, { key: "probeNetwork", value: function(e3) {
          return this._m.getModule(Bn).probe(e3);
        } }, { key: "getCloudConfig", value: function(e3) {
          return this._m.getModule(Xn).getCloudConfig(e3);
        } }, { key: "emitOuterEvent", value: function(e3, t2) {
          this._m.getOuterEmitterInstance().emit(e3, t2);
        } }, { key: "emitInnerEvent", value: function(e3, t2) {
          this._m.getInnerEmitterInstance().emit(e3, t2);
        } }, { key: "getInnerEmitterInstance", value: function() {
          return this._m.getInnerEmitterInstance();
        } }, { key: "generateTjgID", value: function(e3) {
          return this._m.getModule(qn).getTinyID() + "-" + e3.random;
        } }, { key: "filterModifiedMessage", value: function(e3) {
          if (!jt(e3)) {
            var t2 = e3.filter(function(e4) {
              return true === e4.isModified;
            });
            t2.length > 0 && this.emitOuterEvent(E.MESSAGE_MODIFIED, t2);
          }
        } }, { key: "filterUnmodifiedMessage", value: function(e3) {
          return jt(e3) ? [] : e3.filter(function(e4) {
            return false === e4.isModified;
          });
        } }, { key: "request", value: function(e3) {
          return this._m.getModule(jn).request(e3);
        } }, { key: "canIUse", value: function(e3) {
          return this._m.getModule(eo).canIUse(e3);
        } }, { key: "getErrorMessage", value: function(e3, t2, n2) {
          return this._m.getErrorMessage(e3, t2, n2);
        } }, { key: "outputWarning", value: function(e3, t2, n2) {
          var o2 = this.getErrorMessage(e3, t2, n2);
          o2 && xe.w(o2);
        } }]), e2;
      }(), io = "wslogin", uo = "wslogout", co = "wshello", lo = "KickOther", po = "getmsg", go = "authkey", _o = "sendmsg", ho = "send_group_msg", fo = "portrait_get_all", vo = "portrait_set", mo = "black_list_get", Mo = "black_list_add", yo = "black_list_delete", Io = "msgwithdraw", Co = "msgreaded", To = "set_c2c_peer_mute_notifications", Do = "get_c2c_peer_mute_notifications", Eo = "getroammsg", So = "get_peer_read_time", ko = "delete_c2c_msg_ramble", Lo = "modify_c2c_msg", Ao = "set_key_values", Ro = "get_key_values", No = "page_get", Oo = "get", Go = "batch_delete", Uo = "clear_msg", Po = "top", bo = "deletemsg", wo = "set_conv_custom_data", Fo = "mark_contact", qo = "create_contact_group", xo = "del_contact_group", Vo = "update_contact_group", Bo = "add_conv_to_group", Ho = "del_conv_from_group", Ko = "get_contact_group", Wo = "get_joined_group_list", Yo = "get_group_self_member_info", jo = "create_group", zo = "destroy_group", Jo = "modify_group_base_info", Xo = "apply_join_group", Qo = "apply_join_group_noauth", Zo = "quit_group", $o = "get_group_public_info", es = "change_group_owner", ts = "handle_apply_join_group", ns = "handle_invite_join_permission_group", os = "handle_invite_join_group", ss = "group_msg_recall", as = "msg_read_report", rs = "read_all_unread_msg", is = "group_msg_get", us = "get_group_msg_receipt", cs = "group_msg_receipt", ls = "c2c_msg_read_receipt", ps = "get_group_msg_receipt_detail", ds = "get_pendency", gs = "deletemsg", _s = "get_msg", hs = "get_msg_noauth", fs = "get_online_member_num", vs = "delete_group_ramble_msg_by_seq", ms = "modify_group_msg", Ms = "set_group_attr", ys = "modify_group_attr", Is = "delete_group_attr", Cs = "clear_group_attr", Ts = "get_group_attr", Ds = "group_set_key_values", Es = "group_get_key_values", Ss = "get_group_notify", ks = "update_group_counter", Ls = "get_group_counter", As = "get_group_member_info", Rs = "get_members", Ns = "get_specified_group_member_info", Os = "add_group_member", Gs = "delete_group_member", Us = "ban_group_member", Ps = "modify_group_member_info", bs = "modify_user_info", ws = "cos", Fs = "pre_sig", qs = "video_cover", xs = "tim_web_report_v2", Vs = "alive", Bs = "msg_push", Hs = "multi_msg_push_ws", Ks = "ws_msg_push_ack", Ws = "stat_forceoffline", Ys = "save_relay_json_msg", js = "get_relay_json_msg", zs = "fetch_config", Js = "push_configv2", Xs = "fetch_imsdk_purchase_bitsv2", Qs = "push_imsdk_purchase_bitsv2", Zs = "notify2", $s = "create_topic", ea = "destroy_topic", ta = "modify_topic", na = "get_topic", oa = "ws_set_custom_status", sa = "ws_get_user_status", aa = "ws_status_subscribe", ra = "ws_status_unsubscribe", ia = "ws_stat_background", ua = "ws_stat_foreground", ca = "ws_stat_settoken", la = "get_local_words", pa = "ws_batch_trans_text", da = { NO_SDKAPPID: 2e3, NO_ACCOUNT_TYPE: 2001, NO_IDENTIFIER: 2002, NO_USERSIG: 2003, NO_TINYID: 2022, NO_A2KEY: 2023, USER_NOT_LOGGED_IN: 2024, REPEAT_LOGIN: 2025, COS_UNDETECTED: 2040, COS_GET_SIG_FAIL: 2041, MESSAGE_SEND_FAIL: 2100, MESSAGE_SEND_FAIL_NOT_IN_AVCHATROOM: 2101, MESSAGE_SEND_NEED_MESSAGE_INSTANCE: 2105, MESSAGE_SEND_INVALID_CONVERSATION_TYPE: 2106, MESSAGE_FILE_IS_EMPTY: 2108, MESSAGE_ONPROGRESS_FUNCTION_ERROR: 2109, MESSAGE_REVOKE_FAIL: 2110, MESSAGE_DELETE_FAIL: 2111, MESSAGE_UNREAD_ALL_FAIL: 2112, READ_RECEIPT_MESSAGE_LIST_EMPTY: 2114, MESSAGE_SEND_GROUP_WITH_TOPIC_FAIL: 2115, CANNOT_DELETE_GROUP_SYSTEM_NOTICE: 2116, TRANSLATE_TEXT_FAIL: 2117, MESSAGE_IMAGE_SELECT_FILE_FIRST: 2251, MESSAGE_IMAGE_TYPES_LIMIT: 2252, MESSAGE_IMAGE_SIZE_LIMIT: 2253, MESSAGE_AUDIO_UPLOAD_FAIL: 2300, MESSAGE_AUDIO_SIZE_LIMIT: 2301, MESSAGE_VIDEO_UPLOAD_FAIL: 2350, MESSAGE_VIDEO_SIZE_LIMIT: 2351, MESSAGE_VIDEO_TYPES_LIMIT: 2352, MESSAGE_FILE_UPLOAD_FAIL: 2400, MESSAGE_FILE_SELECT_FILE_FIRST: 2401, MESSAGE_FILE_SIZE_LIMIT: 2402, MESSAGE_FILE_URL_IS_EMPTY: 2403, MESSAGE_MERGER_TYPE_INVALID: 2450, MESSAGE_MERGER_KEY_INVALID: 2451, MESSAGE_MERGER_DOWNLOAD_FAIL: 2452, MESSAGE_FORWARD_TYPE_INVALID: 2453, MESSAGE_MODIFY_CONFLICT: 2480, MESSAGE_MODIFY_DISABLED_IN_AVCHATROOM: 2481, CONVERSATION_NOT_FOUND: 2500, USER_OR_GROUP_NOT_FOUND: 2501, CONVERSATION_UN_RECORDED_TYPE: 2502, INVALID_CONVERSATION_ID: 2503, ILLEGAL_GROUP_TYPE: 2600, CANNOT_JOIN_WORK: 2601, ILLEGAL_GROUP_ID: 2602, CANNOT_FIND_GROUP: 2603, CANNOT_CHANGE_OWNER_IN_AVCHATROOM: 2620, CANNOT_CHANGE_OWNER_TO_SELF: 2621, CANNOT_DISMISS_WORK: 2622, MEMBER_NOT_IN_GROUP: 2623, JOIN_GROUP_FAIL: 2660, CANNOT_ADD_MEMBER_IN_AVCHATROOM: 2661, CANNOT_JOIN_NON_AVCHATROOM_WITHOUT_LOGIN: 2662, NOT_OWNER: 2681, CANNOT_SET_MEMBER_ROLE_IN_WORK_AND_AVCHATROOM: 2682, INVALID_MEMBER_ROLE: 2683, CANNOT_SET_SELF_MEMBER_ROLE: 2684, CANNOT_MUTE_SELF: 2685, BAN_DURATION_INVALID: 2686, NOT_MY_FRIEND: 2700, ALREADY_MY_FRIEND: 2701, FRIEND_GROUP_EXISTED: 2710, FRIEND_GROUP_NOT_EXIST: 2711, FRIEND_APPLICATION_NOT_EXIST: 2716, UPDATE_PROFILE_INVALID_PARAM: 2721, UPDATE_PROFILE_NO_KEY: 2722, CANNOT_ADD_SELF_TO_BLACKLIST: 2742, NETWORK_ERROR: 2800, NETWORK_TIMEOUT: 2801, NO_NETWORK: 2805, UNCAUGHT_ERROR: 2903, INVALID_OPERATION: 2905, INVALID_TRTC_CMD: 2995, OVER_FREQUENCY_LIMIT: 2996, CANNOT_FIND_PROTOCOL: 2997, CANNOT_FIND_MODULE: 2998, SDK_IS_NOT_READY: 2999, LOGGING_IN: 3e3, LOGIN_FAILED: 3001, KICKED_OUT_MULT_DEVICE: 3002, KICKED_OUT_MULT_ACCOUNT: 3003, KICKED_OUT_USERSIG_EXPIRED: 3004, LOGGED_OUT: 3005, KICKED_OUT_REST_API: 3006, ILLEGAL_TOPIC_ID: 3021, CANNOT_USE_COMMERCIAL_ABILITY: 3122, PROFANITY_FOUND: 3123, MESSAGE_A2KEY_EXPIRED: 20002, ACCOUNT_A2KEY_EXPIRED: 70001, HELLO_ANSWER_KICKED_OUT: 1002, OPEN_SERVICE_OVERLOAD_ERROR: 60022 }, ga = "networkRTT", _a = "messageE2EDelay", ha = "sendMessageC2C", fa = "sendMessageGroup", va = "sendMessageGroupAV", ma = "sendMessageRichMedia", Ma = "cosUpload", ya = "messageReceivedGroup", Ia = "messageReceivedGroupAVPush", Ca = "messageReceivedGroupAVPull", Ta = (r(Xt = {}, ga, 2), r(Xt, _a, 3), r(Xt, ha, 4), r(Xt, fa, 5), r(Xt, va, 6), r(Xt, ma, 7), r(Xt, ya, 8), r(Xt, Ia, 9), r(Xt, Ca, 10), r(Xt, Ma, 11), Xt), Da = { info: 4, warning: 5, error: 6 }, Ea = { wifi: 1, "2g": 2, "3g": 3, "4g": 4, "5g": 5, unknown: 6, none: 7, online: 8 }, Sa = { login: 4 }, ka = function() {
        function e2(t2) {
          o(this, e2), this._n = "SSOLogData", this.eventType = Sa[t2] || 0, this.timestamp = 0, this.networkType = 8, this.code = 0, this.message = "", this.moreMessage = "", this.extension = t2, this.costTime = 0, this.duplicate = false, this.level = 4, this.uiPlatform = void 0, this._sentFlag = false, this._startts = Ue();
        }
        return a(e2, [{ key: "updateTimeStamp", value: function() {
          this.timestamp = Ue();
        } }, { key: "start", value: function(e3) {
          return this._startts = e3, this;
        } }, { key: "end", value: function() {
          var e3 = this, t2 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this._sentFlag) {
            var n2 = Ue();
            0 === this.costTime && (this.costTime = n2 - this._startts), this.setMoreMessage("startts:".concat(this._startts, " endts:").concat(n2)), t2 ? (this._sentFlag = true, this._eventStatModule && this._eventStatModule.pushIn(this)) : setTimeout(function() {
              e3._sentFlag = true, e3._eventStatModule && e3._eventStatModule.pushIn(e3);
            }, 0);
          }
        } }, { key: "setError", value: function(e3, t2, n2) {
          if (!(e3 instanceof Error))
            return xe.w("".concat(this._n, ".setError value not instanceof Error, please check!")), this;
          if (this._sentFlag)
            return this;
          if (this.setNetworkType(n2), t2)
            e3.code && this.setCode(e3.code), e3.message && this.setMoreMessage(e3.message);
          else {
            var o2 = da.NO_NETWORK;
            this.setCode(o2);
          }
          return this.setLevel("error"), this;
        } }, { key: "setCode", value: function(e3) {
          return at(e3) || this._sentFlag || ("ECONNABORTED" === e3 && (this.code = 103), $e(e3) ? this.code = e3 : xe.w("".concat(this._n, ".setCode value not a number, please check!"), e3, n(e3))), this;
        } }, { key: "setMessage", value: function(e3) {
          return at(e3) || this._sentFlag || ($e(e3) && (this.message = e3.toString()), et(e3) && (this.message = e3)), this;
        } }, { key: "setCostTime", value: function(e3) {
          return this.costTime = e3, this;
        } }, { key: "setLevel", value: function(e3) {
          return at(e3) || this._sentFlag || (this.level = Da[e3]), this;
        } }, { key: "setMoreMessage", value: function(e3) {
          return jt(this.moreMessage) ? this.moreMessage = "".concat(e3) : this.moreMessage += " ".concat(e3), this;
        } }, { key: "setNetworkType", value: function(e3) {
          if (at(e3))
            xe.w("".concat(this._n, ".setNetworkType value is undefined, please check!"));
          else {
            var t2 = Ea[e3.toLowerCase()];
            at(t2) || (this.networkType = t2);
          }
          return this;
        } }, { key: "getStartTs", value: function() {
          return this._startts;
        } }, { key: "setUIPlatform", value: function(e3) {
          this.uiPlatform = e3;
        } }], [{ key: "bindEventStatModule", value: function(t2) {
          e2.prototype._eventStatModule = t2;
        } }]), e2;
      }(), La = function() {
        function e2(t2) {
          o(this, e2), this.type = S.MSG_TEXT, this.content = { text: t2.text || "" };
        }
        return a(e2, [{ key: "setText", value: function(e3) {
          this.content.text = e3;
        } }, { key: "sendable", value: function() {
          return 0 !== this.content.text.length;
        } }]), e2;
      }(), Aa = function() {
        function e2(t2, n2) {
          o(this, e2), this._imageMemoryURL = "", this._fileDownloadProxy = n2, se ? this.createImageDataASURLInWXMiniApp(t2.file) : this.createImageDataASURLInWeb(t2.file), this._initImageInfoModel(), this.type = S.MSG_IMAGE, this._percent = 0, this.content = { imageFormat: t2.imageFormat || Ve.UNKNOWN, uuid: t2.uuid, imageInfoArray: [] }, this.initImageInfoArray(t2.imageInfoArray), this._autoFixUrl();
        }
        return a(e2, [{ key: "_initImageInfoModel", value: function() {
          var e3 = this;
          this._ImageInfoModel = function(t2) {
            this.instanceID = _t(9999999), this.sizeType = t2.type || 0, this.type = 0, this.size = t2.size || 0, this.width = t2.width || 0, this.height = t2.height || 0, this.imageUrl = t2.url || "", this.url = Wt(t2.url || e3._imageMemoryURL, e3._fileDownloadProxy);
          }, this._ImageInfoModel.prototype = { setSizeType: function(e4) {
            this.sizeType = e4;
          }, setType: function(e4) {
            this.type = e4;
          }, setImageUrl: function(e4) {
            e4 && (this.imageUrl = e4);
          }, getImageUrl: function() {
            return this.imageUrl;
          } };
        } }, { key: "initImageInfoArray", value: function(e3) {
          for (var t2 = 0, n2 = null, o2 = null; t2 <= 2; )
            o2 = at(e3) || at(e3[t2]) ? { type: 0, size: 0, width: 0, height: 0, url: "" } : e3[t2], (n2 = new this._ImageInfoModel(o2)).setSizeType(t2 + 1), n2.setType(t2), this.addImageInfo(n2), t2++;
          this.updateAccessSideImageInfoArray();
        } }, { key: "updateImageInfoArray", value: function(e3) {
          for (var t2, n2 = this.content.imageInfoArray.length, o2 = 0; o2 < n2; o2++)
            t2 = this.content.imageInfoArray[o2], e3[o2].size && (t2.size = e3[o2].size), e3[o2].url && t2.setImageUrl(e3[o2].url), e3[o2].width && (t2.width = e3[o2].width), e3[o2].height && (t2.height = e3[o2].height);
        } }, { key: "_autoFixUrl", value: function() {
          for (var e3 = this.content.imageInfoArray.length, t2 = "", n2 = "", o2 = ["http", "https"], s2 = null, a2 = 0; a2 < e3; a2++)
            this.content.imageInfoArray[a2].url && "" !== (s2 = this.content.imageInfoArray[a2]).imageUrl && (n2 = s2.imageUrl.slice(0, s2.imageUrl.indexOf("://") + 1), t2 = s2.imageUrl.slice(s2.imageUrl.indexOf("://") + 1), o2.indexOf(n2) < 0 && (n2 = "https:"), this.content.imageInfoArray[a2].setImageUrl([n2, t2].join("")));
        } }, { key: "updatePercent", value: function(e3) {
          this._percent = e3, this._percent > 1 && (this._percent = 1);
        } }, { key: "updateImageFormat", value: function(e3) {
          this.content.imageFormat = Ve[e3.toUpperCase()] || Ve.UNKNOWN;
        } }, { key: "createImageDataASURLInWeb", value: function(e3) {
          void 0 !== e3 && e3.files.length > 0 && (this._imageMemoryURL = window.URL.createObjectURL(e3.files[0]));
        } }, { key: "createImageDataASURLInWXMiniApp", value: function(e3) {
          e3 && e3.url && (this._imageMemoryURL = e3.url);
        } }, { key: "replaceImageInfo", value: function(e3, t2) {
          this.content.imageInfoArray[t2] instanceof this._ImageInfoModel || (this.content.imageInfoArray[t2] = e3);
        } }, { key: "addImageInfo", value: function(e3) {
          this.content.imageInfoArray.length >= 3 || this.content.imageInfoArray.push(e3);
        } }, { key: "updateAccessSideImageInfoArray", value: function() {
          var e3 = this.content.imageInfoArray, t2 = e3[0], n2 = t2.width, o2 = void 0 === n2 ? 0 : n2, s2 = t2.height, a2 = void 0 === s2 ? 0 : s2;
          0 !== o2 && 0 !== a2 && (Ut(e3), Object.assign(e3[2], Gt({ originWidth: o2, originHeight: a2, min: 720 })));
        } }, { key: "sendable", value: function() {
          return 0 !== this.content.imageInfoArray.length && ("" !== this.content.imageInfoArray[0].imageUrl && 0 !== this.content.imageInfoArray[0].size);
        } }]), e2;
      }(), Ra = function() {
        function e2(t2) {
          o(this, e2), this.type = S.MSG_FACE, this.content = t2 || null;
        }
        return a(e2, [{ key: "sendable", value: function() {
          return null !== this.content;
        } }]), e2;
      }(), Na = function() {
        function e2(t2, n2) {
          o(this, e2), this.type = S.MSG_AUDIO, this._percent = 0, this.content = { downloadFlag: 2, second: t2.second, size: t2.size, url: Wt(t2.url, n2), remoteAudioUrl: t2.url || "", uuid: t2.uuid };
        }
        return a(e2, [{ key: "updatePercent", value: function(e3) {
          this._percent = e3, this._percent > 1 && (this._percent = 1);
        } }, { key: "updateAudioUrl", value: function(e3) {
          this.content.remoteAudioUrl = e3;
        } }, { key: "sendable", value: function() {
          return "" !== this.content.remoteAudioUrl;
        } }]), e2;
      }(), Oa = { from: true, groupID: true, groupName: true, to: true }, Ga = function() {
        function e2(t2) {
          o(this, e2), this.type = S.MSG_GRP_TIP, this.content = {}, this._initContent(t2);
        }
        return a(e2, [{ key: "_initContent", value: function(e3) {
          var t2 = this;
          Object.keys(e3).forEach(function(n2) {
            switch (n2) {
              case "remarkInfo":
                break;
              case "groupProfile":
                t2.content.groupProfile = {}, t2._initGroupProfile(e3[n2]);
                break;
              case "operatorInfo":
                break;
              case "memberInfoList":
              case "msgMemberInfo":
                t2._updateMemberList(e3[n2]);
                break;
              case "memberExtraInfo":
              case "onlineMemberInfo":
                break;
              case "memberNum":
                t2.content[n2] = e3[n2], t2.content.memberCount = e3[n2];
                break;
              case "newGroupProfile":
                t2.content.newGroupProfile = {}, t2._initNewGroupProfile(e3[n2]);
                break;
              default:
                t2.content[n2] = e3[n2];
            }
          }), this.content.userIDList || (this.content.userIDList = [this.content.operatorID]);
        } }, { key: "_initGroupProfile", value: function(e3) {
          for (var t2 = Object.keys(e3), n2 = 0; n2 < t2.length; n2++) {
            var o2 = t2[n2];
            Oa[o2] && (this.content.groupProfile[o2] = e3[o2]);
          }
        } }, { key: "_updateMemberList", value: function(e3) {
          jt(this.content.memberList) ? this.content.memberList = e3 : this.content.memberList.forEach(function(t2) {
            e3.forEach(function(e4) {
              t2.userID === e4.userID && Object.assign(t2, e4);
            });
          });
        } }, { key: "_initNewGroupProfile", value: function(e3) {
          for (var t2 = Object.keys(e3), n2 = 0; n2 < t2.length; n2++) {
            var o2 = t2[n2];
            "muteAllMembers" !== o2 ? this.content.newGroupProfile[o2] = e3[o2] : this.content.newGroupProfile[o2] = 1 === e3[o2];
          }
        } }]), e2;
      }(), Ua = { from: true, groupID: true, groupName: true, to: true }, Pa = function() {
        function e2(t2) {
          o(this, e2), this.type = S.MSG_GRP_SYS_NOTICE, this.content = {}, this._initContent(t2);
        }
        return a(e2, [{ key: "_initContent", value: function(e3) {
          var t2 = this;
          Object.keys(e3).forEach(function(n2) {
            switch (n2) {
              case "memberInfoList":
                break;
              case "remarkInfo":
                t2.content.handleMessage = e3[n2];
                break;
              case "groupProfile":
                t2.content.groupProfile = {}, t2._initGroupProfile(e3[n2]);
                break;
              default:
                t2.content[n2] = e3[n2];
            }
          });
        } }, { key: "_initGroupProfile", value: function(e3) {
          for (var t2 = Object.keys(e3), n2 = 0; n2 < t2.length; n2++) {
            var o2 = t2[n2];
            Ua[o2] && ("groupName" === o2 ? this.content.groupProfile.name = e3[o2] : this.content.groupProfile[o2] = e3[o2]);
          }
        } }]), e2;
      }(), ba = function() {
        function e2(t2, n2) {
          o(this, e2), this.type = S.MSG_FILE, this._percent = 0;
          var s2 = this._getFileInfo(t2);
          this.content = { downloadFlag: 2, fileUrl: Wt(t2.url, n2) || "", uuid: t2.uuid, fileName: s2.name || "", fileSize: s2.size || 0 };
        }
        return a(e2, [{ key: "_getFileInfo", value: function(e3) {
          if (!at(e3.fileName) && !at(e3.fileSize))
            return { size: e3.fileSize, name: e3.fileName };
          var t2 = e3.file.files[0];
          if (ne) {
            if (t2.path && -1 !== t2.path.indexOf(".")) {
              var n2 = t2.path.slice(t2.path.lastIndexOf(".") + 1).toLowerCase();
              t2.type = n2, t2.name || (t2.name = "".concat(_t(999999), ".").concat(n2));
            }
            t2.name || (t2.type = "", t2.name = t2.path.slice(t2.path.lastIndexOf("/") + 1).toLowerCase()), t2.suffix && (t2.type = t2.suffix), t2.url || (t2.url = t2.path);
          }
          return { size: t2.size, name: t2.name };
        } }, { key: "updatePercent", value: function(e3) {
          this._percent = e3, this._percent > 1 && (this._percent = 1);
        } }, { key: "updateFileUrl", value: function(e3) {
          this.content.fileUrl = e3;
        } }, { key: "sendable", value: function() {
          return "" !== this.content.fileUrl && ("" !== this.content.fileName && 0 !== this.content.fileSize);
        } }]), e2;
      }(), wa = function() {
        function e2(t2) {
          o(this, e2), this.type = S.MSG_CUSTOM, this.content = { data: t2.data || "", description: t2.description || "", extension: t2.extension || "" };
        }
        return a(e2, [{ key: "setData", value: function(e3) {
          return this.content.data = e3, this;
        } }, { key: "setDescription", value: function(e3) {
          return this.content.description = e3, this;
        } }, { key: "setExtension", value: function(e3) {
          return this.content.extension = e3, this;
        } }, { key: "sendable", value: function() {
          return 0 !== this.content.data.length || 0 !== this.content.description.length || 0 !== this.content.extension.length;
        } }]), e2;
      }(), Fa = function() {
        function e2(t2, n2) {
          o(this, e2), this.type = S.MSG_VIDEO, this._percent = 0, this.content = { remoteVideoUrl: t2.remoteVideoUrl || t2.videoUrl || "", videoFormat: t2.videoFormat, videoSecond: parseInt(t2.videoSecond, 10), videoSize: t2.videoSize, videoUrl: Wt(t2.videoUrl, n2), videoDownloadFlag: 2, videoUUID: t2.videoUUID, thumbUUID: t2.thumbUUID, thumbFormat: t2.thumbFormat, thumbWidth: t2.thumbWidth, snapshotWidth: t2.thumbWidth, thumbHeight: t2.thumbHeight, snapshotHeight: t2.thumbHeight, thumbSize: t2.thumbSize, snapshotSize: t2.thumbSize, thumbDownloadFlag: 2, thumbUrl: Wt(t2.thumbUrl, n2), snapshotUrl: Wt(t2.thumbUrl, n2) };
        }
        return a(e2, [{ key: "updatePercent", value: function(e3) {
          this._percent = e3, this._percent > 1 && (this._percent = 1);
        } }, { key: "updateVideoUrl", value: function(e3) {
          e3 && (this.content.remoteVideoUrl = e3);
        } }, { key: "updateSnapshotInfo", value: function(e3) {
          var t2 = e3.snapshotUrl, n2 = e3.snapshotWidth, o2 = e3.snapshotHeight;
          jt(t2) || (this.content.thumbUrl = this.content.snapshotUrl = t2), jt(n2) || (this.content.thumbWidth = this.content.snapshotWidth = Number(n2)), jt(o2) || (this.content.thumbHeight = this.content.snapshotHeight = Number(o2));
        } }, { key: "sendable", value: function() {
          return "" !== this.content.remoteVideoUrl;
        } }]), e2;
      }(), qa = function() {
        function e2(t2) {
          o(this, e2), this.type = S.MSG_LOCATION;
          var n2 = t2.description, s2 = t2.longitude, a2 = t2.latitude;
          this.content = { description: n2, longitude: s2, latitude: a2 };
        }
        return a(e2, [{ key: "sendable", value: function() {
          return true;
        } }]), e2;
      }(), xa = function() {
        function e2(t2, n2) {
          if (o(this, e2), this.from = t2.from, this.messageSender = t2.from, this.time = t2.time, this.messageSequence = t2.sequence, this.clientSequence = t2.clientSequence || t2.sequence, this.messageRandom = t2.random, this.cloudCustomData = t2.cloudCustomData || "", this.clientTime = t2.clientTime || void 0, t2.ID)
            this.ID = t2.ID || "", this.nick = t2.nick || "", this.avatar = t2.avatar || "", this.messageBody = [{ type: t2.type, payload: t2.payload }], t2.conversationType.startsWith(S.CONV_C2C) ? this.receiverUserID = t2.to : t2.conversationType.startsWith(S.CONV_GROUP) && (this.receiverGroupID = t2.to), this.messageReceiver = t2.to;
          else {
            this.nick = t2.nick || "", this.avatar = t2.avatar || "", this.messageBody = [];
            var s2 = t2.elements[0].type, a2 = t2.elements[0].content;
            this._patchRichMediaPayload(s2, a2), this._updateRichMediaDownloadUrl(s2, a2, n2), s2 === S.MSG_MERGER ? this.messageBody.push({ type: s2, payload: new Va(a2).content }) : this.messageBody.push({ type: s2, payload: a2 }), t2.groupID && (this.receiverGroupID = t2.groupID, this.messageReceiver = t2.groupID), t2.to && (this.receiverUserID = t2.to, this.messageReceiver = t2.to), this.ID = "".concat(t2.tinyID, "-").concat(t2.clientTime, "-").concat(t2.random);
          }
        }
        return a(e2, [{ key: "_patchRichMediaPayload", value: function(e3, t2) {
          e3 === S.MSG_IMAGE ? t2.imageInfoArray.forEach(function(e4) {
            !e4.imageUrl && e4.url && (e4.imageUrl = e4.url, e4.sizeType = e4.type, 1 === e4.type ? e4.type = 0 : 3 === e4.type && (e4.type = 1));
          }) : e3 === S.MSG_VIDEO ? !t2.remoteVideoUrl && t2.videoUrl && (t2.remoteVideoUrl = t2.videoUrl) : e3 === S.MSG_AUDIO ? !t2.remoteAudioUrl && t2.url && (t2.remoteAudioUrl = t2.url) : e3 === S.MSG_FILE && !t2.fileUrl && t2.url && (t2.fileUrl = t2.url, t2.url = void 0);
        } }, { key: "_updateRichMediaDownloadUrl", value: function(e3, t2, n2) {
          n2 && (e3 === S.MSG_IMAGE ? t2.imageInfoArray.forEach(function(e4) {
            e4.url = Wt(e4.url, n2);
          }) : e3 === S.MSG_VIDEO ? (t2.videoUrl = Wt(t2.videoUrl, n2), t2.snapshotUrl = Wt(t2.thumbUrl, n2), t2.snapshotHeight = t2.thumbHeight, t2.snapshotWidth = t2.thumbWidth) : e3 === S.MSG_AUDIO ? t2.url = Wt(t2.url, n2) : e3 === S.MSG_FILE && (t2.fileUrl = Wt(t2.fileUrl, n2)));
        } }]), e2;
      }(), Va = function() {
        function e2(t2, n2) {
          if (o(this, e2), this.type = S.MSG_MERGER, this.content = { downloadKey: "", pbDownloadKey: "", messageList: [], title: "", abstractList: [], compatibleText: "", version: 0, layersOverLimit: false }, t2.downloadKey) {
            var s2 = t2.downloadKey, a2 = t2.pbDownloadKey, r2 = t2.title, i2 = t2.abstractList, u2 = t2.compatibleText, c2 = t2.version;
            this.content.downloadKey = s2, this.content.pbDownloadKey = a2, this.content.title = r2, this.content.abstractList = i2, this.content.compatibleText = u2, this.content.version = c2 || 0;
          } else if (jt(t2.messageList))
            1 === t2.layersOverLimit && (this.content.layersOverLimit = true);
          else {
            var l2 = t2.messageList, p2 = t2.title, d2 = t2.abstractList, g2 = t2.compatibleText, _2 = t2.version, h2 = [];
            l2.forEach(function(e3) {
              if (!jt(e3)) {
                var t3 = new xa(e3, n2);
                h2.push(t3);
              }
            }), this.content.messageList = h2, this.content.title = p2, this.content.abstractList = d2, this.content.compatibleText = g2, this.content.version = _2 || 0;
          }
        }
        return a(e2, [{ key: "sendable", value: function() {
          return !jt(this.content.messageList) || !jt(this.content.downloadKey);
        } }]), e2;
      }(), Ba = { 1: S.MSG_PRIORITY_HIGH, 2: S.MSG_PRIORITY_NORMAL, 3: S.MSG_PRIORITY_LOW, 4: S.MSG_PRIORITY_LOWEST }, Ha = function() {
        function e2(t2) {
          o(this, e2), this.ID = "", this.conversationID = t2.conversationID || null, this.conversationType = t2.conversationType || S.CONV_C2C, this.conversationSubType = t2.conversationSubType, this.time = t2.time || Math.ceil(Date.now() / 1e3), this.sequence = t2.sequence || 0, this.clientSequence = t2.clientSequence || t2.sequence || 0, this.random = t2.random || 0 === t2.random ? t2.random : _t(), this.priority = this._computePriority(t2.priority), this.nick = t2.nick || "", this.avatar = t2.avatar || "", this.isPeerRead = false, this.nameCard = "", this._elements = [], this.isPlaceMessage = t2.isPlaceMessage || 0, this.isRevoked = 2 === t2.isPlaceMessage || 8 === t2.msgFlagBits, this.from = t2.from || null, this.to = t2.to || null, this.flow = "", this.isSystemMessage = t2.isSystemMessage || false, this.protocol = t2.protocol || "JSON", this.isResend = false, this.isRead = false, this.status = t2.status || Qt.SUCCESS, this._onlineOnlyFlag = false, this._groupAtInfoList = [], this._relayFlag = false, this.atUserList = [], this.cloudCustomData = t2.cloudCustomData || "", this.isDeleted = false, this.isModified = false, this._isExcludedFromUnreadCount = !(!t2.messageControlInfo || 1 !== t2.messageControlInfo.excludedFromUnreadCount), this._isExcludedFromLastMessage = !(!t2.messageControlInfo || 1 !== t2.messageControlInfo.excludedFromLastMessage), this.clientTime = t2.clientTime || be() || 0, this.senderTinyID = t2.senderTinyID || t2.tinyID || "", this.readReceiptInfo = t2.readReceiptInfo || { readCount: void 0, unreadCount: void 0, isPeerRead: void 0 }, this.needReadReceipt = true === t2.needReadReceipt || 1 === t2.needReadReceipt, this.version = t2.messageVersion || 0, this.isBroadcastMessage = t2.isBroadcastMessage || false, this._receiverList = t2.receiverList || void 0, this.isSupportExtension = true === t2.isSupportExtension || 1 === t2.isSupportExtension, this.revoker = t2.revokerInfo && t2.revokerInfo.revoker || null, this.reInitialize(t2.currentUser), this.extractGroupInfo(t2.groupProfile || null), this.handleGroupAtInfo(t2), this.initC2CReadReceiptInfo(t2.readReceiptSentByPeer);
        }
        return a(e2, [{ key: "elements", get: function() {
          return this._elements;
        } }, { key: "getElements", value: function() {
          return this._elements;
        } }, { key: "extractGroupInfo", value: function(e3) {
          if (null !== e3) {
            et(e3.nick) && (this.nick = e3.nick), et(e3.avatar) && (this.avatar = e3.avatar);
            var t2 = e3.messageFromAccountExtraInformation;
            ot(t2) && et(t2.nameCard) && (this.nameCard = t2.nameCard);
          }
        } }, { key: "handleGroupAtInfo", value: function(e3) {
          var t2 = this;
          e3.payload && e3.payload.atUserList && e3.payload.atUserList.forEach(function(e4) {
            e4 !== S.MSG_AT_ALL ? (t2._groupAtInfoList.push({ groupAtAllFlag: 0, groupAtUserID: e4 }), t2.atUserList.push(e4)) : (t2._groupAtInfoList.push({ groupAtAllFlag: 1 }), t2.atUserList.push(S.MSG_AT_ALL));
          }), st(e3.groupAtInfo) && e3.groupAtInfo.forEach(function(e4) {
            0 === e4.groupAtAllFlag ? t2.atUserList.push(e4.groupAtUserID) : 1 === e4.groupAtAllFlag && t2.atUserList.push(S.MSG_AT_ALL);
          });
        } }, { key: "getGroupAtInfoList", value: function() {
          return this._groupAtInfoList;
        } }, { key: "_initProxy", value: function() {
          this._elements[0] && (this.payload = this._elements[0].content, this.type = this._elements[0].type);
        } }, { key: "reInitialize", value: function(e3) {
          e3 && (this.status = this.from ? Qt.SUCCESS : Qt.UNSEND, !this.from && (this.from = e3)), this._initFlow(e3), this._initSequence(e3), this._concatConversationID(e3), this.generateMessageID();
        } }, { key: "isSendable", value: function() {
          return 0 !== this._elements.length && ("function" == typeof this._elements[0].sendable && this._elements[0].sendable());
        } }, { key: "_initTo", value: function(e3) {
          this.conversationType === S.CONV_GROUP && (this.to = e3.groupID);
        } }, { key: "_initSequence", value: function(e3) {
          0 === this.clientSequence && e3 && (this.clientSequence = function(e4) {
            if (!e4)
              return false;
            if (void 0 === mt[e4]) {
              var t2 = /* @__PURE__ */ new Date(), n2 = "3".concat(t2.getHours()).slice(-2), o2 = "0".concat(t2.getMinutes()).slice(-2), s2 = "0".concat(t2.getSeconds()).slice(-2);
              mt[e4] = parseInt([n2, o2, s2, "0001"].join("")), n2 = null, o2 = null, s2 = null, xe.l("autoIncrementIndex start index:".concat(mt[e4]));
            }
            return mt[e4]++;
          }(e3)), 0 === this.sequence && this.conversationType === S.CONV_C2C && (this.sequence = this.clientSequence);
        } }, { key: "generateMessageID", value: function() {
          this.from === S.CONV_SYSTEM && (this.senderTinyID = "144115198244471703"), this.ID = "".concat(this.senderTinyID, "-").concat(this.clientTime, "-").concat(this.random);
        } }, { key: "_initFlow", value: function(e3) {
          "" !== e3 && (e3 === this.from ? (this.flow = "out", this.isRead = true) : this.flow = "in");
        } }, { key: "_concatConversationID", value: function(e3) {
          var t2 = this.to, n2 = "", o2 = this.conversationType;
          o2 !== S.CONV_SYSTEM ? (n2 = o2 === S.CONV_C2C ? e3 === this.from ? t2 : this.from : this.to, this.conversationID = n2 ? "".concat(o2).concat(n2) : null) : this.conversationID = S.CONV_SYSTEM;
        } }, { key: "isElement", value: function(e3) {
          return e3 instanceof La || e3 instanceof Aa || e3 instanceof Ra || e3 instanceof Na || e3 instanceof ba || e3 instanceof Fa || e3 instanceof Ga || e3 instanceof Pa || e3 instanceof wa || e3 instanceof qa || e3 instanceof Va;
        } }, { key: "setElement", value: function(e3, t2) {
          var n2 = this;
          if (this.isElement(e3))
            return this._elements = [e3], void this._initProxy();
          var o2 = function(e4) {
            if (e4.type && e4.content)
              switch (e4.type) {
                case S.MSG_TEXT:
                  n2.setTextElement(e4.content);
                  break;
                case S.MSG_IMAGE:
                  n2.setImageElement(e4.content, t2);
                  break;
                case S.MSG_AUDIO:
                  n2.setAudioElement(e4.content, t2);
                  break;
                case S.MSG_FILE:
                  n2.setFileElement(e4.content, t2);
                  break;
                case S.MSG_VIDEO:
                  n2.setVideoElement(e4.content, t2);
                  break;
                case S.MSG_CUSTOM:
                  n2.setCustomElement(e4.content);
                  break;
                case S.MSG_LOCATION:
                  n2.setLocationElement(e4.content);
                  break;
                case S.MSG_GRP_TIP:
                  n2.setGroupTipElement(e4.content);
                  break;
                case S.MSG_GRP_SYS_NOTICE:
                  n2.setGroupSystemNoticeElement(e4.content);
                  break;
                case S.MSG_FACE:
                  n2.setFaceElement(e4.content);
                  break;
                case S.MSG_MERGER:
                  n2.setMergerElement(e4.content, t2);
              }
          };
          if (st(e3))
            for (var s2 = 0; s2 < e3.length; s2++)
              o2(e3[s2]);
          else
            o2(e3);
          this._initProxy();
        } }, { key: "clearElement", value: function() {
          this._elements.length = 0;
        } }, { key: "setTextElement", value: function(e3) {
          var t2 = "string" == typeof e3 ? e3 : e3.text, n2 = new La({ text: t2 });
          this._elements.push(n2);
        } }, { key: "setImageElement", value: function(e3, t2) {
          var n2 = new Aa(e3, t2);
          this._elements.push(n2);
        } }, { key: "setAudioElement", value: function(e3, t2) {
          var n2 = new Na(e3, t2);
          this._elements.push(n2);
        } }, { key: "setFileElement", value: function(e3, t2) {
          var n2 = new ba(e3, t2);
          this._elements.push(n2);
        } }, { key: "setVideoElement", value: function(e3, t2) {
          var n2 = new Fa(e3, t2);
          this._elements.push(n2);
        } }, { key: "setLocationElement", value: function(e3) {
          var t2 = new qa(e3);
          this._elements.push(t2);
        } }, { key: "setCustomElement", value: function(e3) {
          var t2 = new wa(e3);
          this._elements.push(t2);
        } }, { key: "setGroupTipElement", value: function(e3) {
          var t2 = {}, n2 = e3.operationType;
          if (jt(e3.memberInfoList) ? e3.operatorInfo && (t2 = e3.operatorInfo) : n2 !== S.GRP_TIP_MBR_JOIN && n2 !== S.GRP_TIP_MBR_KICKED_OUT && n2 !== S.GRP_TIP_MBR_SET_ADMIN && n2 !== S.GRP_TIP_MBR_CANCELED_ADMIN || (t2 = e3.memberInfoList[0]), !jt(e3.memberExtraInfo)) {
            var o2 = e3.memberExtraInfo.reason;
            e3.msgMemberInfo.forEach(function(e4) {
              e4.reason = o2;
            });
          }
          var s2 = t2, a2 = s2.nick, r2 = s2.avatar;
          et(a2) && (this.nick = a2), et(r2) && (this.avatar = r2);
          var i2 = new Ga(e3);
          this._elements.push(i2);
        } }, { key: "setGroupSystemNoticeElement", value: function(e3) {
          var t2 = new Pa(e3);
          this._elements.push(t2);
        } }, { key: "setFaceElement", value: function(e3) {
          var t2 = new Ra(e3);
          this._elements.push(t2);
        } }, { key: "setMergerElement", value: function(e3, t2) {
          var n2 = new Va(e3, t2);
          this._elements.push(n2);
        } }, { key: "setIsRead", value: function(e3) {
          this.isRead = e3;
        } }, { key: "setRelayFlag", value: function(e3) {
          this._relayFlag = e3;
        } }, { key: "getRelayFlag", value: function() {
          return this._relayFlag;
        } }, { key: "_computePriority", value: function(e3) {
          if (at(e3))
            return S.MSG_PRIORITY_NORMAL;
          if (et(e3) && -1 !== Object.values(Ba).indexOf(e3))
            return e3;
          if ($e(e3)) {
            var t2 = "" + e3;
            if (-1 !== Object.keys(Ba).indexOf(t2))
              return Ba[t2];
          }
          return S.MSG_PRIORITY_NORMAL;
        } }, { key: "setNickAndAvatar", value: function(e3) {
          var t2 = e3.nick, n2 = e3.avatar;
          et(t2) && (this.nick = t2), et(n2) && (this.avatar = n2);
        } }, { key: "setNameCard", value: function(e3) {
          et(e3) && (this.nameCard = e3);
        } }, { key: "initC2CReadReceiptInfo", value: function(e3) {
          this.conversationType === S.CONV_C2C && true === this.needReadReceipt && (this.readReceiptInfo.isPeerRead = 1 === e3);
        } }]), e2;
      }(), Ka = function(e2) {
        return { code: 0, data: e2 || {} };
      }, Wa = function(e2) {
        i(n2, e2);
        var t2 = f(n2);
        function n2(e3) {
          var s2;
          o(this, n2), s2 = t2.call(this);
          var a2 = e3.code, r2 = e3.message, i2 = e3.data;
          return s2.code = a2, s2.message = r2 || s2._getErrorMessage(s2.code), s2.data = i2 || {}, s2;
        }
        return a(n2);
      }(d(Error)), Ya = null, ja = function(e2) {
        Ya = e2;
      }, za = function(e2) {
        return Promise.resolve(Ka(e2));
      }, Ja = function(e2) {
        var t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (e2 instanceof Wa)
          return t2 && null !== Ya && Ya.emit(E.ERROR, e2), Promise.reject(e2);
        if (e2 instanceof Error) {
          var n2 = new Wa({ code: da.UNCAUGHT_ERROR });
          return t2 && null !== Ya && Ya.emit(E.ERROR, n2), Promise.reject(n2);
        }
        if (!at(e2) && !at(e2.code)) {
          var o2 = new Wa(e2);
          return t2 && null !== Ya && Ya.emit(E.ERROR, o2), Promise.reject(o2);
        }
      }, Xa = function(e2) {
        i(s2, e2);
        var n2 = f(s2);
        function s2(e3) {
          var t2;
          return o(this, s2), (t2 = n2.call(this, e3))._n = "C2CModule", t2._messageFromUnreadDBMap = /* @__PURE__ */ new Map(), t2._signalingFromUnreadDBList = [], t2;
        }
        return a(s2, [{ key: "onNewC2CMessage", value: function(e3) {
          var t2 = e3.dataList, n3 = e3.isInstantMessage, o2 = e3.C2CRemainingUnreadList, s3 = e3.C2CPairUnreadList;
          xe.d("".concat(this._n, ".onNewC2CMessage count:").concat(t2.length, " isInstantMessage:").concat(n3));
          var a2 = this._newC2CMessageStoredAndSummary({ dataList: t2, C2CRemainingUnreadList: o2, C2CPairUnreadList: s3, isInstantMessage: n3 }), r2 = a2.conversationOptionsList, i2 = a2.messageList, u2 = a2.isUnreadC2CMessage;
          (this.filterModifiedMessage(i2), r2.length > 0) && this.getModule(Fn).onNewMessage({ conversationOptionsList: r2, isInstantMessage: n3, isUnreadC2CMessage: u2 });
          var c2 = this.filterUnmodifiedMessage(i2);
          n3 && c2.length > 0 && this.emitOuterEvent(E.MESSAGE_RECEIVED, c2), i2.length = 0;
        } }, { key: "_newC2CMessageStoredAndSummary", value: function(e3) {
          for (var t2 = e3.dataList, n3 = e3.C2CRemainingUnreadList, o2 = e3.C2CPairUnreadList, s3 = e3.isInstantMessage, a2 = null, r2 = [], i2 = [], u2 = {}, c2 = this.getModule(Hn), l2 = this.getModule($n), p2 = false, d2 = this.getModule(Fn), g2 = this.getFileDownloadProxy(), _2 = 0, h2 = t2.length; _2 < h2; _2++)
            if (this._isSignaling(t2[_2]))
              this._signalingFromUnreadDBList.push(t2[_2].eventArray[0].c2CNotifyMsgArray[0]);
            else {
              var f2 = t2[_2];
              f2.currentUser = this.getMyUserID(), f2.conversationType = S.CONV_C2C, f2.isSystemMessage = !!f2.isSystemMessage, (at(f2.nick) || at(f2.avatar)) && (p2 = true, xe.d("".concat(this._n, "._newC2CMessageStoredAndSummary nick or avatar missing!"))), a2 = new Ha(f2), f2.elements = c2.parseElements(f2.elements, f2.from), a2.setElement(f2.elements, g2), a2.setNickAndAvatar({ nick: f2.nick, avatar: f2.avatar });
              var v2 = a2.conversationID;
              if (s3) {
                if (1 === this._messageFromUnreadDBMap.get(a2.ID))
                  continue;
                var m2 = false;
                if (a2.from !== this.getMyUserID()) {
                  var M2 = d2.getLatestMessageSentByPeer(v2);
                  if (M2) {
                    var y2 = M2.nick, I2 = M2.avatar;
                    p2 ? a2.setNickAndAvatar({ nick: y2, avatar: I2 }) : y2 === a2.nick && I2 === a2.avatar || (m2 = true);
                  }
                } else {
                  var C2 = d2.getLatestMessageSentByMe(v2);
                  if (C2) {
                    var T2 = C2.nick, D2 = C2.avatar;
                    T2 === a2.nick && D2 === a2.avatar || d2.modifyMessageSentByMe({ conversationID: v2, latestNick: a2.nick, latestAvatar: a2.avatar });
                  }
                }
                var E2 = 1 === t2[_2].isModified;
                if (d2.isMessageSentByCurrentInstance(a2) ? a2.isModified = E2 : E2 = false, 0 === f2.msgLifeTime)
                  a2._onlineOnlyFlag = true, d2.isMessageSentByCurrentInstance(a2) || i2.push(a2);
                else {
                  if (!d2.pushIntoMessageList(i2, a2, E2))
                    continue;
                  m2 && (d2.modifyMessageSentByPeer({ conversationID: v2, latestNick: a2.nick, latestAvatar: a2.avatar }), d2.updateUserProfileSpecifiedKey({ conversationID: v2, nick: a2.nick, avatar: a2.avatar }));
                }
                s3 && a2.clientTime > 0 && l2.addMessageDelay(a2.clientTime);
              } else
                this._messageFromUnreadDBMap.set(a2.ID, 1);
              if (0 !== f2.msgLifeTime) {
                if (false === a2._onlineOnlyFlag) {
                  var k2 = d2.getLastMessageTime(v2);
                  if ($e(k2) && a2.time < k2)
                    continue;
                  if (at(u2[v2])) {
                    var L2 = 0;
                    "in" === a2.flow && (a2._isExcludedFromUnreadCount || (L2 = 1)), u2[v2] = r2.push({ conversationID: v2, unreadCount: L2, type: a2.conversationType, subType: a2.conversationSubType, lastMessage: a2._isExcludedFromLastMessage ? "" : a2 }) - 1;
                  } else {
                    var A2 = u2[v2];
                    r2[A2].type = a2.conversationType, r2[A2].subType = a2.conversationSubType, r2[A2].lastMessage = a2._isExcludedFromLastMessage ? "" : a2, "in" === a2.flow && (a2._isExcludedFromUnreadCount || r2[A2].unreadCount++);
                  }
                }
              } else
                a2._onlineOnlyFlag = true;
            }
          this._handleSignalingFromUnreadDB();
          var R2 = false;
          if (st(o2))
            for (var N2 = function(e4, t3) {
              if (o2[e4].unreadCount > 0) {
                R2 = true;
                var n4 = r2.find(function(t4) {
                  return t4.conversationID === "C2C".concat(o2[e4].from);
                });
                n4 ? n4.unreadCount = o2[e4].unreadCount : r2.push({ conversationID: "C2C".concat(o2[e4].from), unreadCount: o2[e4].unreadCount, type: S.CONV_C2C });
              }
            }, O2 = 0, G2 = o2.length; O2 < G2; O2++)
              N2(O2);
          if (st(n3))
            for (var U2 = function(e4, t3) {
              r2.find(function(t4) {
                return t4.conversationID === "C2C".concat(n3[e4].from);
              }) || r2.push({ conversationID: "C2C".concat(n3[e4].from), type: S.CONV_C2C, lastMsgTime: n3[e4].lastMsgTime });
            }, P2 = 0, b2 = n3.length; P2 < b2; P2++)
              U2(P2);
          return { conversationOptionsList: r2, messageList: i2, isUnreadC2CMessage: R2 };
        } }, { key: "_isSignaling", value: function(e3) {
          var t2 = e3.eventArray;
          return !(!st(t2) || 10 !== t2[0].event);
        } }, { key: "_handleSignalingFromUnreadDB", value: function() {
          var e3 = this._signalingFromUnreadDBList.length;
          if (xe.l("".concat(this._n, "._handleSignalingFromUnreadDB signalingCount:").concat(e3)), 0 !== e3) {
            var t2 = [];
            this._signalingFromUnreadDBList.forEach(function(e4) {
              e4.hasOwnProperty("c2cMessageRevokedNotify") && t2.push(e4);
            }), this.onC2CMessageRevoked({ dataList: t2 }), this._signalingFromUnreadDBList.length = 0, t2.length = 0;
          }
        } }, { key: "onC2CMessageRevoked", value: function(e3) {
          var t2 = this, n3 = this.getModule(Fn), o2 = [], s3 = null, a2 = true;
          e3.dataList.forEach(function(e4) {
            if (e4.c2cMessageRevokedNotify) {
              var r2 = e4.c2cMessageRevokedNotify.revokedInfos;
              at(r2) || r2.forEach(function(e5) {
                var r3 = t2.getMyUserID() === e5.from ? "".concat(S.CONV_C2C).concat(e5.to) : "".concat(S.CONV_C2C).concat(e5.from);
                s3 = n3.revoke(r3, e5.sequence, e5.random);
                var i2 = e5.revokerInfo && e5.revokerInfo.revoker;
                if (s3)
                  s3.revoker || (s3.revoker = i2, o2.push(s3));
                else {
                  var u2 = { conversationID: r3, sequence: e5.sequence, time: e5.time, revoker: i2 };
                  n3.isLastMessageRevoked(u2) && (o2.push(u2), a2 = false);
                }
              });
            }
          }), 0 !== o2.length && (n3.onMessageRevoked(o2), true === a2 && (xe.l("".concat(this._n, ".onC2CMessageRevoked count:").concat(o2.length)), this.emitOuterEvent(E.MESSAGE_REVOKED, o2)));
        } }, { key: "onC2CMessageReadReceipt", value: function(e3) {
          var t2 = this;
          e3.dataList.forEach(function(e4) {
            if (!jt(e4.c2cMessageReadReceipt)) {
              var n3 = e4.c2cMessageReadReceipt.to;
              e4.c2cMessageReadReceipt.uinPairReadArray.forEach(function(e5) {
                var o2 = e5.peerReadTime;
                xe.d("".concat(t2._n, "._onC2CMessageReadReceipt to:").concat(n3, " peerReadTime:").concat(o2));
                var s3 = "".concat(S.CONV_C2C).concat(n3), a2 = t2.getModule(Fn);
                a2.recordPeerReadTime(s3, o2), a2.updateMessageIsPeerReadProperty(s3, o2);
              });
            }
          });
        } }, { key: "onC2CMessageReadNotice", value: function(e3) {
          var t2 = this;
          e3.dataList.forEach(function(e4) {
            if (!jt(e4.c2cMessageReadNotice)) {
              var n3 = t2.getModule(Fn);
              e4.c2cMessageReadNotice.uinPairReadArray.forEach(function(e5) {
                var o2 = e5.from, s3 = e5.peerReadTime;
                xe.d("".concat(t2._n, ".onC2CMessageReadNotice from:").concat(o2, " lastReadTime:").concat(s3));
                var a2 = "".concat(S.CONV_C2C).concat(o2);
                n3.updateIsReadAfterReadReport({ conversationID: a2, lastMessageTime: s3 }), n3.updateUnreadCount(a2);
              });
            }
          });
        } }, { key: "onC2CMessageModified", value: function(e3) {
          xe.d("".concat(this._n, ".onC2CMessageModified options:"), JSON.stringify(e3));
          var n3 = this.getModule(Fn);
          e3.dataList.forEach(function(e4) {
            n3.onMessageModified(t(t({}, e4), {}, { conversationType: S.CONV_C2C }));
          });
        } }, { key: "onReadReceiptList", value: function(e3) {
          xe.d("".concat(this._n, ".onReadReceiptList options:"), JSON.stringify(e3));
          var t2 = e3.dataList, n3 = t2.userID, o2 = t2.readReceiptList;
          this.getModule(Fn).updateReadReceiptInfo({ userID: n3, readReceiptList: o2 });
        } }, { key: "sendMessage", value: function(e3, t2) {
          var n3 = this._createC2CMessagePack(e3, t2);
          return this.request(n3);
        } }, { key: "_createC2CMessagePack", value: function(e3, t2) {
          var n3 = null;
          t2 && (t2.offlinePushInfo && (n3 = t2.offlinePushInfo), true === t2.onlineUserOnly && (n3 ? n3.disablePush = true : n3 = { disablePush: true }));
          var o2 = "";
          et(e3.cloudCustomData) && e3.cloudCustomData.length > 0 && (o2 = e3.cloudCustomData);
          var s3 = [];
          if (ot(t2) && ot(t2.messageControlInfo)) {
            var a2 = t2.messageControlInfo, r2 = a2.excludedFromUnreadCount, i2 = a2.excludedFromLastMessage, u2 = a2.excludedFromContentModeration;
            true === r2 && s3.push("NoUnread"), true === i2 && s3.push("NoLastMsg"), true === u2 && s3.push("NoMsgCheck");
          }
          var c2 = this.isOnlineMessage(e3, t2) ? 0 : void 0;
          return { protocolName: _o, tjgID: this.generateTjgID(e3), requestData: { fromAccount: this.getMyUserID(), toAccount: e3.to, msgBody: e3.getElements(), cloudCustomData: o2, msgSeq: e3.sequence, msgRandom: e3.random, msgLifeTime: c2, nick: e3.nick, avatar: e3.avatar, offlinePushInfo: n3 ? { pushFlag: true === n3.disablePush ? 1 : 0, title: n3.title || "", desc: n3.description || "", ext: n3.extension || "", apnsInfo: { badgeMode: true === n3.ignoreIOSBadge ? 1 : 0, isVoipPush: this._isVoipPush(n3) }, androidInfo: { OPPOChannelID: n3.androidOPPOChannelID || "" } } : void 0, messageControlInfo: 0 !== c2 ? s3 : void 0, clientTime: e3.clientTime, needReadReceipt: true === e3.needReadReceipt ? 1 : 0, isSupportExtension: true === e3.isSupportExtension ? 1 : 0 } };
        } }, { key: "_isVoipPush", value: function(e3) {
          var t2 = void 0;
          return at(e3.disableVoipPush) || (t2 = false === e3.disableVoipPush ? 1 : 0), t2;
        } }, { key: "isOnlineMessage", value: function(e3, t2) {
          return !(!t2 || true !== t2.onlineUserOnly);
        } }, { key: "revokeMessage", value: function(e3) {
          return this.request({ protocolName: Io, requestData: { msgInfo: { fromAccount: e3.from, toAccount: e3.to, msgSeq: e3.sequence, msgRandom: e3.random, msgTimeStamp: e3.time } } });
        } }, { key: "deleteMessage", value: function(e3) {
          var t2 = e3.to, n3 = e3.keyList;
          return xe.l("".concat(this._n, ".deleteMessage toAccount:").concat(t2, " count:").concat(n3.length)), this.request({ protocolName: ko, requestData: { fromAccount: this.getMyUserID(), to: t2, keyList: n3 } });
        } }, { key: "modifyRemoteMessage", value: function(e3) {
          var t2 = e3.from, n3 = e3.to, o2 = e3.version, s3 = void 0 === o2 ? 0 : o2, a2 = e3.sequence, r2 = e3.random, i2 = e3.time, u2 = e3.payload, c2 = e3.type, l2 = e3.cloudCustomData, p2 = void 0;
          return Vt(c2) && (p2 = []).push({ type: c2, content: u2 }), this.request({ protocolName: Lo, requestData: { from: t2, to: n3, version: s3, sequence: a2, random: r2, time: i2, elements: p2, cloudCustomData: l2 } });
        } }, { key: "setMessageRead", value: function(e3) {
          var t2 = this, n3 = e3.conversationID, o2 = e3.lastMessageTime, s3 = "".concat(this._n, ".setMessageRead");
          xe.l("".concat(s3, " conversationID:").concat(n3, " lastMessageTime:").concat(o2)), $e(o2) || this.outputWarning("DoNotModifyLastTime");
          var a2 = new ka("setC2CMessageRead");
          return a2.setMessage("conversationID:".concat(n3, " lastMessageTime:").concat(o2)), this.request({ protocolName: Co, requestData: { C2CMsgReaded: { cookie: "", C2CMsgReadedItem: [{ toAccount: n3.replace("C2C", ""), lastMessageTime: o2, receipt: 1 }] } } }).then(function() {
            a2.setNetworkType(t2.getNetworkType()).end(), xe.l("".concat(s3, " ok"));
            var e4 = t2.getModule(Fn);
            return e4.updateIsReadAfterReadReport({ conversationID: n3, lastMessageTime: o2 }), e4.updateUnreadCount(n3), Ka();
          }).catch(function(e4) {
            return t2.probeNetwork().then(function(t3) {
              var n4 = v(t3, 2), o3 = n4[0], s4 = n4[1];
              a2.setError(e4, o3, s4).end();
            }), xe.l("".concat(s3, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "getRoamingMessage", value: function(e3) {
          var t2 = this, n3 = "".concat(this._n, ".getRoamingMessage"), o2 = e3.peerAccount, s3 = e3.conversationID, a2 = e3.count, r2 = e3.lastMessageTime, i2 = e3.messageKey, u2 = "peerAccount:".concat(o2, " count:").concat(a2 || 15, " lastMessageTime:").concat(r2 || 0, " messageKey:").concat(i2);
          xe.l("".concat(n3, " ").concat(u2));
          var c2 = new ka("getC2CRoamingMessages");
          return this.request({ protocolName: Eo, requestData: { peerAccount: o2, count: a2 || 15, lastMessageTime: r2 || 0, messageKey: i2 } }).then(function(e4) {
            var o3 = e4.data, a3 = o3.complete, r3 = o3.messageList, i3 = o3.messageKey, l2 = o3.lastMessageTime;
            at(r3) ? xe.l("".concat(n3, " ok. complete:").concat(a3, " but messageList is undefined!")) : xe.l("".concat(n3, " ok. complete:").concat(a3, " count:").concat(r3.length)), c2.setNetworkType(t2.getNetworkType()).setMessage("".concat(u2, " complete:").concat(a3, " length:").concat(r3.length)).end();
            var p2 = t2.getModule(Fn);
            1 === a3 && p2.setCompleted(s3);
            var d2 = p2.onRoamingMessage(r3, s3);
            p2.modifyMessageList(s3), p2.updateIsRead(s3), p2.updateRoamingMessageKeyAndTime(s3, i3, l2);
            var g2 = p2.getPeerReadTime(s3);
            if (xe.l("".concat(n3, " update isPeerRead property. conversationID:").concat(s3, " peerReadTime:").concat(g2)), g2)
              p2.updateMessageIsPeerReadProperty(s3, g2);
            else {
              var _2 = s3.replace(S.CONV_C2C, "");
              t2.getRemotePeerReadTime([_2]).then(function() {
                p2.updateMessageIsPeerReadProperty(s3, p2.getPeerReadTime(s3));
              });
            }
            var h2 = "";
            if (d2.length > 0)
              h2 = d2[0].ID;
            else {
              var f2 = p2.getLocalOldestMessage(s3);
              f2 && (h2 = f2.ID);
            }
            return xe.l("".concat(n3, " nextReqID:").concat(h2, " stored message count:").concat(d2.length)), { nextReqID: h2, storedMessageList: d2 };
          }).catch(function(e4) {
            return t2.probeNetwork().then(function(t3) {
              var n4 = v(t3, 2), o3 = n4[0], s4 = n4[1];
              c2.setMessage(u2).setError(e4, o3, s4).end();
            }), xe.w("".concat(n3, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "getRoamingMessagesHopping", value: function(e3) {
          var t2 = this, n3 = "".concat(this._n, ".getRoamingMessagesHopping"), o2 = e3.peerAccount, s3 = e3.time, a2 = void 0 === s3 ? 0 : s3, r2 = e3.count, i2 = e3.direction, u2 = "".concat(S.CONV_C2C).concat(o2), c2 = "peerAccount:".concat(o2, " count:").concat(r2, " time:").concat(a2, " direction:").concat(i2);
          xe.l("".concat(n3, " ").concat(c2));
          var l2 = new ka("getC2CRoamingMessagesHopping");
          return this.request({ protocolName: Eo, requestData: { peerAccount: o2, count: r2 + 1, lastMessageTime: a2, direction: i2 } }).then(function(e4) {
            var o3 = e4.data, s4 = o3.complete, a3 = o3.messageList, r3 = void 0 === a3 ? [] : a3, p2 = o3.lastMessageTime;
            xe.l("".concat(n3, " ok. complete:").concat(s4, " count:").concat(r3.length)), l2.setNetworkType(t2.getNetworkType()).setMessage("".concat(c2, " complete:").concat(s4, " length:").concat(r3.length)).end(), 1 !== s4 && (1 === i2 ? r3.pop() : r3.shift());
            var d2 = t2.getModule(Fn).onRoamingMessage(r3, u2, false);
            t2._modifyMessageList(u2, d2);
            var g2 = t2._computeResult({ complete: s4, lastMessageTime: p2, resultList: d2 });
            return Ka(g2);
          }).catch(function(e4) {
            return t2.probeNetwork().then(function(t3) {
              var n4 = v(t3, 2), o3 = n4[0], s4 = n4[1];
              l2.setMessage(c2).setError(e4, o3, s4).end();
            }), xe.w("".concat(n3, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "_computeResult", value: function(e3) {
          var t2 = e3.complete, n3 = void 0 === t2 ? 0 : t2, o2 = e3.lastMessageTime, s3 = e3.resultList, a2 = { messageList: m(void 0 === s3 ? [] : s3), isCompleted: false, nextMessageTime: "" };
          return 1 === n3 ? (a2.isCompleted = true, a2) : (a2.nextMessageTime = o2, a2);
        } }, { key: "_modifyMessageList", value: function(e3, t2) {
          var n3 = this.getModule(Fn).getLocalConversation(e3);
          if (n3)
            for (var o2 = n3.userProfile.nick, s3 = n3.userProfile.avatar, a2 = this.getModule(On).getNickAndAvatarByUserID(this.getMyUserID()), r2 = a2.nick, i2 = a2.avatar, u2 = t2.length - 1; u2 >= 0; u2--) {
              var c2 = t2[u2];
              "in" === c2.flow && (c2.nick !== o2 && c2.setNickAndAvatar({ nick: o2 }), c2.avatar !== s3 && c2.setNickAndAvatar({ avatar: s3 })), "out" === c2.flow && (c2.nick !== r2 && c2.setNickAndAvatar({ nick: r2 }), c2.avatar !== i2 && c2.setNickAndAvatar({ avatar: i2 }));
            }
        } }, { key: "getRemotePeerReadTime", value: function(e3) {
          var t2 = this, n3 = "".concat(this._n, ".getRemotePeerReadTime");
          if (jt(e3))
            return xe.w("".concat(n3, " userIDList is empty!")), Promise.resolve();
          var o2 = new ka("getPeerReadTime");
          return xe.l("".concat(n3, " userIDList:").concat(e3)), this.request({ protocolName: So, requestData: { userIDList: e3 } }).then(function(s3) {
            var a2 = s3.data.peerReadTimeList;
            xe.l("".concat(n3, " ok. peerReadTimeList:").concat(a2));
            for (var r2 = "", i2 = t2.getModule(Fn), u2 = 0; u2 < e3.length; u2++)
              r2 += "".concat(e3[u2], "-").concat(a2[u2], " "), a2[u2] > 0 && i2.recordPeerReadTime("C2C".concat(e3[u2]), a2[u2]);
            o2.setNetworkType(t2.getNetworkType()).setMessage(r2).end();
          }).catch(function(e4) {
            t2.probeNetwork().then(function(t3) {
              var n4 = v(t3, 2), s3 = n4[0], a2 = n4[1];
              o2.setError(e4, s3, a2).end();
            }), xe.w("".concat(n3, " failed. error:"), e4);
          });
        } }, { key: "sendReadReceipt", value: function(e3) {
          var t2 = this, n3 = e3[0].conversationID.replace(S.CONV_C2C, ""), o2 = new ka("sendC2CReadReceipt");
          o2.setMessage("peerAccount:".concat(n3));
          var s3 = this.getMyUserID(), a2 = e3.filter(function(e4) {
            return e4.from !== s3 && true === e4.needReadReceipt;
          }).map(function(e4) {
            return { fromAccount: e4.from, toAccount: e4.to, sequence: e4.sequence, random: e4.random, time: e4.time, clientTime: e4.clientTime };
          });
          if (0 === a2.length)
            return Ja({ code: da.READ_RECEIPT_MESSAGE_LIST_EMPTY });
          var r2 = "".concat(this._n, ".sendReadReceipt");
          return xe.l("".concat(r2, ". peerAccount:").concat(n3, " messageInfoList length:").concat(a2.length)), this.request({ protocolName: ls, requestData: { peerAccount: n3, messageInfoList: a2 } }).then(function(e4) {
            return o2.end(), xe.l("".concat(r2, " ok")), Ka();
          }).catch(function(e4) {
            return t2.probeNetwork().then(function(t3) {
              var n4 = v(t3, 2), s4 = n4[0], a3 = n4[1];
              o2.setError(e4, s4, a3).end();
            }), xe.w("".concat(r2, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "getReadReceiptList", value: function(e3) {
          var t2 = "".concat(this._n, ".getReadReceiptList"), n3 = this.getMyUserID(), o2 = e3.filter(function(e4) {
            return e4.from === n3 && true === e4.needReadReceipt;
          });
          return xe.l("".concat(t2, " userID:").concat(n3, " messageList length:").concat(o2.length)), za({ messageList: o2 });
        } }, { key: "getMessageExtensions", value: function(e3, t2) {
          return xe.l("".concat(this._n, ".getMessageExtensions startSequence:").concat(t2)), this.request({ protocolName: Ro, requestData: { from: e3.from, to: e3.to, messageKey: this._getMessageKey(e3), startSequence: t2 } });
        } }, { key: "modifyMessageExtensions", value: function(e3, t2) {
          var n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
          return xe.l("".concat(this._n, ".modifyMessageExtensions operateType:").concat(n3)), this.request({ protocolName: Ao, requestData: { from: e3.from, to: e3.to, messageKey: this._getMessageKey(e3), extensionList: t2, operateType: n3 } });
        } }, { key: "_getMessageKey", value: function(e3) {
          var t2 = e3.clientSequence, n3 = e3.random, o2 = e3.time;
          return "".concat(t2, "_").concat(n3, "_").concat(o2);
        } }, { key: "reset", value: function() {
          xe.l("".concat(this._n, ".reset")), this._messageFromUnreadDBMap.clear(), this._signalingFromUnreadDBList.length = 0;
        } }]), s2;
      }(ro), Qa = function() {
        function e2() {
          o(this, e2), this.list = /* @__PURE__ */ new Map(), this._n = "MessageListHandler", this._latestMessageSentByPeerMap = /* @__PURE__ */ new Map(), this._latestMessageSentByMeMap = /* @__PURE__ */ new Map();
        }
        return a(e2, [{ key: "getLocalOldestMessageByConversationID", value: function(e3) {
          if (!e3)
            return null;
          if (!this.list.has(e3))
            return null;
          var t2 = this.list.get(e3).values();
          return t2 ? t2.next().value : null;
        } }, { key: "pushIn", value: function(e3) {
          var t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n2 = e3.conversationID, o2 = true;
          this.list.has(n2) || this.list.set(n2, /* @__PURE__ */ new Map());
          var s2 = this._getUniqueIDOfMessage(e3), a2 = this.list.get(n2).has(s2);
          if (a2) {
            var r2 = this.list.get(n2).get(s2);
            if (!t2 || true === r2.isModified)
              return o2 = false;
          }
          return this.list.get(n2).set(s2, e3), this._setLatestMessageSentByPeer(n2, e3), this._setLatestMessageSentByMe(n2, e3), o2;
        } }, { key: "unshift", value: function(e3, t2) {
          var n2;
          if (st(e3) ? e3.length > 0 && (n2 = e3[0].conversationID, this._unshiftMultipleMessages(e3, t2)) : (n2 = e3.conversationID, this._unshiftSingleMessage(e3, t2)), n2 && n2.startsWith(S.CONV_C2C)) {
            var o2 = Array.from(this.list.get(n2).values()), s2 = o2.length;
            if (0 === s2)
              return;
            for (var a2 = s2 - 1; a2 >= 0; a2--)
              if ("out" === o2[a2].flow) {
                this._setLatestMessageSentByMe(n2, o2[a2]);
                break;
              }
            for (var r2 = s2 - 1; r2 >= 0; r2--)
              if ("in" === o2[r2].flow) {
                this._setLatestMessageSentByPeer(n2, o2[r2]);
                break;
              }
          }
        } }, { key: "_unshiftSingleMessage", value: function(e3, t2) {
          var n2 = e3.conversationID, o2 = this._getUniqueIDOfMessage(e3);
          if (!this.list.has(n2))
            return this.list.set(n2, /* @__PURE__ */ new Map()), this.list.get(n2).set(o2, e3), void t2.push(e3);
          var s2 = this.list.get(n2), a2 = Array.from(s2);
          s2.has(o2) || (a2.unshift([o2, e3]), this.list.set(n2, new Map(a2)), t2.push(e3));
        } }, { key: "_unshiftMultipleMessages", value: function(e3, t2) {
          for (var n2 = e3.length, o2 = [], s2 = e3[0].conversationID, a2 = this.list.get(s2), r2 = this.list.has(s2) ? Array.from(a2) : [], i2 = 0; i2 < n2; i2++) {
            var u2 = this._getUniqueIDOfMessage(e3[i2]);
            a2 && a2.has(u2) || (o2.push([u2, e3[i2]]), t2.push(e3[i2]));
          }
          this.list.set(s2, new Map(o2.concat(r2)));
        } }, { key: "remove", value: function(e3) {
          var t2 = e3.conversationID, n2 = this._getUniqueIDOfMessage(e3);
          this.list.has(t2) && this.list.get(t2).delete(n2);
        } }, { key: "revoke", value: function(e3, t2, n2) {
          if (xe.d("revoke message", e3, t2, n2), this.list.has(e3)) {
            var o2, s2 = D(this.list.get(e3));
            try {
              for (s2.s(); !(o2 = s2.n()).done; ) {
                var a2 = v(o2.value, 2)[1];
                if (a2.sequence === t2 && (at(n2) || a2.random === n2))
                  return a2.isRevoked || (a2.isRevoked = true), a2;
              }
            } catch (r2) {
              s2.e(r2);
            } finally {
              s2.f();
            }
          }
          return null;
        } }, { key: "removeByConversationID", value: function(e3) {
          this.list.has(e3) && (this.list.delete(e3), this._latestMessageSentByPeerMap.delete(e3), this._latestMessageSentByMeMap.delete(e3));
        } }, { key: "findMessage", value: function(e3) {
          var t2, n2 = null, o2 = D(this.list);
          try {
            for (o2.s(); !(t2 = o2.n()).done; )
              for (var s2 = m(v(t2.value, 2)[1].values()), a2 = s2.length, r2 = 0; r2 < a2; r2++)
                if (s2[r2].ID === e3) {
                  n2 = s2[r2];
                  break;
                }
          } catch (i2) {
            o2.e(i2);
          } finally {
            o2.f();
          }
          return n2;
        } }, { key: "updateMessageIsPeerReadProperty", value: function(e3, t2) {
          var n2 = [];
          if (this.list.has(e3)) {
            var o2, s2 = D(this.list.get(e3));
            try {
              for (s2.s(); !(o2 = s2.n()).done; ) {
                var a2 = v(o2.value, 2)[1];
                a2.time <= t2 && !a2.isPeerRead && "out" === a2.flow && (a2.isPeerRead = true, n2.push(a2));
              }
            } catch (r2) {
              s2.e(r2);
            } finally {
              s2.f();
            }
            xe.l("".concat(this._n, ".updateMessageIsPeerReadProperty conversationID:").concat(e3, " peerReadTime:").concat(t2, " count:").concat(n2.length));
          }
          return n2;
        } }, { key: "updateMessageIsModifiedProperty", value: function(e3) {
          var t2 = e3.conversationID;
          if (this.list.has(t2)) {
            var n2 = this._getUniqueIDOfMessage(e3), o2 = this.list.get(t2).get(n2);
            o2 && (o2.isModified = true);
          }
        } }, { key: "hasLocalMessageList", value: function(e3) {
          return this.list.has(e3);
        } }, { key: "getLocalMessageList", value: function(e3) {
          return this.hasLocalMessageList(e3) ? m(this.list.get(e3).values()) : [];
        } }, { key: "hasLocalMessage", value: function(e3, t2) {
          for (var n2 = false, o2 = this.getLocalMessageList(e3), s2 = o2.length, a2 = 0; a2 < s2; a2++)
            o2[a2].ID === t2 && (n2 = true);
          return n2;
        } }, { key: "getLocalMessage", value: function(e3, t2) {
          for (var n2 = null, o2 = this.getLocalMessageList(e3), s2 = o2.length, a2 = 0; a2 < s2; a2++)
            if (o2[a2].ID === t2) {
              n2 = o2[a2];
              break;
            }
          return n2;
        } }, { key: "getLocalLastMessage", value: function(e3) {
          var t2 = this.getLocalMessageList(e3);
          return t2[t2.length - 1];
        } }, { key: "getLocalOldestMessage", value: function(e3) {
          return this.getLocalMessageList(e3)[0];
        } }, { key: "_setLatestMessageSentByPeer", value: function(e3, t2) {
          e3.startsWith(S.CONV_C2C) && "in" === t2.flow && this._latestMessageSentByPeerMap.set(e3, t2);
        } }, { key: "_setLatestMessageSentByMe", value: function(e3, t2) {
          e3.startsWith(S.CONV_C2C) && "out" === t2.flow && this._latestMessageSentByMeMap.set(e3, t2);
        } }, { key: "getLatestMessageSentByPeer", value: function(e3) {
          return this._latestMessageSentByPeerMap.get(e3);
        } }, { key: "getLatestMessageSentByMe", value: function(e3) {
          return this._latestMessageSentByMeMap.get(e3);
        } }, { key: "modifyMessageSentByPeer", value: function(e3) {
          var t2 = e3.conversationID, n2 = e3.latestNick, o2 = e3.latestAvatar, s2 = this.list.get(t2);
          if (!jt(s2)) {
            var a2 = Array.from(s2.values()), r2 = a2.length;
            if (0 !== r2) {
              for (var i2 = null, u2 = 0, c2 = false, l2 = r2 - 1; l2 >= 0; l2--)
                "in" === a2[l2].flow && ((i2 = a2[l2]).nick !== n2 && (i2.setNickAndAvatar({ nick: n2 }), c2 = true), i2.avatar !== o2 && (i2.setNickAndAvatar({ avatar: o2 }), c2 = true), c2 && (u2 += 1));
              xe.l("".concat(this._n, ".modifyMessageSentByPeer conversationID:").concat(t2, " count:").concat(u2));
            }
          }
        } }, { key: "modifyMessageSentByMe", value: function(e3) {
          var t2 = e3.conversationID, n2 = e3.latestNick, o2 = e3.latestAvatar, s2 = this.list.get(t2);
          if (!jt(s2)) {
            var a2 = Array.from(s2.values()), r2 = a2.length;
            if (0 !== r2) {
              for (var i2 = null, u2 = 0, c2 = false, l2 = r2 - 1; l2 >= 0; l2--)
                "out" === a2[l2].flow && ((i2 = a2[l2]).nick !== n2 && (i2.setNickAndAvatar({ nick: n2 }), c2 = true), i2.avatar !== o2 && (i2.setNickAndAvatar({ avatar: o2 }), c2 = true), c2 && (u2 += 1));
              xe.l("".concat(this._n, ".modifyMessageSentByMe conversationID:").concat(t2, " count:").concat(u2));
            }
          }
        } }, { key: "getTopicConversationIDList", value: function(e3) {
          return m(this.list.keys()).filter(function(t2) {
            return t2.startsWith("".concat(S.CONV_GROUP).concat(e3));
          });
        } }, { key: "traversal", value: function() {
          if (0 !== this.list.size && -1 === xe.getLevel()) {
            console.group("conversationID-messageCount");
            var e3, t2 = D(this.list);
            try {
              for (t2.s(); !(e3 = t2.n()).done; ) {
                var n2 = v(e3.value, 2), o2 = n2[0], s2 = n2[1];
                console.log("".concat(o2, "-").concat(s2.size));
              }
            } catch (a2) {
              t2.e(a2);
            } finally {
              t2.f();
            }
            console.groupEnd();
          }
        } }, { key: "onMessageModified", value: function(e3, t2) {
          if (!this.list.has(e3))
            return { isUpdated: false, message: null };
          var n2 = this._getUniqueIDOfMessage(t2), o2 = this.list.get(e3).has(n2);
          if (xe.d("".concat(this._n, ".onMessageModified conversationID:").concat(e3, " uniqueID:").concat(n2, " has:").concat(o2)), o2) {
            var s2 = this.list.get(e3).get(n2), a2 = t2.messageVersion, r2 = t2.elements, i2 = t2.cloudCustomData;
            return s2.version < a2 ? (s2.version = a2, s2._elements = JSON.parse(JSON.stringify(r2)), s2.payload = JSON.parse(JSON.stringify(r2[0].content)), s2.type = r2[0].type, s2.cloudCustomData = i2, s2.isModified = true, { isUpdated: true, message: s2 }) : { isUpdated: false, message: s2 };
          }
          return { isUpdated: false, message: null };
        } }, { key: "_getUniqueIDOfMessage", value: function(e3) {
          var t2 = e3.from, n2 = e3.to, o2 = e3.random, s2 = e3.sequence, a2 = e3.time;
          return "".concat(t2, "-").concat(n2, "-").concat(o2, "-").concat(s2, "-").concat(a2);
        } }, { key: "reset", value: function() {
          this.list.clear(), this._latestMessageSentByPeerMap.clear(), this._latestMessageSentByMeMap.clear();
        } }]), e2;
      }(), Za = "_a2KeyAndTinyIDUpdated", $a = "_cloudConfigUpdated", er = "_profileUpdated";
      function tr(e2) {
        this.mixin(e2);
      }
      tr.mixin = function(e2) {
        var t2 = e2.prototype || e2;
        t2._isReady = false, t2.ready = function(e3) {
          var t3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (e3)
            return this._isReady ? void (t3 ? e3.call(this) : setTimeout(e3, 1)) : (this._readyQueue = this._readyQueue || [], void this._readyQueue.push(e3));
        }, t2.triggerReady = function() {
          var e3 = this;
          this._isReady = true, setTimeout(function() {
            var t3 = e3._readyQueue;
            e3._readyQueue = [], t3 && t3.length > 0 && t3.forEach(function(e4) {
              e4.call(this);
            }, e3);
          }, 1);
        }, t2.resetReady = function() {
          this._isReady = false, this._readyQueue = [];
        }, t2.isReady = function() {
          return this._isReady;
        };
      };
      var nr = ["jpg", "jpeg", "gif", "png", "bmp", "image", "webp"], or = ["mp4", "quicktime", "mov"], sr = 1, ar = 2, rr = 3, ir = 255, ur = function() {
        function e2(t2) {
          var n2 = this;
          o(this, e2), jt(t2) || (this.userID = t2.userID || "", this.nick = t2.nick || "", this.gender = t2.gender || "", this.birthday = t2.birthday || 0, this.location = t2.location || "", this.selfSignature = t2.selfSignature || "", this.allowType = t2.allowType || S.ALLOW_TYPE_ALLOW_ANY, this.language = t2.language || 0, this.avatar = t2.avatar || "", this.messageSettings = t2.messageSettings || 0, this.adminForbidType = t2.adminForbidType || S.FORBID_TYPE_NONE, this.level = t2.level || 0, this.role = t2.role || 0, this.lastUpdatedTime = 0, this.profileCustomField = [], jt(t2.profileCustomField) || t2.profileCustomField.forEach(function(e3) {
            n2.profileCustomField.push({ key: e3.key, value: e3.value });
          }));
        }
        return a(e2, [{ key: "validate", value: function(e3) {
          var t2 = true, n2 = "";
          if (jt(e3))
            return { valid: false, tips: "empty options" };
          if (e3.profileCustomField)
            for (var o2 = e3.profileCustomField.length, s2 = null, a2 = 0; a2 < o2; a2++) {
              if (s2 = e3.profileCustomField[a2], !et(s2.key) || -1 === s2.key.indexOf("Tag_Profile_Custom"))
                return { valid: false, tips: "The prefix of keys of the custom profile key-value pairs (which is profileCustomField) must be Tag_Profile_Custom" };
              if (!et(s2.value))
                return { valid: false, tips: "The type of values of the custom profile key-value pairs (which is profileCustomField) must be String" };
            }
          for (var r2 in e3)
            if (Object.prototype.hasOwnProperty.call(e3, r2)) {
              if ("profileCustomField" === r2)
                continue;
              if (jt(e3[r2]) && !et(e3[r2]) && !$e(e3[r2])) {
                n2 = "key:" + r2 + ", invalid value:" + e3[r2], t2 = false;
                continue;
              }
              switch (r2) {
                case "nick":
                  et(e3[r2]) || (n2 = "nick must be a string", t2 = false), gt(e3[r2]) > 500 && (n2 = "nick name limited: must less than or equal to ".concat(500, " bytes, current size: ").concat(gt(e3[r2]), " bytes"), t2 = false);
                  break;
                case "gender":
                  vt(He, e3.gender) || (n2 = "key:gender, invalid value:" + e3.gender, t2 = false);
                  break;
                case "birthday":
                  $e(e3.birthday) || (n2 = "birthday must be a number", t2 = false);
                  break;
                case "location":
                  et(e3.location) || (n2 = "location must be a string", t2 = false);
                  break;
                case "selfSignature":
                  et(e3.selfSignature) || (n2 = "selfSignature must be a string", t2 = false);
                  break;
                case "allowType":
                  vt(We, e3.allowType) || (n2 = "key:allowType, invalid value:" + e3.allowType, t2 = false);
                  break;
                case "language":
                  $e(e3.language) || (n2 = "language must be a number", t2 = false);
                  break;
                case "avatar":
                  et(e3.avatar) || (n2 = "avatar must be a string", t2 = false);
                  break;
                case "messageSettings":
                  0 !== e3.messageSettings && 1 !== e3.messageSettings && (n2 = "messageSettings must be 0 or 1", t2 = false);
                  break;
                case "adminForbidType":
                  vt(Ke, e3.adminForbidType) || (n2 = "key:adminForbidType, invalid value:" + e3.adminForbidType, t2 = false);
                  break;
                case "level":
                  $e(e3.level) || (n2 = "level must be a number", t2 = false);
                  break;
                case "role":
                  $e(e3.role) || (n2 = "role must be a number", t2 = false);
                  break;
                default:
                  n2 = "unknown key:" + r2 + "  " + e3[r2], t2 = false;
              }
            }
          return { valid: t2, tips: n2 };
        } }]), e2;
      }(), cr = a(function e2(t2) {
        o(this, e2), this.value = t2, this.next = null;
      }), lr = function() {
        function e2(t2) {
          o(this, e2), this.MAX_LENGTH = t2, this.pTail = null, this.pNodeToDel = null, this.map = /* @__PURE__ */ new Map();
        }
        return a(e2, [{ key: "set", value: function(e3) {
          var t2 = new cr(e3);
          if (this.map.size < this.MAX_LENGTH)
            null === this.pTail ? (this.pTail = t2, this.pNodeToDel = t2) : (this.pTail.next = t2, this.pTail = t2), this.map.set(e3, 1);
          else {
            var n2 = this.pNodeToDel;
            this.pNodeToDel = this.pNodeToDel.next, this.map.delete(n2.value), n2.next = null, n2 = null, this.pTail.next = t2, this.pTail = t2, this.map.set(e3, 1);
          }
        } }, { key: "has", value: function(e3) {
          return this.map.has(e3);
        } }, { key: "delete", value: function(e3) {
          this.has(e3) && this.map.delete(e3);
        } }, { key: "tail", value: function() {
          return this.pTail;
        } }, { key: "size", value: function() {
          return this.map.size;
        } }, { key: "data", value: function() {
          return Array.from(this.map.keys());
        } }, { key: "reset", value: function() {
          for (var e3; null !== this.pNodeToDel; )
            e3 = this.pNodeToDel, this.pNodeToDel = this.pNodeToDel.next, e3.next = null, e3 = null;
          this.pTail = null, this.map.clear();
        } }]), e2;
      }(), pr = ["groupID", "name", "avatar", "type", "introduction", "notification", "ownerID", "selfInfo", "createTime", "infoSequence", "lastInfoTime", "lastMessage", "nextMessageSeq", "memberNum", "maxMemberNum", "memberList", "joinOption", "groupCustomField", "muteAllMembers", "isSupportTopic", "inviteOption", "_lastRevokedTime"], dr = function() {
        function e2(t2) {
          o(this, e2), this.groupID = "", this.name = "", this.avatar = "", this.type = "", this.introduction = "", this.notification = "", this.ownerID = "", this.createTime = "", this.infoSequence = "", this.lastInfoTime = "", this.selfInfo = { messageRemindType: "", joinTime: "", nameCard: "", role: "", userID: "", memberCustomField: void 0, readedSequence: 0, excludedUnreadSequenceList: void 0 }, this.lastMessage = { lastTime: "", lastSequence: "", fromAccount: "", messageForShow: "" }, this.nextMessageSeq = "", this.memberNum = "", this.memberCount = "", this.maxMemberNum = "", this.maxMemberCount = "", this.joinOption = "", this.inviteOption = "", this.groupCustomField = [], this.muteAllMembers = false, this.isSupportTopic = false, this._lastRevokedTime = 0, this._initGroup(t2);
        }
        return a(e2, [{ key: "memberNum", get: function() {
          return this.memberCount;
        }, set: function(e3) {
        } }, { key: "maxMemberNum", get: function() {
          return this.maxMemberCount;
        }, set: function(e3) {
        } }, { key: "_initGroup", value: function(e3) {
          for (var t2 in e3)
            pr.indexOf(t2) < 0 || ("selfInfo" !== t2 ? ("memberNum" === t2 && (this.memberCount = e3[t2]), "maxMemberNum" === t2 && (this.maxMemberCount = e3[t2]), "isSupportTopic" !== t2 ? this[t2] = e3[t2] : this.isSupportTopic = 1 === e3[t2]) : this.updateSelfInfo(e3[t2]));
        } }, { key: "updateGroup", value: function(e3) {
          var t2 = this;
          e3.appid = void 0, e3.grossTopicNextMsgSeq = void 0, e3.selfInfo && (e3.selfInfo.grossTopicReadSeq = void 0);
          var n2 = JSON.parse(JSON.stringify(e3));
          n2.lastMsgTime && (this.lastMessage.lastTime = n2.lastMsgTime), at(n2.muteAllMembers) || ("On" === n2.muteAllMembers ? n2.muteAllMembers = true : n2.muteAllMembers = false), n2.groupCustomField && It(this.groupCustomField, n2.groupCustomField), at(n2.memberNum) || (this.memberCount = n2.memberNum), at(n2.maxMemberNum) || (this.maxMemberCount = n2.maxMemberNum), at(n2.isSupportTopic) || (this.isSupportTopic = $e(n2.isSupportTopic) ? 1 === n2.isSupportTopic : n2.isSupportTopic), pt(this, n2, ["members", "errorCode", "lastMsgTime", "groupCustomField", "memberNum", "maxMemberNum", "isSupportTopic"]), st(n2.members) && n2.members.length > 0 && n2.members.forEach(function(e4) {
            e4.userID === t2.selfInfo.userID && pt(t2.selfInfo, e4, ["sequence"]);
          });
        } }, { key: "updateSelfInfo", value: function(e3) {
          var n2 = { nameCard: e3.nameCard, joinTime: e3.joinTime, role: e3.role, messageRemindType: e3.messageRemindType, readedSequence: e3.readedSequence, excludedUnreadSequenceList: e3.excludedUnreadSequenceList };
          pt(this.selfInfo, t({}, n2), [], ["", null, void 0, 0, NaN]);
        } }, { key: "setSelfNameCard", value: function(e3) {
          this.selfInfo.nameCard = e3;
        } }]), e2;
      }(), gr = function(e2, n2) {
        return at(e2) ? { lastTime: 0, lastSequence: 0, fromAccount: 0, messageForShow: "", payload: null, type: "", isRevoked: false, cloudCustomData: "", onlineOnlyFlag: false, nick: "", nameCard: "", version: 0, isPeerRead: false, revoker: null } : e2 instanceof Ha ? { lastTime: e2.time || 0, lastSequence: e2.sequence || 0, fromAccount: e2.from || "", messageForShow: xt(e2.type, e2.payload, n2), payload: e2.payload || null, type: e2.type || null, isRevoked: e2.isRevoked || false, cloudCustomData: e2.cloudCustomData || "", onlineOnlyFlag: e2._onlineOnlyFlag || false, nick: e2.nick || "", nameCard: e2.nameCard || "", version: e2.version || 0, isPeerRead: e2.isPeerRead || false, revoker: e2.revoker || null } : t(t({}, e2), {}, { messageForShow: xt(e2.type, e2.payload, n2) });
      }, _r = function() {
        function e2(t2, n2) {
          o(this, e2), this.conversationID = t2.conversationID || "", this.unreadCount = t2.unreadCount || 0, this.type = t2.type || "", this.lastMessage = gr(t2.lastMessage, n2), t2.lastMsgTime && (this.lastMessage.lastTime = t2.lastMsgTime), this._isInfoCompleted = false, this.peerReadTime = t2.peerReadTime || 0, this.groupAtInfoList = [], this.remark = "", this.isPinned = t2.isPinned || false, this.messageRemindType = "", this.markList = t2.markList || [], this.customData = t2.customData || "", this.conversationGroupList = t2.conversationGroupList || [], this._initProfile(t2);
        }
        return a(e2, [{ key: "toAccount", get: function() {
          return this.conversationID.startsWith(S.CONV_C2C) ? this.conversationID.replace(S.CONV_C2C, "") : this.conversationID.startsWith(S.CONV_GROUP) ? this.conversationID.replace(S.CONV_GROUP, "") : "";
        } }, { key: "subType", get: function() {
          return this.groupProfile ? this.groupProfile.type : "";
        } }, { key: "_initProfile", value: function(e3) {
          var t2 = this;
          Object.keys(e3).forEach(function(n2) {
            switch (n2) {
              case "userProfile":
                t2.userProfile = e3.userProfile;
                break;
              case "groupProfile":
                t2.groupProfile = e3.groupProfile;
            }
          }), at(this.userProfile) && this.type === S.CONV_C2C ? this.userProfile = new ur({ userID: e3.conversationID.replace("C2C", "") }) : at(this.groupProfile) && this.type === S.CONV_GROUP && (this.groupProfile = new dr({ groupID: e3.conversationID.replace("GROUP", "") }));
        } }, { key: "updateUnreadCount", value: function(e3) {
          var t2 = e3.nextUnreadCount, n2 = e3.isFromGetConversations, o2 = e3.isUnreadC2CMessage;
          at(t2) || (Ct(this.subType) ? this.unreadCount = 0 : n2 && this.type === S.CONV_GROUP || n2 && this.type === S.CONV_TOPIC || o2 && this.type === S.CONV_C2C ? this.unreadCount = t2 : this.unreadCount = this.unreadCount + t2);
        } }, { key: "updateLastMessage", value: function(e3) {
          this.lastMessage = gr(e3);
        } }, { key: "updateGroupAtInfoList", value: function(e3) {
          if (!this._isNeedMergeGroupAtInfo(e3)) {
            var t2, n2 = (M(t2 = e3.groupAtType) || y(t2) || I(t2) || T()).slice(0);
            -1 !== n2.indexOf(S.CONV_AT_ME) && -1 !== n2.indexOf(S.CONV_AT_ALL) && (n2 = [S.CONV_AT_ALL_AT_ME]);
            var o2 = { from: e3.from, groupID: e3.groupID, topicID: e3.topicID, messageSequence: e3.sequence, atTypeArray: n2, __random: e3.__random, __sequence: e3.__sequence };
            this.groupAtInfoList.push(o2);
          }
        } }, { key: "_isNeedMergeGroupAtInfo", value: function(e3) {
          var t2 = e3.groupID, n2 = e3.sequence;
          if (!Tt({ groupID: t2 }))
            return false;
          var o2 = false;
          return this.groupAtInfoList.forEach(function(t3) {
            t3.messageSequence === n2 && (t3.atTypeArray.indexOf(S.CONV_AT_ME) > -1 && e3.groupAtType.indexOf(S.CONV_AT_ALL) > -1 && (t3.atTypeArray = [S.CONV_AT_ALL_AT_ME]), t3.atTypeArray.indexOf(S.CONV_AT_ALL) > -1 && e3.groupAtType.indexOf(S.CONV_AT_ME) > -1 && (t3.atTypeArray = [S.CONV_AT_ALL_AT_ME], t3.__random = e3.__random, t3.__sequence = e3.__sequence), o2 = true);
          }), o2;
        } }, { key: "clearGroupAtInfoList", value: function() {
          this.groupAtInfoList.length = 0;
        } }, { key: "reduceUnreadCount", value: function() {
          return this.unreadCount >= 1 && (this.unreadCount -= 1, true);
        } }, { key: "isLastMessageRevoked", value: function(e3) {
          var t2 = e3.sequence, n2 = e3.time;
          return this.type === S.CONV_C2C && t2 === this.lastMessage.lastSequence && n2 === this.lastMessage.lastTime || this.type === S.CONV_GROUP && t2 === this.lastMessage.lastSequence;
        } }, { key: "setLastMessageRevoked", value: function(e3) {
          this.lastMessage.isRevoked = e3;
        } }, { key: "setLastMessageRevoker", value: function(e3) {
          this.lastMessage.revoker = e3;
        } }]), e2;
      }(), hr = function() {
        function e2(t2) {
          o(this, e2), this._conversationModule = t2, this._n = "MessageRemindHandler", this._updateSequence = 0;
        }
        return a(e2, [{ key: "getC2CMessageRemindType", value: function() {
          var e3 = this, t2 = "".concat(this._n, ".getC2CMessageRemindType");
          return this._conversationModule.request({ protocolName: Do, updateSequence: this._updateSequence }).then(function(n2) {
            xe.l("".concat(t2, " ok"));
            var o2 = n2.data, s2 = o2.updateSequence, a2 = o2.muteFlagList;
            e3._updateSequence = s2, e3._patchC2CMessageRemindType(a2);
          }).catch(function(e4) {
            xe.e("".concat(t2, " failed. error:"), e4);
          });
        } }, { key: "_patchC2CMessageRemindType", value: function(e3) {
          var t2 = this, n2 = 0, o2 = "";
          st(e3) && e3.length > 0 && e3.forEach(function(e4) {
            var s2 = e4.userID, a2 = e4.muteFlag;
            0 === a2 ? o2 = S.MSG_REMIND_ACPT_AND_NOTE : 1 === a2 ? o2 = S.MSG_REMIND_DISCARD : 2 === a2 && (o2 = S.MSG_REMIND_ACPT_NOT_NOTE), true === t2._conversationModule.patchMessageRemindType({ ID: s2, isC2CConversation: true, messageRemindType: o2 }) && (n2 += 1);
          }), xe.l("".concat(this._n, "._patchC2CMessageRemindType count:").concat(n2));
        } }, { key: "set", value: function(e3) {
          return e3.groupID ? this._setGroupMessageRemindType(e3) : st(e3.userIDList) ? this._setC2CMessageRemindType(e3) : void 0;
        } }, { key: "_setGroupMessageRemindType", value: function(e3) {
          var t2 = this, n2 = "".concat(this._n, "._setGroupMessageRemindType"), o2 = e3.groupID, s2 = e3.messageRemindType, a2 = "groupID:".concat(o2, " messageRemindType:").concat(s2), r2 = new ka("setMessageRemindType");
          return r2.setMessage(a2), this._getModule(bn).modifyGroupMemberInfo({ groupID: o2, messageRemindType: s2, userID: this._conversationModule.getMyUserID() }).then(function() {
            r2.setNetworkType(t2._conversationModule.getNetworkType()).end(), xe.l("".concat(n2, " ok. ").concat(a2));
            var o3 = t2.onGroupMessageRemindTypeUpdated(e3);
            return t2._conversationModule.emitTotalUnreadMessageCountUpdate(), Ka(o3);
          }).catch(function(e4) {
            return t2._conversationModule.probeNetwork().then(function(t3) {
              var n3 = v(t3, 2), o3 = n3[0], s3 = n3[1];
              r2.setError(e4, o3, s3).end();
            }), xe.e("".concat(n2, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "onGroupMessageRemindTypeUpdated", value: function(e3) {
          var t2 = e3.groupID, n2 = e3.messageRemindType, o2 = this._getModule(Un).getLocalGroupProfile(t2);
          if (o2 && (o2.selfInfo.messageRemindType = n2), Dt(t2)) {
            var s2 = t2, a2 = qt(s2), r2 = this._getModule(wn).getLocalTopic(a2, s2);
            return r2 && (r2.updateSelfInfo({ messageRemindType: n2 }), this._conversationModule.emitOuterEvent(E.TOPIC_UPDATED, { groupID: a2, topic: r2 })), { topic: r2 };
          }
          return this._conversationModule.patchMessageRemindType({ ID: t2, isC2CConversation: false, messageRemindType: n2 }) && this._emitConversationUpdate(), { group: o2 };
        } }, { key: "_setC2CMessageRemindType", value: function(e3) {
          var t2 = this, n2 = "".concat(this._n, "._setC2CMessageRemindType"), o2 = e3.userIDList, s2 = e3.messageRemindType, a2 = o2.slice(0, 30), r2 = 0;
          s2 === S.MSG_REMIND_DISCARD ? r2 = 1 : s2 === S.MSG_REMIND_ACPT_NOT_NOTE && (r2 = 2);
          var i2 = "userIDList:".concat(a2, " messageRemindType:").concat(s2), u2 = new ka("setMessageRemindType");
          return u2.setMessage(i2), this._conversationModule.request({ protocolName: To, requestData: { userIDList: a2, muteFlag: r2 } }).then(function(e4) {
            u2.setNetworkType(t2._conversationModule.getNetworkType()).end();
            var o3 = e4.data, r3 = o3.updateSequence, i3 = o3.errorList;
            t2._updateSequence = r3;
            var c2 = [], l2 = [];
            st(i3) && i3.forEach(function(e5) {
              c2.push(e5.userID), l2.push({ userID: e5.userID, code: e5.errorCode });
            });
            var p2 = a2.filter(function(e5) {
              return -1 === c2.indexOf(e5);
            });
            xe.l("".concat(n2, " ok. successUserIDList:").concat(p2, " failureUserIDList:").concat(JSON.stringify(l2)));
            var d2 = 0;
            return p2.forEach(function(e5) {
              t2._conversationModule.patchMessageRemindType({ ID: e5, isC2CConversation: true, messageRemindType: s2 }) && (d2 += 1);
            }), d2 >= 1 && t2._emitConversationUpdate(), a2.length = c2.length = 0, t2._conversationModule.emitTotalUnreadMessageCountUpdate(), za({ successUserIDList: p2.map(function(e5) {
              return { userID: e5 };
            }), failureUserIDList: l2 });
          }).catch(function(e4) {
            return t2._conversationModule.probeNetwork().then(function(t3) {
              var n3 = v(t3, 2), o3 = n3[0], s3 = n3[1];
              u2.setError(e4, o3, s3).end();
            }), xe.e("".concat(n2, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "_getModule", value: function(e3) {
          return this._conversationModule.getModule(e3);
        } }, { key: "_emitConversationUpdate", value: function() {
          this._conversationModule.emitConversationUpdate(true, false);
        } }, { key: "setUpdateSequence", value: function(e3) {
          this._updateSequence = e3;
        } }, { key: "reset", value: function() {
          xe.l("".concat(this._n, ".reset")), this._updateSequence = 0;
        } }]), e2;
      }(), fr = function() {
        function e2(t2) {
          o(this, e2), this._conversationModule = t2, this._n = "ConvGroupHandler", this._convGroupMap = /* @__PURE__ */ new Map(), this._startIndex = 0, this._pagingStatus = Zt.NOT_START;
        }
        return a(e2, [{ key: "setConvCustomData", value: function(e3) {
          var t2 = this, n2 = "".concat(this._n, ".").concat("setConvCustomData"), o2 = e3.conversationIDList, s2 = e3.customData;
          xe.l("".concat(n2, " options:"), e3);
          var a2 = new ka("setConvCustomData");
          a2.setMessage(JSON.stringify(e3));
          var r2 = { fromAccount: this._getMyUserID(), itemList: [] }, i2 = [], u2 = [];
          return o2.forEach(function(e4) {
            if (!t2._hasLocalConversation(e4))
              return t2._onConversationNotFound(u2, e4), true;
            if (!Et(e4) && !St(e4))
              return t2._onConversationIDInvalid(u2, e4), true;
            var n3 = { operationType: 2, contactItem: void 0, customMark: s2 };
            Et(e4) ? n3.contactItem = { type: 1, toAccount: e4.replace(S.CONV_C2C, "") } : St(e4) && (n3.contactItem = { type: 2, groupID: e4.replace(S.CONV_GROUP, "") }), r2.itemList.push(n3);
          }), u2.length === o2.length ? za({ successConversationIDList: i2, failureConversationIDList: u2 }) : this._conversationModule.request({ protocolName: wo, requestData: r2 }).then(function(e4) {
            a2.setNetworkType(t2._conversationModule.getNetworkType()).end(), xe.l("".concat(n2, " ok"));
            var o3 = e4.data.resultItem;
            if (st(o3)) {
              var r3, c2, l2 = false;
              o3.forEach(function(e5) {
                r3 = t2._concatConversationID(e5.contactItem), 0 === e5.resultCode ? (i2.push(r3), (c2 = t2._getLocalConversation(r3)) && c2.customData !== s2 && (c2.customData = s2, l2 = true)) : u2.push({ conversationID: r3, code: e5.resultCode, message: e5.resultInfo });
              }), true === l2 && t2._emitConversationUpdate();
            }
            return Ka({ successConversationIDList: i2, failureConversationIDList: u2 });
          }).catch(function(e4) {
            return t2._conversationModule.probeNetwork().then(function(t3) {
              var n3 = v(t3, 2), o3 = n3[0], s3 = n3[1];
              a2.setError(e4, o3, s3).end();
            }), xe.e("".concat(n2, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "markConversation", value: function(e3) {
          var t2 = this;
          if (!this._conversationModule.canIUse(B.CONV_MARK))
            return Ja({ code: da.CANNOT_USE_COMMERCIAL_ABILITY });
          var n2 = "".concat(this._n, ".").concat("markConversation"), o2 = e3.conversationIDList, s2 = e3.markType, a2 = e3.enableMark;
          xe.l("".concat(n2, " options:"), e3);
          var r2 = new ka("markConversation");
          r2.setMessage(JSON.stringify(e3));
          var i2 = void 0, u2 = void 0, c2 = this._getFlagBit(s2);
          true === a2 ? u2 = [c2] : i2 = [c2];
          var l2 = { fromAccount: this._getMyUserID(), itemList: [] }, p2 = [], d2 = [];
          return o2.forEach(function(e4) {
            if (!t2._hasLocalConversation(e4))
              return t2._onConversationNotFound(d2, e4), true;
            if (!Et(e4) && !St(e4))
              return t2._onConversationIDInvalid(d2, e4), true;
            var n3 = { operationType: 1, contactItem: void 0, clearMark: i2, setMark: u2 };
            Et(e4) ? n3.contactItem = { type: 1, toAccount: e4.replace(S.CONV_C2C, "") } : St(e4) && (n3.contactItem = { type: 2, groupID: e4.replace(S.CONV_GROUP, "") }), l2.itemList.push(n3);
          }), d2.length === o2.length ? za({ successConversationIDList: p2, failureConversationIDList: d2 }) : this._conversationModule.request({ protocolName: Fo, requestData: l2 }).then(function(e4) {
            r2.setNetworkType(t2._conversationModule.getNetworkType()).end(), xe.l("".concat(n2, " ok"));
            var o3 = e4.data.resultItem;
            if (st(o3)) {
              var i3, u3, c3 = false;
              o3.forEach(function(e5) {
                if (i3 = t2._concatConversationID(e5.contactItem), 0 === e5.resultCode) {
                  if (p2.push(i3), u3 = t2._getLocalConversation(i3)) {
                    var n3 = u3.markList.indexOf(s2);
                    true === a2 ? -1 === n3 && (u3.markList.push(s2), c3 = true) : -1 !== n3 && (u3.markList.splice(n3, 1), c3 = true);
                  }
                } else
                  d2.push({ conversationID: i3, code: e5.resultCode, message: e5.resultInfo });
              }), true === c3 && t2._emitConversationUpdate();
            }
            return Ka({ successConversationIDList: p2, failureConversationIDList: d2 });
          }).catch(function(e4) {
            return t2._conversationModule.probeNetwork().then(function(t3) {
              var n3 = v(t3, 2), o3 = n3[0], s3 = n3[1];
              r2.setError(e4, o3, s3).end();
            }), xe.e("".concat(n2, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "getLocalConvGroupList", value: function() {
          var e3 = this;
          return xe.l("".concat(this._n, ".getLocalConvGroupList pagingStatus:").concat(this._pagingStatus)), this._pagingStatus === Zt.REJECTED ? this.getRemoteConvGroupList().then(function() {
            return Ka(m(e3._convGroupMap.values()));
          }) : za(m(this._convGroupMap.values()));
        } }, { key: "getRemoteConvGroupList", value: function() {
          var e3 = this, t2 = "".concat(this._n, ".getRemoteConvGroupList");
          return this._pagingStatus = Zt.PENDING, this._conversationModule.request({ protocolName: Ko, requestData: { fromAccount: this._getMyUserID(), startIndex: this._startIndex, startTime: be() } }).then(function(n2) {
            var o2, s2, a2 = n2.data, r2 = a2.completeFlag, i2 = a2.contactItem, u2 = a2.nextStartIndex, c2 = void 0 === u2 ? 0 : u2, l2 = a2.groupItem;
            (e3._startIndex = c2, xe.l("".concat(t2, " completeFlag:").concat(r2, " nextStartIndex:").concat(c2)), st(l2) && l2.forEach(function(t3) {
              var n3 = t3.convGroupID, o3 = t3.groupName;
              e3._convGroupMap.set(n3, o3);
            }), st(i2)) && i2.forEach(function(t3) {
              var n3 = t3.standardMark, a3 = t3.customData, r3 = t3.convGroupIDList;
              if (o2 = e3._concatConversationID(t3), (s2 = e3._getLocalConversation(o2)) && (s2.markList = Bt(n3), s2.customData = a3 || "", st(r3))) {
                var i3 = [];
                r3.forEach(function(t4) {
                  e3._convGroupMap.has(t4) && i3.push(e3._convGroupMap.get(t4));
                }), s2.conversationGroupList = [].concat(i3), i3.length = 0;
              }
            });
            if (0 === r2)
              return e3.getRemoteConvGroupList();
            1 === r2 && (e3._pagingStatus = Zt.RESOLVED, e3._emitConversationUpdate(), e3._emitConvGroupListUpdate());
          }).catch(function(n2) {
            e3._pagingStatus = Zt.REJECTED, xe.w("".concat(t2, " failed. error:"), n2);
          });
        } }, { key: "createConvGroup", value: function(e3) {
          var t2 = this;
          if (!this._conversationModule.canIUse(B.CONV_GROUP))
            return Ja({ code: da.CANNOT_USE_COMMERCIAL_ABILITY });
          var n2 = "".concat(this._n, ".").concat("createConvGroup");
          xe.l("".concat(n2, " options:"), e3);
          var o2 = new ka("createConvGroup");
          o2.setMessage(JSON.stringify(e3));
          var s2 = e3.groupName, a2 = e3.conversationIDList, r2 = { fromAccount: this._getMyUserID(), itemList: [{ groupName: s2, contactItem: [] }] }, i2 = [], u2 = [];
          return a2.forEach(function(e4) {
            return t2._hasLocalConversation(e4) ? Et(e4) || St(e4) ? void (Et(e4) ? r2.itemList[0].contactItem.push({ type: 1, toAccount: e4.replace(S.CONV_C2C, "") }) : St(e4) && r2.itemList[0].contactItem.push({ type: 2, groupID: e4.replace(S.CONV_GROUP, "") })) : (t2._onConversationIDInvalid(u2, e4), true) : (t2._onConversationNotFound(u2, e4), true);
          }), u2.length === a2.length ? za({ successConversationIDList: i2, failureConversationIDList: u2 }) : this._conversationModule.request({ protocolName: qo, requestData: r2 }).then(function(e4) {
            o2.setNetworkType(t2._conversationModule.getNetworkType()).end(), xe.l("".concat(n2, " ok"));
            var a3 = e4.data.groupResultItem[0], r3 = a3.groupItem, c2 = a3.resultItem;
            if (ot(r3) && (t2._convGroupMap.set(r3.convGroupID, r3.groupName), t2._emitConvGroupListUpdate()), st(c2)) {
              var l2, p2, d2 = false;
              c2.forEach(function(e5) {
                l2 = t2._concatConversationID(e5.contactItem), 0 === e5.resultCode ? (i2.push(l2), (p2 = t2._getLocalConversation(l2)) && -1 === p2.conversationGroupList.indexOf(s2) && (p2.conversationGroupList.push(s2), d2 = true)) : u2.push({ conversationID: l2, code: e5.resultCode, message: e5.resultInfo });
              }), true === d2 && (t2._emitConversationUpdate(), t2._emitConvGroupListUpdate());
            }
            return Ka({ successConversationIDList: i2, failureConversationIDList: u2 });
          }).catch(function(e4) {
            return t2._conversationModule.probeNetwork().then(function(t3) {
              var n3 = v(t3, 2), s3 = n3[0], a3 = n3[1];
              o2.setError(e4, s3, a3).end();
            }), xe.e("".concat(n2, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "deleteConvGroup", value: function(e3) {
          var t2 = this;
          if (!this._conversationModule.canIUse(B.CONV_GROUP))
            return Ja({ code: da.CANNOT_USE_COMMERCIAL_ABILITY });
          var n2 = "".concat(this._n, ".").concat("deleteConvGroup");
          xe.l("".concat(n2, " groupName:").concat(e3));
          var o2 = new ka("deleteConvGroup");
          return o2.setMessage(e3), this._conversationModule.request({ protocolName: xo, requestData: { fromAccount: this._getMyUserID(), groupName: [e3] } }).then(function(s2) {
            o2.setNetworkType(t2._conversationModule.getNetworkType()).end(), xe.l("".concat(n2, " ok"));
            var a2 = s2.data.groupItem;
            if (st(a2)) {
              var r2 = false;
              a2.forEach(function(e4) {
                t2._convGroupMap.has(e4.convGroupID) && (t2._convGroupMap.delete(e4.convGroupID), r2 = true);
              }), true === r2 && t2._emitConvGroupListUpdate();
            }
            t2._eraseFromConversationGroupList([e3]);
          }).catch(function(e4) {
            return t2._conversationModule.probeNetwork().then(function(t3) {
              var n3 = v(t3, 2), s2 = n3[0], a2 = n3[1];
              o2.setError(e4, s2, a2).end();
            }), xe.e("".concat(n2, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "renameConvGroup", value: function(e3) {
          var t2 = this;
          if (!this._conversationModule.canIUse(B.CONV_GROUP))
            return Ja({ code: da.CANNOT_USE_COMMERCIAL_ABILITY });
          var n2 = "".concat(this._n, ".").concat("renameConvGroup");
          xe.l("".concat(n2, " options:"), e3);
          var o2 = new ka("renameConvGroup");
          o2.setMessage(JSON.stringify(e3));
          var s2 = e3.oldName, a2 = e3.newName;
          return this._conversationModule.request({ protocolName: Vo, requestData: { fromAccount: this._getMyUserID(), updateType: 1, updateGroup: { updateGroupType: 1, oldName: s2, newName: a2 } } }).then(function(e4) {
            o2.setNetworkType(t2._conversationModule.getNetworkType()).end(), xe.l("".concat(n2, " ok"));
            var r2 = e4.data.updateGroupResult.convGroupID;
            t2._convGroupMap.set(r2, a2), t2._emitConvGroupListUpdate();
            var i2, u2, c2 = t2._conversationModule.getLocalConversationList(), l2 = false;
            c2.forEach(function(e5) {
              i2 = e5.conversationGroupList, -1 !== (u2 = i2.indexOf(s2)) && (i2.splice(u2, 1, a2), l2 = true);
            }), true === l2 && t2._emitConversationUpdate();
          }).catch(function(e4) {
            return t2._conversationModule.probeNetwork().then(function(t3) {
              var n3 = v(t3, 2), s3 = n3[0], a3 = n3[1];
              o2.setError(e4, s3, a3).end();
            }), xe.e("".concat(n2, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "addConvsToGroup", value: function(e3) {
          var t2 = this;
          if (!this._conversationModule.canIUse(B.CONV_GROUP))
            return Ja({ code: da.CANNOT_USE_COMMERCIAL_ABILITY });
          var n2 = "".concat(this._n, ".").concat("addConvsToGroup");
          xe.l("".concat(n2, " options:"), e3);
          var o2 = new ka("addConvsToGroup");
          o2.setMessage(JSON.stringify(e3));
          var s2 = e3.conversationIDList, a2 = e3.groupName, r2 = { fromAccount: this._getMyUserID(), updateType: 1, updateGroup: { updateGroupType: 2, groupName: a2, updateItem: [] } }, i2 = [], u2 = [];
          return s2.forEach(function(e4) {
            return t2._hasLocalConversation(e4) ? Et(e4) || St(e4) ? void (Et(e4) ? r2.updateGroup.updateItem.push({ operationType: 1, contactItem: { type: 1, toAccount: e4.replace(S.CONV_C2C, "") } }) : St(e4) && r2.updateGroup.updateItem.push({ operationType: 1, contactItem: { type: 2, groupID: e4.replace(S.CONV_GROUP, "") } })) : (t2._onConversationIDInvalid(u2, e4), true) : (t2._onConversationNotFound(u2, e4), true);
          }), u2.length === s2.length ? za({ successConversationIDList: i2, failureConversationIDList: u2 }) : this._conversationModule.request({ protocolName: Bo, requestData: r2 }).then(function(e4) {
            o2.setNetworkType(t2._conversationModule.getNetworkType()).end(), xe.l("".concat(n2, " ok"));
            var s3 = e4.data.updateGroupResult.contactResultItem;
            if (st(s3)) {
              var r3, c2, l2 = false;
              s3.forEach(function(e5) {
                r3 = t2._concatConversationID(e5.contactItem), 0 === e5.resultCode ? (c2 = t2._getLocalConversation(r3)) && -1 === c2.conversationGroupList.indexOf(a2) && (c2.conversationGroupList.push(a2), i2.push(r3), l2 = true) : u2.push({ conversationID: r3, code: e5.resultCode, message: e5.resultInfo });
              }), true === l2 && (t2._emitConversationUpdate(), t2._emitConvInGroupUpdate(a2));
            }
            return Ka({ successConversationIDList: i2, failureConversationIDList: u2 });
          }).catch(function(e4) {
            return t2._conversationModule.probeNetwork().then(function(t3) {
              var n3 = v(t3, 2), s3 = n3[0], a3 = n3[1];
              o2.setError(e4, s3, a3).end();
            }), xe.e("".concat(n2, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "deleteConvsFromGroup", value: function(e3) {
          var t2 = this;
          if (!this._conversationModule.canIUse(B.CONV_GROUP))
            return Ja({ code: da.CANNOT_USE_COMMERCIAL_ABILITY });
          var n2 = "".concat(this._n, ".").concat("deleteConvsFromGroup");
          xe.l("".concat(n2, " options:"), e3);
          var o2 = new ka("deleteConvsFromGroup");
          o2.setMessage(JSON.stringify(e3));
          var s2 = e3.conversationIDList, a2 = e3.groupName, r2 = { fromAccount: this._getMyUserID(), updateType: 1, updateGroup: { updateGroupType: 2, groupName: a2, updateItem: [] } }, i2 = [], u2 = [];
          return s2.forEach(function(e4) {
            return t2._hasLocalConversation(e4) ? Et(e4) || St(e4) ? void (Et(e4) ? r2.updateGroup.updateItem.push({ operationType: 2, contactItem: { type: 1, toAccount: e4.replace(S.CONV_C2C, "") } }) : St(e4) && r2.updateGroup.updateItem.push({ operationType: 2, contactItem: { type: 2, groupID: e4.replace(S.CONV_GROUP, "") } })) : (t2._onConversationIDInvalid(u2, e4), true) : (t2._onConversationNotFound(u2, e4), true);
          }), u2.length === s2.length ? za({ successConversationIDList: i2, failureConversationIDList: u2 }) : this._conversationModule.request({ protocolName: Ho, requestData: r2 }).then(function(e4) {
            o2.setNetworkType(t2._conversationModule.getNetworkType()).end(), xe.l("".concat(n2, " ok"));
            var s3 = e4.data.updateGroupResult.contactResultItem;
            if (st(s3)) {
              var r3, c2, l2 = false;
              s3.forEach(function(e5) {
                if (r3 = t2._concatConversationID(e5.contactItem), 0 === e5.resultCode) {
                  if (c2 = t2._getLocalConversation(r3)) {
                    var n3 = c2.conversationGroupList.indexOf(a2);
                    -1 !== n3 && (c2.conversationGroupList.splice(n3, 1), i2.push(r3), l2 = true);
                  }
                } else
                  u2.push({ conversationID: r3, code: e5.resultCode, message: e5.resultInfo });
              }), true === l2 && (t2._emitConversationUpdate(), t2._emitConvInGroupUpdate(a2));
            }
            return Ka({ successConversationIDList: i2, failureConversationIDList: u2 });
          }).catch(function(e4) {
            return t2._conversationModule.probeNetwork().then(function(t3) {
              var n3 = v(t3, 2), s3 = n3[0], a3 = n3[1];
              o2.setError(e4, s3, a3).end();
            }), xe.e("".concat(n2, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "onConvMarkUpdated", value: function(e3) {
          var t2 = this;
          if (!jt(e3)) {
            var n2, o2;
            xe.d("".concat(this._n, ".onConvMarkUpdated markItemList:"), e3);
            var s2 = false;
            e3.forEach(function(e4) {
              var a2 = e4.recentContactItem, r2 = e4.optType, i2 = e4.standardMark, u2 = e4.customMark;
              if (n2 = t2._concatConversationID(a2), o2 = t2._getLocalConversation(n2))
                if (1 === r2) {
                  var c2 = Bt(i2);
                  true !== function(e5, t3) {
                    if (e5 === t3)
                      return true;
                    if (!e5 || !t3)
                      return false;
                    if (e5.length !== t3.length)
                      return false;
                    for (var n3 = 0, o3 = e5.length; n3 < o3; n3++)
                      if (e5[n3] !== t3[n3])
                        return false;
                    return true;
                  }(o2.markList, c2) && (o2.markList = c2, s2 = true);
                } else
                  2 === r2 && o2.customData !== u2 && void 0 !== u2 && (o2.customData = u2, s2 = true);
            }), true === s2 && this._emitConversationUpdate();
          }
        } }, { key: "onConvGroupCreated", value: function(e3) {
          var t2 = this;
          xe.d("".concat(this._n, ".onConvGroupCreated resultList:"), e3);
          var n2 = false, o2 = false;
          st(e3) && (e3.forEach(function(e4) {
            var s2 = e4.msgGroupItem, a2 = s2.groupID, r2 = s2.groupName;
            t2._convGroupMap.get(a2) !== r2 && (t2._convGroupMap.set(a2, r2), o2 = true);
            var i2, u2, c2 = e4.msgRecentContactItem;
            st(c2) && c2.forEach(function(e5) {
              i2 = t2._concatConversationID(e5), (u2 = t2._getLocalConversation(i2)) && -1 === u2.conversationGroupList.indexOf(r2) && (u2.conversationGroupList.push(r2), n2 = true);
            });
          }), true === n2 && this._emitConversationUpdate(), true === o2 && this._emitConvGroupListUpdate());
        } }, { key: "onConvGroupDeleted", value: function(e3) {
          var t2 = this;
          xe.d("".concat(this._n, ".onConvGroupDeleted groupItemList:"), e3);
          var n2 = [];
          if (st(e3)) {
            var o2 = false;
            e3.forEach(function(e4) {
              var s2 = e4.groupID, a2 = e4.groupName;
              t2._convGroupMap.has(s2) && (t2._convGroupMap.delete(s2), o2 = true, n2.push(a2));
            }), true === o2 && this._emitConvGroupListUpdate();
          }
          this._eraseFromConversationGroupList(n2);
        } }, { key: "_eraseFromConversationGroupList", value: function(e3) {
          jt(e3) || (this._conversationModule.getLocalConversationList().forEach(function(t2) {
            t2.conversationGroupList = t2.conversationGroupList.filter(function(t3) {
              return !e3.includes(t3);
            });
          }), this._emitConversationUpdate());
        } }, { key: "onConvGroupNameUpdated", value: function(e3) {
          xe.d("".concat(this._n, ".onConvGroupNameUpdated options:"), e3);
          var t2 = e3.groupID, n2 = e3.groupName, o2 = e3.oldGroupName;
          if (this._convGroupMap.get(t2) !== n2) {
            this._convGroupMap.set(t2, n2), this._emitConvGroupListUpdate();
            var s2, a2, r2 = this._conversationModule.getLocalConversationList(), i2 = false;
            r2.forEach(function(e4) {
              s2 = e4.conversationGroupList, -1 !== (a2 = s2.indexOf(o2)) && (s2.splice(a2, 1, n2), i2 = true);
            }), true === i2 && this._emitConversationUpdate();
          }
        } }, { key: "onConvInGroupUpdated", value: function(e3) {
          var t2 = this;
          xe.d("".concat(this._n, ".onConvInGroupUpdated options:"), e3);
          var n2 = e3.oldGroupName, o2 = e3.recentContactUpdateGroupItem;
          if (st(o2)) {
            var s2, a2, r2, i2 = false;
            o2.forEach(function(e4) {
              var o3 = e4.contactOptType, u2 = e4.recentContactItem;
              s2 = t2._concatConversationID(u2), (a2 = t2._getLocalConversation(s2)) && (r2 = a2.conversationGroupList.indexOf(n2), 1 === o3 ? -1 === r2 && (a2.conversationGroupList.push(n2), i2 = true) : 2 === o3 && -1 !== r2 && (a2.conversationGroupList.splice(r2, 1), i2 = true));
            }), true === i2 && (this._emitConversationUpdate(), this._emitConvInGroupUpdate(n2));
          }
        } }, { key: "onConvAddedToOrDeletedFromGroup", value: function(e3) {
          var t2 = this;
          xe.d("".concat(this._n, ".onConvAddedToOrDeletedFromGroup options:"), e3);
          var n2 = e3.msgRecentContactItem, o2 = e3.msgRecentContactUpdateContactItem, s2 = this._concatConversationID(n2), a2 = this._getLocalConversation(s2);
          if (a2 && st(o2)) {
            var r2, i2 = false;
            o2.forEach(function(e4) {
              var n3 = e4.groupOptType, o3 = e4.recentContactGroupItem.groupName;
              r2 = a2.conversationGroupList.indexOf(o3), 1 === n3 ? -1 === r2 && (a2.conversationGroupList.push(o3), i2 = true) : 2 === n3 && -1 !== r2 && (a2.conversationGroupList.splice(r2, 1), i2 = true), true === i2 && t2._emitConvInGroupUpdate(o3);
            }), true === i2 && this._emitConversationUpdate();
          }
        } }, { key: "onConvGroupListSynced", value: function(e3) {
          var t2 = this;
          st(e3) && 0 !== e3.length && (xe.l("".concat(this._n, ".onConvGroupListSynced groupItemList:"), e3), e3.forEach(function(e4) {
            t2._convGroupMap.set(e4.convGroupID, e4.groupName);
          }));
        } }, { key: "getConvGroupListByID", value: function(e3) {
          var t2 = this;
          if (!jt(e3)) {
            var n2 = [];
            return e3.forEach(function(e4) {
              t2._convGroupMap.has(e4) && n2.push(t2._convGroupMap.get(e4));
            }), n2;
          }
        } }, { key: "_onConversationNotFound", value: function(e3, t2) {
          e3.push({ conversationID: t2, code: da.CONVERSATION_NOT_FOUND, message: this._conversationModule.getErrorMessage(da.CONVERSATION_NOT_FOUND) });
        } }, { key: "_onConversationIDInvalid", value: function(e3, t2) {
          e3.push({ conversationID: t2, code: da.INVALID_CONVERSATION_ID, message: this._conversationModule.getErrorMessage(da.INVALID_CONVERSATION_ID) });
        } }, { key: "_getFlagBit", value: function(e3) {
          for (var t2 = e3.toString(2), n2 = t2.length, o2 = n2 - 1; o2 >= 0; o2--)
            if ("1" === t2[o2])
              return n2 - o2 - 1;
        } }, { key: "_concatConversationID", value: function(e3) {
          var t2, n2 = e3.type, o2 = e3.to, s2 = e3.groupID, a2 = e3.userID;
          return 1 === n2 ? at(a2) ? at(o2) || (t2 = "".concat(S.CONV_C2C).concat(o2)) : t2 = "".concat(S.CONV_C2C).concat(a2) : 2 === n2 && (t2 = "".concat(S.CONV_GROUP).concat(s2)), t2;
        } }, { key: "_getMyUserID", value: function() {
          return this._conversationModule.getMyUserID();
        } }, { key: "_insertConversationGroup", value: function(e3, t2) {
          var n2 = this._getLocalConversation(e3);
          if (n2) {
            var o2 = n2.conversationGroupList;
            -1 === o2.indexOf(t2) && o2.push(t2);
          }
        } }, { key: "_getLocalConversation", value: function(e3) {
          return this._conversationModule.getLocalConversation(e3);
        } }, { key: "_hasLocalConversation", value: function(e3) {
          return this._conversationModule.hasLocalConversation(e3);
        } }, { key: "_emitConversationUpdate", value: function() {
          this._conversationModule.emitConversationUpdate(true, false);
        } }, { key: "_emitConvGroupListUpdate", value: function() {
          this._conversationModule.emitOuterEvent(E.CONVERSATION_GROUP_LIST_UPDATED, m(this._convGroupMap.values()));
        } }, { key: "_emitConvInGroupUpdate", value: function(e3) {
          var t2 = { groupName: e3, conversationList: [] }, n2 = this._conversationModule.getLocalConversationList();
          t2.conversationList = n2.filter(function(t3) {
            return t3.conversationGroupList.includes(e3);
          }), this._conversationModule.emitOuterEvent(E.CONVERSATION_IN_GROUP_UPDATED, t2);
        } }, { key: "reset", value: function() {
          xe.l("".concat(this._n, ".reset")), this._convGroupMap.clear(), this._startIndex = 0, this._pagingStatus = Zt.NOT_START;
        } }]), e2;
      }(), vr = function(e2) {
        i(s2, e2);
        var n2 = f(s2);
        function s2(e3) {
          var t2;
          return o(this, s2), (t2 = n2.call(this, e3))._n = "ConversationModule", tr.mixin(_(t2)), t2._messageListHandler = new Qa(), t2._messageRemindHandler = new hr(_(t2)), t2._convGroupHandler = new fr(_(t2)), t2.singlyLinkedList = new lr(100), t2._pagingStatus = Zt.NOT_START, t2._pagingTimeStamp = 0, t2._pagingStartIndex = 0, t2._pagingPinnedTimeStamp = 0, t2._pagingPinnedStartIndex = 0, t2._pagingConvIDMap = /* @__PURE__ */ new Map(), t2._convIDFromUnreadDBMap = /* @__PURE__ */ new Map(), t2._conversationMap = /* @__PURE__ */ new Map(), t2._tmpGroupList = [], t2._tmpGroupAtTipsList = [], t2._peerReadTimeMap = /* @__PURE__ */ new Map(), t2._completedMap = /* @__PURE__ */ new Map(), t2._roamingMessageKeyAndTimeMap = /* @__PURE__ */ new Map(), t2._roamingMessageSequenceMap = /* @__PURE__ */ new Map(), t2._remoteGroupReadSequenceMap = /* @__PURE__ */ new Map(), t2._convTotalUnreadCount = 0, t2._pagingGetCostList = [], t2._initListeners(), t2;
        }
        return a(s2, [{ key: "_initListeners", value: function() {
          var e3 = this.getInnerEmitterInstance();
          e3.on(Za, this._initLocalConversationList, this), e3.on(er, this._onProfileUpdated, this);
        } }, { key: "onCheckTimer", value: function(e3) {
          e3 % 60 == 0 && this._messageListHandler.traversal();
        } }, { key: "_initLocalConversationList", value: function() {
          var e3 = this, t2 = new ka("_initLocalConversationList");
          xe.l("".concat(this._n, ".").concat("_initLocalConversationList"));
          var n3 = "", o2 = this._getStorageConversationList(), s3 = this.isIntl();
          if (o2) {
            for (var a2 = o2.length, r2 = 0; r2 < a2; r2++) {
              var i2 = o2[r2];
              if (i2) {
                if (i2.conversationID === "".concat(S.CONV_C2C, "@TLS#ERROR") || i2.conversationID === "".concat(S.CONV_C2C, "@TLS#NOT_FOUND"))
                  continue;
                if (i2.groupProfile) {
                  var u2 = i2.groupProfile.type;
                  if (Ct(u2))
                    continue;
                }
              }
              this._conversationMap.set(o2[r2].conversationID, new _r(o2[r2], s3));
            }
            this.emitConversationUpdate(true, false), n3 = "count:".concat(a2);
          } else
            n3 = "count:0";
          t2.setNetworkType(this.getNetworkType()).setMessage(n3).end(), this.getModule(Gn) || this.triggerReady(), this.ready(function() {
            e3._tmpGroupList.length > 0 && (e3.updateConversationGroupProfile(e3._tmpGroupList), e3._tmpGroupList.length = 0);
          }), this.syncConversationList();
        } }, { key: "onMessageSent", value: function(e3) {
          this._onSendOrReceiveMessage({ conversationOptionsList: e3.conversationOptionsList, isInstantMessage: true });
        } }, { key: "onNewMessage", value: function(e3) {
          this._onSendOrReceiveMessage(e3);
        } }, { key: "_onSendOrReceiveMessage", value: function(e3) {
          var t2 = this, n3 = e3.conversationOptionsList, o2 = e3.isInstantMessage, s3 = void 0 === o2 || o2, a2 = e3.isUnreadC2CMessage, r2 = void 0 !== a2 && a2, i2 = e3.updateUnreadCount, u2 = void 0 === i2 || i2;
          this._isReady ? 0 !== n3.length && (this._getC2CPeerReadTime(n3), this._updateLocalConversationList({ conversationOptionsList: n3, isInstantMessage: s3, isUnreadC2CMessage: r2, isFromGetConversations: false, updateUnreadCount: u2 }), s3 || (this._convIDFromUnreadDBMap = new Map([].concat(m(this._convIDFromUnreadDBMap), m(n3.map(function(e4) {
            return [e4.conversationID, 1];
          })))), this._diffAndDeleteConversation()), this._setStorageConversationList(), n3.filter(function(e4) {
            return e4.type === S.CONV_TOPIC;
          }).length > 0 || this.emitConversationUpdate()) : this.ready(function() {
            t2._onSendOrReceiveMessage(e3);
          });
        } }, { key: "updateConversationGroupProfile", value: function(e3) {
          var t2 = this;
          if (!st(e3) || 0 !== e3.length)
            if (0 !== this._conversationMap.size) {
              var n3 = false;
              e3.forEach(function(e4) {
                var o2 = "GROUP".concat(e4.groupID);
                if (t2._conversationMap.has(o2)) {
                  n3 = true;
                  var s3 = t2._conversationMap.get(o2);
                  s3.groupProfile = JSON.parse(JSON.stringify(e4)), s3.lastMessage.lastSequence < e4.nextMessageSeq && (s3.lastMessage.lastSequence = e4.nextMessageSeq - 1), s3.subType || (s3.subType = e4.type);
                }
              }), n3 && this.emitConversationUpdate(true, false);
            } else
              this._tmpGroupList = e3;
        } }, { key: "_updateConversationUserProfile", value: function(e3) {
          var t2 = this;
          e3.data.forEach(function(e4) {
            var n3 = "C2C".concat(e4.userID);
            t2._conversationMap.has(n3) && (t2._conversationMap.get(n3).userProfile = e4);
          }), this.emitConversationUpdate(true, false);
        } }, { key: "onMessageRevoked", value: function(e3) {
          var t2 = this;
          if (0 !== e3.length) {
            var n3 = null, o2 = false, s3 = [];
            e3.forEach(function(e4) {
              (n3 = t2._conversationMap.get(e4.conversationID)) && (n3.type === S.CONV_TOPIC ? s3.push(e4) : (n3.reduceUnreadCount() && (o2 = true), n3.isLastMessageRevoked({ sequence: e4.sequence, time: e4.time }) && (n3.setLastMessageRevoked(true), n3.setLastMessageRevoker(e4.revoker), o2 = true)));
            }), this.getModule(wn).onMessageRevoked(s3), o2 && (this.emitConversationUpdate(true, false), this.emitTotalUnreadMessageCountUpdate());
          }
        } }, { key: "isLastMessageRevoked", value: function(e3) {
          var t2 = false, n3 = e3.conversationID, o2 = e3.sequence, s3 = e3.time, a2 = this._conversationMap.get(n3);
          a2 && (t2 = a2.type === S.CONV_TOPIC ? this.getModule(wn).isLastMessageRevoked({ topicID: n3.replace(S.CONV_GROUP, ""), sequence: o2 }) : a2.isLastMessageRevoked({ sequence: o2, time: s3 }));
          return xe.l("".concat(this._n, ".isLastMessageRevoked options:").concat(JSON.stringify(e3), " ret:").concat(t2)), t2;
        } }, { key: "onMessageDeleted", value: function(e3) {
          var t2 = this;
          if (0 !== e3.length) {
            var n3 = null;
            e3.forEach(function(e4) {
              (n3 = t2._messageListHandler.getLocalMessage(e4.conversationID, e4.ID)) && (n3.isDeleted = true), e4 !== n3 && (e4.isDeleted = true);
            });
            for (var o2 = e3[0].conversationID, s3 = this._messageListHandler.getLocalMessageList(o2), a2 = {}, r2 = s3.length - 1; r2 >= 0; r2--)
              if (!s3[r2].isDeleted) {
                a2 = s3[r2];
                break;
              }
            var i2 = this._conversationMap.get(o2);
            if (i2) {
              var u2 = false;
              i2.lastMessage.lastSequence === a2.sequence && i2.lastMessage.lastTime === a2.time || (jt(a2) && (a2 = void 0), i2.updateLastMessage(a2), i2.type !== S.CONV_TOPIC && (u2 = true), xe.l("".concat(this._n, ".onMessageDeleted. update conversationID:").concat(o2, " with lastMessage:"), i2.lastMessage)), o2.startsWith(S.CONV_C2C) && this.updateUnreadCount(o2), u2 && this.emitConversationUpdate(true, false);
            }
          }
        } }, { key: "onMessageModified", value: function(e3) {
          var t2 = e3.conversationType, n3 = e3.from, o2 = e3.to, s3 = e3.time, a2 = e3.sequence, r2 = e3.elements, i2 = e3.cloudCustomData, u2 = e3.messageVersion, c2 = this.getMyUserID(), l2 = "".concat(t2).concat(o2);
          o2 === c2 && t2 === S.CONV_C2C && (l2 = "".concat(t2).concat(n3));
          var p2 = this._messageListHandler.onMessageModified(l2, e3), d2 = p2.isUpdated, g2 = p2.message;
          true === d2 && this.emitOuterEvent(E.MESSAGE_MODIFIED, [g2]);
          var _2 = this._isTopicConversation(l2);
          if (xe.l("".concat(this._n, ".onMessageModified isUpdated:").concat(d2, " isTopicMessage:").concat(_2, " from:").concat(n3, " to:").concat(o2)), _2) {
            this.getModule(wn).onMessageModified(e3);
          } else {
            var h2 = this._conversationMap.get(l2);
            if (h2) {
              var f2 = h2.lastMessage;
              xe.d("".concat(this._n.onMessageModified, " lastMessage:"), JSON.stringify(f2), "options:", JSON.stringify(e3)), f2 && f2.lastTime === s3 && f2.lastSequence === a2 && f2.version !== u2 && (f2.type = r2[0].type, f2.payload = r2[0].content, f2.messageForShow = xt(f2.type, f2.payload, this.isIntl()), f2.cloudCustomData = i2, f2.version = u2, this.emitConversationUpdate(true, false));
            }
          }
          return g2;
        } }, { key: "onNewGroupAtTips", value: function(e3) {
          var n3 = this, o2 = e3.dataList, s3 = null;
          o2.forEach(function(e4) {
            e4.groupAtTips ? s3 = e4.groupAtTips : e4.elements ? s3 = t(t({}, e4.elements), {}, { sync: true }) : e4.groupAtType && (s3 = t(t({}, e4), {}, { sync: true })), s3.__random = e4.random, s3.__sequence = e4.clientSequence, n3._tmpGroupAtTipsList.push(s3);
          }), xe.d("".concat(this._n, ".onNewGroupAtTips isReady:").concat(this._isReady), this._tmpGroupAtTipsList), this._isReady && this._handleGroupAtTipsList();
        } }, { key: "_handleGroupAtTipsList", value: function() {
          var e3 = this;
          if (0 !== this._tmpGroupAtTipsList.length) {
            var t2 = false;
            this._tmpGroupAtTipsList.forEach(function(n3) {
              var o2 = n3.groupID, s3 = n3.from, a2 = n3.topicID, r2 = void 0 === a2 ? void 0 : a2, i2 = n3.sync, u2 = void 0 !== i2 && i2;
              if (s3 !== e3.getMyUserID())
                if (at(r2)) {
                  var c2 = e3._conversationMap.get("".concat(S.CONV_GROUP).concat(o2));
                  c2 && (c2.updateGroupAtInfoList(n3), t2 = true);
                } else {
                  var l2 = e3._conversationMap.get("".concat(S.CONV_GROUP).concat(r2));
                  if (l2) {
                    l2.updateGroupAtInfoList(n3);
                    var p2 = e3.getModule(wn), d2 = l2.groupAtInfoList;
                    p2.onConversationProxy({ topicID: r2, groupAtInfoList: d2 });
                  }
                  if (jt(l2) && u2)
                    e3.updateTopicConversation([{ conversationID: "".concat(S.CONV_GROUP).concat(r2), type: S.CONV_TOPIC }]), e3._conversationMap.get("".concat(S.CONV_GROUP).concat(r2)).updateGroupAtInfoList(n3);
                }
            }), t2 && this.emitConversationUpdate(true, false), this._tmpGroupAtTipsList.length = 0;
          }
        } }, { key: "_getC2CPeerReadTime", value: function(e3) {
          var t2 = this, n3 = [];
          if (e3.forEach(function(e4) {
            t2._conversationMap.has(e4.conversationID) || e4.type !== S.CONV_C2C || n3.push(e4.conversationID.replace(S.CONV_C2C, ""));
          }), n3.length > 0) {
            xe.d("".concat(this._n, "._getC2CPeerReadTime userIDList:").concat(n3));
            var o2 = this.getModule(Gn);
            o2 && o2.getRemotePeerReadTime(n3);
          }
        } }, { key: "_getStorageConversationList", value: function() {
          return this.getModule(xn).getItem("conversationMap");
        } }, { key: "_setStorageConversationList", value: function() {
          var e3 = this.getLocalConversationList().filter(function(e4) {
            return e4.type === S.CONV_C2C || e4.type === S.CONV_GROUP && e4.lastMessage.type !== S.MSG_GRP_TIP;
          }).slice(0, 20).map(function(e4) {
            return { conversationID: e4.conversationID, type: e4.type, subType: e4.subType, lastMessage: e4.lastMessage, groupProfile: e4.groupProfile, userProfile: e4.userProfile };
          });
          this.getModule(xn).setItem("conversationMap", e3);
        } }, { key: "emitConversationUpdate", value: function() {
          var e3 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n3 = this.getLocalConversationList();
          if (t2) {
            var o2 = this.getModule(Un);
            o2 && o2.updateGroupLastMessage(n3);
          }
          e3 && this.emitOuterEvent(E.CONVERSATION_LIST_UPDATED);
        } }, { key: "getLocalConversationList", value: function() {
          return m(this._conversationMap.values()).filter(function(e3) {
            return e3.type !== S.CONV_TOPIC;
          });
        } }, { key: "getLocalConversation", value: function(e3) {
          return this._conversationMap.get(e3);
        } }, { key: "hasLocalConversation", value: function(e3) {
          return this._conversationMap.has(e3);
        } }, { key: "getLocalOldestMessage", value: function(e3) {
          return this._messageListHandler.getLocalOldestMessage(e3);
        } }, { key: "syncConversationList", value: function() {
          var e3 = this, t2 = new ka("syncConversationList");
          return this._pagingStatus === Zt.NOT_START && this._conversationMap.clear(), this._pagingGetConversationList().then(function(n3) {
            var o2 = function(e4) {
              if (st(e4) && 0 !== e4.length) {
                var t3 = 0;
                return e4.forEach(function(e5) {
                  t3 += e5;
                }), (t3 / e4.length).toFixed(0);
              }
            }(e3._pagingGetCostList);
            return xe.l("".concat(e3._n, ".").concat("syncConversationList", ". sum ").concat(function(e4) {
              if (st(e4) && 0 !== e4.length) {
                var t3 = 0;
                return e4.forEach(function(e5) {
                  t3 += e5;
                }), t3.toFixed(0);
              }
            }(e3._pagingGetCostList), " ms, average ").concat(o2, " ms")), e3._pagingGetCostList.length = 0, e3._pagingStatus = Zt.RESOLVED, e3._diffAndDeleteConversation(), e3.emitConversationUpdate(true, false), e3._setStorageConversationList(), e3._handleC2CPeerReadTime(), e3._patchConversationProperties(), t2.setMessage(e3._conversationMap.size).setMoreMessage(o2).setNetworkType(e3.getNetworkType()).end(), n3;
          }).catch(function(n3) {
            return e3._pagingStatus = Zt.REJECTED, t2.setMessage(e3._pagingTimeStamp), e3.probeNetwork().then(function(e4) {
              var o2 = v(e4, 2), s3 = o2[0], a2 = o2[1];
              t2.setError(n3, s3, a2).end();
            }), Ja(n3);
          });
        } }, { key: "_diffAndDeleteConversation", value: function() {
          var e3 = this;
          if (this._isSyncCompleted()) {
            var t2 = [];
            this._conversationMap.forEach(function(n3, o2) {
              !e3._pagingConvIDMap.has(o2) && e3._convIDFromUnreadDBMap.has(o2) && (e3._conversationMap.delete(o2), t2.push(o2));
            }), xe.l("".concat(this._n, "._diffAndDeleteConversation list:").concat(t2));
          }
        } }, { key: "_patchConversationProperties", value: function() {
          var e3 = this, t2 = Date.now(), n3 = this.checkAndPatchRemark(), o2 = this._messageRemindHandler.getC2CMessageRemindType(), s3 = this.getModule(Un).getGroupList();
          Promise.all([n3, o2, s3]).then(function() {
            var n4 = Date.now() - t2;
            xe.l("".concat(e3._n, "._patchConversationProperties ok. cost ").concat(n4, " ms")), e3.emitConversationUpdate(true, false), e3.emitTotalUnreadMessageCountUpdate();
          });
        } }, { key: "_pagingGetConversationList", value: function() {
          var e3 = this, t2 = "".concat(this._n, "._pagingGetConversationList");
          xe.l("".concat(t2, " timeStamp:").concat(this._pagingTimeStamp, " startIndex:").concat(this._pagingStartIndex) + " pinnedTimeStamp:".concat(this._pagingPinnedTimeStamp, " pinnedStartIndex:").concat(this._pagingPinnedStartIndex));
          var n3 = Date.now();
          return this._pagingStatus = Zt.PENDING, this.request({ protocolName: No, requestData: { fromAccount: this.getMyUserID(), timeStamp: this._pagingTimeStamp, startIndex: this._pagingStartIndex, pinnedTimeStamp: this._pagingPinnedTimeStamp, pinnedStartIndex: this._pagingPinnedStartIndex, orderType: 1 } }).then(function(o2) {
            var s3 = o2.data, a2 = s3.completeFlag, r2 = s3.conversations, i2 = void 0 === r2 ? [] : r2, u2 = s3.timeStamp, c2 = s3.startIndex, l2 = s3.pinnedTimeStamp, p2 = s3.pinnedStartIndex, d2 = s3.groupItem, g2 = Date.now() - n3;
            if (e3._pagingGetCostList.push(g2), xe.l("".concat(t2, " ok. completeFlag:").concat(a2, " count:").concat(i2.length, " cost ").concat(g2, " ms")), e3._convGroupHandler.onConvGroupListSynced(d2), i2.length > 0) {
              var _2 = e3._getConversationOptions(i2);
              e3._pagingConvIDMap = new Map([].concat(m(e3._pagingConvIDMap), m(_2.map(function(e4) {
                return [e4.conversationID, 1];
              })))), e3._updateLocalConversationList({ conversationOptionsList: _2, isFromGetConversations: true }), e3.isLoggedIn() && e3.emitConversationUpdate();
            }
            if (!e3._isReady) {
              if (!e3.isLoggedIn())
                return za();
              e3.triggerReady();
            }
            return e3._pagingTimeStamp = u2, e3._pagingStartIndex = c2, e3._pagingPinnedTimeStamp = l2, e3._pagingPinnedStartIndex = p2, 1 !== a2 ? e3._pagingGetConversationList() : (e3._handleGroupAtTipsList(), e3._convGroupHandler.getRemoteConvGroupList(), za());
          }).catch(function(n4) {
            throw e3.isLoggedIn() && (e3._isReady || (xe.w("".concat(t2, " failed. error:"), n4), e3.triggerReady())), n4;
          });
        } }, { key: "_updateLocalConversationList", value: function(e3) {
          var t2, n3 = e3.isFromGetConversations, o2 = e3.isInstantMessage, s3 = Date.now();
          t2 = this._getTmpConversationListMapping(e3), this._conversationMap = new Map(this._sortConversationList([].concat(m(t2.toBeUpdatedConversationList), m(this._conversationMap)))), n3 || (this._updateUserOrGroupProfile(t2.newConversationList), o2 && this.emitTotalUnreadMessageCountUpdate()), xe.d("".concat(this._n, "._updateLocalConversationList cost ").concat(Date.now() - s3, " ms"));
        } }, { key: "_getTmpConversationListMapping", value: function(e3) {
          for (var t2 = e3.conversationOptionsList, n3 = e3.isFromGetConversations, o2 = e3.isInstantMessage, s3 = e3.isUnreadC2CMessage, a2 = void 0 !== s3 && s3, r2 = e3.updateUnreadCount, i2 = [], u2 = [], c2 = this.getModule(Un), l2 = this.getModule(Pn), p2 = this.isIntl(), d2 = 0, g2 = t2.length; d2 < g2; d2++) {
            var _2 = new _r(t2[d2], p2), h2 = _2.conversationID;
            if (h2 !== "".concat(S.CONV_C2C, "@TLS#ERROR") && h2 !== "".concat(S.CONV_C2C, "@TLS#NOT_FOUND"))
              if (this._conversationMap.has(h2)) {
                var f2 = this._conversationMap.get(h2), v2 = ["unreadCount", "allowType", "adminForbidType", "payload", "isPinned"];
                false === o2 && v2.push("lastMessage");
                var m2 = t2[d2].lastMessage, M2 = !at(m2);
                M2 || t2[d2].type === S.CONV_TOPIC || this._onLastMessageNotExist(t2[d2]), at(o2) && M2 && null === f2.lastMessage.payload && (f2.lastMessage.payload = m2.payload), jt(f2.lastMessage.revoker) || (f2.lastMessage.revoker = null), pt(f2, _2, v2, [null, void 0, "", 0, NaN]), true === r2 && f2.updateUnreadCount({ nextUnreadCount: _2.unreadCount, isFromGetConversations: n3, isUnreadC2CMessage: a2 }), o2 && M2 && (m2.payload && (f2.lastMessage.payload = m2.payload), f2.type === S.CONV_GROUP && (f2.lastMessage.nameCard = m2.nameCard, f2.lastMessage.nick = m2.nick)), M2 && f2.lastMessage.cloudCustomData !== m2.cloudCustomData && (f2.lastMessage.cloudCustomData = m2.cloudCustomData || ""), this._conversationMap.delete(h2), i2.push([h2, f2]);
              } else {
                if (_2.type === S.CONV_GROUP && c2) {
                  var y2 = _2.groupProfile.groupID, I2 = c2.getLocalGroupProfile(y2);
                  I2 && (_2.groupProfile = I2, true === r2 && _2.updateUnreadCount({ nextUnreadCount: 0 }));
                } else if (_2.type === S.CONV_C2C) {
                  var C2 = h2.replace(S.CONV_C2C, "");
                  l2 && l2.isMyFriend(C2) && (_2.remark = l2.getFriendRemark(C2));
                }
                u2.push(_2), i2.push([h2, _2]);
              }
          }
          var T2 = this.getModule(wn);
          return i2.forEach(function(e4) {
            if (e4[1].type === S.CONV_TOPIC) {
              var t3 = e4[1], n4 = t3.conversationID, o3 = t3.unreadCount, s4 = t3.groupAtInfoList;
              T2.onConversationProxy({ topicID: n4.replace(S.CONV_GROUP, ""), unreadCount: o3, groupAtInfoList: jt(s4) ? void 0 : s4 });
            }
          }), { toBeUpdatedConversationList: i2, newConversationList: u2 };
        } }, { key: "_onLastMessageNotExist", value: function(e3) {
          new ka("lastMessageNotExist").setMessage("".concat(JSON.stringify(e3))).setNetworkType(this.getNetworkType()).end();
        } }, { key: "_sortConversationList", value: function(e3) {
          var t2 = [], n3 = [], o2 = [], s3 = [];
          return e3.forEach(function(e4) {
            true === e4[1].isPinned ? jt(e4[1].lastMessage.lastTime) ? n3.push(e4) : t2.push(e4) : jt(e4[1].lastMessage.lastTime) ? s3.push(e4) : o2.push(e4);
          }), t2.sort(function(e4, t3) {
            return t3[1].lastMessage.lastTime - e4[1].lastMessage.lastTime;
          }).concat(n3).concat(o2.sort(function(e4, t3) {
            return t3[1].lastMessage.lastTime - e4[1].lastMessage.lastTime;
          })).concat(s3);
        } }, { key: "_sortConversationListAndEmitEvent", value: function() {
          this._conversationMap = new Map(this._sortConversationList(m(this._conversationMap))), this.emitConversationUpdate(true, false);
        } }, { key: "_updateUserOrGroupProfile", value: function(e3) {
          var t2 = this;
          if (0 !== e3.length) {
            var n3 = [], o2 = [], s3 = this.getModule(On), a2 = this.getModule(Un);
            e3.forEach(function(e4) {
              if (e4.type === S.CONV_C2C)
                n3.push(e4.toAccount);
              else if (e4.type === S.CONV_GROUP) {
                var t3 = e4.toAccount;
                a2.hasLocalGroup(t3) ? e4.groupProfile = a2.getLocalGroupProfile(t3) : o2.push(t3);
              }
            }), xe.l("".concat(this._n, "._updateUserOrGroupProfile c2cUserIDList:").concat(n3, " groupIDList:").concat(o2)), n3.length > 0 && s3.getUserProfile({ userIDList: n3 }).then(function(e4) {
              var n4 = e4.data;
              st(n4) ? n4.forEach(function(e5) {
                t2._doUpdateUserProfile("C2C".concat(e5.userID), e5);
              }) : t2._doUpdateUserProfile("C2C".concat(n4.userID), n4);
            }), o2.length > 0 && a2.getGroupProfileAdvance({ groupIDList: o2, responseFilter: { groupBaseInfoFilter: ["Type", "Name", "FaceUrl"] } }).then(function(e4) {
              e4.data.successGroupList.forEach(function(e5) {
                var n4 = "GROUP".concat(e5.groupID);
                if (t2._conversationMap.has(n4)) {
                  var o3 = t2._conversationMap.get(n4);
                  pt(o3.groupProfile, e5, [], [null, void 0, "", 0, NaN]), !o3.subType && e5.type && (o3.subType = e5.type);
                }
              });
            });
          }
        } }, { key: "_doUpdateUserProfile", value: function(e3, t2) {
          this.hasLocalConversation(e3) && (this.getLocalConversation(e3).userProfile = t2);
        } }, { key: "_getConversationOptions", value: function(e3) {
          var n3 = this, o2 = [], s3 = e3.filter(function(e4) {
            var t2 = e4.type, n4 = e4.userID;
            return 1 === t2 && "@TLS#NOT_FOUND" !== n4 && "@TLS#ERROR" !== n4 || 2 === t2;
          }), a2 = this.getMyUserID(), r2 = s3.map(function(e4) {
            if (at(e4.lastMsg) && (e4.lastMsg = { elements: [] }), 1 === e4.type) {
              var s4 = { userID: e4.userID, nick: e4.peerNick, avatar: e4.peerAvatar };
              return o2.push(s4), { conversationID: "C2C".concat(e4.userID), type: "C2C", lastMessage: { lastTime: e4.time, lastSequence: e4.sequence, fromAccount: e4.lastC2CMsgFromAccount, messageForShow: e4.messageShow, type: e4.lastMsg.elements[0] ? e4.lastMsg.elements[0].type : null, payload: e4.lastMsg.elements[0] ? n3._amendLayersOverLimitProperty(e4.lastMsg.elements[0].content) : null, cloudCustomData: e4.lastMsg.cloudCustomData || "", isRevoked: 8 === e4.lastMessageFlag, onlineOnlyFlag: false, nick: "", nameCard: "", version: 0, isPeerRead: e4.lastC2CMsgFromAccount === a2 && e4.time <= e4.c2cPeerReadTime, revoker: e4.lastMsg.revokerInfo ? e4.lastMsg.revokerInfo.revoker : null }, userProfile: new ur(s4), peerReadTime: e4.c2cPeerReadTime, isPinned: 1 === e4.isPinned, messageRemindType: "", customData: e4.customMark || "", markList: Bt(e4.standardMark), conversationGroupList: n3._convGroupHandler.getConvGroupListByID(e4.contactGroupId) };
            }
            return { conversationID: "GROUP".concat(e4.groupID), type: "GROUP", lastMessage: t(t({ lastTime: e4.time, lastSequence: e4.sequence, fromAccount: e4.msgGroupFromAccount, messageForShow: e4.messageShow }, n3._patchTypeAndPayload(e4)), {}, { cloudCustomData: e4.lastMsg.cloudCustomData || "", isRevoked: 2 === e4.lastMessageFlag, onlineOnlyFlag: false, nick: e4.senderNick || "", nameCard: e4.senderNameCard || "", revoker: e4.lastMsg.revokerInfo ? e4.lastMsg.revokerInfo.revoker : null }), groupProfile: new dr({ groupID: e4.groupID, name: e4.groupNick, avatar: e4.groupImage }), unreadCount: e4.unreadCount, peerReadTime: 0, isPinned: 1 === e4.isPinned, messageRemindType: "", version: 0, customData: e4.customMark || "", markList: Bt(e4.standardMark), conversationGroupList: n3._convGroupHandler.getConvGroupListByID(e4.contactGroupId) };
          });
          o2.length > 0 && this.getModule(On).onConversationsProfileUpdated(o2);
          return r2;
        } }, { key: "_patchTypeAndPayload", value: function(e3) {
          var n3 = e3.lastMsg, o2 = n3.event, s3 = void 0 === o2 ? void 0 : o2, a2 = n3.elements, r2 = void 0 === a2 ? [] : a2, i2 = n3.groupTips, u2 = void 0 === i2 ? {} : i2;
          if (!at(s3) && !jt(u2)) {
            var c2 = new Ha(u2);
            c2.setElement({ type: S.MSG_GRP_TIP, content: t(t({}, u2.elements), {}, { groupProfile: u2.groupProfile }) });
            var l2 = JSON.parse(JSON.stringify(c2.payload));
            return c2 = null, { type: S.MSG_GRP_TIP, payload: l2 };
          }
          return { type: r2[0] ? r2[0].type : null, payload: r2[0] ? this._amendLayersOverLimitProperty(r2[0].content) : null };
        } }, { key: "_amendLayersOverLimitProperty", value: function(e3) {
          var t2 = e3.layersOverLimit;
          return 0 === t2 ? e3.layersOverLimit = false : 1 === t2 && (e3.layersOverLimit = true), e3;
        } }, { key: "getLocalMessageList", value: function(e3) {
          return this._messageListHandler.getLocalMessageList(e3);
        } }, { key: "deleteLocalMessage", value: function(e3) {
          e3 instanceof Ha && this._messageListHandler.remove(e3);
        } }, { key: "onConversationDeleted", value: function(e3) {
          if (st(e3)) {
            var t2 = e3.map(function(e4) {
              var t3 = e4.type, n3 = e4.userID, o2 = e4.groupID;
              return 1 === t3 ? "".concat(S.CONV_C2C).concat(n3) : 2 === t3 ? "".concat(S.CONV_GROUP).concat(o2) : void 0;
            });
            xe.l("".concat(this._n, ".onConversationDeleted conversationIDList:").concat(t2)), this.deleteLocalConversationList(t2);
          }
        } }, { key: "onConversationPinned", value: function(e3) {
          var t2 = this;
          if (st(e3)) {
            var n3 = false;
            e3.forEach(function(e4) {
              var o2, s3 = e4.type, a2 = e4.userID, r2 = e4.groupID;
              1 === s3 ? o2 = t2.getLocalConversation("".concat(S.CONV_C2C).concat(a2)) : 2 === s3 && (o2 = t2.getLocalConversation("".concat(S.CONV_GROUP).concat(r2))), o2 && (xe.l("".concat(t2._n, ".onConversationPinned conversationID:").concat(o2.conversationID, " isPinned:").concat(o2.isPinned)), o2.isPinned || (o2.isPinned = true, n3 = true));
            }), n3 && this._sortConversationListAndEmitEvent();
          }
        } }, { key: "onConversationUnpinned", value: function(e3) {
          var t2 = this;
          if (st(e3)) {
            var n3 = false;
            e3.forEach(function(e4) {
              var o2, s3 = e4.type, a2 = e4.userID, r2 = e4.groupID;
              1 === s3 ? o2 = t2.getLocalConversation("".concat(S.CONV_C2C).concat(a2)) : 2 === s3 && (o2 = t2.getLocalConversation("".concat(S.CONV_GROUP).concat(r2))), o2 && (xe.l("".concat(t2._n, ".onConversationUnpinned conversationID:").concat(o2.conversationID, " isPinned:").concat(o2.isPinned)), o2.isPinned && (o2.isPinned = false, n3 = true));
            }), n3 && this._sortConversationListAndEmitEvent();
          }
        } }, { key: "getMessageList", value: function(e3) {
          var t2 = this, n3 = e3.conversationID, o2 = e3.nextReqMessageID, s3 = e3.count, a2 = "".concat(this._n, ".getMessageList"), r2 = this.getLocalConversation(n3), i2 = "";
          if (r2 && r2.groupProfile && (i2 = r2.groupProfile.type), Ct(i2))
            return xe.l("".concat(a2, " not available in avchatroom. conversationID:").concat(n3)), za({ messageList: [], nextReqMessageID: "", isCompleted: true });
          (at(s3) || s3 > 15) && (s3 = 15), !o2 && this._isNotInCommunity(n3) && (this._messageListHandler.removeByConversationID(n3), this._completedMap.delete(n3), this._roamingMessageSequenceMap.delete(n3));
          var u2 = this._computeRemainingCount({ conversationID: n3, nextReqMessageID: o2 }), c2 = this._completedMap.has(n3);
          if (xe.l("".concat(a2, " conversationID:").concat(n3, " nextReqMessageID:").concat(o2) + " remainingCount:".concat(u2, " count:").concat(s3, " isCompleted:").concat(c2)), this._needGetHistory({ conversationID: n3, remainingCount: u2, count: s3 }))
            return this.getHistoryMessages({ conversationID: n3, nextReqMessageID: o2, count: 20 }).then(function(e4) {
              var o3 = e4.nextReqID, s4 = e4.storedMessageList, r3 = t2._completedMap.has(n3), i3 = s4;
              u2 > 0 && (i3 = t2._messageListHandler.getLocalMessageList(n3).slice(0, s4.length + u2));
              var c3 = { nextReqMessageID: r3 ? "" : o3, messageList: i3, isCompleted: r3 };
              return xe.l("".concat(a2, " ret.nextReqMessageID:").concat(c3.nextReqMessageID, " ret.isCompleted:").concat(c3.isCompleted, " ret.length:").concat(i3.length)), Ka(c3);
            });
          this.modifyMessageList(n3);
          var l2 = this._getMessageListFromMemory({ conversationID: n3, nextReqMessageID: o2, count: s3 });
          return za(l2);
        } }, { key: "_getMessageListFromMemory", value: function(e3) {
          var t2 = e3.conversationID, n3 = e3.nextReqMessageID, o2 = e3.count, s3 = "".concat(this._n, "._getMessageListFromMemory"), a2 = this._messageListHandler.getLocalMessageList(t2), r2 = a2.length, i2 = 0, u2 = { isCompleted: false, nextReqMessageID: "", messageList: [] };
          return n3 ? (i2 = a2.findIndex(function(e4) {
            return e4.ID === n3;
          })) > o2 ? (u2.messageList = a2.slice(i2 - o2, i2), u2.nextReqMessageID = a2[i2 - o2].ID) : (u2.messageList = a2.slice(0, i2), u2.isCompleted = true) : r2 > o2 ? (i2 = r2 - o2, u2.messageList = a2.slice(i2, r2), u2.nextReqMessageID = a2[i2].ID) : (u2.messageList = a2.slice(0, r2), u2.isCompleted = true), xe.l("".concat(s3, " conversationID:").concat(t2) + " ret.nextReqMessageID:".concat(u2.nextReqMessageID, " ret.isCompleted:").concat(u2.isCompleted, " ret.length:").concat(u2.messageList.length)), u2;
        } }, { key: "getMessageListHopping", value: function(e3) {
          var t2 = e3.conversationID, n3 = e3.sequence, o2 = e3.time, s3 = e3.count, a2 = e3.direction, r2 = void 0 === a2 ? 0 : a2;
          if ((at(s3) || s3 > 15) && (s3 = 15), t2.startsWith(S.CONV_C2C)) {
            var i2 = this.getModule(Gn), u2 = t2.replace(S.CONV_C2C, "");
            return i2.getRoamingMessagesHopping({ peerAccount: u2, time: o2, count: s3, direction: r2 });
          }
          if (t2.startsWith(S.CONV_GROUP)) {
            var c2 = this.getModule(Un), l2 = t2.replace(S.CONV_GROUP, "");
            return c2.getRoamingMessagesHopping({ groupID: l2, sequence: n3, count: s3, direction: r2 });
          }
        } }, { key: "_computeRemainingCount", value: function(e3) {
          var t2 = e3.conversationID, n3 = e3.nextReqMessageID, o2 = this._messageListHandler.getLocalMessageList(t2), s3 = o2.length;
          if (!n3)
            return s3;
          var a2 = 0;
          return Et(t2) ? a2 = o2.findIndex(function(e4) {
            return e4.ID === n3;
          }) : St(t2) && (a2 = -1 !== n3.indexOf("-") ? o2.findIndex(function(e4) {
            return e4.ID === n3;
          }) : o2.findIndex(function(e4) {
            return e4.sequence === n3;
          })), -1 === a2 && (a2 = 0), a2;
        } }, { key: "_getMessageListSize", value: function(e3) {
          return this._messageListHandler.getLocalMessageList(e3).length;
        } }, { key: "_needGetHistory", value: function(e3) {
          var t2 = e3.conversationID, n3 = e3.remainingCount, o2 = e3.count, s3 = this.getLocalConversation(t2), a2 = "";
          return s3 && s3.groupProfile && (a2 = s3.groupProfile.type), !kt(t2) && !Ct(a2) && (!(St(t2) && this._isPagingGetGroupListCompleted() && this._getLocalGroupCount() <= 4e3 && !this._hasLocalGroup(t2) && !this._isTopicConversation(t2)) && (n3 <= o2 && !this._completedMap.has(t2)));
        } }, { key: "_isTopicConversation", value: function(e3) {
          var t2 = e3.replace(S.CONV_GROUP, "");
          return Dt(t2);
        } }, { key: "getHistoryMessages", value: function(e3) {
          var t2 = e3.conversationID, n3 = e3.count;
          if (t2 === S.CONV_SYSTEM)
            return za();
          var o2 = 15;
          n3 > 20 && (o2 = 20);
          var s3 = null;
          if (Et(t2)) {
            var a2 = this._roamingMessageKeyAndTimeMap.has(t2);
            return (s3 = this.getModule(Gn)) ? s3.getRoamingMessage({ conversationID: t2, peerAccount: t2.replace(S.CONV_C2C, ""), count: o2, lastMessageTime: a2 ? this._roamingMessageKeyAndTimeMap.get(t2).lastMessageTime : 0, messageKey: a2 ? this._roamingMessageKeyAndTimeMap.get(t2).messageKey : "" }) : Ja({ code: da.CANNOT_FIND_MODULE });
          }
          if (St(t2)) {
            if (!(s3 = this.getModule(Un)))
              return Ja({ code: da.CANNOT_FIND_MODULE });
            var r2 = null;
            this._conversationMap.has(t2) && (r2 = this._conversationMap.get(t2).lastMessage);
            var i2 = 0;
            r2 && (i2 = r2.lastSequence);
            var u2 = this._roamingMessageSequenceMap.get(t2);
            return s3.getRoamingMessage({ conversationID: t2, groupID: t2.replace(S.CONV_GROUP, ""), count: o2, sequence: u2 || i2 });
          }
          return za();
        } }, { key: "patchConversationLastMessage", value: function(e3) {
          var t2 = this.getLocalConversation(e3);
          if (t2) {
            var n3 = t2.lastMessage, o2 = n3.messageForShow, s3 = n3.payload;
            if (jt(o2) || jt(s3)) {
              var a2 = this._messageListHandler.getLocalMessageList(e3);
              if (0 === a2.length)
                return;
              var r2 = a2[a2.length - 1];
              xe.l("".concat(this._n, ".patchConversationLastMessage conversationID:").concat(e3, " payload:"), r2.payload), t2.updateLastMessage(r2);
            }
          }
        } }, { key: "onRoamingMessage", value: function() {
          var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], n3 = arguments.length > 1 ? arguments[1] : void 0, o2 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], s3 = n3.startsWith(S.CONV_C2C) ? S.CONV_C2C : S.CONV_GROUP, a2 = null, r2 = [], i2 = [], u2 = 0, c2 = e3.length, l2 = null, p2 = s3 === S.CONV_GROUP, d2 = this.getModule(Hn), g2 = this.getFileDownloadProxy(), _2 = function() {
            u2 = p2 ? e3.length - 1 : 0, c2 = p2 ? 0 : e3.length;
          }, h2 = function() {
            p2 ? --u2 : ++u2;
          }, f2 = function() {
            return p2 ? u2 >= c2 : u2 < c2;
          };
          for (_2(); f2(); h2())
            if (p2 && 1 === e3[u2].sequence && o2 && this.setCompleted(n3), 1 !== e3[u2].isPlaceMessage)
              if ((a2 = new Ha(e3[u2])).to = e3[u2].to, s3 !== S.CONV_GROUP || at(e3[u2].topicID) || (a2.to = e3[u2].topicID), a2.isSystemMessage = !!e3[u2].isSystemMessage, a2.conversationType = s3, 4 === e3[u2].event ? l2 = { type: S.MSG_GRP_TIP, content: t(t({}, e3[u2].elements), {}, { groupProfile: e3[u2].groupProfile }) } : (e3[u2].elements = d2.parseElements(e3[u2].elements, e3[u2].from), l2 = e3[u2].elements), p2 || a2.setNickAndAvatar({ nick: e3[u2].nick, avatar: e3[u2].avatar }), jt(l2)) {
                var v2 = new ka("emptyMessageBody");
                v2.setMessage("from:".concat(a2.from, " to:").concat(a2.to, " sequence:").concat(a2.sequence, " event:").concat(e3[u2].event)), v2.setNetworkType(this.getNetworkType()).setLevel("warning").end();
              } else
                a2.setElement(l2, g2), a2.reInitialize(this.getMyUserID()), r2.push(a2);
          return _2 = h2 = f2 = null, o2 ? (this._messageListHandler.unshift(r2, i2), r2 = null, i2) : (i2 = null, r2);
        } }, { key: "findMessage", value: function(e3) {
          return this._messageListHandler.findMessage(e3);
        } }, { key: "_isNotInCommunity", value: function(e3) {
          var t2 = false;
          if (e3.startsWith(S.CONV_GROUP) && this._isTopicConversation(e3)) {
            var n3 = qt(e3.replace(S.CONV_GROUP, ""));
            this.getModule(Un).hasLocalGroup(n3) || (t2 = true);
          }
          return t2;
        } }, { key: "deleteTopicRoamingMessageInfo", value: function(e3) {
          var t2 = this;
          Tt({ groupID: e3 }) && this._messageListHandler.getTopicConversationIDList(e3).forEach(function(e4) {
            t2._messageListHandler.removeByConversationID(e4), t2._completedMap.delete(e4), t2._roamingMessageSequenceMap.delete(e4);
          });
        } }, { key: "deleteGroupRomaingMessageInfo", value: function(e3) {
          var t2 = "".concat(S.CONV_GROUP).concat(e3);
          this._messageListHandler.removeByConversationID(t2), this._completedMap.delete(t2), this._roamingMessageSequenceMap.delete(t2);
        } }, { key: "setMessageRead", value: function(e3) {
          var t2 = e3.conversationID, n3 = this.getLocalConversation(t2);
          if (xe.l("".concat(this._n, ".setMessageRead conversationID:").concat(t2, " unreadCount:").concat(n3 ? n3.unreadCount : 0)), !n3)
            return za();
          if (n3.type !== S.CONV_GROUP && n3.type !== S.CONV_TOPIC || jt(n3.groupAtInfoList) || this.deleteGroupAtTips(t2), 0 === n3.unreadCount)
            return za();
          if (n3.type === S.CONV_GROUP && !this._hasLocalGroup(t2))
            return 0 !== n3.unreadCount && (n3.unreadCount = 0, this.emitConversationUpdate(true, false)), za();
          var o2 = this._messageListHandler.getLocalLastMessage(t2), s3 = n3.lastMessage.lastTime;
          o2 && s3 < o2.time && (s3 = o2.time);
          var a2 = n3.lastMessage.lastSequence;
          if (o2 && a2 < o2.sequence && (a2 = o2.sequence), n3.type === S.CONV_TOPIC && at(o2)) {
            var r2 = this.getModule(wn), i2 = t2.replace(S.CONV_GROUP, ""), u2 = qt(i2), c2 = r2.getLocalTopic(u2, i2);
            c2 && (a2 = c2.nextMessageSeq - 1);
          }
          var l2 = null;
          switch (n3.type) {
            case S.CONV_C2C:
              return (l2 = this.getModule(Gn)) ? l2.setMessageRead({ conversationID: t2, lastMessageTime: s3 }) : Ja({ code: da.CANNOT_FIND_MODULE });
            case S.CONV_GROUP:
            case S.CONV_TOPIC:
              return (l2 = this.getModule(Un)) ? l2.setMessageRead({ conversationID: t2, lastMessageSeq: a2 }) : Ja({ code: da.CANNOT_FIND_MODULE });
            case S.CONV_SYSTEM:
              return n3.unreadCount = 0, this.emitConversationUpdate(true, false), za();
            default:
              return za();
          }
        } }, { key: "setAllMessageRead", value: function() {
          var e3 = this, t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n3 = "setAllMessageRead", o2 = "".concat(this._n, ".").concat(n3);
          t2.scope || (t2.scope = S.READ_ALL_MSG), xe.l("".concat(o2, " options:"), t2);
          var s3 = this._createSetAllMessageReadPack(t2);
          if (0 === s3.readAllC2CMessage && 0 === s3.groupMessageReadInfoList.length)
            return za();
          var a2 = new ka(n3);
          return this.request({ protocolName: rs, requestData: s3 }).then(function(n4) {
            var o3 = n4.data, s4 = e3._handleAllMessageRead(o3);
            return a2.setMessage("scope:".concat(t2.scope, " failureGroups:").concat(JSON.stringify(s4))).setNetworkType(e3.getNetworkType()).end(), za();
          }).catch(function(t3) {
            return e3.probeNetwork().then(function(e4) {
              var n4 = v(e4, 2), o3 = n4[0], s4 = n4[1];
              a2.setError(t3, o3, s4).end();
            }), xe.w("".concat(o2, " failed. error:"), t3), Ja({ code: t3 && t3.code ? t3.code : da.MESSAGE_UNREAD_ALL_FAIL, message: t3 && t3.message ? t3.message : void 0 });
          });
        } }, { key: "setConversationCustomData", value: function(e3) {
          return this._convGroupHandler.setConvCustomData(e3);
        } }, { key: "markConversation", value: function(e3) {
          return this._convGroupHandler.markConversation(e3);
        } }, { key: "getConversationGroupList", value: function() {
          return this._convGroupHandler.getLocalConvGroupList();
        } }, { key: "createConversationGroup", value: function(e3) {
          return this._convGroupHandler.createConvGroup(e3);
        } }, { key: "deleteConversationGroup", value: function(e3) {
          return this._convGroupHandler.deleteConvGroup(e3);
        } }, { key: "renameConversationGroup", value: function(e3) {
          return this._convGroupHandler.renameConvGroup(e3);
        } }, { key: "addConversationsToGroup", value: function(e3) {
          return this._convGroupHandler.addConvsToGroup(e3);
        } }, { key: "deleteConversationsFromGroup", value: function(e3) {
          return this._convGroupHandler.deleteConvsFromGroup(e3);
        } }, { key: "onConversationMarkUpdated", value: function(e3) {
          this._convGroupHandler.onConvMarkUpdated(e3);
        } }, { key: "onConversationGroupCreated", value: function(e3) {
          this._convGroupHandler.onConvGroupCreated(e3);
        } }, { key: "onConversationGroupDeleted", value: function(e3) {
          this._convGroupHandler.onConvGroupDeleted(e3);
        } }, { key: "onConversationGroupNameUpdated", value: function(e3) {
          this._convGroupHandler.onConvGroupNameUpdated(e3);
        } }, { key: "onConversationInGroupUpdated", value: function(e3) {
          this._convGroupHandler.onConvInGroupUpdated(e3);
        } }, { key: "onConversationAddedToOrDeletedFromGroup", value: function(e3) {
          this._convGroupHandler.onConvAddedToOrDeletedFromGroup(e3);
        } }, { key: "_getConversationLastMessageSequence", value: function(e3) {
          var t2 = this._messageListHandler.getLocalLastMessage(e3.conversationID), n3 = e3.lastMessage.lastSequence;
          return t2 && n3 < t2.sequence && (n3 = t2.sequence), n3;
        } }, { key: "_getConversationLastMessageTime", value: function(e3) {
          var t2 = this._messageListHandler.getLocalLastMessage(e3.conversationID), n3 = e3.lastMessage.lastTime;
          return t2 && n3 < t2.time && (n3 = t2.time), n3;
        } }, { key: "_createSetAllMessageReadPack", value: function(e3) {
          var t2, n3 = { readAllC2CMessage: 0, groupMessageReadInfoList: [] }, o2 = e3.scope, s3 = D(this._conversationMap);
          try {
            for (s3.s(); !(t2 = s3.n()).done; ) {
              var a2 = v(t2.value, 2)[1];
              if (a2.unreadCount > 0) {
                if (a2.type === S.CONV_C2C && 0 === n3.readAllC2CMessage) {
                  if (o2 === S.READ_ALL_MSG)
                    n3.readAllC2CMessage = 1;
                  else if (o2 === S.READ_ALL_C2C_MSG) {
                    n3.readAllC2CMessage = 1;
                    break;
                  }
                } else if (a2.type === S.CONV_GROUP && (o2 === S.READ_ALL_GROUP_MSG || o2 === S.READ_ALL_MSG)) {
                  var r2 = this._getConversationLastMessageSequence(a2);
                  n3.groupMessageReadInfoList.push({ groupID: a2.groupProfile.groupID, messageSequence: r2 });
                }
              }
            }
          } catch (i2) {
            s3.e(i2);
          } finally {
            s3.f();
          }
          return n3;
        } }, { key: "onPushedAllMessageRead", value: function(e3) {
          this._handleAllMessageRead(e3);
        } }, { key: "_handleAllMessageRead", value: function(e3) {
          var t2 = e3.groupMessageReadInfoList, n3 = e3.readAllC2CMessage, o2 = this._parseGroupReadInfo(t2);
          return this._updateAllConversationUnreadCount({ readAllC2CMessage: n3 }) >= 1 && (this.emitConversationUpdate(true, false), this.emitTotalUnreadMessageCountUpdate()), o2;
        } }, { key: "_parseGroupReadInfo", value: function(e3) {
          var t2 = [];
          if (e3 && e3.length)
            for (var n3 = 0, o2 = e3.length; n3 < o2; n3++) {
              var s3 = e3[n3], a2 = s3.groupID, r2 = s3.sequence, i2 = s3.retCode, u2 = s3.lastMessageSeq;
              at(i2) ? this._remoteGroupReadSequenceMap.set(a2, u2) : (this._remoteGroupReadSequenceMap.set(a2, r2), 0 !== i2 && t2.push("".concat(a2, "-").concat(r2, "-").concat(i2)));
            }
          return t2;
        } }, { key: "_updateAllConversationUnreadCount", value: function(e3) {
          var t2, n3 = e3.readAllC2CMessage, o2 = 0, s3 = D(this._conversationMap);
          try {
            for (s3.s(); !(t2 = s3.n()).done; ) {
              var a2 = v(t2.value, 2), r2 = a2[0], i2 = a2[1];
              if (i2.unreadCount >= 1) {
                if (1 === n3 && i2.type === S.CONV_C2C) {
                  var u2 = this._getConversationLastMessageTime(i2);
                  this.updateIsReadAfterReadReport({ conversationID: r2, lastMessageTime: u2 });
                } else if (i2.type === S.CONV_GROUP) {
                  var c2 = r2.replace(S.CONV_GROUP, "");
                  if (this._remoteGroupReadSequenceMap.has(c2)) {
                    var l2 = this._remoteGroupReadSequenceMap.get(c2), p2 = this._getConversationLastMessageSequence(i2);
                    this.updateIsReadAfterReadReport({ conversationID: r2, remoteReadSequence: l2 }), p2 >= l2 && this._remoteGroupReadSequenceMap.delete(c2);
                  }
                }
                this.updateUnreadCount(r2, false) && (o2 += 1);
              }
            }
          } catch (d2) {
            s3.e(d2);
          } finally {
            s3.f();
          }
          return o2;
        } }, { key: "isRemoteRead", value: function(e3) {
          var t2 = e3.conversationID, n3 = e3.sequence, o2 = t2.replace(S.CONV_GROUP, ""), s3 = false;
          if (this._remoteGroupReadSequenceMap.has(o2)) {
            var a2 = this._remoteGroupReadSequenceMap.get(o2);
            n3 <= a2 && (s3 = true, xe.l("".concat(this._n, ".isRemoteRead conversationID:").concat(t2, " messageSequence:").concat(n3, " remoteReadSequence:").concat(a2))), n3 >= a2 + 10 && this._remoteGroupReadSequenceMap.delete(o2);
          }
          return s3;
        } }, { key: "updateIsReadAfterReadReport", value: function(e3) {
          var t2 = e3.conversationID, n3 = e3.lastMessageSeq, o2 = e3.lastMessageTime, s3 = this._messageListHandler.getLocalMessageList(t2);
          if (0 !== s3.length) {
            for (var a2, r2 = s3.length - 1; r2 >= 0; r2--)
              if (a2 = s3[r2], !(o2 && a2.time > o2 || n3 && a2.sequence > n3)) {
                if ("in" === a2.flow && a2.isRead)
                  break;
                a2.setIsRead(true);
              }
          }
        } }, { key: "updateUnreadCount", value: function(e3) {
          var t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n3 = false, o2 = this.getLocalConversation(e3), s3 = this._messageListHandler.getLocalMessageList(e3);
          if (o2) {
            var a2 = o2.unreadCount, r2 = s3.filter(function(e4) {
              return !e4.isRead && !e4._onlineOnlyFlag && !e4.isDeleted;
            }).length;
            if (a2 !== r2 && (o2.unreadCount = r2, n3 = true, xe.l("".concat(this._n, ".updateUnreadCount from ").concat(a2, " to ").concat(r2, ", conversationID:").concat(e3)), true === t2 && (this.emitConversationUpdate(true, false), this.emitTotalUnreadMessageCountUpdate())), n3 && o2.type === S.CONV_TOPIC) {
              var i2 = o2.unreadCount, u2 = this.getModule(wn), c2 = e3.replace(S.CONV_GROUP, "");
              u2.onConversationProxy({ topicID: c2, unreadCount: i2 });
            }
            return n3;
          }
        } }, { key: "clearGroupAtInfoList", value: function(e3) {
          var t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n3 = this.getLocalConversation(e3);
          if (n3 && n3.groupAtInfoList.length > 0) {
            if (n3.clearGroupAtInfoList(), xe.l("".concat(this._n, ".clearGroupAtInfoList conversationID:").concat(e3)), n3.type === S.CONV_TOPIC) {
              var o2 = n3.groupAtInfoList, s3 = this.getModule(wn), a2 = e3.replace(S.CONV_GROUP, "");
              s3.onConversationProxy({ topicID: a2, groupAtInfoList: o2 });
            }
            true === t2 && this.emitConversationUpdate(true, false);
          }
        } }, { key: "updateReadReceiptInfo", value: function(e3) {
          var t2 = this, n3 = e3.userID, o2 = void 0 === n3 ? void 0 : n3, s3 = e3.groupID, a2 = void 0 === s3 ? void 0 : s3, r2 = e3.readReceiptList;
          if (!jt(r2)) {
            var i2 = [];
            if (at(o2)) {
              if (!at(a2)) {
                var u2 = "".concat(S.CONV_GROUP).concat(a2);
                r2.forEach(function(e4) {
                  var n4 = e4.tinyID, o3 = e4.clientTime, s4 = e4.random, r3 = e4.readCount, c3 = e4.unreadCount, l2 = "".concat(n4, "-").concat(o3, "-").concat(s4), p2 = t2._messageListHandler.getLocalMessage(u2, l2), d2 = { groupID: a2, messageID: l2, readCount: 0, unreadCount: 0 };
                  p2 && ($e(r3) && (p2.readReceiptInfo.readCount = r3, d2.readCount = r3), $e(c3) && (p2.readReceiptInfo.unreadCount = c3, d2.unreadCount = c3), i2.push(d2));
                });
              }
            } else {
              var c2 = "".concat(S.CONV_C2C).concat(o2);
              r2.forEach(function(e4) {
                var n4 = e4.tinyID, s4 = e4.clientTime, a3 = e4.random, r3 = "".concat(n4, "-").concat(s4, "-").concat(a3), u3 = t2._messageListHandler.getLocalMessage(c2, r3);
                if (u3) {
                  u3.readReceiptInfo.isPeerRead = true;
                  var l2 = { userID: o2, messageID: r3, isPeerRead: true };
                  i2.push(l2);
                }
              });
            }
            i2.length > 0 && this.emitOuterEvent(E.MESSAGE_READ_RECEIPT_RECEIVED, i2);
          }
        } }, { key: "recomputeGroupUnreadCount", value: function(e3) {
          var t2 = e3.conversationID, n3 = e3.count, o2 = this.getLocalConversation(t2);
          if (o2) {
            var s3 = o2.unreadCount, a2 = s3 - n3;
            a2 < 0 && (a2 = 0), o2.unreadCount = a2, xe.l("".concat(this._n, ".recomputeGroupUnreadCount from ").concat(s3, " to ").concat(a2, ", conversationID:").concat(t2));
          }
        } }, { key: "updateIsRead", value: function(e3) {
          var t2 = this.getLocalConversation(e3), n3 = this.getLocalMessageList(e3);
          if (t2 && 0 !== n3.length && !kt(t2.type)) {
            for (var o2 = [], s3 = 0, a2 = n3.length; s3 < a2; s3++)
              "in" !== n3[s3].flow ? "out" !== n3[s3].flow || n3[s3].isRead || n3[s3].setIsRead(true) : o2.push(n3[s3]);
            var r2 = 0;
            if (t2.type === S.CONV_C2C) {
              var i2 = o2.slice(-t2.unreadCount).filter(function(e4) {
                return e4.isRevoked;
              }).length;
              r2 = o2.length - t2.unreadCount - i2;
            } else
              r2 = o2.length - t2.unreadCount;
            for (var u2 = 0; u2 < r2 && !o2[u2].isRead; u2++)
              o2[u2].setIsRead(true);
          }
        } }, { key: "deleteGroupAtTips", value: function(e3) {
          var t2 = this, n3 = "".concat(this._n, ".deleteGroupAtTips");
          xe.l("".concat(n3));
          var o2 = this._conversationMap.get(e3);
          if (!o2)
            return Promise.resolve();
          var s3 = o2.groupAtInfoList;
          if (0 === s3.length)
            return Promise.resolve();
          var a2 = void 0;
          e3.startsWith(S.CONV_GROUP) && (a2 = e3.replace(S.CONV_GROUP, ""));
          var r2 = m(s3);
          if ((Tt({ groupID: a2 }) || Dt(a2)) && 0 === (r2 = s3.filter(function(e4) {
            return !e4.atTypeArray.includes(S.CONV_AT_ALL);
          })).length)
            return this.clearGroupAtInfoList(e3, false), Promise.resolve();
          var i2 = this.getMyUserID();
          return this.request({ protocolName: bo, requestData: { messageListToDelete: r2.map(function(e4) {
            return { from: e4.from, to: i2, messageSeq: e4.__sequence, messageRandom: e4.__random, groupID: at(e4.topicID) ? e4.groupID : e4.topicID };
          }) } }).then(function() {
            return xe.l("".concat(n3, " ok. count:").concat(s3.length)), t2.clearGroupAtInfoList(e3, false), Promise.resolve();
          }).catch(function(e4) {
            return xe.e("".concat(n3, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "appendToMessageList", value: function(e3) {
          this._messageListHandler.pushIn(e3);
        } }, { key: "setMessageRandom", value: function(e3) {
          this.singlyLinkedList.set(e3.random);
        } }, { key: "deleteMessageRandom", value: function(e3) {
          this.singlyLinkedList.delete(e3.random);
        } }, { key: "pushIntoMessageList", value: function(e3, t2, n3) {
          return !(!this._messageListHandler.pushIn(t2, n3) || this._isMessageFromCurrentInstance(t2) && !n3) && (e3.push(t2), true);
        } }, { key: "_isMessageFromCurrentInstance", value: function(e3) {
          return this.singlyLinkedList.has(e3.random);
        } }, { key: "revoke", value: function(e3, t2, n3) {
          return this._messageListHandler.revoke(e3, t2, n3);
        } }, { key: "getPeerReadTime", value: function(e3) {
          return this._peerReadTimeMap.get(e3);
        } }, { key: "recordPeerReadTime", value: function(e3, t2) {
          this._peerReadTimeMap.has(e3) ? this._peerReadTimeMap.get(e3) < t2 && this._peerReadTimeMap.set(e3, t2) : this._peerReadTimeMap.set(e3, t2);
        } }, { key: "updateMessageIsPeerReadProperty", value: function(e3, t2) {
          if (e3.startsWith(S.CONV_C2C) && t2 > 0) {
            var n3 = this._messageListHandler.updateMessageIsPeerReadProperty(e3, t2);
            if (n3.length > 0 && this.emitOuterEvent(E.MESSAGE_READ_BY_PEER, n3), this._conversationMap.has(e3)) {
              var o2 = this._conversationMap.get(e3).lastMessage;
              jt(o2) || o2.fromAccount === this.getMyUserID() && o2.lastTime <= t2 && !o2.isPeerRead && (o2.isPeerRead = true, this.emitConversationUpdate(true, false));
            }
          }
        } }, { key: "updateMessageIsModifiedProperty", value: function(e3) {
          this._messageListHandler.updateMessageIsModifiedProperty(e3);
        } }, { key: "setCompleted", value: function(e3) {
          xe.l("".concat(this._n, ".setCompleted. conversationID:").concat(e3)), this._completedMap.set(e3, true);
        } }, { key: "updateRoamingMessageKeyAndTime", value: function(e3, t2, n3) {
          this._roamingMessageKeyAndTimeMap.set(e3, { messageKey: t2, lastMessageTime: n3 });
        } }, { key: "updateRoamingMessageSequence", value: function(e3, t2) {
          this._roamingMessageSequenceMap.set(e3, t2);
        } }, { key: "getConversationList", value: function(e3) {
          var t2 = this, n3 = "getConversationList", o2 = "".concat(this._n, ".").concat(n3), s3 = "pagingStatus:".concat(this._pagingStatus, ", local conversation count:").concat(this._conversationMap.size, ", options:").concat(e3);
          if (xe.l("".concat(o2, ". ").concat(s3)), this._pagingStatus === Zt.REJECTED) {
            var a2 = new ka(n3);
            return a2.setMessage(s3), this.syncConversationList().then(function() {
              a2.setNetworkType(t2.getNetworkType()).end();
              var n4 = t2._getConversationList(e3);
              return Ka({ conversationList: n4, isSyncCompleted: t2._isSyncCompleted() });
            }).catch(function(e4) {
              return t2.probeNetwork().then(function(t3) {
                var n4 = v(t3, 2), o3 = n4[0], s4 = n4[1];
                a2.setError(e4, o3, s4).end();
              }), xe.e("".concat(o2, " failed. error:"), e4), Ja(e4);
            });
          }
          if (0 === this._conversationMap.size) {
            var r2 = new ka(n3);
            return r2.setMessage(s3), this.syncConversationList().then(function() {
              r2.setNetworkType(t2.getNetworkType()).end();
              var n4 = t2._getConversationList(e3);
              return Ka({ conversationList: n4, isSyncCompleted: t2._isSyncCompleted() });
            }).catch(function(e4) {
              return t2.probeNetwork().then(function(t3) {
                var n4 = v(t3, 2), o3 = n4[0], s4 = n4[1];
                r2.setError(e4, o3, s4).end();
              }), xe.e("".concat(o2, " failed. error:"), e4), Ja(e4);
            });
          }
          var i2 = this._getConversationList(e3);
          return xe.l("".concat(o2, ". returned conversation count:").concat(i2.length)), za({ conversationList: i2, isSyncCompleted: this._isSyncCompleted() });
        } }, { key: "_getConversationList", value: function(e3) {
          if (at(e3))
            return this.getLocalConversationList();
          if (st(e3))
            return 0 === e3.length ? [] : this.getLocalConversationList().filter(function(t3) {
              return e3.includes(t3.conversationID);
            });
          if (ot(e3)) {
            var t2 = e3.type, n3 = e3.markType, o2 = e3.groupName;
            return this.getLocalConversationList().filter(function(e4) {
              return (t2 !== S.CONV_C2C && t2 !== S.CONV_GROUP || e4.type === t2) && (!et(o2) || e4.conversationGroupList.includes(o2)) && (!$e(n3) || e4.markList.includes(n3));
            });
          }
          return [];
        } }, { key: "_handleC2CPeerReadTime", value: function() {
          var e3, t2 = D(this._conversationMap);
          try {
            for (t2.s(); !(e3 = t2.n()).done; ) {
              var n3 = v(e3.value, 2), o2 = n3[0], s3 = n3[1];
              s3.type === S.CONV_C2C && (xe.d("".concat(this._n, "._handleC2CPeerReadTime conversationID:").concat(o2, " peerReadTime:").concat(s3.peerReadTime)), this.recordPeerReadTime(o2, s3.peerReadTime));
            }
          } catch (a2) {
            t2.e(a2);
          } finally {
            t2.f();
          }
        } }, { key: "_isPagingGetGroupListCompleted", value: function() {
          return this.getModule(Un).isPagingGetCompleted();
        } }, { key: "_getLocalGroupCount", value: function() {
          return this.getModule(Un).getLocalGroupList().length;
        } }, { key: "_hasLocalGroup", value: function(e3) {
          return this.getModule(Un).hasLocalGroup(e3.replace(S.CONV_GROUP, ""));
        } }, { key: "getConversationProfile", value: function(e3) {
          var t2, n3 = this;
          if ((t2 = this._conversationMap.has(e3) ? this._conversationMap.get(e3) : new _r({ conversationID: e3, type: e3.slice(0, 3) === S.CONV_C2C ? S.CONV_C2C : S.CONV_GROUP }, this.isIntl()))._isInfoCompleted || t2.type === S.CONV_SYSTEM)
            return za({ conversation: t2 });
          if (St(e3) && !this._hasLocalGroup(e3))
            return za({ conversation: t2 });
          var o2 = "".concat(this._n, ".").concat("getConversationProfile"), s3 = new ka("getConversationProfile");
          return xe.l("".concat(o2, ". conversationID:").concat(e3, " remark:").concat(t2.remark, " lastMessage:"), t2.lastMessage), this._updateUserOrGroupProfileCompletely(t2).then(function(a2) {
            s3.setNetworkType(n3.getNetworkType()).setMessage("conversationID:".concat(e3, " unreadCount:").concat(a2.data.conversation.unreadCount)).end();
            var r2 = n3.getModule(Pn);
            if (r2 && t2.type === S.CONV_C2C) {
              var i2 = e3.replace(S.CONV_C2C, "");
              if (r2.isMyFriend(i2)) {
                var u2 = r2.getFriendRemark(i2);
                t2.remark !== u2 && (t2.remark = u2, xe.l("".concat(o2, ". conversationID:").concat(e3, " patch remark:").concat(t2.remark)));
              }
            }
            return xe.l("".concat(o2, " ok. conversationID:").concat(e3)), a2;
          }).catch(function(t3) {
            return n3.probeNetwork().then(function(n4) {
              var o3 = v(n4, 2), a2 = o3[0], r2 = o3[1];
              s3.setError(t3, a2, r2).setMessage("conversationID:".concat(e3)).end();
            }), xe.e("".concat(o2, " failed. error:"), t3), Ja(t3);
          });
        } }, { key: "_updateUserOrGroupProfileCompletely", value: function(e3) {
          var t2 = this;
          return e3.type === S.CONV_C2C ? this.getModule(On).getUserProfile({ userIDList: [e3.toAccount] }).then(function(n3) {
            var o2 = n3.data;
            return 0 === o2.length ? Ja(new Wa({ code: da.USER_OR_GROUP_NOT_FOUND })) : (e3.userProfile = o2[0], e3._isInfoCompleted = true, t2._unshiftConversation(e3), za({ conversation: e3 }));
          }) : this.getModule(Un).getGroupProfile({ groupID: e3.toAccount }).then(function(n3) {
            return e3.groupProfile = n3.data.group, e3._isInfoCompleted = true, t2._unshiftConversation(e3), za({ conversation: e3 });
          });
        } }, { key: "_unshiftConversation", value: function(e3) {
          e3 instanceof _r && !this._conversationMap.has(e3.conversationID) && (this._conversationMap = new Map([[e3.conversationID, e3]].concat(m(this._conversationMap))), this._setStorageConversationList(), this.emitConversationUpdate(true, false));
        } }, { key: "_onProfileUpdated", value: function(e3) {
          var t2 = this;
          e3.data.forEach(function(e4) {
            var n3 = e4.userID;
            if (n3 === t2.getMyUserID())
              t2._onMyProfileModified({ latestNick: e4.nick, latestAvatar: e4.avatar });
            else {
              var o2 = t2._conversationMap.get("".concat(S.CONV_C2C).concat(n3));
              o2 && (o2.userProfile = e4);
            }
          });
        } }, { key: "_isSyncCompleted", value: function() {
          return this._pagingStatus === Zt.RESOLVED;
        } }, { key: "_errorLog", value: function(e3, t2, n3, o2) {
          var s3 = new Error("Params validate failed."), a2 = "".concat(this.getErrorMessage("API_REFER")).concat(e3);
          throw xe.w("[".concat(e3, "] | ").concat(t2, " | ").concat(this.getErrorMessage(n3, o2), ", ").concat(a2)), xe.e("[".concat(e3, "] Invalid ").concat(t2, ": type check failed for ").concat(t2, ".")), s3;
        } }, { key: "_isValidConversationID", value: function(e3) {
          return Et(e3) || St(e3) || kt(e3);
        } }, { key: "deleteConversation", value: function(e3) {
          var t2 = this, n3 = "deleteConversation";
          return et(e3) || nt(e3) || this._errorLog(n3, "options", "StringOrObjectRequiredLog"), et(e3) ? (this._isValidConversationID(e3) || this._errorLog(n3, "options", "InvalidConversationID", e3), xe.l("".concat(this._n, ".").concat(n3, " conversationID:").concat(e3)), this.deleteConversationList({ conversationIDList: [e3], flag: 1 })) : (st(e3.conversationIDList) || this._errorLog(n3, "conversationIDList", "ArrayRequiredLog"), 0 === e3.conversationIDList.length && this._errorLog(n3, "conversationIDList", "NonEmptyArrayLog"), e3.conversationIDList.forEach(function(e4) {
            t2._isValidConversationID(e4) || t2._errorLog(n3, "conversationIDList", "InvalidConversationID", e4);
          }), "clearHistoryMessage" in e3 && "boolean" != typeof e3.clearHistoryMessage && this._errorLog(n3, "clearHistoryMessage", "BooleanRequiredLog"), e3.conversationIDList.length > 100 && (e3.conversationIDList = e3.conversationIDList.slice(0, 100)), this.deleteConversationList(e3));
        } }, { key: "deleteConversationList", value: function(e3) {
          var t2 = this, n3 = e3.conversationIDList, o2 = void 0 === n3 ? [] : n3, s3 = e3.clearHistoryMessage, a2 = void 0 === s3 || s3, r2 = e3.flag, i2 = void 0 === r2 ? 0 : r2, u2 = "".concat(this._n, ".").concat("deleteConversationList");
          xe.l("".concat(u2, " conversationIDList.length:").concat(o2.length, " clearHistoryMessage:").concat(a2));
          var c2 = new ka("deleteConversationList");
          return c2.setMessage("conversationIDList:".concat(o2)), Promise.all([this.rmLocalOnlyConversationList(o2), this.rmLocalAndRemoteConversationList(o2, a2)]).then(function(e4) {
            c2.setNetworkType(t2.getNetworkType()).end();
            var n4 = [].concat(m(e4[0]), m(e4[1]));
            return 0 === n4.length ? Ja(new Wa({ code: da.CONVERSATION_NOT_FOUND })) : (xe.l("".concat(u2, " ok")), za(1 === i2 ? { conversationID: n4[0] } : { conversationIDList: n4 }));
          }).catch(function(e4) {
            return t2.probeNetwork().then(function(t3) {
              var n4 = v(t3, 2), o3 = n4[0], s4 = n4[1];
              c2.setError(e4, o3, s4).end();
            }), xe.e("".concat(u2, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "rmLocalOnlyConversationList", value: function(e3) {
          var t2 = this;
          return e3.filter(function(e4) {
            if (!t2._conversationMap.has(e4))
              return false;
            var n3 = t2.getLocalConversation(e4).type;
            return n3 !== S.CONV_GROUP || t2._hasLocalGroup(e4) ? n3 === S.CONV_SYSTEM && (t2.getModule(Un).deleteGroupSystemNotice({ messageList: t2._messageListHandler.getLocalMessageList(e4) }), t2.deleteLocalConversation(e4), true) : (t2.deleteLocalConversation(e4), true);
          });
        } }, { key: "rmLocalAndRemoteConversationList", value: function(e3, t2) {
          var n3 = this, o2 = { fromAccount: this.getMyUserID(), conversationList: [], clearHistoryMessage: t2 ? 1 : 0 };
          return e3.forEach(function(e4) {
            if (n3._conversationMap.has(e4)) {
              var t3 = n3.getLocalConversation(e4).type;
              t3 === S.CONV_C2C ? o2.conversationList.push({ toAccount: e4.replace(t3, ""), type: 1 }) : t3 === S.CONV_GROUP && n3._hasLocalGroup(e4) && o2.conversationList.push({ toGroupID: e4.replace(t3, ""), type: 2 });
            }
          }), 0 === o2.conversationList.length ? [] : this.request({ protocolName: Go, requestData: o2 }).then(function(e4) {
            var t3 = [];
            return e4.data.resultList.length > 0 && e4.data.resultList.map(function(e5) {
              if (0 === e5.code) {
                var n4 = 1 === e5.type ? "".concat(S.CONV_C2C).concat(e5.to) : "".concat(S.CONV_GROUP).concat(e5.groupID);
                t3.push(n4);
              }
            }), n3.deleteLocalConversationList(t3), t3;
          });
        } }, { key: "clearHistoryMessage", value: function(e3) {
          var t2 = this, n3 = { fromAccount: this.getMyUserID(), toAccount: void 0, type: void 0, toGroupID: void 0 };
          if (!this._conversationMap.has(e3))
            return Ja({ code: da.CONVERSATION_NOT_FOUND });
          var o2 = this._conversationMap.get(e3).type;
          if (o2 === S.CONV_C2C)
            n3.type = 1, n3.toAccount = e3.replace(S.CONV_C2C, "");
          else {
            if (o2 !== S.CONV_GROUP)
              return o2 === S.CONV_SYSTEM ? (this.getModule(Un).deleteGroupSystemNotice({ messageList: this._messageListHandler.getLocalMessageList(e3) }), za({ conversationID: e3 })) : Ja({ code: da.CONVERSATION_UN_RECORDED_TYPE });
            n3.type = 2, n3.toGroupID = e3.replace(S.CONV_GROUP, "");
          }
          var s3 = "".concat(this._n, ".").concat("clearHistoryMessage"), a2 = new ka("clearHistoryMessage");
          return a2.setMessage("conversationID:".concat(e3)), xe.l("".concat(s3, ". conversationID:").concat(e3)), this.setMessageRead({ conversationID: e3 }).then(function() {
            return t2.request({ protocolName: Uo, requestData: n3 });
          }).then(function() {
            a2.setNetworkType(t2.getNetworkType()).end(), xe.l("".concat(s3, " ok")), t2._messageListHandler.removeByConversationID(e3), t2.setCompleted(e3);
            var n4 = t2.getLocalConversation(e3);
            return n4 && (n4.updateLastMessage(), t2._sortConversationListAndEmitEvent()), za({ conversationID: e3 });
          }).catch(function(e4) {
            return t2.probeNetwork().then(function(t3) {
              var n4 = v(t3, 2), o3 = n4[0], s4 = n4[1];
              a2.setError(e4, o3, s4).end();
            }), xe.e("".concat(s3, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "pinConversation", value: function(e3) {
          var t2 = this, n3 = e3.conversationID, o2 = e3.isPinned;
          if (!this._conversationMap.has(n3))
            return Ja({ code: da.CONVERSATION_NOT_FOUND });
          var s3 = this.getLocalConversation(n3);
          if (s3.isPinned === o2)
            return za({ conversationID: n3 });
          var a2 = "".concat(this._n, ".").concat("pinConversation"), r2 = new ka("pinConversation");
          r2.setMessage("conversationID:".concat(n3, " isPinned:").concat(o2)), xe.l("".concat(a2, ". conversationID:").concat(n3, " isPinned:").concat(o2));
          var i2 = null;
          return Et(n3) ? i2 = { type: 1, toAccount: n3.replace(S.CONV_C2C, "") } : St(n3) && (i2 = { type: 2, groupID: n3.replace(S.CONV_GROUP, "") }), this.request({ protocolName: Po, requestData: { fromAccount: this.getMyUserID(), operationType: true === o2 ? 1 : 2, itemList: [i2] } }).then(function() {
            return r2.setNetworkType(t2.getNetworkType()).end(), xe.l("".concat(a2, " ok")), s3.isPinned !== o2 && (s3.isPinned = o2, t2._sortConversationListAndEmitEvent()), Ka({ conversationID: n3 });
          }).catch(function(e4) {
            return t2.probeNetwork().then(function(t3) {
              var n4 = v(t3, 2), o3 = n4[0], s4 = n4[1];
              r2.setError(e4, o3, s4).end();
            }), xe.e("".concat(a2, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "setMessageRemindType", value: function(e3) {
          return this._messageRemindHandler.set(e3);
        } }, { key: "patchMessageRemindType", value: function(e3) {
          var t2 = e3.ID, n3 = e3.isC2CConversation, o2 = e3.messageRemindType, s3 = false, a2 = this.getLocalConversation(n3 ? "".concat(S.CONV_C2C).concat(t2) : "".concat(S.CONV_GROUP).concat(t2));
          return a2 && a2.messageRemindType !== o2 && (a2.messageRemindType = o2, s3 = true), xe.d("".concat(this._n, ".patchMessageRemindType options:"), e3, "ret:".concat(s3)), s3;
        } }, { key: "onC2CMessageRemindTypeSynced", value: function(e3) {
          var t2 = this, n3 = "".concat(this._n, ".onC2CMessageRemindTypeSynced");
          xe.d(n3, e3), e3.dataList.forEach(function(e4) {
            if (!jt(e4.muteNotificationsSync)) {
              var o2, s3 = e4.muteNotificationsSync, a2 = s3.to, r2 = s3.updateSequence, i2 = s3.muteFlag;
              t2._messageRemindHandler.setUpdateSequence(r2), 0 === i2 ? o2 = S.MSG_REMIND_ACPT_AND_NOTE : 1 === i2 ? o2 = S.MSG_REMIND_DISCARD : 2 === i2 && (o2 = S.MSG_REMIND_ACPT_NOT_NOTE);
              var u2 = 0;
              t2.patchMessageRemindType({ ID: a2, isC2CConversation: true, messageRemindType: o2 }) && (u2 += 1), xe.l("".concat(n3, " updateCount:").concat(u2)), u2 >= 1 && t2.emitConversationUpdate(true, false);
            }
          });
        } }, { key: "onGroupMessageRemindTypeSynced", value: function(e3) {
          xe.d("".concat(this._n, ".onGroupMessageRemindTypeSynced options:"), e3), this._messageRemindHandler.onGroupMessageRemindTypeUpdated(e3);
        } }, { key: "deleteLocalConversation", value: function(e3) {
          var t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n3 = this._conversationMap.has(e3);
          if (xe.d("".concat(this._n, ".deleteLocalConversation conversationID:").concat(e3, " has:").concat(n3)), n3 && (this._conversationMap.delete(e3), this._roamingMessageKeyAndTimeMap.has(e3) && this._roamingMessageKeyAndTimeMap.delete(e3), this._roamingMessageSequenceMap.has(e3) && this._roamingMessageSequenceMap.delete(e3), this._setStorageConversationList(), this._messageListHandler.removeByConversationID(e3), this._completedMap.delete(e3), t2)) {
            var o2 = !this._isTopicConversation(e3);
            this.emitConversationUpdate(o2, false);
          }
        } }, { key: "deleteLocalConversationList", value: function(e3) {
          var t2 = this, n3 = 0, o2 = false;
          e3.forEach(function(e4) {
            t2._conversationMap.has(e4) && (n3 += t2._conversationMap.get(e4).unreadCount || 0, t2.deleteLocalConversation(e4, false), o2 = true);
          }), xe.l("".concat(this._n, ".deleteLocalConversationList conversationIDList.length:").concat(e3.length, " isConvIDExisted:").concat(o2)), o2 && (this.emitConversationUpdate(true, false), n3 > 0 && this.emitTotalUnreadMessageCountUpdate());
        } }, { key: "isMessageSentByCurrentInstance", value: function(e3) {
          return !(!this._messageListHandler.hasLocalMessage(e3.conversationID, e3.ID) && !this.singlyLinkedList.has(e3.random));
        } }, { key: "modifyMessageList", value: function(e3) {
          if (e3.startsWith(S.CONV_C2C) && this._conversationMap.has(e3)) {
            var t2 = this._conversationMap.get(e3), n3 = Date.now();
            this._messageListHandler.modifyMessageSentByPeer({ conversationID: e3, latestNick: t2.userProfile.nick, latestAvatar: t2.userProfile.avatar });
            var o2 = this.getModule(On).getNickAndAvatarByUserID(this.getMyUserID());
            this._messageListHandler.modifyMessageSentByMe({ conversationID: e3, latestNick: o2.nick, latestAvatar: o2.avatar }), xe.l("".concat(this._n, ".modifyMessageList conversationID:").concat(e3, " cost ").concat(Date.now() - n3, " ms"));
          }
        } }, { key: "updateUserProfileSpecifiedKey", value: function(e3) {
          xe.l("".concat(this._n, ".updateUserProfileSpecifiedKey options:"), e3);
          var t2 = e3.conversationID, n3 = e3.nick, o2 = e3.avatar;
          if (this._conversationMap.has(t2)) {
            var s3 = this._conversationMap.get(t2).userProfile;
            et(n3) && s3.nick !== n3 && (s3.nick = n3), et(o2) && s3.avatar !== o2 && (s3.avatar = o2), this.emitConversationUpdate(true, false);
          }
        } }, { key: "_onMyProfileModified", value: function(e3) {
          var n3 = this, o2 = this.getLocalConversationList(), s3 = Date.now();
          o2.forEach(function(o3) {
            n3.modifyMessageSentByMe(t({ conversationID: o3.conversationID }, e3));
          }), xe.l("".concat(this._n, "._onMyProfileModified. modify all messages sent by me, cost ").concat(Date.now() - s3, " ms"));
        } }, { key: "modifyMessageSentByMe", value: function(e3) {
          this._messageListHandler.modifyMessageSentByMe(e3);
        } }, { key: "getLatestMessageSentByMe", value: function(e3) {
          return this._messageListHandler.getLatestMessageSentByMe(e3);
        } }, { key: "modifyMessageSentByPeer", value: function(e3) {
          this._messageListHandler.modifyMessageSentByPeer(e3);
        } }, { key: "getLatestMessageSentByPeer", value: function(e3) {
          return this._messageListHandler.getLatestMessageSentByPeer(e3);
        } }, { key: "pushIntoNoticeResult", value: function(e3, t2) {
          return !(!this._messageListHandler.pushIn(t2) || this.singlyLinkedList.has(t2.random)) && (e3.push(t2), true);
        } }, { key: "getLocalLastMessage", value: function(e3) {
          return this._messageListHandler.getLocalLastMessage(e3);
        } }, { key: "checkAndPatchRemark", value: function() {
          var e3 = Promise.resolve();
          if (0 === this._conversationMap.size)
            return e3;
          var t2 = this.getModule(Pn);
          if (!t2)
            return e3;
          var n3 = m(this._conversationMap.values()).filter(function(e4) {
            return e4.type === S.CONV_C2C;
          });
          if (0 === n3.length)
            return e3;
          var o2 = 0;
          return n3.forEach(function(e4) {
            var n4 = e4.conversationID.replace(S.CONV_C2C, "");
            if (t2.isMyFriend(n4)) {
              var s3 = t2.getFriendRemark(n4);
              e4.remark !== s3 && (e4.remark = s3, o2 += 1);
            }
          }), xe.l("".concat(this._n, ".checkAndPatchRemark. c2c conversation count:").concat(n3.length, ", patched count:").concat(o2)), e3;
        } }, { key: "updateTopicConversation", value: function(e3) {
          this._updateLocalConversationList({ conversationOptionsList: e3, isFromGetConversations: true });
        } }, { key: "sendReadReceipt", value: function(e3) {
          var t2 = e3[0], n3 = null;
          return t2.conversationType === S.CONV_C2C ? n3 = this._m.getModule(Gn) : t2.conversationType === S.CONV_GROUP && (n3 = this._m.getModule(Un)), n3 ? n3.sendReadReceipt(e3) : Ja({ code: da.CANNOT_FIND_MODULE });
        } }, { key: "getReadReceiptList", value: function(e3) {
          var t2 = e3[0], n3 = null;
          return t2.conversationType === S.CONV_C2C ? n3 = this._m.getModule(Gn) : t2.conversationType === S.CONV_GROUP && (n3 = this._m.getModule(Un)), n3 ? n3.getReadReceiptList(e3) : Ja({ code: da.CANNOT_FIND_MODULE });
        } }, { key: "getLastMessageTime", value: function(e3) {
          var t2 = this.getLocalConversation(e3);
          return t2 ? t2.lastMessage.lastTime : 0;
        } }, { key: "getTotalUnreadMessageCount", value: function() {
          var e3 = this.getLocalConversationList(), t2 = 0;
          return e3.forEach(function(e4) {
            e4.type !== S.CONV_SYSTEM && ("" !== e4.messageRemindType && e4.messageRemindType !== S.MSG_REMIND_ACPT_AND_NOTE || (t2 += e4.unreadCount));
          }), t2;
        } }, { key: "emitTotalUnreadMessageCountUpdate", value: function() {
          var e3 = this.getTotalUnreadMessageCount();
          this._convTotalUnreadCount !== e3 && (xe.l("".concat(this._n, ".emitTotalUnreadMessageCountUpdate from ").concat(this._convTotalUnreadCount, " to ").concat(e3)), this._convTotalUnreadCount = e3, this.emitOuterEvent(E.TOTAL_UNREAD_MESSAGE_COUNT_UPDATED));
        } }, { key: "reset", value: function() {
          xe.l("".concat(this._n, ".reset")), this._pagingStatus = Zt.NOT_START, this._messageListHandler.reset(), this._messageRemindHandler.reset(), this._roamingMessageKeyAndTimeMap.clear(), this._roamingMessageSequenceMap.clear(), this.singlyLinkedList.reset(), this._peerReadTimeMap.clear(), this._completedMap.clear(), this._conversationMap.clear(), this._pagingTimeStamp = 0, this._pagingStartIndex = 0, this._pagingPinnedTimeStamp = 0, this._pagingPinnedStartIndex = 0, this._remoteGroupReadSequenceMap.clear(), this._convTotalUnreadCount = 0, this._pagingGetCostList.length = 0, this.resetReady();
        } }]), s2;
      }(ro), mr = function() {
        function e2(t2) {
          o(this, e2), this._groupModule = t2, this._n = "GroupTipsHandler", this._cachedGroupTipsMap = /* @__PURE__ */ new Map(), this._checkCountMap = /* @__PURE__ */ new Map(), this.MAX_CHECK_COUNT = 4, this._getTopicPendingMap = /* @__PURE__ */ new Map();
        }
        return a(e2, [{ key: "onCheckTimer", value: function(e3) {
          e3 % 1 == 0 && this._cachedGroupTipsMap.size > 0 && this._checkCachedGroupTips();
        } }, { key: "_checkCachedGroupTips", value: function() {
          var e3 = this;
          this._cachedGroupTipsMap.forEach(function(t2, n2) {
            var o2 = e3._checkCountMap.get(n2), s2 = e3._groupModule.hasLocalGroup(n2);
            xe.l("".concat(e3._n, "._checkCachedGroupTips groupID:").concat(n2, " hasLocalGroup:").concat(s2, " checkCount:").concat(o2)), s2 ? (e3._notifyCachedGroupTips(n2), e3._checkCountMap.delete(n2), e3._groupModule.deleteUnjoinedAVChatRoom(n2)) : o2 >= e3.MAX_CHECK_COUNT ? (e3._deleteCachedGroupTips(n2), e3._checkCountMap.delete(n2)) : (o2++, e3._checkCountMap.set(n2, o2));
          });
        } }, { key: "onNewGroupTips", value: function(e3) {
          xe.d("".concat(this._n, ".onReceiveGroupTips count:").concat(e3.dataList.length));
          var t2 = this.newGroupTipsStoredAndSummary(e3), n2 = t2.eventDataList, o2 = t2.result, s2 = t2.AVChatRoomMessageList;
          (s2.length > 0 && this._groupModule.onAVChatRoomMessage(s2), n2.length > 0) && (this._groupModule.updateNextMessageSeq(n2), this._groupModule.getModule(Fn).onNewMessage({ conversationOptionsList: n2, isInstantMessage: true }));
          o2.length > 0 && (this._groupModule.emitOuterEvent(E.MESSAGE_RECEIVED, o2), this.handleMessageList(o2));
        } }, { key: "newGroupTipsStoredAndSummary", value: function(e3) {
          for (var n2 = this, o2 = e3.event, s2 = e3.dataList, a2 = null, r2 = [], i2 = [], u2 = {}, c2 = [], l2 = function(e4, l3) {
            var p3 = yt(s2[e4]);
            if (6 === o2) {
              if (n2._groupModule.isGroupAttributesUpdatedNotice(p3))
                return "continue";
              if (n2._groupModule.isGroupCountersNotice(p3))
                return "continue";
            }
            var d3 = p3.groupProfile, g2 = d3.groupID, _2 = d3.communityType, h2 = void 0 === _2 ? 0 : _2, f2 = d3.topicID, v2 = void 0 === f2 ? void 0 : f2, m2 = d3.invisible, M2 = void 0, y2 = n2._groupModule.isMessageFromTopic(h2, v2);
            if (y2) {
              M2 = S.CONV_TOPIC, p3.to = v2;
              var I2 = n2._groupModule.getModule(wn);
              I2.hasLocalTopic(g2, v2) || n2._getTopicPendingMap.has(v2) || (n2._getTopicPendingMap.set(v2, 1), I2.getTopicList({ groupID: g2, topicIDList: [v2] }).finally(function() {
                n2._getTopicPendingMap.delete(v2);
              }));
            }
            var C2 = n2._groupModule.hasLocalGroup(g2);
            if (!C2 && n2._groupModule.isUnjoinedAVChatRoom(g2))
              return "continue";
            if (!C2 && !y2)
              return n2._cacheGroupTipsAndProbe({ groupID: g2, event: o2, item: p3 }), "continue";
            if (n2._groupModule.isMessageFromOrToAVChatroom(g2))
              return p3.event = o2, c2.push(p3), "continue";
            if (p3.currentUser = n2._groupModule.getMyUserID(), p3.conversationType = S.CONV_GROUP, (a2 = new Ha(p3)).setElement({ type: S.MSG_GRP_TIP, content: t(t({}, p3.elements), {}, { groupProfile: p3.groupProfile }) }), a2.isSystemMessage = false, 1 === m2)
              return n2._qualityStat(a2), "continue";
            var T2 = n2._groupModule.getModule(Fn), D2 = a2, E2 = D2.conversationID, k2 = D2.sequence;
            if (6 === o2)
              a2._onlineOnlyFlag = true, i2.push(a2);
            else if (!T2.pushIntoNoticeResult(i2, a2))
              return "continue";
            if (n2._groupModule.isMessageFromCommunityOfTopic(h2, v2))
              return "continue";
            if (6 === o2 && T2.getLocalConversation(E2))
              return "continue";
            6 !== o2 && n2._qualityStat(a2);
            var L2 = T2.isRemoteRead({ conversationID: E2, sequence: k2 });
            if (at(u2[E2])) {
              var A2 = 0;
              "in" === a2.flow && (a2._isExcludedFromUnreadCount || a2._onlineOnlyFlag || L2 || (A2 = 1)), u2[E2] = r2.push({ conversationID: E2, unreadCount: A2, type: at(M2) ? a2.conversationType : M2, subType: a2.conversationSubType, lastMessage: a2._isExcludedFromLastMessage ? "" : a2 }) - 1;
            } else {
              var R2 = u2[E2];
              r2[R2].type = a2.conversationType, r2[R2].subType = a2.conversationSubType, r2[R2].lastMessage = a2._isExcludedFromLastMessage ? "" : a2, "in" === a2.flow && (a2._isExcludedFromUnreadCount || a2._onlineOnlyFlag || L2 || r2[R2].unreadCount++);
            }
          }, p2 = 0, d2 = s2.length; p2 < d2; p2++)
            l2(p2);
          return { eventDataList: r2, result: i2, AVChatRoomMessageList: c2 };
        } }, { key: "_qualityStat", value: function(e3) {
          this._groupModule.getModule($n).addMessageSequence({ key: ya, message: e3 });
        } }, { key: "handleMessageList", value: function(e3) {
          var t2 = this;
          e3.forEach(function(e4) {
            switch (e4.payload.operationType) {
              case 1:
                t2._onNewMemberComeIn(e4);
                break;
              case 2:
                t2._onMemberQuit(e4);
                break;
              case 3:
                t2._onMemberKickedOut(e4);
                break;
              case 4:
                t2._onMemberSetAdmin(e4);
                break;
              case 5:
                t2._onMemberCancelledAdmin(e4);
                break;
              case 6:
                t2._onGroupProfileModified(e4);
                break;
              case 7:
                t2._onMemberInfoModified(e4);
                break;
              case 8:
                t2._onTopicProfileUpdated(e4);
                break;
              default:
                xe.w("".concat(t2._n, ".handleMessageList unknown operationType:").concat(e4.payload.operationType));
            }
          });
        } }, { key: "_onNewMemberComeIn", value: function(e3) {
          var t2 = e3.payload, n2 = t2.memberNum, o2 = t2.groupProfile.groupID, s2 = this._groupModule.getLocalGroupProfile(o2);
          s2 && $e(n2) && s2.memberCount !== n2 && (s2.memberCount = n2, this._updateConversationGroupProfile(s2));
        } }, { key: "_onMemberQuit", value: function(e3) {
          var t2 = e3.payload, n2 = t2.memberNum, o2 = t2.groupProfile.groupID, s2 = this._groupModule.getLocalGroupProfile(o2);
          s2 && $e(n2) && s2.memberCount !== n2 && (s2.memberCount = n2, this._updateConversationGroupProfile(s2)), this._groupModule.getModule(bn).deleteLocalGroupMembers(o2, e3.payload.userIDList);
        } }, { key: "_onMemberKickedOut", value: function(e3) {
          var t2 = e3.payload, n2 = t2.memberNum, o2 = t2.groupProfile.groupID, s2 = this._groupModule.getLocalGroupProfile(o2);
          s2 && $e(n2) && s2.memberCount !== n2 && (s2.memberCount = n2, this._updateConversationGroupProfile(s2)), this._groupModule.getModule(bn).deleteLocalGroupMembers(o2, e3.payload.userIDList);
        } }, { key: "_updateConversationGroupProfile", value: function(e3) {
          this._groupModule.getModule(Fn).updateConversationGroupProfile([e3]);
        } }, { key: "_onMemberSetAdmin", value: function(e3) {
          var t2 = e3.payload.groupProfile.groupID, n2 = e3.payload.userIDList, o2 = this._groupModule.getModule(bn);
          n2.forEach(function(e4) {
            var n3 = o2.getLocalGroupMemberInfo(t2, e4);
            n3 && n3.updateRole(S.GRP_MBR_ROLE_ADMIN);
          });
        } }, { key: "_onMemberCancelledAdmin", value: function(e3) {
          var t2 = e3.payload.groupProfile.groupID, n2 = e3.payload.userIDList, o2 = this._groupModule.getModule(bn);
          n2.forEach(function(e4) {
            var n3 = o2.getLocalGroupMemberInfo(t2, e4);
            n3 && n3.updateRole(S.GRP_MBR_ROLE_MEMBER);
          });
        } }, { key: "_onGroupProfileModified", value: function(e3) {
          var t2 = this, n2 = e3.payload, o2 = n2.newGroupProfile, s2 = n2.groupProfile.groupID, a2 = this._groupModule.getLocalGroupProfile(s2);
          Object.keys(o2).forEach(function(e4) {
            switch (e4) {
              case "ownerID":
                t2._ownerChanged(a2, o2);
                break;
              case "groupName":
                a2.name = o2[e4];
                break;
              default:
                a2[e4] = o2[e4];
            }
          });
          var r2 = !a2.isSupportTopic;
          this._groupModule.emitGroupListUpdate(true, r2);
        } }, { key: "_ownerChanged", value: function(e3, t2) {
          var n2 = e3.groupID, o2 = this._groupModule.getLocalGroupProfile(n2), s2 = this._groupModule.getMyUserID();
          if (s2 === t2.ownerID) {
            o2.updateGroup({ selfInfo: { role: S.GRP_MBR_ROLE_OWNER } });
            var a2 = this._groupModule.getModule(bn), r2 = a2.getLocalGroupMemberInfo(n2, s2), i2 = this._groupModule.getLocalGroupProfile(n2).ownerID, u2 = a2.getLocalGroupMemberInfo(n2, i2);
            r2 && r2.updateRole(S.GRP_MBR_ROLE_OWNER), u2 && u2.updateRole(S.GRP_MBR_ROLE_MEMBER);
          }
        } }, { key: "_onMemberInfoModified", value: function(e3) {
          var t2 = e3.to, n2 = e3.payload, o2 = n2.groupProfile, s2 = n2.memberList, a2 = o2.groupID;
          Dt(t2) && this._updateTopicMuteTime(e3);
          var r2 = this._groupModule.getModule(bn);
          s2.forEach(function(e4) {
            var t3 = r2.getLocalGroupMemberInfo(a2, e4.userID);
            t3 && $e(e4.muteTime) && t3.updateMuteUntil(e4.muteTime);
          });
        } }, { key: "_updateTopicMuteTime", value: function(e3) {
          var t2 = e3.to, n2 = e3.payload, o2 = n2.groupProfile, s2 = n2.memberList, a2 = void 0 === s2 ? [] : s2, r2 = this._groupModule.getModule(wn), i2 = o2.groupID, u2 = r2.getLocalTopic(i2, t2);
          if (u2) {
            for (var c2 = false, l2 = 0; l2 < a2.length; l2++) {
              var p2 = a2[l2];
              if (p2.userID === this._groupModule.getMyUserID() && p2.muteTime >= 0) {
                u2.updateSelfInfo({ muteTime: p2.muteTime }), c2 = true;
                break;
              }
            }
            c2 && this._groupModule.emitOuterEvent(E.TOPIC_UPDATED, { groupID: i2, topic: u2 });
          }
        } }, { key: "_onTopicProfileUpdated", value: function(e3) {
          var n2 = e3.payload, o2 = n2.groupProfile.groupID, s2 = n2.newTopicInfo;
          this._groupModule.getModule(wn).onTopicProfileUpdated(t({ groupID: o2, topicID: e3.to }, s2));
        } }, { key: "_cacheGroupTips", value: function(e3, t2) {
          this._cachedGroupTipsMap.has(e3) || this._cachedGroupTipsMap.set(e3, []), this._cachedGroupTipsMap.get(e3).push(t2);
        } }, { key: "_deleteCachedGroupTips", value: function(e3) {
          this._cachedGroupTipsMap.has(e3) && this._cachedGroupTipsMap.delete(e3);
        } }, { key: "_notifyCachedGroupTips", value: function(e3) {
          var t2 = this, n2 = this._cachedGroupTipsMap.get(e3) || [];
          n2.forEach(function(e4) {
            t2.onNewGroupTips(e4);
          }), this._deleteCachedGroupTips(e3), xe.l("".concat(this._n, "._notifyCachedGroupTips groupID:").concat(e3, " count:").concat(n2.length));
        } }, { key: "_cacheGroupTipsAndProbe", value: function(e3) {
          var t2 = this, n2 = e3.groupID, o2 = e3.event, s2 = e3.item;
          this._cacheGroupTips(n2, { event: o2, dataList: [s2] }), this._groupModule.getGroupSimplifiedInfo(n2).then(function(e4) {
            e4.type === S.GRP_AVCHATROOM ? t2._groupModule.hasLocalGroup(n2) ? t2._notifyCachedGroupTips(n2) : t2._groupModule.setUnjoinedAVChatRoom(n2) : (t2._groupModule.updateGroupMap([e4]), t2._notifyCachedGroupTips(n2));
          }), this._checkCountMap.has(n2) || this._checkCountMap.set(n2, 0), xe.l("".concat(this._n, "._cacheGroupTipsAndProbe groupID:").concat(n2));
        } }, { key: "reset", value: function() {
          this._cachedGroupTipsMap.clear(), this._checkCountMap.clear(), this._getTopicPendingMap.clear();
        } }]), e2;
      }(), Mr = function() {
        function e2(t2) {
          o(this, e2), this._groupModule = t2, this._n = "CommonGroupHandler", this.tempConversationList = null, this._cachedGroupMessageMap = /* @__PURE__ */ new Map(), this._checkCountMap = /* @__PURE__ */ new Map(), this.MAX_CHECK_COUNT = 4, this._getTopicPendingMap = /* @__PURE__ */ new Map(), this._isPagingGetCompleted = false, t2.getInnerEmitterInstance().once(Za, this._initGroupList, this);
        }
        return a(e2, [{ key: "onCheckTimer", value: function(e3) {
          e3 % 1 == 0 && this._cachedGroupMessageMap.size > 0 && this._checkCachedGroupMessage();
        } }, { key: "_checkCachedGroupMessage", value: function() {
          var e3 = this;
          this._cachedGroupMessageMap.forEach(function(t2, n2) {
            var o2 = e3._checkCountMap.get(n2), s2 = e3._groupModule.hasLocalGroup(n2);
            xe.l("".concat(e3._n, "._checkCachedGroupMessage groupID:").concat(n2, " hasLocalGroup:").concat(s2, " checkCount:").concat(o2)), s2 ? (e3._notifyCachedGroupMessage(n2), e3._checkCountMap.delete(n2), e3._groupModule.deleteUnjoinedAVChatRoom(n2)) : o2 >= e3.MAX_CHECK_COUNT ? (e3._deleteCachedGroupMessage(n2), e3._checkCountMap.delete(n2)) : (o2++, e3._checkCountMap.set(n2, o2));
          });
        } }, { key: "_initGroupList", value: function() {
          var e3 = this;
          xe.l("".concat(this._n, "._initGroupList"));
          var t2 = new ka("getGroupListInStorage"), n2 = this._groupModule.getStorageGroupList();
          if (st(n2) && n2.length > 0) {
            n2.forEach(function(t3) {
              e3._groupModule.initGroupMap(t3);
            }), this._groupModule.emitGroupListUpdate(true, false);
            var o2 = this._groupModule.getLocalGroupList().length;
            t2.setNetworkType(this._groupModule.getNetworkType()).setMessage("group count:".concat(o2)).end();
          } else
            t2.setNetworkType(this._groupModule.getNetworkType()).setMessage("group count:0").end();
          xe.l("".concat(this._n, "._initGroupList ok"));
        } }, { key: "handleUpdateGroupLastMessage", value: function(e3) {
          var n2 = "".concat(this._n, ".handleUpdateGroupLastMessage");
          if (xe.l("".concat(n2, " conversation count:").concat(e3.length, ", local group count:").concat(this._groupModule.getLocalGroupList().length)), 0 !== this._groupModule.getGroupMap().size) {
            for (var o2, s2, a2, r2 = false, i2 = 0, u2 = e3.length; i2 < u2; i2++)
              (o2 = e3[i2]).type === S.CONV_GROUP && (s2 = o2.conversationID.split(/^GROUP/)[1], (a2 = this._groupModule.getLocalGroupProfile(s2)) && (a2.lastMessage = t({}, o2.lastMessage), r2 = true));
            r2 && (this._groupModule.sortLocalGroupList(), this._groupModule.emitGroupListUpdate(true, false));
          } else
            this.tempConversationList = e3;
        } }, { key: "onNewGroupMessage", value: function(e3) {
          xe.d("".concat(this._n, ".onNewGroupMessage count:").concat(e3.dataList.length));
          var t2 = this._newGroupMessageStoredAndSummary(e3), n2 = t2.conversationOptionsList, o2 = t2.messageList, s2 = t2.AVChatRoomMessageList;
          (s2.length > 0 && this._groupModule.onAVChatRoomMessage(s2), this._groupModule.filterModifiedMessage(o2), n2.length > 0) && (this._groupModule.updateNextMessageSeq(n2), this._groupModule.getModule(Fn).onNewMessage({ conversationOptionsList: n2, isInstantMessage: e3.isInstantMessage || true, updateUnreadCount: e3.updateUnreadCount || true }));
          var a2 = this._groupModule.filterUnmodifiedMessage(o2);
          a2.length > 0 && this._groupModule.emitOuterEvent(E.MESSAGE_RECEIVED, a2), o2.length = 0;
        } }, { key: "_newGroupMessageStoredAndSummary", value: function(e3) {
          var t2 = this, n2 = e3.dataList, o2 = e3.event, s2 = e3.isInstantMessage, a2 = null, r2 = [], i2 = [], u2 = [], c2 = {}, l2 = this._groupModule.getModule(Hn), p2 = this._groupModule.getFileDownloadProxy(), d2 = n2.length;
          d2 > 1 && n2.sort(function(e4, t3) {
            return e4.sequence - t3.sequence;
          });
          for (var g2 = function(e4) {
            var d3 = yt(n2[e4]), g3 = d3.groupProfile, _3 = g3.groupID, h2 = g3.communityType, f2 = void 0 === h2 ? 0 : h2, v2 = g3.topicID, m2 = void 0 === v2 ? void 0 : v2, M2 = g3.invisible, y2 = void 0, I2 = t2._groupModule.isMessageFromTopic(f2, m2);
            if (I2) {
              y2 = S.CONV_TOPIC, d3.to = m2;
              var C2 = t2._groupModule.getModule(wn);
              C2.hasLocalTopic(_3, m2) || t2._getTopicPendingMap.has(m2) || (t2._getTopicPendingMap.set(m2, 1), C2.getTopicList({ groupID: _3, topicIDList: [m2] }).finally(function() {
                t2._getTopicPendingMap.delete(m2);
              }));
            }
            var T2 = t2._groupModule.hasLocalGroup(_3);
            if (!T2 && t2._groupModule.isUnjoinedAVChatRoom(_3))
              return "continue";
            if (!T2 && !I2)
              return t2._cacheGroupMessageAndProbe({ groupID: _3, event: o2, item: d3 }), "continue";
            if (t2._groupModule.isMessageFromOrToAVChatroom(_3))
              return d3.event = o2, u2.push(d3), "continue";
            if (d3.currentUser = t2._groupModule.getMyUserID(), d3.conversationType = S.CONV_GROUP, d3.isSystemMessage = !!d3.isSystemMessage, a2 = new Ha(d3), d3.elements = l2.parseElements(d3.elements, d3.from), a2.setElement(d3.elements, p2), 1 === M2)
              return t2._qualityStat(s2, a2), "continue";
            var D2 = 1 === n2[e4].isModified, E2 = t2._groupModule.getModule(Fn);
            if (E2.isMessageSentByCurrentInstance(a2) ? a2.isModified = D2 : D2 = false, 1 === d3.onlineOnlyFlag)
              a2._onlineOnlyFlag = true, E2.isMessageSentByCurrentInstance(a2) || i2.push(a2);
            else {
              if (t2._groupModule.isMessageFromCommunityOfTopic(f2, m2))
                return i2.push(a2), "continue";
              if (!E2.pushIntoMessageList(i2, a2, D2))
                return "continue";
              t2._qualityStat(s2, a2);
              var k2 = a2, L2 = k2.conversationID, A2 = k2.sequence, R2 = E2.isRemoteRead({ conversationID: L2, sequence: A2 });
              if (at(c2[L2])) {
                var N2 = 0;
                "in" === a2.flow && (a2._isExcludedFromUnreadCount || R2 || (N2 = 1)), c2[L2] = r2.push({ conversationID: L2, unreadCount: N2, type: at(y2) ? a2.conversationType : y2, subType: a2.conversationSubType, lastMessage: a2._isExcludedFromLastMessage ? "" : a2 }) - 1;
              } else {
                var O2 = c2[L2];
                r2[O2].type = at(y2) ? a2.conversationType : y2, r2[O2].subType = a2.conversationSubType, r2[O2].lastMessage = a2._isExcludedFromLastMessage ? "" : a2, "in" === a2.flow && (a2._isExcludedFromUnreadCount || R2 || r2[O2].unreadCount++);
              }
            }
          }, _2 = 0; _2 < d2; _2++)
            g2(_2);
          return { conversationOptionsList: r2, messageList: i2, AVChatRoomMessageList: u2 };
        } }, { key: "_qualityStat", value: function(e3, t2) {
          var n2 = this._groupModule.getModule($n);
          n2.addMessageSequence({ key: ya, message: t2 }), e3 && t2.clientTime > 0 && n2.addMessageDelay(t2.clientTime);
        } }, { key: "onGroupMessageRevoked", value: function(e3) {
          var t2 = this._groupModule.getModule(Fn), n2 = [], o2 = null, s2 = true;
          e3.dataList.forEach(function(e4) {
            var a2 = e4.elements.revokedInfos;
            at(a2) || a2.forEach(function(e5) {
              var a3 = jt(e5.topicID) ? "GROUP".concat(e5.groupID) : "GROUP".concat(e5.topicID);
              o2 = t2.revoke(a3, e5.sequence, e5.random);
              var r2 = e5.revokerInfo && e5.revokerInfo.revoker;
              if (o2)
                o2.revoker = r2, n2.push(o2);
              else {
                var i2 = { conversationID: a3, to: e5.topicID || "", sequence: e5.sequence, time: e5.time, revoker: r2 };
                t2.isLastMessageRevoked(i2) && (n2.push(i2), s2 = false);
              }
            });
          }), 0 !== n2.length && (t2.onMessageRevoked(n2), true === s2 && (xe.l("".concat(this._n, ".onGroupMessageRevoked count:").concat(n2.length)), this._groupModule.emitOuterEvent(E.MESSAGE_REVOKED, n2)));
        } }, { key: "_groupListTreeShaking", value: function(e3) {
          for (var t2 = new Map(m(this._groupModule.getGroupMap())), n2 = 0, o2 = e3.length; n2 < o2; n2++)
            t2.delete(e3[n2].groupID);
          this._groupModule.hasJoinedAVChatRoom() && this._groupModule.getJoinedAVChatRoom().forEach(function(e4) {
            t2.delete(e4);
          });
          this._groupModule.getGroupMap().forEach(function(e4, n3) {
            e4.isSupportTopic && t2.delete(n3);
          });
          for (var s2 = m(t2.keys()), a2 = 0, r2 = s2.length; a2 < r2; a2++)
            this._groupModule.deleteGroup(s2[a2]);
        } }, { key: "getGroupList", value: function(e3) {
          var t2 = this, n2 = "".concat(this._n, ".").concat("getGroupList"), o2 = new ka("getGroupList");
          xe.l("".concat(n2));
          var s2 = { introduction: "Introduction", notification: "Notification", createTime: "CreateTime", ownerID: "Owner_Account", lastInfoTime: "LastInfoTime", memberNum: "MemberNum", maxMemberNum: "MaxMemberNum", joinOption: "ApplyJoinOption", inviteOption: "InviteJoinOption", muteAllMembers: "ShutUpAllMember" }, a2 = ["Type", "Name", "FaceUrl", "NextMsgSeq", "LastMsgTime", "AtInfoList", "LastRecallTime"], r2 = [];
          e3 && e3.groupProfileFilter && e3.groupProfileFilter.forEach(function(e4) {
            s2[e4] && a2.push(s2[e4]);
          });
          var i2 = (e3 || {}).isGroupWithTopicOnly, u2 = void 0 !== i2 && i2;
          return this._pagingGetGroupList({ limit: 50, offset: 0, groupBaseInfoFilter: a2, groupList: r2, isGroupWithTopicOnly: u2 }).then(function() {
            xe.l("".concat(n2, " ok. count:").concat(r2.length, " isGroupWithTopicOnly:").concat(u2)), u2 || t2._groupListTreeShaking(r2), t2._groupModule.updateGroupMap(r2);
            var e4 = t2._groupModule.getLocalGroupList().length;
            o2.setNetworkType(t2._groupModule.getNetworkType()).setMessage("remote count:".concat(r2.length, ", after tree shaking, local count:").concat(e4, ", isGroupWithTopicOnly:").concat(u2)).end(), t2.tempConversationList && (t2.handleUpdateGroupLastMessage(t2.tempConversationList), t2.tempConversationList = null), t2._groupModule.patchGroupMessageRemindType(), t2._groupModule.recomputeUnreadCount(), t2._groupModule.emitGroupListUpdate(true, !u2);
            var s3 = t2._groupModule.getLocalGroupList();
            if (u2) {
              var a3 = s3.filter(function(e5) {
                return true === e5.isSupportTopic;
              });
              return Ka({ groupList: a3 });
            }
            return t2._isPagingGetCompleted = true, Ka({ groupList: s3 });
          }).catch(function(e4) {
            return t2._groupModule.probeNetwork().then(function(t3) {
              var n3 = v(t3, 2), s3 = n3[0], a3 = n3[1];
              o2.setError(e4, s3, a3).end();
            }), xe.e("".concat(n2, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "isPagingGetCompleted", value: function() {
          return this._isPagingGetCompleted;
        } }, { key: "_pagingGetGroupList", value: function(e3) {
          var t2 = this, n2 = "".concat(this._n, ".").concat("_pagingGetGroupList"), o2 = e3.isCommunityRelay, s2 = void 0 !== o2 && o2, a2 = e3.isGroupWithTopicOnly, r2 = void 0 !== a2 && a2, i2 = e3.limit, u2 = e3.offset, c2 = e3.groupBaseInfoFilter, l2 = e3.groupList;
          if (r2)
            return this._pagingGetGroupListWithTopic({ limit: i2, offset: u2, groupBaseInfoFilter: c2, groupList: l2 });
          var p2 = new ka("_pagingGetGroupList");
          return this._groupModule.request({ protocolName: Wo, requestData: { type: s2 ? S.GRP_COMMUNITY : void 0, memberAccount: this._groupModule.getMyUserID(), limit: i2, offset: u2, responseFilter: { groupBaseInfoFilter: c2, selfInfoFilter: ["Role", "JoinTime", "MsgFlag", "MsgSeq"] } } }).then(function(e4) {
            var o3 = e4.data, a3 = o3.groups, r3 = void 0 === a3 ? [] : a3, d2 = o3.totalCount;
            l2.push.apply(l2, m(r3)), t2._handleGroupAtInfoWithoutTopic(s2, r3);
            var g2 = u2 + i2, _2 = !(d2 > g2), h2 = "offset:".concat(u2, " totalCount:").concat(d2, " isCompleted:").concat(_2, " ") + "currentCount:".concat(l2.length, " isCommunityRelay:").concat(s2);
            return p2.setNetworkType(t2._groupModule.getNetworkType()).setMessage("".concat(h2)).end(), s2 || _2 ? !s2 && _2 ? (xe.l("".concat(n2, " start to get community list")), u2 = 0, t2._pagingGetGroupList({ limit: i2, offset: u2, groupBaseInfoFilter: c2, groupList: l2, isCommunityRelay: true })) : s2 && !_2 ? (u2 = g2, t2._pagingGetGroupList({ limit: i2, offset: u2, groupBaseInfoFilter: c2, groupList: l2, isCommunityRelay: true })) : (xe.l("".concat(n2, " ok. totalCount:").concat(l2.length)), Ka({ groupList: l2 })) : (u2 = g2, t2._pagingGetGroupList({ limit: i2, offset: u2, groupBaseInfoFilter: c2, groupList: l2 }));
          }).catch(function(e4) {
            return 11e3 !== e4.code && t2._groupModule.probeNetwork().then(function(t3) {
              var n3 = v(t3, 2), o3 = n3[0], a3 = n3[1];
              p2.setMessage("isCommunityRelay:".concat(s2)).setError(e4, o3, a3).end();
            }), s2 ? (11e3 === e4.code && (p2 = null, xe.l("".concat(n2, " ok. community unavailable"))), za({ groupList: l2 })) : Ja(e4);
          });
        } }, { key: "_pagingGetGroupListWithTopic", value: function(e3) {
          var t2 = this, n2 = "".concat(this._n, "._pagingGetGroupListWithTopic"), o2 = e3.limit, s2 = e3.offset, a2 = e3.groupBaseInfoFilter, r2 = e3.groupList, i2 = new ka("pagingGetGroupListWithTopic");
          return this._groupModule.request({ protocolName: Wo, requestData: { type: S.GRP_COMMUNITY, memberAccount: this._groupModule.getMyUserID(), limit: o2, offset: s2, responseFilter: { groupBaseInfoFilter: a2, selfInfoFilter: ["Role", "JoinTime", "MsgFlag", "MsgSeq"] }, isSupportTopic: 1 } }).then(function(e4) {
            var u2 = e4.data, c2 = u2.groups, l2 = void 0 === c2 ? [] : c2, p2 = u2.totalCount;
            r2.push.apply(r2, m(l2));
            var d2 = s2 + o2, g2 = !(p2 > d2), _2 = "offset:".concat(s2, " totalCount:").concat(p2, " isCompleted:").concat(g2, " ") + "currentCount:".concat(r2.length);
            return i2.setNetworkType(t2._groupModule.getNetworkType()).setMessage("".concat(_2)).end(), g2 ? (xe.l("".concat(n2, " ok. totalCount:").concat(r2.length)), Ka({ groupList: r2 })) : (s2 = d2, t2._pagingGetGroupListWithTopic({ limit: o2, offset: s2, groupBaseInfoFilter: a2, groupList: r2 }));
          }).catch(function(e4) {
            return t2._groupModule.probeNetwork().then(function(t3) {
              var n3 = v(t3, 2), o3 = n3[0], s3 = n3[1];
              i2.setError(e4, o3, s3).end();
            }), Ja(e4);
          });
        } }, { key: "_cacheGroupMessage", value: function(e3, t2) {
          this._cachedGroupMessageMap.has(e3) || this._cachedGroupMessageMap.set(e3, []), this._cachedGroupMessageMap.get(e3).push(t2);
        } }, { key: "_deleteCachedGroupMessage", value: function(e3) {
          this._cachedGroupMessageMap.has(e3) && this._cachedGroupMessageMap.delete(e3);
        } }, { key: "_notifyCachedGroupMessage", value: function(e3) {
          var t2 = this, n2 = this._cachedGroupMessageMap.get(e3) || [];
          n2.forEach(function(e4) {
            t2.onNewGroupMessage(e4);
          }), this._deleteCachedGroupMessage(e3), xe.l("".concat(this._n, "._notifyCachedGroupMessage groupID:").concat(e3, " count:").concat(n2.length));
        } }, { key: "_cacheGroupMessageAndProbe", value: function(e3) {
          var t2 = this, n2 = e3.groupID, o2 = e3.event, s2 = e3.item;
          this._cacheGroupMessage(n2, { event: o2, dataList: [s2] }), this._groupModule.getGroupSimplifiedInfo(n2).then(function(e4) {
            e4.type === S.GRP_AVCHATROOM ? t2._groupModule.hasLocalGroup(n2) ? t2._notifyCachedGroupMessage(n2) : t2._groupModule.setUnjoinedAVChatRoom(n2) : (t2._groupModule.updateGroupMap([e4]), t2._notifyCachedGroupMessage(n2));
          }), this._checkCountMap.has(n2) || this._checkCountMap.set(n2, 0), xe.l("".concat(this._n, "._cacheGroupMessageAndProbe groupID:").concat(n2));
        } }, { key: "_handleGroupAtInfoWithoutTopic", value: function(e3, n2) {
          var o2 = this;
          e3 && 0 !== n2.length && n2.forEach(function(e4) {
            var n3 = e4.groupID, s2 = e4.groupAtInfoList, a2 = [];
            at(s2) || (s2.forEach(function(e5) {
              a2.push(t(t({}, e5), {}, { groupID: n3 }));
            }), o2._groupModule.getModule(Fn).onNewGroupAtTips({ dataList: a2 }));
          });
        } }, { key: "reset", value: function() {
          this._cachedGroupMessageMap.clear(), this._checkCountMap.clear(), this._getTopicPendingMap.clear(), this._isPagingGetCompleted = false, this._groupModule.getInnerEmitterInstance().once(Za, this._initGroupList, this);
        } }]), e2;
      }(), yr = 1, Ir = 2, Cr = 3, Tr = 4, Dr = 5, Er = function() {
        function e2(t2) {
          o(this, e2), this._groupModule = t2, this._n = "GroupAttributesHandler", this._groupAttributesMap = /* @__PURE__ */ new Map(), this._groupAttributesCopy = {}, this.CACHE_EXPIRE_TIME = 3e4, this._groupModule.getInnerEmitterInstance().on($a, this._onCloudConfigUpdated, this);
        }
        return a(e2, [{ key: "_onCloudConfigUpdated", value: function() {
          var e3 = this._groupModule.getCloudConfig("grp_attr_cache_time");
          at(e3) || (this.CACHE_EXPIRE_TIME = Number(e3));
        } }, { key: "updateLocalMainSequenceOnReconnected", value: function() {
          this._groupAttributesMap.forEach(function(e3) {
            e3.localMainSequence = 0;
          });
        } }, { key: "isGroupAttributesUpdatedNotice", value: function(e3) {
          var t2 = e3.to, n2 = e3.elements.newGroupProfile, o2 = !at(n2) && !jt(n2.groupAttributeOption);
          return o2 && this._onGroupAttributesUpdated({ groupID: t2, groupAttributeOption: n2.groupAttributeOption }), o2;
        } }, { key: "_onGroupAttributesUpdated", value: function(e3) {
          var t2 = this, n2 = e3.groupID, o2 = e3.groupAttributeOption, s2 = o2.mainSequence, a2 = o2.isWithChangedAttributeInfo, r2 = o2.groupAttributeList, i2 = void 0 === r2 ? [] : r2, u2 = o2.operationType;
          if (xe.l("".concat(this._n, ".onGroupAttributesUpdated. ") + "groupID:".concat(n2, " isWithChangedAttributeInfo:").concat(a2, " operationType:").concat(u2)), !at(u2)) {
            this._groupAttributesCopy = this._getCachedAttributes({ groupID: n2 });
            var c2 = s2 - this._getLocalGroupAttributes(n2).localMainSequence;
            if (0 !== c2) {
              if (1 === a2 && 1 === c2)
                return this._refreshCachedGroupAttributes({ groupID: n2, remoteMainSequence: s2, groupAttributeList: i2, operationType: u2 }), void this._emitGroupAttributesUpdated(n2);
              if (this._hasLocalGroupAttributes(n2)) {
                var l2 = this._getLocalGroupAttributes(n2).avChatRoomKey;
                this._getGroupAttributes({ groupID: n2, avChatRoomKey: l2 }).then(function() {
                  t2._emitGroupAttributesUpdated(n2);
                });
              }
            }
          }
        } }, { key: "initGroupAttributesCache", value: function(e3) {
          var t2 = e3.groupID, n2 = e3.avChatRoomKey, o2 = void 0 === n2 ? void 0 : n2;
          this._groupAttributesMap.set(t2, { lastUpdateTime: 0, localMainSequence: 0, remoteMainSequence: 0, attributes: /* @__PURE__ */ new Map(), avChatRoomKey: o2 }), xe.l("".concat(this._n, ".initGroupAttributesCache groupID:").concat(t2, " avChatRoomKey:").concat(o2));
        } }, { key: "initGroupAttributes", value: function(e3) {
          var t2 = this, n2 = e3.groupID, o2 = e3.groupAttributes, s2 = this._getLocalGroupAttributes(n2), a2 = s2.remoteMainSequence, r2 = s2.avChatRoomKey, i2 = new ka("initGroupAttributes");
          return i2.setMessage("groupID:".concat(n2, " avChatRoomKey:").concat(r2, " mainSequence:").concat(a2)), this._groupModule.request({ protocolName: Ms, requestData: { groupID: n2, avChatRoomKey: r2, mainSequence: a2, groupAttributeList: this._transformGroupAttributes(o2) } }).then(function(e4) {
            xe.l("".concat(t2._n, ".").concat("initGroupAttributes", " ok. groupID:").concat(n2));
            var s3 = e4.data, a3 = s3.mainSequence, r3 = m(s3.groupAttributeList);
            return r3.forEach(function(e5) {
              e5.value = o2[e5.key];
            }), t2._groupAttributesCopy = t2._getCachedAttributes({ groupID: n2 }), t2._refreshCachedGroupAttributes({ groupID: n2, remoteMainSequence: a3, groupAttributeList: r3, operationType: yr }), t2._emitGroupAttributesUpdated(n2), i2.setNetworkType(t2._groupModule.getNetworkType()).end(), Ka({ groupAttributes: o2 });
          }).catch(function(e4) {
            return t2._groupModule.probeNetwork().then(function(t3) {
              var n3 = v(t3, 2), o3 = n3[0], s3 = n3[1];
              i2.setError(e4, o3, s3).end();
            }), Ja(e4);
          });
        } }, { key: "setGroupAttributes", value: function(e3) {
          var t2 = this, n2 = "".concat(this._n, ".").concat("setGroupAttributes"), o2 = e3.groupID, s2 = e3.groupAttributes, a2 = this._getLocalGroupAttributes(o2), r2 = a2.remoteMainSequence, i2 = a2.avChatRoomKey, u2 = a2.attributes, c2 = this._transformGroupAttributes(s2);
          c2.forEach(function(e4) {
            var t3 = e4.key;
            e4.sequence = 0, u2.has(t3) && (e4.sequence = u2.get(t3).sequence);
          });
          var l2 = new ka("setGroupAttributes");
          return l2.setMessage("groupID:".concat(o2, " groupAttributes:").concat(JSON.stringify(s2))), xe.l("".concat(n2, ". groupID:").concat(o2, " mainSequence:").concat(r2)), this._groupModule.request({ protocolName: ys, requestData: { groupID: o2, avChatRoomKey: i2, mainSequence: r2, groupAttributeList: c2 } }).then(function(e4) {
            xe.l("".concat(n2, " ok."));
            var a3 = e4.data, r3 = a3.mainSequence, i3 = m(a3.groupAttributeList);
            return i3.forEach(function(e5) {
              e5.value = s2[e5.key];
            }), t2._groupAttributesCopy = t2._getCachedAttributes({ groupID: o2 }), t2._refreshCachedGroupAttributes({ groupID: o2, remoteMainSequence: r3, groupAttributeList: i3, operationType: Ir }), t2._emitGroupAttributesUpdated(o2), l2.setNetworkType(t2._groupModule.getNetworkType()).end(), Ka({ groupAttributes: s2 });
          }).catch(function(e4) {
            return t2._groupModule.probeNetwork().then(function(t3) {
              var n3 = v(t3, 2), o3 = n3[0], s3 = n3[1];
              l2.setError(e4, o3, s3).end();
            }), Ja(e4);
          });
        } }, { key: "deleteGroupAttributes", value: function(e3) {
          var t2 = this, n2 = e3.groupID, o2 = e3.keyList, s2 = void 0 === o2 ? [] : o2, a2 = this._getLocalGroupAttributes(n2), r2 = a2.remoteMainSequence, i2 = a2.avChatRoomKey, u2 = a2.attributes, c2 = m(u2.keys()), l2 = Cs, p2 = Cr, d2 = { groupID: n2, avChatRoomKey: i2, mainSequence: r2 }, g2 = [];
          s2.length > 0 && (c2 = [], l2 = Is, p2 = Tr, s2.forEach(function(e4) {
            var t3 = 0;
            u2.has(e4) && (t3 = u2.get(e4).sequence, c2.push(e4)), g2.push({ key: e4, sequence: t3 });
          }), d2.groupAttributeList = g2);
          var _2 = new ka("deleteGroupAttributes");
          return _2.setMessage("groupID:".concat(n2, " mainSequence:").concat(r2, " keyList:").concat(s2, " protocolName:").concat(l2)), this._groupModule.request({ protocolName: l2, requestData: d2 }).then(function(e4) {
            xe.l("".concat(t2._n, ".").concat("deleteGroupAttributes", " ok. groupID:").concat(n2));
            var o3 = e4.data.mainSequence;
            return t2._groupAttributesCopy = t2._getCachedAttributes({ groupID: n2 }), t2._refreshCachedGroupAttributes({ groupID: n2, remoteMainSequence: o3, groupAttributeList: g2, operationType: p2 }), t2._emitGroupAttributesUpdated(n2), _2.setNetworkType(t2._groupModule.getNetworkType()).end(), Ka({ keyList: c2 });
          }).catch(function(e4) {
            return t2._groupModule.probeNetwork().then(function(t3) {
              var n3 = v(t3, 2), o3 = n3[0], s3 = n3[1];
              _2.setError(e4, o3, s3).end();
            }), Ja(e4);
          });
        } }, { key: "getGroupAttributes", value: function(e3) {
          var t2 = this, n2 = "".concat(this._n, ".").concat("getGroupAttributes"), o2 = e3.groupID, s2 = this._getLocalGroupAttributes(o2), a2 = s2.avChatRoomKey, r2 = s2.lastUpdateTime, i2 = s2.localMainSequence, u2 = s2.remoteMainSequence, c2 = new ka("getGroupAttributes");
          if (c2.setMessage("groupID:".concat(o2, " localMainSequence:").concat(i2, " remoteMainSequence:").concat(u2, " keyList:").concat(e3.keyList)), Date.now() - r2 >= this.CACHE_EXPIRE_TIME || i2 < u2)
            return this._getGroupAttributes({ groupID: o2, avChatRoomKey: a2 }).then(function(s3) {
              c2.setMoreMessage("get attributes from remote. count:".concat(s3.length)).setNetworkType(t2._groupModule.getNetworkType()).end(), xe.l("".concat(n2, " from remote. groupID:").concat(o2));
              var a3 = t2._getCachedAttributes(e3);
              return Ka({ groupAttributes: a3 });
            }).catch(function(e4) {
              return t2._groupModule.probeNetwork().then(function(t3) {
                var n3 = v(t3, 2), o3 = n3[0], s3 = n3[1];
                c2.setError(e4, o3, s3).end();
              }), Ja(e4);
            });
          c2.setMoreMessage("get attributes from cache").setNetworkType(this._groupModule.getNetworkType()).end(), xe.l("".concat(n2, " from cache. groupID:").concat(o2));
          var l2 = this._getCachedAttributes(e3);
          return za({ groupAttributes: l2 });
        } }, { key: "_getGroupAttributes", value: function(e3) {
          var n2 = this, o2 = 0;
          return at(e3.avChatRoomKey) || (o2 = 1), this._groupModule.request({ protocolName: Ts, requestData: t(t({}, e3), {}, { groupType: o2 }) }).then(function(t2) {
            xe.l("".concat(n2._n, "._getGroupAttributes ok. groupID:").concat(e3.groupID));
            var o3 = t2.data, s2 = o3.mainSequence, a2 = o3.groupAttributeList, r2 = m(a2);
            return at(s2) || n2._refreshCachedGroupAttributes({ groupID: e3.groupID, remoteMainSequence: s2, groupAttributeList: r2, operationType: Dr }), a2;
          }).catch(function(e4) {
            return Ja(e4);
          });
        } }, { key: "_refreshCachedGroupAttributes", value: function(e3) {
          var t2 = e3.groupID, n2 = e3.remoteMainSequence, o2 = e3.groupAttributeList, s2 = e3.operationType;
          if (this._hasLocalGroupAttributes(t2)) {
            var a2 = this._getLocalGroupAttributes(t2), r2 = a2.localMainSequence;
            if (s2 === Dr || n2 - r2 == 1)
              a2.remoteMainSequence = n2, a2.localMainSequence = n2, a2.lastUpdateTime = Date.now(), this._updateCachedAttributes({ groupAttributes: a2, groupAttributeList: o2, operationType: s2 });
            else {
              if (r2 === n2)
                return;
              a2.remoteMainSequence = n2;
            }
            this._groupAttributesMap.set(t2, a2);
            var i2 = "operationType:".concat(s2, " localMainSequence:").concat(r2, " remoteMainSequence:").concat(n2);
            xe.l("".concat(this._n, "._refreshCachedGroupAttributes. ").concat(i2));
          }
        } }, { key: "_getCachedAttributes", value: function(e3) {
          var t2 = e3.groupID, n2 = e3.keyList, o2 = void 0 === n2 ? [] : n2, s2 = {};
          if (this._hasLocalGroupAttributes(t2)) {
            var a2 = this._getLocalGroupAttributes(t2).attributes;
            if (o2.length > 0)
              o2.forEach(function(e4) {
                a2.has(e4) && (s2[e4] = a2.get(e4).value);
              });
            else {
              var r2, i2 = D(a2.keys());
              try {
                for (i2.s(); !(r2 = i2.n()).done; ) {
                  var u2 = r2.value;
                  s2[u2] = a2.get(u2).value;
                }
              } catch (c2) {
                i2.e(c2);
              } finally {
                i2.f();
              }
            }
          }
          return s2;
        } }, { key: "_updateCachedAttributes", value: function(e3) {
          var t2 = e3.groupAttributes, n2 = e3.groupAttributeList, o2 = e3.operationType;
          o2 !== Cr ? o2 !== Tr ? (o2 === yr && t2.attributes.clear(), n2.forEach(function(e4) {
            var n3 = e4.key, o3 = e4.value, s2 = e4.sequence;
            t2.attributes.set(n3, { value: o3, sequence: s2 });
          })) : n2.forEach(function(e4) {
            t2.attributes.delete(e4.key);
          }) : t2.attributes.clear();
        } }, { key: "_hasLocalGroupAttributes", value: function(e3) {
          return this._groupAttributesMap.has(e3);
        } }, { key: "_getLocalGroupAttributes", value: function(e3) {
          return this._hasLocalGroupAttributes(e3) || this.initGroupAttributesCache({ groupID: e3 }), this._groupAttributesMap.get(e3);
        } }, { key: "_transformGroupAttributes", value: function(e3) {
          var t2 = [];
          return Object.keys(e3).forEach(function(n2) {
            t2.push({ key: n2, value: e3[n2] });
          }), t2;
        } }, { key: "_emitGroupAttributesUpdated", value: function(e3) {
          var t2 = this._getCachedAttributes({ groupID: e3 }), n2 = this._computeAttrChangedInfo(t2), o2 = n2.updatedKeyList, s2 = n2.deletedKeyList;
          xe.l("".concat(this._n, "._emitGroupAttributesUpdated update:").concat(o2.length, ", delete:").concat(s2.length)), 0 === o2.length && 0 === s2.length || this._groupModule.emitOuterEvent(E.GROUP_ATTRIBUTES_UPDATED, { groupID: e3, groupAttributes: t2, updatedKeyList: o2, deletedKeyList: s2 });
        } }, { key: "_computeAttrChangedInfo", value: function(e3) {
          var t2 = this, n2 = [], o2 = [];
          return Object.keys(e3).forEach(function(o3) {
            e3[o3] !== t2._groupAttributesCopy[o3] && n2.push(o3);
          }), Object.keys(this._groupAttributesCopy).forEach(function(t3) {
            at(e3[t3]) && o2.push(t3);
          }), this._groupAttributesCopy = {}, { updatedKeyList: n2, deletedKeyList: o2 };
        } }, { key: "deleteLocalGroupAttributes", value: function(e3) {
          this._hasLocalGroupAttributes(e3) && this._groupAttributesMap.delete(e3);
        } }, { key: "reset", value: function() {
          this._groupAttributesMap.clear(), this._groupAttributesCopy = {}, this.CACHE_EXPIRE_TIME = 3e4;
        } }]), e2;
      }(), Sr = "Set", kr = "Increase", Lr = "Decrease", Ar = function() {
        function e2(t2) {
          o(this, e2), this._groupModule = t2, this._n = "GroupCountersHandler", this._groupCountersMap = /* @__PURE__ */ new Map(), this.EXPIRE_TIME = 3e4, this._groupModule.getInnerEmitterInstance().on($a, this._onCloudConfigUpdated, this);
        }
        return a(e2, [{ key: "_onCloudConfigUpdated", value: function() {
          var e3 = this._groupModule.getCloudConfig("grp_counter_expire_time");
          at(e3) || (this.EXPIRE_TIME = Number(e3));
        } }, { key: "isGroupCountersNotice", value: function(e3) {
          var t2 = e3.to, n2 = e3.elements.groupCounterInfo, o2 = false;
          return jt(n2) || (this._onGroupCountersUpdated({ groupID: t2, groupCounterInfo: n2 }), o2 = true), o2;
        } }, { key: "_onGroupCountersUpdated", value: function(e3) {
          var t2 = this, n2 = e3.groupID;
          e3.groupCounterInfo.forEach(function(e4) {
            var o2 = e4.type, s2 = e4.groupCounterSeq, a2 = e4.counterList, r2 = void 0 === a2 ? [] : a2;
            0 !== o2 && 2 !== o2 || (t2._updateLocalGroupCounters({ groupID: n2, groupCounterSeq: s2, counterList: r2 }), r2.forEach(function(e5) {
              t2._groupModule.emitOuterEvent(E.GROUP_COUNTER_UPDATED, { groupID: n2, key: e5.key, value: e5.value });
            })), 1 === o2 && t2._deleteLocalGroupCounters({ groupID: n2, groupCounterSeq: s2, counterList: r2 });
          }), xe.l("".concat(this._n, "._onGroupCountersUpdated groupID:").concat(n2));
        } }, { key: "initGroupCountersCache", value: function(e3) {
          var t2 = e3.groupID, n2 = e3.avChatRoomKey;
          this._groupCountersMap.set(t2, { lastUpdateTime: 0, groupCounterSeq: 0, counters: /* @__PURE__ */ new Map(), avChatRoomKey: n2 }), xe.l("".concat(this._n, ".initGroupCountersCache groupID:").concat(t2, " avChatRoomKey:").concat(n2));
        } }, { key: "setGroupCounters", value: function(e3) {
          var t2 = this;
          if (!this._groupModule.canIUse(B.GRP_COUNTER))
            return Ja({ code: da.CANNOT_USE_COMMERCIAL_ABILITY });
          var n2 = "".concat(this._n, ".setGroupCounters"), o2 = e3.groupID, s2 = e3.counters, a2 = this._convertObjectToList(s2), r2 = this._getLocalGroupCounters(o2).avChatRoomKey, i2 = "groupID:".concat(o2, " count:").concat(a2.length), u2 = new ka("setGroupCounters");
          return u2.setMessage("".concat(i2)), xe.l("".concat(n2, ". ").concat(i2)), this._updateGroupCounters({ groupID: o2, counterList: a2, avChatRoomKey: r2, mode: Sr }).then(function(e4) {
            return u2.end(), xe.l("".concat(n2, " ok.")), Ka({ counters: e4 });
          }).catch(function(e4) {
            return t2._groupModule.probeNetwork().then(function(t3) {
              var n3 = v(t3, 2), o3 = n3[0], s3 = n3[1];
              u2.setError(e4, o3, s3).end();
            }), xe.e("".concat(n2, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "increaseGroupCounter", value: function(e3) {
          var t2 = this;
          if (!this._groupModule.canIUse(B.GRP_COUNTER))
            return Ja({ code: da.CANNOT_USE_COMMERCIAL_ABILITY });
          var n2 = "".concat(this._n, ".increaseGroupCounters"), o2 = e3.groupID, s2 = e3.key, a2 = e3.value, r2 = this._getLocalGroupCounters(o2).avChatRoomKey, i2 = "groupID:".concat(o2, " key:").concat(s2, " value:").concat(a2), u2 = new ka("increaseGroupCounter");
          u2.setMessage("".concat(i2)), xe.l("".concat(n2, ". ").concat(i2));
          var c2 = [{ key: s2, value: a2 }];
          return this._updateGroupCounters({ groupID: o2, counterList: c2, avChatRoomKey: r2, mode: kr }).then(function(e4) {
            return u2.end(), xe.l("".concat(n2, " ok.")), Ka({ counters: e4 });
          }).catch(function(e4) {
            return t2._groupModule.probeNetwork().then(function(t3) {
              var n3 = v(t3, 2), o3 = n3[0], s3 = n3[1];
              u2.setError(e4, o3, s3).end();
            }), xe.e("".concat(n2, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "decreaseGroupCounter", value: function(e3) {
          var t2 = this;
          if (!this._groupModule.canIUse(B.GRP_COUNTER))
            return Ja({ code: da.CANNOT_USE_COMMERCIAL_ABILITY });
          var n2 = "".concat(this._n, ".decreaseGroupCounter"), o2 = e3.groupID, s2 = e3.key, a2 = e3.value, r2 = this._getLocalGroupCounters(o2).avChatRoomKey, i2 = "groupID:".concat(o2, " key:").concat(s2, " value:").concat(a2), u2 = new ka("decreaseGroupCounter");
          u2.setMessage("".concat(i2)), xe.l("".concat(n2, ". ").concat(i2));
          var c2 = [{ key: s2, value: a2 }];
          return this._updateGroupCounters({ groupID: o2, counterList: c2, avChatRoomKey: r2, mode: Lr }).then(function(e4) {
            return u2.end(), xe.l("".concat(n2, " ok.")), Ka({ counters: e4 });
          }).catch(function(e4) {
            return t2._groupModule.probeNetwork().then(function(t3) {
              var n3 = v(t3, 2), o3 = n3[0], s3 = n3[1];
              u2.setError(e4, o3, s3).end();
            }), xe.e("".concat(n2, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "getGroupCounters", value: function(e3) {
          var t2 = this;
          if (!this._groupModule.canIUse(B.GRP_COUNTER))
            return Ja({ code: da.CANNOT_USE_COMMERCIAL_ABILITY });
          var n2 = "".concat(this._n, ".getGroupCounters"), o2 = e3.groupID, s2 = e3.keyList, a2 = void 0 === s2 ? [] : s2, r2 = this._getLocalGroupCounters(o2), i2 = r2.avChatRoomKey, u2 = r2.lastUpdateTime, c2 = new ka("getGroupCounters");
          if (c2.setMessage("groupID:".concat(o2)), Date.now() - u2 >= this.EXPIRE_TIME)
            return this._getRemoteGroupCounters({ groupID: o2, avChatRoomKey: i2 }).then(function(e4) {
              c2.setMoreMessage("from remote. count:".concat(e4.length)).end(), xe.l("".concat(n2, " from remote. groupID:").concat(o2));
              var s3 = t2._getLocalCounters(o2, a2);
              return Ka({ counters: s3 });
            }).catch(function(e4) {
              return t2._groupModule.probeNetwork().then(function(t3) {
                var n3 = v(t3, 2), o3 = n3[0], s3 = n3[1];
                c2.setError(e4, o3, s3).end();
              }), Ja(e4);
            });
          c2.setMoreMessage("from cache").end(), xe.l("".concat(n2, " from cache. groupID:").concat(o2));
          var l2 = this._getLocalCounters(o2, a2);
          return za({ counters: l2 });
        } }, { key: "_getRemoteGroupCounters", value: function(e3) {
          var n2 = this;
          return this._groupModule.request({ protocolName: Ls, requestData: t({}, e3) }).then(function(t2) {
            var o2 = t2.data, s2 = o2.counterList, a2 = void 0 === s2 ? [] : s2, r2 = o2.groupCounterSeq;
            return n2._updateLocalGroupCounters({ groupID: e3.groupID, counterList: a2, groupCounterSeq: r2 }), xe.l("".concat(n2._n, "._getRemoteGroupCounters ok. groupID:").concat(e3.groupID)), a2;
          }).catch(function(e4) {
            return Ja(e4);
          });
        } }, { key: "_convertObjectToList", value: function(e3) {
          var t2 = [];
          return Object.keys(e3).forEach(function(n2) {
            t2.push({ key: n2, value: e3[n2] });
          }), t2;
        } }, { key: "_updateGroupCounters", value: function(e3) {
          var n2 = "".concat(this._n, "._updateGroupCounters"), o2 = e3.groupID, s2 = e3.avChatRoomKey, a2 = e3.mode;
          return xe.l("".concat(n2, ". groupID:").concat(o2, " avChatRoomKey:").concat(s2, " mode:").concat(a2)), this._groupModule.request({ protocolName: ks, requestData: t({}, e3) }).then(function(e4) {
            xe.l("".concat(n2, " ok."));
            var t2 = e4.data.counterList, o3 = {};
            return (void 0 === t2 ? [] : t2).forEach(function(e5) {
              var t3 = e5.key, n3 = e5.value;
              o3[t3] = n3;
            }), o3;
          }).catch(function(e4) {
            return Ja(e4);
          });
        } }, { key: "_hasLocalGroupCounters", value: function(e3) {
          return this._groupCountersMap.has(e3);
        } }, { key: "_getLocalGroupCounters", value: function(e3) {
          return this._hasLocalGroupCounters(e3) || this.initGroupCountersCache({ groupID: e3 }), this._groupCountersMap.get(e3);
        } }, { key: "_updateLocalGroupCounters", value: function(e3) {
          var t2 = e3.groupID, n2 = e3.counterList, o2 = void 0 === n2 ? [] : n2, s2 = e3.groupCounterSeq;
          if (this._hasLocalGroupCounters(t2)) {
            var a2 = this._getLocalGroupCounters(t2), r2 = a2.counters, i2 = a2.avChatRoomKey, u2 = a2.groupCounterSeq;
            if (s2 > 0 && s2 < u2)
              return;
            o2.forEach(function(e4) {
              var t3 = e4.key, n3 = e4.value;
              r2.set(t3, n3);
            }), this._groupCountersMap.set(t2, { lastUpdateTime: Date.now(), groupCounterSeq: s2, counters: r2, avChatRoomKey: i2 });
          }
        } }, { key: "_deleteLocalGroupCounters", value: function(e3) {
          var t2 = e3.groupID, n2 = e3.counterList, o2 = void 0 === n2 ? [] : n2, s2 = e3.groupCounterSeq;
          if (this._hasLocalGroupCounters(t2)) {
            var a2 = this._getLocalGroupCounters(t2), r2 = a2.counters, i2 = a2.avChatRoomKey;
            o2.forEach(function(e4) {
              r2.delete(e4.key);
            }), this._groupCountersMap.set(t2, { lastUpdateTime: Date.now(), groupCounterSeq: s2, counters: r2, avChatRoomKey: i2 });
          }
        } }, { key: "_getLocalCounters", value: function(e3, t2) {
          var n2 = {};
          if (!this._hasLocalGroupCounters(e3))
            return n2;
          var o2 = this._getLocalGroupCounters(e3).counters;
          if (t2.length > 0)
            t2.forEach(function(e4) {
              o2.has(e4) && (n2[e4] = o2.get(e4));
            });
          else {
            var s2, a2 = D(o2.keys());
            try {
              for (a2.s(); !(s2 = a2.n()).done; ) {
                var r2 = s2.value;
                n2[r2] = o2.get(r2);
              }
            } catch (i2) {
              a2.e(i2);
            } finally {
              a2.f();
            }
          }
          return n2;
        } }, { key: "reset", value: function() {
          this._groupCountersMap.clear(), this.EXPIRE_TIME = 3e4;
        } }]), e2;
      }(), Rr = function() {
        function e2(t2) {
          o(this, e2);
          var n2 = t2.manager, s2 = t2.groupID, a2 = t2.onInit, r2 = t2.onSuccess, i2 = t2.onFail;
          this._n = "Polling", this._manager = n2, this._groupModule = n2._groupModule, this._onInit = a2, this._onSuccess = r2, this._onFail = i2, this._groupID = s2, this._timeoutID = -1, this._isRunning = false, this._protocolName = _s;
        }
        return a(e2, [{ key: "start", value: function() {
          var e3 = this._groupModule.isLoggedIn();
          e3 || (this._protocolName = hs), xe.l("".concat(this._n, ".start pollingInterval:").concat(this._manager.getPollingInterval(), " isLoggedIn:").concat(e3)), this._isRunning = true, this._request();
        } }, { key: "isRunning", value: function() {
          return this._isRunning;
        } }, { key: "_request", value: function() {
          var e3 = this, t2 = this._onInit(this._groupID);
          this._groupModule.request({ protocolName: this._protocolName, requestData: t2 }).then(function(t3) {
            e3._onSuccess(e3._groupID, t3), e3.isRunning() && (clearTimeout(e3._timeoutID), e3._timeoutID = setTimeout(e3._request.bind(e3), e3._manager.getPollingInterval()));
          }).catch(function(t3) {
            e3._onFail(e3._groupID, t3), e3.isRunning() && (clearTimeout(e3._timeoutID), e3._timeoutID = setTimeout(e3._request.bind(e3), e3._manager.MAX_POLLING_INTERVAL));
          });
        } }, { key: "stop", value: function() {
          xe.l("".concat(this._n, ".stop")), this._timeoutID > 0 && (clearTimeout(this._timeoutID), this._timeoutID = -1), this._isRunning = false;
        } }, { key: "getPollingTimerID", value: function() {
          return this._timeoutID;
        } }]), e2;
      }(), Nr = { 3: true, 4: true, 5: true, 6: true, 17: true }, Or = function() {
        function e2(t2) {
          o(this, e2), this._groupModule = t2, this._n = "AVChatRoomHandler", this._joinedGroupMap = /* @__PURE__ */ new Map(), this._pollingRequestInfoMap = /* @__PURE__ */ new Map(), this._pollingInstanceMap = /* @__PURE__ */ new Map(), this.sequencesLinkedList = new lr(200), this.messageIDLinkedList = new lr(100), this.receivedMessageCount = 0, this._reportMessageStackedCount = 0, this._onlineMemberCountMap = /* @__PURE__ */ new Map(), this.DEFAULT_EXPIRE_TIME = 60, this.DEFAULT_POLLING_INTERVAL = 300, this.MAX_POLLING_INTERVAL = 2e3, this._pollingInterval = this.DEFAULT_POLLING_INTERVAL, this.DEFAULT_POLLING_NO_MESSAGE_COUNT = 20, this.DEFAULT_POLLING_INTERVAL_PLUS = 2e3, this._pollingNoMessageCount = 0, this._startBroadcastSeq = 1, this._broadcastMessageIDMap = /* @__PURE__ */ new Map(), this.DEFAULT_POLLING_SIMPLIFIED_MSG = 0;
        }
        return a(e2, [{ key: "hasJoinedAVChatRoom", value: function() {
          return this._joinedGroupMap.size > 0;
        } }, { key: "checkJoinedAVChatRoomByID", value: function(e3) {
          return this._joinedGroupMap.has(e3);
        } }, { key: "getJoinedAVChatRoom", value: function() {
          return this._joinedGroupMap.size > 0 ? m(this._joinedGroupMap.keys()) : null;
        } }, { key: "_updateRequestData", value: function(e3) {
          var n2 = this._pollingRequestInfoMap.get(e3);
          return e3 === m(this._pollingInstanceMap.keys())[0] ? t(t({}, n2), {}, { startBroadcastSeq: this._startBroadcastSeq, simplifiedMessage: this.DEFAULT_POLLING_SIMPLIFIED_MSG }) : t(t({}, n2), {}, { simplifiedMessage: this.DEFAULT_POLLING_SIMPLIFIED_MSG });
        } }, { key: "_handleSuccess", value: function(e3, t2) {
          var n2 = t2.data, o2 = n2.key, s2 = n2.nextSeq, a2 = n2.rspMsgList, r2 = n2.errorCode, i2 = n2.nextBroadcastSeq, u2 = n2.broadcastMessageList;
          if (0 !== r2) {
            var c2 = this._pollingRequestInfoMap.get(e3), l2 = new ka("longPollingAVError"), p2 = c2 ? "".concat(c2.key, "-").concat(c2.startSeq) : "requestInfo is undefined";
            l2.setMessage("".concat(e3, "-").concat(p2, "-").concat(t2.errorInfo)).setCode(t2.errorCode).setNetworkType(this._groupModule.getNetworkType()).end(true);
          } else {
            if (!this.checkJoinedAVChatRoomByID(e3))
              return;
            et(o2) && $e(s2) && this._pollingRequestInfoMap.set(e3, { key: o2, startSeq: s2 }), $e(i2) && i2 > this._startBroadcastSeq && (this._startBroadcastSeq = i2), st(a2) && a2.length > 0 ? (a2.forEach(function(e4) {
              e4.to = e4.groupID;
            }), this.onMessage(a2)) : (this._pollingNoMessageCount += 1, this._pollingNoMessageCount === this.DEFAULT_POLLING_NO_MESSAGE_COUNT && (this._pollingInterval = this.DEFAULT_POLLING_INTERVAL + this.DEFAULT_POLLING_INTERVAL_PLUS)), this._onBroadcastMessage(u2);
          }
        } }, { key: "_handleFailure", value: function(e3, t2) {
        } }, { key: "onMessage", value: function(e3) {
          if (st(e3) && 0 !== e3.length) {
            0 !== this._pollingNoMessageCount && (this._pollingNoMessageCount = 0, this._pollingInterval = this.DEFAULT_POLLING_INTERVAL);
            var t2 = null, n2 = [], o2 = this._getModule(Fn), s2 = this._getModule($n), a2 = e3.length;
            a2 > 1 && e3.sort(function(e4, t3) {
              return e4.sequence - t3.sequence;
            });
            for (var r2 = this._getModule(qn), i2 = 0; i2 < a2; i2++) {
              var u2 = this.restoreMessageFromSimplified(e3[i2]);
              if (Nr[u2.event]) {
                if (6 === u2.event) {
                  if (this._groupModule.isGroupAttributesUpdatedNotice(u2))
                    continue;
                  if (this._groupModule.isGroupCountersNotice(u2))
                    continue;
                }
                this.receivedMessageCount += 1, t2 = this.packMessage(u2, u2.event);
                var c2 = 1 === u2.isModified, l2 = 1 === u2.isHistoryMessage;
                if ((r2.isUnlimitedAVChatRoom() || !this.sequencesLinkedList.has(t2.sequence)) && !this.messageIDLinkedList.has(t2.ID)) {
                  var p2 = t2.conversationID;
                  if (this.receivedMessageCount % 50 == 0 ? this._getModule(Jn).detectFirstRound(p2, this.sequencesLinkedList.data()) : this.receivedMessageCount % 80 == 0 && this._getModule(Jn).detectSecondRound(p2, this.sequencesLinkedList.data()), null !== this.sequencesLinkedList.tail()) {
                    var d2 = this.sequencesLinkedList.tail().value, g2 = t2.sequence - d2;
                    g2 > 1 && g2 <= 20 ? this._getModule(Jn).onMessageMaybeLost(p2, d2 + 1, g2 - 1) : g2 < -1 && g2 >= -20 && this._getModule(Jn).onMessageMaybeLost(p2, t2.sequence + 1, Math.abs(g2) - 1);
                  }
                  this.sequencesLinkedList.set(t2.sequence), this.messageIDLinkedList.set(t2.ID);
                  var _2 = false;
                  if (this._isMessageSentByCurrentInstance(t2) ? c2 && (_2 = true, t2.isModified = c2, o2.updateMessageIsModifiedProperty(t2)) : _2 = true, _2) {
                    if (t2.conversationType === S.CONV_SYSTEM && 5 === t2.payload.operationType && this._onGroupDismissed(t2.payload.groupProfile.groupID), !l2 && t2.conversationType !== S.CONV_SYSTEM) {
                      var h2 = t2.conversationID.replace(S.CONV_GROUP, "");
                      this._pollingInstanceMap.has(h2) ? this._groupModule.isLoggedIn() && s2.addMessageSequence({ key: Ca, message: t2 }) : (t2.type !== S.MSG_GRP_TIP && t2.clientTime > 0 && s2.addMessageDelay(t2.clientTime), s2.addMessageSequence({ key: Ia, message: t2 }));
                    }
                    n2.push(t2);
                  }
                }
              } else
                xe.w("".concat(this._n, ".onMessage unknown event:").concat(u2.event));
            }
            if (0 !== n2.length) {
              this._groupModule.filterModifiedMessage(n2);
              var f2 = this.packConversationOption(n2);
              if (f2.length > 0)
                this._getModule(Fn).onNewMessage({ conversationOptionsList: f2, isInstantMessage: true });
              xe.d("".concat(this._n, ".onMessage count:").concat(n2.length)), this._checkMessageStacked(n2);
              var v2 = this._groupModule.filterUnmodifiedMessage(n2);
              v2.length > 0 && this._groupModule.emitOuterEvent(E.MESSAGE_RECEIVED, v2), n2.length = 0;
            }
          }
        } }, { key: "isBroadcastOrNormal", value: function(e3) {
          return 3 === e3 || 17 === e3;
        } }, { key: "isGroupTip", value: function(e3) {
          return 4 === e3 || 6 === e3;
        } }, { key: "isGroupSystemNotice", value: function(e3) {
          return 5 === e3;
        } }, { key: "restoreGroupTipElements", value: function() {
          var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          e3.groupJoinType || (e3.groupJoinType = 1);
          var t2 = e3.operatorInfo, n2 = void 0 === t2 ? {} : t2, o2 = e3.operatorID, s2 = e3.userIDList, a2 = void 0 === s2 ? [] : s2, r2 = n2.userID, i2 = void 0 === r2 ? o2 : r2, u2 = n2.avatar, c2 = void 0 === u2 ? "" : u2, l2 = n2.nick, p2 = void 0 === l2 ? "" : l2;
          e3.operatorInfo = { userID: i2, avatar: c2, nick: p2 };
          var d2 = a2.map(function(e4) {
            return { userID: e4 };
          });
          return e3.memberInfoList = e3.memberInfoList || d2, e3;
        } }, { key: "restoreMessageFromSimplified", value: function(e3) {
          var n2 = e3.event;
          if (this.isBroadcastOrNormal(n2) && (e3.cloudCustomData = e3.cloudCustomData || "", e3.elements = e3.elements.map(function(e4) {
            if (e4.type === S.MSG_CUSTOM) {
              var n3 = e4.content, o3 = void 0 === n3 ? {} : n3;
              e4.content = t({ data: "", description: "", extension: "" }, o3);
            }
            return e4;
          })), (this.isGroupTip(n2) || this.isGroupSystemNotice(n2)) && (e3.from = e3.from || "@TIM#SYSTEM"), this.isGroupTip(n2)) {
            e3.elements = this.restoreGroupTipElements(e3.elements);
            var o2 = e3.elements, s2 = void 0 === o2 ? {} : o2, a2 = s2.operationType, i2 = s2.operatorInfo;
            if (1 === a2) {
              var u2 = [{ userID: (void 0 === i2 ? {} : i2).userID }];
              s2.memberInfoList = s2.memberInfoList || u2;
            }
          }
          if (this.isGroupSystemNotice(n2)) {
            var c2 = e3.elements, l2 = c2.memberInfoList, p2 = c2.operatorInfo;
            l2 || (l2 = void 0 === p2 ? {} : p2), e3.elements.memberInfoList = t({ userID: e3.elements.operatorID, avatar: "", nick: "" }, l2), e3.elements = t({ authentication: "", remarkInfo: "", messageKey: 1e3 * e3.time }, e3.elements);
            var d2 = Object.keys(e3.elements).filter(function(e4) {
              return "operatorInfo" !== e4;
            }).reduce(function(n3, o3) {
              return t(t({}, n3), {}, r({}, o3, e3.elements[o3]));
            }, {});
            e3.elements = d2;
          }
          return e3;
        } }, { key: "_onGroupDismissed", value: function(e3) {
          xe.l("".concat(this._n, "._onGroupDismissed groupID:").concat(e3)), this._groupModule.deleteLocalGroupAndConversation(e3), this.reset(e3);
        } }, { key: "_checkMessageStacked", value: function(e3) {
          var t2 = "MessageStacked", n2 = e3.length;
          n2 >= 100 && (this._groupModule.outputWarning(t2, n2), this._reportMessageStackedCount < 5 && (new ka(t2).setNetworkType(this._groupModule.getNetworkType()).setMessage("count:".concat(n2, " groupID:").concat(m(this._joinedGroupMap.keys()))).setLevel("warning").end(), this._reportMessageStackedCount += 1));
        } }, { key: "_isMessageSentByCurrentInstance", value: function(e3) {
          return !!this._getModule(Fn).isMessageSentByCurrentInstance(e3);
        } }, { key: "packMessage", value: function(e3, t2) {
          e3.currentUser = this._groupModule.getMyUserID(), e3.conversationType = 5 === t2 ? S.CONV_SYSTEM : S.CONV_GROUP, e3.isSystemMessage = !!e3.isSystemMessage;
          var n2 = new Ha(e3), o2 = this.packElements(e3, t2);
          return n2.setElement(o2, this._groupModule.getFileDownloadProxy()), n2;
        } }, { key: "packElements", value: function(e3, n2) {
          return 4 === n2 || 6 === n2 ? (this._updateMemberCountByGroupTips(e3), { type: S.MSG_GRP_TIP, content: t(t({}, e3.elements), {}, { groupProfile: e3.groupProfile }) }) : 5 === n2 ? { type: S.MSG_GRP_SYS_NOTICE, content: t(t({}, e3.elements), {}, { groupProfile: t(t({}, e3.groupProfile), {}, { groupID: e3.groupID }) }) } : this._getModule(Hn).parseElements(e3.elements, e3.from);
        } }, { key: "packConversationOption", value: function(e3) {
          for (var t2 = /* @__PURE__ */ new Map(), n2 = 0; n2 < e3.length; n2++) {
            var o2 = e3[n2], s2 = o2.conversationID;
            if (t2.has(s2)) {
              var a2 = t2.get(s2);
              a2.lastMessage = o2, "in" === o2.flow && a2.unreadCount++;
            } else
              t2.set(s2, { conversationID: o2.conversationID, unreadCount: "out" === o2.flow ? 0 : 1, type: o2.conversationType, subType: o2.conversationSubType, lastMessage: o2 });
          }
          return m(t2.values());
        } }, { key: "_updateMemberCountByGroupTips", value: function(e3) {
          var t2 = e3.groupProfile.groupID, n2 = e3.elements.onlineMemberInfo, o2 = void 0 === n2 ? void 0 : n2;
          if (!jt(o2)) {
            var s2 = o2.onlineMemberNum, a2 = void 0 === s2 ? 0 : s2, r2 = o2.expireTime, i2 = void 0 === r2 ? this.DEFAULT_EXPIRE_TIME : r2, u2 = this._onlineMemberCountMap.get(t2) || {}, c2 = Date.now();
            jt(u2) ? Object.assign(u2, { lastReqTime: 0, lastSyncTime: 0, latestUpdateTime: c2, memberCount: a2, expireTime: i2 }) : (u2.latestUpdateTime = c2, u2.memberCount = a2), xe.d("".concat(this._n, "._updateMemberCountByGroupTips info:"), u2), this._onlineMemberCountMap.set(t2, u2);
          }
        } }, { key: "_onBroadcastMessage", value: function(e3) {
          if (!jt(e3)) {
            for (var t2 = [], n2 = e3.length, o2 = null, s2 = 0; s2 < n2; s2++) {
              var a2 = this.restoreMessageFromSimplified(e3[s2]);
              Nr[a2.event] ? ((o2 = this.packMessage(a2, a2.event)).isBroadcastMessage = true, this._broadcastMessageIDMap.has(o2.ID) || (t2.push(o2), this._broadcastMessageIDMap.set(o2.ID, 1))) : xe.w("".concat(this._n, "._onBroadcastMessage unknown event:").concat(a2.event));
            }
            t2.length > 0 && this._groupModule.emitOuterEvent(E.MESSAGE_RECEIVED, t2);
          }
        } }, { key: "start", value: function(e3) {
          if (this._pollingInstanceMap.has(e3)) {
            var t2 = this._pollingInstanceMap.get(e3);
            t2.isRunning() || t2.start();
          } else {
            var n2 = new Rr({ manager: this, groupID: e3, onInit: this._updateRequestData.bind(this), onSuccess: this._handleSuccess.bind(this), onFail: this._handleFailure.bind(this) });
            n2.start(), this._pollingInstanceMap.set(e3, n2), xe.l("".concat(this._n, ".start groupID:").concat(e3));
          }
        } }, { key: "handleJoinResult", value: function(e3) {
          var t2 = this;
          return this._preCheck().then(function() {
            var n2 = e3.longPollingKey, o2 = e3.group, s2 = o2.groupID;
            return t2._joinedGroupMap.set(s2, o2), t2._groupModule.updateGroupMap([o2]), t2._groupModule.deleteUnjoinedAVChatRoom(s2), t2._groupModule.emitGroupListUpdate(true, false), at(n2) ? za({ status: Ye, group: o2 }) : Promise.resolve();
          });
        } }, { key: "startRunLoop", value: function(e3) {
          var t2 = this;
          return this.handleJoinResult(e3).then(function() {
            var n2 = e3.longPollingKey, o2 = e3.group, s2 = e3.startSeq, a2 = void 0 === s2 ? 0 : s2, r2 = o2.groupID;
            return t2._pollingRequestInfoMap.set(r2, { key: n2, startSeq: a2 }), t2.start(r2), t2._groupModule.isLoggedIn() ? za({ status: Ye, group: o2 }) : za({ status: Ye });
          });
        } }, { key: "_preCheck", value: function() {
          if (this._getModule(qn).isUnlimitedAVChatRoom())
            return Promise.resolve();
          if (!this.hasJoinedAVChatRoom())
            return Promise.resolve();
          var e3 = v(this._joinedGroupMap.entries().next().value, 2), t2 = e3[0], n2 = e3[1];
          if (this._groupModule.isLoggedIn()) {
            if (!(n2.selfInfo.role === S.GRP_MBR_ROLE_OWNER || n2.ownerID === this._groupModule.getMyUserID()))
              return this._groupModule.quitGroup(t2);
            this._groupModule.deleteLocalGroupAndConversation(t2);
          } else
            this._groupModule.deleteLocalGroupAndConversation(t2);
          return this.reset(t2), Promise.resolve();
        } }, { key: "joinWithoutAuth", value: function(e3) {
          var t2 = this, n2 = e3.groupID, o2 = "".concat(this._n, ".").concat("joinWithoutAuth"), s2 = new ka("joinWithoutAuth");
          return this._groupModule.request({ protocolName: Qo, requestData: e3 }).then(function(e4) {
            var a2 = e4.data.longPollingKey;
            if (t2._groupModule.probeNetwork().then(function(e5) {
              var t3 = v(e5, 2);
              t3[0];
              var o3 = t3[1];
              s2.setNetworkType(o3).setMessage("groupID:".concat(n2, " longPollingKey:").concat(a2)).end(true);
            }), at(a2))
              return Ja({ code: da.CANNOT_JOIN_NON_AVCHATROOM_WITHOUT_LOGIN });
            xe.l("".concat(o2, " ok. groupID:").concat(n2)), t2._getModule(Fn).setCompleted("".concat(S.CONV_GROUP).concat(n2));
            var r2 = new dr({ groupID: n2 });
            return t2.startRunLoop({ group: r2, longPollingKey: a2 }), Ka({ status: Ye });
          }).catch(function(e4) {
            return xe.e("".concat(o2, " failed. groupID:").concat(n2, " error:"), e4), t2._groupModule.probeNetwork().then(function(t3) {
              var o3 = v(t3, 2), a2 = o3[0], r2 = o3[1];
              s2.setError(e4, a2, r2).setMessage("groupID:".concat(n2)).end(true);
            }), Ja(e4);
          }).finally(function() {
            t2._groupModule.getModule(Vn).reportAtOnce();
          });
        } }, { key: "getGroupOnlineMemberCount", value: function(e3) {
          var t2 = this._onlineMemberCountMap.get(e3) || {}, n2 = Date.now();
          return jt(t2) || n2 - t2.lastSyncTime > 1e3 * t2.expireTime && n2 - t2.latestUpdateTime > 1e4 && n2 - t2.lastReqTime > 3e3 ? (t2.lastReqTime = n2, this._onlineMemberCountMap.set(e3, t2), this._getGroupOnlineMemberCount(e3).then(function(e4) {
            return Ka({ memberCount: e4.memberCount });
          }).catch(function(e4) {
            return Ja(e4);
          })) : za({ memberCount: t2.memberCount });
        } }, { key: "_getGroupOnlineMemberCount", value: function(e3) {
          var t2 = this, n2 = "".concat(this._n, ".").concat("_getGroupOnlineMemberCount");
          return this._groupModule.request({ protocolName: fs, requestData: { groupID: e3 } }).then(function(o2) {
            var s2 = t2._onlineMemberCountMap.get(e3) || {}, a2 = o2.data, r2 = a2.onlineMemberNum, i2 = void 0 === r2 ? 0 : r2, u2 = a2.expireTime, c2 = void 0 === u2 ? t2.DEFAULT_EXPIRE_TIME : u2;
            xe.l("".concat(n2, " ok. groupID:").concat(e3, " memberCount:").concat(i2, " expireTime:").concat(c2));
            var l2 = Date.now();
            return jt(s2) && (s2.lastReqTime = l2), t2._onlineMemberCountMap.set(e3, Object.assign(s2, { lastSyncTime: l2, latestUpdateTime: l2, memberCount: i2, expireTime: c2 })), { memberCount: i2 };
          }).catch(function(o2) {
            return xe.w("".concat(n2, " failed. error:"), o2), new ka("_getGroupOnlineMemberCount").setCode(o2.code).setMessage("groupID:".concat(e3, " error:").concat(JSON.stringify(o2))).setNetworkType(t2._groupModule.getNetworkType()).end(), Promise.reject(o2);
          });
        } }, { key: "_getModule", value: function(e3) {
          return this._groupModule.getModule(e3);
        } }, { key: "setPollingInterval", value: function(e3) {
          at(e3) || ($e(e3) ? this._pollingInterval = this.DEFAULT_POLLING_INTERVAL = e3 : this._pollingInterval = this.DEFAULT_POLLING_INTERVAL = parseInt(e3, 10));
        } }, { key: "setPollingIntervalPlus", value: function(e3) {
          at(e3) || ($e(e3) ? this.DEFAULT_POLLING_INTERVAL_PLUS = e3 : this.DEFAULT_POLLING_INTERVAL_PLUS = parseInt(e3, 10));
        } }, { key: "setPollingNoMessageCount", value: function(e3) {
          at(e3) || ($e(e3) ? this.DEFAULT_POLLING_NO_MESSAGE_COUNT = e3 : this.DEFAULT_POLLING_NO_MESSAGE_COUNT = parseInt(e3, 10));
        } }, { key: "setPollingSimplifiedMessage", value: function(e3) {
          at(e3) || "0" !== e3 && "1" !== e3 || (this.DEFAULT_POLLING_SIMPLIFIED_MSG = parseInt(e3, 10));
        } }, { key: "getPollingInterval", value: function() {
          return this._pollingInterval;
        } }, { key: "onAVChatRoomMemberBanned", value: function(e3) {
          var t2 = e3.payload.groupProfile.groupID;
          xe.l("".concat(this._n, ".onAVChatRoomMemberBanned groupID:").concat(t2)), this._groupModule.deleteLocalGroupAndConversation(t2), this.reset(t2);
        } }, { key: "restartPolling", value: function() {
          xe.l("".concat(this._n, ".restartPolling count:").concat(this._pollingInstanceMap.size));
          var e3, t2 = D(this._pollingInstanceMap.values());
          try {
            for (t2.s(); !(e3 = t2.n()).done; ) {
              var n2 = e3.value;
              n2.stop(), n2.start();
            }
          } catch (o2) {
            t2.e(o2);
          } finally {
            t2.f();
          }
        } }, { key: "getPollingTimerID", value: function(e3) {
          if (!this._pollingInstanceMap.has(e3))
            return -1;
          var t2 = this._pollingInstanceMap.get(e3).getPollingTimerID();
          return xe.l("".concat(this._n, ".getPollingTimerID groupID:").concat(e3, " timerID:").concat(t2)), t2;
        } }, { key: "reset", value: function(e3) {
          if (e3) {
            xe.l("".concat(this._n, ".reset groupID:").concat(e3));
            var t2 = this._pollingInstanceMap.get(e3);
            t2 && t2.stop(), this._pollingInstanceMap.delete(e3), this._joinedGroupMap.delete(e3), this._pollingRequestInfoMap.delete(e3), this._onlineMemberCountMap.delete(e3);
          } else {
            xe.l("".concat(this._n, ".reset all"));
            var n2, o2 = D(this._pollingInstanceMap.values());
            try {
              for (o2.s(); !(n2 = o2.n()).done; ) {
                n2.value.stop();
              }
            } catch (s2) {
              o2.e(s2);
            } finally {
              o2.f();
            }
            this._pollingInstanceMap.clear(), this._joinedGroupMap.clear(), this._pollingRequestInfoMap.clear(), this._onlineMemberCountMap.clear(), this._broadcastMessageIDMap.clear();
          }
          this.sequencesLinkedList.reset(), this.messageIDLinkedList.reset(), this.receivedMessageCount = 0, this._reportMessageStackedCount = 0, this._pollingInterval = this.DEFAULT_POLLING_INTERVAL = 300, this.DEFAULT_POLLING_NO_MESSAGE_COUNT = 20, this.DEFAULT_POLLING_INTERVAL_PLUS = 2e3, this._pollingNoMessageCount = 0;
        } }]), e2;
      }(), Gr = 1, Ur = 15, Pr = function() {
        function e2(t2) {
          o(this, e2), this._groupModule = t2, this._n = "GroupSystemNoticeHandler", this.pendencyMap = /* @__PURE__ */ new Map();
        }
        return a(e2, [{ key: "onNewGroupSystemNotice", value: function(e3) {
          var t2 = e3.dataList, n2 = e3.isSyncingEnded, o2 = e3.isInstantMessage;
          xe.d("".concat(this._n, ".onReceiveSystemNotice count:").concat(t2.length));
          var s2 = this.newSystemNoticeStoredAndSummary({ notifiesList: t2, isInstantMessage: o2 }), a2 = s2.eventDataList, r2 = s2.result;
          a2.length > 0 && (this._groupModule.getModule(Fn).onNewMessage({ conversationOptionsList: a2, isInstantMessage: o2 }), this._onReceivedGroupSystemNotice({ result: r2, isInstantMessage: o2 }));
          o2 ? r2.length > 0 && this._groupModule.emitOuterEvent(E.MESSAGE_RECEIVED, r2) : true === n2 && this._clearGroupSystemNotice();
        } }, { key: "newSystemNoticeStoredAndSummary", value: function(e3) {
          var n2 = e3.notifiesList, o2 = e3.isInstantMessage, s2 = null, a2 = n2.length, r2 = 0, i2 = [], u2 = { conversationID: S.CONV_SYSTEM, unreadCount: 0, type: S.CONV_SYSTEM, subType: null, lastMessage: null };
          for (r2 = 0; r2 < a2; r2++) {
            var c2 = n2[r2], l2 = c2.groupProfile, p2 = l2.communityType, d2 = void 0 === p2 ? 0 : p2, g2 = l2.topicID, _2 = void 0 === g2 ? void 0 : g2, h2 = c2.elements, f2 = h2.topicIDList, v2 = void 0 === f2 ? void 0 : f2, m2 = h2.operationType;
            if (!(2 !== d2 || jt(_2) && jt(v2))) {
              if ([17, 18, 20].includes(m2)) {
                this._handleTopicSystemNotice(c2);
                continue;
              }
              jt(_2) || (c2.to = _2);
            }
            if (c2.elements.operationType !== Ur)
              c2.currentUser = this._groupModule.getMyUserID(), c2.conversationType = S.CONV_SYSTEM, c2.conversationID = S.CONV_SYSTEM, (s2 = new Ha(c2)).setElement({ type: S.MSG_GRP_SYS_NOTICE, content: t(t({}, c2.elements), {}, { groupProfile: t({}, c2.groupProfile) }) }), s2.isSystemMessage = true, (1 === s2.sequence && 1 === s2.random || 2 === s2.sequence && 2 === s2.random) && (s2.sequence = _t(), s2.random = _t(), s2.generateMessageID(), xe.l("".concat(this._n, ".newSystemNoticeStoredAndSummary sequence and random maybe duplicated, regenerate. ID:").concat(s2.ID))), this._groupModule.getModule(Fn).pushIntoNoticeResult(i2, s2) && (o2 ? u2.unreadCount++ : s2.setIsRead(true), u2.subType = s2.conversationSubType);
          }
          return u2.lastMessage = i2[i2.length - 1], { eventDataList: i2.length > 0 ? [u2] : [], result: i2 };
        } }, { key: "_clearGroupSystemNotice", value: function() {
          var e3 = this;
          this._getPendencyList().then(function(t2) {
            t2.forEach(function(t3) {
              e3.pendencyMap.set("".concat(t3.from, "_").concat(t3.groupID, "_").concat(t3.to), t3);
            });
            var n2 = e3._groupModule.getModule(Fn).getLocalMessageList(S.CONV_SYSTEM), o2 = [];
            n2.forEach(function(t3) {
              var n3 = t3.payload, s2 = n3.operatorID, a2 = n3.operationType, r2 = n3.groupProfile;
              if (a2 === Gr) {
                var i2 = "".concat(s2, "_").concat(r2.groupID, "_").concat(r2.to), u2 = e3.pendencyMap.get(i2);
                u2 && $e(u2.handled) && 0 !== u2.handled && o2.push(t3);
              }
            }), e3.deleteGroupSystemNotice({ messageList: o2 });
          });
        } }, { key: "deleteGroupSystemNotice", value: function(e3) {
          var t2 = this, n2 = "".concat(this._n, ".deleteGroupSystemNotice");
          return st(e3.messageList) && 0 !== e3.messageList.length ? (xe.l("".concat(n2, " ") + e3.messageList.map(function(e4) {
            return e4.ID;
          })), this._groupModule.request({ protocolName: gs, requestData: { messageListToDelete: e3.messageList.map(function(e4) {
            return { from: S.CONV_SYSTEM, messageSeq: e4.clientSequence, messageRandom: e4.random };
          }) } }).then(function() {
            xe.l("".concat(n2, " ok"));
            var o2 = t2._groupModule.getModule(Fn);
            return e3.messageList.forEach(function(e4) {
              o2.deleteLocalMessage(e4);
            }), Ka();
          }).catch(function(e4) {
            return xe.e("".concat(n2, " error:"), e4), Ja(e4);
          })) : za();
        } }, { key: "_getPendencyList", value: function() {
          var e3 = this, t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n2 = t2.type, o2 = void 0 === n2 ? void 0 : n2, s2 = t2.startTime, a2 = void 0 === s2 ? 0 : s2, r2 = t2.limit, i2 = void 0 === r2 ? 20 : r2;
          return this._groupModule.request({ protocolName: ds, requestData: { type: o2, startTime: a2, limit: i2, handleAccount: this._groupModule.getMyUserID() } }).then(function(t3) {
            var n3 = t3.data.pendencyList;
            return 0 !== t3.data.nextStartTime ? e3._getPendencyList({ startTime: t3.data.nextStartTime }).then(function(e4) {
              return [].concat(m(n3), m(e4));
            }) : n3;
          });
        } }, { key: "getGroupApplicationList", value: function() {
          var e3 = this;
          return this._getPendencyList().then(function(t2) {
            return e3._getPendencyList({ type: S.GRP_COMMUNITY }).then(function(n2) {
              return t2.push.apply(t2, m(n2)), e3._handlePendencyResult(t2);
            }).catch(function(n2) {
              return e3._handlePendencyResult(t2);
            });
          });
        } }, { key: "_handlePendencyResult", value: function(e3) {
          var t2 = this, n2 = [];
          return e3.forEach(function(e4) {
            t2.pendencyMap.set("".concat(e4.from, "_").concat(e4.groupID, "_").concat(e4.to), e4), 0 === e4.handled && n2.push({ applicant: e4.from, applicantNick: e4.fromUserNickName, groupName: e4.groupName, groupID: e4.groupID, authentication: e4.authentication, messageKey: e4.time, applicationType: e4.applicationType, userID: e4.userID });
          }), za({ applicationList: n2 });
        } }, { key: "_onReceivedGroupSystemNotice", value: function(e3) {
          var t2 = this, n2 = e3.result;
          e3.isInstantMessage && n2.forEach(function(e4) {
            switch (e4.payload.operationType) {
              case 1:
                break;
              case 2:
                t2._onApplyGroupRequestAgreed(e4);
                break;
              case 3:
                break;
              case 4:
                t2._onMemberKicked(e4);
                break;
              case 5:
                t2._onGroupDismissed(e4);
                break;
              case 6:
                break;
              case 7:
                t2._onInviteGroup(e4);
                break;
              case 8:
                t2._onQuitGroup(e4);
                break;
              case 9:
                t2._onSetManager(e4);
                break;
              case 10:
                t2._onDeleteManager(e4);
                break;
              case 11:
              case 12:
              case 15:
                break;
              case 20:
                t2._onMessageRemindTypeSynced(e4);
                break;
              case 21:
                t2._groupModule.onAVChatRoomMemberBanned(e4);
            }
          });
        } }, { key: "_onApplyGroupRequestAgreed", value: function(e3) {
          var t2 = this, n2 = e3.payload.groupProfile.groupID;
          this._groupModule.hasLocalGroup(n2) || this._groupModule.getGroupProfile({ groupID: n2 }).then(function(e4) {
            var n3 = e4.data.group;
            if (n3) {
              t2._groupModule.updateGroupMap([n3]);
              var o2 = !n3.isSupportTopic;
              t2._groupModule.emitGroupListUpdate(true, o2);
            }
          });
        } }, { key: "_onMemberKicked", value: function(e3) {
          var t2 = e3.payload.groupProfile.groupID;
          this._groupModule.hasLocalGroup(t2) && this._groupModule.deleteLocalGroupAndConversation(t2);
        } }, { key: "_onGroupDismissed", value: function(e3) {
          var t2 = e3.payload.groupProfile.groupID;
          this._groupModule.hasLocalGroup(t2) && this._groupModule.deleteLocalGroupAndConversation(t2);
          var n2 = this._groupModule._AVChatRoomHandler;
          n2 && n2.checkJoinedAVChatRoomByID(t2) && n2.reset(t2);
        } }, { key: "_onInviteGroup", value: function(e3) {
          var t2 = this, n2 = e3.payload.groupProfile.groupID;
          this._groupModule.hasLocalGroup(n2) || this._groupModule.getGroupProfile({ groupID: n2 }).then(function(e4) {
            var n3 = e4.data.group;
            n3 && (t2._groupModule.updateGroupMap([n3]), t2._groupModule.emitGroupListUpdate());
          });
        } }, { key: "_onQuitGroup", value: function(e3) {
          var t2 = e3.payload.groupProfile.groupID;
          this._groupModule.hasLocalGroup(t2) && this._groupModule.deleteLocalGroupAndConversation(t2);
        } }, { key: "_onSetManager", value: function(e3) {
          var t2 = e3.payload.groupProfile, n2 = t2.to, o2 = t2.groupID, s2 = this._groupModule.getModule(bn).getLocalGroupMemberInfo(o2, n2);
          s2 && s2.updateRole(S.GRP_MBR_ROLE_ADMIN);
        } }, { key: "_onDeleteManager", value: function(e3) {
          var t2 = e3.payload.groupProfile, n2 = t2.to, o2 = t2.groupID, s2 = this._groupModule.getModule(bn).getLocalGroupMemberInfo(o2, n2);
          s2 && s2.updateRole(S.GRP_MBR_ROLE_MEMBER);
        } }, { key: "_onMessageRemindTypeSynced", value: function(e3) {
          var t2 = e3.payload.groupProfile.groupID, n2 = e3.payload.messageRemindType;
          this._groupModule.getModule(Fn).onGroupMessageRemindTypeSynced({ groupID: t2, messageRemindType: n2 });
        } }, { key: "_handleTopicSystemNotice", value: function(e3) {
          var t2 = e3.groupProfile, n2 = t2.groupID, o2 = t2.topicID, s2 = e3.elements, a2 = s2.operationType, r2 = s2.topicIDList, i2 = s2.messageRemindType, u2 = this._groupModule.getModule(wn);
          17 === a2 ? u2.onTopicCreated({ groupID: n2, topicID: o2 }) : 18 === a2 ? u2.onTopicDeleted({ groupID: n2, topicIDList: r2 }) : 20 === a2 && u2.onTopicMessageRemindTypeUpdated({ groupID: n2, topicID: o2, messageRemindType: i2 });
        } }, { key: "reset", value: function() {
          this.pendencyMap.clear();
        } }]), e2;
      }(), br = ["relayFlag"], wr = function(e2) {
        i(s2, e2);
        var n2 = f(s2);
        function s2(e3) {
          var t2;
          return o(this, s2), (t2 = n2.call(this, e3))._n = "GroupModule", t2._commonGroupHandler = null, t2._AVChatRoomHandler = null, t2._groupSystemNoticeHandler = null, t2._commonGroupHandler = new Mr(_(t2)), t2._groupAttributesHandler = new Er(_(t2)), t2._groupCountersHandler = new Ar(_(t2)), t2._AVChatRoomHandler = new Or(_(t2)), t2._groupTipsHandler = new mr(_(t2)), t2._groupSystemNoticeHandler = new Pr(_(t2)), t2.groupMap = /* @__PURE__ */ new Map(), t2._unjoinedAVChatRoomList = /* @__PURE__ */ new Map(), t2._receiptDetailCompleteMap = /* @__PURE__ */ new Map(), t2.getInnerEmitterInstance().on($a, t2._onCloudConfigUpdated, _(t2)), t2;
        }
        return a(s2, [{ key: "_onCloudConfigUpdated", value: function() {
          var e3 = this.getCloudConfig("polling_interval"), t2 = this.getCloudConfig("polling_interval_plus"), n3 = this.getCloudConfig("polling_no_msg_count"), o2 = this.getCloudConfig("polling_simplified_msg");
          this._AVChatRoomHandler && (xe.l("".concat(this._n, "._onCloudConfigUpdated pollingInterval:").concat(e3) + " pollingIntervalPlus:".concat(t2, " pollingNoMessageCount:").concat(n3) + " pollingSimplifiedMessage:".concat(o2)), this._AVChatRoomHandler.setPollingInterval(e3), this._AVChatRoomHandler.setPollingIntervalPlus(t2), this._AVChatRoomHandler.setPollingNoMessageCount(n3), this._AVChatRoomHandler.setPollingSimplifiedMessage(o2));
        } }, { key: "onCheckTimer", value: function(e3) {
          this.isLoggedIn() && (this._commonGroupHandler.onCheckTimer(e3), this._groupTipsHandler.onCheckTimer(e3));
        } }, { key: "guardForAVChatRoom", value: function(e3) {
          var t2 = this;
          if (e3.conversationType === S.CONV_GROUP) {
            var n3 = Dt(e3.to) ? qt(e3.to) : e3.to;
            return this.hasLocalGroup(n3) ? za() : this.getGroupProfile({ groupID: n3 }).then(function(o2) {
              var s3 = o2.data.group.type;
              if (xe.l("".concat(t2._n, ".guardForAVChatRoom. groupID:").concat(n3, " type:").concat(s3)), s3 === S.GRP_AVCHATROOM) {
                var a2 = da.MESSAGE_SEND_FAIL_NOT_IN_AVCHATROOM;
                return Ja(new Wa({ code: a2, message: t2.getErrorMessage(a2, e3.from, n3), data: { message: e3 } }));
              }
              return za();
            });
          }
          return za();
        } }, { key: "checkJoinedAVChatRoomByID", value: function(e3) {
          return !!this._AVChatRoomHandler && this._AVChatRoomHandler.checkJoinedAVChatRoomByID(e3);
        } }, { key: "onNewGroupMessage", value: function(e3) {
          this._commonGroupHandler && this._commonGroupHandler.onNewGroupMessage(e3);
        } }, { key: "updateNextMessageSeq", value: function(e3) {
          var t2 = this;
          if (st(e3)) {
            var n3 = this.getModule(wn);
            e3.forEach(function(e4) {
              var o2 = e4.conversationID.replace(S.CONV_GROUP, "");
              Dt(o2) && n3.updateLastMessage(o2, e4.lastMessage), t2.groupMap.has(o2) && (t2.groupMap.get(o2).nextMessageSeq = e4.lastMessage.sequence + 1);
            });
          }
        } }, { key: "onNewGroupTips", value: function(e3) {
          this._groupTipsHandler && this._groupTipsHandler.onNewGroupTips(e3);
        } }, { key: "onGroupMessageRevoked", value: function(e3) {
          this._commonGroupHandler && this._commonGroupHandler.onGroupMessageRevoked(e3);
        } }, { key: "onNewGroupSystemNotice", value: function(e3) {
          this._groupSystemNoticeHandler && this._groupSystemNoticeHandler.onNewGroupSystemNotice(e3);
        } }, { key: "onGroupMessageReadNotice", value: function(e3) {
          var t2 = this;
          e3.dataList.forEach(function(e4) {
            var n3 = e4.elements.groupMessageReadNotice;
            if (!at(n3)) {
              var o2 = t2.getModule(Fn);
              n3.forEach(function(e5) {
                var n4 = e5.groupID, s3 = e5.topicID, a2 = void 0 === s3 ? void 0 : s3, r2 = e5.lastMessageSeq;
                xe.d("".concat(t2._n, ".onGroupMessageReadNotice groupID:").concat(n4, " lastMessageSeq:").concat(r2));
                var i2 = "".concat(S.CONV_GROUP).concat(n4), u2 = true;
                jt(a2) || (i2 = "".concat(S.CONV_GROUP).concat(a2), u2 = false), o2.updateIsReadAfterReadReport({ conversationID: i2, lastMessageSeq: r2 }), o2.updateUnreadCount(i2, u2), o2.clearGroupAtInfoList(i2, u2);
              });
            }
          });
        } }, { key: "onReadReceiptList", value: function(e3) {
          var t2 = this;
          xe.d("".concat(this._n, ".onReadReceiptList options:"), JSON.stringify(e3)), e3.dataList.forEach(function(e4) {
            var n3 = e4.groupProfile, o2 = e4.elements, s3 = n3.groupID, a2 = t2.getModule(Fn), r2 = o2.readReceiptList;
            a2.updateReadReceiptInfo({ groupID: s3, readReceiptList: r2 });
          });
        } }, { key: "onGroupMessageModified", value: function(e3) {
          xe.d("".concat(this._n, ".onGroupMessageModified options:"), JSON.stringify(e3));
          var n3 = this.getModule(Fn);
          e3.dataList.forEach(function(e4) {
            n3.onMessageModified(t(t({}, e4), {}, { conversationType: S.CONV_GROUP, to: e4.topicID ? e4.topicID : e4.groupID }));
          });
        } }, { key: "deleteGroupSystemNotice", value: function(e3) {
          this._groupSystemNoticeHandler && this._groupSystemNoticeHandler.deleteGroupSystemNotice(e3);
        } }, { key: "initGroupMap", value: function(e3) {
          this.groupMap.set(e3.groupID, new dr(e3));
        } }, { key: "deleteGroup", value: function(e3) {
          this.groupMap.delete(e3);
        } }, { key: "updateGroupMap", value: function(e3) {
          var t2, n3 = this, o2 = this.getModule(Fn);
          e3.forEach(function(e4) {
            t2 = e4.groupID, n3.groupMap.has(t2) ? n3.groupMap.get(t2).updateGroup(e4) : (n3.groupMap.set(t2, new dr(e4)), o2.deleteGroupRomaingMessageInfo(t2));
          });
          var s3, a2 = this.getMyUserID(), r2 = D(this.groupMap);
          try {
            for (r2.s(); !(s3 = r2.n()).done; ) {
              var i2 = v(s3.value, 2)[1];
              i2.selfInfo.userID = a2, "Owner" === i2.selfInfo.role && (i2.ownerID = a2);
            }
          } catch (u2) {
            r2.e(u2);
          } finally {
            r2.f();
          }
          this._setStorageGroupList();
        } }, { key: "getStorageGroupList", value: function() {
          return this.getModule(xn).getItem("groupMap");
        } }, { key: "_setStorageGroupList", value: function() {
          var e3 = this.getLocalGroupList().filter(function(e4) {
            var t2 = e4.type;
            return !Ct(t2);
          }).filter(function(e4) {
            return !e4.isSupportTopic;
          }).slice(0, 20).map(function(e4) {
            return { groupID: e4.groupID, name: e4.name, avatar: e4.avatar, type: e4.type };
          });
          this.getModule(xn).setItem("groupMap", e3);
        } }, { key: "getGroupMap", value: function() {
          return this.groupMap;
        } }, { key: "getLocalGroupList", value: function() {
          return m(this.groupMap.values());
        } }, { key: "getLocalGroupProfile", value: function(e3) {
          return this.groupMap.get(e3);
        } }, { key: "sortLocalGroupList", value: function() {
          var e3 = m(this.groupMap).filter(function(e4) {
            var t2 = v(e4, 2);
            return t2[0], !jt(t2[1].lastMessage);
          });
          e3.sort(function(e4, t2) {
            return t2[1].lastMessage.lastTime - e4[1].lastMessage.lastTime;
          }), this.groupMap = new Map(m(e3));
        } }, { key: "updateGroupLastMessage", value: function(e3) {
          this._commonGroupHandler && this._commonGroupHandler.handleUpdateGroupLastMessage(e3);
        } }, { key: "emitGroupListUpdate", value: function() {
          var e3 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n3 = this.getLocalGroupList();
          if (e3 && this.emitOuterEvent(E.GROUP_LIST_UPDATED), t2) {
            var o2 = JSON.parse(JSON.stringify(n3)), s3 = this.getModule(Fn);
            s3.updateConversationGroupProfile(o2);
          }
        } }, { key: "patchGroupMessageRemindType", value: function() {
          var e3 = this.getLocalGroupList(), t2 = this.getModule(Fn), n3 = 0;
          e3.forEach(function(e4) {
            true === t2.patchMessageRemindType({ ID: e4.groupID, isC2CConversation: false, messageRemindType: e4.selfInfo.messageRemindType }) && (n3 += 1);
          }), xe.l("".concat(this._n, ".patchGroupMessageRemindType count:").concat(n3));
        } }, { key: "recomputeUnreadCount", value: function() {
          var e3 = this.getLocalGroupList(), t2 = this.getModule(Fn);
          e3.forEach(function(e4) {
            var n3 = e4.groupID, o2 = e4.selfInfo, s3 = o2.excludedUnreadSequenceList, a2 = o2.readedSequence;
            if (st(s3)) {
              var r2 = 0;
              s3.forEach(function(t3) {
                t3 >= a2 && t3 <= e4.nextMessageSeq - 1 && (r2 += 1);
              }), r2 >= 1 && t2.recomputeGroupUnreadCount({ conversationID: "".concat(S.CONV_GROUP).concat(n3), count: r2 });
            }
          });
        } }, { key: "getMyNameCardByGroupID", value: function(e3) {
          var t2 = this.getLocalGroupProfile(e3);
          return t2 ? t2.selfInfo.nameCard : "";
        } }, { key: "isPagingGetCompleted", value: function() {
          return !!this._commonGroupHandler && this._commonGroupHandler.isPagingGetCompleted();
        } }, { key: "getGroupList", value: function(e3) {
          return this._commonGroupHandler ? this._commonGroupHandler.getGroupList(e3) : za();
        } }, { key: "getGroupProfile", value: function(e3) {
          var t2 = this, n3 = "".concat(this._n, ".").concat("getGroupProfile"), o2 = new ka("getGroupProfile"), s3 = e3.groupID, a2 = e3.groupCustomFieldFilter;
          xe.l("".concat(n3, " groupID:").concat(s3));
          var r2 = { groupIDList: [s3], responseFilter: { groupBaseInfoFilter: ["Type", "Name", "Introduction", "Notification", "FaceUrl", "Owner_Account", "CreateTime", "InfoSeq", "LastInfoTime", "LastMsgTime", "MemberNum", "MaxMemberNum", "ApplyJoinOption", "NextMsgSeq", "ShutUpAllMember", "InviteJoinOption"], groupCustomFieldFilter: a2, memberInfoFilter: ["Role", "JoinTime", "MsgSeq", "MsgFlag", "NameCard"] } };
          return this.getGroupProfileAdvance(r2).then(function(e4) {
            var a3, r3 = e4.data, i2 = r3.successGroupList, u2 = r3.failureGroupList;
            if (xe.l("".concat(n3, " ok")), u2.length > 0)
              return Ja(u2[0]);
            (Ct(i2[0].type) && !t2.hasLocalGroup(s3) ? a3 = new dr(i2[0]) : (t2.updateGroupMap(i2), a3 = t2.getLocalGroupProfile(s3)), a3.isSupportTopic) || t2.getModule(Fn).updateConversationGroupProfile([a3]);
            return o2.setNetworkType(t2.getNetworkType()).setMessage("groupID:".concat(s3, " type:").concat(a3.type, " muteAllMembers:").concat(a3.muteAllMembers, " ownerID:").concat(a3.ownerID)).end(), Ka({ group: a3 });
          }).catch(function(s4) {
            return t2.probeNetwork().then(function(t3) {
              var n4 = v(t3, 2), a3 = n4[0], r3 = n4[1];
              o2.setError(s4, a3, r3).setMessage("groupID:".concat(e3.groupID)).end();
            }), xe.e("".concat(n3, " failed. error:"), s4), Ja(s4);
          });
        } }, { key: "getGroupProfileAdvance", value: function(e3) {
          var n3 = "".concat(this._n, ".getGroupProfileAdvance"), o2 = e3.groupIDList;
          st(o2) && o2.length > 50 && (this.outputWarning("GetGroupProfileLimit"), o2.length = 50);
          var s3 = [], a2 = [];
          o2.forEach(function(e4) {
            Tt({ groupID: e4 }) ? a2.push(e4) : s3.push(e4);
          });
          var r2 = [];
          if (s3.length > 0) {
            var i2 = this._getGroupProfileAdvance(t(t({}, e3), {}, { groupIDList: s3 }));
            r2.push(i2);
          }
          if (a2.length > 0) {
            var u2 = this._getGroupProfileAdvance(t(t({}, e3), {}, { groupIDList: a2, relayFlag: s3.length > 0 }));
            r2.push(u2);
          }
          return Promise.all(r2).then(function(e4) {
            var t2 = [], n4 = [];
            return e4.forEach(function(e5) {
              t2.push.apply(t2, m(e5.successGroupList)), n4.push.apply(n4, m(e5.failureGroupList));
            }), Ka({ successGroupList: t2, failureGroupList: n4 });
          }).catch(function(e4) {
            return xe.e("".concat(n3, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "_getGroupProfileAdvance", value: function(e3) {
          var t2 = this, n3 = e3.relayFlag, o2 = void 0 !== n3 && n3, s3 = g(e3, br);
          return this.request({ protocolName: Yo, requestData: s3 }).then(function(e4) {
            xe.l("".concat(t2._n, "._getGroupProfileAdvance ok."));
            var n4 = e4.data.groups;
            return { successGroupList: n4.filter(function(e5) {
              return at(e5.errorCode) || 0 === e5.errorCode;
            }), failureGroupList: n4.filter(function(e5) {
              return e5.errorCode && 0 !== e5.errorCode;
            }).map(function(e5) {
              return new Wa({ code: e5.errorCode, message: e5.errorInfo, data: { groupID: e5.groupID } });
            }) };
          }).catch(function(t3) {
            return o2 && Tt({ groupID: e3.groupIDList[0] }) ? { successGroupList: [], failureGroupList: [] } : Ja(t3);
          });
        } }, { key: "createGroup", value: function(e3) {
          var n3 = this, o2 = "".concat(this._n, ".").concat("createGroup"), s3 = e3.type, a2 = e3.groupID;
          if (e3.name && false === this._filterProfanity("name", e3))
            return Ja({ code: da.PROFANITY_FOUND });
          if (e3.introduction && false === this._filterProfanity("introduction", e3))
            return Ja({ code: da.PROFANITY_FOUND });
          if (e3.notification && false === this._filterProfanity("notification", e3))
            return Ja({ code: da.PROFANITY_FOUND });
          if (!["Public", "Private", "ChatRoom", "AVChatRoom", "Community"].includes(s3))
            return Ja({ code: da.ILLEGAL_GROUP_TYPE });
          if (!Tt({ type: s3 })) {
            if (!jt(a2) && Tt({ groupID: a2 }))
              return Ja({ code: da.ILLEGAL_GROUP_ID });
            e3.isSupportTopic = void 0;
          }
          if (Ct(s3) && !at(e3.memberList) && e3.memberList.length > 0 && (e3.memberList = void 0), this._canIUseJoinOption(s3) || at(e3.joinOption) || (e3.joinOption = void 0), Tt({ type: s3 })) {
            if (!jt(a2) && !Tt({ groupID: a2 }))
              return Ja({ code: da.ILLEGAL_GROUP_ID });
            e3.isSupportTopic = true === e3.isSupportTopic ? 1 : 0;
          }
          var r2 = new ka("createGroup");
          xe.l("".concat(o2, " options:"), e3);
          var i2 = null, u2 = [];
          return this.request({ protocolName: jo, requestData: t(t({}, e3), {}, { ownerID: this.getMyUserID(), webPushFlag: 1 }) }).then(function(s4) {
            var a3 = s4.data, c2 = a3.groupID, l2 = a3.overLimitUserIDList, p2 = void 0 === l2 ? [] : l2;
            if (i2 = c2, u2 = p2, r2.setNetworkType(n3.getNetworkType()).setMessage("groupType:".concat(e3.type, " groupID:").concat(c2, " overLimitUserIDList=").concat(p2)).end(), xe.l("".concat(o2, " ok groupID:").concat(c2, " overLimitUserIDList:"), p2), e3.type === S.GRP_AVCHATROOM)
              return n3.getGroupProfile({ groupID: c2 });
            if (e3.type === S.GRP_COMMUNITY && 1 === e3.isSupportTopic)
              return n3.getGroupProfile({ groupID: c2 });
            jt(e3.memberList) || jt(p2) || (e3.memberList = e3.memberList.filter(function(e4) {
              return -1 === p2.indexOf(e4.userID);
            })), n3.updateGroupMap([t(t({}, e3), {}, { groupID: c2 })]);
            var d2 = n3.getModule(Rn), g2 = d2.createCustomMessage({ to: c2, conversationType: S.CONV_GROUP, payload: { data: "group_create", extension: n3.isIntl() ? "".concat(n3.getMyUserID(), " created a group") : "".concat(n3.getMyUserID(), "创建群组") } });
            return d2.sendMessageInstance(g2), n3.emitGroupListUpdate(), n3.getGroupProfile({ groupID: c2 });
          }).then(function(e4) {
            var t2 = e4.data.group, n4 = t2.selfInfo, o3 = n4.nameCard, s4 = n4.joinTime;
            return t2.updateSelfInfo({ nameCard: o3, joinTime: s4, messageRemindType: S.MSG_REMIND_ACPT_AND_NOTE, role: S.GRP_MBR_ROLE_OWNER }), Ka({ group: t2, overLimitUserIDList: u2 });
          }).catch(function(s4) {
            if (r2.setMessage("groupType:".concat(e3.type)), n3.probeNetwork().then(function(e4) {
              var t2 = v(e4, 2), n4 = t2[0], o3 = t2[1];
              r2.setError(s4, n4, o3).end();
            }), 10010 === s4.code || 10007 === s4.code) {
              n3.updateGroupMap([t(t({}, e3), {}, { groupID: i2 })]);
              var a3 = n3.getLocalGroupProfile(i2);
              return xe.l("".concat(o2, " success, but failed to get group profile.")), Ka({ group: a3, overLimitUserIDList: u2 });
            }
            return xe.e("".concat(o2, " failed. error:"), s4), Ja(s4);
          });
        } }, { key: "dismissGroup", value: function(e3) {
          var t2 = this, n3 = "".concat(this._n, ".").concat("dismissGroup");
          if (this.hasLocalGroup(e3) && this.getLocalGroupProfile(e3).type === S.GRP_WORK)
            return Ja(new Wa({ code: da.CANNOT_DISMISS_WORK }));
          var o2 = new ka("dismissGroup");
          return o2.setMessage("groupID:".concat(e3)), xe.l("".concat(n3, " groupID:").concat(e3)), this.request({ protocolName: zo, requestData: { groupID: e3 } }).then(function() {
            return o2.setNetworkType(t2.getNetworkType()).end(), xe.l("".concat(n3, " ok")), t2.deleteLocalGroupAndConversation(e3), t2.checkJoinedAVChatRoomByID(e3) && t2._AVChatRoomHandler.reset(e3), t2._groupAttributesHandler.deleteLocalGroupAttributes(e3), Ka({ groupID: e3 });
          }).catch(function(e4) {
            return t2.probeNetwork().then(function(t3) {
              var n4 = v(t3, 2), s3 = n4[0], a2 = n4[1];
              o2.setError(e4, s3, a2).end();
            }), xe.e("".concat(n3, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "updateGroupProfile", value: function(e3) {
          var t2 = this, n3 = "".concat(this._n, ".").concat("updateGroupProfile");
          if (this.hasLocalGroup(e3.groupID)) {
            var o2 = this.getLocalGroupProfile(e3.groupID).type;
            this._canIUseJoinOption(o2) || at(e3.joinOption) || (xe.w("".concat(n3, " joinOption is unavailable for Work/Meeting/AVChatRoom")), e3.joinOption = void 0);
          }
          if (at(e3.muteAllMembers) || (e3.muteAllMembers ? e3.muteAllMembers = "On" : e3.muteAllMembers = "Off"), e3.name && false === this._filterProfanity("name", e3))
            return Ja({ code: da.PROFANITY_FOUND });
          if (e3.introduction && false === this._filterProfanity("introduction", e3))
            return Ja({ code: da.PROFANITY_FOUND });
          if (e3.notification && false === this._filterProfanity("notification", e3))
            return Ja({ code: da.PROFANITY_FOUND });
          var s3 = new ka("updateGroupProfile");
          return s3.setMessage(JSON.stringify(e3)), xe.l("".concat(n3, " groupID:").concat(e3.groupID)), this.request({ protocolName: Jo, requestData: e3 }).then(function() {
            (s3.setNetworkType(t2.getNetworkType()).end(), xe.l("".concat(n3, " ok")), t2.hasLocalGroup(e3.groupID)) && (t2.groupMap.get(e3.groupID).updateGroup(e3), t2._setStorageGroupList());
            return Ka({ group: t2.groupMap.get(e3.groupID) });
          }).catch(function(e4) {
            return t2.probeNetwork().then(function(t3) {
              var n4 = v(t3, 2), o3 = n4[0], a2 = n4[1];
              s3.setError(e4, o3, a2).end();
            }), xe.l("".concat(n3, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "_filterProfanity", value: function(e3, t2) {
          var n3 = this.getModule(no);
          if (!n3)
            return true;
          var o2 = n3.filterText(t2[e3], z), s3 = o2.isAllowedToSend, a2 = o2.modifiedText;
          return true === s3 && (t2[e3] = a2, true);
        } }, { key: "joinGroup", value: function(e3) {
          var t2 = this, n3 = e3.groupID, o2 = e3.type, s3 = "".concat(this._n, ".joinGroup");
          if (o2 === S.GRP_WORK)
            return Ja({ code: da.CANNOT_JOIN_WORK });
          if (this.deleteUnjoinedAVChatRoom(n3), this.hasLocalGroup(n3)) {
            if (!this.isLoggedIn())
              return za({ status: S.JOIN_STATUS_ALREADY_IN_GROUP });
            var a2 = new ka("applyJoinGroup");
            return this.getGroupProfile({ groupID: n3 }).then(function() {
              return a2.setNetworkType(t2.getNetworkType()).setMessage("groupID:".concat(n3, " joinedStatus:").concat(S.JOIN_STATUS_ALREADY_IN_GROUP)).end(), za({ status: S.JOIN_STATUS_ALREADY_IN_GROUP });
            }).catch(function(o3) {
              return a2.setNetworkType(t2.getNetworkType()).setMessage("groupID:".concat(n3, " unjoined")).end(), xe.w("".concat(s3, " ").concat(n3, " was unjoined, now join!")), t2.groupMap.delete(n3), t2.applyJoinGroup(e3);
            });
          }
          return xe.l("".concat(s3, " groupID:").concat(n3)), this.isLoggedIn() ? this.applyJoinGroup(e3) : this._AVChatRoomHandler.joinWithoutAuth(e3);
        } }, { key: "applyJoinGroup", value: function(e3) {
          var n3 = this, o2 = "".concat(this._n, ".").concat("applyJoinGroup"), s3 = e3.groupID;
          if (!jt(e3.applyMessage) && false === this._filterProfanity("applyMessage", e3))
            return Ja({ code: da.PROFANITY_FOUND });
          var a2 = new ka("applyJoinGroup"), r2 = t({}, e3), i2 = this.canIUse(B.AVCHATROOM_HISTORY_MSG);
          return i2 && (r2.historyMessageFlag = 1), this.getModule(Fn).deleteTopicRoamingMessageInfo(s3), this.request({ protocolName: Xo, requestData: r2 }).then(function(e4) {
            var t2 = e4.data, r3 = t2.joinedStatus, u2 = t2.longPollingKey, c2 = t2.startSeq, l2 = t2.avChatRoomFlag, p2 = t2.avChatRoomKey, d2 = t2.messageList, g2 = "groupID:".concat(s3, " joinedStatus:").concat(r3, " longPollingKey:").concat(u2, " startSeq:").concat(c2) + " avChatRoomFlag:".concat(l2, " canGetAVChatRoomHistoryMessage:").concat(i2, ",") + " history message count:".concat(jt(d2) ? 0 : d2.length);
            switch (a2.setNetworkType(n3.getNetworkType()).setMessage("".concat(g2)).end(), xe.l("".concat(o2, " ok. ").concat(g2)), r3) {
              case je:
                return Ka({ status: je });
              case Ye:
                return n3.getGroupProfile({ groupID: s3 }).then(function(e5) {
                  var t3 = e5.data.group;
                  return n3._handleJoinResult({ group: t3, avChatRoomFlag: l2, longPollingKey: u2, startSeq: c2, avChatRoomKey: p2, messageList: d2 });
                }).catch(function() {
                  var e5 = new dr({ groupID: s3 });
                  return n3._handleJoinResult({ group: e5, avChatRoomFlag: l2, longPollingKey: u2, startSeq: c2, avChatRoomKey: p2, messageList: d2 });
                });
              default:
                var _2 = new Wa({ code: da.JOIN_GROUP_FAIL });
                return xe.e("".concat(o2, " failed. error:"), _2), Ja(_2);
            }
          }).catch(function(e4) {
            return a2.setMessage("groupID:".concat(s3)), n3.probeNetwork().then(function(t2) {
              var n4 = v(t2, 2), o3 = n4[0], s4 = n4[1];
              a2.setError(e4, o3, s4).end();
            }), xe.e("".concat(o2, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "_handleJoinResult", value: function(e3) {
          var t2, n3 = this, o2 = e3.group, s3 = e3.avChatRoomFlag, a2 = e3.longPollingKey, r2 = e3.startSeq, i2 = e3.avChatRoomKey, u2 = e3.messageList, c2 = o2.groupID;
          return 1 === s3 ? (this.getModule(Fn).setCompleted("".concat(S.CONV_GROUP).concat(c2)), this._groupAttributesHandler.initGroupAttributesCache({ groupID: c2, avChatRoomKey: i2 }), this._groupCountersHandler.initGroupCountersCache({ groupID: c2, avChatRoomKey: i2 }), (t2 = at(a2) ? this._AVChatRoomHandler.handleJoinResult({ group: o2 }) : this._AVChatRoomHandler.startRunLoop({ group: o2, longPollingKey: a2, startSeq: r2 })).then(function() {
            n3._onAVChatRoomHistoryMessage(u2);
          }), t2) : (this.emitGroupListUpdate(true, false), Ka({ status: Ye, group: o2 }));
        } }, { key: "quitGroup", value: function(e3) {
          var t2 = this, n3 = "".concat(this._n, ".").concat("quitGroup");
          xe.l("".concat(n3, " groupID:").concat(e3));
          var o2 = this.checkJoinedAVChatRoomByID(e3);
          if (!o2 && !this.hasLocalGroup(e3))
            return Ja({ code: da.MEMBER_NOT_IN_GROUP });
          if (o2 && !this.isLoggedIn())
            return xe.l("".concat(n3, " anonymously ok. groupID:").concat(e3)), this.deleteLocalGroupAndConversation(e3), this._AVChatRoomHandler.reset(e3), za({ groupID: e3 });
          var s3 = new ka("quitGroup");
          return s3.setMessage("groupID:".concat(e3)), this.request({ protocolName: Zo, requestData: { groupID: e3 } }).then(function() {
            return s3.setNetworkType(t2.getNetworkType()).end(), xe.l("".concat(n3, " ok")), t2.deleteLocalGroupAndConversation(e3), o2 && t2._AVChatRoomHandler.reset(e3), t2._groupAttributesHandler.deleteLocalGroupAttributes(e3), Ka({ groupID: e3 });
          }).catch(function(e4) {
            return t2.probeNetwork().then(function(t3) {
              var n4 = v(t3, 2), o3 = n4[0], a2 = n4[1];
              s3.setError(e4, o3, a2).end();
            }), xe.e("".concat(n3, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "searchGroupByID", value: function(e3) {
          var t2 = this, n3 = "".concat(this._n, ".").concat("searchGroupByID"), o2 = { groupIDList: [e3] }, s3 = new ka("searchGroupByID");
          return s3.setMessage("groupID:".concat(e3)), xe.l("".concat(n3, " groupID:").concat(e3)), this.request({ protocolName: $o, requestData: o2 }).then(function(e4) {
            var o3 = e4.data.groupProfile;
            if (0 !== o3[0].errorCode)
              throw new Wa({ code: o3[0].errorCode, message: o3[0].errorInfo });
            return s3.setNetworkType(t2.getNetworkType()).end(), xe.l("".concat(n3, " ok")), Ka({ group: new dr(o3[0]) });
          }).catch(function(e4) {
            return t2.probeNetwork().then(function(t3) {
              var n4 = v(t3, 2), o3 = n4[0], a2 = n4[1];
              s3.setError(e4, o3, a2).end();
            }), xe.w("".concat(n3, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "changeGroupOwner", value: function(e3) {
          var t2 = this, n3 = "".concat(this._n, ".").concat("changeGroupOwner");
          if (this.hasLocalGroup(e3.groupID) && this.getLocalGroupProfile(e3.groupID).type === S.GRP_AVCHATROOM)
            return Ja({ code: da.CANNOT_CHANGE_OWNER_IN_AVCHATROOM });
          if (e3.newOwnerID === this.getMyUserID())
            return Ja({ code: da.CANNOT_CHANGE_OWNER_TO_SELF });
          var o2 = new ka("changeGroupOwner");
          return o2.setMessage("groupID:".concat(e3.groupID, " newOwnerID:").concat(e3.newOwnerID)), xe.l("".concat(n3, " groupID:").concat(e3.groupID)), this.request({ protocolName: es, requestData: e3 }).then(function() {
            o2.setNetworkType(t2.getNetworkType()).end(), xe.l("".concat(n3, " ok"));
            var s3 = e3.groupID, a2 = e3.newOwnerID;
            t2.groupMap.get(s3).ownerID = a2;
            var r2 = t2.getModule(bn).getLocalGroupMemberList(s3);
            if (r2 instanceof Map) {
              var i2 = r2.get(t2.getMyUserID());
              at(i2) || (i2.updateRole("Member"), t2.groupMap.get(s3).selfInfo.role = "Member");
              var u2 = r2.get(a2);
              at(u2) || u2.updateRole("Owner");
            }
            return t2.emitGroupListUpdate(true, false), Ka({ group: t2.groupMap.get(s3) });
          }).catch(function(e4) {
            return t2.probeNetwork().then(function(t3) {
              var n4 = v(t3, 2), s3 = n4[0], a2 = n4[1];
              o2.setError(e4, s3, a2).end();
            }), xe.e("".concat(n3, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "getGroupApplicationList", value: function() {
          return this._groupSystemNoticeHandler.getGroupApplicationList();
        } }, { key: "handleGroupApplication", value: function(e3) {
          var t2, n3, o2, s3, a2, r2 = this, i2 = "".concat(this._n, ".").concat("handleGroupApplication"), u2 = e3.handleAction, c2 = e3.handleMessage, l2 = e3.message, p2 = e3.application;
          l2 ? (t2 = l2.payload.operatorID, n3 = l2.payload.groupProfile.groupID, o2 = l2.payload.authentication, s3 = l2.payload.messageKey) : p2 && (t2 = p2.applicant, n3 = p2.groupID, o2 = p2.authentication, s3 = p2.messageKey);
          var d2 = ts;
          p2 && 2 === p2.applicationType && (d2 = ns, a2 = p2.userID);
          var g2 = new ka("handleGroupApplication");
          return g2.setMessage("groupID:".concat(n3)), xe.l("".concat(i2, " groupID:").concat(n3)), this.request({ protocolName: d2, requestData: { handleAction: u2, handleMessage: c2, applicant: t2, invitee: a2, groupID: n3, authentication: o2, messageKey: s3 } }).then(function() {
            return g2.setNetworkType(r2.getNetworkType()).end(), xe.l("".concat(i2, " ok")), l2 && r2._groupSystemNoticeHandler.deleteGroupSystemNotice({ messageList: [e3.message] }), Ka({ group: r2.getLocalGroupProfile(n3) });
          }).catch(function(e4) {
            return r2.probeNetwork().then(function(t3) {
              var n4 = v(t3, 2), o3 = n4[0], s4 = n4[1];
              g2.setError(e4, o3, s4).end();
            }), xe.e("".concat(i2, " failed. error"), e4), Ja(e4);
          });
        } }, { key: "handleGroupInvitation", value: function(e3) {
          var n3 = this, o2 = "".concat(this._n, ".").concat("handleGroupInvitation"), s3 = e3.message.payload, a2 = s3.groupProfile.groupID, r2 = s3.authentication, i2 = s3.messageKey, u2 = s3.operatorID, c2 = e3.handleAction, l2 = new ka("handleGroupInvitation");
          return l2.setMessage("groupID:".concat(a2, " inviter:").concat(u2, " handleAction:").concat(c2)), xe.l("".concat(o2, " groupID:").concat(a2, " inviter:").concat(u2, " handleAction:").concat(c2)), this.request({ protocolName: os, requestData: t(t({}, e3), {}, { inviter: u2, groupID: a2, authentication: r2, messageKey: i2 }) }).then(function() {
            return l2.setNetworkType(n3.getNetworkType()).end(), xe.l("".concat(o2, " ok")), n3._groupSystemNoticeHandler.deleteGroupSystemNotice({ messageList: [e3.message] }), Ka({ group: n3.getLocalGroupProfile(a2) });
          }).catch(function(e4) {
            return n3.probeNetwork().then(function(t2) {
              var n4 = v(t2, 2), o3 = n4[0], s4 = n4[1];
              l2.setError(e4, o3, s4).end();
            }), xe.e("".concat(o2, " failed. error"), e4), Ja(e4);
          });
        } }, { key: "getGroupOnlineMemberCount", value: function(e3) {
          return this._AVChatRoomHandler ? this._AVChatRoomHandler.checkJoinedAVChatRoomByID(e3) ? this._AVChatRoomHandler.getGroupOnlineMemberCount(e3) : za({ memberCount: 0 }) : Ja({ code: da.CANNOT_FIND_MODULE });
        } }, { key: "hasLocalGroup", value: function(e3) {
          return this.groupMap.has(e3);
        } }, { key: "deleteLocalGroupAndConversation", value: function(e3) {
          var t2 = this.checkJoinedAVChatRoomByID(e3);
          (xe.l("".concat(this._n, ".deleteLocalGroupAndConversation isJoinedAVChatRoom:").concat(t2)), t2) && this.getModule(Fn).deleteLocalConversation("".concat(S.CONV_GROUP).concat(e3));
          if (Tt({ groupID: e3 })) {
            var n3 = this.getLocalGroupProfile(e3);
            if (n3 && true === n3.isSupportTopic)
              this.getModule(wn).deleteTopicListInCommunity(e3);
          }
          this._deleteLocalGroup(e3), this.emitGroupListUpdate(true, false);
        } }, { key: "_deleteLocalGroup", value: function(e3) {
          this.groupMap.delete(e3), this.getModule(bn).deleteGroupMemberList(e3), this._setStorageGroupList();
        } }, { key: "sendMessage", value: function(e3, t2) {
          if (st(e3._receiverList) && e3._receiverList.length > 0 && !this.canIUse(B.MSG_TO_SPECIFIED_GRP_MBR))
            return Ja({ code: da.CANNOT_USE_COMMERCIAL_ABILITY });
          var n3 = this.createGroupMessagePack(e3, t2);
          return this.request(n3);
        } }, { key: "createGroupMessagePack", value: function(e3, t2) {
          var n3 = null;
          t2 && t2.offlinePushInfo && (n3 = t2.offlinePushInfo);
          var o2 = "";
          et(e3.cloudCustomData) && e3.cloudCustomData.length > 0 && (o2 = e3.cloudCustomData);
          var s3 = [];
          if (ot(t2) && ot(t2.messageControlInfo)) {
            var a2 = t2.messageControlInfo, r2 = a2.excludedFromUnreadCount, i2 = a2.excludedFromLastMessage, u2 = a2.excludedFromContentModeration;
            true === r2 && s3.push("NoUnread"), true === i2 && s3.push("NoLastMsg"), true === u2 && s3.push("NoMsgCheck");
          }
          var c2 = void 0;
          st(e3._receiverList) && e3._receiverList.length > 0 && (c2 = e3._receiverList, e3._receiverList.length > 50 && (c2 = e3._receiverList.slice(0, 50), this.outputWarning("ReceiverListLimit")));
          var l2 = this.isOnlineMessage(e3, t2) ? 1 : 0, p2 = e3.getGroupAtInfoList(), d2 = { fromAccount: this.getMyUserID(), groupID: e3.to, msgBody: e3.getElements(), cloudCustomData: o2, random: e3.random, priority: e3.priority, clientSequence: e3.clientSequence, groupAtInfo: e3.type !== S.MSG_TEXT || jt(p2) ? void 0 : p2, onlineOnlyFlag: l2, clientTime: e3.clientTime, offlinePushInfo: n3 ? { pushFlag: true === n3.disablePush ? 1 : 0, title: n3.title || "", desc: n3.description || "", ext: n3.extension || "", apnsInfo: { badgeMode: true === n3.ignoreIOSBadge ? 1 : 0, isVoipPush: this._isVoipPush(n3) }, androidInfo: { OPPOChannelID: n3.androidOPPOChannelID || "" } } : void 0, messageControlInfo: 0 === l2 ? s3 : void 0, needReadReceipt: true !== e3.needReadReceipt || this.isMessageFromOrToAVChatroom(e3.to) ? 0 : 1, receiverList: c2, isSupportExtension: true === e3.isSupportExtension ? 1 : 0 };
          return Dt(e3.to) && (d2.groupID = qt(e3.to), d2.topicID = e3.to), { protocolName: ho, tjgID: this.generateTjgID(e3), requestData: d2 };
        } }, { key: "_isVoipPush", value: function(e3) {
          var t2 = void 0;
          return at(e3.disableVoipPush) || (t2 = false === e3.disableVoipPush ? 1 : 0), t2;
        } }, { key: "revokeMessage", value: function(e3) {
          var t2 = { groupID: e3.to, msgSeqList: [{ msgSeq: e3.sequence }] };
          return Dt(e3.to) && (t2.groupID = qt(e3.to), t2.topicID = e3.to), this.request({ protocolName: ss, requestData: t2 });
        } }, { key: "deleteMessage", value: function(e3) {
          var t2 = e3.to, n3 = e3.keyList;
          xe.l("".concat(this._n, ".deleteMessage groupID:").concat(t2, " count:").concat(n3.length));
          var o2 = { groupID: t2, deleter: this.getMyUserID(), keyList: n3 };
          return Dt(t2) && (o2.groupID = qt(t2), o2.topicID = t2), this.request({ protocolName: vs, requestData: o2 });
        } }, { key: "modifyRemoteMessage", value: function(e3) {
          var t2 = e3.to, n3 = e3.sequence, o2 = e3.payload, s3 = e3.type, a2 = e3.version, r2 = void 0 === a2 ? 0 : a2, i2 = e3.cloudCustomData, u2 = t2, c2 = void 0;
          Dt(t2) && (u2 = qt(t2), c2 = t2);
          var l2 = void 0;
          return Vt(s3) && (l2 = []).push({ type: s3, content: o2 }), this.request({ protocolName: ms, requestData: { groupID: u2, topicID: c2, sequence: n3, version: r2, elements: l2, cloudCustomData: i2 } });
        } }, { key: "getRoamingMessage", value: function(e3) {
          var t2 = this, n3 = "".concat(this._n, ".getRoamingMessage"), o2 = e3.conversationID, s3 = e3.groupID, a2 = e3.sequence, r2 = new ka("getGroupRoamingMessages"), i2 = 0, u2 = void 0;
          return Dt(s3) && (s3 = qt(u2 = s3)), this._computeLastSequence({ groupID: s3, topicID: u2, sequence: a2 }).then(function(e4) {
            return i2 = e4, xe.l("".concat(n3, " groupID:").concat(s3, " startSequence:").concat(i2)), t2.request({ protocolName: is, requestData: { groupID: s3, count: 21, sequence: i2, topicID: u2 } });
          }).then(function(e4) {
            var a3 = e4.data, c2 = a3.messageList, l2 = a3.complete, p2 = a3.invisibleSequenceList, d2 = void 0 === p2 ? [] : p2;
            at(c2) ? xe.l("".concat(n3, " ok. complete:").concat(l2, " but messageList is undefined!")) : xe.l("".concat(n3, " ok. complete:").concat(l2, " count:").concat(c2.length));
            var g2 = t2._getMinSequence(d2, c2) - 1;
            r2.setNetworkType(t2.getNetworkType()).setMessage("groupID:".concat(s3, " topicID:").concat(u2, " startSequence:").concat(i2, " complete:").concat(l2, " nextSequence:").concat(g2)).end();
            var _2 = t2.getModule(Fn), h2 = [];
            return jt(c2) || (_2.updateRoamingMessageSequence(o2, g2), h2 = _2.onRoamingMessage(c2, o2), _2.updateIsRead(o2), _2.patchConversationLastMessage(o2)), (2 === l2 || g2 <= 1) && (_2.setCompleted(o2), g2 = ""), xe.l("".concat(n3, " nextReqID:").concat(g2, ", stored message count:").concat(h2.length, ", invisible sequence count:").concat(d2.length)), { nextReqID: g2 + "", storedMessageList: h2 };
          }).catch(function(e4) {
            return t2.probeNetwork().then(function(t3) {
              var n4 = v(t3, 2), o3 = n4[0], a3 = n4[1];
              r2.setError(e4, o3, a3).setMessage("groupID:".concat(s3, " topicID:").concat(u2, " startSequence:").concat(i2)).end();
            }), xe.w("".concat(n3, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "_getGroupIDOfMessage", value: function(e3) {
          return e3.conversationID.replace(S.CONV_GROUP, "");
        } }, { key: "_getMinSequence", value: function(e3, t2) {
          var n3 = 0;
          jt(t2) || (n3 = t2[t2.length - 1].sequence);
          var o2 = 0;
          jt(e3) || (o2 = e3[e3.length - 1]);
          return xe.l("".concat(this._n, "._getMinSequence minVisibleSequence:").concat(n3, " minInvisibleSequence:").concat(o2)), o2 > 0 && o2 < n3 ? o2 : n3;
        } }, { key: "getReadReceiptList", value: function(e3) {
          var t2 = this, n3 = "".concat(this._n, ".").concat("getReadReceiptList"), o2 = this._getGroupIDOfMessage(e3[0]), s3 = this.getMyUserID(), a2 = e3.filter(function(e4) {
            return e4.from === s3 && true === e4.needReadReceipt;
          }).map(function(e4) {
            return { sequence: e4.sequence };
          });
          if (xe.l("".concat(n3, " groupID:").concat(o2, " sequenceList:").concat(JSON.stringify(a2))), 0 === a2.length)
            return za({ messageList: e3 });
          var r2 = new ka("getReadReceiptList");
          return r2.setMessage("groupID:".concat(o2)), this.request({ protocolName: us, requestData: { groupID: o2, sequenceList: a2 } }).then(function(t3) {
            r2.end(), xe.l("".concat(n3, " ok"));
            var o3 = t3.data.readReceiptList;
            return st(o3) && o3.forEach(function(t4) {
              e3.forEach(function(e4) {
                0 === t4.code && t4.sequence === e4.sequence && (e4.readReceiptInfo.readCount = t4.readCount, e4.readReceiptInfo.unreadCount = t4.unreadCount);
              });
            }), Ka({ messageList: e3 });
          }).catch(function(e4) {
            return t2.probeNetwork().then(function(t3) {
              var n4 = v(t3, 2), o3 = n4[0], s4 = n4[1];
              r2.setError(e4, o3, s4).end();
            }), xe.w("".concat(n3, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "sendReadReceipt", value: function(e3) {
          var t2 = this, n3 = "".concat(this._n, ".").concat("sendReadReceipt"), o2 = this._getGroupIDOfMessage(e3[0]), s3 = new ka("sendReadReceipt");
          s3.setMessage("groupID:".concat(o2));
          var a2 = this.getMyUserID(), r2 = e3.filter(function(e4) {
            return e4.from !== a2 && true === e4.needReadReceipt;
          }).map(function(e4) {
            return { sequence: e4.sequence };
          });
          return 0 === r2.length ? Ja({ code: da.READ_RECEIPT_MESSAGE_LIST_EMPTY }) : (xe.l("".concat(n3, ". sequenceList:").concat(JSON.stringify(r2))), this.request({ protocolName: cs, requestData: { groupID: o2, sequenceList: r2 } }).then(function(e4) {
            return s3.end(), xe.l("".concat(n3, " ok")), Ka();
          }).catch(function(e4) {
            return t2.probeNetwork().then(function(t3) {
              var n4 = v(t3, 2), o3 = n4[0], a3 = n4[1];
              s3.setError(e4, o3, a3).end();
            }), xe.w("".concat(n3, " failed. error:"), e4), Ja(e4);
          }));
        } }, { key: "getReadReceiptDetail", value: function(e3) {
          var t2 = this, n3 = e3.message, o2 = e3.filter, s3 = e3.cursor, a2 = e3.count, r2 = this._getGroupIDOfMessage(n3), i2 = n3.ID, u2 = n3.sequence, c2 = "".concat(this._n, ".").concat("getReadReceiptDetail"), l2 = this._receiptDetailCompleteMap.get(i2) || false, p2 = 0 !== o2 && 1 !== o2 ? 0 : o2, d2 = et(s3) ? s3 : "", g2 = !$e(a2) || a2 <= 0 || a2 >= 100 ? 100 : a2, _2 = "groupID:".concat(r2, " sequence:").concat(u2, " cursor:").concat(d2, " filter:").concat(p2, " completeFlag:").concat(l2);
          xe.l("".concat(c2, " ").concat(_2));
          var h2 = { cursor: "", isCompleted: false, messageID: i2, unreadUserIDList: [], readUserIDList: [] }, f2 = new ka("getReadReceiptDetail");
          return f2.setMessage(_2), this.request({ protocolName: ps, requestData: { groupID: r2, sequence: u2, flag: p2, cursor: d2, count: g2 } }).then(function(e4) {
            f2.end();
            var n4 = e4.data, o3 = n4.cursor, s4 = n4.isCompleted, a3 = n4.unreadUserIDList, r3 = n4.readUserIDList;
            return h2.cursor = o3, 1 === s4 && (h2.isCompleted = true, t2._receiptDetailCompleteMap.set(i2, true)), 0 === p2 ? h2.readUserIDList = r3.map(function(e5) {
              return e5.userID;
            }) : 1 === p2 && (h2.unreadUserIDList = a3.map(function(e5) {
              return e5.userID;
            })), xe.l("".concat(c2, " ok")), Ka(h2);
          }).catch(function(e4) {
            return t2.probeNetwork().then(function(t3) {
              var n4 = v(t3, 2), o3 = n4[0], s4 = n4[1];
              f2.setError(e4, o3, s4).end();
            }), xe.w("".concat(c2, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "getRoamingMessagesHopping", value: function(e3) {
          var t2 = this, n3 = "".concat(this._n, ".getRoamingMessagesHopping"), o2 = new ka("getGroupRoamingMessagesHopping"), s3 = e3.groupID, a2 = e3.count, r2 = e3.sequence, i2 = e3.direction, u2 = r2;
          1 === i2 && (u2 = r2 + a2 - 1);
          var c2 = void 0;
          Dt(s3) && (s3 = qt(c2 = s3));
          var l2 = "".concat(c2 ? "topicID:".concat(c2) : "groupID:".concat(s3), " sequence:").concat(r2, " direction:").concat(i2);
          return xe.l("".concat(n3, " ").concat(l2)), this.request({ protocolName: is, requestData: { groupID: s3, topicID: c2, count: a2, sequence: u2 } }).then(function(s4) {
            var a3 = s4.data, u3 = a3.messageList, c3 = a3.complete, p2 = "complete:".concat(c3, " count:").concat(u3 ? u3.length : 0);
            if (xe.l("".concat(n3, " ok. ").concat(p2)), o2.setNetworkType(t2.getNetworkType()).setMessage("".concat(l2, " ").concat(p2)).end(), 2 === c3 || jt(u3)) {
              var d2 = t2._computeResult();
              return Ka(d2);
            }
            var g2 = "".concat(S.CONV_GROUP).concat(e3.groupID), _2 = t2.getModule(Fn).onRoamingMessage(u3, g2, false), h2 = t2._computeResult({ direction: i2, sequence: r2, remoteMessageList: u3, processedMessageList: _2 });
            return Ka(h2);
          }).catch(function(e4) {
            return t2.probeNetwork().then(function(t3) {
              var n4 = v(t3, 2), i3 = n4[0], u3 = n4[1];
              o2.setError(e4, i3, u3).setMessage("groupID:".concat(s3, " sequence:").concat(r2, " count:").concat(a2)).end();
            }), xe.w("".concat(n3, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "_computeResult", value: function(e3) {
          var t2 = { messageList: [], isCompleted: false, nextMessageSeq: "" };
          if (at(e3))
            return t2.isCompleted = true, t2;
          var n3 = e3.direction, o2 = e3.sequence, s3 = e3.remoteMessageList, a2 = void 0 === s3 ? [] : s3, r2 = e3.processedMessageList, i2 = void 0 === r2 ? [] : r2, u2 = a2.length;
          return 1 === n3 ? (t2.nextMessageSeq = a2[0].sequence + 1, i2.forEach(function(e4) {
            e4.sequence >= o2 && t2.messageList.push(e4);
          }), 0 === t2.messageList.length && a2[0].sequence < o2 && (t2.isCompleted = true, t2.nextMessageSeq = ""), t2) : (t2.nextMessageSeq = a2[u2 - 1].sequence - 1, t2.messageList = m(i2), 0 === t2.nextMessageSeq && (t2.isCompleted = true, t2.nextMessageSeq = ""), t2);
        } }, { key: "setMessageRead", value: function(e3) {
          var t2 = this, n3 = e3.conversationID, o2 = e3.lastMessageSeq, s3 = "".concat(this._n, ".setMessageRead");
          xe.l("".concat(s3, " conversationID:").concat(n3, " lastMessageSeq:").concat(o2)), $e(o2) || this.outputWarning("DoNotModifyLastSeq");
          var a2 = new ka("setGroupMessageRead");
          a2.setMessage("".concat(n3, "-").concat(o2));
          var r2 = n3.replace(S.CONV_GROUP, ""), i2 = void 0;
          return Dt(r2) && (r2 = qt(i2 = r2)), this.request({ protocolName: as, requestData: { groupID: r2, topicID: i2, messageReadSeq: o2 } }).then(function() {
            a2.setNetworkType(t2.getNetworkType()).end(), xe.l("".concat(s3, " ok."));
            var e4 = t2.getModule(Fn);
            e4.updateIsReadAfterReadReport({ conversationID: n3, lastMessageSeq: o2 });
            var u2 = true;
            if (!at(i2)) {
              u2 = false;
              var c2 = t2.getModule(wn).getLocalTopic(r2, i2);
              c2 && c2.updateSelfInfo({ readedSequence: o2 });
            }
            return e4.updateUnreadCount(n3, u2), Ka();
          }).catch(function(e4) {
            return t2.probeNetwork().then(function(t3) {
              var n4 = v(t3, 2), o3 = n4[0], s4 = n4[1];
              a2.setError(e4, o3, s4).end();
            }), xe.l("".concat(s3, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "_computeLastSequence", value: function(e3) {
          var t2 = e3.groupID, n3 = e3.topicID, o2 = void 0 === n3 ? void 0 : n3, s3 = e3.sequence;
          return s3 > 0 ? Promise.resolve(s3) : at(o2) || this.hasLocalGroup(t2) ? at(o2) ? this.getGroupLastSequence(t2) : this.getTopicLastSequence({ groupID: t2, topicID: o2 }) : Promise.resolve(0);
        } }, { key: "getGroupLastSequence", value: function(e3) {
          var t2 = this, n3 = "".concat(this._n, ".").concat("getGroupLastSequence"), o2 = new ka("getGroupLastSequence"), s3 = 0, a2 = "";
          if (this.hasLocalGroup(e3)) {
            var r2 = this.getLocalGroupProfile(e3), i2 = r2.lastMessage;
            if (i2.lastSequence > 0 && false === i2.onlineOnlyFlag)
              return s3 = i2.lastSequence, a2 = "got lastSequence:".concat(s3, " from local group profile[lastMessage.lastSequence]. groupID:").concat(e3), xe.l("".concat(n3, " ").concat(a2)), o2.setNetworkType(this.getNetworkType()).setMessage("".concat(a2)).end(), Promise.resolve(s3);
            if (r2.nextMessageSeq > 1)
              return s3 = r2.nextMessageSeq - 1, a2 = "got lastSequence:".concat(s3, " from local group profile[nextMessageSeq]. groupID:").concat(e3), xe.l("".concat(n3, " ").concat(a2)), o2.setNetworkType(this.getNetworkType()).setMessage("".concat(a2)).end(), Promise.resolve(s3);
          }
          var u2 = "GROUP".concat(e3), c2 = this.getModule(Fn).getLocalConversation(u2);
          if (c2 && c2.lastMessage.lastSequence && false === c2.lastMessage.onlineOnlyFlag)
            return s3 = c2.lastMessage.lastSequence, a2 = "got lastSequence:".concat(s3, " from local conversation profile[lastMessage.lastSequence]. groupID:").concat(e3), xe.l("".concat(n3, " ").concat(a2)), o2.setNetworkType(this.getNetworkType()).setMessage("".concat(a2)).end(), Promise.resolve(s3);
          var l2 = { groupIDList: [e3], responseFilter: { groupBaseInfoFilter: ["NextMsgSeq"] } };
          return this.getGroupProfileAdvance(l2).then(function(r3) {
            var i3 = r3.data.successGroupList;
            return jt(i3) ? xe.l("".concat(n3, " successGroupList is empty. groupID:").concat(e3)) : (s3 = i3[0].nextMessageSeq - 1, a2 = "got lastSequence:".concat(s3, " from getGroupProfileAdvance. groupID:").concat(e3), xe.l("".concat(n3, " ").concat(a2))), o2.setNetworkType(t2.getNetworkType()).setMessage("".concat(a2)).end(), s3;
          }).catch(function(s4) {
            return t2.probeNetwork().then(function(t3) {
              var n4 = v(t3, 2), a3 = n4[0], r3 = n4[1];
              o2.setError(s4, a3, r3).setMessage("get lastSequence failed from getGroupProfileAdvance. groupID:".concat(e3)).end();
            }), xe.w("".concat(n3, " failed. error:"), s4), Ja(s4);
          });
        } }, { key: "getTopicLastSequence", value: function(e3) {
          var t2 = this, n3 = e3.groupID, o2 = e3.topicID, s3 = "".concat(this._n, ".").concat("getTopicLastSequence"), a2 = new ka("getTopicLastSequence"), r2 = 0, i2 = "", u2 = this.getModule(wn);
          return u2.hasLocalTopic(n3, o2) ? (r2 = u2.getLocalTopic(n3, o2).nextMessageSeq - 1, i2 = "get lastSequence:".concat(r2, " from local topic info[nextMessageSeq]. topicID:").concat(o2), xe.l("".concat(s3, " ").concat(i2)), a2.setNetworkType(this.getNetworkType()).setMessage("".concat(i2)).end(), Promise.resolve(r2)) : u2.getTopicList({ groupID: n3, topicIDList: [o2] }).then(function(e4) {
            var n4 = e4.data.successTopicList;
            return jt(n4) ? xe.l("".concat(s3, " successTopicList is empty. topicID:").concat(o2)) : (r2 = n4[0].nextMessageSeq - 1, i2 = "get lastSequence:".concat(r2, " from getTopicList. topicID:").concat(o2), xe.l("".concat(s3, " ").concat(i2))), a2.setNetworkType(t2.getNetworkType()).setMessage("".concat(i2)).end(), r2;
          }).catch(function(e4) {
            return t2.probeNetwork().then(function(t3) {
              var n4 = v(t3, 2), s4 = n4[0], r3 = n4[1];
              a2.setError(e4, s4, r3).setMessage("get lastSequence failed from getTopicList. topicID:".concat(o2)).end();
            }), xe.w("".concat(s3, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "isMessageFromOrToAVChatroom", value: function(e3) {
          return !!this._AVChatRoomHandler && this._AVChatRoomHandler.checkJoinedAVChatRoomByID(e3);
        } }, { key: "hasJoinedAVChatRoom", value: function() {
          return this._AVChatRoomHandler ? this._AVChatRoomHandler.hasJoinedAVChatRoom() : 0;
        } }, { key: "getJoinedAVChatRoom", value: function() {
          return this._AVChatRoomHandler ? this._AVChatRoomHandler.getJoinedAVChatRoom() : [];
        } }, { key: "isOnlineMessage", value: function(e3, t2) {
          return !(!this._canIUseOnlineOnlyFlag(e3) || !t2 || true !== t2.onlineUserOnly);
        } }, { key: "_canIUseOnlineOnlyFlag", value: function(e3) {
          var t2 = this.getJoinedAVChatRoom();
          return !t2 || !t2.includes(e3.to) || e3.conversationType !== S.CONV_GROUP;
        } }, { key: "_onAVChatRoomHistoryMessage", value: function(e3) {
          if (!jt(e3)) {
            xe.l("".concat(this._n, "._onAVChatRoomHistoryMessage count:").concat(e3.length));
            var n3 = [];
            e3.forEach(function(e4) {
              n3.push(t(t({}, e4), {}, { isHistoryMessage: 1 }));
            }), this.onAVChatRoomMessage(n3);
          }
        } }, { key: "onAVChatRoomMessage", value: function(e3) {
          this._AVChatRoomHandler && this._AVChatRoomHandler.onMessage(e3);
        } }, { key: "onAVChatRoomMemberBanned", value: function(e3) {
          this._AVChatRoomHandler && this._AVChatRoomHandler.onAVChatRoomMemberBanned(e3);
        } }, { key: "getGroupSimplifiedInfo", value: function(e3) {
          var t2 = this, n3 = new ka("getGroupSimplifiedInfo"), o2 = { groupIDList: [e3], responseFilter: { groupBaseInfoFilter: ["Type", "Name"] } };
          return this.getGroupProfileAdvance(o2).then(function(o3) {
            var s3 = o3.data.successGroupList;
            return n3.setNetworkType(t2.getNetworkType()).setMessage("groupID:".concat(e3, " type:").concat(s3[0].type)).end(), s3[0];
          }).catch(function(o3) {
            t2.probeNetwork().then(function(t3) {
              var s3 = v(t3, 2), a2 = s3[0], r2 = s3[1];
              n3.setError(o3, a2, r2).setMessage("groupID:".concat(e3)).end();
            });
          });
        } }, { key: "setUnjoinedAVChatRoom", value: function(e3) {
          this._unjoinedAVChatRoomList.set(e3, 1);
        } }, { key: "deleteUnjoinedAVChatRoom", value: function(e3) {
          this._unjoinedAVChatRoomList.has(e3) && this._unjoinedAVChatRoomList.delete(e3);
        } }, { key: "isUnjoinedAVChatRoom", value: function(e3) {
          return this._unjoinedAVChatRoomList.has(e3);
        } }, { key: "isGroupAttributesUpdatedNotice", value: function(e3) {
          return this._groupAttributesHandler.isGroupAttributesUpdatedNotice(e3);
        } }, { key: "updateLocalMainSequenceOnReconnected", value: function() {
          this._groupAttributesHandler.updateLocalMainSequenceOnReconnected();
        } }, { key: "initGroupAttributes", value: function(e3) {
          return this._groupAttributesHandler.initGroupAttributes(e3);
        } }, { key: "setGroupAttributes", value: function(e3) {
          return this._groupAttributesHandler.setGroupAttributes(e3);
        } }, { key: "deleteGroupAttributes", value: function(e3) {
          return this._groupAttributesHandler.deleteGroupAttributes(e3);
        } }, { key: "getGroupAttributes", value: function(e3) {
          return this._groupAttributesHandler.getGroupAttributes(e3);
        } }, { key: "isMessageFromTopic", value: function(e3, t2) {
          return 2 === e3 && !jt(t2);
        } }, { key: "isMessageFromCommunityOfTopic", value: function(e3, t2) {
          return 2 === e3 && jt(t2);
        } }, { key: "getMessageExtensions", value: function(e3, t2) {
          return xe.l("".concat(this._n, ".getMessageExtensions startSequence:").concat(t2)), this.request({ protocolName: Es, requestData: { groupID: e3.to, messageSequence: e3.sequence, startSequence: t2 } });
        } }, { key: "modifyMessageExtensions", value: function(e3, t2) {
          var n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
          return xe.l("".concat(this._n, ".modifyMessageExtensions operateType:").concat(n3)), this.request({ protocolName: Ds, requestData: { groupID: e3.to, messageSequence: e3.sequence, extensionList: t2, operateType: n3 } });
        } }, { key: "getGroupNotify", value: function(e3) {
          var n3 = this;
          if (this.hasLocalGroup(e3)) {
            var o2 = this.getLocalGroupProfile(e3), s3 = o2.type, a2 = o2.isSupportTopic;
            if (!Ct(s3) && !a2) {
              var r2 = "".concat(this._n, ".getGroupNotify"), i2 = this._getGroupLastRevokedTime(e3), u2 = 1e3 * Ue();
              xe.l("".concat(r2, " groupID:").concat(e3, " type:").concat(s3, " beginTime:").concat(i2, " endTime:").concat(u2)), this.request({ protocolName: Ss, requestData: { type: Tt({ type: s3, groupID: e3 }) ? S.GRP_COMMUNITY : void 0, groupID: e3, beginTime: i2, endTime: u2 } }).then(function(o3) {
                var s4 = o3.data, a3 = s4.nextRevokedTime, i3 = s4.notifyList;
                xe.l("".concat(r2, " ok. groupID:").concat(e3, " nextRevokedTime:").concat(a3));
                var u3 = { dataList: [{ elements: { revokedInfos: [] } }] };
                st(i3) && i3.forEach(function(n4) {
                  u3.dataList[0].elements.revokedInfos.push({ groupID: e3, sequence: n4.sequence, random: n4.random, revokerInfo: t({}, n4.revokerInfo) });
                }), n3.onGroupMessageRevoked(u3), 0 !== a3 ? (n3._setGroupLastRevokedTime(e3, a3), n3.getGroupNotify(e3)) : n3._setGroupLastRevokedTime(e3, 1e3 * Ue());
              }).catch(function(e4) {
                xe.e("".concat(r2, " failed. error:"), e4);
              });
            }
          }
        } }, { key: "_getGroupLastRevokedTime", value: function(e3) {
          return this.hasLocalGroup(e3) ? this.getLocalGroupProfile(e3)._lastRevokedTime : 0;
        } }, { key: "_setGroupLastRevokedTime", value: function(e3, t2) {
          this.hasLocalGroup(e3) && (this.getLocalGroupProfile(e3)._lastRevokedTime = t2);
        } }, { key: "isGroupCountersNotice", value: function(e3) {
          return this._groupCountersHandler.isGroupCountersNotice(e3);
        } }, { key: "setGroupCounters", value: function(e3) {
          return this._groupCountersHandler.setGroupCounters(e3);
        } }, { key: "increaseGroupCounter", value: function(e3) {
          return this._groupCountersHandler.increaseGroupCounter(e3);
        } }, { key: "decreaseGroupCounter", value: function(e3) {
          return this._groupCountersHandler.decreaseGroupCounter(e3);
        } }, { key: "getGroupCounters", value: function(e3) {
          return this._groupCountersHandler.getGroupCounters(e3);
        } }, { key: "restartPolling", value: function() {
          this._AVChatRoomHandler && this._AVChatRoomHandler.restartPolling();
        } }, { key: "getPollingTimerID", value: function(e3) {
          if (!e3)
            return -1;
          var t2 = this.getLocalGroupProfile(e3);
          return t2 && Ct(t2.type) ? this._AVChatRoomHandler.getPollingTimerID(e3) : -1;
        } }, { key: "_canIUseJoinOption", value: function(e3) {
          return function(e4) {
            return e4 === S.GRP_PUBLIC;
          }(e3) || Tt({ type: e3 });
        } }, { key: "reset", value: function() {
          this.groupMap.clear(), this._unjoinedAVChatRoomList.clear(), this._receiptDetailCompleteMap.clear(), this._commonGroupHandler.reset(), this._groupSystemNoticeHandler.reset(), this._groupTipsHandler.reset(), this._groupAttributesHandler.reset(), this._groupCountersHandler.reset(), this._AVChatRoomHandler && this._AVChatRoomHandler.reset();
        } }]), s2;
      }(ro), Fr = function() {
        function e2(t2) {
          o(this, e2), this.userID = "", this.avatar = "", this.nick = "", this.role = "", this.joinTime = "", this.lastSendMsgTime = "", this.nameCard = "", this.muteUntil = 0, this.memberCustomField = [], this._initMember(t2);
        }
        return a(e2, [{ key: "_initMember", value: function(e3) {
          this.updateMember(e3);
        } }, { key: "updateMember", value: function(e3) {
          var t2 = [null, void 0, "", 0, NaN];
          e3.memberCustomField && It(this.memberCustomField, e3.memberCustomField), pt(this, e3, ["memberCustomField", "marks"], t2);
        } }, { key: "updateRole", value: function(e3) {
          ["Owner", "Admin", "Member"].indexOf(e3) < 0 || (this.role = e3);
        } }, { key: "updateMuteUntil", value: function(e3) {
          at(e3) || (this.muteUntil = Math.floor((Date.now() + 1e3 * e3) / 1e3));
        } }, { key: "updateNameCard", value: function(e3) {
          at(e3) || (this.nameCard = e3);
        } }, { key: "updateMemberCustomField", value: function(e3) {
          e3 && It(this.memberCustomField, e3);
        } }]), e2;
      }(), qr = function(e2) {
        i(s2, e2);
        var n2 = f(s2);
        function s2(e3) {
          var t2;
          return o(this, s2), (t2 = n2.call(this, e3))._n = "GroupMemberModule", t2.groupMemberListMap = /* @__PURE__ */ new Map(), t2.getInnerEmitterInstance().on(er, t2._onProfileUpdated, _(t2)), t2;
        }
        return a(s2, [{ key: "_onProfileUpdated", value: function(e3) {
          for (var t2 = this, n3 = e3.data, o2 = function(e4) {
            var o3 = n3[e4];
            t2.groupMemberListMap.forEach(function(e5) {
              e5.has(o3.userID) && e5.get(o3.userID).updateMember({ nick: o3.nick, avatar: o3.avatar });
            });
          }, s3 = 0; s3 < n3.length; s3++)
            o2(s3);
        } }, { key: "deleteGroupMemberList", value: function(e3) {
          this.groupMemberListMap.delete(e3);
        } }, { key: "getGroupMemberList", value: function(e3) {
          var t2 = this, n3 = e3.groupID, o2 = e3.offset, s3 = void 0 === o2 ? 0 : o2, a2 = e3.count, r2 = void 0 === a2 ? 15 : a2, i2 = e3.filter, u2 = void 0 === i2 ? void 0 : i2, c2 = "".concat(this._n, ".").concat("getGroupMemberList"), l2 = this.getModule(Un), p2 = l2.hasLocalGroup(n3);
          if (xe.l("".concat(c2, " groupID:").concat(n3, " offset:").concat(s3, " count:").concat(r2, " hasLocalGroup:").concat(p2)), !p2)
            return za({ memberList: [], offset: 0 });
          if (l2.getLocalGroupProfile(n3).type === S.GRP_AVCHATROOM) {
            if (this.canIUse(B.AVCHATROOM_MBR_LIST))
              return this._getAVChatRoomMemberList({ groupID: n3, offset: s3, filter: u2 });
            this.outputWarning("LiveOnlineMember");
          }
          var d2 = new ka("getGroupMemberList"), g2 = 0, _2 = { groupID: n3, limit: r2 > 100 ? 100 : r2 };
          Tt({ groupID: n3 }) ? _2.next = "".concat(s3) : (_2.offset = s3, g2 = s3 + r2);
          var h2 = [];
          return this.request({ protocolName: As, requestData: _2 }).then(function(e4) {
            var o3 = e4.data, s4 = o3.members, a3 = o3.memberNum, r3 = o3.next, i3 = void 0 === r3 ? void 0 : r3;
            if (at(i3) || (g2 = jt(i3) ? 0 : i3), !st(s4) || 0 === s4.length)
              return g2 = 0, Promise.resolve([]);
            var u3 = t2.getModule(Un);
            return u3.hasLocalGroup(n3) && (u3.getLocalGroupProfile(n3).memberNum = a3), h2 = t2._updateLocalGroupMemberMap(n3, s4), t2.getModule(On).getUserProfile({ userIDList: s4.map(function(e5) {
              return e5.userID;
            }), tagList: [Be.NICK, Be.AVATAR] });
          }).then(function(e4) {
            var o3 = e4.data;
            if (!st(o3) || 0 === o3.length)
              return za({ memberList: [], offset: g2 });
            var a3 = o3.map(function(e5) {
              return { userID: e5.userID, nick: e5.nick, avatar: e5.avatar };
            });
            return t2._updateLocalGroupMemberMap(n3, a3), h2.length < r2 && (g2 = 0), d2.setNetworkType(t2.getNetworkType()).setMessage("groupID:".concat(n3, " offset:").concat(s3, " count:").concat(r2)).end(), xe.l("".concat(c2, " ok.")), Ka({ memberList: h2, offset: g2 });
          }).catch(function(e4) {
            return t2.probeNetwork().then(function(t3) {
              var n4 = v(t3, 2), o3 = n4[0], s4 = n4[1];
              d2.setError(e4, o3, s4).end();
            }), xe.e("".concat(c2, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "_getAVChatRoomMemberList", value: function(e3) {
          var t2 = this, n3 = e3.groupID, o2 = e3.offset, s3 = e3.filter, a2 = "".concat(this._n, ".").concat("_getAVChatRoomMemberList"), r2 = new ka("_getAVChatRoomMemberList");
          return r2.setMessage("groupID:".concat(n3, " offset:").concat(o2, " filter:").concat(s3)), this.request({ protocolName: Rs, requestData: { groupID: n3, offset: o2, filter: s3 } }).then(function(e4) {
            var o3 = e4.data, s4 = o3.memberList, i2 = void 0 === s4 ? [] : s4, u2 = o3.offset, c2 = void 0 === u2 ? 0 : u2;
            r2.setNetworkType(t2.getNetworkType()).end(), xe.l("".concat(a2, " ok. member count:").concat(i2.length, ", next request timestamp:").concat(c2));
            var l2 = t2._updateLocalGroupMemberMap(n3, i2);
            return Ka({ memberList: l2, offset: c2 });
          }).catch(function(e4) {
            return t2.probeNetwork().then(function(t3) {
              var n4 = v(t3, 2), o3 = n4[0], s4 = n4[1];
              r2.setError(e4, o3, s4).end();
            }), xe.e("".concat(a2, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "getGroupMemberProfile", value: function(e3) {
          var n3 = this, o2 = "".concat(this._n, ".").concat("getGroupMemberProfile"), s3 = new ka("getGroupMemberProfile");
          s3.setMessage(e3.userIDList.length > 5 ? "userIDList.length:".concat(e3.userIDList.length) : "userIDList:".concat(e3.userIDList)), xe.l("".concat(o2, " groupID:").concat(e3.groupID, " userIDList:").concat(e3.userIDList.join(","))), e3.userIDList.length > 50 && (e3.userIDList = e3.userIDList.slice(0, 50));
          var a2 = e3.groupID, r2 = e3.userIDList;
          return this._getGroupMemberProfileAdvance(t(t({}, e3), {}, { userIDList: r2 })).then(function(e4) {
            var t2 = e4.data.members;
            return st(t2) && 0 !== t2.length ? (n3._updateLocalGroupMemberMap(a2, t2), n3.getModule(On).getUserProfile({ userIDList: t2.map(function(e5) {
              return e5.userID;
            }), tagList: [Be.NICK, Be.AVATAR] })) : za([]);
          }).then(function(e4) {
            var t2 = e4.data.map(function(e5) {
              return { userID: e5.userID, nick: e5.nick, avatar: e5.avatar };
            });
            n3._updateLocalGroupMemberMap(a2, t2);
            var o3 = r2.filter(function(e5) {
              return n3.hasLocalGroupMember(a2, e5);
            }).map(function(e5) {
              return n3.getLocalGroupMemberInfo(a2, e5);
            });
            return s3.setNetworkType(n3.getNetworkType()).end(), Ka({ memberList: o3 });
          });
        } }, { key: "addGroupMember", value: function(e3) {
          var t2 = this, n3 = "".concat(this._n, ".").concat("addGroupMember"), o2 = e3.groupID, s3 = this.getModule(Un).getLocalGroupProfile(o2), a2 = s3.type, r2 = new ka("addGroupMember");
          if (r2.setMessage("groupID:".concat(o2, " groupType:").concat(a2)), Ct(a2)) {
            var i2 = new Wa({ code: da.CANNOT_ADD_MEMBER_IN_AVCHATROOM });
            return r2.setError(i2, true, this.getNetworkType()).end(), Ja(i2);
          }
          return e3.userIDList = e3.userIDList.map(function(e4) {
            return { userID: e4 };
          }), xe.l("".concat(n3, " groupID:").concat(o2)), this.request({ protocolName: Os, requestData: e3 }).then(function(o3) {
            var a3 = o3.data.members;
            xe.l("".concat(n3, " ok"));
            var i3 = a3.filter(function(e4) {
              return 1 === e4.result;
            }).map(function(e4) {
              return e4.userID;
            }), u2 = a3.filter(function(e4) {
              return 0 === e4.result;
            }).map(function(e4) {
              return e4.userID;
            }), c2 = a3.filter(function(e4) {
              return 2 === e4.result;
            }).map(function(e4) {
              return e4.userID;
            }), l2 = a3.filter(function(e4) {
              return 4 === e4.result;
            }).map(function(e4) {
              return e4.userID;
            }), p2 = "groupID:".concat(e3.groupID, ", ") + "successUserIDList:".concat(i3, ", ") + "failureUserIDList:".concat(u2, ", ") + "existedUserIDList:".concat(c2, ", ") + "overLimitUserIDList:".concat(l2);
            return r2.setNetworkType(t2.getNetworkType()).setMoreMessage(p2).end(), 0 === i3.length ? Ka({ successUserIDList: i3, failureUserIDList: u2, existedUserIDList: c2, overLimitUserIDList: l2 }) : (s3.memberCount += i3.length, t2._updateConversationGroupProfile(s3), Ka({ successUserIDList: i3, failureUserIDList: u2, existedUserIDList: c2, overLimitUserIDList: l2, group: s3 }));
          }).catch(function(e4) {
            return t2.probeNetwork().then(function(t3) {
              var n4 = v(t3, 2), o3 = n4[0], s4 = n4[1];
              r2.setError(e4, o3, s4).end();
            }), xe.e("".concat(n3, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "deleteGroupMember", value: function(e3) {
          var t2 = this, n3 = "".concat(this._n, ".").concat("deleteGroupMember"), o2 = e3.groupID, s3 = e3.userIDList, a2 = this.getModule(Un).getLocalGroupProfile(o2);
          if (at(a2))
            return Ja({ code: da.CANNOT_FIND_GROUP });
          if (Ct(a2.type))
            return this.canIUse(B.AVCHATROOM_BAN_MBR) ? this._banAVChatRoomMember(e3) : Ja({ code: da.CANNOT_USE_COMMERCIAL_ABILITY });
          var r2 = new ka("deleteGroupMember"), i2 = "groupID:".concat(o2, " ").concat(s3.length > 5 ? "userIDList.length:".concat(s3.length) : "userIDList:".concat(s3));
          return r2.setMessage(i2), xe.l("".concat(n3, " groupID:").concat(o2, " userIDList:"), s3), this.request({ protocolName: Gs, requestData: e3 }).then(function() {
            return r2.setNetworkType(t2.getNetworkType()).end(), xe.l("".concat(n3, " ok")), a2.memberCount -= 1, t2._updateConversationGroupProfile(a2), t2.deleteLocalGroupMembers(o2, s3), Ka({ group: a2, userIDList: s3 });
          }).catch(function(e4) {
            return t2.probeNetwork().then(function(t3) {
              var n4 = v(t3, 2), o3 = n4[0], s4 = n4[1];
              r2.setError(e4, o3, s4).end();
            }), xe.e("".concat(n3, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "_updateConversationGroupProfile", value: function(e3) {
          this.getModule(Fn).updateConversationGroupProfile([e3]);
        } }, { key: "_banAVChatRoomMember", value: function(e3) {
          var t2 = this, n3 = "".concat(this._n, ".").concat("deleteGroupMember"), o2 = e3.groupID, s3 = e3.userIDList, a2 = "groupID:".concat(o2, " ").concat(s3.length > 5 ? "userIDList.length:".concat(s3.length) : "userIDList:".concat(s3)), r2 = new ka("deleteGroupMember");
          r2.setMessage(a2), xe.l("".concat(n3, " groupID:").concat(o2, " userIDList:"), s3);
          var i2 = this.getModule(Un).getLocalGroupProfile(o2);
          return at(e3.duration) || 0 === e3.duration ? Ja({ code: da.BAN_DURATION_INVALID }) : this.request({ protocolName: Us, requestData: e3 }).then(function() {
            return r2.setNetworkType(t2.getNetworkType()).end(), xe.l("".concat(n3, " ok")), t2.deleteLocalGroupMembers(o2, s3), Ka({ group: i2, userIDList: s3 });
          }).catch(function(e4) {
            return t2.probeNetwork().then(function(t3) {
              var n4 = v(t3, 2), o3 = n4[0], s4 = n4[1];
              r2.setError(e4, o3, s4).end();
            }), xe.e("".concat(n3, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "setGroupMemberMuteTime", value: function(e3) {
          var t2 = this, n3 = e3.groupID, o2 = e3.userID, s3 = e3.muteTime, a2 = "".concat(this._n, ".").concat("setGroupMemberMuteTime");
          if (o2 === this.getMyUserID())
            return Ja(new Wa({ code: da.CANNOT_MUTE_SELF }));
          xe.l("".concat(a2, " groupID:").concat(n3, " userID:").concat(o2));
          var r2 = new ka("setGroupMemberMuteTime");
          return r2.setMessage("groupID:".concat(n3, " userID:").concat(o2, " muteTime:").concat(s3)), this.modifyGroupMemberInfo({ groupID: n3, userID: o2, muteTime: s3 }).then(function(e4) {
            r2.setNetworkType(t2.getNetworkType()).end(), xe.l("".concat(a2, " ok"));
            var o3 = t2.getModule(Un);
            return Ka({ group: o3.getLocalGroupProfile(n3), member: e4 });
          }).catch(function(e4) {
            return t2.probeNetwork().then(function(t3) {
              var n4 = v(t3, 2), o3 = n4[0], s4 = n4[1];
              r2.setError(e4, o3, s4).end();
            }), xe.e("".concat(a2, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "setGroupMemberRole", value: function(e3) {
          var t2 = this, n3 = "".concat(this._n, ".").concat("setGroupMemberRole"), o2 = e3.groupID, s3 = e3.userID, a2 = e3.role, r2 = this.getModule(Un).getLocalGroupProfile(o2);
          if (r2.selfInfo.role !== S.GRP_MBR_ROLE_OWNER)
            return Ja({ code: da.NOT_OWNER });
          if ([S.GRP_WORK, S.GRP_AVCHATROOM].includes(r2.type))
            return Ja({ code: da.CANNOT_SET_MEMBER_ROLE_IN_WORK_AND_AVCHATROOM });
          var i2 = [S.GRP_MBR_ROLE_ADMIN, S.GRP_MBR_ROLE_MEMBER];
          if (Tt({ groupID: o2 }) && i2.push(S.GRP_MBR_ROLE_CUSTOM), i2.indexOf(a2) < 0)
            return Ja({ code: da.INVALID_MEMBER_ROLE });
          if (s3 === this.getMyUserID())
            return Ja({ code: da.CANNOT_SET_SELF_MEMBER_ROLE });
          var u2 = new ka("setGroupMemberRole");
          return u2.setMessage("groupID:".concat(o2, " userID:").concat(s3, " role:").concat(a2)), xe.l("".concat(n3, " groupID:").concat(o2, " userID:").concat(s3)), this.modifyGroupMemberInfo({ groupID: o2, userID: s3, role: a2 }).then(function(e4) {
            return u2.setNetworkType(t2.getNetworkType()).end(), xe.l("".concat(n3, " ok")), Ka({ group: r2, member: e4 });
          }).catch(function(e4) {
            return t2.probeNetwork().then(function(t3) {
              var n4 = v(t3, 2), o3 = n4[0], s4 = n4[1];
              u2.setError(e4, o3, s4).end();
            }), xe.e("".concat(n3, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "_filterProfanity", value: function(e3, t2) {
          var n3 = this.getModule(no);
          if (!n3)
            return true;
          var o2 = n3.filterText(t2[e3], J), s3 = o2.isAllowedToSend, a2 = o2.modifiedText;
          return true === s3 && (t2[e3] = a2, true);
        } }, { key: "setGroupMemberNameCard", value: function(e3) {
          var t2 = this, n3 = "".concat(this._n, ".").concat("setGroupMemberNameCard");
          if (e3.nameCard && false === this._filterProfanity("nameCard", e3))
            return Ja({ code: da.PROFANITY_FOUND });
          var o2 = e3.groupID, s3 = e3.userID, a2 = void 0 === s3 ? this.getMyUserID() : s3, r2 = e3.nameCard;
          xe.l("".concat(n3, " groupID:").concat(o2, " userID:").concat(a2));
          var i2 = new ka("setGroupMemberNameCard");
          return i2.setMessage("groupID:".concat(o2, " userID:").concat(a2, " nameCard:").concat(r2)), this.modifyGroupMemberInfo({ groupID: o2, userID: a2, nameCard: r2 }).then(function(e4) {
            xe.l("".concat(n3, " ok")), i2.setNetworkType(t2.getNetworkType()).end();
            var s4 = t2.getModule(Un).getLocalGroupProfile(o2);
            return a2 === t2.getMyUserID() && s4 && s4.setSelfNameCard(r2), Ka({ group: s4, member: e4 });
          }).catch(function(e4) {
            return t2.probeNetwork().then(function(t3) {
              var n4 = v(t3, 2), o3 = n4[0], s4 = n4[1];
              i2.setError(e4, o3, s4).end();
            }), xe.e("".concat(n3, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "setGroupMemberCustomField", value: function(e3) {
          var t2 = this, n3 = "".concat(this._n, ".").concat("setGroupMemberCustomField"), o2 = e3.groupID, s3 = e3.userID, a2 = void 0 === s3 ? this.getMyUserID() : s3, r2 = e3.memberCustomField;
          xe.l("".concat(n3, " groupID:").concat(o2, " userID:").concat(a2));
          var i2 = new ka("setGroupMemberCustomField");
          return i2.setMessage("groupID:".concat(o2, " userID:").concat(a2, " memberCustomField:").concat(JSON.stringify(r2))), this.modifyGroupMemberInfo({ groupID: o2, userID: a2, memberCustomField: r2 }).then(function(e4) {
            i2.setNetworkType(t2.getNetworkType()).end(), xe.l("".concat(n3, " ok"));
            var s4 = t2.getModule(Un).getLocalGroupProfile(o2);
            return Ka({ group: s4, member: e4 });
          }).catch(function(e4) {
            return t2.probeNetwork().then(function(t3) {
              var n4 = v(t3, 2), o3 = n4[0], s4 = n4[1];
              i2.setError(e4, o3, s4).end();
            }), xe.e("".concat(n3, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "modifyGroupMemberInfo", value: function(e3) {
          var n3 = this, o2 = e3.groupID, s3 = e3.userID, a2 = void 0;
          return Dt(o2) && (o2 = qt(a2 = o2)), this.request({ protocolName: Ps, requestData: t(t({}, e3), {}, { groupID: o2, topicID: a2 }) }).then(function() {
            if (n3.hasLocalGroupMember(o2, s3)) {
              var t2 = n3.getLocalGroupMemberInfo(o2, s3);
              return at(e3.muteTime) || t2.updateMuteUntil(e3.muteTime), at(e3.role) || t2.updateRole(e3.role), at(e3.nameCard) || t2.updateNameCard(e3.nameCard), at(e3.memberCustomField) || t2.updateMemberCustomField(e3.memberCustomField), t2;
            }
            return n3.getGroupMemberProfile({ groupID: o2, userIDList: [s3] }).then(function(e4) {
              return v(e4.data.memberList, 1)[0];
            });
          });
        } }, { key: "markGroupMemberList", value: function(e3) {
          var t2 = this, n3 = "".concat(this._n, ".").concat("markGroupMemberList"), o2 = e3.groupID, s3 = e3.markType, a2 = e3.enableMark, r2 = e3.userIDList, i2 = void 0 === r2 ? [] : r2, u2 = "groupID:".concat(o2, " markType:").concat(s3, " enableMark:").concat(a2, " userIDList count: ").concat(i2.length);
          xe.l("".concat(n3, " ").concat(u2));
          var c2 = 2, l2 = [];
          true === a2 && (c2 = 1);
          var p2 = m(i2);
          i2.length > 500 && (p2 = i2.slice(0, 500), xe.w("".concat(n3, " ").concat(Kt(500)))), p2.forEach(function(e4) {
            l2.push({ userID: e4, markType: [s3] });
          }), p2 = null;
          var d2 = new ka("markGroupMemberList");
          return d2.setMessage("".concat(u2)), this.request({ protocolName: bs, requestData: { groupID: o2, operationType: c2, memberList: l2 } }).then(function(e4) {
            var o3 = e4.data.memberList, s4 = void 0 === o3 ? [] : o3, a3 = [], r3 = [];
            s4.length === i2.length ? a3.push.apply(a3, m(i2)) : (s4.forEach(function(e5) {
              a3.push(e5.userID);
            }), i2.forEach(function(e5) {
              a3.includes(e5) || r3.push(e5);
            }));
            var u3 = "success count:".concat(a3.length, " fail count:").concat(r3.length);
            return d2.setNetworkType(t2.getNetworkType()).setMessage(u3).end(), xe.l("".concat(n3, " ok. ").concat(u3)), Ka({ successUserIDList: a3, failureUserIDList: r3 });
          }).catch(function(e4) {
            return t2.probeNetwork().then(function(t3) {
              var n4 = v(t3, 2), o3 = n4[0], s4 = n4[1];
              d2.setError(e4, o3, s4).end();
            }), xe.e("".concat(n3, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "_getGroupMemberProfileAdvance", value: function(e3) {
          return this.request({ protocolName: Ns, requestData: t(t({}, e3), {}, { memberInfoFilter: e3.memberInfoFilter ? e3.memberInfoFilter : ["Role", "JoinTime", "NameCard", "ShutUpUntil"] }) });
        } }, { key: "_updateLocalGroupMemberMap", value: function(e3, t2) {
          var n3 = this;
          return st(t2) && 0 !== t2.length ? t2.map(function(t3) {
            return n3.hasLocalGroupMember(e3, t3.userID) ? n3.getLocalGroupMemberInfo(e3, t3.userID).updateMember(t3) : n3.setLocalGroupMember(e3, new Fr(t3)), n3.getLocalGroupMemberInfo(e3, t3.userID);
          }) : [];
        } }, { key: "deleteLocalGroupMembers", value: function(e3, t2) {
          var n3 = this.groupMemberListMap.get(e3);
          n3 && t2.forEach(function(e4) {
            n3.delete(e4);
          });
        } }, { key: "getLocalGroupMemberInfo", value: function(e3, t2) {
          return this.groupMemberListMap.has(e3) ? this.groupMemberListMap.get(e3).get(t2) : null;
        } }, { key: "setLocalGroupMember", value: function(e3, t2) {
          if (this.groupMemberListMap.has(e3))
            this.groupMemberListMap.get(e3).set(t2.userID, t2);
          else {
            var n3 = (/* @__PURE__ */ new Map()).set(t2.userID, t2);
            this.groupMemberListMap.set(e3, n3);
          }
        } }, { key: "getLocalGroupMemberList", value: function(e3) {
          return this.groupMemberListMap.get(e3);
        } }, { key: "hasLocalGroupMember", value: function(e3, t2) {
          return this.groupMemberListMap.has(e3) && this.groupMemberListMap.get(e3).has(t2);
        } }, { key: "hasLocalGroupMemberMap", value: function(e3) {
          return this.groupMemberListMap.has(e3);
        } }, { key: "reset", value: function() {
          this.groupMemberListMap.clear();
        } }]), s2;
      }(ro), xr = ["topicID", "topicName", "avatar", "introduction", "notification", "unreadCount", "muteAllMembers", "customData", "groupAtInfoList", "nextMessageSeq", "selfInfo"], Vr = function(e2, t2) {
        return jt(e2) ? { lastTime: 0, lastSequence: 0, fromAccount: "", payload: null, type: "", messageForShow: "", nick: "", version: 0, cloudCustomData: "", isRevoked: false, revoker: null } : { lastTime: e2.time || 0, lastSequence: e2.sequence || 0, fromAccount: e2.from || "", payload: e2.payload || null, type: e2.type || "", messageForShow: xt(e2.type, e2.payload, t2), nick: e2.nick || "", version: e2.version || 0, cloudCustomData: e2.cloudCustomData || "", isRevoked: e2.isRevoked || false, revoker: e2.revoker || null };
      }, Br = function() {
        function e2(t2, n2) {
          o(this, e2), this.topicID = "", this.topicName = "", this.avatar = "", this.introduction = "", this.notification = "", this.unreadCount = 0, this.muteAllMembers = false, this.customData = "", this.groupAtInfoList = [], this.nextMessageSeq = 0, this.lastMessage = Vr(t2.lastMessage, n2), this.selfInfo = { muteTime: 0, readedSequence: 0, messageRemindType: "", excludedUnreadSequenceList: void 0 }, this._initTopic(t2);
        }
        return a(e2, [{ key: "_initTopic", value: function(e3) {
          for (var t2 in e3)
            xr.indexOf(t2) < 0 || ("selfInfo" === t2 ? this.updateSelfInfo(e3[t2]) : this[t2] = "muteAllMembers" === t2 ? 1 === e3[t2] : e3[t2]);
        } }, { key: "updateUnreadCount", value: function() {
          var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          this.unreadCount = e3;
        } }, { key: "updateNextMessageSeq", value: function(e3) {
          this.nextMessageSeq = e3;
        } }, { key: "updateLastMessage", value: function(e3) {
          this.lastMessage = Vr(e3);
        } }, { key: "updateGroupAtInfoList", value: function(e3) {
          this.groupAtInfoList = JSON.parse(JSON.stringify(e3));
        } }, { key: "updateTopic", value: function(e3) {
          at(e3.selfInfo) || this.updateSelfInfo(e3.selfInfo), at(e3.muteAllMembers) || (this.muteAllMembers = 1 === e3.muteAllMembers), pt(this, e3, ["groupID", "lastMessageTime", "selfInfo", "muteAllMembers", "lastMsg"]);
        } }, { key: "updateSelfInfo", value: function(e3) {
          return 0 !== pt(this.selfInfo, e3, [], [""]);
        } }, { key: "reduceUnreadCount", value: function() {
          return this.unreadCount >= 1 && (this.unreadCount -= 1, true);
        } }, { key: "isLastMessageRevoked", value: function(e3) {
          return e3.sequence === this.lastMessage.lastSequence;
        } }, { key: "setLastMessageRevoked", value: function(e3) {
          this.lastMessage.isRevoked = e3;
        } }, { key: "setLastMessageRevoker", value: function(e3) {
          this.lastMessage.revoker = e3;
        } }]), e2;
      }(), Hr = function(e2) {
        i(s2, e2);
        var n2 = f(s2);
        function s2(e3) {
          var t2;
          return o(this, s2), (t2 = n2.call(this, e3))._n = "TopicModule", t2._topicMap = /* @__PURE__ */ new Map(), t2._getTopicTimeMap = /* @__PURE__ */ new Map(), t2.TOPIC_CACHE_TIME = 300, t2.TOPIC_LAST_ACTIVE_TIME = 3600, t2.getInnerEmitterInstance().on($a, t2._onCloudConfigUpdated, _(t2)), t2;
        }
        return a(s2, [{ key: "_onCloudConfigUpdated", value: function() {
          var e3 = this.getCloudConfig("topic_cache_time"), t2 = this.getCloudConfig("topic_last_active_time");
          at(e3) || (this.TOPIC_CACHE_TIME = Number(e3)), at(t2) || (this.TOPIC_LAST_ACTIVE_TIME = Number(t2));
        } }, { key: "onTopicCreated", value: function(e3) {
          var t2 = e3.groupID;
          this.resetGetTopicTime(t2), this.emitOuterEvent(E.TOPIC_CREATED, e3);
        } }, { key: "onTopicDeleted", value: function(e3) {
          var t2 = this, n3 = e3.groupID, o2 = e3.topicIDList;
          (void 0 === o2 ? [] : o2).forEach(function(e4) {
            t2._deleteLocalTopic(n3, e4);
          }), this.emitOuterEvent(E.TOPIC_DELETED, e3);
        } }, { key: "onTopicMessageRemindTypeUpdated", value: function(e3) {
          var t2 = e3.groupID, n3 = e3.topicID, o2 = e3.messageRemindType, s3 = this.getLocalTopic(t2, n3);
          if (s3) {
            var a2 = s3.updateSelfInfo({ messageRemindType: o2 });
            a2 && this.emitOuterEvent(E.TOPIC_UPDATED, { groupID: t2, topic: s3 }), xe.d("".concat(this._n, ".onTopicMessageRemindTypeUpdated topicID:").concat(n3) + " messageRemindType:".concat(o2, " isTopicUpdated:").concat(a2));
          }
        } }, { key: "onTopicProfileUpdated", value: function(e3) {
          var t2 = e3.groupID, n3 = e3.topicID, o2 = this.getLocalTopic(t2, n3);
          o2 && (o2.updateTopic(e3), this.emitOuterEvent(E.TOPIC_UPDATED, { groupID: t2, topic: o2 }));
        } }, { key: "onConversationProxy", value: function(e3) {
          var t2 = e3.topicID, n3 = e3.unreadCount, o2 = e3.groupAtInfoList, s3 = qt(t2), a2 = this.getLocalTopic(s3, t2), r2 = false;
          a2 && (at(n3) || a2.unreadCount === n3 || (a2.updateUnreadCount(n3), r2 = true), at(o2) || (a2.updateGroupAtInfoList(o2), r2 = true)), r2 && this.emitOuterEvent(E.TOPIC_UPDATED, { groupID: s3, topic: a2 });
        } }, { key: "onMessageSent", value: function(e3) {
          var t2 = e3.groupID, n3 = e3.topicID, o2 = e3.lastMessage, s3 = this.getLocalTopic(t2, n3);
          s3 && (s3.nextMessageSeq += 1, s3.updateLastMessage(o2), this.emitOuterEvent(E.TOPIC_UPDATED, { groupID: t2, topic: s3 }));
        } }, { key: "onMessageModified", value: function(e3) {
          var t2 = e3.to, n3 = e3.time, o2 = e3.sequence, s3 = e3.elements, a2 = e3.cloudCustomData, r2 = e3.messageVersion, i2 = qt(t2), u2 = this.getLocalTopic(i2, t2);
          if (u2) {
            var c2 = u2.lastMessage;
            xe.d("".concat(this._n, ".onMessageModified topicID:").concat(t2, " lastMessage:"), JSON.stringify(c2), "options:", JSON.stringify(e3)), c2 && (null === c2.payload || c2.lastTime === n3 && c2.lastSequence === o2 && c2.version !== r2) && (c2.type = s3[0].type, c2.payload = s3[0].content, c2.messageForShow = xt(c2.type, c2.payload, this.isIntl()), c2.cloudCustomData = a2, c2.version = r2, c2.lastSequence = o2, c2.lastTime = n3, this.emitOuterEvent(E.TOPIC_UPDATED, { groupID: i2, topic: u2 }));
          }
        } }, { key: "onMessageRevoked", value: function(e3) {
          var t2 = this;
          if (0 !== e3.length) {
            var n3 = null, o2 = null, s3 = false;
            e3.forEach(function(e4) {
              var a2 = e4.to;
              o2 = qt(a2), (n3 = t2.getLocalTopic(o2, a2)) && (n3.reduceUnreadCount() && (s3 = true), n3.isLastMessageRevoked(e4) && (n3.setLastMessageRevoked(true), n3.setLastMessageRevoker(e4.revoker), s3 = true));
            }), s3 && this.emitOuterEvent(E.TOPIC_UPDATED, { groupID: o2, topic: n3 });
          }
        } }, { key: "isLastMessageRevoked", value: function(e3) {
          var t2 = e3.topicID, n3 = e3.sequence, o2 = qt(t2), s3 = this.getLocalTopic(o2, t2), a2 = false;
          return s3 && (a2 = s3.isLastMessageRevoked({ sequence: n3 })), a2;
        } }, { key: "getJoinedCommunityList", value: function() {
          return this.getModule(Un).getGroupList({ isGroupWithTopicOnly: true }).then(function(e3) {
            var t2 = e3.data.groupList;
            return Ka({ groupList: void 0 === t2 ? [] : t2 });
          }).catch(function(e3) {
            return Ja(e3);
          });
        } }, { key: "createTopicInCommunity", value: function(e3) {
          var n3 = this, o2 = "".concat(this._n, ".").concat("createTopicInCommunity"), s3 = e3.topicID;
          if (!at(s3) && !Dt(s3))
            return Ja({ code: da.ILLEGAL_TOPIC_ID });
          if (e3.topicName && false === this._filterProfanity("topicName", e3))
            return Ja({ code: da.PROFANITY_FOUND });
          if (e3.introduction && false === this._filterProfanity("introduction", e3))
            return Ja({ code: da.PROFANITY_FOUND });
          if (e3.notification && false === this._filterProfanity("notification", e3))
            return Ja({ code: da.PROFANITY_FOUND });
          var a2 = new ka("createTopicInCommunity");
          return this.request({ protocolName: $s, requestData: t({}, e3) }).then(function(s4) {
            var r2 = s4.data.topicID;
            return a2.setMessage("topicID:".concat(r2)).setNetworkType(n3.getNetworkType()).end(), xe.l("".concat(o2, " ok")), n3._updateTopicMap([t(t({}, e3), {}, { topicID: r2 })]), Ka({ topicID: r2 });
          }).catch(function(e4) {
            return n3.probeNetwork().then(function(t2) {
              var n4 = v(t2, 2), o3 = n4[0], s4 = n4[1];
              a2.setError(e4, o3, s4).end();
            }), xe.e("".concat(o2, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "deleteTopicFromCommunity", value: function(e3) {
          var t2 = this, n3 = "".concat(this._n, ".").concat("deleteTopicFromCommunity"), o2 = e3.groupID, s3 = e3.topicIDList, a2 = void 0 === s3 ? [] : s3, r2 = new ka("deleteTopicFromCommunity");
          return r2.setMessage("groupID:".concat(o2, " topicIDList:").concat(a2)), this.request({ protocolName: ea, requestData: { groupID: o2, topicIDList: a2 } }).then(function(e4) {
            var n4 = e4.data.resultList, s4 = [], a3 = [];
            (void 0 === n4 ? [] : n4).forEach(function(e5) {
              var t3 = e5.topicID, n5 = e5.errorCode, o3 = e5.errorInfo;
              0 === n5 ? s4.push({ topicID: t3 }) : a3.push({ topicID: t3, code: n5, message: o3 });
            });
            var i2 = "success count:".concat(s4.length, ", fail count:").concat(a3.length);
            return r2.setMoreMessage("".concat(i2)).setNetworkType(t2.getNetworkType()).end(), xe.l("".concat(i2)), s4.forEach(function(e5) {
              t2._deleteLocalTopic(o2, e5.topicID);
            }), Ka({ successTopicList: s4, failureTopicList: a3 });
          }).catch(function(e4) {
            return t2.probeNetwork().then(function(t3) {
              var n4 = v(t3, 2), o3 = n4[0], s4 = n4[1];
              r2.setError(e4, o3, s4).end();
            }), xe.e("".concat(n3, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "updateTopicProfile", value: function(e3) {
          var n3 = this, o2 = "".concat(this._n, ".").concat("updateTopicProfile");
          if (xe.l("".concat(o2, " options:"), e3), e3.topicName && false === this._filterProfanity("topicName", e3))
            return Ja({ code: da.PROFANITY_FOUND });
          if (e3.introduction && false === this._filterProfanity("introduction", e3))
            return Ja({ code: da.PROFANITY_FOUND });
          if (e3.notification && false === this._filterProfanity("notification", e3))
            return Ja({ code: da.PROFANITY_FOUND });
          var s3 = new ka("updateTopicProfile");
          return s3.setMessage("groupID:".concat(e3.groupID, " topicID:").concat(e3.topicID)), at(e3.muteAllMembers) || (e3.muteAllMembers = true === e3.muteAllMembers ? "On" : "Off"), this.request({ protocolName: ta, requestData: t({}, e3) }).then(function() {
            return s3.setNetworkType(n3.getNetworkType()).end(), xe.l("".concat(o2, " ok")), n3._updateTopicMap([e3]), Ka({ topic: n3.getLocalTopic(e3.groupID, e3.topicID) });
          }).catch(function(e4) {
            return n3.probeNetwork().then(function(t2) {
              var n4 = v(t2, 2), o3 = n4[0], a2 = n4[1];
              s3.setError(e4, o3, a2).end();
            }), xe.e("".concat(o2, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "getTopicList", value: function(e3) {
          var n3 = this, o2 = "".concat(this._n, ".").concat("getTopicList"), s3 = e3.groupID, a2 = e3.topicIDList, r2 = void 0 === a2 ? [] : a2, i2 = 0 === r2.length, u2 = new ka("getTopicList");
          if (u2.setMessage("groupID:".concat(s3)), this._getTopicTimeMap.has(s3)) {
            var c2 = this._getTopicTimeMap.get(s3), l2 = c2.isGetAll, p2 = c2.time;
            if ((l2 || !l2 && !i2) && Date.now() - p2 < 1e3 * this.TOPIC_CACHE_TIME) {
              var d2 = this._getLocalTopicList(s3, r2);
              if (i2 || d2.length === r2.length)
                return u2.setNetworkType(this.getNetworkType()).setMoreMessage("from cache, topic count:".concat(d2.length)).end(), xe.l("".concat(o2, " groupID:").concat(s3, " from cache, topic count:").concat(d2.length)), za({ successTopicList: d2, failureTopicList: [] });
            }
          }
          return this.request({ protocolName: na, requestData: { groupID: s3, topicIDList: r2 } }).then(function(e4) {
            var a3 = e4.data.topicInfoList, r3 = [], c3 = [], l3 = [];
            (void 0 === a3 ? [] : a3).forEach(function(e5) {
              var n4 = e5.topic, o3 = e5.selfInfo, s4 = e5.errorCode, a4 = e5.errorInfo, i3 = n4.topicID;
              0 === s4 ? (r3.push(t(t({}, n4), {}, { selfInfo: o3 })), c3.push(i3)) : l3.push({ topicID: i3, code: s4, message: a4 });
            }), n3._updateTopicMap(r3), n3._handleTopicAtInfo(r3);
            var p3 = "success count:".concat(c3.length, ", fail count:").concat(l3.length);
            u2.setNetworkType(n3.getNetworkType()).setMoreMessage("".concat(p3)).end(), xe.l("".concat(o2, " groupID:").concat(s3, " from remote, ").concat(p3));
            var d3 = [];
            return jt(c3) || (n3._getTopicTimeMap.set(s3, { time: Date.now(), isGetAll: i2 }), d3 = n3._getLocalTopicList(s3, c3)), Ka({ successTopicList: d3, failureTopicList: l3 });
          }).catch(function(e4) {
            return n3.probeNetwork(e4).then(function(t2) {
              var n4 = v(t2, 2), o3 = n4[0], s4 = n4[1];
              u2.setError(e4, o3, s4).end();
            }), xe.e("".concat(o2, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "hasLocalTopic", value: function(e3, t2) {
          return !!this._topicMap.has(e3) && this._topicMap.get(e3).has(t2);
        } }, { key: "getLocalTopic", value: function(e3, t2) {
          var n3 = null;
          return this._topicMap.has(e3) && (n3 = this._topicMap.get(e3).get(t2)), n3;
        } }, { key: "_getLocalTopicList", value: function(e3) {
          var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], n3 = this._topicMap.get(e3), o2 = [];
          return n3 && (o2 = m(n3.values())), 0 === t2.length ? o2 : o2.filter(function(e4) {
            return t2.includes(e4.topicID);
          });
        } }, { key: "_deleteLocalTopic", value: function(e3, t2) {
          this._topicMap.has(e3) && (this._topicMap.get(e3).delete(t2), xe.l("".concat(this._n, "._deleteLocalTopic groupID:").concat(e3, " topicID:").concat(t2)));
        } }, { key: "_updateTopicMap", value: function(e3) {
          var t2 = this, n3 = [];
          (e3.forEach(function(e4) {
            var o2 = e4.groupID, s3 = e4.topicID, a2 = null;
            t2._topicMap.has(o2) || t2._topicMap.set(o2, /* @__PURE__ */ new Map()), t2._topicMap.get(o2).has(s3) ? (a2 = t2._topicMap.get(o2).get(s3)).updateTopic(e4) : (t2._getTopicLastMessage(e4), a2 = new Br(e4, t2.isIntl()), t2._topicMap.get(o2).set(s3, a2));
            var r2 = t2._computeUnreadCount(a2);
            a2.updateUnreadCount(r2), n3.push({ conversationID: "".concat(S.CONV_GROUP).concat(s3), type: S.CONV_TOPIC, unreadCount: r2 });
          }), n3.length > 0) && this.getModule(Fn).updateTopicConversation(n3);
        } }, { key: "resetGetTopicTime", value: function(e3) {
          var t2 = this;
          at(e3) ? m(this._getTopicTimeMap.keys()).forEach(function(e4) {
            t2._getTopicTimeMap.set(e4, 0);
          }) : this._getTopicTimeMap.set(e3, 0);
        } }, { key: "getTopicListOnReconnected", value: function() {
          var e3 = this, t2 = m(this._topicMap.keys()), n3 = [];
          t2.forEach(function(t3) {
            var o2 = [];
            e3._getLocalTopicList(t3).forEach(function(t4) {
              var n4 = t4.lastMessage.lastTime, s3 = void 0 === n4 ? 0 : n4;
              Date.now() - 1e3 * s3 < 1e3 * e3.TOPIC_LAST_ACTIVE_TIME && o2.push(t4.topicID);
            }), o2.length > 0 && n3.push({ groupID: t3, topicIDList: o2 });
          }), xe.l("".concat(this._n, ".getTopicListOnReconnected. active community count:").concat(n3.length)), this._relayGetTopicList(n3);
        } }, { key: "_relayGetTopicList", value: function(e3) {
          var t2 = this;
          if (0 !== e3.length) {
            var n3 = e3.shift(), o2 = n3.topicIDList.length > 5 ? "topicIDList.length:".concat(n3.topicIDList.length) : "topicIDList:".concat(n3.topicIDList), s3 = new ka("relayGetTopicList");
            s3.setMessage(o2), xe.l("".concat(this._n, "._relayGetTopicList. ").concat(o2)), this.getTopicList(n3).then(function() {
              s3.setNetworkType(t2.getNetworkType()).end(), t2._relayGetTopicList(e3);
            }).catch(function(n4) {
              t2.probeNetwork().then(function(e4) {
                var t3 = v(e4, 2), o3 = t3[0], a2 = t3[1];
                s3.setError(n4, o3, a2).end();
              }), t2._relayGetTopicList(e3);
            });
          }
        } }, { key: "_handleTopicAtInfo", value: function(e3) {
          var n3 = this;
          0 !== e3.length && e3.forEach(function(e4) {
            var o2 = e4.groupID, s3 = e4.topicID, a2 = e4.groupAtInfoList, r2 = [];
            at(a2) || (a2.forEach(function(e5) {
              r2.push(t(t({}, e5), {}, { groupID: o2, topicID: s3 }));
            }), n3.getModule(Fn).onNewGroupAtTips({ dataList: r2 }));
          });
        } }, { key: "_getTopicLastMessage", value: function(e3) {
          if (!at(e3.lastMsg)) {
            var t2 = { time: e3.lastMsg.time, sequence: e3.lastMsg.sequence, from: e3.lastMsg.from, payload: e3.lastMsg.elements[0] ? e3.lastMsg.elements[0].content : null, type: e3.lastMsg.elements[0] ? e3.lastMsg.elements[0].type : "", nick: e3.lastMsg.nick, version: e3.lastMsg.messageVersion, cloudCustomData: e3.lastMsg.cloudCustomData, isRevoked: 2 === e3.lastMsg.isPlaceMessage, revoker: jt(e3.lastMsg.revokerInfo) ? null : e3.lastMsg.revokerInfo.revoker };
            e3.lastMessage = t2;
          }
        } }, { key: "deleteTopicListInCommunity", value: function(e3) {
          var t2 = this, n3 = this._getLocalTopicList(e3), o2 = this.getModule(Fn);
          n3.forEach(function(n4) {
            var s3 = n4.topicID;
            t2._deleteLocalTopic(e3, s3), t2._getTopicTimeMap.delete(e3), o2.deleteLocalConversation("".concat(S.CONV_GROUP).concat(s3));
          });
        } }, { key: "_computeUnreadCount", value: function(e3) {
          var t2 = e3.selfInfo, n3 = t2.excludedUnreadSequenceList, o2 = t2.readedSequence, s3 = e3.nextMessageSeq - e3.selfInfo.readedSequence - 1;
          if (st(n3)) {
            var a2 = 0;
            n3.forEach(function(t3) {
              t3 >= o2 && t3 <= e3.nextMessageSeq - 1 && (a2 += 1);
            }), a2 >= 1 && (s3 -= a2);
          }
          return s3 < 0 ? 0 : s3;
        } }, { key: "_filterProfanity", value: function(e3, t2) {
          var n3 = this.getModule(no);
          if (!n3)
            return true;
          var o2 = n3.filterText(t2[e3], z), s3 = o2.isAllowedToSend, a2 = o2.modifiedText;
          return true === s3 && (t2[e3] = a2, true);
        } }, { key: "updateLastMessage", value: function(e3, t2) {
          var n3 = qt(e3), o2 = this.getLocalTopic(n3, e3);
          if (o2) {
            var s3 = t2.sequence + 1;
            o2.updateNextMessageSeq(s3), o2.updateLastMessage(t2), this.emitOuterEvent(E.TOPIC_UPDATED, { groupID: n3, topic: o2 });
          }
        } }, { key: "getMessageExtensions", value: function(e3, t2) {
          xe.l("".concat(this._n, ".getMessageExtensions startSequence:").concat(t2));
          var n3 = qt(e3.to);
          return this.request({ protocolName: Es, requestData: { groupID: n3, topicID: e3.to, messageSequence: e3.sequence, startSequence: t2 } });
        } }, { key: "modifyMessageExtensions", value: function(e3, t2) {
          var n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
          xe.l("".concat(this._n, ".modifyMessageExtensions operateType:").concat(n3));
          var o2 = qt(e3.to);
          return this.request({ protocolName: Ds, requestData: { groupID: o2, topicID: e3.to, messageSequence: e3.sequence, extensionList: t2, operateType: n3 } });
        } }, { key: "reset", value: function() {
          xe.l("".concat(this._n, ".reset")), this._topicMap.clear(), this._getTopicTimeMap.clear(), this.TOPIC_CACHE_TIME = 300, this.TOPIC_LAST_ACTIVE_TIME = 3600;
        } }]), s2;
      }(ro), Kr = function() {
        function e2(t2) {
          o(this, e2), this._userModule = t2, this._n = "ProfileHandler", this.TAG = "profile", this.accountProfileMap = /* @__PURE__ */ new Map(), this.expirationTime = 864e5;
        }
        return a(e2, [{ key: "setExpirationTime", value: function(e3) {
          this.expirationTime = e3;
        } }, { key: "getUserProfile", value: function(e3) {
          var t2 = this, n2 = "".concat(this._n, ".").concat("getUserProfile"), o2 = e3.userIDList;
          e3.fromAccount = this._userModule.getMyAccount(), o2.length > 100 && (xe.w("".concat(n2, " ").concat(Kt(100))), o2.length = 100);
          for (var s2, a2 = [], r2 = [], i2 = 0, u2 = o2.length; i2 < u2; i2++)
            s2 = o2[i2], this._userModule.isMyFriend(s2) && this._contains(s2) ? r2.push(this._getProfileFromMap(s2)) : a2.push(s2);
          if (0 === a2.length)
            return za(r2);
          e3.toAccount = a2;
          var c2 = e3.bFromGetMyProfile || false, l2 = [];
          e3.toAccount.forEach(function(e4) {
            l2.push({ toAccount: e4, standardSequence: 0, customSequence: 0 });
          }), e3.userItem = l2;
          var p2 = new ka("getUserProfile");
          return p2.setMessage(o2.length > 5 ? "userIDList.length:".concat(o2.length) : "userIDList:".concat(o2)), this._userModule.request({ protocolName: fo, requestData: e3 }).then(function(e4) {
            p2.setNetworkType(t2._userModule.getNetworkType()).end(), xe.i("".concat(n2, " ok"));
            var o3 = t2._handleResponse(e4).concat(r2);
            return Ka(c2 ? o3[0] : o3);
          }).catch(function(e4) {
            return t2._userModule.probeNetwork().then(function(t3) {
              var n3 = v(t3, 2), o3 = n3[0], s3 = n3[1];
              p2.setError(e4, o3, s3).end();
            }), xe.e("".concat(n2, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "getMyProfile", value: function() {
          var e3 = this._userModule.getMyAccount(), t2 = "".concat(this._n, ".getMyProfile");
          if (xe.l("".concat(t2, " myAccount:").concat(e3)), this._fill(), this._contains(e3)) {
            var n2 = this._getProfileFromMap(e3);
            return xe.d("".concat(t2, " from cache, myProfile:").concat(JSON.stringify(n2))), za(n2);
          }
          return this.getUserProfile({ fromAccount: e3, userIDList: [e3], bFromGetMyProfile: true });
        } }, { key: "_handleResponse", value: function(e3) {
          var t2 = e3.data.userProfileItem;
          if (!st(t2))
            return [];
          for (var n2 = [], o2 = Date.now(), s2 = 0, a2 = t2.length; s2 < a2; s2++) {
            var r2 = t2[s2], i2 = r2.to, u2 = r2.profileItem;
            if ("@TLS#NOT_FOUND" !== i2 && "" !== i2) {
              var c2 = this._update(i2, this._getLatestProfileFromResponse(i2, u2)).latestProfile;
              n2.push(c2);
            }
          }
          return xe.l("".concat(this._n, "._handleResponse cost ").concat(Date.now() - o2, " ms")), n2;
        } }, { key: "_getLatestProfileFromResponse", value: function(e3, t2) {
          var n2 = { userID: e3, profileCustomField: [] };
          if (!jt(t2))
            for (var o2 = 0, s2 = t2.length; o2 < s2; o2++)
              if (t2[o2].tag.indexOf("Tag_Profile_Custom") > -1)
                n2.profileCustomField.push({ key: t2[o2].tag, value: t2[o2].value });
              else
                switch (t2[o2].tag) {
                  case Be.NICK:
                    n2.nick = t2[o2].value;
                    break;
                  case Be.GENDER:
                    n2.gender = t2[o2].value;
                    break;
                  case Be.BIRTHDAY:
                    n2.birthday = t2[o2].value;
                    break;
                  case Be.LOCATION:
                    n2.location = t2[o2].value;
                    break;
                  case Be.SELFSIGNATURE:
                    n2.selfSignature = t2[o2].value;
                    break;
                  case Be.ALLOWTYPE:
                    n2.allowType = t2[o2].value;
                    break;
                  case Be.LANGUAGE:
                    n2.language = t2[o2].value;
                    break;
                  case Be.AVATAR:
                    n2.avatar = t2[o2].value;
                    break;
                  case Be.MESSAGESETTINGS:
                    n2.messageSettings = t2[o2].value;
                    break;
                  case Be.ADMINFORBIDTYPE:
                    n2.adminForbidType = t2[o2].value;
                    break;
                  case Be.LEVEL:
                    n2.level = t2[o2].value;
                    break;
                  case Be.ROLE:
                    n2.role = t2[o2].value;
                    break;
                  default:
                    xe.w("".concat(this._n, "._getLatestProfileFromResponse unknown tag:"), t2[o2].tag, t2[o2].value);
                }
          return n2;
        } }, { key: "updateMyProfile", value: function(e3) {
          var t2 = this, n2 = "".concat(this._n, ".").concat("updateMyProfile");
          if (e3.nick && false === this._userModule.filterProfanity("nick", e3))
            return Ja({ code: da.PROFANITY_FOUND });
          if (e3.selfSignature && false === this._userModule.filterProfanity("selfSignature", e3))
            return Ja({ code: da.PROFANITY_FOUND });
          var o2 = new ka("updateMyProfile");
          o2.setMessage(JSON.stringify(e3));
          var s2 = new ur().validate(e3);
          if (!s2.valid)
            return o2.setCode(da.UPDATE_PROFILE_INVALID_PARAM).setMoreMessage("info:".concat(s2.tips)).setNetworkType(this._userModule.getNetworkType()).end(), xe.e("".concat(n2, " info:").concat(s2.tips)), Ja({ code: da.UPDATE_PROFILE_INVALID_PARAM });
          var a2 = [];
          for (var r2 in e3)
            Object.prototype.hasOwnProperty.call(e3, r2) && ("profileCustomField" === r2 ? e3.profileCustomField.forEach(function(e4) {
              a2.push({ tag: e4.key, value: e4.value });
            }) : a2.push({ tag: Be[r2.toUpperCase()], value: e3[r2] }));
          if (0 === a2.length) {
            var i2 = new Wa({ code: da.UPDATE_PROFILE_NO_KEY });
            return o2.setError(i2, true, this._userModule.getNetworkType()).end(), xe.e("".concat(n2, " failed. error:"), i2), Ja(i2);
          }
          var u2 = this._userModule.getMyAccount();
          return this._userModule.request({ protocolName: vo, requestData: { fromAccount: u2, profileItem: a2 } }).then(function(s3) {
            o2.setNetworkType(t2._userModule.getNetworkType()).end(), xe.i("".concat(n2, " ok"));
            var a3 = t2._update(u2, e3), r3 = a3.isProfileUpdated, i3 = a3.latestProfile;
            return true === r3 && t2._userModule.emitOuterEvent(E.PROFILE_UPDATED, [i3]), za(i3);
          }).catch(function(e4) {
            return t2._userModule.probeNetwork().then(function(t3) {
              var n3 = v(t3, 2), s3 = n3[0], a3 = n3[1];
              o2.setError(e4, s3, a3).end();
            }), xe.e("".concat(n2, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "onProfileModified", value: function(e3) {
          var t2 = e3.dataList;
          if (!jt(t2)) {
            var n2, o2 = t2.length;
            xe.d("".concat(this._n, ".onProfileModified count:").concat(o2, " dataList:"), e3.dataList);
            for (var s2 = [], a2 = 0; a2 < o2; a2++) {
              n2 = t2[a2].userID;
              var r2 = this._update(n2, this._getLatestProfileFromResponse(n2, t2[a2].profileList)), i2 = r2.isProfileUpdated, u2 = r2.latestProfile;
              true === i2 && s2.push(u2);
            }
            s2.length > 0 && (this._userModule.emitInnerEvent(er, s2), this._userModule.emitOuterEvent(E.PROFILE_UPDATED, s2));
          }
        } }, { key: "_fill", value: function() {
          if (0 === this.accountProfileMap.size) {
            for (var e3 = this._getCachedProfiles(), t2 = Date.now(), n2 = 0, o2 = e3.length; n2 < o2; n2++)
              t2 - e3[n2].lastUpdatedTime < this.expirationTime && this.accountProfileMap.set(e3[n2].userID, e3[n2]);
            xe.l("".concat(this._n, "._fill from cache, size:").concat(this.accountProfileMap.size));
          }
        } }, { key: "_update", value: function(e3, t2) {
          var n2, o2 = false, s2 = Date.now();
          this._contains(e3) ? (n2 = this._getProfileFromMap(e3), t2.profileCustomField && true === It(n2.profileCustomField, t2.profileCustomField) && (n2.lastUpdatedTime = s2, o2 = true), pt(n2, t2, ["profileCustomField"]) > 0 && (n2.lastUpdatedTime = s2, o2 = true)) : (n2 = new ur(t2), (this._userModule.isMyFriend(e3) || e3 === this._userModule.getMyAccount()) && (n2.lastUpdatedTime = s2, o2 = true, this.accountProfileMap.set(e3, n2)));
          return this._flush(e3 === this._userModule.getMyAccount()), xe.l("".concat(this._n, "._update account:").concat(e3, " isProfileUpdated:").concat(o2)), { isProfileUpdated: o2, latestProfile: n2 };
        } }, { key: "_flush", value: function(e3) {
          var t2 = m(this.accountProfileMap.values()), n2 = this._userModule.getStorageModule();
          xe.d("".concat(this._n, "._flush length:").concat(t2.length, " flushAtOnce:").concat(e3)), n2.setItem(this.TAG, t2, e3);
        } }, { key: "_contains", value: function(e3) {
          return this.accountProfileMap.has(e3);
        } }, { key: "_getProfileFromMap", value: function(e3) {
          return this.accountProfileMap.get(e3);
        } }, { key: "_getCachedProfiles", value: function() {
          var e3 = this._userModule.getStorageModule().getItem(this.TAG);
          return jt(e3) ? [] : e3;
        } }, { key: "onConversationsProfileUpdated", value: function(e3) {
          for (var t2, n2, o2, s2 = [], a2 = 0, r2 = e3.length; a2 < r2; a2++)
            n2 = (t2 = e3[a2]).userID, this._userModule.isMyFriend(n2) && (this._contains(n2) ? (o2 = this._getProfileFromMap(n2), pt(o2, t2) > 0 && s2.push(n2)) : s2.push(t2.userID));
          0 !== s2.length && (xe.i("".concat(this._n, ".onConversationsProfileUpdated toAccountList:").concat(s2)), this.getUserProfile({ userIDList: s2 }));
        } }, { key: "getNickAndAvatarByUserID", value: function(e3) {
          if (this._contains(e3)) {
            var t2 = this._getProfileFromMap(e3);
            return { nick: t2.nick, avatar: t2.avatar };
          }
          return { nick: "", avatar: "" };
        } }, { key: "reset", value: function() {
          this._flush(true), this.accountProfileMap.clear();
        } }]), e2;
      }(), Wr = a(function e2(t2) {
        o(this, e2), jt || (this.userID = t2.userID || "", this.timeStamp = t2.timeStamp || 0);
      }), Yr = function() {
        function e2(t2) {
          o(this, e2), this._userModule = t2, this._n = "BlacklistHandler", this._blacklistMap = /* @__PURE__ */ new Map(), this.startIndex = 0, this.maxLimited = 100, this.currentSequence = 0;
        }
        return a(e2, [{ key: "getLocalBlacklist", value: function() {
          return m(this._blacklistMap.keys());
        } }, { key: "getBlacklist", value: function() {
          var e3 = this, t2 = "".concat(this._n, ".getBlacklist"), n2 = { fromAccount: this._userModule.getMyAccount(), maxLimited: this.maxLimited, startIndex: 0, lastSequence: this.currentSequence }, o2 = new ka("getBlacklist");
          return this._userModule.request({ protocolName: mo, requestData: n2 }).then(function(n3) {
            var s2 = n3.data, a2 = s2.blackListItem, r2 = s2.currentSequence, i2 = jt(a2) ? 0 : a2.length;
            o2.setNetworkType(e3._userModule.getNetworkType()).setMessage("count:".concat(i2)).end(), xe.i("".concat(t2, " ok")), e3.currentSequence = r2, e3._handleResponse(a2, true), e3._userModule.emitOuterEvent(E.BLACKLIST_UPDATED, m(e3._blacklistMap.keys()));
          }).catch(function(n3) {
            return e3._userModule.probeNetwork().then(function(e4) {
              var t3 = v(e4, 2), s2 = t3[0], a2 = t3[1];
              o2.setError(n3, s2, a2).end();
            }), xe.e("".concat(t2, " failed. error:"), n3), Ja(n3);
          });
        } }, { key: "addBlacklist", value: function(e3) {
          var t2 = this, n2 = new ka("addToBlacklist"), o2 = "".concat(this._n, ".addBlacklist"), s2 = this._userModule.getMyAccount();
          if (1 === e3.userIDList.length && e3.userIDList[0] === s2) {
            var a2 = da.CANNOT_ADD_SELF_TO_BLACKLIST, r2 = this._userModule.getErrorMessage(a2);
            n2.setCode(a2).setMessage(r2).setNetworkType(this._userModule.getNetworkType()).end();
            var i2 = new Wa({ code: a2 });
            return xe.e("".concat(o2, " failed. error:"), i2), Ja(i2);
          }
          return e3.userIDList.includes(s2) && (e3.userIDList = e3.userIDList.filter(function(e4) {
            return e4 !== s2;
          })), e3.fromAccount = this._userModule.getMyAccount(), e3.toAccount = e3.userIDList, this._userModule.request({ protocolName: Mo, requestData: e3 }).then(function(s3) {
            return n2.setNetworkType(t2._userModule.getNetworkType()).setMessage(e3.userIDList.length > 5 ? "userIDList.length:".concat(e3.userIDList.length) : "userIDList:".concat(e3.userIDList)).end(), xe.i("".concat(o2, " ok")), t2._handleResponse(s3.resultItem, true), Ka(m(t2._blacklistMap.keys()));
          }).catch(function(e4) {
            return t2._userModule.probeNetwork().then(function(t3) {
              var o3 = v(t3, 2), s3 = o3[0], a3 = o3[1];
              n2.setError(e4, s3, a3).end();
            }), xe.e("".concat(o2, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "_handleResponse", value: function(e3, t2) {
          if (!jt(e3))
            for (var n2, o2, s2, a2 = 0, r2 = e3.length; a2 < r2; a2++)
              o2 = e3[a2].to, s2 = e3[a2].resultCode, (at(s2) || 0 === s2) && (t2 ? ((n2 = this._blacklistMap.has(o2) ? this._blacklistMap.get(o2) : new Wr()).userID = o2, !jt(e3[a2].addBlackTimeStamp) && (n2.timeStamp = e3[a2].addBlackTimeStamp), this._blacklistMap.set(o2, n2)) : this._blacklistMap.has(o2) && (n2 = this._blacklistMap.get(o2), this._blacklistMap.delete(o2)));
          xe.l("".concat(this._n, "._handleResponse total:").concat(this._blacklistMap.size, " bAdd:").concat(t2));
        } }, { key: "deleteBlacklist", value: function(e3) {
          var t2 = this, n2 = "".concat(this._n, ".deleteBlacklist"), o2 = new ka("removeFromBlacklist");
          return e3.fromAccount = this._userModule.getMyAccount(), e3.toAccount = e3.userIDList, this._userModule.request({ protocolName: yo, requestData: e3 }).then(function(s2) {
            return o2.setNetworkType(t2._userModule.getNetworkType()).setMessage(e3.userIDList.length > 5 ? "userIDList.length:".concat(e3.userIDList.length) : "userIDList:".concat(e3.userIDList)).end(), xe.i("".concat(n2, " ok")), t2._handleResponse(s2.data.resultItem, false), Ka(m(t2._blacklistMap.keys()));
          }).catch(function(e4) {
            return t2._userModule.probeNetwork().then(function(t3) {
              var n3 = v(t3, 2), s2 = n3[0], a2 = n3[1];
              o2.setError(e4, s2, a2).end();
            }), xe.e("".concat(n2, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "onAccountDeleted", value: function(e3) {
          for (var t2, n2 = [], o2 = 0, s2 = e3.length; o2 < s2; o2++)
            t2 = e3[o2], this._blacklistMap.has(t2) && (this._blacklistMap.delete(t2), n2.push(t2));
          n2.length > 0 && (xe.l("".concat(this._n, ".onAccountDeleted count:").concat(n2.length, " userIDList:"), n2), this._userModule.emitOuterEvent(E.BLACKLIST_UPDATED, m(this._blacklistMap.keys())));
        } }, { key: "onAccountAdded", value: function(e3) {
          for (var t2, n2 = [], o2 = 0, s2 = e3.length; o2 < s2; o2++)
            t2 = e3[o2], this._blacklistMap.has(t2) || (this._blacklistMap.set(t2, new Wr({ userID: t2 })), n2.push(t2));
          n2.length > 0 && (xe.l("".concat(this._n, ".onAccountAdded count:").concat(n2.length, " userIDList:"), n2), this._userModule.emitOuterEvent(E.BLACKLIST_UPDATED, m(this._blacklistMap.keys())));
        } }, { key: "reset", value: function() {
          this._blacklistMap.clear(), this.startIndex = 0, this.maxLimited = 100, this.currentSequence = 0;
        } }]), e2;
      }(), jr = function(e2) {
        var t2 = String(e2).replace(/[=]+$/, ""), n2 = "";
        if (t2.length % 4 == 1)
          return "";
        for (var o2, s2, a2 = 0, r2 = 0; s2 = t2.charAt(r2++); ~s2 && (o2 = a2 % 4 ? 64 * o2 + s2 : s2, a2++ % 4) ? n2 += String.fromCharCode(255 & o2 >> (-2 * a2 & 6)) : 0)
          s2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(s2);
        try {
          return decodeURIComponent(escape(n2));
        } catch (i2) {
          return "";
        }
      }, zr = function() {
        function e2(t2) {
          o(this, e2), this._userModule = t2, this._n = "UserStatusHandler", this.MAX_QUERY_USER_COUNT = 500, this.MAX_SUBSCRIBE_USER_COUNT = 100, this.MAX_UNSUBSCRIBE_USER_COUNT = 100, this._userModule.getInnerEmitterInstance().on($a, this._onCloudConfigUpdated, this);
        }
        return a(e2, [{ key: "_onCloudConfigUpdated", value: function() {
          var e3 = this._userModule.getCloudConfig("status_query_count"), t2 = this._userModule.getCloudConfig("status_sub_count"), n2 = this._userModule.getCloudConfig("status_unsub_count");
          xe.l("".concat(this._n, "._onCloudConfigUpdated statusQueryCount:").concat(e3, " statusSubscribeCount:").concat(t2) + " statusUnsubscribeCount:".concat(n2)), at(e3) || (this.MAX_QUERY_USER_COUNT = parseInt(e3, 10)), at(e3) || (this.MAX_SUBSCRIBE_USER_COUNT = parseInt(t2, 10)), at(e3) || (this.MAX_UNSUBSCRIBE_USER_COUNT = parseInt(n2, 10));
        } }, { key: "onUserStatusUpdated", value: function(e3) {
          var t2 = e3.dataList, n2 = this._userModule.getMyUserID(), o2 = this._userModule.getModule(qn), s2 = t2.map(function(e4) {
            var t3 = e4.to, s3 = e4.statusType, a2 = e4.customStatus, r2 = jr(a2);
            return t3 === n2 && o2.setCustomStatus(r2), { userID: t3, statusType: s3, customStatus: r2 };
          });
          this._userModule.emitOuterEvent(E.USER_STATUS_UPDATED, s2);
        } }, { key: "setSelfStatus", value: function(e3) {
          var t2 = this, n2 = "".concat(this._n, ".setSelfStatus");
          if (false === this._userModule.filterProfanity("customStatus", e3))
            return Ja({ code: da.PROFANITY_FOUND });
          var o2 = new ka("setSelfStatus"), s2 = e3.customStatus;
          return this._userModule.request({ protocolName: oa, requestData: { customStatus: s2 } }).then(function(e4) {
            return o2.setNetworkType(t2._userModule.getNetworkType()).setMessage("customStatus:".concat(s2)).end(), xe.l("".concat(n2, " ok. customStatus:").concat(s2)), t2._userModule.getModule(qn).setCustomStatus(s2), Ka({ userID: t2._userModule.getMyUserID(), statusType: 1, customStatus: s2 });
          }).catch(function(e4) {
            return t2._userModule.probeNetwork().then(function(t3) {
              var n3 = v(t3, 2), s3 = n3[0], a2 = n3[1];
              o2.setError(e4, s3, a2).end();
            }), xe.e("".concat(n2, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "getUserStatus", value: function(e3) {
          var t2 = this, n2 = "".concat(this._n, ".getUserStatus"), o2 = e3.userIDList, s2 = void 0 === o2 ? [] : o2, a2 = this._userModule.getMyUserID(), r2 = m(s2), i2 = void 0, u2 = r2.indexOf(a2);
          if (u2 > -1) {
            r2.splice(u2, 1);
            var c2 = this._userModule.getModule(qn).getCustomStatus();
            i2 = { userID: a2, statusType: 1, customStatus: c2 };
          }
          if (0 === r2.length)
            return za({ successUserList: [i2], failureUserList: [] });
          if (!this._userModule.canIUse(B.USER_STATUS))
            return Ja({ code: da.CANNOT_USE_COMMERCIAL_ABILITY });
          r2.length > this.MAX_QUERY_USER_COUNT && (xe.w("".concat(n2, " ").concat(Kt(this.MAX_QUERY_USER_COUNT))), r2 = s2.slice(0, this.MAX_QUERY_USER_COUNT));
          var l2 = new ka("getUserStatus");
          return this._userModule.request({ protocolName: sa, requestData: { userIDList: r2 } }).then(function(e4) {
            var o3 = e4.data, a3 = o3.successUserList, r3 = void 0 === a3 ? [] : a3, u3 = o3.failureUserList, c3 = void 0 === u3 ? [] : u3, p2 = r3.map(function(e5) {
              var t3 = e5.userID, n3 = e5.statusType, o4 = e5.customStatus;
              return { userID: t3, statusType: n3, customStatus: jr(o4) };
            }), d2 = c3.map(function(e5) {
              var t3 = e5.userID, n3 = e5.invalidUserID, o4 = e5.errorCode, s3 = e5.errorInfo;
              return { userID: jt(n3) ? t3 : n3, code: o4, message: s3 };
            });
            at(i2) || p2.unshift(i2);
            var g2 = "userID count:".concat(s2.length, ", success count:").concat(p2.length, ", fail count:").concat(d2.length);
            return l2.setNetworkType(t2._userModule.getNetworkType()).setMessage("".concat(g2)).end(), xe.l("".concat(n2, " ok. ").concat(g2, ".")), Ka({ successUserList: p2, failureUserList: d2 });
          }).catch(function(e4) {
            return t2._userModule.probeNetwork().then(function(t3) {
              var n3 = v(t3, 2), o3 = n3[0], a3 = n3[1];
              l2.setMessage("userID count:".concat(s2.length)).setError(e4, o3, a3).end();
            }), xe.e("".concat(n2, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "subscribeUserStatus", value: function(e3) {
          var t2 = this;
          if (!this._userModule.canIUse(B.USER_STATUS))
            return Ja({ code: da.CANNOT_USE_COMMERCIAL_ABILITY });
          var n2 = "".concat(this._n, ".subscribeUserStatus"), o2 = e3.userIDList, s2 = void 0 === o2 ? [] : o2, a2 = m(s2);
          a2.length > this.MAX_SUBSCRIBE_USER_COUNT && (xe.w("".concat(n2, " ").concat(Kt(this.MAX_SUBSCRIBE_USER_COUNT))), a2 = s2.slice(0, this.MAX_SUBSCRIBE_USER_COUNT));
          var r2 = new ka("subscribeUserStatus"), i2 = "userID count:".concat(s2.length);
          return xe.l("".concat(n2, " ").concat(i2)), this._userModule.request({ protocolName: aa, requestData: { userIDList: a2 } }).then(function(e4) {
            var o3 = e4.data.failureUserList, s3 = (void 0 === o3 ? [] : o3).map(function(e5) {
              var t3 = e5.userID, n3 = e5.invalidUserID, o4 = e5.errorCode, s4 = e5.errorInfo;
              return { userID: jt(n3) ? t3 : n3, code: o4, message: s4 };
            });
            return r2.setNetworkType(t2._userModule.getNetworkType()).setMessage("".concat(i2, " fail count:").concat(s3.length)).end(), xe.l("".concat(n2, " ok. fail count:").concat(s3.length, ".")), Ka({ failureUserList: s3 });
          }).catch(function(e4) {
            return t2._userModule.probeNetwork().then(function(t3) {
              var n3 = v(t3, 2), o3 = n3[0], s3 = n3[1];
              r2.setMessage("".concat(i2)).setError(e4, o3, s3).end();
            }), xe.e("".concat(n2, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "unsubscribeUserStatus", value: function(e3) {
          var t2 = this;
          if (!this._userModule.canIUse(B.USER_STATUS))
            return Ja({ code: da.CANNOT_USE_COMMERCIAL_ABILITY });
          var n2 = "".concat(this._n, ".unsubscribeUserStatus"), o2 = (e3 || {}).userIDList, s2 = void 0 === o2 ? [] : o2, a2 = m(s2);
          s2.length > this.MAX_UNSUBSCRIBE_USER_COUNT && (xe.w("".concat(n2, " ").concat(Kt(this.MAX_UNSUBSCRIBE_USER_COUNT))), a2 = s2.slice(0, this.MAX_UNSUBSCRIBE_USER_COUNT));
          var r2 = new ka("unsubscribeUserStatus"), i2 = "userID count:".concat(s2.length);
          xe.l("".concat(n2, " ").concat(i2));
          var u2 = { userIDList: a2 };
          return 0 === a2.length && (u2.userIDList = void 0, u2.unsubscribeAll = 1), this._userModule.request({ protocolName: ra, requestData: u2 }).then(function(e4) {
            var o3 = e4.data.failureUserList, s3 = (void 0 === o3 ? [] : o3).map(function(e5) {
              var t3 = e5.userID, n3 = e5.invalidUserID, o4 = e5.errorCode, s4 = e5.errorInfo;
              return { userID: jt(n3) ? t3 : n3, code: o4, message: s4 };
            });
            return r2.setNetworkType(t2._userModule.getNetworkType()).setMessage("".concat(i2, " fail count:").concat(s3.length)).end(), xe.l("".concat(n2, " ok. fail count:").concat(s3.length, ".")), Ka({ failureUserList: s3 });
          }).catch(function(e4) {
            return t2._userModule.probeNetwork().then(function(t3) {
              var n3 = v(t3, 2), o3 = n3[0], s3 = n3[1];
              r2.setMessage("".concat(i2)).setError(e4, o3, s3).end();
            }), xe.e("".concat(n2, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "reset", value: function() {
          this.MAX_QUERY_USER_COUNT = 500, this.MAX_SUBSCRIBE_USER_COUNT = 100, this.MAX_UNSUBSCRIBE_USER_COUNT = 100;
        } }]), e2;
      }(), Jr = function(e2) {
        i(n2, e2);
        var t2 = f(n2);
        function n2(e3) {
          var s2;
          return o(this, n2), (s2 = t2.call(this, e3))._n = "UserModule", s2._profileHandler = new Kr(_(s2)), s2._blacklistHandler = new Yr(_(s2)), s2._userStatusHandler = new zr(_(s2)), s2.getInnerEmitterInstance().on(Za, s2.onContextUpdated, _(s2)), s2;
        }
        return a(n2, [{ key: "onContextUpdated", value: function(e3) {
          this._profileHandler.getMyProfile(), this._blacklistHandler.getBlacklist();
        } }, { key: "onProfileModified", value: function(e3) {
          this._profileHandler.onProfileModified(e3);
        } }, { key: "onRelationChainModified", value: function(e3) {
          var t3 = e3.dataList;
          if (!jt(t3)) {
            var n3 = [];
            t3.forEach(function(e4) {
              e4.blackListDelAccount && n3.push.apply(n3, m(e4.blackListDelAccount));
            }), n3.length > 0 && this._blacklistHandler.onAccountDeleted(n3);
            var o2 = [];
            t3.forEach(function(e4) {
              e4.blackListAddAccount && o2.push.apply(o2, m(e4.blackListAddAccount));
            }), o2.length > 0 && this._blacklistHandler.onAccountAdded(o2);
          }
        } }, { key: "onConversationsProfileUpdated", value: function(e3) {
          this._profileHandler.onConversationsProfileUpdated(e3);
        } }, { key: "getMyAccount", value: function() {
          return this.getMyUserID();
        } }, { key: "getMyProfile", value: function() {
          return this._profileHandler.getMyProfile();
        } }, { key: "getStorageModule", value: function() {
          return this.getModule(xn);
        } }, { key: "filterProfanity", value: function(e3, t3) {
          var n3 = this.getModule(no);
          if (!n3)
            return true;
          var o2 = n3.filterText(t3[e3], j), s2 = o2.isAllowedToSend, a2 = o2.modifiedText;
          return true === s2 && (t3[e3] = a2, true);
        } }, { key: "isMyFriend", value: function(e3) {
          var t3 = this.getModule(Pn);
          return !!t3 && t3.isMyFriend(e3);
        } }, { key: "getUserProfile", value: function(e3) {
          return this._profileHandler.getUserProfile(e3);
        } }, { key: "updateMyProfile", value: function(e3) {
          return this._profileHandler.updateMyProfile(e3);
        } }, { key: "getNickAndAvatarByUserID", value: function(e3) {
          return this._profileHandler.getNickAndAvatarByUserID(e3);
        } }, { key: "getLocalBlacklist", value: function() {
          var e3 = this._blacklistHandler.getLocalBlacklist();
          return za(e3);
        } }, { key: "addBlacklist", value: function(e3) {
          return this._blacklistHandler.addBlacklist(e3);
        } }, { key: "deleteBlacklist", value: function(e3) {
          return this._blacklistHandler.deleteBlacklist(e3);
        } }, { key: "onUserStatusUpdated", value: function(e3) {
          this._userStatusHandler.onUserStatusUpdated(e3);
        } }, { key: "setSelfStatus", value: function(e3) {
          return this._userStatusHandler.setSelfStatus(e3);
        } }, { key: "getUserStatus", value: function(e3) {
          return this._userStatusHandler.getUserStatus(e3);
        } }, { key: "subscribeUserStatus", value: function(e3) {
          return this._userStatusHandler.subscribeUserStatus(e3);
        } }, { key: "unsubscribeUserStatus", value: function(e3) {
          return this._userStatusHandler.unsubscribeUserStatus(e3);
        } }, { key: "reset", value: function() {
          xe.l("".concat(this._n, ".reset")), this._profileHandler.reset(), this._blacklistHandler.reset(), this._userStatusHandler.reset();
        } }]), n2;
      }(ro), Xr = function() {
        function e2(t2, n2) {
          o(this, e2), this._m = t2, this._isLoggedIn = false, this._SDKAppID = n2.SDKAppID, this._userID = n2.userID || "", this._userSig = n2.userSig || "", this._version = "2.27.5", this._a2Key = "", this._tinyID = "", this._customStatus = "", this._contentType = "json", this._unlimitedAVChatRoom = n2.unlimitedAVChatRoom, this._scene = n2.scene || "", this._oversea = n2.oversea, this._instanceID = n2.instanceID, this._statusInstanceID = 0, this._isDevMode = n2.devMode, this._proxyServer = n2.proxyServer, this._fileUploadProxy = n2.fileUploadProxy, this._fileDownloadProxy = n2.fileDownloadProxy;
        }
        return a(e2, [{ key: "isLoggedIn", value: function() {
          return this._isLoggedIn;
        } }, { key: "isOversea", value: function() {
          return this._oversea;
        } }, { key: "isPrivateNetWork", value: function() {
          return this._proxyServer;
        } }, { key: "isDevMode", value: function() {
          return this._isDevMode;
        } }, { key: "isSingaporeSite", value: function() {
          return this._SDKAppID >= 2e7 && this._SDKAppID < 3e7 || this._SDKAppID >= 172e7 && this._SDKAppID < 173e7;
        } }, { key: "isKoreaSite", value: function() {
          return this._SDKAppID >= 3e7 && this._SDKAppID < 4e7 || this._SDKAppID >= 173e7 && this._SDKAppID < 174e7;
        } }, { key: "isGermanySite", value: function() {
          return this._SDKAppID >= 4e7 && this._SDKAppID < 5e7 || this._SDKAppID >= 174e7 && this._SDKAppID < 175e7;
        } }, { key: "isIndiaSite", value: function() {
          return this._SDKAppID >= 5e7 && this._SDKAppID < 6e7 || this._SDKAppID >= 175e7 && this._SDKAppID < 176e7;
        } }, { key: "isJapanSite", value: function() {
          return this._SDKAppID >= 6e7 && this._SDKAppID < 7e7 || this._SDKAppID >= 176e7 && this._SDKAppID < 177e7;
        } }, { key: "isUSASite", value: function() {
          return this._SDKAppID >= 7e7 && this._SDKAppID < 8e7 || this._SDKAppID >= 177e7 && this._SDKAppID < 178e7;
        } }, { key: "isIntl", value: function() {
          return 0 === (e3 = this._SDKAppID) || e3 >= 2e7 && e3 < 8e7 || e3 >= 172e7 && e3 < 178e7;
          var e3;
        } }, { key: "isUnlimitedAVChatRoom", value: function() {
          return this._unlimitedAVChatRoom;
        } }, { key: "setUserID", value: function(e3) {
          this._userID = e3;
        } }, { key: "getUserID", value: function() {
          return this._userID;
        } }, { key: "setUserSig", value: function(e3) {
          this._userSig = e3;
        } }, { key: "getUserSig", value: function() {
          return this._userSig;
        } }, { key: "getSDKAppID", value: function() {
          return this._SDKAppID;
        } }, { key: "setTinyID", value: function(e3) {
          this._tinyID = e3, this._isLoggedIn = true;
        } }, { key: "getTinyID", value: function() {
          return this._tinyID;
        } }, { key: "setCustomStatus", value: function(e3) {
          this._customStatus = e3;
        } }, { key: "getCustomStatus", value: function() {
          return this._customStatus;
        } }, { key: "getScene", value: function() {
          return Le ? window.tencent_cloud_im_csig_flutter_for_web_25F_cy : this._isTUIKit() ? "tuikit" : this._scene;
        } }, { key: "getInstanceID", value: function() {
          return this._instanceID;
        } }, { key: "getStatusInstanceID", value: function() {
          return this._statusInstanceID;
        } }, { key: "setStatusInstanceID", value: function(e3) {
          this._statusInstanceID = e3;
        } }, { key: "getVersion", value: function() {
          return this._version;
        } }, { key: "getA2Key", value: function() {
          return this._a2Key;
        } }, { key: "setA2Key", value: function(e3) {
          this._a2Key = e3;
        } }, { key: "getContentType", value: function() {
          return this._contentType;
        } }, { key: "getProxyServer", value: function() {
          return this._proxyServer;
        } }, { key: "getFileUploadProxy", value: function() {
          return this._fileUploadProxy;
        } }, { key: "getFileDownloadProxy", value: function() {
          return this._fileDownloadProxy;
        } }, { key: "_isTUIKit", value: function() {
          var e3 = false, t2 = false, n2 = false, o2 = false, s2 = [];
          se && (s2 = Object.keys(re)), ae && (s2 = oe ? Object.keys(uni) : Object.keys(window));
          for (var a2 = 0, r2 = s2.length; a2 < r2; a2++)
            if (s2[a2].toLowerCase().includes("uikit")) {
              e3 = true;
              break;
            }
          if (s2 = null, se && !it(re.createGamePortal) && it(getApp) && !at(getApp())) {
            var i2 = getApp().globalData;
            ot(i2) && true === i2.isTUIKit && (t2 = true);
          }
          true === this._m.getModule(xn).getStorageSync("TIM_".concat(this._SDKAppID, "_isTUIKit")) && (n2 = true);
          var u2 = null;
          if (X && !Z && "undefined" == typeof uni && __wxConfig && (u2 = __wxConfig.pages), Q && "undefined" == typeof uni && __qqConfig && (u2 = __qqConfig.pages), st(u2) && u2.length > 0) {
            for (var c2 = 0, l2 = u2.length; c2 < l2; c2++)
              if (u2[c2].toLowerCase().includes("tui")) {
                o2 = true;
                break;
              }
            u2 = null;
          }
          return e3 || t2 || n2 || o2;
        } }, { key: "reset", value: function() {
          this._isLoggedIn = false, this._userSig = "", this._a2Key = "", this._tinyID = "", this._customStatus = "", this._statusInstanceID = 0;
        } }]), e2;
      }(), Qr = function(e2) {
        i(n2, e2);
        var t2 = f(n2);
        function n2(e3) {
          var s2;
          return o(this, n2), (s2 = t2.call(this, e3))._n = "SignModule", s2._helloInterval = 120, s2._lastLoginTs = 0, s2._lastWsHelloTs = 0, s2._isWebUniapp = 0, tr.mixin(_(s2)), s2;
        }
        return a(n2, [{ key: "onCheckTimer", value: function(e3) {
          this.isLoggedIn() && e3 % this._helloInterval == 0 && this._hello();
        } }, { key: "login", value: function(e3) {
          var t3 = "";
          if (this.isLoggedIn()) {
            var n3 = this.getMyUserID();
            return (t3 = this.getErrorMessage("RepeatLogin", n3)) && xe.w(t3), za({ actionStatus: "OK", errorCode: 0, errorInfo: t3, repeatLogin: true });
          }
          if (Date.now() - this._lastLoginTs <= 15e3)
            return this.outputWarning("LoggingIn", e3.userID), Ja({ code: da.REPEAT_LOGIN });
          xe.l("".concat(this._n, ".login userID:").concat(e3.userID));
          var o2 = this._checkLoginInfo(e3);
          if (0 !== o2.code)
            return Ja(o2);
          var s2 = this.getModule(qn), a2 = e3.userID, r2 = e3.userSig;
          return s2.setUserID(a2), s2.setUserSig(r2), this.getModule(jn).updateProtocolConfig(), this._login();
        } }, { key: "_login", value: function() {
          var e3 = this, t3 = this.getModule(qn), n3 = t3.getScene(), o2 = 0, s2 = new ka("login");
          s2.setMessage("".concat(n3)).setMoreMessage("identifier:".concat(this.getMyUserID())), oe ? "tuikit" === n3 ? s2.setUIPlatform(4) : s2.setUIPlatform(3) : se ? "tuikit" === n3 ? s2.setUIPlatform(12) : s2.setUIPlatform(11) : ae && (Le ? "flutter_web_uikit" === n3 ? s2.setUIPlatform(21) : s2.setUIPlatform(20) : this._isReactUIKit() ? ke ? s2.setUIPlatform(25) : s2.setUIPlatform(24) : ke ? "tuikit" === n3 ? s2.setUIPlatform(17) : s2.setUIPlatform(16) : "tuikit" === n3 ? s2.setUIPlatform(14) : s2.setUIPlatform(13));
          var a2 = this.getModule(to);
          if (a2.canIUseOfflinePush()) {
            this._isWebUniapp = a2.getUniAppPlatform();
            var r2 = this._getStatusInstanceID();
            t3.setStatusInstanceID(r2), this.getModule(jn).updateProtocolConfig(), o2 = a2.getDeviceBrand();
          }
          var i2 = "".concat(this._n, "._login");
          return this._lastLoginTs = Date.now(), this.request({ protocolName: io, requestData: { deviceBrand: o2, isWebUniapp: this._isWebUniapp } }).then(function(o3) {
            e3._lastLoginTs = 0;
            var a3 = Date.now(), r3 = null, u2 = o3.data, c2 = u2.a2Key, l2 = u2.tinyID, p2 = u2.helloInterval, d2 = u2.instanceID, g2 = u2.timeStamp, _2 = u2.customStatus, h2 = void 0 === _2 ? "" : _2, f2 = u2.purchaseBits;
            xe.l("".concat(i2, " ok. scene:").concat(n3, " helloInterval:").concat(p2, " instanceID:").concat(d2, " timeStamp:").concat(g2));
            var v2 = 1e3 * g2, m2 = a3 - s2.getStartTs(), M2 = v2 + parseInt(m2 / 2) - a3, y2 = s2.getStartTs() + M2;
            if (s2.start(y2), function(e4, t4) {
              Ge = t4;
              var n4 = /* @__PURE__ */ new Date();
              n4.setTime(e4), xe.i("baseTime from server:".concat(n4, " offset:").concat(Ge));
            }(v2, M2), !l2)
              throw r3 = new Wa({ code: da.NO_TINYID }), s2.setError(r3, true, e3.getNetworkType()).end(), r3;
            if (!c2)
              throw r3 = new Wa({ code: da.NO_A2KEY }), s2.setError(r3, true, e3.getNetworkType()).end(), r3;
            var I2 = jr(h2);
            (s2.setNetworkType(e3.getNetworkType()).setMoreMessage("helloInterval:".concat(p2, " instanceID:").concat(d2, " offset:").concat(M2, " customStatus:").concat(I2)).end(), t3.setA2Key(c2), t3.setTinyID(l2), t3.setStatusInstanceID(d2), t3.setCustomStatus(I2), f2) && e3.getModule(eo).onPushedConfig({ errorCode: 0, expiredTime: 0, purchaseBits: f2 });
            e3.getModule(jn).updateProtocolConfig(), e3.emitInnerEvent(Za), e3._helloInterval = p2, e3.triggerReady();
            var C2 = e3.getModule(to);
            return C2.canIUseOfflinePush() && (uni.setStorageSync("timUniAppInstanceID", d2), C2.init()), e3._fetchCloudControlConfig(), e3.getModule(no).init(), o3;
          }).catch(function(t4) {
            return e3.probeNetwork().then(function(e4) {
              var n4 = v(e4, 2), o3 = n4[0], a3 = n4[1];
              s2.setError(t4, o3, a3).end(true);
            }), e3._m.setNotReadyReason(da.LOGIN_FAILED), xe.e("".concat(i2, " failed. error:"), t4), e3._lastLoginTs = 0, e3._m.onLoginFailed(), Ja(t4);
          });
        } }, { key: "logout", value: function() {
          var e3 = this, t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          if (!this.isLoggedIn())
            return Ja({ code: da.USER_NOT_LOGGED_IN });
          var n3 = new ka("logout");
          n3.setNetworkType(this.getNetworkType()).setMessage("identifier:".concat(this.getMyUserID())).end(true);
          var o2 = "".concat(this._n, ".logout");
          return xe.i("".concat(o2, " type:").concat(t3)), 0 === t3 && this._m.setNotReadyReason(da.LOGGED_OUT), this.request({ protocolName: uo, requestData: { type: t3 } }).then(function() {
            return e3.resetReady(), za({});
          }).catch(function(t4) {
            return xe.e("".concat(o2, " error:"), t4), e3.resetReady(), za({});
          });
        } }, { key: "_fetchCloudControlConfig", value: function() {
          this.getModule(Xn).fetchConfig();
        } }, { key: "_getStatusInstanceID", value: function() {
          return uni.getStorageSync("timUniAppInstanceID");
        } }, { key: "_hello", value: function() {
          var e3 = this;
          this._lastWsHelloTs = Date.now(), this.request({ protocolName: co, requestData: { isWebUniapp: this._isWebUniapp } }).catch(function(t3) {
            xe.w("".concat(e3._n, "._hello error:"), t3);
          });
        } }, { key: "getLastWsHelloTs", value: function() {
          return this._lastWsHelloTs;
        } }, { key: "_checkLoginInfo", value: function(e3) {
          var t3 = 0;
          return jt(this.getModule(qn).getSDKAppID()) ? t3 = da.NO_SDKAPPID : jt(e3.userID) ? t3 = da.NO_IDENTIFIER : jt(e3.userSig) && (t3 = da.NO_USERSIG), { code: t3 };
        } }, { key: "_isReactUIKit", value: function() {
          return ae && void 0 !== window.tencent_cloud_im_csig_react_uikit_23F_xa;
        } }, { key: "onMultipleAccountKickedOut", value: function(e3) {
          var t3 = this;
          new ka("kickedOut").setNetworkType(this.getNetworkType()).setMessage("type:".concat(S.KICKED_OUT_MULT_ACCOUNT, " newInstanceInfo:").concat(JSON.stringify(e3))).end(true), xe.w("".concat(this._n, ".onMultipleAccountKickedOut userID:").concat(this.getMyUserID(), " newInstanceInfo:"), e3), this.logout(1).then(function() {
            t3.emitOuterEvent(E.KICKED_OUT, { type: S.KICKED_OUT_MULT_ACCOUNT }), t3._m.setNotReadyReason(da.KICKED_OUT_MULT_ACCOUNT), t3._m.reset();
          });
        } }, { key: "onMultipleDeviceKickedOut", value: function(e3) {
          var t3 = this;
          new ka("kickedOut").setNetworkType(this.getNetworkType()).setMessage("type:".concat(S.KICKED_OUT_MULT_DEVICE, " newInstanceInfo:").concat(JSON.stringify(e3))).end(true), xe.w("".concat(this._n, ".onMultipleDeviceKickedOut userID:").concat(this.getMyUserID(), " newInstanceInfo:"), e3), this.logout(1).then(function() {
            t3.emitOuterEvent(E.KICKED_OUT, { type: S.KICKED_OUT_MULT_DEVICE }), t3._m.setNotReadyReason(da.KICKED_OUT_MULT_DEVICE), t3._m.reset();
          });
        } }, { key: "onUserSigExpired", value: function() {
          new ka("kickedOut").setNetworkType(this.getNetworkType()).setMessage(S.KICKED_OUT_USERSIG_EXPIRED).end(true), xe.w("".concat(this._n, ".onUserSigExpired: userSig expired")), 0 !== this.getModule(qn).getStatusInstanceID() && (this.emitOuterEvent(E.KICKED_OUT, { type: S.KICKED_OUT_USERSIG_EXPIRED }), this._m.setNotReadyReason(da.KICKED_OUT_USERSIG_EXPIRED), this._m.reset());
        } }, { key: "onRestApiKickedOut", value: function(e3) {
          (new ka("kickedOut").setNetworkType(this.getNetworkType()).setMessage("type:".concat(S.KICKED_OUT_REST_API, " newInstanceInfo:").concat(JSON.stringify(e3))).end(true), xe.w("".concat(this._n, ".onRestApiKickedOut userID:").concat(this.getMyUserID(), " newInstanceInfo:"), e3), 0 !== this.getModule(qn).getStatusInstanceID()) && (this.emitOuterEvent(E.KICKED_OUT, { type: S.KICKED_OUT_REST_API }), this._m.setNotReadyReason(da.KICKED_OUT_REST_API), this._m.reset(), this.getModule(zn).onRestApiKickedOut());
        } }, { key: "reset", value: function() {
          xe.l("".concat(this._n, ".reset")), this.resetReady(), this._helloInterval = 120, this._lastLoginTs = 0, this._lastWsHelloTs = 0, this._isWebUniapp = 0;
        } }]), n2;
      }(ro);
      function Zr() {
        return null;
      }
      var $r = function() {
        function e2(t2) {
          o(this, e2), this._m = t2, this._n = "StorageModule", this._storageQueue = /* @__PURE__ */ new Map(), this._errorTolerantHandle();
        }
        return a(e2, [{ key: "_errorTolerantHandle", value: function() {
          se || !at(window) && this._canIUseCookies() || (this.getItem = Zr, this.setItem = Zr, this.removeItem = Zr, this.clear = Zr);
        } }, { key: "onCheckTimer", value: function(e3) {
          if (e3 % 20 == 0) {
            if (0 === this._storageQueue.size)
              return;
            this._doFlush();
          }
        } }, { key: "_doFlush", value: function() {
          try {
            var e3, t2 = D(this._storageQueue);
            try {
              for (t2.s(); !(e3 = t2.n()).done; ) {
                var n2 = v(e3.value, 2), o2 = n2[0], s2 = n2[1];
                this._setStorageSync(this._getKey(o2), s2);
              }
            } catch (a2) {
              t2.e(a2);
            } finally {
              t2.f();
            }
            this._storageQueue.clear();
          } catch (r2) {
            xe.w("".concat(this._n, "._doFlush error:"), r2);
          }
        } }, { key: "_getPrefix", value: function() {
          var e3 = this._m.getModule(qn);
          return "TIM_".concat(e3.getSDKAppID(), "_").concat(e3.getUserID(), "_");
        } }, { key: "_getKey", value: function(e3) {
          return "".concat(this._getPrefix()).concat(e3);
        } }, { key: "getItem", value: function(e3) {
          var t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          try {
            var n2 = t2 ? this._getKey(e3) : e3;
            return this.getStorageSync(n2);
          } catch (o2) {
            return xe.w("".concat(this._n, ".getItem error:"), o2), {};
          }
        } }, { key: "setItem", value: function(e3, t2) {
          var n2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o2 = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          if (n2) {
            var s2 = o2 ? this._getKey(e3) : e3;
            this._setStorageSync(s2, t2);
          } else
            this._storageQueue.set(e3, t2);
        } }, { key: "clear", value: function() {
          try {
            se ? re.clearStorageSync() : this._canIUseCookies() && localStorage.clear();
          } catch (e3) {
            xe.w("".concat(this._n, ".clear error:"), e3);
          }
        } }, { key: "removeItem", value: function(e3) {
          var t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          try {
            var n2 = t2 ? this._getKey(e3) : e3;
            this._removeStorageSync(n2);
          } catch (o2) {
            xe.w("".concat(this._n, ".removeItem error:"), o2);
          }
        } }, { key: "getSize", value: function(e3) {
          var t2 = this, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "b";
          try {
            var o2 = { size: 0, limitSize: 5242880, unit: n2 };
            if (Object.defineProperty(o2, "leftSize", { enumerable: true, get: function() {
              return o2.limitSize - o2.size;
            } }), se && (o2.limitSize = 1024 * re.getStorageInfoSync().limitSize), e3)
              o2.size = JSON.stringify(this.getItem(e3)).length + this._getKey(e3).length;
            else if (se) {
              var s2 = re.getStorageInfoSync(), a2 = s2.keys;
              a2.forEach(function(e4) {
                o2.size += JSON.stringify(t2.getStorageSync(e4)).length + t2._getKey(e4).length;
              });
            } else if (this._canIUseCookies())
              for (var r2 in localStorage)
                localStorage.hasOwnProperty(r2) && (o2.size += localStorage.getItem(r2).length + r2.length);
            return this._convertUnit(o2);
          } catch (i2) {
            xe.w("".concat(this._n, " error:"), i2);
          }
        } }, { key: "_convertUnit", value: function(e3) {
          var t2 = {}, n2 = e3.unit;
          for (var o2 in t2.unit = n2, e3)
            "number" == typeof e3[o2] && ("kb" === n2.toLowerCase() ? t2[o2] = Math.round(e3[o2] / 1024) : "mb" === n2.toLowerCase() ? t2[o2] = Math.round(e3[o2] / 1024 / 1024) : t2[o2] = e3[o2]);
          return t2;
        } }, { key: "_setStorageSync", value: function(e3, t2) {
          se ? ee ? my.setStorageSync({ key: e3, data: t2 }) : re.setStorageSync(e3, t2) : this._canIUseCookies() && localStorage.setItem(e3, JSON.stringify(t2));
        } }, { key: "getStorageSync", value: function(e3) {
          return se ? ee ? my.getStorageSync({ key: e3 }).data : re.getStorageSync(e3) : this._canIUseCookies() ? JSON.parse(localStorage.getItem(e3)) : {};
        } }, { key: "_removeStorageSync", value: function(e3) {
          se ? ee ? my.removeStorageSync({ key: e3 }) : re.removeStorageSync(e3) : this._canIUseCookies() && localStorage.removeItem(e3);
        } }, { key: "_canIUseCookies", value: function() {
          return navigator && navigator.cookieEnabled && localStorage;
        } }, { key: "reset", value: function() {
          xe.l("".concat(this._n, ".reset")), this._doFlush();
        } }]), e2;
      }(), ei = function() {
        function e2(t2) {
          o(this, e2), this._n = "SSOLogBody", this._report = [];
        }
        return a(e2, [{ key: "pushIn", value: function(e3) {
          xe.d("".concat(this._n, ".pushIn"), this._report.length, e3), this._report.push(e3);
        } }, { key: "backfill", value: function(e3) {
          var t2;
          st(e3) && 0 !== e3.length && (xe.d("".concat(this._n, ".backfill"), this._report.length, e3.length), (t2 = this._report).unshift.apply(t2, m(e3)));
        } }, { key: "getLogsNumInMemory", value: function() {
          return this._report.length;
        } }, { key: "isEmpty", value: function() {
          return 0 === this._report.length;
        } }, { key: "_reset", value: function() {
          this._report.length = 0, this._report = [];
        } }, { key: "getLogsInMemory", value: function() {
          var e3 = this._report.slice();
          return this._reset(), e3;
        } }]), e2;
      }(), ti = function(e2) {
        var t2 = e2.getModule(qn);
        return { SDKType: 10, SDKAppID: t2.getSDKAppID(), SDKVersion: t2.getVersion(), tinyID: Number(t2.getTinyID()), userID: t2.getUserID(), platform: e2.getPlatform(), instanceID: t2.getInstanceID(), traceID: Ue() };
      }, ni = function(e2) {
        i(s2, e2);
        var n2 = f(s2);
        function s2(e3) {
          var t2;
          o(this, s2), (t2 = n2.call(this, e3))._n = "EventStatModule", t2.TAG = "im-ssolog-event", t2._reportBody = new ei(), t2.MIN_THRESHOLD = 20, t2.MAX_THRESHOLD = 100, t2.WAITING_TIME = 6e4, t2.REPORT_LEVEL = [4, 5, 6], t2.REPORT_SDKAPPID_BLACKLIST = [], t2.REPORT_TINYID_WHITELIST = [], t2._lastReportTime = Date.now();
          var a2 = t2.getInnerEmitterInstance();
          return a2.on(Za, t2._onLoginSuccess, _(t2)), a2.on($a, t2._onCloudConfigUpdated, _(t2)), t2;
        }
        return a(s2, [{ key: "reportAtOnce", value: function() {
          xe.d("".concat(this._n, ".reportAtOnce")), this._report();
        } }, { key: "_onLoginSuccess", value: function() {
          var e3 = this, t2 = this.getModule(xn), n3 = t2.getItem(this.TAG, false);
          !jt(n3) && it(n3.forEach) && (xe.l("".concat(this._n, "._onLoginSuccess get ssolog in storage, count:").concat(n3.length)), n3.forEach(function(t3) {
            e3._reportBody.pushIn(t3);
          }), t2.removeItem(this.TAG, false));
        } }, { key: "_onCloudConfigUpdated", value: function() {
          var e3 = this.getCloudConfig("evt_rpt_threshold"), t2 = this.getCloudConfig("evt_rpt_waiting"), n3 = this.getCloudConfig("evt_rpt_level"), o2 = this.getCloudConfig("evt_rpt_sdkappid_bl"), s3 = this.getCloudConfig("evt_rpt_tinyid_wl");
          at(e3) || (this.MIN_THRESHOLD = Number(e3)), at(t2) || (this.WAITING_TIME = Number(t2)), at(n3) || (this.REPORT_LEVEL = n3.split(",").map(function(e4) {
            return Number(e4);
          })), at(o2) || (this.REPORT_SDKAPPID_BLACKLIST = o2.split(",").map(function(e4) {
            return Number(e4);
          })), at(s3) || (this.REPORT_TINYID_WHITELIST = s3.split(","));
        } }, { key: "pushIn", value: function(e3) {
          e3 instanceof ka && (e3.updateTimeStamp(), this._reportBody.pushIn(e3), this._reportBody.getLogsNumInMemory() >= this.MIN_THRESHOLD && this._report());
        } }, { key: "onCheckTimer", value: function() {
          Date.now() < this._lastReportTime + this.WAITING_TIME || this._reportBody.isEmpty() || this._report();
        } }, { key: "_filterLogs", value: function(e3) {
          var t2 = this, n3 = this.getModule(qn), o2 = n3.getSDKAppID(), s3 = n3.getTinyID();
          return wt(this.REPORT_SDKAPPID_BLACKLIST, o2) && !Ft(this.REPORT_TINYID_WHITELIST, s3) ? [] : e3.filter(function(e4) {
            return t2.REPORT_LEVEL.includes(e4.level);
          });
        } }, { key: "_report", value: function() {
          var e3 = this;
          if (!this._reportBody.isEmpty()) {
            var n3 = this._reportBody.getLogsInMemory(), o2 = this._filterLogs(n3);
            if (0 !== o2.length) {
              var s3 = { header: ti(this), event: o2 };
              this.request({ protocolName: xs, requestData: t({}, s3) }).then(function() {
                e3._lastReportTime = Date.now();
              }).catch(function(t2) {
                xe.w("".concat(e3._n, ".report failed. networkType:").concat(e3.getNetworkType(), " error:"), t2), e3._reportBody.backfill(n3), e3._reportBody.getLogsNumInMemory() > e3.MAX_THRESHOLD && e3._flushAtOnce();
              });
            } else
              this._lastReportTime = Date.now();
          }
        } }, { key: "_flushAtOnce", value: function() {
          var e3 = this.getModule(xn), t2 = e3.getItem(this.TAG, false), n3 = this._reportBody.getLogsInMemory(), o2 = "".concat(this._n, "._flushAtOnce");
          if (jt(t2))
            xe.l("".concat(o2, " count:").concat(n3.length)), e3.setItem(this.TAG, n3, true, false);
          else {
            var s3 = n3.concat(t2);
            s3.length > this.MAX_THRESHOLD && (s3 = s3.slice(0, this.MAX_THRESHOLD)), xe.l("".concat(o2, " count:").concat(s3.length)), e3.setItem(this.TAG, s3, true, false);
          }
        } }, { key: "reset", value: function() {
          xe.l("".concat(this._n, ".reset")), this._lastReportTime = 0, this._report(), this.REPORT_SDKAPPID_BLACKLIST = [], this.REPORT_TINYID_WHITELIST = [];
        } }]), s2;
      }(ro), oi = "none", si = "online", ai = [da.OVER_FREQUENCY_LIMIT, da.OPEN_SERVICE_OVERLOAD_ERROR], ri = function() {
        function e2(t2) {
          o(this, e2), this._m = t2, this._networkType = "", this._n = "NetMonitorModule", this.MAX_WAIT_TIME = 3e3, this._mpNetworkStatusCallback = null, this._webOnlineCallback = null, this._webOfflineCallback = null;
        }
        return a(e2, [{ key: "start", value: function() {
          var e3 = this;
          se ? (re.getNetworkType({ success: function(t2) {
            e3._networkType = t2.networkType || t2.subtype || "", t2.networkType === oi ? xe.w("".concat(e3._n, ".start no network, please check!")) : xe.i("".concat(e3._n, ".start networkType:").concat(t2.networkType));
          } }), this._mpNetworkStatusCallback = this._onNetworkStatusChange.bind(this), re.onNetworkStatusChange(this._mpNetworkStatusCallback)) : (this._networkType = si, this._webOnlineCallback = this._onWebOnline.bind(this), this._webOfflineCallback = this._onWebOffline.bind(this), window && (window.addEventListener("online", this._webOnlineCallback), window.addEventListener("offline", this._webOfflineCallback)));
        } }, { key: "_onWebOnline", value: function() {
          this._onNetworkStatusChange({ isConnected: true, networkType: si });
        } }, { key: "_onWebOffline", value: function() {
          this._onNetworkStatusChange({ isConnected: false, networkType: oi });
        } }, { key: "_onNetworkStatusChange", value: function(e3) {
          var t2 = e3.isConnected, n2 = e3.networkType, o2 = "".concat(this._n, "._onNetworkStatusChange"), s2 = false;
          t2 ? (xe.i("".concat(o2, " previous:").concat(this._networkType, " current:").concat(n2)), this._networkType !== n2 && (s2 = true, this._m.getModule(zn).reConnect(true))) : this._networkType !== n2 && (s2 = true, xe.w("".concat(o2, " no network, please check!")), this._m.getModule(zn).offline());
          s2 && (new ka("networkChange").setMessage("isConnected:".concat(t2, " previousNetworkType:").concat(this._networkType, " networkType:").concat(n2)).end(), this._networkType = n2);
        } }, { key: "probe", value: function(e3) {
          var t2 = this;
          if (!at(e3) && ai.includes(e3.code))
            return Promise.resolve([true, this._networkType]);
          var n2 = "".concat(this._n, ".probe");
          return new Promise(function(e4, o2) {
            se ? re.getNetworkType({ success: function(o3) {
              t2._networkType = o3.networkType, o3.networkType === oi ? (xe.w("".concat(n2, " no network, please check!")), e4([false, o3.networkType])) : (xe.i("".concat(n2, " networkType:").concat(o3.networkType)), e4([true, o3.networkType]));
            } }) : t2._networkType === oi ? e4([false, oi]) : e4([true, si]);
          });
        } }, { key: "getNetworkType", value: function() {
          return this._networkType;
        } }, { key: "reset", value: function() {
          xe.l("".concat(this._n, ".reset")), se ? null !== this._mpNetworkStatusCallback && (re.offNetworkStatusChange && (ne || Z ? re.offNetworkStatusChange(this._mpNetworkStatusCallback) : re.offNetworkStatusChange()), this._mpNetworkStatusCallback = null) : window && (null !== this._webOnlineCallback && (window.removeEventListener("online", this._webOnlineCallback), this._webOnlineCallback = null), null !== this._onWebOffline && (window.removeEventListener("offline", this._webOfflineCallback), this._webOfflineCallback = null));
        } }]), e2;
      }();
      var ii = function(e2, t2) {
        return e2(t2 = { exports: {} }, t2.exports), t2.exports;
      }(function(e2) {
        var t2 = Object.prototype.hasOwnProperty, n2 = "~";
        function o2() {
        }
        function s2(e3, t3, n3) {
          this.fn = e3, this.context = t3, this.once = n3 || false;
        }
        function a2(e3, t3, o3, a3, r3) {
          if ("function" != typeof o3)
            throw new TypeError("The listener must be a function");
          var i3 = new s2(o3, a3 || e3, r3), u2 = n2 ? n2 + t3 : t3;
          return e3._events[u2] ? e3._events[u2].fn ? e3._events[u2] = [e3._events[u2], i3] : e3._events[u2].push(i3) : (e3._events[u2] = i3, e3._eventsCount++), e3;
        }
        function r2(e3, t3) {
          0 == --e3._eventsCount ? e3._events = new o2() : delete e3._events[t3];
        }
        function i2() {
          this._events = new o2(), this._eventsCount = 0;
        }
        Object.create && (o2.prototype = /* @__PURE__ */ Object.create(null), new o2().__proto__ || (n2 = false)), i2.prototype.eventNames = function() {
          var e3, o3, s3 = [];
          if (0 === this._eventsCount)
            return s3;
          for (o3 in e3 = this._events)
            t2.call(e3, o3) && s3.push(n2 ? o3.slice(1) : o3);
          return Object.getOwnPropertySymbols ? s3.concat(Object.getOwnPropertySymbols(e3)) : s3;
        }, i2.prototype.listeners = function(e3) {
          var t3 = n2 ? n2 + e3 : e3, o3 = this._events[t3];
          if (!o3)
            return [];
          if (o3.fn)
            return [o3.fn];
          for (var s3 = 0, a3 = o3.length, r3 = new Array(a3); s3 < a3; s3++)
            r3[s3] = o3[s3].fn;
          return r3;
        }, i2.prototype.listenerCount = function(e3) {
          var t3 = n2 ? n2 + e3 : e3, o3 = this._events[t3];
          return o3 ? o3.fn ? 1 : o3.length : 0;
        }, i2.prototype.emit = function(e3, t3, o3, s3, a3, r3) {
          var i3 = n2 ? n2 + e3 : e3;
          if (!this._events[i3])
            return false;
          var u2, c2, l2 = this._events[i3], p2 = arguments.length;
          if (l2.fn) {
            switch (l2.once && this.removeListener(e3, l2.fn, void 0, true), p2) {
              case 1:
                return l2.fn.call(l2.context), true;
              case 2:
                return l2.fn.call(l2.context, t3), true;
              case 3:
                return l2.fn.call(l2.context, t3, o3), true;
              case 4:
                return l2.fn.call(l2.context, t3, o3, s3), true;
              case 5:
                return l2.fn.call(l2.context, t3, o3, s3, a3), true;
              case 6:
                return l2.fn.call(l2.context, t3, o3, s3, a3, r3), true;
            }
            for (c2 = 1, u2 = new Array(p2 - 1); c2 < p2; c2++)
              u2[c2 - 1] = arguments[c2];
            l2.fn.apply(l2.context, u2);
          } else {
            var d2, g2 = l2.length;
            for (c2 = 0; c2 < g2; c2++)
              switch (l2[c2].once && this.removeListener(e3, l2[c2].fn, void 0, true), p2) {
                case 1:
                  l2[c2].fn.call(l2[c2].context);
                  break;
                case 2:
                  l2[c2].fn.call(l2[c2].context, t3);
                  break;
                case 3:
                  l2[c2].fn.call(l2[c2].context, t3, o3);
                  break;
                case 4:
                  l2[c2].fn.call(l2[c2].context, t3, o3, s3);
                  break;
                default:
                  if (!u2)
                    for (d2 = 1, u2 = new Array(p2 - 1); d2 < p2; d2++)
                      u2[d2 - 1] = arguments[d2];
                  l2[c2].fn.apply(l2[c2].context, u2);
              }
          }
          return true;
        }, i2.prototype.on = function(e3, t3, n3) {
          return a2(this, e3, t3, n3, false);
        }, i2.prototype.once = function(e3, t3, n3) {
          return a2(this, e3, t3, n3, true);
        }, i2.prototype.removeListener = function(e3, t3, o3, s3) {
          var a3 = n2 ? n2 + e3 : e3;
          if (!this._events[a3])
            return this;
          if (!t3)
            return r2(this, a3), this;
          var i3 = this._events[a3];
          if (i3.fn)
            i3.fn !== t3 || s3 && !i3.once || o3 && i3.context !== o3 || r2(this, a3);
          else {
            for (var u2 = 0, c2 = [], l2 = i3.length; u2 < l2; u2++)
              (i3[u2].fn !== t3 || s3 && !i3[u2].once || o3 && i3[u2].context !== o3) && c2.push(i3[u2]);
            c2.length ? this._events[a3] = 1 === c2.length ? c2[0] : c2 : r2(this, a3);
          }
          return this;
        }, i2.prototype.removeAllListeners = function(e3) {
          var t3;
          return e3 ? (t3 = n2 ? n2 + e3 : e3, this._events[t3] && r2(this, t3)) : (this._events = new o2(), this._eventsCount = 0), this;
        }, i2.prototype.off = i2.prototype.removeListener, i2.prototype.addListener = i2.prototype.on, i2.prefixed = n2, i2.EventEmitter = i2, e2.exports = i2;
      }), ui = function(e2) {
        i(n2, e2);
        var t2 = f(n2);
        function n2(e3) {
          var s2;
          return o(this, n2), (s2 = t2.call(this, e3))._n = "BigDataChannelModule", s2.FILETYPE = { SOUND: 2106, FILE: 2107, VIDEO: 2113 }, s2._bdh_download_server = "grouptalk.c2c.qq.com", s2._BDHBizID = 10001, s2._authKey = "", s2._expireTime = 0, s2.getInnerEmitterInstance().on(Za, s2._getAuthKey, _(s2)), s2;
        }
        return a(n2, [{ key: "_getAuthKey", value: function() {
          var e3 = this;
          this.isIntl() || this.request({ protocolName: go }).then(function(t3) {
            t3.data.authKey && (e3._authKey = t3.data.authKey, e3._expireTime = parseInt(t3.data.expireTime));
          });
        } }, { key: "_isFromOlderVersion", value: function(e3) {
          return !(!e3.content || 2 === e3.content.downloadFlag);
        } }, { key: "parseElements", value: function(e3, t3) {
          if (!st(e3) || !t3)
            return [];
          for (var n3 = [], o2 = null, s2 = 0; s2 < e3.length; s2++)
            o2 = e3[s2], this._needParse(o2) ? n3.push(this._parseElement(o2, t3)) : n3.push(e3[s2]);
          return n3;
        } }, { key: "_needParse", value: function(e3) {
          return !e3.cloudCustomData && !(!this._isFromOlderVersion(e3) || e3.type !== S.MSG_AUDIO && e3.type !== S.MSG_FILE && e3.type !== S.MSG_VIDEO);
        } }, { key: "_parseElement", value: function(e3, t3) {
          switch (e3.type) {
            case S.MSG_AUDIO:
              return this._parseAudioElement(e3, t3);
            case S.MSG_FILE:
              return this._parseFileElement(e3, t3);
            case S.MSG_VIDEO:
              return this._parseVideoElement(e3, t3);
          }
        } }, { key: "_parseAudioElement", value: function(e3, t3) {
          return e3.content.url = this._genAudioUrl(e3.content.uuid, t3), e3;
        } }, { key: "_parseFileElement", value: function(e3, t3) {
          return e3.content.url = this._genFileUrl(e3.content.uuid, t3, e3.content.fileName), e3;
        } }, { key: "_parseVideoElement", value: function(e3, t3) {
          return e3.content.url = this._genVideoUrl(e3.content.uuid, t3), e3;
        } }, { key: "_genAudioUrl", value: function(e3, t3) {
          if ("" === this._authKey)
            return "";
          var n3 = this.getModule(qn).getSDKAppID();
          return "https://".concat(this._bdh_download_server, "/asn.com/stddownload_common_file?authkey=").concat(this._authKey, "&bid=").concat(this._BDHBizID, "&subbid=").concat(n3, "&fileid=").concat(e3, "&filetype=").concat(this.FILETYPE.SOUND, "&openid=").concat(t3, "&ver=0");
        } }, { key: "_genFileUrl", value: function(e3, t3, n3) {
          if ("" === this._authKey)
            return "";
          n3 || (n3 = "".concat(Math.floor(1e5 * Math.random()), "-").concat(Date.now()));
          var o2 = this.getModule(qn).getSDKAppID();
          return "https://".concat(this._bdh_download_server, "/asn.com/stddownload_common_file?authkey=").concat(this._authKey, "&bid=").concat(this._BDHBizID, "&subbid=").concat(o2, "&fileid=").concat(e3, "&filetype=").concat(this.FILETYPE.FILE, "&openid=").concat(t3, "&ver=0&filename=").concat(encodeURIComponent(n3));
        } }, { key: "_genVideoUrl", value: function(e3, t3) {
          if ("" === this._authKey)
            return "";
          var n3 = this.getModule(qn).getSDKAppID();
          return "https://".concat(this._bdh_download_server, "/asn.com/stddownload_common_file?authkey=").concat(this._authKey, "&bid=").concat(this._BDHBizID, "&subbid=").concat(n3, "&fileid=").concat(e3, "&filetype=").concat(this.FILETYPE.VIDEO, "&openid=").concat(t3, "&ver=0");
        } }, { key: "reset", value: function() {
          this._authKey = "", this.expireTime = 0;
        } }]), n2;
      }(ro), ci = ["requestSnapshotUrl"], li = function(e2) {
        i(s2, e2);
        var n2 = f(s2);
        function s2(e3) {
          var t2;
          o(this, s2), (t2 = n2.call(this, e3))._n = "UploadModule", t2.TIMUploadPlugin = null, t2.timUploadPlugin = null, t2.COSSDK = null, t2._cosUploadMethod = null, t2.expiredTimeLimit = 600, t2.appid = 0, t2.bucketName = "", t2.ciUrl = "", t2.directory = "", t2.downloadUrl = "", t2.uploadUrl = "", t2.region = "ap-shanghai", t2.cos = null, t2.cosOptions = { secretId: "", secretKey: "", sessionToken: "", expiredTime: 0 }, t2.uploadFileType = "", t2.duration = 900, t2.tryCount = 0, t2.UPLOAD_SIZE_LIMIT = { AUDIO: 20971520, FILE: 104857600, IMAGE: 20971520, VIDEO: 104857600 };
          var a2 = t2.getInnerEmitterInstance();
          return a2.on(Za, t2._init, _(t2)), a2.on($a, t2._onCloudConfigUpdated, _(t2)), t2;
        }
        return a(s2, [{ key: "_init", value: function() {
          var e3 = this.getModule(Wn);
          if (this.TIMUploadPlugin = e3.getPlugin("tim-upload-plugin"), this.TIMUploadPlugin)
            this._initUploaderMethod();
          else {
            var t2 = se ? "cos-wx-sdk" : "cos-js-sdk";
            this.COSSDK = e3.getPlugin(t2), this.COSSDK ? (this._getAuthorizationKey(), this.outputWarning("CosReplacement", t2)) : this.outputWarning("PluginUndetected");
          }
        } }, { key: "_onCloudConfigUpdated", value: function() {
          var e3 = "".concat(this._n, "._onCloudConfigUpdated"), t2 = this.getCloudConfig("upload_size_limit");
          if (xe.l("".concat(e3, " uploadSizeLimit:").concat(t2)), !at(t2))
            try {
              var n3 = JSON.parse(t2);
              this.UPLOAD_SIZE_LIMIT = { AUDIO: n3.a ? 1048576 * parseInt(n3.a) : this.UPLOAD_SIZE_LIMIT.AUDIO, FILE: n3.f ? 1048576 * parseInt(n3.f) : this.UPLOAD_SIZE_LIMIT.FILE, IMAGE: n3.i ? 1048576 * parseInt(n3.i) : this.UPLOAD_SIZE_LIMIT.IMAGE, VIDEO: n3.v ? 1048576 * parseInt(n3.v) : this.UPLOAD_SIZE_LIMIT.VIDEO };
            } catch (o2) {
              xe.e("".concat(e3, " JSON parse error. uploadSizeLimit:"), t2);
            }
        } }, { key: "_getAuthorizationKey", value: function() {
          var e3 = this, t2 = "".concat(this._n, ".").concat("_getAuthorizationKey"), n3 = new ka("_getAuthorizationKey"), o2 = Math.ceil(Date.now() / 1e3);
          this.request({ protocolName: ws, requestData: { duration: this.expiredTimeLimit } }).then(function(s3) {
            var a2 = s3.data;
            xe.l("".concat(t2, " ok. data:"), a2);
            var r2 = a2.expiredTime - o2;
            n3.setMessage("requestId:".concat(a2.requestId, " requestTime:").concat(o2, " expiredTime:").concat(a2.expiredTime, " diff:").concat(r2, "s")).setNetworkType(e3.getNetworkType()).end(), !se && a2.region && (e3.region = a2.region), e3.appid = a2.appid, e3.bucketName = a2.bucketName, e3.ciUrl = a2.ciUrl, e3.directory = a2.directory, e3.downloadUrl = a2.downloadUrl, e3.uploadUrl = a2.uploadUrl, e3.cosOptions = { secretId: a2.secretId, secretKey: a2.secretKey, sessionToken: a2.sessionToken, expiredTime: a2.expiredTime }, xe.l("".concat(t2, " ok. region:").concat(e3.region, " bucketName:").concat(e3.bucketName)), e3._initUploaderMethod();
          }).catch(function(o3) {
            e3.probeNetwork().then(function(e4) {
              var t3 = v(e4, 2), s3 = t3[0], a2 = t3[1];
              n3.setError(o3, s3, a2).end();
            }), xe.w("".concat(t2, " failed. error:"), o3);
          });
        } }, { key: "_getCosPreSigUrl", value: function(e3) {
          var t2 = this, n3 = "".concat(this._n, ".").concat("_getCosPreSigUrl"), o2 = Math.ceil(Date.now() / 1e3), s3 = new ka("_getCosPreSigUrl");
          return this.request({ protocolName: Fs, requestData: { fileType: e3.fileType, fileName: e3.fileName, uploadMethod: e3.uploadMethod, duration: e3.duration } }).then(function(e4) {
            t2.tryCount = 0;
            var a2 = e4.data || {}, r2 = a2.expiredTime - o2;
            return xe.l("".concat(n3, " ok. data:"), a2), s3.setMessage("requestId:".concat(a2.requestId, " expiredTime:").concat(a2.expiredTime, " diff:").concat(r2, "s")).setNetworkType(t2.getNetworkType()).end(), a2;
          }).catch(function(o3) {
            return -1 === o3.code && (o3.code = da.COS_GET_SIG_FAIL), t2.probeNetwork().then(function(e4) {
              var t3 = v(e4, 2), n4 = t3[0], a2 = t3[1];
              s3.setError(o3, n4, a2).end();
            }), xe.w("".concat(n3, " failed. error:"), o3), t2.tryCount < 1 ? (t2.tryCount++, t2._getCosPreSigUrl(e3)) : (t2.tryCount = 0, Ja({ code: da.COS_GET_SIG_FAIL }));
          });
        } }, { key: "_initUploaderMethod", value: function() {
          var e3 = this;
          if (this.TIMUploadPlugin)
            return this.timUploadPlugin = new this.TIMUploadPlugin(), void (this._cosUploadMethod = function(t2, n3) {
              e3.timUploadPlugin.uploadFile(t2, n3);
            });
          this.appid && (this.cos = se ? new this.COSSDK({ ForcePathStyle: true, getAuthorization: this._getAuthorization.bind(this) }) : new this.COSSDK({ getAuthorization: this._getAuthorization.bind(this) }), this._cosUploadMethod = se ? function(t2, n3) {
            e3.cos.postObject(t2, n3);
          } : function(t2, n3) {
            e3.cos.uploadFiles(t2, n3);
          });
        } }, { key: "onCheckTimer", value: function(e3) {
          this.COSSDK && (this.TIMUploadPlugin || this.isLoggedIn() && e3 % 60 == 0 && Math.ceil(Date.now() / 1e3) >= this.cosOptions.expiredTime - 120 && this._getAuthorizationKey());
        } }, { key: "_getAuthorization", value: function(e3, t2) {
          t2({ TmpSecretId: this.cosOptions.secretId, TmpSecretKey: this.cosOptions.secretKey, XCosSecurityToken: this.cosOptions.sessionToken, ExpiredTime: this.cosOptions.expiredTime });
        } }, { key: "upload", value: function(e3) {
          if (true === e3.getRelayFlag())
            return Promise.resolve();
          var t2 = this.getModule($n);
          switch (e3.type) {
            case S.MSG_IMAGE:
              return t2.addTotalCount(Ma), this._uploadImage(e3);
            case S.MSG_FILE:
              return t2.addTotalCount(Ma), this._uploadFile(e3);
            case S.MSG_AUDIO:
              return t2.addTotalCount(Ma), this._uploadAudio(e3);
            case S.MSG_VIDEO:
              return t2.addTotalCount(Ma), this._uploadVideo(e3);
            default:
              return Promise.resolve();
          }
        } }, { key: "_uploadImage", value: function(e3) {
          var n3 = this, o2 = this.getModule(Rn), s3 = e3.getElements()[0], a2 = o2.getMessageOption(e3.clientSequence);
          return this.doUploadImage({ file: a2.payload.file, to: a2.to, onProgress: function(e4) {
            if (s3.updatePercent(e4), it(a2.onProgress))
              try {
                a2.onProgress(e4);
              } catch (t2) {
                return Ja({ code: da.MESSAGE_ONPROGRESS_FUNCTION_ERROR });
              }
          } }).then(function(o3) {
            var a3, r2, i2 = o3.location, u2 = o3.fileType, c2 = o3.fileSize, l2 = o3.width, p2 = o3.height, d2 = o3.smallImageUrl, g2 = o3.smallImageWidth, _2 = o3.smallImageHeight, h2 = o3.largeImageUrl, f2 = o3.largeImageWidth, v2 = o3.largeImageHeight, m2 = n3.isPrivateNetWork() ? i2 : Mt(i2);
            return s3.updateImageFormat(u2), d2 && h2 ? (a3 = { url: d2, width: g2, height: _2 }, r2 = { url: h2, width: f2, height: v2 }) : (a3 = Gt({ originUrl: m2, originWidth: l2, originHeight: p2, min: 198 }), r2 = Gt({ originUrl: m2, originWidth: l2, originHeight: p2, min: 720 })), s3.updateImageInfoArray([{ size: c2, url: m2, width: l2, height: p2 }, t({}, r2), t({}, a3)]), e3;
          });
        } }, { key: "_uploadFile", value: function(e3) {
          var t2 = this, n3 = this.getModule(Rn), o2 = e3.getElements()[0], s3 = n3.getMessageOption(e3.clientSequence);
          return this.doUploadFile({ file: s3.payload.file, to: s3.to, onProgress: function(e4) {
            if (o2.updatePercent(e4), it(s3.onProgress))
              try {
                s3.onProgress(e4);
              } catch (t3) {
                return Ja({ code: da.MESSAGE_ONPROGRESS_FUNCTION_ERROR });
              }
          } }).then(function(n4) {
            var s4 = n4.location, a2 = t2.isPrivateNetWork() ? s4 : Mt(s4);
            return o2.updateFileUrl(a2), e3;
          });
        } }, { key: "_uploadAudio", value: function(e3) {
          var t2 = this, n3 = this.getModule(Rn), o2 = e3.getElements()[0], s3 = n3.getMessageOption(e3.clientSequence);
          return this.doUploadAudio({ file: s3.payload.file, to: s3.to, onProgress: function(e4) {
            if (o2.updatePercent(e4), it(s3.onProgress))
              try {
                s3.onProgress(e4);
              } catch (t3) {
                return Ja({ code: da.MESSAGE_ONPROGRESS_FUNCTION_ERROR });
              }
          } }).then(function(n4) {
            var s4 = n4.location, a2 = t2.isPrivateNetWork() ? s4 : Mt(s4);
            return o2.updateAudioUrl(a2), e3;
          });
        } }, { key: "_uploadVideo", value: function(e3) {
          var t2 = this, n3 = this.getModule(Rn), o2 = e3.getElements()[0], s3 = n3.getMessageOption(e3.clientSequence);
          return this.doUploadVideo({ file: s3.payload.file, to: s3.to, onProgress: function(e4) {
            if (o2.updatePercent(e4), it(s3.onProgress))
              try {
                s3.onProgress(e4);
              } catch (t3) {
                return Ja({ code: da.MESSAGE_ONPROGRESS_FUNCTION_ERROR });
              }
          } }).then(function(n4) {
            var s4 = n4.location, a2 = n4.snapshotInfo, r2 = t2.isPrivateNetWork() ? s4 : Mt(s4);
            return o2.updateVideoUrl(r2), jt(a2) || o2.updateSnapshotInfo(a2), e3;
          });
        } }, { key: "_checkSizeError", value: function(e3) {
          return Ja({ code: da["MESSAGE_".concat(e3, "_SIZE_LIMIT")], message: this.getErrorMessage("UploadSizeLimit", e3.toLowerCase(), "".concat(this.UPLOAD_SIZE_LIMIT[e3] / 1048576, " MB")) });
        } }, { key: "doUploadImage", value: function(e3) {
          var t2 = this;
          if (!e3.file)
            return Ja({ code: da.MESSAGE_IMAGE_SELECT_FILE_FIRST });
          var n3 = this._checkImageType(e3.file);
          if (true !== n3)
            return n3;
          var o2 = this._checkImageSize(e3.file);
          if (true !== o2)
            return o2;
          var s3 = null;
          return this._setUploadFileType(sr), this.uploadByCOS(e3).then(function(e4) {
            return s3 = e4, t2.isPrivateNetWork() ? At(e4.location) : At("https://".concat(e4.location));
          }).then(function(e4) {
            return s3.width = e4.width, s3.height = e4.height, Promise.resolve(s3);
          });
        } }, { key: "_checkImageType", value: function(e3) {
          var t2 = "";
          return t2 = se ? e3.url.slice(e3.url.lastIndexOf(".") + 1) : e3.files[0].name.slice(e3.files[0].name.lastIndexOf(".") + 1), nr.indexOf(t2.toLowerCase()) >= 0 || Ja({ code: da.MESSAGE_IMAGE_TYPES_LIMIT });
        } }, { key: "_checkImageSize", value: function(e3) {
          var t2 = 0;
          return 0 === (t2 = se ? e3.size : e3.files[0].size) ? Ja({ code: da.MESSAGE_FILE_IS_EMPTY }) : t2 < this.UPLOAD_SIZE_LIMIT.IMAGE || this._checkSizeError("IMAGE");
        } }, { key: "doUploadFile", value: function(e3) {
          return e3.file ? e3.file.files[0].size > this.UPLOAD_SIZE_LIMIT.FILE ? this._checkSizeError("FILE") : 0 === e3.file.files[0].size ? Ja({ code: da.MESSAGE_FILE_IS_EMPTY }) : (this._setUploadFileType(ir), this.uploadByCOS(e3)) : Ja({ code: da.MESSAGE_FILE_SELECT_FILE_FIRST });
        } }, { key: "doUploadVideo", value: function(e3) {
          return e3.file.videoFile.size > this.UPLOAD_SIZE_LIMIT.VIDEO ? this._checkSizeError("VIDEO") : 0 === e3.file.videoFile.size ? Ja({ code: da.MESSAGE_FILE_IS_EMPTY }) : -1 === or.indexOf(e3.file.videoFile.type) ? Ja({ code: da.MESSAGE_VIDEO_TYPES_LIMIT }) : (this._setUploadFileType(ar), se ? this.handleVideoUpload({ file: e3.file.videoFile, onProgress: e3.onProgress }) : ae ? this.handleVideoUpload(e3) : void 0);
        } }, { key: "handleVideoUpload", value: function(e3) {
          var t2 = this;
          return new Promise(function(n3, o2) {
            t2.uploadByCOS(e3).then(function(e4) {
              n3(e4);
            }).catch(function() {
              t2.uploadByCOS(e3).then(function(e4) {
                n3(e4);
              }).catch(function() {
                o2(new Wa({ code: da.MESSAGE_VIDEO_UPLOAD_FAIL }));
              });
            });
          });
        } }, { key: "doUploadAudio", value: function(e3) {
          return e3.file ? e3.file.size > this.UPLOAD_SIZE_LIMIT.AUDIO ? this._checkSizeError("AUDIO") : 0 === e3.file.size ? Ja({ code: da.MESSAGE_FILE_IS_EMPTY }) : (this._setUploadFileType(rr), this.uploadByCOS(e3)) : Ja({ code: da.MESSAGE_AUDIO_UPLOAD_FAIL });
        } }, { key: "uploadByCOS", value: function(e3) {
          var t2 = this;
          if (!it(this._cosUploadMethod))
            return this.outputWarning("PluginUndetected"), Ja({ code: da.COS_UNDETECTED });
          if (this.timUploadPlugin)
            return this._uploadWithPreSigUrl(e3);
          var n3 = new ka("upload"), o2 = "".concat(this._n, ".uploadByCOS"), s3 = Date.now(), a2 = this._getFile(e3);
          return new Promise(function(r2, i2) {
            var u2 = se ? t2._createCosOptionsWXMiniApp(e3) : t2._createCosOptionsWeb(e3), c2 = t2;
            t2._cosUploadMethod(u2, function(e4, u3) {
              var l2 = /* @__PURE__ */ Object.create(null);
              if (u3) {
                if (e4 || st(u3.files) && u3.files[0].error) {
                  var p2 = new Wa({ code: da.MESSAGE_FILE_UPLOAD_FAIL });
                  return n3.setError(p2, true, t2.getNetworkType()).end(), xe.l("".concat(o2, " failed. error:"), u3.files[0].error), 403 === u3.files[0].error.statusCode && (xe.w("".concat(o2, " failed. cos AccessKeyId was invalid, regain auth key!")), t2._getAuthorizationKey()), void i2(p2);
                }
                l2.fileName = a2.name, l2.fileSize = a2.size, l2.fileType = a2.type.slice(a2.type.indexOf("/") + 1).toLowerCase(), l2.location = se ? u3.Location : u3.files[0].data.Location;
                var d2 = Date.now() - s3, g2 = c2._formatFileSize(a2.size), _2 = c2._formatSpeed(1e3 * a2.size / d2), h2 = "size:".concat(g2, " time:").concat(d2, "ms speed:").concat(_2);
                xe.l("".concat(o2, " success. name:").concat(a2.name, " ").concat(h2)), r2(l2);
                var f2 = t2.getModule($n);
                return f2.addCost(Ma, d2), f2.addFileSize(Ma, a2.size), void n3.setNetworkType(t2.getNetworkType()).setMessage(h2).end();
              }
              var v2 = new Wa({ code: da.MESSAGE_FILE_UPLOAD_FAIL });
              n3.setError(v2, true, c2.getNetworkType()).end(), xe.w("".concat(o2, " failed. error:"), e4), 403 === e4.statusCode && (xe.w("".concat(o2, " failed. cos AccessKeyId was invalid, regain auth key!")), t2._getAuthorizationKey()), i2(v2);
            });
          });
        } }, { key: "_uploadWithPreSigUrl", value: function(e3) {
          var t2 = this, n3 = "".concat(this._n, "._uploadWithPreSigUrl"), o2 = this._getFile(e3);
          return this._createCosOptionsPreSigUrl(e3).then(function(e4) {
            return new Promise(function(s3, a2) {
              var r2 = new ka("upload"), i2 = e4.requestSnapshotUrl, u2 = void 0 === i2 ? void 0 : i2, c2 = g(e4, ci), l2 = Date.now();
              t2._cosUploadMethod(c2, function(e5, i3) {
                if (e5 || 403 === i3.statusCode)
                  return r2.setError(new Wa(e5), true, t2.getNetworkType()).end(), xe.l("".concat(n3, " failed, error:"), e5), void a2(new Wa({ code: da.MESSAGE_FILE_UPLOAD_FAIL }));
                var p2 = /* @__PURE__ */ Object.create(null), d2 = i3.data.location || "";
                t2.isPrivateNetWork() || 0 !== d2.indexOf("https://") && 0 !== d2.indexOf("http://") || (d2 = d2.split("//")[1]), p2.fileName = o2.name, p2.fileSize = o2.size, p2.fileType = o2.type.slice(o2.type.indexOf("/") + 1).toLowerCase(), p2.location = d2;
                var g2 = Date.now() - l2, _2 = t2._formatFileSize(o2.size), h2 = t2._formatSpeed(1e3 * o2.size / g2), f2 = "size:".concat(_2, ",time:").concat(g2, "ms,speed:").concat(h2, " res:").concat(JSON.stringify(i3.data));
                xe.l("".concat(n3, " success name:").concat(o2.name, ",").concat(f2)), r2.setNetworkType(t2.getNetworkType()).setMessage(f2).end();
                var v2 = t2.getModule($n);
                v2.addCost(Ma, g2), v2.addFileSize(Ma, o2.size);
                var m2 = [];
                if (c2.thumbUrl && c2.largeUrl && (m2 = [t2._getSmallImageInfoByUrl(c2.thumbUrl, p2), t2._getLargeImageInfoByUrl(c2.largeUrl, p2)]), u2 && m2.push(t2._getSnapshotInfoByUrl(u2, p2)), m2.length > 0)
                  return Promise.all(m2).then(function() {
                    s3(p2);
                  });
                s3(p2);
              });
            });
          });
        } }, { key: "_getRawOrUploadProxyUrl", value: function(e3) {
          var t2 = this.getModule(qn).getFileUploadProxy(), n3 = e3;
          return t2 && (n3 = e3.replace(/^https:\/\/[^/]+/, t2)), n3;
        } }, { key: "_getFile", value: function(e3) {
          var t2;
          return st(e3.file.files) || (t2 = e3.file.files, "filelist" === ct(t2)) ? e3.file.files[0] : e3.file;
        } }, { key: "_formatFileSize", value: function(e3) {
          return e3 < 1024 ? e3 + "B" : e3 < 1048576 ? Math.floor(e3 / 1024) + "KB" : Math.floor(e3 / 1048576) + "MB";
        } }, { key: "_formatSpeed", value: function(e3) {
          return e3 <= 1048576 ? bt(e3 / 1024, 1) + "KB/s" : bt(e3 / 1048576, 1) + "MB/s";
        } }, { key: "_createCosOptionsWeb", value: function(e3) {
          var t2 = this._getFile(e3), n3 = t2.name, o2 = n3.slice(n3.lastIndexOf(".")), s3 = this._genFileName("".concat(_t(999999)).concat(o2));
          return { files: [{ Bucket: "".concat(this.bucketName, "-").concat(this.appid), Region: this.region, Key: "".concat(this.directory, "/").concat(s3), Body: t2 }], SliceSize: 1048576, onProgress: function(t3) {
            if ("function" == typeof e3.onProgress)
              try {
                e3.onProgress(t3.percent);
              } catch (n4) {
                xe.w("onProgress callback error:", n4);
              }
          }, onFileFinish: function(e4, t3, n4) {
          } };
        } }, { key: "_createCosOptionsWXMiniApp", value: function(e3) {
          var t2 = this._getFile(e3), n3 = this._genFileName(t2.name), o2 = t2.url;
          return { Bucket: "".concat(this.bucketName, "-").concat(this.appid), Region: this.region, Key: "".concat(this.directory, "/").concat(n3), FilePath: o2, onProgress: function(t3) {
            if (xe.l(JSON.stringify(t3)), "function" == typeof e3.onProgress)
              try {
                e3.onProgress(t3.percent);
              } catch (n4) {
                xe.w("onProgress callback error:", n4);
              }
          } };
        } }, { key: "_createCosOptionsPreSigUrl", value: function(e3) {
          var t2 = this, n3 = "", o2 = "", s3 = 0, a2 = this._getFile(e3);
          if (se)
            n3 = this._genFileName(a2.name), o2 = a2.url, s3 = 1;
          else {
            var r2 = a2.name, i2 = r2.slice(r2.lastIndexOf("."));
            n3 = this._genFileName("".concat(_t(999999)).concat(i2)), o2 = a2, s3 = 0;
          }
          return this._getCosPreSigUrl({ fileType: this.uploadFileType, fileName: n3, uploadMethod: s3, duration: this.duration }).then(function(s4) {
            var a3 = s4.uploadUrl, r3 = s4.downloadUrl, i3 = s4.requestSnapshotUrl, u2 = void 0 === i3 ? void 0 : i3, c2 = s4.thumbUrl, l2 = s4.largeUrl;
            return { url: t2._getRawOrUploadProxyUrl(a3), fileType: t2.uploadFileType, fileName: n3, resources: o2, downloadUrl: r3, requestSnapshotUrl: u2, thumbUrl: c2, largeUrl: l2, onProgress: function(t3) {
              if ("function" == typeof e3.onProgress)
                try {
                  e3.onProgress(t3.percent);
                } catch (n4) {
                  xe.w("onProgress callback error:", n4), xe.e(n4);
                }
            } };
          });
        } }, { key: "_genFileName", value: function(e3) {
          return "".concat(Rt(), "-").concat(e3);
        } }, { key: "_setUploadFileType", value: function(e3) {
          this.uploadFileType = e3;
        } }, { key: "_getSnapshotInfoByUrl", value: function(e3, t2) {
          var n3 = this, o2 = new ka("getSnapshotInfo");
          return this.request({ protocolName: qs, requestData: { platform: this.getPlatform(), coverName: this._genFileName(_t(99999)), requestSnapshotUrl: e3 } }).then(function(e4) {
            var n4 = (e4.data || {}).snapshotUrl;
            return o2.setMessage("snapshotUrl:".concat(n4)).end(), jt(n4) ? {} : At(n4).then(function(e5) {
              t2.snapshotInfo = { snapshotUrl: n4, snapshotWidth: e5.width, snapshotHeight: e5.height };
            });
          }).catch(function(e4) {
            return xe.w("".concat(n3._n, "._getSnapshotInfoByUrl failed. error:"), e4), o2.setCode(e4.errorCode).setMessage(e4.errorInfo).end(), {};
          });
        } }, { key: "_getSmallImageInfoByUrl", value: function(e3, t2) {
          return At(e3).then(function(n3) {
            t2.smallImageUrl = e3, t2.smallImageWidth = n3.width, t2.smallImageHeight = n3.height;
          });
        } }, { key: "_getLargeImageInfoByUrl", value: function(e3, t2) {
          return At(e3).then(function(n3) {
            t2.largeImageUrl = e3, t2.largeImageWidth = n3.width, t2.largeImageHeight = n3.height;
          });
        } }, { key: "reset", value: function() {
          xe.l("".concat(this._n, ".reset"));
        } }]), s2;
      }(ro), pi = ["downloadKey", "pbDownloadKey", "messageList"], di = function() {
        function e2(t2) {
          o(this, e2), this._n = "MergerMessageHandler", this._messageModule = t2;
        }
        return a(e2, [{ key: "uploadMergerMessage", value: function(e3, t2) {
          var n2 = this, o2 = "".concat(this._n, ".").concat("uploadMergerMessage");
          xe.d("".concat(o2, " message:"), e3, "messageBytes:".concat(t2));
          var s2 = e3.payload.messageList, a2 = s2.length, r2 = new ka("uploadMergerMessage");
          return this._messageModule.request({ protocolName: Ys, requestData: { messageList: s2 } }).then(function(e4) {
            xe.d("".concat(o2, " ok. response:"), e4.data);
            var s3 = e4.data, i2 = s3.pbDownloadKey, u2 = s3.downloadKey, c2 = { pbDownloadKey: i2, downloadKey: u2, messageNumber: a2 };
            return r2.setNetworkType(n2._messageModule.getNetworkType()).setMessage("".concat(a2, "-").concat(t2, "-").concat(u2)).end(), c2;
          }).catch(function(e4) {
            throw xe.w("".concat(o2, " failed. error:"), e4), n2._messageModule.probeNetwork().then(function(t3) {
              var n3 = v(t3, 2), o3 = n3[0], s3 = n3[1];
              r2.setError(e4, o3, s3).end();
            }), e4;
          });
        } }, { key: "downloadMergerMessage", value: function(e3) {
          var n2 = this, o2 = "".concat(this._n, ".").concat("downloadMergerMessage");
          xe.d("".concat(o2, " message:"), e3);
          var s2 = e3.payload.downloadKey, a2 = this._messageModule.getFileDownloadProxy(), r2 = new ka("downloadMergerMessage");
          return r2.setMessage("downloadKey:".concat(s2)), this._messageModule.request({ protocolName: js, requestData: { downloadKey: s2 } }).then(function(s3) {
            if (xe.d("".concat(o2, " ok. response:"), s3.data), it(e3.clearElement)) {
              var i2 = e3.payload;
              i2.downloadKey, i2.pbDownloadKey, i2.messageList;
              var u2 = g(i2, pi);
              e3.clearElement(), e3.setElement({ type: e3.type, content: t({ messageList: s3.data.messageList }, u2) }, a2);
            } else {
              var c2 = [];
              s3.data.messageList.forEach(function(e4) {
                if (!jt(e4)) {
                  var t2 = new xa(e4, a2);
                  c2.push(t2);
                }
              }), e3.payload.messageList = c2, e3.payload.downloadKey = "", e3.payload.pbDownloadKey = "";
            }
            return r2.setNetworkType(n2._messageModule.getNetworkType()).end(), e3;
          }).catch(function(e4) {
            throw xe.w("".concat(o2, " failed. key:").concat(s2, " error:"), e4), n2._messageModule.probeNetwork().then(function(t2) {
              var n3 = v(t2, 2), o3 = n3[0], s3 = n3[1];
              r2.setError(e4, o3, s3).end();
            }), e4;
          });
        } }, { key: "createMergerMessagePack", value: function(e3, t2, n2) {
          return e3.conversationType === S.CONV_C2C ? this._createC2CMergerMessagePack(e3, t2, n2) : this._createGroupMergerMessagePack(e3, t2, n2);
        } }, { key: "_createC2CMergerMessagePack", value: function(e3, t2, n2) {
          var o2 = null;
          t2 && (t2.offlinePushInfo && (o2 = t2.offlinePushInfo), true === t2.onlineUserOnly && (o2 ? o2.disablePush = true : o2 = { disablePush: true }));
          var s2 = [];
          if (ot(t2) && ot(t2.messageControlInfo)) {
            var a2 = t2.messageControlInfo, r2 = a2.excludedFromUnreadCount, i2 = a2.excludedFromLastMessage, u2 = a2.excludedFromContentModeration;
            true === r2 && s2.push("NoUnread"), true === i2 && s2.push("NoLastMsg"), true === u2 && s2.push("NoMsgCheck");
          }
          var c2 = "";
          et(e3.cloudCustomData) && e3.cloudCustomData.length > 0 && (c2 = e3.cloudCustomData);
          var l2 = n2.pbDownloadKey, p2 = n2.downloadKey, d2 = n2.messageNumber, g2 = e3.payload, _2 = g2.title, h2 = g2.abstractList, f2 = g2.compatibleText, v2 = this._messageModule.getModule(Gn), m2 = v2 && v2.isOnlineMessage(e3, t2) ? 0 : void 0;
          return { protocolName: _o, tjgID: this._messageModule.generateTjgID(e3), requestData: { fromAccount: this._messageModule.getMyUserID(), toAccount: e3.to, msgBody: [{ msgType: e3.type, msgContent: { pbDownloadKey: l2, downloadKey: p2, title: _2, abstractList: h2, compatibleText: f2, messageNumber: d2 } }], cloudCustomData: c2, clientTime: e3.clientTime, msgSeq: e3.sequence, msgRandom: e3.random, msgLifeTime: m2, offlinePushInfo: o2 ? { pushFlag: true === o2.disablePush ? 1 : 0, title: o2.title || "", desc: o2.description || "", ext: o2.extension || "", apnsInfo: { badgeMode: true === o2.ignoreIOSBadge ? 1 : 0 }, androidInfo: { OPPOChannelID: o2.androidOPPOChannelID || "" } } : void 0, messageControlInfo: 0 !== m2 ? s2 : void 0, isSupportExtension: true === e3.isSupportExtension ? 1 : 0 } };
        } }, { key: "_createGroupMergerMessagePack", value: function(e3, t2, n2) {
          var o2 = null;
          t2 && t2.offlinePushInfo && (o2 = t2.offlinePushInfo);
          var s2 = [];
          if (ot(t2) && ot(t2.messageControlInfo)) {
            var a2 = t2.messageControlInfo, r2 = a2.excludedFromUnreadCount, i2 = a2.excludedFromLastMessage, u2 = a2.excludedFromContentModeration;
            true === r2 && s2.push("NoUnread"), true === i2 && s2.push("NoLastMsg"), true === u2 && s2.push("NoMsgCheck");
          }
          var c2 = "";
          et(e3.cloudCustomData) && e3.cloudCustomData.length > 0 && (c2 = e3.cloudCustomData);
          var l2 = n2.pbDownloadKey, p2 = n2.downloadKey, d2 = n2.messageNumber, g2 = e3.payload, _2 = g2.title, h2 = g2.abstractList, f2 = g2.compatibleText, v2 = this._messageModule.getModule(Un), m2 = v2 && v2.isOnlineMessage(e3, t2) ? 1 : 0;
          return { protocolName: ho, tjgID: this._messageModule.generateTjgID(e3), requestData: { fromAccount: this._messageModule.getMyUserID(), groupID: e3.to, msgBody: [{ msgType: e3.type, msgContent: { pbDownloadKey: l2, downloadKey: p2, title: _2, abstractList: h2, compatibleText: f2, messageNumber: d2 } }], random: e3.random, priority: e3.priority, clientSequence: e3.clientSequence, groupAtInfo: void 0, cloudCustomData: c2, onlineOnlyFlag: m2, offlinePushInfo: o2 ? { pushFlag: true === o2.disablePush ? 1 : 0, title: o2.title || "", desc: o2.description || "", ext: o2.extension || "", apnsInfo: { badgeMode: true === o2.ignoreIOSBadge ? 1 : 0 }, androidInfo: { OPPOChannelID: o2.androidOPPOChannelID || "" } } : void 0, clientTime: e3.clientTime, needReadReceipt: true !== e3.needReadReceipt || v2.isMessageFromOrToAVChatroom(e3.to) ? 0 : 1, messageControlInfo: 0 === m2 ? s2 : void 0, isSupportExtension: true === e3.isSupportExtension ? 1 : 0 } };
        } }]), e2;
      }(), gi = { ERR_SVR_COMM_SENSITIVE_TEXT: 80001, ERR_SVR_COMM_BODY_SIZE_LIMIT: 80002, OPEN_SERVICE_OVERLOAD_ERROR: 60022, ERR_SVR_MSG_PKG_PARSE_FAILED: 20001, ERR_SVR_MSG_INTERNAL_AUTH_FAILED: 20002, ERR_SVR_MSG_INVALID_ID: 20003, ERR_SVR_MSG_PUSH_DENY: 20006, ERR_SVR_MSG_IN_PEER_BLACKLIST: 20007, ERR_SVR_MSG_BOTH_NOT_FRIEND: 20009, ERR_SVR_MSG_NOT_PEER_FRIEND: 20010, ERR_SVR_MSG_NOT_SELF_FRIEND: 20011, ERR_SVR_MSG_SHUTUP_DENY: 20012, ERR_SVR_GROUP_INVALID_PARAMETERS: 10004, ERR_SVR_GROUP_PERMISSION_DENY: 10007, ERR_SVR_GROUP_NOT_FOUND: 10010, ERR_SVR_GROUP_INVALID_GROUPID: 10015, ERR_SVR_GROUP_REJECT_FROM_THIRDPARTY: 10016, ERR_SVR_GROUP_SHUTUP_DENY: 10017, MESSAGE_SEND_FAIL: 2100, OVER_FREQUENCY_LIMIT: 2996 }, _i = [da.MESSAGE_ONPROGRESS_FUNCTION_ERROR, da.MESSAGE_IMAGE_SELECT_FILE_FIRST, da.MESSAGE_IMAGE_TYPES_LIMIT, da.MESSAGE_FILE_IS_EMPTY, da.MESSAGE_IMAGE_SIZE_LIMIT, da.MESSAGE_FILE_SELECT_FILE_FIRST, da.MESSAGE_FILE_SIZE_LIMIT, da.MESSAGE_VIDEO_SIZE_LIMIT, da.MESSAGE_VIDEO_TYPES_LIMIT, da.MESSAGE_AUDIO_UPLOAD_FAIL, da.MESSAGE_AUDIO_SIZE_LIMIT, da.COS_UNDETECTED];
      function hi(e2) {
        var t2 = false;
        return Object.values(gi).includes(e2) && (t2 = true), (e2 >= 120001 && e2 <= 13e4 || e2 >= 10100 && e2 <= 10200) && (t2 = true), t2;
      }
      var fi = function(e2) {
        i(s2, e2);
        var n2 = f(s2);
        function s2(e3) {
          var t2;
          return o(this, s2), (t2 = n2.call(this, e3))._n = "MessageModule", t2._messageOptionsMap = /* @__PURE__ */ new Map(), t2._mergerMessageHandler = new di(_(t2)), t2;
        }
        return a(s2, [{ key: "createTextMessage", value: function(e3) {
          var t2 = this.getMyUserID();
          e3.currentUser = t2, e3.senderTinyID = this.getMyTinyID();
          var n3 = new Ha(e3), o2 = "string" == typeof e3.payload ? e3.payload : e3.payload.text, s3 = new La({ text: o2 }), a2 = this._getNickAndAvatarByUserID(t2);
          return n3.setElement(s3), n3.setNickAndAvatar(a2), n3.setNameCard(this._getNameCardByGroupID(n3)), n3;
        } }, { key: "createImageMessage", value: function(e3) {
          var t2 = this.getMyUserID();
          e3.currentUser = t2, e3.senderTinyID = this.getMyTinyID();
          var n3 = new Ha(e3);
          if (se) {
            var o2 = e3.payload.file;
            if (Ze(o2))
              return void this.outputWarning("FileUnsupportedInMP", "createImageMessage");
            var s3 = o2.tempFiles[0].path || o2.tempFiles[0].tempFilePath, a2 = { url: s3, name: s3.slice(s3.lastIndexOf("/") + 1), size: o2.tempFiles && o2.tempFiles[0].size || 1, type: s3.slice(s3.lastIndexOf(".") + 1).toLowerCase() };
            e3.payload.file = a2;
          } else if (ae) {
            if (Ze(e3.payload.file)) {
              var r2 = e3.payload.file;
              e3.payload.file = { files: [r2] };
            } else if (ot(e3.payload.file) && "undefined" != typeof uni) {
              var i2 = e3.payload.file.tempFiles[0];
              e3.payload.file = { files: [i2] };
            }
          }
          var u2 = new Aa({ imageFormat: Ve.UNKNOWN, uuid: this._generateUUID(e3.payload.file), file: e3.payload.file }), c2 = this._getNickAndAvatarByUserID(t2);
          return n3.setElement(u2), n3.setNickAndAvatar(c2), n3.setNameCard(this._getNameCardByGroupID(n3)), this._messageOptionsMap.set(n3.clientSequence, e3), n3;
        } }, { key: "createAudioMessage", value: function(e3) {
          var t2 = e3.payload.file;
          if (se) {
            var n3 = { url: t2.tempFilePath, name: t2.tempFilePath.slice(t2.tempFilePath.lastIndexOf("/") + 1), size: t2.fileSize, second: parseInt(t2.duration) / 1e3, type: t2.tempFilePath.slice(t2.tempFilePath.lastIndexOf(".") + 1).toLowerCase() };
            e3.payload.file = n3;
          }
          var o2 = this.getMyUserID();
          e3.currentUser = o2, e3.senderTinyID = this.getMyTinyID();
          var s3 = new Ha(e3), a2 = new Na({ second: Math.floor(t2.duration / 1e3), size: t2.fileSize || t2.size, url: t2.tempFilePath, uuid: this._generateUUID(e3.payload.file) }), r2 = this._getNickAndAvatarByUserID(o2);
          return s3.setElement(a2), s3.setNickAndAvatar(r2), s3.setNameCard(this._getNameCardByGroupID(s3)), this._messageOptionsMap.set(s3.clientSequence, e3), s3;
        } }, { key: "createVideoMessage", value: function(e3) {
          var t2 = this.getMyUserID();
          e3.currentUser = t2, e3.senderTinyID = this.getMyTinyID(), e3.payload.file.thumbUrl = "", e3.payload.file.thumbSize = 0;
          var n3 = {};
          if (se) {
            if (ee)
              return void this.outputWarning("VideoUnsupportedInAlipay");
            if (Ze(e3.payload.file))
              return void this.outputWarning("FileUnsupportedInMP", "createVideoMessage");
            var o2 = e3.payload.file;
            st(o2.tempFiles) && (o2 = o2.tempFiles[0]), n3.url = o2.tempFilePath, n3.name = o2.tempFilePath.slice(o2.tempFilePath.lastIndexOf("/") + 1), n3.size = o2.size || 1, n3.second = o2.duration || 0, n3.type = o2.tempFilePath.slice(o2.tempFilePath.lastIndexOf(".") + 1).toLowerCase();
          } else if (ae) {
            if (Ze(e3.payload.file)) {
              var s3 = e3.payload.file;
              e3.payload.file.files = [s3];
            } else if (ot(e3.payload.file) && "undefined" != typeof uni) {
              var a2 = e3.payload.file.tempFile;
              e3.payload.file.files = [a2];
            }
            var r2 = e3.payload.file;
            n3.url = window.URL.createObjectURL(r2.files[0]), n3.name = r2.files[0].name, n3.size = r2.files[0].size || 1, n3.second = r2.files[0].duration || 0, n3.type = r2.files[0].type.split("/")[1];
          }
          e3.payload.file.videoFile = n3;
          var i2 = new Ha(e3), u2 = new Fa({ videoFormat: n3.type, videoSecond: bt(n3.second, 0), videoSize: n3.size, remoteVideoUrl: "", videoUrl: n3.url, videoUUID: this._generateUUID(e3.payload.file.videoFile), thumbUUID: this._generateUUID(e3.payload.file.videoFile), thumbWidth: e3.payload.file.width || 200, thumbHeight: e3.payload.file.height || 200, thumbUrl: e3.payload.file.thumbUrl, thumbSize: e3.payload.file.thumbSize, thumbFormat: e3.payload.file.thumbUrl.slice(e3.payload.file.thumbUrl.lastIndexOf(".") + 1).toLowerCase() }), c2 = this._getNickAndAvatarByUserID(t2);
          return i2.setElement(u2), i2.setNickAndAvatar(c2), i2.setNameCard(this._getNameCardByGroupID(i2)), this._messageOptionsMap.set(i2.clientSequence, e3), i2;
        } }, { key: "createCustomMessage", value: function(e3) {
          var t2 = this.getMyUserID();
          e3.currentUser = t2, e3.senderTinyID = this.getMyTinyID();
          var n3 = new Ha(e3), o2 = new wa({ data: e3.payload.data, description: e3.payload.description, extension: e3.payload.extension }), s3 = this._getNickAndAvatarByUserID(t2);
          return n3.setElement(o2), n3.setNickAndAvatar(s3), n3.setNameCard(this._getNameCardByGroupID(n3)), n3;
        } }, { key: "createFaceMessage", value: function(e3) {
          var t2 = this.getMyUserID();
          e3.currentUser = t2, e3.senderTinyID = this.getMyTinyID();
          var n3 = new Ha(e3), o2 = new Ra(e3.payload), s3 = this._getNickAndAvatarByUserID(t2);
          return n3.setElement(o2), n3.setNickAndAvatar(s3), n3.setNameCard(this._getNameCardByGroupID(n3)), n3;
        } }, { key: "createMergerMessage", value: function(e3) {
          var t2 = this.getMyUserID();
          e3.currentUser = t2, e3.senderTinyID = this.getMyTinyID();
          var n3 = this._getNickAndAvatarByUserID(t2), o2 = new Ha(e3), s3 = new Va(e3.payload);
          return o2.setElement(s3), o2.setNickAndAvatar(n3), o2.setNameCard(this._getNameCardByGroupID(o2)), o2.setRelayFlag(true), o2;
        } }, { key: "createForwardMessage", value: function(e3) {
          var t2 = e3.to, n3 = e3.conversationType, o2 = e3.priority, s3 = e3.payload, a2 = e3.needReadReceipt, r2 = e3.receiverList, i2 = this.getMyUserID(), u2 = this._getNickAndAvatarByUserID(i2);
          if (s3.type === S.MSG_GRP_TIP)
            return Ja({ code: da.MESSAGE_FORWARD_TYPE_INVALID });
          var c2 = { to: t2, conversationType: n3, conversationID: "".concat(n3).concat(t2), priority: o2, isPlaceMessage: 0, status: Qt.UNSEND, currentUser: i2, senderTinyID: this.getMyTinyID(), cloudCustomData: e3.cloudCustomData || s3.cloudCustomData || "", needReadReceipt: a2, receiverList: r2, isSupportExtension: e3.isSupportExtension || false }, l2 = new Ha(c2);
          return l2.setElement(s3.getElements()[0]), l2.setNickAndAvatar(u2), l2.setNameCard(this._getNameCardByGroupID(s3)), l2.setRelayFlag(true), l2;
        } }, { key: "downloadMergerMessage", value: function(e3) {
          return this._mergerMessageHandler.downloadMergerMessage(e3);
        } }, { key: "createFileMessage", value: function(e3) {
          if (se) {
            if (!X && !Q && !ne)
              return;
            var n3 = re.getSystemInfoSync().SDKVersion;
            if (X && Ot(n3, "2.5.0") < 0)
              return void this.outputWarning("WXChooseMessageFile");
            if (Q && Ot(n3, "1.18.0") < 0)
              return void this.outputWarning("QQChooseMessageFile");
          }
          if (ae || ne) {
            if (Ze(e3.payload.file)) {
              var o2 = e3.payload.file;
              e3.payload.file = { files: [o2] };
            } else if (ot(e3.payload.file) && "undefined" != typeof uni) {
              var s3 = e3.payload.file, a2 = s3.tempFiles, r2 = s3.files, i2 = null;
              st(a2) ? i2 = a2[0] : st(r2) && (i2 = r2[0]), e3.payload.file = { files: [i2] };
            }
          } else if (X || Q) {
            var u2 = e3.payload.file.tempFiles, c2 = t(t({}, u2[0]), {}, { url: u2[0].path });
            e3.payload.file = { files: [c2] };
          }
          var l2 = this.getMyUserID();
          e3.currentUser = l2, e3.senderTinyID = this.getMyTinyID();
          var p2 = new Ha(e3), d2 = new ba({ uuid: this._generateUUID(e3.payload.file), file: e3.payload.file }), g2 = this._getNickAndAvatarByUserID(l2);
          return p2.setElement(d2), p2.setNickAndAvatar(g2), p2.setNameCard(this._getNameCardByGroupID(p2)), this._messageOptionsMap.set(p2.clientSequence, e3), p2;
        } }, { key: "createLocationMessage", value: function(e3) {
          var t2 = this.getMyUserID();
          e3.currentUser = t2, e3.senderTinyID = this.getMyTinyID();
          var n3 = new Ha(e3), o2 = new qa(e3.payload), s3 = this._getNickAndAvatarByUserID(t2);
          return n3.setElement(o2), n3.setNickAndAvatar(s3), n3.setNameCard(this._getNameCardByGroupID(n3)), n3;
        } }, { key: "_onCannotFindModule", value: function() {
          return Ja({ code: da.CANNOT_FIND_MODULE });
        } }, { key: "sendMessageInstance", value: function(e3, t2) {
          var n3 = this;
          if (false === this.getModule(no).filterMessage(e3, t2))
            return this._onSendMessageFailed(e3, new Wa({ code: da.PROFANITY_FOUND }));
          var o2, s3 = null;
          switch (e3.conversationType) {
            case S.CONV_C2C:
              if (!(s3 = this.getModule(Gn)))
                return this._onCannotFindModule();
              break;
            case S.CONV_GROUP:
              if (!(s3 = this.getModule(Un)))
                return this._onCannotFindModule();
              if (Tt({ groupID: e3.to })) {
                var a2 = s3.getLocalGroupProfile(e3.to);
                if (a2 && a2.isSupportTopic)
                  return Ja({ code: da.MESSAGE_SEND_GROUP_WITH_TOPIC_FAIL });
              }
              break;
            default:
              return Ja({ code: da.MESSAGE_SEND_INVALID_CONVERSATION_TYPE });
          }
          var r2 = this.getModule(Kn), i2 = this.getModule(Un);
          return r2.upload(e3).then(function() {
            n3._getSendMessageSpecifiedKey(e3) === ma && n3.getModule($n).addSuccessCount(Ma);
            return i2.guardForAVChatRoom(e3).then(function() {
              if (!e3.isSendable())
                return Ja({ code: da.MESSAGE_FILE_URL_IS_EMPTY });
              n3._addSendMessageTotalCount(e3), o2 = Date.now();
              var a3 = function(e4) {
                var t3 = "utf-8";
                ae && document && (t3 = document.charset.toLowerCase());
                var n4, o3, s4 = 0;
                if (o3 = e4.length, "utf-8" === t3 || "utf8" === t3)
                  for (var a4 = 0; a4 < o3; a4++)
                    (n4 = e4.codePointAt(a4)) <= 127 ? s4 += 1 : n4 <= 2047 ? s4 += 2 : n4 <= 65535 ? s4 += 3 : (s4 += 4, a4++);
                else if ("utf-16" === t3 || "utf16" === t3)
                  for (var r3 = 0; r3 < o3; r3++)
                    (n4 = e4.codePointAt(r3)) <= 65535 ? s4 += 2 : (s4 += 4, r3++);
                else
                  s4 = e4.replace(/[^\x00-\xff]/g, "aa").length;
                return s4;
              }(JSON.stringify(e3));
              return e3.type === S.MSG_MERGER && a3 > 11264 ? n3._mergerMessageHandler.uploadMergerMessage(e3, a3).then(function(o3) {
                var s4 = n3._mergerMessageHandler.createMergerMessagePack(e3, t2, o3);
                return n3.request(s4);
              }) : (n3.getModule(Fn).setMessageRandom(e3), e3.conversationType === S.CONV_C2C || e3.conversationType === S.CONV_GROUP ? s3.sendMessage(e3, t2) : void 0);
            }).then(function(a3) {
              var r3 = a3.data, i3 = r3.time, u2 = r3.sequence, c2 = r3.readReceiptCode;
              $e(c2) && 0 !== c2 && (new ka("sendMessageWithReceipt").setMessage("from:".concat(e3.from, " to:").concat(e3.to, " sequence:").concat(u2, " readReceiptCode:").concat(c2)).end(), xe.w("".concat(n3._n, ".sendMessageInstance readReceiptCode:").concat(c2, " message:").concat(n3.getErrorMessage(c2))));
              n3._addSendMessageSuccessCount(e3, o2), n3._messageOptionsMap.delete(e3.clientSequence);
              var l2 = n3.getModule(Fn);
              e3.status = Qt.SUCCESS, e3.time = i3;
              var p2 = false;
              if (e3.conversationType === S.CONV_GROUP)
                e3.sequence = u2;
              else if (e3.conversationType === S.CONV_C2C) {
                var d2 = l2.getLatestMessageSentByMe(e3.conversationID);
                if (d2) {
                  var g2 = d2.nick, _2 = d2.avatar;
                  g2 === e3.nick && _2 === e3.avatar || (p2 = true);
                }
              }
              if (p2 && l2.modifyMessageSentByMe({ conversationID: e3.conversationID, latestNick: e3.nick, latestAvatar: e3.avatar }), s3.isOnlineMessage(e3, t2))
                e3._onlineOnlyFlag = true;
              else {
                l2.appendToMessageList(e3);
                var h2 = e3;
                ot(t2) && ot(t2.messageControlInfo) && (true === t2.messageControlInfo.excludedFromLastMessage && (e3._isExcludedFromLastMessage = true, h2 = ""), true === t2.messageControlInfo.excludedFromUnreadCount && (e3._isExcludedFromUnreadCount = true));
                var f2 = e3.conversationType;
                if (Dt(e3.to))
                  f2 = S.CONV_TOPIC, n3.getModule(wn).onMessageSent({ groupID: qt(e3.to), topicID: e3.to, lastMessage: h2 });
                l2.onMessageSent({ conversationOptionsList: [{ conversationID: e3.conversationID, unreadCount: 0, type: f2, subType: e3.conversationSubType, lastMessage: h2 }] });
              }
              return e3.getRelayFlag() || "TIMImageElem" !== e3.type || Ut(e3.payload.imageInfoArray), Ka({ message: e3 });
            });
          }).catch(function(t3) {
            return n3._onSendMessageFailed(e3, t3);
          });
        } }, { key: "_onSendMessageFailed", value: function(e3, t2) {
          e3.status = Qt.FAIL, this.getModule(Fn).deleteMessageRandom(e3), this._addSendMessageFailCountOnUser(e3, t2);
          var n3 = new ka("sendMessage");
          return n3.setMessage("tjg_id:".concat(this.generateTjgID(e3), " type:").concat(e3.type, " from:").concat(e3.from, " to:").concat(e3.to)), this.probeNetwork().then(function(e4) {
            var o2 = v(e4, 2), s3 = o2[0], a2 = o2[1];
            n3.setError(t2, s3, a2).end();
          }), xe.e("".concat(this._n, "._onSendMessageFailed error:"), t2), Ja(new Wa({ code: t2 && t2.code ? t2.code : da.MESSAGE_SEND_FAIL, message: t2 && t2.message ? t2.message : void 0, data: { message: e3 } }));
        } }, { key: "_getSendMessageSpecifiedKey", value: function(e3) {
          if ([S.MSG_IMAGE, S.MSG_AUDIO, S.MSG_VIDEO, S.MSG_FILE].includes(e3.type))
            return ma;
          if (e3.conversationType === S.CONV_C2C)
            return ha;
          if (e3.conversationType === S.CONV_GROUP) {
            var t2 = this.getModule(Un).getLocalGroupProfile(e3.to);
            if (!t2)
              return;
            var n3 = t2.type;
            return Ct(n3) ? va : fa;
          }
        } }, { key: "_addSendMessageTotalCount", value: function(e3) {
          var t2 = this._getSendMessageSpecifiedKey(e3);
          t2 && this.getModule($n).addTotalCount(t2);
        } }, { key: "_addSendMessageSuccessCount", value: function(e3, t2) {
          var n3 = Math.abs(Date.now() - t2), o2 = this._getSendMessageSpecifiedKey(e3);
          if (o2) {
            var s3 = this.getModule($n);
            s3.addSuccessCount(o2), s3.addCost(o2, n3);
          }
        } }, { key: "_addSendMessageFailCountOnUser", value: function(e3, t2) {
          var n3, o2, s3 = t2.code, a2 = void 0 === s3 ? -1 : s3, r2 = this.getModule($n), i2 = this._getSendMessageSpecifiedKey(e3);
          i2 === ma && (n3 = a2, o2 = false, _i.includes(n3) && (o2 = true), o2) ? r2.addFailedCountOfUserSide(Ma) : hi(a2) && i2 && r2.addFailedCountOfUserSide(i2);
        } }, { key: "resendMessage", value: function(e3) {
          return e3.isResend = true, e3.status = Qt.UNSEND, this.sendMessageInstance(e3);
        } }, { key: "revokeMessage", value: function(e3) {
          var t2 = this, n3 = null;
          if (e3.conversationType === S.CONV_C2C ? n3 = this.getModule(Gn) : e3.conversationType === S.CONV_GROUP && (n3 = this.getModule(Un)), !n3)
            return this._onCannotFindModule();
          var o2 = new ka("revokeMessage");
          o2.setMessage("tjg_id:".concat(this.generateTjgID(e3), " type:").concat(e3.type, " from:").concat(e3.from, " to:").concat(e3.to));
          var s3 = "".concat(this._n, ".").concat("revokeMessage");
          return n3.revokeMessage(e3).then(function(n4) {
            var a2 = n4.data.recallRetList;
            if (!jt(a2) && 0 !== a2[0].retCode) {
              var r2 = new Wa({ code: a2[0].retCode, data: { message: e3 } });
              return o2.setCode(r2.code).setMoreMessage(r2.message).end(), Ja(r2);
            }
            return xe.i("".concat(s3, " ok. ID:").concat(e3.ID)), e3.isRevoked = true, o2.end(), t2.getModule(Fn).onMessageRevoked([e3]), Ka({ message: e3 });
          }).catch(function(n4) {
            t2.probeNetwork().then(function(e4) {
              var t3 = v(e4, 2), s4 = t3[0], a3 = t3[1];
              o2.setError(n4, s4, a3).end();
            });
            var a2 = new Wa({ code: n4 && n4.code ? n4.code : da.MESSAGE_REVOKE_FAIL, message: n4 && n4.message ? n4.message : void 0, data: { message: e3 } });
            return xe.w("".concat(s3, " failed. error:"), n4), Ja(a2);
          });
        } }, { key: "deleteMessage", value: function(e3) {
          var t2 = this, n3 = null, o2 = e3[0], s3 = o2.conversationID, a2 = "", r2 = [], i2 = [];
          if (o2.conversationType === S.CONV_C2C)
            n3 = this.getModule(Gn), a2 = s3.replace(S.CONV_C2C, ""), e3.forEach(function(e4) {
              e4 && e4.status === Qt.SUCCESS && e4.conversationID === s3 && (e4._onlineOnlyFlag || r2.push("".concat(e4.sequence, "_").concat(e4.random, "_").concat(e4.time)), i2.push(e4));
            });
          else if (o2.conversationType === S.CONV_GROUP)
            n3 = this.getModule(Un), a2 = s3.replace(S.CONV_GROUP, ""), e3.forEach(function(e4) {
              e4 && e4.status === Qt.SUCCESS && e4.conversationID === s3 && (e4._onlineOnlyFlag || r2.push("".concat(e4.sequence)), i2.push(e4));
            });
          else if (o2.conversationType === S.CONV_SYSTEM)
            return Ja({ code: da.CANNOT_DELETE_GROUP_SYSTEM_NOTICE });
          if (!n3)
            return this._onCannotFindModule();
          if (0 === r2.length)
            return this._onMessageDeleted(i2);
          r2.length > 30 && (r2 = r2.slice(0, 30), i2 = i2.slice(0, 30));
          var u2 = new ka("deleteMessage");
          u2.setMessage("to:".concat(a2, " count:").concat(r2.length));
          var c2 = "".concat(this._n, ".").concat("deleteMessage");
          return n3.deleteMessage({ to: a2, keyList: r2 }).then(function(e4) {
            return u2.end(), xe.i("".concat(c2, " ok")), t2._onMessageDeleted(i2);
          }).catch(function(e4) {
            t2.probeNetwork().then(function(t3) {
              var n5 = v(t3, 2), o3 = n5[0], s4 = n5[1];
              u2.setError(e4, o3, s4).end();
            }), xe.w("".concat(c2, " failed. error:"), e4);
            var n4 = new Wa({ code: e4 && e4.code ? e4.code : da.MESSAGE_DELETE_FAIL, message: e4 && e4.message ? e4.message : void 0 });
            return Ja(n4);
          });
        } }, { key: "_onMessageDeleted", value: function(e3) {
          return this.getModule(Fn).onMessageDeleted(e3), za({ messageList: e3 });
        } }, { key: "translateText", value: function(e3) {
          var n3 = "".concat(this._n, ".").concat("translateText"), o2 = e3.sourceTextList, s3 = e3.sourceLanguage, a2 = e3.targetLanguage, r2 = new ka("translateText");
          return r2.setMessage("sourceLanguage:".concat(s3, " targetLanguage:").concat(a2)), this.request({ protocolName: pa, requestData: { sourceTextList: o2, source: s3 || "auto", target: a2, from: this.getMyTinyID(), SDKAppID: this.getSDKAppID() } }).then(function(e4) {
            var o3 = e4.data, s4 = o3.error, a3 = o3.requestID, i2 = o3.translatedTextList;
            if (0 === s4.code)
              return r2.end(), xe.i("".concat(n3, " ok. requestID:").concat(a3)), Ka({ translatedTextList: i2 });
            throw t(t({}, s4), {}, { requestID: a3 });
          }).catch(function(e4) {
            return r2.setCode(e4.code).setMoreMessage(e4.requestID).end(), xe.w("".concat(n3, " failed. error:"), e4), Ja({ code: da.TRANSLATE_TEXT_FAIL });
          });
        } }, { key: "modifyRemoteMessage", value: function(e3) {
          var t2 = this, n3 = null, o2 = e3.conversationType, s3 = e3.to;
          if (this.getModule(Un).isMessageFromOrToAVChatroom(s3))
            return Ja({ code: da.MESSAGE_MODIFY_DISABLED_IN_AVCHATROOM, data: { message: e3 } });
          if (false === this.getModule(no).filterMessage(e3))
            return Ja({ code: da.PROFANITY_FOUND, data: { message: e3 } });
          o2 === S.CONV_C2C ? n3 = this.getModule(Gn) : o2 === S.CONV_GROUP && (n3 = this.getModule(Un));
          var a2 = new ka("modifyMessage");
          a2.setMessage("to:".concat(s3));
          var r2 = "".concat(this._n, ".modifyRemoteMessage");
          return n3.modifyRemoteMessage(e3).then(function(n4) {
            a2.end(), xe.i("".concat(r2, " ok"));
            var o3 = t2._onModifyRemoteMessageResp(e3, n4.data);
            return Ka({ message: o3 });
          }).catch(function(n4) {
            if (a2.setCode(n4.code).setMoreMessage(n4.message).end(), xe.w("".concat(r2, " failed. error:"), n4), 20027 === n4.code) {
              var o3 = t2._onModifyRemoteMessageResp(e3, n4.data);
              return Ja({ code: da.MESSAGE_MODIFY_CONFLICT, data: { message: o3 } });
            }
            return Ja({ code: n4.code, message: n4.message, data: { message: e3 } });
          });
        } }, { key: "_onModifyRemoteMessageResp", value: function(e3, t2) {
          xe.d("".concat(this._n, "._onModifyRemoteMessageResp options:"), t2);
          var n3 = e3.conversationType, o2 = e3.from, s3 = e3.to, a2 = e3.random, r2 = e3.sequence, i2 = e3.time, u2 = t2.elements, c2 = t2.messageVersion, l2 = t2.cloudCustomData, p2 = void 0 === l2 ? "" : l2;
          return this.getModule(Fn).onMessageModified({ conversationType: n3, from: o2, to: s3, time: i2, random: a2, sequence: r2, elements: u2, cloudCustomData: p2, messageVersion: c2 });
        } }, { key: "_generateUUID", value: function(e3) {
          var t2 = this.getModule(qn), n3 = "".concat(t2.getSDKAppID(), "-").concat(t2.getUserID(), "-").concat(function() {
            for (var e4 = "", t3 = 32; t3 > 0; --t3)
              e4 += ht[Math.floor(Math.random() * ft)];
            return e4;
          }()), o2 = e3.name || e3.value || e3.url || e3.tempFilePath, s3 = o2 && o2.slice(o2.lastIndexOf(".") + 1);
          return s3 && (n3 = "".concat(n3, ".").concat(s3)), n3;
        } }, { key: "getMessageOption", value: function(e3) {
          return this._messageOptionsMap.get(e3);
        } }, { key: "_getNickAndAvatarByUserID", value: function(e3) {
          return this.getModule(On).getNickAndAvatarByUserID(e3);
        } }, { key: "_getNameCardByGroupID", value: function(e3) {
          if (e3.conversationType === S.CONV_GROUP) {
            var t2 = this.getModule(Un);
            if (t2)
              return t2.getMyNameCardByGroupID(e3.to);
          }
          return "";
        } }, { key: "reset", value: function() {
          xe.l("".concat(this._n, ".reset")), this._messageOptionsMap.clear();
        } }]), s2;
      }(ro), vi = function(e2) {
        i(n2, e2);
        var t2 = f(n2);
        function n2(e3) {
          var s2;
          return o(this, n2), (s2 = t2.call(this, e3))._n = "MessageExtensionModule", s2.messageExtensionMap = /* @__PURE__ */ new Map(), s2.globalSeqMap = /* @__PURE__ */ new Map(), s2.getMessageExtensionsMap = /* @__PURE__ */ new Map(), s2;
        }
        return a(n2, [{ key: "onMessageExtensionNotify", value: function(e3) {
          var t3 = this, n3 = e3.dataList, o2 = n3.messageInfo, s2 = n3.operateType, a2 = n3.operateResultList, r2 = n3.tinyID, i2 = n3.globalSequence, u2 = o2.clientTime, c2 = o2.random, l2 = "".concat(r2, "-").concat(u2, "-").concat(c2), p2 = [], d2 = [];
          xe.l("".concat(this._n, ".onMessageExtensionNotify messageID:").concat(l2, " operateType:").concat(s2, " globalSequence:").concat(i2)), this._updateGlobalSequence(l2, i2);
          var g2 = false, _2 = false;
          a2.forEach(function(e4) {
            var n4 = e4.extensions, o3 = void 0 === n4 ? [] : n4, a3 = e4.clearSequence;
            if (1 === s2)
              g2 = true, o3.forEach(function(e5) {
                p2.push({ key: e5.key, value: e5.value });
              }), t3._updateLocalExtension(l2, o3);
            else if (2 === s2)
              _2 = true, o3.forEach(function(e5) {
                d2.push(e5.key);
              }), t3._updateLocalExtension(l2, o3);
            else if (3 === s2) {
              if (_2 = true, t3._hasLocalExtension(l2))
                t3._getLocalExtension(l2).forEach(function(e5, t4) {
                  e5.seq <= a3 && !jt(e5.value) && d2.push(t4);
                });
              t3._clearLocalExtension(l2, a3);
            }
          }), g2 && this.emitOuterEvent(E.MESSAGE_EXTENSIONS_UPDATED, { messageID: l2, extensions: p2 }), _2 && this.emitOuterEvent(E.MESSAGE_EXTENSIONS_DELETED, { messageID: l2, keyList: d2 });
        } }, { key: "setMessageExtensions", value: function(e3, t3) {
          var n3 = this;
          if (!this.canIUse(B.MSG_EXT))
            return Ja({ code: da.CANNOT_USE_COMMERCIAL_ABILITY });
          var o2 = "".concat(this._n, ".").concat("setMessageExtensions"), s2 = e3.ID, a2 = e3.conversationID, r2 = e3.sequence, i2 = e3.time, u2 = m(t3);
          t3.length > 20 && (u2 = t3.slice(0, 20), xe.w("".concat(o2, ". the length of extensions cannot exceed 20.")));
          var c2 = "conversationID:".concat(a2, " messageID:").concat(s2, " sequence:").concat(r2, " time:").concat(i2, " count:").concat(u2.length), l2 = new ka("setMessageExtensions");
          return l2.setMessage(c2), xe.l("".concat(o2, " ").concat(c2)), this._modifyMessageExtensions(e3, u2).then(function(e4) {
            var t4 = e4.resultList, n4 = e4.successCount, s3 = e4.failureCount, a3 = "success count:".concat(n4, " fail count:").concat(s3);
            return l2.setMoreMessage(a3).end(), xe.l("".concat(o2, " ok. ").concat(a3)), Ka({ extensions: t4 });
          }).catch(function(e4) {
            return n3.probeNetwork().then(function(t4) {
              var n4 = v(t4, 2), o3 = n4[0], s3 = n4[1];
              l2.setError(e4, o3, s3).end();
            }), xe.e("".concat(o2, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "getMessageExtensions", value: function(e3) {
          var t3 = this;
          if (!this.canIUse(B.MSG_EXT))
            return Ja({ code: da.CANNOT_USE_COMMERCIAL_ABILITY });
          var n3 = "".concat(this._n, ".").concat("getMessageExtensions"), o2 = e3.ID, s2 = e3.conversationID, a2 = e3.sequence, r2 = e3.time, i2 = "conversationID:".concat(s2, " messageID:").concat(o2, " sequence:").concat(a2, " time:").concat(r2), u2 = new ka("getMessageExtensions");
          u2.setMessage(i2), xe.l("".concat(n3, " ").concat(i2));
          var c2 = void 0;
          return this.getMessageExtensionsMap.has(o2) && (c2 = this._getGlobalSequence(o2)), this._getMessageExtensions(e3, c2).then(function(e4) {
            return u2.end(), xe.l("".concat(n3, " ok. total count:").concat(e4.length)), at(c2) && e4.length > 0 && t3.getMessageExtensionsMap.set(o2, 1), Ka({ extensions: e4 });
          }).catch(function(e4) {
            return t3.probeNetwork().then(function(t4) {
              var n4 = v(t4, 2), o3 = n4[0], s3 = n4[1];
              u2.setError(e4, o3, s3).end();
            }), xe.e("".concat(n3, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "deleteMessageExtensions", value: function(e3, t3) {
          var n3 = this;
          if (!this.canIUse(B.MSG_EXT))
            return Ja({ code: da.CANNOT_USE_COMMERCIAL_ABILITY });
          var o2 = "".concat(this._n, ".").concat("deleteMessageExtensions"), s2 = [], a2 = 3;
          jt(t3) || (a2 = 2, t3.forEach(function(e4) {
            s2.push({ key: e4, value: "", seq: 0 });
          }));
          var r2 = e3.ID, i2 = e3.conversationID, u2 = e3.sequence, c2 = e3.time, l2 = "conversationID:".concat(i2, " messageID:").concat(r2, " sequence:").concat(u2, " time:").concat(c2, " operateType:").concat(a2), p2 = new ka("deleteMessageExtensions");
          return p2.setMessage(l2), xe.l("".concat(o2, " ").concat(l2)), this._modifyMessageExtensions(e3, s2, a2).then(function(e4) {
            var t4 = e4.resultList, n4 = e4.successCount, s3 = e4.failureCount, r3 = "";
            return 2 === a2 && (r3 = "success count:".concat(n4, " fail count:").concat(s3)), p2.setMoreMessage("".concat(r3)).end(), xe.l("".concat(o2, " ok. ").concat(r3)), Ka({ extensions: t4 });
          }).catch(function(e4) {
            return n3.probeNetwork().then(function(t4) {
              var n4 = v(t4, 2), o3 = n4[0], s3 = n4[1];
              p2.setError(e4, o3, s3).end();
            }), xe.e("".concat(o2, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "_modifyMessageExtensions", value: function(e3, t3) {
          var n3 = this, o2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, s2 = Dt(e3.to) ? S.CONV_TOPIC : e3.conversationType, a2 = void 0;
          3 !== o2 && (a2 = this._getRequestExtensions(e3, t3));
          var r2 = null;
          switch (s2) {
            case S.CONV_C2C:
              r2 = this.getModule(Gn);
              break;
            case S.CONV_GROUP:
              r2 = this.getModule(Un);
              break;
            case S.CONV_TOPIC:
              r2 = this.getModule(wn);
              break;
            default:
              return Ja({ code: da.CANNOT_FIND_MODULE });
          }
          return r2.modifyMessageExtensions(e3, a2, o2).then(function(t4) {
            var o3 = t4.data, s3 = o3.extensions, a3 = o3.seq, r3 = [], i2 = 0, u2 = 0, c2 = [];
            return (s3 = jt(s3) ? [] : s3).forEach(function(e4) {
              var t5 = e4.errorCode, n4 = e4.extension, o4 = n4.key, s4 = n4.value, a4 = n4.seq;
              r3.push({ code: t5, key: o4, value: s4 }), 0 === t5 ? i2++ : u2++, c2.push({ key: o4, value: s4, seq: a4 });
            }), n3._updateGlobalSequence(e3.ID, a3), c2.length > 0 && (n3._updateLocalExtension(e3.ID, c2), c2 = null), { resultList: r3, successCount: i2, failureCount: u2 };
          }).catch(function(e4) {
            return Ja(e4);
          });
        } }, { key: "_getRequestExtensions", value: function(e3, t3) {
          var n3 = [];
          if (this._hasLocalExtension(e3.ID)) {
            var o2 = this._getLocalExtension(e3.ID);
            return t3.forEach(function(e4) {
              var t4 = e4.key, s2 = e4.value, a2 = 0;
              o2.has(t4) && (a2 = o2.get(t4).seq), n3.push({ key: t4, value: s2, seq: a2 });
            }), n3;
          }
          return t3.forEach(function(e4) {
            var t4 = e4.key, o3 = e4.value;
            n3.push({ key: t4, value: o3, seq: 0 });
          }), n3;
        } }, { key: "_getMessageExtensions", value: function(e3, t3) {
          var n3 = this, o2 = "".concat(this._n, "._getMessageExtensions"), s2 = e3.ID, a2 = e3.to, r2 = null;
          switch (Dt(a2) ? S.CONV_TOPIC : e3.conversationType) {
            case S.CONV_C2C:
              r2 = this.getModule(Gn);
              break;
            case S.CONV_GROUP:
              r2 = this.getModule(Un);
              break;
            case S.CONV_TOPIC:
              r2 = this.getModule(wn);
              break;
            default:
              return Ja({ code: da.CANNOT_FIND_MODULE });
          }
          return r2.getMessageExtensions(e3, t3).then(function(t4) {
            var a3 = t4.data, r3 = a3.extensions, i2 = a3.completeFlag, u2 = a3.globalSequence, c2 = a3.clearSequence;
            if (r3 = jt(r3) ? [] : r3, xe.l("".concat(o2, " ok. completeFlag:").concat(i2, " globalSequence:").concat(u2, " clearSequence:").concat(c2, " count:").concat(r3.length)), n3._updateLocalExtension(s2, r3), n3._clearLocalExtension(s2, c2), n3._updateGlobalSequence(s2, u2), 1 !== i2) {
              var l2 = r3.slice(-1)[0].seq + 1;
              return n3._getMessageExtensions(e3, l2);
            }
            return n3._getLocalExtensions(s2);
          }).catch(function(e4) {
            return Ja(e4);
          });
        } }, { key: "_hasLocalExtension", value: function(e3) {
          return this.messageExtensionMap.has(e3);
        } }, { key: "_getLocalExtension", value: function(e3) {
          return this.messageExtensionMap.get(e3);
        } }, { key: "_updateLocalExtension", value: function(e3, t3) {
          this._hasLocalExtension(e3) || this.messageExtensionMap.set(e3, /* @__PURE__ */ new Map());
          var n3 = this._getLocalExtension(e3);
          t3.forEach(function(e4) {
            var t4 = e4.key, o2 = e4.value, s2 = void 0 === o2 ? "" : o2, a2 = e4.seq;
            n3.set(t4, { value: s2, seq: a2 });
          });
        } }, { key: "_clearLocalExtension", value: function(e3, t3) {
          if (!(t3 <= 0) && this._hasLocalExtension(e3)) {
            var n3 = this._getLocalExtension(e3);
            n3.forEach(function(e4, o2) {
              e4.seq <= t3 && n3.delete(o2);
            });
          }
        } }, { key: "_getLocalExtensions", value: function(e3) {
          var t3 = [];
          this._hasLocalExtension(e3) && this._getLocalExtension(e3).forEach(function(e4, n3) {
            var o2 = e4.value;
            jt(o2) || t3.push({ key: n3, value: o2 });
          });
          return t3;
        } }, { key: "_getGlobalSequence", value: function(e3) {
          return this.globalSeqMap.get(e3);
        } }, { key: "_updateGlobalSequence", value: function(e3, t3) {
          this.globalSeqMap.set(e3, t3);
        } }, { key: "reset", value: function() {
          xe.l("".concat(this._n, ".reset")), this.messageExtensionMap.clear(), this.globalSeqMap.clear(), this.getMessageExtensionsMap.clear();
        } }]), n2;
      }(ro), mi = function(e2) {
        i(n2, e2);
        var t2 = f(n2);
        function n2(e3) {
          var s2;
          return o(this, n2), (s2 = t2.call(this, e3))._n = "ComboMessageModule", s2;
        }
        return a(n2, [{ key: "sendMessage", value: function(e3) {
          var t3 = this, n3 = this._constructMessageInstance(e3);
          if (null === n3)
            return Ja({ code: da.MESSAGE_SEND_FAIL });
          this._addSendMessageTotalCount(n3);
          var o2 = Date.now();
          return this.getModule(Fn).setMessageRandom(n3), this._sendComboMessage(n3, e3).then(function(e4) {
            var s2 = e4.data, a2 = s2.time, r2 = s2.sequence, i2 = s2.readReceiptCode;
            $e(i2) && 0 !== i2 && (new ka("sendMessageWithReceipt").setMessage("from:".concat(n3.from, " to:").concat(n3.to, " sequence:").concat(r2, " readReceiptCode:").concat(i2)).end(), xe.w("".concat(t3._n, ".sendMessage readReceiptCode:").concat(i2, " message:").concat(t3.getErrorMessage(i2))));
            t3._addSendMessageSuccessCount(n3, o2);
            var u2 = t3.getModule(Fn);
            n3.status = Qt.SUCCESS, n3.time = a2, n3.conversationType === S.CONV_GROUP && (n3.sequence = r2), u2.appendToMessageList(n3);
            var c2 = n3;
            return true === n3._isExcludedFromLastMessage && (c2 = ""), u2.onMessageSent({ conversationOptionsList: [{ conversationID: n3.conversationID, unreadCount: 0, type: n3.conversationType, subType: n3.conversationSubType, lastMessage: c2 }] }), Ka({ message: n3 });
          }).catch(function(e4) {
            return t3._onSendMessageFailed(n3, e4);
          });
        } }, { key: "_sendComboMessage", value: function(e3, t3) {
          var n3 = this._m.getModule(jn), o2 = "";
          return e3.conversationType === S.CONV_C2C && (o2 = "".concat(V.NAME.OPEN_IM, ".").concat(V.CMD.SEND_MESSAGE)), e3.conversationType === S.CONV_GROUP && (o2 = "".concat(V.NAME.GROUP, ".").concat(V.CMD.SEND_GROUP_MESSAGE)), n3.sendComboMessage({ servcmd: o2, data: t3 });
        } }, { key: "_constructMessageInstance", value: function(e3) {
          var t3 = "".concat(this._n, "._constructMessageInstance"), n3 = null;
          try {
            var o2 = this.getMyUserID(), s2 = {};
            if (s2.senderTinyID = this.getMyTinyID(), s2.currentUser = o2, s2.from = e3.From_Account || o2, e3.GroupId ? (s2.conversationID = "".concat(S.CONV_GROUP).concat(e3.GroupId), s2.conversationType = S.CONV_GROUP, s2.to = e3.GroupId) : e3.To_Account && (s2.conversationID = "".concat(S.CONV_C2C).concat(e3.To_Account), s2.conversationType = S.CONV_C2C, s2.to = e3.To_Account), s2.time = e3.MsgTimeStamp || 0, s2.random = e3.Random || e3.MsgRandom || 0, s2.priority = e3.MsgPriority, et(e3.CloudCustomData) && e3.CloudCustomData.length > 0 && (s2.cloudCustomData = e3.CloudCustomData), st(e3.SendMsgControl) && (s2.messageControlInfo = {}, e3.SendMsgControl.includes("NoUnread") && (s2.messageControlInfo.excludedFromUnreadCount = 1), e3.SendMsgControl.includes("NoLastMsg") && (s2.messageControlInfo.excludedFromLastMessage = 1)), s2.conversationType === S.CONV_GROUP && st(e3.To_Account) && e3.To_Account.length > 0) {
              var a2 = e3.To_Account;
              e3.To_Account.length > 50 && (a2 = e3.To_Account.slice(0, 50), xe.w("".concat(t3, " To_Account must be less than or equal to 50."))), s2.receiverList = m(a2), e3.To_Account = m(a2);
            }
            1 !== e3.IsNeedReadReceipt && 1 !== e3.NeedReadReceipt || (s2.needReadReceipt = true), 1 === e3.SupportMessageExtension && (s2.isSupportExtension = true), (n3 = new Ha(s2)).status = Qt.UNSEND, e3.MsgClientTime = n3.clientTime, n3.conversationType === S.CONV_C2C && (e3.MsgSeq = n3.sequence);
            for (var r2, i2 = e3.MsgBody.length, u2 = 0; u2 < i2; u2++)
              "TIMTextElem" === (r2 = e3.MsgBody[u2]).MsgType ? n3.setTextElement(r2.MsgContent.Text) : "TIMCustomElem" === r2.MsgType ? n3.setCustomElement({ data: r2.MsgContent.Data || "", description: r2.MsgContent.Desc || "", extension: r2.MsgContent.Ext || "" }) : "TIMFaceElem" === r2.MsgType && n3.setFaceElement({ index: r2.MsgContent.Index, data: r2.MsgContent.Data });
            var c2 = n3.getElements();
            n3.payload = c2[0].content, n3.type = c2[0].type;
          } catch (l2) {
            n3 = null, xe.e("".concat(t3, " failed. error:"), l2);
          }
          return n3;
        } }, { key: "_onSendMessageFailed", value: function(e3, t3) {
          e3.status = Qt.FAIL, this.getModule(Fn).deleteMessageRandom(e3), this._addSendMessageFailCountOnUser(e3, t3);
          var n3 = new ka("sendMessage");
          return n3.setMessage("tjg_id:".concat(this.generateTjgID(e3), " type:").concat(e3.type, " from:").concat(e3.from, " to:").concat(e3.to)), this.probeNetwork().then(function(e4) {
            var o2 = v(e4, 2), s2 = o2[0], a2 = o2[1];
            n3.setError(t3, s2, a2).end();
          }), xe.e("".concat(this._n, "._onSendMessageFailed error:"), t3), Ja(new Wa({ code: t3 && t3.code ? t3.code : da.MESSAGE_SEND_FAIL, message: t3 && t3.message ? t3.message : void 0, data: { message: e3 } }));
        } }, { key: "_getSendMessageSpecifiedKey", value: function(e3) {
          if (e3.conversationType === S.CONV_C2C)
            return ha;
          if (e3.conversationType === S.CONV_GROUP) {
            var t3 = this.getModule(Un).getLocalGroupProfile(e3.to);
            if (!t3)
              return;
            var n3 = t3.type;
            return Ct(n3) ? va : fa;
          }
        } }, { key: "_addSendMessageTotalCount", value: function(e3) {
          var t3 = this._getSendMessageSpecifiedKey(e3);
          t3 && this.getModule($n).addTotalCount(t3);
        } }, { key: "_addSendMessageSuccessCount", value: function(e3, t3) {
          var n3 = Math.abs(Date.now() - t3), o2 = this._getSendMessageSpecifiedKey(e3);
          if (o2) {
            var s2 = this.getModule($n);
            s2.addSuccessCount(o2), s2.addCost(o2, n3);
          }
        } }, { key: "_addSendMessageFailCountOnUser", value: function(e3, t3) {
          var n3 = t3.code, o2 = void 0 === n3 ? -1 : n3, s2 = this.getModule($n), a2 = this._getSendMessageSpecifiedKey(e3);
          hi(o2) && a2 && s2.addFailedCountOfUserSide(a2);
        } }]), n2;
      }(ro), Mi = function(e2) {
        i(n2, e2);
        var t2 = f(n2);
        function n2(e3) {
          var s2;
          return o(this, n2), (s2 = t2.call(this, e3))._n = "PluginModule", s2.plugins = {}, s2;
        }
        return a(n2, [{ key: "registerPlugin", value: function(e3) {
          var t3 = this;
          Object.keys(e3).forEach(function(n3) {
            t3.plugins[n3] = e3[n3];
          }), new ka("registerPlugin").setMessage("".concat(Object.keys(e3))).end();
        } }, { key: "getPlugin", value: function(e3) {
          return this.plugins[e3];
        } }, { key: "reset", value: function() {
        } }]), n2;
      }(ro), yi = function(e2) {
        i(s2, e2);
        var n2 = f(s2);
        function s2(e3) {
          var t2;
          return o(this, s2), (t2 = n2.call(this, e3))._n = "SyncUnreadMessageModule", t2._cookie = "", t2._onlineSyncFlag = false, t2.getInnerEmitterInstance().on(Za, t2._onLoginSuccess, _(t2)), t2;
        }
        return a(s2, [{ key: "_onLoginSuccess", value: function(e3) {
          this._startSync({ cookie: this._cookie, syncFlag: 0, isOnlineSync: 0 });
        } }, { key: "_startSync", value: function(e3) {
          var n3 = this, o2 = e3.cookie, s3 = e3.syncFlag, a2 = e3.isOnlineSync, r2 = "".concat(this._n, "._startSync");
          xe.l("".concat(r2, " cookie:").concat(o2, " syncFlag:").concat(s3, " isOnlineSync:").concat(a2)), this.request({ protocolName: po, requestData: { cookie: o2, syncFlag: s3, isOnlineSync: a2 } }).then(function(e4) {
            var o3 = e4.data, s4 = o3.cookie, a3 = o3.syncFlag;
            n3._cookie = s4, jt(s4) || (0 === a3 || 1 === a3 ? (n3._dispatchUnreadMessage(t(t({}, e4.data), {}, { isSyncingEnded: false })), n3._startSync({ cookie: s4, syncFlag: a3, isOnlineSync: 0 })) : 2 === a3 && n3._dispatchUnreadMessage(t(t({}, e4.data), {}, { isSyncingEnded: true })));
          }).catch(function(e4) {
            xe.e("".concat(r2, " failed. error:"), e4);
          });
        } }, { key: "_dispatchUnreadMessage", value: function(e3) {
          e3.eventArray && this.getModule(jn).onMessage({ head: {}, body: { eventArray: e3.eventArray, isInstantMessage: this._onlineSyncFlag, isSyncingEnded: e3.isSyncingEnded } });
          this.getModule(Gn).onNewC2CMessage({ dataList: e3.messageList, isInstantMessage: !!e3.isSyncingEnded && this._onlineSyncFlag, C2CRemainingUnreadList: e3.C2CRemainingUnreadList, C2CPairUnreadList: e3.C2CPairUnreadList });
        } }, { key: "startOnlineSync", value: function() {
          xe.l("".concat(this._n, ".startOnlineSync")), this._onlineSyncFlag = true, this._startSync({ cookie: this._cookie, syncFlag: 0, isOnlineSync: 1 });
        } }, { key: "startSyncOnReconnected", value: function() {
          xe.l("".concat(this._n, ".startSyncOnReconnected.")), this._onlineSyncFlag = true, this._startSync({ cookie: this._cookie, syncFlag: 0, isOnlineSync: 0 });
        } }, { key: "reset", value: function() {
          xe.l("".concat(this._n, ".reset")), this._onlineSyncFlag = false, this._cookie = "";
        } }]), s2;
      }(ro), Ii = { request: { toAccount: "To_Account", fromAccount: "From_Account", to: "To_Account", from: "From_Account", groupID: "GroupId", groupAtUserID: "GroupAt_Account", extension: "Ext", data: "Data", description: "Desc", elements: "MsgBody", sizeType: "Type", downloadFlag: "Download_Flag", thumbUUID: "ThumbUUID", videoUUID: "VideoUUID", remoteAudioUrl: "Url", remoteVideoUrl: "VideoUrl", videoUrl: "", imageUrl: "URL", fileUrl: "Url", uuid: "UUID", priority: "MsgPriority", receiverUserID: "To_Account", receiverGroupID: "GroupId", messageSender: "SenderId", messageReceiver: "ReceiverId", nick: "From_AccountNick", avatar: "From_AccountHeadurl", messageNumber: "MsgNum", pbDownloadKey: "PbMsgKey", downloadKey: "JsonMsgKey", applicationType: "PendencyType", userIDList: "To_Account", groupNameList: "GroupName", userID: "To_Account", groupAttributeList: "GroupAttr", mainSequence: "AttrMainSeq", avChatRoomKey: "BytesKey", attributeControl: "AttrControl", sequence: "seq", messageControlInfo: "SendMsgControl", updateSequence: "UpdateSeq", clientTime: "MsgClientTime", sequenceList: "MsgSeqList", topicID: "TopicId", customData: "CustomString", isSupportTopic: "SupportTopic", isWebUniapp: "is_web_uniapp", isSupportExtension: "SupportMessageExtension", messageSequence: "MsgSeq", messageKey: "MsgKey", startSequence: "startSeq", simplifiedMessage: "DownsizeFlag" }, response: { MsgPriority: "priority", ThumbUUID: "thumbUUID", VideoUUID: "videoUUID", Download_Flag: "downloadFlag", GroupId: "groupID", Member_Account: "userID", MsgList: "messageList", SyncFlag: "syncFlag", To_Account: "to", From_Account: "from", MsgSeq: "sequence", MsgRandom: "random", MsgTime: "time", MsgTimeStamp: "time", MsgContent: "content", MsgBody: "elements", From_AccountNick: "nick", From_AccountHeadurl: "avatar", GroupWithdrawInfoArray: "revokedInfos", GroupReadInfoArray: "groupMessageReadNotice", LastReadMsgSeq: "lastMessageSeq", WithdrawC2cMsgNotify: "c2cMessageRevokedNotify", C2cWithdrawInfoArray: "revokedInfos", C2cReadedReceipt: "c2cMessageReadReceipt", ReadC2cMsgNotify: "c2cMessageReadNotice", LastReadTime: "peerReadTime", MsgRand: "random", MsgType: "type", MsgShow: "messageShow", NextMsgSeq: "nextMessageSeq", FaceUrl: "avatar", ProfileDataMod: "profileModify", Profile_Account: "userID", ValueBytes: "value", ValueNum: "value", NoticeSeq: "noticeSequence", NotifySeq: "notifySequence", MsgFrom_AccountExtraInfo: "messageFromAccountExtraInformation", Operator_Account: "operatorID", OpType: "operationType", ReportType: "operationType", UserId: "userID", User_Account: "userID", List_Account: "userIDList", MsgOperatorMemberExtraInfo: "operatorInfo", MsgMemberExtraInfo: "memberInfoList", ImageUrl: "avatar", NickName: "nick", MsgGroupNewInfo: "newGroupProfile", MsgAppDefinedData: "groupCustomField", Owner_Account: "ownerID", GroupFaceUrl: "avatar", GroupIntroduction: "introduction", GroupNotification: "notification", GroupApplyJoinOption: "joinOption", MsgKey: "messageKey", GroupInfo: "groupProfile", ShutupTime: "muteTime", Desc: "description", Ext: "extension", GroupAt_Account: "groupAtUserID", MsgNum: "messageNumber", PbMsgKey: "pbDownloadKey", JsonMsgKey: "downloadKey", MsgModifiedFlag: "isModified", PendencyItem: "applicationItem", PendencyType: "applicationType", AddTime: "time", AddSource: "source", AddWording: "wording", ProfileImImage: "avatar", PendencyAdd: "friendApplicationAdded", FrienPencydDel_Account: "friendApplicationDeletedUserIDList", Peer_Account: "userID", GroupAttr: "groupAttributeList", GroupAttrAry: "groupAttributeList", AttrMainSeq: "mainSequence", seq: "sequence", GroupAttrOption: "groupAttributeOption", BytesChangedKeys: "changedKeyList", GroupAttrInfo: "groupAttributeList", GroupAttrSeq: "mainSequence", PushChangedAttrValFlag: "isWithChangedAttributeInfo", SubKeySeq: "sequence", Val: "value", MsgGroupFromCardName: "senderNameCard", MsgGroupFromNickName: "senderNick", C2cNick: "peerNick", C2cImage: "peerAvatar", SendMsgControl: "messageControlInfo", NoLastMsg: "excludedFromLastMessage", NoUnread: "excludedFromUnreadCount", UpdateSeq: "updateSequence", MuteNotifications: "muteFlag", MsgClientTime: "clientTime", TinyId: "tinyID", GroupMsgReceiptList: "readReceiptList", ReadNum: "readCount", UnreadNum: "unreadCount", TopicId: "topicID", MillionGroupFlag: "communityType", SupportTopic: "isSupportTopic", MsgTopicNewInfo: "newTopicInfo", ShutupAll: "muteAllMembers", CustomString: "customData", TopicFaceUrl: "avatar", TopicIntroduction: "introduction", TopicNotification: "notification", TopicIdArray: "topicIDList", MsgVersion: "messageVersion", C2cMsgModNotifys: "c2cMessageModified", GroupMsgModNotifys: "groupMessageModified", ApplyJoinOption: "joinOption", MsgFlag: "messageRemindType", AtInfoList: "groupAtInfoList", AtFlagList: "groupAtType", AtMsgSeq: "sequence", BanDuration: "duration", BanDescription: "reason", NotVisible: "invisible", BytesTag: "tag", BytesValue: "value", RptBytesValue: "value", LatestSeq: "globalSequence", ClearSeq: "clearSequence", SupportMessageExtension: "isSupportExtension", ExtensionList: "extensions", GroupCounter: "counterList", Revoker_Account: "revoker", MsgExtensionNotify: "messageExtensionNotify", ExtensionC2cMsgInfo: "messageInfo", ExtensionGroupMsgInfo: "messageInfo", MsgOptType: "operateType", SetKVInfo: "operateResultList", DeleteKVInfo: "operateResultList", ClearKVInfo: "operateResultList", MsgKeyValue: "extensions", ClearMsgSeq: "clearSequence", MsgLastSeq: "globalSequence", InviteJoinOption: "inviteOption", MemberList_Account: "inviteeList", MsgMemberExtraInfoList: "inviteeInfoList", E: "event", GInf: "groupProfile", MCT: "clientTime", MR: "random", MP: "priority", MTS: "time", GId: "groupID", MS: "sequence", CCD: "cloudCustomData", F_Account: "from", F_Hd: "avatar", F_NN: "nick", GN: "groupName", GT: "groupType", IsSys: "isSystemMessage", OpInf: "operatorInfo", Img: "avatar", NN: "nick", OnlineInf: "onlineMemberInfo", ET: "expireTime", Num: "onlineMemberNum", Opt: "operationType", O_Account: "operatorID", RT: "operationType", UDF: "userDefinedField", L_Account: "userIDList" }, ignoreKeyWord: ["C2C", "ID", "USP"] };
      function Ci(e2, t2) {
        if ("string" != typeof e2 && !Array.isArray(e2))
          throw new TypeError("Expected the input to be `string | string[]`");
        t2 = Object.assign({ pascalCase: false }, t2);
        var n2;
        return 0 === (e2 = Array.isArray(e2) ? e2.map(function(e3) {
          return e3.trim();
        }).filter(function(e3) {
          return e3.length;
        }).join("-") : e2.trim()).length ? "" : 1 === e2.length ? t2.pascalCase ? e2.toUpperCase() : e2.toLowerCase() : (e2 !== e2.toLowerCase() && (e2 = Ti(e2)), e2 = e2.replace(/^[_.\- ]+/, "").toLowerCase().replace(/[_.\- ]+(\w|$)/g, function(e3, t3) {
          return t3.toUpperCase();
        }).replace(/\d+(\w|$)/g, function(e3) {
          return e3.toUpperCase();
        }), n2 = e2, t2.pascalCase ? n2.charAt(0).toUpperCase() + n2.slice(1) : n2);
      }
      var Ti = function(e2) {
        for (var t2 = false, n2 = false, o2 = false, s2 = 0; s2 < e2.length; s2++) {
          var a2 = e2[s2];
          t2 && /[a-zA-Z]/.test(a2) && a2.toUpperCase() === a2 ? (e2 = e2.slice(0, s2) + "-" + e2.slice(s2), t2 = false, o2 = n2, n2 = true, s2++) : n2 && o2 && /[a-zA-Z]/.test(a2) && a2.toLowerCase() === a2 ? (e2 = e2.slice(0, s2 - 1) + "-" + e2.slice(s2 - 1), o2 = n2, n2 = false, t2 = true) : (t2 = a2.toLowerCase() === a2 && a2.toUpperCase() !== a2, o2 = n2, n2 = a2.toUpperCase() === a2 && a2.toLowerCase() !== a2);
        }
        return e2;
      };
      function Di(e2, t2) {
        var n2 = 0;
        return function e3(t3, o2) {
          if (++n2 > 100)
            return n2--, t3;
          if (st(t3)) {
            var s2 = t3.map(function(t4) {
              return nt(t4) ? e3(t4, o2) : t4;
            });
            return n2--, s2;
          }
          if (nt(t3)) {
            var a2 = (r2 = t3, i2 = function(e4, t4) {
              if (!lt(t4))
                return false;
              if ((s3 = t4) !== Ci(s3))
                for (var n3 = 0; n3 < Ii.ignoreKeyWord.length && !t4.includes(Ii.ignoreKeyWord[n3]); n3++)
                  ;
              var s3;
              return at(o2[t4]) ? function(e5) {
                return "OPPOChannelID" === e5 ? e5 : e5[0].toUpperCase() + Ci(e5).slice(1);
              }(t4) : o2[t4];
            }, u2 = /* @__PURE__ */ Object.create(null), Object.keys(r2).forEach(function(e4) {
              var t4 = i2(r2[e4], e4);
              t4 && (u2[t4] = r2[e4]);
            }), u2);
            return a2 = Lt(a2, function(t4, n3) {
              return st(t4) || nt(t4) ? e3(t4, o2) : t4;
            }), n2--, a2;
          }
          var r2, i2, u2;
        }(e2, t2);
      }
      function Ei(e2, t2) {
        if (st(e2))
          return e2.map(function(e3) {
            return nt(e3) ? Ei(e3, t2) : e3;
          });
        if (nt(e2)) {
          var n2 = (o2 = e2, s2 = function(e3, n3) {
            return at(t2[n3]) ? Ci(n3) : t2[n3];
          }, a2 = {}, Object.keys(o2).forEach(function(e3) {
            a2[s2(o2[e3], e3)] = o2[e3];
          }), a2);
          return n2 = Lt(n2, function(e3) {
            return st(e3) || nt(e3) ? Ei(e3, t2) : e3;
          });
        }
        var o2, s2, a2;
      }
      var Si = String.fromCharCode, ki = function(e2) {
        var t2 = 0 | e2.charCodeAt(0);
        if (55296 <= t2)
          if (t2 < 56320) {
            var n2 = 0 | e2.charCodeAt(1);
            if (56320 <= n2 && n2 <= 57343) {
              if ((t2 = (t2 << 10) + n2 - 56613888 | 0) > 65535)
                return Si(240 | t2 >>> 18, 128 | t2 >>> 12 & 63, 128 | t2 >>> 6 & 63, 128 | 63 & t2);
            } else
              t2 = 65533;
          } else
            t2 <= 57343 && (t2 = 65533);
        return t2 <= 2047 ? Si(192 | t2 >>> 6, 128 | 63 & t2) : Si(224 | t2 >>> 12, 128 | t2 >>> 6 & 63, 128 | 63 & t2);
      }, Li = function(e2) {
        for (var t2 = void 0 === e2 ? "" : ("" + e2).replace(/[\x80-\uD7ff\uDC00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]?/g, ki), n2 = 0 | t2.length, o2 = new Uint8Array(n2), s2 = 0; s2 < n2; s2 = s2 + 1 | 0)
          o2[s2] = 0 | t2.charCodeAt(s2);
        return o2;
      }, Ai = function(e2) {
        for (var t2 = new Uint8Array(e2), n2 = "", o2 = 0, s2 = t2.length; o2 < s2; ) {
          var a2 = t2[o2], r2 = 0, i2 = 0;
          if (a2 <= 127 ? (r2 = 0, i2 = 255 & a2) : a2 <= 223 ? (r2 = 1, i2 = 31 & a2) : a2 <= 239 ? (r2 = 2, i2 = 15 & a2) : a2 <= 244 && (r2 = 3, i2 = 7 & a2), s2 - o2 - r2 > 0)
            for (var u2 = 0; u2 < r2; )
              i2 = i2 << 6 | 63 & (a2 = t2[o2 + u2 + 1]), u2 += 1;
          else
            i2 = 65533, r2 = s2 - o2;
          n2 += String.fromCodePoint(i2), o2 += r2 + 1;
        }
        return n2;
      }, Ri = function() {
        function e2(t2) {
          o(this, e2), this._handler = t2;
          var n2 = t2.getURL();
          if (this._socket = null, this._workerSocket = null, this._id = _t(), this._handler.getIsWorkerEnabled()) {
            var s2 = URL.createObjectURL(new Blob([';let _socket = null;onmessage = function(event) {  if (event.data.cmd === "start") {    const url = event.data.url;    _socket = new WebSocket(url);    _socket.binaryType = "arraybuffer";    _socket.onopen = function() {      postMessage({ callback: "onOpen" });    };    _socket.onclose = function(e) {      postMessage({ callback: "onOpen", e: { code: e.code, reason: e.reason } });    };    _socket.onmessage = function(e) {      postMessage({ callback: "onMessage", data: e.data });    };    _socket.onerror = function(e) {      postMessage({ callback: "onError", e: { isTrusted: "true" } });    };  } else if (event.data.cmd === "sendMessage") {    if (_socket !== null) {      _socket.send(event.data.data);    }  } else if (event.data.cmd === "stop") {    if (_socket !== null) {      _socket.close(event.data.code);      _socket = null;    }  }};'], { type: "application/javascript; charset=utf-8" }));
            this._workerSocket = new Worker(s2);
            var a2 = this;
            this._workerSocket.onmessage = function(e3) {
              var t3 = e3.data, n3 = t3.callback, o2 = t3.e;
              "onOpen" === n3 ? a2._onOpen() : "onClose" === n3 ? a2._onClose(o2) : "onError" === n3 ? a2._onError(o2) : "onMessage" === n3 && a2._onMessage(e3.data);
            }, this._workerSocket.postMessage({ cmd: "start", id: this._id, url: n2 });
          } else
            se ? ee ? (re.connectSocket({ url: n2, header: { "content-type": "application/json" } }), re.onSocketClose(this._onClose.bind(this)), re.onSocketOpen(this._onOpen.bind(this)), re.onSocketMessage(this._onMessage.bind(this)), re.onSocketError(this._onError.bind(this))) : (this._socket = re.connectSocket({ url: n2, header: { "content-type": "application/json" }, complete: function() {
            } }), this._socket.onClose(this._onClose.bind(this)), this._socket.onOpen(this._onOpen.bind(this)), this._socket.onMessage(this._onMessage.bind(this)), this._socket.onError(this._onError.bind(this))) : ae && (this._socket = new WebSocket(n2), this._socket.binaryType = "arraybuffer", this._socket.onopen = this._onOpen.bind(this), this._socket.onmessage = this._onMessage.bind(this), this._socket.onclose = this._onClose.bind(this), this._socket.onerror = this._onError.bind(this));
          this._canIUseBinaryFrame = t2.canIUseBinaryFrame();
        }
        return a(e2, [{ key: "getID", value: function() {
          return this._id;
        } }, { key: "_onOpen", value: function() {
          this._handler.onOpen({ id: this._id });
        } }, { key: "_onClose", value: function(e3) {
          this._handler.onClose({ id: this._id, e: e3 });
        } }, { key: "_onMessage", value: function(e3) {
          this._handler.onMessage({ data: this._canIUseBinaryFrame ? Ai(e3.data) : e3.data });
        } }, { key: "_onError", value: function(e3) {
          this._handler.onError({ id: this._id, e: e3 });
        } }, { key: "setIsWorkerEnabled", value: function(e3) {
          this._isWorkerEnabled = true;
        } }, { key: "close", value: function(e3) {
          if (this._workerSocket && (this._workerSocket.postMessage({ cmd: "stop", code: e3 }), this._workerSocket.terminate(), this._workerSocket = null), ee)
            return re.offSocketClose(), re.offSocketMessage(), re.offSocketOpen(), re.offSocketError(), void re.closeSocket();
          this._socket && (se ? (this._socket.onClose(function() {
          }), this._socket.onOpen(function() {
          }), this._socket.onMessage(function() {
          }), this._socket.onError(function() {
          })) : ae && (this._socket.onopen = null, this._socket.onmessage = null, this._socket.onclose = null, this._socket.onerror = null), $ ? this._socket.close({ code: e3 }) : this._socket.close(e3), this._socket = null);
        } }, { key: "send", value: function(e3) {
          if (this._workerSocket)
            this._workerSocket.postMessage({ cmd: "sendMessage", data: this._canIUseBinaryFrame ? Li(e3.data).buffer : e3.data });
          else {
            if (ee)
              return void re.sendSocketMessage({ data: e3.data, fail: function() {
                e3.fail && e3.requestID && e3.fail(e3.requestID);
              } });
            this._socket && (se ? this._socket.send({ data: this._canIUseBinaryFrame ? Li(e3.data).buffer : e3.data, fail: function() {
              e3.fail && e3.requestID && e3.fail(e3.requestID);
            } }) : ae && this._socket.send(this._canIUseBinaryFrame ? Li(e3.data).buffer : e3.data));
          }
        } }]), e2;
      }(), Ni = 4e3, Oi = 4001, Gi = ["keyMap"], Ui = ["keyMap"], Pi = "connected", bi = "connecting", wi = "disconnected", Fi = function() {
        function e2(t2) {
          o(this, e2), this._channelModule = t2, this._n = "SocketHandler", this._promiseMap = /* @__PURE__ */ new Map(), this._readyState = wi, this._simpleRequestMap = /* @__PURE__ */ new Map(), this.MAX_SIZE = 100, this._startSequence = _t(), this._startTs = 0, this._reConnectFlag = false, this._nextPingTs = 0, this._reConnectCount = 0, this.MAX_RECONNECT_COUNT = 3, this._socketID = -1, this._random = 0, this._socket = null, this._url = "", this._onOpenTs = 0, this._canIUseBinaryFrame = true, this._isWorkerEnabled = true, this._setWebsocketHost(), this._initConnection();
        }
        return a(e2, [{ key: "_setWebsocketHost", value: function() {
          var e3 = this._channelModule.getModule(qn), t2 = G;
          this._channelModule.isOversea() && (t2 = U), e3.isSingaporeSite() ? t2 = P : e3.isKoreaSite() ? t2 = b : e3.isGermanySite() ? t2 = w : e3.isIndiaSite() ? t2 = F : e3.isJapanSite() ? t2 = q : e3.isUSASite() && (t2 = x), V.HOST.setCurrent(t2);
        } }, { key: "_initConnection", value: function() {
          at(V.HOST.CURRENT.BACKUP) || "" === this._url ? this._url = V.HOST.CURRENT.DEFAULT : this._url === V.HOST.CURRENT.DEFAULT ? this._url = V.HOST.CURRENT.BACKUP : this._url === V.HOST.CURRENT.BACKUP ? this._url = this._canIUseAnyCast() ? V.HOST.CURRENT.ANYCAST : V.HOST.CURRENT.DEFAULT : this._url === V.HOST.CURRENT.ANYCAST && (V.HOST.CURRENT.ANYCAST = "", this._url = V.HOST.CURRENT.DEFAULT);
          var e3 = this._channelModule.getModule(qn).getProxyServer();
          jt(e3) || (this._url = e3), this._connect(), this._nextPingTs = 0;
        } }, { key: "_canIUseAnyCast", value: function() {
          return ae && V.HOST.CURRENT.ANYCAST;
        } }, { key: "onCheckTimer", value: function(e3) {
          e3 % 1 == 0 && this._checkPromiseMap();
        } }, { key: "_checkPromiseMap", value: function() {
          var e3 = this;
          0 !== this._promiseMap.size && this._promiseMap.forEach(function(t2, n2) {
            var o2 = t2.reject, s2 = t2.timestamp, a2 = 15e3;
            -1 !== n2.indexOf(io) && (a2 = 9e4), Date.now() - s2 >= a2 && (xe.l("".concat(e3._n, "._checkPromiseMap request timeout, delete requestID:").concat(n2)), e3._promiseMap.delete(n2), o2(new Wa({ code: da.NETWORK_TIMEOUT })), e3._channelModule.onRequestTimeout(n2));
          });
        } }, { key: "onOpen", value: function(e3) {
          if ("" !== this._readyState) {
            this._onOpenTs = Date.now();
            var t2 = e3.id;
            this._socketID = t2;
            var n2 = Date.now() - this._startTs;
            xe.l("".concat(this._n, "._onOpen cost ").concat(n2, " ms. socketID:").concat(t2)), new ka("wsOnOpen").setMessage(n2).setCostTime(n2).setMoreMessage("socketID:".concat(t2)).end(), e3.id === this._socketID && (this._readyState = Pi, this._reConnectCount = 0, this._resend(), true === this._reConnectFlag && (this._channelModule.onReconnected(), this._reConnectFlag = false), this._channelModule.onOpen());
          }
        } }, { key: "onClose", value: function(e3) {
          var t2 = new ka("wsOnClose"), n2 = e3.id, o2 = e3.e, s2 = "sourceSocketID:".concat(n2, " currentSocketID:").concat(this._socketID, " code:").concat(o2.code, " reason:").concat(o2.reason), a2 = 0;
          0 !== this._onOpenTs && (a2 = Date.now() - this._onOpenTs), t2.setMessage(a2).setCostTime(a2).setMoreMessage(s2).setCode(o2.code).end(), xe.l("".concat(this._n, "._onClose ").concat(s2, " onlineTime:").concat(a2)), n2 === this._socketID && (this._readyState = wi, a2 < 1e3 ? this._channelModule.onReconnectFailed() : this._channelModule.onClose());
        } }, { key: "onError", value: function(e3) {
          var t2 = e3.id, n2 = e3.e, o2 = "sourceSocketID:".concat(t2, " currentSocketID:").concat(this._socketID);
          new ka("wsOnError").setMessage(n2.errMsg || dt(n2)).setMoreMessage(o2).setLevel("error").end(), xe.w("".concat(this._n, "._onError"), n2, o2), t2 === this._socketID && (this._readyState = "", this._channelModule.onError());
        } }, { key: "onMessage", value: function(e3) {
          var t2;
          try {
            t2 = JSON.parse(e3.data);
          } catch (c2) {
            new ka("jsonParseError").setMessage(e3.data).end();
          }
          if (t2 && t2.head) {
            var n2 = this._getRequestIDFromHead(t2.head), o2 = t2.body;
            if (!this._isTRTCCommand(n2)) {
              var s2 = Pt(t2.head);
              o2 = Ei(t2.body, this._getResponseKeyMap(s2));
            }
            if (xe.d("".concat(this._n, ".onMessage ret:").concat(JSON.stringify(o2), " requestID:").concat(n2, " has:").concat(this._promiseMap.has(n2))), this._setNextPingTs(), this._promiseMap.has(n2)) {
              var a2 = this._promiseMap.get(n2), r2 = a2.resolve, i2 = a2.reject, u2 = a2.timestamp;
              return this._promiseMap.delete(n2), this._calcRTT(u2), void (o2.errorCode && 0 !== o2.errorCode ? (this._channelModule.onErrorCodeNotZero(o2), i2(new Wa({ code: o2.errorCode, message: o2.errorInfo || "", data: n2.includes(Lo) || n2.includes(ms) ? { elements: o2.elements, messageVersion: o2.messageVersion, cloudCustomData: o2.cloudCustomData } : void 0 }))) : r2(Ka(o2)));
            }
            this._channelModule.onMessage({ head: t2.head, body: o2 });
          }
        } }, { key: "_isTRTCCommand", value: function(e3) {
          for (var t2 = this._channelModule.getModule(oo).getCommandList(), n2 = false, o2 = 0; o2 < t2.length; o2++)
            if (e3.startsWith(t2[o2])) {
              n2 = true;
              break;
            }
          return n2;
        } }, { key: "_calcRTT", value: function(e3) {
          var t2 = Date.now() - e3;
          this._channelModule.getModule($n).addRTT(t2);
        } }, { key: "_connect", value: function() {
          this._startTs = Date.now(), this._onOpenTs = 0, this._socket = new Ri(this), this._socketID = this._socket.getID(), this._readyState = bi, xe.l("".concat(this._n, "._connect isWorkerEnabled:").concat(this.getIsWorkerEnabled(), " socketID:").concat(this._socketID, " url:").concat(this.getURL())), new ka("wsConnect").setMessage("socketID:".concat(this._socketID, " url:").concat(this.getURL())).end();
        } }, { key: "getURL", value: function() {
          this._channelModule.isDevMode() && (this._canIUseBinaryFrame = false);
          var e3 = Nt();
          (ee || X && "windows" === e3 || ne) && (this._canIUseBinaryFrame = false);
          var t2 = -1;
          "ios" === e3 ? t2 = ve || -1 : "android" === e3 && (t2 = Me || -1);
          var n2 = this._channelModule.getModule(qn), o2 = this._channelModule.getPlatform(), s2 = n2.getSDKAppID(), a2 = n2.getInstanceID(), r2 = "sdkappid=".concat(s2, "&instanceid=").concat(a2, "&random=").concat(this._getRandom(), "&platform=").concat(o2, "&host=").concat(e3, "&version=").concat(t2);
          return this._canIUseBinaryFrame ? "".concat(this._url, "/binfo?").concat(r2) : "".concat(this._url, "/info?").concat(r2);
        } }, { key: "_closeConnection", value: function(e3) {
          xe.l("".concat(this._n, "._closeConnection socketID:").concat(this._socketID)), this._socket && (this._socket.close(e3), this._socketID = -1, this._socket = null, this._readyState = wi);
        } }, { key: "_resend", value: function() {
          var e3 = this;
          if (xe.l("".concat(this._n, "._resend reConnectFlag:").concat(this._reConnectFlag), "promiseMap.size:".concat(this._promiseMap.size, " simpleRequestMap.size:").concat(this._simpleRequestMap.size)), this._promiseMap.size > 0 && this._promiseMap.forEach(function(t3, n3) {
            var o3 = t3.uplinkData, s3 = t3.resolve, a3 = t3.reject;
            e3._promiseMap.set(n3, { resolve: s3, reject: a3, timestamp: Date.now(), uplinkData: o3 }), e3._execute(n3, o3);
          }), this._simpleRequestMap.size > 0) {
            var t2, n2 = D(this._simpleRequestMap);
            try {
              for (n2.s(); !(t2 = n2.n()).done; ) {
                var o2 = v(t2.value, 2), s2 = o2[0], a2 = o2[1];
                this._execute(s2, a2);
              }
            } catch (r2) {
              n2.e(r2);
            } finally {
              n2.f();
            }
            this._simpleRequestMap.clear();
          }
        } }, { key: "send", value: function(e3) {
          var t2 = this;
          e3.head.seq = this._getSequence(), e3.head.reqtime = Math.floor(Date.now() / 1e3), e3.keyMap;
          var n2 = g(e3, Gi), o2 = this._getRequestIDFromHead(e3.head), s2 = JSON.stringify(n2);
          return new Promise(function(e4, a2) {
            (t2._promiseMap.set(o2, { resolve: e4, reject: a2, timestamp: Date.now(), uplinkData: s2 }), xe.d("".concat(t2._n, ".send uplinkData:").concat(JSON.stringify(n2), " requestID:").concat(o2, " readyState:").concat(t2._readyState)), t2._readyState !== Pi) ? t2._reConnect() : (t2._execute(o2, s2), t2._channelModule.getModule($n).addRequestCount());
          });
        } }, { key: "simplySend", value: function(e3) {
          e3.head.seq = this._getSequence(), e3.head.reqtime = Math.floor(Date.now() / 1e3), e3.keyMap;
          var t2 = g(e3, Ui), n2 = this._getRequestIDFromHead(e3.head), o2 = JSON.stringify(t2);
          this._readyState !== Pi ? (this._simpleRequestMap.size < this.MAX_SIZE ? this._simpleRequestMap.set(n2, o2) : xe.l("".concat(this._n, ".simplySend. simpleRequestMap is full, drop request!")), this._reConnect()) : this._execute(n2, o2);
        } }, { key: "_execute", value: function(e3, t2) {
          this._socket.send({ data: t2, fail: se ? this._onSendFail.bind(this) : void 0, requestID: e3 });
        } }, { key: "_onSendFail", value: function(e3) {
          xe.l("".concat(this._n, "._onSendFail requestID:").concat(e3));
        } }, { key: "_getSequence", value: function() {
          var e3;
          if (this._startSequence < 2415919103)
            return e3 = this._startSequence, this._startSequence += 1, 2415919103 === this._startSequence && (this._startSequence = _t()), e3;
        } }, { key: "_getRequestIDFromHead", value: function(e3) {
          return e3.servcmd + e3.seq;
        } }, { key: "_getResponseKeyMap", value: function(e3) {
          var n2 = this._channelModule.getKeyMap(e3);
          return t(t({}, Ii.response), n2.response);
        } }, { key: "_reConnect", value: function() {
          this._readyState !== Pi && this._readyState !== bi && this.forcedReconnect();
        } }, { key: "forcedReconnect", value: function() {
          var e3 = this, t2 = "".concat(this._n, ".forcedReconnect");
          xe.l("".concat(t2, " count:").concat(this._reConnectCount, " readyState:").concat(this._readyState)), this._reConnectFlag = true, this._resetRandom(), this._reConnectCount < this.MAX_RECONNECT_COUNT ? (this._reConnectCount += 1, this._closeConnection(Oi), this._initConnection()) : (this._reConnectCount = 0, this._channelModule.probeNetwork().then(function(n2) {
            var o2 = v(n2, 2), s2 = o2[0];
            o2[1], s2 ? (xe.w("".concat(t2, " disconnected from wsserver but network is ok, continue...")), e3._closeConnection(Oi), e3._initConnection()) : e3._channelModule.onReconnectFailed();
          }));
        } }, { key: "getReconnectFlag", value: function() {
          return this._reConnectFlag;
        } }, { key: "_setNextPingTs", value: function() {
          this._nextPingTs = Date.now() + 1e4;
        } }, { key: "getNextPingTs", value: function() {
          return this._nextPingTs;
        } }, { key: "isConnected", value: function() {
          return this._readyState === Pi;
        } }, { key: "canIUseBinaryFrame", value: function() {
          return this._canIUseBinaryFrame;
        } }, { key: "setIsWorkerEnabled", value: function(e3) {
          xe.l("".concat(this._n, ".setIsWorkerEnabled flag:").concat(e3)), this._isWorkerEnabled = e3;
        } }, { key: "getIsWorkerEnabled", value: function() {
          return this._isWorkerEnabled && Se;
        } }, { key: "_getRandom", value: function() {
          return 0 === this._random && (this._random = Math.random()), this._random;
        } }, { key: "_resetRandom", value: function() {
          this._random = 0;
        } }, { key: "close", value: function() {
          xe.l("".concat(this._n, ".close")), this._closeConnection(Ni), this._promiseMap.clear(), this._startSequence = _t(), this._readyState = wi, this._simpleRequestMap.clear(), this._reConnectFlag = false, this._reConnectCount = 0, this._onOpenTs = 0, this._url = "", this._random = 0, this._canIUseBinaryFrame = true, this._isWorkerEnabled = true;
        } }]), e2;
      }(), qi = function(e2) {
        i(n2, e2);
        var t2 = f(n2);
        function n2(e3) {
          var s2;
          if (o(this, n2), (s2 = t2.call(this, e3))._n = "ChannelModule", s2._socketHandler = new Fi(_(s2)), s2._probing = false, s2._isAppShowing = true, s2._previousState = S.NET_STATE_CONNECTED, se && "function" == typeof re.onAppShow && "function" == typeof re.onAppHide) {
            var a2 = s2._onAppHide.bind(_(s2)), r2 = s2._onAppShow.bind(_(s2));
            "function" == typeof re.offAppHide && re.offAppHide(a2), "function" == typeof re.offAppShow && re.offAppShow(r2), re.onAppHide(a2), re.onAppShow(r2);
          }
          return s2._timerForNotLoggedIn = -1, s2._timerForNotLoggedIn = setInterval(s2.onCheckTimer.bind(_(s2)), 1e3), s2._fatalErrorFlag = false, s2;
        }
        return a(n2, [{ key: "onCheckTimer", value: function(e3) {
          this._socketHandler && (this.isLoggedIn() ? (this._timerForNotLoggedIn > 0 && (clearInterval(this._timerForNotLoggedIn), this._timerForNotLoggedIn = -1), this._socketHandler.onCheckTimer(e3)) : this._socketHandler.onCheckTimer(1), this._checkNextPing());
        } }, { key: "onErrorCodeNotZero", value: function(e3) {
          this.getModule(jn).onErrorCodeNotZero(e3);
        } }, { key: "onMessage", value: function(e3) {
          this.getModule(jn).onMessage(e3);
        } }, { key: "send", value: function(e3) {
          return this._socketHandler ? this._previousState !== S.NET_STATE_CONNECTED && e3.head.servcmd.includes(xs) ? (this.reConnect(), this._sendLogViaHTTP(e3)) : this._socketHandler.send(e3) : Promise.reject();
        } }, { key: "_sendLogViaHTTP", value: function(e3) {
          var t3 = V.HOST.CURRENT.STAT;
          return new Promise(function(n3, o2) {
            var s2 = "".concat(t3, "/v4/imopenstat/tim_web_report_v2?sdkappid=").concat(e3.head.sdkappid, "&reqtime=").concat(Date.now()), a2 = JSON.stringify(e3.body), r2 = "application/x-www-form-urlencoded;charset=UTF-8";
            if (se)
              re.request({ url: s2, data: a2, method: "POST", timeout: 3e3, header: { "content-type": r2 }, success: function() {
                n3();
              }, fail: function() {
                o2(new Wa({ code: da.NETWORK_ERROR }));
              } });
            else {
              var i2 = new XMLHttpRequest(), u2 = setTimeout(function() {
                i2.abort(), o2(new Wa({ code: da.NETWORK_TIMEOUT }));
              }, 3e3);
              i2.onreadystatechange = function() {
                4 === i2.readyState && (clearTimeout(u2), 200 === i2.status || 304 === i2.status ? n3() : o2(new Wa({ code: da.NETWORK_ERROR })));
              }, i2.open("POST", s2, true), i2.setRequestHeader("Content-type", r2), i2.send(a2);
            }
          });
        } }, { key: "simplySend", value: function(e3) {
          return this._socketHandler ? this._socketHandler.simplySend(e3) : Promise.reject();
        } }, { key: "onOpen", value: function() {
          this._ping();
        } }, { key: "onClose", value: function() {
          this._socketHandler && (this._socketHandler.getReconnectFlag() && this._emitNetStateChangeEvent(S.NET_STATE_DISCONNECTED));
          this.reConnect();
        } }, { key: "onError", value: function() {
          se && !ne && this.outputWarning("DomainNameInMP"), this._emitNetStateChangeEvent(S.NET_STATE_DISCONNECTED);
        } }, { key: "getKeyMap", value: function(e3) {
          return this.getModule(jn).getKeyMap(e3);
        } }, { key: "_onAppHide", value: function() {
          this._isAppShowing = false;
        } }, { key: "_onAppShow", value: function() {
          this._isAppShowing = true;
        } }, { key: "onRequestTimeout", value: function(e3) {
        } }, { key: "onReconnected", value: function() {
          xe.l("".concat(this._n, ".onReconnected")), this._m.restartTimer(), this.getModule(jn).onReconnected(), this._emitNetStateChangeEvent(S.NET_STATE_CONNECTED);
        } }, { key: "onReconnectFailed", value: function() {
          xe.l("".concat(this._n, ".onReconnectFailed")), this._emitNetStateChangeEvent(S.NET_STATE_DISCONNECTED);
        } }, { key: "setIsWorkerEnabled", value: function(e3) {
          this._socketHandler && this._socketHandler.setIsWorkerEnabled(false);
        } }, { key: "offline", value: function() {
          this._emitNetStateChangeEvent(S.NET_STATE_DISCONNECTED);
        } }, { key: "reConnect", value: function() {
          var e3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t3 = false;
          this._socketHandler && (t3 = this._socketHandler.getReconnectFlag());
          var n3 = "forcedFlag:".concat(e3, " fatalErrorFlag:").concat(this._fatalErrorFlag, " previousState:").concat(this._previousState, " reconnectFlag:").concat(t3);
          if (xe.l("".concat(this._n, ".reConnect ").concat(n3)), !this._fatalErrorFlag && this._socketHandler) {
            if (true === e3)
              this._socketHandler.forcedReconnect();
            else {
              if (this._previousState === S.NET_STATE_CONNECTING && t3)
                return;
              this._socketHandler.forcedReconnect();
            }
            this._emitNetStateChangeEvent(S.NET_STATE_CONNECTING);
          }
        } }, { key: "_emitNetStateChangeEvent", value: function(e3) {
          this._previousState !== e3 && (xe.l("".concat(this._n, "._emitNetStateChangeEvent from ").concat(this._previousState, " to ").concat(e3)), this._previousState = e3, this.emitOuterEvent(E.NET_STATE_CHANGE, { state: e3 }));
        } }, { key: "_ping", value: function() {
          var e3 = this;
          if (true !== this._probing) {
            this._probing = true;
            var t3 = this.getModule(jn).getProtocolData({ protocolName: Vs });
            this.send(t3).then(function() {
              e3._probing = false;
            }).catch(function(t4) {
              if (xe.w("".concat(e3._n, "._ping failed. error:"), t4), e3._probing = false, t4 && 60002 === t4.code)
                return new ka("error").setMessage("code:".concat(t4.code, " message:").concat(t4.message)).setNetworkType(e3.getModule(Bn).getNetworkType()).end(), e3._fatalErrorFlag = true, void e3._emitNetStateChangeEvent(S.NET_STATE_DISCONNECTED);
              e3.probeNetwork().then(function(t5) {
                var n3 = v(t5, 2), o2 = n3[0], s2 = n3[1];
                xe.l("".concat(e3._n, "._ping failed. probe network, isAppShowing:").concat(e3._isAppShowing, " online:").concat(o2, " networkType:").concat(s2)), o2 ? e3.reConnect() : e3._emitNetStateChangeEvent(S.NET_STATE_DISCONNECTED);
              });
            });
          }
        } }, { key: "_checkNextPing", value: function() {
          this._socketHandler && (this._socketHandler.isConnected() && Date.now() >= this._socketHandler.getNextPingTs() && this._ping());
        } }, { key: "dealloc", value: function() {
          this._socketHandler && (this._socketHandler.close(), this._socketHandler = null), this._timerForNotLoggedIn > -1 && clearInterval(this._timerForNotLoggedIn);
        } }, { key: "onRestApiKickedOut", value: function() {
          this._socketHandler && (this._socketHandler.close(), this.reConnect(true));
        } }, { key: "reset", value: function() {
          xe.l("".concat(this._n, ".reset")), this._previousState = S.NET_STATE_CONNECTED, this._probing = false, this._fatalErrorFlag = false, this._timerForNotLoggedIn = setInterval(this.onCheckTimer.bind(this), 1e3);
        } }]), n2;
      }(ro), xi = ["a2", "tinyid"], Vi = ["a2", "tinyid"], Bi = function() {
        function e2(t2) {
          o(this, e2), this._n = "ProtocolHandler", this._sessionModule = t2, this._configMap = /* @__PURE__ */ new Map(), this._fillConfigMap();
        }
        return a(e2, [{ key: "_fillConfigMap", value: function() {
          this._configMap.clear();
          var e3 = this._sessionModule.genCommonHead(), n2 = this._sessionModule.genCosSpecifiedHead(), o2 = this._sessionModule.genSSOReportHead(), s2 = this._sessionModule.isIntl();
          this._configMap.set(io, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.IM_OPEN_STATUS, ".").concat(V.CMD.LOGIN) }), body: { state: "Online", isWebUniapp: 0, deviceBrand: 0 }, keyMap: { request: { deviceBrand: "InstType" }, response: { InstId: "instanceID", HelloInterval: "helloInterval" } } };
          }(e3)), this._configMap.set(uo, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.IM_OPEN_STATUS, ".").concat(V.CMD.LOGOUT) }), body: { type: 0 }, keyMap: { request: { type: "wslogout_type" } } };
          }(e3)), this._configMap.set(co, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.IM_OPEN_STATUS, ".").concat(V.CMD.HELLO) }), body: { isWebUniapp: 0 }, keyMap: { response: { NewInstInfo: "newInstanceInfo" } } };
          }(e3)), this._configMap.set(lo, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.STAT_SERVICE, ".").concat(V.CMD.KICK_OTHER) }), body: {} };
          }(e3)), this._configMap.set(ws, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.IM_COS_SIGN, ".").concat(V.CMD.COS_SIGN) }), body: { cmd: "open_im_cos_svc", subCmd: "get_cos_token", duration: 300, version: 2 }, keyMap: { request: { userSig: "usersig", subCmd: "sub_cmd", cmd: "cmd", duration: "duration", version: "version" }, response: { expired_time: "expiredTime", bucket_name: "bucketName", session_token: "sessionToken", tmp_secret_id: "secretId", tmp_secret_key: "secretKey" } } };
          }(n2)), this._configMap.set(Fs, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.CUSTOM_UPLOAD, ".").concat(V.CMD.COS_PRE_SIG) }), body: { fileType: void 0, fileName: void 0, uploadMethod: 0, duration: 900 }, keyMap: { request: { userSig: "usersig", fileType: "file_type", fileName: "file_name", uploadMethod: "upload_method" }, response: { expired_time: "expiredTime", request_id: "requestId", head_url: "headUrl", upload_url: "uploadUrl", download_url: "downloadUrl", ci_url: "ciUrl", snapshot_url: "requestSnapshotUrl" } } };
          }(n2)), this._configMap.set(qs, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.CUSTOM_UPLOAD, ".").concat(V.CMD.VIDEO_COVER) }), body: { version: 1, platform: void 0, coverName: void 0, requestSnapshotUrl: void 0 }, keyMap: { request: { version: "version", platform: "platform", coverName: "cover_name", requestSnapshotUrl: "snapshot_url" }, response: { error_code: "errorCode", error_msg: "errorInfo", download_url: "snapshotUrl" } } };
          }(n2)), this._configMap.set(Xs, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.IM_CONFIG_MANAGER, ".").concat(V.CMD.FETCH_COMMERCIAL_CONFIG) }), body: { SDKAppID: 0 }, keyMap: { request: { SDKAppID: "uint32_sdkappid" }, response: { int32_error_code: "errorCode", str_error_message: "errorMessage", str_purchase_bits: "purchaseBits", uint32_expired_time: "expiredTime" } } };
          }(e3)), this._configMap.set(Qs, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.IM_CONFIG_MANAGER, ".").concat(V.CMD.PUSHED_COMMERCIAL_CONFIG) }), body: {}, keyMap: { response: { int32_error_code: "errorCode", str_error_message: "errorMessage", str_purchase_bits: "purchaseBits", uint32_expired_time: "expiredTime" } } };
          }(e3)), this._configMap.set(zs, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.IM_CONFIG_MANAGER, ".").concat(V.CMD.FETCH_CLOUD_CONTROL_CONFIG) }), body: { SDKAppID: 0, version: 0 }, keyMap: { request: { SDKAppID: "uint32_sdkappid", version: "uint64_version" }, response: { int32_error_code: "errorCode", str_error_message: "errorMessage", str_json_config: "cloudControlConfig", uint32_expired_time: "expiredTime", uint32_sdkappid: "SDKAppID", uint64_version: "version" } } };
          }(e3)), this._configMap.set(Js, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.IM_CONFIG_MANAGER, ".").concat(V.CMD.PUSHED_CLOUD_CONTROL_CONFIG) }), body: {}, keyMap: { response: { int32_error_code: "errorCode", str_error_message: "errorMessage", str_json_config: "cloudControlConfig", uint32_expired_time: "expiredTime", uint32_sdkappid: "SDKAppID", uint64_version: "version" } } };
          }(e3)), this._configMap.set(Zs, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.OVERLOAD_PUSH, ".").concat(V.CMD.OVERLOAD_NOTIFY) }), body: {}, keyMap: { response: { OverLoadServCmd: "overloadCommand", DelaySecs: "waitingTime" } } };
          }(e3)), this._configMap.set(po, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.OPEN_IM, ".").concat(V.CMD.GET_MESSAGES) }), body: { cookie: "", syncFlag: 0, needAbstract: 1, isOnlineSync: 0, needSignaling: 1 }, keyMap: { request: { fromAccount: "From_Account", toAccount: "To_Account", from: "From_Account", to: "To_Account", time: "MsgTimeStamp", sequence: "MsgSeq", random: "MsgRandom", elements: "MsgBody" }, response: { MsgList: "messageList", SyncFlag: "syncFlag", To_Account: "to", From_Account: "from", ClientSeq: "clientSequence", MsgSeq: "sequence", NoticeSeq: "noticeSequence", NotifySeq: "notifySequence", MsgRandom: "random", MsgTimeStamp: "time", MsgContent: "content", ToGroupId: "to", MsgKey: "messageKey", GroupTips: "groupTips", MsgBody: "elements", MsgType: "type", C2CRemainingUnreadCount: "C2CRemainingUnreadList", C2CPairUnreadCount: "C2CPairUnreadList" } } };
          }(e3)), s2 || (this._configMap.set(go, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.OPEN_IM, ".").concat(V.CMD.BIG_DATA_HALLWAY_AUTH_KEY) }), body: {} };
          }(e3)), this._configMap.set(la, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.IM_MSG_AUDIT_MGR, ".").concat(V.CMD.GET_RPOFANITY_LIST) }), body: { version: 0, deviceID: "", startIndex: void 0 }, keyMap: { request: { version: "uint64_version", deviceID: "str_device_id", startIndex: "uint64_start_index" }, response: { msg_cmd_error_code: "errorInfo", str_err_msg: "errorMessage", uint32_code: "errorCode", msg_scene_ctl_config: "filterConfig", uint64_c2c_custom_msg_flag: "c2c_custom_message", uint64_c2c_text_msg_flag: "c2c_text_message", uint64_group_custom_msg_flag: "group_custom_message", uint64_group_text_msg_flag: "group_text_message", uint64_group_info_flag: "group_profile", uint64_group_member_info_flag: "group_member_profile", uint64_relation_chain_flag: "sns", uint64_user_info_flag: "user_profile", rpt_msg_dirty_word: "lexicon", str_dirty_word: "profanity", str_replaced_content: "replacement", uint64_filter_type: "filterType", uint64_id: "id", uint64_word_type: "profanityType", uint64_complete_flag: "completeFlag", uint64_next_start_index: "nextStartIndex", uint64_version: "version", uint64_expired_time: "expiredTime" } } };
          }(e3))), this._configMap.set(_o, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.OPEN_IM, ".").concat(V.CMD.SEND_MESSAGE) }), body: { fromAccount: "", toAccount: "", msgSeq: 0, msgRandom: 0, msgBody: [], cloudCustomData: void 0, nick: "", avatar: "", msgLifeTime: void 0, offlinePushInfo: { pushFlag: 0, title: "", desc: "", ext: "", apnsInfo: { badgeMode: 0, isVoipPush: void 0 }, androidInfo: { OPPOChannelID: "" } }, messageControlInfo: void 0, clientTime: void 0, needReadReceipt: 0, isSupportExtension: 0 }, keyMap: { request: { fromAccount: "From_Account", toAccount: "To_Account", msgTimeStamp: "MsgTimeStamp", msgSeq: "MsgSeq", msgRandom: "MsgRandom", msgBody: "MsgBody", count: "MaxCnt", lastMessageTime: "LastMsgTime", messageKey: "MsgKey", peerAccount: "Peer_Account", data: "Data", description: "Desc", extension: "Ext", type: "MsgType", content: "MsgContent", sizeType: "Type", uuid: "UUID", url: "", imageUrl: "URL", fileUrl: "Url", remoteAudioUrl: "Url", remoteVideoUrl: "VideoUrl", thumbUUID: "ThumbUUID", videoUUID: "VideoUUID", videoUrl: "", downloadFlag: "Download_Flag", nick: "From_AccountNick", avatar: "From_AccountHeadurl", from: "From_Account", time: "MsgTimeStamp", messageRandom: "MsgRandom", messageSequence: "MsgSeq", elements: "MsgBody", clientSequence: "ClientSeq", payload: "MsgContent", messageList: "MsgList", messageNumber: "MsgNum", abstractList: "AbstractList", messageBody: "MsgBody", needReadReceipt: "IsNeedReadReceipt" } } };
          }(e3)), this._configMap.set(ho, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.SEND_GROUP_MESSAGE) }), body: { fromAccount: "", groupID: "", random: 0, clientSequence: 0, priority: "", msgBody: [], cloudCustomData: void 0, onlineOnlyFlag: 0, offlinePushInfo: { pushFlag: 0, title: "", desc: "", ext: "", apnsInfo: { badgeMode: 0, isVoipPush: void 0 }, androidInfo: { OPPOChannelID: "" } }, groupAtInfo: [], messageControlInfo: void 0, clientTime: void 0, needReadReceipt: 0, topicID: void 0, receiverList: void 0, isSupportExtension: 0 }, keyMap: { request: { to: "GroupId", extension: "Ext", data: "Data", description: "Desc", random: "Random", sequence: "ReqMsgSeq", count: "ReqMsgNumber", type: "MsgType", priority: "MsgPriority", content: "MsgContent", elements: "MsgBody", sizeType: "Type", uuid: "UUID", url: "", imageUrl: "URL", fileUrl: "Url", remoteAudioUrl: "Url", remoteVideoUrl: "VideoUrl", thumbUUID: "ThumbUUID", videoUUID: "VideoUUID", videoUrl: "", downloadFlag: "Download_Flag", clientSequence: "ClientSeq", from: "From_Account", time: "MsgTimeStamp", messageRandom: "MsgRandom", messageSequence: "MsgSeq", payload: "MsgContent", messageList: "MsgList", messageNumber: "MsgNum", abstractList: "AbstractList", messageBody: "MsgBody", needReadReceipt: "NeedReadReceipt", receiverList: "To_Account" }, response: { MsgTime: "time", MsgSeq: "sequence" } } };
          }(e3)), this._configMap.set(Io, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.OPEN_IM, ".").concat(V.CMD.REVOKE_C2C_MESSAGE) }), body: { msgInfo: { fromAccount: "", toAccount: "", msgTimeStamp: 0, msgSeq: 0, msgRandom: 0 } }, keyMap: { request: { msgInfo: "MsgInfo", msgTimeStamp: "MsgTimeStamp", msgSeq: "MsgSeq", msgRandom: "MsgRandom" } } };
          }(e3)), this._configMap.set(ss, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.REVOKE_GROUP_MESSAGE) }), body: { groupID: "", msgSeqList: void 0, topicID: "" }, keyMap: { request: { msgSeqList: "MsgSeqList", msgSeq: "MsgSeq" } } };
          }(e3)), this._configMap.set(Eo, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.OPEN_IM, ".").concat(V.CMD.GET_C2C_ROAM_MESSAGES) }), body: { peerAccount: "", count: 15, lastMessageTime: 0, messageKey: "", withRecalledMessage: 1, direction: 0 }, keyMap: { request: { messageKey: "MsgKey", peerAccount: "Peer_Account", count: "MaxCnt", lastMessageTime: "LastMsgTime", withRecalledMessage: "WithRecalledMsg", direction: "GetDirection" }, response: { LastMsgTime: "lastMessageTime", IsNeedReadReceipt: "needReadReceipt", IsPeerRead: "readReceiptSentByPeer" } } };
          }(e3)), this._configMap.set(Lo, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.OPEN_IM, ".").concat(V.CMD.MODIFY_C2C_MESSAGE) }), body: { from: "", to: "", sequence: 0, random: 0, time: 0, version: 0, elements: void 0, cloudCustomData: void 0 }, keyMap: { request: { sequence: "MsgSeq", random: "MsgRandom", time: "MsgTime", version: "MsgVersion", type: "MsgType", content: "MsgContent" } } };
          }(e3)), this._configMap.set(is, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.GET_GROUP_ROAM_MESSAGES) }), body: { withRecalledMsg: 1, groupID: "", count: 15, sequence: "", topicID: void 0 }, keyMap: { request: { sequence: "ReqMsgSeq", count: "ReqMsgNumber", withRecalledMessage: "WithRecalledMsg" }, response: { Random: "random", MsgTime: "time", MsgSeq: "sequence", ReqMsgSeq: "sequence", RspMsgList: "messageList", IsPlaceMsg: "isPlaceMessage", IsSystemMsg: "isSystemMessage", ToGroupId: "to", EnumFrom_AccountType: "fromAccountType", EnumTo_AccountType: "toAccountType", GroupCode: "groupCode", MsgPriority: "priority", MsgBody: "elements", MsgType: "type", MsgContent: "content", IsFinished: "complete", Download_Flag: "downloadFlag", ClientSeq: "clientSequence", ThumbUUID: "thumbUUID", VideoUUID: "videoUUID", ToTopicId: "topicID", InvisibleMsgSeq: "invisibleSequenceList" } } };
          }(e3)), this._configMap.set(Co, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.OPEN_IM, ".").concat(V.CMD.SET_C2C_MESSAGE_READ) }), body: { C2CMsgReaded: void 0 }, keyMap: { request: { lastMessageTime: "LastedMsgTime" } } };
          }(e3)), this._configMap.set(To, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.OPEN_IM, ".").concat(V.CMD.SET_C2C_PEER_MUTE_NOTIFICATIONS) }), body: { userIDList: void 0, muteFlag: 0 }, keyMap: { request: { userIDList: "Peer_Account", muteFlag: "Mute_Notifications" } } };
          }(e3)), this._configMap.set(Do, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.OPEN_IM, ".").concat(V.CMD.GET_C2C_PEER_MUTE_NOTIFICATIONS) }), body: { updateSequence: 0 }, keyMap: { response: { MuteNotificationsList: "muteFlagList" } } };
          }(e3)), this._configMap.set(as, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.SET_GROUP_MESSAGE_READ) }), body: { groupID: void 0, messageReadSeq: void 0, topicID: void 0 }, keyMap: { request: { messageReadSeq: "MsgReadedSeq" } } };
          }(e3)), this._configMap.set(rs, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.OPEN_IM, ".").concat(V.CMD.SET_ALL_MESSAGE_READ) }), body: { readAllC2CMessage: 0, groupMessageReadInfoList: [] }, keyMap: { request: { readAllC2CMessage: "C2CReadAllMsg", groupMessageReadInfoList: "GroupReadInfo", messageSequence: "MsgSeq" }, response: { C2CReadAllMsg: "readAllC2CMessage", GroupReadInfoArray: "groupMessageReadInfoList" } } };
          }(e3)), this._configMap.set(ko, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.OPEN_IM, ".").concat(V.CMD.DELETE_C2C_MESSAGE) }), body: { fromAccount: "", to: "", keyList: void 0 }, keyMap: { request: { keyList: "MsgKeyList" } } };
          }(e3)), this._configMap.set(vs, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.DELETE_GROUP_MESSAGE) }), body: { groupID: "", deleter: "", keyList: void 0, topicID: void 0 }, keyMap: { request: { deleter: "Deleter_Account", keyList: "Seqs" } } };
          }(e3)), this._configMap.set(pa, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.IM_OPEN_TRANSLATE, ".").concat(V.CMD.TRANSLATE_TEXT) }), body: { sourceTextList: void 0, SDKAppID: 0, from: 0, source: "", target: "" }, keyMap: { request: { sourceTextList: "SourceText", SDKAppID: "SdkAppId", from: "FromAccount" }, response: { TargetText: "translatedTextList", RequestId: "requestID", CmdErrorCode: "error", ErrorCode: "code", ErrorInfo: "message" } } };
          }(e3)), this._configMap.set(ms, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.OPEN_IM, ".").concat(V.CMD.MODIFY_GROUP_MESSAGE) }), body: { groupID: "", topicID: void 0, sequence: 0, version: 0, elements: void 0, cloudCustomData: void 0 }, keyMap: { request: { sequence: "MsgSeq", version: "MsgVersion", type: "MsgType", content: "MsgContent" } } };
          }(e3)), this._configMap.set(us, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.GET_READ_RECEIPT) }), body: { groupID: "", sequenceList: void 0 }, keyMap: { request: { sequence: "MsgSeq" } } };
          }(e3)), this._configMap.set(ls, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.OPEN_IM, ".").concat(V.CMD.SEND_C2C_READ_RECEIPT) }), body: { peerAccount: "", messageInfoList: void 0 }, keyMap: { request: { peerAccount: "Peer_Account", messageInfoList: "C2CMsgInfo", fromAccount: "From_Account", toAccount: "To_Account", sequence: "MsgSeq", random: "MsgRandom", time: "MsgTime", clientTime: "MsgClientTime" } } };
          }(e3)), this._configMap.set(cs, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.SEND_READ_RECEIPT) }), body: { groupID: "", sequenceList: void 0 }, keyMap: { request: { sequenceList: "MsgSeqList", sequence: "MsgSeq" } } };
          }(e3)), this._configMap.set(ps, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.GET_READ_RECEIPT_DETAIL) }), body: { groupID: "", sequence: void 0, flag: 0, cursor: 0, count: 0 }, keyMap: { request: { sequence: "MsgSeq", count: "Num" }, response: { ReadList: "readUserIDList", Read_Account: "userID", UnreadList: "unreadUserIDList", Unread_Account: "userID", IsFinish: "isCompleted" } } };
          }(e3)), this._configMap.set(Ao, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.OPEN_IM_MSG_EXT, ".").concat(V.CMD.MODIFY_C2C_MESSAGE_EXTENSIONS) }), body: { from: void 0, to: void 0, messageKey: void 0, operateType: void 0, extensionList: void 0 } };
          }(e3)), this._configMap.set(Ro, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.OPEN_IM_MSG_EXT, ".").concat(V.CMD.GET_C2C_MESSAGE_EXTENSIONS) }), body: { from: void 0, to: void 0, messageKey: void 0, startSequence: void 0 } };
          }(e3)), this._configMap.set(Ds, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.OPEN_IM_MSG_EXT, ".").concat(V.CMD.MODIFY_GROUP_MESSAGE_EXTENSIONS) }), body: { groupID: void 0, topicID: void 0, messageSequence: void 0, operateType: void 0, extensionList: void 0 } };
          }(e3)), this._configMap.set(Es, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.OPEN_IM_MSG_EXT, ".").concat(V.CMD.GET_GROUP_MESSAGE_EXTENSIONS) }), body: { groupID: void 0, topicID: void 0, messageSequence: void 0, startSequence: void 0 } };
          }(e3)), this._configMap.set(So, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.OPEN_IM, ".").concat(V.CMD.GET_PEER_READ_TIME) }), body: { userIDList: void 0 }, keyMap: { request: { userIDList: "To_Account" }, response: { ReadTime: "peerReadTimeList" } } };
          }(e3)), this._configMap.set(Oo, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.RECENT_CONTACT, ".").concat(V.CMD.GET_CONVERSATION_LIST) }), body: { fromAccount: void 0, count: 0 }, keyMap: { request: {}, response: { SessionItem: "conversations", ToAccount: "groupID", To_Account: "userID", UnreadMsgCount: "unreadCount", MsgGroupReadedSeq: "messageReadSeq", C2cPeerReadTime: "c2cPeerReadTime" } } };
          }(e3)), this._configMap.set(No, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.RECENT_CONTACT, ".").concat(V.CMD.PAGING_GET_CONVERSATION_LIST) }), body: { fromAccount: void 0, timeStamp: void 0, startIndex: void 0, pinnedTimeStamp: void 0, pinnedStartIndex: void 0, orderType: void 0, messageAssistFlag: 4, assistFlag: 15 }, keyMap: { request: { messageAssistFlag: "MsgAssistFlags", assistFlag: "AssistFlags", pinnedTimeStamp: "TopTimeStamp", pinnedStartIndex: "TopStartIndex" }, response: { SessionItem: "conversations", ToAccount: "groupID", To_Account: "userID", UnreadMsgCount: "unreadCount", MsgGroupReadedSeq: "messageReadSeq", C2cPeerReadTime: "c2cPeerReadTime", LastMsgFlags: "lastMessageFlag", TopFlags: "isPinned", TopTimeStamp: "pinnedTimeStamp", TopStartIndex: "pinnedStartIndex", GroupId: "convGroupID" } } };
          }(e3)), this._configMap.set(Go, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.RECENT_CONTACT, ".").concat(V.CMD.DELETE_CONVERSATION) }), body: { fromAccount: "", conversationList: void 0, clearHistoryMessage: void 0 }, keyMap: { request: { toGroupID: "ToGroupid", clearHistoryMessage: "ClearRamble", conversationList: "ContactItem" }, response: { ResultItem: "resultList", ToGroupid: "groupID", ResultCode: "code", ResultInfo: "info" } } };
          }(e3)), this._configMap.set(Uo, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.RECENT_CONTACT, ".").concat(V.CMD.CLEAR_HISTORY_MESSAGE) }), body: { fromAccount: "", toAccount: void 0, type: 1, toGroupID: void 0 }, keyMap: { request: { toGroupID: "ToGroupid" } } };
          }(e3)), this._configMap.set(Po, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.RECENT_CONTACT, ".").concat(V.CMD.PIN_CONVERSATION) }), body: { fromAccount: "", operationType: 1, itemList: void 0 }, keyMap: { request: { itemList: "RecentContactItem" } } };
          }(e3)), this._configMap.set(bo, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.OPEN_IM, ".").concat(V.CMD.DELETE_GROUP_AT_TIPS) }), body: { messageListToDelete: void 0 }, keyMap: { request: { messageListToDelete: "DelMsgList", messageSeq: "MsgSeq", messageRandom: "MsgRandom" } } };
          }(e3)), this._configMap.set(wo, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.RECENT_CONTACT, ".").concat(V.CMD.MARK_CONVERSATION) }), body: { fromAccount: "", itemList: void 0 }, keyMap: { request: { itemList: "MarkItem", operationType: "OptType", groupID: "ToGroupId" }, response: { ToGroupId: "groupID", OptType: "operationType" } } };
          }(e3)), this._configMap.set(Fo, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.RECENT_CONTACT, ".").concat(V.CMD.MARK_CONVERSATION) }), body: { fromAccount: "", itemList: void 0 }, keyMap: { request: { itemList: "MarkItem", operationType: "OptType", groupID: "ToGroupId" }, response: { ToGroupId: "groupID", OptType: "operationType" } } };
          }(e3)), this._configMap.set(qo, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.RECENT_CONTACT, ".").concat(V.CMD.CREATE_CONVERSATION_GROUP) }), body: { fromAccount: "", itemList: void 0 }, keyMap: { request: { itemList: "GroupContactItem", groupID: "ToGroupId" }, response: { GroupId: "convGroupID", ToGroupId: "groupID", OptType: "operationType" } } };
          }(e3)), this._configMap.set(xo, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.RECENT_CONTACT, ".").concat(V.CMD.DELETE_CONVERSATION_GROUP) }), body: { fromAccount: "", groupName: void 0 }, keyMap: { request: {}, response: { GroupId: "convGroupID" } } };
          }(e3)), this._configMap.set(Vo, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.RECENT_CONTACT, ".").concat(V.CMD.UPDATE_CONVERSATION_GROUP) }), body: { fromAccount: "", updateType: void 0, updateGroup: void 0 }, keyMap: { request: { oldName: "OldGroupName", newName: "NewGroupName", groupID: "ToGroupId", operationType: "ContactOptType", groupName: "OldGroupName", updateItem: "ContactUpdateItem" }, response: { ContactOptType: "operationType", ToGroupId: "groupID", GroupId: "convGroupID" } } };
          }(e3)), this._configMap.set(Bo, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.RECENT_CONTACT, ".").concat(V.CMD.UPDATE_CONVERSATION_GROUP) }), body: { fromAccount: "", updateType: void 0, updateGroup: { groupName: void 0, updateGroupType: void 0, updateItem: void 0 } }, keyMap: { request: {}, response: {} } };
          }(e3)), this._configMap.set(Ho, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.RECENT_CONTACT, ".").concat(V.CMD.UPDATE_CONVERSATION_GROUP) }), body: { fromAccount: "", updateType: void 0, updateGroup: void 0 }, keyMap: { request: {}, response: {} } };
          }(e3)), this._configMap.set(Ko, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.RECENT_CONTACT, ".").concat(V.CMD.GET_CONVERSATION_GROUP_LIST) }), body: { fromAccount: "", startTime: void 0, startIndex: void 0 }, keyMap: { request: {}, response: { GroupId: "convGroupID", ToGroupId: "groupID", OptType: "operationType", CustomMark: "customData", ContactGroupId: "convGroupIDList" } } };
          }(e3)), this._configMap.set(fo, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.PROFILE, ".").concat(V.CMD.PORTRAIT_GET) }), body: { fromAccount: "", userItem: [] }, keyMap: { request: { toAccount: "To_Account", standardSequence: "StandardSequence", customSequence: "CustomSequence" } } };
          }(e3)), this._configMap.set(vo, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.PROFILE, ".").concat(V.CMD.PORTRAIT_SET) }), body: { fromAccount: "", profileItem: [{ tag: Be.NICK, value: "" }, { tag: Be.GENDER, value: "" }, { tag: Be.ALLOWTYPE, value: "" }, { tag: Be.AVATAR, value: "" }] }, keyMap: { request: { toAccount: "To_Account", standardSequence: "StandardSequence", customSequence: "CustomSequence" } } };
          }(e3)), this._configMap.set(mo, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.FRIEND, ".").concat(V.CMD.GET_BLACKLIST) }), body: { fromAccount: "", startIndex: 0, maxLimited: 30, lastSequence: 0 }, keyMap: { response: { CurruentSequence: "currentSequence" } } };
          }(e3)), this._configMap.set(Mo, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.FRIEND, ".").concat(V.CMD.ADD_BLACKLIST) }), body: { fromAccount: "", toAccount: [] } };
          }(e3)), this._configMap.set(yo, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.FRIEND, ".").concat(V.CMD.DELETE_BLACKLIST) }), body: { fromAccount: "", toAccount: [] } };
          }(e3)), this._configMap.set(oa, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.IM_OPEN_STATUS, ".").concat(V.CMD.SET_SELF_STATUS) }), body: { customStatus: "" }, keyMap: {} };
          }(e3)), this._configMap.set(sa, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.IM_OPEN_STATUS, ".").concat(V.CMD.GET_USER_STATUS) }), body: { userIDList: void 0 }, keyMap: { response: { UserStatusList: "successUserList", ErrorList: "failureUserList", To_Account: "userID", Invalid_Account: "invalidUserID", Status: "statusType" } } };
          }(e3)), this._configMap.set(aa, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.IM_OPEN_STATUS, ".").concat(V.CMD.SUBSCRIBE_USER_STATUS) }), body: { userIDList: void 0 }, keyMap: { response: { ErrorList: "failureUserList", To_Account: "userID", Invalid_Account: "invalidUserID" } } };
          }(e3)), this._configMap.set(ra, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.IM_OPEN_STATUS, ".").concat(V.CMD.UNSUBSCRIBE_USER_STATUS) }), body: { userIDList: void 0, unsubscribeAll: void 0 }, keyMap: { response: { ErrorList: "failureUserList", To_Account: "userID", Invalid_Account: "invalidUserID" } } };
          }(e3)), this._configMap.set(Wo, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.GET_JOINED_GROUPS) }), body: { memberAccount: "", limit: void 0, offset: void 0, groupType: void 0, responseFilter: { groupBaseInfoFilter: void 0, selfInfoFilter: void 0 }, isSupportTopic: 0 }, keyMap: { request: { memberAccount: "Member_Account" }, response: { GroupIdList: "groups", NoUnreadSeqList: "excludedUnreadSequenceList", MsgSeq: "readedSequence", LastRecallTime: "_lastRevokedTime" } } };
          }(e3)), this._configMap.set(Yo, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.GET_GROUP_INFO) }), body: { groupIDList: void 0, responseFilter: { groupBaseInfoFilter: ["Type", "Name", "Introduction", "Notification", "FaceUrl", "Owner_Account", "CreateTime", "InfoSeq", "LastInfoTime", "LastMsgTime", "MemberNum", "MaxMemberNum", "ApplyJoinOption", "NextMsgSeq", "ShutUpAllMember"], groupCustomFieldFilter: void 0, memberInfoFilter: void 0, memberCustomFieldFilter: void 0 } }, keyMap: { request: { groupIDList: "GroupIdList", groupCustomField: "AppDefinedData", memberCustomField: "AppMemberDefinedData", groupCustomFieldFilter: "AppDefinedDataFilter_Group", memberCustomFieldFilter: "AppDefinedDataFilter_GroupMember" }, response: { GroupIdList: "groups", AppDefinedData: "groupCustomField", AppMemberDefinedData: "memberCustomField", AppDefinedDataFilter_Group: "groupCustomFieldFilter", AppDefinedDataFilter_GroupMember: "memberCustomFieldFilter", InfoSeq: "infoSequence", MemberList: "members", GroupInfo: "groups", ShutUpUntil: "muteUntil", ShutUpAllMember: "muteAllMembers" } } };
          }(e3)), this._configMap.set(jo, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.CREATE_GROUP) }), body: { type: void 0, name: void 0, groupID: void 0, ownerID: void 0, introduction: void 0, notification: void 0, maxMemberNum: void 0, joinOption: void 0, memberList: void 0, groupCustomField: void 0, memberCustomField: void 0, webPushFlag: 1, avatar: "", isSupportTopic: void 0, inviteOption: void 0 }, keyMap: { request: { ownerID: "Owner_Account", userID: "Member_Account", avatar: "FaceUrl", maxMemberNum: "MaxMemberCount", joinOption: "ApplyJoinOption", groupCustomField: "AppDefinedData", memberCustomField: "AppMemberDefinedData", inviteOption: "InviteJoinOption" }, response: { HugeGroupFlag: "avChatRoomFlag", OverJoinedGroupLimit_Account: "overLimitUserIDList" } } };
          }(e3)), this._configMap.set(zo, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.DESTROY_GROUP) }), body: { groupID: void 0 } };
          }(e3)), this._configMap.set(Jo, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.MODIFY_GROUP_INFO) }), body: { groupID: void 0, name: void 0, introduction: void 0, notification: void 0, avatar: void 0, joinOption: void 0, groupCustomField: void 0, muteAllMembers: void 0, inviteOption: void 0 }, keyMap: { request: { groupCustomField: "AppDefinedData", muteAllMembers: "ShutUpAllMember", joinOption: "ApplyJoinOption", avatar: "FaceUrl", inviteOption: "InviteJoinOption" }, response: { AppDefinedData: "groupCustomField", ShutUpAllMember: "muteAllMembers" } } };
          }(e3)), this._configMap.set(Xo, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.APPLY_JOIN_GROUP) }), body: { groupID: void 0, applyMessage: void 0, userDefinedField: void 0, webPushFlag: 1, historyMessageFlag: void 0 }, keyMap: { request: { applyMessage: "ApplyMsg", historyMessageFlag: "HugeGroupHistoryMsgFlag" }, response: { HugeGroupFlag: "avChatRoomFlag", AVChatRoomKey: "avChatRoomKey", RspMsgList: "messageList", ToGroupId: "to" } } };
          }(e3)), this._configMap.set(Qo, function(e4) {
            return e4.a2, e4.tinyid, { head: t(t({}, g(e4, xi)), {}, { servcmd: "".concat(V.NAME.BIG_GROUP_NO_AUTH, ".").concat(V.CMD.APPLY_JOIN_GROUP) }), body: { groupID: void 0, applyMessage: void 0, userDefinedField: void 0, webPushFlag: 1 }, keyMap: { request: { applyMessage: "ApplyMsg" }, response: { HugeGroupFlag: "avChatRoomFlag" } } };
          }(e3)), this._configMap.set(Zo, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.QUIT_GROUP) }), body: { groupID: void 0 } };
          }(e3)), this._configMap.set($o, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.SEARCH_GROUP_BY_ID) }), body: { groupIDList: void 0, responseFilter: { groupBasePublicInfoFilter: ["Type", "Name", "Introduction", "Notification", "FaceUrl", "CreateTime", "Owner_Account", "LastInfoTime", "LastMsgTime", "NextMsgSeq", "MemberNum", "MaxMemberNum", "ApplyJoinOption", "InviteJoinOption"] } }, keyMap: { response: {} } };
          }(e3)), this._configMap.set(es, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.CHANGE_GROUP_OWNER) }), body: { groupID: void 0, newOwnerID: void 0 }, keyMap: { request: { newOwnerID: "NewOwner_Account" } } };
          }(e3)), this._configMap.set(ts, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.HANDLE_APPLY_JOIN_GROUP) }), body: { groupID: void 0, applicant: void 0, handleAction: void 0, handleMessage: void 0, authentication: void 0, messageKey: void 0, userDefinedField: void 0 }, keyMap: { request: { applicant: "Applicant_Account", handleAction: "HandleMsg", handleMessage: "ApprovalMsg", messageKey: "MsgKey" } } };
          }(e3)), this._configMap.set(ns, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.HANDLE_INVITE_JOIN_GROUP) }), body: { groupID: void 0, applicant: void 0, invitee: void 0, handleAction: void 0, handleMessage: void 0, authentication: void 0, userDefinedField: void 0 }, keyMap: { request: { applicant: "Applicant_Account", invitee: "Invited_Account", handleAction: "HandleMsg", handleMessage: "ApprovalMsg" } } };
          }(e3)), this._configMap.set(os, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.HANDLE_GROUP_INVITATION) }), body: { groupID: void 0, inviter: void 0, handleAction: void 0, handleMessage: void 0, authentication: void 0, messageKey: void 0, userDefinedField: void 0 }, keyMap: { request: { inviter: "Inviter_Account", handleAction: "HandleMsg", handleMessage: "ApprovalMsg", messageKey: "MsgKey" } } };
          }(e3)), this._configMap.set(ds, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.GET_GROUP_APPLICATION) }), body: { startTime: void 0, limit: void 0, handleAccount: void 0 }, keyMap: { request: { handleAccount: "Handle_Account" }, response: { To_Account: "userID" } } };
          }(e3)), this._configMap.set(gs, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.OPEN_IM, ".").concat(V.CMD.DELETE_GROUP_SYSTEM_MESSAGE) }), body: { messageListToDelete: void 0 }, keyMap: { request: { messageListToDelete: "DelMsgList", messageSeq: "MsgSeq", messageRandom: "MsgRandom" } } };
          }(e3)), this._configMap.set(_s, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.BIG_GROUP_LONG_POLLING, ".").concat(V.CMD.AVCHATROOM_LONG_POLL) }), body: { USP: 1, startSeq: 1, startBroadcastSeq: void 0, holdTime: 90, key: void 0, simplifiedMessage: void 0 }, keyMap: { request: { USP: "USP" }, response: { ToGroupId: "groupID", RspBroadcastMsgList: "broadcastMessageList", IsSystemMsg: "isSystemMessage" } } };
          }(e3)), this._configMap.set(hs, function(e4) {
            return e4.a2, e4.tinyid, { head: t(t({}, g(e4, Vi)), {}, { servcmd: "".concat(V.NAME.BIG_GROUP_LONG_POLLING_NO_AUTH, ".").concat(V.CMD.AVCHATROOM_LONG_POLL) }), body: { USP: 1, startSeq: 1, holdTime: 90, key: void 0, simplifiedMessage: void 0 }, keyMap: { request: { USP: "USP" }, response: { ToGroupId: "groupID", RspBroadcastMsgList: "broadcastMessageList", IsSystemMsg: "isSystemMessage" } } };
          }(e3)), this._configMap.set(fs, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.GET_ONLINE_MEMBER_NUM) }), body: { groupID: void 0 } };
          }(e3)), this._configMap.set(Ms, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.SET_GROUP_ATTRIBUTES) }), body: { groupID: void 0, groupAttributeList: void 0, mainSequence: void 0, avChatRoomKey: void 0, attributeControl: ["RaceConflict"] }, keyMap: { request: { key: "key", value: "value" } } };
          }(e3)), this._configMap.set(ys, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.MODIFY_GROUP_ATTRIBUTES) }), body: { groupID: void 0, groupAttributeList: void 0, mainSequence: void 0, avChatRoomKey: void 0, attributeControl: ["RaceConflict"] }, keyMap: { request: { key: "key", value: "value" } } };
          }(e3)), this._configMap.set(Is, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.DELETE_GROUP_ATTRIBUTES) }), body: { groupID: void 0, groupAttributeList: void 0, mainSequence: void 0, avChatRoomKey: void 0, attributeControl: ["RaceConflict"] }, keyMap: { request: { key: "key" } } };
          }(e3)), this._configMap.set(Cs, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.CLEAR_GROUP_ATTRIBUTES) }), body: { groupID: void 0, mainSequence: void 0, avChatRoomKey: void 0, attributeControl: ["RaceConflict"] } };
          }(e3)), this._configMap.set(Ts, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.GROUP_ATTR, ".").concat(V.CMD.GET_GROUP_ATTRIBUTES) }), body: { groupID: void 0, avChatRoomKey: void 0, groupType: 1 }, keyMap: { request: { avChatRoomKey: "Key", groupType: "GroupType" } } };
          }(e3)), this._configMap.set(Ss, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.GET_GROUP_NOTIFY) }), body: { notifyType: 1, groupID: "", beginTime: 0, endTime: 0, limit: 20 }, keyMap: { request: {}, response: { NextMsgTime: "nextRevokedTime", NotifyMsgList: "notifyList" } } };
          }(e3)), this._configMap.set(ks, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.UPDATE_GROUP_COUNTER) }), body: { groupID: void 0, counterList: void 0, avChatRoomKey: void 0, mode: void 0 }, keyMap: { request: { counterList: "GroupCounter" } } };
          }(e3)), this._configMap.set(Ls, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.GET_GROUP_COUNTER) }), body: { groupID: void 0, keyList: [], avChatRoomKey: void 0 }, keyMap: { request: { keyList: "GroupCounterKeys" } } };
          }(e3)), this._configMap.set($s, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.GROUP_COMMUNITY, ".").concat(V.CMD.CREATE_TOPIC) }), body: { groupID: void 0, topicName: void 0, avatar: void 0, customData: void 0, topicID: void 0, notification: void 0, introduction: void 0 }, keyMap: { request: { avatar: "FaceUrl" } } };
          }(e3)), this._configMap.set(ea, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.GROUP_COMMUNITY, ".").concat(V.CMD.DELETE_TOPIC) }), body: { groupID: void 0, topicIDList: void 0 }, keyMap: { request: { topicIDList: "TopicIdList" }, response: { DestroyResultItem: "resultList" } } };
          }(e3)), this._configMap.set(ta, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.GROUP_COMMUNITY, ".").concat(V.CMD.UPDATE_TOPIC_PROFILE) }), body: { groupID: void 0, topicID: void 0, avatar: void 0, customData: void 0, notification: void 0, introduction: void 0, muteAllMembers: void 0, topicName: void 0 }, keyMap: { request: { avatar: "FaceUrl", muteAllMembers: "ShutUpAllMember" } } };
          }(e3)), this._configMap.set(na, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.GROUP_COMMUNITY, ".").concat(V.CMD.GET_TOPIC_LIST) }), body: { groupID: void 0, topicIDList: void 0, MemberInfoFilter: ["NoUnreadSeqList"] }, keyMap: { request: { topicIDList: "TopicIdList" }, response: { TopicAndSelfInfo: "topicInfoList", TopicInfo: "topic", GroupID: "groupID", ShutUpTime: "muteTime", ShutUpAllFlag: "muteAllMembers", LastMsgTime: "lastMessageTime", MsgSeq: "readedSequence", LastMsgSeq: "sequence", NoUnreadSeqList: "excludedUnreadSequenceList" } } };
          }(e3)), this._configMap.set(As, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.GET_GROUP_MEMBER_LIST) }), body: { groupID: void 0, limit: 0, offset: void 0, next: void 0, memberRoleFilter: void 0, memberInfoFilter: ["Role", "NameCard", "ShutUpUntil", "JoinTime"], memberCustomFieldFilter: void 0 }, keyMap: { request: { memberCustomFieldFilter: "AppDefinedDataFilter_GroupMember" }, response: { AppMemberDefinedData: "memberCustomField", AppDefinedDataFilter_GroupMember: "memberCustomFieldFilter", MemberList: "members", ShutUpUntil: "muteUntil" } } };
          }(e3)), this._configMap.set(Rs, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.GROUP_AVCHATROOM, ".").concat(V.CMD.GET_AVCHATROOM_MEMBER_LIST) }), body: { groupID: void 0, offset: void 0, filter: void 0 }, keyMap: { request: { offset: "Timestamp", filter: "Mark" }, response: { NextTimestamp: "offset" } } };
          }(e3)), this._configMap.set(Ns, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.GET_GROUP_MEMBER_INFO) }), body: { groupID: void 0, userIDList: void 0, memberInfoFilter: void 0, memberCustomFieldFilter: void 0 }, keyMap: { request: { userIDList: "Member_List_Account", memberCustomFieldFilter: "AppDefinedDataFilter_GroupMember" }, response: { MemberList: "members", ShutUpUntil: "muteUntil", AppDefinedDataFilter_GroupMember: "memberCustomFieldFilter", AppMemberDefinedData: "memberCustomField" } } };
          }(e3)), this._configMap.set(Os, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.ADD_GROUP_MEMBER) }), body: { groupID: void 0, silence: void 0, userIDList: void 0 }, keyMap: { request: { userID: "Member_Account", userIDList: "MemberList" }, response: { MemberList: "members" } } };
          }(e3)), this._configMap.set(Gs, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.DELETE_GROUP_MEMBER) }), body: { groupID: void 0, userIDList: void 0, reason: void 0 }, keyMap: { request: { userIDList: "MemberToDel_Account" } } };
          }(e3)), this._configMap.set(Us, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.BAN_AVCHATROOM_MEMBER) }), body: { groupID: void 0, userIDList: void 0, duration: void 0, reason: "" }, keyMap: { request: { userIDList: "Members_Account", duration: "Duration", reason: "Description" } } };
          }(e3)), this._configMap.set(Ps, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.GROUP, ".").concat(V.CMD.MODIFY_GROUP_MEMBER_INFO) }), body: { groupID: void 0, topicID: void 0, userID: void 0, messageRemindType: void 0, nameCard: void 0, role: void 0, memberCustomField: void 0, muteTime: void 0 }, keyMap: { request: { userID: "Member_Account", memberCustomField: "AppMemberDefinedData", muteTime: "ShutUpTime", messageRemindType: "MsgFlag" } } };
          }(e3)), this._configMap.set(bs, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.GROUP_AVCHATROOM, ".").concat(V.CMD.MARK_AVCHATROOM_MEMBER_INFO) }), body: { groupID: void 0, operationType: 1, memberList: [] }, keyMap: { request: { operationType: "CommandType", memberList: "MemberList", markType: "Marks", userID: "Member_Account" }, response: { CommandType: "operationType", Marks: "markType", Member_Account: "userID" } } };
          }(e3)), this._configMap.set(xs, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.IM_OPEN_STAT, ".").concat(V.CMD.TIM_WEB_REPORT_V2) }), body: { header: {}, event: [], quality: [] }, keyMap: { request: { SDKType: "sdk_type", SDKVersion: "sdk_version", deviceType: "device_type", platform: "platform", instanceID: "instance_id", traceID: "trace_id", SDKAppID: "sdk_app_id", userID: "user_id", tinyID: "tiny_id", extension: "extension", timestamp: "timestamp", networkType: "network_type", eventType: "event_type", code: "error_code", message: "error_message", moreMessage: "more_message", duplicate: "duplicate", costTime: "cost_time", level: "level", qualityType: "quality_type", reportIndex: "report_index", wholePeriod: "whole_period", totalCount: "total_count", rttCount: "success_count_business", successRateOfRequest: "percent_business", countLessThan1Second: "success_count_business", percentOfCountLessThan1Second: "percent_business", countLessThan3Second: "success_count_platform", percentOfCountLessThan3Second: "percent_platform", successCountOfBusiness: "success_count_business", successRateOfBusiness: "percent_business", successCountOfPlatform: "success_count_platform", successRateOfPlatform: "percent_platform", successCountOfMessageReceived: "success_count_business", successRateOfMessageReceived: "percent_business", avgRTT: "average_value", avgDelay: "average_value", avgValue: "average_value", uiPlatform: "ui_platform" } } };
          }(o2)), this._configMap.set(Vs, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.HEARTBEAT, ".").concat(V.CMD.ALIVE) }), body: {} };
          }(e3)), this._configMap.set(Bs, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.IM_OPEN_PUSH, ".").concat(V.CMD.MESSAGE_PUSH) }), body: {}, keyMap: { response: { C2cMsgArray: "C2CMessageArray", GroupMsgArray: "groupMessageArray", GroupTips: "groupTips", C2cNotifyMsgArray: "C2CNotifyMessageArray", C2cMsgInfo: "C2CReadReceiptArray", ClientSeq: "clientSequence", MsgPriority: "priority", NoticeSeq: "noticeSequence", MsgContent: "content", MsgType: "type", MsgBody: "elements", ToGroupId: "to", Desc: "description", Ext: "extension", IsSyncMsg: "isSyncMessage", Flag: "needSync", NeedAck: "needAck", PendencyAdd_Account: "userID", ProfileImNick: "nick", PendencyType: "applicationType", C2CReadAllMsg: "readAllC2CMessage", IsNeedReadReceipt: "needReadReceipt", Status: "statusType" } } };
          }(e3)), this._configMap.set(Hs, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.IM_OPEN_PUSH, ".").concat(V.CMD.MULTI_MESSAGE_PUSH) }), body: {}, keyMap: { response: { GroupMsgArray: "groupMessageArray", GroupTips: "groupTips", ClientSeq: "clientSequence", MsgPriority: "priority", NoticeSeq: "noticeSequence", MsgContent: "content", MsgType: "type", MsgBody: "elements", ToGroupId: "to", Desc: "description", Ext: "extension", IsSyncMsg: "isSyncMessage", Flag: "needSync", NeedAck: "needAck", PendencyType: "applicationType" } } };
          }(e3)), this._configMap.set(Ks, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.OPEN_IM, ".").concat(V.CMD.MESSAGE_PUSH_ACK) }), body: { sessionData: void 0 }, keyMap: { request: { sessionData: "SessionData" } } };
          }(e3)), this._configMap.set(Ws, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.IM_OPEN_STATUS, ".").concat(V.CMD.STATUS_FORCE_OFFLINE) }), body: {}, keyMap: { response: { C2cNotifyMsgArray: "C2CNotifyMessageArray", NoticeSeq: "noticeSequence", KickoutMsgNotify: "kickoutMsgNotify", NewInstInfo: "newInstanceInfo" } } };
          }(e3)), this._configMap.set(js, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.IM_LONG_MESSAGE, ".").concat(V.CMD.DOWNLOAD_MERGER_MESSAGE) }), body: { downloadKey: "" }, keyMap: { response: { Data: "data", Desc: "description", Ext: "extension", Download_Flag: "downloadFlag", ThumbUUID: "thumbUUID", VideoUUID: "videoUUID" } } };
          }(e3)), this._configMap.set(Ys, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.IM_LONG_MESSAGE, ".").concat(V.CMD.UPLOAD_MERGER_MESSAGE) }), body: { messageList: [] }, keyMap: { request: { fromAccount: "From_Account", toAccount: "To_Account", msgTimeStamp: "MsgTimeStamp", msgSeq: "MsgSeq", msgRandom: "MsgRandom", msgBody: "MsgBody", type: "MsgType", content: "MsgContent", data: "Data", description: "Desc", extension: "Ext", sizeType: "Type", uuid: "UUID", url: "", imageUrl: "URL", fileUrl: "Url", remoteAudioUrl: "Url", remoteVideoUrl: "VideoUrl", thumbUUID: "ThumbUUID", videoUUID: "VideoUUID", videoUrl: "", downloadFlag: "Download_Flag", from: "From_Account", time: "MsgTimeStamp", messageRandom: "MsgRandom", messageSequence: "MsgSeq", elements: "MsgBody", clientSequence: "ClientSeq", payload: "MsgContent", messageList: "MsgList", messageNumber: "MsgNum", abstractList: "AbstractList", messageBody: "MsgBody" } } };
          }(e3)), this._configMap.set(ca, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.IM_OPEN_STATUS, ".").concat(V.CMD.SET_TOKEN) }), body: { tokenID: "", pushMsg: 0, sdkAppID: 0, businessID: "", deviceBrand: "", deviceToken: "", isTpns: 0, isWebUniapp: 0 }, keyMap: { request: { tokenID: "TokenID", pushMsg: "PushMsg", sdkAppID: "EnterVersion", businessID: "BusiID", deviceBrand: "InstType", deviceToken: "VarToken", isTpns: "IsTpns" } } };
          }(e3)), this._configMap.set(ua, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.IM_OPEN_STATUS, ".").concat(V.CMD.STAT_FOREGROUND) }), body: { isWebUniapp: 0 } };
          }(e3)), this._configMap.set(ia, function(e4) {
            return { head: t(t({}, e4), {}, { servcmd: "".concat(V.NAME.IM_OPEN_STATUS, ".").concat(V.CMD.STAT_BACKGROUND) }), body: { C2CUnread: 0, GroupUnread: 0, isWebUniapp: 0 }, keyMap: { request: { c2cUnreadCount: "C2cUnread", groupUnreadCount: "GrpUnread" } } };
          }(e3));
        } }, { key: "has", value: function(e3) {
          return this._configMap.has(e3);
        } }, { key: "get", value: function(e3) {
          return this._configMap.get(e3);
        } }, { key: "update", value: function() {
          this._fillConfigMap();
        } }, { key: "getKeyMap", value: function(e3) {
          return this.has(e3) ? this.get(e3).keyMap || {} : (xe.w("".concat(this._n, ".getKeyMap unknown protocolName:").concat(e3)), {});
        } }, { key: "getProtocolData", value: function(e3) {
          var t2 = e3.protocolName, n2 = e3.requestData, o2 = this.get(t2), s2 = null;
          if (n2) {
            var a2 = this._simpleDeepCopy(o2), r2 = this._updateService(n2, a2), i2 = r2.body, u2 = /* @__PURE__ */ Object.create(null);
            for (var c2 in i2)
              if (Object.prototype.hasOwnProperty.call(i2, c2)) {
                if (u2[c2] = i2[c2], void 0 === n2[c2])
                  continue;
                u2[c2] = n2[c2];
              }
            r2.body = u2, s2 = this._getUplinkData(r2);
          } else
            s2 = this._getUplinkData(o2);
          return s2;
        } }, { key: "_getUplinkData", value: function(e3) {
          var t2 = this._requestDataCleaner(e3), n2 = Pt(t2.head), o2 = Di(t2.body, this._getRequestKeyMap(n2));
          return t2.body = o2, t2;
        } }, { key: "_updateService", value: function(e3, t2) {
          var n2 = Pt(t2.head);
          if (this._isFromGroupRequest(t2)) {
            var o2 = e3.type, s2 = e3.groupID, a2 = void 0 === s2 ? void 0 : s2, r2 = e3.groupIDList, i2 = void 0 === r2 ? [] : r2;
            at(a2) && (a2 = i2[0] || ""), Tt({ type: o2, groupID: a2 }) && (t2.head.servcmd = "".concat(V.NAME.GROUP_COMMUNITY, ".").concat(n2));
          }
          return t2;
        } }, { key: "_isFromGroupRequest", value: function(e3) {
          return e3.head.servcmd.includes(V.NAME.GROUP) || e3.head.servcmd.includes(V.NAME.GROUP_ATTR);
        } }, { key: "_getRequestKeyMap", value: function(e3) {
          var n2 = this.getKeyMap(e3);
          return t(t({}, Ii.request), n2.request);
        } }, { key: "_requestDataCleaner", value: function(e3) {
          var t2 = Array.isArray(e3) ? [] : /* @__PURE__ */ Object.create(null);
          for (var o2 in e3)
            Object.prototype.hasOwnProperty.call(e3, o2) && lt(o2) && null !== e3[o2] && void 0 !== e3[o2] && ("object" !== n(e3[o2]) ? t2[o2] = e3[o2] : t2[o2] = this._requestDataCleaner.bind(this)(e3[o2]));
          return t2;
        } }, { key: "_simpleDeepCopy", value: function(e3) {
          for (var t2, n2 = Object.keys(e3), o2 = {}, s2 = 0, a2 = n2.length; s2 < a2; s2++)
            t2 = n2[s2], st(e3[t2]) ? o2[t2] = Array.from(e3[t2]) : nt(e3[t2]) ? o2[t2] = this._simpleDeepCopy(e3[t2]) : o2[t2] = e3[t2];
          return o2;
        } }]), e2;
      }(), Hi = [Ks], Ki = function() {
        function e2(t2) {
          o(this, e2), this._sessionModule = t2, this._n = "DownlinkHandler", this._eventHandlerMap = /* @__PURE__ */ new Map(), this._eventHandlerMap.set("C2CMessageArray", this._c2cMessageArrayHandler.bind(this)), this._eventHandlerMap.set("groupMessageArray", this._groupMessageArrayHandler.bind(this)), this._eventHandlerMap.set("groupTips", this._groupTipsHandler.bind(this)), this._eventHandlerMap.set("C2CNotifyMessageArray", this._C2CNotifyMessageArrayHandler.bind(this)), this._eventHandlerMap.set("C2CReadReceiptArray", this._C2CReadReceiptArrayHandler.bind(this)), this._eventHandlerMap.set("profileModify", this._profileHandler.bind(this)), this._eventHandlerMap.set("friendListMod", this._relationChainHandler.bind(this)), this._eventHandlerMap.set("recentContactMod", this._recentContactHandler.bind(this)), this._eventHandlerMap.set("readAllC2CMessage", this._allMessageReadHandler.bind(this)), this._eventHandlerMap.set("c2cMessageModified", this._c2cMessageModifiedHandler.bind(this)), this._eventHandlerMap.set("groupMessageModified", this._groupMessageModifiedHandler.bind(this)), this._eventHandlerMap.set("userStatusList", this._userStatusListHandler.bind(this)), this._eventHandlerMap.set("messageExtensionNotify", this._messageExtensionNotifyHandler.bind(this)), this._keys = m(this._eventHandlerMap.keys());
        }
        return a(e2, [{ key: "_c2cMessageArrayHandler", value: function(e3) {
          var t2 = this._sessionModule.getModule(Gn);
          if (t2) {
            if (e3.dataList.forEach(function(e4) {
              if (1 === e4.isSyncMessage) {
                var t3 = e4.from;
                e4.from = e4.to, e4.to = t3;
              }
            }), 1 === e3.needSync)
              this._sessionModule.getModule(Yn).startOnlineSync();
            t2.onNewC2CMessage({ dataList: e3.dataList, isInstantMessage: true });
          }
        } }, { key: "_c2cMessageModifiedHandler", value: function(e3) {
          var t2 = this._sessionModule.getModule(Gn);
          t2 && t2.onC2CMessageModified(e3);
        } }, { key: "_groupMessageArrayHandler", value: function(e3) {
          var t2 = this._sessionModule.getModule(Un);
          t2 && t2.onNewGroupMessage({ event: e3.event, dataList: e3.dataList, isInstantMessage: true });
        } }, { key: "_groupMessageModifiedHandler", value: function(e3) {
          var t2 = this._sessionModule.getModule(Un);
          t2 && t2.onGroupMessageModified(e3);
        } }, { key: "_groupTipsHandler", value: function(e3) {
          var t2 = this._sessionModule.getModule(Un);
          if (t2) {
            var n2 = e3.event, o2 = e3.dataList, s2 = e3.isInstantMessage, a2 = void 0 === s2 || s2, r2 = e3.isSyncingEnded;
            switch (n2) {
              case 4:
              case 6:
                t2.onNewGroupTips({ event: n2, dataList: o2 });
                break;
              case 5:
                for (var i2 = 0; i2 < o2.length; i2++)
                  if (st(o2[i2].elements.revokedInfos))
                    t2.onGroupMessageRevoked({ dataList: o2 });
                  else if (st(o2[i2].elements.groupMessageReadNotice))
                    t2.onGroupMessageReadNotice({ dataList: o2 });
                  else {
                    if (!st(o2[i2].elements.readReceiptList)) {
                      t2.onNewGroupSystemNotice({ dataList: o2, isInstantMessage: a2, isSyncingEnded: r2 });
                      break;
                    }
                    t2.onReadReceiptList({ dataList: o2 });
                  }
                break;
              case 12:
                this._sessionModule.getModule(Fn).onNewGroupAtTips({ dataList: o2 });
                break;
              default:
                xe.l("".concat(this._n, "._groupTipsHandler unknown event:").concat(n2, " dataList:"), o2);
            }
          }
        } }, { key: "_C2CNotifyMessageArrayHandler", value: function(e3) {
          var t2 = this, n2 = e3.dataList;
          if (st(n2)) {
            var o2 = this._sessionModule.getModule(Gn);
            n2.forEach(function(e4) {
              if (ot(e4)) {
                if (e4.hasOwnProperty("kickoutMsgNotify")) {
                  var s2 = e4.kickoutMsgNotify, a2 = s2.kickType, r2 = s2.newInstanceInfo, i2 = void 0 === r2 ? {} : r2;
                  1 === a2 ? t2._sessionModule.onMultipleAccountKickedOut(i2) : 2 === a2 ? t2._sessionModule.onMultipleDeviceKickedOut(i2) : 3 === a2 && t2._sessionModule.onRestApiKickedOut(i2);
                } else if (e4.hasOwnProperty("c2cMessageRevokedNotify"))
                  o2 && o2.onC2CMessageRevoked({ dataList: n2 });
                else if (e4.hasOwnProperty("c2cMessageReadReceipt"))
                  o2 && o2.onC2CMessageReadReceipt({ dataList: n2 });
                else if (e4.hasOwnProperty("c2cMessageReadNotice"))
                  o2 && o2.onC2CMessageReadNotice({ dataList: n2 });
                else if (e4.hasOwnProperty("muteNotificationsSync")) {
                  t2._sessionModule.getModule(Fn).onC2CMessageRemindTypeSynced({ dataList: n2 });
                }
              }
            });
          }
        } }, { key: "_C2CReadReceiptArrayHandler", value: function(e3) {
          this._sessionModule.getModule(Gn).onReadReceiptList(e3);
        } }, { key: "_profileHandler", value: function(e3) {
          this._sessionModule.getModule(On).onProfileModified({ dataList: e3.dataList });
          var t2 = this._sessionModule.getModule(Pn);
          t2 && t2.onFriendProfileModified({ dataList: e3.dataList });
        } }, { key: "_relationChainHandler", value: function(e3) {
          this._sessionModule.getModule(On).onRelationChainModified({ dataList: e3.dataList });
          var t2 = this._sessionModule.getModule(Pn);
          t2 && t2.onRelationChainModified({ dataList: e3.dataList });
        } }, { key: "_recentContactHandler", value: function(e3) {
          var t2 = e3.dataList;
          if (st(t2)) {
            var n2 = this._sessionModule.getModule(Fn);
            n2 && t2.forEach(function(e4) {
              var t3 = e4.pushType;
              if (1 === t3) {
                var o2 = e4.recentContactDeleteItem;
                n2.onConversationDeleted(o2.recentContactList);
              } else if (2 === t3) {
                var s2 = e4.recentContactTopItem;
                n2.onConversationPinned(s2.recentContactList);
              } else if (3 === t3) {
                var a2 = e4.recentContactTopItem;
                n2.onConversationUnpinned(a2.recentContactList);
              } else if (4 === t3) {
                var r2 = e4.recentContactMarkContact;
                n2.onConversationMarkUpdated(r2.recentContactMarkContactItem);
              } else if (5 === t3) {
                var i2 = e4.recentContactCreateContactGroup;
                n2.onConversationGroupCreated(i2.msgContactGroupContactItem);
              } else if (6 === t3) {
                var u2 = e4.recentContactDelContactGroup;
                n2.onConversationGroupDeleted(u2.msgGroupItem);
              } else if (7 === t3) {
                var c2 = e4.recentContactUpdateContactGroup, l2 = c2.updateType, p2 = c2.msgUpdateGroup, d2 = c2.msgUpdateContact;
                if (1 === l2) {
                  var g2 = p2.updateGroupType;
                  1 === g2 ? n2.onConversationGroupNameUpdated(p2) : 2 === g2 && n2.onConversationInGroupUpdated(p2);
                } else
                  2 === l2 && n2.onConversationAddedToOrDeletedFromGroup(d2);
              }
            });
          }
        } }, { key: "_allMessageReadHandler", value: function(e3) {
          var t2 = e3.dataList, n2 = this._sessionModule.getModule(Fn);
          n2 && n2.onPushedAllMessageRead(t2);
        } }, { key: "_userStatusListHandler", value: function(e3) {
          this._sessionModule.getModule(On).onUserStatusUpdated(e3);
        } }, { key: "_messageExtensionNotifyHandler", value: function(e3) {
          this._sessionModule.getModule(Nn).onMessageExtensionNotify(e3);
        } }, { key: "onMessage", value: function(e3) {
          var t2 = this, n2 = e3.body;
          if (this._filterMessageFromIMOpenPush(e3)) {
            var o2 = n2.eventArray, s2 = n2.isInstantMessage, a2 = n2.isSyncingEnded, r2 = n2.needSync;
            if (st(o2))
              for (var i2 = null, u2 = null, c2 = 0, l2 = 0, p2 = o2.length; l2 < p2; l2++) {
                c2 = (i2 = o2[l2]).event;
                var d2 = Object.keys(i2).find(function(e4) {
                  return -1 !== t2._keys.indexOf(e4);
                });
                d2 ? (u2 = 14 === c2 ? { readAllC2CMessage: i2[d2], groupMessageReadInfoList: i2.groupMessageReadNotice || [] } : 16 === c2 ? { userID: i2.userID, readReceiptList: i2[d2] } : i2[d2], this._eventHandlerMap.get(d2)({ event: c2, dataList: u2, isInstantMessage: s2, isSyncingEnded: a2, needSync: r2 })) : xe.l("".concat(this._n, ".onMessage unknown eventItem:").concat(i2));
              }
          }
        } }, { key: "_filterMessageFromIMOpenPush", value: function(e3) {
          var t2 = e3.head, n2 = e3.body, o2 = t2.servcmd, s2 = false;
          if (at(o2) || (s2 = o2.includes(V.NAME.IM_CONFIG_MANAGER) || o2.includes(V.NAME.OVERLOAD_PUSH) || o2.includes(V.NAME.STAT_SERVICE)), !s2)
            return true;
          if (o2.includes(V.CMD.PUSHED_CLOUD_CONTROL_CONFIG))
            this._sessionModule.getModule(Xn).onPushedCloudControlConfig(n2);
          else if (o2.includes(V.CMD.PUSHED_COMMERCIAL_CONFIG)) {
            this._sessionModule.getModule(eo).onPushedConfig(n2);
          } else if (o2.includes(V.CMD.OVERLOAD_NOTIFY))
            this._sessionModule.onPushedServerOverload(n2);
          else if (o2.includes(V.CMD.KICK_OTHER)) {
            var a2 = Date.now();
            this._sessionModule.reLoginOnKickOther();
            var r2 = new ka("kickOther"), i2 = this._sessionModule.getModule(An).getLastWsHelloTs(), u2 = a2 - i2;
            r2.setMessage("last wshello time:".concat(i2, " diff:").concat(u2, "ms")).setNetworkType(this._sessionModule.getNetworkType()).end();
          }
          return false;
        } }]), e2;
      }(), Wi = [{ cmd: V.CMD.GET_GROUP_INFO, interval: 1, count: 20 }, { cmd: V.CMD.GET_AVCHATROOM_MEMBER_LIST, interval: 3, count: 1 }, { cmd: V.CMD.GET_GROUP_APPLICATION, interval: 1, count: 15 }, { cmd: V.CMD.GET_TOPIC_LIST, interval: 1, count: 10 }, { cmd: V.CMD.SET_GROUP_ATTRIBUTES, interval: 5, count: 10 }, { cmd: V.CMD.MODIFY_GROUP_ATTRIBUTES, interval: 5, count: 10 }, { cmd: V.CMD.DELETE_GROUP_ATTRIBUTES, interval: 5, count: 10 }, { cmd: V.CMD.CLEAR_GROUP_ATTRIBUTES, interval: 5, count: 10 }, { cmd: V.CMD.GET_GROUP_ATTRIBUTES, interval: 5, count: 20 }, { cmd: V.CMD.UPDATE_GROUP_COUNTER, interval: 5, count: 20 }, { cmd: V.CMD.GET_GROUP_COUNTER, interval: 5, count: 20 }, { cmd: V.CMD.SET_ALL_MESSAGE_READ, interval: 1, count: 1 }, { cmd: V.CMD.GET_USER_STATUS, interval: 5, count: 20 }, { cmd: V.CMD.SUBSCRIBE_USER_STATUS, interval: 5, count: 20 }, { cmd: V.CMD.UNSUBSCRIBE_USER_STATUS, interval: 5, count: 20 }], Yi = function(e2) {
        i(s2, e2);
        var n2 = f(s2);
        function s2(e3) {
          var t2;
          return o(this, s2), (t2 = n2.call(this, e3))._n = "SessionModule", t2._platform = t2.getPlatform(), t2._protocolHandler = new Bi(_(t2)), t2._messageDispatcher = new Ki(_(t2)), t2._commandFrequencyLimitMap = /* @__PURE__ */ new Map(), t2._commandRequestInfoMap = /* @__PURE__ */ new Map(), t2._serverOverloadInfoMap = /* @__PURE__ */ new Map(), t2._init(), t2.getInnerEmitterInstance().on($a, t2._onCloudConfigUpdated, _(t2)), t2;
        }
        return a(s2, [{ key: "_init", value: function() {
          this._updateCommandFrequencyLimitMap(Wi);
        } }, { key: "_onCloudConfigUpdated", value: function() {
          var e3 = this.getCloudConfig("cmd_frequency_limit");
          at(e3) || (e3 = JSON.parse(e3), this._updateCommandFrequencyLimitMap(e3));
        } }, { key: "_updateCommandFrequencyLimitMap", value: function(e3) {
          var t2 = this;
          e3.forEach(function(e4) {
            t2._commandFrequencyLimitMap.set(e4.cmd, { interval: e4.interval, count: e4.count });
          });
        } }, { key: "updateProtocolConfig", value: function() {
          this._protocolHandler.update();
        } }, { key: "request", value: function(e3) {
          xe.d("".concat(this._n, ".request options:"), e3);
          var t2 = e3.protocolName, n3 = e3.tjgID;
          if (!this._protocolHandler.has(t2))
            return xe.w("".concat(this._n, ".request unknown protocol:").concat(t2)), Ja({ code: da.CANNOT_FIND_PROTOCOL });
          var o2 = this.getProtocolData(e3), s3 = o2.head.servcmd;
          if (this._isFrequencyOverLimit(s3))
            return Ja({ code: da.OVER_FREQUENCY_LIMIT });
          if (this._isServerOverload(s3))
            return Ja({ code: da.OPEN_SERVICE_OVERLOAD_ERROR });
          jt(n3) || (o2.head.tjgID = n3);
          var a2 = this.getModule(zn);
          return Hi.includes(t2) ? a2.simplySend(o2) : a2.send(o2);
        } }, { key: "getKeyMap", value: function(e3) {
          return this._protocolHandler.getKeyMap(e3);
        } }, { key: "genCommonHead", value: function() {
          var e3 = this.getModule(qn);
          return { ver: "v4", platform: this._platform, websdkappid: O, websdkversion: N, a2: e3.getA2Key() || void 0, tinyid: e3.getTinyID() || void 0, status_instid: e3.getStatusInstanceID(), sdkappid: e3.getSDKAppID(), contenttype: e3.getContentType(), reqtime: 0, identifier: e3.getA2Key() ? void 0 : e3.getUserID(), usersig: e3.getA2Key() ? void 0 : e3.getUserSig(), sdkability: 192371, tjgID: "" };
        } }, { key: "genCosSpecifiedHead", value: function() {
          var e3 = this.getModule(qn);
          return { ver: "v4", platform: this._platform, websdkappid: O, websdkversion: N, sdkappid: e3.getSDKAppID(), contenttype: e3.getContentType(), reqtime: 0, identifier: e3.getUserID(), usersig: e3.getUserSig(), status_instid: e3.getStatusInstanceID(), sdkability: 192371 };
        } }, { key: "genSSOReportHead", value: function() {
          var e3 = this.getModule(qn);
          return { ver: "v4", platform: this._platform, websdkappid: O, websdkversion: N, sdkappid: e3.getSDKAppID(), contenttype: "", reqtime: 0, identifier: "", usersig: "", status_instid: e3.getStatusInstanceID(), sdkability: 192371 };
        } }, { key: "getProtocolData", value: function(e3) {
          return this._protocolHandler.getProtocolData(e3);
        } }, { key: "trans", value: function(e3) {
          var n3 = e3.servcmd, o2 = e3.data, s3 = { head: t(t({}, this.genCommonHead()), {}, { servcmd: n3 }), body: o2 };
          return this.getModule(zn).send(s3);
        } }, { key: "sendComboMessage", value: function(e3) {
          var n3 = e3.servcmd, o2 = e3.data, s3 = { head: t(t({}, this.genCommonHead()), {}, { servcmd: n3 }), body: o2 };
          return this.getModule(zn).send(s3);
        } }, { key: "onErrorCodeNotZero", value: function(e3) {
          var t2 = e3.errorCode;
          if (t2 === da.HELLO_ANSWER_KICKED_OUT) {
            var n3 = e3.kickType, o2 = e3.newInstanceInfo, s3 = void 0 === o2 ? {} : o2;
            1 === n3 ? this.onMultipleAccountKickedOut(s3) : 2 === n3 ? this.onMultipleDeviceKickedOut(s3) : 3 === n3 && this.onRestApiKickedOut(s3);
          }
          t2 !== da.MESSAGE_A2KEY_EXPIRED && t2 !== da.ACCOUNT_A2KEY_EXPIRED || (this._onUserSigExpired(), this.getModule(zn).reConnect());
        } }, { key: "onMessage", value: function(e3) {
          var t2 = e3.body, n3 = t2.needAck, o2 = void 0 === n3 ? 0 : n3, s3 = t2.sessionData;
          1 === o2 && this._sendACK(s3), this._messageDispatcher.onMessage(e3);
        } }, { key: "onReconnected", value: function() {
          this._reLoginOnReconnected();
        } }, { key: "reLoginOnKickOther", value: function() {
          xe.l("".concat(this._n, ".reLoginOnKickOther")), this._reLogin();
        } }, { key: "_reLoginOnReconnected", value: function() {
          xe.l("".concat(this._n, "._reLoginOnReconnected")), this._reLogin();
        } }, { key: "_reLogin", value: function() {
          var e3 = this;
          if (this.isLoggedIn()) {
            var t2 = 0, n3 = this.getModule(to);
            n3.canIUseOfflinePush() && (t2 = n3.getUniAppPlatform()), this.request({ protocolName: io, requestData: { isWebUniapp: t2 } }).then(function(t3) {
              var n4 = t3.data.instanceID;
              e3.getModule(qn).setStatusInstanceID(n4), xe.l("".concat(e3._n, "._reLogin ok.")), e3.getModule(Fn).syncConversationList().then(function() {
                xe.l("".concat(e3._n, "._reLogin, sync conversation list ok.")), e3.getModule(Zn).start();
              }), e3.getModule(Un).updateLocalMainSequenceOnReconnected();
              var o2 = e3.getModule(wn);
              o2.resetGetTopicTime(), o2.getTopicListOnReconnected();
            });
          }
        } }, { key: "onMultipleAccountKickedOut", value: function(e3) {
          this.getModule(An).onMultipleAccountKickedOut(e3);
        } }, { key: "onMultipleDeviceKickedOut", value: function(e3) {
          this.getModule(An).onMultipleDeviceKickedOut(e3);
        } }, { key: "_onUserSigExpired", value: function() {
          this.getModule(An).onUserSigExpired();
        } }, { key: "onRestApiKickedOut", value: function(e3) {
          this.getModule(An).onRestApiKickedOut(e3);
        } }, { key: "_sendACK", value: function(e3) {
          this.request({ protocolName: Ks, requestData: { sessionData: e3 } });
        } }, { key: "_isFrequencyOverLimit", value: function(e3) {
          var t2 = e3.split(".")[1];
          if (!this._commandFrequencyLimitMap.has(t2))
            return false;
          if (!this._commandRequestInfoMap.has(t2))
            return this._commandRequestInfoMap.set(t2, { startTime: Date.now(), requestCount: 1 }), false;
          var n3 = this._commandFrequencyLimitMap.get(t2), o2 = n3.count, s3 = n3.interval, a2 = this._commandRequestInfoMap.get(t2), r2 = a2.startTime, i2 = a2.requestCount;
          if (Date.now() - r2 > 1e3 * s3)
            return this._commandRequestInfoMap.set(t2, { startTime: Date.now(), requestCount: 1 }), false;
          i2 += 1, this._commandRequestInfoMap.set(t2, { startTime: r2, requestCount: i2 });
          var u2 = false;
          return i2 > o2 && (u2 = true), u2;
        } }, { key: "_isServerOverload", value: function(e3) {
          if (!this._serverOverloadInfoMap.has(e3))
            return false;
          var t2 = this._serverOverloadInfoMap.get(e3), n3 = t2.overloadTime, o2 = t2.waitingTime, s3 = false;
          return Date.now() - n3 <= 1e3 * o2 ? s3 = true : (this._serverOverloadInfoMap.delete(e3), s3 = false), s3;
        } }, { key: "onPushedServerOverload", value: function(e3) {
          var t2 = e3.overloadCommand, n3 = e3.waitingTime;
          this._serverOverloadInfoMap.set(t2, { overloadTime: Date.now(), waitingTime: n3 }), xe.w("".concat(this._n, ".onPushedServerOverload waitingTime:").concat(n3, "s"));
        } }, { key: "reset", value: function() {
          xe.l("".concat(this._n, ".reset")), this._updateCommandFrequencyLimitMap(Wi), this._commandRequestInfoMap.clear(), this._serverOverloadInfoMap.clear();
        } }]), s2;
      }(ro), ji = function(e2) {
        i(n2, e2);
        var t2 = f(n2);
        function n2(e3) {
          var s2;
          return o(this, n2), (s2 = t2.call(this, e3))._n = "MessageLossDetectionModule", s2._maybeLostSequencesMap = /* @__PURE__ */ new Map(), s2._firstRoundRet = [], s2;
        }
        return a(n2, [{ key: "onMessageMaybeLost", value: function(e3, t3, n3) {
          this._maybeLostSequencesMap.has(e3) || this._maybeLostSequencesMap.set(e3, []);
          for (var o2 = this._maybeLostSequencesMap.get(e3), s2 = 0; s2 < n3; s2++)
            -1 === o2.indexOf(t3 + s2) && o2.push(t3 + s2);
        } }, { key: "detectFirstRound", value: function(e3, t3) {
          var n3 = this._maybeLostSequencesMap.get(e3);
          if (!jt(n3) && !jt(t3)) {
            var o2 = n3.filter(function(e4) {
              return -1 === t3.indexOf(e4);
            });
            0 === o2.length ? xe.i("".concat(this._n, ".detectFirstRound no message loss. conversationID:").concat(e3)) : this._firstRoundRet = this._firstRoundRet.concat(o2), n3.length = 0;
          }
        } }, { key: "detectSecondRound", value: function(e3, t3) {
          if (!jt(this._firstRoundRet) && !jt(t3)) {
            var n3 = this._firstRoundRet.filter(function(e4) {
              return -1 === t3.indexOf(e4);
            });
            this._firstRoundRet.length = 0;
            var o2, s2 = n3.length;
            if (0 !== s2)
              s2 <= 5 ? o2 = e3 + "-" + n3.join("-") : (n3.sort(function(e4, t4) {
                return e4 - t4;
              }), o2 = e3 + " start:" + n3[0] + " end:" + n3[s2 - 1] + " count:" + s2), new ka("messageLoss").setMessage(o2).setNetworkType(this.getNetworkType()).setLevel("warning").end(), xe.i("".concat(this._n, ".detectSecondRound message loss detected. conversationID:").concat(e3, " lostSequences:").concat(n3));
          }
        } }, { key: "reset", value: function() {
          xe.l("".concat(this._n, ".reset")), this._maybeLostSequencesMap.clear(), this._firstRoundRet.length = 0;
        } }]), n2;
      }(ro), zi = function(e2) {
        i(n2, e2);
        var t2 = f(n2);
        function n2(e3) {
          var s2;
          return o(this, n2), (s2 = t2.call(this, e3))._n = "CloudControlModule", s2._cloudConfig = /* @__PURE__ */ new Map(), s2._expiredTime = 0, s2._version = 0, s2._isFetching = false, s2;
        }
        return a(n2, [{ key: "getCloudConfig", value: function(e3) {
          return at(e3) ? this._cloudConfig : this._cloudConfig.has(e3) ? this._cloudConfig.get(e3) : void 0;
        } }, { key: "_canFetchConfig", value: function() {
          return this.isLoggedIn() && !this._isFetching && Date.now() >= this._expiredTime;
        } }, { key: "fetchConfig", value: function() {
          var e3 = this, t3 = this._canFetchConfig();
          if (xe.l("".concat(this._n, ".fetchConfig canFetchConfig:").concat(t3)), t3) {
            var n3 = new ka("fetchCloudControlConfig"), o2 = this.getModule(qn).getSDKAppID();
            this._isFetching = true, this.request({ protocolName: zs, requestData: { SDKAppID: o2, version: this._version } }).then(function(t4) {
              e3._isFetching = false, n3.setMessage("version:".concat(e3._version, " newVersion:").concat(t4.data.version, " config:").concat(t4.data.cloudControlConfig)).setNetworkType(e3.getNetworkType()).end(), xe.l("".concat(e3._n, ".fetchConfig ok")), e3._parseCloudControlConfig(t4.data);
            }).catch(function(t4) {
              e3._isFetching = false, e3.probeNetwork().then(function(e4) {
                var o3 = v(e4, 2), s2 = o3[0], a2 = o3[1];
                n3.setError(t4, s2, a2).end();
              }), xe.l("".concat(e3._n, ".fetchConfig failed. error:"), t4), e3._setExpiredTimeOnResponseError(12e4);
            });
          }
        } }, { key: "onPushedCloudControlConfig", value: function(e3) {
          xe.l("".concat(this._n, ".onPushedCloudControlConfig")), new ka("pushedCloudControlConfig").setNetworkType(this.getNetworkType()).setMessage("newVersion:".concat(e3.version, " config:").concat(e3.cloudControlConfig)).end(), this._parseCloudControlConfig(e3);
        } }, { key: "onCheckTimer", value: function(e3) {
          this._canFetchConfig() && this.fetchConfig();
        } }, { key: "_parseCloudControlConfig", value: function(e3) {
          var t3 = this, n3 = "".concat(this._n, "._parseCloudControlConfig"), o2 = e3.errorCode, s2 = e3.errorMessage, a2 = e3.cloudControlConfig, r2 = e3.version, i2 = e3.expiredTime;
          if (0 === o2) {
            if (this._version !== r2) {
              var u2 = null;
              try {
                u2 = JSON.parse(a2);
              } catch (c2) {
                this.isPrivateNetWork() || xe.e("".concat(n3, " JSON parse error. cloudControlConfig:"), a2);
              }
              u2 && (this._cloudConfig.clear(), Object.keys(u2).forEach(function(e4) {
                t3._cloudConfig.set(e4, u2[e4]);
              }), this._version = r2, this.emitInnerEvent($a));
            }
            this._expiredTime = Date.now() + 1e3 * i2;
          } else
            at(o2) ? (xe.l("".concat(n3, " failed. Invalid message format:"), e3), this._setExpiredTimeOnResponseError(36e5)) : (xe.e("".concat(n3, " errorCode:").concat(o2, " errorMessage:").concat(s2)), this._setExpiredTimeOnResponseError(12e4));
        } }, { key: "_setExpiredTimeOnResponseError", value: function(e3) {
          this._expiredTime = Date.now() + e3;
        } }, { key: "reset", value: function() {
          xe.l("".concat(this._n, ".reset")), this._cloudConfig.clear(), this._expiredTime = 0, this._version = 0, this._isFetching = false;
        } }]), n2;
      }(ro), Ji = function(e2) {
        i(n2, e2);
        var t2 = f(n2);
        function n2(e3) {
          var s2;
          return o(this, n2), (s2 = t2.call(this, e3))._n = "RecoverMessageModule", s2.PULL_LIMIT_COUNT = 15, s2;
        }
        return a(n2, [{ key: "start", value: function() {
          this._recoverGroupChat(), this._recoverC2CChat();
        } }, { key: "_recoverGroupChat", value: function() {
          var e3, t3, n3 = this, o2 = this._getLocalConversationList().filter(function(e4) {
            return e4.type === S.CONV_GROUP && e4.groupProfile.type !== S.GRP_AVCHATROOM;
          }), s2 = this.getModule(Fn), a2 = 0, r2 = 0, i2 = 0;
          o2.forEach(function(o3) {
            var u2 = o3.conversationID, c2 = o3.lastMessage;
            t3 = u2.replace(S.CONV_GROUP, ""), e3 = s2.getLocalLastMessage(u2), c2 && 0 !== c2.lastSequence && e3 ? (r2 = c2.lastSequence, a2 = e3.sequence, i2 = r2 - a2, a2 > 0 && i2 >= 1 && i2 < 300 ? n3._recoverGroupMessage({ groupID: t3, localLastMessageSequence: a2, remoteLastMessageSequence: r2 }) : n3._getGroupNotify(t3)) : n3._getGroupNotify(t3);
          });
        } }, { key: "_recoverC2CChat", value: function() {
          var e3, t3 = this, n3 = this._getLocalConversationList().filter(function(e4) {
            return e4.type === S.CONV_C2C;
          }), o2 = this.getModule(Fn), s2 = 0, a2 = 0, r2 = 0, i2 = [Promise.resolve()];
          n3.forEach(function(n4) {
            var u2 = n4.conversationID, c2 = n4.lastMessage;
            e3 = o2.getLocalLastMessage(u2), c2 && 0 !== c2.lastTime && e3 && (a2 = c2.lastTime, s2 = e3.time, r2 = a2 - s2, s2 > 0 && r2 >= 1 && r2 <= 600 && i2.push(t3._recoverC2CMessage({ conversationID: u2, localLastMessageTime: s2, remoteLastMessageTime: a2 })));
          }), Promise.all(i2).then(function() {
            xe.l("".concat(t3._n, "._recoverC2CChat all promise fulfilled, start to sync unread messages")), t3.getModule(Yn).startSyncOnReconnected();
          });
        } }, { key: "_getLocalConversationList", value: function() {
          return this.getModule(Fn).getLocalConversationList();
        } }, { key: "_recoverGroupMessage", value: function(e3) {
          var t3 = this, n3 = "".concat(this._n, "._recoverGroupMessage");
          xe.l("".concat(n3, " options:"), e3);
          var o2 = e3.groupID, s2 = e3.localLastMessageSequence, a2 = e3.remoteLastMessageSequence;
          this._getGroupRomaingMessage({ groupID: o2, sequence: s2 }).then(function(e4) {
            var s3 = e4.data, r2 = s3.complete, i2 = s3.messageList;
            if (!at(i2)) {
              var u2 = i2[0].sequence;
              xe.l("".concat(n3, " pkgLastMessageSequence:").concat(u2, " complete:").concat(r2)), u2 < a2 && 2 !== r2 && t3._recoverGroupMessage({ groupID: o2, localLastMessageSequence: u2, remoteLastMessageSequence: a2 }), new ka("recoverMessage").setNetworkType(t3.getNetworkType()).setMessage("groupID:".concat(o2, " complete:").concat(r2, " messageList length:").concat(i2.length)).end();
              var c2 = t3.getModule(Un);
              i2.length > 1 && i2.sort(function(e5, t4) {
                return e5.sequence - t4.sequence;
              });
              for (var l2 = 0; l2 < i2.length; l2++) {
                var p2 = i2[l2];
                p2.from !== S.CONV_SYSTEM ? c2.onNewGroupMessage({ dataList: [p2], isInstantMessage: false, updateUnreadCount: false }) : c2.onNewGroupTips({ event: p2.event, dataList: [p2] });
              }
              t3._getGroupNotify(o2);
            }
          });
        } }, { key: "_getGroupNotify", value: function(e3) {
          this.getModule(Un).getGroupNotify(e3);
        } }, { key: "_getGroupRomaingMessage", value: function(e3) {
          var t3 = e3.groupID, n3 = e3.sequence;
          return this.request({ protocolName: is, requestData: { groupID: t3, count: this.PULL_LIMIT_COUNT, sequence: n3 + this.PULL_LIMIT_COUNT - 1 } });
        } }, { key: "_recoverC2CMessage", value: function(e3) {
          var t3 = this, n3 = "".concat(this._n, "._recoverC2CMessage");
          xe.l("".concat(this._n, "._recoverC2CMessage options:"), e3);
          var o2 = e3.conversationID, s2 = e3.localLastMessageTime, a2 = e3.remoteLastMessageTime;
          return this._getC2CRoamingMessage({ conversationID: o2, time: s2 }).then(function(e4) {
            var s3 = e4.data, r2 = s3.complete, i2 = s3.messageList;
            if (!at(i2)) {
              var u2 = i2.length;
              new ka("recoverMessage").setNetworkType(t3.getNetworkType()).setMessage("".concat(o2, " complete:").concat(r2, " messageList length:").concat(u2)).end(), t3.getModule(Gn).onNewC2CMessage({ dataList: i2, isInstantMessage: true });
              var c2 = i2[u2 - 1].time;
              if (xe.l("".concat(n3, " pkgLastMessageTime:").concat(c2, " complete:").concat(r2)), c2 < a2 && 1 !== r2)
                return t3._recoverC2CMessage({ conversationID: o2, localLastMessageTime: c2, remoteLastMessageTime: a2 });
            }
          });
        } }, { key: "_getC2CRoamingMessage", value: function(e3) {
          var t3 = e3.conversationID, n3 = e3.time;
          return this.request({ protocolName: Eo, requestData: { peerAccount: t3.replace(S.CONV_C2C, ""), count: this.PULL_LIMIT_COUNT + 1, lastMessageTime: n3, direction: 1 } });
        } }, { key: "reset", value: function() {
          xe.l("".concat(this._n, ".reset"));
        } }]), n2;
      }(ro), Xi = function() {
        function e2() {
          o(this, e2), this._n = "AvgE2EDelay", this._e2eDelayArray = [];
        }
        return a(e2, [{ key: "addMessageDelay", value: function(e3) {
          var t2 = be() - e3;
          t2 >= 0 && this._e2eDelayArray.push(t2);
        } }, { key: "_calcAvg", value: function(e3, t2) {
          if (0 === t2)
            return 0;
          var n2 = 0;
          return e3.forEach(function(e4) {
            n2 += e4;
          }), bt(n2 / t2, 1);
        } }, { key: "_calcCountWithLimit", value: function(e3) {
          var t2 = e3.e2eDelayArray, n2 = e3.min, o2 = e3.max;
          return t2.filter(function(e4) {
            return n2 <= e4 && e4 < o2;
          }).length;
        } }, { key: "_calcPercent", value: function(e3, t2) {
          var n2 = bt(e3 / t2 * 100, 2);
          return n2 > 100 && (n2 = 100), n2;
        } }, { key: "_checkE2EDelayException", value: function(e3, t2) {
          var n2 = e3.filter(function(e4) {
            return e4 > t2;
          });
          if (n2.length > 0) {
            var o2 = n2.length, s2 = Math.min.apply(Math, m(n2)), a2 = Math.max.apply(Math, m(n2)), r2 = this._calcAvg(n2, o2), i2 = bt(o2 / e3.length * 100, 2);
            if (i2 > 50)
              new ka("messageE2EDelayException").setMessage("count:".concat(o2, " min:").concat(s2, " max:").concat(a2, " avg:").concat(r2, " percent:").concat(i2)).setLevel("warning").end();
          }
        } }, { key: "getStatResult", value: function() {
          var e3 = this._e2eDelayArray.length;
          if (0 === e3)
            return null;
          var t2 = m(this._e2eDelayArray), n2 = this._calcCountWithLimit({ e2eDelayArray: t2, min: 0, max: 1 }), o2 = this._calcCountWithLimit({ e2eDelayArray: t2, min: 1, max: 3 }), s2 = this._calcPercent(n2, e3), a2 = this._calcPercent(o2, e3), r2 = this._calcAvg(t2, e3);
          return this._checkE2EDelayException(t2, 3), t2.length = 0, this.reset(), { totalCount: e3, countLessThan1Second: n2, percentOfCountLessThan1Second: s2, countLessThan3Second: o2, percentOfCountLessThan3Second: a2, avgDelay: r2 };
        } }, { key: "reset", value: function() {
          this._e2eDelayArray.length = 0;
        } }]), e2;
      }(), Qi = function() {
        function e2() {
          o(this, e2), this._n = "AvgRTT", this._requestCount = 0, this._rttArray = [];
        }
        return a(e2, [{ key: "addRequestCount", value: function() {
          this._requestCount += 1;
        } }, { key: "addRTT", value: function(e3) {
          this._rttArray.push(e3);
        } }, { key: "_calcTotalCount", value: function() {
          return this._requestCount;
        } }, { key: "_calcRTTCount", value: function(e3) {
          return e3.length;
        } }, { key: "_calcSuccessRateOfRequest", value: function(e3, t2) {
          if (0 === t2)
            return 0;
          var n2 = bt(e3 / t2 * 100, 2);
          return n2 > 100 && (n2 = 100), n2;
        } }, { key: "_calcAvg", value: function(e3, t2) {
          if (0 === t2)
            return 0;
          var n2 = 0;
          return e3.forEach(function(e4) {
            n2 += e4;
          }), parseInt(n2 / t2);
        } }, { key: "_calcMax", value: function() {
          return Math.max.apply(Math, m(this._rttArray));
        } }, { key: "_calcMin", value: function() {
          return Math.min.apply(Math, m(this._rttArray));
        } }, { key: "getStatResult", value: function() {
          var e3 = this._calcTotalCount(), t2 = m(this._rttArray);
          if (0 === e3)
            return null;
          var n2 = this._calcRTTCount(t2), o2 = this._calcSuccessRateOfRequest(n2, e3), s2 = this._calcAvg(t2, n2);
          return xe.l("".concat(this._n, ".getStatResult max:").concat(this._calcMax(), " min:").concat(this._calcMin(), " avg:").concat(s2)), this.reset(), { totalCount: e3, rttCount: n2, successRateOfRequest: o2, avgRTT: s2 };
        } }, { key: "reset", value: function() {
          this._requestCount = 0, this._rttArray.length = 0;
        } }]), e2;
      }(), Zi = function() {
        function e2() {
          o(this, e2), this._map = /* @__PURE__ */ new Map();
        }
        return a(e2, [{ key: "initMap", value: function(e3) {
          var t2 = this;
          e3.forEach(function(e4) {
            t2._map.set(e4, { totalCount: 0, successCount: 0, failedCountOfUserSide: 0, costArray: [], fileSizeArray: [] });
          });
        } }, { key: "addTotalCount", value: function(e3) {
          return !(at(e3) || !this._map.has(e3)) && (this._map.get(e3).totalCount += 1, true);
        } }, { key: "addSuccessCount", value: function(e3) {
          return !(at(e3) || !this._map.has(e3)) && (this._map.get(e3).successCount += 1, true);
        } }, { key: "addFailedCountOfUserSide", value: function(e3) {
          return !(at(e3) || !this._map.has(e3)) && (this._map.get(e3).failedCountOfUserSide += 1, true);
        } }, { key: "addCost", value: function(e3, t2) {
          return !(at(e3) || !this._map.has(e3)) && (this._map.get(e3).costArray.push(t2), true);
        } }, { key: "addFileSize", value: function(e3, t2) {
          return !(at(e3) || !this._map.has(e3)) && (this._map.get(e3).fileSizeArray.push(t2), true);
        } }, { key: "_calcSuccessRateOfBusiness", value: function(e3) {
          if (at(e3) || !this._map.has(e3))
            return -1;
          var t2 = this._map.get(e3), n2 = bt(t2.successCount / t2.totalCount * 100, 2);
          return n2 > 100 && (n2 = 100), n2;
        } }, { key: "_calcSuccessRateOfPlatform", value: function(e3) {
          if (at(e3) || !this._map.has(e3))
            return -1;
          var t2 = this._map.get(e3), n2 = this._calcSuccessCountOfPlatform(e3) / t2.totalCount * 100;
          return (n2 = bt(n2, 2)) > 100 && (n2 = 100), n2;
        } }, { key: "_calcTotalCount", value: function(e3) {
          return at(e3) || !this._map.has(e3) ? -1 : this._map.get(e3).totalCount;
        } }, { key: "_calcSuccessCountOfBusiness", value: function(e3) {
          return at(e3) || !this._map.has(e3) ? -1 : this._map.get(e3).successCount;
        } }, { key: "_calcSuccessCountOfPlatform", value: function(e3) {
          if (at(e3) || !this._map.has(e3))
            return -1;
          var t2 = this._map.get(e3);
          return t2.successCount + t2.failedCountOfUserSide;
        } }, { key: "_calcAvg", value: function(e3) {
          return at(e3) || !this._map.has(e3) ? -1 : e3 === Ma ? this._calcAvgSpeed(e3) : this._calcAvgCost(e3);
        } }, { key: "_calcAvgCost", value: function(e3) {
          var t2 = this._map.get(e3).costArray.length;
          if (0 === t2)
            return 0;
          var n2 = 0;
          return this._map.get(e3).costArray.forEach(function(e4) {
            n2 += e4;
          }), parseInt(n2 / t2);
        } }, { key: "_calcAvgSpeed", value: function(e3) {
          var t2 = 0, n2 = 0;
          return this._map.get(e3).costArray.forEach(function(e4) {
            t2 += e4;
          }), this._map.get(e3).fileSizeArray.forEach(function(e4) {
            n2 += e4;
          }), parseInt(1e3 * n2 / t2);
        } }, { key: "getStatResult", value: function(e3) {
          var t2 = this._calcTotalCount(e3);
          if (0 === t2)
            return null;
          var n2 = this._calcSuccessCountOfBusiness(e3), o2 = this._calcSuccessRateOfBusiness(e3), s2 = this._calcSuccessCountOfPlatform(e3), a2 = this._calcSuccessRateOfPlatform(e3), r2 = this._calcAvg(e3);
          return this.reset(e3), { totalCount: t2, successCountOfBusiness: n2, successRateOfBusiness: o2, successCountOfPlatform: s2, successRateOfPlatform: a2, avgValue: r2 };
        } }, { key: "reset", value: function(e3) {
          at(e3) ? this._map.clear() : this._map.set(e3, { totalCount: 0, successCount: 0, failedCountOfUserSide: 0, costArray: [], fileSizeArray: [] });
        } }]), e2;
      }(), $i = function() {
        function e2() {
          o(this, e2), this._lastMap = /* @__PURE__ */ new Map(), this._currentMap = /* @__PURE__ */ new Map();
        }
        return a(e2, [{ key: "initMap", value: function(e3) {
          var t2 = this;
          e3.forEach(function(e4) {
            t2._lastMap.set(e4, /* @__PURE__ */ new Map()), t2._currentMap.set(e4, /* @__PURE__ */ new Map());
          });
        } }, { key: "addMessageSequence", value: function(e3) {
          var t2 = e3.key, n2 = e3.message;
          if (at(t2) || !this._lastMap.has(t2) || !this._currentMap.has(t2))
            return false;
          var o2 = n2.conversationID, s2 = n2.sequence, a2 = o2.replace(S.CONV_GROUP, "");
          if (0 === this._lastMap.get(t2).size)
            this._addCurrentMap(e3);
          else if (this._lastMap.get(t2).has(a2)) {
            var r2 = this._lastMap.get(t2).get(a2), i2 = r2.length - 1;
            s2 > r2[0] && s2 < r2[i2] ? (r2.push(s2), r2.sort(), this._lastMap.get(t2).set(a2, r2)) : this._addCurrentMap(e3);
          } else
            this._addCurrentMap(e3);
          return true;
        } }, { key: "_addCurrentMap", value: function(e3) {
          var t2 = e3.key, n2 = e3.message, o2 = n2.conversationID, s2 = n2.sequence, a2 = o2.replace(S.CONV_GROUP, "");
          this._currentMap.get(t2).has(a2) || this._currentMap.get(t2).set(a2, []), this._currentMap.get(t2).get(a2).push(s2);
        } }, { key: "_copyData", value: function(e3) {
          if (!at(e3)) {
            this._lastMap.set(e3, /* @__PURE__ */ new Map());
            var t2, n2 = this._lastMap.get(e3), o2 = D(this._currentMap.get(e3));
            try {
              for (o2.s(); !(t2 = o2.n()).done; ) {
                var s2 = v(t2.value, 2), a2 = s2[0], r2 = s2[1];
                n2.set(a2, r2);
              }
            } catch (i2) {
              o2.e(i2);
            } finally {
              o2.f();
            }
            n2 = null, this._currentMap.set(e3, /* @__PURE__ */ new Map());
          }
        } }, { key: "getStatResult", value: function(e3) {
          if (at(this._currentMap.get(e3)) || at(this._lastMap.get(e3)))
            return null;
          if (0 === this._lastMap.get(e3).size)
            return this._copyData(e3), null;
          var t2 = 0, n2 = 0;
          if (this._lastMap.get(e3).forEach(function(e4, o3) {
            var s2 = m(e4.values()), a2 = s2.length, r2 = s2[a2 - 1] - s2[0] + 1;
            t2 += r2, n2 += a2;
          }), 0 === t2)
            return null;
          var o2 = bt(n2 / t2 * 100, 2);
          return o2 > 100 && (o2 = 100), this._copyData(e3), { totalCount: t2, successCountOfMessageReceived: n2, successRateOfMessageReceived: o2 };
        } }, { key: "reset", value: function() {
          this._currentMap.clear(), this._lastMap.clear();
        } }]), e2;
      }(), eu = function(e2) {
        i(s2, e2);
        var n2 = f(s2);
        function s2(e3) {
          var t2;
          o(this, s2), (t2 = n2.call(this, e3))._n = "QualityStatModule", t2.TAG = "im-ssolog-quality-stat", t2.reportIndex = 0, t2.wholePeriod = false, t2._qualityItems = [ga, _a, ha, fa, va, ma, Ma, ya, Ia, Ca], t2._messageSentItems = [ha, fa, va, ma, Ma], t2._messageReceivedItems = [ya, Ia, Ca], t2.REPORT_INTERVAL = 120, t2.REPORT_SDKAPPID_BLACKLIST = [], t2.REPORT_TINYID_WHITELIST = [], t2._statInfoArr = [], t2._avgRTT = new Qi(), t2._avgE2EDelay = new Xi(), t2._rateMessageSent = new Zi(), t2._rateMessageReceived = new $i();
          var a2 = t2.getInnerEmitterInstance();
          return a2.on(Za, t2._onLoginSuccess, _(t2)), a2.on($a, t2._onCloudConfigUpdated, _(t2)), t2;
        }
        return a(s2, [{ key: "_onLoginSuccess", value: function() {
          var e3 = this;
          this._rateMessageSent.initMap(this._messageSentItems), this._rateMessageReceived.initMap(this._messageReceivedItems);
          var t2 = this.getModule(xn), n3 = t2.getItem(this.TAG, false);
          !jt(n3) && it(n3.forEach) && (xe.l("".concat(this._n, "._onLoginSuccess get quality stat logs from local storage, count:").concat(n3.length)), n3.forEach(function(t3) {
            e3._statInfoArr.push(t3);
          }), t2.removeItem(this.TAG, false));
        } }, { key: "_onCloudConfigUpdated", value: function() {
          var e3 = this.getCloudConfig("q_rpt_interval"), t2 = this.getCloudConfig("q_rpt_sdkappid_bl"), n3 = this.getCloudConfig("q_rpt_tinyid_wl");
          at(e3) || (this.REPORT_INTERVAL = Number(e3)), at(t2) || (this.REPORT_SDKAPPID_BLACKLIST = t2.split(",").map(function(e4) {
            return Number(e4);
          })), at(n3) || (this.REPORT_TINYID_WHITELIST = n3.split(","));
        } }, { key: "onCheckTimer", value: function(e3) {
          this.isLoggedIn() && e3 % this.REPORT_INTERVAL == 0 && (this.wholePeriod = true, this._report());
        } }, { key: "addRequestCount", value: function() {
          this._avgRTT.addRequestCount();
        } }, { key: "addRTT", value: function(e3) {
          this._avgRTT.addRTT(e3);
        } }, { key: "addMessageDelay", value: function(e3) {
          this._avgE2EDelay.addMessageDelay(e3);
        } }, { key: "addTotalCount", value: function(e3) {
          this._rateMessageSent.addTotalCount(e3) || xe.w("".concat(this._n, ".addTotalCount invalid key:"), e3);
        } }, { key: "addSuccessCount", value: function(e3) {
          this._rateMessageSent.addSuccessCount(e3) || xe.w("".concat(this._n, ".addSuccessCount invalid key:"), e3);
        } }, { key: "addFailedCountOfUserSide", value: function(e3) {
          this._rateMessageSent.addFailedCountOfUserSide(e3) || xe.w("".concat(this._n, ".addFailedCountOfUserSide invalid key:"), e3);
        } }, { key: "addCost", value: function(e3, t2) {
          this._rateMessageSent.addCost(e3, t2) || xe.w("".concat(this._n, ".addCost invalid key or cost:"), e3, t2);
        } }, { key: "addFileSize", value: function(e3, t2) {
          this._rateMessageSent.addFileSize(e3, t2) || xe.w("".concat(this._n, ".addFileSize invalid key or size:"), e3, t2);
        } }, { key: "addMessageSequence", value: function(e3) {
          this._rateMessageReceived.addMessageSequence(e3) || xe.w("".concat(this._n, ".addMessageSequence invalid key:"), e3.key);
        } }, { key: "_getQualityItem", value: function(e3) {
          var n3 = {}, o2 = Ea[this.getNetworkType()];
          at(o2) && (o2 = 8);
          var s3 = { qualityType: Ta[e3], timestamp: Ue(), networkType: o2, extension: "" };
          switch (e3) {
            case ga:
              n3 = this._avgRTT.getStatResult();
              break;
            case _a:
              n3 = this._avgE2EDelay.getStatResult();
              break;
            case ha:
            case fa:
            case va:
            case ma:
            case Ma:
              n3 = this._rateMessageSent.getStatResult(e3);
              break;
            case ya:
            case Ia:
            case Ca:
              n3 = this._rateMessageReceived.getStatResult(e3);
          }
          return null === n3 ? null : t(t({}, s3), n3);
        } }, { key: "_report", value: function(e3) {
          var t2 = this, n3 = [], o2 = null;
          at(e3) ? this._qualityItems.forEach(function(e4) {
            null !== (o2 = t2._getQualityItem(e4)) && (o2.reportIndex = t2.reportIndex, o2.wholePeriod = t2.wholePeriod, n3.push(o2));
          }) : null !== (o2 = this._getQualityItem(e3)) && (o2.reportIndex = this.reportIndex, o2.wholePeriod = this.wholePeriod, n3.push(o2)), xe.d("".concat(this._n, "._report"), n3), this._statInfoArr.length > 0 && (n3 = n3.concat(this._statInfoArr), this._statInfoArr = []);
          var s3 = this.getModule(qn), a2 = s3.getSDKAppID(), r2 = s3.getTinyID();
          wt(this.REPORT_SDKAPPID_BLACKLIST, a2) && !Ft(this.REPORT_TINYID_WHITELIST, r2) && (n3 = []), n3.length > 0 && this._doReport(n3);
        } }, { key: "_doReport", value: function(e3) {
          var n3 = this, o2 = { header: ti(this), quality: e3 };
          this.request({ protocolName: xs, requestData: t({}, o2) }).then(function() {
            n3.reportIndex++, n3.wholePeriod = false;
          }).catch(function(t2) {
            xe.w("".concat(n3._n, "._doReport, online:").concat(n3.getNetworkType(), " error:"), t2), n3._statInfoArr = n3._statInfoArr.concat(e3), n3._flushAtOnce();
          });
        } }, { key: "_flushAtOnce", value: function() {
          var e3 = this.getModule(xn), t2 = e3.getItem(this.TAG, false), n3 = this._statInfoArr, o2 = "".concat(this._n, "._flushAtOnce");
          if (jt(t2))
            xe.l("".concat(o2, " count:").concat(n3.length)), e3.setItem(this.TAG, n3, true, false);
          else {
            var s3 = n3.concat(t2);
            s3.length > 10 && (s3 = s3.slice(0, 10)), xe.l("".concat(o2, " count:").concat(s3.length)), e3.setItem(this.TAG, s3, true, false);
          }
          this._statInfoArr = [];
        } }, { key: "reset", value: function() {
          xe.l("".concat(this._n, ".reset")), this._report(), this.reportIndex = 0, this.wholePeriod = false, this.REPORT_SDKAPPID_BLACKLIST = [], this.REPORT_TINYID_WHITELIST = [], this._avgRTT.reset(), this._avgE2EDelay.reset(), this._rateMessageSent.reset(), this._rateMessageReceived.reset();
        } }]), s2;
      }(ro), tu = function(e2) {
        i(n2, e2);
        var t2 = f(n2);
        function n2(e3) {
          var s2;
          return o(this, n2), (s2 = t2.call(this, e3))._n = "WorkerTimerModule", s2._isWorkerEnabled = true, s2._workerTimer = null, s2._timerID = -1, s2._init(), s2.getInnerEmitterInstance().on($a, s2._onCloudConfigUpdated, _(s2)), s2;
        }
        return a(n2, [{ key: "isWorkerEnabled", value: function() {
          return this._isWorkerEnabled && Se;
        } }, { key: "startWorkerTimer", value: function() {
          xe.l("".concat(this._n, ".startWorkerTimer")), this._workerTimer && this._workerTimer.postMessage("start");
        } }, { key: "stopWorkerTimer", value: function() {
          xe.l("".concat(this._n, ".stopWorkerTimer")), this._workerTimer && this._workerTimer.postMessage("stop");
        } }, { key: "_init", value: function() {
          if (Se) {
            var e3 = URL.createObjectURL(new Blob(['let interval = -1;onmessage = function(event) {  if (event.data === "start") {    if (interval > 0) {      clearInterval(interval);    }    interval = setInterval(() => {      postMessage("");    }, 1000);    postMessage(interval);  } else if (event.data === "stop") {    clearInterval(interval);    interval = -1;  }};'], { type: "application/javascript; charset=utf-8" }));
            this._workerTimer = new Worker(e3);
            var t3 = this;
            this._workerTimer.onmessage = function(e4) {
              e4.data ? (t3._timerID = e4.data, xe.l("".concat(t3._n, "._init seed:").concat(t3._timerID))) : t3._m.onCheckTimer();
            };
          }
        } }, { key: "_onCloudConfigUpdated", value: function() {
          var e3 = this.getCloudConfig("enable_worker");
          xe.l("".concat(this._n, "._onCloudConfigUpdated enableWorker:").concat(e3)), at(e3) || "1" === e3 ? !this._isWorkerEnabled && Se && (this._isWorkerEnabled = true, this.startWorkerTimer(), this._m.onWorkerTimerEnabled()) : this._isWorkerEnabled && Se && (this._isWorkerEnabled = false, this.stopWorkerTimer(), this._m.onWorkerTimerDisabled());
        } }, { key: "terminate", value: function() {
          xe.l("".concat(this._n, ".terminate")), this._workerTimer && (this._workerTimer.terminate(), this._workerTimer = null, this._timerID = -1);
        } }, { key: "getTimerID", value: function() {
          return this._timerID;
        } }, { key: "reset", value: function() {
          xe.l("".concat(this._n, ".reset"));
        } }]), n2;
      }(ro), nu = function() {
        function e2() {
          o(this, e2), this._n = "PurchasedFeatureHandler", this._purchasedFeatureMap = /* @__PURE__ */ new Map();
        }
        return a(e2, [{ key: "isValidPurchaseBits", value: function(e3) {
          return e3 && "string" == typeof e3 && e3.length >= 1 && e3.length <= 64 && /[01]{1,64}/.test(e3);
        } }, { key: "parsePurchaseBits", value: function(e3) {
          if (this.isValidPurchaseBits(e3)) {
            this._purchasedFeatureMap.clear();
            for (var t2 = null, n2 = e3.length - 1, o2 = 0; n2 >= 0; n2--, o2++)
              t2 = o2 < 32 ? new L(0, Math.pow(2, o2)).toString() : new L(Math.pow(2, o2 - 32), 0).toString(), "1" === e3[n2] ? this._purchasedFeatureMap.set(t2, true) : this._purchasedFeatureMap.set(t2, false);
          } else
            xe.w("".concat(this._n, ".parsePurchaseBits invalid purchasebits:").concat(e3));
        } }, { key: "hasPurchasedFeature", value: function(e3) {
          return !!this._purchasedFeatureMap.get(e3);
        } }, { key: "isFeatureEnabled", value: function(e3) {
          for (var t2 = parseInt(e3).toString(2), n2 = void 0, o2 = true, s2 = t2.length - 1, a2 = 0; s2 >= 0; s2--, a2++)
            if ("1" === t2.charAt(s2) && (n2 = a2 < 32 ? new L(0, Math.pow(2, a2)).toString() : new L(Math.pow(2, a2 - 32), 0).toString(), !this._purchasedFeatureMap.get(n2))) {
              o2 = false;
              break;
            }
          return xe.l("".concat(this._n, ".isFeatureEnabled decimalNumber:").concat(e3, " binaryString:").concat(t2, " ret:").concat(o2)), za({ enabled: o2 });
        } }, { key: "clear", value: function() {
          this._purchasedFeatureMap.clear();
        } }]), e2;
      }(), ou = function() {
        function e2(t2) {
          o(this, e2), this._m = t2, this._n = "CommercialConfigModule", this._expiredTime = 0, this._isFetching = false, this._purchasedFeatureHandler = new nu();
        }
        return a(e2, [{ key: "_canFetch", value: function() {
          return this._getModule(qn).isLoggedIn() ? !this._isFetching && Date.now() >= this._expiredTime : (this._expiredTime = Date.now() + 2e3, false);
        } }, { key: "onCheckTimer", value: function(e3) {
          this._canFetch() && this.fetchConfig();
        } }, { key: "fetchConfig", value: function() {
          var e3 = this, t2 = this._canFetch(), n2 = "".concat(this._n, ".fetchConfig");
          if (xe.l("".concat(n2, " canFetch:").concat(t2)), t2) {
            var o2 = this._getModule(Bn), s2 = new ka("fetchCommercialConfig");
            s2.setNetworkType(o2.getNetworkType());
            var a2 = this._getModule(qn).getSDKAppID(), r2 = this._getModule(jn);
            this._isFetching = true, r2.request({ protocolName: Xs, requestData: { SDKAppID: a2 } }).then(function(t3) {
              s2.setMessage("purchaseBits:".concat(t3.data.purchaseBits)).end(), xe.l("".concat(n2, " ok.")), e3._parseConfig(t3.data), e3._isFetching = false;
            }).catch(function(t3) {
              o2.probe().then(function(e4) {
                var n3 = v(e4, 2), o3 = n3[0], a3 = n3[1];
                s2.setError(t3, o3, a3).end();
              }), e3._isFetching = false;
            });
          }
        } }, { key: "onPushedConfig", value: function(e3) {
          var t2 = "".concat(this._n, ".onPushedConfig data:").concat(JSON.stringify(e3));
          xe.l("".concat(t2)), new ka("pushedCommercialConfig").setNetworkType(this._getModule(Bn).getNetworkType()).setMessage("purchaseBits:".concat(e3.purchaseBits)).end(), this._parseConfig(e3);
        } }, { key: "_parseConfig", value: function(e3) {
          var t2 = "".concat(this._n, "._parseConfig"), n2 = e3.errorCode, o2 = e3.errorMessage, s2 = e3.purchaseBits, a2 = e3.expiredTime;
          0 === n2 ? (this._purchasedFeatureHandler.parsePurchaseBits(s2), this._expiredTime = Date.now() + 1e3 * a2) : at(n2) ? (xe.l("".concat(t2, " failed. Invalid message format:"), e3), this._setExpiredTimeOnResponseError(36e5)) : (xe.e("".concat(t2, " errorCode:").concat(n2, " errorMessage:").concat(o2)), this._setExpiredTimeOnResponseError(12e4));
        } }, { key: "_setExpiredTimeOnResponseError", value: function(e3) {
          this._expiredTime = Date.now() + e3;
        } }, { key: "canIUse", value: function(e3) {
          return this._purchasedFeatureHandler.hasPurchasedFeature(e3);
        } }, { key: "isFeatureEnabled", value: function(e3) {
          return this._purchasedFeatureHandler.isFeatureEnabled(e3);
        } }, { key: "_getModule", value: function(e3) {
          return this._m.getModule(e3);
        } }, { key: "reset", value: function() {
          xe.l("".concat(this._n, ".reset")), this._expiredTime = 0, this._isFetching = false, this._purchasedFeatureHandler.clear();
        } }]), e2;
      }(), su = function(e2) {
        i(n2, e2);
        var t2 = f(n2);
        function n2(e3) {
          var s2;
          return o(this, n2), (s2 = t2.call(this, e3))._m = e3, s2._n = "OfflinePushModule", s2._offlinePushPlugin = void 0, s2._androidPushConfig = { huaweiPushBussinessId: "", xiaomiPushBussinessId: "", xiaomiPushAppId: "", xiaomiPushAppKey: "", meizuPushBussinessId: "", meizuPushAppId: "", meizuPushAppKey: "", vivoPushBussinessId: "", fcmPushBussinessId: "", oppoPushBussinessId: "", oppoPushAppKey: "", oppoPushAppSecret: "", honorPushBussinessId: "" }, s2._deviceToken = "", s2._businessID = 0, s2._iosBusinessID = 0, s2._c2cUnreadCount = 0, s2._groupUnreadCount = 0, s2._isWebUniapp = 0, s2;
        }
        return a(n2, [{ key: "registerPlugin", value: function(e3) {
          if (ne) {
            this._offlinePushPlugin = e3["tim-offline-push-plugin"];
            var t3 = e3.offlinePushConfig || {}, n3 = t3.huaweiBusinessID, o2 = t3.xiaomiBusinessID, s2 = t3.xiaomiAppID, a2 = t3.xiaomiAppKey, r2 = t3.meizuBusinessID, i2 = t3.meizuAppID, u2 = t3.meizuAppKey, c2 = t3.vivoBusinessID, l2 = t3.oppoBusinessID, p2 = t3.oppoAppKey, d2 = t3.oppoAppSecret, g2 = t3.honorBusinessID, _2 = t3.iosBusinessID;
            this._androidPushConfig.huaweiPushBussinessId = n3, this._androidPushConfig.xiaomiPushBussinessId = o2, this._androidPushConfig.xiaomiPushAppId = s2, this._androidPushConfig.xiaomiPushAppKey = a2, this._androidPushConfig.meizuPushBussinessId = r2, this._androidPushConfig.meizuPushAppId = i2, this._androidPushConfig.meizuPushAppKey = u2, this._androidPushConfig.vivoPushBussinessId = c2, this._androidPushConfig.oppoPushBussinessId = l2, this._androidPushConfig.oppoPushAppKey = p2, this._androidPushConfig.oppoPushAppSecret = d2, this._androidPushConfig.honorPushBussinessId = g2, new ka("registerPlugin").setMessage("tim-offline-push-plugin").setMoreMessage("isExist:".concat(!at(this._offlinePushPlugin))).end(true), xe.l("".concat(this._n, ".").concat("registerPlugin", " ok. offlinePushConfig:").concat(JSON.stringify(e3.offlinePushConfig))), this._iosBusinessID = _2, this._setAppShowListener();
          } else
            this.outputWarning("OfflinePushInUniapp");
        } }, { key: "init", value: function() {
          this._isWebUniapp = this.getUniAppPlatform(), this._getDeviceToken();
        } }, { key: "_getDeviceToken", value: function() {
          var e3 = this, t3 = "".concat(this._n, ".").concat("_getDeviceToken");
          if (it(this._offlinePushPlugin.getDeviceToken)) {
            var n3 = "androidPushConfig:".concat(JSON.stringify(this._androidPushConfig), ", iosBusinessID:").concat(this._iosBusinessID);
            xe.l("".concat(t3, " start. ").concat(n3)), new ka("_getDeviceToken").setMessage("".concat(n3)).end(true), this._offlinePushPlugin.getDeviceToken(this._androidPushConfig, function(o2) {
              var s2 = new ka("getDeviceTokenRes"), a2 = o2.code, r2 = o2.msg;
              if (0 === a2) {
                var i2 = o2.data, u2 = i2.deviceToken, c2 = i2.deviceBrand, l2 = i2.deviceType, p2 = i2.bussinessId;
                e3._deviceToken = u2, e3._businessID = p2 || e3._iosBusinessID, n3 = "deviceToken:".concat(u2, ", deviceBrand:").concat(c2 || l2, ", businessID:").concat(e3._businessID), xe.l("".concat(t3, " ok. ").concat(n3)), s2.setMessage(n3).end(true), e3._setToken();
              } else
                s2.setMessage("code:".concat(a2, ", msg:").concat(r2)).end(true), xe.e("".concat(t3, " failed. error:"), o2);
            });
          } else
            xe.e("".concat(t3, " getDeviceToken is not a function"));
        } }, { key: "canIUseOfflinePush", value: function() {
          return ne && !at(this._offlinePushPlugin);
        } }, { key: "_setAppShowListener", value: function() {
          var e3 = this, t3 = "".concat(this._n, ".").concat("_setAppShowListener");
          at(this._offlinePushPlugin) ? xe.e("".concat(t3, " offlinePushPlugin is undefined")) : it(this._offlinePushPlugin.setAppShowListener) ? (new ka("_setAppShowListener").end(true), xe.l("".concat(t3, " start")), this._offlinePushPlugin.setAppShowListener(function(n3) {
            var o2 = (n3 || {}).appShow;
            new ka("setAppShowListenerRes").setMessage("appShow:".concat(o2)).end(true), xe.l("".concat(t3, " ok. appShow:").concat(o2)), e3._m.isReady() && (0 === o2 ? (e3._getConvUnreadCount(), e3._onBackground()) : 1 === o2 && e3._onForeground());
          })) : xe.e("".concat(t3, " setAppShowListener is not a function"));
        } }, { key: "getDeviceBrand", value: function() {
          if (!at(this._offlinePushPlugin) && it(this._offlinePushPlugin.getDeviceType)) {
            var e3 = (this._offlinePushPlugin.getDeviceType() || {}).deviceType;
            return xe.l("".concat(this._n, ".getDeviceBrand ok. deviceType:").concat(e3)), e3;
          }
        } }, { key: "_setToken", value: function() {
          var e3, t3 = this, n3 = "".concat(this._n, "._setToken"), o2 = this.getModule(qn), s2 = 1, a2 = "", r2 = "";
          jt(this._deviceToken) && (s2 = 0);
          var i2 = this.getUniAppPlatform(), u2 = this.getDeviceBrand();
          i2 === R.IOS || i2 === R.IPAD || i2 === R.MAC ? r2 = this._deviceToken : i2 === R.ANDROID && (a2 = this._deviceToken);
          var c2 = new ka("offlinePushSetToken");
          return e3 = "deviceToken:".concat(r2 || a2, ", businessID:").concat(this._businessID, ", ") + "deviceBrand:".concat(u2, ", isWebUniapp:").concat(this._isWebUniapp, ", pushMsg:").concat(s2, ", platform:").concat(i2), c2.setMessage("".concat(e3)), xe.l("".concat(n3, " ").concat(e3)), this.request({ protocolName: ca, requestData: { tokenID: a2, pushMsg: s2, sdkAppID: o2.getSDKAppID(), businessID: parseInt(this._businessID), deviceBrand: u2, deviceToken: r2, isWebUniapp: this._isWebUniapp } }).then(function(e4) {
            return c2.end(), xe.l("".concat(n3, " ok")), e4;
          }).catch(function(e4) {
            return t3.probeNetwork().then(function(t4) {
              var n4 = v(t4, 2), o3 = n4[0], s3 = n4[1];
              c2.setError(e4, o3, s3).end();
            }), xe.e("".concat(n3, " failed. error:"), e4), Ja(e4);
          });
        } }, { key: "_getConvUnreadCount", value: function() {
          var e3 = this;
          this._c2cUnreadCount = 0, this._groupUnreadCount = 0, this.getModule(Fn).getLocalConversationList().forEach(function(t3) {
            t3.type === S.CONV_C2C && (e3._c2cUnreadCount += t3.unreadCount), t3.type === S.CONV_GROUP && (e3._groupUnreadCount += t3.unreadCount);
          });
        } }, { key: "_onBackground", value: function() {
          var e3 = this, t3 = "".concat(this._n, ".").concat("_onBackground"), n3 = new ka("_onBackground");
          this.request({ protocolName: ia, requestData: { c2cUnreadCount: this._c2cUnreadCount, groupUnreadCount: this._groupUnreadCount, isWebUniapp: this._isWebUniapp } }).then(function(o2) {
            return n3.setMessage("c2cUnreadCount: ".concat(e3._c2cUnreadCount, ", groupUnreadCount: ").concat(e3._groupUnreadCount)).end(), xe.l("".concat(t3, " ok")), o2;
          }).catch(function(o2) {
            e3.probeNetwork().then(function(e4) {
              var t4 = v(e4, 2), s2 = t4[0], a2 = t4[1];
              n3.setError(o2, s2, a2).end();
            }), xe.e("".concat(t3, " failed. error:"), o2);
          });
        } }, { key: "_onForeground", value: function() {
          var e3 = this, t3 = "".concat(this._n, ".").concat("_onForeground"), n3 = new ka("_onForeground");
          this.request({ protocolName: ua, requestData: { isWebUniapp: this._isWebUniapp } }).then(function(e4) {
            return n3.end(), xe.l("".concat(t3, " ok")), e4;
          }).catch(function(o2) {
            e3.probeNetwork().then(function(e4) {
              var t4 = v(e4, 2), s2 = t4[0], a2 = t4[1];
              n3.setError(o2, s2, a2).end();
            }), xe.e("".concat(t3, " failed. error:"), o2);
          });
        } }, { key: "getUniAppPlatform", value: function() {
          var e3 = uni.getSystemInfoSync().platform, t3 = this.getDeviceBrand();
          return "ios" === e3 ? R.IOS : "android" === e3 ? R.ANDROID : 1002 === t3 ? R.IPAD : 1001 === t3 ? R.MAC : void 0;
        } }, { key: "reset", value: function() {
          this._deviceToken = "", this._businessID = 0, this._c2cUnreadCount = 0, this._groupUnreadCount = 0, this._isWebUniapp = 0, xe.l("".concat(this._n, ".reset"));
        } }]), n2;
      }(ro), au = function(e2) {
        i(n2, e2);
        var t2 = f(n2);
        function n2(e3) {
          var s2;
          return o(this, n2), (s2 = t2.call(this, e3))._n = "ProfanityFilterModule", s2._plugin = null, s2._filterConfigMap = /* @__PURE__ */ new Map(), s2._startIndex = 0, s2._version = 0, s2._canIUseLexicon = false, s2._isFetching = false, s2._expiredTime = 0, s2;
        }
        return a(n2, [{ key: "init", value: function() {
          var e3 = this.getModule(Wn).getPlugin("tim-profanity-filter-plugin");
          e3 ? (this._plugin = new e3({ logger: xe, isArray: st, isMap: Qe, isDevMode: this.isDevMode() }), this._getLexicon()) : this.outputWarning("ProfanityPluginNotFound");
        } }, { key: "onCheckTimer", value: function() {
          this._plugin && this._canIUseLexicon && this.isLoggedIn() && !this._isFetching && Date.now() >= this._expiredTime && this._getLexicon();
        } }, { key: "filterMessage", value: function(e3, t3) {
          var n3 = true;
          if (!this._plugin || !this._canIUseLexicon)
            return n3;
          if (t3 && t3.messageControlInfo && true === t3.messageControlInfo.excludedFromContentModeration)
            return n3;
          var o2 = e3.type, s2 = e3.conversationType;
          if (o2 !== S.MSG_TEXT && o2 !== S.MSG_CUSTOM)
            return n3;
          var a2, r2 = "".concat(this._n, ".filterMessage");
          if (xe.l("".concat(r2)), o2 === S.MSG_TEXT) {
            if (s2 === S.CONV_C2C ? a2 = H : s2 === S.CONV_GROUP && (a2 = W), !this._isConfigOn(a2))
              return n3;
            var i2 = this._plugin.filter(e3.payload.text), u2 = i2.type, c2 = i2.modifiedText;
            1 === u2 ? n3 = false : 2 === u2 && (e3.payload.text = c2);
          } else if (o2 === S.MSG_CUSTOM) {
            if (s2 === S.CONV_C2C ? a2 = K : s2 === S.CONV_GROUP && (a2 = Y), !this._isConfigOn(a2))
              return n3;
            var l2 = this._plugin.filter(e3.payload.data), p2 = this._plugin.filter(e3.payload.description), d2 = this._plugin.filter(e3.payload.extension);
            1 === l2.type || 1 === p2.type || 1 === d2.type ? n3 = false : (2 === l2.type && (e3.payload.data = l2.modifiedText), 2 === p2.type && (e3.payload.description = p2.modifiedText), 2 === d2.type && (e3.payload.extension = d2.modifiedText));
          }
          return xe.l("".concat(r2, " done. isAllowedToSend:").concat(n3)), n3;
        } }, { key: "filterText", value: function(e3, t3) {
          var n3 = "".concat(this._n, ".filterText"), o2 = { isAllowedToSend: true, modifiedText: e3 };
          if (!this._plugin || !this._canIUseLexicon)
            return o2;
          if (!this._isConfigOn(t3))
            return o2;
          xe.l("".concat(n3));
          var s2 = this._plugin.filter(e3), a2 = s2.type, r2 = s2.modifiedText;
          return 1 === a2 ? o2.isAllowedToSend = false : 2 === a2 && (o2.modifiedText = r2), xe.l("".concat(n3, " done. ret:"), o2), o2;
        } }, { key: "_getLexicon", value: function() {
          var e3 = this, t3 = new ka("profanityFilter"), n3 = "".concat(this._n, "._getLexicon");
          this._isFetching = true, this.request({ protocolName: la, requestData: { startIndex: this._startIndex, version: this._version } }).then(function(o2) {
            var s2 = o2.data, a2 = s2.errorInfo, r2 = s2.filterConfig, i2 = s2.lexicon, u2 = s2.strToken, c2 = s2.completeFlag, l2 = s2.nextStartIndex, p2 = s2.version, d2 = s2.expiredTime, g2 = a2.errorCode, _2 = a2.errorMessage;
            return 0 !== g2 ? (e3._isFetching = false, xe.w("".concat(n3, " failed. error:"), a2), void t3.setCode(g2).setMessage(_2).end()) : (e3._onFilterConfig(r2), e3._getToken(u2), 1 === c2 ? (xe.l("".concat(n3, " done. version:").concat(p2, " expiredTime:").concat(d2)), e3._version = p2, e3._canIUseLexicon = true, e3._isFetching = false, e3._expiredTime = Date.now() + 1e3 * d2, void e3._plugin.onLexiconCompleted(i2)) : (e3._startIndex = l2, e3._plugin.onLexiconSliced(i2), void e3._getLexicon()));
          }).catch(function(o2) {
            e3.probeNetwork().then(function(e4) {
              var n4 = v(e4, 2), s2 = n4[0], a2 = n4[1];
              t3.setError(o2, s2, a2).end();
            }), e3._isFetching = false, xe.l("".concat(n3, " failed. error:"), o2);
          });
        } }, { key: "_onFilterConfig", value: function(e3) {
          var t3 = this;
          jt(e3) || (this._filterConfigMap.clear(), Object.keys(e3).forEach(function(n3) {
            t3._filterConfigMap.set(n3, e3[n3]);
          }), xe.l("".concat(this._n, "._onFilterConfig. keys:").concat(Array.from(this._filterConfigMap.keys()), " values:").concat(Array.from(this._filterConfigMap.values()))));
        } }, { key: "_isConfigOn", value: function(e3) {
          return 1 === this._filterConfigMap.get(e3);
        } }, { key: "_getToken", value: function(e3) {
          if (et(e3)) {
            var t3 = e3.length, n3 = "";
            if (t3 % 2 == 0)
              for (var o2 = 0; o2 <= t3 - 1; o2 += 2)
                n3 += e3[o2 + 1], n3 += e3[o2];
            else {
              for (var s2 = 0; s2 < t3 - 1; s2 += 2)
                n3 += e3[s2 + 1], n3 += e3[s2];
              n3 += e3[t3 - 1];
            }
            this._plugin.onToken(n3);
          }
        } }, { key: "reset", value: function() {
          xe.l("".concat(this._n, ".reset")), this._plugin && (this._plugin.reset(), this._plugin = null), this._filterConfigMap.clear(), this._startIndex = 0, this._version = 0, this._canIUseLexicon = false, this._isFetching = false, this._expiredTime = 0;
        } }]), n2;
      }(ro), ru = function() {
        function e2(t2) {
          o(this, e2), this._m = t2, this._n = "TransCmdModule", this._TRTCCommandList = ["tui_room_svr.*"], this._m.getInnerEmitterInstance().on($a, this._onCloudConfigUpdated, this);
        }
        return a(e2, [{ key: "_onCloudConfigUpdated", value: function() {
          var e3 = this, t2 = this._m.getModule(Xn).getCloudConfig("rtc_cmd");
          at(t2) || (t2 = JSON.parse(t2)).forEach(function(t3) {
            e3._TRTCCommandList.includes(t3) || e3._TRTCCommandList.push(t3);
          });
        } }, { key: "sendTRTCCustomData", value: function(e3) {
          var t2 = e3.serviceCommand, n2 = e3.data, o2 = "".concat(V.NAME.TUIROOM_SVR, ".*");
          return at(t2) || (o2 = t2), this._TRTCCommandList.includes(o2) ? this._trans({ servcmd: o2, data: n2 }) : Ja({ code: da.INVALID_TRTC_CMD });
        } }, { key: "_trans", value: function(e3) {
          xe.d("".concat(this._n, "._trans. options:").concat(JSON.stringify(e3)));
          var t2 = e3.servcmd, n2 = e3.data;
          return this._m.getModule(jn).trans({ servcmd: t2, data: et(n2) ? JSON.parse(n2) : n2 });
        } }, { key: "getCommandList", value: function() {
          return this._TRTCCommandList;
        } }, { key: "reset", value: function() {
          xe.l("".concat(this._n, ".reset"));
        } }]), e2;
      }(), iu = function() {
        function e2(t2) {
          o(this, e2), this._m = t2, this._n = "ErrorMessageModule", this.TIM_ERROR_ASSISTANCE = "tim_error_assistance", this.STORAGE_EXPIRES_TIME = 6048e5, this._map = /* @__PURE__ */ new Map(), this._init();
        }
        return a(e2, [{ key: "_init", value: function() {
          var e3 = this._getStorageModule().getItem(this.TIM_ERROR_ASSISTANCE, false);
          if (e3) {
            var t2;
            try {
              t2 = JSON.parse(e3);
            } catch (n2) {
              this._getStorageModule().removeItem(this.TIM_ERROR_ASSISTANCE, false), xe.w("".concat(this._n, "._init error:"), n2);
            }
            t2 && (this._needToUpdate(t2) ? this._fetch() : this._fillMap(t2.message));
          } else
            this._fetch();
        } }, { key: "_needToUpdate", value: function(e3) {
          var t2 = e3.localSavedTime, n2 = e3.localSavedVersion, o2 = t2 && (/* @__PURE__ */ new Date()).getTime() - t2 >= this.STORAGE_EXPIRES_TIME, s2 = !n2 || "2.27.5" !== n2;
          return xe.l("".concat(this._n, "._needToUpdate isTimeout:").concat(o2, " isDifferentVersion:").concat(s2)), o2 || s2;
        } }, { key: "_fetch", value: function() {
          if (!this._m.getModule(qn).isPrivateNetWork()) {
            var e3 = "https://web.sdk.qcloud.com/im/download/error-message/0.0.1/tim-error-message.txt", t2 = "application/x-www-form-urlencoded;charset=UTF-8", n2 = "".concat(this._n, "._fetch ok in"), o2 = this;
            if (se)
              re.request({ url: e3, method: "GET", timeout: 3e3, header: { "content-type": t2 }, dataType: "text", success: function(e4) {
                o2._fillAndSave(e4.data), xe.l("".concat(n2, " mini program"));
              }, fail: function() {
              } });
            else {
              var s2 = new XMLHttpRequest(), a2 = setTimeout(function() {
                s2.abort();
              }, 3e3);
              s2.onreadystatechange = function() {
                4 === s2.readyState && (clearTimeout(a2), 200 !== s2.status && 304 !== s2.status || (xe.l("".concat(n2, " browser")), o2._fillAndSave(s2.responseText)));
              }, s2.open("GET", e3, true), s2.setRequestHeader("Content-type", t2), s2.send();
            }
          }
        } }, { key: "_fillAndSave", value: function(e3) {
          this._fillMap(e3), this._getStorageModule().setItem(this.TIM_ERROR_ASSISTANCE, JSON.stringify({ message: e3, localSavedTime: (/* @__PURE__ */ new Date()).getTime(), localSavedVersion: "2.27.5" }), true, false);
        } }, { key: "_getStorageModule", value: function() {
          return this._m.getModule(xn);
        } }, { key: "_fillMap", value: function(e3) {
          this._map.clear();
          for (var t2, n2, o2, s2 = e3.split(";\n"), a2 = s2.length, r2 = new RegExp(/'/g), i2 = 0; i2 < a2; i2++)
            if (t2 = s2[i2].indexOf(":"), n2 = s2[i2].slice(0, t2), o2 = s2[i2].slice(t2 + 1, s2[i2].length), !n2.startsWith("//")) {
              if (at(o2))
                continue;
              this._map.set(n2, o2.replace(r2, ""));
            }
        } }, { key: "get", value: function(e3) {
          var t2 = e3.isIntl, n2 = e3.key, o2 = e3.replacement1, s2 = e3.replacement2, a2 = "".concat(n2, t2 ? "_en" : "_cn");
          !this._map.has(a2) && this._map.has(n2) && (a2 = n2);
          var r2 = "";
          return this._map.has(a2) ? (r2 = this._map.get(a2), at(o2) || (r2 = r2.replace("$replacement1", o2)), at(s2) || (r2 = r2.replace("$replacement2", s2)), r2) : r2;
        } }, { key: "reset", value: function() {
          xe.l("".concat(this._n, ".reset"));
        } }]), e2;
      }(), uu = function() {
        function e2(t2) {
          o(this, e2);
          var n2 = new ka("sdkConstruct");
          this._n = "ModuleManager", this._isReady = false, this._reason = da.USER_NOT_LOGGED_IN, this._startLoginTs = 0, this._moduleMap = /* @__PURE__ */ new Map(), this._innerEmitter = null, this._outerEmitter = null, this._checkCount = 0, this._checkTimer = -1, this._moduleMap.set(qn, new Xr(this, t2)), this._moduleMap.set(eo, new ou(this)), this._moduleMap.set(Xn, new zi(this)), this._moduleMap.set(Qn, new tu(this)), this._moduleMap.set($n, new eu(this)), this._moduleMap.set(zn, new qi(this)), this._moduleMap.set(jn, new Yi(this)), this._moduleMap.set(An, new Qr(this)), this._moduleMap.set(Rn, new fi(this)), this._moduleMap.set(Nn, new vi(this)), this._moduleMap.set(so, new mi(this)), this._moduleMap.set(On, new Jr(this)), this._moduleMap.set(Gn, new Xa(this)), this._moduleMap.set(Fn, new vr(this)), this._moduleMap.set(Un, new wr(this)), this._moduleMap.set(bn, new qr(this)), this._moduleMap.set(wn, new Hr(this)), this._moduleMap.set(xn, new $r(this)), this._moduleMap.set(ao, new iu(this)), this._moduleMap.set(Vn, new ni(this)), this._moduleMap.set(Bn, new ri(this)), this._moduleMap.set(Hn, new ui(this)), this._moduleMap.set(Kn, new li(this)), this._moduleMap.set(Wn, new Mi(this)), this._moduleMap.set(Yn, new yi(this)), this._moduleMap.set(Jn, new ji(this)), this._moduleMap.set(Zn, new Ji(this)), this._moduleMap.set(to, new su(this)), this._moduleMap.set(no, new au(this)), this._moduleMap.set(oo, new ru(this)), this._eventThrottleMap = /* @__PURE__ */ new Map();
          var s2 = t2.instanceID, a2 = t2.oversea, r2 = t2.SDKAppID, i2 = "instanceID:".concat(s2, " SDKAppID:").concat(r2, " host:").concat(Nt(), " oversea:").concat(a2, " inBrowser:").concat(ae, " inMiniApp:").concat(se) + " workerAvailable:".concat(Se, " UserAgent:").concat(ie);
          ka.bindEventStatModule(this._moduleMap.get(Vn)), n2.setMessage("".concat(i2, " ").concat(function() {
            var e3 = "";
            if (se)
              try {
                var t3 = re.getSystemInfoSync(), n3 = t3.model, o2 = t3.version, s3 = t3.system, a3 = t3.platform, r3 = t3.SDKVersion;
                e3 = "model:".concat(n3, " version:").concat(o2, " system:").concat(s3, " platform:").concat(a3, " SDKVersion:").concat(r3);
              } catch (i3) {
                e3 = "";
              }
            return e3;
          }())).end(), xe.i("SDK ".concat(i2)), Wa.prototype._getErrorMessage = this.getErrorMessage.bind(this), this._readyList = void 0, this._ssoLogForReady = null, this._initReadyList();
        }
        return a(e2, [{ key: "_startTimer", value: function() {
          var e3 = this._moduleMap.get(Qn), t2 = e3.isWorkerEnabled();
          xe.l("".concat(this._n, ".startTimer isWorkerEnabled:").concat(t2, " seed:").concat(this._checkTimer)), t2 ? e3.startWorkerTimer() : this._startMainThreadTimer();
        } }, { key: "_startMainThreadTimer", value: function() {
          this._checkTimer < 0 && (this._checkTimer = setInterval(this.onCheckTimer.bind(this), 1e3)), xe.l("".concat(this._n, "._startMainThreadTimer seed:").concat(this._checkTimer));
        } }, { key: "stopTimer", value: function() {
          var e3 = this._moduleMap.get(Qn), t2 = e3.isWorkerEnabled();
          xe.l("".concat(this._n, ".stopTimer isWorkerEnabled:").concat(t2, " seed:").concat(this._checkTimer)), t2 ? e3.stopWorkerTimer() : this._stopMainThreadTimer();
        } }, { key: "_stopMainThreadTimer", value: function() {
          xe.l("".concat(this._n, "._stopMainThreadTimer")), this._checkTimer > 0 && (clearInterval(this._checkTimer), this._checkTimer = -1, this._checkCount = 0);
        } }, { key: "_stopMainThreadSocket", value: function() {
          xe.l("".concat(this._n, "._stopMainThreadSocket"));
          var e3 = this._moduleMap.get(zn);
          e3.setIsWorkerEnabled(true), e3.reConnect();
        } }, { key: "_startMainThreadSocket", value: function() {
          xe.l("".concat(this._n, "._startMainThreadSocket"));
          var e3 = this._moduleMap.get(zn);
          e3.setIsWorkerEnabled(false), e3.reConnect();
        } }, { key: "onWorkerTimerEnabled", value: function() {
          xe.l("".concat(this._n, ".onWorkerTimerEnabled, disable main thread timer and socket")), this._stopMainThreadTimer(), this._stopMainThreadSocket();
        } }, { key: "onWorkerTimerDisabled", value: function() {
          xe.l("".concat(this._n, ".onWorkerTimerDisabled, enable main thread timer and socket")), this._startMainThreadTimer(), this._startMainThreadSocket();
        } }, { key: "onCheckTimer", value: function() {
          this._checkCount += 1;
          var e3, t2 = D(this._moduleMap);
          try {
            for (t2.s(); !(e3 = t2.n()).done; ) {
              var n2 = v(e3.value, 2)[1];
              n2.onCheckTimer && n2.onCheckTimer(this._checkCount);
            }
          } catch (o2) {
            t2.e(o2);
          } finally {
            t2.f();
          }
        } }, { key: "_initReadyList", value: function() {
          var e3 = this;
          this._readyList = [this._moduleMap.get(An), this._moduleMap.get(Fn)], this._readyList.forEach(function(t2) {
            t2.ready(function() {
              return e3._onModuleReady();
            });
          });
        } }, { key: "_onModuleReady", value: function() {
          var e3 = true;
          if (this._readyList.forEach(function(t3) {
            t3.isReady() || (e3 = false);
          }), e3 && !this._isReady) {
            this._isReady = true, this._outerEmitter.emit(E.SDK_READY);
            var t2 = Date.now() - this._startLoginTs;
            xe.w("SDK is ready. cost ".concat(t2, " ms")), this._startLoginTs = Date.now();
            var n2 = this._moduleMap.get(Bn).getNetworkType(), o2 = this._ssoLogForReady.getStartTs() + Ge;
            this._ssoLogForReady.setNetworkType(n2).setMessage(t2).start(o2).end();
          }
        } }, { key: "login", value: function() {
          0 === this._startLoginTs && (Pe(), this._startLoginTs = Date.now(), this._startTimer(), this._moduleMap.get(Bn).start(), this._ssoLogForReady = new ka("sdkReady"), this._reason = da.LOGGING_IN);
        } }, { key: "onLoginFailed", value: function() {
          this._startLoginTs = 0;
        } }, { key: "getOuterEmitterInstance", value: function() {
          return null === this._outerEmitter && (this._outerEmitter = new ii(), ja(this._outerEmitter), this._outerEmitter._emit = this._outerEmitter.emit, this._outerEmitter.emit = function(e3, t2) {
            var n2 = this;
            if (e3 === E.CONVERSATION_LIST_UPDATED || e3 === E.FRIEND_LIST_UPDATED || e3 === E.GROUP_LIST_UPDATED || e3 === E.TOTAL_UNREAD_MESSAGE_COUNT_UPDATED)
              if (this._eventThrottleMap.has(e3)) {
                var o2 = Date.now(), s2 = this._eventThrottleMap.get(e3);
                o2 - s2.last <= 1e3 ? (s2.timeoutID && clearTimeout(s2.timeoutID), s2.timeoutID = setTimeout(function() {
                  s2.last = Date.now(), n2._outerEmitter._emit.apply(n2._outerEmitter, [e3, { name: e3, data: n2._getEventData(e3) }]);
                }, 1e3)) : (s2.last = o2, this._outerEmitter._emit.apply(this._outerEmitter, [e3, { name: e3, data: this._getEventData(e3) }]));
              } else
                this._eventThrottleMap.set(e3, { last: Date.now(), timeoutID: -1 }), this._outerEmitter._emit.apply(this._outerEmitter, [e3, { name: e3, data: this._getEventData(e3) }]);
            else
              this._outerEmitter._emit.apply(this._outerEmitter, [e3, { name: e3, data: arguments[1] }]);
          }.bind(this)), this._outerEmitter;
        } }, { key: "_getEventData", value: function(e3) {
          return e3 === E.CONVERSATION_LIST_UPDATED ? this._moduleMap.get(Fn).getLocalConversationList() : e3 === E.FRIEND_LIST_UPDATED ? this._moduleMap.get(Pn).getLocalFriendList(false) : e3 === E.GROUP_LIST_UPDATED ? this._moduleMap.get(Un).getLocalGroupList() : e3 === E.TOTAL_UNREAD_MESSAGE_COUNT_UPDATED ? this._moduleMap.get(Fn).getTotalUnreadMessageCount() : void 0;
        } }, { key: "getInnerEmitterInstance", value: function() {
          return null === this._innerEmitter && (this._innerEmitter = new ii(), this._innerEmitter._emit = this._innerEmitter.emit, this._innerEmitter.emit = function(e3, t2) {
            var n2;
            n2 = ot(arguments[1]) && arguments[1].data ? [e3, { name: arguments[0], data: arguments[1].data }] : [e3, { name: arguments[0], data: arguments[1] }], this._innerEmitter._emit.apply(this._innerEmitter, n2);
          }.bind(this)), this._innerEmitter;
        } }, { key: "hasModule", value: function(e3) {
          return this._moduleMap.has(e3);
        } }, { key: "getModule", value: function(e3) {
          return this._moduleMap.get(e3);
        } }, { key: "isReady", value: function() {
          return this._isReady;
        } }, { key: "isIntl", value: function() {
          return this.getModule(qn).isIntl();
        } }, { key: "getNotReadyReason", value: function() {
          return this._reason;
        } }, { key: "setNotReadyReason", value: function(e3) {
          this._reason = e3;
        } }, { key: "getErrorMessage", value: function(e3, t2, n2) {
          return this._moduleMap.get(ao).get({ key: e3, replacement1: t2, replacement2: n2, isIntl: this.isIntl() });
        } }, { key: "outputWarning", value: function(e3, t2, n2) {
          var o2 = this.getErrorMessage(e3, t2, n2);
          o2 && xe.w(o2);
        } }, { key: "onError", value: function(e3) {
          var t2 = "code:".concat(e3.code, " message:").concat(e3.message);
          xe.w("Oops! ".concat(t2)), new ka("error").setMessage(t2).setNetworkType(this.getModule(Bn).getNetworkType()).setLevel("error").end(), this.getOuterEmitterInstance().emit(E.ERROR, e3);
        } }, { key: "restartTimer", value: function() {
          xe.l("".concat(this._n, ".restartTimer")), this.stopTimer(), this._startTimer(), this.getModule(Un).restartPolling();
        } }, { key: "getTimerID", value: function() {
          var e3 = this._moduleMap.get(Qn);
          return e3.isWorkerEnabled() ? e3.getTimerID() : this._checkTimer;
        } }, { key: "getPollingTimerID", value: function(e3) {
          return this._moduleMap.get(Un).getPollingTimerID(e3);
        } }, { key: "reset", value: function() {
          xe.l("".concat(this._n, ".reset")), Pe();
          var e3, t2 = D(this._moduleMap);
          try {
            for (t2.s(); !(e3 = t2.n()).done; ) {
              var n2 = v(e3.value, 2)[1];
              n2.reset && n2.reset();
            }
          } catch (r2) {
            t2.e(r2);
          } finally {
            t2.f();
          }
          this._startLoginTs = 0, this._initReadyList(), this._isReady = false, this.stopTimer(), this._outerEmitter.emit(E.SDK_NOT_READY);
          var o2, s2 = D(this._eventThrottleMap);
          try {
            for (s2.s(); !(o2 = s2.n()).done; ) {
              var a2 = v(o2.value, 2)[1];
              a2.timeoutID && clearTimeout(a2.timeoutID);
            }
          } catch (r2) {
            s2.e(r2);
          } finally {
            s2.f();
          }
          this._eventThrottleMap.clear();
        } }]), e2;
      }(), cu = function() {
        function e2(t2) {
          o(this, e2), this._funcMap = /* @__PURE__ */ new Map(), this._m = t2;
        }
        return a(e2, [{ key: "defense", value: function(e3, t2) {
          var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
          if ("string" != typeof e3)
            return null;
          if (0 === e3.length)
            return null;
          if ("function" != typeof t2)
            return null;
          if (this._funcMap.has(e3) && this._funcMap.get(e3).has(t2))
            return this._funcMap.get(e3).get(t2);
          this._funcMap.has(e3) || this._funcMap.set(e3, /* @__PURE__ */ new Map());
          var o2 = null;
          return this._funcMap.get(e3).has(t2) ? o2 = this._funcMap.get(e3).get(t2) : (o2 = this._pack(e3, t2, n2), this._funcMap.get(e3).set(t2, o2)), o2;
        } }, { key: "defenseOnce", value: function(e3, t2) {
          var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
          return "function" != typeof t2 ? null : this._pack(e3, t2, n2);
        } }, { key: "find", value: function(e3, t2) {
          return "string" != typeof e3 || 0 === e3.length || "function" != typeof t2 ? null : this._funcMap.has(e3) && this._funcMap.get(e3).has(t2) ? this._funcMap.get(e3).get(t2) : (this._m.outputWarning("ListenerFnNotFound", e3), null);
        } }, { key: "delete", value: function(e3, t2) {
          return "function" == typeof t2 && (!!this._funcMap.has(e3) && (!!this._funcMap.get(e3).has(t2) && (this._funcMap.get(e3).delete(t2), 0 === this._funcMap.get(e3).size && this._funcMap.delete(e3), true)));
        } }, { key: "_pack", value: function(e3, t2, n2) {
          var o2 = this;
          return function() {
            try {
              t2.apply(n2, Array.from(arguments));
            } catch (u2) {
              var s2 = Object.values(E).indexOf(e3), a2 = "CallbackError";
              if (-1 !== s2) {
                var r2 = Object.keys(E)[s2];
                o2._m.outputWarning(a2, r2, u2);
              }
              var i2 = new ka(a2);
              i2.setMessage("eventName:".concat(e3)).setMoreMessage(u2.message).end();
            }
          };
        } }]), e2;
      }(), lu = function() {
        function e2(t2) {
          o(this, e2);
          var n2 = { SDKAppID: t2.SDKAppID, unlimitedAVChatRoom: t2.unlimitedAVChatRoom || false, scene: t2.scene || "", oversea: t2.oversea || false, instanceID: Rt(), devMode: t2.devMode || false, proxyServer: t2.proxyServer || void 0, fileUploadProxy: t2.fileUploadProxy || void 0, fileDownloadProxy: t2.fileDownloadProxy || t2.fileUploadProxy || void 0 };
          this._m = new uu(n2), this._safetyCallbackFactory = new cu(this._m);
        }
        return a(e2, [{ key: "onError", value: function(e3) {
          this._m.onError(e3);
        } }, { key: "login", value: function(e3) {
          return this._m.login(), this._getModule(An).login(e3);
        } }, { key: "logout", value: function() {
          var e3 = this;
          return this._getModule(An).logout().then(function(t2) {
            return e3._m.reset(), t2;
          });
        } }, { key: "isReady", value: function() {
          return this._m.isReady();
        } }, { key: "isIntl", value: function() {
          return this._m.isIntl();
        } }, { key: "getNotReadyReason", value: function() {
          return this._m.getNotReadyReason();
        } }, { key: "getErrorMessage", value: function(e3, t2, n2) {
          return this._m.getErrorMessage(e3, t2, n2);
        } }, { key: "_getModule", value: function(e3) {
          return this._m.getModule(e3);
        } }, { key: "destroy", value: function() {
          var e3 = this;
          return this.logout().finally(function() {
            e3._m.stopTimer(), e3._getModule(Qn).terminate(), e3._getModule(zn).dealloc();
            var t2 = e3._m.getOuterEmitterInstance(), n2 = e3._getModule(qn);
            t2.emit(E.SDK_DESTROY, { SDKAppID: n2.getSDKAppID() });
          });
        } }, { key: "on", value: function(e3, t2, n2) {
          xe.d("on", "eventName:".concat(e3)), this._m.getOuterEmitterInstance().on(e3, this._safetyCallbackFactory.defense(e3, t2, n2), n2);
        } }, { key: "once", value: function(e3, t2, n2) {
          xe.d("once", "eventName:".concat(e3)), this._m.getOuterEmitterInstance().once(e3, this._safetyCallbackFactory.defenseOnce(e3, t2, n2), n2 || this);
        } }, { key: "off", value: function(e3, t2, n2, o2) {
          xe.d("off", "eventName:".concat(e3));
          var s2 = this._safetyCallbackFactory.find(e3, t2);
          null !== s2 && (this._m.getOuterEmitterInstance().off(e3, s2, n2, o2), this._safetyCallbackFactory.delete(e3, t2));
        } }, { key: "registerPlugin", value: function(e3) {
          at(e3["tim-offline-push-plugin"]) ? this._getModule(Wn).registerPlugin(e3) : this._getModule(to).registerPlugin(e3);
        } }, { key: "setLogLevel", value: function(e3) {
          if (e3 <= 0) {
            var t2 = this.getErrorMessage("TIM_ASCII_ART");
            t2 && console.log(t2);
            var n2 = this.getErrorMessage("API_REFER");
            if (n2) {
              Ht() ? console.log("%c ".concat("IM SDK API ->", " %c"), "background:#ff9d00; padding:1px; border-radius:3px; color: #fff", "background:transparent", n2) : console.log("IM SDK API ->", n2);
            }
            var o2 = this.getErrorMessage("DOCS_GUIDE");
            o2 && console.log(o2);
          }
          xe.setLevel(e3);
        } }, { key: "createTextMessage", value: function(e3) {
          return this._getModule(Rn).createTextMessage(e3);
        } }, { key: "createTextAtMessage", value: function(e3) {
          return this._getModule(Rn).createTextMessage(e3);
        } }, { key: "createImageMessage", value: function(e3) {
          return this._getModule(Rn).createImageMessage(e3);
        } }, { key: "createAudioMessage", value: function(e3) {
          return this._getModule(Rn).createAudioMessage(e3);
        } }, { key: "createVideoMessage", value: function(e3) {
          return this._getModule(Rn).createVideoMessage(e3);
        } }, { key: "createCustomMessage", value: function(e3) {
          return this._getModule(Rn).createCustomMessage(e3);
        } }, { key: "createFaceMessage", value: function(e3) {
          return this._getModule(Rn).createFaceMessage(e3);
        } }, { key: "createFileMessage", value: function(e3) {
          return this._getModule(Rn).createFileMessage(e3);
        } }, { key: "createLocationMessage", value: function(e3) {
          return this._getModule(Rn).createLocationMessage(e3);
        } }, { key: "createMergerMessage", value: function(e3) {
          return this._getModule(Rn).createMergerMessage(e3);
        } }, { key: "downloadMergerMessage", value: function(e3) {
          return e3.type !== S.MSG_MERGER ? Ja({ code: da.MESSAGE_MERGER_TYPE_INVALID }) : jt(e3.payload.downloadKey) ? Ja({ code: da.MESSAGE_MERGER_KEY_INVALID }) : this._getModule(Rn).downloadMergerMessage(e3).catch(function(e4) {
            return Ja({ code: da.MESSAGE_MERGER_DOWNLOAD_FAIL });
          });
        } }, { key: "createForwardMessage", value: function(e3) {
          return this._getModule(Rn).createForwardMessage(e3);
        } }, { key: "sendMessage", value: function(e3, t2) {
          return e3 instanceof Ha ? this._getModule(Rn).sendMessageInstance(e3, t2) : Ja({ code: da.MESSAGE_SEND_NEED_MESSAGE_INSTANCE });
        } }, { key: "callExperimentalAPI", value: function(e3, t2) {
          return "sendComboMessage" === e3 ? this._getModule(so).sendMessage(t2) : "handleGroupInvitation" === e3 ? this._getModule(Un).handleGroupInvitation(t2) : "isCommercialAbilityEnabled" === e3 ? this._getModule(eo).isFeatureEnabled(t2) : "isIntl" === e3 ? this.isIntl() : "sendTRTCCustomData" === e3 ? this._getModule(oo).sendTRTCCustomData(t2) : "getTimerID" === e3 ? this._m.getTimerID() : "getPollingTimerID" === e3 ? this._m.getPollingTimerID(t2) : Ja({ code: da.INVALID_OPERATION });
        } }, { key: "revokeMessage", value: function(e3) {
          return this._getModule(Rn).revokeMessage(e3);
        } }, { key: "resendMessage", value: function(e3) {
          return this._getModule(Rn).resendMessage(e3);
        } }, { key: "deleteMessage", value: function(e3) {
          return this._getModule(Rn).deleteMessage(e3);
        } }, { key: "translateText", value: function(e3) {
          return this._getModule(Rn).translateText(e3);
        } }, { key: "setMessageExtensions", value: function(e3, t2) {
          return this._getModule(Nn).setMessageExtensions(e3, t2);
        } }, { key: "getMessageExtensions", value: function(e3) {
          return this._getModule(Nn).getMessageExtensions(e3);
        } }, { key: "deleteMessageExtensions", value: function(e3, t2) {
          return this._getModule(Nn).deleteMessageExtensions(e3, t2);
        } }, { key: "modifyMessage", value: function(e3) {
          return this._getModule(Rn).modifyRemoteMessage(e3);
        } }, { key: "getMessageList", value: function(e3) {
          return this._getModule(Fn).getMessageList(e3);
        } }, { key: "getMessageListHopping", value: function(e3) {
          return this._getModule(Fn).getMessageListHopping(e3);
        } }, { key: "sendMessageReadReceipt", value: function(e3) {
          return this._getModule(Fn).sendReadReceipt(e3);
        } }, { key: "getMessageReadReceiptList", value: function(e3) {
          return this._getModule(Fn).getReadReceiptList(e3);
        } }, { key: "getGroupMessageReadMemberList", value: function(e3) {
          return this._getModule(Un).getReadReceiptDetail(e3);
        } }, { key: "findMessage", value: function(e3) {
          return this._getModule(Fn).findMessage(e3);
        } }, { key: "setMessageRead", value: function(e3) {
          return this._getModule(Fn).setMessageRead(e3);
        } }, { key: "getConversationList", value: function(e3) {
          return this._getModule(Fn).getConversationList(e3);
        } }, { key: "getConversationProfile", value: function(e3) {
          return this._getModule(Fn).getConversationProfile(e3);
        } }, { key: "deleteConversation", value: function(e3) {
          return this._getModule(Fn).deleteConversation(e3);
        } }, { key: "clearHistoryMessage", value: function(e3) {
          return this._getModule(Fn).clearHistoryMessage(e3);
        } }, { key: "pinConversation", value: function(e3) {
          return this._getModule(Fn).pinConversation(e3);
        } }, { key: "setAllMessageRead", value: function(e3) {
          return this._getModule(Fn).setAllMessageRead(e3);
        } }, { key: "setMessageRemindType", value: function(e3) {
          return this._getModule(Fn).setMessageRemindType(e3);
        } }, { key: "getTotalUnreadMessageCount", value: function() {
          return this._getModule(Fn).getTotalUnreadMessageCount();
        } }, { key: "setConversationCustomData", value: function(e3) {
          return this._getModule(Fn).setConversationCustomData(e3);
        } }, { key: "markConversation", value: function(e3) {
          return this._getModule(Fn).markConversation(e3);
        } }, { key: "getConversationGroupList", value: function() {
          return this._getModule(Fn).getConversationGroupList();
        } }, { key: "createConversationGroup", value: function(e3) {
          return this._getModule(Fn).createConversationGroup(e3);
        } }, { key: "deleteConversationGroup", value: function(e3) {
          return this._getModule(Fn).deleteConversationGroup(e3);
        } }, { key: "renameConversationGroup", value: function(e3) {
          return this._getModule(Fn).renameConversationGroup(e3);
        } }, { key: "addConversationsToGroup", value: function(e3) {
          return this._getModule(Fn).addConversationsToGroup(e3);
        } }, { key: "deleteConversationsFromGroup", value: function(e3) {
          return this._getModule(Fn).deleteConversationsFromGroup(e3);
        } }, { key: "getMyProfile", value: function() {
          return this._getModule(On).getMyProfile();
        } }, { key: "getUserProfile", value: function(e3) {
          return this._getModule(On).getUserProfile(e3);
        } }, { key: "updateMyProfile", value: function(e3) {
          return this._getModule(On).updateMyProfile(e3);
        } }, { key: "getBlacklist", value: function() {
          return this._getModule(On).getLocalBlacklist();
        } }, { key: "addToBlacklist", value: function(e3) {
          return this._getModule(On).addBlacklist(e3);
        } }, { key: "removeFromBlacklist", value: function(e3) {
          return this._getModule(On).deleteBlacklist(e3);
        } }, { key: "setSelfStatus", value: function(e3) {
          return this._getModule(On).setSelfStatus(e3);
        } }, { key: "getUserStatus", value: function(e3) {
          return this._getModule(On).getUserStatus(e3);
        } }, { key: "subscribeUserStatus", value: function(e3) {
          return this._getModule(On).subscribeUserStatus(e3);
        } }, { key: "unsubscribeUserStatus", value: function(e3) {
          return this._getModule(On).unsubscribeUserStatus(e3);
        } }, { key: "getFriendList", value: function() {
          var e3 = this._getModule(Pn);
          return e3 ? e3.getLocalFriendList() : Ja({ code: da.CANNOT_FIND_MODULE });
        } }, { key: "addFriend", value: function(e3) {
          var t2 = this._getModule(Pn);
          return t2 ? t2.addFriend(e3) : Ja({ code: da.CANNOT_FIND_MODULE });
        } }, { key: "deleteFriend", value: function(e3) {
          var t2 = this._getModule(Pn);
          return t2 ? t2.deleteFriend(e3) : Ja({ code: da.CANNOT_FIND_MODULE });
        } }, { key: "checkFriend", value: function(e3) {
          var t2 = this._getModule(Pn);
          return t2 ? t2.checkFriend(e3) : Ja({ code: da.CANNOT_FIND_MODULE });
        } }, { key: "getFriendProfile", value: function(e3) {
          var t2 = this._getModule(Pn);
          return t2 ? t2.getFriendProfile(e3) : Ja({ code: da.CANNOT_FIND_MODULE });
        } }, { key: "updateFriend", value: function(e3) {
          var t2 = this._getModule(Pn);
          return t2 ? t2.updateFriend(e3) : Ja({ code: da.CANNOT_FIND_MODULE });
        } }, { key: "getFriendApplicationList", value: function() {
          var e3 = this._getModule(Pn);
          return e3 ? e3.getLocalFriendApplicationList() : Ja({ code: da.CANNOT_FIND_MODULE });
        } }, { key: "acceptFriendApplication", value: function(e3) {
          var t2 = this._getModule(Pn);
          return t2 ? t2.acceptFriendApplication(e3) : Ja({ code: da.CANNOT_FIND_MODULE });
        } }, { key: "refuseFriendApplication", value: function(e3) {
          var t2 = this._getModule(Pn);
          return t2 ? t2.refuseFriendApplication(e3) : Ja({ code: da.CANNOT_FIND_MODULE });
        } }, { key: "deleteFriendApplication", value: function(e3) {
          var t2 = this._getModule(Pn);
          return t2 ? t2.deleteFriendApplication(e3) : Ja({ code: da.CANNOT_FIND_MODULE });
        } }, { key: "setFriendApplicationRead", value: function() {
          var e3 = this._getModule(Pn);
          return e3 ? e3.setFriendApplicationRead() : Ja({ code: da.CANNOT_FIND_MODULE });
        } }, { key: "getFriendGroupList", value: function() {
          var e3 = this._getModule(Pn);
          return e3 ? e3.getLocalFriendGroupList() : Ja({ code: da.CANNOT_FIND_MODULE });
        } }, { key: "createFriendGroup", value: function(e3) {
          var t2 = this._getModule(Pn);
          return t2 ? t2.createFriendGroup(e3) : Ja({ code: da.CANNOT_FIND_MODULE });
        } }, { key: "deleteFriendGroup", value: function(e3) {
          var t2 = this._getModule(Pn);
          return t2 ? t2.deleteFriendGroup(e3) : Ja({ code: da.CANNOT_FIND_MODULE });
        } }, { key: "addToFriendGroup", value: function(e3) {
          var t2 = this._getModule(Pn);
          return t2 ? t2.addToFriendGroup(e3) : Ja({ code: da.CANNOT_FIND_MODULE });
        } }, { key: "removeFromFriendGroup", value: function(e3) {
          var t2 = this._getModule(Pn);
          return t2 ? t2.removeFromFriendGroup(e3) : Ja({ code: da.CANNOT_FIND_MODULE });
        } }, { key: "renameFriendGroup", value: function(e3) {
          var t2 = this._getModule(Pn);
          return t2 ? t2.renameFriendGroup(e3) : Ja({ code: da.CANNOT_FIND_MODULE });
        } }, { key: "getGroupList", value: function(e3) {
          return this._getModule(Un).getGroupList(e3);
        } }, { key: "getGroupProfile", value: function(e3) {
          return this._getModule(Un).getGroupProfile(e3);
        } }, { key: "createGroup", value: function(e3) {
          return this._getModule(Un).createGroup(e3);
        } }, { key: "dismissGroup", value: function(e3) {
          return this._getModule(Un).dismissGroup(e3);
        } }, { key: "updateGroupProfile", value: function(e3) {
          return this._getModule(Un).updateGroupProfile(e3);
        } }, { key: "joinGroup", value: function(e3) {
          return this._getModule(Un).joinGroup(e3);
        } }, { key: "quitGroup", value: function(e3) {
          return this._getModule(Un).quitGroup(e3);
        } }, { key: "searchGroupByID", value: function(e3) {
          return this._getModule(Un).searchGroupByID(e3);
        } }, { key: "getGroupOnlineMemberCount", value: function(e3) {
          return this._getModule(Un).getGroupOnlineMemberCount(e3);
        } }, { key: "changeGroupOwner", value: function(e3) {
          return this._getModule(Un).changeGroupOwner(e3);
        } }, { key: "getGroupApplicationList", value: function() {
          return this._getModule(Un).getGroupApplicationList();
        } }, { key: "handleGroupApplication", value: function(e3) {
          return this._getModule(Un).handleGroupApplication(e3);
        } }, { key: "initGroupAttributes", value: function(e3) {
          return this._getModule(Un).initGroupAttributes(e3);
        } }, { key: "setGroupAttributes", value: function(e3) {
          return this._getModule(Un).setGroupAttributes(e3);
        } }, { key: "deleteGroupAttributes", value: function(e3) {
          return this._getModule(Un).deleteGroupAttributes(e3);
        } }, { key: "getGroupAttributes", value: function(e3) {
          return this._getModule(Un).getGroupAttributes(e3);
        } }, { key: "setGroupCounters", value: function(e3) {
          return this._getModule(Un).setGroupCounters(e3);
        } }, { key: "increaseGroupCounter", value: function(e3) {
          return this._getModule(Un).increaseGroupCounter(e3);
        } }, { key: "decreaseGroupCounter", value: function(e3) {
          return this._getModule(Un).decreaseGroupCounter(e3);
        } }, { key: "getGroupCounters", value: function(e3) {
          return this._getModule(Un).getGroupCounters(e3);
        } }, { key: "getGroupMemberList", value: function(e3) {
          return this._getModule(bn).getGroupMemberList(e3);
        } }, { key: "getGroupMemberProfile", value: function(e3) {
          return this._getModule(bn).getGroupMemberProfile(e3);
        } }, { key: "addGroupMember", value: function(e3) {
          return this._getModule(bn).addGroupMember(e3);
        } }, { key: "deleteGroupMember", value: function(e3) {
          return this._getModule(bn).deleteGroupMember(e3);
        } }, { key: "setGroupMemberMuteTime", value: function(e3) {
          return this._getModule(bn).setGroupMemberMuteTime(e3);
        } }, { key: "setGroupMemberRole", value: function(e3) {
          return this._getModule(bn).setGroupMemberRole(e3);
        } }, { key: "setGroupMemberNameCard", value: function(e3) {
          return this._getModule(bn).setGroupMemberNameCard(e3);
        } }, { key: "setGroupMemberCustomField", value: function(e3) {
          return this._getModule(bn).setGroupMemberCustomField(e3);
        } }, { key: "markGroupMemberList", value: function(e3) {
          return this._getModule(bn).markGroupMemberList(e3);
        } }, { key: "getJoinedCommunityList", value: function() {
          return this._getModule(wn).getJoinedCommunityList();
        } }, { key: "createTopicInCommunity", value: function(e3) {
          return this._getModule(wn).createTopicInCommunity(e3);
        } }, { key: "deleteTopicFromCommunity", value: function(e3) {
          return this._getModule(wn).deleteTopicFromCommunity(e3);
        } }, { key: "updateTopicProfile", value: function(e3) {
          return this._getModule(wn).updateTopicProfile(e3);
        } }, { key: "getTopicList", value: function(e3) {
          return this._getModule(wn).getTopicList(e3);
        } }]), e2;
      }(), pu = { login: 1, logout: 1, destroy: 1, on: 1, off: 1, ready: 1, setLogLevel: 1, joinGroup: 1, quitGroup: 1, registerPlugin: 1, getGroupOnlineMemberCount: 1 };
      function du(e2, t2) {
        if (e2.isReady() || 1 === pu[t2])
          return true;
        var n2 = e2.getNotReadyReason(), o2 = { code: n2, message: "".concat(e2.getErrorMessage(n2), " | ").concat(t2, " | ").concat(e2.getErrorMessage(da.SDK_IS_NOT_READY)) };
        return e2.onError(o2), o2;
      }
      var gu = {}, _u = {};
      return _u.create = function(e2) {
        var n2 = 0, o2 = e2.SDKAppID;
        if ($e(o2))
          n2 = o2;
        else if (n2 = parseInt(o2), isNaN(o2))
          return xe.e("".concat("TIM.create", " failed. Failed to parse the SDKAppID, please check the arguments")), null;
        if (n2 && gu[n2])
          return gu[n2];
        xe.l("".concat("TIM.create"));
        var s2 = new lu(t(t({}, e2), {}, { SDKAppID: n2 }));
        s2.on(E.SDK_DESTROY, function(e3) {
          gu[e3.data.SDKAppID] = null, delete gu[e3.data.SDKAppID];
        });
        var a2 = function(e3) {
          var t2 = /* @__PURE__ */ Object.create(null);
          return Object.keys(Ln).forEach(function(n3) {
            if (e3[n3]) {
              var o3 = new k();
              t2[n3] = function() {
                var t3 = Array.from(arguments);
                return o3.use(function(t4, o4) {
                  var s3 = du(e3, n3);
                  return true === s3 ? o4() : Ja(s3);
                }).use(function(e4, t4) {
                  if (true === zt(e4, kn[n3], n3))
                    return t4();
                }).use(function(t4, o4) {
                  return e3[n3].apply(e3, t4);
                }), o3.run(t3);
              };
            }
          }), t2;
        }(s2);
        return gu[n2] = a2, kn.hookGetAPITips(s2.getErrorMessage.bind(s2)), xe.l("".concat("TIM.create", " ok")), a2;
      }, _u.TYPES = S, _u.EVENT = E, _u.VERSION = "2.27.5", xe.l("TIM.VERSION:".concat(_u.VERSION)), _u;
    });
  }
});
export default require_tim_js();
//# sourceMappingURL=tim-js-sdk.js.map
