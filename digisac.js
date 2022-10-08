! function (e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var r = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = e, n.c = t, n.d = function (e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) n.d(o, r, function (t) {
                return e[t]
            }.bind(null, r));
        return o
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "/", n(n.s = 882)
}({
    882: function (e, t) {
        function n(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        if (!window._digisac.id) throw new Error("window._digisac.id not set");
        window._digisac.payload && window._digisac.payload.onStart && (window._digisac.payload.onStart = String("(" + window._digisac.payload.onStart + ")()"));
        var r = "https://webchat.digisac.app";
        document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend", '<link rel="stylesheet" href="'.concat(r, '/embedded.css" />'));
        var i = document.createElement("iframe"),
            a = document.createElement("div");
        i.className = "myIframe-widgets21321333", a.className = "close-widgets-container", a.id = "umadivqualquer", i.setAttribute("src", "".concat(r, "/widgets/").concat(window._digisac.id)), i.frameBorder = "0", i.allow = "microphone", i.allowFullscreen = !0, window.onload = function () {
            var e = i.contentWindow,
                t = document.getElementById("btn-webchat");
            e.document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend", '<style> .ellipse { width: 48px !important; height: 48px !important; background-image: url(https://bet-files.suprema.group/whatsapp.png) !important; } </style>');
            window.toggleWidgets = !1, t && t.addEventListener("click", (function (t) {
                t.preventDefault(), window.toggleWidgets ? (window.toggleWidgets = !1, e.postMessage({
                    toggle: window.toggleWidgets
                }, r)) : (window.toggleWidgets = !0, e.postMessage({
                    toggle: window.toggleWidgets
                }, r))
            })), e.postMessage(function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? n(Object(r), !0).forEach((function (t) {
                        o(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }({}, window._digisac.payload), r)
        }, window.addEventListener("message", (function (e) {
            var t = JSON.parse(e.data).c;
            "close-widgets-container" == t ? (a.classList.remove("open-widgets-container"), window.document.querySelector("body").classList.remove("chatParent"), a.classList.add("close-widgets-container")) : "open-widgets-container" == t && (a.classList.remove("close-widgets-container"), window.document.querySelector("body").classList.add("chatParent"), a.classList.add("open-widgets-container"))
        })), a.appendChild(i), document.body.appendChild(a)
    }
});