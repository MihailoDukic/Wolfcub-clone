// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/vendors/gsap.min.js":[function(require,module,exports) {
var define;
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * GSAP 3.6.1
 * https://greensock.com
 * 
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {});
}(this, function (e) {
  "use strict";

  function _inheritsLoose(t, e) {
    t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e;
  }

  function _assertThisInitialized(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }

  function o(t) {
    return "string" == typeof t;
  }

  function p(t) {
    return "function" == typeof t;
  }

  function q(t) {
    return "number" == typeof t;
  }

  function r(t) {
    return void 0 === t;
  }

  function s(t) {
    return "object" == _typeof(t);
  }

  function t(t) {
    return !1 !== t;
  }

  function u() {
    return "undefined" != typeof window;
  }

  function v(t) {
    return p(t) || o(t);
  }

  function M(t) {
    return (h = mt(t, ot)) && ae;
  }

  function N(t, e) {
    return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
  }

  function O(t, e) {
    return !e && console.warn(t);
  }

  function P(t, e) {
    return t && (ot[t] = e) && h && (h[t] = e) || ot;
  }

  function Q() {
    return 0;
  }

  function $(t) {
    var e,
        r,
        i = t[0];

    if (s(i) || p(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
      for (r = pt.length; r-- && !pt[r].targetTest(i);) {
        ;
      }

      e = pt[r];
    }

    for (r = t.length; r--;) {
      t[r] && (t[r]._gsap || (t[r]._gsap = new Rt(t[r], e))) || t.splice(r, 1);
    }

    return t;
  }

  function _(t) {
    return t._gsap || $(Tt(t))[0]._gsap;
  }

  function aa(t, e, i) {
    return (i = t[e]) && p(i) ? t[e]() : r(i) && t.getAttribute && t.getAttribute(e) || i;
  }

  function ba(t, e) {
    return (t = t.split(",")).forEach(e) || t;
  }

  function ca(t) {
    return Math.round(1e5 * t) / 1e5 || 0;
  }

  function da(t, e) {
    for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;) {
      ;
    }

    return i < r;
  }

  function ea(e, r, i) {
    var n,
        a = q(e[1]),
        s = (a ? 2 : 1) + (r < 2 ? 0 : 1),
        o = e[s];

    if (a && (o.duration = e[1]), o.parent = i, r) {
      for (n = o; i && !("immediateRender" in n);) {
        n = i.vars.defaults || {}, i = t(i.vars.inherit) && i.parent;
      }

      o.immediateRender = t(n.immediateRender), r < 2 ? o.runBackwards = 1 : o.startAt = e[s - 1];
    }

    return o;
  }

  function fa() {
    var t,
        e,
        r = ht.length,
        i = ht.slice(0);

    for (lt = {}, t = ht.length = 0; t < r; t++) {
      (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
    }
  }

  function ga(t, e, r, i) {
    ht.length && fa(), t.render(e, r, i), ht.length && fa();
  }

  function ha(t) {
    var e = parseFloat(t);
    return (e || 0 === e) && (t + "").match(at).length < 2 ? e : o(t) ? t.trim() : t;
  }

  function ia(t) {
    return t;
  }

  function ja(t, e) {
    for (var r in e) {
      r in t || (t[r] = e[r]);
    }

    return t;
  }

  function ka(t, e) {
    for (var r in e) {
      r in t || "duration" === r || "ease" === r || (t[r] = e[r]);
    }
  }

  function ma(t, e) {
    for (var r in e) {
      "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = s(e[r]) ? ma(t[r] || (t[r] = {}), e[r]) : e[r]);
    }

    return t;
  }

  function na(t, e) {
    var r,
        i = {};

    for (r in t) {
      r in e || (i[r] = t[r]);
    }

    return i;
  }

  function oa(e) {
    var r = e.parent || F,
        i = e.keyframes ? ka : ja;
    if (t(e.inherit)) for (; r;) {
      i(e, r.vars.defaults), r = r.parent || r._dp;
    }
    return e;
  }

  function ra(t, e, r, i) {
    void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
    var n = e._prev,
        a = e._next;
    n ? n._next = a : t[r] === e && (t[r] = a), a ? a._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null;
  }

  function sa(t, e) {
    !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0;
  }

  function ta(t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0)) for (var r = t; r;) {
      r._dirty = 1, r = r.parent;
    }
    return t;
  }

  function wa(t) {
    return t._repeat ? gt(t._tTime, t = t.duration() + t._rDelay) * t : 0;
  }

  function ya(t, e) {
    return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur);
  }

  function za(t) {
    return t._end = ca(t._start + (t._tDur / Math.abs(t._ts || t._rts || j) || 0));
  }

  function Aa(t, e) {
    var r = t._dp;
    return r && r.smoothChildTiming && t._ts && (t._start = ca(r._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), za(t), r._dirty || ta(r, t)), t;
  }

  function Ba(t, e) {
    var r;

    if ((e._time || e._initted && !e._dur) && (r = ya(t.rawTime(), e), (!e._dur || yt(0, e.totalDuration(), r) - e._tTime > j) && e.render(r, !0)), ta(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
      if (t._dur < t.duration()) for (r = t; r._dp;) {
        0 <= r.rawTime() && r.totalTime(r._tTime), r = r._dp;
      }
      t._zTime = -j;
    }
  }

  function Ca(t, e, r, i) {
    return e.parent && sa(e), e._start = ca(r + e._delay), e._end = ca(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), function _addLinkedListItem(t, e, r, i, n) {
      void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
      var a,
          s = t[i];
      if (n) for (a = e[n]; s && s[n] > a;) {
        s = s._prev;
      }
      s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t;
    }(t, e, "_first", "_last", t._sort ? "_start" : 0), t._recent = e, i || Ba(t, e), t;
  }

  function Da(t, e) {
    return (ot.ScrollTrigger || N("scrollTrigger", e)) && ot.ScrollTrigger.create(e, t);
  }

  function Ea(t, e, r, i) {
    return Nt(t, e), t._initted ? !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && f !== Pt.frame ? (ht.push(t), t._lazy = [e, i], 1) : void 0 : 1;
  }

  function Ia(t, e, r, i) {
    var n = t._repeat,
        a = ca(e) || 0,
        s = t._tTime / t._tDur;
    return s && !i && (t._time *= a / t._dur), t._dur = a, t._tDur = n ? n < 0 ? 1e10 : ca(a * (n + 1) + t._rDelay * n) : a, s && !i ? Aa(t, t._tTime = t._tDur * s) : t.parent && za(t), r || ta(t.parent, t), t;
  }

  function Ja(t) {
    return t instanceof Bt ? ta(t) : Ia(t, t._dur);
  }

  function La(t, e) {
    var r,
        i,
        n = t.labels,
        a = t._recent || vt,
        s = t.duration() >= U ? a.endTime(!1) : t._dur;
    return o(e) && (isNaN(e) || e in n) ? "<" === (r = e.charAt(0)) || ">" === r ? ("<" === r ? a._start : a.endTime(0 <= a._repeat)) + (parseFloat(e.substr(1)) || 0) : (r = e.indexOf("=")) < 0 ? (e in n || (n[e] = s), n[e]) : (i = +(e.charAt(r - 1) + e.substr(r + 1)), 1 < r ? La(t, e.substr(0, r - 1)) + i : s + i) : null == e ? s : +e;
  }

  function Ma(t, e) {
    return t || 0 === t ? e(t) : e;
  }

  function Oa(t) {
    if ("string" != typeof t) return "";
    var e = st.exec(t);
    return e ? t.substr(e.index + e[0].length) : "";
  }

  function Ra(t, e) {
    return t && s(t) && "length" in t && (!e && !t.length || t.length - 1 in t && s(t[0])) && !t.nodeType && t !== i;
  }

  function Ua(t) {
    return t.sort(function () {
      return .5 - Math.random();
    });
  }

  function Va(t) {
    if (p(t)) return t;

    var _ = s(t) ? t : {
      each: t
    },
        m = Et(_.ease),
        g = _.from || 0,
        v = parseFloat(_.base) || 0,
        y = {},
        e = 0 < g && g < 1,
        b = isNaN(g) || e,
        T = _.axis,
        w = g,
        x = g;

    return o(g) ? w = x = {
      center: .5,
      edges: .5,
      end: 1
    }[g] || 0 : !e && b && (w = g[0], x = g[1]), function (t, e, r) {
      var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          d = (r || _).length,
          c = y[d];

      if (!c) {
        if (!(f = "auto" === _.grid ? 0 : (_.grid || [1, U])[1])) {
          for (h = -U; h < (h = r[f++].getBoundingClientRect().left) && f < d;) {
            ;
          }

          f--;
        }

        for (c = y[d] = [], i = b ? Math.min(f, d) * w - .5 : g % f, n = b ? d * x / f - .5 : g / f | 0, l = U, u = h = 0; u < d; u++) {
          a = u % f - i, s = n - (u / f | 0), c[u] = o = T ? Math.abs("y" === T ? s : a) : J(a * a + s * s), h < o && (h = o), o < l && (l = o);
        }

        "random" === g && Ua(c), c.max = h - l, c.min = l, c.v = d = (parseFloat(_.amount) || parseFloat(_.each) * (d < f ? d - 1 : T ? "y" === T ? d / f : f : Math.max(f, d / f)) || 0) * ("edges" === g ? -1 : 1), c.b = d < 0 ? v - d : v, c.u = Oa(_.amount || _.each) || 0, m = m && d < 0 ? It(m) : m;
      }

      return d = (c[t] - c.min) / c.max || 0, ca(c.b + (m ? m(d) : d) * c.v) + c.u;
    };
  }

  function Wa(r) {
    var i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1;
    return function (t) {
      var e = Math.round(parseFloat(t) / r) * r * i;
      return (e - e % 1) / i + (q(t) ? 0 : Oa(t));
    };
  }

  function Xa(u, t) {
    var h,
        l,
        e = K(u);
    return !e && s(u) && (h = e = u.radius || U, u.values ? (u = Tt(u.values), (l = !q(u[0])) && (h *= h)) : u = Wa(u.increment)), Ma(t, e ? p(u) ? function (t) {
      return l = u(t), Math.abs(l - t) <= h ? l : t;
    } : function (t) {
      for (var e, r, i = parseFloat(l ? t.x : t), n = parseFloat(l ? t.y : 0), a = U, s = 0, o = u.length; o--;) {
        (e = l ? (e = u[o].x - i) * e + (r = u[o].y - n) * r : Math.abs(u[o] - i)) < a && (a = e, s = o);
      }

      return s = !h || a <= h ? u[s] : t, l || s === t || q(t) ? s : s + Oa(t);
    } : Wa(u));
  }

  function Ya(t, e, r, i) {
    return Ma(K(t) ? !e : !0 === r ? !!(r = 0) : !i, function () {
      return K(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i;
    });
  }

  function ab(e, r, t) {
    return Ma(t, function (t) {
      return e[~~r(t)];
    });
  }

  function db(t) {
    for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a));) {
      i = t.indexOf(")", e), n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? at : tt), s += t.substr(a, e - a) + Ya(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5), a = i + 1;
    }

    return s + t.substr(a, t.length - a);
  }

  function gb(t, e, r) {
    var i,
        n,
        a,
        s = t.labels,
        o = U;

    for (i in s) {
      (n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (a = i, o = n);
    }

    return a;
  }

  function ib(t) {
    return sa(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && xt(t, "onInterrupt"), t;
  }

  function nb(t, e, r) {
    return (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * Ot + .5 | 0;
  }

  function ob(t, e, r) {
    var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        d,
        c = t ? q(t) ? [t >> 16, t >> 8 & Ot, t & Ot] : 0 : Mt.black;

    if (!c) {
      if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Mt[t]) c = Mt[t];else if ("#" === t.charAt(0)) {
        if (t.length < 6 && (t = "#" + (i = t.charAt(1)) + i + (n = t.charAt(2)) + n + (a = t.charAt(3)) + a + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(c = parseInt(t.substr(1, 6), 16)) >> 16, c >> 8 & Ot, c & Ot, parseInt(t.substr(7), 16) / 255];
        c = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & Ot, t & Ot];
      } else if ("hsl" === t.substr(0, 3)) {
        if (c = d = t.match(tt), e) {
          if (~t.indexOf("=")) return c = t.match(et), r && c.length < 4 && (c[3] = 1), c;
        } else s = +c[0] % 360 / 360, o = c[1] / 100, i = 2 * (u = c[2] / 100) - (n = u <= .5 ? u * (o + 1) : u + o - u * o), 3 < c.length && (c[3] *= 1), c[0] = nb(s + 1 / 3, i, n), c[1] = nb(s, i, n), c[2] = nb(s - 1 / 3, i, n);
      } else c = t.match(tt) || Mt.transparent;
      c = c.map(Number);
    }

    return e && !d && (i = c[0] / Ot, n = c[1] / Ot, a = c[2] / Ot, u = ((h = Math.max(i, n, a)) + (l = Math.min(i, n, a))) / 2, h === l ? s = o = 0 : (f = h - l, o = .5 < u ? f / (2 - h - l) : f / (h + l), s = h === i ? (n - a) / f + (n < a ? 6 : 0) : h === n ? (a - i) / f + 2 : (i - n) / f + 4, s *= 60), c[0] = ~~(s + .5), c[1] = ~~(100 * o + .5), c[2] = ~~(100 * u + .5)), r && c.length < 4 && (c[3] = 1), c;
  }

  function pb(t) {
    var r = [],
        i = [],
        n = -1;
    return t.split(kt).forEach(function (t) {
      var e = t.match(rt) || [];
      r.push.apply(r, e), i.push(n += e.length + 1);
    }), r.c = i, r;
  }

  function qb(t, e, r) {
    var i,
        n,
        a,
        s,
        o = "",
        u = (t + o).match(kt),
        h = e ? "hsla(" : "rgba(",
        l = 0;
    if (!u) return t;
    if (u = u.map(function (t) {
      return (t = ob(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")";
    }), r && (a = pb(t), (i = r.c).join(o) !== a.c.join(o))) for (s = (n = t.replace(kt, "1").split(rt)).length - 1; l < s; l++) {
      o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
    }
    if (!n) for (s = (n = t.split(kt)).length - 1; l < s; l++) {
      o += n[l] + u[l];
    }
    return o + n[s];
  }

  function tb(t) {
    var e,
        r = t.join(" ");
    if (kt.lastIndex = 0, kt.test(r)) return e = Ct.test(r), t[1] = qb(t[1], e), t[0] = qb(t[0], e, pb(t[1])), !0;
  }

  function Cb(t) {
    var e = (t + "").split("("),
        r = Dt[e[0]];
    return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [function _parseObjectInString(t) {
      for (var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++) {
        r = a[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[s] = isNaN(i) ? i.replace(zt, "").trim() : +i, s = r.substr(e + 1).trim();
      }

      return n;
    }(e[1])] : function _valueInParentheses(t) {
      var e = t.indexOf("(") + 1,
          r = t.indexOf(")"),
          i = t.indexOf("(", e);
      return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r);
    }(t).split(",").map(ha)) : Dt._CE && St.test(t) ? Dt._CE("", t) : r;
  }

  function Eb(t, e) {
    for (var r, i = t._first; i;) {
      i instanceof Bt ? Eb(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? Eb(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next;
    }
  }

  function Gb(t, e, r, i) {
    void 0 === r && (r = function easeOut(t) {
      return 1 - e(1 - t);
    }), void 0 === i && (i = function easeInOut(t) {
      return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
    });
    var n,
        a = {
      easeIn: e,
      easeOut: r,
      easeInOut: i
    };
    return ba(t, function (t) {
      for (var e in Dt[t] = ot[t] = a, Dt[n = t.toLowerCase()] = r, a) {
        Dt[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Dt[t + "." + e] = a[e];
      }
    }), a;
  }

  function Hb(e) {
    return function (t) {
      return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2;
    };
  }

  function Ib(r, t, e) {
    function Dl(t) {
      return 1 === t ? 1 : i * Math.pow(2, -10 * t) * H((t - a) * n) + 1;
    }

    var i = 1 <= t ? t : 1,
        n = (e || (r ? .3 : .45)) / (t < 1 ? t : 1),
        a = n / X * (Math.asin(1 / i) || 0),
        s = "out" === r ? Dl : "in" === r ? function (t) {
      return 1 - Dl(1 - t);
    } : Hb(Dl);
    return n = X / n, s.config = function (t, e) {
      return Ib(r, t, e);
    }, s;
  }

  function Jb(e, r) {
    function Ll(t) {
      return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
    }

    void 0 === r && (r = 1.70158);
    var t = "out" === e ? Ll : "in" === e ? function (t) {
      return 1 - Ll(1 - t);
    } : Hb(Ll);
    return t.config = function (t) {
      return Jb(e, t);
    }, t;
  }

  var R,
      F,
      i,
      n,
      a,
      h,
      l,
      f,
      d,
      c,
      m,
      g,
      y,
      b,
      T,
      w,
      x,
      k,
      C,
      A,
      D,
      S,
      z,
      I,
      E,
      L,
      Y = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  },
      B = {
    duration: .5,
    overwrite: !1,
    delay: 0
  },
      U = 1e8,
      j = 1 / U,
      X = 2 * Math.PI,
      V = X / 4,
      G = 0,
      J = Math.sqrt,
      W = Math.cos,
      H = Math.sin,
      Z = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function () {},
      K = Array.isArray,
      tt = /(?:-?\.?\d|\.)+/gi,
      et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
      rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
      nt = /[+-]=-?[.\d]+/,
      at = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
      st = /[\d.+\-=]+(?:e[-+]\d*)*/i,
      ot = {},
      ut = {},
      ht = [],
      lt = {},
      ft = {},
      dt = {},
      ct = 30,
      pt = [],
      _t = "",
      mt = function _merge(t, e) {
    for (var r in e) {
      t[r] = e[r];
    }

    return t;
  },
      gt = function _animationCycle(t, e) {
    var r = Math.floor(t /= e);
    return t && r === t ? r - 1 : r;
  },
      vt = {
    _start: 0,
    endTime: Q
  },
      yt = function _clamp(t, e, r) {
    return r < t ? t : e < r ? e : r;
  },
      bt = [].slice,
      Tt = function toArray(t, e) {
    return !o(t) || e || !n && At() ? K(t) ? function _flatten(t, e, r) {
      return void 0 === r && (r = []), t.forEach(function (t) {
        return o(t) && !e || Ra(t, 1) ? r.push.apply(r, Tt(t)) : r.push(t);
      }) || r;
    }(t, e) : Ra(t) ? bt.call(t, 0) : t ? [t] : [] : bt.call(a.querySelectorAll(t), 0);
  },
      wt = function mapRange(e, t, r, i, n) {
    var a = t - e,
        s = i - r;
    return Ma(n, function (t) {
      return r + ((t - e) / a * s || 0);
    });
  },
      xt = function _callback(t, e, r) {
    var i,
        n,
        a = t.vars,
        s = a[e];
    if (s) return i = a[e + "Params"], n = a.callbackScope || t, r && ht.length && fa(), i ? s.apply(n, i) : s.call(n);
  },
      Ot = 255,
      Mt = {
    aqua: [0, Ot, Ot],
    lime: [0, Ot, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, Ot],
    navy: [0, 0, 128],
    white: [Ot, Ot, Ot],
    olive: [128, 128, 0],
    yellow: [Ot, Ot, 0],
    orange: [Ot, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [Ot, 0, 0],
    pink: [Ot, 192, 203],
    cyan: [0, Ot, Ot],
    transparent: [Ot, Ot, Ot, 0]
  },
      kt = function () {
    var t,
        e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";

    for (t in Mt) {
      e += "|" + t + "\\b";
    }

    return new RegExp(e + ")", "gi");
  }(),
      Ct = /hsl[a]?\(/,
      Pt = (x = Date.now, k = 500, C = 33, A = x(), D = A, z = S = 1e3 / 240, b = {
    time: 0,
    frame: 0,
    tick: function tick() {
      zk(!0);
    },
    deltaRatio: function deltaRatio(t) {
      return T / (1e3 / (t || 60));
    },
    wake: function wake() {
      l && (!n && u() && (i = n = window, a = i.document || {}, ot.gsap = ae, (i.gsapVersions || (i.gsapVersions = [])).push(ae.version), M(h || i.GreenSockGlobals || !i.gsap && i || {}), y = i.requestAnimationFrame), m && b.sleep(), g = y || function (t) {
        return setTimeout(t, z - 1e3 * b.time + 1 | 0);
      }, c = 1, zk(2));
    },
    sleep: function sleep() {
      (y ? i.cancelAnimationFrame : clearTimeout)(m), c = 0, g = Q;
    },
    lagSmoothing: function lagSmoothing(t, e) {
      k = t || 1e8, C = Math.min(e, k, 0);
    },
    fps: function fps(t) {
      S = 1e3 / (t || 240), z = 1e3 * b.time + S;
    },
    add: function add(t) {
      I.indexOf(t) < 0 && I.push(t), At();
    },
    remove: function remove(t) {
      var e;
      ~(e = I.indexOf(t)) && I.splice(e, 1) && e <= w && w--;
    },
    _listeners: I = []
  }),
      At = function _wake() {
    return !c && Pt.wake();
  },
      Dt = {},
      St = /^[\d.\-M][\d.\-,\s]/,
      zt = /["']/g,
      It = function _invertEase(e) {
    return function (t) {
      return 1 - e(1 - t);
    };
  },
      Et = function _parseEase(t, e) {
    return t && (p(t) ? t : Dt[t] || Cb(t)) || e;
  };

  function zk(t) {
    var e,
        r,
        i,
        n,
        a = x() - D,
        s = !0 === t;
    if (k < a && (A += a - C), (0 < (e = (i = (D += a) - A) - z) || s) && (n = ++b.frame, T = i - 1e3 * b.time, b.time = i /= 1e3, z += e + (S <= e ? 4 : S - e), r = 1), s || (m = g(zk)), r) for (w = 0; w < I.length; w++) {
      I[w](i, T, n, t);
    }
  }

  function am(t) {
    return t < L ? E * t * t : t < .7272727272727273 ? E * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? E * (t -= 2.25 / 2.75) * t + .9375 : E * Math.pow(t - 2.625 / 2.75, 2) + .984375;
  }

  ba("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var r = e < 5 ? e + 1 : e;
    Gb(t + ",Power" + (r - 1), e ? function (t) {
      return Math.pow(t, r);
    } : function (t) {
      return t;
    }, function (t) {
      return 1 - Math.pow(1 - t, r);
    }, function (t) {
      return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2;
    });
  }), Dt.Linear.easeNone = Dt.none = Dt.Linear.easeIn, Gb("Elastic", Ib("in"), Ib("out"), Ib()), E = 7.5625, L = 1 / 2.75, Gb("Bounce", function (t) {
    return 1 - am(1 - t);
  }, am), Gb("Expo", function (t) {
    return t ? Math.pow(2, 10 * (t - 1)) : 0;
  }), Gb("Circ", function (t) {
    return -(J(1 - t * t) - 1);
  }), Gb("Sine", function (t) {
    return 1 === t ? 1 : 1 - W(t * V);
  }), Gb("Back", Jb("in"), Jb("out"), Jb()), Dt.SteppedEase = Dt.steps = ot.SteppedEase = {
    config: function config(t, e) {
      void 0 === t && (t = 1);
      var r = 1 / t,
          i = t + (e ? 0 : 1),
          n = e ? 1 : 0;
      return function (t) {
        return ((i * yt(0, .99999999, t) | 0) + n) * r;
      };
    }
  }, B.ease = Dt["quad.out"], ba("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (t) {
    return _t += t + "," + t + "Params,";
  });

  var Lt,
      Rt = function GSCache(t, e) {
    this.id = G++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : aa, this.set = e ? e.getSetter : Wt;
  },
      Ft = ((Lt = Animation.prototype).delay = function delay(t) {
    return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay;
  }, Lt.duration = function duration(t) {
    return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur;
  }, Lt.totalDuration = function totalDuration(t) {
    return arguments.length ? (this._dirty = 0, Ia(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, Lt.totalTime = function totalTime(t, e) {
    if (At(), !arguments.length) return this._tTime;
    var r = this._dp;

    if (r && r.smoothChildTiming && this._ts) {
      for (Aa(this, t), !r._dp || r.parent || Ba(r, this); r.parent;) {
        r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
      }

      !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && Ca(this._dp, this, this._start - this._delay);
    }

    return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === j || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), ga(this, t, e)), this;
  }, Lt.time = function time(t, e) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + wa(this)) % this._dur || (t ? this._dur : 0), e) : this._time;
  }, Lt.totalProgress = function totalProgress(t, e) {
    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  }, Lt.progress = function progress(t, e) {
    return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + wa(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  }, Lt.iteration = function iteration(t, e) {
    var r = this.duration() + this._rDelay;

    return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? gt(this._tTime, r) + 1 : 1;
  }, Lt.timeScale = function timeScale(t) {
    if (!arguments.length) return this._rts === -j ? 0 : this._rts;
    if (this._rts === t) return this;
    var e = this.parent && this._ts ? ya(this.parent._time, this) : this._tTime;
    return this._rts = +t || 0, this._ts = this._ps || t === -j ? 0 : this._rts, function _recacheAncestors(t) {
      for (var e = t.parent; e && e.parent;) {
        e._dirty = 1, e.totalDuration(), e = e.parent;
      }

      return t;
    }(this.totalTime(yt(-this._delay, this._tDur, e), !0));
  }, Lt.paused = function paused(t) {
    return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (At(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= j) && Math.abs(this._zTime) !== j))), this) : this._ps;
  }, Lt.startTime = function startTime(t) {
    if (arguments.length) {
      this._start = t;
      var e = this.parent || this._dp;
      return !e || !e._sort && this.parent || Ca(e, this, t - this._delay), this;
    }

    return this._start;
  }, Lt.endTime = function endTime(e) {
    return this._start + (t(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts);
  }, Lt.rawTime = function rawTime(t) {
    var e = this.parent || this._dp;
    return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? ya(e.rawTime(t), this) : this._tTime : this._tTime;
  }, Lt.globalTime = function globalTime(t) {
    for (var e = this, r = arguments.length ? t : e.rawTime(); e;) {
      r = e._start + r / (e._ts || 1), e = e._dp;
    }

    return r;
  }, Lt.repeat = function repeat(t) {
    return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Ja(this)) : -2 === this._repeat ? 1 / 0 : this._repeat;
  }, Lt.repeatDelay = function repeatDelay(t) {
    return arguments.length ? (this._rDelay = t, Ja(this)) : this._rDelay;
  }, Lt.yoyo = function yoyo(t) {
    return arguments.length ? (this._yoyo = t, this) : this._yoyo;
  }, Lt.seek = function seek(e, r) {
    return this.totalTime(La(this, e), t(r));
  }, Lt.restart = function restart(e, r) {
    return this.play().totalTime(e ? -this._delay : 0, t(r));
  }, Lt.play = function play(t, e) {
    return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
  }, Lt.reverse = function reverse(t, e) {
    return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
  }, Lt.pause = function pause(t, e) {
    return null != t && this.seek(t, e), this.paused(!0);
  }, Lt.resume = function resume() {
    return this.paused(!1);
  }, Lt.reversed = function reversed(t) {
    return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -j : 0)), this) : this._rts < 0;
  }, Lt.invalidate = function invalidate() {
    return this._initted = this._act = 0, this._zTime = -j, this;
  }, Lt.isActive = function isActive() {
    var t,
        e = this.parent || this._dp,
        r = this._start;
    return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - j));
  }, Lt.eventCallback = function eventCallback(t, e, r) {
    var i = this.vars;
    return 1 < arguments.length ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t];
  }, Lt.then = function then(t) {
    var i = this;
    return new Promise(function (e) {
      function sn() {
        var t = i.then;
        i.then = null, p(r) && (r = r(i)) && (r.then || r === i) && (i.then = t), e(r), i.then = t;
      }

      var r = p(t) ? t : ia;
      i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? sn() : i._prom = sn;
    });
  }, Lt.kill = function kill() {
    ib(this);
  }, Animation);

  function Animation(t, e) {
    var r = t.parent || F;
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Ia(this, +t.duration, 1, 1), this.data = t.data, c || Pt.wake(), r && Ca(r, this, e || 0 === e ? e : r._time, 1), t.reversed && this.reverse(), t.paused && this.paused(!0);
  }

  ja(Ft.prototype, {
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
    _zTime: -j,
    _prom: 0,
    _ps: !1,
    _rts: 1
  });

  var Bt = function (n) {
    function Timeline(e, r) {
      var i;
      return void 0 === e && (e = {}), (i = n.call(this, e, r) || this).labels = {}, i.smoothChildTiming = !!e.smoothChildTiming, i.autoRemoveChildren = !!e.autoRemoveChildren, i._sort = t(e.sortChildren), i.parent && Ba(i.parent, _assertThisInitialized(i)), e.scrollTrigger && Da(_assertThisInitialized(i), e.scrollTrigger), i;
    }

    _inheritsLoose(Timeline, n);

    var e = Timeline.prototype;
    return e.to = function to(t, e, r, i) {
      return new Vt(t, ea(arguments, 0, this), La(this, q(e) ? i : r)), this;
    }, e.from = function from(t, e, r, i) {
      return new Vt(t, ea(arguments, 1, this), La(this, q(e) ? i : r)), this;
    }, e.fromTo = function fromTo(t, e, r, i, n) {
      return new Vt(t, ea(arguments, 2, this), La(this, q(e) ? n : i)), this;
    }, e.set = function set(t, e, r) {
      return e.duration = 0, e.parent = this, oa(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Vt(t, e, La(this, r), 1), this;
    }, e.call = function call(t, e, r) {
      return Ca(this, Vt.delayedCall(0, t, e), La(this, r));
    }, e.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
      return r.duration = e, r.stagger = r.stagger || i, r.onComplete = a, r.onCompleteParams = s, r.parent = this, new Vt(t, r, La(this, n)), this;
    }, e.staggerFrom = function staggerFrom(e, r, i, n, a, s, o) {
      return i.runBackwards = 1, oa(i).immediateRender = t(i.immediateRender), this.staggerTo(e, r, i, n, a, s, o);
    }, e.staggerFromTo = function staggerFromTo(e, r, i, n, a, s, o, u) {
      return n.startAt = i, oa(n).immediateRender = t(n.immediateRender), this.staggerTo(e, r, n, a, s, o, u);
    }, e.render = function render(t, e, r) {
      var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          d,
          c,
          p,
          _ = this._time,
          m = this._dirty ? this.totalDuration() : this._tDur,
          g = this._dur,
          v = this !== F && m - j < t && 0 <= t ? m : t < j ? 0 : t,
          y = this._zTime < 0 != t < 0 && (this._initted || !g);

      if (v !== this._tTime || r || y) {
        if (_ !== this._time && g && (v += this._time - _, t += this._time - _), i = v, f = this._start, u = !(l = this._ts), y && (g || (_ = this._zTime), !t && e || (this._zTime = t)), this._repeat) {
          if (c = this._yoyo, o = g + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * o + t, e, r);

          if (i = ca(v % o), v === m ? (s = this._repeat, i = g) : ((s = ~~(v / o)) && s === v / o && (i = g, s--), g < i && (i = g)), d = gt(this._tTime, o), !_ && this._tTime && d !== s && (d = s), c && 1 & s && (i = g - i, p = 1), s !== d && !this._lock) {
            var b = c && 1 & d,
                T = b === (c && 1 & s);
            if (s < d && (b = !b), _ = b ? 0 : g, this._lock = 1, this.render(_ || (p ? 0 : ca(s * o)), e, !g)._lock = 0, !e && this.parent && xt(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), _ && _ !== this._time || u != !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
            if (g = this._dur, m = this._tDur, T && (this._lock = 2, _ = b ? g : -1e-4, this.render(_, !0)), this._lock = 0, !this._ts && !u) return this;
            Eb(this, p);
          }
        }

        if (this._hasPause && !this._forcing && this._lock < 2 && (h = function _findNextPauseTween(t, e, r) {
          var i;
          if (e < r) for (i = t._first; i && i._start <= r;) {
            if (!i._dur && "isPause" === i.data && i._start > e) return i;
            i = i._next;
          } else for (i = t._last; i && i._start >= r;) {
            if (!i._dur && "isPause" === i.data && i._start < e) return i;
            i = i._prev;
          }
        }(this, ca(_), ca(i))) && (v -= i - (i = h._start)), this._tTime = v, this._time = i, this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, _ = 0), _ || !i || e || xt(this, "onStart"), _ <= i && 0 <= t) for (n = this._first; n;) {
          if (a = n._next, (n._act || i >= n._start) && n._ts && h !== n) {
            if (n.parent !== this) return this.render(t, e, r);

            if (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
              h = 0, a && (v += this._zTime = -j);
              break;
            }
          }

          n = a;
        } else {
          n = this._last;

          for (var w = t < 0 ? t : i; n;) {
            if (a = n._prev, (n._act || w <= n._end) && n._ts && h !== n) {
              if (n.parent !== this) return this.render(t, e, r);

              if (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
                h = 0, a && (v += this._zTime = w ? -j : j);
                break;
              }
            }

            n = a;
          }
        }
        if (h && !e && (this.pause(), h.render(_ <= i ? 0 : -j)._zTime = _ <= i ? 1 : -1, this._ts)) return this._start = f, za(this), this.render(t, e, r);
        this._onUpdate && !e && xt(this, "onUpdate", !0), (v === m && m >= this.totalDuration() || !v && _) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && g || !(v === m && 0 < this._ts || !v && this._ts < 0) || sa(this, 1), e || t < 0 && !_ || !v && !_ || (xt(this, v === m ? "onComplete" : "onReverseComplete", !0), !this._prom || v < m && 0 < this.timeScale() || this._prom())));
      }

      return this;
    }, e.add = function add(t, e) {
      var r = this;

      if (q(e) || (e = La(this, e)), !(t instanceof Ft)) {
        if (K(t)) return t.forEach(function (t) {
          return r.add(t, e);
        }), this;
        if (o(t)) return this.addLabel(t, e);
        if (!p(t)) return this;
        t = Vt.delayedCall(0, t);
      }

      return this !== t ? Ca(this, t, e) : this;
    }, e.getChildren = function getChildren(t, e, r, i) {
      void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -U);

      for (var n = [], a = this._first; a;) {
        a._start >= i && (a instanceof Vt ? e && n.push(a) : (r && n.push(a), t && n.push.apply(n, a.getChildren(!0, e, r)))), a = a._next;
      }

      return n;
    }, e.getById = function getById(t) {
      for (var e = this.getChildren(1, 1, 1), r = e.length; r--;) {
        if (e[r].vars.id === t) return e[r];
      }
    }, e.remove = function remove(t) {
      return o(t) ? this.removeLabel(t) : p(t) ? this.killTweensOf(t) : (ra(this, t), t === this._recent && (this._recent = this._last), ta(this));
    }, e.totalTime = function totalTime(t, e) {
      return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ca(Pt.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))), n.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime;
    }, e.addLabel = function addLabel(t, e) {
      return this.labels[t] = La(this, e), this;
    }, e.removeLabel = function removeLabel(t) {
      return delete this.labels[t], this;
    }, e.addPause = function addPause(t, e, r) {
      var i = Vt.delayedCall(0, e || Q, r);
      return i.data = "isPause", this._hasPause = 1, Ca(this, i, La(this, t));
    }, e.removePause = function removePause(t) {
      var e = this._first;

      for (t = La(this, t); e;) {
        e._start === t && "isPause" === e.data && sa(e), e = e._next;
      }
    }, e.killTweensOf = function killTweensOf(t, e, r) {
      for (var i = this.getTweensOf(t, r), n = i.length; n--;) {
        qt !== i[n] && i[n].kill(t, e);
      }

      return this;
    }, e.getTweensOf = function getTweensOf(t, e) {
      for (var r, i = [], n = Tt(t), a = this._first, s = q(e); a;) {
        a instanceof Vt ? da(a._targets, n) && (s ? (!qt || a._initted && a._ts) && a.globalTime(0) <= e && a.globalTime(a.totalDuration()) > e : !e || a.isActive()) && i.push(a) : (r = a.getTweensOf(n, e)).length && i.push.apply(i, r), a = a._next;
      }

      return i;
    }, e.tweenTo = function tweenTo(t, e) {
      e = e || {};
      var r = this,
          i = La(r, t),
          n = e.startAt,
          a = e.onStart,
          s = e.onStartParams,
          o = e.immediateRender,
          u = Vt.to(r, ja({
        ease: e.ease || "none",
        lazy: !1,
        immediateRender: !1,
        time: i,
        overwrite: "auto",
        duration: e.duration || Math.abs((i - (n && "time" in n ? n.time : r._time)) / r.timeScale()) || j,
        onStart: function onStart() {
          r.pause();
          var t = e.duration || Math.abs((i - r._time) / r.timeScale());
          u._dur !== t && Ia(u, t, 0, 1).render(u._time, !0, !0), a && a.apply(u, s || []);
        }
      }, e));
      return o ? u.render(0) : u;
    }, e.tweenFromTo = function tweenFromTo(t, e, r) {
      return this.tweenTo(e, ja({
        startAt: {
          time: La(this, t)
        }
      }, r));
    }, e.recent = function recent() {
      return this._recent;
    }, e.nextLabel = function nextLabel(t) {
      return void 0 === t && (t = this._time), gb(this, La(this, t));
    }, e.previousLabel = function previousLabel(t) {
      return void 0 === t && (t = this._time), gb(this, La(this, t), 1);
    }, e.currentLabel = function currentLabel(t) {
      return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + j);
    }, e.shiftChildren = function shiftChildren(t, e, r) {
      void 0 === r && (r = 0);

      for (var i, n = this._first, a = this.labels; n;) {
        n._start >= r && (n._start += t, n._end += t), n = n._next;
      }

      if (e) for (i in a) {
        a[i] >= r && (a[i] += t);
      }
      return ta(this);
    }, e.invalidate = function invalidate() {
      var t = this._first;

      for (this._lock = 0; t;) {
        t.invalidate(), t = t._next;
      }

      return n.prototype.invalidate.call(this);
    }, e.clear = function clear(t) {
      void 0 === t && (t = !0);

      for (var e, r = this._first; r;) {
        e = r._next, this.remove(r), r = e;
      }

      return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), ta(this);
    }, e.totalDuration = function totalDuration(t) {
      var e,
          r,
          i,
          n = 0,
          a = this,
          s = a._last,
          o = U;
      if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));

      if (a._dirty) {
        for (i = a.parent; s;) {
          e = s._prev, s._dirty && s.totalDuration(), o < (r = s._start) && a._sort && s._ts && !a._lock ? (a._lock = 1, Ca(a, s, r - s._delay, 1)._lock = 0) : o = r, r < 0 && s._ts && (n -= r, (!i && !a._dp || i && i.smoothChildTiming) && (a._start += r / a._ts, a._time -= r, a._tTime -= r), a.shiftChildren(-r, !1, -Infinity), o = 0), s._end > n && s._ts && (n = s._end), s = e;
        }

        Ia(a, a === F && a._time > n ? a._time : n, 1, 1), a._dirty = 0;
      }

      return a._tDur;
    }, Timeline.updateRoot = function updateRoot(t) {
      if (F._ts && (ga(F, ya(t, F)), f = Pt.frame), Pt.frame >= ct) {
        ct += Y.autoSleep || 120;
        var e = F._first;

        if ((!e || !e._ts) && Y.autoSleep && Pt._listeners.length < 2) {
          for (; e && !e._ts;) {
            e = e._next;
          }

          e || Pt.sleep();
        }
      }
    }, Timeline;
  }(Ft);

  ja(Bt.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });

  function Qb(t, e, r, i, n, a) {
    var u, h, l, f;
    if (ft[t] && !1 !== (u = new ft[t]()).init(n, u.rawVars ? e[t] : function _processVars(t, e, r, i, n) {
      if (p(t) && (t = Ut(t, n, e, r, i)), !s(t) || t.style && t.nodeType || K(t) || Z(t)) return o(t) ? Ut(t, n, e, r, i) : t;
      var a,
          u = {};

      for (a in t) {
        u[a] = Ut(t[a], n, e, r, i);
      }

      return u;
    }(e[t], i, n, a, r), r, i, a) && (r._pt = h = new ie(r._pt, n, t, 0, 1, u.render, u, 0, u.priority), r !== d)) for (l = r._ptLookup[r._targets.indexOf(n)], f = u._props.length; f--;) {
      l[u._props[f]] = h;
    }
    return u;
  }

  var qt,
      Yt = function _addPropTween(t, e, r, i, n, a, s, u, h) {
    p(i) && (i = i(n || 0, t, a));
    var l,
        f = t[e],
        d = "get" !== r ? r : p(f) ? h ? t[e.indexOf("set") || !p(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](h) : t[e]() : f,
        c = p(f) ? h ? Jt : Qt : Gt;
    if (o(i) && (~i.indexOf("random(") && (i = db(i)), "=" === i.charAt(1) && (i = parseFloat(d) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (Oa(d) || 0))), d !== i) return isNaN(d * i) ? (f || e in t || N(e, i), function _addComplexStringPropTween(t, e, r, i, n, a, s) {
      var o,
          u,
          h,
          l,
          f,
          d,
          c,
          p,
          _ = new ie(this._pt, t, e, 0, 1, Zt, null, n),
          m = 0,
          g = 0;

      for (_.b = r, _.e = i, r += "", (c = ~(i += "").indexOf("random(")) && (i = db(i)), a && (a(p = [r, i], t, e), r = p[0], i = p[1]), u = r.match(it) || []; o = it.exec(i);) {
        l = o[0], f = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1), l !== u[g++] && (d = parseFloat(u[g - 1]) || 0, _._pt = {
          _next: _._pt,
          p: f || 1 === g ? f : ",",
          s: d,
          c: "=" === l.charAt(1) ? parseFloat(l.substr(2)) * ("-" === l.charAt(0) ? -1 : 1) : parseFloat(l) - d,
          m: h && h < 4 ? Math.round : 0
        }, m = it.lastIndex);
      }

      return _.c = m < i.length ? i.substring(m, i.length) : "", _.fp = s, (nt.test(i) || c) && (_.e = 0), this._pt = _;
    }.call(this, t, e, d, i, c, u || Y.stringFilter, h)) : (l = new ie(this._pt, t, e, +d || 0, i - (d || 0), "boolean" == typeof f ? $t : Ht, 0, c), h && (l.fp = h), s && l.modifier(s, this, t), this._pt = l);
  },
      Nt = function _initTween(e, r) {
    var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        d,
        c,
        p,
        m,
        g = e.vars,
        v = g.ease,
        y = g.startAt,
        b = g.immediateRender,
        T = g.lazy,
        w = g.onUpdate,
        x = g.onUpdateParams,
        O = g.callbackScope,
        M = g.runBackwards,
        k = g.yoyoEase,
        C = g.keyframes,
        P = g.autoRevert,
        A = e._dur,
        D = e._startAt,
        S = e._targets,
        z = e.parent,
        I = z && "nested" === z.data ? z.parent._targets : S,
        E = "auto" === e._overwrite && !R,
        L = e.timeline;

    if (!L || C && v || (v = "none"), e._ease = Et(v, B.ease), e._yEase = k ? It(Et(!0 === k ? v : k, B.ease)) : 0, k && e._yoyo && !e._repeat && (k = e._yEase, e._yEase = e._ease, e._ease = k), !L) {
      if (p = (l = S[0] ? _(S[0]).harness : 0) && g[l.prop], i = na(g, ut), D && D.render(-1, !0).kill(), y) {
        if (sa(e._startAt = Vt.set(S, ja({
          data: "isStart",
          overwrite: !1,
          parent: z,
          immediateRender: !0,
          lazy: t(T),
          startAt: null,
          delay: 0,
          onUpdate: w,
          onUpdateParams: x,
          callbackScope: O,
          stagger: 0
        }, y))), b) {
          if (0 < r) P || (e._startAt = 0);else if (A && !(r < 0 && D)) return void (r && (e._zTime = r));
        } else !1 === P && (e._startAt = 0);
      } else if (M && A) if (D) P || (e._startAt = 0);else if (r && (b = !1), a = ja({
        overwrite: !1,
        data: "isFromStart",
        lazy: b && t(T),
        immediateRender: b,
        stagger: 0,
        parent: z
      }, i), p && (a[l.prop] = p), sa(e._startAt = Vt.set(S, a)), b) {
        if (!r) return;
      } else _initTween(e._startAt, j);

      for (e._pt = 0, T = A && t(T) || T && !A, n = 0; n < S.length; n++) {
        if (h = (o = S[n])._gsap || $(S)[n]._gsap, e._ptLookup[n] = d = {}, lt[h.id] && ht.length && fa(), c = I === S ? n : I.indexOf(o), l && !1 !== (f = new l()).init(o, p || i, e, c, I) && (e._pt = s = new ie(e._pt, o, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach(function (t) {
          d[t] = s;
        }), f.priority && (u = 1)), !l || p) for (a in i) {
          ft[a] && (f = Qb(a, i, e, c, o, I)) ? f.priority && (u = 1) : d[a] = s = Yt.call(e, o, a, "get", i[a], c, I, 0, g.stringFilter);
        }
        e._op && e._op[n] && e.kill(o, e._op[n]), E && e._pt && (qt = e, F.killTweensOf(o, d, e.globalTime(0)), m = !e.parent, qt = 0), e._pt && T && (lt[h.id] = 1);
      }

      u && re(e), e._onInit && e._onInit(e);
    }

    e._from = !L && !!g.runBackwards, e._onUpdate = w, e._initted = (!e._op || e._pt) && !m;
  },
      Ut = function _parseFuncOrString(t, e, r, i, n) {
    return p(t) ? t.call(e, r, i, n) : o(t) && ~t.indexOf("random(") ? db(t) : t;
  },
      jt = _t + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
      Xt = (jt + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
      Vt = function (A) {
    function Tween(e, r, i, n) {
      var a;
      "number" == typeof r && (i.duration = r, r = i, i = null);
      var o,
          u,
          h,
          l,
          f,
          d,
          c,
          p,
          _ = (a = A.call(this, n ? r : oa(r), i) || this).vars,
          m = _.duration,
          g = _.delay,
          y = _.immediateRender,
          b = _.stagger,
          T = _.overwrite,
          w = _.keyframes,
          x = _.defaults,
          M = _.scrollTrigger,
          k = _.yoyoEase,
          C = a.parent,
          P = (K(e) || Z(e) ? q(e[0]) : "length" in r) ? [e] : Tt(e);

      if (a._targets = P.length ? $(P) : O("GSAP target " + e + " not found. https://greensock.com", !Y.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = T, w || b || v(m) || v(g)) {
        if (r = a.vars, (o = a.timeline = new Bt({
          data: "nested",
          defaults: x || {}
        })).kill(), o.parent = o._dp = _assertThisInitialized(a), o._start = 0, w) ja(o.vars.defaults, {
          ease: "none"
        }), w.forEach(function (t) {
          return o.to(P, t, ">");
        });else {
          if (l = P.length, c = b ? Va(b) : Q, s(b)) for (f in b) {
            ~jt.indexOf(f) && ((p = p || {})[f] = b[f]);
          }

          for (u = 0; u < l; u++) {
            for (f in h = {}, r) {
              Xt.indexOf(f) < 0 && (h[f] = r[f]);
            }

            h.stagger = 0, k && (h.yoyoEase = k), p && mt(h, p), d = P[u], h.duration = +Ut(m, _assertThisInitialized(a), u, d, P), h.delay = (+Ut(g, _assertThisInitialized(a), u, d, P) || 0) - a._delay, !b && 1 === l && h.delay && (a._delay = g = h.delay, a._start += g, h.delay = 0), o.to(d, h, c(u, d, P));
          }

          o.duration() ? m = g = 0 : a.timeline = 0;
        }
        m || a.duration(m = o.duration());
      } else a.timeline = 0;

      return !0 !== T || R || (qt = _assertThisInitialized(a), F.killTweensOf(P), qt = 0), C && Ba(C, _assertThisInitialized(a)), (y || !m && !w && a._start === ca(C._time) && t(y) && function _hasNoPausedAncestors(t) {
        return !t || t._ts && _hasNoPausedAncestors(t.parent);
      }(_assertThisInitialized(a)) && "nested" !== C.data) && (a._tTime = -j, a.render(Math.max(0, -g))), M && Da(_assertThisInitialized(a), M), a;
    }

    _inheritsLoose(Tween, A);

    var e = Tween.prototype;
    return e.render = function render(t, e, r) {
      var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          d = this._time,
          c = this._tDur,
          p = this._dur,
          _ = c - j < t && 0 <= t ? c : t < j ? 0 : t;

      if (p) {
        if (_ !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
          if (i = _, l = this.timeline, this._repeat) {
            if (s = p + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * s + t, e, r);
            if (i = ca(_ % s), _ === c ? (a = this._repeat, i = p) : ((a = ~~(_ / s)) && a === _ / s && (i = p, a--), p < i && (i = p)), (u = this._yoyo && 1 & a) && (f = this._yEase, i = p - i), o = gt(this._tTime, s), i === d && !r && this._initted) return this;
            a !== o && (l && this._yEase && Eb(l, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1, this.render(ca(s * a), !0).invalidate()._lock = 0));
          }

          if (!this._initted) {
            if (Ea(this, t < 0 ? t : i, r, e)) return this._tTime = 0, this;
            if (p !== this._dur) return this.render(t, e, r);
          }

          for (this._tTime = _, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (f || this._ease)(i / p), this._from && (this.ratio = h = 1 - h), !i || d || e || xt(this, "onStart"), n = this._pt; n;) {
            n.r(h, n.d), n = n._next;
          }

          l && l.render(t < 0 ? t : !i && u ? -j : l._dur * h, e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, r), xt(this, "onUpdate")), this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && xt(this, "onRepeat"), _ !== this._tDur && _ || this._tTime !== _ || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), !t && p || !(_ === this._tDur && 0 < this._ts || !_ && this._ts < 0) || sa(this, 1), e || t < 0 && !d || !_ && !d || (xt(this, _ === c ? "onComplete" : "onReverseComplete", !0), !this._prom || _ < c && 0 < this.timeScale() || this._prom()));
        }
      } else !function _renderZeroDurationTween(t, e, r, i) {
        var n,
            a,
            s,
            o = t.ratio,
            u = e < 0 || !e && (!t._start && function _parentPlayheadIsBeforeStart(t) {
          var e = t.parent;
          return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || _parentPlayheadIsBeforeStart(e));
        }(t) || (t._ts < 0 || t._dp._ts < 0) && "isFromStart" !== t.data && "isStart" !== t.data) ? 0 : 1,
            h = t._rDelay,
            l = 0;

        if (h && t._repeat && (l = yt(0, t._tDur, e), a = gt(l, h), s = gt(t._tTime, h), t._yoyo && 1 & a && (u = 1 - u), a !== s && (o = 1 - u, t.vars.repeatRefresh && t._initted && t.invalidate())), u !== o || i || t._zTime === j || !e && t._zTime) {
          if (!t._initted && Ea(t, e, i, r)) return;

          for (s = t._zTime, t._zTime = e || (r ? j : 0), r = r || e && !s, t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = l, n = t._pt; n;) {
            n.r(u, n.d), n = n._next;
          }

          t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !r && xt(t, "onUpdate"), l && t._repeat && !r && t.parent && xt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === u && (u && sa(t, 1), r || (xt(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
        } else t._zTime || (t._zTime = e);
      }(this, t, e, r);

      return this;
    }, e.targets = function targets() {
      return this._targets;
    }, e.invalidate = function invalidate() {
      return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), A.prototype.invalidate.call(this);
    }, e.kill = function kill(t, e) {
      if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? ib(this) : this;

      if (this.timeline) {
        var r = this.timeline.totalDuration();
        return this.timeline.killTweensOf(t, e, qt && !0 !== qt.vars.overwrite)._first || ib(this), this.parent && r !== this.timeline.totalDuration() && Ia(this, this._dur * this.timeline._tDur / r, 0, 1), this;
      }

      var i,
          n,
          a,
          s,
          u,
          h,
          l,
          f = this._targets,
          d = t ? Tt(t) : f,
          c = this._ptLookup,
          p = this._pt;
      if ((!e || "all" === e) && function _arraysMatch(t, e) {
        for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];) {
          ;
        }

        return r < 0;
      }(f, d)) return "all" === e && (this._pt = 0), ib(this);

      for (i = this._op = this._op || [], "all" !== e && (o(e) && (u = {}, ba(e, function (t) {
        return u[t] = 1;
      }), e = u), e = function _addAliasesToVars(t, e) {
        var r,
            i,
            n,
            a,
            s = t[0] ? _(t[0]).harness : 0,
            o = s && s.aliases;
        if (!o) return e;

        for (i in r = mt({}, e), o) {
          if ((i in r)) for (n = (a = o[i].split(",")).length; n--;) {
            r[a[n]] = r[i];
          }
        }

        return r;
      }(f, e)), l = f.length; l--;) {
        if (~d.indexOf(f[l])) for (u in n = c[l], "all" === e ? (i[l] = e, s = n, a = {}) : (a = i[l] = i[l] || {}, s = e), s) {
          (h = n && n[u]) && ("kill" in h.d && !0 !== h.d.kill(u) || ra(this, h, "_pt"), delete n[u]), "all" !== a && (a[u] = 1);
        }
      }

      return this._initted && !this._pt && p && ib(this), this;
    }, Tween.to = function to(t, e, r) {
      return new Tween(t, e, r);
    }, Tween.from = function from(t, e) {
      return new Tween(t, ea(arguments, 1));
    }, Tween.delayedCall = function delayedCall(t, e, r, i) {
      return new Tween(e, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: t,
        onComplete: e,
        onReverseComplete: e,
        onCompleteParams: r,
        onReverseCompleteParams: r,
        callbackScope: i
      });
    }, Tween.fromTo = function fromTo(t, e, r) {
      return new Tween(t, ea(arguments, 2));
    }, Tween.set = function set(t, e) {
      return e.duration = 0, e.repeatDelay || (e.repeat = 0), new Tween(t, e);
    }, Tween.killTweensOf = function killTweensOf(t, e, r) {
      return F.killTweensOf(t, e, r);
    }, Tween;
  }(Ft);

  ja(Vt.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  }), ba("staggerTo,staggerFrom,staggerFromTo", function (r) {
    Vt[r] = function () {
      var t = new Bt(),
          e = bt.call(arguments, 0);
      return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e);
    };
  });

  function _b(t, e, r) {
    return t.setAttribute(e, r);
  }

  function hc(t, e, r, i) {
    i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
  }

  var Gt = function _setterPlain(t, e, r) {
    return t[e] = r;
  },
      Qt = function _setterFunc(t, e, r) {
    return t[e](r);
  },
      Jt = function _setterFuncWithParam(t, e, r, i) {
    return t[e](i.fp, r);
  },
      Wt = function _getSetter(t, e) {
    return p(t[e]) ? Qt : r(t[e]) && t.setAttribute ? _b : Gt;
  },
      Ht = function _renderPlain(t, e) {
    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);
  },
      $t = function _renderBoolean(t, e) {
    return e.set(e.t, e.p, !!(e.s + e.c * t), e);
  },
      Zt = function _renderComplexString(t, e) {
    var r = e._pt,
        i = "";
    if (!t && e.b) i = e.b;else if (1 === t && e.e) i = e.e;else {
      for (; r;) {
        i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i, r = r._next;
      }

      i += e.c;
    }
    e.set(e.t, e.p, i, e);
  },
      Kt = function _renderPropTweens(t, e) {
    for (var r = e._pt; r;) {
      r.r(t, r.d), r = r._next;
    }
  },
      te = function _addPluginModifier(t, e, r, i) {
    for (var n, a = this._pt; a;) {
      n = a._next, a.p === i && a.modifier(t, e, r), a = n;
    }
  },
      ee = function _killPropTweensOf(t) {
    for (var e, r, i = this._pt; i;) {
      r = i._next, i.p === t && !i.op || i.op === t ? ra(this, i, "_pt") : i.dep || (e = 1), i = r;
    }

    return !e;
  },
      re = function _sortPropTweensByPriority(t) {
    for (var e, r, i, n, a = t._pt; a;) {
      for (e = a._next, r = i; r && r.pr > a.pr;) {
        r = r._next;
      }

      (a._prev = r ? r._prev : n) ? a._prev._next = a : i = a, (a._next = r) ? r._prev = a : n = a, a = e;
    }

    t._pt = i;
  },
      ie = (PropTween.prototype.modifier = function modifier(t, e, r) {
    this.mSet = this.mSet || this.set, this.set = hc, this.m = t, this.mt = r, this.tween = e;
  }, PropTween);

  function PropTween(t, e, r, i, n, a, s, o, u) {
    this.t = e, this.s = i, this.c = n, this.p = r, this.r = a || Ht, this.d = s || this, this.set = o || Gt, this.pr = u || 0, (this._next = t) && (t._prev = this);
  }

  ba(_t + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (t) {
    return ut[t] = 1;
  }), ot.TweenMax = ot.TweenLite = Vt, ot.TimelineLite = ot.TimelineMax = Bt, F = new Bt({
    sortChildren: !1,
    defaults: B,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
  }), Y.stringFilter = tb;
  var ne = {
    registerPlugin: function registerPlugin() {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) {
        e[r] = arguments[r];
      }

      e.forEach(function (t) {
        return function _createPlugin(t) {
          var e = (t = !t.name && t.default || t).name,
              r = p(t),
              i = e && !r && t.init ? function () {
            this._props = [];
          } : t,
              n = {
            init: Q,
            render: Kt,
            add: Yt,
            kill: ee,
            modifier: te,
            rawVars: 0
          },
              a = {
            targetTest: 0,
            get: 0,
            getSetter: Wt,
            aliases: {},
            register: 0
          };

          if (At(), t !== i) {
            if (ft[e]) return;
            ja(i, ja(na(t, n), a)), mt(i.prototype, mt(n, na(t, a))), ft[i.prop = e] = i, t.targetTest && (pt.push(i), ut[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
          }

          P(e, i), t.register && t.register(ae, i, ie);
        }(t);
      });
    },
    timeline: function timeline(t) {
      return new Bt(t);
    },
    getTweensOf: function getTweensOf(t, e) {
      return F.getTweensOf(t, e);
    },
    getProperty: function getProperty(i, t, e, r) {
      o(i) && (i = Tt(i)[0]);

      var n = _(i || {}).get,
          a = e ? ia : ha;

      return "native" === e && (e = ""), i ? t ? a((ft[t] && ft[t].get || n)(i, t, e, r)) : function (t, e, r) {
        return a((ft[t] && ft[t].get || n)(i, t, e, r));
      } : i;
    },
    quickSetter: function quickSetter(r, e, i) {
      if (1 < (r = Tt(r)).length) {
        var n = r.map(function (t) {
          return ae.quickSetter(t, e, i);
        }),
            a = n.length;
        return function (t) {
          for (var e = a; e--;) {
            n[e](t);
          }
        };
      }

      r = r[0] || {};

      var s = ft[e],
          o = _(r),
          u = o.harness && (o.harness.aliases || {})[e] || e,
          h = s ? function (t) {
        var e = new s();
        d._pt = 0, e.init(r, i ? t + i : t, d, 0, [r]), e.render(1, e), d._pt && Kt(1, d);
      } : o.set(r, u);

      return s ? h : function (t) {
        return h(r, u, i ? t + i : t, o, 1);
      };
    },
    isTweening: function isTweening(t) {
      return 0 < F.getTweensOf(t, !0).length;
    },
    defaults: function defaults(t) {
      return t && t.ease && (t.ease = Et(t.ease, B.ease)), ma(B, t || {});
    },
    config: function config(t) {
      return ma(Y, t || {});
    },
    registerEffect: function registerEffect(t) {
      var i = t.name,
          n = t.effect,
          e = t.plugins,
          a = t.defaults,
          r = t.extendTimeline;
      (e || "").split(",").forEach(function (t) {
        return t && !ft[t] && !ot[t] && O(i + " effect requires " + t + " plugin.");
      }), dt[i] = function (t, e, r) {
        return n(Tt(t), ja(e || {}, a), r);
      }, r && (Bt.prototype[i] = function (t, e, r) {
        return this.add(dt[i](t, s(e) ? e : (r = e) && {}, this), r);
      });
    },
    registerEase: function registerEase(t, e) {
      Dt[t] = Et(e);
    },
    parseEase: function parseEase(t, e) {
      return arguments.length ? Et(t, e) : Dt;
    },
    getById: function getById(t) {
      return F.getById(t);
    },
    exportRoot: function exportRoot(e, r) {
      void 0 === e && (e = {});
      var i,
          n,
          a = new Bt(e);

      for (a.smoothChildTiming = t(e.smoothChildTiming), F.remove(a), a._dp = 0, a._time = a._tTime = F._time, i = F._first; i;) {
        n = i._next, !r && !i._dur && i instanceof Vt && i.vars.onComplete === i._targets[0] || Ca(a, i, i._start - i._delay), i = n;
      }

      return Ca(F, a, 0), a;
    },
    utils: {
      wrap: function wrap(e, t, r) {
        var i = t - e;
        return K(e) ? ab(e, wrap(0, e.length), t) : Ma(r, function (t) {
          return (i + (t - e) % i) % i + e;
        });
      },
      wrapYoyo: function wrapYoyo(e, t, r) {
        var i = t - e,
            n = 2 * i;
        return K(e) ? ab(e, wrapYoyo(0, e.length - 1), t) : Ma(r, function (t) {
          return e + (i < (t = (n + (t - e) % n) % n || 0) ? n - t : t);
        });
      },
      distribute: Va,
      random: Ya,
      snap: Xa,
      normalize: function normalize(t, e, r) {
        return wt(t, e, 0, 1, r);
      },
      getUnit: Oa,
      clamp: function clamp(e, r, t) {
        return Ma(t, function (t) {
          return yt(e, r, t);
        });
      },
      splitColor: ob,
      toArray: Tt,
      mapRange: wt,
      pipe: function pipe() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) {
          e[r] = arguments[r];
        }

        return function (t) {
          return e.reduce(function (t, e) {
            return e(t);
          }, t);
        };
      },
      unitize: function unitize(e, r) {
        return function (t) {
          return e(parseFloat(t)) + (r || Oa(t));
        };
      },
      interpolate: function interpolate(e, r, t, i) {
        var n = isNaN(e + r) ? 0 : function (t) {
          return (1 - t) * e + t * r;
        };

        if (!n) {
          var a,
              s,
              u,
              h,
              l,
              f = o(e),
              d = {};
          if (!0 === t && (i = 1) && (t = null), f) e = {
            p: e
          }, r = {
            p: r
          };else if (K(e) && !K(r)) {
            for (u = [], h = e.length, l = h - 2, s = 1; s < h; s++) {
              u.push(interpolate(e[s - 1], e[s]));
            }

            h--, n = function func(t) {
              t *= h;
              var e = Math.min(l, ~~t);
              return u[e](t - e);
            }, t = r;
          } else i || (e = mt(K(e) ? [] : {}, e));

          if (!u) {
            for (a in r) {
              Yt.call(d, e, a, "get", r[a]);
            }

            n = function func(t) {
              return Kt(t, d) || (f ? e.p : e);
            };
          }
        }

        return Ma(t, n);
      },
      shuffle: Ua
    },
    install: M,
    effects: dt,
    ticker: Pt,
    updateRoot: Bt.updateRoot,
    plugins: ft,
    globalTimeline: F,
    core: {
      PropTween: ie,
      globals: P,
      Tween: Vt,
      Timeline: Bt,
      Animation: Ft,
      getCache: _,
      _removeLinkedListItem: ra,
      suppressOverwrites: function suppressOverwrites(t) {
        return R = t;
      }
    }
  };
  ba("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return ne[t] = Vt[t];
  }), Pt.add(Bt.updateRoot), d = ne.to({}, {
    duration: 0
  });

  function lc(t, e) {
    for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) {
      r = r._next;
    }

    return r;
  }

  function nc(t, n) {
    return {
      name: t,
      rawVars: 1,
      init: function init(t, i, e) {
        e._onInit = function (t) {
          var e, r;

          if (o(i) && (e = {}, ba(i, function (t) {
            return e[t] = 1;
          }), i = e), n) {
            for (r in e = {}, i) {
              e[r] = n(i[r]);
            }

            i = e;
          }

          !function _addModifiers(t, e) {
            var r,
                i,
                n,
                a = t._targets;

            for (r in e) {
              for (i = a.length; i--;) {
                (n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = lc(n, r)), n && n.modifier && n.modifier(e[r], t, a[i], r));
              }
            }
          }(t, i);
        };
      }
    };
  }

  var ae = ne.registerPlugin({
    name: "attr",
    init: function init(t, e, r, i, n) {
      var a, s;

      for (a in e) {
        (s = this.add(t, "setAttribute", (t.getAttribute(a) || 0) + "", e[a], i, n, 0, 0, a)) && (s.op = a), this._props.push(a);
      }
    }
  }, {
    name: "endArray",
    init: function init(t, e) {
      for (var r = e.length; r--;) {
        this.add(t, r, t[r] || 0, e[r]);
      }
    }
  }, nc("roundProps", Wa), nc("modifiers"), nc("snap", Xa)) || ne;
  Vt.version = Bt.version = ae.version = "3.6.1", l = 1, u() && At();

  function Yc(t, e) {
    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  }

  function Zc(t, e) {
    return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  }

  function $c(t, e) {
    return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e);
  }

  function _c(t, e) {
    var r = e.s + e.c * t;
    e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e);
  }

  function ad(t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  }

  function bd(t, e) {
    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
  }

  function cd(t, e, r) {
    return t.style[e] = r;
  }

  function dd(t, e, r) {
    return t.style.setProperty(e, r);
  }

  function ed(t, e, r) {
    return t._gsap[e] = r;
  }

  function fd(t, e, r) {
    return t._gsap.scaleX = t._gsap.scaleY = r;
  }

  function gd(t, e, r, i, n) {
    var a = t._gsap;
    a.scaleX = a.scaleY = r, a.renderTransform(n, a);
  }

  function hd(t, e, r, i, n) {
    var a = t._gsap;
    a[e] = r, a.renderTransform(n, a);
  }

  function ld(t, e) {
    var r = oe.createElementNS ? oe.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : oe.createElement(t);
    return r.style ? r : oe.createElement(t);
  }

  function md(t, e, r) {
    var i = getComputedStyle(t);
    return i[e] || i.getPropertyValue(e.replace(Le, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && md(t, Ue(e) || e, 1) || "";
  }

  function pd() {
    (function _windowExists() {
      return "undefined" != typeof window;
    })() && window.document && (se = window, oe = se.document, ue = oe.documentElement, le = ld("div") || {
      style: {}
    }, ld("div"), qe = Ue(qe), Ye = qe + "Origin", le.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", de = !!Ue("perspective"), he = 1);
  }

  function qd(t) {
    var e,
        r = ld("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
        i = this.parentNode,
        n = this.nextSibling,
        a = this.style.cssText;
    if (ue.appendChild(r), r.appendChild(this), this.style.display = "block", t) try {
      e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = qd;
    } catch (t) {} else this._gsapBBox && (e = this._gsapBBox());
    return i && (n ? i.insertBefore(this, n) : i.appendChild(this)), ue.removeChild(r), this.style.cssText = a, e;
  }

  function rd(t, e) {
    for (var r = e.length; r--;) {
      if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
    }
  }

  function sd(e) {
    var r;

    try {
      r = e.getBBox();
    } catch (t) {
      r = qd.call(e, !0);
    }

    return r && (r.width || r.height) || e.getBBox === qd || (r = qd.call(e, !0)), !r || r.width || r.x || r.y ? r : {
      x: +rd(e, ["x", "cx", "x1"]) || 0,
      y: +rd(e, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    };
  }

  function td(t) {
    return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !sd(t));
  }

  function ud(t, e) {
    if (e) {
      var r = t.style;
      e in Se && e !== Ye && (e = qe), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty(e.replace(Le, "-$1").toLowerCase())) : r.removeAttribute(e);
    }
  }

  function vd(t, e, r, i, n, a) {
    var s = new ie(t._pt, e, r, 0, 1, a ? bd : ad);
    return (t._pt = s).b = i, s.e = n, t._props.push(r), s;
  }

  function xd(t, e, r, i) {
    var n,
        a,
        s,
        o,
        u = parseFloat(r) || 0,
        h = (r + "").trim().substr((u + "").length) || "px",
        l = le.style,
        f = Re.test(e),
        d = "svg" === t.tagName.toLowerCase(),
        c = (d ? "client" : "offset") + (f ? "Width" : "Height"),
        p = "px" === i,
        m = "%" === i;
    return i === h || !u || je[i] || je[h] ? u : ("px" === h || p || (u = xd(t, e, r, "px")), o = t.getCTM && td(t), !m && "%" !== h || !Se[e] && !~e.indexOf("adius") ? (l[f ? "width" : "height"] = 100 + (p ? h : i), a = ~e.indexOf("adius") || "em" === i && t.appendChild && !d ? t : t.parentNode, o && (a = (t.ownerSVGElement || {}).parentNode), a && a !== oe && a.appendChild || (a = oe.body), (s = a._gsap) && m && s.width && f && s.time === Pt.time ? ca(u / s.width * 100) : (!m && "%" !== h || (l.position = md(t, "position")), a === t && (l.position = "static"), a.appendChild(le), n = le[c], a.removeChild(le), l.position = "absolute", f && m && ((s = _(a)).time = Pt.time, s.width = a[c]), ca(p ? n * u / 100 : n && u ? 100 / n * u : 0))) : (n = o ? t.getBBox()[f ? "width" : "height"] : t[c], ca(m ? u / n * 100 : u / 100 * n)));
  }

  function yd(t, e, r, i) {
    var n;
    return he || pd(), e in Be && "transform" !== e && ~(e = Be[e]).indexOf(",") && (e = e.split(",")[0]), Se[e] && "transform" !== e ? (n = Je(t, i), n = "transformOrigin" !== e ? n[e] : We(md(t, Ye)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = Ve[e] && Ve[e](t, e, r) || md(t, e) || aa(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").trim().indexOf(" ") ? xd(t, e, n, r) + r : n;
  }

  function zd(t, e, r, i) {
    if (!r || "none" === r) {
      var n = Ue(e, t, 1),
          a = n && md(t, n, 1);
      a && a !== r ? (e = n, r = a) : "borderColor" === e && (r = md(t, "borderTopColor"));
    }

    var s,
        o,
        u,
        h,
        l,
        f,
        d,
        c,
        p,
        _,
        m,
        g,
        v = new ie(this._pt, t.style, e, 0, 1, Zt),
        y = 0,
        b = 0;

    if (v.b = r, v.e = i, r += "", "auto" === (i += "") && (t.style[e] = i, i = md(t, e) || i, t.style[e] = r), tb(s = [r, i]), i = s[1], u = (r = s[0]).match(rt) || [], (i.match(rt) || []).length) {
      for (; o = rt.exec(i);) {
        d = o[0], p = i.substring(y, o.index), l ? l = (l + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (l = 1), d !== (f = u[b++] || "") && (h = parseFloat(f) || 0, m = f.substr((h + "").length), (g = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) && (d = d.substr(2)), c = parseFloat(d), _ = d.substr((c + "").length), y = rt.lastIndex - _.length, _ || (_ = _ || Y.units[e] || m, y === i.length && (i += _, v.e += _)), m !== _ && (h = xd(t, e, f, _) || 0), v._pt = {
          _next: v._pt,
          p: p || 1 === b ? p : ",",
          s: h,
          c: g ? g * c : c - h,
          m: l && l < 4 || "zIndex" === e ? Math.round : 0
        });
      }

      v.c = y < i.length ? i.substring(y, i.length) : "";
    } else v.r = "display" === e && "none" === i ? bd : ad;

    return nt.test(i) && (v.e = 0), this._pt = v;
  }

  function Bd(t) {
    var e = t.split(" "),
        r = e[0],
        i = e[1] || "50%";
    return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r, r = i, i = t), e[0] = Xe[r] || r, e[1] = Xe[i] || i, e.join(" ");
  }

  function Cd(t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var r,
          i,
          n,
          a = e.t,
          s = a.style,
          o = e.u,
          u = a._gsap;
      if ("all" === o || !0 === o) s.cssText = "", i = 1;else for (n = (o = o.split(",")).length; -1 < --n;) {
        r = o[n], Se[r] && (i = 1, r = "transformOrigin" === r ? Ye : qe), ud(a, r);
      }
      i && (ud(a, qe), u && (u.svg && a.removeAttribute("transform"), Je(a, 1), u.uncache = 1));
    }
  }

  function Gd(t) {
    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
  }

  function Hd(t) {
    var e = md(t, qe);
    return Gd(e) ? Ge : e.substr(7).match(et).map(ca);
  }

  function Id(t, e) {
    var r,
        i,
        n,
        a,
        s = t._gsap || _(t),
        o = t.style,
        u = Hd(t);

    return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? Ge : u : (u !== Ge || t.offsetParent || t === ue || s.svg || (n = o.display, o.display = "block", (r = t.parentNode) && t.offsetParent || (a = 1, i = t.nextSibling, ue.appendChild(t)), u = Hd(t), n ? o.display = n : ud(t, "display"), a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : ue.removeChild(t))), e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
  }

  function Jd(t, e, r, i, n, a) {
    var s,
        o,
        u,
        h = t._gsap,
        l = n || Id(t, !0),
        f = h.xOrigin || 0,
        d = h.yOrigin || 0,
        c = h.xOffset || 0,
        p = h.yOffset || 0,
        _ = l[0],
        m = l[1],
        g = l[2],
        v = l[3],
        y = l[4],
        b = l[5],
        T = e.split(" "),
        w = parseFloat(T[0]) || 0,
        x = parseFloat(T[1]) || 0;
    r ? l !== Ge && (o = _ * v - m * g) && (u = w * (-m / o) + x * (_ / o) - (_ * b - m * y) / o, w = w * (v / o) + x * (-g / o) + (g * b - v * y) / o, x = u) : (w = (s = sd(t)).x + (~T[0].indexOf("%") ? w / 100 * s.width : w), x = s.y + (~(T[1] || T[0]).indexOf("%") ? x / 100 * s.height : x)), i || !1 !== i && h.smooth ? (y = w - f, b = x - d, h.xOffset = c + (y * _ + b * g) - y, h.yOffset = p + (y * m + b * v) - b) : h.xOffset = h.yOffset = 0, h.xOrigin = w, h.yOrigin = x, h.smooth = !!i, h.origin = e, h.originIsAbsolute = !!r, t.style[Ye] = "0px 0px", a && (vd(a, h, "xOrigin", f, w), vd(a, h, "yOrigin", d, x), vd(a, h, "xOffset", c, h.xOffset), vd(a, h, "yOffset", p, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + x);
  }

  function Md(t, e, r) {
    var i = Oa(e);
    return ca(parseFloat(e) + parseFloat(xd(t, "x", r + "px", i))) + i;
  }

  function Td(t, e, r, i, n, a) {
    var s,
        u,
        h = 360,
        l = o(n),
        f = parseFloat(n) * (l && ~n.indexOf("rad") ? ze : 1),
        d = a ? f * a : f - i,
        c = i + d + "deg";
    return l && ("short" === (s = n.split("_")[1]) && (d %= h) !== d % 180 && (d += d < 0 ? h : -h), "cw" === s && d < 0 ? d = (d + 36e9) % h - ~~(d / h) * h : "ccw" === s && 0 < d && (d = (d - 36e9) % h - ~~(d / h) * h)), t._pt = u = new ie(t._pt, e, r, i, d, Zc), u.e = c, u.u = "deg", t._props.push(r), u;
  }

  function Ud(t, e) {
    for (var r in e) {
      t[r] = e[r];
    }

    return t;
  }

  function Vd(t, e, r) {
    var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l = Ud({}, r._gsap),
        f = r.style;

    for (n in l.svg ? (a = r.getAttribute("transform"), r.setAttribute("transform", ""), f[qe] = e, i = Je(r, 1), ud(r, qe), r.setAttribute("transform", a)) : (a = getComputedStyle(r)[qe], f[qe] = e, i = Je(r, 1), f[qe] = a), Se) {
      (a = l[n]) !== (s = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Oa(a) !== (h = Oa(s)) ? xd(r, n, a, h) : parseFloat(a), u = parseFloat(s), t._pt = new ie(t._pt, i, n, o, u - o, Yc), t._pt.u = h || 0, t._props.push(n));
    }

    Ud(i, l);
  }

  var se,
      oe,
      ue,
      he,
      le,
      fe,
      de,
      ce = Dt.Power0,
      pe = Dt.Power1,
      _e = Dt.Power2,
      me = Dt.Power3,
      ge = Dt.Power4,
      ve = Dt.Linear,
      ye = Dt.Quad,
      be = Dt.Cubic,
      Te = Dt.Quart,
      we = Dt.Quint,
      xe = Dt.Strong,
      Oe = Dt.Elastic,
      Me = Dt.Back,
      ke = Dt.SteppedEase,
      Ce = Dt.Bounce,
      Pe = Dt.Sine,
      Ae = Dt.Expo,
      De = Dt.Circ,
      Se = {},
      ze = 180 / Math.PI,
      Ie = Math.PI / 180,
      Ee = Math.atan2,
      Le = /([A-Z])/g,
      Re = /(?:left|right|width|margin|padding|x)/i,
      Fe = /[\s,\(]\S/,
      Be = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  },
      qe = "transform",
      Ye = qe + "Origin",
      Ne = "O,Moz,ms,Ms,Webkit".split(","),
      Ue = function _checkPropPrefix(t, e, r) {
    var i = (e || le).style,
        n = 5;
    if (t in i && !r) return t;

    for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(Ne[n] + t in i);) {
      ;
    }

    return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? Ne[n] : "") + t;
  },
      je = {
    deg: 1,
    rad: 1,
    turn: 1
  },
      Xe = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  },
      Ve = {
    clearProps: function clearProps(t, e, r, i, n) {
      if ("isFromStart" !== n.data) {
        var a = t._pt = new ie(t._pt, e, r, 0, 0, Cd);
        return a.u = i, a.pr = -10, a.tween = n, t._props.push(r), 1;
      }
    }
  },
      Ge = [1, 0, 0, 1, 0, 0],
      Qe = {},
      Je = function _parseTransform(t, e) {
    var r = t._gsap || new Rt(t);
    if ("x" in r && !e && !r.uncache) return r;

    var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        d,
        c,
        p,
        _,
        m,
        g,
        v,
        y,
        b,
        T,
        w,
        x,
        O,
        M,
        k,
        C,
        P,
        A,
        D,
        S,
        z,
        I,
        E,
        L = t.style,
        R = r.scaleX < 0,
        F = "deg",
        B = md(t, Ye) || "0";

    return i = n = a = u = h = l = f = d = c = 0, s = o = 1, r.svg = !(!t.getCTM || !td(t)), m = Id(t, r.svg), r.svg && (k = !r.uncache && !e && t.getAttribute("data-svg-origin"), Jd(t, k || B, !!k || r.originIsAbsolute, !1 !== r.smooth, m)), p = r.xOrigin || 0, _ = r.yOrigin || 0, m !== Ge && (b = m[0], T = m[1], w = m[2], x = m[3], i = O = m[4], n = M = m[5], 6 === m.length ? (s = Math.sqrt(b * b + T * T), o = Math.sqrt(x * x + w * w), u = b || T ? Ee(T, b) * ze : 0, (f = w || x ? Ee(w, x) * ze + u : 0) && (o *= Math.abs(Math.cos(f * Ie))), r.svg && (i -= p - (p * b + _ * w), n -= _ - (p * T + _ * x))) : (E = m[6], z = m[7], A = m[8], D = m[9], S = m[10], I = m[11], i = m[12], n = m[13], a = m[14], h = (g = Ee(E, S)) * ze, g && (k = O * (v = Math.cos(-g)) + A * (y = Math.sin(-g)), C = M * v + D * y, P = E * v + S * y, A = O * -y + A * v, D = M * -y + D * v, S = E * -y + S * v, I = z * -y + I * v, O = k, M = C, E = P), l = (g = Ee(-w, S)) * ze, g && (v = Math.cos(-g), I = x * (y = Math.sin(-g)) + I * v, b = k = b * v - A * y, T = C = T * v - D * y, w = P = w * v - S * y), u = (g = Ee(T, b)) * ze, g && (k = b * (v = Math.cos(g)) + T * (y = Math.sin(g)), C = O * v + M * y, T = T * v - b * y, M = M * v - O * y, b = k, O = C), h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0, l = 180 - l), s = ca(Math.sqrt(b * b + T * T + w * w)), o = ca(Math.sqrt(M * M + E * E)), g = Ee(O, M), f = 2e-4 < Math.abs(g) ? g * ze : 0, c = I ? 1 / (I < 0 ? -I : I) : 0), r.svg && (k = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !Gd(md(t, qe)), k && t.setAttribute("transform", k))), 90 < Math.abs(f) && Math.abs(f) < 270 && (R ? (s *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), r.x = i - ((r.xPercent = i && (r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + "px", r.y = n - ((r.yPercent = n && (r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + "px", r.z = a + "px", r.scaleX = ca(s), r.scaleY = ca(o), r.rotation = ca(u) + F, r.rotationX = ca(h) + F, r.rotationY = ca(l) + F, r.skewX = f + F, r.skewY = d + F, r.transformPerspective = c + "px", (r.zOrigin = parseFloat(B.split(" ")[2]) || 0) && (L[Ye] = We(B)), r.xOffset = r.yOffset = 0, r.force3D = Y.force3D, r.renderTransform = r.svg ? er : de ? tr : He, r.uncache = 0, r;
  },
      We = function _firstTwoOnly(t) {
    return (t = t.split(" "))[0] + " " + t[1];
  },
      He = function _renderNon3DTransforms(t, e) {
    e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, tr(t, e);
  },
      $e = "0deg",
      Ze = "0px",
      Ke = ") ",
      tr = function _renderCSSTransforms(t, e) {
    var r = e || this,
        i = r.xPercent,
        n = r.yPercent,
        a = r.x,
        s = r.y,
        o = r.z,
        u = r.rotation,
        h = r.rotationY,
        l = r.rotationX,
        f = r.skewX,
        d = r.skewY,
        c = r.scaleX,
        p = r.scaleY,
        _ = r.transformPerspective,
        m = r.force3D,
        g = r.target,
        v = r.zOrigin,
        y = "",
        b = "auto" === m && t && 1 !== t || !0 === m;

    if (v && (l !== $e || h !== $e)) {
      var T,
          w = parseFloat(h) * Ie,
          x = Math.sin(w),
          O = Math.cos(w);
      w = parseFloat(l) * Ie, T = Math.cos(w), a = Md(g, a, x * T * -v), s = Md(g, s, -Math.sin(w) * -v), o = Md(g, o, O * T * -v + v);
    }

    _ !== Ze && (y += "perspective(" + _ + Ke), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), !b && a === Ze && s === Ze && o === Ze || (y += o !== Ze || b ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + Ke), u !== $e && (y += "rotate(" + u + Ke), h !== $e && (y += "rotateY(" + h + Ke), l !== $e && (y += "rotateX(" + l + Ke), f === $e && d === $e || (y += "skew(" + f + ", " + d + Ke), 1 === c && 1 === p || (y += "scale(" + c + ", " + p + Ke), g.style[qe] = y || "translate(0, 0)";
  },
      er = function _renderSVGTransforms(t, e) {
    var r,
        i,
        n,
        a,
        s,
        o = e || this,
        u = o.xPercent,
        h = o.yPercent,
        l = o.x,
        f = o.y,
        d = o.rotation,
        c = o.skewX,
        p = o.skewY,
        _ = o.scaleX,
        m = o.scaleY,
        g = o.target,
        v = o.xOrigin,
        y = o.yOrigin,
        b = o.xOffset,
        T = o.yOffset,
        w = o.forceCSS,
        x = parseFloat(l),
        O = parseFloat(f);
    d = parseFloat(d), c = parseFloat(c), (p = parseFloat(p)) && (c += p = parseFloat(p), d += p), d || c ? (d *= Ie, c *= Ie, r = Math.cos(d) * _, i = Math.sin(d) * _, n = Math.sin(d - c) * -m, a = Math.cos(d - c) * m, c && (p *= Ie, s = Math.tan(c - p), n *= s = Math.sqrt(1 + s * s), a *= s, p && (s = Math.tan(p), r *= s = Math.sqrt(1 + s * s), i *= s)), r = ca(r), i = ca(i), n = ca(n), a = ca(a)) : (r = _, a = m, i = n = 0), (x && !~(l + "").indexOf("px") || O && !~(f + "").indexOf("px")) && (x = xd(g, "x", l, "px"), O = xd(g, "y", f, "px")), (v || y || b || T) && (x = ca(x + v - (v * r + y * n) + b), O = ca(O + y - (v * i + y * a) + T)), (u || h) && (s = g.getBBox(), x = ca(x + u / 100 * s.width), O = ca(O + h / 100 * s.height)), s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + O + ")", g.setAttribute("transform", s), w && (g.style[qe] = s);
  };

  ba("padding,margin,Width,Radius", function (e, r) {
    var t = "Right",
        i = "Bottom",
        n = "Left",
        o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function (t) {
      return r < 2 ? e + t : "border" + t + e;
    });

    Ve[1 < r ? "border" + e : e] = function (e, t, r, i, n) {
      var a, s;
      if (arguments.length < 4) return a = o.map(function (t) {
        return yd(e, t, r);
      }), 5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;
      a = (i + "").split(" "), s = {}, o.forEach(function (t, e) {
        return s[t] = a[e] = a[e] || a[(e - 1) / 2 | 0];
      }), e.init(t, s, n);
    };
  });
  var rr,
      ir,
      nr,
      ar = {
    name: "css",
    register: pd,
    targetTest: function targetTest(t) {
      return t.style && t.nodeType;
    },
    init: function init(t, e, r, i, n) {
      var a,
          s,
          o,
          u,
          h,
          l,
          f,
          d,
          c,
          p,
          _,
          m,
          g,
          v,
          y,
          b = this._props,
          T = t.style,
          w = r.vars.startAt;

      for (f in he || pd(), e) {
        if ("autoRound" !== f && (s = e[f], !ft[f] || !Qb(f, e, r, i, t, n))) if (h = _typeof(s), l = Ve[f], "function" === h && (h = _typeof(s = s.call(r, i, t, n))), "string" === h && ~s.indexOf("random(") && (s = db(s)), l) l(this, t, f, s, r) && (y = 1);else if ("--" === f.substr(0, 2)) a = (getComputedStyle(t).getPropertyValue(f) + "").trim(), s += "", kt.lastIndex = 0, kt.test(a) || (d = Oa(a), c = Oa(s)), c ? d !== c && (a = xd(t, f, a, c) + c) : d && (s += d), this.add(T, "setProperty", a, s, i, n, 0, 0, f);else if ("undefined" !== h) {
          if (w && f in w ? (a = "function" == typeof w[f] ? w[f].call(r, i, t, n) : w[f], f in Y.units && !Oa(a) && (a += Y.units[f]), "=" === (a + "").charAt(1) && (a = yd(t, f))) : a = yd(t, f), u = parseFloat(a), (p = "string" === h && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)), o = parseFloat(s), f in Be && ("autoAlpha" === f && (1 === u && "hidden" === yd(t, "visibility") && o && (u = 0), vd(this, T, "visibility", u ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== f && "transform" !== f && ~(f = Be[f]).indexOf(",") && (f = f.split(",")[0])), _ = f in Se) {
            if (m || ((g = t._gsap).renderTransform && !e.parseTransform || Je(t, e.parseTransform), v = !1 !== e.smoothOrigin && g.smooth, (m = this._pt = new ie(this._pt, T, qe, 0, 1, g.renderTransform, g, 0, -1)).dep = 1), "scale" === f) this._pt = new ie(this._pt, g, "scaleY", g.scaleY, p ? p * o : o - g.scaleY), b.push("scaleY", f), f += "X";else {
              if ("transformOrigin" === f) {
                s = Bd(s), g.svg ? Jd(t, s, 0, v, 0, this) : ((c = parseFloat(s.split(" ")[2]) || 0) !== g.zOrigin && vd(this, g, "zOrigin", g.zOrigin, c), vd(this, T, f, We(a), We(s)));
                continue;
              }

              if ("svgOrigin" === f) {
                Jd(t, s, 1, v, 0, this);
                continue;
              }

              if (f in Qe) {
                Td(this, g, f, u, s, p);
                continue;
              }

              if ("smoothOrigin" === f) {
                vd(this, g, "smooth", g.smooth, s);
                continue;
              }

              if ("force3D" === f) {
                g[f] = s;
                continue;
              }

              if ("transform" === f) {
                Vd(this, s, t);
                continue;
              }
            }
          } else f in T || (f = Ue(f) || f);
          if (_ || (o || 0 === o) && (u || 0 === u) && !Fe.test(s) && f in T) o = o || 0, (d = (a + "").substr((u + "").length)) !== (c = Oa(s) || (f in Y.units ? Y.units[f] : d)) && (u = xd(t, f, a, c)), this._pt = new ie(this._pt, _ ? g : T, f, u, p ? p * o : o - u, _ || "px" !== c && "zIndex" !== f || !1 === e.autoRound ? Yc : _c), this._pt.u = c || 0, d !== c && (this._pt.b = a, this._pt.r = $c);else if (f in T) zd.call(this, t, f, a, s);else {
            if (!(f in t)) {
              N(f, s);
              continue;
            }

            this.add(t, f, t[f], s, i, n);
          }
          b.push(f);
        }
      }

      y && re(this);
    },
    get: yd,
    aliases: Be,
    getSetter: function getSetter(t, e, i) {
      var n = Be[e];
      return n && n.indexOf(",") < 0 && (e = n), e in Se && e !== Ye && (t._gsap.x || yd(t, "x")) ? i && fe === i ? "scale" === e ? fd : ed : (fe = i || {}) && ("scale" === e ? gd : hd) : t.style && !r(t.style[e]) ? cd : ~e.indexOf("-") ? dd : Wt(t, e);
    },
    core: {
      _removeProperty: ud,
      _getMatrix: Id
    }
  };
  ae.utils.checkPrefix = Ue, nr = ba((rr = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (ir = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (t) {
    Se[t] = 1;
  }), ba(ir, function (t) {
    Y.units[t] = "deg", Qe[t] = 1;
  }), Be[nr[13]] = rr + "," + ir, ba("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (t) {
    var e = t.split(":");
    Be[e[1]] = nr[e[0]];
  }), ba("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
    Y.units[t] = "px";
  }), ae.registerPlugin(ar);
  var sr = ae.registerPlugin(ar) || ae,
      or = sr.core.Tween;
  e.Back = Me, e.Bounce = Ce, e.CSSPlugin = ar, e.Circ = De, e.Cubic = be, e.Elastic = Oe, e.Expo = Ae, e.Linear = ve, e.Power0 = ce, e.Power1 = pe, e.Power2 = _e, e.Power3 = me, e.Power4 = ge, e.Quad = ye, e.Quart = Te, e.Quint = we, e.Sine = Pe, e.SteppedEase = ke, e.Strong = xe, e.TimelineLite = Bt, e.TimelineMax = Bt, e.TweenLite = Vt, e.TweenMax = or, e.default = sr, e.gsap = sr;

  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
  } else {
    delete e.default;
  }
});
},{}],"js/vendors/ScrollTrigger.min.js":[function(require,module,exports) {
var define;
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * ScrollTrigger 3.6.1
 * https://greensock.com
 * 
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {});
}(this, function (e) {
  "use strict";

  function J(e) {
    return e;
  }

  function K(e) {
    return Math.round(1e5 * e) / 1e5 || 0;
  }

  function L() {
    return "undefined" != typeof window;
  }

  function M() {
    return Se || L() && (Se = window.gsap) && Se.registerPlugin && Se;
  }

  function N(e) {
    return !!~o.indexOf(e);
  }

  function O(e, t) {
    return ~Fe.indexOf(e) && Fe[Fe.indexOf(e) + 1][t];
  }

  function P(t, e) {
    var r = e.s,
        n = e.sc,
        o = h.indexOf(t),
        i = n === ot.sc ? 1 : 2;
    return ~o || (o = h.push(t) - 1), h[o + i] || (h[o + i] = O(t, r) || (N(t) ? n : function (e) {
      return arguments.length ? t[r] = e : t[r];
    }));
  }

  function Q(e) {
    return O(e, "getBoundingClientRect") || (N(e) ? function () {
      return pt.width = Me.innerWidth, pt.height = Me.innerHeight, pt;
    } : function () {
      return it(e);
    });
  }

  function T(e, t) {
    var r = t.s,
        n = t.d2,
        o = t.d,
        i = t.a;
    return (r = "scroll" + n) && (i = O(e, r)) ? i() - Q(e)()[o] : N(e) ? Math.max(ke[r], Pe[r]) - (Me["inner" + n] || ke["client" + n] || Pe["client" + n]) : e[r] - e["offset" + n];
  }

  function U(e, t) {
    for (var r = 0; r < d.length; r += 3) {
      t && !~t.indexOf(d[r + 1]) || e(d[r], d[r + 1], d[r + 2]);
    }
  }

  function V(e) {
    return "string" == typeof e;
  }

  function W(e) {
    return "function" == typeof e;
  }

  function X(e) {
    return "number" == typeof e;
  }

  function Y(e) {
    return "object" == _typeof(e);
  }

  function Z(e) {
    return W(e) && e();
  }

  function $(r, n) {
    return function () {
      var e = Z(r),
          t = Z(n);
      return function () {
        Z(e), Z(t);
      };
    };
  }

  function ta(e) {
    return Me.getComputedStyle(e);
  }

  function va(e, t) {
    for (var r in t) {
      r in e || (e[r] = t[r]);
    }

    return e;
  }

  function xa(e, t) {
    var r = t.d2;
    return e["offset" + r] || e["client" + r] || 0;
  }

  function ya(e) {
    var t,
        r = [],
        n = e.labels,
        o = e.duration();

    for (t in n) {
      r.push(n[t] / o);
    }

    return r;
  }

  function Ba(t, r, e, n) {
    return e.split(",").forEach(function (e) {
      return t(r, e, n);
    });
  }

  function Ca(e, t, r) {
    return e.addEventListener(t, r, {
      passive: !0
    });
  }

  function Da(e, t, r) {
    return e.removeEventListener(t, r);
  }

  function Ha(e, t) {
    if (V(e)) {
      var r = e.indexOf("="),
          n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
      ~r && (e.indexOf("%") > r && (n *= t / 100), e = e.substr(0, r - 1)), e = n + (e in w ? w[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0);
    }

    return e;
  }

  function Ia(e, t, r, n, o, i, a) {
    var s = o.startColor,
        l = o.endColor,
        c = o.fontSize,
        f = o.indent,
        u = o.fontWeight,
        p = _e.createElement("div"),
        d = N(r) || "fixed" === O(r, "pinType"),
        g = -1 !== e.indexOf("scroller"),
        h = d ? Pe : r,
        v = -1 !== e.indexOf("start"),
        m = v ? s : l,
        b = "border-color:" + m + ";font-size:" + c + ";color:" + m + ";font-weight:" + u + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";

    return b += "position:" + (g && d ? "fixed;" : "absolute;"), !g && d || (b += (n === ot ? x : y) + ":" + (i + parseFloat(f)) + "px;"), a && (b += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), p._isStart = v, p.setAttribute("class", "gsap-marker-" + e), p.style.cssText = b, p.innerText = t || 0 === t ? e + "-" + t : e, h.children[0] ? h.insertBefore(p, h.children[0]) : h.appendChild(p), p._offset = p["offset" + n.op.d2], C(p, 0, n, v), p;
  }

  function Ma() {
    return l = l || s(D);
  }

  function Na() {
    l || (l = s(D), Xe || E("scrollStart"), Xe = He());
  }

  function Oa() {
    return !Le && !r && !_e.fullscreenElement && a.restart(!0);
  }

  function Ua(e) {
    var t,
        r = Se.ticker.frame,
        n = [],
        o = 0;

    if (g !== r || De) {
      for (z(); o < k.length; o += 4) {
        (t = Me.matchMedia(k[o]).matches) !== k[o + 3] && ((k[o + 3] = t) ? n.push(o) : z(1, k[o]) || W(k[o + 2]) && k[o + 2]());
      }

      for (A(), o = 0; o < n.length; o++) {
        t = n[o], Ve = k[t], k[t + 2] = k[t + 1](e);
      }

      Ve = 0, i && B(0, 1), g = r, E("matchMedia");
    }
  }

  function Va() {
    return Da(G, "scrollEnd", Va) || B(!0);
  }

  function fb(e, t, r, n) {
    if (e.parentNode !== t) {
      for (var o, i = F.length, a = t.style, s = e.style; i--;) {
        a[o = F[i]] = r[o];
      }

      a.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (a.display = "inline-block"), s[y] = s[x] = "auto", a.overflow = "visible", a.boxSizing = "border-box", a[Je] = xa(e, nt) + rt, a[qe] = xa(e, ot) + rt, a[Ge] = s[et] = s.top = s[m] = "0", ut(n), s[Je] = s.maxWidth = r[Je], s[qe] = s.maxHeight = r[qe], s[Ge] = r[Ge], e.parentNode.insertBefore(t, e), t.appendChild(e);
    }
  }

  function ib(e) {
    for (var t = H.length, r = e.style, n = [], o = 0; o < t; o++) {
      n.push(H[o], r[H[o]]);
    }

    return n.t = e, n;
  }

  function lb(e, t, r, n, o, i, a, s, l, c, f, u) {
    if (W(e) && (e = e(s)), V(e) && "max" === e.substr(0, 3) && (e = u + ("=" === e.charAt(4) ? Ha("0" + e.substr(3), r) : 0)), X(e)) a && C(a, r, n, !0);else {
      W(t) && (t = t(s));
      var p,
          d,
          g,
          h = Ee(t)[0] || Pe,
          v = it(h) || {},
          m = e.split(" ");
      v && (v.left || v.top) || "none" !== ta(h).display || (g = h.style.display, h.style.display = "block", v = it(h), g ? h.style.display = g : h.style.removeProperty("display")), p = Ha(m[0], v[n.d]), d = Ha(m[1] || "0", r), e = v[n.p] - l[n.p] - c + p + o - d, a && C(a, d, n, r - d < 20 || a._isStart && 20 < d), r -= r - d;
    }

    if (i) {
      var b = e + r,
          x = i._isStart;
      u = "scroll" + n.d2, C(i, b, n, x && 20 < b || !x && (f ? Math.max(Pe[u], ke[u]) : i.parentNode[u]) <= b + 1), f && (l = it(a), f && (i.style[n.op.p] = l[n.op.p] - n.op.m - i._offset + rt));
    }

    return Math.round(e);
  }

  function nb(e, t, r, n) {
    if (e.parentNode !== t) {
      var o,
          i,
          a = e.style;

      if (t === Pe) {
        for (o in e._stOrig = a.cssText, i = ta(e)) {
          +o || j.test(o) || !i[o] || "string" != typeof a[o] || "0" === o || (a[o] = i[o]);
        }

        a.top = r, a.left = n;
      } else a.cssText = e._stOrig;

      Se.core.getCache(e).uncache = 1, t.appendChild(e);
    }
  }

  function ob(l, e) {
    function Ue(e, t, r, n, o) {
      var i = Ue.tween,
          a = t.onComplete,
          s = {};
      return i && i.kill(), c = Math.round(r), t[p] = e, (t.modifiers = s)[p] = function (e) {
        return (e = K(u())) !== c && e !== f && 2 < Math.abs(e - c) ? (i.kill(), Ue.tween = 0) : e = r + n * i.ratio + o * i.ratio * i.ratio, f = c, c = K(e);
      }, t.onComplete = function () {
        Ue.tween = 0, a && a.call(i);
      }, i = Ue.tween = Se.to(l, t);
    }

    var c,
        f,
        u = P(l, e),
        p = "_scroll" + e.p2;
    return l[p] = u, l.addEventListener("wheel", function () {
      return Ue.tween && Ue.tween.kill() && (Ue.tween = 0);
    }), Ue;
  }

  var Se,
      i,
      Me,
      _e,
      ke,
      Pe,
      o,
      a,
      s,
      l,
      Ee,
      Ne,
      Ie,
      c,
      Le,
      Ae,
      f,
      ze,
      u,
      p,
      d,
      We,
      Be,
      r,
      Re,
      Ve,
      g,
      De = 1,
      Fe = [],
      h = [],
      He = Date.now,
      v = He(),
      Xe = 0,
      Ye = 1,
      Ze = Math.abs,
      t = "scrollLeft",
      n = "scrollTop",
      m = "left",
      x = "right",
      y = "bottom",
      Je = "width",
      qe = "height",
      $e = "Right",
      je = "Left",
      Ke = "Top",
      Qe = "Bottom",
      Ge = "padding",
      et = "margin",
      tt = "Width",
      b = "Height",
      rt = "px",
      nt = {
    s: t,
    p: m,
    p2: je,
    os: x,
    os2: $e,
    d: Je,
    d2: tt,
    a: "x",
    sc: function sc(e) {
      return arguments.length ? Me.scrollTo(e, ot.sc()) : Me.pageXOffset || _e[t] || ke[t] || Pe[t] || 0;
    }
  },
      ot = {
    s: n,
    p: "top",
    p2: Ke,
    os: y,
    os2: Qe,
    d: qe,
    d2: b,
    a: "y",
    op: nt,
    sc: function sc(e) {
      return arguments.length ? Me.scrollTo(nt.sc(), e) : Me.pageYOffset || _e[n] || ke[n] || Pe[n] || 0;
    }
  },
      it = function _getBounds(e, t) {
    var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== ta(e)[f] && Se.to(e, {
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
    }).progress(1),
        n = e.getBoundingClientRect();
    return r && r.progress(0).kill(), n;
  },
      at = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
  },
      st = {
    toggleActions: "play",
    anticipatePin: 0
  },
      w = {
    top: 0,
    left: 0,
    center: .5,
    bottom: 1,
    right: 1
  },
      C = function _positionMarker(e, t, r, n) {
    var o = {
      display: "block"
    },
        i = r[n ? "os2" : "p2"],
        a = r[n ? "p2" : "os2"];
    e._isFlipped = n, o[r.a + "Percent"] = n ? -100 : 0, o[r.a] = n ? "1px" : 0, o["border" + i + tt] = 1, o["border" + a + tt] = 0, o[r.p] = t + "px", Se.set(e, o);
  },
      lt = [],
      ct = {},
      S = {},
      _ = [],
      k = [],
      E = function _dispatch(e) {
    return S[e] && S[e].map(function (e) {
      return e();
    }) || _;
  },
      I = [],
      A = function _revertRecorded(e) {
    for (var t = 0; t < I.length; t += 4) {
      e && I[t + 3] !== e || (I[t].style.cssText = I[t + 1], I[t + 2].uncache = 1);
    }
  },
      z = function _revertAll(e, t) {
    var r;

    for (ze = 0; ze < lt.length; ze++) {
      r = lt[ze], t && r.media !== t || (e ? r.kill(1) : (r.scroll.rec || (r.scroll.rec = r.scroll()), r.revert()));
    }

    A(t), t || E("revert");
  },
      B = function _refreshAll(e, t) {
    if (!Xe || e) {
      var r = E("refreshInit");

      for (We && G.sort(), t || z(), ze = 0; ze < lt.length; ze++) {
        lt[ze].refresh();
      }

      for (r.forEach(function (e) {
        return e && e.render && e.render(-1);
      }), ze = lt.length; ze--;) {
        lt[ze].scroll.rec = 0;
      }

      a.pause(), E("refresh");
    } else Ca(G, "scrollEnd", Va);
  },
      R = 0,
      ft = 1,
      D = function _updateAll() {
    var e = lt.length,
        t = He(),
        r = 50 <= t - v,
        n = e && lt[0].scroll();

    if (ft = n < R ? -1 : 1, R = n, r && (Xe && !Ae && 200 < t - Xe && (Xe = 0, E("scrollEnd")), Ie = v, v = t), ft < 0) {
      for (ze = e; 0 < ze--;) {
        lt[ze] && lt[ze].update(0, r);
      }

      ft = 1;
    } else for (ze = 0; ze < e; ze++) {
      lt[ze] && lt[ze].update(0, r);
    }

    l = 0;
  },
      F = [m, "top", y, x, et + Qe, et + $e, et + Ke, et + je, "display", "flexShrink", "float", "zIndex"],
      H = F.concat([Je, qe, "boxSizing", "max" + tt, "max" + b, "position", et, Ge, Ge + Ke, Ge + $e, Ge + Qe, Ge + je]),
      q = /([A-Z])/g,
      ut = function _setState(e) {
    if (e) {
      var t,
          r,
          n = e.t.style,
          o = e.length,
          i = 0;

      for ((e.t._gsap || Se.core.getCache(e.t)).uncache = 1; i < o; i += 2) {
        r = e[i + 1], t = e[i], r ? n[t] = r : n[t] && n.removeProperty(t.replace(q, "-$1").toLowerCase());
      }
    }
  },
      pt = {
    left: 0,
    top: 0
  },
      j = /(?:webkit|moz|length|cssText|inset)/i;

  nt.op = ot;
  var G = (ScrollTrigger.prototype.init = function init(w, C) {
    if (this.progress = this.start = 0, this.vars && this.kill(1), Ye) {
      var d,
          n,
          u,
          S,
          M,
          _,
          k,
          E,
          I,
          L,
          A,
          z,
          e,
          U,
          B,
          R,
          D,
          F,
          t,
          H,
          g,
          Z,
          q,
          h,
          $,
          v,
          m,
          r,
          b,
          x,
          j,
          o,
          p,
          y,
          K,
          G,
          ee,
          te = (w = va(V(w) || X(w) || w.nodeType ? {
        trigger: w
      } : w, st)).horizontal ? nt : ot,
          re = w.onUpdate,
          ne = w.toggleClass,
          i = w.id,
          oe = w.onToggle,
          ie = w.onRefresh,
          a = w.scrub,
          ae = w.trigger,
          se = w.pin,
          le = w.pinSpacing,
          ce = w.invalidateOnRefresh,
          fe = w.anticipatePin,
          s = w.onScrubComplete,
          ue = w.onSnapComplete,
          pe = w.once,
          de = w.snap,
          ge = w.pinReparent,
          he = !a && 0 !== a,
          ve = Ee(w.scroller || Me)[0],
          l = Se.core.getCache(ve),
          me = N(ve),
          be = "pinType" in w ? "fixed" === w.pinType : me || "fixed" === O(ve, "pinType"),
          xe = [w.onEnter, w.onLeave, w.onEnterBack, w.onLeaveBack],
          ye = he && w.toggleActions.split(" "),
          c = "markers" in w ? w.markers : st.markers,
          we = me ? 0 : parseFloat(ta(ve)["border" + te.p2 + tt]) || 0,
          Ce = this,
          f = w.onRefreshInit && function () {
        return w.onRefreshInit(Ce);
      },
          Te = function _getSizeFunc(e, t, r) {
        var n = r.d,
            o = r.d2,
            i = r.a;
        return (i = O(e, "getBoundingClientRect")) ? function () {
          return i()[n];
        } : function () {
          return (t ? Me["inner" + o] : e["client" + o]) || 0;
        };
      }(ve, me, te),
          Oe = function _getOffsetsFunc(e, t) {
        return !t || ~Fe.indexOf(e) ? Q(e) : function () {
          return pt;
        };
      }(ve, me);

      Ce.media = Ve, fe *= 45, lt.push(Ce), Ce.scroller = ve, Ce.scroll = P(ve, te), M = Ce.scroll(), Ce.vars = w, C = C || w.animation, "refreshPriority" in w && (We = 1), l.tweenScroll = l.tweenScroll || {
        top: ob(ve, ot),
        left: ob(ve, nt)
      }, Ce.tweenTo = d = l.tweenScroll[te.p], C && (C.vars.lazy = !1, C._initted || !1 !== C.vars.immediateRender && !1 !== w.immediateRender && C.render(0, !0, !0), Ce.animation = C.pause(), C.scrollTrigger = Ce, (o = X(a) && a) && (j = Se.to(C, {
        ease: "power3",
        duration: o,
        onComplete: function onComplete() {
          return s && s(Ce);
        }
      })), b = 0, i = i || C.vars.id), de && (Y(de) || (de = {
        snapTo: de
      }), "scrollBehavior" in Pe.style && Se.set(me ? [Pe, ke] : ve, {
        scrollBehavior: "auto"
      }), u = W(de.snapTo) ? de.snapTo : "labels" === de.snapTo ? function _getClosestLabel(t) {
        return function (e) {
          return Se.utils.snap(ya(t), e);
        };
      }(C) : "labelsDirectional" === de.snapTo ? function _getLabelAtDirection(o) {
        return function (e, t) {
          var r,
              n = ya(o);

          if (n.sort(function (e, t) {
            return e - t;
          }), 0 < t.direction) {
            for (e -= 1e-4, r = 0; r < n.length; r++) {
              if (n[r] >= e) return n[r];
            }

            return n.pop();
          }

          for (r = n.length, e += 1e-4; r--;) {
            if (n[r] <= e) return n[r];
          }

          return n[0];
        };
      }(C) : Se.utils.snap(de.snapTo), p = de.duration || {
        min: .1,
        max: 2
      }, p = Y(p) ? Ne(p.min, p.max) : Ne(p, p), y = Se.delayedCall(de.delay || o / 2 || .1, function () {
        if (Math.abs(Ce.getVelocity()) < 10 && !Ae) {
          var e = C && !he ? C.totalProgress() : Ce.progress,
              t = (e - x) / (He() - Ie) * 1e3 || 0,
              r = Ze(t / 2) * t / .185,
              n = e + (!1 === de.inertia ? 0 : r),
              o = Ne(0, 1, u(n, Ce)),
              i = Ce.scroll(),
              a = Math.round(k + o * U),
              s = de.onStart,
              l = de.onInterrupt,
              c = de.onComplete,
              f = d.tween;

          if (i <= E && k <= i && a !== i) {
            if (f && !f._initted && f.data <= Math.abs(a - i)) return;
            d(a, {
              duration: p(Ze(.185 * Math.max(Ze(n - e), Ze(o - e)) / t / .05 || 0)),
              ease: de.ease || "power3",
              data: Math.abs(a - i),
              onInterrupt: function onInterrupt() {
                return y.restart(!0) && l && l(Ce);
              },
              onComplete: function onComplete() {
                b = x = C && !he ? C.totalProgress() : Ce.progress, ue && ue(Ce), c && c(Ce);
              }
            }, i, r * U, a - i - r * U), s && s(Ce, d.tween);
          }
        } else Ce.isActive && y.restart(!0);
      }).pause()), i && (ct[i] = Ce), ae = Ce.trigger = Ee(ae || se)[0], se = !0 === se ? ae : Ee(se)[0], V(ne) && (ne = {
        targets: ae,
        className: ne
      }), se && (!1 === le || le === et || (le = !(!le && "flex" === ta(se.parentNode).display) && Ge), Ce.pin = se, !1 !== w.force3D && Se.set(se, {
        force3D: !0
      }), (n = Se.core.getCache(se)).spacer ? B = n.pinState : (n.spacer = F = _e.createElement("div"), F.setAttribute("class", "pin-spacer" + (i ? " pin-spacer-" + i : "")), n.pinState = B = ib(se)), Ce.spacer = F = n.spacer, r = ta(se), h = r[le + te.os2], H = Se.getProperty(se), g = Se.quickSetter(se, te.a, rt), fb(se, F, r), D = ib(se)), c && (e = Y(c) ? va(c, at) : at, A = Ia("scroller-start", i, ve, te, e, 0), z = Ia("scroller-end", i, ve, te, e, 0, A), t = A["offset" + te.op.d2], I = Ia("start", i, ve, te, e, t), L = Ia("end", i, ve, te, e, t), be || (function _makePositionable(e) {
        e.style.position = "absolute" === ta(e).position ? "absolute" : "relative";
      }(me ? Pe : ve), Se.set([A, z], {
        force3D: !0
      }), v = Se.quickSetter(A, te.a, rt), m = Se.quickSetter(z, te.a, rt))), Ce.revert = function (e) {
        var t = !1 !== e || !Ce.enabled,
            r = Le;
        t !== S && (t && (G = Math.max(Ce.scroll(), Ce.scroll.rec || 0), K = Ce.progress, ee = C && C.progress()), I && [I, L, A, z].forEach(function (e) {
          return e.style.display = t ? "none" : "block";
        }), t && (Le = 1), Ce.update(t), Le = r, se && (t ? function _swapPinOut(e, t, r) {
          if (ut(r), e.parentNode === t) {
            var n = t.parentNode;
            n && (n.insertBefore(e, t), n.removeChild(t));
          }
        }(se, F, B) : ge && Ce.isActive || fb(se, F, ta(se), $)), S = t);
      }, Ce.refresh = function (e, t) {
        if (!Le && Ce.enabled || t) if (se && e && Xe) Ca(ScrollTrigger, "scrollEnd", Va);else {
          Le = 1, j && j.pause(), ce && C && C.progress(0).invalidate(), S || Ce.revert();

          for (var r, n, o, i, a, s, l, c, f, u = Te(), p = Oe(), d = T(ve, te), g = 0, h = 0, v = w.end, m = w.endTrigger || ae, b = w.start || (0 !== w.start && ae ? se ? "0 0" : "0 100%" : 0), x = ae && Math.max(0, lt.indexOf(Ce)) || 0, y = x; y--;) {
            (s = lt[y]).end || s.refresh(0, 1) || (Le = 1), !(l = s.pin) || l !== ae && l !== se || s.revert();
          }

          for (k = lb(b, ae, u, te, Ce.scroll(), I, A, Ce, p, we, be, d) || (se ? -.001 : 0), W(v) && (v = v(Ce)), V(v) && !v.indexOf("+=") && (~v.indexOf(" ") ? v = (V(b) ? b.split(" ")[0] : "") + v : (g = Ha(v.substr(2), u), v = V(b) ? b : k + g, m = ae)), E = Math.max(k, lb(v || (m ? "100% 0" : d), m, u, te, Ce.scroll() + g, L, z, Ce, p, we, be, d)) || -.001, U = E - k || (k -= .01) && .001, g = 0, y = x; y--;) {
            (l = (s = lt[y]).pin) && s.start - s._pinPush < k && (r = s.end - s.start, l === ae && (g += r), l === se && (h += r));
          }

          if (k += g, E += g, Ce._pinPush = h, I && g && ((r = {})[te.a] = "+=" + g, Se.set([I, L], r)), se) r = ta(se), i = te === ot, o = Ce.scroll(), Z = parseFloat(H(te.a)) + h, !d && 1 < E && ((me ? Pe : ve).style["overflow-" + te.a] = "scroll"), fb(se, F, r), D = ib(se), n = it(se, !0), c = be && P(ve, i ? nt : ot)(), le && (($ = [le + te.os2, U + h + rt]).t = F, (y = le === Ge ? xa(se, te) + U + h : 0) && $.push(te.d, y + rt), ut($), be && Ce.scroll(G)), be && ((a = {
            top: n.top + (i ? o - k : c) + rt,
            left: n.left + (i ? c : o - k) + rt,
            boxSizing: "border-box",
            position: "fixed"
          })[Je] = a.maxWidth = Math.ceil(n.width) + rt, a[qe] = a.maxHeight = Math.ceil(n.height) + rt, a[et] = a[et + Ke] = a[et + $e] = a[et + Qe] = a[et + je] = "0", a[Ge] = r[Ge], a[Ge + Ke] = r[Ge + Ke], a[Ge + $e] = r[Ge + $e], a[Ge + Qe] = r[Ge + Qe], a[Ge + je] = r[Ge + je], R = function _copyState(e, t, r) {
            for (var n, o = [], i = e.length, a = r ? 8 : 0; a < i; a += 2) {
              n = e[a], o.push(n, n in t ? t[n] : e[a + 1]);
            }

            return o.t = e.t, o;
          }(B, a, ge)), C ? (f = C._initted, Be(1), C.progress(1, !0), q = H(te.a) - Z + U + h, U !== q && R.splice(R.length - 2, 2), C.progress(0, !0), f || C.invalidate(), Be(0)) : q = U;else if (ae && Ce.scroll()) for (n = ae.parentNode; n && n !== Pe;) {
            n._pinOffset && (k -= n._pinOffset, E -= n._pinOffset), n = n.parentNode;
          }

          for (y = 0; y < x; y++) {
            !(s = lt[y].pin) || s !== ae && s !== se || lt[y].revert(!1);
          }

          Ce.start = k, Ce.end = E, (M = _ = Ce.scroll()) < G && Ce.scroll(G), Ce.revert(!1), Le = 0, C && he && C._initted && C.progress(ee, !0).render(C.time(), !0, !0), K !== Ce.progress && (j && C.totalProgress(K, !0), Ce.progress = K, Ce.update()), se && le && (F._pinOffset = Math.round(Ce.progress * q)), ie && ie(Ce);
        }
      }, Ce.getVelocity = function () {
        return (Ce.scroll() - _) / (He() - Ie) * 1e3 || 0;
      }, Ce.update = function (e, t) {
        var r,
            n,
            o,
            i,
            a,
            s = Ce.scroll(),
            l = e ? 0 : (s - k) / U,
            c = l < 0 ? 0 : 1 < l ? 1 : l || 0,
            f = Ce.progress;

        if (t && (_ = M, M = s, de && (x = b, b = C && !he ? C.totalProgress() : c)), fe && !c && se && !Le && !De && Xe && k < s + (s - _) / (He() - Ie) * fe && (c = 1e-4), c !== f && Ce.enabled) {
          if (i = (a = (r = Ce.isActive = !!c && c < 1) != (!!f && f < 1)) || !!c != !!f, Ce.direction = f < c ? 1 : -1, Ce.progress = c, he || (!j || Le || De ? C && C.totalProgress(c, !!Le) : (j.vars.totalProgress = c, j.invalidate().restart())), se) if (e && le && (F.style[le + te.os2] = h), be) {
            if (i) {
              if (o = !e && f < c && s < E + 1 && s + 1 >= T(ve, te), ge) if (e || !r && !o) nb(se, F);else {
                var u = it(se, !0),
                    p = s - k;
                nb(se, Pe, u.top + (te === ot ? p : 0) + rt, u.left + (te === ot ? 0 : p) + rt);
              }
              ut(r || o ? R : D), q !== U && c < 1 && r || g(Z + (1 !== c || o ? 0 : q));
            }
          } else g(Z + q * c);
          !de || d.tween || Le || De || y.restart(!0), ne && (a || pe && c && (c < 1 || !Re)) && Ee(ne.targets).forEach(function (e) {
            return e.classList[r || pe ? "add" : "remove"](ne.className);
          }), !re || he || e || re(Ce), i && !Le ? (n = c && !f ? 0 : 1 === c ? 1 : 1 === f ? 2 : 3, he && (o = !a && "none" !== ye[n + 1] && ye[n + 1] || ye[n], C && ("complete" === o || "reset" === o || o in C) && ("complete" === o ? C.pause().totalProgress(1) : "reset" === o ? C.restart(!0).pause() : C[o]()), re && re(Ce)), !a && Re || (oe && a && oe(Ce), xe[n] && xe[n](Ce), pe && (1 === c ? Ce.kill(!1, 1) : xe[n] = 0), a || xe[n = 1 === c ? 1 : 3] && xe[n](Ce))) : he && re && !Le && re(Ce);
        }

        m && (v(s + (A._isFlipped ? 1 : 0)), m(s));
      }, Ce.enable = function () {
        Ce.enabled || (Ce.enabled = !0, Ca(ve, "resize", Oa), Ca(ve, "scroll", Na), f && Ca(ScrollTrigger, "refreshInit", f), C && C.add ? Se.delayedCall(.01, function () {
          return k || E || Ce.refresh();
        }) && (U = .01) && (k = E = 0) : Ce.refresh());
      }, Ce.disable = function (e, t) {
        if (Ce.enabled && (!1 !== e && Ce.revert(), Ce.enabled = Ce.isActive = !1, t || j && j.pause(), G = 0, n && (n.uncache = 1), f && Da(ScrollTrigger, "refreshInit", f), y && (y.pause(), d.tween && d.tween.kill() && (d.tween = 0)), !me)) {
          for (var r = lt.length; r--;) {
            if (lt[r].scroller === ve && lt[r] !== Ce) return;
          }

          Da(ve, "resize", Oa), Da(ve, "scroll", Na);
        }
      }, Ce.kill = function (e, t) {
        Ce.disable(e, t), i && delete ct[i];
        var r = lt.indexOf(Ce);
        lt.splice(r, 1), r === ze && 0 < ft && ze--, C && (C.scrollTrigger = null, e && C.render(-1), t || C.kill()), I && [I, L, A, z].forEach(function (e) {
          return e.parentNode.removeChild(e);
        }), se && (n && (n.uncache = 1), r = 0, lt.forEach(function (e) {
          return e.pin === se && r++;
        }), r || (n.spacer = 0));
      }, Ce.enable();
    } else this.update = this.refresh = this.kill = J;
  }, ScrollTrigger.register = function register(e) {
    if (!i && (Se = e || M(), L() && window.document && (Me = window, _e = document, ke = _e.documentElement, Pe = _e.body), Se && (Ee = Se.utils.toArray, Ne = Se.utils.clamp, Be = Se.core.suppressOverwrites || J, Se.core.globals("ScrollTrigger", ScrollTrigger), Pe))) {
      s = Me.requestAnimationFrame || function (e) {
        return setTimeout(e, 16);
      }, Ca(Me, "wheel", Na), o = [Me, _e, ke, Pe], Ca(_e, "scroll", Na);
      var t,
          r = Pe.style,
          n = r.borderTop;
      r.borderTop = "1px solid #000", t = it(Pe), ot.m = Math.round(t.top + ot.sc()) || 0, nt.m = Math.round(t.left + nt.sc()) || 0, n ? r.borderTop = n : r.removeProperty("border-top"), c = setInterval(Ma, 200), Se.delayedCall(.5, function () {
        return De = 0;
      }), Ca(_e, "touchcancel", J), Ca(Pe, "touchstart", J), Ba(Ca, _e, "pointerdown,touchstart,mousedown", function () {
        return Ae = 1;
      }), Ba(Ca, _e, "pointerup,touchend,mouseup", function () {
        return Ae = 0;
      }), f = Se.utils.checkPrefix("transform"), H.push(f), i = He(), a = Se.delayedCall(.2, B).pause(), d = [_e, "visibilitychange", function () {
        var e = Me.innerWidth,
            t = Me.innerHeight;
        _e.hidden ? (u = e, p = t) : u === e && p === t || Oa();
      }, _e, "DOMContentLoaded", B, Me, "load", function () {
        return Xe || B();
      }, Me, "resize", Oa], U(Ca);
    }

    return i;
  }, ScrollTrigger.defaults = function defaults(e) {
    for (var t in e) {
      st[t] = e[t];
    }
  }, ScrollTrigger.kill = function kill() {
    Ye = 0, lt.slice(0).forEach(function (e) {
      return e.kill(1);
    });
  }, ScrollTrigger.config = function config(e) {
    "limitCallbacks" in e && (Re = !!e.limitCallbacks);
    var t = e.syncInterval;
    t && clearInterval(c) || (c = t) && setInterval(Ma, t), "autoRefreshEvents" in e && (U(Da) || U(Ca, e.autoRefreshEvents || "none"), r = -1 === (e.autoRefreshEvents + "").indexOf("resize"));
  }, ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
    var r = Ee(e)[0],
        n = h.indexOf(r),
        o = N(r);
    ~n && h.splice(n, o ? 6 : 2), o ? Fe.unshift(Me, t, Pe, t, ke, t) : Fe.unshift(r, t);
  }, ScrollTrigger.matchMedia = function matchMedia(e) {
    var t, r, n, o, i;

    for (r in e) {
      n = k.indexOf(r), o = e[r], "all" === (Ve = r) ? o() : (t = Me.matchMedia(r)) && (t.matches && (i = o()), ~n ? (k[n + 1] = $(k[n + 1], o), k[n + 2] = $(k[n + 2], i)) : (n = k.length, k.push(r, o, i), t.addListener ? t.addListener(Ua) : t.addEventListener("change", Ua)), k[n + 3] = t.matches), Ve = 0;
    }

    return k;
  }, ScrollTrigger.clearMatchMedia = function clearMatchMedia(e) {
    e || (k.length = 0), 0 <= (e = k.indexOf(e)) && k.splice(e, 4);
  }, ScrollTrigger);

  function ScrollTrigger(e, t) {
    i || ScrollTrigger.register(Se) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e, t);
  }

  G.version = "3.6.1", G.saveStyles = function (e) {
    return e ? Ee(e).forEach(function (e) {
      if (e && e.style) {
        var t = I.indexOf(e);
        0 <= t && I.splice(t, 4), I.push(e, e.style.cssText, Se.core.getCache(e), Ve);
      }
    }) : I;
  }, G.revert = function (e, t) {
    return z(!e, t);
  }, G.create = function (e, t) {
    return new G(e, t);
  }, G.refresh = function (e) {
    return e ? Oa() : B(!0);
  }, G.update = D, G.maxScroll = function (e, t) {
    return T(e, t ? nt : ot);
  }, G.getScrollFunc = function (e, t) {
    return P(Ee(e)[0], t ? nt : ot);
  }, G.getById = function (e) {
    return ct[e];
  }, G.getAll = function () {
    return lt.slice(0);
  }, G.isScrolling = function () {
    return !!Xe;
  }, G.addEventListener = function (e, t) {
    var r = S[e] || (S[e] = []);
    ~r.indexOf(t) || r.push(t);
  }, G.removeEventListener = function (e, t) {
    var r = S[e],
        n = r && r.indexOf(t);
    0 <= n && r.splice(n, 1);
  }, G.batch = function (e, t) {
    function yi(e, t) {
      var r = [],
          n = [],
          o = Se.delayedCall(i, function () {
        t(r, n), r = [], n = [];
      }).pause();
      return function (e) {
        r.length || o.restart(!0), r.push(e.trigger), n.push(e), a <= r.length && o.progress(1);
      };
    }

    var r,
        n = [],
        o = {},
        i = t.interval || .016,
        a = t.batchMax || 1e9;

    for (r in t) {
      o[r] = "on" === r.substr(0, 2) && W(t[r]) && "onRefreshInit" !== r ? yi(0, t[r]) : t[r];
    }

    return W(a) && (a = a(), Ca(G, "refresh", function () {
      return a = t.batchMax();
    })), Ee(e).forEach(function (e) {
      var t = {};

      for (r in o) {
        t[r] = o[r];
      }

      t.trigger = e, n.push(G.create(t));
    }), n;
  }, G.sort = function (e) {
    return lt.sort(e || function (e, t) {
      return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0));
    });
  }, M() && Se.registerPlugin(G), e.ScrollTrigger = G, e.default = G;

  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
  } else {
    delete e.default;
  }
});
},{}],"js/dom/app.js":[function(require,module,exports) {
"use strict";

var _gsapMin = require("../vendors/gsap.min.js");

var _ScrollTriggerMin = require("../vendors/ScrollTrigger.min.js");

// Onload animation la = loading animation 
window.onload = function () {
  var preload = _gsapMin.gsap.timeline();

  preload.to('.preloader', {
    opacity: 0,
    visibility: 'hidden'
  });
}; // GSAP TIMELINE & SCROLLTRIGGER


var tl = _gsapMin.gsap.timeline({
  defaults: {
    duration: .1,
    ease: 'power1.easeInOut'
  }
});

tl.to('.bar-one', {
  x: 1000,
  opacity: 0
});
tl.to('.bar-two', {
  top: '50%',
  rotate: 45
});
tl.to('.bar-three', {
  top: '50%',
  rotate: 135
});
tl.to('.nav-container', {
  opacity: 1,
  visibility: 'visible',
  overflow: 'hidden'
});
tl.to('.menu .list', {
  stagger: 0.2,
  opacity: 1
});
tl.to('.contact-details p', {
  opacity: 1,
  stagger: 0.2
});
tl.to('.contact-details .social', {
  opacity: 1,
  stagger: 0.2
});
tl.to('body', {
  position: 'fixed'
});
tl.reversed(true);

var animateMenu = function animateMenu() {
  tl.reversed(!tl.reversed());
};

document.querySelector('.toggle-menu').addEventListener('click', animateMenu); // wolf story 
// Grabbing all trees 

var story = _gsapMin.gsap.timeline({
  scrollTrigger: {
    trigger: '.story',
    start: '+=-450',
    height: 'auto',
    scrub: true
  }
});

story.to('.tree-one', {
  opacity: 0.1
});
story.to('.container-one', {
  opacity: 0.6,
  marginTop: 0
});
story.to('.wolf-left', {
  left: '0'
});
story.to('.container-two', {
  opacity: 0.6,
  marginTop: 0
});
story.to('.wolf-right', {
  right: '0'
});
story.to('.container-three', {
  opacity: 0.6,
  marginTop: 0
});
story.to('.tree-two', {
  opacity: 0.1
});
story.to('.tree-three', {
  opacity: 0.1
});
story.to('.tree-four', {
  opacity: 0.1
});
story.to('.tree-five', {
  opacity: 0.1
}); // Filter 

var blogs = document.querySelectorAll('.blog');
var filters = document.querySelectorAll('.filter');

var filterBlogs = function filterBlogs() {
  // grab each blog
  blogs.forEach(function () {}); // filters & blogs 

  filters.forEach(function () {
    //filter All
    filters[0].addEventListener('click', function () {
      // filters 
      filters[0].classList.add('active');
      filters[1].classList.remove('active');
      filters[2].classList.remove('active');
      filters[3].classList.remove('active');
      filters[4].classList.remove('active');
      filters[5].classList.remove('active');
      setTimeout(function () {
        //blogs all 
        blogs[0].classList.remove('hide');
        blogs[1].classList.remove('hide');
        blogs[2].classList.remove('hide');
        blogs[3].classList.remove('hide');
        blogs[4].classList.remove('hide');
        blogs[5].classList.remove('hide');
        blogs[6].classList.remove('hide');
        blogs[7].classList.remove('hide');
        blogs[8].classList.remove('hide');
        blogs[9].classList.remove('hide');
        blogs[10].classList.remove('hide');
        blogs[11].classList.remove('hide');
      }, 500);
    }); //filter Design thinking

    filters[1].addEventListener('click', function () {
      // filters 
      filters[0].classList.remove('active');
      filters[1].classList.add('active');
      filters[2].classList.remove('active');
      filters[3].classList.remove('active');
      filters[4].classList.remove('active');
      filters[5].classList.remove('active');
      setTimeout(function () {
        //blogs design thinking
        blogs[0].classList.add('hide');
        blogs[1].classList.remove('hide');
        blogs[2].classList.add('hide');
        blogs[3].classList.add('hide');
        blogs[4].classList.remove('hide');
        blogs[5].classList.remove('hide');
        blogs[6].classList.remove('hide');
        blogs[7].classList.add('hide');
        blogs[8].classList.remove('hide');
        blogs[9].classList.remove('hide');
        blogs[10].classList.add('hide');
        blogs[11].classList.add('hide');
      }, 500);
    }); //filter User experience

    filters[2].addEventListener('click', function () {
      // filters 
      filters[0].classList.remove('active');
      filters[1].classList.remove('active');
      filters[2].classList.add('active');
      filters[3].classList.remove('active');
      filters[4].classList.remove('active');
      filters[5].classList.remove('active');
      setTimeout(function () {
        //blogs design thinking
        blogs[0].classList.remove('hide');
        blogs[1].classList.remove('hide');
        blogs[2].classList.add('hide');
        blogs[3].classList.add('hide');
        blogs[4].classList.add('hide');
        blogs[5].classList.remove('hide');
        blogs[6].classList.remove('hide');
        blogs[7].classList.add('hide');
        blogs[8].classList.remove('hide');
        blogs[9].classList.remove('hide');
        blogs[10].classList.add('hide');
        blogs[11].classList.remove('hide');
      }, 500);
    }); //filter design

    filters[3].addEventListener('click', function () {
      // filters 
      filters[0].classList.remove('active');
      filters[1].classList.remove('active');
      filters[2].classList.remove('active');
      filters[3].classList.add('active');
      filters[4].classList.remove('active');
      filters[5].classList.remove('active');
      setTimeout(function () {
        //blogs all 
        blogs[0].classList.add('hide');
        blogs[1].classList.add('hide');
        blogs[2].classList.add('hide');
        blogs[3].classList.add('hide');
        blogs[4].classList.add('hide');
        blogs[5].classList.add('hide');
        blogs[6].classList.add('hide');
        blogs[7].classList.add('hide');
        blogs[8].classList.add('hide');
        blogs[9].classList.add('hide');
        blogs[10].classList.remove('hide');
        blogs[11].classList.remove('hide');
      }, 500);
    }); //filter brand

    filters[4].addEventListener('click', function () {
      // filters 
      filters[0].classList.remove('active');
      filters[1].classList.remove('active');
      filters[2].classList.remove('active');
      filters[3].classList.remove('active');
      filters[4].classList.add('active');
      filters[5].classList.remove('active');
      setTimeout(function () {
        //blogs all 
        blogs[0].classList.add('hide');
        blogs[1].classList.add('hide');
        blogs[2].classList.add('hide');
        blogs[3].classList.add('hide');
        blogs[4].classList.add('hide');
        blogs[5].classList.add('hide');
        blogs[6].classList.add('hide');
        blogs[7].classList.add('hide');
        blogs[8].classList.add('hide');
        blogs[9].classList.add('hide');
        blogs[10].classList.remove('hide');
        blogs[11].classList.add('hide');
      }, 500);
    }); //filter news

    filters[5].addEventListener('click', function () {
      // filters 
      filters[0].classList.remove('active');
      filters[1].classList.remove('active');
      filters[2].classList.remove('active');
      filters[3].classList.remove('active');
      filters[4].classList.remove('active');
      filters[5].classList.add('active');
      setTimeout(function () {
        //blogs all 
        blogs[0].classList.remove('hide');
        blogs[1].classList.remove('hide');
        blogs[2].classList.remove('hide');
        blogs[3].classList.remove('hide');
        blogs[4].classList.remove('hide');
        blogs[5].classList.remove('hide');
        blogs[6].classList.remove('hide');
        blogs[7].classList.remove('hide');
        blogs[8].classList.remove('hide');
        blogs[9].classList.remove('hide');
        blogs[10].classList.remove('hide');
        blogs[11].classList.remove('hide');
      }, 500);
    });
  });
};

filterBlogs();
},{"../vendors/gsap.min.js":"js/vendors/gsap.min.js","../vendors/ScrollTrigger.min.js":"js/vendors/ScrollTrigger.min.js"}],"js/index.js":[function(require,module,exports) {
"use strict";

require("./dom/app");
},{"./dom/app":"js/dom/app.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56849" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map