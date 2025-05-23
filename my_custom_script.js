

"use strict";
function _typeof(t) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        })(t);
}
!(function () {
  var t = function () {
    var t,
      e,
      o = [],
      n = window,
      r = n;
    for (; r; ) {
      try {
        if (r.frames.__tcfapiLocator) {
          t = r;
          break;
        }
      } catch (t) {}
      if (r === n.top) break;
      r = r.parent;
    }
    t ||
      (!function t() {
        var e = n.document,
          o = !!n.frames.__tcfapiLocator;
        if (!o)
          if (e.body) {
            var r = e.createElement("iframe");
            r.style.cssText = "display:none";
            r.name = "__tcfapiLocator";
            e.body.appendChild(r);
          } else setTimeout(t, 5);
        return !o;
      })(),
      (n.__tcfapi = function () {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        if (!n.length) return o;
        if ("setGdprApplies" === n[0]) {
          if (n.length > 3 && 2 === parseInt(n[1], 10) && "boolean" == typeof n[3]) {
            e = n[3];
            "function" == typeof n[2] && n[2]("set", !0);
          }
        } else if ("ping" === n[0]) {
          "function" == typeof n[2] && n[2]({ gdprApplies: e, cmpLoaded: !1, cmpStatus: "stub" });
        } else o.push(n);
      }),
      n.addEventListener(
        "message",
        function (t) {
          var e = "string" == typeof t.data,
            o = {};
          if (e)
            try {
              o = JSON.parse(t.data);
            } catch (t) {}
          else o = t.data;
          var n = "object" === _typeof(o) && null !== o ? o.__tcfapiCall : null;
          n &&
            window.__tcfapi(
              n.command,
              n.version,
              function (o, r) {
                var a = { __tcfapiReturn: { returnValue: o, success: r, callId: n.callId } };
                t && t.source && t.source.postMessage && t.source.postMessage(e ? JSON.stringify(a) : a, "*");
              },
              n.parameter
            );
        },
        !1
      );
  };
  "undefined" != typeof module ? (module.exports = t) : t();
})();


window._sp_queue = [];

window._sp_ = {
  config: {
    accountId: 1975,
    baseEndpoint: 'https://cdn.privacy-mgmt.com',
    gdpr: {},
    propertyHref: 'https://motorsport.tv/',
    events: {
      onMessageReady: function () {
        console.log('[event] onMessageReady', arguments);
      },
      onMessageReceiveData: function () {
        console.log('[event] onMessageReceiveData', arguments);
      },
      onSPPMObjectReady: function () {
        console.log('[event] onSPPMObjectReady', arguments);
      },
      onSPReady: function () {
        console.log('[event] onSPReady', arguments);
      },
      onError: function () {
        console.log('[event] onError', arguments);
      },
      onMessageChoiceSelect: function () {
        console.log('[event] onMessageChoiceSelect', arguments);
      },
      onConsentReady: function (consentUUID, euconsent) {
        console.log('[event] onConsentReady', arguments);
      },
      onPrivacyManagerAction: function () {
        console.log('[event] onPrivacyManagerAction', arguments);
      },
      onPMCancel: function () {
        console.log('[event] onPMCancel', arguments);
      }
    }
  }
};



