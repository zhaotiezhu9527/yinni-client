import {
  __commonJS
} from "./chunk-RSJERJUL.js";

// ../../../../../../Users/riverwater/Desktop/project/self/web/im-app/node_modules/aegis-web-sdk/lib/aegis.min.js
var require_aegis_min = __commonJS({
  "../../../../../../Users/riverwater/Desktop/project/self/web/im-app/node_modules/aegis-web-sdk/lib/aegis.min.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Aegis = t();
    }(exports, function() {
      "use strict";
      var _, j;
      function H(e2) {
        this.name = "__st" + (1e9 * Math.random() >>> 0) + _ + "__", null != e2 && e2.forEach(this.add, this), _ += 1;
      }
      Array.prototype.find || Object.defineProperty(Array.prototype, "find", { configurable: true, writable: true, value: function(e2) {
        if (null === this)
          throw new TypeError('"this" is null or not defined');
        var t2 = Object(this), n2 = t2.length >>> 0;
        if ("function" != typeof e2)
          throw new TypeError("predicate must be a function");
        for (var r2 = arguments[1], o2 = 0; o2 < n2; ) {
          var i2 = t2[o2];
          if (e2.call(r2, i2, o2, t2))
            return i2;
          o2 += 1;
        }
      } }), window.WeakSet || (_ = Date.now() % 1e9, H.prototype.add = function(e2) {
        var t2 = this.name;
        return e2[t2] || Object.defineProperty(e2, t2, { value: true, writable: true }), this;
      }, H.prototype.delete = function(e2) {
        return !!e2[this.name] && !(e2[this.name] = void 0);
      }, H.prototype.has = function(e2) {
        return !!e2[this.name];
      }, j = H, Object.defineProperty(window, "WeakSet", { value: function(e2) {
        return new j(e2);
      } })), Object.assign || Object.defineProperty(Object, "assign", { enumerable: false, configurable: true, writable: true, value: function(e2) {
        if (null == e2)
          throw new TypeError("Cannot convert first argument to object");
        for (var t2 = Object(e2), n2 = 1; n2 < arguments.length; n2++)
          if (null != (r2 = arguments[n2]))
            for (var r2 = Object(r2), o2 = Object.keys(Object(r2)), i2 = 0, a2 = o2.length; i2 < a2; i2++) {
              var s2 = o2[i2], c2 = Object.getOwnPropertyDescriptor(r2, s2);
              null != c2 && c2.enumerable && (t2[s2] = r2[s2]);
            }
        return t2;
      } });
      var B = function(e2, t2) {
        return (B = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? function(e3, t3) {
          e3.__proto__ = t3;
        } : function(e3, t3) {
          for (var n2 in t3)
            Object.prototype.hasOwnProperty.call(t3, n2) && (e3[n2] = t3[n2]);
        }))(e2, t2);
      }, l = function() {
        return (l = Object.assign || function(e2) {
          for (var t2, n2 = 1, r2 = arguments.length; n2 < r2; n2++)
            for (var o2 in t2 = arguments[n2])
              Object.prototype.hasOwnProperty.call(t2, o2) && (e2[o2] = t2[o2]);
          return e2;
        }).apply(this, arguments);
      };
      function u() {
        for (var e2 = 0, t2 = 0, n2 = arguments.length; t2 < n2; t2++)
          e2 += arguments[t2].length;
        for (var r2 = Array(e2), o2 = 0, t2 = 0; t2 < n2; t2++)
          for (var i2 = arguments[t2], a2 = 0, s2 = i2.length; a2 < s2; a2++, o2++)
            r2[o2] = i2[a2];
        return r2;
      }
      var n, D = /_?t(\d)?(imestamp)?=\d+&?/g, M = ["aegis.qq.com", "tamaegis.com", "/aegis-sdk", "rumt-", "/flog.core.min.js", "pingfore.qq.com", "pingfore.tencent.com", "zhiyan.tencent-cloud.net", "h.trace.qq.com", "btrace.qq.com", "beacon.qq.com", "dmplog.qq.com", "qq.com/report", "svibeacon.onezapp.com", "cube.weixinbridge.com", "doubleclick.net", "pcmgrmonitor.3g.qq.com", "tdm.qq.com", "report.qqweb.qq.com", "tpstelemetry.tencent.com", "insight.cloud.tencent.com", "facebook.com", "facebook.net", "google", "yahoo.com", "twitter.com", "ga-audiences", "report.idqqimg.com", "arms-retcode.aliyuncs.com", "px.effirst.com", "sentry", "baidu.com", "hot-update.json", "u.c.b.r.o.w.s.e.r", "report.url.cn", "sockjs-node", "m3u8"], F = ["ResizeObserver loop limit exceeded", "ResizeObserver loop completed", "Failed to execute 'transaction'", "window.indexedDB.deleteDatabase is not a function"], W = ["ext1", "ext2", "ext3", "level", "trace", "tag", "seq", "code"], G = ["static", "fetch"], X = (e.prototype.indexOf = function(e2, t2) {
        for (var n2 = 0; n2 < e2.length; n2++)
          if (e2[n2].callback === t2)
            return n2;
        return -1;
      }, e.prototype.on = function(e2, t2, n2) {
        var r2;
        if (void 0 === n2 && (n2 = 0), this)
          return (r2 = this.eventsList[e2]) || (this.eventsList[e2] = [], r2 = this.eventsList[e2]), -1 === this.indexOf(r2, t2) && r2.push({ name: e2, type: n2 || 0, callback: t2 }), this;
      }, e.prototype.one = function(e2, t2) {
        this.on(e2, t2, 1);
      }, e.prototype.remove = function(e2, t2) {
        if (this) {
          var n2 = this.eventsList[e2];
          if (n2) {
            if (t2)
              return n2.length && (t2 = this.indexOf(n2, t2), n2.splice(t2, 1)), this;
            try {
              delete this.eventsList[e2];
            } catch (e3) {
            }
          }
          return null;
        }
      }, e.prototype.clear = function() {
        this.eventsList = {};
      }, e), V = function(e2) {
        if (!e2 || 0 === e2.length)
          return "{}";
        e2 = Array.isArray(e2) ? e2 : [e2];
        var t2 = Object.keys(e2[0]), n2 = {};
        return t2.forEach(function(t3) {
          n2[t3] = e2.map(function(e3) {
            return e3[t3];
          });
        }), n2.count = e2.length, le(n2);
      };
      function e() {
        var a2 = this;
        this.emit = function(e2, t2) {
          if (a2) {
            var n2;
            if (null != (r2 = a2.eventsList[e2]) && r2.length)
              for (var r2 = r2.slice(), o2 = 0; o2 < r2.length; o2++) {
                n2 = r2[o2];
                try {
                  var i2 = n2.callback.apply(a2, [t2]);
                  if (1 === n2.type && a2.remove(e2, n2.callback), false === i2)
                    break;
                } catch (e3) {
                  throw e3;
                }
              }
            return a2;
          }
        }, this.eventsList = {};
      }
      (r = n = n || {})[r.number = -1] = "number", r.string = "";
      function J(e2, t2) {
        return "number" == typeof e2 || "string" == typeof e2 ? e2 : t2 ? n.string : n.number;
      }
      function P(e2, t2) {
        return "string" == typeof e2 ? e2.split("?")[t2 ? 1 : 0] || "" : e2;
      }
      function $(e2, t2) {
        return void 0 === t2 && (t2 = 2048), String(e2).replace(D, "").slice(0, t2);
      }
      function K(e2) {
        return "string" == typeof e2 && /^\//.test(e2) ? "https:" === (null === location || void 0 === location ? void 0 : location.protocol) : /^https/.test(e2);
      }
      function z(e2, t2, n2) {
        var r2, o2;
        try {
          if ("function" == typeof (null == t2 ? void 0 : t2.retCodeHandler))
            return { code: void 0 === (i2 = (o2 = t2.retCodeHandler(e2, null == n2 ? void 0 : n2.url, null == n2 ? void 0 : n2.ctx, null == n2 ? void 0 : n2.payload) || {}).code) ? "unknown" : i2, isErr: o2.isErr };
          if (!(e2 = "string" == typeof e2 ? JSON.parse(e2) : e2))
            return { code: "unknown", isErr: false };
          "function" == typeof (null == (r2 = null == t2 ? void 0 : t2.ret) ? void 0 : r2.join) && (ce = [].concat(t2.ret.map(function(e3) {
            return e3.toLowerCase();
          })));
          var i2, a2 = Object.getOwnPropertyNames(e2).filter(function(e3) {
            return -1 !== ce.indexOf(e3.toLowerCase());
          });
          return a2.length ? { code: "" + (i2 = "未知" !== (i2 = e2[a2[0]]) && "" !== i2 ? i2 : "unknown"), isErr: 0 !== i2 && "0" !== i2 && "unknown" !== i2 } : { code: "unknown", isErr: false };
        } catch (e3) {
          return { code: "unknown", isErr: false };
        }
      }
      function x(e2, t2, n2) {
        try {
          var r2 = "function" == typeof t2 ? t2(e2, null == n2 ? void 0 : n2.url) || "" : e2;
          return fe(r2).slice(0, 102400);
        } catch (e3) {
          return "";
        }
      }
      function Q() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e2) {
          var t2 = 16 * Math.random() | 0;
          return ("x" === e2 ? t2 : 3 & t2 | 8).toString(16);
        });
      }
      function k(t2, e2) {
        return "string" != typeof t2 || !t2 || e2 && -1 < t2.indexOf(e2) || he.test(t2) || M.some(function(e3) {
          return -1 < t2.indexOf(e3);
        });
      }
      function Y(n2, r2) {
        var o2, i2 = [], a2 = n2.config;
        return n2.lifeCycle.on("destroy", function() {
          i2.length = 0;
        }), function(e2, t2) {
          Array.isArray(e2) ? i2 = i2.concat(e2) : i2.push(e2), r2 && i2.length >= r2 || n2.sendNow && 0 < i2.length ? (i2 = ge(i2), t2(i2.splice(0, i2.length)), o2 && clearTimeout(o2)) : (o2 && clearTimeout(o2), o2 = setTimeout(function() {
            o2 = null, 0 < (i2 = ge(i2)).length && t2(i2.splice(0, i2.length));
          }, a2.delay));
        };
      }
      function Z(e2, t2) {
        return Array.isArray(e2) ? t2(e2.map(function(e3) {
          return t3 = l(l({}, e3), { msg: "string" == typeof e3.msg ? e3.msg : [].concat(e3.msg).map(y).join(" ") }), W.forEach(function(e4) {
            t3[e4] || delete t3[e4];
          }), t3;
          var t3;
        })) : t2([l(l({}, e2), { msg: "string" == typeof e2.msg ? e2.msg : y(e2.msg) })]);
      }
      function ee(c2, u2) {
        return function(e2, t2) {
          var n2, r2, o2, i2 = Array.isArray(e2), a2 = i2 ? e2 : [e2], s2 = (c2.lifeCycle.emit("beforeRequest", e2), c2.config.beforeRequest);
          (a2 = "function" == typeof s2 ? a2.map(function(t3) {
            try {
              var e3 = s2({ logs: t3, logType: u2 });
              return (null == e3 ? void 0 : e3.logType) === u2 && null != e3 && e3.logs ? e3.logs : false !== e3 && t3;
            } catch (e4) {
              return t3;
            }
          }).filter(function(e3) {
            return false !== e3;
          }) : a2).length && (n2 = a2, e2 = W, !Array.isArray(n2) || n2.length <= 1 || (r2 = [], o2 = [], !(o2 = "string" == typeof e2 ? [e2] : e2)) || o2.length <= 0 || (o2.forEach(function(t3) {
            n2.forEach(function(e3) {
              null != e3 && e3[t3] && r2.push(t3);
            });
          }), 0 < r2.length && (n2 = n2.map(function(e3) {
            var t3 = {};
            return r2.forEach(function(e4) {
              t3[e4] = "";
            }), l(l({}, t3), e3);
          }))), a2 = n2, t2(i2 ? a2 : a2[0]));
        };
      }
      function te(o2) {
        return function(e2, t2) {
          o2.lifeCycle.emit("modifyRequest", e2);
          var n2 = o2.config.modifyRequest;
          if ("function" == typeof n2)
            try {
              var r2 = n2(e2);
              "object" == typeof r2 && "url" in r2 && (e2 = r2);
            } catch (e3) {
              console.error(e3);
            }
          t2(e2);
        };
      }
      function ne(r2) {
        return function(e2, t2) {
          null != (n2 = r2.lifeCycle) && n2.emit("afterRequest", e2);
          var n2 = (r2.config || {}).afterRequest;
          "function" == typeof n2 && false === n2(e2) || t2(e2);
        };
      }
      function m(n2) {
        if (n2 && n2.reduce && n2.length)
          return 1 === n2.length ? function(e2, t2) {
            n2[0](e2, t2 || be);
          } : n2.reduce(function(n3, r2) {
            return function(e2, t2) {
              return void 0 === t2 && (t2 = be), n3(e2, function(e3) {
                return null == r2 ? void 0 : r2(e3, t2);
              });
            };
          });
        throw new TypeError("createPipeline need at least one function param");
      }
      function re(t2, n2) {
        Object.getOwnPropertyNames(t2).forEach(function(e2) {
          "function" == typeof t2[e2] && "constructor" !== e2 && (n2 ? n2[e2] = "sendPipeline" === e2 ? function() {
            return function() {
            };
          } : function() {
          } : t2[e2] = function() {
          });
        });
      }
      function oe() {
        return void 0 !== window.performance && "function" == typeof performance.getEntriesByType && "function" == typeof performance.now;
      }
      function ie(t2, n2) {
        function r2(e2) {
          "pagehide" !== e2.type && "hidden" !== document.visibilityState || (t2(e2), n2 && (removeEventListener("visibilitychange", r2, true), removeEventListener("pagehide", r2, true)));
        }
        addEventListener("visibilitychange", r2, true), addEventListener("pagehide", r2, true);
      }
      function t(e2) {
        return -1 !== Se.indexOf(e2);
      }
      var L, v, f, ae = ["application/xhtml+xml", "application/xml", "application/pdf", "application/pkcs12", "application/javascript", "application/x-javascript", "application/ecmascript", "application/vnd.mspowerpoint", "application/vnd.apple.mpegurl", "application/ogg", "text/css", "text/javascript", "image", "audio", "video", "video/mp2t"], se = /\.(json|js|css|jpg|jpeg|png|svg|apng|webp|gif|bmp|mp4|mp3|ts|mpeg|wav|webm|ogg|flv|m3u8|ttf|woff2|otf|eot|woff|html|htm|shtml|shtm|)$/gi, ce = ["ret", "retcode", "code", "errcode"], ue = function() {
        var n2 = /* @__PURE__ */ new WeakSet();
        return function(e2, t2) {
          if (t2 instanceof Error)
            return "Error.message: " + t2.message + " \n  Error.stack: " + t2.stack;
          if ("object" == typeof t2 && null !== t2) {
            if (n2.has(t2))
              return "[Circular " + (e2 || "root") + "]";
            n2.add(t2);
          }
          return t2;
        };
      }, y = function(e2) {
        if ("string" == typeof e2)
          return e2;
        try {
          return e2 instanceof Error ? (JSON.stringify(e2, ue(), 4) || "undefined").replace(/"/gim, "") : JSON.stringify(e2, ue(), 4) || "undefined";
        } catch (e3) {
          return "error happen when aegis stringify: \n " + e3.message + " \n " + e3.stack;
        }
      }, le = function(e2) {
        if ("string" == typeof e2)
          return e2;
        try {
          return JSON.stringify(e2, ue()) || "undefined";
        } catch (e3) {
          return "error happen when aegis stringify: \n " + e3.message + " \n " + e3.stack;
        }
      }, fe = function(n2, r2) {
        void 0 === r2 && (r2 = 3);
        var o2, i2, a2, s2 = "";
        return Array.isArray(n2) ? (s2 += "[", o2 = n2.length, n2.forEach(function(e2, t2) {
          s2 = (s2 += "object" == typeof e2 && 1 < r2 ? fe(e2, r2 - 1) : pe(e2)) + (t2 === o2 - 1 ? "" : ",");
        }), s2 += "]") : n2 instanceof Object ? (s2 = "{", i2 = Object.keys(n2), a2 = i2.length, i2.forEach(function(e2, t2) {
          "object" == typeof n2[e2] && 1 < r2 ? s2 += '"' + e2 + '":' + fe(n2[e2], r2 - 1) : s2 += de(e2, n2[e2]), s2 += t2 === a2 - 1 || t2 < a2 - 1 && void 0 === n2[i2[t2 + 1]] ? "" : ",";
        }), s2 += "}") : s2 += n2, s2;
      }, de = function(e2, t2) {
        var n2 = typeof t2, r2 = "";
        return "string" == n2 || "object" == n2 ? r2 += '"' + e2 + '":"' + t2 + '"' : "function" == typeof t2 ? r2 += '"' + e2 + '":"function ' + t2.name + '"' : "symbol" == typeof t2 ? r2 += '"' + e2 + '":"symbol"' : "number" != typeof t2 && "boolean" != n2 || (r2 += '"' + e2 + '": ' + t2), r2;
      }, pe = function(e2) {
        var t2 = typeof e2;
        return "" + ("undefined" == t2 || "symbol" == t2 || "function" == t2 ? "null" : "string" == t2 || "object" == t2 ? '"' + e2 + '"' : e2);
      }, he = /data:(image|text|application|font)\/.*;base64/, ge = ((r = L = L || {}).INFO_ALL = "-1", r.API_RESPONSE = "1", r.INFO = "2", r.ERROR = "4", r.PROMISE_ERROR = "8", r.AJAX_ERROR = "16", r.SCRIPT_ERROR = "32", r.IMAGE_ERROR = "64", r.CSS_ERROR = "128", r.CONSOLE_ERROR = "256", r.MEDIA_ERROR = "512", r.RET_ERROR = "1024", r.REPORT = "2048", r.PV = "4096", r.EVENT = "8192", r.PAGE_NOT_FOUND_ERROR = "16384", r.WEBSOCKET_ERROR = "32768", r.BRIDGE_ERROR = "65536", r.LAZY_LOAD_ERROR = "131072", (r = v = v || {}).LOG = "log", r.SPEED = "speed", r.PERFORMANCE = "performance", r.OFFLINE = "offline", r.WHITE_LIST = "whiteList", r.VITALS = "vitals", r.PV = "pv", r.CUSTOM_PV = "customPV", r.EVENT = "event", r.CUSTOM = "custom", r.SDK_ERROR = "sdkError", r.SET_DATA = "setData", r.LOAD_PACKAGE = "loadPackage", (r = f = f || {}).production = "production", r.development = "development", r.gray = "gray", r.pre = "pre", r.daily = "daily", r.local = "local", r.test = "test", r.others = "others", function(e2) {
        return e2.filter(function(n2, r2) {
          return "static" !== n2.type || !e2.find(function(e3, t2) {
            return n2.url === e3.url && 200 === n2.status && r2 < t2;
          });
        });
      }), me = function(e2) {
        e2.level === L.INFO_ALL && (e2.level = L.INFO);
      }, w = {}, b = {}, ve = function(e2) {
        return w[e2] || (w[e2] = setTimeout(function() {
          b[e2] = {}, w[e2] = null;
        }, 6e4)), w[e2];
      }, ye = function(e2) {
        return (Array.isArray(e2) ? e2 : [e2]).map(function(n2) {
          return Object.getOwnPropertyNames(n2).reduce(function(e3, t2) {
            return "ctx" !== t2 && (e3[t2] = n2[t2]), e3;
          }, { level: L.INFO, msg: "" });
        });
      }, we = function(r2) {
        return function(e2) {
          return r2.sendPipeline([function(e3, n2) {
            return n2({ url: r2.config.url || "", data: V(ye(e3)), method: "post", contentType: "application/json", type: v.LOG, log: e3, requestConfig: { timeout: 5e3 }, success: function() {
              var t2 = r2.config.onReport;
              "function" == typeof t2 && e3.forEach(function(e4) {
                t2(e4);
              }), "function" == typeof n2 && n2([]);
            } });
          }], v.LOG)(e2);
        };
      }, be = function() {
      }, r = (Object.defineProperty(E.prototype, "__version__", { get: function() {
        return console.warn("__version__ has discard, please use version"), "1.37.9";
      }, enumerable: false, configurable: true }), Object.defineProperty(E.prototype, "LogType", { get: function() {
        return console.warn("LogType has discard, please use logType"), L;
      }, enumerable: false, configurable: true }), E.prototype.init = function(e2) {
        this.setConfig(e2);
        for (var t2 = 0; t2 < E.installedPlugins.length; t2++)
          try {
            E.installedPlugins[t2].patch(this);
          } catch (e3) {
            this.sendSDKError(e3);
          }
        this.lifeCycle.emit("onInited");
      }, E.prototype.setConfig = function(e2) {
        Object.assign(this.config, e2);
        var e2 = this.config, t2 = e2.id, n2 = e2.uin, r2 = e2.version, o2 = e2.ext1, i2 = e2.ext2, a2 = e2.ext3, s2 = e2.aid, c2 = e2.env, u2 = void 0 === c2 ? "production" : c2, c2 = e2.pageUrl, e2 = this.bean.id !== t2 || this.bean.uin !== n2 || this.bean.aid !== s2;
        return this.bean.id = t2 || "", this.bean.uin = n2 || "", this.bean.version = r2 || "1.37.9", this.bean.aid = s2 || "", this.bean.env = function() {
          switch (u2) {
            case f.production:
            case f.development:
            case f.gray:
            case f.pre:
            case f.daily:
            case f.local:
            case f.test:
            case f.others:
              return 1;
            default:
              return;
          }
        }() ? u2 : f.others, c2 && this.extendBean("from", encodeURIComponent(c2.slice(0, 2048))), o2 && this.extendBean("ext1", encodeURIComponent(o2)), i2 && this.extendBean("ext2", encodeURIComponent(i2)), a2 && this.extendBean("ext3", encodeURIComponent(a2)), e2 && this.lifeCycle.emit("onConfigChange", this.config), this.config;
      }, E.use = function(e2) {
        -1 === E.installedPlugins.indexOf(e2) && e2.aegisPlugin && E.installedPlugins.push(e2);
      }, E.unuse = function(e2) {
        e2 = E.installedPlugins.indexOf(e2);
        -1 !== e2 && E.installedPlugins.splice(e2, 1);
      }, E.prototype.info = function() {
        for (var e2 = [], t2 = 0; t2 < arguments.length; t2++)
          e2[t2] = arguments[t2];
        var n2 = { level: L.INFO, msg: e2 };
        1 === e2.length && e2[0].msg && Object.assign(n2, l({}, e2[0]), { level: L.INFO }), this.normalLogPipeline(n2);
      }, E.prototype.infoAll = function() {
        for (var e2 = [], t2 = 0; t2 < arguments.length; t2++)
          e2[t2] = arguments[t2];
        var n2 = { level: L.INFO_ALL, msg: e2 };
        1 === e2.length && e2[0].msg && Object.assign(n2, l({}, e2[0]), { level: L.INFO_ALL }), this.normalLogPipeline(n2);
      }, E.prototype.report = function() {
        for (var e2 = [], t2 = 0; t2 < arguments.length; t2++)
          e2[t2] = arguments[t2];
        var n2 = { level: L.REPORT, msg: e2 };
        1 === e2.length && e2[0].msg && Object.assign(n2, l({}, e2[0])), this.normalLogPipeline(n2);
      }, E.prototype.error = function() {
        for (var e2 = [], t2 = 0; t2 < arguments.length; t2++)
          e2[t2] = arguments[t2];
        var n2 = { level: L.ERROR, msg: e2 };
        1 === e2.length && e2[0].msg && Object.assign(n2, l({}, e2[0]), { level: L.ERROR }), this.normalLogPipeline(n2);
      }, E.prototype.speedLogPipeline = function(e2) {
        throw new Error('You need to override "speedLogPipeline" method');
      }, E.prototype.reportPv = function(n2) {
        var r2, o2 = this;
        n2 && (console.warn("reportPv is deprecated, please use reportEvent"), r2 = "" + Object.getOwnPropertyNames(this.bean).filter(function(e2) {
          return "id" !== e2;
        }).map(function(e2) {
          return e2 + "=" + o2.bean[e2];
        }).join("&"), this.sendPipeline([function(e2, t2) {
          t2({ url: o2.config.url + "/" + n2 + "?" + r2, addBean: false, type: v.CUSTOM_PV });
        }], v.CUSTOM_PV)(null));
      }, E.prototype.reportEvent = function(e2) {
        e2 && ((e2 = "string" == typeof e2 ? { name: e2, ext1: this.config.ext1 || "", ext2: this.config.ext2 || "", ext3: this.config.ext3 || "" } : e2).name ? ("string" != typeof e2.name && (console.warn("reportEvent params name must be string"), e2.name = String(e2.name)), this.eventPipeline(e2)) : console.warn("reportEvent params error"));
      }, E.prototype.reportTime = function(e2, t2) {
        if ("object" == typeof e2)
          return this.reportT(e2);
        "string" == typeof e2 ? "number" == typeof t2 ? t2 < 0 || 6e4 < t2 ? console.warn("reportTime: duration must between 0 and 60000") : this.submitCustomTime(e2, t2) : console.warn("reportTime: second param must be number") : console.warn("reportTime: first param must be a string");
      }, E.prototype.reportT = function(e2) {
        var t2 = e2.name, n2 = e2.duration, r2 = e2.ext1, r2 = void 0 === r2 ? "" : r2, o2 = e2.ext2, o2 = void 0 === o2 ? "" : o2, i2 = e2.ext3, i2 = void 0 === i2 ? "" : i2, e2 = e2.from;
        if ("string" == typeof t2 && "number" == typeof n2 && "string" == typeof r2 && "string" == typeof o2 && "string" == typeof i2) {
          if (!(n2 < 0 || 6e4 < n2))
            return this.submitCustomTime(t2, n2, r2, o2, i2, void 0 === e2 ? "" : e2);
          console.warn("reportTime: duration must between 0 and 60000");
        } else
          console.warn("reportTime: params error");
      }, E.prototype.time = function(e2) {
        "string" == typeof e2 ? this.timeMap[e2] ? console.warn("Timer " + e2 + " already exists") : this.timeMap[e2] = Date.now() : console.warn("time: first param must be a string");
      }, E.prototype.timeEnd = function(e2) {
        "string" == typeof e2 ? this.timeMap[e2] ? (this.submitCustomTime(e2, Date.now() - this.timeMap[e2]), delete this.timeMap[e2]) : console.warn("Timer " + e2 + " does not exist") : console.warn("timeEnd: first param must be a string");
      }, E.prototype.submitCustomTime = function(e2, t2, n2, r2, o2, i2) {
        this.customTimePipeline({ name: e2, duration: t2, ext1: n2 || this.config.ext1, ext2: r2 || this.config.ext2, ext3: o2 || this.config.ext3, from: i2 || void 0 });
      }, E.prototype.extendBean = function(e2, t2) {
        this.bean[e2] = t2;
      }, E.prototype.sendPipeline = function(e2, t2) {
        var n2, i2 = this;
        return m(u([function(e3, t3) {
          if ("number" != typeof n2.config.random && (console.warn("random must in [0, 1], default is 1."), n2.config.random = 1), !n2.isHidden || !n2.isGetSample)
            if (n2.isGetSample)
              n2.isHidden || t3(e3);
            else {
              if (n2.isGetSample = true, Math.random() < n2.config.random)
                return n2.isHidden = false, t3(e3);
              n2.isHidden = true;
            }
        }, ee(n2 = this, t2)], e2, [te(this), function(r2, o2) {
          i2.request(r2, function() {
            for (var e3 = [], t3 = 0; t3 < arguments.length; t3++)
              e3[t3] = arguments[t3];
            var n3 = false;
            -1 < ("" + e3[i2.failRequestCount = 0]).indexOf("403 forbidden") && (n3 = true, i2.destroy()), o2({ isErr: n3, result: e3, logType: null == r2 ? void 0 : r2.type, logs: null == r2 ? void 0 : r2.log }), null != (n3 = null == r2 ? void 0 : r2.success) && n3.call.apply(n3, u([r2], e3));
          }, function() {
            for (var e3, t3 = [], n3 = 0; n3 < arguments.length; n3++)
              t3[n3] = arguments[n3];
            60 <= ++i2.failRequestCount && i2.destroy(), -1 < ("" + t3[0]).indexOf("403 forbidden") && i2.destroy(), o2({ isErr: true, result: t3, logType: null == r2 ? void 0 : r2.type, logs: null == r2 ? void 0 : r2.log }), null != (e3 = null == r2 ? void 0 : r2.fail) && e3.call.apply(e3, u([r2], t3));
          });
        }, ne(this)]));
      }, E.prototype.send = function(e2, o2, i2) {
        var t2 = this;
        return m([te(this), function(n2, r2) {
          t2.request(n2, function() {
            for (var e3 = [], t3 = 0; t3 < arguments.length; t3++)
              e3[t3] = arguments[t3];
            r2({ isErr: false, result: e3, logType: n2.type, logs: n2.log }), null != o2 && o2.apply(void 0, e3);
          }, function() {
            for (var e3 = [], t3 = 0; t3 < arguments.length; t3++)
              e3[t3] = arguments[t3];
            r2({ isErr: true, result: e3, logType: n2.type, logs: n2.log }), null != i2 && i2.apply(void 0, e3);
          });
        }, ne(this)])(e2);
      }, E.prototype.ready = function(e2, t2, n2) {
        throw new Error('You need to override "ready" method');
      }, E.prototype.request = function(e2, t2, n2) {
        throw new Error('You need to override "request" method');
      }, E.prototype.sendSDKError = function(e2) {
        var n2 = this;
        this.sendPipeline([function(e3, t2) {
          t2({ url: n2.config.url + "?id=1085&msg[0]=" + encodeURIComponent(y(e3)) + "&level[0]=2&from=" + n2.config.id + "&count=1&version=" + n2.config.id + "(1.37.9)", addBean: false, method: "get", type: v.SDK_ERROR, log: e3 });
        }], v.SDK_ERROR)(e2);
      }, E.prototype.destroy = function(e2) {
        void 0 === e2 && (e2 = false);
        var t2, n2, r2 = E.instances.indexOf(this);
        -1 !== r2 && E.instances.splice(r2, 1);
        for (var o2 = E.installedPlugins.length - 1; 0 <= o2; o2--)
          try {
            E.installedPlugins[o2].unpatch(this);
          } catch (e3) {
            this.sendSDKError(e3);
          }
        if (this.lifeCycle.emit("destroy"), this.lifeCycle.clear(), e2)
          t2 = this, n2 = Object.getOwnPropertyDescriptors(t2), Object.keys(n2).forEach(function(e3) {
            n2[e3].writable && (t2[e3] = null);
          }), Object.setPrototypeOf(this, null);
        else {
          for (var i2 = this; i2.constructor !== Object && re(i2, this), i2 = Object.getPrototypeOf(i2); )
            ;
          0 === E.instances.length && (r2 = Object.getPrototypeOf(this).constructor, re(r2), re(E));
        }
      }, E.version = "1.37.9", E.instances = [], E.logType = L, E.environment = f, E.installedPlugins = [], E), o = (a.prototype.patch = function(e2) {
        this.canUse(e2) && this.exist(e2) && (this.instances.push(e2), this.triggerInit(e2), this.triggerOnNewAegis(e2));
      }, a.prototype.unpatch = function(e2) {
        var t2 = this.instances.indexOf(e2);
        -1 !== t2 && (this.instances.splice(t2, 1), 0 === this.instances.length) && this.uninstall(e2);
      }, a.prototype.countInstance = function() {
        return this.instances.length;
      }, a.prototype.uninstall = function(e2) {
        var t2;
        null != (t2 = null == (t2 = this.option) ? void 0 : t2.destroy) && t2.apply(this, [e2]);
      }, a.prototype.walk = function(n2) {
        var r2 = this;
        this.instances.forEach(function(e2) {
          var t2 = r2.canUse(e2);
          t2 && n2(e2, t2);
        });
      }, a.prototype.canUse = function(e2) {
        e2 = this.getConfig(e2);
        return !(!e2 || "object" != typeof e2) || !!e2;
      }, a.prototype.getConfig = function(e2) {
        return null == (e2 = e2.config) ? void 0 : e2[this.name];
      }, a.prototype.exist = function(e2) {
        return -1 === this.instances.indexOf(e2);
      }, a.prototype.triggerInit = function(e2) {
        var t2;
        this.inited || (this.inited = true, null == (t2 = null == (t2 = this.option) ? void 0 : t2.init)) || t2.call(this.option, this.getConfig(e2));
      }, a.prototype.triggerOnNewAegis = function(e2) {
        var t2;
        null != (t2 = null == (t2 = this.option) ? void 0 : t2.onNewAegis) && t2.call(this.option, e2, this.getConfig(e2));
      }, a), Ee = new o({ name: "aid", aid: "", init: function(e2) {
        try {
          var t2 = true !== e2 && e2 || window.localStorage.getItem("AEGIS_ID");
          t2 || (t2 = Q(), window.localStorage.setItem("AEGIS_ID", t2)), this.aid = t2;
        } catch (e3) {
        }
      }, onNewAegis: function(e2) {
        e2.bean.aid = this.aid, e2.config.aid = this.aid;
      } }), Re = function(t2) {
        var n2;
        return t2.payload ? (n2 = {}, Object.keys(t2).forEach(function(e2) {
          "payload" !== e2 && (n2[e2] = t2[e2]);
        }), n2) : t2;
      }, Oe = new o({ name: "reportAssetSpeed" }), Te = Oe = new o({ name: "reportAssetSpeed", collectCur: 0, collectEntryType: "resource", ASSETS_INITIATOR_TYPE: ["img", "css", "script", "link", "audio", "video"], onNewAegis: function(e2) {
        var t2 = this;
        oe() && (this.collectSuccessLog(e2), this.collectFailLog(e2), performance.onresourcetimingbufferfull = function() {
          "function" == typeof performance.clearResourceTimings && (t2.collectCur = 0, performance.clearResourceTimings());
        });
      }, publish: function(t2, n2) {
        this.$walk(function(e2) {
          e2 === n2 && e2.speedLogPipeline(t2);
        });
      }, publishMany: function(e2, t2) {
        for (var n2 = t2.config, r2 = 0, o2 = e2.length; r2 < o2; r2++) {
          var i2 = e2[r2];
          -1 === this.ASSETS_INITIATOR_TYPE.indexOf(i2.initiatorType) || k(i2.name, n2.hostUrl) || this.publish(this.generateLog(i2, n2), t2);
        }
      }, collectSuccessLog: function(n2) {
        var e2, t2, r2 = this;
        "function" == typeof window.PerformanceObserver ? (this.publishMany(performance.getEntriesByType(this.collectEntryType), n2), (e2 = new window.PerformanceObserver(function(e3) {
          r2.publishMany(e3.getEntries(), n2);
        })).observe({ entryTypes: [this.collectEntryType] }), n2.lifeCycle.on("destroy", function() {
          0 === Oe.countInstance() && e2.disconnect();
        })) : (t2 = setInterval(function() {
          var e3 = performance.getEntriesByType(r2.collectEntryType), t3 = e3.slice(r2.collectCur);
          r2.collectCur = e3.length, r2.publishMany(t3, n2);
        }, 3e3), n2.lifeCycle.on("destroy", function() {
          0 === Oe.countInstance() && clearInterval(t2);
        }));
      }, collectFailLog: function(r2) {
        function e2(e3) {
          var t2, n2;
          e3 && (e3 = e3.target || e3.srcElement, !(t2 = (null == e3 ? void 0 : e3.src) || (null == e3 ? void 0 : e3.href)) || "string" != typeof t2 || -1 < window.location.href.indexOf(t2) || (e3 = "function" == typeof (null == (e3 = i2.api) ? void 0 : e3.resourceTypeHandler) ? null == (e3 = i2.api) ? void 0 : e3.resourceTypeHandler(t2) : "", n2 = performance.getEntriesByType(o2.collectEntryType).find(function(e4) {
            return e4.name === t2;
          }), k(t2, i2.hostUrl)) || (n2 = { url: $(t2), status: 400, duration: Number(((null == n2 ? void 0 : n2.duration) || 0).toFixed(2)), method: "get", type: e3 || "static", isHttps: K(t2), urlQuery: P(t2, true), nextHopProtocol: "", domainLookup: 0, connectTime: 0 }, o2.publish(n2, r2)));
        }
        var o2 = this, i2 = r2.config;
        window.document.addEventListener("error", e2, true), r2.lifeCycle.on("destroy", function() {
          0 === Oe.countInstance() && window.document.removeEventListener("error", e2, true);
        });
      }, generateLog: function(e2, t2) {
        var t2 = "function" == typeof (null == (n2 = t2.api) ? void 0 : n2.resourceTypeHandler) ? null == (n2 = t2.api) ? void 0 : n2.resourceTypeHandler(e2.name) : "", n2 = e2.transferSize;
        return { url: $(e2.name), method: "get", duration: Number(e2.duration.toFixed(2)), status: 200, type: t2 || "static", isHttps: K(e2.name), nextHopProtocol: e2.nextHopProtocol || "", urlQuery: P(e2.name, true), domainLookup: J(e2.domainLookupEnd - e2.domainLookupStart), connectTime: J(e2.connectEnd - e2.connectStart), transferSize: 0 < n2 ? n2 : -1 };
      }, collectNotReportedLog: function(e2) {
        var t2, n2;
        oe() && (t2 = (n2 = performance.getEntriesByType(this.collectEntryType)).length, "function" != typeof window.PerformanceObserver) && this.collectCur !== t2 && (n2 = n2.slice(this.collectCur), this.collectCur = t2, this.publishMany(n2, e2, true));
      }, destroy: function() {
        this.option.publish = function() {
        };
      } }), Se = window.navigator.userAgent.toLowerCase(), i = {};
      function a(e2) {
        this.aegisPlugin = true, this.name = "", this.instances = [], this.inited = false, e2.$walk = this.walk.bind(this), e2.$getConfig = this.getConfig.bind(this), this.option = e2, this.name = e2.name;
      }
      function E(e2) {
        var n2, t2, r2, o2, a2, i2, s2, c2, u2, l2, f2, d2, p2, h2, g2 = this;
        this.isGetSample = false, this.isHidden = false, this.config = { version: 0, delay: 1e3, onError: true, repeat: 60, random: 1, aid: true, device: true, pagePerformance: true, webVitals: true, speedSample: true, onClose: true, reportLoadPackageSpeed: true, hostUrl: "https://aegis.qq.com", env: "production", url: "", offlineUrl: "", whiteListUrl: "", pvUrl: "", speedUrl: "", customTimeUrl: "", performanceUrl: "", webVitalsUrl: "", eventUrl: "", setDataReportUrl: "", reportImmediately: true }, this.isWhiteList = false, this.lifeCycle = new X(), this.bean = {}, this.normalLogPipeline = m([Y(this, 5), Z, function(e3, t3) {
          var r3 = n2.config;
          t3(e3 = e3.map(function(e4) {
            var t4, n3 = r3.maxLength || 102400;
            try {
              if (!e4.msg || e4.msg.length <= n3)
                return e4;
              e4.msg = null == (t4 = e4.msg) ? void 0 : t4.substring(0, n3);
            } catch (t5) {
              e4.msg = y(e4.msg).substring(0, r3.maxLength);
            }
            return e4;
          }));
        }, (h2 = (n2 = this).config, function(e3, t3) {
          var n3 = "number" == typeof h2.repeat ? h2.repeat : 60;
          if (n3 <= 0)
            return t3(e3);
          var r3 = (null == h2 ? void 0 : h2.id) + "_error", o3 = b[r3] || {};
          t3(e3.filter(function(e4) {
            if (e4.level === L.ERROR || e4.level === L.PROMISE_ERROR || e4.level === L.AJAX_ERROR || e4.level === L.SCRIPT_ERROR || e4.level === L.IMAGE_ERROR || e4.level === L.CSS_ERROR || e4.level === L.MEDIA_ERROR || e4.level === L.RET_ERROR || e4.level === L.BRIDGE_ERROR || e4.level === L.PAGE_NOT_FOUND_ERROR || e4.level === L.WEBSOCKET_ERROR || e4.level === L.LAZY_LOAD_ERROR) {
              e4 = e4.msg.slice(0, 200);
              if (o3[e4] > n3)
                return w[r3] || ve(r3), false;
              o3[e4] = 1 + ~~o3[e4], b[r3] = o3;
            }
            return true;
          }));
        }), (d2 = this.lifeCycle.emit, p2 = this.config, function(e3, t3) {
          var n3, r3 = p2.logCreated;
          return "function" == typeof r3 ? (n3 = e3.filter(function(e4) {
            return false !== r3(e4);
          }), d2("beforeWrite", n3), t3(n3)) : (d2("beforeWrite", e3), t3(e3));
        }), (f2 = this, setTimeout(function() {
          var e3 = f2.config, t3 = e3.pvUrl, n3 = void 0 === t3 ? "" : t3, t3 = e3.spa, e3 = -1 < ["web-sdk", "mp-sdk"].indexOf("web-sdk");
          n3 && (e3 && !t3 || !e3) && f2.sendPipeline([function(e4, t4) {
            t4({ url: n3, type: v.PV });
          }], v.PV)(null);
        }, 100), function(e3, t3) {
          t3(e3);
        }), (u2 = c2 = s2 = false, l2 = [], (a2 = this).lifeCycle.on("onConfigChange", function() {
          i2 && clearTimeout(i2), i2 = setTimeout(function() {
            var e3, n3;
            !u2 && a2.config && (u2 = true, e3 = a2.config.whiteListUrl, (n3 = void 0 === e3 ? "" : e3) && a2.sendPipeline([function(e4, t3) {
              t3({ url: n3, type: v.WHITE_LIST, success: function(e5) {
                c2 = true;
                try {
                  var t4 = e5.data || JSON.parse(e5), n4 = t4.retcode, r3 = t4.result, o3 = void 0 === r3 ? {} : r3, i3 = (0 === n4 && (s2 = o3.is_in_white_list, a2.isWhiteList = s2, 0 <= o3.rate) && o3.rate <= 1 && (a2.config.random = o3.rate, a2.isGetSample = false), a2.isWhiteList && l2.length ? we(a2)(l2.splice(0), function() {
                  }) : !a2.isWhiteList && l2.length && (l2.length = 0), a2.config.onWhitelist);
                  "function" == typeof i3 && i3(s2);
                } catch (e6) {
                }
              }, fail: function() {
                c2 = true;
              } });
            }], v.WHITE_LIST)(null), u2 = false);
          }, a2.config.uin ? 50 : 500);
        }), a2.lifeCycle.on("destroy", function() {
          l2.length = 0;
        }), function(e3, t3) {
          var n3;
          s2 || null != (n3 = null == (n3 = a2.config) ? void 0 : n3.api) && n3.reportRequest ? t3(e3.concat(l2.splice(0)).map(function(e4) {
            return me(e4), e4;
          })) : (n3 = e3.filter(function(e4) {
            return e4.level !== L.INFO && e4.level !== L.API_RESPONSE ? (me(e4), true) : (c2 || (l2.push(e4), 200 <= l2.length && (l2.length = 200)), false);
          })).length && t3(n3);
        }), function(e3, t3) {
          try {
            var n3 = JSON.parse(JSON.stringify(e3)), r3 = (g2.lifeCycle.emit("beforeReport", n3), g2.config.beforeReport);
            (e3 = "function" == typeof r3 ? e3.filter(function(e4) {
              return false !== r3(e4);
            }) : e3).length && t3(e3);
          } catch (e4) {
          }
        }, we(this)]), this.eventPipeline = m([Y(this, 10), (o2 = this, function(e3) {
          o2.sendPipeline([function(e4, t3) {
            var n3 = e4.map(function(e5) {
              return { name: e5.name, ext1: e5.ext1 || o2.config.ext1 || "", ext2: e5.ext2 || o2.config.ext2 || "", ext3: e5.ext3 || o2.config.ext3 || "" };
            });
            t3({ url: o2.config.eventUrl + "?payload=" + encodeURIComponent(JSON.stringify(n3)), type: v.EVENT, log: e4 });
          }], v.EVENT)(e3);
        })]), this.timeMap = {}, this.failRequestCount = 0, this.customTimePipeline = m([Y(this, 10), (r2 = this, function(e3) {
          return r2.sendPipeline([function(e4, t3) {
            t3({ url: r2.config.customTimeUrl + "?payload=" + encodeURIComponent(JSON.stringify({ custom: e4 })), type: v.CUSTOM, log: e4 });
          }], v.CUSTOM)(e3);
        })]), this.config = (t2 = this.config, void 0 === (e2 = e2.hostUrl) && (e2 = "https://aegis.qq.com"), t2.url = t2.url || e2 + "/collect", t2.offlineUrl = t2.offlineUrl || e2 + "/offline", t2.whiteListUrl = t2.whiteListUrl || e2 + "/collect/whitelist", t2.pvUrl = t2.pvUrl || e2 + "/collect/pv", t2.eventUrl = t2.eventUrl || e2 + "/collect/events", t2.speedUrl = t2.speedUrl || e2 + "/speed", t2.customTimeUrl = t2.customTimeUrl || e2 + "/speed/custom", t2.performanceUrl = t2.performanceUrl || e2 + "/speed/performance", t2.webVitalsUrl = t2.webVitalsUrl || e2 + "/speed/webvitals", t2.setDataReportUrl = t2.SetDataReportUrl || e2 + "/speed/miniProgramData", t2), E.instances.push(this);
      }
      function Pe() {
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, function(e2) {
          return (e2 ^ (16 * Math.random() & 15) >> e2 / 4).toString(16);
        });
      }
      i.macos = function() {
        return t("mac");
      }, i.ios = function() {
        return i.iphone() || i.ipod() || i.ipad();
      }, i.iphone = function() {
        return !i.windows() && t("iphone");
      }, i.ipod = function() {
        return t("ipod");
      }, i.ipad = function() {
        var e2 = "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints;
        return t("ipad") || e2;
      }, i.android = function() {
        return !i.windows() && t("android");
      }, i.androidPhone = function() {
        return i.android() && t("mobile");
      }, i.androidTablet = function() {
        return i.android() && !t("mobile");
      }, i.blackberry = function() {
        return t("blackberry") || t("bb10");
      }, i.blackberryPhone = function() {
        return i.blackberry() && !t("tablet");
      }, i.blackberryTablet = function() {
        return i.blackberry() && t("tablet");
      }, i.windows = function() {
        return t("windows");
      }, i.windowsPhone = function() {
        return i.windows() && t("phone");
      }, i.windowsTablet = function() {
        return i.windows() && t("touch") && !i.windowsPhone();
      }, i.fxos = function() {
        return (t("(mobile") || t("(tablet")) && t(" rv:");
      }, i.fxosPhone = function() {
        return i.fxos() && t("mobile");
      }, i.fxosTablet = function() {
        return i.fxos() && t("tablet");
      }, i.meego = function() {
        return t("meego");
      }, i.cordova = function() {
        return window.cordova && "file:" === location.protocol;
      }, i.nodeWebkit = function() {
        return "object" == typeof window.process;
      }, i.mobile = function() {
        return i.androidPhone() || i.iphone() || i.ipod() || i.windowsPhone() || i.blackberryPhone() || i.fxosPhone() || i.meego();
      }, i.tablet = function() {
        return i.ipad() || i.androidTablet() || i.blackberryTablet() || i.windowsTablet() || i.fxosTablet();
      }, i.desktop = function() {
        return !i.tablet() && !i.mobile();
      }, i.isIE = function() {
        return "ActiveXObject" in window;
      };
      var xe = { generateTraceId: Le(16), generateSpanId: Le(8) }, ke = Array(32);
      function Le(t2) {
        return function() {
          for (var e2 = 0; e2 < 2 * t2; e2++)
            ke[e2] = Math.floor(16 * Math.random()) + 48, 58 <= ke[e2] && (ke[e2] += 39);
          return String.fromCharCode.apply(null, ke.slice(0, 2 * t2));
        };
      }
      function Ie(e2) {
        var t2, n2 = "";
        return n2 = "object" == typeof e2 && (t2 = (e2 = function(e3, t3) {
          for (var n3 = 0; n3 < t3.length; n3++) {
            var r2 = t3[n3], o2 = e3[r2] || "function" == typeof e3.get && e3.get(r2);
            if (o2)
              return [r2, o2];
          }
          return ["", ""];
        }(e2, Object.keys(je)))[0], e2 = e2[1], t2) ? je[t2](e2) : n2;
      }
      function I(r2, e2, o2) {
        return null != e2 && e2.length && "object" == typeof r2 ? e2.reduce(function(e3, t2) {
          var n2 = window.Headers && r2 instanceof Headers ? r2.get(t2) : r2[t2];
          return n2 ? e3 + ("" === e3 ? "" : "\n\n") + o2 + " header " + t2 + ": " + n2 : e3;
        }, "") : "";
      }
      var Ce, Ae, Ne, qe, s, Ue, _e, je = { sw8: function(e2) {
        e2 = e2.split("-")[1];
        return e2 ? atob(e2) : "";
      }, traceparent: function(e2) {
        return e2.split("-")[1];
      }, b3: function(e2) {
        return e2.split("-")[0];
      }, "sentry-trace": function(e2) {
        return e2.split("-")[0];
      } }, He = (h.prototype.generate = function(e2, t2) {
        if (void 0 === t2 && (t2 = {}), this.url = e2, !this.isUrlIgnored() && this.isUrlInTraceUrls() && this.traceType) {
          switch (this.traceType) {
            case "traceparent":
              this.traceId = this.createTraceparent();
              break;
            case "b3":
              this.traceId = this.createB3();
              break;
            case "sw8":
              this.traceId = this.createSw8();
              break;
            case "sentry-trace":
              this.traceId = this.createSentryTrace();
              break;
            default:
              return console.warn("this trace key " + this.traceType + " is not supported"), void (this.traceId = "");
          }
          return t2[this.traceType] && (this.traceId = t2[this.traceType]), { name: this.traceType, value: this.traceId };
        }
      }, h.prototype.createTraceparent = function() {
        var e2 = xe.generateSpanId();
        return "00-" + xe.generateTraceId() + "-" + e2 + "-0" + Number(1).toString(16);
      }, h.prototype.createB3 = function() {
        var e2 = xe.generateSpanId();
        return xe.generateTraceId() + "-" + e2 + "-1";
      }, h.prototype.createSw8 = function() {
        var e2 = new URL(location.href), t2 = Q(), n2 = Q();
        return "1-" + String(btoa(n2)) + "-" + String(btoa(t2)) + "-1-" + String(btoa("aegis")) + "-" + String(btoa("1.37.9")) + "-" + String(btoa(encodeURI(location.pathname))) + "-" + String(btoa(e2.host));
      }, h.prototype.createSentryTrace = function() {
        var e2 = Pe().substring(16);
        return Pe() + "-" + e2 + "-1";
      }, h.prototype.isUrlIgnored = function() {
        if (Array.isArray(this.ignoreUrls) && 0 !== this.ignoreUrls.length)
          for (var e2 = 0, t2 = this.ignoreUrls; e2 < t2.length; e2++) {
            var n2 = t2[e2];
            if (this.urlMatches(this.url, n2))
              return true;
          }
        return false;
      }, h.prototype.isUrlInTraceUrls = function() {
        if (!this.urls)
          return true;
        if (Array.isArray(this.urls)) {
          if (0 === this.urls.length)
            return false;
          for (var e2 = 0, t2 = this.urls; e2 < t2.length; e2++) {
            var n2 = t2[e2];
            if (this.urlMatches(this.url, n2))
              return true;
          }
        }
        return false;
      }, h.prototype.urlMatches = function(e2, t2) {
        return "string" == typeof t2 ? e2 === t2 : !!e2.match(t2);
      }, h), Be = false, c = [], De = /^\/[^/]/, Me = false, d = [], Fe = (new o({ name: "reportApiSpeed" }), new o({ name: "reportApiSpeed", override: false, onNewAegis: function(e2) {
        var t2, n2;
        this.override || (null != (n2 = e2.config.api) && n2.injectTraceHeader && (this.traceRequestHeader = new He(n2.injectTraceHeader, null != (t2 = null == n2 ? void 0 : n2.injectTraceIgnoreUrls) ? t2 : [], null == n2 ? void 0 : n2.injectTraceUrls)), this.override = true, this.overrideFetch(e2.config, e2), this.overrideXhr(e2.config, e2));
      }, getRequestType: function(e2, t2, n2) {
        void 0 === t2 && (t2 = "");
        var r2, o2, e2 = "function" == typeof (null == (o2 = e2.api) ? void 0 : o2.resourceTypeHandler) ? null == (o2 = e2.api) ? void 0 : o2.resourceTypeHandler(n2) : "";
        return -1 === G.indexOf(e2) && (r2 = void 0 === t2 ? "" : t2, o2 = (void 0 === n2 ? "" : n2).split("?")[0], e2 = se.test(o2) || ae.some(function(e3) {
          return -1 !== String(r2).indexOf(e3);
        }) ? "static" : "fetch"), e2;
      }, overrideFetch: function(m2, v2) {
        var y2 = this, e2 = m2.api, e2 = { name: this.name, traceRequestHeader: null != e2 && e2.injectTraceHeader ? this.traceRequestHeader : null, then: function(f2, d2, p2, h2) {
          var e3, g2;
          k(p2, m2.hostUrl) || (e3 = f2.headers ? f2.headers.get("content-type") : "", "fetch" === (g2 = y2.getRequestType(m2, e3, p2)) ? f2.clone().text().then(function(n2) {
            var e4, r2 = f2.status <= 0 || 400 <= f2.status, t2 = (null == (t2 = m2.api) ? void 0 : t2.reqHeaders) || [], o2 = I(null == h2 ? void 0 : h2.headers, t2, "req"), t2 = (null == (t2 = m2.api) ? void 0 : t2.resHeaders) || [], i2 = I(f2.headers, t2, "res"), a2 = Ie(null == h2 ? void 0 : h2.headers), t2 = z(n2, m2.api, { url: p2, ctx: f2, payload: null == h2 ? void 0 : h2.body }), s2 = t2.code, c2 = t2.isErr, t2 = null == (t2 = m2.api) ? void 0 : t2.apiDetail, u3 = t2 ? x(null == h2 ? void 0 : h2.body, null == (e4 = m2.api) ? void 0 : e4.reqParamHandler, { url: p2 }) : "", l2 = t2 ? x(n2, null == (e4 = m2.api) ? void 0 : e4.resBodyHandler, { url: p2, ctx: f2 }) : "";
            setTimeout(function() {
              var e5 = y2.getPerformanceEntryByUrl(m2, { url: p2, duration: d2, type: g2, status: f2.status || 0, method: (null == h2 ? void 0 : h2.method) || "get" }), t3 = [r2 ? "FETCH_ERROR: " + n2 : "", "fetch req url: " + p2, "res status: " + (e5.status || 0), "res duration: " + e5.duration + "ms", o2, i2, "req method: " + (e5.method || "GET"), "res retcode: " + s2, "req param: " + u3, "res data: " + l2].filter(function(e6) {
                return e6;
              }).join("\n\n");
              e5.payload = null == h2 ? void 0 : h2.body, e5.ret = s2, e5.isErr = +c2, y2.publishNormalLog({ msg: t3, level: r2 ? L.AJAX_ERROR : c2 ? L.RET_ERROR : L.API_RESPONSE, code: s2, trace: a2 }, v2), y2.publishSpeed(e5, v2);
            }, 0);
          }) : setTimeout(function() {
            var e4 = y2.getPerformanceEntryByUrl(m2, { url: p2, duration: d2, type: g2, status: f2.status || 0, method: (null == h2 ? void 0 : h2.method) || "get" });
            e4.type = "static", e4.urlQuery = P(p2, true), y2.publishSpeed(e4, v2);
          }, 0));
        }, catch: function(t2, n2, r2, o2) {
          var i2, e3, a2, s2, c2;
          throw k(r2, m2.hostUrl) || (i2 = y2.getRequestType(m2, "", r2), e3 = (null == (e3 = m2.api) ? void 0 : e3.reqHeaders) || [], a2 = I(null == o2 ? void 0 : o2.headers, e3, "req"), s2 = Ie(null == o2 ? void 0 : o2.headers), c2 = null != (e3 = m2.api) && e3.apiDetail ? x(null == o2 ? void 0 : o2.body, null == (e3 = m2.api) ? void 0 : e3.reqParamHandler, { url: r2 }) : "", setTimeout(function() {
            var e4 = y2.getPerformanceEntryByUrl(m2, { url: r2, duration: n2, type: i2, status: 0, method: (null == o2 ? void 0 : o2.method) || "get" }), e4 = (y2.publishSpeed(e4, v2), "AJAX_ERROR: " + t2 + "\n                          \nreq url: " + r2 + "\n                          \nres status: 0\n                          \nres duration: " + e4.duration + "ms\n                          \nreq method: " + ((null == o2 ? void 0 : o2.method) || "get") + "\n                          \nreq param: " + c2 + "\n                          \n" + a2);
            y2.publishNormalLog({ msg: e4, level: L.AJAX_ERROR, code: -400, trace: s2 }, v2);
          }, 0)), t2;
        } }, u2 = (this.hackFetchOptions = e2, this.hackFetchOptions);
        if (d.find(function(e3) {
          return e3.name === u2.name;
        }))
          throw new Error("name '" + u2.name + "' is already in hackFetch option list");
        d.push(u2), !Me && window.fetch && (Me = true, qe = window.fetch, window.fetch = function(e3, o2) {
          void 0 === o2 && (o2 = {});
          var t2, n2, i2 = "string" == typeof e3 ? e3 : null == e3 ? void 0 : e3.url, r2 = (De.test(i2) && (i2 = "" + location.origin + i2), (u2 || {}).traceRequestHeader);
          r2 && (n2 = (o2 || {}).headers, t2 = (n2 = r2.generate(i2, r2 = void 0 === n2 ? {} : n2) || {}).name, n2 = n2.value) && t2 && (o2.headers = Object.assign(r2, ((r2 = {})[t2] = n2, r2)));
          for (var a2 = 0; a2 < d.length; a2++) {
            var s2 = d[a2];
            try {
              "function" == typeof s2.beforeFetch && s2.beforeFetch(i2, o2);
            } catch (e4) {
            }
          }
          var c2 = Date.now();
          return qe(e3, o2).then(function(e4) {
            for (var t3 = e4.clone(), n3 = 0; n3 < d.length; n3++) {
              var r3 = d[n3];
              try {
                "function" == typeof r3.then && r3.then(t3, Date.now() - c2, i2, o2);
              } catch (e5) {
              }
            }
            return t3;
          }).catch(function(e4) {
            for (var t3 = 0; t3 < d.length; t3++) {
              var n3 = d[t3];
              try {
                "function" == typeof n3.catch && n3.catch(e4, Date.now() - c2, i2, o2);
              } catch (e5) {
              }
            }
            throw e4;
          });
        });
      }, overrideXhr: function(O2, T2) {
        var t2, S2 = this, e2 = { name: this.name, send: function(E2, R2) {
          var e3, t3, n2 = Date.now();
          ((null == O2 ? void 0 : O2.api) || {}).injectTraceHeader && (e3 = (t3 = S2.traceRequestHeader.generate(E2.aegisUrl) || {}).name, t3 = t3.value, e3) && t3 && E2.setRequestHeader(e3, t3), E2.addEventListener("loadend", function() {
            var v2, y2, e4, w2, b2 = E2.aegisUrl || "";
            k(b2, O2.hostUrl) || "abort" === E2.failType || (v2 = "", (E2.failType || !E2.status || 400 <= E2.status) && (v2 = E2.failType || "failed"), y2 = Date.now() - n2, e4 = E2.getResponseHeader("content-type"), w2 = S2.getRequestType(O2, e4, b2), setTimeout(function() {
              var r2 = S2.getPerformanceEntryByUrl(O2, { url: b2, duration: y2, type: w2, status: E2.status, method: E2.aegisMethod || "get" });
              if ("fetch" === w2) {
                var e5 = (null == (e5 = O2.api) ? void 0 : e5.reqHeaders) || [], o2 = I(E2.aegisXhrReqHeader, e5, "req"), e5 = (null == (e5 = O2.api) ? void 0 : e5.resHeaders) || [], t4 = E2.getAllResponseHeaders().split("\r\n").reduce(function(e6, t5) {
                  t5 = t5.split(": ");
                  return t5[0] && t5[1] && (e6[t5[0]] = t5[1]), e6;
                }, {}), i2 = I(t4, e5, "res"), a2 = Ie(E2.aegisXhrReqHeader), e5 = null == (t4 = O2.api) ? void 0 : t4.apiDetail, s2 = e5 ? x(R2, null == (t4 = O2.api) ? void 0 : t4.reqParamHandler, { url: b2 }) : "", c2 = e5 ? x(E2.response, null == (t4 = O2.api) ? void 0 : t4.resBodyHandler, { url: b2 }) : "";
                try {
                  var n3, u2, l2, f2, d2 = E2.response, p2 = O2.api, h2 = { url: b2, ctx: E2, payload: R2 }, g2 = function(e6) {
                    var t5 = e6.code, e6 = e6.isErr, n4 = [v2 ? "AJAX_ERROR: request " + v2 : "", "fetch req url: " + b2, "res status: " + (r2.status || 0), "res duration: " + r2.duration + "ms", o2, i2, "req method: " + (r2.method || "GET"), "res retcode: " + t5, "req param: " + s2, "res data: " + c2].filter(function(e7) {
                      return e7;
                    }).join("\n\n");
                    r2.ret = t5, r2.isErr = +e6, r2.payload = R2, S2.publishNormalLog({ msg: n4, level: v2 ? L.AJAX_ERROR : e6 ? L.RET_ERROR : L.API_RESPONSE, code: t5, trace: a2 }, T2), S2.publishSpeed(r2, T2);
                  };
                  try {
                    if ("function" == typeof (null == p2 ? void 0 : p2.retCodeHandlerAsync))
                      return void p2.retCodeHandlerAsync(d2, null == h2 ? void 0 : h2.url, null == h2 ? void 0 : h2.ctx, function(e6) {
                        var t5 = e6.code, e6 = e6.isErr;
                        null != g2 && g2({ code: void 0 === t5 ? "unknown" : t5, isErr: e6 });
                      });
                    if ("function" == typeof (null == p2 ? void 0 : p2.retCodeHandler))
                      return void (l2 = (u2 = p2.retCodeHandler(d2, null == h2 ? void 0 : h2.url, null == h2 ? void 0 : h2.ctx, null == h2 ? void 0 : h2.payload) || {}).code, f2 = u2.isErr, null != g2 && g2({ code: void 0 === l2 ? "unknown" : l2, isErr: f2 }));
                    if (!(d2 = "string" == typeof d2 ? JSON.parse(d2) : d2))
                      return void (null != g2 && g2({ code: "unknown", isErr: false }));
                    "function" == typeof (null == (n3 = null == p2 ? void 0 : p2.ret) ? void 0 : n3.join) && (ce = [].concat(p2.ret.map(function(e6) {
                      return e6.toLowerCase();
                    })));
                    var m2 = Object.getOwnPropertyNames(d2).filter(function(e6) {
                      return -1 !== ce.indexOf(e6.toLowerCase());
                    });
                    if (m2.length)
                      return void ("未知" !== (l2 = d2[m2[0]]) && "" !== l2 || (l2 = "unknown"), null != g2 && g2({ code: "" + l2, isErr: 0 !== l2 && "0" !== l2 && "unknown" !== l2 }));
                    null != g2 && g2({ code: "unknown", isErr: false });
                  } catch (d3) {
                    null != g2 && g2({ code: "unknown", isErr: false });
                  }
                } catch (e6) {
                  r2.ret = "unknown", S2.publishSpeed(r2, T2);
                }
              } else
                r2.type = "static", r2.urlQuery = P(b2, true), S2.publishSpeed(r2, T2);
            }, 0));
          }), ["abort", "error", "timeout"].map(function(e4) {
            E2.addEventListener(e4, function() {
              E2.failType = e4;
            });
          });
        } };
        this.hackXHROptions = e2, t2 = this.hackXHROptions, c.find(function(e3) {
          return e3.name === t2.name;
        }) || (c.push(t2), !Be && window.XMLHttpRequest && (Ce = window.XMLHttpRequest.prototype.send, Ae = window.XMLHttpRequest.prototype.open, Ne = window.XMLHttpRequest.prototype.setRequestHeader, Be = true, window.XMLHttpRequest.prototype.open = function() {
          this.aegisMethod = arguments[0];
          var e3 = arguments[1];
          if (De.test(e3) && (e3 = "" + location.origin + e3), this.aegisUrl = e3, this.aegisXhrStartTime = Date.now(), this.sendByAegis)
            i.isIE() || (this.timeout = 5e3);
          else
            for (var t3 = 0; t3 < c.length; t3++) {
              var n2 = c[t3];
              try {
                "function" == typeof n2.open && n2.open(this);
              } catch (e4) {
              }
            }
          return Ae.apply(this, arguments);
        }, window.XMLHttpRequest.prototype.setRequestHeader = function() {
          var e3, t3 = arguments[0], n2 = arguments[1];
          if (this.aegisXhrReqHeader = null != (e3 = this.aegisXhrReqHeader) ? e3 : {}, !(-1 < ["traceparent", "b3", "sw8", "sentry-trace"].indexOf(t3) && (this.aegisXhrReqHeader[t3] || (arguments[1] = n2), this.aegisXhrReqHeader[t3])))
            return this.aegisXhrReqHeader[t3] = arguments[1], Ne.apply(this, arguments);
        }, window.XMLHttpRequest.prototype.send = function() {
          if (!this.sendByAegis)
            for (var e3 = 0; e3 < c.length; e3++) {
              var t3 = c[e3];
              try {
                "function" == typeof t3.send && t3.send(this, arguments[0]);
              } catch (e4) {
              }
            }
          return Ce.apply(this, arguments);
        }));
      }, getPerformanceEntryByUrl: function(e2, t2) {
        if (null != (e2 = e2.api) && e2.usePerformanceTiming && "string" == typeof t2.url) {
          e2 = null == (e2 = performance.getEntriesByName(t2.url)) ? void 0 : e2.pop();
          if (e2)
            return { url: t2.url, isHttps: K(t2.url), method: t2.method, type: t2.type, status: t2.status, duration: Number(e2.duration.toFixed(2)), nextHopProtocol: e2.nextHopProtocol || "", domainLookup: J(e2.domainLookupEnd - e2.domainLookupStart), connectTime: J(e2.connectEnd - e2.connectStart) };
        }
        return { url: t2.url, isHttps: K(t2.url), method: t2.method, type: t2.type, status: t2.status, duration: Number(t2.duration.toFixed(2)), nextHopProtocol: "", domainLookup: n.number, connectTime: n.number };
      }, publishSpeed: function(n2) {
        var r2 = this;
        this.$walk(function(e2) {
          var t2 = r2.$getConfig(e2);
          "fetch" === n2.type && t2 && "function" == typeof t2.urlHandler ? e2.speedLogPipeline(l(l({}, n2), { url: P(t2.urlHandler(n2.url, n2.payload)) })) : (n2.url = P(n2.url), e2.speedLogPipeline(n2));
        });
      }, publishNormalLog: function(t2) {
        this.$walk(function(e2) {
          e2.normalLogPipeline(t2);
        });
      }, destroy: function() {
        var t2, n2, e2;
        this.option.publishSpeed = function() {
        }, this.option.publishNormalLog = function() {
        }, this.option.hackXHROptions && (t2 = this.option.hackXHROptions, -1 !== (e2 = c.findIndex(function(e3) {
          return e3.name === t2.name;
        }))) && c.splice(e2, 1), this.option.hackFetchOptions && (n2 = this.option.hackFetchOptions, -1 !== (e2 = d.findIndex(function(e3) {
          return e3.name === n2.name;
        }))) && d.splice(e2, 1), this.option.override = false;
      } })), p = {}, We = new o({ name: "reportBridgeSpeed", override: false, onNewAegis: function(e2) {
        this.override || (this.override = true, this.overrideBridge(e2));
      }, publishSpeed: function(t2, n2) {
        this.$walk(function(e2) {
          e2 === n2 && e2.speedLogPipeline(t2);
        });
      }, overrideBridge: function(c2) {
        var u2 = this, l2 = c2.config;
        l2.reportBridgeSpeed && l2.h5Bridge && l2.h5BridgeFunc.length && l2.h5BridgeFunc.forEach(function(e2) {
          var s2 = l2.h5Bridge[e2];
          p[e2] = s2, l2.h5Bridge[e2] = function() {
            for (var e3 = [], t2 = 0; t2 < arguments.length; t2++)
              e3[t2] = arguments[t2];
            var r2 = e3[0], o2 = e3[1], n2 = e3[2], i2 = e3[3], a2 = Date.now();
            s2(r2, o2, n2, function(e4) {
              var t3 = z(e4, l2.api), n3 = t3.code, t3 = t3.isErr, n3 = { url: r2 + "-" + o2, name: r2 + "-" + o2, duration: Date.now() - a2, type: "bridge", ret: n3, isErr: +t3 };
              u2.publishSpeed(n3, c2), i2(e4);
            });
          };
        });
      }, unHackBridge: function(t2) {
        Object.keys(p).forEach(function(e2) {
          p[e2] && (t2.config.h5Bridge[e2] = p[e2]);
        }), p = {};
      }, destroy: function(e2) {
        this.option.publishSpeed = function() {
        }, this.option.unHackBridge(e2), this.option.override = false;
      } });
      function h(e2, t2, n2) {
        void 0 === n2 && (n2 = null), this.traceType = e2, this.ignoreUrls = t2, this.urls = n2;
      }
      (S = s = s || {})[S.unknown = 100] = "unknown", S[S.wifi = 1] = "wifi", S[S.net2g = 2] = "net2g", S[S.net3g = 3] = "net3g", S[S.net4g = 4] = "net4g", S[S.net5g = 5] = "net5g", S[S.net6g = 6] = "net6g", (S = Ue = Ue || {})[S.android = 1] = "android", S[S.ios = 2] = "ios", S[S.windows = 3] = "windows", S[S.macos = 4] = "macos", S[S.linux = 5] = "linux", S[S.other = 100] = "other", (S = _e = _e || {})[S.unknown = 100] = "unknown", S[S.normal = 0] = "normal", S[S.weak = 1] = "weak", S[S.disconnected = 2] = "disconnected";
      function g(e2, t2, n2, r2) {
        return void 0 === n2 && (n2 = 15e3), void 0 === r2 && (r2 = 0), (t2 = void 0 === t2 ? 0 : t2) <= e2 && e2 <= n2 ? e2 : r2;
      }
      var R, O, Ge, Xe, Ve, T, Je, $e, Ke, S = new o({ name: "device", onNewAegis: function(e2) {
        e2.extendBean("platform", this.getPlatform()), e2.extendBean("netType", s.unknown), this.getDpi(e2), this.refreshNetworkTypeToBean(e2), this.refreshNetworkStatusToBean(e2);
      }, getDpi: function(e2) {
        e2.extendBean("vp", Math.round(window.innerWidth) + " * " + Math.round(window.innerHeight)), window.screen && e2.extendBean("sr", Math.round(window.screen.width) + " * " + Math.round(window.screen.height));
      }, getPlatform: function() {
        var t2 = { android: /\bAndroid\s*([^;]+)/, ios: /\b(iPad|iPhone|iPod)\b.*? OS ([\d_]+)/, windows: /\b(Windows NT)/, macos: /\b(Mac OS)/, linux: /\b(Linux)/i }, e2 = Object.keys(t2).find(function(e3) {
          return t2[e3].test(navigator.userAgent);
        });
        return e2 ? Ue[e2] : Ue.other;
      }, refreshNetworkTypeToBean: function(t2) {
        var n2 = this, e2 = t2.config;
        e2 && ("function" == typeof e2.getNetworkType ? e2.getNetworkType : ze)(function(e3) {
          s[e3] || (e3 = s.unknown), t2.extendBean("netType", e3), n2.NetworkRefreshTimer = setTimeout(function() {
            n2.refreshNetworkTypeToBean(t2), clearTimeout(n2.NetworkRefreshTimer);
          }, 1e4);
        });
      }, refreshNetworkStatusToBean: function(t2) {
        var e2, n2 = this, r2 = t2.config;
        r2 && null != (e2 = "function" == typeof r2.getNetworkStatus ? r2.getNetworkStatus : e2) && e2(function(e3) {
          void 0 === _e[e3] && (e3 = _e.unknown), t2.extendBean("netStatus", e3), n2.NetworkStatusRefreshTimer = setTimeout(function() {
            n2.refreshNetworkStatusToBean(t2), clearTimeout(n2.NetworkStatusRefreshTimer);
          }, 1e4);
        });
      } }), ze = function(e2) {
        var t2 = "", n2 = navigator.userAgent.match(/NetType\/(\w+)/);
        n2 ? t2 = n2[1] : navigator.connection && (t2 = navigator.connection.effectiveType || navigator.connection.type), e2((n2 = t2 = t2 || "unknown", 0 <= (n2 = String(n2).toLowerCase()).indexOf("4g") ? s.net4g : 0 <= n2.indexOf("wifi") ? s.wifi : 0 <= n2.indexOf("5g") ? s.net5g : 0 <= n2.indexOf("6g") ? s.net6g : 0 <= n2.indexOf("3g") ? s.net3g : 0 <= n2.indexOf("2g") ? s.net2g : s.unknown));
      }, Qe = window.WebSocket, C = [], Ye = { construct: function(e2, t2) {
        var a2 = new e2(t2[0], t2[1]);
        return a2.originSend = a2.send, a2.addEventListener("error", function(e3) {
          var e3 = (null == e3 ? void 0 : e3.currentTarget) || {}, t3 = e3.url, n2 = e3.readyState;
          null != C && C.forEach(function(e4) {
            e4 = e4.onErr;
            null != e4 && e4({ msg: "无法获知具体错误信息，需在浏览器控制台查看！", readyState: n2, connectUrl: t3 });
          });
        }), Object.defineProperty(a2, "send", { get: function() {
          return function(e3) {
            null != (t3 = a2.originSend) && t3.call(a2, e3);
            var t3 = a2.readyState, e3 = WebSocket.OPEN, n2 = WebSocket.CLOSED, r2 = WebSocket.CONNECTING, o2 = WebSocket.CLOSING;
            if (t3 !== e3) {
              var i2 = { readyState: t3, connectUrl: a2.url };
              switch (t3) {
                case n2:
                  C.forEach(function(e4) {
                    e4 = e4.sendErr;
                    null != e4 && e4(l({ msg: "消息发送失败，连接已关闭！" }, i2));
                  });
                  break;
                case r2:
                  C.forEach(function(e4) {
                    (0, e4.sendErr)(l({ msg: "消息发送失败，正在连接中！" }, i2));
                  });
                  break;
                case o2:
                  C.forEach(function(e4) {
                    (0, e4.sendErr)(l({ msg: "消息发送失败，连接正在关闭！" }, i2));
                  });
              }
            }
          };
        } }), a2;
      } }, Ze = new o({ name: "onError" }), et = Ze = new o({ name: "onError", onNewAegis: function(e2) {
        this.startListen(e2);
      }, startListen: function(o2) {
        function e2(e3) {
          (e3 = e3 && y(e3.reason)) && s2.publishErrorLog({ msg: "PROMISE_ERROR: " + e3, level: L.PROMISE_ERROR }, o2);
        }
        function t2(e3) {
          var t3;
          if (e3 = (null == e3 ? void 0 : e3.target) || (null == e3 ? void 0 : e3.srcElement)) {
            var n3 = e3.src || e3.href || "", e3 = e3.tagName, e3 = void 0 === e3 ? "script" : e3;
            if (!(k(t3 = n3, o2.config.hostUrl) || -1 < window.location.href.indexOf(t3))) {
              var r3 = { msg: e3 + " load fail: " + n3, level: L.INFO };
              if (/\.js$/.test(n3))
                r3.level = L.SCRIPT_ERROR;
              else if (/\.css$/.test(n3))
                r3.level = L.CSS_ERROR;
              else
                switch (e3.toLowerCase()) {
                  case "script":
                    r3.level = L.SCRIPT_ERROR;
                    break;
                  case "link":
                    r3.level = L.CSS_ERROR;
                    break;
                  case "img":
                    r3.level = L.IMAGE_ERROR;
                    break;
                  case "audio":
                  case "video":
                    r3.level = L.MEDIA_ERROR;
                    break;
                  default:
                    return;
                }
              s2.publishErrorLog(r3, o2);
            }
          }
        }
        var n2, r2, i2, a2, s2 = this, c2 = window.onerror;
        window.onerror = function() {
          for (var e3 = [], t3 = 0; t3 < arguments.length; t3++)
            e3[t3] = arguments[t3];
          var n3, r3 = y(e3[0]);
          "string" != typeof (n3 = r3) || !n3 || F.some(function(e4) {
            return -1 < n3.indexOf(e4);
          }) || M.some(function(e4) {
            return -1 < n3.indexOf(e4);
          }) || s2.publishErrorLog({ msg: (r3 || "") + " @ (" + (y(e3[1]) || "") + ":" + (e3[2] || 0) + ":" + (e3[3] || 0) + ")\n          \n" + y(e3[4] || ""), level: L.ERROR }, o2), null != c2 && c2.call.apply(c2, u([window], e3));
        }, window.addEventListener("unhandledrejection", e2);
        window.document.addEventListener("error", t2, true), o2.lifeCycle.on("destroy", function() {
          0 === Ze.countInstance() && (window.document.removeEventListener("unhandledrejection", e2), window.document.removeEventListener("error", t2, true));
        }), o2.config.websocketHack && (n2 = { key: o2.config.id + "-" + this.name, onErr: function(e3) {
          var t3;
          null != (t3 = s2.publishWsErrorLog) && t3.call(s2, e3, o2);
        }, sendErr: function(e3) {
          var t3;
          null != (t3 = s2.publishWsErrorLog) && t3.call(s2, e3, o2);
        } }, this.hackWebsocketConfig = n2, n2 = this.hackWebsocketConfig, window.Proxy) && window.WebSocket && (r2 = window.WebSocket, window && !r2.isHack && (i2 = new Proxy(WebSocket, Ye), r2.isHack = true, window.WebSocket = i2), a2 = n2, C.find(function(e3) {
          return e3.key === a2.key;
        }) || a2 && C.push(a2));
      }, publishErrorLog: function(t2, n2) {
        this.$walk(function(e2) {
          e2 === n2 && e2.normalLogPipeline(t2);
        });
      }, publishWsErrorLog: function(e2, t2) {
        var n2 = e2.connectUrl, r2 = e2.msg, e2 = e2.readyState;
        this.publishErrorLog({ msg: "WEBSOCKET_ERROR: \n              connect: " + n2 + "\n              readyState: " + e2 + "\n              msg: " + r2, level: L.WEBSOCKET_ERROR }, t2);
      }, destroy: function() {
        var t2, e2;
        this.option.publishErrorLog = function() {
        }, this.option.hackWebsocketConfig && (t2 = this.option.hackWebsocketConfig, window.WebSocket = Qe, -1 !== (e2 = C.findIndex(function(e3) {
          return e3.key === t2.key;
        }))) && C.splice(e2, 1);
      } }), tt = (new o({ name: "pagePerformance" }), 3), nt = new o({ name: "pagePerformance", performanceMap: {}, onNewAegis: function(e2) {
        oe() && (R ? this.publish(R, e2) : this.startCalcPerformance(e2));
      }, publish: function(e2, t2) {
        var s2 = this;
        this.$walk(function(a2) {
          a2 === t2 && a2.sendPipeline([function(e3, t3) {
            var n2, r2 = [];
            for (n2 in e3)
              r2.push(n2 + "=" + e3[n2]);
            var o2, i2 = s2.$getConfig(a2);
            if (i2)
              return o2 = -1 === (null == (o2 = a2.config.performanceUrl) ? void 0 : o2.indexOf("?")) ? "?" : "&", "function" == typeof i2.urlHandler ? t3({ url: a2.config.performanceUrl + o2 + r2.join("&") + "&from=" + (encodeURIComponent(i2.urlHandler()) || window.location.href), beanFilter: ["from"], type: v.PERFORMANCE, log: e3 }) : t3({ url: a2.config.performanceUrl + o2 + r2.join("&"), type: v.PERFORMANCE, log: e3 });
          }], v.PERFORMANCE)(e2);
        });
      }, startCalcPerformance: function(n2) {
        var r2 = this;
        try {
          this.getFirstScreenTiming(n2, function(e2) {
            var t2 = performance.timing;
            t2 && (R = { dnsLookup: g(t2.domainLookupEnd - t2.domainLookupStart), tcp: g(t2.connectEnd - t2.connectStart), ssl: g(0 === t2.secureConnectionStart ? 0 : t2.requestStart - t2.secureConnectionStart), ttfb: g(t2.responseStart - t2.requestStart), contentDownload: g(t2.responseEnd - t2.responseStart), domParse: g(t2.domInteractive - t2.domLoading, 0, 15e3, 1070), resourceDownload: g(t2.loadEventStart - t2.domInteractive, 0, 15e3, 1070), firstScreenTiming: g(Math.floor(e2), 0, 15e3, 15e3) }, (t2 = n2.config).extraPerformanceData && "{}" !== JSON.stringify(t2.extraPerformanceData) && (t2 = (e2 = t2.extraPerformanceData).engineInit, e2 = e2.bundleLoad, R = l(l({}, R), { engineInit: g(t2, 0, 1e4), bundleLoad: g(e2, 0, 1e4) })), r2.publish(R, n2));
          });
        } catch (n3) {
        }
      }, getFirstScreenTiming: function(s2, c2) {
        var u2 = this;
        s2.lifeCycle.on("destroy", function() {
          m2 && clearTimeout(m2);
        });
        var l2, f2 = this, n2 = ["script", "style", "link", "br"], d2 = [], p2 = {}, h2 = (-1 < (null == (e2 = null == (e2 = window.PerformanceObserver) ? void 0 : e2.supportedEntryTypes) ? void 0 : e2.indexOf("paint")) && (l2 = new PerformanceObserver(function(e3) {
          e3.getEntries().forEach(function(e4) {
            var t2;
            "paint" === e4.entryType && "first-contentful-paint" === e4.name && 0 < (t2 = document.querySelectorAll("[AEGIS-FIRST-SCREEN-TIMING]")).length && (u2.setFirstScreenInfo(s2, e4.startTime, t2[0], t2), null != c2 && c2(e4.startTime), h2.disconnect(), l2.disconnect());
          });
        })).observe({ entryTypes: ["paint"] }), new MutationObserver(function(e3) {
          var t2 = { roots: [], ignores: [], rootsDomNum: [], time: performance.now() };
          e3.forEach(function(e4) {
            e4 && e4.addedNodes && Array.prototype.slice.call(e4.addedNodes).forEach(function(e5) {
              f2.isEleInArray(e5, t2.ignores) ? t2.ignores.push(e5) : 1 === e5.nodeType && e5.hasAttribute("AEGIS-FIRST-SCREEN-TIMING") ? (Object.prototype.hasOwnProperty.apply(p2, [t2.time]) || (p2[t2.time] = []), p2[t2.time].push(e5)) : 1 === e5.nodeType && (f2.hasAncestorOrSelfWithAttribute(e5, "AEGIS-IGNORE-FIRST-SCREEN-TIMING") ? t2.ignores.push(e5) : -1 !== n2.indexOf(e5.nodeName.toLocaleLowerCase()) || f2.isEleInArray(e5, t2.roots) || (t2.roots.push(e5), t2.rootsDomNum.push(f2.walkAndCount(e5) || 0)));
            });
          }), t2.roots.length && d2.push(t2);
        }));
        h2.observe(document, { childList: true, subtree: true });
        var e2, g2 = function(n3) {
          (n3 = void 0 === n3 ? 0 : n3) || (r2 = 0, (e3 = Object.keys(p2)).length ? (n3 = Math.max.apply(null, e3), u2.setFirstScreenInfo(s2, n3, null == (e3 = p2[n3]) ? void 0 : e3[0], p2)) : d2.forEach(function(e4) {
            for (var t3 = 0; t3 < e4.roots.length; t3++)
              e4.rootsDomNum[t3] > r2 && f2.isInFirstScreen(e4.roots[t3]) && (r2 = e4.rootsDomNum[t3], n3 = e4.time, u2.setFirstScreenInfo(s2, n3, e4.roots[t3]));
          }), d2.length = 0, Object.keys(p2).forEach(function(e4) {
            p2[e4] = p2[e4].map(function(e5) {
              var t3 = { tagName: e5.tagName }, n4 = e5.attributes;
              if (!n4)
                return e5;
              for (var r3 = 0; r3 < n4.length; r3++) {
                var o3 = n4[r3];
                o3.name && (t3[o3.name] = e5.getAttribute(o3.name));
              }
              return t3;
            });
          }));
          var r2, e3 = performance.timing, t2 = e3.domInteractive - e3.domLoading, e3 = e3.loadEventStart - e3.domInteractive, o2 = n3;
          m2 = null;
          for (var i2 = 0, a2 = [t2, e3, o2]; i2 < a2.length; i2++)
            if (a2[i2] <= 0 && 0 < tt) {
              m2 = setTimeout(function() {
                return g2(o2);
              }, 3e3);
              break;
            }
          m2 ? --tt : (h2.disconnect(), null != l2 && l2.disconnect(), null != c2 && c2(n3));
        }, m2 = setTimeout(function() {
          return g2();
        }, 3e3);
      }, setFirstScreenInfo: function(e2, t2, n2, r2) {
        var o2;
        e2.config.id && this.performanceMap[e2.config.id] || (e2.config.id && (this.performanceMap[e2.config.id] = true), ("object" != typeof (null == (o2 = e2.config) ? void 0 : o2.pagePerformance) || null != (o2 = e2.config.pagePerformance) && o2.firstScreenInfo) && (e2.firstScreenInfo = { element: n2, timing: t2, markDoms: r2 }));
      }, isEleInArray: function(e2, t2) {
        return !(!e2 || e2 === document.documentElement) && (-1 !== t2.indexOf(e2) || this.isEleInArray(e2.parentElement, t2));
      }, isInFirstScreen: function(e2) {
        var t2, n2;
        return !(!e2 || "function" != typeof e2.getBoundingClientRect) && (e2 = e2.getBoundingClientRect(), t2 = window.innerHeight, n2 = window.innerWidth, 0 <= e2.left) && e2.left < n2 && 0 <= e2.top && e2.top < t2 && 0 < e2.width && 0 < e2.height;
      }, walkAndCount: function(e2) {
        var t2 = 0;
        if (e2 && 1 === e2.nodeType) {
          t2 += 1;
          var n2 = e2.children;
          if (null != n2 && n2.length)
            for (var r2 = 0; r2 < n2.length; r2++)
              1 === n2[r2].nodeType && n2[r2].hasAttribute("AEGIS-IGNORE-FIRST-SCREEN-TIMING") || (t2 += this.walkAndCount(n2[r2]));
        }
        return t2;
      }, hasAncestorOrSelfWithAttribute: function(e2, t2) {
        for (var n2 = e2; n2 && n2 !== document.body; ) {
          if (n2.hasAttribute(t2))
            return true;
          n2 = n2.parentElement;
        }
        return false;
      } });
      function rt() {
        Ve = [], Ge = -1, O = null, at(addEventListener);
      }
      function ot(e2, t2) {
        O || (O = t2, Ge = e2, Xe = /* @__PURE__ */ new Date(), at(removeEventListener), it());
      }
      function it() {
        var t2;
        0 <= Ge && Ge < Xe - Je && (t2 = { entryType: "first-input", name: O.type, target: O.target, cancelable: O.cancelable, startTime: O.timeStamp, processingStart: O.timeStamp + Ge }, Ve.forEach(function(e2) {
          e2(t2);
        }), Ve = []);
      }
      function at(t2) {
        ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(e2) {
          return t2(e2, $e, T);
        });
      }
      T = { passive: true, capture: true }, Je = /* @__PURE__ */ new Date(), $e = function(e2) {
        var t2, n2, r2, o2;
        function i2() {
          ot(n2, r2), o2();
        }
        function a2() {
          o2();
        }
        e2.cancelable && (t2 = (1e12 < e2.timeStamp ? /* @__PURE__ */ new Date() : performance.now()) - e2.timeStamp, "pointerdown" == e2.type ? (n2 = t2, r2 = e2, o2 = function() {
          removeEventListener("pointerup", i2, T), removeEventListener("pointercancel", a2, T);
        }, addEventListener("pointerup", i2, T), addEventListener("pointercancel", a2, T)) : ot(t2, e2));
      }, Ke = "hidden" === document.visibilityState ? 0 : 1 / 0, addEventListener("visibilitychange", function e2(t2) {
        "hidden" === document.visibilityState && (Ke = t2.timeStamp, removeEventListener("visibilitychange", e2, true));
      }, true), rt(), self.webVitals = { firstInputPolyfill: function(e2) {
        Ve.push(e2), it();
      }, resetFirstInputPolyfill: rt, get firstHiddenTime() {
        return Ke;
      } };
      function A(e2, t2) {
        var n2 = wt(), r2 = "navigate";
        return 0 <= vt ? r2 = "back-forward-cache" : n2 && (document.prerendering || 0 < bt() ? r2 = "prerender" : document.wasDiscarded ? r2 = "restore" : n2.type && (r2 = n2.type.replace(/_/g, "-"))), { name: e2, value: void 0 === t2 ? -1 : t2, rating: "good", delta: 0, entries: [], id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12), navigationType: r2 };
      }
      function st(e2, t2, n2) {
        try {
          var r2;
          if (PerformanceObserver.supportedEntryTypes.includes(e2))
            return (r2 = new PerformanceObserver(function(e3) {
              Promise.resolve().then(function() {
                t2(e3.getEntries());
              });
            })).observe(Object.assign({ type: e2, buffered: true }, n2 || {})), r2;
        } catch (e3) {
        }
      }
      function N(t2, n2, r2, o2) {
        var i2, a2;
        return function(e2) {
          0 <= n2.value && (e2 || o2) && ((a2 = n2.value - (i2 || 0)) || void 0 === i2) && (i2 = n2.value, n2.delta = a2, n2.rating = (e2 = n2.value) > r2[1] ? "poor" : e2 > r2[0] ? "needs-improvement" : "good", t2(n2));
        };
      }
      function ct(e2) {
        requestAnimationFrame(function() {
          return requestAnimationFrame(function() {
            return e2();
          });
        });
      }
      function ut(t2) {
        function e2(e3) {
          "pagehide" !== e3.type && "hidden" !== document.visibilityState || t2(e3);
        }
        addEventListener("visibilitychange", e2, true), addEventListener("pagehide", e2, true);
      }
      function lt(t2) {
        var n2 = false;
        return function(e2) {
          n2 || (t2(e2), n2 = true);
        };
      }
      function ft() {
        return q < 0 && ((q = window.webVitals.firstHiddenTime) === 1 / 0 && Rt(), yt(function() {
          setTimeout(function() {
            q = "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0, Rt();
          }, 0);
        })), { get firstHiddenTime() {
          return q;
        } };
      }
      function dt(e2) {
        document.prerendering ? addEventListener("prerenderingchange", function() {
          return e2();
        }, true) : e2();
      }
      function pt(i2, a2) {
        a2 = a2 || {}, dt(function() {
          var t2, n2 = ft(), r2 = A("FCP"), o2 = st("paint", function(e2) {
            e2.forEach(function(e3) {
              "first-contentful-paint" === e3.name && (o2.disconnect(), e3.startTime < n2.firstHiddenTime) && (r2.value = Math.max(e3.startTime - bt(), 0), r2.entries.push(e3), t2(true));
            });
          });
          o2 && (t2 = N(i2, r2, Ot, a2.reportAllChanges), yt(function(e2) {
            r2 = A("FCP"), t2 = N(i2, r2, Ot, a2.reportAllChanges), ct(function() {
              r2.value = performance.now() - e2.timeStamp, t2(true);
            });
          }));
        });
      }
      function ht(e2) {
        var t2 = e2.name;
        0 < (e2 = e2.value) && (kt[t2] = e2);
      }
      var gt, mt, vt = -1, yt = function(t2) {
        addEventListener("pageshow", function(e2) {
          e2.persisted && (vt = e2.timeStamp, t2(e2));
        }, true);
      }, wt = function() {
        return window.performance && (performance.getEntriesByType && performance.getEntriesByType("navigation")[0] || function() {
          var e2, t2 = performance.timing, n2 = performance.navigation.type, r2 = { entryType: "navigation", startTime: 0, type: 2 == n2 ? "back_forward" : 1 === n2 ? "reload" : "navigate" };
          for (e2 in t2)
            "navigationStart" !== e2 && "toJSON" !== e2 && (r2[e2] = Math.max(t2[e2] - t2.navigationStart, 0));
          return r2;
        }());
      }, bt = function() {
        var e2 = wt();
        return e2 && e2.activationStart || 0;
      }, q = -1, Et = function(e2) {
        "hidden" === document.visibilityState && -1 < q && (q = "visibilitychange" === e2.type ? e2.timeStamp : 0, removeEventListener("visibilitychange", Et, true), removeEventListener("prerenderingchange", Et, true));
      }, Rt = function() {
        addEventListener("visibilitychange", Et, true), addEventListener("prerenderingchange", Et, true);
      }, Ot = [1800, 3e3], Tt = [0.1, 0.25], St = [100, 300], Pt = [2500, 4e3], xt = {}, kt = (new o({ name: "webVitals" }), { FCP: -1, LCP: -1, FID: -1, CLS: -1 }), Lt = new o({ name: "webVitals", onNewAegis: function(e2) {
        if (oe() && "function" == typeof window.PerformanceObserver && "function" == typeof performance.getEntriesByName)
          try {
            pt(ht), l2 = ht, f2 = {}, dt(function() {
              function e3(e4) {
                (e4 = e4[e4.length - 1]) && e4.startTime < r2.firstHiddenTime && (o2.value = Math.max(e4.startTime - bt(), 0), o2.entries = [e4], t2());
              }
              var t2, n2, r2 = ft(), o2 = A("LCP"), i2 = st("largest-contentful-paint", e3);
              i2 && (t2 = N(l2, o2, Pt, f2.reportAllChanges), n2 = lt(function() {
                xt[o2.id] || (e3(i2.takeRecords()), i2.disconnect(), xt[o2.id] = true, t2(true));
              }), ["keydown", "click"].forEach(function(e4) {
                addEventListener(e4, n2, true);
              }), ut(n2), yt(function(e4) {
                o2 = A("LCP"), t2 = N(l2, o2, Pt, f2.reportAllChanges), ct(function() {
                  o2.value = performance.now() - e4.timeStamp, xt[o2.id] = true, t2(true);
                });
              }));
            }), c2 = ht, u2 = {}, dt(function() {
              function t2(e4) {
                e4.startTime < n2.firstHiddenTime && (r2.value = e4.processingStart - e4.startTime, r2.entries.push(e4), i2(true));
              }
              function e3(e4) {
                e4.forEach(t2);
              }
              var n2 = ft(), r2 = A("FID"), o2 = st("first-input", e3), i2 = N(c2, r2, St, u2.reportAllChanges);
              o2 && ut(lt(function() {
                e3(o2.takeRecords()), o2.disconnect();
              })), console.warn('The web-vitals "base+polyfill" build is deprecated. See: https://bit.ly/3aqzsGm'), o2 || window.webVitals.firstInputPolyfill(t2), yt(function() {
                r2 = A("FID"), i2 = N(c2, r2, St, u2.reportAllChanges), window.webVitals.resetFirstInputPolyfill(), window.webVitals.firstInputPolyfill(t2);
              });
            }), a2 = ht, s2 = {}, pt(lt(function() {
              function e3(e4) {
                e4.forEach(function(e5) {
                  var t3, n3;
                  e5.hadRecentInput || (t3 = o2[0], n3 = o2[o2.length - 1], r2 && e5.startTime - n3.startTime < 1e3 && e5.startTime - t3.startTime < 5e3 ? (r2 += e5.value, o2.push(e5)) : (r2 = e5.value, o2 = [e5]));
                }), r2 > n2.value && (n2.value = r2, n2.entries = o2, t2());
              }
              var t2, n2 = A("CLS", 0), r2 = 0, o2 = [], i2 = st("layout-shift", e3);
              i2 && (t2 = N(a2, n2, Tt, s2.reportAllChanges), ut(function() {
                e3(i2.takeRecords()), t2(true);
              }), yt(function() {
                n2 = A("CLS", r2 = 0), t2 = N(a2, n2, Tt, s2.reportAllChanges), ct(function() {
                  return t2();
                });
              }), setTimeout(t2, 0));
            })), ie(this.publish.bind(this, e2), true);
          } catch (e3) {
          }
        var a2, s2, c2, u2, l2, f2;
      }, publish: function(t2) {
        this.$walk(function(i2) {
          var e2;
          i2 === t2 && null != (e2 = i2.sendPipeline) && e2.call(i2, [function(e3, t3) {
            var n2, r2 = [];
            for (n2 in kt)
              r2.push(n2 + "=" + kt[n2]);
            var o2 = -1 === (null == (o2 = null == (o2 = i2.config) ? void 0 : o2.performanceUrl) ? void 0 : o2.indexOf("?")) ? "?" : "&";
            t3({ url: i2.config.webVitalsUrl + o2 + r2.join("&"), type: v.VITALS, log: e3, sendBeacon: true });
          }], v.VITALS)(l({}, kt));
        });
      }, destroy: function() {
        this.option.publish = function() {
        };
      } }), It = (new o({ name: "spa" }), ["replaceState", "pushState", "popstate", "hashchange"]), Ct = new o({ name: "spa", originFireUrl: "", onNewAegis: function(t2) {
        var n2 = this;
        history.pushState = this.wr("pushState") || history.pushState, history.replaceState = this.wr("replaceState") || history.replaceState, this.sendPv = this.sendPv.bind(this), t2.config.spa && this.sendPv(t2), It.forEach(function(e2) {
          return window.addEventListener(e2, function() {
            return n2.sendPv.call(n2, t2);
          });
        });
      }, wr: function(n2) {
        var r2 = history[n2], e2 = "__" + n2 + "__hasWrittenByTamSpa";
        return "function" == typeof r2 && !history[e2] && (Object.defineProperty(history, e2, { value: true, enumerable: false }), function() {
          var e3 = r2.apply(this, arguments), t2 = null;
          return "function" == typeof Event ? t2 = new Event(n2) : (t2 = document.createEvent("HTMLEvents")).initEvent(n2, false, true), window.dispatchEvent(t2), e3;
        });
      }, sendPv: function(o2) {
        var i2 = this;
        setTimeout(function() {
          var r2 = location.href, t2 = location.pathname + location.hash + o2.config.id;
          i2.$walk(function(e2) {
            var n2;
            e2 === o2 && (n2 = e2.config.pvUrl) && t2 && t2 !== i2.originFireUrl && (e2.sendPipeline([function(e3, t3) {
              t3({ url: n2 + "?from=" + encodeURIComponent(r2), beanFilter: ["from"], type: v.PV });
            }], v.PV)(null), i2.originFireUrl = t2);
          });
        }, 0);
      }, destroy: function() {
        this.option.sendPv = function() {
        };
      } }), r = (B(mt = U, r = gt = r), mt.prototype = null === r ? Object.create(r) : (At.prototype = r.prototype, new At()), U.prototype.getBean = function(t2) {
        var n2 = this;
        return void 0 === t2 && (t2 = []), "" + Object.getOwnPropertyNames(this.bean).filter(function(e2) {
          return -1 === t2.indexOf(e2);
        }).map(function(e2) {
          return "from" === e2 ? "from=" + n2.getCurrentPageUrl() : e2 + "=" + n2.bean[e2];
        }).join("&");
      }, U.prototype.getCurrentPageUrl = function() {
        var e2 = this.config.pageUrl || location.href, e2 = (e2 = "function" == typeof this.config.urlHandler ? this.config.urlHandler() : e2).slice(0, 2048);
        return encodeURIComponent(e2);
      }, U.prototype.ready = function() {
        function i2() {
          var e2, n2, r2, o2;
          t2.reportRequestQueue.length && (e2 = t2.reportRequestQueue.splice(0, 1)[0], n2 = e2.options, r2 = e2.success, o2 = e2.fail, t2.$request(n2, function() {
            for (var e3 = [], t3 = 0; t3 < arguments.length; t3++)
              e3[t3] = arguments[t3];
            try {
              return null == r2 ? void 0 : r2.apply(n2, e3);
            } finally {
              i2();
            }
          }, function() {
            for (var e3 = [], t3 = 0; t3 < arguments.length; t3++)
              e3[t3] = arguments[t3];
            try {
              return null == o2 ? void 0 : o2.apply(n2, e3);
            } finally {
              i2();
            }
          }));
        }
        var t2 = this;
        i2(), this.isReportReady = true;
      }, U.prototype.request = function(e2, t2, n2) {
        this.config.reportImmediately || this.isReportReady ? this.$request(e2, t2, n2) : this.reportRequestQueue.push({ options: e2, success: t2, fail: n2 });
      }, U.prototype.$request = function(e2, t2, n2) {
        var r2, o2, i2, a2;
        if (e2 && "string" == typeof e2.url && "" !== e2.url && this.bean.id)
          return a2 = e2.url, false !== e2.addBean && (a2 = a2 + (-1 === a2.indexOf("?") ? "?" : "&") + this.getBean(e2.beanFilter)), e2.url = a2, a2 = e2.method || "get", (e2 = (o2 = this.config.onBeforeRequest) ? o2(e2, this) : e2) ? e2.url ? void ((null != e2 && e2.sendBeacon || this.sendNow) && "function" == typeof (null === navigator || void 0 === navigator ? void 0 : navigator.sendBeacon) ? navigator.sendBeacon(e2.url, e2.data) : ((r2 = new XMLHttpRequest()).sendByAegis = true, r2.addEventListener("readystatechange", function() {
            4 === r2.readyState && (400 <= r2.status || 0 === r2.status ? null != n2 && n2(r2.response) : null != t2 && t2(r2.response));
          }), "get" === a2.toLocaleLowerCase() ? (r2.open("get", (o2 = e2.url, i2 = e2.data, "string" != typeof o2 ? "" : "object" == typeof i2 && i2 ? (a2 = Object.getOwnPropertyNames(i2).map(function(e3) {
            var t3 = i2[e3];
            return e3 + "=" + ("string" == typeof t3 ? encodeURIComponent(t3) : encodeURIComponent(JSON.stringify(t3)));
          }).join("&").replace(/eval/gi, "evaI"), o2 + (-1 === o2.indexOf("?") ? "?" : "&") + a2) : o2)), r2.send()) : (r2.open("post", e2.url), e2.contentType && r2.setRequestHeader("Content-Type", e2.contentType), "string" == typeof e2.data && (e2.data = e2.data.replace(/eval/gi, "evaI")), r2.send(e2.data)))) : console.warn("Please handle the parameters reasonably, options.url is necessary") : console.warn("Sending request blocked");
      }, U.prototype.publishPluginsLogs = function() {
        var e2 = U.installedPlugins.find(function(e3) {
          return "reportAssetSpeed" === e3.name;
        });
        null != e2 && e2.option.collectNotReportedLog(this);
      }, U.prototype.uploadLogs = function(e2, t2) {
        var n2;
        void 0 === e2 && (e2 = {}), void 0 === t2 && (t2 = {}), null != (n2 = this.lifeCycle) && n2.emit("uploadLogs", e2, t2);
      }, U.sessionID = "session-" + Date.now(), U);
      function U(e2) {
        var t2, n2, r2, a2, s2 = gt.call(this, e2) || this;
        s2.sendNow = false, s2.isReportReady = false, s2.reportRequestQueue = [], s2.speedLogPipeline = m([Y(s2), (a2 = s2.config, function(e3, t3) {
          var n3, r3, o2, i2 = "number" == typeof a2.repeat ? a2.repeat : 60;
          !a2.speedSample || i2 <= 0 ? t3(e3) : (n3 = (null == a2 ? void 0 : a2.id) || "0", r3 = b[n3] || {}, Array.isArray(e3) ? (o2 = e3.filter(function(e4) {
            var t4 = !r3[e4.url] || r3[e4.url] < i2;
            return t4 ? (r3[e4.url] = 1 + ~~r3[e4.url], b[n3] = r3) : w[n3] || ve(n3), t4;
          })).length && t3(o2) : !r3[e3.url] || r3[e3.url] < i2 ? (r3[e3.url] = 1 + ~~r3[e3.url], b[n3] = r3, t3(e3)) : w[n3] || ve(n3));
        }), (r2 = s2, function(t3, n3) {
          ze(function(e3) {
            r2.extendBean("netType", e3), n3(t3);
          });
        }), function(e3, t3) {
          null != (n3 = s2.lifeCycle) && n3.emit("beforeReportSpeed", e3);
          var n3, r3 = s2.config.beforeReportSpeed;
          if ((e3 = "function" == typeof r3 ? e3.filter(function(e4) {
            return false !== r3(e4);
          }) : e3).length)
            return t3(e3);
        }, function(e3, t3) {
          t3(e3.map(function(e4) {
            return void 0 !== e4.payload && delete e4.payload, e4;
          }));
        }, function(e3) {
          return s2.sendPipeline([function(e4, t3) {
            var n3, r3, o2, i2;
            t3({ type: v.SPEED, url: "" + s2.config.speedUrl, method: "post", data: (t3 = e4, n3 = l(l({}, s2.bean), { from: s2.getCurrentPageUrl() }), o2 = { fetch: [], static: [], bridge: [] }, i2 = new FormData(), Array.isArray(t3) ? t3.forEach(function(e5) {
              var t4 = Re(e5);
              o2[e5.type].push(t4);
            }) : (r3 = Re(t3), o2[t3.type].push(r3)), i2.append("payload", le(l({ duration: o2 }, n3))), i2), log: e4 });
          }], v.SPEED)(e3);
        }]), e2.asyncPlugin = true;
        try {
          "undefined" != typeof document && (e2.uin = e2.uin || (null != (t2 = document.cookie.match(/\buin=\D+(\d*)/)) ? t2 : [])[1] || (null != (n2 = document.cookie.match(/\bilive_uin=\D*(\d+)/)) ? n2 : [])[1] || ""), s2.init(e2), s2.extendBean("sessionId", U.sessionID), s2.extendBean("from", s2.getCurrentPageUrl()), "undefined" != typeof document && s2.extendBean("referer", encodeURIComponent(document.referrer || "")), e2.ext1 && s2.extendBean("ext1", encodeURIComponent(e2.ext1)), e2.ext2 && s2.extendBean("ext2", encodeURIComponent(e2.ext2)), e2.ext3 && s2.extendBean("ext3", encodeURIComponent(e2.ext3));
        } catch (e3) {
          console.warn(e3), console.log("%cThe above error occurred in the process of initializing Aegis, which will affect your normal use of Aegis.\nIt is recommended that you contact us for feedback and thank you for your support.", "color: red"), s2.sendSDKError(e3);
        }
        return s2;
      }
      function At() {
        this.constructor = mt;
      }
      new o({ name: "ie" }), new o({ name: "onClose" });
      var Nt = new o({ name: "onClose", onNewAegis: function(n2) {
        var r2, o2 = this;
        i.desktop() ? (r2 = window.onunload, window.onunload = function() {
          for (var e2 = [], t2 = 0; t2 < arguments.length; t2++)
            e2[t2] = arguments[t2];
          o2.publishNotReportedLog(n2), null != r2 && r2.call.apply(r2, u([window], e2));
        }) : ie(this.publishNotReportedLog.bind(this, n2), true);
      }, publishNotReportedLog: function(t2) {
        var n2 = this;
        this.$walk(function(e2) {
          e2 === t2 && (e2.sendNow = true, e2.publishPluginsLogs(), n2.publishThrottlePipeLogs(e2));
        });
      }, publishThrottlePipeLogs: function(e2) {
        null != e2 && e2.speedLogPipeline([]), null != e2 && e2.eventPipeline([]), null != e2 && e2.customTimePipeline([]), null != e2 && e2.normalLogPipeline([]);
      } });
      return new o({ name: "aid" }), r.use(et), r.use(Fe), r.use(Te), r.use(nt), r.use(Lt), r.use(Ee), r.use(S), r.use(Ct), r.use(Nt), r.use(We), r;
    });
  }
});
export default require_aegis_min();
//# sourceMappingURL=aegis-web-sdk.js.map
