/*! For license information please see app.js.LICENSE.txt */
(() => {
    var e = {
            302: (e, t, i) => {
                var n, s;
                ! function(o) {
                    if (void 0 === (s = "function" == typeof(n = o) ? n.call(t, i, t, e) : n) || (e.exports = s), !0, e.exports = o(), !!0) {
                        var r = window.Cookies,
                            a = window.Cookies = o();
                        a.noConflict = function() {
                            return window.Cookies = r, a
                        }
                    }
                }((function() {
                    function e() {
                        for (var e = 0, t = {}; e < arguments.length; e++) {
                            var i = arguments[e];
                            for (var n in i) t[n] = i[n]
                        }
                        return t
                    }

                    function t(e) {
                        return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
                    }
                    return function i(n) {
                        function s() {}

                        function o(t, i, o) {
                            if ("undefined" != typeof document) {
                                "number" == typeof(o = e({
                                    path: "/"
                                }, s.defaults, o)).expires && (o.expires = new Date(1 * new Date + 864e5 * o.expires)), o.expires = o.expires ? o.expires.toUTCString() : "";
                                try {
                                    var r = JSON.stringify(i);
                                    /^[\{\[]/.test(r) && (i = r)
                                } catch (e) {}
                                i = n.write ? n.write(i, t) : encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                                var a = "";
                                for (var l in o) o[l] && (a += "; " + l, !0 !== o[l] && (a += "=" + o[l].split(";")[0]));
                                return document.cookie = t + "=" + i + a
                            }
                        }

                        function r(e, i) {
                            if ("undefined" != typeof document) {
                                for (var s = {}, o = document.cookie ? document.cookie.split("; ") : [], r = 0; r < o.length; r++) {
                                    var a = o[r].split("="),
                                        l = a.slice(1).join("=");
                                    i || '"' !== l.charAt(0) || (l = l.slice(1, -1));
                                    try {
                                        var c = t(a[0]);
                                        if (l = (n.read || n)(l, c) || t(l), i) try {
                                            l = JSON.parse(l)
                                        } catch (e) {}
                                        if (s[c] = l, e === c) break
                                    } catch (e) {}
                                }
                                return e ? s[e] : s
                            }
                        }
                        return s.set = o, s.get = function(e) {
                            return r(e, !1)
                        }, s.getJSON = function(e) {
                            return r(e, !0)
                        }, s.remove = function(t, i) {
                            o(t, "", e(i, {
                                expires: -1
                            }))
                        }, s.defaults = {}, s.withConverter = i, s
                    }((function() {}))
                }))
            },
            585: function(e) {
                e.exports = function() {
                    "use strict";

                    function e() {
                        return (e = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var i = arguments[t];
                                for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
                            }
                            return e
                        }).apply(this, arguments)
                    }
                    var t = "undefined" != typeof window,
                        i = t && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
                        n = t && "IntersectionObserver" in window,
                        s = t && "classList" in document.createElement("p"),
                        o = t && window.devicePixelRatio > 1,
                        r = {
                            elements_selector: ".lazy",
                            container: i || t ? document : null,
                            threshold: 300,
                            thresholds: null,
                            data_src: "src",
                            data_srcset: "srcset",
                            data_sizes: "sizes",
                            data_bg: "bg",
                            data_bg_hidpi: "bg-hidpi",
                            data_bg_multi: "bg-multi",
                            data_bg_multi_hidpi: "bg-multi-hidpi",
                            data_poster: "poster",
                            class_applied: "applied",
                            class_loading: "loading",
                            class_loaded: "loaded",
                            class_error: "error",
                            class_entered: "entered",
                            class_exited: "exited",
                            unobserve_completed: !0,
                            unobserve_entered: !1,
                            cancel_on_exit: !0,
                            callback_enter: null,
                            callback_exit: null,
                            callback_applied: null,
                            callback_loading: null,
                            callback_loaded: null,
                            callback_error: null,
                            callback_finish: null,
                            callback_cancel: null,
                            use_native: !1
                        },
                        a = function(t) {
                            return e({}, r, t)
                        },
                        l = function(e, t) {
                            var i, n = "LazyLoad::Initialized",
                                s = new e(t);
                            try {
                                i = new CustomEvent(n, {
                                    detail: {
                                        instance: s
                                    }
                                })
                            } catch (e) {
                                (i = document.createEvent("CustomEvent")).initCustomEvent(n, !1, !1, {
                                    instance: s
                                })
                            }
                            window.dispatchEvent(i)
                        },
                        c = "loading",
                        d = "loaded",
                        u = "applied",
                        h = "error",
                        f = "native",
                        p = "data-",
                        g = "ll-status",
                        m = function(e, t) {
                            return e.getAttribute(p + t)
                        },
                        v = function(e) {
                            return m(e, g)
                        },
                        y = function(e, t) {
                            return function(e, t, i) {
                                var n = "data-ll-status";
                                null !== i ? e.setAttribute(n, i) : e.removeAttribute(n)
                            }(e, 0, t)
                        },
                        b = function(e) {
                            return y(e, null)
                        },
                        w = function(e) {
                            return null === v(e)
                        },
                        k = function(e) {
                            return v(e) === f
                        },
                        x = [c, d, u, h],
                        S = function(e, t, i, n) {
                            e && (void 0 === n ? void 0 === i ? e(t) : e(t, i) : e(t, i, n))
                        },
                        E = function(e, t) {
                            s ? e.classList.add(t) : e.className += (e.className ? " " : "") + t
                        },
                        L = function(e, t) {
                            s ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
                        },
                        T = function(e) {
                            return e.llTempImage
                        },
                        A = function(e, t) {
                            if (t) {
                                var i = t._observer;
                                i && i.unobserve(e)
                            }
                        },
                        C = function(e, t) {
                            e && (e.loadingCount += t)
                        },
                        _ = function(e, t) {
                            e && (e.toLoadCount = t)
                        },
                        M = function(e) {
                            for (var t, i = [], n = 0; t = e.children[n]; n += 1) "SOURCE" === t.tagName && i.push(t);
                            return i
                        },
                        O = function(e, t, i) {
                            i && e.setAttribute(t, i)
                        },
                        q = function(e, t) {
                            e.removeAttribute(t)
                        },
                        P = function(e) {
                            return !!e.llOriginalAttrs
                        },
                        z = function(e) {
                            if (!P(e)) {
                                var t = {};
                                t.src = e.getAttribute("src"), t.srcset = e.getAttribute("srcset"), t.sizes = e.getAttribute("sizes"), e.llOriginalAttrs = t
                            }
                        },
                        H = function(e) {
                            if (P(e)) {
                                var t = e.llOriginalAttrs;
                                O(e, "src", t.src), O(e, "srcset", t.srcset), O(e, "sizes", t.sizes)
                            }
                        },
                        I = function(e, t) {
                            O(e, "sizes", m(e, t.data_sizes)), O(e, "srcset", m(e, t.data_srcset)), O(e, "src", m(e, t.data_src))
                        },
                        D = function(e) {
                            q(e, "src"), q(e, "srcset"), q(e, "sizes")
                        },
                        N = function(e, t) {
                            var i = e.parentNode;
                            i && "PICTURE" === i.tagName && M(i).forEach(t)
                        },
                        B = {
                            IMG: function(e, t) {
                                N(e, (function(e) {
                                    z(e), I(e, t)
                                })), z(e), I(e, t)
                            },
                            IFRAME: function(e, t) {
                                O(e, "src", m(e, t.data_src))
                            },
                            VIDEO: function(e, t) {
                                ! function(e, i) {
                                    M(e).forEach((function(e) {
                                        O(e, "src", m(e, t.data_src))
                                    }))
                                }(e), O(e, "poster", m(e, t.data_poster)), O(e, "src", m(e, t.data_src)), e.load()
                            }
                        },
                        $ = function(e, t) {
                            var i = B[e.tagName];
                            i && i(e, t)
                        },
                        V = function(e, t, i) {
                            C(i, 1), E(e, t.class_loading), y(e, c), S(t.callback_loading, e, i)
                        },
                        W = ["IMG", "IFRAME", "VIDEO"],
                        Y = function(e, t) {
                            !t || function(e) {
                                return e.loadingCount > 0
                            }(t) || function(e) {
                                return e.toLoadCount > 0
                            }(t) || S(e.callback_finish, t)
                        },
                        X = function(e, t, i) {
                            e.addEventListener(t, i), e.llEvLisnrs[t] = i
                        },
                        R = function(e, t, i) {
                            e.removeEventListener(t, i)
                        },
                        j = function(e) {
                            return !!e.llEvLisnrs
                        },
                        F = function(e) {
                            if (j(e)) {
                                var t = e.llEvLisnrs;
                                for (var i in t) {
                                    var n = t[i];
                                    R(e, i, n)
                                }
                                delete e.llEvLisnrs
                            }
                        },
                        G = function(e, t, i) {
                            ! function(e) {
                                delete e.llTempImage
                            }(e), C(i, -1),
                                function(e) {
                                    e && (e.toLoadCount -= 1)
                                }(i), L(e, t.class_loading), t.unobserve_completed && A(e, i)
                        },
                        U = function(e, t, i) {
                            var n = T(e) || e;
                            j(n) || function(e, t, i) {
                                j(e) || (e.llEvLisnrs = {});
                                var n = "VIDEO" === e.tagName ? "loadeddata" : "load";
                                X(e, n, t), X(e, "error", i)
                            }(n, (function(s) {
                                ! function(e, t, i, n) {
                                    var s = k(t);
                                    G(t, i, n), E(t, i.class_loaded), y(t, d), S(i.callback_loaded, t, n), s || Y(i, n)
                                }(0, e, t, i), F(n)
                            }), (function(s) {
                                ! function(e, t, i, n) {
                                    var s = k(t);
                                    G(t, i, n), E(t, i.class_error), y(t, h), S(i.callback_error, t, n), s || Y(i, n)
                                }(0, e, t, i), F(n)
                            }))
                        },
                        K = function(e, t, i) {
                            ! function(e) {
                                e.llTempImage = document.createElement("IMG")
                            }(e), U(e, t, i),
                                function(e, t, i) {
                                    var n = m(e, t.data_bg),
                                        s = m(e, t.data_bg_hidpi),
                                        r = o && s ? s : n;
                                    r && (e.style.backgroundImage = 'url("'.concat(r, '")'), T(e).setAttribute("src", r), V(e, t, i))
                                }(e, t, i),
                                function(e, t, i) {
                                    var n = m(e, t.data_bg_multi),
                                        s = m(e, t.data_bg_multi_hidpi),
                                        r = o && s ? s : n;
                                    r && (e.style.backgroundImage = r, function(e, t, i) {
                                        E(e, t.class_applied), y(e, u), t.unobserve_completed && A(e, t), S(t.callback_applied, e, i)
                                    }(e, t, i))
                                }(e, t, i)
                        },
                        Z = function(e, t, i) {
                            ! function(e) {
                                return W.indexOf(e.tagName) > -1
                            }(e) ? K(e, t, i): function(e, t, i) {
                                U(e, t, i), $(e, t), V(e, t, i)
                            }(e, t, i)
                        },
                        Q = ["IMG", "IFRAME"],
                        J = function(e) {
                            return e.use_native && "loading" in HTMLImageElement.prototype
                        },
                        ee = function(e, t, i) {
                            e.forEach((function(e) {
                                return function(e) {
                                    return e.isIntersecting || e.intersectionRatio > 0
                                }(e) ? function(e, t, i, n) {
                                    y(e, "entered"), E(e, i.class_entered), L(e, i.class_exited),
                                        function(e, t, i) {
                                            t.unobserve_entered && A(e, i)
                                        }(e, i, n), S(i.callback_enter, e, t, n),
                                        function(e) {
                                            return x.indexOf(v(e)) >= 0
                                        }(e) || Z(e, i, n)
                                }(e.target, e, t, i) : function(e, t, i, n) {
                                    w(e) || (E(e, i.class_exited), function(e, t, i, n) {
                                        i.cancel_on_exit && function(e) {
                                            return v(e) === c
                                        }(e) && "IMG" === e.tagName && (F(e), function(e) {
                                            N(e, (function(e) {
                                                D(e)
                                            })), D(e)
                                        }(e), function(e) {
                                            N(e, (function(e) {
                                                H(e)
                                            })), H(e)
                                        }(e), L(e, i.class_loading), C(n, -1), b(e), S(i.callback_cancel, e, t, n))
                                    }(e, t, i, n), S(i.callback_exit, e, t, n))
                                }(e.target, e, t, i)
                            }))
                        },
                        te = function(e) {
                            return Array.prototype.slice.call(e)
                        },
                        ie = function(e) {
                            return e.container.querySelectorAll(e.elements_selector)
                        },
                        ne = function(e) {
                            return function(e) {
                                return v(e) === h
                            }(e)
                        },
                        se = function(e, t) {
                            return function(e) {
                                return te(e).filter(w)
                            }(e || ie(t))
                        },
                        oe = function(e, i) {
                            var s = a(e);
                            this._settings = s, this.loadingCount = 0,
                                function(e, t) {
                                    n && !J(e) && (t._observer = new IntersectionObserver((function(i) {
                                        ee(i, e, t)
                                    }), function(e) {
                                        return {
                                            root: e.container === document ? null : e.container,
                                            rootMargin: e.thresholds || e.threshold + "px"
                                        }
                                    }(e)))
                                }(s, this),
                                function(e, i) {
                                    t && window.addEventListener("online", (function() {
                                        ! function(e, t) {
                                            var i;
                                            (i = ie(e), te(i).filter(ne)).forEach((function(t) {
                                                L(t, e.class_error), b(t)
                                            })), t.update()
                                        }(e, i)
                                    }))
                                }(s, this), this.update(i)
                        };
                    return oe.prototype = {
                        update: function(e) {
                            var t, s, o = this._settings,
                                r = se(e, o);
                            _(this, r.length), !i && n ? J(o) ? function(e, t, i) {
                                e.forEach((function(e) {
                                    -1 !== Q.indexOf(e.tagName) && (e.setAttribute("loading", "lazy"), function(e, t, i) {
                                        U(e, t, i), $(e, t), y(e, f)
                                    }(e, t, i))
                                })), _(i, 0)
                            }(r, o, this) : (s = r, function(e) {
                                e.disconnect()
                            }(t = this._observer), function(e, t) {
                                t.forEach((function(t) {
                                    e.observe(t)
                                }))
                            }(t, s)) : this.loadAll(r)
                        },
                        destroy: function() {
                            this._observer && this._observer.disconnect(), ie(this._settings).forEach((function(e) {
                                delete e.llOriginalAttrs
                            })), delete this._observer, delete this._settings, delete this.loadingCount, delete this.toLoadCount
                        },
                        loadAll: function(e) {
                            var t = this,
                                i = this._settings;
                            se(e, i).forEach((function(e) {
                                A(e, t), Z(e, i, t)
                            }))
                        }
                    }, oe.load = function(e, t) {
                        var i = a(t);
                        Z(e, i)
                    }, oe.resetStatus = function(e) {
                        b(e)
                    }, t && function(e, t) {
                        if (t)
                            if (t.length)
                                for (var i, n = 0; i = t[n]; n += 1) l(e, i);
                            else l(e, t)
                    }(oe, window.lazyLoadOptions), oe
                }()
            },
            397: e => {
                const t = (() => {
                    "use strict";
                    const e = {
                        time: 300,
                        padding: 40,
                        offset: 40,
                        keyboard: !0,
                        cubicBezier: "cubic-bezier(.2, 0, .1, 1)",
                        background: "var(--bg-color-80, rgba(255, 255, 255, .98))",
                        zIndex: 1e6,
                        beforeShow: void 0,
                        afterShow: void 0,
                        beforeHide: void 0,
                        afterHide: void 0
                    };
                    var t, i = {};

                    function n(e) {
                        const t = i[e];
                        if (t) {
                            if ("function" != typeof t) throw `config.${e} must be a function!`;
                            Reflect.apply(t, i, [i])
                        }
                    }

                    function s(t) {
                        t.src && !t.classList.contains("lightense-target") && (t.classList.add("lightense-target"), t.addEventListener("click", (function(s) {
                            if (i.keyboard && (s.metaKey || s.ctrlKey)) return window.open(t.src, "_blank");
                            ! function(t) {
                                if (i.target = t, i.target.classList.contains("lightense-open")) return r();
                                n("beforeShow"), i.scrollY = window.scrollY,
                                    function(e, t, i) {
                                        e.addEventListener(t, (function n(s) {
                                            Reflect.apply(i, this, s), e.removeEventListener(t, n)
                                        }))
                                    }(i.target, "transitionend", (function() {
                                        n("afterShow")
                                    }));
                                var s = new Image;
                                s.onload = function() {
                                    ! function(t) {
                                        var n = t.width,
                                            s = t.height,
                                            o = window.pageYOffset || document.documentElement.scrollTop || 0,
                                            r = window.pageXOffset || document.documentElement.scrollLeft || 0,
                                            a = i.target.getBoundingClientRect(),
                                            l = n / a.width,
                                            c = window.innerWidth || document.documentElement.clientWidth || 0,
                                            d = window.innerHeight || document.documentElement.clientHeight || 0,
                                            u = i.target.getAttribute("data-lightense-padding") || i.target.getAttribute("data-padding") || i.padding,
                                            h = c > u ? c - u : c - e.padding,
                                            f = d > u ? d - u : d - e.padding,
                                            p = n / s,
                                            g = h / f;
                                        i.scaleFactor = n < h && s < f ? l : p < g ? f / s * l : h / n * l;
                                        var m = c / 2,
                                            v = o + d / 2,
                                            y = a.left + r + a.width / 2,
                                            b = a.top + o + a.height / 2;
                                        i.translateX = Math.round(m - y), i.translateY = Math.round(v - b)
                                    }(this),
                                    function() {
                                        i.target.classList.add("lightense-open"), i.wrap = document.createElement("div"), i.wrap.className = "lightense-wrap", setTimeout((function() {
                                            i.target.style.transform = "scale(" + i.scaleFactor + ")"
                                        }), 20), i.target.parentNode.insertBefore(i.wrap, i.target), i.wrap.appendChild(i.target), setTimeout((function() {
                                            i.wrap.style.transform = "translate3d(" + i.translateX + "px, " + i.translateY + "px, 0)"
                                        }), 20);
                                        var e = {
                                                cubicBezier: i.target.getAttribute("data-lightense-cubic-bezier") || i.cubicBezier,
                                                background: i.target.getAttribute("data-lightense-background") || i.target.getAttribute("data-background") || i.background,
                                                zIndex: i.target.getAttribute("data-lightense-z-index") || i.zIndex
                                            },
                                            t = {...i, ...e
                                            };
                                        o("lightense-images-css-computed", `\n      :root {\n        --lightense-z-index: ${t.zIndex-1};\n        --lightense-backdrop: ${t.background};\n        --lightense-duration: ${t.time}ms;\n        --lightense-timing-func: ${t.cubicBezier};\n      }`), i.container.style.visibility = "visible", setTimeout((function() {
                                            i.container.style.opacity = "1"
                                        }), 20)
                                    }(), window.addEventListener("keyup", l, !1), window.addEventListener("scroll", a, !1), i.container.addEventListener("click", r, !1)
                                }, s.src = i.target.src
                            }(this)
                        }), !1))
                    }

                    function o(e, t) {
                        var i = document.head || document.getElementsByTagName("head")[0];
                        document.getElementById(e) && document.getElementById(e).remove();
                        var n = document.createElement("style");
                        n.id = e, n.styleSheet ? n.styleSheet.cssText = t : n.appendChild(document.createTextNode(t)), i.appendChild(n)
                    }

                    function r() {
                        n("beforeHide"), window.removeEventListener("keyup", l, !1), window.removeEventListener("scroll", a, !1), i.container.removeEventListener("click", r, !1), i.target.classList.remove("lightense-open"), i.wrap.style.transform = "", i.target.style.transform = "", i.target.classList.add("lightense-transitioning"), i.container.style.opacity = "", setTimeout((function() {
                            n("afterHide"), i.container.style.visibility = "", i.container.style.backgroundColor = "", i.wrap.parentNode.replaceChild(i.target, i.wrap), i.target.classList.remove("lightense-transitioning")
                        }), i.time)
                    }

                    function a() {
                        Math.abs(i.scrollY - window.scrollY) >= i.offset && r()
                    }

                    function l(e) {
                        e.preventDefault(), 27 === e.keyCode && r()
                    }
                    return function(n, r = {}) {
                        t = function(e) {
                                switch (typeof e) {
                                    case "undefined":
                                        throw "You need to pass an element!";
                                    case "string":
                                        return document.querySelectorAll(e);
                                    case "object":
                                        return e
                                }
                            }(n), o("lightense-images-css", `\n  :root {\n    --lightense-z-index: ${(i={...e,...r}).zIndex-1};\n    --lightense-backdrop: ${i.background};\n    --lightense-duration: ${i.time}ms;\n    --lightense-timing-func: ${i.cubicBezier};\n  }\n  .lightense-backdrop {\n    box-sizing: border-box;\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    overflow: hidden;\n    z-index: calc(var(--lightense-z-index) - 1);\n    padding: 0;\n    margin: 0;\n    transition: opacity var(--lightense-duration) ease;\n    cursor: zoom-out;\n    opacity: 0;\n    background-color: var(--lightense-backdrop);\n    visibility: hidden;\n  }\n  @supports (-webkit-backdrop-filter: blur(30px)) {\n    .lightense-backdrop {\n      background-color: var(--lightense-backdrop);\n      -webkit-backdrop-filter: blur(30px);\n    }\n  }\n  @supports (backdrop-filter: blur(30px)) {\n    .lightense-backdrop {\n      background-color: var(--lightense-backdrop);\n      backdrop-filter: blur(30px);\n    }\n  }\n  .lightense-wrap {\n    position: relative;\n    transition: transform var(--lightense-duration) var(--lightense-timing-func);\n    z-index: var(--lightense-z-index);\n    pointer-events: none;\n  }\n  .lightense-target {\n    cursor: zoom-in;\n    transition: transform var(--lightense-duration) var(--lightense-timing-func);\n    pointer-events: auto;\n  }\n  .lightense-open {\n    cursor: zoom-out;\n  }\n  .lightense-transitioning {\n    pointer-events: none;\n  }`), null === document.querySelector(".lightense-backdrop") ? (i.container = document.createElement("div"), i.container.className = "lightense-backdrop", document.body.appendChild(i.container)) : i.container = document.querySelector(".lightense-backdrop"),
                            function(e) {
                                var t = e.length;
                                if (t)
                                    for (var i = 0; i < t; i++) s(e[i]);
                                else s(e)
                            }(t)
                    }
                })();
                e.exports = t
            },
            970: function(e) {
                e.exports = function() {
                    "use strict";

                    function e(t) {
                        return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(t)
                    }

                    function t(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }

                    function i(e, t) {
                        for (var i = 0; i < t.length; i++) {
                            var n = t[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }

                    function n(e, t, n) {
                        return t && i(e.prototype, t), n && i(e, n), e
                    }

                    function s(e) {
                        return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                            return e.__proto__ || Object.getPrototypeOf(e)
                        })(e)
                    }

                    function o(e, t) {
                        return (o = Object.setPrototypeOf || function(e, t) {
                            return e.__proto__ = t, e
                        })(e, t)
                    }

                    function r(e, t) {
                        if (t && ("object" == typeof t || "function" == typeof t)) return t;
                        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(e)
                    }

                    function a(e) {
                        var t = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (e) {
                                return !1
                            }
                        }();
                        return function() {
                            var i, n = s(e);
                            if (t) {
                                var o = s(this).constructor;
                                i = Reflect.construct(n, arguments, o)
                            } else i = n.apply(this, arguments);
                            return r(this, i)
                        }
                    }

                    function l(e, t) {
                        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = s(e)););
                        return e
                    }

                    function c() {
                        return (c = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, i) {
                            var n = l(e, t);
                            if (n) {
                                var s = Object.getOwnPropertyDescriptor(n, t);
                                return s.get ? s.get.call(arguments.length < 3 ? e : i) : s.value
                            }
                        }).apply(this, arguments)
                    }
                    var d = {
                        type: "slider",
                        startAt: 0,
                        perView: 1,
                        focusAt: 0,
                        gap: 10,
                        autoplay: !1,
                        hoverpause: !0,
                        keyboard: !0,
                        bound: !1,
                        swipeThreshold: 80,
                        dragThreshold: 120,
                        perSwipe: "",
                        touchRatio: .5,
                        touchAngle: 45,
                        animationDuration: 400,
                        rewind: !0,
                        rewindDuration: 800,
                        animationTimingFunc: "cubic-bezier(.165, .840, .440, 1)",
                        waitForTransition: !0,
                        throttle: 10,
                        direction: "ltr",
                        peek: 0,
                        cloningRatio: 1,
                        breakpoints: {},
                        classes: {
                            swipeable: "glide--swipeable",
                            dragging: "glide--dragging",
                            direction: {
                                ltr: "glide--ltr",
                                rtl: "glide--rtl"
                            },
                            type: {
                                slider: "glide--slider",
                                carousel: "glide--carousel"
                            },
                            slide: {
                                clone: "glide__slide--clone",
                                active: "glide__slide--active"
                            },
                            arrow: {
                                disabled: "glide__arrow--disabled"
                            },
                            nav: {
                                active: "glide__bullet--active"
                            }
                        }
                    };

                    function u(e) {
                        console.error("[Glide warn]: ".concat(e))
                    }

                    function h(e) {
                        return parseInt(e)
                    }

                    function f(e) {
                        return "string" == typeof e
                    }

                    function p(t) {
                        var i = e(t);
                        return "function" === i || "object" === i && !!t
                    }

                    function g(e) {
                        return "function" == typeof e
                    }

                    function m(e) {
                        return void 0 === e
                    }

                    function v(e) {
                        return e.constructor === Array
                    }

                    function y(e, t, i) {
                        var n = {};
                        for (var s in t) g(t[s]) ? n[s] = t[s](e, n, i) : u("Extension must be a function");
                        for (var o in n) g(n[o].mount) && n[o].mount();
                        return n
                    }

                    function b(e, t, i) {
                        Object.defineProperty(e, t, i)
                    }

                    function w(e, t) {
                        var i = Object.assign({}, e, t);
                        return t.hasOwnProperty("classes") && (i.classes = Object.assign({}, e.classes, t.classes), t.classes.hasOwnProperty("direction") && (i.classes.direction = Object.assign({}, e.classes.direction, t.classes.direction)), t.classes.hasOwnProperty("type") && (i.classes.type = Object.assign({}, e.classes.type, t.classes.type)), t.classes.hasOwnProperty("slide") && (i.classes.slide = Object.assign({}, e.classes.slide, t.classes.slide)), t.classes.hasOwnProperty("arrow") && (i.classes.arrow = Object.assign({}, e.classes.arrow, t.classes.arrow)), t.classes.hasOwnProperty("nav") && (i.classes.nav = Object.assign({}, e.classes.nav, t.classes.nav))), t.hasOwnProperty("breakpoints") && (i.breakpoints = Object.assign({}, e.breakpoints, t.breakpoints)), i
                    }
                    var k = function() {
                            function e() {
                                var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                t(this, e), this.events = i, this.hop = i.hasOwnProperty
                            }
                            return n(e, [{
                                key: "on",
                                value: function(e, t) {
                                    if (!v(e)) {
                                        this.hop.call(this.events, e) || (this.events[e] = []);
                                        var i = this.events[e].push(t) - 1;
                                        return {
                                            remove: function() {
                                                delete this.events[e][i]
                                            }
                                        }
                                    }
                                    for (var n = 0; n < e.length; n++) this.on(e[n], t)
                                }
                            }, {
                                key: "emit",
                                value: function(e, t) {
                                    if (v(e))
                                        for (var i = 0; i < e.length; i++) this.emit(e[i], t);
                                    else this.hop.call(this.events, e) && this.events[e].forEach((function(e) {
                                        e(t || {})
                                    }))
                                }
                            }]), e
                        }(),
                        x = function() {
                            function e(i) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                t(this, e), this._c = {}, this._t = [], this._e = new k, this.disabled = !1, this.selector = i, this.settings = w(d, n), this.index = this.settings.startAt
                            }
                            return n(e, [{
                                key: "mount",
                                value: function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return this._e.emit("mount.before"), p(e) ? this._c = y(this, e, this._e) : u("You need to provide a object on `mount()`"), this._e.emit("mount.after"), this
                                }
                            }, {
                                key: "mutate",
                                value: function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                                    return v(e) ? this._t = e : u("You need to provide a array on `mutate()`"), this
                                }
                            }, {
                                key: "update",
                                value: function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return this.settings = w(this.settings, e), e.hasOwnProperty("startAt") && (this.index = e.startAt), this._e.emit("update"), this
                                }
                            }, {
                                key: "go",
                                value: function(e) {
                                    return this._c.Run.make(e), this
                                }
                            }, {
                                key: "move",
                                value: function(e) {
                                    return this._c.Transition.disable(), this._c.Move.make(e), this
                                }
                            }, {
                                key: "destroy",
                                value: function() {
                                    return this._e.emit("destroy"), this
                                }
                            }, {
                                key: "play",
                                value: function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                    return e && (this.settings.autoplay = e), this._e.emit("play"), this
                                }
                            }, {
                                key: "pause",
                                value: function() {
                                    return this._e.emit("pause"), this
                                }
                            }, {
                                key: "disable",
                                value: function() {
                                    return this.disabled = !0, this
                                }
                            }, {
                                key: "enable",
                                value: function() {
                                    return this.disabled = !1, this
                                }
                            }, {
                                key: "on",
                                value: function(e, t) {
                                    return this._e.on(e, t), this
                                }
                            }, {
                                key: "isType",
                                value: function(e) {
                                    return this.settings.type === e
                                }
                            }, {
                                key: "settings",
                                get: function() {
                                    return this._o
                                },
                                set: function(e) {
                                    p(e) ? this._o = e : u("Options must be an `object` instance.")
                                }
                            }, {
                                key: "index",
                                get: function() {
                                    return this._i
                                },
                                set: function(e) {
                                    this._i = h(e)
                                }
                            }, {
                                key: "type",
                                get: function() {
                                    return this.settings.type
                                }
                            }, {
                                key: "disabled",
                                get: function() {
                                    return this._d
                                },
                                set: function(e) {
                                    this._d = !!e
                                }
                            }]), e
                        }();

                    function S() {
                        return (new Date).getTime()
                    }

                    function E(e, t, i) {
                        var n, s, o, r, a = 0;
                        i || (i = {});
                        var l = function() {
                                a = !1 === i.leading ? 0 : S(), n = null, r = e.apply(s, o), n || (s = o = null)
                            },
                            c = function() {
                                var c = S();
                                a || !1 !== i.leading || (a = c);
                                var d = t - (c - a);
                                return s = this, o = arguments, d <= 0 || d > t ? (n && (clearTimeout(n), n = null), a = c, r = e.apply(s, o), n || (s = o = null)) : n || !1 === i.trailing || (n = setTimeout(l, d)), r
                            };
                        return c.cancel = function() {
                            clearTimeout(n), a = 0, n = s = o = null
                        }, c
                    }
                    var L = {
                        ltr: ["marginLeft", "marginRight"],
                        rtl: ["marginRight", "marginLeft"]
                    };

                    function T(e) {
                        if (e && e.parentNode) {
                            for (var t = e.parentNode.firstChild, i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                            return i
                        }
                        return []
                    }

                    function A(e) {
                        return !!(e && e instanceof window.HTMLElement)
                    }

                    function C(e) {
                        return Array.prototype.slice.call(e)
                    }
                    var _ = '[data-glide-el="track"]',
                        M = function() {
                            function e() {
                                var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                t(this, e), this.listeners = i
                            }
                            return n(e, [{
                                key: "on",
                                value: function(e, t, i) {
                                    var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                                    f(e) && (e = [e]);
                                    for (var s = 0; s < e.length; s++) this.listeners[e[s]] = i, t.addEventListener(e[s], this.listeners[e[s]], n)
                                }
                            }, {
                                key: "off",
                                value: function(e, t) {
                                    var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                    f(e) && (e = [e]);
                                    for (var n = 0; n < e.length; n++) t.removeEventListener(e[n], this.listeners[e[n]], i)
                                }
                            }, {
                                key: "destroy",
                                value: function() {
                                    delete this.listeners
                                }
                            }]), e
                        }(),
                        O = ["ltr", "rtl"],
                        q = {
                            ">": "<",
                            "<": ">",
                            "=": "="
                        };

                    function P(e, t) {
                        return {
                            modify: function(e) {
                                return t.Direction.is("rtl") ? -e : e
                            }
                        }
                    }

                    function z(e, t) {
                        return {
                            modify: function(e) {
                                var i = Math.floor(e / t.Sizes.slideWidth);
                                return e + t.Gaps.value * i
                            }
                        }
                    }

                    function H(e, t) {
                        return {
                            modify: function(e) {
                                return e + t.Clones.grow / 2
                            }
                        }
                    }

                    function I(e, t) {
                        return {
                            modify: function(i) {
                                if (e.settings.focusAt >= 0) {
                                    var n = t.Peek.value;
                                    return p(n) ? i - n.before : i - n
                                }
                                return i
                            }
                        }
                    }

                    function D(e, t) {
                        return {
                            modify: function(i) {
                                var n = t.Gaps.value,
                                    s = t.Sizes.width,
                                    o = e.settings.focusAt,
                                    r = t.Sizes.slideWidth;
                                return "center" === o ? i - (s / 2 - r / 2) : i - r * o - n * o
                            }
                        }
                    }
                    var N = !1;
                    try {
                        var B = Object.defineProperty({}, "passive", {
                            get: function() {
                                N = !0
                            }
                        });
                        window.addEventListener("testPassive", null, B), window.removeEventListener("testPassive", null, B)
                    } catch (e) {}
                    var $ = N,
                        V = ["touchstart", "mousedown"],
                        W = ["touchmove", "mousemove"],
                        Y = ["touchend", "touchcancel", "mouseup", "mouseleave"],
                        X = ["mousedown", "mousemove", "mouseup", "mouseleave"],
                        R = '[data-glide-el^="controls"]',
                        j = "".concat(R, ' [data-glide-dir*="<"]'),
                        F = "".concat(R, ' [data-glide-dir*=">"]');

                    function G(e) {
                        return p(e) ? (t = e, Object.keys(t).sort().reduce((function(e, i) {
                            return e[i] = t[i], e[i], e
                        }), {})) : (u("Breakpoints option must be an object"), {});
                        var t
                    }
                    var U = {
                        Html: function(e, t, i) {
                            var n = {
                                mount: function() {
                                    this.root = e.selector, this.track = this.root.querySelector(_), this.collectSlides()
                                },
                                collectSlides: function() {
                                    this.slides = C(this.wrapper.children).filter((function(t) {
                                        return !t.classList.contains(e.settings.classes.slide.clone)
                                    }))
                                }
                            };
                            return b(n, "root", {
                                get: function() {
                                    return n._r
                                },
                                set: function(e) {
                                    f(e) && (e = document.querySelector(e)), A(e) ? n._r = e : u("Root element must be a existing Html node")
                                }
                            }), b(n, "track", {
                                get: function() {
                                    return n._t
                                },
                                set: function(e) {
                                    A(e) ? n._t = e : u("Could not find track element. Please use ".concat(_, " attribute."))
                                }
                            }), b(n, "wrapper", {
                                get: function() {
                                    return n.track.children[0]
                                }
                            }), i.on("update", (function() {
                                n.collectSlides()
                            })), n
                        },
                        Translate: function(e, t, i) {
                            var n = {
                                set: function(i) {
                                    var n = function(e, t, i) {
                                            var n = [z, H, I, D].concat(e._t, [P]);
                                            return {
                                                mutate: function(s) {
                                                    for (var o = 0; o < n.length; o++) {
                                                        var r = n[o];
                                                        g(r) && g(r().modify) ? s = r(e, t, i).modify(s) : u("Transformer should be a function that returns an object with `modify()` method")
                                                    }
                                                    return s
                                                }
                                            }
                                        }(e, t).mutate(i),
                                        s = "translate3d(".concat(-1 * n, "px, 0px, 0px)");
                                    t.Html.wrapper.style.mozTransform = s, t.Html.wrapper.style.webkitTransform = s, t.Html.wrapper.style.transform = s
                                },
                                remove: function() {
                                    t.Html.wrapper.style.transform = ""
                                },
                                getStartIndex: function() {
                                    var i = t.Sizes.length,
                                        n = e.index,
                                        s = e.settings.perView;
                                    return t.Run.isOffset(">") || t.Run.isOffset("|>") ? i + (n - s) : (n + s) % i
                                },
                                getTravelDistance: function() {
                                    var i = t.Sizes.slideWidth * e.settings.perView;
                                    return t.Run.isOffset(">") || t.Run.isOffset("|>") ? -1 * i : i
                                }
                            };
                            return i.on("move", (function(s) {
                                if (!e.isType("carousel") || !t.Run.isOffset()) return n.set(s.movement);
                                t.Transition.after((function() {
                                    i.emit("translate.jump"), n.set(t.Sizes.slideWidth * e.index)
                                }));
                                var o = t.Sizes.slideWidth * t.Translate.getStartIndex();
                                return n.set(o - t.Translate.getTravelDistance())
                            })), i.on("destroy", (function() {
                                n.remove()
                            })), n
                        },
                        Transition: function(e, t, i) {
                            var n = !1,
                                s = {
                                    compose: function(t) {
                                        var i = e.settings;
                                        return n ? "".concat(t, " 0ms ").concat(i.animationTimingFunc) : "".concat(t, " ").concat(this.duration, "ms ").concat(i.animationTimingFunc)
                                    },
                                    set: function() {
                                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "transform";
                                        t.Html.wrapper.style.transition = this.compose(e)
                                    },
                                    remove: function() {
                                        t.Html.wrapper.style.transition = ""
                                    },
                                    after: function(e) {
                                        setTimeout((function() {
                                            e()
                                        }), this.duration)
                                    },
                                    enable: function() {
                                        n = !1, this.set()
                                    },
                                    disable: function() {
                                        n = !0, this.set()
                                    }
                                };
                            return b(s, "duration", {
                                get: function() {
                                    var i = e.settings;
                                    return e.isType("slider") && t.Run.offset ? i.rewindDuration : i.animationDuration
                                }
                            }), i.on("move", (function() {
                                s.set()
                            })), i.on(["build.before", "resize", "translate.jump"], (function() {
                                s.disable()
                            })), i.on("run", (function() {
                                s.enable()
                            })), i.on("destroy", (function() {
                                s.remove()
                            })), s
                        },
                        Direction: function(e, t, i) {
                            var n = {
                                mount: function() {
                                    this.value = e.settings.direction
                                },
                                resolve: function(e) {
                                    var t = e.slice(0, 1);
                                    return this.is("rtl") ? e.split(t).join(q[t]) : e
                                },
                                is: function(e) {
                                    return this.value === e
                                },
                                addClass: function() {
                                    t.Html.root.classList.add(e.settings.classes.direction[this.value])
                                },
                                removeClass: function() {
                                    t.Html.root.classList.remove(e.settings.classes.direction[this.value])
                                }
                            };
                            return b(n, "value", {
                                get: function() {
                                    return n._v
                                },
                                set: function(e) {
                                    O.indexOf(e) > -1 ? n._v = e : u("Direction value must be `ltr` or `rtl`")
                                }
                            }), i.on(["destroy", "update"], (function() {
                                n.removeClass()
                            })), i.on("update", (function() {
                                n.mount()
                            })), i.on(["build.before", "update"], (function() {
                                n.addClass()
                            })), n
                        },
                        Peek: function(e, t, i) {
                            var n = {
                                mount: function() {
                                    this.value = e.settings.peek
                                }
                            };
                            return b(n, "value", {
                                get: function() {
                                    return n._v
                                },
                                set: function(e) {
                                    p(e) ? (e.before = h(e.before), e.after = h(e.after)) : e = h(e), n._v = e
                                }
                            }), b(n, "reductor", {
                                get: function() {
                                    var t = n.value,
                                        i = e.settings.perView;
                                    return p(t) ? t.before / i + t.after / i : 2 * t / i
                                }
                            }), i.on(["resize", "update"], (function() {
                                n.mount()
                            })), n
                        },
                        Sizes: function(e, t, i) {
                            var n = {
                                setupSlides: function() {
                                    for (var e = "".concat(this.slideWidth, "px"), i = t.Html.slides, n = 0; n < i.length; n++) i[n].style.width = e
                                },
                                setupWrapper: function() {
                                    t.Html.wrapper.style.width = "".concat(this.wrapperSize, "px")
                                },
                                remove: function() {
                                    for (var e = t.Html.slides, i = 0; i < e.length; i++) e[i].style.width = "";
                                    t.Html.wrapper.style.width = ""
                                }
                            };
                            return b(n, "length", {
                                get: function() {
                                    return t.Html.slides.length
                                }
                            }), b(n, "width", {
                                get: function() {
                                    return t.Html.track.offsetWidth
                                }
                            }), b(n, "wrapperSize", {
                                get: function() {
                                    return n.slideWidth * n.length + t.Gaps.grow + t.Clones.grow
                                }
                            }), b(n, "slideWidth", {
                                get: function() {
                                    return n.width / e.settings.perView - t.Peek.reductor - t.Gaps.reductor
                                }
                            }), i.on(["build.before", "resize", "update"], (function() {
                                n.setupSlides(), n.setupWrapper()
                            })), i.on("destroy", (function() {
                                n.remove()
                            })), n
                        },
                        Gaps: function(e, t, i) {
                            var n = {
                                apply: function(e) {
                                    for (var i = 0, n = e.length; i < n; i++) {
                                        var s = e[i].style,
                                            o = t.Direction.value;
                                        s[L[o][0]] = 0 !== i ? "".concat(this.value / 2, "px") : "", i !== e.length - 1 ? s[L[o][1]] = "".concat(this.value / 2, "px") : s[L[o][1]] = ""
                                    }
                                },
                                remove: function(e) {
                                    for (var t = 0, i = e.length; t < i; t++) {
                                        var n = e[t].style;
                                        n.marginLeft = "", n.marginRight = ""
                                    }
                                }
                            };
                            return b(n, "value", {
                                get: function() {
                                    return h(e.settings.gap)
                                }
                            }), b(n, "grow", {
                                get: function() {
                                    return n.value * t.Sizes.length
                                }
                            }), b(n, "reductor", {
                                get: function() {
                                    var t = e.settings.perView;
                                    return n.value * (t - 1) / t
                                }
                            }), i.on(["build.after", "update"], E((function() {
                                n.apply(t.Html.wrapper.children)
                            }), 30)), i.on("destroy", (function() {
                                n.remove(t.Html.wrapper.children)
                            })), n
                        },
                        Move: function(e, t, i) {
                            var n = {
                                mount: function() {
                                    this._o = 0
                                },
                                make: function() {
                                    var e = this,
                                        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                                    this.offset = n, i.emit("move", {
                                        movement: this.value
                                    }), t.Transition.after((function() {
                                        i.emit("move.after", {
                                            movement: e.value
                                        })
                                    }))
                                }
                            };
                            return b(n, "offset", {
                                get: function() {
                                    return n._o
                                },
                                set: function(e) {
                                    n._o = m(e) ? 0 : h(e)
                                }
                            }), b(n, "translate", {
                                get: function() {
                                    return t.Sizes.slideWidth * e.index
                                }
                            }), b(n, "value", {
                                get: function() {
                                    var e = this.offset,
                                        i = this.translate;
                                    return t.Direction.is("rtl") ? i + e : i - e
                                }
                            }), i.on(["build.before", "run"], (function() {
                                n.make()
                            })), n
                        },
                        Clones: function(e, t, i) {
                            var n = {
                                mount: function() {
                                    this.items = [], e.isType("carousel") && (this.items = this.collect())
                                },
                                collect: function() {
                                    var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                        n = t.Html.slides,
                                        s = e.settings,
                                        o = s.perView,
                                        r = s.classes,
                                        a = s.cloningRatio;
                                    if (0 !== n.length)
                                        for (var l = o + +!!e.settings.peek + Math.round(o / 2), c = n.slice(0, l).reverse(), d = n.slice(-1 * l), u = 0; u < Math.max(a, Math.floor(o / n.length)); u++) {
                                            for (var h = 0; h < c.length; h++) {
                                                var f = c[h].cloneNode(!0);
                                                f.classList.add(r.slide.clone), i.push(f)
                                            }
                                            for (var p = 0; p < d.length; p++) {
                                                var g = d[p].cloneNode(!0);
                                                g.classList.add(r.slide.clone), i.unshift(g)
                                            }
                                        }
                                    return i
                                },
                                append: function() {
                                    for (var e = this.items, i = t.Html, n = i.wrapper, s = i.slides, o = Math.floor(e.length / 2), r = e.slice(0, o).reverse(), a = e.slice(-1 * o).reverse(), l = "".concat(t.Sizes.slideWidth, "px"), c = 0; c < a.length; c++) n.appendChild(a[c]);
                                    for (var d = 0; d < r.length; d++) n.insertBefore(r[d], s[0]);
                                    for (var u = 0; u < e.length; u++) e[u].style.width = l
                                },
                                remove: function() {
                                    for (var e = this.items, i = 0; i < e.length; i++) t.Html.wrapper.removeChild(e[i])
                                }
                            };
                            return b(n, "grow", {
                                get: function() {
                                    return (t.Sizes.slideWidth + t.Gaps.value) * n.items.length
                                }
                            }), i.on("update", (function() {
                                n.remove(), n.mount(), n.append()
                            })), i.on("build.before", (function() {
                                e.isType("carousel") && n.append()
                            })), i.on("destroy", (function() {
                                n.remove()
                            })), n
                        },
                        Resize: function(e, t, i) {
                            var n = new M,
                                s = {
                                    mount: function() {
                                        this.bind()
                                    },
                                    bind: function() {
                                        n.on("resize", window, E((function() {
                                            i.emit("resize")
                                        }), e.settings.throttle))
                                    },
                                    unbind: function() {
                                        n.off("resize", window)
                                    }
                                };
                            return i.on("destroy", (function() {
                                s.unbind(), n.destroy()
                            })), s
                        },
                        Build: function(e, t, i) {
                            var n = {
                                mount: function() {
                                    i.emit("build.before"), this.typeClass(), this.activeClass(), i.emit("build.after")
                                },
                                typeClass: function() {
                                    t.Html.root.classList.add(e.settings.classes.type[e.settings.type])
                                },
                                activeClass: function() {
                                    var i = e.settings.classes,
                                        n = t.Html.slides[e.index];
                                    n && (n.classList.add(i.slide.active), T(n).forEach((function(e) {
                                        e.classList.remove(i.slide.active)
                                    })))
                                },
                                removeClasses: function() {
                                    var i = e.settings.classes,
                                        n = i.type,
                                        s = i.slide;
                                    t.Html.root.classList.remove(n[e.settings.type]), t.Html.slides.forEach((function(e) {
                                        e.classList.remove(s.active)
                                    }))
                                }
                            };
                            return i.on(["destroy", "update"], (function() {
                                n.removeClasses()
                            })), i.on(["resize", "update"], (function() {
                                n.mount()
                            })), i.on("move.after", (function() {
                                n.activeClass()
                            })), n
                        },
                        Run: function(e, t, i) {
                            var n = {
                                mount: function() {
                                    this._o = !1
                                },
                                make: function(n) {
                                    var s = this;
                                    e.disabled || (!e.settings.waitForTransition || e.disable(), this.move = n, i.emit("run.before", this.move), this.calculate(), i.emit("run", this.move), t.Transition.after((function() {
                                        s.isStart() && i.emit("run.start", s.move), s.isEnd() && i.emit("run.end", s.move), s.isOffset() && (s._o = !1, i.emit("run.offset", s.move)), i.emit("run.after", s.move), e.enable()
                                    })))
                                },
                                calculate: function() {
                                    var t = this.move,
                                        i = this.length,
                                        s = t.steps,
                                        o = t.direction,
                                        r = 1;
                                    if ("=" === o) return e.settings.bound && h(s) > i ? void(e.index = i) : void(e.index = s);
                                    if (">" !== o || ">" !== s)
                                        if ("<" !== o || "<" !== s) {
                                            if ("|" === o && (r = e.settings.perView || 1), ">" === o || "|" === o && ">" === s) {
                                                var a = function(t) {
                                                    var i = e.index;
                                                    return e.isType("carousel") ? i + t : i + (t - i % t)
                                                }(r);
                                                return a > i && (this._o = !0), void(e.index = function(t, i) {
                                                    var s = n.length;
                                                    return t <= s ? t : e.isType("carousel") ? t - (s + 1) : e.settings.rewind ? n.isBound() && !n.isEnd() ? s : 0 : n.isBound() ? s : Math.floor(s / i) * i
                                                }(a, r))
                                            }
                                            if ("<" === o || "|" === o && "<" === s) {
                                                var l = function(t) {
                                                    var i = e.index;
                                                    return e.isType("carousel") ? i - t : (Math.ceil(i / t) - 1) * t
                                                }(r);
                                                return l < 0 && (this._o = !0), void(e.index = function(t, i) {
                                                    var s = n.length;
                                                    return t >= 0 ? t : e.isType("carousel") ? t + (s + 1) : e.settings.rewind ? n.isBound() && n.isStart() ? s : Math.floor(s / i) * i : 0
                                                }(l, r))
                                            }
                                            u("Invalid direction pattern [".concat(o).concat(s, "] has been used"))
                                        } else e.index = 0;
                                    else e.index = i
                                },
                                isStart: function() {
                                    return e.index <= 0
                                },
                                isEnd: function() {
                                    return e.index >= this.length
                                },
                                isOffset: function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
                                    return e ? !!this._o && ("|>" === e ? "|" === this.move.direction && ">" === this.move.steps : "|<" === e ? "|" === this.move.direction && "<" === this.move.steps : this.move.direction === e) : this._o
                                },
                                isBound: function() {
                                    return e.isType("slider") && "center" !== e.settings.focusAt && e.settings.bound
                                }
                            };
                            return b(n, "move", {
                                get: function() {
                                    return this._m
                                },
                                set: function(e) {
                                    var t = e.substr(1);
                                    this._m = {
                                        direction: e.substr(0, 1),
                                        steps: t ? h(t) ? h(t) : t : 0
                                    }
                                }
                            }), b(n, "length", {
                                get: function() {
                                    var i = e.settings,
                                        n = t.Html.slides.length;
                                    return this.isBound() ? n - 1 - (h(i.perView) - 1) + h(i.focusAt) : n - 1
                                }
                            }), b(n, "offset", {
                                get: function() {
                                    return this._o
                                }
                            }), n
                        },
                        Swipe: function(e, t, i) {
                            var n = new M,
                                s = 0,
                                o = 0,
                                r = 0,
                                a = !1,
                                l = !!$ && {
                                    passive: !0
                                },
                                c = {
                                    mount: function() {
                                        this.bindSwipeStart()
                                    },
                                    start: function(t) {
                                        if (!a && !e.disabled) {
                                            this.disable();
                                            var n = this.touches(t);
                                            s = null, o = h(n.pageX), r = h(n.pageY), this.bindSwipeMove(), this.bindSwipeEnd(), i.emit("swipe.start")
                                        }
                                    },
                                    move: function(n) {
                                        if (!e.disabled) {
                                            var a = e.settings,
                                                l = a.touchAngle,
                                                c = a.touchRatio,
                                                d = a.classes,
                                                u = this.touches(n),
                                                f = h(u.pageX) - o,
                                                p = h(u.pageY) - r,
                                                g = Math.abs(f << 2),
                                                m = Math.abs(p << 2),
                                                v = Math.sqrt(g + m),
                                                y = Math.sqrt(m);
                                            if (!(180 * (s = Math.asin(y / v)) / Math.PI < l)) return !1;
                                            n.stopPropagation(), t.Move.make(f * parseFloat(c)), t.Html.root.classList.add(d.dragging), i.emit("swipe.move")
                                        }
                                    },
                                    end: function(n) {
                                        if (!e.disabled) {
                                            var r = e.settings,
                                                a = r.perSwipe,
                                                l = r.touchAngle,
                                                c = r.classes,
                                                d = this.touches(n),
                                                u = this.threshold(n),
                                                h = d.pageX - o,
                                                f = 180 * s / Math.PI;
                                            this.enable(), h > u && f < l ? t.Run.make(t.Direction.resolve("".concat(a, "<"))) : h < -u && f < l ? t.Run.make(t.Direction.resolve("".concat(a, ">"))) : t.Move.make(), t.Html.root.classList.remove(c.dragging), this.unbindSwipeMove(), this.unbindSwipeEnd(), i.emit("swipe.end")
                                        }
                                    },
                                    bindSwipeStart: function() {
                                        var i = this,
                                            s = e.settings,
                                            o = s.swipeThreshold,
                                            r = s.dragThreshold;
                                        o && n.on(V[0], t.Html.wrapper, (function(e) {
                                            i.start(e)
                                        }), l), r && n.on(V[1], t.Html.wrapper, (function(e) {
                                            i.start(e)
                                        }), l)
                                    },
                                    unbindSwipeStart: function() {
                                        n.off(V[0], t.Html.wrapper, l), n.off(V[1], t.Html.wrapper, l)
                                    },
                                    bindSwipeMove: function() {
                                        var i = this;
                                        n.on(W, t.Html.wrapper, E((function(e) {
                                            i.move(e)
                                        }), e.settings.throttle), l)
                                    },
                                    unbindSwipeMove: function() {
                                        n.off(W, t.Html.wrapper, l)
                                    },
                                    bindSwipeEnd: function() {
                                        var e = this;
                                        n.on(Y, t.Html.wrapper, (function(t) {
                                            e.end(t)
                                        }))
                                    },
                                    unbindSwipeEnd: function() {
                                        n.off(Y, t.Html.wrapper)
                                    },
                                    touches: function(e) {
                                        return X.indexOf(e.type) > -1 ? e : e.touches[0] || e.changedTouches[0]
                                    },
                                    threshold: function(t) {
                                        var i = e.settings;
                                        return X.indexOf(t.type) > -1 ? i.dragThreshold : i.swipeThreshold
                                    },
                                    enable: function() {
                                        return a = !1, t.Transition.enable(), this
                                    },
                                    disable: function() {
                                        return a = !0, t.Transition.disable(), this
                                    }
                                };
                            return i.on("build.after", (function() {
                                t.Html.root.classList.add(e.settings.classes.swipeable)
                            })), i.on("destroy", (function() {
                                c.unbindSwipeStart(), c.unbindSwipeMove(), c.unbindSwipeEnd(), n.destroy()
                            })), c
                        },
                        Images: function(e, t, i) {
                            var n = new M,
                                s = {
                                    mount: function() {
                                        this.bind()
                                    },
                                    bind: function() {
                                        n.on("dragstart", t.Html.wrapper, this.dragstart)
                                    },
                                    unbind: function() {
                                        n.off("dragstart", t.Html.wrapper)
                                    },
                                    dragstart: function(e) {
                                        e.preventDefault()
                                    }
                                };
                            return i.on("destroy", (function() {
                                s.unbind(), n.destroy()
                            })), s
                        },
                        Anchors: function(e, t, i) {
                            var n = new M,
                                s = !1,
                                o = !1,
                                r = {
                                    mount: function() {
                                        this._a = t.Html.wrapper.querySelectorAll("a"), this.bind()
                                    },
                                    bind: function() {
                                        n.on("click", t.Html.wrapper, this.click)
                                    },
                                    unbind: function() {
                                        n.off("click", t.Html.wrapper)
                                    },
                                    click: function(e) {
                                        o && (e.stopPropagation(), e.preventDefault())
                                    },
                                    detach: function() {
                                        if (o = !0, !s) {
                                            for (var e = 0; e < this.items.length; e++) this.items[e].draggable = !1;
                                            s = !0
                                        }
                                        return this
                                    },
                                    attach: function() {
                                        if (o = !1, s) {
                                            for (var e = 0; e < this.items.length; e++) this.items[e].draggable = !0;
                                            s = !1
                                        }
                                        return this
                                    }
                                };
                            return b(r, "items", {
                                get: function() {
                                    return r._a
                                }
                            }), i.on("swipe.move", (function() {
                                r.detach()
                            })), i.on("swipe.end", (function() {
                                t.Transition.after((function() {
                                    r.attach()
                                }))
                            })), i.on("destroy", (function() {
                                r.attach(), r.unbind(), n.destroy()
                            })), r
                        },
                        Controls: function(e, t, i) {
                            var n = new M,
                                s = !!$ && {
                                    passive: !0
                                },
                                o = {
                                    mount: function() {
                                        this._n = t.Html.root.querySelectorAll('[data-glide-el="controls[nav]"]'), this._c = t.Html.root.querySelectorAll(R), this._arrowControls = {
                                            previous: t.Html.root.querySelectorAll(j),
                                            next: t.Html.root.querySelectorAll(F)
                                        }, this.addBindings()
                                    },
                                    setActive: function() {
                                        for (var e = 0; e < this._n.length; e++) this.addClass(this._n[e].children)
                                    },
                                    removeActive: function() {
                                        for (var e = 0; e < this._n.length; e++) this.removeClass(this._n[e].children)
                                    },
                                    addClass: function(t) {
                                        var i = e.settings,
                                            n = t[e.index];
                                        n && n && (n.classList.add(i.classes.nav.active), T(n).forEach((function(e) {
                                            e.classList.remove(i.classes.nav.active)
                                        })))
                                    },
                                    removeClass: function(t) {
                                        var i = t[e.index];
                                        i && i.classList.remove(e.settings.classes.nav.active)
                                    },
                                    setArrowState: function() {
                                        if (!e.settings.rewind) {
                                            var i = o._arrowControls.next,
                                                n = o._arrowControls.previous;
                                            this.resetArrowState(i, n), 0 === e.index && this.disableArrow(n), e.index === t.Run.length && this.disableArrow(i)
                                        }
                                    },
                                    resetArrowState: function() {
                                        for (var t = e.settings, i = arguments.length, n = new Array(i), s = 0; s < i; s++) n[s] = arguments[s];
                                        n.forEach((function(e) {
                                            C(e).forEach((function(e) {
                                                e.classList.remove(t.classes.arrow.disabled)
                                            }))
                                        }))
                                    },
                                    disableArrow: function() {
                                        for (var t = e.settings, i = arguments.length, n = new Array(i), s = 0; s < i; s++) n[s] = arguments[s];
                                        n.forEach((function(e) {
                                            C(e).forEach((function(e) {
                                                e.classList.add(t.classes.arrow.disabled)
                                            }))
                                        }))
                                    },
                                    addBindings: function() {
                                        for (var e = 0; e < this._c.length; e++) this.bind(this._c[e].children)
                                    },
                                    removeBindings: function() {
                                        for (var e = 0; e < this._c.length; e++) this.unbind(this._c[e].children)
                                    },
                                    bind: function(e) {
                                        for (var t = 0; t < e.length; t++) n.on("click", e[t], this.click), n.on("touchstart", e[t], this.click, s)
                                    },
                                    unbind: function(e) {
                                        for (var t = 0; t < e.length; t++) n.off(["click", "touchstart"], e[t])
                                    },
                                    click: function(e) {
                                        $ || "touchstart" !== e.type || e.preventDefault();
                                        var i = e.currentTarget.getAttribute("data-glide-dir");
                                        t.Run.make(t.Direction.resolve(i))
                                    }
                                };
                            return b(o, "items", {
                                get: function() {
                                    return o._c
                                }
                            }), i.on(["mount.after", "move.after"], (function() {
                                o.setActive()
                            })), i.on(["mount.after", "run"], (function() {
                                o.setArrowState()
                            })), i.on("destroy", (function() {
                                o.removeBindings(), o.removeActive(), n.destroy()
                            })), o
                        },
                        Keyboard: function(e, t, i) {
                            var n = new M,
                                s = {
                                    mount: function() {
                                        e.settings.keyboard && this.bind()
                                    },
                                    bind: function() {
                                        n.on("keyup", document, this.press)
                                    },
                                    unbind: function() {
                                        n.off("keyup", document)
                                    },
                                    press: function(i) {
                                        var n = e.settings.perSwipe;
                                        "ArrowRight" === i.code && t.Run.make(t.Direction.resolve("".concat(n, ">"))), "ArrowLeft" === i.code && t.Run.make(t.Direction.resolve("".concat(n, "<")))
                                    }
                                };
                            return i.on(["destroy", "update"], (function() {
                                s.unbind()
                            })), i.on("update", (function() {
                                s.mount()
                            })), i.on("destroy", (function() {
                                n.destroy()
                            })), s
                        },
                        Autoplay: function(e, t, i) {
                            var n = new M,
                                s = {
                                    mount: function() {
                                        this.enable(), this.start(), e.settings.hoverpause && this.bind()
                                    },
                                    enable: function() {
                                        this._e = !0
                                    },
                                    disable: function() {
                                        this._e = !1
                                    },
                                    start: function() {
                                        var n = this;
                                        this._e && (this.enable(), e.settings.autoplay && m(this._i) && (this._i = setInterval((function() {
                                            n.stop(), t.Run.make(">"), n.start(), i.emit("autoplay")
                                        }), this.time)))
                                    },
                                    stop: function() {
                                        this._i = clearInterval(this._i)
                                    },
                                    bind: function() {
                                        var e = this;
                                        n.on("mouseover", t.Html.root, (function() {
                                            e._e && e.stop()
                                        })), n.on("mouseout", t.Html.root, (function() {
                                            e._e && e.start()
                                        }))
                                    },
                                    unbind: function() {
                                        n.off(["mouseover", "mouseout"], t.Html.root)
                                    }
                                };
                            return b(s, "time", {
                                get: function() {
                                    return h(t.Html.slides[e.index].getAttribute("data-glide-autoplay") || e.settings.autoplay)
                                }
                            }), i.on(["destroy", "update"], (function() {
                                s.unbind()
                            })), i.on(["run.before", "swipe.start", "update"], (function() {
                                s.stop()
                            })), i.on(["pause", "destroy"], (function() {
                                s.disable(), s.stop()
                            })), i.on(["run.after", "swipe.end"], (function() {
                                s.start()
                            })), i.on(["play"], (function() {
                                s.enable(), s.start()
                            })), i.on("update", (function() {
                                s.mount()
                            })), i.on("destroy", (function() {
                                n.destroy()
                            })), s
                        },
                        Breakpoints: function(e, t, i) {
                            var n = new M,
                                s = e.settings,
                                o = G(s.breakpoints),
                                r = Object.assign({}, s),
                                a = {
                                    match: function(e) {
                                        if (void 0 !== window.matchMedia)
                                            for (var t in e)
                                                if (e.hasOwnProperty(t) && window.matchMedia("(max-width: ".concat(t, "px)")).matches) return e[t];
                                        return r
                                    }
                                };
                            return Object.assign(s, a.match(o)), n.on("resize", window, E((function() {
                                e.settings = w(s, a.match(o))
                            }), e.settings.throttle)), i.on("update", (function() {
                                o = G(o), r = Object.assign({}, s)
                            })), i.on("destroy", (function() {
                                n.off("resize", window)
                            })), a
                        }
                    };
                    return function(e) {
                        ! function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && o(e, t)
                        }(r, e);
                        var i = a(r);

                        function r() {
                            return t(this, r), i.apply(this, arguments)
                        }
                        return n(r, [{
                            key: "mount",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                return c(s(r.prototype), "mount", this).call(this, Object.assign({}, U, e))
                            }
                        }]), r
                    }(x)
                }()
            },
            905: function(e) {
                e.exports = function() {
                    "use strict";

                    function e(t) {
                        return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(t)
                    }

                    function t(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }

                    function i(e, t) {
                        for (var i = 0; i < t.length; i++) {
                            var n = t[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }

                    function n(e, t, n) {
                        return t && i(e.prototype, t), n && i(e, n), e
                    }

                    function s(e) {
                        return o(e) || r(e) || a(e) || c()
                    }

                    function o(e) {
                        if (Array.isArray(e)) return l(e)
                    }

                    function r(e) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                    }

                    function a(e, t) {
                        if (e) {
                            if ("string" == typeof e) return l(e, t);
                            var i = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? l(e, t) : void 0
                        }
                    }

                    function l(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                        return n
                    }

                    function c() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var d = Date.now();

                    function u() {
                        var e = {},
                            t = !0,
                            i = 0,
                            n = arguments.length;
                        "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (t = arguments[0], i++);
                        for (var s = function(i) {
                                for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t && "[object Object]" === Object.prototype.toString.call(i[n]) ? e[n] = u(!0, e[n], i[n]) : e[n] = i[n])
                            }; i < n; i++) s(arguments[i]);
                        return e
                    }

                    function h(e, t) {
                        if ((z(e) || e === window || e === document) && (e = [e]), I(e) || D(e) || (e = [e]), 0 != $(e))
                            if (I(e) && !D(e))
                                for (var i = e.length, n = 0; n < i && !1 !== t.call(e[n], e[n], n, e); n++);
                            else if (D(e))
                            for (var s in e)
                                if (B(e, s) && !1 === t.call(e[s], e[s], s, e)) break
                    }

                    function f(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                            n = e[d] = e[d] || [],
                            s = {
                                all: n,
                                evt: null,
                                found: null
                            };
                        return t && i && $(n) > 0 && h(n, (function(e, n) {
                            if (e.eventName == t && e.fn.toString() == i.toString()) return s.found = !0, s.evt = n, !1
                        })), s
                    }

                    function p(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            i = t.onElement,
                            n = t.withCallback,
                            s = t.avoidDuplicate,
                            o = void 0 === s || s,
                            r = t.once,
                            a = void 0 !== r && r,
                            l = t.useCapture,
                            c = void 0 !== l && l,
                            d = arguments.length > 2 ? arguments[2] : void 0,
                            u = i || [];

                        function p(e) {
                            q(n) && n.call(d, e, this), a && p.destroy()
                        }
                        return P(u) && (u = document.querySelectorAll(u)), p.destroy = function() {
                            h(u, (function(t) {
                                var i = f(t, e, p);
                                i.found && i.all.splice(i.evt, 1), t.removeEventListener && t.removeEventListener(e, p, c)
                            }))
                        }, h(u, (function(t) {
                            var i = f(t, e, p);
                            (t.addEventListener && o && !i.found || !o) && (t.addEventListener(e, p, c), i.all.push({
                                eventName: e,
                                fn: p
                            }))
                        })), p
                    }

                    function g(e, t) {
                        h(t.split(" "), (function(t) {
                            return e.classList.add(t)
                        }))
                    }

                    function m(e, t) {
                        h(t.split(" "), (function(t) {
                            return e.classList.remove(t)
                        }))
                    }

                    function v(e, t) {
                        return e.classList.contains(t)
                    }

                    function y(e, t) {
                        for (; e !== document.body;) {
                            if (!(e = e.parentElement)) return !1;
                            if ("function" == typeof e.matches ? e.matches(t) : e.msMatchesSelector(t)) return e
                        }
                    }

                    function b(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        if (!e || "" === t) return !1;
                        if ("none" == t) return q(i) && i(), !1;
                        var n = L(),
                            s = t.split(" ");
                        h(s, (function(t) {
                            g(e, "g" + t)
                        })), p(n, {
                            onElement: e,
                            avoidDuplicate: !1,
                            once: !0,
                            withCallback: function(e, t) {
                                h(s, (function(e) {
                                    m(t, "g" + e)
                                })), q(i) && i()
                            }
                        })
                    }

                    function w(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                        if ("" == t) return e.style.webkitTransform = "", e.style.MozTransform = "", e.style.msTransform = "", e.style.OTransform = "", e.style.transform = "", !1;
                        e.style.webkitTransform = t, e.style.MozTransform = t, e.style.msTransform = t, e.style.OTransform = t, e.style.transform = t
                    }

                    function k(e) {
                        e.style.display = "block"
                    }

                    function x(e) {
                        e.style.display = "none"
                    }

                    function S(e) {
                        var t = document.createDocumentFragment(),
                            i = document.createElement("div");
                        for (i.innerHTML = e; i.firstChild;) t.appendChild(i.firstChild);
                        return t
                    }

                    function E() {
                        return {
                            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
                        }
                    }

                    function L() {
                        var e, t = document.createElement("fakeelement"),
                            i = {
                                animation: "animationend",
                                OAnimation: "oAnimationEnd",
                                MozAnimation: "animationend",
                                WebkitAnimation: "webkitAnimationEnd"
                            };
                        for (e in i)
                            if (void 0 !== t.style[e]) return i[e]
                    }

                    function T() {
                        var e, t = document.createElement("fakeelement"),
                            i = {
                                transition: "transitionend",
                                OTransition: "oTransitionEnd",
                                MozTransition: "transitionend",
                                WebkitTransition: "webkitTransitionEnd"
                            };
                        for (e in i)
                            if (void 0 !== t.style[e]) return i[e]
                    }

                    function A(e) {
                        var t = e.url,
                            i = e.allow,
                            n = e.callback,
                            s = e.appendTo,
                            o = document.createElement("iframe");
                        return o.className = "vimeo-video gvideo", o.src = t, o.style.width = "100%", o.style.height = "100%", i && o.setAttribute("allow", i), o.onload = function() {
                            g(o, "node-ready"), q(n) && n()
                        }, s && s.appendChild(o), o
                    }

                    function C(e, t, i, n) {
                        if (e()) t();
                        else {
                            var s;
                            i || (i = 100);
                            var o = setInterval((function() {
                                e() && (clearInterval(o), s && clearTimeout(s), t())
                            }), i);
                            n && (s = setTimeout((function() {
                                clearInterval(o)
                            }), n))
                        }
                    }

                    function _(e, t, i) {
                        if (N(e)) console.error("Inject assets error");
                        else if (q(t) && (i = t, t = !1), P(t) && t in window) q(i) && i();
                        else {
                            var n;
                            if (-1 !== e.indexOf(".css")) {
                                if ((n = document.querySelectorAll('link[href="' + e + '"]')) && n.length > 0) return void(q(i) && i());
                                var s = document.getElementsByTagName("head")[0],
                                    o = s.querySelectorAll('link[rel="stylesheet"]'),
                                    r = document.createElement("link");
                                return r.rel = "stylesheet", r.type = "text/css", r.href = e, r.media = "all", o ? s.insertBefore(r, o[0]) : s.appendChild(r), void(q(i) && i())
                            }
                            if ((n = document.querySelectorAll('script[src="' + e + '"]')) && n.length > 0) {
                                if (q(i)) {
                                    if (P(t)) return C((function() {
                                        return void 0 !== window[t]
                                    }), (function() {
                                        i()
                                    })), !1;
                                    i()
                                }
                            } else {
                                var a = document.createElement("script");
                                a.type = "text/javascript", a.src = e, a.onload = function() {
                                    if (q(i)) {
                                        if (P(t)) return C((function() {
                                            return void 0 !== window[t]
                                        }), (function() {
                                            i()
                                        })), !1;
                                        i()
                                    }
                                }, document.body.appendChild(a)
                            }
                        }
                    }

                    function M() {
                        return "navigator" in window && window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i)
                    }

                    function O() {
                        return null !== M() || void 0 !== document.createTouch || "ontouchstart" in window || "onmsgesturechange" in window || navigator.msMaxTouchPoints
                    }

                    function q(e) {
                        return "function" == typeof e
                    }

                    function P(e) {
                        return "string" == typeof e
                    }

                    function z(e) {
                        return !(!e || !e.nodeType || 1 != e.nodeType)
                    }

                    function H(e) {
                        return Array.isArray(e)
                    }

                    function I(e) {
                        return e && e.length && isFinite(e.length)
                    }

                    function D(t) {
                        return "object" === e(t) && null != t && !q(t) && !H(t)
                    }

                    function N(e) {
                        return null == e
                    }

                    function B(e, t) {
                        return null !== e && hasOwnProperty.call(e, t)
                    }

                    function $(e) {
                        if (D(e)) {
                            if (e.keys) return e.keys().length;
                            var t = 0;
                            for (var i in e) B(e, i) && t++;
                            return t
                        }
                        return e.length
                    }

                    function V(e) {
                        return !isNaN(parseFloat(e)) && isFinite(e)
                    }

                    function W(e) {
                        if (e.events.hasOwnProperty("keyboard")) return !1;
                        e.events.keyboard = p("keydown", {
                            onElement: window,
                            withCallback: function(t, i) {
                                var n = (t = t || window.event).keyCode;
                                if (9 == n) {
                                    var o = !(!document.activeElement || !document.activeElement.nodeName) && document.activeElement.nodeName.toLocaleLowerCase();
                                    if ("input" == o || "textarea" == o || "button" == o) return;
                                    t.preventDefault();
                                    var r = document.querySelectorAll(".gbtn");
                                    if (!r || r.length <= 0) return;
                                    var a = s(r).filter((function(e) {
                                        return v(e, "focused")
                                    }));
                                    if (!a.length) {
                                        var l = document.querySelector('.gbtn[tabindex="0"]');
                                        return void(l && (l.focus(), g(l, "focused")))
                                    }
                                    r.forEach((function(e) {
                                        return m(e, "focused")
                                    }));
                                    var c = a[0].getAttribute("tabindex");
                                    c = c || "0";
                                    var d = parseInt(c) + 1;
                                    d > r.length - 1 && (d = "0");
                                    var u = document.querySelector('.gbtn[tabindex="'.concat(d, '"]'));
                                    u && (u.focus(), g(u, "focused"))
                                }
                                39 == n && e.nextSlide(), 37 == n && e.prevSlide(), 27 == n && e.close()
                            }
                        })
                    }

                    function Y(e) {
                        return Math.sqrt(e.x * e.x + e.y * e.y)
                    }

                    function X(e, t) {
                        return e.x * t.x + e.y * t.y
                    }

                    function R(e, t) {
                        var i = Y(e) * Y(t);
                        if (0 === i) return 0;
                        var n = X(e, t) / i;
                        return n > 1 && (n = 1), Math.acos(n)
                    }

                    function j(e, t) {
                        return e.x * t.y - t.x * e.y
                    }

                    function F(e, t) {
                        var i = R(e, t);
                        return j(e, t) > 0 && (i *= -1), 180 * i / Math.PI
                    }
                    var G = function() {
                        function e(i) {
                            t(this, e), this.handlers = [], this.el = i
                        }
                        return n(e, [{
                            key: "add",
                            value: function(e) {
                                this.handlers.push(e)
                            }
                        }, {
                            key: "del",
                            value: function(e) {
                                e || (this.handlers = []);
                                for (var t = this.handlers.length; t >= 0; t--) this.handlers[t] === e && this.handlers.splice(t, 1)
                            }
                        }, {
                            key: "dispatch",
                            value: function() {
                                for (var e = 0, t = this.handlers.length; e < t; e++) {
                                    var i = this.handlers[e];
                                    "function" == typeof i && i.apply(this.el, arguments)
                                }
                            }
                        }]), e
                    }();

                    function U(e, t) {
                        var i = new G(e);
                        return i.add(t), i
                    }
                    var K = function() {
                        function e(i, n) {
                            t(this, e), this.element = "string" == typeof i ? document.querySelector(i) : i, this.start = this.start.bind(this), this.move = this.move.bind(this), this.end = this.end.bind(this), this.cancel = this.cancel.bind(this), this.element.addEventListener("touchstart", this.start, !1), this.element.addEventListener("touchmove", this.move, !1), this.element.addEventListener("touchend", this.end, !1), this.element.addEventListener("touchcancel", this.cancel, !1), this.preV = {
                                x: null,
                                y: null
                            }, this.pinchStartLen = null, this.zoom = 1, this.isDoubleTap = !1;
                            var s = function() {};
                            this.rotate = U(this.element, n.rotate || s), this.touchStart = U(this.element, n.touchStart || s), this.multipointStart = U(this.element, n.multipointStart || s), this.multipointEnd = U(this.element, n.multipointEnd || s), this.pinch = U(this.element, n.pinch || s), this.swipe = U(this.element, n.swipe || s), this.tap = U(this.element, n.tap || s), this.doubleTap = U(this.element, n.doubleTap || s), this.longTap = U(this.element, n.longTap || s), this.singleTap = U(this.element, n.singleTap || s), this.pressMove = U(this.element, n.pressMove || s), this.twoFingerPressMove = U(this.element, n.twoFingerPressMove || s), this.touchMove = U(this.element, n.touchMove || s), this.touchEnd = U(this.element, n.touchEnd || s), this.touchCancel = U(this.element, n.touchCancel || s), this._cancelAllHandler = this.cancelAll.bind(this), window.addEventListener("scroll", this._cancelAllHandler), this.delta = null, this.last = null, this.now = null, this.tapTimeout = null, this.singleTapTimeout = null, this.longTapTimeout = null, this.swipeTimeout = null, this.x1 = this.x2 = this.y1 = this.y2 = null, this.preTapPosition = {
                                x: null,
                                y: null
                            }
                        }
                        return n(e, [{
                            key: "start",
                            value: function(e) {
                                if (e.touches) {
                                    this.now = Date.now(), this.x1 = e.touches[0].pageX, this.y1 = e.touches[0].pageY, this.delta = this.now - (this.last || this.now), this.touchStart.dispatch(e, this.element), null !== this.preTapPosition.x && (this.isDoubleTap = this.delta > 0 && this.delta <= 250 && Math.abs(this.preTapPosition.x - this.x1) < 30 && Math.abs(this.preTapPosition.y - this.y1) < 30, this.isDoubleTap && clearTimeout(this.singleTapTimeout)), this.preTapPosition.x = this.x1, this.preTapPosition.y = this.y1, this.last = this.now;
                                    var t = this.preV;
                                    if (e.touches.length > 1) {
                                        this._cancelLongTap(), this._cancelSingleTap();
                                        var i = {
                                            x: e.touches[1].pageX - this.x1,
                                            y: e.touches[1].pageY - this.y1
                                        };
                                        t.x = i.x, t.y = i.y, this.pinchStartLen = Y(t), this.multipointStart.dispatch(e, this.element)
                                    }
                                    this._preventTap = !1, this.longTapTimeout = setTimeout(function() {
                                        this.longTap.dispatch(e, this.element), this._preventTap = !0
                                    }.bind(this), 750)
                                }
                            }
                        }, {
                            key: "move",
                            value: function(e) {
                                if (e.touches) {
                                    var t = this.preV,
                                        i = e.touches.length,
                                        n = e.touches[0].pageX,
                                        s = e.touches[0].pageY;
                                    if (this.isDoubleTap = !1, i > 1) {
                                        var o = e.touches[1].pageX,
                                            r = e.touches[1].pageY,
                                            a = {
                                                x: e.touches[1].pageX - n,
                                                y: e.touches[1].pageY - s
                                            };
                                        null !== t.x && (this.pinchStartLen > 0 && (e.zoom = Y(a) / this.pinchStartLen, this.pinch.dispatch(e, this.element)), e.angle = F(a, t), this.rotate.dispatch(e, this.element)), t.x = a.x, t.y = a.y, null !== this.x2 && null !== this.sx2 ? (e.deltaX = (n - this.x2 + o - this.sx2) / 2, e.deltaY = (s - this.y2 + r - this.sy2) / 2) : (e.deltaX = 0, e.deltaY = 0), this.twoFingerPressMove.dispatch(e, this.element), this.sx2 = o, this.sy2 = r
                                    } else {
                                        if (null !== this.x2) {
                                            e.deltaX = n - this.x2, e.deltaY = s - this.y2;
                                            var l = Math.abs(this.x1 - this.x2),
                                                c = Math.abs(this.y1 - this.y2);
                                            (l > 10 || c > 10) && (this._preventTap = !0)
                                        } else e.deltaX = 0, e.deltaY = 0;
                                        this.pressMove.dispatch(e, this.element)
                                    }
                                    this.touchMove.dispatch(e, this.element), this._cancelLongTap(), this.x2 = n, this.y2 = s, i > 1 && e.preventDefault()
                                }
                            }
                        }, {
                            key: "end",
                            value: function(e) {
                                if (e.changedTouches) {
                                    this._cancelLongTap();
                                    var t = this;
                                    e.touches.length < 2 && (this.multipointEnd.dispatch(e, this.element), this.sx2 = this.sy2 = null), this.x2 && Math.abs(this.x1 - this.x2) > 30 || this.y2 && Math.abs(this.y1 - this.y2) > 30 ? (e.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2), this.swipeTimeout = setTimeout((function() {
                                        t.swipe.dispatch(e, t.element)
                                    }), 0)) : (this.tapTimeout = setTimeout((function() {
                                        t._preventTap || t.tap.dispatch(e, t.element), t.isDoubleTap && (t.doubleTap.dispatch(e, t.element), t.isDoubleTap = !1)
                                    }), 0), t.isDoubleTap || (t.singleTapTimeout = setTimeout((function() {
                                        t.singleTap.dispatch(e, t.element)
                                    }), 250))), this.touchEnd.dispatch(e, this.element), this.preV.x = 0, this.preV.y = 0, this.zoom = 1, this.pinchStartLen = null, this.x1 = this.x2 = this.y1 = this.y2 = null
                                }
                            }
                        }, {
                            key: "cancelAll",
                            value: function() {
                                this._preventTap = !0, clearTimeout(this.singleTapTimeout), clearTimeout(this.tapTimeout), clearTimeout(this.longTapTimeout), clearTimeout(this.swipeTimeout)
                            }
                        }, {
                            key: "cancel",
                            value: function(e) {
                                this.cancelAll(), this.touchCancel.dispatch(e, this.element)
                            }
                        }, {
                            key: "_cancelLongTap",
                            value: function() {
                                clearTimeout(this.longTapTimeout)
                            }
                        }, {
                            key: "_cancelSingleTap",
                            value: function() {
                                clearTimeout(this.singleTapTimeout)
                            }
                        }, {
                            key: "_swipeDirection",
                            value: function(e, t, i, n) {
                                return Math.abs(e - t) >= Math.abs(i - n) ? e - t > 0 ? "Left" : "Right" : i - n > 0 ? "Up" : "Down"
                            }
                        }, {
                            key: "on",
                            value: function(e, t) {
                                this[e] && this[e].add(t)
                            }
                        }, {
                            key: "off",
                            value: function(e, t) {
                                this[e] && this[e].del(t)
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                return this.singleTapTimeout && clearTimeout(this.singleTapTimeout), this.tapTimeout && clearTimeout(this.tapTimeout), this.longTapTimeout && clearTimeout(this.longTapTimeout), this.swipeTimeout && clearTimeout(this.swipeTimeout), this.element.removeEventListener("touchstart", this.start), this.element.removeEventListener("touchmove", this.move), this.element.removeEventListener("touchend", this.end), this.element.removeEventListener("touchcancel", this.cancel), this.rotate.del(), this.touchStart.del(), this.multipointStart.del(), this.multipointEnd.del(), this.pinch.del(), this.swipe.del(), this.tap.del(), this.doubleTap.del(), this.longTap.del(), this.singleTap.del(), this.pressMove.del(), this.twoFingerPressMove.del(), this.touchMove.del(), this.touchEnd.del(), this.touchCancel.del(), this.preV = this.pinchStartLen = this.zoom = this.isDoubleTap = this.delta = this.last = this.now = this.tapTimeout = this.singleTapTimeout = this.longTapTimeout = this.swipeTimeout = this.x1 = this.x2 = this.y1 = this.y2 = this.preTapPosition = this.rotate = this.touchStart = this.multipointStart = this.multipointEnd = this.pinch = this.swipe = this.tap = this.doubleTap = this.longTap = this.singleTap = this.pressMove = this.touchMove = this.touchEnd = this.touchCancel = this.twoFingerPressMove = null, window.removeEventListener("scroll", this._cancelAllHandler), null
                            }
                        }]), e
                    }();

                    function Z(e) {
                        var t = T(),
                            i = v(e, "gslide-media") ? e : e.querySelector(".gslide-media"),
                            n = e.querySelector(".gslide-description");
                        g(i, "greset"), w(i, "translate3d(0, 0, 0)"), p(t, {
                            onElement: i,
                            once: !0,
                            withCallback: function(e, t) {
                                m(i, "greset")
                            }
                        }), i.style.opacity = "", n && (n.style.opacity = "")
                    }

                    function Q(e) {
                        if (e.events.hasOwnProperty("touch")) return !1;
                        var t, i, n, s = E(),
                            o = s.width,
                            r = s.height,
                            a = !1,
                            l = null,
                            c = null,
                            d = null,
                            u = !1,
                            h = 1,
                            f = 4.5,
                            p = 1,
                            b = !1,
                            k = !1,
                            x = null,
                            S = null,
                            L = null,
                            T = null,
                            A = 0,
                            C = 0,
                            _ = !1,
                            M = !1,
                            O = {},
                            q = {},
                            P = 0,
                            z = 0,
                            H = document.getElementById("glightbox-slider"),
                            I = document.querySelector(".goverlay"),
                            D = new K(H, {
                                touchStart: function(t) {
                                    if (v(t.targetTouches[0].target, "ginner-container") || y(t.targetTouches[0].target, ".gslide-desc")) return a = !1, !1;
                                    a = !0, q = t.targetTouches[0], O.pageX = t.targetTouches[0].pageX, O.pageY = t.targetTouches[0].pageY, P = t.targetTouches[0].clientX, z = t.targetTouches[0].clientY, l = e.activeSlide, c = l.querySelector(".gslide-media"), n = l.querySelector(".gslide-inline"), d = null, v(c, "gslide-image") && (d = c.querySelector("img")), m(I, "greset"), t.pageX > 20 && t.pageX < window.innerWidth - 20 || t.preventDefault()
                                },
                                touchMove: function(s) {
                                    if (a && (q = s.targetTouches[0], !b && !k)) {
                                        if (n && n.offsetHeight > r) {
                                            var l = O.pageX - q.pageX;
                                            if (Math.abs(l) <= 13) return !1
                                        }
                                        u = !0;
                                        var h, f = s.targetTouches[0].clientX,
                                            p = s.targetTouches[0].clientY,
                                            g = P - f,
                                            m = z - p;
                                        if (Math.abs(g) > Math.abs(m) ? (_ = !1, M = !0) : (M = !1, _ = !0), t = q.pageX - O.pageX, A = 100 * t / o, i = q.pageY - O.pageY, C = 100 * i / r, _ && d && (h = 1 - Math.abs(i) / r, I.style.opacity = h, e.settings.touchFollowAxis && (A = 0)), M && (h = 1 - Math.abs(t) / o, c.style.opacity = h, e.settings.touchFollowAxis && (C = 0)), !d) return w(c, "translate3d(".concat(A, "%, 0, 0)"));
                                        w(c, "translate3d(".concat(A, "%, ").concat(C, "%, 0)"))
                                    }
                                },
                                touchEnd: function() {
                                    if (a) {
                                        if (u = !1, k || b) return L = x, void(T = S);
                                        var t = Math.abs(parseInt(C)),
                                            i = Math.abs(parseInt(A));
                                        if (!(t > 29 && d)) return t < 29 && i < 25 ? (g(I, "greset"), I.style.opacity = 1, Z(c)) : void 0;
                                        e.close()
                                    }
                                },
                                multipointEnd: function() {
                                    setTimeout((function() {
                                        b = !1
                                    }), 50)
                                },
                                multipointStart: function() {
                                    b = !0, h = p || 1
                                },
                                pinch: function(e) {
                                    if (!d || u) return !1;
                                    b = !0, d.scaleX = d.scaleY = h * e.zoom;
                                    var t = h * e.zoom;
                                    if (k = !0, t <= 1) return k = !1, t = 1, T = null, L = null, x = null, S = null, void d.setAttribute("style", "");
                                    t > f && (t = f), d.style.transform = "scale3d(".concat(t, ", ").concat(t, ", 1)"), p = t
                                },
                                pressMove: function(e) {
                                    if (k && !b) {
                                        var t = q.pageX - O.pageX,
                                            i = q.pageY - O.pageY;
                                        L && (t += L), T && (i += T), x = t, S = i;
                                        var n = "translate3d(".concat(t, "px, ").concat(i, "px, 0)");
                                        p && (n += " scale3d(".concat(p, ", ").concat(p, ", 1)")), w(d, n)
                                    }
                                },
                                swipe: function(t) {
                                    if (!k)
                                        if (b) b = !1;
                                        else {
                                            if ("Left" == t.direction) {
                                                if (e.index == e.elements.length - 1) return Z(c);
                                                e.nextSlide()
                                            }
                                            if ("Right" == t.direction) {
                                                if (0 == e.index) return Z(c);
                                                e.prevSlide()
                                            }
                                        }
                                }
                            });
                        e.events.touch = D
                    }
                    var J = function() {
                            function e(i, n) {
                                var s = this,
                                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                                if (t(this, e), this.img = i, this.slide = n, this.onclose = o, this.img.setZoomEvents) return !1;
                                this.active = !1, this.zoomedIn = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.img.addEventListener("mousedown", (function(e) {
                                    return s.dragStart(e)
                                }), !1), this.img.addEventListener("mouseup", (function(e) {
                                    return s.dragEnd(e)
                                }), !1), this.img.addEventListener("mousemove", (function(e) {
                                    return s.drag(e)
                                }), !1), this.img.addEventListener("click", (function(e) {
                                    return s.slide.classList.contains("dragging-nav") ? (s.zoomOut(), !1) : s.zoomedIn ? void(s.zoomedIn && !s.dragging && s.zoomOut()) : s.zoomIn()
                                }), !1), this.img.setZoomEvents = !0
                            }
                            return n(e, [{
                                key: "zoomIn",
                                value: function() {
                                    var e = this.widowWidth();
                                    if (!(this.zoomedIn || e <= 768)) {
                                        var t = this.img;
                                        if (t.setAttribute("data-style", t.getAttribute("style")), t.style.maxWidth = t.naturalWidth + "px", t.style.maxHeight = t.naturalHeight + "px", t.naturalWidth > e) {
                                            var i = e / 2 - t.naturalWidth / 2;
                                            this.setTranslate(this.img.parentNode, i, 0)
                                        }
                                        this.slide.classList.add("zoomed"), this.zoomedIn = !0
                                    }
                                }
                            }, {
                                key: "zoomOut",
                                value: function() {
                                    this.img.parentNode.setAttribute("style", ""), this.img.setAttribute("style", this.img.getAttribute("data-style")), this.slide.classList.remove("zoomed"), this.zoomedIn = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.onclose && "function" == typeof this.onclose && this.onclose()
                                }
                            }, {
                                key: "dragStart",
                                value: function(e) {
                                    e.preventDefault(), this.zoomedIn ? ("touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset, this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset, this.initialY = e.clientY - this.yOffset), e.target === this.img && (this.active = !0, this.img.classList.add("dragging"))) : this.active = !1
                                }
                            }, {
                                key: "dragEnd",
                                value: function(e) {
                                    var t = this;
                                    e.preventDefault(), this.initialX = this.currentX, this.initialY = this.currentY, this.active = !1, setTimeout((function() {
                                        t.dragging = !1, t.img.isDragging = !1, t.img.classList.remove("dragging")
                                    }), 100)
                                }
                            }, {
                                key: "drag",
                                value: function(e) {
                                    this.active && (e.preventDefault(), "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX, this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX, this.currentY = e.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.img.isDragging = !0, this.dragging = !0, this.setTranslate(this.img, this.currentX, this.currentY))
                                }
                            }, {
                                key: "onMove",
                                value: function(e) {
                                    if (this.zoomedIn) {
                                        var t = e.clientX - this.img.naturalWidth / 2,
                                            i = e.clientY - this.img.naturalHeight / 2;
                                        this.setTranslate(this.img, t, i)
                                    }
                                }
                            }, {
                                key: "setTranslate",
                                value: function(e, t, i) {
                                    e.style.transform = "translate3d(" + t + "px, " + i + "px, 0)"
                                }
                            }, {
                                key: "widowWidth",
                                value: function() {
                                    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
                                }
                            }]), e
                        }(),
                        ee = function() {
                            function e() {
                                var i = this,
                                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                t(this, e);
                                var s = n.dragEl,
                                    o = n.toleranceX,
                                    r = void 0 === o ? 40 : o,
                                    a = n.toleranceY,
                                    l = void 0 === a ? 65 : a,
                                    c = n.slide,
                                    d = void 0 === c ? null : c,
                                    u = n.instance,
                                    h = void 0 === u ? null : u;
                                this.el = s, this.active = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.direction = null, this.lastDirection = null, this.toleranceX = r, this.toleranceY = l, this.toleranceReached = !1, this.dragContainer = this.el, this.slide = d, this.instance = h, this.el.addEventListener("mousedown", (function(e) {
                                    return i.dragStart(e)
                                }), !1), this.el.addEventListener("mouseup", (function(e) {
                                    return i.dragEnd(e)
                                }), !1), this.el.addEventListener("mousemove", (function(e) {
                                    return i.drag(e)
                                }), !1)
                            }
                            return n(e, [{
                                key: "dragStart",
                                value: function(e) {
                                    if (this.slide.classList.contains("zoomed")) this.active = !1;
                                    else {
                                        "touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset, this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset, this.initialY = e.clientY - this.yOffset);
                                        var t = e.target.nodeName.toLowerCase(),
                                            i = ["input", "select", "textarea", "button", "a"];
                                        e.target.classList.contains("nodrag") || y(e.target, ".nodrag") || -1 !== i.indexOf(t) ? this.active = !1 : (e.preventDefault(), (e.target === this.el || "img" !== t && y(e.target, ".gslide-inline")) && (this.active = !0, this.el.classList.add("dragging"), this.dragContainer = y(e.target, ".ginner-container")))
                                    }
                                }
                            }, {
                                key: "dragEnd",
                                value: function(e) {
                                    var t = this;
                                    e && e.preventDefault(), this.initialX = 0, this.initialY = 0, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.active = !1, this.doSlideChange && (this.instance.preventOutsideClick = !0, "right" == this.doSlideChange && this.instance.prevSlide(), "left" == this.doSlideChange && this.instance.nextSlide()), this.doSlideClose && this.instance.close(), this.toleranceReached || this.setTranslate(this.dragContainer, 0, 0, !0), setTimeout((function() {
                                        t.instance.preventOutsideClick = !1, t.toleranceReached = !1, t.lastDirection = null, t.dragging = !1, t.el.isDragging = !1, t.el.classList.remove("dragging"), t.slide.classList.remove("dragging-nav"), t.dragContainer.style.transform = "", t.dragContainer.style.transition = ""
                                    }), 100)
                                }
                            }, {
                                key: "drag",
                                value: function(e) {
                                    if (this.active) {
                                        e.preventDefault(), this.slide.classList.add("dragging-nav"), "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX, this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX, this.currentY = e.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.el.isDragging = !0, this.dragging = !0, this.doSlideChange = !1, this.doSlideClose = !1;
                                        var t = Math.abs(this.currentX),
                                            i = Math.abs(this.currentY);
                                        if (t > 0 && t >= Math.abs(this.currentY) && (!this.lastDirection || "x" == this.lastDirection)) {
                                            this.yOffset = 0, this.lastDirection = "x", this.setTranslate(this.dragContainer, this.currentX, 0);
                                            var n = this.shouldChange();
                                            if (!this.instance.settings.dragAutoSnap && n && (this.doSlideChange = n), this.instance.settings.dragAutoSnap && n) return this.instance.preventOutsideClick = !0, this.toleranceReached = !0, this.active = !1, this.instance.preventOutsideClick = !0, this.dragEnd(null), "right" == n && this.instance.prevSlide(), void("left" == n && this.instance.nextSlide())
                                        }
                                        if (this.toleranceY > 0 && i > 0 && i >= t && (!this.lastDirection || "y" == this.lastDirection)) {
                                            this.xOffset = 0, this.lastDirection = "y", this.setTranslate(this.dragContainer, 0, this.currentY);
                                            var s = this.shouldClose();
                                            return !this.instance.settings.dragAutoSnap && s && (this.doSlideClose = !0), void(this.instance.settings.dragAutoSnap && s && this.instance.close())
                                        }
                                    }
                                }
                            }, {
                                key: "shouldChange",
                                value: function() {
                                    var e = !1;
                                    if (Math.abs(this.currentX) >= this.toleranceX) {
                                        var t = this.currentX > 0 ? "right" : "left";
                                        ("left" == t && this.slide !== this.slide.parentNode.lastChild || "right" == t && this.slide !== this.slide.parentNode.firstChild) && (e = t)
                                    }
                                    return e
                                }
                            }, {
                                key: "shouldClose",
                                value: function() {
                                    var e = !1;
                                    return Math.abs(this.currentY) >= this.toleranceY && (e = !0), e
                                }
                            }, {
                                key: "setTranslate",
                                value: function(e, t, i) {
                                    var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                                    e.style.transition = n ? "all .2s ease" : "", e.style.transform = "translate3d(" + t + "px, " + i + "px, 0)"
                                }
                            }]), e
                        }();

                    function te(e, t, i) {
                        var n = e.querySelector(".gslide-media"),
                            s = new Image,
                            o = "gSlideTitle_" + t.index,
                            r = "gSlideDesc_" + t.index;
                        s.addEventListener("load", (function() {
                            q(i) && i()
                        }), !1), s.src = t.href, s.alt = "", "" !== t.title && s.setAttribute("aria-labelledby", o), "" !== t.description && s.setAttribute("aria-describedby", r), n.insertBefore(s, n.firstChild)
                    }

                    function ie(e, t, i) {
                        var n = this,
                            s = e.querySelector(".ginner-container"),
                            o = "gvideo" + t.index,
                            r = e.querySelector(".gslide-media"),
                            a = this.getAllPlayers();
                        g(s, "gvideo-container"), r.insertBefore(S('<div class="gvideo-wrapper"></div>'), r.firstChild);
                        var l = e.querySelector(".gvideo-wrapper");
                        _(this.settings.plyr.css, "Plyr");
                        var c = t.href,
                            d = location.protocol.replace(":", ""),
                            u = "",
                            h = "",
                            f = !1;
                        "file" == d && (d = "http"), r.style.maxWidth = t.width, _(this.settings.plyr.js, "Plyr", (function() {
                            if (c.match(/vimeo\.com\/([0-9]*)/)) {
                                var e = /vimeo.*\/(\d+)/i.exec(c);
                                u = "vimeo", h = e[1]
                            }
                            if (c.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || c.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || c.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) {
                                var s = ne(c);
                                u = "youtube", h = s
                            }
                            if (null !== c.match(/\.(mp4|ogg|webm|mov)$/)) {
                                u = "local";
                                var r = '<video id="' + o + '" ';
                                r += 'style="background:#000; max-width: '.concat(t.width, ';" '), r += 'preload="metadata" ', r += 'x-webkit-airplay="allow" ', r += 'webkit-playsinline="" ', r += "controls ", r += 'class="gvideo-local">';
                                var d = c.toLowerCase().split(".").pop(),
                                    p = {
                                        mp4: "",
                                        ogg: "",
                                        webm: ""
                                    };
                                for (var m in p[d = "mov" == d ? "mp4" : d] = c, p)
                                    if (p.hasOwnProperty(m)) {
                                        var v = p[m];
                                        t.hasOwnProperty(m) && (v = t[m]), "" !== v && (r += '<source src="'.concat(v, '" type="video/').concat(m, '">'))
                                    }
                                f = S(r += "</video>")
                            }
                            var y = f || S('<div id="'.concat(o, '" data-plyr-provider="').concat(u, '" data-plyr-embed-id="').concat(h, '"></div>'));
                            g(l, "".concat(u, "-video gvideo")), l.appendChild(y), l.setAttribute("data-id", o), l.setAttribute("data-index", t.index);
                            var b = B(n.settings.plyr, "config") ? n.settings.plyr.config : {},
                                w = new Plyr("#" + o, b);
                            w.on("ready", (function(e) {
                                var t = e.detail.plyr;
                                a[o] = t, q(i) && i()
                            })), w.on("enterfullscreen", se), w.on("exitfullscreen", se)
                        }))
                    }

                    function ne(e) {
                        return void 0 !== (e = e.replace(/(>|<)/gi, "").split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/))[2] ? e[2].split(/[^0-9a-z_\-]/i)[0] : e
                    }

                    function se(e) {
                        var t = y(e.target, ".gslide-media");
                        "enterfullscreen" == e.type && g(t, "fullscreen"), "exitfullscreen" == e.type && m(t, "fullscreen")
                    }

                    function oe(e, t, i) {
                        var n, s = this,
                            o = e.querySelector(".gslide-media"),
                            r = !(!B(t, "href") || !t.href) && t.href.split("#").pop().trim(),
                            a = !(!B(t, "content") || !t.content) && t.content;
                        if (a && (P(a) && (n = S('<div class="ginlined-content">'.concat(a, "</div>"))), z(a))) {
                            "none" == a.style.display && (a.style.display = "block");
                            var l = document.createElement("div");
                            l.className = "ginlined-content", l.appendChild(a), n = l
                        }
                        if (r) {
                            var c = document.getElementById(r);
                            if (!c) return !1;
                            var d = c.cloneNode(!0);
                            d.style.height = t.height, d.style.maxWidth = t.width, g(d, "ginlined-content"), n = d
                        }
                        if (!n) return console.error("Unable to append inline slide content", t), !1;
                        o.style.height = t.height, o.style.width = t.width, o.appendChild(n), this.events["inlineclose" + r] = p("click", {
                            onElement: o.querySelectorAll(".gtrigger-close"),
                            withCallback: function(e) {
                                e.preventDefault(), s.close()
                            }
                        }), q(i) && i()
                    }

                    function re(e, t, i) {
                        var n = e.querySelector(".gslide-media"),
                            s = A({
                                url: t.href,
                                callback: i
                            });
                        n.parentNode.style.maxWidth = t.width, n.parentNode.style.height = t.height, n.appendChild(s)
                    }
                    var ae = function() {
                            function e() {
                                var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                t(this, e), this.defaults = {
                                    href: "",
                                    title: "",
                                    type: "",
                                    description: "",
                                    descPosition: "bottom",
                                    effect: "",
                                    width: "",
                                    height: "",
                                    content: !1,
                                    zoomable: !0,
                                    draggable: !0
                                }, D(i) && (this.defaults = u(this.defaults, i))
                            }
                            return n(e, [{
                                key: "sourceType",
                                value: function(e) {
                                    var t = e;
                                    return null !== (e = e.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|svg)$/) ? "image" : e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || e.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/) || e.match(/vimeo\.com\/([0-9]*)/) || null !== e.match(/\.(mp4|ogg|webm|mov)$/) ? "video" : null !== e.match(/\.(mp3|wav|wma|aac|ogg)$/) ? "audio" : e.indexOf("#") > -1 && "" !== t.split("#").pop().trim() ? "inline" : e.indexOf("goajax=true") > -1 ? "ajax" : "external"
                                }
                            }, {
                                key: "parseConfig",
                                value: function(e, t) {
                                    var i = this,
                                        n = u({
                                            descPosition: t.descPosition
                                        }, this.defaults);
                                    if (D(e) && !z(e)) {
                                        B(e, "type") || (B(e, "content") && e.content ? e.type = "inline" : B(e, "href") && (e.type = this.sourceType(e.href)));
                                        var s = u(n, e);
                                        return this.setSize(s, t), s
                                    }
                                    var o = "",
                                        r = e.getAttribute("data-glightbox"),
                                        a = e.nodeName.toLowerCase();
                                    if ("a" === a && (o = e.href), "img" === a && (o = e.src), n.href = o, h(n, (function(s, o) {
                                            B(t, o) && "width" !== o && (n[o] = t[o]);
                                            var r = e.dataset[o];
                                            N(r) || (n[o] = i.sanitizeValue(r))
                                        })), n.content && (n.type = "inline"), !n.type && o && (n.type = this.sourceType(o)), N(r)) {
                                        if (!n.title && "a" == a) {
                                            var l = e.title;
                                            N(l) || "" === l || (n.title = l)
                                        }
                                        if (!n.title && "img" == a) {
                                            var c = e.alt;
                                            N(c) || "" === c || (n.title = c)
                                        }
                                    } else {
                                        var d = [];
                                        h(n, (function(e, t) {
                                            d.push(";\\s?" + t)
                                        })), d = d.join("\\s?:|"), "" !== r.trim() && h(n, (function(e, t) {
                                            var s = r,
                                                o = new RegExp("s?" + t + "s?:s?(.*?)(" + d + "s?:|$)"),
                                                a = s.match(o);
                                            if (a && a.length && a[1]) {
                                                var l = a[1].trim().replace(/;\s*$/, "");
                                                n[t] = i.sanitizeValue(l)
                                            }
                                        }))
                                    }
                                    if (n.description && "." == n.description.substring(0, 1) && document.querySelector(n.description)) n.description = document.querySelector(n.description).innerHTML;
                                    else {
                                        var f = e.querySelector(".glightbox-desc");
                                        f && (n.description = f.innerHTML)
                                    }
                                    return this.setSize(n, t), this.slideConfig = n, n
                                }
                            }, {
                                key: "setSize",
                                value: function(e, t) {
                                    var i = "video" == e.type ? this.checkSize(t.videosWidth) : this.checkSize(t.width),
                                        n = this.checkSize(t.height);
                                    return e.width = B(e, "width") && "" !== e.width ? this.checkSize(e.width) : i, e.height = B(e, "height") && "" !== e.height ? this.checkSize(e.height) : n, e
                                }
                            }, {
                                key: "checkSize",
                                value: function(e) {
                                    return V(e) ? "".concat(e, "px") : e
                                }
                            }, {
                                key: "sanitizeValue",
                                value: function(e) {
                                    return "true" !== e && "false" !== e ? e : "true" === e
                                }
                            }]), e
                        }(),
                        le = function() {
                            function e(i, n) {
                                t(this, e), this.element = i, this.instance = n
                            }
                            return n(e, [{
                                key: "setContent",
                                value: function() {
                                    var e = this,
                                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                    if (v(t, "loaded")) return !1;
                                    var n = this.instance.settings,
                                        s = this.slideConfig,
                                        o = M();
                                    q(n.beforeSlideLoad) && n.beforeSlideLoad({
                                        index: s.index,
                                        slide: t,
                                        player: !1
                                    });
                                    var r = s.type,
                                        a = s.descPosition,
                                        l = t.querySelector(".gslide-media"),
                                        c = t.querySelector(".gslide-title"),
                                        d = t.querySelector(".gslide-desc"),
                                        u = t.querySelector(".gdesc-inner"),
                                        h = i,
                                        f = "gSlideTitle_" + s.index,
                                        p = "gSlideDesc_" + s.index;
                                    if (q(n.afterSlideLoad) && (h = function() {
                                            q(i) && i(), n.afterSlideLoad({
                                                index: s.index,
                                                slide: t,
                                                player: e.instance.getSlidePlayerInstance(s.index)
                                            })
                                        }), "" == s.title && "" == s.description ? u && u.parentNode.parentNode.removeChild(u.parentNode) : (c && "" !== s.title ? (c.id = f, c.innerHTML = s.title) : c.parentNode.removeChild(c), d && "" !== s.description ? (d.id = p, o && n.moreLength > 0 ? (s.smallDescription = this.slideShortDesc(s.description, n.moreLength, n.moreText), d.innerHTML = s.smallDescription, this.descriptionEvents(d, s)) : d.innerHTML = s.description) : d.parentNode.removeChild(d), g(l.parentNode, "desc-".concat(a)), g(u.parentNode, "description-".concat(a))), g(l, "gslide-".concat(r)), g(t, "loaded"), "video" !== r) {
                                        if ("external" !== r) return "inline" === r ? (oe.apply(this.instance, [t, s, h]), void(s.draggable && new ee({
                                            dragEl: t.querySelector(".gslide-inline"),
                                            toleranceX: n.dragToleranceX,
                                            toleranceY: n.dragToleranceY,
                                            slide: t,
                                            instance: this.instance
                                        }))) : void("image" !== r ? q(h) && h() : te(t, s, (function() {
                                            var i = t.querySelector("img");
                                            s.draggable && new ee({
                                                dragEl: i,
                                                toleranceX: n.dragToleranceX,
                                                toleranceY: n.dragToleranceY,
                                                slide: t,
                                                instance: e.instance
                                            }), s.zoomable && i.naturalWidth > i.offsetWidth && (g(i, "zoomable"), new J(i, t, (function() {
                                                e.instance.resize()
                                            }))), q(h) && h()
                                        })));
                                        re.apply(this, [t, s, h])
                                    } else ie.apply(this.instance, [t, s, h])
                                }
                            }, {
                                key: "slideShortDesc",
                                value: function(e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50,
                                        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                        n = i;
                                    if ((e = e.trim()).length <= t) return e;
                                    var s = e.substr(0, t - 1);
                                    return n ? s + '... <a href="#" class="desc-more">' + i + "</a>" : s
                                }
                            }, {
                                key: "descriptionEvents",
                                value: function(e, t) {
                                    var i = this,
                                        n = e.querySelector(".desc-more");
                                    if (!n) return !1;
                                    p("click", {
                                        onElement: n,
                                        withCallback: function(e, n) {
                                            e.preventDefault();
                                            var s = document.body,
                                                o = y(n, ".gslide-desc");
                                            if (!o) return !1;
                                            o.innerHTML = t.description, g(s, "gdesc-open");
                                            var r = p("click", {
                                                onElement: [s, y(o, ".gslide-description")],
                                                withCallback: function(e, n) {
                                                    "a" !== e.target.nodeName.toLowerCase() && (m(s, "gdesc-open"), g(s, "gdesc-closed"), o.innerHTML = t.smallDescription, i.descriptionEvents(o, t), setTimeout((function() {
                                                        m(s, "gdesc-closed")
                                                    }), 400), r.destroy())
                                                }
                                            })
                                        }
                                    })
                                }
                            }, {
                                key: "create",
                                value: function() {
                                    return S(this.instance.settings.slideHTML)
                                }
                            }, {
                                key: "getConfig",
                                value: function() {
                                    var e = new ae(this.instance.settings.slideExtraAttributes);
                                    return this.slideConfig = e.parseConfig(this.element, this.instance.settings), this.slideConfig
                                }
                            }]), e
                        }(),
                        ce = "3.0.6",
                        de = M(),
                        ue = O(),
                        he = document.getElementsByTagName("html")[0],
                        fe = {
                            selector: ".glightbox",
                            elements: null,
                            skin: "clean",
                            closeButton: !0,
                            startAt: null,
                            autoplayVideos: !0,
                            autofocusVideos: !0,
                            descPosition: "bottom",
                            width: "900px",
                            height: "506px",
                            videosWidth: "960px",
                            beforeSlideChange: null,
                            afterSlideChange: null,
                            beforeSlideLoad: null,
                            afterSlideLoad: null,
                            slideInserted: null,
                            slideRemoved: null,
                            slideExtraAttributes: null,
                            onOpen: null,
                            onClose: null,
                            loop: !1,
                            zoomable: !0,
                            draggable: !0,
                            dragAutoSnap: !1,
                            dragToleranceX: 40,
                            dragToleranceY: 65,
                            preload: !0,
                            oneSlidePerOpen: !1,
                            touchNavigation: !0,
                            touchFollowAxis: !0,
                            keyboardNavigation: !0,
                            closeOnOutsideClick: !0,
                            plyr: {
                                css: "https://cdn.plyr.io/3.6.3/plyr.css",
                                js: "https://cdn.plyr.io/3.6.3/plyr.js",
                                config: {
                                    ratio: "16:9",
                                    youtube: {
                                        noCookie: !0,
                                        rel: 0,
                                        showinfo: 0,
                                        iv_load_policy: 3
                                    },
                                    vimeo: {
                                        byline: !1,
                                        portrait: !1,
                                        title: !1,
                                        transparent: !1
                                    }
                                }
                            },
                            openEffect: "zoom",
                            closeEffect: "zoom",
                            slideEffect: "slide",
                            moreText: "See more",
                            moreLength: 60,
                            cssEfects: {
                                fade: { in : "fadeIn", out: "fadeOut"
                                },
                                zoom: { in : "zoomIn", out: "zoomOut"
                                },
                                slide: { in : "slideInRight", out: "slideOutLeft"
                                },
                                slideBack: { in : "slideInLeft", out: "slideOutRight"
                                },
                                none: { in : "none", out: "none"
                                }
                            },
                            svg: {
                                close: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',
                                next: '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',
                                prev: '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'
                            },
                            slideHTML: '<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',
                            lightboxHTML: '<div id="glightbox-body" class="glightbox-container">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gnext gbtn" tabindex="0" aria-label="Next">{nextSVG}</button>\n    <button class="gprev gbtn" tabindex="1" aria-label="Previous">{prevSVG}</button>\n    <button class="gclose gbtn" tabindex="2" aria-label="Close">{closeSVG}</button>\n</div>\n</div>'
                        },
                        pe = function() {
                            function e() {
                                var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                t(this, e), this.settings = u(fe, i), this.effectsClasses = this.getAnimationClasses(), this.videoPlayers = {}, this.apiEvents = [], this.fullElementsList = !1
                            }
                            return n(e, [{
                                key: "init",
                                value: function() {
                                    var e = this,
                                        t = this.getSelector();
                                    t && (this.baseEvents = p("click", {
                                        onElement: t,
                                        withCallback: function(t, i) {
                                            t.preventDefault(), e.open(i)
                                        }
                                    })), this.elements = this.getElements()
                                }
                            }, {
                                key: "open",
                                value: function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                    if (0 == this.elements.length) return !1;
                                    this.activeSlide = null, this.prevActiveSlideIndex = null, this.prevActiveSlide = null;
                                    var i = V(t) ? t : this.settings.startAt;
                                    if (z(e)) {
                                        var n = e.getAttribute("data-gallery");
                                        n && (this.fullElementsList = this.elements, this.elements = this.getGalleryElements(this.elements, n)), N(i) && (i = this.getElementIndex(e)) < 0 && (i = 0)
                                    }
                                    V(i) || (i = 0), this.build(), b(this.overlay, "none" == this.settings.openEffect ? "none" : this.settings.cssEfects.fade.in);
                                    var s = document.body,
                                        o = window.innerWidth - document.documentElement.clientWidth;
                                    if (o > 0) {
                                        var r = document.createElement("style");
                                        r.type = "text/css", r.className = "gcss-styles", r.innerText = ".gscrollbar-fixer {margin-right: ".concat(o, "px}"), document.head.appendChild(r), g(s, "gscrollbar-fixer")
                                    }
                                    g(s, "glightbox-open"), g(he, "glightbox-open"), de && (g(document.body, "glightbox-mobile"), this.settings.slideEffect = "slide"), this.showSlide(i, !0), 1 == this.elements.length ? (x(this.prevButton), x(this.nextButton)) : (k(this.prevButton), k(this.nextButton)), this.lightboxOpen = !0, this.trigger("open"), q(this.settings.onOpen) && this.settings.onOpen(), ue && this.settings.touchNavigation && Q(this), this.settings.keyboardNavigation && W(this)
                                }
                            }, {
                                key: "openAt",
                                value: function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                                    this.open(null, e)
                                }
                            }, {
                                key: "showSlide",
                                value: function() {
                                    var e = this,
                                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                    k(this.loader), this.index = parseInt(t);
                                    var n = this.slidesContainer.querySelector(".current");
                                    n && m(n, "current"), this.slideAnimateOut();
                                    var s = this.slidesContainer.querySelectorAll(".gslide")[t];
                                    if (v(s, "loaded")) this.slideAnimateIn(s, i), x(this.loader);
                                    else {
                                        k(this.loader);
                                        var o = this.elements[t],
                                            r = {
                                                index: this.index,
                                                slide: s,
                                                slideNode: s,
                                                slideConfig: o.slideConfig,
                                                slideIndex: this.index,
                                                trigger: o.node,
                                                player: null
                                            };
                                        this.trigger("slide_before_load", r), o.instance.setContent(s, (function() {
                                            x(e.loader), e.resize(), e.slideAnimateIn(s, i), e.trigger("slide_after_load", r)
                                        }))
                                    }
                                    this.slideDescription = s.querySelector(".gslide-description"), this.slideDescriptionContained = this.slideDescription && v(this.slideDescription.parentNode, "gslide-media"), this.settings.preload && (this.preloadSlide(t + 1), this.preloadSlide(t - 1)), this.updateNavigationClasses(), this.activeSlide = s
                                }
                            }, {
                                key: "preloadSlide",
                                value: function(e) {
                                    var t = this;
                                    if (e < 0 || e > this.elements.length - 1) return !1;
                                    if (N(this.elements[e])) return !1;
                                    var i = this.slidesContainer.querySelectorAll(".gslide")[e];
                                    if (v(i, "loaded")) return !1;
                                    var n = this.elements[e],
                                        s = n.type,
                                        o = {
                                            index: e,
                                            slide: i,
                                            slideNode: i,
                                            slideConfig: n.slideConfig,
                                            slideIndex: e,
                                            trigger: n.node,
                                            player: null
                                        };
                                    this.trigger("slide_before_load", o), "video" == s || "external" == s ? setTimeout((function() {
                                        n.instance.setContent(i, (function() {
                                            t.trigger("slide_after_load", o)
                                        }))
                                    }), 200) : n.instance.setContent(i, (function() {
                                        t.trigger("slide_after_load", o)
                                    }))
                                }
                            }, {
                                key: "prevSlide",
                                value: function() {
                                    this.goToSlide(this.index - 1)
                                }
                            }, {
                                key: "nextSlide",
                                value: function() {
                                    this.goToSlide(this.index + 1)
                                }
                            }, {
                                key: "goToSlide",
                                value: function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                    if (this.prevActiveSlide = this.activeSlide, this.prevActiveSlideIndex = this.index, !this.loop() && (e < 0 || e > this.elements.length - 1)) return !1;
                                    e < 0 ? e = this.elements.length - 1 : e >= this.elements.length && (e = 0), this.showSlide(e)
                                }
                            }, {
                                key: "insertSlide",
                                value: function() {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
                                        t = new le(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, this),
                                        i = t.getConfig(),
                                        n = u({}, i),
                                        s = t.create(),
                                        o = this.elements.length - 1;
                                    e < 0 && (e = this.elements.length), n.index = e, n.node = !1, n.instance = t, n.slideConfig = i, this.elements.splice(e, 0, n);
                                    var r = null,
                                        a = null;
                                    if (this.slidesContainer) {
                                        if (e > o) this.slidesContainer.appendChild(s);
                                        else {
                                            var l = this.slidesContainer.querySelectorAll(".gslide")[e];
                                            this.slidesContainer.insertBefore(s, l)
                                        }(this.settings.preload && 0 == this.index && 0 == e || this.index - 1 == e || this.index + 1 == e) && this.preloadSlide(e), 0 == this.index && 0 == e && (this.index = 1), this.updateNavigationClasses(), r = this.slidesContainer.querySelectorAll(".gslide")[e], a = this.getSlidePlayerInstance(e), n.slideNode = r
                                    }
                                    this.trigger("slide_inserted", {
                                        index: e,
                                        slide: r,
                                        slideNode: r,
                                        slideConfig: i,
                                        slideIndex: e,
                                        trigger: null,
                                        player: a
                                    }), q(this.settings.slideInserted) && this.settings.slideInserted({
                                        index: e,
                                        slide: r,
                                        player: a
                                    })
                                }
                            }, {
                                key: "removeSlide",
                                value: function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                                    if (e < 0 || e > this.elements.length - 1) return !1;
                                    var t = this.slidesContainer && this.slidesContainer.querySelectorAll(".gslide")[e];
                                    t && (this.getActiveSlideIndex() == e && (e == this.elements.length - 1 ? this.prevSlide() : this.nextSlide()), t.parentNode.removeChild(t)), this.elements.splice(e, 1), this.trigger("slide_removed", e), q(this.settings.slideRemoved) && this.settings.slideRemoved(e)
                                }
                            }, {
                                key: "slideAnimateIn",
                                value: function(e, t) {
                                    var i = this,
                                        n = e.querySelector(".gslide-media"),
                                        s = e.querySelector(".gslide-description"),
                                        o = {
                                            index: this.prevActiveSlideIndex,
                                            slide: this.prevActiveSlide,
                                            slideNode: this.prevActiveSlide,
                                            slideIndex: this.prevActiveSlide,
                                            slideConfig: N(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                                            trigger: N(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
                                            player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                                        },
                                        r = {
                                            index: this.index,
                                            slide: this.activeSlide,
                                            slideNode: this.activeSlide,
                                            slideConfig: this.elements[this.index].slideConfig,
                                            slideIndex: this.index,
                                            trigger: this.elements[this.index].node,
                                            player: this.getSlidePlayerInstance(this.index)
                                        };
                                    if (n.offsetWidth > 0 && s && (x(s), s.style.display = ""), m(e, this.effectsClasses), t) b(e, this.settings.cssEfects[this.settings.openEffect].in, (function() {
                                        i.settings.autoplayVideos && i.slidePlayerPlay(e), i.trigger("slide_changed", {
                                            prev: o,
                                            current: r
                                        }), q(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [o, r])
                                    }));
                                    else {
                                        var a = this.settings.slideEffect,
                                            l = "none" !== a ? this.settings.cssEfects[a].in : a;
                                        this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (l = this.settings.cssEfects.slideBack.in), b(e, l, (function() {
                                            i.settings.autoplayVideos && i.slidePlayerPlay(e), i.trigger("slide_changed", {
                                                prev: o,
                                                current: r
                                            }), q(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [o, r])
                                        }))
                                    }
                                    setTimeout((function() {
                                        i.resize(e)
                                    }), 100), g(e, "current")
                                }
                            }, {
                                key: "slideAnimateOut",
                                value: function() {
                                    if (!this.prevActiveSlide) return !1;
                                    var e = this.prevActiveSlide;
                                    m(e, this.effectsClasses), g(e, "prev");
                                    var t = this.settings.slideEffect,
                                        i = "none" !== t ? this.settings.cssEfects[t].out : t;
                                    this.slidePlayerPause(e), this.trigger("slide_before_change", {
                                        prev: {
                                            index: this.prevActiveSlideIndex,
                                            slide: this.prevActiveSlide,
                                            slideNode: this.prevActiveSlide,
                                            slideIndex: this.prevActiveSlideIndex,
                                            slideConfig: N(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                                            trigger: N(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
                                            player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                                        },
                                        current: {
                                            index: this.index,
                                            slide: this.activeSlide,
                                            slideNode: this.activeSlide,
                                            slideIndex: this.index,
                                            slideConfig: this.elements[this.index].slideConfig,
                                            trigger: this.elements[this.index].node,
                                            player: this.getSlidePlayerInstance(this.index)
                                        }
                                    }), q(this.settings.beforeSlideChange) && this.settings.beforeSlideChange.apply(this, [{
                                        index: this.prevActiveSlideIndex,
                                        slide: this.prevActiveSlide,
                                        player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                                    }, {
                                        index: this.index,
                                        slide: this.activeSlide,
                                        player: this.getSlidePlayerInstance(this.index)
                                    }]), this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (i = this.settings.cssEfects.slideBack.out), b(e, i, (function() {
                                        var t = e.querySelector(".gslide-media"),
                                            i = e.querySelector(".gslide-description");
                                        t.style.transform = "", m(t, "greset"), t.style.opacity = "", i && (i.style.opacity = ""), m(e, "prev")
                                    }))
                                }
                            }, {
                                key: "getAllPlayers",
                                value: function() {
                                    return this.videoPlayers
                                }
                            }, {
                                key: "getSlidePlayerInstance",
                                value: function(e) {
                                    var t = "gvideo" + e,
                                        i = this.getAllPlayers();
                                    return !(!B(i, t) || !i[t]) && i[t]
                                }
                            }, {
                                key: "stopSlideVideo",
                                value: function(e) {
                                    if (z(e)) {
                                        var t = e.querySelector(".gvideo-wrapper");
                                        t && (e = t.getAttribute("data-index"))
                                    }
                                    console.log("stopSlideVideo is deprecated, use slidePlayerPause");
                                    var i = this.getSlidePlayerInstance(e);
                                    i && i.playing && i.pause()
                                }
                            }, {
                                key: "slidePlayerPause",
                                value: function(e) {
                                    if (z(e)) {
                                        var t = e.querySelector(".gvideo-wrapper");
                                        t && (e = t.getAttribute("data-index"))
                                    }
                                    var i = this.getSlidePlayerInstance(e);
                                    i && i.playing && i.pause()
                                }
                            }, {
                                key: "playSlideVideo",
                                value: function(e) {
                                    if (z(e)) {
                                        var t = e.querySelector(".gvideo-wrapper");
                                        t && (e = t.getAttribute("data-index"))
                                    }
                                    console.log("playSlideVideo is deprecated, use slidePlayerPlay");
                                    var i = this.getSlidePlayerInstance(e);
                                    i && !i.playing && i.play()
                                }
                            }, {
                                key: "slidePlayerPlay",
                                value: function(e) {
                                    if (z(e)) {
                                        var t = e.querySelector(".gvideo-wrapper");
                                        t && (e = t.getAttribute("data-index"))
                                    }
                                    var i = this.getSlidePlayerInstance(e);
                                    i && !i.playing && (i.play(), this.settings.autofocusVideos && i.elements.container.focus())
                                }
                            }, {
                                key: "setElements",
                                value: function(e) {
                                    var t = this;
                                    this.settings.elements = !1;
                                    var i = [];
                                    e && e.length && h(e, (function(e, n) {
                                        var s = new le(e, t),
                                            o = s.getConfig(),
                                            r = u({}, o);
                                        r.slideConfig = o, r.instance = s, r.index = n, i.push(r)
                                    })), this.elements = i, this.lightboxOpen && (this.slidesContainer.innerHTML = "", this.elements.length && (h(this.elements, (function() {
                                        var e = S(t.settings.slideHTML);
                                        t.slidesContainer.appendChild(e)
                                    })), this.showSlide(0, !0)))
                                }
                            }, {
                                key: "getElementIndex",
                                value: function(e) {
                                    var t = !1;
                                    return h(this.elements, (function(i, n) {
                                        if (B(i, "node") && i.node == e) return t = n, !0
                                    })), t
                                }
                            }, {
                                key: "getElements",
                                value: function() {
                                    var e = this,
                                        t = [];
                                    this.elements = this.elements ? this.elements : [], !N(this.settings.elements) && H(this.settings.elements) && this.settings.elements.length && h(this.settings.elements, (function(i, n) {
                                        var s = new le(i, e),
                                            o = s.getConfig(),
                                            r = u({}, o);
                                        r.node = !1, r.index = n, r.instance = s, r.slideConfig = o, t.push(r)
                                    }));
                                    var i = !1;
                                    return this.getSelector() && (i = document.querySelectorAll(this.getSelector())), i ? (h(i, (function(i, n) {
                                        var s = new le(i, e),
                                            o = s.getConfig(),
                                            r = u({}, o);
                                        r.node = i, r.index = n, r.instance = s, r.slideConfig = o, r.gallery = i.getAttribute("data-gallery"), t.push(r)
                                    })), t) : t
                                }
                            }, {
                                key: "getGalleryElements",
                                value: function(e, t) {
                                    return e.filter((function(e) {
                                        return e.gallery == t
                                    }))
                                }
                            }, {
                                key: "getSelector",
                                value: function() {
                                    return !this.settings.elements && (this.settings.selector && "data-" == this.settings.selector.substring(0, 5) ? "*[".concat(this.settings.selector, "]") : this.settings.selector)
                                }
                            }, {
                                key: "getActiveSlide",
                                value: function() {
                                    return this.slidesContainer.querySelectorAll(".gslide")[this.index]
                                }
                            }, {
                                key: "getActiveSlideIndex",
                                value: function() {
                                    return this.index
                                }
                            }, {
                                key: "getAnimationClasses",
                                value: function() {
                                    var e = [];
                                    for (var t in this.settings.cssEfects)
                                        if (this.settings.cssEfects.hasOwnProperty(t)) {
                                            var i = this.settings.cssEfects[t];
                                            e.push("g".concat(i.in)), e.push("g".concat(i.out))
                                        }
                                    return e.join(" ")
                                }
                            }, {
                                key: "build",
                                value: function() {
                                    var e = this;
                                    if (this.built) return !1;
                                    var t = B(this.settings.svg, "next") ? this.settings.svg.next : "",
                                        i = B(this.settings.svg, "prev") ? this.settings.svg.prev : "",
                                        n = B(this.settings.svg, "close") ? this.settings.svg.close : "",
                                        s = this.settings.lightboxHTML;
                                    s = S(s = (s = (s = s.replace(/{nextSVG}/g, t)).replace(/{prevSVG}/g, i)).replace(/{closeSVG}/g, n)), document.body.appendChild(s);
                                    var o = document.getElementById("glightbox-body");
                                    this.modal = o;
                                    var r = o.querySelector(".gclose");
                                    this.prevButton = o.querySelector(".gprev"), this.nextButton = o.querySelector(".gnext"), this.overlay = o.querySelector(".goverlay"), this.loader = o.querySelector(".gloader"), this.slidesContainer = document.getElementById("glightbox-slider"), this.events = {}, g(this.modal, "glightbox-" + this.settings.skin), this.settings.closeButton && r && (this.events.close = p("click", {
                                        onElement: r,
                                        withCallback: function(t, i) {
                                            t.preventDefault(), e.close()
                                        }
                                    })), r && !this.settings.closeButton && r.parentNode.removeChild(r), this.nextButton && (this.events.next = p("click", {
                                        onElement: this.nextButton,
                                        withCallback: function(t, i) {
                                            t.preventDefault(), e.nextSlide()
                                        }
                                    })), this.prevButton && (this.events.prev = p("click", {
                                        onElement: this.prevButton,
                                        withCallback: function(t, i) {
                                            t.preventDefault(), e.prevSlide()
                                        }
                                    })), this.settings.closeOnOutsideClick && (this.events.outClose = p("click", {
                                        onElement: o,
                                        withCallback: function(t, i) {
                                            e.preventOutsideClick || v(document.body, "glightbox-mobile") || y(t.target, ".ginner-container") || y(t.target, ".gbtn") || v(t.target, "gnext") || v(t.target, "gprev") || e.close()
                                        }
                                    })), h(this.elements, (function(t, i) {
                                        e.slidesContainer.appendChild(t.instance.create()), t.slideNode = e.slidesContainer.querySelectorAll(".gslide")[i]
                                    })), ue && g(document.body, "glightbox-touch"), this.events.resize = p("resize", {
                                        onElement: window,
                                        withCallback: function() {
                                            e.resize()
                                        }
                                    }), this.built = !0
                                }
                            }, {
                                key: "resize",
                                value: function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                                    if ((e = e || this.activeSlide) && !v(e, "zoomed")) {
                                        var t = E(),
                                            i = e.querySelector(".gvideo-wrapper"),
                                            n = e.querySelector(".gslide-image"),
                                            s = this.slideDescription,
                                            o = t.width,
                                            r = t.height;
                                        if (o <= 768 ? g(document.body, "glightbox-mobile") : m(document.body, "glightbox-mobile"), i || n) {
                                            var a = !1;
                                            if (s && (v(s, "description-bottom") || v(s, "description-top")) && !v(s, "gabsolute") && (a = !0), n)
                                                if (o <= 768) n.querySelector("img").setAttribute("style", "");
                                                else if (a) {
                                                var l = s.offsetHeight,
                                                    c = n.querySelector("img");
                                                c.setAttribute("style", "max-height: calc(100vh - ".concat(l, "px)")), s.setAttribute("style", "max-width: ".concat(c.offsetWidth, "px;"))
                                            }
                                            if (i) {
                                                var d = (B(this.settings.plyr.config, "ratio") ? this.settings.plyr.config.ratio : "16:9").split(":"),
                                                    u = 900,
                                                    h = u / (parseInt(d[0]) / parseInt(d[1]));
                                                if (h = Math.floor(h), a && (r -= s.offsetHeight), r < h && o > u) {
                                                    var f = i.offsetWidth,
                                                        p = i.offsetHeight,
                                                        y = r / p,
                                                        b = {
                                                            width: f * y,
                                                            height: p * y
                                                        };
                                                    i.parentNode.setAttribute("style", "max-width: ".concat(b.width, "px")), a && s.setAttribute("style", "max-width: ".concat(b.width, "px;"))
                                                } else i.parentNode.style.maxWidth = "".concat(u, "px"), a && s.setAttribute("style", "max-width: ".concat(u, "px;"))
                                            }
                                        }
                                    }
                                }
                            }, {
                                key: "reload",
                                value: function() {
                                    this.init()
                                }
                            }, {
                                key: "updateNavigationClasses",
                                value: function() {
                                    var e = this.loop();
                                    m(this.nextButton, "disabled"), m(this.prevButton, "disabled"), 0 == this.index && this.elements.length - 1 == 0 ? (g(this.prevButton, "disabled"), g(this.nextButton, "disabled")) : 0 !== this.index || e ? this.index !== this.elements.length - 1 || e || g(this.nextButton, "disabled") : g(this.prevButton, "disabled")
                                }
                            }, {
                                key: "loop",
                                value: function() {
                                    var e = B(this.settings, "loopAtEnd") ? this.settings.loopAtEnd : null;
                                    return e = B(this.settings, "loop") ? this.settings.loop : e, e
                                }
                            }, {
                                key: "close",
                                value: function() {
                                    var e = this;
                                    if (!this.lightboxOpen) {
                                        if (this.events) {
                                            for (var t in this.events) this.events.hasOwnProperty(t) && this.events[t].destroy();
                                            this.events = null
                                        }
                                        return !1
                                    }
                                    if (this.closing) return !1;
                                    this.closing = !0, this.slidePlayerPause(this.activeSlide), this.fullElementsList && (this.elements = this.fullElementsList), g(this.modal, "glightbox-closing"), b(this.overlay, "none" == this.settings.openEffect ? "none" : this.settings.cssEfects.fade.out), b(this.activeSlide, this.settings.cssEfects[this.settings.closeEffect].out, (function() {
                                        if (e.activeSlide = null, e.prevActiveSlideIndex = null, e.prevActiveSlide = null, e.built = !1, e.events) {
                                            for (var t in e.events) e.events.hasOwnProperty(t) && e.events[t].destroy();
                                            e.events = null
                                        }
                                        var i = document.body;
                                        m(he, "glightbox-open"), m(i, "glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"), e.modal.parentNode.removeChild(e.modal), e.trigger("close"), q(e.settings.onClose) && e.settings.onClose();
                                        var n = document.querySelector(".gcss-styles");
                                        n && n.parentNode.removeChild(n), e.lightboxOpen = !1, e.closing = null
                                    }))
                                }
                            }, {
                                key: "destroy",
                                value: function() {
                                    this.close(), this.clearAllEvents(), this.baseEvents && this.baseEvents.destroy()
                                }
                            }, {
                                key: "on",
                                value: function(e, t) {
                                    var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                    if (!e || !q(t)) throw new TypeError("Event name and callback must be defined");
                                    this.apiEvents.push({
                                        evt: e,
                                        once: i,
                                        callback: t
                                    })
                                }
                            }, {
                                key: "once",
                                value: function(e, t) {
                                    this.on(e, t, !0)
                                }
                            }, {
                                key: "trigger",
                                value: function(e) {
                                    var t = this,
                                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                        n = [];
                                    h(this.apiEvents, (function(t, s) {
                                        var o = t.evt,
                                            r = t.once,
                                            a = t.callback;
                                        o == e && (a(i), r && n.push(s))
                                    })), n.length && h(n, (function(e) {
                                        return t.apiEvents.splice(e, 1)
                                    }))
                                }
                            }, {
                                key: "clearAllEvents",
                                value: function() {
                                    this.apiEvents.splice(0, this.apiEvents.length)
                                }
                            }, {
                                key: "version",
                                value: function() {
                                    return ce
                                }
                            }]), e
                        }();

                    function ge() {
                        var e = new pe(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {});
                        return e.init(), e
                    }
                    return ge
                }()
            },
            478: () => {
                ! function() {
                    "use strict";
                    var e = 0,
                        t = {};

                    function i(n) {
                        if (!n) throw new Error("No options passed to Waypoint constructor");
                        if (!n.element) throw new Error("No element option passed to Waypoint constructor");
                        if (!n.handler) throw new Error("No handler option passed to Waypoint constructor");
                        this.key = "waypoint-" + e, this.options = i.Adapter.extend({}, i.defaults, n), this.element = this.options.element, this.adapter = new i.Adapter(this.element), this.callback = n.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = i.Group.findOrCreate({
                            name: this.options.group,
                            axis: this.axis
                        }), this.context = i.Context.findOrCreateByElement(this.options.context), i.offsetAliases[this.options.offset] && (this.options.offset = i.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), t[this.key] = this, e += 1
                    }
                    i.prototype.queueTrigger = function(e) {
                        this.group.queueTrigger(this, e)
                    }, i.prototype.trigger = function(e) {
                        this.enabled && this.callback && this.callback.apply(this, e)
                    }, i.prototype.destroy = function() {
                        this.context.remove(this), this.group.remove(this), delete t[this.key]
                    }, i.prototype.disable = function() {
                        return this.enabled = !1, this
                    }, i.prototype.enable = function() {
                        return this.context.refresh(), this.enabled = !0, this
                    }, i.prototype.next = function() {
                        return this.group.next(this)
                    }, i.prototype.previous = function() {
                        return this.group.previous(this)
                    }, i.invokeAll = function(e) {
                        var i = [];
                        for (var n in t) i.push(t[n]);
                        for (var s = 0, o = i.length; s < o; s++) i[s][e]()
                    }, i.destroyAll = function() {
                        i.invokeAll("destroy")
                    }, i.disableAll = function() {
                        i.invokeAll("disable")
                    }, i.enableAll = function() {
                        for (var e in i.Context.refreshAll(), t) t[e].enabled = !0;
                        return this
                    }, i.refreshAll = function() {
                        i.Context.refreshAll()
                    }, i.viewportHeight = function() {
                        return window.innerHeight || document.documentElement.clientHeight
                    }, i.viewportWidth = function() {
                        return document.documentElement.clientWidth
                    }, i.adapters = [], i.defaults = {
                        context: window,
                        continuous: !0,
                        enabled: !0,
                        group: "default",
                        horizontal: !1,
                        offset: 0
                    }, i.offsetAliases = {
                        "bottom-in-view": function() {
                            return this.context.innerHeight() - this.adapter.outerHeight()
                        },
                        "right-in-view": function() {
                            return this.context.innerWidth() - this.adapter.outerWidth()
                        }
                    }, window.Waypoint = i
                }(),
                function() {
                    "use strict";

                    function e(e) {
                        window.setTimeout(e, 1e3 / 60)
                    }
                    var t = 0,
                        i = {},
                        n = window.Waypoint,
                        s = window.onload;

                    function o(e) {
                        this.element = e, this.Adapter = n.Adapter, this.adapter = new this.Adapter(e), this.key = "waypoint-context-" + t, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
                            x: this.adapter.scrollLeft(),
                            y: this.adapter.scrollTop()
                        }, this.waypoints = {
                            vertical: {},
                            horizontal: {}
                        }, e.waypointContextKey = this.key, i[e.waypointContextKey] = this, t += 1, n.windowContext || (n.windowContext = !0, n.windowContext = new o(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
                    }
                    o.prototype.add = function(e) {
                        var t = e.options.horizontal ? "horizontal" : "vertical";
                        this.waypoints[t][e.key] = e, this.refresh()
                    }, o.prototype.checkEmpty = function() {
                        var e = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                            t = this.Adapter.isEmptyObject(this.waypoints.vertical),
                            n = this.element == this.element.window;
                        e && t && !n && (this.adapter.off(".waypoints"), delete i[this.key])
                    }, o.prototype.createThrottledResizeHandler = function() {
                        var e = this;

                        function t() {
                            e.handleResize(), e.didResize = !1
                        }
                        this.adapter.on("resize.waypoints", (function() {
                            e.didResize || (e.didResize = !0, n.requestAnimationFrame(t))
                        }))
                    }, o.prototype.createThrottledScrollHandler = function() {
                        var e = this;

                        function t() {
                            e.handleScroll(), e.didScroll = !1
                        }
                        this.adapter.on("scroll.waypoints", (function() {
                            e.didScroll && !n.isTouch || (e.didScroll = !0, n.requestAnimationFrame(t))
                        }))
                    }, o.prototype.handleResize = function() {
                        n.Context.refreshAll()
                    }, o.prototype.handleScroll = function() {
                        var e = {},
                            t = {
                                horizontal: {
                                    newScroll: this.adapter.scrollLeft(),
                                    oldScroll: this.oldScroll.x,
                                    forward: "right",
                                    backward: "left"
                                },
                                vertical: {
                                    newScroll: this.adapter.scrollTop(),
                                    oldScroll: this.oldScroll.y,
                                    forward: "down",
                                    backward: "up"
                                }
                            };
                        for (var i in t) {
                            var n = t[i],
                                s = n.newScroll > n.oldScroll ? n.forward : n.backward;
                            for (var o in this.waypoints[i]) {
                                var r = this.waypoints[i][o];
                                if (null !== r.triggerPoint) {
                                    var a = n.oldScroll < r.triggerPoint,
                                        l = n.newScroll >= r.triggerPoint;
                                    (a && l || !a && !l) && (r.queueTrigger(s), e[r.group.id] = r.group)
                                }
                            }
                        }
                        for (var c in e) e[c].flushTriggers();
                        this.oldScroll = {
                            x: t.horizontal.newScroll,
                            y: t.vertical.newScroll
                        }
                    }, o.prototype.innerHeight = function() {
                        return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight()
                    }, o.prototype.remove = function(e) {
                        delete this.waypoints[e.axis][e.key], this.checkEmpty()
                    }, o.prototype.innerWidth = function() {
                        return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth()
                    }, o.prototype.destroy = function() {
                        var e = [];
                        for (var t in this.waypoints)
                            for (var i in this.waypoints[t]) e.push(this.waypoints[t][i]);
                        for (var n = 0, s = e.length; n < s; n++) e[n].destroy()
                    }, o.prototype.refresh = function() {
                        var e, t = this.element == this.element.window,
                            i = t ? void 0 : this.adapter.offset(),
                            s = {};
                        for (var o in this.handleScroll(), e = {
                                horizontal: {
                                    contextOffset: t ? 0 : i.left,
                                    contextScroll: t ? 0 : this.oldScroll.x,
                                    contextDimension: this.innerWidth(),
                                    oldScroll: this.oldScroll.x,
                                    forward: "right",
                                    backward: "left",
                                    offsetProp: "left"
                                },
                                vertical: {
                                    contextOffset: t ? 0 : i.top,
                                    contextScroll: t ? 0 : this.oldScroll.y,
                                    contextDimension: this.innerHeight(),
                                    oldScroll: this.oldScroll.y,
                                    forward: "down",
                                    backward: "up",
                                    offsetProp: "top"
                                }
                            }) {
                            var r = e[o];
                            for (var a in this.waypoints[o]) {
                                var l, c, d, u, h = this.waypoints[o][a],
                                    f = h.options.offset,
                                    p = h.triggerPoint,
                                    g = 0,
                                    m = null == p;
                                h.element !== h.element.window && (g = h.adapter.offset()[r.offsetProp]), "function" == typeof f ? f = f.apply(h) : "string" == typeof f && (f = parseFloat(f), h.options.offset.indexOf("%") > -1 && (f = Math.ceil(r.contextDimension * f / 100))), l = r.contextScroll - r.contextOffset, h.triggerPoint = Math.floor(g + l - f), c = p < r.oldScroll, d = h.triggerPoint >= r.oldScroll, u = !c && !d, !m && (c && d) ? (h.queueTrigger(r.backward), s[h.group.id] = h.group) : (!m && u || m && r.oldScroll >= h.triggerPoint) && (h.queueTrigger(r.forward), s[h.group.id] = h.group)
                            }
                        }
                        return n.requestAnimationFrame((function() {
                            for (var e in s) s[e].flushTriggers()
                        })), this
                    }, o.findOrCreateByElement = function(e) {
                        return o.findByElement(e) || new o(e)
                    }, o.refreshAll = function() {
                        for (var e in i) i[e].refresh()
                    }, o.findByElement = function(e) {
                        return i[e.waypointContextKey]
                    }, window.onload = function() {
                        s && s(), o.refreshAll()
                    }, n.requestAnimationFrame = function(t) {
                        (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || e).call(window, t)
                    }, n.Context = o
                }(),
                function() {
                    "use strict";

                    function e(e, t) {
                        return e.triggerPoint - t.triggerPoint
                    }

                    function t(e, t) {
                        return t.triggerPoint - e.triggerPoint
                    }
                    var i = {
                            vertical: {},
                            horizontal: {}
                        },
                        n = window.Waypoint;

                    function s(e) {
                        this.name = e.name, this.axis = e.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), i[this.axis][this.name] = this
                    }
                    s.prototype.add = function(e) {
                        this.waypoints.push(e)
                    }, s.prototype.clearTriggerQueues = function() {
                        this.triggerQueues = {
                            up: [],
                            down: [],
                            left: [],
                            right: []
                        }
                    }, s.prototype.flushTriggers = function() {
                        for (var i in this.triggerQueues) {
                            var n = this.triggerQueues[i],
                                s = "up" === i || "left" === i;
                            n.sort(s ? t : e);
                            for (var o = 0, r = n.length; o < r; o += 1) {
                                var a = n[o];
                                (a.options.continuous || o === n.length - 1) && a.trigger([i])
                            }
                        }
                        this.clearTriggerQueues()
                    }, s.prototype.next = function(t) {
                        this.waypoints.sort(e);
                        var i = n.Adapter.inArray(t, this.waypoints);
                        return i === this.waypoints.length - 1 ? null : this.waypoints[i + 1]
                    }, s.prototype.previous = function(t) {
                        this.waypoints.sort(e);
                        var i = n.Adapter.inArray(t, this.waypoints);
                        return i ? this.waypoints[i - 1] : null
                    }, s.prototype.queueTrigger = function(e, t) {
                        this.triggerQueues[t].push(e)
                    }, s.prototype.remove = function(e) {
                        var t = n.Adapter.inArray(e, this.waypoints);
                        t > -1 && this.waypoints.splice(t, 1)
                    }, s.prototype.first = function() {
                        return this.waypoints[0]
                    }, s.prototype.last = function() {
                        return this.waypoints[this.waypoints.length - 1]
                    }, s.findOrCreate = function(e) {
                        return i[e.axis][e.name] || new s(e)
                    }, n.Group = s
                }(),
                function() {
                    "use strict";
                    var e = window.Waypoint;

                    function t(e) {
                        return e === e.window
                    }

                    function i(e) {
                        return t(e) ? e : e.defaultView
                    }

                    function n(e) {
                        this.element = e, this.handlers = {}
                    }
                    n.prototype.innerHeight = function() {
                        return t(this.element) ? this.element.innerHeight : this.element.clientHeight
                    }, n.prototype.innerWidth = function() {
                        return t(this.element) ? this.element.innerWidth : this.element.clientWidth
                    }, n.prototype.off = function(e, t) {
                        function i(e, t, i) {
                            for (var n = 0, s = t.length - 1; n < s; n++) {
                                var o = t[n];
                                i && i !== o || e.removeEventListener(o)
                            }
                        }
                        var n = e.split("."),
                            s = n[0],
                            o = n[1],
                            r = this.element;
                        if (o && this.handlers[o] && s) i(r, this.handlers[o][s], t), this.handlers[o][s] = [];
                        else if (s)
                            for (var a in this.handlers) i(r, this.handlers[a][s] || [], t), this.handlers[a][s] = [];
                        else if (o && this.handlers[o]) {
                            for (var l in this.handlers[o]) i(r, this.handlers[o][l], t);
                            this.handlers[o] = {}
                        }
                    }, n.prototype.offset = function() {
                        if (!this.element.ownerDocument) return null;
                        var e = this.element.ownerDocument.documentElement,
                            t = i(this.element.ownerDocument),
                            n = {
                                top: 0,
                                left: 0
                            };
                        return this.element.getBoundingClientRect && (n = this.element.getBoundingClientRect()), {
                            top: n.top + t.pageYOffset - e.clientTop,
                            left: n.left + t.pageXOffset - e.clientLeft
                        }
                    }, n.prototype.on = function(e, t) {
                        var i = e.split("."),
                            n = i[0],
                            s = i[1] || "__default",
                            o = this.handlers[s] = this.handlers[s] || {};
                        (o[n] = o[n] || []).push(t), this.element.addEventListener(n, t)
                    }, n.prototype.outerHeight = function(e) {
                        var i, n = this.innerHeight();
                        return e && !t(this.element) && (i = window.getComputedStyle(this.element), n += parseInt(i.marginTop, 10), n += parseInt(i.marginBottom, 10)), n
                    }, n.prototype.outerWidth = function(e) {
                        var i, n = this.innerWidth();
                        return e && !t(this.element) && (i = window.getComputedStyle(this.element), n += parseInt(i.marginLeft, 10), n += parseInt(i.marginRight, 10)), n
                    }, n.prototype.scrollLeft = function() {
                        var e = i(this.element);
                        return e ? e.pageXOffset : this.element.scrollLeft
                    }, n.prototype.scrollTop = function() {
                        var e = i(this.element);
                        return e ? e.pageYOffset : this.element.scrollTop
                    }, n.extend = function() {
                        var e = Array.prototype.slice.call(arguments);

                        function t(e, t) {
                            if ("object" == typeof e && "object" == typeof t)
                                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                            return e
                        }
                        for (var i = 1, n = e.length; i < n; i++) t(e[0], e[i]);
                        return e[0]
                    }, n.inArray = function(e, t, i) {
                        return null == t ? -1 : t.indexOf(e, i)
                    }, n.isEmptyObject = function(e) {
                        for (var t in e) return !1;
                        return !0
                    }, e.adapters.push({
                        name: "noframework",
                        Adapter: n
                    }), e.Adapter = n
                }()
            },
            987: e => {
                "use strict";
                e.exports = {
                    polyfill: function() {
                        var e = window,
                            t = document;
                        if (!("scrollBehavior" in t.documentElement.style) || !0 === e.__forceSmoothScrollPolyfill__) {
                            var i, n = e.HTMLElement || e.Element,
                                s = {
                                    scroll: e.scroll || e.scrollTo,
                                    scrollBy: e.scrollBy,
                                    elementScroll: n.prototype.scroll || a,
                                    scrollIntoView: n.prototype.scrollIntoView
                                },
                                o = e.performance && e.performance.now ? e.performance.now.bind(e.performance) : Date.now,
                                r = (i = e.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(i) ? 1 : 0);
                            e.scroll = e.scrollTo = function() {
                                void 0 !== arguments[0] && (!0 !== l(arguments[0]) ? p.call(e, t.body, void 0 !== arguments[0].left ? ~~arguments[0].left : e.scrollX || e.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : e.scrollY || e.pageYOffset) : s.scroll.call(e, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : e.scrollX || e.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : e.scrollY || e.pageYOffset))
                            }, e.scrollBy = function() {
                                void 0 !== arguments[0] && (l(arguments[0]) ? s.scrollBy.call(e, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : p.call(e, t.body, ~~arguments[0].left + (e.scrollX || e.pageXOffset), ~~arguments[0].top + (e.scrollY || e.pageYOffset)))
                            }, n.prototype.scroll = n.prototype.scrollTo = function() {
                                if (void 0 !== arguments[0])
                                    if (!0 !== l(arguments[0])) {
                                        var e = arguments[0].left,
                                            t = arguments[0].top;
                                        p.call(this, this, void 0 === e ? this.scrollLeft : ~~e, void 0 === t ? this.scrollTop : ~~t)
                                    } else {
                                        if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                                        s.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                                    }
                            }, n.prototype.scrollBy = function() {
                                void 0 !== arguments[0] && (!0 !== l(arguments[0]) ? this.scroll({
                                    left: ~~arguments[0].left + this.scrollLeft,
                                    top: ~~arguments[0].top + this.scrollTop,
                                    behavior: arguments[0].behavior
                                }) : s.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                            }, n.prototype.scrollIntoView = function() {
                                if (!0 !== l(arguments[0])) {
                                    var i = h(this),
                                        n = i.getBoundingClientRect(),
                                        o = this.getBoundingClientRect();
                                    i !== t.body ? (p.call(this, i, i.scrollLeft + o.left - n.left, i.scrollTop + o.top - n.top), "fixed" !== e.getComputedStyle(i).position && e.scrollBy({
                                        left: n.left,
                                        top: n.top,
                                        behavior: "smooth"
                                    })) : e.scrollBy({
                                        left: o.left,
                                        top: o.top,
                                        behavior: "smooth"
                                    })
                                } else s.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                            }
                        }

                        function a(e, t) {
                            this.scrollLeft = e, this.scrollTop = t
                        }

                        function l(e) {
                            if (null === e || "object" != typeof e || void 0 === e.behavior || "auto" === e.behavior || "instant" === e.behavior) return !0;
                            if ("object" == typeof e && "smooth" === e.behavior) return !1;
                            throw new TypeError("behavior member of ScrollOptions " + e.behavior + " is not a valid value for enumeration ScrollBehavior.")
                        }

                        function c(e, t) {
                            return "Y" === t ? e.clientHeight + r < e.scrollHeight : "X" === t ? e.clientWidth + r < e.scrollWidth : void 0
                        }

                        function d(t, i) {
                            var n = e.getComputedStyle(t, null)["overflow" + i];
                            return "auto" === n || "scroll" === n
                        }

                        function u(e) {
                            var t = c(e, "Y") && d(e, "Y"),
                                i = c(e, "X") && d(e, "X");
                            return t || i
                        }

                        function h(e) {
                            for (; e !== t.body && !1 === u(e);) e = e.parentNode || e.host;
                            return e
                        }

                        function f(t) {
                            var i, n, s, r, a = (o() - t.startTime) / 468;
                            r = a = a > 1 ? 1 : a, i = .5 * (1 - Math.cos(Math.PI * r)), n = t.startX + (t.x - t.startX) * i, s = t.startY + (t.y - t.startY) * i, t.method.call(t.scrollable, n, s), n === t.x && s === t.y || e.requestAnimationFrame(f.bind(e, t))
                        }

                        function p(i, n, r) {
                            var l, c, d, u, h = o();
                            i === t.body ? (l = e, c = e.scrollX || e.pageXOffset, d = e.scrollY || e.pageYOffset, u = s.scroll) : (l = i, c = i.scrollLeft, d = i.scrollTop, u = a), f({
                                scrollable: l,
                                method: u,
                                startTime: h,
                                startX: c,
                                startY: d,
                                x: n,
                                y: r
                            })
                        }
                    }
                }
            }
        },
        t = {};

    function i(n) {
        var s = t[n];
        if (void 0 !== s) return s.exports;
        var o = t[n] = {
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, i), o.exports
    }
    i.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return i.d(t, {
            a: t
        }), t
    }, i.d = (e, t) => {
        for (var n in t) i.o(t, n) && !i.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        "use strict";
        const e = class {
            constructor() {
                window.$ = function(e, t) {
                    return (t = arguments.length > 1 ? t : document) ? t.querySelectorAll(e) : null
                }, window.$$ = function(e, t) {
                    return (t = arguments.length > 1 ? t : document) ? t.querySelector(e) : null
                }, window.domSlideUp = function(e, t = 500) {
                    e.style.transitionProperty = "height, margin, padding", e.style.transitionDuration = t + "ms", e.style.boxSizing = "border-box", e.style.height = e.offsetHeight + "px", e.offsetHeight, e.style.overflow = "hidden", e.style.height = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0, e.style.marginTop = 0, e.style.marginBottom = 0, window.setTimeout((() => {
                        e.style.display = "none", e.style.removeProperty("height"), e.style.removeProperty("padding-top"), e.style.removeProperty("padding-bottom"), e.style.removeProperty("margin-top"), e.style.removeProperty("margin-bottom"), e.style.removeProperty("overflow"), e.style.removeProperty("transition-duration"), e.style.removeProperty("transition-property")
                    }), t)
                }, window.domSlideDown = function(e, t = 500) {
                    e.style.removeProperty("display");
                    let i = window.getComputedStyle(e).display;
                    "none" === i && (i = "block"), e.style.display = i;
                    let n = e.offsetHeight;
                    e.style.overflow = "hidden", e.style.height = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0, e.style.marginTop = 0, e.style.marginBottom = 0, e.offsetHeight, e.style.boxSizing = "border-box", e.style.transitionProperty = "height, margin, padding", e.style.transitionDuration = t + "ms", e.style.height = n + "px", e.style.removeProperty("padding-top"), e.style.removeProperty("padding-bottom"), e.style.removeProperty("margin-top"), e.style.removeProperty("margin-bottom"), window.setTimeout((() => {
                        e.style.removeProperty("height"), e.style.removeProperty("overflow"), e.style.removeProperty("transition-duration"), e.style.removeProperty("transition-property")
                    }), t)
                }
            }
        };
        const t = class {
            constructor() {
                this.checkTouch(), this.fullHeightIOSSafari()
            }
            checkTouch() {
                const e = () => {
                    this.isTouch = !("undefined" == typeof window || !("ontouchstart" in window || window.DocumentTouch && "undefined" != typeof document && document instanceof window.DocumentTouch)) || !("undefined" == typeof navigator || !navigator.maxTouchPoints && !navigator.msMaxTouchPoints), this.isTouch ? document.documentElement.classList.add("is-touch") : document.documentElement.classList.remove("is-touch")
                };
                window.addEventListener("resize", e), e()
            }
            fullHeightIOSSafari() {
                const e = () => {
                    const e = document.documentElement;
                    let t = window.innerHeight - $$("#header").offsetHeight;
                    e.style.setProperty("--full-content-height", `${t}px`), e.style.setProperty("--full-height", `${window.innerHeight}px`)
                };
                window.addEventListener("resize", e), e()
            }
        };
        const n = class {
            constructor() {
                let e = this;
                e.btnOpen = document.querySelector("button.sopen"), e.inputSword = document.querySelector(".h-s-f .sword"), e.btnOpen && (e.htmlElem = document.getElementsByTagName("html")[0], e.btnOpen.addEventListener("click", (function() {
                    e.htmlElem.classList.remove("menu-open"), e.htmlElem.classList.add("search-active"), e.inputSword.focus()
                })))
            }
        };
        const s = class {
            constructor() {
                var e = document.documentElement.lang;
                switch (this.id = 0, this.cookiePopMessage = "Wir verwenden bei Ihrem Besuch auf unserer Webseite Cookies. Indem Sie unsere Webseite benutzen, stimmen Sie unseren Datenschutzrichtlinien zu.", this.cookiePopDismissButton = "Einverstanden", this.cookiePoplinkButton = "Zur Datenschutzerklärung", this.cookiePoplinkHref = "/datenschutz/", this.readmoreItems = "Weitere Mitteilungen anzeigen", this.videomsgvimeo = "Dieser Link öffnet ein Vimeo-Video. Bitte beachten Sie die dort gültigen <a href='https://vimeo.com/privacy' class='link-external-new-window'  target='_blank'>Datenschutzbestimmungen</a>.", this.videomsg = "Dieser Link öffnet ein YouTube-Video. Bitte beachten Sie die dort gültigen <a href='https://policies.google.com/privacy?hl=de' class='link-external-new-window'  target='_blank'>Datenschutzbestimmungen</a>.", this.videobutton = "Bestätigen", this.interviewopen = "Interview lesen", this.interviewclose = "Interview schließen", this.sharetitle = "Teilen", this.prev = "Vorherige Seite", this.next = "Nächste Seite", this.close = "schließen", this.home = "Startseite", this.back = "Zurück", this.zoomTableTxt = "Tabelle vergrößern", this.zoomTableCloseTxt = "Schließen", this.readMore = "Mehr erfahren", this.linkCookie = "Cookies", this.storieslabel = "Projekte öffnen", this.storiesTitleBefore = "PROJEKTE „", this.storiesTitleAfter = "“", this.backtohome = "Zur Startseite", this.read = "Lesen", this.mouse = "Maus bewegen", this.gallery = "Galeriemodus", e) {
                    case "en":
                        this.id = 1, this.cookiePopMessage = "This website uses cookies to ensure you get the best experience on our website.", this.cookiePopDismissButton = "Got it!", this.cookiePoplinkButton = "Learn more", this.cookiePoplinkHref = "/privacy-policy/", this.readmoreItems = "show more releases", this.videomsgvimeo = "This link opens a Vimeo video. Please note Vimeo’s <a href='https://vimeo.com/privacy' class='link-external-new-window' target='_blank'>privacy policy</a>.", this.videomsg = "This link opens a YouTube video. Please note YouTube’s <a href='https://policies.google.com/privacy?hl=en' class='link-external-new-window' target='_blank'>privacy policy</a>.", this.videobutton = "Confirm", this.interviewopen = "Read the interview", this.interviewclose = "Close the interview", this.sharetitle = "Share", this.prev = "Previous page", this.next = "Next page", this.close = "Close", this.home = "Home", this.back = "Back", this.zoomTableTxt = "Enlarge table", this.zoomTableCloseTxt = "Close", this.readMore = "Read more", this.linkCookie = "Cookies", this.storieslabel = "All projects", this.storiesTitleBefore = 'PROJECTS "', this.storiesTitleAfter = '"', this.backtohome = "Back to homepage", this.read = "Read more", this.mouse = "Move around", this.gallery = "Gallery"
                }
            }
        };
        var o = i(905),
            r = i.n(o);
        const a = class {
            constructor() {
                let e = this;
                e.lan = new s, document.querySelectorAll(".tablewrap:not(.tablewrap-full), .iframewrap").forEach((e => {
                    e.innerHTML += '<div class="touchguide"><div class="swipe-indicator"><svg fill="none" height="46" viewBox="0 0 32 46" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m7 20c0-1.657-1.343-3-3-3s-3 1.343-3 3v10c0 8.284 6.716 15 15 15s15-6.716 15-15v-8c0-1.657-1.343-3-3-3s-3 1.343-3 3v-2c0-1.657-1.343-3-3-3s-3 1.343-3 3v-2c0-1.657-1.343-3-3-3s-3 1.343-3 3v-14c0-1.657-1.343-3-3-3s-3 1.343-3 3v23z" style="fill:#fff;stroke:#DCAE4C;stroke-width:2;stroke-miterlimit:10;stroke-linecap:round;stroke-linejoin:round"/></svg></div></div>', e.outerHeight < 400 && e.classList.add("touchguidsmall")
                })), document.querySelectorAll(".tablewrap:not(.tablewrap-full), .iframewrap").forEach((e => {
                    function t() {
                        if (e.querySelectorAll(".touchguide").length) {
                            let t = e.querySelector(".touchguide").style;
                            t.opacity = 1,
                                function e() {
                                    (t.opacity -= .1) < 0 ? t.display = "none" : setTimeout(e, 40)
                                }()
                        }
                    }
                    e.addEventListener("mousedown", t), e.addEventListener("touchstart", t)
                })), $(".expandtdwrap").forEach((t => {
                    let i = t,
                        n = document.createElement("a");
                    n.setAttribute("class", "zoomtable"), n.setAttribute("href", "javascript:;"), n.innerHTML = e.lan.zoomTableTxt, i.prepend(n);
                    let s = document.createElement("div");
                    s.innerHTML = "<h5>" + $$("h1").innerHTML.replace("<br>", "") + '</h5><div class="btn-close icon-close"></div><div id="' + i.getAttribute("id") + '" class="ptablewrap" />', s.querySelector(".ptablewrap").append(i.querySelector("table").cloneNode(!0));
                    let o = r()({
                        elements: [{
                            content: s.innerHTML
                        }],
                        closeButton: !1,
                        draggable: !1,
                        width: "1150px",
                        height: "650px"
                    });
                    o.on("open", (() => {
                        $$(".glightbox-container .btn-close ").addEventListener("click", (function() {
                            o.close()
                        }))
                    })), i.querySelector("a.zoomtable").addEventListener("click", (function() {
                        o.open()
                    }))
                }))
            }
        };
        const l = class {
            constructor() {
                let e = this;
                e.btnSwither = document.querySelector("#btn-hamburger"), e.htmlElem = document.getElementsByTagName("html")[0], e.btnSwither && (document.querySelector(".h-p-s").prepend(document.querySelector(".h-c-2 > .h-l-s").cloneNode(!0)), $$(".h-p-b nav").appendChild($$(".f-s-l").cloneNode(!0)), e.btnSwither.addEventListener("click", (function() {
                    if (e.htmlElem.classList.contains("search-active")) e.htmlElem.classList.remove("search-active");
                    else if (e.htmlElem.classList.contains("menu-open") ? e.htmlElem.classList.remove("menu-open") : ($("li.open, .menu-bg-container >div").forEach((function(e) {
                            e.classList.remove("open"), e.classList.remove("active")
                        })), e.htmlElem.classList.add("menu-open")), $(".menu-bg-container").length < 1) {
                        let e = document.createElement("div"),
                            t = "";
                        e.setAttribute("class", "menu-bg-container"), $('li[data-img-lg^="/f"]').forEach((function(e) {
                            let i = e.getAttribute("data-img-lg"),
                                n = e.getAttribute("data-uid");
                            t += '<div class="menu-bg-' + n + '" ><img src="' + i + '" /></div>'
                        })), e.innerHTML = t, $$(".h-p-p").appendChild(e)
                    }
                })), $(".h-p-p li > a").forEach((function(e) {
                    e.addEventListener("mouseenter", (function() {
                        let e = this.parentNode,
                            t = $(".menu-bg-container > div"),
                            i = $(`.menu-bg-${e.getAttribute("data-uid")}`);
                        t.forEach((function(e) {
                            e.classList.remove("active")
                        })), i.length > 0 && i[0].classList.add("active"), e.classList.contains("open") || e.parentNode.parentNode.classList.contains("open") || $(".nav li.open ul").forEach((function(e) {
                            console.log("1"), e.classList.add("t-hidden"), e.parentNode.classList.remove("open")
                        }))
                    })), e.addEventListener("mouseleave", (function() {
                        $(".menu-bg-container > div").forEach((function(e) {
                            e.classList.remove("active")
                        })), $(".nav li ul.t-hidden").forEach((function(e) {
                            e.parentNode.classList.add("open"), e.classList.remove("t-hidden"), console.log("2")
                        }))
                    }))
                })), $('.h-p-p  li.hassub:not([data-uid="19"]) > a').forEach((function(e) {
                    let t = e.parentNode,
                        i = $(".nav li.open"),
                        n = t.querySelector("ul"),
                        s = document.createElement("li");
                    s.setAttribute("class", "m-nav-subtitle"), s.innerHTML = '<div class="m-nav-back"><span></span><h5>' + e.innerHTML + "</h5>", n.prepend(s), e.addEventListener("click", (function(e) {
                        e.preventDefault(), t.classList.contains("open") || (i = $(".nav li.open"), t.classList.add("open"), i.forEach((function(e) {
                            e.classList.remove("open")
                        })), $(".nav li ul.t-hidden").forEach((e => {
                            e.classList.remove("t-hidden"), console.log("3")
                        })))
                    }))
                })), $("div.m-nav-back").forEach((function(e) {
                    e.addEventListener("click", (function(e) {
                        e.preventDefault(), $(".nav li.open").forEach((function(e) {
                            e.classList.remove("open")
                        }))
                    }))
                })))
            }
        };
        const c = class {
            constructor() {
                let e = this;
                e.SearchInputs = $("input.search, input.tx-indexedsearch-searchbox-sword, input.indexed-search-atocomplete-sword, input.indexed-search-autocomplete-sword"), e.SearchInputs.length < 1 || (e.SearchInput = e.SearchInputs[0], e.SearchInput.parentNode.append($$(".search-autocomplete-results")), e.SearchInput.addEventListener("keypress", (function(t) {
                    e.keyInputEvent(t)
                })), e.SearchInput.addEventListener("keyup", (function(t) {
                    e.keyInputEvent(t)
                })), e.SearchInput.setAttribute("autocomplete", "off"), document.addEventListener("click", (function(e) {
                    let t = ".search-autocomplete-results",
                        i = $$(t),
                        n = e.target;
                    if (!($(".search-autocomplete-results > *").length <= 0)) {
                        for (;
                            "html" != n.tagName.toLowerCase() && !n.classList.contains(t);) n = n.parentNode;
                        "html" == n.tagName.toLowerCase() && (i.innerHtml = "", i.style.display = "none", i.classList.remove("results"), i.classList.add("no-results"))
                    }
                })))
            }
            keyInputEvent(e) {
                let t, i = e.target,
                    n = i;
                for (;
                    "html" !== n.tagName.toLowerCase() && (t = n.querySelector(".search-autocomplete-results"), !t);) n = n.parentNode;
                if ("html" === n.tagName.toLowerCase()) return void console.log("we couldn't find a result div (.search-autocomplete-results)");
                let s = void 0 === t.getAttribute("data-mode") ? "word" : t.getAttribute("data-mode"),
                    o = "true" == t.getAttribute("data-searchonclick");
                if (38 === e.which || 40 === e.which || 10 === e.keyCode || 13 === e.keyCode) {
                    if (38 === e.which && "keyup" === e.type) {
                        let e = t.querySelector("li.highlighted");
                        if (!e || !e.previousElementSibling) {
                            t.querySelectorAll("li.highlighted").forEach((function(e) {
                                e.classList.remove("highlighted")
                            }));
                            let e = t.querySelectorAll("li");
                            return void e[e.length - 1].classList.add("highlighted")
                        }
                        t.querySelectorAll("li.highlighted").forEach((function(e) {
                            e.classList.remove("highlighted")
                        })), e.previousElementSibling.classList.add("highlighted")
                    }
                    if (40 === e.which && "keyup" === e.type) {
                        let e = t.querySelector("li.highlighted");
                        if (!e || !e.nextElementSibling) {
                            return t.querySelectorAll("li.highlighted").forEach((function(e) {
                                e.classList.remove("highlighted")
                            })), void t.querySelectorAll("li")[0].classList.add("highlighted")
                        }
                        t.querySelectorAll("li.highlighted").forEach((function(e) {
                            e.classList.remove("highlighted")
                        })), e.nextElementSibling.classList.add("highlighted")
                    }
                    return void(10 !== e.keyCode && 13 !== e.keyCode || "keypress" !== e.type || null !== t.offsetParent && t.querySelectorAll("li.highlighted").length > 0 && ("word" === s ? (t.querySelector("li.highlighted").click(), o && i.closest("form").submit()) : window.location = t.querySelector("li.highlighted a.navigate-on-enter").getAttribute("href"), e.preventDefault()))
                }
                if ("keyup" !== e.type) return;
                t.innerHtml = "", t.style.display = "none", t.classList.remove("results"), t.classList.add("no-results");
                let r = i.value,
                    a = void 0 === t.getAttribute("data-minlength") ? 3 : parseInt(t.getAttribute("data-minlength")),
                    l = void 0 === t.getAttribute("data-maxresults") ? 10 : parseInt(t.getAttribute("data-maxresults"));
                if (!(r.length < a)) {
                    t.classList.add("autocomplete_searching");
                    var c = new FormData;
                    c.append("s", r), c.append("m", s), c.append("mr", l);
                    var d = new XMLHttpRequest;
                    d.onreadystatechange = function() {
                        if (4 == d.readyState && 200 == d.status) {
                            t.style.display = "block", t.innerHTML = d.responseText, t.classList.remove("autocomplete_searching");
                            let e = t.querySelectorAll("li");
                            e.forEach((function(e) {
                                e.addEventListener("click", (function(n) {
                                    n.stopPropagation(), i.value = e.innerText.trim(), t.innerHTML = "", t.style.display = "none", i.closest("form").submit()
                                }))
                            })), 0 == e.length ? (t.innerHTML = "", t.style.display = "none", t.classList.remove("results"), t.classList.add("no-results")) : (t.classList.remove("no-results"), t.classList.add("results"))
                        }
                    }, d.open("post", t.getAttribute("data-searchurl")), d.send(c)
                }
            }
        };
        const d = class {
            constructor() {
                let e = document.querySelector("#btn-top"),
                    t = 0,
                    i = this;
                document.addEventListener("scroll", (function(i) {
                    let n = window.scrollY;
                    Math.abs(t - n) <= 5 || (n > t || n < 200 ? e.classList.remove("show") : e.classList.add("show"), t = n)
                })), e.addEventListener("click", (function() {
                    return i.scrollToTop(300), !1
                }))
            }
            scrollToTop(e) {
                if (0 === document.scrollingElement.scrollTop) return;
                const t = document.scrollingElement.scrollTop / 2;
                let i = 0,
                    n = null;
                window.requestAnimationFrame((function s(o) {
                    if (null !== n) {
                        if (i += Math.PI * (o - n) / e, i >= Math.PI) return document.scrollingElement.scrollTop = 0;
                        document.scrollingElement.scrollTop = t + t * Math.cos(i)
                    }
                    n = o, window.requestAnimationFrame(s)
                }))
            }
        };
        const u = class {
            constructor() {
                let e = this;
                if (e.mMouseDOM = $$("#mmousecursor"), e.mMouseDOM) return;
                let t = document.createElement("div");
                t.setAttribute("id", "mmousecursor"), t.innerHTML = '<div></div><i class="icon-aw2"></i>', document.body.appendChild(t), e.mMouseDOM = $$("#mmousecursor"), e.isDisabled = !1, e.hideClass = "mmouse-hide", e.mMouseDOM.classList.add(e.hideClass);
                let i = 0,
                    n = 0;
                document.addEventListener("mousemove", (function(t) {
                    e.isDisabled = !1, e.mMouseDOM.classList.remove(e.hideClass), e.disabler && window.clearTimeout(e.disabler), e.disabler = window.setTimeout((() => {
                        e.isDisabled = !0, e.mMouseDOM.classList.add(e.hideClass)
                    }), 3e3), setTimeout((() => {
                        i = t.clientX, n = t.clientY
                    }), 50)
                }));
                var s = () => {
                    e.mMouseDOM.style.transform = `translate(-50%,-50%) matrix3d(\n                    1,0,0,0,\n                    0,1,0,0,\n                    0,0,1,0,\n                    ${i},${n},0,1\n                  )`, requestAnimationFrame(s)
                };
                requestAnimationFrame(s), e.refreshHoverClasses()
            }
            refreshHoverClasses() {
                let e = this;
                e.classPre = "mmouse-", ["link", "prev", "next", "linkn"].forEach((t => {
                    $("." + e.classPre + t).forEach((i => {
                        i.addEventListener("mouseenter", (i => {
                            e.mMouseDOM.classList.add(e.classPre + t + "-c")
                        })), i.addEventListener("mouseleave", (i => {
                            e.mMouseDOM.classList.remove(e.classPre + t + "-c")
                        }))
                    }))
                }))
            }
        };
        var h = i(585),
            f = i.n(h),
            p = i(970),
            g = i.n(p),
            m = i(302),
            v = i.n(m);
        const y = class {
            constructor() {
                let e = this;
                if (e.cookiebannerName = "cb_status", e.htmlClass = "cookiebanner-show", e.settings = e.getSettings(), e.cookieButton = document.querySelector(".btn-cookie"), e.lan = new s, e.bodyNode = document.querySelector("body"), !e.cookieButton) {
                    document.querySelectorAll("footer .f-s-l ul, .h-p-b .f-s-l ul").forEach((t => {
                        let i = document.createElement("li");
                        i.innerHTML = '<a href="javascript:;" class="btn-cookie">' + e.lan.linkCookie + "</a>", t.appendChild(i)
                    })), document.querySelectorAll(".btn-cookie").forEach((t => {
                        t.addEventListener("click", (function(t) {
                            t.preventDefault(), e.showBanner()
                        }))
                    }))
                }
                void 0 !== v().get(e.cookiebannerName) ? e.callBackFunctions() : e.showBanner()
            }
            showBanner() {
                let e = this,
                    t = document.querySelector("html"),
                    i = e.settings;
                if (t.classList.remove("menu-open"), t.classList.remove("search-active"), t.classList.add(e.htmlClass), document.querySelectorAll("#cookiebanner").length > 0) return;
                e.getCookieConfiguration();
                let n = document.createElement("div");
                n.innerHTML = '<div id="cookiebanner"><div class="cookiebanner-overlay"></div><div class="cookiebanner-main-wrap"><div class="cookiebanner-content"><div class="cookiebanner-description"><h3>' + i.general.title + "</h3><p>" + i.general.description + "</p>" + i.general.linkdisclaimer + '</div><div class="cookiebanner-options-buttons"><div class="cookiebanner-options"><div class="cookiebanner-option cookie-necessary" data-cookie-type="necessary" role="checkbox"><span></span> ' + i.necessary.label + '</div><div class="cookiebanner-option ' + (e.statistical ? "" : "cookie-disabled ") + " " + (i.statistical.cookies.length < 1 ? " cookie-none" : "") + '" data-cookie-type="statistical" tabindex="0" role="checkbox"><span></span> ' + i.statistical.label + '</div></div><div class="cookiebanner-buttons"><button type="button" class="cookiebanner-readmore">' + i.general.buttonShowDetail + '</button><button type="button" class="cookiebanner-ok">' + i.general.buttonOKtext + '</button></div></div></div><div class="cookiebanner-description-more"><div class="cookiebanner-tabs"><div class="active" tabindex="0">' + i.necessary.label + " (" + i.necessary.cookies.length + ')</div><div tabindex="0">' + i.statistical.label + " (" + i.statistical.cookies.length + ')</div><div tabindex="0">' + i.about.label + '</div></div><div class="cookiebanner-tab-details"><div class="active"><p>' + i.necessary.description + "</p>" + e.getCookieListHTML(i.necessary.cookies) + "</div><div><p>" + i.statistical.description + "</p>" + e.getCookieListHTML(i.statistical.cookies) + "</div><div>" + i.about.description + "</div></div></div></div></div>", e.bodyNode.insertBefore(n, e.bodyNode.firstChild), e.attachEvents(), setTimeout((function() {
                    document.querySelector("#cookiebanner").classList.add("active")
                }), 50)
            }
            attachEvents() {
                let e = this;
                document.querySelectorAll("#cookiebanner .cookiebanner-option:not(.cookie-necessary):not(.cookie-none)").forEach((e => {
                    e.addEventListener("click", (function(t) {
                        e.classList.toggle("cookie-disabled")
                    }))
                })), document.querySelector("#cookiebanner .cookiebanner-readmore").addEventListener("click", (function() {
                    document.querySelector("#cookiebanner").classList.toggle("open-readmore")
                })), document.querySelectorAll("#cookiebanner .cookiebanner-tabs > div").forEach((e => {
                    e.addEventListener("click", (function(e) {
                        let t = this,
                            i = [...t.parentNode.children].indexOf(t),
                            n = document.querySelectorAll("#cookiebanner .cookiebanner-tab-details > div")[i];
                        [...t.parentNode.children].forEach((e => {
                            e.classList.remove("active")
                        })), t.classList.add("active"), [...n.parentNode.children].forEach((e => {
                            e.classList.remove("active")
                        })), n.classList.add("active")
                    }))
                })), document.querySelector("#cookiebanner .cookiebanner-ok").addEventListener("click", (function(t) {
                    document.querySelector("html").classList.remove(e.htmlClass);
                    let i = "";
                    document.querySelectorAll("#cookiebanner .cookiebanner-option").forEach((e => {
                        e.classList.contains("cookie-disabled") ? i += "0" : i += "1"
                    })), v().set(e.cookiebannerName, i, {
                        expires: 365
                    }), document.querySelectorAll(".lan .list-inline li:not(.active) a:not(.stooltip)").length, e.callBackFunctions(), setTimeout((function() {
                        "undefined" != typeof ga && ga("send", "event", "CookieBanner", "click", "enabled", {
                            hitCallback: function() {}
                        })
                    }), 1e3)
                }))
            }
            getCookieConfiguration() {
                let e = this;
                e.cookieSet = v().get(e.cookiebannerName), e.statistical = e.cookieSet ? !!parseInt(e.cookieSet.charAt(1)) : 0
            }
            callBackFunctions() {
                let e = this;
                e.getCookieConfiguration(), e.statistical && e.getGoogleAnalyticsScript("G-NDMVCBSSYW"), e.optinProcess()
            }
            getGoogleAnalyticsScript(e) {
                function t() {
                    window.dataLayer.push(arguments)
                }
                window.dataLayer = window.dataLayer || [], t("js", new Date), t("config", e, {
                    anonymize_ip: !0
                });
                var i = document.createElement("script");
                i.src = "https://www.googletagmanager.com/gtag/js?aip=1&id=" + e, document.getElementsByTagName("head")[0].appendChild(i)
            }
            getPiwikCode() {}
            getCookieListHTML(e) {
                let t = this;
                if (e.length < 1) return "";
                for (var i = "", n = 0; n < e.length; n++) i += "<tr><td>" + e[n].name + "</td><td>" + e[n].function+"</td><td>" + e[n].period + "</td></tr>";
                return "<table><tr><td>" + t.settings.general.cookieListLabels.name + "</td><td>" + t.settings.general.cookieListLabels.function+"</td><td>" + t.settings.general.cookieListLabels.period + "</td></tr>" + i + "</table>"
            }
            getSettings() {
                let e = this;
                return "en" == document.documentElement.lang ? {
                    general: {
                        title: "Cookies",
                        description: "Aurubis strives to offer you the best possible service. For this purpose, we save information about your visit in cookies. You can learn more details about the use of cookies on this website under “Show details.” You can add or remove checkmarks on the following selection bar, choosing which of the different cookies you would like to accept. However, you cannot deselect necessary cookies. By clicking “OK,” you consent to the use of the cookies.",
                        buttonOKtext: "Ok",
                        linkdisclaimer: "",
                        buttonShowDetail: "Show details",
                        lblEnabled: "You are not opted out. Click here to opt out.",
                        lblDisabled: "You are currently opted out. Click here to opt in.",
                        cookieListLabels: {
                            name: "Name of the cookie",
                            function: "Function",
                            period: "Duration"
                        }
                    },
                    necessary: {
                        label: "Necessary",
                        description: "Necessary cookies help make a website usable by enabling basic functions such as page navigation and access to secure areas of the website. The website cannot function correctly without these cookies. ",
                        cookies: [{
                            name: e.cookiebannerName,
                            function: "Stores cookie disclaimer status (Allow or refuse usage of cookies)",
                            period: "12 months"
                        }]
                    },
                    statistical: {
                        label: "Statistical",
                        description: "Statistical cookies help to show how visitors interact with websites by anonymously collecting and reporting information.",
                        cookies: [{
                            name: "_ga",
                            function: "Google Analytics: Used to differentiate between users and sessions.",
                            period: "24 months"
                        }, {
                            name: "_gat",
                            function: "Google Analytics: Used to limit the request rate.",
                            period: "1 minute"
                        }, {
                            name: "_gid",
                            function: "Google Analytics: Used to differentiate between users and sessions.",
                            period: "24 hours"
                        }]
                    },
                    about: {
                        label: "About cookies",
                        description: "<p>Cookies are small text files that websites use to make users’ experience more efficient, to provide certain functions, or to enable certain analyses. </p>                                    <p>This site uses different types of cookies. Some cookies are placed by third parties that appear on our sites. We have no technical influence on cookies placed by third parties.</p>"
                    }
                } : {
                    general: {
                        title: "Cookies",
                        description: "Aurubis möchte Ihnen den bestmöglichen Service bieten. Dazu speichern wir Informationen über Ihren Besuch in sogenannten Cookies. Detaillierte Informationen über den Einsatz von Cookies auf dieser Webseite erhalten Sie unter „Details zeigen“. Auf der folgenden Auswahlleiste können Sie Häkchen setzen oder entfernen. So können Sie auswählen, welche der verschiedenen Cookies Sie akzeptieren möchten. Notwendige Cookies können Sie allerdings nicht abwählen. Durch Klick auf OK erklären Sie sich mit der Verwendung der Cookies einverstanden.",
                        buttonOKtext: "Ok",
                        linkdisclaimer: "",
                        buttonShowDetail: "Details zeigen",
                        lblEnabled: "Ihr Besuch dieser Website wird aktuell von der etracker Webanalyse erfasst. Klicken Sie hier, damit Ihr Besuch nicht mehr erfasst wird.",
                        lblDisabled: "Ihr Besuch dieser Website wird aktuell von der etracker Webanalyse nicht erfasst. Klicken Sie hier, um Ihren Besuch wieder erfassen zu lassen.",
                        cookieListLabels: {
                            name: "Name des Cookies",
                            function: "Funktion",
                            period: "Speicherdauer"
                        }
                    },
                    necessary: {
                        label: "Notwendige",
                        description: "Notwendige Cookies helfen dabei, eine Webseite nutzbar zu machen, indem sie Grundfunktionen wie Seitennavigation und Zugriff auf sichere Bereiche der Webseite ermöglichen. Die Webseite kann ohne diese Cookies nicht richtig funktionieren. ",
                        cookies: [{
                            name: e.cookiebannerName,
                            function: "Speichert den Status zur Zustimmung oder Ablehnung zum Einsatz von Cookies",
                            period: "12 Monate"
                        }]
                    },
                    statistical: {
                        label: "Statistik",
                        description: "Statistik-Cookies helfen zu verstehen, wie Besucher mit Webseiten interagieren, indem Informationen anonym gesammelt und gemeldet werden.",
                        cookies: [{
                            name: "_ga",
                            function: "Google Analytics: Wird genutzt, um User & Sessions zu unterscheiden.",
                            period: "24 Monate"
                        }, {
                            name: "_gat",
                            function: "Google Analytics: Wird zur Begrenzung der Request-Rate verwendet.",
                            period: "1 Minute"
                        }, {
                            name: "_gid",
                            function: "Google Analytics: Wird genutzt, um User & Sessions zu unterscheiden.",
                            period: "24 Stunden"
                        }]
                    },
                    about: {
                        label: "Über Cookies",
                        description: "<p>Cookies sind kleine Textdateien und beinhalten keine personenbezogenen Daten. <br/>\n                    Sie verfallen nach dem in der Beschreibung angegebenen Zeitraum bzw. nach Ende einer Nutzerbefragung, die in der Regel alle zwei Jahre durchgeführt wird.</p>"
                    }
                }
            }
            optinProcess() {
                let e = document.querySelector("#btncookiebanneropt"),
                    t = this;
                if (!e) return;
                let i = e.parentNode().querySelector("b");
                t.statistical ? (e.prop("checked", !0), i.innerHTML = t.settings.general.lblEnabled) : (e.prop("checked", !1), i.innerHTML = t.settings.general.lblDisabled), e.addEventListener("change", (function() {
                    this.checked ? abel.innerHTML = t.settings.general.lblEnabled : abel.innerHTML = t.settings.general.lblDisabled, t.cookieSet = t.cookieSet.substring(0, 1) + (this.checked ? "1" : "0") + t.cookieSet.substring(2, t.cookieSet.length), v().set(t.cookiebannerName, t.cookieSet, {
                        expires: 365
                    })
                }))
            }
        };
        const b = class {
            constructor() {
                $("#cookiebanner .cookiebanner-ok").forEach((e => {
                    e.addEventListener("click", (function(e) {
                        "undefined" != typeof ga && ga("send", "event", "CookieBanner", "click", $("#cookiebanner .cookiebanner-option")[1].classList.contain("cookie-disabled") ? "disabled" : "enabled", {
                            hitCallback: function() {}
                        })
                    }))
                })), $("a[href$='.pdf'], a[href$='.xls'], a[href$='.xlsx']").forEach((function(e) {
                    e.addEventListener("click", (function(t) {
                        "undefined" != typeof ga && ga("send", "event", "Download", "click", e.getAttribute("href"), {
                            hitCallback: function() {}
                        })
                    }))
                })), $(".home-video-i").forEach((e => {
                    e.addEventListener("click", (function(t) {
                        "undefined" != typeof ga && ga("send", "event", "HomeVideo", "click", e.parentNode.getAttribute("data-video"), {
                            hitCallback: function() {}
                        })
                    }))
                }))
            }
        };
        const w = class {
            constructor() {
                this.init()
            }
            init() {
                let e = this;
                e.homeEle = $$(".home-ele"), e.homeEle && (e.switchButtonText = e.homeEle.dataset.btng, e.switchButtonBackText = e.homeEle.dataset.btngb, e.body = $$("body"), e.html = $$("html"), e.homeEleBackup = e.homeEle.cloneNode(!0), e.homeEle.innerHTML = "", e.mobileWidth = 768, e.mouse = {
                    x: 0,
                    y: 0
                }, e.layerLoaded = !1, e.enableMouseMove = !1, e.tlContentAni = !1, e.tlSliderAutoPlay = !1, e.sliderAutoPlayTime = 6, e.glideCarousel = !1, e.isCookiebannerRunned = !1, e.type = "layer", e.lan = new s, $(".h-c-1 > a, .h-c-2 > a, .h-c-2 > button, .h-s-f > button, .h-l-s a").forEach((e => {
                    e.classList.add("mmouse-linkn")
                })), e.MMouse = new u, e.switchButtons(), e.layers(), e.resizeEvent())
            }
            showCookiebanner() {
                let e = this;
                e.isCookiebannerRunned || setTimeout((function() {
                    new y, new b, e.isCookiebannerRunned = !0
                }), 4500)
            }
            switchButtons() {
                let e = this,
                    t = document.createElement("div"),
                    i = !0;
                t.innerHTML = `\n      <button class="home-ele-g mmouse-linkn">${e.switchButtonText}</button>\n      `, e.homeEle.after(t), e.switchButton = $$(".home-ele-g"), e.switchButton.addEventListener("click", (function() {
                    e.enableMouseMove = !1, document.removeEventListener("mousemove", e.contentMoveAni.bind(e)), i && (i = !1, setTimeout((function() {
                        i = !0
                    }), 1e3), this.classList.contains("active") ? (e.layers(), this.classList.remove("active"), this.innerHTML = e.switchButtonText) : (e.slider(), this.classList.add("active"), this.innerHTML = e.switchButtonBackText))
                })), e.switchButton.addEventListener("mouseenter", (function() {
                    e.enableMouseMove = !1
                })), e.switchButton.addEventListener("mouseleave", (function() {
                    e.enableMouseMove = !0
                }))
            }
            layers() {
                let e = this;
                e.homeEle.innerHTML = "";
                let t = document.createElement("div");
                t.classList.add("home-ele-layers"), t.innerHTML = '\n      <div class="home-ele-layers-headers"></div>\n      <div class="home-ele-layers-inner"><div class="home-ele-layers-content"><ul></ul></div></div>\n      ', e.headersWrap = t.querySelector(".home-ele-layers-headers"), e.headersWrap.appendChild(e.homeEleBackup.querySelector("h1").cloneNode(!0)), e.headersWrap.appendChild(e.homeEleBackup.querySelector(".home-ele-htext").cloneNode(!0)), e.h2 = e.headersWrap.querySelector(".home-ele-htext");
                let i = document.createElement("div");
                i.classList.add("home-ele-m"), i.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n      viewBox="0 0 34 34"> <path class="st0" d="M20.8,29.2L17,33l-3.8-3.8 M13.2,4.8L17,1l3.8,3.8 M4.8,20.8L1,17l3.8-3.8 M29.2,13.2L33,17l-3.8,3.8\n      M11.4,11.6l4.1,12.2l2.7-5.3l5.4-2.8L11.4,11.6z M18.9,19.6l3.8,3.8" style="fill:#fff"/> </svg>${e.lan.mouse}`, e.h2.append(i);
                let n = t.querySelector("ul");
                e.homeEleBackup.querySelectorAll("a").forEach((e => {
                    let t = document.createElement("li");
                    t.appendChild(e.cloneNode(!0)), n.appendChild(t)
                })), e.homeEle.appendChild(t);
                let s = e.homeEle.querySelectorAll("a"),
                    o = s.length,
                    r = 0,
                    a = o + 1,
                    l = 0,
                    c = 0;
                s.forEach((t => {
                    let i = e.getKeyValues(t.querySelector("figure").dataset.style),
                        n = t.querySelector("img"),
                        d = parseFloat(n.getAttribute("height")) / parseFloat(n.getAttribute("width")),
                        u = i.width * d;
                    t.style.width = "calc(" + i.width + " * var(--hs))", t.style.zIndex = a--, l = l > Math.abs(i.left) + .5 * i.width ? l : Math.abs(i.left) + .5 * i.width, c = c > Math.abs(i.top) + .5 * u ? c : Math.abs(i.top) + .5 * u, f().load(t.querySelector("img"), {
                        cancel_on_exit: !1,
                        callback_loaded: function() {
                            if (++r >= o) {
                                let t = [...s].reverse();
                                e.layerLoaded ? window.innerWidth / window.innerHeight > 1 && window.innerWidth > e.mobileWidth && (e.layerAni(), gsap.timeline({
                                    onComplete: function() {}
                                }).to(t.concat(e.homeEle.querySelectorAll("h1, .home-ele-htext")), {
                                    opacity: 1,
                                    duration: .75,
                                    ease: "power2.inOut"
                                })) : gsap.timeline({
                                    onComplete: function() {
                                        window.innerWidth / window.innerHeight < 1 || window.innerWidth < e.mobileWidth ? gsap.timeline({
                                            onComplete: function() {
                                                e.slider()
                                            }
                                        }).to(".home-ele-layers", {
                                            opacity: 0,
                                            duration: .5,
                                            ease: "power2.inOut"
                                        }).delay(2) : e.layerAni(), e.showCookiebanner()
                                    }
                                }).to(t, {
                                    opacity: 1,
                                    stagger: .4,
                                    duration: .7 * .8,
                                    ease: "power2.inOut"
                                }).to(e.homeEle.querySelectorAll("h1, .home-ele-htext"), {
                                    opacity: 1,
                                    duration: .7 * .8,
                                    ease: "power2.inOut"
                                }).to($$("#header"), {
                                    opacity: 1,
                                    duration: .7 * .8,
                                    ease: "power2.inOut"
                                })
                            }
                        }
                    })
                }));
                e.content = e.homeEle.querySelector(".home-ele-layers-content"), e.content.style.width = "calc(" + (2 * l + 10) + " * var(--hl))", e.content.style.height = "calc(" + (2 * c + 10) + " * var(--hl))"
            }
            slider() {
                let e = this;
                e.homeEle.innerHTML = "", e.enableMouseMove = !1, e.type = "slider";
                let t = document.createElement("div"),
                    i = [];
                t.classList.add("home-ele-slider"), e.homeEleBackup.querySelectorAll("a").forEach((e => {
                    i.push(e.cloneNode(!0))
                })), i.sort((function(e, t) {
                    return parseInt(e.querySelector("figure").dataset.index) > parseInt(t.querySelector("figure").dataset.index) ? 1 : -1
                }));
                let n = document.createElement("div");
                n.setAttribute("class", "hes-slider-wrap"), n.innerHTML = '<div class="glide">\n      <div data-glide-el="track" class="glide__track">\n        <ul class="glide__slides">\n        </ul>\n      </div>\n    </div>';
                let s = n.querySelector(".glide__slides"),
                    o = document.createElement("div");
                o.setAttribute("class", "slider__progress"), o.innerHTML = '\n            <svg class="slider__progress_svg" \n              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" style="transform:rotate(-90deg);" >\n              <circle\n                stroke="#ffffff"\n                stroke-width="2"\n                fill="transparent"\n                r="52"\n                cx="60"\n                cy="60"/>\n              <circle\n                class="slider__progress_svg_c"\n                stroke="#A3A0A0"\n                stroke-width="2"\n                fill="transparent"\n                r="52"\n                cx="60"\n                cy="60" />\n        </svg>\n      ';
                let r = document.createElement("div");
                r.setAttribute("class", "slider-control"), r.setAttribute("data-glide-el", "controls"), r.innerHTML = '<button class="ar ar-prev mmouse-prev" aria-label="" data-glide-dir="<" ></button><button class="ar ar-next mmouse-next" aria-label="" data-glide-dir=">" ></button>';
                let a = document.createElement("li");
                a.setAttribute("class", "glide__slide");
                let l = e.homeEleBackup.querySelector(".home-ele-htext").cloneNode(!0);
                l.setAttribute("class", "home-ele-hstext"), a.appendChild(l), s.appendChild(a), i.forEach((function(e, t) {
                    a = document.createElement("li"), a.setAttribute("class", "glide__slide"), a.appendChild(e), s.appendChild(a)
                })), n.querySelector(".glide").appendChild(r), t.appendChild(n), t.appendChild(o), e.homeEle.appendChild(t);
                let c = e.homeEle.querySelector(".slider__progress_svg_c"),
                    d = 2 * c.r.baseVal.value * Math.PI;

                function u(t) {
                    e.tlSliderAutoPlay || (e.tlSliderAutoPlay = gsap.timeline({
                        onComplete: function() {
                            e.glideCarousel.go(">")
                        }
                    })), e.tlSliderAutoPlay.clear().set(c, {
                        strokeDashoffset: d
                    }).to(c, {
                        strokeDashoffset: 0,
                        duration: t,
                        ease: "power2.inOut"
                    })
                }
                c.style.strokeDasharray = d, c.style.strokeDashoffset = d, e.homeEle.querySelectorAll("figcaption").forEach((t => {
                    t.innerHTML += `<div class="home-ele-read">${e.lan.read} <i class="icon-aw"></i></div>`, t.querySelectorAll("b").length && t.classList.add("align-left")
                })), new(f())({
                    elements_selector: ".home-ele img.lazy",
                    callback_loaded: function() {}
                }).loadAll(), e.glideCarousel && (e.glideCarousel.destroy(), e.glideCarousel = !1), e.glideCarousel = new(g())(e.homeEle.querySelector(".glide"), {
                    autoplay: !1,
                    type: "carousel",
                    animationDuration: 800,
                    perView: 1.8,
                    gap: 32,
                    focusAt: "center",
                    breakpoints: {
                        758: {
                            perView: 1.5,
                            gap: 16
                        }
                    }
                }), e.tlSliderAutoPlay && (e.tlSliderAutoPlay.kill(), e.tlSliderAutoPlay = !1), e.glideCarousel.on("run", (function() {
                    u(e.sliderAutoPlayTime)
                })), e.glideCarousel.on("mount.after", (function() {
                    u(e.sliderAutoPlayTime + 1)
                })), e.glideCarousel.mount(), e.glideCarousel.on("translate.jump", (function() {
                    setTimeout((function() {
                        let e = n.querySelector(".glide__slide--active");
                        [e.previousSibling, e.nextSibling].forEach((e => {
                            e && e.classList.contains("glide__slide--clone") && (e.classList.add("glide__slide--active-clone"), e.offsetHeight, e.classList.remove("glide__slide--active-clone"))
                        }))
                    }), 1)
                }));
                let h = gsap.timeline({
                    onComplete: function() {
                        h && h.kill()
                    }
                }).from(t, {
                    opacity: 0,
                    duration: .75,
                    ease: "power2.inOut"
                });
                e.addLinkHover()
            }
            layerAni() {
                let e = this,
                    t = .5;
                e.layerLoaded ? t = 0 : e.enableMouseMove = !0, gsap.timeline({
                    onComplete: function() {
                        e.layerLoaded ? $$(".home-ele-layers").classList.add("active-ev") : $$(".home-ele-layers").classList.add("active"), e.homeEle.querySelectorAll(".home-ele-layers a").forEach((t => {
                            let i = e.getKeyValues(t.querySelector("figure").dataset.style);
                            t.style.left = "calc(" + i.left + " * var(--hl)  + 50%)", t.style.top = "calc(" + i.top + " * var(--hl)  + 50%)"
                        })), setTimeout((() => {
                            e.type = "layer", document.addEventListener("mousemove", (t => {
                                e.mouse.x = t.pageX, e.mouse.y = t.pageY
                            }), !1), document.addEventListener("mousemove", e.contentMoveAni.bind(e), {
                                once: !0
                            }), e.addLinkHover()
                        }), 1e3), e.layerLoaded = !0
                    }
                }).to(".home-ele-m, .home-ele-g", {
                    opacity: 1,
                    duration: t,
                    ease: "power2.inOut"
                })
            }
            contentMoveAni() {
                let e = this;
                setInterval((function() {
                    e.enableMouseMove && !document.documentElement.classList.contains("cookiebanner-show") && (e.moved = !0, e.x = e.mouse.x, e.y = e.mouse.y, e.moved = !1, e.moved || (requestAnimationFrame((() => {
                        gsap.timeline().to(e.content, {
                            x: (e.x - window.innerWidth / 2) / window.innerWidth * (-.8 * e.content.clientWidth),
                            y: (e.y - window.innerHeight / 2) / window.innerHeight * (-.7 * e.content.clientHeight),
                            duration: 3.07,
                            ease: "linear"
                        }), e.moved = !1
                    })), this.moved = !0))
                }), 200)
            }
            addLinkHover() {
                let e = this;
                e.homeEle.querySelectorAll("a").forEach((t => {
                    t.classList.add("mmouse-link"), t.addEventListener("mouseenter", e.linkHover.bind(e)), t.addEventListener("mouseleave", e.linkLeave.bind(e)), t.addEventListener("blur", e.linkLeave.bind(e)), t.addEventListener("focus", e.linkHover.bind(e))
                })), e.MMouse.refreshHoverClasses()
            }
            linkHover(e) {
                let t = this,
                    i = e.target;
                "layer" == t.type && (t.h2.classList.remove("active"), t.h2.removeAttribute("style"), t.h2Active || (t.h2Active = document.createElement("h2"), t.h2Active.classList.add("home-ele-h-active"), t.headersWrap.append(t.h2Active)), t.h2Active.innerHTML = i.querySelector("figcaption .h2").innerHTML, t.h2Active.querySelectorAll("b").length && t.h2Active.classList.add("align-left"), t.h2Active.offsetHeight, t.h2Active.classList.add("active")), t.body.classList.add("mlink-hover")
            }
            linkLeave() {
                let e = this;
                e.h2Active && (e.h2Active.remove(), e.h2Active = null), e.body.classList.remove("mlink-hover"), "layer" == e.type && (e.h2.removeAttribute("style"), e.h2.offsetHeight, e.h2.classList.add("active"))
            }
            destroy() {
                this.body.classList.remove("mlink-hover")
            }
            getKeyValues(e) {
                let t = {},
                    i = e.split(";");
                for (let e = 0; e < i.length; e++) {
                    let n = i[e].trim().split(":");
                    n.length < 2 || (t[n[0].trim()] = parseFloat(n[1].trim().replace("vw", "")))
                }
                return t
            }
            resizeEvent() {
                let e = this;
                setTimeout((() => {
                    window.addEventListener("resize", (() => {
                        "layer" == e.type && (window.innerWidth / window.innerHeight < 1 || window.innerWidth < e.mobileWidth) && (e.slider(), e.switchButton.classList.add("active"), e.switchButton.innerHTML = e.switchButtonBackText)
                    }))
                }), 2e3)
            }
            fullWidth() {
                const e = () => {
                    document.documentElement.style.setProperty("--fw", window.innerWidth / 100 + "px")
                };
                window.addEventListener("resize", e), e()
            }
        };
        const k = class {
            constructor() {
                if (!$$(".au-top-int")) return;
                document.documentElement.classList.add("introh-page");
                let e = this,
                    t = 0;
                new(f())({
                    elements_selector: ".au-top-int-im img",
                    callback_loaded: function() {
                        t++, 3 == t && e.play()
                    }
                }), setTimeout((function() {
                    e.play()
                }), 3e3)
            }
            play() {
                document.documentElement.classList.add("introh-loaded"), setTimeout((function() {
                    document.documentElement.classList.add("introh-loaded-done")
                }), 3e3)
            }
        };
        var x = i(987),
            S = i.n(x);
        const E = class {
            constructor() {
                this.init()
            }
            init() {
                const e = document.querySelector(".au-images-slider-inner ul");
                let t, i, n = !1,
                    s = null;
                if (!e) return;
                let o = 0,
                    r = e.querySelectorAll("li");
                S().polyfill(), e.addEventListener("mousedown", (o => {
                    n = !0, e.classList.add("active"), t = o.pageX - e.offsetLeft, i = e.scrollLeft;
                    let r = e.querySelectorAll("li >div");
                    for (let e = 0; e < r.length; e++) {
                        let t = r[e].getBoundingClientRect();
                        if (t.left > 0 && t.right < window.innerWidth) {
                            s = r[e].parentNode;
                            break
                        }
                    }
                })), e.addEventListener("mouseleave", (() => {
                    n = !1, e.classList.remove("active")
                })), e.addEventListener("mouseup", (() => {
                    n = !1;
                    let t = s;
                    e.scrollLeft - i > 100 ? s.nextSibling && (t = s.nextSibling) : e.scrollLeft - i < -100 && s.previousSibling && (t = s.previousSibling);
                    let o = Array.prototype.indexOf.call(e.children, t);
                    "scrollBehavior" in document.documentElement.style ? setTimeout((function() {
                        e.classList.remove("active")
                    }), 600) : e.classList.remove("active"), e.scroll({
                        top: 0,
                        left: o * (window.innerWidth >= 992 ? r[0].offsetWidth : 24),
                        behavior: "smooth"
                    })
                })), e.addEventListener("mousemove", (s => {
                    if (!n) return;
                    s.preventDefault();
                    const o = 1.5 * (s.pageX - e.offsetLeft - t);
                    e.scrollLeft = i - o
                }));
                let a = e.parentNode.parentNode,
                    l = a.querySelector(".btn-prev"),
                    c = a.querySelector(".btn-next");

                function d(t) {
                    if (e.classList.contains("active") || e.classList.contains("prev-next")) return;
                    e.classList.add("prev-next"), e.classList.add("active");
                    let i = t * r[0].offsetWidth;
                    e.scroll({
                        top: 0,
                        left: i,
                        behavior: "smooth"
                    }), setTimeout((function() {
                        e.classList.remove("prev-next"), e.classList.remove("active")
                    }), 600)
                }
                l.addEventListener("click", (e => {
                    d(o - 1)
                })), c.addEventListener("click", (e => {
                    d(o + 1)
                })), setInterval((function() {
                    requestAnimationFrame((function() {
                        o = function() {
                            let t = e.querySelectorAll("li >div");
                            for (let e = 0; e < t.length; e++) {
                                let i = t[e].getBoundingClientRect();
                                if (i.left > 0 && i.right < window.innerWidth) return e
                            }
                            return 0
                        }(), l.style.display = o < 1 ? "none" : "block", o >= r.length - 1 ? c.style.display = "none" : c.style.display = "block"
                    }))
                }), 200);
                let u = e.querySelector("picture img"),
                    h = u.offsetHeight;
                const f = () => {
                    h != u.offsetHeight && (e.parentNode.parentNode.style.setProperty("--img-height", `${u.offsetHeight}px`), h = u.offsetHeight)
                };
                setInterval((() => {
                    requestAnimationFrame(f)
                }), 200)
            }
        };
        const L = class {
            constructor() {
                let e = this;
                e.lan = new s, e.videoConfirm = `\n            <div class="video-confirm">\n                <div>\n                    <p>${e.lan.videomsg}</p>\n                    <button>${e.lan.videobutton}</button>\n                </div>\n            </div> \n        `, $(".au-video").forEach((function(t) {
                    let i = t,
                        n = i.querySelector("figure > div"),
                        s = "https://www.youtube-nocookie.com/embed/" + i.getAttribute("data-video-id") + "?rel=0&;showinfo=0;controls=2;autoplay=1;loop=0;HD=1;autohide=1";
                    i.classList.contains("video-type-vimeo") && (e.videoConfirm = `\n                <div class="video-confirm">\n                    <div>\n                        <p>${e.lan.videomsgvimeo}</p>\n                        <button>${e.lan.videobutton}</button>\n                    </div>\n                </div> \n                 `, s = "https://player.vimeo.com/video/" + i.getAttribute("data-video-id") + "?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff&amp;autoplay=true");
                    let o = document.createElement("div");
                    o.innerHTML = e.videoConfirm, n.appendChild(o.querySelector(".video-confirm")), i.querySelector("button").addEventListener("click", (function() {
                        let e = document.createElement("div");
                        e.innerHTML = '<iframe allowfullscreen frameborder="0" src="' + s + '"></iframe', n.appendChild(e.querySelector("iframe")), i.classList.add("actived")
                    })), i.querySelectorAll(".video-confirm a,.video-confirm button").forEach((function(e) {
                        e.addEventListener("focusin", (function() {
                            n.parentNode.classList.add("hover")
                        })), e.addEventListener("focusout", (function() {
                            n.parentNode.classList.remove("hover")
                        }))
                    }))
                }))
            }
        };
        const T = class {
            constructor() {
                let e = this;
                e.lan = new s, e.share(), e.PrevNextButton()
            }
            PrevNextButton() {
                if ($(".prevnext-nav, #optimize, .page-home").length > 0) return;
                let e = this,
                    t = "",
                    i = $(".breadcrumb li"),
                    n = i.length > 0 ? i[0].querySelector("a").getAttribute("href") : "/";
                if (i.length > 3 && $('.breadcrumb li[data-uid="19"]').length > 0) {
                    t = `\n            <div class="col-12"><a class="link-box icon-aw2" href="${n+"#"+i[2].getAttribute("data-uid")}">${e.lan.storiesTitleBefore+i[2].innerText+e.lan.storiesTitleAfter}</a></div>\n        `, i[2].querySelector("a").setAttribute("href", n + "#" + i[2].getAttribute("data-uid"))
                } else {
                    let s, o = {
                            18: "s-2",
                            19: "s-3"
                        },
                        r = n;
                    i.length > 0 && void 0 !== (s = o[i[i.length - 1].getAttribute("data-uid")]) && (r = r + "#" + s), t = `\n           <div class="col-12"><a class="link-box icon-aw2" href="${r}">${e.lan.backtohome}</a></div>\n       `
                }
                let s = document.createElement("div");
                s.innerHTML = `\n\n        <div class="prevnext-nav d-print-none">\n        <div class="container-fluid">\n        \n  <div class="row">\n        ${t}\n      <div class="col-6 col-md-5">\n          <a class="prevnext-prev" href="">\n              <div class="ar-prev h4">\n              ${e.lan.prev}\n              </div>\n              <div class="prevnext-title h3">\n                  <strong></strong>\n                  \n              </div>\n          </a>\n\n      </div>\n      <div class="col-6   col-md-5 offset-md-2">\n          <a class="prevnext-next" href="">\n            <div class="ar-next h4">\n            ${e.lan.next}\n            </div>\n              <div class="prevnext-title h3">\n                  <strong></strong>\n                \n              </div>\n\n          </a>\n      </div>\n  </div>\n  </div>\n</div>\n        `;
                let o = s.querySelector(".prevnext-nav"),
                    r = o.querySelector(".prevnext-prev"),
                    a = o.querySelector(".prevnext-next"),
                    l = $(".mainnav .active > a, .mainnav .active > span > a"),
                    c = l[l.length - 1],
                    d = $(".mainnav a");
                if (!c) return;
                let u = 0;
                d.forEach(((e, t) => {
                    e == c && (u = t)
                }));
                let h, f = u < d.length - 1 && d[u + 1],
                    p = f,
                    g = 0;
                for (; !1 !== p;) g++, p = u + g < d.length - 1 && d[u + g + 1], !1 !== p && p.getAttribute("href") == f.getAttribute("href") ? f = p : p = !1;
                g = 0;
                do {
                    h = u - g > 0 && d[u - g - 1], g++
                } while (!1 !== h && h.getAttribute("href") == c.getAttribute("href"));
                if (h) {
                    let e = "",
                        t = h.parentNode.parentNode.parentNode;
                    if ("li" == t.tagName.toLowerCase()) {
                        let i = t.querySelectorAll("a")[0];
                        i !== h && (e = i.textContent)
                    }
                    r.setAttribute("href", h.getAttribute("href")), r.querySelectorAll(".prevnext-title")[0].innerHTML = e + "<strong>" + h.textContent + "</strong>";
                    let i = h.parentNode;
                    if (i.getAttribute("data-img")) {
                        let e = document.createElement("div");
                        e.innerHTML = '<div class="prevnext-image" ><img class="lazy" alt="" data-src="' + i.getAttribute("data-img") + '"/></div>', r.insertBefore(e.querySelector(".prevnext-image"), r.querySelector(".h3")), r.classList.add("has-img")
                    }
                } else r.remove();
                if (f) {
                    let e = f.parentNode.parentNode.parentNode,
                        t = "";
                    if ("li" == e.tagName.toLowerCase()) {
                        let i = e.querySelectorAll("a")[0];
                        i !== f && (t = i.textContent)
                    }
                    a.setAttribute("href", f.getAttribute("href")), a.querySelectorAll(".prevnext-title")[0].innerHTML = t + "<strong>" + f.textContent + "</strong>";
                    let i = f.parentNode;
                    if (i.getAttribute("data-img")) {
                        let e = document.createElement("div");
                        e.innerHTML = '<div class="prevnext-image" ><img class="lazy" alt="" data-src="' + i.getAttribute("data-img") + '"/></div>', a.insertBefore(e.querySelector(".prevnext-image"), a.querySelector(".h3")), a.classList.add("has-img")
                    }
                } else a.remove();
                $$(".f-c-w").appendChild(o)
            }
            share() {
                if ($(".page-home").length > 0) return;
                let e = document.createElement("div");
                e.className = "page-service-wrap";
                let t = location.href;
                e.innerHTML = `<div class="page-service d-print-none">\n                <div class="page-service-inner">\n                <button aria-label="print" class="btn-print icon-print"></button>\n                <h5>${this.lan.sharetitle}:</h5>\n                <ul class="share-links"><li><a class="icon-twitter" target="_blank" href="https://twitter.com/share?url=${t}"></a></li><li><a class="icon-linkedin" target="_blank" href="https://www.linkedin.com/shareArticle?url=${t}"></a></li><li><a class="icon-facebook" target="_blank" href="http://www.facebook.com/share.php?u=${t}"></a></li></ul>\n                </div>\n            </div>\n            `, $$(".f-c").appendChild(e), $$(".btn-print").addEventListener("click", (function() {
                    window.print()
                }))
            }
        };
        var A = i(397),
            C = i.n(A);
        const _ = class {
            constructor() {
                C()(".au-images-3-withzoom img", {
                    afterShow: function(e) {
                        let t = e;
                        setTimeout((function() {
                            let e = document.createElement("div");
                            e.innerHTML = '\n                <button class="btn-close icon-close" style=""></button>\n                ', t.wrap.append(e.querySelector("button"));
                            var i = t.wrap.getBoundingClientRect();
                            t.wrap.querySelector("button").style.transform = "translate3d(" + (i.width / 2 * t.scaleFactor - 60) + "px, " + (30 - i.height / 2 * t.scaleFactor) + "px, 0)"
                        }), 20)
                    }
                })
            }
        };
        const M = class {
            constructor() {
                this.renderLinks()
            }
            renderLinks() {
                if ($("#dw-excel").length < 1) return;
                $("#dw-excel .ce-uploads-filesize").forEach((function(e) {
                    e.innerHTML = "<span>Download</span> <span>EXCEL, " + e.innerHTML + "</span>"
                })), $("#dw-pdf .ce-uploads-filesize").forEach((function(e) {
                    e.innerHTML = "<span>Download</span> <span>PDF, " + e.innerHTML + "</span>"
                }));
                let e = document.createElement("div");
                e.setAttribute("class", "accordion"), e.setAttribute("id", "acexcels");
                let t = $("#dw-excel .ce-uploads"),
                    i = t.length;
                t.forEach((function(t, n) {
                    if (0 == n) return;
                    let s = t,
                        o = t.parentNode,
                        r = o.querySelector("header").innerText,
                        a = document.createElement("div");
                    a.setAttribute("class", "card"), a.innerHTML = `\n              \n                <div class="card-header" id="acheading${n}">\n                  <h5 class="mb-0">\n                    <div data-toggle="collapse" data-target="#collapse${n}" aria-expanded="true" aria-controls="collapse${n}">\n                    ${r}\n                    </div>\n                  </h5>\n                </div>\n            \n                <div id="collapse${n}" class="collapse" aria-labelledby="acheading${n}" data-parent="#acexcels">\n                  <div class="card-body">\n                  \n                    </div>\n                </div>\n                `, a.querySelector(".card-body").append(s.cloneNode(!0)), e.append(a), n == i - 1 && o.parentNode.insertBefore(e, o), o.remove()
                }));
                let n = $(".au-download-tabs-content .nav-link "),
                    s = $(".au-download-tabs-content .tab-pane");
                $(".au-download-tabs-content .nav-link").forEach((function(e, t) {
                    e.addEventListener("click", (function(i) {
                        i.preventDefault(), n.forEach((e => {
                            e.classList.remove("active"), e.setAttribute("aria-selected", !1)
                        })), s.forEach((e => {
                            e.setAttribute("class", "tab-pane fade")
                        })), e.classList.add("active"), e.setAttribute("aria-selected", !0), s[t].setAttribute("class", "tab-pane fade in active show")
                    }))
                }));
                let o = $$(".au-download-tabs-content .accordion"),
                    r = o.querySelectorAll(".card"),
                    a = o.querySelectorAll(".collapse"),
                    l = 350,
                    c = !0;
                r.forEach(((e, t) => {
                    let i = e.querySelector(".card-header"),
                        n = e.querySelector(".collapse");
                    i.addEventListener("click", (function() {
                        c && (c = !1, e.classList.contains("active") ? (e.classList.remove("active"), domSlideUp(n, l)) : (a.forEach((e => {
                            n != e && (domSlideUp(e, l), e.parentNode.classList.remove("active"))
                        })), domSlideDown(n, l), e.classList.add("active"), setTimeout((function() {
                            window.pageYOffset > e.offsetTop - 70 && window.scroll({
                                top: e.offsetTop - 90,
                                behavior: "smooth"
                            })
                        }), l)), setTimeout((function() {
                            c = !0
                        }), l))
                    }))
                }))
            }
        };
        const O = class {
            constructor() {
                $(".bt-readmore").forEach((function(e) {
                    let t = e.parentNode.parentNode,
                        i = t.querySelector(".au-readmore-long-content"),
                        n = e.querySelectorAll("span"),
                        s = t.querySelector(".btn-close");
                    e.addEventListener("click", (function() {
                        t.classList.contains("active") ? (domSlideUp(i, 500), n[0].removeAttribute("hidden"), n[1].setAttribute("hidden", "hidden"), e.classList.remove("active"), s.setAttribute("hidden", "hidden"), window.pageYOffset > t.parentNode.offsetTop - 70 && window.scroll({
                            top: t.parentNode.offsetTop - 90,
                            behavior: "smooth"
                        })) : (domSlideDown(i, 500), n[0].setAttribute("hidden", "hidden"), n[1].removeAttribute("hidden"), e.classList.add("active"), s.removeAttribute("hidden")), setTimeout((function() {
                            t.classList.contains("active") ? t.classList.remove("active") : t.classList.add("active")
                        }), 500)
                    })), s.addEventListener("click", (function() {
                        e.click()
                    }))
                }))
            }
        };
        const q = class {
            constructor() {
                let e = this,
                    t = !0,
                    i = 200;
                document.querySelectorAll(".accordion-item").forEach((n => {
                    n.querySelector(".accordion-button").addEventListener("click", (function() {
                        t && (t = !1, n.classList.contains("active") ? n.classList.remove("active") : (n.parentNode.querySelectorAll(".active").forEach((t => {
                            t.classList.remove("active"), e.slideToggle(t.querySelector(".accordion-body"), i)
                        })), n.classList.add("active"), setTimeout((function() {
                            window.pageYOffset > n.offsetTop - 70 && window.scroll({
                                top: n.offsetTop - 90,
                                behavior: "smooth"
                            })
                        }), i)), e.slideToggle(n.querySelector(".accordion-body"), i), setTimeout((function() {
                            t = !0
                        }), i))
                    }))
                }))
            }
            slideUp(e, t = 500) {
                e.style.transitionProperty = "height, margin, padding", e.style.transitionDuration = t + "ms", e.style.boxSizing = "border-box", e.style.height = e.offsetHeight + "px", e.offsetHeight, e.style.overflow = "hidden", e.style.height = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0, e.style.marginTop = 0, e.style.marginBottom = 0, window.setTimeout((() => {
                    e.style.display = "none", e.style.removeProperty("height"), e.style.removeProperty("padding-top"), e.style.removeProperty("padding-bottom"), e.style.removeProperty("margin-top"), e.style.removeProperty("margin-bottom"), e.style.removeProperty("overflow"), e.style.removeProperty("transition-duration"), e.style.removeProperty("transition-property")
                }), t)
            }
            slideDown(e, t = 500) {
                e.style.removeProperty("display");
                let i = window.getComputedStyle(e).display;
                "none" === i && (i = "block"), e.style.display = i;
                let n = e.offsetHeight;
                e.style.overflow = "hidden", e.style.height = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0, e.style.marginTop = 0, e.style.marginBottom = 0, e.offsetHeight, e.style.boxSizing = "border-box", e.style.transitionProperty = "height, margin, padding", e.style.transitionDuration = t + "ms", e.style.height = n + "px", e.style.removeProperty("padding-top"), e.style.removeProperty("padding-bottom"), e.style.removeProperty("margin-top"), e.style.removeProperty("margin-bottom"), window.setTimeout((() => {
                    e.style.removeProperty("height"), e.style.removeProperty("overflow"), e.style.removeProperty("transition-duration"), e.style.removeProperty("transition-property")
                }), t)
            }
            slideToggle(e, t = 500) {
                return "none" === window.getComputedStyle(e).display ? this.slideDown(e, t) : this.slideUp(e, t)
            }
        };
        const P = class {
            constructor() {
                this.factsSlider()
            }
            factsSlider() {
                const e = document.querySelector(".sms-facts-items ul");
                let t, i, n = !1;
                e && (e.addEventListener("mousedown", (s => {
                    n = !0, e.classList.add("active"), t = s.pageX - e.offsetLeft, i = e.scrollLeft
                })), e.addEventListener("mouseleave", (() => {
                    n = !1, e.classList.remove("active")
                })), e.addEventListener("mouseup", (() => {
                    n = !1, e.classList.remove("active")
                })), e.addEventListener("mousemove", (s => {
                    if (!n) return;
                    s.preventDefault();
                    const o = 1.5 * (s.pageX - e.offsetLeft - t);
                    e.scrollLeft = i - o, e.scrollLeft >= e.scrollWidth - e.offsetWidth ? e.parentElement.classList.add("is-end") : e.parentElement.classList.remove("is-end"), e.scrollLeft > 0 ? e.parentElement.classList.add("not-start") : e.parentElement.classList.remove("not-start")
                })), e.addEventListener("scroll", (t => {
                    e.scrollLeft >= e.scrollWidth - e.offsetWidth ? e.parentElement.classList.add("is-end") : e.parentElement.classList.remove("is-end"), e.scrollLeft > 0 ? e.parentElement.classList.add("not-start") : e.parentElement.classList.remove("not-start")
                })))
            }
        };
        i(478);
        var z = function() {
                return (z = Object.assign || function(e) {
                    for (var t, i = 1, n = arguments.length; i < n; i++)
                        for (var s in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                    return e
                }).apply(this, arguments)
            },
            H = function() {
                function e(e, t, i) {
                    var n = this;
                    this.target = e, this.endVal = t, this.options = i, this.version = "2.0.7", this.defaults = {
                        startVal: 0,
                        decimalPlaces: 0,
                        duration: 2,
                        useEasing: !0,
                        useGrouping: !0,
                        smartEasingThreshold: 999,
                        smartEasingAmount: 333,
                        separator: ",",
                        decimal: ".",
                        prefix: "",
                        suffix: ""
                    }, this.finalEndVal = null, this.useEasing = !0, this.countDown = !1, this.error = "", this.startVal = 0, this.paused = !0, this.count = function(e) {
                        n.startTime || (n.startTime = e);
                        var t = e - n.startTime;
                        n.remaining = n.duration - t, n.useEasing ? n.countDown ? n.frameVal = n.startVal - n.easingFn(t, 0, n.startVal - n.endVal, n.duration) : n.frameVal = n.easingFn(t, n.startVal, n.endVal - n.startVal, n.duration) : n.countDown ? n.frameVal = n.startVal - (n.startVal - n.endVal) * (t / n.duration) : n.frameVal = n.startVal + (n.endVal - n.startVal) * (t / n.duration), n.countDown ? n.frameVal = n.frameVal < n.endVal ? n.endVal : n.frameVal : n.frameVal = n.frameVal > n.endVal ? n.endVal : n.frameVal, n.frameVal = Number(n.frameVal.toFixed(n.options.decimalPlaces)), n.printValue(n.frameVal), t < n.duration ? n.rAF = requestAnimationFrame(n.count) : null !== n.finalEndVal ? n.update(n.finalEndVal) : n.callback && n.callback()
                    }, this.formatNumber = function(e) {
                        var t, i, s, o, r, a = e < 0 ? "-" : "";
                        if (t = Math.abs(e).toFixed(n.options.decimalPlaces), s = (i = (t += "").split("."))[0], o = i.length > 1 ? n.options.decimal + i[1] : "", n.options.useGrouping) {
                            r = "";
                            for (var l = 0, c = s.length; l < c; ++l) 0 !== l && l % 3 == 0 && (r = n.options.separator + r), r = s[c - l - 1] + r;
                            s = r
                        }
                        return n.options.numerals && n.options.numerals.length && (s = s.replace(/[0-9]/g, (function(e) {
                            return n.options.numerals[+e]
                        })), o = o.replace(/[0-9]/g, (function(e) {
                            return n.options.numerals[+e]
                        }))), a + n.options.prefix + s + o + n.options.suffix
                    }, this.easeOutExpo = function(e, t, i, n) {
                        return i * (1 - Math.pow(2, -10 * e / n)) * 1024 / 1023 + t
                    }, this.options = z(z({}, this.defaults), i), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(t), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, "" === this.options.separator && (this.options.useGrouping = !1), this.el = "string" == typeof e ? document.getElementById(e) : e, this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined"
                }
                return e.prototype.determineDirectionAndSmartEasing = function() {
                    var e = this.finalEndVal ? this.finalEndVal : this.endVal;
                    this.countDown = this.startVal > e;
                    var t = e - this.startVal;
                    if (Math.abs(t) > this.options.smartEasingThreshold) {
                        this.finalEndVal = e;
                        var i = this.countDown ? 1 : -1;
                        this.endVal = e + i * this.options.smartEasingAmount, this.duration = this.duration / 2
                    } else this.endVal = e, this.finalEndVal = null;
                    this.finalEndVal ? this.useEasing = !1 : this.useEasing = this.options.useEasing
                }, e.prototype.start = function(e) {
                    this.error || (this.callback = e, this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = !1, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal))
                }, e.prototype.pauseResume = function() {
                    this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused
                }, e.prototype.reset = function() {
                    cancelAnimationFrame(this.rAF), this.paused = !0, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal)
                }, e.prototype.update = function(e) {
                    cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(e), this.endVal !== this.frameVal && (this.startVal = this.frameVal, this.finalEndVal || this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count))
                }, e.prototype.printValue = function(e) {
                    var t = this.formattingFn(e);
                    "INPUT" === this.el.tagName ? this.el.value = t : "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = t : this.el.innerHTML = t
                }, e.prototype.ensureNumber = function(e) {
                    return "number" == typeof e && !isNaN(e)
                }, e.prototype.validateValue = function(e) {
                    var t = Number(e);
                    return this.ensureNumber(t) ? t : (this.error = "[CountUp] invalid start or end value: " + e, null)
                }, e.prototype.resetDuration = function() {
                    this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration
                }, e
            }();
        const I = class {
            constructor() {
                let e = this;
                e.lan = new s, e.pall = null, e.addLoaded(), e.lazyImagesAndVideos(), e.countingUp()
            }
            countingUp() {
                let e = this;
                $(".key-num").forEach((function(t, i) {
                    new Waypoint({
                        element: t,
                        handler: function(n) {
                            if (!t.classList.contains("runned")) {
                                t.classList.add("runned");
                                let n = "countnum" + i;
                                t.setAttribute("id", "countnum" + i);
                                let s = t.innerHTML.replace(1 === e.lan.id ? "," : ".", "").replace(" ", ""),
                                    o = s.split(1 === e.lan.id ? "." : ","),
                                    r = o.length > 1 ? o[1].length : 0;
                                new H(n, parseFloat(s.replace(",", ".")), {
                                    startVal: 0,
                                    decimalPlaces: r,
                                    duration: 2.5,
                                    separator: 1 === e.lan.id ? "," : ".",
                                    decimal: 1 === e.lan.id ? "." : ","
                                }).start()
                            }
                        },
                        offset: "bottom-in-view"
                    })
                }))
            }
            lazyImagesAndVideos() {
                let e = this;
                new(f())({
                    elements_selector: "img.lazy, video.lazy",
                    callback_loaded: function(t) {
                        Waypoint.refreshAll(), e.pall && e.pall.forEach((function(e) {
                            e.refresh()
                        }))
                    }
                })
            }
            addLoaded() {
                document.documentElement.classList.add("dom-ready"), window.addEventListener("load", (function(e) {
                    document.documentElement.classList.add("win-loaded")
                })), setTimeout((function() {
                    document.documentElement.classList.add("win-loaded")
                }), 1e3), window.addEventListener("beforeunload", (function(e) {
                    document.documentElement.classList.remove("dom-loaded")
                }))
            }
        };
        const D = class {
            constructor() {
                let e = $$(".glossary-index-chars");
                if (e) {
                    let t = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
                    for (let i = 0; i < t.length; i++) {
                        let n = "#c_char_" + t[i],
                            s = document.createElement("span");
                        $(n).length > 0 ? (s.innerHTML = '<a href="' + n + '">' + t[i] + "</a>", s.classList.add("active")) : s.innerHTML = t[i], e.append(s)
                    }
                } else $("a.glossary").forEach((function(e) {
                    let t = e,
                        i = t.getAttribute("href"),
                        n = document.createElement("div");
                    n.classList.add("glossary-tip"), n.innerHTML = "<div><h5>" + t.innerHTML + "</h5><p>" + t.getAttribute("title") + "</p></div>", i = i.substring(0, i.lastIndexOf("&")).replace("?c_term=", "#c_term_"), t.setAttribute("href", i), t.setAttribute("data-html", "true"), t.append(n), t.removeAttribute("title")
                }))
            }
        };
        const N = class {
            constructor() {
                this.setFooterHeight()
            }
            setFooterHeight() {
                let e = $$("#footer"),
                    t = 0;
                const i = () => {
                    e.offsetHeight != t && (t = e.offsetHeight, document.documentElement.style.setProperty("--footer-height", `${t}px`))
                };
                window.addEventListener("resize", i), i()
            }
        };
        new e, new t, new n, new a, new l, new c, new d, new w, new k, new E, new L, new T, new _, new M, new O, new q, new P, new I, $(".page-home").length < 1 && new y, new D, new N, new b
    })()
})();