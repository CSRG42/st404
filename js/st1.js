!(function (e) {
    var t = (function (u, D, f) {
        "use strict";
        var k, H;
        if (
            ((function () {
                var e;
                var t = {
                    lazyClass: "lazyload",
                    loadedClass: "lazyloaded",
                    loadingClass: "lazyloading",
                    preloadClass: "lazypreload",
                    errorClass: "lazyerror",
                    autosizesClass: "lazyautosizes",
                    srcAttr: "data-src",
                    srcsetAttr: "data-srcset",
                    sizesAttr: "data-sizes",
                    minSize: 40,
                    customMedia: {},
                    init: true,
                    expFactor: 1.5,
                    hFac: 0.8,
                    loadMode: 2,
                    loadHidden: true,
                    ricTimeout: 0,
                    throttleDelay: 125,
                };
                H = u.lazySizesConfig || u.lazysizesConfig || {};
                for (e in t) {
                    if (!(e in H)) {
                        H[e] = t[e];
                    }
                }
            })(),
            !D || !D.getElementsByClassName)
        ) {
            return { init: function () {}, cfg: H, noSupport: true };
        }
        var O = D.documentElement,
            a = u.HTMLPictureElement,
            P = "addEventListener",
            $ = "getAttribute",
            q = u[P].bind(u),
            I = u.setTimeout,
            U = u.requestAnimationFrame || I,
            l = u.requestIdleCallback,
            j = /^picture$/i,
            r = ["load", "error", "lazyincluded", "_lazyloaded"],
            i = {},
            G = Array.prototype.forEach,
            J = function (e, t) {
                if (!i[t]) {
                    i[t] = new RegExp("(\\s|^)" + t + "(\\s|$)");
                }
                return i[t].test(e[$]("class") || "") && i[t];
            },
            K = function (e, t) {
                if (!J(e, t)) {
                    e.setAttribute("class", (e[$]("class") || "").trim() + " " + t);
                }
            },
            Q = function (e, t) {
                var i;
                if ((i = J(e, t))) {
                    e.setAttribute("class", (e[$]("class") || "").replace(i, " "));
                }
            },
            V = function (t, i, e) {
                var a = e ? P : "removeEventListener";
                if (e) {
                    V(t, i);
                }
                r.forEach(function (e) {
                    t[a](e, i);
                });
            },
            X = function (e, t, i, a, r) {
                var n = D.createEvent("Event");
                if (!i) {
                    i = {};
                }
                i.instance = k;
                n.initEvent(t, !a, !r);
                n.detail = i;
                e.dispatchEvent(n);
                return n;
            },
            Y = function (e, t) {
                var i;
                if (!a && (i = u.picturefill || H.pf)) {
                    if (t && t.src && !e[$]("srcset")) {
                        e.setAttribute("srcset", t.src);
                    }
                    i({ reevaluate: true, elements: [e] });
                } else if (t && t.src) {
                    e.src = t.src;
                }
            },
            Z = function (e, t) {
                return (getComputedStyle(e, null) || {})[t];
            },
            s = function (e, t, i) {
                i = i || e.offsetWidth;
                while (i < H.minSize && t && !e._lazysizesWidth) {
                    i = t.offsetWidth;
                    t = t.parentNode;
                }
                return i;
            },
            ee = (function () {
                var i, a;
                var t = [];
                var r = [];
                var n = t;
                var s = function () {
                    var e = n;
                    n = t.length ? r : t;
                    i = true;
                    a = false;
                    while (e.length) {
                        e.shift()();
                    }
                    i = false;
                };
                var e = function (e, t) {
                    if (i && !t) {
                        e.apply(this, arguments);
                    } else {
                        n.push(e);
                        if (!a) {
                            a = true;
                            (D.hidden ? I : U)(s);
                        }
                    }
                };
                e._lsFlush = s;
                return e;
            })(),
            te = function (i, e) {
                return e
                    ? function () {
                          ee(i);
                      }
                    : function () {
                          var e = this;
                          var t = arguments;
                          ee(function () {
                              i.apply(e, t);
                          });
                      };
            },
            ie = function (e) {
                var i;
                var a = 0;
                var r = H.throttleDelay;
                var n = H.ricTimeout;
                var t = function () {
                    i = false;
                    a = f.now();
                    e();
                };
                var s =
                    l && n > 49
                        ? function () {
                              l(t, { timeout: n });
                              if (n !== H.ricTimeout) {
                                  n = H.ricTimeout;
                              }
                          }
                        : te(function () {
                              I(t);
                          }, true);
                return function (e) {
                    var t;
                    if ((e = e === true)) {
                        n = 33;
                    }
                    if (i) {
                        return;
                    }
                    i = true;
                    t = r - (f.now() - a);
                    if (t < 0) {
                        t = 0;
                    }
                    if (e || t < 9) {
                        s();
                    } else {
                        I(s, t);
                    }
                };
            },
            ae = function (e) {
                var t, i;
                var a = 99;
                var r = function () {
                    t = null;
                    e();
                };
                var n = function () {
                    var e = f.now() - i;
                    if (e < a) {
                        I(n, a - e);
                    } else {
                        (l || r)(r);
                    }
                };
                return function () {
                    i = f.now();
                    if (!t) {
                        t = I(n, a);
                    }
                };
            },
            e = (function () {
                var v, m, c, h, e;
                var y, z, g, p, C, b, A;
                var n = /^img$/i;
                var d = /^iframe$/i;
                var E = "onscroll" in u && !/(gle|ing)bot/.test(navigator.userAgent);
                var _ = 0;
                var w = 0;
                var N = 0;
                var M = -1;
                var x = function (e) {
                    N--;
                    if (!e || N < 0 || !e.target) {
                        N = 0;
                    }
                };
                var W = function (e) {
                    if (A == null) {
                        A = Z(D.body, "visibility") == "hidden";
                    }
                    return A || !(Z(e.parentNode, "visibility") == "hidden" && Z(e, "visibility") == "hidden");
                };
                var S = function (e, t) {
                    var i;
                    var a = e;
                    var r = W(e);
                    g -= t;
                    b += t;
                    p -= t;
                    C += t;
                    while (r && (a = a.offsetParent) && a != D.body && a != O) {
                        r = (Z(a, "opacity") || 1) > 0;
                        if (r && Z(a, "overflow") != "visible") {
                            i = a.getBoundingClientRect();
                            r = C > i.left && p < i.right && b > i.top - 1 && g < i.bottom + 1;
                        }
                    }
                    return r;
                };
                var t = function () {
                    var e, t, i, a, r, n, s, l, o, u, f, c;
                    var d = k.elements;
                    if ((h = H.loadMode) && N < 8 && (e = d.length)) {
                        t = 0;
                        M++;
                        for (; t < e; t++) {
                            if (!d[t] || d[t]._lazyRace) {
                                continue;
                            }
                            if (!E || (k.prematureUnveil && k.prematureUnveil(d[t]))) {
                                R(d[t]);
                                continue;
                            }
                            if (!(l = d[t][$]("data-expand")) || !(n = l * 1)) {
                                n = w;
                            }
                            if (!u) {
                                u = !H.expand || H.expand < 1 ? (O.clientHeight > 500 && O.clientWidth > 500 ? 500 : 370) : H.expand;
                                k._defEx = u;
                                f = u * H.expFactor;
                                c = H.hFac;
                                A = null;
                                if (w < f && N < 1 && M > 2 && h > 2 && !D.hidden) {
                                    w = f;
                                    M = 0;
                                } else if (h > 1 && M > 1 && N < 6) {
                                    w = u;
                                } else {
                                    w = _;
                                }
                            }
                            if (o !== n) {
                                y = innerWidth + n * c;
                                z = innerHeight + n;
                                s = n * -1;
                                o = n;
                            }
                            i = d[t].getBoundingClientRect();
                            if ((b = i.bottom) >= s && (g = i.top) <= z && (C = i.right) >= s * c && (p = i.left) <= y && (b || C || p || g) && (H.loadHidden || W(d[t])) && ((m && N < 3 && !l && (h < 3 || M < 4)) || S(d[t], n))) {
                                R(d[t]);
                                r = true;
                                if (N > 9) {
                                    break;
                                }
                            } else if (!r && m && !a && N < 4 && M < 4 && h > 2 && (v[0] || H.preloadAfterLoad) && (v[0] || (!l && (b || C || p || g || d[t][$](H.sizesAttr) != "auto")))) {
                                a = v[0] || d[t];
                            }
                        }
                        if (a && !r) {
                            R(a);
                        }
                    }
                };
                var i = ie(t);
                var B = function (e) {
                    var t = e.target;
                    if (t._lazyCache) {
                        delete t._lazyCache;
                        return;
                    }
                    x(e);
                    K(t, H.loadedClass);
                    Q(t, H.loadingClass);
                    V(t, L);
                    X(t, "lazyloaded");
                };
                var a = te(B);
                var L = function (e) {
                    a({ target: e.target });
                };
                var T = function (t, i) {
                    try {
                        t.contentWindow.location.replace(i);
                    } catch (e) {
                        t.src = i;
                    }
                };
                var F = function (e) {
                    var t;
                    var i = e[$](H.srcsetAttr);
                    if ((t = H.customMedia[e[$]("data-media") || e[$]("media")])) {
                        e.setAttribute("media", t);
                    }
                    if (i) {
                        e.setAttribute("srcset", i);
                    }
                };
                var s = te(function (t, e, i, a, r) {
                    var n, s, l, o, u, f;
                    if (!(u = X(t, "lazybeforeunveil", e)).defaultPrevented) {
                        if (a) {
                            if (i) {
                                K(t, H.autosizesClass);
                            } else {
                                t.setAttribute("sizes", a);
                            }
                        }
                        s = t[$](H.srcsetAttr);
                        n = t[$](H.srcAttr);
                        if (r) {
                            l = t.parentNode;
                            o = l && j.test(l.nodeName || "");
                        }
                        f = e.firesLoad || ("src" in t && (s || n || o));
                        u = { target: t };
                        K(t, H.loadingClass);
                        if (f) {
                            clearTimeout(c);
                            c = I(x, 2500);
                            V(t, L, true);
                        }
                        if (o) {
                            G.call(l.getElementsByTagName("source"), F);
                        }
                        if (s) {
                            t.setAttribute("srcset", s);
                        } else if (n && !o) {
                            if (d.test(t.nodeName)) {
                                T(t, n);
                            } else {
                                t.src = n;
                            }
                        }
                        if (r && (s || o)) {
                            Y(t, { src: n });
                        }
                    }
                    if (t._lazyRace) {
                        delete t._lazyRace;
                    }
                    Q(t, H.lazyClass);
                    ee(function () {
                        var e = t.complete && t.naturalWidth > 1;
                        if (!f || e) {
                            if (e) {
                                K(t, "ls-is-cached");
                            }
                            B(u);
                            t._lazyCache = true;
                            I(function () {
                                if ("_lazyCache" in t) {
                                    delete t._lazyCache;
                                }
                            }, 9);
                        }
                        if (t.loading == "lazy") {
                            N--;
                        }
                    }, true);
                });
                var R = function (e) {
                    if (e._lazyRace) {
                        return;
                    }
                    var t;
                    var i = n.test(e.nodeName);
                    var a = i && (e[$](H.sizesAttr) || e[$]("sizes"));
                    var r = a == "auto";
                    if ((r || !m) && i && (e[$]("src") || e.srcset) && !e.complete && !J(e, H.errorClass) && J(e, H.lazyClass)) {
                        return;
                    }
                    t = X(e, "lazyunveilread").detail;
                    if (r) {
                        re.updateElem(e, true, e.offsetWidth);
                    }
                    e._lazyRace = true;
                    N++;
                    s(e, t, r, a, i);
                };
                var r = ae(function () {
                    H.loadMode = 3;
                    i();
                });
                var l = function () {
                    if (H.loadMode == 3) {
                        H.loadMode = 2;
                    }
                    r();
                };
                var o = function () {
                    if (m) {
                        return;
                    }
                    if (f.now() - e < 999) {
                        I(o, 999);
                        return;
                    }
                    m = true;
                    H.loadMode = 3;
                    i();
                    q("scroll", l, true);
                };
                return {
                    _: function () {
                        e = f.now();
                        k.elements = D.getElementsByClassName(H.lazyClass);
                        v = D.getElementsByClassName(H.lazyClass + " " + H.preloadClass);
                        q("scroll", i, true);
                        q("resize", i, true);
                        q("pageshow", function (e) {
                            if (e.persisted) {
                                var t = D.querySelectorAll("." + H.loadingClass);
                                if (t.length && t.forEach) {
                                    U(function () {
                                        t.forEach(function (e) {
                                            if (e.complete) {
                                                R(e);
                                            }
                                        });
                                    });
                                }
                            }
                        });
                        if (u.MutationObserver) {
                            new MutationObserver(i).observe(O, { childList: true, subtree: true, attributes: true });
                        } else {
                            O[P]("DOMNodeInserted", i, true);
                            O[P]("DOMAttrModified", i, true);
                            setInterval(i, 999);
                        }
                        q("hashchange", i, true);
                        ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function (e) {
                            D[P](e, i, true);
                        });
                        if (/d$|^c/.test(D.readyState)) {
                            o();
                        } else {
                            q("load", o);
                            D[P]("DOMContentLoaded", i);
                            I(o, 2e4);
                        }
                        if (k.elements.length) {
                            t();
                            ee._lsFlush();
                        } else {
                            i();
                        }
                    },
                    checkElems: i,
                    unveil: R,
                    _aLSL: l,
                };
            })(),
            re = (function () {
                var i;
                var n = te(function (e, t, i, a) {
                    var r, n, s;
                    e._lazysizesWidth = a;
                    a += "px";
                    e.setAttribute("sizes", a);
                    if (j.test(t.nodeName || "")) {
                        r = t.getElementsByTagName("source");
                        for (n = 0, s = r.length; n < s; n++) {
                            r[n].setAttribute("sizes", a);
                        }
                    }
                    if (!i.detail.dataAttr) {
                        Y(e, i.detail);
                    }
                });
                var a = function (e, t, i) {
                    var a;
                    var r = e.parentNode;
                    if (r) {
                        i = s(e, r, i);
                        a = X(e, "lazybeforesizes", { width: i, dataAttr: !!t });
                        if (!a.defaultPrevented) {
                            i = a.detail.width;
                            if (i && i !== e._lazysizesWidth) {
                                n(e, r, a, i);
                            }
                        }
                    }
                };
                var e = function () {
                    var e;
                    var t = i.length;
                    if (t) {
                        e = 0;
                        for (; e < t; e++) {
                            a(i[e]);
                        }
                    }
                };
                var t = ae(e);
                return {
                    _: function () {
                        i = D.getElementsByClassName(H.autosizesClass);
                        q("resize", t);
                    },
                    checkElems: t,
                    updateElem: a,
                };
            })(),
            t = function () {
                if (!t.i && D.getElementsByClassName) {
                    t.i = true;
                    re._();
                    e._();
                }
            };
        return (
            I(function () {
                H.init && t();
            }),
            (k = { cfg: H, autoSizer: re, loader: e, init: t, uP: Y, aC: K, rC: Q, hC: J, fire: X, gW: s, rAF: ee })
        );
    })(e, e.document, Date);
    (e.lazySizes = t), "object" == typeof module && module.exports && (module.exports = t);
})("undefined" != typeof window ? window : {});

!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : ((e = e || self).Swiper = t());
})(this, function () {
    "use strict";
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var s = t[i];
            (s.enumerable = s.enumerable || !1), (s.configurable = !0), "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
        }
    }
    function t() {
        return (t =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
                }
                return e;
            }).apply(this, arguments);
    }
    function i(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object;
    }
    function s(e, t) {
        void 0 === e && (e = {}),
            void 0 === t && (t = {}),
            Object.keys(t).forEach(function (a) {
                void 0 === e[a] ? (e[a] = t[a]) : i(t[a]) && i(e[a]) && Object.keys(t[a]).length > 0 && s(e[a], t[a]);
            });
    }
    var a = {
        body: {},
        addEventListener: function () {},
        removeEventListener: function () {},
        activeElement: { blur: function () {}, nodeName: "" },
        querySelector: function () {
            return null;
        },
        querySelectorAll: function () {
            return [];
        },
        getElementById: function () {
            return null;
        },
        createEvent: function () {
            return { initEvent: function () {} };
        },
        createElement: function () {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function () {},
                getElementsByTagName: function () {
                    return [];
                },
            };
        },
        createElementNS: function () {
            return {};
        },
        importNode: function () {
            return null;
        },
        location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
    };
    function r() {
        var e = "undefined" != typeof document ? document : {};
        return s(e, a), e;
    }
    var n = {
        document: a,
        navigator: { userAgent: "" },
        location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
        history: { replaceState: function () {}, pushState: function () {}, go: function () {}, back: function () {} },
        CustomEvent: function () {
            return this;
        },
        addEventListener: function () {},
        removeEventListener: function () {},
        getComputedStyle: function () {
            return {
                getPropertyValue: function () {
                    return "";
                },
            };
        },
        Image: function () {},
        Date: function () {},
        screen: {},
        setTimeout: function () {},
        clearTimeout: function () {},
        matchMedia: function () {
            return {};
        },
        requestAnimationFrame: function (e) {
            return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
        },
        cancelAnimationFrame: function (e) {
            "undefined" != typeof setTimeout && clearTimeout(e);
        },
    };
    function o() {
        var e = "undefined" != typeof window ? window : {};
        return s(e, n), e;
    }
    function l(e) {
        return (l = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
    }
    function d(e, t) {
        return (d =
            Object.setPrototypeOf ||
            function (e, t) {
                return (e.__proto__ = t), e;
            })(e, t);
    }
    function h() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (e) {
            return !1;
        }
    }
    function p(e, t, i) {
        return (p = h()
            ? Reflect.construct
            : function (e, t, i) {
                  var s = [null];
                  s.push.apply(s, t);
                  var a = new (Function.bind.apply(e, s))();
                  return i && d(a, i.prototype), a;
              }).apply(null, arguments);
    }
    function u(e) {
        var t = "function" == typeof Map ? new Map() : void 0;
        return (u = function (e) {
            if (null === e || ((i = e), -1 === Function.toString.call(i).indexOf("[native code]"))) return e;
            var i;
            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, s);
            }
            function s() {
                return p(e, arguments, l(this).constructor);
            }
            return (s.prototype = Object.create(e.prototype, { constructor: { value: s, enumerable: !1, writable: !0, configurable: !0 } })), d(s, e);
        })(e);
    }
    var c = (function (e) {
        var t, i;
        function s(t) {
            var i, s, a;
            return (
                (i = e.call.apply(e, [this].concat(t)) || this),
                (s = (function (e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                })(i)),
                (a = s.__proto__),
                Object.defineProperty(s, "__proto__", {
                    get: function () {
                        return a;
                    },
                    set: function (e) {
                        a.__proto__ = e;
                    },
                }),
                i
            );
        }
        return (i = e), ((t = s).prototype = Object.create(i.prototype)), (t.prototype.constructor = t), (t.__proto__ = i), s;
    })(u(Array));
    function v(e) {
        void 0 === e && (e = []);
        var t = [];
        return (
            e.forEach(function (e) {
                Array.isArray(e) ? t.push.apply(t, v(e)) : t.push(e);
            }),
            t
        );
    }
    function f(e, t) {
        return Array.prototype.filter.call(e, t);
    }
    function m(e, t) {
        var i = o(),
            s = r(),
            a = [];
        if (!t && e instanceof c) return e;
        if (!e) return new c(a);
        if ("string" == typeof e) {
            var n = e.trim();
            if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
                var l = "div";
                0 === n.indexOf("<li") && (l = "ul"),
                    0 === n.indexOf("<tr") && (l = "tbody"),
                    (0 !== n.indexOf("<td") && 0 !== n.indexOf("<th")) || (l = "tr"),
                    0 === n.indexOf("<tbody") && (l = "table"),
                    0 === n.indexOf("<option") && (l = "select");
                var d = s.createElement(l);
                d.innerHTML = n;
                for (var h = 0; h < d.childNodes.length; h += 1) a.push(d.childNodes[h]);
            } else
                a = (function (e, t) {
                    if ("string" != typeof e) return [e];
                    for (var i = [], s = t.querySelectorAll(e), a = 0; a < s.length; a += 1) i.push(s[a]);
                    return i;
                })(e.trim(), t || s);
        } else if (e.nodeType || e === i || e === s) a.push(e);
        else if (Array.isArray(e)) {
            if (e instanceof c) return e;
            a = e;
        }
        return new c(
            (function (e) {
                for (var t = [], i = 0; i < e.length; i += 1) -1 === t.indexOf(e[i]) && t.push(e[i]);
                return t;
            })(a)
        );
    }
    m.fn = c.prototype;
    var g,
        y,
        C,
        w = {
            addClass: function () {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                var s = v(
                    t.map(function (e) {
                        return e.split(" ");
                    })
                );
                return (
                    this.forEach(function (e) {
                        var t;
                        (t = e.classList).add.apply(t, s);
                    }),
                    this
                );
            },
            removeClass: function () {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                var s = v(
                    t.map(function (e) {
                        return e.split(" ");
                    })
                );
                return (
                    this.forEach(function (e) {
                        var t;
                        (t = e.classList).remove.apply(t, s);
                    }),
                    this
                );
            },
            hasClass: function () {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                var s = v(
                    t.map(function (e) {
                        return e.split(" ");
                    })
                );
                return (
                    f(this, function (e) {
                        return (
                            s.filter(function (t) {
                                return e.classList.contains(t);
                            }).length > 0
                        );
                    }).length > 0
                );
            },
            toggleClass: function () {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                var s = v(
                    t.map(function (e) {
                        return e.split(" ");
                    })
                );
                this.forEach(function (e) {
                    s.forEach(function (t) {
                        e.classList.toggle(t);
                    });
                });
            },
            attr: function (e, t) {
                if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                for (var i = 0; i < this.length; i += 1)
                    if (2 === arguments.length) this[i].setAttribute(e, t);
                    else for (var s in e) (this[i][s] = e[s]), this[i].setAttribute(s, e[s]);
                return this;
            },
            removeAttr: function (e) {
                for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                return this;
            },
            transform: function (e) {
                for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
                return this;
            },
            transition: function (e) {
                for (var t = 0; t < this.length; t += 1) this[t].style.transition = "string" != typeof e ? e + "ms" : e;
                return this;
            },
            on: function () {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                var s = t[0],
                    a = t[1],
                    r = t[2],
                    n = t[3];
                function o(e) {
                    var t = e.target;
                    if (t) {
                        var i = e.target.dom7EventData || [];
                        if ((i.indexOf(e) < 0 && i.unshift(e), m(t).is(a))) r.apply(t, i);
                        else for (var s = m(t).parents(), n = 0; n < s.length; n += 1) m(s[n]).is(a) && r.apply(s[n], i);
                    }
                }
                function l(e) {
                    var t = (e && e.target && e.target.dom7EventData) || [];
                    t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
                }
                "function" == typeof t[1] && ((s = t[0]), (r = t[1]), (n = t[2]), (a = void 0)), n || (n = !1);
                for (var d, h = s.split(" "), p = 0; p < this.length; p += 1) {
                    var u = this[p];
                    if (a)
                        for (d = 0; d < h.length; d += 1) {
                            var c = h[d];
                            u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[c] || (u.dom7LiveListeners[c] = []), u.dom7LiveListeners[c].push({ listener: r, proxyListener: o }), u.addEventListener(c, o, n);
                        }
                    else
                        for (d = 0; d < h.length; d += 1) {
                            var v = h[d];
                            u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[v] || (u.dom7Listeners[v] = []), u.dom7Listeners[v].push({ listener: r, proxyListener: l }), u.addEventListener(v, l, n);
                        }
                }
                return this;
            },
            off: function () {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                var s = t[0],
                    a = t[1],
                    r = t[2],
                    n = t[3];
                "function" == typeof t[1] && ((s = t[0]), (r = t[1]), (n = t[2]), (a = void 0)), n || (n = !1);
                for (var o = s.split(" "), l = 0; l < o.length; l += 1)
                    for (var d = o[l], h = 0; h < this.length; h += 1) {
                        var p = this[h],
                            u = void 0;
                        if ((!a && p.dom7Listeners ? (u = p.dom7Listeners[d]) : a && p.dom7LiveListeners && (u = p.dom7LiveListeners[d]), u && u.length))
                            for (var c = u.length - 1; c >= 0; c -= 1) {
                                var v = u[c];
                                (r && v.listener === r) || (r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r)
                                    ? (p.removeEventListener(d, v.proxyListener, n), u.splice(c, 1))
                                    : r || (p.removeEventListener(d, v.proxyListener, n), u.splice(c, 1));
                            }
                    }
                return this;
            },
            trigger: function () {
                for (var e = o(), t = arguments.length, i = new Array(t), s = 0; s < t; s++) i[s] = arguments[s];
                for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1)
                    for (var l = a[n], d = 0; d < this.length; d += 1) {
                        var h = this[d];
                        if (e.CustomEvent) {
                            var p = new e.CustomEvent(l, { detail: r, bubbles: !0, cancelable: !0 });
                            (h.dom7EventData = i.filter(function (e, t) {
                                return t > 0;
                            })),
                                h.dispatchEvent(p),
                                (h.dom7EventData = []),
                                delete h.dom7EventData;
                        }
                    }
                return this;
            },
            transitionEnd: function (e) {
                var t = this;
                return (
                    e &&
                        t.on("transitionend", function i(s) {
                            s.target === this && (e.call(this, s), t.off("transitionend", i));
                        }),
                    this
                );
            },
            outerWidth: function (e) {
                if (this.length > 0) {
                    if (e) {
                        var t = this.styles();
                        return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
                    }
                    return this[0].offsetWidth;
                }
                return null;
            },
            outerHeight: function (e) {
                if (this.length > 0) {
                    if (e) {
                        var t = this.styles();
                        return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
                    }
                    return this[0].offsetHeight;
                }
                return null;
            },
            styles: function () {
                var e = o();
                return this[0] ? e.getComputedStyle(this[0], null) : {};
            },
            offset: function () {
                if (this.length > 0) {
                    var e = o(),
                        t = r(),
                        i = this[0],
                        s = i.getBoundingClientRect(),
                        a = t.body,
                        n = i.clientTop || a.clientTop || 0,
                        l = i.clientLeft || a.clientLeft || 0,
                        d = i === e ? e.scrollY : i.scrollTop,
                        h = i === e ? e.scrollX : i.scrollLeft;
                    return { top: s.top + d - n, left: s.left + h - l };
                }
                return null;
            },
            css: function (e, t) {
                var i,
                    s = o();
                if (1 === arguments.length) {
                    if ("string" != typeof e) {
                        for (i = 0; i < this.length; i += 1) for (var a in e) this[i].style[a] = e[a];
                        return this;
                    }
                    if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e);
                }
                if (2 === arguments.length && "string" == typeof e) {
                    for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
                    return this;
                }
                return this;
            },
            each: function (e) {
                return e
                    ? (this.forEach(function (t, i) {
                          e.apply(t, [t, i]);
                      }),
                      this)
                    : this;
            },
            html: function (e) {
                if (void 0 === e) return this[0] ? this[0].innerHTML : null;
                for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                return this;
            },
            text: function (e) {
                if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
                return this;
            },
            is: function (e) {
                var t,
                    i,
                    s = o(),
                    a = r(),
                    n = this[0];
                if (!n || void 0 === e) return !1;
                if ("string" == typeof e) {
                    if (n.matches) return n.matches(e);
                    if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
                    if (n.msMatchesSelector) return n.msMatchesSelector(e);
                    for (t = m(e), i = 0; i < t.length; i += 1) if (t[i] === n) return !0;
                    return !1;
                }
                if (e === a) return n === a;
                if (e === s) return n === s;
                if (e.nodeType || e instanceof c) {
                    for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1) if (t[i] === n) return !0;
                    return !1;
                }
                return !1;
            },
            index: function () {
                var e,
                    t = this[0];
                if (t) {
                    for (e = 0; null !== (t = t.previousSibling); ) 1 === t.nodeType && (e += 1);
                    return e;
                }
            },
            eq: function (e) {
                if (void 0 === e) return this;
                var t = this.length;
                if (e > t - 1) return m([]);
                if (e < 0) {
                    var i = t + e;
                    return m(i < 0 ? [] : [this[i]]);
                }
                return m([this[e]]);
            },
            append: function () {
                for (var e, t = r(), i = 0; i < arguments.length; i += 1) {
                    e = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                    for (var s = 0; s < this.length; s += 1)
                        if ("string" == typeof e) {
                            var a = t.createElement("div");
                            for (a.innerHTML = e; a.firstChild; ) this[s].appendChild(a.firstChild);
                        } else if (e instanceof c) for (var n = 0; n < e.length; n += 1) this[s].appendChild(e[n]);
                        else this[s].appendChild(e);
                }
                return this;
            },
            prepend: function (e) {
                var t,
                    i,
                    s = r();
                for (t = 0; t < this.length; t += 1)
                    if ("string" == typeof e) {
                        var a = s.createElement("div");
                        for (a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1) this[t].insertBefore(a.childNodes[i], this[t].childNodes[0]);
                    } else if (e instanceof c) for (i = 0; i < e.length; i += 1) this[t].insertBefore(e[i], this[t].childNodes[0]);
                    else this[t].insertBefore(e, this[t].childNodes[0]);
                return this;
            },
            next: function (e) {
                return this.length > 0 ? (e ? (this[0].nextElementSibling && m(this[0].nextElementSibling).is(e) ? m([this[0].nextElementSibling]) : m([])) : this[0].nextElementSibling ? m([this[0].nextElementSibling]) : m([])) : m([]);
            },
            nextAll: function (e) {
                var t = [],
                    i = this[0];
                if (!i) return m([]);
                for (; i.nextElementSibling; ) {
                    var s = i.nextElementSibling;
                    e ? m(s).is(e) && t.push(s) : t.push(s), (i = s);
                }
                return m(t);
            },
            prev: function (e) {
                if (this.length > 0) {
                    var t = this[0];
                    return e ? (t.previousElementSibling && m(t.previousElementSibling).is(e) ? m([t.previousElementSibling]) : m([])) : t.previousElementSibling ? m([t.previousElementSibling]) : m([]);
                }
                return m([]);
            },
            prevAll: function (e) {
                var t = [],
                    i = this[0];
                if (!i) return m([]);
                for (; i.previousElementSibling; ) {
                    var s = i.previousElementSibling;
                    e ? m(s).is(e) && t.push(s) : t.push(s), (i = s);
                }
                return m(t);
            },
            parent: function (e) {
                for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? m(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
                return m(t);
            },
            parents: function (e) {
                for (var t = [], i = 0; i < this.length; i += 1) for (var s = this[i].parentNode; s; ) e ? m(s).is(e) && t.push(s) : t.push(s), (s = s.parentNode);
                return m(t);
            },
            closest: function (e) {
                var t = this;
                return void 0 === e ? m([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
            },
            find: function (e) {
                for (var t = [], i = 0; i < this.length; i += 1) for (var s = this[i].querySelectorAll(e), a = 0; a < s.length; a += 1) t.push(s[a]);
                return m(t);
            },
            children: function (e) {
                for (var t = [], i = 0; i < this.length; i += 1) for (var s = this[i].children, a = 0; a < s.length; a += 1) (e && !m(s[a]).is(e)) || t.push(s[a]);
                return m(t);
            },
            filter: function (e) {
                return m(f(this, e));
            },
            remove: function () {
                for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this;
            },
        };
    function b(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function T() {
        return Date.now();
    }
    function S(e) {
        return "object" == typeof e && null !== e && e.constructor && e.constructor === Object;
    }
    function x() {
        for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = 1; t < arguments.length; t += 1) {
            var i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
            if (null != i)
                for (var s = Object.keys(Object(i)), a = 0, r = s.length; a < r; a += 1) {
                    var n = s[a],
                        o = Object.getOwnPropertyDescriptor(i, n);
                    void 0 !== o && o.enumerable && (S(e[n]) && S(i[n]) ? x(e[n], i[n]) : !S(e[n]) && S(i[n]) ? ((e[n] = {}), x(e[n], i[n])) : (e[n] = i[n]));
                }
        }
        return e;
    }
    function E(e, t) {
        Object.keys(t).forEach(function (i) {
            S(t[i]) &&
                Object.keys(t[i]).forEach(function (s) {
                    "function" == typeof t[i][s] && (t[i][s] = t[i][s].bind(e));
                }),
                (e[i] = t[i]);
        });
    }
    function M() {
        return (
            g ||
                (g = (function () {
                    var e = o(),
                        t = r();
                    return {
                        touch: !!("ontouchstart" in e || (e.DocumentTouch && t instanceof e.DocumentTouch)),
                        pointerEvents: !!e.PointerEvent && "maxTouchPoints" in e.navigator && e.navigator.maxTouchPoints >= 0,
                        observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
                        passiveListener: (function () {
                            var t = !1;
                            try {
                                var i = Object.defineProperty({}, "passive", {
                                    get: function () {
                                        t = !0;
                                    },
                                });
                                e.addEventListener("testPassiveListener", null, i);
                            } catch (e) {}
                            return t;
                        })(),
                        gestures: "ongesturestart" in e,
                    };
                })()),
            g
        );
    }
    function P(e) {
        return (
            void 0 === e && (e = {}),
            y ||
                (y = (function (e) {
                    var t = (void 0 === e ? {} : e).userAgent,
                        i = M(),
                        s = o(),
                        a = s.navigator.platform,
                        r = t || s.navigator.userAgent,
                        n = { ios: !1, android: !1 },
                        l = s.screen.width,
                        d = s.screen.height,
                        h = r.match(/(Android);?[\s\/]+([\d.]+)?/),
                        p = r.match(/(iPad).*OS\s([\d_]+)/),
                        u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
                        c = !p && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                        v = "Win32" === a,
                        f = "MacIntel" === a;
                    return (
                        !p &&
                            f &&
                            i.touch &&
                            ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768"].indexOf(l + "x" + d) >= 0 &&
                            ((p = r.match(/(Version)\/([\d.]+)/)) || (p = [0, 1, "13_0_0"]), (f = !1)),
                        h && !v && ((n.os = "android"), (n.android = !0)),
                        (p || c || u) && ((n.os = "ios"), (n.ios = !0)),
                        n
                    );
                })(e)),
            y
        );
    }
    function k() {
        return (
            C ||
                (C = (function () {
                    var e,
                        t = o();
                    return {
                        isEdge: !!t.navigator.userAgent.match(/Edge/g),
                        isSafari: ((e = t.navigator.userAgent.toLowerCase()), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
                        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent),
                    };
                })()),
            C
        );
    }
    Object.keys(w).forEach(function (e) {
        m.fn[e] = w[e];
    });
    var L = {
            name: "resize",
            create: function () {
                var e = this;
                x(e, {
                    resize: {
                        resizeHandler: function () {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
                        },
                        orientationChangeHandler: function () {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange");
                        },
                    },
                });
            },
            on: {
                init: function (e) {
                    var t = o();
                    t.addEventListener("resize", e.resize.resizeHandler), t.addEventListener("orientationchange", e.resize.orientationChangeHandler);
                },
                destroy: function (e) {
                    var t = o();
                    t.removeEventListener("resize", e.resize.resizeHandler), t.removeEventListener("orientationchange", e.resize.orientationChangeHandler);
                },
            },
        },
        z = {
            attach: function (e, t) {
                void 0 === t && (t = {});
                var i = o(),
                    s = this,
                    a = new (i.MutationObserver || i.WebkitMutationObserver)(function (e) {
                        if (1 !== e.length) {
                            var t = function () {
                                s.emit("observerUpdate", e[0]);
                            };
                            i.requestAnimationFrame ? i.requestAnimationFrame(t) : i.setTimeout(t, 0);
                        } else s.emit("observerUpdate", e[0]);
                    });
                a.observe(e, { attributes: void 0 === t.attributes || t.attributes, childList: void 0 === t.childList || t.childList, characterData: void 0 === t.characterData || t.characterData }), s.observer.observers.push(a);
            },
            init: function () {
                if (this.support.observer && this.params.observer) {
                    if (this.params.observeParents) for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
                    this.observer.attach(this.$el[0], { childList: this.params.observeSlideChildren }), this.observer.attach(this.$wrapperEl[0], { attributes: !1 });
                }
            },
            destroy: function () {
                this.observer.observers.forEach(function (e) {
                    e.disconnect();
                }),
                    (this.observer.observers = []);
            },
        },
        O = {
            name: "observer",
            params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
            create: function () {
                E(this, { observer: t(t({}, z), {}, { observers: [] }) });
            },
            on: {
                init: function (e) {
                    e.observer.init();
                },
                destroy: function (e) {
                    e.observer.destroy();
                },
            },
        };
    function I(e) {
        var t = r(),
            i = o(),
            s = this.touchEventsData,
            a = this.params,
            n = this.touches;
        if (!this.animating || !a.preventInteractionOnTransition) {
            var l = e;
            l.originalEvent && (l = l.originalEvent);
            var d = m(l.target);
            if (
                ("wrapper" !== a.touchEventsTarget || d.closest(this.wrapperEl).length) &&
                ((s.isTouchEvent = "touchstart" === l.type), (s.isTouchEvent || !("which" in l) || 3 !== l.which) && !((!s.isTouchEvent && "button" in l && l.button > 0) || (s.isTouched && s.isMoved)))
            )
                if (a.noSwiping && d.closest(a.noSwipingSelector ? a.noSwipingSelector : "." + a.noSwipingClass)[0]) this.allowClick = !0;
                else if (!a.swipeHandler || d.closest(a.swipeHandler)[0]) {
                    (n.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX), (n.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
                    var h = n.currentX,
                        p = n.currentY,
                        u = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
                        c = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
                    if (!u || !(h <= c || h >= i.screen.width - c)) {
                        if (
                            (x(s, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
                            (n.startX = h),
                            (n.startY = p),
                            (s.touchStartTime = T()),
                            (this.allowClick = !0),
                            this.updateSize(),
                            (this.swipeDirection = void 0),
                            a.threshold > 0 && (s.allowThresholdMove = !1),
                            "touchstart" !== l.type)
                        ) {
                            var v = !0;
                            d.is(s.formElements) && (v = !1), t.activeElement && m(t.activeElement).is(s.formElements) && t.activeElement !== d[0] && t.activeElement.blur();
                            var f = v && this.allowTouchMove && a.touchStartPreventDefault;
                            (a.touchStartForcePreventDefault || f) && l.preventDefault();
                        }
                        this.emit("touchStart", l);
                    }
                }
        }
    }
    function A(e) {
        var t = r(),
            i = this.touchEventsData,
            s = this.params,
            a = this.touches,
            n = this.rtlTranslate,
            o = e;
        if ((o.originalEvent && (o = o.originalEvent), i.isTouched)) {
            if (!i.isTouchEvent || "touchmove" === o.type) {
                var l = "touchmove" === o.type && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0]),
                    d = "touchmove" === o.type ? l.pageX : o.pageX,
                    h = "touchmove" === o.type ? l.pageY : o.pageY;
                if (o.preventedByNestedSwiper) return (a.startX = d), void (a.startY = h);
                if (!this.allowTouchMove) return (this.allowClick = !1), void (i.isTouched && (x(a, { startX: d, startY: h, currentX: d, currentY: h }), (i.touchStartTime = T())));
                if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
                    if (this.isVertical()) {
                        if ((h < a.startY && this.translate <= this.maxTranslate()) || (h > a.startY && this.translate >= this.minTranslate())) return (i.isTouched = !1), void (i.isMoved = !1);
                    } else if ((d < a.startX && this.translate <= this.maxTranslate()) || (d > a.startX && this.translate >= this.minTranslate())) return;
                if (i.isTouchEvent && t.activeElement && o.target === t.activeElement && m(o.target).is(i.formElements)) return (i.isMoved = !0), void (this.allowClick = !1);
                if ((i.allowTouchCallbacks && this.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1))) {
                    (a.currentX = d), (a.currentY = h);
                    var p = a.currentX - a.startX,
                        u = a.currentY - a.startY;
                    if (!(this.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(u, 2)) < this.params.threshold)) {
                        var c;
                        if (void 0 === i.isScrolling)
                            (this.isHorizontal() && a.currentY === a.startY) || (this.isVertical() && a.currentX === a.startX)
                                ? (i.isScrolling = !1)
                                : p * p + u * u >= 25 && ((c = (180 * Math.atan2(Math.abs(u), Math.abs(p))) / Math.PI), (i.isScrolling = this.isHorizontal() ? c > s.touchAngle : 90 - c > s.touchAngle));
                        if ((i.isScrolling && this.emit("touchMoveOpposite", o), void 0 === i.startMoving && ((a.currentX === a.startX && a.currentY === a.startY) || (i.startMoving = !0)), i.isScrolling)) i.isTouched = !1;
                        else if (i.startMoving) {
                            (this.allowClick = !1),
                                !s.cssMode && o.cancelable && o.preventDefault(),
                                s.touchMoveStopPropagation && !s.nested && o.stopPropagation(),
                                i.isMoved ||
                                    (s.loop && this.loopFix(),
                                    (i.startTranslate = this.getTranslate()),
                                    this.setTransition(0),
                                    this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                                    (i.allowMomentumBounce = !1),
                                    !s.grabCursor || (!0 !== this.allowSlideNext && !0 !== this.allowSlidePrev) || this.setGrabCursor(!0),
                                    this.emit("sliderFirstMove", o)),
                                this.emit("sliderMove", o),
                                (i.isMoved = !0);
                            var v = this.isHorizontal() ? p : u;
                            (a.diff = v), (v *= s.touchRatio), n && (v = -v), (this.swipeDirection = v > 0 ? "prev" : "next"), (i.currentTranslate = v + i.startTranslate);
                            var f = !0,
                                g = s.resistanceRatio;
                            if (
                                (s.touchReleaseOnEdges && (g = 0),
                                v > 0 && i.currentTranslate > this.minTranslate()
                                    ? ((f = !1), s.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + v, g)))
                                    : v < 0 && i.currentTranslate < this.maxTranslate() && ((f = !1), s.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - v, g))),
                                f && (o.preventedByNestedSwiper = !0),
                                !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
                                !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
                                s.threshold > 0)
                            ) {
                                if (!(Math.abs(v) > s.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                                if (!i.allowThresholdMove)
                                    return (
                                        (i.allowThresholdMove = !0),
                                        (a.startX = a.currentX),
                                        (a.startY = a.currentY),
                                        (i.currentTranslate = i.startTranslate),
                                        void (a.diff = this.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
                                    );
                            }
                            s.followFinger &&
                                !s.cssMode &&
                                ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()),
                                s.freeMode &&
                                    (0 === i.velocities.length && i.velocities.push({ position: a[this.isHorizontal() ? "startX" : "startY"], time: i.touchStartTime }),
                                    i.velocities.push({ position: a[this.isHorizontal() ? "currentX" : "currentY"], time: T() })),
                                this.updateProgress(i.currentTranslate),
                                this.setTranslate(i.currentTranslate));
                        }
                    }
                }
            }
        } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", o);
    }
    function B(e) {
        var t = this,
            i = t.touchEventsData,
            s = t.params,
            a = t.touches,
            r = t.rtlTranslate,
            n = t.$wrapperEl,
            o = t.slidesGrid,
            l = t.snapGrid,
            d = e;
        if ((d.originalEvent && (d = d.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", d), (i.allowTouchCallbacks = !1), !i.isTouched))
            return i.isMoved && s.grabCursor && t.setGrabCursor(!1), (i.isMoved = !1), void (i.startMoving = !1);
        s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        var h,
            p = T(),
            u = p - i.touchStartTime;
        if (
            (t.allowClick && (t.updateClickedSlide(d), t.emit("tap click", d), u < 300 && p - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)),
            (i.lastClickTime = T()),
            b(function () {
                t.destroyed || (t.allowClick = !0);
            }),
            !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate)
        )
            return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
        if (((i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1), (h = s.followFinger ? (r ? t.translate : -t.translate) : -i.currentTranslate), !s.cssMode))
            if (s.freeMode) {
                if (h < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                if (h > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                if (s.freeModeMomentum) {
                    if (i.velocities.length > 1) {
                        var c = i.velocities.pop(),
                            v = i.velocities.pop(),
                            f = c.position - v.position,
                            m = c.time - v.time;
                        (t.velocity = f / m), (t.velocity /= 2), Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (m > 150 || T() - c.time > 300) && (t.velocity = 0);
                    } else t.velocity = 0;
                    (t.velocity *= s.freeModeMomentumVelocityRatio), (i.velocities.length = 0);
                    var g = 1e3 * s.freeModeMomentumRatio,
                        y = t.velocity * g,
                        C = t.translate + y;
                    r && (C = -C);
                    var w,
                        S,
                        x = !1,
                        E = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
                    if (C < t.maxTranslate())
                        s.freeModeMomentumBounce ? (C + t.maxTranslate() < -E && (C = t.maxTranslate() - E), (w = t.maxTranslate()), (x = !0), (i.allowMomentumBounce = !0)) : (C = t.maxTranslate()), s.loop && s.centeredSlides && (S = !0);
                    else if (C > t.minTranslate())
                        s.freeModeMomentumBounce ? (C - t.minTranslate() > E && (C = t.minTranslate() + E), (w = t.minTranslate()), (x = !0), (i.allowMomentumBounce = !0)) : (C = t.minTranslate()), s.loop && s.centeredSlides && (S = !0);
                    else if (s.freeModeSticky) {
                        for (var M, P = 0; P < l.length; P += 1)
                            if (l[P] > -C) {
                                M = P;
                                break;
                            }
                        C = -(C = Math.abs(l[M] - C) < Math.abs(l[M - 1] - C) || "next" === t.swipeDirection ? l[M] : l[M - 1]);
                    }
                    if (
                        (S &&
                            t.once("transitionEnd", function () {
                                t.loopFix();
                            }),
                        0 !== t.velocity)
                    ) {
                        if (((g = r ? Math.abs((-C - t.translate) / t.velocity) : Math.abs((C - t.translate) / t.velocity)), s.freeModeSticky)) {
                            var k = Math.abs((r ? -C : C) - t.translate),
                                L = t.slidesSizesGrid[t.activeIndex];
                            g = k < L ? s.speed : k < 2 * L ? 1.5 * s.speed : 2.5 * s.speed;
                        }
                    } else if (s.freeModeSticky) return void t.slideToClosest();
                    s.freeModeMomentumBounce && x
                        ? (t.updateProgress(w),
                          t.setTransition(g),
                          t.setTranslate(C),
                          t.transitionStart(!0, t.swipeDirection),
                          (t.animating = !0),
                          n.transitionEnd(function () {
                              t &&
                                  !t.destroyed &&
                                  i.allowMomentumBounce &&
                                  (t.emit("momentumBounce"),
                                  t.setTransition(s.speed),
                                  setTimeout(function () {
                                      t.setTranslate(w),
                                          n.transitionEnd(function () {
                                              t && !t.destroyed && t.transitionEnd();
                                          });
                                  }, 0));
                          }))
                        : t.velocity
                        ? (t.updateProgress(C),
                          t.setTransition(g),
                          t.setTranslate(C),
                          t.transitionStart(!0, t.swipeDirection),
                          t.animating ||
                              ((t.animating = !0),
                              n.transitionEnd(function () {
                                  t && !t.destroyed && t.transitionEnd();
                              })))
                        : t.updateProgress(C),
                        t.updateActiveIndex(),
                        t.updateSlidesClasses();
                } else if (s.freeModeSticky) return void t.slideToClosest();
                (!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
            } else {
                for (var z = 0, O = t.slidesSizesGrid[0], I = 0; I < o.length; I += I < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
                    var A = I < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                    void 0 !== o[I + A] ? h >= o[I] && h < o[I + A] && ((z = I), (O = o[I + A] - o[I])) : h >= o[I] && ((z = I), (O = o[o.length - 1] - o[o.length - 2]));
                }
                var B = (h - o[z]) / O,
                    D = z < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                if (u > s.longSwipesMs) {
                    if (!s.longSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && (B >= s.longSwipesRatio ? t.slideTo(z + D) : t.slideTo(z)), "prev" === t.swipeDirection && (B > 1 - s.longSwipesRatio ? t.slideTo(z + D) : t.slideTo(z));
                } else {
                    if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
                    t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl)
                        ? d.target === t.navigation.nextEl
                            ? t.slideTo(z + D)
                            : t.slideTo(z)
                        : ("next" === t.swipeDirection && t.slideTo(z + D), "prev" === t.swipeDirection && t.slideTo(z));
                }
            }
    }
    function D() {
        var e = this.params,
            t = this.el;
        if (!t || 0 !== t.offsetWidth) {
            e.breakpoints && this.setBreakpoint();
            var i = this.allowSlideNext,
                s = this.allowSlidePrev,
                a = this.snapGrid;
            (this.allowSlideNext = !0),
                (this.allowSlidePrev = !0),
                this.updateSize(),
                this.updateSlides(),
                this.updateSlidesClasses(),
                ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.isBeginning && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0),
                this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(),
                (this.allowSlidePrev = s),
                (this.allowSlideNext = i),
                this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow();
        }
    }
    function G(e) {
        this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
    }
    function N() {
        var e = this.wrapperEl,
            t = this.rtlTranslate;
        (this.previousTranslate = this.translate),
            this.isHorizontal() ? (this.translate = t ? e.scrollWidth - e.offsetWidth - e.scrollLeft : -e.scrollLeft) : (this.translate = -e.scrollTop),
            -0 === this.translate && (this.translate = 0),
            this.updateActiveIndex(),
            this.updateSlidesClasses();
        var i = this.maxTranslate() - this.minTranslate();
        (0 === i ? 0 : (this.translate - this.minTranslate()) / i) !== this.progress && this.updateProgress(t ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1);
    }
    var $ = !1;
    function F() {}
    var V = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            width: null,
            height: null,
            preventInteractionOnTransition: !1,
            userAgent: null,
            url: null,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: 0.02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: 0.85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            loopPreventsSlide: !0,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0,
            _emitClasses: !1,
        },
        H = {
            modular: {
                useParams: function (e) {
                    var t = this;
                    t.modules &&
                        Object.keys(t.modules).forEach(function (i) {
                            var s = t.modules[i];
                            s.params && x(e, s.params);
                        });
                },
                useModules: function (e) {
                    void 0 === e && (e = {});
                    var t = this;
                    t.modules &&
                        Object.keys(t.modules).forEach(function (i) {
                            var s = t.modules[i],
                                a = e[i] || {};
                            s.on &&
                                t.on &&
                                Object.keys(s.on).forEach(function (e) {
                                    t.on(e, s.on[e]);
                                }),
                                s.create && s.create.bind(t)(a);
                        });
                },
            },
            eventsEmitter: {
                on: function (e, t, i) {
                    var s = this;
                    if ("function" != typeof t) return s;
                    var a = i ? "unshift" : "push";
                    return (
                        e.split(" ").forEach(function (e) {
                            s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t);
                        }),
                        s
                    );
                },
                once: function (e, t, i) {
                    var s = this;
                    if ("function" != typeof t) return s;
                    function a() {
                        s.off(e, a), a.__emitterProxy && delete a.__emitterProxy;
                        for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
                        t.apply(s, r);
                    }
                    return (a.__emitterProxy = t), s.on(e, a, i);
                },
                onAny: function (e, t) {
                    if ("function" != typeof e) return this;
                    var i = t ? "unshift" : "push";
                    return this.eventsAnyListeners.indexOf(e) < 0 && this.eventsAnyListeners[i](e), this;
                },
                offAny: function (e) {
                    if (!this.eventsAnyListeners) return this;
                    var t = this.eventsAnyListeners.indexOf(e);
                    return t >= 0 && this.eventsAnyListeners.splice(t, 1), this;
                },
                off: function (e, t) {
                    var i = this;
                    return i.eventsListeners
                        ? (e.split(" ").forEach(function (e) {
                              void 0 === t
                                  ? (i.eventsListeners[e] = [])
                                  : i.eventsListeners[e] &&
                                    i.eventsListeners[e].forEach(function (s, a) {
                                        (s === t || (s.__emitterProxy && s.__emitterProxy === t)) && i.eventsListeners[e].splice(a, 1);
                                    });
                          }),
                          i)
                        : i;
                },
                emit: function () {
                    var e,
                        t,
                        i,
                        s = this;
                    if (!s.eventsListeners) return s;
                    for (var a = arguments.length, r = new Array(a), n = 0; n < a; n++) r[n] = arguments[n];
                    "string" == typeof r[0] || Array.isArray(r[0]) ? ((e = r[0]), (t = r.slice(1, r.length)), (i = s)) : ((e = r[0].events), (t = r[0].data), (i = r[0].context || s)), t.unshift(i);
                    var o = Array.isArray(e) ? e : e.split(" ");
                    return (
                        o.forEach(function (e) {
                            if (
                                (s.eventsAnyListeners &&
                                    s.eventsAnyListeners.length &&
                                    s.eventsAnyListeners.forEach(function (s) {
                                        s.apply(i, [e].concat(t));
                                    }),
                                s.eventsListeners && s.eventsListeners[e])
                            ) {
                                var a = [];
                                s.eventsListeners[e].forEach(function (e) {
                                    a.push(e);
                                }),
                                    a.forEach(function (e) {
                                        e.apply(i, t);
                                    });
                            }
                        }),
                        s
                    );
                },
            },
            update: {
                updateSize: function () {
                    var e,
                        t,
                        i = this.$el;
                    (e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i[0].clientWidth),
                        (t = void 0 !== this.params.height && null !== this.params.width ? this.params.height : i[0].clientHeight),
                        (0 === e && this.isHorizontal()) ||
                            (0 === t && this.isVertical()) ||
                            ((e = e - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10)),
                            (t = t - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10)),
                            Number.isNaN(e) && (e = 0),
                            Number.isNaN(t) && (t = 0),
                            x(this, { width: e, height: t, size: this.isHorizontal() ? e : t }));
                },
                updateSlides: function () {
                    var e = o(),
                        t = this.params,
                        i = this.$wrapperEl,
                        s = this.size,
                        a = this.rtlTranslate,
                        r = this.wrongRTL,
                        n = this.virtual && t.virtual.enabled,
                        l = n ? this.virtual.slides.length : this.slides.length,
                        d = i.children("." + this.params.slideClass),
                        h = n ? this.virtual.slides.length : d.length,
                        p = [],
                        u = [],
                        c = [];
                    function v(e, i) {
                        return !t.cssMode || i !== d.length - 1;
                    }
                    var f = t.slidesOffsetBefore;
                    "function" == typeof f && (f = t.slidesOffsetBefore.call(this));
                    var m = t.slidesOffsetAfter;
                    "function" == typeof m && (m = t.slidesOffsetAfter.call(this));
                    var g = this.snapGrid.length,
                        y = this.snapGrid.length,
                        C = t.spaceBetween,
                        w = -f,
                        b = 0,
                        T = 0;
                    if (void 0 !== s) {
                        var S, E;
                        "string" == typeof C && C.indexOf("%") >= 0 && (C = (parseFloat(C.replace("%", "")) / 100) * s),
                            (this.virtualSize = -C),
                            a ? d.css({ marginLeft: "", marginTop: "" }) : d.css({ marginRight: "", marginBottom: "" }),
                            t.slidesPerColumn > 1 &&
                                ((S = Math.floor(h / t.slidesPerColumn) === h / this.params.slidesPerColumn ? h : Math.ceil(h / t.slidesPerColumn) * t.slidesPerColumn),
                                "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (S = Math.max(S, t.slidesPerView * t.slidesPerColumn)));
                        for (var M, P = t.slidesPerColumn, k = S / P, L = Math.floor(h / t.slidesPerColumn), z = 0; z < h; z += 1) {
                            E = 0;
                            var O = d.eq(z);
                            if (t.slidesPerColumn > 1) {
                                var I = void 0,
                                    A = void 0,
                                    B = void 0;
                                if ("row" === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
                                    var D = Math.floor(z / (t.slidesPerGroup * t.slidesPerColumn)),
                                        G = z - t.slidesPerColumn * t.slidesPerGroup * D,
                                        N = 0 === D ? t.slidesPerGroup : Math.min(Math.ceil((h - D * P * t.slidesPerGroup) / P), t.slidesPerGroup);
                                    (I = (A = G - (B = Math.floor(G / N)) * N + D * t.slidesPerGroup) + (B * S) / P), O.css({ "-webkit-box-ordinal-group": I, "-moz-box-ordinal-group": I, "-ms-flex-order": I, "-webkit-order": I, order: I });
                                } else "column" === t.slidesPerColumnFill ? ((B = z - (A = Math.floor(z / P)) * P), (A > L || (A === L && B === P - 1)) && (B += 1) >= P && ((B = 0), (A += 1))) : (A = z - (B = Math.floor(z / k)) * k);
                                O.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== B && t.spaceBetween && t.spaceBetween + "px");
                            }
                            if ("none" !== O.css("display")) {
                                if ("auto" === t.slidesPerView) {
                                    var $ = e.getComputedStyle(O[0], null),
                                        F = O[0].style.transform,
                                        V = O[0].style.webkitTransform;
                                    if ((F && (O[0].style.transform = "none"), V && (O[0].style.webkitTransform = "none"), t.roundLengths)) E = this.isHorizontal() ? O.outerWidth(!0) : O.outerHeight(!0);
                                    else if (this.isHorizontal()) {
                                        var H = parseFloat($.getPropertyValue("width") || 0),
                                            j = parseFloat($.getPropertyValue("padding-left") || 0),
                                            _ = parseFloat($.getPropertyValue("padding-right") || 0),
                                            W = parseFloat($.getPropertyValue("margin-left") || 0),
                                            R = parseFloat($.getPropertyValue("margin-right") || 0),
                                            q = $.getPropertyValue("box-sizing");
                                        E = q && "border-box" === q ? H + W + R : H + j + _ + W + R;
                                    } else {
                                        var X = parseFloat($.getPropertyValue("height") || 0),
                                            Y = parseFloat($.getPropertyValue("padding-top") || 0),
                                            U = parseFloat($.getPropertyValue("padding-bottom") || 0),
                                            K = parseFloat($.getPropertyValue("margin-top") || 0),
                                            J = parseFloat($.getPropertyValue("margin-bottom") || 0),
                                            Q = $.getPropertyValue("box-sizing");
                                        E = Q && "border-box" === Q ? X + K + J : X + Y + U + K + J;
                                    }
                                    F && (O[0].style.transform = F), V && (O[0].style.webkitTransform = V), t.roundLengths && (E = Math.floor(E));
                                } else (E = (s - (t.slidesPerView - 1) * C) / t.slidesPerView), t.roundLengths && (E = Math.floor(E)), d[z] && (this.isHorizontal() ? (d[z].style.width = E + "px") : (d[z].style.height = E + "px"));
                                d[z] && (d[z].swiperSlideSize = E),
                                    c.push(E),
                                    t.centeredSlides
                                        ? ((w = w + E / 2 + b / 2 + C),
                                          0 === b && 0 !== z && (w = w - s / 2 - C),
                                          0 === z && (w = w - s / 2 - C),
                                          Math.abs(w) < 0.001 && (w = 0),
                                          t.roundLengths && (w = Math.floor(w)),
                                          T % t.slidesPerGroup == 0 && p.push(w),
                                          u.push(w))
                                        : (t.roundLengths && (w = Math.floor(w)), (T - Math.min(this.params.slidesPerGroupSkip, T)) % this.params.slidesPerGroup == 0 && p.push(w), u.push(w), (w = w + E + C)),
                                    (this.virtualSize += E + C),
                                    (b = E),
                                    (T += 1);
                            }
                        }
                        if (
                            ((this.virtualSize = Math.max(this.virtualSize, s) + m),
                            a && r && ("slide" === t.effect || "coverflow" === t.effect) && i.css({ width: this.virtualSize + t.spaceBetween + "px" }),
                            t.setWrapperSize && (this.isHorizontal() ? i.css({ width: this.virtualSize + t.spaceBetween + "px" }) : i.css({ height: this.virtualSize + t.spaceBetween + "px" })),
                            t.slidesPerColumn > 1 &&
                                ((this.virtualSize = (E + t.spaceBetween) * S),
                                (this.virtualSize = Math.ceil(this.virtualSize / t.slidesPerColumn) - t.spaceBetween),
                                this.isHorizontal() ? i.css({ width: this.virtualSize + t.spaceBetween + "px" }) : i.css({ height: this.virtualSize + t.spaceBetween + "px" }),
                                t.centeredSlides))
                        ) {
                            M = [];
                            for (var Z = 0; Z < p.length; Z += 1) {
                                var ee = p[Z];
                                t.roundLengths && (ee = Math.floor(ee)), p[Z] < this.virtualSize + p[0] && M.push(ee);
                            }
                            p = M;
                        }
                        if (!t.centeredSlides) {
                            M = [];
                            for (var te = 0; te < p.length; te += 1) {
                                var ie = p[te];
                                t.roundLengths && (ie = Math.floor(ie)), p[te] <= this.virtualSize - s && M.push(ie);
                            }
                            (p = M), Math.floor(this.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 && p.push(this.virtualSize - s);
                        }
                        if (
                            (0 === p.length && (p = [0]),
                            0 !== t.spaceBetween && (this.isHorizontal() ? (a ? d.filter(v).css({ marginLeft: C + "px" }) : d.filter(v).css({ marginRight: C + "px" })) : d.filter(v).css({ marginBottom: C + "px" })),
                            t.centeredSlides && t.centeredSlidesBounds)
                        ) {
                            var se = 0;
                            c.forEach(function (e) {
                                se += e + (t.spaceBetween ? t.spaceBetween : 0);
                            });
                            var ae = (se -= t.spaceBetween) - s;
                            p = p.map(function (e) {
                                return e < 0 ? -f : e > ae ? ae + m : e;
                            });
                        }
                        if (t.centerInsufficientSlides) {
                            var re = 0;
                            if (
                                (c.forEach(function (e) {
                                    re += e + (t.spaceBetween ? t.spaceBetween : 0);
                                }),
                                (re -= t.spaceBetween) < s)
                            ) {
                                var ne = (s - re) / 2;
                                p.forEach(function (e, t) {
                                    p[t] = e - ne;
                                }),
                                    u.forEach(function (e, t) {
                                        u[t] = e + ne;
                                    });
                            }
                        }
                        x(this, { slides: d, snapGrid: p, slidesGrid: u, slidesSizesGrid: c }),
                            h !== l && this.emit("slidesLengthChange"),
                            p.length !== g && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")),
                            u.length !== y && this.emit("slidesGridLengthChange"),
                            (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesOffset();
                    }
                },
                updateAutoHeight: function (e) {
                    var t,
                        i = [],
                        s = 0;
                    if (("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1))
                        if (this.params.centeredSlides)
                            this.visibleSlides.each(function (e) {
                                i.push(e);
                            });
                        else
                            for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
                                var a = this.activeIndex + t;
                                if (a > this.slides.length) break;
                                i.push(this.slides.eq(a)[0]);
                            }
                    else i.push(this.slides.eq(this.activeIndex)[0]);
                    for (t = 0; t < i.length; t += 1)
                        if (void 0 !== i[t]) {
                            var r = i[t].offsetHeight;
                            s = r > s ? r : s;
                        }
                    s && this.$wrapperEl.css("height", s + "px");
                },
                updateSlidesOffset: function () {
                    for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
                },
                updateSlidesProgress: function (e) {
                    void 0 === e && (e = (this && this.translate) || 0);
                    var t = this.params,
                        i = this.slides,
                        s = this.rtlTranslate;
                    if (0 !== i.length) {
                        void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                        var a = -e;
                        s && (a = e), i.removeClass(t.slideVisibleClass), (this.visibleSlidesIndexes = []), (this.visibleSlides = []);
                        for (var r = 0; r < i.length; r += 1) {
                            var n = i[r],
                                o = (a + (t.centeredSlides ? this.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + t.spaceBetween);
                            if (t.watchSlidesVisibility || (t.centeredSlides && t.autoHeight)) {
                                var l = -(a - n.swiperSlideOffset),
                                    d = l + this.slidesSizesGrid[r];
                                ((l >= 0 && l < this.size - 1) || (d > 1 && d <= this.size) || (l <= 0 && d >= this.size)) && (this.visibleSlides.push(n), this.visibleSlidesIndexes.push(r), i.eq(r).addClass(t.slideVisibleClass));
                            }
                            n.progress = s ? -o : o;
                        }
                        this.visibleSlides = m(this.visibleSlides);
                    }
                },
                updateProgress: function (e) {
                    if (void 0 === e) {
                        var t = this.rtlTranslate ? -1 : 1;
                        e = (this && this.translate && this.translate * t) || 0;
                    }
                    var i = this.params,
                        s = this.maxTranslate() - this.minTranslate(),
                        a = this.progress,
                        r = this.isBeginning,
                        n = this.isEnd,
                        o = r,
                        l = n;
                    0 === s ? ((a = 0), (r = !0), (n = !0)) : ((r = (a = (e - this.minTranslate()) / s) <= 0), (n = a >= 1)),
                        x(this, { progress: a, isBeginning: r, isEnd: n }),
                        (i.watchSlidesProgress || i.watchSlidesVisibility || (i.centeredSlides && i.autoHeight)) && this.updateSlidesProgress(e),
                        r && !o && this.emit("reachBeginning toEdge"),
                        n && !l && this.emit("reachEnd toEdge"),
                        ((o && !r) || (l && !n)) && this.emit("fromEdge"),
                        this.emit("progress", a);
                },
                updateSlidesClasses: function () {
                    var e,
                        t = this.slides,
                        i = this.params,
                        s = this.$wrapperEl,
                        a = this.activeIndex,
                        r = this.realIndex,
                        n = this.virtual && i.virtual.enabled;
                    t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass),
                        (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass),
                        i.loop &&
                            (e.hasClass(i.slideDuplicateClass)
                                ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass)
                                : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
                    var o = e
                        .nextAll("." + i.slideClass)
                        .eq(0)
                        .addClass(i.slideNextClass);
                    i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
                    var l = e
                        .prevAll("." + i.slideClass)
                        .eq(0)
                        .addClass(i.slidePrevClass);
                    i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass),
                        i.loop &&
                            (o.hasClass(i.slideDuplicateClass)
                                ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass)
                                : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass),
                            l.hasClass(i.slideDuplicateClass)
                                ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)
                                : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)),
                        this.emitSlidesClasses();
                },
                updateActiveIndex: function (e) {
                    var t,
                        i = this.rtlTranslate ? this.translate : -this.translate,
                        s = this.slidesGrid,
                        a = this.snapGrid,
                        r = this.params,
                        n = this.activeIndex,
                        o = this.realIndex,
                        l = this.snapIndex,
                        d = e;
                    if (void 0 === d) {
                        for (var h = 0; h < s.length; h += 1) void 0 !== s[h + 1] ? (i >= s[h] && i < s[h + 1] - (s[h + 1] - s[h]) / 2 ? (d = h) : i >= s[h] && i < s[h + 1] && (d = h + 1)) : i >= s[h] && (d = h);
                        r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
                    }
                    if (a.indexOf(i) >= 0) t = a.indexOf(i);
                    else {
                        var p = Math.min(r.slidesPerGroupSkip, d);
                        t = p + Math.floor((d - p) / r.slidesPerGroup);
                    }
                    if ((t >= a.length && (t = a.length - 1), d !== n)) {
                        var u = parseInt(this.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
                        x(this, { snapIndex: t, realIndex: u, previousIndex: n, activeIndex: d }),
                            this.emit("activeIndexChange"),
                            this.emit("snapIndexChange"),
                            o !== u && this.emit("realIndexChange"),
                            (this.initialized || this.params.runCallbacksOnInit) && this.emit("slideChange");
                    } else t !== l && ((this.snapIndex = t), this.emit("snapIndexChange"));
                },
                updateClickedSlide: function (e) {
                    var t = this.params,
                        i = m(e.target).closest("." + t.slideClass)[0],
                        s = !1;
                    if (i) for (var a = 0; a < this.slides.length; a += 1) this.slides[a] === i && (s = !0);
                    if (!i || !s) return (this.clickedSlide = void 0), void (this.clickedIndex = void 0);
                    (this.clickedSlide = i),
                        this.virtual && this.params.virtual.enabled ? (this.clickedIndex = parseInt(m(i).attr("data-swiper-slide-index"), 10)) : (this.clickedIndex = m(i).index()),
                        t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide();
                },
            },
            translate: {
                getTranslate: function (e) {
                    void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                    var t = this.params,
                        i = this.rtlTranslate,
                        s = this.translate,
                        a = this.$wrapperEl;
                    if (t.virtualTranslate) return i ? -s : s;
                    if (t.cssMode) return s;
                    var r = (function (e, t) {
                        void 0 === t && (t = "x");
                        var i,
                            s,
                            a,
                            r = o(),
                            n = r.getComputedStyle(e, null);
                        return (
                            r.WebKitCSSMatrix
                                ? ((s = n.transform || n.webkitTransform).split(",").length > 6 &&
                                      (s = s
                                          .split(", ")
                                          .map(function (e) {
                                              return e.replace(",", ".");
                                          })
                                          .join(", ")),
                                  (a = new r.WebKitCSSMatrix("none" === s ? "" : s)))
                                : (i = (a = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(",")),
                            "x" === t && (s = r.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])),
                            "y" === t && (s = r.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])),
                            s || 0
                        );
                    })(a[0], e);
                    return i && (r = -r), r || 0;
                },
                setTranslate: function (e, t) {
                    var i = this.rtlTranslate,
                        s = this.params,
                        a = this.$wrapperEl,
                        r = this.wrapperEl,
                        n = this.progress,
                        o = 0,
                        l = 0;
                    this.isHorizontal() ? (o = i ? -e : e) : (l = e),
                        s.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
                        s.cssMode ? (r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -o : -l) : s.virtualTranslate || a.transform("translate3d(" + o + "px, " + l + "px, 0px)"),
                        (this.previousTranslate = this.translate),
                        (this.translate = this.isHorizontal() ? o : l);
                    var d = this.maxTranslate() - this.minTranslate();
                    (0 === d ? 0 : (e - this.minTranslate()) / d) !== n && this.updateProgress(e), this.emit("setTranslate", this.translate, t);
                },
                minTranslate: function () {
                    return -this.snapGrid[0];
                },
                maxTranslate: function () {
                    return -this.snapGrid[this.snapGrid.length - 1];
                },
                translateTo: function (e, t, i, s, a) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
                    var r = this,
                        n = r.params,
                        o = r.wrapperEl;
                    if (r.animating && n.preventInteractionOnTransition) return !1;
                    var l,
                        d = r.minTranslate(),
                        h = r.maxTranslate();
                    if (((l = s && e > d ? d : s && e < h ? h : e), r.updateProgress(l), n.cssMode)) {
                        var p,
                            u = r.isHorizontal();
                        if (0 === t) o[u ? "scrollLeft" : "scrollTop"] = -l;
                        else if (o.scrollTo) o.scrollTo((((p = {})[u ? "left" : "top"] = -l), (p.behavior = "smooth"), p));
                        else o[u ? "scrollLeft" : "scrollTop"] = -l;
                        return !0;
                    }
                    return (
                        0 === t
                            ? (r.setTransition(0), r.setTranslate(l), i && (r.emit("beforeTransitionStart", t, a), r.emit("transitionEnd")))
                            : (r.setTransition(t),
                              r.setTranslate(l),
                              i && (r.emit("beforeTransitionStart", t, a), r.emit("transitionStart")),
                              r.animating ||
                                  ((r.animating = !0),
                                  r.onTranslateToWrapperTransitionEnd ||
                                      (r.onTranslateToWrapperTransitionEnd = function (e) {
                                          r &&
                                              !r.destroyed &&
                                              e.target === this &&
                                              (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
                                              r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd),
                                              (r.onTranslateToWrapperTransitionEnd = null),
                                              delete r.onTranslateToWrapperTransitionEnd,
                                              i && r.emit("transitionEnd"));
                                      }),
                                  r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
                                  r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))),
                        !0
                    );
                },
            },
            transition: {
                setTransition: function (e, t) {
                    this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
                },
                transitionStart: function (e, t) {
                    void 0 === e && (e = !0);
                    var i = this.activeIndex,
                        s = this.params,
                        a = this.previousIndex;
                    if (!s.cssMode) {
                        s.autoHeight && this.updateAutoHeight();
                        var r = t;
                        if ((r || (r = i > a ? "next" : i < a ? "prev" : "reset"), this.emit("transitionStart"), e && i !== a)) {
                            if ("reset" === r) return void this.emit("slideResetTransitionStart");
                            this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart");
                        }
                    }
                },
                transitionEnd: function (e, t) {
                    void 0 === e && (e = !0);
                    var i = this.activeIndex,
                        s = this.previousIndex,
                        a = this.params;
                    if (((this.animating = !1), !a.cssMode)) {
                        this.setTransition(0);
                        var r = t;
                        if ((r || (r = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s)) {
                            if ("reset" === r) return void this.emit("slideResetTransitionEnd");
                            this.emit("slideChangeTransitionEnd"), "next" === r ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd");
                        }
                    }
                },
            },
            slide: {
                slideTo: function (e, t, i, s) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
                    var a = this,
                        r = e;
                    r < 0 && (r = 0);
                    var n = a.params,
                        o = a.snapGrid,
                        l = a.slidesGrid,
                        d = a.previousIndex,
                        h = a.activeIndex,
                        p = a.rtlTranslate,
                        u = a.wrapperEl;
                    if (a.animating && n.preventInteractionOnTransition) return !1;
                    var c = Math.min(a.params.slidesPerGroupSkip, r),
                        v = c + Math.floor((r - c) / a.params.slidesPerGroup);
                    v >= o.length && (v = o.length - 1), (h || n.initialSlide || 0) === (d || 0) && i && a.emit("beforeSlideChangeStart");
                    var f,
                        m = -o[v];
                    if ((a.updateProgress(m), n.normalizeSlideIndex)) for (var g = 0; g < l.length; g += 1) -Math.floor(100 * m) >= Math.floor(100 * l[g]) && (r = g);
                    if (a.initialized && r !== h) {
                        if (!a.allowSlideNext && m < a.translate && m < a.minTranslate()) return !1;
                        if (!a.allowSlidePrev && m > a.translate && m > a.maxTranslate() && (h || 0) !== r) return !1;
                    }
                    if (((f = r > h ? "next" : r < h ? "prev" : "reset"), (p && -m === a.translate) || (!p && m === a.translate)))
                        return a.updateActiveIndex(r), n.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== n.effect && a.setTranslate(m), "reset" !== f && (a.transitionStart(i, f), a.transitionEnd(i, f)), !1;
                    if (n.cssMode) {
                        var y,
                            C = a.isHorizontal(),
                            w = -m;
                        if ((p && (w = u.scrollWidth - u.offsetWidth - w), 0 === t)) u[C ? "scrollLeft" : "scrollTop"] = w;
                        else if (u.scrollTo) u.scrollTo((((y = {})[C ? "left" : "top"] = w), (y.behavior = "smooth"), y));
                        else u[C ? "scrollLeft" : "scrollTop"] = w;
                        return !0;
                    }
                    return (
                        0 === t
                            ? (a.setTransition(0), a.setTranslate(m), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, f), a.transitionEnd(i, f))
                            : (a.setTransition(t),
                              a.setTranslate(m),
                              a.updateActiveIndex(r),
                              a.updateSlidesClasses(),
                              a.emit("beforeTransitionStart", t, s),
                              a.transitionStart(i, f),
                              a.animating ||
                                  ((a.animating = !0),
                                  a.onSlideToWrapperTransitionEnd ||
                                      (a.onSlideToWrapperTransitionEnd = function (e) {
                                          a &&
                                              !a.destroyed &&
                                              e.target === this &&
                                              (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd),
                                              a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd),
                                              (a.onSlideToWrapperTransitionEnd = null),
                                              delete a.onSlideToWrapperTransitionEnd,
                                              a.transitionEnd(i, f));
                                      }),
                                  a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd),
                                  a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd))),
                        !0
                    );
                },
                slideToLoop: function (e, t, i, s) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
                    var a = e;
                    return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s);
                },
                slideNext: function (e, t, i) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    var s = this.params,
                        a = this.animating,
                        r = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
                    if (s.loop) {
                        if (a && s.loopPreventsSlide) return !1;
                        this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft);
                    }
                    return this.slideTo(this.activeIndex + r, e, t, i);
                },
                slidePrev: function (e, t, i) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    var s = this.params,
                        a = this.animating,
                        r = this.snapGrid,
                        n = this.slidesGrid,
                        o = this.rtlTranslate;
                    if (s.loop) {
                        if (a && s.loopPreventsSlide) return !1;
                        this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft);
                    }
                    function l(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
                    }
                    var d,
                        h = l(o ? this.translate : -this.translate),
                        p = r.map(function (e) {
                            return l(e);
                        }),
                        u = (r[p.indexOf(h)], r[p.indexOf(h) - 1]);
                    return (
                        void 0 === u &&
                            s.cssMode &&
                            r.forEach(function (e) {
                                !u && h >= e && (u = e);
                            }),
                        void 0 !== u && (d = n.indexOf(u)) < 0 && (d = this.activeIndex - 1),
                        this.slideTo(d, e, t, i)
                    );
                },
                slideReset: function (e, t, i) {
                    return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i);
                },
                slideToClosest: function (e, t, i, s) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = 0.5);
                    var a = this.activeIndex,
                        r = Math.min(this.params.slidesPerGroupSkip, a),
                        n = r + Math.floor((a - r) / this.params.slidesPerGroup),
                        o = this.rtlTranslate ? this.translate : -this.translate;
                    if (o >= this.snapGrid[n]) {
                        var l = this.snapGrid[n];
                        o - l > (this.snapGrid[n + 1] - l) * s && (a += this.params.slidesPerGroup);
                    } else {
                        var d = this.snapGrid[n - 1];
                        o - d <= (this.snapGrid[n] - d) * s && (a -= this.params.slidesPerGroup);
                    }
                    return (a = Math.max(a, 0)), (a = Math.min(a, this.slidesGrid.length - 1)), this.slideTo(a, e, t, i);
                },
                slideToClickedSlide: function () {
                    var e,
                        t = this,
                        i = t.params,
                        s = t.$wrapperEl,
                        a = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
                        r = t.clickedIndex;
                    if (i.loop) {
                        if (t.animating) return;
                        (e = parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"), 10)),
                            i.centeredSlides
                                ? r < t.loopedSlides - a / 2 || r > t.slides.length - t.loopedSlides + a / 2
                                    ? (t.loopFix(),
                                      (r = s
                                          .children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")")
                                          .eq(0)
                                          .index()),
                                      b(function () {
                                          t.slideTo(r);
                                      }))
                                    : t.slideTo(r)
                                : r > t.slides.length - a
                                ? (t.loopFix(),
                                  (r = s
                                      .children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")")
                                      .eq(0)
                                      .index()),
                                  b(function () {
                                      t.slideTo(r);
                                  }))
                                : t.slideTo(r);
                    } else t.slideTo(r);
                },
            },
            loop: {
                loopCreate: function () {
                    var e = this,
                        t = r(),
                        i = e.params,
                        s = e.$wrapperEl;
                    s.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
                    var a = s.children("." + i.slideClass);
                    if (i.loopFillGroupWithBlank) {
                        var n = i.slidesPerGroup - (a.length % i.slidesPerGroup);
                        if (n !== i.slidesPerGroup) {
                            for (var o = 0; o < n; o += 1) {
                                var l = m(t.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                                s.append(l);
                            }
                            a = s.children("." + i.slideClass);
                        }
                    }
                    "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = a.length),
                        (e.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10))),
                        (e.loopedSlides += i.loopAdditionalSlides),
                        e.loopedSlides > a.length && (e.loopedSlides = a.length);
                    var d = [],
                        h = [];
                    a.each(function (t, i) {
                        var s = m(t);
                        i < e.loopedSlides && h.push(t), i < a.length && i >= a.length - e.loopedSlides && d.push(t), s.attr("data-swiper-slide-index", i);
                    });
                    for (var p = 0; p < h.length; p += 1) s.append(m(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
                    for (var u = d.length - 1; u >= 0; u -= 1) s.prepend(m(d[u].cloneNode(!0)).addClass(i.slideDuplicateClass));
                },
                loopFix: function () {
                    this.emit("beforeLoopFix");
                    var e,
                        t = this.activeIndex,
                        i = this.slides,
                        s = this.loopedSlides,
                        a = this.allowSlidePrev,
                        r = this.allowSlideNext,
                        n = this.snapGrid,
                        o = this.rtlTranslate;
                    (this.allowSlidePrev = !0), (this.allowSlideNext = !0);
                    var l = -n[t] - this.getTranslate();
                    if (t < s) (e = i.length - 3 * s + t), (e += s), this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l);
                    else if (t >= i.length - s) {
                        (e = -i.length + t + s), (e += s), this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l);
                    }
                    (this.allowSlidePrev = a), (this.allowSlideNext = r), this.emit("loopFix");
                },
                loopDestroy: function () {
                    var e = this.$wrapperEl,
                        t = this.params,
                        i = this.slides;
                    e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index");
                },
            },
            grabCursor: {
                setGrabCursor: function (e) {
                    if (!(this.support.touch || !this.params.simulateTouch || (this.params.watchOverflow && this.isLocked) || this.params.cssMode)) {
                        var t = this.el;
                        (t.style.cursor = "move"), (t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"), (t.style.cursor = e ? "-moz-grabbin" : "-moz-grab"), (t.style.cursor = e ? "grabbing" : "grab");
                    }
                },
                unsetGrabCursor: function () {
                    this.support.touch || (this.params.watchOverflow && this.isLocked) || this.params.cssMode || (this.el.style.cursor = "");
                },
            },
            manipulation: {
                appendSlide: function (e) {
                    var t = this.$wrapperEl,
                        i = this.params;
                    if ((i.loop && this.loopDestroy(), "object" == typeof e && "length" in e)) for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);
                    else t.append(e);
                    i.loop && this.loopCreate(), (i.observer && this.support.observer) || this.update();
                },
                prependSlide: function (e) {
                    var t = this.params,
                        i = this.$wrapperEl,
                        s = this.activeIndex;
                    t.loop && this.loopDestroy();
                    var a = s + 1;
                    if ("object" == typeof e && "length" in e) {
                        for (var r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);
                        a = s + e.length;
                    } else i.prepend(e);
                    t.loop && this.loopCreate(), (t.observer && this.support.observer) || this.update(), this.slideTo(a, 0, !1);
                },
                addSlide: function (e, t) {
                    var i = this.$wrapperEl,
                        s = this.params,
                        a = this.activeIndex;
                    s.loop && ((a -= this.loopedSlides), this.loopDestroy(), (this.slides = i.children("." + s.slideClass)));
                    var r = this.slides.length;
                    if (e <= 0) this.prependSlide(t);
                    else if (e >= r) this.appendSlide(t);
                    else {
                        for (var n = a > e ? a + 1 : a, o = [], l = r - 1; l >= e; l -= 1) {
                            var d = this.slides.eq(l);
                            d.remove(), o.unshift(d);
                        }
                        if ("object" == typeof t && "length" in t) {
                            for (var h = 0; h < t.length; h += 1) t[h] && i.append(t[h]);
                            n = a > e ? a + t.length : a;
                        } else i.append(t);
                        for (var p = 0; p < o.length; p += 1) i.append(o[p]);
                        s.loop && this.loopCreate(), (s.observer && this.support.observer) || this.update(), s.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1);
                    }
                },
                removeSlide: function (e) {
                    var t = this.params,
                        i = this.$wrapperEl,
                        s = this.activeIndex;
                    t.loop && ((s -= this.loopedSlides), this.loopDestroy(), (this.slides = i.children("." + t.slideClass)));
                    var a,
                        r = s;
                    if ("object" == typeof e && "length" in e) {
                        for (var n = 0; n < e.length; n += 1) (a = e[n]), this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1);
                        r = Math.max(r, 0);
                    } else (a = e), this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), (r = Math.max(r, 0));
                    t.loop && this.loopCreate(), (t.observer && this.support.observer) || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1);
                },
                removeAllSlides: function () {
                    for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                    this.removeSlide(e);
                },
            },
            events: {
                attachEvents: function () {
                    var e = r(),
                        t = this.params,
                        i = this.touchEvents,
                        s = this.el,
                        a = this.wrapperEl,
                        n = this.device,
                        o = this.support;
                    (this.onTouchStart = I.bind(this)), (this.onTouchMove = A.bind(this)), (this.onTouchEnd = B.bind(this)), t.cssMode && (this.onScroll = N.bind(this)), (this.onClick = G.bind(this));
                    var l = !!t.nested;
                    if (!o.touch && o.pointerEvents) s.addEventListener(i.start, this.onTouchStart, !1), e.addEventListener(i.move, this.onTouchMove, l), e.addEventListener(i.end, this.onTouchEnd, !1);
                    else {
                        if (o.touch) {
                            var d = !("touchstart" !== i.start || !o.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 };
                            s.addEventListener(i.start, this.onTouchStart, d),
                                s.addEventListener(i.move, this.onTouchMove, o.passiveListener ? { passive: !1, capture: l } : l),
                                s.addEventListener(i.end, this.onTouchEnd, d),
                                i.cancel && s.addEventListener(i.cancel, this.onTouchEnd, d),
                                $ || (e.addEventListener("touchstart", F), ($ = !0));
                        }
                        ((t.simulateTouch && !n.ios && !n.android) || (t.simulateTouch && !o.touch && n.ios)) &&
                            (s.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, l), e.addEventListener("mouseup", this.onTouchEnd, !1));
                    }
                    (t.preventClicks || t.preventClicksPropagation) && s.addEventListener("click", this.onClick, !0),
                        t.cssMode && a.addEventListener("scroll", this.onScroll),
                        t.updateOnWindowResize ? this.on(n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", D, !0) : this.on("observerUpdate", D, !0);
                },
                detachEvents: function () {
                    var e = r(),
                        t = this.params,
                        i = this.touchEvents,
                        s = this.el,
                        a = this.wrapperEl,
                        n = this.device,
                        o = this.support,
                        l = !!t.nested;
                    if (!o.touch && o.pointerEvents) s.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, l), e.removeEventListener(i.end, this.onTouchEnd, !1);
                    else {
                        if (o.touch) {
                            var d = !("onTouchStart" !== i.start || !o.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 };
                            s.removeEventListener(i.start, this.onTouchStart, d),
                                s.removeEventListener(i.move, this.onTouchMove, l),
                                s.removeEventListener(i.end, this.onTouchEnd, d),
                                i.cancel && s.removeEventListener(i.cancel, this.onTouchEnd, d);
                        }
                        ((t.simulateTouch && !n.ios && !n.android) || (t.simulateTouch && !o.touch && n.ios)) &&
                            (s.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, l), e.removeEventListener("mouseup", this.onTouchEnd, !1));
                    }
                    (t.preventClicks || t.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0),
                        t.cssMode && a.removeEventListener("scroll", this.onScroll),
                        this.off(n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", D);
                },
            },
            breakpoints: {
                setBreakpoint: function () {
                    var e = this.activeIndex,
                        t = this.initialized,
                        i = this.loopedSlides,
                        s = void 0 === i ? 0 : i,
                        a = this.params,
                        r = this.$el,
                        n = a.breakpoints;
                    if (n && (!n || 0 !== Object.keys(n).length)) {
                        var o = this.getBreakpoint(n);
                        if (o && this.currentBreakpoint !== o) {
                            var l = o in n ? n[o] : void 0;
                            l &&
                                ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function (e) {
                                    var t = l[e];
                                    void 0 !== t && (l[e] = "slidesPerView" !== e || ("AUTO" !== t && "auto" !== t) ? ("slidesPerView" === e ? parseFloat(t) : parseInt(t, 10)) : "auto");
                                });
                            var d = l || this.originalParams,
                                h = a.slidesPerColumn > 1,
                                p = d.slidesPerColumn > 1;
                            h && !p
                                ? (r.removeClass(a.containerModifierClass + "multirow " + a.containerModifierClass + "multirow-column"), this.emitContainerClasses())
                                : !h && p && (r.addClass(a.containerModifierClass + "multirow"), "column" === d.slidesPerColumnFill && r.addClass(a.containerModifierClass + "multirow-column"), this.emitContainerClasses());
                            var u = d.direction && d.direction !== a.direction,
                                c = a.loop && (d.slidesPerView !== a.slidesPerView || u);
                            u && t && this.changeDirection(),
                                x(this.params, d),
                                x(this, { allowTouchMove: this.params.allowTouchMove, allowSlideNext: this.params.allowSlideNext, allowSlidePrev: this.params.allowSlidePrev }),
                                (this.currentBreakpoint = o),
                                this.emit("_beforeBreakpoint", d),
                                c && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - s + this.loopedSlides, 0, !1)),
                                this.emit("breakpoint", d);
                        }
                    }
                },
                getBreakpoint: function (e) {
                    var t = o();
                    if (e) {
                        var i = !1,
                            s = Object.keys(e).map(function (e) {
                                if ("string" == typeof e && 0 === e.indexOf("@")) {
                                    var i = parseFloat(e.substr(1));
                                    return { value: t.innerHeight * i, point: e };
                                }
                                return { value: e, point: e };
                            });
                        s.sort(function (e, t) {
                            return parseInt(e.value, 10) - parseInt(t.value, 10);
                        });
                        for (var a = 0; a < s.length; a += 1) {
                            var r = s[a],
                                n = r.point;
                            r.value <= t.innerWidth && (i = n);
                        }
                        return i || "max";
                    }
                },
            },
            checkOverflow: {
                checkOverflow: function () {
                    var e = this.params,
                        t = this.isLocked,
                        i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
                    e.slidesOffsetBefore && e.slidesOffsetAfter && i ? (this.isLocked = i <= this.size) : (this.isLocked = 1 === this.snapGrid.length),
                        (this.allowSlideNext = !this.isLocked),
                        (this.allowSlidePrev = !this.isLocked),
                        t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"),
                        t && t !== this.isLocked && ((this.isEnd = !1), this.navigation && this.navigation.update());
                },
            },
            classes: {
                addClasses: function () {
                    var e = this.classNames,
                        t = this.params,
                        i = this.rtl,
                        s = this.$el,
                        a = this.device,
                        r = [];
                    r.push("initialized"),
                        r.push(t.direction),
                        t.freeMode && r.push("free-mode"),
                        t.autoHeight && r.push("autoheight"),
                        i && r.push("rtl"),
                        t.slidesPerColumn > 1 && (r.push("multirow"), "column" === t.slidesPerColumnFill && r.push("multirow-column")),
                        a.android && r.push("android"),
                        a.ios && r.push("ios"),
                        t.cssMode && r.push("css-mode"),
                        r.forEach(function (i) {
                            e.push(t.containerModifierClass + i);
                        }),
                        s.addClass(e.join(" ")),
                        this.emitContainerClasses();
                },
                removeClasses: function () {
                    var e = this.$el,
                        t = this.classNames;
                    e.removeClass(t.join(" ")), this.emitContainerClasses();
                },
            },
            images: {
                loadImage: function (e, t, i, s, a, r) {
                    var n,
                        l = o();
                    function d() {
                        r && r();
                    }
                    m(e).parent("picture")[0] || (e.complete && a) ? d() : t ? (((n = new l.Image()).onload = d), (n.onerror = d), s && (n.sizes = s), i && (n.srcset = i), t && (n.src = t)) : d();
                },
                preloadImages: function () {
                    var e = this;
                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                        var s = e.imagesToLoad[i];
                        e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t);
                    }
                },
            },
        },
        j = {},
        _ = (function () {
            function t() {
                for (var e, i, s = arguments.length, a = new Array(s), r = 0; r < s; r++) a[r] = arguments[r];
                1 === a.length && a[0].constructor && a[0].constructor === Object ? (i = a[0]) : ((e = a[0]), (i = a[1])), i || (i = {}), (i = x({}, i)), e && !i.el && (i.el = e);
                var n = this;
                (n.support = M()),
                    (n.device = P({ userAgent: i.userAgent })),
                    (n.browser = k()),
                    (n.eventsListeners = {}),
                    (n.eventsAnyListeners = []),
                    void 0 === n.modules && (n.modules = {}),
                    Object.keys(n.modules).forEach(function (e) {
                        var t = n.modules[e];
                        if (t.params) {
                            var s = Object.keys(t.params)[0],
                                a = t.params[s];
                            if ("object" != typeof a || null === a) return;
                            if (!(s in i) || !("enabled" in a)) return;
                            !0 === i[s] && (i[s] = { enabled: !0 }), "object" != typeof i[s] || "enabled" in i[s] || (i[s].enabled = !0), i[s] || (i[s] = { enabled: !1 });
                        }
                    });
                var o = x({}, V);
                n.useParams(o),
                    (n.params = x({}, o, j, i)),
                    (n.originalParams = x({}, n.params)),
                    (n.passedParams = x({}, i)),
                    n.params &&
                        n.params.on &&
                        Object.keys(n.params.on).forEach(function (e) {
                            n.on(e, n.params.on[e]);
                        }),
                    n.params && n.params.onAny && n.onAny(n.params.onAny),
                    (n.$ = m);
                var l = m(n.params.el);
                if ((e = l[0])) {
                    if (l.length > 1) {
                        var d = [];
                        return (
                            l.each(function (e) {
                                var s = x({}, i, { el: e });
                                d.push(new t(s));
                            }),
                            d
                        );
                    }
                    var h, p, u;
                    return (
                        (e.swiper = n),
                        e && e.shadowRoot && e.shadowRoot.querySelector
                            ? ((h = m(e.shadowRoot.querySelector("." + n.params.wrapperClass))).children = function (e) {
                                  return l.children(e);
                              })
                            : (h = l.children("." + n.params.wrapperClass)),
                        x(n, {
                            $el: l,
                            el: e,
                            $wrapperEl: h,
                            wrapperEl: h[0],
                            classNames: [],
                            slides: m(),
                            slidesGrid: [],
                            snapGrid: [],
                            slidesSizesGrid: [],
                            isHorizontal: function () {
                                return "horizontal" === n.params.direction;
                            },
                            isVertical: function () {
                                return "vertical" === n.params.direction;
                            },
                            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === l.css("direction"),
                            rtlTranslate: "horizontal" === n.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === l.css("direction")),
                            wrongRTL: "-webkit-box" === h.css("display"),
                            activeIndex: 0,
                            realIndex: 0,
                            isBeginning: !0,
                            isEnd: !1,
                            translate: 0,
                            previousTranslate: 0,
                            progress: 0,
                            velocity: 0,
                            animating: !1,
                            allowSlideNext: n.params.allowSlideNext,
                            allowSlidePrev: n.params.allowSlidePrev,
                            touchEvents:
                                ((p = ["touchstart", "touchmove", "touchend", "touchcancel"]),
                                (u = ["mousedown", "mousemove", "mouseup"]),
                                n.support.pointerEvents && (u = ["pointerdown", "pointermove", "pointerup"]),
                                (n.touchEventsTouch = { start: p[0], move: p[1], end: p[2], cancel: p[3] }),
                                (n.touchEventsDesktop = { start: u[0], move: u[1], end: u[2] }),
                                n.support.touch || !n.params.simulateTouch ? n.touchEventsTouch : n.touchEventsDesktop),
                            touchEventsData: {
                                isTouched: void 0,
                                isMoved: void 0,
                                allowTouchCallbacks: void 0,
                                touchStartTime: void 0,
                                isScrolling: void 0,
                                currentTranslate: void 0,
                                startTranslate: void 0,
                                allowThresholdMove: void 0,
                                formElements: "input, select, option, textarea, button, video, label",
                                lastClickTime: T(),
                                clickTimeout: void 0,
                                velocities: [],
                                allowMomentumBounce: void 0,
                                isTouchEvent: void 0,
                                startMoving: void 0,
                            },
                            allowClick: !0,
                            allowTouchMove: n.params.allowTouchMove,
                            touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
                            imagesToLoad: [],
                            imagesLoaded: 0,
                        }),
                        n.useModules(),
                        n.emit("_swiper"),
                        n.params.init && n.init(),
                        n
                    );
                }
            }
            var i,
                s,
                a,
                r = t.prototype;
            return (
                (r.emitContainerClasses = function () {
                    var e = this;
                    if (e.params._emitClasses && e.el) {
                        var t = e.el.className.split(" ").filter(function (t) {
                            return 0 === t.indexOf("swiper-container") || 0 === t.indexOf(e.params.containerModifierClass);
                        });
                        e.emit("_containerClasses", t.join(" "));
                    }
                }),
                (r.emitSlidesClasses = function () {
                    var e = this;
                    e.params._emitClasses &&
                        e.el &&
                        e.slides.each(function (t) {
                            var i = t.className.split(" ").filter(function (t) {
                                return 0 === t.indexOf("swiper-slide") || 0 === t.indexOf(e.params.slideClass);
                            });
                            e.emit("_slideClass", t, i.join(" "));
                        });
                }),
                (r.slidesPerViewDynamic = function () {
                    var e = this.params,
                        t = this.slides,
                        i = this.slidesGrid,
                        s = this.size,
                        a = this.activeIndex,
                        r = 1;
                    if (e.centeredSlides) {
                        for (var n, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1) t[l] && !n && ((r += 1), (o += t[l].swiperSlideSize) > s && (n = !0));
                        for (var d = a - 1; d >= 0; d -= 1) t[d] && !n && ((r += 1), (o += t[d].swiperSlideSize) > s && (n = !0));
                    } else for (var h = a + 1; h < t.length; h += 1) i[h] - i[a] < s && (r += 1);
                    return r;
                }),
                (r.update = function () {
                    var e = this;
                    if (e && !e.destroyed) {
                        var t = e.snapGrid,
                            i = e.params;
                        i.breakpoints && e.setBreakpoint(),
                            e.updateSize(),
                            e.updateSlides(),
                            e.updateProgress(),
                            e.updateSlidesClasses(),
                            e.params.freeMode
                                ? (s(), e.params.autoHeight && e.updateAutoHeight())
                                : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(),
                            i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                            e.emit("update");
                    }
                    function s() {
                        var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
                    }
                }),
                (r.changeDirection = function (e, t) {
                    void 0 === t && (t = !0);
                    var i = this.params.direction;
                    return (
                        e || (e = "horizontal" === i ? "vertical" : "horizontal"),
                        e === i ||
                            ("horizontal" !== e && "vertical" !== e) ||
                            (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + e),
                            this.emitContainerClasses(),
                            (this.params.direction = e),
                            this.slides.each(function (t) {
                                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
                            }),
                            this.emit("changeDirection"),
                            t && this.update()),
                        this
                    );
                }),
                (r.init = function () {
                    this.initialized ||
                        (this.emit("beforeInit"),
                        this.params.breakpoints && this.setBreakpoint(),
                        this.addClasses(),
                        this.params.loop && this.loopCreate(),
                        this.updateSize(),
                        this.updateSlides(),
                        this.params.watchOverflow && this.checkOverflow(),
                        this.params.grabCursor && this.setGrabCursor(),
                        this.params.preloadImages && this.preloadImages(),
                        this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit),
                        this.attachEvents(),
                        (this.initialized = !0),
                        this.emit("init"),
                        this.emit("afterInit"));
                }),
                (r.destroy = function (e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    var i,
                        s = this,
                        a = s.params,
                        r = s.$el,
                        n = s.$wrapperEl,
                        o = s.slides;
                    return (
                        void 0 === s.params ||
                            s.destroyed ||
                            (s.emit("beforeDestroy"),
                            (s.initialized = !1),
                            s.detachEvents(),
                            a.loop && s.loopDestroy(),
                            t &&
                                (s.removeClasses(),
                                r.removeAttr("style"),
                                n.removeAttr("style"),
                                o && o.length && o.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
                            s.emit("destroy"),
                            Object.keys(s.eventsListeners).forEach(function (e) {
                                s.off(e);
                            }),
                            !1 !== e &&
                                ((s.$el[0].swiper = null),
                                (i = s),
                                Object.keys(i).forEach(function (e) {
                                    try {
                                        i[e] = null;
                                    } catch (e) {}
                                    try {
                                        delete i[e];
                                    } catch (e) {}
                                })),
                            (s.destroyed = !0)),
                        null
                    );
                }),
                (t.extendDefaults = function (e) {
                    x(j, e);
                }),
                (t.installModule = function (e) {
                    t.prototype.modules || (t.prototype.modules = {});
                    var i = e.name || Object.keys(t.prototype.modules).length + "_" + T();
                    t.prototype.modules[i] = e;
                }),
                (t.use = function (e) {
                    return Array.isArray(e)
                        ? (e.forEach(function (e) {
                              return t.installModule(e);
                          }),
                          t)
                        : (t.installModule(e), t);
                }),
                (i = t),
                (a = [
                    {
                        key: "extendedDefaults",
                        get: function () {
                            return j;
                        },
                    },
                    {
                        key: "defaults",
                        get: function () {
                            return V;
                        },
                    },
                ]),
                (s = null) && e(i.prototype, s),
                a && e(i, a),
                t
            );
        })();
    Object.keys(H).forEach(function (e) {
        Object.keys(H[e]).forEach(function (t) {
            _.prototype[t] = H[e][t];
        });
    }),
        _.use([L, O]);
    var W = {
            update: function () {
                var e = this.params.navigation;
                if (!this.params.loop) {
                    var t = this.navigation,
                        i = t.$nextEl,
                        s = t.$prevEl;
                    s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)),
                        i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass));
                }
            },
            onPrevClick: function (e) {
                e.preventDefault(), (this.isBeginning && !this.params.loop) || this.slidePrev();
            },
            onNextClick: function (e) {
                e.preventDefault(), (this.isEnd && !this.params.loop) || this.slideNext();
            },
            init: function () {
                var e,
                    t,
                    i = this.params.navigation;
                (i.nextEl || i.prevEl) &&
                    (i.nextEl && ((e = m(i.nextEl)), this.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))),
                    i.prevEl && ((t = m(i.prevEl)), this.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))),
                    e && e.length > 0 && e.on("click", this.navigation.onNextClick),
                    t && t.length > 0 && t.on("click", this.navigation.onPrevClick),
                    x(this.navigation, { $nextEl: e, nextEl: e && e[0], $prevEl: t, prevEl: t && t[0] }));
            },
            destroy: function () {
                var e = this.navigation,
                    t = e.$nextEl,
                    i = e.$prevEl;
                t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)),
                    i && i.length && (i.off("click", this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass));
            },
        },
        R = {
            update: function () {
                var e = this.rtl,
                    t = this.params.pagination;
                if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var i,
                        s = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                        a = this.pagination.$el,
                        r = this.params.loop ? Math.ceil((s - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                    if (
                        (this.params.loop
                            ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > s - 1 - 2 * this.loopedSlides && (i -= s - 2 * this.loopedSlides),
                              i > r - 1 && (i -= r),
                              i < 0 && "bullets" !== this.params.paginationType && (i = r + i))
                            : (i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0),
                        "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0)
                    ) {
                        var n,
                            o,
                            l,
                            d = this.pagination.bullets;
                        if (
                            (t.dynamicBullets &&
                                ((this.pagination.bulletSize = d.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                                a.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"),
                                t.dynamicMainBullets > 1 &&
                                    void 0 !== this.previousIndex &&
                                    ((this.pagination.dynamicBulletIndex += i - this.previousIndex),
                                    this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1
                                        ? (this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1)
                                        : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)),
                                (n = i - this.pagination.dynamicBulletIndex),
                                (l = ((o = n + (Math.min(d.length, t.dynamicMainBullets) - 1)) + n) / 2)),
                            d.removeClass(
                                t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"
                            ),
                            a.length > 1)
                        )
                            d.each(function (e) {
                                var s = m(e),
                                    a = s.index();
                                a === i && s.addClass(t.bulletActiveClass),
                                    t.dynamicBullets &&
                                        (a >= n && a <= o && s.addClass(t.bulletActiveClass + "-main"),
                                        a === n &&
                                            s
                                                .prev()
                                                .addClass(t.bulletActiveClass + "-prev")
                                                .prev()
                                                .addClass(t.bulletActiveClass + "-prev-prev"),
                                        a === o &&
                                            s
                                                .next()
                                                .addClass(t.bulletActiveClass + "-next")
                                                .next()
                                                .addClass(t.bulletActiveClass + "-next-next"));
                            });
                        else {
                            var h = d.eq(i),
                                p = h.index();
                            if ((h.addClass(t.bulletActiveClass), t.dynamicBullets)) {
                                for (var u = d.eq(n), c = d.eq(o), v = n; v <= o; v += 1) d.eq(v).addClass(t.bulletActiveClass + "-main");
                                if (this.params.loop)
                                    if (p >= d.length - t.dynamicMainBullets) {
                                        for (var f = t.dynamicMainBullets; f >= 0; f -= 1) d.eq(d.length - f).addClass(t.bulletActiveClass + "-main");
                                        d.eq(d.length - t.dynamicMainBullets - 1).addClass(t.bulletActiveClass + "-prev");
                                    } else
                                        u
                                            .prev()
                                            .addClass(t.bulletActiveClass + "-prev")
                                            .prev()
                                            .addClass(t.bulletActiveClass + "-prev-prev"),
                                            c
                                                .next()
                                                .addClass(t.bulletActiveClass + "-next")
                                                .next()
                                                .addClass(t.bulletActiveClass + "-next-next");
                                else
                                    u
                                        .prev()
                                        .addClass(t.bulletActiveClass + "-prev")
                                        .prev()
                                        .addClass(t.bulletActiveClass + "-prev-prev"),
                                        c
                                            .next()
                                            .addClass(t.bulletActiveClass + "-next")
                                            .next()
                                            .addClass(t.bulletActiveClass + "-next-next");
                            }
                        }
                        if (t.dynamicBullets) {
                            var g = Math.min(d.length, t.dynamicMainBullets + 4),
                                y = (this.pagination.bulletSize * g - this.pagination.bulletSize) / 2 - l * this.pagination.bulletSize,
                                C = e ? "right" : "left";
                            d.css(this.isHorizontal() ? C : "top", y + "px");
                        }
                    }
                    if (("fraction" === t.type && (a.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)), a.find("." + t.totalClass).text(t.formatFractionTotal(r))), "progressbar" === t.type)) {
                        var w;
                        w = t.progressbarOpposite ? (this.isHorizontal() ? "vertical" : "horizontal") : this.isHorizontal() ? "horizontal" : "vertical";
                        var b = (i + 1) / r,
                            T = 1,
                            S = 1;
                        "horizontal" === w ? (T = b) : (S = b),
                            a
                                .find("." + t.progressbarFillClass)
                                .transform("translate3d(0,0,0) scaleX(" + T + ") scaleY(" + S + ")")
                                .transition(this.params.speed);
                    }
                    "custom" === t.type && t.renderCustom ? (a.html(t.renderCustom(this, i + 1, r)), this.emit("paginationRender", a[0])) : this.emit("paginationUpdate", a[0]),
                        a[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass);
                }
            },
            render: function () {
                var e = this.params.pagination;
                if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                        i = this.pagination.$el,
                        s = "";
                    if ("bullets" === e.type) {
                        for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1)
                            e.renderBullet ? (s += e.renderBullet.call(this, r, e.bulletClass)) : (s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">");
                        i.html(s), (this.pagination.bullets = i.find("." + e.bulletClass));
                    }
                    "fraction" === e.type && ((s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>'), i.html(s)),
                        "progressbar" === e.type && ((s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>'), i.html(s)),
                        "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0]);
                }
            },
            init: function () {
                var e = this,
                    t = e.params.pagination;
                if (t.el) {
                    var i = m(t.el);
                    0 !== i.length &&
                        (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && (i = e.$el.find(t.el)),
                        "bullets" === t.type && t.clickable && i.addClass(t.clickableClass),
                        i.addClass(t.modifierClass + t.type),
                        "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), (e.pagination.dynamicBulletIndex = 0), t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                        "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass),
                        t.clickable &&
                            i.on("click", "." + t.bulletClass, function (t) {
                                t.preventDefault();
                                var i = m(this).index() * e.params.slidesPerGroup;
                                e.params.loop && (i += e.loopedSlides), e.slideTo(i);
                            }),
                        x(e.pagination, { $el: i, el: i[0] }));
                }
            },
            destroy: function () {
                var e = this.params.pagination;
                if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var t = this.pagination.$el;
                    t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass);
                }
            },
        },
        q = {
            loadInSlide: function (e, t) {
                void 0 === t && (t = !0);
                var i = this,
                    s = i.params.lazy;
                if (void 0 !== e && 0 !== i.slides.length) {
                    var a = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
                        r = a.find("." + s.elementClass + ":not(." + s.loadedClass + "):not(." + s.loadingClass + ")");
                    !a.hasClass(s.elementClass) || a.hasClass(s.loadedClass) || a.hasClass(s.loadingClass) || r.push(a[0]),
                        0 !== r.length &&
                            r.each(function (e) {
                                var r = m(e);
                                r.addClass(s.loadingClass);
                                var n = r.attr("data-background"),
                                    o = r.attr("data-src"),
                                    l = r.attr("data-srcset"),
                                    d = r.attr("data-sizes"),
                                    h = r.parent("picture");
                                i.loadImage(r[0], o || n, l, d, !1, function () {
                                    if (null != i && i && (!i || i.params) && !i.destroyed) {
                                        if (
                                            (n
                                                ? (r.css("background-image", 'url("' + n + '")'), r.removeAttr("data-background"))
                                                : (l && (r.attr("srcset", l), r.removeAttr("data-srcset")),
                                                  d && (r.attr("sizes", d), r.removeAttr("data-sizes")),
                                                  h.length &&
                                                      h.children("source").each(function (e) {
                                                          var t = m(e);
                                                          t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"));
                                                      }),
                                                  o && (r.attr("src", o), r.removeAttr("data-src"))),
                                            r.addClass(s.loadedClass).removeClass(s.loadingClass),
                                            a.find("." + s.preloaderClass).remove(),
                                            i.params.loop && t)
                                        ) {
                                            var e = a.attr("data-swiper-slide-index");
                                            if (a.hasClass(i.params.slideDuplicateClass)) {
                                                var p = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                                i.lazy.loadInSlide(p.index(), !1);
                                            } else {
                                                var u = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                                i.lazy.loadInSlide(u.index(), !1);
                                            }
                                        }
                                        i.emit("lazyImageReady", a[0], r[0]), i.params.autoHeight && i.updateAutoHeight();
                                    }
                                }),
                                    i.emit("lazyImageLoad", a[0], r[0]);
                            });
                }
            },
            load: function () {
                var e = this,
                    t = e.$wrapperEl,
                    i = e.params,
                    s = e.slides,
                    a = e.activeIndex,
                    r = e.virtual && i.virtual.enabled,
                    n = i.lazy,
                    o = i.slidesPerView;
                function l(e) {
                    if (r) {
                        if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
                    } else if (s[e]) return !0;
                    return !1;
                }
                function d(e) {
                    return r ? m(e).attr("data-swiper-slide-index") : m(e).index();
                }
                if (("auto" === o && (o = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility))
                    t.children("." + i.slideVisibleClass).each(function (t) {
                        var i = r ? m(t).attr("data-swiper-slide-index") : m(t).index();
                        e.lazy.loadInSlide(i);
                    });
                else if (o > 1) for (var h = a; h < a + o; h += 1) l(h) && e.lazy.loadInSlide(h);
                else e.lazy.loadInSlide(a);
                if (n.loadPrevNext)
                    if (o > 1 || (n.loadPrevNextAmount && n.loadPrevNextAmount > 1)) {
                        for (var p = n.loadPrevNextAmount, u = o, c = Math.min(a + u + Math.max(p, u), s.length), v = Math.max(a - Math.max(u, p), 0), f = a + o; f < c; f += 1) l(f) && e.lazy.loadInSlide(f);
                        for (var g = v; g < a; g += 1) l(g) && e.lazy.loadInSlide(g);
                    } else {
                        var y = t.children("." + i.slideNextClass);
                        y.length > 0 && e.lazy.loadInSlide(d(y));
                        var C = t.children("." + i.slidePrevClass);
                        C.length > 0 && e.lazy.loadInSlide(d(C));
                    }
            },
        },
        X = {
            run: function () {
                var e = this,
                    t = e.slides.eq(e.activeIndex),
                    i = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
                    clearTimeout(e.autoplay.timeout),
                    (e.autoplay.timeout = b(function () {
                        e.params.autoplay.reverseDirection
                            ? e.params.loop
                                ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))
                                : e.isBeginning
                                ? e.params.autoplay.stopOnLastSlide
                                    ? e.autoplay.stop()
                                    : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay"))
                                : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))
                            : e.params.loop
                            ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
                            : e.isEnd
                            ? e.params.autoplay.stopOnLastSlide
                                ? e.autoplay.stop()
                                : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay"))
                            : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")),
                            e.params.cssMode && e.autoplay.running && e.autoplay.run();
                    }, i));
            },
            start: function () {
                return void 0 === this.autoplay.timeout && !this.autoplay.running && ((this.autoplay.running = !0), this.emit("autoplayStart"), this.autoplay.run(), !0);
            },
            stop: function () {
                return (
                    !!this.autoplay.running &&
                    void 0 !== this.autoplay.timeout &&
                    (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), (this.autoplay.timeout = void 0)), (this.autoplay.running = !1), this.emit("autoplayStop"), !0)
                );
            },
            pause: function (e) {
                this.autoplay.running &&
                    (this.autoplay.paused ||
                        (this.autoplay.timeout && clearTimeout(this.autoplay.timeout),
                        (this.autoplay.paused = !0),
                        0 !== e && this.params.autoplay.waitForTransition
                            ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd))
                            : ((this.autoplay.paused = !1), this.autoplay.run())));
            },
            onVisibilityChange: function () {
                var e = r();
                "hidden" === e.visibilityState && this.autoplay.running && this.autoplay.pause(), "visible" === e.visibilityState && this.autoplay.paused && (this.autoplay.run(), (this.autoplay.paused = !1));
            },
            onTransitionEnd: function (e) {
                this &&
                    !this.destroyed &&
                    this.$wrapperEl &&
                    e.target === this.$wrapperEl[0] &&
                    (this.$wrapperEl[0].removeEventListener("transitionend", this.autoplay.onTransitionEnd),
                    this.$wrapperEl[0].removeEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd),
                    (this.autoplay.paused = !1),
                    this.autoplay.running ? this.autoplay.run() : this.autoplay.stop());
            },
        },
        Y = {
            setTranslate: function () {
                for (var e = this.slides, t = 0; t < e.length; t += 1) {
                    var i = this.slides.eq(t),
                        s = -i[0].swiperSlideOffset;
                    this.params.virtualTranslate || (s -= this.translate);
                    var a = 0;
                    this.isHorizontal() || ((a = s), (s = 0));
                    var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                    i.css({ opacity: r }).transform("translate3d(" + s + "px, " + a + "px, 0px)");
                }
            },
            setTransition: function (e) {
                var t = this,
                    i = t.slides,
                    s = t.$wrapperEl;
                if ((i.transition(e), t.params.virtualTranslate && 0 !== e)) {
                    var a = !1;
                    i.transitionEnd(function () {
                        if (!a && t && !t.destroyed) {
                            (a = !0), (t.animating = !1);
                            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) s.trigger(e[i]);
                        }
                    });
                }
            },
        },
        U = [
            {
                name: "navigation",
                params: { navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock" } },
                create: function () {
                    E(this, { navigation: t({}, W) });
                },
                on: {
                    init: function (e) {
                        e.navigation.init(), e.navigation.update();
                    },
                    toEdge: function (e) {
                        e.navigation.update();
                    },
                    fromEdge: function (e) {
                        e.navigation.update();
                    },
                    destroy: function (e) {
                        e.navigation.destroy();
                    },
                    click: function (e, t) {
                        var i,
                            s = e.navigation,
                            a = s.$nextEl,
                            r = s.$prevEl;
                        !e.params.navigation.hideOnClick ||
                            m(t.target).is(r) ||
                            m(t.target).is(a) ||
                            (a ? (i = a.hasClass(e.params.navigation.hiddenClass)) : r && (i = r.hasClass(e.params.navigation.hiddenClass)),
                            !0 === i ? e.emit("navigationShow") : e.emit("navigationHide"),
                            a && a.toggleClass(e.params.navigation.hiddenClass),
                            r && r.toggleClass(e.params.navigation.hiddenClass));
                    },
                },
            },
            {
                name: "pagination",
                params: {
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: function (e) {
                            return e;
                        },
                        formatFractionTotal: function (e) {
                            return e;
                        },
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                        modifierClass: "swiper-pagination-",
                        currentClass: "swiper-pagination-current",
                        totalClass: "swiper-pagination-total",
                        hiddenClass: "swiper-pagination-hidden",
                        progressbarFillClass: "swiper-pagination-progressbar-fill",
                        progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                        clickableClass: "swiper-pagination-clickable",
                        lockClass: "swiper-pagination-lock",
                    },
                },
                create: function () {
                    E(this, { pagination: t({ dynamicBulletIndex: 0 }, R) });
                },
                on: {
                    init: function (e) {
                        e.pagination.init(), e.pagination.render(), e.pagination.update();
                    },
                    activeIndexChange: function (e) {
                        (e.params.loop || void 0 === e.snapIndex) && e.pagination.update();
                    },
                    snapIndexChange: function (e) {
                        e.params.loop || e.pagination.update();
                    },
                    slidesLengthChange: function (e) {
                        e.params.loop && (e.pagination.render(), e.pagination.update());
                    },
                    snapGridLengthChange: function (e) {
                        e.params.loop || (e.pagination.render(), e.pagination.update());
                    },
                    destroy: function (e) {
                        e.pagination.destroy();
                    },
                    click: function (e, t) {
                        e.params.pagination.el &&
                            e.params.pagination.hideOnClick &&
                            e.pagination.$el.length > 0 &&
                            !m(t.target).hasClass(e.params.pagination.bulletClass) &&
                            (!0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass) ? e.emit("paginationShow") : e.emit("paginationHide"), e.pagination.$el.toggleClass(e.params.pagination.hiddenClass));
                    },
                },
            },
            {
                name: "lazy",
                params: {
                    lazy: {
                        enabled: !1,
                        loadPrevNext: !1,
                        loadPrevNextAmount: 1,
                        loadOnTransitionStart: !1,
                        elementClass: "swiper-lazy",
                        loadingClass: "swiper-lazy-loading",
                        loadedClass: "swiper-lazy-loaded",
                        preloaderClass: "swiper-lazy-preloader",
                    },
                },
                create: function () {
                    E(this, { lazy: t({ initialImageLoaded: !1 }, q) });
                },
                on: {
                    beforeInit: function (e) {
                        e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1);
                    },
                    init: function (e) {
                        e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load();
                    },
                    scroll: function (e) {
                        e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
                    },
                    resize: function (e) {
                        e.params.lazy.enabled && e.lazy.load();
                    },
                    scrollbarDragMove: function (e) {
                        e.params.lazy.enabled && e.lazy.load();
                    },
                    transitionStart: function (e) {
                        e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || (!e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded)) && e.lazy.load();
                    },
                    transitionEnd: function (e) {
                        e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load();
                    },
                    slideChange: function (e) {
                        e.params.lazy.enabled && e.params.cssMode && e.lazy.load();
                    },
                },
            },
            {
                name: "autoplay",
                params: { autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1 } },
                create: function () {
                    E(this, { autoplay: t(t({}, X), {}, { running: !1, paused: !1 }) });
                },
                on: {
                    init: function (e) {
                        e.params.autoplay.enabled && (e.autoplay.start(), r().addEventListener("visibilitychange", e.autoplay.onVisibilityChange));
                    },
                    beforeTransitionStart: function (e, t, i) {
                        e.autoplay.running && (i || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(t) : e.autoplay.stop());
                    },
                    sliderFirstMove: function (e) {
                        e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause());
                    },
                    touchEnd: function (e) {
                        e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run();
                    },
                    destroy: function (e) {
                        e.autoplay.running && e.autoplay.stop(), r().removeEventListener("visibilitychange", e.autoplay.onVisibilityChange);
                    },
                },
            },
            {
                name: "effect-fade",
                params: { fadeEffect: { crossFade: !1 } },
                create: function () {
                    E(this, { fadeEffect: t({}, Y) });
                },
                on: {
                    beforeInit: function (e) {
                        if ("fade" === e.params.effect) {
                            e.classNames.push(e.params.containerModifierClass + "fade");
                            var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                            x(e.params, t), x(e.originalParams, t);
                        }
                    },
                    setTranslate: function (e) {
                        "fade" === e.params.effect && e.fadeEffect.setTranslate();
                    },
                    setTransition: function (e, t) {
                        "fade" === e.params.effect && e.fadeEffect.setTransition(t);
                    },
                },
            },
        ];
    return _.use(U), _;
});

LS.ready.then(function () {
    !(function (a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? a(require("jquery")) : a(jQuery);
    })(function (a) {
        function b(a) {
            return h.raw ? a : encodeURIComponent(a);
        }
        function c(a) {
            return h.raw ? a : decodeURIComponent(a);
        }
        function d(a) {
            return b(h.json ? JSON.stringify(a) : String(a));
        }
        function e(a) {
            0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return (a = decodeURIComponent(a.replace(g, " "))), h.json ? JSON.parse(a) : a;
            } catch (b) {}
        }
        function f(b, c) {
            var d = h.raw ? b : e(b);
            return a.isFunction(c) ? c(d) : d;
        }
        var g = /\+/g,
            h = (a.cookie = function (e, g, i) {
                if (void 0 !== g && !a.isFunction(g)) {
                    if (((i = a.extend({}, h.defaults, i)), "number" == typeof i.expires)) {
                        var j = i.expires,
                            k = (i.expires = new Date());
                        k.setTime(+k + 864e5 * j);
                    }
                    return (document.cookie = [b(e), "=", d(g), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join(""));
                }
                for (var l = e ? void 0 : {}, m = document.cookie ? document.cookie.split("; ") : [], n = 0, o = m.length; o > n; n++) {
                    var p = m[n].split("="),
                        q = c(p.shift()),
                        r = p.join("=");
                    if (e && e === q) {
                        l = f(r, g);
                        break;
                    }
                    e || void 0 === (r = f(r)) || (l[q] = r);
                }
                return l;
            });
        (h.defaults = {}),
            (a.removeCookie = function (b, c) {
                return void 0 === a.cookie(b) ? !1 : (a.cookie(b, "", a.extend({}, c, { expires: -1 })), !a.cookie(b));
            });
    });

    !(function (a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? a(require("jquery")) : a(jQuery);
    })(function (a, b) {
        function c(a, b, c, d) {
            return !(a.selector != b.selector || a.context != b.context || (c && c.$lqguid != b.fn.$lqguid) || (d && d.$lqguid != b.fn2.$lqguid));
        }
        a.extend(a.fn, {
            livequery: function (b, e) {
                var f,
                    g = this;
                return (
                    a.each(d.queries, function (a, d) {
                        return c(g, d, b, e) ? (f = d) && !1 : void 0;
                    }),
                    (f = f || new d(g.selector, g.context, b, e)),
                    (f.stopped = !1),
                    f.run(),
                    g
                );
            },
            expire: function (b, e) {
                var f = this;
                return (
                    a.each(d.queries, function (a, g) {
                        c(f, g, b, e) && !f.stopped && d.stop(g.id);
                    }),
                    f
                );
            },
        });
        var d = (a.livequery = function (b, c, e, f) {
            var g = this;
            return (g.selector = b), (g.context = c), (g.fn = e), (g.fn2 = f), (g.elements = a([])), (g.stopped = !1), (g.id = d.queries.push(g) - 1), (e.$lqguid = e.$lqguid || d.guid++), f && (f.$lqguid = f.$lqguid || d.guid++), g;
        });
        (d.prototype = {
            stop: function () {
                var b = this;
                b.stopped || (b.fn2 && b.elements.each(b.fn2), (b.elements = a([])), (b.stopped = !0));
            },
            run: function () {
                var b = this;
                if (!b.stopped) {
                    var c = b.elements,
                        d = a(b.selector, b.context),
                        e = d.not(c),
                        f = c.not(d);
                    (b.elements = d), e.each(b.fn), b.fn2 && f.each(b.fn2);
                }
            },
        }),
            a.extend(d, {
                guid: 0,
                queries: [],
                queue: [],
                running: !1,
                timeout: null,
                registered: [],
                checkQueue: function () {
                    if (d.running && d.queue.length) for (var a = d.queue.length; a--; ) d.queries[d.queue.shift()].run();
                },
                pause: function () {
                    d.running = !1;
                },
                play: function () {
                    (d.running = !0), d.run();
                },
                registerPlugin: function () {
                    a.each(arguments, function (b, c) {
                        if (a.fn[c] && !(a.inArray(c, d.registered) > 0)) {
                            var e = a.fn[c];
                            (a.fn[c] = function () {
                                var a = e.apply(this, arguments);
                                return d.run(), a;
                            }),
                                d.registered.push(c);
                        }
                    });
                },
                run: function (c) {
                    c !== b
                        ? a.inArray(c, d.queue) < 0 && d.queue.push(c)
                        : a.each(d.queries, function (b) {
                              a.inArray(b, d.queue) < 0 && d.queue.push(b);
                          }),
                        d.timeout && clearTimeout(d.timeout),
                        (d.timeout = setTimeout(d.checkQueue, 20));
                },
                stop: function (c) {
                    c !== b ? d.queries[c].stop() : a.each(d.queries, d.prototype.stop);
                },
            }),
            d.registerPlugin("append", "prepend", "after", "before", "wrap", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "empty", "remove", "html", "prop", "removeProp"),
            a(function () {
                d.play();
            });
    });

    document.addEventListener("lazybeforeunveil", function (e) {
        if (e.target.parentElement && e.target.nextElementSibling) {
            var parent = e.target.parentElement;
            var sibling = e.target.nextElementSibling;
            if (sibling.classList.contains("js-lazy-loading-preloader")) {
                sibling.style.display = "none";
                parent.style.display = "block";
            }
        }
    });

    window.lazySizesConfig = window.lazySizesConfig || {};
    lazySizesConfig.hFac = 0.4;

    $(document).ready(function () {
        $(".js-notification-close, .js-tooltip-close").on("click", function (e) {
            e.preventDefault();
            $(this).closest(".js-notification, .js-tooltip").hide();
            $(".js-quick-login-badge").hide();
        });

        var $notification_order_cancellation = $(".js-notification-order-cancellation");
        var $notification_status_page = $(".js-notification-status-page");
        var $quick_login_notification = $(".js-notification-quick-login");
        var $fixed_bottom_button = $(".js-btn-fixed-bottom");

        if ($notification_status_page.size() > 0) {
            if (LS.shouldShowOrderStatusNotification($notification_status_page.data("url"))) {
                $notification_status_page.show();
            }
            $(".js-notification-status-page-close").on("click", function (e) {
                e.preventDefault();
                LS.dontShowOrderStatusNotificationAgain($notification_status_page.data("url"));
            });
        }

        if ($notification_order_cancellation.size() > 0) {
            if (LS.shouldShowOrderCancellationNotification($notification_order_cancellation.data("url"))) {
                $notification_order_cancellation.show();

                $fixed_bottom_button.css({ "margin-bottom": "40px" });
            }
            $(".js-notification-order-cancellation-close").on("click", function (e) {
                e.preventDefault();
                LS.dontShowOrderCancellationNotification($notification_order_cancellation.data("url"));
                $quick_login_notification.css("bottom", "0");
            });
        }

        $(".js-cart-notification-close").click(function () {
            $(".js-alert-added-to-cart").removeClass("notification-visible").addClass("notification-hidden");
            setTimeout(function () {
                $(".js-cart-notification-item-img").attr("src", "");
                $(".js-alert-added-to-cart").hide();
            }, 2000);
        });

        setTimeout(function () {
            if ($.cookie("returning_customer") && LS.shouldShowQuickLoginNotification()) {
                $quick_login_notification.fadeIn();
                return;
            }
        }, 500);

        $(".js-dismiss-quicklogin").on("click", function (e) {
            LS.dontShowQuickLoginNotification();
        });

        setTimeout(function () {
            $(".js-quick-login-success").fadeOut();
        }, 8000);

        if ($(window).width() < 768) {
            cleanURLHash = function () {
                const uri = window.location.toString();
                const clean_uri = uri.substring(0, uri.indexOf("#"));
                window.history.replaceState({}, document.title, clean_uri);
            };

            goBackBrowser = function () {
                cleanURLHash();
                history.back();
            };

            if (window.location.href.indexOf("modal-fullscreen") > -1) {
                cleanURLHash();
            }

            $(document).on("click", ".js-fullscreen-modal-open", function (e) {
                e.preventDefault();
                var modal_url_hash = $(this).data("modal-url");
                window.location.hash = modal_url_hash;
            });

            $(document).on("click", ".js-fullscreen-modal-close", function (e) {
                e.preventDefault();
                goBackBrowser();
            });

            window.onhashchange = function () {
                if (window.location.href.indexOf("modal-fullscreen") <= -1) {
                    if ($(".js-fullscreen-modal").hasClass("modal-show")) {
                        var $opened_modal = $(".js-fullscreen-modal.modal-show");
                        var $opened_modal_overlay = $opened_modal.prev();

                        $opened_modal.removeClass("modal-show").delay(500).hide(0);
                        $opened_modal_overlay.fadeOut(500);
                    }
                }
            };
        }

        $(document).on("click", ".js-modal-open", function (e) {
            e.preventDefault();
            var modal_id = $(this).data("toggle");
            var $overlay_id = $('.js-modal-overlay[data-modal-id="' + modal_id + '"]');
            if ($(modal_id).hasClass("modal-show")) {
                $(modal_id).removeClass("modal-show").delay(500).hide(0);
            } else {
                $overlay_id.fadeIn(400);
                $(modal_id).detach().appendTo("body");
                $overlay_id.detach().insertBefore(modal_id);
                $(modal_id).show(0).addClass("modal-show");
            }
        });

        $(document).on("click", ".js-modal-close", function (e) {
            e.preventDefault();
            var $modal = $(this).closest(".js-modal");
            var modal_id = $modal.attr("id");
            var $overlay_id = $('.js-modal-overlay[data-modal-id="#' + modal_id + '"]');
            $modal.removeClass("modal-show").delay(500).hide(0);
            $overlay_id.fadeOut(500);

            if ($(window).width() < 768 && $(this).hasClass(".js-fullscreen-modal-close")) {
                goBackBrowser();
            }
        });

        $(document).on("click", ".js-modal-overlay", function (e) {
            e.preventDefault();
            var modal_id = $(this).data("modal-id");
            $(modal_id).removeClass("modal-show").delay(500).hide(0);
            $(this).fadeOut(500);
        });

        var $tab_open = $(".js-tab");

        $tab_open.click(function (e) {
            e.preventDefault();
            var $tab_container = $(this).closest(".js-tab-container");
            $tab_container.find(".js-tab, .js-tab-panel").removeClass("active");
            $(this).addClass("active");
            var tab_to_show = $(this).find(".js-tab-link").attr("href");
            $tab_container.find(tab_to_show).addClass("active");
        });

        $(document).on("click", ".js-card-collapse-toggle", function (e) {
            e.preventDefault();
            $(this).toggleClass("active");
            $(this).closest(".js-card-collapse").toggleClass("active");
        });

        $(document).on("click", ".js-accordion-toggle", function (e) {
            e.preventDefault();
            if ($(this).hasClass("js-accordion-show-only")) {
                $(this).hide();
            } else {
                $(this).find(".js-accordion-toggle-inactive").toggle();
                $(this).find(".js-accordion-toggle-active").toggle();
            }
            $(this).prev(".js-accordion-container").slideToggle();
        });

        function applyOffset(selector) {
            // Get nav height on load
            if ($(window).width() > 768) {
                var head_height = $(".js-head-main").height();
                $(selector).css("padding-top", head_height);
            } else {
                var head_height = 0;
            }

            // Apply offset nav height on load

            $(window).resize(function () {
                // Get nav height on resize
                var head_height = $(".js-head-main").height();

                // Apply offset on resize
                if ($(window).width() > 768) {
                    $(selector).css("padding-top", head_height);
                } else {
                    $(selector).css("padding-top", 0);
                }
            });
        }

        applyOffset(".js-head-offset");

        var didScroll;
        var lastScrollTop = 0;
        var delta = 30;
        var navbarHeight = $(".js-head-main").outerHeight();
        var topbarHeight = $(".js-topbar").outerHeight();

        $(window).scroll(function (event) {
            didScroll = true;
        });

        setInterval(function () {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 250);

        function hasScrolled() {
            var st = $(this).scrollTop();

            // Make sure they scroll more than delta
            if (Math.abs(lastScrollTop - st) <= delta) return;

            // If they scrolled down and are past the navbar, add class .move-up.
            if (st > lastScrollTop && st > navbarHeight) {
                $(".js-head-main").addClass("compress").css("top", -topbarHeight);
                if ($(window).width() < 768) {
                    $category_controls.css("top", navbarHeight - topbarHeight - 2);
                }
            } else {
                // Scroll Up
                if (st + $(window).height() < $(document).height()) {
                    $(".js-head-main").removeClass("compress").css("top", 0);
                    if ($(window).width() < 768) {
                        $category_controls.css("top", navbarHeight);
                    }
                }
            }

            lastScrollTop = st;
        }

        $(".js-utilities-item").hover(function (e) {
            e.preventDefault();
            $(this).toggleClass("active").find(".js-subutility-list").stop(true, true).fadeToggle(300);
        });

        var $top_nav = $(".js-mobile-nav");
        var $page_main_content = $(".js-main-content");
        var $search_backdrop = $(".js-search-backdrop");

        $top_nav.addClass("move-down").removeClass("move-up");

        $(".js-toggle-page-accordion").click(function (e) {
            e.preventDefault();
            $(this).toggleClass("active").closest(".js-nav-list-toggle-accordion").next(".js-pages-accordion").slideToggle(300);
        });

        var win_height = window.innerHeight;
        var head_height = $(".js-head-main").height();

        $(".js-desktop-dropdown").css("max-height", win_height - head_height - 50);

        $(".js-item-subitems-desktop").hover(
            function (e) {
                $(this).addClass("active").children(".js-desktop-dropdown").stop(true, true).fadeIn(300);
            },
            function () {
                $(this).removeClass("active").children(".js-desktop-dropdown").stop(true, true).fadeOut(300);
            }
        );

        $(".js-toggle-search").click(function (e) {
            e.preventDefault;
            $(".js-search-input").focus();
        });

        LS.search(
            $(".js-search-input"),
            function (html, count) {
                $search_suggests = $(this).closest(".js-search-container").next(".js-search-suggest");
                if (count > 0) {
                    $search_suggests.html(html).show();
                } else {
                    $search_suggests.hide();
                }
                if ($(this).val().length == 0) {
                    $search_suggests.hide();
                }
            },
            {
                snipplet: "header/header-search-results.tpl",
            }
        );

        if ($(window).width() > 768) {
            $("body").click(function () {
                $(".js-search-suggest").hide();
            });

            $(document).on("click", ".js-search-suggest a", function () {
                $(".js-search-suggest").show();
            });
        }

        $(".js-search-suggest").on("click", ".js-search-suggest-all-link", function (e) {
            e.preventDefault();
            $this_closest_form = $(this).closest(".js-search-suggest").prev(".js-search-form");
            $this_closest_form.submit();
        });

        var width = window.innerWidth;
        if (width > 767) {
            var slider_autoplay = { delay: 6000 };
        } else {
            var slider_autoplay = false;
        }

        window.homeSlider = {
            getAutoRotation: function () {
                return slider_autoplay;
            },
            updateSlides: function (slides) {
                homeSwiper.removeAllSlides();
                slides.forEach(function (aSlide) {
                    homeSwiper.appendSlide(
                        '<div class="swiper-slide slide-container">' +
                            (aSlide.link ? '<a href="' + aSlide.link + '">' : "") +
                            '<img src="' +
                            aSlide.src +
                            '" class="slider-image"/>' +
                            '<div class="swiper-text swiper-' +
                            aSlide.color +
                            '">' +
                            (aSlide.description ? '<div class="swiper-description mb-3">' + aSlide.description + "</div>" : "") +
                            (aSlide.title ? '<div class="swiper-title">' + aSlide.title + "</div>" : "") +
                            (aSlide.button && aSlide.link ? '<div class="btn btn-primary btn-small swiper-btn mt-4 px-4">' + aSlide.button + "</div>" : "") +
                            "</div>" +
                            (aSlide.link ? "</a>" : "") +
                            "</div>"
                    );
                });
                if (!slides.length) {
                    $(".js-home-slider-container").addClass("hidden");
                    $(".js-home-empty-slider-container").removeClass("hidden");
                } else {
                    $(".js-home-slider-container").removeClass("hidden");
                    $(".js-home-empty-slider-container").addClass("hidden");
                }
            },
            changeAutoRotation: function () {},
        };
        var homeSwiper = new Swiper(".js-home-slider", {
            preloadImages: false,
            lazy: true,
            loop: true,
            autoplay: slider_autoplay,
            pagination: {
                el: ".js-swiper-home-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".js-swiper-home-next",
                prevEl: ".js-swiper-home-prev",
            },
        });

        var lazyVal = true;
        var watchOverflowVal = true;
        var centerInsufficientSlidesVal = true;
        var slidesPerViewDesktopVal = 4;
        var slidesPerViewMobileVal = 1.5;

        var featuredSwiper = new Swiper(".js-swiper-featured", {
            lazy: lazyVal,
            watchOverflow: watchOverflowVal,
            centerInsufficientSlides: centerInsufficientSlidesVal,
            threshold: 5,
            watchSlideProgress: true,
            watchSlidesVisibility: true,
            slideVisibleClass: "js-swiper-slide-visible",
            loop: true,
            navigation: {
                nextEl: ".js-swiper-featured-next",
                prevEl: ".js-swiper-featured-prev",
            },
            slidesPerView: slidesPerViewMobileVal,
            breakpoints: {
                768: {
                    slidesPerView: slidesPerViewDesktopVal,
                },
            },
        });

        var newSwiper = new Swiper(".js-swiper-new", {
            lazy: lazyVal,
            watchOverflow: watchOverflowVal,
            centerInsufficientSlides: centerInsufficientSlidesVal,
            threshold: 5,
            watchSlideProgress: true,
            watchSlidesVisibility: true,
            slideVisibleClass: "js-swiper-slide-visible",
            loop: true,
            navigation: {
                nextEl: ".js-swiper-new-next",
                prevEl: ".js-swiper-new-prev",
            },
            slidesPerView: slidesPerViewMobileVal,
            breakpoints: {
                768: {
                    slidesPerView: slidesPerViewDesktopVal,
                },
            },
        });

        var saleSwiper = new Swiper(".js-swiper-sale", {
            lazy: lazyVal,
            watchOverflow: watchOverflowVal,
            centerInsufficientSlides: centerInsufficientSlidesVal,
            threshold: 5,
            watchSlideProgress: true,
            watchSlidesVisibility: true,
            slideVisibleClass: "js-swiper-slide-visible",
            loop: true,
            navigation: {
                nextEl: ".js-swiper-sale-next",
                prevEl: ".js-swiper-sale-prev",
            },
            slidesPerView: slidesPerViewMobileVal,
            breakpoints: {
                768: {
                    slidesPerView: slidesPerViewDesktopVal,
                },
            },
        });

        var demoFeaturedSwiper = new Swiper(".js-swiper-featured-demo", {
            lazy: true,
            loop: true,
            watchOverflow: true,
            centerInsufficientSlides: true,
            slidesPerView: 1.5,
            navigation: {
                nextEl: ".js-swiper-featured-demo-next",
                prevEl: ".js-swiper-featured-demo-prev",
            },
            breakpoints: {
                640: {
                    slidesPerView: 4,
                },
            },
        });

        var brandsSwiper = new Swiper(".js-swiper-brands", {
            lazy: true,
            loop: true,
            watchOverflow: true,
            centerInsufficientSlides: true,
            spaceBetween: 30,
            slidesPerView: 1.5,
            navigation: {
                nextEl: ".js-swiper-brands-next",
                prevEl: ".js-swiper-brands-prev",
            },
            breakpoints: {
                640: {
                    slidesPerView: 5,
                },
            },
        });

        var width = window.innerWidth;
        if (width < 767) {
            var swiperInformative = new Swiper(".js-informative-banners", {
                slidesPerView: 1.2,
                watchOverflow: true,
                centerInsufficientSlides: true,
                pagination: {
                    el: ".js-informative-banners-pagination",
                    clickable: true,
                },
                breakpoints: {
                    640: {
                        slidesPerView: 3,
                    },
                },
            });
        }

        LS.loadVideo("https://www.youtube.com/watch?v=G3dPe5wHYxY");

        var $category_controls = $(".js-category-controls");
        var mobile_nav_height = $(".js-head-main").innerHeight();

        $(document).on("click", ".js-item-buy-open", function (e) {
            e.preventDefault();
            $(this).toggleClass("btn-primary btn-secondary");
            $(this).closest(".js-quickshop-container").find(".js-item-variants").fadeToggle(300);

            var elementTop = $(this).closest(".js-product-container").offset().top;
            var viewportTop = $(window).scrollTop();

            if (elementTop < viewportTop) {
                $([document.documentElement, document.body]).animate(
                    {
                        scrollTop: $(this).closest(".js-product-container").offset().top - 180,
                    },
                    400
                );
            }
        });

        $(document).on("click", ".js-item-buy-close", function (e) {
            e.preventDefault();
            $(this).closest(".js-item-variants").fadeToggle(300);
            $(this).closest(".js-quickshop-container").find(".js-item-buy-open").toggleClass("btn-primary btn-secondary");
        });

        LS.registerOnChangeVariant(function (variant) {
            var current_image = $(".js-item-image", '.js-item-product[data-product-id="' + variant.product_id + '"]');
            current_image.attr("srcset", variant.image_url);
        });

        function get_max_installments_without_interests(number_of_installment, installment_data, max_installments_without_interests) {
            if (parseInt(number_of_installment) > parseInt(max_installments_without_interests[0])) {
                if (installment_data.without_interests) {
                    return [number_of_installment, installment_data.installment_value.toFixed(2)];
                }
            }
            return max_installments_without_interests;
        }

        function get_max_installments_with_interests(number_of_installment, installment_data, max_installments_with_interests) {
            if (parseInt(number_of_installment) > parseInt(max_installments_with_interests[0])) {
                if (installment_data.without_interests == false) {
                    return [number_of_installment, installment_data.installment_value.toFixed(2)];
                }
            }
            return max_installments_with_interests;
        }

        function refreshInstallmentv2(price) {
            $(".js-modal-installment-price").each(function (index) {
                const installment = Number($(this).data("installment"));
                $(this).text(LS.currency.display_short + (price / installment).toLocaleString("de-DE", { maximumFractionDigits: 2, minimumFractionDigits: 2 }));
            });
        }

        function changeVariant(variant) {
            $(".js-product-detail .js-shipping-calculator-response").hide();
            $("#shipping-variant-id").val(variant.id);

            var parent = $("body");
            if (variant.element) {
                parent = $(variant.element);
            }

            var sku = parent.find("#sku");
            if (sku.length) {
                sku.text(variant.sku).show();
            }

            var installment_helper = function ($element, amount, price) {
                $element.find(".js-installment-amount").text(amount);
                $element.find(".js-installment-price").attr("data-value", price);
                $element.find(".js-installment-price").text(LS.currency.display_short + parseFloat(price).toLocaleString("de-DE", { minimumFractionDigits: 2 }));
                if (variant.price_short && Math.abs(variant.price_number - price * amount) < 1) {
                    $element.find(".js-installment-total-price").text(variant.price_short.toLocaleString("de-DE", { minimumFractionDigits: 2 }));
                } else {
                    $element.find(".js-installment-total-price").text(LS.currency.display_short + (price * amount).toLocaleString("de-DE", { minimumFractionDigits: 2 }));
                }
            };

            if (variant.installments_data) {
                var variant_installments = JSON.parse(variant.installments_data);
                var max_installments_without_interests = [0, 0];
                var max_installments_with_interests = [0, 0];
                $.each(variant_installments, function (payment_method, installments) {
                    $.each(installments, function (number_of_installment, installment_data) {
                        max_installments_without_interests = get_max_installments_without_interests(number_of_installment, installment_data, max_installments_without_interests);
                        max_installments_with_interests = get_max_installments_with_interests(number_of_installment, installment_data, max_installments_with_interests);
                        var installment_container_selector = "#installment_" + payment_method + "_" + number_of_installment;

                        if (!parent.hasClass("js-quickshop-container")) {
                            installment_helper($(installment_container_selector), number_of_installment, installment_data.installment_value.toFixed(2));
                        }
                    });
                });
                var $installments_container = $(variant.element + " .js-max-installments-container .js-max-installments");
                var $installments_modal_link = $(variant.element + " #btn-installments");
                var $payments_module = $(variant.element + " .js-product-payments-container");
                var $installmens_card_icon = $(variant.element + " .js-installments-credit-card-icon");

                var installments_to_use = max_installments_without_interests[0] > 1 ? max_installments_without_interests : max_installments_with_interests;

                if (installments_to_use[0] <= 1) {
                    $installments_container.hide();
                    $installments_modal_link.hide();
                    $payments_module.hide();
                    $installmens_card_icon.hide();
                } else {
                    $installments_container.show();
                    $installments_modal_link.show();
                    $payments_module.show();
                    $installmens_card_icon.show();
                    installment_helper($installments_container, installments_to_use[0], installments_to_use[1]);
                }
            }

            if (!parent.hasClass("js-quickshop-container")) {
                $("#installments-modal .js-installments-one-payment").text(variant.price_short).attr("data-value", variant.price_number);
            }

            if (variant.price_short) {
                var variant_price_clean = variant.price_short.replace("$", "").replace("R", "").replace(",", "").replace(".", "");
                var variant_price_raw = parseInt(variant_price_clean, 10);

                parent.find(".js-price-display").text(variant.price_short).show();
                parent.find(".js-price-display").attr("content", variant.price_number).data("product-price", variant_price_raw);
            } else {
                parent.find(".js-price-display").hide();
            }

            if (variant.compare_at_price_short && !(parent.find(".js-price-display").css("display") == "none")) {
                parent.find(".js-compare-price-display").text(variant.compare_at_price_short).show();
            } else {
                parent.find(".js-compare-price-display").hide();
            }

            var button = parent.find(".js-addtocart");
            button.removeClass("cart").removeClass("contact").removeClass("nostock");
            var $product_shipping_calculator = parent.find("#product-shipping-container");

            if (!variant.available) {
                button.val("Esgotado");
                button.addClass("nostock");
                button.attr("disabled", "disabled");
                $product_shipping_calculator.hide();
            } else if (variant.contact) {
                button.val("Preço sob Consulta");
                button.addClass("contact");
                button.removeAttr("disabled");
                $product_shipping_calculator.hide();
            } else {
                button.val("Comprar");
                button.addClass("cart");
                button.removeAttr("disabled");
                $product_shipping_calculator.show();
            }

            LS.updateShippingProduct();

            zipcode_on_changevariant = $("#product-shipping-container .js-shipping-input").val();
            $("#product-shipping-container .js-shipping-calculator-current-zip").text(zipcode_on_changevariant);
        }

        $(document).on("change", ".js-variation-option", function (e) {
            var $parent = $(this).closest(".js-product-variants");
            var $variants_group = $(this).closest(".js-product-variants-group");
            var quick_id = $(this).closest(".js-quickshop-container").attr("id");
            if ($parent.hasClass("js-product-quickshop-variants")) {
                LS.changeVariant(changeVariant, ".js-swiper-slide-visible #" + quick_id);
            } else {
                LS.changeVariant(changeVariant, "#single-product");
            }

            var $this_compare_price = $(this).closest(".js-product-container").find(".js-compare-price-display");

            var $this_price = $(this).closest(".js-product-container").find(".js-price-display");
            var $installment_container = $(this).closest(".js-product-container").find(".js-product-payments-container");
            var $installment_text = $(this).closest(".js-product-container").find(".js-max-installments-container");
            var $this_product_container = $(this).closest(".js-product-container");
            var $this_add_to_cart = $(this).closest(".js-product-container").find(".js-prod-submit-form");
            // Get the current product discount percentage value
            var current_percentage_value = $this_product_container.find(".js-offer-percentage");

            // Get the current product price and promotional price
            var compare_price_value = $this_compare_price.html();
            var price_value = $this_price.html();
            // Filter prices to only have numbers
            old_price_value_filtered = parseInt(compare_price_value.replace(/[^0-9]/gi, ""), 10) / 100;
            current_price_value_filtered = parseInt(price_value.replace(/[^0-9]/gi, ""), 10) / 100;
            // Calculate new discount percentage based on difference between filtered old and new prices
            price_difference = old_price_value_filtered - current_price_value_filtered;
            updated_discount_percentage = Math.round((price_difference * 100) / old_price_value_filtered);
            $this_product_container.find(".js-offer-percentage").html(updated_discount_percentage);
            if ($this_compare_price.css("display") == "none") {
                $this_product_container.find(".js-offer-label").hide();
            } else {
                $this_product_container.find(".js-offer-label").css("display", "table");
            }
            if ($this_add_to_cart.hasClass("nostock")) {
                $this_product_container.find(".js-stock-label").show();
            } else {
                $this_product_container.find(".js-stock-label").hide();
            }
            if ($this_price.css("display") == "none") {
                $installment_container.hide();
                $installment_text.hide();
            } else {
                $installment_text.show();
            }
        });

        $(".js-product-form").submit(function (e) {
            var button = $(this).find(":submit");
            button.attr("disabled", "disabled");
            if (button.hasClass("contact") || button.hasClass("catalog")) {
                e.preventDefault();
                var product_id = $(this).find("input[name='add_to_cart']").val();
                window.location = "\x2Fcontato\x2F?product=" + product_id;
            } else if (button.hasClass("cart")) {
                button.val("Incluindo...");
            }
        });

        $(".js-quantity .js-quantity-up").on("click", function () {
            $quantity_input = $(this).closest(".js-quantity").find(".js-quantity-input");
            $quantity_input.val(parseInt($quantity_input.val(), 10) + 1);
        });

        $(".js-quantity .js-quantity-down").on("click", function () {
            $quantity_input = $(this).closest(".js-quantity").find(".js-quantity-input");
            quantity_input_val = $quantity_input.val();
            if (quantity_input_val > 1) {
                $quantity_input.val(parseInt($quantity_input.val(), 10) - 1);
            }
        });

        var head_height = $(".js-head-main").outerHeight();

        if ($(window).width() > 768) {
            $("#cart-sticky-summary").css("top", head_height + 10);
        }

        $(document).on("click", ".js-addtocart:not(.js-addtocart-placeholder)", function (e) {
            var $productContainer = $(this).closest(".js-product-container");
            var $productVariants = $productContainer.find(".js-variation-option");
            var $productButton = $productContainer.find("input[type='submit'].js-addtocart");
            var $productButtonPlaceholder = $productContainer.find(".js-addtocart-placeholder");
            var $productButtonText = $productButtonPlaceholder.find(".js-addtocart-text");
            var $productButtonAdding = $productButtonPlaceholder.find(".js-addtocart-adding");
            var $productButtonSuccess = $productButtonPlaceholder.find(".js-addtocart-success");
            var productButttonHeight = $productButton.height();

            var isQuickShop = $productContainer.hasClass("js-quickshop-container");

            if (!isQuickShop) {
                if ($(".js-product-slide-img.js-active-variant").length) {
                    var imageSrc = $($productContainer.find(".js-product-slide-img.js-active-variant")[0]).data("srcset").split(" ")[0];
                } else {
                    var imageSrc = $($productContainer.find(".js-product-slide-img")[0]).attr("srcset").split(" ")[0];
                }
                var quantity = $productContainer.find(".js-quantity-input").val();
                var name = $productContainer.find(".js-product-name").text();
                var price = $productContainer.find(".js-price-display").text();
                var addedToCartCopy = "Comprar";
            } else {
                var imageSrc = $(this).closest(".js-quickshop-container").find("img").attr("srcset").split(" ")[0];
                var quantity = 1;
                var name = $productContainer.find(".js-item-name").text();
                var price = $productContainer.find(".js-price-display").text().trim();
                var addedToCartCopy = "Comprar";
                if ($productContainer.hasClass("js-quickshop-has-variants")) {
                    var addedToCartCopy = "Comprar";
                } else {
                    var addedToCartCopy = "Comprar";
                }
            }

            if (!$(this).hasClass("contact")) {
                e.preventDefault();

                $productButton.hide();
                $productButtonPlaceholder.show();
                $productButtonPlaceholder.height(productButttonHeight);
                $productButtonText.fadeOut();
                $productButtonAdding.addClass("active");

                var callback_add_to_cart = function () {
                    $(".js-cart-widget-amount").addClass("swing");

                    setTimeout(function () {
                        $(".js-cart-widget-amount").removeClass("swing");
                    }, 6000);

                    $(".js-cart-notification-item-img").attr("srcset", imageSrc);
                    $(".js-cart-notification-item-name").text(name);
                    $(".js-cart-notification-item-quantity").text(quantity);
                    $(".js-cart-notification-item-price").text(price);

                    if ($productVariants.length) {
                        var output = [];

                        $productVariants.each(function () {
                            var variants = $(this);
                            output.push(variants.val());
                        });
                        $(".js-cart-notification-item-variant-container").show();
                        $(".js-cart-notification-item-variant").text(output.join(", "));
                    } else {
                        $(".js-cart-notification-item-variant-container").hide();
                    }

                    var cartItemsAmount = $(".js-cart-widget-amount").first().text();

                    if (cartItemsAmount > 1) {
                        $(".js-cart-counts-plural").show();
                        $(".js-cart-counts-singular").hide();
                    } else {
                        $(".js-cart-counts-singular").show();
                        $(".js-cart-counts-plural").hide();
                    }

                    $productButtonAdding.removeClass("active");
                    $productButtonSuccess.addClass("active");
                    setTimeout(function () {
                        $productButtonSuccess.removeClass("active");
                        $productButtonText.fadeIn();
                    }, 2000);
                    setTimeout(function () {
                        $productButtonPlaceholder.removeAttr("style").hide();
                        $productButton.show();
                    }, 3000);

                    $productContainer.find(".js-added-to-cart-product-message").slideDown();

                    setTimeout(function () {
                        $(".js-alert-added-to-cart").show().addClass("notification-visible").removeClass("notification-hidden");
                    }, 500);

                    if (typeof $.cookie("first_product_added_successfully") === "undefined") {
                        $.cookie("first_product_added_successfully", true, { path: "/", expires: 7 });
                    } else {
                        setTimeout(function () {
                            $(".js-alert-added-to-cart").removeClass("notification-visible").addClass("notification-hidden");
                            setTimeout(function () {
                                $(".js-cart-notification-item-img").attr("src", "");
                                $(".js-alert-added-to-cart").hide();
                            }, 2000);
                        }, 8000);
                    }
                };
                var callback_error = function () {
                    $productButtonAdding.removeClass("active");
                    $productButtonText.fadeIn();
                    $productButtonPlaceholder.removeAttr("style").hide();
                    $productButton.show();
                };
                $prod_form = $(this).closest("form");
                LS.addToCartEnhanced($prod_form, addedToCartCopy, "Incluindo...", "Oops! Não temos mais estoque para incluir este produto ao carrinho.", false, callback_add_to_cart, callback_error);
            }
        });

        $(document).on("keypress", ".js-cart-quantity-input", function (e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                return false;
            }
        });

        $(document).on("focusout", ".js-cart-quantity-input", function (e) {
            $(".js-shipping-calculator-response").hide().empty();
            $(".js-go-checkout-btn").prop("disabled", true);
            var itemID = $(this).attr("data-item-id");
            var itemVAL = $(this).val();
            if (itemVAL == 0) {
                var r = confirm("Tem certeza de que deseja excluir este item?");
                if (r == true) {
                    LS.removeItem(itemID, true);
                } else {
                    $(this).val(1);
                }
            } else {
                LS.changeQuantity(itemID, itemVAL, true);
            }
        });

        $(".js-trigger-empty-cart-alert").click(function (e) {
            e.preventDefault();
            $(".js-mobile-nav-empty-cart-alert").fadeIn(100).delay(1500).fadeOut(500);
        });

        $('form[action="\x2Fcomprar\x2F"]').submit(function () {
            $.removeCookie("first_product_added_successfully", { path: "/" });
        });

        selectShippingOption = function (elem, save_option) {
            $(".js-shipping-method, .js-branch-method").removeClass("js-selected-shipping-method");
            $(elem).addClass("js-selected-shipping-method");

            if (save_option) {
                LS.saveCalculatedShipping(true);
            }
            if ($(elem).hasClass("js-shipping-method-hidden")) {
                if ($(elem).hasClass("js-pickup-option")) {
                    $(".js-other-pickup-options, .js-show-other-pickup-options .js-shipping-see-less").show();
                    $(".js-show-other-pickup-options .js-shipping-see-more").hide();
                } else {
                    $(".js-other-shipping-options, .js-show-more-shipping-options .js-shipping-see-less").show();
                    $(".js-show-more-shipping-options .js-shipping-see-more").hide();
                }
            }
        };

        if (!!$.cookie("calculator_zipcode")) {
            var zipcode_from_cookie = $.cookie("calculator_zipcode");

            $("#product-shipping-container .js-shipping-input").val(zipcode_from_cookie);

            $(".js-shipping-calculator-current-zip").text(zipcode_from_cookie);

            $(".js-shipping-calculator-head").addClass("with-zip").removeClass("with-form");
            $(".js-shipping-calculator-with-zipcode").addClass("transition-up-active");
            $(".js-shipping-calculator-spinner").show();
        } else {
            $(".js-shipping-calculator-form").addClass("transition-up-active");
        }

        removeShippingSuboptions = function () {
            var shipping_suboptions_id = $(".js-modal-shipping-suboptions").attr("id");
            $("#" + shipping_suboptions_id).remove();
            $('.js-modal-overlay[data-modal-id="#' + shipping_suboptions_id + '"').remove();
        };

        $(".js-calculate-shipping").click(function (e) {
            e.preventDefault();

            let shipping_input_val = $(this).closest(".js-shipping-calculator-form").find(".js-shipping-input").val();

            $(".js-shipping-input").val(shipping_input_val);

            if ($(".js-cart-item").length) {
                LS.calculateShippingAjax($("#cart-shipping-container").find(".js-shipping-input").val(), "\x2Ffrete\x2F", $("#cart-shipping-container").closest(".js-shipping-calculator-container"));
            }

            $(".js-shipping-calculator-current-zip").html(shipping_input_val);
            removeShippingSuboptions();
        });

        $(".js-shipping-input").keydown(function (e) {
            var key = e.which ? e.which : e.keyCode;
            var enterKey = 13;
            if (key === enterKey) {
                e.preventDefault();
                $(this).closest(".js-shipping-calculator-form").find(".js-calculate-shipping").click();
                if ($(window).width() < 768) {
                    $(this).blur();
                }
            }
        });

        $(document).on("change", ".js-shipping-method, .js-branch-method", function () {
            selectShippingOption(this, true);
            $(".js-shipping-method-unavailable").hide();
        });

        $(".js-shipping-method:checked").livequery(function () {
            let shippingPrice = $(this).attr("data-price");
            LS.addToTotal(shippingPrice);

            let total = LS.data.cart.total / 100 + parseFloat(shippingPrice);
            $(".js-cart-widget-total").html(LS.formatToCurrency(total));

            selectShippingOption(this, false);
        });

        $(document).on("click", ".js-toggle-branches", function (e) {
            e.preventDefault();
            $(".js-store-branches-container").slideToggle("fast");
            $(".js-see-branches, .js-hide-branches").toggle();
        });

        $(document).on("click", ".js-toggle-more-shipping-options", function (e) {
            e.preventDefault();

            if ($(this).hasClass("js-show-other-pickup-options")) {
                $(".js-other-pickup-options").slideToggle(600);
                $(".js-show-other-pickup-options .js-shipping-see-less, .js-show-other-pickup-options .js-shipping-see-more").toggle();
            } else {
                $(".js-other-shipping-options").slideToggle(600);
                $(".js-show-more-shipping-options .js-shipping-see-less, .js-show-more-shipping-options .js-shipping-see-more").toggle();
            }
        });

        calculateCartShippingOnLoad = function () {
            if ($("#cart-shipping-container .js-shipping-input").val()) {
                // If user already had calculated shipping: recalculate shipping
                setTimeout(function () {
                    LS.calculateShippingAjax($("#cart-shipping-container").find(".js-shipping-input").val(), "\x2Ffrete\x2F", $("#cart-shipping-container").closest(".js-shipping-calculator-container"));
                    removeShippingSuboptions();
                }, 100);
            }

            if ($(".js-branch-method").hasClass("js-selected-shipping-method")) {
            }
        };

        $(document).on("click", ".js-shipping-calculator-change-zipcode", function (e) {
            e.preventDefault();
            $(".js-shipping-calculator-response").fadeOut(100);
            $(".js-shipping-calculator-head").addClass("with-form").removeClass("with-zip");
            $(".js-shipping-calculator-with-zipcode").removeClass("transition-up-active");
            $(".js-shipping-calculator-form").addClass("transition-up-active");
        });

        $(document).on("click", ".js-save-shipping-country", function (e) {
            e.preventDefault();

            var selected_country_url = $(this).closest(".js-modal-shipping-country").find(".js-shipping-country-select option:selected").attr("data-country-url");
            location.href = selected_country_url;

            $(this).text("Aplicando...").addClass("disabled");
        });

        $(".js-winnie-pooh-form").submit(function (e) {
            $(this).attr("action", "");
        });

        $(".js-form").submit(function (e) {
            $(this).find(".js-form-spinner").show();
        });

        $(".js-password-view").click(function () {
            $(this).toggleClass("password-view");

            if ($(this).hasClass("password-view")) {
                $(this).parent().find(".js-password-input").attr("type", "");
                $(this).find(".js-eye-open, .js-eye-closed").toggle();
            } else {
                $(this).parent().find(".js-password-input").attr("type", "password");
                $(this).find(".js-eye-open, .js-eye-closed").toggle();
            }
        });
    });
});
