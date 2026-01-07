function Bn(r) {
    if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return r
}

function Hd(r, e) {
    r.prototype = Object.create(e.prototype), r.prototype.constructor = r, r.__proto__ = e
}
/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Cr = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    },
    No = {
        duration: .5,
        overwrite: !1,
        delay: 0
    },
    dh, _i, bt, _n = 1e8,
    Li = 1 / _n,
    wc = Math.PI * 2,
    B0 = wc / 4,
    N0 = 0,
    qd = Math.sqrt,
    I0 = Math.cos,
    z0 = Math.sin,
    hi = function(e) {
        return typeof e == "string"
    },
    Pt = function(e) {
        return typeof e == "function"
    },
    Un = function(e) {
        return typeof e == "number"
    },
    ph = function(e) {
        return typeof e > "u"
    },
    wn = function(e) {
        return typeof e == "object"
    },
    sr = function(e) {
        return e !== !1
    },
    gh = function() {
        return typeof window < "u"
    },
    yl = function(e) {
        return Pt(e) || hi(e)
    },
    $d = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {},
    Oi = Array.isArray,
    bc = /(?:-?\.?\d|\.)+/gi,
    Ud = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    wo = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    Wu = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    Wd = /[+-]=-?[.\d]+/,
    Yd = /[^,'"\[\]\s]+/gi,
    V0 = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    Ct, hn, xc, mh, Sr = {},
    Zl = {},
    Xd, jd = function(e) {
        return (Zl = Io(e, Sr)) && hr
    },
    _h = function(e, t) {
        return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
    },
    Na = function(e, t) {
        return !t && console.warn(e)
    },
    Gd = function(e, t) {
        return e && (Sr[e] = t) && Zl && (Zl[e] = t) || Sr
    },
    Ia = function() {
        return 0
    },
    H0 = {
        suppressEvents: !0,
        isStart: !0,
        kill: !1
    },
    Nl = {
        suppressEvents: !0,
        kill: !1
    },
    q0 = {
        suppressEvents: !0
    },
    yh = {},
    ds = [],
    Ec = {},
    Jd, vr = {},
    Yu = {},
    bf = 30,
    Il = [],
    Dh = "",
    vh = function(e) {
        var t = e[0],
            i, n;
        if (wn(t) || Pt(t) || (e = [e]), !(i = (t._gsap || {})
                .harness)) {
            for (n = Il.length; n-- && !Il[n].targetTest(t););
            i = Il[n]
        }
        for (n = e.length; n--;) e[n] && (e[n]._gsap || (e[n]._gsap = new vp(e[n], i))) || e.splice(n, 1);
        return e
    },
    qs = function(e) {
        return e._gsap || vh(Vr(e))[0]._gsap
    },
    Kd = function(e, t, i) {
        return (i = e[t]) && Pt(i) ? e[t]() : ph(i) && e.getAttribute && e.getAttribute(t) || i
    },
    or = function(e, t) {
        return (e = e.split(","))
            .forEach(t) || e
    },
    Mt = function(e) {
        return Math.round(e * 1e5) / 1e5 || 0
    },
    Wt = function(e) {
        return Math.round(e * 1e7) / 1e7 || 0
    },
    Ao = function(e, t) {
        var i = t.charAt(0),
            n = parseFloat(t.substr(2));
        return e = parseFloat(e), i === "+" ? e + n : i === "-" ? e - n : i === "*" ? e * n : e / n
    },
    $0 = function(e, t) {
        for (var i = t.length, n = 0; e.indexOf(t[n]) < 0 && ++n < i;);
        return n < i
    },
    Ql = function() {
        var e = ds.length,
            t = ds.slice(0),
            i, n;
        for (Ec = {}, ds.length = 0, i = 0; i < e; i++) n = t[i], n && n._lazy && (n.render(n._lazy[0], n._lazy[1], !0)
            ._lazy = 0)
    },
    Zd = function(e, t, i, n) {
        ds.length && !_i && Ql(), e.render(t, i, _i && t < 0 && (e._initted || e._startAt)), ds.length && !_i && Ql()
    },
    Qd = function(e) {
        var t = parseFloat(e);
        return (t || t === 0) && (e + "")
            .match(Yd)
            .length < 2 ? t : hi(e) ? e.trim() : e
    },
    ep = function(e) {
        return e
    },
    Tr = function(e, t) {
        for (var i in t) i in e || (e[i] = t[i]);
        return e
    },
    U0 = function(e) {
        return function(t, i) {
            for (var n in i) n in t || n === "duration" && e || n === "ease" || (t[n] = i[n])
        }
    },
    Io = function(e, t) {
        for (var i in t) e[i] = t[i];
        return e
    },
    xf = function r(e, t) {
        for (var i in t) i !== "__proto__" && i !== "constructor" && i !== "prototype" && (e[i] = wn(t[i]) ? r(e[i] || (e[i] = {}), t[i]) : t[i]);
        return e
    },
    eu = function(e, t) {
        var i = {},
            n;
        for (n in e) n in t || (i[n] = e[n]);
        return i
    },
    wa = function(e) {
        var t = e.parent || Ct,
            i = e.keyframes ? U0(Oi(e.keyframes)) : Tr;
        if (sr(e.inherit))
            for (; t;) i(e, t.vars.defaults), t = t.parent || t._dp;
        return e
    },
    W0 = function(e, t) {
        for (var i = e.length, n = i === t.length; n && i-- && e[i] === t[i];);
        return i < 0
    },
    tp = function(e, t, i, n, s) {
        var o = e[n],
            a;
        if (s)
            for (a = t[s]; o && o[s] > a;) o = o._prev;
        return o ? (t._next = o._next, o._next = t) : (t._next = e[i], e[i] = t), t._next ? t._next._prev = t : e[n] = t, t._prev = o, t.parent = t._dp = e, t
    },
    Du = function(e, t, i, n) {
        i === void 0 && (i = "_first"), n === void 0 && (n = "_last");
        var s = t._prev,
            o = t._next;
        s ? s._next = o : e[i] === t && (e[i] = o), o ? o._prev = s : e[n] === t && (e[n] = s), t._next = t._prev = t.parent = null
    },
    ms = function(e, t) {
        e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0
    },
    $s = function(e, t) {
        if (e && (!t || t._end > e._dur || t._start < 0))
            for (var i = e; i;) i._dirty = 1, i = i.parent;
        return e
    },
    Y0 = function(e) {
        for (var t = e.parent; t && t.parent;) t._dirty = 1, t.totalDuration(), t = t.parent;
        return e
    },
    Cc = function(e, t, i, n) {
        return e._startAt && (_i ? e._startAt.revert(Nl) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, n))
    },
    X0 = function r(e) {
        return !e || e._ts && r(e.parent)
    },
    Ef = function(e) {
        return e._repeat ? zo(e._tTime, e = e.duration() + e._rDelay) * e : 0
    },
    zo = function(e, t) {
        var i = Math.floor(e = Wt(e / t));
        return e && i === e ? i - 1 : i
    },
    tu = function(e, t) {
        return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    },
    vu = function(e) {
        return e._end = Wt(e._start + (e._tDur / Math.abs(e._ts || e._rts || Li) || 0))
    },
    wu = function(e, t) {
        var i = e._dp;
        return i && i.smoothChildTiming && e._ts && (e._start = Wt(i._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), vu(e), i._dirty || $s(i, e)), e
    },
    ip = function(e, t) {
        var i;
        if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (i = tu(e.rawTime(), t), (!t._dur || Ka(0, t.totalDuration(), i) - t._tTime > Li) && t.render(i, !0)), $s(e, t)
            ._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration())
                for (i = e; i._dp;) i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
            e._zTime = -1e-8
        }
    },
    dn = function(e, t, i, n) {
        return t.parent && ms(t), t._start = Wt((Un(i) ? i : i || e !== Ct ? Br(e, i, t) : e._time) + t._delay), t._end = Wt(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), tp(e, t, "_first", "_last", e._sort ? "_start" : 0), Sc(t) || (e._recent = t), n || ip(e, t), e._ts < 0 && wu(e, e._tTime), e
    },
    rp = function(e, t) {
        return (Sr.ScrollTrigger || _h("scrollTrigger", t)) && Sr.ScrollTrigger.create(t, e)
    },
    np = function(e, t, i, n, s) {
        if (bh(e, t, s), !e._initted) return 1;
        if (!i && e._pt && !_i && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Jd !== br.frame) return ds.push(e), e._lazy = [s, n], 1
    },
    j0 = function r(e) {
        var t = e.parent;
        return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || r(t))
    },
    Sc = function(e) {
        var t = e.data;
        return t === "isFromStart" || t === "isStart"
    },
    G0 = function(e, t, i, n) {
        var s = e.ratio,
            o = t < 0 || !t && (!e._start && j0(e) && !(!e._initted && Sc(e)) || (e._ts < 0 || e._dp._ts < 0) && !Sc(e)) ? 0 : 1,
            a = e._rDelay,
            l = 0,
            u, c, h;
        if (a && e._repeat && (l = Ka(0, e._tDur, t), c = zo(l, a), e._yoyo && c & 1 && (o = 1 - o), c !== zo(e._tTime, a) && (s = 1 - o, e.vars.repeatRefresh && e._initted && e.invalidate())), o !== s || _i || n || e._zTime === Li || !t && e._zTime) {
            if (!e._initted && np(e, t, n, i, l)) return;
            for (h = e._zTime, e._zTime = t || (i ? Li : 0), i || (i = t && !h), e.ratio = o, e._from && (o = 1 - o), e._time = 0, e._tTime = l, u = e._pt; u;) u.r(o, u.d), u = u._next;
            t < 0 && Cc(e, t, i, !0), e._onUpdate && !i && Er(e, "onUpdate"), l && e._repeat && !i && e.parent && Er(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === o && (o && ms(e, 1), !i && !_i && (Er(e, o ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
        } else e._zTime || (e._zTime = t)
    },
    J0 = function(e, t, i) {
        var n;
        if (i > t)
            for (n = e._first; n && n._start <= i;) {
                if (n.data === "isPause" && n._start > t) return n;
                n = n._next
            } else
                for (n = e._last; n && n._start >= i;) {
                    if (n.data === "isPause" && n._start < t) return n;
                    n = n._prev
                }
    },
    Vo = function(e, t, i, n) {
        var s = e._repeat,
            o = Wt(t) || 0,
            a = e._tTime / e._tDur;
        return a && !n && (e._time *= o / e._dur), e._dur = o, e._tDur = s ? s < 0 ? 1e10 : Wt(o * (s + 1) + e._rDelay * s) : o, a > 0 && !n && wu(e, e._tTime = e._tDur * a), e.parent && vu(e), i || $s(e.parent, e), e
    },
    Cf = function(e) {
        return e instanceof Gi ? $s(e) : Vo(e, e._dur)
    },
    K0 = {
        _start: 0,
        endTime: Ia,
        totalDuration: Ia
    },
    Br = function r(e, t, i) {
        var n = e.labels,
            s = e._recent || K0,
            o = e.duration() >= _n ? s.endTime(!1) : e._dur,
            a, l, u;
        return hi(t) && (isNaN(t) || t in n) ? (l = t.charAt(0), u = t.substr(-1) === "%", a = t.indexOf("="), l === "<" || l === ">" ? (a >= 0 && (t = t.replace(/=/, "")), (l === "<" ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (u ? (a < 0 ? s : i)
            .totalDuration() / 100 : 1)) : a < 0 ? (t in n || (n[t] = o), n[t]) : (l = parseFloat(t.charAt(a - 1) + t.substr(a + 1)), u && i && (l = l / 100 * (Oi(i) ? i[0] : i)
            .totalDuration()), a > 1 ? r(e, t.substr(0, a - 1), i) + l : o + l)) : t == null ? o : +t
    },
    ba = function(e, t, i) {
        var n = Un(t[1]),
            s = (n ? 2 : 1) + (e < 2 ? 0 : 1),
            o = t[s],
            a, l;
        if (n && (o.duration = t[1]), o.parent = i, e) {
            for (a = o, l = i; l && !("immediateRender" in a);) a = l.vars.defaults || {}, l = sr(l.vars.inherit) && l.parent;
            o.immediateRender = sr(a.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = t[s - 1]
        }
        return new Ut(t[0], o, t[s + 1])
    },
    Ds = function(e, t) {
        return e || e === 0 ? t(e) : t
    },
    Ka = function(e, t, i) {
        return i < e ? e : i > t ? t : i
    },
    Pi = function(e, t) {
        return !hi(e) || !(t = V0.exec(e)) ? "" : t[1]
    },
    Z0 = function(e, t, i) {
        return Ds(i, function(n) {
            return Ka(e, t, n)
        })
    },
    Tc = [].slice,
    sp = function(e, t) {
        return e && wn(e) && "length" in e && (!t && !e.length || e.length - 1 in e && wn(e[0])) && !e.nodeType && e !== hn
    },
    Q0 = function(e, t, i) {
        return i === void 0 && (i = []), e.forEach(function(n) {
            var s;
            return hi(n) && !t || sp(n, 1) ? (s = i)
                .push.apply(s, Vr(n)) : i.push(n)
        }) || i
    },
    Vr = function(e, t, i) {
        return bt && !t && bt.selector ? bt.selector(e) : hi(e) && !i && (xc || !Ho()) ? Tc.call((t || mh)
            .querySelectorAll(e), 0) : Oi(e) ? Q0(e, i) : sp(e) ? Tc.call(e, 0) : e ? [e] : []
    },
    kc = function(e) {
        return e = Vr(e)[0] || Na("Invalid scope") || {},
            function(t) {
                var i = e.current || e.nativeElement || e;
                return Vr(t, i.querySelectorAll ? i : i === e ? Na("Invalid scope") || mh.createElement("div") : e)
            }
    },
    op = function(e) {
        return e.sort(function() {
            return .5 - Math.random()
        })
    },
    ap = function(e) {
        if (Pt(e)) return e;
        var t = wn(e) ? e : {
                each: e
            },
            i = Us(t.ease),
            n = t.from || 0,
            s = parseFloat(t.base) || 0,
            o = {},
            a = n > 0 && n < 1,
            l = isNaN(n) || a,
            u = t.axis,
            c = n,
            h = n;
        return hi(n) ? c = h = {
                center: .5,
                edges: .5,
                end: 1
            } [n] || 0 : !a && l && (c = n[0], h = n[1]),
            function(f, g, m) {
                var d = (m || t)
                    .length,
                    p = o[d],
                    y, b, w, S, x, P, C, A, k;
                if (!p) {
                    if (k = t.grid === "auto" ? 0 : (t.grid || [1, _n])[1], !k) {
                        for (C = -1e8; C < (C = m[k++].getBoundingClientRect()
                                .left) && k < d;);
                        k < d && k--
                    }
                    for (p = o[d] = [], y = l ? Math.min(k, d) * c - .5 : n % k, b = k === _n ? 0 : l ? d * h / k - .5 : n / k | 0, C = 0, A = _n, P = 0; P < d; P++) w = P % k - y, S = b - (P / k | 0), p[P] = x = u ? Math.abs(u === "y" ? S : w) : qd(w * w + S * S), x > C && (C = x), x < A && (A = x);
                    n === "random" && op(p), p.max = C - A, p.min = A, p.v = d = (parseFloat(t.amount) || parseFloat(t.each) * (k > d ? d - 1 : u ? u === "y" ? d / k : k : Math.max(k, d / k)) || 0) * (n === "edges" ? -1 : 1), p.b = d < 0 ? s - d : s, p.u = Pi(t.amount || t.each) || 0, i = i && d < 0 ? _p(i) : i
                }
                return d = (p[f] - p.min) / p.max || 0, Wt(p.b + (i ? i(d) : d) * p.v) + p.u
            }
    },
    Pc = function(e) {
        var t = Math.pow(10, ((e + "")
                .split(".")[1] || "")
            .length);
        return function(i) {
            var n = Wt(Math.round(parseFloat(i) / e) * e * t);
            return (n - n % 1) / t + (Un(i) ? 0 : Pi(i))
        }
    },
    lp = function(e, t) {
        var i = Oi(e),
            n, s;
        return !i && wn(e) && (n = i = e.radius || _n, e.values ? (e = Vr(e.values), (s = !Un(e[0])) && (n *= n)) : e = Pc(e.increment)), Ds(t, i ? Pt(e) ? function(o) {
            return s = e(o), Math.abs(s - o) <= n ? s : o
        } : function(o) {
            for (var a = parseFloat(s ? o.x : o), l = parseFloat(s ? o.y : 0), u = _n, c = 0, h = e.length, f, g; h--;) s ? (f = e[h].x - a, g = e[h].y - l, f = f * f + g * g) : f = Math.abs(e[h] - a), f < u && (u = f, c = h);
            return c = !n || u <= n ? e[c] : o, s || c === o || Un(o) ? c : c + Pi(o)
        } : Pc(e))
    },
    up = function(e, t, i, n) {
        return Ds(Oi(e) ? !t : i === !0 ? !!(i = 0) : !n, function() {
            return Oi(e) ? e[~~(Math.random() * e.length)] : (i = i || 1e-5) && (n = i < 1 ? Math.pow(10, (i + "")
                .length - 2) : 1) && Math.floor(Math.round((e - i / 2 + Math.random() * (t - e + i * .99)) / i) * i * n) / n
        })
    },
    em = function() {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        return function(n) {
            return t.reduce(function(s, o) {
                return o(s)
            }, n)
        }
    },
    tm = function(e, t) {
        return function(i) {
            return e(parseFloat(i)) + (t || Pi(i))
        }
    },
    im = function(e, t, i) {
        return hp(e, t, 0, 1, i)
    },
    cp = function(e, t, i) {
        return Ds(i, function(n) {
            return e[~~t(n)]
        })
    },
    rm = function r(e, t, i) {
        var n = t - e;
        return Oi(e) ? cp(e, r(0, e.length), t) : Ds(i, function(s) {
            return (n + (s - e) % n) % n + e
        })
    },
    nm = function r(e, t, i) {
        var n = t - e,
            s = n * 2;
        return Oi(e) ? cp(e, r(0, e.length - 1), t) : Ds(i, function(o) {
            return o = (s + (o - e) % s) % s || 0, e + (o > n ? s - o : o)
        })
    },
    za = function(e) {
        for (var t = 0, i = "", n, s, o, a; ~(n = e.indexOf("random(", t));) o = e.indexOf(")", n), a = e.charAt(n + 7) === "[", s = e.substr(n + 7, o - n - 7)
            .match(a ? Yd : bc), i += e.substr(t, n - t) + up(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5), t = o + 1;
        return i + e.substr(t, e.length - t)
    },
    hp = function(e, t, i, n, s) {
        var o = t - e,
            a = n - i;
        return Ds(s, function(l) {
            return i + ((l - e) / o * a || 0)
        })
    },
    sm = function r(e, t, i, n) {
        var s = isNaN(e + t) ? 0 : function(g) {
            return (1 - g) * e + g * t
        };
        if (!s) {
            var o = hi(e),
                a = {},
                l, u, c, h, f;
            if (i === !0 && (n = 1) && (i = null), o) e = {
                p: e
            }, t = {
                p: t
            };
            else if (Oi(e) && !Oi(t)) {
                for (c = [], h = e.length, f = h - 2, u = 1; u < h; u++) c.push(r(e[u - 1], e[u]));
                h--, s = function(m) {
                    m *= h;
                    var d = Math.min(f, ~~m);
                    return c[d](m - d)
                }, i = t
            } else n || (e = Io(Oi(e) ? [] : {}, e));
            if (!c) {
                for (l in t) wh.call(a, e, l, "get", t[l]);
                s = function(m) {
                    return Ch(m, a) || (o ? e.p : e)
                }
            }
        }
        return Ds(i, s)
    },
    Sf = function(e, t, i) {
        var n = e.labels,
            s = _n,
            o, a, l;
        for (o in n) a = n[o] - t, a < 0 == !!i && a && s > (a = Math.abs(a)) && (l = o, s = a);
        return l
    },
    Er = function(e, t, i) {
        var n = e.vars,
            s = n[t],
            o = bt,
            a = e._ctx,
            l, u, c;
        if (s) return l = n[t + "Params"], u = n.callbackScope || e, i && ds.length && Ql(), a && (bt = a), c = l ? s.apply(u, l) : s.call(u), bt = o, c
    },
    fa = function(e) {
        return ms(e), e.scrollTrigger && e.scrollTrigger.kill(!!_i), e.progress() < 1 && Er(e, "onInterrupt"), e
    },
    bo, fp = [],
    dp = function(e) {
        if (e)
            if (e = !e.name && e.default || e, gh() || e.headless) {
                var t = e.name,
                    i = Pt(e),
                    n = t && !i && e.init ? function() {
                        this._props = []
                    } : e,
                    s = {
                        init: Ia,
                        render: Ch,
                        add: wh,
                        kill: wm,
                        modifier: vm,
                        rawVars: 0
                    },
                    o = {
                        targetTest: 0,
                        get: 0,
                        getSetter: Eh,
                        aliases: {},
                        register: 0
                    };
                if (Ho(), e !== n) {
                    if (vr[t]) return;
                    Tr(n, Tr(eu(e, s), o)), Io(n.prototype, Io(s, eu(e, o))), vr[n.prop = t] = n, e.targetTest && (Il.push(n), yh[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0)
                        .toUpperCase() + t.substr(1)) + "Plugin"
                }
                Gd(t, n), e.register && e.register(hr, n, ar)
            } else fp.push(e)
    },
    at = 255,
    da = {
        aqua: [0, at, at],
        lime: [0, at, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, at],
        navy: [0, 0, 128],
        white: [at, at, at],
        olive: [128, 128, 0],
        yellow: [at, at, 0],
        orange: [at, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [at, 0, 0],
        pink: [at, 192, 203],
        cyan: [0, at, at],
        transparent: [at, at, at, 0]
    },
    Xu = function(e, t, i) {
        return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (i - t) * e * 6 : e < .5 ? i : e * 3 < 2 ? t + (i - t) * (2 / 3 - e) * 6 : t) * at + .5 | 0
    },
    pp = function(e, t, i) {
        var n = e ? Un(e) ? [e >> 16, e >> 8 & at, e & at] : 0 : da.black,
            s, o, a, l, u, c, h, f, g, m;
        if (!n) {
            if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), da[e]) n = da[e];
            else if (e.charAt(0) === "#") {
                if (e.length < 6 && (s = e.charAt(1), o = e.charAt(2), a = e.charAt(3), e = "#" + s + s + o + o + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9) return n = parseInt(e.substr(1, 6), 16), [n >> 16, n >> 8 & at, n & at, parseInt(e.substr(7), 16) / 255];
                e = parseInt(e.substr(1), 16), n = [e >> 16, e >> 8 & at, e & at]
            } else if (e.substr(0, 3) === "hsl") {
                if (n = m = e.match(bc), !t) l = +n[0] % 360 / 360, u = +n[1] / 100, c = +n[2] / 100, o = c <= .5 ? c * (u + 1) : c + u - c * u, s = c * 2 - o, n.length > 3 && (n[3] *= 1), n[0] = Xu(l + 1 / 3, s, o), n[1] = Xu(l, s, o), n[2] = Xu(l - 1 / 3, s, o);
                else if (~e.indexOf("=")) return n = e.match(Ud), i && n.length < 4 && (n[3] = 1), n
            } else n = e.match(bc) || da.transparent;
            n = n.map(Number)
        }
        return t && !m && (s = n[0] / at, o = n[1] / at, a = n[2] / at, h = Math.max(s, o, a), f = Math.min(s, o, a), c = (h + f) / 2, h === f ? l = u = 0 : (g = h - f, u = c > .5 ? g / (2 - h - f) : g / (h + f), l = h === s ? (o - a) / g + (o < a ? 6 : 0) : h === o ? (a - s) / g + 2 : (s - o) / g + 4, l *= 60), n[0] = ~~(l + .5), n[1] = ~~(u * 100 + .5), n[2] = ~~(c * 100 + .5)), i && n.length < 4 && (n[3] = 1), n
    },
    gp = function(e) {
        var t = [],
            i = [],
            n = -1;
        return e.split(ps)
            .forEach(function(s) {
                var o = s.match(wo) || [];
                t.push.apply(t, o), i.push(n += o.length + 1)
            }), t.c = i, t
    },
    Tf = function(e, t, i) {
        var n = "",
            s = (e + n)
            .match(ps),
            o = t ? "hsla(" : "rgba(",
            a = 0,
            l, u, c, h;
        if (!s) return e;
        if (s = s.map(function(f) {
                return (f = pp(f, t, 1)) && o + (t ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3] : f.join(",")) + ")"
            }), i && (c = gp(e), l = i.c, l.join(n) !== c.c.join(n)))
            for (u = e.replace(ps, "1")
                .split(wo), h = u.length - 1; a < h; a++) n += u[a] + (~l.indexOf(a) ? s.shift() || o + "0,0,0,0)" : (c.length ? c : s.length ? s : i)
                .shift());
        if (!u)
            for (u = e.split(ps), h = u.length - 1; a < h; a++) n += u[a] + s[a];
        return n + u[h]
    },
    ps = function() {
        var r = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
            e;
        for (e in da) r += "|" + e + "\\b";
        return new RegExp(r + ")", "gi")
    }(),
    om = /hsl[a]?\(/,
    mp = function(e) {
        var t = e.join(" "),
            i;
        if (ps.lastIndex = 0, ps.test(t)) return i = om.test(t), e[1] = Tf(e[1], i), e[0] = Tf(e[0], i, gp(e[1])), !0
    },
    Va, br = function() {
        var r = Date.now,
            e = 500,
            t = 33,
            i = r(),
            n = i,
            s = 1e3 / 240,
            o = s,
            a = [],
            l, u, c, h, f, g, m = function d(p) {
                var y = r() - n,
                    b = p === !0,
                    w, S, x, P;
                if ((y > e || y < 0) && (i += y - t), n += y, x = n - i, w = x - o, (w > 0 || b) && (P = ++h.frame, f = x - h.time * 1e3, h.time = x = x / 1e3, o += w + (w >= s ? 4 : s - w), S = 1), b || (l = u(d)), S)
                    for (g = 0; g < a.length; g++) a[g](x, f, P, p)
            };
        return h = {
            time: 0,
            frame: 0,
            tick: function() {
                m(!0)
            },
            deltaRatio: function(p) {
                return f / (1e3 / (p || 60))
            },
            wake: function() {
                Xd && (!xc && gh() && (hn = xc = window, mh = hn.document || {}, Sr.gsap = hr, (hn.gsapVersions || (hn.gsapVersions = []))
                    .push(hr.version), jd(Zl || hn.GreenSockGlobals || !hn.gsap && hn || {}), fp.forEach(dp)), c = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && h.sleep(), u = c || function(p) {
                    return setTimeout(p, o - h.time * 1e3 + 1 | 0)
                }, Va = 1, m(2))
            },
            sleep: function() {
                (c ? cancelAnimationFrame : clearTimeout)(l), Va = 0, u = Ia
            },
            lagSmoothing: function(p, y) {
                e = p || 1 / 0, t = Math.min(y || 33, e)
            },
            fps: function(p) {
                s = 1e3 / (p || 240), o = h.time * 1e3 + s
            },
            add: function(p, y, b) {
                var w = y ? function(S, x, P, C) {
                    p(S, x, P, C), h.remove(w)
                } : p;
                return h.remove(p), a[b ? "unshift" : "push"](w), Ho(), w
            },
            remove: function(p, y) {
                ~(y = a.indexOf(p)) && a.splice(y, 1) && g >= y && g--
            },
            _listeners: a
        }, h
    }(),
    Ho = function() {
        return !Va && br.wake()
    },
    We = {},
    am = /^[\d.\-M][\d.\-,\s]/,
    lm = /["']/g,
    um = function(e) {
        for (var t = {}, i = e.substr(1, e.length - 3)
                .split(":"), n = i[0], s = 1, o = i.length, a, l, u; s < o; s++) l = i[s], a = s !== o - 1 ? l.lastIndexOf(",") : l.length, u = l.substr(0, a), t[n] = isNaN(u) ? u.replace(lm, "")
            .trim() : +u, n = l.substr(a + 1)
            .trim();
        return t
    },
    cm = function(e) {
        var t = e.indexOf("(") + 1,
            i = e.indexOf(")"),
            n = e.indexOf("(", t);
        return e.substring(t, ~n && n < i ? e.indexOf(")", i + 1) : i)
    },
    hm = function(e) {
        var t = (e + "")
            .split("("),
            i = We[t[0]];
        return i && t.length > 1 && i.config ? i.config.apply(null, ~e.indexOf("{") ? [um(t[1])] : cm(e)
            .split(",")
            .map(Qd)) : We._CE && am.test(e) ? We._CE("", e) : i
    },
    _p = function(e) {
        return function(t) {
            return 1 - e(1 - t)
        }
    },
    yp = function r(e, t) {
        for (var i = e._first, n; i;) i instanceof Gi ? r(i, t) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== t && (i.timeline ? r(i.timeline, t) : (n = i._ease, i._ease = i._yEase, i._yEase = n, i._yoyo = t)), i = i._next
    },
    Us = function(e, t) {
        return e && (Pt(e) ? e : We[e] || hm(e)) || t
    },
    no = function(e, t, i, n) {
        i === void 0 && (i = function(l) {
            return 1 - t(1 - l)
        }), n === void 0 && (n = function(l) {
            return l < .5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2
        });
        var s = {
                easeIn: t,
                easeOut: i,
                easeInOut: n
            },
            o;
        return or(e, function(a) {
            We[a] = Sr[a] = s, We[o = a.toLowerCase()] = i;
            for (var l in s) We[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = We[a + "." + l] = s[l]
        }), s
    },
    Dp = function(e) {
        return function(t) {
            return t < .5 ? (1 - e(1 - t * 2)) / 2 : .5 + e((t - .5) * 2) / 2
        }
    },
    ju = function r(e, t, i) {
        var n = t >= 1 ? t : 1,
            s = (i || (e ? .3 : .45)) / (t < 1 ? t : 1),
            o = s / wc * (Math.asin(1 / n) || 0),
            a = function(c) {
                return c === 1 ? 1 : n * Math.pow(2, -10 * c) * z0((c - o) * s) + 1
            },
            l = e === "out" ? a : e === "in" ? function(u) {
                return 1 - a(1 - u)
            } : Dp(a);
        return s = wc / s, l.config = function(u, c) {
            return r(e, u, c)
        }, l
    },
    Gu = function r(e, t) {
        t === void 0 && (t = 1.70158);
        var i = function(o) {
                return o ? --o * o * ((t + 1) * o + t) + 1 : 0
            },
            n = e === "out" ? i : e === "in" ? function(s) {
                return 1 - i(1 - s)
            } : Dp(i);
        return n.config = function(s) {
            return r(e, s)
        }, n
    };
or("Linear,Quad,Cubic,Quart,Quint,Strong", function(r, e) {
    var t = e < 5 ? e + 1 : e;
    no(r + ",Power" + (t - 1), e ? function(i) {
        return Math.pow(i, t)
    } : function(i) {
        return i
    }, function(i) {
        return 1 - Math.pow(1 - i, t)
    }, function(i) {
        return i < .5 ? Math.pow(i * 2, t) / 2 : 1 - Math.pow((1 - i) * 2, t) / 2
    })
});
We.Linear.easeNone = We.none = We.Linear.easeIn;
no("Elastic", ju("in"), ju("out"), ju());
(function(r, e) {
    var t = 1 / e,
        i = 2 * t,
        n = 2.5 * t,
        s = function(a) {
            return a < t ? r * a * a : a < i ? r * Math.pow(a - 1.5 / e, 2) + .75 : a < n ? r * (a -= 2.25 / e) * a + .9375 : r * Math.pow(a - 2.625 / e, 2) + .984375
        };
    no("Bounce", function(o) {
        return 1 - s(1 - o)
    }, s)
})(7.5625, 2.75);
no("Expo", function(r) {
    return Math.pow(2, 10 * (r - 1)) * r + r * r * r * r * r * r * (1 - r)
});
no("Circ", function(r) {
    return -(qd(1 - r * r) - 1)
});
no("Sine", function(r) {
    return r === 1 ? 1 : -I0(r * B0) + 1
});
no("Back", Gu("in"), Gu("out"), Gu());
We.SteppedEase = We.steps = Sr.SteppedEase = {
    config: function(e, t) {
        e === void 0 && (e = 1);
        var i = 1 / e,
            n = e + (t ? 0 : 1),
            s = t ? 1 : 0,
            o = 1 - Li;
        return function(a) {
            return ((n * Ka(0, o, a) | 0) + s) * i
        }
    }
};
No.ease = We["quad.out"];
or("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(r) {
    return Dh += r + "," + r + "Params,"
});
var vp = function(e, t) {
        this.id = N0++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : Kd, this.set = t ? t.getSetter : Eh
    },
    Ha = function() {
        function r(t) {
            this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Vo(this, +t.duration, 1, 1), this.data = t.data, bt && (this._ctx = bt, bt.data.push(this)), Va || br.wake()
        }
        var e = r.prototype;
        return e.delay = function(i) {
            return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay), this._delay = i, this) : this._delay
        }, e.duration = function(i) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur
        }, e.totalDuration = function(i) {
            return arguments.length ? (this._dirty = 0, Vo(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, e.totalTime = function(i, n) {
            if (Ho(), !arguments.length) return this._tTime;
            var s = this._dp;
            if (s && s.smoothChildTiming && this._ts) {
                for (wu(this, i), !s._dp || s.parent || ip(s, this); s && s.parent;) s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) && s.totalTime(s._tTime, !0), s = s.parent;
                !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && dn(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== i || !this._dur && !n || this._initted && Math.abs(this._zTime) === Li || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i), Zd(this, i, n)), this
        }, e.time = function(i, n) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + Ef(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), n) : this._time
        }, e.totalProgress = function(i, n) {
            return arguments.length ? this.totalTime(this.totalDuration() * i, n) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0
        }, e.progress = function(i, n) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + Ef(this), n) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
        }, e.iteration = function(i, n) {
            var s = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (i - 1) * s, n) : this._repeat ? zo(this._tTime, s) + 1 : 1
        }, e.timeScale = function(i, n) {
            if (!arguments.length) return this._rts === -1e-8 ? 0 : this._rts;
            if (this._rts === i) return this;
            var s = this.parent && this._ts ? tu(this.parent._time, this) : this._tTime;
            return this._rts = +i || 0, this._ts = this._ps || i === -1e-8 ? 0 : this._rts, this.totalTime(Ka(-Math.abs(this._delay), this._tDur, s), n !== !1), vu(this), Y0(this)
        }, e.paused = function(i) {
            return arguments.length ? (this._ps !== i && (this._ps = i, i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Ho(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== Li && (this._tTime -= Li)))), this) : this._ps
        }, e.startTime = function(i) {
            if (arguments.length) {
                this._start = i;
                var n = this.parent || this._dp;
                return n && (n._sort || !this.parent) && dn(n, this, i - this._delay), this
            }
            return this._start
        }, e.endTime = function(i) {
            return this._start + (sr(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }, e.rawTime = function(i) {
            var n = this.parent || this._dp;
            return n ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? tu(n.rawTime(i), this) : this._tTime : this._tTime
        }, e.revert = function(i) {
            i === void 0 && (i = q0);
            var n = _i;
            return _i = i, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(i), this.totalTime(-.01, i.suppressEvents)), this.data !== "nested" && i.kill !== !1 && this.kill(), _i = n, this
        }, e.globalTime = function(i) {
            for (var n = this, s = arguments.length ? i : n.rawTime(); n;) s = n._start + s / (Math.abs(n._ts) || 1), n = n._dp;
            return !this.parent && this._sat ? this._sat.globalTime(i) : s
        }, e.repeat = function(i) {
            return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i, Cf(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
        }, e.repeatDelay = function(i) {
            if (arguments.length) {
                var n = this._time;
                return this._rDelay = i, Cf(this), n ? this.time(n) : this
            }
            return this._rDelay
        }, e.yoyo = function(i) {
            return arguments.length ? (this._yoyo = i, this) : this._yoyo
        }, e.seek = function(i, n) {
            return this.totalTime(Br(this, i), sr(n))
        }, e.restart = function(i, n) {
            return this.play()
                .totalTime(i ? -this._delay : 0, sr(n)), this._dur || (this._zTime = -1e-8), this
        }, e.play = function(i, n) {
            return i != null && this.seek(i, n), this.reversed(!1)
                .paused(!1)
        }, e.reverse = function(i, n) {
            return i != null && this.seek(i || this.totalDuration(), n), this.reversed(!0)
                .paused(!1)
        }, e.pause = function(i, n) {
            return i != null && this.seek(i, n), this.paused(!0)
        }, e.resume = function() {
            return this.paused(!1)
        }, e.reversed = function(i) {
            return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -1e-8 : 0)), this) : this._rts < 0
        }, e.invalidate = function() {
            return this._initted = this._act = 0, this._zTime = -1e-8, this
        }, e.isActive = function() {
            var i = this.parent || this._dp,
                n = this._start,
                s;
            return !!(!i || this._ts && this._initted && i.isActive() && (s = i.rawTime(!0)) >= n && s < this.endTime(!0) - Li)
        }, e.eventCallback = function(i, n, s) {
            var o = this.vars;
            return arguments.length > 1 ? (n ? (o[i] = n, s && (o[i + "Params"] = s), i === "onUpdate" && (this._onUpdate = n)) : delete o[i], this) : o[i]
        }, e.then = function(i) {
            var n = this;
            return new Promise(function(s) {
                var o = Pt(i) ? i : ep,
                    a = function() {
                        var u = n.then;
                        n.then = null, Pt(o) && (o = o(n)) && (o.then || o === n) && (n.then = u), s(o), n.then = u
                    };
                n._initted && n.totalProgress() === 1 && n._ts >= 0 || !n._tTime && n._ts < 0 ? a() : n._prom = a
            })
        }, e.kill = function() {
            fa(this)
        }, r
    }();
Tr(Ha.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -1e-8,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var Gi = function(r) {
    Hd(e, r);

    function e(i, n) {
        var s;
        return i === void 0 && (i = {}), s = r.call(this, i) || this, s.labels = {}, s.smoothChildTiming = !!i.smoothChildTiming, s.autoRemoveChildren = !!i.autoRemoveChildren, s._sort = sr(i.sortChildren), Ct && dn(i.parent || Ct, Bn(s), n), i.reversed && s.reverse(), i.paused && s.paused(!0), i.scrollTrigger && rp(Bn(s), i.scrollTrigger), s
    }
    var t = e.prototype;
    return t.to = function(n, s, o) {
        return ba(0, arguments, this), this
    }, t.from = function(n, s, o) {
        return ba(1, arguments, this), this
    }, t.fromTo = function(n, s, o, a) {
        return ba(2, arguments, this), this
    }, t.set = function(n, s, o) {
        return s.duration = 0, s.parent = this, wa(s)
            .repeatDelay || (s.repeat = 0), s.immediateRender = !!s.immediateRender, new Ut(n, s, Br(this, o), 1), this
    }, t.call = function(n, s, o) {
        return dn(this, Ut.delayedCall(0, n, s), o)
    }, t.staggerTo = function(n, s, o, a, l, u, c) {
        return o.duration = s, o.stagger = o.stagger || a, o.onComplete = u, o.onCompleteParams = c, o.parent = this, new Ut(n, o, Br(this, l)), this
    }, t.staggerFrom = function(n, s, o, a, l, u, c) {
        return o.runBackwards = 1, wa(o)
            .immediateRender = sr(o.immediateRender), this.staggerTo(n, s, o, a, l, u, c)
    }, t.staggerFromTo = function(n, s, o, a, l, u, c, h) {
        return a.startAt = o, wa(a)
            .immediateRender = sr(a.immediateRender), this.staggerTo(n, s, a, l, u, c, h)
    }, t.render = function(n, s, o) {
        var a = this._time,
            l = this._dirty ? this.totalDuration() : this._tDur,
            u = this._dur,
            c = n <= 0 ? 0 : Wt(n),
            h = this._zTime < 0 != n < 0 && (this._initted || !u),
            f, g, m, d, p, y, b, w, S, x, P, C;
        if (this !== Ct && c > l && n >= 0 && (c = l), c !== this._tTime || o || h) {
            if (a !== this._time && u && (c += this._time - a, n += this._time - a), f = c, S = this._start, w = this._ts, y = !w, h && (u || (a = this._zTime), (n || !s) && (this._zTime = n)), this._repeat) {
                if (P = this._yoyo, p = u + this._rDelay, this._repeat < -1 && n < 0) return this.totalTime(p * 100 + n, s, o);
                if (f = Wt(c % p), c === l ? (d = this._repeat, f = u) : (x = Wt(c / p), d = ~~x, d && d === x && (f = u, d--), f > u && (f = u)), x = zo(this._tTime, p), !a && this._tTime && x !== d && this._tTime - x * p - this._dur <= 0 && (x = d), P && d & 1 && (f = u - f, C = 1), d !== x && !this._lock) {
                    var A = P && x & 1,
                        k = A === (P && d & 1);
                    if (d < x && (A = !A), a = A ? 0 : c % u ? u : c, this._lock = 1, this.render(a || (C ? 0 : Wt(d * p)), s, !u)
                        ._lock = 0, this._tTime = c, !s && this.parent && Er(this, "onRepeat"), this.vars.repeatRefresh && !C && (this.invalidate()
                            ._lock = 1), a && a !== this._time || y !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                    if (u = this._dur, l = this._tDur, k && (this._lock = 2, a = A ? u : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !C && this.invalidate()), this._lock = 0, !this._ts && !y) return this;
                    yp(this, C)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (b = J0(this, Wt(a), Wt(f)), b && (c -= f - (f = b._start))), this._tTime = c, this._time = f, this._act = !w, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = n, a = 0), !a && f && !s && !d && (Er(this, "onStart"), this._tTime !== c)) return this;
            if (f >= a && n >= 0)
                for (g = this._first; g;) {
                    if (m = g._next, (g._act || f >= g._start) && g._ts && b !== g) {
                        if (g.parent !== this) return this.render(n, s, o);
                        if (g.render(g._ts > 0 ? (f - g._start) * g._ts : (g._dirty ? g.totalDuration() : g._tDur) + (f - g._start) * g._ts, s, o), f !== this._time || !this._ts && !y) {
                            b = 0, m && (c += this._zTime = -1e-8);
                            break
                        }
                    }
                    g = m
                } else {
                    g = this._last;
                    for (var I = n < 0 ? n : f; g;) {
                        if (m = g._prev, (g._act || I <= g._end) && g._ts && b !== g) {
                            if (g.parent !== this) return this.render(n, s, o);
                            if (g.render(g._ts > 0 ? (I - g._start) * g._ts : (g._dirty ? g.totalDuration() : g._tDur) + (I - g._start) * g._ts, s, o || _i && (g._initted || g._startAt)), f !== this._time || !this._ts && !y) {
                                b = 0, m && (c += this._zTime = I ? -1e-8 : Li);
                                break
                            }
                        }
                        g = m
                    }
                }
            if (b && !s && (this.pause(), b.render(f >= a ? 0 : -1e-8)
                    ._zTime = f >= a ? 1 : -1, this._ts)) return this._start = S, vu(this), this.render(n, s, o);
            this._onUpdate && !s && Er(this, "onUpdate", !0), (c === l && this._tTime >= this.totalDuration() || !c && a) && (S === this._start || Math.abs(w) !== Math.abs(this._ts)) && (this._lock || ((n || !u) && (c === l && this._ts > 0 || !c && this._ts < 0) && ms(this, 1), !s && !(n < 0 && !a) && (c || a || !l) && (Er(this, c === l && n >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < l && this.timeScale() > 0) && this._prom())))
        }
        return this
    }, t.add = function(n, s) {
        var o = this;
        if (Un(s) || (s = Br(this, s, n)), !(n instanceof Ha)) {
            if (Oi(n)) return n.forEach(function(a) {
                return o.add(a, s)
            }), this;
            if (hi(n)) return this.addLabel(n, s);
            if (Pt(n)) n = Ut.delayedCall(0, n);
            else return this
        }
        return this !== n ? dn(this, n, s) : this
    }, t.getChildren = function(n, s, o, a) {
        n === void 0 && (n = !0), s === void 0 && (s = !0), o === void 0 && (o = !0), a === void 0 && (a = -1e8);
        for (var l = [], u = this._first; u;) u._start >= a && (u instanceof Ut ? s && l.push(u) : (o && l.push(u), n && l.push.apply(l, u.getChildren(!0, s, o)))), u = u._next;
        return l
    }, t.getById = function(n) {
        for (var s = this.getChildren(1, 1, 1), o = s.length; o--;)
            if (s[o].vars.id === n) return s[o]
    }, t.remove = function(n) {
        return hi(n) ? this.removeLabel(n) : Pt(n) ? this.killTweensOf(n) : (n.parent === this && Du(this, n), n === this._recent && (this._recent = this._last), $s(this))
    }, t.totalTime = function(n, s) {
        return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Wt(br.time - (this._ts > 0 ? n / this._ts : (this.totalDuration() - n) / -this._ts))), r.prototype.totalTime.call(this, n, s), this._forcing = 0, this) : this._tTime
    }, t.addLabel = function(n, s) {
        return this.labels[n] = Br(this, s), this
    }, t.removeLabel = function(n) {
        return delete this.labels[n], this
    }, t.addPause = function(n, s, o) {
        var a = Ut.delayedCall(0, s || Ia, o);
        return a.data = "isPause", this._hasPause = 1, dn(this, a, Br(this, n))
    }, t.removePause = function(n) {
        var s = this._first;
        for (n = Br(this, n); s;) s._start === n && s.data === "isPause" && ms(s), s = s._next
    }, t.killTweensOf = function(n, s, o) {
        for (var a = this.getTweensOf(n, o), l = a.length; l--;) ls !== a[l] && a[l].kill(n, s);
        return this
    }, t.getTweensOf = function(n, s) {
        for (var o = [], a = Vr(n), l = this._first, u = Un(s), c; l;) l instanceof Ut ? $0(l._targets, a) && (u ? (!ls || l._initted && l._ts) && l.globalTime(0) <= s && l.globalTime(l.totalDuration()) > s : !s || l.isActive()) && o.push(l) : (c = l.getTweensOf(a, s))
            .length && o.push.apply(o, c), l = l._next;
        return o
    }, t.tweenTo = function(n, s) {
        s = s || {};
        var o = this,
            a = Br(o, n),
            l = s,
            u = l.startAt,
            c = l.onStart,
            h = l.onStartParams,
            f = l.immediateRender,
            g, m = Ut.to(o, Tr({
                ease: s.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: a,
                overwrite: "auto",
                duration: s.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale()) || Li,
                onStart: function() {
                    if (o.pause(), !g) {
                        var p = s.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale());
                        m._dur !== p && Vo(m, p, 0, 1)
                            .render(m._time, !0, !0), g = 1
                    }
                    c && c.apply(m, h || [])
                }
            }, s));
        return f ? m.render(0) : m
    }, t.tweenFromTo = function(n, s, o) {
        return this.tweenTo(s, Tr({
            startAt: {
                time: Br(this, n)
            }
        }, o))
    }, t.recent = function() {
        return this._recent
    }, t.nextLabel = function(n) {
        return n === void 0 && (n = this._time), Sf(this, Br(this, n))
    }, t.previousLabel = function(n) {
        return n === void 0 && (n = this._time), Sf(this, Br(this, n), 1)
    }, t.currentLabel = function(n) {
        return arguments.length ? this.seek(n, !0) : this.previousLabel(this._time + Li)
    }, t.shiftChildren = function(n, s, o) {
        o === void 0 && (o = 0);
        for (var a = this._first, l = this.labels, u; a;) a._start >= o && (a._start += n, a._end += n), a = a._next;
        if (s)
            for (u in l) l[u] >= o && (l[u] += n);
        return $s(this)
    }, t.invalidate = function(n) {
        var s = this._first;
        for (this._lock = 0; s;) s.invalidate(n), s = s._next;
        return r.prototype.invalidate.call(this, n)
    }, t.clear = function(n) {
        n === void 0 && (n = !0);
        for (var s = this._first, o; s;) o = s._next, this.remove(s), s = o;
        return this._dp && (this._time = this._tTime = this._pTime = 0), n && (this.labels = {}), $s(this)
    }, t.totalDuration = function(n) {
        var s = 0,
            o = this,
            a = o._last,
            l = _n,
            u, c, h;
        if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -n : n));
        if (o._dirty) {
            for (h = o.parent; a;) u = a._prev, a._dirty && a.totalDuration(), c = a._start, c > l && o._sort && a._ts && !o._lock ? (o._lock = 1, dn(o, a, c - a._delay, 1)
                ._lock = 0) : l = c, c < 0 && a._ts && (s -= c, (!h && !o._dp || h && h.smoothChildTiming) && (o._start += c / o._ts, o._time -= c, o._tTime -= c), o.shiftChildren(-c, !1, -1 / 0), l = 0), a._end > s && a._ts && (s = a._end), a = u;
            Vo(o, o === Ct && o._time > s ? o._time : s, 1, 1), o._dirty = 0
        }
        return o._tDur
    }, e.updateRoot = function(n) {
        if (Ct._ts && (Zd(Ct, tu(n, Ct)), Jd = br.frame), br.frame >= bf) {
            bf += Cr.autoSleep || 120;
            var s = Ct._first;
            if ((!s || !s._ts) && Cr.autoSleep && br._listeners.length < 2) {
                for (; s && !s._ts;) s = s._next;
                s || br.sleep()
            }
        }
    }, e
}(Ha);
Tr(Gi.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var fm = function(e, t, i, n, s, o, a) {
        var l = new ar(this._pt, e, t, 0, 1, Sp, null, s),
            u = 0,
            c = 0,
            h, f, g, m, d, p, y, b;
        for (l.b = i, l.e = n, i += "", n += "", (y = ~n.indexOf("random(")) && (n = za(n)), o && (b = [i, n], o(b, e, t), i = b[0], n = b[1]), f = i.match(Wu) || []; h = Wu.exec(n);) m = h[0], d = n.substring(u, h.index), g ? g = (g + 1) % 5 : d.substr(-5) === "rgba(" && (g = 1), m !== f[c++] && (p = parseFloat(f[c - 1]) || 0, l._pt = {
            _next: l._pt,
            p: d || c === 1 ? d : ",",
            s: p,
            c: m.charAt(1) === "=" ? Ao(p, m) - p : parseFloat(m) - p,
            m: g && g < 4 ? Math.round : 0
        }, u = Wu.lastIndex);
        return l.c = u < n.length ? n.substring(u, n.length) : "", l.fp = a, (Wd.test(n) || y) && (l.e = 0), this._pt = l, l
    },
    wh = function(e, t, i, n, s, o, a, l, u, c) {
        Pt(n) && (n = n(s || 0, e, o));
        var h = e[t],
            f = i !== "get" ? i : Pt(h) ? u ? e[t.indexOf("set") || !Pt(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](u) : e[t]() : h,
            g = Pt(h) ? u ? _m : Ep : xh,
            m;
        if (hi(n) && (~n.indexOf("random(") && (n = za(n)), n.charAt(1) === "=" && (m = Ao(f, n) + (Pi(f) || 0), (m || m === 0) && (n = m))), !c || f !== n || Ac) return !isNaN(f * n) && n !== "" ? (m = new ar(this._pt, e, t, +f || 0, n - (f || 0), typeof h == "boolean" ? Dm : Cp, 0, g), u && (m.fp = u), a && m.modifier(a, this, e), this._pt = m) : (!h && !(t in e) && _h(t, n), fm.call(this, e, t, f, n, g, l || Cr.stringFilter, u))
    },
    dm = function(e, t, i, n, s) {
        if (Pt(e) && (e = xa(e, s, t, i, n)), !wn(e) || e.style && e.nodeType || Oi(e) || $d(e)) return hi(e) ? xa(e, s, t, i, n) : e;
        var o = {},
            a;
        for (a in e) o[a] = xa(e[a], s, t, i, n);
        return o
    },
    wp = function(e, t, i, n, s, o) {
        var a, l, u, c;
        if (vr[e] && (a = new vr[e])
            .init(s, a.rawVars ? t[e] : dm(t[e], n, s, o, i), i, n, o) !== !1 && (i._pt = l = new ar(i._pt, s, e, 0, 1, a.render, a, 0, a.priority), i !== bo))
            for (u = i._ptLookup[i._targets.indexOf(s)], c = a._props.length; c--;) u[a._props[c]] = l;
        return a
    },
    ls, Ac, bh = function r(e, t, i) {
        var n = e.vars,
            s = n.ease,
            o = n.startAt,
            a = n.immediateRender,
            l = n.lazy,
            u = n.onUpdate,
            c = n.runBackwards,
            h = n.yoyoEase,
            f = n.keyframes,
            g = n.autoRevert,
            m = e._dur,
            d = e._startAt,
            p = e._targets,
            y = e.parent,
            b = y && y.data === "nested" ? y.vars.targets : p,
            w = e._overwrite === "auto" && !dh,
            S = e.timeline,
            x, P, C, A, k, I, Y, V, q, K, W, J, T;
        if (S && (!f || !s) && (s = "none"), e._ease = Us(s, No.ease), e._yEase = h ? _p(Us(h === !0 ? s : h, No.ease)) : 0, h && e._yoyo && !e._repeat && (h = e._yEase, e._yEase = e._ease, e._ease = h), e._from = !S && !!n.runBackwards, !S || f && !n.stagger) {
            if (V = p[0] ? qs(p[0])
                .harness : 0, J = V && n[V.prop], x = eu(n, yh), d && (d._zTime < 0 && d.progress(1), t < 0 && c && a && !g ? d.render(-1, !0) : d.revert(c && m ? Nl : H0), d._lazy = 0), o) {
                if (ms(e._startAt = Ut.set(p, Tr({
                        data: "isStart",
                        overwrite: !1,
                        parent: y,
                        immediateRender: !0,
                        lazy: !d && sr(l),
                        startAt: null,
                        delay: 0,
                        onUpdate: u && function() {
                            return Er(e, "onUpdate")
                        },
                        stagger: 0
                    }, o))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (_i || !a && !g) && e._startAt.revert(Nl), a && m && t <= 0 && i <= 0) {
                    t && (e._zTime = t);
                    return
                }
            } else if (c && m && !d) {
                if (t && (a = !1), C = Tr({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: a && !d && sr(l),
                        immediateRender: a,
                        stagger: 0,
                        parent: y
                    }, x), J && (C[V.prop] = J), ms(e._startAt = Ut.set(p, C)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (_i ? e._startAt.revert(Nl) : e._startAt.render(-1, !0)), e._zTime = t, !a) r(e._startAt, Li, Li);
                else if (!t) return
            }
            for (e._pt = e._ptCache = 0, l = m && sr(l) || l && !m, P = 0; P < p.length; P++) {
                if (k = p[P], Y = k._gsap || vh(p)[P]._gsap, e._ptLookup[P] = K = {}, Ec[Y.id] && ds.length && Ql(), W = b === p ? P : b.indexOf(k), V && (q = new V)
                    .init(k, J || x, e, W, b) !== !1 && (e._pt = A = new ar(e._pt, k, q.name, 0, 1, q.render, q, 0, q.priority), q._props.forEach(function(R) {
                        K[R] = A
                    }), q.priority && (I = 1)), !V || J)
                    for (C in x) vr[C] && (q = wp(C, x, e, W, k, b)) ? q.priority && (I = 1) : K[C] = A = wh.call(e, k, C, "get", x[C], W, b, 0, n.stringFilter);
                e._op && e._op[P] && e.kill(k, e._op[P]), w && e._pt && (ls = e, Ct.killTweensOf(k, K, e.globalTime(t)), T = !e.parent, ls = 0), e._pt && l && (Ec[Y.id] = 1)
            }
            I && Tp(e), e._onInit && e._onInit(e)
        }
        e._onUpdate = u, e._initted = (!e._op || e._pt) && !T, f && t <= 0 && S.render(_n, !0, !0)
    },
    pm = function(e, t, i, n, s, o, a, l) {
        var u = (e._pt && e._ptCache || (e._ptCache = {}))[t],
            c, h, f, g;
        if (!u)
            for (u = e._ptCache[t] = [], f = e._ptLookup, g = e._targets.length; g--;) {
                if (c = f[g][t], c && c.d && c.d._pt)
                    for (c = c.d._pt; c && c.p !== t && c.fp !== t;) c = c._next;
                if (!c) return Ac = 1, e.vars[t] = "+=0", bh(e, a), Ac = 0, l ? Na(t + " not eligible for reset") : 1;
                u.push(c)
            }
        for (g = u.length; g--;) h = u[g], c = h._pt || h, c.s = (n || n === 0) && !s ? n : c.s + (n || 0) + o * c.c, c.c = i - c.s, h.e && (h.e = Mt(i) + Pi(h.e)), h.b && (h.b = c.s + Pi(h.b))
    },
    gm = function(e, t) {
        var i = e[0] ? qs(e[0])
            .harness : 0,
            n = i && i.aliases,
            s, o, a, l;
        if (!n) return t;
        s = Io({}, t);
        for (o in n)
            if (o in s)
                for (l = n[o].split(","), a = l.length; a--;) s[l[a]] = s[o];
        return s
    },
    mm = function(e, t, i, n) {
        var s = t.ease || n || "power1.inOut",
            o, a;
        if (Oi(t)) a = i[e] || (i[e] = []), t.forEach(function(l, u) {
            return a.push({
                t: u / (t.length - 1) * 100,
                v: l,
                e: s
            })
        });
        else
            for (o in t) a = i[o] || (i[o] = []), o === "ease" || a.push({
                t: parseFloat(e),
                v: t[o],
                e: s
            })
    },
    xa = function(e, t, i, n, s) {
        return Pt(e) ? e.call(t, i, n, s) : hi(e) && ~e.indexOf("random(") ? za(e) : e
    },
    bp = Dh + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    xp = {};
or(bp + ",id,stagger,delay,duration,paused,scrollTrigger", function(r) {
    return xp[r] = 1
});
var Ut = function(r) {
    Hd(e, r);

    function e(i, n, s, o) {
        var a;
        typeof n == "number" && (s.duration = n, n = s, s = null), a = r.call(this, o ? n : wa(n)) || this;
        var l = a.vars,
            u = l.duration,
            c = l.delay,
            h = l.immediateRender,
            f = l.stagger,
            g = l.overwrite,
            m = l.keyframes,
            d = l.defaults,
            p = l.scrollTrigger,
            y = l.yoyoEase,
            b = n.parent || Ct,
            w = (Oi(i) || $d(i) ? Un(i[0]) : "length" in n) ? [i] : Vr(i),
            S, x, P, C, A, k, I, Y;
        if (a._targets = w.length ? vh(w) : Na("GSAP target " + i + " not found. https://gsap.com", !Cr.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = g, m || f || yl(u) || yl(c)) {
            if (n = a.vars, S = a.timeline = new Gi({
                    data: "nested",
                    defaults: d || {},
                    targets: b && b.data === "nested" ? b.vars.targets : w
                }), S.kill(), S.parent = S._dp = Bn(a), S._start = 0, f || yl(u) || yl(c)) {
                if (C = w.length, I = f && ap(f), wn(f))
                    for (A in f) ~bp.indexOf(A) && (Y || (Y = {}), Y[A] = f[A]);
                for (x = 0; x < C; x++) P = eu(n, xp), P.stagger = 0, y && (P.yoyoEase = y), Y && Io(P, Y), k = w[x], P.duration = +xa(u, Bn(a), x, k, w), P.delay = (+xa(c, Bn(a), x, k, w) || 0) - a._delay, !f && C === 1 && P.delay && (a._delay = c = P.delay, a._start += c, P.delay = 0), S.to(k, P, I ? I(x, k, w) : 0), S._ease = We.none;
                S.duration() ? u = c = 0 : a.timeline = 0
            } else if (m) {
                wa(Tr(S.vars.defaults, {
                    ease: "none"
                })), S._ease = Us(m.ease || n.ease || "none");
                var V = 0,
                    q, K, W;
                if (Oi(m)) m.forEach(function(J) {
                    return S.to(w, J, ">")
                }), S.duration();
                else {
                    P = {};
                    for (A in m) A === "ease" || A === "easeEach" || mm(A, m[A], P, m.easeEach);
                    for (A in P)
                        for (q = P[A].sort(function(J, T) {
                                return J.t - T.t
                            }), V = 0, x = 0; x < q.length; x++) K = q[x], W = {
                            ease: K.e,
                            duration: (K.t - (x ? q[x - 1].t : 0)) / 100 * u
                        }, W[A] = K.v, S.to(w, W, V), V += W.duration;
                    S.duration() < u && S.to({}, {
                        duration: u - S.duration()
                    })
                }
            }
            u || a.duration(u = S.duration())
        } else a.timeline = 0;
        return g === !0 && !dh && (ls = Bn(a), Ct.killTweensOf(w), ls = 0), dn(b, Bn(a), s), n.reversed && a.reverse(), n.paused && a.paused(!0), (h || !u && !m && a._start === Wt(b._time) && sr(h) && X0(Bn(a)) && b.data !== "nested") && (a._tTime = -1e-8, a.render(Math.max(0, -c) || 0)), p && rp(Bn(a), p), a
    }
    var t = e.prototype;
    return t.render = function(n, s, o) {
        var a = this._time,
            l = this._tDur,
            u = this._dur,
            c = n < 0,
            h = n > l - Li && !c ? l : n < Li ? 0 : n,
            f, g, m, d, p, y, b, w, S;
        if (!u) G0(this, n, s, o);
        else if (h !== this._tTime || !n || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c || this._lazy) {
            if (f = h, w = this.timeline, this._repeat) {
                if (d = u + this._rDelay, this._repeat < -1 && c) return this.totalTime(d * 100 + n, s, o);
                if (f = Wt(h % d), h === l ? (m = this._repeat, f = u) : (p = Wt(h / d), m = ~~p, m && m === p ? (f = u, m--) : f > u && (f = u)), y = this._yoyo && m & 1, y && (S = this._yEase, f = u - f), p = zo(this._tTime, d), f === a && !o && this._initted && m === p) return this._tTime = h, this;
                m !== p && (w && this._yEase && yp(w, y), this.vars.repeatRefresh && !y && !this._lock && f !== d && this._initted && (this._lock = o = 1, this.render(Wt(d * m), !0)
                    .invalidate()
                    ._lock = 0))
            }
            if (!this._initted) {
                if (np(this, c ? n : f, o, s, h)) return this._tTime = 0, this;
                if (a !== this._time && !(o && this.vars.repeatRefresh && m !== p)) return this;
                if (u !== this._dur) return this.render(n, s, o)
            }
            if (this._tTime = h, this._time = f, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = b = (S || this._ease)(f / u), this._from && (this.ratio = b = 1 - b), f && !a && !s && !m && (Er(this, "onStart"), this._tTime !== h)) return this;
            for (g = this._pt; g;) g.r(b, g.d), g = g._next;
            w && w.render(n < 0 ? n : w._dur * w._ease(f / this._dur), s, o) || this._startAt && (this._zTime = n), this._onUpdate && !s && (c && Cc(this, n, s, o), Er(this, "onUpdate")), this._repeat && m !== p && this.vars.onRepeat && !s && this.parent && Er(this, "onRepeat"), (h === this._tDur || !h) && this._tTime === h && (c && !this._onUpdate && Cc(this, n, !0, !0), (n || !u) && (h === this._tDur && this._ts > 0 || !h && this._ts < 0) && ms(this, 1), !s && !(c && !a) && (h || a || y) && (Er(this, h === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < l && this.timeScale() > 0) && this._prom()))
        }
        return this
    }, t.targets = function() {
        return this._targets
    }, t.invalidate = function(n) {
        return (!n || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(n), r.prototype.invalidate.call(this, n)
    }, t.resetTo = function(n, s, o, a, l) {
        Va || br.wake(), this._ts || this.play();
        var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
            c;
        return this._initted || bh(this, u), c = this._ease(u / this._dur), pm(this, n, s, o, a, c, u, l) ? this.resetTo(n, s, o, a, 1) : (wu(this, 0), this.parent || tp(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
    }, t.kill = function(n, s) {
        if (s === void 0 && (s = "all"), !n && (!s || s === "all")) return this._lazy = this._pt = 0, this.parent ? fa(this) : this.scrollTrigger && this.scrollTrigger.kill(!!_i), this;
        if (this.timeline) {
            var o = this.timeline.totalDuration();
            return this.timeline.killTweensOf(n, s, ls && ls.vars.overwrite !== !0)
                ._first || fa(this), this.parent && o !== this.timeline.totalDuration() && Vo(this, this._dur * this.timeline._tDur / o, 0, 1), this
        }
        var a = this._targets,
            l = n ? Vr(n) : a,
            u = this._ptLookup,
            c = this._pt,
            h, f, g, m, d, p, y;
        if ((!s || s === "all") && W0(a, l)) return s === "all" && (this._pt = 0), fa(this);
        for (h = this._op = this._op || [], s !== "all" && (hi(s) && (d = {}, or(s, function(b) {
                return d[b] = 1
            }), s = d), s = gm(a, s)), y = a.length; y--;)
            if (~l.indexOf(a[y])) {
                f = u[y], s === "all" ? (h[y] = s, m = f, g = {}) : (g = h[y] = h[y] || {}, m = s);
                for (d in m) p = f && f[d], p && ((!("kill" in p.d) || p.d.kill(d) === !0) && Du(this, p, "_pt"), delete f[d]), g !== "all" && (g[d] = 1)
            } return this._initted && !this._pt && c && fa(this), this
    }, e.to = function(n, s) {
        return new e(n, s, arguments[2])
    }, e.from = function(n, s) {
        return ba(1, arguments)
    }, e.delayedCall = function(n, s, o, a) {
        return new e(s, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: n,
            onComplete: s,
            onReverseComplete: s,
            onCompleteParams: o,
            onReverseCompleteParams: o,
            callbackScope: a
        })
    }, e.fromTo = function(n, s, o) {
        return ba(2, arguments)
    }, e.set = function(n, s) {
        return s.duration = 0, s.repeatDelay || (s.repeat = 0), new e(n, s)
    }, e.killTweensOf = function(n, s, o) {
        return Ct.killTweensOf(n, s, o)
    }, e
}(Ha);
Tr(Ut.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
or("staggerTo,staggerFrom,staggerFromTo", function(r) {
    Ut[r] = function() {
        var e = new Gi,
            t = Tc.call(arguments, 0);
        return t.splice(r === "staggerFromTo" ? 5 : 4, 0, 0), e[r].apply(e, t)
    }
});
var xh = function(e, t, i) {
        return e[t] = i
    },
    Ep = function(e, t, i) {
        return e[t](i)
    },
    _m = function(e, t, i, n) {
        return e[t](n.fp, i)
    },
    ym = function(e, t, i) {
        return e.setAttribute(t, i)
    },
    Eh = function(e, t) {
        return Pt(e[t]) ? Ep : ph(e[t]) && e.setAttribute ? ym : xh
    },
    Cp = function(e, t) {
        return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t)
    },
    Dm = function(e, t) {
        return t.set(t.t, t.p, !!(t.s + t.c * e), t)
    },
    Sp = function(e, t) {
        var i = t._pt,
            n = "";
        if (!e && t.b) n = t.b;
        else if (e === 1 && t.e) n = t.e;
        else {
            for (; i;) n = i.p + (i.m ? i.m(i.s + i.c * e) : Math.round((i.s + i.c * e) * 1e4) / 1e4) + n, i = i._next;
            n += t.c
        }
        t.set(t.t, t.p, n, t)
    },
    Ch = function(e, t) {
        for (var i = t._pt; i;) i.r(e, i.d), i = i._next
    },
    vm = function(e, t, i, n) {
        for (var s = this._pt, o; s;) o = s._next, s.p === n && s.modifier(e, t, i), s = o
    },
    wm = function(e) {
        for (var t = this._pt, i, n; t;) n = t._next, t.p === e && !t.op || t.op === e ? Du(this, t, "_pt") : t.dep || (i = 1), t = n;
        return !i
    },
    bm = function(e, t, i, n) {
        n.mSet(e, t, n.m.call(n.tween, i, n.mt), n)
    },
    Tp = function(e) {
        for (var t = e._pt, i, n, s, o; t;) {
            for (i = t._next, n = s; n && n.pr > t.pr;) n = n._next;
            (t._prev = n ? n._prev : o) ? t._prev._next = t: s = t, (t._next = n) ? n._prev = t : o = t, t = i
        }
        e._pt = s
    },
    ar = function() {
        function r(t, i, n, s, o, a, l, u, c) {
            this.t = i, this.s = s, this.c = o, this.p = n, this.r = a || Cp, this.d = l || this, this.set = u || xh, this.pr = c || 0, this._next = t, t && (t._prev = this)
        }
        var e = r.prototype;
        return e.modifier = function(i, n, s) {
            this.mSet = this.mSet || this.set, this.set = bm, this.m = i, this.mt = s, this.tween = n
        }, r
    }();
or(Dh + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(r) {
    return yh[r] = 1
});
Sr.TweenMax = Sr.TweenLite = Ut;
Sr.TimelineLite = Sr.TimelineMax = Gi;
Ct = new Gi({
    sortChildren: !1,
    defaults: No,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
Cr.stringFilter = mp;
var Ws = [],
    zl = {},
    xm = [],
    kf = 0,
    Em = 0,
    Ju = function(e) {
        return (zl[e] || xm)
            .map(function(t) {
                return t()
            })
    },
    Fc = function() {
        var e = Date.now(),
            t = [];
        e - kf > 2 && (Ju("matchMediaInit"), Ws.forEach(function(i) {
            var n = i.queries,
                s = i.conditions,
                o, a, l, u;
            for (a in n) o = hn.matchMedia(n[a])
                .matches, o && (l = 1), o !== s[a] && (s[a] = o, u = 1);
            u && (i.revert(), l && t.push(i))
        }), Ju("matchMediaRevert"), t.forEach(function(i) {
            return i.onMatch(i, function(n) {
                return i.add(null, n)
            })
        }), kf = e, Ju("matchMedia"))
    },
    kp = function() {
        function r(t, i) {
            this.selector = i && kc(i), this.data = [], this._r = [], this.isReverted = !1, this.id = Em++, t && this.add(t)
        }
        var e = r.prototype;
        return e.add = function(i, n, s) {
            Pt(i) && (s = n, n = i, i = Pt);
            var o = this,
                a = function() {
                    var u = bt,
                        c = o.selector,
                        h;
                    return u && u !== o && u.data.push(o), s && (o.selector = kc(s)), bt = o, h = n.apply(o, arguments), Pt(h) && o._r.push(h), bt = u, o.selector = c, o.isReverted = !1, h
                };
            return o.last = a, i === Pt ? a(o, function(l) {
                return o.add(null, l)
            }) : i ? o[i] = a : a
        }, e.ignore = function(i) {
            var n = bt;
            bt = null, i(this), bt = n
        }, e.getTweens = function() {
            var i = [];
            return this.data.forEach(function(n) {
                return n instanceof r ? i.push.apply(i, n.getTweens()) : n instanceof Ut && !(n.parent && n.parent.data === "nested") && i.push(n)
            }), i
        }, e.clear = function() {
            this._r.length = this.data.length = 0
        }, e.kill = function(i, n) {
            var s = this;
            if (i ? function() {
                    for (var a = s.getTweens(), l = s.data.length, u; l--;) u = s.data[l], u.data === "isFlip" && (u.revert(), u.getChildren(!0, !0, !1)
                        .forEach(function(c) {
                            return a.splice(a.indexOf(c), 1)
                        }));
                    for (a.map(function(c) {
                            return {
                                g: c._dur || c._delay || c._sat && !c._sat.vars.immediateRender ? c.globalTime(0) : -1 / 0,
                                t: c
                            }
                        })
                        .sort(function(c, h) {
                            return h.g - c.g || -1 / 0
                        })
                        .forEach(function(c) {
                            return c.t.revert(i)
                        }), l = s.data.length; l--;) u = s.data[l], u instanceof Gi ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(), u.kill()) : !(u instanceof Ut) && u.revert && u.revert(i);
                    s._r.forEach(function(c) {
                        return c(i, s)
                    }), s.isReverted = !0
                }() : this.data.forEach(function(a) {
                    return a.kill && a.kill()
                }), this.clear(), n)
                for (var o = Ws.length; o--;) Ws[o].id === this.id && Ws.splice(o, 1)
        }, e.revert = function(i) {
            this.kill(i || {})
        }, r
    }(),
    Cm = function() {
        function r(t) {
            this.contexts = [], this.scope = t, bt && bt.data.push(this)
        }
        var e = r.prototype;
        return e.add = function(i, n, s) {
            wn(i) || (i = {
                matches: i
            });
            var o = new kp(0, s || this.scope),
                a = o.conditions = {},
                l, u, c;
            bt && !o.selector && (o.selector = bt.selector), this.contexts.push(o), n = o.add("onMatch", n), o.queries = i;
            for (u in i) u === "all" ? c = 1 : (l = hn.matchMedia(i[u]), l && (Ws.indexOf(o) < 0 && Ws.push(o), (a[u] = l.matches) && (c = 1), l.addListener ? l.addListener(Fc) : l.addEventListener("change", Fc)));
            return c && n(o, function(h) {
                return o.add(null, h)
            }), this
        }, e.revert = function(i) {
            this.kill(i || {})
        }, e.kill = function(i) {
            this.contexts.forEach(function(n) {
                return n.kill(i, !0)
            })
        }, r
    }(),
    iu = {
        registerPlugin: function() {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            t.forEach(function(n) {
                return dp(n)
            })
        },
        timeline: function(e) {
            return new Gi(e)
        },
        getTweensOf: function(e, t) {
            return Ct.getTweensOf(e, t)
        },
        getProperty: function(e, t, i, n) {
            hi(e) && (e = Vr(e)[0]);
            var s = qs(e || {})
                .get,
                o = i ? ep : Qd;
            return i === "native" && (i = ""), e && (t ? o((vr[t] && vr[t].get || s)(e, t, i, n)) : function(a, l, u) {
                return o((vr[a] && vr[a].get || s)(e, a, l, u))
            })
        },
        quickSetter: function(e, t, i) {
            if (e = Vr(e), e.length > 1) {
                var n = e.map(function(c) {
                        return hr.quickSetter(c, t, i)
                    }),
                    s = n.length;
                return function(c) {
                    for (var h = s; h--;) n[h](c)
                }
            }
            e = e[0] || {};
            var o = vr[t],
                a = qs(e),
                l = a.harness && (a.harness.aliases || {})[t] || t,
                u = o ? function(c) {
                    var h = new o;
                    bo._pt = 0, h.init(e, i ? c + i : c, bo, 0, [e]), h.render(1, h), bo._pt && Ch(1, bo)
                } : a.set(e, l);
            return o ? u : function(c) {
                return u(e, l, i ? c + i : c, a, 1)
            }
        },
        quickTo: function(e, t, i) {
            var n, s = hr.to(e, Tr((n = {}, n[t] = "+=0.1", n.paused = !0, n.stagger = 0, n), i || {})),
                o = function(l, u, c) {
                    return s.resetTo(t, l, u, c)
                };
            return o.tween = s, o
        },
        isTweening: function(e) {
            return Ct.getTweensOf(e, !0)
                .length > 0
        },
        defaults: function(e) {
            return e && e.ease && (e.ease = Us(e.ease, No.ease)), xf(No, e || {})
        },
        config: function(e) {
            return xf(Cr, e || {})
        },
        registerEffect: function(e) {
            var t = e.name,
                i = e.effect,
                n = e.plugins,
                s = e.defaults,
                o = e.extendTimeline;
            (n || "")
            .split(",")
                .forEach(function(a) {
                    return a && !vr[a] && !Sr[a] && Na(t + " effect requires " + a + " plugin.")
                }), Yu[t] = function(a, l, u) {
                    return i(Vr(a), Tr(l || {}, s), u)
                }, o && (Gi.prototype[t] = function(a, l, u) {
                    return this.add(Yu[t](a, wn(l) ? l : (u = l) && {}, this), u)
                })
        },
        registerEase: function(e, t) {
            We[e] = Us(t)
        },
        parseEase: function(e, t) {
            return arguments.length ? Us(e, t) : We
        },
        getById: function(e) {
            return Ct.getById(e)
        },
        exportRoot: function(e, t) {
            e === void 0 && (e = {});
            var i = new Gi(e),
                n, s;
            for (i.smoothChildTiming = sr(e.smoothChildTiming), Ct.remove(i), i._dp = 0, i._time = i._tTime = Ct._time, n = Ct._first; n;) s = n._next, (t || !(!n._dur && n instanceof Ut && n.vars.onComplete === n._targets[0])) && dn(i, n, n._start - n._delay), n = s;
            return dn(Ct, i, 0), i
        },
        context: function(e, t) {
            return e ? new kp(e, t) : bt
        },
        matchMedia: function(e) {
            return new Cm(e)
        },
        matchMediaRefresh: function() {
            return Ws.forEach(function(e) {
                var t = e.conditions,
                    i, n;
                for (n in t) t[n] && (t[n] = !1, i = 1);
                i && e.revert()
            }) || Fc()
        },
        addEventListener: function(e, t) {
            var i = zl[e] || (zl[e] = []);
            ~i.indexOf(t) || i.push(t)
        },
        removeEventListener: function(e, t) {
            var i = zl[e],
                n = i && i.indexOf(t);
            n >= 0 && i.splice(n, 1)
        },
        utils: {
            wrap: rm,
            wrapYoyo: nm,
            distribute: ap,
            random: up,
            snap: lp,
            normalize: im,
            getUnit: Pi,
            clamp: Z0,
            splitColor: pp,
            toArray: Vr,
            selector: kc,
            mapRange: hp,
            pipe: em,
            unitize: tm,
            interpolate: sm,
            shuffle: op
        },
        install: jd,
        effects: Yu,
        ticker: br,
        updateRoot: Gi.updateRoot,
        plugins: vr,
        globalTimeline: Ct,
        core: {
            PropTween: ar,
            globals: Gd,
            Tween: Ut,
            Timeline: Gi,
            Animation: Ha,
            getCache: qs,
            _removeLinkedListItem: Du,
            reverting: function() {
                return _i
            },
            context: function(e) {
                return e && bt && (bt.data.push(e), e._ctx = bt), bt
            },
            suppressOverwrites: function(e) {
                return dh = e
            }
        }
    };
or("to,from,fromTo,delayedCall,set,killTweensOf", function(r) {
    return iu[r] = Ut[r]
});
br.add(Gi.updateRoot);
bo = iu.to({}, {
    duration: 0
});
var Sm = function(e, t) {
        for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t;) i = i._next;
        return i
    },
    Tm = function(e, t) {
        var i = e._targets,
            n, s, o;
        for (n in t)
            for (s = i.length; s--;) o = e._ptLookup[s][n], o && (o = o.d) && (o._pt && (o = Sm(o, n)), o && o.modifier && o.modifier(t[n], e, i[s], n))
    },
    Ku = function(e, t) {
        return {
            name: e,
            rawVars: 1,
            init: function(n, s, o) {
                o._onInit = function(a) {
                    var l, u;
                    if (hi(s) && (l = {}, or(s, function(c) {
                            return l[c] = 1
                        }), s = l), t) {
                        l = {};
                        for (u in s) l[u] = t(s[u]);
                        s = l
                    }
                    Tm(a, s)
                }
            }
        }
    },
    hr = iu.registerPlugin({
        name: "attr",
        init: function(e, t, i, n, s) {
            var o, a, l;
            this.tween = i;
            for (o in t) l = e.getAttribute(o) || "", a = this.add(e, "setAttribute", (l || 0) + "", t[o], n, s, 0, 0, o), a.op = o, a.b = l, this._props.push(o)
        },
        render: function(e, t) {
            for (var i = t._pt; i;) _i ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d), i = i._next
        }
    }, {
        name: "endArray",
        init: function(e, t) {
            for (var i = t.length; i--;) this.add(e, i, e[i] || 0, t[i], 0, 0, 0, 0, 0, 1)
        }
    }, Ku("roundProps", Pc), Ku("modifiers"), Ku("snap", lp)) || iu;
Ut.version = Gi.version = hr.version = "3.12.7";
Xd = 1;
gh() && Ho();
We.Power0;
We.Power1;
We.Power2;
We.Power3;
We.Power4;
We.Linear;
We.Quad;
We.Cubic;
We.Quart;
We.Quint;
We.Strong;
We.Elastic;
We.Back;
We.SteppedEase;
We.Bounce;
We.Sine;
We.Expo;
We.Circ;
/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Pf, us, Fo, Sh, Ns, Af, Th, km = function() {
        return typeof window < "u"
    },
    Wn = {},
    Rs = 180 / Math.PI,
    Lo = Math.PI / 180,
    po = Math.atan2,
    Ff = 1e8,
    kh = /([A-Z])/g,
    Pm = /(left|right|width|margin|padding|x)/i,
    Am = /[\s,\(]\S/,
    pn = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    },
    Lc = function(e, t) {
        return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
    },
    Fm = function(e, t) {
        return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
    },
    Lm = function(e, t) {
        return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t)
    },
    Om = function(e, t) {
        var i = t.s + t.c * e;
        t.set(t.t, t.p, ~~(i + (i < 0 ? -.5 : .5)) + t.u, t)
    },
    Pp = function(e, t) {
        return t.set(t.t, t.p, e ? t.e : t.b, t)
    },
    Ap = function(e, t) {
        return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t)
    },
    Rm = function(e, t, i) {
        return e.style[t] = i
    },
    Mm = function(e, t, i) {
        return e.style.setProperty(t, i)
    },
    Bm = function(e, t, i) {
        return e._gsap[t] = i
    },
    Nm = function(e, t, i) {
        return e._gsap.scaleX = e._gsap.scaleY = i
    },
    Im = function(e, t, i, n, s) {
        var o = e._gsap;
        o.scaleX = o.scaleY = i, o.renderTransform(s, o)
    },
    zm = function(e, t, i, n, s) {
        var o = e._gsap;
        o[t] = i, o.renderTransform(s, o)
    },
    St = "transform",
    lr = St + "Origin",
    Vm = function r(e, t) {
        var i = this,
            n = this.target,
            s = n.style,
            o = n._gsap;
        if (e in Wn && s) {
            if (this.tfm = this.tfm || {}, e !== "transform") e = pn[e] || e, ~e.indexOf(",") ? e.split(",")
                .forEach(function(a) {
                    return i.tfm[a] = Nn(n, a)
                }) : this.tfm[e] = o.x ? o[e] : Nn(n, e), e === lr && (this.tfm.zOrigin = o.zOrigin);
            else return pn.transform.split(",")
                .forEach(function(a) {
                    return r.call(i, a, t)
                });
            if (this.props.indexOf(St) >= 0) return;
            o.svg && (this.svgo = n.getAttribute("data-svg-origin"), this.props.push(lr, t, "")), e = St
        }(s || t) && this.props.push(e, t, s[e])
    },
    Fp = function(e) {
        e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
    },
    Hm = function() {
        var e = this.props,
            t = this.target,
            i = t.style,
            n = t._gsap,
            s, o;
        for (s = 0; s < e.length; s += 3) e[s + 1] ? e[s + 1] === 2 ? t[e[s]](e[s + 2]) : t[e[s]] = e[s + 2] : e[s + 2] ? i[e[s]] = e[s + 2] : i.removeProperty(e[s].substr(0, 2) === "--" ? e[s] : e[s].replace(kh, "-$1")
            .toLowerCase());
        if (this.tfm) {
            for (o in this.tfm) n[o] = this.tfm[o];
            n.svg && (n.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), s = Th(), (!s || !s.isStart) && !i[St] && (Fp(i), n.zOrigin && i[lr] && (i[lr] += " " + n.zOrigin + "px", n.zOrigin = 0, n.renderTransform()), n.uncache = 1)
        }
    },
    Lp = function(e, t) {
        var i = {
            target: e,
            props: [],
            revert: Hm,
            save: Vm
        };
        return e._gsap || hr.core.getCache(e), t && e.style && e.nodeType && t.split(",")
            .forEach(function(n) {
                return i.save(n)
            }), i
    },
    Op, Oc = function(e, t) {
        var i = us.createElementNS ? us.createElementNS((t || "http://www.w3.org/1999/xhtml")
            .replace(/^https/, "http"), e) : us.createElement(e);
        return i && i.style ? i : us.createElement(e)
    },
    yn = function r(e, t, i) {
        var n = getComputedStyle(e);
        return n[t] || n.getPropertyValue(t.replace(kh, "-$1")
            .toLowerCase()) || n.getPropertyValue(t) || !i && r(e, qo(t) || t, 1) || ""
    },
    Lf = "O,Moz,ms,Ms,Webkit".split(","),
    qo = function(e, t, i) {
        var n = t || Ns,
            s = n.style,
            o = 5;
        if (e in s && !i) return e;
        for (e = e.charAt(0)
            .toUpperCase() + e.substr(1); o-- && !(Lf[o] + e in s););
        return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Lf[o] : "") + e
    },
    Rc = function() {
        km() && window.document && (Pf = window, us = Pf.document, Fo = us.documentElement, Ns = Oc("div") || {
            style: {}
        }, Oc("div"), St = qo(St), lr = St + "Origin", Ns.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Op = !!qo("perspective"), Th = hr.core.reverting, Sh = 1)
    },
    Of = function(e) {
        var t = e.ownerSVGElement,
            i = Oc("svg", t && t.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            n = e.cloneNode(!0),
            s;
        n.style.display = "block", i.appendChild(n), Fo.appendChild(i);
        try {
            s = n.getBBox()
        } catch {}
        return i.removeChild(n), Fo.removeChild(i), s
    },
    Rf = function(e, t) {
        for (var i = t.length; i--;)
            if (e.hasAttribute(t[i])) return e.getAttribute(t[i])
    },
    Rp = function(e) {
        var t, i;
        try {
            t = e.getBBox()
        } catch {
            t = Of(e), i = 1
        }
        return t && (t.width || t.height) || i || (t = Of(e)), t && !t.width && !t.x && !t.y ? {
            x: +Rf(e, ["x", "cx", "x1"]) || 0,
            y: +Rf(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        } : t
    },
    Mp = function(e) {
        return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Rp(e))
    },
    Zs = function(e, t) {
        if (t) {
            var i = e.style,
                n;
            t in Wn && t !== lr && (t = St), i.removeProperty ? (n = t.substr(0, 2), (n === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), i.removeProperty(n === "--" ? t : t.replace(kh, "-$1")
                .toLowerCase())) : i.removeAttribute(t)
        }
    },
    cs = function(e, t, i, n, s, o) {
        var a = new ar(e._pt, t, i, 0, 1, o ? Ap : Pp);
        return e._pt = a, a.b = n, a.e = s, e._props.push(i), a
    },
    Mf = {
        deg: 1,
        rad: 1,
        turn: 1
    },
    qm = {
        grid: 1,
        flex: 1
    },
    _s = function r(e, t, i, n) {
        var s = parseFloat(i) || 0,
            o = (i + "")
            .trim()
            .substr((s + "")
                .length) || "px",
            a = Ns.style,
            l = Pm.test(t),
            u = e.tagName.toLowerCase() === "svg",
            c = (u ? "client" : "offset") + (l ? "Width" : "Height"),
            h = 100,
            f = n === "px",
            g = n === "%",
            m, d, p, y;
        if (n === o || !s || Mf[n] || Mf[o]) return s;
        if (o !== "px" && !f && (s = r(e, t, i, "px")), y = e.getCTM && Mp(e), (g || o === "%") && (Wn[t] || ~t.indexOf("adius"))) return m = y ? e.getBBox()[l ? "width" : "height"] : e[c], Mt(g ? s / m * h : s / 100 * m);
        if (a[l ? "width" : "height"] = h + (f ? o : n), d = n !== "rem" && ~t.indexOf("adius") || n === "em" && e.appendChild && !u ? e : e.parentNode, y && (d = (e.ownerSVGElement || {})
                .parentNode), (!d || d === us || !d.appendChild) && (d = us.body), p = d._gsap, p && g && p.width && l && p.time === br.time && !p.uncache) return Mt(s / p.width * h);
        if (g && (t === "height" || t === "width")) {
            var b = e.style[t];
            e.style[t] = h + n, m = e[c], b ? e.style[t] = b : Zs(e, t)
        } else(g || o === "%") && !qm[yn(d, "display")] && (a.position = yn(e, "position")), d === e && (a.position = "static"), d.appendChild(Ns), m = Ns[c], d.removeChild(Ns), a.position = "absolute";
        return l && g && (p = qs(d), p.time = br.time, p.width = d[c]), Mt(f ? m * s / h : m && s ? h / m * s : 0)
    },
    Nn = function(e, t, i, n) {
        var s;
        return Sh || Rc(), t in pn && t !== "transform" && (t = pn[t], ~t.indexOf(",") && (t = t.split(",")[0])), Wn[t] && t !== "transform" ? (s = $a(e, n), s = t !== "transformOrigin" ? s[t] : s.svg ? s.origin : nu(yn(e, lr)) + " " + s.zOrigin + "px") : (s = e.style[t], (!s || s === "auto" || n || ~(s + "")
                .indexOf("calc(")) && (s = ru[t] && ru[t](e, t, i) || yn(e, t) || Kd(e, t) || (t === "opacity" ? 1 : 0))), i && !~(s + "")
            .trim()
            .indexOf(" ") ? _s(e, t, s, i) + i : s
    },
    $m = function(e, t, i, n) {
        if (!i || i === "none") {
            var s = qo(t, e, 1),
                o = s && yn(e, s, 1);
            o && o !== i ? (t = s, i = o) : t === "borderColor" && (i = yn(e, "borderTopColor"))
        }
        var a = new ar(this._pt, e.style, t, 0, 1, Sp),
            l = 0,
            u = 0,
            c, h, f, g, m, d, p, y, b, w, S, x;
        if (a.b = i, a.e = n, i += "", n += "", n === "auto" && (d = e.style[t], e.style[t] = n, n = yn(e, t) || n, d ? e.style[t] = d : Zs(e, t)), c = [i, n], mp(c), i = c[0], n = c[1], f = i.match(wo) || [], x = n.match(wo) || [], x.length) {
            for (; h = wo.exec(n);) p = h[0], b = n.substring(l, h.index), m ? m = (m + 1) % 5 : (b.substr(-5) === "rgba(" || b.substr(-5) === "hsla(") && (m = 1), p !== (d = f[u++] || "") && (g = parseFloat(d) || 0, S = d.substr((g + "")
                .length), p.charAt(1) === "=" && (p = Ao(g, p) + S), y = parseFloat(p), w = p.substr((y + "")
                .length), l = wo.lastIndex - w.length, w || (w = w || Cr.units[t] || S, l === n.length && (n += w, a.e += w)), S !== w && (g = _s(e, t, d, w) || 0), a._pt = {
                _next: a._pt,
                p: b || u === 1 ? b : ",",
                s: g,
                c: y - g,
                m: m && m < 4 || t === "zIndex" ? Math.round : 0
            });
            a.c = l < n.length ? n.substring(l, n.length) : ""
        } else a.r = t === "display" && n === "none" ? Ap : Pp;
        return Wd.test(n) && (a.e = 0), this._pt = a, a
    },
    Bf = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    },
    Um = function(e) {
        var t = e.split(" "),
            i = t[0],
            n = t[1] || "50%";
        return (i === "top" || i === "bottom" || n === "left" || n === "right") && (e = i, i = n, n = e), t[0] = Bf[i] || i, t[1] = Bf[n] || n, t.join(" ")
    },
    Wm = function(e, t) {
        if (t.tween && t.tween._time === t.tween._dur) {
            var i = t.t,
                n = i.style,
                s = t.u,
                o = i._gsap,
                a, l, u;
            if (s === "all" || s === !0) n.cssText = "", l = 1;
            else
                for (s = s.split(","), u = s.length; --u > -1;) a = s[u], Wn[a] && (l = 1, a = a === "transformOrigin" ? lr : St), Zs(i, a);
            l && (Zs(i, St), o && (o.svg && i.removeAttribute("transform"), n.scale = n.rotate = n.translate = "none", $a(i, 1), o.uncache = 1, Fp(n)))
        }
    },
    ru = {
        clearProps: function(e, t, i, n, s) {
            if (s.data !== "isFromStart") {
                var o = e._pt = new ar(e._pt, t, i, 0, 0, Wm);
                return o.u = n, o.pr = -10, o.tween = s, e._props.push(i), 1
            }
        }
    },
    qa = [1, 0, 0, 1, 0, 0],
    Bp = {},
    Np = function(e) {
        return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
    },
    Nf = function(e) {
        var t = yn(e, St);
        return Np(t) ? qa : t.substr(7)
            .match(Ud)
            .map(Mt)
    },
    Ph = function(e, t) {
        var i = e._gsap || qs(e),
            n = e.style,
            s = Nf(e),
            o, a, l, u;
        return i.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate()
            .matrix, s = [l.a, l.b, l.c, l.d, l.e, l.f], s.join(",") === "1,0,0,1,0,0" ? qa : s) : (s === qa && !e.offsetParent && e !== Fo && !i.svg && (l = n.display, n.display = "block", o = e.parentNode, (!o || !e.offsetParent && !e.getBoundingClientRect()
            .width) && (u = 1, a = e.nextElementSibling, Fo.appendChild(e)), s = Nf(e), l ? n.display = l : Zs(e, "display"), u && (a ? o.insertBefore(e, a) : o ? o.appendChild(e) : Fo.removeChild(e))), t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s)
    },
    Mc = function(e, t, i, n, s, o) {
        var a = e._gsap,
            l = s || Ph(e, !0),
            u = a.xOrigin || 0,
            c = a.yOrigin || 0,
            h = a.xOffset || 0,
            f = a.yOffset || 0,
            g = l[0],
            m = l[1],
            d = l[2],
            p = l[3],
            y = l[4],
            b = l[5],
            w = t.split(" "),
            S = parseFloat(w[0]) || 0,
            x = parseFloat(w[1]) || 0,
            P, C, A, k;
        i ? l !== qa && (C = g * p - m * d) && (A = S * (p / C) + x * (-d / C) + (d * b - p * y) / C, k = S * (-m / C) + x * (g / C) - (g * b - m * y) / C, S = A, x = k) : (P = Rp(e), S = P.x + (~w[0].indexOf("%") ? S / 100 * P.width : S), x = P.y + (~(w[1] || w[0])
            .indexOf("%") ? x / 100 * P.height : x)), n || n !== !1 && a.smooth ? (y = S - u, b = x - c, a.xOffset = h + (y * g + b * d) - y, a.yOffset = f + (y * m + b * p) - b) : a.xOffset = a.yOffset = 0, a.xOrigin = S, a.yOrigin = x, a.smooth = !!n, a.origin = t, a.originIsAbsolute = !!i, e.style[lr] = "0px 0px", o && (cs(o, a, "xOrigin", u, S), cs(o, a, "yOrigin", c, x), cs(o, a, "xOffset", h, a.xOffset), cs(o, a, "yOffset", f, a.yOffset)), e.setAttribute("data-svg-origin", S + " " + x)
    },
    $a = function(e, t) {
        var i = e._gsap || new vp(e);
        if ("x" in i && !t && !i.uncache) return i;
        var n = e.style,
            s = i.scaleX < 0,
            o = "px",
            a = "deg",
            l = getComputedStyle(e),
            u = yn(e, lr) || "0",
            c, h, f, g, m, d, p, y, b, w, S, x, P, C, A, k, I, Y, V, q, K, W, J, T, R, Q, se, ue, ce, le, Z, Te;
        return c = h = f = d = p = y = b = w = S = 0, g = m = 1, i.svg = !!(e.getCTM && Mp(e)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (n[St] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0")
            .split(" ")
            .slice(0, 3)
            .join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ")
            .join(",") + ") " : "") + (l[St] !== "none" ? l[St] : "")), n.scale = n.rotate = n.translate = "none"), C = Ph(e, i.svg), i.svg && (i.uncache ? (R = e.getBBox(), u = i.xOrigin - R.x + "px " + (i.yOrigin - R.y) + "px", T = "") : T = !t && e.getAttribute("data-svg-origin"), Mc(e, T || u, !!T || i.originIsAbsolute, i.smooth !== !1, C)), x = i.xOrigin || 0, P = i.yOrigin || 0, C !== qa && (Y = C[0], V = C[1], q = C[2], K = C[3], c = W = C[4], h = J = C[5], C.length === 6 ? (g = Math.sqrt(Y * Y + V * V), m = Math.sqrt(K * K + q * q), d = Y || V ? po(V, Y) * Rs : 0, b = q || K ? po(q, K) * Rs + d : 0, b && (m *= Math.abs(Math.cos(b * Lo))), i.svg && (c -= x - (x * Y + P * q), h -= P - (x * V + P * K))) : (Te = C[6], le = C[7], se = C[8], ue = C[9], ce = C[10], Z = C[11], c = C[12], h = C[13], f = C[14], A = po(Te, ce), p = A * Rs, A && (k = Math.cos(-A), I = Math.sin(-A), T = W * k + se * I, R = J * k + ue * I, Q = Te * k + ce * I, se = W * -I + se * k, ue = J * -I + ue * k, ce = Te * -I + ce * k, Z = le * -I + Z * k, W = T, J = R, Te = Q), A = po(-q, ce), y = A * Rs, A && (k = Math.cos(-A), I = Math.sin(-A), T = Y * k - se * I, R = V * k - ue * I, Q = q * k - ce * I, Z = K * I + Z * k, Y = T, V = R, q = Q), A = po(V, Y), d = A * Rs, A && (k = Math.cos(A), I = Math.sin(A), T = Y * k + V * I, R = W * k + J * I, V = V * k - Y * I, J = J * k - W * I, Y = T, W = R), p && Math.abs(p) + Math.abs(d) > 359.9 && (p = d = 0, y = 180 - y), g = Mt(Math.sqrt(Y * Y + V * V + q * q)), m = Mt(Math.sqrt(J * J + Te * Te)), A = po(W, J), b = Math.abs(A) > 2e-4 ? A * Rs : 0, S = Z ? 1 / (Z < 0 ? -Z : Z) : 0), i.svg && (T = e.getAttribute("transform"), i.forceCSS = e.setAttribute("transform", "") || !Np(yn(e, St)), T && e.setAttribute("transform", T))), Math.abs(b) > 90 && Math.abs(b) < 270 && (s ? (g *= -1, b += d <= 0 ? 180 : -180, d += d <= 0 ? 180 : -180) : (m *= -1, b += b <= 0 ? 180 : -180)), t = t || i.uncache, i.x = c - ((i.xPercent = c && (!t && i.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? e.offsetWidth * i.xPercent / 100 : 0) + o, i.y = h - ((i.yPercent = h && (!t && i.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-h) ? -50 : 0))) ? e.offsetHeight * i.yPercent / 100 : 0) + o, i.z = f + o, i.scaleX = Mt(g), i.scaleY = Mt(m), i.rotation = Mt(d) + a, i.rotationX = Mt(p) + a, i.rotationY = Mt(y) + a, i.skewX = b + a, i.skewY = w + a, i.transformPerspective = S + o, (i.zOrigin = parseFloat(u.split(" ")[2]) || !t && i.zOrigin || 0) && (n[lr] = nu(u)), i.xOffset = i.yOffset = 0, i.force3D = Cr.force3D, i.renderTransform = i.svg ? Xm : Op ? Ip : Ym, i.uncache = 0, i
    },
    nu = function(e) {
        return (e = e.split(" "))[0] + " " + e[1]
    },
    Zu = function(e, t, i) {
        var n = Pi(t);
        return Mt(parseFloat(t) + parseFloat(_s(e, "x", i + "px", n))) + n
    },
    Ym = function(e, t) {
        t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, Ip(e, t)
    },
    Ls = "0deg",
    sa = "0px",
    Os = ") ",
    Ip = function(e, t) {
        var i = t || this,
            n = i.xPercent,
            s = i.yPercent,
            o = i.x,
            a = i.y,
            l = i.z,
            u = i.rotation,
            c = i.rotationY,
            h = i.rotationX,
            f = i.skewX,
            g = i.skewY,
            m = i.scaleX,
            d = i.scaleY,
            p = i.transformPerspective,
            y = i.force3D,
            b = i.target,
            w = i.zOrigin,
            S = "",
            x = y === "auto" && e && e !== 1 || y === !0;
        if (w && (h !== Ls || c !== Ls)) {
            var P = parseFloat(c) * Lo,
                C = Math.sin(P),
                A = Math.cos(P),
                k;
            P = parseFloat(h) * Lo, k = Math.cos(P), o = Zu(b, o, C * k * -w), a = Zu(b, a, -Math.sin(P) * -w), l = Zu(b, l, A * k * -w + w)
        }
        p !== sa && (S += "perspective(" + p + Os), (n || s) && (S += "translate(" + n + "%, " + s + "%) "), (x || o !== sa || a !== sa || l !== sa) && (S += l !== sa || x ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + Os), u !== Ls && (S += "rotate(" + u + Os), c !== Ls && (S += "rotateY(" + c + Os), h !== Ls && (S += "rotateX(" + h + Os), (f !== Ls || g !== Ls) && (S += "skew(" + f + ", " + g + Os), (m !== 1 || d !== 1) && (S += "scale(" + m + ", " + d + Os), b.style[St] = S || "translate(0, 0)"
    },
    Xm = function(e, t) {
        var i = t || this,
            n = i.xPercent,
            s = i.yPercent,
            o = i.x,
            a = i.y,
            l = i.rotation,
            u = i.skewX,
            c = i.skewY,
            h = i.scaleX,
            f = i.scaleY,
            g = i.target,
            m = i.xOrigin,
            d = i.yOrigin,
            p = i.xOffset,
            y = i.yOffset,
            b = i.forceCSS,
            w = parseFloat(o),
            S = parseFloat(a),
            x, P, C, A, k;
        l = parseFloat(l), u = parseFloat(u), c = parseFloat(c), c && (c = parseFloat(c), u += c, l += c), l || u ? (l *= Lo, u *= Lo, x = Math.cos(l) * h, P = Math.sin(l) * h, C = Math.sin(l - u) * -f, A = Math.cos(l - u) * f, u && (c *= Lo, k = Math.tan(u - c), k = Math.sqrt(1 + k * k), C *= k, A *= k, c && (k = Math.tan(c), k = Math.sqrt(1 + k * k), x *= k, P *= k)), x = Mt(x), P = Mt(P), C = Mt(C), A = Mt(A)) : (x = h, A = f, P = C = 0), (w && !~(o + "")
            .indexOf("px") || S && !~(a + "")
            .indexOf("px")) && (w = _s(g, "x", o, "px"), S = _s(g, "y", a, "px")), (m || d || p || y) && (w = Mt(w + m - (m * x + d * C) + p), S = Mt(S + d - (m * P + d * A) + y)), (n || s) && (k = g.getBBox(), w = Mt(w + n / 100 * k.width), S = Mt(S + s / 100 * k.height)), k = "matrix(" + x + "," + P + "," + C + "," + A + "," + w + "," + S + ")", g.setAttribute("transform", k), b && (g.style[St] = k)
    },
    jm = function(e, t, i, n, s) {
        var o = 360,
            a = hi(s),
            l = parseFloat(s) * (a && ~s.indexOf("rad") ? Rs : 1),
            u = l - n,
            c = n + u + "deg",
            h, f;
        return a && (h = s.split("_")[1], h === "short" && (u %= o, u !== u % (o / 2) && (u += u < 0 ? o : -360)), h === "cw" && u < 0 ? u = (u + o * Ff) % o - ~~(u / o) * o : h === "ccw" && u > 0 && (u = (u - o * Ff) % o - ~~(u / o) * o)), e._pt = f = new ar(e._pt, t, i, n, u, Fm), f.e = c, f.u = "deg", e._props.push(i), f
    },
    If = function(e, t) {
        for (var i in t) e[i] = t[i];
        return e
    },
    Gm = function(e, t, i) {
        var n = If({}, i._gsap),
            s = "perspective,force3D,transformOrigin,svgOrigin",
            o = i.style,
            a, l, u, c, h, f, g, m;
        n.svg ? (u = i.getAttribute("transform"), i.setAttribute("transform", ""), o[St] = t, a = $a(i, 1), Zs(i, St), i.setAttribute("transform", u)) : (u = getComputedStyle(i)[St], o[St] = t, a = $a(i, 1), o[St] = u);
        for (l in Wn) u = n[l], c = a[l], u !== c && s.indexOf(l) < 0 && (g = Pi(u), m = Pi(c), h = g !== m ? _s(i, l, u, m) : parseFloat(u), f = parseFloat(c), e._pt = new ar(e._pt, a, l, h, f - h, Lc), e._pt.u = m || 0, e._props.push(l));
        If(a, n)
    };
or("padding,margin,Width,Radius", function(r, e) {
    var t = "Top",
        i = "Right",
        n = "Bottom",
        s = "Left",
        o = (e < 3 ? [t, i, n, s] : [t + s, t + i, n + i, n + s])
        .map(function(a) {
            return e < 2 ? r + a : "border" + a + r
        });
    ru[e > 1 ? "border" + r : r] = function(a, l, u, c, h) {
        var f, g;
        if (arguments.length < 4) return f = o.map(function(m) {
                return Nn(a, m, u)
            }), g = f.join(" "), g.split(f[0])
            .length === 5 ? f[0] : g;
        f = (c + "")
            .split(" "), g = {}, o.forEach(function(m, d) {
                return g[m] = f[d] = f[d] || f[(d - 1) / 2 | 0]
            }), a.init(l, g, h)
    }
});
var zp = {
    name: "css",
    register: Rc,
    targetTest: function(e) {
        return e.style && e.nodeType
    },
    init: function(e, t, i, n, s) {
        var o = this._props,
            a = e.style,
            l = i.vars.startAt,
            u, c, h, f, g, m, d, p, y, b, w, S, x, P, C, A;
        Sh || Rc(), this.styles = this.styles || Lp(e), A = this.styles.props, this.tween = i;
        for (d in t)
            if (d !== "autoRound" && (c = t[d], !(vr[d] && wp(d, t, i, n, e, s)))) {
                if (g = typeof c, m = ru[d], g === "function" && (c = c.call(i, n, e, s), g = typeof c), g === "string" && ~c.indexOf("random(") && (c = za(c)), m) m(this, e, d, c, i) && (C = 1);
                else if (d.substr(0, 2) === "--") u = (getComputedStyle(e)
                        .getPropertyValue(d) + "")
                    .trim(), c += "", ps.lastIndex = 0, ps.test(u) || (p = Pi(u), y = Pi(c)), y ? p !== y && (u = _s(e, d, u, y) + y) : p && (c += p), this.add(a, "setProperty", u, c, n, s, 0, 0, d), o.push(d), A.push(d, 0, a[d]);
                else if (g !== "undefined") {
                    if (l && d in l ? (u = typeof l[d] == "function" ? l[d].call(i, n, e, s) : l[d], hi(u) && ~u.indexOf("random(") && (u = za(u)), Pi(u + "") || u === "auto" || (u += Cr.units[d] || Pi(Nn(e, d)) || ""), (u + "")
                            .charAt(1) === "=" && (u = Nn(e, d))) : u = Nn(e, d), f = parseFloat(u), b = g === "string" && c.charAt(1) === "=" && c.substr(0, 2), b && (c = c.substr(2)), h = parseFloat(c), d in pn && (d === "autoAlpha" && (f === 1 && Nn(e, "visibility") === "hidden" && h && (f = 0), A.push("visibility", 0, a.visibility), cs(this, a, "visibility", f ? "inherit" : "hidden", h ? "inherit" : "hidden", !h)), d !== "scale" && d !== "transform" && (d = pn[d], ~d.indexOf(",") && (d = d.split(",")[0]))), w = d in Wn, w) {
                        if (this.styles.save(d), S || (x = e._gsap, x.renderTransform && !t.parseTransform || $a(e, t.parseTransform), P = t.smoothOrigin !== !1 && x.smooth, S = this._pt = new ar(this._pt, a, St, 0, 1, x.renderTransform, x, 0, -1), S.dep = 1), d === "scale") this._pt = new ar(this._pt, x, "scaleY", x.scaleY, (b ? Ao(x.scaleY, b + h) : h) - x.scaleY || 0, Lc), this._pt.u = 0, o.push("scaleY", d), d += "X";
                        else if (d === "transformOrigin") {
                            A.push(lr, 0, a[lr]), c = Um(c), x.svg ? Mc(e, c, 0, P, 0, this) : (y = parseFloat(c.split(" ")[2]) || 0, y !== x.zOrigin && cs(this, x, "zOrigin", x.zOrigin, y), cs(this, a, d, nu(u), nu(c)));
                            continue
                        } else if (d === "svgOrigin") {
                            Mc(e, c, 1, P, 0, this);
                            continue
                        } else if (d in Bp) {
                            jm(this, x, d, f, b ? Ao(f, b + c) : c);
                            continue
                        } else if (d === "smoothOrigin") {
                            cs(this, x, "smooth", x.smooth, c);
                            continue
                        } else if (d === "force3D") {
                            x[d] = c;
                            continue
                        } else if (d === "transform") {
                            Gm(this, c, e);
                            continue
                        }
                    } else d in a || (d = qo(d) || d);
                    if (w || (h || h === 0) && (f || f === 0) && !Am.test(c) && d in a) p = (u + "")
                        .substr((f + "")
                            .length), h || (h = 0), y = Pi(c) || (d in Cr.units ? Cr.units[d] : p), p !== y && (f = _s(e, d, u, y)), this._pt = new ar(this._pt, w ? x : a, d, f, (b ? Ao(f, b + h) : h) - f, !w && (y === "px" || d === "zIndex") && t.autoRound !== !1 ? Om : Lc), this._pt.u = y || 0, p !== y && y !== "%" && (this._pt.b = u, this._pt.r = Lm);
                    else if (d in a) $m.call(this, e, d, u, b ? b + c : c);
                    else if (d in e) this.add(e, d, u || e[d], b ? b + c : c, n, s);
                    else if (d !== "parseTransform") {
                        _h(d, c);
                        continue
                    }
                    w || (d in a ? A.push(d, 0, a[d]) : typeof e[d] == "function" ? A.push(d, 2, e[d]()) : A.push(d, 1, u || e[d])), o.push(d)
                }
            } C && Tp(this)
    },
    render: function(e, t) {
        if (t.tween._time || !Th())
            for (var i = t._pt; i;) i.r(e, i.d), i = i._next;
        else t.styles.revert()
    },
    get: Nn,
    aliases: pn,
    getSetter: function(e, t, i) {
        var n = pn[t];
        return n && n.indexOf(",") < 0 && (t = n), t in Wn && t !== lr && (e._gsap.x || Nn(e, "x")) ? i && Af === i ? t === "scale" ? Nm : Bm : (Af = i || {}) && (t === "scale" ? Im : zm) : e.style && !ph(e.style[t]) ? Rm : ~t.indexOf("-") ? Mm : Eh(e, t)
    },
    core: {
        _removeProperty: Zs,
        _getMatrix: Ph
    }
};
hr.utils.checkPrefix = qo;
hr.core.getStyleSaver = Lp;
(function(r, e, t, i) {
    var n = or(r + "," + e + "," + t, function(s) {
        Wn[s] = 1
    });
    or(e, function(s) {
        Cr.units[s] = "deg", Bp[s] = 1
    }), pn[n[13]] = r + "," + e, or(i, function(s) {
        var o = s.split(":");
        pn[o[1]] = n[o[0]]
    })
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
or("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(r) {
    Cr.units[r] = "px"
});
hr.registerPlugin(zp);
var oe = hr.registerPlugin(zp) || hr;
oe.core.Tween;
/*!
 * Observer 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
let mi, Vl, xr, hs, fs, Oo, Vp, Ms, Ea, Hp, Vn, Qr, qp, $p = () => mi || typeof window < "u" && (mi = window.gsap) && mi.registerPlugin && mi,
    Up = 1,
    xo = [],
    ze = [],
    Dn = [],
    Ca = Date.now,
    Bc = (r, e) => e,
    Jm = () => {
        let r = Ea.core,
            e = r.bridge || {},
            t = r._scrollers,
            i = r._proxies;
        t.push(...ze), i.push(...Dn), ze = t, Dn = i, Bc = (n, s) => e[n](s)
    },
    gs = (r, e) => ~Dn.indexOf(r) && Dn[Dn.indexOf(r) + 1][e],
    Sa = r => !!~Hp.indexOf(r),
    Wi = (r, e, t, i, n) => r.addEventListener(e, t, {
        passive: i !== !1,
        capture: !!n
    }),
    Ui = (r, e, t, i) => r.removeEventListener(e, t, !!i),
    Dl = "scrollLeft",
    vl = "scrollTop",
    Nc = () => Vn && Vn.isPressed || ze.cache++,
    su = (r, e) => {
        let t = i => {
            if (i || i === 0) {
                Up && (xr.history.scrollRestoration = "manual");
                let n = Vn && Vn.isPressed;
                i = t.v = Math.round(i) || (Vn && Vn.iOS ? 1 : 0), r(i), t.cacheID = ze.cache, n && Bc("ss", i)
            } else(e || ze.cache !== t.cacheID || Bc("ref")) && (t.cacheID = ze.cache, t.v = r());
            return t.v + t.offset
        };
        return t.offset = 0, r && t
    },
    Ji = {
        s: Dl,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: su(function(r) {
            return arguments.length ? xr.scrollTo(r, ei.sc()) : xr.pageXOffset || hs[Dl] || fs[Dl] || Oo[Dl] || 0
        })
    },
    ei = {
        s: vl,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: Ji,
        sc: su(function(r) {
            return arguments.length ? xr.scrollTo(Ji.sc(), r) : xr.pageYOffset || hs[vl] || fs[vl] || Oo[vl] || 0
        })
    },
    rr = (r, e) => (e && e._ctx && e._ctx.selector || mi.utils.toArray)(r)[0] || (typeof r == "string" && mi.config()
        .nullTargetWarn !== !1 ? console.warn("Element not found:", r) : null),
    ys = (r, {
        s: e,
        sc: t
    }) => {
        Sa(r) && (r = hs.scrollingElement || fs);
        let i = ze.indexOf(r),
            n = t === ei.sc ? 1 : 2;
        !~i && (i = ze.push(r) - 1), ze[i + n] || Wi(r, "scroll", Nc);
        let s = ze[i + n],
            o = s || (ze[i + n] = su(gs(r, e), !0) || (Sa(r) ? t : su(function(a) {
                return arguments.length ? r[e] = a : r[e]
            })));
        return o.target = r, s || (o.smooth = mi.getProperty(r, "scrollBehavior") === "smooth"), o
    },
    Ic = (r, e, t) => {
        let i = r,
            n = r,
            s = Ca(),
            o = s,
            a = e || 50,
            l = Math.max(500, a * 3),
            u = (f, g) => {
                let m = Ca();
                g || m - s > a ? (n = i, i = f, o = s, s = m) : t ? i += f : i = n + (f - n) / (m - o) * (s - o)
            };
        return {
            update: u,
            reset: () => {
                n = i = t ? 0 : i, o = s = 0
            },
            getVelocity: f => {
                let g = o,
                    m = n,
                    d = Ca();
                return (f || f === 0) && f !== i && u(f), s === o || d - o > l ? 0 : (i + (t ? m : -m)) / ((t ? d : s) - g) * 1e3
            }
        }
    },
    oa = (r, e) => (e && !r._gsapAllow && r.preventDefault(), r.changedTouches ? r.changedTouches[0] : r),
    zf = r => {
        let e = Math.max(...r),
            t = Math.min(...r);
        return Math.abs(e) >= Math.abs(t) ? e : t
    },
    Wp = () => {
        Ea = mi.core.globals()
            .ScrollTrigger, Ea && Ea.core && Jm()
    },
    Yp = r => (mi = r || $p(), !Vl && mi && typeof document < "u" && document.body && (xr = window, hs = document, fs = hs.documentElement, Oo = hs.body, Hp = [xr, hs, fs, Oo], mi.utils.clamp, qp = mi.core.context || function() {}, Ms = "onpointerenter" in Oo ? "pointer" : "mouse", Vp = Bt.isTouch = xr.matchMedia && xr.matchMedia("(hover: none), (pointer: coarse)")
        .matches ? 1 : "ontouchstart" in xr || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, Qr = Bt.eventTypes = ("ontouchstart" in fs ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in fs ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup")
        .split(","), setTimeout(() => Up = 0, 500), Wp(), Vl = 1), Vl);
Ji.op = ei;
ze.cache = 0;
class Bt {
    constructor(e) {
        this.init(e)
    }
    init(e) {
        Vl || Yp(mi) || console.warn("Please gsap.registerPlugin(Observer)"), Ea || Wp();
        let {
            tolerance: t,
            dragMinimum: i,
            type: n,
            target: s,
            lineHeight: o,
            debounce: a,
            preventDefault: l,
            onStop: u,
            onStopDelay: c,
            ignore: h,
            wheelSpeed: f,
            event: g,
            onDragStart: m,
            onDragEnd: d,
            onDrag: p,
            onPress: y,
            onRelease: b,
            onRight: w,
            onLeft: S,
            onUp: x,
            onDown: P,
            onChangeX: C,
            onChangeY: A,
            onChange: k,
            onToggleX: I,
            onToggleY: Y,
            onHover: V,
            onHoverEnd: q,
            onMove: K,
            ignoreCheck: W,
            isNormalizer: J,
            onGestureStart: T,
            onGestureEnd: R,
            onWheel: Q,
            onEnable: se,
            onDisable: ue,
            onClick: ce,
            scrollSpeed: le,
            capture: Z,
            allowClicks: Te,
            lockAxis: ke,
            onLockAxis: Ye
        } = e;
        this.target = s = rr(s) || fs, this.vars = e, h && (h = mi.utils.toArray(h)), t = t || 1e-9, i = i || 0, f = f || 1, le = le || 1, n = n || "wheel,touch,pointer", a = a !== !1, o || (o = parseFloat(xr.getComputedStyle(Oo)
            .lineHeight) || 22);
        let G, Xe, j, ie, xe, De, Ve, N = this,
            fe = 0,
            yi = 0,
            tt = e.passive || !l && e.passive !== !1,
            Zi = ys(s, Ji),
            lt = ys(s, ei),
            kr = Zi(),
            _t = lt(),
            At = ~n.indexOf("touch") && !~n.indexOf("pointer") && Qr[0] === "pointerdown",
            $r = Sa(s),
            yt = s.ownerDocument || hs,
            Yt = [0, 0, 0],
            fi = [0, 0, 0],
            bn = 0,
            ti = () => bn = Ca(),
            ut = (U, re) => (N.event = U) && h && ~h.indexOf(U.target) || re && At && U.pointerType !== "touch" || W && W(U, re),
            xn = () => {
                N._vx.reset(), N._vy.reset(), Xe.pause(), u && u(N)
            },
            Pr = () => {
                let U = N.deltaX = zf(Yt),
                    re = N.deltaY = zf(fi),
                    Le = Math.abs(U) >= t,
                    me = Math.abs(re) >= t;
                k && (Le || me) && k(N, U, re, Yt, fi), Le && (w && N.deltaX > 0 && w(N), S && N.deltaX < 0 && S(N), C && C(N), I && N.deltaX < 0 != fe < 0 && I(N), fe = N.deltaX, Yt[0] = Yt[1] = Yt[2] = 0), me && (P && N.deltaY > 0 && P(N), x && N.deltaY < 0 && x(N), A && A(N), Y && N.deltaY < 0 != yi < 0 && Y(N), yi = N.deltaY, fi[0] = fi[1] = fi[2] = 0), (ie || j) && (K && K(N), j && (m && j === 1 && m(N), p && p(N), j = 0), ie = !1), De && !(De = !1) && Ye && Ye(N), xe && (Q(N), xe = !1), G = 0
            },
            En = (U, re, Le) => {
                Yt[Le] += U, fi[Le] += re, N._vx.update(U), N._vy.update(re), a ? G || (G = requestAnimationFrame(Pr)) : Pr()
            },
            Di = (U, re) => {
                ke && !Ve && (N.axis = Ve = Math.abs(U) > Math.abs(re) ? "x" : "y", De = !0), Ve !== "y" && (Yt[2] += U, N._vx.update(U, !0)), Ve !== "x" && (fi[2] += re, N._vy.update(re, !0)), a ? G || (G = requestAnimationFrame(Pr)) : Pr()
            },
            Ur = U => {
                if (ut(U, 1)) return;
                U = oa(U, l);
                let re = U.clientX,
                    Le = U.clientY,
                    me = re - N.x,
                    $e = Le - N.y,
                    ht = N.isDragging;
                N.x = re, N.y = Le, (ht || (me || $e) && (Math.abs(N.startX - re) >= i || Math.abs(N.startY - Le) >= i)) && (j = ht ? 2 : 1, ht || (N.isDragging = !0), Di(me, $e))
            },
            Re = N.onPress = U => {
                ut(U, 1) || U && U.button || (N.axis = Ve = null, Xe.pause(), N.isPressed = !0, U = oa(U), fe = yi = 0, N.startX = N.x = U.clientX, N.startY = N.y = U.clientY, N._vx.reset(), N._vy.reset(), Wi(J ? s : yt, Qr[1], Ur, tt, !0), N.deltaX = N.deltaY = 0, y && y(N))
            },
            vi = N.onRelease = U => {
                if (ut(U, 1)) return;
                Ui(J ? s : yt, Qr[1], Ur, !0);
                let re = !isNaN(N.y - N.startY),
                    Le = N.isDragging,
                    me = Le && (Math.abs(N.x - N.startX) > 3 || Math.abs(N.y - N.startY) > 3),
                    $e = oa(U);
                !me && re && (N._vx.reset(), N._vy.reset(), l && Te && mi.delayedCall(.08, () => {
                    if (Ca() - bn > 300 && !U.defaultPrevented) {
                        if (U.target.click) U.target.click();
                        else if (yt.createEvent) {
                            let ht = yt.createEvent("MouseEvents");
                            ht.initMouseEvent("click", !0, !0, xr, 1, $e.screenX, $e.screenY, $e.clientX, $e.clientY, !1, !1, !1, !1, 0, null), U.target.dispatchEvent(ht)
                        }
                    }
                })), N.isDragging = N.isGesturing = N.isPressed = !1, u && Le && !J && Xe.restart(!0), j && Pr(), d && Le && d(N), b && b(N, me)
            },
            Mi = U => U.touches && U.touches.length > 1 && (N.isGesturing = !0) && T(U, N.isDragging),
            wi = () => (N.isGesturing = !1) || R(N),
            Bi = U => {
                if (ut(U)) return;
                let re = Zi(),
                    Le = lt();
                En((re - kr) * le, (Le - _t) * le, 1), kr = re, _t = Le, u && Xe.restart(!0)
            },
            Wr = U => {
                if (ut(U)) return;
                U = oa(U, l), Q && (xe = !0);
                let re = (U.deltaMode === 1 ? o : U.deltaMode === 2 ? xr.innerHeight : 1) * f;
                En(U.deltaX * re, U.deltaY * re, 0), u && !J && Xe.restart(!0)
            },
            Yr = U => {
                if (ut(U)) return;
                let re = U.clientX,
                    Le = U.clientY,
                    me = re - N.x,
                    $e = Le - N.y;
                N.x = re, N.y = Le, ie = !0, u && Xe.restart(!0), (me || $e) && Di(me, $e)
            },
            ct = U => {
                N.event = U, V(N)
            },
            ne = U => {
                N.event = U, q(N)
            },
            ve = U => ut(U) || oa(U, l) && ce(N);
        Xe = N._dc = mi.delayedCall(c || .25, xn)
            .pause(), N.deltaX = N.deltaY = 0, N._vx = Ic(0, 50, !0), N._vy = Ic(0, 50, !0), N.scrollX = Zi, N.scrollY = lt, N.isDragging = N.isGesturing = N.isPressed = !1, qp(this), N.enable = U => (N.isEnabled || (Wi($r ? yt : s, "scroll", Nc), n.indexOf("scroll") >= 0 && Wi($r ? yt : s, "scroll", Bi, tt, Z), n.indexOf("wheel") >= 0 && Wi(s, "wheel", Wr, tt, Z), (n.indexOf("touch") >= 0 && Vp || n.indexOf("pointer") >= 0) && (Wi(s, Qr[0], Re, tt, Z), Wi(yt, Qr[2], vi), Wi(yt, Qr[3], vi), Te && Wi(s, "click", ti, !0, !0), ce && Wi(s, "click", ve), T && Wi(yt, "gesturestart", Mi), R && Wi(yt, "gestureend", wi), V && Wi(s, Ms + "enter", ct), q && Wi(s, Ms + "leave", ne), K && Wi(s, Ms + "move", Yr)), N.isEnabled = !0, N.isDragging = N.isGesturing = N.isPressed = ie = j = !1, N._vx.reset(), N._vy.reset(), kr = Zi(), _t = lt(), U && U.type && Re(U), se && se(N)), N), N.disable = () => {
                N.isEnabled && (xo.filter(U => U !== N && Sa(U.target))
                    .length || Ui($r ? yt : s, "scroll", Nc), N.isPressed && (N._vx.reset(), N._vy.reset(), Ui(J ? s : yt, Qr[1], Ur, !0)), Ui($r ? yt : s, "scroll", Bi, Z), Ui(s, "wheel", Wr, Z), Ui(s, Qr[0], Re, Z), Ui(yt, Qr[2], vi), Ui(yt, Qr[3], vi), Ui(s, "click", ti, !0), Ui(s, "click", ve), Ui(yt, "gesturestart", Mi), Ui(yt, "gestureend", wi), Ui(s, Ms + "enter", ct), Ui(s, Ms + "leave", ne), Ui(s, Ms + "move", Yr), N.isEnabled = N.isPressed = N.isDragging = !1, ue && ue(N))
            }, N.kill = N.revert = () => {
                N.disable();
                let U = xo.indexOf(N);
                U >= 0 && xo.splice(U, 1), Vn === N && (Vn = 0)
            }, xo.push(N), J && Sa(s) && (Vn = N), N.enable(g)
    }
    get velocityX() {
        return this._vx.getVelocity()
    }
    get velocityY() {
        return this._vy.getVelocity()
    }
}
Bt.version = "3.12.7";
Bt.create = r => new Bt(r);
Bt.register = Yp;
Bt.getAll = () => xo.slice();
Bt.getById = r => xo.filter(e => e.vars.id === r)[0];
$p() && mi.registerPlugin(Bt);
/*!
 * ScrollTrigger 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
let ae, yo, Ie, pt, wr, rt, Ah, ou, Ua, Ta, pa, wl, Si, bu, zc, Xi, Vf, Hf, Do, Xp, Qu, jp, Yi, Vc, Gp, Jp, rs, Hc, Fh, Ro, Lh, au, qc, ec, bl = 1,
    Ti = Date.now,
    tc = Ti(),
    qr = 0,
    ga = 0,
    qf = (r, e, t) => {
        let i = Dr(r) && (r.substr(0, 6) === "clamp(" || r.indexOf("max") > -1);
        return t["_" + e + "Clamp"] = i, i ? r.substr(6, r.length - 7) : r
    },
    $f = (r, e) => e && (!Dr(r) || r.substr(0, 6) !== "clamp(") ? "clamp(" + r + ")" : r,
    Kp = () => ga && requestAnimationFrame(Kp),
    Uf = () => bu = 1,
    Wf = () => bu = 0,
    fn = r => r,
    ma = r => Math.round(r * 1e5) / 1e5 || 0,
    Zp = () => typeof window < "u",
    Qp = () => ae || Zp() && (ae = window.gsap) && ae.registerPlugin && ae,
    Qs = r => !!~Ah.indexOf(r),
    eg = r => (r === "Height" ? Lh : Ie["inner" + r]) || wr["client" + r] || rt["client" + r],
    tg = r => gs(r, "getBoundingClientRect") || (Qs(r) ? () => (Wl.width = Ie.innerWidth, Wl.height = Lh, Wl) : () => In(r)),
    Km = (r, e, {
        d: t,
        d2: i,
        a: n
    }) => (n = gs(r, "getBoundingClientRect")) ? () => n()[t] : () => (e ? eg(i) : r["client" + i]) || 0,
    Zm = (r, e) => !e || ~Dn.indexOf(r) ? tg(r) : () => Wl,
    gn = (r, {
        s: e,
        d2: t,
        d: i,
        a: n
    }) => Math.max(0, (e = "scroll" + t) && (n = gs(r, e)) ? n() - tg(r)()[i] : Qs(r) ? (wr[e] || rt[e]) - eg(t) : r[e] - r["offset" + t]),
    xl = (r, e) => {
        for (let t = 0; t < Do.length; t += 3)(!e || ~e.indexOf(Do[t + 1])) && r(Do[t], Do[t + 1], Do[t + 2])
    },
    Dr = r => typeof r == "string",
    Ai = r => typeof r == "function",
    _a = r => typeof r == "number",
    Bs = r => typeof r == "object",
    aa = (r, e, t) => r && r.progress(e ? 0 : 1) && t && r.pause(),
    ic = (r, e) => {
        if (r.enabled) {
            let t = r._ctx ? r._ctx.add(() => e(r)) : e(r);
            t && t.totalTime && (r.callbackAnimation = t)
        }
    },
    go = Math.abs,
    ig = "left",
    rg = "top",
    Oh = "right",
    Rh = "bottom",
    Ys = "width",
    Xs = "height",
    ka = "Right",
    Pa = "Left",
    Aa = "Top",
    Fa = "Bottom",
    $t = "padding",
    Nr = "margin",
    $o = "Width",
    Mh = "Height",
    Qt = "px",
    Ir = r => Ie.getComputedStyle(r),
    Qm = r => {
        let e = Ir(r)
            .position;
        r.style.position = e === "absolute" || e === "fixed" ? e : "relative"
    },
    Yf = (r, e) => {
        for (let t in e) t in r || (r[t] = e[t]);
        return r
    },
    In = (r, e) => {
        let t = e && Ir(r)[zc] !== "matrix(1, 0, 0, 1, 0, 0)" && ae.to(r, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0
            })
            .progress(1),
            i = r.getBoundingClientRect();
        return t && t.progress(0)
            .kill(), i
    },
    lu = (r, {
        d2: e
    }) => r["offset" + e] || r["client" + e] || 0,
    ng = r => {
        let e = [],
            t = r.labels,
            i = r.duration(),
            n;
        for (n in t) e.push(t[n] / i);
        return e
    },
    e_ = r => e => ae.utils.snap(ng(r), e),
    Bh = r => {
        let e = ae.utils.snap(r),
            t = Array.isArray(r) && r.slice(0)
            .sort((i, n) => i - n);
        return t ? (i, n, s = .001) => {
            let o;
            if (!n) return e(i);
            if (n > 0) {
                for (i -= s, o = 0; o < t.length; o++)
                    if (t[o] >= i) return t[o];
                return t[o - 1]
            } else
                for (o = t.length, i += s; o--;)
                    if (t[o] <= i) return t[o];
            return t[0]
        } : (i, n, s = .001) => {
            let o = e(i);
            return !n || Math.abs(o - i) < s || o - i < 0 == n < 0 ? o : e(n < 0 ? i - r : i + r)
        }
    },
    t_ = r => (e, t) => Bh(ng(r))(e, t.direction),
    El = (r, e, t, i) => t.split(",")
    .forEach(n => r(e, n, i)),
    ci = (r, e, t, i, n) => r.addEventListener(e, t, {
        passive: !i,
        capture: !!n
    }),
    ui = (r, e, t, i) => r.removeEventListener(e, t, !!i),
    Cl = (r, e, t) => {
        t = t && t.wheelHandler, t && (r(e, "wheel", t), r(e, "touchmove", t))
    },
    Xf = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
    },
    Sl = {
        toggleActions: "play",
        anticipatePin: 0
    },
    uu = {
        top: 0,
        left: 0,
        center: .5,
        bottom: 1,
        right: 1
    },
    Hl = (r, e) => {
        if (Dr(r)) {
            let t = r.indexOf("="),
                i = ~t ? +(r.charAt(t - 1) + 1) * parseFloat(r.substr(t + 1)) : 0;
            ~t && (r.indexOf("%") > t && (i *= e / 100), r = r.substr(0, t - 1)), r = i + (r in uu ? uu[r] * e : ~r.indexOf("%") ? parseFloat(r) * e / 100 : parseFloat(r) || 0)
        }
        return r
    },
    Tl = (r, e, t, i, {
        startColor: n,
        endColor: s,
        fontSize: o,
        indent: a,
        fontWeight: l
    }, u, c, h) => {
        let f = pt.createElement("div"),
            g = Qs(t) || gs(t, "pinType") === "fixed",
            m = r.indexOf("scroller") !== -1,
            d = g ? rt : t,
            p = r.indexOf("start") !== -1,
            y = p ? n : s,
            b = "border-color:" + y + ";font-size:" + o + ";color:" + y + ";font-weight:" + l + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return b += "position:" + ((m || h) && g ? "fixed;" : "absolute;"), (m || h || !g) && (b += (i === ei ? Oh : Rh) + ":" + (u + parseFloat(a)) + "px;"), c && (b += "box-sizing:border-box;text-align:left;width:" + c.offsetWidth + "px;"), f._isStart = p, f.setAttribute("class", "gsap-marker-" + r + (e ? " marker-" + e : "")), f.style.cssText = b, f.innerText = e || e === 0 ? r + "-" + e : r, d.children[0] ? d.insertBefore(f, d.children[0]) : d.appendChild(f), f._offset = f["offset" + i.op.d2], ql(f, 0, i, p), f
    },
    ql = (r, e, t, i) => {
        let n = {
                display: "block"
            },
            s = t[i ? "os2" : "p2"],
            o = t[i ? "p2" : "os2"];
        r._isFlipped = i, n[t.a + "Percent"] = i ? -100 : 0, n[t.a] = i ? "1px" : 0, n["border" + s + $o] = 1, n["border" + o + $o] = 0, n[t.p] = e + "px", ae.set(r, n)
    },
    Be = [],
    $c = {},
    Wa, jf = () => Ti() - qr > 34 && (Wa || (Wa = requestAnimationFrame($n))),
    mo = () => {
        (!Yi || !Yi.isPressed || Yi.startX > rt.clientWidth) && (ze.cache++, Yi ? Wa || (Wa = requestAnimationFrame($n)) : $n(), qr || to("scrollStart"), qr = Ti())
    },
    rc = () => {
        Jp = Ie.innerWidth, Gp = Ie.innerHeight
    },
    ya = r => {
        ze.cache++, (r === !0 || !Si && !jp && !pt.fullscreenElement && !pt.webkitFullscreenElement && (!Vc || Jp !== Ie.innerWidth || Math.abs(Ie.innerHeight - Gp) > Ie.innerHeight * .25)) && ou.restart(!0)
    },
    eo = {},
    i_ = [],
    Nh = () => ui(Se, "scrollEnd", Nh) || Is(!0),
    to = r => eo[r] && eo[r].map(e => e()) || i_,
    yr = [],
    sg = r => {
        for (let e = 0; e < yr.length; e += 5)(!r || yr[e + 4] && yr[e + 4].query === r) && (yr[e].style.cssText = yr[e + 1], yr[e].getBBox && yr[e].setAttribute("transform", yr[e + 2] || ""), yr[e + 3].uncache = 1)
    },
    Ih = (r, e) => {
        let t;
        for (Xi = 0; Xi < Be.length; Xi++) t = Be[Xi], t && (!e || t._ctx === e) && (r ? t.kill(1) : t.revert(!0, !0));
        au = !0, e && sg(e), e || to("revert")
    },
    og = (r, e) => {
        ze.cache++, (e || !ji) && ze.forEach(t => Ai(t) && t.cacheID++ && (t.rec = 0)), Dr(r) && (Ie.history.scrollRestoration = Fh = r)
    },
    ji, js = 0,
    Gf, r_ = () => {
        if (Gf !== js) {
            let r = Gf = js;
            requestAnimationFrame(() => r === js && Is(!0))
        }
    },
    ag = () => {
        rt.appendChild(Ro), Lh = !Yi && Ro.offsetHeight || Ie.innerHeight, rt.removeChild(Ro)
    },
    Jf = r => Ua(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end")
    .forEach(e => e.style.display = r ? "none" : "block"),
    Is = (r, e) => {
        if (wr = pt.documentElement, rt = pt.body, Ah = [Ie, pt, wr, rt], qr && !r && !au) {
            ci(Se, "scrollEnd", Nh);
            return
        }
        ag(), ji = Se.isRefreshing = !0, ze.forEach(i => Ai(i) && ++i.cacheID && (i.rec = i()));
        let t = to("refreshInit");
        Xp && Se.sort(), e || Ih(), ze.forEach(i => {
                Ai(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0))
            }), Be.slice(0)
            .forEach(i => i.refresh()), au = !1, Be.forEach(i => {
                if (i._subPinOffset && i.pin) {
                    let n = i.vars.horizontal ? "offsetWidth" : "offsetHeight",
                        s = i.pin[n];
                    i.revert(!0, 1), i.adjustPinSpacing(i.pin[n] - s), i.refresh()
                }
            }), qc = 1, Jf(!0), Be.forEach(i => {
                let n = gn(i.scroller, i._dir),
                    s = i.vars.end === "max" || i._endClamp && i.end > n,
                    o = i._startClamp && i.start >= n;
                (s || o) && i.setPositions(o ? n - 1 : i.start, s ? Math.max(o ? n : i.start + 1, n) : i.end, !0)
            }), Jf(!1), qc = 0, t.forEach(i => i && i.render && i.render(-1)), ze.forEach(i => {
                Ai(i) && (i.smooth && requestAnimationFrame(() => i.target.style.scrollBehavior = "smooth"), i.rec && i(i.rec))
            }), og(Fh, 1), ou.pause(), js++, ji = 2, $n(2), Be.forEach(i => Ai(i.vars.onRefresh) && i.vars.onRefresh(i)), ji = Se.isRefreshing = !1, to("refresh")
    },
    Uc = 0,
    $l = 1,
    La, $n = r => {
        if (r === 2 || !ji && !au) {
            Se.isUpdating = !0, La && La.update(0);
            let e = Be.length,
                t = Ti(),
                i = t - tc >= 50,
                n = e && Be[0].scroll();
            if ($l = Uc > n ? -1 : 1, ji || (Uc = n), i && (qr && !bu && t - qr > 200 && (qr = 0, to("scrollEnd")), pa = tc, tc = t), $l < 0) {
                for (Xi = e; Xi-- > 0;) Be[Xi] && Be[Xi].update(0, i);
                $l = 1
            } else
                for (Xi = 0; Xi < e; Xi++) Be[Xi] && Be[Xi].update(0, i);
            Se.isUpdating = !1
        }
        Wa = 0
    },
    Wc = [ig, rg, Rh, Oh, Nr + Fa, Nr + ka, Nr + Aa, Nr + Pa, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
    Ul = Wc.concat([Ys, Xs, "boxSizing", "max" + $o, "max" + Mh, "position", Nr, $t, $t + Aa, $t + ka, $t + Fa, $t + Pa]),
    n_ = (r, e, t) => {
        Mo(t);
        let i = r._gsap;
        if (i.spacerIsNative) Mo(i.spacerState);
        else if (r._gsap.swappedIn) {
            let n = e.parentNode;
            n && (n.insertBefore(r, e), n.removeChild(e))
        }
        r._gsap.swappedIn = !1
    },
    nc = (r, e, t, i) => {
        if (!r._gsap.swappedIn) {
            let n = Wc.length,
                s = e.style,
                o = r.style,
                a;
            for (; n--;) a = Wc[n], s[a] = t[a];
            s.position = t.position === "absolute" ? "absolute" : "relative", t.display === "inline" && (s.display = "inline-block"), o[Rh] = o[Oh] = "auto", s.flexBasis = t.flexBasis || "auto", s.overflow = "visible", s.boxSizing = "border-box", s[Ys] = lu(r, Ji) + Qt, s[Xs] = lu(r, ei) + Qt, s[$t] = o[Nr] = o[rg] = o[ig] = "0", Mo(i), o[Ys] = o["max" + $o] = t[Ys], o[Xs] = o["max" + Mh] = t[Xs], o[$t] = t[$t], r.parentNode !== e && (r.parentNode.insertBefore(e, r), e.appendChild(r)), r._gsap.swappedIn = !0
        }
    },
    s_ = /([A-Z])/g,
    Mo = r => {
        if (r) {
            let e = r.t.style,
                t = r.length,
                i = 0,
                n, s;
            for ((r.t._gsap || ae.core.getCache(r.t))
                .uncache = 1; i < t; i += 2) s = r[i + 1], n = r[i], s ? e[n] = s : e[n] && e.removeProperty(n.replace(s_, "-$1")
                .toLowerCase())
        }
    },
    kl = r => {
        let e = Ul.length,
            t = r.style,
            i = [],
            n = 0;
        for (; n < e; n++) i.push(Ul[n], t[Ul[n]]);
        return i.t = r, i
    },
    o_ = (r, e, t) => {
        let i = [],
            n = r.length,
            s = t ? 8 : 0,
            o;
        for (; s < n; s += 2) o = r[s], i.push(o, o in e ? e[o] : r[s + 1]);
        return i.t = r.t, i
    },
    Wl = {
        left: 0,
        top: 0
    },
    Kf = (r, e, t, i, n, s, o, a, l, u, c, h, f, g) => {
        Ai(r) && (r = r(a)), Dr(r) && r.substr(0, 3) === "max" && (r = h + (r.charAt(4) === "=" ? Hl("0" + r.substr(3), t) : 0));
        let m = f ? f.time() : 0,
            d, p, y;
        if (f && f.seek(0), isNaN(r) || (r = +r), _a(r)) f && (r = ae.utils.mapRange(f.scrollTrigger.start, f.scrollTrigger.end, 0, h, r)), o && ql(o, t, i, !0);
        else {
            Ai(e) && (e = e(a));
            let b = (r || "0")
                .split(" "),
                w, S, x, P;
            y = rr(e, a) || rt, w = In(y) || {}, (!w || !w.left && !w.top) && Ir(y)
                .display === "none" && (P = y.style.display, y.style.display = "block", w = In(y), P ? y.style.display = P : y.style.removeProperty("display")), S = Hl(b[0], w[i.d]), x = Hl(b[1] || "0", t), r = w[i.p] - l[i.p] - u + S + n - x, o && ql(o, x, i, t - x < 20 || o._isStart && x > 20), t -= t - x
        }
        if (g && (a[g] = r || -.001, r < 0 && (r = 0)), s) {
            let b = r + t,
                w = s._isStart;
            d = "scroll" + i.d2, ql(s, b, i, w && b > 20 || !w && (c ? Math.max(rt[d], wr[d]) : s.parentNode[d]) <= b + 1), c && (l = In(o), c && (s.style[i.op.p] = l[i.op.p] - i.op.m - s._offset + Qt))
        }
        return f && y && (d = In(y), f.seek(h), p = In(y), f._caScrollDist = d[i.p] - p[i.p], r = r / f._caScrollDist * h), f && f.seek(m), f ? r : Math.round(r)
    },
    a_ = /(webkit|moz|length|cssText|inset)/i,
    Zf = (r, e, t, i) => {
        if (r.parentNode !== e) {
            let n = r.style,
                s, o;
            if (e === rt) {
                r._stOrig = n.cssText, o = Ir(r);
                for (s in o) !+s && !a_.test(s) && o[s] && typeof n[s] == "string" && s !== "0" && (n[s] = o[s]);
                n.top = t, n.left = i
            } else n.cssText = r._stOrig;
            ae.core.getCache(r)
                .uncache = 1, e.appendChild(r)
        }
    },
    lg = (r, e, t) => {
        let i = e,
            n = i;
        return s => {
            let o = Math.round(r());
            return o !== i && o !== n && Math.abs(o - i) > 3 && Math.abs(o - n) > 3 && (s = o, t && t()), n = i, i = Math.round(s), i
        }
    },
    Pl = (r, e, t) => {
        let i = {};
        i[e.p] = "+=" + t, ae.set(r, i)
    },
    Qf = (r, e) => {
        let t = ys(r, e),
            i = "_scroll" + e.p2,
            n = (s, o, a, l, u) => {
                let c = n.tween,
                    h = o.onComplete,
                    f = {};
                a = a || t();
                let g = lg(t, a, () => {
                    c.kill(), n.tween = 0
                });
                return u = l && u || 0, l = l || s - a, c && c.kill(), o[i] = s, o.inherit = !1, o.modifiers = f, f[i] = () => g(a + l * c.ratio + u * c.ratio * c.ratio), o.onUpdate = () => {
                    ze.cache++, n.tween && $n()
                }, o.onComplete = () => {
                    n.tween = 0, h && h.call(c)
                }, c = n.tween = ae.to(r, o), c
            };
        return r[i] = t, t.wheelHandler = () => n.tween && n.tween.kill() && (n.tween = 0), ci(r, "wheel", t.wheelHandler), Se.isTouch && ci(r, "touchmove", t.wheelHandler), n
    },
    Se = class cn {
        constructor(e, t) {
            yo || cn.register(ae) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), Hc(this), this.init(e, t)
        }
        init(e, t) {
            if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !ga) {
                this.update = this.refresh = this.kill = fn;
                return
            }
            e = Yf(Dr(e) || _a(e) || e.nodeType ? {
                trigger: e
            } : e, Sl);
            let {
                onUpdate: i,
                toggleClass: n,
                id: s,
                onToggle: o,
                onRefresh: a,
                scrub: l,
                trigger: u,
                pin: c,
                pinSpacing: h,
                invalidateOnRefresh: f,
                anticipatePin: g,
                onScrubComplete: m,
                onSnapComplete: d,
                once: p,
                snap: y,
                pinReparent: b,
                pinSpacer: w,
                containerAnimation: S,
                fastScrollEnd: x,
                preventOverlaps: P
            } = e, C = e.horizontal || e.containerAnimation && e.horizontal !== !1 ? Ji : ei, A = !l && l !== 0, k = rr(e.scroller || Ie), I = ae.core.getCache(k), Y = Qs(k), V = ("pinType" in e ? e.pinType : gs(k, "pinType") || Y && "fixed") === "fixed", q = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack], K = A && e.toggleActions.split(" "), W = "markers" in e ? e.markers : Sl.markers, J = Y ? 0 : parseFloat(Ir(k)["border" + C.p2 + $o]) || 0, T = this, R = e.onRefreshInit && (() => e.onRefreshInit(T)), Q = Km(k, Y, C), se = Zm(k, Y), ue = 0, ce = 0, le = 0, Z = ys(k, C), Te, ke, Ye, G, Xe, j, ie, xe, De, Ve, N, fe, yi, tt, Zi, lt, kr, _t, At, $r, yt, Yt, fi, bn, ti, ut, xn, Pr, En, Di, Ur, Re, vi, Mi, wi, Bi, Wr, Yr, ct;
            if (T._startClamp = T._endClamp = !1, T._dir = C, g *= 45, T.scroller = k, T.scroll = S ? S.time.bind(S) : Z, G = Z(), T.vars = e, t = t || e.animation, "refreshPriority" in e && (Xp = 1, e.refreshPriority === -9999 && (La = T)), I.tweenScroll = I.tweenScroll || {
                    top: Qf(k, ei),
                    left: Qf(k, Ji)
                }, T.tweenTo = Te = I.tweenScroll[C.p], T.scrubDuration = ne => {
                    vi = _a(ne) && ne, vi ? Re ? Re.duration(ne) : Re = ae.to(t, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: vi,
                        paused: !0,
                        onComplete: () => m && m(T)
                    }) : (Re && Re.progress(1)
                        .kill(), Re = 0)
                }, t && (t.vars.lazy = !1, t._initted && !T.isReverted || t.vars.immediateRender !== !1 && e.immediateRender !== !1 && t.duration() && t.render(0, !0, !0), T.animation = t.pause(), t.scrollTrigger = T, T.scrubDuration(l), Di = 0, s || (s = t.vars.id)), y && ((!Bs(y) || y.push) && (y = {
                        snapTo: y
                    }), "scrollBehavior" in rt.style && ae.set(Y ? [rt, wr] : k, {
                        scrollBehavior: "auto"
                    }), ze.forEach(ne => Ai(ne) && ne.target === (Y ? pt.scrollingElement || wr : k) && (ne.smooth = !1)), Ye = Ai(y.snapTo) ? y.snapTo : y.snapTo === "labels" ? e_(t) : y.snapTo === "labelsDirectional" ? t_(t) : y.directional !== !1 ? (ne, ve) => Bh(y.snapTo)(ne, Ti() - ce < 500 ? 0 : ve.direction) : ae.utils.snap(y.snapTo), Mi = y.duration || {
                        min: .1,
                        max: 2
                    }, Mi = Bs(Mi) ? Ta(Mi.min, Mi.max) : Ta(Mi, Mi), wi = ae.delayedCall(y.delay || vi / 2 || .1, () => {
                        let ne = Z(),
                            ve = Ti() - ce < 500,
                            U = Te.tween;
                        if ((ve || Math.abs(T.getVelocity()) < 10) && !U && !bu && ue !== ne) {
                            let re = (ne - j) / tt,
                                Le = t && !A ? t.totalProgress() : re,
                                me = ve ? 0 : (Le - Ur) / (Ti() - pa) * 1e3 || 0,
                                $e = ae.utils.clamp(-re, 1 - re, go(me / 2) * me / .185),
                                ht = re + (y.inertia === !1 ? 0 : $e),
                                je, it, {
                                    onStart: nt,
                                    onInterrupt: Qi,
                                    onComplete: Ke
                                } = y;
                            if (je = Ye(ht, T), _a(je) || (je = ht), it = Math.max(0, Math.round(j + je * tt)), ne <= ie && ne >= j && it !== ne) {
                                if (U && !U._initted && U.data <= go(it - ne)) return;
                                y.inertia === !1 && ($e = je - re), Te(it, {
                                    duration: Mi(go(Math.max(go(ht - Le), go(je - Le)) * .185 / me / .05 || 0)),
                                    ease: y.ease || "power3",
                                    data: go(it - ne),
                                    onInterrupt: () => wi.restart(!0) && Qi && Qi(T),
                                    onComplete() {
                                        T.update(), ue = Z(), t && !A && (Re ? Re.resetTo("totalProgress", je, t._tTime / t._tDur) : t.progress(je)), Di = Ur = t && !A ? t.totalProgress() : T.progress, d && d(T), Ke && Ke(T)
                                    }
                                }, ne, $e * tt, it - ne - $e * tt), nt && nt(T, Te.tween)
                            }
                        } else T.isActive && ue !== ne && wi.restart(!0)
                    })
                    .pause()), s && ($c[s] = T), u = T.trigger = rr(u || c !== !0 && c), ct = u && u._gsap && u._gsap.stRevert, ct && (ct = ct(T)), c = c === !0 ? u : rr(c), Dr(n) && (n = {
                    targets: u,
                    className: n
                }), c && (h === !1 || h === Nr || (h = !h && c.parentNode && c.parentNode.style && Ir(c.parentNode)
                    .display === "flex" ? !1 : $t), T.pin = c, ke = ae.core.getCache(c), ke.spacer ? Zi = ke.pinState : (w && (w = rr(w), w && !w.nodeType && (w = w.current || w.nativeElement), ke.spacerIsNative = !!w, w && (ke.spacerState = kl(w))), ke.spacer = _t = w || pt.createElement("div"), _t.classList.add("pin-spacer"), s && _t.classList.add("pin-spacer-" + s), ke.pinState = Zi = kl(c)), e.force3D !== !1 && ae.set(c, {
                    force3D: !0
                }), T.spacer = _t = ke.spacer, En = Ir(c), bn = En[h + C.os2], $r = ae.getProperty(c), yt = ae.quickSetter(c, C.a, Qt), nc(c, _t, En), kr = kl(c)), W) {
                fe = Bs(W) ? Yf(W, Xf) : Xf, Ve = Tl("scroller-start", s, k, C, fe, 0), N = Tl("scroller-end", s, k, C, fe, 0, Ve), At = Ve["offset" + C.op.d2];
                let ne = rr(gs(k, "content") || k);
                xe = this.markerStart = Tl("start", s, ne, C, fe, At, 0, S), De = this.markerEnd = Tl("end", s, ne, C, fe, At, 0, S), S && (Yr = ae.quickSetter([xe, De], C.a, Qt)), !V && !(Dn.length && gs(k, "fixedMarkers") === !0) && (Qm(Y ? rt : k), ae.set([Ve, N], {
                    force3D: !0
                }), ut = ae.quickSetter(Ve, C.a, Qt), Pr = ae.quickSetter(N, C.a, Qt))
            }
            if (S) {
                let ne = S.vars.onUpdate,
                    ve = S.vars.onUpdateParams;
                S.eventCallback("onUpdate", () => {
                    T.update(0, 0, 1), ne && ne.apply(S, ve || [])
                })
            }
            if (T.previous = () => Be[Be.indexOf(T) - 1], T.next = () => Be[Be.indexOf(T) + 1], T.revert = (ne, ve) => {
                    if (!ve) return T.kill(!0);
                    let U = ne !== !1 || !T.enabled,
                        re = Si;
                    U !== T.isReverted && (U && (Bi = Math.max(Z(), T.scroll.rec || 0), le = T.progress, Wr = t && t.progress()), xe && [xe, De, Ve, N].forEach(Le => Le.style.display = U ? "none" : "block"), U && (Si = T, T.update(U)), c && (!b || !T.isActive) && (U ? n_(c, _t, Zi) : nc(c, _t, Ir(c), ti)), U || T.update(U), Si = re, T.isReverted = U)
                }, T.refresh = (ne, ve, U, re) => {
                    if ((Si || !T.enabled) && !ve) return;
                    if (c && ne && qr) {
                        ci(cn, "scrollEnd", Nh);
                        return
                    }!ji && R && R(T), Si = T, Te.tween && !U && (Te.tween.kill(), Te.tween = 0), Re && Re.pause(), f && t && t.revert({
                            kill: !1
                        })
                        .invalidate(), T.isReverted || T.revert(!0, !0), T._subPinOffset = !1;
                    let Le = Q(),
                        me = se(),
                        $e = S ? S.duration() : gn(k, C),
                        ht = tt <= .01,
                        je = 0,
                        it = re || 0,
                        nt = Bs(U) ? U.end : e.end,
                        Qi = e.endTrigger || u,
                        Ke = Bs(U) ? U.start : e.start || (e.start === 0 || !u ? 0 : c ? "0 0" : "0 100%"),
                        fr = T.pinnedContainer = e.pinnedContainer && rr(e.pinnedContainer, T),
                        Xr = u && Math.max(0, Be.indexOf(T)) || 0,
                        ft = Xr,
                        Xt, Dt, Xn, ii, Ge, gt, ri, Cn, oo, Ar, dr, jn, Gn;
                    for (W && Bs(U) && (jn = ae.getProperty(Ve, C.p), Gn = ae.getProperty(N, C.p)); ft-- > 0;) gt = Be[ft], gt.end || gt.refresh(0, 1) || (Si = T), ri = gt.pin, ri && (ri === u || ri === c || ri === fr) && !gt.isReverted && (Ar || (Ar = []), Ar.unshift(gt), gt.revert(!0, !0)), gt !== Be[ft] && (Xr--, ft--);
                    for (Ai(Ke) && (Ke = Ke(T)), Ke = qf(Ke, "start", T), j = Kf(Ke, u, Le, C, Z(), xe, Ve, T, me, J, V, $e, S, T._startClamp && "_startClamp") || (c ? -.001 : 0), Ai(nt) && (nt = nt(T)), Dr(nt) && !nt.indexOf("+=") && (~nt.indexOf(" ") ? nt = (Dr(Ke) ? Ke.split(" ")[0] : "") + nt : (je = Hl(nt.substr(2), Le), nt = Dr(Ke) ? Ke : (S ? ae.utils.mapRange(0, S.duration(), S.scrollTrigger.start, S.scrollTrigger.end, j) : j) + je, Qi = u)), nt = qf(nt, "end", T), ie = Math.max(j, Kf(nt || (Qi ? "100% 0" : $e), Qi, Le, C, Z() + je, De, N, T, me, J, V, $e, S, T._endClamp && "_endClamp")) || -.001, je = 0, ft = Xr; ft--;) gt = Be[ft], ri = gt.pin, ri && gt.start - gt._pinPush <= j && !S && gt.end > 0 && (Xt = gt.end - (T._startClamp ? Math.max(0, gt.start) : gt.start), (ri === u && gt.start - gt._pinPush < j || ri === fr) && isNaN(Ke) && (je += Xt * (1 - gt.progress)), ri === c && (it += Xt));
                    if (j += je, ie += je, T._startClamp && (T._startClamp += je), T._endClamp && !ji && (T._endClamp = ie || -.001, ie = Math.min(ie, gn(k, C))), tt = ie - j || (j -= .01) && .001, ht && (le = ae.utils.clamp(0, 1, ae.utils.normalize(j, ie, Bi))), T._pinPush = it, xe && je && (Xt = {}, Xt[C.a] = "+=" + je, fr && (Xt[C.p] = "-=" + Z()), ae.set([xe, De], Xt)), c && !(qc && T.end >= gn(k, C))) Xt = Ir(c), ii = C === ei, Xn = Z(), Yt = parseFloat($r(C.a)) + it, !$e && ie > 1 && (dr = (Y ? pt.scrollingElement || wr : k)
                        .style, dr = {
                            style: dr,
                            value: dr["overflow" + C.a.toUpperCase()]
                        }, Y && Ir(rt)["overflow" + C.a.toUpperCase()] !== "scroll" && (dr.style["overflow" + C.a.toUpperCase()] = "scroll")), nc(c, _t, Xt), kr = kl(c), Dt = In(c, !0), Cn = V && ys(k, ii ? Ji : ei)(), h ? (ti = [h + C.os2, tt + it + Qt], ti.t = _t, ft = h === $t ? lu(c, C) + tt + it : 0, ft && (ti.push(C.d, ft + Qt), _t.style.flexBasis !== "auto" && (_t.style.flexBasis = ft + Qt)), Mo(ti), fr && Be.forEach(Sn => {
                        Sn.pin === fr && Sn.vars.pinSpacing !== !1 && (Sn._subPinOffset = !0)
                    }), V && Z(Bi)) : (ft = lu(c, C), ft && _t.style.flexBasis !== "auto" && (_t.style.flexBasis = ft + Qt)), V && (Ge = {
                        top: Dt.top + (ii ? Xn - j : Cn) + Qt,
                        left: Dt.left + (ii ? Cn : Xn - j) + Qt,
                        boxSizing: "border-box",
                        position: "fixed"
                    }, Ge[Ys] = Ge["max" + $o] = Math.ceil(Dt.width) + Qt, Ge[Xs] = Ge["max" + Mh] = Math.ceil(Dt.height) + Qt, Ge[Nr] = Ge[Nr + Aa] = Ge[Nr + ka] = Ge[Nr + Fa] = Ge[Nr + Pa] = "0", Ge[$t] = Xt[$t], Ge[$t + Aa] = Xt[$t + Aa], Ge[$t + ka] = Xt[$t + ka], Ge[$t + Fa] = Xt[$t + Fa], Ge[$t + Pa] = Xt[$t + Pa], lt = o_(Zi, Ge, b), ji && Z(0)), t ? (oo = t._initted, Qu(1), t.render(t.duration(), !0, !0), fi = $r(C.a) - Yt + tt + it, xn = Math.abs(tt - fi) > 1, V && xn && lt.splice(lt.length - 2, 2), t.render(0, !0, !0), oo || t.invalidate(!0), t.parent || t.totalTime(t.totalTime()), Qu(0)) : fi = tt, dr && (dr.value ? dr.style["overflow" + C.a.toUpperCase()] = dr.value : dr.style.removeProperty("overflow-" + C.a));
                    else if (u && Z() && !S)
                        for (Dt = u.parentNode; Dt && Dt !== rt;) Dt._pinOffset && (j -= Dt._pinOffset, ie -= Dt._pinOffset), Dt = Dt.parentNode;
                    Ar && Ar.forEach(Sn => Sn.revert(!1, !0)), T.start = j, T.end = ie, G = Xe = ji ? Bi : Z(), !S && !ji && (G < Bi && Z(Bi), T.scroll.rec = 0), T.revert(!1, !0), ce = Ti(), wi && (ue = -1, wi.restart(!0)), Si = 0, t && A && (t._initted || Wr) && t.progress() !== Wr && t.progress(Wr || 0, !0)
                        .render(t.time(), !0, !0), (ht || le !== T.progress || S || f || t && !t._initted) && (t && !A && t.totalProgress(S && j < -.001 && !le ? ae.utils.normalize(j, ie, 0) : le, !0), T.progress = ht || (G - j) / tt === le ? 0 : le), c && h && (_t._pinOffset = Math.round(T.progress * fi)), Re && Re.invalidate(), isNaN(jn) || (jn -= ae.getProperty(Ve, C.p), Gn -= ae.getProperty(N, C.p), Pl(Ve, C, jn), Pl(xe, C, jn - (re || 0)), Pl(N, C, Gn), Pl(De, C, Gn - (re || 0))), ht && !ji && T.update(), a && !ji && !yi && (yi = !0, a(T), yi = !1)
                }, T.getVelocity = () => (Z() - Xe) / (Ti() - pa) * 1e3 || 0, T.endAnimation = () => {
                    aa(T.callbackAnimation), t && (Re ? Re.progress(1) : t.paused() ? A || aa(t, T.direction < 0, 1) : aa(t, t.reversed()))
                }, T.labelToScroll = ne => t && t.labels && (j || T.refresh() || j) + t.labels[ne] / t.duration() * tt || 0, T.getTrailing = ne => {
                    let ve = Be.indexOf(T),
                        U = T.direction > 0 ? Be.slice(0, ve)
                        .reverse() : Be.slice(ve + 1);
                    return (Dr(ne) ? U.filter(re => re.vars.preventOverlaps === ne) : U)
                        .filter(re => T.direction > 0 ? re.end <= j : re.start >= ie)
                }, T.update = (ne, ve, U) => {
                    if (S && !U && !ne) return;
                    let re = ji === !0 ? Bi : T.scroll(),
                        Le = ne ? 0 : (re - j) / tt,
                        me = Le < 0 ? 0 : Le > 1 ? 1 : Le || 0,
                        $e = T.progress,
                        ht, je, it, nt, Qi, Ke, fr, Xr;
                    if (ve && (Xe = G, G = S ? Z() : re, y && (Ur = Di, Di = t && !A ? t.totalProgress() : me)), g && c && !Si && !bl && qr && (!me && j < re + (re - Xe) / (Ti() - pa) * g ? me = 1e-4 : me === 1 && ie > re + (re - Xe) / (Ti() - pa) * g && (me = .9999)), me !== $e && T.enabled) {
                        if (ht = T.isActive = !!me && me < 1, je = !!$e && $e < 1, Ke = ht !== je, Qi = Ke || !!me != !!$e, T.direction = me > $e ? 1 : -1, T.progress = me, Qi && !Si && (it = me && !$e ? 0 : me === 1 ? 1 : $e === 1 ? 2 : 3, A && (nt = !Ke && K[it + 1] !== "none" && K[it + 1] || K[it], Xr = t && (nt === "complete" || nt === "reset" || nt in t))), P && (Ke || Xr) && (Xr || l || !t) && (Ai(P) ? P(T) : T.getTrailing(P)
                                .forEach(ft => ft.endAnimation())), A || (Re && !Si && !bl ? (Re._dp._time - Re._start !== Re._time && Re.render(Re._dp._time - Re._start), Re.resetTo ? Re.resetTo("totalProgress", me, t._tTime / t._tDur) : (Re.vars.totalProgress = me, Re.invalidate()
                                .restart())) : t && t.totalProgress(me, !!(Si && (ce || ne)))), c) {
                            if (ne && h && (_t.style[h + C.os2] = bn), !V) yt(ma(Yt + fi * me));
                            else if (Qi) {
                                if (fr = !ne && me > $e && ie + 1 > re && re + 1 >= gn(k, C), b)
                                    if (!ne && (ht || fr)) {
                                        let ft = In(c, !0),
                                            Xt = re - j;
                                        Zf(c, rt, ft.top + (C === ei ? Xt : 0) + Qt, ft.left + (C === ei ? 0 : Xt) + Qt)
                                    } else Zf(c, _t);
                                Mo(ht || fr ? lt : kr), xn && me < 1 && ht || yt(Yt + (me === 1 && !fr ? fi : 0))
                            }
                        }
                        y && !Te.tween && !Si && !bl && wi.restart(!0), n && (Ke || p && me && (me < 1 || !ec)) && Ua(n.targets)
                            .forEach(ft => ft.classList[ht || p ? "add" : "remove"](n.className)), i && !A && !ne && i(T), Qi && !Si ? (A && (Xr && (nt === "complete" ? t.pause()
                                .totalProgress(1) : nt === "reset" ? t.restart(!0)
                                .pause() : nt === "restart" ? t.restart(!0) : t[nt]()), i && i(T)), (Ke || !ec) && (o && Ke && ic(T, o), q[it] && ic(T, q[it]), p && (me === 1 ? T.kill(!1, 1) : q[it] = 0), Ke || (it = me === 1 ? 1 : 3, q[it] && ic(T, q[it]))), x && !ht && Math.abs(T.getVelocity()) > (_a(x) ? x : 2500) && (aa(T.callbackAnimation), Re ? Re.progress(1) : aa(t, nt === "reverse" ? 1 : !me, 1))) : A && i && !Si && i(T)
                    }
                    if (Pr) {
                        let ft = S ? re / S.duration() * (S._caScrollDist || 0) : re;
                        ut(ft + (Ve._isFlipped ? 1 : 0)), Pr(ft)
                    }
                    Yr && Yr(-re / S.duration() * (S._caScrollDist || 0))
                }, T.enable = (ne, ve) => {
                    T.enabled || (T.enabled = !0, ci(k, "resize", ya), Y || ci(k, "scroll", mo), R && ci(cn, "refreshInit", R), ne !== !1 && (T.progress = le = 0, G = Xe = ue = Z()), ve !== !1 && T.refresh())
                }, T.getTween = ne => ne && Te ? Te.tween : Re, T.setPositions = (ne, ve, U, re) => {
                    if (S) {
                        let Le = S.scrollTrigger,
                            me = S.duration(),
                            $e = Le.end - Le.start;
                        ne = Le.start + $e * ne / me, ve = Le.start + $e * ve / me
                    }
                    T.refresh(!1, !1, {
                        start: $f(ne, U && !!T._startClamp),
                        end: $f(ve, U && !!T._endClamp)
                    }, re), T.update()
                }, T.adjustPinSpacing = ne => {
                    if (ti && ne) {
                        let ve = ti.indexOf(C.d) + 1;
                        ti[ve] = parseFloat(ti[ve]) + ne + Qt, ti[1] = parseFloat(ti[1]) + ne + Qt, Mo(ti)
                    }
                }, T.disable = (ne, ve) => {
                    if (T.enabled && (ne !== !1 && T.revert(!0, !0), T.enabled = T.isActive = !1, ve || Re && Re.pause(), Bi = 0, ke && (ke.uncache = 1), R && ui(cn, "refreshInit", R), wi && (wi.pause(), Te.tween && Te.tween.kill() && (Te.tween = 0)), !Y)) {
                        let U = Be.length;
                        for (; U--;)
                            if (Be[U].scroller === k && Be[U] !== T) return;
                        ui(k, "resize", ya), Y || ui(k, "scroll", mo)
                    }
                }, T.kill = (ne, ve) => {
                    T.disable(ne, ve), Re && !ve && Re.kill(), s && delete $c[s];
                    let U = Be.indexOf(T);
                    U >= 0 && Be.splice(U, 1), U === Xi && $l > 0 && Xi--, U = 0, Be.forEach(re => re.scroller === T.scroller && (U = 1)), U || ji || (T.scroll.rec = 0), t && (t.scrollTrigger = null, ne && t.revert({
                        kill: !1
                    }), ve || t.kill()), xe && [xe, De, Ve, N].forEach(re => re.parentNode && re.parentNode.removeChild(re)), La === T && (La = 0), c && (ke && (ke.uncache = 1), U = 0, Be.forEach(re => re.pin === c && U++), U || (ke.spacer = 0)), e.onKill && e.onKill(T)
                }, Be.push(T), T.enable(!1, !1), ct && ct(T), t && t.add && !tt) {
                let ne = T.update;
                T.update = () => {
                    T.update = ne, ze.cache++, j || ie || T.refresh()
                }, ae.delayedCall(.01, T.update), tt = .01, j = ie = 0
            } else T.refresh();
            c && r_()
        }
        static register(e) {
            return yo || (ae = e || Qp(), Zp() && window.document && cn.enable(), yo = ga), yo
        }
        static defaults(e) {
            if (e)
                for (let t in e) Sl[t] = e[t];
            return Sl
        }
        static disable(e, t) {
            ga = 0, Be.forEach(i => i[t ? "kill" : "disable"](e)), ui(Ie, "wheel", mo), ui(pt, "scroll", mo), clearInterval(wl), ui(pt, "touchcancel", fn), ui(rt, "touchstart", fn), El(ui, pt, "pointerdown,touchstart,mousedown", Uf), El(ui, pt, "pointerup,touchend,mouseup", Wf), ou.kill(), xl(ui);
            for (let i = 0; i < ze.length; i += 3) Cl(ui, ze[i], ze[i + 1]), Cl(ui, ze[i], ze[i + 2])
        }
        static enable() {
            if (Ie = window, pt = document, wr = pt.documentElement, rt = pt.body, ae && (Ua = ae.utils.toArray, Ta = ae.utils.clamp, Hc = ae.core.context || fn, Qu = ae.core.suppressOverwrites || fn, Fh = Ie.history.scrollRestoration || "auto", Uc = Ie.pageYOffset || 0, ae.core.globals("ScrollTrigger", cn), rt)) {
                ga = 1, Ro = document.createElement("div"), Ro.style.height = "100vh", Ro.style.position = "absolute", ag(), Kp(), Bt.register(ae), cn.isTouch = Bt.isTouch, rs = Bt.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Vc = Bt.isTouch === 1, ci(Ie, "wheel", mo), Ah = [Ie, pt, wr, rt], ae.matchMedia ? (cn.matchMedia = a => {
                        let l = ae.matchMedia(),
                            u;
                        for (u in a) l.add(u, a[u]);
                        return l
                    }, ae.addEventListener("matchMediaInit", () => Ih()), ae.addEventListener("matchMediaRevert", () => sg()), ae.addEventListener("matchMedia", () => {
                        Is(0, 1), to("matchMedia")
                    }), ae.matchMedia()
                    .add("(orientation: portrait)", () => (rc(), rc))) : console.warn("Requires GSAP 3.11.0 or later"), rc(), ci(pt, "scroll", mo);
                let e = rt.hasAttribute("style"),
                    t = rt.style,
                    i = t.borderTopStyle,
                    n = ae.core.Animation.prototype,
                    s, o;
                for (n.revert || Object.defineProperty(n, "revert", {
                        value: function() {
                            return this.time(-.01, !0)
                        }
                    }), t.borderTopStyle = "solid", s = In(rt), ei.m = Math.round(s.top + ei.sc()) || 0, Ji.m = Math.round(s.left + Ji.sc()) || 0, i ? t.borderTopStyle = i : t.removeProperty("border-top-style"), e || (rt.setAttribute("style", ""), rt.removeAttribute("style")), wl = setInterval(jf, 250), ae.delayedCall(.5, () => bl = 0), ci(pt, "touchcancel", fn), ci(rt, "touchstart", fn), El(ci, pt, "pointerdown,touchstart,mousedown", Uf), El(ci, pt, "pointerup,touchend,mouseup", Wf), zc = ae.utils.checkPrefix("transform"), Ul.push(zc), yo = Ti(), ou = ae.delayedCall(.2, Is)
                    .pause(), Do = [pt, "visibilitychange", () => {
                        let a = Ie.innerWidth,
                            l = Ie.innerHeight;
                        pt.hidden ? (Vf = a, Hf = l) : (Vf !== a || Hf !== l) && ya()
                    }, pt, "DOMContentLoaded", Is, Ie, "load", Is, Ie, "resize", ya], xl(ci), Be.forEach(a => a.enable(0, 1)), o = 0; o < ze.length; o += 3) Cl(ui, ze[o], ze[o + 1]), Cl(ui, ze[o], ze[o + 2])
            }
        }
        static config(e) {
            "limitCallbacks" in e && (ec = !!e.limitCallbacks);
            let t = e.syncInterval;
            t && clearInterval(wl) || (wl = t) && setInterval(jf, t), "ignoreMobileResize" in e && (Vc = cn.isTouch === 1 && e.ignoreMobileResize), "autoRefreshEvents" in e && (xl(ui) || xl(ci, e.autoRefreshEvents || "none"), jp = (e.autoRefreshEvents + "")
                .indexOf("resize") === -1)
        }
        static scrollerProxy(e, t) {
            let i = rr(e),
                n = ze.indexOf(i),
                s = Qs(i);
            ~n && ze.splice(n, s ? 6 : 2), t && (s ? Dn.unshift(Ie, t, rt, t, wr, t) : Dn.unshift(i, t))
        }
        static clearMatchMedia(e) {
            Be.forEach(t => t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0))
        }
        static isInViewport(e, t, i) {
            let n = (Dr(e) ? rr(e) : e)
                .getBoundingClientRect(),
                s = n[i ? Ys : Xs] * t || 0;
            return i ? n.right - s > 0 && n.left + s < Ie.innerWidth : n.bottom - s > 0 && n.top + s < Ie.innerHeight
        }
        static positionInViewport(e, t, i) {
            Dr(e) && (e = rr(e));
            let n = e.getBoundingClientRect(),
                s = n[i ? Ys : Xs],
                o = t == null ? s / 2 : t in uu ? uu[t] * s : ~t.indexOf("%") ? parseFloat(t) * s / 100 : parseFloat(t) || 0;
            return i ? (n.left + o) / Ie.innerWidth : (n.top + o) / Ie.innerHeight
        }
        static killAll(e) {
            if (Be.slice(0)
                .forEach(t => t.vars.id !== "ScrollSmoother" && t.kill()), e !== !0) {
                let t = eo.killAll || [];
                eo = {}, t.forEach(i => i())
            }
        }
    };
Se.version = "3.12.7";
Se.saveStyles = r => r ? Ua(r)
    .forEach(e => {
        if (e && e.style) {
            let t = yr.indexOf(e);
            t >= 0 && yr.splice(t, 5), yr.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), ae.core.getCache(e), Hc())
        }
    }) : yr;
Se.revert = (r, e) => Ih(!r, e);
Se.create = (r, e) => new Se(r, e);
Se.refresh = r => r ? ya(!0) : (yo || Se.register()) && Is(!0);
Se.update = r => ++ze.cache && $n(r === !0 ? 2 : 0);
Se.clearScrollMemory = og;
Se.maxScroll = (r, e) => gn(r, e ? Ji : ei);
Se.getScrollFunc = (r, e) => ys(rr(r), e ? Ji : ei);
Se.getById = r => $c[r];
Se.getAll = () => Be.filter(r => r.vars.id !== "ScrollSmoother");
Se.isScrolling = () => !!qr;
Se.snapDirectional = Bh;
Se.addEventListener = (r, e) => {
    let t = eo[r] || (eo[r] = []);
    ~t.indexOf(e) || t.push(e)
};
Se.removeEventListener = (r, e) => {
    let t = eo[r],
        i = t && t.indexOf(e);
    i >= 0 && t.splice(i, 1)
};
Se.batch = (r, e) => {
    let t = [],
        i = {},
        n = e.interval || .016,
        s = e.batchMax || 1e9,
        o = (l, u) => {
            let c = [],
                h = [],
                f = ae.delayedCall(n, () => {
                    u(c, h), c = [], h = []
                })
                .pause();
            return g => {
                c.length || f.restart(!0), c.push(g.trigger), h.push(g), s <= c.length && f.progress(1)
            }
        },
        a;
    for (a in e) i[a] = a.substr(0, 2) === "on" && Ai(e[a]) && a !== "onRefreshInit" ? o(a, e[a]) : e[a];
    return Ai(s) && (s = s(), ci(Se, "refresh", () => s = e.batchMax())), Ua(r)
        .forEach(l => {
            let u = {};
            for (a in i) u[a] = i[a];
            u.trigger = l, t.push(Se.create(u))
        }), t
};
let ed = (r, e, t, i) => (e > i ? r(i) : e < 0 && r(0), t > i ? (i - e) / (t - e) : t < 0 ? e / (e - t) : 1),
    Yl = (r, e) => {
        e === !0 ? r.style.removeProperty("touch-action") : r.style.touchAction = e === !0 ? "auto" : e ? "pan-" + e + (Bt.isTouch ? " pinch-zoom" : "") : "none", r === wr && Yl(rt, e)
    },
    Al = {
        auto: 1,
        scroll: 1
    },
    l_ = ({
        event: r,
        target: e,
        axis: t
    }) => {
        let i = (r.changedTouches ? r.changedTouches[0] : r)
            .target,
            n = i._gsap || ae.core.getCache(i),
            s = Ti(),
            o;
        if (!n._isScrollT || s - n._isScrollT > 2e3) {
            for (; i && i !== rt && (i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth || !(Al[(o = Ir(i))
                    .overflowY] || Al[o.overflowX]));) i = i.parentNode;
            n._isScroll = i && i !== e && !Qs(i) && (Al[(o = Ir(i))
                .overflowY] || Al[o.overflowX]), n._isScrollT = s
        }(n._isScroll || t === "x") && (r.stopPropagation(), r._gsapAllow = !0)
    },
    ug = (r, e, t, i) => Bt.create({
        target: r,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: e,
        onWheel: i = i && l_,
        onPress: i,
        onDrag: i,
        onScroll: i,
        onEnable: () => t && ci(pt, Bt.eventTypes[0], id, !1, !0),
        onDisable: () => ui(pt, Bt.eventTypes[0], id, !0)
    }),
    u_ = /(input|label|select|textarea)/i,
    td, id = r => {
        let e = u_.test(r.target.tagName);
        (e || td) && (r._gsapAllow = !0, td = e)
    },
    c_ = r => {
        Bs(r) || (r = {}), r.preventDefault = r.isNormalizer = r.allowClicks = !0, r.type || (r.type = "wheel,touch"), r.debounce = !!r.debounce, r.id = r.id || "normalizer";
        let {
            normalizeScrollX: e,
            momentum: t,
            allowNestedScroll: i,
            onRelease: n
        } = r, s, o, a = rr(r.target) || wr, l = ae.core.globals()
            .ScrollSmoother, u = l && l.get(), c = rs && (r.content && rr(r.content) || u && r.content !== !1 && !u.smooth() && u.content()), h = ys(a, ei), f = ys(a, Ji), g = 1, m = (Bt.isTouch && Ie.visualViewport ? Ie.visualViewport.scale * Ie.visualViewport.width : Ie.outerWidth) / Ie.innerWidth, d = 0, p = Ai(t) ? () => t(s) : () => t || 2.8, y, b, w = ug(a, r.type, !0, i), S = () => b = !1, x = fn, P = fn, C = () => {
                o = gn(a, ei), P = Ta(rs ? 1 : 0, o), e && (x = Ta(0, gn(a, Ji))), y = js
            }, A = () => {
                c._gsap.y = ma(parseFloat(c._gsap.y) + h.offset) + "px", c.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(c._gsap.y) + ", 0, 1)", h.offset = h.cacheID = 0
            }, k = () => {
                if (b) {
                    requestAnimationFrame(S);
                    let W = ma(s.deltaY / 2),
                        J = P(h.v - W);
                    if (c && J !== h.v + h.offset) {
                        h.offset = J - h.v;
                        let T = ma((parseFloat(c && c._gsap.y) || 0) - h.offset);
                        c.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + T + ", 0, 1)", c._gsap.y = T + "px", h.cacheID = ze.cache, $n()
                    }
                    return !0
                }
                h.offset && A(), b = !0
            }, I, Y, V, q, K = () => {
                C(), I.isActive() && I.vars.scrollY > o && (h() > o ? I.progress(1) && h(o) : I.resetTo("scrollY", o))
            };
        return c && ae.set(c, {
            y: "+=0"
        }), r.ignoreCheck = W => rs && W.type === "touchmove" && k() || g > 1.05 && W.type !== "touchstart" || s.isGesturing || W.touches && W.touches.length > 1, r.onPress = () => {
            b = !1;
            let W = g;
            g = ma((Ie.visualViewport && Ie.visualViewport.scale || 1) / m), I.pause(), W !== g && Yl(a, g > 1.01 ? !0 : e ? !1 : "x"), Y = f(), V = h(), C(), y = js
        }, r.onRelease = r.onGestureStart = (W, J) => {
            if (h.offset && A(), !J) q.restart(!0);
            else {
                ze.cache++;
                let T = p(),
                    R, Q;
                e && (R = f(), Q = R + T * .05 * -W.velocityX / .227, T *= ed(f, R, Q, gn(a, Ji)), I.vars.scrollX = x(Q)), R = h(), Q = R + T * .05 * -W.velocityY / .227, T *= ed(h, R, Q, gn(a, ei)), I.vars.scrollY = P(Q), I.invalidate()
                    .duration(T)
                    .play(.01), (rs && I.vars.scrollY >= o || R >= o - 1) && ae.to({}, {
                        onUpdate: K,
                        duration: T
                    })
            }
            n && n(W)
        }, r.onWheel = () => {
            I._ts && I.pause(), Ti() - d > 1e3 && (y = 0, d = Ti())
        }, r.onChange = (W, J, T, R, Q) => {
            if (js !== y && C(), J && e && f(x(R[2] === J ? Y + (W.startX - W.x) : f() + J - R[1])), T) {
                h.offset && A();
                let se = Q[2] === T,
                    ue = se ? V + W.startY - W.y : h() + T - Q[1],
                    ce = P(ue);
                se && ue !== ce && (V += ce - ue), h(ce)
            }(T || J) && $n()
        }, r.onEnable = () => {
            Yl(a, e ? !1 : "x"), Se.addEventListener("refresh", K), ci(Ie, "resize", K), h.smooth && (h.target.style.scrollBehavior = "auto", h.smooth = f.smooth = !1), w.enable()
        }, r.onDisable = () => {
            Yl(a, !0), ui(Ie, "resize", K), Se.removeEventListener("refresh", K), w.kill()
        }, r.lockAxis = r.lockAxis !== !1, s = new Bt(r), s.iOS = rs, rs && !h() && h(1), rs && ae.ticker.add(fn), q = s._dc, I = ae.to(s, {
            ease: "power4",
            paused: !0,
            inherit: !1,
            scrollX: e ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
                scrollY: lg(h, h(), () => I.pause())
            },
            onUpdate: $n,
            onComplete: q.vars.onComplete
        }), s
    };
Se.sort = r => {
    if (Ai(r)) return Be.sort(r);
    let e = Ie.pageYOffset || 0;
    return Se.getAll()
        .forEach(t => t._sortY = t.trigger ? e + t.trigger.getBoundingClientRect()
            .top : t.start + Ie.innerHeight), Be.sort(r || ((t, i) => (t.vars.refreshPriority || 0) * -1e6 + (t.vars.containerAnimation ? 1e6 : t._sortY) - ((i.vars.containerAnimation ? 1e6 : i._sortY) + (i.vars.refreshPriority || 0) * -1e6)))
};
Se.observe = r => new Bt(r);
Se.normalizeScroll = r => {
    if (typeof r > "u") return Yi;
    if (r === !0 && Yi) return Yi.enable();
    if (r === !1) {
        Yi && Yi.kill(), Yi = r;
        return
    }
    let e = r instanceof Bt ? r : c_(r);
    return Yi && Yi.target === e.target && Yi.kill(), Qs(e.target) && (Yi = e), e
};
Se.core = {
    _getVelocityProp: Ic,
    _inputObserver: ug,
    _scrollers: ze,
    _proxies: Dn,
    bridge: {
        ss: () => {
            qr || to("scrollStart"), qr = Ti()
        },
        ref: () => Si
    }
};
Qp() && ae.registerPlugin(Se);
var h_ = "1.2.3";

function cg(r, e, t) {
    return Math.max(r, Math.min(e, t))
}

function f_(r, e, t) {
    return (1 - t) * r + t * e
}

function d_(r, e, t, i) {
    return f_(r, e, 1 - Math.exp(-t * i))
}

function p_(r, e) {
    return (r % e + e) % e
}
var g_ = class {
    isRunning = !1;
    value = 0;
    from = 0;
    to = 0;
    currentTime = 0;
    lerp;
    duration;
    easing;
    onUpdate;
    advance(r) {
        if (!this.isRunning) return;
        let e = !1;
        if (this.duration && this.easing) {
            this.currentTime += r;
            const t = cg(0, this.currentTime / this.duration, 1);
            e = t >= 1;
            const i = e ? 1 : this.easing(t);
            this.value = this.from + (this.to - this.from) * i
        } else this.lerp ? (this.value = d_(this.value, this.to, this.lerp * 60, r), Math.round(this.value) === this.to && (this.value = this.to, e = !0)) : (this.value = this.to, e = !0);
        e && this.stop(), this.onUpdate?.(this.value, e)
    }
    stop() {
        this.isRunning = !1
    }
    fromTo(r, e, {
        lerp: t,
        duration: i,
        easing: n,
        onStart: s,
        onUpdate: o
    }) {
        this.from = this.value = r, this.to = e, this.lerp = t, this.duration = i, this.easing = n, this.currentTime = 0, this.isRunning = !0, s?.(), this.onUpdate = o
    }
};

function m_(r, e) {
    let t;
    return function(...i) {
        let n = this;
        clearTimeout(t), t = setTimeout(() => {
            t = void 0, r.apply(n, i)
        }, e)
    }
}
var __ = class {
        constructor(r, e, {
            autoResize: t = !0,
            debounce: i = 250
        } = {}) {
            this.wrapper = r, this.content = e, t && (this.debouncedResize = m_(this.resize, i), this.wrapper instanceof Window ? window.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize()
        }
        width = 0;
        height = 0;
        scrollHeight = 0;
        scrollWidth = 0;
        debouncedResize;
        wrapperResizeObserver;
        contentResizeObserver;
        destroy() {
            this.wrapperResizeObserver?.disconnect(), this.contentResizeObserver?.disconnect(), this.wrapper === window && this.debouncedResize && window.removeEventListener("resize", this.debouncedResize, !1)
        }
        resize = () => {
            this.onWrapperResize(), this.onContentResize()
        };
        onWrapperResize = () => {
            this.wrapper instanceof Window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight)
        };
        onContentResize = () => {
            this.wrapper instanceof Window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth)
        };
        get limit() {
            return {
                x: this.scrollWidth - this.width,
                y: this.scrollHeight - this.height
            }
        }
    },
    hg = class {
        events = {};
        emit(r, ...e) {
            let t = this.events[r] || [];
            for (let i = 0, n = t.length; i < n; i++) t[i]?.(...e)
        }
        on(r, e) {
            return this.events[r]?.push(e) || (this.events[r] = [e]), () => {
                this.events[r] = this.events[r]?.filter(t => e !== t)
            }
        }
        off(r, e) {
            this.events[r] = this.events[r]?.filter(t => e !== t)
        }
        destroy() {
            this.events = {}
        }
    },
    rd = 100 / 6,
    is = {
        passive: !1
    },
    y_ = class {
        constructor(r, e = {
            wheelMultiplier: 1,
            touchMultiplier: 1
        }) {
            this.element = r, this.options = e, window.addEventListener("resize", this.onWindowResize, !1), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, is), this.element.addEventListener("touchstart", this.onTouchStart, is), this.element.addEventListener("touchmove", this.onTouchMove, is), this.element.addEventListener("touchend", this.onTouchEnd, is)
        }
        touchStart = {
            x: 0,
            y: 0
        };
        lastDelta = {
            x: 0,
            y: 0
        };
        window = {
            width: 0,
            height: 0
        };
        emitter = new hg;
        on(r, e) {
            return this.emitter.on(r, e)
        }
        destroy() {
            this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize, !1), this.element.removeEventListener("wheel", this.onWheel, is), this.element.removeEventListener("touchstart", this.onTouchStart, is), this.element.removeEventListener("touchmove", this.onTouchMove, is), this.element.removeEventListener("touchend", this.onTouchEnd, is)
        }
        onTouchStart = r => {
            const {
                clientX: e,
                clientY: t
            } = r.targetTouches ? r.targetTouches[0] : r;
            this.touchStart.x = e, this.touchStart.y = t, this.lastDelta = {
                x: 0,
                y: 0
            }, this.emitter.emit("scroll", {
                deltaX: 0,
                deltaY: 0,
                event: r
            })
        };
        onTouchMove = r => {
            const {
                clientX: e,
                clientY: t
            } = r.targetTouches ? r.targetTouches[0] : r, i = -(e - this.touchStart.x) * this.options.touchMultiplier, n = -(t - this.touchStart.y) * this.options.touchMultiplier;
            this.touchStart.x = e, this.touchStart.y = t, this.lastDelta = {
                x: i,
                y: n
            }, this.emitter.emit("scroll", {
                deltaX: i,
                deltaY: n,
                event: r
            })
        };
        onTouchEnd = r => {
            this.emitter.emit("scroll", {
                deltaX: this.lastDelta.x,
                deltaY: this.lastDelta.y,
                event: r
            })
        };
        onWheel = r => {
            let {
                deltaX: e,
                deltaY: t,
                deltaMode: i
            } = r;
            const n = i === 1 ? rd : i === 2 ? this.window.width : 1,
                s = i === 1 ? rd : i === 2 ? this.window.height : 1;
            e *= n, t *= s, e *= this.options.wheelMultiplier, t *= this.options.wheelMultiplier, this.emitter.emit("scroll", {
                deltaX: e,
                deltaY: t,
                event: r
            })
        };
        onWindowResize = () => {
            this.window = {
                width: window.innerWidth,
                height: window.innerHeight
            }
        }
    },
    D_ = class {
        _isScrolling = !1;
        _isStopped = !1;
        _isLocked = !1;
        _preventNextNativeScrollEvent = !1;
        _resetVelocityTimeout = null;
        __rafID = null;
        isTouching;
        time = 0;
        userData = {};
        lastVelocity = 0;
        velocity = 0;
        direction = 0;
        options;
        targetScroll;
        animatedScroll;
        animate = new g_;
        emitter = new hg;
        dimensions;
        virtualScroll;
        constructor({
            wrapper: r = window,
            content: e = document.documentElement,
            eventsTarget: t = r,
            smoothWheel: i = !0,
            syncTouch: n = !1,
            syncTouchLerp: s = .075,
            touchInertiaMultiplier: o = 35,
            duration: a,
            easing: l = P => Math.min(1, 1.001 - Math.pow(2, -10 * P)),
            lerp: u = .1,
            infinite: c = !1,
            orientation: h = "vertical",
            gestureOrientation: f = "vertical",
            touchMultiplier: g = 1,
            wheelMultiplier: m = 1,
            autoResize: d = !0,
            prevent: p,
            virtualScroll: y,
            overscroll: b = !0,
            autoRaf: w = !1,
            anchors: S = !1,
            __experimental__naiveDimensions: x = !1
        } = {}) {
            window.lenisVersion = h_, (!r || r === document.documentElement) && (r = window), this.options = {
                wrapper: r,
                content: e,
                eventsTarget: t,
                smoothWheel: i,
                syncTouch: n,
                syncTouchLerp: s,
                touchInertiaMultiplier: o,
                duration: a,
                easing: l,
                lerp: u,
                infinite: c,
                gestureOrientation: f,
                orientation: h,
                touchMultiplier: g,
                wheelMultiplier: m,
                autoResize: d,
                prevent: p,
                virtualScroll: y,
                overscroll: b,
                autoRaf: w,
                anchors: S,
                __experimental__naiveDimensions: x
            }, this.dimensions = new __(r, e, {
                autoResize: d
            }), this.updateClassName(), this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1), this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
                capture: !0
            }), this.options.anchors && this.options.wrapper === window && this.options.wrapper.addEventListener("click", this.onClick, !1), this.options.wrapper.addEventListener("pointerdown", this.onPointerDown, !1), this.virtualScroll = new y_(t, {
                touchMultiplier: g,
                wheelMultiplier: m
            }), this.virtualScroll.on("scroll", this.onVirtualScroll), this.options.autoRaf && (this.__rafID = requestAnimationFrame(this.raf))
        }
        destroy() {
            this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, !1), this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, {
                capture: !0
            }), this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown, !1), this.options.anchors && this.options.wrapper === window && this.options.wrapper.removeEventListener("click", this.onClick, !1), this.virtualScroll.destroy(), this.dimensions.destroy(), this.cleanUpClassName(), this.__rafID && cancelAnimationFrame(this.__rafID)
        }
        on(r, e) {
            return this.emitter.on(r, e)
        }
        off(r, e) {
            return this.emitter.off(r, e)
        }
        onScrollEnd = r => {
            r instanceof CustomEvent || (this.isScrolling === "smooth" || this.isScrolling === !1) && r.stopPropagation()
        };
        dispatchScrollendEvent = () => {
            this.options.wrapper.dispatchEvent(new CustomEvent("scrollend", {
                bubbles: this.options.wrapper === window,
                detail: {
                    lenisScrollEnd: !0
                }
            }))
        };
        setScroll(r) {
            this.isHorizontal ? this.options.wrapper.scrollTo({
                left: r,
                behavior: "instant"
            }) : this.options.wrapper.scrollTo({
                top: r,
                behavior: "instant"
            })
        }
        onClick = r => {
            const t = r.composedPath()
                .find(i => i instanceof HTMLAnchorElement && (i.getAttribute("href")
                    ?.startsWith("#") || i.getAttribute("href")
                    ?.startsWith("/#") || i.getAttribute("href")
                    ?.startsWith("./#")));
            if (t) {
                const i = t.getAttribute("href");
                if (i) {
                    const n = typeof this.options.anchors == "object" && this.options.anchors ? this.options.anchors : void 0;
                    this.scrollTo(`#${i.split("#")[1]}`, n)
                }
            }
        };
        onPointerDown = r => {
            r.button === 1 && this.reset()
        };
        onVirtualScroll = r => {
            if (typeof this.options.virtualScroll == "function" && this.options.virtualScroll(r) === !1) return;
            const {
                deltaX: e,
                deltaY: t,
                event: i
            } = r;
            if (this.emitter.emit("virtual-scroll", {
                    deltaX: e,
                    deltaY: t,
                    event: i
                }), i.ctrlKey || i.lenisStopPropagation) return;
            const n = i.type.includes("touch"),
                s = i.type.includes("wheel");
            this.isTouching = i.type === "touchstart" || i.type === "touchmove";
            const o = e === 0 && t === 0;
            if (this.options.syncTouch && n && i.type === "touchstart" && o && !this.isStopped && !this.isLocked) {
                this.reset();
                return
            }
            const l = this.options.gestureOrientation === "vertical" && t === 0 || this.options.gestureOrientation === "horizontal" && e === 0;
            if (o || l) return;
            let u = i.composedPath();
            u = u.slice(0, u.indexOf(this.rootElement));
            const c = this.options.prevent;
            if (u.find(p => p instanceof HTMLElement && (typeof c == "function" && c?.(p) || p.hasAttribute?.("data-lenis-prevent") || n && p.hasAttribute?.("data-lenis-prevent-touch") || s && p.hasAttribute?.("data-lenis-prevent-wheel")))) return;
            if (this.isStopped || this.isLocked) {
                i.preventDefault();
                return
            }
            if (!(this.options.syncTouch && n || this.options.smoothWheel && s)) {
                this.isScrolling = "native", this.animate.stop(), i.lenisStopPropagation = !0;
                return
            }
            let f = t;
            this.options.gestureOrientation === "both" ? f = Math.abs(t) > Math.abs(e) ? t : e : this.options.gestureOrientation === "horizontal" && (f = e), (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && t > 0 || this.animatedScroll === this.limit && t < 0)) && (i.lenisStopPropagation = !0), i.preventDefault();
            const g = n && this.options.syncTouch,
                d = n && i.type === "touchend" && Math.abs(f) > 5;
            d && (f = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + f, {
                programmatic: !1,
                ...g ? {
                    lerp: d ? this.options.syncTouchLerp : 1
                } : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing
                }
            })
        };
        resize() {
            this.dimensions.resize(), this.animatedScroll = this.targetScroll = this.actualScroll, this.emit()
        }
        emit() {
            this.emitter.emit("scroll", this)
        }
        onNativeScroll = () => {
            if (this._resetVelocityTimeout !== null && (clearTimeout(this._resetVelocityTimeout), this._resetVelocityTimeout = null), this._preventNextNativeScrollEvent) {
                this._preventNextNativeScrollEvent = !1;
                return
            }
            if (this.isScrolling === !1 || this.isScrolling === "native") {
                const r = this.animatedScroll;
                this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity, this.velocity = this.animatedScroll - r, this.direction = Math.sign(this.animatedScroll - r), this.isStopped || (this.isScrolling = "native"), this.emit(), this.velocity !== 0 && (this._resetVelocityTimeout = setTimeout(() => {
                    this.lastVelocity = this.velocity, this.velocity = 0, this.isScrolling = !1, this.emit()
                }, 400))
            }
        };
        reset() {
            this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity = 0, this.animate.stop()
        }
        start() {
            this.isStopped && (this.reset(), this.isStopped = !1)
        }
        stop() {
            this.isStopped || (this.reset(), this.isStopped = !0)
        }
        raf = r => {
            const e = r - (this.time || r);
            this.time = r, this.animate.advance(e * .001), this.options.autoRaf && (this.__rafID = requestAnimationFrame(this.raf))
        };
        scrollTo(r, {
            offset: e = 0,
            immediate: t = !1,
            lock: i = !1,
            duration: n = this.options.duration,
            easing: s = this.options.easing,
            lerp: o = this.options.lerp,
            onStart: a,
            onComplete: l,
            force: u = !1,
            programmatic: c = !0,
            userData: h
        } = {}) {
            if (!((this.isStopped || this.isLocked) && !u)) {
                if (typeof r == "string" && ["top", "left", "start"].includes(r)) r = 0;
                else if (typeof r == "string" && ["bottom", "right", "end"].includes(r)) r = this.limit;
                else {
                    let f;
                    if (typeof r == "string" ? f = document.querySelector(r) : r instanceof HTMLElement && r?.nodeType && (f = r), f) {
                        if (this.options.wrapper !== window) {
                            const m = this.rootElement.getBoundingClientRect();
                            e -= this.isHorizontal ? m.left : m.top
                        }
                        const g = f.getBoundingClientRect();
                        r = (this.isHorizontal ? g.left : g.top) + this.animatedScroll
                    }
                }
                if (typeof r == "number") {
                    if (r += e, r = Math.round(r), this.options.infinite ? c && (this.targetScroll = this.animatedScroll = this.scroll) : r = cg(0, r, this.limit), r === this.targetScroll) {
                        a?.(this), l?.(this);
                        return
                    }
                    if (this.userData = h ?? {}, t) {
                        this.animatedScroll = this.targetScroll = r, this.setScroll(this.scroll), this.reset(), this.preventNextNativeScrollEvent(), this.emit(), l?.(this), this.userData = {}, requestAnimationFrame(() => {
                            this.dispatchScrollendEvent()
                        });
                        return
                    }
                    c || (this.targetScroll = r), this.animate.fromTo(this.animatedScroll, r, {
                        duration: n,
                        easing: s,
                        lerp: o,
                        onStart: () => {
                            i && (this.isLocked = !0), this.isScrolling = "smooth", a?.(this)
                        },
                        onUpdate: (f, g) => {
                            this.isScrolling = "smooth", this.lastVelocity = this.velocity, this.velocity = f - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = f, this.setScroll(this.scroll), c && (this.targetScroll = f), g || this.emit(), g && (this.reset(), this.emit(), l?.(this), this.userData = {}, requestAnimationFrame(() => {
                                this.dispatchScrollendEvent()
                            }), this.preventNextNativeScrollEvent())
                        }
                    })
                }
            }
        }
        preventNextNativeScrollEvent() {
            this._preventNextNativeScrollEvent = !0, requestAnimationFrame(() => {
                this._preventNextNativeScrollEvent = !1
            })
        }
        get rootElement() {
            return this.options.wrapper === window ? document.documentElement : this.options.wrapper
        }
        get limit() {
            return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"]
        }
        get isHorizontal() {
            return this.options.orientation === "horizontal"
        }
        get actualScroll() {
            const r = this.options.wrapper;
            return this.isHorizontal ? r.scrollX ?? r.scrollLeft : r.scrollY ?? r.scrollTop
        }
        get scroll() {
            return this.options.infinite ? p_(this.animatedScroll, this.limit) : this.animatedScroll
        }
        get progress() {
            return this.limit === 0 ? 1 : this.scroll / this.limit
        }
        get isScrolling() {
            return this._isScrolling
        }
        set isScrolling(r) {
            this._isScrolling !== r && (this._isScrolling = r, this.updateClassName())
        }
        get isStopped() {
            return this._isStopped
        }
        set isStopped(r) {
            this._isStopped !== r && (this._isStopped = r, this.updateClassName())
        }
        get isLocked() {
            return this._isLocked
        }
        set isLocked(r) {
            this._isLocked !== r && (this._isLocked = r, this.updateClassName())
        }
        get isSmooth() {
            return this.isScrolling === "smooth"
        }
        get className() {
            let r = "lenis";
            return this.isStopped && (r += " lenis-stopped"), this.isLocked && (r += " lenis-locked"), this.isScrolling && (r += " lenis-scrolling"), this.isScrolling === "smooth" && (r += " lenis-smooth"), r
        }
        updateClassName() {
            this.cleanUpClassName(), this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim()
        }
        cleanUpClassName() {
            this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "")
                .trim()
        }
    };

function v_(r) {
    return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r
}
var Da = {
        exports: {}
    },
    w_ = Da.exports,
    nd;

function b_() {
    return nd || (nd = 1, function(r, e) {
        (function(t, i) {
            i(e)
        })(w_, function(t) {
            function i(L, _) {
                for (var E = 0; E < _.length; E++) {
                    var D = _[E];
                    D.enumerable = D.enumerable || !1, D.configurable = !0, "value" in D && (D.writable = !0), Object.defineProperty(L, D.key, D)
                }
            }

            function n(L, _, E) {
                return _ && i(L.prototype, _), L
            }
            /*!
             * Observer 3.12.7
             * https://gsap.com
             *
             * @license Copyright 2008-2025, GreenSock. All rights reserved.
             * Subject to the terms at https://gsap.com/standard-license or for
             * Club GSAP members, the agreement issued with that membership.
             * @author: Jack Doyle, jack@greensock.com
             */
            var s, o, a, l, u, c, h, f, g, m, d, p, y, b = function() {
                    return s || typeof window < "u" && (s = window.gsap) && s.registerPlugin && s
                },
                w = 1,
                S = [],
                x = [],
                P = [],
                C = Date.now,
                A = function(_, E) {
                    return E
                },
                k = function() {
                    var _ = g.core,
                        E = _.bridge || {},
                        D = _._scrollers,
                        v = _._proxies;
                    D.push.apply(D, x), v.push.apply(v, P), x = D, P = v, A = function($, M) {
                        return E[$](M)
                    }
                },
                I = function(_, E) {
                    return ~P.indexOf(_) && P[P.indexOf(_) + 1][E]
                },
                Y = function(_) {
                    return !!~m.indexOf(_)
                },
                V = function(_, E, D, v, F) {
                    return _.addEventListener(E, D, {
                        passive: v !== !1,
                        capture: !!F
                    })
                },
                q = function(_, E, D, v) {
                    return _.removeEventListener(E, D, !!v)
                },
                K = "scrollLeft",
                W = "scrollTop",
                J = function() {
                    return d && d.isPressed || x.cache++
                },
                T = function(_, E) {
                    var D = function v(F) {
                        if (F || F === 0) {
                            w && (a.history.scrollRestoration = "manual");
                            var $ = d && d.isPressed;
                            F = v.v = Math.round(F) || (d && d.iOS ? 1 : 0), _(F), v.cacheID = x.cache, $ && A("ss", F)
                        } else(E || x.cache !== v.cacheID || A("ref")) && (v.cacheID = x.cache, v.v = _());
                        return v.v + v.offset
                    };
                    return D.offset = 0, _ && D
                },
                R = {
                    s: K,
                    p: "left",
                    p2: "Left",
                    os: "right",
                    os2: "Right",
                    d: "width",
                    d2: "Width",
                    a: "x",
                    sc: T(function(L) {
                        return arguments.length ? a.scrollTo(L, Q.sc()) : a.pageXOffset || l[K] || u[K] || c[K] || 0
                    })
                },
                Q = {
                    s: W,
                    p: "top",
                    p2: "Top",
                    os: "bottom",
                    os2: "Bottom",
                    d: "height",
                    d2: "Height",
                    a: "y",
                    op: R,
                    sc: T(function(L) {
                        return arguments.length ? a.scrollTo(R.sc(), L) : a.pageYOffset || l[W] || u[W] || c[W] || 0
                    })
                },
                se = function(_, E) {
                    return (E && E._ctx && E._ctx.selector || s.utils.toArray)(_)[0] || (typeof _ == "string" && s.config()
                        .nullTargetWarn !== !1 ? console.warn("Element not found:", _) : null)
                },
                ue = function(_, E) {
                    var D = E.s,
                        v = E.sc;
                    Y(_) && (_ = l.scrollingElement || u);
                    var F = x.indexOf(_),
                        $ = v === Q.sc ? 1 : 2;
                    !~F && (F = x.push(_) - 1), x[F + $] || V(_, "scroll", J);
                    var M = x[F + $],
                        te = M || (x[F + $] = T(I(_, D), !0) || (Y(_) ? v : T(function(ye) {
                            return arguments.length ? _[D] = ye : _[D]
                        })));
                    return te.target = _, M || (te.smooth = s.getProperty(_, "scrollBehavior") === "smooth"), te
                },
                ce = function(_, E, D) {
                    var v = _,
                        F = _,
                        $ = C(),
                        M = $,
                        te = E || 50,
                        ye = Math.max(500, te * 3),
                        Ze = function(ge, Tt) {
                            var dt = C();
                            Tt || dt - $ > te ? (F = v, v = ge, M = $, $ = dt) : D ? v += ge : v = F + (ge - F) / (dt - M) * ($ - M)
                        },
                        He = function() {
                            F = v = D ? 0 : v, M = $ = 0
                        },
                        de = function(ge) {
                            var Tt = M,
                                dt = F,
                                Gt = C();
                            return (ge || ge === 0) && ge !== v && Ze(ge), $ === M || Gt - M > ye ? 0 : (v + (D ? dt : -dt)) / ((D ? Gt : $) - Tt) * 1e3
                        };
                    return {
                        update: Ze,
                        reset: He,
                        getVelocity: de
                    }
                },
                le = function(_, E) {
                    return E && !_._gsapAllow && _.preventDefault(), _.changedTouches ? _.changedTouches[0] : _
                },
                Z = function(_) {
                    var E = Math.max.apply(Math, _),
                        D = Math.min.apply(Math, _);
                    return Math.abs(E) >= Math.abs(D) ? E : D
                },
                Te = function() {
                    g = s.core.globals()
                        .ScrollTrigger, g && g.core && k()
                },
                ke = function(_) {
                    return s = _ || b(), !o && s && typeof document < "u" && document.body && (a = window, l = document, u = l.documentElement, c = l.body, m = [a, l, u, c], s.utils.clamp, y = s.core.context || function() {}, f = "onpointerenter" in c ? "pointer" : "mouse", h = Ye.isTouch = a.matchMedia && a.matchMedia("(hover: none), (pointer: coarse)")
                        .matches ? 1 : "ontouchstart" in a || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, p = Ye.eventTypes = ("ontouchstart" in u ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in u ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup")
                        .split(","), setTimeout(function() {
                            return w = 0
                        }, 500), Te(), o = 1), o
                };
            R.op = Q, x.cache = 0;
            var Ye = function() {
                function L(E) {
                    this.init(E)
                }
                var _ = L.prototype;
                return _.init = function(D) {
                    o || ke(s) || console.warn("Please gsap.registerPlugin(Observer)"), g || Te();
                    var v = D.tolerance,
                        F = D.dragMinimum,
                        $ = D.type,
                        M = D.target,
                        te = D.lineHeight,
                        ye = D.debounce,
                        Ze = D.preventDefault,
                        He = D.onStop,
                        de = D.onStopDelay,
                        X = D.ignore,
                        ge = D.wheelSpeed,
                        Tt = D.event,
                        dt = D.onDragStart,
                        Gt = D.onDragEnd,
                        xt = D.onDrag,
                        di = D.onPress,
                        Oe = D.onRelease,
                        Or = D.onRight,
                        vt = D.onLeft,
                        be = D.onUp,
                        Ii = D.onDown,
                        er = D.onChangeX,
                        he = D.onChangeY,
                        oi = D.onChange,
                        we = D.onToggleX,
                        Pn = D.onToggleY,
                        Jt = D.onHover,
                        zi = D.onHoverEnd,
                        Vi = D.onMove,
                        st = D.ignoreCheck,
                        zt = D.isNormalizer,
                        Vt = D.onGestureStart,
                        O = D.onGestureEnd,
                        Kt = D.onWheel,
                        Ss = D.onEnable,
                        Jn = D.onDisable,
                        Rr = D.onClick,
                        An = D.scrollSpeed,
                        Hi = D.capture,
                        Ht = D.allowClicks,
                        qi = D.lockAxis,
                        bi = D.onLockAxis;
                    this.target = M = se(M) || u, this.vars = D, X && (X = s.utils.toArray(X)), v = v || 1e-9, F = F || 0, ge = ge || 1, An = An || 1, $ = $ || "wheel,touch,pointer", ye = ye !== !1, te || (te = parseFloat(a.getComputedStyle(c)
                        .lineHeight) || 22);
                    var Kn, $i, tr, Je, Ft, ir, gr, H = this,
                        mr = 0,
                        Fn = 0,
                        Zn = D.passive || !Ze && D.passive !== !1,
                        Lt = ue(M, R),
                        Ln = ue(M, Q),
                        Qn = Lt(),
                        Ts = Ln(),
                        ai = ~$.indexOf("touch") && !~$.indexOf("pointer") && p[0] === "pointerdown",
                        es = Y(M),
                        Ot = M.ownerDocument || l,
                        jr = [0, 0, 0],
                        Mr = [0, 0, 0],
                        On = 0,
                        ea = function() {
                            return On = C()
                        },
                        qt = function(_e, Qe) {
                            return (H.event = _e) && X && ~X.indexOf(_e.target) || Qe && ai && _e.pointerType !== "touch" || st && st(_e, Qe)
                        },
                        gl = function() {
                            H._vx.reset(), H._vy.reset(), $i.pause(), He && He(H)
                        },
                        Rn = function() {
                            var _e = H.deltaX = Z(jr),
                                Qe = H.deltaY = Z(Mr),
                                ee = Math.abs(_e) >= v,
                                Ee = Math.abs(Qe) >= v;
                            oi && (ee || Ee) && oi(H, _e, Qe, jr, Mr), ee && (Or && H.deltaX > 0 && Or(H), vt && H.deltaX < 0 && vt(H), er && er(H), we && H.deltaX < 0 != mr < 0 && we(H), mr = H.deltaX, jr[0] = jr[1] = jr[2] = 0), Ee && (Ii && H.deltaY > 0 && Ii(H), be && H.deltaY < 0 && be(H), he && he(H), Pn && H.deltaY < 0 != Fn < 0 && Pn(H), Fn = H.deltaY, Mr[0] = Mr[1] = Mr[2] = 0), (Je || tr) && (Vi && Vi(H), tr && (dt && tr === 1 && dt(H), xt && xt(H), tr = 0), Je = !1), ir && !(ir = !1) && bi && bi(H), Ft && (Kt(H), Ft = !1), Kn = 0
                        },
                        co = function(_e, Qe, ee) {
                            jr[ee] += _e, Mr[ee] += Qe, H._vx.update(_e), H._vy.update(Qe), ye ? Kn || (Kn = requestAnimationFrame(Rn)) : Rn()
                        },
                        ho = function(_e, Qe) {
                            qi && !gr && (H.axis = gr = Math.abs(_e) > Math.abs(Qe) ? "x" : "y", ir = !0), gr !== "y" && (jr[2] += _e, H._vx.update(_e, !0)), gr !== "x" && (Mr[2] += Qe, H._vy.update(Qe, !0)), ye ? Kn || (Kn = requestAnimationFrame(Rn)) : Rn()
                        },
                        ts = function(_e) {
                            if (!qt(_e, 1)) {
                                _e = le(_e, Ze);
                                var Qe = _e.clientX,
                                    ee = _e.clientY,
                                    Ee = Qe - H.x,
                                    pe = ee - H.y,
                                    Ce = H.isDragging;
                                H.x = Qe, H.y = ee, (Ce || (Ee || pe) && (Math.abs(H.startX - Qe) >= F || Math.abs(H.startY - ee) >= F)) && (tr = Ce ? 2 : 1, Ce || (H.isDragging = !0), ho(Ee, pe))
                            }
                        },
                        ks = H.onPress = function(Pe) {
                            qt(Pe, 1) || Pe && Pe.button || (H.axis = gr = null, $i.pause(), H.isPressed = !0, Pe = le(Pe), mr = Fn = 0, H.startX = H.x = Pe.clientX, H.startY = H.y = Pe.clientY, H._vx.reset(), H._vy.reset(), V(zt ? M : Ot, p[1], ts, Zn, !0), H.deltaX = H.deltaY = 0, di && di(H))
                        },
                        qe = H.onRelease = function(Pe) {
                            if (!qt(Pe, 1)) {
                                q(zt ? M : Ot, p[1], ts, !0);
                                var _e = !isNaN(H.y - H.startY),
                                    Qe = H.isDragging,
                                    ee = Qe && (Math.abs(H.x - H.startX) > 3 || Math.abs(H.y - H.startY) > 3),
                                    Ee = le(Pe);
                                !ee && _e && (H._vx.reset(), H._vy.reset(), Ze && Ht && s.delayedCall(.08, function() {
                                    if (C() - On > 300 && !Pe.defaultPrevented) {
                                        if (Pe.target.click) Pe.target.click();
                                        else if (Ot.createEvent) {
                                            var pe = Ot.createEvent("MouseEvents");
                                            pe.initMouseEvent("click", !0, !0, a, 1, Ee.screenX, Ee.screenY, Ee.clientX, Ee.clientY, !1, !1, !1, !1, 0, null), Pe.target.dispatchEvent(pe)
                                        }
                                    }
                                })), H.isDragging = H.isGesturing = H.isPressed = !1, He && Qe && !zt && $i.restart(!0), tr && Rn(), Gt && Qe && Gt(H), Oe && Oe(H, ee)
                            }
                        },
                        Ps = function(_e) {
                            return _e.touches && _e.touches.length > 1 && (H.isGesturing = !0) && Vt(_e, H.isDragging)
                        },
                        Gr = function() {
                            return (H.isGesturing = !1) || O(H)
                        },
                        Jr = function(_e) {
                            if (!qt(_e)) {
                                var Qe = Lt(),
                                    ee = Ln();
                                co((Qe - Qn) * An, (ee - Ts) * An, 1), Qn = Qe, Ts = ee, He && $i.restart(!0)
                            }
                        },
                        Kr = function(_e) {
                            if (!qt(_e)) {
                                _e = le(_e, Ze), Kt && (Ft = !0);
                                var Qe = (_e.deltaMode === 1 ? te : _e.deltaMode === 2 ? a.innerHeight : 1) * ge;
                                co(_e.deltaX * Qe, _e.deltaY * Qe, 0), He && !zt && $i.restart(!0)
                            }
                        },
                        As = function(_e) {
                            if (!qt(_e)) {
                                var Qe = _e.clientX,
                                    ee = _e.clientY,
                                    Ee = Qe - H.x,
                                    pe = ee - H.y;
                                H.x = Qe, H.y = ee, Je = !0, He && $i.restart(!0), (Ee || pe) && ho(Ee, pe)
                            }
                        },
                        fo = function(_e) {
                            H.event = _e, Jt(H)
                        },
                        Mn = function(_e) {
                            H.event = _e, zi(H)
                        },
                        ta = function(_e) {
                            return qt(_e) || le(_e, Ze) && Rr(H)
                        };
                    $i = H._dc = s.delayedCall(de || .25, gl)
                        .pause(), H.deltaX = H.deltaY = 0, H._vx = ce(0, 50, !0), H._vy = ce(0, 50, !0), H.scrollX = Lt, H.scrollY = Ln, H.isDragging = H.isGesturing = H.isPressed = !1, y(this), H.enable = function(Pe) {
                            return H.isEnabled || (V(es ? Ot : M, "scroll", J), $.indexOf("scroll") >= 0 && V(es ? Ot : M, "scroll", Jr, Zn, Hi), $.indexOf("wheel") >= 0 && V(M, "wheel", Kr, Zn, Hi), ($.indexOf("touch") >= 0 && h || $.indexOf("pointer") >= 0) && (V(M, p[0], ks, Zn, Hi), V(Ot, p[2], qe), V(Ot, p[3], qe), Ht && V(M, "click", ea, !0, !0), Rr && V(M, "click", ta), Vt && V(Ot, "gesturestart", Ps), O && V(Ot, "gestureend", Gr), Jt && V(M, f + "enter", fo), zi && V(M, f + "leave", Mn), Vi && V(M, f + "move", As)), H.isEnabled = !0, H.isDragging = H.isGesturing = H.isPressed = Je = tr = !1, H._vx.reset(), H._vy.reset(), Qn = Lt(), Ts = Ln(), Pe && Pe.type && ks(Pe), Ss && Ss(H)), H
                        }, H.disable = function() {
                            H.isEnabled && (S.filter(function(Pe) {
                                    return Pe !== H && Y(Pe.target)
                                })
                                .length || q(es ? Ot : M, "scroll", J), H.isPressed && (H._vx.reset(), H._vy.reset(), q(zt ? M : Ot, p[1], ts, !0)), q(es ? Ot : M, "scroll", Jr, Hi), q(M, "wheel", Kr, Hi), q(M, p[0], ks, Hi), q(Ot, p[2], qe), q(Ot, p[3], qe), q(M, "click", ea, !0), q(M, "click", ta), q(Ot, "gesturestart", Ps), q(Ot, "gestureend", Gr), q(M, f + "enter", fo), q(M, f + "leave", Mn), q(M, f + "move", As), H.isEnabled = H.isPressed = H.isDragging = !1, Jn && Jn(H))
                        }, H.kill = H.revert = function() {
                            H.disable();
                            var Pe = S.indexOf(H);
                            Pe >= 0 && S.splice(Pe, 1), d === H && (d = 0)
                        }, S.push(H), zt && Y(M) && (d = H), H.enable(Tt)
                }, n(L, [{
                    key: "velocityX",
                    get: function() {
                        return this._vx.getVelocity()
                    }
                }, {
                    key: "velocityY",
                    get: function() {
                        return this._vy.getVelocity()
                    }
                }]), L
            }();
            Ye.version = "3.12.7", Ye.create = function(L) {
                return new Ye(L)
            }, Ye.register = ke, Ye.getAll = function() {
                return S.slice()
            }, Ye.getById = function(L) {
                return S.filter(function(_) {
                    return _.vars.id === L
                })[0]
            }, b() && s.registerPlugin(Ye);
            /*!
             * ScrollTrigger 3.12.7
             * https://gsap.com
             *
             * @license Copyright 2008-2025, GreenSock. All rights reserved.
             * Subject to the terms at https://gsap.com/standard-license or for
             * Club GSAP members, the agreement issued with that membership.
             * @author: Jack Doyle, jack@greensock.com
             */
            var G, Xe, j, ie, xe, De, Ve, N, fe, yi, tt, Zi, lt, kr, _t, At, $r, yt, Yt, fi, bn, ti, ut, xn, Pr, En, Di, Ur, Re, vi, Mi, wi, Bi, Wr, Yr = 1,
                ct = Date.now,
                ne = ct(),
                ve = 0,
                U = 0,
                re = function(_, E, D) {
                    var v = ii(_) && (_.substr(0, 6) === "clamp(" || _.indexOf("max") > -1);
                    return D["_" + E + "Clamp"] = v, v ? _.substr(6, _.length - 7) : _
                },
                Le = function(_, E) {
                    return E && (!ii(_) || _.substr(0, 6) !== "clamp(") ? "clamp(" + _ + ")" : _
                },
                me = function L() {
                    return U && requestAnimationFrame(L)
                },
                $e = function() {
                    return kr = 1
                },
                ht = function() {
                    return kr = 0
                },
                je = function(_) {
                    return _
                },
                it = function(_) {
                    return Math.round(_ * 1e5) / 1e5 || 0
                },
                nt = function() {
                    return typeof window < "u"
                },
                Qi = function() {
                    return G || nt() && (G = window.gsap) && G.registerPlugin && G
                },
                Ke = function(_) {
                    return !!~Ve.indexOf(_)
                },
                fr = function(_) {
                    return (_ === "Height" ? Mi : j["inner" + _]) || xe["client" + _] || De["client" + _]
                },
                Xr = function(_) {
                    return I(_, "getBoundingClientRect") || (Ke(_) ? function() {
                        return fl.width = j.innerWidth, fl.height = Mi, fl
                    } : function() {
                        return Tn(_)
                    })
                },
                ft = function(_, E, D) {
                    var v = D.d,
                        F = D.d2,
                        $ = D.a;
                    return ($ = I(_, "getBoundingClientRect")) ? function() {
                        return $()[v]
                    } : function() {
                        return (E ? fr(F) : _["client" + F]) || 0
                    }
                },
                Xt = function(_, E) {
                    return !E || ~P.indexOf(_) ? Xr(_) : function() {
                        return fl
                    }
                },
                Dt = function(_, E) {
                    var D = E.s,
                        v = E.d2,
                        F = E.d,
                        $ = E.a;
                    return Math.max(0, (D = "scroll" + v) && ($ = I(_, D)) ? $() - Xr(_)()[F] : Ke(_) ? (xe[D] || De[D]) - fr(v) : _[D] - _["offset" + v])
                },
                Xn = function(_, E) {
                    for (var D = 0; D < Yt.length; D += 3)(!E || ~E.indexOf(Yt[D + 1])) && _(Yt[D], Yt[D + 1], Yt[D + 2])
                },
                ii = function(_) {
                    return typeof _ == "string"
                },
                Ge = function(_) {
                    return typeof _ == "function"
                },
                gt = function(_) {
                    return typeof _ == "number"
                },
                ri = function(_) {
                    return typeof _ == "object"
                },
                Cn = function(_, E, D) {
                    return _ && _.progress(E ? 0 : 1) && D && _.pause()
                },
                oo = function(_, E) {
                    if (_.enabled) {
                        var D = _._ctx ? _._ctx.add(function() {
                            return E(_)
                        }) : E(_);
                        D && D.totalTime && (_.callbackAnimation = D)
                    }
                },
                Ar = Math.abs,
                dr = "left",
                jn = "top",
                Gn = "right",
                Sn = "bottom",
                vs = "width",
                ws = "height",
                Xo = "Right",
                jo = "Left",
                Go = "Top",
                Jo = "Bottom",
                It = "padding",
                Fr = "margin",
                ao = "Width",
                Mu = "Height",
                jt = "px",
                Lr = function(_) {
                    return j.getComputedStyle(_)
                },
                E0 = function(_) {
                    var E = Lr(_)
                        .position;
                    _.style.position = E === "absolute" || E === "fixed" ? E : "relative"
                },
                rf = function(_, E) {
                    for (var D in E) D in _ || (_[D] = E[D]);
                    return _
                },
                Tn = function(_, E) {
                    var D = E && Lr(_)[_t] !== "matrix(1, 0, 0, 1, 0, 0)" && G.to(_, {
                            x: 0,
                            y: 0,
                            xPercent: 0,
                            yPercent: 0,
                            rotation: 0,
                            rotationX: 0,
                            rotationY: 0,
                            scale: 1,
                            skewX: 0,
                            skewY: 0
                        })
                        .progress(1),
                        v = _.getBoundingClientRect();
                    return D && D.progress(0)
                        .kill(), v
                },
                tl = function(_, E) {
                    var D = E.d2;
                    return _["offset" + D] || _["client" + D] || 0
                },
                nf = function(_) {
                    var E = [],
                        D = _.labels,
                        v = _.duration(),
                        F;
                    for (F in D) E.push(D[F] / v);
                    return E
                },
                C0 = function(_) {
                    return function(E) {
                        return G.utils.snap(nf(_), E)
                    }
                },
                Bu = function(_) {
                    var E = G.utils.snap(_),
                        D = Array.isArray(_) && _.slice(0)
                        .sort(function(v, F) {
                            return v - F
                        });
                    return D ? function(v, F, $) {
                        $ === void 0 && ($ = .001);
                        var M;
                        if (!F) return E(v);
                        if (F > 0) {
                            for (v -= $, M = 0; M < D.length; M++)
                                if (D[M] >= v) return D[M];
                            return D[M - 1]
                        } else
                            for (M = D.length, v += $; M--;)
                                if (D[M] <= v) return D[M];
                        return D[0]
                    } : function(v, F, $) {
                        $ === void 0 && ($ = .001);
                        var M = E(v);
                        return !F || Math.abs(M - v) < $ || M - v < 0 == F < 0 ? M : E(F < 0 ? v - _ : v + _)
                    }
                },
                S0 = function(_) {
                    return function(E, D) {
                        return Bu(nf(_))(E, D.direction)
                    }
                },
                il = function(_, E, D, v) {
                    return D.split(",")
                        .forEach(function(F) {
                            return _(E, F, v)
                        })
                },
                ni = function(_, E, D, v, F) {
                    return _.addEventListener(E, D, {
                        passive: !v,
                        capture: !!F
                    })
                },
                si = function(_, E, D, v) {
                    return _.removeEventListener(E, D, !!v)
                },
                rl = function(_, E, D) {
                    D = D && D.wheelHandler, D && (_(E, "wheel", D), _(E, "touchmove", D))
                },
                sf = {
                    startColor: "green",
                    endColor: "red",
                    indent: 0,
                    fontSize: "16px",
                    fontWeight: "normal"
                },
                nl = {
                    toggleActions: "play",
                    anticipatePin: 0
                },
                sl = {
                    top: 0,
                    left: 0,
                    center: .5,
                    bottom: 1,
                    right: 1
                },
                ol = function(_, E) {
                    if (ii(_)) {
                        var D = _.indexOf("="),
                            v = ~D ? +(_.charAt(D - 1) + 1) * parseFloat(_.substr(D + 1)) : 0;
                        ~D && (_.indexOf("%") > D && (v *= E / 100), _ = _.substr(0, D - 1)), _ = v + (_ in sl ? sl[_] * E : ~_.indexOf("%") ? parseFloat(_) * E / 100 : parseFloat(_) || 0)
                    }
                    return _
                },
                al = function(_, E, D, v, F, $, M, te) {
                    var ye = F.startColor,
                        Ze = F.endColor,
                        He = F.fontSize,
                        de = F.indent,
                        X = F.fontWeight,
                        ge = ie.createElement("div"),
                        Tt = Ke(D) || I(D, "pinType") === "fixed",
                        dt = _.indexOf("scroller") !== -1,
                        Gt = Tt ? De : D,
                        xt = _.indexOf("start") !== -1,
                        di = xt ? ye : Ze,
                        Oe = "border-color:" + di + ";font-size:" + He + ";color:" + di + ";font-weight:" + X + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
                    return Oe += "position:" + ((dt || te) && Tt ? "fixed;" : "absolute;"), (dt || te || !Tt) && (Oe += (v === Q ? Gn : Sn) + ":" + ($ + parseFloat(de)) + "px;"), M && (Oe += "box-sizing:border-box;text-align:left;width:" + M.offsetWidth + "px;"), ge._isStart = xt, ge.setAttribute("class", "gsap-marker-" + _ + (E ? " marker-" + E : "")), ge.style.cssText = Oe, ge.innerText = E || E === 0 ? _ + "-" + E : _, Gt.children[0] ? Gt.insertBefore(ge, Gt.children[0]) : Gt.appendChild(ge), ge._offset = ge["offset" + v.op.d2], ll(ge, 0, v, xt), ge
                },
                ll = function(_, E, D, v) {
                    var F = {
                            display: "block"
                        },
                        $ = D[v ? "os2" : "p2"],
                        M = D[v ? "p2" : "os2"];
                    _._isFlipped = v, F[D.a + "Percent"] = v ? -100 : 0, F[D.a] = v ? "1px" : 0, F["border" + $ + ao] = 1, F["border" + M + ao] = 0, F[D.p] = E + "px", G.set(_, F)
                },
                Me = [],
                Nu = {},
                Ko, of = function() {
                    return ct() - ve > 34 && (Ko || (Ko = requestAnimationFrame(kn)))
                },
                lo = function() {
                    (!ut || !ut.isPressed || ut.startX > De.clientWidth) && (x.cache++, ut ? Ko || (Ko = requestAnimationFrame(kn)) : kn(), ve || xs("scrollStart"), ve = ct())
                },
                Iu = function() {
                    En = j.innerWidth, Pr = j.innerHeight
                },
                Zo = function(_) {
                    x.cache++, (_ === !0 || !lt && !ti && !ie.fullscreenElement && !ie.webkitFullscreenElement && (!xn || En !== j.innerWidth || Math.abs(j.innerHeight - Pr) > j.innerHeight * .25)) && N.restart(!0)
                },
                bs = {},
                T0 = [],
                af = function L() {
                    return si(Ne, "scrollEnd", L) || Cs(!0)
                },
                xs = function(_) {
                    return bs[_] && bs[_].map(function(E) {
                        return E()
                    }) || T0
                },
                pr = [],
                lf = function(_) {
                    for (var E = 0; E < pr.length; E += 5)(!_ || pr[E + 4] && pr[E + 4].query === _) && (pr[E].style.cssText = pr[E + 1], pr[E].getBBox && pr[E].setAttribute("transform", pr[E + 2] || ""), pr[E + 3].uncache = 1)
                },
                zu = function(_, E) {
                    var D;
                    for (At = 0; At < Me.length; At++) D = Me[At], D && (!E || D._ctx === E) && (_ ? D.kill(1) : D.revert(!0, !0));
                    wi = !0, E && lf(E), E || xs("revert")
                },
                uf = function(_, E) {
                    x.cache++, (E || !Ni) && x.forEach(function(D) {
                        return Ge(D) && D.cacheID++ && (D.rec = 0)
                    }), ii(_) && (j.history.scrollRestoration = Re = _)
                },
                Ni, Es = 0,
                cf, k0 = function() {
                    if (cf !== Es) {
                        var _ = cf = Es;
                        requestAnimationFrame(function() {
                            return _ === Es && Cs(!0)
                        })
                    }
                },
                hf = function() {
                    De.appendChild(vi), Mi = !ut && vi.offsetHeight || j.innerHeight, De.removeChild(vi)
                },
                ff = function(_) {
                    return fe(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end")
                        .forEach(function(E) {
                            return E.style.display = _ ? "none" : "block"
                        })
                },
                Cs = function(_, E) {
                    if (xe = ie.documentElement, De = ie.body, Ve = [j, ie, xe, De], ve && !_ && !wi) {
                        ni(Ne, "scrollEnd", af);
                        return
                    }
                    hf(), Ni = Ne.isRefreshing = !0, x.forEach(function(v) {
                        return Ge(v) && ++v.cacheID && (v.rec = v())
                    });
                    var D = xs("refreshInit");
                    fi && Ne.sort(), E || zu(), x.forEach(function(v) {
                            Ge(v) && (v.smooth && (v.target.style.scrollBehavior = "auto"), v(0))
                        }), Me.slice(0)
                        .forEach(function(v) {
                            return v.refresh()
                        }), wi = !1, Me.forEach(function(v) {
                            if (v._subPinOffset && v.pin) {
                                var F = v.vars.horizontal ? "offsetWidth" : "offsetHeight",
                                    $ = v.pin[F];
                                v.revert(!0, 1), v.adjustPinSpacing(v.pin[F] - $), v.refresh()
                            }
                        }), Bi = 1, ff(!0), Me.forEach(function(v) {
                            var F = Dt(v.scroller, v._dir),
                                $ = v.vars.end === "max" || v._endClamp && v.end > F,
                                M = v._startClamp && v.start >= F;
                            ($ || M) && v.setPositions(M ? F - 1 : v.start, $ ? Math.max(M ? F : v.start + 1, F) : v.end, !0)
                        }), ff(!1), Bi = 0, D.forEach(function(v) {
                            return v && v.render && v.render(-1)
                        }), x.forEach(function(v) {
                            Ge(v) && (v.smooth && requestAnimationFrame(function() {
                                return v.target.style.scrollBehavior = "smooth"
                            }), v.rec && v(v.rec))
                        }), uf(Re, 1), N.pause(), Es++, Ni = 2, kn(2), Me.forEach(function(v) {
                            return Ge(v.vars.onRefresh) && v.vars.onRefresh(v)
                        }), Ni = Ne.isRefreshing = !1, xs("refresh")
                },
                Vu = 0,
                ul = 1,
                Qo, kn = function(_) {
                    if (_ === 2 || !Ni && !wi) {
                        Ne.isUpdating = !0, Qo && Qo.update(0);
                        var E = Me.length,
                            D = ct(),
                            v = D - ne >= 50,
                            F = E && Me[0].scroll();
                        if (ul = Vu > F ? -1 : 1, Ni || (Vu = F), v && (ve && !kr && D - ve > 200 && (ve = 0, xs("scrollEnd")), tt = ne, ne = D), ul < 0) {
                            for (At = E; At-- > 0;) Me[At] && Me[At].update(0, v);
                            ul = 1
                        } else
                            for (At = 0; At < E; At++) Me[At] && Me[At].update(0, v);
                        Ne.isUpdating = !1
                    }
                    Ko = 0
                },
                Hu = [dr, jn, Sn, Gn, Fr + Jo, Fr + Xo, Fr + Go, Fr + jo, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
                cl = Hu.concat([vs, ws, "boxSizing", "max" + ao, "max" + Mu, "position", Fr, It, It + Go, It + Xo, It + Jo, It + jo]),
                P0 = function(_, E, D) {
                    uo(D);
                    var v = _._gsap;
                    if (v.spacerIsNative) uo(v.spacerState);
                    else if (_._gsap.swappedIn) {
                        var F = E.parentNode;
                        F && (F.insertBefore(_, E), F.removeChild(E))
                    }
                    _._gsap.swappedIn = !1
                },
                qu = function(_, E, D, v) {
                    if (!_._gsap.swappedIn) {
                        for (var F = Hu.length, $ = E.style, M = _.style, te; F--;) te = Hu[F], $[te] = D[te];
                        $.position = D.position === "absolute" ? "absolute" : "relative", D.display === "inline" && ($.display = "inline-block"), M[Sn] = M[Gn] = "auto", $.flexBasis = D.flexBasis || "auto", $.overflow = "visible", $.boxSizing = "border-box", $[vs] = tl(_, R) + jt, $[ws] = tl(_, Q) + jt, $[It] = M[Fr] = M[jn] = M[dr] = "0", uo(v), M[vs] = M["max" + ao] = D[vs], M[ws] = M["max" + Mu] = D[ws], M[It] = D[It], _.parentNode !== E && (_.parentNode.insertBefore(E, _), E.appendChild(_)), _._gsap.swappedIn = !0
                    }
                },
                A0 = /([A-Z])/g,
                uo = function(_) {
                    if (_) {
                        var E = _.t.style,
                            D = _.length,
                            v = 0,
                            F, $;
                        for ((_.t._gsap || G.core.getCache(_.t))
                            .uncache = 1; v < D; v += 2) $ = _[v + 1], F = _[v], $ ? E[F] = $ : E[F] && E.removeProperty(F.replace(A0, "-$1")
                            .toLowerCase())
                    }
                },
                hl = function(_) {
                    for (var E = cl.length, D = _.style, v = [], F = 0; F < E; F++) v.push(cl[F], D[cl[F]]);
                    return v.t = _, v
                },
                F0 = function(_, E, D) {
                    for (var v = [], F = _.length, $ = D ? 8 : 0, M; $ < F; $ += 2) M = _[$], v.push(M, M in E ? E[M] : _[$ + 1]);
                    return v.t = _.t, v
                },
                fl = {
                    left: 0,
                    top: 0
                },
                df = function(_, E, D, v, F, $, M, te, ye, Ze, He, de, X, ge) {
                    Ge(_) && (_ = _(te)), ii(_) && _.substr(0, 3) === "max" && (_ = de + (_.charAt(4) === "=" ? ol("0" + _.substr(3), D) : 0));
                    var Tt = X ? X.time() : 0,
                        dt, Gt, xt;
                    if (X && X.seek(0), isNaN(_) || (_ = +_), gt(_)) X && (_ = G.utils.mapRange(X.scrollTrigger.start, X.scrollTrigger.end, 0, de, _)), M && ll(M, D, v, !0);
                    else {
                        Ge(E) && (E = E(te));
                        var di = (_ || "0")
                            .split(" "),
                            Oe, Or, vt, be;
                        xt = se(E, te) || De, Oe = Tn(xt) || {}, (!Oe || !Oe.left && !Oe.top) && Lr(xt)
                            .display === "none" && (be = xt.style.display, xt.style.display = "block", Oe = Tn(xt), be ? xt.style.display = be : xt.style.removeProperty("display")), Or = ol(di[0], Oe[v.d]), vt = ol(di[1] || "0", D), _ = Oe[v.p] - ye[v.p] - Ze + Or + F - vt, M && ll(M, vt, v, D - vt < 20 || M._isStart && vt > 20), D -= D - vt
                    }
                    if (ge && (te[ge] = _ || -.001, _ < 0 && (_ = 0)), $) {
                        var Ii = _ + D,
                            er = $._isStart;
                        dt = "scroll" + v.d2, ll($, Ii, v, er && Ii > 20 || !er && (He ? Math.max(De[dt], xe[dt]) : $.parentNode[dt]) <= Ii + 1), He && (ye = Tn(M), He && ($.style[v.op.p] = ye[v.op.p] - v.op.m - $._offset + jt))
                    }
                    return X && xt && (dt = Tn(xt), X.seek(de), Gt = Tn(xt), X._caScrollDist = dt[v.p] - Gt[v.p], _ = _ / X._caScrollDist * de), X && X.seek(Tt), X ? _ : Math.round(_)
                },
                L0 = /(webkit|moz|length|cssText|inset)/i,
                pf = function(_, E, D, v) {
                    if (_.parentNode !== E) {
                        var F = _.style,
                            $, M;
                        if (E === De) {
                            _._stOrig = F.cssText, M = Lr(_);
                            for ($ in M) !+$ && !L0.test($) && M[$] && typeof F[$] == "string" && $ !== "0" && (F[$] = M[$]);
                            F.top = D, F.left = v
                        } else F.cssText = _._stOrig;
                        G.core.getCache(_)
                            .uncache = 1, E.appendChild(_)
                    }
                },
                gf = function(_, E, D) {
                    var v = E,
                        F = v;
                    return function($) {
                        var M = Math.round(_());
                        return M !== v && M !== F && Math.abs(M - v) > 3 && Math.abs(M - F) > 3 && ($ = M, D && D()), F = v, v = Math.round($), v
                    }
                },
                dl = function(_, E, D) {
                    var v = {};
                    v[E.p] = "+=" + D, G.set(_, v)
                },
                mf = function(_, E) {
                    var D = ue(_, E),
                        v = "_scroll" + E.p2,
                        F = function $(M, te, ye, Ze, He) {
                            var de = $.tween,
                                X = te.onComplete,
                                ge = {};
                            ye = ye || D();
                            var Tt = gf(D, ye, function() {
                                de.kill(), $.tween = 0
                            });
                            return He = Ze && He || 0, Ze = Ze || M - ye, de && de.kill(), te[v] = M, te.inherit = !1, te.modifiers = ge, ge[v] = function() {
                                return Tt(ye + Ze * de.ratio + He * de.ratio * de.ratio)
                            }, te.onUpdate = function() {
                                x.cache++, $.tween && kn()
                            }, te.onComplete = function() {
                                $.tween = 0, X && X.call(de)
                            }, de = $.tween = G.to(_, te), de
                        };
                    return _[v] = D, D.wheelHandler = function() {
                        return F.tween && F.tween.kill() && (F.tween = 0)
                    }, ni(_, "wheel", D.wheelHandler), Ne.isTouch && ni(_, "touchmove", D.wheelHandler), F
                },
                Ne = function() {
                    function L(E, D) {
                        Xe || L.register(G) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), Ur(this), this.init(E, D)
                    }
                    var _ = L.prototype;
                    return _.init = function(D, v) {
                        if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !U) {
                            this.update = this.refresh = this.kill = je;
                            return
                        }
                        D = rf(ii(D) || gt(D) || D.nodeType ? {
                            trigger: D
                        } : D, nl);
                        var F = D,
                            $ = F.onUpdate,
                            M = F.toggleClass,
                            te = F.id,
                            ye = F.onToggle,
                            Ze = F.onRefresh,
                            He = F.scrub,
                            de = F.trigger,
                            X = F.pin,
                            ge = F.pinSpacing,
                            Tt = F.invalidateOnRefresh,
                            dt = F.anticipatePin,
                            Gt = F.onScrubComplete,
                            xt = F.onSnapComplete,
                            di = F.once,
                            Oe = F.snap,
                            Or = F.pinReparent,
                            vt = F.pinSpacer,
                            be = F.containerAnimation,
                            Ii = F.fastScrollEnd,
                            er = F.preventOverlaps,
                            he = D.horizontal || D.containerAnimation && D.horizontal !== !1 ? R : Q,
                            oi = !He && He !== 0,
                            we = se(D.scroller || j),
                            Pn = G.core.getCache(we),
                            Jt = Ke(we),
                            zi = ("pinType" in D ? D.pinType : I(we, "pinType") || Jt && "fixed") === "fixed",
                            Vi = [D.onEnter, D.onLeave, D.onEnterBack, D.onLeaveBack],
                            st = oi && D.toggleActions.split(" "),
                            zt = "markers" in D ? D.markers : nl.markers,
                            Vt = Jt ? 0 : parseFloat(Lr(we)["border" + he.p2 + ao]) || 0,
                            O = this,
                            Kt = D.onRefreshInit && function() {
                                return D.onRefreshInit(O)
                            },
                            Ss = ft(we, Jt, he),
                            Jn = Xt(we, Jt),
                            Rr = 0,
                            An = 0,
                            Hi = 0,
                            Ht = ue(we, he),
                            qi, bi, Kn, $i, tr, Je, Ft, ir, gr, H, mr, Fn, Zn, Lt, Ln, Qn, Ts, ai, es, Ot, jr, Mr, On, ea, qt, gl, Rn, co, ho, ts, ks, qe, Ps, Gr, Jr, Kr, As, fo, Mn;
                        if (O._startClamp = O._endClamp = !1, O._dir = he, dt *= 45, O.scroller = we, O.scroll = be ? be.time.bind(be) : Ht, $i = Ht(), O.vars = D, v = v || D.animation, "refreshPriority" in D && (fi = 1, D.refreshPriority === -9999 && (Qo = O)), Pn.tweenScroll = Pn.tweenScroll || {
                                top: mf(we, Q),
                                left: mf(we, R)
                            }, O.tweenTo = qi = Pn.tweenScroll[he.p], O.scrubDuration = function(ee) {
                                Ps = gt(ee) && ee, Ps ? qe ? qe.duration(ee) : qe = G.to(v, {
                                    ease: "expo",
                                    totalProgress: "+=0",
                                    inherit: !1,
                                    duration: Ps,
                                    paused: !0,
                                    onComplete: function() {
                                        return Gt && Gt(O)
                                    }
                                }) : (qe && qe.progress(1)
                                    .kill(), qe = 0)
                            }, v && (v.vars.lazy = !1, v._initted && !O.isReverted || v.vars.immediateRender !== !1 && D.immediateRender !== !1 && v.duration() && v.render(0, !0, !0), O.animation = v.pause(), v.scrollTrigger = O, O.scrubDuration(He), ts = 0, te || (te = v.vars.id)), Oe && ((!ri(Oe) || Oe.push) && (Oe = {
                                    snapTo: Oe
                                }), "scrollBehavior" in De.style && G.set(Jt ? [De, xe] : we, {
                                    scrollBehavior: "auto"
                                }), x.forEach(function(ee) {
                                    return Ge(ee) && ee.target === (Jt ? ie.scrollingElement || xe : we) && (ee.smooth = !1)
                                }), Kn = Ge(Oe.snapTo) ? Oe.snapTo : Oe.snapTo === "labels" ? C0(v) : Oe.snapTo === "labelsDirectional" ? S0(v) : Oe.directional !== !1 ? function(ee, Ee) {
                                    return Bu(Oe.snapTo)(ee, ct() - An < 500 ? 0 : Ee.direction)
                                } : G.utils.snap(Oe.snapTo), Gr = Oe.duration || {
                                    min: .1,
                                    max: 2
                                }, Gr = ri(Gr) ? yi(Gr.min, Gr.max) : yi(Gr, Gr), Jr = G.delayedCall(Oe.delay || Ps / 2 || .1, function() {
                                    var ee = Ht(),
                                        Ee = ct() - An < 500,
                                        pe = qi.tween;
                                    if ((Ee || Math.abs(O.getVelocity()) < 10) && !pe && !kr && Rr !== ee) {
                                        var Ce = (ee - Je) / Lt,
                                            li = v && !oi ? v.totalProgress() : Ce,
                                            Ue = Ee ? 0 : (li - ks) / (ct() - tt) * 1e3 || 0,
                                            Rt = G.utils.clamp(-Ce, 1 - Ce, Ar(Ue / 2) * Ue / .185),
                                            xi = Ce + (Oe.inertia === !1 ? 0 : Rt),
                                            kt, wt, ot = Oe,
                                            Zr = ot.onStart,
                                            Et = ot.onInterrupt,
                                            _r = ot.onComplete;
                                        if (kt = Kn(xi, O), gt(kt) || (kt = xi), wt = Math.max(0, Math.round(Je + kt * Lt)), ee <= Ft && ee >= Je && wt !== ee) {
                                            if (pe && !pe._initted && pe.data <= Ar(wt - ee)) return;
                                            Oe.inertia === !1 && (Rt = kt - Ce), qi(wt, {
                                                duration: Gr(Ar(Math.max(Ar(xi - li), Ar(kt - li)) * .185 / Ue / .05 || 0)),
                                                ease: Oe.ease || "power3",
                                                data: Ar(wt - ee),
                                                onInterrupt: function() {
                                                    return Jr.restart(!0) && Et && Et(O)
                                                },
                                                onComplete: function() {
                                                    O.update(), Rr = Ht(), v && !oi && (qe ? qe.resetTo("totalProgress", kt, v._tTime / v._tDur) : v.progress(kt)), ts = ks = v && !oi ? v.totalProgress() : O.progress, xt && xt(O), _r && _r(O)
                                                }
                                            }, ee, Rt * Lt, wt - ee - Rt * Lt), Zr && Zr(O, qi.tween)
                                        }
                                    } else O.isActive && Rr !== ee && Jr.restart(!0)
                                })
                                .pause()), te && (Nu[te] = O), de = O.trigger = se(de || X !== !0 && X), Mn = de && de._gsap && de._gsap.stRevert, Mn && (Mn = Mn(O)), X = X === !0 ? de : se(X), ii(M) && (M = {
                                targets: de,
                                className: M
                            }), X && (ge === !1 || ge === Fr || (ge = !ge && X.parentNode && X.parentNode.style && Lr(X.parentNode)
                                .display === "flex" ? !1 : It), O.pin = X, bi = G.core.getCache(X), bi.spacer ? Ln = bi.pinState : (vt && (vt = se(vt), vt && !vt.nodeType && (vt = vt.current || vt.nativeElement), bi.spacerIsNative = !!vt, vt && (bi.spacerState = hl(vt))), bi.spacer = ai = vt || ie.createElement("div"), ai.classList.add("pin-spacer"), te && ai.classList.add("pin-spacer-" + te), bi.pinState = Ln = hl(X)), D.force3D !== !1 && G.set(X, {
                                force3D: !0
                            }), O.spacer = ai = bi.spacer, ho = Lr(X), ea = ho[ge + he.os2], Ot = G.getProperty(X), jr = G.quickSetter(X, he.a, jt), qu(X, ai, ho), Ts = hl(X)), zt) {
                            Fn = ri(zt) ? rf(zt, sf) : sf, H = al("scroller-start", te, we, he, Fn, 0), mr = al("scroller-end", te, we, he, Fn, 0, H), es = H["offset" + he.op.d2];
                            var ta = se(I(we, "content") || we);
                            ir = this.markerStart = al("start", te, ta, he, Fn, es, 0, be), gr = this.markerEnd = al("end", te, ta, he, Fn, es, 0, be), be && (fo = G.quickSetter([ir, gr], he.a, jt)), !zi && !(P.length && I(we, "fixedMarkers") === !0) && (E0(Jt ? De : we), G.set([H, mr], {
                                force3D: !0
                            }), gl = G.quickSetter(H, he.a, jt), co = G.quickSetter(mr, he.a, jt))
                        }
                        if (be) {
                            var Pe = be.vars.onUpdate,
                                _e = be.vars.onUpdateParams;
                            be.eventCallback("onUpdate", function() {
                                O.update(0, 0, 1), Pe && Pe.apply(be, _e || [])
                            })
                        }
                        if (O.previous = function() {
                                return Me[Me.indexOf(O) - 1]
                            }, O.next = function() {
                                return Me[Me.indexOf(O) + 1]
                            }, O.revert = function(ee, Ee) {
                                if (!Ee) return O.kill(!0);
                                var pe = ee !== !1 || !O.enabled,
                                    Ce = lt;
                                pe !== O.isReverted && (pe && (Kr = Math.max(Ht(), O.scroll.rec || 0), Hi = O.progress, As = v && v.progress()), ir && [ir, gr, H, mr].forEach(function(li) {
                                    return li.style.display = pe ? "none" : "block"
                                }), pe && (lt = O, O.update(pe)), X && (!Or || !O.isActive) && (pe ? P0(X, ai, Ln) : qu(X, ai, Lr(X), qt)), pe || O.update(pe), lt = Ce, O.isReverted = pe)
                            }, O.refresh = function(ee, Ee, pe, Ce) {
                                if (!((lt || !O.enabled) && !Ee)) {
                                    if (X && ee && ve) {
                                        ni(L, "scrollEnd", af);
                                        return
                                    }!Ni && Kt && Kt(O), lt = O, qi.tween && !pe && (qi.tween.kill(), qi.tween = 0), qe && qe.pause(), Tt && v && v.revert({
                                            kill: !1
                                        })
                                        .invalidate(), O.isReverted || O.revert(!0, !0), O._subPinOffset = !1;
                                    var li = Ss(),
                                        Ue = Jn(),
                                        Rt = be ? be.duration() : Dt(we, he),
                                        xi = Lt <= .01,
                                        kt = 0,
                                        wt = Ce || 0,
                                        ot = ri(pe) ? pe.end : D.end,
                                        Zr = D.endTrigger || de,
                                        Et = ri(pe) ? pe.start : D.start || (D.start === 0 || !de ? 0 : X ? "0 0" : "0 100%"),
                                        _r = O.pinnedContainer = D.pinnedContainer && se(D.pinnedContainer, O),
                                        sn = de && Math.max(0, Me.indexOf(O)) || 0,
                                        pi = sn,
                                        gi, Ei, Fs, ml, Ci, Zt, on, Uu, wf, ia, an, ra, _l;
                                    for (zt && ri(pe) && (ra = G.getProperty(H, he.p), _l = G.getProperty(mr, he.p)); pi-- > 0;) Zt = Me[pi], Zt.end || Zt.refresh(0, 1) || (lt = O), on = Zt.pin, on && (on === de || on === X || on === _r) && !Zt.isReverted && (ia || (ia = []), ia.unshift(Zt), Zt.revert(!0, !0)), Zt !== Me[pi] && (sn--, pi--);
                                    for (Ge(Et) && (Et = Et(O)), Et = re(Et, "start", O), Je = df(Et, de, li, he, Ht(), ir, H, O, Ue, Vt, zi, Rt, be, O._startClamp && "_startClamp") || (X ? -.001 : 0), Ge(ot) && (ot = ot(O)), ii(ot) && !ot.indexOf("+=") && (~ot.indexOf(" ") ? ot = (ii(Et) ? Et.split(" ")[0] : "") + ot : (kt = ol(ot.substr(2), li), ot = ii(Et) ? Et : (be ? G.utils.mapRange(0, be.duration(), be.scrollTrigger.start, be.scrollTrigger.end, Je) : Je) + kt, Zr = de)), ot = re(ot, "end", O), Ft = Math.max(Je, df(ot || (Zr ? "100% 0" : Rt), Zr, li, he, Ht() + kt, gr, mr, O, Ue, Vt, zi, Rt, be, O._endClamp && "_endClamp")) || -.001, kt = 0, pi = sn; pi--;) Zt = Me[pi], on = Zt.pin, on && Zt.start - Zt._pinPush <= Je && !be && Zt.end > 0 && (gi = Zt.end - (O._startClamp ? Math.max(0, Zt.start) : Zt.start), (on === de && Zt.start - Zt._pinPush < Je || on === _r) && isNaN(Et) && (kt += gi * (1 - Zt.progress)), on === X && (wt += gi));
                                    if (Je += kt, Ft += kt, O._startClamp && (O._startClamp += kt), O._endClamp && !Ni && (O._endClamp = Ft || -.001, Ft = Math.min(Ft, Dt(we, he))), Lt = Ft - Je || (Je -= .01) && .001, xi && (Hi = G.utils.clamp(0, 1, G.utils.normalize(Je, Ft, Kr))), O._pinPush = wt, ir && kt && (gi = {}, gi[he.a] = "+=" + kt, _r && (gi[he.p] = "-=" + Ht()), G.set([ir, gr], gi)), X && !(Bi && O.end >= Dt(we, he))) gi = Lr(X), ml = he === Q, Fs = Ht(), Mr = parseFloat(Ot(he.a)) + wt, !Rt && Ft > 1 && (an = (Jt ? ie.scrollingElement || xe : we)
                                        .style, an = {
                                            style: an,
                                            value: an["overflow" + he.a.toUpperCase()]
                                        }, Jt && Lr(De)["overflow" + he.a.toUpperCase()] !== "scroll" && (an.style["overflow" + he.a.toUpperCase()] = "scroll")), qu(X, ai, gi), Ts = hl(X), Ei = Tn(X, !0), Uu = zi && ue(we, ml ? R : Q)(), ge ? (qt = [ge + he.os2, Lt + wt + jt], qt.t = ai, pi = ge === It ? tl(X, he) + Lt + wt : 0, pi && (qt.push(he.d, pi + jt), ai.style.flexBasis !== "auto" && (ai.style.flexBasis = pi + jt)), uo(qt), _r && Me.forEach(function(na) {
                                        na.pin === _r && na.vars.pinSpacing !== !1 && (na._subPinOffset = !0)
                                    }), zi && Ht(Kr)) : (pi = tl(X, he), pi && ai.style.flexBasis !== "auto" && (ai.style.flexBasis = pi + jt)), zi && (Ci = {
                                        top: Ei.top + (ml ? Fs - Je : Uu) + jt,
                                        left: Ei.left + (ml ? Uu : Fs - Je) + jt,
                                        boxSizing: "border-box",
                                        position: "fixed"
                                    }, Ci[vs] = Ci["max" + ao] = Math.ceil(Ei.width) + jt, Ci[ws] = Ci["max" + Mu] = Math.ceil(Ei.height) + jt, Ci[Fr] = Ci[Fr + Go] = Ci[Fr + Xo] = Ci[Fr + Jo] = Ci[Fr + jo] = "0", Ci[It] = gi[It], Ci[It + Go] = gi[It + Go], Ci[It + Xo] = gi[It + Xo], Ci[It + Jo] = gi[It + Jo], Ci[It + jo] = gi[It + jo], Qn = F0(Ln, Ci, Or), Ni && Ht(0)), v ? (wf = v._initted, bn(1), v.render(v.duration(), !0, !0), On = Ot(he.a) - Mr + Lt + wt, Rn = Math.abs(Lt - On) > 1, zi && Rn && Qn.splice(Qn.length - 2, 2), v.render(0, !0, !0), wf || v.invalidate(!0), v.parent || v.totalTime(v.totalTime()), bn(0)) : On = Lt, an && (an.value ? an.style["overflow" + he.a.toUpperCase()] = an.value : an.style.removeProperty("overflow-" + he.a));
                                    else if (de && Ht() && !be)
                                        for (Ei = de.parentNode; Ei && Ei !== De;) Ei._pinOffset && (Je -= Ei._pinOffset, Ft -= Ei._pinOffset), Ei = Ei.parentNode;
                                    ia && ia.forEach(function(na) {
                                            return na.revert(!1, !0)
                                        }), O.start = Je, O.end = Ft, $i = tr = Ni ? Kr : Ht(), !be && !Ni && ($i < Kr && Ht(Kr), O.scroll.rec = 0), O.revert(!1, !0), An = ct(), Jr && (Rr = -1, Jr.restart(!0)), lt = 0, v && oi && (v._initted || As) && v.progress() !== As && v.progress(As || 0, !0)
                                        .render(v.time(), !0, !0), (xi || Hi !== O.progress || be || Tt || v && !v._initted) && (v && !oi && v.totalProgress(be && Je < -.001 && !Hi ? G.utils.normalize(Je, Ft, 0) : Hi, !0), O.progress = xi || ($i - Je) / Lt === Hi ? 0 : Hi), X && ge && (ai._pinOffset = Math.round(O.progress * On)), qe && qe.invalidate(), isNaN(ra) || (ra -= G.getProperty(H, he.p), _l -= G.getProperty(mr, he.p), dl(H, he, ra), dl(ir, he, ra - (Ce || 0)), dl(mr, he, _l), dl(gr, he, _l - (Ce || 0))), xi && !Ni && O.update(), Ze && !Ni && !Zn && (Zn = !0, Ze(O), Zn = !1)
                                }
                            }, O.getVelocity = function() {
                                return (Ht() - tr) / (ct() - tt) * 1e3 || 0
                            }, O.endAnimation = function() {
                                Cn(O.callbackAnimation), v && (qe ? qe.progress(1) : v.paused() ? oi || Cn(v, O.direction < 0, 1) : Cn(v, v.reversed()))
                            }, O.labelToScroll = function(ee) {
                                return v && v.labels && (Je || O.refresh() || Je) + v.labels[ee] / v.duration() * Lt || 0
                            }, O.getTrailing = function(ee) {
                                var Ee = Me.indexOf(O),
                                    pe = O.direction > 0 ? Me.slice(0, Ee)
                                    .reverse() : Me.slice(Ee + 1);
                                return (ii(ee) ? pe.filter(function(Ce) {
                                        return Ce.vars.preventOverlaps === ee
                                    }) : pe)
                                    .filter(function(Ce) {
                                        return O.direction > 0 ? Ce.end <= Je : Ce.start >= Ft
                                    })
                            }, O.update = function(ee, Ee, pe) {
                                if (!(be && !pe && !ee)) {
                                    var Ce = Ni === !0 ? Kr : O.scroll(),
                                        li = ee ? 0 : (Ce - Je) / Lt,
                                        Ue = li < 0 ? 0 : li > 1 ? 1 : li || 0,
                                        Rt = O.progress,
                                        xi, kt, wt, ot, Zr, Et, _r, sn;
                                    if (Ee && (tr = $i, $i = be ? Ht() : Ce, Oe && (ks = ts, ts = v && !oi ? v.totalProgress() : Ue)), dt && X && !lt && !Yr && ve && (!Ue && Je < Ce + (Ce - tr) / (ct() - tt) * dt ? Ue = 1e-4 : Ue === 1 && Ft > Ce + (Ce - tr) / (ct() - tt) * dt && (Ue = .9999)), Ue !== Rt && O.enabled) {
                                        if (xi = O.isActive = !!Ue && Ue < 1, kt = !!Rt && Rt < 1, Et = xi !== kt, Zr = Et || !!Ue != !!Rt, O.direction = Ue > Rt ? 1 : -1, O.progress = Ue, Zr && !lt && (wt = Ue && !Rt ? 0 : Ue === 1 ? 1 : Rt === 1 ? 2 : 3, oi && (ot = !Et && st[wt + 1] !== "none" && st[wt + 1] || st[wt], sn = v && (ot === "complete" || ot === "reset" || ot in v))), er && (Et || sn) && (sn || He || !v) && (Ge(er) ? er(O) : O.getTrailing(er)
                                                .forEach(function(Fs) {
                                                    return Fs.endAnimation()
                                                })), oi || (qe && !lt && !Yr ? (qe._dp._time - qe._start !== qe._time && qe.render(qe._dp._time - qe._start), qe.resetTo ? qe.resetTo("totalProgress", Ue, v._tTime / v._tDur) : (qe.vars.totalProgress = Ue, qe.invalidate()
                                                .restart())) : v && v.totalProgress(Ue, !!(lt && (An || ee)))), X) {
                                            if (ee && ge && (ai.style[ge + he.os2] = ea), !zi) jr(it(Mr + On * Ue));
                                            else if (Zr) {
                                                if (_r = !ee && Ue > Rt && Ft + 1 > Ce && Ce + 1 >= Dt(we, he), Or)
                                                    if (!ee && (xi || _r)) {
                                                        var pi = Tn(X, !0),
                                                            gi = Ce - Je;
                                                        pf(X, De, pi.top + (he === Q ? gi : 0) + jt, pi.left + (he === Q ? 0 : gi) + jt)
                                                    } else pf(X, ai);
                                                uo(xi || _r ? Qn : Ts), Rn && Ue < 1 && xi || jr(Mr + (Ue === 1 && !_r ? On : 0))
                                            }
                                        }
                                        Oe && !qi.tween && !lt && !Yr && Jr.restart(!0), M && (Et || di && Ue && (Ue < 1 || !Wr)) && fe(M.targets)
                                            .forEach(function(Fs) {
                                                return Fs.classList[xi || di ? "add" : "remove"](M.className)
                                            }), $ && !oi && !ee && $(O), Zr && !lt ? (oi && (sn && (ot === "complete" ? v.pause()
                                                .totalProgress(1) : ot === "reset" ? v.restart(!0)
                                                .pause() : ot === "restart" ? v.restart(!0) : v[ot]()), $ && $(O)), (Et || !Wr) && (ye && Et && oo(O, ye), Vi[wt] && oo(O, Vi[wt]), di && (Ue === 1 ? O.kill(!1, 1) : Vi[wt] = 0), Et || (wt = Ue === 1 ? 1 : 3, Vi[wt] && oo(O, Vi[wt]))), Ii && !xi && Math.abs(O.getVelocity()) > (gt(Ii) ? Ii : 2500) && (Cn(O.callbackAnimation), qe ? qe.progress(1) : Cn(v, ot === "reverse" ? 1 : !Ue, 1))) : oi && $ && !lt && $(O)
                                    }
                                    if (co) {
                                        var Ei = be ? Ce / be.duration() * (be._caScrollDist || 0) : Ce;
                                        gl(Ei + (H._isFlipped ? 1 : 0)), co(Ei)
                                    }
                                    fo && fo(-Ce / be.duration() * (be._caScrollDist || 0))
                                }
                            }, O.enable = function(ee, Ee) {
                                O.enabled || (O.enabled = !0, ni(we, "resize", Zo), Jt || ni(we, "scroll", lo), Kt && ni(L, "refreshInit", Kt), ee !== !1 && (O.progress = Hi = 0, $i = tr = Rr = Ht()), Ee !== !1 && O.refresh())
                            }, O.getTween = function(ee) {
                                return ee && qi ? qi.tween : qe
                            }, O.setPositions = function(ee, Ee, pe, Ce) {
                                if (be) {
                                    var li = be.scrollTrigger,
                                        Ue = be.duration(),
                                        Rt = li.end - li.start;
                                    ee = li.start + Rt * ee / Ue, Ee = li.start + Rt * Ee / Ue
                                }
                                O.refresh(!1, !1, {
                                    start: Le(ee, pe && !!O._startClamp),
                                    end: Le(Ee, pe && !!O._endClamp)
                                }, Ce), O.update()
                            }, O.adjustPinSpacing = function(ee) {
                                if (qt && ee) {
                                    var Ee = qt.indexOf(he.d) + 1;
                                    qt[Ee] = parseFloat(qt[Ee]) + ee + jt, qt[1] = parseFloat(qt[1]) + ee + jt, uo(qt)
                                }
                            }, O.disable = function(ee, Ee) {
                                if (O.enabled && (ee !== !1 && O.revert(!0, !0), O.enabled = O.isActive = !1, Ee || qe && qe.pause(), Kr = 0, bi && (bi.uncache = 1), Kt && si(L, "refreshInit", Kt), Jr && (Jr.pause(), qi.tween && qi.tween.kill() && (qi.tween = 0)), !Jt)) {
                                    for (var pe = Me.length; pe--;)
                                        if (Me[pe].scroller === we && Me[pe] !== O) return;
                                    si(we, "resize", Zo), Jt || si(we, "scroll", lo)
                                }
                            }, O.kill = function(ee, Ee) {
                                O.disable(ee, Ee), qe && !Ee && qe.kill(), te && delete Nu[te];
                                var pe = Me.indexOf(O);
                                pe >= 0 && Me.splice(pe, 1), pe === At && ul > 0 && At--, pe = 0, Me.forEach(function(Ce) {
                                    return Ce.scroller === O.scroller && (pe = 1)
                                }), pe || Ni || (O.scroll.rec = 0), v && (v.scrollTrigger = null, ee && v.revert({
                                    kill: !1
                                }), Ee || v.kill()), ir && [ir, gr, H, mr].forEach(function(Ce) {
                                    return Ce.parentNode && Ce.parentNode.removeChild(Ce)
                                }), Qo === O && (Qo = 0), X && (bi && (bi.uncache = 1), pe = 0, Me.forEach(function(Ce) {
                                    return Ce.pin === X && pe++
                                }), pe || (bi.spacer = 0)), D.onKill && D.onKill(O)
                            }, Me.push(O), O.enable(!1, !1), Mn && Mn(O), v && v.add && !Lt) {
                            var Qe = O.update;
                            O.update = function() {
                                O.update = Qe, x.cache++, Je || Ft || O.refresh()
                            }, G.delayedCall(.01, O.update), Lt = .01, Je = Ft = 0
                        } else O.refresh();
                        X && k0()
                    }, L.register = function(D) {
                        return Xe || (G = D || Qi(), nt() && window.document && L.enable(), Xe = U), Xe
                    }, L.defaults = function(D) {
                        if (D)
                            for (var v in D) nl[v] = D[v];
                        return nl
                    }, L.disable = function(D, v) {
                        U = 0, Me.forEach(function($) {
                            return $[v ? "kill" : "disable"](D)
                        }), si(j, "wheel", lo), si(ie, "scroll", lo), clearInterval(Zi), si(ie, "touchcancel", je), si(De, "touchstart", je), il(si, ie, "pointerdown,touchstart,mousedown", $e), il(si, ie, "pointerup,touchend,mouseup", ht), N.kill(), Xn(si);
                        for (var F = 0; F < x.length; F += 3) rl(si, x[F], x[F + 1]), rl(si, x[F], x[F + 2])
                    }, L.enable = function() {
                        if (j = window, ie = document, xe = ie.documentElement, De = ie.body, G && (fe = G.utils.toArray, yi = G.utils.clamp, Ur = G.core.context || je, bn = G.core.suppressOverwrites || je, Re = j.history.scrollRestoration || "auto", Vu = j.pageYOffset || 0, G.core.globals("ScrollTrigger", L), De)) {
                            U = 1, vi = document.createElement("div"), vi.style.height = "100vh", vi.style.position = "absolute", hf(), me(), Ye.register(G), L.isTouch = Ye.isTouch, Di = Ye.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), xn = Ye.isTouch === 1, ni(j, "wheel", lo), Ve = [j, ie, xe, De], G.matchMedia ? (L.matchMedia = function(ye) {
                                    var Ze = G.matchMedia(),
                                        He;
                                    for (He in ye) Ze.add(He, ye[He]);
                                    return Ze
                                }, G.addEventListener("matchMediaInit", function() {
                                    return zu()
                                }), G.addEventListener("matchMediaRevert", function() {
                                    return lf()
                                }), G.addEventListener("matchMedia", function() {
                                    Cs(0, 1), xs("matchMedia")
                                }), G.matchMedia()
                                .add("(orientation: portrait)", function() {
                                    return Iu(), Iu
                                })) : console.warn("Requires GSAP 3.11.0 or later"), Iu(), ni(ie, "scroll", lo);
                            var D = De.hasAttribute("style"),
                                v = De.style,
                                F = v.borderTopStyle,
                                $ = G.core.Animation.prototype,
                                M, te;
                            for ($.revert || Object.defineProperty($, "revert", {
                                    value: function() {
                                        return this.time(-.01, !0)
                                    }
                                }), v.borderTopStyle = "solid", M = Tn(De), Q.m = Math.round(M.top + Q.sc()) || 0, R.m = Math.round(M.left + R.sc()) || 0, F ? v.borderTopStyle = F : v.removeProperty("border-top-style"), D || (De.setAttribute("style", ""), De.removeAttribute("style")), Zi = setInterval(of, 250), G.delayedCall(.5, function() {
                                    return Yr = 0
                                }), ni(ie, "touchcancel", je), ni(De, "touchstart", je), il(ni, ie, "pointerdown,touchstart,mousedown", $e), il(ni, ie, "pointerup,touchend,mouseup", ht), _t = G.utils.checkPrefix("transform"), cl.push(_t), Xe = ct(), N = G.delayedCall(.2, Cs)
                                .pause(), Yt = [ie, "visibilitychange", function() {
                                    var ye = j.innerWidth,
                                        Ze = j.innerHeight;
                                    ie.hidden ? ($r = ye, yt = Ze) : ($r !== ye || yt !== Ze) && Zo()
                                }, ie, "DOMContentLoaded", Cs, j, "load", Cs, j, "resize", Zo], Xn(ni), Me.forEach(function(ye) {
                                    return ye.enable(0, 1)
                                }), te = 0; te < x.length; te += 3) rl(si, x[te], x[te + 1]), rl(si, x[te], x[te + 2])
                        }
                    }, L.config = function(D) {
                        "limitCallbacks" in D && (Wr = !!D.limitCallbacks);
                        var v = D.syncInterval;
                        v && clearInterval(Zi) || (Zi = v) && setInterval(of, v), "ignoreMobileResize" in D && (xn = L.isTouch === 1 && D.ignoreMobileResize), "autoRefreshEvents" in D && (Xn(si) || Xn(ni, D.autoRefreshEvents || "none"), ti = (D.autoRefreshEvents + "")
                            .indexOf("resize") === -1)
                    }, L.scrollerProxy = function(D, v) {
                        var F = se(D),
                            $ = x.indexOf(F),
                            M = Ke(F);
                        ~$ && x.splice($, M ? 6 : 2), v && (M ? P.unshift(j, v, De, v, xe, v) : P.unshift(F, v))
                    }, L.clearMatchMedia = function(D) {
                        Me.forEach(function(v) {
                            return v._ctx && v._ctx.query === D && v._ctx.kill(!0, !0)
                        })
                    }, L.isInViewport = function(D, v, F) {
                        var $ = (ii(D) ? se(D) : D)
                            .getBoundingClientRect(),
                            M = $[F ? vs : ws] * v || 0;
                        return F ? $.right - M > 0 && $.left + M < j.innerWidth : $.bottom - M > 0 && $.top + M < j.innerHeight
                    }, L.positionInViewport = function(D, v, F) {
                        ii(D) && (D = se(D));
                        var $ = D.getBoundingClientRect(),
                            M = $[F ? vs : ws],
                            te = v == null ? M / 2 : v in sl ? sl[v] * M : ~v.indexOf("%") ? parseFloat(v) * M / 100 : parseFloat(v) || 0;
                        return F ? ($.left + te) / j.innerWidth : ($.top + te) / j.innerHeight
                    }, L.killAll = function(D) {
                        if (Me.slice(0)
                            .forEach(function(F) {
                                return F.vars.id !== "ScrollSmoother" && F.kill()
                            }), D !== !0) {
                            var v = bs.killAll || [];
                            bs = {}, v.forEach(function(F) {
                                return F()
                            })
                        }
                    }, L
                }();
            Ne.version = "3.12.7", Ne.saveStyles = function(L) {
                return L ? fe(L)
                    .forEach(function(_) {
                        if (_ && _.style) {
                            var E = pr.indexOf(_);
                            E >= 0 && pr.splice(E, 5), pr.push(_, _.style.cssText, _.getBBox && _.getAttribute("transform"), G.core.getCache(_), Ur())
                        }
                    }) : pr
            }, Ne.revert = function(L, _) {
                return zu(!L, _)
            }, Ne.create = function(L, _) {
                return new Ne(L, _)
            }, Ne.refresh = function(L) {
                return L ? Zo(!0) : (Xe || Ne.register()) && Cs(!0)
            }, Ne.update = function(L) {
                return ++x.cache && kn(L === !0 ? 2 : 0)
            }, Ne.clearScrollMemory = uf, Ne.maxScroll = function(L, _) {
                return Dt(L, _ ? R : Q)
            }, Ne.getScrollFunc = function(L, _) {
                return ue(se(L), _ ? R : Q)
            }, Ne.getById = function(L) {
                return Nu[L]
            }, Ne.getAll = function() {
                return Me.filter(function(L) {
                    return L.vars.id !== "ScrollSmoother"
                })
            }, Ne.isScrolling = function() {
                return !!ve
            }, Ne.snapDirectional = Bu, Ne.addEventListener = function(L, _) {
                var E = bs[L] || (bs[L] = []);
                ~E.indexOf(_) || E.push(_)
            }, Ne.removeEventListener = function(L, _) {
                var E = bs[L],
                    D = E && E.indexOf(_);
                D >= 0 && E.splice(D, 1)
            }, Ne.batch = function(L, _) {
                var E = [],
                    D = {},
                    v = _.interval || .016,
                    F = _.batchMax || 1e9,
                    $ = function(ye, Ze) {
                        var He = [],
                            de = [],
                            X = G.delayedCall(v, function() {
                                Ze(He, de), He = [], de = []
                            })
                            .pause();
                        return function(ge) {
                            He.length || X.restart(!0), He.push(ge.trigger), de.push(ge), F <= He.length && X.progress(1)
                        }
                    },
                    M;
                for (M in _) D[M] = M.substr(0, 2) === "on" && Ge(_[M]) && M !== "onRefreshInit" ? $(M, _[M]) : _[M];
                return Ge(F) && (F = F(), ni(Ne, "refresh", function() {
                        return F = _.batchMax()
                    })), fe(L)
                    .forEach(function(te) {
                        var ye = {};
                        for (M in D) ye[M] = D[M];
                        ye.trigger = te, E.push(Ne.create(ye))
                    }), E
            };
            var _f = function(_, E, D, v) {
                    return E > v ? _(v) : E < 0 && _(0), D > v ? (v - E) / (D - E) : D < 0 ? E / (E - D) : 1
                },
                $u = function L(_, E) {
                    E === !0 ? _.style.removeProperty("touch-action") : _.style.touchAction = E === !0 ? "auto" : E ? "pan-" + E + (Ye.isTouch ? " pinch-zoom" : "") : "none", _ === xe && L(De, E)
                },
                pl = {
                    auto: 1,
                    scroll: 1
                },
                O0 = function(_) {
                    var E = _.event,
                        D = _.target,
                        v = _.axis,
                        F = (E.changedTouches ? E.changedTouches[0] : E)
                        .target,
                        $ = F._gsap || G.core.getCache(F),
                        M = ct(),
                        te;
                    if (!$._isScrollT || M - $._isScrollT > 2e3) {
                        for (; F && F !== De && (F.scrollHeight <= F.clientHeight && F.scrollWidth <= F.clientWidth || !(pl[(te = Lr(F))
                                .overflowY] || pl[te.overflowX]));) F = F.parentNode;
                        $._isScroll = F && F !== D && !Ke(F) && (pl[(te = Lr(F))
                            .overflowY] || pl[te.overflowX]), $._isScrollT = M
                    }($._isScroll || v === "x") && (E.stopPropagation(), E._gsapAllow = !0)
                },
                yf = function(_, E, D, v) {
                    return Ye.create({
                        target: _,
                        capture: !0,
                        debounce: !1,
                        lockAxis: !0,
                        type: E,
                        onWheel: v = v && O0,
                        onPress: v,
                        onDrag: v,
                        onScroll: v,
                        onEnable: function() {
                            return D && ni(ie, Ye.eventTypes[0], vf, !1, !0)
                        },
                        onDisable: function() {
                            return si(ie, Ye.eventTypes[0], vf, !0)
                        }
                    })
                },
                R0 = /(input|label|select|textarea)/i,
                Df, vf = function(_) {
                    var E = R0.test(_.target.tagName);
                    (E || Df) && (_._gsapAllow = !0, Df = E)
                },
                M0 = function(_) {
                    ri(_) || (_ = {}), _.preventDefault = _.isNormalizer = _.allowClicks = !0, _.type || (_.type = "wheel,touch"), _.debounce = !!_.debounce, _.id = _.id || "normalizer";
                    var E = _,
                        D = E.normalizeScrollX,
                        v = E.momentum,
                        F = E.allowNestedScroll,
                        $ = E.onRelease,
                        M, te, ye = se(_.target) || xe,
                        Ze = G.core.globals()
                        .ScrollSmoother,
                        He = Ze && Ze.get(),
                        de = Di && (_.content && se(_.content) || He && _.content !== !1 && !He.smooth() && He.content()),
                        X = ue(ye, Q),
                        ge = ue(ye, R),
                        Tt = 1,
                        dt = (Ye.isTouch && j.visualViewport ? j.visualViewport.scale * j.visualViewport.width : j.outerWidth) / j.innerWidth,
                        Gt = 0,
                        xt = Ge(v) ? function() {
                            return v(M)
                        } : function() {
                            return v || 2.8
                        },
                        di, Oe, Or = yf(ye, _.type, !0, F),
                        vt = function() {
                            return Oe = !1
                        },
                        be = je,
                        Ii = je,
                        er = function() {
                            te = Dt(ye, Q), Ii = yi(Di ? 1 : 0, te), D && (be = yi(0, Dt(ye, R))), di = Es
                        },
                        he = function() {
                            de._gsap.y = it(parseFloat(de._gsap.y) + X.offset) + "px", de.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(de._gsap.y) + ", 0, 1)", X.offset = X.cacheID = 0
                        },
                        oi = function() {
                            if (Oe) {
                                requestAnimationFrame(vt);
                                var zt = it(M.deltaY / 2),
                                    Vt = Ii(X.v - zt);
                                if (de && Vt !== X.v + X.offset) {
                                    X.offset = Vt - X.v;
                                    var O = it((parseFloat(de && de._gsap.y) || 0) - X.offset);
                                    de.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + O + ", 0, 1)", de._gsap.y = O + "px", X.cacheID = x.cache, kn()
                                }
                                return !0
                            }
                            X.offset && he(), Oe = !0
                        },
                        we, Pn, Jt, zi, Vi = function() {
                            er(), we.isActive() && we.vars.scrollY > te && (X() > te ? we.progress(1) && X(te) : we.resetTo("scrollY", te))
                        };
                    return de && G.set(de, {
                        y: "+=0"
                    }), _.ignoreCheck = function(st) {
                        return Di && st.type === "touchmove" && oi() || Tt > 1.05 && st.type !== "touchstart" || M.isGesturing || st.touches && st.touches.length > 1
                    }, _.onPress = function() {
                        Oe = !1;
                        var st = Tt;
                        Tt = it((j.visualViewport && j.visualViewport.scale || 1) / dt), we.pause(), st !== Tt && $u(ye, Tt > 1.01 ? !0 : D ? !1 : "x"), Pn = ge(), Jt = X(), er(), di = Es
                    }, _.onRelease = _.onGestureStart = function(st, zt) {
                        if (X.offset && he(), !zt) zi.restart(!0);
                        else {
                            x.cache++;
                            var Vt = xt(),
                                O, Kt;
                            D && (O = ge(), Kt = O + Vt * .05 * -st.velocityX / .227, Vt *= _f(ge, O, Kt, Dt(ye, R)), we.vars.scrollX = be(Kt)), O = X(), Kt = O + Vt * .05 * -st.velocityY / .227, Vt *= _f(X, O, Kt, Dt(ye, Q)), we.vars.scrollY = Ii(Kt), we.invalidate()
                                .duration(Vt)
                                .play(.01), (Di && we.vars.scrollY >= te || O >= te - 1) && G.to({}, {
                                    onUpdate: Vi,
                                    duration: Vt
                                })
                        }
                        $ && $(st)
                    }, _.onWheel = function() {
                        we._ts && we.pause(), ct() - Gt > 1e3 && (di = 0, Gt = ct())
                    }, _.onChange = function(st, zt, Vt, O, Kt) {
                        if (Es !== di && er(), zt && D && ge(be(O[2] === zt ? Pn + (st.startX - st.x) : ge() + zt - O[1])), Vt) {
                            X.offset && he();
                            var Ss = Kt[2] === Vt,
                                Jn = Ss ? Jt + st.startY - st.y : X() + Vt - Kt[1],
                                Rr = Ii(Jn);
                            Ss && Jn !== Rr && (Jt += Rr - Jn), X(Rr)
                        }(Vt || zt) && kn()
                    }, _.onEnable = function() {
                        $u(ye, D ? !1 : "x"), Ne.addEventListener("refresh", Vi), ni(j, "resize", Vi), X.smooth && (X.target.style.scrollBehavior = "auto", X.smooth = ge.smooth = !1), Or.enable()
                    }, _.onDisable = function() {
                        $u(ye, !0), si(j, "resize", Vi), Ne.removeEventListener("refresh", Vi), Or.kill()
                    }, _.lockAxis = _.lockAxis !== !1, M = new Ye(_), M.iOS = Di, Di && !X() && X(1), Di && G.ticker.add(je), zi = M._dc, we = G.to(M, {
                        ease: "power4",
                        paused: !0,
                        inherit: !1,
                        scrollX: D ? "+=0.1" : "+=0",
                        scrollY: "+=0.1",
                        modifiers: {
                            scrollY: gf(X, X(), function() {
                                return we.pause()
                            })
                        },
                        onUpdate: kn,
                        onComplete: zi.vars.onComplete
                    }), M
                };
            Ne.sort = function(L) {
                if (Ge(L)) return Me.sort(L);
                var _ = j.pageYOffset || 0;
                return Ne.getAll()
                    .forEach(function(E) {
                        return E._sortY = E.trigger ? _ + E.trigger.getBoundingClientRect()
                            .top : E.start + j.innerHeight
                    }), Me.sort(L || function(E, D) {
                        return (E.vars.refreshPriority || 0) * -1e6 + (E.vars.containerAnimation ? 1e6 : E._sortY) - ((D.vars.containerAnimation ? 1e6 : D._sortY) + (D.vars.refreshPriority || 0) * -1e6)
                    })
            }, Ne.observe = function(L) {
                return new Ye(L)
            }, Ne.normalizeScroll = function(L) {
                if (typeof L > "u") return ut;
                if (L === !0 && ut) return ut.enable();
                if (L === !1) {
                    ut && ut.kill(), ut = L;
                    return
                }
                var _ = L instanceof Ye ? L : M0(L);
                return ut && ut.target === _.target && ut.kill(), Ke(_.target) && (ut = _), _
            }, Ne.core = {
                _getVelocityProp: ce,
                _inputObserver: yf,
                _scrollers: x,
                _proxies: P,
                bridge: {
                    ss: function() {
                        ve || xs("scrollStart"), ve = ct()
                    },
                    ref: function() {
                        return lt
                    }
                }
            }, Qi() && G.registerPlugin(Ne), t.ScrollTrigger = Ne, t.default = Ne, typeof window > "u" || window !== t ? Object.defineProperty(t, "__esModule", {
                value: !0
            }) : delete window.default
        })
    }(Da, Da.exports)), Da.exports
}
var x_ = b_();

function B(r, e) {
    return (e || document)
        .querySelector(r)
}

function Fe(r, e) {
    return [...(e ? typeof e == "string" ? document.querySelector(e) : e : document)
        .querySelectorAll(r)
    ]
}

function Fl(r) {
    return r.getBoundingClientRect()
        .height
}
const sc = r => {
    r.forEach(e => {
        const t = parseFloat(e.getAttribute("data-speed")),
            i = e.getBoundingClientRect(),
            n = i.top,
            s = i.height,
            o = n - s * t,
            a = n + s * (1 + t);
        if (!(o > window.innerHeight || a < 0)) {
            const l = (window.innerHeight - o) / (window.innerHeight + a - o),
                u = Math.max(0, Math.min(1, l)),
                c = s * t * (2 * u - 1);
            e.style.transform = `translate3d(0, ${c}px, 0)`
        }
    })
};
class E_ {
    lenis;
    scroll;
    paralaxElements;
    startedScrolling;
    isTouchDevice;
    constructor() {
        this.lenis = new D_({
            wrapper: B("#scroll-container"),
            content: B("#scroll-content")
        }), window.lenis = this.lenis, this.lenis.scrollTo(0, {
            immediate: !0
        }), this.paralaxElements = Fe("[data-speed]"), this.startedScrolling = !1, this.isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.maxTouchPoints > 0, this.isTouchDevice || sc(this.paralaxElements), this.isTouchDevice, this.scroll = this.lenis.scroll, this.lenis.on("scroll", e => {
            this.scroll = e.scroll, this.startedScrolling = !0, this.isTouchDevice || sc(this.paralaxElements)
        }), requestAnimationFrame(this.raf.bind(this))
    }
    resetScroll() {
        this.lenis.scrollTo(0, {
            immediate: !0
        }), this.paralaxElements = Fe("[data-speed]"), this.scroll = 0, this.startedScrolling = !1
    }
    getScroll() {
        return this.scroll
    }
    raf(e) {
        this.lenis.raf(e), x_.ScrollTrigger.update(), !this.startedScrolling && !this.isTouchDevice && sc(this.paralaxElements), requestAnimationFrame(this.raf.bind(this))
    }
}
class C_ {
    element;
    fontSize;
    lineHeight;
    rootContainer;
    textContainer;
    text;
    constructor(e) {
        this.element = e.element, this.element.setAttribute("text-animation-set", "true"), this.getRawFontSize(this.element), this.setupContainers(), this.setupText(), this.setupParenthesistext()
    }
    setupContainers() {
        this.rootContainer = document.createElement("span"), this.rootContainer.style.display = "inline-block", this.rootContainer.style.position = "relative", this.rootContainer.style.overflow = "visible", this.textContainer = document.createElement("span"), this.textContainer.textContent = this.element.textContent, this.textContainer.setAttribute("text-hover-animation-char-container", "true"), this.textContainer.style.overflowY = "clip", this.textContainer.style.display = "inline-block", this.textContainer.style.position = "relative", this.textContainer.style.lineHeight = "150%", this.rootContainer.appendChild(this.textContainer), this.element.textContent = "", this.element.appendChild(this.rootContainer), this.element.style.setProperty("--line-height", this.lineHeight), this.element.style.setProperty("--font-size", this.fontSize)
    }
    setupParenthesistext() {
        const e = document.createElement("span");
        e.setAttribute("text-hover-animation-par-container", "true"), e.style.position = "absolute";
        const t = document.createElement("span");
        t.setAttribute("text-hover-animation-par-wrapper", "true");
        const i = document.createElement("span");
        i.textContent = this.text, i.style.visibility = "hidden";
        const n = document.createElement("span");
        n.textContent = "(";
        const s = document.createElement("span");
        s.textContent = ")", t.appendChild(n), t.appendChild(i), t.appendChild(s), e.appendChild(t), this.rootContainer.appendChild(e)
    }
    setupText() {
        this.text = this.textContainer.textContent?.trimEnd() || "", this.text = this.text.trimStart(), this.textContainer.innerHTML = "";
        const e = document.createElement("span");
        e.textContent = this.text, e.setAttribute("text-hover-animation-text", "true"), e.style.display = "inline-block", this.textContainer.appendChild(e);
        const t = document.createElement("span");
        t.setAttribute("text-hover-animation-text-hover", "true"), t.style.display = "inline-flex", t.textContent = this.text, this.textContainer.appendChild(t)
    }
    getRawFontSize(e) {
        for (const t of Array.from(document.styleSheets)) {
            let i;
            try {
                i = t.cssRules
            } catch {
                continue
            }
            for (const n of Array.from(i))
                if (n instanceof CSSStyleRule && e.matches(n.selectorText)) {
                    const s = n.style.getPropertyValue("font-size"),
                        o = n.style.getPropertyValue("line-height");
                    s ? this.fontSize = s.trim() : o && (this.lineHeight = o.trim())
                }
        }
    }
}
/*!
 * matrix 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
let Hn, Gs, zh, xu, va, Xl, cu, Oa, en = "transform",
    Yc = en + "Origin",
    fg, Vh = r => {
        let e = r.ownerDocument || r;
        for (!(en in r.style) && ("msTransform" in r.style) && (en = "msTransform", Yc = en + "Origin"); e.parentNode && (e = e.parentNode););
        if (Gs = window, cu = new Yn, e) {
            Hn = e, zh = e.documentElement, xu = e.body, Oa = Hn.createElementNS("http://www.w3.org/2000/svg", "g"), Oa.style.transform = "none";
            let t = e.createElement("div"),
                i = e.createElement("div"),
                n = e && (e.body || e.firstElementChild);
            n && n.appendChild && (n.appendChild(t), t.appendChild(i), t.setAttribute("style", "position:static;transform:translate3d(0,0,1px)"), fg = i.offsetParent !== t, n.removeChild(t))
        }
        return e
    },
    S_ = r => {
        let e, t;
        for (; r && r !== xu;) t = r._gsap, t && t.uncache && t.get(r, "x"), t && !t.scaleX && !t.scaleY && t.renderTransform && (t.scaleX = t.scaleY = 1e-4, t.renderTransform(1, t), e ? e.push(t) : e = [t]), r = r.parentNode;
        return e
    },
    dg = [],
    pg = [],
    Hh = () => Gs.pageYOffset || Hn.scrollTop || zh.scrollTop || xu.scrollTop || 0,
    qh = () => Gs.pageXOffset || Hn.scrollLeft || zh.scrollLeft || xu.scrollLeft || 0,
    $h = r => r.ownerSVGElement || ((r.tagName + "")
        .toLowerCase() === "svg" ? r : null),
    gg = r => {
        if (Gs.getComputedStyle(r)
            .position === "fixed") return !0;
        if (r = r.parentNode, r && r.nodeType === 1) return gg(r)
    },
    Ra = (r, e) => {
        if (r.parentNode && (Hn || Vh(r))) {
            let t = $h(r),
                i = t ? t.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
                n = t ? e ? "rect" : "g" : "div",
                s = e !== 2 ? 0 : 100,
                o = e === 3 ? 100 : 0,
                a = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
                l = Hn.createElementNS ? Hn.createElementNS(i.replace(/^https/, "http"), n) : Hn.createElement(n);
            return e && (t ? (Xl || (Xl = Ra(r)), l.setAttribute("width", .01), l.setAttribute("height", .01), l.setAttribute("transform", "translate(" + s + "," + o + ")"), Xl.appendChild(l)) : (va || (va = Ra(r), va.style.cssText = a), l.style.cssText = a + "width:0.1px;height:0.1px;top:" + o + "px;left:" + s + "px", va.appendChild(l))), l
        }
        throw "Need document and parent."
    },
    T_ = r => {
        let e = new Yn,
            t = 0;
        for (; t < r.numberOfItems; t++) e.multiply(r.getItem(t)
            .matrix);
        return e
    },
    mg = r => {
        let e = r.getCTM(),
            t;
        return e || (t = r.style[en], r.style[en] = "none", r.appendChild(Oa), e = Oa.getCTM(), r.removeChild(Oa), t ? r.style[en] = t : r.style.removeProperty(en.replace(/([A-Z])/g, "-$1")
            .toLowerCase())), e || cu.clone()
    },
    k_ = (r, e) => {
        let t = $h(r),
            i = r === t,
            n = t ? dg : pg,
            s = r.parentNode,
            o, a, l, u, c, h;
        if (r === Gs) return r;
        if (n.length || n.push(Ra(r, 1), Ra(r, 2), Ra(r, 3)), o = t ? Xl : va, t) i ? (l = mg(r), u = -l.e / l.a, c = -l.f / l.d, a = cu) : r.getBBox ? (l = r.getBBox(), a = r.transform ? r.transform.baseVal : {}, a = a.numberOfItems ? a.numberOfItems > 1 ? T_(a) : a.getItem(0)
                .matrix : cu, u = a.a * l.x + a.c * l.y, c = a.b * l.x + a.d * l.y) : (a = new Yn, u = c = 0), e && r.tagName.toLowerCase() === "g" && (u = c = 0), (i ? t : s)
            .appendChild(o), o.setAttribute("transform", "matrix(" + a.a + "," + a.b + "," + a.c + "," + a.d + "," + (a.e + u) + "," + (a.f + c) + ")");
        else {
            if (u = c = 0, fg)
                for (a = r.offsetParent, l = r; l && (l = l.parentNode) && l !== a && l.parentNode;)(Gs.getComputedStyle(l)[en] + "")
                    .length > 4 && (u = l.offsetLeft, c = l.offsetTop, l = 0);
            if (h = Gs.getComputedStyle(r), h.position !== "absolute" && h.position !== "fixed")
                for (a = r.offsetParent; s && s !== a;) u += s.scrollLeft || 0, c += s.scrollTop || 0, s = s.parentNode;
            l = o.style, l.top = r.offsetTop - c + "px", l.left = r.offsetLeft - u + "px", l[en] = h[en], l[Yc] = h[Yc], l.position = h.position === "fixed" ? "fixed" : "absolute", r.parentNode.appendChild(o)
        }
        return o
    },
    oc = (r, e, t, i, n, s, o) => (r.a = e, r.b = t, r.c = i, r.d = n, r.e = s, r.f = o, r);
class Yn {
    constructor(e = 1, t = 0, i = 0, n = 1, s = 0, o = 0) {
        oc(this, e, t, i, n, s, o)
    }
    inverse() {
        let {
            a: e,
            b: t,
            c: i,
            d: n,
            e: s,
            f: o
        } = this, a = e * n - t * i || 1e-10;
        return oc(this, n / a, -t / a, -i / a, e / a, (i * o - n * s) / a, -(e * o - t * s) / a)
    }
    multiply(e) {
        let {
            a: t,
            b: i,
            c: n,
            d: s,
            e: o,
            f: a
        } = this, l = e.a, u = e.c, c = e.b, h = e.d, f = e.e, g = e.f;
        return oc(this, l * t + c * n, l * i + c * s, u * t + h * n, u * i + h * s, o + f * t + g * n, a + f * i + g * s)
    }
    clone() {
        return new Yn(this.a, this.b, this.c, this.d, this.e, this.f)
    }
    equals(e) {
        let {
            a: t,
            b: i,
            c: n,
            d: s,
            e: o,
            f: a
        } = this;
        return t === e.a && i === e.b && n === e.c && s === e.d && o === e.e && a === e.f
    }
    apply(e, t = {}) {
        let {
            x: i,
            y: n
        } = e, {
            a: s,
            b: o,
            c: a,
            d: l,
            e: u,
            f: c
        } = this;
        return t.x = i * s + n * a + u || 0, t.y = i * o + n * l + c || 0, t
    }
}

function Ri(r, e, t, i) {
    if (!r || !r.parentNode || (Hn || Vh(r))
        .documentElement === r) return new Yn;
    let n = S_(r),
        s = $h(r),
        o = s ? dg : pg,
        a = k_(r, t),
        l = o[0].getBoundingClientRect(),
        u = o[1].getBoundingClientRect(),
        c = o[2].getBoundingClientRect(),
        h = a.parentNode,
        f = !i && gg(r),
        g = new Yn((u.left - l.left) / 100, (u.top - l.top) / 100, (c.left - l.left) / 100, (c.top - l.top) / 100, l.left + (f ? 0 : qh()), l.top + (f ? 0 : Hh()));
    if (h.removeChild(a), n)
        for (l = n.length; l--;) u = n[l], u.scaleX = u.scaleY = 0, u.renderTransform(1, u);
    return e ? g.inverse() : g
}
/*!
 * Flip 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
let P_ = 1,
    Uo, ki, mt, Ma, ss, qn, Xc, sd = (r, e) => r.actions.forEach(t => t.vars[e] && t.vars[e](t)),
    jc = {},
    od = 180 / Math.PI,
    A_ = Math.PI / 180,
    hu = {},
    ad = {},
    Eu = {},
    Uh = r => typeof r == "string" ? r.split(" ")
    .join("")
    .split(",") : r,
    F_ = Uh("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),
    Cu = Uh("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"),
    Ba = r => Uo(r)[0] || console.warn("Element not found:", r),
    Eo = r => Math.round(r * 1e4) / 1e4 || 0,
    ac = (r, e, t) => r.forEach(i => i.classList[t](e)),
    ld = {
        zIndex: 1,
        kill: 1,
        simple: 1,
        spin: 1,
        clearProps: 1,
        targets: 1,
        toggleClass: 1,
        onComplete: 1,
        onUpdate: 1,
        onInterrupt: 1,
        onStart: 1,
        delay: 1,
        repeat: 1,
        repeatDelay: 1,
        yoyo: 1,
        scale: 1,
        fade: 1,
        absolute: 1,
        props: 1,
        onEnter: 1,
        onLeave: 1,
        custom: 1,
        paused: 1,
        nested: 1,
        prune: 1,
        absoluteOnLeave: 1
    },
    _g = {
        zIndex: 1,
        simple: 1,
        clearProps: 1,
        scale: 1,
        absolute: 1,
        fitChild: 1,
        getVars: 1,
        props: 1
    },
    yg = r => r.replace(/([A-Z])/g, "-$1")
    .toLowerCase(),
    Co = (r, e) => {
        let t = {},
            i;
        for (i in r) e[i] || (t[i] = r[i]);
        return t
    },
    Wh = {},
    Dg = r => {
        let e = Wh[r] = Uh(r);
        return Eu[r] = e.concat(Cu), e
    },
    L_ = r => {
        let e = r._gsap || ki.core.getCache(r);
        return e.gmCache === ki.ticker.frame ? e.gMatrix : (e.gmCache = ki.ticker.frame, e.gMatrix = Ri(r, !0, !1, !0))
    },
    vg = (r, e, t = 0) => {
        let i = r.parentNode,
            n = 1e3 * 10 ** t * (e ? -1 : 1),
            s = e ? -n * 900 : 0;
        for (; r;) s += n, r = r.previousSibling;
        return i ? s + vg(i, e, t + 1) : s
    },
    fu = (r, e, t) => (r.forEach(i => i.d = vg(t ? i.element : i.t, e)), r.sort((i, n) => i.d - n.d), r),
    Ya = (r, e) => {
        let t = r.element.style,
            i = r.css = r.css || [],
            n = e.length,
            s, o;
        for (; n--;) s = e[n], o = t[s] || t.getPropertyValue(s), i.push(o ? s : ad[s] || (ad[s] = yg(s)), o);
        return t
    },
    du = r => {
        let e = r.css,
            t = r.element.style,
            i = 0;
        for (r.cache.uncache = 1; i < e.length; i += 2) e[i + 1] ? t[e[i]] = e[i + 1] : t.removeProperty(e[i]);
        !e[e.indexOf("transform") + 1] && t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
    },
    ud = (r, e) => {
        r.forEach(t => t.a.cache.uncache = 1), e || r.finalStates.forEach(du)
    },
    lc = "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","),
    Yh = (r, e, t) => {
        let {
            element: i,
            width: n,
            height: s,
            uncache: o,
            getProp: a
        } = r, l = i.style, u = 4, c, h, f;
        if (typeof e != "object" && (e = r), mt && t !== 1) return mt._abs.push({
            t: i,
            b: r,
            a: r,
            sd: 0
        }), mt._final.push(() => (r.cache.uncache = 1) && du(r)), i;
        for (h = a("display") === "none", (!r.isVisible || h) && (h && (Ya(r, ["display"])
                .display = e.display), r.matrix = e.matrix, r.width = n = r.width || e.width, r.height = s = r.height || e.height), Ya(r, lc), f = window.getComputedStyle(i); u--;) l[lc[u]] = f[lc[u]];
        if (l.gridArea = "1 / 1 / 1 / 1", l.transition = "none", l.position = "absolute", l.width = n + "px", l.height = s + "px", l.top || (l.top = "0px"), l.left || (l.left = "0px"), o) c = new io(i);
        else if (c = Co(r, hu), c.position = "absolute", r.simple) {
            let g = i.getBoundingClientRect();
            c.matrix = new Yn(1, 0, 0, 1, g.left + qh(), g.top + Hh())
        } else c.matrix = Ri(i, !1, !1, !0);
        return c = Bo(c, r, !0), r.x = qn(c.x, .01), r.y = qn(c.y, .01), i
    },
    cd = (r, e) => (e !== !0 && (e = Uo(e), r = r.filter(t => {
        if (e.indexOf((t.sd < 0 ? t.b : t.a)
                .element) !== -1) return !0;
        t.t._gsap.renderTransform(1), t.b.isVisible && (t.t.style.width = t.b.width + "px", t.t.style.height = t.b.height + "px")
    })), r),
    wg = r => fu(r, !0)
    .forEach(e => (e.a.isVisible || e.b.isVisible) && Yh(e.sd < 0 ? e.b : e.a, e.b, 1)),
    O_ = (r, e) => e && r.idLookup[Gc(e)
        .id] || r.elementStates[0],
    Gc = (r, e, t, i) => r instanceof io ? r : r instanceof tn ? O_(r, i) : new io(typeof r == "string" ? Ba(r) || console.warn(r + " not found") : r, e, t),
    R_ = (r, e) => {
        let t = ki.getProperty(r.element, null, "native"),
            i = r.props = {},
            n = e.length;
        for (; n--;) i[e[n]] = (t(e[n]) + "")
            .trim();
        return i.zIndex && (i.zIndex = parseFloat(i.zIndex) || 0), r
    },
    bg = (r, e) => {
        let t = r.style || r,
            i;
        for (i in e) t[i] = e[i]
    },
    M_ = r => {
        let e = r.getAttribute("data-flip-id");
        return e || r.setAttribute("data-flip-id", e = "auto-" + P_++), e
    },
    xg = r => r.map(e => e.element),
    hd = (r, e, t) => r && e.length && t.add(r(xg(e), t, new tn(e, 0, !0)), 0),
    Bo = (r, e, t, i, n, s) => {
        let {
            element: o,
            cache: a,
            parent: l,
            x: u,
            y: c
        } = r, {
            width: h,
            height: f,
            scaleX: g,
            scaleY: m,
            rotation: d,
            bounds: p
        } = e, y = s && Xc && Xc(o, "transform,width,height"), b = r, {
            e: w,
            f: S
        } = e.matrix, x = r.bounds.width !== p.width || r.bounds.height !== p.height || r.scaleX !== g || r.scaleY !== m || r.rotation !== d, P = !x && r.simple && e.simple && !n, C, A, k, I, Y, V, q;
        return P || !l ? (g = m = 1, d = C = 0) : (Y = L_(l), V = Y.clone()
            .multiply(e.ctm ? e.matrix.clone()
                .multiply(e.ctm) : e.matrix), d = Eo(Math.atan2(V.b, V.a) * od), C = Eo(Math.atan2(V.c, V.d) * od + d) % 360, g = Math.sqrt(V.a ** 2 + V.b ** 2), m = Math.sqrt(V.c ** 2 + V.d ** 2) * Math.cos(C * A_), n && (n = Uo(n)[0], I = ki.getProperty(n), q = n.getBBox && typeof n.getBBox == "function" && n.getBBox(), b = {
                scaleX: I("scaleX"),
                scaleY: I("scaleY"),
                width: q ? q.width : Math.ceil(parseFloat(I("width", "px"))),
                height: q ? q.height : parseFloat(I("height", "px"))
            }), a.rotation = d + "deg", a.skewX = C + "deg"), t ? (g *= h === b.width || !b.width ? 1 : h / b.width, m *= f === b.height || !b.height ? 1 : f / b.height, a.scaleX = g, a.scaleY = m) : (h = qn(h * g / b.scaleX, 0), f = qn(f * m / b.scaleY, 0), o.style.width = h + "px", o.style.height = f + "px"), i && bg(o, e.props), P || !l ? (u += w - r.matrix.e, c += S - r.matrix.f) : x || l !== e.parent ? (a.renderTransform(1, a), V = Ri(n || o, !1, !1, !0), A = Y.apply({
            x: V.e,
            y: V.f
        }), k = Y.apply({
            x: w,
            y: S
        }), u += k.x - A.x, c += k.y - A.y) : (Y.e = Y.f = 0, k = Y.apply({
            x: w - r.matrix.e,
            y: S - r.matrix.f
        }), u += k.x, c += k.y), u = qn(u, .02), c = qn(c, .02), s && !(s instanceof io) ? y && y.revert() : (a.x = u + "px", a.y = c + "px", a.renderTransform(1, a)), s && (s.x = u, s.y = c, s.rotation = d, s.skewX = C, t ? (s.scaleX = g, s.scaleY = m) : (s.width = h, s.height = f)), s || a
    },
    uc = (r, e) => r instanceof tn ? r : new tn(r, e),
    Eg = (r, e, t) => {
        let i = r.idLookup[t],
            n = r.alt[t];
        return n.isVisible && (!(e.getElementState(n.element) || n)
            .isVisible || !i.isVisible) ? n : i
    },
    cc = [],
    hc = "width,height,overflowX,overflowY".split(","),
    Ll, fd = r => {
        if (r !== Ll) {
            let e = ss.style,
                t = ss.clientWidth === window.outerWidth,
                i = ss.clientHeight === window.outerHeight,
                n = 4;
            if (r && (t || i)) {
                for (; n--;) cc[n] = e[hc[n]];
                t && (e.width = ss.clientWidth + "px", e.overflowY = "hidden"), i && (e.height = ss.clientHeight + "px", e.overflowX = "hidden"), Ll = r
            } else if (Ll) {
                for (; n--;) cc[n] ? e[hc[n]] = cc[n] : e.removeProperty(yg(hc[n]));
                Ll = r
            }
        }
    },
    fc = (r, e, t, i) => {
        r instanceof tn && e instanceof tn || console.warn("Not a valid state object."), t = t || {};
        let {
            clearProps: n,
            onEnter: s,
            onLeave: o,
            absolute: a,
            absoluteOnLeave: l,
            custom: u,
            delay: c,
            paused: h,
            repeat: f,
            repeatDelay: g,
            yoyo: m,
            toggleClass: d,
            nested: p,
            zIndex: y,
            scale: b,
            fade: w,
            stagger: S,
            spin: x,
            prune: P
        } = t, C = ("props" in t ? t : r)
            .props, A = Co(t, ld), k = ki.timeline({
                delay: c,
                paused: h,
                repeat: f,
                repeatDelay: g,
                yoyo: m,
                data: "isFlip"
            }), I = A, Y = [], V = [], q = [], K = [], W = x === !0 ? 1 : x || 0, J = typeof x == "function" ? x : () => W, T = r.interrupted || e.interrupted, R = k[i !== 1 ? "to" : "from"], Q, se, ue, ce, le, Z, Te, ke, Ye, G, Xe, j, ie, xe;
        for (se in e.idLookup) Xe = e.alt[se] ? Eg(e, r, se) : e.idLookup[se], le = Xe.element, G = r.idLookup[se], r.alt[se] && le === G.element && (r.alt[se].isVisible || !Xe.isVisible) && (G = r.alt[se]), G ? (Z = {
            t: le,
            b: G,
            a: Xe,
            sd: G.element === le ? 0 : Xe.isVisible ? 1 : -1
        }, q.push(Z), Z.sd && (Z.sd < 0 && (Z.b = Xe, Z.a = G), T && Ya(Z.b, C ? Eu[C] : Cu), w && q.push(Z.swap = {
            t: G.element,
            b: Z.b,
            a: Z.a,
            sd: -Z.sd,
            swap: Z
        })), le._flip = G.element._flip = mt ? mt.timeline : k) : Xe.isVisible && (q.push({
            t: le,
            b: Co(Xe, {
                isVisible: 1
            }),
            a: Xe,
            sd: 0,
            entering: 1
        }), le._flip = mt ? mt.timeline : k);
        C && (Wh[C] || Dg(C))
            .forEach(Ve => A[Ve] = N => q[N].a.props[Ve]), q.finalStates = Ye = [], j = () => {
                for (fu(q), fd(!0), ce = 0; ce < q.length; ce++) Z = q[ce], ie = Z.a, xe = Z.b, P && !ie.isDifferent(xe) && !Z.entering ? q.splice(ce--, 1) : (le = Z.t, p && !(Z.sd < 0) && ce && (ie.matrix = Ri(le, !1, !1, !0)), xe.isVisible && ie.isVisible ? (Z.sd < 0 ? (Te = new io(le, C, r.simple), Bo(Te, ie, b, 0, 0, Te), Te.matrix = Ri(le, !1, !1, !0), Te.css = Z.b.css, Z.a = ie = Te, w && (le.style.opacity = T ? xe.opacity : ie.opacity), S && K.push(le)) : Z.sd > 0 && w && (le.style.opacity = T ? ie.opacity - xe.opacity : "0"), Bo(ie, xe, b, C)) : xe.isVisible !== ie.isVisible && (xe.isVisible ? ie.isVisible || (xe.css = ie.css, V.push(xe), q.splice(ce--, 1), a && p && Bo(ie, xe, b, C)) : (ie.isVisible && Y.push(ie), q.splice(ce--, 1))), b || (le.style.maxWidth = Math.max(ie.width, xe.width) + "px", le.style.maxHeight = Math.max(ie.height, xe.height) + "px", le.style.minWidth = Math.min(ie.width, xe.width) + "px", le.style.minHeight = Math.min(ie.height, xe.height) + "px"), p && d && le.classList.add(d)), Ye.push(ie);
                let Ve;
                if (d && (Ve = Ye.map(fe => fe.element), p && Ve.forEach(fe => fe.classList.remove(d))), fd(!1), b ? (A.scaleX = fe => q[fe].a.scaleX, A.scaleY = fe => q[fe].a.scaleY) : (A.width = fe => q[fe].a.width + "px", A.height = fe => q[fe].a.height + "px", A.autoRound = t.autoRound || !1), A.x = fe => q[fe].a.x + "px", A.y = fe => q[fe].a.y + "px", A.rotation = fe => q[fe].a.rotation + (x ? J(fe, ke[fe], ke) * 360 : 0), A.skewX = fe => q[fe].a.skewX, ke = q.map(fe => fe.t), (y || y === 0) && (A.modifiers = {
                        zIndex: () => y
                    }, A.zIndex = y, A.immediateRender = t.immediateRender !== !1), w && (A.opacity = fe => q[fe].sd < 0 ? 0 : q[fe].sd > 0 ? q[fe].a.opacity : "+=0"), K.length) {
                    S = ki.utils.distribute(S);
                    let fe = ke.slice(K.length);
                    A.stagger = (yi, tt) => S(~K.indexOf(tt) ? ke.indexOf(q[yi].swap.t) : yi, tt, fe)
                }
                if (F_.forEach(fe => t[fe] && k.eventCallback(fe, t[fe], t[fe + "Params"])), u && ke.length) {
                    I = Co(A, ld), "scale" in u && (u.scaleX = u.scaleY = u.scale, delete u.scale);
                    for (se in u) Q = Co(u[se], _g), Q[se] = A[se], !("duration" in Q) && "duration" in A && (Q.duration = A.duration), Q.stagger = A.stagger, R.call(k, ke, Q, 0), delete I[se]
                }(ke.length || V.length || Y.length) && (d && k.add(() => ac(Ve, d, k._zTime < 0 ? "remove" : "add"), 0) && !h && ac(Ve, d, "add"), ke.length && R.call(k, ke, I, 0)), hd(s, Y, k), hd(o, V, k);
                let N = mt && mt.timeline;
                N && (N.add(k, 0), mt._final.push(() => ud(q, !n))), ue = k.duration(), k.call(() => {
                    let fe = k.time() >= ue;
                    fe && !N && ud(q, !n), d && ac(Ve, d, fe ? "remove" : "add")
                })
            }, l && (a = q.filter(Ve => !Ve.sd && !Ve.a.isVisible && Ve.b.isVisible)
                .map(Ve => Ve.a.element)), mt ? (a && mt._abs.push(...cd(q, a)), mt._run.push(j)) : (a && wg(cd(q, a)), j());
        let De = mt ? mt.timeline : k;
        return De.revert = () => Xh(De, 1, 1), De
    },
    Cg = r => {
        r.vars.onInterrupt && r.vars.onInterrupt.apply(r, r.vars.onInterruptParams || []), r.getChildren(!0, !1, !0)
            .forEach(Cg)
    },
    Xh = (r, e, t) => {
        if (r && r.progress() < 1 && (!r.paused() || t)) return e && (Cg(r), e < 2 && r.progress(1), r.kill()), !0
    },
    Ol = r => {
        let e = r.idLookup = {},
            t = r.alt = {},
            i = r.elementStates,
            n = i.length,
            s;
        for (; n--;) s = i[n], e[s.id] ? t[s.id] = s : e[s.id] = s
    };
class tn {
    constructor(e, t, i) {
        if (this.props = t && t.props, this.simple = !!(t && t.simple), i) this.targets = xg(e), this.elementStates = e, Ol(this);
        else {
            this.targets = Uo(e);
            let n = t && (t.kill === !1 || t.batch && !t.kill);
            mt && !n && mt._kill.push(this), this.update(n || !!mt)
        }
    }
    update(e) {
        return this.elementStates = this.targets.map(t => new io(t, this.props, this.simple)), Ol(this), this.interrupt(e), this.recordInlineStyles(), this
    }
    clear() {
        return this.targets.length = this.elementStates.length = 0, Ol(this), this
    }
    fit(e, t, i) {
        let n = fu(this.elementStates.slice(0), !1, !0),
            s = (e || this)
            .idLookup,
            o = 0,
            a, l;
        for (; o < n.length; o++) a = n[o], i && (a.matrix = Ri(a.element, !1, !1, !0)), l = s[a.id], l && Bo(a, l, t, !0, 0, a), a.matrix = Ri(a.element, !1, !1, !0);
        return this
    }
    getProperty(e, t) {
        let i = this.getElementState(e) || hu;
        return (t in i ? i : i.props || hu)[t]
    }
    add(e) {
        let t = e.targets.length,
            i = this.idLookup,
            n = this.alt,
            s, o, a;
        for (; t--;) o = e.elementStates[t], a = i[o.id], a && (o.element === a.element || n[o.id] && n[o.id].element === o.element) ? (s = this.elementStates.indexOf(o.element === a.element ? a : n[o.id]), this.targets.splice(s, 1, e.targets[t]), this.elementStates.splice(s, 1, o)) : (this.targets.push(e.targets[t]), this.elementStates.push(o));
        return e.interrupted && (this.interrupted = !0), e.simple || (this.simple = !1), Ol(this), this
    }
    compare(e) {
        let t = e.idLookup,
            i = this.idLookup,
            n = [],
            s = [],
            o = [],
            a = [],
            l = [],
            u = e.alt,
            c = this.alt,
            h = (x, P, C) => (x.isVisible !== P.isVisible ? x.isVisible ? o : a : x.isVisible ? s : n)
            .push(C) && l.push(C),
            f = (x, P, C) => l.indexOf(C) < 0 && h(x, P, C),
            g, m, d, p, y, b, w, S;
        for (d in t) y = u[d], b = c[d], g = y ? Eg(e, this, d) : t[d], p = g.element, m = i[d], b ? (S = m.isVisible || !b.isVisible && p === m.element ? m : b, w = y && !g.isVisible && !y.isVisible && S.element === y.element ? y : g, w.isVisible && S.isVisible && w.element !== S.element ? ((w.isDifferent(S) ? s : n)
            .push(w.element, S.element), l.push(w.element, S.element)) : h(w, S, w.element), y && w.element === y.element && (y = t[d]), f(w.element !== m.element && y ? y : w, m, m.element), f(y && y.element === b.element ? y : w, b, b.element), y && f(y, b.element === y.element ? b : m, y.element)) : (m ? m.isDifferent(g) ? h(g, m, p) : n.push(p) : o.push(p), y && f(y, m, y.element));
        for (d in i) t[d] || (a.push(i[d].element), c[d] && a.push(c[d].element));
        return {
            changed: s,
            unchanged: n,
            enter: o,
            leave: a
        }
    }
    recordInlineStyles() {
        let e = Eu[this.props] || Cu,
            t = this.elementStates.length;
        for (; t--;) Ya(this.elementStates[t], e)
    }
    interrupt(e) {
        let t = [];
        this.targets.forEach(i => {
            let n = i._flip,
                s = Xh(n, e ? 0 : 1);
            e && s && t.indexOf(n) < 0 && n.add(() => this.updateVisibility()), s && t.push(n)
        }), !e && t.length && this.updateVisibility(), this.interrupted || (this.interrupted = !!t.length)
    }
    updateVisibility() {
        this.elementStates.forEach(e => {
            let t = e.element.getBoundingClientRect();
            e.isVisible = !!(t.width || t.height || t.top || t.left), e.uncache = 1
        })
    }
    getElementState(e) {
        return this.elementStates[this.targets.indexOf(Ba(e))]
    }
    makeAbsolute() {
        return fu(this.elementStates.slice(0), !0, !0)
            .map(Yh)
    }
}
class io {
    constructor(e, t, i) {
        this.element = e, this.update(t, i)
    }
    isDifferent(e) {
        let t = this.bounds,
            i = e.bounds;
        return t.top !== i.top || t.left !== i.left || t.width !== i.width || t.height !== i.height || !this.matrix.equals(e.matrix) || this.opacity !== e.opacity || this.props && e.props && JSON.stringify(this.props) !== JSON.stringify(e.props)
    }
    update(e, t) {
        let i = this,
            n = i.element,
            s = ki.getProperty(n),
            o = ki.core.getCache(n),
            a = n.getBoundingClientRect(),
            l = n.getBBox && typeof n.getBBox == "function" && n.nodeName.toLowerCase() !== "svg" && n.getBBox(),
            u = t ? new Yn(1, 0, 0, 1, a.left + qh(), a.top + Hh()) : Ri(n, !1, !1, !0);
        i.getProp = s, i.element = n, i.id = M_(n), i.matrix = u, i.cache = o, i.bounds = a, i.isVisible = !!(a.width || a.height || a.left || a.top), i.display = s("display"), i.position = s("position"), i.parent = n.parentNode, i.x = s("x"), i.y = s("y"), i.scaleX = o.scaleX, i.scaleY = o.scaleY, i.rotation = s("rotation"), i.skewX = s("skewX"), i.opacity = s("opacity"), i.width = l ? l.width : qn(s("width", "px"), .04), i.height = l ? l.height : qn(s("height", "px"), .04), e && R_(i, Wh[e] || Dg(e)), i.ctm = n.getCTM && n.nodeName.toLowerCase() === "svg" && mg(n)
            .inverse(), i.simple = t || Eo(u.a) === 1 && !Eo(u.b) && !Eo(u.c) && Eo(u.d) === 1, i.uncache = 0
    }
}
class B_ {
    constructor(e, t) {
        this.vars = e, this.batch = t, this.states = [], this.timeline = t.timeline
    }
    getStateById(e) {
        let t = this.states.length;
        for (; t--;)
            if (this.states[t].idLookup[e]) return this.states[t]
    }
    kill() {
        this.batch.remove(this)
    }
}
class N_ {
    constructor(e) {
        this.id = e, this.actions = [], this._kill = [], this._final = [], this._abs = [], this._run = [], this.data = {}, this.state = new tn, this.timeline = ki.timeline()
    }
    add(e) {
        let t = this.actions.filter(i => i.vars === e);
        return t.length ? t[0] : (t = new B_(typeof e == "function" ? {
            animate: e
        } : e, this), this.actions.push(t), t)
    }
    remove(e) {
        let t = this.actions.indexOf(e);
        return t >= 0 && this.actions.splice(t, 1), this
    }
    getState(e) {
        let t = mt,
            i = Ma;
        return mt = this, this.state.clear(), this._kill.length = 0, this.actions.forEach(n => {
            n.vars.getState && (n.states.length = 0, Ma = n, n.state = n.vars.getState(n)), e && n.states.forEach(s => this.state.add(s))
        }), Ma = i, mt = t, this.killConflicts(), this
    }
    animate() {
        let e = mt,
            t = this.timeline,
            i = this.actions.length,
            n, s;
        for (mt = this, t.clear(), this._abs.length = this._final.length = this._run.length = 0, this.actions.forEach(o => {
                o.vars.animate && o.vars.animate(o);
                let a = o.vars.onEnter,
                    l = o.vars.onLeave,
                    u = o.targets,
                    c, h;
                u && u.length && (a || l) && (c = new tn, o.states.forEach(f => c.add(f)), h = c.compare(Ki.getState(u)), h.enter.length && a && a(h.enter), h.leave.length && l && l(h.leave))
            }), wg(this._abs), this._run.forEach(o => o()), s = t.duration(), n = this._final.slice(0), t.add(() => {
                s <= t.time() && (n.forEach(o => o()), sd(this, "onComplete"))
            }), mt = e; i--;) this.actions[i].vars.once && this.actions[i].kill();
        return sd(this, "onStart"), t.restart(), this
    }
    loadState(e) {
        e || (e = () => 0);
        let t = [];
        return this.actions.forEach(i => {
            if (i.vars.loadState) {
                let n, s = o => {
                    o && (i.targets = o), n = t.indexOf(s), ~n && (t.splice(n, 1), t.length || e())
                };
                t.push(s), i.vars.loadState(s)
            }
        }), t.length || e(), this
    }
    setState() {
        return this.actions.forEach(e => e.targets = e.vars.setState && e.vars.setState(e)), this
    }
    killConflicts(e) {
        return this.state.interrupt(e), this._kill.forEach(t => t.interrupt(e)), this
    }
    run(e, t) {
        return this !== mt && (e || this.getState(t), this.loadState(() => {
            this._killed || (this.setState(), this.animate())
        })), this
    }
    clear(e) {
        this.state.clear(), e || (this.actions.length = 0)
    }
    getStateById(e) {
        let t = this.actions.length,
            i;
        for (; t--;)
            if (i = this.actions[t].getStateById(e), i) return i;
        return this.state.idLookup[e] && this.state
    }
    kill() {
        this._killed = 1, this.clear(), delete jc[this.id]
    }
}
class Ki {
    static getState(e, t) {
        let i = uc(e, t);
        return Ma && Ma.states.push(i), t && t.batch && Ki.batch(t.batch)
            .state.add(i), i
    }
    static from(e, t) {
        return t = t || {}, "clearProps" in t || (t.clearProps = !0), fc(e, uc(t.targets || e.targets, {
            props: t.props || e.props,
            simple: t.simple,
            kill: !!t.kill
        }), t, -1)
    }
    static to(e, t) {
        return fc(e, uc(t.targets || e.targets, {
            props: t.props || e.props,
            simple: t.simple,
            kill: !!t.kill
        }), t, 1)
    }
    static fromTo(e, t, i) {
        return fc(e, t, i)
    }
    static fit(e, t, i) {
        let n = i ? Co(i, _g) : {},
            {
                absolute: s,
                scale: o,
                getVars: a,
                props: l,
                runBackwards: u,
                onComplete: c,
                simple: h
            } = i || n,
            f = i && i.fitChild && Ba(i.fitChild),
            g = Gc(t, l, h, e),
            m = Gc(e, 0, h, g),
            d = l ? Eu[l] : Cu,
            p = ki.context();
        return l && bg(n, g.props), Ya(m, d), u && ("immediateRender" in n || (n.immediateRender = !0), n.onComplete = function() {
            du(m), c && c.apply(this, arguments)
        }), s && Yh(m, g), n = Bo(m, g, o || f, l, f, n.duration || a ? n : 0), typeof i == "object" && "zIndex" in i && (n.zIndex = i.zIndex), p && !a && p.add(() => () => du(m)), a ? n : n.duration ? ki.to(m.element, n) : null
    }
    static makeAbsolute(e, t) {
        return (e instanceof tn ? e : new tn(e, t))
            .makeAbsolute()
    }
    static batch(e) {
        return e || (e = "default"), jc[e] || (jc[e] = new N_(e))
    }
    static killFlipsOf(e, t) {
        (e instanceof tn ? e.targets : Uo(e))
        .forEach(i => i && Xh(i._flip, t !== !1 ? 1 : 2))
    }
    static isFlipping(e) {
        let t = Ki.getByTarget(e);
        return !!t && t.isActive()
    }
    static getByTarget(e) {
        return (Ba(e) || hu)
            ._flip
    }
    static getElementState(e, t) {
        return new io(Ba(e), t)
    }
    static convertCoordinates(e, t, i) {
        let n = Ri(t, !0, !0)
            .multiply(Ri(e));
        return i ? n.apply(i) : n
    }
    static register(e) {
        if (ss = typeof document < "u" && document.body, ss) {
            ki = e, Vh(ss), Uo = ki.utils.toArray, Xc = ki.core.getStyleSaver;
            let t = ki.utils.snap(.1);
            qn = (i, n) => t(parseFloat(i) + n)
        }
    }
}
Ki.version = "3.12.7";
typeof window < "u" && window.gsap && window.gsap.registerPlugin(Ki);
class I_ {
    element = B("#mobile-menu");
    openButton = B("#mobile-menu-open-button");
    closeButton = B("#mobile-menu-close-button");
    hasMenu;
    closed = !0;
    currentTl = null;
    state;
    menuButtons;
    constructor() {
        !this.element || !this.openButton || !this.closeButton ? this.hasMenu = !1 : this.hasMenu = !0, this.menuButtons = Fe("[data-mobile-menu-button]", this.element), this.addEventListeners(), this.hasMenu && this.element.hasAttribute("menu-open") && this.onCLickClose()
    }
    onClickOpen() {
        this.hasMenu && (this.element.style.opacity = "1", this.element.style.pointerEvents = "auto", this.element.setAttribute("menu-open", "true"), this.closed = !1, this.animateMenuOpen())
    }
    onCLickClose() {
        this.hasMenu && this.animateMenuClose()
    }
    onCLickOutsideElement(e) {
        const t = Fe("[data-navbar-container]"),
            i = e.target,
            n = t.some(o => o.contains(i)),
            s = B("[data-next-work-link]");
        this.hasMenu && !this.element.contains(i) && !this.openButton.contains(i) && !s?.contains(i) && !this.closed && !n && this.onCLickClose()
    }
    addEventListeners() {
        this.openButton?.addEventListener("click", this.onClickOpen.bind(this)), this.closeButton?.addEventListener("click", this.onCLickClose.bind(this)), this.menuButtons.forEach(e => {
            e.addEventListener("click", this.onButtonClick.bind(this))
        }), document.addEventListener("click", this.onCLickOutsideElement.bind(this))
    }
    onButtonClick(e) {
        this.onCLickClose()
    }
    destroy() {
        this.openButton?.removeEventListener("click", this.onClickOpen.bind(this)), this.closeButton?.removeEventListener("click", this.onCLickClose.bind(this)), this.menuButtons.forEach(e => {
            e.removeEventListener("click", this.onButtonClick.bind(this))
        }), document.removeEventListener("click", this.onCLickOutsideElement.bind(this))
    }
    animateMenuOpen() {
        const e = B("[data-mobile-menu-background]"),
            t = B("[data-mobile-menu-background-container]"),
            i = Fe("[data-mobile-menu-button]"),
            n = B("[data-menu-top-line]", this.element);
        oe.set(n, {
            scaleX: 0
        }), this.currentTl && this.currentTl.pause();
        const s = this.currentTl = oe.timeline();
        oe.set([i, this.closeButton], {
            yPercent: 100
        }), s.to(this.openButton, {
            yPercent: -100,
            duration: .3
        }), s.to(n, {
            scaleX: 1,
            duration: .3
        }, "-=0.05"), s.to(this.closeButton, {
            yPercent: 0,
            duration: .3
        }, "<"), this.state = Ki.getState(e), t.appendChild(e), s.to(i, {
            yPercent: 0,
            stagger: .075,
            duration: .3,
            delay: .1
        }, "<"), Ki.from(this.state, {
            duration: .7,
            ease: "power2.inOut",
            absolute: !0,
            scale: !1
        })
    }
    animateMenuClose() {
        const e = B("[data-mobile-menu-background]"),
            t = B("#mobile-menu-open-button-container"),
            i = Fe("[data-mobile-menu-button]"),
            n = B("[data-menu-top-line]", this.element);
        this.state = Ki.getState(e), t.appendChild(e), this.currentTl && this.currentTl.pause();
        const s = this.currentTl = oe.timeline();
        s.to(i.reverse(), {
            yPercent: 100,
            stagger: this.menuButtons.length > 2 ? .05 : .1,
            duration: this.menuButtons.length > 2 ? .15 : .3
        }, "<"), s.to(n, {
            scaleX: 0,
            duration: .25
        }, "<"), s.to(this.openButton, {
            yPercent: 0,
            duration: .3
        }, "-=0.2"), s.to(this.closeButton, {
            yPercent: 100,
            duration: .3
        }, "<"), s.call(() => {
            this.element.style.opacity = "0", this.element.style.pointerEvents = "none", this.closed = !0, this.element.removeAttribute("menu-open")
        }), Ki.from(this.state, {
            duration: .5,
            ease: "power2.inOut",
            absolute: !0,
            scale: !1
        })
    }
}
class Za {
    element;
    orangeLinks;
    clickedOrangeLink = !1;
    mobileMenu;
    constructor() {
        this.orangeLinks = Fe("[data-link-orange-section]") || [], this.orangeLinks.forEach(e => {
            e.addEventListener("click", this.onClickOrangeLink.bind(this, e))
        }), this.createMobileMenu()
    }
    destroy() {
        this.orangeLinks.forEach(e => {
            e.removeEventListener("click", this.onClickOrangeLink.bind(this, e))
        })
    }
    onScroll(e) {}
    createMobileMenu() {
        this.mobileMenu = new I_
    }
    afterEnter() {}
    onFirstLoad() {}
    afterTransition() {}
    onResize() {}
    createHoverTextAnimation() {
        Fe("[data-text-hover-animation]")
            .forEach(t => {
                t.hasAttribute("text-animation-set") || new C_({
                    element: t
                })
            })
    }
    onClickOrangeLink(e) {
        this.clickedOrangeLink = !0
    }
    beforePreloaderAnimationEnd() {}
    afterPreloaderAnimation() {}
    render() {}
}
class z_ {
    element;
    linkIndicator;
    links;
    scroll;
    scrollTop;
    currentLinkIndex;
    sections;
    activeSection;
    isAutoScrolling;
    sectionsElements;
    currentLink = null;
    rootIndicator = B("[data-navbar-shrink-indicator-container]");
    textContainer = B("[data-link-select-text]");
    mobileMenuButtons = Fe("[data-mobile-menu-button]");
    textTween = null;
    constructor({
        scroll: e
    }) {
        this.element = B("#navbar"), this.links = Fe("button[data-navbar-link]", this.element), this.scroll = e, this.currentLinkIndex = 0, this.scrollTop = 0, this.isAutoScrolling = !1, this.sections = [], this.sectionsElements = [B("#hero"), B("#work"), B("#services"), B("#approach"), B("#about")], this.linkIndicator = B("span[data-navbar-link-indicator]"), this.setSectionsData(), this.addEventListeners()
    }
    onSelectLink(e, t, i) {
        const n = B("span[data-navbar-link-indicator-container]", e),
            s = Ki.getState(this.linkIndicator);
        n.appendChild(this.linkIndicator), this.currentLink = e;
        let o = this.getDuration(this.currentLinkIndex, t);
        const a = this.rootIndicator.getBoundingClientRect()
            .left - e.getBoundingClientRect()
            .left;
        this.currentLinkIndex = t;
        const l = e.getAttribute("data-target"),
            u = l?.split("#")[1];
        this.mobileMenuButtons.forEach(h => {
            h.classList.remove("selected")
        });
        const c = B(`[data-mobile-menu-button][data-target="${l}"]`);
        c && c.classList.add("selected"), this.sections.forEach(h => {
            h.id === u && (this.activeSection = h)
        }), Ki.from(s, {
            duration: o,
            ease: "power2.inOut",
            absolute: !0,
            scale: !1
        }), this.textTween && this.textTween.pause(), this.textTween = oe.to(this.textContainer, {
            duration: o,
            x: a,
            ease: "power2.inOut"
        }), i && l && this.scroll.lenis.scrollTo(l, {
            duration: 2.5,
            onStart: () => {
                this.isAutoScrolling = !0
            }
        })
    }
    getDuration(e, t) {
        let i = 1;
        return Math.abs(e - t) === 4 ? i = .7 : Math.abs(e - t) === 3 ? i = .6 : Math.abs(e - t) === 2 ? i = .5 : Math.abs(e - t) === 1 && (i = .4), i
    }
    onSelectHero() {
        const e = Ki.getState(this.linkIndicator);
        this.rootIndicator.appendChild(this.linkIndicator);
        const t = this.getDuration(this.currentLinkIndex, 0);
        this.currentLinkIndex = 0, this.currentLink = null, this.activeSection = this.sections[0], this.mobileMenuButtons.forEach(i => {
            i.classList.remove("selected")
        }), Ki.from(e, {
            duration: t,
            ease: "power2.inOut",
            absolute: !0,
            scale: !1
        }), this.textTween && this.textTween.pause(), this.textTween = oe.to(this.textContainer, {
            duration: t,
            ease: "power2.inOut",
            x: 0
        })
    }
    setSectionsData() {
        const [e, ...t] = this.sectionsElements, i = e.getBoundingClientRect(), n = {
            id: "hero",
            top: i.top,
            height: i.height,
            navbarIndex: 0
        };
        this.sections.push(n), this.activeSection = n, t.forEach((s, o) => {
            const a = s.getBoundingClientRect(),
                l = {
                    id: s.id,
                    top: a.top,
                    height: a.height,
                    navbarIndex: o + 1
                };
            this.sections.push(l)
        })
    }
    updateSectionsData() {
        this.sections.forEach((e, t) => {
            const i = this.sectionsElements[t].getBoundingClientRect();
            e.top = i.top + this.scrollTop, e.height = i.height
        })
    }
    onScroll(e) {
        this.scrollTop = e, !this.isAutoScrolling && this.sections.forEach(t => {
            this.scrollTop >= t.top && this.scrollTop <= t.top + t.height && this.activeSection.id !== t.id && (t.navbarIndex === 0 ? this.onSelectHero() : this.onSelectLink(this.links[t.navbarIndex - 1], t.navbarIndex, !1))
        })
    }
    addEventListeners() {
        this.links.forEach((t, i) => {
            t.addEventListener("click", this.onSelectLink.bind(this, t, i + 1, !0))
        }), this.mobileMenuButtons.forEach((t, i) => {
            t.addEventListener("click", () => {
                this.links[i]?.click()
            })
        }), window.addEventListener("resize", this.onResize.bind(this)), window.addEventListener("wheel", () => {
            this.isAutoScrolling = !1
        }), ["touchstart", "touchend", "touchcancel", "touchmove"].forEach(t => {
            window.addEventListener(t, () => {
                this.isAutoScrolling = !1
            })
        })
    }
    onResize() {
        this.updateSectionsData(), this.updateTextPosition()
    }
    updateTextPosition() {
        const e = this.currentLink ? this.rootIndicator.getBoundingClientRect()
            .left - this.currentLink.getBoundingClientRect()
            .left : 0;
        oe.set(this.textContainer, {
            x: e
        })
    }
    removeEventListeners() {
        this.links.forEach((t, i) => {
            t.removeEventListener("click", this.onSelectLink.bind(this, t, i + 1, !0))
        }), this.mobileMenuButtons.forEach((t, i) => {
            t.removeEventListener("click", () => {
                this.links[i]?.click()
            })
        }), window.removeEventListener("resize", this.onResize.bind(this)), window.removeEventListener("wheel", () => {
            this.isAutoScrolling = !1
        }), ["touchstart", "touchend", "touchcancel", "touchmove"].forEach(t => {
            window.removeEventListener(t, () => {
                this.isAutoScrolling = !1
            })
        })
    }
    destroy() {
        this.element.classList.remove("visible-on-desktop"), this.rootIndicator.appendChild(this.linkIndicator), oe.set(this.textContainer, {
            x: 0
        }), this.removeEventListeners()
    }
}
class V_ {
    wrapper;
    container;
    cards;
    constructor() {
        this.container = B("#services-cards-container"), this.wrapper = B("#services-cards-wrapper"), this.cards = Fe("[data-service-card]", this.container), oe.timeline({
                scrollTrigger: {
                    trigger: this.wrapper,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: !0,
                    invalidateOnRefresh: !0
                }
            })
            .fromTo(this.container, {
                xPercent: 25
            }, {
                xPercent: () => window.innerWidth > 768 ? -120 : -140,
                duration: 1,
                ease: "none"
            }, "<")
    }
}
class Sg {
    textElement;
    circleElement;
    container;
    content;
    constructor({
        container: e
    }) {
        this.container = e, this.textElement = B("[data-rotated-text]", this.container), this.circleElement = B("[data-rotated-circle]", this.container), this.content = B("[data-rotated-content]", this.container), this.setupLetters(), this.updateLayout(), this.addEventListeners()
    }
    setupLetters() {
        const e = this.textElement.textContent?.trimEnd();
        this.textElement.textContent = "", e.split("")
            .forEach((i, n) => {
                const s = document.createElement("span");
                s.setAttribute("data-char-container", "true"), s.style.position = "absolute", s.style.transformOrigin = "center";
                const o = document.createElement("span");
                o.setAttribute("data-char", "true"), o.style.setProperty("--char-index", n.toString()), o.textContent = i, s.append(o), this.textElement.appendChild(s)
            })
    }
    updateLayout() {
        const e = Fe('span[data-char-container="true"]', this.textElement),
            t = e.length;
        e.forEach((i, n) => {
            const s = n / t * 2 * Math.PI,
                o = s + Math.PI / 2,
                a = i;
            a.style.setProperty("--angle", `${s}rad`);
            let l = "";
            a.textContent === "•" && (l = "scale(2)"), a.style.transform = `translate(-50%, -50%) rotate(${o}rad) ${l}`
        })
    }
    addEventListeners() {
        window.addEventListener("resize", this.updateLayout.bind(this))
    }
    destroy() {
        window.removeEventListener("resize", this.updateLayout.bind(this))
    }
}
class H_ {
    container;
    position;
    lerp;
    constructor({
        element: e,
        lerp: t
    }) {
        this.container = e, this.lerp = t || .1, this.position = {
            current: {
                x: 0,
                y: 0
            },
            target: {
                x: 0,
                y: 0
            }
        }, this.addEventListeners()
    }
    onMouseMove(e) {
        this.position.target = {
            x: e.clientX,
            y: e.clientY
        }
    }
    addEventListeners() {
        window.addEventListener("mousemove", this.onMouseMove.bind(this))
    }
    render() {
        this.position.current.x = oe.utils.interpolate(this.position.current.x, this.position.target.x, this.lerp), this.position.current.y = oe.utils.interpolate(this.position.current.y, this.position.target.y, this.lerp), this.container.style.transform = `translate(calc(${this.position.current.x}px - 50%),calc( ${this.position.current.y}px - 50%))`
    }
    destroy() {
        window.removeEventListener("mousemove", this.onMouseMove.bind(this))
    }
}
class Tg {
    container;
    rotatedTextElement;
    works = Fe("[data-work-card]");
    firstEntered = !1;
    cursor;
    constructor() {
        this.container = B("#works-cursor"), this.rotatedTextElement = new Sg({
            container: this.container
        }), this.cursor = new H_({
            element: this.container
        }), this.setVisibility()
    }
    setVisibility() {
        this.works.forEach(e => {
            e.addEventListener("mouseenter", this.onMouseEnter.bind(this)), e.addEventListener("mouseleave", this.onMouseLeave.bind(this))
        })
    }
    onMouseEnter(e) {
        this.cursor.position.target = {
            x: e.clientX,
            y: e.clientY
        }, this.firstEntered || (this.cursor.position.current = this.cursor.position.target, this.firstEntered = !0), this.rotatedTextElement.content.classList.add("is-active")
    }
    onMouseLeave() {
        this.rotatedTextElement.content.classList.remove("is-active")
    }
    destroy() {
        this.rotatedTextElement.content.classList.remove("is-active"), this.rotatedTextElement.destroy(), this.firstEntered = !1, this.cursor.destroy(), this.works.forEach(e => {
            e.removeEventListener("mouseenter", this.onMouseEnter.bind(this)), e.removeEventListener("mouseleave", this.onMouseLeave.bind(this))
        })
    }
    render() {
        this.cursor.render()
    }
}
/*!
 * strings: 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
const q_ = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2642\u2640]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDD27\uDCBC\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCC\uDFCB]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;

function kg(r) {
    let e = r.nodeType,
        t = "";
    if (e === 1 || e === 9 || e === 11) {
        if (typeof r.textContent == "string") return r.textContent;
        for (r = r.firstChild; r; r = r.nextSibling) t += kg(r)
    } else if (e === 3 || e === 4) return r.nodeValue;
    return t
}
/*!
 * SplitText: 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
let So, Jc, Pg, la, Ag, Su, $_ = /(?:\r|\n|\t\t)/g,
    U_ = /(?:\s\s+)/g,
    W_ = " ",
    Fg = r => {
        So = document, Jc = window, la = la || r || Jc.gsap || console.warn("Please gsap.registerPlugin(SplitText)"), la && (Su = la.utils.toArray, Ag = la.core.context || function() {}, Pg = 1)
    },
    Lg = r => Jc.getComputedStyle(r),
    jh = r => r.position === "absolute" || r.absolute === !0,
    Y_ = (r, e) => {
        let t = e.length,
            i;
        for (; --t > -1;)
            if (i = e[t], r.substr(0, i.length) === i) return i.length
    },
    X_ = " style='position:relative;display:inline-block;'",
    dd = (r = "", e) => {
        let t = ~r.indexOf("++"),
            i = 1;
        return t && (r = r.split("++")
            .join("")), () => "<" + e + X_ + (r ? " class='" + r + (t ? i++ : "") + "'>" : ">")
    },
    Gh = (r, e, t) => {
        let i = r.nodeType;
        if (i === 1 || i === 9 || i === 11)
            for (r = r.firstChild; r; r = r.nextSibling) Gh(r, e, t);
        else(i === 3 || i === 4) && (r.nodeValue = r.nodeValue.split(e)
            .join(t))
    },
    dc = (r, e) => {
        let t = e.length;
        for (; --t > -1;) r.push(e[t])
    },
    pd = (r, e, t) => {
        let i;
        for (; r && r !== e;) {
            if (i = r._next || r.nextSibling, i) return i.textContent.charAt(0) === t;
            r = r.parentNode || r._parent
        }
    },
    Og = r => {
        let e = Su(r.childNodes),
            t = e.length,
            i, n;
        for (i = 0; i < t; i++) n = e[i], n._isSplit ? Og(n) : i && n.previousSibling && n.previousSibling.nodeType === 3 ? (n.previousSibling.nodeValue += n.nodeType === 3 ? n.nodeValue : n.firstChild.nodeValue, r.removeChild(n)) : n.nodeType !== 3 && (r.insertBefore(n.firstChild, n), r.removeChild(n))
    },
    ln = (r, e) => parseFloat(e[r]) || 0,
    j_ = (r, e, t, i, n, s, o) => {
        let a = Lg(r),
            l = ln("paddingLeft", a),
            u = -999,
            c = ln("borderBottomWidth", a) + ln("borderTopWidth", a),
            h = ln("borderLeftWidth", a) + ln("borderRightWidth", a),
            f = ln("paddingTop", a) + ln("paddingBottom", a),
            g = ln("paddingLeft", a) + ln("paddingRight", a),
            m = ln("fontSize", a) * (e.lineThreshold || .2),
            d = a.textAlign,
            p = [],
            y = [],
            b = [],
            w = e.wordDelimiter || " ",
            S = e.tag ? e.tag : e.span ? "span" : "div",
            x = e.type || e.split || "chars,words,lines",
            P = n && ~x.indexOf("lines") ? [] : null,
            C = ~x.indexOf("words"),
            A = ~x.indexOf("chars"),
            k = jh(e),
            I = e.linesClass,
            Y = ~(I || "")
            .indexOf("++"),
            V = [],
            q = a.display === "flex",
            K = r.style.display,
            W, J, T, R, Q, se, ue, ce, le, Z, Te, ke;
        for (Y && (I = I.split("++")
                .join("")), q && (r.style.display = "block"), J = r.getElementsByTagName("*"), T = J.length, Q = [], W = 0; W < T; W++) Q[W] = J[W];
        if (P || k)
            for (W = 0; W < T; W++) R = Q[W], se = R.parentNode === r, (se || k || A && !C) && (ke = R.offsetTop, P && se && Math.abs(ke - u) > m && (R.nodeName !== "BR" || W === 0) && (ue = [], P.push(ue), u = ke), k && (R._x = R.offsetLeft, R._y = ke, R._w = R.offsetWidth, R._h = R.offsetHeight), P && ((R._isSplit && se || !A && se || C && se || !C && R.parentNode.parentNode === r && !R.parentNode._isSplit) && (ue.push(R), R._x -= l, pd(R, r, w) && (R._wordEnd = !0)), R.nodeName === "BR" && (R.nextSibling && R.nextSibling.nodeName === "BR" || W === 0) && P.push([])));
        for (W = 0; W < T; W++) {
            if (R = Q[W], se = R.parentNode === r, R.nodeName === "BR") {
                P || k ? (R.parentNode && R.parentNode.removeChild(R), Q.splice(W--, 1), T--) : C || r.appendChild(R);
                continue
            }
            if (k && (le = R.style, !C && !se && (R._x += R.parentNode._x, R._y += R.parentNode._y), le.left = R._x + "px", le.top = R._y + "px", le.position = "absolute", le.display = "block", le.width = R._w + 1 + "px", le.height = R._h + "px"), !C && A)
                if (R._isSplit)
                    for (R._next = J = R.nextSibling, R.parentNode.appendChild(R); J && J.nodeType === 3 && J.textContent === " ";) R._next = J.nextSibling, R.parentNode.appendChild(J), J = J.nextSibling;
                else R.parentNode._isSplit ? (R._parent = R.parentNode, !R.previousSibling && R.firstChild && (R.firstChild._isFirst = !0), R.nextSibling && R.nextSibling.textContent === " " && !R.nextSibling.nextSibling && V.push(R.nextSibling), R._next = R.nextSibling && R.nextSibling._isFirst ? null : R.nextSibling, R.parentNode.removeChild(R), Q.splice(W--, 1), T--) : se || (ke = !R.nextSibling && pd(R.parentNode, r, w), R.parentNode._parent && R.parentNode._parent.appendChild(R), ke && R.parentNode.appendChild(So.createTextNode(" ")), S === "span" && (R.style.display = "inline"), p.push(R));
            else R.parentNode._isSplit && !R._isSplit && R.innerHTML !== "" ? y.push(R) : A && !R._isSplit && (S === "span" && (R.style.display = "inline"), p.push(R))
        }
        for (W = V.length; --W > -1;) V[W].parentNode.removeChild(V[W]);
        if (P) {
            for (k && (Z = So.createElement(S), r.appendChild(Z), Te = Z.offsetWidth + "px", ke = Z.offsetParent === r ? 0 : r.offsetLeft, r.removeChild(Z)), le = r.style.cssText, r.style.cssText = "display:none;"; r.firstChild;) r.removeChild(r.firstChild);
            for (ce = w === " " && (!k || !C && !A), W = 0; W < P.length; W++) {
                for (ue = P[W], Z = So.createElement(S), Z.style.cssText = "display:block;text-align:" + d + ";position:" + (k ? "absolute;" : "relative;"), I && (Z.className = I + (Y ? W + 1 : "")), b.push(Z), T = ue.length, J = 0; J < T; J++) ue[J].nodeName !== "BR" && (R = ue[J], Z.appendChild(R), ce && R._wordEnd && Z.appendChild(So.createTextNode(" ")), k && (J === 0 && (Z.style.top = R._y + "px", Z.style.left = l + ke + "px"), R.style.top = "0px", ke && (R.style.left = R._x - ke + "px")));
                T === 0 ? Z.innerHTML = "&nbsp;" : !C && !A && (Og(Z), Gh(Z, " ", " ")), k && (Z.style.width = Te, Z.style.height = R._h + "px"), r.appendChild(Z)
            }
            r.style.cssText = le
        }
        k && (o > r.clientHeight && (r.style.height = o - f + "px", r.clientHeight < o && (r.style.height = o + c + "px")), s > r.clientWidth && (r.style.width = s - g + "px", r.clientWidth < s && (r.style.width = s + h + "px"))), q && (K ? r.style.display = K : r.style.removeProperty("display")), dc(t, p), C && dc(i, y), dc(n, b)
    },
    G_ = (r, e, t, i) => {
        let n = e.tag ? e.tag : e.span ? "span" : "div",
            s = e.type || e.split || "chars,words,lines",
            o = ~s.indexOf("chars"),
            a = jh(e),
            l = e.wordDelimiter || " ",
            u = A => A === l || A === W_ && l === " ",
            c = l !== " " ? "" : a ? "&#173; " : " ",
            h = "</" + n + ">",
            f = 1,
            g = e.specialChars ? typeof e.specialChars == "function" ? e.specialChars : Y_ : null,
            m, d, p, y, b, w, S, x, P = So.createElement("div"),
            C = r.parentNode;
        for (C.insertBefore(P, r), P.textContent = r.nodeValue, C.removeChild(r), r = P, m = kg(r), S = m.indexOf("<") !== -1, e.reduceWhiteSpace !== !1 && (m = m.replace(U_, " ")
                .replace($_, "")), S && (m = m.split("<")
                .join("{{LT}}")), b = m.length, d = (m.charAt(0) === " " ? c : "") + t(), p = 0; p < b; p++)
            if (w = m.charAt(p), g && (x = g(m.substr(p), e.specialChars))) w = m.substr(p, x || 1), d += o && w !== " " ? i() + w + "</" + n + ">" : w, p += x - 1;
            else if (u(w) && !u(m.charAt(p - 1)) && p) {
            for (d += f ? h : "", f = 0; u(m.charAt(p + 1));) d += c, p++;
            p === b - 1 ? d += c : m.charAt(p + 1) !== ")" && (d += c + t(), f = 1)
        } else w === "{" && m.substr(p, 6) === "{{LT}}" ? (d += o ? i() + "{{LT}}</" + n + ">" : "{{LT}}", p += 5) : w.charCodeAt(0) >= 55296 && w.charCodeAt(0) <= 56319 || m.charCodeAt(p + 1) >= 65024 && m.charCodeAt(p + 1) <= 65039 ? (y = ((m.substr(p, 12)
                .split(q_) || [])[1] || "")
            .length || 2, d += o && w !== " " ? i() + m.substr(p, y) + "</" + n + ">" : m.substr(p, y), p += y - 1) : d += o && w !== " " ? i() + w + "</" + n + ">" : w;
        r.outerHTML = d + (f ? h : ""), S && Gh(C, "{{LT}}", "<")
    },
    Rg = (r, e, t, i) => {
        let n = Su(r.childNodes),
            s = n.length,
            o = jh(e),
            a, l;
        if (r.nodeType !== 3 || s > 1) {
            for (e.absolute = !1, a = 0; a < s; a++) l = n[a], l._next = l._isFirst = l._parent = l._wordEnd = null, (l.nodeType !== 3 || /\S+/.test(l.nodeValue)) && (o && l.nodeType !== 3 && Lg(l)
                .display === "inline" && (l.style.display = "inline-block", l.style.position = "relative"), l._isSplit = !0, Rg(l, e, t, i));
            e.absolute = o, r._isSplit = !0;
            return
        }
        G_(r, e, t, i)
    };
class so {
    constructor(e, t) {
        Pg || Fg(), this.elements = Su(e), this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = t || {}, Ag(this), this.split(t)
    }
    split(e) {
        this.isSplit && this.revert(), this.vars = e = e || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        let t = this.elements.length,
            i = e.tag ? e.tag : e.span ? "span" : "div",
            n = dd(e.wordsClass, i),
            s = dd(e.charsClass, i),
            o, a, l;
        for (; --t > -1;) l = this.elements[t], this._originals[t] = {
            html: l.innerHTML,
            style: l.getAttribute("style")
        }, o = l.clientHeight, a = l.clientWidth, Rg(l, e, n, s), j_(l, e, this.chars, this.words, this.lines, a, o);
        return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
    }
    revert() {
        let e = this._originals;
        if (!e) throw "revert() call wasn't scoped properly.";
        return this.elements.forEach((t, i) => {
            t.innerHTML = e[i].html, t.setAttribute("style", e[i].style || "")
        }), this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
    }
    static create(e, t) {
        return new so(e, t)
    }
}
so.version = "3.12.7";
so.register = Fg;
class Mg {
    elements;
    wrapper = B("#about-wrapper");
    aboutScrollContainer = B("[data-about-scroll-container]");
    aboutTitle = B("[data-about-title]");
    topLines;
    heights = [];
    constructor() {
        this.elements = Fe("[data-about-element]")
    }
    setupLayout() {
        this.setupBottomHeadlineLayout(), this.setupHeights();
        const e = .08 * Math.max(window.innerWidth, window.innerHeight),
            t = Fl(B("[data-about-content-text]", this.elements[this.elements.length - 2]));
        let i = 0;
        for (let n = 0; n < this.elements.length - 1; n++) i += this.heights[n].title;
        i += t, i + e > window.innerHeight ? this.killStickyLayout() : this.setupStickyElements()
    }
    setupStickyElements() {
        let e = [];
        const t = this.wrapper.style.getPropertyValue("--top-active-value");
        this.wrapper.style.setProperty("--top-value", t), this.elements.forEach((s, o) => {
            let a = 0;
            s.style.position = "sticky";
            for (let c = 0; c < o; c++) {
                const h = this.heights[c].title;
                a += h
            }
            let l = 0;
            for (let c = o + 1; c < this.elements.length; c++) {
                const h = this.heights[c].title,
                    f = this.heights[c].content,
                    g = this.heights[c - 1].content;
                l += h + f - g
            }
            e.push(l);
            let u = 0;
            o > 0 && (u = e[o - 1] + a), s.style.paddingTop = `${a}px`, s.style.paddingBottom = `${l}px`, s.style.marginTop = `${-u}px`
        });
        const i = Fl(this.aboutTitle);
        let n = 0;
        for (let s = 0; s < this.elements.length - 1; s++) n += this.heights[s].content;
        n += 2, this.aboutScrollContainer.style.height = `calc(${n + i}px)`, this.aboutScrollContainer.style.top = `calc(-1*(${n}px))`
    }
    killStickyLayout() {
        this.wrapper.style.setProperty("--top-value", "0px"), this.aboutScrollContainer.style.height = "auto", this.aboutScrollContainer.style.top = "0px", this.elements.forEach(e => {
            e.style.position = "relative", e.style.paddingTop = "0px", e.style.paddingBottom = "0px", e.style.marginTop = "0px"
        })
    }
    setupBottomHeadlineLayout() {
        const e = B("[data-about-top-lines-text]"),
            t = `${e.textContent}`,
            i = B("[data-about-top-lines]"),
            n = B("[data-about-bottom-lines]");
        this.topLines = new so(e, {
            type: "lines"
        });
        let s = "";
        for (let a = 0; a < 3; a++) s += this.topLines.lines[a].textContent;
        i.textContent = s;
        const o = t?.split(s);
        n.textContent = o ? o[1] : ""
    }
    setupHeights() {
        this.heights = [], this.elements.forEach(e => {
            const t = B("[data-about-title]", e),
                i = B("[data-about-content]", e),
                n = Fl(t),
                s = Fl(i);
            this.heights.push({
                title: n,
                content: s
            })
        })
    }
    onResize() {
        requestAnimationFrame(() => {
            this.topLines?.revert(), this.setupLayout()
        })
    }
    destroy() {
        window.removeEventListener("resize", this.onResize.bind(this))
    }
}
class Bg {
    element = B("[data-marquee]");
    halfs = Fe("[data-marquee-half]", this.element);
    tweens = [];
    constructor() {
        const e = Fe("[data-arrow]", this.element);
        let t = oe.fromTo(this.halfs, {
                xPercent: -100
            }, {
                xPercent: 0,
                duration: 15,
                repeat: -1,
                ease: "none"
            })
            .totalProgress(.5)
            .pause();
        const n = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.maxTouchPoints > 0 ? oe.to(this.element, {
            scrollTrigger: {
                trigger: this.element,
                start: "top bottom",
                end: "bottom top",
                onEnter: () => {
                    t.play()
                },
                onLeaveBack: () => {
                    t.pause()
                },
                onEnterBack: () => {
                    t.play()
                },
                onLeave: () => {
                    t.pause()
                }
            }
        }) : oe.to(this.element, {
            scrollTrigger: {
                trigger: this.element,
                start: "top bottom",
                end: "bottom top",
                scrub: !0,
                onUpdate: s => {
                    t.timeScale(-s.direction), s.direction === 1 && e.forEach(o => {
                        o.classList.add("rotated-180")
                    }), s.direction === -1 && e.forEach(o => {
                        o.classList.remove("rotated-180")
                    })
                },
                onEnter: () => {
                    t.play()
                },
                onLeaveBack: () => {
                    t.pause()
                },
                onEnterBack: () => {
                    t.play()
                },
                onLeave: () => {
                    t.pause()
                }
            },
            x: "-20vw",
            duration: 10,
            ease: "none"
        });
        this.tweens = [t, n]
    }
    destroy() {
        this.tweens.forEach(e => {
            e?.kill()
        })
    }
}
class Ng {
    element;
    lines;
    linesSplit;
    isVisible;
    observer;
    observerOptions;
    played = !1;
    constructor({
        element: e
    }) {
        this.element = e, this.observerOptions = {}, this.element.dataset.animationThreshold && (this.observerOptions.threshold = parseFloat(this.element.dataset.animationThreshold)), this.setupLines()
    }
    setupLines() {
        this.lines = {
            outerLines: [],
            innerLines: []
        }, this.linesSplit = new so(this.element, {
            type: "lines"
        });
        const e = [],
            t = this.element.style.getPropertyValue("font-size"),
            i = this.element.style.getPropertyValue("line-height"),
            n = parseFloat(i) / 100;
        this.linesSplit.lines.forEach(s => {
            s.style.height = `calc(${t}*${n})`, s.style.overflow = "visible";
            const o = document.createElement("div");
            o.style.display = "inline-block", o.style.overflow = "clip", o.style.lineHeight = "140%";
            let a = s.textContent;
            o.innerHTML = a, s.innerHTML = "", s.appendChild(o);
            let l = document.createElement("div"),
                u = s.textContent;
            l.innerHTML = u, o.innerHTML = "", o.appendChild(l), e.push(l)
        }), this.lines.outerLines = this.linesSplit.lines, this.lines.innerLines = e, oe.set(this.lines.innerLines, {
            yPercent: 100
        }), oe.set(this.lines.outerLines, {
            yPercent: 50
        }), oe.set(this.element, {
            autoAlpha: 1
        })
    }
    playLines(e) {
        this.played = !0, oe.to(this.lines.innerLines, {
            yPercent: 0,
            stagger: .1 / this.lines.innerLines.length,
            ease: "expo.out",
            duration: .8,
            delay: e || 0
        }), oe.to(this.lines.outerLines, {
            yPercent: 0,
            stagger: .1 / this.lines.outerLines.length,
            ease: "expo.out",
            duration: .6,
            delay: e || 0
        })
    }
    onVisible() {}
    onInvisible() {}
    onResize() {
        this.linesSplit.revert(), this.played || this.setupLines()
    }
    destroy() {
        this.linesSplit?.revert()
    }
    initiateObserver() {
        this.observer = new IntersectionObserver(e => {
            const t = e[0].isIntersecting;
            this.isVisible = t, t ? this.onVisible() : this.onInvisible()
        }, this.observerOptions), this.observer.observe(this.element)
    }
}
/*!
 * paths 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
let J_ = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
    K_ = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
    Z_ = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,
    Q_ = /(^[#\.][a-z]|[a-y][a-z])/i,
    ey = Math.PI / 180,
    ty = 180 / Math.PI,
    Rl = Math.sin,
    Ml = Math.cos,
    Hr = Math.abs,
    zn = Math.sqrt,
    iy = Math.atan2,
    Kc = 1e8,
    gd = r => typeof r == "string",
    Ig = r => typeof r == "number",
    ry = r => typeof r > "u",
    ny = {},
    sy = {},
    pu = 1e5,
    zg = r => Math.round((r + Kc) % 1 * pu) / pu || (r < 0 ? 0 : 1),
    et = r => Math.round(r * pu) / pu || 0,
    md = r => Math.round(r * 1e10) / 1e10 || 0,
    _d = (r, e, t, i) => {
        let n = r[e],
            s = i === 1 ? 6 : Zc(n, t, i);
        if ((s || !i) && s + t + 2 < n.length) return r.splice(e, 0, n.slice(0, t + s + 2)), n.splice(0, t + s), 1
    },
    Vg = (r, e, t) => {
        let i = r.length,
            n = ~~(t * i);
        if (r[n] > e) {
            for (; --n && r[n] > e;);
            n < 0 && (n = 0)
        } else
            for (; r[++n] < e && n < i;);
        return n < i ? n : i - 1
    },
    oy = (r, e) => {
        let t = r.length;
        for (r.reverse(); t--;) r[t].reversed || uy(r[t])
    },
    yd = (r, e) => (e.totalLength = r.totalLength, r.samples ? (e.samples = r.samples.slice(0), e.lookup = r.lookup.slice(0), e.minLength = r.minLength, e.resolution = r.resolution) : r.totalPoints && (e.totalPoints = r.totalPoints), e),
    ay = (r, e) => {
        let t = r.length,
            i = r[t - 1] || [],
            n = i.length;
        t && e[0] === i[n - 2] && e[1] === i[n - 1] && (e = i.concat(e.slice(2)), t--), r[t] = e
    };

function jl(r) {
    r = gd(r) && Q_.test(r) && document.querySelector(r) || r;
    let e = r.getAttribute ? r : 0,
        t;
    return e && (r = r.getAttribute("d")) ? (e._gsPath || (e._gsPath = {}), t = e._gsPath[r], t && !t._dirty ? t : e._gsPath[r] = Xa(r)) : r ? gd(r) ? Xa(r) : Ig(r[0]) ? [r] : r : console.warn("Expecting a <path> element or an SVG path data string")
}

function ly(r) {
    let e = [],
        t = 0;
    for (; t < r.length; t++) e[t] = yd(r[t], r[t].slice(0));
    return yd(r, e)
}

function uy(r) {
    let e = 0,
        t;
    for (r.reverse(); e < r.length; e += 2) t = r[e], r[e] = r[e + 1], r[e + 1] = t;
    r.reversed = !r.reversed
}
let cy = (r, e) => {
        let t = document.createElementNS("http://www.w3.org/2000/svg", "path"),
            i = [].slice.call(r.attributes),
            n = i.length,
            s;
        for (e = "," + e + ","; --n > -1;) s = i[n].nodeName.toLowerCase(), e.indexOf("," + s + ",") < 0 && t.setAttributeNS(null, s, i[n].nodeValue);
        return t
    },
    hy = {
        rect: "rx,ry,x,y,width,height",
        circle: "r,cx,cy",
        ellipse: "rx,ry,cx,cy",
        line: "x1,x2,y1,y2"
    },
    fy = (r, e) => {
        let t = e ? e.split(",") : [],
            i = {},
            n = t.length;
        for (; --n > -1;) i[t[n]] = +r.getAttribute(t[n]) || 0;
        return i
    };

function dy(r, e) {
    let t = r.tagName.toLowerCase(),
        i = .552284749831,
        n, s, o, a, l, u, c, h, f, g, m, d, p, y, b, w, S, x, P, C, A, k;
    return t === "path" || !r.getBBox ? r : (u = cy(r, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), k = fy(r, hy[t]), t === "rect" ? (a = k.rx, l = k.ry || a, s = k.x, o = k.y, g = k.width - a * 2, m = k.height - l * 2, a || l ? (d = s + a * (1 - i), p = s + a, y = p + g, b = y + a * i, w = y + a, S = o + l * (1 - i), x = o + l, P = x + m, C = P + l * i, A = P + l, n = "M" + w + "," + x + " V" + P + " C" + [w, C, b, A, y, A, y - (y - p) / 3, A, p + (y - p) / 3, A, p, A, d, A, s, C, s, P, s, P - (P - x) / 3, s, x + (P - x) / 3, s, x, s, S, d, o, p, o, p + (y - p) / 3, o, y - (y - p) / 3, o, y, o, b, o, w, S, w, x].join(",") + "z") : n = "M" + (s + g) + "," + o + " v" + m + " h" + -g + " v" + -m + " h" + g + "z") : t === "circle" || t === "ellipse" ? (t === "circle" ? (a = l = k.r, h = a * i) : (a = k.rx, l = k.ry, h = l * i), s = k.cx, o = k.cy, c = a * i, n = "M" + (s + a) + "," + o + " C" + [s + a, o + h, s + c, o + l, s, o + l, s - c, o + l, s - a, o + h, s - a, o, s - a, o - h, s - c, o - l, s, o - l, s + c, o - l, s + a, o - h, s + a, o].join(",") + "z") : t === "line" ? n = "M" + k.x1 + "," + k.y1 + " L" + k.x2 + "," + k.y2 : (t === "polyline" || t === "polygon") && (f = (r.getAttribute("points") + "")
        .match(K_) || [], s = f.shift(), o = f.shift(), n = "M" + s + "," + o + " L" + f.join(","), t === "polygon" && (n += "," + s + "," + o + "z")), u.setAttribute("d", Jh(u._gsRawPath = Xa(n))), e && r.parentNode && (r.parentNode.insertBefore(u, r), r.parentNode.removeChild(r)), u)
}

function Hg(r, e, t) {
    let i = r[e],
        n = r[e + 2],
        s = r[e + 4],
        o;
    return i += (n - i) * t, n += (s - n) * t, i += (n - i) * t, o = n + (s + (r[e + 6] - s) * t - n) * t - i, i = r[e + 1], n = r[e + 3], s = r[e + 5], i += (n - i) * t, n += (s - n) * t, i += (n - i) * t, et(iy(n + (s + (r[e + 7] - s) * t - n) * t - i, o) * ty)
}

function qg(r, e, t) {
    t = ry(t) ? 1 : md(t) || 0, e = md(e) || 0;
    let i = Math.max(0, ~~(Hr(t - e) - 1e-8)),
        n = ly(r);
    if (e > t && (e = 1 - e, t = 1 - t, oy(n), n.totalLength = 0), e < 0 || t < 0) {
        let A = Math.abs(~~Math.min(e, t)) + 1;
        e += A, t += A
    }
    n.totalLength || Js(n);
    let s = t > 1,
        o = Dd(n, e, ny, !0),
        a = Dd(n, t, sy),
        l = a.segment,
        u = o.segment,
        c = a.segIndex,
        h = o.segIndex,
        f = a.i,
        g = o.i,
        m = h === c,
        d = f === g && m,
        p, y, b, w, S, x, P, C;
    if (s || i) {
        for (p = c < h || m && f < g || d && a.t < o.t, _d(n, h, g, o.t) && (h++, p || (c++, d ? (a.t = (a.t - o.t) / (1 - o.t), f = 0) : m && (f -= g))), Math.abs(1 - (t - e)) < 1e-5 ? c = h - 1 : !a.t && c ? c-- : _d(n, c, f, a.t) && p && h++, o.t === 1 && (h = (h + 1) % n.length), S = [], x = n.length, P = 1 + x * i, C = h, P += (x - h + c) % x, w = 0; w < P; w++) ay(S, n[C++ % x]);
        n = S
    } else if (b = a.t === 1 ? 6 : Zc(l, f, a.t), e !== t)
        for (y = Zc(u, g, d ? o.t / a.t : o.t), m && (b += y), l.splice(f + b + 2), (y || g) && u.splice(0, g + y), w = n.length; w--;)(w < h || w > c) && n.splice(w, 1);
    else l.angle = Hg(l, f + b, 0), f += b, o = l[f], a = l[f + 1], l.length = l.totalLength = 0, l.totalPoints = n.totalPoints = 8, l.push(o, a, o, a, o, a, o, a);
    return n.totalLength = 0, n
}

function py(r, e, t) {
    e = e || 0, r.samples || (r.samples = [], r.lookup = []);
    let i = ~~r.resolution || 12,
        n = 1 / i,
        s = r.length,
        o = r[e],
        a = r[e + 1],
        l = e ? e / 6 * i : 0,
        u = r.samples,
        c = r.lookup,
        h = (e ? r.minLength : Kc) || Kc,
        f = u[l + t * i - 1],
        g = e ? u[l - 1] : 0,
        m, d, p, y, b, w, S, x, P, C, A, k, I, Y, V, q, K;
    for (u.length = c.length = 0, d = e + 2; d < s; d += 6) {
        if (p = r[d + 4] - o, y = r[d + 2] - o, b = r[d] - o, x = r[d + 5] - a, P = r[d + 3] - a, C = r[d + 1] - a, w = S = A = k = 0, Hr(p) < .01 && Hr(x) < .01 && Hr(b) + Hr(C) < .01) r.length > 8 && (r.splice(d, 6), d -= 6, s -= 6);
        else
            for (m = 1; m <= i; m++) Y = n * m, I = 1 - Y, w = S - (S = (Y * Y * p + 3 * I * (Y * y + I * b)) * Y), A = k - (k = (Y * Y * x + 3 * I * (Y * P + I * C)) * Y), q = zn(A * A + w * w), q < h && (h = q), g += q, u[l++] = g;
        o += p, a += x
    }
    if (f)
        for (f -= g; l < u.length; l++) u[l] += f;
    if (u.length && h) {
        if (r.totalLength = K = u[u.length - 1] || 0, r.minLength = h, K / h < 9999)
            for (q = V = 0, m = 0; m < K; m += h) c[q++] = u[V] < m ? ++V : V
    } else r.totalLength = u[0] = 0;
    return e ? g - u[e / 2 - 1] : g
}

function Js(r, e) {
    let t, i, n;
    for (n = t = i = 0; n < r.length; n++) r[n].resolution = ~~e || 12, i += r[n].length, t += py(r[n]);
    return r.totalPoints = i, r.totalLength = t, r
}

function Zc(r, e, t) {
    if (t <= 0 || t >= 1) return 0;
    let i = r[e],
        n = r[e + 1],
        s = r[e + 2],
        o = r[e + 3],
        a = r[e + 4],
        l = r[e + 5],
        u = r[e + 6],
        c = r[e + 7],
        h = i + (s - i) * t,
        f = s + (a - s) * t,
        g = n + (o - n) * t,
        m = o + (l - o) * t,
        d = h + (f - h) * t,
        p = g + (m - g) * t,
        y = a + (u - a) * t,
        b = l + (c - l) * t;
    return f += (y - f) * t, m += (b - m) * t, r.splice(e + 2, 4, et(h), et(g), et(d), et(p), et(d + (f - d) * t), et(p + (m - p) * t), et(f), et(m), et(y), et(b)), r.samples && r.samples.splice(e / 6 * r.resolution | 0, 0, 0, 0, 0, 0, 0, 0), 6
}

function Dd(r, e, t, i) {
    t = t || {}, r.totalLength || Js(r), (e < 0 || e > 1) && (e = zg(e));
    let n = 0,
        s = r[0],
        o, a, l, u, c, h, f;
    if (!e) f = h = n = 0, s = r[0];
    else if (e === 1) f = 1, n = r.length - 1, s = r[n], h = s.length - 8;
    else {
        if (r.length > 1) {
            for (l = r.totalLength * e, c = h = 0;
                (c += r[h++].totalLength) < l;) n = h;
            s = r[n], u = c - s.totalLength, e = (l - u) / (c - u) || 0
        }
        o = s.samples, a = s.resolution, l = s.totalLength * e, h = s.lookup.length ? s.lookup[~~(l / s.minLength)] || 0 : Vg(o, l, e), u = h ? o[h - 1] : 0, c = o[h], c < l && (u = c, c = o[++h]), f = 1 / a * ((l - u) / (c - u) + h % a), h = ~~(h / a) * 6, i && f === 1 && (h + 6 < s.length ? (h += 6, f = 0) : n + 1 < r.length && (h = f = 0, s = r[++n]))
    }
    return t.t = f, t.i = h, t.path = r, t.segment = s, t.segIndex = n, t
}

function vd(r, e, t, i) {
    let n = r[0],
        s = i || {},
        o, a, l, u, c, h, f, g, m;
    if ((e < 0 || e > 1) && (e = zg(e)), n.lookup || Js(r), r.length > 1) {
        for (l = r.totalLength * e, c = h = 0;
            (c += r[h++].totalLength) < l;) n = r[h];
        u = c - n.totalLength, e = (l - u) / (c - u) || 0
    }
    return o = n.samples, a = n.resolution, l = n.totalLength * e, h = n.lookup.length ? n.lookup[e < 1 ? ~~(l / n.minLength) : n.lookup.length - 1] || 0 : Vg(o, l, e), u = h ? o[h - 1] : 0, c = o[h], c < l && (u = c, c = o[++h]), f = 1 / a * ((l - u) / (c - u) + h % a) || 0, m = 1 - f, h = ~~(h / a) * 6, g = n[h], s.x = et((f * f * (n[h + 6] - g) + 3 * m * (f * (n[h + 4] - g) + m * (n[h + 2] - g))) * f + g), s.y = et((f * f * (n[h + 7] - (g = n[h + 1])) + 3 * m * (f * (n[h + 5] - g) + m * (n[h + 3] - g))) * f + g), t && (s.angle = n.totalLength ? Hg(n, h, f >= 1 ? 1 - 1e-9 : f || 1e-9) : n.angle || 0), s
}

function To(r, e, t, i, n, s, o) {
    let a = r.length,
        l, u, c, h, f;
    for (; --a > -1;)
        for (l = r[a], u = l.length, c = 0; c < u; c += 2) h = l[c], f = l[c + 1], l[c] = h * e + f * i + s, l[c + 1] = h * t + f * n + o;
    return r._dirty = 1, r
}

function gy(r, e, t, i, n, s, o, a, l) {
    if (r === a && e === l) return;
    t = Hr(t), i = Hr(i);
    let u = n % 360 * ey,
        c = Ml(u),
        h = Rl(u),
        f = Math.PI,
        g = f * 2,
        m = (r - a) / 2,
        d = (e - l) / 2,
        p = c * m + h * d,
        y = -h * m + c * d,
        b = p * p,
        w = y * y,
        S = b / (t * t) + w / (i * i);
    S > 1 && (t = zn(S) * t, i = zn(S) * i);
    let x = t * t,
        P = i * i,
        C = (x * P - x * w - P * b) / (x * w + P * b);
    C < 0 && (C = 0);
    let A = (s === o ? -1 : 1) * zn(C),
        k = A * (t * y / i),
        I = A * -(i * p / t),
        Y = (r + a) / 2,
        V = (e + l) / 2,
        q = Y + (c * k - h * I),
        K = V + (h * k + c * I),
        W = (p - k) / t,
        J = (y - I) / i,
        T = (-p - k) / t,
        R = (-y - I) / i,
        Q = W * W + J * J,
        se = (J < 0 ? -1 : 1) * Math.acos(W / zn(Q)),
        ue = (W * R - J * T < 0 ? -1 : 1) * Math.acos((W * T + J * R) / zn(Q * (T * T + R * R)));
    isNaN(ue) && (ue = f), !o && ue > 0 ? ue -= g : o && ue < 0 && (ue += g), se %= g, ue %= g;
    let ce = Math.ceil(Hr(ue) / (g / 4)),
        le = [],
        Z = ue / ce,
        Te = 4 / 3 * Rl(Z / 2) / (1 + Ml(Z / 2)),
        ke = c * t,
        Ye = h * t,
        G = h * -i,
        Xe = c * i,
        j;
    for (j = 0; j < ce; j++) n = se + j * Z, p = Ml(n), y = Rl(n), W = Ml(n += Z), J = Rl(n), le.push(p - Te * y, y + Te * p, W + Te * J, J - Te * W, W, J);
    for (j = 0; j < le.length; j += 2) p = le[j], y = le[j + 1], le[j] = p * ke + y * G + q, le[j + 1] = p * Ye + y * Xe + K;
    return le[j - 2] = a, le[j - 1] = l, le
}

function Xa(r) {
    let e = (r + "")
        .replace(Z_, k => {
            let I = +k;
            return I < 1e-4 && I > -1e-4 ? 0 : I
        })
        .match(J_) || [],
        t = [],
        i = 0,
        n = 0,
        s = 2 / 3,
        o = e.length,
        a = 0,
        l = "ERROR: malformed path: " + r,
        u, c, h, f, g, m, d, p, y, b, w, S, x, P, C, A = function(k, I, Y, V) {
            b = (Y - k) / 3, w = (V - I) / 3, d.push(k + b, I + w, Y - b, V - w, Y, V)
        };
    if (!r || !isNaN(e[0]) || isNaN(e[1])) return console.log(l), t;
    for (u = 0; u < o; u++)
        if (x = g, isNaN(e[u]) ? (g = e[u].toUpperCase(), m = g !== e[u]) : u--, h = +e[u + 1], f = +e[u + 2], m && (h += i, f += n), u || (p = h, y = f), g === "M") d && (d.length < 8 ? t.length -= 1 : a += d.length), i = p = h, n = y = f, d = [h, f], t.push(d), u += 2, g = "L";
        else if (g === "C") d || (d = [0, 0]), m || (i = n = 0), d.push(h, f, i + e[u + 3] * 1, n + e[u + 4] * 1, i += e[u + 5] * 1, n += e[u + 6] * 1), u += 6;
    else if (g === "S") b = i, w = n, (x === "C" || x === "S") && (b += i - d[d.length - 4], w += n - d[d.length - 3]), m || (i = n = 0), d.push(b, w, h, f, i += e[u + 3] * 1, n += e[u + 4] * 1), u += 4;
    else if (g === "Q") b = i + (h - i) * s, w = n + (f - n) * s, m || (i = n = 0), i += e[u + 3] * 1, n += e[u + 4] * 1, d.push(b, w, i + (h - i) * s, n + (f - n) * s, i, n), u += 4;
    else if (g === "T") b = i - d[d.length - 4], w = n - d[d.length - 3], d.push(i + b, n + w, h + (i + b * 1.5 - h) * s, f + (n + w * 1.5 - f) * s, i = h, n = f), u += 2;
    else if (g === "H") A(i, n, i = h, n), u += 1;
    else if (g === "V") A(i, n, i, n = h + (m ? n - i : 0)), u += 1;
    else if (g === "L" || g === "Z") g === "Z" && (h = p, f = y, d.closed = !0), (g === "L" || Hr(i - h) > .5 || Hr(n - f) > .5) && (A(i, n, h, f), g === "L" && (u += 2)), i = h, n = f;
    else if (g === "A") {
        if (P = e[u + 4], C = e[u + 5], b = e[u + 6], w = e[u + 7], c = 7, P.length > 1 && (P.length < 3 ? (w = b, b = C, c--) : (w = C, b = P.substr(2), c -= 2), C = P.charAt(1), P = P.charAt(0)), S = gy(i, n, +e[u + 1], +e[u + 2], +e[u + 3], +P, +C, (m ? i : 0) + b * 1, (m ? n : 0) + w * 1), u += c, S)
            for (c = 0; c < S.length; c++) d.push(S[c]);
        i = d[d.length - 2], n = d[d.length - 1]
    } else console.log(l);
    return u = d.length, u < 6 ? (t.pop(), u = 0) : d[0] === d[u - 2] && d[1] === d[u - 1] && (d.closed = !0), t.totalPoints = a + u, t
}

function my(r, e = 1) {
    let t = r[0],
        i = 0,
        n = [t, i],
        s = 2;
    for (; s < r.length; s += 2) n.push(t, i, r[s], i = (r[s] - t) * e / 2, t = r[s], -i);
    return n
}

function Qc(r, e) {
    Hr(r[0] - r[2]) < 1e-4 && Hr(r[1] - r[3]) < 1e-4 && (r = r.slice(2));
    let t = r.length - 2,
        i = +r[0],
        n = +r[1],
        s = +r[2],
        o = +r[3],
        a = [i, n, i, n],
        l = s - i,
        u = o - n,
        c = Math.abs(r[t] - i) < .001 && Math.abs(r[t + 1] - n) < .001,
        h, f, g, m, d, p, y, b, w, S, x, P, C, A, k;
    for (c && (r.push(s, o), s = i, o = n, i = r[t - 2], n = r[t - 1], r.unshift(i, n), t += 4), e = e || e === 0 ? +e : 1, g = 2; g < t; g += 2) h = i, f = n, i = s, n = o, s = +r[g + 2], o = +r[g + 3], !(i === s && n === o) && (m = l, d = u, l = s - i, u = o - n, p = zn(m * m + d * d), y = zn(l * l + u * u), b = zn((l / y + m / p) ** 2 + (u / y + d / p) ** 2), w = (p + y) * e * .25 / b, S = i - (i - h) * (p ? w / p : 0), x = i + (s - i) * (y ? w / y : 0), P = i - (S + ((x - S) * (p * 3 / (p + y) + .5) / 4 || 0)), C = n - (n - f) * (p ? w / p : 0), A = n + (o - n) * (y ? w / y : 0), k = n - (C + ((A - C) * (p * 3 / (p + y) + .5) / 4 || 0)), (i !== h || n !== f) && a.push(et(S + P), et(C + k), et(i), et(n), et(x + P), et(A + k)));
    return i !== s || n !== o || a.length < 4 ? a.push(et(s), et(o), et(s), et(o)) : a.length -= 2, a.length === 2 ? a.push(i, n, i, n, i, n) : c && (a.splice(0, 6), a.length = a.length - 6), a
}

function Jh(r) {
    Ig(r[0]) && (r = [r]);
    let e = "",
        t = r.length,
        i, n, s, o;
    for (n = 0; n < t; n++) {
        for (o = r[n], e += "M" + et(o[0]) + "," + et(o[1]) + " C", i = o.length, s = 2; s < i; s++) e += et(o[s++]) + "," + et(o[s++]) + " " + et(o[s++]) + "," + et(o[s++]) + " " + et(o[s++]) + "," + et(o[s]) + " ";
        o.closed && (e += "z")
    }
    return e
}
/*!
 * CustomEase 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
let nr, $g, Ug = () => nr || typeof window < "u" && (nr = window.gsap) && nr.registerPlugin && nr,
    wd = () => {
        nr = Ug(), nr ? (nr.registerEase("_CE", rn.create), $g = 1) : console.warn("Please gsap.registerPlugin(CustomEase)")
    },
    _y = 1e20,
    Bl = r => ~~(r * 1e3 + (r < 0 ? -.5 : .5)) / 1e3,
    yy = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,
    Dy = /[cLlsSaAhHvVtTqQ]/g,
    vy = r => {
        let e = r.length,
            t = _y,
            i;
        for (i = 1; i < e; i += 6) + r[i] < t && (t = +r[i]);
        return t
    },
    wy = (r, e, t) => {
        !t && t !== 0 && (t = Math.max(+r[r.length - 1], +r[1]));
        let i = +r[0] * -1,
            n = -t,
            s = r.length,
            o = 1 / (+r[s - 2] + i),
            a = -e || (Math.abs(+r[s - 1] - +r[1]) < .01 * (+r[s - 2] - +r[0]) ? vy(r) + n : +r[s - 1] + n),
            l;
        for (a ? a = 1 / a : a = -o, l = 0; l < s; l += 2) r[l] = (+r[l] + i) * o, r[l + 1] = (+r[l + 1] + n) * a
    },
    eh = function(r, e, t, i, n, s, o, a, l, u, c) {
        let h = (r + t) / 2,
            f = (e + i) / 2,
            g = (t + n) / 2,
            m = (i + s) / 2,
            d = (n + o) / 2,
            p = (s + a) / 2,
            y = (h + g) / 2,
            b = (f + m) / 2,
            w = (g + d) / 2,
            S = (m + p) / 2,
            x = (y + w) / 2,
            P = (b + S) / 2,
            C = o - r,
            A = a - e,
            k = Math.abs((t - o) * A - (i - a) * C),
            I = Math.abs((n - o) * A - (s - a) * C),
            Y;
        return u || (u = [{
            x: r,
            y: e
        }, {
            x: o,
            y: a
        }], c = 1), u.splice(c || u.length - 1, 0, {
            x,
            y: P
        }), (k + I) * (k + I) > l * (C * C + A * A) && (Y = u.length, eh(r, e, h, f, y, b, x, P, l, u, c), eh(x, P, w, S, d, p, o, a, l, u, c + 1 + (u.length - Y))), u
    };
class rn {
    constructor(e, t, i) {
        $g || wd(), this.id = e, this.setData(t, i)
    }
    setData(e, t) {
        t = t || {}, e = e || "0,0,1,1";
        let i = e.match(yy),
            n = 1,
            s = [],
            o = [],
            a = t.precision || 1,
            l = a <= 1,
            u, c, h, f, g, m, d, p, y;
        if (this.data = e, (Dy.test(e) || ~e.indexOf("M") && e.indexOf("C") < 0) && (i = Xa(e)[0]), u = i.length, u === 4) i.unshift(0, 0), i.push(1, 1), u = 8;
        else if ((u - 2) % 6) throw "Invalid CustomEase";
        for ((+i[0] != 0 || +i[u - 2] != 1) && wy(i, t.height, t.originY), this.segment = i, f = 2; f < u; f += 6) c = {
            x: +i[f - 2],
            y: +i[f - 1]
        }, h = {
            x: +i[f + 4],
            y: +i[f + 5]
        }, s.push(c, h), eh(c.x, c.y, +i[f], +i[f + 1], +i[f + 2], +i[f + 3], h.x, h.y, 1 / (a * 2e5), s, s.length - 1);
        for (u = s.length, f = 0; f < u; f++) d = s[f], p = s[f - 1] || d, (d.x > p.x || p.y !== d.y && p.x === d.x || d === p) && d.x <= 1 ? (p.cx = d.x - p.x, p.cy = d.y - p.y, p.n = d, p.nx = d.x, l && f > 1 && Math.abs(p.cy / p.cx - s[f - 2].cy / s[f - 2].cx) > 2 && (l = 0), p.cx < n && (p.cx ? n = p.cx : (p.cx = .001, f === u - 1 && (p.x -= .001, n = Math.min(n, .001), l = 0)))) : (s.splice(f--, 1), u--);
        if (u = 1 / n + 1 | 0, g = 1 / u, m = 0, d = s[0], l) {
            for (f = 0; f < u; f++) y = f * g, d.nx < y && (d = s[++m]), c = d.y + (y - d.x) / d.cx * d.cy, o[f] = {
                x: y,
                cx: g,
                y: c,
                cy: 0,
                nx: 9
            }, f && (o[f - 1].cy = c - o[f - 1].y);
            m = s[s.length - 1], o[u - 1].cy = m.y - c, o[u - 1].cx = m.x - o[o.length - 1].x
        } else {
            for (f = 0; f < u; f++) d.nx < f * g && (d = s[++m]), o[f] = d;
            m < s.length - 1 && (o[f - 1] = s[s.length - 2])
        }
        return this.ease = b => {
            let w = o[b * u | 0] || o[u - 1];
            return w.nx < b && (w = w.n), w.y + (b - w.x) / w.cx * w.cy
        }, this.ease.custom = this, this.id && nr && nr.registerEase(this.id, this.ease), this
    }
    getSVGData(e) {
        return rn.getSVGData(this, e)
    }
    static create(e, t, i) {
        return new rn(e, t, i)
            .ease
    }
    static register(e) {
        nr = e, wd()
    }
    static get(e) {
        return nr.parseEase(e)
    }
    static getSVGData(e, t) {
        t = t || {};
        let i = t.width || 100,
            n = t.height || 100,
            s = t.x || 0,
            o = (t.y || 0) + n,
            a = nr.utils.toArray(t.path)[0],
            l, u, c, h, f, g, m, d, p, y;
        if (t.invert && (n = -n, o = 0), typeof e == "string" && (e = nr.parseEase(e)), e.custom && (e = e.custom), e instanceof rn) l = Jh(To([e.segment], i, 0, 0, -n, s, o));
        else {
            for (l = [s, o], m = Math.max(5, (t.precision || 1) * 200), h = 1 / m, m += 2, d = 5 / m, p = Bl(s + h * i), y = Bl(o + e(h) * -n), u = (y - o) / (p - s), c = 2; c < m; c++) f = Bl(s + c * h * i), g = Bl(o + e(c * h) * -n), (Math.abs((g - y) / (f - p) - u) > d || c === m - 1) && (l.push(p, y), u = (g - y) / (f - p)), p = f, y = g;
            l = "M" + l.join(",")
        }
        return a && a.setAttribute("d", l), l
    }
}
rn.version = "3.12.7";
rn.headless = !0;
Ug() && nr.registerPlugin(rn);
/*!
 * MotionPathPlugin 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
let by = "x,translateX,left,marginLeft,xPercent".split(","),
    xy = "y,translateY,top,marginTop,yPercent".split(","),
    Ey = Math.PI / 180,
    zr, Wg, vo, th, pc, bd, Cy = () => zr || typeof window < "u" && (zr = window.gsap) && zr.registerPlugin && zr,
    ua = (r, e, t, i) => {
        let n = e.length,
            s = i === 2 ? 0 : i,
            o = 0;
        for (; o < n; o++) r[s] = parseFloat(e[o][t]), i === 2 && (r[s + 1] = 0), s += 2;
        return r
    },
    ko = (r, e, t) => parseFloat(r._gsap.get(r, e, t || "px")) || 0,
    Yg = r => {
        let e = r[0],
            t = r[1],
            i;
        for (i = 2; i < r.length; i += 2) e = r[i] += e, t = r[i + 1] += t
    },
    xd = (r, e, t, i, n, s, o, a, l) => (o.type === "cubic" ? e = [e] : (o.fromCurrent !== !1 && e.unshift(ko(t, i, a), n ? ko(t, n, l) : 0), o.relative && Yg(e), e = [(n ? Qc : my)(e, o.curviness)]), e = s(Xg(e, t, o)), gu(r, t, i, e, "x", a), n && gu(r, t, n, e, "y", l), Js(e, o.resolution || (o.curviness === 0 ? 20 : 12))),
    Sy = r => r,
    Ty = /[-+\.]*\d+\.?(?:e-|e\+)?\d*/g,
    Ed = (r, e, t) => {
        let i = Ri(r),
            n = 0,
            s = 0,
            o;
        return (r.tagName + "")
            .toLowerCase() === "svg" ? (o = r.viewBox.baseVal, o.width || (o = {
                width: +r.getAttribute("width"),
                height: +r.getAttribute("height")
            })) : o = e && r.getBBox && r.getBBox(), e && e !== "auto" && (n = e.push ? e[0] * (o ? o.width : r.offsetWidth || 0) : e.x, s = e.push ? e[1] * (o ? o.height : r.offsetHeight || 0) : e.y), t.apply(n || s ? i.apply({
                x: n,
                y: s
            }) : {
                x: i.e,
                y: i.f
            })
    },
    ih = (r, e, t, i) => {
        let n = Ri(r.parentNode, !0, !0),
            s = n.clone()
            .multiply(Ri(e)),
            o = Ed(r, t, n),
            {
                x: a,
                y: l
            } = Ed(e, i, n),
            u;
        return s.e = s.f = 0, i === "auto" && e.getTotalLength && e.tagName.toLowerCase() === "path" && (u = e.getAttribute("d")
            .match(Ty) || [], u = s.apply({
                x: +u[0],
                y: +u[1]
            }), a += u.x, l += u.y), u && (u = s.apply(e.getBBox()), a -= u.x, l -= u.y), s.e = a - o.x, s.f = l - o.y, s
    },
    Xg = (r, e, {
        align: t,
        matrix: i,
        offsetX: n,
        offsetY: s,
        alignOrigin: o
    }) => {
        let a = r[0][0],
            l = r[0][1],
            u = ko(e, "x"),
            c = ko(e, "y"),
            h, f, g;
        return !r || !r.length ? jl("M0,0L0,0") : (t && (t === "self" || (h = th(t)[0] || e) === e ? To(r, 1, 0, 0, 1, u - a, c - l) : (o && o[2] !== !1 ? zr.set(e, {
            transformOrigin: o[0] * 100 + "% " + o[1] * 100 + "%"
        }) : o = [ko(e, "xPercent") / -100, ko(e, "yPercent") / -100], f = ih(e, h, o, "auto"), g = f.apply({
            x: a,
            y: l
        }), To(r, f.a, f.b, f.c, f.d, u + f.e - (g.x - f.e), c + f.f - (g.y - f.f)))), i ? To(r, i.a, i.b, i.c, i.d, i.e, i.f) : (n || s) && To(r, 1, 0, 0, 1, n || 0, s || 0), r)
    },
    gu = (r, e, t, i, n, s) => {
        let o = e._gsap,
            a = o.harness,
            l = a && a.aliases && a.aliases[t],
            u = l && l.indexOf(",") < 0 ? l : t,
            c = r._pt = new Wg(r._pt, e, u, 0, 0, Sy, 0, o.set(e, u, r));
        c.u = vo(o.get(e, u, s)) || 0, c.path = i, c.pp = n, r._props.push(u)
    },
    ky = (r, e) => t => r || e !== 1 ? qg(t, r, e) : t;
const Kh = {
    version: "3.12.7",
    name: "motionPath",
    register(r, e, t) {
        zr = r, vo = zr.utils.getUnit, th = zr.utils.toArray, pc = zr.core.getStyleSaver, bd = zr.core.reverting || function() {}, Wg = t
    },
    init(r, e, t) {
        if (!zr) return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"), !1;
        (!(typeof e == "object" && !e.style) || !e.path) && (e = {
            path: e
        });
        let i = [],
            {
                path: n,
                autoRotate: s,
                unitX: o,
                unitY: a,
                x: l,
                y: u
            } = e,
            c = n[0],
            h = ky(e.start, "end" in e ? e.end : 1),
            f, g;
        if (this.rawPaths = i, this.target = r, this.tween = t, this.styles = pc && pc(r, "transform"), (this.rotate = s || s === 0) && (this.rOffset = parseFloat(s) || 0, this.radians = !!e.useRadians, this.rProp = e.rotation || "rotation", this.rSet = r._gsap.set(r, this.rProp, this), this.ru = vo(r._gsap.get(r, this.rProp)) || 0), Array.isArray(n) && !("closed" in n) && typeof c != "number") {
            for (g in c) !l && ~by.indexOf(g) ? l = g : !u && ~xy.indexOf(g) && (u = g);
            l && u ? i.push(xd(this, ua(ua([], n, l, 0), n, u, 1), r, l, u, h, e, o || vo(n[0][l]), a || vo(n[0][u]))) : l = u = 0;
            for (g in c) g !== l && g !== u && i.push(xd(this, ua([], n, g, 2), r, g, 0, h, e, vo(n[0][g])))
        } else f = h(Xg(jl(e.path), r, e)), Js(f, e.resolution), i.push(f), gu(this, r, e.x || "x", f, "x", e.unitX || "px"), gu(this, r, e.y || "y", f, "y", e.unitY || "px");
        t.vars.immediateRender && this.render(t.progress(), this)
    },
    render(r, e) {
        let t = e.rawPaths,
            i = t.length,
            n = e._pt;
        if (e.tween._time || !bd()) {
            for (r > 1 ? r = 1 : r < 0 && (r = 0); i--;) vd(t[i], r, !i && e.rotate, t[i]);
            for (; n;) n.set(n.t, n.p, n.path[n.pp] + n.u, n.d, r), n = n._next;
            e.rotate && e.rSet(e.target, e.rProp, t[0].angle * (e.radians ? Ey : 1) + e.rOffset + e.ru, e, r)
        } else e.styles.revert()
    },
    getLength(r) {
        return Js(jl(r))
            .totalLength
    },
    sliceRawPath: qg,
    getRawPath: jl,
    pointsToSegment: Qc,
    stringToRawPath: Xa,
    rawPathToString: Jh,
    transformRawPath: To,
    getGlobalMatrix: Ri,
    getPositionOnPath: vd,
    cacheRawPathMeasurements: Js,
    convertToPath: (r, e) => th(r)
        .map(t => dy(t, e !== !1)),
    convertCoordinates(r, e, t) {
        let i = Ri(e, !0, !0)
            .multiply(Ri(r));
        return t ? i.apply(t) : i
    },
    getAlignMatrix: ih,
    getRelativePosition(r, e, t, i) {
        let n = ih(r, e, t, i);
        return {
            x: n.e,
            y: n.f
        }
    },
    arrayToRawPath(r, e) {
        e = e || {};
        let t = ua(ua([], r, e.x || "x", 0), r, e.y || "y", 1);
        return e.relative && Yg(t), [e.type === "cubic" ? t : Qc(t, e.curviness)]
    }
};
Cy() && zr.registerPlugin(Kh);
class Py {
    tls = [];
    scrollTriggers = [];
    element;
    constructor() {
        this.element = B("#approach-cards"), this.t1(), this.t2(), this.t3()
    }
    t1() {
        const e = oe.timeline({
                paused: !0
            })
            .fromTo(".fig1 .arm", {
                transformOrigin: "50% 100%"
            }, {
                duration: 4.5,
                rotate: "+=360",
                ease: "expo.inOut",
                repeat: -1
            }, 0)
            .fromTo(".fig1", {
                transformOrigin: "50%",
                rotate: 200
            }, {
                duration: 60,
                ease: "none",
                rotate: 560,
                repeat: -1
            }, 0)
            .fromTo(".fig1 .ring", {
                transformOrigin: "50%"
            }, {
                duration: 120,
                ease: "none",
                rotate: -360,
                repeat: -1
            }, 0);
        this.tls.push(e);
        const t = Se.create({
            trigger: this.element,
            animation: e,
            start: "0 100%",
            end: "100% 0",
            toggleActions: "play pause play pause"
        });
        this.scrollTriggers.push(t)
    }
    t2() {
        const e = oe.timeline({
                paused: !0,
                repeat: -1
            }),
            t = document.querySelectorAll(".fig2 .paths *");
        t.forEach((a, l) => {
            if (l == t.length - 1) {
                oe.set(a, {
                    opacity: 0
                });
                return
            }
            const u = t[l + 1],
                c = t[l + 2];
            e.add(oe.timeline({
                    defaults: {
                        ease: "none",
                        duration: 2
                    }
                })
                .add(() => {
                    l == 1 && oe.to(a, {
                        duration: .1,
                        ease: "power1.inOut",
                        opacity: 1
                    })
                }, 0)
                .to(a, {
                    attr: {
                        d: u.getAttribute("d")
                    }
                }, 0)
                .to(a, {
                    attr: {
                        d: l == t.length - 2 ? u.getAttribute("d") : c.getAttribute("d")
                    }
                }, 2)
                .to(a, {
                    duration: .1,
                    ease: "power1.inOut",
                    opacity: l == t.length - 2 ? 0 : 1
                }, 1.9)
                .to(a, {
                    duration: .1,
                    ease: "power1.inOut",
                    opacity: l == t.length - 3 ? 0 : 1
                }, 3.9), 0)
        }), rn.create("custom", "M0,0 C0.022,0.35 0.758,0.431 1,1");
        const i = oe.parseEase("custom"),
            n = document.querySelector(".path3"),
            s = oe.timeline({
                paused: !0,
                repeat: -1,
                onUpdate: () => {
                    const a = n.getTotalLength(),
                        l = n.getPointAtLength(a * i(s.progress()));
                    oe.set(".follower", {
                        x: l.x,
                        y: l.y
                    })
                }
            })
            .fromTo(".follower", {
                transformOrigin: "50%",
                scale: 0
            }, {
                scale: 1,
                duration: 2,
                ease: "expo",
                yoyo: !0,
                repeat: 1
            }),
            o = Se.create({
                trigger: this.element,
                start: "0 100%",
                end: "100% 0",
                onToggle: a => {
                    a.isActive ? (e.play(), s.play()) : (e.pause(), s.pause())
                }
            });
        this.tls.push(e), this.tls.push(s), this.scrollTriggers.push(o)
    }
    t3() {
        rn.create("custom2", "M0,0 C0.785,0.089 0.21,0.917 1,1");
        const e = oe.timeline({
                paused: !0
            })
            .fromTo(".fig3 .inner", {
                transformOrigin: "50%"
            }, {
                duration: 20,
                rotate: -360,
                ease: "none",
                repeat: -1
            }, 0)
            .fromTo(".fig3 .outer", {
                transformOrigin: "50%"
            }, {
                duration: 30,
                rotate: 360,
                ease: "none",
                repeat: -1
            }, 0);
        Fe(".fig3 .inner")
            .forEach((n, s) => {
                Kh.convertToPath(n.querySelector(".dotted"));
                const o = n.querySelector(".dotted"),
                    a = n.querySelector(".dot");
                e.add(oe.timeline()
                    .to(a, {
                        motionPath: {
                            path: o,
                            align: o,
                            alignOrigin: [.5, .5],
                            start: [.6, .1][s],
                            end: [1.6, 1.1][s]
                        },
                        duration: 4,
                        ease: "custom2",
                        repeat: -1
                    }), 0)
            }), this.tls.push(e);
        const i = Se.create({
            animation: e,
            trigger: this.element,
            start: "0 100%",
            end: "100% 0",
            toggleActions: "play pause play pause"
        });
        this.scrollTriggers.push(i)
    }
    destroy() {
        this.tls.forEach(e => {
            e.kill()
        }), this.scrollTriggers.forEach(e => {
            e.kill()
        })
    }
}
class Ay {
    element;
    video;
    src;
    fadeOutTimeout = null;
    isTouchDevice;
    constructor(e) {
        this.element = e.element, this.video = B("video", this.element), this.isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0, this.video && (this.src = this.video.getAttribute("data-src") || "", this.addEventListeners())
    }
    onMouseEnter() {
        this.isTouchDevice || (this.fadeOutTimeout && (clearTimeout(this.fadeOutTimeout), this.fadeOutTimeout = null), this.video.src || (this.video.src = this.src, this.video.load()), this.video.classList.add("visible"), this.video.play()
            .catch(() => {}))
    }
    onMouseLeave({
        immediate: e
    } = {}) {
        this.isTouchDevice || (this.video.classList.remove("visible"), e ? (this.video.pause(), this.video.removeAttribute("src"), this.video.load(), this.fadeOutTimeout = null) : this.fadeOutTimeout = setTimeout(() => {
            this.video.pause(), this.video.removeAttribute("src"), this.video.load(), this.fadeOutTimeout = null
        }, 300))
    }
    addEventListeners() {
        this.element.addEventListener("mouseenter", () => this.onMouseEnter()), this.element.addEventListener("mouseleave", () => this.onMouseLeave())
    }
    destroy() {
        this.onMouseLeave({
            immediate: !0
        }), this.element.removeEventListener("mouseenter", () => this.onMouseEnter()), this.element.removeEventListener("mouseleave", () => this.onMouseLeave())
    }
}
class Fy extends Za {
    tls = [];
    navbar;
    scroll;
    cardsDeck;
    worksCursor;
    about;
    marquee;
    titleLines;
    titleAnimation;
    animatedFigures;
    workCards;
    constructor({
        scroll: e
    }) {
        super(), this.scroll = e, this.createHoverTextAnimation(), this.createWorkCardsThumbnails(), this.createNavbar(), this.setupInitialGsapStates(), this.createCardsDeck(), this.createWorksCursor(), this.createMarquee(), this.createAnimatedFigures(), window.loaded && (this.createAboutSection(), this.createTextAnimation(), this.titleAnimation.playLines(.3))
    }
    setupInitialGsapStates() {
        const e = B("#video-orange-wrapper"),
            t = B("#video-dark-wrapper"),
            i = B("#video-container"),
            n = B("#video-mask");
        oe.set(e, {
            borderRadius: "6vmax 6vmax 0 0"
        }), oe.set(t, {
            borderRadius: "3vmax 3vmax 0 0",
            scale: 88 / 100
        }), oe.set(n, {
            opacity: .9
        }), oe.set(i, {
            scale: 100 / 80
        })
    }
    setupHeroScrollAnimation() {
        const e = B("#video-orange-wrapper"),
            t = B("#video-dark-wrapper"),
            i = B("#video-container"),
            n = B("#video-mask"),
            s = oe.timeline({
                defaults: {
                    ease: "linear"
                },
                scrollTrigger: {
                    trigger: e,
                    start: "top 80%",
                    end: "top top",
                    scrub: !0
                }
            });
        s.to(e, {
            borderRadius: "0 0 0 0",
            duration: 1
        }, "<"), s.to(t, {
            borderRadius: "0 0 0 0",
            duration: 1,
            scale: 1
        }, "<"), s.to(n, {
            opacity: .05,
            duration: 1
        }, "<");
        const o = oe.timeline({
            scrollTrigger: {
                trigger: e,
                start: "bottom center",
                end: "bottom top",
                scrub: !0
            }
        });
        o.to(i, {
            scale: 1,
            duration: 1
        }), this.tls = [s, o]
    }
    createTextAnimation() {
        const e = B("h1[data-animation]");
        this.titleAnimation = new Ng({
            element: e
        })
    }
    createNavbar() {
        this.navbar = new z_({
            scroll: this.scroll
        })
    }
    createMarquee() {
        this.marquee = new Bg
    }
    createWorksCursor() {
        this.worksCursor = new Tg
    }
    createCardsDeck() {
        this.cardsDeck = new V_
    }
    createAboutSection() {
        this.about = new Mg
    }
    onResize() {
        this.titleAnimation.onResize(), this.about.onResize()
    }
    loadVideo() {
        const e = B("video#hero-video");
        e && (e.pause(), e.currentTime = 0, e.load(), e.play()
            .catch(t => {
                console.warn("Autoplay failed:", t)
            }))
    }
    setVideo() {
        window.video && (B("[data-video-container]")
            .appendChild(window.video), window.video.play()
            .catch(t => {
                console.warn("Autoplay failed:", t)
            }))
    }
    destroy() {
        window.video?.pause(), window.video?.remove(), this.orangeLinks.forEach(e => {
            e.removeEventListener("click", this.onClickOrangeLink.bind(this, e))
        }), this.mobileMenu?.destroy(), this.tls.forEach(e => e.kill()), this.workCards.forEach(e => e.destroy()), this.navbar.destroy(), this.worksCursor.destroy(), this.about.destroy(), this.marquee.destroy(), this.animatedFigures.destroy()
    }
    createWorkCardsThumbnails() {
        this.workCards = [], Fe("[data-work-card]")
            .forEach(t => {
                if (B("[data-work-card-thumbnail-video]", t)) {
                    const i = new Ay({
                        element: t
                    });
                    this.workCards.push(i)
                }
            })
    }
    onScroll(e) {
        this.navbar.onScroll(e)
    }
    afterEnter() {
        this.setVideo(), this.navbar.updateSectionsData(), this.setupHeroScrollAnimation(), this.about.setupLayout()
    }
    onFirstLoad() {
        this.createAboutSection(), this.navbar.updateSectionsData(), this.setupHeroScrollAnimation(), this.createTextAnimation(), this.about.setupLayout()
    }
    afterPreloaderAnimation() {
        window.video && B("[data-video-container]")
            .appendChild(window.video)
    }
    createAnimatedFigures() {
        this.animatedFigures = new Py
    }
    afterTransition() {
        this.titleAnimation.playLines()
    }
    render() {
        this.worksCursor.render()
    }
}

function Ly(r, e) {
    for (var t = 0; t < e.length; t++) {
        var i = e[t];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, typeof(n = function(s, o) {
            if (typeof s != "object" || s === null) return s;
            var a = s[Symbol.toPrimitive];
            if (a !== void 0) {
                var l = a.call(s, "string");
                if (typeof l != "object") return l;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(s)
        }(i.key)) == "symbol" ? n : String(n), i)
    }
    var n
}

function Zh(r, e, t) {
    return e && Ly(r.prototype, e), Object.defineProperty(r, "prototype", {
        writable: !1
    }), r
}

function mn() {
    return mn = Object.assign ? Object.assign.bind() : function(r) {
        for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i])
        }
        return r
    }, mn.apply(this, arguments)
}

function Tu(r, e) {
    r.prototype = Object.create(e.prototype), r.prototype.constructor = r, ja(r, e)
}

function rh(r) {
    return rh = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
    }, rh(r)
}

function ja(r, e) {
    return ja = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, i) {
        return t.__proto__ = i, t
    }, ja(r, e)
}

function Oy() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function nh(r, e, t) {
    return nh = Oy() ? Reflect.construct.bind() : function(i, n, s) {
        var o = [null];
        o.push.apply(o, n);
        var a = new(Function.bind.apply(i, o));
        return s && ja(a, s.prototype), a
    }, nh.apply(null, arguments)
}

function sh(r) {
    var e = typeof Map == "function" ? new Map : void 0;
    return sh = function(t) {
        if (t === null || Function.toString.call(t)
            .indexOf("[native code]") === -1) return t;
        if (typeof t != "function") throw new TypeError("Super expression must either be null or a function");
        if (e !== void 0) {
            if (e.has(t)) return e.get(t);
            e.set(t, i)
        }

        function i() {
            return nh(t, arguments, rh(this)
                .constructor)
        }
        return i.prototype = Object.create(t.prototype, {
            constructor: {
                value: i,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), ja(i, t)
    }, sh(r)
}

function Ry(r) {
    if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return r
}
var os, My = function() {
    this.before = void 0, this.beforeLeave = void 0, this.leave = void 0, this.afterLeave = void 0, this.beforeEnter = void 0, this.enter = void 0, this.afterEnter = void 0, this.after = void 0
};
(function(r) {
    r[r.off = 0] = "off", r[r.error = 1] = "error", r[r.warning = 2] = "warning", r[r.info = 3] = "info", r[r.debug = 4] = "debug"
})(os || (os = {}));
var Cd = os.off,
    zs = function() {
        function r(t) {
            this.t = void 0, this.t = t
        }
        r.getLevel = function() {
            return Cd
        }, r.setLevel = function(t) {
            return Cd = os[t]
        };
        var e = r.prototype;
        return e.error = function() {
            this.i(console.error, os.error, [].slice.call(arguments))
        }, e.warn = function() {
            this.i(console.warn, os.warning, [].slice.call(arguments))
        }, e.info = function() {
            this.i(console.info, os.info, [].slice.call(arguments))
        }, e.debug = function() {
            this.i(console.log, os.debug, [].slice.call(arguments))
        }, e.i = function(t, i, n) {
            i <= r.getLevel() && t.apply(console, ["[" + this.t + "] "].concat(n))
        }, r
    }();

function _o(r) {
    return r.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
}

function Sd(r) {
    return r && r.sensitive ? "" : "i"
}
var vn = {
        container: "container",
        history: "history",
        namespace: "namespace",
        prefix: "data-barba",
        prevent: "prevent",
        wrapper: "wrapper"
    },
    Vs = new(function() {
        function r() {
            this.o = vn, this.u = void 0, this.h = {
                after: null,
                before: null,
                parent: null
            }
        }
        var e = r.prototype;
        return e.toString = function(t) {
            return t.outerHTML
        }, e.toDocument = function(t) {
            return this.u || (this.u = new DOMParser), this.u.parseFromString(t, "text/html")
        }, e.toElement = function(t) {
            var i = document.createElement("div");
            return i.innerHTML = t, i
        }, e.getHtml = function(t) {
            return t === void 0 && (t = document), this.toString(t.documentElement)
        }, e.getWrapper = function(t) {
            return t === void 0 && (t = document), t.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]')
        }, e.getContainer = function(t) {
            return t === void 0 && (t = document), t.querySelector("[" + this.o.prefix + '="' + this.o.container + '"]')
        }, e.removeContainer = function(t) {
            document.body.contains(t) && (this.v(t), t.parentNode.removeChild(t))
        }, e.addContainer = function(t, i) {
            var n = this.getContainer() || this.h.before;
            n ? this.l(t, n) : this.h.after ? this.h.after.parentNode.insertBefore(t, this.h.after) : this.h.parent ? this.h.parent.appendChild(t) : i.appendChild(t)
        }, e.getSibling = function() {
            return this.h
        }, e.getNamespace = function(t) {
            t === void 0 && (t = document);
            var i = t.querySelector("[" + this.o.prefix + "-" + this.o.namespace + "]");
            return i ? i.getAttribute(this.o.prefix + "-" + this.o.namespace) : null
        }, e.getHref = function(t) {
            if (t.tagName && t.tagName.toLowerCase() === "a") {
                if (typeof t.href == "string") return t.href;
                var i = t.getAttribute("href") || t.getAttribute("xlink:href");
                if (i) return this.resolveUrl(i.baseVal || i)
            }
            return null
        }, e.resolveUrl = function() {
            var t = [].slice.call(arguments)
                .length;
            if (t === 0) throw new Error("resolveUrl requires at least one argument; got none.");
            var i = document.createElement("base");
            if (i.href = arguments[0], t === 1) return i.href;
            var n = document.getElementsByTagName("head")[0];
            n.insertBefore(i, n.firstChild);
            for (var s, o = document.createElement("a"), a = 1; a < t; a++) o.href = arguments[a], i.href = s = o.href;
            return n.removeChild(i), s
        }, e.l = function(t, i) {
            i.parentNode.insertBefore(t, i.nextSibling)
        }, e.v = function(t) {
            return this.h = {
                after: t.nextElementSibling,
                before: t.previousElementSibling,
                parent: t.parentElement
            }, this.h
        }, r
    }()),
    By = function() {
        function r() {
            this.p = void 0, this.m = [], this.P = -1
        }
        var e = r.prototype;
        return e.init = function(t, i) {
            this.p = "barba";
            var n = {
                data: {},
                ns: i,
                scroll: {
                    x: window.scrollX,
                    y: window.scrollY
                },
                url: t
            };
            this.P = 0, this.m.push(n);
            var s = {
                from: this.p,
                index: this.P,
                states: [].concat(this.m)
            };
            window.history && window.history.replaceState(s, "", t)
        }, e.change = function(t, i, n) {
            if (n && n.state) {
                var s = n.state,
                    o = s.index;
                i = this.g(this.P - o), this.replace(s.states), this.P = o
            } else this.add(t, i);
            return i
        }, e.add = function(t, i, n, s) {
            var o = n ?? this.R(i),
                a = {
                    data: s ?? {},
                    ns: "tmp",
                    scroll: {
                        x: window.scrollX,
                        y: window.scrollY
                    },
                    url: t
                };
            switch (o) {
                case "push":
                    this.P = this.size, this.m.push(a);
                    break;
                case "replace":
                    this.set(this.P, a)
            }
            var l = {
                from: this.p,
                index: this.P,
                states: [].concat(this.m)
            };
            switch (o) {
                case "push":
                    window.history && window.history.pushState(l, "", t);
                    break;
                case "replace":
                    window.history && window.history.replaceState(l, "", t)
            }
        }, e.store = function(t, i) {
            var n = i || this.P,
                s = this.get(n);
            s.data = mn({}, s.data, t), this.set(n, s);
            var o = {
                from: this.p,
                index: this.P,
                states: [].concat(this.m)
            };
            window.history.replaceState(o, "")
        }, e.update = function(t, i) {
            var n = i || this.P,
                s = mn({}, this.get(n), t);
            this.set(n, s)
        }, e.remove = function(t) {
            t ? this.m.splice(t, 1) : this.m.pop(), this.P--
        }, e.clear = function() {
            this.m = [], this.P = -1
        }, e.replace = function(t) {
            this.m = t
        }, e.get = function(t) {
            return this.m[t]
        }, e.set = function(t, i) {
            return this.m[t] = i
        }, e.R = function(t) {
            var i = "push",
                n = t,
                s = vn.prefix + "-" + vn.history;
            return n.hasAttribute && n.hasAttribute(s) && (i = n.getAttribute(s)), i
        }, e.g = function(t) {
            return Math.abs(t) > 1 ? t > 0 ? "forward" : "back" : t === 0 ? "popstate" : t > 0 ? "back" : "forward"
        }, Zh(r, [{
            key: "current",
            get: function() {
                return this.m[this.P]
            }
        }, {
            key: "previous",
            get: function() {
                return this.P < 1 ? null : this.m[this.P - 1]
            }
        }, {
            key: "size",
            get: function() {
                return this.m.length
            }
        }]), r
    }(),
    jg = new By,
    mu = function(r, e) {
        try {
            var t = function() {
                if (!e.next.html) return Promise.resolve(r)
                    .then(function(i) {
                        var n = e.next;
                        if (i) {
                            var s = Vs.toElement(i.html);
                            n.namespace = Vs.getNamespace(s), n.container = Vs.getContainer(s), n.url = i.url, n.html = i.html, jg.update({
                                ns: n.namespace
                            });
                            var o = Vs.toDocument(i.html);
                            document.title = o.title
                        }
                    })
            }();
            return Promise.resolve(t && t.then ? t.then(function() {}) : void 0)
        } catch (i) {
            return Promise.reject(i)
        }
    },
    Gg = function r(e, t, i) {
        return e instanceof RegExp ? function(n, s) {
            if (!s) return n;
            for (var o = /\((?:\?<(.*?)>)?(?!\?)/g, a = 0, l = o.exec(n.source); l;) s.push({
                name: l[1] || a++,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            }), l = o.exec(n.source);
            return n
        }(e, t) : Array.isArray(e) ? function(n, s, o) {
            var a = n.map(function(l) {
                return r(l, s, o)
                    .source
            });
            return new RegExp("(?:".concat(a.join("|"), ")"), Sd(o))
        }(e, t, i) : function(n, s, o) {
            return function(a, l, u) {
                u === void 0 && (u = {});
                for (var c = u.strict, h = c !== void 0 && c, f = u.start, g = f === void 0 || f, m = u.end, d = m === void 0 || m, p = u.encode, y = p === void 0 ? function(J) {
                        return J
                    } : p, b = u.delimiter, w = b === void 0 ? "/#?" : b, S = u.endsWith, x = "[".concat(_o(S === void 0 ? "" : S), "]|$"), P = "[".concat(_o(w), "]"), C = g ? "^" : "", A = 0, k = a; A < k.length; A++) {
                    var I = k[A];
                    if (typeof I == "string") C += _o(y(I));
                    else {
                        var Y = _o(y(I.prefix)),
                            V = _o(y(I.suffix));
                        if (I.pattern)
                            if (l && l.push(I), Y || V)
                                if (I.modifier === "+" || I.modifier === "*") {
                                    var q = I.modifier === "*" ? "?" : "";
                                    C += "(?:".concat(Y, "((?:")
                                        .concat(I.pattern, ")(?:")
                                        .concat(V)
                                        .concat(Y, "(?:")
                                        .concat(I.pattern, "))*)")
                                        .concat(V, ")")
                                        .concat(q)
                                } else C += "(?:".concat(Y, "(")
                                    .concat(I.pattern, ")")
                                    .concat(V, ")")
                                    .concat(I.modifier);
                        else C += I.modifier === "+" || I.modifier === "*" ? "((?:".concat(I.pattern, ")")
                            .concat(I.modifier, ")") : "(".concat(I.pattern, ")")
                            .concat(I.modifier);
                        else C += "(?:".concat(Y)
                            .concat(V, ")")
                            .concat(I.modifier)
                    }
                }
                if (d) h || (C += "".concat(P, "?")), C += u.endsWith ? "(?=".concat(x, ")") : "$";
                else {
                    var K = a[a.length - 1],
                        W = typeof K == "string" ? P.indexOf(K[K.length - 1]) > -1 : K === void 0;
                    h || (C += "(?:".concat(P, "(?=")
                        .concat(x, "))?")), W || (C += "(?=".concat(P, "|")
                        .concat(x, ")"))
                }
                return new RegExp(C, Sd(u))
            }(function(a, l) {
                l === void 0 && (l = {});
                for (var u = function(V) {
                        for (var q = [], K = 0; K < V.length;) {
                            var W = V[K];
                            if (W !== "*" && W !== "+" && W !== "?")
                                if (W !== "\\")
                                    if (W !== "{")
                                        if (W !== "}")
                                            if (W !== ":")
                                                if (W !== "(") q.push({
                                                    type: "CHAR",
                                                    index: K,
                                                    value: V[K++]
                                                });
                                                else {
                                                    var J = 1,
                                                        T = "";
                                                    if (V[Q = K + 1] === "?") throw new TypeError('Pattern cannot start with "?" at '.concat(Q));
                                                    for (; Q < V.length;)
                                                        if (V[Q] !== "\\") {
                                                            if (V[Q] === ")") {
                                                                if (--J == 0) {
                                                                    Q++;
                                                                    break
                                                                }
                                                            } else if (V[Q] === "(" && (J++, V[Q + 1] !== "?")) throw new TypeError("Capturing groups are not allowed at ".concat(Q));
                                                            T += V[Q++]
                                                        } else T += V[Q++] + V[Q++];
                                                    if (J) throw new TypeError("Unbalanced pattern at ".concat(K));
                                                    if (!T) throw new TypeError("Missing pattern at ".concat(K));
                                                    q.push({
                                                        type: "PATTERN",
                                                        index: K,
                                                        value: T
                                                    }), K = Q
                                                }
                            else {
                                for (var R = "", Q = K + 1; Q < V.length;) {
                                    var se = V.charCodeAt(Q);
                                    if (!(se >= 48 && se <= 57 || se >= 65 && se <= 90 || se >= 97 && se <= 122 || se === 95)) break;
                                    R += V[Q++]
                                }
                                if (!R) throw new TypeError("Missing parameter name at ".concat(K));
                                q.push({
                                    type: "NAME",
                                    index: K,
                                    value: R
                                }), K = Q
                            } else q.push({
                                type: "CLOSE",
                                index: K,
                                value: V[K++]
                            });
                            else q.push({
                                type: "OPEN",
                                index: K,
                                value: V[K++]
                            });
                            else q.push({
                                type: "ESCAPED_CHAR",
                                index: K++,
                                value: V[K++]
                            });
                            else q.push({
                                type: "MODIFIER",
                                index: K,
                                value: V[K++]
                            })
                        }
                        return q.push({
                            type: "END",
                            index: K,
                            value: ""
                        }), q
                    }(a), c = l.prefixes, h = c === void 0 ? "./" : c, f = "[^".concat(_o(l.delimiter || "/#?"), "]+?"), g = [], m = 0, d = 0, p = "", y = function(V) {
                        if (d < u.length && u[d].type === V) return u[d++].value
                    }, b = function(V) {
                        var q = y(V);
                        if (q !== void 0) return q;
                        var K = u[d],
                            W = K.index;
                        throw new TypeError("Unexpected ".concat(K.type, " at ")
                            .concat(W, ", expected ")
                            .concat(V))
                    }, w = function() {
                        for (var V, q = ""; V = y("CHAR") || y("ESCAPED_CHAR");) q += V;
                        return q
                    }; d < u.length;) {
                    var S = y("CHAR"),
                        x = y("NAME"),
                        P = y("PATTERN");
                    if (x || P) h.indexOf(A = S || "") === -1 && (p += A, A = ""), p && (g.push(p), p = ""), g.push({
                        name: x || m++,
                        prefix: A,
                        suffix: "",
                        pattern: P || f,
                        modifier: y("MODIFIER") || ""
                    });
                    else {
                        var C = S || y("ESCAPED_CHAR");
                        if (C) p += C;
                        else if (p && (g.push(p), p = ""), y("OPEN")) {
                            var A = w(),
                                k = y("NAME") || "",
                                I = y("PATTERN") || "",
                                Y = w();
                            b("CLOSE"), g.push({
                                name: k || (I ? m++ : ""),
                                pattern: k && !I ? f : I,
                                prefix: A,
                                suffix: Y,
                                modifier: y("MODIFIER") || ""
                            })
                        } else b("END")
                    }
                }
                return g
            }(n, o), s, o)
        }(e, t, i)
    },
    Ny = {
        __proto__: null,
        update: mu,
        nextTick: function() {
            return new Promise(function(r) {
                window.requestAnimationFrame(r)
            })
        },
        pathToRegexp: Gg
    },
    Jg = function() {
        return window.location.origin
    },
    Ga = function(r) {
        return r === void 0 && (r = window.location.href), as(r)
            .port
    },
    as = function(r) {
        var e, t = r.match(/:\d+/);
        if (t === null) /^http/.test(r) && (e = 80), /^https/.test(r) && (e = 443);
        else {
            var i = t[0].substring(1);
            e = parseInt(i, 10)
        }
        var n, s = r.replace(Jg(), ""),
            o = {},
            a = s.indexOf("#");
        a >= 0 && (n = s.slice(a + 1), s = s.slice(0, a));
        var l = s.indexOf("?");
        return l >= 0 && (o = Kg(s.slice(l + 1)), s = s.slice(0, l)), {
            hash: n,
            path: s,
            port: e,
            query: o
        }
    },
    Kg = function(r) {
        return r.split("&")
            .reduce(function(e, t) {
                var i = t.split("=");
                return e[i[0]] = i[1], e
            }, {})
    },
    oh = function(r) {
        return r === void 0 && (r = window.location.href), r.replace(/(\/#.*|\/|#.*)$/, "")
    },
    Iy = {
        __proto__: null,
        getHref: function() {
            return window.location.href
        },
        getAbsoluteHref: function(r, e) {
            return e === void 0 && (e = document.baseURI), new URL(r, e)
                .href
        },
        getOrigin: Jg,
        getPort: Ga,
        getPath: function(r) {
            return r === void 0 && (r = window.location.href), as(r)
                .path
        },
        getQuery: function(r, e) {
            return e === void 0 && (e = !1), e ? JSON.stringify(as(r)
                    .query) : as(r)
                .query
        },
        getHash: function(r) {
            return as(r)
                .hash
        },
        parse: as,
        parseQuery: Kg,
        clean: oh
    };

function zy(r, e, t, i, n) {
    return e === void 0 && (e = 2e3), new Promise(function(s, o) {
        var a = new XMLHttpRequest;
        a.onreadystatechange = function() {
                if (a.readyState === XMLHttpRequest.DONE) {
                    if (a.status === 200) {
                        var l = a.responseURL !== "" && a.responseURL !== r ? a.responseURL : r;
                        s({
                            html: a.responseText,
                            url: mn({
                                href: l
                            }, as(l))
                        }), i.update(r, {
                            status: "fulfilled",
                            target: l
                        })
                    } else if (a.status) {
                        var u = {
                            status: a.status,
                            statusText: a.statusText
                        };
                        t(r, u), o(u), i.update(r, {
                            status: "rejected"
                        })
                    }
                }
            }, a.ontimeout = function() {
                var l = new Error("Timeout error [" + e + "]");
                t(r, l), o(l), i.update(r, {
                    status: "rejected"
                })
            }, a.onerror = function() {
                var l = new Error("Fetch error");
                t(r, l), o(l), i.update(r, {
                    status: "rejected"
                })
            }, a.open("GET", r), a.timeout = e, a.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml"), a.setRequestHeader("x-barba", "yes"), n.all()
            .forEach(function(l, u) {
                a.setRequestHeader(u, l)
            }), a.send()
    })
}

function Vy(r) {
    return !!r && (typeof r == "object" || typeof r == "function") && typeof r.then == "function"
}

function Po(r, e) {
    return e === void 0 && (e = {}),
        function() {
            var t = arguments,
                i = !1,
                n = new Promise(function(s, o) {
                    e.async = function() {
                        return i = !0,
                            function(l, u) {
                                l ? o(l) : s(u)
                            }
                    };
                    var a = r.apply(e, [].slice.call(t));
                    i || (Vy(a) ? a.then(s, o) : s(a))
                });
            return n
        }
}
var ns = new(function(r) {
        function e() {
            var i;
            return (i = r.call(this) || this)
                .logger = new zs("@barba/core"), i.all = ["ready", "page", "reset", "currentAdded", "currentRemoved", "nextAdded", "nextRemoved", "beforeOnce", "once", "afterOnce", "before", "beforeLeave", "leave", "afterLeave", "beforeEnter", "enter", "afterEnter", "after"], i.registered = new Map, i.init(), i
        }
        Tu(e, r);
        var t = e.prototype;
        return t.init = function() {
            var i = this;
            this.registered.clear(), this.all.forEach(function(n) {
                i[n] || (i[n] = function(s, o) {
                    i.registered.has(n) || i.registered.set(n, new Set), i.registered.get(n)
                        .add({
                            ctx: o || {},
                            fn: s
                        })
                })
            })
        }, t.do = function(i) {
            var n = arguments,
                s = this;
            if (this.registered.has(i)) {
                var o = Promise.resolve();
                return this.registered.get(i)
                    .forEach(function(a) {
                        o = o.then(function() {
                            return Po(a.fn, a.ctx)
                                .apply(void 0, [].slice.call(n, 1))
                        })
                    }), o.catch(function(a) {
                        s.logger.debug("Hook error [" + i + "]"), s.logger.error(a)
                    })
            }
            return Promise.resolve()
        }, t.clear = function() {
            var i = this;
            this.all.forEach(function(n) {
                delete i[n]
            }), this.init()
        }, t.help = function() {
            this.logger.info("Available hooks: " + this.all.join(","));
            var i = [];
            this.registered.forEach(function(n, s) {
                return i.push(s)
            }), this.logger.info("Registered hooks: " + i.join(","))
        }, e
    }(My)),
    Zg = function() {
        function r(e) {
            if (this.k = void 0, this.O = [], typeof e == "boolean") this.k = e;
            else {
                var t = Array.isArray(e) ? e : [e];
                this.O = t.map(function(i) {
                    return Gg(i)
                })
            }
        }
        return r.prototype.checkHref = function(e) {
            if (typeof this.k == "boolean") return this.k;
            var t = as(e)
                .path;
            return this.O.some(function(i) {
                return i.exec(t) !== null
            })
        }, r
    }(),
    Hy = function(r) {
        function e(i) {
            var n;
            return (n = r.call(this, i) || this)
                .T = new Map, n
        }
        Tu(e, r);
        var t = e.prototype;
        return t.set = function(i, n, s, o, a) {
            return this.T.set(i, {
                action: s,
                request: n,
                status: o,
                target: a ?? i
            }), {
                action: s,
                request: n,
                status: o,
                target: a
            }
        }, t.get = function(i) {
            return this.T.get(i)
        }, t.getRequest = function(i) {
            return this.T.get(i)
                .request
        }, t.getAction = function(i) {
            return this.T.get(i)
                .action
        }, t.getStatus = function(i) {
            return this.T.get(i)
                .status
        }, t.getTarget = function(i) {
            return this.T.get(i)
                .target
        }, t.has = function(i) {
            return !this.checkHref(i) && this.T.has(i)
        }, t.delete = function(i) {
            return this.T.delete(i)
        }, t.update = function(i, n) {
            var s = mn({}, this.T.get(i), n);
            return this.T.set(i, s), s
        }, e
    }(Zg),
    qy = function() {
        function r() {
            this.A = new Map
        }
        var e = r.prototype;
        return e.set = function(t, i) {
            return this.A.set(t, i), {
                name: i
            }
        }, e.get = function(t) {
            return this.A.get(t)
        }, e.all = function() {
            return this.A
        }, e.has = function(t) {
            return this.A.has(t)
        }, e.delete = function(t) {
            return this.A.delete(t)
        }, e.clear = function() {
            return this.A.clear()
        }, r
    }(),
    $y = function() {
        return !window.history.pushState
    },
    Uy = function(r) {
        return !r.el || !r.href
    },
    Wy = function(r) {
        var e = r.event;
        return e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey
    },
    Yy = function(r) {
        var e = r.el;
        return e.hasAttribute("target") && e.target === "_blank"
    },
    Xy = function(r) {
        var e = r.el;
        return e.protocol !== void 0 && window.location.protocol !== e.protocol || e.hostname !== void 0 && window.location.hostname !== e.hostname
    },
    jy = function(r) {
        var e = r.el;
        return e.port !== void 0 && Ga() !== Ga(e.href)
    },
    Gy = function(r) {
        var e = r.el;
        return e.getAttribute && typeof e.getAttribute("download") == "string"
    },
    Jy = function(r) {
        return r.el.hasAttribute(vn.prefix + "-" + vn.prevent)
    },
    Ky = function(r) {
        return !!r.el.closest("[" + vn.prefix + "-" + vn.prevent + '="all"]')
    },
    Zy = function(r) {
        var e = r.href;
        return oh(e) === oh() && Ga(e) === Ga()
    },
    Qy = function(r) {
        function e(i) {
            var n;
            return (n = r.call(this, i) || this)
                .suite = [], n.tests = new Map, n.init(), n
        }
        Tu(e, r);
        var t = e.prototype;
        return t.init = function() {
            this.add("pushState", $y), this.add("exists", Uy), this.add("newTab", Wy), this.add("blank", Yy), this.add("corsDomain", Xy), this.add("corsPort", jy), this.add("download", Gy), this.add("preventSelf", Jy), this.add("preventAll", Ky), this.add("sameUrl", Zy, !1)
        }, t.add = function(i, n, s) {
            s === void 0 && (s = !0), this.tests.set(i, n), s && this.suite.push(i)
        }, t.run = function(i, n, s, o) {
            return this.tests.get(i)({
                el: n,
                event: s,
                href: o
            })
        }, t.checkLink = function(i, n, s) {
            var o = this;
            return this.suite.some(function(a) {
                return o.run(a, i, n, s)
            })
        }, e
    }(Zg),
    gc = function(r) {
        function e(t, i) {
            var n;
            return i === void 0 && (i = "Barba error"), (n = r.call.apply(r, [this].concat([].slice.call(arguments, 2))) || this)
                .error = void 0, n.label = void 0, n.error = t, n.label = i, Error.captureStackTrace && Error.captureStackTrace(Ry(n), e), n.name = "BarbaError", n
        }
        return Tu(e, r), e
    }(sh(Error)),
    eD = function() {
        function r(t) {
            t === void 0 && (t = []), this.logger = new zs("@barba/core"), this.all = [], this.page = [], this.once = [], this.j = [{
                name: "namespace",
                type: "strings"
            }, {
                name: "custom",
                type: "function"
            }], t && (this.all = this.all.concat(t)), this.update()
        }
        var e = r.prototype;
        return e.add = function(t, i) {
            t === "rule" ? this.j.splice(i.position || 0, 0, i.value) : this.all.push(i), this.update()
        }, e.resolve = function(t, i) {
            var n = this;
            i === void 0 && (i = {});
            var s = i.once ? this.once : this.page;
            s = s.filter(i.self ? function(f) {
                return f.name && f.name === "self"
            } : function(f) {
                return !f.name || f.name !== "self"
            });
            var o = new Map,
                a = s.find(function(f) {
                    var g = !0,
                        m = {};
                    return i.self && f.name === "self" ? (o.set(f, m), !0) : (n.j.reverse()
                        .forEach(function(d) {
                            g && (g = n.M(f, d, t, m), f.from && f.to && (g = n.M(f, d, t, m, "from") && n.M(f, d, t, m, "to")), f.from && !f.to && (g = n.M(f, d, t, m, "from")), !f.from && f.to && (g = n.M(f, d, t, m, "to")))
                        }), o.set(f, m), g)
                }),
                l = o.get(a),
                u = [];
            if (u.push(i.once ? "once" : "page"), i.self && u.push("self"), l) {
                var c, h = [a];
                Object.keys(l)
                    .length > 0 && h.push(l), (c = this.logger)
                    .info.apply(c, ["Transition found [" + u.join(",") + "]"].concat(h))
            } else this.logger.info("No transition found [" + u.join(",") + "]");
            return a
        }, e.update = function() {
            var t = this;
            this.all = this.all.map(function(i) {
                    return t.N(i)
                })
                .sort(function(i, n) {
                    return i.priority - n.priority
                })
                .reverse()
                .map(function(i) {
                    return delete i.priority, i
                }), this.page = this.all.filter(function(i) {
                    return i.leave !== void 0 || i.enter !== void 0
                }), this.once = this.all.filter(function(i) {
                    return i.once !== void 0
                })
        }, e.M = function(t, i, n, s, o) {
            var a = !0,
                l = !1,
                u = t,
                c = i.name,
                h = c,
                f = c,
                g = c,
                m = o ? u[o] : u,
                d = o === "to" ? n.next : n.current;
            if (o ? m && m[c] : m[c]) {
                switch (i.type) {
                    case "strings":
                    default:
                        var p = Array.isArray(m[h]) ? m[h] : [m[h]];
                        d[h] && p.indexOf(d[h]) !== -1 && (l = !0), p.indexOf(d[h]) === -1 && (a = !1);
                        break;
                    case "object":
                        var y = Array.isArray(m[f]) ? m[f] : [m[f]];
                        d[f] ? (d[f].name && y.indexOf(d[f].name) !== -1 && (l = !0), y.indexOf(d[f].name) === -1 && (a = !1)) : a = !1;
                        break;
                    case "function":
                        m[g](n) ? l = !0 : a = !1
                }
                l && (o ? (s[o] = s[o] || {}, s[o][c] = u[o][c]) : s[c] = u[c])
            }
            return a
        }, e.S = function(t, i, n) {
            var s = 0;
            return (t[i] || t.from && t.from[i] || t.to && t.to[i]) && (s += Math.pow(10, n), t.from && t.from[i] && (s += 1), t.to && t.to[i] && (s += 2)), s
        }, e.N = function(t) {
            var i = this;
            t.priority = 0;
            var n = 0;
            return this.j.forEach(function(s, o) {
                n += i.S(t, s.name, o + 1)
            }), t.priority = n, t
        }, r
    }();

function ca(r, e) {
    try {
        var t = r()
    } catch (i) {
        return e(i)
    }
    return t && t.then ? t.then(void 0, e) : t
}
var tD = function() {
        function r(t) {
            t === void 0 && (t = []), this.logger = new zs("@barba/core"), this.store = void 0, this.C = !1, this.store = new eD(t)
        }
        var e = r.prototype;
        return e.get = function(t, i) {
            return this.store.resolve(t, i)
        }, e.doOnce = function(t) {
            var i = t.data,
                n = t.transition;
            try {
                var s = function() {
                        o.C = !1
                    },
                    o = this,
                    a = n || {};
                o.C = !0;
                var l = ca(function() {
                    return Promise.resolve(o.L("beforeOnce", i, a))
                        .then(function() {
                            return Promise.resolve(o.once(i, a))
                                .then(function() {
                                    return Promise.resolve(o.L("afterOnce", i, a))
                                        .then(function() {})
                                })
                        })
                }, function(u) {
                    o.C = !1, o.logger.debug("Transition error [before/after/once]"), o.logger.error(u)
                });
                return Promise.resolve(l && l.then ? l.then(s) : s())
            } catch (u) {
                return Promise.reject(u)
            }
        }, e.doPage = function(t) {
            var i = t.data,
                n = t.transition,
                s = t.page,
                o = t.wrapper;
            try {
                var a = function(f) {
                        l.C = !1
                    },
                    l = this,
                    u = n || {},
                    c = u.sync === !0 || !1;
                l.C = !0;
                var h = ca(function() {
                    function f() {
                        return Promise.resolve(l.L("before", i, u))
                            .then(function() {
                                function m(p) {
                                    return Promise.resolve(l.remove(i))
                                        .then(function() {
                                            return Promise.resolve(l.L("after", i, u))
                                                .then(function() {})
                                        })
                                }
                                var d = function() {
                                    if (c) return ca(function() {
                                        return Promise.resolve(l.add(i, o))
                                            .then(function() {
                                                return Promise.resolve(l.L("beforeLeave", i, u))
                                                    .then(function() {
                                                        return Promise.resolve(l.L("beforeEnter", i, u))
                                                            .then(function() {
                                                                return Promise.resolve(Promise.all([l.leave(i, u), l.enter(i, u)]))
                                                                    .then(function() {
                                                                        return Promise.resolve(l.L("afterLeave", i, u))
                                                                            .then(function() {
                                                                                return Promise.resolve(l.L("afterEnter", i, u))
                                                                                    .then(function() {})
                                                                            })
                                                                    })
                                                            })
                                                    })
                                            })
                                    }, function(w) {
                                        if (l.H(w)) throw new gc(w, "Transition error [sync]")
                                    });
                                    var p = function(w) {
                                            return ca(function() {
                                                var S = function() {
                                                    if (y !== !1) return Promise.resolve(l.add(i, o))
                                                        .then(function() {
                                                            return Promise.resolve(l.L("beforeEnter", i, u))
                                                                .then(function() {
                                                                    return Promise.resolve(l.enter(i, u, y))
                                                                        .then(function() {
                                                                            return Promise.resolve(l.L("afterEnter", i, u))
                                                                                .then(function() {})
                                                                        })
                                                                })
                                                        })
                                                }();
                                                if (S && S.then) return S.then(function() {})
                                            }, function(S) {
                                                if (l.H(S)) throw new gc(S, "Transition error [before/after/enter]")
                                            })
                                        },
                                        y = !1,
                                        b = ca(function() {
                                            return Promise.resolve(l.L("beforeLeave", i, u))
                                                .then(function() {
                                                    return Promise.resolve(Promise.all([l.leave(i, u), mu(s, i)])
                                                            .then(function(w) {
                                                                return w[0]
                                                            }))
                                                        .then(function(w) {
                                                            return y = w, Promise.resolve(l.L("afterLeave", i, u))
                                                                .then(function() {})
                                                        })
                                                })
                                        }, function(w) {
                                            if (l.H(w)) throw new gc(w, "Transition error [before/after/leave]")
                                        });
                                    return b && b.then ? b.then(p) : p()
                                }();
                                return d && d.then ? d.then(m) : m()
                            })
                    }
                    var g = function() {
                        if (c) return Promise.resolve(mu(s, i))
                            .then(function() {})
                    }();
                    return g && g.then ? g.then(f) : f()
                }, function(f) {
                    throw l.C = !1, f.name && f.name === "BarbaError" ? (l.logger.debug(f.label), l.logger.error(f.error), f) : (l.logger.debug("Transition error [page]"), l.logger.error(f), f)
                });
                return Promise.resolve(h && h.then ? h.then(a) : a())
            } catch (f) {
                return Promise.reject(f)
            }
        }, e.once = function(t, i) {
            try {
                return Promise.resolve(ns.do("once", t, i))
                    .then(function() {
                        return i.once ? Po(i.once, i)(t) : Promise.resolve()
                    })
            } catch (n) {
                return Promise.reject(n)
            }
        }, e.leave = function(t, i) {
            try {
                return Promise.resolve(ns.do("leave", t, i))
                    .then(function() {
                        return i.leave ? Po(i.leave, i)(t) : Promise.resolve()
                    })
            } catch (n) {
                return Promise.reject(n)
            }
        }, e.enter = function(t, i, n) {
            try {
                return Promise.resolve(ns.do("enter", t, i))
                    .then(function() {
                        return i.enter ? Po(i.enter, i)(t, n) : Promise.resolve()
                    })
            } catch (s) {
                return Promise.reject(s)
            }
        }, e.add = function(t, i) {
            try {
                return Vs.addContainer(t.next.container, i), ns.do("nextAdded", t), Promise.resolve()
            } catch (n) {
                return Promise.reject(n)
            }
        }, e.remove = function(t) {
            try {
                return Vs.removeContainer(t.current.container), ns.do("currentRemoved", t), Promise.resolve()
            } catch (i) {
                return Promise.reject(i)
            }
        }, e.H = function(t) {
            return t.message ? !/Timeout error|Fetch error/.test(t.message) : !t.status
        }, e.L = function(t, i, n) {
            try {
                return Promise.resolve(ns.do(t, i, n))
                    .then(function() {
                        return n[t] ? Po(n[t], n)(i) : Promise.resolve()
                    })
            } catch (s) {
                return Promise.reject(s)
            }
        }, Zh(r, [{
            key: "isRunning",
            get: function() {
                return this.C
            },
            set: function(t) {
                this.C = t
            }
        }, {
            key: "hasOnce",
            get: function() {
                return this.store.once.length > 0
            }
        }, {
            key: "hasSelf",
            get: function() {
                return this.store.all.some(function(t) {
                    return t.name === "self"
                })
            }
        }, {
            key: "shouldWait",
            get: function() {
                return this.store.all.some(function(t) {
                    return t.to && !t.to.route || t.sync
                })
            }
        }]), r
    }(),
    iD = function() {
        function r(e) {
            var t = this;
            this.names = ["beforeLeave", "afterLeave", "beforeEnter", "afterEnter"], this.byNamespace = new Map, e.length !== 0 && (e.forEach(function(i) {
                t.byNamespace.set(i.namespace, i)
            }), this.names.forEach(function(i) {
                ns[i](t._(i))
            }))
        }
        return r.prototype._ = function(e) {
            var t = this;
            return function(i) {
                var n = e.match(/enter/i) ? i.next : i.current,
                    s = t.byNamespace.get(n.namespace);
                return s && s[e] ? Po(s[e], s)(i) : Promise.resolve()
            }
        }, r
    }();
Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(r) {
    var e = this;
    do {
        if (e.matches(r)) return e;
        e = e.parentElement || e.parentNode
    } while (e !== null && e.nodeType === 1);
    return null
});
var rD = {
        container: null,
        html: "",
        namespace: "",
        url: {
            hash: "",
            href: "",
            path: "",
            port: null,
            query: {}
        }
    },
    nD = new(function() {
        function r() {
            this.version = "2.10.3", this.schemaPage = rD, this.Logger = zs, this.logger = new zs("@barba/core"), this.plugins = [], this.timeout = void 0, this.cacheIgnore = void 0, this.cacheFirstPage = void 0, this.prefetchIgnore = void 0, this.preventRunning = void 0, this.hooks = ns, this.cache = void 0, this.headers = void 0, this.prevent = void 0, this.transitions = void 0, this.views = void 0, this.dom = Vs, this.helpers = Ny, this.history = jg, this.request = zy, this.url = Iy, this.D = void 0, this.B = void 0, this.q = void 0, this.F = void 0
        }
        var e = r.prototype;
        return e.use = function(t, i) {
            var n = this.plugins;
            n.indexOf(t) > -1 ? this.logger.warn("Plugin [" + t.name + "] already installed.") : typeof t.install == "function" ? (t.install(this, i), n.push(t)) : this.logger.warn("Plugin [" + t.name + '] has no "install" method.')
        }, e.init = function(t) {
            var i = t === void 0 ? {} : t,
                n = i.transitions,
                s = n === void 0 ? [] : n,
                o = i.views,
                a = o === void 0 ? [] : o,
                l = i.schema,
                u = l === void 0 ? vn : l,
                c = i.requestError,
                h = i.timeout,
                f = h === void 0 ? 2e3 : h,
                g = i.cacheIgnore,
                m = g !== void 0 && g,
                d = i.cacheFirstPage,
                p = d !== void 0 && d,
                y = i.prefetchIgnore,
                b = y !== void 0 && y,
                w = i.preventRunning,
                S = w !== void 0 && w,
                x = i.prevent,
                P = x === void 0 ? null : x,
                C = i.debug,
                A = i.logLevel;
            if (zs.setLevel((C !== void 0 && C) === !0 ? "debug" : A === void 0 ? "off" : A), this.logger.info(this.version), Object.keys(u)
                .forEach(function(Y) {
                    vn[Y] && (vn[Y] = u[Y])
                }), this.B = c, this.timeout = f, this.cacheIgnore = m, this.cacheFirstPage = p, this.prefetchIgnore = b, this.preventRunning = S, this.q = this.dom.getWrapper(), !this.q) throw new Error("[@barba/core] No Barba wrapper found");
            this.I();
            var k = this.data.current;
            if (!k.container) throw new Error("[@barba/core] No Barba container found");
            if (this.cache = new Hy(m), this.headers = new qy, this.prevent = new Qy(b), this.transitions = new tD(s), this.views = new iD(a), P !== null) {
                if (typeof P != "function") throw new Error("[@barba/core] Prevent should be a function");
                this.prevent.add("preventCustom", P)
            }
            this.history.init(k.url.href, k.namespace), p && this.cache.set(k.url.href, Promise.resolve({
                html: k.html,
                url: k.url
            }), "init", "fulfilled"), this.U = this.U.bind(this), this.$ = this.$.bind(this), this.X = this.X.bind(this), this.G(), this.plugins.forEach(function(Y) {
                return Y.init()
            });
            var I = this.data;
            I.trigger = "barba", I.next = I.current, I.current = mn({}, this.schemaPage), this.hooks.do("ready", I), this.once(I), this.I()
        }, e.destroy = function() {
            this.I(), this.J(), this.history.clear(), this.hooks.clear(), this.plugins = []
        }, e.force = function(t) {
            window.location.assign(t)
        }, e.go = function(t, i, n) {
            var s;
            if (i === void 0 && (i = "barba"), this.F = null, this.transitions.isRunning) this.force(t);
            else if (!(s = i === "popstate" ? this.history.current && this.url.getPath(this.history.current.url) === this.url.getPath(t) && this.url.getQuery(this.history.current.url, !0) === this.url.getQuery(t, !0) : this.prevent.run("sameUrl", null, null, t)) || this.transitions.hasSelf) return i = this.history.change(this.cache.has(t) ? this.cache.get(t)
                .target : t, i, n), n && (n.stopPropagation(), n.preventDefault()), this.page(t, i, n ?? void 0, s)
        }, e.once = function(t) {
            try {
                var i = this;
                return Promise.resolve(i.hooks.do("beforeEnter", t))
                    .then(function() {
                        function n() {
                            return Promise.resolve(i.hooks.do("afterEnter", t))
                                .then(function() {})
                        }
                        var s = function() {
                            if (i.transitions.hasOnce) {
                                var o = i.transitions.get(t, {
                                    once: !0
                                });
                                return Promise.resolve(i.transitions.doOnce({
                                        transition: o,
                                        data: t
                                    }))
                                    .then(function() {})
                            }
                        }();
                        return s && s.then ? s.then(n) : n()
                    })
            } catch (n) {
                return Promise.reject(n)
            }
        }, e.page = function(t, i, n, s) {
            try {
                var o, a = function() {
                        var h = l.data;
                        return Promise.resolve(l.hooks.do("page", h))
                            .then(function() {
                                var f = function(g, m) {
                                    try {
                                        var d = (p = l.transitions.get(h, {
                                                once: !1,
                                                self: s
                                            }), Promise.resolve(l.transitions.doPage({
                                                data: h,
                                                page: o,
                                                transition: p,
                                                wrapper: l.q
                                            }))
                                            .then(function() {
                                                l.I()
                                            }))
                                    } catch {
                                        return m()
                                    }
                                    var p;
                                    return d && d.then ? d.then(void 0, m) : d
                                }(0, function() {
                                    zs.getLevel() === 0 && l.force(h.next.url.href)
                                });
                                if (f && f.then) return f.then(function() {})
                            })
                    },
                    l = this;
                if (l.data.next.url = mn({
                        href: t
                    }, l.url.parse(t)), l.data.trigger = i, l.data.event = n, l.cache.has(t)) o = l.cache.update(t, {
                        action: "click"
                    })
                    .request;
                else {
                    var u = l.request(t, l.timeout, l.onRequestError.bind(l, i), l.cache, l.headers);
                    u.then(function(h) {
                            h.url.href !== t && l.history.add(h.url.href, i, "replace")
                        }), o = l.cache.set(t, u, "click", "pending")
                        .request
                }
                var c = function() {
                    if (l.transitions.shouldWait) return Promise.resolve(mu(o, l.data))
                        .then(function() {})
                }();
                return Promise.resolve(c && c.then ? c.then(a) : a())
            } catch (h) {
                return Promise.reject(h)
            }
        }, e.onRequestError = function(t) {
            this.transitions.isRunning = !1;
            var i = [].slice.call(arguments, 1),
                n = i[0],
                s = i[1],
                o = this.cache.getAction(n);
            return this.cache.delete(n), this.B && this.B(t, o, n, s) === !1 || o === "click" && this.force(n), !1
        }, e.prefetch = function(t) {
            var i = this;
            t = this.url.getAbsoluteHref(t), this.cache.has(t) || this.cache.set(t, this.request(t, this.timeout, this.onRequestError.bind(this, "barba"), this.cache, this.headers)
                .catch(function(n) {
                    i.logger.error(n)
                }), "prefetch", "pending")
        }, e.G = function() {
            this.prefetchIgnore !== !0 && (document.addEventListener("mouseover", this.U), document.addEventListener("touchstart", this.U)), document.addEventListener("click", this.$), window.addEventListener("popstate", this.X)
        }, e.J = function() {
            this.prefetchIgnore !== !0 && (document.removeEventListener("mouseover", this.U), document.removeEventListener("touchstart", this.U)), document.removeEventListener("click", this.$), window.removeEventListener("popstate", this.X)
        }, e.U = function(t) {
            var i = this,
                n = this.W(t);
            if (n) {
                var s = this.url.getAbsoluteHref(this.dom.getHref(n));
                this.prevent.checkHref(s) || this.cache.has(s) || this.cache.set(s, this.request(s, this.timeout, this.onRequestError.bind(this, n), this.cache, this.headers)
                    .catch(function(o) {
                        i.logger.error(o)
                    }), "enter", "pending")
            }
        }, e.$ = function(t) {
            var i = this.W(t);
            if (i) {
                if (this.transitions.isRunning && this.preventRunning) return t.preventDefault(), void t.stopPropagation();
                this.F = t, this.go(this.dom.getHref(i), i, t)
            }
        }, e.X = function(t) {
            this.go(this.url.getHref(), "popstate", t)
        }, e.W = function(t) {
            for (var i = t.target; i && !this.dom.getHref(i);) i = i.parentNode;
            if (i && !this.prevent.checkLink(i, t, this.dom.getHref(i))) return i
        }, e.I = function() {
            var t = this.url.getHref(),
                i = {
                    container: this.dom.getContainer(),
                    html: this.dom.getHtml(),
                    namespace: this.dom.getNamespace(),
                    url: mn({
                        href: t
                    }, this.url.parse(t))
                };
            this.D = {
                current: i,
                event: void 0,
                next: mn({}, this.schemaPage),
                trigger: void 0
            }, this.hooks.do("reset", this.data)
        }, Zh(r, [{
            key: "data",
            get: function() {
                return this.D
            }
        }, {
            key: "wrapper",
            get: function() {
                return this.q
            }
        }]), r
    }());
class sD {
    scroll;
    transitionContainer;
    selfLinks;
    darkBackground = !1;
    onPageLeave;
    onPageEnter;
    onBeforeEnter;
    onAfterEnter;
    onBeforeLeave;
    menuOpen = !1;
    workPageState;
    constructor({
        scroll: e,
        onPageEnter: t,
        onPageLeave: i,
        onBeforeEnter: n,
        onAfterEnter: s,
        onBeforeLeave: o
    }) {
        this.scroll = e, this.onPageLeave = i, this.onPageEnter = t, this.onBeforeEnter = n, this.onAfterEnter = s, this.onBeforeLeave = o, this.transitionContainer = B("#transition-container"), nD.init({
            prefetchIgnore: !0,
            transitions: [{
                name: "default-transition",
                beforeLeave: () => {
                    this.darkBackground = this.onBeforeLeave()
                },
                leave: () => {
                    const a = Fe("[data-transition-block]");
                    oe.set(a, {
                        yPercent: 100
                    }), this.transitionContainer.style.opacity = "1", this.transitionContainer.style.pointerEvents = "auto";
                    const l = B("#transition-overlay"),
                        u = Fe("[data-transition-logo]"),
                        c = B("#scroll-container");
                    return B("[layout-container]")
                        .style.background = this.darkBackground ? "rgb(var(--color-dark-1))" : "rgb(var(--color-orange-1))", B("[layout-container]")
                        .style.overflowY = "scroll", c.classList.add("no-scrollbar"), new Promise(h => {
                            const f = oe.timeline();
                            f.to(c, {
                                scale: .95,
                                borderRadius: "3vmax",
                                duration: .4,
                                ease: "power1.inOut"
                            }), f.to(l, {
                                opacity: 1,
                                duration: .2
                            }, "<"), f.to(a, {
                                yPercent: 0,
                                duration: .3,
                                stagger: .2,
                                ease: "power1.inOut"
                            }, "<+=0.35"), f.to(u, {
                                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                                duration: .3,
                                stagger: .2,
                                ease: "power1.inOut"
                            }, "<"), f.call(() => {
                                this.clearSelfLinks(), this.onPageLeave(), h()
                            })
                        })
                },
                beforeEnter: () => {
                    this.onBeforeEnter()
                },
                after: () => {
                    this.setupCovers();
                    const a = B("#transition-overlay"),
                        l = B("#scroll-container"),
                        u = Fe("[data-transition-block]"),
                        c = Fe("[data-transition-logo]");
                    return new Promise(h => {
                        this.onPageEnter(), this.setupSelfLinks();
                        const f = oe.timeline();
                        f.to(u.reverse(), {
                            yPercent: -100,
                            duration: .3,
                            ease: "power2.in"
                        }, "<"), f.to(c.reverse(), {
                            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                            duration: .3,
                            ease: "power2.in"
                        }, "<"), f.to(l, {
                            scale: 1,
                            borderRadius: "0",
                            duration: .35,
                            ease: "power1.inOut"
                        }, "<+=0.2"), f.to(a, {
                            opacity: 0,
                            duration: .4
                        }, "<"), f.call(() => {
                            this.transitionContainer.style.opacity = "0", this.transitionContainer.style.pointerEvents = "none", B("[layout-container]")
                                .style.background = "none", B("[layout-container]")
                                .style.overflowY = "unset", l.classList.remove("no-scrollbar"), this.onAfterEnter(), h()
                        })
                    })
                }
            }, {
                name: "work-transition",
                from: {
                    custom: () => {
                        const a = B("[data-next-work-link]");
                        return a ? a.getAttribute("data-clicked") === "true" : !1
                    }
                },
                beforeLeave: () => {
                    this.onBeforeLeave()
                },
                leave: this.onWorkLeave.bind(this),
                beforeEnter: () => {
                    this.onBeforeEnter()
                },
                after: this.onWorkEnter.bind(this)
            }]
        }), this.setupSelfLinks()
    }
    onWorkLeave() {
        window.lenis && window.lenis.scrollTo(window.lenis.scroll, {
            immediate: !0
        }), this.registerMenuState();
        const e = B("#work-transition-layer");
        e.style.pointerEvents = "auto";
        const t = B("[data-next-work-hide-layer]"),
            i = B("[data-next-work-subtitle]"),
            n = B("[data-next-work-title-text]"),
            s = B("[data-next-work-title-overlay]");
        return this.registerWorkPageState(), new Promise(o => {
            const a = oe.timeline();
            a.to(i, {
                opacity: 0,
                duration: .3
            }, "<"), a.to(t, {
                opacity: 1,
                duration: .3,
                ease: "power1.inOut"
            }, "<"), a.to(n, {
                opacity: 0,
                duration: .3,
                ease: "power1.inOut"
            }, "<"), a.to(s, {
                opacity: 1,
                duration: .2,
                ease: "power1.inOut"
            }, "<"), a.call(() => {
                this.onPageLeave(), o()
            })
        })
    }
    registerWorkPageState() {
        const t = B("[data-next-work-title]")
            .getBoundingClientRect()
            .top,
            i = B("[data-next-work-cover]"),
            n = i.getBoundingClientRect()
            .top,
            s = B("[data-speed]", i)
            .style.transform,
            a = B("[data-next-work-button]")
            .getBoundingClientRect()
            .top;
        this.workPageState = {
            titleTop: t,
            coverTop: n,
            coverImageTransform: s,
            buttonTop: a
        }
    }
    registerMenuState() {
        const e = B("#mobile-menu");
        this.menuOpen = e && e.hasAttribute("menu-open")
    }
    setupMobileMenu() {
        const e = B("#mobile-menu");
        if (e) {
            if (this.menuOpen) {
                e.setAttribute("menu-open", "true"), e.style.opacity = "1", e.style.pointerEvents = "auto";
                const t = B("[data-mobile-menu-background-container]");
                oe.set(B("#mobile-menu-open-button"), {
                    yPercent: -100
                });
                const i = B("[data-mobile-menu-background]");
                t.appendChild(i)
            }
            this.menuOpen = !1
        }
    }
    onWorkEnter() {
        this.setupCovers(), this.setupMobileMenu();
        const e = B("#work-transition-layer"),
            t = B("[data-work-title]"),
            i = t.getBoundingClientRect()
            .top,
            n = this.workPageState.titleTop - i,
            s = B("[data-work-cover]"),
            o = s.getBoundingClientRect()
            .top,
            a = this.workPageState.coverTop - o,
            l = B("[data-speed]", s);
        l.style.transform = this.workPageState.coverImageTransform;
        const u = B("[data-work-hero-button]");
        u.setAttribute("data-transitioned", "true");
        const c = u.getBoundingClientRect()
            .top,
            h = this.workPageState.buttonTop - c;
        return oe.set(t, {
            y: n
        }), oe.set(s, {
            y: a
        }), oe.set(u, {
            y: h
        }), new Promise(f => {
            this.onPageEnter();
            const g = B("[data-work-hide-layer]");
            oe.set(g, {
                opacity: 1
            });
            const m = oe.timeline();
            m.to(t, {
                y: 0,
                duration: .6,
                ease: "power1.inOut"
            }, "<"), m.to(s, {
                y: 0,
                duration: .6,
                ease: "power1.inOut"
            }, "<"), m.to(u, {
                y: 0,
                duration: .6,
                ease: "power1.inOut"
            }, "<"), m.to(g, {
                opacity: 0,
                duration: .6,
                ease: "power1.inOut"
            }), m.call(() => {
                e.style.pointerEvents = "none", f()
            })
        })
    }
    setupCovers() {
        const e = B("[data-next-work-cover-image]"),
            t = B("[data-work-cover-image]");
        if (!e || !t) return;
        [e, t].forEach(n => {
            const s = n.getAttribute("data-src");
            s && window.COVERS[s] && n.append(window.COVERS[s])
        })
    }
    onClinkSelfLink(e) {
        e.preventDefault();
        const t = Fe("[data-transition-block]");
        oe.set(t, {
            yPercent: 100
        }), this.transitionContainer.style.opacity = "1", this.transitionContainer.style.pointerEvents = "auto";
        const i = B("#transition-overlay"),
            n = Fe("[data-transition-logo]"),
            s = B("#scroll-container");
        B("[layout-container]")
            .style.background = "rgb(var(--color-dark-1))", B("[layout-container]")
            .style.overflowY = "scroll", s.classList.add("no-scrollbar");
        const o = oe.timeline();
        o.to(s, {
            scale: .95,
            borderRadius: "3vmax",
            duration: .4,
            ease: "power1.inOut"
        }), o.to(i, {
            opacity: 1,
            duration: .2
        }, "<"), o.to(t[0], {
            yPercent: 0,
            duration: .3,
            ease: "power1.inOut"
        }, "<+=0.35"), o.to(n[0], {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: .3,
            ease: "power1.inOut"
        }, "<");
        const a = oe.timeline({
            paused: !0
        });
        o.call(() => {
            this.scroll.resetScroll(), a.play()
        }), a.to(t[0], {
            yPercent: -100,
            duration: .3,
            ease: "power2.in"
        }, "<"), a.to(n[0], {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            duration: .3,
            ease: "power2.in"
        }, "<"), a.to(s, {
            scale: 1,
            borderRadius: "0",
            duration: .35,
            ease: "power1.inOut"
        }, "<+=0.2"), a.to(i, {
            opacity: 0,
            duration: .4
        }, "<"), a.call(() => {
            this.transitionContainer.style.opacity = "0", this.transitionContainer.style.pointerEvents = "none", B("[layout-container]")
                .style.background = "none", B("[layout-container]")
                .style.overflowY = "unset", s.classList.remove("no-scrollbar")
        })
    }
    setupSelfLinks() {
        this.selfLinks = Fe("[data-self-link]"), this.selfLinks.forEach(e => {
            e.addEventListener("click", this.onClinkSelfLink.bind(this))
        })
    }
    clearSelfLinks() {
        this.selfLinks.forEach(e => {
            e.removeEventListener("click", this.onClinkSelfLink.bind(this))
        }), this.selfLinks = []
    }
}
class oD {
    element;
    video;
    muteButton;
    playButton;
    videoLayer;
    icons;
    constructor({
        element: e
    }) {
        this.element = e, this.video = B("video", this.element), this.videoLayer = B("[data-video-layer]", this.element), this.muteButton = B("[data-volume-button]", this.element), this.playButton = B("[data-play-button]", this.element), this.icons = {
            play: {
                active: Fe("[data-active-icon]", this.playButton),
                inactive: Fe("[data-inactive-icon]", this.playButton)
            },
            volume: {
                active: Fe("[data-active-icon]", this.muteButton),
                inactive: Fe("[data-inactive-icon]", this.muteButton)
            }
        }, this.playButton.addEventListener("click", this.onPlayClick.bind(this)), this.videoLayer.addEventListener("click", this.onPlayClick.bind(this)), this.muteButton.addEventListener("click", this.onVolumeClick.bind(this))
    }
    onPlayClick() {
        this.video.paused || this.video.ended ? this.video.play()
            .catch(e => {
                console.error("Play failed:", e)
            })
            .then(() => {
                this.icons.play.active.forEach(e => {
                    e.style.opacity = "0"
                }), this.icons.play.inactive.forEach(e => {
                    e.style.opacity = "1"
                })
            }) : (this.video.pause(), this.icons.play.active.forEach(e => {
                e.style.opacity = "1"
            }), this.icons.play.inactive.forEach(e => {
                e.style.opacity = "0"
            }))
    }
    onVolumeClick() {
        this.video.muted ? (this.video.muted = !1, this.icons.volume.active.forEach(e => {
            e.style.opacity = "1"
        }), this.icons.volume.inactive.forEach(e => {
            e.style.opacity = "0"
        })) : (this.video.muted = !0, this.icons.volume.active.forEach(e => {
            e.style.opacity = "0"
        }), this.icons.volume.inactive.forEach(e => {
            e.style.opacity = "1"
        }))
    }
    destroy() {
        this.playButton.removeEventListener("click", this.onPlayClick.bind(this)), this.videoLayer.removeEventListener("click", this.onPlayClick.bind(this)), this.muteButton.removeEventListener("click", this.onVolumeClick.bind(this))
    }
}
class aD {
    container;
    rotatedTextElement;
    constructor() {
        this.container = B("#live-button"), this.rotatedTextElement = new Sg({
            container: this.container
        })
    }
}
class lD extends Za {
    elasticRotatedTextButton;
    textSections;
    readerIndexElement;
    nextWorkLink = B("[data-next-work-link]");
    scrollTop;
    sectionsData;
    activeSection;
    players = [];
    scrollDownButtons;
    worksCursor;
    constructor() {
        super(), this.scrollTop = 0, this.activeSection = null, this.textSections = [B("[data-work-overview]"), B("[data-work-problem]"), B("[data-work-solution]")], this.readerIndexElement = B("[data-work-reader-index]"), this.loadImages(), this.setupScrollDownButton(), this.createHoverTextAnimation(), this.setSectionsData(), this.createElasticRotatedTextButton(), this.handleAutoplayVideos(), this.createVideoPlayers(), this.createWorksCursor(), this.nextWorkLink.addEventListener("click", this.onClickNextWorkLink.bind(this))
    }
    setSectionsData() {
        this.sectionsData = [], this.textSections.forEach((e, t) => {
            const i = e.getBoundingClientRect(),
                n = {
                    index: t,
                    element: e,
                    top: i.top,
                    height: i.height
                };
            this.sectionsData.push(n)
        })
    }
    updateSectionsData() {
        this.sectionsData.forEach((e, t) => {
            const i = e.element.getBoundingClientRect();
            e.top = i.top + this.scrollTop, e.height = i.height
        })
    }
    onScroll(e) {
        this.scrollTop = e, this.sectionsData.forEach(t => {
            this.scrollTop >= t.top && this.scrollTop <= t.top + t.height && this.activeSection !== t && this.readerIndexElement.style.setProperty("--index-value", `${t.index}`)
        })
    }
    onClickNextWorkLink() {
        this.nextWorkLink.setAttribute("data-clicked", "true")
    }
    handleAutoplayVideos() {
        Fe("video[data-autoplay-video]")
            .forEach(t => {
                t.pause(), t.currentTime = 0, t.load(), t.play()
                    .catch(i => {
                        console.warn("Autoplay failed:", i)
                    })
            })
    }
    loadImages() {
        Fe("img[data-lazy-image]")
            .forEach(t => {
                t.complete || (t.style.opacity = "0", t.addEventListener("load", () => {
                    t.style.opacity = "1"
                }))
            })
    }
    createVideoPlayers() {
        Fe("[data-video-player]")
            .forEach(t => {
                const i = new oD({
                    element: t
                });
                this.players.push(i)
            })
    }
    onResize() {
        this.updateSectionsData()
    }
    createWorksCursor() {
        this.worksCursor = new Tg
    }
    destroy() {
        this.orangeLinks.forEach(e => {
            e.removeEventListener("click", this.onClickOrangeLink.bind(this, e))
        }), this.worksCursor.destroy(), this.mobileMenu?.destroy(), this.nextWorkLink.removeEventListener("click", this.onClickNextWorkLink.bind(this)), this.scrollDownButtons.forEach(e => {
            e.removeEventListener("click", this.onClickScrollDownButton.bind(this, e))
        }), this.players.forEach(e => {
            e.destroy()
        })
    }
    setupScrollDownButton() {
        this.scrollDownButtons = Fe("[data-scroll-down-button]"), this.scrollDownButtons.forEach(e => {
            e.addEventListener("click", this.onClickScrollDownButton.bind(this, e))
        })
    }
    onClickScrollDownButton(e) {
        const t = e.getAttribute("data-scroll-down-button") || "";
        window.lenis && t && window.lenis.scrollTo(t, {
            duration: 2
        })
    }
    setupCovers() {
        [B("[data-next-work-cover-image]"), B("[data-work-cover-image]")].forEach(t => {
            const i = t.getAttribute("data-src");
            i && window.COVERS[i] && t.append(window.COVERS[i])
        })
    }
    onFirstLoad() {
        this.setupCovers()
    }
    createElasticRotatedTextButton() {
        this.elasticRotatedTextButton = new aD
    }
    render() {
        this.worksCursor.render()
    }
}

function Qg(r, e) {
    return function() {
        return r.apply(e, arguments)
    }
}
const {
    toString: uD
} = Object.prototype, {
    getPrototypeOf: Qh
} = Object, {
    iterator: ku,
    toStringTag: e0
} = Symbol, Pu = (r => e => {
    const t = uD.call(e);
    return r[t] || (r[t] = t.slice(8, -1)
        .toLowerCase())
})(Object.create(null)), nn = r => (r = r.toLowerCase(), e => Pu(e) === r), Au = r => e => typeof e === r, {
    isArray: Wo
} = Array, Ja = Au("undefined");

function cD(r) {
    return r !== null && !Ja(r) && r.constructor !== null && !Ja(r.constructor) && ur(r.constructor.isBuffer) && r.constructor.isBuffer(r)
}
const t0 = nn("ArrayBuffer");

function hD(r) {
    let e;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(r) : e = r && r.buffer && t0(r.buffer), e
}
const fD = Au("string"),
    ur = Au("function"),
    i0 = Au("number"),
    Fu = r => r !== null && typeof r == "object",
    dD = r => r === !0 || r === !1,
    Gl = r => {
        if (Pu(r) !== "object") return !1;
        const e = Qh(r);
        return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(e0 in r) && !(ku in r)
    },
    pD = nn("Date"),
    gD = nn("File"),
    mD = nn("Blob"),
    _D = nn("FileList"),
    yD = r => Fu(r) && ur(r.pipe),
    DD = r => {
        let e;
        return r && (typeof FormData == "function" && r instanceof FormData || ur(r.append) && ((e = Pu(r)) === "formdata" || e === "object" && ur(r.toString) && r.toString() === "[object FormData]"))
    },
    vD = nn("URLSearchParams"),
    [wD, bD, xD, ED] = ["ReadableStream", "Request", "Response", "Headers"].map(nn),
    CD = r => r.trim ? r.trim() : r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

function Qa(r, e, {
    allOwnKeys: t = !1
} = {}) {
    if (r === null || typeof r > "u") return;
    let i, n;
    if (typeof r != "object" && (r = [r]), Wo(r))
        for (i = 0, n = r.length; i < n; i++) e.call(null, r[i], i, r);
    else {
        const s = t ? Object.getOwnPropertyNames(r) : Object.keys(r),
            o = s.length;
        let a;
        for (i = 0; i < o; i++) a = s[i], e.call(null, r[a], a, r)
    }
}

function r0(r, e) {
    e = e.toLowerCase();
    const t = Object.keys(r);
    let i = t.length,
        n;
    for (; i-- > 0;)
        if (n = t[i], e === n.toLowerCase()) return n;
    return null
}
const Hs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global,
    n0 = r => !Ja(r) && r !== Hs;

function ah() {
    const {
        caseless: r
    } = n0(this) && this || {}, e = {}, t = (i, n) => {
        const s = r && r0(e, n) || n;
        Gl(e[s]) && Gl(i) ? e[s] = ah(e[s], i) : Gl(i) ? e[s] = ah({}, i) : Wo(i) ? e[s] = i.slice() : e[s] = i
    };
    for (let i = 0, n = arguments.length; i < n; i++) arguments[i] && Qa(arguments[i], t);
    return e
}
const SD = (r, e, t, {
        allOwnKeys: i
    } = {}) => (Qa(e, (n, s) => {
        t && ur(n) ? r[s] = Qg(n, t) : r[s] = n
    }, {
        allOwnKeys: i
    }), r),
    TD = r => (r.charCodeAt(0) === 65279 && (r = r.slice(1)), r),
    kD = (r, e, t, i) => {
        r.prototype = Object.create(e.prototype, i), r.prototype.constructor = r, Object.defineProperty(r, "super", {
            value: e.prototype
        }), t && Object.assign(r.prototype, t)
    },
    PD = (r, e, t, i) => {
        let n, s, o;
        const a = {};
        if (e = e || {}, r == null) return e;
        do {
            for (n = Object.getOwnPropertyNames(r), s = n.length; s-- > 0;) o = n[s], (!i || i(o, r, e)) && !a[o] && (e[o] = r[o], a[o] = !0);
            r = t !== !1 && Qh(r)
        } while (r && (!t || t(r, e)) && r !== Object.prototype);
        return e
    },
    AD = (r, e, t) => {
        r = String(r), (t === void 0 || t > r.length) && (t = r.length), t -= e.length;
        const i = r.indexOf(e, t);
        return i !== -1 && i === t
    },
    FD = r => {
        if (!r) return null;
        if (Wo(r)) return r;
        let e = r.length;
        if (!i0(e)) return null;
        const t = new Array(e);
        for (; e-- > 0;) t[e] = r[e];
        return t
    },
    LD = (r => e => r && e instanceof r)(typeof Uint8Array < "u" && Qh(Uint8Array)),
    OD = (r, e) => {
        const i = (r && r[ku])
            .call(r);
        let n;
        for (;
            (n = i.next()) && !n.done;) {
            const s = n.value;
            e.call(r, s[0], s[1])
        }
    },
    RD = (r, e) => {
        let t;
        const i = [];
        for (;
            (t = r.exec(e)) !== null;) i.push(t);
        return i
    },
    MD = nn("HTMLFormElement"),
    BD = r => r.toLowerCase()
    .replace(/[-_\s]([a-z\d])(\w*)/g, function(t, i, n) {
        return i.toUpperCase() + n
    }),
    Td = (({
        hasOwnProperty: r
    }) => (e, t) => r.call(e, t))(Object.prototype),
    ND = nn("RegExp"),
    s0 = (r, e) => {
        const t = Object.getOwnPropertyDescriptors(r),
            i = {};
        Qa(t, (n, s) => {
            let o;
            (o = e(n, s, r)) !== !1 && (i[s] = o || n)
        }), Object.defineProperties(r, i)
    },
    ID = r => {
        s0(r, (e, t) => {
            if (ur(r) && ["arguments", "caller", "callee"].indexOf(t) !== -1) return !1;
            const i = r[t];
            if (ur(i)) {
                if (e.enumerable = !1, "writable" in e) {
                    e.writable = !1;
                    return
                }
                e.set || (e.set = () => {
                    throw Error("Can not rewrite read-only method '" + t + "'")
                })
            }
        })
    },
    zD = (r, e) => {
        const t = {},
            i = n => {
                n.forEach(s => {
                    t[s] = !0
                })
            };
        return Wo(r) ? i(r) : i(String(r)
            .split(e)), t
    },
    VD = () => {},
    HD = (r, e) => r != null && Number.isFinite(r = +r) ? r : e;

function qD(r) {
    return !!(r && ur(r.append) && r[e0] === "FormData" && r[ku])
}
const $D = r => {
        const e = new Array(10),
            t = (i, n) => {
                if (Fu(i)) {
                    if (e.indexOf(i) >= 0) return;
                    if (!("toJSON" in i)) {
                        e[n] = i;
                        const s = Wo(i) ? [] : {};
                        return Qa(i, (o, a) => {
                            const l = t(o, n + 1);
                            !Ja(l) && (s[a] = l)
                        }), e[n] = void 0, s
                    }
                }
                return i
            };
        return t(r, 0)
    },
    UD = nn("AsyncFunction"),
    WD = r => r && (Fu(r) || ur(r)) && ur(r.then) && ur(r.catch),
    o0 = ((r, e) => r ? setImmediate : e ? ((t, i) => (Hs.addEventListener("message", ({
        source: n,
        data: s
    }) => {
        n === Hs && s === t && i.length && i.shift()()
    }, !1), n => {
        i.push(n), Hs.postMessage(t, "*")
    }))(`axios@${Math.random()}`, []) : t => setTimeout(t))(typeof setImmediate == "function", ur(Hs.postMessage)),
    YD = typeof queueMicrotask < "u" ? queueMicrotask.bind(Hs) : typeof process < "u" && process.nextTick || o0,
    XD = r => r != null && ur(r[ku]),
    z = {
        isArray: Wo,
        isArrayBuffer: t0,
        isBuffer: cD,
        isFormData: DD,
        isArrayBufferView: hD,
        isString: fD,
        isNumber: i0,
        isBoolean: dD,
        isObject: Fu,
        isPlainObject: Gl,
        isReadableStream: wD,
        isRequest: bD,
        isResponse: xD,
        isHeaders: ED,
        isUndefined: Ja,
        isDate: pD,
        isFile: gD,
        isBlob: mD,
        isRegExp: ND,
        isFunction: ur,
        isStream: yD,
        isURLSearchParams: vD,
        isTypedArray: LD,
        isFileList: _D,
        forEach: Qa,
        merge: ah,
        extend: SD,
        trim: CD,
        stripBOM: TD,
        inherits: kD,
        toFlatObject: PD,
        kindOf: Pu,
        kindOfTest: nn,
        endsWith: AD,
        toArray: FD,
        forEachEntry: OD,
        matchAll: RD,
        isHTMLForm: MD,
        hasOwnProperty: Td,
        hasOwnProp: Td,
        reduceDescriptors: s0,
        freezeMethods: ID,
        toObjectSet: zD,
        toCamelCase: BD,
        noop: VD,
        toFiniteNumber: HD,
        findKey: r0,
        global: Hs,
        isContextDefined: n0,
        isSpecCompliantForm: qD,
        toJSONObject: $D,
        isAsyncFn: UD,
        isThenable: WD,
        setImmediate: o0,
        asap: YD,
        isIterable: XD
    };

function Ae(r, e, t, i, n) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error()
        .stack, this.message = r, this.name = "AxiosError", e && (this.code = e), t && (this.config = t), i && (this.request = i), n && (this.response = n, this.status = n.status ? n.status : null)
}
z.inherits(Ae, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: z.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
});
const a0 = Ae.prototype,
    l0 = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(r => {
    l0[r] = {
        value: r
    }
});
Object.defineProperties(Ae, l0);
Object.defineProperty(a0, "isAxiosError", {
    value: !0
});
Ae.from = (r, e, t, i, n, s) => {
    const o = Object.create(a0);
    return z.toFlatObject(r, o, function(l) {
        return l !== Error.prototype
    }, a => a !== "isAxiosError"), Ae.call(o, r.message, e, t, i, n), o.cause = r, o.name = r.name, s && Object.assign(o, s), o
};
const jD = null;

function lh(r) {
    return z.isPlainObject(r) || z.isArray(r)
}

function u0(r) {
    return z.endsWith(r, "[]") ? r.slice(0, -2) : r
}

function kd(r, e, t) {
    return r ? r.concat(e)
        .map(function(n, s) {
            return n = u0(n), !t && s ? "[" + n + "]" : n
        })
        .join(t ? "." : "") : e
}

function GD(r) {
    return z.isArray(r) && !r.some(lh)
}
const JD = z.toFlatObject(z, {}, null, function(e) {
    return /^is[A-Z]/.test(e)
});

function Lu(r, e, t) {
    if (!z.isObject(r)) throw new TypeError("target must be an object");
    e = e || new FormData, t = z.toFlatObject(t, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(d, p) {
        return !z.isUndefined(p[d])
    });
    const i = t.metaTokens,
        n = t.visitor || c,
        s = t.dots,
        o = t.indexes,
        l = (t.Blob || typeof Blob < "u" && Blob) && z.isSpecCompliantForm(e);
    if (!z.isFunction(n)) throw new TypeError("visitor must be a function");

    function u(m) {
        if (m === null) return "";
        if (z.isDate(m)) return m.toISOString();
        if (!l && z.isBlob(m)) throw new Ae("Blob is not supported. Use a Buffer instead.");
        return z.isArrayBuffer(m) || z.isTypedArray(m) ? l && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m
    }

    function c(m, d, p) {
        let y = m;
        if (m && !p && typeof m == "object") {
            if (z.endsWith(d, "{}")) d = i ? d : d.slice(0, -2), m = JSON.stringify(m);
            else if (z.isArray(m) && GD(m) || (z.isFileList(m) || z.endsWith(d, "[]")) && (y = z.toArray(m))) return d = u0(d), y.forEach(function(w, S) {
                !(z.isUndefined(w) || w === null) && e.append(o === !0 ? kd([d], S, s) : o === null ? d : d + "[]", u(w))
            }), !1
        }
        return lh(m) ? !0 : (e.append(kd(p, d, s), u(m)), !1)
    }
    const h = [],
        f = Object.assign(JD, {
            defaultVisitor: c,
            convertValue: u,
            isVisitable: lh
        });

    function g(m, d) {
        if (!z.isUndefined(m)) {
            if (h.indexOf(m) !== -1) throw Error("Circular reference detected in " + d.join("."));
            h.push(m), z.forEach(m, function(y, b) {
                (!(z.isUndefined(y) || y === null) && n.call(e, y, z.isString(b) ? b.trim() : b, d, f)) === !0 && g(y, d ? d.concat(b) : [b])
            }), h.pop()
        }
    }
    if (!z.isObject(r)) throw new TypeError("data must be an object");
    return g(r), e
}

function Pd(r) {
    const e = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(r)
        .replace(/[!'()~]|%20|%00/g, function(i) {
            return e[i]
        })
}

function ef(r, e) {
    this._pairs = [], r && Lu(r, this, e)
}
const c0 = ef.prototype;
c0.append = function(e, t) {
    this._pairs.push([e, t])
};
c0.toString = function(e) {
    const t = e ? function(i) {
        return e.call(this, i, Pd)
    } : Pd;
    return this._pairs.map(function(n) {
            return t(n[0]) + "=" + t(n[1])
        }, "")
        .join("&")
};

function KD(r) {
    return encodeURIComponent(r)
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+")
        .replace(/%5B/gi, "[")
        .replace(/%5D/gi, "]")
}

function h0(r, e, t) {
    if (!e) return r;
    const i = t && t.encode || KD;
    z.isFunction(t) && (t = {
        serialize: t
    });
    const n = t && t.serialize;
    let s;
    if (n ? s = n(e, t) : s = z.isURLSearchParams(e) ? e.toString() : new ef(e, t)
        .toString(i), s) {
        const o = r.indexOf("#");
        o !== -1 && (r = r.slice(0, o)), r += (r.indexOf("?") === -1 ? "?" : "&") + s
    }
    return r
}
class Ad {
    constructor() {
        this.handlers = []
    }
    use(e, t, i) {
        return this.handlers.push({
            fulfilled: e,
            rejected: t,
            synchronous: i ? i.synchronous : !1,
            runWhen: i ? i.runWhen : null
        }), this.handlers.length - 1
    }
    eject(e) {
        this.handlers[e] && (this.handlers[e] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(e) {
        z.forEach(this.handlers, function(i) {
            i !== null && e(i)
        })
    }
}
const f0 = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1
    },
    ZD = typeof URLSearchParams < "u" ? URLSearchParams : ef,
    QD = typeof FormData < "u" ? FormData : null,
    e1 = typeof Blob < "u" ? Blob : null,
    t1 = {
        isBrowser: !0,
        classes: {
            URLSearchParams: ZD,
            FormData: QD,
            Blob: e1
        },
        protocols: ["http", "https", "file", "blob", "url", "data"]
    },
    tf = typeof window < "u" && typeof document < "u",
    uh = typeof navigator == "object" && navigator || void 0,
    i1 = tf && (!uh || ["ReactNative", "NativeScript", "NS"].indexOf(uh.product) < 0),
    r1 = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function",
    n1 = tf && window.location.href || "http://localhost",
    s1 = Object.freeze(Object.defineProperty({
        __proto__: null,
        hasBrowserEnv: tf,
        hasStandardBrowserEnv: i1,
        hasStandardBrowserWebWorkerEnv: r1,
        navigator: uh,
        origin: n1
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Fi = {
        ...s1,
        ...t1
    };

function o1(r, e) {
    return Lu(r, new Fi.classes.URLSearchParams, Object.assign({
        visitor: function(t, i, n, s) {
            return Fi.isNode && z.isBuffer(t) ? (this.append(i, t.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments)
        }
    }, e))
}

function a1(r) {
    return z.matchAll(/\w+|\[(\w*)]/g, r)
        .map(e => e[0] === "[]" ? "" : e[1] || e[0])
}

function l1(r) {
    const e = {},
        t = Object.keys(r);
    let i;
    const n = t.length;
    let s;
    for (i = 0; i < n; i++) s = t[i], e[s] = r[s];
    return e
}

function d0(r) {
    function e(t, i, n, s) {
        let o = t[s++];
        if (o === "__proto__") return !0;
        const a = Number.isFinite(+o),
            l = s >= t.length;
        return o = !o && z.isArray(n) ? n.length : o, l ? (z.hasOwnProp(n, o) ? n[o] = [n[o], i] : n[o] = i, !a) : ((!n[o] || !z.isObject(n[o])) && (n[o] = []), e(t, i, n[o], s) && z.isArray(n[o]) && (n[o] = l1(n[o])), !a)
    }
    if (z.isFormData(r) && z.isFunction(r.entries)) {
        const t = {};
        return z.forEachEntry(r, (i, n) => {
            e(a1(i), n, t, 0)
        }), t
    }
    return null
}

function u1(r, e, t) {
    if (z.isString(r)) try {
        return (e || JSON.parse)(r), z.trim(r)
    } catch (i) {
        if (i.name !== "SyntaxError") throw i
    }
    return (t || JSON.stringify)(r)
}
const el = {
    transitional: f0,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(e, t) {
        const i = t.getContentType() || "",
            n = i.indexOf("application/json") > -1,
            s = z.isObject(e);
        if (s && z.isHTMLForm(e) && (e = new FormData(e)), z.isFormData(e)) return n ? JSON.stringify(d0(e)) : e;
        if (z.isArrayBuffer(e) || z.isBuffer(e) || z.isStream(e) || z.isFile(e) || z.isBlob(e) || z.isReadableStream(e)) return e;
        if (z.isArrayBufferView(e)) return e.buffer;
        if (z.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
        let a;
        if (s) {
            if (i.indexOf("application/x-www-form-urlencoded") > -1) return o1(e, this.formSerializer)
                .toString();
            if ((a = z.isFileList(e)) || i.indexOf("multipart/form-data") > -1) {
                const l = this.env && this.env.FormData;
                return Lu(a ? {
                    "files[]": e
                } : e, l && new l, this.formSerializer)
            }
        }
        return s || n ? (t.setContentType("application/json", !1), u1(e)) : e
    }],
    transformResponse: [function(e) {
        const t = this.transitional || el.transitional,
            i = t && t.forcedJSONParsing,
            n = this.responseType === "json";
        if (z.isResponse(e) || z.isReadableStream(e)) return e;
        if (e && z.isString(e) && (i && !this.responseType || n)) {
            const o = !(t && t.silentJSONParsing) && n;
            try {
                return JSON.parse(e)
            } catch (a) {
                if (o) throw a.name === "SyntaxError" ? Ae.from(a, Ae.ERR_BAD_RESPONSE, this, null, this.response) : a
            }
        }
        return e
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: Fi.classes.FormData,
        Blob: Fi.classes.Blob
    },
    validateStatus: function(e) {
        return e >= 200 && e < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
z.forEach(["delete", "get", "head", "post", "put", "patch"], r => {
    el.headers[r] = {}
});
const c1 = z.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
    h1 = r => {
        const e = {};
        let t, i, n;
        return r && r.split(`
`)
            .forEach(function(o) {
                n = o.indexOf(":"), t = o.substring(0, n)
                    .trim()
                    .toLowerCase(), i = o.substring(n + 1)
                    .trim(), !(!t || e[t] && c1[t]) && (t === "set-cookie" ? e[t] ? e[t].push(i) : e[t] = [i] : e[t] = e[t] ? e[t] + ", " + i : i)
            }), e
    },
    Fd = Symbol("internals");

function ha(r) {
    return r && String(r)
        .trim()
        .toLowerCase()
}

function Jl(r) {
    return r === !1 || r == null ? r : z.isArray(r) ? r.map(Jl) : String(r)
}

function f1(r) {
    const e = Object.create(null),
        t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let i;
    for (; i = t.exec(r);) e[i[1]] = i[2];
    return e
}
const d1 = r => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());

function mc(r, e, t, i, n) {
    if (z.isFunction(i)) return i.call(this, e, t);
    if (n && (e = t), !!z.isString(e)) {
        if (z.isString(i)) return e.indexOf(i) !== -1;
        if (z.isRegExp(i)) return i.test(e)
    }
}

function p1(r) {
    return r.trim()
        .toLowerCase()
        .replace(/([a-z\d])(\w*)/g, (e, t, i) => t.toUpperCase() + i)
}

function g1(r, e) {
    const t = z.toCamelCase(" " + e);
    ["get", "set", "has"].forEach(i => {
        Object.defineProperty(r, i + t, {
            value: function(n, s, o) {
                return this[i].call(this, e, n, s, o)
            },
            configurable: !0
        })
    })
}
let cr = class {
    constructor(e) {
        e && this.set(e)
    }
    set(e, t, i) {
        const n = this;

        function s(a, l, u) {
            const c = ha(l);
            if (!c) throw new Error("header name must be a non-empty string");
            const h = z.findKey(n, c);
            (!h || n[h] === void 0 || u === !0 || u === void 0 && n[h] !== !1) && (n[h || l] = Jl(a))
        }
        const o = (a, l) => z.forEach(a, (u, c) => s(u, c, l));
        if (z.isPlainObject(e) || e instanceof this.constructor) o(e, t);
        else if (z.isString(e) && (e = e.trim()) && !d1(e)) o(h1(e), t);
        else if (z.isObject(e) && z.isIterable(e)) {
            let a = {},
                l, u;
            for (const c of e) {
                if (!z.isArray(c)) throw TypeError("Object iterator must return a key-value pair");
                a[u = c[0]] = (l = a[u]) ? z.isArray(l) ? [...l, c[1]] : [l, c[1]] : c[1]
            }
            o(a, t)
        } else e != null && s(t, e, i);
        return this
    }
    get(e, t) {
        if (e = ha(e), e) {
            const i = z.findKey(this, e);
            if (i) {
                const n = this[i];
                if (!t) return n;
                if (t === !0) return f1(n);
                if (z.isFunction(t)) return t.call(this, n, i);
                if (z.isRegExp(t)) return t.exec(n);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(e, t) {
        if (e = ha(e), e) {
            const i = z.findKey(this, e);
            return !!(i && this[i] !== void 0 && (!t || mc(this, this[i], i, t)))
        }
        return !1
    }
    delete(e, t) {
        const i = this;
        let n = !1;

        function s(o) {
            if (o = ha(o), o) {
                const a = z.findKey(i, o);
                a && (!t || mc(i, i[a], a, t)) && (delete i[a], n = !0)
            }
        }
        return z.isArray(e) ? e.forEach(s) : s(e), n
    }
    clear(e) {
        const t = Object.keys(this);
        let i = t.length,
            n = !1;
        for (; i--;) {
            const s = t[i];
            (!e || mc(this, this[s], s, e, !0)) && (delete this[s], n = !0)
        }
        return n
    }
    normalize(e) {
        const t = this,
            i = {};
        return z.forEach(this, (n, s) => {
            const o = z.findKey(i, s);
            if (o) {
                t[o] = Jl(n), delete t[s];
                return
            }
            const a = e ? p1(s) : String(s)
                .trim();
            a !== s && delete t[s], t[a] = Jl(n), i[a] = !0
        }), this
    }
    concat(...e) {
        return this.constructor.concat(this, ...e)
    }
    toJSON(e) {
        const t = Object.create(null);
        return z.forEach(this, (i, n) => {
            i != null && i !== !1 && (t[n] = e && z.isArray(i) ? i.join(", ") : i)
        }), t
    } [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON())
            .map(([e, t]) => e + ": " + t)
            .join(`
`)
    }
    getSetCookie() {
        return this.get("set-cookie") || []
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(e) {
        return e instanceof this ? e : new this(e)
    }
    static concat(e, ...t) {
        const i = new this(e);
        return t.forEach(n => i.set(n)), i
    }
    static accessor(e) {
        const i = (this[Fd] = this[Fd] = {
                accessors: {}
            })
            .accessors,
            n = this.prototype;

        function s(o) {
            const a = ha(o);
            i[a] || (g1(n, o), i[a] = !0)
        }
        return z.isArray(e) ? e.forEach(s) : s(e), this
    }
};
cr.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
z.reduceDescriptors(cr.prototype, ({
    value: r
}, e) => {
    let t = e[0].toUpperCase() + e.slice(1);
    return {
        get: () => r,
        set(i) {
            this[t] = i
        }
    }
});
z.freezeMethods(cr);

function _c(r, e) {
    const t = this || el,
        i = e || t,
        n = cr.from(i.headers);
    let s = i.data;
    return z.forEach(r, function(a) {
        s = a.call(t, s, n.normalize(), e ? e.status : void 0)
    }), n.normalize(), s
}

function p0(r) {
    return !!(r && r.__CANCEL__)
}

function Yo(r, e, t) {
    Ae.call(this, r ?? "canceled", Ae.ERR_CANCELED, e, t), this.name = "CanceledError"
}
z.inherits(Yo, Ae, {
    __CANCEL__: !0
});

function g0(r, e, t) {
    const i = t.config.validateStatus;
    !t.status || !i || i(t.status) ? r(t) : e(new Ae("Request failed with status code " + t.status, [Ae.ERR_BAD_REQUEST, Ae.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4], t.config, t.request, t))
}

function m1(r) {
    const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(r);
    return e && e[1] || ""
}

function _1(r, e) {
    r = r || 10;
    const t = new Array(r),
        i = new Array(r);
    let n = 0,
        s = 0,
        o;
    return e = e !== void 0 ? e : 1e3,
        function(l) {
            const u = Date.now(),
                c = i[s];
            o || (o = u), t[n] = l, i[n] = u;
            let h = s,
                f = 0;
            for (; h !== n;) f += t[h++], h = h % r;
            if (n = (n + 1) % r, n === s && (s = (s + 1) % r), u - o < e) return;
            const g = c && u - c;
            return g ? Math.round(f * 1e3 / g) : void 0
        }
}

function y1(r, e) {
    let t = 0,
        i = 1e3 / e,
        n, s;
    const o = (u, c = Date.now()) => {
        t = c, n = null, s && (clearTimeout(s), s = null), r.apply(null, u)
    };
    return [(...u) => {
        const c = Date.now(),
            h = c - t;
        h >= i ? o(u, c) : (n = u, s || (s = setTimeout(() => {
            s = null, o(n)
        }, i - h)))
    }, () => n && o(n)]
}
const _u = (r, e, t = 3) => {
        let i = 0;
        const n = _1(50, 250);
        return y1(s => {
            const o = s.loaded,
                a = s.lengthComputable ? s.total : void 0,
                l = o - i,
                u = n(l),
                c = o <= a;
            i = o;
            const h = {
                loaded: o,
                total: a,
                progress: a ? o / a : void 0,
                bytes: l,
                rate: u || void 0,
                estimated: u && a && c ? (a - o) / u : void 0,
                event: s,
                lengthComputable: a != null,
                [e ? "download" : "upload"]: !0
            };
            r(h)
        }, t)
    },
    Ld = (r, e) => {
        const t = r != null;
        return [i => e[0]({
            lengthComputable: t,
            total: r,
            loaded: i
        }), e[1]]
    },
    Od = r => (...e) => z.asap(() => r(...e)),
    D1 = Fi.hasStandardBrowserEnv ? ((r, e) => t => (t = new URL(t, Fi.origin), r.protocol === t.protocol && r.host === t.host && (e || r.port === t.port)))(new URL(Fi.origin), Fi.navigator && /(msie|trident)/i.test(Fi.navigator.userAgent)) : () => !0,
    v1 = Fi.hasStandardBrowserEnv ? {
        write(r, e, t, i, n, s) {
            const o = [r + "=" + encodeURIComponent(e)];
            z.isNumber(t) && o.push("expires=" + new Date(t)
                .toGMTString()), z.isString(i) && o.push("path=" + i), z.isString(n) && o.push("domain=" + n), s === !0 && o.push("secure"), document.cookie = o.join("; ")
        },
        read(r) {
            const e = document.cookie.match(new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"));
            return e ? decodeURIComponent(e[3]) : null
        },
        remove(r) {
            this.write(r, "", Date.now() - 864e5)
        }
    } : {
        write() {},
        read() {
            return null
        },
        remove() {}
    };

function w1(r) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)
}

function b1(r, e) {
    return e ? r.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : r
}

function m0(r, e, t) {
    let i = !w1(e);
    return r && (i || t == !1) ? b1(r, e) : e
}
const Rd = r => r instanceof cr ? {
    ...r
} : r;

function ro(r, e) {
    e = e || {};
    const t = {};

    function i(u, c, h, f) {
        return z.isPlainObject(u) && z.isPlainObject(c) ? z.merge.call({
            caseless: f
        }, u, c) : z.isPlainObject(c) ? z.merge({}, c) : z.isArray(c) ? c.slice() : c
    }

    function n(u, c, h, f) {
        if (z.isUndefined(c)) {
            if (!z.isUndefined(u)) return i(void 0, u, h, f)
        } else return i(u, c, h, f)
    }

    function s(u, c) {
        if (!z.isUndefined(c)) return i(void 0, c)
    }

    function o(u, c) {
        if (z.isUndefined(c)) {
            if (!z.isUndefined(u)) return i(void 0, u)
        } else return i(void 0, c)
    }

    function a(u, c, h) {
        if (h in e) return i(u, c);
        if (h in r) return i(void 0, u)
    }
    const l = {
        url: s,
        method: s,
        data: s,
        baseURL: o,
        transformRequest: o,
        transformResponse: o,
        paramsSerializer: o,
        timeout: o,
        timeoutMessage: o,
        withCredentials: o,
        withXSRFToken: o,
        adapter: o,
        responseType: o,
        xsrfCookieName: o,
        xsrfHeaderName: o,
        onUploadProgress: o,
        onDownloadProgress: o,
        decompress: o,
        maxContentLength: o,
        maxBodyLength: o,
        beforeRedirect: o,
        transport: o,
        httpAgent: o,
        httpsAgent: o,
        cancelToken: o,
        socketPath: o,
        responseEncoding: o,
        validateStatus: a,
        headers: (u, c, h) => n(Rd(u), Rd(c), h, !0)
    };
    return z.forEach(Object.keys(Object.assign({}, r, e)), function(c) {
        const h = l[c] || n,
            f = h(r[c], e[c], c);
        z.isUndefined(f) && h !== a || (t[c] = f)
    }), t
}
const _0 = r => {
        const e = ro({}, r);
        let {
            data: t,
            withXSRFToken: i,
            xsrfHeaderName: n,
            xsrfCookieName: s,
            headers: o,
            auth: a
        } = e;
        e.headers = o = cr.from(o), e.url = h0(m0(e.baseURL, e.url, e.allowAbsoluteUrls), r.params, r.paramsSerializer), a && o.set("Authorization", "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : "")));
        let l;
        if (z.isFormData(t)) {
            if (Fi.hasStandardBrowserEnv || Fi.hasStandardBrowserWebWorkerEnv) o.setContentType(void 0);
            else if ((l = o.getContentType()) !== !1) {
                const [u, ...c] = l ? l.split(";")
                    .map(h => h.trim())
                    .filter(Boolean) : [];
                o.setContentType([u || "multipart/form-data", ...c].join("; "))
            }
        }
        if (Fi.hasStandardBrowserEnv && (i && z.isFunction(i) && (i = i(e)), i || i !== !1 && D1(e.url))) {
            const u = n && s && v1.read(s);
            u && o.set(n, u)
        }
        return e
    },
    x1 = typeof XMLHttpRequest < "u",
    E1 = x1 && function(r) {
        return new Promise(function(t, i) {
            const n = _0(r);
            let s = n.data;
            const o = cr.from(n.headers)
                .normalize();
            let {
                responseType: a,
                onUploadProgress: l,
                onDownloadProgress: u
            } = n, c, h, f, g, m;

            function d() {
                g && g(), m && m(), n.cancelToken && n.cancelToken.unsubscribe(c), n.signal && n.signal.removeEventListener("abort", c)
            }
            let p = new XMLHttpRequest;
            p.open(n.method.toUpperCase(), n.url, !0), p.timeout = n.timeout;

            function y() {
                if (!p) return;
                const w = cr.from("getAllResponseHeaders" in p && p.getAllResponseHeaders()),
                    x = {
                        data: !a || a === "text" || a === "json" ? p.responseText : p.response,
                        status: p.status,
                        statusText: p.statusText,
                        headers: w,
                        config: r,
                        request: p
                    };
                g0(function(C) {
                    t(C), d()
                }, function(C) {
                    i(C), d()
                }, x), p = null
            }
            "onloadend" in p ? p.onloadend = y : p.onreadystatechange = function() {
                !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(y)
            }, p.onabort = function() {
                p && (i(new Ae("Request aborted", Ae.ECONNABORTED, r, p)), p = null)
            }, p.onerror = function() {
                i(new Ae("Network Error", Ae.ERR_NETWORK, r, p)), p = null
            }, p.ontimeout = function() {
                let S = n.timeout ? "timeout of " + n.timeout + "ms exceeded" : "timeout exceeded";
                const x = n.transitional || f0;
                n.timeoutErrorMessage && (S = n.timeoutErrorMessage), i(new Ae(S, x.clarifyTimeoutError ? Ae.ETIMEDOUT : Ae.ECONNABORTED, r, p)), p = null
            }, s === void 0 && o.setContentType(null), "setRequestHeader" in p && z.forEach(o.toJSON(), function(S, x) {
                p.setRequestHeader(x, S)
            }), z.isUndefined(n.withCredentials) || (p.withCredentials = !!n.withCredentials), a && a !== "json" && (p.responseType = n.responseType), u && ([f, m] = _u(u, !0), p.addEventListener("progress", f)), l && p.upload && ([h, g] = _u(l), p.upload.addEventListener("progress", h), p.upload.addEventListener("loadend", g)), (n.cancelToken || n.signal) && (c = w => {
                p && (i(!w || w.type ? new Yo(null, r, p) : w), p.abort(), p = null)
            }, n.cancelToken && n.cancelToken.subscribe(c), n.signal && (n.signal.aborted ? c() : n.signal.addEventListener("abort", c)));
            const b = m1(n.url);
            if (b && Fi.protocols.indexOf(b) === -1) {
                i(new Ae("Unsupported protocol " + b + ":", Ae.ERR_BAD_REQUEST, r));
                return
            }
            p.send(s || null)
        })
    },
    C1 = (r, e) => {
        const {
            length: t
        } = r = r ? r.filter(Boolean) : [];
        if (e || t) {
            let i = new AbortController,
                n;
            const s = function(u) {
                if (!n) {
                    n = !0, a();
                    const c = u instanceof Error ? u : this.reason;
                    i.abort(c instanceof Ae ? c : new Yo(c instanceof Error ? c.message : c))
                }
            };
            let o = e && setTimeout(() => {
                o = null, s(new Ae(`timeout ${e} of ms exceeded`, Ae.ETIMEDOUT))
            }, e);
            const a = () => {
                r && (o && clearTimeout(o), o = null, r.forEach(u => {
                    u.unsubscribe ? u.unsubscribe(s) : u.removeEventListener("abort", s)
                }), r = null)
            };
            r.forEach(u => u.addEventListener("abort", s));
            const {
                signal: l
            } = i;
            return l.unsubscribe = () => z.asap(a), l
        }
    },
    S1 = function*(r, e) {
        let t = r.byteLength;
        if (t < e) {
            yield r;
            return
        }
        let i = 0,
            n;
        for (; i < t;) n = i + e, yield r.slice(i, n), i = n
    },
    T1 = async function*(r, e) {
        for await (const t of k1(r)) yield* S1(t, e)
    }, k1 = async function*(r) {
        if (r[Symbol.asyncIterator]) {
            yield* r;
            return
        }
        const e = r.getReader();
        try {
            for (;;) {
                const {
                    done: t,
                    value: i
                } = await e.read();
                if (t) break;
                yield i
            }
        } finally {
            await e.cancel()
        }
    }, Md = (r, e, t, i) => {
        const n = T1(r, e);
        let s = 0,
            o, a = l => {
                o || (o = !0, i && i(l))
            };
        return new ReadableStream({
            async pull(l) {
                try {
                    const {
                        done: u,
                        value: c
                    } = await n.next();
                    if (u) {
                        a(), l.close();
                        return
                    }
                    let h = c.byteLength;
                    if (t) {
                        let f = s += h;
                        t(f)
                    }
                    l.enqueue(new Uint8Array(c))
                } catch (u) {
                    throw a(u), u
                }
            },
            cancel(l) {
                return a(l), n.return()
            }
        }, {
            highWaterMark: 2
        })
    }, Ou = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", y0 = Ou && typeof ReadableStream == "function", P1 = Ou && (typeof TextEncoder == "function" ? (r => e => r.encode(e))(new TextEncoder) : async r => new Uint8Array(await new Response(r)
        .arrayBuffer())), D0 = (r, ...e) => {
        try {
            return !!r(...e)
        } catch {
            return !1
        }
    }, A1 = y0 && D0(() => {
        let r = !1;
        const e = new Request(Fi.origin, {
                body: new ReadableStream,
                method: "POST",
                get duplex() {
                    return r = !0, "half"
                }
            })
            .headers.has("Content-Type");
        return r && !e
    }), Bd = 64 * 1024, ch = y0 && D0(() => z.isReadableStream(new Response("")
        .body)), yu = {
        stream: ch && (r => r.body)
    };
Ou && (r => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(e => {
        !yu[e] && (yu[e] = z.isFunction(r[e]) ? t => t[e]() : (t, i) => {
            throw new Ae(`Response type '${e}' is not supported`, Ae.ERR_NOT_SUPPORT, i)
        })
    })
})(new Response);
const F1 = async r => {
    if (r == null) return 0;
    if (z.isBlob(r)) return r.size;
    if (z.isSpecCompliantForm(r)) return (await new Request(Fi.origin, {
                method: "POST",
                body: r
            })
            .arrayBuffer())
        .byteLength;
    if (z.isArrayBufferView(r) || z.isArrayBuffer(r)) return r.byteLength;
    if (z.isURLSearchParams(r) && (r = r + ""), z.isString(r)) return (await P1(r))
        .byteLength
}, L1 = async (r, e) => {
    const t = z.toFiniteNumber(r.getContentLength());
    return t ?? F1(e)
}, O1 = Ou && (async r => {
    let {
        url: e,
        method: t,
        data: i,
        signal: n,
        cancelToken: s,
        timeout: o,
        onDownloadProgress: a,
        onUploadProgress: l,
        responseType: u,
        headers: c,
        withCredentials: h = "same-origin",
        fetchOptions: f
    } = _0(r);
    u = u ? (u + "")
        .toLowerCase() : "text";
    let g = C1([n, s && s.toAbortSignal()], o),
        m;
    const d = g && g.unsubscribe && (() => {
        g.unsubscribe()
    });
    let p;
    try {
        if (l && A1 && t !== "get" && t !== "head" && (p = await L1(c, i)) !== 0) {
            let x = new Request(e, {
                    method: "POST",
                    body: i,
                    duplex: "half"
                }),
                P;
            if (z.isFormData(i) && (P = x.headers.get("content-type")) && c.setContentType(P), x.body) {
                const [C, A] = Ld(p, _u(Od(l)));
                i = Md(x.body, Bd, C, A)
            }
        }
        z.isString(h) || (h = h ? "include" : "omit");
        const y = "credentials" in Request.prototype;
        m = new Request(e, {
            ...f,
            signal: g,
            method: t.toUpperCase(),
            headers: c.normalize()
                .toJSON(),
            body: i,
            duplex: "half",
            credentials: y ? h : void 0
        });
        let b = await fetch(m);
        const w = ch && (u === "stream" || u === "response");
        if (ch && (a || w && d)) {
            const x = {};
            ["status", "statusText", "headers"].forEach(k => {
                x[k] = b[k]
            });
            const P = z.toFiniteNumber(b.headers.get("content-length")),
                [C, A] = a && Ld(P, _u(Od(a), !0)) || [];
            b = new Response(Md(b.body, Bd, C, () => {
                A && A(), d && d()
            }), x)
        }
        u = u || "text";
        let S = await yu[z.findKey(yu, u) || "text"](b, r);
        return !w && d && d(), await new Promise((x, P) => {
            g0(x, P, {
                data: S,
                headers: cr.from(b.headers),
                status: b.status,
                statusText: b.statusText,
                config: r,
                request: m
            })
        })
    } catch (y) {
        throw d && d(), y && y.name === "TypeError" && /Load failed|fetch/i.test(y.message) ? Object.assign(new Ae("Network Error", Ae.ERR_NETWORK, r, m), {
            cause: y.cause || y
        }) : Ae.from(y, y && y.code, r, m)
    }
}), hh = {
    http: jD,
    xhr: E1,
    fetch: O1
};
z.forEach(hh, (r, e) => {
    if (r) {
        try {
            Object.defineProperty(r, "name", {
                value: e
            })
        } catch {}
        Object.defineProperty(r, "adapterName", {
            value: e
        })
    }
});
const Nd = r => `- ${r}`,
    R1 = r => z.isFunction(r) || r === null || r === !1,
    v0 = {
        getAdapter: r => {
            r = z.isArray(r) ? r : [r];
            const {
                length: e
            } = r;
            let t, i;
            const n = {};
            for (let s = 0; s < e; s++) {
                t = r[s];
                let o;
                if (i = t, !R1(t) && (i = hh[(o = String(t))
                        .toLowerCase()], i === void 0)) throw new Ae(`Unknown adapter '${o}'`);
                if (i) break;
                n[o || "#" + s] = i
            }
            if (!i) {
                const s = Object.entries(n)
                    .map(([a, l]) => `adapter ${a} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build"));
                let o = e ? s.length > 1 ? `since :
` + s.map(Nd)
                    .join(`
`) : " " + Nd(s[0]) : "as no adapter specified";
                throw new Ae("There is no suitable adapter to dispatch the request " + o, "ERR_NOT_SUPPORT")
            }
            return i
        },
        adapters: hh
    };

function yc(r) {
    if (r.cancelToken && r.cancelToken.throwIfRequested(), r.signal && r.signal.aborted) throw new Yo(null, r)
}

function Id(r) {
    return yc(r), r.headers = cr.from(r.headers), r.data = _c.call(r, r.transformRequest), ["post", "put", "patch"].indexOf(r.method) !== -1 && r.headers.setContentType("application/x-www-form-urlencoded", !1), v0.getAdapter(r.adapter || el.adapter)(r)
        .then(function(i) {
            return yc(r), i.data = _c.call(r, r.transformResponse, i), i.headers = cr.from(i.headers), i
        }, function(i) {
            return p0(i) || (yc(r), i && i.response && (i.response.data = _c.call(r, r.transformResponse, i.response), i.response.headers = cr.from(i.response.headers))), Promise.reject(i)
        })
}
const w0 = "1.9.0",
    Ru = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((r, e) => {
    Ru[r] = function(i) {
        return typeof i === r || "a" + (e < 1 ? "n " : " ") + r
    }
});
const zd = {};
Ru.transitional = function(e, t, i) {
    function n(s, o) {
        return "[Axios v" + w0 + "] Transitional option '" + s + "'" + o + (i ? ". " + i : "")
    }
    return (s, o, a) => {
        if (e === !1) throw new Ae(n(o, " has been removed" + (t ? " in " + t : "")), Ae.ERR_DEPRECATED);
        return t && !zd[o] && (zd[o] = !0, console.warn(n(o, " has been deprecated since v" + t + " and will be removed in the near future"))), e ? e(s, o, a) : !0
    }
};
Ru.spelling = function(e) {
    return (t, i) => (console.warn(`${i} is likely a misspelling of ${e}`), !0)
};

function M1(r, e, t) {
    if (typeof r != "object") throw new Ae("options must be an object", Ae.ERR_BAD_OPTION_VALUE);
    const i = Object.keys(r);
    let n = i.length;
    for (; n-- > 0;) {
        const s = i[n],
            o = e[s];
        if (o) {
            const a = r[s],
                l = a === void 0 || o(a, s, r);
            if (l !== !0) throw new Ae("option " + s + " must be " + l, Ae.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (t !== !0) throw new Ae("Unknown option " + s, Ae.ERR_BAD_OPTION)
    }
}
const Kl = {
        assertOptions: M1,
        validators: Ru
    },
    un = Kl.validators;
let Ks = class {
    constructor(e) {
        this.defaults = e || {}, this.interceptors = {
            request: new Ad,
            response: new Ad
        }
    }
    async request(e, t) {
        try {
            return await this._request(e, t)
        } catch (i) {
            if (i instanceof Error) {
                let n = {};
                Error.captureStackTrace ? Error.captureStackTrace(n) : n = new Error;
                const s = n.stack ? n.stack.replace(/^.+\n/, "") : "";
                try {
                    i.stack ? s && !String(i.stack)
                        .endsWith(s.replace(/^.+\n.+\n/, "")) && (i.stack += `
` + s) : i.stack = s
                } catch {}
            }
            throw i
        }
    }
    _request(e, t) {
        typeof e == "string" ? (t = t || {}, t.url = e) : t = e || {}, t = ro(this.defaults, t);
        const {
            transitional: i,
            paramsSerializer: n,
            headers: s
        } = t;
        i !== void 0 && Kl.assertOptions(i, {
                silentJSONParsing: un.transitional(un.boolean),
                forcedJSONParsing: un.transitional(un.boolean),
                clarifyTimeoutError: un.transitional(un.boolean)
            }, !1), n != null && (z.isFunction(n) ? t.paramsSerializer = {
                serialize: n
            } : Kl.assertOptions(n, {
                encode: un.function,
                serialize: un.function
            }, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0), Kl.assertOptions(t, {
                baseUrl: un.spelling("baseURL"),
                withXsrfToken: un.spelling("withXSRFToken")
            }, !0), t.method = (t.method || this.defaults.method || "get")
            .toLowerCase();
        let o = s && z.merge(s.common, s[t.method]);
        s && z.forEach(["delete", "get", "head", "post", "put", "patch", "common"], m => {
            delete s[m]
        }), t.headers = cr.concat(o, s);
        const a = [];
        let l = !0;
        this.interceptors.request.forEach(function(d) {
            typeof d.runWhen == "function" && d.runWhen(t) === !1 || (l = l && d.synchronous, a.unshift(d.fulfilled, d.rejected))
        });
        const u = [];
        this.interceptors.response.forEach(function(d) {
            u.push(d.fulfilled, d.rejected)
        });
        let c, h = 0,
            f;
        if (!l) {
            const m = [Id.bind(this), void 0];
            for (m.unshift.apply(m, a), m.push.apply(m, u), f = m.length, c = Promise.resolve(t); h < f;) c = c.then(m[h++], m[h++]);
            return c
        }
        f = a.length;
        let g = t;
        for (h = 0; h < f;) {
            const m = a[h++],
                d = a[h++];
            try {
                g = m(g)
            } catch (p) {
                d.call(this, p);
                break
            }
        }
        try {
            c = Id.call(this, g)
        } catch (m) {
            return Promise.reject(m)
        }
        for (h = 0, f = u.length; h < f;) c = c.then(u[h++], u[h++]);
        return c
    }
    getUri(e) {
        e = ro(this.defaults, e);
        const t = m0(e.baseURL, e.url, e.allowAbsoluteUrls);
        return h0(t, e.params, e.paramsSerializer)
    }
};
z.forEach(["delete", "get", "head", "options"], function(e) {
    Ks.prototype[e] = function(t, i) {
        return this.request(ro(i || {}, {
            method: e,
            url: t,
            data: (i || {})
                .data
        }))
    }
});
z.forEach(["post", "put", "patch"], function(e) {
    function t(i) {
        return function(s, o, a) {
            return this.request(ro(a || {}, {
                method: e,
                headers: i ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: s,
                data: o
            }))
        }
    }
    Ks.prototype[e] = t(), Ks.prototype[e + "Form"] = t(!0)
});
let B1 = class b0 {
    constructor(e) {
        if (typeof e != "function") throw new TypeError("executor must be a function.");
        let t;
        this.promise = new Promise(function(s) {
            t = s
        });
        const i = this;
        this.promise.then(n => {
            if (!i._listeners) return;
            let s = i._listeners.length;
            for (; s-- > 0;) i._listeners[s](n);
            i._listeners = null
        }), this.promise.then = n => {
            let s;
            const o = new Promise(a => {
                    i.subscribe(a), s = a
                })
                .then(n);
            return o.cancel = function() {
                i.unsubscribe(s)
            }, o
        }, e(function(s, o, a) {
            i.reason || (i.reason = new Yo(s, o, a), t(i.reason))
        })
    }
    throwIfRequested() {
        if (this.reason) throw this.reason
    }
    subscribe(e) {
        if (this.reason) {
            e(this.reason);
            return
        }
        this._listeners ? this._listeners.push(e) : this._listeners = [e]
    }
    unsubscribe(e) {
        if (!this._listeners) return;
        const t = this._listeners.indexOf(e);
        t !== -1 && this._listeners.splice(t, 1)
    }
    toAbortSignal() {
        const e = new AbortController,
            t = i => {
                e.abort(i)
            };
        return this.subscribe(t), e.signal.unsubscribe = () => this.unsubscribe(t), e.signal
    }
    static source() {
        let e;
        return {
            token: new b0(function(n) {
                e = n
            }),
            cancel: e
        }
    }
};

function N1(r) {
    return function(t) {
        return r.apply(null, t)
    }
}

function I1(r) {
    return z.isObject(r) && r.isAxiosError === !0
}
const fh = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(fh)
    .forEach(([r, e]) => {
        fh[e] = r
    });

function x0(r) {
    const e = new Ks(r),
        t = Qg(Ks.prototype.request, e);
    return z.extend(t, Ks.prototype, e, {
        allOwnKeys: !0
    }), z.extend(t, e, null, {
        allOwnKeys: !0
    }), t.create = function(n) {
        return x0(ro(r, n))
    }, t
}
const Nt = x0(el);
Nt.Axios = Ks;
Nt.CanceledError = Yo;
Nt.CancelToken = B1;
Nt.isCancel = p0;
Nt.VERSION = w0;
Nt.toFormData = Lu;
Nt.AxiosError = Ae;
Nt.Cancel = Nt.CanceledError;
Nt.all = function(e) {
    return Promise.all(e)
};
Nt.spread = N1;
Nt.isAxiosError = I1;
Nt.mergeConfig = ro;
Nt.AxiosHeaders = cr;
Nt.formToJSON = r => d0(z.isHTMLForm(r) ? new FormData(r) : r);
Nt.getAdapter = v0.getAdapter;
Nt.HttpStatusCode = fh;
Nt.default = Nt;
const {
    Axios: J1,
    AxiosError: K1,
    CanceledError: Z1,
    isCancel: Q1,
    CancelToken: ev,
    VERSION: tv,
    all: iv,
    Cancel: rv,
    isAxiosError: nv,
    spread: sv,
    toFormData: ov,
    AxiosHeaders: av,
    HttpStatusCode: lv,
    formToJSON: uv,
    getAdapter: cv,
    mergeConfig: hv
} = Nt;
class z1 {
    element = B("form[data-contact-form]");
    fields = Fe("input[data-contact-input-field], textarea[data-contact-input-field]", this.element);
    successScreen = B("[data-contact-success]");
    successTextAnimation;
    canSubmit = !0;
    contactScreen = B("[data-contact-screen]");
    constructor() {
        this.element.noValidate = !0, this.element.addEventListener("submit", e => {
            e.preventDefault(), this.onSubmit()
        }), this.fields.forEach(e => {
            e.addEventListener("input", t => {
                const i = t.currentTarget.closest("[data-input-field]");
                if (i?.classList.remove("input-error"), !e.validity.valid) {
                    const n = B("[data-error-indicator]", i);
                    n.title = e.validationMessage
                }
            })
        })
    }
    createSuccessTextAnimation() {
        const e = B("[data-contact-success-text]");
        this.successTextAnimation = new Ng({
            element: e
        })
    }
    onSubmit() {
        let e = !0;
        if (this.fields.forEach(i => {
                let n = null;
                if (i.type === "email" && (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(i.value) || (e = !1, n = "Please enter a valid email address.")), i.validity.valid || (e = !1, n = i.validationMessage), n) {
                    const s = i.closest("[data-input-field]");
                    s?.classList.add("input-error");
                    const o = B("[data-error-indicator]", s);
                    o.title = n
                }
            }), !e || !this.canSubmit) return;
        this.canSubmit = !1;
        const t = new FormData(this.element);
        Nt.post("https://submit.jotform.com/submit/251196391994167", t)
            .then(() => {
                this.onSuccess()
            })
            .catch(i => {
                const n = B("[data-fail-message]");
                n.style.pointerEvents = "all", oe.set(n, {
                    opacity: 0
                }), oe.to(n, {
                    opacity: 1,
                    duration: .6
                }), this.canSubmit = !0
            })
    }
    onResize() {
        this.successTextAnimation.onResize()
    }
    onSuccess() {
        this.contactScreen.style.pointerEvents = "none", oe.to(this.contactScreen, {
            opacity: 0,
            duration: .3,
            onComplete: () => {
                this.contactScreen.remove(), this.successScreen.style.pointerEvents = "all", this.successScreen.style.opacity = "1", this.successTextAnimation.playLines(.3)
            }
        })
    }
}
class V1 {
    wrapper;
    element;
    overlay;
    blocks;
    closeButton = B("[data-menu-close]");
    form;
    opened = !1;
    constructor() {
        this.wrapper = B("#contact-menu-wrapper"), this.element = B("#contact-menu"), this.overlay = B("[data-contact-menu-overlay]"), this.blocks = Fe("[data-menu-block]", this.element), this.closeButton.addEventListener("click", this.onClose.bind(this)), this.createContactForm(), oe.set(this.blocks, {
            xPercent: 100
        }), this.onClickButton(), this.onCLickOverlay()
    }
    onClickButton() {
        Fe("[data-contact-button]")
            .forEach(t => {
                t.addEventListener("click", this.onOpen.bind(this))
            })
    }
    onCLickOverlay() {
        this.overlay.addEventListener("click", this.onClose.bind(this))
    }
    createContactForm() {
        this.form = new z1
    }
    onResize() {
        this.form?.onResize()
    }
    onOpen() {
        this.opened = !0, this.wrapper.style.pointerEvents = "all", this.wrapper.style.opacity = "1";
        const e = Fe("[data-menu-block]", this.element),
            t = oe.timeline();
        t.to(this.overlay, {
            opacity: 1,
            duration: .3
        }), e.forEach((i, n) => {
            t.to(i, {
                xPercent: 0,
                duration: .6,
                delay: n * .03,
                ease: "power2.inOut"
            }, "<")
        })
    }
    onClose() {
        const e = oe.timeline(),
            t = Fe("[data-menu-block]", this.element);
        e.to(t.reverse(), {
            xPercent: 100,
            duration: .5,
            ease: "power2.inOut",
            stagger: .03
        }, "<"), e.to(this.overlay, {
            opacity: 0,
            duration: .3
        }, "<+=0.35"), e.call(() => {
            this.opened = !1, this.wrapper.style.pointerEvents = "none", this.wrapper.scrollTop = 0, this.wrapper.style.opacity = "0"
        })
    }
    unMount() {
        Fe("[data-contact-button]")
            .forEach(t => {
                t.removeEventListener("click", this.onOpen.bind(this))
            }), this.overlay.removeEventListener("click", this.onClose.bind(this)), this.opened = !1, this.wrapper.style.pointerEvents = "none", this.wrapper.style.opacity = "0", this.wrapper.scrollTop = 0, oe.set(this.blocks, {
                xPercent: 100
            }), oe.set(this.overlay, {
                opacity: 0
            })
    }
    mount() {
        this.wrapper.style.pointerEvents = "none", this.wrapper.style.opacity = "0", this.onClickButton(), this.onCLickOverlay()
    }
}
var Dc = {
        exports: {}
    },
    Vd;

function H1() {
    return Vd || (Vd = 1, function(r) {
        (function() {
            function e(d, p) {
                document.addEventListener ? d.addEventListener("scroll", p, !1) : d.attachEvent("scroll", p)
            }

            function t(d) {
                document.body ? d() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function p() {
                    document.removeEventListener("DOMContentLoaded", p), d()
                }) : document.attachEvent("onreadystatechange", function p() {
                    (document.readyState == "interactive" || document.readyState == "complete") && (document.detachEvent("onreadystatechange", p), d())
                })
            }

            function i(d) {
                this.g = document.createElement("div"), this.g.setAttribute("aria-hidden", "true"), this.g.appendChild(document.createTextNode(d)), this.h = document.createElement("span"), this.i = document.createElement("span"), this.m = document.createElement("span"), this.j = document.createElement("span"), this.l = -1, this.h.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.i.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.j.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.m.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;", this.h.appendChild(this.m), this.i.appendChild(this.j), this.g.appendChild(this.h), this.g.appendChild(this.i)
            }

            function n(d, p) {
                d.g.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + p + ";"
            }

            function s(d) {
                var p = d.g.offsetWidth,
                    y = p + 100;
                return d.j.style.width = y + "px", d.i.scrollLeft = y, d.h.scrollLeft = d.h.scrollWidth + 100, d.l !== p ? (d.l = p, !0) : !1
            }

            function o(d, p) {
                function y() {
                    var w = b;
                    s(w) && w.g.parentNode !== null && p(w.l)
                }
                var b = d;
                e(d.h, y), e(d.i, y), s(d)
            }

            function a(d, p, y) {
                p = p || {}, y = y || window, this.family = d, this.style = p.style || "normal", this.weight = p.weight || "normal", this.stretch = p.stretch || "normal", this.context = y
            }
            var l = null,
                u = null,
                c = null,
                h = null;

            function f(d) {
                return u === null && (g(d) && /Apple/.test(window.navigator.vendor) ? (d = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent), u = !!d && 603 > parseInt(d[1], 10)) : u = !1), u
            }

            function g(d) {
                return h === null && (h = !!d.document.fonts), h
            }

            function m(d, p) {
                var y = d.style,
                    b = d.weight;
                if (c === null) {
                    var w = document.createElement("div");
                    try {
                        w.style.font = "condensed 100px sans-serif"
                    } catch {}
                    c = w.style.font !== ""
                }
                return [y, b, c ? d.stretch : "", "100px", p].join(" ")
            }
            a.prototype.load = function(d, p) {
                var y = this,
                    b = d || "BESbswy",
                    w = 0,
                    S = p || 3e3,
                    x = new Date()
                    .getTime();
                return new Promise(function(P, C) {
                    if (g(y.context) && !f(y.context)) {
                        var A = new Promise(function(I, Y) {
                                function V() {
                                    new Date()
                                        .getTime() - x >= S ? Y(Error("" + S + "ms timeout exceeded")) : y.context.document.fonts.load(m(y, '"' + y.family + '"'), b)
                                        .then(function(q) {
                                            1 <= q.length ? I() : setTimeout(V, 25)
                                        }, Y)
                                }
                                V()
                            }),
                            k = new Promise(function(I, Y) {
                                w = setTimeout(function() {
                                    Y(Error("" + S + "ms timeout exceeded"))
                                }, S)
                            });
                        Promise.race([k, A])
                            .then(function() {
                                clearTimeout(w), P(y)
                            }, C)
                    } else t(function() {
                        function I() {
                            var ce;
                            (ce = W != -1 && J != -1 || W != -1 && T != -1 || J != -1 && T != -1) && ((ce = W != J && W != T && J != T) || (l === null && (ce = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), l = !!ce && (536 > parseInt(ce[1], 10) || parseInt(ce[1], 10) === 536 && 11 >= parseInt(ce[2], 10))), ce = l && (W == R && J == R && T == R || W == Q && J == Q && T == Q || W == se && J == se && T == se)), ce = !ce), ce && (ue.parentNode !== null && ue.parentNode.removeChild(ue), clearTimeout(w), P(y))
                        }

                        function Y() {
                            if (new Date()
                                .getTime() - x >= S) ue.parentNode !== null && ue.parentNode.removeChild(ue), C(Error("" + S + "ms timeout exceeded"));
                            else {
                                var ce = y.context.document.hidden;
                                (ce === !0 || ce === void 0) && (W = V.g.offsetWidth, J = q.g.offsetWidth, T = K.g.offsetWidth, I()), w = setTimeout(Y, 50)
                            }
                        }
                        var V = new i(b),
                            q = new i(b),
                            K = new i(b),
                            W = -1,
                            J = -1,
                            T = -1,
                            R = -1,
                            Q = -1,
                            se = -1,
                            ue = document.createElement("div");
                        ue.dir = "ltr", n(V, m(y, "sans-serif")), n(q, m(y, "serif")), n(K, m(y, "monospace")), ue.appendChild(V.g), ue.appendChild(q.g), ue.appendChild(K.g), y.context.document.body.appendChild(ue), R = V.g.offsetWidth, Q = q.g.offsetWidth, se = K.g.offsetWidth, Y(), o(V, function(ce) {
                            W = ce, I()
                        }), n(V, m(y, '"' + y.family + '",sans-serif')), o(q, function(ce) {
                            J = ce, I()
                        }), n(q, m(y, '"' + y.family + '",serif')), o(K, function(ce) {
                            T = ce, I()
                        }), n(K, m(y, '"' + y.family + '",monospace'))
                    })
                })
            }, r.exports = a
        })()
    }(Dc)), Dc.exports
}
var q1 = H1();
const vc = v_(q1);
class $1 {
    element = B("#preloader");
    fontsLoaded = !1;
    loaded = !1;
    video;
    preloaderVideo = null;
    videoLoaded = !1;
    preloaderVideoLoaded = !1;
    coversLoaded = !1;
    pageTemplate = null;
    currentPage;
    logoLoadingTl = oe.timeline();
    loadingProgress = 0;
    coversCount = 0;
    coversLoadedCount = 0;
    constructor({
        pageTemplate: e,
        currentPage: t
    }) {
        this.currentPage = t, this.pageTemplate = e, this.pageTemplate === "ui" && (this.element.style.display = "none")
    }
    load() {
        // Skip preloader - immediately trigger loaded event
        this.onAllLoaded()
    }
    loadFonts() {
        const e = new vc("Aeonik", {
                weight: 300,
                style: "normal"
            }),
            t = new vc("Aeonik", {
                weight: 400,
                style: "normal"
            }),
            i = new vc("Aeonik", {
                weight: 500,
                style: "normal"
            });
        Promise.all([e.load(), t.load(), i.load()])
            .then(() => {
                window.dispatchEvent(new Event("fontsLoaded")), this.fontsLoaded = !0, this.loadingProgress += .1, this.animateLogoLoading(.2), this.videoLoaded && this.preloaderVideoLoaded && this.coversLoaded && this.onAllLoaded()
            })
    }
    onAllLoaded() {
        this.loaded = !0, window.loaded = !0, this.pageTemplate !== "ui" && (() => {
            window.dispatchEvent(new Event("loaded"))
        })()
    }
    loadVideo() {
        const e = "/images.prismic.io/blinkpath/Blinkpath_HeaderReel_ProRes.mp4";
        this.video = document.createElement("video"), this.video.id = "hero-video", this.video.autoplay = !1, this.video.loop = !0, this.video.muted = !0, this.video.playsInline = !0, this.video.preload = "none", this.video.setAttribute("playsinline", "true"), this.video.addEventListener("loadeddata", () => {
            this.videoLoaded = !0, window.video = this.video, this.loadingProgress += .5, this.animateLogoLoading(.5), this.fontsLoaded && this.preloaderVideoLoaded && this.coversLoaded && this.onAllLoaded()
        }), this.video.src = e
    }
    loadPreloaderVideo() {
        const e = "/images.prismic.io/blinkpath/preloader-video.mp4";
        this.preloaderVideo = document.createElement("video"), this.preloaderVideo.autoplay = !0, this.preloaderVideo.loop = !0, this.preloaderVideo.muted = !0, this.preloaderVideo.playsInline = !0, this.preloaderVideo.preload = "none", this.preloaderVideo.setAttribute("playsinline", "true"), this.preloaderVideo.addEventListener("loadeddata", () => {
            this.preloaderVideo?.pause(), this.preloaderVideoLoaded = !0, this.loadingProgress += .2, this.animateLogoLoading(.3), this.fontsLoaded && this.videoLoaded && this.coversLoaded && this.onAllLoaded()
        }), this.preloaderVideo.src = e
    }
    animateInHomepage(e) {
        const t = oe.timeline({
                defaults: {
                    duration: .8,
                    ease: "power2.inOut"
                }
            }),
            i = this.currentPage,
            n = B("[data-preloader-orange-container]", this.element),
            s = B("[data-preloader-dark-container]", this.element),
            o = B("[data-preloader-video-container]", this.element),
            a = B("[data-preloader-video-wrapper]", this.element),
            l = B("[data-preloader-video-mask]", this.element),
            u = B("header"),
            c = B("#navbar"),
            h = B("#mobile-menu-container"),
            f = B("[preloader-logo]");
        this.preloaderVideo && a.appendChild(this.preloaderVideo), oe.set(o, {
            scale: 100 / 80
        }), oe.set([u, c, h], {
            y: "-80dvh"
        }), t.to(l, {
            opacity: 0,
            onStart: () => {
                this.preloaderVideo?.play()
                    .catch(() => {
                        console.log("video play error")
                    })
            }
        }, ">0.2"), t.to(f, {
            yPercent: -100,
            duration: .3
        }, "<"),         t.to(n, {
            y: "80dvh",
            delay: 0.3,
            borderRadius: "6vmax 6vmax 0 0"
        }), t.to(s, {
            scale: 88 / 100,
            borderRadius: "3vmax 3vmax 0 0"
        }, "<"), t.to([u, c, h], {
            y: 0
        }, "<"), t.to(l, {
            opacity: .9
        }, "<"), t.to({
            x: 0
        }, {
            x: 1,
            duration: .1,
            delay: 0.1,
            onStart: () => {
                i.titleAnimation.playLines()
            }
        }, "<"), t.call(() => {
            this.element.style.pointerEvents = "none", this.element.style.opacity = "0", setTimeout(() => {
                this.preloaderVideo && (this.preloaderVideo.pause(), this.preloaderVideo.removeAttribute("src"), this.preloaderVideo.load(), this.preloaderVideo.remove(), this.preloaderVideo = null)
            }, 500), e()
        })
    }
    animateInDefault(e) {
        const t = oe.timeline({
                defaults: {
                    duration: .8,
                    ease: "power2.inOut"
                }
            }),
            i = B("#transition-container"),
            n = B("#transition-overlay"),
            s = Fe("[data-transition-logo]"),
            o = Fe("[data-transition-block]"),
            a = B("[data-preloader-video-wrapper]", this.element),
            l = B("[data-preloader-video-mask]", this.element),
            u = B("[preloader-logo]"),
            c = B("[data-preloader-orange-container]", this.element);
        this.preloaderVideo && a.appendChild(this.preloaderVideo);
        const h = B("[data-preloader-video-container]", this.element);
        oe.set(h, {
            scale: 100 / 80
        }), oe.set(o, {
            yPercent: 100
        }), i.style.opacity = "1", i.style.pointerEvents = "auto";
        const f = B("#scroll-container");
        B("[layout-container]")
            .style.background = "rgb(var(--color-orange-1))", B("[layout-container]")
            .style.overflowY = "scroll", f.classList.add("no-scrollbar"), oe.set(f, {
                scale: .95,
                borderRadius: "3vmax"
            }), t.to(l, {
                opacity: 0,
                onStart: () => {
                    this.preloaderVideo?.play()
                        .catch(() => {
                            console.log("video play error")
                        })
                }
            }, ">0.2"), t.to(u, {
                yPercent: -100,
                duration: .3
            }, "<"), t.to(c, {
                scale: .95,
                borderRadius: "3vmax",
                duration: .4,
                ease: "power1.inOut"
            }, ">+=2.5"), t.to(n, {
                opacity: 1,
                duration: .2
            }, "<"), t.to(o, {
                yPercent: 0,
                duration: .3,
                stagger: .2,
                ease: "power1.inOut"
            }, "<+=0.35"), t.to(s, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: .3,
                stagger: .2,
                ease: "power1.inOut"
            }, "<");
        const g = oe.timeline({
            paused: !0
        });
        t.call(() => {
            this.element.style.pointerEvents = "none", this.element.style.opacity = "0", g.play()
        }), g.to(o.reverse(), {
            yPercent: -100,
            duration: .3,
            ease: "power2.in"
        }, "<"), g.to(s.reverse(), {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            duration: .3,
            ease: "power2.in"
        }, "<"), g.to(f, {
            scale: 1,
            borderRadius: "0",
            duration: .35,
            ease: "power1.inOut",
            onStart: () => {
                this.currentPage.beforePreloaderAnimationEnd()
            }
        }, "<+=0.2"), g.to(n, {
            opacity: 0,
            duration: .4
        }, "<"), g.call(() => {
            i.style.opacity = "0", i.style.pointerEvents = "none", B("[layout-container]")
                .style.background = "none", B("[layout-container]")
                .style.overflowY = "unset", f.classList.remove("no-scrollbar"), this.preloaderVideo && (this.preloaderVideo.pause(), this.preloaderVideo.removeAttribute("src"), this.preloaderVideo.load(), this.preloaderVideo.remove(), this.preloaderVideo = null), e()
        })
    }
    animateOut(e) {
        this.pageTemplate === "home" ? this.animateInHomepage(e) : this.animateInDefault(e)
    }
    preloadCovers() {
        const e = Object.keys(window.COVERS);
        this.coversCount = e.length, e.forEach(t => {
            const i = new Image;
            i.src = t, i.addEventListener("load", () => {
                this.onCoverLoaded(t, i)
            }), i.complete && this.onCoverLoaded(t, i)
        })
    }
    onCoverLoaded(e, t) {
        window.COVERS[e] = t, this.coversLoadedCount += 1, this.coversLoadedCount === this.coversCount && (this.coversLoaded = !0, this.loadingProgress += .2, this.animateLogoLoading(.2), this.fontsLoaded && this.videoLoaded && this.preloaderVideoLoaded && this.onAllLoaded())
    }
    animateLogoLoading(e = .3) {
        const t = B("[data-preloader-logo-mask]", this.element);
        this.logoLoadingTl.to(t, {
            clipPath: `polygon(0% ${(1 - this.loadingProgress) * 100}%, 100% ${(1 - this.loadingProgress) * 100}%, 100% 100%, 0% 100%)`,
            duration: e
        })
    }
}
class U1 extends Za {
    leftContainer;
    rightContainer;
    leftButton;
    rightButton;
    video;
    progress = {
        value: 0
    };
    units;
    tens;
    hundreds;
    constructor() {
        super(), this.createHoverTextAnimation(), this.element = B("#navbar"), this.element.classList.add("visible-on-desktop")
    }
    createVideo() {}
    loadVideo() {
        const e = "/images.prismic.io/blinkpath/Blinkpath_HeaderReel_ProRes.mp4";
        this.video = document.createElement("video"), this.video.autoplay = !1, this.video.loop = !0, this.video.muted = !0, this.video.playsInline = !0, this.video.setAttribute("playsinline", "true"), this.video.addEventListener("loadeddata", () => {
            this.leftContainer.appendChild(this.video)
        }), this.video.src = e
    }
    render() {}
}
class W1 extends Za {
    constructor() {
        super(), this.createHoverTextAnimation()
    }
    setVideo() {
        window.video && (B("[data-video-container]")
            .appendChild(window.video), window.video.pause()
            .catch(t => {
                console.warn("Video pause failed:", t)
            }))
    }
    beforePreloaderAnimationEnd() {
        window.video?.pause()
            .catch(e => {})
    }
    onFirstLoad() {
        window.video && (B("[data-video-container]")
            .appendChild(window.video), window.video.pause())
    }
    destroy() {
        this.orangeLinks.forEach(e => {
            e.removeEventListener("click", this.onClickOrangeLink.bind(this, e))
        }), this.mobileMenu?.destroy(), window.video?.pause(), window.video?.remove()
    }
}
class Y1 extends Za {
    scrollDownButtons;
    marquee;
    constructor() {
        super(), this.createHoverTextAnimation(), this.createMarquee(), this.setupScrollDownButton()
    }
    setupScrollDownButton() {
        this.scrollDownButtons = Fe("[data-scroll-down-button]"), this.scrollDownButtons.forEach(e => {
            e.addEventListener("click", this.onClickScrollDownButton.bind(this, e))
        })
    }
    onClickScrollDownButton(e) {
        const t = e.getAttribute("data-scroll-down-button") || "";
        window.lenis && t && window.lenis.scrollTo(t, {
            duration: 2
        })
    }
    createMarquee() {
        this.marquee = new Bg
    }
    destroy() {
        this.marquee.destroy(), this.mobileMenu?.destroy(), this.orangeLinks.forEach(e => {
            e.removeEventListener("click", this.onClickOrangeLink.bind(this, e))
        }), this.scrollDownButtons.forEach(e => {
            e.removeEventListener("click", this.onClickScrollDownButton.bind(this, e))
        })
    }
}
oe.registerPlugin(Se, Ki, so, Kh, rn);
Se.defaults({
    scroller: "#scroll-container"
});
window.loaded = !1;
window.lenis = null;
window.video = null;
class X1 {
    scroll;
    barba;
    currentPage;
    contactMenu;
    preloader;
    currentPageTemplate;
    constructor() {
        this.scroll = new E_, this.setPageTemplate(), this.preloader = new $1({
            pageTemplate: this.currentPageTemplate,
            currentPage: this.currentPage
        }), this.contactMenu = new V1, this.createPage(), this.scroll.lenis.on("scroll", e => {
            this.currentPage?.onScroll(e.scroll)
        }), this.barba = new sD({
            scroll: this.scroll,
            onPageLeave: () => {
                this.currentPage.destroy(), this.contactMenu.unMount()
            },
            onPageEnter: () => {
                this.createPage(), this.contactMenu.mount()
            },
            onBeforeEnter: () => {
                this.scroll.resetScroll()
            },
            onAfterEnter: () => {
                this.currentPage.afterEnter(), this.currentPage.afterTransition(), Se.refresh()
            },
            onBeforeLeave: () => (this.contactMenu.opened && this.contactMenu.onClose(), this.currentPage.clickedOrangeLink)
        }), window.addEventListener("loaded", () => {
            this.preloader.currentPage = this.currentPage, this.contactMenu?.form?.createSuccessTextAnimation(), this.currentPage?.onFirstLoad(), Se.refresh(), window.addEventListener("resize", () => {
                this.contactMenu?.onResize(), this.currentPage?.onResize()
            }), this.render(), this.preloader.animateOut(() => {
                this.currentPage.afterPreloaderAnimation()
            })
        }), this.preloader.load()
    }
    createPage() {
        this.setPageTemplate(), this.setPageColor(), this.currentPageTemplate === "home" ? this.currentPage = new Fy({
                scroll: this.scroll
            }) : this.currentPageTemplate === "work" ? this.currentPage = new lD : this.currentPageTemplate === "about" ? new Mg()
            .setupLayout() : this.currentPageTemplate === "ui" ? this.currentPage = new U1 : this.currentPageTemplate === "privacy-policy" ? this.currentPage = new Y1 : this.currentPageTemplate === "error" && (this.currentPage = new W1)
    }
    setPageTemplate() {
        this.currentPageTemplate = B("[data-template]")
            .getAttribute("data-template")
    }
    setPageColor() {
        B("[data-color-scheme]")
            .getAttribute("data-color-scheme") === "dark" ? document.body.style.background = "rgb(var(--color-dark-1))" : document.body.style.background = "rgb(var(--color-light-1))"
    }
    render() {
        this.currentPage?.render(), requestAnimationFrame(this.render.bind(this))
    }
}
new X1;