import {
  __commonJS
} from "./chunk-RSJERJUL.js";

// ../../../../../../Users/riverwater/Desktop/project/self/web/im-app/node_modules/tim-upload-plugin/index.js
var require_tim_upload_plugin = __commonJS({
  "../../../../../../Users/riverwater/Desktop/project/self/web/im-app/node_modules/tim-upload-plugin/index.js"(exports, module) {
    var global;
    var factory;
    global = exports, factory = function() {
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
            s(t2, e2, o2[e2]);
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
      function r(e2, t2) {
        for (var n2 = 0; n2 < t2.length; n2++) {
          var o2 = t2[n2];
          o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e2, o2.key, o2);
        }
      }
      function a(e2, t2, n2) {
        return t2 && r(e2.prototype, t2), n2 && r(e2, n2), Object.defineProperty(e2, "prototype", { writable: false }), e2;
      }
      function s(e2, t2, n2) {
        return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
      }
      function i(e2, t2) {
        if (null == e2)
          return {};
        var n2, o2, r2 = function(e3, t3) {
          if (null == e3)
            return {};
          var n3, o3, r3 = {}, a3 = Object.keys(e3);
          for (o3 = 0; o3 < a3.length; o3++)
            n3 = a3[o3], t3.indexOf(n3) >= 0 || (r3[n3] = e3[n3]);
          return r3;
        }(e2, t2);
        if (Object.getOwnPropertySymbols) {
          var a2 = Object.getOwnPropertySymbols(e2);
          for (o2 = 0; o2 < a2.length; o2++)
            n2 = a2[o2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (r2[n2] = e2[n2]);
        }
        return r2;
      }
      var f = "undefined" != typeof wx && "function" == typeof wx.getSystemInfoSync && Boolean(wx.getSystemInfoSync().fontSizeSetting), u = "undefined" != typeof qq && "function" == typeof qq.getSystemInfoSync && Boolean(qq.getSystemInfoSync().fontSizeSetting), l = "undefined" != typeof tt && "function" == typeof tt.getSystemInfoSync && Boolean(tt.getSystemInfoSync().fontSizeSetting), c = "undefined" != typeof swan && "function" == typeof swan.getSystemInfoSync && Boolean(swan.getSystemInfoSync().fontSizeSetting), y = "undefined" != typeof my && "function" == typeof my.getSystemInfoSync && Boolean(my.getSystemInfoSync().fontSizeSetting), d = "undefined" != typeof uni && "undefined" == typeof window && "function" == typeof uni.requireNativePlugin, p = d && "ios" === uni.getDeviceInfo().platform.toLocaleLowerCase(), g = (d && uni.getDeviceInfo().platform.toLocaleLowerCase(), f || u || l || c || y || d), m = u ? qq : l ? tt : c ? swan : y ? my : f ? wx : d ? uni : {}, h = function(e2) {
        if ("object" !== n(e2) || null === e2)
          return false;
        var t2 = Object.getPrototypeOf(e2);
        if (null === t2)
          return true;
        for (var o2 = t2; null !== Object.getPrototypeOf(o2); )
          o2 = Object.getPrototypeOf(o2);
        return t2 === o2;
      };
      function v(e2) {
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
        if (h(e2)) {
          for (var t2 in e2)
            if (Object.prototype.hasOwnProperty.call(e2, t2))
              return false;
          return true;
        }
        return false;
      }
      var b = function() {
        function e2() {
          o(this, e2);
        }
        return a(e2, [{ key: "request", value: function(e3, t2) {
          var n2 = this, o2 = e3.downloadUrl || "", r2 = (e3.method || "PUT").toUpperCase(), a2 = e3.url;
          if (e3.qs) {
            var s2 = function(e4) {
              var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&", n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "=";
              return v(e4) ? "" : h(e4) ? Object.keys(e4).map(function(o3) {
                var r3 = encodeURIComponent(o3) + n3;
                return Array.isArray(e4[o3]) ? e4[o3].map(function(e5) {
                  return r3 + encodeURIComponent(e5);
                }).join(t3) : r3 + encodeURIComponent(e4[o3]);
              }).filter(Boolean).join(t3) : void 0;
            }(e3.qs);
            s2 && (a2 += "".concat(-1 === a2.indexOf("?") ? "?" : "&").concat(s2));
          }
          var i2 = new XMLHttpRequest();
          i2.open(r2, a2, true), i2.responseType = e3.dataType || "text";
          var f2 = e3.headers || {};
          if (!v(f2))
            for (var u2 in f2)
              f2.hasOwnProperty(u2) && "content-length" !== u2.toLowerCase() && "user-agent" !== u2.toLowerCase() && "origin" !== u2.toLowerCase() && "host" !== u2.toLowerCase() && i2.setRequestHeader(u2, f2[u2]);
          return i2.onload = function() {
            if (200 === i2.status)
              t2(null, n2._xhrRes(i2, n2._xhrBody(i2, o2)));
            else {
              var e4 = { code: i2.status, message: JSON.stringify(i2.responseText) };
              t2(e4, n2._xhrRes(i2, n2._xhrBody(i2)));
            }
          }, i2.onerror = function(e4) {
            var o3 = n2._xhrBody(i2), r3 = { code: i2.status, message: JSON.stringify(i2.responseText) };
            o3 || i2.statusText || 0 !== i2.status || (e4.message = "CORS blocked or network error"), t2(r3, n2._xhrRes(i2, o3)), r3 = null;
          }, e3.onProgress && i2.upload && (i2.upload.onprogress = function(t3) {
            var n3 = t3.total, o3 = t3.loaded, r3 = Math.floor(100 * o3 / n3);
            e3.onProgress({ total: n3, loaded: o3, percent: (r3 >= 100 ? 100 : r3) / 100 });
          }), i2.send(e3.resources), i2;
        } }, { key: "_xhrRes", value: function(e3, t2) {
          var n2 = {};
          return e3.getAllResponseHeaders().trim().split("\n").forEach(function(e4) {
            if (e4) {
              var t3 = e4.indexOf(":"), o2 = e4.substr(0, t3).trim().toLowerCase(), r2 = e4.substr(t3 + 1).trim();
              n2[o2] = r2;
            }
          }), { statusCode: e3.status, statusMessage: e3.statusText, headers: n2, data: t2 };
        } }, { key: "_xhrBody", value: function(e3, t2) {
          return 200 === e3.status && t2 ? { location: t2 } : { response: e3.responseText };
        } }]), e2;
      }(), O = ["unknown", "image", "video", "audio", "log"], w = ["name"], S = function() {
        function e2() {
          o(this, e2);
        }
        return a(e2, [{ key: "request", value: function(e3, n2) {
          var o2 = this, r2 = e3.resources, a2 = void 0 === r2 ? "" : r2, s2 = e3.headers, f2 = void 0 === s2 ? {} : s2, u2 = e3.url, l2 = e3.downloadUrl, c2 = void 0 === l2 ? "" : l2, d2 = u2, g2 = null, h2 = c2.match(/^(https?:\/\/[^/]+\/)([^/]*\/?)(.*)$/), v2 = decodeURIComponent(h2[3]), b2 = v2.indexOf("?") > -1 ? v2.split("?")[0] : v2, S2 = { key: e3.fileKey ? e3.fileKey : b2, success_action_status: 200, "Content-Type": "" }, C = {};
          if (p) {
            var P = u2.split("?sign=");
            if (P.length > 1) {
              var j = P[1];
              d2 = "".concat(P[0], "?sign=").concat(encodeURIComponent("".concat(j))), C.sign = decodeURIComponent(j), C.signature = decodeURIComponent(j);
            }
          }
          var x = { url: d2, header: f2, name: "file", filePath: a2, formData: t(t({}, S2), C), timeout: e3.timeout || 3e5 };
          if (y) {
            var R = x;
            R.name, x = t(t({}, i(R, w)), {}, { fileName: "file", fileType: O[e3.fileType] });
          }
          return (g2 = m.uploadFile(t(t({}, x), {}, { success: function(e4) {
            o2._handleResponse({ response: e4, downloadUrl: c2, callback: n2 });
          }, fail: function(e4) {
            o2._handleResponse({ response: e4, downloadUrl: c2, callback: n2 });
          } }))).onProgressUpdate && g2.onProgressUpdate(function(t2) {
            e3.onProgress && e3.onProgress({ total: t2.totalBytesExpectedToSend, loaded: t2.totalBytesSent, percent: Math.floor(t2.progress) / 100 });
          }), g2;
        } }, { key: "_handleResponse", value: function(e3) {
          var n2 = e3.downloadUrl, o2 = e3.response, r2 = e3.callback, a2 = o2.header, s2 = {};
          if (a2)
            for (var i2 in a2)
              a2.hasOwnProperty(i2) && (s2[i2.toLowerCase()] = a2[i2]);
          var f2 = +o2.statusCode;
          200 === f2 ? r2(null, { statusCode: f2, headers: s2, data: t(t({}, o2.data), {}, { location: n2 }) }) : r2({ code: f2, message: JSON.stringify(o2.data) }, { statusCode: f2, headers: s2, data: void 0 });
        } }]), e2;
      }();
      return function() {
        function e2() {
          o(this, e2), console.log("TIMUploadPlugin.VERSION: ".concat("1.3.0")), this.retry = 1, this.tryCount = 0, this.systemClockOffset = 0, this.httpRequest = g ? new S() : new b();
        }
        return a(e2, [{ key: "uploadFile", value: function(e3, t2) {
          var n2 = this;
          return this.httpRequest.request(e3, function(o2, r2) {
            o2 && n2.tryCount < n2.retry && n2.allowRetry(o2) ? (n2.tryCount++, n2.uploadFile(e3, t2)) : (n2.tryCount = 0, t2(o2, r2));
          });
        } }, { key: "allowRetry", value: function(e3) {
          var t2 = false, n2 = false;
          if (e3) {
            var o2 = e3.headers && (e3.headers.date || e3.headers.Date) || e3.error && e3.error.ServerTime;
            try {
              var r2 = e3.error && e3.error.Code, a2 = e3.error && e3.error.Message;
              ("RequestTimeTooSkewed" === r2 || "AccessDenied" === r2 && "Request has expired" === a2) && (n2 = true);
            } catch (f2) {
            }
            if (n2 && o2) {
              var s2 = Date.now(), i2 = Date.parse(o2);
              Math.abs(s2 + this.systemClockOffset - i2) >= 3e4 && (this.systemClockOffset = i2 - s2, t2 = true);
            } else
              5 === Math.floor(e3.statusCode / 100) && (t2 = true);
          }
          return t2;
        } }]), e2;
      }();
    }, "object" == typeof exports && "undefined" != typeof module ? module.exports = factory() : "function" == typeof define && define.amd ? define(factory) : (global = global || self).TIMUploadPlugin = factory();
  }
});
export default require_tim_upload_plugin();
//# sourceMappingURL=tim-upload-plugin.js.map
