"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";

  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : void 0, function (C, e) {
  "use strict";

  var t = [],
      r = Object.getPrototypeOf,
      s = t.slice,
      g = t.flat ? function (e) {
    return t.flat.call(e);
  } : function (e) {
    return t.concat.apply([], e);
  },
      u = t.push,
      i = t.indexOf,
      n = {},
      o = n.toString,
      v = n.hasOwnProperty,
      a = v.toString,
      l = a.call(Object),
      y = {},
      m = function m(e) {
    return "function" == typeof e && "number" != typeof e.nodeType;
  },
      x = function x(e) {
    return null != e && e === e.window;
  },
      E = C.document,
      c = {
    type: !0,
    src: !0,
    nonce: !0,
    noModule: !0
  };

  function b(e, t, n) {
    var r,
        i,
        o = (n = n || E).createElement("script");
    if (o.text = e, t) for (r in c) {
      (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    }
    n.head.appendChild(o).parentNode.removeChild(o);
  }

  function w(e) {
    return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? n[o.call(e)] || "object" : _typeof(e);
  }

  var f = "3.5.1",
      S = function S(e, t) {
    return new S.fn.init(e, t);
  };

  function p(e) {
    var t = !!e && "length" in e && e.length,
        n = w(e);
    return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
  }

  S.fn = S.prototype = {
    jquery: f,
    constructor: S,
    length: 0,
    toArray: function toArray() {
      return s.call(this);
    },
    get: function get(e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function pushStack(e) {
      var t = S.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function each(e) {
      return S.each(this, e);
    },
    map: function map(n) {
      return this.pushStack(S.map(this, function (e, t) {
        return n.call(e, t, e);
      }));
    },
    slice: function slice() {
      return this.pushStack(s.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    even: function even() {
      return this.pushStack(S.grep(this, function (e, t) {
        return (t + 1) % 2;
      }));
    },
    odd: function odd() {
      return this.pushStack(S.grep(this, function (e, t) {
        return t % 2;
      }));
    },
    eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: u,
    sort: t.sort,
    splice: t.splice
  }, S.extend = S.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;

    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
      if (null != (e = arguments[s])) for (t in e) {
        r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      }
    }

    return a;
  }, S.extend({
    expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(e) {
      throw new Error(e);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(e) {
      var t, n;
      return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l);
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;

      for (t in e) {
        return !1;
      }

      return !0;
    },
    globalEval: function globalEval(e, t, n) {
      b(e, {
        nonce: t && t.nonce
      }, n);
    },
    each: function each(e, t) {
      var n,
          r = 0;

      if (p(e)) {
        for (n = e.length; r < n; r++) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
      } else for (r in e) {
        if (!1 === t.call(e[r], r, e[r])) break;
      }

      return e;
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      return null == t ? -1 : i.call(t, e, n);
    },
    merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
        e[i++] = t[r];
      }

      return e.length = i, e;
    },
    grep: function grep(e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) {
        !t(e[i], i) !== a && r.push(e[i]);
      }

      return r;
    },
    map: function map(e, t, n) {
      var r,
          i,
          o = 0,
          a = [];
      if (p(e)) for (r = e.length; o < r; o++) {
        null != (i = t(e[o], o, n)) && a.push(i);
      } else for (o in e) {
        null != (i = t(e[o], o, n)) && a.push(i);
      }
      return g(a);
    },
    guid: 1,
    support: y
  }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase();
  });

  var d = function (n) {
    var e,
        d,
        b,
        o,
        i,
        h,
        f,
        g,
        w,
        u,
        l,
        T,
        C,
        a,
        E,
        v,
        s,
        c,
        y,
        S = "sizzle" + 1 * new Date(),
        p = n.document,
        k = 0,
        r = 0,
        m = ue(),
        x = ue(),
        A = ue(),
        N = ue(),
        D = function D(e, t) {
      return e === t && (l = !0), 0;
    },
        j = {}.hasOwnProperty,
        t = [],
        q = t.pop,
        L = t.push,
        H = t.push,
        O = t.slice,
        P = function P(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        if (e[n] === t) return n;
      }

      return -1;
    },
        R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
        F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
        B = new RegExp(M + "+", "g"),
        $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        _ = new RegExp("^" + M + "*," + M + "*"),
        z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        U = new RegExp(M + "|>"),
        X = new RegExp(F),
        V = new RegExp("^" + I + "$"),
        G = {
      ID: new RegExp("^#(" + I + ")"),
      CLASS: new RegExp("^\\.(" + I + ")"),
      TAG: new RegExp("^(" + I + "|[*])"),
      ATTR: new RegExp("^" + W),
      PSEUDO: new RegExp("^" + F),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + R + ")$", "i"),
      needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
    },
        Y = /HTML$/i,
        Q = /^(?:input|select|textarea|button)$/i,
        J = /^h\d$/i,
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
        ne = function ne(e, t) {
      var n = "0x" + e.slice(1) - 65536;
      return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
    },
        re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ie = function ie(e, t) {
      return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        oe = function oe() {
      T();
    },
        ae = be(function (e) {
      return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
    }, {
      dir: "parentNode",
      next: "legend"
    });

    try {
      H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length ? function (e, t) {
          L.apply(e, O.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;

          while (e[n++] = t[r++]) {
            ;
          }

          e.length = n - 1;
        }
      };
    }

    function se(t, e, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = e && e.ownerDocument,
          p = e ? e.nodeType : 9;
      if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;

      if (!r && (T(e), e = e || C, E)) {
        if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
          if (9 === p) {
            if (!(a = e.getElementById(i))) return n;
            if (a.id === i) return n.push(a), n;
          } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n;
        } else {
          if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
          if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
        }

        if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
          if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
            (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;

            while (o--) {
              l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            }

            c = l.join(",");
          }

          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }

      return g(t.replace($, "$1"), e, n, r);
    }

    function ue() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
      };
    }

    function le(e) {
      return e[S] = !0, e;
    }

    function ce(e) {
      var t = C.createElement("fieldset");

      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }

    function fe(e, t) {
      var n = e.split("|"),
          r = n.length;

      while (r--) {
        b.attrHandle[n[r]] = t;
      }
    }

    function pe(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }
      return e ? 1 : -1;
    }

    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }

    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }

    function ge(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
      };
    }

    function ve(a) {
      return le(function (o) {
        return o = +o, le(function (e, t) {
          var n,
              r = a([], e.length, o),
              i = r.length;

          while (i--) {
            e[n = r[i]] && (e[n] = !(t[n] = e[n]));
          }
        });
      });
    }

    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }

    for (e in d = se.support = {}, i = se.isXML = function (e) {
      var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
      return !Y.test(t || n && n.nodeName || "HTML");
    }, T = se.setDocument = function (e) {
      var t,
          n,
          r = e ? e.ownerDocument || e : p;
      return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function (e) {
        return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
      }), d.attributes = ce(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), d.getElementsByTagName = ce(function (e) {
        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
      }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
        return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length;
      }), d.getById ? (b.filter.ID = function (e) {
        var t = e.replace(te, ne);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (b.filter.ID = function (e) {
        var n = e.replace(te, ne);
        return function (e) {
          var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n,
              r,
              i,
              o = t.getElementById(e);

          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;

            while (o = i[r++]) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
          }

          return [];
        }
      }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);

        if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }

          return r;
        }

        return o;
      }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
      }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
        var t;
        a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]");
      }), ce(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = C.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
      })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
        d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F);
      }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }
        return !1;
      }, D = t ? function (e, t) {
        if (e === t) return l = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return l = !0, 0;
        var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];
        if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
        if (i === o) return pe(e, t);
        n = e;

        while (n = n.parentNode) {
          a.unshift(n);
        }

        n = t;

        while (n = n.parentNode) {
          s.unshift(n);
        }

        while (a[r] === s[r]) {
          r++;
        }

        return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0;
      }), C;
    }, se.matches = function (e, t) {
      return se(e, null, null, t);
    }, se.matchesSelector = function (e, t) {
      if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
        var n = c.call(e, t);
        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {
        N(t, !0);
      }
      return 0 < se(t, C, null, [e]).length;
    }, se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t);
    }, se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
          r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }, se.escape = function (e) {
      return (e + "").replace(re, ie);
    }, se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, se.uniqueSort = function (e) {
      var t,
          n = [],
          r = 0,
          i = 0;

      if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
        while (t = e[i++]) {
          t === e[i] && (r = n.push(i));
        }

        while (r--) {
          e.splice(n[r], 1);
        }
      }

      return u = null, e;
    }, o = se.getText = function (e) {
      var t,
          n = "",
          r = 0,
          i = e.nodeType;

      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) {
            n += o(e);
          }
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else while (t = e[r++]) {
        n += o(t);
      }

      return n;
    }, (b = se.selectors = {
      cacheLength: 50,
      createPseudo: le,
      match: G,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];
          return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(te, ne).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function CLASS(e) {
          var t = m[e + " "];
          return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(n, r, i) {
          return function (e) {
            var t = se.attr(e, n);
            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function CHILD(h, e, t, g, v) {
          var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
          return 1 === g && 0 === v ? function (e) {
            return !!e.parentNode;
          } : function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l = y !== m ? "nextSibling" : "previousSibling",
                c = e.parentNode,
                f = x && e.nodeName.toLowerCase(),
                p = !n && !x,
                d = !1;

            if (c) {
              if (y) {
                while (l) {
                  a = e;

                  while (a = a[l]) {
                    if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                  }

                  u = l = "only" === h && !u && "nextSibling";
                }

                return !0;
              }

              if (u = [m ? c.firstChild : c.lastChild], m && p) {
                d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];

                while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                  if (1 === a.nodeType && ++d && a === e) {
                    i[h] = [k, s, d];
                    break;
                  }
                }
              } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
              }

              return (d -= v) === g || d % g == 0 && 0 <= d / g;
            }
          };
        },
        PSEUDO: function PSEUDO(e, o) {
          var t,
              a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
          return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
            var n,
                r = a(e, o),
                i = r.length;

            while (i--) {
              e[n = P(e, r[i])] = !(t[n] = r[i]);
            }
          }) : function (e) {
            return a(e, 0, t);
          }) : a;
        }
      },
      pseudos: {
        not: le(function (e) {
          var r = [],
              i = [],
              s = f(e.replace($, "$1"));
          return s[S] ? le(function (e, t, n, r) {
            var i,
                o = s(e, null, r, []),
                a = e.length;

            while (a--) {
              (i = o[a]) && (e[a] = !(t[a] = i));
            }
          }) : function (e, t, n) {
            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
          };
        }),
        has: le(function (t) {
          return function (e) {
            return 0 < se(t, e).length;
          };
        }),
        contains: le(function (t) {
          return t = t.replace(te, ne), function (e) {
            return -1 < (e.textContent || o(e)).indexOf(t);
          };
        }),
        lang: le(function (n) {
          return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
            var t;

            do {
              if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);

            return !1;
          };
        }),
        target: function target(e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function root(e) {
          return e === a;
        },
        focus: function focus(e) {
          return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: ge(!1),
        disabled: ge(!0),
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(e) {
          return !b.pseudos.empty(e);
        },
        header: function header(e) {
          return J.test(e.nodeName);
        },
        input: function input(e) {
          return Q.test(e.nodeName);
        },
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function text(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: ve(function () {
          return [0];
        }),
        last: ve(function (e, t) {
          return [t - 1];
        }),
        eq: ve(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: ve(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        odd: ve(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        lt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) {
            e.push(r);
          }

          return e;
        }),
        gt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) {
            e.push(r);
          }

          return e;
        })
      }
    }).pseudos.nth = b.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      b.pseudos[e] = de(e);
    }

    for (e in {
      submit: !0,
      reset: !0
    }) {
      b.pseudos[e] = he(e);
    }

    function me() {}

    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) {
        r += e[t].value;
      }

      return r;
    }

    function be(s, e, t) {
      var u = e.dir,
          l = e.next,
          c = l || u,
          f = t && "parentNode" === c,
          p = r++;
      return e.first ? function (e, t, n) {
        while (e = e[u]) {
          if (1 === e.nodeType || f) return s(e, t, n);
        }

        return !1;
      } : function (e, t, n) {
        var r,
            i,
            o,
            a = [k, p];

        if (n) {
          while (e = e[u]) {
            if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
          }
        } else while (e = e[u]) {
          if (1 === e.nodeType || f) if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;else {
            if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
            if ((i[c] = a)[2] = s(e, t, n)) return !0;
          }
        }

        return !1;
      };
    }

    function we(i) {
      return 1 < i.length ? function (e, t, n) {
        var r = i.length;

        while (r--) {
          if (!i[r](e, t, n)) return !1;
        }

        return !0;
      } : i[0];
    }

    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      }

      return a;
    }

    function Ce(d, h, g, v, y, e) {
      return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function (e, t, n, r) {
        var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c = e || function (e, t, n) {
          for (var r = 0, i = t.length; r < i; r++) {
            se(e, t[r], n);
          }

          return n;
        }(h || "*", n.nodeType ? [n] : n, []),
            f = !d || !e && h ? c : Te(c, s, d, n, r),
            p = g ? y || (e ? d : l || v) ? [] : t : f;

        if (g && g(f, p, n, r), v) {
          i = Te(p, u), v(i, [], n, r), o = i.length;

          while (o--) {
            (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
        }

        if (e) {
          if (y || d) {
            if (y) {
              i = [], o = p.length;

              while (o--) {
                (a = p[o]) && i.push(f[o] = a);
              }

              y(null, p = [], i, r);
            }

            o = p.length;

            while (o--) {
              (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
            }
          }
        } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p);
      });
    }

    function Ee(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
        return e === i;
      }, a, !0), l = be(function (e) {
        return -1 < P(i, e);
      }, a, !0), c = [function (e, t, n) {
        var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
        return i = null, r;
      }]; s < r; s++) {
        if (t = b.relative[e[s].type]) c = [be(we(c), t)];else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) {
              if (b.relative[e[n].type]) break;
            }

            return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
              value: " " === e[s - 2].type ? "*" : ""
            })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e));
          }

          c.push(t);
        }
      }

      return we(c);
    }

    return me.prototype = b.filters = b.pseudos, b.setFilters = new me(), h = se.tokenize = function (e, t) {
      var n,
          r,
          i,
          o,
          a,
          s,
          u,
          l = x[e + " "];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = b.preFilter;

      while (a) {
        for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace($, " ")
        }), a = a.slice(n.length)), b.filter) {
          !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
            value: n,
            type: o,
            matches: r
          }), a = a.slice(n.length));
        }

        if (!n) break;
      }

      return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
    }, f = se.compile = function (e, t) {
      var n,
          v,
          y,
          m,
          x,
          r,
          i = [],
          o = [],
          a = A[e + " "];

      if (!a) {
        t || (t = h(e)), n = t.length;

        while (n--) {
          (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
        }

        (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function r(e, t, n, _r, i) {
          var o,
              a,
              s,
              u = 0,
              l = "0",
              c = e && [],
              f = [],
              p = w,
              d = e || x && b.find.TAG("*", i),
              h = k += null == p ? 1 : Math.random() || .1,
              g = d.length;

          for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument == C || (T(o), n = !E);

              while (s = v[a++]) {
                if (s(o, t || C, n)) {
                  _r.push(o);

                  break;
                }
              }

              i && (k = h);
            }

            m && ((o = !s && o) && u--, e && c.push(o));
          }

          if (u += l, m && l !== u) {
            a = 0;

            while (s = y[a++]) {
              s(c, f, t, n);
            }

            if (e) {
              if (0 < u) while (l--) {
                c[l] || f[l] || (f[l] = q.call(_r));
              }
              f = Te(f);
            }

            H.apply(_r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(_r);
          }

          return i && (k = h, w = p), c;
        }, m ? le(r) : r))).selector = e;
      }

      return a;
    }, g = se.select = function (e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l = "function" == typeof e && e,
          c = !r && h(e = l.selector || e);

      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }

        i = G.needsContext.test(e) ? 0 : o.length;

        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;

          if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
            break;
          }
        }
      }

      return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
    }, d.sortStable = S.split("").sort(D).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
      return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
    }), ce(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || fe("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), d.attributes && ce(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || fe("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ce(function (e) {
      return null == e.getAttribute("disabled");
    }) || fe(R, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), se;
  }(C);

  S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;

  var h = function h(e, t, n) {
    var r = [],
        i = void 0 !== n;

    while ((e = e[t]) && 9 !== e.nodeType) {
      if (1 === e.nodeType) {
        if (i && S(e).is(n)) break;
        r.push(e);
      }
    }

    return r;
  },
      T = function T(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }

    return n;
  },
      k = S.expr.match.needsContext;

  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }

  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function D(e, n, r) {
    return m(n) ? S.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r;
    }) : n.nodeType ? S.grep(e, function (e) {
      return e === n !== r;
    }) : "string" != typeof n ? S.grep(e, function (e) {
      return -1 < i.call(n, e) !== r;
    }) : S.filter(n, e, r);
  }

  S.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, S.fn.extend({
    find: function find(e) {
      var t,
          n,
          r = this.length,
          i = this;
      if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
        for (t = 0; t < r; t++) {
          if (S.contains(i[t], this)) return !0;
        }
      }));

      for (n = this.pushStack([]), t = 0; t < r; t++) {
        S.find(e, i[t], n);
      }

      return 1 < r ? S.uniqueSort(n) : n;
    },
    filter: function filter(e) {
      return this.pushStack(D(this, e || [], !1));
    },
    not: function not(e) {
      return this.pushStack(D(this, e || [], !0));
    },
    is: function is(e) {
      return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length;
    }
  });
  var j,
      q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;

    if (n = n || j, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

      if (r[1]) {
        if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t)) for (r in t) {
          m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        }
        return this;
      }

      return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
    }

    return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this);
  }).prototype = S.fn, j = S(E);
  var L = /^(?:parents|prev(?:Until|All))/,
      H = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };

  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType) {
      ;
    }

    return e;
  }

  S.fn.extend({
    has: function has(e) {
      var t = S(e, this),
          n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (S.contains(this, t[e])) return !0;
        }
      });
    },
    closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && S(e);
      if (!k.test(e)) for (; r < i; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
            o.push(n);
            break;
          }
        }
      }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), S.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return h(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return h(e, "parentNode", n);
    },
    next: function next(e) {
      return O(e, "nextSibling");
    },
    prev: function prev(e) {
      return O(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return h(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return h(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return h(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return h(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return T((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return T(e.firstChild);
    },
    contents: function contents(e) {
      return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes));
    }
  }, function (r, i) {
    S.fn[r] = function (e, t) {
      var n = S.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n);
    };
  });
  var P = /[^\x20\t\r\n\f]+/g;

  function R(e) {
    return e;
  }

  function M(e) {
    throw e;
  }

  function I(e, t, n, r) {
    var i;

    try {
      e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }

  S.Callbacks = function (r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function (e, t) {
      n[t] = !0;
    }), n) : S.extend({}, r);

    var i,
        t,
        o,
        a,
        s = [],
        u = [],
        l = -1,
        c = function c() {
      for (a = a || r.once, o = i = !0; u.length; l = -1) {
        t = u.shift();

        while (++l < s.length) {
          !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
        }
      }

      r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
    },
        f = {
      add: function add() {
        return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
          S.each(e, function (e, t) {
            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
          });
        }(arguments), t && !i && c()), this;
      },
      remove: function remove() {
        return S.each(arguments, function (e, t) {
          var n;

          while (-1 < (n = S.inArray(t, s, n))) {
            s.splice(n, 1), n <= l && l--;
          }
        }), this;
      },
      has: function has(e) {
        return e ? -1 < S.inArray(e, s) : 0 < s.length;
      },
      empty: function empty() {
        return s && (s = []), this;
      },
      disable: function disable() {
        return a = u = [], s = t = "", this;
      },
      disabled: function disabled() {
        return !s;
      },
      lock: function lock() {
        return a = u = [], t || i || (s = t = ""), this;
      },
      locked: function locked() {
        return !!a;
      },
      fireWith: function fireWith(e, t) {
        return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this;
      },
      fire: function fire() {
        return f.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!o;
      }
    };

    return f;
  }, S.extend({
    Deferred: function Deferred(e) {
      var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]],
          i = "pending",
          a = {
        state: function state() {
          return i;
        },
        always: function always() {
          return s.done(arguments).fail(arguments), this;
        },
        "catch": function _catch(e) {
          return a.then(null, e);
        },
        pipe: function pipe() {
          var i = arguments;
          return S.Deferred(function (r) {
            S.each(o, function (e, t) {
              var n = m(i[t[4]]) && i[t[4]];
              s[t[1]](function () {
                var e = n && n.apply(this, arguments);
                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
              });
            }), i = null;
          }).promise();
        },
        then: function then(t, n, r) {
          var u = 0;

          function l(i, o, a, s) {
            return function () {
              var n = this,
                  r = arguments,
                  e = function e() {
                var e, t;

                if (!(i < u)) {
                  if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                  t = e && ("object" == _typeof(e) || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                }
              },
                  t = s ? e : function () {
                try {
                  e();
                } catch (e) {
                  S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r));
                }
              };

              i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t));
            };
          }

          return S.Deferred(function (e) {
            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M));
          }).promise();
        },
        promise: function promise(e) {
          return null != e ? S.extend(e, a) : a;
        }
      },
          s = {};
      return S.each(o, function (e, t) {
        var n = t[2],
            r = t[5];
        a[t[1]] = n.add, r && n.add(function () {
          i = r;
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
        }, s[t[0] + "With"] = n.fireWith;
      }), a.promise(s), e && e.call(s, s), s;
    },
    when: function when(e) {
      var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function a(t) {
        return function (e) {
          r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i);
        };
      };

      if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();

      while (t--) {
        I(i[t], a(t), o.reject);
      }

      return o.promise();
    }
  });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  S.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }, S.readyException = function (e) {
    C.setTimeout(function () {
      throw e;
    });
  };
  var F = S.Deferred();

  function B() {
    E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready();
  }

  S.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      S.readyException(e);
    }), this;
  }, S.extend({
    isReady: !1,
    readyWait: 1,
    ready: function ready(e) {
      (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S]);
    }
  }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));

  var $ = function $(e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;
    if ("object" === w(n)) for (s in i = !0, n) {
      $(e, t, s, n[s], !0, o, a);
    } else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
      return l.call(S(e), n);
    })), t)) for (; s < u; s++) {
      t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    }
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      _ = /^-ms-/,
      z = /-([a-z])/g;

  function U(e, t) {
    return t.toUpperCase();
  }

  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }

  var V = function V(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };

  function G() {
    this.expando = S.expando + G.uid++;
  }

  G.uid = 1, G.prototype = {
    cache: function cache(e) {
      var t = e[this.expando];
      return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function set(e, t, n) {
      var r,
          i = this.cache(e);
      if ("string" == typeof t) i[X(t)] = n;else for (r in t) {
        i[X(r)] = t[r];
      }
      return i;
    },
    get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
    },
    access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function remove(e, t) {
      var n,
          r = e[this.expando];

      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;

          while (n--) {
            delete r[t[n]];
          }
        }

        (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function hasData(e) {
      var t = e[this.expando];
      return void 0 !== t && !S.isEmptyObject(t);
    }
  };
  var Y = new G(),
      Q = new G(),
      J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      K = /[A-Z]/g;

  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i);
      } catch (e) {}

      Q.set(e, t, n);
    } else n = void 0;
    return n;
  }

  S.extend({
    hasData: function hasData(e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function data(e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function removeData(e, t) {
      Q.remove(e, t);
    },
    _data: function _data(e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function _removeData(e, t) {
      Y.remove(e, t);
    }
  }), S.fn.extend({
    data: function data(n, e) {
      var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;

      if (void 0 === n) {
        if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
          t = a.length;

          while (t--) {
            a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
          }

          Y.set(o, "hasDataAttrs", !0);
        }

        return i;
      }

      return "object" == _typeof(n) ? this.each(function () {
        Q.set(this, n);
      }) : $(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
        this.each(function () {
          Q.set(this, n, e);
        });
      }, null, e, 1 < arguments.length, null, !0);
    },
    removeData: function removeData(e) {
      return this.each(function () {
        Q.remove(this, e);
      });
    }
  }), S.extend({
    queue: function queue(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";

      var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);

      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        S.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return Y.get(e, n) || Y.access(e, n, {
        empty: S.Callbacks("once memory").add(function () {
          Y.remove(e, [t + "queue", n]);
        })
      });
    }
  }), S.fn.extend({
    queue: function queue(t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = S.queue(this, t, n);
        S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        S.dequeue(this, e);
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function s() {
        --r || i.resolveWith(o, [o]);
      };

      "string" != typeof e && (t = e, e = void 0), e = e || "fx";

      while (a--) {
        (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      }

      return s(), i.promise(t);
    }
  });

  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
      ne = ["Top", "Right", "Bottom", "Left"],
      re = E.documentElement,
      ie = function ie(e) {
    return S.contains(e.ownerDocument, e);
  },
      oe = {
    composed: !0
  };

  re.getRootNode && (ie = function ie(e) {
    return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
  });

  var ae = function ae(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display");
  };

  function se(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return S.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
        c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));

    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;

      while (a--) {
        S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      }

      c *= 2, S.style(e, t, c + l), n = n || [];
    }

    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }

  var ue = {};

  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) {
      (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
    }

    for (c = 0; c < f; c++) {
      null != l[c] && (e[c].style.display = l[c]);
    }

    return e;
  }

  S.fn.extend({
    show: function show() {
      return le(this, !0);
    },
    hide: function hide() {
      return le(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? S(this).show() : S(this).hide();
      });
    }
  });
  var ce,
      fe,
      pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i;
  ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };

  function ve(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n;
  }

  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
    }
  }

  ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;

  function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
      if ((o = e[d]) || 0 === o) if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);else if (me.test(o)) {
        a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];

        while (c--) {
          a = a.lastChild;
        }

        S.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
      } else p.push(t.createTextNode(o));
    }

    f.textContent = "", d = 0;

    while (o = p[d++]) {
      if (r && -1 < S.inArray(o, r)) i && i.push(o);else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
        c = 0;

        while (o = a[c++]) {
          he.test(o.type || "") && n.push(o);
        }
      }
    }

    return f;
  }

  var be = /^key/,
      we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Te = /^([^.]*)(?:\.(.+)|)/;

  function Ce() {
    return !0;
  }

  function Ee() {
    return !1;
  }

  function Se(e, t) {
    return e === function () {
      try {
        return E.activeElement;
      } catch (e) {}
    }() == ("focus" === t);
  }

  function ke(e, t, n, r, i, o) {
    var a, s;

    if ("object" == _typeof(t)) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) {
        ke(e, s, n, r, t[s], o);
      }

      return e;
    }

    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ee;else if (!i) return e;
    return 1 === o && (a = i, (i = function i(e) {
      return S().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = S.guid++)), e.each(function () {
      S.event.add(this, t, i, r, n);
    });
  }

  function Ae(e, i, o) {
    o ? (Y.set(e, i, !1), S.event.add(e, i, {
      namespace: !1,
      handler: function handler(e) {
        var t,
            n,
            r = Y.get(this, i);

        if (1 & e.isTrigger && this[i]) {
          if (r.length) (S.event.special[i] || {}).delegateType && e.stopPropagation();else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value;
        } else r.length && (Y.set(this, i, {
          value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
        }), e.stopImmediatePropagation());
      }
    })) : void 0 === Y.get(e, i) && S.event.add(e, i, Ce);
  }

  S.event = {
    global: {},
    add: function add(t, e, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Y.get(t);

      if (V(t)) {
        n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {
          return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0;
        }), l = (e = (e || "").match(P) || [""]).length;

        while (l--) {
          d = g = (s = Te.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
            type: d,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && S.expr.match.needsContext.test(i),
            namespace: h.join(".")
          }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0);
        }
      }
    },
    remove: function remove(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Y.hasData(e) && Y.get(e);

      if (v && (u = v.events)) {
        l = (t = (t || "").match(P) || [""]).length;

        while (l--) {
          if (d = g = (s = Te.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
            f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;

            while (o--) {
              c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            }

            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d]);
          } else for (d in u) {
            S.event.remove(e, d + t[l], n, r, !0);
          }
        }

        S.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function dispatch(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s = new Array(arguments.length),
          u = S.event.fix(e),
          l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
          c = S.event.special[u.type] || {};

      for (s[0] = u, t = 1; t < arguments.length; t++) {
        s[t] = arguments[t];
      }

      if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
        a = S.event.handlers.call(this, u, l), t = 0;

        while ((i = a[t++]) && !u.isPropagationStopped()) {
          u.currentTarget = i.elem, n = 0;

          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) {
            u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
          }
        }

        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function handlers(e, t) {
      var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (o = [], a = {}, n = 0; n < u; n++) {
            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
          }

          o.length && s.push({
            elem: l,
            handlers: o
          });
        }
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function addProp(t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[t];
        },
        set: function set(e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          });
        }
      });
    },
    fix: function fix(e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function setup(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce), !1;
        },
        trigger: function trigger(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0;
        },
        _default: function _default(e) {
          var t = e.target;
          return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, S.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, S.Event = function (e, t) {
    if (!(this instanceof S.Event)) return new S.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0;
  }, S.Event.prototype = {
    constructor: S.Event,
    isDefaultPrevented: Ee,
    isPropagationStopped: Ee,
    isImmediatePropagationStopped: Ee,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, S.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function which(e) {
      var t = e.button;
      return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    }
  }, S.event.addProp), S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    S.event.special[e] = {
      setup: function setup() {
        return Ae(this, e, Se), !1;
      },
      trigger: function trigger() {
        return Ae(this, e), !0;
      },
      delegateType: t
    };
  }), S.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, i) {
    S.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function handle(e) {
        var t,
            n = e.relatedTarget,
            r = e.handleObj;
        return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
      }
    };
  }), S.fn.extend({
    on: function on(e, t, n, r) {
      return ke(this, e, t, n, r);
    },
    one: function one(e, t, n, r) {
      return ke(this, e, t, n, r, 1);
    },
    off: function off(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

      if ("object" == _typeof(e)) {
        for (i in e) {
          this.off(i, t, e[i]);
        }

        return this;
      }

      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function () {
        S.event.remove(this, e, n, t);
      });
    }
  });
  var Ne = /<script|<style|<link/i,
      De = /checked\s*(?:[^=]|=\s*.checked.)/i,
      je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function qe(e, t) {
    return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e;
  }

  function Le(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }

  function He(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }

  function Oe(e, t) {
    var n, r, i, o, a, s;

    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events)) for (i in Y.remove(t, "handle events"), s) {
        for (n = 0, r = s[i].length; n < r; n++) {
          S.event.add(t, i, s[i][n]);
        }
      }
      Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a));
    }
  }

  function Pe(n, r, i, o) {
    r = g(r);
    var e,
        t,
        a,
        s,
        u,
        l,
        c = 0,
        f = n.length,
        p = f - 1,
        d = r[0],
        h = m(d);
    if (h || 1 < f && "string" == typeof d && !y.checkClone && De.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o);
    });

    if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++) {
        u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
      }

      if (s) for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++) {
        u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
          nonce: u.nonce || u.getAttribute("nonce")
        }, l) : b(u.textContent.replace(je, ""), u, l));
      }
    }

    return n;
  }

  function Re(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
      n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    }

    return e;
  }

  S.extend({
    htmlPrefilter: function htmlPrefilter(e) {
      return e;
    },
    clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = e.cloneNode(!0),
          f = ie(e);
      if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) {
        s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      }
      if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) {
        Oe(o[r], a[r]);
      } else Oe(e, c);
      return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c;
    },
    cleanData: function cleanData(e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (V(n)) {
          if (t = n[Y.expando]) {
            if (t.events) for (r in t.events) {
              i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            }
            n[Y.expando] = void 0;
          }

          n[Q.expando] && (n[Q.expando] = void 0);
        }
      }
    }
  }), S.fn.extend({
    detach: function detach(e) {
      return Re(this, e, !0);
    },
    remove: function remove(e) {
      return Re(this, e);
    },
    text: function text(e) {
      return $(this, function (e) {
        return void 0 === e ? S.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function append() {
      return Pe(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e);
      });
    },
    prepend: function prepend() {
      return Pe(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = qe(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return Pe(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return Pe(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
      }

      return this;
    },
    clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return S.clone(this, e, t);
      });
    },
    html: function html(e) {
      return $(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

        if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = S.htmlPrefilter(e);

          try {
            for (; n < r; n++) {
              1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
            }

            t = 0;
          } catch (e) {}
        }

        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var n = [];
      return Pe(this, arguments, function (e) {
        var t = this.parentNode;
        S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this));
      }, n);
    }
  }), S.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    S.fn[e] = function (e) {
      for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) {
        t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
      }

      return this.pushStack(n);
    };
  });

  var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
      Ie = function Ie(e) {
    var t = e.ownerDocument.defaultView;
    return t && t.opener || (t = C), t.getComputedStyle(e);
  },
      We = function We(e, t, n) {
    var r,
        i,
        o = {};

    for (i in t) {
      o[i] = e.style[i], e.style[i] = t[i];
    }

    for (i in r = n.call(e), t) {
      e.style[i] = o[i];
    }

    return r;
  },
      Fe = new RegExp(ne.join("|"), "i");

  function Be(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;
    return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }

  function $e(e, t) {
    return {
      get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }

  !function () {
    function e() {
      if (l) {
        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null;
      }
    }

    function t(e) {
      return Math.round(parseFloat(e));
    }

    var n,
        r,
        i,
        o,
        a,
        s,
        u = E.createElement("div"),
        l = E.createElement("div");
    l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
      boxSizingReliable: function boxSizingReliable() {
        return e(), r;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        return e(), o;
      },
      pixelPosition: function pixelPosition() {
        return e(), n;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        return e(), s;
      },
      scrollboxSize: function scrollboxSize() {
        return e(), i;
      },
      reliableTrDimensions: function reliableTrDimensions() {
        var e, t, n, r;
        return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", n.style.height = "9px", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = 3 < parseInt(r.height), re.removeChild(e)), a;
      }
    }));
  }();
  var _e = ["Webkit", "Moz", "ms"],
      ze = E.createElement("div").style,
      Ue = {};

  function Xe(e) {
    var t = S.cssProps[e] || Ue[e];
    return t || (e in ze ? e : Ue[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1),
          n = _e.length;

      while (n--) {
        if ((e = _e[n] + t) in ze) return e;
      }
    }(e) || e);
  }

  var Ve = /^(none|table(?!-c[ea]).+)/,
      Ge = /^--/,
      Ye = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Qe = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function Je(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }

  function Ke(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;
    if (n === (r ? "border" : "content")) return 0;

    for (; a < 4; a += 2) {
      "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
    }

    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u;
  }

  function Ze(e, t, n) {
    var r = Ie(e),
        i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
        o = i,
        a = Be(e, t, r),
        s = "offset" + t[0].toUpperCase() + t.slice(1);

    if (Me.test(a)) {
      if (!n) return a;
      a = "auto";
    }

    return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
  }

  function et(e, t, n, r, i) {
    return new et.prototype.init(e, t, n, r, i);
  }

  S.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = Be(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = X(t),
            u = Ge.test(t),
            l = e.style;
        if (u || (t = Xe(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = _typeof(n)) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function css(e, t, n, r) {
      var i,
          o,
          a,
          s = X(t);
      return Ge.test(t) || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), S.each(["height", "width"], function (e, u) {
    S.cssHooks[u] = {
      get: function get(e, t, n) {
        if (t) return !Ve.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : We(e, Ye, function () {
          return Ze(e, u, n);
        });
      },
      set: function set(e, t, n) {
        var r,
            i = Ie(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
            s = n ? Ke(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Je(0, t, s);
      }
    };
  }), S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), S.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (i, o) {
    S.cssHooks[i + o] = {
      expand: function expand(e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) {
          n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
        }

        return n;
      }
    }, "margin" !== i && (S.cssHooks[i + o].set = Je);
  }), S.fn.extend({
    css: function css(e, t) {
      return $(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;

        if (Array.isArray(t)) {
          for (r = Ie(e), i = t.length; a < i; a++) {
            o[t[a]] = S.css(e, t[a], !1, r);
          }

          return o;
        }

        return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
      }, e, t, 1 < arguments.length);
    }
  }), ((S.Tween = et).prototype = {
    constructor: et,
    init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = et.propHooks[this.prop];
      return e && e.get ? e.get(this) : et.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
          n = et.propHooks[this.prop];
      return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this;
    }
  }).init.prototype = et.prototype, (et.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function set(e) {
        S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }).scrollTop = et.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, S.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, S.fx = et.prototype.init, S.fx.step = {};
  var tt,
      nt,
      rt,
      it,
      ot = /^(?:toggle|show|hide)$/,
      at = /queueHooks$/;

  function st() {
    nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), S.fx.tick());
  }

  function ut() {
    return C.setTimeout(function () {
      tt = void 0;
    }), tt = Date.now();
  }

  function lt(e, t) {
    var n,
        r = 0,
        i = {
      height: e
    };

    for (t = t ? 1 : 0; r < 4; r += 2 - t) {
      i["margin" + (n = ne[r])] = i["padding" + n] = e;
    }

    return t && (i.opacity = i.width = e), i;
  }

  function ct(e, t, n) {
    for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }

  function ft(o, e, t) {
    var n,
        a,
        r = 0,
        i = ft.prefilters.length,
        s = S.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (a) return !1;

      for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) {
        l.tweens[r].run(n);
      }

      return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
    },
        l = s.promise({
      elem: o,
      props: S.extend({}, e),
      opts: S.extend(!0, {
        specialEasing: {},
        easing: S.easing._default
      }, t),
      originalProperties: e,
      originalOptions: t,
      startTime: tt || ut(),
      duration: t.duration,
      tweens: [],
      createTween: function createTween(e, t) {
        var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
        return l.tweens.push(n), n;
      },
      stop: function stop(e) {
        var t = 0,
            n = e ? l.tweens.length : 0;
        if (a) return this;

        for (a = !0; t < n; t++) {
          l.tweens[t].run(1);
        }

        return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
      }
    }),
        c = l.props;

    for (!function (e, t) {
      var n, r, i, o, a;

      for (n in e) {
        if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) {
          (n in e) || (e[n] = o[n], t[n] = i);
        } else t[r] = i;
      }
    }(c, l.opts.specialEasing); r < i; r++) {
      if (n = ft.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    }

    return S.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l;
  }

  S.Animation = S.extend(ft, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return se(n.elem, e, te.exec(t), n), n;
      }]
    },
    tweener: function tweener(e, t) {
      m(e) ? (t = e, e = ["*"]) : e = e.match(P);

      for (var n, r = 0, i = e.length; r < i; r++) {
        n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t);
      }
    },
    prefilters: [function (e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          v = Y.get(e, "fxshow");

      for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, p.always(function () {
        p.always(function () {
          a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
        });
      })), t) {
        if (i = t[r], ot.test(i)) {
          if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
            if ("show" !== i || !v || void 0 === v[r]) continue;
            g = !0;
          }

          d[r] = v && v[r] || S.style(e, r);
        }
      }

      if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1, d) {
        u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
          display: l
        }), o && (v.hidden = !g), g && le([e], !0), p.done(function () {
          for (r in g || le([e]), Y.remove(e, "fxshow"), d) {
            S.style(e, r, d[r]);
          }
        })), u = ct(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
      }
    }],
    prefilter: function prefilter(e, t) {
      t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
    }
  }), S.speed = function (e, t, n) {
    var r = e && "object" == _typeof(e) ? S.extend({}, e) : {
      complete: n || !n && t || m(e) && e,
      duration: e,
      easing: n && t || t && !m(t) && t
    };
    return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
    }, r;
  }, S.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(ae).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(t, e, n, r) {
      var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function a() {
        var e = ft(this, S.extend({}, t), o);
        (i || Y.get(this, "finish")) && e.stop(!0);
      };

      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function stop(i, e, o) {
      var a = function a(e) {
        var t = e.stop;
        delete e.stop, t(o);
      };

      return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
        var e = !0,
            t = null != i && i + "queueHooks",
            n = S.timers,
            r = Y.get(this);
        if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) {
          r[t] && r[t].stop && at.test(t) && a(r[t]);
        }

        for (t = n.length; t--;) {
          n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        }

        !e && o || S.dequeue(this, i);
      });
    },
    finish: function finish(a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e,
            t = Y.get(this),
            n = t[a + "queue"],
            r = t[a + "queueHooks"],
            i = S.timers,
            o = n ? n.length : 0;

        for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) {
          i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        }

        for (e = 0; e < o; e++) {
          n[e] && n[e].finish && n[e].finish.call(this);
        }

        delete t.finish;
      });
    }
  }), S.each(["toggle", "show", "hide"], function (e, r) {
    var i = S.fn[r];

    S.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n);
    };
  }), S.each({
    slideDown: lt("show"),
    slideUp: lt("hide"),
    slideToggle: lt("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, r) {
    S.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n);
    };
  }), S.timers = [], S.fx.tick = function () {
    var e,
        t = 0,
        n = S.timers;

    for (tt = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }

    n.length || S.fx.stop(), tt = void 0;
  }, S.fx.timer = function (e) {
    S.timers.push(e), S.fx.start();
  }, S.fx.interval = 13, S.fx.start = function () {
    nt || (nt = !0, st());
  }, S.fx.stop = function () {
    nt = null;
  }, S.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, S.fn.delay = function (r, e) {
    return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
      var n = C.setTimeout(e, r);

      t.stop = function () {
        C.clearTimeout(n);
      };
    });
  }, rt = E.createElement("input"), it = E.createElement("select").appendChild(E.createElement("option")), rt.type = "checkbox", y.checkOn = "" !== rt.value, y.optSelected = it.selected, (rt = E.createElement("input")).value = "t", rt.type = "radio", y.radioValue = "t" === rt.value;
  var pt,
      dt = S.expr.attrHandle;
  S.fn.extend({
    attr: function attr(e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    }
  }), S.extend({
    attr: function attr(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!y.radioValue && "radio" === t && A(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function removeAttr(e, t) {
      var n,
          r = 0,
          i = t && t.match(P);
      if (i && 1 === e.nodeType) while (n = i[r++]) {
        e.removeAttribute(n);
      }
    }
  }), pt = {
    set: function set(e, t, n) {
      return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = dt[t] || S.find.attr;

    dt[t] = function (e, t, n) {
      var r,
          i,
          o = t.toLowerCase();
      return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, dt[o] = i), r;
    };
  });
  var ht = /^(?:input|select|textarea|button)$/i,
      gt = /^(?:a|area)$/i;

  function vt(e) {
    return (e.match(P) || []).join(" ");
  }

  function yt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }

  function mt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [];
  }

  S.fn.extend({
    prop: function prop(e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    }
  }), S.extend({
    prop: function prop(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = S.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), y.optSelected || (S.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function set(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    S.propFix[this.toLowerCase()] = this;
  }), S.fn.extend({
    addClass: function addClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).addClass(t.call(this, e, yt(this)));
      });
      if ((e = mt(t)).length) while (n = this[u++]) {
        if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
          }

          i !== (s = vt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    removeClass: function removeClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).removeClass(t.call(this, e, yt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((e = mt(t)).length) while (n = this[u++]) {
        if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            while (-1 < r.indexOf(" " + o + " ")) {
              r = r.replace(" " + o + " ", " ");
            }
          }

          i !== (s = vt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(i, t) {
      var o = _typeof(i),
          a = "string" === o || Array.isArray(i);

      return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
        S(this).toggleClass(i.call(this, e, yt(this), t), t);
      }) : this.each(function () {
        var e, t, n, r;

        if (a) {
          t = 0, n = S(this), r = mt(i);

          while (e = r[t++]) {
            n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
          }
        } else void 0 !== i && "boolean" !== o || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(e) {
      var t,
          n,
          r = 0;
      t = " " + e + " ";

      while (n = this[r++]) {
        if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t)) return !0;
      }

      return !1;
    }
  });
  var xt = /\r/g;
  S.fn.extend({
    val: function val(n) {
      var r,
          e,
          i,
          t = this[0];
      return arguments.length ? (i = m(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) {
          return null == e ? "" : e + "";
        })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
      })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0;
    }
  }), S.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = S.find.attr(e, "value");
          return null != t ? t : vt(S.text(e));
        }
      },
      select: {
        get: function get(e) {
          var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;

          for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
              if (t = S(n).val(), a) return t;
              s.push(t);
            }
          }

          return s;
        },
        set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;

          while (a--) {
            ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
          }

          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), S.each(["radio", "checkbox"], function () {
    S.valHooks[this] = {
      set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t);
      }
    }, y.checkOn || (S.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), y.focusin = "onfocusin" in C;

  var bt = /^(?:focusinfocus|focusoutblur)$/,
      wt = function wt(e) {
    e.stopPropagation();
  };

  S.extend(S.event, {
    trigger: function trigger(e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p = [n || E],
          d = v.call(e, "type") ? e.type : e,
          h = v.call(e, "namespace") ? e.namespace.split(".") : [];

      if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == _typeof(e) && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) {
            p.push(o), a = o;
          }

          a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
        }

        i = 0;

        while ((o = p[i++]) && !e.isPropagationStopped()) {
          f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        }

        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), S.event.triggered = void 0, a && (n[u] = a)), e.result;
      }
    },
    simulate: function simulate(e, t, n) {
      var r = S.extend(new S.Event(), n, {
        type: e,
        isSimulated: !0
      });
      S.event.trigger(r, null, t);
    }
  }), S.fn.extend({
    trigger: function trigger(e, t) {
      return this.each(function () {
        S.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      if (n) return S.event.trigger(e, t, n, !0);
    }
  }), y.focusin || S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (n, r) {
    var i = function i(e) {
      S.event.simulate(r, e.target, S.event.fix(e));
    };

    S.event.special[r] = {
      setup: function setup() {
        var e = this.ownerDocument || this.document || this,
            t = Y.access(e, r);
        t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
      },
      teardown: function teardown() {
        var e = this.ownerDocument || this.document || this,
            t = Y.access(e, r) - 1;
        t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r));
      }
    };
  });
  var Tt = C.location,
      Ct = {
    guid: Date.now()
  },
      Et = /\?/;

  S.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;

    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }

    return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t;
  };

  var St = /\[\]$/,
      kt = /\r?\n/g,
      At = /^(?:submit|button|image|reset|file)$/i,
      Nt = /^(?:input|select|textarea|keygen)/i;

  function Dt(n, e, r, i) {
    var t;
    if (Array.isArray(e)) S.each(e, function (e, t) {
      r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == _typeof(t) && null != t ? e : "") + "]", t, r, i);
    });else if (r || "object" !== w(e)) i(n, e);else for (t in e) {
      Dt(n + "[" + t + "]", e[t], r, i);
    }
  }

  S.param = function (e, t) {
    var n,
        r = [],
        i = function i(e, t) {
      var n = m(t) ? t() : t;
      r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };

    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) {
      Dt(n, e[n], t, i);
    }
    return r.join("&");
  }, S.fn.extend({
    serialize: function serialize() {
      return S.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = S.prop(this, "elements");
        return e ? S.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = S(this).val();
        return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(kt, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(kt, "\r\n")
        };
      }).get();
    }
  });
  var jt = /%20/g,
      qt = /#.*$/,
      Lt = /([?&])_=[^&]*/,
      Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Ot = /^(?:GET|HEAD)$/,
      Pt = /^\/\//,
      Rt = {},
      Mt = {},
      It = "*/".concat("*"),
      Wt = E.createElement("a");

  function Ft(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n,
          r = 0,
          i = e.toLowerCase().match(P) || [];
      if (m(t)) while (n = i[r++]) {
        "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
      }
    };
  }

  function Bt(t, i, o, a) {
    var s = {},
        u = t === Mt;

    function l(e) {
      var r;
      return s[e] = !0, S.each(t[e] || [], function (e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
      }), r;
    }

    return l(i.dataTypes[0]) || !s["*"] && l("*");
  }

  function $t(e, t) {
    var n,
        r,
        i = S.ajaxSettings.flatOptions || {};

    for (n in t) {
      void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    }

    return r && S.extend(!0, e, r), e;
  }

  Wt.href = Tt.href, S.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Tt.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": It,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": S.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e);
    },
    ajaxPrefilter: Ft(Rt),
    ajaxTransport: Ft(Mt),
    ajax: function ajax(e, t) {
      "object" == _typeof(e) && (t = e, e = void 0), t = t || {};
      var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = S.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(),
          b = S.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(e) {
          var t;

          if (h) {
            if (!n) {
              n = {};

              while (t = Ht.exec(p)) {
                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
              }
            }

            t = n[e.toLowerCase() + " "];
          }

          return null == t ? null : t.join(", ");
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return h ? p : null;
        },
        setRequestHeader: function setRequestHeader(e, t) {
          return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this;
        },
        overrideMimeType: function overrideMimeType(e) {
          return null == h && (v.mimeType = e), this;
        },
        statusCode: function statusCode(e) {
          var t;
          if (e) if (h) T.always(e[T.status]);else for (t in e) {
            w[t] = [w[t], e[t]];
          }
          return this;
        },
        abort: function abort(e) {
          var t = e || u;
          return c && c.abort(t), l(0, t), this;
        }
      };

      if (x.promise(T), v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
        r = E.createElement("a");

        try {
          r.href = v.url, r.href = r.href, v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host;
        } catch (e) {
          v.crossDomain = !0;
        }
      }

      if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Bt(Rt, v, t, T), h) return T;

      for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ot.test(v.type), f = v.url.replace(qt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Et.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Lt, "$1"), o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v.accepts["*"]), v.headers) {
        T.setRequestHeader(i, v.headers[i]);
      }

      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();

      if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Bt(Mt, v, t, T)) {
        if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
        v.async && 0 < v.timeout && (d = C.setTimeout(function () {
          T.abort("timeout");
        }, v.timeout));

        try {
          h = !1, c.send(a, l);
        } catch (e) {
          if (h) throw e;
          l(-1, e);
        }
      } else l(-1, "No Transport");

      function l(e, t, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l = t;
        h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          var r,
              i,
              o,
              a,
              s = e.contents,
              u = e.dataTypes;

          while ("*" === u[0]) {
            u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
          }

          if (r) for (i in s) {
            if (s[i] && s[i].test(r)) {
              u.unshift(i);
              break;
            }
          }
          if (u[0] in n) o = u[0];else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = i;
                break;
              }

              a || (a = i);
            }

            o = o || a;
          }
          if (o) return o !== u[0] && u.unshift(o), n[o];
        }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function () {}), s = function (e, t, n, r) {
          var i,
              o,
              a,
              s,
              u,
              l = {},
              c = e.dataTypes.slice();
          if (c[1]) for (a in e.converters) {
            l[a.toLowerCase()] = e.converters[a];
          }
          o = c.shift();

          while (o) {
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
              if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                  !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                  break;
                }
              }
              if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
                t = a(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + u + " to " + o
                };
              }
            }
          }

          return {
            state: "success",
            data: t
          };
        }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")));
      }

      return T;
    },
    getJSON: function getJSON(e, t, n) {
      return S.get(e, t, n, "json");
    },
    getScript: function getScript(e, t) {
      return S.get(e, void 0, t, "script");
    }
  }), S.each(["get", "post"], function (e, i) {
    S[i] = function (e, t, n, r) {
      return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, S.isPlainObject(e) && e));
    };
  }), S.ajaxPrefilter(function (e) {
    var t;

    for (t in e.headers) {
      "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
    }
  }), S._evalUrl = function (e, t, n) {
    return S.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function textScript() {}
      },
      dataFilter: function dataFilter(e) {
        S.globalEval(e, t, n);
      }
    });
  }, S.fn.extend({
    wrapAll: function wrapAll(e) {
      var t;
      return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;

        while (e.firstElementChild) {
          e = e.firstElementChild;
        }

        return e;
      }).append(this)), this;
    },
    wrapInner: function wrapInner(n) {
      return m(n) ? this.each(function (e) {
        S(this).wrapInner(n.call(this, e));
      }) : this.each(function () {
        var e = S(this),
            t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n);
      });
    },
    wrap: function wrap(t) {
      var n = m(t);
      return this.each(function (e) {
        S(this).wrapAll(n ? t.call(this, e) : t);
      });
    },
    unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        S(this).replaceWith(this.childNodes);
      }), this;
    }
  }), S.expr.pseudos.hidden = function (e) {
    return !S.expr.pseudos.visible(e);
  }, S.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, S.ajaxSettings.xhr = function () {
    try {
      return new C.XMLHttpRequest();
    } catch (e) {}
  };
  var _t = {
    0: 200,
    1223: 204
  },
      zt = S.ajaxSettings.xhr();
  y.cors = !!zt && "withCredentials" in zt, y.ajax = zt = !!zt, S.ajaxTransport(function (i) {
    var _o, a;

    if (y.cors || zt && !i.crossDomain) return {
      send: function send(e, t) {
        var n,
            r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) {
          r[n] = i.xhrFields[n];
        }

        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) {
          r.setRequestHeader(n, e[n]);
        }

        _o = function o(e) {
          return function () {
            _o && (_o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
              binary: r.response
            } : {
              text: r.responseText
            }, r.getAllResponseHeaders()));
          };
        }, r.onload = _o(), a = r.onerror = r.ontimeout = _o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          4 === r.readyState && C.setTimeout(function () {
            _o && a();
          });
        }, _o = _o("abort");

        try {
          r.send(i.hasContent && i.data || null);
        } catch (e) {
          if (_o) throw e;
        }
      },
      abort: function abort() {
        _o && _o();
      }
    };
  }), S.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), S.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(e) {
        return S.globalEval(e), e;
      }
    }
  }), S.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), S.ajaxTransport("script", function (n) {
    var r, _i;

    if (n.crossDomain || n.scriptAttrs) return {
      send: function send(e, t) {
        r = S("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", _i = function i(e) {
          r.remove(), _i = null, e && t("error" === e.type ? 404 : 200, e.type);
        }), E.head.appendChild(r[0]);
      },
      abort: function abort() {
        _i && _i();
      }
    };
  });
  var Ut,
      Xt = [],
      Vt = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = Xt.pop() || S.expando + "_" + Ct.guid++;
      return this[e] = !0, e;
    }
  }), S.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r,
        i,
        o,
        a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || S.error(r + " was not called"), o[0];
    }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
      o = arguments;
    }, n.always(function () {
      void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Xt.push(r)), o && m(i) && i(o[0]), o = i = void 0;
    }), "script";
  }), y.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), S.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
    var r, i, o;
  }, S.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
    return -1 < s && (r = vt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), 0 < a.length && S.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, S.expr.pseudos.animated = function (t) {
    return S.grep(S.timers, function (e) {
      return t === e.elem;
    }).length;
  }, S.offset = {
    setOffset: function setOffset(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, "position"),
          c = S(e),
          f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f));
    }
  }, S.fn.extend({
    offset: function offset(t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        S.offset.setOffset(this, t, e);
      });
      var e,
          n,
          r = this[0];
      return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0;
    },
    position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            r = this[0],
            i = {
          top: 0,
          left: 0
        };
        if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;

          while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) {
            e = e.parentNode;
          }

          e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - S.css(r, "marginTop", !0),
          left: t.left - i.left - S.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;

        while (e && "static" === S.css(e, "position")) {
          e = e.offsetParent;
        }

        return e || re;
      });
    }
  }), S.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, i) {
    var o = "pageYOffset" === i;

    S.fn[t] = function (e) {
      return $(this, function (e, t, n) {
        var r;
        if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
      }, t, e, arguments.length);
    };
  }), S.each(["top", "left"], function (e, n) {
    S.cssHooks[n] = $e(y.pixelPosition, function (e, t) {
      if (t) return t = Be(e, n), Me.test(t) ? S(e).position()[n] + "px" : t;
    });
  }), S.each({
    Height: "height",
    Width: "width"
  }, function (a, s) {
    S.each({
      padding: "inner" + a,
      content: s,
      "": "outer" + a
    }, function (r, o) {
      S.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
            i = r || (!0 === e || !0 === t ? "margin" : "border");
        return $(this, function (e, t, n) {
          var r;
          return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i);
        }, s, n ? e : void 0, n);
      };
    });
  }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    S.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), S.fn.extend({
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    },
    hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    S.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
    };
  });
  var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  S.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function i() {
      return e.apply(t || this, r.concat(s.call(arguments)));
    }).guid = e.guid = e.guid || S.guid++, i;
  }, S.holdReady = function (e) {
    e ? S.readyWait++ : S.ready(!0);
  }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function (e) {
    var t = S.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, S.trim = function (e) {
    return null == e ? "" : (e + "").replace(Gt, "");
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return S;
  });
  var Yt = C.jQuery,
      Qt = C.$;
  return S.noConflict = function (e) {
    return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S;
  }, "undefined" == typeof e && (C.jQuery = C.$ = S), S;
}); // DOM.event.move
//
// 2.0.0
//
// Stephen Band
//
// Triggers 'movestart', 'move' and 'moveend' events after
// mousemoves following a mousedown cross a distance threshold,
// similar to the native 'dragstart', 'drag' and 'dragend' events.
// Move events are throttled to animation frames. Move event objects
// have the properties:
//
// pageX:
// pageY:     Page coordinates of pointer.
// startX:
// startY:    Page coordinates of pointer at movestart.
// distX:
// distY:     Distance the pointer has moved since movestart.
// deltaX:
// deltaY:    Distance the finger has moved since last event.
// velocityX:
// velocityY: Average velocity over last few events.

(function (fn) {
  if (typeof define === 'function' && define.amd) {
    define([], fn);
  } else if (typeof module !== "undefined" && module !== null && module.exports) {
    module.exports = fn;
  } else {
    fn();
  }
})(function () {
  var assign = Object.assign || window.jQuery && jQuery.extend; // Number of pixels a pressed pointer travels before movestart
  // event is fired.

  var threshold = 8; // Shim for requestAnimationFrame, falling back to timer. See:
  // see http://paulirish.com/2011/requestanimationframe-for-smart-animating/

  var requestFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (fn, element) {
      return window.setTimeout(function () {
        fn();
      }, 25);
    };
  }(); // Shim for customEvent
  // see https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill


  (function () {
    if (typeof window.CustomEvent === "function") return false;

    function CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
  })();

  var ignoreTags = {
    textarea: true,
    input: true,
    select: true,
    button: true
  };
  var mouseevents = {
    move: 'mousemove',
    cancel: 'mouseup dragstart',
    end: 'mouseup'
  };
  var touchevents = {
    move: 'touchmove',
    cancel: 'touchend',
    end: 'touchend'
  };
  var rspaces = /\s+/; // DOM Events

  var eventOptions = {
    bubbles: true,
    cancelable: true
  };
  var eventsSymbol = typeof Symbol === "function" ? Symbol('events') : {};

  function createEvent(type) {
    return new CustomEvent(type, eventOptions);
  }

  function getEvents(node) {
    return node[eventsSymbol] || (node[eventsSymbol] = {});
  }

  function on(node, types, fn, data, selector) {
    types = types.split(rspaces);
    var events = getEvents(node);
    var i = types.length;
    var handlers, type;

    function handler(e) {
      fn(e, data);
    }

    while (i--) {
      type = types[i];
      handlers = events[type] || (events[type] = []);
      handlers.push([fn, handler]);
      node.addEventListener(type, handler);
    }
  }

  function off(node, types, fn, selector) {
    types = types.split(rspaces);
    var events = getEvents(node);
    var i = types.length;
    var type, handlers, k;

    if (!events) {
      return;
    }

    while (i--) {
      type = types[i];
      handlers = events[type];

      if (!handlers) {
        continue;
      }

      k = handlers.length;

      while (k--) {
        if (handlers[k][0] === fn) {
          node.removeEventListener(type, handlers[k][1]);
          handlers.splice(k, 1);
        }
      }
    }
  }

  function trigger(node, type, properties) {
    // Don't cache events. It prevents you from triggering an event of a
    // given type from inside the handler of another event of that type.
    var event = createEvent(type);

    if (properties) {
      assign(event, properties);
    }

    node.dispatchEvent(event);
  } // Constructors


  function Timer(fn) {
    var callback = fn,
        active = false,
        running = false;

    function trigger(time) {
      if (active) {
        callback();
        requestFrame(trigger);
        running = true;
        active = false;
      } else {
        running = false;
      }
    }

    this.kick = function (fn) {
      active = true;

      if (!running) {
        trigger();
      }
    };

    this.end = function (fn) {
      var cb = callback;

      if (!fn) {
        return;
      } // If the timer is not running, simply call the end callback.


      if (!running) {
        fn();
      } // If the timer is running, and has been kicked lately, then
      // queue up the current callback and the end callback, otherwise
      // just the end callback.
      else {
        callback = active ? function () {
          cb();
          fn();
        } : fn;
        active = true;
      }
    };
  } // Functions


  function noop() {}

  function preventDefault(e) {
    e.preventDefault();
  }

  function isIgnoreTag(e) {
    return !!ignoreTags[e.target.tagName.toLowerCase()];
  }

  function isPrimaryButton(e) {
    // Ignore mousedowns on any button other than the left (or primary)
    // mouse button, or when a modifier key is pressed.
    return e.which === 1 && !e.ctrlKey && !e.altKey;
  }

  function identifiedTouch(touchList, id) {
    var i, l;

    if (touchList.identifiedTouch) {
      return touchList.identifiedTouch(id);
    } // touchList.identifiedTouch() does not exist in
    // webkit yet… we must do the search ourselves...


    i = -1;
    l = touchList.length;

    while (++i < l) {
      if (touchList[i].identifier === id) {
        return touchList[i];
      }
    }
  }

  function changedTouch(e, data) {
    var touch = identifiedTouch(e.changedTouches, data.identifier); // This isn't the touch you're looking for.

    if (!touch) {
      return;
    } // Chrome Android (at least) includes touches that have not
    // changed in e.changedTouches. That's a bit annoying. Check
    // that this touch has changed.


    if (touch.pageX === data.pageX && touch.pageY === data.pageY) {
      return;
    }

    return touch;
  } // Handlers that decide when the first movestart is triggered


  function mousedown(e) {
    // Ignore non-primary buttons
    if (!isPrimaryButton(e)) {
      return;
    } // Ignore form and interactive elements


    if (isIgnoreTag(e)) {
      return;
    }

    on(document, mouseevents.move, mousemove, e);
    on(document, mouseevents.cancel, mouseend, e);
  }

  function mousemove(e, data) {
    checkThreshold(e, data, e, removeMouse);
  }

  function mouseend(e, data) {
    removeMouse();
  }

  function removeMouse() {
    off(document, mouseevents.move, mousemove);
    off(document, mouseevents.cancel, mouseend);
  }

  function touchstart(e) {
    // Don't get in the way of interaction with form elements
    if (ignoreTags[e.target.tagName.toLowerCase()]) {
      return;
    }

    var touch = e.changedTouches[0]; // iOS live updates the touch objects whereas Android gives us copies.
    // That means we can't trust the touchstart object to stay the same,
    // so we must copy the data. This object acts as a template for
    // movestart, move and moveend event objects.

    var data = {
      target: touch.target,
      pageX: touch.pageX,
      pageY: touch.pageY,
      identifier: touch.identifier,
      // The only way to make handlers individually unbindable is by
      // making them unique.
      touchmove: function touchmove(e, data) {
        _touchmove(e, data);
      },
      touchend: function touchend(e, data) {
        _touchend(e, data);
      }
    };
    on(document, touchevents.move, data.touchmove, data);
    on(document, touchevents.cancel, data.touchend, data);
  }

  function _touchmove(e, data) {
    var touch = changedTouch(e, data);

    if (!touch) {
      return;
    }

    checkThreshold(e, data, touch, removeTouch);
  }

  function _touchend(e, data) {
    var touch = identifiedTouch(e.changedTouches, data.identifier);

    if (!touch) {
      return;
    }

    removeTouch(data);
  }

  function removeTouch(data) {
    off(document, touchevents.move, data.touchmove);
    off(document, touchevents.cancel, data.touchend);
  }

  function checkThreshold(e, data, touch, fn) {
    var distX = touch.pageX - data.pageX;
    var distY = touch.pageY - data.pageY; // Do nothing if the threshold has not been crossed.

    if (distX * distX + distY * distY < threshold * threshold) {
      return;
    }

    triggerStart(e, data, touch, distX, distY, fn);
  }

  function triggerStart(e, data, touch, distX, distY, fn) {
    var touches = e.targetTouches;
    var time = e.timeStamp - data.timeStamp; // Create a movestart object with some special properties that
    // are passed only to the movestart handlers.

    var template = {
      altKey: e.altKey,
      ctrlKey: e.ctrlKey,
      shiftKey: e.shiftKey,
      startX: data.pageX,
      startY: data.pageY,
      distX: distX,
      distY: distY,
      deltaX: distX,
      deltaY: distY,
      pageX: touch.pageX,
      pageY: touch.pageY,
      velocityX: distX / time,
      velocityY: distY / time,
      identifier: data.identifier,
      targetTouches: touches,
      finger: touches ? touches.length : 1,
      enableMove: function enableMove() {
        this.moveEnabled = true;
        this.enableMove = noop;
        e.preventDefault();
      }
    }; // Trigger the movestart event.

    trigger(data.target, 'movestart', template); // Unbind handlers that tracked the touch or mouse up till now.

    fn(data);
  } // Handlers that control what happens following a movestart


  function activeMousemove(e, data) {
    var timer = data.timer;
    data.touch = e;
    data.timeStamp = e.timeStamp;
    timer.kick();
  }

  function activeMouseend(e, data) {
    var target = data.target;
    var event = data.event;
    var timer = data.timer;
    removeActiveMouse();
    endEvent(target, event, timer, function () {
      // Unbind the click suppressor, waiting until after mouseup
      // has been handled.
      setTimeout(function () {
        off(target, 'click', preventDefault);
      }, 0);
    });
  }

  function removeActiveMouse() {
    off(document, mouseevents.move, activeMousemove);
    off(document, mouseevents.end, activeMouseend);
  }

  function activeTouchmove(e, data) {
    var event = data.event;
    var timer = data.timer;
    var touch = changedTouch(e, event);

    if (!touch) {
      return;
    } // Stop the interface from gesturing


    e.preventDefault();
    event.targetTouches = e.targetTouches;
    data.touch = touch;
    data.timeStamp = e.timeStamp;
    timer.kick();
  }

  function activeTouchend(e, data) {
    var target = data.target;
    var event = data.event;
    var timer = data.timer;
    var touch = identifiedTouch(e.changedTouches, event.identifier); // This isn't the touch you're looking for.

    if (!touch) {
      return;
    }

    removeActiveTouch(data);
    endEvent(target, event, timer);
  }

  function removeActiveTouch(data) {
    off(document, touchevents.move, data.activeTouchmove);
    off(document, touchevents.end, data.activeTouchend);
  } // Logic for triggering move and moveend events


  function updateEvent(event, touch, timeStamp) {
    var time = timeStamp - event.timeStamp;
    event.distX = touch.pageX - event.startX;
    event.distY = touch.pageY - event.startY;
    event.deltaX = touch.pageX - event.pageX;
    event.deltaY = touch.pageY - event.pageY; // Average the velocity of the last few events using a decay
    // curve to even out spurious jumps in values.

    event.velocityX = 0.3 * event.velocityX + 0.7 * event.deltaX / time;
    event.velocityY = 0.3 * event.velocityY + 0.7 * event.deltaY / time;
    event.pageX = touch.pageX;
    event.pageY = touch.pageY;
  }

  function endEvent(target, event, timer, fn) {
    timer.end(function () {
      trigger(target, 'moveend', event);
      return fn && fn();
    });
  } // Set up the DOM


  function movestart(e) {
    if (e.defaultPrevented) {
      return;
    }

    if (!e.moveEnabled) {
      return;
    }

    var event = {
      startX: e.startX,
      startY: e.startY,
      pageX: e.pageX,
      pageY: e.pageY,
      distX: e.distX,
      distY: e.distY,
      deltaX: e.deltaX,
      deltaY: e.deltaY,
      velocityX: e.velocityX,
      velocityY: e.velocityY,
      identifier: e.identifier,
      targetTouches: e.targetTouches,
      finger: e.finger
    };
    var data = {
      target: e.target,
      event: event,
      timer: new Timer(update),
      touch: undefined,
      timeStamp: e.timeStamp
    };

    function update(time) {
      updateEvent(event, data.touch, data.timeStamp);
      trigger(data.target, 'move', event);
    }

    if (e.identifier === undefined) {
      // We're dealing with a mouse event.
      // Stop clicks from propagating during a move
      on(e.target, 'click', preventDefault);
      on(document, mouseevents.move, activeMousemove, data);
      on(document, mouseevents.end, activeMouseend, data);
    } else {
      // In order to unbind correct handlers they have to be unique
      data.activeTouchmove = function (e, data) {
        activeTouchmove(e, data);
      };

      data.activeTouchend = function (e, data) {
        activeTouchend(e, data);
      }; // We're dealing with a touch.


      on(document, touchevents.move, data.activeTouchmove, data);
      on(document, touchevents.end, data.activeTouchend, data);
    }
  }

  on(document, 'mousedown', mousedown);
  on(document, 'touchstart', touchstart);
  on(document, 'movestart', movestart); // jQuery special events
  //
  // jQuery event objects are copies of DOM event objects. They need
  // a little help copying the move properties across.

  if (!window.jQuery) {
    return;
  }

  var properties = "startX startY pageX pageY distX distY deltaX deltaY velocityX velocityY".split(' ');

  function enableMove1(e) {
    e.enableMove();
  }

  function enableMove2(e) {
    e.enableMove();
  }

  function enableMove3(e) {
    e.enableMove();
  }

  function add(handleObj) {
    var handler = handleObj.handler;

    handleObj.handler = function (e) {
      // Copy move properties across from originalEvent
      var i = properties.length;
      var property;

      while (i--) {
        property = properties[i];
        e[property] = e.originalEvent[property];
      }

      handler.apply(this, arguments);
    };
  }

  jQuery.event.special.movestart = {
    setup: function setup() {
      // Movestart must be enabled to allow other move events
      on(this, 'movestart', enableMove1); // Do listen to DOM events

      return false;
    },
    teardown: function teardown() {
      off(this, 'movestart', enableMove1);
      return false;
    },
    add: add
  };
  jQuery.event.special.move = {
    setup: function setup() {
      on(this, 'movestart', enableMove2);
      return false;
    },
    teardown: function teardown() {
      off(this, 'movestart', enableMove2);
      return false;
    },
    add: add
  };
  jQuery.event.special.moveend = {
    setup: function setup() {
      on(this, 'movestart', enableMove3);
      return false;
    },
    teardown: function teardown() {
      off(this, 'movestart', enableMove3);
      return false;
    },
    add: add
  };
}); // jQuery Mask Plugin v1.14.16
// github.com/igorescobar/jQuery-Mask-Plugin
// var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(a,n,f){a instanceof String&&(a=String(a));for(var p=a.length,k=0;k<p;k++){var b=a[k];if(n.call(f,b,k,a))return{i:k,v:b}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;
// $jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,n,f){a!=Array.prototype&&a!=Object.prototype&&(a[n]=f.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);
// $jscomp.polyfill=function(a,n,f,p){if(n){f=$jscomp.global;a=a.split(".");for(p=0;p<a.length-1;p++){var k=a[p];k in f||(f[k]={});f=f[k]}a=a[a.length-1];p=f[a];n=n(p);n!=p&&null!=n&&$jscomp.defineProperty(f,a,{configurable:!0,writable:!0,value:n})}};$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,f){return $jscomp.findInternal(this,a,f).v}},"es6","es3");
// (function(a,n,f){"function"===typeof define&&define.amd?define(["jquery"],a):"object"===typeof exports&&"undefined"===typeof Meteor?module.exports=a(require("jquery")):a(n||f)})(function(a){var n=function(b,d,e){var c={invalid:[],getCaret:function(){try{var a=0,r=b.get(0),h=document.selection,d=r.selectionStart;if(h&&-1===navigator.appVersion.indexOf("MSIE 10")){var e=h.createRange();e.moveStart("character",-c.val().length);a=e.text.length}else if(d||"0"===d)a=d;return a}catch(C){}},setCaret:function(a){try{if(b.is(":focus")){var c=
// b.get(0);if(c.setSelectionRange)c.setSelectionRange(a,a);else{var g=c.createTextRange();g.collapse(!0);g.moveEnd("character",a);g.moveStart("character",a);g.select()}}}catch(B){}},events:function(){b.on("keydown.mask",function(a){b.data("mask-keycode",a.keyCode||a.which);b.data("mask-previus-value",b.val());b.data("mask-previus-caret-pos",c.getCaret());c.maskDigitPosMapOld=c.maskDigitPosMap}).on(a.jMaskGlobals.useInput?"input.mask":"keyup.mask",c.behaviour).on("paste.mask drop.mask",function(){setTimeout(function(){b.keydown().keyup()},
// 100)}).on("change.mask",function(){b.data("changed",!0)}).on("blur.mask",function(){f===c.val()||b.data("changed")||b.trigger("change");b.data("changed",!1)}).on("blur.mask",function(){f=c.val()}).on("focus.mask",function(b){!0===e.selectOnFocus&&a(b.target).select()}).on("focusout.mask",function(){e.clearIfNotMatch&&!k.test(c.val())&&c.val("")})},getRegexMask:function(){for(var a=[],b,c,e,t,f=0;f<d.length;f++)(b=l.translation[d.charAt(f)])?(c=b.pattern.toString().replace(/.{1}$|^.{1}/g,""),e=b.optional,
// (b=b.recursive)?(a.push(d.charAt(f)),t={digit:d.charAt(f),pattern:c}):a.push(e||b?c+"?":c)):a.push(d.charAt(f).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"));a=a.join("");t&&(a=a.replace(new RegExp("("+t.digit+"(.*"+t.digit+")?)"),"($1)?").replace(new RegExp(t.digit,"g"),t.pattern));return new RegExp(a)},destroyEvents:function(){b.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))},val:function(a){var c=b.is("input")?"val":"text";if(0<arguments.length){if(b[c]()!==a)b[c](a);
// c=b}else c=b[c]();return c},calculateCaretPosition:function(a){var d=c.getMasked(),h=c.getCaret();if(a!==d){var e=b.data("mask-previus-caret-pos")||0;d=d.length;var g=a.length,f=a=0,l=0,k=0,m;for(m=h;m<d&&c.maskDigitPosMap[m];m++)f++;for(m=h-1;0<=m&&c.maskDigitPosMap[m];m--)a++;for(m=h-1;0<=m;m--)c.maskDigitPosMap[m]&&l++;for(m=e-1;0<=m;m--)c.maskDigitPosMapOld[m]&&k++;h>g?h=10*d:e>=h&&e!==g?c.maskDigitPosMapOld[h]||(e=h,h=h-(k-l)-a,c.maskDigitPosMap[h]&&(h=e)):h>e&&(h=h+(l-k)+f)}return h},behaviour:function(d){d=
// d||window.event;c.invalid=[];var e=b.data("mask-keycode");if(-1===a.inArray(e,l.byPassKeys)){e=c.getMasked();var h=c.getCaret(),g=b.data("mask-previus-value")||"";setTimeout(function(){c.setCaret(c.calculateCaretPosition(g))},a.jMaskGlobals.keyStrokeCompensation);c.val(e);c.setCaret(h);return c.callbacks(d)}},getMasked:function(a,b){var h=[],f=void 0===b?c.val():b+"",g=0,k=d.length,n=0,p=f.length,m=1,r="push",u=-1,w=0;b=[];if(e.reverse){r="unshift";m=-1;var x=0;g=k-1;n=p-1;var A=function(){return-1<
// g&&-1<n}}else x=k-1,A=function(){return g<k&&n<p};for(var z;A();){var y=d.charAt(g),v=f.charAt(n),q=l.translation[y];if(q)v.match(q.pattern)?(h[r](v),q.recursive&&(-1===u?u=g:g===x&&g!==u&&(g=u-m),x===u&&(g-=m)),g+=m):v===z?(w--,z=void 0):q.optional?(g+=m,n-=m):q.fallback?(h[r](q.fallback),g+=m,n-=m):c.invalid.push({p:n,v:v,e:q.pattern}),n+=m;else{if(!a)h[r](y);v===y?(b.push(n),n+=m):(z=y,b.push(n+w),w++);g+=m}}a=d.charAt(x);k!==p+1||l.translation[a]||h.push(a);h=h.join("");c.mapMaskdigitPositions(h,
// b,p);return h},mapMaskdigitPositions:function(a,b,d){a=e.reverse?a.length-d:0;c.maskDigitPosMap={};for(d=0;d<b.length;d++)c.maskDigitPosMap[b[d]+a]=1},callbacks:function(a){var g=c.val(),h=g!==f,k=[g,a,b,e],l=function(a,b,c){"function"===typeof e[a]&&b&&e[a].apply(this,c)};l("onChange",!0===h,k);l("onKeyPress",!0===h,k);l("onComplete",g.length===d.length,k);l("onInvalid",0<c.invalid.length,[g,a,b,c.invalid,e])}};b=a(b);var l=this,f=c.val(),k;d="function"===typeof d?d(c.val(),void 0,b,e):d;l.mask=
// d;l.options=e;l.remove=function(){var a=c.getCaret();l.options.placeholder&&b.removeAttr("placeholder");b.data("mask-maxlength")&&b.removeAttr("maxlength");c.destroyEvents();c.val(l.getCleanVal());c.setCaret(a);return b};l.getCleanVal=function(){return c.getMasked(!0)};l.getMaskedVal=function(a){return c.getMasked(!1,a)};l.init=function(g){g=g||!1;e=e||{};l.clearIfNotMatch=a.jMaskGlobals.clearIfNotMatch;l.byPassKeys=a.jMaskGlobals.byPassKeys;l.translation=a.extend({},a.jMaskGlobals.translation,e.translation);
// l=a.extend(!0,{},l,e);k=c.getRegexMask();if(g)c.events(),c.val(c.getMasked());else{e.placeholder&&b.attr("placeholder",e.placeholder);b.data("mask")&&b.attr("autocomplete","off");g=0;for(var f=!0;g<d.length;g++){var h=l.translation[d.charAt(g)];if(h&&h.recursive){f=!1;break}}f&&b.attr("maxlength",d.length).data("mask-maxlength",!0);c.destroyEvents();c.events();g=c.getCaret();c.val(c.getMasked());c.setCaret(g)}};l.init(!b.is("input"))};a.maskWatchers={};var f=function(){var b=a(this),d={},e=b.attr("data-mask");
// b.attr("data-mask-reverse")&&(d.reverse=!0);b.attr("data-mask-clearifnotmatch")&&(d.clearIfNotMatch=!0);"true"===b.attr("data-mask-selectonfocus")&&(d.selectOnFocus=!0);if(p(b,e,d))return b.data("mask",new n(this,e,d))},p=function(b,d,e){e=e||{};var c=a(b).data("mask"),f=JSON.stringify;b=a(b).val()||a(b).text();try{return"function"===typeof d&&(d=d(b)),"object"!==typeof c||f(c.options)!==f(e)||c.mask!==d}catch(w){}},k=function(a){var b=document.createElement("div");a="on"+a;var e=a in b;e||(b.setAttribute(a,
// "return;"),e="function"===typeof b[a]);return e};a.fn.mask=function(b,d){d=d||{};var e=this.selector,c=a.jMaskGlobals,f=c.watchInterval;c=d.watchInputs||c.watchInputs;var k=function(){if(p(this,b,d))return a(this).data("mask",new n(this,b,d))};a(this).each(k);e&&""!==e&&c&&(clearInterval(a.maskWatchers[e]),a.maskWatchers[e]=setInterval(function(){a(document).find(e).each(k)},f));return this};a.fn.masked=function(a){return this.data("mask").getMaskedVal(a)};a.fn.unmask=function(){clearInterval(a.maskWatchers[this.selector]);
// delete a.maskWatchers[this.selector];return this.each(function(){var b=a(this).data("mask");b&&b.remove().removeData("mask")})};a.fn.cleanVal=function(){return this.data("mask").getCleanVal()};a.applyDataMask=function(b){b=b||a.jMaskGlobals.maskElements;(b instanceof a?b:a(b)).filter(a.jMaskGlobals.dataMaskAttr).each(f)};k={maskElements:"input,td,span,div",dataMaskAttr:"*[data-mask]",dataMask:!0,watchInterval:300,watchInputs:!0,keyStrokeCompensation:10,useInput:!/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent)&&
// k("input"),watchDataMask:!1,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}}};a.jMaskGlobals=a.jMaskGlobals||{};k=a.jMaskGlobals=a.extend(!0,{},k,a.jMaskGlobals);k.dataMask&&a.applyDataMask();setInterval(function(){a.jMaskGlobals.watchDataMask&&a.applyDataMask()},k.watchInterval)},window.jQuery,window.Zepto);

/*  jQuery Nice Select - v1.1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */


(function ($) {
  $.fn.niceSelect = function (method) {
    // Methods
    if (typeof method == 'string') {
      if (method == 'update') {
        this.each(function () {
          var $select = $(this);
          var $dropdown = $(this).next('.nice-select');
          var open = $dropdown.hasClass('open');

          if ($dropdown.length) {
            $dropdown.remove();
            create_nice_select($select);

            if (open) {
              $select.next().trigger('click');
            }
          }
        });
      } else if (method == 'destroy') {
        this.each(function () {
          var $select = $(this);
          var $dropdown = $(this).next('.nice-select');

          if ($dropdown.length) {
            $dropdown.remove();
            $select.css('display', '');
          }
        });

        if ($('.nice-select').length == 0) {
          $(document).off('.nice_select');
        }
      } else {//         console.log('Method "' + method + '" does not exist.')
      }

      return this;
    } // Hide native select


    this.hide(); // Create custom markup

    this.each(function () {
      var $select = $(this);

      if (!$select.next().hasClass('nice-select')) {
        create_nice_select($select);
      }
    });

    function create_nice_select($select) {
      $select.after($('<div></div>').addClass('nice-select').addClass($select.attr('class') || '').addClass($select.attr('disabled') ? 'disabled' : '').attr('tabindex', $select.attr('disabled') ? null : '0').html('<span class="current"></span><ul class="list"></ul>'));
      var $dropdown = $select.next();
      var $options = $select.find('option');
      var $selected = $select.find('option:selected');
      $dropdown.find('.current').html($selected.data('display') || $selected.text());
      $options.each(function (i) {
        var $option = $(this);
        var display = $option.data('display');
        $dropdown.find('ul').append($('<li></li>').attr('data-value', $option.val()).attr('data-display', display || null).addClass('option' + ($option.is(':selected') ? ' selected' : '') + ($option.is(':disabled') ? ' disabled' : '')).html($option.text()));
      });
    }
    /* Event listeners */
    // Unbind existing events in case that the plugin has been initialized before


    $(document).off('.nice_select'); // Open/close

    $(document).on('click.nice_select', '.nice-select', function (event) {
      var $dropdown = $(this);
      $('.nice-select').not($dropdown).removeClass('open');
      $dropdown.toggleClass('open');

      if ($dropdown.hasClass('open')) {
        $dropdown.find('.option');
        $dropdown.find('.focus').removeClass('focus');
        $dropdown.find('.selected').addClass('focus');
      } else {
        $dropdown.focus();
      }
    }); // Close when clicking outside

    $(document).on('click.nice_select', function (event) {
      if ($(event.target).closest('.nice-select').length === 0) {
        $('.nice-select').removeClass('open').find('.option');
      }
    }); // Option click

    $(document).on('click.nice_select', '.nice-select .option:not(.disabled)', function (event) {
      var $option = $(this);
      var $dropdown = $option.closest('.nice-select');
      $dropdown.find('.selected').removeClass('selected');
      $option.addClass('selected');
      var text = $option.data('display') || $option.text();
      $dropdown.find('.current').text(text);
      $dropdown.prev('select').val($option.data('value')).trigger('change');
    }); // Keyboard events

    $(document).on('keydown.nice_select', '.nice-select', function (event) {
      var $dropdown = $(this);
      var $focused_option = $($dropdown.find('.focus') || $dropdown.find('.list .option.selected')); // Space or Enter

      if (event.keyCode == 32 || event.keyCode == 13) {
        if ($dropdown.hasClass('open')) {
          $focused_option.trigger('click');
        } else {
          $dropdown.trigger('click');
        }

        return false; // Down
      } else if (event.keyCode == 40) {
        if (!$dropdown.hasClass('open')) {
          $dropdown.trigger('click');
        } else {
          var $next = $focused_option.nextAll('.option:not(.disabled)').first();

          if ($next.length > 0) {
            $dropdown.find('.focus').removeClass('focus');
            $next.addClass('focus');
          }
        }

        return false; // Up
      } else if (event.keyCode == 38) {
        if (!$dropdown.hasClass('open')) {
          $dropdown.trigger('click');
        } else {
          var $prev = $focused_option.prevAll('.option:not(.disabled)').first();

          if ($prev.length > 0) {
            $dropdown.find('.focus').removeClass('focus');
            $prev.addClass('focus');
          }
        }

        return false; // Esc
      } else if (event.keyCode == 27) {
        if ($dropdown.hasClass('open')) {
          $dropdown.trigger('click');
        } // Tab

      } else if (event.keyCode == 9) {
        if ($dropdown.hasClass('open')) {
          return false;
        }
      }
    }); // Detect CSS pointer-events support, for IE <= 10. From Modernizr.

    var style = document.createElement('a').style;
    style.cssText = 'pointer-events:auto';

    if (style.pointerEvents !== 'auto') {
      $('html').addClass('no-csspointerevents');
    }

    return this;
  };
})(jQuery);

(function ($) {
  $.fn.twentytwenty = function (options) {
    var options = $.extend({
      default_offset_pct: 0.5,
      orientation: 'horizontal',
      before_label: 'Before',
      after_label: 'After',
      no_overlay: false,
      move_slider_on_hover: false,
      move_with_handle_only: true,
      click_to_move: false
    }, options);
    return this.each(function () {
      var sliderPct = options.default_offset_pct;
      var container = $(this);
      var sliderOrientation = options.orientation;
      var beforeDirection = sliderOrientation === 'vertical' ? 'down' : 'left';
      var afterDirection = sliderOrientation === 'vertical' ? 'up' : 'right';
      container.wrap("<div class='twentytwenty-wrapper twentytwenty-" + sliderOrientation + "'></div>");

      if (!options.no_overlay) {
        container.append("<div class='twentytwenty-overlay'></div>");
        var overlay = container.find(".twentytwenty-overlay");
        overlay.append("<div class='twentytwenty-before-label' data-content='" + options.before_label + "'></div>");
        overlay.append("<div class='twentytwenty-after-label' data-content='" + options.after_label + "'></div>");
      }

      var beforeImg = container.find("img:first");
      var afterImg = container.find("img:last");
      container.append("<div class='twentytwenty-handle'></div>");
      var slider = container.find(".twentytwenty-handle");
      slider.append("<span class='twentytwenty-" + beforeDirection + "-arrow'></span>");
      slider.append("<span class='twentytwenty-" + afterDirection + "-arrow'></span>");
      container.addClass("twentytwenty-container");
      beforeImg.addClass("twentytwenty-before");
      afterImg.addClass("twentytwenty-after");

      var calcOffset = function calcOffset(dimensionPct) {
        var w = beforeImg.width();
        var h = beforeImg.height();
        return {
          w: w + "px",
          h: h + "px",
          cw: dimensionPct * w + "px",
          ch: dimensionPct * h + "px"
        };
      };

      var adjustContainer = function adjustContainer(offset) {
        if (sliderOrientation === 'vertical') {
          beforeImg.css("clip", "rect(0," + offset.w + "," + offset.ch + ",0)");
          afterImg.css("clip", "rect(" + offset.ch + "," + offset.w + "," + offset.h + ",0)");
        } else {
          beforeImg.css("clip", "rect(0," + offset.cw + "," + offset.h + ",0)");
          afterImg.css("clip", "rect(0," + offset.w + "," + offset.h + "," + offset.cw + ")");
        }

        container.css("height", offset.h);
      };

      var adjustSlider = function adjustSlider(pct) {
        var offset = calcOffset(pct);
        slider.css(sliderOrientation === "vertical" ? "top" : "left", sliderOrientation === "vertical" ? offset.ch : offset.cw);
        adjustContainer(offset);
      }; // Return the number specified or the min/max number if it outside the range given.


      var minMaxNumber = function minMaxNumber(num, min, max) {
        return Math.max(min, Math.min(max, num));
      }; // Calculate the slider percentage based on the position.


      var getSliderPercentage = function getSliderPercentage(positionX, positionY) {
        var sliderPercentage = sliderOrientation === 'vertical' ? (positionY - offsetY) / imgHeight : (positionX - offsetX) / imgWidth;
        return minMaxNumber(sliderPercentage, 0, 1);
      };

      $(window).on("resize.twentytwenty", function (e) {
        adjustSlider(sliderPct);
      });
      var offsetX = 0;
      var offsetY = 0;
      var imgWidth = 0;
      var imgHeight = 0;

      var onMoveStart = function onMoveStart(e) {
        if ((e.distX > e.distY && e.distX < -e.distY || e.distX < e.distY && e.distX > -e.distY) && sliderOrientation !== 'vertical') {
          e.preventDefault();
        } else if ((e.distX < e.distY && e.distX < -e.distY || e.distX > e.distY && e.distX > -e.distY) && sliderOrientation === 'vertical') {
          e.preventDefault();
        }

        container.addClass("active");
        offsetX = container.offset().left;
        offsetY = container.offset().top;
        imgWidth = beforeImg.width();
        imgHeight = beforeImg.height();
      };

      var onMove = function onMove(e) {
        if (container.hasClass("active")) {
          sliderPct = getSliderPercentage(e.pageX, e.pageY);
          adjustSlider(sliderPct);
        }
      };

      var onMoveEnd = function onMoveEnd() {
        container.removeClass("active");
      };

      var moveTarget = options.move_with_handle_only ? slider : container;
      moveTarget.on("movestart", onMoveStart);
      moveTarget.on("move", onMove);
      moveTarget.on("moveend", onMoveEnd);

      if (options.move_slider_on_hover) {
        container.on("mouseenter", onMoveStart);
        container.on("mousemove", onMove);
        container.on("mouseleave", onMoveEnd);
      }

      slider.on("touchmove", function (e) {
        e.preventDefault();
      });
      container.find("img").on("mousedown", function (event) {
        event.preventDefault();
      });

      if (options.click_to_move) {
        container.on('click', function (e) {
          offsetX = container.offset().left;
          offsetY = container.offset().top;
          imgWidth = beforeImg.width();
          imgHeight = beforeImg.height();
          sliderPct = getSliderPercentage(e.pageX, e.pageY);
          adjustSlider(sliderPct);
        });
      }

      $(window).trigger("resize.twentytwenty");
    });
  };
})(jQuery);
/*! jQuery Validation Plugin - v1.19.1 - 6/15/2019
 * https://jqueryvalidation.org/
 * Copyright (c) 2019 Jörn Zaefferer; Licensed MIT */


!function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = a(require("jquery")) : a(jQuery);
}(function (a) {
  a.extend(a.fn, {
    validate: function validate(b) {
      if (!this.length) return void (b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
      var c = a.data(this[0], "validator");
      return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", function (b) {
        c.submitButton = b.currentTarget, a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0);
      }), this.on("submit.validate", function (b) {
        function d() {
          var d, e;
          return c.submitButton && (c.settings.submitHandler || c.formSubmitted) && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), !(c.settings.submitHandler && !c.settings.debug) || (e = c.settings.submitHandler.call(c, c.currentForm, b), d && d.remove(), void 0 !== e && e);
        }

        return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1);
      })), c);
    },
    valid: function valid() {
      var b, c, d;
      return a(this[0]).is("form") ? b = this.validate().form() : (d = [], b = !0, c = a(this[0].form).validate(), this.each(function () {
        b = c.element(this) && b, b || (d = d.concat(c.errorList));
      }), c.errorList = d), b;
    },
    rules: function rules(b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j = this[0],
          k = "undefined" != typeof this.attr("contenteditable") && "false" !== this.attr("contenteditable");

      if (null != j && (!j.form && k && (j.form = this.closest("form")[0], j.name = this.attr("name")), null != j.form)) {
        if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
          case "add":
            a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
            break;

          case "remove":
            return c ? (i = {}, a.each(c.split(/\s/), function (a, b) {
              i[b] = f[b], delete f[b];
            }), i) : (delete e[j.name], f);
        }
        return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({
          required: h
        }, g)), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {
          remote: h
        })), g;
      }
    }
  }), a.extend(a.expr.pseudos || a.expr[":"], {
    blank: function blank(b) {
      return !a.trim("" + a(b).val());
    },
    filled: function filled(b) {
      var c = a(b).val();
      return null !== c && !!a.trim("" + c);
    },
    unchecked: function unchecked(b) {
      return !a(b).prop("checked");
    }
  }), a.validator = function (b, c) {
    this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init();
  }, a.validator.format = function (b, c) {
    return 1 === arguments.length ? function () {
      var c = a.makeArray(arguments);
      return c.unshift(b), a.validator.format.apply(this, c);
    } : void 0 === c ? b : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function (a, c) {
      b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
        return c;
      });
    }), b);
  }, a.extend(a.validator, {
    defaults: {
      messages: {},
      groups: {},
      rules: {},
      errorClass: "error",
      pendingClass: "pending",
      validClass: "valid",
      errorElement: "label",
      focusCleanup: !1,
      focusInvalid: !0,
      errorContainer: a([]),
      errorLabelContainer: a([]),
      onsubmit: !0,
      ignore: ":hidden",
      ignoreTitle: !1,
      onfocusin: function onfocusin(a) {
        this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)));
      },
      onfocusout: function onfocusout(a) {
        this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a);
      },
      onkeyup: function onkeyup(b, c) {
        var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
        9 === c.which && "" === this.elementValue(b) || a.inArray(c.keyCode, d) !== -1 || (b.name in this.submitted || b.name in this.invalid) && this.element(b);
      },
      onclick: function onclick(a) {
        a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode);
      },
      highlight: function highlight(b, c, d) {
        "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d);
      },
      unhighlight: function unhighlight(b, c, d) {
        "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d);
      }
    },
    setDefaults: function setDefaults(b) {
      a.extend(a.validator.defaults, b);
    },
    messages: {
      required: "This field is required.",
      remote: "Please fix this field.",
      email: "Please enter a valid email address.",
      url: "Please enter a valid URL.",
      date: "Please enter a valid date.",
      dateISO: "Please enter a valid date (ISO).",
      number: "Please enter a valid number.",
      digits: "Please enter only digits.",
      equalTo: "Please enter the same value again.",
      maxlength: a.validator.format("Please enter no more than {0} characters."),
      minlength: a.validator.format("Please enter at least {0} characters."),
      rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
      range: a.validator.format("Please enter a value between {0} and {1}."),
      max: a.validator.format("Please enter a value less than or equal to {0}."),
      min: a.validator.format("Please enter a value greater than or equal to {0}."),
      step: a.validator.format("Please enter a multiple of {0}.")
    },
    autoCreateRanges: !1,
    prototype: {
      init: function init() {
        function b(b) {
          var c = "undefined" != typeof a(this).attr("contenteditable") && "false" !== a(this).attr("contenteditable");

          if (!this.form && c && (this.form = a(this).closest("form")[0], this.name = a(this).attr("name")), d === this.form) {
            var e = a.data(this.form, "validator"),
                f = "on" + b.type.replace(/^validate/, ""),
                g = e.settings;
            g[f] && !a(this).is(g.ignore) && g[f].call(e, this, b);
          }
        }

        this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
        var c,
            d = this.currentForm,
            e = this.groups = {};
        a.each(this.settings.groups, function (b, c) {
          "string" == typeof c && (c = c.split(/\s/)), a.each(c, function (a, c) {
            e[c] = b;
          });
        }), c = this.settings.rules, a.each(c, function (b, d) {
          c[b] = a.validator.normalizeRule(d);
        }), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b), this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
      },
      form: function form() {
        return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid();
      },
      checkForm: function checkForm() {
        this.prepareForm();

        for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) {
          this.check(b[a]);
        }

        return this.valid();
      },
      element: function element(b) {
        var c,
            d,
            e = this.clean(b),
            f = this.validationTargetFor(e),
            g = this,
            h = !0;
        return void 0 === f ? delete this.invalid[e.name] : (this.prepareElement(f), this.currentElements = a(f), d = this.groups[f.name], d && a.each(this.groups, function (a, b) {
          b === d && a !== f.name && (e = g.validationTargetFor(g.clean(g.findByName(a))), e && e.name in g.invalid && (g.currentElements.push(e), h = g.check(e) && h));
        }), c = this.check(f) !== !1, h = h && c, c ? this.invalid[f.name] = !1 : this.invalid[f.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), a(b).attr("aria-invalid", !c)), h;
      },
      showErrors: function showErrors(b) {
        if (b) {
          var c = this;
          a.extend(this.errorMap, b), this.errorList = a.map(this.errorMap, function (a, b) {
            return {
              message: a,
              element: c.findByName(b)[0]
            };
          }), this.successList = a.grep(this.successList, function (a) {
            return !(a.name in b);
          });
        }

        this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
      },
      resetForm: function resetForm() {
        a.fn.resetForm && a(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
        var b = this.elements().removeData("previousValue").removeAttr("aria-invalid");
        this.resetElements(b);
      },
      resetElements: function resetElements(a) {
        var b;
        if (this.settings.unhighlight) for (b = 0; a[b]; b++) {
          this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""), this.findByName(a[b].name).removeClass(this.settings.validClass);
        } else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
      },
      numberOfInvalids: function numberOfInvalids() {
        return this.objectLength(this.invalid);
      },
      objectLength: function objectLength(a) {
        var b,
            c = 0;

        for (b in a) {
          void 0 !== a[b] && null !== a[b] && a[b] !== !1 && c++;
        }

        return c;
      },
      hideErrors: function hideErrors() {
        this.hideThese(this.toHide);
      },
      hideThese: function hideThese(a) {
        a.not(this.containers).text(""), this.addWrapper(a).hide();
      },
      valid: function valid() {
        return 0 === this.size();
      },
      size: function size() {
        return this.errorList.length;
      },
      focusInvalid: function focusInvalid() {
        if (this.settings.focusInvalid) try {
          a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").trigger("focus").trigger("focusin");
        } catch (b) {}
      },
      findLastActive: function findLastActive() {
        var b = this.lastActive;
        return b && 1 === a.grep(this.errorList, function (a) {
          return a.element.name === b.name;
        }).length && b;
      },
      elements: function elements() {
        var b = this,
            c = {};
        return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
          var d = this.name || a(this).attr("name"),
              e = "undefined" != typeof a(this).attr("contenteditable") && "false" !== a(this).attr("contenteditable");
          return !d && b.settings.debug && window.console && console.error("%o has no name assigned", this), e && (this.form = a(this).closest("form")[0], this.name = d), this.form === b.currentForm && !(d in c || !b.objectLength(a(this).rules())) && (c[d] = !0, !0);
        });
      },
      clean: function clean(b) {
        return a(b)[0];
      },
      errors: function errors() {
        var b = this.settings.errorClass.split(" ").join(".");
        return a(this.settings.errorElement + "." + b, this.errorContext);
      },
      resetInternals: function resetInternals() {
        this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]);
      },
      reset: function reset() {
        this.resetInternals(), this.currentElements = a([]);
      },
      prepareForm: function prepareForm() {
        this.reset(), this.toHide = this.errors().add(this.containers);
      },
      prepareElement: function prepareElement(a) {
        this.reset(), this.toHide = this.errorsFor(a);
      },
      elementValue: function elementValue(b) {
        var c,
            d,
            e = a(b),
            f = b.type,
            g = "undefined" != typeof e.attr("contenteditable") && "false" !== e.attr("contenteditable");
        return "radio" === f || "checkbox" === f ? this.findByName(b.name).filter(":checked").val() : "number" === f && "undefined" != typeof b.validity ? b.validity.badInput ? "NaN" : e.val() : (c = g ? e.text() : e.val(), "file" === f ? "C:\\fakepath\\" === c.substr(0, 12) ? c.substr(12) : (d = c.lastIndexOf("/"), d >= 0 ? c.substr(d + 1) : (d = c.lastIndexOf("\\"), d >= 0 ? c.substr(d + 1) : c)) : "string" == typeof c ? c.replace(/\r/g, "") : c);
      },
      check: function check(b) {
        b = this.validationTargetFor(this.clean(b));
        var c,
            d,
            e,
            f,
            g = a(b).rules(),
            h = a.map(g, function (a, b) {
          return b;
        }).length,
            i = !1,
            j = this.elementValue(b);
        "function" == typeof g.normalizer ? f = g.normalizer : "function" == typeof this.settings.normalizer && (f = this.settings.normalizer), f && (j = f.call(b, j), delete g.normalizer);

        for (d in g) {
          e = {
            method: d,
            parameters: g[d]
          };

          try {
            if (c = a.validator.methods[d].call(this, j, b, e.parameters), "dependency-mismatch" === c && 1 === h) {
              i = !0;
              continue;
            }

            if (i = !1, "pending" === c) return void (this.toHide = this.toHide.not(this.errorsFor(b)));
            if (!c) return this.formatAndAdd(b, e), !1;
          } catch (k) {
            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", k), k instanceof TypeError && (k.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."), k;
          }
        }

        if (!i) return this.objectLength(g) && this.successList.push(b), !0;
      },
      customDataMessage: function customDataMessage(b, c) {
        return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg");
      },
      customMessage: function customMessage(a, b) {
        var c = this.settings.messages[a];
        return c && (c.constructor === String ? c : c[b]);
      },
      findDefined: function findDefined() {
        for (var a = 0; a < arguments.length; a++) {
          if (void 0 !== arguments[a]) return arguments[a];
        }
      },
      defaultMessage: function defaultMessage(b, c) {
        "string" == typeof c && (c = {
          method: c
        });
        var d = this.findDefined(this.customMessage(b.name, c.method), this.customDataMessage(b, c.method), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c.method], "<strong>Warning: No message defined for " + b.name + "</strong>"),
            e = /\$?\{(\d+)\}/g;
        return "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), d;
      },
      formatAndAdd: function formatAndAdd(a, b) {
        var c = this.defaultMessage(a, b);
        this.errorList.push({
          message: c,
          element: a,
          method: b.method
        }), this.errorMap[a.name] = c, this.submitted[a.name] = c;
      },
      addWrapper: function addWrapper(a) {
        return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a;
      },
      defaultShowErrors: function defaultShowErrors() {
        var a, b, c;

        for (a = 0; this.errorList[a]; a++) {
          c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
        }

        if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (a = 0; this.successList[a]; a++) {
          this.showLabel(this.successList[a]);
        }
        if (this.settings.unhighlight) for (a = 0, b = this.validElements(); b[a]; a++) {
          this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
        }
        this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show();
      },
      validElements: function validElements() {
        return this.currentElements.not(this.invalidElements());
      },
      invalidElements: function invalidElements() {
        return a(this.errorList).map(function () {
          return this.element;
        });
      },
      showLabel: function showLabel(b, c) {
        var d,
            e,
            f,
            g,
            h = this.errorsFor(b),
            i = this.idOrName(b),
            j = a(b).attr("aria-describedby");
        h.length ? (h.removeClass(this.settings.validClass).addClass(this.settings.errorClass), h.html(c)) : (h = a("<" + this.settings.errorElement + ">").attr("id", i + "-error").addClass(this.settings.errorClass).html(c || ""), d = h, this.settings.wrapper && (d = h.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, d, a(b)) : d.insertAfter(b), h.is("label") ? h.attr("for", i) : 0 === h.parents("label[for='" + this.escapeCssMeta(i) + "']").length && (f = h.attr("id"), j ? j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")) || (j += " " + f) : j = f, a(b).attr("aria-describedby", j), e = this.groups[b.name], e && (g = this, a.each(g.groups, function (b, c) {
          c === e && a("[name='" + g.escapeCssMeta(b) + "']", g.currentForm).attr("aria-describedby", h.attr("id"));
        })))), !c && this.settings.success && (h.text(""), "string" == typeof this.settings.success ? h.addClass(this.settings.success) : this.settings.success(h, b)), this.toShow = this.toShow.add(h);
      },
      errorsFor: function errorsFor(b) {
        var c = this.escapeCssMeta(this.idOrName(b)),
            d = a(b).attr("aria-describedby"),
            e = "label[for='" + c + "'], label[for='" + c + "'] *";
        return d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")), this.errors().filter(e);
      },
      escapeCssMeta: function escapeCssMeta(a) {
        return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1");
      },
      idOrName: function idOrName(a) {
        return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name);
      },
      validationTargetFor: function validationTargetFor(b) {
        return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0];
      },
      checkable: function checkable(a) {
        return /radio|checkbox/i.test(a.type);
      },
      findByName: function findByName(b) {
        return a(this.currentForm).find("[name='" + this.escapeCssMeta(b) + "']");
      },
      getLength: function getLength(b, c) {
        switch (c.nodeName.toLowerCase()) {
          case "select":
            return a("option:selected", c).length;

          case "input":
            if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length;
        }

        return b.length;
      },
      depend: function depend(a, b) {
        return !this.dependTypes[_typeof(a)] || this.dependTypes[_typeof(a)](a, b);
      },
      dependTypes: {
        "boolean": function boolean(a) {
          return a;
        },
        string: function string(b, c) {
          return !!a(b, c.form).length;
        },
        "function": function _function(a, b) {
          return a(b);
        }
      },
      optional: function optional(b) {
        var c = this.elementValue(b);
        return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch";
      },
      startRequest: function startRequest(b) {
        this.pending[b.name] || (this.pendingRequest++, a(b).addClass(this.settings.pendingClass), this.pending[b.name] = !0);
      },
      stopRequest: function stopRequest(b, c) {
        this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], a(b).removeClass(this.settings.pendingClass), c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.submitButton && a("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1);
      },
      previousValue: function previousValue(b, c) {
        return c = "string" == typeof c && c || "remote", a.data(b, "previousValue") || a.data(b, "previousValue", {
          old: null,
          valid: !0,
          message: this.defaultMessage(b, {
            method: c
          })
        });
      },
      destroy: function destroy() {
        this.resetForm(), a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur");
      }
    },
    classRuleSettings: {
      required: {
        required: !0
      },
      email: {
        email: !0
      },
      url: {
        url: !0
      },
      date: {
        date: !0
      },
      dateISO: {
        dateISO: !0
      },
      number: {
        number: !0
      },
      digits: {
        digits: !0
      },
      creditcard: {
        creditcard: !0
      }
    },
    addClassRules: function addClassRules(b, c) {
      b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b);
    },
    classRules: function classRules(b) {
      var c = {},
          d = a(b).attr("class");
      return d && a.each(d.split(" "), function () {
        this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this]);
      }), c;
    },
    normalizeAttributeRule: function normalizeAttributeRule(a, b, c, d) {
      /min|max|step/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0);
    },
    attributeRules: function attributeRules(b) {
      var c,
          d,
          e = {},
          f = a(b),
          g = b.getAttribute("type");

      for (c in a.validator.methods) {
        "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), this.normalizeAttributeRule(e, g, c, d);
      }

      return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e;
    },
    dataRules: function dataRules(b) {
      var c,
          d,
          e = {},
          f = a(b),
          g = b.getAttribute("type");

      for (c in a.validator.methods) {
        d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), "" === d && (d = !0), this.normalizeAttributeRule(e, g, c, d);
      }

      return e;
    },
    staticRules: function staticRules(b) {
      var c = {},
          d = a.data(b.form, "validator");
      return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c;
    },
    normalizeRules: function normalizeRules(b, c) {
      return a.each(b, function (d, e) {
        if (e === !1) return void delete b[d];

        if (e.param || e.depends) {
          var f = !0;

          switch (_typeof(e.depends)) {
            case "string":
              f = !!a(e.depends, c.form).length;
              break;

            case "function":
              f = e.depends.call(c, c);
          }

          f ? b[d] = void 0 === e.param || e.param : (a.data(c.form, "validator").resetElements(a(c)), delete b[d]);
        }
      }), a.each(b, function (d, e) {
        b[d] = a.isFunction(e) && "normalizer" !== d ? e(c) : e;
      }), a.each(["minlength", "maxlength"], function () {
        b[this] && (b[this] = Number(b[this]));
      }), a.each(["rangelength", "range"], function () {
        var c;
        b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]));
      }), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b;
    },
    normalizeRule: function normalizeRule(b) {
      if ("string" == typeof b) {
        var c = {};
        a.each(b.split(/\s/), function () {
          c[this] = !0;
        }), b = c;
      }

      return b;
    },
    addMethod: function addMethod(b, c, d) {
      a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b));
    },
    methods: {
      required: function required(b, c, d) {
        if (!this.depend(d, c)) return "dependency-mismatch";

        if ("select" === c.nodeName.toLowerCase()) {
          var e = a(c).val();
          return e && e.length > 0;
        }

        return this.checkable(c) ? this.getLength(b, c) > 0 : void 0 !== b && null !== b && b.length > 0;
      },
      email: function email(a, b) {
        return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a);
      },
      url: function url(a, b) {
        return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a);
      },
      date: function () {
        var a = !1;
        return function (b, c) {
          return a || (a = !0, this.settings.debug && window.console && console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")), this.optional(c) || !/Invalid|NaN/.test(new Date(b).toString());
        };
      }(),
      dateISO: function dateISO(a, b) {
        return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a);
      },
      number: function number(a, b) {
        return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a);
      },
      digits: function digits(a, b) {
        return this.optional(b) || /^\d+$/.test(a);
      },
      minlength: function minlength(b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(b, c);
        return this.optional(c) || e >= d;
      },
      maxlength: function maxlength(b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(b, c);
        return this.optional(c) || e <= d;
      },
      rangelength: function rangelength(b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(b, c);
        return this.optional(c) || e >= d[0] && e <= d[1];
      },
      min: function min(a, b, c) {
        return this.optional(b) || a >= c;
      },
      max: function max(a, b, c) {
        return this.optional(b) || a <= c;
      },
      range: function range(a, b, c) {
        return this.optional(b) || a >= c[0] && a <= c[1];
      },
      step: function step(b, c, d) {
        var e,
            f = a(c).attr("type"),
            g = "Step attribute on input type " + f + " is not supported.",
            h = ["text", "number", "range"],
            i = new RegExp("\\b" + f + "\\b"),
            j = f && !i.test(h.join()),
            k = function k(a) {
          var b = ("" + a).match(/(?:\.(\d+))?$/);
          return b && b[1] ? b[1].length : 0;
        },
            l = function l(a) {
          return Math.round(a * Math.pow(10, e));
        },
            m = !0;

        if (j) throw new Error(g);
        return e = k(d), (k(b) > e || l(b) % l(d) !== 0) && (m = !1), this.optional(c) || m;
      },
      equalTo: function equalTo(b, c, d) {
        var e = a(d);
        return this.settings.onfocusout && e.not(".validate-equalTo-blur").length && e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
          a(c).valid();
        }), b === e.val();
      },
      remote: function remote(b, c, d, e) {
        if (this.optional(c)) return "dependency-mismatch";
        e = "string" == typeof e && e || "remote";
        var f,
            g,
            h,
            i = this.previousValue(c, e);
        return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), i.originalMessage = i.originalMessage || this.settings.messages[c.name][e], this.settings.messages[c.name][e] = i.message, d = "string" == typeof d && {
          url: d
        } || d, h = a.param(a.extend({
          data: b
        }, d.data)), i.old === h ? i.valid : (i.old = h, f = this, this.startRequest(c), g = {}, g[c.name] = b, a.ajax(a.extend(!0, {
          mode: "abort",
          port: "validate" + c.name,
          dataType: "json",
          data: g,
          context: f.currentForm,
          success: function success(a) {
            var d,
                g,
                h,
                j = a === !0 || "true" === a;
            f.settings.messages[c.name][e] = i.originalMessage, j ? (h = f.formSubmitted, f.resetInternals(), f.toHide = f.errorsFor(c), f.formSubmitted = h, f.successList.push(c), f.invalid[c.name] = !1, f.showErrors()) : (d = {}, g = a || f.defaultMessage(c, {
              method: e,
              parameters: b
            }), d[c.name] = i.message = g, f.invalid[c.name] = !0, f.showErrors(d)), i.valid = j, f.stopRequest(c, j);
          }
        }, d)), "pending");
      }
    }
  });
  var b,
      c = {};
  return a.ajaxPrefilter ? a.ajaxPrefilter(function (a, b, d) {
    var e = a.port;
    "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d);
  }) : (b = a.ajax, a.ajax = function (d) {
    var e = ("mode" in d ? d : a.ajaxSettings).mode,
        f = ("port" in d ? d : a.ajaxSettings).port;
    return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments);
  }), a;
});
$(document).ready(function () {
  $('select').niceSelect();
  $('[bannerSlider_js]').each(function () {
    new Swiper($(this)[0], {
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 800,
      loop: true,
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.banners-swiper__pagination',
        clickable: true
      }
    });
  });
  $('[productsSlider_js]').each(function () {
    var navigationPrev = $(this).parents('.section-products-swiper').find('.swiper__navigation-btn-prev')[0];
    var navigationNext = $(this).parents('.section-products-swiper').find('.swiper__navigation-btn-next')[0];
    var swiper = new Swiper($(this)[0], {
      direction: 'horizontal',
      slidesPerView: 1.75,
      spaceBetween: 16,
      speed: 700,
      scrollbar: {
        enabled: true,
        el: ".swiper-scrollbar",
        draggable: true,
        hide: false
      },
      navigation: {
        nextEl: navigationNext,
        prevEl: navigationPrev
      },
      breakpoints: {
        0: {
          slidesPerView: 1.75,
          spaceBetween: 16,
          scrollbar: {
            enabled: true
          }
        },
        767: {
          slidesPerView: 4,
          spaceBetween: 20,
          scrollbar: {
            enabled: false
          }
        }
      }
    });
  });
  $('[galleryGridSwiper_JS]').each(function () {
    var swiper = new Swiper($(this)[0], {
      speed: 300,
      slidesPerView: 1,
      spaceBetween: 10,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      navigation: {
        nextEl: '.swiper-navigation__btn-next',
        prevEl: '.swiper-navigation__btn-prev'
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function renderBullet(index, className) {
          return '<button class="' + className + '">' + (index + 1) + '</button>';
        }
      },
      on: {
        slideChange: function slideChange() {
          var el = document.querySelector('.section-main-gallery');
          var isSticky = document.querySelector('.header.fixed');
          var headerHeight = 0;
          isSticky ? headerHeight = document.querySelector('.header.fixed').offsetHeight : 0;
          var elementTop = el.offsetTop;

          if (el) {
            window.scrollTo({
              top: elementTop - headerHeight,
              behavior: 'smooth'
            });
          }
        }
      }
    });
  });
  $('[productGallerySlider_js]').each(function () {
    var swiper = new Swiper($(this)[0], {
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        bullets: true,
        clickable: true
      }
    });
  });
  $('[knoledgeSlider_js]').each(function () {
    var swiper = new Swiper($(this)[0], {
      direction: 'horizontal',
      slidesPerView: 1.1,
      spaceBetween: 16,
      scrollbar: {
        enabled: true,
        el: ".swiper-scrollbar",
        draggable: true,
        hide: false
      },
      breakpoints: {
        0: {
          slidesPerView: 1.1,
          spaceBetween: 16,
          scrollbar: {
            enabled: true
          }
        },
        767: {
          slidesPerView: 3,
          spaceBetween: 20,
          scrollbar: {
            enabled: false
          }
        }
      }
    });
  });
  $('[newsSlider_js]').each(function () {
    var swiper = new Swiper($(this)[0], {
      direction: 'horizontal',
      slidesPerView: 1.1,
      spaceBetween: 16,
      scrollbar: {
        enabled: true,
        el: ".swiper-scrollbar",
        draggable: true,
        hide: false
      },
      breakpoints: {
        0: {
          slidesPerView: 1.1,
          spaceBetween: 16,
          scrollbar: {
            enabled: true
          }
        },
        767: {
          slidesPerView: 4,
          spaceBetween: 20,
          scrollbar: {
            enabled: false
          }
        }
      }
    });
  });
  $('[sertificateSlider_js]').each(function () {
    var swiper = new Swiper($(this)[0], {
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 64,
      speed: 700,
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        hide: false
      },
      // navigation: {
      //   nextEl: '.section-sertificates .swiper__navigation-btn-next',
      //   prevEl: '.section-sertificates .swiper__navigation-btn-prev',
      // },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
          scrollbar: {
            enabled: true
          }
        },
        767: {
          freeMode: true,
          slidesPerView: 'auto',
          spaceBetween: 30,
          scrollbar: {
            enabled: false
          }
        },
        1200: {
          freeMode: true,
          slidesPerView: 'auto',
          spaceBetween: 64,
          scrollbar: {
            enabled: false
          }
        }
      }
    });
  });
  var swiperMarque = new Swiper('.section-partners__swiper', {
    slidesPerView: 3,
    spaceBetween: 0,
    speed: 4500,
    loop: true,
    allowTouchMove: false,
    // можно ещё отключить свайп
    autoplay: {
      delay: 0,
      disableOnInteraction: false // или сделать так, чтобы восстанавливался autoplay после взаимодействия

    },
    breakpoints: {
      992: {
        slidesPerView: 5,
        spaceBetween: 5
      }
    }
  }); // dooors swipers

  function doorsSwiperInit(el) {
    var isReverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var speed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 6500;
    var initialSlide = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var swiper = new Swiper(el, {
      direction: 'vertical',
      slidesPerView: 1.4,
      spaceBetween: 30,
      speed: speed,
      initialSlide: initialSlide,
      loop: true,
      allowTouchMove: false,
      // можно ещё отключить свайп
      autoplay: {
        delay: 0,
        reverseDirection: isReverse,
        disableOnInteraction: false // или сделать так, чтобы восстанавливался autoplay после взаимодействия

      } // breakpoints: {
      //   767: {
      //   }
      // }

    });
  }

  var doorsSwiperEl1 = $('.section-doors__swiper_1');
  var doorsSwiperEl2 = $('.section-doors__swiper_2');
  var doorsSwiperEl3 = $('.section-doors__swiper_3');
  var doorsSwiperEl4 = $('.section-doors__swiper_4');
  doorsSwiperInit(doorsSwiperEl1[0]);
  doorsSwiperInit(doorsSwiperEl2[0], true, 8500);
  doorsSwiperInit(doorsSwiperEl3[0], false, 4800);
  doorsSwiperInit(doorsSwiperEl4[0], true, 6200);
  var gallary__swiper = new Swiper('.gallary__swiper', {
    slidesPerView: 4,
    spaceBetween: '1%',
    watchSlidesProgress: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      hide: false
    },
    autoplay: {
      delay: 2500
    },
    pagination: {
      el: ".gallary__wrapper .swiper-pagination"
    },
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        spaceBetween: '1%',
        scrollbar: {
          enabled: true
        },
        pagination: {
          enabled: false
        }
      },
      578: {
        slidesPerView: 2,
        spaceBetween: '1%',
        scrollbar: {
          enabled: true
        },
        pagination: {
          enabled: false
        }
      },
      767: {
        slidesPerView: 4,
        spaceBetween: '1%',
        scrollbar: {
          enabled: false
        },
        pagination: {
          enabled: true
        }
      }
    }
  });

  if ($('.single-product__gallery-swiper-thumbs')[0]) {
    var galleryThumbsSwiper = new Swiper($('.single-product__gallery-swiper-thumbs')[0], {
      direction: 'vertical',
      spaceBetween: 20,
      slidesPerView: 3.3,
      watchSlidesProgress: true,
      navigation: {
        nextEl: $('.single-product__gallery-swiper-thumbs-wrap').find('.swiper__navigation-btn-next')[0],
        prevEl: $('.single-product__gallery-swiper-thumbs-wrap').find('.swiper__navigation-btn-prev')[0]
      },
      breakpoints: {
        0: {
          direction: 'horizontal',
          slidesPerView: 4.3
        },
        768: {
          direction: 'vertical',
          slidesPerView: 3.3
        }
      },
      on: {
        resize: function resize() {
          this.update();
        }
      }
    });
    var gallerySwiper = new Swiper($('.single-product__gallery-swiper-large')[0], {
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      spaceBetween: 10,
      navigation: {
        nextEl: $('.single-product__gallery-swiper-thumbs-wrap').find('.swiper__navigation-btn-next')[0],
        prevEl: $('.single-product__gallery-swiper-thumbs-wrap').find('.swiper__navigation-btn-prev')[0]
      },
      thumbs: {
        swiper: galleryThumbsSwiper
      },
      breakpoints: {
        0: {
          navigation: {
            enabled: false
          }
        },
        768: {
          navigation: {
            enabled: true
          }
        }
      }
    });
  }

  $('.tabs-slider').each(function () {
    var $container = $(this).find('.swiper-container');
    var swiperTabs = new Swiper($container, {
      direction: 'horizontal',
      freeMode: true,
      slidesPerView: 'auto',
      spaceBetween: 10,
      touchStartForcePreventDefault: true
    });
  });
  $('body').on('click', '[agreementControl_JS]', function () {
    var $this = $(this),
        $form = $this.closest('form'),
        $input = $form.find('[agreementControlCheckbox_JS]'),
        $btn = $form.find('[agreementControlBtn_JS]');

    if ($this.hasClass('checked')) {
      $this.removeClass('checked');
      $input.removeAttr('checked');
      $btn.addClass('disabled');
      $btn.attr('disabled', true);
    } else {
      $this.addClass('checked');
      $input.attr('checked', '');
      $btn.removeClass('disabled');
      $btn.removeAttr('disabled');
    }
  });
  $('body').on('click', '[readMoreBtn_JS]', function () {
    var $btn = $(this),
        $parent = $btn.closest('[readMoreContainer_JS]');
    $parent.addClass('open');
  });
  $("[toTop_JS]").click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 0);
    return false;
  });
  $("[anchorLink_JS]").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href');

    if ($(window).innerWidth() < 769) {
      var headerHeight = $(window).innerWidth();
      headerHeight = headerHeight / 100 * 29.6875;
    } else {
      var headerHeight = $(window).innerWidth();
      headerHeight = headerHeight / 100 * 5, 2548607461902259590120861797162;
    }

    if ($(id).length > 0) {
      var top = $(id).offset().top - headerHeight;
      $('body,html').animate({
        scrollTop: top
      }, 1500);
    } else {
      //             console.log(1);
      window.location.href = "index.html" + id;
    }
  });
  var hash = window.location.hash;

  if (hash != "") {
    if ($(window).innerWidth() < 769) {
      var headerHeight = $(window).innerWidth();
      headerHeight = headerHeight / 100 * 29.6875;
    } else {
      var headerHeight = $(window).innerWidth();
      headerHeight = headerHeight / 100 * 5, 2548607461902259590120861797162;
    }

    if ($(hash).length > 0) {
      var offset = $(hash).offset().top - headerHeight;
      $('body,html').animate({
        scrollTop: offset
      }, 1500);
    }
  }

  ;
  $.validator.addMethod('pattern', function (value, element, pattern) {
    // Проверяем, является ли значение пустым (если поле не обязательно) или соответствует регулярному выражению
    return this.optional(element) || pattern.test(value);
  }, 'Поле содержит некорректное значение');
  $('[formValidate_JS]').each(function () {
    var form = $(this);
    $(this).validate({
      errorClass: "validate_error",
      rules: {
        name: {
          required: true,
          pattern: /^[a-zA-Zа-яА-Я\s]+$/,
          // Метод проверки букв и пробелов
          minlength: 2
        },
        phone: {
          required: true,
          minlength: 7 // Метод проверки повторяющихся подряд символов

        },
        email: {
          pattern: /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/ // Проверка корректности email

        }
      },
      errorPlacement: function errorPlacement(error, element) {}
    });
  });
  $('[headerBtn_JS]').on('click', function () {
    if ($(this).hasClass('active')) {
      menuClose();
      return;
    }

    menuOpen();
  });
  $('.header__mob-wrap a').on('click', function () {
    if ($('[headerBtn_JS]').hasClass('active')) {
      menuClose();
    }
  });

  function slideToggleSection() {
    $('[toggleItem_JS]').each(function () {
      $(this).removeClass('open');
      $(this).siblings().each(function () {
        if ($(window).outerWidth() < 992) {
          $(this).css('display', 'none');
        } else {
          $(this).removeAttr('style');
        }
      });
    });

    if ($(window).outerWidth() < 992) {
      $('.product-card [toggleItem_JS]').first().addClass('open');
      $('.product-card [toggleItem_JS]').first().siblings().removeAttr('style');
    }

    return;
  }

  $('[toggleItem_JS]').each(function () {
    $(this).on('click', function () {
      if ($(window).outerWidth() < 992) {
        $(this).toggleClass('open');
        $(this).siblings().slideToggle();
      }
    });
  });
  slideToggleSection(); // Dropdown

  function rightDropdown() {
    $('.menu__item.dropdown').each(function () {
      var $submenu = $(this).find('.submenu');
      var $offsetToLeft = $submenu.offset().left + $submenu.outerWidth();

      if ($(window).outerWidth() > 992) {
        if ($offsetToLeft > $(window).outerWidth()) {
          $submenu.css('transform', "translateX(-".concat($offsetToLeft - $(window).outerWidth() + 30, "px)"));
        }
      } else {
        $submenu.removeAttr('style');
      }
    });
  }

  rightDropdown();
  var windowWidth = $(window).outerWidth();
  $(window).on('resize', function () {
    if ($(window).outerWidth() !== windowWidth) {
      rightDropdown();
      slideToggleSection();
    }
  });
  $('.menu__item.dropdown').on('mouseenter', function () {
    if ($(window).outerWidth() > 992) {
      $(this).addClass('is-active');
      $(this).find('.submenu').addClass('is-active');
    }
  });
  $('.menu__item.dropdown').on('mouseleave', function () {
    if ($(window).outerWidth() > 992) {
      $(this).removeClass('is-active');
      $(this).find('.submenu').removeClass('is-active');
    }
  });
  $('.categories-side__item').on('mouseenter', function () {
    $(this).addClass('is-active');

    if ($(this).find('.subcategory-side')) {
      $(this).find('.subcategory-side').addClass('is-active');
    }
  });
  $('.categories-side__item').on('mouseleave', function () {
    $(this).removeClass('is-active');

    if ($(this).find('.subcategory-side')) {
      $(this).find('.subcategory-side').removeClass('is-active');
    }
  });
  $('.menu__dropdown-btn').each(function () {
    $(this).on('click', function (e) {
      if ($(window).outerWidth() <= 992) {
        var $isOpen = $(this).closest('.menu__item.dropdown').hasClass('is-active');

        if ($isOpen) {
          $(this).closest('.menu__item.dropdown').removeClass('is-active');
          $(this).siblings('.submenu').removeClass('is-active');
          $(this).siblings('.submenu').slideUp();
        } else {
          $(this).closest('.menu__item.dropdown').addClass('is-active');
          $(this).siblings('.submenu').addClass('is-active');
          $(this).siblings('.submenu').slideDown();
        }
      }
    });
  });
});
$('.catalog-mob-submenu__menu').each(function () {
  $(this).children('.menu__item.dropdown').addClass('is-active');
  $(this).children('.menu__item.dropdown').find('.submenu').addClass('is-active');
});
$('[loadMoreBtn_JS]').on('click', function () {
  $(this).closest('[loadMoreContainer_JS]').addClass('md-all-items-visible');
});

function menuOpen() {
  $('[headerBtn_JS]').addClass('active');
  $('[headerBtn_JS]').closest('header').find('.header__mob-wrap').addClass('open');
  $('html').css('overflow', 'hidden');
}

function menuClose() {
  $('[headerBtn_JS]').removeClass('active');
  $('[headerBtn_JS]').closest('header').find('.header__mob-wrap').removeClass('open');
  $('html').removeAttr('style');
}

function catalogMenuOpen() {
  $('.catalog-mob-menu').addClass('open');
  $('html').css('overflow', 'hidden');
}

function catalogMenuClose() {
  $('.catalog-mob-menu').removeClass('open');
  $('html').removeAttr('style');
}

$('[headerCatalogBtn_JS]').on('click', function (e) {
  catalogMenuOpen();
});
$('[headerCatalogCloseBtn_JS]').on('click', function (e) {
  $('.catalog-mob-menu__submenu').each(function () {
    $(this).removeClass('open');
  });
  catalogMenuClose();
});
$('.catalog-mob-menu__btn').on('click', function () {
  $(this).next('.catalog-mob-submenu').addClass('open');
});
$('.catalog-mob-menu__back').on('click', function () {
  $(this).parents('.catalog-mob-submenu').removeClass('open');
});
$('.section-catalog__filters-open').on('click', function () {
  $('.section-catalog__filters-mob-wrap').addClass('open');
  $('html').css('overflow', 'hidden');
});
$('.section-catalog__filters-mob-back').on('click', function () {
  $('.section-catalog__filters-mob-wrap').removeClass('open');
  $('html').removeAttr('style');
});
$(document).ready(function () {
  $('body').on('click', '[popupOpen]', function () {
    popupClose();
    var $elem = $(this),
        target = $elem.attr('popupOpen');

    if (target == 'promotion-popup' || target == 'service-popup' || target == 'product-popup') {
      var id = $elem.attr('data-hidden-id');
      $('[popupID="' + target + '"]').find('[hiddenValue_JS]').attr('value', id);
    }

    popupOpen(target);
  });
  var $agreementControl = $('[agreementControl_JS]'),
      $form = $agreementControl.closest('form'),
      $input = $form.find('[agreementControlCheckbox_JS]'),
      $btn = $form.find('[agreementControlBtn_JS]');

  if ($agreementControl.hasClass('checked')) {
    $agreementControl.removeClass('checked');
    $input.removeAttr('checked');
    $btn.addClass('disabled');
    $btn.attr('disabled', true);
  }

  $('body').on('click', '[popupClose_JS]', function () {
    popupClose();
  });
  $('body').append('<div class="download-popup-trigger"></div>');
  $('body .download-popup-trigger').hover(function () {
    if (localStorage.getItem('downloadPopupState') === 'true') {
      popupOpen('download-popup');
      localStorage.setItem('downloadPopupState', 'false');
    }

    ;
  });
  $('.header__marketplace-links-btn').on('click', function (e) {
    $(this).toggleClass('is-active');
    $('.marketplace-links.selected').toggleClass('is-active');
  });
  $('body').on('click', function (e) {
    if ($('.marketplace-links.selected').hasClass('is-active') && !$(e.target).closest($('.header__marketplace-links-wrap')).length) {
      $('.marketplace-links.selected').removeClass('is-active');
      $('.header__marketplace-links-btn').removeClass('is-active');
    }
  });
  $('.header__search-open').on('click', function (e) {
    e.preventDefault();
    $('.header__search-wrap').addClass('open');
  });
  $('.header__search-close-btn').on('click', function (e) {
    e.preventDefault();
    $('.header__search-wrap').removeClass('open');
    $(this).parents('.header__search-wrap').find('input').val('');
  });
  var savedLanguage = localStorage.getItem('selectedLanguage');

  if (savedLanguage) {
    $('select.header__lang').val("".concat(savedLanguage)).change();
    $('.header__lang').val("".concat(savedLanguage)).niceSelect('update'); // Устанавливаем выбранный язык в радиокнопках

    $("input[name=\"lang-choose\"][value=\"".concat(savedLanguage, "\"]")).prop('checked', true);
    $('.header__lang-mob').data('lang', savedLanguage);
    $('.header__lang-mob').text(savedLanguage);
    $('.header__marketplace-links').each(function () {
      $(this).removeClass('selected');
    });
    $(".header__marketplace-links[data-lang=\"".concat(savedLanguage.toLowerCase(), "\"]")).addClass('selected');
  } else {
    popupOpen('region');
    $('.region-popup__btn').on('click', function () {
      var lang = $('.lang-choose__radio-btn-label input[type="radio"]:checked').val();
      localStorage.setItem('selectedLanguage', lang);
      $('select.header__lang').val("".concat(lang)).change();
      $('.header__lang').val("".concat(lang)).niceSelect('update');
      $("input[name=\"lang-choose\"][value=\"".concat(lang, "\"]")).prop('checked', true);
      $('.header__lang-mob').data('lang', lang);
      $('.header__lang-mob').text(lang);
      $('.header__marketplace-links').each(function () {
        $(this).removeClass('selected');
      });
      $(".header__marketplace-links[data-lang=\"".concat(lang.toLowerCase(), "\"]")).addClass('selected');
    });

    if ($(window).outerWidth() >= 767) {
      $('html').removeAttr('style');
    }
  } // Сохранение выбранного языка в localStorage при изменении селекта


  $('.header__lang').on('change', function () {
    localStorage.setItem('selectedLanguage', $(this).find('option:selected').val());
    var savedLanguage = $(this).find('option:selected').val();
    $('.header__marketplace-links').each(function () {
      $(this).removeClass('selected');
    });
    $("input[name=\"lang-choose\"][value=\"".concat(savedLanguage, "\"]")).prop('checked', true);
    $('.header__lang-mob').data('lang', savedLanguage);
    $('.header__lang-mob').text(savedLanguage);
    $(".header__marketplace-links[data-lang=\"".concat($('.header__lang option:selected').val().toLowerCase(), "\"]")).addClass('selected');
  }); // Обработчик клика для радиокнопок

  $('.lang-choose__radio-btn-label input[type="radio"]').on('change', function () {
    var selectedLang = $(this).val();
    localStorage.setItem('selectedLanguage', selectedLang); // Сохраняем выбранный язык

    $('select.header__lang').val("".concat(selectedLang)).change();
    $('.header__lang').val(selectedLang).niceSelect('update'); // Обновляем селектор

    $('.header__marketplace-links').each(function () {
      $(this).removeClass('selected');
    });
    $('.header__lang-mob').data('lang', selectedLang);
    $('.header__lang-mob').text(selectedLang);
    $(".header__marketplace-links[data-lang=\"".concat(selectedLang.toLowerCase(), "\"]")).addClass('selected');
    popupClose();
  });
});

if (localStorage.getItem('downloadPopupState') === null) {
  localStorage.setItem('downloadPopupState', 'true');
}

var galleryThumbsSwiper = new Swiper('.product-popup__gallery-swiper-thumbs', {
  // loop: true,
  direction: 'vertical',
  spaceBetween: 10,
  slidesPerView: 4,
  watchSlidesProgress: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
    draggable: true
  },
  breakpoints: {
    767: {
      direction: 'horizontal'
    }
  },
  on: {
    resize: function resize() {
      this.update();
    }
  }
});
var gallerySwiper = new Swiper('.product-popup__gallery-swiper-large', {
  // loop: true,
  spaceBetween: 10,
  thumbs: {
    swiper: galleryThumbsSwiper
  }
});
$('.single-product__accordion-btn').each(function () {
  $(this).on('click', function () {
    $(this).toggleClass('active');
    $(this).next().slideToggle();
  });
});
$('.faq-block__list-btn').each(function () {
  $(this).on('click', function () {
    $(this).toggleClass('active');
    $(this).next().slideToggle();
  });
});

var popupClose = function popupClose() {
  $('.popup.open').find('input:not([name="lang-choose"])').val('');
  $('.popup.open').find('textarea').val('');
  $('.popup.open').find('.form-file').each(function () {
    var text = $(this).attr('data-text');
    $(this).find('div p').text(text);
  });
  $('.popup.open').find('.form-stars label:last-child').trigger('click');
  $('.popup .validate_error').each(function () {
    $(this).removeClass('validate_error');
  });
  $('html').removeAttr('style');
  $('.popup.open').addClass('fade');
  $('.popup.open').removeClass('open');
};

var popupOpen = function popupOpen(e) {
  popupClose();
  var target = e;
  var width = $('.page').width();
  $('html').css('overflow', 'hidden');
  $('[popupID="' + target + '"]').addClass('open');
  $('[popupID="' + target + '"]').removeClass('fade');

  if ($('[popupID="' + target + '"]').hasClass('product-popup')) {
    // clearTimeout(galleryThumbsSwiperUpdateTimeout);
    galleryThumbsSwiper.update();

    if ($(window).outerWidth() <= 767) {
      setTimeout(function () {
        galleryThumbsSwiper.update();
      }, 10);
    }
  }
};

function fixedHeader() {
  var height = jQuery(window).scrollTop();
  var headerHeight = $('.header').innerHeight();

  if (height) {
    $('body').attr('style', "padding-top: ".concat(headerHeight, "px;"));
    jQuery('.header').addClass('fixed');
  } else {
    jQuery('.header').removeClass('fixed');
    $('body').attr('style', "padding-top: 0;");
  }
}

fixedHeader();
jQuery(window).scroll(function ($) {
  fixedHeader();
});
$(window).on('resize', function () {
  fixedHeader();
});
$(window).on('scroll', function () {
  var ratio = $(document).scrollTop() / (($(document).height() - $(window).height()) / 100);
  $('.header-progress').width(ratio + "%");
});
$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= $(document).height() / 3) {
    $('[toTop_JS]').addClass('visible');
  } else {
    $('[toTop_JS]').removeClass('visible');
  }

  ;
  $('[onScrollDisplay_JS]').each(function () {
    var el = $(this);

    if (come(el)) {
      el.addClass('visible');
    }

    ;
  });
});
$('img').each(function (e) {
  $(this).addClass('lazy');
});
var lazyLoadInstance = new LazyLoad();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImUiLCJ0IiwibW9kdWxlIiwiZXhwb3J0cyIsImRvY3VtZW50IiwiRXJyb3IiLCJ3aW5kb3ciLCJDIiwiciIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwicyIsInNsaWNlIiwiZyIsImZsYXQiLCJjYWxsIiwiY29uY2F0IiwiYXBwbHkiLCJ1IiwicHVzaCIsImkiLCJpbmRleE9mIiwibiIsIm8iLCJ0b1N0cmluZyIsInYiLCJoYXNPd25Qcm9wZXJ0eSIsImEiLCJsIiwieSIsIm0iLCJub2RlVHlwZSIsIngiLCJFIiwiYyIsInR5cGUiLCJzcmMiLCJub25jZSIsIm5vTW9kdWxlIiwiYiIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0IiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiaGVhZCIsImFwcGVuZENoaWxkIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwidyIsImYiLCJTIiwiZm4iLCJpbml0IiwicCIsImxlbmd0aCIsInByb3RvdHlwZSIsImpxdWVyeSIsImNvbnN0cnVjdG9yIiwidG9BcnJheSIsImdldCIsInB1c2hTdGFjayIsIm1lcmdlIiwicHJldk9iamVjdCIsImVhY2giLCJtYXAiLCJhcmd1bWVudHMiLCJmaXJzdCIsImVxIiwibGFzdCIsImV2ZW4iLCJncmVwIiwib2RkIiwiZW5kIiwic29ydCIsInNwbGljZSIsImV4dGVuZCIsImlzUGxhaW5PYmplY3QiLCJBcnJheSIsImlzQXJyYXkiLCJleHBhbmRvIiwiTWF0aCIsInJhbmRvbSIsInJlcGxhY2UiLCJpc1JlYWR5IiwiZXJyb3IiLCJub29wIiwiaXNFbXB0eU9iamVjdCIsImdsb2JhbEV2YWwiLCJtYWtlQXJyYXkiLCJpbkFycmF5IiwiZ3VpZCIsInN1cHBvcnQiLCJTeW1ib2wiLCJpdGVyYXRvciIsInNwbGl0IiwidG9Mb3dlckNhc2UiLCJkIiwiaCIsIlQiLCJEYXRlIiwiayIsInVlIiwiQSIsIk4iLCJEIiwiaiIsInEiLCJwb3AiLCJMIiwiSCIsIk8iLCJQIiwiUiIsIk0iLCJJIiwiVyIsIkYiLCJCIiwiUmVnRXhwIiwiJCIsIl8iLCJ6IiwiVSIsIlgiLCJWIiwiRyIsIklEIiwiQ0xBU1MiLCJUQUciLCJBVFRSIiwiUFNFVURPIiwiQ0hJTEQiLCJib29sIiwibmVlZHNDb250ZXh0IiwiWSIsIlEiLCJKIiwiSyIsIloiLCJlZSIsInRlIiwibmUiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJyZSIsImllIiwiY2hhckNvZGVBdCIsIm9lIiwiYWUiLCJiZSIsImRpc2FibGVkIiwibm9kZU5hbWUiLCJkaXIiLCJuZXh0IiwiY2hpbGROb2RlcyIsInNlIiwib3duZXJEb2N1bWVudCIsImV4ZWMiLCJnZXRFbGVtZW50QnlJZCIsImlkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwicXNhIiwidGVzdCIsInllIiwic2NvcGUiLCJ4ZSIsImpvaW4iLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVtb3ZlQXR0cmlidXRlIiwiY2FjaGVMZW5ndGgiLCJzaGlmdCIsImxlIiwiY2UiLCJmZSIsImF0dHJIYW5kbGUiLCJwZSIsInNvdXJjZUluZGV4IiwibmV4dFNpYmxpbmciLCJkZSIsImhlIiwiZ2UiLCJpc0Rpc2FibGVkIiwidmUiLCJpc1hNTCIsIm5hbWVzcGFjZVVSSSIsImRvY3VtZW50RWxlbWVudCIsInNldERvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJ0b3AiLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJhdHRyaWJ1dGVzIiwiY2xhc3NOYW1lIiwiY3JlYXRlQ29tbWVudCIsImdldEJ5SWQiLCJnZXRFbGVtZW50c0J5TmFtZSIsImZpbHRlciIsImZpbmQiLCJnZXRBdHRyaWJ1dGVOb2RlIiwidmFsdWUiLCJpbm5lckhUTUwiLCJtYXRjaGVzU2VsZWN0b3IiLCJtYXRjaGVzIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwibW96TWF0Y2hlc1NlbGVjdG9yIiwib01hdGNoZXNTZWxlY3RvciIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwiZGlzY29ubmVjdGVkTWF0Y2giLCJjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiIsImNvbnRhaW5zIiwic29ydERldGFjaGVkIiwidW5zaGlmdCIsImF0dHIiLCJzcGVjaWZpZWQiLCJlc2NhcGUiLCJ1bmlxdWVTb3J0IiwiZGV0ZWN0RHVwbGljYXRlcyIsInNvcnRTdGFibGUiLCJnZXRUZXh0IiwidGV4dENvbnRlbnQiLCJmaXJzdENoaWxkIiwibm9kZVZhbHVlIiwic2VsZWN0b3JzIiwiY3JlYXRlUHNldWRvIiwibWF0Y2giLCJyZWxhdGl2ZSIsInByZUZpbHRlciIsImxhc3RDaGlsZCIsInVuaXF1ZUlEIiwicHNldWRvcyIsInNldEZpbHRlcnMiLCJub3QiLCJoYXMiLCJsYW5nIiwidGFyZ2V0IiwibG9jYXRpb24iLCJoYXNoIiwicm9vdCIsImZvY3VzIiwiYWN0aXZlRWxlbWVudCIsImhhc0ZvY3VzIiwiaHJlZiIsInRhYkluZGV4IiwiZW5hYmxlZCIsImNoZWNrZWQiLCJzZWxlY3RlZCIsInNlbGVjdGVkSW5kZXgiLCJlbXB0eSIsInBhcmVudCIsImhlYWRlciIsImlucHV0IiwiYnV0dG9uIiwibHQiLCJndCIsIm50aCIsInJhZGlvIiwiY2hlY2tib3giLCJmaWxlIiwicGFzc3dvcmQiLCJpbWFnZSIsInN1Ym1pdCIsInJlc2V0IiwibWUiLCJ3ZSIsIlRlIiwiQ2UiLCJFZSIsImZpbHRlcnMiLCJ0b2tlbml6ZSIsImNvbXBpbGUiLCJzZWxlY3RvciIsInNlbGVjdCIsImRlZmF1bHRWYWx1ZSIsImV4cHIiLCJ1bmlxdWUiLCJpc1hNTERvYyIsImVzY2FwZVNlbGVjdG9yIiwiaXMiLCJwYXJzZUhUTUwiLCJyZWFkeSIsImNoaWxkcmVuIiwiY29udGVudHMiLCJwcmV2IiwiY2xvc2VzdCIsImluZGV4IiwicHJldkFsbCIsImFkZCIsImFkZEJhY2siLCJwYXJlbnRzIiwicGFyZW50c1VudGlsIiwibmV4dEFsbCIsIm5leHRVbnRpbCIsInByZXZVbnRpbCIsInNpYmxpbmdzIiwiY29udGVudERvY3VtZW50IiwiY29udGVudCIsInJldmVyc2UiLCJwcm9taXNlIiwiZG9uZSIsImZhaWwiLCJ0aGVuIiwiQ2FsbGJhY2tzIiwib25jZSIsInN0b3BPbkZhbHNlIiwibWVtb3J5IiwicmVtb3ZlIiwiZGlzYWJsZSIsImxvY2siLCJsb2NrZWQiLCJmaXJlV2l0aCIsImZpcmUiLCJmaXJlZCIsIkRlZmVycmVkIiwic3RhdGUiLCJhbHdheXMiLCJwaXBlIiwicHJvZ3Jlc3MiLCJub3RpZnkiLCJyZXNvbHZlIiwicmVqZWN0IiwiVHlwZUVycm9yIiwibm90aWZ5V2l0aCIsInJlc29sdmVXaXRoIiwiZXhjZXB0aW9uSG9vayIsInN0YWNrVHJhY2UiLCJyZWplY3RXaXRoIiwiZ2V0U3RhY2tIb29rIiwic2V0VGltZW91dCIsIndoZW4iLCJjb25zb2xlIiwid2FybiIsIm5hbWUiLCJtZXNzYWdlIiwic3RhY2siLCJyZWFkeUV4Y2VwdGlvbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZWFkeVdhaXQiLCJyZWFkeVN0YXRlIiwiZG9TY3JvbGwiLCJ0b1VwcGVyQ2FzZSIsInVpZCIsImNhY2hlIiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJzZXQiLCJhY2Nlc3MiLCJoYXNEYXRhIiwiSlNPTiIsInBhcnNlIiwiZGF0YSIsInJlbW92ZURhdGEiLCJfZGF0YSIsIl9yZW1vdmVEYXRhIiwicXVldWUiLCJkZXF1ZXVlIiwiX3F1ZXVlSG9va3MiLCJzdG9wIiwiY2xlYXJRdWV1ZSIsInNvdXJjZSIsImNvbXBvc2VkIiwiZ2V0Um9vdE5vZGUiLCJzdHlsZSIsImRpc3BsYXkiLCJjc3MiLCJjdXIiLCJjc3NOdW1iZXIiLCJ1bml0Iiwic3RhcnQiLCJib2R5Iiwic2hvdyIsImhpZGUiLCJ0b2dnbGUiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiY2hlY2tDbG9uZSIsImNsb25lTm9kZSIsIm5vQ2xvbmVDaGVja2VkIiwib3B0aW9uIiwidGhlYWQiLCJjb2wiLCJ0ciIsInRkIiwiX2RlZmF1bHQiLCJ0Ym9keSIsInRmb290IiwiY29sZ3JvdXAiLCJjYXB0aW9uIiwidGgiLCJvcHRncm91cCIsImh0bWxQcmVmaWx0ZXIiLCJjcmVhdGVUZXh0Tm9kZSIsIlNlIiwia2UiLCJvZmYiLCJldmVudCIsIkFlIiwibmFtZXNwYWNlIiwiaGFuZGxlciIsImlzVHJpZ2dlciIsInNwZWNpYWwiLCJkZWxlZ2F0ZVR5cGUiLCJzdG9wUHJvcGFnYXRpb24iLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsInRyaWdnZXIiLCJFdmVudCIsImdsb2JhbCIsImV2ZW50cyIsImNyZWF0ZSIsImhhbmRsZSIsInRyaWdnZXJlZCIsImRpc3BhdGNoIiwiYmluZFR5cGUiLCJvcmlnVHlwZSIsImRlbGVnYXRlQ291bnQiLCJzZXR1cCIsInRlYXJkb3duIiwicmVtb3ZlRXZlbnQiLCJmaXgiLCJkZWxlZ2F0ZVRhcmdldCIsInByZURpc3BhdGNoIiwiaGFuZGxlcnMiLCJpc1Byb3BhZ2F0aW9uU3RvcHBlZCIsImN1cnJlbnRUYXJnZXQiLCJlbGVtIiwiaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQiLCJybmFtZXNwYWNlIiwiaGFuZGxlT2JqIiwicmVzdWx0IiwicG9zdERpc3BhdGNoIiwiYWRkUHJvcCIsImVudW1lcmFibGUiLCJvcmlnaW5hbEV2ZW50Iiwid3JpdGFibGUiLCJsb2FkIiwibm9CdWJibGUiLCJjbGljayIsImJlZm9yZXVubG9hZCIsInJldHVyblZhbHVlIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiZGVmYXVsdFByZXZlbnRlZCIsInJlbGF0ZWRUYXJnZXQiLCJ0aW1lU3RhbXAiLCJub3ciLCJpc1NpbXVsYXRlZCIsImFsdEtleSIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiY2hhbmdlZFRvdWNoZXMiLCJjdHJsS2V5IiwiZGV0YWlsIiwiZXZlbnRQaGFzZSIsIm1ldGFLZXkiLCJwYWdlWCIsInBhZ2VZIiwic2hpZnRLZXkiLCJ2aWV3IiwiY29kZSIsImNoYXJDb2RlIiwia2V5Iiwia2V5Q29kZSIsImJ1dHRvbnMiLCJjbGllbnRYIiwiY2xpZW50WSIsIm9mZnNldFgiLCJvZmZzZXRZIiwicG9pbnRlcklkIiwicG9pbnRlclR5cGUiLCJzY3JlZW5YIiwic2NyZWVuWSIsInRhcmdldFRvdWNoZXMiLCJ0b0VsZW1lbnQiLCJ0b3VjaGVzIiwid2hpY2giLCJibHVyIiwibW91c2VlbnRlciIsIm1vdXNlbGVhdmUiLCJwb2ludGVyZW50ZXIiLCJwb2ludGVybGVhdmUiLCJvbiIsIm9uZSIsIk5lIiwiRGUiLCJqZSIsInFlIiwiTGUiLCJIZSIsIk9lIiwiUGUiLCJodG1sIiwiY2xvbmUiLCJfZXZhbFVybCIsIlJlIiwiY2xlYW5EYXRhIiwiZGV0YWNoIiwiYXBwZW5kIiwicHJlcGVuZCIsImluc2VydEJlZm9yZSIsImJlZm9yZSIsImFmdGVyIiwicmVwbGFjZVdpdGgiLCJyZXBsYWNlQ2hpbGQiLCJhcHBlbmRUbyIsInByZXBlbmRUbyIsImluc2VydEFmdGVyIiwicmVwbGFjZUFsbCIsIk1lIiwiSWUiLCJvcGVuZXIiLCJnZXRDb21wdXRlZFN0eWxlIiwiV2UiLCJGZSIsIkJlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInBpeGVsQm94U3R5bGVzIiwid2lkdGgiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwiJGUiLCJjc3NUZXh0IiwibWFyZ2luTGVmdCIsInJpZ2h0IiwicG9zaXRpb24iLCJvZmZzZXRXaWR0aCIsInJvdW5kIiwicGFyc2VGbG9hdCIsImJhY2tncm91bmRDbGlwIiwiY2xlYXJDbG9uZVN0eWxlIiwiYm94U2l6aW5nUmVsaWFibGUiLCJwaXhlbFBvc2l0aW9uIiwicmVsaWFibGVNYXJnaW5MZWZ0Iiwic2Nyb2xsYm94U2l6ZSIsInJlbGlhYmxlVHJEaW1lbnNpb25zIiwiaGVpZ2h0IiwicGFyc2VJbnQiLCJfZSIsInplIiwiVWUiLCJYZSIsImNzc1Byb3BzIiwiVmUiLCJHZSIsIlllIiwidmlzaWJpbGl0eSIsIlFlIiwibGV0dGVyU3BhY2luZyIsImZvbnRXZWlnaHQiLCJKZSIsIm1heCIsIktlIiwiY2VpbCIsIlplIiwiZ2V0Q2xpZW50UmVjdHMiLCJldCIsImNzc0hvb2tzIiwib3BhY2l0eSIsImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50IiwiY29sdW1uQ291bnQiLCJmaWxsT3BhY2l0eSIsImZsZXhHcm93IiwiZmxleFNocmluayIsImdyaWRBcmVhIiwiZ3JpZENvbHVtbiIsImdyaWRDb2x1bW5FbmQiLCJncmlkQ29sdW1uU3RhcnQiLCJncmlkUm93IiwiZ3JpZFJvd0VuZCIsImdyaWRSb3dTdGFydCIsImxpbmVIZWlnaHQiLCJvcmRlciIsIm9ycGhhbnMiLCJ3aWRvd3MiLCJ6SW5kZXgiLCJ6b29tIiwic2V0UHJvcGVydHkiLCJpc0Zpbml0ZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm9yZGVyIiwiZXhwYW5kIiwiVHdlZW4iLCJwcm9wIiwiZWFzaW5nIiwib3B0aW9ucyIsInByb3BIb29rcyIsInJ1biIsImR1cmF0aW9uIiwicG9zIiwic3RlcCIsImZ4Iiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImxpbmVhciIsInN3aW5nIiwiY29zIiwiUEkiLCJ0dCIsIm50IiwicnQiLCJpdCIsIm90IiwiYXQiLCJzdCIsImhpZGRlbiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImludGVydmFsIiwidGljayIsInV0IiwiY3QiLCJmdCIsInR3ZWVuZXJzIiwicHJlZmlsdGVycyIsInN0YXJ0VGltZSIsInR3ZWVucyIsInByb3BzIiwib3B0cyIsInNwZWNpYWxFYXNpbmciLCJvcmlnaW5hbFByb3BlcnRpZXMiLCJvcmlnaW5hbE9wdGlvbnMiLCJjcmVhdGVUd2VlbiIsImJpbmQiLCJjb21wbGV0ZSIsInRpbWVyIiwiYW5pbSIsIkFuaW1hdGlvbiIsInR3ZWVuZXIiLCJ1bnF1ZXVlZCIsIm92ZXJmbG93Iiwib3ZlcmZsb3dYIiwib3ZlcmZsb3dZIiwicHJlZmlsdGVyIiwic3BlZWQiLCJzcGVlZHMiLCJvbGQiLCJmYWRlVG8iLCJhbmltYXRlIiwiZmluaXNoIiwidGltZXJzIiwic2xpZGVEb3duIiwic2xpZGVVcCIsInNsaWRlVG9nZ2xlIiwiZmFkZUluIiwiZmFkZU91dCIsImZhZGVUb2dnbGUiLCJzbG93IiwiZmFzdCIsImRlbGF5IiwiY2xlYXJUaW1lb3V0IiwiY2hlY2tPbiIsIm9wdFNlbGVjdGVkIiwicmFkaW9WYWx1ZSIsInB0IiwiZHQiLCJyZW1vdmVBdHRyIiwiYXR0ckhvb2tzIiwiaHQiLCJ2dCIsInl0IiwibXQiLCJyZW1vdmVQcm9wIiwicHJvcEZpeCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ0b2dnbGVDbGFzcyIsImhhc0NsYXNzIiwieHQiLCJ2YWwiLCJ2YWxIb29rcyIsImZvY3VzaW4iLCJidCIsInd0IiwicGFyZW50V2luZG93Iiwic2ltdWxhdGUiLCJ0cmlnZ2VySGFuZGxlciIsIlR0IiwiQ3QiLCJFdCIsInBhcnNlWE1MIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwiU3QiLCJrdCIsIkF0IiwiTnQiLCJEdCIsInBhcmFtIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2VyaWFsaXplIiwic2VyaWFsaXplQXJyYXkiLCJqdCIsInF0IiwiTHQiLCJIdCIsIk90IiwiUHQiLCJSdCIsIk10IiwiSXQiLCJXdCIsIkZ0IiwiQnQiLCJkYXRhVHlwZXMiLCIkdCIsImFqYXhTZXR0aW5ncyIsImZsYXRPcHRpb25zIiwiYWN0aXZlIiwibGFzdE1vZGlmaWVkIiwiZXRhZyIsInVybCIsImlzTG9jYWwiLCJwcm90b2NvbCIsInByb2Nlc3NEYXRhIiwiYXN5bmMiLCJjb250ZW50VHlwZSIsImFjY2VwdHMiLCJ4bWwiLCJqc29uIiwicmVzcG9uc2VGaWVsZHMiLCJjb252ZXJ0ZXJzIiwiY29udGV4dCIsImFqYXhTZXR1cCIsImFqYXhQcmVmaWx0ZXIiLCJhamF4VHJhbnNwb3J0IiwiYWpheCIsInN0YXR1c0NvZGUiLCJnZXRSZXNwb25zZUhlYWRlciIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsInNldFJlcXVlc3RIZWFkZXIiLCJvdmVycmlkZU1pbWVUeXBlIiwibWltZVR5cGUiLCJzdGF0dXMiLCJhYm9ydCIsIm1ldGhvZCIsImRhdGFUeXBlIiwiY3Jvc3NEb21haW4iLCJob3N0IiwidHJhZGl0aW9uYWwiLCJoYXNDb250ZW50IiwiaWZNb2RpZmllZCIsImhlYWRlcnMiLCJiZWZvcmVTZW5kIiwic3VjY2VzcyIsInRpbWVvdXQiLCJzZW5kIiwiZGF0YUZpbHRlciIsInN0YXR1c1RleHQiLCJnZXRKU09OIiwiZ2V0U2NyaXB0Iiwid3JhcEFsbCIsImZpcnN0RWxlbWVudENoaWxkIiwid3JhcElubmVyIiwid3JhcCIsInVud3JhcCIsInZpc2libGUiLCJvZmZzZXRIZWlnaHQiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIl90IiwienQiLCJjb3JzIiwib3BlbiIsInVzZXJuYW1lIiwieGhyRmllbGRzIiwib25sb2FkIiwib25lcnJvciIsIm9uYWJvcnQiLCJvbnRpbWVvdXQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZXNwb25zZVR5cGUiLCJyZXNwb25zZVRleHQiLCJiaW5hcnkiLCJyZXNwb25zZSIsInNjcmlwdCIsInNjcmlwdEF0dHJzIiwiY2hhcnNldCIsInNjcmlwdENoYXJzZXQiLCJVdCIsIlh0IiwiVnQiLCJqc29ucCIsImpzb25wQ2FsbGJhY2siLCJjcmVhdGVIVE1MRG9jdW1lbnQiLCJpbXBsZW1lbnRhdGlvbiIsImFuaW1hdGVkIiwib2Zmc2V0Iiwic2V0T2Zmc2V0IiwidXNpbmciLCJwYWdlWU9mZnNldCIsInBhZ2VYT2Zmc2V0Iiwib2Zmc2V0UGFyZW50Iiwic2Nyb2xsVG8iLCJIZWlnaHQiLCJXaWR0aCIsInVuYmluZCIsImRlbGVnYXRlIiwidW5kZWxlZ2F0ZSIsImhvdmVyIiwiR3QiLCJwcm94eSIsImhvbGRSZWFkeSIsInBhcnNlSlNPTiIsImlzRnVuY3Rpb24iLCJpc1dpbmRvdyIsImNhbWVsQ2FzZSIsImlzTnVtZXJpYyIsImlzTmFOIiwidHJpbSIsImRlZmluZSIsImFtZCIsIll0IiwialF1ZXJ5IiwiUXQiLCJub0NvbmZsaWN0IiwiYXNzaWduIiwidGhyZXNob2xkIiwicmVxdWVzdEZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib1JlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZWxlbWVudCIsIkN1c3RvbUV2ZW50IiwicGFyYW1zIiwidW5kZWZpbmVkIiwiZXZ0IiwiY3JlYXRlRXZlbnQiLCJpbml0Q3VzdG9tRXZlbnQiLCJpZ25vcmVUYWdzIiwidGV4dGFyZWEiLCJtb3VzZWV2ZW50cyIsIm1vdmUiLCJjYW5jZWwiLCJ0b3VjaGV2ZW50cyIsInJzcGFjZXMiLCJldmVudE9wdGlvbnMiLCJldmVudHNTeW1ib2wiLCJnZXRFdmVudHMiLCJub2RlIiwidHlwZXMiLCJwcm9wZXJ0aWVzIiwiZGlzcGF0Y2hFdmVudCIsIlRpbWVyIiwiY2FsbGJhY2siLCJydW5uaW5nIiwidGltZSIsImtpY2siLCJjYiIsImlzSWdub3JlVGFnIiwidGFnTmFtZSIsImlzUHJpbWFyeUJ1dHRvbiIsImlkZW50aWZpZWRUb3VjaCIsInRvdWNoTGlzdCIsImlkZW50aWZpZXIiLCJjaGFuZ2VkVG91Y2giLCJ0b3VjaCIsIm1vdXNlZG93biIsIm1vdXNlbW92ZSIsIm1vdXNlZW5kIiwiY2hlY2tUaHJlc2hvbGQiLCJyZW1vdmVNb3VzZSIsInRvdWNoc3RhcnQiLCJ0b3VjaG1vdmUiLCJ0b3VjaGVuZCIsInJlbW92ZVRvdWNoIiwiZGlzdFgiLCJkaXN0WSIsInRyaWdnZXJTdGFydCIsInRlbXBsYXRlIiwic3RhcnRYIiwic3RhcnRZIiwiZGVsdGFYIiwiZGVsdGFZIiwidmVsb2NpdHlYIiwidmVsb2NpdHlZIiwiZmluZ2VyIiwiZW5hYmxlTW92ZSIsIm1vdmVFbmFibGVkIiwiYWN0aXZlTW91c2Vtb3ZlIiwiYWN0aXZlTW91c2VlbmQiLCJyZW1vdmVBY3RpdmVNb3VzZSIsImVuZEV2ZW50IiwiYWN0aXZlVG91Y2htb3ZlIiwiYWN0aXZlVG91Y2hlbmQiLCJyZW1vdmVBY3RpdmVUb3VjaCIsInVwZGF0ZUV2ZW50IiwibW92ZXN0YXJ0IiwidXBkYXRlIiwiZW5hYmxlTW92ZTEiLCJlbmFibGVNb3ZlMiIsImVuYWJsZU1vdmUzIiwicHJvcGVydHkiLCJtb3ZlZW5kIiwibmljZVNlbGVjdCIsIiRzZWxlY3QiLCIkZHJvcGRvd24iLCJjcmVhdGVfbmljZV9zZWxlY3QiLCIkb3B0aW9ucyIsIiRzZWxlY3RlZCIsIiRvcHRpb24iLCIkZm9jdXNlZF9vcHRpb24iLCIkbmV4dCIsIiRwcmV2IiwicG9pbnRlckV2ZW50cyIsInR3ZW50eXR3ZW50eSIsImRlZmF1bHRfb2Zmc2V0X3BjdCIsIm9yaWVudGF0aW9uIiwiYmVmb3JlX2xhYmVsIiwiYWZ0ZXJfbGFiZWwiLCJub19vdmVybGF5IiwibW92ZV9zbGlkZXJfb25faG92ZXIiLCJtb3ZlX3dpdGhfaGFuZGxlX29ubHkiLCJjbGlja190b19tb3ZlIiwic2xpZGVyUGN0IiwiY29udGFpbmVyIiwic2xpZGVyT3JpZW50YXRpb24iLCJiZWZvcmVEaXJlY3Rpb24iLCJhZnRlckRpcmVjdGlvbiIsIm92ZXJsYXkiLCJiZWZvcmVJbWciLCJhZnRlckltZyIsInNsaWRlciIsImNhbGNPZmZzZXQiLCJkaW1lbnNpb25QY3QiLCJjdyIsImNoIiwiYWRqdXN0Q29udGFpbmVyIiwiYWRqdXN0U2xpZGVyIiwicGN0IiwibWluTWF4TnVtYmVyIiwibnVtIiwibWluIiwiZ2V0U2xpZGVyUGVyY2VudGFnZSIsInBvc2l0aW9uWCIsInBvc2l0aW9uWSIsInNsaWRlclBlcmNlbnRhZ2UiLCJpbWdIZWlnaHQiLCJpbWdXaWR0aCIsIm9uTW92ZVN0YXJ0Iiwib25Nb3ZlIiwib25Nb3ZlRW5kIiwibW92ZVRhcmdldCIsInJlcXVpcmUiLCJ2YWxpZGF0ZSIsImRlYnVnIiwidmFsaWRhdG9yIiwic2V0dGluZ3MiLCJvbnN1Ym1pdCIsInN1Ym1pdEJ1dHRvbiIsImNhbmNlbFN1Ym1pdCIsInN1Ym1pdEhhbmRsZXIiLCJmb3JtU3VibWl0dGVkIiwiY3VycmVudEZvcm0iLCJmb3JtIiwicGVuZGluZ1JlcXVlc3QiLCJmb2N1c0ludmFsaWQiLCJ2YWxpZCIsImVycm9yTGlzdCIsInJ1bGVzIiwic3RhdGljUnVsZXMiLCJub3JtYWxpemVSdWxlIiwibWVzc2FnZXMiLCJub3JtYWxpemVSdWxlcyIsImNsYXNzUnVsZXMiLCJhdHRyaWJ1dGVSdWxlcyIsImRhdGFSdWxlcyIsInJlcXVpcmVkIiwicmVtb3RlIiwiYmxhbmsiLCJmaWxsZWQiLCJ1bmNoZWNrZWQiLCJkZWZhdWx0cyIsImZvcm1hdCIsImdyb3VwcyIsImVycm9yQ2xhc3MiLCJwZW5kaW5nQ2xhc3MiLCJ2YWxpZENsYXNzIiwiZXJyb3JFbGVtZW50IiwiZm9jdXNDbGVhbnVwIiwiZXJyb3JDb250YWluZXIiLCJlcnJvckxhYmVsQ29udGFpbmVyIiwiaWdub3JlIiwiaWdub3JlVGl0bGUiLCJvbmZvY3VzaW4iLCJsYXN0QWN0aXZlIiwidW5oaWdobGlnaHQiLCJoaWRlVGhlc2UiLCJlcnJvcnNGb3IiLCJvbmZvY3Vzb3V0IiwiY2hlY2thYmxlIiwic3VibWl0dGVkIiwib3B0aW9uYWwiLCJvbmtleXVwIiwiZWxlbWVudFZhbHVlIiwiaW52YWxpZCIsIm9uY2xpY2siLCJoaWdobGlnaHQiLCJmaW5kQnlOYW1lIiwic2V0RGVmYXVsdHMiLCJlbWFpbCIsImRhdGUiLCJkYXRlSVNPIiwibnVtYmVyIiwiZGlnaXRzIiwiZXF1YWxUbyIsIm1heGxlbmd0aCIsIm1pbmxlbmd0aCIsInJhbmdlbGVuZ3RoIiwicmFuZ2UiLCJhdXRvQ3JlYXRlUmFuZ2VzIiwibGFiZWxDb250YWluZXIiLCJlcnJvckNvbnRleHQiLCJjb250YWluZXJzIiwidmFsdWVDYWNoZSIsInBlbmRpbmciLCJpbnZhbGlkSGFuZGxlciIsImNoZWNrRm9ybSIsImVycm9yTWFwIiwic2hvd0Vycm9ycyIsInByZXBhcmVGb3JtIiwiY3VycmVudEVsZW1lbnRzIiwiZWxlbWVudHMiLCJjaGVjayIsImNsZWFuIiwidmFsaWRhdGlvblRhcmdldEZvciIsInByZXBhcmVFbGVtZW50IiwibnVtYmVyT2ZJbnZhbGlkcyIsInRvSGlkZSIsInN1Y2Nlc3NMaXN0IiwiZGVmYXVsdFNob3dFcnJvcnMiLCJyZXNldEZvcm0iLCJoaWRlRXJyb3JzIiwicmVzZXRFbGVtZW50cyIsIm9iamVjdExlbmd0aCIsImFkZFdyYXBwZXIiLCJzaXplIiwiZmluZExhc3RBY3RpdmUiLCJlcnJvcnMiLCJyZXNldEludGVybmFscyIsInRvU2hvdyIsInZhbGlkaXR5IiwiYmFkSW5wdXQiLCJzdWJzdHIiLCJsYXN0SW5kZXhPZiIsIm5vcm1hbGl6ZXIiLCJwYXJhbWV0ZXJzIiwibWV0aG9kcyIsImZvcm1hdEFuZEFkZCIsImxvZyIsImN1c3RvbURhdGFNZXNzYWdlIiwiY2hhckF0Iiwic3Vic3RyaW5nIiwiY3VzdG9tTWVzc2FnZSIsImZpbmREZWZpbmVkIiwiZGVmYXVsdE1lc3NhZ2UiLCJ0aXRsZSIsIndyYXBwZXIiLCJzaG93TGFiZWwiLCJ2YWxpZEVsZW1lbnRzIiwiaW52YWxpZEVsZW1lbnRzIiwiaWRPck5hbWUiLCJlcnJvclBsYWNlbWVudCIsImVzY2FwZUNzc01ldGEiLCJnZXRMZW5ndGgiLCJkZXBlbmQiLCJkZXBlbmRUeXBlcyIsInN0cmluZyIsInN0YXJ0UmVxdWVzdCIsInN0b3BSZXF1ZXN0IiwicHJldmlvdXNWYWx1ZSIsImRlc3Ryb3kiLCJjbGFzc1J1bGVTZXR0aW5ncyIsImNyZWRpdGNhcmQiLCJhZGRDbGFzc1J1bGVzIiwibm9ybWFsaXplQXR0cmlidXRlUnVsZSIsIk51bWJlciIsImRlcGVuZHMiLCJhZGRNZXRob2QiLCJwb3ciLCJvcmlnaW5hbE1lc3NhZ2UiLCJtb2RlIiwicG9ydCIsIlN3aXBlciIsImRpcmVjdGlvbiIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJsb29wIiwiZmFkZUVmZmVjdCIsImNyb3NzRmFkZSIsImF1dG9wbGF5IiwiZGlzYWJsZU9uSW50ZXJhY3Rpb24iLCJwYWdpbmF0aW9uIiwiZWwiLCJjbGlja2FibGUiLCJuYXZpZ2F0aW9uUHJldiIsIm5hdmlnYXRpb25OZXh0Iiwic3dpcGVyIiwic2Nyb2xsYmFyIiwiZHJhZ2dhYmxlIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImJyZWFrcG9pbnRzIiwiZWZmZWN0IiwicmVuZGVyQnVsbGV0Iiwic2xpZGVDaGFuZ2UiLCJxdWVyeVNlbGVjdG9yIiwiaXNTdGlja3kiLCJoZWFkZXJIZWlnaHQiLCJlbGVtZW50VG9wIiwib2Zmc2V0VG9wIiwiYmVoYXZpb3IiLCJidWxsZXRzIiwiZnJlZU1vZGUiLCJzd2lwZXJNYXJxdWUiLCJhbGxvd1RvdWNoTW92ZSIsImRvb3JzU3dpcGVySW5pdCIsImlzUmV2ZXJzZSIsImluaXRpYWxTbGlkZSIsInJldmVyc2VEaXJlY3Rpb24iLCJkb29yc1N3aXBlckVsMSIsImRvb3JzU3dpcGVyRWwyIiwiZG9vcnNTd2lwZXJFbDMiLCJkb29yc1N3aXBlckVsNCIsImdhbGxhcnlfX3N3aXBlciIsIndhdGNoU2xpZGVzUHJvZ3Jlc3MiLCJnYWxsZXJ5VGh1bWJzU3dpcGVyIiwicmVzaXplIiwiZ2FsbGVyeVN3aXBlciIsInRodW1icyIsIiRjb250YWluZXIiLCJzd2lwZXJUYWJzIiwidG91Y2hTdGFydEZvcmNlUHJldmVudERlZmF1bHQiLCIkdGhpcyIsIiRmb3JtIiwiJGlucHV0IiwiJGJ0biIsIiRwYXJlbnQiLCJpbm5lcldpZHRoIiwicGF0dGVybiIsInBob25lIiwibWVudUNsb3NlIiwibWVudU9wZW4iLCJzbGlkZVRvZ2dsZVNlY3Rpb24iLCJvdXRlcldpZHRoIiwicmlnaHREcm9wZG93biIsIiRzdWJtZW51IiwiJG9mZnNldFRvTGVmdCIsIndpbmRvd1dpZHRoIiwiJGlzT3BlbiIsImNhdGFsb2dNZW51T3BlbiIsImNhdGFsb2dNZW51Q2xvc2UiLCJwb3B1cENsb3NlIiwiJGVsZW0iLCJwb3B1cE9wZW4iLCIkYWdyZWVtZW50Q29udHJvbCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwic2F2ZWRMYW5ndWFnZSIsImNoYW5nZSIsInNlbGVjdGVkTGFuZyIsImZpeGVkSGVhZGVyIiwiaW5uZXJIZWlnaHQiLCJzY3JvbGwiLCJyYXRpbyIsImNvbWUiLCJsYXp5TG9hZEluc3RhbmNlIiwiTGF6eUxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBLENBQUMsVUFBU0EsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQzs7QUFBYSxzQkFBaUJDLE1BQWpCLHlDQUFpQkEsTUFBakIsTUFBeUIsb0JBQWlCQSxNQUFNLENBQUNDLE9BQXhCLENBQXpCLEdBQXlERCxNQUFNLENBQUNDLE9BQVAsR0FBZUgsQ0FBQyxDQUFDSSxRQUFGLEdBQVdILENBQUMsQ0FBQ0QsQ0FBRCxFQUFHLENBQUMsQ0FBSixDQUFaLEdBQW1CLFVBQVNBLENBQVQsRUFBVztBQUFDLFFBQUcsQ0FBQ0EsQ0FBQyxDQUFDSSxRQUFOLEVBQWUsTUFBTSxJQUFJQyxLQUFKLENBQVUsMENBQVYsQ0FBTjtBQUE0RCxXQUFPSixDQUFDLENBQUNELENBQUQsQ0FBUjtBQUFZLEdBQTlMLEdBQStMQyxDQUFDLENBQUNELENBQUQsQ0FBaE07QUFBb00sQ0FBL04sQ0FBZ08sZUFBYSxPQUFPTSxNQUFwQixHQUEyQkEsTUFBM0IsU0FBaE8sRUFBdVEsVUFBU0MsQ0FBVCxFQUFXUCxDQUFYLEVBQWE7QUFBQzs7QUFBYSxNQUFJQyxDQUFDLEdBQUMsRUFBTjtBQUFBLE1BQVNPLENBQUMsR0FBQ0MsTUFBTSxDQUFDQyxjQUFsQjtBQUFBLE1BQWlDQyxDQUFDLEdBQUNWLENBQUMsQ0FBQ1csS0FBckM7QUFBQSxNQUEyQ0MsQ0FBQyxHQUFDWixDQUFDLENBQUNhLElBQUYsR0FBTyxVQUFTZCxDQUFULEVBQVc7QUFBQyxXQUFPQyxDQUFDLENBQUNhLElBQUYsQ0FBT0MsSUFBUCxDQUFZZixDQUFaLENBQVA7QUFBc0IsR0FBekMsR0FBMEMsVUFBU0EsQ0FBVCxFQUFXO0FBQUMsV0FBT0MsQ0FBQyxDQUFD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QjtBQUNILEdBRkQsTUFFTztBQUNIaGlCLElBQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JpaUIsV0FBaEIsQ0FBNEIsU0FBNUI7QUFDSDs7QUFBQTtBQUVEamlCLEVBQUFBLENBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCeEQsSUFBMUIsQ0FBK0IsWUFBWTtBQUN2QyxRQUFJc2dDLEVBQUUsR0FBRzk4QixDQUFDLENBQUMsSUFBRCxDQUFWOztBQUVBLFFBQUl3aEMsSUFBSSxDQUFDMUUsRUFBRCxDQUFSLEVBQWM7QUFDVkEsTUFBQUEsRUFBRSxDQUFDOWEsUUFBSCxDQUFZLFNBQVo7QUFDSDs7QUFBQTtBQUNKLEdBTkQ7QUFPRCxDQWZEO0FBaUJBaGlCLENBQUMsQ0FBQyxLQUFELENBQUQsQ0FBU3hELElBQVQsQ0FBZSxVQUFTL0QsQ0FBVCxFQUFZO0FBQ3pCdUgsRUFBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ2lCLFFBQVIsQ0FBaUIsTUFBakI7QUFDRCxDQUZEO0FBR0EsSUFBSXlmLGdCQUFnQixHQUFHLElBQUlDLFFBQUosRUFBdkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgalF1ZXJ5IHYzLjUuMSB8IChjKSBKUyBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgfCBqcXVlcnkub3JnL2xpY2Vuc2UgKi9cbiFmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO1wib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1lLmRvY3VtZW50P3QoZSwhMCk6ZnVuY3Rpb24oZSl7aWYoIWUuZG9jdW1lbnQpdGhyb3cgbmV3IEVycm9yKFwialF1ZXJ5IHJlcXVpcmVzIGEgd2luZG93IHdpdGggYSBkb2N1bWVudFwiKTtyZXR1cm4gdChlKX06dChlKX0oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6dGhpcyxmdW5jdGlvbihDLGUpe1widXNlIHN0cmljdFwiO3ZhciB0PVtdLHI9T2JqZWN0LmdldFByb3RvdHlwZU9mLHM9dC5zbGljZSxnPXQuZmxhdD9mdW5jdGlvbihlKXtyZXR1cm4gdC5mbGF0LmNhbGwoZSl9OmZ1bmN0aW9uKGUpe3JldHVybiB0LmNvbmNhdC5hcHBseShbXSxlKX0sdT10LnB1c2gsaT10LmluZGV4T2Ysbj17fSxvPW4udG9TdHJpbmcsdj1uLmhhc093blByb3BlcnR5LGE9di50b1N0cmluZyxsPWEuY2FsbChPYmplY3QpLHk9e30sbT1mdW5jdGlvbihlKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZcIm51bWJlclwiIT10eXBlb2YgZS5ub2RlVHlwZX0seD1mdW5jdGlvbihlKXtyZXR1cm4gbnVsbCE9ZSYmZT09PWUud2luZG93fSxFPUMuZG9jdW1lbnQsYz17dHlwZTohMCxzcmM6ITAsbm9uY2U6ITAsbm9Nb2R1bGU6ITB9O2Z1bmN0aW9uIGIoZSx0LG4pe3ZhciByLGksbz0obj1ufHxFKS5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2lmKG8udGV4dD1lLHQpZm9yKHIgaW4gYykoaT10W3JdfHx0LmdldEF0dHJpYnV0ZSYmdC5nZXRBdHRyaWJ1dGUocikpJiZvLnNldEF0dHJpYnV0ZShyLGkpO24uaGVhZC5hcHBlbmRDaGlsZChvKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG8pfWZ1bmN0aW9uIHcoZSl7cmV0dXJuIG51bGw9PWU/ZStcIlwiOlwib2JqZWN0XCI9PXR5cGVvZiBlfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlP25bby5jYWxsKGUpXXx8XCJvYmplY3RcIjp0eXBlb2YgZX12YXIgZj1cIjMuNS4xXCIsUz1mdW5jdGlvbihlLHQpe3JldHVybiBuZXcgUy5mbi5pbml0KGUsdCl9O2Z1bmN0aW9uIHAoZSl7dmFyIHQ9ISFlJiZcImxlbmd0aFwiaW4gZSYmZS5sZW5ndGgsbj13KGUpO3JldHVybiFtKGUpJiYheChlKSYmKFwiYXJyYXlcIj09PW58fDA9PT10fHxcIm51bWJlclwiPT10eXBlb2YgdCYmMDx0JiZ0LTEgaW4gZSl9Uy5mbj1TLnByb3RvdHlwZT17anF1ZXJ5OmYsY29uc3RydWN0b3I6UyxsZW5ndGg6MCx0b0FycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIHMuY2FsbCh0aGlzKX0sZ2V0OmZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP3MuY2FsbCh0aGlzKTplPDA/dGhpc1tlK3RoaXMubGVuZ3RoXTp0aGlzW2VdfSxwdXNoU3RhY2s6ZnVuY3Rpb24oZSl7dmFyIHQ9Uy5tZXJnZSh0aGlzLmNvbnN0cnVjdG9yKCksZSk7cmV0dXJuIHQucHJldk9iamVjdD10aGlzLHR9LGVhY2g6ZnVuY3Rpb24oZSl7cmV0dXJuIFMuZWFjaCh0aGlzLGUpfSxtYXA6ZnVuY3Rpb24obil7cmV0dXJuIHRoaXMucHVzaFN0YWNrKFMubWFwKHRoaXMsZnVuY3Rpb24oZSx0KXtyZXR1cm4gbi5jYWxsKGUsdCxlKX0pKX0sc2xpY2U6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2socy5hcHBseSh0aGlzLGFyZ3VtZW50cykpfSxmaXJzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKDApfSxsYXN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoLTEpfSxldmVuOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKFMuZ3JlcCh0aGlzLGZ1bmN0aW9uKGUsdCl7cmV0dXJuKHQrMSklMn0pKX0sb2RkOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKFMuZ3JlcCh0aGlzLGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQlMn0pKX0sZXE6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5sZW5ndGgsbj0rZSsoZTwwP3Q6MCk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKDA8PW4mJm48dD9bdGhpc1tuXV06W10pfSxlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wcmV2T2JqZWN0fHx0aGlzLmNvbnN0cnVjdG9yKCl9LHB1c2g6dSxzb3J0OnQuc29ydCxzcGxpY2U6dC5zcGxpY2V9LFMuZXh0ZW5kPVMuZm4uZXh0ZW5kPWZ1bmN0aW9uKCl7dmFyIGUsdCxuLHIsaSxvLGE9YXJndW1lbnRzWzBdfHx7fSxzPTEsdT1hcmd1bWVudHMubGVuZ3RoLGw9ITE7Zm9yKFwiYm9vbGVhblwiPT10eXBlb2YgYSYmKGw9YSxhPWFyZ3VtZW50c1tzXXx8e30scysrKSxcIm9iamVjdFwiPT10eXBlb2YgYXx8bShhKXx8KGE9e30pLHM9PT11JiYoYT10aGlzLHMtLSk7czx1O3MrKylpZihudWxsIT0oZT1hcmd1bWVudHNbc10pKWZvcih0IGluIGUpcj1lW3RdLFwiX19wcm90b19fXCIhPT10JiZhIT09ciYmKGwmJnImJihTLmlzUGxhaW5PYmplY3Qocil8fChpPUFycmF5LmlzQXJyYXkocikpKT8obj1hW3RdLG89aSYmIUFycmF5LmlzQXJyYXkobik/W106aXx8Uy5pc1BsYWluT2JqZWN0KG4pP246e30saT0hMSxhW3RdPVMuZXh0ZW5kKGwsbyxyKSk6dm9pZCAwIT09ciYmKGFbdF09cikpO3JldHVybiBhfSxTLmV4dGVuZCh7ZXhwYW5kbzpcImpRdWVyeVwiKyhmK01hdGgucmFuZG9tKCkpLnJlcGxhY2UoL1xcRC9nLFwiXCIpLGlzUmVhZHk6ITAsZXJyb3I6ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKGUpfSxub29wOmZ1bmN0aW9uKCl7fSxpc1BsYWluT2JqZWN0OmZ1bmN0aW9uKGUpe3ZhciB0LG47cmV0dXJuISghZXx8XCJbb2JqZWN0IE9iamVjdF1cIiE9PW8uY2FsbChlKSkmJighKHQ9cihlKSl8fFwiZnVuY3Rpb25cIj09dHlwZW9mKG49di5jYWxsKHQsXCJjb25zdHJ1Y3RvclwiKSYmdC5jb25zdHJ1Y3RvcikmJmEuY2FsbChuKT09PWwpfSxpc0VtcHR5T2JqZWN0OmZ1bmN0aW9uKGUpe3ZhciB0O2Zvcih0IGluIGUpcmV0dXJuITE7cmV0dXJuITB9LGdsb2JhbEV2YWw6ZnVuY3Rpb24oZSx0LG4pe2IoZSx7bm9uY2U6dCYmdC5ub25jZX0sbil9LGVhY2g6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPTA7aWYocChlKSl7Zm9yKG49ZS5sZW5ndGg7cjxuO3IrKylpZighMT09PXQuY2FsbChlW3JdLHIsZVtyXSkpYnJlYWt9ZWxzZSBmb3IociBpbiBlKWlmKCExPT09dC5jYWxsKGVbcl0scixlW3JdKSlicmVhaztyZXR1cm4gZX0sbWFrZUFycmF5OmZ1bmN0aW9uKGUsdCl7dmFyIG49dHx8W107cmV0dXJuIG51bGwhPWUmJihwKE9iamVjdChlKSk/Uy5tZXJnZShuLFwic3RyaW5nXCI9PXR5cGVvZiBlP1tlXTplKTp1LmNhbGwobixlKSksbn0saW5BcnJheTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIG51bGw9PXQ/LTE6aS5jYWxsKHQsZSxuKX0sbWVyZ2U6ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49K3QubGVuZ3RoLHI9MCxpPWUubGVuZ3RoO3I8bjtyKyspZVtpKytdPXRbcl07cmV0dXJuIGUubGVuZ3RoPWksZX0sZ3JlcDpmdW5jdGlvbihlLHQsbil7Zm9yKHZhciByPVtdLGk9MCxvPWUubGVuZ3RoLGE9IW47aTxvO2krKykhdChlW2ldLGkpIT09YSYmci5wdXNoKGVbaV0pO3JldHVybiByfSxtYXA6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz0wLGE9W107aWYocChlKSlmb3Iocj1lLmxlbmd0aDtvPHI7bysrKW51bGwhPShpPXQoZVtvXSxvLG4pKSYmYS5wdXNoKGkpO2Vsc2UgZm9yKG8gaW4gZSludWxsIT0oaT10KGVbb10sbyxuKSkmJmEucHVzaChpKTtyZXR1cm4gZyhhKX0sZ3VpZDoxLHN1cHBvcnQ6eX0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmKFMuZm5bU3ltYm9sLml0ZXJhdG9yXT10W1N5bWJvbC5pdGVyYXRvcl0pLFMuZWFjaChcIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3IgU3ltYm9sXCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGUsdCl7bltcIltvYmplY3QgXCIrdCtcIl1cIl09dC50b0xvd2VyQ2FzZSgpfSk7dmFyIGQ9ZnVuY3Rpb24obil7dmFyIGUsZCxiLG8saSxoLGYsZyx3LHUsbCxULEMsYSxFLHYscyxjLHksUz1cInNpenpsZVwiKzEqbmV3IERhdGUscD1uLmRvY3VtZW50LGs9MCxyPTAsbT11ZSgpLHg9dWUoKSxBPXVlKCksTj11ZSgpLEQ9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZT09PXQmJihsPSEwKSwwfSxqPXt9Lmhhc093blByb3BlcnR5LHQ9W10scT10LnBvcCxMPXQucHVzaCxIPXQucHVzaCxPPXQuc2xpY2UsUD1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0wLHI9ZS5sZW5ndGg7bjxyO24rKylpZihlW25dPT09dClyZXR1cm4gbjtyZXR1cm4tMX0sUj1cImNoZWNrZWR8c2VsZWN0ZWR8YXN5bmN8YXV0b2ZvY3VzfGF1dG9wbGF5fGNvbnRyb2xzfGRlZmVyfGRpc2FibGVkfGhpZGRlbnxpc21hcHxsb29wfG11bHRpcGxlfG9wZW58cmVhZG9ubHl8cmVxdWlyZWR8c2NvcGVkXCIsTT1cIltcXFxceDIwXFxcXHRcXFxcclxcXFxuXFxcXGZdXCIsST1cIig/OlxcXFxcXFxcW1xcXFxkYS1mQS1GXXsxLDZ9XCIrTStcIj98XFxcXFxcXFxbXlxcXFxyXFxcXG5cXFxcZl18W1xcXFx3LV18W15cXDAtXFxcXHg3Zl0pK1wiLFc9XCJcXFxcW1wiK00rXCIqKFwiK0krXCIpKD86XCIrTStcIiooWypeJHwhfl0/PSlcIitNK1wiKig/OicoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcInwoXCIrSStcIikpfClcIitNK1wiKlxcXFxdXCIsRj1cIjooXCIrSStcIikoPzpcXFxcKCgoJygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwiKXwoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKVtcXFxcXV18XCIrVytcIikqKXwuKilcXFxcKXwpXCIsQj1uZXcgUmVnRXhwKE0rXCIrXCIsXCJnXCIpLCQ9bmV3IFJlZ0V4cChcIl5cIitNK1wiK3woKD86XnxbXlxcXFxcXFxcXSkoPzpcXFxcXFxcXC4pKilcIitNK1wiKyRcIixcImdcIiksXz1uZXcgUmVnRXhwKFwiXlwiK00rXCIqLFwiK00rXCIqXCIpLHo9bmV3IFJlZ0V4cChcIl5cIitNK1wiKihbPit+XXxcIitNK1wiKVwiK00rXCIqXCIpLFU9bmV3IFJlZ0V4cChNK1wifD5cIiksWD1uZXcgUmVnRXhwKEYpLFY9bmV3IFJlZ0V4cChcIl5cIitJK1wiJFwiKSxHPXtJRDpuZXcgUmVnRXhwKFwiXiMoXCIrSStcIilcIiksQ0xBU1M6bmV3IFJlZ0V4cChcIl5cXFxcLihcIitJK1wiKVwiKSxUQUc6bmV3IFJlZ0V4cChcIl4oXCIrSStcInxbKl0pXCIpLEFUVFI6bmV3IFJlZ0V4cChcIl5cIitXKSxQU0VVRE86bmV3IFJlZ0V4cChcIl5cIitGKSxDSElMRDpuZXcgUmVnRXhwKFwiXjoob25seXxmaXJzdHxsYXN0fG50aHxudGgtbGFzdCktKGNoaWxkfG9mLXR5cGUpKD86XFxcXChcIitNK1wiKihldmVufG9kZHwoKFsrLV18KShcXFxcZCopbnwpXCIrTStcIiooPzooWystXXwpXCIrTStcIiooXFxcXGQrKXwpKVwiK00rXCIqXFxcXCl8KVwiLFwiaVwiKSxib29sOm5ldyBSZWdFeHAoXCJeKD86XCIrUitcIikkXCIsXCJpXCIpLG5lZWRzQ29udGV4dDpuZXcgUmVnRXhwKFwiXlwiK00rXCIqWz4rfl18OihldmVufG9kZHxlcXxndHxsdHxudGh8Zmlyc3R8bGFzdCkoPzpcXFxcKFwiK00rXCIqKCg/Oi1cXFxcZCk/XFxcXGQqKVwiK00rXCIqXFxcXCl8KSg/PVteLV18JClcIixcImlcIil9LFk9L0hUTUwkL2ksUT0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLEo9L15oXFxkJC9pLEs9L15bXntdK1xce1xccypcXFtuYXRpdmUgXFx3LyxaPS9eKD86IyhbXFx3LV0rKXwoXFx3Kyl8XFwuKFtcXHctXSspKSQvLGVlPS9bK35dLyx0ZT1uZXcgUmVnRXhwKFwiXFxcXFxcXFxbXFxcXGRhLWZBLUZdezEsNn1cIitNK1wiP3xcXFxcXFxcXChbXlxcXFxyXFxcXG5cXFxcZl0pXCIsXCJnXCIpLG5lPWZ1bmN0aW9uKGUsdCl7dmFyIG49XCIweFwiK2Uuc2xpY2UoMSktNjU1MzY7cmV0dXJuIHR8fChuPDA/U3RyaW5nLmZyb21DaGFyQ29kZShuKzY1NTM2KTpTdHJpbmcuZnJvbUNoYXJDb2RlKG4+PjEwfDU1Mjk2LDEwMjMmbnw1NjMyMCkpfSxyZT0vKFtcXDAtXFx4MWZcXHg3Zl18Xi0/XFxkKXxeLSR8W15cXDAtXFx4MWZcXHg3Zi1cXHVGRkZGXFx3LV0vZyxpZT1mdW5jdGlvbihlLHQpe3JldHVybiB0P1wiXFwwXCI9PT1lP1wiXFx1ZmZmZFwiOmUuc2xpY2UoMCwtMSkrXCJcXFxcXCIrZS5jaGFyQ29kZUF0KGUubGVuZ3RoLTEpLnRvU3RyaW5nKDE2KStcIiBcIjpcIlxcXFxcIitlfSxvZT1mdW5jdGlvbigpe1QoKX0sYWU9YmUoZnVuY3Rpb24oZSl7cmV0dXJuITA9PT1lLmRpc2FibGVkJiZcImZpZWxkc2V0XCI9PT1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCl9LHtkaXI6XCJwYXJlbnROb2RlXCIsbmV4dDpcImxlZ2VuZFwifSk7dHJ5e0guYXBwbHkodD1PLmNhbGwocC5jaGlsZE5vZGVzKSxwLmNoaWxkTm9kZXMpLHRbcC5jaGlsZE5vZGVzLmxlbmd0aF0ubm9kZVR5cGV9Y2F0Y2goZSl7SD17YXBwbHk6dC5sZW5ndGg/ZnVuY3Rpb24oZSx0KXtMLmFwcGx5KGUsTy5jYWxsKHQpKX06ZnVuY3Rpb24oZSx0KXt2YXIgbj1lLmxlbmd0aCxyPTA7d2hpbGUoZVtuKytdPXRbcisrXSk7ZS5sZW5ndGg9bi0xfX19ZnVuY3Rpb24gc2UodCxlLG4scil7dmFyIGksbyxhLHMsdSxsLGMsZj1lJiZlLm93bmVyRG9jdW1lbnQscD1lP2Uubm9kZVR5cGU6OTtpZihuPW58fFtdLFwic3RyaW5nXCIhPXR5cGVvZiB0fHwhdHx8MSE9PXAmJjkhPT1wJiYxMSE9PXApcmV0dXJuIG47aWYoIXImJihUKGUpLGU9ZXx8QyxFKSl7aWYoMTEhPT1wJiYodT1aLmV4ZWModCkpKWlmKGk9dVsxXSl7aWYoOT09PXApe2lmKCEoYT1lLmdldEVsZW1lbnRCeUlkKGkpKSlyZXR1cm4gbjtpZihhLmlkPT09aSlyZXR1cm4gbi5wdXNoKGEpLG59ZWxzZSBpZihmJiYoYT1mLmdldEVsZW1lbnRCeUlkKGkpKSYmeShlLGEpJiZhLmlkPT09aSlyZXR1cm4gbi5wdXNoKGEpLG59ZWxzZXtpZih1WzJdKXJldHVybiBILmFwcGx5KG4sZS5nZXRFbGVtZW50c0J5VGFnTmFtZSh0KSksbjtpZigoaT11WzNdKSYmZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUpcmV0dXJuIEguYXBwbHkobixlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoaSkpLG59aWYoZC5xc2EmJiFOW3QrXCIgXCJdJiYoIXZ8fCF2LnRlc3QodCkpJiYoMSE9PXB8fFwib2JqZWN0XCIhPT1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpKXtpZihjPXQsZj1lLDE9PT1wJiYoVS50ZXN0KHQpfHx6LnRlc3QodCkpKXsoZj1lZS50ZXN0KHQpJiZ5ZShlLnBhcmVudE5vZGUpfHxlKT09PWUmJmQuc2NvcGV8fCgocz1lLmdldEF0dHJpYnV0ZShcImlkXCIpKT9zPXMucmVwbGFjZShyZSxpZSk6ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLHM9UykpLG89KGw9aCh0KSkubGVuZ3RoO3doaWxlKG8tLSlsW29dPShzP1wiI1wiK3M6XCI6c2NvcGVcIikrXCIgXCIreGUobFtvXSk7Yz1sLmpvaW4oXCIsXCIpfXRyeXtyZXR1cm4gSC5hcHBseShuLGYucXVlcnlTZWxlY3RvckFsbChjKSksbn1jYXRjaChlKXtOKHQsITApfWZpbmFsbHl7cz09PVMmJmUucmVtb3ZlQXR0cmlidXRlKFwiaWRcIil9fX1yZXR1cm4gZyh0LnJlcGxhY2UoJCxcIiQxXCIpLGUsbixyKX1mdW5jdGlvbiB1ZSgpe3ZhciByPVtdO3JldHVybiBmdW5jdGlvbiBlKHQsbil7cmV0dXJuIHIucHVzaCh0K1wiIFwiKT5iLmNhY2hlTGVuZ3RoJiZkZWxldGUgZVtyLnNoaWZ0KCldLGVbdCtcIiBcIl09bn19ZnVuY3Rpb24gbGUoZSl7cmV0dXJuIGVbU109ITAsZX1mdW5jdGlvbiBjZShlKXt2YXIgdD1DLmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTt0cnl7cmV0dXJuISFlKHQpfWNhdGNoKGUpe3JldHVybiExfWZpbmFsbHl7dC5wYXJlbnROb2RlJiZ0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodCksdD1udWxsfX1mdW5jdGlvbiBmZShlLHQpe3ZhciBuPWUuc3BsaXQoXCJ8XCIpLHI9bi5sZW5ndGg7d2hpbGUoci0tKWIuYXR0ckhhbmRsZVtuW3JdXT10fWZ1bmN0aW9uIHBlKGUsdCl7dmFyIG49dCYmZSxyPW4mJjE9PT1lLm5vZGVUeXBlJiYxPT09dC5ub2RlVHlwZSYmZS5zb3VyY2VJbmRleC10LnNvdXJjZUluZGV4O2lmKHIpcmV0dXJuIHI7aWYobil3aGlsZShuPW4ubmV4dFNpYmxpbmcpaWYobj09PXQpcmV0dXJuLTE7cmV0dXJuIGU/MTotMX1mdW5jdGlvbiBkZSh0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuXCJpbnB1dFwiPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiZlLnR5cGU9PT10fX1mdW5jdGlvbiBoZShuKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVybihcImlucHV0XCI9PT10fHxcImJ1dHRvblwiPT09dCkmJmUudHlwZT09PW59fWZ1bmN0aW9uIGdlKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm5cImZvcm1cImluIGU/ZS5wYXJlbnROb2RlJiYhMT09PWUuZGlzYWJsZWQ/XCJsYWJlbFwiaW4gZT9cImxhYmVsXCJpbiBlLnBhcmVudE5vZGU/ZS5wYXJlbnROb2RlLmRpc2FibGVkPT09dDplLmRpc2FibGVkPT09dDplLmlzRGlzYWJsZWQ9PT10fHxlLmlzRGlzYWJsZWQhPT0hdCYmYWUoZSk9PT10OmUuZGlzYWJsZWQ9PT10OlwibGFiZWxcImluIGUmJmUuZGlzYWJsZWQ9PT10fX1mdW5jdGlvbiB2ZShhKXtyZXR1cm4gbGUoZnVuY3Rpb24obyl7cmV0dXJuIG89K28sbGUoZnVuY3Rpb24oZSx0KXt2YXIgbixyPWEoW10sZS5sZW5ndGgsbyksaT1yLmxlbmd0aDt3aGlsZShpLS0pZVtuPXJbaV1dJiYoZVtuXT0hKHRbbl09ZVtuXSkpfSl9KX1mdW5jdGlvbiB5ZShlKXtyZXR1cm4gZSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUmJmV9Zm9yKGUgaW4gZD1zZS5zdXBwb3J0PXt9LGk9c2UuaXNYTUw9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5uYW1lc3BhY2VVUkksbj0oZS5vd25lckRvY3VtZW50fHxlKS5kb2N1bWVudEVsZW1lbnQ7cmV0dXJuIVkudGVzdCh0fHxuJiZuLm5vZGVOYW1lfHxcIkhUTUxcIil9LFQ9c2Uuc2V0RG9jdW1lbnQ9ZnVuY3Rpb24oZSl7dmFyIHQsbixyPWU/ZS5vd25lckRvY3VtZW50fHxlOnA7cmV0dXJuIHIhPUMmJjk9PT1yLm5vZGVUeXBlJiZyLmRvY3VtZW50RWxlbWVudCYmKGE9KEM9cikuZG9jdW1lbnRFbGVtZW50LEU9IWkoQykscCE9QyYmKG49Qy5kZWZhdWx0VmlldykmJm4udG9wIT09biYmKG4uYWRkRXZlbnRMaXN0ZW5lcj9uLmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmxvYWRcIixvZSwhMSk6bi5hdHRhY2hFdmVudCYmbi5hdHRhY2hFdmVudChcIm9udW5sb2FkXCIsb2UpKSxkLnNjb3BlPWNlKGZ1bmN0aW9uKGUpe3JldHVybiBhLmFwcGVuZENoaWxkKGUpLmFwcGVuZENoaWxkKEMuY3JlYXRlRWxlbWVudChcImRpdlwiKSksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUucXVlcnlTZWxlY3RvckFsbCYmIWUucXVlcnlTZWxlY3RvckFsbChcIjpzY29wZSBmaWVsZHNldCBkaXZcIikubGVuZ3RofSksZC5hdHRyaWJ1dGVzPWNlKGZ1bmN0aW9uKGUpe3JldHVybiBlLmNsYXNzTmFtZT1cImlcIiwhZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc05hbWVcIil9KSxkLmdldEVsZW1lbnRzQnlUYWdOYW1lPWNlKGZ1bmN0aW9uKGUpe3JldHVybiBlLmFwcGVuZENoaWxkKEMuY3JlYXRlQ29tbWVudChcIlwiKSksIWUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLmxlbmd0aH0pLGQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZT1LLnRlc3QoQy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKSxkLmdldEJ5SWQ9Y2UoZnVuY3Rpb24oZSl7cmV0dXJuIGEuYXBwZW5kQ2hpbGQoZSkuaWQ9UywhQy5nZXRFbGVtZW50c0J5TmFtZXx8IUMuZ2V0RWxlbWVudHNCeU5hbWUoUykubGVuZ3RofSksZC5nZXRCeUlkPyhiLmZpbHRlci5JRD1mdW5jdGlvbihlKXt2YXIgdD1lLnJlcGxhY2UodGUsbmUpO3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKT09PXR9fSxiLmZpbmQuSUQ9ZnVuY3Rpb24oZSx0KXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgdC5nZXRFbGVtZW50QnlJZCYmRSl7dmFyIG49dC5nZXRFbGVtZW50QnlJZChlKTtyZXR1cm4gbj9bbl06W119fSk6KGIuZmlsdGVyLklEPWZ1bmN0aW9uKGUpe3ZhciBuPWUucmVwbGFjZSh0ZSxuZSk7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciB0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLmdldEF0dHJpYnV0ZU5vZGUmJmUuZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpO3JldHVybiB0JiZ0LnZhbHVlPT09bn19LGIuZmluZC5JRD1mdW5jdGlvbihlLHQpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB0LmdldEVsZW1lbnRCeUlkJiZFKXt2YXIgbixyLGksbz10LmdldEVsZW1lbnRCeUlkKGUpO2lmKG8pe2lmKChuPW8uZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpKSYmbi52YWx1ZT09PWUpcmV0dXJuW29dO2k9dC5nZXRFbGVtZW50c0J5TmFtZShlKSxyPTA7d2hpbGUobz1pW3IrK10paWYoKG49by5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIikpJiZuLnZhbHVlPT09ZSlyZXR1cm5bb119cmV0dXJuW119fSksYi5maW5kLlRBRz1kLmdldEVsZW1lbnRzQnlUYWdOYW1lP2Z1bmN0aW9uKGUsdCl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQuZ2V0RWxlbWVudHNCeVRhZ05hbWU/dC5nZXRFbGVtZW50c0J5VGFnTmFtZShlKTpkLnFzYT90LnF1ZXJ5U2VsZWN0b3JBbGwoZSk6dm9pZCAwfTpmdW5jdGlvbihlLHQpe3ZhciBuLHI9W10saT0wLG89dC5nZXRFbGVtZW50c0J5VGFnTmFtZShlKTtpZihcIipcIj09PWUpe3doaWxlKG49b1tpKytdKTE9PT1uLm5vZGVUeXBlJiZyLnB1c2gobik7cmV0dXJuIHJ9cmV0dXJuIG99LGIuZmluZC5DTEFTUz1kLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmZ1bmN0aW9uKGUsdCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmRSlyZXR1cm4gdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGUpfSxzPVtdLHY9W10sKGQucXNhPUsudGVzdChDLnF1ZXJ5U2VsZWN0b3JBbGwpKSYmKGNlKGZ1bmN0aW9uKGUpe3ZhciB0O2EuYXBwZW5kQ2hpbGQoZSkuaW5uZXJIVE1MPVwiPGEgaWQ9J1wiK1MrXCInPjwvYT48c2VsZWN0IGlkPSdcIitTK1wiLVxcclxcXFwnIG1zYWxsb3djYXB0dXJlPScnPjxvcHRpb24gc2VsZWN0ZWQ9Jyc+PC9vcHRpb24+PC9zZWxlY3Q+XCIsZS5xdWVyeVNlbGVjdG9yQWxsKFwiW21zYWxsb3djYXB0dXJlXj0nJ11cIikubGVuZ3RoJiZ2LnB1c2goXCJbKl4kXT1cIitNK1wiKig/OicnfFxcXCJcXFwiKVwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbc2VsZWN0ZWRdXCIpLmxlbmd0aHx8di5wdXNoKFwiXFxcXFtcIitNK1wiKig/OnZhbHVlfFwiK1IrXCIpXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIltpZH49XCIrUytcIi1dXCIpLmxlbmd0aHx8di5wdXNoKFwifj1cIiksKHQ9Qy5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIikpLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcIlwiKSxlLmFwcGVuZENoaWxkKHQpLGUucXVlcnlTZWxlY3RvckFsbChcIltuYW1lPScnXVwiKS5sZW5ndGh8fHYucHVzaChcIlxcXFxbXCIrTStcIipuYW1lXCIrTStcIio9XCIrTStcIiooPzonJ3xcXFwiXFxcIilcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiOmNoZWNrZWRcIikubGVuZ3RofHx2LnB1c2goXCI6Y2hlY2tlZFwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhI1wiK1MrXCIrKlwiKS5sZW5ndGh8fHYucHVzaChcIi4jLitbK35dXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIlxcXFxcXGZcIiksdi5wdXNoKFwiW1xcXFxyXFxcXG5cXFxcZl1cIil9KSxjZShmdW5jdGlvbihlKXtlLmlubmVySFRNTD1cIjxhIGhyZWY9JycgZGlzYWJsZWQ9J2Rpc2FibGVkJz48L2E+PHNlbGVjdCBkaXNhYmxlZD0nZGlzYWJsZWQnPjxvcHRpb24vPjwvc2VsZWN0PlwiO3ZhciB0PUMuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO3Quc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiaGlkZGVuXCIpLGUuYXBwZW5kQ2hpbGQodCkuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwiRFwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT1kXVwiKS5sZW5ndGgmJnYucHVzaChcIm5hbWVcIitNK1wiKlsqXiR8IX5dPz1cIiksMiE9PWUucXVlcnlTZWxlY3RvckFsbChcIjplbmFibGVkXCIpLmxlbmd0aCYmdi5wdXNoKFwiOmVuYWJsZWRcIixcIjpkaXNhYmxlZFwiKSxhLmFwcGVuZENoaWxkKGUpLmRpc2FibGVkPSEwLDIhPT1lLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZGlzYWJsZWRcIikubGVuZ3RoJiZ2LnB1c2goXCI6ZW5hYmxlZFwiLFwiOmRpc2FibGVkXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIiosOnhcIiksdi5wdXNoKFwiLC4qOlwiKX0pKSwoZC5tYXRjaGVzU2VsZWN0b3I9Sy50ZXN0KGM9YS5tYXRjaGVzfHxhLndlYmtpdE1hdGNoZXNTZWxlY3Rvcnx8YS5tb3pNYXRjaGVzU2VsZWN0b3J8fGEub01hdGNoZXNTZWxlY3Rvcnx8YS5tc01hdGNoZXNTZWxlY3RvcikpJiZjZShmdW5jdGlvbihlKXtkLmRpc2Nvbm5lY3RlZE1hdGNoPWMuY2FsbChlLFwiKlwiKSxjLmNhbGwoZSxcIltzIT0nJ106eFwiKSxzLnB1c2goXCIhPVwiLEYpfSksdj12Lmxlbmd0aCYmbmV3IFJlZ0V4cCh2LmpvaW4oXCJ8XCIpKSxzPXMubGVuZ3RoJiZuZXcgUmVnRXhwKHMuam9pbihcInxcIikpLHQ9Sy50ZXN0KGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24pLHk9dHx8Sy50ZXN0KGEuY29udGFpbnMpP2Z1bmN0aW9uKGUsdCl7dmFyIG49OT09PWUubm9kZVR5cGU/ZS5kb2N1bWVudEVsZW1lbnQ6ZSxyPXQmJnQucGFyZW50Tm9kZTtyZXR1cm4gZT09PXJ8fCEoIXJ8fDEhPT1yLm5vZGVUeXBlfHwhKG4uY29udGFpbnM/bi5jb250YWlucyhyKTplLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uJiYxNiZlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKHIpKSl9OmZ1bmN0aW9uKGUsdCl7aWYodCl3aGlsZSh0PXQucGFyZW50Tm9kZSlpZih0PT09ZSlyZXR1cm4hMDtyZXR1cm4hMX0sRD10P2Z1bmN0aW9uKGUsdCl7aWYoZT09PXQpcmV0dXJuIGw9ITAsMDt2YXIgbj0hZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbi0hdC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbjtyZXR1cm4gbnx8KDEmKG49KGUub3duZXJEb2N1bWVudHx8ZSk9PSh0Lm93bmVyRG9jdW1lbnR8fHQpP2UuY29tcGFyZURvY3VtZW50UG9zaXRpb24odCk6MSl8fCFkLnNvcnREZXRhY2hlZCYmdC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlKT09PW4/ZT09Q3x8ZS5vd25lckRvY3VtZW50PT1wJiZ5KHAsZSk/LTE6dD09Q3x8dC5vd25lckRvY3VtZW50PT1wJiZ5KHAsdCk/MTp1P1AodSxlKS1QKHUsdCk6MDo0Jm4/LTE6MSl9OmZ1bmN0aW9uKGUsdCl7aWYoZT09PXQpcmV0dXJuIGw9ITAsMDt2YXIgbixyPTAsaT1lLnBhcmVudE5vZGUsbz10LnBhcmVudE5vZGUsYT1bZV0scz1bdF07aWYoIWl8fCFvKXJldHVybiBlPT1DPy0xOnQ9PUM/MTppPy0xOm8/MTp1P1AodSxlKS1QKHUsdCk6MDtpZihpPT09bylyZXR1cm4gcGUoZSx0KTtuPWU7d2hpbGUobj1uLnBhcmVudE5vZGUpYS51bnNoaWZ0KG4pO249dDt3aGlsZShuPW4ucGFyZW50Tm9kZSlzLnVuc2hpZnQobik7d2hpbGUoYVtyXT09PXNbcl0pcisrO3JldHVybiByP3BlKGFbcl0sc1tyXSk6YVtyXT09cD8tMTpzW3JdPT1wPzE6MH0pLEN9LHNlLm1hdGNoZXM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gc2UoZSxudWxsLG51bGwsdCl9LHNlLm1hdGNoZXNTZWxlY3Rvcj1mdW5jdGlvbihlLHQpe2lmKFQoZSksZC5tYXRjaGVzU2VsZWN0b3ImJkUmJiFOW3QrXCIgXCJdJiYoIXN8fCFzLnRlc3QodCkpJiYoIXZ8fCF2LnRlc3QodCkpKXRyeXt2YXIgbj1jLmNhbGwoZSx0KTtpZihufHxkLmRpc2Nvbm5lY3RlZE1hdGNofHxlLmRvY3VtZW50JiYxMSE9PWUuZG9jdW1lbnQubm9kZVR5cGUpcmV0dXJuIG59Y2F0Y2goZSl7Tih0LCEwKX1yZXR1cm4gMDxzZSh0LEMsbnVsbCxbZV0pLmxlbmd0aH0sc2UuY29udGFpbnM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4oZS5vd25lckRvY3VtZW50fHxlKSE9QyYmVChlKSx5KGUsdCl9LHNlLmF0dHI9ZnVuY3Rpb24oZSx0KXsoZS5vd25lckRvY3VtZW50fHxlKSE9QyYmVChlKTt2YXIgbj1iLmF0dHJIYW5kbGVbdC50b0xvd2VyQ2FzZSgpXSxyPW4mJmouY2FsbChiLmF0dHJIYW5kbGUsdC50b0xvd2VyQ2FzZSgpKT9uKGUsdCwhRSk6dm9pZCAwO3JldHVybiB2b2lkIDAhPT1yP3I6ZC5hdHRyaWJ1dGVzfHwhRT9lLmdldEF0dHJpYnV0ZSh0KToocj1lLmdldEF0dHJpYnV0ZU5vZGUodCkpJiZyLnNwZWNpZmllZD9yLnZhbHVlOm51bGx9LHNlLmVzY2FwZT1mdW5jdGlvbihlKXtyZXR1cm4oZStcIlwiKS5yZXBsYWNlKHJlLGllKX0sc2UuZXJyb3I9ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yLCB1bnJlY29nbml6ZWQgZXhwcmVzc2lvbjogXCIrZSl9LHNlLnVuaXF1ZVNvcnQ9ZnVuY3Rpb24oZSl7dmFyIHQsbj1bXSxyPTAsaT0wO2lmKGw9IWQuZGV0ZWN0RHVwbGljYXRlcyx1PSFkLnNvcnRTdGFibGUmJmUuc2xpY2UoMCksZS5zb3J0KEQpLGwpe3doaWxlKHQ9ZVtpKytdKXQ9PT1lW2ldJiYocj1uLnB1c2goaSkpO3doaWxlKHItLSllLnNwbGljZShuW3JdLDEpfXJldHVybiB1PW51bGwsZX0sbz1zZS5nZXRUZXh0PWZ1bmN0aW9uKGUpe3ZhciB0LG49XCJcIixyPTAsaT1lLm5vZGVUeXBlO2lmKGkpe2lmKDE9PT1pfHw5PT09aXx8MTE9PT1pKXtpZihcInN0cmluZ1wiPT10eXBlb2YgZS50ZXh0Q29udGVudClyZXR1cm4gZS50ZXh0Q29udGVudDtmb3IoZT1lLmZpcnN0Q2hpbGQ7ZTtlPWUubmV4dFNpYmxpbmcpbis9byhlKX1lbHNlIGlmKDM9PT1pfHw0PT09aSlyZXR1cm4gZS5ub2RlVmFsdWV9ZWxzZSB3aGlsZSh0PWVbcisrXSluKz1vKHQpO3JldHVybiBufSwoYj1zZS5zZWxlY3RvcnM9e2NhY2hlTGVuZ3RoOjUwLGNyZWF0ZVBzZXVkbzpsZSxtYXRjaDpHLGF0dHJIYW5kbGU6e30sZmluZDp7fSxyZWxhdGl2ZTp7XCI+XCI6e2RpcjpcInBhcmVudE5vZGVcIixmaXJzdDohMH0sXCIgXCI6e2RpcjpcInBhcmVudE5vZGVcIn0sXCIrXCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wiLGZpcnN0OiEwfSxcIn5cIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCJ9fSxwcmVGaWx0ZXI6e0FUVFI6ZnVuY3Rpb24oZSl7cmV0dXJuIGVbMV09ZVsxXS5yZXBsYWNlKHRlLG5lKSxlWzNdPShlWzNdfHxlWzRdfHxlWzVdfHxcIlwiKS5yZXBsYWNlKHRlLG5lKSxcIn49XCI9PT1lWzJdJiYoZVszXT1cIiBcIitlWzNdK1wiIFwiKSxlLnNsaWNlKDAsNCl9LENISUxEOmZ1bmN0aW9uKGUpe3JldHVybiBlWzFdPWVbMV0udG9Mb3dlckNhc2UoKSxcIm50aFwiPT09ZVsxXS5zbGljZSgwLDMpPyhlWzNdfHxzZS5lcnJvcihlWzBdKSxlWzRdPSsoZVs0XT9lWzVdKyhlWzZdfHwxKToyKihcImV2ZW5cIj09PWVbM118fFwib2RkXCI9PT1lWzNdKSksZVs1XT0rKGVbN10rZVs4XXx8XCJvZGRcIj09PWVbM10pKTplWzNdJiZzZS5lcnJvcihlWzBdKSxlfSxQU0VVRE86ZnVuY3Rpb24oZSl7dmFyIHQsbj0hZVs2XSYmZVsyXTtyZXR1cm4gRy5DSElMRC50ZXN0KGVbMF0pP251bGw6KGVbM10/ZVsyXT1lWzRdfHxlWzVdfHxcIlwiOm4mJlgudGVzdChuKSYmKHQ9aChuLCEwKSkmJih0PW4uaW5kZXhPZihcIilcIixuLmxlbmd0aC10KS1uLmxlbmd0aCkmJihlWzBdPWVbMF0uc2xpY2UoMCx0KSxlWzJdPW4uc2xpY2UoMCx0KSksZS5zbGljZSgwLDMpKX19LGZpbHRlcjp7VEFHOmZ1bmN0aW9uKGUpe3ZhciB0PWUucmVwbGFjZSh0ZSxuZSkudG9Mb3dlckNhc2UoKTtyZXR1cm5cIipcIj09PWU/ZnVuY3Rpb24oKXtyZXR1cm4hMH06ZnVuY3Rpb24oZSl7cmV0dXJuIGUubm9kZU5hbWUmJmUubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXR9fSxDTEFTUzpmdW5jdGlvbihlKXt2YXIgdD1tW2UrXCIgXCJdO3JldHVybiB0fHwodD1uZXcgUmVnRXhwKFwiKF58XCIrTStcIilcIitlK1wiKFwiK00rXCJ8JClcIikpJiZtKGUsZnVuY3Rpb24oZSl7cmV0dXJuIHQudGVzdChcInN0cmluZ1wiPT10eXBlb2YgZS5jbGFzc05hbWUmJmUuY2xhc3NOYW1lfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgZS5nZXRBdHRyaWJ1dGUmJmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIpfSl9LEFUVFI6ZnVuY3Rpb24obixyLGkpe3JldHVybiBmdW5jdGlvbihlKXt2YXIgdD1zZS5hdHRyKGUsbik7cmV0dXJuIG51bGw9PXQ/XCIhPVwiPT09cjohcnx8KHQrPVwiXCIsXCI9XCI9PT1yP3Q9PT1pOlwiIT1cIj09PXI/dCE9PWk6XCJePVwiPT09cj9pJiYwPT09dC5pbmRleE9mKGkpOlwiKj1cIj09PXI/aSYmLTE8dC5pbmRleE9mKGkpOlwiJD1cIj09PXI/aSYmdC5zbGljZSgtaS5sZW5ndGgpPT09aTpcIn49XCI9PT1yPy0xPChcIiBcIit0LnJlcGxhY2UoQixcIiBcIikrXCIgXCIpLmluZGV4T2YoaSk6XCJ8PVwiPT09ciYmKHQ9PT1pfHx0LnNsaWNlKDAsaS5sZW5ndGgrMSk9PT1pK1wiLVwiKSl9fSxDSElMRDpmdW5jdGlvbihoLGUsdCxnLHYpe3ZhciB5PVwibnRoXCIhPT1oLnNsaWNlKDAsMyksbT1cImxhc3RcIiE9PWguc2xpY2UoLTQpLHg9XCJvZi10eXBlXCI9PT1lO3JldHVybiAxPT09ZyYmMD09PXY/ZnVuY3Rpb24oZSl7cmV0dXJuISFlLnBhcmVudE5vZGV9OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYSxzLHUsbD15IT09bT9cIm5leHRTaWJsaW5nXCI6XCJwcmV2aW91c1NpYmxpbmdcIixjPWUucGFyZW50Tm9kZSxmPXgmJmUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxwPSFuJiYheCxkPSExO2lmKGMpe2lmKHkpe3doaWxlKGwpe2E9ZTt3aGlsZShhPWFbbF0paWYoeD9hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1mOjE9PT1hLm5vZGVUeXBlKXJldHVybiExO3U9bD1cIm9ubHlcIj09PWgmJiF1JiZcIm5leHRTaWJsaW5nXCJ9cmV0dXJuITB9aWYodT1bbT9jLmZpcnN0Q2hpbGQ6Yy5sYXN0Q2hpbGRdLG0mJnApe2Q9KHM9KHI9KGk9KG89KGE9YylbU118fChhW1NdPXt9KSlbYS51bmlxdWVJRF18fChvW2EudW5pcXVlSURdPXt9KSlbaF18fFtdKVswXT09PWsmJnJbMV0pJiZyWzJdLGE9cyYmYy5jaGlsZE5vZGVzW3NdO3doaWxlKGE9KytzJiZhJiZhW2xdfHwoZD1zPTApfHx1LnBvcCgpKWlmKDE9PT1hLm5vZGVUeXBlJiYrK2QmJmE9PT1lKXtpW2hdPVtrLHMsZF07YnJlYWt9fWVsc2UgaWYocCYmKGQ9cz0ocj0oaT0obz0oYT1lKVtTXXx8KGFbU109e30pKVthLnVuaXF1ZUlEXXx8KG9bYS51bmlxdWVJRF09e30pKVtoXXx8W10pWzBdPT09ayYmclsxXSksITE9PT1kKXdoaWxlKGE9KytzJiZhJiZhW2xdfHwoZD1zPTApfHx1LnBvcCgpKWlmKCh4P2Eubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWY6MT09PWEubm9kZVR5cGUpJiYrK2QmJihwJiYoKGk9KG89YVtTXXx8KGFbU109e30pKVthLnVuaXF1ZUlEXXx8KG9bYS51bmlxdWVJRF09e30pKVtoXT1bayxkXSksYT09PWUpKWJyZWFrO3JldHVybihkLT12KT09PWd8fGQlZz09MCYmMDw9ZC9nfX19LFBTRVVETzpmdW5jdGlvbihlLG8pe3ZhciB0LGE9Yi5wc2V1ZG9zW2VdfHxiLnNldEZpbHRlcnNbZS50b0xvd2VyQ2FzZSgpXXx8c2UuZXJyb3IoXCJ1bnN1cHBvcnRlZCBwc2V1ZG86IFwiK2UpO3JldHVybiBhW1NdP2Eobyk6MTxhLmxlbmd0aD8odD1bZSxlLFwiXCIsb10sYi5zZXRGaWx0ZXJzLmhhc093blByb3BlcnR5KGUudG9Mb3dlckNhc2UoKSk/bGUoZnVuY3Rpb24oZSx0KXt2YXIgbixyPWEoZSxvKSxpPXIubGVuZ3RoO3doaWxlKGktLSllW249UChlLHJbaV0pXT0hKHRbbl09cltpXSl9KTpmdW5jdGlvbihlKXtyZXR1cm4gYShlLDAsdCl9KTphfX0scHNldWRvczp7bm90OmxlKGZ1bmN0aW9uKGUpe3ZhciByPVtdLGk9W10scz1mKGUucmVwbGFjZSgkLFwiJDFcIikpO3JldHVybiBzW1NdP2xlKGZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG89cyhlLG51bGwscixbXSksYT1lLmxlbmd0aDt3aGlsZShhLS0pKGk9b1thXSkmJihlW2FdPSEodFthXT1pKSl9KTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIHJbMF09ZSxzKHIsbnVsbCxuLGkpLHJbMF09bnVsbCwhaS5wb3AoKX19KSxoYXM6bGUoZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiAwPHNlKHQsZSkubGVuZ3RofX0pLGNvbnRhaW5zOmxlKGZ1bmN0aW9uKHQpe3JldHVybiB0PXQucmVwbGFjZSh0ZSxuZSksZnVuY3Rpb24oZSl7cmV0dXJuLTE8KGUudGV4dENvbnRlbnR8fG8oZSkpLmluZGV4T2YodCl9fSksbGFuZzpsZShmdW5jdGlvbihuKXtyZXR1cm4gVi50ZXN0KG58fFwiXCIpfHxzZS5lcnJvcihcInVuc3VwcG9ydGVkIGxhbmc6IFwiK24pLG49bi5yZXBsYWNlKHRlLG5lKS50b0xvd2VyQ2FzZSgpLGZ1bmN0aW9uKGUpe3ZhciB0O2Rve2lmKHQ9RT9lLmxhbmc6ZS5nZXRBdHRyaWJ1dGUoXCJ4bWw6bGFuZ1wiKXx8ZS5nZXRBdHRyaWJ1dGUoXCJsYW5nXCIpKXJldHVybih0PXQudG9Mb3dlckNhc2UoKSk9PT1ufHwwPT09dC5pbmRleE9mKG4rXCItXCIpfXdoaWxlKChlPWUucGFyZW50Tm9kZSkmJjE9PT1lLm5vZGVUeXBlKTtyZXR1cm4hMX19KSx0YXJnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9bi5sb2NhdGlvbiYmbi5sb2NhdGlvbi5oYXNoO3JldHVybiB0JiZ0LnNsaWNlKDEpPT09ZS5pZH0scm9vdDpmdW5jdGlvbihlKXtyZXR1cm4gZT09PWF9LGZvY3VzOmZ1bmN0aW9uKGUpe3JldHVybiBlPT09Qy5hY3RpdmVFbGVtZW50JiYoIUMuaGFzRm9jdXN8fEMuaGFzRm9jdXMoKSkmJiEhKGUudHlwZXx8ZS5ocmVmfHx+ZS50YWJJbmRleCl9LGVuYWJsZWQ6Z2UoITEpLGRpc2FibGVkOmdlKCEwKSxjaGVja2VkOmZ1bmN0aW9uKGUpe3ZhciB0PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT10JiYhIWUuY2hlY2tlZHx8XCJvcHRpb25cIj09PXQmJiEhZS5zZWxlY3RlZH0sc2VsZWN0ZWQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGUucGFyZW50Tm9kZSYmZS5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsITA9PT1lLnNlbGVjdGVkfSxlbXB0eTpmdW5jdGlvbihlKXtmb3IoZT1lLmZpcnN0Q2hpbGQ7ZTtlPWUubmV4dFNpYmxpbmcpaWYoZS5ub2RlVHlwZTw2KXJldHVybiExO3JldHVybiEwfSxwYXJlbnQ6ZnVuY3Rpb24oZSl7cmV0dXJuIWIucHNldWRvcy5lbXB0eShlKX0saGVhZGVyOmZ1bmN0aW9uKGUpe3JldHVybiBKLnRlc3QoZS5ub2RlTmFtZSl9LGlucHV0OmZ1bmN0aW9uKGUpe3JldHVybiBRLnRlc3QoZS5ub2RlTmFtZSl9LGJ1dHRvbjpmdW5jdGlvbihlKXt2YXIgdD1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09dCYmXCJidXR0b25cIj09PWUudHlwZXx8XCJidXR0b25cIj09PXR9LHRleHQ6ZnVuY3Rpb24oZSl7dmFyIHQ7cmV0dXJuXCJpbnB1dFwiPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiZcInRleHRcIj09PWUudHlwZSYmKG51bGw9PSh0PWUuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSl8fFwidGV4dFwiPT09dC50b0xvd2VyQ2FzZSgpKX0sZmlyc3Q6dmUoZnVuY3Rpb24oKXtyZXR1cm5bMF19KSxsYXN0OnZlKGZ1bmN0aW9uKGUsdCl7cmV0dXJuW3QtMV19KSxlcTp2ZShmdW5jdGlvbihlLHQsbil7cmV0dXJuW248MD9uK3Q6bl19KSxldmVuOnZlKGZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPTA7bjx0O24rPTIpZS5wdXNoKG4pO3JldHVybiBlfSksb2RkOnZlKGZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPTE7bjx0O24rPTIpZS5wdXNoKG4pO3JldHVybiBlfSksbHQ6dmUoZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgcj1uPDA/bit0OnQ8bj90Om47MDw9LS1yOyllLnB1c2gocik7cmV0dXJuIGV9KSxndDp2ZShmdW5jdGlvbihlLHQsbil7Zm9yKHZhciByPW48MD9uK3Q6bjsrK3I8dDspZS5wdXNoKHIpO3JldHVybiBlfSl9fSkucHNldWRvcy5udGg9Yi5wc2V1ZG9zLmVxLHtyYWRpbzohMCxjaGVja2JveDohMCxmaWxlOiEwLHBhc3N3b3JkOiEwLGltYWdlOiEwfSliLnBzZXVkb3NbZV09ZGUoZSk7Zm9yKGUgaW57c3VibWl0OiEwLHJlc2V0OiEwfSliLnBzZXVkb3NbZV09aGUoZSk7ZnVuY3Rpb24gbWUoKXt9ZnVuY3Rpb24geGUoZSl7Zm9yKHZhciB0PTAsbj1lLmxlbmd0aCxyPVwiXCI7dDxuO3QrKylyKz1lW3RdLnZhbHVlO3JldHVybiByfWZ1bmN0aW9uIGJlKHMsZSx0KXt2YXIgdT1lLmRpcixsPWUubmV4dCxjPWx8fHUsZj10JiZcInBhcmVudE5vZGVcIj09PWMscD1yKys7cmV0dXJuIGUuZmlyc3Q/ZnVuY3Rpb24oZSx0LG4pe3doaWxlKGU9ZVt1XSlpZigxPT09ZS5ub2RlVHlwZXx8ZilyZXR1cm4gcyhlLHQsbik7cmV0dXJuITF9OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYT1bayxwXTtpZihuKXt3aGlsZShlPWVbdV0paWYoKDE9PT1lLm5vZGVUeXBlfHxmKSYmcyhlLHQsbikpcmV0dXJuITB9ZWxzZSB3aGlsZShlPWVbdV0paWYoMT09PWUubm9kZVR5cGV8fGYpaWYoaT0obz1lW1NdfHwoZVtTXT17fSkpW2UudW5pcXVlSURdfHwob1tlLnVuaXF1ZUlEXT17fSksbCYmbD09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSllPWVbdV18fGU7ZWxzZXtpZigocj1pW2NdKSYmclswXT09PWsmJnJbMV09PT1wKXJldHVybiBhWzJdPXJbMl07aWYoKGlbY109YSlbMl09cyhlLHQsbikpcmV0dXJuITB9cmV0dXJuITF9fWZ1bmN0aW9uIHdlKGkpe3JldHVybiAxPGkubGVuZ3RoP2Z1bmN0aW9uKGUsdCxuKXt2YXIgcj1pLmxlbmd0aDt3aGlsZShyLS0paWYoIWlbcl0oZSx0LG4pKXJldHVybiExO3JldHVybiEwfTppWzBdfWZ1bmN0aW9uIFRlKGUsdCxuLHIsaSl7Zm9yKHZhciBvLGE9W10scz0wLHU9ZS5sZW5ndGgsbD1udWxsIT10O3M8dTtzKyspKG89ZVtzXSkmJihuJiYhbihvLHIsaSl8fChhLnB1c2gobyksbCYmdC5wdXNoKHMpKSk7cmV0dXJuIGF9ZnVuY3Rpb24gQ2UoZCxoLGcsdix5LGUpe3JldHVybiB2JiYhdltTXSYmKHY9Q2UodikpLHkmJiF5W1NdJiYoeT1DZSh5LGUpKSxsZShmdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGEscz1bXSx1PVtdLGw9dC5sZW5ndGgsYz1lfHxmdW5jdGlvbihlLHQsbil7Zm9yKHZhciByPTAsaT10Lmxlbmd0aDtyPGk7cisrKXNlKGUsdFtyXSxuKTtyZXR1cm4gbn0oaHx8XCIqXCIsbi5ub2RlVHlwZT9bbl06bixbXSksZj0hZHx8IWUmJmg/YzpUZShjLHMsZCxuLHIpLHA9Zz95fHwoZT9kOmx8fHYpP1tdOnQ6ZjtpZihnJiZnKGYscCxuLHIpLHYpe2k9VGUocCx1KSx2KGksW10sbixyKSxvPWkubGVuZ3RoO3doaWxlKG8tLSkoYT1pW29dKSYmKHBbdVtvXV09IShmW3Vbb11dPWEpKX1pZihlKXtpZih5fHxkKXtpZih5KXtpPVtdLG89cC5sZW5ndGg7d2hpbGUoby0tKShhPXBbb10pJiZpLnB1c2goZltvXT1hKTt5KG51bGwscD1bXSxpLHIpfW89cC5sZW5ndGg7d2hpbGUoby0tKShhPXBbb10pJiYtMTwoaT15P1AoZSxhKTpzW29dKSYmKGVbaV09ISh0W2ldPWEpKX19ZWxzZSBwPVRlKHA9PT10P3Auc3BsaWNlKGwscC5sZW5ndGgpOnApLHk/eShudWxsLHQscCxyKTpILmFwcGx5KHQscCl9KX1mdW5jdGlvbiBFZShlKXtmb3IodmFyIGksdCxuLHI9ZS5sZW5ndGgsbz1iLnJlbGF0aXZlW2VbMF0udHlwZV0sYT1vfHxiLnJlbGF0aXZlW1wiIFwiXSxzPW8/MTowLHU9YmUoZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1pfSxhLCEwKSxsPWJlKGZ1bmN0aW9uKGUpe3JldHVybi0xPFAoaSxlKX0sYSwhMCksYz1bZnVuY3Rpb24oZSx0LG4pe3ZhciByPSFvJiYobnx8dCE9PXcpfHwoKGk9dCkubm9kZVR5cGU/dShlLHQsbik6bChlLHQsbikpO3JldHVybiBpPW51bGwscn1dO3M8cjtzKyspaWYodD1iLnJlbGF0aXZlW2Vbc10udHlwZV0pYz1bYmUod2UoYyksdCldO2Vsc2V7aWYoKHQ9Yi5maWx0ZXJbZVtzXS50eXBlXS5hcHBseShudWxsLGVbc10ubWF0Y2hlcykpW1NdKXtmb3Iobj0rK3M7bjxyO24rKylpZihiLnJlbGF0aXZlW2Vbbl0udHlwZV0pYnJlYWs7cmV0dXJuIENlKDE8cyYmd2UoYyksMTxzJiZ4ZShlLnNsaWNlKDAscy0xKS5jb25jYXQoe3ZhbHVlOlwiIFwiPT09ZVtzLTJdLnR5cGU/XCIqXCI6XCJcIn0pKS5yZXBsYWNlKCQsXCIkMVwiKSx0LHM8biYmRWUoZS5zbGljZShzLG4pKSxuPHImJkVlKGU9ZS5zbGljZShuKSksbjxyJiZ4ZShlKSl9Yy5wdXNoKHQpfXJldHVybiB3ZShjKX1yZXR1cm4gbWUucHJvdG90eXBlPWIuZmlsdGVycz1iLnBzZXVkb3MsYi5zZXRGaWx0ZXJzPW5ldyBtZSxoPXNlLnRva2VuaXplPWZ1bmN0aW9uKGUsdCl7dmFyIG4scixpLG8sYSxzLHUsbD14W2UrXCIgXCJdO2lmKGwpcmV0dXJuIHQ/MDpsLnNsaWNlKDApO2E9ZSxzPVtdLHU9Yi5wcmVGaWx0ZXI7d2hpbGUoYSl7Zm9yKG8gaW4gbiYmIShyPV8uZXhlYyhhKSl8fChyJiYoYT1hLnNsaWNlKHJbMF0ubGVuZ3RoKXx8YSkscy5wdXNoKGk9W10pKSxuPSExLChyPXouZXhlYyhhKSkmJihuPXIuc2hpZnQoKSxpLnB1c2goe3ZhbHVlOm4sdHlwZTpyWzBdLnJlcGxhY2UoJCxcIiBcIil9KSxhPWEuc2xpY2Uobi5sZW5ndGgpKSxiLmZpbHRlcikhKHI9R1tvXS5leGVjKGEpKXx8dVtvXSYmIShyPXVbb10ocikpfHwobj1yLnNoaWZ0KCksaS5wdXNoKHt2YWx1ZTpuLHR5cGU6byxtYXRjaGVzOnJ9KSxhPWEuc2xpY2Uobi5sZW5ndGgpKTtpZighbilicmVha31yZXR1cm4gdD9hLmxlbmd0aDphP3NlLmVycm9yKGUpOngoZSxzKS5zbGljZSgwKX0sZj1zZS5jb21waWxlPWZ1bmN0aW9uKGUsdCl7dmFyIG4sdix5LG0seCxyLGk9W10sbz1bXSxhPUFbZStcIiBcIl07aWYoIWEpe3R8fCh0PWgoZSkpLG49dC5sZW5ndGg7d2hpbGUobi0tKShhPUVlKHRbbl0pKVtTXT9pLnB1c2goYSk6by5wdXNoKGEpOyhhPUEoZSwodj1vLG09MDwoeT1pKS5sZW5ndGgseD0wPHYubGVuZ3RoLHI9ZnVuY3Rpb24oZSx0LG4scixpKXt2YXIgbyxhLHMsdT0wLGw9XCIwXCIsYz1lJiZbXSxmPVtdLHA9dyxkPWV8fHgmJmIuZmluZC5UQUcoXCIqXCIsaSksaD1rKz1udWxsPT1wPzE6TWF0aC5yYW5kb20oKXx8LjEsZz1kLmxlbmd0aDtmb3IoaSYmKHc9dD09Q3x8dHx8aSk7bCE9PWcmJm51bGwhPShvPWRbbF0pO2wrKyl7aWYoeCYmbyl7YT0wLHR8fG8ub3duZXJEb2N1bWVudD09Q3x8KFQobyksbj0hRSk7d2hpbGUocz12W2ErK10paWYocyhvLHR8fEMsbikpe3IucHVzaChvKTticmVha31pJiYoaz1oKX1tJiYoKG89IXMmJm8pJiZ1LS0sZSYmYy5wdXNoKG8pKX1pZih1Kz1sLG0mJmwhPT11KXthPTA7d2hpbGUocz15W2ErK10pcyhjLGYsdCxuKTtpZihlKXtpZigwPHUpd2hpbGUobC0tKWNbbF18fGZbbF18fChmW2xdPXEuY2FsbChyKSk7Zj1UZShmKX1ILmFwcGx5KHIsZiksaSYmIWUmJjA8Zi5sZW5ndGgmJjE8dSt5Lmxlbmd0aCYmc2UudW5pcXVlU29ydChyKX1yZXR1cm4gaSYmKGs9aCx3PXApLGN9LG0/bGUocik6cikpKS5zZWxlY3Rvcj1lfXJldHVybiBhfSxnPXNlLnNlbGVjdD1mdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGEscyx1LGw9XCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSxjPSFyJiZoKGU9bC5zZWxlY3Rvcnx8ZSk7aWYobj1ufHxbXSwxPT09Yy5sZW5ndGgpe2lmKDI8KG89Y1swXT1jWzBdLnNsaWNlKDApKS5sZW5ndGgmJlwiSURcIj09PShhPW9bMF0pLnR5cGUmJjk9PT10Lm5vZGVUeXBlJiZFJiZiLnJlbGF0aXZlW29bMV0udHlwZV0pe2lmKCEodD0oYi5maW5kLklEKGEubWF0Y2hlc1swXS5yZXBsYWNlKHRlLG5lKSx0KXx8W10pWzBdKSlyZXR1cm4gbjtsJiYodD10LnBhcmVudE5vZGUpLGU9ZS5zbGljZShvLnNoaWZ0KCkudmFsdWUubGVuZ3RoKX1pPUcubmVlZHNDb250ZXh0LnRlc3QoZSk/MDpvLmxlbmd0aDt3aGlsZShpLS0pe2lmKGE9b1tpXSxiLnJlbGF0aXZlW3M9YS50eXBlXSlicmVhaztpZigodT1iLmZpbmRbc10pJiYocj11KGEubWF0Y2hlc1swXS5yZXBsYWNlKHRlLG5lKSxlZS50ZXN0KG9bMF0udHlwZSkmJnllKHQucGFyZW50Tm9kZSl8fHQpKSl7aWYoby5zcGxpY2UoaSwxKSwhKGU9ci5sZW5ndGgmJnhlKG8pKSlyZXR1cm4gSC5hcHBseShuLHIpLG47YnJlYWt9fX1yZXR1cm4obHx8ZihlLGMpKShyLHQsIUUsbiwhdHx8ZWUudGVzdChlKSYmeWUodC5wYXJlbnROb2RlKXx8dCksbn0sZC5zb3J0U3RhYmxlPVMuc3BsaXQoXCJcIikuc29ydChEKS5qb2luKFwiXCIpPT09UyxkLmRldGVjdER1cGxpY2F0ZXM9ISFsLFQoKSxkLnNvcnREZXRhY2hlZD1jZShmdW5jdGlvbihlKXtyZXR1cm4gMSZlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKEMuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpKX0pLGNlKGZ1bmN0aW9uKGUpe3JldHVybiBlLmlubmVySFRNTD1cIjxhIGhyZWY9JyMnPjwvYT5cIixcIiNcIj09PWUuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpfSl8fGZlKFwidHlwZXxocmVmfGhlaWdodHx3aWR0aFwiLGZ1bmN0aW9uKGUsdCxuKXtpZighbilyZXR1cm4gZS5nZXRBdHRyaWJ1dGUodCxcInR5cGVcIj09PXQudG9Mb3dlckNhc2UoKT8xOjIpfSksZC5hdHRyaWJ1dGVzJiZjZShmdW5jdGlvbihlKXtyZXR1cm4gZS5pbm5lckhUTUw9XCI8aW5wdXQvPlwiLGUuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiXCIpLFwiXCI9PT1lLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIil9KXx8ZmUoXCJ2YWx1ZVwiLGZ1bmN0aW9uKGUsdCxuKXtpZighbiYmXCJpbnB1dFwiPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKXJldHVybiBlLmRlZmF1bHRWYWx1ZX0pLGNlKGZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpfSl8fGZlKFIsZnVuY3Rpb24oZSx0LG4pe3ZhciByO2lmKCFuKXJldHVybiEwPT09ZVt0XT90LnRvTG93ZXJDYXNlKCk6KHI9ZS5nZXRBdHRyaWJ1dGVOb2RlKHQpKSYmci5zcGVjaWZpZWQ/ci52YWx1ZTpudWxsfSksc2V9KEMpO1MuZmluZD1kLFMuZXhwcj1kLnNlbGVjdG9ycyxTLmV4cHJbXCI6XCJdPVMuZXhwci5wc2V1ZG9zLFMudW5pcXVlU29ydD1TLnVuaXF1ZT1kLnVuaXF1ZVNvcnQsUy50ZXh0PWQuZ2V0VGV4dCxTLmlzWE1MRG9jPWQuaXNYTUwsUy5jb250YWlucz1kLmNvbnRhaW5zLFMuZXNjYXBlU2VsZWN0b3I9ZC5lc2NhcGU7dmFyIGg9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPVtdLGk9dm9pZCAwIT09bjt3aGlsZSgoZT1lW3RdKSYmOSE9PWUubm9kZVR5cGUpaWYoMT09PWUubm9kZVR5cGUpe2lmKGkmJlMoZSkuaXMobikpYnJlYWs7ci5wdXNoKGUpfXJldHVybiByfSxUPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPVtdO2U7ZT1lLm5leHRTaWJsaW5nKTE9PT1lLm5vZGVUeXBlJiZlIT09dCYmbi5wdXNoKGUpO3JldHVybiBufSxrPVMuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQ7ZnVuY3Rpb24gQShlLHQpe3JldHVybiBlLm5vZGVOYW1lJiZlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT10LnRvTG93ZXJDYXNlKCl9dmFyIE49L148KFthLXpdW15cXC9cXDA+OlxceDIwXFx0XFxyXFxuXFxmXSopW1xceDIwXFx0XFxyXFxuXFxmXSpcXC8/Pig/OjxcXC9cXDE+fCkkL2k7ZnVuY3Rpb24gRChlLG4scil7cmV0dXJuIG0obik/Uy5ncmVwKGUsZnVuY3Rpb24oZSx0KXtyZXR1cm4hIW4uY2FsbChlLHQsZSkhPT1yfSk6bi5ub2RlVHlwZT9TLmdyZXAoZSxmdW5jdGlvbihlKXtyZXR1cm4gZT09PW4hPT1yfSk6XCJzdHJpbmdcIiE9dHlwZW9mIG4/Uy5ncmVwKGUsZnVuY3Rpb24oZSl7cmV0dXJuLTE8aS5jYWxsKG4sZSkhPT1yfSk6Uy5maWx0ZXIobixlLHIpfVMuZmlsdGVyPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj10WzBdO3JldHVybiBuJiYoZT1cIjpub3QoXCIrZStcIilcIiksMT09PXQubGVuZ3RoJiYxPT09ci5ub2RlVHlwZT9TLmZpbmQubWF0Y2hlc1NlbGVjdG9yKHIsZSk/W3JdOltdOlMuZmluZC5tYXRjaGVzKGUsUy5ncmVwKHQsZnVuY3Rpb24oZSl7cmV0dXJuIDE9PT1lLm5vZGVUeXBlfSkpfSxTLmZuLmV4dGVuZCh7ZmluZDpmdW5jdGlvbihlKXt2YXIgdCxuLHI9dGhpcy5sZW5ndGgsaT10aGlzO2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybiB0aGlzLnB1c2hTdGFjayhTKGUpLmZpbHRlcihmdW5jdGlvbigpe2Zvcih0PTA7dDxyO3QrKylpZihTLmNvbnRhaW5zKGlbdF0sdGhpcykpcmV0dXJuITB9KSk7Zm9yKG49dGhpcy5wdXNoU3RhY2soW10pLHQ9MDt0PHI7dCsrKVMuZmluZChlLGlbdF0sbik7cmV0dXJuIDE8cj9TLnVuaXF1ZVNvcnQobik6bn0sZmlsdGVyOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnB1c2hTdGFjayhEKHRoaXMsZXx8W10sITEpKX0sbm90OmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnB1c2hTdGFjayhEKHRoaXMsZXx8W10sITApKX0saXM6ZnVuY3Rpb24oZSl7cmV0dXJuISFEKHRoaXMsXCJzdHJpbmdcIj09dHlwZW9mIGUmJmsudGVzdChlKT9TKGUpOmV8fFtdLCExKS5sZW5ndGh9fSk7dmFyIGoscT0vXig/OlxccyooPFtcXHdcXFddKz4pW14+XSp8IyhbXFx3LV0rKSkkLzsoUy5mbi5pbml0PWZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpO2lmKCFlKXJldHVybiB0aGlzO2lmKG49bnx8aixcInN0cmluZ1wiPT10eXBlb2YgZSl7aWYoIShyPVwiPFwiPT09ZVswXSYmXCI+XCI9PT1lW2UubGVuZ3RoLTFdJiYzPD1lLmxlbmd0aD9bbnVsbCxlLG51bGxdOnEuZXhlYyhlKSl8fCFyWzFdJiZ0KXJldHVybiF0fHx0LmpxdWVyeT8odHx8bikuZmluZChlKTp0aGlzLmNvbnN0cnVjdG9yKHQpLmZpbmQoZSk7aWYoclsxXSl7aWYodD10IGluc3RhbmNlb2YgUz90WzBdOnQsUy5tZXJnZSh0aGlzLFMucGFyc2VIVE1MKHJbMV0sdCYmdC5ub2RlVHlwZT90Lm93bmVyRG9jdW1lbnR8fHQ6RSwhMCkpLE4udGVzdChyWzFdKSYmUy5pc1BsYWluT2JqZWN0KHQpKWZvcihyIGluIHQpbSh0aGlzW3JdKT90aGlzW3JdKHRbcl0pOnRoaXMuYXR0cihyLHRbcl0pO3JldHVybiB0aGlzfXJldHVybihpPUUuZ2V0RWxlbWVudEJ5SWQoclsyXSkpJiYodGhpc1swXT1pLHRoaXMubGVuZ3RoPTEpLHRoaXN9cmV0dXJuIGUubm9kZVR5cGU/KHRoaXNbMF09ZSx0aGlzLmxlbmd0aD0xLHRoaXMpOm0oZSk/dm9pZCAwIT09bi5yZWFkeT9uLnJlYWR5KGUpOmUoUyk6Uy5tYWtlQXJyYXkoZSx0aGlzKX0pLnByb3RvdHlwZT1TLmZuLGo9UyhFKTt2YXIgTD0vXig/OnBhcmVudHN8cHJldig/OlVudGlsfEFsbCkpLyxIPXtjaGlsZHJlbjohMCxjb250ZW50czohMCxuZXh0OiEwLHByZXY6ITB9O2Z1bmN0aW9uIE8oZSx0KXt3aGlsZSgoZT1lW3RdKSYmMSE9PWUubm9kZVR5cGUpO3JldHVybiBlfVMuZm4uZXh0ZW5kKHtoYXM6ZnVuY3Rpb24oZSl7dmFyIHQ9UyhlLHRoaXMpLG49dC5sZW5ndGg7cmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKHZhciBlPTA7ZTxuO2UrKylpZihTLmNvbnRhaW5zKHRoaXMsdFtlXSkpcmV0dXJuITB9KX0sY2xvc2VzdDpmdW5jdGlvbihlLHQpe3ZhciBuLHI9MCxpPXRoaXMubGVuZ3RoLG89W10sYT1cInN0cmluZ1wiIT10eXBlb2YgZSYmUyhlKTtpZighay50ZXN0KGUpKWZvcig7cjxpO3IrKylmb3Iobj10aGlzW3JdO24mJm4hPT10O249bi5wYXJlbnROb2RlKWlmKG4ubm9kZVR5cGU8MTEmJihhPy0xPGEuaW5kZXgobik6MT09PW4ubm9kZVR5cGUmJlMuZmluZC5tYXRjaGVzU2VsZWN0b3IobixlKSkpe28ucHVzaChuKTticmVha31yZXR1cm4gdGhpcy5wdXNoU3RhY2soMTxvLmxlbmd0aD9TLnVuaXF1ZVNvcnQobyk6byl9LGluZGV4OmZ1bmN0aW9uKGUpe3JldHVybiBlP1wic3RyaW5nXCI9PXR5cGVvZiBlP2kuY2FsbChTKGUpLHRoaXNbMF0pOmkuY2FsbCh0aGlzLGUuanF1ZXJ5P2VbMF06ZSk6dGhpc1swXSYmdGhpc1swXS5wYXJlbnROb2RlP3RoaXMuZmlyc3QoKS5wcmV2QWxsKCkubGVuZ3RoOi0xfSxhZGQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soUy51bmlxdWVTb3J0KFMubWVyZ2UodGhpcy5nZXQoKSxTKGUsdCkpKSl9LGFkZEJhY2s6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuYWRkKG51bGw9PWU/dGhpcy5wcmV2T2JqZWN0OnRoaXMucHJldk9iamVjdC5maWx0ZXIoZSkpfX0pLFMuZWFjaCh7cGFyZW50OmZ1bmN0aW9uKGUpe3ZhciB0PWUucGFyZW50Tm9kZTtyZXR1cm4gdCYmMTEhPT10Lm5vZGVUeXBlP3Q6bnVsbH0scGFyZW50czpmdW5jdGlvbihlKXtyZXR1cm4gaChlLFwicGFyZW50Tm9kZVwiKX0scGFyZW50c1VudGlsOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gaChlLFwicGFyZW50Tm9kZVwiLG4pfSxuZXh0OmZ1bmN0aW9uKGUpe3JldHVybiBPKGUsXCJuZXh0U2libGluZ1wiKX0scHJldjpmdW5jdGlvbihlKXtyZXR1cm4gTyhlLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0QWxsOmZ1bmN0aW9uKGUpe3JldHVybiBoKGUsXCJuZXh0U2libGluZ1wiKX0scHJldkFsbDpmdW5jdGlvbihlKXtyZXR1cm4gaChlLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0VW50aWw6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBoKGUsXCJuZXh0U2libGluZ1wiLG4pfSxwcmV2VW50aWw6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBoKGUsXCJwcmV2aW91c1NpYmxpbmdcIixuKX0sc2libGluZ3M6ZnVuY3Rpb24oZSl7cmV0dXJuIFQoKGUucGFyZW50Tm9kZXx8e30pLmZpcnN0Q2hpbGQsZSl9LGNoaWxkcmVuOmZ1bmN0aW9uKGUpe3JldHVybiBUKGUuZmlyc3RDaGlsZCl9LGNvbnRlbnRzOmZ1bmN0aW9uKGUpe3JldHVybiBudWxsIT1lLmNvbnRlbnREb2N1bWVudCYmcihlLmNvbnRlbnREb2N1bWVudCk/ZS5jb250ZW50RG9jdW1lbnQ6KEEoZSxcInRlbXBsYXRlXCIpJiYoZT1lLmNvbnRlbnR8fGUpLFMubWVyZ2UoW10sZS5jaGlsZE5vZGVzKSl9fSxmdW5jdGlvbihyLGkpe1MuZm5bcl09ZnVuY3Rpb24oZSx0KXt2YXIgbj1TLm1hcCh0aGlzLGksZSk7cmV0dXJuXCJVbnRpbFwiIT09ci5zbGljZSgtNSkmJih0PWUpLHQmJlwic3RyaW5nXCI9PXR5cGVvZiB0JiYobj1TLmZpbHRlcih0LG4pKSwxPHRoaXMubGVuZ3RoJiYoSFtyXXx8Uy51bmlxdWVTb3J0KG4pLEwudGVzdChyKSYmbi5yZXZlcnNlKCkpLHRoaXMucHVzaFN0YWNrKG4pfX0pO3ZhciBQPS9bXlxceDIwXFx0XFxyXFxuXFxmXSsvZztmdW5jdGlvbiBSKGUpe3JldHVybiBlfWZ1bmN0aW9uIE0oZSl7dGhyb3cgZX1mdW5jdGlvbiBJKGUsdCxuLHIpe3ZhciBpO3RyeXtlJiZtKGk9ZS5wcm9taXNlKT9pLmNhbGwoZSkuZG9uZSh0KS5mYWlsKG4pOmUmJm0oaT1lLnRoZW4pP2kuY2FsbChlLHQsbik6dC5hcHBseSh2b2lkIDAsW2VdLnNsaWNlKHIpKX1jYXRjaChlKXtuLmFwcGx5KHZvaWQgMCxbZV0pfX1TLkNhbGxiYWNrcz1mdW5jdGlvbihyKXt2YXIgZSxuO3I9XCJzdHJpbmdcIj09dHlwZW9mIHI/KGU9cixuPXt9LFMuZWFjaChlLm1hdGNoKFApfHxbXSxmdW5jdGlvbihlLHQpe25bdF09ITB9KSxuKTpTLmV4dGVuZCh7fSxyKTt2YXIgaSx0LG8sYSxzPVtdLHU9W10sbD0tMSxjPWZ1bmN0aW9uKCl7Zm9yKGE9YXx8ci5vbmNlLG89aT0hMDt1Lmxlbmd0aDtsPS0xKXt0PXUuc2hpZnQoKTt3aGlsZSgrK2w8cy5sZW5ndGgpITE9PT1zW2xdLmFwcGx5KHRbMF0sdFsxXSkmJnIuc3RvcE9uRmFsc2UmJihsPXMubGVuZ3RoLHQ9ITEpfXIubWVtb3J5fHwodD0hMSksaT0hMSxhJiYocz10P1tdOlwiXCIpfSxmPXthZGQ6ZnVuY3Rpb24oKXtyZXR1cm4gcyYmKHQmJiFpJiYobD1zLmxlbmd0aC0xLHUucHVzaCh0KSksZnVuY3Rpb24gbihlKXtTLmVhY2goZSxmdW5jdGlvbihlLHQpe20odCk/ci51bmlxdWUmJmYuaGFzKHQpfHxzLnB1c2godCk6dCYmdC5sZW5ndGgmJlwic3RyaW5nXCIhPT13KHQpJiZuKHQpfSl9KGFyZ3VtZW50cyksdCYmIWkmJmMoKSksdGhpc30scmVtb3ZlOmZ1bmN0aW9uKCl7cmV0dXJuIFMuZWFjaChhcmd1bWVudHMsZnVuY3Rpb24oZSx0KXt2YXIgbjt3aGlsZSgtMTwobj1TLmluQXJyYXkodCxzLG4pKSlzLnNwbGljZShuLDEpLG48PWwmJmwtLX0pLHRoaXN9LGhhczpmdW5jdGlvbihlKXtyZXR1cm4gZT8tMTxTLmluQXJyYXkoZSxzKTowPHMubGVuZ3RofSxlbXB0eTpmdW5jdGlvbigpe3JldHVybiBzJiYocz1bXSksdGhpc30sZGlzYWJsZTpmdW5jdGlvbigpe3JldHVybiBhPXU9W10scz10PVwiXCIsdGhpc30sZGlzYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hc30sbG9jazpmdW5jdGlvbigpe3JldHVybiBhPXU9W10sdHx8aXx8KHM9dD1cIlwiKSx0aGlzfSxsb2NrZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIWF9LGZpcmVXaXRoOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGF8fCh0PVtlLCh0PXR8fFtdKS5zbGljZT90LnNsaWNlKCk6dF0sdS5wdXNoKHQpLGl8fGMoKSksdGhpc30sZmlyZTpmdW5jdGlvbigpe3JldHVybiBmLmZpcmVXaXRoKHRoaXMsYXJndW1lbnRzKSx0aGlzfSxmaXJlZDpmdW5jdGlvbigpe3JldHVybiEhb319O3JldHVybiBmfSxTLmV4dGVuZCh7RGVmZXJyZWQ6ZnVuY3Rpb24oZSl7dmFyIG89W1tcIm5vdGlmeVwiLFwicHJvZ3Jlc3NcIixTLkNhbGxiYWNrcyhcIm1lbW9yeVwiKSxTLkNhbGxiYWNrcyhcIm1lbW9yeVwiKSwyXSxbXCJyZXNvbHZlXCIsXCJkb25lXCIsUy5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxTLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLDAsXCJyZXNvbHZlZFwiXSxbXCJyZWplY3RcIixcImZhaWxcIixTLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLFMuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksMSxcInJlamVjdGVkXCJdXSxpPVwicGVuZGluZ1wiLGE9e3N0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIGl9LGFsd2F5czpmdW5jdGlvbigpe3JldHVybiBzLmRvbmUoYXJndW1lbnRzKS5mYWlsKGFyZ3VtZW50cyksdGhpc30sXCJjYXRjaFwiOmZ1bmN0aW9uKGUpe3JldHVybiBhLnRoZW4obnVsbCxlKX0scGlwZTpmdW5jdGlvbigpe3ZhciBpPWFyZ3VtZW50cztyZXR1cm4gUy5EZWZlcnJlZChmdW5jdGlvbihyKXtTLmVhY2gobyxmdW5jdGlvbihlLHQpe3ZhciBuPW0oaVt0WzRdXSkmJmlbdFs0XV07c1t0WzFdXShmdW5jdGlvbigpe3ZhciBlPW4mJm4uYXBwbHkodGhpcyxhcmd1bWVudHMpO2UmJm0oZS5wcm9taXNlKT9lLnByb21pc2UoKS5wcm9ncmVzcyhyLm5vdGlmeSkuZG9uZShyLnJlc29sdmUpLmZhaWwoci5yZWplY3QpOnJbdFswXStcIldpdGhcIl0odGhpcyxuP1tlXTphcmd1bWVudHMpfSl9KSxpPW51bGx9KS5wcm9taXNlKCl9LHRoZW46ZnVuY3Rpb24odCxuLHIpe3ZhciB1PTA7ZnVuY3Rpb24gbChpLG8sYSxzKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgbj10aGlzLHI9YXJndW1lbnRzLGU9ZnVuY3Rpb24oKXt2YXIgZSx0O2lmKCEoaTx1KSl7aWYoKGU9YS5hcHBseShuLHIpKT09PW8ucHJvbWlzZSgpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGVuYWJsZSBzZWxmLXJlc29sdXRpb25cIik7dD1lJiYoXCJvYmplY3RcIj09dHlwZW9mIGV8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGUpJiZlLnRoZW4sbSh0KT9zP3QuY2FsbChlLGwodSxvLFIscyksbCh1LG8sTSxzKSk6KHUrKyx0LmNhbGwoZSxsKHUsbyxSLHMpLGwodSxvLE0scyksbCh1LG8sUixvLm5vdGlmeVdpdGgpKSk6KGEhPT1SJiYobj12b2lkIDAscj1bZV0pLChzfHxvLnJlc29sdmVXaXRoKShuLHIpKX19LHQ9cz9lOmZ1bmN0aW9uKCl7dHJ5e2UoKX1jYXRjaChlKXtTLkRlZmVycmVkLmV4Y2VwdGlvbkhvb2smJlMuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayhlLHQuc3RhY2tUcmFjZSksdTw9aSsxJiYoYSE9PU0mJihuPXZvaWQgMCxyPVtlXSksby5yZWplY3RXaXRoKG4scikpfX07aT90KCk6KFMuRGVmZXJyZWQuZ2V0U3RhY2tIb29rJiYodC5zdGFja1RyYWNlPVMuRGVmZXJyZWQuZ2V0U3RhY2tIb29rKCkpLEMuc2V0VGltZW91dCh0KSl9fXJldHVybiBTLkRlZmVycmVkKGZ1bmN0aW9uKGUpe29bMF1bM10uYWRkKGwoMCxlLG0ocik/cjpSLGUubm90aWZ5V2l0aCkpLG9bMV1bM10uYWRkKGwoMCxlLG0odCk/dDpSKSksb1syXVszXS5hZGQobCgwLGUsbShuKT9uOk0pKX0pLnByb21pc2UoKX0scHJvbWlzZTpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbCE9ZT9TLmV4dGVuZChlLGEpOmF9fSxzPXt9O3JldHVybiBTLmVhY2gobyxmdW5jdGlvbihlLHQpe3ZhciBuPXRbMl0scj10WzVdO2FbdFsxXV09bi5hZGQsciYmbi5hZGQoZnVuY3Rpb24oKXtpPXJ9LG9bMy1lXVsyXS5kaXNhYmxlLG9bMy1lXVszXS5kaXNhYmxlLG9bMF1bMl0ubG9jayxvWzBdWzNdLmxvY2spLG4uYWRkKHRbM10uZmlyZSksc1t0WzBdXT1mdW5jdGlvbigpe3JldHVybiBzW3RbMF0rXCJXaXRoXCJdKHRoaXM9PT1zP3ZvaWQgMDp0aGlzLGFyZ3VtZW50cyksdGhpc30sc1t0WzBdK1wiV2l0aFwiXT1uLmZpcmVXaXRofSksYS5wcm9taXNlKHMpLGUmJmUuY2FsbChzLHMpLHN9LHdoZW46ZnVuY3Rpb24oZSl7dmFyIG49YXJndW1lbnRzLmxlbmd0aCx0PW4scj1BcnJheSh0KSxpPXMuY2FsbChhcmd1bWVudHMpLG89Uy5EZWZlcnJlZCgpLGE9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JbdF09dGhpcyxpW3RdPTE8YXJndW1lbnRzLmxlbmd0aD9zLmNhbGwoYXJndW1lbnRzKTplLC0tbnx8by5yZXNvbHZlV2l0aChyLGkpfX07aWYobjw9MSYmKEkoZSxvLmRvbmUoYSh0KSkucmVzb2x2ZSxvLnJlamVjdCwhbiksXCJwZW5kaW5nXCI9PT1vLnN0YXRlKCl8fG0oaVt0XSYmaVt0XS50aGVuKSkpcmV0dXJuIG8udGhlbigpO3doaWxlKHQtLSlJKGlbdF0sYSh0KSxvLnJlamVjdCk7cmV0dXJuIG8ucHJvbWlzZSgpfX0pO3ZhciBXPS9eKEV2YWx8SW50ZXJuYWx8UmFuZ2V8UmVmZXJlbmNlfFN5bnRheHxUeXBlfFVSSSlFcnJvciQvO1MuRGVmZXJyZWQuZXhjZXB0aW9uSG9vaz1mdW5jdGlvbihlLHQpe0MuY29uc29sZSYmQy5jb25zb2xlLndhcm4mJmUmJlcudGVzdChlLm5hbWUpJiZDLmNvbnNvbGUud2FybihcImpRdWVyeS5EZWZlcnJlZCBleGNlcHRpb246IFwiK2UubWVzc2FnZSxlLnN0YWNrLHQpfSxTLnJlYWR5RXhjZXB0aW9uPWZ1bmN0aW9uKGUpe0Muc2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IGV9KX07dmFyIEY9Uy5EZWZlcnJlZCgpO2Z1bmN0aW9uIEIoKXtFLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsQiksQy5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLEIpLFMucmVhZHkoKX1TLmZuLnJlYWR5PWZ1bmN0aW9uKGUpe3JldHVybiBGLnRoZW4oZSlbXCJjYXRjaFwiXShmdW5jdGlvbihlKXtTLnJlYWR5RXhjZXB0aW9uKGUpfSksdGhpc30sUy5leHRlbmQoe2lzUmVhZHk6ITEscmVhZHlXYWl0OjEscmVhZHk6ZnVuY3Rpb24oZSl7KCEwPT09ZT8tLVMucmVhZHlXYWl0OlMuaXNSZWFkeSl8fChTLmlzUmVhZHk9ITApIT09ZSYmMDwtLVMucmVhZHlXYWl0fHxGLnJlc29sdmVXaXRoKEUsW1NdKX19KSxTLnJlYWR5LnRoZW49Ri50aGVuLFwiY29tcGxldGVcIj09PUUucmVhZHlTdGF0ZXx8XCJsb2FkaW5nXCIhPT1FLnJlYWR5U3RhdGUmJiFFLmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbD9DLnNldFRpbWVvdXQoUy5yZWFkeSk6KEUuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixCKSxDLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsQikpO3ZhciAkPWZ1bmN0aW9uKGUsdCxuLHIsaSxvLGEpe3ZhciBzPTAsdT1lLmxlbmd0aCxsPW51bGw9PW47aWYoXCJvYmplY3RcIj09PXcobikpZm9yKHMgaW4gaT0hMCxuKSQoZSx0LHMsbltzXSwhMCxvLGEpO2Vsc2UgaWYodm9pZCAwIT09ciYmKGk9ITAsbShyKXx8KGE9ITApLGwmJihhPyh0LmNhbGwoZSxyKSx0PW51bGwpOihsPXQsdD1mdW5jdGlvbihlLHQsbil7cmV0dXJuIGwuY2FsbChTKGUpLG4pfSkpLHQpKWZvcig7czx1O3MrKyl0KGVbc10sbixhP3I6ci5jYWxsKGVbc10scyx0KGVbc10sbikpKTtyZXR1cm4gaT9lOmw/dC5jYWxsKGUpOnU/dChlWzBdLG4pOm99LF89L14tbXMtLyx6PS8tKFthLXpdKS9nO2Z1bmN0aW9uIFUoZSx0KXtyZXR1cm4gdC50b1VwcGVyQ2FzZSgpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIGUucmVwbGFjZShfLFwibXMtXCIpLnJlcGxhY2UoeixVKX12YXIgVj1mdW5jdGlvbihlKXtyZXR1cm4gMT09PWUubm9kZVR5cGV8fDk9PT1lLm5vZGVUeXBlfHwhK2Uubm9kZVR5cGV9O2Z1bmN0aW9uIEcoKXt0aGlzLmV4cGFuZG89Uy5leHBhbmRvK0cudWlkKyt9Ry51aWQ9MSxHLnByb3RvdHlwZT17Y2FjaGU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZVt0aGlzLmV4cGFuZG9dO3JldHVybiB0fHwodD17fSxWKGUpJiYoZS5ub2RlVHlwZT9lW3RoaXMuZXhwYW5kb109dDpPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0aGlzLmV4cGFuZG8se3ZhbHVlOnQsY29uZmlndXJhYmxlOiEwfSkpKSx0fSxzZXQ6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGk9dGhpcy5jYWNoZShlKTtpZihcInN0cmluZ1wiPT10eXBlb2YgdClpW1godCldPW47ZWxzZSBmb3IociBpbiB0KWlbWChyKV09dFtyXTtyZXR1cm4gaX0sZ2V0OmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHZvaWQgMD09PXQ/dGhpcy5jYWNoZShlKTplW3RoaXMuZXhwYW5kb10mJmVbdGhpcy5leHBhbmRvXVtYKHQpXX0sYWNjZXNzOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdm9pZCAwPT09dHx8dCYmXCJzdHJpbmdcIj09dHlwZW9mIHQmJnZvaWQgMD09PW4/dGhpcy5nZXQoZSx0KToodGhpcy5zZXQoZSx0LG4pLHZvaWQgMCE9PW4/bjp0KX0scmVtb3ZlOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj1lW3RoaXMuZXhwYW5kb107aWYodm9pZCAwIT09cil7aWYodm9pZCAwIT09dCl7bj0odD1BcnJheS5pc0FycmF5KHQpP3QubWFwKFgpOih0PVgodCkpaW4gcj9bdF06dC5tYXRjaChQKXx8W10pLmxlbmd0aDt3aGlsZShuLS0pZGVsZXRlIHJbdFtuXV19KHZvaWQgMD09PXR8fFMuaXNFbXB0eU9iamVjdChyKSkmJihlLm5vZGVUeXBlP2VbdGhpcy5leHBhbmRvXT12b2lkIDA6ZGVsZXRlIGVbdGhpcy5leHBhbmRvXSl9fSxoYXNEYXRhOmZ1bmN0aW9uKGUpe3ZhciB0PWVbdGhpcy5leHBhbmRvXTtyZXR1cm4gdm9pZCAwIT09dCYmIVMuaXNFbXB0eU9iamVjdCh0KX19O3ZhciBZPW5ldyBHLFE9bmV3IEcsSj0vXig/Olxce1tcXHdcXFddKlxcfXxcXFtbXFx3XFxXXSpcXF0pJC8sSz0vW0EtWl0vZztmdW5jdGlvbiBaKGUsdCxuKXt2YXIgcixpO2lmKHZvaWQgMD09PW4mJjE9PT1lLm5vZGVUeXBlKWlmKHI9XCJkYXRhLVwiK3QucmVwbGFjZShLLFwiLSQmXCIpLnRvTG93ZXJDYXNlKCksXCJzdHJpbmdcIj09dHlwZW9mKG49ZS5nZXRBdHRyaWJ1dGUocikpKXt0cnl7bj1cInRydWVcIj09PShpPW4pfHxcImZhbHNlXCIhPT1pJiYoXCJudWxsXCI9PT1pP251bGw6aT09PStpK1wiXCI/K2k6Si50ZXN0KGkpP0pTT04ucGFyc2UoaSk6aSl9Y2F0Y2goZSl7fVEuc2V0KGUsdCxuKX1lbHNlIG49dm9pZCAwO3JldHVybiBufVMuZXh0ZW5kKHtoYXNEYXRhOmZ1bmN0aW9uKGUpe3JldHVybiBRLmhhc0RhdGEoZSl8fFkuaGFzRGF0YShlKX0sZGF0YTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIFEuYWNjZXNzKGUsdCxuKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihlLHQpe1EucmVtb3ZlKGUsdCl9LF9kYXRhOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gWS5hY2Nlc3MoZSx0LG4pfSxfcmVtb3ZlRGF0YTpmdW5jdGlvbihlLHQpe1kucmVtb3ZlKGUsdCl9fSksUy5mbi5leHRlbmQoe2RhdGE6ZnVuY3Rpb24obixlKXt2YXIgdCxyLGksbz10aGlzWzBdLGE9byYmby5hdHRyaWJ1dGVzO2lmKHZvaWQgMD09PW4pe2lmKHRoaXMubGVuZ3RoJiYoaT1RLmdldChvKSwxPT09by5ub2RlVHlwZSYmIVkuZ2V0KG8sXCJoYXNEYXRhQXR0cnNcIikpKXt0PWEubGVuZ3RoO3doaWxlKHQtLSlhW3RdJiYwPT09KHI9YVt0XS5uYW1lKS5pbmRleE9mKFwiZGF0YS1cIikmJihyPVgoci5zbGljZSg1KSksWihvLHIsaVtyXSkpO1kuc2V0KG8sXCJoYXNEYXRhQXR0cnNcIiwhMCl9cmV0dXJuIGl9cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIG4/dGhpcy5lYWNoKGZ1bmN0aW9uKCl7US5zZXQodGhpcyxuKX0pOiQodGhpcyxmdW5jdGlvbihlKXt2YXIgdDtpZihvJiZ2b2lkIDA9PT1lKXJldHVybiB2b2lkIDAhPT0odD1RLmdldChvLG4pKT90OnZvaWQgMCE9PSh0PVoobyxuKSk/dDp2b2lkIDA7dGhpcy5lYWNoKGZ1bmN0aW9uKCl7US5zZXQodGhpcyxuLGUpfSl9LG51bGwsZSwxPGFyZ3VtZW50cy5sZW5ndGgsbnVsbCwhMCl9LHJlbW92ZURhdGE6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1EucmVtb3ZlKHRoaXMsZSl9KX19KSxTLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oZSx0LG4pe3ZhciByO2lmKGUpcmV0dXJuIHQ9KHR8fFwiZnhcIikrXCJxdWV1ZVwiLHI9WS5nZXQoZSx0KSxuJiYoIXJ8fEFycmF5LmlzQXJyYXkobik/cj1ZLmFjY2VzcyhlLHQsUy5tYWtlQXJyYXkobikpOnIucHVzaChuKSkscnx8W119LGRlcXVldWU6ZnVuY3Rpb24oZSx0KXt0PXR8fFwiZnhcIjt2YXIgbj1TLnF1ZXVlKGUsdCkscj1uLmxlbmd0aCxpPW4uc2hpZnQoKSxvPVMuX3F1ZXVlSG9va3MoZSx0KTtcImlucHJvZ3Jlc3NcIj09PWkmJihpPW4uc2hpZnQoKSxyLS0pLGkmJihcImZ4XCI9PT10JiZuLnVuc2hpZnQoXCJpbnByb2dyZXNzXCIpLGRlbGV0ZSBvLnN0b3AsaS5jYWxsKGUsZnVuY3Rpb24oKXtTLmRlcXVldWUoZSx0KX0sbykpLCFyJiZvJiZvLmVtcHR5LmZpcmUoKX0sX3F1ZXVlSG9va3M6ZnVuY3Rpb24oZSx0KXt2YXIgbj10K1wicXVldWVIb29rc1wiO3JldHVybiBZLmdldChlLG4pfHxZLmFjY2VzcyhlLG4se2VtcHR5OlMuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikuYWRkKGZ1bmN0aW9uKCl7WS5yZW1vdmUoZSxbdCtcInF1ZXVlXCIsbl0pfSl9KX19KSxTLmZuLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24odCxuKXt2YXIgZT0yO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiB0JiYobj10LHQ9XCJmeFwiLGUtLSksYXJndW1lbnRzLmxlbmd0aDxlP1MucXVldWUodGhpc1swXSx0KTp2b2lkIDA9PT1uP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9Uy5xdWV1ZSh0aGlzLHQsbik7Uy5fcXVldWVIb29rcyh0aGlzLHQpLFwiZnhcIj09PXQmJlwiaW5wcm9ncmVzc1wiIT09ZVswXSYmUy5kZXF1ZXVlKHRoaXMsdCl9KX0sZGVxdWV1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Uy5kZXF1ZXVlKHRoaXMsZSl9KX0sY2xlYXJRdWV1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5xdWV1ZShlfHxcImZ4XCIsW10pfSxwcm9taXNlOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj0xLGk9Uy5EZWZlcnJlZCgpLG89dGhpcyxhPXRoaXMubGVuZ3RoLHM9ZnVuY3Rpb24oKXstLXJ8fGkucmVzb2x2ZVdpdGgobyxbb10pfTtcInN0cmluZ1wiIT10eXBlb2YgZSYmKHQ9ZSxlPXZvaWQgMCksZT1lfHxcImZ4XCI7d2hpbGUoYS0tKShuPVkuZ2V0KG9bYV0sZStcInF1ZXVlSG9va3NcIikpJiZuLmVtcHR5JiYocisrLG4uZW1wdHkuYWRkKHMpKTtyZXR1cm4gcygpLGkucHJvbWlzZSh0KX19KTt2YXIgZWU9L1srLV0/KD86XFxkKlxcLnwpXFxkKyg/OltlRV1bKy1dP1xcZCt8KS8uc291cmNlLHRlPW5ldyBSZWdFeHAoXCJeKD86KFsrLV0pPXwpKFwiK2VlK1wiKShbYS16JV0qKSRcIixcImlcIiksbmU9W1wiVG9wXCIsXCJSaWdodFwiLFwiQm90dG9tXCIsXCJMZWZ0XCJdLHJlPUUuZG9jdW1lbnRFbGVtZW50LGllPWZ1bmN0aW9uKGUpe3JldHVybiBTLmNvbnRhaW5zKGUub3duZXJEb2N1bWVudCxlKX0sb2U9e2NvbXBvc2VkOiEwfTtyZS5nZXRSb290Tm9kZSYmKGllPWZ1bmN0aW9uKGUpe3JldHVybiBTLmNvbnRhaW5zKGUub3duZXJEb2N1bWVudCxlKXx8ZS5nZXRSb290Tm9kZShvZSk9PT1lLm93bmVyRG9jdW1lbnR9KTt2YXIgYWU9ZnVuY3Rpb24oZSx0KXtyZXR1cm5cIm5vbmVcIj09PShlPXR8fGUpLnN0eWxlLmRpc3BsYXl8fFwiXCI9PT1lLnN0eWxlLmRpc3BsYXkmJmllKGUpJiZcIm5vbmVcIj09PVMuY3NzKGUsXCJkaXNwbGF5XCIpfTtmdW5jdGlvbiBzZShlLHQsbixyKXt2YXIgaSxvLGE9MjAscz1yP2Z1bmN0aW9uKCl7cmV0dXJuIHIuY3VyKCl9OmZ1bmN0aW9uKCl7cmV0dXJuIFMuY3NzKGUsdCxcIlwiKX0sdT1zKCksbD1uJiZuWzNdfHwoUy5jc3NOdW1iZXJbdF0/XCJcIjpcInB4XCIpLGM9ZS5ub2RlVHlwZSYmKFMuY3NzTnVtYmVyW3RdfHxcInB4XCIhPT1sJiYrdSkmJnRlLmV4ZWMoUy5jc3MoZSx0KSk7aWYoYyYmY1szXSE9PWwpe3UvPTIsbD1sfHxjWzNdLGM9K3V8fDE7d2hpbGUoYS0tKVMuc3R5bGUoZSx0LGMrbCksKDEtbykqKDEtKG89cygpL3V8fC41KSk8PTAmJihhPTApLGMvPW87Yyo9MixTLnN0eWxlKGUsdCxjK2wpLG49bnx8W119cmV0dXJuIG4mJihjPStjfHwrdXx8MCxpPW5bMV0/YysoblsxXSsxKSpuWzJdOituWzJdLHImJihyLnVuaXQ9bCxyLnN0YXJ0PWMsci5lbmQ9aSkpLGl9dmFyIHVlPXt9O2Z1bmN0aW9uIGxlKGUsdCl7Zm9yKHZhciBuLHIsaSxvLGEscyx1LGw9W10sYz0wLGY9ZS5sZW5ndGg7YzxmO2MrKykocj1lW2NdKS5zdHlsZSYmKG49ci5zdHlsZS5kaXNwbGF5LHQ/KFwibm9uZVwiPT09biYmKGxbY109WS5nZXQocixcImRpc3BsYXlcIil8fG51bGwsbFtjXXx8KHIuc3R5bGUuZGlzcGxheT1cIlwiKSksXCJcIj09PXIuc3R5bGUuZGlzcGxheSYmYWUocikmJihsW2NdPSh1PWE9bz12b2lkIDAsYT0oaT1yKS5vd25lckRvY3VtZW50LHM9aS5ub2RlTmFtZSwodT11ZVtzXSl8fChvPWEuYm9keS5hcHBlbmRDaGlsZChhLmNyZWF0ZUVsZW1lbnQocykpLHU9Uy5jc3MobyxcImRpc3BsYXlcIiksby5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG8pLFwibm9uZVwiPT09dSYmKHU9XCJibG9ja1wiKSx1ZVtzXT11KSkpKTpcIm5vbmVcIiE9PW4mJihsW2NdPVwibm9uZVwiLFkuc2V0KHIsXCJkaXNwbGF5XCIsbikpKTtmb3IoYz0wO2M8ZjtjKyspbnVsbCE9bFtjXSYmKGVbY10uc3R5bGUuZGlzcGxheT1sW2NdKTtyZXR1cm4gZX1TLmZuLmV4dGVuZCh7c2hvdzpmdW5jdGlvbigpe3JldHVybiBsZSh0aGlzLCEwKX0saGlkZTpmdW5jdGlvbigpe3JldHVybiBsZSh0aGlzKX0sdG9nZ2xlOmZ1bmN0aW9uKGUpe3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgZT9lP3RoaXMuc2hvdygpOnRoaXMuaGlkZSgpOnRoaXMuZWFjaChmdW5jdGlvbigpe2FlKHRoaXMpP1ModGhpcykuc2hvdygpOlModGhpcykuaGlkZSgpfSl9fSk7dmFyIGNlLGZlLHBlPS9eKD86Y2hlY2tib3h8cmFkaW8pJC9pLGRlPS88KFthLXpdW15cXC9cXDA+XFx4MjBcXHRcXHJcXG5cXGZdKikvaSxoZT0vXiR8Xm1vZHVsZSR8XFwvKD86amF2YXxlY21hKXNjcmlwdC9pO2NlPUUuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLmFwcGVuZENoaWxkKEUuY3JlYXRlRWxlbWVudChcImRpdlwiKSksKGZlPUUuY3JlYXRlRWxlbWVudChcImlucHV0XCIpKS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJyYWRpb1wiKSxmZS5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsXCJjaGVja2VkXCIpLGZlLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcInRcIiksY2UuYXBwZW5kQ2hpbGQoZmUpLHkuY2hlY2tDbG9uZT1jZS5jbG9uZU5vZGUoITApLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmNoZWNrZWQsY2UuaW5uZXJIVE1MPVwiPHRleHRhcmVhPng8L3RleHRhcmVhPlwiLHkubm9DbG9uZUNoZWNrZWQ9ISFjZS5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5kZWZhdWx0VmFsdWUsY2UuaW5uZXJIVE1MPVwiPG9wdGlvbj48L29wdGlvbj5cIix5Lm9wdGlvbj0hIWNlLmxhc3RDaGlsZDt2YXIgZ2U9e3RoZWFkOlsxLFwiPHRhYmxlPlwiLFwiPC90YWJsZT5cIl0sY29sOlsyLFwiPHRhYmxlPjxjb2xncm91cD5cIixcIjwvY29sZ3JvdXA+PC90YWJsZT5cIl0sdHI6WzIsXCI8dGFibGU+PHRib2R5PlwiLFwiPC90Ym9keT48L3RhYmxlPlwiXSx0ZDpbMyxcIjx0YWJsZT48dGJvZHk+PHRyPlwiLFwiPC90cj48L3Rib2R5PjwvdGFibGU+XCJdLF9kZWZhdWx0OlswLFwiXCIsXCJcIl19O2Z1bmN0aW9uIHZlKGUsdCl7dmFyIG47cmV0dXJuIG49XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUuZ2V0RWxlbWVudHNCeVRhZ05hbWU/ZS5nZXRFbGVtZW50c0J5VGFnTmFtZSh0fHxcIipcIik6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUucXVlcnlTZWxlY3RvckFsbD9lLnF1ZXJ5U2VsZWN0b3JBbGwodHx8XCIqXCIpOltdLHZvaWQgMD09PXR8fHQmJkEoZSx0KT9TLm1lcmdlKFtlXSxuKTpufWZ1bmN0aW9uIHllKGUsdCl7Zm9yKHZhciBuPTAscj1lLmxlbmd0aDtuPHI7bisrKVkuc2V0KGVbbl0sXCJnbG9iYWxFdmFsXCIsIXR8fFkuZ2V0KHRbbl0sXCJnbG9iYWxFdmFsXCIpKX1nZS50Ym9keT1nZS50Zm9vdD1nZS5jb2xncm91cD1nZS5jYXB0aW9uPWdlLnRoZWFkLGdlLnRoPWdlLnRkLHkub3B0aW9ufHwoZ2Uub3B0Z3JvdXA9Z2Uub3B0aW9uPVsxLFwiPHNlbGVjdCBtdWx0aXBsZT0nbXVsdGlwbGUnPlwiLFwiPC9zZWxlY3Q+XCJdKTt2YXIgbWU9Lzx8JiM/XFx3KzsvO2Z1bmN0aW9uIHhlKGUsdCxuLHIsaSl7Zm9yKHZhciBvLGEscyx1LGwsYyxmPXQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLHA9W10sZD0wLGg9ZS5sZW5ndGg7ZDxoO2QrKylpZigobz1lW2RdKXx8MD09PW8paWYoXCJvYmplY3RcIj09PXcobykpUy5tZXJnZShwLG8ubm9kZVR5cGU/W29dOm8pO2Vsc2UgaWYobWUudGVzdChvKSl7YT1hfHxmLmFwcGVuZENoaWxkKHQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkscz0oZGUuZXhlYyhvKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCksdT1nZVtzXXx8Z2UuX2RlZmF1bHQsYS5pbm5lckhUTUw9dVsxXStTLmh0bWxQcmVmaWx0ZXIobykrdVsyXSxjPXVbMF07d2hpbGUoYy0tKWE9YS5sYXN0Q2hpbGQ7Uy5tZXJnZShwLGEuY2hpbGROb2RlcyksKGE9Zi5maXJzdENoaWxkKS50ZXh0Q29udGVudD1cIlwifWVsc2UgcC5wdXNoKHQuY3JlYXRlVGV4dE5vZGUobykpO2YudGV4dENvbnRlbnQ9XCJcIixkPTA7d2hpbGUobz1wW2QrK10paWYociYmLTE8Uy5pbkFycmF5KG8scikpaSYmaS5wdXNoKG8pO2Vsc2UgaWYobD1pZShvKSxhPXZlKGYuYXBwZW5kQ2hpbGQobyksXCJzY3JpcHRcIiksbCYmeWUoYSksbil7Yz0wO3doaWxlKG89YVtjKytdKWhlLnRlc3Qoby50eXBlfHxcIlwiKSYmbi5wdXNoKG8pfXJldHVybiBmfXZhciBiZT0vXmtleS8sd2U9L14oPzptb3VzZXxwb2ludGVyfGNvbnRleHRtZW51fGRyYWd8ZHJvcCl8Y2xpY2svLFRlPS9eKFteLl0qKSg/OlxcLiguKyl8KS87ZnVuY3Rpb24gQ2UoKXtyZXR1cm4hMH1mdW5jdGlvbiBFZSgpe3JldHVybiExfWZ1bmN0aW9uIFNlKGUsdCl7cmV0dXJuIGU9PT1mdW5jdGlvbigpe3RyeXtyZXR1cm4gRS5hY3RpdmVFbGVtZW50fWNhdGNoKGUpe319KCk9PShcImZvY3VzXCI9PT10KX1mdW5jdGlvbiBrZShlLHQsbixyLGksbyl7dmFyIGEscztpZihcIm9iamVjdFwiPT10eXBlb2YgdCl7Zm9yKHMgaW5cInN0cmluZ1wiIT10eXBlb2YgbiYmKHI9cnx8bixuPXZvaWQgMCksdClrZShlLHMsbixyLHRbc10sbyk7cmV0dXJuIGV9aWYobnVsbD09ciYmbnVsbD09aT8oaT1uLHI9bj12b2lkIDApOm51bGw9PWkmJihcInN0cmluZ1wiPT10eXBlb2Ygbj8oaT1yLHI9dm9pZCAwKTooaT1yLHI9bixuPXZvaWQgMCkpLCExPT09aSlpPUVlO2Vsc2UgaWYoIWkpcmV0dXJuIGU7cmV0dXJuIDE9PT1vJiYoYT1pLChpPWZ1bmN0aW9uKGUpe3JldHVybiBTKCkub2ZmKGUpLGEuYXBwbHkodGhpcyxhcmd1bWVudHMpfSkuZ3VpZD1hLmd1aWR8fChhLmd1aWQ9Uy5ndWlkKyspKSxlLmVhY2goZnVuY3Rpb24oKXtTLmV2ZW50LmFkZCh0aGlzLHQsaSxyLG4pfSl9ZnVuY3Rpb24gQWUoZSxpLG8pe28/KFkuc2V0KGUsaSwhMSksUy5ldmVudC5hZGQoZSxpLHtuYW1lc3BhY2U6ITEsaGFuZGxlcjpmdW5jdGlvbihlKXt2YXIgdCxuLHI9WS5nZXQodGhpcyxpKTtpZigxJmUuaXNUcmlnZ2VyJiZ0aGlzW2ldKXtpZihyLmxlbmd0aCkoUy5ldmVudC5zcGVjaWFsW2ldfHx7fSkuZGVsZWdhdGVUeXBlJiZlLnN0b3BQcm9wYWdhdGlvbigpO2Vsc2UgaWYocj1zLmNhbGwoYXJndW1lbnRzKSxZLnNldCh0aGlzLGksciksdD1vKHRoaXMsaSksdGhpc1tpXSgpLHIhPT0obj1ZLmdldCh0aGlzLGkpKXx8dD9ZLnNldCh0aGlzLGksITEpOm49e30sciE9PW4pcmV0dXJuIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCksZS5wcmV2ZW50RGVmYXVsdCgpLG4udmFsdWV9ZWxzZSByLmxlbmd0aCYmKFkuc2V0KHRoaXMsaSx7dmFsdWU6Uy5ldmVudC50cmlnZ2VyKFMuZXh0ZW5kKHJbMF0sUy5FdmVudC5wcm90b3R5cGUpLHIuc2xpY2UoMSksdGhpcyl9KSxlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpKX19KSk6dm9pZCAwPT09WS5nZXQoZSxpKSYmUy5ldmVudC5hZGQoZSxpLENlKX1TLmV2ZW50PXtnbG9iYWw6e30sYWRkOmZ1bmN0aW9uKHQsZSxuLHIsaSl7dmFyIG8sYSxzLHUsbCxjLGYscCxkLGgsZyx2PVkuZ2V0KHQpO2lmKFYodCkpe24uaGFuZGxlciYmKG49KG89bikuaGFuZGxlcixpPW8uc2VsZWN0b3IpLGkmJlMuZmluZC5tYXRjaGVzU2VsZWN0b3IocmUsaSksbi5ndWlkfHwobi5ndWlkPVMuZ3VpZCsrKSwodT12LmV2ZW50cyl8fCh1PXYuZXZlbnRzPU9iamVjdC5jcmVhdGUobnVsbCkpLChhPXYuaGFuZGxlKXx8KGE9di5oYW5kbGU9ZnVuY3Rpb24oZSl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFMmJlMuZXZlbnQudHJpZ2dlcmVkIT09ZS50eXBlP1MuZXZlbnQuZGlzcGF0Y2guYXBwbHkodCxhcmd1bWVudHMpOnZvaWQgMH0pLGw9KGU9KGV8fFwiXCIpLm1hdGNoKFApfHxbXCJcIl0pLmxlbmd0aDt3aGlsZShsLS0pZD1nPShzPVRlLmV4ZWMoZVtsXSl8fFtdKVsxXSxoPShzWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLGQmJihmPVMuZXZlbnQuc3BlY2lhbFtkXXx8e30sZD0oaT9mLmRlbGVnYXRlVHlwZTpmLmJpbmRUeXBlKXx8ZCxmPVMuZXZlbnQuc3BlY2lhbFtkXXx8e30sYz1TLmV4dGVuZCh7dHlwZTpkLG9yaWdUeXBlOmcsZGF0YTpyLGhhbmRsZXI6bixndWlkOm4uZ3VpZCxzZWxlY3RvcjppLG5lZWRzQ29udGV4dDppJiZTLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LnRlc3QoaSksbmFtZXNwYWNlOmguam9pbihcIi5cIil9LG8pLChwPXVbZF0pfHwoKHA9dVtkXT1bXSkuZGVsZWdhdGVDb3VudD0wLGYuc2V0dXAmJiExIT09Zi5zZXR1cC5jYWxsKHQscixoLGEpfHx0LmFkZEV2ZW50TGlzdGVuZXImJnQuYWRkRXZlbnRMaXN0ZW5lcihkLGEpKSxmLmFkZCYmKGYuYWRkLmNhbGwodCxjKSxjLmhhbmRsZXIuZ3VpZHx8KGMuaGFuZGxlci5ndWlkPW4uZ3VpZCkpLGk/cC5zcGxpY2UocC5kZWxlZ2F0ZUNvdW50KyssMCxjKTpwLnB1c2goYyksUy5ldmVudC5nbG9iYWxbZF09ITApfX0scmVtb3ZlOmZ1bmN0aW9uKGUsdCxuLHIsaSl7dmFyIG8sYSxzLHUsbCxjLGYscCxkLGgsZyx2PVkuaGFzRGF0YShlKSYmWS5nZXQoZSk7aWYodiYmKHU9di5ldmVudHMpKXtsPSh0PSh0fHxcIlwiKS5tYXRjaChQKXx8W1wiXCJdKS5sZW5ndGg7d2hpbGUobC0tKWlmKGQ9Zz0ocz1UZS5leGVjKHRbbF0pfHxbXSlbMV0saD0oc1syXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxkKXtmPVMuZXZlbnQuc3BlY2lhbFtkXXx8e30scD11W2Q9KHI/Zi5kZWxlZ2F0ZVR5cGU6Zi5iaW5kVHlwZSl8fGRdfHxbXSxzPXNbMl0mJm5ldyBSZWdFeHAoXCIoXnxcXFxcLilcIitoLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKSxhPW89cC5sZW5ndGg7d2hpbGUoby0tKWM9cFtvXSwhaSYmZyE9PWMub3JpZ1R5cGV8fG4mJm4uZ3VpZCE9PWMuZ3VpZHx8cyYmIXMudGVzdChjLm5hbWVzcGFjZSl8fHImJnIhPT1jLnNlbGVjdG9yJiYoXCIqKlwiIT09cnx8IWMuc2VsZWN0b3IpfHwocC5zcGxpY2UobywxKSxjLnNlbGVjdG9yJiZwLmRlbGVnYXRlQ291bnQtLSxmLnJlbW92ZSYmZi5yZW1vdmUuY2FsbChlLGMpKTthJiYhcC5sZW5ndGgmJihmLnRlYXJkb3duJiYhMSE9PWYudGVhcmRvd24uY2FsbChlLGgsdi5oYW5kbGUpfHxTLnJlbW92ZUV2ZW50KGUsZCx2LmhhbmRsZSksZGVsZXRlIHVbZF0pfWVsc2UgZm9yKGQgaW4gdSlTLmV2ZW50LnJlbW92ZShlLGQrdFtsXSxuLHIsITApO1MuaXNFbXB0eU9iamVjdCh1KSYmWS5yZW1vdmUoZSxcImhhbmRsZSBldmVudHNcIil9fSxkaXNwYXRjaDpmdW5jdGlvbihlKXt2YXIgdCxuLHIsaSxvLGEscz1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCksdT1TLmV2ZW50LmZpeChlKSxsPShZLmdldCh0aGlzLFwiZXZlbnRzXCIpfHxPYmplY3QuY3JlYXRlKG51bGwpKVt1LnR5cGVdfHxbXSxjPVMuZXZlbnQuc3BlY2lhbFt1LnR5cGVdfHx7fTtmb3Ioc1swXT11LHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXNbdF09YXJndW1lbnRzW3RdO2lmKHUuZGVsZWdhdGVUYXJnZXQ9dGhpcywhYy5wcmVEaXNwYXRjaHx8ITEhPT1jLnByZURpc3BhdGNoLmNhbGwodGhpcyx1KSl7YT1TLmV2ZW50LmhhbmRsZXJzLmNhbGwodGhpcyx1LGwpLHQ9MDt3aGlsZSgoaT1hW3QrK10pJiYhdS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKXt1LmN1cnJlbnRUYXJnZXQ9aS5lbGVtLG49MDt3aGlsZSgobz1pLmhhbmRsZXJzW24rK10pJiYhdS5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpKXUucm5hbWVzcGFjZSYmITEhPT1vLm5hbWVzcGFjZSYmIXUucm5hbWVzcGFjZS50ZXN0KG8ubmFtZXNwYWNlKXx8KHUuaGFuZGxlT2JqPW8sdS5kYXRhPW8uZGF0YSx2b2lkIDAhPT0ocj0oKFMuZXZlbnQuc3BlY2lhbFtvLm9yaWdUeXBlXXx8e30pLmhhbmRsZXx8by5oYW5kbGVyKS5hcHBseShpLmVsZW0scykpJiYhMT09PSh1LnJlc3VsdD1yKSYmKHUucHJldmVudERlZmF1bHQoKSx1LnN0b3BQcm9wYWdhdGlvbigpKSl9cmV0dXJuIGMucG9zdERpc3BhdGNoJiZjLnBvc3REaXNwYXRjaC5jYWxsKHRoaXMsdSksdS5yZXN1bHR9fSxoYW5kbGVyczpmdW5jdGlvbihlLHQpe3ZhciBuLHIsaSxvLGEscz1bXSx1PXQuZGVsZWdhdGVDb3VudCxsPWUudGFyZ2V0O2lmKHUmJmwubm9kZVR5cGUmJiEoXCJjbGlja1wiPT09ZS50eXBlJiYxPD1lLmJ1dHRvbikpZm9yKDtsIT09dGhpcztsPWwucGFyZW50Tm9kZXx8dGhpcylpZigxPT09bC5ub2RlVHlwZSYmKFwiY2xpY2tcIiE9PWUudHlwZXx8ITAhPT1sLmRpc2FibGVkKSl7Zm9yKG89W10sYT17fSxuPTA7bjx1O24rKyl2b2lkIDA9PT1hW2k9KHI9dFtuXSkuc2VsZWN0b3IrXCIgXCJdJiYoYVtpXT1yLm5lZWRzQ29udGV4dD8tMTxTKGksdGhpcykuaW5kZXgobCk6Uy5maW5kKGksdGhpcyxudWxsLFtsXSkubGVuZ3RoKSxhW2ldJiZvLnB1c2gocik7by5sZW5ndGgmJnMucHVzaCh7ZWxlbTpsLGhhbmRsZXJzOm99KX1yZXR1cm4gbD10aGlzLHU8dC5sZW5ndGgmJnMucHVzaCh7ZWxlbTpsLGhhbmRsZXJzOnQuc2xpY2UodSl9KSxzfSxhZGRQcm9wOmZ1bmN0aW9uKHQsZSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KFMuRXZlbnQucHJvdG90eXBlLHQse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLGdldDptKGUpP2Z1bmN0aW9uKCl7aWYodGhpcy5vcmlnaW5hbEV2ZW50KXJldHVybiBlKHRoaXMub3JpZ2luYWxFdmVudCl9OmZ1bmN0aW9uKCl7aWYodGhpcy5vcmlnaW5hbEV2ZW50KXJldHVybiB0aGlzLm9yaWdpbmFsRXZlbnRbdF19LHNldDpmdW5jdGlvbihlKXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyx0LHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTplfSl9fSl9LGZpeDpmdW5jdGlvbihlKXtyZXR1cm4gZVtTLmV4cGFuZG9dP2U6bmV3IFMuRXZlbnQoZSl9LHNwZWNpYWw6e2xvYWQ6e25vQnViYmxlOiEwfSxjbGljazp7c2V0dXA6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpc3x8ZTtyZXR1cm4gcGUudGVzdCh0LnR5cGUpJiZ0LmNsaWNrJiZBKHQsXCJpbnB1dFwiKSYmQWUodCxcImNsaWNrXCIsQ2UpLCExfSx0cmlnZ2VyOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXN8fGU7cmV0dXJuIHBlLnRlc3QodC50eXBlKSYmdC5jbGljayYmQSh0LFwiaW5wdXRcIikmJkFlKHQsXCJjbGlja1wiKSwhMH0sX2RlZmF1bHQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS50YXJnZXQ7cmV0dXJuIHBlLnRlc3QodC50eXBlKSYmdC5jbGljayYmQSh0LFwiaW5wdXRcIikmJlkuZ2V0KHQsXCJjbGlja1wiKXx8QSh0LFwiYVwiKX19LGJlZm9yZXVubG9hZDp7cG9zdERpc3BhdGNoOmZ1bmN0aW9uKGUpe3ZvaWQgMCE9PWUucmVzdWx0JiZlLm9yaWdpbmFsRXZlbnQmJihlLm9yaWdpbmFsRXZlbnQucmV0dXJuVmFsdWU9ZS5yZXN1bHQpfX19fSxTLnJlbW92ZUV2ZW50PWZ1bmN0aW9uKGUsdCxuKXtlLnJlbW92ZUV2ZW50TGlzdGVuZXImJmUucmVtb3ZlRXZlbnRMaXN0ZW5lcih0LG4pfSxTLkV2ZW50PWZ1bmN0aW9uKGUsdCl7aWYoISh0aGlzIGluc3RhbmNlb2YgUy5FdmVudCkpcmV0dXJuIG5ldyBTLkV2ZW50KGUsdCk7ZSYmZS50eXBlPyh0aGlzLm9yaWdpbmFsRXZlbnQ9ZSx0aGlzLnR5cGU9ZS50eXBlLHRoaXMuaXNEZWZhdWx0UHJldmVudGVkPWUuZGVmYXVsdFByZXZlbnRlZHx8dm9pZCAwPT09ZS5kZWZhdWx0UHJldmVudGVkJiYhMT09PWUucmV0dXJuVmFsdWU/Q2U6RWUsdGhpcy50YXJnZXQ9ZS50YXJnZXQmJjM9PT1lLnRhcmdldC5ub2RlVHlwZT9lLnRhcmdldC5wYXJlbnROb2RlOmUudGFyZ2V0LHRoaXMuY3VycmVudFRhcmdldD1lLmN1cnJlbnRUYXJnZXQsdGhpcy5yZWxhdGVkVGFyZ2V0PWUucmVsYXRlZFRhcmdldCk6dGhpcy50eXBlPWUsdCYmUy5leHRlbmQodGhpcyx0KSx0aGlzLnRpbWVTdGFtcD1lJiZlLnRpbWVTdGFtcHx8RGF0ZS5ub3coKSx0aGlzW1MuZXhwYW5kb109ITB9LFMuRXZlbnQucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpTLkV2ZW50LGlzRGVmYXVsdFByZXZlbnRlZDpFZSxpc1Byb3BhZ2F0aW9uU3RvcHBlZDpFZSxpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZDpFZSxpc1NpbXVsYXRlZDohMSxwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1DZSxlJiYhdGhpcy5pc1NpbXVsYXRlZCYmZS5wcmV2ZW50RGVmYXVsdCgpfSxzdG9wUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZD1DZSxlJiYhdGhpcy5pc1NpbXVsYXRlZCYmZS5zdG9wUHJvcGFnYXRpb24oKX0sc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ9Q2UsZSYmIXRoaXMuaXNTaW11bGF0ZWQmJmUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCksdGhpcy5zdG9wUHJvcGFnYXRpb24oKX19LFMuZWFjaCh7YWx0S2V5OiEwLGJ1YmJsZXM6ITAsY2FuY2VsYWJsZTohMCxjaGFuZ2VkVG91Y2hlczohMCxjdHJsS2V5OiEwLGRldGFpbDohMCxldmVudFBoYXNlOiEwLG1ldGFLZXk6ITAscGFnZVg6ITAscGFnZVk6ITAsc2hpZnRLZXk6ITAsdmlldzohMCxcImNoYXJcIjohMCxjb2RlOiEwLGNoYXJDb2RlOiEwLGtleTohMCxrZXlDb2RlOiEwLGJ1dHRvbjohMCxidXR0b25zOiEwLGNsaWVudFg6ITAsY2xpZW50WTohMCxvZmZzZXRYOiEwLG9mZnNldFk6ITAscG9pbnRlcklkOiEwLHBvaW50ZXJUeXBlOiEwLHNjcmVlblg6ITAsc2NyZWVuWTohMCx0YXJnZXRUb3VjaGVzOiEwLHRvRWxlbWVudDohMCx0b3VjaGVzOiEwLHdoaWNoOmZ1bmN0aW9uKGUpe3ZhciB0PWUuYnV0dG9uO3JldHVybiBudWxsPT1lLndoaWNoJiZiZS50ZXN0KGUudHlwZSk/bnVsbCE9ZS5jaGFyQ29kZT9lLmNoYXJDb2RlOmUua2V5Q29kZTohZS53aGljaCYmdm9pZCAwIT09dCYmd2UudGVzdChlLnR5cGUpPzEmdD8xOjImdD8zOjQmdD8yOjA6ZS53aGljaH19LFMuZXZlbnQuYWRkUHJvcCksUy5lYWNoKHtmb2N1czpcImZvY3VzaW5cIixibHVyOlwiZm9jdXNvdXRcIn0sZnVuY3Rpb24oZSx0KXtTLmV2ZW50LnNwZWNpYWxbZV09e3NldHVwOmZ1bmN0aW9uKCl7cmV0dXJuIEFlKHRoaXMsZSxTZSksITF9LHRyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm4gQWUodGhpcyxlKSwhMH0sZGVsZWdhdGVUeXBlOnR9fSksUy5lYWNoKHttb3VzZWVudGVyOlwibW91c2VvdmVyXCIsbW91c2VsZWF2ZTpcIm1vdXNlb3V0XCIscG9pbnRlcmVudGVyOlwicG9pbnRlcm92ZXJcIixwb2ludGVybGVhdmU6XCJwb2ludGVyb3V0XCJ9LGZ1bmN0aW9uKGUsaSl7Uy5ldmVudC5zcGVjaWFsW2VdPXtkZWxlZ2F0ZVR5cGU6aSxiaW5kVHlwZTppLGhhbmRsZTpmdW5jdGlvbihlKXt2YXIgdCxuPWUucmVsYXRlZFRhcmdldCxyPWUuaGFuZGxlT2JqO3JldHVybiBuJiYobj09PXRoaXN8fFMuY29udGFpbnModGhpcyxuKSl8fChlLnR5cGU9ci5vcmlnVHlwZSx0PXIuaGFuZGxlci5hcHBseSh0aGlzLGFyZ3VtZW50cyksZS50eXBlPWkpLHR9fX0pLFMuZm4uZXh0ZW5kKHtvbjpmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4ga2UodGhpcyxlLHQsbixyKX0sb25lOmZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiBrZSh0aGlzLGUsdCxuLHIsMSl9LG9mZjpmdW5jdGlvbihlLHQsbil7dmFyIHIsaTtpZihlJiZlLnByZXZlbnREZWZhdWx0JiZlLmhhbmRsZU9iailyZXR1cm4gcj1lLmhhbmRsZU9iaixTKGUuZGVsZWdhdGVUYXJnZXQpLm9mZihyLm5hbWVzcGFjZT9yLm9yaWdUeXBlK1wiLlwiK3IubmFtZXNwYWNlOnIub3JpZ1R5cGUsci5zZWxlY3RvcixyLmhhbmRsZXIpLHRoaXM7aWYoXCJvYmplY3RcIj09dHlwZW9mIGUpe2ZvcihpIGluIGUpdGhpcy5vZmYoaSx0LGVbaV0pO3JldHVybiB0aGlzfXJldHVybiExIT09dCYmXCJmdW5jdGlvblwiIT10eXBlb2YgdHx8KG49dCx0PXZvaWQgMCksITE9PT1uJiYobj1FZSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Uy5ldmVudC5yZW1vdmUodGhpcyxlLG4sdCl9KX19KTt2YXIgTmU9LzxzY3JpcHR8PHN0eWxlfDxsaW5rL2ksRGU9L2NoZWNrZWRcXHMqKD86W149XXw9XFxzKi5jaGVja2VkLikvaSxqZT0vXlxccyo8ISg/OlxcW0NEQVRBXFxbfC0tKXwoPzpcXF1cXF18LS0pPlxccyokL2c7ZnVuY3Rpb24gcWUoZSx0KXtyZXR1cm4gQShlLFwidGFibGVcIikmJkEoMTEhPT10Lm5vZGVUeXBlP3Q6dC5maXJzdENoaWxkLFwidHJcIikmJlMoZSkuY2hpbGRyZW4oXCJ0Ym9keVwiKVswXXx8ZX1mdW5jdGlvbiBMZShlKXtyZXR1cm4gZS50eXBlPShudWxsIT09ZS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKStcIi9cIitlLnR5cGUsZX1mdW5jdGlvbiBIZShlKXtyZXR1cm5cInRydWUvXCI9PT0oZS50eXBlfHxcIlwiKS5zbGljZSgwLDUpP2UudHlwZT1lLnR5cGUuc2xpY2UoNSk6ZS5yZW1vdmVBdHRyaWJ1dGUoXCJ0eXBlXCIpLGV9ZnVuY3Rpb24gT2UoZSx0KXt2YXIgbixyLGksbyxhLHM7aWYoMT09PXQubm9kZVR5cGUpe2lmKFkuaGFzRGF0YShlKSYmKHM9WS5nZXQoZSkuZXZlbnRzKSlmb3IoaSBpbiBZLnJlbW92ZSh0LFwiaGFuZGxlIGV2ZW50c1wiKSxzKWZvcihuPTAscj1zW2ldLmxlbmd0aDtuPHI7bisrKVMuZXZlbnQuYWRkKHQsaSxzW2ldW25dKTtRLmhhc0RhdGEoZSkmJihvPVEuYWNjZXNzKGUpLGE9Uy5leHRlbmQoe30sbyksUS5zZXQodCxhKSl9fWZ1bmN0aW9uIFBlKG4scixpLG8pe3I9ZyhyKTt2YXIgZSx0LGEscyx1LGwsYz0wLGY9bi5sZW5ndGgscD1mLTEsZD1yWzBdLGg9bShkKTtpZihofHwxPGYmJlwic3RyaW5nXCI9PXR5cGVvZiBkJiYheS5jaGVja0Nsb25lJiZEZS50ZXN0KGQpKXJldHVybiBuLmVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9bi5lcShlKTtoJiYoclswXT1kLmNhbGwodGhpcyxlLHQuaHRtbCgpKSksUGUodCxyLGksbyl9KTtpZihmJiYodD0oZT14ZShyLG5bMF0ub3duZXJEb2N1bWVudCwhMSxuLG8pKS5maXJzdENoaWxkLDE9PT1lLmNoaWxkTm9kZXMubGVuZ3RoJiYoZT10KSx0fHxvKSl7Zm9yKHM9KGE9Uy5tYXAodmUoZSxcInNjcmlwdFwiKSxMZSkpLmxlbmd0aDtjPGY7YysrKXU9ZSxjIT09cCYmKHU9Uy5jbG9uZSh1LCEwLCEwKSxzJiZTLm1lcmdlKGEsdmUodSxcInNjcmlwdFwiKSkpLGkuY2FsbChuW2NdLHUsYyk7aWYocylmb3IobD1hW2EubGVuZ3RoLTFdLm93bmVyRG9jdW1lbnQsUy5tYXAoYSxIZSksYz0wO2M8cztjKyspdT1hW2NdLGhlLnRlc3QodS50eXBlfHxcIlwiKSYmIVkuYWNjZXNzKHUsXCJnbG9iYWxFdmFsXCIpJiZTLmNvbnRhaW5zKGwsdSkmJih1LnNyYyYmXCJtb2R1bGVcIiE9PSh1LnR5cGV8fFwiXCIpLnRvTG93ZXJDYXNlKCk/Uy5fZXZhbFVybCYmIXUubm9Nb2R1bGUmJlMuX2V2YWxVcmwodS5zcmMse25vbmNlOnUubm9uY2V8fHUuZ2V0QXR0cmlidXRlKFwibm9uY2VcIil9LGwpOmIodS50ZXh0Q29udGVudC5yZXBsYWNlKGplLFwiXCIpLHUsbCkpfXJldHVybiBufWZ1bmN0aW9uIFJlKGUsdCxuKXtmb3IodmFyIHIsaT10P1MuZmlsdGVyKHQsZSk6ZSxvPTA7bnVsbCE9KHI9aVtvXSk7bysrKW58fDEhPT1yLm5vZGVUeXBlfHxTLmNsZWFuRGF0YSh2ZShyKSksci5wYXJlbnROb2RlJiYobiYmaWUocikmJnllKHZlKHIsXCJzY3JpcHRcIikpLHIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyKSk7cmV0dXJuIGV9Uy5leHRlbmQoe2h0bWxQcmVmaWx0ZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LGNsb25lOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYSxzLHUsbCxjPWUuY2xvbmVOb2RlKCEwKSxmPWllKGUpO2lmKCEoeS5ub0Nsb25lQ2hlY2tlZHx8MSE9PWUubm9kZVR5cGUmJjExIT09ZS5ub2RlVHlwZXx8Uy5pc1hNTERvYyhlKSkpZm9yKGE9dmUoYykscj0wLGk9KG89dmUoZSkpLmxlbmd0aDtyPGk7cisrKXM9b1tyXSx1PWFbcl0sdm9pZCAwLFwiaW5wdXRcIj09PShsPXUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkmJnBlLnRlc3Qocy50eXBlKT91LmNoZWNrZWQ9cy5jaGVja2VkOlwiaW5wdXRcIiE9PWwmJlwidGV4dGFyZWFcIiE9PWx8fCh1LmRlZmF1bHRWYWx1ZT1zLmRlZmF1bHRWYWx1ZSk7aWYodClpZihuKWZvcihvPW98fHZlKGUpLGE9YXx8dmUoYykscj0wLGk9by5sZW5ndGg7cjxpO3IrKylPZShvW3JdLGFbcl0pO2Vsc2UgT2UoZSxjKTtyZXR1cm4gMDwoYT12ZShjLFwic2NyaXB0XCIpKS5sZW5ndGgmJnllKGEsIWYmJnZlKGUsXCJzY3JpcHRcIikpLGN9LGNsZWFuRGF0YTpmdW5jdGlvbihlKXtmb3IodmFyIHQsbixyLGk9Uy5ldmVudC5zcGVjaWFsLG89MDt2b2lkIDAhPT0obj1lW29dKTtvKyspaWYoVihuKSl7aWYodD1uW1kuZXhwYW5kb10pe2lmKHQuZXZlbnRzKWZvcihyIGluIHQuZXZlbnRzKWlbcl0/Uy5ldmVudC5yZW1vdmUobixyKTpTLnJlbW92ZUV2ZW50KG4scix0LmhhbmRsZSk7bltZLmV4cGFuZG9dPXZvaWQgMH1uW1EuZXhwYW5kb10mJihuW1EuZXhwYW5kb109dm9pZCAwKX19fSksUy5mbi5leHRlbmQoe2RldGFjaDpmdW5jdGlvbihlKXtyZXR1cm4gUmUodGhpcyxlLCEwKX0scmVtb3ZlOmZ1bmN0aW9uKGUpe3JldHVybiBSZSh0aGlzLGUpfSx0ZXh0OmZ1bmN0aW9uKGUpe3JldHVybiAkKHRoaXMsZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMD09PWU/Uy50ZXh0KHRoaXMpOnRoaXMuZW1wdHkoKS5lYWNoKGZ1bmN0aW9uKCl7MSE9PXRoaXMubm9kZVR5cGUmJjExIT09dGhpcy5ub2RlVHlwZSYmOSE9PXRoaXMubm9kZVR5cGV8fCh0aGlzLnRleHRDb250ZW50PWUpfSl9LG51bGwsZSxhcmd1bWVudHMubGVuZ3RoKX0sYXBwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIFBlKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGUpezEhPT10aGlzLm5vZGVUeXBlJiYxMSE9PXRoaXMubm9kZVR5cGUmJjkhPT10aGlzLm5vZGVUeXBlfHxxZSh0aGlzLGUpLmFwcGVuZENoaWxkKGUpfSl9LHByZXBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gUGUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciB0PXFlKHRoaXMsZSk7dC5pbnNlcnRCZWZvcmUoZSx0LmZpcnN0Q2hpbGQpfX0pfSxiZWZvcmU6ZnVuY3Rpb24oKXtyZXR1cm4gUGUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsdGhpcyl9KX0sYWZ0ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gUGUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsdGhpcy5uZXh0U2libGluZyl9KX0sZW1wdHk6ZnVuY3Rpb24oKXtmb3IodmFyIGUsdD0wO251bGwhPShlPXRoaXNbdF0pO3QrKykxPT09ZS5ub2RlVHlwZSYmKFMuY2xlYW5EYXRhKHZlKGUsITEpKSxlLnRleHRDb250ZW50PVwiXCIpO3JldHVybiB0aGlzfSxjbG9uZTpmdW5jdGlvbihlLHQpe3JldHVybiBlPW51bGwhPWUmJmUsdD1udWxsPT10P2U6dCx0aGlzLm1hcChmdW5jdGlvbigpe3JldHVybiBTLmNsb25lKHRoaXMsZSx0KX0pfSxodG1sOmZ1bmN0aW9uKGUpe3JldHVybiAkKHRoaXMsZnVuY3Rpb24oZSl7dmFyIHQ9dGhpc1swXXx8e30sbj0wLHI9dGhpcy5sZW5ndGg7aWYodm9pZCAwPT09ZSYmMT09PXQubm9kZVR5cGUpcmV0dXJuIHQuaW5uZXJIVE1MO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlJiYhTmUudGVzdChlKSYmIWdlWyhkZS5leGVjKGUpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKV0pe2U9Uy5odG1sUHJlZmlsdGVyKGUpO3RyeXtmb3IoO248cjtuKyspMT09PSh0PXRoaXNbbl18fHt9KS5ub2RlVHlwZSYmKFMuY2xlYW5EYXRhKHZlKHQsITEpKSx0LmlubmVySFRNTD1lKTt0PTB9Y2F0Y2goZSl7fX10JiZ0aGlzLmVtcHR5KCkuYXBwZW5kKGUpfSxudWxsLGUsYXJndW1lbnRzLmxlbmd0aCl9LHJlcGxhY2VXaXRoOmZ1bmN0aW9uKCl7dmFyIG49W107cmV0dXJuIFBlKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMucGFyZW50Tm9kZTtTLmluQXJyYXkodGhpcyxuKTwwJiYoUy5jbGVhbkRhdGEodmUodGhpcykpLHQmJnQucmVwbGFjZUNoaWxkKGUsdGhpcykpfSxuKX19KSxTLmVhY2goe2FwcGVuZFRvOlwiYXBwZW5kXCIscHJlcGVuZFRvOlwicHJlcGVuZFwiLGluc2VydEJlZm9yZTpcImJlZm9yZVwiLGluc2VydEFmdGVyOlwiYWZ0ZXJcIixyZXBsYWNlQWxsOlwicmVwbGFjZVdpdGhcIn0sZnVuY3Rpb24oZSxhKXtTLmZuW2VdPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdCxuPVtdLHI9UyhlKSxpPXIubGVuZ3RoLTEsbz0wO288PWk7bysrKXQ9bz09PWk/dGhpczp0aGlzLmNsb25lKCEwKSxTKHJbb10pW2FdKHQpLHUuYXBwbHkobix0LmdldCgpKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2sobil9fSk7dmFyIE1lPW5ldyBSZWdFeHAoXCJeKFwiK2VlK1wiKSg/IXB4KVthLXolXSskXCIsXCJpXCIpLEllPWZ1bmN0aW9uKGUpe3ZhciB0PWUub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztyZXR1cm4gdCYmdC5vcGVuZXJ8fCh0PUMpLHQuZ2V0Q29tcHV0ZWRTdHlsZShlKX0sV2U9ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz17fTtmb3IoaSBpbiB0KW9baV09ZS5zdHlsZVtpXSxlLnN0eWxlW2ldPXRbaV07Zm9yKGkgaW4gcj1uLmNhbGwoZSksdCllLnN0eWxlW2ldPW9baV07cmV0dXJuIHJ9LEZlPW5ldyBSZWdFeHAobmUuam9pbihcInxcIiksXCJpXCIpO2Z1bmN0aW9uIEJlKGUsdCxuKXt2YXIgcixpLG8sYSxzPWUuc3R5bGU7cmV0dXJuKG49bnx8SWUoZSkpJiYoXCJcIiE9PShhPW4uZ2V0UHJvcGVydHlWYWx1ZSh0KXx8blt0XSl8fGllKGUpfHwoYT1TLnN0eWxlKGUsdCkpLCF5LnBpeGVsQm94U3R5bGVzKCkmJk1lLnRlc3QoYSkmJkZlLnRlc3QodCkmJihyPXMud2lkdGgsaT1zLm1pbldpZHRoLG89cy5tYXhXaWR0aCxzLm1pbldpZHRoPXMubWF4V2lkdGg9cy53aWR0aD1hLGE9bi53aWR0aCxzLndpZHRoPXIscy5taW5XaWR0aD1pLHMubWF4V2lkdGg9bykpLHZvaWQgMCE9PWE/YStcIlwiOmF9ZnVuY3Rpb24gJGUoZSx0KXtyZXR1cm57Z2V0OmZ1bmN0aW9uKCl7aWYoIWUoKSlyZXR1cm4odGhpcy5nZXQ9dCkuYXBwbHkodGhpcyxhcmd1bWVudHMpO2RlbGV0ZSB0aGlzLmdldH19fSFmdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXtpZihsKXt1LnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi0xMTExMXB4O3dpZHRoOjYwcHg7bWFyZ2luLXRvcDoxcHg7cGFkZGluZzowO2JvcmRlcjowXCIsbC5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3g7b3ZlcmZsb3c6c2Nyb2xsO21hcmdpbjphdXRvO2JvcmRlcjoxcHg7cGFkZGluZzoxcHg7d2lkdGg6NjAlO3RvcDoxJVwiLHJlLmFwcGVuZENoaWxkKHUpLmFwcGVuZENoaWxkKGwpO3ZhciBlPUMuZ2V0Q29tcHV0ZWRTdHlsZShsKTtuPVwiMSVcIiE9PWUudG9wLHM9MTI9PT10KGUubWFyZ2luTGVmdCksbC5zdHlsZS5yaWdodD1cIjYwJVwiLG89MzY9PT10KGUucmlnaHQpLHI9MzY9PT10KGUud2lkdGgpLGwuc3R5bGUucG9zaXRpb249XCJhYnNvbHV0ZVwiLGk9MTI9PT10KGwub2Zmc2V0V2lkdGgvMykscmUucmVtb3ZlQ2hpbGQodSksbD1udWxsfX1mdW5jdGlvbiB0KGUpe3JldHVybiBNYXRoLnJvdW5kKHBhcnNlRmxvYXQoZSkpfXZhciBuLHIsaSxvLGEscyx1PUUuY3JlYXRlRWxlbWVudChcImRpdlwiKSxsPUUuY3JlYXRlRWxlbWVudChcImRpdlwiKTtsLnN0eWxlJiYobC5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cImNvbnRlbnQtYm94XCIsbC5jbG9uZU5vZGUoITApLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiXCIseS5jbGVhckNsb25lU3R5bGU9XCJjb250ZW50LWJveFwiPT09bC5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCxTLmV4dGVuZCh5LHtib3hTaXppbmdSZWxpYWJsZTpmdW5jdGlvbigpe3JldHVybiBlKCkscn0scGl4ZWxCb3hTdHlsZXM6ZnVuY3Rpb24oKXtyZXR1cm4gZSgpLG99LHBpeGVsUG9zaXRpb246ZnVuY3Rpb24oKXtyZXR1cm4gZSgpLG59LHJlbGlhYmxlTWFyZ2luTGVmdDpmdW5jdGlvbigpe3JldHVybiBlKCksc30sc2Nyb2xsYm94U2l6ZTpmdW5jdGlvbigpe3JldHVybiBlKCksaX0scmVsaWFibGVUckRpbWVuc2lvbnM6ZnVuY3Rpb24oKXt2YXIgZSx0LG4scjtyZXR1cm4gbnVsbD09YSYmKGU9RS5jcmVhdGVFbGVtZW50KFwidGFibGVcIiksdD1FLmNyZWF0ZUVsZW1lbnQoXCJ0clwiKSxuPUUuY3JlYXRlRWxlbWVudChcImRpdlwiKSxlLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi0xMTExMXB4XCIsdC5zdHlsZS5oZWlnaHQ9XCIxcHhcIixuLnN0eWxlLmhlaWdodD1cIjlweFwiLHJlLmFwcGVuZENoaWxkKGUpLmFwcGVuZENoaWxkKHQpLmFwcGVuZENoaWxkKG4pLHI9Qy5nZXRDb21wdXRlZFN0eWxlKHQpLGE9MzxwYXJzZUludChyLmhlaWdodCkscmUucmVtb3ZlQ2hpbGQoZSkpLGF9fSkpfSgpO3ZhciBfZT1bXCJXZWJraXRcIixcIk1velwiLFwibXNcIl0semU9RS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlLFVlPXt9O2Z1bmN0aW9uIFhlKGUpe3ZhciB0PVMuY3NzUHJvcHNbZV18fFVlW2VdO3JldHVybiB0fHwoZSBpbiB6ZT9lOlVlW2VdPWZ1bmN0aW9uKGUpe3ZhciB0PWVbMF0udG9VcHBlckNhc2UoKStlLnNsaWNlKDEpLG49X2UubGVuZ3RoO3doaWxlKG4tLSlpZigoZT1fZVtuXSt0KWluIHplKXJldHVybiBlfShlKXx8ZSl9dmFyIFZlPS9eKG5vbmV8dGFibGUoPyEtY1tlYV0pLispLyxHZT0vXi0tLyxZZT17cG9zaXRpb246XCJhYnNvbHV0ZVwiLHZpc2liaWxpdHk6XCJoaWRkZW5cIixkaXNwbGF5OlwiYmxvY2tcIn0sUWU9e2xldHRlclNwYWNpbmc6XCIwXCIsZm9udFdlaWdodDpcIjQwMFwifTtmdW5jdGlvbiBKZShlLHQsbil7dmFyIHI9dGUuZXhlYyh0KTtyZXR1cm4gcj9NYXRoLm1heCgwLHJbMl0tKG58fDApKSsoclszXXx8XCJweFwiKTp0fWZ1bmN0aW9uIEtlKGUsdCxuLHIsaSxvKXt2YXIgYT1cIndpZHRoXCI9PT10PzE6MCxzPTAsdT0wO2lmKG49PT0ocj9cImJvcmRlclwiOlwiY29udGVudFwiKSlyZXR1cm4gMDtmb3IoO2E8NDthKz0yKVwibWFyZ2luXCI9PT1uJiYodSs9Uy5jc3MoZSxuK25lW2FdLCEwLGkpKSxyPyhcImNvbnRlbnRcIj09PW4mJih1LT1TLmNzcyhlLFwicGFkZGluZ1wiK25lW2FdLCEwLGkpKSxcIm1hcmdpblwiIT09biYmKHUtPVMuY3NzKGUsXCJib3JkZXJcIituZVthXStcIldpZHRoXCIsITAsaSkpKToodSs9Uy5jc3MoZSxcInBhZGRpbmdcIituZVthXSwhMCxpKSxcInBhZGRpbmdcIiE9PW4/dSs9Uy5jc3MoZSxcImJvcmRlclwiK25lW2FdK1wiV2lkdGhcIiwhMCxpKTpzKz1TLmNzcyhlLFwiYm9yZGVyXCIrbmVbYV0rXCJXaWR0aFwiLCEwLGkpKTtyZXR1cm4hciYmMDw9byYmKHUrPU1hdGgubWF4KDAsTWF0aC5jZWlsKGVbXCJvZmZzZXRcIit0WzBdLnRvVXBwZXJDYXNlKCkrdC5zbGljZSgxKV0tby11LXMtLjUpKXx8MCksdX1mdW5jdGlvbiBaZShlLHQsbil7dmFyIHI9SWUoZSksaT0oIXkuYm94U2l6aW5nUmVsaWFibGUoKXx8bikmJlwiYm9yZGVyLWJveFwiPT09Uy5jc3MoZSxcImJveFNpemluZ1wiLCExLHIpLG89aSxhPUJlKGUsdCxyKSxzPVwib2Zmc2V0XCIrdFswXS50b1VwcGVyQ2FzZSgpK3Quc2xpY2UoMSk7aWYoTWUudGVzdChhKSl7aWYoIW4pcmV0dXJuIGE7YT1cImF1dG9cIn1yZXR1cm4oIXkuYm94U2l6aW5nUmVsaWFibGUoKSYmaXx8IXkucmVsaWFibGVUckRpbWVuc2lvbnMoKSYmQShlLFwidHJcIil8fFwiYXV0b1wiPT09YXx8IXBhcnNlRmxvYXQoYSkmJlwiaW5saW5lXCI9PT1TLmNzcyhlLFwiZGlzcGxheVwiLCExLHIpKSYmZS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCYmKGk9XCJib3JkZXItYm94XCI9PT1TLmNzcyhlLFwiYm94U2l6aW5nXCIsITEsciksKG89cyBpbiBlKSYmKGE9ZVtzXSkpLChhPXBhcnNlRmxvYXQoYSl8fDApK0tlKGUsdCxufHwoaT9cImJvcmRlclwiOlwiY29udGVudFwiKSxvLHIsYSkrXCJweFwifWZ1bmN0aW9uIGV0KGUsdCxuLHIsaSl7cmV0dXJuIG5ldyBldC5wcm90b3R5cGUuaW5pdChlLHQsbixyLGkpfVMuZXh0ZW5kKHtjc3NIb29rczp7b3BhY2l0eTp7Z2V0OmZ1bmN0aW9uKGUsdCl7aWYodCl7dmFyIG49QmUoZSxcIm9wYWNpdHlcIik7cmV0dXJuXCJcIj09PW4/XCIxXCI6bn19fX0sY3NzTnVtYmVyOnthbmltYXRpb25JdGVyYXRpb25Db3VudDohMCxjb2x1bW5Db3VudDohMCxmaWxsT3BhY2l0eTohMCxmbGV4R3JvdzohMCxmbGV4U2hyaW5rOiEwLGZvbnRXZWlnaHQ6ITAsZ3JpZEFyZWE6ITAsZ3JpZENvbHVtbjohMCxncmlkQ29sdW1uRW5kOiEwLGdyaWRDb2x1bW5TdGFydDohMCxncmlkUm93OiEwLGdyaWRSb3dFbmQ6ITAsZ3JpZFJvd1N0YXJ0OiEwLGxpbmVIZWlnaHQ6ITAsb3BhY2l0eTohMCxvcmRlcjohMCxvcnBoYW5zOiEwLHdpZG93czohMCx6SW5kZXg6ITAsem9vbTohMH0sY3NzUHJvcHM6e30sc3R5bGU6ZnVuY3Rpb24oZSx0LG4scil7aWYoZSYmMyE9PWUubm9kZVR5cGUmJjghPT1lLm5vZGVUeXBlJiZlLnN0eWxlKXt2YXIgaSxvLGEscz1YKHQpLHU9R2UudGVzdCh0KSxsPWUuc3R5bGU7aWYodXx8KHQ9WGUocykpLGE9Uy5jc3NIb29rc1t0XXx8Uy5jc3NIb29rc1tzXSx2b2lkIDA9PT1uKXJldHVybiBhJiZcImdldFwiaW4gYSYmdm9pZCAwIT09KGk9YS5nZXQoZSwhMSxyKSk/aTpsW3RdO1wic3RyaW5nXCI9PT0obz10eXBlb2YgbikmJihpPXRlLmV4ZWMobikpJiZpWzFdJiYobj1zZShlLHQsaSksbz1cIm51bWJlclwiKSxudWxsIT1uJiZuPT1uJiYoXCJudW1iZXJcIiE9PW98fHV8fChuKz1pJiZpWzNdfHwoUy5jc3NOdW1iZXJbc10/XCJcIjpcInB4XCIpKSx5LmNsZWFyQ2xvbmVTdHlsZXx8XCJcIiE9PW58fDAhPT10LmluZGV4T2YoXCJiYWNrZ3JvdW5kXCIpfHwobFt0XT1cImluaGVyaXRcIiksYSYmXCJzZXRcImluIGEmJnZvaWQgMD09PShuPWEuc2V0KGUsbixyKSl8fCh1P2wuc2V0UHJvcGVydHkodCxuKTpsW3RdPW4pKX19LGNzczpmdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGEscz1YKHQpO3JldHVybiBHZS50ZXN0KHQpfHwodD1YZShzKSksKGE9Uy5jc3NIb29rc1t0XXx8Uy5jc3NIb29rc1tzXSkmJlwiZ2V0XCJpbiBhJiYoaT1hLmdldChlLCEwLG4pKSx2b2lkIDA9PT1pJiYoaT1CZShlLHQscikpLFwibm9ybWFsXCI9PT1pJiZ0IGluIFFlJiYoaT1RZVt0XSksXCJcIj09PW58fG4/KG89cGFyc2VGbG9hdChpKSwhMD09PW58fGlzRmluaXRlKG8pP298fDA6aSk6aX19KSxTLmVhY2goW1wiaGVpZ2h0XCIsXCJ3aWR0aFwiXSxmdW5jdGlvbihlLHUpe1MuY3NzSG9va3NbdV09e2dldDpmdW5jdGlvbihlLHQsbil7aWYodClyZXR1cm4hVmUudGVzdChTLmNzcyhlLFwiZGlzcGxheVwiKSl8fGUuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgmJmUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg/WmUoZSx1LG4pOldlKGUsWWUsZnVuY3Rpb24oKXtyZXR1cm4gWmUoZSx1LG4pfSl9LHNldDpmdW5jdGlvbihlLHQsbil7dmFyIHIsaT1JZShlKSxvPSF5LnNjcm9sbGJveFNpemUoKSYmXCJhYnNvbHV0ZVwiPT09aS5wb3NpdGlvbixhPShvfHxuKSYmXCJib3JkZXItYm94XCI9PT1TLmNzcyhlLFwiYm94U2l6aW5nXCIsITEsaSkscz1uP0tlKGUsdSxuLGEsaSk6MDtyZXR1cm4gYSYmbyYmKHMtPU1hdGguY2VpbChlW1wib2Zmc2V0XCIrdVswXS50b1VwcGVyQ2FzZSgpK3Uuc2xpY2UoMSldLXBhcnNlRmxvYXQoaVt1XSktS2UoZSx1LFwiYm9yZGVyXCIsITEsaSktLjUpKSxzJiYocj10ZS5leGVjKHQpKSYmXCJweFwiIT09KHJbM118fFwicHhcIikmJihlLnN0eWxlW3VdPXQsdD1TLmNzcyhlLHUpKSxKZSgwLHQscyl9fX0pLFMuY3NzSG9va3MubWFyZ2luTGVmdD0kZSh5LnJlbGlhYmxlTWFyZ2luTGVmdCxmdW5jdGlvbihlLHQpe2lmKHQpcmV0dXJuKHBhcnNlRmxvYXQoQmUoZSxcIm1hcmdpbkxlZnRcIikpfHxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQtV2UoZSx7bWFyZ2luTGVmdDowfSxmdW5jdGlvbigpe3JldHVybiBlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnR9KSkrXCJweFwifSksUy5lYWNoKHttYXJnaW46XCJcIixwYWRkaW5nOlwiXCIsYm9yZGVyOlwiV2lkdGhcIn0sZnVuY3Rpb24oaSxvKXtTLmNzc0hvb2tzW2krb109e2V4cGFuZDpmdW5jdGlvbihlKXtmb3IodmFyIHQ9MCxuPXt9LHI9XCJzdHJpbmdcIj09dHlwZW9mIGU/ZS5zcGxpdChcIiBcIik6W2VdO3Q8NDt0KyspbltpK25lW3RdK29dPXJbdF18fHJbdC0yXXx8clswXTtyZXR1cm4gbn19LFwibWFyZ2luXCIhPT1pJiYoUy5jc3NIb29rc1tpK29dLnNldD1KZSl9KSxTLmZuLmV4dGVuZCh7Y3NzOmZ1bmN0aW9uKGUsdCl7cmV0dXJuICQodGhpcyxmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPXt9LGE9MDtpZihBcnJheS5pc0FycmF5KHQpKXtmb3Iocj1JZShlKSxpPXQubGVuZ3RoO2E8aTthKyspb1t0W2FdXT1TLmNzcyhlLHRbYV0sITEscik7cmV0dXJuIG99cmV0dXJuIHZvaWQgMCE9PW4/Uy5zdHlsZShlLHQsbik6Uy5jc3MoZSx0KX0sZSx0LDE8YXJndW1lbnRzLmxlbmd0aCl9fSksKChTLlR3ZWVuPWV0KS5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOmV0LGluaXQ6ZnVuY3Rpb24oZSx0LG4scixpLG8pe3RoaXMuZWxlbT1lLHRoaXMucHJvcD1uLHRoaXMuZWFzaW5nPWl8fFMuZWFzaW5nLl9kZWZhdWx0LHRoaXMub3B0aW9ucz10LHRoaXMuc3RhcnQ9dGhpcy5ub3c9dGhpcy5jdXIoKSx0aGlzLmVuZD1yLHRoaXMudW5pdD1vfHwoUy5jc3NOdW1iZXJbbl0/XCJcIjpcInB4XCIpfSxjdXI6ZnVuY3Rpb24oKXt2YXIgZT1ldC5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gZSYmZS5nZXQ/ZS5nZXQodGhpcyk6ZXQucHJvcEhvb2tzLl9kZWZhdWx0LmdldCh0aGlzKX0scnVuOmZ1bmN0aW9uKGUpe3ZhciB0LG49ZXQucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIHRoaXMub3B0aW9ucy5kdXJhdGlvbj90aGlzLnBvcz10PVMuZWFzaW5nW3RoaXMuZWFzaW5nXShlLHRoaXMub3B0aW9ucy5kdXJhdGlvbiplLDAsMSx0aGlzLm9wdGlvbnMuZHVyYXRpb24pOnRoaXMucG9zPXQ9ZSx0aGlzLm5vdz0odGhpcy5lbmQtdGhpcy5zdGFydCkqdCt0aGlzLnN0YXJ0LHRoaXMub3B0aW9ucy5zdGVwJiZ0aGlzLm9wdGlvbnMuc3RlcC5jYWxsKHRoaXMuZWxlbSx0aGlzLm5vdyx0aGlzKSxuJiZuLnNldD9uLnNldCh0aGlzKTpldC5wcm9wSG9va3MuX2RlZmF1bHQuc2V0KHRoaXMpLHRoaXN9fSkuaW5pdC5wcm90b3R5cGU9ZXQucHJvdG90eXBlLChldC5wcm9wSG9va3M9e19kZWZhdWx0OntnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ7cmV0dXJuIDEhPT1lLmVsZW0ubm9kZVR5cGV8fG51bGwhPWUuZWxlbVtlLnByb3BdJiZudWxsPT1lLmVsZW0uc3R5bGVbZS5wcm9wXT9lLmVsZW1bZS5wcm9wXToodD1TLmNzcyhlLmVsZW0sZS5wcm9wLFwiXCIpKSYmXCJhdXRvXCIhPT10P3Q6MH0sc2V0OmZ1bmN0aW9uKGUpe1MuZnguc3RlcFtlLnByb3BdP1MuZnguc3RlcFtlLnByb3BdKGUpOjEhPT1lLmVsZW0ubm9kZVR5cGV8fCFTLmNzc0hvb2tzW2UucHJvcF0mJm51bGw9PWUuZWxlbS5zdHlsZVtYZShlLnByb3ApXT9lLmVsZW1bZS5wcm9wXT1lLm5vdzpTLnN0eWxlKGUuZWxlbSxlLnByb3AsZS5ub3crZS51bml0KX19fSkuc2Nyb2xsVG9wPWV0LnByb3BIb29rcy5zY3JvbGxMZWZ0PXtzZXQ6ZnVuY3Rpb24oZSl7ZS5lbGVtLm5vZGVUeXBlJiZlLmVsZW0ucGFyZW50Tm9kZSYmKGUuZWxlbVtlLnByb3BdPWUubm93KX19LFMuZWFzaW5nPXtsaW5lYXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LHN3aW5nOmZ1bmN0aW9uKGUpe3JldHVybi41LU1hdGguY29zKGUqTWF0aC5QSSkvMn0sX2RlZmF1bHQ6XCJzd2luZ1wifSxTLmZ4PWV0LnByb3RvdHlwZS5pbml0LFMuZnguc3RlcD17fTt2YXIgdHQsbnQscnQsaXQsb3Q9L14oPzp0b2dnbGV8c2hvd3xoaWRlKSQvLGF0PS9xdWV1ZUhvb2tzJC87ZnVuY3Rpb24gc3QoKXtudCYmKCExPT09RS5oaWRkZW4mJkMucmVxdWVzdEFuaW1hdGlvbkZyYW1lP0MucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0KTpDLnNldFRpbWVvdXQoc3QsUy5meC5pbnRlcnZhbCksUy5meC50aWNrKCkpfWZ1bmN0aW9uIHV0KCl7cmV0dXJuIEMuc2V0VGltZW91dChmdW5jdGlvbigpe3R0PXZvaWQgMH0pLHR0PURhdGUubm93KCl9ZnVuY3Rpb24gbHQoZSx0KXt2YXIgbixyPTAsaT17aGVpZ2h0OmV9O2Zvcih0PXQ/MTowO3I8NDtyKz0yLXQpaVtcIm1hcmdpblwiKyhuPW5lW3JdKV09aVtcInBhZGRpbmdcIituXT1lO3JldHVybiB0JiYoaS5vcGFjaXR5PWkud2lkdGg9ZSksaX1mdW5jdGlvbiBjdChlLHQsbil7Zm9yKHZhciByLGk9KGZ0LnR3ZWVuZXJzW3RdfHxbXSkuY29uY2F0KGZ0LnR3ZWVuZXJzW1wiKlwiXSksbz0wLGE9aS5sZW5ndGg7bzxhO28rKylpZihyPWlbb10uY2FsbChuLHQsZSkpcmV0dXJuIHJ9ZnVuY3Rpb24gZnQobyxlLHQpe3ZhciBuLGEscj0wLGk9ZnQucHJlZmlsdGVycy5sZW5ndGgscz1TLkRlZmVycmVkKCkuYWx3YXlzKGZ1bmN0aW9uKCl7ZGVsZXRlIHUuZWxlbX0pLHU9ZnVuY3Rpb24oKXtpZihhKXJldHVybiExO2Zvcih2YXIgZT10dHx8dXQoKSx0PU1hdGgubWF4KDAsbC5zdGFydFRpbWUrbC5kdXJhdGlvbi1lKSxuPTEtKHQvbC5kdXJhdGlvbnx8MCkscj0wLGk9bC50d2VlbnMubGVuZ3RoO3I8aTtyKyspbC50d2VlbnNbcl0ucnVuKG4pO3JldHVybiBzLm5vdGlmeVdpdGgobyxbbCxuLHRdKSxuPDEmJmk/dDooaXx8cy5ub3RpZnlXaXRoKG8sW2wsMSwwXSkscy5yZXNvbHZlV2l0aChvLFtsXSksITEpfSxsPXMucHJvbWlzZSh7ZWxlbTpvLHByb3BzOlMuZXh0ZW5kKHt9LGUpLG9wdHM6Uy5leHRlbmQoITAse3NwZWNpYWxFYXNpbmc6e30sZWFzaW5nOlMuZWFzaW5nLl9kZWZhdWx0fSx0KSxvcmlnaW5hbFByb3BlcnRpZXM6ZSxvcmlnaW5hbE9wdGlvbnM6dCxzdGFydFRpbWU6dHR8fHV0KCksZHVyYXRpb246dC5kdXJhdGlvbix0d2VlbnM6W10sY3JlYXRlVHdlZW46ZnVuY3Rpb24oZSx0KXt2YXIgbj1TLlR3ZWVuKG8sbC5vcHRzLGUsdCxsLm9wdHMuc3BlY2lhbEVhc2luZ1tlXXx8bC5vcHRzLmVhc2luZyk7cmV0dXJuIGwudHdlZW5zLnB1c2gobiksbn0sc3RvcDpmdW5jdGlvbihlKXt2YXIgdD0wLG49ZT9sLnR3ZWVucy5sZW5ndGg6MDtpZihhKXJldHVybiB0aGlzO2ZvcihhPSEwO3Q8bjt0KyspbC50d2VlbnNbdF0ucnVuKDEpO3JldHVybiBlPyhzLm5vdGlmeVdpdGgobyxbbCwxLDBdKSxzLnJlc29sdmVXaXRoKG8sW2wsZV0pKTpzLnJlamVjdFdpdGgobyxbbCxlXSksdGhpc319KSxjPWwucHJvcHM7Zm9yKCFmdW5jdGlvbihlLHQpe3ZhciBuLHIsaSxvLGE7Zm9yKG4gaW4gZSlpZihpPXRbcj1YKG4pXSxvPWVbbl0sQXJyYXkuaXNBcnJheShvKSYmKGk9b1sxXSxvPWVbbl09b1swXSksbiE9PXImJihlW3JdPW8sZGVsZXRlIGVbbl0pLChhPVMuY3NzSG9va3Nbcl0pJiZcImV4cGFuZFwiaW4gYSlmb3IobiBpbiBvPWEuZXhwYW5kKG8pLGRlbGV0ZSBlW3JdLG8pbiBpbiBlfHwoZVtuXT1vW25dLHRbbl09aSk7ZWxzZSB0W3JdPWl9KGMsbC5vcHRzLnNwZWNpYWxFYXNpbmcpO3I8aTtyKyspaWYobj1mdC5wcmVmaWx0ZXJzW3JdLmNhbGwobCxvLGMsbC5vcHRzKSlyZXR1cm4gbShuLnN0b3ApJiYoUy5fcXVldWVIb29rcyhsLmVsZW0sbC5vcHRzLnF1ZXVlKS5zdG9wPW4uc3RvcC5iaW5kKG4pKSxuO3JldHVybiBTLm1hcChjLGN0LGwpLG0obC5vcHRzLnN0YXJ0KSYmbC5vcHRzLnN0YXJ0LmNhbGwobyxsKSxsLnByb2dyZXNzKGwub3B0cy5wcm9ncmVzcykuZG9uZShsLm9wdHMuZG9uZSxsLm9wdHMuY29tcGxldGUpLmZhaWwobC5vcHRzLmZhaWwpLmFsd2F5cyhsLm9wdHMuYWx3YXlzKSxTLmZ4LnRpbWVyKFMuZXh0ZW5kKHUse2VsZW06byxhbmltOmwscXVldWU6bC5vcHRzLnF1ZXVlfSkpLGx9Uy5BbmltYXRpb249Uy5leHRlbmQoZnQse3R3ZWVuZXJzOntcIipcIjpbZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzLmNyZWF0ZVR3ZWVuKGUsdCk7cmV0dXJuIHNlKG4uZWxlbSxlLHRlLmV4ZWModCksbiksbn1dfSx0d2VlbmVyOmZ1bmN0aW9uKGUsdCl7bShlKT8odD1lLGU9W1wiKlwiXSk6ZT1lLm1hdGNoKFApO2Zvcih2YXIgbixyPTAsaT1lLmxlbmd0aDtyPGk7cisrKW49ZVtyXSxmdC50d2VlbmVyc1tuXT1mdC50d2VlbmVyc1tuXXx8W10sZnQudHdlZW5lcnNbbl0udW5zaGlmdCh0KX0scHJlZmlsdGVyczpbZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhLHMsdSxsLGMsZj1cIndpZHRoXCJpbiB0fHxcImhlaWdodFwiaW4gdCxwPXRoaXMsZD17fSxoPWUuc3R5bGUsZz1lLm5vZGVUeXBlJiZhZShlKSx2PVkuZ2V0KGUsXCJmeHNob3dcIik7Zm9yKHIgaW4gbi5xdWV1ZXx8KG51bGw9PShhPVMuX3F1ZXVlSG9va3MoZSxcImZ4XCIpKS51bnF1ZXVlZCYmKGEudW5xdWV1ZWQ9MCxzPWEuZW1wdHkuZmlyZSxhLmVtcHR5LmZpcmU9ZnVuY3Rpb24oKXthLnVucXVldWVkfHxzKCl9KSxhLnVucXVldWVkKysscC5hbHdheXMoZnVuY3Rpb24oKXtwLmFsd2F5cyhmdW5jdGlvbigpe2EudW5xdWV1ZWQtLSxTLnF1ZXVlKGUsXCJmeFwiKS5sZW5ndGh8fGEuZW1wdHkuZmlyZSgpfSl9KSksdClpZihpPXRbcl0sb3QudGVzdChpKSl7aWYoZGVsZXRlIHRbcl0sbz1vfHxcInRvZ2dsZVwiPT09aSxpPT09KGc/XCJoaWRlXCI6XCJzaG93XCIpKXtpZihcInNob3dcIiE9PWl8fCF2fHx2b2lkIDA9PT12W3JdKWNvbnRpbnVlO2c9ITB9ZFtyXT12JiZ2W3JdfHxTLnN0eWxlKGUscil9aWYoKHU9IVMuaXNFbXB0eU9iamVjdCh0KSl8fCFTLmlzRW1wdHlPYmplY3QoZCkpZm9yKHIgaW4gZiYmMT09PWUubm9kZVR5cGUmJihuLm92ZXJmbG93PVtoLm92ZXJmbG93LGgub3ZlcmZsb3dYLGgub3ZlcmZsb3dZXSxudWxsPT0obD12JiZ2LmRpc3BsYXkpJiYobD1ZLmdldChlLFwiZGlzcGxheVwiKSksXCJub25lXCI9PT0oYz1TLmNzcyhlLFwiZGlzcGxheVwiKSkmJihsP2M9bDoobGUoW2VdLCEwKSxsPWUuc3R5bGUuZGlzcGxheXx8bCxjPVMuY3NzKGUsXCJkaXNwbGF5XCIpLGxlKFtlXSkpKSwoXCJpbmxpbmVcIj09PWN8fFwiaW5saW5lLWJsb2NrXCI9PT1jJiZudWxsIT1sKSYmXCJub25lXCI9PT1TLmNzcyhlLFwiZmxvYXRcIikmJih1fHwocC5kb25lKGZ1bmN0aW9uKCl7aC5kaXNwbGF5PWx9KSxudWxsPT1sJiYoYz1oLmRpc3BsYXksbD1cIm5vbmVcIj09PWM/XCJcIjpjKSksaC5kaXNwbGF5PVwiaW5saW5lLWJsb2NrXCIpKSxuLm92ZXJmbG93JiYoaC5vdmVyZmxvdz1cImhpZGRlblwiLHAuYWx3YXlzKGZ1bmN0aW9uKCl7aC5vdmVyZmxvdz1uLm92ZXJmbG93WzBdLGgub3ZlcmZsb3dYPW4ub3ZlcmZsb3dbMV0saC5vdmVyZmxvd1k9bi5vdmVyZmxvd1syXX0pKSx1PSExLGQpdXx8KHY/XCJoaWRkZW5cImluIHYmJihnPXYuaGlkZGVuKTp2PVkuYWNjZXNzKGUsXCJmeHNob3dcIix7ZGlzcGxheTpsfSksbyYmKHYuaGlkZGVuPSFnKSxnJiZsZShbZV0sITApLHAuZG9uZShmdW5jdGlvbigpe2ZvcihyIGluIGd8fGxlKFtlXSksWS5yZW1vdmUoZSxcImZ4c2hvd1wiKSxkKVMuc3R5bGUoZSxyLGRbcl0pfSkpLHU9Y3QoZz92W3JdOjAscixwKSxyIGluIHZ8fCh2W3JdPXUuc3RhcnQsZyYmKHUuZW5kPXUuc3RhcnQsdS5zdGFydD0wKSl9XSxwcmVmaWx0ZXI6ZnVuY3Rpb24oZSx0KXt0P2Z0LnByZWZpbHRlcnMudW5zaGlmdChlKTpmdC5wcmVmaWx0ZXJzLnB1c2goZSl9fSksUy5zcGVlZD1mdW5jdGlvbihlLHQsbil7dmFyIHI9ZSYmXCJvYmplY3RcIj09dHlwZW9mIGU/Uy5leHRlbmQoe30sZSk6e2NvbXBsZXRlOm58fCFuJiZ0fHxtKGUpJiZlLGR1cmF0aW9uOmUsZWFzaW5nOm4mJnR8fHQmJiFtKHQpJiZ0fTtyZXR1cm4gUy5meC5vZmY/ci5kdXJhdGlvbj0wOlwibnVtYmVyXCIhPXR5cGVvZiByLmR1cmF0aW9uJiYoci5kdXJhdGlvbiBpbiBTLmZ4LnNwZWVkcz9yLmR1cmF0aW9uPVMuZnguc3BlZWRzW3IuZHVyYXRpb25dOnIuZHVyYXRpb249Uy5meC5zcGVlZHMuX2RlZmF1bHQpLG51bGwhPXIucXVldWUmJiEwIT09ci5xdWV1ZXx8KHIucXVldWU9XCJmeFwiKSxyLm9sZD1yLmNvbXBsZXRlLHIuY29tcGxldGU9ZnVuY3Rpb24oKXttKHIub2xkKSYmci5vbGQuY2FsbCh0aGlzKSxyLnF1ZXVlJiZTLmRlcXVldWUodGhpcyxyLnF1ZXVlKX0scn0sUy5mbi5leHRlbmQoe2ZhZGVUbzpmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gdGhpcy5maWx0ZXIoYWUpLmNzcyhcIm9wYWNpdHlcIiwwKS5zaG93KCkuZW5kKCkuYW5pbWF0ZSh7b3BhY2l0eTp0fSxlLG4scil9LGFuaW1hdGU6ZnVuY3Rpb24odCxlLG4scil7dmFyIGk9Uy5pc0VtcHR5T2JqZWN0KHQpLG89Uy5zcGVlZChlLG4sciksYT1mdW5jdGlvbigpe3ZhciBlPWZ0KHRoaXMsUy5leHRlbmQoe30sdCksbyk7KGl8fFkuZ2V0KHRoaXMsXCJmaW5pc2hcIikpJiZlLnN0b3AoITApfTtyZXR1cm4gYS5maW5pc2g9YSxpfHwhMT09PW8ucXVldWU/dGhpcy5lYWNoKGEpOnRoaXMucXVldWUoby5xdWV1ZSxhKX0sc3RvcDpmdW5jdGlvbihpLGUsbyl7dmFyIGE9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5zdG9wO2RlbGV0ZSBlLnN0b3AsdChvKX07cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGkmJihvPWUsZT1pLGk9dm9pZCAwKSxlJiZ0aGlzLnF1ZXVlKGl8fFwiZnhcIixbXSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9ITAsdD1udWxsIT1pJiZpK1wicXVldWVIb29rc1wiLG49Uy50aW1lcnMscj1ZLmdldCh0aGlzKTtpZih0KXJbdF0mJnJbdF0uc3RvcCYmYShyW3RdKTtlbHNlIGZvcih0IGluIHIpclt0XSYmclt0XS5zdG9wJiZhdC50ZXN0KHQpJiZhKHJbdF0pO2Zvcih0PW4ubGVuZ3RoO3QtLTspblt0XS5lbGVtIT09dGhpc3x8bnVsbCE9aSYmblt0XS5xdWV1ZSE9PWl8fChuW3RdLmFuaW0uc3RvcChvKSxlPSExLG4uc3BsaWNlKHQsMSkpOyFlJiZvfHxTLmRlcXVldWUodGhpcyxpKX0pfSxmaW5pc2g6ZnVuY3Rpb24oYSl7cmV0dXJuITEhPT1hJiYoYT1hfHxcImZ4XCIpLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlLHQ9WS5nZXQodGhpcyksbj10W2ErXCJxdWV1ZVwiXSxyPXRbYStcInF1ZXVlSG9va3NcIl0saT1TLnRpbWVycyxvPW4/bi5sZW5ndGg6MDtmb3IodC5maW5pc2g9ITAsUy5xdWV1ZSh0aGlzLGEsW10pLHImJnIuc3RvcCYmci5zdG9wLmNhbGwodGhpcywhMCksZT1pLmxlbmd0aDtlLS07KWlbZV0uZWxlbT09PXRoaXMmJmlbZV0ucXVldWU9PT1hJiYoaVtlXS5hbmltLnN0b3AoITApLGkuc3BsaWNlKGUsMSkpO2ZvcihlPTA7ZTxvO2UrKyluW2VdJiZuW2VdLmZpbmlzaCYmbltlXS5maW5pc2guY2FsbCh0aGlzKTtkZWxldGUgdC5maW5pc2h9KX19KSxTLmVhY2goW1widG9nZ2xlXCIsXCJzaG93XCIsXCJoaWRlXCJdLGZ1bmN0aW9uKGUscil7dmFyIGk9Uy5mbltyXTtTLmZuW3JdPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gbnVsbD09ZXx8XCJib29sZWFuXCI9PXR5cGVvZiBlP2kuYXBwbHkodGhpcyxhcmd1bWVudHMpOnRoaXMuYW5pbWF0ZShsdChyLCEwKSxlLHQsbil9fSksUy5lYWNoKHtzbGlkZURvd246bHQoXCJzaG93XCIpLHNsaWRlVXA6bHQoXCJoaWRlXCIpLHNsaWRlVG9nZ2xlOmx0KFwidG9nZ2xlXCIpLGZhZGVJbjp7b3BhY2l0eTpcInNob3dcIn0sZmFkZU91dDp7b3BhY2l0eTpcImhpZGVcIn0sZmFkZVRvZ2dsZTp7b3BhY2l0eTpcInRvZ2dsZVwifX0sZnVuY3Rpb24oZSxyKXtTLmZuW2VdPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdGhpcy5hbmltYXRlKHIsZSx0LG4pfX0pLFMudGltZXJzPVtdLFMuZngudGljaz1mdW5jdGlvbigpe3ZhciBlLHQ9MCxuPVMudGltZXJzO2Zvcih0dD1EYXRlLm5vdygpO3Q8bi5sZW5ndGg7dCsrKShlPW5bdF0pKCl8fG5bdF0hPT1lfHxuLnNwbGljZSh0LS0sMSk7bi5sZW5ndGh8fFMuZnguc3RvcCgpLHR0PXZvaWQgMH0sUy5meC50aW1lcj1mdW5jdGlvbihlKXtTLnRpbWVycy5wdXNoKGUpLFMuZnguc3RhcnQoKX0sUy5meC5pbnRlcnZhbD0xMyxTLmZ4LnN0YXJ0PWZ1bmN0aW9uKCl7bnR8fChudD0hMCxzdCgpKX0sUy5meC5zdG9wPWZ1bmN0aW9uKCl7bnQ9bnVsbH0sUy5meC5zcGVlZHM9e3Nsb3c6NjAwLGZhc3Q6MjAwLF9kZWZhdWx0OjQwMH0sUy5mbi5kZWxheT1mdW5jdGlvbihyLGUpe3JldHVybiByPVMuZngmJlMuZnguc3BlZWRzW3JdfHxyLGU9ZXx8XCJmeFwiLHRoaXMucXVldWUoZSxmdW5jdGlvbihlLHQpe3ZhciBuPUMuc2V0VGltZW91dChlLHIpO3Quc3RvcD1mdW5jdGlvbigpe0MuY2xlYXJUaW1lb3V0KG4pfX0pfSxydD1FLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxpdD1FLmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIikuYXBwZW5kQ2hpbGQoRS5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpKSxydC50eXBlPVwiY2hlY2tib3hcIix5LmNoZWNrT249XCJcIiE9PXJ0LnZhbHVlLHkub3B0U2VsZWN0ZWQ9aXQuc2VsZWN0ZWQsKHJ0PUUuY3JlYXRlRWxlbWVudChcImlucHV0XCIpKS52YWx1ZT1cInRcIixydC50eXBlPVwicmFkaW9cIix5LnJhZGlvVmFsdWU9XCJ0XCI9PT1ydC52YWx1ZTt2YXIgcHQsZHQ9Uy5leHByLmF0dHJIYW5kbGU7Uy5mbi5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gJCh0aGlzLFMuYXR0cixlLHQsMTxhcmd1bWVudHMubGVuZ3RoKX0scmVtb3ZlQXR0cjpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Uy5yZW1vdmVBdHRyKHRoaXMsZSl9KX19KSxTLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPWUubm9kZVR5cGU7aWYoMyE9PW8mJjghPT1vJiYyIT09bylyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgZS5nZXRBdHRyaWJ1dGU/Uy5wcm9wKGUsdCxuKTooMT09PW8mJlMuaXNYTUxEb2MoZSl8fChpPVMuYXR0ckhvb2tzW3QudG9Mb3dlckNhc2UoKV18fChTLmV4cHIubWF0Y2guYm9vbC50ZXN0KHQpP3B0OnZvaWQgMCkpLHZvaWQgMCE9PW4/bnVsbD09PW4/dm9pZCBTLnJlbW92ZUF0dHIoZSx0KTppJiZcInNldFwiaW4gaSYmdm9pZCAwIT09KHI9aS5zZXQoZSxuLHQpKT9yOihlLnNldEF0dHJpYnV0ZSh0LG4rXCJcIiksbik6aSYmXCJnZXRcImluIGkmJm51bGwhPT0ocj1pLmdldChlLHQpKT9yOm51bGw9PShyPVMuZmluZC5hdHRyKGUsdCkpP3ZvaWQgMDpyKX0sYXR0ckhvb2tzOnt0eXBlOntzZXQ6ZnVuY3Rpb24oZSx0KXtpZigheS5yYWRpb1ZhbHVlJiZcInJhZGlvXCI9PT10JiZBKGUsXCJpbnB1dFwiKSl7dmFyIG49ZS52YWx1ZTtyZXR1cm4gZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsdCksbiYmKGUudmFsdWU9biksdH19fX0scmVtb3ZlQXR0cjpmdW5jdGlvbihlLHQpe3ZhciBuLHI9MCxpPXQmJnQubWF0Y2goUCk7aWYoaSYmMT09PWUubm9kZVR5cGUpd2hpbGUobj1pW3IrK10pZS5yZW1vdmVBdHRyaWJ1dGUobil9fSkscHQ9e3NldDpmdW5jdGlvbihlLHQsbil7cmV0dXJuITE9PT10P1MucmVtb3ZlQXR0cihlLG4pOmUuc2V0QXR0cmlidXRlKG4sbiksbn19LFMuZWFjaChTLmV4cHIubWF0Y2guYm9vbC5zb3VyY2UubWF0Y2goL1xcdysvZyksZnVuY3Rpb24oZSx0KXt2YXIgYT1kdFt0XXx8Uy5maW5kLmF0dHI7ZHRbdF09ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz10LnRvTG93ZXJDYXNlKCk7cmV0dXJuIG58fChpPWR0W29dLGR0W29dPXIscj1udWxsIT1hKGUsdCxuKT9vOm51bGwsZHRbb109aSkscn19KTt2YXIgaHQ9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxndD0vXig/OmF8YXJlYSkkL2k7ZnVuY3Rpb24gdnQoZSl7cmV0dXJuKGUubWF0Y2goUCl8fFtdKS5qb2luKFwiIFwiKX1mdW5jdGlvbiB5dChlKXtyZXR1cm4gZS5nZXRBdHRyaWJ1dGUmJmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCJ9ZnVuY3Rpb24gbXQoZSl7cmV0dXJuIEFycmF5LmlzQXJyYXkoZSk/ZTpcInN0cmluZ1wiPT10eXBlb2YgZSYmZS5tYXRjaChQKXx8W119Uy5mbi5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gJCh0aGlzLFMucHJvcCxlLHQsMTxhcmd1bWVudHMubGVuZ3RoKX0scmVtb3ZlUHJvcDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ZGVsZXRlIHRoaXNbUy5wcm9wRml4W2VdfHxlXX0pfX0pLFMuZXh0ZW5kKHtwcm9wOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89ZS5ub2RlVHlwZTtpZigzIT09byYmOCE9PW8mJjIhPT1vKXJldHVybiAxPT09byYmUy5pc1hNTERvYyhlKXx8KHQ9Uy5wcm9wRml4W3RdfHx0LGk9Uy5wcm9wSG9va3NbdF0pLHZvaWQgMCE9PW4/aSYmXCJzZXRcImluIGkmJnZvaWQgMCE9PShyPWkuc2V0KGUsbix0KSk/cjplW3RdPW46aSYmXCJnZXRcImluIGkmJm51bGwhPT0ocj1pLmdldChlLHQpKT9yOmVbdF19LHByb3BIb29rczp7dGFiSW5kZXg6e2dldDpmdW5jdGlvbihlKXt2YXIgdD1TLmZpbmQuYXR0cihlLFwidGFiaW5kZXhcIik7cmV0dXJuIHQ/cGFyc2VJbnQodCwxMCk6aHQudGVzdChlLm5vZGVOYW1lKXx8Z3QudGVzdChlLm5vZGVOYW1lKSYmZS5ocmVmPzA6LTF9fX0scHJvcEZpeDp7XCJmb3JcIjpcImh0bWxGb3JcIixcImNsYXNzXCI6XCJjbGFzc05hbWVcIn19KSx5Lm9wdFNlbGVjdGVkfHwoUy5wcm9wSG9va3Muc2VsZWN0ZWQ9e2dldDpmdW5jdGlvbihlKXt2YXIgdD1lLnBhcmVudE5vZGU7cmV0dXJuIHQmJnQucGFyZW50Tm9kZSYmdC5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsbnVsbH0sc2V0OmZ1bmN0aW9uKGUpe3ZhciB0PWUucGFyZW50Tm9kZTt0JiYodC5zZWxlY3RlZEluZGV4LHQucGFyZW50Tm9kZSYmdC5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgpfX0pLFMuZWFjaChbXCJ0YWJJbmRleFwiLFwicmVhZE9ubHlcIixcIm1heExlbmd0aFwiLFwiY2VsbFNwYWNpbmdcIixcImNlbGxQYWRkaW5nXCIsXCJyb3dTcGFuXCIsXCJjb2xTcGFuXCIsXCJ1c2VNYXBcIixcImZyYW1lQm9yZGVyXCIsXCJjb250ZW50RWRpdGFibGVcIl0sZnVuY3Rpb24oKXtTLnByb3BGaXhbdGhpcy50b0xvd2VyQ2FzZSgpXT10aGlzfSksUy5mbi5leHRlbmQoe2FkZENsYXNzOmZ1bmN0aW9uKHQpe3ZhciBlLG4scixpLG8sYSxzLHU9MDtpZihtKHQpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oZSl7Uyh0aGlzKS5hZGRDbGFzcyh0LmNhbGwodGhpcyxlLHl0KHRoaXMpKSl9KTtpZigoZT1tdCh0KSkubGVuZ3RoKXdoaWxlKG49dGhpc1t1KytdKWlmKGk9eXQobikscj0xPT09bi5ub2RlVHlwZSYmXCIgXCIrdnQoaSkrXCIgXCIpe2E9MDt3aGlsZShvPWVbYSsrXSlyLmluZGV4T2YoXCIgXCIrbytcIiBcIik8MCYmKHIrPW8rXCIgXCIpO2khPT0ocz12dChyKSkmJm4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIixzKX1yZXR1cm4gdGhpc30scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24odCl7dmFyIGUsbixyLGksbyxhLHMsdT0wO2lmKG0odCkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihlKXtTKHRoaXMpLnJlbW92ZUNsYXNzKHQuY2FsbCh0aGlzLGUseXQodGhpcykpKX0pO2lmKCFhcmd1bWVudHMubGVuZ3RoKXJldHVybiB0aGlzLmF0dHIoXCJjbGFzc1wiLFwiXCIpO2lmKChlPW10KHQpKS5sZW5ndGgpd2hpbGUobj10aGlzW3UrK10paWYoaT15dChuKSxyPTE9PT1uLm5vZGVUeXBlJiZcIiBcIit2dChpKStcIiBcIil7YT0wO3doaWxlKG89ZVthKytdKXdoaWxlKC0xPHIuaW5kZXhPZihcIiBcIitvK1wiIFwiKSlyPXIucmVwbGFjZShcIiBcIitvK1wiIFwiLFwiIFwiKTtpIT09KHM9dnQocikpJiZuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIscyl9cmV0dXJuIHRoaXN9LHRvZ2dsZUNsYXNzOmZ1bmN0aW9uKGksdCl7dmFyIG89dHlwZW9mIGksYT1cInN0cmluZ1wiPT09b3x8QXJyYXkuaXNBcnJheShpKTtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIHQmJmE/dD90aGlzLmFkZENsYXNzKGkpOnRoaXMucmVtb3ZlQ2xhc3MoaSk6bShpKT90aGlzLmVhY2goZnVuY3Rpb24oZSl7Uyh0aGlzKS50b2dnbGVDbGFzcyhpLmNhbGwodGhpcyxlLHl0KHRoaXMpLHQpLHQpfSk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGUsdCxuLHI7aWYoYSl7dD0wLG49Uyh0aGlzKSxyPW10KGkpO3doaWxlKGU9clt0KytdKW4uaGFzQ2xhc3MoZSk/bi5yZW1vdmVDbGFzcyhlKTpuLmFkZENsYXNzKGUpfWVsc2Ugdm9pZCAwIT09aSYmXCJib29sZWFuXCIhPT1vfHwoKGU9eXQodGhpcykpJiZZLnNldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiLGUpLHRoaXMuc2V0QXR0cmlidXRlJiZ0aGlzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsZXx8ITE9PT1pP1wiXCI6WS5nZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIil8fFwiXCIpKX0pfSxoYXNDbGFzczpmdW5jdGlvbihlKXt2YXIgdCxuLHI9MDt0PVwiIFwiK2UrXCIgXCI7d2hpbGUobj10aGlzW3IrK10paWYoMT09PW4ubm9kZVR5cGUmJi0xPChcIiBcIit2dCh5dChuKSkrXCIgXCIpLmluZGV4T2YodCkpcmV0dXJuITA7cmV0dXJuITF9fSk7dmFyIHh0PS9cXHIvZztTLmZuLmV4dGVuZCh7dmFsOmZ1bmN0aW9uKG4pe3ZhciByLGUsaSx0PXRoaXNbMF07cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/KGk9bShuKSx0aGlzLmVhY2goZnVuY3Rpb24oZSl7dmFyIHQ7MT09PXRoaXMubm9kZVR5cGUmJihudWxsPT0odD1pP24uY2FsbCh0aGlzLGUsUyh0aGlzKS52YWwoKSk6bik/dD1cIlwiOlwibnVtYmVyXCI9PXR5cGVvZiB0P3QrPVwiXCI6QXJyYXkuaXNBcnJheSh0KSYmKHQ9Uy5tYXAodCxmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT9cIlwiOmUrXCJcIn0pKSwocj1TLnZhbEhvb2tzW3RoaXMudHlwZV18fFMudmFsSG9va3NbdGhpcy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSkmJlwic2V0XCJpbiByJiZ2b2lkIDAhPT1yLnNldCh0aGlzLHQsXCJ2YWx1ZVwiKXx8KHRoaXMudmFsdWU9dCkpfSkpOnQ/KHI9Uy52YWxIb29rc1t0LnR5cGVdfHxTLnZhbEhvb2tzW3Qubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0pJiZcImdldFwiaW4gciYmdm9pZCAwIT09KGU9ci5nZXQodCxcInZhbHVlXCIpKT9lOlwic3RyaW5nXCI9PXR5cGVvZihlPXQudmFsdWUpP2UucmVwbGFjZSh4dCxcIlwiKTpudWxsPT1lP1wiXCI6ZTp2b2lkIDB9fSksUy5leHRlbmQoe3ZhbEhvb2tzOntvcHRpb246e2dldDpmdW5jdGlvbihlKXt2YXIgdD1TLmZpbmQuYXR0cihlLFwidmFsdWVcIik7cmV0dXJuIG51bGwhPXQ/dDp2dChTLnRleHQoZSkpfX0sc2VsZWN0OntnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQsbixyLGk9ZS5vcHRpb25zLG89ZS5zZWxlY3RlZEluZGV4LGE9XCJzZWxlY3Qtb25lXCI9PT1lLnR5cGUscz1hP251bGw6W10sdT1hP28rMTppLmxlbmd0aDtmb3Iocj1vPDA/dTphP286MDtyPHU7cisrKWlmKCgobj1pW3JdKS5zZWxlY3RlZHx8cj09PW8pJiYhbi5kaXNhYmxlZCYmKCFuLnBhcmVudE5vZGUuZGlzYWJsZWR8fCFBKG4ucGFyZW50Tm9kZSxcIm9wdGdyb3VwXCIpKSl7aWYodD1TKG4pLnZhbCgpLGEpcmV0dXJuIHQ7cy5wdXNoKHQpfXJldHVybiBzfSxzZXQ6ZnVuY3Rpb24oZSx0KXt2YXIgbixyLGk9ZS5vcHRpb25zLG89Uy5tYWtlQXJyYXkodCksYT1pLmxlbmd0aDt3aGlsZShhLS0pKChyPWlbYV0pLnNlbGVjdGVkPS0xPFMuaW5BcnJheShTLnZhbEhvb2tzLm9wdGlvbi5nZXQociksbykpJiYobj0hMCk7cmV0dXJuIG58fChlLnNlbGVjdGVkSW5kZXg9LTEpLG99fX19KSxTLmVhY2goW1wicmFkaW9cIixcImNoZWNrYm94XCJdLGZ1bmN0aW9uKCl7Uy52YWxIb29rc1t0aGlzXT17c2V0OmZ1bmN0aW9uKGUsdCl7aWYoQXJyYXkuaXNBcnJheSh0KSlyZXR1cm4gZS5jaGVja2VkPS0xPFMuaW5BcnJheShTKGUpLnZhbCgpLHQpfX0seS5jaGVja09ufHwoUy52YWxIb29rc1t0aGlzXS5nZXQ9ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PT1lLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpP1wib25cIjplLnZhbHVlfSl9KSx5LmZvY3VzaW49XCJvbmZvY3VzaW5cImluIEM7dmFyIGJ0PS9eKD86Zm9jdXNpbmZvY3VzfGZvY3Vzb3V0Ymx1cikkLyx3dD1mdW5jdGlvbihlKXtlLnN0b3BQcm9wYWdhdGlvbigpfTtTLmV4dGVuZChTLmV2ZW50LHt0cmlnZ2VyOmZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG8sYSxzLHUsbCxjLGYscD1bbnx8RV0sZD12LmNhbGwoZSxcInR5cGVcIik/ZS50eXBlOmUsaD12LmNhbGwoZSxcIm5hbWVzcGFjZVwiKT9lLm5hbWVzcGFjZS5zcGxpdChcIi5cIik6W107aWYobz1mPWE9bj1ufHxFLDMhPT1uLm5vZGVUeXBlJiY4IT09bi5ub2RlVHlwZSYmIWJ0LnRlc3QoZCtTLmV2ZW50LnRyaWdnZXJlZCkmJigtMTxkLmluZGV4T2YoXCIuXCIpJiYoZD0oaD1kLnNwbGl0KFwiLlwiKSkuc2hpZnQoKSxoLnNvcnQoKSksdT1kLmluZGV4T2YoXCI6XCIpPDAmJlwib25cIitkLChlPWVbUy5leHBhbmRvXT9lOm5ldyBTLkV2ZW50KGQsXCJvYmplY3RcIj09dHlwZW9mIGUmJmUpKS5pc1RyaWdnZXI9cj8yOjMsZS5uYW1lc3BhY2U9aC5qb2luKFwiLlwiKSxlLnJuYW1lc3BhY2U9ZS5uYW1lc3BhY2U/bmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK2guam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpOm51bGwsZS5yZXN1bHQ9dm9pZCAwLGUudGFyZ2V0fHwoZS50YXJnZXQ9biksdD1udWxsPT10P1tlXTpTLm1ha2VBcnJheSh0LFtlXSksYz1TLmV2ZW50LnNwZWNpYWxbZF18fHt9LHJ8fCFjLnRyaWdnZXJ8fCExIT09Yy50cmlnZ2VyLmFwcGx5KG4sdCkpKXtpZighciYmIWMubm9CdWJibGUmJiF4KG4pKXtmb3Iocz1jLmRlbGVnYXRlVHlwZXx8ZCxidC50ZXN0KHMrZCl8fChvPW8ucGFyZW50Tm9kZSk7bztvPW8ucGFyZW50Tm9kZSlwLnB1c2gobyksYT1vO2E9PT0obi5vd25lckRvY3VtZW50fHxFKSYmcC5wdXNoKGEuZGVmYXVsdFZpZXd8fGEucGFyZW50V2luZG93fHxDKX1pPTA7d2hpbGUoKG89cFtpKytdKSYmIWUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSlmPW8sZS50eXBlPTE8aT9zOmMuYmluZFR5cGV8fGQsKGw9KFkuZ2V0KG8sXCJldmVudHNcIil8fE9iamVjdC5jcmVhdGUobnVsbCkpW2UudHlwZV0mJlkuZ2V0KG8sXCJoYW5kbGVcIikpJiZsLmFwcGx5KG8sdCksKGw9dSYmb1t1XSkmJmwuYXBwbHkmJlYobykmJihlLnJlc3VsdD1sLmFwcGx5KG8sdCksITE9PT1lLnJlc3VsdCYmZS5wcmV2ZW50RGVmYXVsdCgpKTtyZXR1cm4gZS50eXBlPWQscnx8ZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8Yy5fZGVmYXVsdCYmITEhPT1jLl9kZWZhdWx0LmFwcGx5KHAucG9wKCksdCl8fCFWKG4pfHx1JiZtKG5bZF0pJiYheChuKSYmKChhPW5bdV0pJiYoblt1XT1udWxsKSxTLmV2ZW50LnRyaWdnZXJlZD1kLGUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSYmZi5hZGRFdmVudExpc3RlbmVyKGQsd3QpLG5bZF0oKSxlLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkmJmYucmVtb3ZlRXZlbnRMaXN0ZW5lcihkLHd0KSxTLmV2ZW50LnRyaWdnZXJlZD12b2lkIDAsYSYmKG5bdV09YSkpLGUucmVzdWx0fX0sc2ltdWxhdGU6ZnVuY3Rpb24oZSx0LG4pe3ZhciByPVMuZXh0ZW5kKG5ldyBTLkV2ZW50LG4se3R5cGU6ZSxpc1NpbXVsYXRlZDohMH0pO1MuZXZlbnQudHJpZ2dlcihyLG51bGwsdCl9fSksUy5mbi5leHRlbmQoe3RyaWdnZXI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Uy5ldmVudC50cmlnZ2VyKGUsdCx0aGlzKX0pfSx0cmlnZ2VySGFuZGxlcjpmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXNbMF07aWYobilyZXR1cm4gUy5ldmVudC50cmlnZ2VyKGUsdCxuLCEwKX19KSx5LmZvY3VzaW58fFMuZWFjaCh7Zm9jdXM6XCJmb2N1c2luXCIsYmx1cjpcImZvY3Vzb3V0XCJ9LGZ1bmN0aW9uKG4scil7dmFyIGk9ZnVuY3Rpb24oZSl7Uy5ldmVudC5zaW11bGF0ZShyLGUudGFyZ2V0LFMuZXZlbnQuZml4KGUpKX07Uy5ldmVudC5zcGVjaWFsW3JdPXtzZXR1cDpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcy5kb2N1bWVudHx8dGhpcyx0PVkuYWNjZXNzKGUscik7dHx8ZS5hZGRFdmVudExpc3RlbmVyKG4saSwhMCksWS5hY2Nlc3MoZSxyLCh0fHwwKSsxKX0sdGVhcmRvd246ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMuZG9jdW1lbnR8fHRoaXMsdD1ZLmFjY2VzcyhlLHIpLTE7dD9ZLmFjY2VzcyhlLHIsdCk6KGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihuLGksITApLFkucmVtb3ZlKGUscikpfX19KTt2YXIgVHQ9Qy5sb2NhdGlvbixDdD17Z3VpZDpEYXRlLm5vdygpfSxFdD0vXFw/LztTLnBhcnNlWE1MPWZ1bmN0aW9uKGUpe3ZhciB0O2lmKCFlfHxcInN0cmluZ1wiIT10eXBlb2YgZSlyZXR1cm4gbnVsbDt0cnl7dD0obmV3IEMuRE9NUGFyc2VyKS5wYXJzZUZyb21TdHJpbmcoZSxcInRleHQveG1sXCIpfWNhdGNoKGUpe3Q9dm9pZCAwfXJldHVybiB0JiYhdC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpLmxlbmd0aHx8Uy5lcnJvcihcIkludmFsaWQgWE1MOiBcIitlKSx0fTt2YXIgU3Q9L1xcW1xcXSQvLGt0PS9cXHI/XFxuL2csQXQ9L14oPzpzdWJtaXR8YnV0dG9ufGltYWdlfHJlc2V0fGZpbGUpJC9pLE50PS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGtleWdlbikvaTtmdW5jdGlvbiBEdChuLGUscixpKXt2YXIgdDtpZihBcnJheS5pc0FycmF5KGUpKVMuZWFjaChlLGZ1bmN0aW9uKGUsdCl7cnx8U3QudGVzdChuKT9pKG4sdCk6RHQobitcIltcIisoXCJvYmplY3RcIj09dHlwZW9mIHQmJm51bGwhPXQ/ZTpcIlwiKStcIl1cIix0LHIsaSl9KTtlbHNlIGlmKHJ8fFwib2JqZWN0XCIhPT13KGUpKWkobixlKTtlbHNlIGZvcih0IGluIGUpRHQobitcIltcIit0K1wiXVwiLGVbdF0scixpKX1TLnBhcmFtPWZ1bmN0aW9uKGUsdCl7dmFyIG4scj1bXSxpPWZ1bmN0aW9uKGUsdCl7dmFyIG49bSh0KT90KCk6dDtyW3IubGVuZ3RoXT1lbmNvZGVVUklDb21wb25lbnQoZSkrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG51bGw9PW4/XCJcIjpuKX07aWYobnVsbD09ZSlyZXR1cm5cIlwiO2lmKEFycmF5LmlzQXJyYXkoZSl8fGUuanF1ZXJ5JiYhUy5pc1BsYWluT2JqZWN0KGUpKVMuZWFjaChlLGZ1bmN0aW9uKCl7aSh0aGlzLm5hbWUsdGhpcy52YWx1ZSl9KTtlbHNlIGZvcihuIGluIGUpRHQobixlW25dLHQsaSk7cmV0dXJuIHIuam9pbihcIiZcIil9LFMuZm4uZXh0ZW5kKHtzZXJpYWxpemU6ZnVuY3Rpb24oKXtyZXR1cm4gUy5wYXJhbSh0aGlzLnNlcmlhbGl6ZUFycmF5KCkpfSxzZXJpYWxpemVBcnJheTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBlPVMucHJvcCh0aGlzLFwiZWxlbWVudHNcIik7cmV0dXJuIGU/Uy5tYWtlQXJyYXkoZSk6dGhpc30pLmZpbHRlcihmdW5jdGlvbigpe3ZhciBlPXRoaXMudHlwZTtyZXR1cm4gdGhpcy5uYW1lJiYhUyh0aGlzKS5pcyhcIjpkaXNhYmxlZFwiKSYmTnQudGVzdCh0aGlzLm5vZGVOYW1lKSYmIUF0LnRlc3QoZSkmJih0aGlzLmNoZWNrZWR8fCFwZS50ZXN0KGUpKX0pLm1hcChmdW5jdGlvbihlLHQpe3ZhciBuPVModGhpcykudmFsKCk7cmV0dXJuIG51bGw9PW4/bnVsbDpBcnJheS5pc0FycmF5KG4pP1MubWFwKG4sZnVuY3Rpb24oZSl7cmV0dXJue25hbWU6dC5uYW1lLHZhbHVlOmUucmVwbGFjZShrdCxcIlxcclxcblwiKX19KTp7bmFtZTp0Lm5hbWUsdmFsdWU6bi5yZXBsYWNlKGt0LFwiXFxyXFxuXCIpfX0pLmdldCgpfX0pO3ZhciBqdD0vJTIwL2cscXQ9LyMuKiQvLEx0PS8oWz8mXSlfPVteJl0qLyxIdD0vXiguKj8pOlsgXFx0XSooW15cXHJcXG5dKikkL2dtLE90PS9eKD86R0VUfEhFQUQpJC8sUHQ9L15cXC9cXC8vLFJ0PXt9LE10PXt9LEl0PVwiKi9cIi5jb25jYXQoXCIqXCIpLFd0PUUuY3JlYXRlRWxlbWVudChcImFcIik7ZnVuY3Rpb24gRnQobyl7cmV0dXJuIGZ1bmN0aW9uKGUsdCl7XCJzdHJpbmdcIiE9dHlwZW9mIGUmJih0PWUsZT1cIipcIik7dmFyIG4scj0wLGk9ZS50b0xvd2VyQ2FzZSgpLm1hdGNoKFApfHxbXTtpZihtKHQpKXdoaWxlKG49aVtyKytdKVwiK1wiPT09blswXT8obj1uLnNsaWNlKDEpfHxcIipcIiwob1tuXT1vW25dfHxbXSkudW5zaGlmdCh0KSk6KG9bbl09b1tuXXx8W10pLnB1c2godCl9fWZ1bmN0aW9uIEJ0KHQsaSxvLGEpe3ZhciBzPXt9LHU9dD09PU10O2Z1bmN0aW9uIGwoZSl7dmFyIHI7cmV0dXJuIHNbZV09ITAsUy5lYWNoKHRbZV18fFtdLGZ1bmN0aW9uKGUsdCl7dmFyIG49dChpLG8sYSk7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIG58fHV8fHNbbl0/dT8hKHI9bik6dm9pZCAwOihpLmRhdGFUeXBlcy51bnNoaWZ0KG4pLGwobiksITEpfSkscn1yZXR1cm4gbChpLmRhdGFUeXBlc1swXSl8fCFzW1wiKlwiXSYmbChcIipcIil9ZnVuY3Rpb24gJHQoZSx0KXt2YXIgbixyLGk9Uy5hamF4U2V0dGluZ3MuZmxhdE9wdGlvbnN8fHt9O2ZvcihuIGluIHQpdm9pZCAwIT09dFtuXSYmKChpW25dP2U6cnx8KHI9e30pKVtuXT10W25dKTtyZXR1cm4gciYmUy5leHRlbmQoITAsZSxyKSxlfVd0LmhyZWY9VHQuaHJlZixTLmV4dGVuZCh7YWN0aXZlOjAsbGFzdE1vZGlmaWVkOnt9LGV0YWc6e30sYWpheFNldHRpbmdzOnt1cmw6VHQuaHJlZix0eXBlOlwiR0VUXCIsaXNMb2NhbDovXig/OmFib3V0fGFwcHxhcHAtc3RvcmFnZXwuKy1leHRlbnNpb258ZmlsZXxyZXN8d2lkZ2V0KTokLy50ZXN0KFR0LnByb3RvY29sKSxnbG9iYWw6ITAscHJvY2Vzc0RhdGE6ITAsYXN5bmM6ITAsY29udGVudFR5cGU6XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLThcIixhY2NlcHRzOntcIipcIjpJdCx0ZXh0OlwidGV4dC9wbGFpblwiLGh0bWw6XCJ0ZXh0L2h0bWxcIix4bWw6XCJhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sXCIsanNvbjpcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdFwifSxjb250ZW50czp7eG1sOi9cXGJ4bWxcXGIvLGh0bWw6L1xcYmh0bWwvLGpzb246L1xcYmpzb25cXGIvfSxyZXNwb25zZUZpZWxkczp7eG1sOlwicmVzcG9uc2VYTUxcIix0ZXh0OlwicmVzcG9uc2VUZXh0XCIsanNvbjpcInJlc3BvbnNlSlNPTlwifSxjb252ZXJ0ZXJzOntcIiogdGV4dFwiOlN0cmluZyxcInRleHQgaHRtbFwiOiEwLFwidGV4dCBqc29uXCI6SlNPTi5wYXJzZSxcInRleHQgeG1sXCI6Uy5wYXJzZVhNTH0sZmxhdE9wdGlvbnM6e3VybDohMCxjb250ZXh0OiEwfX0sYWpheFNldHVwOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQ/JHQoJHQoZSxTLmFqYXhTZXR0aW5ncyksdCk6JHQoUy5hamF4U2V0dGluZ3MsZSl9LGFqYXhQcmVmaWx0ZXI6RnQoUnQpLGFqYXhUcmFuc3BvcnQ6RnQoTXQpLGFqYXg6ZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZSYmKHQ9ZSxlPXZvaWQgMCksdD10fHx7fTt2YXIgYyxmLHAsbixkLHIsaCxnLGksbyx2PVMuYWpheFNldHVwKHt9LHQpLHk9di5jb250ZXh0fHx2LG09di5jb250ZXh0JiYoeS5ub2RlVHlwZXx8eS5qcXVlcnkpP1MoeSk6Uy5ldmVudCx4PVMuRGVmZXJyZWQoKSxiPVMuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksdz12LnN0YXR1c0NvZGV8fHt9LGE9e30scz17fSx1PVwiY2FuY2VsZWRcIixUPXtyZWFkeVN0YXRlOjAsZ2V0UmVzcG9uc2VIZWFkZXI6ZnVuY3Rpb24oZSl7dmFyIHQ7aWYoaCl7aWYoIW4pe249e307d2hpbGUodD1IdC5leGVjKHApKW5bdFsxXS50b0xvd2VyQ2FzZSgpK1wiIFwiXT0oblt0WzFdLnRvTG93ZXJDYXNlKCkrXCIgXCJdfHxbXSkuY29uY2F0KHRbMl0pfXQ9bltlLnRvTG93ZXJDYXNlKCkrXCIgXCJdfXJldHVybiBudWxsPT10P251bGw6dC5qb2luKFwiLCBcIil9LGdldEFsbFJlc3BvbnNlSGVhZGVyczpmdW5jdGlvbigpe3JldHVybiBoP3A6bnVsbH0sc2V0UmVxdWVzdEhlYWRlcjpmdW5jdGlvbihlLHQpe3JldHVybiBudWxsPT1oJiYoZT1zW2UudG9Mb3dlckNhc2UoKV09c1tlLnRvTG93ZXJDYXNlKCldfHxlLGFbZV09dCksdGhpc30sb3ZlcnJpZGVNaW1lVHlwZTpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09aCYmKHYubWltZVR5cGU9ZSksdGhpc30sc3RhdHVzQ29kZTpmdW5jdGlvbihlKXt2YXIgdDtpZihlKWlmKGgpVC5hbHdheXMoZVtULnN0YXR1c10pO2Vsc2UgZm9yKHQgaW4gZSl3W3RdPVt3W3RdLGVbdF1dO3JldHVybiB0aGlzfSxhYm9ydDpmdW5jdGlvbihlKXt2YXIgdD1lfHx1O3JldHVybiBjJiZjLmFib3J0KHQpLGwoMCx0KSx0aGlzfX07aWYoeC5wcm9taXNlKFQpLHYudXJsPSgoZXx8di51cmx8fFR0LmhyZWYpK1wiXCIpLnJlcGxhY2UoUHQsVHQucHJvdG9jb2wrXCIvL1wiKSx2LnR5cGU9dC5tZXRob2R8fHQudHlwZXx8di5tZXRob2R8fHYudHlwZSx2LmRhdGFUeXBlcz0odi5kYXRhVHlwZXx8XCIqXCIpLnRvTG93ZXJDYXNlKCkubWF0Y2goUCl8fFtcIlwiXSxudWxsPT12LmNyb3NzRG9tYWluKXtyPUUuY3JlYXRlRWxlbWVudChcImFcIik7dHJ5e3IuaHJlZj12LnVybCxyLmhyZWY9ci5ocmVmLHYuY3Jvc3NEb21haW49V3QucHJvdG9jb2wrXCIvL1wiK1d0Lmhvc3QhPXIucHJvdG9jb2wrXCIvL1wiK3IuaG9zdH1jYXRjaChlKXt2LmNyb3NzRG9tYWluPSEwfX1pZih2LmRhdGEmJnYucHJvY2Vzc0RhdGEmJlwic3RyaW5nXCIhPXR5cGVvZiB2LmRhdGEmJih2LmRhdGE9Uy5wYXJhbSh2LmRhdGEsdi50cmFkaXRpb25hbCkpLEJ0KFJ0LHYsdCxUKSxoKXJldHVybiBUO2ZvcihpIGluKGc9Uy5ldmVudCYmdi5nbG9iYWwpJiYwPT1TLmFjdGl2ZSsrJiZTLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RhcnRcIiksdi50eXBlPXYudHlwZS50b1VwcGVyQ2FzZSgpLHYuaGFzQ29udGVudD0hT3QudGVzdCh2LnR5cGUpLGY9di51cmwucmVwbGFjZShxdCxcIlwiKSx2Lmhhc0NvbnRlbnQ/di5kYXRhJiZ2LnByb2Nlc3NEYXRhJiYwPT09KHYuY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJih2LmRhdGE9di5kYXRhLnJlcGxhY2UoanQsXCIrXCIpKToobz12LnVybC5zbGljZShmLmxlbmd0aCksdi5kYXRhJiYodi5wcm9jZXNzRGF0YXx8XCJzdHJpbmdcIj09dHlwZW9mIHYuZGF0YSkmJihmKz0oRXQudGVzdChmKT9cIiZcIjpcIj9cIikrdi5kYXRhLGRlbGV0ZSB2LmRhdGEpLCExPT09di5jYWNoZSYmKGY9Zi5yZXBsYWNlKEx0LFwiJDFcIiksbz0oRXQudGVzdChmKT9cIiZcIjpcIj9cIikrXCJfPVwiK0N0Lmd1aWQrKytvKSx2LnVybD1mK28pLHYuaWZNb2RpZmllZCYmKFMubGFzdE1vZGlmaWVkW2ZdJiZULnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Nb2RpZmllZC1TaW5jZVwiLFMubGFzdE1vZGlmaWVkW2ZdKSxTLmV0YWdbZl0mJlQuc2V0UmVxdWVzdEhlYWRlcihcIklmLU5vbmUtTWF0Y2hcIixTLmV0YWdbZl0pKSwodi5kYXRhJiZ2Lmhhc0NvbnRlbnQmJiExIT09di5jb250ZW50VHlwZXx8dC5jb250ZW50VHlwZSkmJlQuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLHYuY29udGVudFR5cGUpLFQuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLHYuZGF0YVR5cGVzWzBdJiZ2LmFjY2VwdHNbdi5kYXRhVHlwZXNbMF1dP3YuYWNjZXB0c1t2LmRhdGFUeXBlc1swXV0rKFwiKlwiIT09di5kYXRhVHlwZXNbMF0/XCIsIFwiK0l0K1wiOyBxPTAuMDFcIjpcIlwiKTp2LmFjY2VwdHNbXCIqXCJdKSx2LmhlYWRlcnMpVC5zZXRSZXF1ZXN0SGVhZGVyKGksdi5oZWFkZXJzW2ldKTtpZih2LmJlZm9yZVNlbmQmJighMT09PXYuYmVmb3JlU2VuZC5jYWxsKHksVCx2KXx8aCkpcmV0dXJuIFQuYWJvcnQoKTtpZih1PVwiYWJvcnRcIixiLmFkZCh2LmNvbXBsZXRlKSxULmRvbmUodi5zdWNjZXNzKSxULmZhaWwodi5lcnJvciksYz1CdChNdCx2LHQsVCkpe2lmKFQucmVhZHlTdGF0ZT0xLGcmJm0udHJpZ2dlcihcImFqYXhTZW5kXCIsW1Qsdl0pLGgpcmV0dXJuIFQ7di5hc3luYyYmMDx2LnRpbWVvdXQmJihkPUMuc2V0VGltZW91dChmdW5jdGlvbigpe1QuYWJvcnQoXCJ0aW1lb3V0XCIpfSx2LnRpbWVvdXQpKTt0cnl7aD0hMSxjLnNlbmQoYSxsKX1jYXRjaChlKXtpZihoKXRocm93IGU7bCgtMSxlKX19ZWxzZSBsKC0xLFwiTm8gVHJhbnNwb3J0XCIpO2Z1bmN0aW9uIGwoZSx0LG4scil7dmFyIGksbyxhLHMsdSxsPXQ7aHx8KGg9ITAsZCYmQy5jbGVhclRpbWVvdXQoZCksYz12b2lkIDAscD1yfHxcIlwiLFQucmVhZHlTdGF0ZT0wPGU/NDowLGk9MjAwPD1lJiZlPDMwMHx8MzA0PT09ZSxuJiYocz1mdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGEscz1lLmNvbnRlbnRzLHU9ZS5kYXRhVHlwZXM7d2hpbGUoXCIqXCI9PT11WzBdKXUuc2hpZnQoKSx2b2lkIDA9PT1yJiYocj1lLm1pbWVUeXBlfHx0LmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1UeXBlXCIpKTtpZihyKWZvcihpIGluIHMpaWYoc1tpXSYmc1tpXS50ZXN0KHIpKXt1LnVuc2hpZnQoaSk7YnJlYWt9aWYodVswXWluIG4pbz11WzBdO2Vsc2V7Zm9yKGkgaW4gbil7aWYoIXVbMF18fGUuY29udmVydGVyc1tpK1wiIFwiK3VbMF1dKXtvPWk7YnJlYWt9YXx8KGE9aSl9bz1vfHxhfWlmKG8pcmV0dXJuIG8hPT11WzBdJiZ1LnVuc2hpZnQobyksbltvXX0odixULG4pKSwhaSYmLTE8Uy5pbkFycmF5KFwic2NyaXB0XCIsdi5kYXRhVHlwZXMpJiYodi5jb252ZXJ0ZXJzW1widGV4dCBzY3JpcHRcIl09ZnVuY3Rpb24oKXt9KSxzPWZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG8sYSxzLHUsbD17fSxjPWUuZGF0YVR5cGVzLnNsaWNlKCk7aWYoY1sxXSlmb3IoYSBpbiBlLmNvbnZlcnRlcnMpbFthLnRvTG93ZXJDYXNlKCldPWUuY29udmVydGVyc1thXTtvPWMuc2hpZnQoKTt3aGlsZShvKWlmKGUucmVzcG9uc2VGaWVsZHNbb10mJihuW2UucmVzcG9uc2VGaWVsZHNbb11dPXQpLCF1JiZyJiZlLmRhdGFGaWx0ZXImJih0PWUuZGF0YUZpbHRlcih0LGUuZGF0YVR5cGUpKSx1PW8sbz1jLnNoaWZ0KCkpaWYoXCIqXCI9PT1vKW89dTtlbHNlIGlmKFwiKlwiIT09dSYmdSE9PW8pe2lmKCEoYT1sW3UrXCIgXCIrb118fGxbXCIqIFwiK29dKSlmb3IoaSBpbiBsKWlmKChzPWkuc3BsaXQoXCIgXCIpKVsxXT09PW8mJihhPWxbdStcIiBcIitzWzBdXXx8bFtcIiogXCIrc1swXV0pKXshMD09PWE/YT1sW2ldOiEwIT09bFtpXSYmKG89c1swXSxjLnVuc2hpZnQoc1sxXSkpO2JyZWFrfWlmKCEwIT09YSlpZihhJiZlW1widGhyb3dzXCJdKXQ9YSh0KTtlbHNlIHRyeXt0PWEodCl9Y2F0Y2goZSl7cmV0dXJue3N0YXRlOlwicGFyc2VyZXJyb3JcIixlcnJvcjphP2U6XCJObyBjb252ZXJzaW9uIGZyb20gXCIrdStcIiB0byBcIitvfX19cmV0dXJue3N0YXRlOlwic3VjY2Vzc1wiLGRhdGE6dH19KHYscyxULGkpLGk/KHYuaWZNb2RpZmllZCYmKCh1PVQuZ2V0UmVzcG9uc2VIZWFkZXIoXCJMYXN0LU1vZGlmaWVkXCIpKSYmKFMubGFzdE1vZGlmaWVkW2ZdPXUpLCh1PVQuZ2V0UmVzcG9uc2VIZWFkZXIoXCJldGFnXCIpKSYmKFMuZXRhZ1tmXT11KSksMjA0PT09ZXx8XCJIRUFEXCI9PT12LnR5cGU/bD1cIm5vY29udGVudFwiOjMwND09PWU/bD1cIm5vdG1vZGlmaWVkXCI6KGw9cy5zdGF0ZSxvPXMuZGF0YSxpPSEoYT1zLmVycm9yKSkpOihhPWwsIWUmJmx8fChsPVwiZXJyb3JcIixlPDAmJihlPTApKSksVC5zdGF0dXM9ZSxULnN0YXR1c1RleHQ9KHR8fGwpK1wiXCIsaT94LnJlc29sdmVXaXRoKHksW28sbCxUXSk6eC5yZWplY3RXaXRoKHksW1QsbCxhXSksVC5zdGF0dXNDb2RlKHcpLHc9dm9pZCAwLGcmJm0udHJpZ2dlcihpP1wiYWpheFN1Y2Nlc3NcIjpcImFqYXhFcnJvclwiLFtULHYsaT9vOmFdKSxiLmZpcmVXaXRoKHksW1QsbF0pLGcmJihtLnRyaWdnZXIoXCJhamF4Q29tcGxldGVcIixbVCx2XSksLS1TLmFjdGl2ZXx8Uy5ldmVudC50cmlnZ2VyKFwiYWpheFN0b3BcIikpKX1yZXR1cm4gVH0sZ2V0SlNPTjpmdW5jdGlvbihlLHQsbil7cmV0dXJuIFMuZ2V0KGUsdCxuLFwianNvblwiKX0sZ2V0U2NyaXB0OmZ1bmN0aW9uKGUsdCl7cmV0dXJuIFMuZ2V0KGUsdm9pZCAwLHQsXCJzY3JpcHRcIil9fSksUy5lYWNoKFtcImdldFwiLFwicG9zdFwiXSxmdW5jdGlvbihlLGkpe1NbaV09ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIG0odCkmJihyPXJ8fG4sbj10LHQ9dm9pZCAwKSxTLmFqYXgoUy5leHRlbmQoe3VybDplLHR5cGU6aSxkYXRhVHlwZTpyLGRhdGE6dCxzdWNjZXNzOm59LFMuaXNQbGFpbk9iamVjdChlKSYmZSkpfX0pLFMuYWpheFByZWZpbHRlcihmdW5jdGlvbihlKXt2YXIgdDtmb3IodCBpbiBlLmhlYWRlcnMpXCJjb250ZW50LXR5cGVcIj09PXQudG9Mb3dlckNhc2UoKSYmKGUuY29udGVudFR5cGU9ZS5oZWFkZXJzW3RdfHxcIlwiKX0pLFMuX2V2YWxVcmw9ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBTLmFqYXgoe3VybDplLHR5cGU6XCJHRVRcIixkYXRhVHlwZTpcInNjcmlwdFwiLGNhY2hlOiEwLGFzeW5jOiExLGdsb2JhbDohMSxjb252ZXJ0ZXJzOntcInRleHQgc2NyaXB0XCI6ZnVuY3Rpb24oKXt9fSxkYXRhRmlsdGVyOmZ1bmN0aW9uKGUpe1MuZ2xvYmFsRXZhbChlLHQsbil9fSl9LFMuZm4uZXh0ZW5kKHt3cmFwQWxsOmZ1bmN0aW9uKGUpe3ZhciB0O3JldHVybiB0aGlzWzBdJiYobShlKSYmKGU9ZS5jYWxsKHRoaXNbMF0pKSx0PVMoZSx0aGlzWzBdLm93bmVyRG9jdW1lbnQpLmVxKDApLmNsb25lKCEwKSx0aGlzWzBdLnBhcmVudE5vZGUmJnQuaW5zZXJ0QmVmb3JlKHRoaXNbMF0pLHQubWFwKGZ1bmN0aW9uKCl7dmFyIGU9dGhpczt3aGlsZShlLmZpcnN0RWxlbWVudENoaWxkKWU9ZS5maXJzdEVsZW1lbnRDaGlsZDtyZXR1cm4gZX0pLmFwcGVuZCh0aGlzKSksdGhpc30sd3JhcElubmVyOmZ1bmN0aW9uKG4pe3JldHVybiBtKG4pP3RoaXMuZWFjaChmdW5jdGlvbihlKXtTKHRoaXMpLndyYXBJbm5lcihuLmNhbGwodGhpcyxlKSl9KTp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZT1TKHRoaXMpLHQ9ZS5jb250ZW50cygpO3QubGVuZ3RoP3Qud3JhcEFsbChuKTplLmFwcGVuZChuKX0pfSx3cmFwOmZ1bmN0aW9uKHQpe3ZhciBuPW0odCk7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihlKXtTKHRoaXMpLndyYXBBbGwobj90LmNhbGwodGhpcyxlKTp0KX0pfSx1bndyYXA6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucGFyZW50KGUpLm5vdChcImJvZHlcIikuZWFjaChmdW5jdGlvbigpe1ModGhpcykucmVwbGFjZVdpdGgodGhpcy5jaGlsZE5vZGVzKX0pLHRoaXN9fSksUy5leHByLnBzZXVkb3MuaGlkZGVuPWZ1bmN0aW9uKGUpe3JldHVybiFTLmV4cHIucHNldWRvcy52aXNpYmxlKGUpfSxTLmV4cHIucHNldWRvcy52aXNpYmxlPWZ1bmN0aW9uKGUpe3JldHVybiEhKGUub2Zmc2V0V2lkdGh8fGUub2Zmc2V0SGVpZ2h0fHxlLmdldENsaWVudFJlY3RzKCkubGVuZ3RoKX0sUy5hamF4U2V0dGluZ3MueGhyPWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBuZXcgQy5YTUxIdHRwUmVxdWVzdH1jYXRjaChlKXt9fTt2YXIgX3Q9ezA6MjAwLDEyMjM6MjA0fSx6dD1TLmFqYXhTZXR0aW5ncy54aHIoKTt5LmNvcnM9ISF6dCYmXCJ3aXRoQ3JlZGVudGlhbHNcImluIHp0LHkuYWpheD16dD0hIXp0LFMuYWpheFRyYW5zcG9ydChmdW5jdGlvbihpKXt2YXIgbyxhO2lmKHkuY29yc3x8enQmJiFpLmNyb3NzRG9tYWluKXJldHVybntzZW5kOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj1pLnhocigpO2lmKHIub3BlbihpLnR5cGUsaS51cmwsaS5hc3luYyxpLnVzZXJuYW1lLGkucGFzc3dvcmQpLGkueGhyRmllbGRzKWZvcihuIGluIGkueGhyRmllbGRzKXJbbl09aS54aHJGaWVsZHNbbl07Zm9yKG4gaW4gaS5taW1lVHlwZSYmci5vdmVycmlkZU1pbWVUeXBlJiZyLm92ZXJyaWRlTWltZVR5cGUoaS5taW1lVHlwZSksaS5jcm9zc0RvbWFpbnx8ZVtcIlgtUmVxdWVzdGVkLVdpdGhcIl18fChlW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXT1cIlhNTEh0dHBSZXF1ZXN0XCIpLGUpci5zZXRSZXF1ZXN0SGVhZGVyKG4sZVtuXSk7bz1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oKXtvJiYobz1hPXIub25sb2FkPXIub25lcnJvcj1yLm9uYWJvcnQ9ci5vbnRpbWVvdXQ9ci5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxcImFib3J0XCI9PT1lP3IuYWJvcnQoKTpcImVycm9yXCI9PT1lP1wibnVtYmVyXCIhPXR5cGVvZiByLnN0YXR1cz90KDAsXCJlcnJvclwiKTp0KHIuc3RhdHVzLHIuc3RhdHVzVGV4dCk6dChfdFtyLnN0YXR1c118fHIuc3RhdHVzLHIuc3RhdHVzVGV4dCxcInRleHRcIiE9PShyLnJlc3BvbnNlVHlwZXx8XCJ0ZXh0XCIpfHxcInN0cmluZ1wiIT10eXBlb2Ygci5yZXNwb25zZVRleHQ/e2JpbmFyeTpyLnJlc3BvbnNlfTp7dGV4dDpyLnJlc3BvbnNlVGV4dH0sci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkpfX0sci5vbmxvYWQ9bygpLGE9ci5vbmVycm9yPXIub250aW1lb3V0PW8oXCJlcnJvclwiKSx2b2lkIDAhPT1yLm9uYWJvcnQ/ci5vbmFib3J0PWE6ci5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXs0PT09ci5yZWFkeVN0YXRlJiZDLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtvJiZhKCl9KX0sbz1vKFwiYWJvcnRcIik7dHJ5e3Iuc2VuZChpLmhhc0NvbnRlbnQmJmkuZGF0YXx8bnVsbCl9Y2F0Y2goZSl7aWYobyl0aHJvdyBlfX0sYWJvcnQ6ZnVuY3Rpb24oKXtvJiZvKCl9fX0pLFMuYWpheFByZWZpbHRlcihmdW5jdGlvbihlKXtlLmNyb3NzRG9tYWluJiYoZS5jb250ZW50cy5zY3JpcHQ9ITEpfSksUy5hamF4U2V0dXAoe2FjY2VwdHM6e3NjcmlwdDpcInRleHQvamF2YXNjcmlwdCwgYXBwbGljYXRpb24vamF2YXNjcmlwdCwgYXBwbGljYXRpb24vZWNtYXNjcmlwdCwgYXBwbGljYXRpb24veC1lY21hc2NyaXB0XCJ9LGNvbnRlbnRzOntzY3JpcHQ6L1xcYig/OmphdmF8ZWNtYSlzY3JpcHRcXGIvfSxjb252ZXJ0ZXJzOntcInRleHQgc2NyaXB0XCI6ZnVuY3Rpb24oZSl7cmV0dXJuIFMuZ2xvYmFsRXZhbChlKSxlfX19KSxTLmFqYXhQcmVmaWx0ZXIoXCJzY3JpcHRcIixmdW5jdGlvbihlKXt2b2lkIDA9PT1lLmNhY2hlJiYoZS5jYWNoZT0hMSksZS5jcm9zc0RvbWFpbiYmKGUudHlwZT1cIkdFVFwiKX0pLFMuYWpheFRyYW5zcG9ydChcInNjcmlwdFwiLGZ1bmN0aW9uKG4pe3ZhciByLGk7aWYobi5jcm9zc0RvbWFpbnx8bi5zY3JpcHRBdHRycylyZXR1cm57c2VuZDpmdW5jdGlvbihlLHQpe3I9UyhcIjxzY3JpcHQ+XCIpLmF0dHIobi5zY3JpcHRBdHRyc3x8e30pLnByb3Aoe2NoYXJzZXQ6bi5zY3JpcHRDaGFyc2V0LHNyYzpuLnVybH0pLm9uKFwibG9hZCBlcnJvclwiLGk9ZnVuY3Rpb24oZSl7ci5yZW1vdmUoKSxpPW51bGwsZSYmdChcImVycm9yXCI9PT1lLnR5cGU/NDA0OjIwMCxlLnR5cGUpfSksRS5oZWFkLmFwcGVuZENoaWxkKHJbMF0pfSxhYm9ydDpmdW5jdGlvbigpe2kmJmkoKX19fSk7dmFyIFV0LFh0PVtdLFZ0PS8oPSlcXD8oPz0mfCQpfFxcP1xcPy87Uy5hamF4U2V0dXAoe2pzb25wOlwiY2FsbGJhY2tcIixqc29ucENhbGxiYWNrOmZ1bmN0aW9uKCl7dmFyIGU9WHQucG9wKCl8fFMuZXhwYW5kbytcIl9cIitDdC5ndWlkKys7cmV0dXJuIHRoaXNbZV09ITAsZX19KSxTLmFqYXhQcmVmaWx0ZXIoXCJqc29uIGpzb25wXCIsZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhPSExIT09ZS5qc29ucCYmKFZ0LnRlc3QoZS51cmwpP1widXJsXCI6XCJzdHJpbmdcIj09dHlwZW9mIGUuZGF0YSYmMD09PShlLmNvbnRlbnRUeXBlfHxcIlwiKS5pbmRleE9mKFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpJiZWdC50ZXN0KGUuZGF0YSkmJlwiZGF0YVwiKTtpZihhfHxcImpzb25wXCI9PT1lLmRhdGFUeXBlc1swXSlyZXR1cm4gcj1lLmpzb25wQ2FsbGJhY2s9bShlLmpzb25wQ2FsbGJhY2spP2UuanNvbnBDYWxsYmFjaygpOmUuanNvbnBDYWxsYmFjayxhP2VbYV09ZVthXS5yZXBsYWNlKFZ0LFwiJDFcIityKTohMSE9PWUuanNvbnAmJihlLnVybCs9KEV0LnRlc3QoZS51cmwpP1wiJlwiOlwiP1wiKStlLmpzb25wK1wiPVwiK3IpLGUuY29udmVydGVyc1tcInNjcmlwdCBqc29uXCJdPWZ1bmN0aW9uKCl7cmV0dXJuIG98fFMuZXJyb3IocitcIiB3YXMgbm90IGNhbGxlZFwiKSxvWzBdfSxlLmRhdGFUeXBlc1swXT1cImpzb25cIixpPUNbcl0sQ1tyXT1mdW5jdGlvbigpe289YXJndW1lbnRzfSxuLmFsd2F5cyhmdW5jdGlvbigpe3ZvaWQgMD09PWk/UyhDKS5yZW1vdmVQcm9wKHIpOkNbcl09aSxlW3JdJiYoZS5qc29ucENhbGxiYWNrPXQuanNvbnBDYWxsYmFjayxYdC5wdXNoKHIpKSxvJiZtKGkpJiZpKG9bMF0pLG89aT12b2lkIDB9KSxcInNjcmlwdFwifSkseS5jcmVhdGVIVE1MRG9jdW1lbnQ9KChVdD1FLmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKS5ib2R5KS5pbm5lckhUTUw9XCI8Zm9ybT48L2Zvcm0+PGZvcm0+PC9mb3JtPlwiLDI9PT1VdC5jaGlsZE5vZGVzLmxlbmd0aCksUy5wYXJzZUhUTUw9ZnVuY3Rpb24oZSx0LG4pe3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBlP1tdOihcImJvb2xlYW5cIj09dHlwZW9mIHQmJihuPXQsdD0hMSksdHx8KHkuY3JlYXRlSFRNTERvY3VtZW50Pygocj0odD1FLmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKSkuY3JlYXRlRWxlbWVudChcImJhc2VcIikpLmhyZWY9RS5sb2NhdGlvbi5ocmVmLHQuaGVhZC5hcHBlbmRDaGlsZChyKSk6dD1FKSxvPSFuJiZbXSwoaT1OLmV4ZWMoZSkpP1t0LmNyZWF0ZUVsZW1lbnQoaVsxXSldOihpPXhlKFtlXSx0LG8pLG8mJm8ubGVuZ3RoJiZTKG8pLnJlbW92ZSgpLFMubWVyZ2UoW10saS5jaGlsZE5vZGVzKSkpO3ZhciByLGksb30sUy5mbi5sb2FkPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYT10aGlzLHM9ZS5pbmRleE9mKFwiIFwiKTtyZXR1cm4tMTxzJiYocj12dChlLnNsaWNlKHMpKSxlPWUuc2xpY2UoMCxzKSksbSh0KT8obj10LHQ9dm9pZCAwKTp0JiZcIm9iamVjdFwiPT10eXBlb2YgdCYmKGk9XCJQT1NUXCIpLDA8YS5sZW5ndGgmJlMuYWpheCh7dXJsOmUsdHlwZTppfHxcIkdFVFwiLGRhdGFUeXBlOlwiaHRtbFwiLGRhdGE6dH0pLmRvbmUoZnVuY3Rpb24oZSl7bz1hcmd1bWVudHMsYS5odG1sKHI/UyhcIjxkaXY+XCIpLmFwcGVuZChTLnBhcnNlSFRNTChlKSkuZmluZChyKTplKX0pLmFsd2F5cyhuJiZmdW5jdGlvbihlLHQpe2EuZWFjaChmdW5jdGlvbigpe24uYXBwbHkodGhpcyxvfHxbZS5yZXNwb25zZVRleHQsdCxlXSl9KX0pLHRoaXN9LFMuZXhwci5wc2V1ZG9zLmFuaW1hdGVkPWZ1bmN0aW9uKHQpe3JldHVybiBTLmdyZXAoUy50aW1lcnMsZnVuY3Rpb24oZSl7cmV0dXJuIHQ9PT1lLmVsZW19KS5sZW5ndGh9LFMub2Zmc2V0PXtzZXRPZmZzZXQ6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhLHMsdSxsPVMuY3NzKGUsXCJwb3NpdGlvblwiKSxjPVMoZSksZj17fTtcInN0YXRpY1wiPT09bCYmKGUuc3R5bGUucG9zaXRpb249XCJyZWxhdGl2ZVwiKSxzPWMub2Zmc2V0KCksbz1TLmNzcyhlLFwidG9wXCIpLHU9Uy5jc3MoZSxcImxlZnRcIiksKFwiYWJzb2x1dGVcIj09PWx8fFwiZml4ZWRcIj09PWwpJiYtMTwobyt1KS5pbmRleE9mKFwiYXV0b1wiKT8oYT0ocj1jLnBvc2l0aW9uKCkpLnRvcCxpPXIubGVmdCk6KGE9cGFyc2VGbG9hdChvKXx8MCxpPXBhcnNlRmxvYXQodSl8fDApLG0odCkmJih0PXQuY2FsbChlLG4sUy5leHRlbmQoe30scykpKSxudWxsIT10LnRvcCYmKGYudG9wPXQudG9wLXMudG9wK2EpLG51bGwhPXQubGVmdCYmKGYubGVmdD10LmxlZnQtcy5sZWZ0K2kpLFwidXNpbmdcImluIHQ/dC51c2luZy5jYWxsKGUsZik6KFwibnVtYmVyXCI9PXR5cGVvZiBmLnRvcCYmKGYudG9wKz1cInB4XCIpLFwibnVtYmVyXCI9PXR5cGVvZiBmLmxlZnQmJihmLmxlZnQrPVwicHhcIiksYy5jc3MoZikpfX0sUy5mbi5leHRlbmQoe29mZnNldDpmdW5jdGlvbih0KXtpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiB2b2lkIDA9PT10P3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKGUpe1Mub2Zmc2V0LnNldE9mZnNldCh0aGlzLHQsZSl9KTt2YXIgZSxuLHI9dGhpc1swXTtyZXR1cm4gcj9yLmdldENsaWVudFJlY3RzKCkubGVuZ3RoPyhlPXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksbj1yLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcse3RvcDplLnRvcCtuLnBhZ2VZT2Zmc2V0LGxlZnQ6ZS5sZWZ0K24ucGFnZVhPZmZzZXR9KTp7dG9wOjAsbGVmdDowfTp2b2lkIDB9LHBvc2l0aW9uOmZ1bmN0aW9uKCl7aWYodGhpc1swXSl7dmFyIGUsdCxuLHI9dGhpc1swXSxpPXt0b3A6MCxsZWZ0OjB9O2lmKFwiZml4ZWRcIj09PVMuY3NzKHIsXCJwb3NpdGlvblwiKSl0PXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7ZWxzZXt0PXRoaXMub2Zmc2V0KCksbj1yLm93bmVyRG9jdW1lbnQsZT1yLm9mZnNldFBhcmVudHx8bi5kb2N1bWVudEVsZW1lbnQ7d2hpbGUoZSYmKGU9PT1uLmJvZHl8fGU9PT1uLmRvY3VtZW50RWxlbWVudCkmJlwic3RhdGljXCI9PT1TLmNzcyhlLFwicG9zaXRpb25cIikpZT1lLnBhcmVudE5vZGU7ZSYmZSE9PXImJjE9PT1lLm5vZGVUeXBlJiYoKGk9UyhlKS5vZmZzZXQoKSkudG9wKz1TLmNzcyhlLFwiYm9yZGVyVG9wV2lkdGhcIiwhMCksaS5sZWZ0Kz1TLmNzcyhlLFwiYm9yZGVyTGVmdFdpZHRoXCIsITApKX1yZXR1cm57dG9wOnQudG9wLWkudG9wLVMuY3NzKHIsXCJtYXJnaW5Ub3BcIiwhMCksbGVmdDp0LmxlZnQtaS5sZWZ0LVMuY3NzKHIsXCJtYXJnaW5MZWZ0XCIsITApfX19LG9mZnNldFBhcmVudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBlPXRoaXMub2Zmc2V0UGFyZW50O3doaWxlKGUmJlwic3RhdGljXCI9PT1TLmNzcyhlLFwicG9zaXRpb25cIikpZT1lLm9mZnNldFBhcmVudDtyZXR1cm4gZXx8cmV9KX19KSxTLmVhY2goe3Njcm9sbExlZnQ6XCJwYWdlWE9mZnNldFwiLHNjcm9sbFRvcDpcInBhZ2VZT2Zmc2V0XCJ9LGZ1bmN0aW9uKHQsaSl7dmFyIG89XCJwYWdlWU9mZnNldFwiPT09aTtTLmZuW3RdPWZ1bmN0aW9uKGUpe3JldHVybiAkKHRoaXMsZnVuY3Rpb24oZSx0LG4pe3ZhciByO2lmKHgoZSk/cj1lOjk9PT1lLm5vZGVUeXBlJiYocj1lLmRlZmF1bHRWaWV3KSx2b2lkIDA9PT1uKXJldHVybiByP3JbaV06ZVt0XTtyP3Iuc2Nyb2xsVG8obz9yLnBhZ2VYT2Zmc2V0Om4sbz9uOnIucGFnZVlPZmZzZXQpOmVbdF09bn0sdCxlLGFyZ3VtZW50cy5sZW5ndGgpfX0pLFMuZWFjaChbXCJ0b3BcIixcImxlZnRcIl0sZnVuY3Rpb24oZSxuKXtTLmNzc0hvb2tzW25dPSRlKHkucGl4ZWxQb3NpdGlvbixmdW5jdGlvbihlLHQpe2lmKHQpcmV0dXJuIHQ9QmUoZSxuKSxNZS50ZXN0KHQpP1MoZSkucG9zaXRpb24oKVtuXStcInB4XCI6dH0pfSksUy5lYWNoKHtIZWlnaHQ6XCJoZWlnaHRcIixXaWR0aDpcIndpZHRoXCJ9LGZ1bmN0aW9uKGEscyl7Uy5lYWNoKHtwYWRkaW5nOlwiaW5uZXJcIithLGNvbnRlbnQ6cyxcIlwiOlwib3V0ZXJcIithfSxmdW5jdGlvbihyLG8pe1MuZm5bb109ZnVuY3Rpb24oZSx0KXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoJiYocnx8XCJib29sZWFuXCIhPXR5cGVvZiBlKSxpPXJ8fCghMD09PWV8fCEwPT09dD9cIm1hcmdpblwiOlwiYm9yZGVyXCIpO3JldHVybiAkKHRoaXMsZnVuY3Rpb24oZSx0LG4pe3ZhciByO3JldHVybiB4KGUpPzA9PT1vLmluZGV4T2YoXCJvdXRlclwiKT9lW1wiaW5uZXJcIithXTplLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtcImNsaWVudFwiK2FdOjk9PT1lLm5vZGVUeXBlPyhyPWUuZG9jdW1lbnRFbGVtZW50LE1hdGgubWF4KGUuYm9keVtcInNjcm9sbFwiK2FdLHJbXCJzY3JvbGxcIithXSxlLmJvZHlbXCJvZmZzZXRcIithXSxyW1wib2Zmc2V0XCIrYV0scltcImNsaWVudFwiK2FdKSk6dm9pZCAwPT09bj9TLmNzcyhlLHQsaSk6Uy5zdHlsZShlLHQsbixpKX0scyxuP2U6dm9pZCAwLG4pfX0pfSksUy5lYWNoKFtcImFqYXhTdGFydFwiLFwiYWpheFN0b3BcIixcImFqYXhDb21wbGV0ZVwiLFwiYWpheEVycm9yXCIsXCJhamF4U3VjY2Vzc1wiLFwiYWpheFNlbmRcIl0sZnVuY3Rpb24oZSx0KXtTLmZuW3RdPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLm9uKHQsZSl9fSksUy5mbi5leHRlbmQoe2JpbmQ6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiB0aGlzLm9uKGUsbnVsbCx0LG4pfSx1bmJpbmQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5vZmYoZSxudWxsLHQpfSxkZWxlZ2F0ZTpmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gdGhpcy5vbih0LGUsbixyKX0sdW5kZWxlZ2F0ZTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIDE9PT1hcmd1bWVudHMubGVuZ3RoP3RoaXMub2ZmKGUsXCIqKlwiKTp0aGlzLm9mZih0LGV8fFwiKipcIixuKX0saG92ZXI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5tb3VzZWVudGVyKGUpLm1vdXNlbGVhdmUodHx8ZSl9fSksUy5lYWNoKFwiYmx1ciBmb2N1cyBmb2N1c2luIGZvY3Vzb3V0IHJlc2l6ZSBzY3JvbGwgY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgY2hhbmdlIHNlbGVjdCBzdWJtaXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBjb250ZXh0bWVudVwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihlLG4pe1MuZm5bbl09ZnVuY3Rpb24oZSx0KXtyZXR1cm4gMDxhcmd1bWVudHMubGVuZ3RoP3RoaXMub24obixudWxsLGUsdCk6dGhpcy50cmlnZ2VyKG4pfX0pO3ZhciBHdD0vXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2c7Uy5wcm94eT1mdW5jdGlvbihlLHQpe3ZhciBuLHIsaTtpZihcInN0cmluZ1wiPT10eXBlb2YgdCYmKG49ZVt0XSx0PWUsZT1uKSxtKGUpKXJldHVybiByPXMuY2FsbChhcmd1bWVudHMsMiksKGk9ZnVuY3Rpb24oKXtyZXR1cm4gZS5hcHBseSh0fHx0aGlzLHIuY29uY2F0KHMuY2FsbChhcmd1bWVudHMpKSl9KS5ndWlkPWUuZ3VpZD1lLmd1aWR8fFMuZ3VpZCsrLGl9LFMuaG9sZFJlYWR5PWZ1bmN0aW9uKGUpe2U/Uy5yZWFkeVdhaXQrKzpTLnJlYWR5KCEwKX0sUy5pc0FycmF5PUFycmF5LmlzQXJyYXksUy5wYXJzZUpTT049SlNPTi5wYXJzZSxTLm5vZGVOYW1lPUEsUy5pc0Z1bmN0aW9uPW0sUy5pc1dpbmRvdz14LFMuY2FtZWxDYXNlPVgsUy50eXBlPXcsUy5ub3c9RGF0ZS5ub3csUy5pc051bWVyaWM9ZnVuY3Rpb24oZSl7dmFyIHQ9Uy50eXBlKGUpO3JldHVybihcIm51bWJlclwiPT09dHx8XCJzdHJpbmdcIj09PXQpJiYhaXNOYU4oZS1wYXJzZUZsb2F0KGUpKX0sUy50cmltPWZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP1wiXCI6KGUrXCJcIikucmVwbGFjZShHdCxcIlwiKX0sXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kJiZkZWZpbmUoXCJqcXVlcnlcIixbXSxmdW5jdGlvbigpe3JldHVybiBTfSk7dmFyIFl0PUMualF1ZXJ5LFF0PUMuJDtyZXR1cm4gUy5ub0NvbmZsaWN0PWZ1bmN0aW9uKGUpe3JldHVybiBDLiQ9PT1TJiYoQy4kPVF0KSxlJiZDLmpRdWVyeT09PVMmJihDLmpRdWVyeT1ZdCksU30sXCJ1bmRlZmluZWRcIj09dHlwZW9mIGUmJihDLmpRdWVyeT1DLiQ9UyksU30pO1xuLy8gRE9NLmV2ZW50Lm1vdmVcbi8vXG4vLyAyLjAuMFxuLy9cbi8vIFN0ZXBoZW4gQmFuZFxuLy9cbi8vIFRyaWdnZXJzICdtb3Zlc3RhcnQnLCAnbW92ZScgYW5kICdtb3ZlZW5kJyBldmVudHMgYWZ0ZXJcbi8vIG1vdXNlbW92ZXMgZm9sbG93aW5nIGEgbW91c2Vkb3duIGNyb3NzIGEgZGlzdGFuY2UgdGhyZXNob2xkLFxuLy8gc2ltaWxhciB0byB0aGUgbmF0aXZlICdkcmFnc3RhcnQnLCAnZHJhZycgYW5kICdkcmFnZW5kJyBldmVudHMuXG4vLyBNb3ZlIGV2ZW50cyBhcmUgdGhyb3R0bGVkIHRvIGFuaW1hdGlvbiBmcmFtZXMuIE1vdmUgZXZlbnQgb2JqZWN0c1xuLy8gaGF2ZSB0aGUgcHJvcGVydGllczpcbi8vXG4vLyBwYWdlWDpcbi8vIHBhZ2VZOiAgICAgUGFnZSBjb29yZGluYXRlcyBvZiBwb2ludGVyLlxuLy8gc3RhcnRYOlxuLy8gc3RhcnRZOiAgICBQYWdlIGNvb3JkaW5hdGVzIG9mIHBvaW50ZXIgYXQgbW92ZXN0YXJ0LlxuLy8gZGlzdFg6XG4vLyBkaXN0WTogICAgIERpc3RhbmNlIHRoZSBwb2ludGVyIGhhcyBtb3ZlZCBzaW5jZSBtb3Zlc3RhcnQuXG4vLyBkZWx0YVg6XG4vLyBkZWx0YVk6ICAgIERpc3RhbmNlIHRoZSBmaW5nZXIgaGFzIG1vdmVkIHNpbmNlIGxhc3QgZXZlbnQuXG4vLyB2ZWxvY2l0eVg6XG4vLyB2ZWxvY2l0eVk6IEF2ZXJhZ2UgdmVsb2NpdHkgb3ZlciBsYXN0IGZldyBldmVudHMuXG5cblxuKGZ1bmN0aW9uKGZuKSB7XG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFtdLCBmbik7XG4gICAgfSBlbHNlIGlmICgodHlwZW9mIG1vZHVsZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBtb2R1bGUgIT09IG51bGwpICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZm47XG5cdH0gZWxzZSB7XG5cdFx0Zm4oKTtcblx0fVxufSkoZnVuY3Rpb24oKXtcblx0dmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgd2luZG93LmpRdWVyeSAmJiBqUXVlcnkuZXh0ZW5kO1xuXG5cdC8vIE51bWJlciBvZiBwaXhlbHMgYSBwcmVzc2VkIHBvaW50ZXIgdHJhdmVscyBiZWZvcmUgbW92ZXN0YXJ0XG5cdC8vIGV2ZW50IGlzIGZpcmVkLlxuXHR2YXIgdGhyZXNob2xkID0gODtcblxuXHQvLyBTaGltIGZvciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUsIGZhbGxpbmcgYmFjayB0byB0aW1lci4gU2VlOlxuXHQvLyBzZWUgaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cblx0dmFyIHJlcXVlc3RGcmFtZSA9IChmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0XHR3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0XHR3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0XHR3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuXHRcdFx0d2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0XHRmdW5jdGlvbihmbiwgZWxlbWVudCl7XG5cdFx0XHRcdHJldHVybiB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0XHRcdGZuKCk7XG5cdFx0XHRcdH0sIDI1KTtcblx0XHRcdH1cblx0XHQpO1xuXHR9KSgpO1xuXG5cdC8vIFNoaW0gZm9yIGN1c3RvbUV2ZW50XG5cdC8vIHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ3VzdG9tRXZlbnQvQ3VzdG9tRXZlbnQjUG9seWZpbGxcblx0KGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoIHR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQgPT09IFwiZnVuY3Rpb25cIiApIHJldHVybiBmYWxzZTtcblx0XHRmdW5jdGlvbiBDdXN0b21FdmVudCAoIGV2ZW50LCBwYXJhbXMgKSB7XG5cdFx0XHRwYXJhbXMgPSBwYXJhbXMgfHwgeyBidWJibGVzOiBmYWxzZSwgY2FuY2VsYWJsZTogZmFsc2UsIGRldGFpbDogdW5kZWZpbmVkIH07XG5cdFx0XHR2YXIgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoICdDdXN0b21FdmVudCcgKTtcblx0XHRcdGV2dC5pbml0Q3VzdG9tRXZlbnQoIGV2ZW50LCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUsIHBhcmFtcy5kZXRhaWwgKTtcblx0XHRcdHJldHVybiBldnQ7XG5cdFx0fVxuXG5cdFx0Q3VzdG9tRXZlbnQucHJvdG90eXBlID0gd2luZG93LkV2ZW50LnByb3RvdHlwZTtcblx0XHR3aW5kb3cuQ3VzdG9tRXZlbnQgPSBDdXN0b21FdmVudDtcblx0fSkoKTtcblxuXHR2YXIgaWdub3JlVGFncyA9IHtcblx0XHRcdHRleHRhcmVhOiB0cnVlLFxuXHRcdFx0aW5wdXQ6IHRydWUsXG5cdFx0XHRzZWxlY3Q6IHRydWUsXG5cdFx0XHRidXR0b246IHRydWVcblx0XHR9O1xuXG5cdHZhciBtb3VzZWV2ZW50cyA9IHtcblx0XHRtb3ZlOiAgICdtb3VzZW1vdmUnLFxuXHRcdGNhbmNlbDogJ21vdXNldXAgZHJhZ3N0YXJ0Jyxcblx0XHRlbmQ6ICAgICdtb3VzZXVwJ1xuXHR9O1xuXG5cdHZhciB0b3VjaGV2ZW50cyA9IHtcblx0XHRtb3ZlOiAgICd0b3VjaG1vdmUnLFxuXHRcdGNhbmNlbDogJ3RvdWNoZW5kJyxcblx0XHRlbmQ6ICAgICd0b3VjaGVuZCdcblx0fTtcblxuXHR2YXIgcnNwYWNlcyA9IC9cXHMrLztcblxuXG5cdC8vIERPTSBFdmVudHNcblxuXHR2YXIgZXZlbnRPcHRpb25zID0geyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlIH07XG5cblx0dmFyIGV2ZW50c1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCgnZXZlbnRzJykgOiB7fTtcblxuXHRmdW5jdGlvbiBjcmVhdGVFdmVudCh0eXBlKSB7XG5cdFx0cmV0dXJuIG5ldyBDdXN0b21FdmVudCh0eXBlLCBldmVudE9wdGlvbnMpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0RXZlbnRzKG5vZGUpIHtcblx0XHRyZXR1cm4gbm9kZVtldmVudHNTeW1ib2xdIHx8IChub2RlW2V2ZW50c1N5bWJvbF0gPSB7fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBvbihub2RlLCB0eXBlcywgZm4sIGRhdGEsIHNlbGVjdG9yKSB7XG5cdFx0dHlwZXMgPSB0eXBlcy5zcGxpdChyc3BhY2VzKTtcblxuXHRcdHZhciBldmVudHMgPSBnZXRFdmVudHMobm9kZSk7XG5cdFx0dmFyIGkgPSB0eXBlcy5sZW5ndGg7XG5cdFx0dmFyIGhhbmRsZXJzLCB0eXBlO1xuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlcihlKSB7IGZuKGUsIGRhdGEpOyB9XG5cblx0XHR3aGlsZSAoaS0tKSB7XG5cdFx0XHR0eXBlID0gdHlwZXNbaV07XG5cdFx0XHRoYW5kbGVycyA9IGV2ZW50c1t0eXBlXSB8fCAoZXZlbnRzW3R5cGVdID0gW10pO1xuXHRcdFx0aGFuZGxlcnMucHVzaChbZm4sIGhhbmRsZXJdKTtcblx0XHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBvZmYobm9kZSwgdHlwZXMsIGZuLCBzZWxlY3Rvcikge1xuXHRcdHR5cGVzID0gdHlwZXMuc3BsaXQocnNwYWNlcyk7XG5cblx0XHR2YXIgZXZlbnRzID0gZ2V0RXZlbnRzKG5vZGUpO1xuXHRcdHZhciBpID0gdHlwZXMubGVuZ3RoO1xuXHRcdHZhciB0eXBlLCBoYW5kbGVycywgaztcblxuXHRcdGlmICghZXZlbnRzKSB7IHJldHVybjsgfVxuXG5cdFx0d2hpbGUgKGktLSkge1xuXHRcdFx0dHlwZSA9IHR5cGVzW2ldO1xuXHRcdFx0aGFuZGxlcnMgPSBldmVudHNbdHlwZV07XG5cdFx0XHRpZiAoIWhhbmRsZXJzKSB7IGNvbnRpbnVlOyB9XG5cdFx0XHRrID0gaGFuZGxlcnMubGVuZ3RoO1xuXHRcdFx0d2hpbGUgKGstLSkge1xuXHRcdFx0XHRpZiAoaGFuZGxlcnNba11bMF0gPT09IGZuKSB7XG5cdFx0XHRcdFx0bm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXJzW2tdWzFdKTtcblx0XHRcdFx0XHRoYW5kbGVycy5zcGxpY2UoaywgMSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiB0cmlnZ2VyKG5vZGUsIHR5cGUsIHByb3BlcnRpZXMpIHtcblx0XHQvLyBEb24ndCBjYWNoZSBldmVudHMuIEl0IHByZXZlbnRzIHlvdSBmcm9tIHRyaWdnZXJpbmcgYW4gZXZlbnQgb2YgYVxuXHRcdC8vIGdpdmVuIHR5cGUgZnJvbSBpbnNpZGUgdGhlIGhhbmRsZXIgb2YgYW5vdGhlciBldmVudCBvZiB0aGF0IHR5cGUuXG5cdFx0dmFyIGV2ZW50ID0gY3JlYXRlRXZlbnQodHlwZSk7XG5cdFx0aWYgKHByb3BlcnRpZXMpIHsgYXNzaWduKGV2ZW50LCBwcm9wZXJ0aWVzKTsgfVxuXHRcdG5vZGUuZGlzcGF0Y2hFdmVudChldmVudCk7XG5cdH1cblxuXG5cdC8vIENvbnN0cnVjdG9yc1xuXG5cdGZ1bmN0aW9uIFRpbWVyKGZuKXtcblx0XHR2YXIgY2FsbGJhY2sgPSBmbixcblx0XHQgICAgYWN0aXZlID0gZmFsc2UsXG5cdFx0ICAgIHJ1bm5pbmcgPSBmYWxzZTtcblxuXHRcdGZ1bmN0aW9uIHRyaWdnZXIodGltZSkge1xuXHRcdFx0aWYgKGFjdGl2ZSl7XG5cdFx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0XHRcdHJlcXVlc3RGcmFtZSh0cmlnZ2VyKTtcblx0XHRcdFx0cnVubmluZyA9IHRydWU7XG5cdFx0XHRcdGFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHJ1bm5pbmcgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLmtpY2sgPSBmdW5jdGlvbihmbikge1xuXHRcdFx0YWN0aXZlID0gdHJ1ZTtcblx0XHRcdGlmICghcnVubmluZykgeyB0cmlnZ2VyKCk7IH1cblx0XHR9O1xuXG5cdFx0dGhpcy5lbmQgPSBmdW5jdGlvbihmbikge1xuXHRcdFx0dmFyIGNiID0gY2FsbGJhY2s7XG5cblx0XHRcdGlmICghZm4pIHsgcmV0dXJuOyB9XG5cblx0XHRcdC8vIElmIHRoZSB0aW1lciBpcyBub3QgcnVubmluZywgc2ltcGx5IGNhbGwgdGhlIGVuZCBjYWxsYmFjay5cblx0XHRcdGlmICghcnVubmluZykge1xuXHRcdFx0XHRmbigpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gSWYgdGhlIHRpbWVyIGlzIHJ1bm5pbmcsIGFuZCBoYXMgYmVlbiBraWNrZWQgbGF0ZWx5LCB0aGVuXG5cdFx0XHQvLyBxdWV1ZSB1cCB0aGUgY3VycmVudCBjYWxsYmFjayBhbmQgdGhlIGVuZCBjYWxsYmFjaywgb3RoZXJ3aXNlXG5cdFx0XHQvLyBqdXN0IHRoZSBlbmQgY2FsbGJhY2suXG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0Y2FsbGJhY2sgPSBhY3RpdmUgP1xuXHRcdFx0XHRcdGZ1bmN0aW9uKCl7IGNiKCk7IGZuKCk7IH0gOlxuXHRcdFx0XHRcdGZuIDtcblxuXHRcdFx0XHRhY3RpdmUgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXG5cdC8vIEZ1bmN0aW9uc1xuXG5cdGZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5cdGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdH1cblxuXHRmdW5jdGlvbiBpc0lnbm9yZVRhZyhlKSB7XG5cdFx0cmV0dXJuICEhaWdub3JlVGFnc1tlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCldO1xuXHR9XG5cblx0ZnVuY3Rpb24gaXNQcmltYXJ5QnV0dG9uKGUpIHtcblx0XHQvLyBJZ25vcmUgbW91c2Vkb3ducyBvbiBhbnkgYnV0dG9uIG90aGVyIHRoYW4gdGhlIGxlZnQgKG9yIHByaW1hcnkpXG5cdFx0Ly8gbW91c2UgYnV0dG9uLCBvciB3aGVuIGEgbW9kaWZpZXIga2V5IGlzIHByZXNzZWQuXG5cdFx0cmV0dXJuIChlLndoaWNoID09PSAxICYmICFlLmN0cmxLZXkgJiYgIWUuYWx0S2V5KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGlkZW50aWZpZWRUb3VjaCh0b3VjaExpc3QsIGlkKSB7XG5cdFx0dmFyIGksIGw7XG5cblx0XHRpZiAodG91Y2hMaXN0LmlkZW50aWZpZWRUb3VjaCkge1xuXHRcdFx0cmV0dXJuIHRvdWNoTGlzdC5pZGVudGlmaWVkVG91Y2goaWQpO1xuXHRcdH1cblxuXHRcdC8vIHRvdWNoTGlzdC5pZGVudGlmaWVkVG91Y2goKSBkb2VzIG5vdCBleGlzdCBpblxuXHRcdC8vIHdlYmtpdCB5ZXTigKYgd2UgbXVzdCBkbyB0aGUgc2VhcmNoIG91cnNlbHZlcy4uLlxuXG5cdFx0aSA9IC0xO1xuXHRcdGwgPSB0b3VjaExpc3QubGVuZ3RoO1xuXG5cdFx0d2hpbGUgKCsraSA8IGwpIHtcblx0XHRcdGlmICh0b3VjaExpc3RbaV0uaWRlbnRpZmllciA9PT0gaWQpIHtcblx0XHRcdFx0cmV0dXJuIHRvdWNoTGlzdFtpXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBjaGFuZ2VkVG91Y2goZSwgZGF0YSkge1xuXHRcdHZhciB0b3VjaCA9IGlkZW50aWZpZWRUb3VjaChlLmNoYW5nZWRUb3VjaGVzLCBkYXRhLmlkZW50aWZpZXIpO1xuXG5cdFx0Ly8gVGhpcyBpc24ndCB0aGUgdG91Y2ggeW91J3JlIGxvb2tpbmcgZm9yLlxuXHRcdGlmICghdG91Y2gpIHsgcmV0dXJuOyB9XG5cblx0XHQvLyBDaHJvbWUgQW5kcm9pZCAoYXQgbGVhc3QpIGluY2x1ZGVzIHRvdWNoZXMgdGhhdCBoYXZlIG5vdFxuXHRcdC8vIGNoYW5nZWQgaW4gZS5jaGFuZ2VkVG91Y2hlcy4gVGhhdCdzIGEgYml0IGFubm95aW5nLiBDaGVja1xuXHRcdC8vIHRoYXQgdGhpcyB0b3VjaCBoYXMgY2hhbmdlZC5cblx0XHRpZiAodG91Y2gucGFnZVggPT09IGRhdGEucGFnZVggJiYgdG91Y2gucGFnZVkgPT09IGRhdGEucGFnZVkpIHsgcmV0dXJuOyB9XG5cblx0XHRyZXR1cm4gdG91Y2g7XG5cdH1cblxuXG5cdC8vIEhhbmRsZXJzIHRoYXQgZGVjaWRlIHdoZW4gdGhlIGZpcnN0IG1vdmVzdGFydCBpcyB0cmlnZ2VyZWRcblxuXHRmdW5jdGlvbiBtb3VzZWRvd24oZSl7XG5cdFx0Ly8gSWdub3JlIG5vbi1wcmltYXJ5IGJ1dHRvbnNcblx0XHRpZiAoIWlzUHJpbWFyeUJ1dHRvbihlKSkgeyByZXR1cm47IH1cblxuXHRcdC8vIElnbm9yZSBmb3JtIGFuZCBpbnRlcmFjdGl2ZSBlbGVtZW50c1xuXHRcdGlmIChpc0lnbm9yZVRhZyhlKSkgeyByZXR1cm47IH1cblxuXHRcdG9uKGRvY3VtZW50LCBtb3VzZWV2ZW50cy5tb3ZlLCBtb3VzZW1vdmUsIGUpO1xuXHRcdG9uKGRvY3VtZW50LCBtb3VzZWV2ZW50cy5jYW5jZWwsIG1vdXNlZW5kLCBlKTtcblx0fVxuXG5cdGZ1bmN0aW9uIG1vdXNlbW92ZShlLCBkYXRhKXtcblx0XHRjaGVja1RocmVzaG9sZChlLCBkYXRhLCBlLCByZW1vdmVNb3VzZSk7XG5cdH1cblxuXHRmdW5jdGlvbiBtb3VzZWVuZChlLCBkYXRhKSB7XG5cdFx0cmVtb3ZlTW91c2UoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbW92ZU1vdXNlKCkge1xuXHRcdG9mZihkb2N1bWVudCwgbW91c2VldmVudHMubW92ZSwgbW91c2Vtb3ZlKTtcblx0XHRvZmYoZG9jdW1lbnQsIG1vdXNlZXZlbnRzLmNhbmNlbCwgbW91c2VlbmQpO1xuXHR9XG5cblx0ZnVuY3Rpb24gdG91Y2hzdGFydChlKSB7XG5cdFx0Ly8gRG9uJ3QgZ2V0IGluIHRoZSB3YXkgb2YgaW50ZXJhY3Rpb24gd2l0aCBmb3JtIGVsZW1lbnRzXG5cdFx0aWYgKGlnbm9yZVRhZ3NbZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpXSkgeyByZXR1cm47IH1cblxuXHRcdHZhciB0b3VjaCA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XG5cblx0XHQvLyBpT1MgbGl2ZSB1cGRhdGVzIHRoZSB0b3VjaCBvYmplY3RzIHdoZXJlYXMgQW5kcm9pZCBnaXZlcyB1cyBjb3BpZXMuXG5cdFx0Ly8gVGhhdCBtZWFucyB3ZSBjYW4ndCB0cnVzdCB0aGUgdG91Y2hzdGFydCBvYmplY3QgdG8gc3RheSB0aGUgc2FtZSxcblx0XHQvLyBzbyB3ZSBtdXN0IGNvcHkgdGhlIGRhdGEuIFRoaXMgb2JqZWN0IGFjdHMgYXMgYSB0ZW1wbGF0ZSBmb3Jcblx0XHQvLyBtb3Zlc3RhcnQsIG1vdmUgYW5kIG1vdmVlbmQgZXZlbnQgb2JqZWN0cy5cblx0XHR2YXIgZGF0YSA9IHtcblx0XHRcdHRhcmdldDogICAgIHRvdWNoLnRhcmdldCxcblx0XHRcdHBhZ2VYOiAgICAgIHRvdWNoLnBhZ2VYLFxuXHRcdFx0cGFnZVk6ICAgICAgdG91Y2gucGFnZVksXG5cdFx0XHRpZGVudGlmaWVyOiB0b3VjaC5pZGVudGlmaWVyLFxuXG5cdFx0XHQvLyBUaGUgb25seSB3YXkgdG8gbWFrZSBoYW5kbGVycyBpbmRpdmlkdWFsbHkgdW5iaW5kYWJsZSBpcyBieVxuXHRcdFx0Ly8gbWFraW5nIHRoZW0gdW5pcXVlLlxuXHRcdFx0dG91Y2htb3ZlOiAgZnVuY3Rpb24oZSwgZGF0YSkgeyB0b3VjaG1vdmUoZSwgZGF0YSk7IH0sXG5cdFx0XHR0b3VjaGVuZDogICBmdW5jdGlvbihlLCBkYXRhKSB7IHRvdWNoZW5kKGUsIGRhdGEpOyB9XG5cdFx0fTtcblxuXHRcdG9uKGRvY3VtZW50LCB0b3VjaGV2ZW50cy5tb3ZlLCBkYXRhLnRvdWNobW92ZSwgZGF0YSk7XG5cdFx0b24oZG9jdW1lbnQsIHRvdWNoZXZlbnRzLmNhbmNlbCwgZGF0YS50b3VjaGVuZCwgZGF0YSk7XG5cdH1cblxuXHRmdW5jdGlvbiB0b3VjaG1vdmUoZSwgZGF0YSkge1xuXHRcdHZhciB0b3VjaCA9IGNoYW5nZWRUb3VjaChlLCBkYXRhKTtcblx0XHRpZiAoIXRvdWNoKSB7IHJldHVybjsgfVxuXHRcdGNoZWNrVGhyZXNob2xkKGUsIGRhdGEsIHRvdWNoLCByZW1vdmVUb3VjaCk7XG5cdH1cblxuXHRmdW5jdGlvbiB0b3VjaGVuZChlLCBkYXRhKSB7XG5cdFx0dmFyIHRvdWNoID0gaWRlbnRpZmllZFRvdWNoKGUuY2hhbmdlZFRvdWNoZXMsIGRhdGEuaWRlbnRpZmllcik7XG5cdFx0aWYgKCF0b3VjaCkgeyByZXR1cm47IH1cblx0XHRyZW1vdmVUb3VjaChkYXRhKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbW92ZVRvdWNoKGRhdGEpIHtcblx0XHRvZmYoZG9jdW1lbnQsIHRvdWNoZXZlbnRzLm1vdmUsIGRhdGEudG91Y2htb3ZlKTtcblx0XHRvZmYoZG9jdW1lbnQsIHRvdWNoZXZlbnRzLmNhbmNlbCwgZGF0YS50b3VjaGVuZCk7XG5cdH1cblxuXHRmdW5jdGlvbiBjaGVja1RocmVzaG9sZChlLCBkYXRhLCB0b3VjaCwgZm4pIHtcblx0XHR2YXIgZGlzdFggPSB0b3VjaC5wYWdlWCAtIGRhdGEucGFnZVg7XG5cdFx0dmFyIGRpc3RZID0gdG91Y2gucGFnZVkgLSBkYXRhLnBhZ2VZO1xuXG5cdFx0Ly8gRG8gbm90aGluZyBpZiB0aGUgdGhyZXNob2xkIGhhcyBub3QgYmVlbiBjcm9zc2VkLlxuXHRcdGlmICgoZGlzdFggKiBkaXN0WCkgKyAoZGlzdFkgKiBkaXN0WSkgPCAodGhyZXNob2xkICogdGhyZXNob2xkKSkgeyByZXR1cm47IH1cblxuXHRcdHRyaWdnZXJTdGFydChlLCBkYXRhLCB0b3VjaCwgZGlzdFgsIGRpc3RZLCBmbik7XG5cdH1cblxuXHRmdW5jdGlvbiB0cmlnZ2VyU3RhcnQoZSwgZGF0YSwgdG91Y2gsIGRpc3RYLCBkaXN0WSwgZm4pIHtcblx0XHR2YXIgdG91Y2hlcyA9IGUudGFyZ2V0VG91Y2hlcztcblx0XHR2YXIgdGltZSA9IGUudGltZVN0YW1wIC0gZGF0YS50aW1lU3RhbXA7XG5cblx0XHQvLyBDcmVhdGUgYSBtb3Zlc3RhcnQgb2JqZWN0IHdpdGggc29tZSBzcGVjaWFsIHByb3BlcnRpZXMgdGhhdFxuXHRcdC8vIGFyZSBwYXNzZWQgb25seSB0byB0aGUgbW92ZXN0YXJ0IGhhbmRsZXJzLlxuXHRcdHZhciB0ZW1wbGF0ZSA9IHtcblx0XHRcdGFsdEtleTogICAgIGUuYWx0S2V5LFxuXHRcdFx0Y3RybEtleTogICAgZS5jdHJsS2V5LFxuXHRcdFx0c2hpZnRLZXk6ICAgZS5zaGlmdEtleSxcblx0XHRcdHN0YXJ0WDogICAgIGRhdGEucGFnZVgsXG5cdFx0XHRzdGFydFk6ICAgICBkYXRhLnBhZ2VZLFxuXHRcdFx0ZGlzdFg6ICAgICAgZGlzdFgsXG5cdFx0XHRkaXN0WTogICAgICBkaXN0WSxcblx0XHRcdGRlbHRhWDogICAgIGRpc3RYLFxuXHRcdFx0ZGVsdGFZOiAgICAgZGlzdFksXG5cdFx0XHRwYWdlWDogICAgICB0b3VjaC5wYWdlWCxcblx0XHRcdHBhZ2VZOiAgICAgIHRvdWNoLnBhZ2VZLFxuXHRcdFx0dmVsb2NpdHlYOiAgZGlzdFggLyB0aW1lLFxuXHRcdFx0dmVsb2NpdHlZOiAgZGlzdFkgLyB0aW1lLFxuXHRcdFx0aWRlbnRpZmllcjogZGF0YS5pZGVudGlmaWVyLFxuXHRcdFx0dGFyZ2V0VG91Y2hlczogdG91Y2hlcyxcblx0XHRcdGZpbmdlcjogdG91Y2hlcyA/IHRvdWNoZXMubGVuZ3RoIDogMSxcblx0XHRcdGVuYWJsZU1vdmU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR0aGlzLm1vdmVFbmFibGVkID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5lbmFibGVNb3ZlID0gbm9vcDtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvLyBUcmlnZ2VyIHRoZSBtb3Zlc3RhcnQgZXZlbnQuXG5cdFx0dHJpZ2dlcihkYXRhLnRhcmdldCwgJ21vdmVzdGFydCcsIHRlbXBsYXRlKTtcblxuXHRcdC8vIFVuYmluZCBoYW5kbGVycyB0aGF0IHRyYWNrZWQgdGhlIHRvdWNoIG9yIG1vdXNlIHVwIHRpbGwgbm93LlxuXHRcdGZuKGRhdGEpO1xuXHR9XG5cblxuXHQvLyBIYW5kbGVycyB0aGF0IGNvbnRyb2wgd2hhdCBoYXBwZW5zIGZvbGxvd2luZyBhIG1vdmVzdGFydFxuXG5cdGZ1bmN0aW9uIGFjdGl2ZU1vdXNlbW92ZShlLCBkYXRhKSB7XG5cdFx0dmFyIHRpbWVyICA9IGRhdGEudGltZXI7XG5cblx0XHRkYXRhLnRvdWNoID0gZTtcblx0XHRkYXRhLnRpbWVTdGFtcCA9IGUudGltZVN0YW1wO1xuXHRcdHRpbWVyLmtpY2soKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFjdGl2ZU1vdXNlZW5kKGUsIGRhdGEpIHtcblx0XHR2YXIgdGFyZ2V0ID0gZGF0YS50YXJnZXQ7XG5cdFx0dmFyIGV2ZW50ICA9IGRhdGEuZXZlbnQ7XG5cdFx0dmFyIHRpbWVyICA9IGRhdGEudGltZXI7XG5cblx0XHRyZW1vdmVBY3RpdmVNb3VzZSgpO1xuXG5cdFx0ZW5kRXZlbnQodGFyZ2V0LCBldmVudCwgdGltZXIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gVW5iaW5kIHRoZSBjbGljayBzdXBwcmVzc29yLCB3YWl0aW5nIHVudGlsIGFmdGVyIG1vdXNldXBcblx0XHRcdC8vIGhhcyBiZWVuIGhhbmRsZWQuXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHRcdG9mZih0YXJnZXQsICdjbGljaycsIHByZXZlbnREZWZhdWx0KTtcblx0XHRcdH0sIDApO1xuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVtb3ZlQWN0aXZlTW91c2UoKSB7XG5cdFx0b2ZmKGRvY3VtZW50LCBtb3VzZWV2ZW50cy5tb3ZlLCBhY3RpdmVNb3VzZW1vdmUpO1xuXHRcdG9mZihkb2N1bWVudCwgbW91c2VldmVudHMuZW5kLCBhY3RpdmVNb3VzZWVuZCk7XG5cdH1cblxuXHRmdW5jdGlvbiBhY3RpdmVUb3VjaG1vdmUoZSwgZGF0YSkge1xuXHRcdHZhciBldmVudCA9IGRhdGEuZXZlbnQ7XG5cdFx0dmFyIHRpbWVyID0gZGF0YS50aW1lcjtcblx0XHR2YXIgdG91Y2ggPSBjaGFuZ2VkVG91Y2goZSwgZXZlbnQpO1xuXG5cdFx0aWYgKCF0b3VjaCkgeyByZXR1cm47IH1cblxuXHRcdC8vIFN0b3AgdGhlIGludGVyZmFjZSBmcm9tIGdlc3R1cmluZ1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGV2ZW50LnRhcmdldFRvdWNoZXMgPSBlLnRhcmdldFRvdWNoZXM7XG5cdFx0ZGF0YS50b3VjaCA9IHRvdWNoO1xuXHRcdGRhdGEudGltZVN0YW1wID0gZS50aW1lU3RhbXA7XG5cblx0XHR0aW1lci5raWNrKCk7XG5cdH1cblxuXHRmdW5jdGlvbiBhY3RpdmVUb3VjaGVuZChlLCBkYXRhKSB7XG5cdFx0dmFyIHRhcmdldCA9IGRhdGEudGFyZ2V0O1xuXHRcdHZhciBldmVudCAgPSBkYXRhLmV2ZW50O1xuXHRcdHZhciB0aW1lciAgPSBkYXRhLnRpbWVyO1xuXHRcdHZhciB0b3VjaCAgPSBpZGVudGlmaWVkVG91Y2goZS5jaGFuZ2VkVG91Y2hlcywgZXZlbnQuaWRlbnRpZmllcik7XG5cblx0XHQvLyBUaGlzIGlzbid0IHRoZSB0b3VjaCB5b3UncmUgbG9va2luZyBmb3IuXG5cdFx0aWYgKCF0b3VjaCkgeyByZXR1cm47IH1cblxuXHRcdHJlbW92ZUFjdGl2ZVRvdWNoKGRhdGEpO1xuXHRcdGVuZEV2ZW50KHRhcmdldCwgZXZlbnQsIHRpbWVyKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbW92ZUFjdGl2ZVRvdWNoKGRhdGEpIHtcblx0XHRvZmYoZG9jdW1lbnQsIHRvdWNoZXZlbnRzLm1vdmUsIGRhdGEuYWN0aXZlVG91Y2htb3ZlKTtcblx0XHRvZmYoZG9jdW1lbnQsIHRvdWNoZXZlbnRzLmVuZCwgZGF0YS5hY3RpdmVUb3VjaGVuZCk7XG5cdH1cblxuXG5cdC8vIExvZ2ljIGZvciB0cmlnZ2VyaW5nIG1vdmUgYW5kIG1vdmVlbmQgZXZlbnRzXG5cblx0ZnVuY3Rpb24gdXBkYXRlRXZlbnQoZXZlbnQsIHRvdWNoLCB0aW1lU3RhbXApIHtcblx0XHR2YXIgdGltZSA9IHRpbWVTdGFtcCAtIGV2ZW50LnRpbWVTdGFtcDtcblxuXHRcdGV2ZW50LmRpc3RYID0gIHRvdWNoLnBhZ2VYIC0gZXZlbnQuc3RhcnRYO1xuXHRcdGV2ZW50LmRpc3RZID0gIHRvdWNoLnBhZ2VZIC0gZXZlbnQuc3RhcnRZO1xuXHRcdGV2ZW50LmRlbHRhWCA9IHRvdWNoLnBhZ2VYIC0gZXZlbnQucGFnZVg7XG5cdFx0ZXZlbnQuZGVsdGFZID0gdG91Y2gucGFnZVkgLSBldmVudC5wYWdlWTtcblxuXHRcdC8vIEF2ZXJhZ2UgdGhlIHZlbG9jaXR5IG9mIHRoZSBsYXN0IGZldyBldmVudHMgdXNpbmcgYSBkZWNheVxuXHRcdC8vIGN1cnZlIHRvIGV2ZW4gb3V0IHNwdXJpb3VzIGp1bXBzIGluIHZhbHVlcy5cblx0XHRldmVudC52ZWxvY2l0eVggPSAwLjMgKiBldmVudC52ZWxvY2l0eVggKyAwLjcgKiBldmVudC5kZWx0YVggLyB0aW1lO1xuXHRcdGV2ZW50LnZlbG9jaXR5WSA9IDAuMyAqIGV2ZW50LnZlbG9jaXR5WSArIDAuNyAqIGV2ZW50LmRlbHRhWSAvIHRpbWU7XG5cdFx0ZXZlbnQucGFnZVggPSAgdG91Y2gucGFnZVg7XG5cdFx0ZXZlbnQucGFnZVkgPSAgdG91Y2gucGFnZVk7XG5cdH1cblxuXHRmdW5jdGlvbiBlbmRFdmVudCh0YXJnZXQsIGV2ZW50LCB0aW1lciwgZm4pIHtcblx0XHR0aW1lci5lbmQoZnVuY3Rpb24oKXtcblx0XHRcdHRyaWdnZXIodGFyZ2V0LCAnbW92ZWVuZCcsIGV2ZW50KTtcblx0XHRcdHJldHVybiBmbiAmJiBmbigpO1xuXHRcdH0pO1xuXHR9XG5cblxuXHQvLyBTZXQgdXAgdGhlIERPTVxuXG5cdGZ1bmN0aW9uIG1vdmVzdGFydChlKSB7XG5cdFx0aWYgKGUuZGVmYXVsdFByZXZlbnRlZCkgeyByZXR1cm47IH1cblx0XHRpZiAoIWUubW92ZUVuYWJsZWQpIHsgcmV0dXJuOyB9XG5cblx0XHR2YXIgZXZlbnQgPSB7XG5cdFx0XHRzdGFydFg6ICAgICAgICBlLnN0YXJ0WCxcblx0XHRcdHN0YXJ0WTogICAgICAgIGUuc3RhcnRZLFxuXHRcdFx0cGFnZVg6ICAgICAgICAgZS5wYWdlWCxcblx0XHRcdHBhZ2VZOiAgICAgICAgIGUucGFnZVksXG5cdFx0XHRkaXN0WDogICAgICAgICBlLmRpc3RYLFxuXHRcdFx0ZGlzdFk6ICAgICAgICAgZS5kaXN0WSxcblx0XHRcdGRlbHRhWDogICAgICAgIGUuZGVsdGFYLFxuXHRcdFx0ZGVsdGFZOiAgICAgICAgZS5kZWx0YVksXG5cdFx0XHR2ZWxvY2l0eVg6ICAgICBlLnZlbG9jaXR5WCxcblx0XHRcdHZlbG9jaXR5WTogICAgIGUudmVsb2NpdHlZLFxuXHRcdFx0aWRlbnRpZmllcjogICAgZS5pZGVudGlmaWVyLFxuXHRcdFx0dGFyZ2V0VG91Y2hlczogZS50YXJnZXRUb3VjaGVzLFxuXHRcdFx0ZmluZ2VyOiAgICAgICAgZS5maW5nZXJcblx0XHR9O1xuXG5cdFx0dmFyIGRhdGEgPSB7XG5cdFx0XHR0YXJnZXQ6ICAgIGUudGFyZ2V0LFxuXHRcdFx0ZXZlbnQ6ICAgICBldmVudCxcblx0XHRcdHRpbWVyOiAgICAgbmV3IFRpbWVyKHVwZGF0ZSksXG5cdFx0XHR0b3VjaDogICAgIHVuZGVmaW5lZCxcblx0XHRcdHRpbWVTdGFtcDogZS50aW1lU3RhbXBcblx0XHR9O1xuXG5cdFx0ZnVuY3Rpb24gdXBkYXRlKHRpbWUpIHtcblx0XHRcdHVwZGF0ZUV2ZW50KGV2ZW50LCBkYXRhLnRvdWNoLCBkYXRhLnRpbWVTdGFtcCk7XG5cdFx0XHR0cmlnZ2VyKGRhdGEudGFyZ2V0LCAnbW92ZScsIGV2ZW50KTtcblx0XHR9XG5cblx0XHRpZiAoZS5pZGVudGlmaWVyID09PSB1bmRlZmluZWQpIHtcblx0XHRcdC8vIFdlJ3JlIGRlYWxpbmcgd2l0aCBhIG1vdXNlIGV2ZW50LlxuXHRcdFx0Ly8gU3RvcCBjbGlja3MgZnJvbSBwcm9wYWdhdGluZyBkdXJpbmcgYSBtb3ZlXG5cdFx0XHRvbihlLnRhcmdldCwgJ2NsaWNrJywgcHJldmVudERlZmF1bHQpO1xuXHRcdFx0b24oZG9jdW1lbnQsIG1vdXNlZXZlbnRzLm1vdmUsIGFjdGl2ZU1vdXNlbW92ZSwgZGF0YSk7XG5cdFx0XHRvbihkb2N1bWVudCwgbW91c2VldmVudHMuZW5kLCBhY3RpdmVNb3VzZWVuZCwgZGF0YSk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0Ly8gSW4gb3JkZXIgdG8gdW5iaW5kIGNvcnJlY3QgaGFuZGxlcnMgdGhleSBoYXZlIHRvIGJlIHVuaXF1ZVxuXHRcdFx0ZGF0YS5hY3RpdmVUb3VjaG1vdmUgPSBmdW5jdGlvbihlLCBkYXRhKSB7IGFjdGl2ZVRvdWNobW92ZShlLCBkYXRhKTsgfTtcblx0XHRcdGRhdGEuYWN0aXZlVG91Y2hlbmQgPSBmdW5jdGlvbihlLCBkYXRhKSB7IGFjdGl2ZVRvdWNoZW5kKGUsIGRhdGEpOyB9O1xuXG5cdFx0XHQvLyBXZSdyZSBkZWFsaW5nIHdpdGggYSB0b3VjaC5cblx0XHRcdG9uKGRvY3VtZW50LCB0b3VjaGV2ZW50cy5tb3ZlLCBkYXRhLmFjdGl2ZVRvdWNobW92ZSwgZGF0YSk7XG5cdFx0XHRvbihkb2N1bWVudCwgdG91Y2hldmVudHMuZW5kLCBkYXRhLmFjdGl2ZVRvdWNoZW5kLCBkYXRhKTtcblx0XHR9XG5cdH1cblxuXHRvbihkb2N1bWVudCwgJ21vdXNlZG93bicsIG1vdXNlZG93bik7XG5cdG9uKGRvY3VtZW50LCAndG91Y2hzdGFydCcsIHRvdWNoc3RhcnQpO1xuXHRvbihkb2N1bWVudCwgJ21vdmVzdGFydCcsIG1vdmVzdGFydCk7XG5cblxuXHQvLyBqUXVlcnkgc3BlY2lhbCBldmVudHNcblx0Ly9cblx0Ly8galF1ZXJ5IGV2ZW50IG9iamVjdHMgYXJlIGNvcGllcyBvZiBET00gZXZlbnQgb2JqZWN0cy4gVGhleSBuZWVkXG5cdC8vIGEgbGl0dGxlIGhlbHAgY29weWluZyB0aGUgbW92ZSBwcm9wZXJ0aWVzIGFjcm9zcy5cblxuXHRpZiAoIXdpbmRvdy5qUXVlcnkpIHsgcmV0dXJuOyB9XG5cblx0dmFyIHByb3BlcnRpZXMgPSAoXCJzdGFydFggc3RhcnRZIHBhZ2VYIHBhZ2VZIGRpc3RYIGRpc3RZIGRlbHRhWCBkZWx0YVkgdmVsb2NpdHlYIHZlbG9jaXR5WVwiKS5zcGxpdCgnICcpO1xuXG5cdGZ1bmN0aW9uIGVuYWJsZU1vdmUxKGUpIHsgZS5lbmFibGVNb3ZlKCk7IH1cblx0ZnVuY3Rpb24gZW5hYmxlTW92ZTIoZSkgeyBlLmVuYWJsZU1vdmUoKTsgfVxuXHRmdW5jdGlvbiBlbmFibGVNb3ZlMyhlKSB7IGUuZW5hYmxlTW92ZSgpOyB9XG5cblx0ZnVuY3Rpb24gYWRkKGhhbmRsZU9iaikge1xuXHRcdHZhciBoYW5kbGVyID0gaGFuZGxlT2JqLmhhbmRsZXI7XG5cblx0XHRoYW5kbGVPYmouaGFuZGxlciA9IGZ1bmN0aW9uKGUpIHtcblx0XHRcdC8vIENvcHkgbW92ZSBwcm9wZXJ0aWVzIGFjcm9zcyBmcm9tIG9yaWdpbmFsRXZlbnRcblx0XHRcdHZhciBpID0gcHJvcGVydGllcy5sZW5ndGg7XG5cdFx0XHR2YXIgcHJvcGVydHk7XG5cblx0XHRcdHdoaWxlKGktLSkge1xuXHRcdFx0XHRwcm9wZXJ0eSA9IHByb3BlcnRpZXNbaV07XG5cdFx0XHRcdGVbcHJvcGVydHldID0gZS5vcmlnaW5hbEV2ZW50W3Byb3BlcnR5XTtcblx0XHRcdH1cblxuXHRcdFx0aGFuZGxlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdH07XG5cdH1cblxuXHRqUXVlcnkuZXZlbnQuc3BlY2lhbC5tb3Zlc3RhcnQgPSB7XG5cdFx0c2V0dXA6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gTW92ZXN0YXJ0IG11c3QgYmUgZW5hYmxlZCB0byBhbGxvdyBvdGhlciBtb3ZlIGV2ZW50c1xuXHRcdFx0b24odGhpcywgJ21vdmVzdGFydCcsIGVuYWJsZU1vdmUxKTtcblxuXHRcdFx0Ly8gRG8gbGlzdGVuIHRvIERPTSBldmVudHNcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXG5cdFx0dGVhcmRvd246IGZ1bmN0aW9uKCkge1xuXHRcdFx0b2ZmKHRoaXMsICdtb3Zlc3RhcnQnLCBlbmFibGVNb3ZlMSk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblxuXHRcdGFkZDogYWRkXG5cdH07XG5cblx0alF1ZXJ5LmV2ZW50LnNwZWNpYWwubW92ZSA9IHtcblx0XHRzZXR1cDogZnVuY3Rpb24oKSB7XG5cdFx0XHRvbih0aGlzLCAnbW92ZXN0YXJ0JywgZW5hYmxlTW92ZTIpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0sXG5cblx0XHR0ZWFyZG93bjogZnVuY3Rpb24oKSB7XG5cdFx0XHRvZmYodGhpcywgJ21vdmVzdGFydCcsIGVuYWJsZU1vdmUyKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXG5cdFx0YWRkOiBhZGRcblx0fTtcblxuXHRqUXVlcnkuZXZlbnQuc3BlY2lhbC5tb3ZlZW5kID0ge1xuXHRcdHNldHVwOiBmdW5jdGlvbigpIHtcblx0XHRcdG9uKHRoaXMsICdtb3Zlc3RhcnQnLCBlbmFibGVNb3ZlMyk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblxuXHRcdHRlYXJkb3duOiBmdW5jdGlvbigpIHtcblx0XHRcdG9mZih0aGlzLCAnbW92ZXN0YXJ0JywgZW5hYmxlTW92ZTMpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0sXG5cblx0XHRhZGQ6IGFkZFxuXHR9O1xufSk7XG5cbi8vIGpRdWVyeSBNYXNrIFBsdWdpbiB2MS4xNC4xNlxuLy8gZ2l0aHViLmNvbS9pZ29yZXNjb2Jhci9qUXVlcnktTWFzay1QbHVnaW5cbi8vIHZhciAkanNjb21wPSRqc2NvbXB8fHt9OyRqc2NvbXAuc2NvcGU9e307JGpzY29tcC5maW5kSW50ZXJuYWw9ZnVuY3Rpb24oYSxuLGYpe2EgaW5zdGFuY2VvZiBTdHJpbmcmJihhPVN0cmluZyhhKSk7Zm9yKHZhciBwPWEubGVuZ3RoLGs9MDtrPHA7aysrKXt2YXIgYj1hW2tdO2lmKG4uY2FsbChmLGIsayxhKSlyZXR1cm57aTprLHY6Yn19cmV0dXJue2k6LTEsdjp2b2lkIDB9fTskanNjb21wLkFTU1VNRV9FUzU9ITE7JGpzY29tcC5BU1NVTUVfTk9fTkFUSVZFX01BUD0hMTskanNjb21wLkFTU1VNRV9OT19OQVRJVkVfU0VUPSExOyRqc2NvbXAuU0lNUExFX0ZST1VORF9QT0xZRklMTD0hMTtcbi8vICRqc2NvbXAuZGVmaW5lUHJvcGVydHk9JGpzY29tcC5BU1NVTUVfRVM1fHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBPYmplY3QuZGVmaW5lUHJvcGVydGllcz9PYmplY3QuZGVmaW5lUHJvcGVydHk6ZnVuY3Rpb24oYSxuLGYpe2EhPUFycmF5LnByb3RvdHlwZSYmYSE9T2JqZWN0LnByb3RvdHlwZSYmKGFbbl09Zi52YWx1ZSl9OyRqc2NvbXAuZ2V0R2xvYmFsPWZ1bmN0aW9uKGEpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJndpbmRvdz09PWE/YTpcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsJiZudWxsIT1nbG9iYWw/Z2xvYmFsOmF9OyRqc2NvbXAuZ2xvYmFsPSRqc2NvbXAuZ2V0R2xvYmFsKHRoaXMpO1xuLy8gJGpzY29tcC5wb2x5ZmlsbD1mdW5jdGlvbihhLG4sZixwKXtpZihuKXtmPSRqc2NvbXAuZ2xvYmFsO2E9YS5zcGxpdChcIi5cIik7Zm9yKHA9MDtwPGEubGVuZ3RoLTE7cCsrKXt2YXIgaz1hW3BdO2sgaW4gZnx8KGZba109e30pO2Y9ZltrXX1hPWFbYS5sZW5ndGgtMV07cD1mW2FdO249bihwKTtuIT1wJiZudWxsIT1uJiYkanNjb21wLmRlZmluZVByb3BlcnR5KGYsYSx7Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOm59KX19OyRqc2NvbXAucG9seWZpbGwoXCJBcnJheS5wcm90b3R5cGUuZmluZFwiLGZ1bmN0aW9uKGEpe3JldHVybiBhP2E6ZnVuY3Rpb24oYSxmKXtyZXR1cm4gJGpzY29tcC5maW5kSW50ZXJuYWwodGhpcyxhLGYpLnZ9fSxcImVzNlwiLFwiZXMzXCIpO1xuLy8gKGZ1bmN0aW9uKGEsbixmKXtcImZ1bmN0aW9uXCI9PT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJqcXVlcnlcIl0sYSk6XCJvYmplY3RcIj09PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiPT09dHlwZW9mIE1ldGVvcj9tb2R1bGUuZXhwb3J0cz1hKHJlcXVpcmUoXCJqcXVlcnlcIikpOmEobnx8Zil9KShmdW5jdGlvbihhKXt2YXIgbj1mdW5jdGlvbihiLGQsZSl7dmFyIGM9e2ludmFsaWQ6W10sZ2V0Q2FyZXQ6ZnVuY3Rpb24oKXt0cnl7dmFyIGE9MCxyPWIuZ2V0KDApLGg9ZG9jdW1lbnQuc2VsZWN0aW9uLGQ9ci5zZWxlY3Rpb25TdGFydDtpZihoJiYtMT09PW5hdmlnYXRvci5hcHBWZXJzaW9uLmluZGV4T2YoXCJNU0lFIDEwXCIpKXt2YXIgZT1oLmNyZWF0ZVJhbmdlKCk7ZS5tb3ZlU3RhcnQoXCJjaGFyYWN0ZXJcIiwtYy52YWwoKS5sZW5ndGgpO2E9ZS50ZXh0Lmxlbmd0aH1lbHNlIGlmKGR8fFwiMFwiPT09ZClhPWQ7cmV0dXJuIGF9Y2F0Y2goQyl7fX0sc2V0Q2FyZXQ6ZnVuY3Rpb24oYSl7dHJ5e2lmKGIuaXMoXCI6Zm9jdXNcIikpe3ZhciBjPVxuLy8gYi5nZXQoMCk7aWYoYy5zZXRTZWxlY3Rpb25SYW5nZSljLnNldFNlbGVjdGlvblJhbmdlKGEsYSk7ZWxzZXt2YXIgZz1jLmNyZWF0ZVRleHRSYW5nZSgpO2cuY29sbGFwc2UoITApO2cubW92ZUVuZChcImNoYXJhY3RlclwiLGEpO2cubW92ZVN0YXJ0KFwiY2hhcmFjdGVyXCIsYSk7Zy5zZWxlY3QoKX19fWNhdGNoKEIpe319LGV2ZW50czpmdW5jdGlvbigpe2Iub24oXCJrZXlkb3duLm1hc2tcIixmdW5jdGlvbihhKXtiLmRhdGEoXCJtYXNrLWtleWNvZGVcIixhLmtleUNvZGV8fGEud2hpY2gpO2IuZGF0YShcIm1hc2stcHJldml1cy12YWx1ZVwiLGIudmFsKCkpO2IuZGF0YShcIm1hc2stcHJldml1cy1jYXJldC1wb3NcIixjLmdldENhcmV0KCkpO2MubWFza0RpZ2l0UG9zTWFwT2xkPWMubWFza0RpZ2l0UG9zTWFwfSkub24oYS5qTWFza0dsb2JhbHMudXNlSW5wdXQ/XCJpbnB1dC5tYXNrXCI6XCJrZXl1cC5tYXNrXCIsYy5iZWhhdmlvdXIpLm9uKFwicGFzdGUubWFzayBkcm9wLm1hc2tcIixmdW5jdGlvbigpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXtiLmtleWRvd24oKS5rZXl1cCgpfSxcbi8vIDEwMCl9KS5vbihcImNoYW5nZS5tYXNrXCIsZnVuY3Rpb24oKXtiLmRhdGEoXCJjaGFuZ2VkXCIsITApfSkub24oXCJibHVyLm1hc2tcIixmdW5jdGlvbigpe2Y9PT1jLnZhbCgpfHxiLmRhdGEoXCJjaGFuZ2VkXCIpfHxiLnRyaWdnZXIoXCJjaGFuZ2VcIik7Yi5kYXRhKFwiY2hhbmdlZFwiLCExKX0pLm9uKFwiYmx1ci5tYXNrXCIsZnVuY3Rpb24oKXtmPWMudmFsKCl9KS5vbihcImZvY3VzLm1hc2tcIixmdW5jdGlvbihiKXshMD09PWUuc2VsZWN0T25Gb2N1cyYmYShiLnRhcmdldCkuc2VsZWN0KCl9KS5vbihcImZvY3Vzb3V0Lm1hc2tcIixmdW5jdGlvbigpe2UuY2xlYXJJZk5vdE1hdGNoJiYhay50ZXN0KGMudmFsKCkpJiZjLnZhbChcIlwiKX0pfSxnZXRSZWdleE1hc2s6ZnVuY3Rpb24oKXtmb3IodmFyIGE9W10sYixjLGUsdCxmPTA7ZjxkLmxlbmd0aDtmKyspKGI9bC50cmFuc2xhdGlvbltkLmNoYXJBdChmKV0pPyhjPWIucGF0dGVybi50b1N0cmluZygpLnJlcGxhY2UoLy57MX0kfF4uezF9L2csXCJcIiksZT1iLm9wdGlvbmFsLFxuLy8gKGI9Yi5yZWN1cnNpdmUpPyhhLnB1c2goZC5jaGFyQXQoZikpLHQ9e2RpZ2l0OmQuY2hhckF0KGYpLHBhdHRlcm46Y30pOmEucHVzaChlfHxiP2MrXCI/XCI6YykpOmEucHVzaChkLmNoYXJBdChmKS5yZXBsYWNlKC9bLVxcL1xcXFxeJCorPy4oKXxbXFxde31dL2csXCJcXFxcJCZcIikpO2E9YS5qb2luKFwiXCIpO3QmJihhPWEucmVwbGFjZShuZXcgUmVnRXhwKFwiKFwiK3QuZGlnaXQrXCIoLipcIit0LmRpZ2l0K1wiKT8pXCIpLFwiKCQxKT9cIikucmVwbGFjZShuZXcgUmVnRXhwKHQuZGlnaXQsXCJnXCIpLHQucGF0dGVybikpO3JldHVybiBuZXcgUmVnRXhwKGEpfSxkZXN0cm95RXZlbnRzOmZ1bmN0aW9uKCl7Yi5vZmYoXCJpbnB1dCBrZXlkb3duIGtleXVwIHBhc3RlIGRyb3AgYmx1ciBmb2N1c291dCBcIi5zcGxpdChcIiBcIikuam9pbihcIi5tYXNrIFwiKSl9LHZhbDpmdW5jdGlvbihhKXt2YXIgYz1iLmlzKFwiaW5wdXRcIik/XCJ2YWxcIjpcInRleHRcIjtpZigwPGFyZ3VtZW50cy5sZW5ndGgpe2lmKGJbY10oKSE9PWEpYltjXShhKTtcbi8vIGM9Yn1lbHNlIGM9YltjXSgpO3JldHVybiBjfSxjYWxjdWxhdGVDYXJldFBvc2l0aW9uOmZ1bmN0aW9uKGEpe3ZhciBkPWMuZ2V0TWFza2VkKCksaD1jLmdldENhcmV0KCk7aWYoYSE9PWQpe3ZhciBlPWIuZGF0YShcIm1hc2stcHJldml1cy1jYXJldC1wb3NcIil8fDA7ZD1kLmxlbmd0aDt2YXIgZz1hLmxlbmd0aCxmPWE9MCxsPTAsaz0wLG07Zm9yKG09aDttPGQmJmMubWFza0RpZ2l0UG9zTWFwW21dO20rKylmKys7Zm9yKG09aC0xOzA8PW0mJmMubWFza0RpZ2l0UG9zTWFwW21dO20tLSlhKys7Zm9yKG09aC0xOzA8PW07bS0tKWMubWFza0RpZ2l0UG9zTWFwW21dJiZsKys7Zm9yKG09ZS0xOzA8PW07bS0tKWMubWFza0RpZ2l0UG9zTWFwT2xkW21dJiZrKys7aD5nP2g9MTAqZDplPj1oJiZlIT09Zz9jLm1hc2tEaWdpdFBvc01hcE9sZFtoXXx8KGU9aCxoPWgtKGstbCktYSxjLm1hc2tEaWdpdFBvc01hcFtoXSYmKGg9ZSkpOmg+ZSYmKGg9aCsobC1rKStmKX1yZXR1cm4gaH0sYmVoYXZpb3VyOmZ1bmN0aW9uKGQpe2Q9XG4vLyBkfHx3aW5kb3cuZXZlbnQ7Yy5pbnZhbGlkPVtdO3ZhciBlPWIuZGF0YShcIm1hc2sta2V5Y29kZVwiKTtpZigtMT09PWEuaW5BcnJheShlLGwuYnlQYXNzS2V5cykpe2U9Yy5nZXRNYXNrZWQoKTt2YXIgaD1jLmdldENhcmV0KCksZz1iLmRhdGEoXCJtYXNrLXByZXZpdXMtdmFsdWVcIil8fFwiXCI7c2V0VGltZW91dChmdW5jdGlvbigpe2Muc2V0Q2FyZXQoYy5jYWxjdWxhdGVDYXJldFBvc2l0aW9uKGcpKX0sYS5qTWFza0dsb2JhbHMua2V5U3Ryb2tlQ29tcGVuc2F0aW9uKTtjLnZhbChlKTtjLnNldENhcmV0KGgpO3JldHVybiBjLmNhbGxiYWNrcyhkKX19LGdldE1hc2tlZDpmdW5jdGlvbihhLGIpe3ZhciBoPVtdLGY9dm9pZCAwPT09Yj9jLnZhbCgpOmIrXCJcIixnPTAsaz1kLmxlbmd0aCxuPTAscD1mLmxlbmd0aCxtPTEscj1cInB1c2hcIix1PS0xLHc9MDtiPVtdO2lmKGUucmV2ZXJzZSl7cj1cInVuc2hpZnRcIjttPS0xO3ZhciB4PTA7Zz1rLTE7bj1wLTE7dmFyIEE9ZnVuY3Rpb24oKXtyZXR1cm4tMTxcbi8vIGcmJi0xPG59fWVsc2UgeD1rLTEsQT1mdW5jdGlvbigpe3JldHVybiBnPGsmJm48cH07Zm9yKHZhciB6O0EoKTspe3ZhciB5PWQuY2hhckF0KGcpLHY9Zi5jaGFyQXQobikscT1sLnRyYW5zbGF0aW9uW3ldO2lmKHEpdi5tYXRjaChxLnBhdHRlcm4pPyhoW3JdKHYpLHEucmVjdXJzaXZlJiYoLTE9PT11P3U9ZzpnPT09eCYmZyE9PXUmJihnPXUtbSkseD09PXUmJihnLT1tKSksZys9bSk6dj09PXo/KHctLSx6PXZvaWQgMCk6cS5vcHRpb25hbD8oZys9bSxuLT1tKTpxLmZhbGxiYWNrPyhoW3JdKHEuZmFsbGJhY2spLGcrPW0sbi09bSk6Yy5pbnZhbGlkLnB1c2goe3A6bix2OnYsZTpxLnBhdHRlcm59KSxuKz1tO2Vsc2V7aWYoIWEpaFtyXSh5KTt2PT09eT8oYi5wdXNoKG4pLG4rPW0pOih6PXksYi5wdXNoKG4rdyksdysrKTtnKz1tfX1hPWQuY2hhckF0KHgpO2shPT1wKzF8fGwudHJhbnNsYXRpb25bYV18fGgucHVzaChhKTtoPWguam9pbihcIlwiKTtjLm1hcE1hc2tkaWdpdFBvc2l0aW9ucyhoLFxuLy8gYixwKTtyZXR1cm4gaH0sbWFwTWFza2RpZ2l0UG9zaXRpb25zOmZ1bmN0aW9uKGEsYixkKXthPWUucmV2ZXJzZT9hLmxlbmd0aC1kOjA7Yy5tYXNrRGlnaXRQb3NNYXA9e307Zm9yKGQ9MDtkPGIubGVuZ3RoO2QrKyljLm1hc2tEaWdpdFBvc01hcFtiW2RdK2FdPTF9LGNhbGxiYWNrczpmdW5jdGlvbihhKXt2YXIgZz1jLnZhbCgpLGg9ZyE9PWYsaz1bZyxhLGIsZV0sbD1mdW5jdGlvbihhLGIsYyl7XCJmdW5jdGlvblwiPT09dHlwZW9mIGVbYV0mJmImJmVbYV0uYXBwbHkodGhpcyxjKX07bChcIm9uQ2hhbmdlXCIsITA9PT1oLGspO2woXCJvbktleVByZXNzXCIsITA9PT1oLGspO2woXCJvbkNvbXBsZXRlXCIsZy5sZW5ndGg9PT1kLmxlbmd0aCxrKTtsKFwib25JbnZhbGlkXCIsMDxjLmludmFsaWQubGVuZ3RoLFtnLGEsYixjLmludmFsaWQsZV0pfX07Yj1hKGIpO3ZhciBsPXRoaXMsZj1jLnZhbCgpLGs7ZD1cImZ1bmN0aW9uXCI9PT10eXBlb2YgZD9kKGMudmFsKCksdm9pZCAwLGIsZSk6ZDtsLm1hc2s9XG4vLyBkO2wub3B0aW9ucz1lO2wucmVtb3ZlPWZ1bmN0aW9uKCl7dmFyIGE9Yy5nZXRDYXJldCgpO2wub3B0aW9ucy5wbGFjZWhvbGRlciYmYi5yZW1vdmVBdHRyKFwicGxhY2Vob2xkZXJcIik7Yi5kYXRhKFwibWFzay1tYXhsZW5ndGhcIikmJmIucmVtb3ZlQXR0cihcIm1heGxlbmd0aFwiKTtjLmRlc3Ryb3lFdmVudHMoKTtjLnZhbChsLmdldENsZWFuVmFsKCkpO2Muc2V0Q2FyZXQoYSk7cmV0dXJuIGJ9O2wuZ2V0Q2xlYW5WYWw9ZnVuY3Rpb24oKXtyZXR1cm4gYy5nZXRNYXNrZWQoITApfTtsLmdldE1hc2tlZFZhbD1mdW5jdGlvbihhKXtyZXR1cm4gYy5nZXRNYXNrZWQoITEsYSl9O2wuaW5pdD1mdW5jdGlvbihnKXtnPWd8fCExO2U9ZXx8e307bC5jbGVhcklmTm90TWF0Y2g9YS5qTWFza0dsb2JhbHMuY2xlYXJJZk5vdE1hdGNoO2wuYnlQYXNzS2V5cz1hLmpNYXNrR2xvYmFscy5ieVBhc3NLZXlzO2wudHJhbnNsYXRpb249YS5leHRlbmQoe30sYS5qTWFza0dsb2JhbHMudHJhbnNsYXRpb24sZS50cmFuc2xhdGlvbik7XG4vLyBsPWEuZXh0ZW5kKCEwLHt9LGwsZSk7az1jLmdldFJlZ2V4TWFzaygpO2lmKGcpYy5ldmVudHMoKSxjLnZhbChjLmdldE1hc2tlZCgpKTtlbHNle2UucGxhY2Vob2xkZXImJmIuYXR0cihcInBsYWNlaG9sZGVyXCIsZS5wbGFjZWhvbGRlcik7Yi5kYXRhKFwibWFza1wiKSYmYi5hdHRyKFwiYXV0b2NvbXBsZXRlXCIsXCJvZmZcIik7Zz0wO2Zvcih2YXIgZj0hMDtnPGQubGVuZ3RoO2crKyl7dmFyIGg9bC50cmFuc2xhdGlvbltkLmNoYXJBdChnKV07aWYoaCYmaC5yZWN1cnNpdmUpe2Y9ITE7YnJlYWt9fWYmJmIuYXR0cihcIm1heGxlbmd0aFwiLGQubGVuZ3RoKS5kYXRhKFwibWFzay1tYXhsZW5ndGhcIiwhMCk7Yy5kZXN0cm95RXZlbnRzKCk7Yy5ldmVudHMoKTtnPWMuZ2V0Q2FyZXQoKTtjLnZhbChjLmdldE1hc2tlZCgpKTtjLnNldENhcmV0KGcpfX07bC5pbml0KCFiLmlzKFwiaW5wdXRcIikpfTthLm1hc2tXYXRjaGVycz17fTt2YXIgZj1mdW5jdGlvbigpe3ZhciBiPWEodGhpcyksZD17fSxlPWIuYXR0cihcImRhdGEtbWFza1wiKTtcbi8vIGIuYXR0cihcImRhdGEtbWFzay1yZXZlcnNlXCIpJiYoZC5yZXZlcnNlPSEwKTtiLmF0dHIoXCJkYXRhLW1hc2stY2xlYXJpZm5vdG1hdGNoXCIpJiYoZC5jbGVhcklmTm90TWF0Y2g9ITApO1widHJ1ZVwiPT09Yi5hdHRyKFwiZGF0YS1tYXNrLXNlbGVjdG9uZm9jdXNcIikmJihkLnNlbGVjdE9uRm9jdXM9ITApO2lmKHAoYixlLGQpKXJldHVybiBiLmRhdGEoXCJtYXNrXCIsbmV3IG4odGhpcyxlLGQpKX0scD1mdW5jdGlvbihiLGQsZSl7ZT1lfHx7fTt2YXIgYz1hKGIpLmRhdGEoXCJtYXNrXCIpLGY9SlNPTi5zdHJpbmdpZnk7Yj1hKGIpLnZhbCgpfHxhKGIpLnRleHQoKTt0cnl7cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGQmJihkPWQoYikpLFwib2JqZWN0XCIhPT10eXBlb2YgY3x8ZihjLm9wdGlvbnMpIT09ZihlKXx8Yy5tYXNrIT09ZH1jYXRjaCh3KXt9fSxrPWZ1bmN0aW9uKGEpe3ZhciBiPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7YT1cIm9uXCIrYTt2YXIgZT1hIGluIGI7ZXx8KGIuc2V0QXR0cmlidXRlKGEsXG4vLyBcInJldHVybjtcIiksZT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgYlthXSk7cmV0dXJuIGV9O2EuZm4ubWFzaz1mdW5jdGlvbihiLGQpe2Q9ZHx8e307dmFyIGU9dGhpcy5zZWxlY3RvcixjPWEuak1hc2tHbG9iYWxzLGY9Yy53YXRjaEludGVydmFsO2M9ZC53YXRjaElucHV0c3x8Yy53YXRjaElucHV0czt2YXIgaz1mdW5jdGlvbigpe2lmKHAodGhpcyxiLGQpKXJldHVybiBhKHRoaXMpLmRhdGEoXCJtYXNrXCIsbmV3IG4odGhpcyxiLGQpKX07YSh0aGlzKS5lYWNoKGspO2UmJlwiXCIhPT1lJiZjJiYoY2xlYXJJbnRlcnZhbChhLm1hc2tXYXRjaGVyc1tlXSksYS5tYXNrV2F0Y2hlcnNbZV09c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXthKGRvY3VtZW50KS5maW5kKGUpLmVhY2goayl9LGYpKTtyZXR1cm4gdGhpc307YS5mbi5tYXNrZWQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZGF0YShcIm1hc2tcIikuZ2V0TWFza2VkVmFsKGEpfTthLmZuLnVubWFzaz1mdW5jdGlvbigpe2NsZWFySW50ZXJ2YWwoYS5tYXNrV2F0Y2hlcnNbdGhpcy5zZWxlY3Rvcl0pO1xuLy8gZGVsZXRlIGEubWFza1dhdGNoZXJzW3RoaXMuc2VsZWN0b3JdO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYj1hKHRoaXMpLmRhdGEoXCJtYXNrXCIpO2ImJmIucmVtb3ZlKCkucmVtb3ZlRGF0YShcIm1hc2tcIil9KX07YS5mbi5jbGVhblZhbD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmRhdGEoXCJtYXNrXCIpLmdldENsZWFuVmFsKCl9O2EuYXBwbHlEYXRhTWFzaz1mdW5jdGlvbihiKXtiPWJ8fGEuak1hc2tHbG9iYWxzLm1hc2tFbGVtZW50czsoYiBpbnN0YW5jZW9mIGE/YjphKGIpKS5maWx0ZXIoYS5qTWFza0dsb2JhbHMuZGF0YU1hc2tBdHRyKS5lYWNoKGYpfTtrPXttYXNrRWxlbWVudHM6XCJpbnB1dCx0ZCxzcGFuLGRpdlwiLGRhdGFNYXNrQXR0cjpcIipbZGF0YS1tYXNrXVwiLGRhdGFNYXNrOiEwLHdhdGNoSW50ZXJ2YWw6MzAwLHdhdGNoSW5wdXRzOiEwLGtleVN0cm9rZUNvbXBlbnNhdGlvbjoxMCx1c2VJbnB1dDohL0Nocm9tZVxcL1syLTRdWzAtOV18U2Ftc3VuZ0Jyb3dzZXIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpJiZcbi8vIGsoXCJpbnB1dFwiKSx3YXRjaERhdGFNYXNrOiExLGJ5UGFzc0tleXM6WzksMTYsMTcsMTgsMzYsMzcsMzgsMzksNDAsOTFdLHRyYW5zbGF0aW9uOnswOntwYXR0ZXJuOi9cXGQvfSw5OntwYXR0ZXJuOi9cXGQvLG9wdGlvbmFsOiEwfSxcIiNcIjp7cGF0dGVybjovXFxkLyxyZWN1cnNpdmU6ITB9LEE6e3BhdHRlcm46L1thLXpBLVowLTldL30sUzp7cGF0dGVybjovW2EtekEtWl0vfX19O2Euak1hc2tHbG9iYWxzPWEuak1hc2tHbG9iYWxzfHx7fTtrPWEuak1hc2tHbG9iYWxzPWEuZXh0ZW5kKCEwLHt9LGssYS5qTWFza0dsb2JhbHMpO2suZGF0YU1hc2smJmEuYXBwbHlEYXRhTWFzaygpO3NldEludGVydmFsKGZ1bmN0aW9uKCl7YS5qTWFza0dsb2JhbHMud2F0Y2hEYXRhTWFzayYmYS5hcHBseURhdGFNYXNrKCl9LGsud2F0Y2hJbnRlcnZhbCl9LHdpbmRvdy5qUXVlcnksd2luZG93LlplcHRvKTtcblxuLyogIGpRdWVyeSBOaWNlIFNlbGVjdCAtIHYxLjEuMFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9oZXJuYW5zYXJ0b3Jpby9qcXVlcnktbmljZS1zZWxlY3RcbiAgICBNYWRlIGJ5IEhlcm7DoW4gU2FydG9yaW8gICovXG5cbihmdW5jdGlvbigkKSB7XG5cbiAgJC5mbi5uaWNlU2VsZWN0ID0gZnVuY3Rpb24obWV0aG9kKSB7XG5cbiAgICAvLyBNZXRob2RzXG4gICAgaWYgKHR5cGVvZiBtZXRob2QgPT0gJ3N0cmluZycpIHtcbiAgICAgIGlmIChtZXRob2QgPT0gJ3VwZGF0ZScpIHtcbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciAkc2VsZWN0ID0gJCh0aGlzKTtcbiAgICAgICAgICB2YXIgJGRyb3Bkb3duID0gJCh0aGlzKS5uZXh0KCcubmljZS1zZWxlY3QnKTtcbiAgICAgICAgICB2YXIgb3BlbiA9ICRkcm9wZG93bi5oYXNDbGFzcygnb3BlbicpO1xuXG4gICAgICAgICAgaWYgKCRkcm9wZG93bi5sZW5ndGgpIHtcbiAgICAgICAgICAgICRkcm9wZG93bi5yZW1vdmUoKTtcbiAgICAgICAgICAgIGNyZWF0ZV9uaWNlX3NlbGVjdCgkc2VsZWN0KTtcblxuICAgICAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgICAgJHNlbGVjdC5uZXh0KCkudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChtZXRob2QgPT0gJ2Rlc3Ryb3knKSB7XG4gICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgJHNlbGVjdCA9ICQodGhpcyk7XG4gICAgICAgICAgdmFyICRkcm9wZG93biA9ICQodGhpcykubmV4dCgnLm5pY2Utc2VsZWN0Jyk7XG5cbiAgICAgICAgICBpZiAoJGRyb3Bkb3duLmxlbmd0aCkge1xuICAgICAgICAgICAgJGRyb3Bkb3duLnJlbW92ZSgpO1xuICAgICAgICAgICAgJHNlbGVjdC5jc3MoJ2Rpc3BsYXknLCAnJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCQoJy5uaWNlLXNlbGVjdCcpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgJChkb2N1bWVudCkub2ZmKCcubmljZV9zZWxlY3QnKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ01ldGhvZCBcIicgKyBtZXRob2QgKyAnXCIgZG9lcyBub3QgZXhpc3QuJylcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIEhpZGUgbmF0aXZlIHNlbGVjdFxuICAgIHRoaXMuaGlkZSgpO1xuXG4gICAgLy8gQ3JlYXRlIGN1c3RvbSBtYXJrdXBcbiAgICB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgJHNlbGVjdCA9ICQodGhpcyk7XG5cbiAgICAgIGlmICghJHNlbGVjdC5uZXh0KCkuaGFzQ2xhc3MoJ25pY2Utc2VsZWN0JykpIHtcbiAgICAgICAgY3JlYXRlX25pY2Vfc2VsZWN0KCRzZWxlY3QpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlX25pY2Vfc2VsZWN0KCRzZWxlY3QpIHtcbiAgICAgICRzZWxlY3QuYWZ0ZXIoJCgnPGRpdj48L2Rpdj4nKVxuICAgICAgICAuYWRkQ2xhc3MoJ25pY2Utc2VsZWN0JylcbiAgICAgICAgLmFkZENsYXNzKCRzZWxlY3QuYXR0cignY2xhc3MnKSB8fCAnJylcbiAgICAgICAgLmFkZENsYXNzKCRzZWxlY3QuYXR0cignZGlzYWJsZWQnKSA/ICdkaXNhYmxlZCcgOiAnJylcbiAgICAgICAgLmF0dHIoJ3RhYmluZGV4JywgJHNlbGVjdC5hdHRyKCdkaXNhYmxlZCcpID8gbnVsbCA6ICcwJylcbiAgICAgICAgLmh0bWwoJzxzcGFuIGNsYXNzPVwiY3VycmVudFwiPjwvc3Bhbj48dWwgY2xhc3M9XCJsaXN0XCI+PC91bD4nKVxuICAgICAgKTtcblxuICAgICAgdmFyICRkcm9wZG93biA9ICRzZWxlY3QubmV4dCgpO1xuICAgICAgdmFyICRvcHRpb25zID0gJHNlbGVjdC5maW5kKCdvcHRpb24nKTtcbiAgICAgIHZhciAkc2VsZWN0ZWQgPSAkc2VsZWN0LmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpO1xuXG4gICAgICAkZHJvcGRvd24uZmluZCgnLmN1cnJlbnQnKS5odG1sKCRzZWxlY3RlZC5kYXRhKCdkaXNwbGF5JykgfHzCoCRzZWxlY3RlZC50ZXh0KCkpO1xuXG4gICAgICAkb3B0aW9ucy5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgdmFyICRvcHRpb24gPSAkKHRoaXMpO1xuICAgICAgICB2YXIgZGlzcGxheSA9ICRvcHRpb24uZGF0YSgnZGlzcGxheScpO1xuXG4gICAgICAgICRkcm9wZG93bi5maW5kKCd1bCcpLmFwcGVuZCgkKCc8bGk+PC9saT4nKVxuICAgICAgICAgIC5hdHRyKCdkYXRhLXZhbHVlJywgJG9wdGlvbi52YWwoKSlcbiAgICAgICAgICAuYXR0cignZGF0YS1kaXNwbGF5JywgKGRpc3BsYXkgfHwgbnVsbCkpXG4gICAgICAgICAgLmFkZENsYXNzKCdvcHRpb24nICtcbiAgICAgICAgICAgICgkb3B0aW9uLmlzKCc6c2VsZWN0ZWQnKSA/ICcgc2VsZWN0ZWQnIDogJycpICtcbiAgICAgICAgICAgICgkb3B0aW9uLmlzKCc6ZGlzYWJsZWQnKSA/ICcgZGlzYWJsZWQnIDogJycpKVxuICAgICAgICAgIC5odG1sKCRvcHRpb24udGV4dCgpKVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyogRXZlbnQgbGlzdGVuZXJzICovXG5cbiAgICAvLyBVbmJpbmQgZXhpc3RpbmcgZXZlbnRzIGluIGNhc2UgdGhhdCB0aGUgcGx1Z2luIGhhcyBiZWVuIGluaXRpYWxpemVkIGJlZm9yZVxuICAgICQoZG9jdW1lbnQpLm9mZignLm5pY2Vfc2VsZWN0Jyk7XG5cbiAgICAvLyBPcGVuL2Nsb3NlXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrLm5pY2Vfc2VsZWN0JywgJy5uaWNlLXNlbGVjdCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICB2YXIgJGRyb3Bkb3duID0gJCh0aGlzKTtcblxuICAgICAgJCgnLm5pY2Utc2VsZWN0Jykubm90KCRkcm9wZG93bikucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICRkcm9wZG93bi50b2dnbGVDbGFzcygnb3BlbicpO1xuXG4gICAgICBpZiAoJGRyb3Bkb3duLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICAgJGRyb3Bkb3duLmZpbmQoJy5vcHRpb24nKTtcbiAgICAgICAgJGRyb3Bkb3duLmZpbmQoJy5mb2N1cycpLnJlbW92ZUNsYXNzKCdmb2N1cycpO1xuICAgICAgICAkZHJvcGRvd24uZmluZCgnLnNlbGVjdGVkJykuYWRkQ2xhc3MoJ2ZvY3VzJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkZHJvcGRvd24uZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIENsb3NlIHdoZW4gY2xpY2tpbmcgb3V0c2lkZVxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljay5uaWNlX3NlbGVjdCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAoJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJy5uaWNlLXNlbGVjdCcpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAkKCcubmljZS1zZWxlY3QnKS5yZW1vdmVDbGFzcygnb3BlbicpLmZpbmQoJy5vcHRpb24nKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIE9wdGlvbiBjbGlja1xuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljay5uaWNlX3NlbGVjdCcsICcubmljZS1zZWxlY3QgLm9wdGlvbjpub3QoLmRpc2FibGVkKScsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICB2YXIgJG9wdGlvbiA9ICQodGhpcyk7XG4gICAgICB2YXIgJGRyb3Bkb3duID0gJG9wdGlvbi5jbG9zZXN0KCcubmljZS1zZWxlY3QnKTtcblxuICAgICAgJGRyb3Bkb3duLmZpbmQoJy5zZWxlY3RlZCcpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgJG9wdGlvbi5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcblxuICAgICAgdmFyIHRleHQgPSAkb3B0aW9uLmRhdGEoJ2Rpc3BsYXknKSB8fCAkb3B0aW9uLnRleHQoKTtcbiAgICAgICRkcm9wZG93bi5maW5kKCcuY3VycmVudCcpLnRleHQodGV4dCk7XG5cbiAgICAgICRkcm9wZG93bi5wcmV2KCdzZWxlY3QnKS52YWwoJG9wdGlvbi5kYXRhKCd2YWx1ZScpKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICB9KTtcblxuICAgIC8vIEtleWJvYXJkIGV2ZW50c1xuICAgICQoZG9jdW1lbnQpLm9uKCdrZXlkb3duLm5pY2Vfc2VsZWN0JywgJy5uaWNlLXNlbGVjdCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICB2YXIgJGRyb3Bkb3duID0gJCh0aGlzKTtcbiAgICAgIHZhciAkZm9jdXNlZF9vcHRpb24gPSAkKCRkcm9wZG93bi5maW5kKCcuZm9jdXMnKSB8fCAkZHJvcGRvd24uZmluZCgnLmxpc3QgLm9wdGlvbi5zZWxlY3RlZCcpKTtcblxuICAgICAgLy8gU3BhY2Ugb3IgRW50ZXJcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09IDMyIHx8IGV2ZW50LmtleUNvZGUgPT0gMTMpIHtcbiAgICAgICAgaWYgKCRkcm9wZG93bi5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgICAgICAgJGZvY3VzZWRfb3B0aW9uLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGRyb3Bkb3duLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgLy8gRG93blxuICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09IDQwKSB7XG4gICAgICAgIGlmICghJGRyb3Bkb3duLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICAgICAkZHJvcGRvd24udHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgJG5leHQgPSAkZm9jdXNlZF9vcHRpb24ubmV4dEFsbCgnLm9wdGlvbjpub3QoLmRpc2FibGVkKScpLmZpcnN0KCk7XG4gICAgICAgICAgaWYgKCRuZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICRkcm9wZG93bi5maW5kKCcuZm9jdXMnKS5yZW1vdmVDbGFzcygnZm9jdXMnKTtcbiAgICAgICAgICAgICRuZXh0LmFkZENsYXNzKCdmb2N1cycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAvLyBVcFxuICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09IDM4KSB7XG4gICAgICAgIGlmICghJGRyb3Bkb3duLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICAgICAkZHJvcGRvd24udHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgJHByZXYgPSAkZm9jdXNlZF9vcHRpb24ucHJldkFsbCgnLm9wdGlvbjpub3QoLmRpc2FibGVkKScpLmZpcnN0KCk7XG4gICAgICAgICAgaWYgKCRwcmV2Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICRkcm9wZG93bi5maW5kKCcuZm9jdXMnKS5yZW1vdmVDbGFzcygnZm9jdXMnKTtcbiAgICAgICAgICAgICRwcmV2LmFkZENsYXNzKCdmb2N1cycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAvLyBFc2NcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PSAyNykge1xuICAgICAgICBpZiAoJGRyb3Bkb3duLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICAgICAkZHJvcGRvd24udHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgfVxuICAgICAgLy8gVGFiXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT0gOSkge1xuICAgICAgICBpZiAoJGRyb3Bkb3duLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIERldGVjdCBDU1MgcG9pbnRlci1ldmVudHMgc3VwcG9ydCwgZm9yIElFIDw9IDEwLiBGcm9tIE1vZGVybml6ci5cbiAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJykuc3R5bGU7XG4gICAgc3R5bGUuY3NzVGV4dCA9ICdwb2ludGVyLWV2ZW50czphdXRvJztcbiAgICBpZiAoc3R5bGUucG9pbnRlckV2ZW50cyAhPT0gJ2F1dG8nKSB7XG4gICAgICAkKCdodG1sJykuYWRkQ2xhc3MoJ25vLWNzc3BvaW50ZXJldmVudHMnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcblxuICB9O1xuXG59KGpRdWVyeSkpO1xuKGZ1bmN0aW9uKCQpe1xuXG4gICQuZm4udHdlbnR5dHdlbnR5ID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIHZhciBvcHRpb25zID0gJC5leHRlbmQoe1xuICAgICAgZGVmYXVsdF9vZmZzZXRfcGN0OiAwLjUsXG4gICAgICBvcmllbnRhdGlvbjogJ2hvcml6b250YWwnLFxuICAgICAgYmVmb3JlX2xhYmVsOiAnQmVmb3JlJyxcbiAgICAgIGFmdGVyX2xhYmVsOiAnQWZ0ZXInLFxuICAgICAgbm9fb3ZlcmxheTogZmFsc2UsXG4gICAgICBtb3ZlX3NsaWRlcl9vbl9ob3ZlcjogZmFsc2UsXG4gICAgICBtb3ZlX3dpdGhfaGFuZGxlX29ubHk6IHRydWUsXG4gICAgICBjbGlja190b19tb3ZlOiBmYWxzZVxuICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcblxuICAgICAgdmFyIHNsaWRlclBjdCA9IG9wdGlvbnMuZGVmYXVsdF9vZmZzZXRfcGN0O1xuICAgICAgdmFyIGNvbnRhaW5lciA9ICQodGhpcyk7XG4gICAgICB2YXIgc2xpZGVyT3JpZW50YXRpb24gPSBvcHRpb25zLm9yaWVudGF0aW9uO1xuICAgICAgdmFyIGJlZm9yZURpcmVjdGlvbiA9IChzbGlkZXJPcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykgPyAnZG93bicgOiAnbGVmdCc7XG4gICAgICB2YXIgYWZ0ZXJEaXJlY3Rpb24gPSAoc2xpZGVyT3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpID8gJ3VwJyA6ICdyaWdodCc7XG5cblxuICAgICAgY29udGFpbmVyLndyYXAoXCI8ZGl2IGNsYXNzPSd0d2VudHl0d2VudHktd3JhcHBlciB0d2VudHl0d2VudHktXCIgKyBzbGlkZXJPcmllbnRhdGlvbiArIFwiJz48L2Rpdj5cIik7XG4gICAgICBpZighb3B0aW9ucy5ub19vdmVybGF5KSB7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoXCI8ZGl2IGNsYXNzPSd0d2VudHl0d2VudHktb3ZlcmxheSc+PC9kaXY+XCIpO1xuICAgICAgICB2YXIgb3ZlcmxheSA9IGNvbnRhaW5lci5maW5kKFwiLnR3ZW50eXR3ZW50eS1vdmVybGF5XCIpO1xuICAgICAgICBvdmVybGF5LmFwcGVuZChcIjxkaXYgY2xhc3M9J3R3ZW50eXR3ZW50eS1iZWZvcmUtbGFiZWwnIGRhdGEtY29udGVudD0nXCIrb3B0aW9ucy5iZWZvcmVfbGFiZWwrXCInPjwvZGl2PlwiKTtcbiAgICAgICAgb3ZlcmxheS5hcHBlbmQoXCI8ZGl2IGNsYXNzPSd0d2VudHl0d2VudHktYWZ0ZXItbGFiZWwnIGRhdGEtY29udGVudD0nXCIrb3B0aW9ucy5hZnRlcl9sYWJlbCtcIic+PC9kaXY+XCIpO1xuICAgICAgfVxuICAgICAgdmFyIGJlZm9yZUltZyA9IGNvbnRhaW5lci5maW5kKFwiaW1nOmZpcnN0XCIpO1xuICAgICAgdmFyIGFmdGVySW1nID0gY29udGFpbmVyLmZpbmQoXCJpbWc6bGFzdFwiKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmQoXCI8ZGl2IGNsYXNzPSd0d2VudHl0d2VudHktaGFuZGxlJz48L2Rpdj5cIik7XG4gICAgICB2YXIgc2xpZGVyID0gY29udGFpbmVyLmZpbmQoXCIudHdlbnR5dHdlbnR5LWhhbmRsZVwiKTtcbiAgICAgIHNsaWRlci5hcHBlbmQoXCI8c3BhbiBjbGFzcz0ndHdlbnR5dHdlbnR5LVwiICsgYmVmb3JlRGlyZWN0aW9uICsgXCItYXJyb3cnPjwvc3Bhbj5cIik7XG4gICAgICBzbGlkZXIuYXBwZW5kKFwiPHNwYW4gY2xhc3M9J3R3ZW50eXR3ZW50eS1cIiArIGFmdGVyRGlyZWN0aW9uICsgXCItYXJyb3cnPjwvc3Bhbj5cIik7XG4gICAgICBjb250YWluZXIuYWRkQ2xhc3MoXCJ0d2VudHl0d2VudHktY29udGFpbmVyXCIpO1xuICAgICAgYmVmb3JlSW1nLmFkZENsYXNzKFwidHdlbnR5dHdlbnR5LWJlZm9yZVwiKTtcbiAgICAgIGFmdGVySW1nLmFkZENsYXNzKFwidHdlbnR5dHdlbnR5LWFmdGVyXCIpO1xuXG4gICAgICB2YXIgY2FsY09mZnNldCA9IGZ1bmN0aW9uKGRpbWVuc2lvblBjdCkge1xuICAgICAgICB2YXIgdyA9IGJlZm9yZUltZy53aWR0aCgpO1xuICAgICAgICB2YXIgaCA9IGJlZm9yZUltZy5oZWlnaHQoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB3OiB3K1wicHhcIixcbiAgICAgICAgICBoOiBoK1wicHhcIixcbiAgICAgICAgICBjdzogKGRpbWVuc2lvblBjdCp3KStcInB4XCIsXG4gICAgICAgICAgY2g6IChkaW1lbnNpb25QY3QqaCkrXCJweFwiXG4gICAgICAgIH07XG4gICAgICB9O1xuXG4gICAgICB2YXIgYWRqdXN0Q29udGFpbmVyID0gZnVuY3Rpb24ob2Zmc2V0KSB7XG4gICAgICBcdGlmIChzbGlkZXJPcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgIGJlZm9yZUltZy5jc3MoXCJjbGlwXCIsIFwicmVjdCgwLFwiK29mZnNldC53K1wiLFwiK29mZnNldC5jaCtcIiwwKVwiKTtcbiAgICAgICAgICBhZnRlckltZy5jc3MoXCJjbGlwXCIsIFwicmVjdChcIitvZmZzZXQuY2grXCIsXCIrb2Zmc2V0LncrXCIsXCIrb2Zmc2V0LmgrXCIsMClcIik7XG4gICAgICBcdH1cbiAgICAgIFx0ZWxzZSB7XG4gICAgICAgICAgYmVmb3JlSW1nLmNzcyhcImNsaXBcIiwgXCJyZWN0KDAsXCIrb2Zmc2V0LmN3K1wiLFwiK29mZnNldC5oK1wiLDApXCIpO1xuICAgICAgICAgIGFmdGVySW1nLmNzcyhcImNsaXBcIiwgXCJyZWN0KDAsXCIrb2Zmc2V0LncrXCIsXCIrb2Zmc2V0LmgrXCIsXCIrb2Zmc2V0LmN3K1wiKVwiKTtcbiAgICBcdH1cbiAgICAgICAgY29udGFpbmVyLmNzcyhcImhlaWdodFwiLCBvZmZzZXQuaCk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgYWRqdXN0U2xpZGVyID0gZnVuY3Rpb24ocGN0KSB7XG4gICAgICAgIHZhciBvZmZzZXQgPSBjYWxjT2Zmc2V0KHBjdCk7XG4gICAgICAgIHNsaWRlci5jc3MoKHNsaWRlck9yaWVudGF0aW9uPT09XCJ2ZXJ0aWNhbFwiKSA/IFwidG9wXCIgOiBcImxlZnRcIiwgKHNsaWRlck9yaWVudGF0aW9uPT09XCJ2ZXJ0aWNhbFwiKSA/IG9mZnNldC5jaCA6IG9mZnNldC5jdyk7XG4gICAgICAgIGFkanVzdENvbnRhaW5lcihvZmZzZXQpO1xuICAgICAgfTtcblxuICAgICAgLy8gUmV0dXJuIHRoZSBudW1iZXIgc3BlY2lmaWVkIG9yIHRoZSBtaW4vbWF4IG51bWJlciBpZiBpdCBvdXRzaWRlIHRoZSByYW5nZSBnaXZlbi5cbiAgICAgIHZhciBtaW5NYXhOdW1iZXIgPSBmdW5jdGlvbihudW0sIG1pbiwgbWF4KSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgbnVtKSk7XG4gICAgICB9O1xuXG4gICAgICAvLyBDYWxjdWxhdGUgdGhlIHNsaWRlciBwZXJjZW50YWdlIGJhc2VkIG9uIHRoZSBwb3NpdGlvbi5cbiAgICAgIHZhciBnZXRTbGlkZXJQZXJjZW50YWdlID0gZnVuY3Rpb24ocG9zaXRpb25YLCBwb3NpdGlvblkpIHtcbiAgICAgICAgdmFyIHNsaWRlclBlcmNlbnRhZ2UgPSAoc2xpZGVyT3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpID9cbiAgICAgICAgICAocG9zaXRpb25ZLW9mZnNldFkpL2ltZ0hlaWdodCA6XG4gICAgICAgICAgKHBvc2l0aW9uWC1vZmZzZXRYKS9pbWdXaWR0aDtcblxuICAgICAgICByZXR1cm4gbWluTWF4TnVtYmVyKHNsaWRlclBlcmNlbnRhZ2UsIDAsIDEpO1xuICAgICAgfTtcblxuXG4gICAgICAkKHdpbmRvdykub24oXCJyZXNpemUudHdlbnR5dHdlbnR5XCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgYWRqdXN0U2xpZGVyKHNsaWRlclBjdCk7XG4gICAgICB9KTtcblxuICAgICAgdmFyIG9mZnNldFggPSAwO1xuICAgICAgdmFyIG9mZnNldFkgPSAwO1xuICAgICAgdmFyIGltZ1dpZHRoID0gMDtcbiAgICAgIHZhciBpbWdIZWlnaHQgPSAwO1xuICAgICAgdmFyIG9uTW92ZVN0YXJ0ID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoKChlLmRpc3RYID4gZS5kaXN0WSAmJiBlLmRpc3RYIDwgLWUuZGlzdFkpIHx8IChlLmRpc3RYIDwgZS5kaXN0WSAmJiBlLmRpc3RYID4gLWUuZGlzdFkpKSAmJiBzbGlkZXJPcmllbnRhdGlvbiAhPT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgoKGUuZGlzdFggPCBlLmRpc3RZICYmIGUuZGlzdFggPCAtZS5kaXN0WSkgfHwgKGUuZGlzdFggPiBlLmRpc3RZICYmIGUuZGlzdFggPiAtZS5kaXN0WSkpICYmIHNsaWRlck9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRhaW5lci5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgb2Zmc2V0WCA9IGNvbnRhaW5lci5vZmZzZXQoKS5sZWZ0O1xuICAgICAgICBvZmZzZXRZID0gY29udGFpbmVyLm9mZnNldCgpLnRvcDtcbiAgICAgICAgaW1nV2lkdGggPSBiZWZvcmVJbWcud2lkdGgoKTtcbiAgICAgICAgaW1nSGVpZ2h0ID0gYmVmb3JlSW1nLmhlaWdodCgpO1xuICAgICAgfTtcbiAgICAgIHZhciBvbk1vdmUgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmIChjb250YWluZXIuaGFzQ2xhc3MoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgICBzbGlkZXJQY3QgPSBnZXRTbGlkZXJQZXJjZW50YWdlKGUucGFnZVgsIGUucGFnZVkpO1xuICAgICAgICAgIGFkanVzdFNsaWRlcihzbGlkZXJQY3QpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdmFyIG9uTW92ZUVuZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBtb3ZlVGFyZ2V0ID0gb3B0aW9ucy5tb3ZlX3dpdGhfaGFuZGxlX29ubHkgPyBzbGlkZXIgOiBjb250YWluZXI7XG4gICAgICBtb3ZlVGFyZ2V0Lm9uKFwibW92ZXN0YXJ0XCIsb25Nb3ZlU3RhcnQpO1xuICAgICAgbW92ZVRhcmdldC5vbihcIm1vdmVcIixvbk1vdmUpO1xuICAgICAgbW92ZVRhcmdldC5vbihcIm1vdmVlbmRcIixvbk1vdmVFbmQpO1xuXG4gICAgICBpZiAob3B0aW9ucy5tb3ZlX3NsaWRlcl9vbl9ob3Zlcikge1xuICAgICAgICBjb250YWluZXIub24oXCJtb3VzZWVudGVyXCIsIG9uTW92ZVN0YXJ0KTtcbiAgICAgICAgY29udGFpbmVyLm9uKFwibW91c2Vtb3ZlXCIsIG9uTW92ZSk7XG4gICAgICAgIGNvbnRhaW5lci5vbihcIm1vdXNlbGVhdmVcIiwgb25Nb3ZlRW5kKTtcbiAgICAgIH1cblxuICAgICAgc2xpZGVyLm9uKFwidG91Y2htb3ZlXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnRhaW5lci5maW5kKFwiaW1nXCIpLm9uKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKG9wdGlvbnMuY2xpY2tfdG9fbW92ZSkge1xuICAgICAgICBjb250YWluZXIub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgIG9mZnNldFggPSBjb250YWluZXIub2Zmc2V0KCkubGVmdDtcbiAgICAgICAgICBvZmZzZXRZID0gY29udGFpbmVyLm9mZnNldCgpLnRvcDtcbiAgICAgICAgICBpbWdXaWR0aCA9IGJlZm9yZUltZy53aWR0aCgpO1xuICAgICAgICAgIGltZ0hlaWdodCA9IGJlZm9yZUltZy5oZWlnaHQoKTtcblxuICAgICAgICAgIHNsaWRlclBjdCA9IGdldFNsaWRlclBlcmNlbnRhZ2UoZS5wYWdlWCwgZS5wYWdlWSk7XG4gICAgICAgICAgYWRqdXN0U2xpZGVyKHNsaWRlclBjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAkKHdpbmRvdykudHJpZ2dlcihcInJlc2l6ZS50d2VudHl0d2VudHlcIik7XG4gICAgfSk7XG4gIH07XG5cbn0pKGpRdWVyeSk7XG5cbi8qISBqUXVlcnkgVmFsaWRhdGlvbiBQbHVnaW4gLSB2MS4xOS4xIC0gNi8xNS8yMDE5XG4gKiBodHRwczovL2pxdWVyeXZhbGlkYXRpb24ub3JnL1xuICogQ29weXJpZ2h0IChjKSAyMDE5IErDtnJuIFphZWZmZXJlcjsgTGljZW5zZWQgTUlUICovXG4hZnVuY3Rpb24oYSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJqcXVlcnlcIl0sYSk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9YShyZXF1aXJlKFwianF1ZXJ5XCIpKTphKGpRdWVyeSl9KGZ1bmN0aW9uKGEpe2EuZXh0ZW5kKGEuZm4se3ZhbGlkYXRlOmZ1bmN0aW9uKGIpe2lmKCF0aGlzLmxlbmd0aClyZXR1cm4gdm9pZChiJiZiLmRlYnVnJiZ3aW5kb3cuY29uc29sZSYmY29uc29sZS53YXJuKFwiTm90aGluZyBzZWxlY3RlZCwgY2FuJ3QgdmFsaWRhdGUsIHJldHVybmluZyBub3RoaW5nLlwiKSk7dmFyIGM9YS5kYXRhKHRoaXNbMF0sXCJ2YWxpZGF0b3JcIik7cmV0dXJuIGM/YzoodGhpcy5hdHRyKFwibm92YWxpZGF0ZVwiLFwibm92YWxpZGF0ZVwiKSxjPW5ldyBhLnZhbGlkYXRvcihiLHRoaXNbMF0pLGEuZGF0YSh0aGlzWzBdLFwidmFsaWRhdG9yXCIsYyksYy5zZXR0aW5ncy5vbnN1Ym1pdCYmKHRoaXMub24oXCJjbGljay52YWxpZGF0ZVwiLFwiOnN1Ym1pdFwiLGZ1bmN0aW9uKGIpe2Muc3VibWl0QnV0dG9uPWIuY3VycmVudFRhcmdldCxhKHRoaXMpLmhhc0NsYXNzKFwiY2FuY2VsXCIpJiYoYy5jYW5jZWxTdWJtaXQ9ITApLHZvaWQgMCE9PWEodGhpcykuYXR0cihcImZvcm1ub3ZhbGlkYXRlXCIpJiYoYy5jYW5jZWxTdWJtaXQ9ITApfSksdGhpcy5vbihcInN1Ym1pdC52YWxpZGF0ZVwiLGZ1bmN0aW9uKGIpe2Z1bmN0aW9uIGQoKXt2YXIgZCxlO3JldHVybiBjLnN1Ym1pdEJ1dHRvbiYmKGMuc2V0dGluZ3Muc3VibWl0SGFuZGxlcnx8Yy5mb3JtU3VibWl0dGVkKSYmKGQ9YShcIjxpbnB1dCB0eXBlPSdoaWRkZW4nLz5cIikuYXR0cihcIm5hbWVcIixjLnN1Ym1pdEJ1dHRvbi5uYW1lKS52YWwoYShjLnN1Ym1pdEJ1dHRvbikudmFsKCkpLmFwcGVuZFRvKGMuY3VycmVudEZvcm0pKSwhKGMuc2V0dGluZ3Muc3VibWl0SGFuZGxlciYmIWMuc2V0dGluZ3MuZGVidWcpfHwoZT1jLnNldHRpbmdzLnN1Ym1pdEhhbmRsZXIuY2FsbChjLGMuY3VycmVudEZvcm0sYiksZCYmZC5yZW1vdmUoKSx2b2lkIDAhPT1lJiZlKX1yZXR1cm4gYy5zZXR0aW5ncy5kZWJ1ZyYmYi5wcmV2ZW50RGVmYXVsdCgpLGMuY2FuY2VsU3VibWl0PyhjLmNhbmNlbFN1Ym1pdD0hMSxkKCkpOmMuZm9ybSgpP2MucGVuZGluZ1JlcXVlc3Q/KGMuZm9ybVN1Ym1pdHRlZD0hMCwhMSk6ZCgpOihjLmZvY3VzSW52YWxpZCgpLCExKX0pKSxjKX0sdmFsaWQ6ZnVuY3Rpb24oKXt2YXIgYixjLGQ7cmV0dXJuIGEodGhpc1swXSkuaXMoXCJmb3JtXCIpP2I9dGhpcy52YWxpZGF0ZSgpLmZvcm0oKTooZD1bXSxiPSEwLGM9YSh0aGlzWzBdLmZvcm0pLnZhbGlkYXRlKCksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Yj1jLmVsZW1lbnQodGhpcykmJmIsYnx8KGQ9ZC5jb25jYXQoYy5lcnJvckxpc3QpKX0pLGMuZXJyb3JMaXN0PWQpLGJ9LHJ1bGVzOmZ1bmN0aW9uKGIsYyl7dmFyIGQsZSxmLGcsaCxpLGo9dGhpc1swXSxrPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB0aGlzLmF0dHIoXCJjb250ZW50ZWRpdGFibGVcIikmJlwiZmFsc2VcIiE9PXRoaXMuYXR0cihcImNvbnRlbnRlZGl0YWJsZVwiKTtpZihudWxsIT1qJiYoIWouZm9ybSYmayYmKGouZm9ybT10aGlzLmNsb3Nlc3QoXCJmb3JtXCIpWzBdLGoubmFtZT10aGlzLmF0dHIoXCJuYW1lXCIpKSxudWxsIT1qLmZvcm0pKXtpZihiKXN3aXRjaChkPWEuZGF0YShqLmZvcm0sXCJ2YWxpZGF0b3JcIikuc2V0dGluZ3MsZT1kLnJ1bGVzLGY9YS52YWxpZGF0b3Iuc3RhdGljUnVsZXMoaiksYil7Y2FzZVwiYWRkXCI6YS5leHRlbmQoZixhLnZhbGlkYXRvci5ub3JtYWxpemVSdWxlKGMpKSxkZWxldGUgZi5tZXNzYWdlcyxlW2oubmFtZV09ZixjLm1lc3NhZ2VzJiYoZC5tZXNzYWdlc1tqLm5hbWVdPWEuZXh0ZW5kKGQubWVzc2FnZXNbai5uYW1lXSxjLm1lc3NhZ2VzKSk7YnJlYWs7Y2FzZVwicmVtb3ZlXCI6cmV0dXJuIGM/KGk9e30sYS5lYWNoKGMuc3BsaXQoL1xccy8pLGZ1bmN0aW9uKGEsYil7aVtiXT1mW2JdLGRlbGV0ZSBmW2JdfSksaSk6KGRlbGV0ZSBlW2oubmFtZV0sZil9cmV0dXJuIGc9YS52YWxpZGF0b3Iubm9ybWFsaXplUnVsZXMoYS5leHRlbmQoe30sYS52YWxpZGF0b3IuY2xhc3NSdWxlcyhqKSxhLnZhbGlkYXRvci5hdHRyaWJ1dGVSdWxlcyhqKSxhLnZhbGlkYXRvci5kYXRhUnVsZXMoaiksYS52YWxpZGF0b3Iuc3RhdGljUnVsZXMoaikpLGopLGcucmVxdWlyZWQmJihoPWcucmVxdWlyZWQsZGVsZXRlIGcucmVxdWlyZWQsZz1hLmV4dGVuZCh7cmVxdWlyZWQ6aH0sZykpLGcucmVtb3RlJiYoaD1nLnJlbW90ZSxkZWxldGUgZy5yZW1vdGUsZz1hLmV4dGVuZChnLHtyZW1vdGU6aH0pKSxnfX19KSxhLmV4dGVuZChhLmV4cHIucHNldWRvc3x8YS5leHByW1wiOlwiXSx7Ymxhbms6ZnVuY3Rpb24oYil7cmV0dXJuIWEudHJpbShcIlwiK2EoYikudmFsKCkpfSxmaWxsZWQ6ZnVuY3Rpb24oYil7dmFyIGM9YShiKS52YWwoKTtyZXR1cm4gbnVsbCE9PWMmJiEhYS50cmltKFwiXCIrYyl9LHVuY2hlY2tlZDpmdW5jdGlvbihiKXtyZXR1cm4hYShiKS5wcm9wKFwiY2hlY2tlZFwiKX19KSxhLnZhbGlkYXRvcj1mdW5jdGlvbihiLGMpe3RoaXMuc2V0dGluZ3M9YS5leHRlbmQoITAse30sYS52YWxpZGF0b3IuZGVmYXVsdHMsYiksdGhpcy5jdXJyZW50Rm9ybT1jLHRoaXMuaW5pdCgpfSxhLnZhbGlkYXRvci5mb3JtYXQ9ZnVuY3Rpb24oYixjKXtyZXR1cm4gMT09PWFyZ3VtZW50cy5sZW5ndGg/ZnVuY3Rpb24oKXt2YXIgYz1hLm1ha2VBcnJheShhcmd1bWVudHMpO3JldHVybiBjLnVuc2hpZnQoYiksYS52YWxpZGF0b3IuZm9ybWF0LmFwcGx5KHRoaXMsYyl9OnZvaWQgMD09PWM/YjooYXJndW1lbnRzLmxlbmd0aD4yJiZjLmNvbnN0cnVjdG9yIT09QXJyYXkmJihjPWEubWFrZUFycmF5KGFyZ3VtZW50cykuc2xpY2UoMSkpLGMuY29uc3RydWN0b3IhPT1BcnJheSYmKGM9W2NdKSxhLmVhY2goYyxmdW5jdGlvbihhLGMpe2I9Yi5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcXFxce1wiK2ErXCJcXFxcfVwiLFwiZ1wiKSxmdW5jdGlvbigpe3JldHVybiBjfSl9KSxiKX0sYS5leHRlbmQoYS52YWxpZGF0b3Ise2RlZmF1bHRzOnttZXNzYWdlczp7fSxncm91cHM6e30scnVsZXM6e30sZXJyb3JDbGFzczpcImVycm9yXCIscGVuZGluZ0NsYXNzOlwicGVuZGluZ1wiLHZhbGlkQ2xhc3M6XCJ2YWxpZFwiLGVycm9yRWxlbWVudDpcImxhYmVsXCIsZm9jdXNDbGVhbnVwOiExLGZvY3VzSW52YWxpZDohMCxlcnJvckNvbnRhaW5lcjphKFtdKSxlcnJvckxhYmVsQ29udGFpbmVyOmEoW10pLG9uc3VibWl0OiEwLGlnbm9yZTpcIjpoaWRkZW5cIixpZ25vcmVUaXRsZTohMSxvbmZvY3VzaW46ZnVuY3Rpb24oYSl7dGhpcy5sYXN0QWN0aXZlPWEsdGhpcy5zZXR0aW5ncy5mb2N1c0NsZWFudXAmJih0aGlzLnNldHRpbmdzLnVuaGlnaGxpZ2h0JiZ0aGlzLnNldHRpbmdzLnVuaGlnaGxpZ2h0LmNhbGwodGhpcyxhLHRoaXMuc2V0dGluZ3MuZXJyb3JDbGFzcyx0aGlzLnNldHRpbmdzLnZhbGlkQ2xhc3MpLHRoaXMuaGlkZVRoZXNlKHRoaXMuZXJyb3JzRm9yKGEpKSl9LG9uZm9jdXNvdXQ6ZnVuY3Rpb24oYSl7dGhpcy5jaGVja2FibGUoYSl8fCEoYS5uYW1lIGluIHRoaXMuc3VibWl0dGVkKSYmdGhpcy5vcHRpb25hbChhKXx8dGhpcy5lbGVtZW50KGEpfSxvbmtleXVwOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9WzE2LDE3LDE4LDIwLDM1LDM2LDM3LDM4LDM5LDQwLDQ1LDE0NCwyMjVdOzk9PT1jLndoaWNoJiZcIlwiPT09dGhpcy5lbGVtZW50VmFsdWUoYil8fGEuaW5BcnJheShjLmtleUNvZGUsZCkhPT0tMXx8KGIubmFtZSBpbiB0aGlzLnN1Ym1pdHRlZHx8Yi5uYW1lIGluIHRoaXMuaW52YWxpZCkmJnRoaXMuZWxlbWVudChiKX0sb25jbGljazpmdW5jdGlvbihhKXthLm5hbWUgaW4gdGhpcy5zdWJtaXR0ZWQ/dGhpcy5lbGVtZW50KGEpOmEucGFyZW50Tm9kZS5uYW1lIGluIHRoaXMuc3VibWl0dGVkJiZ0aGlzLmVsZW1lbnQoYS5wYXJlbnROb2RlKX0saGlnaGxpZ2h0OmZ1bmN0aW9uKGIsYyxkKXtcInJhZGlvXCI9PT1iLnR5cGU/dGhpcy5maW5kQnlOYW1lKGIubmFtZSkuYWRkQ2xhc3MoYykucmVtb3ZlQ2xhc3MoZCk6YShiKS5hZGRDbGFzcyhjKS5yZW1vdmVDbGFzcyhkKX0sdW5oaWdobGlnaHQ6ZnVuY3Rpb24oYixjLGQpe1wicmFkaW9cIj09PWIudHlwZT90aGlzLmZpbmRCeU5hbWUoYi5uYW1lKS5yZW1vdmVDbGFzcyhjKS5hZGRDbGFzcyhkKTphKGIpLnJlbW92ZUNsYXNzKGMpLmFkZENsYXNzKGQpfX0sc2V0RGVmYXVsdHM6ZnVuY3Rpb24oYil7YS5leHRlbmQoYS52YWxpZGF0b3IuZGVmYXVsdHMsYil9LG1lc3NhZ2VzOntyZXF1aXJlZDpcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWQuXCIscmVtb3RlOlwiUGxlYXNlIGZpeCB0aGlzIGZpZWxkLlwiLGVtYWlsOlwiUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcy5cIix1cmw6XCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBVUkwuXCIsZGF0ZTpcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGRhdGUuXCIsZGF0ZUlTTzpcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGRhdGUgKElTTykuXCIsbnVtYmVyOlwiUGxlYXNlIGVudGVyIGEgdmFsaWQgbnVtYmVyLlwiLGRpZ2l0czpcIlBsZWFzZSBlbnRlciBvbmx5IGRpZ2l0cy5cIixlcXVhbFRvOlwiUGxlYXNlIGVudGVyIHRoZSBzYW1lIHZhbHVlIGFnYWluLlwiLG1heGxlbmd0aDphLnZhbGlkYXRvci5mb3JtYXQoXCJQbGVhc2UgZW50ZXIgbm8gbW9yZSB0aGFuIHswfSBjaGFyYWN0ZXJzLlwiKSxtaW5sZW5ndGg6YS52YWxpZGF0b3IuZm9ybWF0KFwiUGxlYXNlIGVudGVyIGF0IGxlYXN0IHswfSBjaGFyYWN0ZXJzLlwiKSxyYW5nZWxlbmd0aDphLnZhbGlkYXRvci5mb3JtYXQoXCJQbGVhc2UgZW50ZXIgYSB2YWx1ZSBiZXR3ZWVuIHswfSBhbmQgezF9IGNoYXJhY3RlcnMgbG9uZy5cIikscmFuZ2U6YS52YWxpZGF0b3IuZm9ybWF0KFwiUGxlYXNlIGVudGVyIGEgdmFsdWUgYmV0d2VlbiB7MH0gYW5kIHsxfS5cIiksbWF4OmEudmFsaWRhdG9yLmZvcm1hdChcIlBsZWFzZSBlbnRlciBhIHZhbHVlIGxlc3MgdGhhbiBvciBlcXVhbCB0byB7MH0uXCIpLG1pbjphLnZhbGlkYXRvci5mb3JtYXQoXCJQbGVhc2UgZW50ZXIgYSB2YWx1ZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gezB9LlwiKSxzdGVwOmEudmFsaWRhdG9yLmZvcm1hdChcIlBsZWFzZSBlbnRlciBhIG11bHRpcGxlIG9mIHswfS5cIil9LGF1dG9DcmVhdGVSYW5nZXM6ITEscHJvdG90eXBlOntpbml0OmZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihiKXt2YXIgYz1cInVuZGVmaW5lZFwiIT10eXBlb2YgYSh0aGlzKS5hdHRyKFwiY29udGVudGVkaXRhYmxlXCIpJiZcImZhbHNlXCIhPT1hKHRoaXMpLmF0dHIoXCJjb250ZW50ZWRpdGFibGVcIik7aWYoIXRoaXMuZm9ybSYmYyYmKHRoaXMuZm9ybT1hKHRoaXMpLmNsb3Nlc3QoXCJmb3JtXCIpWzBdLHRoaXMubmFtZT1hKHRoaXMpLmF0dHIoXCJuYW1lXCIpKSxkPT09dGhpcy5mb3JtKXt2YXIgZT1hLmRhdGEodGhpcy5mb3JtLFwidmFsaWRhdG9yXCIpLGY9XCJvblwiK2IudHlwZS5yZXBsYWNlKC9edmFsaWRhdGUvLFwiXCIpLGc9ZS5zZXR0aW5ncztnW2ZdJiYhYSh0aGlzKS5pcyhnLmlnbm9yZSkmJmdbZl0uY2FsbChlLHRoaXMsYil9fXRoaXMubGFiZWxDb250YWluZXI9YSh0aGlzLnNldHRpbmdzLmVycm9yTGFiZWxDb250YWluZXIpLHRoaXMuZXJyb3JDb250ZXh0PXRoaXMubGFiZWxDb250YWluZXIubGVuZ3RoJiZ0aGlzLmxhYmVsQ29udGFpbmVyfHxhKHRoaXMuY3VycmVudEZvcm0pLHRoaXMuY29udGFpbmVycz1hKHRoaXMuc2V0dGluZ3MuZXJyb3JDb250YWluZXIpLmFkZCh0aGlzLnNldHRpbmdzLmVycm9yTGFiZWxDb250YWluZXIpLHRoaXMuc3VibWl0dGVkPXt9LHRoaXMudmFsdWVDYWNoZT17fSx0aGlzLnBlbmRpbmdSZXF1ZXN0PTAsdGhpcy5wZW5kaW5nPXt9LHRoaXMuaW52YWxpZD17fSx0aGlzLnJlc2V0KCk7dmFyIGMsZD10aGlzLmN1cnJlbnRGb3JtLGU9dGhpcy5ncm91cHM9e307YS5lYWNoKHRoaXMuc2V0dGluZ3MuZ3JvdXBzLGZ1bmN0aW9uKGIsYyl7XCJzdHJpbmdcIj09dHlwZW9mIGMmJihjPWMuc3BsaXQoL1xccy8pKSxhLmVhY2goYyxmdW5jdGlvbihhLGMpe2VbY109Yn0pfSksYz10aGlzLnNldHRpbmdzLnJ1bGVzLGEuZWFjaChjLGZ1bmN0aW9uKGIsZCl7Y1tiXT1hLnZhbGlkYXRvci5ub3JtYWxpemVSdWxlKGQpfSksYSh0aGlzLmN1cnJlbnRGb3JtKS5vbihcImZvY3VzaW4udmFsaWRhdGUgZm9jdXNvdXQudmFsaWRhdGUga2V5dXAudmFsaWRhdGVcIixcIjp0ZXh0LCBbdHlwZT0ncGFzc3dvcmQnXSwgW3R5cGU9J2ZpbGUnXSwgc2VsZWN0LCB0ZXh0YXJlYSwgW3R5cGU9J251bWJlciddLCBbdHlwZT0nc2VhcmNoJ10sIFt0eXBlPSd0ZWwnXSwgW3R5cGU9J3VybCddLCBbdHlwZT0nZW1haWwnXSwgW3R5cGU9J2RhdGV0aW1lJ10sIFt0eXBlPSdkYXRlJ10sIFt0eXBlPSdtb250aCddLCBbdHlwZT0nd2VlayddLCBbdHlwZT0ndGltZSddLCBbdHlwZT0nZGF0ZXRpbWUtbG9jYWwnXSwgW3R5cGU9J3JhbmdlJ10sIFt0eXBlPSdjb2xvciddLCBbdHlwZT0ncmFkaW8nXSwgW3R5cGU9J2NoZWNrYm94J10sIFtjb250ZW50ZWRpdGFibGVdLCBbdHlwZT0nYnV0dG9uJ11cIixiKS5vbihcImNsaWNrLnZhbGlkYXRlXCIsXCJzZWxlY3QsIG9wdGlvbiwgW3R5cGU9J3JhZGlvJ10sIFt0eXBlPSdjaGVja2JveCddXCIsYiksdGhpcy5zZXR0aW5ncy5pbnZhbGlkSGFuZGxlciYmYSh0aGlzLmN1cnJlbnRGb3JtKS5vbihcImludmFsaWQtZm9ybS52YWxpZGF0ZVwiLHRoaXMuc2V0dGluZ3MuaW52YWxpZEhhbmRsZXIpfSxmb3JtOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2hlY2tGb3JtKCksYS5leHRlbmQodGhpcy5zdWJtaXR0ZWQsdGhpcy5lcnJvck1hcCksdGhpcy5pbnZhbGlkPWEuZXh0ZW5kKHt9LHRoaXMuZXJyb3JNYXApLHRoaXMudmFsaWQoKXx8YSh0aGlzLmN1cnJlbnRGb3JtKS50cmlnZ2VySGFuZGxlcihcImludmFsaWQtZm9ybVwiLFt0aGlzXSksdGhpcy5zaG93RXJyb3JzKCksdGhpcy52YWxpZCgpfSxjaGVja0Zvcm06ZnVuY3Rpb24oKXt0aGlzLnByZXBhcmVGb3JtKCk7Zm9yKHZhciBhPTAsYj10aGlzLmN1cnJlbnRFbGVtZW50cz10aGlzLmVsZW1lbnRzKCk7YlthXTthKyspdGhpcy5jaGVjayhiW2FdKTtyZXR1cm4gdGhpcy52YWxpZCgpfSxlbGVtZW50OmZ1bmN0aW9uKGIpe3ZhciBjLGQsZT10aGlzLmNsZWFuKGIpLGY9dGhpcy52YWxpZGF0aW9uVGFyZ2V0Rm9yKGUpLGc9dGhpcyxoPSEwO3JldHVybiB2b2lkIDA9PT1mP2RlbGV0ZSB0aGlzLmludmFsaWRbZS5uYW1lXToodGhpcy5wcmVwYXJlRWxlbWVudChmKSx0aGlzLmN1cnJlbnRFbGVtZW50cz1hKGYpLGQ9dGhpcy5ncm91cHNbZi5uYW1lXSxkJiZhLmVhY2godGhpcy5ncm91cHMsZnVuY3Rpb24oYSxiKXtiPT09ZCYmYSE9PWYubmFtZSYmKGU9Zy52YWxpZGF0aW9uVGFyZ2V0Rm9yKGcuY2xlYW4oZy5maW5kQnlOYW1lKGEpKSksZSYmZS5uYW1lIGluIGcuaW52YWxpZCYmKGcuY3VycmVudEVsZW1lbnRzLnB1c2goZSksaD1nLmNoZWNrKGUpJiZoKSl9KSxjPXRoaXMuY2hlY2soZikhPT0hMSxoPWgmJmMsYz90aGlzLmludmFsaWRbZi5uYW1lXT0hMTp0aGlzLmludmFsaWRbZi5uYW1lXT0hMCx0aGlzLm51bWJlck9mSW52YWxpZHMoKXx8KHRoaXMudG9IaWRlPXRoaXMudG9IaWRlLmFkZCh0aGlzLmNvbnRhaW5lcnMpKSx0aGlzLnNob3dFcnJvcnMoKSxhKGIpLmF0dHIoXCJhcmlhLWludmFsaWRcIiwhYykpLGh9LHNob3dFcnJvcnM6ZnVuY3Rpb24oYil7aWYoYil7dmFyIGM9dGhpczthLmV4dGVuZCh0aGlzLmVycm9yTWFwLGIpLHRoaXMuZXJyb3JMaXN0PWEubWFwKHRoaXMuZXJyb3JNYXAsZnVuY3Rpb24oYSxiKXtyZXR1cm57bWVzc2FnZTphLGVsZW1lbnQ6Yy5maW5kQnlOYW1lKGIpWzBdfX0pLHRoaXMuc3VjY2Vzc0xpc3Q9YS5ncmVwKHRoaXMuc3VjY2Vzc0xpc3QsZnVuY3Rpb24oYSl7cmV0dXJuIShhLm5hbWUgaW4gYil9KX10aGlzLnNldHRpbmdzLnNob3dFcnJvcnM/dGhpcy5zZXR0aW5ncy5zaG93RXJyb3JzLmNhbGwodGhpcyx0aGlzLmVycm9yTWFwLHRoaXMuZXJyb3JMaXN0KTp0aGlzLmRlZmF1bHRTaG93RXJyb3JzKCl9LHJlc2V0Rm9ybTpmdW5jdGlvbigpe2EuZm4ucmVzZXRGb3JtJiZhKHRoaXMuY3VycmVudEZvcm0pLnJlc2V0Rm9ybSgpLHRoaXMuaW52YWxpZD17fSx0aGlzLnN1Ym1pdHRlZD17fSx0aGlzLnByZXBhcmVGb3JtKCksdGhpcy5oaWRlRXJyb3JzKCk7dmFyIGI9dGhpcy5lbGVtZW50cygpLnJlbW92ZURhdGEoXCJwcmV2aW91c1ZhbHVlXCIpLnJlbW92ZUF0dHIoXCJhcmlhLWludmFsaWRcIik7dGhpcy5yZXNldEVsZW1lbnRzKGIpfSxyZXNldEVsZW1lbnRzOmZ1bmN0aW9uKGEpe3ZhciBiO2lmKHRoaXMuc2V0dGluZ3MudW5oaWdobGlnaHQpZm9yKGI9MDthW2JdO2IrKyl0aGlzLnNldHRpbmdzLnVuaGlnaGxpZ2h0LmNhbGwodGhpcyxhW2JdLHRoaXMuc2V0dGluZ3MuZXJyb3JDbGFzcyxcIlwiKSx0aGlzLmZpbmRCeU5hbWUoYVtiXS5uYW1lKS5yZW1vdmVDbGFzcyh0aGlzLnNldHRpbmdzLnZhbGlkQ2xhc3MpO2Vsc2UgYS5yZW1vdmVDbGFzcyh0aGlzLnNldHRpbmdzLmVycm9yQ2xhc3MpLnJlbW92ZUNsYXNzKHRoaXMuc2V0dGluZ3MudmFsaWRDbGFzcyl9LG51bWJlck9mSW52YWxpZHM6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5vYmplY3RMZW5ndGgodGhpcy5pbnZhbGlkKX0sb2JqZWN0TGVuZ3RoOmZ1bmN0aW9uKGEpe3ZhciBiLGM9MDtmb3IoYiBpbiBhKXZvaWQgMCE9PWFbYl0mJm51bGwhPT1hW2JdJiZhW2JdIT09ITEmJmMrKztyZXR1cm4gY30saGlkZUVycm9yczpmdW5jdGlvbigpe3RoaXMuaGlkZVRoZXNlKHRoaXMudG9IaWRlKX0saGlkZVRoZXNlOmZ1bmN0aW9uKGEpe2Eubm90KHRoaXMuY29udGFpbmVycykudGV4dChcIlwiKSx0aGlzLmFkZFdyYXBwZXIoYSkuaGlkZSgpfSx2YWxpZDpmdW5jdGlvbigpe3JldHVybiAwPT09dGhpcy5zaXplKCl9LHNpemU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcnJvckxpc3QubGVuZ3RofSxmb2N1c0ludmFsaWQ6ZnVuY3Rpb24oKXtpZih0aGlzLnNldHRpbmdzLmZvY3VzSW52YWxpZCl0cnl7YSh0aGlzLmZpbmRMYXN0QWN0aXZlKCl8fHRoaXMuZXJyb3JMaXN0Lmxlbmd0aCYmdGhpcy5lcnJvckxpc3RbMF0uZWxlbWVudHx8W10pLmZpbHRlcihcIjp2aXNpYmxlXCIpLnRyaWdnZXIoXCJmb2N1c1wiKS50cmlnZ2VyKFwiZm9jdXNpblwiKX1jYXRjaChiKXt9fSxmaW5kTGFzdEFjdGl2ZTpmdW5jdGlvbigpe3ZhciBiPXRoaXMubGFzdEFjdGl2ZTtyZXR1cm4gYiYmMT09PWEuZ3JlcCh0aGlzLmVycm9yTGlzdCxmdW5jdGlvbihhKXtyZXR1cm4gYS5lbGVtZW50Lm5hbWU9PT1iLm5hbWV9KS5sZW5ndGgmJmJ9LGVsZW1lbnRzOmZ1bmN0aW9uKCl7dmFyIGI9dGhpcyxjPXt9O3JldHVybiBhKHRoaXMuY3VycmVudEZvcm0pLmZpbmQoXCJpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSwgW2NvbnRlbnRlZGl0YWJsZV1cIikubm90KFwiOnN1Ym1pdCwgOnJlc2V0LCA6aW1hZ2UsIDpkaXNhYmxlZFwiKS5ub3QodGhpcy5zZXR0aW5ncy5pZ25vcmUpLmZpbHRlcihmdW5jdGlvbigpe3ZhciBkPXRoaXMubmFtZXx8YSh0aGlzKS5hdHRyKFwibmFtZVwiKSxlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBhKHRoaXMpLmF0dHIoXCJjb250ZW50ZWRpdGFibGVcIikmJlwiZmFsc2VcIiE9PWEodGhpcykuYXR0cihcImNvbnRlbnRlZGl0YWJsZVwiKTtyZXR1cm4hZCYmYi5zZXR0aW5ncy5kZWJ1ZyYmd2luZG93LmNvbnNvbGUmJmNvbnNvbGUuZXJyb3IoXCIlbyBoYXMgbm8gbmFtZSBhc3NpZ25lZFwiLHRoaXMpLGUmJih0aGlzLmZvcm09YSh0aGlzKS5jbG9zZXN0KFwiZm9ybVwiKVswXSx0aGlzLm5hbWU9ZCksdGhpcy5mb3JtPT09Yi5jdXJyZW50Rm9ybSYmKCEoZCBpbiBjfHwhYi5vYmplY3RMZW5ndGgoYSh0aGlzKS5ydWxlcygpKSkmJihjW2RdPSEwLCEwKSl9KX0sY2xlYW46ZnVuY3Rpb24oYil7cmV0dXJuIGEoYilbMF19LGVycm9yczpmdW5jdGlvbigpe3ZhciBiPXRoaXMuc2V0dGluZ3MuZXJyb3JDbGFzcy5zcGxpdChcIiBcIikuam9pbihcIi5cIik7cmV0dXJuIGEodGhpcy5zZXR0aW5ncy5lcnJvckVsZW1lbnQrXCIuXCIrYix0aGlzLmVycm9yQ29udGV4dCl9LHJlc2V0SW50ZXJuYWxzOmZ1bmN0aW9uKCl7dGhpcy5zdWNjZXNzTGlzdD1bXSx0aGlzLmVycm9yTGlzdD1bXSx0aGlzLmVycm9yTWFwPXt9LHRoaXMudG9TaG93PWEoW10pLHRoaXMudG9IaWRlPWEoW10pfSxyZXNldDpmdW5jdGlvbigpe3RoaXMucmVzZXRJbnRlcm5hbHMoKSx0aGlzLmN1cnJlbnRFbGVtZW50cz1hKFtdKX0scHJlcGFyZUZvcm06ZnVuY3Rpb24oKXt0aGlzLnJlc2V0KCksdGhpcy50b0hpZGU9dGhpcy5lcnJvcnMoKS5hZGQodGhpcy5jb250YWluZXJzKX0scHJlcGFyZUVsZW1lbnQ6ZnVuY3Rpb24oYSl7dGhpcy5yZXNldCgpLHRoaXMudG9IaWRlPXRoaXMuZXJyb3JzRm9yKGEpfSxlbGVtZW50VmFsdWU6ZnVuY3Rpb24oYil7dmFyIGMsZCxlPWEoYiksZj1iLnR5cGUsZz1cInVuZGVmaW5lZFwiIT10eXBlb2YgZS5hdHRyKFwiY29udGVudGVkaXRhYmxlXCIpJiZcImZhbHNlXCIhPT1lLmF0dHIoXCJjb250ZW50ZWRpdGFibGVcIik7cmV0dXJuXCJyYWRpb1wiPT09Znx8XCJjaGVja2JveFwiPT09Zj90aGlzLmZpbmRCeU5hbWUoYi5uYW1lKS5maWx0ZXIoXCI6Y2hlY2tlZFwiKS52YWwoKTpcIm51bWJlclwiPT09ZiYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIudmFsaWRpdHk/Yi52YWxpZGl0eS5iYWRJbnB1dD9cIk5hTlwiOmUudmFsKCk6KGM9Zz9lLnRleHQoKTplLnZhbCgpLFwiZmlsZVwiPT09Zj9cIkM6XFxcXGZha2VwYXRoXFxcXFwiPT09Yy5zdWJzdHIoMCwxMik/Yy5zdWJzdHIoMTIpOihkPWMubGFzdEluZGV4T2YoXCIvXCIpLGQ+PTA/Yy5zdWJzdHIoZCsxKTooZD1jLmxhc3RJbmRleE9mKFwiXFxcXFwiKSxkPj0wP2Muc3Vic3RyKGQrMSk6YykpOlwic3RyaW5nXCI9PXR5cGVvZiBjP2MucmVwbGFjZSgvXFxyL2csXCJcIik6Yyl9LGNoZWNrOmZ1bmN0aW9uKGIpe2I9dGhpcy52YWxpZGF0aW9uVGFyZ2V0Rm9yKHRoaXMuY2xlYW4oYikpO3ZhciBjLGQsZSxmLGc9YShiKS5ydWxlcygpLGg9YS5tYXAoZyxmdW5jdGlvbihhLGIpe3JldHVybiBifSkubGVuZ3RoLGk9ITEsaj10aGlzLmVsZW1lbnRWYWx1ZShiKTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBnLm5vcm1hbGl6ZXI/Zj1nLm5vcm1hbGl6ZXI6XCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcy5zZXR0aW5ncy5ub3JtYWxpemVyJiYoZj10aGlzLnNldHRpbmdzLm5vcm1hbGl6ZXIpLGYmJihqPWYuY2FsbChiLGopLGRlbGV0ZSBnLm5vcm1hbGl6ZXIpO2ZvcihkIGluIGcpe2U9e21ldGhvZDpkLHBhcmFtZXRlcnM6Z1tkXX07dHJ5e2lmKGM9YS52YWxpZGF0b3IubWV0aG9kc1tkXS5jYWxsKHRoaXMsaixiLGUucGFyYW1ldGVycyksXCJkZXBlbmRlbmN5LW1pc21hdGNoXCI9PT1jJiYxPT09aCl7aT0hMDtjb250aW51ZX1pZihpPSExLFwicGVuZGluZ1wiPT09YylyZXR1cm4gdm9pZCh0aGlzLnRvSGlkZT10aGlzLnRvSGlkZS5ub3QodGhpcy5lcnJvcnNGb3IoYikpKTtpZighYylyZXR1cm4gdGhpcy5mb3JtYXRBbmRBZGQoYixlKSwhMX1jYXRjaChrKXt0aHJvdyB0aGlzLnNldHRpbmdzLmRlYnVnJiZ3aW5kb3cuY29uc29sZSYmY29uc29sZS5sb2coXCJFeGNlcHRpb24gb2NjdXJyZWQgd2hlbiBjaGVja2luZyBlbGVtZW50IFwiK2IuaWQrXCIsIGNoZWNrIHRoZSAnXCIrZS5tZXRob2QrXCInIG1ldGhvZC5cIixrKSxrIGluc3RhbmNlb2YgVHlwZUVycm9yJiYoay5tZXNzYWdlKz1cIi4gIEV4Y2VwdGlvbiBvY2N1cnJlZCB3aGVuIGNoZWNraW5nIGVsZW1lbnQgXCIrYi5pZCtcIiwgY2hlY2sgdGhlICdcIitlLm1ldGhvZCtcIicgbWV0aG9kLlwiKSxrfX1pZighaSlyZXR1cm4gdGhpcy5vYmplY3RMZW5ndGgoZykmJnRoaXMuc3VjY2Vzc0xpc3QucHVzaChiKSwhMH0sY3VzdG9tRGF0YU1lc3NhZ2U6ZnVuY3Rpb24oYixjKXtyZXR1cm4gYShiKS5kYXRhKFwibXNnXCIrYy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStjLnN1YnN0cmluZygxKS50b0xvd2VyQ2FzZSgpKXx8YShiKS5kYXRhKFwibXNnXCIpfSxjdXN0b21NZXNzYWdlOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5zZXR0aW5ncy5tZXNzYWdlc1thXTtyZXR1cm4gYyYmKGMuY29uc3RydWN0b3I9PT1TdHJpbmc/YzpjW2JdKX0sZmluZERlZmluZWQ6ZnVuY3Rpb24oKXtmb3IodmFyIGE9MDthPGFyZ3VtZW50cy5sZW5ndGg7YSsrKWlmKHZvaWQgMCE9PWFyZ3VtZW50c1thXSlyZXR1cm4gYXJndW1lbnRzW2FdfSxkZWZhdWx0TWVzc2FnZTpmdW5jdGlvbihiLGMpe1wic3RyaW5nXCI9PXR5cGVvZiBjJiYoYz17bWV0aG9kOmN9KTt2YXIgZD10aGlzLmZpbmREZWZpbmVkKHRoaXMuY3VzdG9tTWVzc2FnZShiLm5hbWUsYy5tZXRob2QpLHRoaXMuY3VzdG9tRGF0YU1lc3NhZ2UoYixjLm1ldGhvZCksIXRoaXMuc2V0dGluZ3MuaWdub3JlVGl0bGUmJmIudGl0bGV8fHZvaWQgMCxhLnZhbGlkYXRvci5tZXNzYWdlc1tjLm1ldGhvZF0sXCI8c3Ryb25nPldhcm5pbmc6IE5vIG1lc3NhZ2UgZGVmaW5lZCBmb3IgXCIrYi5uYW1lK1wiPC9zdHJvbmc+XCIpLGU9L1xcJD9cXHsoXFxkKylcXH0vZztyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBkP2Q9ZC5jYWxsKHRoaXMsYy5wYXJhbWV0ZXJzLGIpOmUudGVzdChkKSYmKGQ9YS52YWxpZGF0b3IuZm9ybWF0KGQucmVwbGFjZShlLFwieyQxfVwiKSxjLnBhcmFtZXRlcnMpKSxkfSxmb3JtYXRBbmRBZGQ6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmRlZmF1bHRNZXNzYWdlKGEsYik7dGhpcy5lcnJvckxpc3QucHVzaCh7bWVzc2FnZTpjLGVsZW1lbnQ6YSxtZXRob2Q6Yi5tZXRob2R9KSx0aGlzLmVycm9yTWFwW2EubmFtZV09Yyx0aGlzLnN1Ym1pdHRlZFthLm5hbWVdPWN9LGFkZFdyYXBwZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuc2V0dGluZ3Mud3JhcHBlciYmKGE9YS5hZGQoYS5wYXJlbnQodGhpcy5zZXR0aW5ncy53cmFwcGVyKSkpLGF9LGRlZmF1bHRTaG93RXJyb3JzOmZ1bmN0aW9uKCl7dmFyIGEsYixjO2ZvcihhPTA7dGhpcy5lcnJvckxpc3RbYV07YSsrKWM9dGhpcy5lcnJvckxpc3RbYV0sdGhpcy5zZXR0aW5ncy5oaWdobGlnaHQmJnRoaXMuc2V0dGluZ3MuaGlnaGxpZ2h0LmNhbGwodGhpcyxjLmVsZW1lbnQsdGhpcy5zZXR0aW5ncy5lcnJvckNsYXNzLHRoaXMuc2V0dGluZ3MudmFsaWRDbGFzcyksdGhpcy5zaG93TGFiZWwoYy5lbGVtZW50LGMubWVzc2FnZSk7aWYodGhpcy5lcnJvckxpc3QubGVuZ3RoJiYodGhpcy50b1Nob3c9dGhpcy50b1Nob3cuYWRkKHRoaXMuY29udGFpbmVycykpLHRoaXMuc2V0dGluZ3Muc3VjY2Vzcylmb3IoYT0wO3RoaXMuc3VjY2Vzc0xpc3RbYV07YSsrKXRoaXMuc2hvd0xhYmVsKHRoaXMuc3VjY2Vzc0xpc3RbYV0pO2lmKHRoaXMuc2V0dGluZ3MudW5oaWdobGlnaHQpZm9yKGE9MCxiPXRoaXMudmFsaWRFbGVtZW50cygpO2JbYV07YSsrKXRoaXMuc2V0dGluZ3MudW5oaWdobGlnaHQuY2FsbCh0aGlzLGJbYV0sdGhpcy5zZXR0aW5ncy5lcnJvckNsYXNzLHRoaXMuc2V0dGluZ3MudmFsaWRDbGFzcyk7dGhpcy50b0hpZGU9dGhpcy50b0hpZGUubm90KHRoaXMudG9TaG93KSx0aGlzLmhpZGVFcnJvcnMoKSx0aGlzLmFkZFdyYXBwZXIodGhpcy50b1Nob3cpLnNob3coKX0sdmFsaWRFbGVtZW50czpmdW5jdGlvbigpe3JldHVybiB0aGlzLmN1cnJlbnRFbGVtZW50cy5ub3QodGhpcy5pbnZhbGlkRWxlbWVudHMoKSl9LGludmFsaWRFbGVtZW50czpmdW5jdGlvbigpe3JldHVybiBhKHRoaXMuZXJyb3JMaXN0KS5tYXAoZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbGVtZW50fSl9LHNob3dMYWJlbDpmdW5jdGlvbihiLGMpe3ZhciBkLGUsZixnLGg9dGhpcy5lcnJvcnNGb3IoYiksaT10aGlzLmlkT3JOYW1lKGIpLGo9YShiKS5hdHRyKFwiYXJpYS1kZXNjcmliZWRieVwiKTtoLmxlbmd0aD8oaC5yZW1vdmVDbGFzcyh0aGlzLnNldHRpbmdzLnZhbGlkQ2xhc3MpLmFkZENsYXNzKHRoaXMuc2V0dGluZ3MuZXJyb3JDbGFzcyksaC5odG1sKGMpKTooaD1hKFwiPFwiK3RoaXMuc2V0dGluZ3MuZXJyb3JFbGVtZW50K1wiPlwiKS5hdHRyKFwiaWRcIixpK1wiLWVycm9yXCIpLmFkZENsYXNzKHRoaXMuc2V0dGluZ3MuZXJyb3JDbGFzcykuaHRtbChjfHxcIlwiKSxkPWgsdGhpcy5zZXR0aW5ncy53cmFwcGVyJiYoZD1oLmhpZGUoKS5zaG93KCkud3JhcChcIjxcIit0aGlzLnNldHRpbmdzLndyYXBwZXIrXCIvPlwiKS5wYXJlbnQoKSksdGhpcy5sYWJlbENvbnRhaW5lci5sZW5ndGg/dGhpcy5sYWJlbENvbnRhaW5lci5hcHBlbmQoZCk6dGhpcy5zZXR0aW5ncy5lcnJvclBsYWNlbWVudD90aGlzLnNldHRpbmdzLmVycm9yUGxhY2VtZW50LmNhbGwodGhpcyxkLGEoYikpOmQuaW5zZXJ0QWZ0ZXIoYiksaC5pcyhcImxhYmVsXCIpP2guYXR0cihcImZvclwiLGkpOjA9PT1oLnBhcmVudHMoXCJsYWJlbFtmb3I9J1wiK3RoaXMuZXNjYXBlQ3NzTWV0YShpKStcIiddXCIpLmxlbmd0aCYmKGY9aC5hdHRyKFwiaWRcIiksaj9qLm1hdGNoKG5ldyBSZWdFeHAoXCJcXFxcYlwiK3RoaXMuZXNjYXBlQ3NzTWV0YShmKStcIlxcXFxiXCIpKXx8KGorPVwiIFwiK2YpOmo9ZixhKGIpLmF0dHIoXCJhcmlhLWRlc2NyaWJlZGJ5XCIsaiksZT10aGlzLmdyb3Vwc1tiLm5hbWVdLGUmJihnPXRoaXMsYS5lYWNoKGcuZ3JvdXBzLGZ1bmN0aW9uKGIsYyl7Yz09PWUmJmEoXCJbbmFtZT0nXCIrZy5lc2NhcGVDc3NNZXRhKGIpK1wiJ11cIixnLmN1cnJlbnRGb3JtKS5hdHRyKFwiYXJpYS1kZXNjcmliZWRieVwiLGguYXR0cihcImlkXCIpKX0pKSkpLCFjJiZ0aGlzLnNldHRpbmdzLnN1Y2Nlc3MmJihoLnRleHQoXCJcIiksXCJzdHJpbmdcIj09dHlwZW9mIHRoaXMuc2V0dGluZ3Muc3VjY2Vzcz9oLmFkZENsYXNzKHRoaXMuc2V0dGluZ3Muc3VjY2Vzcyk6dGhpcy5zZXR0aW5ncy5zdWNjZXNzKGgsYikpLHRoaXMudG9TaG93PXRoaXMudG9TaG93LmFkZChoKX0sZXJyb3JzRm9yOmZ1bmN0aW9uKGIpe3ZhciBjPXRoaXMuZXNjYXBlQ3NzTWV0YSh0aGlzLmlkT3JOYW1lKGIpKSxkPWEoYikuYXR0cihcImFyaWEtZGVzY3JpYmVkYnlcIiksZT1cImxhYmVsW2Zvcj0nXCIrYytcIiddLCBsYWJlbFtmb3I9J1wiK2MrXCInXSAqXCI7cmV0dXJuIGQmJihlPWUrXCIsICNcIit0aGlzLmVzY2FwZUNzc01ldGEoZCkucmVwbGFjZSgvXFxzKy9nLFwiLCAjXCIpKSx0aGlzLmVycm9ycygpLmZpbHRlcihlKX0sZXNjYXBlQ3NzTWV0YTpmdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKC8oW1xcXFwhXCIjJCUmJygpKissLlxcLzo7PD0+P0BcXFtcXF1eYHt8fX5dKS9nLFwiXFxcXCQxXCIpfSxpZE9yTmFtZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5ncm91cHNbYS5uYW1lXXx8KHRoaXMuY2hlY2thYmxlKGEpP2EubmFtZTphLmlkfHxhLm5hbWUpfSx2YWxpZGF0aW9uVGFyZ2V0Rm9yOmZ1bmN0aW9uKGIpe3JldHVybiB0aGlzLmNoZWNrYWJsZShiKSYmKGI9dGhpcy5maW5kQnlOYW1lKGIubmFtZSkpLGEoYikubm90KHRoaXMuc2V0dGluZ3MuaWdub3JlKVswXX0sY2hlY2thYmxlOmZ1bmN0aW9uKGEpe3JldHVybi9yYWRpb3xjaGVja2JveC9pLnRlc3QoYS50eXBlKX0sZmluZEJ5TmFtZTpmdW5jdGlvbihiKXtyZXR1cm4gYSh0aGlzLmN1cnJlbnRGb3JtKS5maW5kKFwiW25hbWU9J1wiK3RoaXMuZXNjYXBlQ3NzTWV0YShiKStcIiddXCIpfSxnZXRMZW5ndGg6ZnVuY3Rpb24oYixjKXtzd2l0Y2goYy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKXtjYXNlXCJzZWxlY3RcIjpyZXR1cm4gYShcIm9wdGlvbjpzZWxlY3RlZFwiLGMpLmxlbmd0aDtjYXNlXCJpbnB1dFwiOmlmKHRoaXMuY2hlY2thYmxlKGMpKXJldHVybiB0aGlzLmZpbmRCeU5hbWUoYy5uYW1lKS5maWx0ZXIoXCI6Y2hlY2tlZFwiKS5sZW5ndGh9cmV0dXJuIGIubGVuZ3RofSxkZXBlbmQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4hdGhpcy5kZXBlbmRUeXBlc1t0eXBlb2YgYV18fHRoaXMuZGVwZW5kVHlwZXNbdHlwZW9mIGFdKGEsYil9LGRlcGVuZFR5cGVzOntcImJvb2xlYW5cIjpmdW5jdGlvbihhKXtyZXR1cm4gYX0sc3RyaW5nOmZ1bmN0aW9uKGIsYyl7cmV0dXJuISFhKGIsYy5mb3JtKS5sZW5ndGh9LFwiZnVuY3Rpb25cIjpmdW5jdGlvbihhLGIpe3JldHVybiBhKGIpfX0sb3B0aW9uYWw6ZnVuY3Rpb24oYil7dmFyIGM9dGhpcy5lbGVtZW50VmFsdWUoYik7cmV0dXJuIWEudmFsaWRhdG9yLm1ldGhvZHMucmVxdWlyZWQuY2FsbCh0aGlzLGMsYikmJlwiZGVwZW5kZW5jeS1taXNtYXRjaFwifSxzdGFydFJlcXVlc3Q6ZnVuY3Rpb24oYil7dGhpcy5wZW5kaW5nW2IubmFtZV18fCh0aGlzLnBlbmRpbmdSZXF1ZXN0KyssYShiKS5hZGRDbGFzcyh0aGlzLnNldHRpbmdzLnBlbmRpbmdDbGFzcyksdGhpcy5wZW5kaW5nW2IubmFtZV09ITApfSxzdG9wUmVxdWVzdDpmdW5jdGlvbihiLGMpe3RoaXMucGVuZGluZ1JlcXVlc3QtLSx0aGlzLnBlbmRpbmdSZXF1ZXN0PDAmJih0aGlzLnBlbmRpbmdSZXF1ZXN0PTApLGRlbGV0ZSB0aGlzLnBlbmRpbmdbYi5uYW1lXSxhKGIpLnJlbW92ZUNsYXNzKHRoaXMuc2V0dGluZ3MucGVuZGluZ0NsYXNzKSxjJiYwPT09dGhpcy5wZW5kaW5nUmVxdWVzdCYmdGhpcy5mb3JtU3VibWl0dGVkJiZ0aGlzLmZvcm0oKT8oYSh0aGlzLmN1cnJlbnRGb3JtKS5zdWJtaXQoKSx0aGlzLnN1Ym1pdEJ1dHRvbiYmYShcImlucHV0OmhpZGRlbltuYW1lPSdcIit0aGlzLnN1Ym1pdEJ1dHRvbi5uYW1lK1wiJ11cIix0aGlzLmN1cnJlbnRGb3JtKS5yZW1vdmUoKSx0aGlzLmZvcm1TdWJtaXR0ZWQ9ITEpOiFjJiYwPT09dGhpcy5wZW5kaW5nUmVxdWVzdCYmdGhpcy5mb3JtU3VibWl0dGVkJiYoYSh0aGlzLmN1cnJlbnRGb3JtKS50cmlnZ2VySGFuZGxlcihcImludmFsaWQtZm9ybVwiLFt0aGlzXSksdGhpcy5mb3JtU3VibWl0dGVkPSExKX0scHJldmlvdXNWYWx1ZTpmdW5jdGlvbihiLGMpe3JldHVybiBjPVwic3RyaW5nXCI9PXR5cGVvZiBjJiZjfHxcInJlbW90ZVwiLGEuZGF0YShiLFwicHJldmlvdXNWYWx1ZVwiKXx8YS5kYXRhKGIsXCJwcmV2aW91c1ZhbHVlXCIse29sZDpudWxsLHZhbGlkOiEwLG1lc3NhZ2U6dGhpcy5kZWZhdWx0TWVzc2FnZShiLHttZXRob2Q6Y30pfSl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLnJlc2V0Rm9ybSgpLGEodGhpcy5jdXJyZW50Rm9ybSkub2ZmKFwiLnZhbGlkYXRlXCIpLnJlbW92ZURhdGEoXCJ2YWxpZGF0b3JcIikuZmluZChcIi52YWxpZGF0ZS1lcXVhbFRvLWJsdXJcIikub2ZmKFwiLnZhbGlkYXRlLWVxdWFsVG9cIikucmVtb3ZlQ2xhc3MoXCJ2YWxpZGF0ZS1lcXVhbFRvLWJsdXJcIikuZmluZChcIi52YWxpZGF0ZS1sZXNzVGhhbi1ibHVyXCIpLm9mZihcIi52YWxpZGF0ZS1sZXNzVGhhblwiKS5yZW1vdmVDbGFzcyhcInZhbGlkYXRlLWxlc3NUaGFuLWJsdXJcIikuZmluZChcIi52YWxpZGF0ZS1sZXNzVGhhbkVxdWFsLWJsdXJcIikub2ZmKFwiLnZhbGlkYXRlLWxlc3NUaGFuRXF1YWxcIikucmVtb3ZlQ2xhc3MoXCJ2YWxpZGF0ZS1sZXNzVGhhbkVxdWFsLWJsdXJcIikuZmluZChcIi52YWxpZGF0ZS1ncmVhdGVyVGhhbkVxdWFsLWJsdXJcIikub2ZmKFwiLnZhbGlkYXRlLWdyZWF0ZXJUaGFuRXF1YWxcIikucmVtb3ZlQ2xhc3MoXCJ2YWxpZGF0ZS1ncmVhdGVyVGhhbkVxdWFsLWJsdXJcIikuZmluZChcIi52YWxpZGF0ZS1ncmVhdGVyVGhhbi1ibHVyXCIpLm9mZihcIi52YWxpZGF0ZS1ncmVhdGVyVGhhblwiKS5yZW1vdmVDbGFzcyhcInZhbGlkYXRlLWdyZWF0ZXJUaGFuLWJsdXJcIil9fSxjbGFzc1J1bGVTZXR0aW5nczp7cmVxdWlyZWQ6e3JlcXVpcmVkOiEwfSxlbWFpbDp7ZW1haWw6ITB9LHVybDp7dXJsOiEwfSxkYXRlOntkYXRlOiEwfSxkYXRlSVNPOntkYXRlSVNPOiEwfSxudW1iZXI6e251bWJlcjohMH0sZGlnaXRzOntkaWdpdHM6ITB9LGNyZWRpdGNhcmQ6e2NyZWRpdGNhcmQ6ITB9fSxhZGRDbGFzc1J1bGVzOmZ1bmN0aW9uKGIsYyl7Yi5jb25zdHJ1Y3Rvcj09PVN0cmluZz90aGlzLmNsYXNzUnVsZVNldHRpbmdzW2JdPWM6YS5leHRlbmQodGhpcy5jbGFzc1J1bGVTZXR0aW5ncyxiKX0sY2xhc3NSdWxlczpmdW5jdGlvbihiKXt2YXIgYz17fSxkPWEoYikuYXR0cihcImNsYXNzXCIpO3JldHVybiBkJiZhLmVhY2goZC5zcGxpdChcIiBcIiksZnVuY3Rpb24oKXt0aGlzIGluIGEudmFsaWRhdG9yLmNsYXNzUnVsZVNldHRpbmdzJiZhLmV4dGVuZChjLGEudmFsaWRhdG9yLmNsYXNzUnVsZVNldHRpbmdzW3RoaXNdKX0pLGN9LG5vcm1hbGl6ZUF0dHJpYnV0ZVJ1bGU6ZnVuY3Rpb24oYSxiLGMsZCl7L21pbnxtYXh8c3RlcC8udGVzdChjKSYmKG51bGw9PT1ifHwvbnVtYmVyfHJhbmdlfHRleHQvLnRlc3QoYikpJiYoZD1OdW1iZXIoZCksaXNOYU4oZCkmJihkPXZvaWQgMCkpLGR8fDA9PT1kP2FbY109ZDpiPT09YyYmXCJyYW5nZVwiIT09YiYmKGFbY109ITApfSxhdHRyaWJ1dGVSdWxlczpmdW5jdGlvbihiKXt2YXIgYyxkLGU9e30sZj1hKGIpLGc9Yi5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpO2ZvcihjIGluIGEudmFsaWRhdG9yLm1ldGhvZHMpXCJyZXF1aXJlZFwiPT09Yz8oZD1iLmdldEF0dHJpYnV0ZShjKSxcIlwiPT09ZCYmKGQ9ITApLGQ9ISFkKTpkPWYuYXR0cihjKSx0aGlzLm5vcm1hbGl6ZUF0dHJpYnV0ZVJ1bGUoZSxnLGMsZCk7cmV0dXJuIGUubWF4bGVuZ3RoJiYvLTF8MjE0NzQ4MzY0N3w1MjQyODgvLnRlc3QoZS5tYXhsZW5ndGgpJiZkZWxldGUgZS5tYXhsZW5ndGgsZX0sZGF0YVJ1bGVzOmZ1bmN0aW9uKGIpe3ZhciBjLGQsZT17fSxmPWEoYiksZz1iLmdldEF0dHJpYnV0ZShcInR5cGVcIik7Zm9yKGMgaW4gYS52YWxpZGF0b3IubWV0aG9kcylkPWYuZGF0YShcInJ1bGVcIitjLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Muc3Vic3RyaW5nKDEpLnRvTG93ZXJDYXNlKCkpLFwiXCI9PT1kJiYoZD0hMCksdGhpcy5ub3JtYWxpemVBdHRyaWJ1dGVSdWxlKGUsZyxjLGQpO3JldHVybiBlfSxzdGF0aWNSdWxlczpmdW5jdGlvbihiKXt2YXIgYz17fSxkPWEuZGF0YShiLmZvcm0sXCJ2YWxpZGF0b3JcIik7cmV0dXJuIGQuc2V0dGluZ3MucnVsZXMmJihjPWEudmFsaWRhdG9yLm5vcm1hbGl6ZVJ1bGUoZC5zZXR0aW5ncy5ydWxlc1tiLm5hbWVdKXx8e30pLGN9LG5vcm1hbGl6ZVJ1bGVzOmZ1bmN0aW9uKGIsYyl7cmV0dXJuIGEuZWFjaChiLGZ1bmN0aW9uKGQsZSl7aWYoZT09PSExKXJldHVybiB2b2lkIGRlbGV0ZSBiW2RdO2lmKGUucGFyYW18fGUuZGVwZW5kcyl7dmFyIGY9ITA7c3dpdGNoKHR5cGVvZiBlLmRlcGVuZHMpe2Nhc2VcInN0cmluZ1wiOmY9ISFhKGUuZGVwZW5kcyxjLmZvcm0pLmxlbmd0aDticmVhaztjYXNlXCJmdW5jdGlvblwiOmY9ZS5kZXBlbmRzLmNhbGwoYyxjKX1mP2JbZF09dm9pZCAwPT09ZS5wYXJhbXx8ZS5wYXJhbTooYS5kYXRhKGMuZm9ybSxcInZhbGlkYXRvclwiKS5yZXNldEVsZW1lbnRzKGEoYykpLGRlbGV0ZSBiW2RdKX19KSxhLmVhY2goYixmdW5jdGlvbihkLGUpe2JbZF09YS5pc0Z1bmN0aW9uKGUpJiZcIm5vcm1hbGl6ZXJcIiE9PWQ/ZShjKTplfSksYS5lYWNoKFtcIm1pbmxlbmd0aFwiLFwibWF4bGVuZ3RoXCJdLGZ1bmN0aW9uKCl7Ylt0aGlzXSYmKGJbdGhpc109TnVtYmVyKGJbdGhpc10pKX0pLGEuZWFjaChbXCJyYW5nZWxlbmd0aFwiLFwicmFuZ2VcIl0sZnVuY3Rpb24oKXt2YXIgYztiW3RoaXNdJiYoYS5pc0FycmF5KGJbdGhpc10pP2JbdGhpc109W051bWJlcihiW3RoaXNdWzBdKSxOdW1iZXIoYlt0aGlzXVsxXSldOlwic3RyaW5nXCI9PXR5cGVvZiBiW3RoaXNdJiYoYz1iW3RoaXNdLnJlcGxhY2UoL1tcXFtcXF1dL2csXCJcIikuc3BsaXQoL1tcXHMsXSsvKSxiW3RoaXNdPVtOdW1iZXIoY1swXSksTnVtYmVyKGNbMV0pXSkpfSksYS52YWxpZGF0b3IuYXV0b0NyZWF0ZVJhbmdlcyYmKG51bGwhPWIubWluJiZudWxsIT1iLm1heCYmKGIucmFuZ2U9W2IubWluLGIubWF4XSxkZWxldGUgYi5taW4sZGVsZXRlIGIubWF4KSxudWxsIT1iLm1pbmxlbmd0aCYmbnVsbCE9Yi5tYXhsZW5ndGgmJihiLnJhbmdlbGVuZ3RoPVtiLm1pbmxlbmd0aCxiLm1heGxlbmd0aF0sZGVsZXRlIGIubWlubGVuZ3RoLGRlbGV0ZSBiLm1heGxlbmd0aCkpLGJ9LG5vcm1hbGl6ZVJ1bGU6ZnVuY3Rpb24oYil7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGIpe3ZhciBjPXt9O2EuZWFjaChiLnNwbGl0KC9cXHMvKSxmdW5jdGlvbigpe2NbdGhpc109ITB9KSxiPWN9cmV0dXJuIGJ9LGFkZE1ldGhvZDpmdW5jdGlvbihiLGMsZCl7YS52YWxpZGF0b3IubWV0aG9kc1tiXT1jLGEudmFsaWRhdG9yLm1lc3NhZ2VzW2JdPXZvaWQgMCE9PWQ/ZDphLnZhbGlkYXRvci5tZXNzYWdlc1tiXSxjLmxlbmd0aDwzJiZhLnZhbGlkYXRvci5hZGRDbGFzc1J1bGVzKGIsYS52YWxpZGF0b3Iubm9ybWFsaXplUnVsZShiKSl9LG1ldGhvZHM6e3JlcXVpcmVkOmZ1bmN0aW9uKGIsYyxkKXtpZighdGhpcy5kZXBlbmQoZCxjKSlyZXR1cm5cImRlcGVuZGVuY3ktbWlzbWF0Y2hcIjtpZihcInNlbGVjdFwiPT09Yy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKXt2YXIgZT1hKGMpLnZhbCgpO3JldHVybiBlJiZlLmxlbmd0aD4wfXJldHVybiB0aGlzLmNoZWNrYWJsZShjKT90aGlzLmdldExlbmd0aChiLGMpPjA6dm9pZCAwIT09YiYmbnVsbCE9PWImJmIubGVuZ3RoPjB9LGVtYWlsOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMub3B0aW9uYWwoYil8fC9eW2EtekEtWjAtOS4hIyQlJicqK1xcLz0/Xl9ge3x9fi1dK0BbYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8oPzpcXC5bYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8pKiQvLnRlc3QoYSl9LHVybDpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm9wdGlvbmFsKGIpfHwvXig/Oig/Oig/Omh0dHBzP3xmdHApOik/XFwvXFwvKSg/OlxcUysoPzo6XFxTKik/QCk/KD86KD8hKD86MTB8MTI3KSg/OlxcLlxcZHsxLDN9KXszfSkoPyEoPzoxNjlcXC4yNTR8MTkyXFwuMTY4KSg/OlxcLlxcZHsxLDN9KXsyfSkoPyExNzJcXC4oPzoxWzYtOV18MlxcZHwzWzAtMV0pKD86XFwuXFxkezEsM30pezJ9KSg/OlsxLTldXFxkP3wxXFxkXFxkfDJbMDFdXFxkfDIyWzAtM10pKD86XFwuKD86MT9cXGR7MSwyfXwyWzAtNF1cXGR8MjVbMC01XSkpezJ9KD86XFwuKD86WzEtOV1cXGQ/fDFcXGRcXGR8MlswLTRdXFxkfDI1WzAtNF0pKXwoPzooPzpbYS16XFx1MDBhMS1cXHVmZmZmMC05XS0qKSpbYS16XFx1MDBhMS1cXHVmZmZmMC05XSspKD86XFwuKD86W2EtelxcdTAwYTEtXFx1ZmZmZjAtOV0tKikqW2EtelxcdTAwYTEtXFx1ZmZmZjAtOV0rKSooPzpcXC4oPzpbYS16XFx1MDBhMS1cXHVmZmZmXXsyLH0pKS4/KSg/OjpcXGR7Miw1fSk/KD86W1xcLz8jXVxcUyopPyQvaS50ZXN0KGEpfSxkYXRlOmZ1bmN0aW9uKCl7dmFyIGE9ITE7cmV0dXJuIGZ1bmN0aW9uKGIsYyl7cmV0dXJuIGF8fChhPSEwLHRoaXMuc2V0dGluZ3MuZGVidWcmJndpbmRvdy5jb25zb2xlJiZjb25zb2xlLndhcm4oXCJUaGUgYGRhdGVgIG1ldGhvZCBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdmVyc2lvbiAnMi4wLjAnLlxcblBsZWFzZSBkb24ndCB1c2UgaXQsIHNpbmNlIGl0IHJlbGllcyBvbiB0aGUgRGF0ZSBjb25zdHJ1Y3Rvciwgd2hpY2hcXG5iZWhhdmVzIHZlcnkgZGlmZmVyZW50bHkgYWNyb3NzIGJyb3dzZXJzIGFuZCBsb2NhbGVzLiBVc2UgYGRhdGVJU09gXFxuaW5zdGVhZCBvciBvbmUgb2YgdGhlIGxvY2FsZSBzcGVjaWZpYyBtZXRob2RzIGluIGBsb2NhbGl6YXRpb25zL2BcXG5hbmQgYGFkZGl0aW9uYWwtbWV0aG9kcy5qc2AuXCIpKSx0aGlzLm9wdGlvbmFsKGMpfHwhL0ludmFsaWR8TmFOLy50ZXN0KG5ldyBEYXRlKGIpLnRvU3RyaW5nKCkpfX0oKSxkYXRlSVNPOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMub3B0aW9uYWwoYil8fC9eXFxkezR9W1xcL1xcLV0oMD9bMS05XXwxWzAxMl0pW1xcL1xcLV0oMD9bMS05XXxbMTJdWzAtOV18M1swMV0pJC8udGVzdChhKX0sbnVtYmVyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMub3B0aW9uYWwoYil8fC9eKD86LT9cXGQrfC0/XFxkezEsM30oPzosXFxkezN9KSspPyg/OlxcLlxcZCspPyQvLnRlc3QoYSl9LGRpZ2l0czpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm9wdGlvbmFsKGIpfHwvXlxcZCskLy50ZXN0KGEpfSxtaW5sZW5ndGg6ZnVuY3Rpb24oYixjLGQpe3ZhciBlPWEuaXNBcnJheShiKT9iLmxlbmd0aDp0aGlzLmdldExlbmd0aChiLGMpO3JldHVybiB0aGlzLm9wdGlvbmFsKGMpfHxlPj1kfSxtYXhsZW5ndGg6ZnVuY3Rpb24oYixjLGQpe3ZhciBlPWEuaXNBcnJheShiKT9iLmxlbmd0aDp0aGlzLmdldExlbmd0aChiLGMpO3JldHVybiB0aGlzLm9wdGlvbmFsKGMpfHxlPD1kfSxyYW5nZWxlbmd0aDpmdW5jdGlvbihiLGMsZCl7dmFyIGU9YS5pc0FycmF5KGIpP2IubGVuZ3RoOnRoaXMuZ2V0TGVuZ3RoKGIsYyk7cmV0dXJuIHRoaXMub3B0aW9uYWwoYyl8fGU+PWRbMF0mJmU8PWRbMV19LG1pbjpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHRoaXMub3B0aW9uYWwoYil8fGE+PWN9LG1heDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHRoaXMub3B0aW9uYWwoYil8fGE8PWN9LHJhbmdlOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdGhpcy5vcHRpb25hbChiKXx8YT49Y1swXSYmYTw9Y1sxXX0sc3RlcDpmdW5jdGlvbihiLGMsZCl7dmFyIGUsZj1hKGMpLmF0dHIoXCJ0eXBlXCIpLGc9XCJTdGVwIGF0dHJpYnV0ZSBvbiBpbnB1dCB0eXBlIFwiK2YrXCIgaXMgbm90IHN1cHBvcnRlZC5cIixoPVtcInRleHRcIixcIm51bWJlclwiLFwicmFuZ2VcIl0saT1uZXcgUmVnRXhwKFwiXFxcXGJcIitmK1wiXFxcXGJcIiksaj1mJiYhaS50ZXN0KGguam9pbigpKSxrPWZ1bmN0aW9uKGEpe3ZhciBiPShcIlwiK2EpLm1hdGNoKC8oPzpcXC4oXFxkKykpPyQvKTtyZXR1cm4gYiYmYlsxXT9iWzFdLmxlbmd0aDowfSxsPWZ1bmN0aW9uKGEpe3JldHVybiBNYXRoLnJvdW5kKGEqTWF0aC5wb3coMTAsZSkpfSxtPSEwO2lmKGopdGhyb3cgbmV3IEVycm9yKGcpO3JldHVybiBlPWsoZCksKGsoYik+ZXx8bChiKSVsKGQpIT09MCkmJihtPSExKSx0aGlzLm9wdGlvbmFsKGMpfHxtfSxlcXVhbFRvOmZ1bmN0aW9uKGIsYyxkKXt2YXIgZT1hKGQpO3JldHVybiB0aGlzLnNldHRpbmdzLm9uZm9jdXNvdXQmJmUubm90KFwiLnZhbGlkYXRlLWVxdWFsVG8tYmx1clwiKS5sZW5ndGgmJmUuYWRkQ2xhc3MoXCJ2YWxpZGF0ZS1lcXVhbFRvLWJsdXJcIikub24oXCJibHVyLnZhbGlkYXRlLWVxdWFsVG9cIixmdW5jdGlvbigpe2EoYykudmFsaWQoKX0pLGI9PT1lLnZhbCgpfSxyZW1vdGU6ZnVuY3Rpb24oYixjLGQsZSl7aWYodGhpcy5vcHRpb25hbChjKSlyZXR1cm5cImRlcGVuZGVuY3ktbWlzbWF0Y2hcIjtlPVwic3RyaW5nXCI9PXR5cGVvZiBlJiZlfHxcInJlbW90ZVwiO3ZhciBmLGcsaCxpPXRoaXMucHJldmlvdXNWYWx1ZShjLGUpO3JldHVybiB0aGlzLnNldHRpbmdzLm1lc3NhZ2VzW2MubmFtZV18fCh0aGlzLnNldHRpbmdzLm1lc3NhZ2VzW2MubmFtZV09e30pLGkub3JpZ2luYWxNZXNzYWdlPWkub3JpZ2luYWxNZXNzYWdlfHx0aGlzLnNldHRpbmdzLm1lc3NhZ2VzW2MubmFtZV1bZV0sdGhpcy5zZXR0aW5ncy5tZXNzYWdlc1tjLm5hbWVdW2VdPWkubWVzc2FnZSxkPVwic3RyaW5nXCI9PXR5cGVvZiBkJiZ7dXJsOmR9fHxkLGg9YS5wYXJhbShhLmV4dGVuZCh7ZGF0YTpifSxkLmRhdGEpKSxpLm9sZD09PWg/aS52YWxpZDooaS5vbGQ9aCxmPXRoaXMsdGhpcy5zdGFydFJlcXVlc3QoYyksZz17fSxnW2MubmFtZV09YixhLmFqYXgoYS5leHRlbmQoITAse21vZGU6XCJhYm9ydFwiLHBvcnQ6XCJ2YWxpZGF0ZVwiK2MubmFtZSxkYXRhVHlwZTpcImpzb25cIixkYXRhOmcsY29udGV4dDpmLmN1cnJlbnRGb3JtLHN1Y2Nlc3M6ZnVuY3Rpb24oYSl7dmFyIGQsZyxoLGo9YT09PSEwfHxcInRydWVcIj09PWE7Zi5zZXR0aW5ncy5tZXNzYWdlc1tjLm5hbWVdW2VdPWkub3JpZ2luYWxNZXNzYWdlLGo/KGg9Zi5mb3JtU3VibWl0dGVkLGYucmVzZXRJbnRlcm5hbHMoKSxmLnRvSGlkZT1mLmVycm9yc0ZvcihjKSxmLmZvcm1TdWJtaXR0ZWQ9aCxmLnN1Y2Nlc3NMaXN0LnB1c2goYyksZi5pbnZhbGlkW2MubmFtZV09ITEsZi5zaG93RXJyb3JzKCkpOihkPXt9LGc9YXx8Zi5kZWZhdWx0TWVzc2FnZShjLHttZXRob2Q6ZSxwYXJhbWV0ZXJzOmJ9KSxkW2MubmFtZV09aS5tZXNzYWdlPWcsZi5pbnZhbGlkW2MubmFtZV09ITAsZi5zaG93RXJyb3JzKGQpKSxpLnZhbGlkPWosZi5zdG9wUmVxdWVzdChjLGopfX0sZCkpLFwicGVuZGluZ1wiKX19fSk7dmFyIGIsYz17fTtyZXR1cm4gYS5hamF4UHJlZmlsdGVyP2EuYWpheFByZWZpbHRlcihmdW5jdGlvbihhLGIsZCl7dmFyIGU9YS5wb3J0O1wiYWJvcnRcIj09PWEubW9kZSYmKGNbZV0mJmNbZV0uYWJvcnQoKSxjW2VdPWQpfSk6KGI9YS5hamF4LGEuYWpheD1mdW5jdGlvbihkKXt2YXIgZT0oXCJtb2RlXCJpbiBkP2Q6YS5hamF4U2V0dGluZ3MpLm1vZGUsZj0oXCJwb3J0XCJpbiBkP2Q6YS5hamF4U2V0dGluZ3MpLnBvcnQ7cmV0dXJuXCJhYm9ydFwiPT09ZT8oY1tmXSYmY1tmXS5hYm9ydCgpLGNbZl09Yi5hcHBseSh0aGlzLGFyZ3VtZW50cyksY1tmXSk6Yi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9KSxhfSk7XG5cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICQoJ3NlbGVjdCcpLm5pY2VTZWxlY3QoKTtcbiAgICAkKCdbYmFubmVyU2xpZGVyX2pzXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbmV3IFN3aXBlcigkKHRoaXMpWzBdLCB7XG4gICAgICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgICAgICBzcGVlZDogODAwLFxuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBmYWRlRWZmZWN0OiB7XG4gICAgICAgICAgY3Jvc3NGYWRlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGF1dG9wbGF5OiB7XG4gICAgICAgICAgZGVsYXk6IDQwMDAsXG4gICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgZWw6ICcuYmFubmVycy1zd2lwZXJfX3BhZ2luYXRpb24nLFxuICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICB9KTtcbiAgJCgnW3Byb2R1Y3RzU2xpZGVyX2pzXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG5hdmlnYXRpb25QcmV2ID0gJCh0aGlzKS5wYXJlbnRzKCcuc2VjdGlvbi1wcm9kdWN0cy1zd2lwZXInKS5maW5kKCcuc3dpcGVyX19uYXZpZ2F0aW9uLWJ0bi1wcmV2JylbMF07XG4gICAgY29uc3QgbmF2aWdhdGlvbk5leHQgPSAkKHRoaXMpLnBhcmVudHMoJy5zZWN0aW9uLXByb2R1Y3RzLXN3aXBlcicpLmZpbmQoJy5zd2lwZXJfX25hdmlnYXRpb24tYnRuLW5leHQnKVswXTtcbiAgICB2YXIgc3dpcGVyID0gbmV3IFN3aXBlcigkKHRoaXMpWzBdLCB7XG4gICAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEuNzUsXG4gICAgICBzcGFjZUJldHdlZW46IDE2LFxuICAgICAgc3BlZWQ6IDcwMCxcbiAgICAgIHNjcm9sbGJhcjoge1xuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICBlbDogXCIuc3dpcGVyLXNjcm9sbGJhclwiLFxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgIGhpZGU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgbmV4dEVsOiBuYXZpZ2F0aW9uTmV4dCxcbiAgICAgICAgcHJldkVsOiBuYXZpZ2F0aW9uUHJldixcbiAgICAgIH0sXG4gICAgICBicmVha3BvaW50czoge1xuICAgICAgICAwOiB7XG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMS43NSxcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDE2LFxuICAgICAgICAgIHNjcm9sbGJhcjoge1xuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICA3Njc6IHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgICAgICAgc2Nyb2xsYmFyOiB7XG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgJCgnW2dhbGxlcnlHcmlkU3dpcGVyX0pTXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCQodGhpcylbMF0sIHtcbiAgICAgIHNwZWVkOiAzMDAsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICAgIGVmZmVjdDogJ2ZhZGUnLFxuICAgICAgZmFkZUVmZmVjdDoge1xuICAgICAgICBjcm9zc0ZhZGU6IHRydWVcbiAgICAgIH0sXG4gICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogJy5zd2lwZXItbmF2aWdhdGlvbl9fYnRuLW5leHQnLFxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLW5hdmlnYXRpb25fX2J0bi1wcmV2JyxcbiAgICAgIH0sXG4gICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxuICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgIHJlbmRlckJ1bGxldDogZnVuY3Rpb24gKGluZGV4LCBjbGFzc05hbWUpIHtcbiAgICAgICAgICByZXR1cm4gJzxidXR0b24gY2xhc3M9XCInICsgY2xhc3NOYW1lICsgJ1wiPicgKyAoaW5kZXggKyAxKSArICc8L2J1dHRvbj4nO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIHNsaWRlQ2hhbmdlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBsZXQgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbi1tYWluLWdhbGxlcnknKTtcbiAgICAgICAgICBsZXQgaXNTdGlja3kgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLmZpeGVkJyk7XG4gICAgICAgICAgbGV0IGhlYWRlckhlaWdodCA9IDA7XG4gICAgICAgICAgaXNTdGlja3kgPyBoZWFkZXJIZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLmZpeGVkJykub2Zmc2V0SGVpZ2h0IDogMDtcbiAgICAgICAgICBjb25zdCBlbGVtZW50VG9wID0gZWwub2Zmc2V0VG9wO1xuICAgICAgICAgIGlmKGVsKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IGVsZW1lbnRUb3AgLSBoZWFkZXJIZWlnaHQsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pXG4gIH0pXG4gICQoJ1twcm9kdWN0R2FsbGVyeVNsaWRlcl9qc10nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3dpcGVyID0gbmV3IFN3aXBlcigkKHRoaXMpWzBdLCB7XG4gICAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICBlbDogXCIuc3dpcGVyLXBhZ2luYXRpb25cIixcbiAgICAgICAgYnVsbGV0czogdHJ1ZSxcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgfSxcbiAgICB9KVxuICB9KTtcbiAgJCgnW2tub2xlZGdlU2xpZGVyX2pzXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCQodGhpcylbMF0sIHtcbiAgICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICAgICAgc2xpZGVzUGVyVmlldzogMS4xLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAxNixcbiAgICAgIHNjcm9sbGJhcjoge1xuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICBlbDogXCIuc3dpcGVyLXNjcm9sbGJhclwiLFxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgIGhpZGU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgIDA6IHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLjEsXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNixcbiAgICAgICAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgNzY3OiB7XG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgICAgICAgIHNjcm9sbGJhcjoge1xuICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICB9KVxuICB9KTtcbiAgJCgnW25ld3NTbGlkZXJfanNdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJCh0aGlzKVswXSwge1xuICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLjEsXG4gICAgICBzcGFjZUJldHdlZW46IDE2LFxuICAgICAgc2Nyb2xsYmFyOiB7XG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgIGVsOiBcIi5zd2lwZXItc2Nyb2xsYmFyXCIsXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgaGlkZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgMDoge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEuMSxcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDE2LFxuICAgICAgICAgIHNjcm9sbGJhcjoge1xuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICA3Njc6IHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgICAgICAgc2Nyb2xsYmFyOiB7XG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfVxuICAgIH0pXG4gIH0pO1xuICAkKCdbc2VydGlmaWNhdGVTbGlkZXJfanNdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJCh0aGlzKVswXSwge1xuICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgc3BhY2VCZXR3ZWVuOiA2NCxcbiAgICAgIHNwZWVkOiA3MDAsXG4gICAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgZWw6IFwiLnN3aXBlci1zY3JvbGxiYXJcIixcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICBoaWRlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICAvLyBuYXZpZ2F0aW9uOiB7XG4gICAgICAvLyAgIG5leHRFbDogJy5zZWN0aW9uLXNlcnRpZmljYXRlcyAuc3dpcGVyX19uYXZpZ2F0aW9uLWJ0bi1uZXh0JyxcbiAgICAgIC8vICAgcHJldkVsOiAnLnNlY3Rpb24tc2VydGlmaWNhdGVzIC5zd2lwZXJfX25hdmlnYXRpb24tYnRuLXByZXYnLFxuICAgICAgLy8gfSxcbiAgICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgIDA6IHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgICAgICAgc2Nyb2xsYmFyOiB7XG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIDc2Nzoge1xuICAgICAgICAgIGZyZWVNb2RlOiB0cnVlLFxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxuICAgICAgICAgIHNjcm9sbGJhcjoge1xuICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgMTIwMDoge1xuICAgICAgICAgIGZyZWVNb2RlOiB0cnVlLFxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDY0LFxuICAgICAgICAgIHNjcm9sbGJhcjoge1xuICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgdmFyIHN3aXBlck1hcnF1ZSA9IG5ldyBTd2lwZXIoJy5zZWN0aW9uLXBhcnRuZXJzX19zd2lwZXInLCB7XG4gICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICBzcGFjZUJldHdlZW46IDAsXG4gICAgc3BlZWQ6IDQ1MDAsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsIC8vINC80L7QttC90L4g0LXRidGRINC+0YLQutC70Y7Rh9C40YLRjCDRgdCy0LDQudC/XG4gICAgYXV0b3BsYXk6IHtcbiAgICAgIGRlbGF5OiAwLFxuICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlIC8vINC40LvQuCDRgdC00LXQu9Cw0YLRjCDRgtCw0LosINGH0YLQvtCx0Ysg0LLQvtGB0YHRgtCw0L3QsNCy0LvQuNCy0LDQu9GB0Y8gYXV0b3BsYXkg0L/QvtGB0LvQtSDQstC30LDQuNC80L7QtNC10LnRgdGC0LLQuNGPXG4gICAgfSxcbiAgICBicmVha3BvaW50czoge1xuICAgICAgOTkyOiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDUsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogNSxcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8vIGRvb29ycyBzd2lwZXJzXG4gIGZ1bmN0aW9uIGRvb3JzU3dpcGVySW5pdChlbCwgaXNSZXZlcnNlID0gZmFsc2UsIHNwZWVkID0gNjUwMCwgaW5pdGlhbFNsaWRlID0gMCkge1xuICAgIHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKGVsLCB7XG4gICAgICAgIGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyxcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMS40LFxuICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxuICAgICAgICBzcGVlZDogc3BlZWQsXG4gICAgICAgIGluaXRpYWxTbGlkZTogaW5pdGlhbFNsaWRlLFxuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsIC8vINC80L7QttC90L4g0LXRidGRINC+0YLQutC70Y7Rh9C40YLRjCDRgdCy0LDQudC/XG4gICAgICAgIGF1dG9wbGF5OiB7XG4gICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgcmV2ZXJzZURpcmVjdGlvbjogaXNSZXZlcnNlLFxuICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSAvLyDQuNC70Lgg0YHQtNC10LvQsNGC0Ywg0YLQsNC6LCDRh9GC0L7QsdGLINCy0L7RgdGB0YLQsNC90LDQstC70LjQstCw0LvRgdGPIGF1dG9wbGF5INC/0L7RgdC70LUg0LLQt9Cw0LjQvNC+0LTQtdC50YHRgtCy0LjRj1xuICAgICAgICB9LFxuICAgICAgICAvLyBicmVha3BvaW50czoge1xuICAgICAgICAvLyAgIDc2Nzoge1xuXG4gICAgICAgIC8vICAgfVxuICAgICAgICAvLyB9XG4gICAgfSk7XG4gIH1cbiAgdmFyIGRvb3JzU3dpcGVyRWwxID0gJCgnLnNlY3Rpb24tZG9vcnNfX3N3aXBlcl8xJyk7XG4gIHZhciBkb29yc1N3aXBlckVsMiA9ICQoJy5zZWN0aW9uLWRvb3JzX19zd2lwZXJfMicpO1xuICB2YXIgZG9vcnNTd2lwZXJFbDMgPSAkKCcuc2VjdGlvbi1kb29yc19fc3dpcGVyXzMnKTtcbiAgdmFyIGRvb3JzU3dpcGVyRWw0ID0gJCgnLnNlY3Rpb24tZG9vcnNfX3N3aXBlcl80Jyk7XG4gIGRvb3JzU3dpcGVySW5pdChkb29yc1N3aXBlckVsMVswXSk7XG4gIGRvb3JzU3dpcGVySW5pdChkb29yc1N3aXBlckVsMlswXSwgdHJ1ZSwgODUwMCk7XG4gIGRvb3JzU3dpcGVySW5pdChkb29yc1N3aXBlckVsM1swXSwgZmFsc2UsIDQ4MDApO1xuICBkb29yc1N3aXBlckluaXQoZG9vcnNTd2lwZXJFbDRbMF0sIHRydWUsIDYyMDApO1xuXG4gIGNvbnN0IGdhbGxhcnlfX3N3aXBlciA9IG5ldyBTd2lwZXIoJy5nYWxsYXJ5X19zd2lwZXInLCB7XG4gICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICBzcGFjZUJldHdlZW46ICcxJScsXG4gICAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgICBzY3JvbGxiYXI6IHtcbiAgICAgIGVsOiBcIi5zd2lwZXItc2Nyb2xsYmFyXCIsXG4gICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICBoaWRlOiBmYWxzZSxcbiAgICB9LFxuICAgIGF1dG9wbGF5OiB7XG4gICAgICAgIGRlbGF5OiAyNTAwLFxuICAgIH0sXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgICBlbDogXCIuZ2FsbGFyeV9fd3JhcHBlciAuc3dpcGVyLXBhZ2luYXRpb25cIixcbiAgICB9LFxuICAgIGJyZWFrcG9pbnRzOntcbiAgICAgIDA6e1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLjUsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogJzElJyxcbiAgICAgICAgc2Nyb2xsYmFyOiB7XG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICB9XG4gICAgfSxcbiAgICA1Nzg6e1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogJzElJyxcbiAgICAgIHNjcm9sbGJhcjoge1xuICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICB9LFxuICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgIH1cbiAgICB9LFxuICAgICAgNzY3OntcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogJzElJyxcbiAgICAgICAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICB9LFxuICAgICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgIH1cbiAgICAgIH0sXG5cblxuICAgIH1cbn0pO1xuXG5pZigkKCcuc2luZ2xlLXByb2R1Y3RfX2dhbGxlcnktc3dpcGVyLXRodW1icycpWzBdKSB7XG4gIHZhciBnYWxsZXJ5VGh1bWJzU3dpcGVyID0gbmV3IFN3aXBlcigkKCcuc2luZ2xlLXByb2R1Y3RfX2dhbGxlcnktc3dpcGVyLXRodW1icycpWzBdLCB7XG4gICAgZGlyZWN0aW9uOiAndmVydGljYWwnLFxuICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgc2xpZGVzUGVyVmlldzogMy4zLFxuICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiAkKCcuc2luZ2xlLXByb2R1Y3RfX2dhbGxlcnktc3dpcGVyLXRodW1icy13cmFwJykuZmluZCgnLnN3aXBlcl9fbmF2aWdhdGlvbi1idG4tbmV4dCcpWzBdLFxuICAgICAgcHJldkVsOiAkKCcuc2luZ2xlLXByb2R1Y3RfX2dhbGxlcnktc3dpcGVyLXRodW1icy13cmFwJykuZmluZCgnLnN3aXBlcl9fbmF2aWdhdGlvbi1idG4tcHJldicpWzBdLFxuICAgIH0sXG4gICAgYnJlYWtwb2ludHM6IHtcbiAgICAgIDA6IHtcbiAgICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDQuMyxcbiAgICAgIH0sXG4gICAgICA3Njg6IHtcbiAgICAgICAgZGlyZWN0aW9uOiAndmVydGljYWwnLFxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLjMsXG4gICAgICB9LFxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIHJlc2l6ZTogZnVuY3Rpb24gcmVzaXplKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgdmFyIGdhbGxlcnlTd2lwZXIgPSBuZXcgU3dpcGVyKCQoJy5zaW5nbGUtcHJvZHVjdF9fZ2FsbGVyeS1zd2lwZXItbGFyZ2UnKVswXSwge1xuICAgIGVmZmVjdDogJ2ZhZGUnLFxuICAgIGZhZGVFZmZlY3Q6IHtcbiAgICAgIGNyb3NzRmFkZTogdHJ1ZVxuICAgIH0sXG4gICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6ICQoJy5zaW5nbGUtcHJvZHVjdF9fZ2FsbGVyeS1zd2lwZXItdGh1bWJzLXdyYXAnKS5maW5kKCcuc3dpcGVyX19uYXZpZ2F0aW9uLWJ0bi1uZXh0JylbMF0sXG4gICAgICBwcmV2RWw6ICQoJy5zaW5nbGUtcHJvZHVjdF9fZ2FsbGVyeS1zd2lwZXItdGh1bWJzLXdyYXAnKS5maW5kKCcuc3dpcGVyX19uYXZpZ2F0aW9uLWJ0bi1wcmV2JylbMF0sXG4gICAgfSxcbiAgICB0aHVtYnM6IHtcbiAgICAgIHN3aXBlcjogZ2FsbGVyeVRodW1ic1N3aXBlcixcbiAgICB9LFxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAwOiB7XG4gICAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICA3Njg6IHtcbiAgICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xufVxuXG4gICAgJCgnLnRhYnMtc2xpZGVyJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJGNvbnRhaW5lciA9ICQodGhpcykuZmluZCgnLnN3aXBlci1jb250YWluZXInKTtcbiAgICAgIHZhciBzd2lwZXJUYWJzID0gbmV3IFN3aXBlcigkY29udGFpbmVyLCB7XG4gICAgICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICAgICAgICBmcmVlTW9kZTogdHJ1ZSxcbiAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxuICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgICAgICB0b3VjaFN0YXJ0Rm9yY2VQcmV2ZW50RGVmYXVsdDogdHJ1ZSxcbiAgICAgIH0pIDtcbiAgICB9KVxuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbYWdyZWVtZW50Q29udHJvbF9KU10nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXG4gICAgICAgICAgICAkZm9ybSA9ICR0aGlzLmNsb3Nlc3QoJ2Zvcm0nKSxcbiAgICAgICAgICAgICRpbnB1dCA9ICRmb3JtLmZpbmQoJ1thZ3JlZW1lbnRDb250cm9sQ2hlY2tib3hfSlNdJyksXG4gICAgICAgICAgICAkYnRuID0gJGZvcm0uZmluZCgnW2FncmVlbWVudENvbnRyb2xCdG5fSlNdJyk7XG5cbiAgICAgICAgaWYgKCR0aGlzLmhhc0NsYXNzKCdjaGVja2VkJykpIHtcbiAgICAgICAgICAgICR0aGlzLnJlbW92ZUNsYXNzKCdjaGVja2VkJyk7XG4gICAgICAgICAgICAkaW5wdXQucmVtb3ZlQXR0cignY2hlY2tlZCcpO1xuICAgICAgICAgICAgJGJ0bi5hZGRDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICRidG4uYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKCdjaGVja2VkJyk7XG4gICAgICAgICAgICAkaW5wdXQuYXR0cignY2hlY2tlZCcsICcnKTtcbiAgICAgICAgICAgICRidG4ucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAkYnRuLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW3JlYWRNb3JlQnRuX0pTXScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICRidG4gPSAkKHRoaXMpLFxuICAgICAgICAgICAgJHBhcmVudCA9ICRidG4uY2xvc2VzdCgnW3JlYWRNb3JlQ29udGFpbmVyX0pTXScpO1xuXG4gICAgICAgICRwYXJlbnQuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICB9KTtcblxuICAgICQoXCJbdG9Ub3BfSlNdXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6IDBcbiAgICAgICAgfSwgMCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgICQoXCJbYW5jaG9yTGlua19KU11cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XG5cbiAgICAgICAgaWYgKCQod2luZG93KS5pbm5lcldpZHRoKCkgPCA3NjkpIHtcbiAgICAgICAgICAgIHZhciBoZWFkZXJIZWlnaHQgPSAkKHdpbmRvdykuaW5uZXJXaWR0aCgpO1xuICAgICAgICAgICAgaGVhZGVySGVpZ2h0ID0gKGhlYWRlckhlaWdodCAvIDEwMCkgKiAyOS42ODc1O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGhlYWRlckhlaWdodCA9ICQod2luZG93KS5pbm5lcldpZHRoKCk7XG4gICAgICAgICAgICBoZWFkZXJIZWlnaHQgPSAoaGVhZGVySGVpZ2h0IC8gMTAwKSAqIDUsIDI1NDg2MDc0NjE5MDIyNTk1OTAxMjA4NjE3OTcxNjI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJChpZCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFyIHRvcCA9ICgkKGlkKS5vZmZzZXQoKS50b3ApIC0gaGVhZGVySGVpZ2h0O1xuICAgICAgICAgICAgJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiB0b3BcbiAgICAgICAgICAgIH0sIDE1MDApO1xuICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coMSk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaW5kZXguaHRtbFwiICsgaWQ7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG4gICAgaWYgKGhhc2ggIT0gXCJcIikge1xuXG4gICAgICAgIGlmICgkKHdpbmRvdykuaW5uZXJXaWR0aCgpIDwgNzY5KSB7XG4gICAgICAgICAgICB2YXIgaGVhZGVySGVpZ2h0ID0gJCh3aW5kb3cpLmlubmVyV2lkdGgoKTtcbiAgICAgICAgICAgIGhlYWRlckhlaWdodCA9IChoZWFkZXJIZWlnaHQgLyAxMDApICogMjkuNjg3NTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBoZWFkZXJIZWlnaHQgPSAkKHdpbmRvdykuaW5uZXJXaWR0aCgpO1xuICAgICAgICAgICAgaGVhZGVySGVpZ2h0ID0gKGhlYWRlckhlaWdodCAvIDEwMCkgKiA1LCAyNTQ4NjA3NDYxOTAyMjU5NTkwMTIwODYxNzk3MTYyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCQoaGFzaCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFyIG9mZnNldCA9ICQoaGFzaCkub2Zmc2V0KCkudG9wIC0gaGVhZGVySGVpZ2h0O1xuICAgICAgICAgICAgJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiBvZmZzZXRcbiAgICAgICAgICAgIH0sIDE1MDApO1xuICAgICAgICB9XG4gICAgfTtcblxuXG5cbiAgJC52YWxpZGF0b3IuYWRkTWV0aG9kKCdwYXR0ZXJuJywgZnVuY3Rpb24odmFsdWUsIGVsZW1lbnQsIHBhdHRlcm4pIHtcbiAgICAvLyDQn9GA0L7QstC10YDRj9C10LwsINGP0LLQu9GP0LXRgtGB0Y8g0LvQuCDQt9C90LDRh9C10L3QuNC1INC/0YPRgdGC0YvQvCAo0LXRgdC70Lgg0L/QvtC70LUg0L3QtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+KSDQuNC70Lgg0YHQvtC+0YLQstC10YLRgdGC0LLRg9C10YIg0YDQtdCz0YPQu9GP0YDQvdC+0LzRgyDQstGL0YDQsNC20LXQvdC40Y5cbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbChlbGVtZW50KSB8fCBwYXR0ZXJuLnRlc3QodmFsdWUpO1xufSwgJ9Cf0L7Qu9C1INGB0L7QtNC10YDQttC40YIg0L3QtdC60L7RgNGA0LXQutGC0L3QvtC1INC30L3QsNGH0LXQvdC40LUnKTtcblxuICAgICQoJ1tmb3JtVmFsaWRhdGVfSlNdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBmb3JtID0gJCh0aGlzKTtcbiAgICAgICAgJCh0aGlzKS52YWxpZGF0ZSh7XG4gICAgICAgICAgICBlcnJvckNsYXNzOiBcInZhbGlkYXRlX2Vycm9yXCIsXG4gICAgICAgICAgICBydWxlczoge1xuICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHBhdHRlcm46IC9eW2EtekEtWtCwLdGP0JAt0K9cXHNdKyQvLCAvLyDQnNC10YLQvtC0INC/0YDQvtCy0LXRgNC60Lgg0LHRg9C60LIg0Lgg0L/RgNC+0LHQtdC70L7QslxuICAgICAgICAgICAgICAgICAgbWlubGVuZ3RoOiAyLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBwaG9uZToge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1pbmxlbmd0aDogNywgLy8g0JzQtdGC0L7QtCDQv9GA0L7QstC10YDQutC4INC/0L7QstGC0L7RgNGP0Y7RidC40YXRgdGPINC/0L7QtNGA0Y/QtCDRgdC40LzQstC+0LvQvtCyXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGVtYWlsOiB7XG4gICAgICAgICAgICAgICAgICBwYXR0ZXJuOiAvXihbYS16QS1aMC05Xy4rLV0pK1xcQCgoW2EtekEtWjAtOS1dKStcXC4pKyhbYS16QS1aMC05XXsyLDR9KSskLywgLy8g0J/RgNC+0LLQtdGA0LrQsCDQutC+0YDRgNC10LrRgtC90L7RgdGC0LggZW1haWxcbiAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3JQbGFjZW1lbnQ6IGZ1bmN0aW9uIChlcnJvciwgZWxlbWVudCkge30sXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgJCgnW2hlYWRlckJ0bl9KU10nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgbWVudUNsb3NlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIG1lbnVPcGVuKCk7XG4gICAgfSk7XG5cdCQoJy5oZWFkZXJfX21vYi13cmFwIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQoJ1toZWFkZXJCdG5fSlNdJykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICBtZW51Q2xvc2UoKTtcblx0XHR9XG4gIH0pO1xuXG5cblxuICBmdW5jdGlvbiBzbGlkZVRvZ2dsZVNlY3Rpb24oKSB7XG4gICAgJCgnW3RvZ2dsZUl0ZW1fSlNdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICQodGhpcykuc2libGluZ3MoKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJCh3aW5kb3cpLm91dGVyV2lkdGgoKSA8IDk5Mikge1xuICAgICAgICAgICQodGhpcykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkKHRoaXMpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmKCQod2luZG93KS5vdXRlcldpZHRoKCkgPCA5OTIpIHtcbiAgICAgICQoJy5wcm9kdWN0LWNhcmQgW3RvZ2dsZUl0ZW1fSlNdJykuZmlyc3QoKS5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgJCgnLnByb2R1Y3QtY2FyZCBbdG9nZ2xlSXRlbV9KU10nKS5maXJzdCgpLnNpYmxpbmdzKCkucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgJCgnW3RvZ2dsZUl0ZW1fSlNdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAkKHRoaXMpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCQod2luZG93KS5vdXRlcldpZHRoKCkgPCA5OTIpIHtcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCkuc2xpZGVUb2dnbGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIHNsaWRlVG9nZ2xlU2VjdGlvbigpO1xuXG5cblxuICAvLyBEcm9wZG93blxuICBmdW5jdGlvbiByaWdodERyb3Bkb3duKCkge1xuICAgICQoJy5tZW51X19pdGVtLmRyb3Bkb3duJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHN1Ym1lbnUgPSAkKHRoaXMpLmZpbmQoJy5zdWJtZW51Jyk7XG4gICAgICB2YXIgJG9mZnNldFRvTGVmdCA9ICRzdWJtZW51Lm9mZnNldCgpLmxlZnQgKyAkc3VibWVudS5vdXRlcldpZHRoKCk7XG4gICAgICBpZiAoJCh3aW5kb3cpLm91dGVyV2lkdGgoKSA+IDk5Mikge1xuICAgICAgICBpZigkb2Zmc2V0VG9MZWZ0ID4gJCh3aW5kb3cpLm91dGVyV2lkdGgoKSkge1xuICAgICAgICAgICRzdWJtZW51LmNzcygndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVgoLSR7JG9mZnNldFRvTGVmdCAtICQod2luZG93KS5vdXRlcldpZHRoKCkgKyAzMH1weClgKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJHN1Ym1lbnUucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByaWdodERyb3Bkb3duKCk7XG5cbiAgbGV0IHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLm91dGVyV2lkdGgoKTtcbiAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJCh3aW5kb3cpLm91dGVyV2lkdGgoKSAhPT0gd2luZG93V2lkdGgpIHtcbiAgICAgIHJpZ2h0RHJvcGRvd24oKTtcbiAgICAgIHNsaWRlVG9nZ2xlU2VjdGlvbigpO1xuICAgIH1cbiAgfSk7XG5cblxuICAgICQoJy5tZW51X19pdGVtLmRyb3Bkb3duJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoJCh3aW5kb3cpLm91dGVyV2lkdGgoKSA+IDk5Mikge1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgJCh0aGlzKS5maW5kKCcuc3VibWVudScpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAkKCcubWVudV9faXRlbS5kcm9wZG93bicpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCQod2luZG93KS5vdXRlcldpZHRoKCkgPiA5OTIpIHtcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICQodGhpcykuZmluZCgnLnN1Ym1lbnUnKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcuY2F0ZWdvcmllcy1zaWRlX19pdGVtJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgIGlmKCQodGhpcykuZmluZCgnLnN1YmNhdGVnb3J5LXNpZGUnKSkge1xuICAgICAgICAkKHRoaXMpLmZpbmQoJy5zdWJjYXRlZ29yeS1zaWRlJykuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgfVxuICAgIH0pO1xuICAgICQoJy5jYXRlZ29yaWVzLXNpZGVfX2l0ZW0nKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIGlmKCQodGhpcykuZmluZCgnLnN1YmNhdGVnb3J5LXNpZGUnKSkge1xuICAgICAgICAgICQodGhpcykuZmluZCgnLnN1YmNhdGVnb3J5LXNpZGUnKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJy5tZW51X19kcm9wZG93bi1idG4nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgJCh0aGlzKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoJCh3aW5kb3cpLm91dGVyV2lkdGgoKSA8PSA5OTIpIHtcbiAgICAgICAgICB2YXIgJGlzT3BlbiA9ICQodGhpcykuY2xvc2VzdCgnLm1lbnVfX2l0ZW0uZHJvcGRvd24nKS5oYXNDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgaWYoJGlzT3Blbikge1xuICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcubWVudV9faXRlbS5kcm9wZG93bicpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJy5zdWJtZW51JykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLnN1Ym1lbnUnKS5zbGlkZVVwKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnLm1lbnVfX2l0ZW0uZHJvcGRvd24nKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCcuc3VibWVudScpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJy5zdWJtZW51Jykuc2xpZGVEb3duKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgJCgnLmNhdGFsb2ctbW9iLXN1Ym1lbnVfX21lbnUnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICQodGhpcykuY2hpbGRyZW4oJy5tZW51X19pdGVtLmRyb3Bkb3duJykuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICQodGhpcykuY2hpbGRyZW4oJy5tZW51X19pdGVtLmRyb3Bkb3duJykuZmluZCgnLnN1Ym1lbnUnKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gIH0pXG5cbiAgICAkKCdbbG9hZE1vcmVCdG5fSlNdJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ1tsb2FkTW9yZUNvbnRhaW5lcl9KU10nKS5hZGRDbGFzcygnbWQtYWxsLWl0ZW1zLXZpc2libGUnKTtcbiAgICB9KTtcblxuZnVuY3Rpb24gbWVudU9wZW4oKSB7XG4gICAgJCgnW2hlYWRlckJ0bl9KU10nKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgJCgnW2hlYWRlckJ0bl9KU10nKS5jbG9zZXN0KCdoZWFkZXInKS5maW5kKCcuaGVhZGVyX19tb2Itd3JhcCcpLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgJCgnaHRtbCcpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG59XG5mdW5jdGlvbiBtZW51Q2xvc2UoKSB7XG4gICAgJCgnW2hlYWRlckJ0bl9KU10nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgJCgnW2hlYWRlckJ0bl9KU10nKS5jbG9zZXN0KCdoZWFkZXInKS5maW5kKCcuaGVhZGVyX19tb2Itd3JhcCcpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgJCgnaHRtbCcpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG59XG5mdW5jdGlvbiBjYXRhbG9nTWVudU9wZW4oKSB7XG4gICQoJy5jYXRhbG9nLW1vYi1tZW51JykuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgJCgnaHRtbCcpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG59XG5mdW5jdGlvbiBjYXRhbG9nTWVudUNsb3NlKCkge1xuICAkKCcuY2F0YWxvZy1tb2ItbWVudScpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICQoJ2h0bWwnKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xufVxuXG4kKCdbaGVhZGVyQ2F0YWxvZ0J0bl9KU10nKS5vbignY2xpY2snLCAoZSkgPT4ge1xuICBjYXRhbG9nTWVudU9wZW4oKTtcbn0pO1xuJCgnW2hlYWRlckNhdGFsb2dDbG9zZUJ0bl9KU10nKS5vbignY2xpY2snLCAoZSkgPT4ge1xuICAkKCcuY2F0YWxvZy1tb2ItbWVudV9fc3VibWVudScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICB9KTtcbiAgY2F0YWxvZ01lbnVDbG9zZSgpO1xufSk7XG4kKCcuY2F0YWxvZy1tb2ItbWVudV9fYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICQodGhpcykubmV4dCgnLmNhdGFsb2ctbW9iLXN1Ym1lbnUnKS5hZGRDbGFzcygnb3BlbicpO1xufSk7XG4kKCcuY2F0YWxvZy1tb2ItbWVudV9fYmFjaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAkKHRoaXMpLnBhcmVudHMoJy5jYXRhbG9nLW1vYi1zdWJtZW51JykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbn0pO1xuJCgnLnNlY3Rpb24tY2F0YWxvZ19fZmlsdGVycy1vcGVuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICQoJy5zZWN0aW9uLWNhdGFsb2dfX2ZpbHRlcnMtbW9iLXdyYXAnKS5hZGRDbGFzcygnb3BlbicpO1xuICAkKCdodG1sJykuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcbn0pO1xuJCgnLnNlY3Rpb24tY2F0YWxvZ19fZmlsdGVycy1tb2ItYmFjaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAkKCcuc2VjdGlvbi1jYXRhbG9nX19maWx0ZXJzLW1vYi13cmFwJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgJCgnaHRtbCcpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG59KTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW3BvcHVwT3Blbl0nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHBvcHVwQ2xvc2UoKTtcbiAgICAgICAgdmFyICRlbGVtID0gJCh0aGlzKSxcbiAgICAgICAgICAgIHRhcmdldCA9ICRlbGVtLmF0dHIoJ3BvcHVwT3BlbicpO1xuXG4gICAgICAgIGlmICh0YXJnZXQgPT0gJ3Byb21vdGlvbi1wb3B1cCcgfHwgdGFyZ2V0ID09ICdzZXJ2aWNlLXBvcHVwJyB8fCB0YXJnZXQgPT0gJ3Byb2R1Y3QtcG9wdXAnKSB7XG4gICAgICAgICAgICB2YXIgaWQgPSAkZWxlbS5hdHRyKCdkYXRhLWhpZGRlbi1pZCcpO1xuXG4gICAgICAgICAgICAkKCdbcG9wdXBJRD1cIicgKyB0YXJnZXQgKyAnXCJdJykuZmluZCgnW2hpZGRlblZhbHVlX0pTXScpLmF0dHIoJ3ZhbHVlJywgaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcG9wdXBPcGVuKHRhcmdldCk7XG4gICAgfSk7XG5cblxuXG4gICAgdmFyICRhZ3JlZW1lbnRDb250cm9sID0gJCgnW2FncmVlbWVudENvbnRyb2xfSlNdJyksXG4gICAgICAgICRmb3JtID0gJGFncmVlbWVudENvbnRyb2wuY2xvc2VzdCgnZm9ybScpLFxuICAgICAgICAkaW5wdXQgPSAkZm9ybS5maW5kKCdbYWdyZWVtZW50Q29udHJvbENoZWNrYm94X0pTXScpLFxuICAgICAgICAkYnRuID0gJGZvcm0uZmluZCgnW2FncmVlbWVudENvbnRyb2xCdG5fSlNdJyk7XG4gICAgaWYgKCRhZ3JlZW1lbnRDb250cm9sLmhhc0NsYXNzKCdjaGVja2VkJykpIHtcbiAgICAgICAgJGFncmVlbWVudENvbnRyb2wucmVtb3ZlQ2xhc3MoJ2NoZWNrZWQnKTtcbiAgICAgICAgJGlucHV0LnJlbW92ZUF0dHIoJ2NoZWNrZWQnKTtcbiAgICAgICAgJGJ0bi5hZGRDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgICAgJGJ0bi5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgIH1cblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW3BvcHVwQ2xvc2VfSlNdJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBwb3B1cENsb3NlKCk7XG4gICAgfSk7XG5cbiAgICAkKCdib2R5JykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZG93bmxvYWQtcG9wdXAtdHJpZ2dlclwiPjwvZGl2PicpO1xuXG4gICAgJCgnYm9keSAuZG93bmxvYWQtcG9wdXAtdHJpZ2dlcicpLmhvdmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZG93bmxvYWRQb3B1cFN0YXRlJykgPT09ICd0cnVlJykge1xuICAgICAgICBwb3B1cE9wZW4oJ2Rvd25sb2FkLXBvcHVwJyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkb3dubG9hZFBvcHVwU3RhdGUnLCAnZmFsc2UnKTtcbiAgICAgIH07XG4gICAgfSk7XG5cblxuXG4kKCcuaGVhZGVyX19tYXJrZXRwbGFjZS1saW5rcy1idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgJCgnLm1hcmtldHBsYWNlLWxpbmtzLnNlbGVjdGVkJykudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xufSk7XG5cbiQoJ2JvZHknKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICBpZigkKCcubWFya2V0cGxhY2UtbGlua3Muc2VsZWN0ZWQnKS5oYXNDbGFzcygnaXMtYWN0aXZlJykgJiYgISgkKGUudGFyZ2V0KS5jbG9zZXN0KCQoJy5oZWFkZXJfX21hcmtldHBsYWNlLWxpbmtzLXdyYXAnKSkubGVuZ3RoKSkge1xuICAgICQoJy5tYXJrZXRwbGFjZS1saW5rcy5zZWxlY3RlZCcpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAkKCcuaGVhZGVyX19tYXJrZXRwbGFjZS1saW5rcy1idG4nKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gIH1cbn0pO1xuXG4kKCcuaGVhZGVyX19zZWFyY2gtb3BlbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAkKCcuaGVhZGVyX19zZWFyY2gtd3JhcCcpLmFkZENsYXNzKCdvcGVuJyk7XG59KTtcbiQoJy5oZWFkZXJfX3NlYXJjaC1jbG9zZS1idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgJCgnLmhlYWRlcl9fc2VhcmNoLXdyYXAnKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAkKHRoaXMpLnBhcmVudHMoJy5oZWFkZXJfX3NlYXJjaC13cmFwJykuZmluZCgnaW5wdXQnKS52YWwoJycpO1xufSk7XG5cblxuY29uc3Qgc2F2ZWRMYW5ndWFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZWxlY3RlZExhbmd1YWdlJyk7XG5pZiAoc2F2ZWRMYW5ndWFnZSkge1xuICAkKCdzZWxlY3QuaGVhZGVyX19sYW5nJykudmFsKGAke3NhdmVkTGFuZ3VhZ2V9YCkuY2hhbmdlKCk7XG4gICQoJy5oZWFkZXJfX2xhbmcnKS52YWwoYCR7c2F2ZWRMYW5ndWFnZX1gKS5uaWNlU2VsZWN0KCd1cGRhdGUnKTtcbiAgLy8g0KPRgdGC0LDQvdCw0LLQu9C40LLQsNC10Lwg0LLRi9Cx0YDQsNC90L3Ri9C5INGP0LfRi9C6INCyINGA0LDQtNC40L7QutC90L7Qv9C60LDRhVxuICAkKGBpbnB1dFtuYW1lPVwibGFuZy1jaG9vc2VcIl1bdmFsdWU9XCIke3NhdmVkTGFuZ3VhZ2V9XCJdYCkucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuICAkKCcuaGVhZGVyX19sYW5nLW1vYicpLmRhdGEoJ2xhbmcnLCBzYXZlZExhbmd1YWdlKTtcbiAgJCgnLmhlYWRlcl9fbGFuZy1tb2InKS50ZXh0KHNhdmVkTGFuZ3VhZ2UpO1xuICAkKCcuaGVhZGVyX19tYXJrZXRwbGFjZS1saW5rcycpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcbiAgfSk7XG4gICQoYC5oZWFkZXJfX21hcmtldHBsYWNlLWxpbmtzW2RhdGEtbGFuZz1cIiR7c2F2ZWRMYW5ndWFnZS50b0xvd2VyQ2FzZSgpfVwiXWApLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xufSBlbHNlIHtcbiAgcG9wdXBPcGVuKCdyZWdpb24nKTtcbiAgJCgnLnJlZ2lvbi1wb3B1cF9fYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbGFuZyA9ICAkKCcubGFuZy1jaG9vc2VfX3JhZGlvLWJ0bi1sYWJlbCBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCcpLnZhbCgpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZWxlY3RlZExhbmd1YWdlJywgbGFuZyk7XG4gICAgJCgnc2VsZWN0LmhlYWRlcl9fbGFuZycpLnZhbChgJHtsYW5nfWApLmNoYW5nZSgpO1xuICAgICQoJy5oZWFkZXJfX2xhbmcnKS52YWwoYCR7bGFuZ31gKS5uaWNlU2VsZWN0KCd1cGRhdGUnKTtcbiAgICAkKGBpbnB1dFtuYW1lPVwibGFuZy1jaG9vc2VcIl1bdmFsdWU9XCIke2xhbmd9XCJdYCkucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuICAgICQoJy5oZWFkZXJfX2xhbmctbW9iJykuZGF0YSgnbGFuZycsIGxhbmcpO1xuICAgICQoJy5oZWFkZXJfX2xhbmctbW9iJykudGV4dChsYW5nKTtcbiAgICAkKCcuaGVhZGVyX19tYXJrZXRwbGFjZS1saW5rcycpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgIH0pO1xuICAgICQoYC5oZWFkZXJfX21hcmtldHBsYWNlLWxpbmtzW2RhdGEtbGFuZz1cIiR7bGFuZy50b0xvd2VyQ2FzZSgpfVwiXWApLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICB9KTtcbiAgaWYoJCh3aW5kb3cpLm91dGVyV2lkdGgoKSA+PSA3NjcpIHtcbiAgICAkKCdodG1sJykucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgfVxufVxuXG4vLyDQodC+0YXRgNCw0L3QtdC90LjQtSDQstGL0LHRgNCw0L3QvdC+0LPQviDRj9C30YvQutCwINCyIGxvY2FsU3RvcmFnZSDQv9GA0Lgg0LjQt9C80LXQvdC10L3QuNC4INGB0LXQu9C10LrRgtCwXG4kKCcuaGVhZGVyX19sYW5nJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2VsZWN0ZWRMYW5ndWFnZScsICQodGhpcykuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykudmFsKCkpO1xuICBjb25zdCBzYXZlZExhbmd1YWdlID0gICQodGhpcykuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykudmFsKCk7XG4gICQoJy5oZWFkZXJfX21hcmtldHBsYWNlLWxpbmtzJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICB9KTtcbiAgJChgaW5wdXRbbmFtZT1cImxhbmctY2hvb3NlXCJdW3ZhbHVlPVwiJHtzYXZlZExhbmd1YWdlfVwiXWApLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgJCgnLmhlYWRlcl9fbGFuZy1tb2InKS5kYXRhKCdsYW5nJywgc2F2ZWRMYW5ndWFnZSk7XG4gICQoJy5oZWFkZXJfX2xhbmctbW9iJykudGV4dChzYXZlZExhbmd1YWdlKTtcbiAgJChgLmhlYWRlcl9fbWFya2V0cGxhY2UtbGlua3NbZGF0YS1sYW5nPVwiJHskKCcuaGVhZGVyX19sYW5nIG9wdGlvbjpzZWxlY3RlZCcpLnZhbCgpLnRvTG93ZXJDYXNlKCl9XCJdYCkuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG59KTtcbi8vINCe0LHRgNCw0LHQvtGC0YfQuNC6INC60LvQuNC60LAg0LTQu9GPINGA0LDQtNC40L7QutC90L7Qv9C+0LpcbiQoJy5sYW5nLWNob29zZV9fcmFkaW8tYnRuLWxhYmVsIGlucHV0W3R5cGU9XCJyYWRpb1wiXScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgY29uc3Qgc2VsZWN0ZWRMYW5nID0gJCh0aGlzKS52YWwoKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlbGVjdGVkTGFuZ3VhZ2UnLCBzZWxlY3RlZExhbmcpOyAvLyDQodC+0YXRgNCw0L3Rj9C10Lwg0LLRi9Cx0YDQsNC90L3Ri9C5INGP0LfRi9C6XG4gICQoJ3NlbGVjdC5oZWFkZXJfX2xhbmcnKS52YWwoYCR7c2VsZWN0ZWRMYW5nfWApLmNoYW5nZSgpO1xuICAkKCcuaGVhZGVyX19sYW5nJykudmFsKHNlbGVjdGVkTGFuZykubmljZVNlbGVjdCgndXBkYXRlJyk7IC8vINCe0LHQvdC+0LLQu9GP0LXQvCDRgdC10LvQtdC60YLQvtGAXG4gICQoJy5oZWFkZXJfX21hcmtldHBsYWNlLWxpbmtzJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICB9KTtcbiAgJCgnLmhlYWRlcl9fbGFuZy1tb2InKS5kYXRhKCdsYW5nJywgc2VsZWN0ZWRMYW5nKTtcbiAgJCgnLmhlYWRlcl9fbGFuZy1tb2InKS50ZXh0KHNlbGVjdGVkTGFuZyk7XG4gICQoYC5oZWFkZXJfX21hcmtldHBsYWNlLWxpbmtzW2RhdGEtbGFuZz1cIiR7c2VsZWN0ZWRMYW5nLnRvTG93ZXJDYXNlKCl9XCJdYCkuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gIHBvcHVwQ2xvc2UoKTtcbn0pO1xuXG59KTtcblxuaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkb3dubG9hZFBvcHVwU3RhdGUnKSA9PT0gbnVsbCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkb3dubG9hZFBvcHVwU3RhdGUnLCAndHJ1ZScpXG59XG5cbnZhciBnYWxsZXJ5VGh1bWJzU3dpcGVyID0gbmV3IFN3aXBlcignLnByb2R1Y3QtcG9wdXBfX2dhbGxlcnktc3dpcGVyLXRodW1icycsIHtcbiAgLy8gbG9vcDogdHJ1ZSxcbiAgZGlyZWN0aW9uOiAndmVydGljYWwnLFxuICBzcGFjZUJldHdlZW46IDEwLFxuICBzbGlkZXNQZXJWaWV3OiA0LFxuICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICBzY3JvbGxiYXI6IHtcbiAgICBlbDogXCIuc3dpcGVyLXNjcm9sbGJhclwiLFxuICAgIGhpZGU6IGZhbHNlLFxuICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICA3Njc6IHtcbiAgICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICAgIH1cbiAgfSxcbiAgb246IHtcbiAgICByZXNpemU6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG4gIH1cbn0pO1xudmFyIGdhbGxlcnlTd2lwZXIgPSBuZXcgU3dpcGVyKCcucHJvZHVjdC1wb3B1cF9fZ2FsbGVyeS1zd2lwZXItbGFyZ2UnLCB7XG4gIC8vIGxvb3A6IHRydWUsXG4gIHNwYWNlQmV0d2VlbjogMTAsXG4gIHRodW1iczoge1xuICAgIHN3aXBlcjogZ2FsbGVyeVRodW1ic1N3aXBlcixcbiAgfSxcbn0pO1xuXG5cbiQoJy5zaW5nbGUtcHJvZHVjdF9fYWNjb3JkaW9uLWJ0bicpLmVhY2goZnVuY3Rpb24oKSB7XG4gICQodGhpcykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgJCh0aGlzKS5uZXh0KCkuc2xpZGVUb2dnbGUoKTtcbiAgfSk7XG59KTtcblxuJCgnLmZhcS1ibG9ja19fbGlzdC1idG4nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAkKHRoaXMpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQodGhpcykubmV4dCgpLnNsaWRlVG9nZ2xlKCk7XG4gIH0pO1xufSk7XG5cblxudmFyIHBvcHVwQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgJCgnLnBvcHVwLm9wZW4nKS5maW5kKCdpbnB1dDpub3QoW25hbWU9XCJsYW5nLWNob29zZVwiXSknKS52YWwoJycpO1xuICAgICQoJy5wb3B1cC5vcGVuJykuZmluZCgndGV4dGFyZWEnKS52YWwoJycpO1xuICAgICQoJy5wb3B1cC5vcGVuJykuZmluZCgnLmZvcm0tZmlsZScpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHRleHQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdGV4dCcpO1xuXG4gICAgICAgICQodGhpcykuZmluZCgnZGl2IHAnKS50ZXh0KHRleHQpO1xuICAgIH0pO1xuICAgICQoJy5wb3B1cC5vcGVuJykuZmluZCgnLmZvcm0tc3RhcnMgbGFiZWw6bGFzdC1jaGlsZCcpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgJCgnLnBvcHVwIC52YWxpZGF0ZV9lcnJvcicpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCd2YWxpZGF0ZV9lcnJvcicpO1xuICAgIH0pO1xuICAgICQoJ2h0bWwnKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICQoJy5wb3B1cC5vcGVuJykuYWRkQ2xhc3MoJ2ZhZGUnKTtcbiAgICAkKCcucG9wdXAub3BlbicpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG59O1xuXG52YXIgcG9wdXBPcGVuID0gZnVuY3Rpb24gKGUpIHtcbiAgICBwb3B1cENsb3NlKCk7XG4gICAgdmFyIHRhcmdldCA9IGU7XG4gICAgdmFyIHdpZHRoID0gJCgnLnBhZ2UnKS53aWR0aCgpO1xuXG4gICAgJCgnaHRtbCcpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG4gICAgJCgnW3BvcHVwSUQ9XCInICsgdGFyZ2V0ICsgJ1wiXScpLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgJCgnW3BvcHVwSUQ9XCInICsgdGFyZ2V0ICsgJ1wiXScpLnJlbW92ZUNsYXNzKCdmYWRlJyk7XG4gICAgaWYoJCgnW3BvcHVwSUQ9XCInICsgdGFyZ2V0ICsgJ1wiXScpLmhhc0NsYXNzKCdwcm9kdWN0LXBvcHVwJykpIHtcbiAgICAgIC8vIGNsZWFyVGltZW91dChnYWxsZXJ5VGh1bWJzU3dpcGVyVXBkYXRlVGltZW91dCk7XG4gICAgICBnYWxsZXJ5VGh1bWJzU3dpcGVyLnVwZGF0ZSgpO1xuICAgICAgaWYoJCh3aW5kb3cpLm91dGVyV2lkdGgoKSA8PSA3NjcpIHtcbiAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZ2FsbGVyeVRodW1ic1N3aXBlci51cGRhdGUoKTtcbiAgICAgICAgfSwgMTApO1xuICAgICAgfVxuICAgIH1cbn07XG5cbmZ1bmN0aW9uIGZpeGVkSGVhZGVyKCkge1xuICB2YXIgaGVpZ2h0ID0galF1ZXJ5KHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gIHZhciBoZWFkZXJIZWlnaHQgPSAkKCcuaGVhZGVyJykuaW5uZXJIZWlnaHQoKTtcblx0aWYgKCBoZWlnaHQpIHtcbiAgICAkKCdib2R5JykuYXR0cignc3R5bGUnLCBgcGFkZGluZy10b3A6ICR7aGVhZGVySGVpZ2h0fXB4O2ApO1xuICAgIGpRdWVyeSgnLmhlYWRlcicpLmFkZENsYXNzKCdmaXhlZCcpO1xuICB9IGVsc2Uge1xuICAgIGpRdWVyeSgnLmhlYWRlcicpLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgICQoJ2JvZHknKS5hdHRyKCdzdHlsZScsIGBwYWRkaW5nLXRvcDogMDtgKTtcbiAgfVxufVxuXG5maXhlZEhlYWRlcigpO1xualF1ZXJ5KHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCQpIHtcblx0Zml4ZWRIZWFkZXIoKTtcbn0pO1xuJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcbiAgZml4ZWRIZWFkZXIoKTtcbn0pO1xuXG4kKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xuICB2YXIgcmF0aW8gPSAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSAvICgoJChkb2N1bWVudCkuaGVpZ2h0KCkgLSAkKHdpbmRvdykuaGVpZ2h0KCkpIC8gMTAwKTtcbiAgJCgnLmhlYWRlci1wcm9ncmVzcycpLndpZHRoKHJhdGlvICsgXCIlXCIpO1xufSk7XG5cbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICB2YXIgc2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICBpZiAoc2Nyb2xsID49ICAkKGRvY3VtZW50KS5oZWlnaHQoKSAvIDMpIHtcbiAgICAgICQoJ1t0b1RvcF9KU10nKS5hZGRDbGFzcygndmlzaWJsZScpO1xuICB9IGVsc2Uge1xuICAgICAgJCgnW3RvVG9wX0pTXScpLnJlbW92ZUNsYXNzKCd2aXNpYmxlJyk7XG4gIH07XG5cbiAgJCgnW29uU2Nyb2xsRGlzcGxheV9KU10nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgIGlmIChjb21lKGVsKSkge1xuICAgICAgICAgIGVsLmFkZENsYXNzKCd2aXNpYmxlJyk7XG4gICAgICB9O1xuICB9KTtcbn0pO1xuXG4kKCdpbWcnKS5lYWNoKCBmdW5jdGlvbihlKSB7XG4gICQodGhpcykuYWRkQ2xhc3MoJ2xhenknKTtcbn0pO1xubGV0IGxhenlMb2FkSW5zdGFuY2UgPSBuZXcgTGF6eUxvYWQoKTtcblxuXG5cblxuXG5cbiJdLCJmaWxlIjoiaW5kZXguanMifQ==
