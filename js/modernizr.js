window.Modernizr = function(e, t, n) {
        function r(e) { b.cssText = e }

        function o(e, t) { return r(S.join(e + ";") + (t || "")) }

        function i(e, t) { return typeof e === t }

        function a(e, t) { return !!~("" + e).indexOf(t) }

        function c(e, t) { for (var r in e) { var o = e[r]; if (!a(o, "-") && b[o] !== n) return "pfx" == t ? o : !0 } return !1 }

        function s(e, t, r) { for (var o in e) { var a = t[e[o]]; if (a !== n) return r === !1 ? e[o] : i(a, "function") ? a.bind(r || t) : a } return !1 }

        function u(e, t, n) {
            var r = e.charAt(0).toUpperCase() + e.slice(1),
                o = (e + " " + k.join(r + " ") + r).split(" ");
            return i(t, "string") || i(t, "undefined") ? c(o, t) : (o = (e + " " + T.join(r + " ") + r).split(" "), s(o, t, n))
        }

        function l() { m.input = function(n) { for (var r = 0, o = n.length; o > r; r++) P[n[r]] = n[r] in E; return P.list && (P.list = !!t.createElement("datalist") && !!e.HTMLDataListElement), P }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), m.inputtypes = function(e) { for (var r, o, i, a = 0, c = e.length; c > a; a++) E.setAttribute("type", o = e[a]), r = "text" !== E.type, r && (E.value = x, E.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(o) && E.style.WebkitAppearance !== n ? (g.appendChild(E), i = t.defaultView, r = i.getComputedStyle && "textfield" !== i.getComputedStyle(E, null).WebkitAppearance && 0 !== E.offsetHeight, g.removeChild(E)) : /^(search|tel)$/.test(o) || (r = /^(url|email)$/.test(o) ? E.checkValidity && E.checkValidity() === !1 : E.value != x)), M[e[a]] = !!r; return M }("search tel url email datetime date month week time datetime-local number range color".split(" ")) }
        var f, d, p = "2.8.2",
            m = {},
            h = !0,
            g = t.documentElement,
            v = "modernizr",
            y = t.createElement(v),
            b = y.style,
            E = t.createElement("input"),
            x = ":)",
            w = {}.toString,
            S = " -webkit- -moz- -o- -ms- ".split(" "),
            C = "Webkit Moz O ms",
            k = C.split(" "),
            T = C.toLowerCase().split(" "),
            j = { svg: "http://www.w3.org/2000/svg" },
            N = {},
            M = {},
            P = {},
            A = [],
            D = A.slice,
            L = function(e, n, r, o) {
                var i, a, c, s, u = t.createElement("div"),
                    l = t.body,
                    f = l || t.createElement("body");
                if (parseInt(r, 10))
                    for (; r--;) c = t.createElement("div"), c.id = o ? o[r] : v + (r + 1), u.appendChild(c);
                return i = ["&#173;", '<style id="s', v, '">', e, "</style>"].join(""), u.id = v, (l ? u : f).innerHTML += i, f.appendChild(u), l || (f.style.background = "", f.style.overflow = "hidden", s = g.style.overflow, g.style.overflow = "hidden", g.appendChild(f)), a = n(u, e), l ? u.parentNode.removeChild(u) : (f.parentNode.removeChild(f), g.style.overflow = s), !!a
            },
            $ = function(t) { var n = e.matchMedia || e.msMatchMedia; if (n) return n(t) && n(t).matches || !1; var r; return L("@media " + t + " { #" + v + " { position: absolute; } }", function(t) { r = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position }), r },
            z = function() {
                function e(e, o) { o = o || t.createElement(r[e] || "div"), e = "on" + e; var a = e in o; return a || (o.setAttribute || (o = t.createElement("div")), o.setAttribute && o.removeAttribute && (o.setAttribute(e, ""), a = i(o[e], "function"), i(o[e], "undefined") || (o[e] = n), o.removeAttribute(e))), o = null, a }
                var r = { select: "input", change: "input", submit: "form", reset: "form", error: "img", load: "img", abort: "img" };
                return e
            }(),
            F = {}.hasOwnProperty;
        d = i(F, "undefined") || i(F.call, "undefined") ? function(e, t) { return t in e && i(e.constructor.prototype[t], "undefined") } : function(e, t) { return F.call(e, t) }, Function.prototype.bind || (Function.prototype.bind = function(e) {
            var t = this;
            if ("function" != typeof t) throw new TypeError;
            var n = D.call(arguments, 1),
                r = function() {
                    if (this instanceof r) {
                        var o = function() {};
                        o.prototype = t.prototype;
                        var i = new o,
                            a = t.apply(i, n.concat(D.call(arguments)));
                        return Object(a) === a ? a : i
                    }
                    return t.apply(e, n.concat(D.call(arguments)))
                };
            return r
        }), N.flexbox = function() { return u("flexWrap") }, N.flexboxlegacy = function() { return u("boxDirection") }, N.canvas = function() { var e = t.createElement("canvas"); return !!e.getContext && !!e.getContext("2d") }, N.canvastext = function() { return !!m.canvas && !!i(t.createElement("canvas").getContext("2d").fillText, "function") }, N.webgl = function() { return !!e.WebGLRenderingContext }, N.touch = function() { var n; return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : L(["@media (", S.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) { n = 9 === e.offsetTop }), n }, N.geolocation = function() { return "geolocation" in navigator }, N.postmessage = function() { return !!e.postMessage }, N.websqldatabase = function() { return !!e.openDatabase }, N.indexedDB = function() { return !!u("indexedDB", e) }, N.hashchange = function() { return z("hashchange", e) && (t.documentMode === n || t.documentMode > 7) }, N.history = function() { return !!e.history && !!history.pushState }, N.draganddrop = function() { var e = t.createElement("div"); return "draggable" in e || "ondragstart" in e && "ondrop" in e }, N.websockets = function() { return "WebSocket" in e || "MozWebSocket" in e }, N.rgba = function() { return r("background-color:rgba(150,255,150,.5)"), a(b.backgroundColor, "rgba") }, N.hsla = function() { return r("background-color:hsla(120,40%,100%,.5)"), a(b.backgroundColor, "rgba") || a(b.backgroundColor, "hsla") }, N.multiplebgs = function() { return r("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(b.background) }, N.backgroundsize = function() { return u("backgroundSize") }, N.borderimage = function() { return u("borderImage") }, N.borderradius = function() { return u("borderRadius") }, N.boxshadow = function() { return u("boxShadow") }, N.textshadow = function() { return "" === t.createElement("div").style.textShadow }, N.opacity = function() { return o("opacity:.55"), /^0.55$/.test(b.opacity) }, N.cssanimations = function() { return u("animationName") }, N.csscolumns = function() { return u("columnCount") }, N.cssgradients = function() {
            var e = "background-image:",
                t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                n = "linear-gradient(left top,#9f9, white);";
            return r((e + "-webkit- ".split(" ").join(t + e) + S.join(n + e)).slice(0, -e.length)), a(b.backgroundImage, "gradient")
        }, N.cssreflections = function() { return u("boxReflect") }, N.csstransforms = function() { return !!u("transform") }, N.csstransforms3d = function() { var e = !!u("perspective"); return e && "webkitPerspective" in g.style && L("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t) { e = 9 === t.offsetLeft && 3 === t.offsetHeight }), e }, N.csstransitions = function() { return u("transition") }, N.fontface = function() {
            var e;
            return L('@font-face {font-family:"font";src:url("https://")}', function(n, r) {
                var o = t.getElementById("smodernizr"),
                    i = o.sheet || o.styleSheet,
                    a = i ? i.cssRules && i.cssRules[0] ? i.cssRules[0].cssText : i.cssText || "" : "";
                e = /src/i.test(a) && 0 === a.indexOf(r.split(" ")[0])
            }), e
        }, N.generatedcontent = function() { var e; return L(["#", v, "{font:0/0 a}#", v, ':after{content:"', x, '";visibility:hidden;font:3px/1 a}'].join(""), function(t) { e = t.offsetHeight >= 3 }), e }, N.video = function() {
            var e = t.createElement("video"),
                n = !1;
            try {
                (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
            } catch (r) {}
            return n
        }, N.audio = function() {
            var e = t.createElement("audio"),
                n = !1;
            try {
                (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
            } catch (r) {}
            return n
        }, N.localstorage = function() { try { return localStorage.setItem(v, v), localStorage.removeItem(v), !0 } catch (e) { return !1 } }, N.sessionstorage = function() { try { return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0 } catch (e) { return !1 } }, N.webworkers = function() { return !!e.Worker }, N.applicationcache = function() { return !!e.applicationCache }, N.svg = function() { return !!t.createElementNS && !!t.createElementNS(j.svg, "svg").createSVGRect }, N.inlinesvg = function() { var e = t.createElement("div"); return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == j.svg }, N.smil = function() { return !!t.createElementNS && /SVGAnimate/.test(w.call(t.createElementNS(j.svg, "animate"))) }, N.svgclippaths = function() { return !!t.createElementNS && /SVGClipPath/.test(w.call(t.createElementNS(j.svg, "clipPath"))) };
        for (var O in N) d(N, O) && (f = O.toLowerCase(), m[f] = N[O](), A.push((m[f] ? "" : "no-") + f));
        return m.input || l(), m.addTest = function(e, t) {
                if ("object" == typeof e)
                    for (var r in e) d(e, r) && m.addTest(r, e[r]);
                else {
                    if (e = e.toLowerCase(), m[e] !== n) return m;
                    t = "function" == typeof t ? t() : t, "undefined" != typeof h && h && (g.className += " " + (t ? "" : "no-") + e), m[e] = t
                }
                return m
            }, r(""), y = E = null,
            function(e, t) {
                function n(e, t) {
                    var n = e.createElement("p"),
                        r = e.getElementsByTagName("head")[0] || e.documentElement;
                    return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
                }

                function r() { var e = y.elements; return "string" == typeof e ? e.split(" ") : e }

                function o(e) { var t = v[e[h]]; return t || (t = {}, g++, e[h] = g, v[g] = t), t }

                function i(e, n, r) {
                    if (n || (n = t), l) return n.createElement(e);
                    r || (r = o(n));
                    var i;
                    return i = r.cache[e] ? r.cache[e].cloneNode() : m.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !i.canHaveChildren || p.test(e) || i.tagUrn ? i : r.frag.appendChild(i)
                }

                function a(e, n) {
                    if (e || (e = t), l) return e.createDocumentFragment();
                    n = n || o(e);
                    for (var i = n.frag.cloneNode(), a = 0, c = r(), s = c.length; s > a; a++) i.createElement(c[a]);
                    return i
                }

                function c(e, t) { t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) { return y.shivMethods ? i(n, e, t) : t.createElem(n) }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-]+/g, function(e) { return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")' }) + ");return n}")(y, t.frag) }

                function s(e) { e || (e = t); var r = o(e); return y.shivCSS && !u && !r.hasCSS && (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), l || c(e, r), e }
                var u, l, f = "3.7.0",
                    d = e.html5 || {},
                    p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    m = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    h = "_html5shiv",
                    g = 0,
                    v = {};
                ! function() {
                    try {
                        var e = t.createElement("a");
                        e.innerHTML = "<xyz></xyz>", u = "hidden" in e, l = 1 == e.childNodes.length || function() { t.createElement("a"); var e = t.createDocumentFragment(); return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement }()
                    } catch (n) { u = !0, l = !0 }
                }();
                var y = { elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video", version: f, shivCSS: d.shivCSS !== !1, supportsUnknownElements: l, shivMethods: d.shivMethods !== !1, type: "default", shivDocument: s, createElement: i, createDocumentFragment: a };
                e.html5 = y, s(t)
            }(this, t), m._version = p, m._prefixes = S, m._domPrefixes = T, m._cssomPrefixes = k, m.mq = $, m.hasEvent = z, m.testProp = function(e) { return c([e]) }, m.testAllProps = u, m.testStyles = L, m.prefixed = function(e, t, n) { return t ? u(e, t, n) : u(e, "pfx") }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (h ? " js " + A.join(" ") : ""), m
    }(this, this.document),
    function(e, t, n) {
        function r(e) { return "[object Function]" == g.call(e) }

        function o(e) { return "string" == typeof e }

        function i() {}

        function a(e) { return !e || "loaded" == e || "complete" == e || "uninitialized" == e }

        function c() {
            var e = v.shift();
            y = 1, e ? e.t ? m(function() {
                ("c" == e.t ? d.injectCss : d.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
            }, 0) : (e(), c()) : y = 0
        }

        function s(e, n, r, o, i, s, u) {
            function l(t) { if (!p && a(f.readyState) && (b.r = p = 1, !y && c(), f.onload = f.onreadystatechange = null, t)) { "img" != e && m(function() { x.removeChild(f) }, 50); for (var r in T[n]) T[n].hasOwnProperty(r) && T[n][r].onload() } }
            var u = u || d.errorTimeout,
                f = t.createElement(e),
                p = 0,
                g = 0,
                b = { t: r, s: n, e: i, a: s, x: u };
            1 === T[n] && (g = 1, T[n] = []), "object" == e ? f.data = n : (f.src = n, f.type = e), f.width = f.height = "0", f.onerror = f.onload = f.onreadystatechange = function() { l.call(this, g) }, v.splice(o, 0, b), "img" != e && (g || 2 === T[n] ? (x.insertBefore(f, E ? null : h), m(l, u)) : T[n].push(f))
        }

        function u(e, t, n, r, i) { return y = 0, t = t || "j", o(e) ? s("c" == t ? S : w, e, t, this.i++, n, r, i) : (v.splice(this.i++, 0, e), 1 == v.length && c()), this }

        function l() { var e = d; return e.loader = { load: u, i: 0 }, e }
        var f, d, p = t.documentElement,
            m = e.setTimeout,
            h = t.getElementsByTagName("script")[0],
            g = {}.toString,
            v = [],
            y = 0,
            b = "MozAppearance" in p.style,
            E = b && !!t.createRange().compareNode,
            x = E ? p : h.parentNode,
            p = e.opera && "[object Opera]" == g.call(e.opera),
            p = !!t.attachEvent && !p,
            w = b ? "object" : p ? "script" : "img",
            S = p ? "script" : w,
            C = Array.isArray || function(e) { return "[object Array]" == g.call(e) },
            k = [],
            T = {},
            j = { timeout: function(e, t) { return t.length && (e.timeout = t[0]), e } };
        d = function(e) {
            function t(e) {
                var t, n, r, e = e.split("!"),
                    o = k.length,
                    i = e.pop(),
                    a = e.length,
                    i = { url: i, origUrl: i, prefixes: e };
                for (n = 0; a > n; n++) r = e[n].split("="), (t = j[r.shift()]) && (i = t(i, r));
                for (n = 0; o > n; n++) i = k[n](i);
                return i
            }

            function a(e, o, i, a, c) {
                var s = t(e),
                    u = s.autoCallback;
                s.url.split(".").pop().split("?").shift(), s.bypass || (o && (o = r(o) ? o : o[e] || o[a] || o[e.split("/").pop().split("?")[0]]), s.instead ? s.instead(e, o, i, a, c) : (T[s.url] ? s.noexec = !0 : T[s.url] = 1, i.load(s.url, s.forceCSS || !s.forceJS && "css" == s.url.split(".").pop().split("?").shift() ? "c" : n, s.noexec, s.attrs, s.timeout), (r(o) || r(u)) && i.load(function() { l(), o && o(s.origUrl, c, a), u && u(s.origUrl, c, a), T[s.url] = 2 })))
            }

            function c(e, t) {
                function n(e, n) {
                    if (e) {
                        if (o(e)) n || (f = function() {
                            var e = [].slice.call(arguments);
                            d.apply(this, e), p()
                        }), a(e, f, t, 0, u);
                        else if (Object(e) === e)
                            for (s in c = function() { var t, n = 0; for (t in e) e.hasOwnProperty(t) && n++; return n }(), e) e.hasOwnProperty(s) && (!n && !--c && (r(f) ? f = function() {
                                var e = [].slice.call(arguments);
                                d.apply(this, e), p()
                            } : f[s] = function(e) {
                                return function() {
                                    var t = [].slice.call(arguments);
                                    e && e.apply(this, t), p()
                                }
                            }(d[s])), a(e[s], f, t, s, u))
                    } else !n && p()
                }
                var c, s, u = !!e.test,
                    l = e.load || e.both,
                    f = e.callback || i,
                    d = f,
                    p = e.complete || i;
                n(u ? e.yep : e.nope, !!l), l && n(l)
            }
            var s, u, f = this.yepnope.loader;
            if (o(e)) a(e, 0, f, 0);
            else if (C(e))
                for (s = 0; s < e.length; s++) u = e[s], o(u) ? a(u, 0, f, 0) : C(u) ? d(u) : Object(u) === u && c(u, f);
            else Object(e) === e && c(e, f)
        }, d.addPrefix = function(e, t) { j[e] = t }, d.addFilter = function(e) { k.push(e) }, d.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", f = function() { t.removeEventListener("DOMContentLoaded", f, 0), t.readyState = "complete" }, 0)), e.yepnope = l(), e.yepnope.executeStack = c, e.yepnope.injectJs = function(e, n, r, o, s, u) {
            var l, f, p = t.createElement("script"),
                o = o || d.errorTimeout;
            p.src = e;
            for (f in r) p.setAttribute(f, r[f]);
            n = u ? c : n || i, p.onreadystatechange = p.onload = function() {!l && a(p.readyState) && (l = 1, n(), p.onload = p.onreadystatechange = null) }, m(function() { l || (l = 1, n(1)) }, o), s ? p.onload() : h.parentNode.insertBefore(p, h)
        }, e.yepnope.injectCss = function(e, n, r, o, a, s) {
            var u, o = t.createElement("link"),
                n = s ? c : n || i;
            o.href = e, o.rel = "stylesheet", o.type = "text/css";
            for (u in r) o.setAttribute(u, r[u]);
            a || (h.parentNode.insertBefore(o, h), m(n, 0))
        }
    }(this, document), Modernizr.load = function() { yepnope.apply(window, [].slice.call(arguments, 0)) };