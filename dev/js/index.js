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
  $('[sertificatesSwiper_JS]').each(function () {
    var swiper = new Swiper($(this)[0], {
      speed: 700,
      slidesPerView: 1.6,
      spaceBetween: 16,
      scrollbar: {
        enabled: true,
        el: ".swiper-scrollbar",
        draggable: true,
        hide: false
      },
      breakpoints: {
        0: {
          slidesPerView: 1.6,
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
    $(".header__marketplace-links[data-lang=\"".concat(savedLanguage, "\"]")).addClass('selected');
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImUiLCJ0IiwibW9kdWxlIiwiZXhwb3J0cyIsImRvY3VtZW50IiwiRXJyb3IiLCJ3aW5kb3ciLCJDIiwiciIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwicyIsInNsaWNlIiwiZyIsImZsYXQiLCJjYWxsIiwiY29uY2F0IiwiYXBwbHkiLCJ1IiwicHVzaCIsImkiLCJpbmRleE9mIiwibiIsIm8iLCJ0b1N0cmluZyIsInYiLCJoYXNPd25Qcm9wZXJ0eSIsImEiLCJsIiwieSIsIm0iLCJub2RlVHlwZSIsIngiLCJFIiwiYyIsInR5cGUiLCJzcmMiLCJub25jZSIsIm5vTW9kdWxlIiwiYiIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0IiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiaGVhZCIsImFwcGVuZENoaWxkIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwidyIsImYiLCJTIiwiZm4iLCJpbml0IiwicCIsImxlbmd0aCIsInByb3RvdHlwZSIsImpxdWVyeSIsImNvbnN0cnVjdG9yIiwidG9BcnJheSIsImdldCIsInB1c2hTdGFjayIsIm1lcmdlIiwicHJldk9iamVjdCIsImVhY2giLCJtYXAiLCJhcmd1bWVudHMiLCJmaXJzdCIsImVxIiwibGFzdCIsImV2ZW4iLCJncmVwIiwib2RkIiwiZW5kIiwic29ydCIsInNwbGljZSIsImV4dGVuZCIsImlzUGxhaW5PYmplY3QiLCJBcnJheSIsImlzQXJyYXkiLCJleHBhbmRvIiwiTWF0aCIsInJhbmRvbSIsInJlcGxhY2UiLCJpc1JlYWR5IiwiZXJyb3IiLCJub29wIiwiaXNFbXB0eU9iamVjdCIsImdsb2JhbEV2YWwiLCJtYWtlQXJyYXkiLCJpbkFycmF5IiwiZ3VpZCIsInN1cHBvcnQiLCJTeW1ib2wiLCJpdGVyYXRvciIsInNwbGl0IiwidG9Mb3dlckNhc2UiLCJkIiwiaCIsIlQiLCJEYXRlIiwiayIsInVlIiwiQSIsIk4iLCJEIiwiaiIsInEiLCJwb3AiLCJMIiwiSCIsIk8iLCJQIiwiUiIsIk0iLCJJIiwiVyIsIkYiLCJCIiwiUmVnRXhwIiwiJCIsIl8iLCJ6IiwiVSIsIlgiLCJWIiwiRyIsIklEIiwiQ0xBU1MiLCJUQUciLCJBVFRSIiwiUFNFVURPIiwiQ0hJTEQiLCJib29sIiwibmVlZHNDb250ZXh0IiwiWSIsIlEiLCJKIiwiSyIsIloiLCJlZSIsInRlIiwibmUiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJyZSIsImllIiwiY2hhckNvZGVBdCIsIm9lIiwiYWUiLCJiZSIsImRpc2FibGVkIiwibm9kZU5hbWUiLCJkaXIiLCJuZXh0IiwiY2hpbGROb2RlcyIsInNlIiwib3duZXJEb2N1bWVudCIsImV4ZWMiLCJnZXRFbGVtZW50QnlJZCIsImlkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwicXNhIiwidGVzdCIsInllIiwic2NvcGUiLCJ4ZSIsImpvaW4iLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVtb3ZlQXR0cmlidXRlIiwiY2FjaGVMZW5ndGgiLCJzaGlmdCIsImxlIiwiY2UiLCJmZSIsImF0dHJIYW5kbGUiLCJwZSIsInNvdXJjZUluZGV4IiwibmV4dFNpYmxpbmciLCJkZSIsImhlIiwiZ2UiLCJpc0Rpc2FibGVkIiwidmUiLCJpc1hNTCIsIm5hbWVzcGFjZVVSSSIsImRvY3VtZW50RWxlbWVudCIsInNldERvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJ0b3AiLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJhdHRyaWJ1dGVzIiwiY2xhc3NOYW1lIiwiY3JlYXRlQ29tbWVudCIsImdldEJ5SWQiLCJnZXRFbGVtZW50c0J5TmFtZSIsImZpbHRlciIsImZpbmQiLCJnZXRBdHRyaWJ1dGVOb2RlIiwidmFsdWUiLCJpbm5lckhUTUwiLCJtYXRjaGVzU2VsZWN0b3IiLCJtYXRjaGVzIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwibW96TWF0Y2hlc1NlbGVjdG9yIiwib01hdGNoZXNTZWxlY3RvciIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwiZGlzY29ubmVjdGVkTWF0Y2giLCJjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiIsImNvbnRhaW5zIiwic29ydERldGFjaGVkIiwidW5zaGlmdCIsImF0dHIiLCJzcGVjaWZpZWQiLCJlc2NhcGUiLCJ1bmlxdWVTb3J0IiwiZGV0ZWN0RHVwbGljYXRlcyIsInNvcnRTdGFibGUiLCJnZXRUZXh0IiwidGV4dENvbnRlbnQiLCJmaXJzdENoaWxkIiwibm9kZVZhbHVlIiwic2VsZWN0b3JzIiwiY3JlYXRlUHNldWRvIiwibWF0Y2giLCJyZWxhdGl2ZSIsInByZUZpbHRlciIsImxhc3RDaGlsZCIsInVuaXF1ZUlEIiwicHNldWRvcyIsInNldEZpbHRlcnMiLCJub3QiLCJoYXMiLCJsYW5nIiwidGFyZ2V0IiwibG9jYXRpb24iLCJoYXNoIiwicm9vdCIsImZvY3VzIiwiYWN0aXZlRWxlbWVudCIsImhhc0ZvY3VzIiwiaHJlZiIsInRhYkluZGV4IiwiZW5hYmxlZCIsImNoZWNrZWQiLCJzZWxlY3RlZCIsInNlbGVjdGVkSW5kZXgiLCJlbXB0eSIsInBhcmVudCIsImhlYWRlciIsImlucHV0IiwiYnV0dG9uIiwibHQiLCJndCIsIm50aCIsInJhZGlvIiwiY2hlY2tib3giLCJmaWxlIiwicGFzc3dvcmQiLCJpbWFnZSIsInN1Ym1pdCIsInJlc2V0IiwibWUiLCJ3ZSIsIlRlIiwiQ2UiLCJFZSIsImZpbHRlcnMiLCJ0b2tlbml6ZSIsImNvbXBpbGUiLCJzZWxlY3RvciIsInNlbGVjdCIsImRlZmF1bHRWYWx1ZSIsImV4cHIiLCJ1bmlxdWUiLCJpc1hNTERvYyIsImVzY2FwZVNlbGVjdG9yIiwiaXMiLCJwYXJzZUhUTUwiLCJyZWFkeSIsImNoaWxkcmVuIiwiY29udGVudHMiLCJwcmV2IiwiY2xvc2VzdCIsImluZGV4IiwicHJldkFsbCIsImFkZCIsImFkZEJhY2siLCJwYXJlbnRzIiwicGFyZW50c1VudGlsIiwibmV4dEFsbCIsIm5leHRVbnRpbCIsInByZXZVbnRpbCIsInNpYmxpbmdzIiwiY29udGVudERvY3VtZW50IiwiY29udGVudCIsInJldmVyc2UiLCJwcm9taXNlIiwiZG9uZSIsImZhaWwiLCJ0aGVuIiwiQ2FsbGJhY2tzIiwib25jZSIsInN0b3BPbkZhbHNlIiwibWVtb3J5IiwicmVtb3ZlIiwiZGlzYWJsZSIsImxvY2siLCJsb2NrZWQiLCJmaXJlV2l0aCIsImZpcmUiLCJmaXJlZCIsIkRlZmVycmVkIiwic3RhdGUiLCJhbHdheXMiLCJwaXBlIiwicHJvZ3Jlc3MiLCJub3RpZnkiLCJyZXNvbHZlIiwicmVqZWN0IiwiVHlwZUVycm9yIiwibm90aWZ5V2l0aCIsInJlc29sdmVXaXRoIiwiZXhjZXB0aW9uSG9vayIsInN0YWNrVHJhY2UiLCJyZWplY3RXaXRoIiwiZ2V0U3RhY2tIb29rIiwic2V0VGltZW91dCIsIndoZW4iLCJjb25zb2xlIiwid2FybiIsIm5hbWUiLCJtZXNzYWdlIiwic3RhY2siLCJyZWFkeUV4Y2VwdGlvbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZWFkeVdhaXQiLCJyZWFkeVN0YXRlIiwiZG9TY3JvbGwiLCJ0b1VwcGVyQ2FzZSIsInVpZCIsImNhY2hlIiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJzZXQiLCJhY2Nlc3MiLCJoYXNEYXRhIiwiSlNPTiIsInBhcnNlIiwiZGF0YSIsInJlbW92ZURhdGEiLCJfZGF0YSIsIl9yZW1vdmVEYXRhIiwicXVldWUiLCJkZXF1ZXVlIiwiX3F1ZXVlSG9va3MiLCJzdG9wIiwiY2xlYXJRdWV1ZSIsInNvdXJjZSIsImNvbXBvc2VkIiwiZ2V0Um9vdE5vZGUiLCJzdHlsZSIsImRpc3BsYXkiLCJjc3MiLCJjdXIiLCJjc3NOdW1iZXIiLCJ1bml0Iiwic3RhcnQiLCJib2R5Iiwic2hvdyIsImhpZGUiLCJ0b2dnbGUiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiY2hlY2tDbG9uZSIsImNsb25lTm9kZSIsIm5vQ2xvbmVDaGVja2VkIiwib3B0aW9uIiwidGhlYWQiLCJjb2wiLCJ0ciIsInRkIiwiX2RlZmF1bHQiLCJ0Ym9keSIsInRmb290IiwiY29sZ3JvdXAiLCJjYXB0aW9uIiwidGgiLCJvcHRncm91cCIsImh0bWxQcmVmaWx0ZXIiLCJjcmVhdGVUZXh0Tm9kZSIsIlNlIiwia2UiLCJvZmYiLCJldmVudCIsIkFlIiwibmFtZXNwYWNlIiwiaGFuZGxlciIsImlzVHJpZ2dlciIsInNwZWNpYWwiLCJkZWxlZ2F0ZVR5cGUiLCJzdG9wUHJvcGFnYXRpb24iLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsInRyaWdnZXIiLCJFdmVudCIsImdsb2JhbCIsImV2ZW50cyIsImNyZWF0ZSIsImhhbmRsZSIsInRyaWdnZXJlZCIsImRpc3BhdGNoIiwiYmluZFR5cGUiLCJvcmlnVHlwZSIsImRlbGVnYXRlQ291bnQiLCJzZXR1cCIsInRlYXJkb3duIiwicmVtb3ZlRXZlbnQiLCJmaXgiLCJkZWxlZ2F0ZVRhcmdldCIsInByZURpc3BhdGNoIiwiaGFuZGxlcnMiLCJpc1Byb3BhZ2F0aW9uU3RvcHBlZCIsImN1cnJlbnRUYXJnZXQiLCJlbGVtIiwiaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQiLCJybmFtZXNwYWNlIiwiaGFuZGxlT2JqIiwicmVzdWx0IiwicG9zdERpc3BhdGNoIiwiYWRkUHJvcCIsImVudW1lcmFibGUiLCJvcmlnaW5hbEV2ZW50Iiwid3JpdGFibGUiLCJsb2FkIiwibm9CdWJibGUiLCJjbGljayIsImJlZm9yZXVubG9hZCIsInJldHVyblZhbHVlIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiZGVmYXVsdFByZXZlbnRlZCIsInJlbGF0ZWRUYXJnZXQiLCJ0aW1lU3RhbXAiLCJub3ciLCJpc1NpbXVsYXRlZCIsImFsdEtleSIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiY2hhbmdlZFRvdWNoZXMiLCJjdHJsS2V5IiwiZGV0YWlsIiwiZXZlbnRQaGFzZSIsIm1ldGFLZXkiLCJwYWdlWCIsInBhZ2VZIiwic2hpZnRLZXkiLCJ2aWV3IiwiY29kZSIsImNoYXJDb2RlIiwia2V5Iiwia2V5Q29kZSIsImJ1dHRvbnMiLCJjbGllbnRYIiwiY2xpZW50WSIsIm9mZnNldFgiLCJvZmZzZXRZIiwicG9pbnRlcklkIiwicG9pbnRlclR5cGUiLCJzY3JlZW5YIiwic2NyZWVuWSIsInRhcmdldFRvdWNoZXMiLCJ0b0VsZW1lbnQiLCJ0b3VjaGVzIiwid2hpY2giLCJibHVyIiwibW91c2VlbnRlciIsIm1vdXNlbGVhdmUiLCJwb2ludGVyZW50ZXIiLCJwb2ludGVybGVhdmUiLCJvbiIsIm9uZSIsIk5lIiwiRGUiLCJqZSIsInFlIiwiTGUiLCJIZSIsIk9lIiwiUGUiLCJodG1sIiwiY2xvbmUiLCJfZXZhbFVybCIsIlJlIiwiY2xlYW5EYXRhIiwiZGV0YWNoIiwiYXBwZW5kIiwicHJlcGVuZCIsImluc2VydEJlZm9yZSIsImJlZm9yZSIsImFmdGVyIiwicmVwbGFjZVdpdGgiLCJyZXBsYWNlQ2hpbGQiLCJhcHBlbmRUbyIsInByZXBlbmRUbyIsImluc2VydEFmdGVyIiwicmVwbGFjZUFsbCIsIk1lIiwiSWUiLCJvcGVuZXIiLCJnZXRDb21wdXRlZFN0eWxlIiwiV2UiLCJGZSIsIkJlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInBpeGVsQm94U3R5bGVzIiwid2lkdGgiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwiJGUiLCJjc3NUZXh0IiwibWFyZ2luTGVmdCIsInJpZ2h0IiwicG9zaXRpb24iLCJvZmZzZXRXaWR0aCIsInJvdW5kIiwicGFyc2VGbG9hdCIsImJhY2tncm91bmRDbGlwIiwiY2xlYXJDbG9uZVN0eWxlIiwiYm94U2l6aW5nUmVsaWFibGUiLCJwaXhlbFBvc2l0aW9uIiwicmVsaWFibGVNYXJnaW5MZWZ0Iiwic2Nyb2xsYm94U2l6ZSIsInJlbGlhYmxlVHJEaW1lbnNpb25zIiwiaGVpZ2h0IiwicGFyc2VJbnQiLCJfZSIsInplIiwiVWUiLCJYZSIsImNzc1Byb3BzIiwiVmUiLCJHZSIsIlllIiwidmlzaWJpbGl0eSIsIlFlIiwibGV0dGVyU3BhY2luZyIsImZvbnRXZWlnaHQiLCJKZSIsIm1heCIsIktlIiwiY2VpbCIsIlplIiwiZ2V0Q2xpZW50UmVjdHMiLCJldCIsImNzc0hvb2tzIiwib3BhY2l0eSIsImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50IiwiY29sdW1uQ291bnQiLCJmaWxsT3BhY2l0eSIsImZsZXhHcm93IiwiZmxleFNocmluayIsImdyaWRBcmVhIiwiZ3JpZENvbHVtbiIsImdyaWRDb2x1bW5FbmQiLCJncmlkQ29sdW1uU3RhcnQiLCJncmlkUm93IiwiZ3JpZFJvd0VuZCIsImdyaWRSb3dTdGFydCIsImxpbmVIZWlnaHQiLCJvcmRlciIsIm9ycGhhbnMiLCJ3aWRvd3MiLCJ6SW5kZXgiLCJ6b29tIiwic2V0UHJvcGVydHkiLCJpc0Zpbml0ZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm9yZGVyIiwiZXhwYW5kIiwiVHdlZW4iLCJwcm9wIiwiZWFzaW5nIiwib3B0aW9ucyIsInByb3BIb29rcyIsInJ1biIsImR1cmF0aW9uIiwicG9zIiwic3RlcCIsImZ4Iiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImxpbmVhciIsInN3aW5nIiwiY29zIiwiUEkiLCJ0dCIsIm50IiwicnQiLCJpdCIsIm90IiwiYXQiLCJzdCIsImhpZGRlbiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImludGVydmFsIiwidGljayIsInV0IiwiY3QiLCJmdCIsInR3ZWVuZXJzIiwicHJlZmlsdGVycyIsInN0YXJ0VGltZSIsInR3ZWVucyIsInByb3BzIiwib3B0cyIsInNwZWNpYWxFYXNpbmciLCJvcmlnaW5hbFByb3BlcnRpZXMiLCJvcmlnaW5hbE9wdGlvbnMiLCJjcmVhdGVUd2VlbiIsImJpbmQiLCJjb21wbGV0ZSIsInRpbWVyIiwiYW5pbSIsIkFuaW1hdGlvbiIsInR3ZWVuZXIiLCJ1bnF1ZXVlZCIsIm92ZXJmbG93Iiwib3ZlcmZsb3dYIiwib3ZlcmZsb3dZIiwicHJlZmlsdGVyIiwic3BlZWQiLCJzcGVlZHMiLCJvbGQiLCJmYWRlVG8iLCJhbmltYXRlIiwiZmluaXNoIiwidGltZXJzIiwic2xpZGVEb3duIiwic2xpZGVVcCIsInNsaWRlVG9nZ2xlIiwiZmFkZUluIiwiZmFkZU91dCIsImZhZGVUb2dnbGUiLCJzbG93IiwiZmFzdCIsImRlbGF5IiwiY2xlYXJUaW1lb3V0IiwiY2hlY2tPbiIsIm9wdFNlbGVjdGVkIiwicmFkaW9WYWx1ZSIsInB0IiwiZHQiLCJyZW1vdmVBdHRyIiwiYXR0ckhvb2tzIiwiaHQiLCJ2dCIsInl0IiwibXQiLCJyZW1vdmVQcm9wIiwicHJvcEZpeCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ0b2dnbGVDbGFzcyIsImhhc0NsYXNzIiwieHQiLCJ2YWwiLCJ2YWxIb29rcyIsImZvY3VzaW4iLCJidCIsInd0IiwicGFyZW50V2luZG93Iiwic2ltdWxhdGUiLCJ0cmlnZ2VySGFuZGxlciIsIlR0IiwiQ3QiLCJFdCIsInBhcnNlWE1MIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwiU3QiLCJrdCIsIkF0IiwiTnQiLCJEdCIsInBhcmFtIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2VyaWFsaXplIiwic2VyaWFsaXplQXJyYXkiLCJqdCIsInF0IiwiTHQiLCJIdCIsIk90IiwiUHQiLCJSdCIsIk10IiwiSXQiLCJXdCIsIkZ0IiwiQnQiLCJkYXRhVHlwZXMiLCIkdCIsImFqYXhTZXR0aW5ncyIsImZsYXRPcHRpb25zIiwiYWN0aXZlIiwibGFzdE1vZGlmaWVkIiwiZXRhZyIsInVybCIsImlzTG9jYWwiLCJwcm90b2NvbCIsInByb2Nlc3NEYXRhIiwiYXN5bmMiLCJjb250ZW50VHlwZSIsImFjY2VwdHMiLCJ4bWwiLCJqc29uIiwicmVzcG9uc2VGaWVsZHMiLCJjb252ZXJ0ZXJzIiwiY29udGV4dCIsImFqYXhTZXR1cCIsImFqYXhQcmVmaWx0ZXIiLCJhamF4VHJhbnNwb3J0IiwiYWpheCIsInN0YXR1c0NvZGUiLCJnZXRSZXNwb25zZUhlYWRlciIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsInNldFJlcXVlc3RIZWFkZXIiLCJvdmVycmlkZU1pbWVUeXBlIiwibWltZVR5cGUiLCJzdGF0dXMiLCJhYm9ydCIsIm1ldGhvZCIsImRhdGFUeXBlIiwiY3Jvc3NEb21haW4iLCJob3N0IiwidHJhZGl0aW9uYWwiLCJoYXNDb250ZW50IiwiaWZNb2RpZmllZCIsImhlYWRlcnMiLCJiZWZvcmVTZW5kIiwic3VjY2VzcyIsInRpbWVvdXQiLCJzZW5kIiwiZGF0YUZpbHRlciIsInN0YXR1c1RleHQiLCJnZXRKU09OIiwiZ2V0U2NyaXB0Iiwid3JhcEFsbCIsImZpcnN0RWxlbWVudENoaWxkIiwid3JhcElubmVyIiwid3JhcCIsInVud3JhcCIsInZpc2libGUiLCJvZmZzZXRIZWlnaHQiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIl90IiwienQiLCJjb3JzIiwib3BlbiIsInVzZXJuYW1lIiwieGhyRmllbGRzIiwib25sb2FkIiwib25lcnJvciIsIm9uYWJvcnQiLCJvbnRpbWVvdXQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZXNwb25zZVR5cGUiLCJyZXNwb25zZVRleHQiLCJiaW5hcnkiLCJyZXNwb25zZSIsInNjcmlwdCIsInNjcmlwdEF0dHJzIiwiY2hhcnNldCIsInNjcmlwdENoYXJzZXQiLCJVdCIsIlh0IiwiVnQiLCJqc29ucCIsImpzb25wQ2FsbGJhY2siLCJjcmVhdGVIVE1MRG9jdW1lbnQiLCJpbXBsZW1lbnRhdGlvbiIsImFuaW1hdGVkIiwib2Zmc2V0Iiwic2V0T2Zmc2V0IiwidXNpbmciLCJwYWdlWU9mZnNldCIsInBhZ2VYT2Zmc2V0Iiwib2Zmc2V0UGFyZW50Iiwic2Nyb2xsVG8iLCJIZWlnaHQiLCJXaWR0aCIsInVuYmluZCIsImRlbGVnYXRlIiwidW5kZWxlZ2F0ZSIsImhvdmVyIiwiR3QiLCJwcm94eSIsImhvbGRSZWFkeSIsInBhcnNlSlNPTiIsImlzRnVuY3Rpb24iLCJpc1dpbmRvdyIsImNhbWVsQ2FzZSIsImlzTnVtZXJpYyIsImlzTmFOIiwidHJpbSIsImRlZmluZSIsImFtZCIsIll0IiwialF1ZXJ5IiwiUXQiLCJub0NvbmZsaWN0IiwiYXNzaWduIiwidGhyZXNob2xkIiwicmVxdWVzdEZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib1JlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZWxlbWVudCIsIkN1c3RvbUV2ZW50IiwicGFyYW1zIiwidW5kZWZpbmVkIiwiZXZ0IiwiY3JlYXRlRXZlbnQiLCJpbml0Q3VzdG9tRXZlbnQiLCJpZ25vcmVUYWdzIiwidGV4dGFyZWEiLCJtb3VzZWV2ZW50cyIsIm1vdmUiLCJjYW5jZWwiLCJ0b3VjaGV2ZW50cyIsInJzcGFjZXMiLCJldmVudE9wdGlvbnMiLCJldmVudHNTeW1ib2wiLCJnZXRFdmVudHMiLCJub2RlIiwidHlwZXMiLCJwcm9wZXJ0aWVzIiwiZGlzcGF0Y2hFdmVudCIsIlRpbWVyIiwiY2FsbGJhY2siLCJydW5uaW5nIiwidGltZSIsImtpY2siLCJjYiIsImlzSWdub3JlVGFnIiwidGFnTmFtZSIsImlzUHJpbWFyeUJ1dHRvbiIsImlkZW50aWZpZWRUb3VjaCIsInRvdWNoTGlzdCIsImlkZW50aWZpZXIiLCJjaGFuZ2VkVG91Y2giLCJ0b3VjaCIsIm1vdXNlZG93biIsIm1vdXNlbW92ZSIsIm1vdXNlZW5kIiwiY2hlY2tUaHJlc2hvbGQiLCJyZW1vdmVNb3VzZSIsInRvdWNoc3RhcnQiLCJ0b3VjaG1vdmUiLCJ0b3VjaGVuZCIsInJlbW92ZVRvdWNoIiwiZGlzdFgiLCJkaXN0WSIsInRyaWdnZXJTdGFydCIsInRlbXBsYXRlIiwic3RhcnRYIiwic3RhcnRZIiwiZGVsdGFYIiwiZGVsdGFZIiwidmVsb2NpdHlYIiwidmVsb2NpdHlZIiwiZmluZ2VyIiwiZW5hYmxlTW92ZSIsIm1vdmVFbmFibGVkIiwiYWN0aXZlTW91c2Vtb3ZlIiwiYWN0aXZlTW91c2VlbmQiLCJyZW1vdmVBY3RpdmVNb3VzZSIsImVuZEV2ZW50IiwiYWN0aXZlVG91Y2htb3ZlIiwiYWN0aXZlVG91Y2hlbmQiLCJyZW1vdmVBY3RpdmVUb3VjaCIsInVwZGF0ZUV2ZW50IiwibW92ZXN0YXJ0IiwidXBkYXRlIiwiZW5hYmxlTW92ZTEiLCJlbmFibGVNb3ZlMiIsImVuYWJsZU1vdmUzIiwicHJvcGVydHkiLCJtb3ZlZW5kIiwibmljZVNlbGVjdCIsIiRzZWxlY3QiLCIkZHJvcGRvd24iLCJjcmVhdGVfbmljZV9zZWxlY3QiLCIkb3B0aW9ucyIsIiRzZWxlY3RlZCIsIiRvcHRpb24iLCIkZm9jdXNlZF9vcHRpb24iLCIkbmV4dCIsIiRwcmV2IiwicG9pbnRlckV2ZW50cyIsInR3ZW50eXR3ZW50eSIsImRlZmF1bHRfb2Zmc2V0X3BjdCIsIm9yaWVudGF0aW9uIiwiYmVmb3JlX2xhYmVsIiwiYWZ0ZXJfbGFiZWwiLCJub19vdmVybGF5IiwibW92ZV9zbGlkZXJfb25faG92ZXIiLCJtb3ZlX3dpdGhfaGFuZGxlX29ubHkiLCJjbGlja190b19tb3ZlIiwic2xpZGVyUGN0IiwiY29udGFpbmVyIiwic2xpZGVyT3JpZW50YXRpb24iLCJiZWZvcmVEaXJlY3Rpb24iLCJhZnRlckRpcmVjdGlvbiIsIm92ZXJsYXkiLCJiZWZvcmVJbWciLCJhZnRlckltZyIsInNsaWRlciIsImNhbGNPZmZzZXQiLCJkaW1lbnNpb25QY3QiLCJjdyIsImNoIiwiYWRqdXN0Q29udGFpbmVyIiwiYWRqdXN0U2xpZGVyIiwicGN0IiwibWluTWF4TnVtYmVyIiwibnVtIiwibWluIiwiZ2V0U2xpZGVyUGVyY2VudGFnZSIsInBvc2l0aW9uWCIsInBvc2l0aW9uWSIsInNsaWRlclBlcmNlbnRhZ2UiLCJpbWdIZWlnaHQiLCJpbWdXaWR0aCIsIm9uTW92ZVN0YXJ0Iiwib25Nb3ZlIiwib25Nb3ZlRW5kIiwibW92ZVRhcmdldCIsInJlcXVpcmUiLCJ2YWxpZGF0ZSIsImRlYnVnIiwidmFsaWRhdG9yIiwic2V0dGluZ3MiLCJvbnN1Ym1pdCIsInN1Ym1pdEJ1dHRvbiIsImNhbmNlbFN1Ym1pdCIsInN1Ym1pdEhhbmRsZXIiLCJmb3JtU3VibWl0dGVkIiwiY3VycmVudEZvcm0iLCJmb3JtIiwicGVuZGluZ1JlcXVlc3QiLCJmb2N1c0ludmFsaWQiLCJ2YWxpZCIsImVycm9yTGlzdCIsInJ1bGVzIiwic3RhdGljUnVsZXMiLCJub3JtYWxpemVSdWxlIiwibWVzc2FnZXMiLCJub3JtYWxpemVSdWxlcyIsImNsYXNzUnVsZXMiLCJhdHRyaWJ1dGVSdWxlcyIsImRhdGFSdWxlcyIsInJlcXVpcmVkIiwicmVtb3RlIiwiYmxhbmsiLCJmaWxsZWQiLCJ1bmNoZWNrZWQiLCJkZWZhdWx0cyIsImZvcm1hdCIsImdyb3VwcyIsImVycm9yQ2xhc3MiLCJwZW5kaW5nQ2xhc3MiLCJ2YWxpZENsYXNzIiwiZXJyb3JFbGVtZW50IiwiZm9jdXNDbGVhbnVwIiwiZXJyb3JDb250YWluZXIiLCJlcnJvckxhYmVsQ29udGFpbmVyIiwiaWdub3JlIiwiaWdub3JlVGl0bGUiLCJvbmZvY3VzaW4iLCJsYXN0QWN0aXZlIiwidW5oaWdobGlnaHQiLCJoaWRlVGhlc2UiLCJlcnJvcnNGb3IiLCJvbmZvY3Vzb3V0IiwiY2hlY2thYmxlIiwic3VibWl0dGVkIiwib3B0aW9uYWwiLCJvbmtleXVwIiwiZWxlbWVudFZhbHVlIiwiaW52YWxpZCIsIm9uY2xpY2siLCJoaWdobGlnaHQiLCJmaW5kQnlOYW1lIiwic2V0RGVmYXVsdHMiLCJlbWFpbCIsImRhdGUiLCJkYXRlSVNPIiwibnVtYmVyIiwiZGlnaXRzIiwiZXF1YWxUbyIsIm1heGxlbmd0aCIsIm1pbmxlbmd0aCIsInJhbmdlbGVuZ3RoIiwicmFuZ2UiLCJhdXRvQ3JlYXRlUmFuZ2VzIiwibGFiZWxDb250YWluZXIiLCJlcnJvckNvbnRleHQiLCJjb250YWluZXJzIiwidmFsdWVDYWNoZSIsInBlbmRpbmciLCJpbnZhbGlkSGFuZGxlciIsImNoZWNrRm9ybSIsImVycm9yTWFwIiwic2hvd0Vycm9ycyIsInByZXBhcmVGb3JtIiwiY3VycmVudEVsZW1lbnRzIiwiZWxlbWVudHMiLCJjaGVjayIsImNsZWFuIiwidmFsaWRhdGlvblRhcmdldEZvciIsInByZXBhcmVFbGVtZW50IiwibnVtYmVyT2ZJbnZhbGlkcyIsInRvSGlkZSIsInN1Y2Nlc3NMaXN0IiwiZGVmYXVsdFNob3dFcnJvcnMiLCJyZXNldEZvcm0iLCJoaWRlRXJyb3JzIiwicmVzZXRFbGVtZW50cyIsIm9iamVjdExlbmd0aCIsImFkZFdyYXBwZXIiLCJzaXplIiwiZmluZExhc3RBY3RpdmUiLCJlcnJvcnMiLCJyZXNldEludGVybmFscyIsInRvU2hvdyIsInZhbGlkaXR5IiwiYmFkSW5wdXQiLCJzdWJzdHIiLCJsYXN0SW5kZXhPZiIsIm5vcm1hbGl6ZXIiLCJwYXJhbWV0ZXJzIiwibWV0aG9kcyIsImZvcm1hdEFuZEFkZCIsImxvZyIsImN1c3RvbURhdGFNZXNzYWdlIiwiY2hhckF0Iiwic3Vic3RyaW5nIiwiY3VzdG9tTWVzc2FnZSIsImZpbmREZWZpbmVkIiwiZGVmYXVsdE1lc3NhZ2UiLCJ0aXRsZSIsIndyYXBwZXIiLCJzaG93TGFiZWwiLCJ2YWxpZEVsZW1lbnRzIiwiaW52YWxpZEVsZW1lbnRzIiwiaWRPck5hbWUiLCJlcnJvclBsYWNlbWVudCIsImVzY2FwZUNzc01ldGEiLCJnZXRMZW5ndGgiLCJkZXBlbmQiLCJkZXBlbmRUeXBlcyIsInN0cmluZyIsInN0YXJ0UmVxdWVzdCIsInN0b3BSZXF1ZXN0IiwicHJldmlvdXNWYWx1ZSIsImRlc3Ryb3kiLCJjbGFzc1J1bGVTZXR0aW5ncyIsImNyZWRpdGNhcmQiLCJhZGRDbGFzc1J1bGVzIiwibm9ybWFsaXplQXR0cmlidXRlUnVsZSIsIk51bWJlciIsImRlcGVuZHMiLCJhZGRNZXRob2QiLCJwb3ciLCJvcmlnaW5hbE1lc3NhZ2UiLCJtb2RlIiwicG9ydCIsIlN3aXBlciIsImRpcmVjdGlvbiIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJsb29wIiwiZmFkZUVmZmVjdCIsImNyb3NzRmFkZSIsImF1dG9wbGF5IiwiZGlzYWJsZU9uSW50ZXJhY3Rpb24iLCJwYWdpbmF0aW9uIiwiZWwiLCJjbGlja2FibGUiLCJuYXZpZ2F0aW9uUHJldiIsIm5hdmlnYXRpb25OZXh0Iiwic3dpcGVyIiwic2Nyb2xsYmFyIiwiZHJhZ2dhYmxlIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImJyZWFrcG9pbnRzIiwiYnVsbGV0cyIsImZyZWVNb2RlIiwic3dpcGVyTWFycXVlIiwiYWxsb3dUb3VjaE1vdmUiLCJkb29yc1N3aXBlckluaXQiLCJpc1JldmVyc2UiLCJpbml0aWFsU2xpZGUiLCJyZXZlcnNlRGlyZWN0aW9uIiwiZG9vcnNTd2lwZXJFbDEiLCJkb29yc1N3aXBlckVsMiIsImRvb3JzU3dpcGVyRWwzIiwiZG9vcnNTd2lwZXJFbDQiLCJnYWxsYXJ5X19zd2lwZXIiLCJ3YXRjaFNsaWRlc1Byb2dyZXNzIiwiZ2FsbGVyeVRodW1ic1N3aXBlciIsInJlc2l6ZSIsImdhbGxlcnlTd2lwZXIiLCJlZmZlY3QiLCJ0aHVtYnMiLCIkY29udGFpbmVyIiwic3dpcGVyVGFicyIsInRvdWNoU3RhcnRGb3JjZVByZXZlbnREZWZhdWx0IiwiJHRoaXMiLCIkZm9ybSIsIiRpbnB1dCIsIiRidG4iLCIkcGFyZW50IiwiaW5uZXJXaWR0aCIsImhlYWRlckhlaWdodCIsInBhdHRlcm4iLCJwaG9uZSIsIm1lbnVDbG9zZSIsIm1lbnVPcGVuIiwic2xpZGVUb2dnbGVTZWN0aW9uIiwib3V0ZXJXaWR0aCIsInJpZ2h0RHJvcGRvd24iLCIkc3VibWVudSIsIiRvZmZzZXRUb0xlZnQiLCJ3aW5kb3dXaWR0aCIsIiRpc09wZW4iLCJjYXRhbG9nTWVudU9wZW4iLCJjYXRhbG9nTWVudUNsb3NlIiwicG9wdXBDbG9zZSIsIiRlbGVtIiwicG9wdXBPcGVuIiwiJGFncmVlbWVudENvbnRyb2wiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInNhdmVkTGFuZ3VhZ2UiLCJjaGFuZ2UiLCJzZWxlY3RlZExhbmciLCJmaXhlZEhlYWRlciIsImlubmVySGVpZ2h0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IGpRdWVyeSB2My41LjEgfCAoYykgSlMgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIHwganF1ZXJ5Lm9yZy9saWNlbnNlICovXG4hZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZS5kb2N1bWVudD90KGUsITApOmZ1bmN0aW9uKGUpe2lmKCFlLmRvY3VtZW50KXRocm93IG5ldyBFcnJvcihcImpRdWVyeSByZXF1aXJlcyBhIHdpbmRvdyB3aXRoIGEgZG9jdW1lbnRcIik7cmV0dXJuIHQoZSl9OnQoZSl9KFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OnRoaXMsZnVuY3Rpb24oQyxlKXtcInVzZSBzdHJpY3RcIjt2YXIgdD1bXSxyPU9iamVjdC5nZXRQcm90b3R5cGVPZixzPXQuc2xpY2UsZz10LmZsYXQ/ZnVuY3Rpb24oZSl7cmV0dXJuIHQuZmxhdC5jYWxsKGUpfTpmdW5jdGlvbihlKXtyZXR1cm4gdC5jb25jYXQuYXBwbHkoW10sZSl9LHU9dC5wdXNoLGk9dC5pbmRleE9mLG49e30sbz1uLnRvU3RyaW5nLHY9bi5oYXNPd25Qcm9wZXJ0eSxhPXYudG9TdHJpbmcsbD1hLmNhbGwoT2JqZWN0KSx5PXt9LG09ZnVuY3Rpb24oZSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmXCJudW1iZXJcIiE9dHlwZW9mIGUubm9kZVR5cGV9LHg9ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGwhPWUmJmU9PT1lLndpbmRvd30sRT1DLmRvY3VtZW50LGM9e3R5cGU6ITAsc3JjOiEwLG5vbmNlOiEwLG5vTW9kdWxlOiEwfTtmdW5jdGlvbiBiKGUsdCxuKXt2YXIgcixpLG89KG49bnx8RSkuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtpZihvLnRleHQ9ZSx0KWZvcihyIGluIGMpKGk9dFtyXXx8dC5nZXRBdHRyaWJ1dGUmJnQuZ2V0QXR0cmlidXRlKHIpKSYmby5zZXRBdHRyaWJ1dGUocixpKTtuLmhlYWQuYXBwZW5kQ2hpbGQobykucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvKX1mdW5jdGlvbiB3KGUpe3JldHVybiBudWxsPT1lP2UrXCJcIjpcIm9iamVjdFwiPT10eXBlb2YgZXx8XCJmdW5jdGlvblwiPT10eXBlb2YgZT9uW28uY2FsbChlKV18fFwib2JqZWN0XCI6dHlwZW9mIGV9dmFyIGY9XCIzLjUuMVwiLFM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbmV3IFMuZm4uaW5pdChlLHQpfTtmdW5jdGlvbiBwKGUpe3ZhciB0PSEhZSYmXCJsZW5ndGhcImluIGUmJmUubGVuZ3RoLG49dyhlKTtyZXR1cm4hbShlKSYmIXgoZSkmJihcImFycmF5XCI9PT1ufHwwPT09dHx8XCJudW1iZXJcIj09dHlwZW9mIHQmJjA8dCYmdC0xIGluIGUpfVMuZm49Uy5wcm90b3R5cGU9e2pxdWVyeTpmLGNvbnN0cnVjdG9yOlMsbGVuZ3RoOjAsdG9BcnJheTpmdW5jdGlvbigpe3JldHVybiBzLmNhbGwodGhpcyl9LGdldDpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT9zLmNhbGwodGhpcyk6ZTwwP3RoaXNbZSt0aGlzLmxlbmd0aF06dGhpc1tlXX0scHVzaFN0YWNrOmZ1bmN0aW9uKGUpe3ZhciB0PVMubWVyZ2UodGhpcy5jb25zdHJ1Y3RvcigpLGUpO3JldHVybiB0LnByZXZPYmplY3Q9dGhpcyx0fSxlYWNoOmZ1bmN0aW9uKGUpe3JldHVybiBTLmVhY2godGhpcyxlKX0sbWFwOmZ1bmN0aW9uKG4pe3JldHVybiB0aGlzLnB1c2hTdGFjayhTLm1hcCh0aGlzLGZ1bmN0aW9uKGUsdCl7cmV0dXJuIG4uY2FsbChlLHQsZSl9KSl9LHNsaWNlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKHMuYXBwbHkodGhpcyxhcmd1bWVudHMpKX0sZmlyc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgwKX0sbGFzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKC0xKX0sZXZlbjpmdW5jdGlvbigpe3JldHVybiB0aGlzLnB1c2hTdGFjayhTLmdyZXAodGhpcyxmdW5jdGlvbihlLHQpe3JldHVybih0KzEpJTJ9KSl9LG9kZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnB1c2hTdGFjayhTLmdyZXAodGhpcyxmdW5jdGlvbihlLHQpe3JldHVybiB0JTJ9KSl9LGVxOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMubGVuZ3RoLG49K2UrKGU8MD90OjApO3JldHVybiB0aGlzLnB1c2hTdGFjaygwPD1uJiZuPHQ/W3RoaXNbbl1dOltdKX0sZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHJldk9iamVjdHx8dGhpcy5jb25zdHJ1Y3RvcigpfSxwdXNoOnUsc29ydDp0LnNvcnQsc3BsaWNlOnQuc3BsaWNlfSxTLmV4dGVuZD1TLmZuLmV4dGVuZD1mdW5jdGlvbigpe3ZhciBlLHQsbixyLGksbyxhPWFyZ3VtZW50c1swXXx8e30scz0xLHU9YXJndW1lbnRzLmxlbmd0aCxsPSExO2ZvcihcImJvb2xlYW5cIj09dHlwZW9mIGEmJihsPWEsYT1hcmd1bWVudHNbc118fHt9LHMrKyksXCJvYmplY3RcIj09dHlwZW9mIGF8fG0oYSl8fChhPXt9KSxzPT09dSYmKGE9dGhpcyxzLS0pO3M8dTtzKyspaWYobnVsbCE9KGU9YXJndW1lbnRzW3NdKSlmb3IodCBpbiBlKXI9ZVt0XSxcIl9fcHJvdG9fX1wiIT09dCYmYSE9PXImJihsJiZyJiYoUy5pc1BsYWluT2JqZWN0KHIpfHwoaT1BcnJheS5pc0FycmF5KHIpKSk/KG49YVt0XSxvPWkmJiFBcnJheS5pc0FycmF5KG4pP1tdOml8fFMuaXNQbGFpbk9iamVjdChuKT9uOnt9LGk9ITEsYVt0XT1TLmV4dGVuZChsLG8scikpOnZvaWQgMCE9PXImJihhW3RdPXIpKTtyZXR1cm4gYX0sUy5leHRlbmQoe2V4cGFuZG86XCJqUXVlcnlcIisoZitNYXRoLnJhbmRvbSgpKS5yZXBsYWNlKC9cXEQvZyxcIlwiKSxpc1JlYWR5OiEwLGVycm9yOmZ1bmN0aW9uKGUpe3Rocm93IG5ldyBFcnJvcihlKX0sbm9vcDpmdW5jdGlvbigpe30saXNQbGFpbk9iamVjdDpmdW5jdGlvbihlKXt2YXIgdCxuO3JldHVybiEoIWV8fFwiW29iamVjdCBPYmplY3RdXCIhPT1vLmNhbGwoZSkpJiYoISh0PXIoZSkpfHxcImZ1bmN0aW9uXCI9PXR5cGVvZihuPXYuY2FsbCh0LFwiY29uc3RydWN0b3JcIikmJnQuY29uc3RydWN0b3IpJiZhLmNhbGwobik9PT1sKX0saXNFbXB0eU9iamVjdDpmdW5jdGlvbihlKXt2YXIgdDtmb3IodCBpbiBlKXJldHVybiExO3JldHVybiEwfSxnbG9iYWxFdmFsOmZ1bmN0aW9uKGUsdCxuKXtiKGUse25vbmNlOnQmJnQubm9uY2V9LG4pfSxlYWNoOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj0wO2lmKHAoZSkpe2ZvcihuPWUubGVuZ3RoO3I8bjtyKyspaWYoITE9PT10LmNhbGwoZVtyXSxyLGVbcl0pKWJyZWFrfWVsc2UgZm9yKHIgaW4gZSlpZighMT09PXQuY2FsbChlW3JdLHIsZVtyXSkpYnJlYWs7cmV0dXJuIGV9LG1ha2VBcnJheTpmdW5jdGlvbihlLHQpe3ZhciBuPXR8fFtdO3JldHVybiBudWxsIT1lJiYocChPYmplY3QoZSkpP1MubWVyZ2UobixcInN0cmluZ1wiPT10eXBlb2YgZT9bZV06ZSk6dS5jYWxsKG4sZSkpLG59LGluQXJyYXk6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBudWxsPT10Py0xOmkuY2FsbCh0LGUsbil9LG1lcmdlOmZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPSt0Lmxlbmd0aCxyPTAsaT1lLmxlbmd0aDtyPG47cisrKWVbaSsrXT10W3JdO3JldHVybiBlLmxlbmd0aD1pLGV9LGdyZXA6ZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgcj1bXSxpPTAsbz1lLmxlbmd0aCxhPSFuO2k8bztpKyspIXQoZVtpXSxpKSE9PWEmJnIucHVzaChlW2ldKTtyZXR1cm4gcn0sbWFwOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89MCxhPVtdO2lmKHAoZSkpZm9yKHI9ZS5sZW5ndGg7bzxyO28rKyludWxsIT0oaT10KGVbb10sbyxuKSkmJmEucHVzaChpKTtlbHNlIGZvcihvIGluIGUpbnVsbCE9KGk9dChlW29dLG8sbikpJiZhLnB1c2goaSk7cmV0dXJuIGcoYSl9LGd1aWQ6MSxzdXBwb3J0Onl9KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJihTLmZuW1N5bWJvbC5pdGVyYXRvcl09dFtTeW1ib2wuaXRlcmF0b3JdKSxTLmVhY2goXCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yIFN5bWJvbFwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihlLHQpe25bXCJbb2JqZWN0IFwiK3QrXCJdXCJdPXQudG9Mb3dlckNhc2UoKX0pO3ZhciBkPWZ1bmN0aW9uKG4pe3ZhciBlLGQsYixvLGksaCxmLGcsdyx1LGwsVCxDLGEsRSx2LHMsYyx5LFM9XCJzaXp6bGVcIisxKm5ldyBEYXRlLHA9bi5kb2N1bWVudCxrPTAscj0wLG09dWUoKSx4PXVlKCksQT11ZSgpLE49dWUoKSxEPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU9PT10JiYobD0hMCksMH0saj17fS5oYXNPd25Qcm9wZXJ0eSx0PVtdLHE9dC5wb3AsTD10LnB1c2gsSD10LnB1c2gsTz10LnNsaWNlLFA9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49MCxyPWUubGVuZ3RoO248cjtuKyspaWYoZVtuXT09PXQpcmV0dXJuIG47cmV0dXJuLTF9LFI9XCJjaGVja2VkfHNlbGVjdGVkfGFzeW5jfGF1dG9mb2N1c3xhdXRvcGxheXxjb250cm9sc3xkZWZlcnxkaXNhYmxlZHxoaWRkZW58aXNtYXB8bG9vcHxtdWx0aXBsZXxvcGVufHJlYWRvbmx5fHJlcXVpcmVkfHNjb3BlZFwiLE09XCJbXFxcXHgyMFxcXFx0XFxcXHJcXFxcblxcXFxmXVwiLEk9XCIoPzpcXFxcXFxcXFtcXFxcZGEtZkEtRl17MSw2fVwiK00rXCI/fFxcXFxcXFxcW15cXFxcclxcXFxuXFxcXGZdfFtcXFxcdy1dfFteXFwwLVxcXFx4N2ZdKStcIixXPVwiXFxcXFtcIitNK1wiKihcIitJK1wiKSg/OlwiK00rXCIqKFsqXiR8IX5dPz0pXCIrTStcIiooPzonKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCJ8KFwiK0krXCIpKXwpXCIrTStcIipcXFxcXVwiLEY9XCI6KFwiK0krXCIpKD86XFxcXCgoKCcoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcIil8KCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKClbXFxcXF1dfFwiK1crXCIpKil8LiopXFxcXCl8KVwiLEI9bmV3IFJlZ0V4cChNK1wiK1wiLFwiZ1wiKSwkPW5ldyBSZWdFeHAoXCJeXCIrTStcIit8KCg/Ol58W15cXFxcXFxcXF0pKD86XFxcXFxcXFwuKSopXCIrTStcIiskXCIsXCJnXCIpLF89bmV3IFJlZ0V4cChcIl5cIitNK1wiKixcIitNK1wiKlwiKSx6PW5ldyBSZWdFeHAoXCJeXCIrTStcIiooWz4rfl18XCIrTStcIilcIitNK1wiKlwiKSxVPW5ldyBSZWdFeHAoTStcInw+XCIpLFg9bmV3IFJlZ0V4cChGKSxWPW5ldyBSZWdFeHAoXCJeXCIrSStcIiRcIiksRz17SUQ6bmV3IFJlZ0V4cChcIl4jKFwiK0krXCIpXCIpLENMQVNTOm5ldyBSZWdFeHAoXCJeXFxcXC4oXCIrSStcIilcIiksVEFHOm5ldyBSZWdFeHAoXCJeKFwiK0krXCJ8WypdKVwiKSxBVFRSOm5ldyBSZWdFeHAoXCJeXCIrVyksUFNFVURPOm5ldyBSZWdFeHAoXCJeXCIrRiksQ0hJTEQ6bmV3IFJlZ0V4cChcIl46KG9ubHl8Zmlyc3R8bGFzdHxudGh8bnRoLWxhc3QpLShjaGlsZHxvZi10eXBlKSg/OlxcXFwoXCIrTStcIiooZXZlbnxvZGR8KChbKy1dfCkoXFxcXGQqKW58KVwiK00rXCIqKD86KFsrLV18KVwiK00rXCIqKFxcXFxkKyl8KSlcIitNK1wiKlxcXFwpfClcIixcImlcIiksYm9vbDpuZXcgUmVnRXhwKFwiXig/OlwiK1IrXCIpJFwiLFwiaVwiKSxuZWVkc0NvbnRleHQ6bmV3IFJlZ0V4cChcIl5cIitNK1wiKls+K35dfDooZXZlbnxvZGR8ZXF8Z3R8bHR8bnRofGZpcnN0fGxhc3QpKD86XFxcXChcIitNK1wiKigoPzotXFxcXGQpP1xcXFxkKilcIitNK1wiKlxcXFwpfCkoPz1bXi1dfCQpXCIsXCJpXCIpfSxZPS9IVE1MJC9pLFE9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxKPS9eaFxcZCQvaSxLPS9eW157XStcXHtcXHMqXFxbbmF0aXZlIFxcdy8sWj0vXig/OiMoW1xcdy1dKyl8KFxcdyspfFxcLihbXFx3LV0rKSkkLyxlZT0vWyt+XS8sdGU9bmV3IFJlZ0V4cChcIlxcXFxcXFxcW1xcXFxkYS1mQS1GXXsxLDZ9XCIrTStcIj98XFxcXFxcXFwoW15cXFxcclxcXFxuXFxcXGZdKVwiLFwiZ1wiKSxuZT1mdW5jdGlvbihlLHQpe3ZhciBuPVwiMHhcIitlLnNsaWNlKDEpLTY1NTM2O3JldHVybiB0fHwobjwwP1N0cmluZy5mcm9tQ2hhckNvZGUobis2NTUzNik6U3RyaW5nLmZyb21DaGFyQ29kZShuPj4xMHw1NTI5NiwxMDIzJm58NTYzMjApKX0scmU9LyhbXFwwLVxceDFmXFx4N2ZdfF4tP1xcZCl8Xi0kfFteXFwwLVxceDFmXFx4N2YtXFx1RkZGRlxcdy1dL2csaWU9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdD9cIlxcMFwiPT09ZT9cIlxcdWZmZmRcIjplLnNsaWNlKDAsLTEpK1wiXFxcXFwiK2UuY2hhckNvZGVBdChlLmxlbmd0aC0xKS50b1N0cmluZygxNikrXCIgXCI6XCJcXFxcXCIrZX0sb2U9ZnVuY3Rpb24oKXtUKCl9LGFlPWJlKGZ1bmN0aW9uKGUpe3JldHVybiEwPT09ZS5kaXNhYmxlZCYmXCJmaWVsZHNldFwiPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpfSx7ZGlyOlwicGFyZW50Tm9kZVwiLG5leHQ6XCJsZWdlbmRcIn0pO3RyeXtILmFwcGx5KHQ9Ty5jYWxsKHAuY2hpbGROb2RlcykscC5jaGlsZE5vZGVzKSx0W3AuY2hpbGROb2Rlcy5sZW5ndGhdLm5vZGVUeXBlfWNhdGNoKGUpe0g9e2FwcGx5OnQubGVuZ3RoP2Z1bmN0aW9uKGUsdCl7TC5hcHBseShlLE8uY2FsbCh0KSl9OmZ1bmN0aW9uKGUsdCl7dmFyIG49ZS5sZW5ndGgscj0wO3doaWxlKGVbbisrXT10W3IrK10pO2UubGVuZ3RoPW4tMX19fWZ1bmN0aW9uIHNlKHQsZSxuLHIpe3ZhciBpLG8sYSxzLHUsbCxjLGY9ZSYmZS5vd25lckRvY3VtZW50LHA9ZT9lLm5vZGVUeXBlOjk7aWYobj1ufHxbXSxcInN0cmluZ1wiIT10eXBlb2YgdHx8IXR8fDEhPT1wJiY5IT09cCYmMTEhPT1wKXJldHVybiBuO2lmKCFyJiYoVChlKSxlPWV8fEMsRSkpe2lmKDExIT09cCYmKHU9Wi5leGVjKHQpKSlpZihpPXVbMV0pe2lmKDk9PT1wKXtpZighKGE9ZS5nZXRFbGVtZW50QnlJZChpKSkpcmV0dXJuIG47aWYoYS5pZD09PWkpcmV0dXJuIG4ucHVzaChhKSxufWVsc2UgaWYoZiYmKGE9Zi5nZXRFbGVtZW50QnlJZChpKSkmJnkoZSxhKSYmYS5pZD09PWkpcmV0dXJuIG4ucHVzaChhKSxufWVsc2V7aWYodVsyXSlyZXR1cm4gSC5hcHBseShuLGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUodCkpLG47aWYoKGk9dVszXSkmJmQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKXJldHVybiBILmFwcGx5KG4sZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGkpKSxufWlmKGQucXNhJiYhTlt0K1wiIFwiXSYmKCF2fHwhdi50ZXN0KHQpKSYmKDEhPT1wfHxcIm9iamVjdFwiIT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSl7aWYoYz10LGY9ZSwxPT09cCYmKFUudGVzdCh0KXx8ei50ZXN0KHQpKSl7KGY9ZWUudGVzdCh0KSYmeWUoZS5wYXJlbnROb2RlKXx8ZSk9PT1lJiZkLnNjb3BlfHwoKHM9ZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKSk/cz1zLnJlcGxhY2UocmUsaWUpOmUuc2V0QXR0cmlidXRlKFwiaWRcIixzPVMpKSxvPShsPWgodCkpLmxlbmd0aDt3aGlsZShvLS0pbFtvXT0ocz9cIiNcIitzOlwiOnNjb3BlXCIpK1wiIFwiK3hlKGxbb10pO2M9bC5qb2luKFwiLFwiKX10cnl7cmV0dXJuIEguYXBwbHkobixmLnF1ZXJ5U2VsZWN0b3JBbGwoYykpLG59Y2F0Y2goZSl7Tih0LCEwKX1maW5hbGx5e3M9PT1TJiZlLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpfX19cmV0dXJuIGcodC5yZXBsYWNlKCQsXCIkMVwiKSxlLG4scil9ZnVuY3Rpb24gdWUoKXt2YXIgcj1bXTtyZXR1cm4gZnVuY3Rpb24gZSh0LG4pe3JldHVybiByLnB1c2godCtcIiBcIik+Yi5jYWNoZUxlbmd0aCYmZGVsZXRlIGVbci5zaGlmdCgpXSxlW3QrXCIgXCJdPW59fWZ1bmN0aW9uIGxlKGUpe3JldHVybiBlW1NdPSEwLGV9ZnVuY3Rpb24gY2UoZSl7dmFyIHQ9Qy5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7dHJ5e3JldHVybiEhZSh0KX1jYXRjaChlKXtyZXR1cm4hMX1maW5hbGx5e3QucGFyZW50Tm9kZSYmdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQpLHQ9bnVsbH19ZnVuY3Rpb24gZmUoZSx0KXt2YXIgbj1lLnNwbGl0KFwifFwiKSxyPW4ubGVuZ3RoO3doaWxlKHItLSliLmF0dHJIYW5kbGVbbltyXV09dH1mdW5jdGlvbiBwZShlLHQpe3ZhciBuPXQmJmUscj1uJiYxPT09ZS5ub2RlVHlwZSYmMT09PXQubm9kZVR5cGUmJmUuc291cmNlSW5kZXgtdC5zb3VyY2VJbmRleDtpZihyKXJldHVybiByO2lmKG4pd2hpbGUobj1uLm5leHRTaWJsaW5nKWlmKG49PT10KXJldHVybi0xO3JldHVybiBlPzE6LTF9ZnVuY3Rpb24gZGUodCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVyblwiaW5wdXRcIj09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSYmZS50eXBlPT09dH19ZnVuY3Rpb24gaGUobil7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciB0PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm4oXCJpbnB1dFwiPT09dHx8XCJidXR0b25cIj09PXQpJiZlLnR5cGU9PT1ufX1mdW5jdGlvbiBnZSh0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuXCJmb3JtXCJpbiBlP2UucGFyZW50Tm9kZSYmITE9PT1lLmRpc2FibGVkP1wibGFiZWxcImluIGU/XCJsYWJlbFwiaW4gZS5wYXJlbnROb2RlP2UucGFyZW50Tm9kZS5kaXNhYmxlZD09PXQ6ZS5kaXNhYmxlZD09PXQ6ZS5pc0Rpc2FibGVkPT09dHx8ZS5pc0Rpc2FibGVkIT09IXQmJmFlKGUpPT09dDplLmRpc2FibGVkPT09dDpcImxhYmVsXCJpbiBlJiZlLmRpc2FibGVkPT09dH19ZnVuY3Rpb24gdmUoYSl7cmV0dXJuIGxlKGZ1bmN0aW9uKG8pe3JldHVybiBvPStvLGxlKGZ1bmN0aW9uKGUsdCl7dmFyIG4scj1hKFtdLGUubGVuZ3RoLG8pLGk9ci5sZW5ndGg7d2hpbGUoaS0tKWVbbj1yW2ldXSYmKGVbbl09ISh0W25dPWVbbl0pKX0pfSl9ZnVuY3Rpb24geWUoZSl7cmV0dXJuIGUmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLmdldEVsZW1lbnRzQnlUYWdOYW1lJiZlfWZvcihlIGluIGQ9c2Uuc3VwcG9ydD17fSxpPXNlLmlzWE1MPWZ1bmN0aW9uKGUpe3ZhciB0PWUubmFtZXNwYWNlVVJJLG49KGUub3duZXJEb2N1bWVudHx8ZSkuZG9jdW1lbnRFbGVtZW50O3JldHVybiFZLnRlc3QodHx8biYmbi5ub2RlTmFtZXx8XCJIVE1MXCIpfSxUPXNlLnNldERvY3VtZW50PWZ1bmN0aW9uKGUpe3ZhciB0LG4scj1lP2Uub3duZXJEb2N1bWVudHx8ZTpwO3JldHVybiByIT1DJiY5PT09ci5ub2RlVHlwZSYmci5kb2N1bWVudEVsZW1lbnQmJihhPShDPXIpLmRvY3VtZW50RWxlbWVudCxFPSFpKEMpLHAhPUMmJihuPUMuZGVmYXVsdFZpZXcpJiZuLnRvcCE9PW4mJihuLmFkZEV2ZW50TGlzdGVuZXI/bi5hZGRFdmVudExpc3RlbmVyKFwidW5sb2FkXCIsb2UsITEpOm4uYXR0YWNoRXZlbnQmJm4uYXR0YWNoRXZlbnQoXCJvbnVubG9hZFwiLG9lKSksZC5zY29wZT1jZShmdW5jdGlvbihlKXtyZXR1cm4gYS5hcHBlbmRDaGlsZChlKS5hcHBlbmRDaGlsZChDLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLnF1ZXJ5U2VsZWN0b3JBbGwmJiFlLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6c2NvcGUgZmllbGRzZXQgZGl2XCIpLmxlbmd0aH0pLGQuYXR0cmlidXRlcz1jZShmdW5jdGlvbihlKXtyZXR1cm4gZS5jbGFzc05hbWU9XCJpXCIsIWUuZ2V0QXR0cmlidXRlKFwiY2xhc3NOYW1lXCIpfSksZC5nZXRFbGVtZW50c0J5VGFnTmFtZT1jZShmdW5jdGlvbihlKXtyZXR1cm4gZS5hcHBlbmRDaGlsZChDLmNyZWF0ZUNvbW1lbnQoXCJcIikpLCFlLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKS5sZW5ndGh9KSxkLmdldEVsZW1lbnRzQnlDbGFzc05hbWU9Sy50ZXN0KEMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSksZC5nZXRCeUlkPWNlKGZ1bmN0aW9uKGUpe3JldHVybiBhLmFwcGVuZENoaWxkKGUpLmlkPVMsIUMuZ2V0RWxlbWVudHNCeU5hbWV8fCFDLmdldEVsZW1lbnRzQnlOYW1lKFMpLmxlbmd0aH0pLGQuZ2V0QnlJZD8oYi5maWx0ZXIuSUQ9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5yZXBsYWNlKHRlLG5lKTtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGUuZ2V0QXR0cmlidXRlKFwiaWRcIik9PT10fX0sYi5maW5kLklEPWZ1bmN0aW9uKGUsdCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQuZ2V0RWxlbWVudEJ5SWQmJkUpe3ZhciBuPXQuZ2V0RWxlbWVudEJ5SWQoZSk7cmV0dXJuIG4/W25dOltdfX0pOihiLmZpbHRlci5JRD1mdW5jdGlvbihlKXt2YXIgbj1lLnJlcGxhY2UodGUsbmUpO3JldHVybiBmdW5jdGlvbihlKXt2YXIgdD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZS5nZXRBdHRyaWJ1dGVOb2RlJiZlLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKTtyZXR1cm4gdCYmdC52YWx1ZT09PW59fSxiLmZpbmQuSUQ9ZnVuY3Rpb24oZSx0KXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgdC5nZXRFbGVtZW50QnlJZCYmRSl7dmFyIG4scixpLG89dC5nZXRFbGVtZW50QnlJZChlKTtpZihvKXtpZigobj1vLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKSkmJm4udmFsdWU9PT1lKXJldHVybltvXTtpPXQuZ2V0RWxlbWVudHNCeU5hbWUoZSkscj0wO3doaWxlKG89aVtyKytdKWlmKChuPW8uZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpKSYmbi52YWx1ZT09PWUpcmV0dXJuW29dfXJldHVybltdfX0pLGIuZmluZC5UQUc9ZC5nZXRFbGVtZW50c0J5VGFnTmFtZT9mdW5jdGlvbihlLHQpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiB0LmdldEVsZW1lbnRzQnlUYWdOYW1lP3QuZ2V0RWxlbWVudHNCeVRhZ05hbWUoZSk6ZC5xc2E/dC5xdWVyeVNlbGVjdG9yQWxsKGUpOnZvaWQgMH06ZnVuY3Rpb24oZSx0KXt2YXIgbixyPVtdLGk9MCxvPXQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoZSk7aWYoXCIqXCI9PT1lKXt3aGlsZShuPW9baSsrXSkxPT09bi5ub2RlVHlwZSYmci5wdXNoKG4pO3JldHVybiByfXJldHVybiBvfSxiLmZpbmQuQ0xBU1M9ZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZmdW5jdGlvbihlLHQpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJkUpcmV0dXJuIHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShlKX0scz1bXSx2PVtdLChkLnFzYT1LLnRlc3QoQy5xdWVyeVNlbGVjdG9yQWxsKSkmJihjZShmdW5jdGlvbihlKXt2YXIgdDthLmFwcGVuZENoaWxkKGUpLmlubmVySFRNTD1cIjxhIGlkPSdcIitTK1wiJz48L2E+PHNlbGVjdCBpZD0nXCIrUytcIi1cXHJcXFxcJyBtc2FsbG93Y2FwdHVyZT0nJz48b3B0aW9uIHNlbGVjdGVkPScnPjwvb3B0aW9uPjwvc2VsZWN0PlwiLGUucXVlcnlTZWxlY3RvckFsbChcIlttc2FsbG93Y2FwdHVyZV49JyddXCIpLmxlbmd0aCYmdi5wdXNoKFwiWypeJF09XCIrTStcIiooPzonJ3xcXFwiXFxcIilcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiW3NlbGVjdGVkXVwiKS5sZW5ndGh8fHYucHVzaChcIlxcXFxbXCIrTStcIiooPzp2YWx1ZXxcIitSK1wiKVwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaWR+PVwiK1MrXCItXVwiKS5sZW5ndGh8fHYucHVzaChcIn49XCIpLCh0PUMuY3JlYXRlRWxlbWVudChcImlucHV0XCIpKS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJcIiksZS5hcHBlbmRDaGlsZCh0KSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT0nJ11cIikubGVuZ3RofHx2LnB1c2goXCJcXFxcW1wiK00rXCIqbmFtZVwiK00rXCIqPVwiK00rXCIqKD86Jyd8XFxcIlxcXCIpXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIjpjaGVja2VkXCIpLmxlbmd0aHx8di5wdXNoKFwiOmNoZWNrZWRcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiYSNcIitTK1wiKypcIikubGVuZ3RofHx2LnB1c2goXCIuIy4rWyt+XVwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJcXFxcXFxmXCIpLHYucHVzaChcIltcXFxcclxcXFxuXFxcXGZdXCIpfSksY2UoZnVuY3Rpb24oZSl7ZS5pbm5lckhUTUw9XCI8YSBocmVmPScnIGRpc2FibGVkPSdkaXNhYmxlZCc+PC9hPjxzZWxlY3QgZGlzYWJsZWQ9J2Rpc2FibGVkJz48b3B0aW9uLz48L3NlbGVjdD5cIjt2YXIgdD1DLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTt0LnNldEF0dHJpYnV0ZShcInR5cGVcIixcImhpZGRlblwiKSxlLmFwcGVuZENoaWxkKHQpLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcIkRcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9ZF1cIikubGVuZ3RoJiZ2LnB1c2goXCJuYW1lXCIrTStcIipbKl4kfCF+XT89XCIpLDIhPT1lLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZW5hYmxlZFwiKS5sZW5ndGgmJnYucHVzaChcIjplbmFibGVkXCIsXCI6ZGlzYWJsZWRcIiksYS5hcHBlbmRDaGlsZChlKS5kaXNhYmxlZD0hMCwyIT09ZS5xdWVyeVNlbGVjdG9yQWxsKFwiOmRpc2FibGVkXCIpLmxlbmd0aCYmdi5wdXNoKFwiOmVuYWJsZWRcIixcIjpkaXNhYmxlZFwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqLDp4XCIpLHYucHVzaChcIiwuKjpcIil9KSksKGQubWF0Y2hlc1NlbGVjdG9yPUsudGVzdChjPWEubWF0Y2hlc3x8YS53ZWJraXRNYXRjaGVzU2VsZWN0b3J8fGEubW96TWF0Y2hlc1NlbGVjdG9yfHxhLm9NYXRjaGVzU2VsZWN0b3J8fGEubXNNYXRjaGVzU2VsZWN0b3IpKSYmY2UoZnVuY3Rpb24oZSl7ZC5kaXNjb25uZWN0ZWRNYXRjaD1jLmNhbGwoZSxcIipcIiksYy5jYWxsKGUsXCJbcyE9JyddOnhcIikscy5wdXNoKFwiIT1cIixGKX0pLHY9di5sZW5ndGgmJm5ldyBSZWdFeHAodi5qb2luKFwifFwiKSkscz1zLmxlbmd0aCYmbmV3IFJlZ0V4cChzLmpvaW4oXCJ8XCIpKSx0PUsudGVzdChhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKSx5PXR8fEsudGVzdChhLmNvbnRhaW5zKT9mdW5jdGlvbihlLHQpe3ZhciBuPTk9PT1lLm5vZGVUeXBlP2UuZG9jdW1lbnRFbGVtZW50OmUscj10JiZ0LnBhcmVudE5vZGU7cmV0dXJuIGU9PT1yfHwhKCFyfHwxIT09ci5ub2RlVHlwZXx8IShuLmNvbnRhaW5zP24uY29udGFpbnMocik6ZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiYmMTYmZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihyKSkpfTpmdW5jdGlvbihlLHQpe2lmKHQpd2hpbGUodD10LnBhcmVudE5vZGUpaWYodD09PWUpcmV0dXJuITA7cmV0dXJuITF9LEQ9dD9mdW5jdGlvbihlLHQpe2lmKGU9PT10KXJldHVybiBsPSEwLDA7dmFyIG49IWUuY29tcGFyZURvY3VtZW50UG9zaXRpb24tIXQuY29tcGFyZURvY3VtZW50UG9zaXRpb247cmV0dXJuIG58fCgxJihuPShlLm93bmVyRG9jdW1lbnR8fGUpPT0odC5vd25lckRvY3VtZW50fHx0KT9lLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKHQpOjEpfHwhZC5zb3J0RGV0YWNoZWQmJnQuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZSk9PT1uP2U9PUN8fGUub3duZXJEb2N1bWVudD09cCYmeShwLGUpPy0xOnQ9PUN8fHQub3duZXJEb2N1bWVudD09cCYmeShwLHQpPzE6dT9QKHUsZSktUCh1LHQpOjA6NCZuPy0xOjEpfTpmdW5jdGlvbihlLHQpe2lmKGU9PT10KXJldHVybiBsPSEwLDA7dmFyIG4scj0wLGk9ZS5wYXJlbnROb2RlLG89dC5wYXJlbnROb2RlLGE9W2VdLHM9W3RdO2lmKCFpfHwhbylyZXR1cm4gZT09Qz8tMTp0PT1DPzE6aT8tMTpvPzE6dT9QKHUsZSktUCh1LHQpOjA7aWYoaT09PW8pcmV0dXJuIHBlKGUsdCk7bj1lO3doaWxlKG49bi5wYXJlbnROb2RlKWEudW5zaGlmdChuKTtuPXQ7d2hpbGUobj1uLnBhcmVudE5vZGUpcy51bnNoaWZ0KG4pO3doaWxlKGFbcl09PT1zW3JdKXIrKztyZXR1cm4gcj9wZShhW3JdLHNbcl0pOmFbcl09PXA/LTE6c1tyXT09cD8xOjB9KSxDfSxzZS5tYXRjaGVzPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHNlKGUsbnVsbCxudWxsLHQpfSxzZS5tYXRjaGVzU2VsZWN0b3I9ZnVuY3Rpb24oZSx0KXtpZihUKGUpLGQubWF0Y2hlc1NlbGVjdG9yJiZFJiYhTlt0K1wiIFwiXSYmKCFzfHwhcy50ZXN0KHQpKSYmKCF2fHwhdi50ZXN0KHQpKSl0cnl7dmFyIG49Yy5jYWxsKGUsdCk7aWYobnx8ZC5kaXNjb25uZWN0ZWRNYXRjaHx8ZS5kb2N1bWVudCYmMTEhPT1lLmRvY3VtZW50Lm5vZGVUeXBlKXJldHVybiBufWNhdGNoKGUpe04odCwhMCl9cmV0dXJuIDA8c2UodCxDLG51bGwsW2VdKS5sZW5ndGh9LHNlLmNvbnRhaW5zPWZ1bmN0aW9uKGUsdCl7cmV0dXJuKGUub3duZXJEb2N1bWVudHx8ZSkhPUMmJlQoZSkseShlLHQpfSxzZS5hdHRyPWZ1bmN0aW9uKGUsdCl7KGUub3duZXJEb2N1bWVudHx8ZSkhPUMmJlQoZSk7dmFyIG49Yi5hdHRySGFuZGxlW3QudG9Mb3dlckNhc2UoKV0scj1uJiZqLmNhbGwoYi5hdHRySGFuZGxlLHQudG9Mb3dlckNhc2UoKSk/bihlLHQsIUUpOnZvaWQgMDtyZXR1cm4gdm9pZCAwIT09cj9yOmQuYXR0cmlidXRlc3x8IUU/ZS5nZXRBdHRyaWJ1dGUodCk6KHI9ZS5nZXRBdHRyaWJ1dGVOb2RlKHQpKSYmci5zcGVjaWZpZWQ/ci52YWx1ZTpudWxsfSxzZS5lc2NhcGU9ZnVuY3Rpb24oZSl7cmV0dXJuKGUrXCJcIikucmVwbGFjZShyZSxpZSl9LHNlLmVycm9yPWZ1bmN0aW9uKGUpe3Rocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciwgdW5yZWNvZ25pemVkIGV4cHJlc3Npb246IFwiK2UpfSxzZS51bmlxdWVTb3J0PWZ1bmN0aW9uKGUpe3ZhciB0LG49W10scj0wLGk9MDtpZihsPSFkLmRldGVjdER1cGxpY2F0ZXMsdT0hZC5zb3J0U3RhYmxlJiZlLnNsaWNlKDApLGUuc29ydChEKSxsKXt3aGlsZSh0PWVbaSsrXSl0PT09ZVtpXSYmKHI9bi5wdXNoKGkpKTt3aGlsZShyLS0pZS5zcGxpY2UobltyXSwxKX1yZXR1cm4gdT1udWxsLGV9LG89c2UuZ2V0VGV4dD1mdW5jdGlvbihlKXt2YXIgdCxuPVwiXCIscj0wLGk9ZS5ub2RlVHlwZTtpZihpKXtpZigxPT09aXx8OT09PWl8fDExPT09aSl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUudGV4dENvbnRlbnQpcmV0dXJuIGUudGV4dENvbnRlbnQ7Zm9yKGU9ZS5maXJzdENoaWxkO2U7ZT1lLm5leHRTaWJsaW5nKW4rPW8oZSl9ZWxzZSBpZigzPT09aXx8ND09PWkpcmV0dXJuIGUubm9kZVZhbHVlfWVsc2Ugd2hpbGUodD1lW3IrK10pbis9byh0KTtyZXR1cm4gbn0sKGI9c2Uuc2VsZWN0b3JzPXtjYWNoZUxlbmd0aDo1MCxjcmVhdGVQc2V1ZG86bGUsbWF0Y2g6RyxhdHRySGFuZGxlOnt9LGZpbmQ6e30scmVsYXRpdmU6e1wiPlwiOntkaXI6XCJwYXJlbnROb2RlXCIsZmlyc3Q6ITB9LFwiIFwiOntkaXI6XCJwYXJlbnROb2RlXCJ9LFwiK1wiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIixmaXJzdDohMH0sXCJ+XCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wifX0scHJlRmlsdGVyOntBVFRSOmZ1bmN0aW9uKGUpe3JldHVybiBlWzFdPWVbMV0ucmVwbGFjZSh0ZSxuZSksZVszXT0oZVszXXx8ZVs0XXx8ZVs1XXx8XCJcIikucmVwbGFjZSh0ZSxuZSksXCJ+PVwiPT09ZVsyXSYmKGVbM109XCIgXCIrZVszXStcIiBcIiksZS5zbGljZSgwLDQpfSxDSElMRDpmdW5jdGlvbihlKXtyZXR1cm4gZVsxXT1lWzFdLnRvTG93ZXJDYXNlKCksXCJudGhcIj09PWVbMV0uc2xpY2UoMCwzKT8oZVszXXx8c2UuZXJyb3IoZVswXSksZVs0XT0rKGVbNF0/ZVs1XSsoZVs2XXx8MSk6MiooXCJldmVuXCI9PT1lWzNdfHxcIm9kZFwiPT09ZVszXSkpLGVbNV09KyhlWzddK2VbOF18fFwib2RkXCI9PT1lWzNdKSk6ZVszXSYmc2UuZXJyb3IoZVswXSksZX0sUFNFVURPOmZ1bmN0aW9uKGUpe3ZhciB0LG49IWVbNl0mJmVbMl07cmV0dXJuIEcuQ0hJTEQudGVzdChlWzBdKT9udWxsOihlWzNdP2VbMl09ZVs0XXx8ZVs1XXx8XCJcIjpuJiZYLnRlc3QobikmJih0PWgobiwhMCkpJiYodD1uLmluZGV4T2YoXCIpXCIsbi5sZW5ndGgtdCktbi5sZW5ndGgpJiYoZVswXT1lWzBdLnNsaWNlKDAsdCksZVsyXT1uLnNsaWNlKDAsdCkpLGUuc2xpY2UoMCwzKSl9fSxmaWx0ZXI6e1RBRzpmdW5jdGlvbihlKXt2YXIgdD1lLnJlcGxhY2UodGUsbmUpLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCIqXCI9PT1lP2Z1bmN0aW9uKCl7cmV0dXJuITB9OmZ1bmN0aW9uKGUpe3JldHVybiBlLm5vZGVOYW1lJiZlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT10fX0sQ0xBU1M6ZnVuY3Rpb24oZSl7dmFyIHQ9bVtlK1wiIFwiXTtyZXR1cm4gdHx8KHQ9bmV3IFJlZ0V4cChcIihefFwiK00rXCIpXCIrZStcIihcIitNK1wifCQpXCIpKSYmbShlLGZ1bmN0aW9uKGUpe3JldHVybiB0LnRlc3QoXCJzdHJpbmdcIj09dHlwZW9mIGUuY2xhc3NOYW1lJiZlLmNsYXNzTmFtZXx8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUuZ2V0QXR0cmlidXRlJiZlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKX0pfSxBVFRSOmZ1bmN0aW9uKG4scixpKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9c2UuYXR0cihlLG4pO3JldHVybiBudWxsPT10P1wiIT1cIj09PXI6IXJ8fCh0Kz1cIlwiLFwiPVwiPT09cj90PT09aTpcIiE9XCI9PT1yP3QhPT1pOlwiXj1cIj09PXI/aSYmMD09PXQuaW5kZXhPZihpKTpcIio9XCI9PT1yP2kmJi0xPHQuaW5kZXhPZihpKTpcIiQ9XCI9PT1yP2kmJnQuc2xpY2UoLWkubGVuZ3RoKT09PWk6XCJ+PVwiPT09cj8tMTwoXCIgXCIrdC5yZXBsYWNlKEIsXCIgXCIpK1wiIFwiKS5pbmRleE9mKGkpOlwifD1cIj09PXImJih0PT09aXx8dC5zbGljZSgwLGkubGVuZ3RoKzEpPT09aStcIi1cIikpfX0sQ0hJTEQ6ZnVuY3Rpb24oaCxlLHQsZyx2KXt2YXIgeT1cIm50aFwiIT09aC5zbGljZSgwLDMpLG09XCJsYXN0XCIhPT1oLnNsaWNlKC00KSx4PVwib2YtdHlwZVwiPT09ZTtyZXR1cm4gMT09PWcmJjA9PT12P2Z1bmN0aW9uKGUpe3JldHVybiEhZS5wYXJlbnROb2RlfTpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGEscyx1LGw9eSE9PW0/XCJuZXh0U2libGluZ1wiOlwicHJldmlvdXNTaWJsaW5nXCIsYz1lLnBhcmVudE5vZGUsZj14JiZlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkscD0hbiYmIXgsZD0hMTtpZihjKXtpZih5KXt3aGlsZShsKXthPWU7d2hpbGUoYT1hW2xdKWlmKHg/YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09ZjoxPT09YS5ub2RlVHlwZSlyZXR1cm4hMTt1PWw9XCJvbmx5XCI9PT1oJiYhdSYmXCJuZXh0U2libGluZ1wifXJldHVybiEwfWlmKHU9W20/Yy5maXJzdENoaWxkOmMubGFzdENoaWxkXSxtJiZwKXtkPShzPShyPShpPShvPShhPWMpW1NdfHwoYVtTXT17fSkpW2EudW5pcXVlSURdfHwob1thLnVuaXF1ZUlEXT17fSkpW2hdfHxbXSlbMF09PT1rJiZyWzFdKSYmclsyXSxhPXMmJmMuY2hpbGROb2Rlc1tzXTt3aGlsZShhPSsrcyYmYSYmYVtsXXx8KGQ9cz0wKXx8dS5wb3AoKSlpZigxPT09YS5ub2RlVHlwZSYmKytkJiZhPT09ZSl7aVtoXT1bayxzLGRdO2JyZWFrfX1lbHNlIGlmKHAmJihkPXM9KHI9KGk9KG89KGE9ZSlbU118fChhW1NdPXt9KSlbYS51bmlxdWVJRF18fChvW2EudW5pcXVlSURdPXt9KSlbaF18fFtdKVswXT09PWsmJnJbMV0pLCExPT09ZCl3aGlsZShhPSsrcyYmYSYmYVtsXXx8KGQ9cz0wKXx8dS5wb3AoKSlpZigoeD9hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1mOjE9PT1hLm5vZGVUeXBlKSYmKytkJiYocCYmKChpPShvPWFbU118fChhW1NdPXt9KSlbYS51bmlxdWVJRF18fChvW2EudW5pcXVlSURdPXt9KSlbaF09W2ssZF0pLGE9PT1lKSlicmVhaztyZXR1cm4oZC09dik9PT1nfHxkJWc9PTAmJjA8PWQvZ319fSxQU0VVRE86ZnVuY3Rpb24oZSxvKXt2YXIgdCxhPWIucHNldWRvc1tlXXx8Yi5zZXRGaWx0ZXJzW2UudG9Mb3dlckNhc2UoKV18fHNlLmVycm9yKFwidW5zdXBwb3J0ZWQgcHNldWRvOiBcIitlKTtyZXR1cm4gYVtTXT9hKG8pOjE8YS5sZW5ndGg/KHQ9W2UsZSxcIlwiLG9dLGIuc2V0RmlsdGVycy5oYXNPd25Qcm9wZXJ0eShlLnRvTG93ZXJDYXNlKCkpP2xlKGZ1bmN0aW9uKGUsdCl7dmFyIG4scj1hKGUsbyksaT1yLmxlbmd0aDt3aGlsZShpLS0pZVtuPVAoZSxyW2ldKV09ISh0W25dPXJbaV0pfSk6ZnVuY3Rpb24oZSl7cmV0dXJuIGEoZSwwLHQpfSk6YX19LHBzZXVkb3M6e25vdDpsZShmdW5jdGlvbihlKXt2YXIgcj1bXSxpPVtdLHM9ZihlLnJlcGxhY2UoJCxcIiQxXCIpKTtyZXR1cm4gc1tTXT9sZShmdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvPXMoZSxudWxsLHIsW10pLGE9ZS5sZW5ndGg7d2hpbGUoYS0tKShpPW9bYV0pJiYoZVthXT0hKHRbYV09aSkpfSk6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiByWzBdPWUscyhyLG51bGwsbixpKSxyWzBdPW51bGwsIWkucG9wKCl9fSksaGFzOmxlKGZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gMDxzZSh0LGUpLmxlbmd0aH19KSxjb250YWluczpsZShmdW5jdGlvbih0KXtyZXR1cm4gdD10LnJlcGxhY2UodGUsbmUpLGZ1bmN0aW9uKGUpe3JldHVybi0xPChlLnRleHRDb250ZW50fHxvKGUpKS5pbmRleE9mKHQpfX0pLGxhbmc6bGUoZnVuY3Rpb24obil7cmV0dXJuIFYudGVzdChufHxcIlwiKXx8c2UuZXJyb3IoXCJ1bnN1cHBvcnRlZCBsYW5nOiBcIituKSxuPW4ucmVwbGFjZSh0ZSxuZSkudG9Mb3dlckNhc2UoKSxmdW5jdGlvbihlKXt2YXIgdDtkb3tpZih0PUU/ZS5sYW5nOmUuZ2V0QXR0cmlidXRlKFwieG1sOmxhbmdcIil8fGUuZ2V0QXR0cmlidXRlKFwibGFuZ1wiKSlyZXR1cm4odD10LnRvTG93ZXJDYXNlKCkpPT09bnx8MD09PXQuaW5kZXhPZihuK1wiLVwiKX13aGlsZSgoZT1lLnBhcmVudE5vZGUpJiYxPT09ZS5ub2RlVHlwZSk7cmV0dXJuITF9fSksdGFyZ2V0OmZ1bmN0aW9uKGUpe3ZhciB0PW4ubG9jYXRpb24mJm4ubG9jYXRpb24uaGFzaDtyZXR1cm4gdCYmdC5zbGljZSgxKT09PWUuaWR9LHJvb3Q6ZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1hfSxmb2N1czpmdW5jdGlvbihlKXtyZXR1cm4gZT09PUMuYWN0aXZlRWxlbWVudCYmKCFDLmhhc0ZvY3VzfHxDLmhhc0ZvY3VzKCkpJiYhIShlLnR5cGV8fGUuaHJlZnx8fmUudGFiSW5kZXgpfSxlbmFibGVkOmdlKCExKSxkaXNhYmxlZDpnZSghMCksY2hlY2tlZDpmdW5jdGlvbihlKXt2YXIgdD1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09dCYmISFlLmNoZWNrZWR8fFwib3B0aW9uXCI9PT10JiYhIWUuc2VsZWN0ZWR9LHNlbGVjdGVkOmZ1bmN0aW9uKGUpe3JldHVybiBlLnBhcmVudE5vZGUmJmUucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LCEwPT09ZS5zZWxlY3RlZH0sZW1wdHk6ZnVuY3Rpb24oZSl7Zm9yKGU9ZS5maXJzdENoaWxkO2U7ZT1lLm5leHRTaWJsaW5nKWlmKGUubm9kZVR5cGU8NilyZXR1cm4hMTtyZXR1cm4hMH0scGFyZW50OmZ1bmN0aW9uKGUpe3JldHVybiFiLnBzZXVkb3MuZW1wdHkoZSl9LGhlYWRlcjpmdW5jdGlvbihlKXtyZXR1cm4gSi50ZXN0KGUubm9kZU5hbWUpfSxpbnB1dDpmdW5jdGlvbihlKXtyZXR1cm4gUS50ZXN0KGUubm9kZU5hbWUpfSxidXR0b246ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PXQmJlwiYnV0dG9uXCI9PT1lLnR5cGV8fFwiYnV0dG9uXCI9PT10fSx0ZXh0OmZ1bmN0aW9uKGUpe3ZhciB0O3JldHVyblwiaW5wdXRcIj09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSYmXCJ0ZXh0XCI9PT1lLnR5cGUmJihudWxsPT0odD1lLmdldEF0dHJpYnV0ZShcInR5cGVcIikpfHxcInRleHRcIj09PXQudG9Mb3dlckNhc2UoKSl9LGZpcnN0OnZlKGZ1bmN0aW9uKCl7cmV0dXJuWzBdfSksbGFzdDp2ZShmdW5jdGlvbihlLHQpe3JldHVyblt0LTFdfSksZXE6dmUoZnVuY3Rpb24oZSx0LG4pe3JldHVybltuPDA/bit0Om5dfSksZXZlbjp2ZShmdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0wO248dDtuKz0yKWUucHVzaChuKTtyZXR1cm4gZX0pLG9kZDp2ZShmdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0xO248dDtuKz0yKWUucHVzaChuKTtyZXR1cm4gZX0pLGx0OnZlKGZ1bmN0aW9uKGUsdCxuKXtmb3IodmFyIHI9bjwwP24rdDp0PG4/dDpuOzA8PS0tcjspZS5wdXNoKHIpO3JldHVybiBlfSksZ3Q6dmUoZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgcj1uPDA/bit0Om47KytyPHQ7KWUucHVzaChyKTtyZXR1cm4gZX0pfX0pLnBzZXVkb3MubnRoPWIucHNldWRvcy5lcSx7cmFkaW86ITAsY2hlY2tib3g6ITAsZmlsZTohMCxwYXNzd29yZDohMCxpbWFnZTohMH0pYi5wc2V1ZG9zW2VdPWRlKGUpO2ZvcihlIGlue3N1Ym1pdDohMCxyZXNldDohMH0pYi5wc2V1ZG9zW2VdPWhlKGUpO2Z1bmN0aW9uIG1lKCl7fWZ1bmN0aW9uIHhlKGUpe2Zvcih2YXIgdD0wLG49ZS5sZW5ndGgscj1cIlwiO3Q8bjt0Kyspcis9ZVt0XS52YWx1ZTtyZXR1cm4gcn1mdW5jdGlvbiBiZShzLGUsdCl7dmFyIHU9ZS5kaXIsbD1lLm5leHQsYz1sfHx1LGY9dCYmXCJwYXJlbnROb2RlXCI9PT1jLHA9cisrO3JldHVybiBlLmZpcnN0P2Z1bmN0aW9uKGUsdCxuKXt3aGlsZShlPWVbdV0paWYoMT09PWUubm9kZVR5cGV8fGYpcmV0dXJuIHMoZSx0LG4pO3JldHVybiExfTpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGE9W2sscF07aWYobil7d2hpbGUoZT1lW3VdKWlmKCgxPT09ZS5ub2RlVHlwZXx8ZikmJnMoZSx0LG4pKXJldHVybiEwfWVsc2Ugd2hpbGUoZT1lW3VdKWlmKDE9PT1lLm5vZGVUeXBlfHxmKWlmKGk9KG89ZVtTXXx8KGVbU109e30pKVtlLnVuaXF1ZUlEXXx8KG9bZS51bmlxdWVJRF09e30pLGwmJmw9PT1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpZT1lW3VdfHxlO2Vsc2V7aWYoKHI9aVtjXSkmJnJbMF09PT1rJiZyWzFdPT09cClyZXR1cm4gYVsyXT1yWzJdO2lmKChpW2NdPWEpWzJdPXMoZSx0LG4pKXJldHVybiEwfXJldHVybiExfX1mdW5jdGlvbiB3ZShpKXtyZXR1cm4gMTxpLmxlbmd0aD9mdW5jdGlvbihlLHQsbil7dmFyIHI9aS5sZW5ndGg7d2hpbGUoci0tKWlmKCFpW3JdKGUsdCxuKSlyZXR1cm4hMTtyZXR1cm4hMH06aVswXX1mdW5jdGlvbiBUZShlLHQsbixyLGkpe2Zvcih2YXIgbyxhPVtdLHM9MCx1PWUubGVuZ3RoLGw9bnVsbCE9dDtzPHU7cysrKShvPWVbc10pJiYobiYmIW4obyxyLGkpfHwoYS5wdXNoKG8pLGwmJnQucHVzaChzKSkpO3JldHVybiBhfWZ1bmN0aW9uIENlKGQsaCxnLHYseSxlKXtyZXR1cm4gdiYmIXZbU10mJih2PUNlKHYpKSx5JiYheVtTXSYmKHk9Q2UoeSxlKSksbGUoZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbyxhLHM9W10sdT1bXSxsPXQubGVuZ3RoLGM9ZXx8ZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgcj0wLGk9dC5sZW5ndGg7cjxpO3IrKylzZShlLHRbcl0sbik7cmV0dXJuIG59KGh8fFwiKlwiLG4ubm9kZVR5cGU/W25dOm4sW10pLGY9IWR8fCFlJiZoP2M6VGUoYyxzLGQsbixyKSxwPWc/eXx8KGU/ZDpsfHx2KT9bXTp0OmY7aWYoZyYmZyhmLHAsbixyKSx2KXtpPVRlKHAsdSksdihpLFtdLG4sciksbz1pLmxlbmd0aDt3aGlsZShvLS0pKGE9aVtvXSkmJihwW3Vbb11dPSEoZlt1W29dXT1hKSl9aWYoZSl7aWYoeXx8ZCl7aWYoeSl7aT1bXSxvPXAubGVuZ3RoO3doaWxlKG8tLSkoYT1wW29dKSYmaS5wdXNoKGZbb109YSk7eShudWxsLHA9W10saSxyKX1vPXAubGVuZ3RoO3doaWxlKG8tLSkoYT1wW29dKSYmLTE8KGk9eT9QKGUsYSk6c1tvXSkmJihlW2ldPSEodFtpXT1hKSl9fWVsc2UgcD1UZShwPT09dD9wLnNwbGljZShsLHAubGVuZ3RoKTpwKSx5P3kobnVsbCx0LHAscik6SC5hcHBseSh0LHApfSl9ZnVuY3Rpb24gRWUoZSl7Zm9yKHZhciBpLHQsbixyPWUubGVuZ3RoLG89Yi5yZWxhdGl2ZVtlWzBdLnR5cGVdLGE9b3x8Yi5yZWxhdGl2ZVtcIiBcIl0scz1vPzE6MCx1PWJlKGZ1bmN0aW9uKGUpe3JldHVybiBlPT09aX0sYSwhMCksbD1iZShmdW5jdGlvbihlKXtyZXR1cm4tMTxQKGksZSl9LGEsITApLGM9W2Z1bmN0aW9uKGUsdCxuKXt2YXIgcj0hbyYmKG58fHQhPT13KXx8KChpPXQpLm5vZGVUeXBlP3UoZSx0LG4pOmwoZSx0LG4pKTtyZXR1cm4gaT1udWxsLHJ9XTtzPHI7cysrKWlmKHQ9Yi5yZWxhdGl2ZVtlW3NdLnR5cGVdKWM9W2JlKHdlKGMpLHQpXTtlbHNle2lmKCh0PWIuZmlsdGVyW2Vbc10udHlwZV0uYXBwbHkobnVsbCxlW3NdLm1hdGNoZXMpKVtTXSl7Zm9yKG49KytzO248cjtuKyspaWYoYi5yZWxhdGl2ZVtlW25dLnR5cGVdKWJyZWFrO3JldHVybiBDZSgxPHMmJndlKGMpLDE8cyYmeGUoZS5zbGljZSgwLHMtMSkuY29uY2F0KHt2YWx1ZTpcIiBcIj09PWVbcy0yXS50eXBlP1wiKlwiOlwiXCJ9KSkucmVwbGFjZSgkLFwiJDFcIiksdCxzPG4mJkVlKGUuc2xpY2UocyxuKSksbjxyJiZFZShlPWUuc2xpY2UobikpLG48ciYmeGUoZSkpfWMucHVzaCh0KX1yZXR1cm4gd2UoYyl9cmV0dXJuIG1lLnByb3RvdHlwZT1iLmZpbHRlcnM9Yi5wc2V1ZG9zLGIuc2V0RmlsdGVycz1uZXcgbWUsaD1zZS50b2tlbml6ZT1mdW5jdGlvbihlLHQpe3ZhciBuLHIsaSxvLGEscyx1LGw9eFtlK1wiIFwiXTtpZihsKXJldHVybiB0PzA6bC5zbGljZSgwKTthPWUscz1bXSx1PWIucHJlRmlsdGVyO3doaWxlKGEpe2ZvcihvIGluIG4mJiEocj1fLmV4ZWMoYSkpfHwociYmKGE9YS5zbGljZShyWzBdLmxlbmd0aCl8fGEpLHMucHVzaChpPVtdKSksbj0hMSwocj16LmV4ZWMoYSkpJiYobj1yLnNoaWZ0KCksaS5wdXNoKHt2YWx1ZTpuLHR5cGU6clswXS5yZXBsYWNlKCQsXCIgXCIpfSksYT1hLnNsaWNlKG4ubGVuZ3RoKSksYi5maWx0ZXIpIShyPUdbb10uZXhlYyhhKSl8fHVbb10mJiEocj11W29dKHIpKXx8KG49ci5zaGlmdCgpLGkucHVzaCh7dmFsdWU6bix0eXBlOm8sbWF0Y2hlczpyfSksYT1hLnNsaWNlKG4ubGVuZ3RoKSk7aWYoIW4pYnJlYWt9cmV0dXJuIHQ/YS5sZW5ndGg6YT9zZS5lcnJvcihlKTp4KGUscykuc2xpY2UoMCl9LGY9c2UuY29tcGlsZT1mdW5jdGlvbihlLHQpe3ZhciBuLHYseSxtLHgscixpPVtdLG89W10sYT1BW2UrXCIgXCJdO2lmKCFhKXt0fHwodD1oKGUpKSxuPXQubGVuZ3RoO3doaWxlKG4tLSkoYT1FZSh0W25dKSlbU10/aS5wdXNoKGEpOm8ucHVzaChhKTsoYT1BKGUsKHY9byxtPTA8KHk9aSkubGVuZ3RoLHg9MDx2Lmxlbmd0aCxyPWZ1bmN0aW9uKGUsdCxuLHIsaSl7dmFyIG8sYSxzLHU9MCxsPVwiMFwiLGM9ZSYmW10sZj1bXSxwPXcsZD1lfHx4JiZiLmZpbmQuVEFHKFwiKlwiLGkpLGg9ays9bnVsbD09cD8xOk1hdGgucmFuZG9tKCl8fC4xLGc9ZC5sZW5ndGg7Zm9yKGkmJih3PXQ9PUN8fHR8fGkpO2whPT1nJiZudWxsIT0obz1kW2xdKTtsKyspe2lmKHgmJm8pe2E9MCx0fHxvLm93bmVyRG9jdW1lbnQ9PUN8fChUKG8pLG49IUUpO3doaWxlKHM9dlthKytdKWlmKHMobyx0fHxDLG4pKXtyLnB1c2gobyk7YnJlYWt9aSYmKGs9aCl9bSYmKChvPSFzJiZvKSYmdS0tLGUmJmMucHVzaChvKSl9aWYodSs9bCxtJiZsIT09dSl7YT0wO3doaWxlKHM9eVthKytdKXMoYyxmLHQsbik7aWYoZSl7aWYoMDx1KXdoaWxlKGwtLSljW2xdfHxmW2xdfHwoZltsXT1xLmNhbGwocikpO2Y9VGUoZil9SC5hcHBseShyLGYpLGkmJiFlJiYwPGYubGVuZ3RoJiYxPHUreS5sZW5ndGgmJnNlLnVuaXF1ZVNvcnQocil9cmV0dXJuIGkmJihrPWgsdz1wKSxjfSxtP2xlKHIpOnIpKSkuc2VsZWN0b3I9ZX1yZXR1cm4gYX0sZz1zZS5zZWxlY3Q9ZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbyxhLHMsdSxsPVwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUsYz0hciYmaChlPWwuc2VsZWN0b3J8fGUpO2lmKG49bnx8W10sMT09PWMubGVuZ3RoKXtpZigyPChvPWNbMF09Y1swXS5zbGljZSgwKSkubGVuZ3RoJiZcIklEXCI9PT0oYT1vWzBdKS50eXBlJiY5PT09dC5ub2RlVHlwZSYmRSYmYi5yZWxhdGl2ZVtvWzFdLnR5cGVdKXtpZighKHQ9KGIuZmluZC5JRChhLm1hdGNoZXNbMF0ucmVwbGFjZSh0ZSxuZSksdCl8fFtdKVswXSkpcmV0dXJuIG47bCYmKHQ9dC5wYXJlbnROb2RlKSxlPWUuc2xpY2Uoby5zaGlmdCgpLnZhbHVlLmxlbmd0aCl9aT1HLm5lZWRzQ29udGV4dC50ZXN0KGUpPzA6by5sZW5ndGg7d2hpbGUoaS0tKXtpZihhPW9baV0sYi5yZWxhdGl2ZVtzPWEudHlwZV0pYnJlYWs7aWYoKHU9Yi5maW5kW3NdKSYmKHI9dShhLm1hdGNoZXNbMF0ucmVwbGFjZSh0ZSxuZSksZWUudGVzdChvWzBdLnR5cGUpJiZ5ZSh0LnBhcmVudE5vZGUpfHx0KSkpe2lmKG8uc3BsaWNlKGksMSksIShlPXIubGVuZ3RoJiZ4ZShvKSkpcmV0dXJuIEguYXBwbHkobixyKSxuO2JyZWFrfX19cmV0dXJuKGx8fGYoZSxjKSkocix0LCFFLG4sIXR8fGVlLnRlc3QoZSkmJnllKHQucGFyZW50Tm9kZSl8fHQpLG59LGQuc29ydFN0YWJsZT1TLnNwbGl0KFwiXCIpLnNvcnQoRCkuam9pbihcIlwiKT09PVMsZC5kZXRlY3REdXBsaWNhdGVzPSEhbCxUKCksZC5zb3J0RGV0YWNoZWQ9Y2UoZnVuY3Rpb24oZSl7cmV0dXJuIDEmZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihDLmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKSl9KSxjZShmdW5jdGlvbihlKXtyZXR1cm4gZS5pbm5lckhUTUw9XCI8YSBocmVmPScjJz48L2E+XCIsXCIjXCI9PT1lLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKX0pfHxmZShcInR5cGV8aHJlZnxoZWlnaHR8d2lkdGhcIixmdW5jdGlvbihlLHQsbil7aWYoIW4pcmV0dXJuIGUuZ2V0QXR0cmlidXRlKHQsXCJ0eXBlXCI9PT10LnRvTG93ZXJDYXNlKCk/MToyKX0pLGQuYXR0cmlidXRlcyYmY2UoZnVuY3Rpb24oZSl7cmV0dXJuIGUuaW5uZXJIVE1MPVwiPGlucHV0Lz5cIixlLmZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIlwiKSxcIlwiPT09ZS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpfSl8fGZlKFwidmFsdWVcIixmdW5jdGlvbihlLHQsbil7aWYoIW4mJlwiaW5wdXRcIj09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSlyZXR1cm4gZS5kZWZhdWx0VmFsdWV9KSxjZShmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZS5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKX0pfHxmZShSLGZ1bmN0aW9uKGUsdCxuKXt2YXIgcjtpZighbilyZXR1cm4hMD09PWVbdF0/dC50b0xvd2VyQ2FzZSgpOihyPWUuZ2V0QXR0cmlidXRlTm9kZSh0KSkmJnIuc3BlY2lmaWVkP3IudmFsdWU6bnVsbH0pLHNlfShDKTtTLmZpbmQ9ZCxTLmV4cHI9ZC5zZWxlY3RvcnMsUy5leHByW1wiOlwiXT1TLmV4cHIucHNldWRvcyxTLnVuaXF1ZVNvcnQ9Uy51bmlxdWU9ZC51bmlxdWVTb3J0LFMudGV4dD1kLmdldFRleHQsUy5pc1hNTERvYz1kLmlzWE1MLFMuY29udGFpbnM9ZC5jb250YWlucyxTLmVzY2FwZVNlbGVjdG9yPWQuZXNjYXBlO3ZhciBoPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1bXSxpPXZvaWQgMCE9PW47d2hpbGUoKGU9ZVt0XSkmJjkhPT1lLm5vZGVUeXBlKWlmKDE9PT1lLm5vZGVUeXBlKXtpZihpJiZTKGUpLmlzKG4pKWJyZWFrO3IucHVzaChlKX1yZXR1cm4gcn0sVD1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj1bXTtlO2U9ZS5uZXh0U2libGluZykxPT09ZS5ub2RlVHlwZSYmZSE9PXQmJm4ucHVzaChlKTtyZXR1cm4gbn0saz1TLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0O2Z1bmN0aW9uIEEoZSx0KXtyZXR1cm4gZS5ub2RlTmFtZSYmZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09dC50b0xvd2VyQ2FzZSgpfXZhciBOPS9ePChbYS16XVteXFwvXFwwPjpcXHgyMFxcdFxcclxcblxcZl0qKVtcXHgyMFxcdFxcclxcblxcZl0qXFwvPz4oPzo8XFwvXFwxPnwpJC9pO2Z1bmN0aW9uIEQoZSxuLHIpe3JldHVybiBtKG4pP1MuZ3JlcChlLGZ1bmN0aW9uKGUsdCl7cmV0dXJuISFuLmNhbGwoZSx0LGUpIT09cn0pOm4ubm9kZVR5cGU/Uy5ncmVwKGUsZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1uIT09cn0pOlwic3RyaW5nXCIhPXR5cGVvZiBuP1MuZ3JlcChlLGZ1bmN0aW9uKGUpe3JldHVybi0xPGkuY2FsbChuLGUpIT09cn0pOlMuZmlsdGVyKG4sZSxyKX1TLmZpbHRlcj1mdW5jdGlvbihlLHQsbil7dmFyIHI9dFswXTtyZXR1cm4gbiYmKGU9XCI6bm90KFwiK2UrXCIpXCIpLDE9PT10Lmxlbmd0aCYmMT09PXIubm9kZVR5cGU/Uy5maW5kLm1hdGNoZXNTZWxlY3RvcihyLGUpP1tyXTpbXTpTLmZpbmQubWF0Y2hlcyhlLFMuZ3JlcCh0LGZ1bmN0aW9uKGUpe3JldHVybiAxPT09ZS5ub2RlVHlwZX0pKX0sUy5mbi5leHRlbmQoe2ZpbmQ6ZnVuY3Rpb24oZSl7dmFyIHQsbixyPXRoaXMubGVuZ3RoLGk9dGhpcztpZihcInN0cmluZ1wiIT10eXBlb2YgZSlyZXR1cm4gdGhpcy5wdXNoU3RhY2soUyhlKS5maWx0ZXIoZnVuY3Rpb24oKXtmb3IodD0wO3Q8cjt0KyspaWYoUy5jb250YWlucyhpW3RdLHRoaXMpKXJldHVybiEwfSkpO2ZvcihuPXRoaXMucHVzaFN0YWNrKFtdKSx0PTA7dDxyO3QrKylTLmZpbmQoZSxpW3RdLG4pO3JldHVybiAxPHI/Uy51bmlxdWVTb3J0KG4pOm59LGZpbHRlcjpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soRCh0aGlzLGV8fFtdLCExKSl9LG5vdDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soRCh0aGlzLGV8fFtdLCEwKSl9LGlzOmZ1bmN0aW9uKGUpe3JldHVybiEhRCh0aGlzLFwic3RyaW5nXCI9PXR5cGVvZiBlJiZrLnRlc3QoZSk/UyhlKTplfHxbXSwhMSkubGVuZ3RofX0pO3ZhciBqLHE9L14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qfCMoW1xcdy1dKykpJC87KFMuZm4uaW5pdD1mdW5jdGlvbihlLHQsbil7dmFyIHIsaTtpZighZSlyZXR1cm4gdGhpcztpZihuPW58fGosXCJzdHJpbmdcIj09dHlwZW9mIGUpe2lmKCEocj1cIjxcIj09PWVbMF0mJlwiPlwiPT09ZVtlLmxlbmd0aC0xXSYmMzw9ZS5sZW5ndGg/W251bGwsZSxudWxsXTpxLmV4ZWMoZSkpfHwhclsxXSYmdClyZXR1cm4hdHx8dC5qcXVlcnk/KHR8fG4pLmZpbmQoZSk6dGhpcy5jb25zdHJ1Y3Rvcih0KS5maW5kKGUpO2lmKHJbMV0pe2lmKHQ9dCBpbnN0YW5jZW9mIFM/dFswXTp0LFMubWVyZ2UodGhpcyxTLnBhcnNlSFRNTChyWzFdLHQmJnQubm9kZVR5cGU/dC5vd25lckRvY3VtZW50fHx0OkUsITApKSxOLnRlc3QoclsxXSkmJlMuaXNQbGFpbk9iamVjdCh0KSlmb3IociBpbiB0KW0odGhpc1tyXSk/dGhpc1tyXSh0W3JdKTp0aGlzLmF0dHIocix0W3JdKTtyZXR1cm4gdGhpc31yZXR1cm4oaT1FLmdldEVsZW1lbnRCeUlkKHJbMl0pKSYmKHRoaXNbMF09aSx0aGlzLmxlbmd0aD0xKSx0aGlzfXJldHVybiBlLm5vZGVUeXBlPyh0aGlzWzBdPWUsdGhpcy5sZW5ndGg9MSx0aGlzKTptKGUpP3ZvaWQgMCE9PW4ucmVhZHk/bi5yZWFkeShlKTplKFMpOlMubWFrZUFycmF5KGUsdGhpcyl9KS5wcm90b3R5cGU9Uy5mbixqPVMoRSk7dmFyIEw9L14oPzpwYXJlbnRzfHByZXYoPzpVbnRpbHxBbGwpKS8sSD17Y2hpbGRyZW46ITAsY29udGVudHM6ITAsbmV4dDohMCxwcmV2OiEwfTtmdW5jdGlvbiBPKGUsdCl7d2hpbGUoKGU9ZVt0XSkmJjEhPT1lLm5vZGVUeXBlKTtyZXR1cm4gZX1TLmZuLmV4dGVuZCh7aGFzOmZ1bmN0aW9uKGUpe3ZhciB0PVMoZSx0aGlzKSxuPXQubGVuZ3RoO3JldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbigpe2Zvcih2YXIgZT0wO2U8bjtlKyspaWYoUy5jb250YWlucyh0aGlzLHRbZV0pKXJldHVybiEwfSl9LGNsb3Nlc3Q6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPTAsaT10aGlzLmxlbmd0aCxvPVtdLGE9XCJzdHJpbmdcIiE9dHlwZW9mIGUmJlMoZSk7aWYoIWsudGVzdChlKSlmb3IoO3I8aTtyKyspZm9yKG49dGhpc1tyXTtuJiZuIT09dDtuPW4ucGFyZW50Tm9kZSlpZihuLm5vZGVUeXBlPDExJiYoYT8tMTxhLmluZGV4KG4pOjE9PT1uLm5vZGVUeXBlJiZTLmZpbmQubWF0Y2hlc1NlbGVjdG9yKG4sZSkpKXtvLnB1c2gobik7YnJlYWt9cmV0dXJuIHRoaXMucHVzaFN0YWNrKDE8by5sZW5ndGg/Uy51bmlxdWVTb3J0KG8pOm8pfSxpbmRleDpmdW5jdGlvbihlKXtyZXR1cm4gZT9cInN0cmluZ1wiPT10eXBlb2YgZT9pLmNhbGwoUyhlKSx0aGlzWzBdKTppLmNhbGwodGhpcyxlLmpxdWVyeT9lWzBdOmUpOnRoaXNbMF0mJnRoaXNbMF0ucGFyZW50Tm9kZT90aGlzLmZpcnN0KCkucHJldkFsbCgpLmxlbmd0aDotMX0sYWRkOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKFMudW5pcXVlU29ydChTLm1lcmdlKHRoaXMuZ2V0KCksUyhlLHQpKSkpfSxhZGRCYWNrOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmFkZChudWxsPT1lP3RoaXMucHJldk9iamVjdDp0aGlzLnByZXZPYmplY3QuZmlsdGVyKGUpKX19KSxTLmVhY2goe3BhcmVudDpmdW5jdGlvbihlKXt2YXIgdD1lLnBhcmVudE5vZGU7cmV0dXJuIHQmJjExIT09dC5ub2RlVHlwZT90Om51bGx9LHBhcmVudHM6ZnVuY3Rpb24oZSl7cmV0dXJuIGgoZSxcInBhcmVudE5vZGVcIil9LHBhcmVudHNVbnRpbDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIGgoZSxcInBhcmVudE5vZGVcIixuKX0sbmV4dDpmdW5jdGlvbihlKXtyZXR1cm4gTyhlLFwibmV4dFNpYmxpbmdcIil9LHByZXY6ZnVuY3Rpb24oZSl7cmV0dXJuIE8oZSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dEFsbDpmdW5jdGlvbihlKXtyZXR1cm4gaChlLFwibmV4dFNpYmxpbmdcIil9LHByZXZBbGw6ZnVuY3Rpb24oZSl7cmV0dXJuIGgoZSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dFVudGlsOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gaChlLFwibmV4dFNpYmxpbmdcIixuKX0scHJldlVudGlsOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gaChlLFwicHJldmlvdXNTaWJsaW5nXCIsbil9LHNpYmxpbmdzOmZ1bmN0aW9uKGUpe3JldHVybiBUKChlLnBhcmVudE5vZGV8fHt9KS5maXJzdENoaWxkLGUpfSxjaGlsZHJlbjpmdW5jdGlvbihlKXtyZXR1cm4gVChlLmZpcnN0Q2hpbGQpfSxjb250ZW50czpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbCE9ZS5jb250ZW50RG9jdW1lbnQmJnIoZS5jb250ZW50RG9jdW1lbnQpP2UuY29udGVudERvY3VtZW50OihBKGUsXCJ0ZW1wbGF0ZVwiKSYmKGU9ZS5jb250ZW50fHxlKSxTLm1lcmdlKFtdLGUuY2hpbGROb2RlcykpfX0sZnVuY3Rpb24ocixpKXtTLmZuW3JdPWZ1bmN0aW9uKGUsdCl7dmFyIG49Uy5tYXAodGhpcyxpLGUpO3JldHVyblwiVW50aWxcIiE9PXIuc2xpY2UoLTUpJiYodD1lKSx0JiZcInN0cmluZ1wiPT10eXBlb2YgdCYmKG49Uy5maWx0ZXIodCxuKSksMTx0aGlzLmxlbmd0aCYmKEhbcl18fFMudW5pcXVlU29ydChuKSxMLnRlc3QocikmJm4ucmV2ZXJzZSgpKSx0aGlzLnB1c2hTdGFjayhuKX19KTt2YXIgUD0vW15cXHgyMFxcdFxcclxcblxcZl0rL2c7ZnVuY3Rpb24gUihlKXtyZXR1cm4gZX1mdW5jdGlvbiBNKGUpe3Rocm93IGV9ZnVuY3Rpb24gSShlLHQsbixyKXt2YXIgaTt0cnl7ZSYmbShpPWUucHJvbWlzZSk/aS5jYWxsKGUpLmRvbmUodCkuZmFpbChuKTplJiZtKGk9ZS50aGVuKT9pLmNhbGwoZSx0LG4pOnQuYXBwbHkodm9pZCAwLFtlXS5zbGljZShyKSl9Y2F0Y2goZSl7bi5hcHBseSh2b2lkIDAsW2VdKX19Uy5DYWxsYmFja3M9ZnVuY3Rpb24ocil7dmFyIGUsbjtyPVwic3RyaW5nXCI9PXR5cGVvZiByPyhlPXIsbj17fSxTLmVhY2goZS5tYXRjaChQKXx8W10sZnVuY3Rpb24oZSx0KXtuW3RdPSEwfSksbik6Uy5leHRlbmQoe30scik7dmFyIGksdCxvLGEscz1bXSx1PVtdLGw9LTEsYz1mdW5jdGlvbigpe2ZvcihhPWF8fHIub25jZSxvPWk9ITA7dS5sZW5ndGg7bD0tMSl7dD11LnNoaWZ0KCk7d2hpbGUoKytsPHMubGVuZ3RoKSExPT09c1tsXS5hcHBseSh0WzBdLHRbMV0pJiZyLnN0b3BPbkZhbHNlJiYobD1zLmxlbmd0aCx0PSExKX1yLm1lbW9yeXx8KHQ9ITEpLGk9ITEsYSYmKHM9dD9bXTpcIlwiKX0sZj17YWRkOmZ1bmN0aW9uKCl7cmV0dXJuIHMmJih0JiYhaSYmKGw9cy5sZW5ndGgtMSx1LnB1c2godCkpLGZ1bmN0aW9uIG4oZSl7Uy5lYWNoKGUsZnVuY3Rpb24oZSx0KXttKHQpP3IudW5pcXVlJiZmLmhhcyh0KXx8cy5wdXNoKHQpOnQmJnQubGVuZ3RoJiZcInN0cmluZ1wiIT09dyh0KSYmbih0KX0pfShhcmd1bWVudHMpLHQmJiFpJiZjKCkpLHRoaXN9LHJlbW92ZTpmdW5jdGlvbigpe3JldHVybiBTLmVhY2goYXJndW1lbnRzLGZ1bmN0aW9uKGUsdCl7dmFyIG47d2hpbGUoLTE8KG49Uy5pbkFycmF5KHQscyxuKSkpcy5zcGxpY2UobiwxKSxuPD1sJiZsLS19KSx0aGlzfSxoYXM6ZnVuY3Rpb24oZSl7cmV0dXJuIGU/LTE8Uy5pbkFycmF5KGUscyk6MDxzLmxlbmd0aH0sZW1wdHk6ZnVuY3Rpb24oKXtyZXR1cm4gcyYmKHM9W10pLHRoaXN9LGRpc2FibGU6ZnVuY3Rpb24oKXtyZXR1cm4gYT11PVtdLHM9dD1cIlwiLHRoaXN9LGRpc2FibGVkOmZ1bmN0aW9uKCl7cmV0dXJuIXN9LGxvY2s6ZnVuY3Rpb24oKXtyZXR1cm4gYT11PVtdLHR8fGl8fChzPXQ9XCJcIiksdGhpc30sbG9ja2VkOmZ1bmN0aW9uKCl7cmV0dXJuISFhfSxmaXJlV2l0aDpmdW5jdGlvbihlLHQpe3JldHVybiBhfHwodD1bZSwodD10fHxbXSkuc2xpY2U/dC5zbGljZSgpOnRdLHUucHVzaCh0KSxpfHxjKCkpLHRoaXN9LGZpcmU6ZnVuY3Rpb24oKXtyZXR1cm4gZi5maXJlV2l0aCh0aGlzLGFyZ3VtZW50cyksdGhpc30sZmlyZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIW99fTtyZXR1cm4gZn0sUy5leHRlbmQoe0RlZmVycmVkOmZ1bmN0aW9uKGUpe3ZhciBvPVtbXCJub3RpZnlcIixcInByb2dyZXNzXCIsUy5DYWxsYmFja3MoXCJtZW1vcnlcIiksUy5DYWxsYmFja3MoXCJtZW1vcnlcIiksMl0sW1wicmVzb2x2ZVwiLFwiZG9uZVwiLFMuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksUy5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSwwLFwicmVzb2x2ZWRcIl0sW1wicmVqZWN0XCIsXCJmYWlsXCIsUy5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxTLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLDEsXCJyZWplY3RlZFwiXV0saT1cInBlbmRpbmdcIixhPXtzdGF0ZTpmdW5jdGlvbigpe3JldHVybiBpfSxhbHdheXM6ZnVuY3Rpb24oKXtyZXR1cm4gcy5kb25lKGFyZ3VtZW50cykuZmFpbChhcmd1bWVudHMpLHRoaXN9LFwiY2F0Y2hcIjpmdW5jdGlvbihlKXtyZXR1cm4gYS50aGVuKG51bGwsZSl9LHBpcGU6ZnVuY3Rpb24oKXt2YXIgaT1hcmd1bWVudHM7cmV0dXJuIFMuRGVmZXJyZWQoZnVuY3Rpb24ocil7Uy5lYWNoKG8sZnVuY3Rpb24oZSx0KXt2YXIgbj1tKGlbdFs0XV0pJiZpW3RbNF1dO3NbdFsxXV0oZnVuY3Rpb24oKXt2YXIgZT1uJiZuLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtlJiZtKGUucHJvbWlzZSk/ZS5wcm9taXNlKCkucHJvZ3Jlc3Moci5ub3RpZnkpLmRvbmUoci5yZXNvbHZlKS5mYWlsKHIucmVqZWN0KTpyW3RbMF0rXCJXaXRoXCJdKHRoaXMsbj9bZV06YXJndW1lbnRzKX0pfSksaT1udWxsfSkucHJvbWlzZSgpfSx0aGVuOmZ1bmN0aW9uKHQsbixyKXt2YXIgdT0wO2Z1bmN0aW9uIGwoaSxvLGEscyl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIG49dGhpcyxyPWFyZ3VtZW50cyxlPWZ1bmN0aW9uKCl7dmFyIGUsdDtpZighKGk8dSkpe2lmKChlPWEuYXBwbHkobixyKSk9PT1vLnByb21pc2UoKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlbmFibGUgc2VsZi1yZXNvbHV0aW9uXCIpO3Q9ZSYmKFwib2JqZWN0XCI9PXR5cGVvZiBlfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlKSYmZS50aGVuLG0odCk/cz90LmNhbGwoZSxsKHUsbyxSLHMpLGwodSxvLE0scykpOih1KyssdC5jYWxsKGUsbCh1LG8sUixzKSxsKHUsbyxNLHMpLGwodSxvLFIsby5ub3RpZnlXaXRoKSkpOihhIT09UiYmKG49dm9pZCAwLHI9W2VdKSwoc3x8by5yZXNvbHZlV2l0aCkobixyKSl9fSx0PXM/ZTpmdW5jdGlvbigpe3RyeXtlKCl9Y2F0Y2goZSl7Uy5EZWZlcnJlZC5leGNlcHRpb25Ib29rJiZTLkRlZmVycmVkLmV4Y2VwdGlvbkhvb2soZSx0LnN0YWNrVHJhY2UpLHU8PWkrMSYmKGEhPT1NJiYobj12b2lkIDAscj1bZV0pLG8ucmVqZWN0V2l0aChuLHIpKX19O2k/dCgpOihTLkRlZmVycmVkLmdldFN0YWNrSG9vayYmKHQuc3RhY2tUcmFjZT1TLkRlZmVycmVkLmdldFN0YWNrSG9vaygpKSxDLnNldFRpbWVvdXQodCkpfX1yZXR1cm4gUy5EZWZlcnJlZChmdW5jdGlvbihlKXtvWzBdWzNdLmFkZChsKDAsZSxtKHIpP3I6UixlLm5vdGlmeVdpdGgpKSxvWzFdWzNdLmFkZChsKDAsZSxtKHQpP3Q6UikpLG9bMl1bM10uYWRkKGwoMCxlLG0obik/bjpNKSl9KS5wcm9taXNlKCl9LHByb21pc2U6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGwhPWU/Uy5leHRlbmQoZSxhKTphfX0scz17fTtyZXR1cm4gUy5lYWNoKG8sZnVuY3Rpb24oZSx0KXt2YXIgbj10WzJdLHI9dFs1XTthW3RbMV1dPW4uYWRkLHImJm4uYWRkKGZ1bmN0aW9uKCl7aT1yfSxvWzMtZV1bMl0uZGlzYWJsZSxvWzMtZV1bM10uZGlzYWJsZSxvWzBdWzJdLmxvY2ssb1swXVszXS5sb2NrKSxuLmFkZCh0WzNdLmZpcmUpLHNbdFswXV09ZnVuY3Rpb24oKXtyZXR1cm4gc1t0WzBdK1wiV2l0aFwiXSh0aGlzPT09cz92b2lkIDA6dGhpcyxhcmd1bWVudHMpLHRoaXN9LHNbdFswXStcIldpdGhcIl09bi5maXJlV2l0aH0pLGEucHJvbWlzZShzKSxlJiZlLmNhbGwocyxzKSxzfSx3aGVuOmZ1bmN0aW9uKGUpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGgsdD1uLHI9QXJyYXkodCksaT1zLmNhbGwoYXJndW1lbnRzKSxvPVMuRGVmZXJyZWQoKSxhPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXtyW3RdPXRoaXMsaVt0XT0xPGFyZ3VtZW50cy5sZW5ndGg/cy5jYWxsKGFyZ3VtZW50cyk6ZSwtLW58fG8ucmVzb2x2ZVdpdGgocixpKX19O2lmKG48PTEmJihJKGUsby5kb25lKGEodCkpLnJlc29sdmUsby5yZWplY3QsIW4pLFwicGVuZGluZ1wiPT09by5zdGF0ZSgpfHxtKGlbdF0mJmlbdF0udGhlbikpKXJldHVybiBvLnRoZW4oKTt3aGlsZSh0LS0pSShpW3RdLGEodCksby5yZWplY3QpO3JldHVybiBvLnByb21pc2UoKX19KTt2YXIgVz0vXihFdmFsfEludGVybmFsfFJhbmdlfFJlZmVyZW5jZXxTeW50YXh8VHlwZXxVUkkpRXJyb3IkLztTLkRlZmVycmVkLmV4Y2VwdGlvbkhvb2s9ZnVuY3Rpb24oZSx0KXtDLmNvbnNvbGUmJkMuY29uc29sZS53YXJuJiZlJiZXLnRlc3QoZS5uYW1lKSYmQy5jb25zb2xlLndhcm4oXCJqUXVlcnkuRGVmZXJyZWQgZXhjZXB0aW9uOiBcIitlLm1lc3NhZ2UsZS5zdGFjayx0KX0sUy5yZWFkeUV4Y2VwdGlvbj1mdW5jdGlvbihlKXtDLnNldFRpbWVvdXQoZnVuY3Rpb24oKXt0aHJvdyBlfSl9O3ZhciBGPVMuRGVmZXJyZWQoKTtmdW5jdGlvbiBCKCl7RS5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLEIpLEMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIixCKSxTLnJlYWR5KCl9Uy5mbi5yZWFkeT1mdW5jdGlvbihlKXtyZXR1cm4gRi50aGVuKGUpW1wiY2F0Y2hcIl0oZnVuY3Rpb24oZSl7Uy5yZWFkeUV4Y2VwdGlvbihlKX0pLHRoaXN9LFMuZXh0ZW5kKHtpc1JlYWR5OiExLHJlYWR5V2FpdDoxLHJlYWR5OmZ1bmN0aW9uKGUpeyghMD09PWU/LS1TLnJlYWR5V2FpdDpTLmlzUmVhZHkpfHwoUy5pc1JlYWR5PSEwKSE9PWUmJjA8LS1TLnJlYWR5V2FpdHx8Ri5yZXNvbHZlV2l0aChFLFtTXSl9fSksUy5yZWFkeS50aGVuPUYudGhlbixcImNvbXBsZXRlXCI9PT1FLnJlYWR5U3RhdGV8fFwibG9hZGluZ1wiIT09RS5yZWFkeVN0YXRlJiYhRS5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGw/Qy5zZXRUaW1lb3V0KFMucmVhZHkpOihFLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsQiksQy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLEIpKTt2YXIgJD1mdW5jdGlvbihlLHQsbixyLGksbyxhKXt2YXIgcz0wLHU9ZS5sZW5ndGgsbD1udWxsPT1uO2lmKFwib2JqZWN0XCI9PT13KG4pKWZvcihzIGluIGk9ITAsbikkKGUsdCxzLG5bc10sITAsbyxhKTtlbHNlIGlmKHZvaWQgMCE9PXImJihpPSEwLG0ocil8fChhPSEwKSxsJiYoYT8odC5jYWxsKGUsciksdD1udWxsKToobD10LHQ9ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBsLmNhbGwoUyhlKSxuKX0pKSx0KSlmb3IoO3M8dTtzKyspdChlW3NdLG4sYT9yOnIuY2FsbChlW3NdLHMsdChlW3NdLG4pKSk7cmV0dXJuIGk/ZTpsP3QuY2FsbChlKTp1P3QoZVswXSxuKTpvfSxfPS9eLW1zLS8sej0vLShbYS16XSkvZztmdW5jdGlvbiBVKGUsdCl7cmV0dXJuIHQudG9VcHBlckNhc2UoKX1mdW5jdGlvbiBYKGUpe3JldHVybiBlLnJlcGxhY2UoXyxcIm1zLVwiKS5yZXBsYWNlKHosVSl9dmFyIFY9ZnVuY3Rpb24oZSl7cmV0dXJuIDE9PT1lLm5vZGVUeXBlfHw5PT09ZS5ub2RlVHlwZXx8IStlLm5vZGVUeXBlfTtmdW5jdGlvbiBHKCl7dGhpcy5leHBhbmRvPVMuZXhwYW5kbytHLnVpZCsrfUcudWlkPTEsRy5wcm90b3R5cGU9e2NhY2hlOmZ1bmN0aW9uKGUpe3ZhciB0PWVbdGhpcy5leHBhbmRvXTtyZXR1cm4gdHx8KHQ9e30sVihlKSYmKGUubm9kZVR5cGU/ZVt0aGlzLmV4cGFuZG9dPXQ6T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdGhpcy5leHBhbmRvLHt2YWx1ZTp0LGNvbmZpZ3VyYWJsZTohMH0pKSksdH0sc2V0OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpPXRoaXMuY2FjaGUoZSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpaVtYKHQpXT1uO2Vsc2UgZm9yKHIgaW4gdClpW1gocildPXRbcl07cmV0dXJuIGl9LGdldDpmdW5jdGlvbihlLHQpe3JldHVybiB2b2lkIDA9PT10P3RoaXMuY2FjaGUoZSk6ZVt0aGlzLmV4cGFuZG9dJiZlW3RoaXMuZXhwYW5kb11bWCh0KV19LGFjY2VzczpmdW5jdGlvbihlLHQsbil7cmV0dXJuIHZvaWQgMD09PXR8fHQmJlwic3RyaW5nXCI9PXR5cGVvZiB0JiZ2b2lkIDA9PT1uP3RoaXMuZ2V0KGUsdCk6KHRoaXMuc2V0KGUsdCxuKSx2b2lkIDAhPT1uP246dCl9LHJlbW92ZTpmdW5jdGlvbihlLHQpe3ZhciBuLHI9ZVt0aGlzLmV4cGFuZG9dO2lmKHZvaWQgMCE9PXIpe2lmKHZvaWQgMCE9PXQpe249KHQ9QXJyYXkuaXNBcnJheSh0KT90Lm1hcChYKToodD1YKHQpKWluIHI/W3RdOnQubWF0Y2goUCl8fFtdKS5sZW5ndGg7d2hpbGUobi0tKWRlbGV0ZSByW3Rbbl1dfSh2b2lkIDA9PT10fHxTLmlzRW1wdHlPYmplY3QocikpJiYoZS5ub2RlVHlwZT9lW3RoaXMuZXhwYW5kb109dm9pZCAwOmRlbGV0ZSBlW3RoaXMuZXhwYW5kb10pfX0saGFzRGF0YTpmdW5jdGlvbihlKXt2YXIgdD1lW3RoaXMuZXhwYW5kb107cmV0dXJuIHZvaWQgMCE9PXQmJiFTLmlzRW1wdHlPYmplY3QodCl9fTt2YXIgWT1uZXcgRyxRPW5ldyBHLEo9L14oPzpcXHtbXFx3XFxXXSpcXH18XFxbW1xcd1xcV10qXFxdKSQvLEs9L1tBLVpdL2c7ZnVuY3Rpb24gWihlLHQsbil7dmFyIHIsaTtpZih2b2lkIDA9PT1uJiYxPT09ZS5ub2RlVHlwZSlpZihyPVwiZGF0YS1cIit0LnJlcGxhY2UoSyxcIi0kJlwiKS50b0xvd2VyQ2FzZSgpLFwic3RyaW5nXCI9PXR5cGVvZihuPWUuZ2V0QXR0cmlidXRlKHIpKSl7dHJ5e249XCJ0cnVlXCI9PT0oaT1uKXx8XCJmYWxzZVwiIT09aSYmKFwibnVsbFwiPT09aT9udWxsOmk9PT0raStcIlwiPytpOkoudGVzdChpKT9KU09OLnBhcnNlKGkpOmkpfWNhdGNoKGUpe31RLnNldChlLHQsbil9ZWxzZSBuPXZvaWQgMDtyZXR1cm4gbn1TLmV4dGVuZCh7aGFzRGF0YTpmdW5jdGlvbihlKXtyZXR1cm4gUS5oYXNEYXRhKGUpfHxZLmhhc0RhdGEoZSl9LGRhdGE6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBRLmFjY2VzcyhlLHQsbil9LHJlbW92ZURhdGE6ZnVuY3Rpb24oZSx0KXtRLnJlbW92ZShlLHQpfSxfZGF0YTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIFkuYWNjZXNzKGUsdCxuKX0sX3JlbW92ZURhdGE6ZnVuY3Rpb24oZSx0KXtZLnJlbW92ZShlLHQpfX0pLFMuZm4uZXh0ZW5kKHtkYXRhOmZ1bmN0aW9uKG4sZSl7dmFyIHQscixpLG89dGhpc1swXSxhPW8mJm8uYXR0cmlidXRlcztpZih2b2lkIDA9PT1uKXtpZih0aGlzLmxlbmd0aCYmKGk9US5nZXQobyksMT09PW8ubm9kZVR5cGUmJiFZLmdldChvLFwiaGFzRGF0YUF0dHJzXCIpKSl7dD1hLmxlbmd0aDt3aGlsZSh0LS0pYVt0XSYmMD09PShyPWFbdF0ubmFtZSkuaW5kZXhPZihcImRhdGEtXCIpJiYocj1YKHIuc2xpY2UoNSkpLFoobyxyLGlbcl0pKTtZLnNldChvLFwiaGFzRGF0YUF0dHJzXCIsITApfXJldHVybiBpfXJldHVyblwib2JqZWN0XCI9PXR5cGVvZiBuP3RoaXMuZWFjaChmdW5jdGlvbigpe1Euc2V0KHRoaXMsbil9KTokKHRoaXMsZnVuY3Rpb24oZSl7dmFyIHQ7aWYobyYmdm9pZCAwPT09ZSlyZXR1cm4gdm9pZCAwIT09KHQ9US5nZXQobyxuKSk/dDp2b2lkIDAhPT0odD1aKG8sbikpP3Q6dm9pZCAwO3RoaXMuZWFjaChmdW5jdGlvbigpe1Euc2V0KHRoaXMsbixlKX0pfSxudWxsLGUsMTxhcmd1bWVudHMubGVuZ3RoLG51bGwsITApfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtRLnJlbW92ZSh0aGlzLGUpfSl9fSksUy5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcjtpZihlKXJldHVybiB0PSh0fHxcImZ4XCIpK1wicXVldWVcIixyPVkuZ2V0KGUsdCksbiYmKCFyfHxBcnJheS5pc0FycmF5KG4pP3I9WS5hY2Nlc3MoZSx0LFMubWFrZUFycmF5KG4pKTpyLnB1c2gobikpLHJ8fFtdfSxkZXF1ZXVlOmZ1bmN0aW9uKGUsdCl7dD10fHxcImZ4XCI7dmFyIG49Uy5xdWV1ZShlLHQpLHI9bi5sZW5ndGgsaT1uLnNoaWZ0KCksbz1TLl9xdWV1ZUhvb2tzKGUsdCk7XCJpbnByb2dyZXNzXCI9PT1pJiYoaT1uLnNoaWZ0KCksci0tKSxpJiYoXCJmeFwiPT09dCYmbi51bnNoaWZ0KFwiaW5wcm9ncmVzc1wiKSxkZWxldGUgby5zdG9wLGkuY2FsbChlLGZ1bmN0aW9uKCl7Uy5kZXF1ZXVlKGUsdCl9LG8pKSwhciYmbyYmby5lbXB0eS5maXJlKCl9LF9xdWV1ZUhvb2tzOmZ1bmN0aW9uKGUsdCl7dmFyIG49dCtcInF1ZXVlSG9va3NcIjtyZXR1cm4gWS5nZXQoZSxuKXx8WS5hY2Nlc3MoZSxuLHtlbXB0eTpTLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLmFkZChmdW5jdGlvbigpe1kucmVtb3ZlKGUsW3QrXCJxdWV1ZVwiLG5dKX0pfSl9fSksUy5mbi5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKHQsbil7dmFyIGU9MjtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgdCYmKG49dCx0PVwiZnhcIixlLS0pLGFyZ3VtZW50cy5sZW5ndGg8ZT9TLnF1ZXVlKHRoaXNbMF0sdCk6dm9pZCAwPT09bj90aGlzOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlPVMucXVldWUodGhpcyx0LG4pO1MuX3F1ZXVlSG9va3ModGhpcyx0KSxcImZ4XCI9PT10JiZcImlucHJvZ3Jlc3NcIiE9PWVbMF0mJlMuZGVxdWV1ZSh0aGlzLHQpfSl9LGRlcXVldWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1MuZGVxdWV1ZSh0aGlzLGUpfSl9LGNsZWFyUXVldWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucXVldWUoZXx8XCJmeFwiLFtdKX0scHJvbWlzZTpmdW5jdGlvbihlLHQpe3ZhciBuLHI9MSxpPVMuRGVmZXJyZWQoKSxvPXRoaXMsYT10aGlzLmxlbmd0aCxzPWZ1bmN0aW9uKCl7LS1yfHxpLnJlc29sdmVXaXRoKG8sW29dKX07XCJzdHJpbmdcIiE9dHlwZW9mIGUmJih0PWUsZT12b2lkIDApLGU9ZXx8XCJmeFwiO3doaWxlKGEtLSkobj1ZLmdldChvW2FdLGUrXCJxdWV1ZUhvb2tzXCIpKSYmbi5lbXB0eSYmKHIrKyxuLmVtcHR5LmFkZChzKSk7cmV0dXJuIHMoKSxpLnByb21pc2UodCl9fSk7dmFyIGVlPS9bKy1dPyg/OlxcZCpcXC58KVxcZCsoPzpbZUVdWystXT9cXGQrfCkvLnNvdXJjZSx0ZT1uZXcgUmVnRXhwKFwiXig/OihbKy1dKT18KShcIitlZStcIikoW2EteiVdKikkXCIsXCJpXCIpLG5lPVtcIlRvcFwiLFwiUmlnaHRcIixcIkJvdHRvbVwiLFwiTGVmdFwiXSxyZT1FLmRvY3VtZW50RWxlbWVudCxpZT1mdW5jdGlvbihlKXtyZXR1cm4gUy5jb250YWlucyhlLm93bmVyRG9jdW1lbnQsZSl9LG9lPXtjb21wb3NlZDohMH07cmUuZ2V0Um9vdE5vZGUmJihpZT1mdW5jdGlvbihlKXtyZXR1cm4gUy5jb250YWlucyhlLm93bmVyRG9jdW1lbnQsZSl8fGUuZ2V0Um9vdE5vZGUob2UpPT09ZS5vd25lckRvY3VtZW50fSk7dmFyIGFlPWZ1bmN0aW9uKGUsdCl7cmV0dXJuXCJub25lXCI9PT0oZT10fHxlKS5zdHlsZS5kaXNwbGF5fHxcIlwiPT09ZS5zdHlsZS5kaXNwbGF5JiZpZShlKSYmXCJub25lXCI9PT1TLmNzcyhlLFwiZGlzcGxheVwiKX07ZnVuY3Rpb24gc2UoZSx0LG4scil7dmFyIGksbyxhPTIwLHM9cj9mdW5jdGlvbigpe3JldHVybiByLmN1cigpfTpmdW5jdGlvbigpe3JldHVybiBTLmNzcyhlLHQsXCJcIil9LHU9cygpLGw9biYmblszXXx8KFMuY3NzTnVtYmVyW3RdP1wiXCI6XCJweFwiKSxjPWUubm9kZVR5cGUmJihTLmNzc051bWJlclt0XXx8XCJweFwiIT09bCYmK3UpJiZ0ZS5leGVjKFMuY3NzKGUsdCkpO2lmKGMmJmNbM10hPT1sKXt1Lz0yLGw9bHx8Y1szXSxjPSt1fHwxO3doaWxlKGEtLSlTLnN0eWxlKGUsdCxjK2wpLCgxLW8pKigxLShvPXMoKS91fHwuNSkpPD0wJiYoYT0wKSxjLz1vO2MqPTIsUy5zdHlsZShlLHQsYytsKSxuPW58fFtdfXJldHVybiBuJiYoYz0rY3x8K3V8fDAsaT1uWzFdP2MrKG5bMV0rMSkqblsyXTorblsyXSxyJiYoci51bml0PWwsci5zdGFydD1jLHIuZW5kPWkpKSxpfXZhciB1ZT17fTtmdW5jdGlvbiBsZShlLHQpe2Zvcih2YXIgbixyLGksbyxhLHMsdSxsPVtdLGM9MCxmPWUubGVuZ3RoO2M8ZjtjKyspKHI9ZVtjXSkuc3R5bGUmJihuPXIuc3R5bGUuZGlzcGxheSx0PyhcIm5vbmVcIj09PW4mJihsW2NdPVkuZ2V0KHIsXCJkaXNwbGF5XCIpfHxudWxsLGxbY118fChyLnN0eWxlLmRpc3BsYXk9XCJcIikpLFwiXCI9PT1yLnN0eWxlLmRpc3BsYXkmJmFlKHIpJiYobFtjXT0odT1hPW89dm9pZCAwLGE9KGk9cikub3duZXJEb2N1bWVudCxzPWkubm9kZU5hbWUsKHU9dWVbc10pfHwobz1hLmJvZHkuYXBwZW5kQ2hpbGQoYS5jcmVhdGVFbGVtZW50KHMpKSx1PVMuY3NzKG8sXCJkaXNwbGF5XCIpLG8ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvKSxcIm5vbmVcIj09PXUmJih1PVwiYmxvY2tcIiksdWVbc109dSkpKSk6XCJub25lXCIhPT1uJiYobFtjXT1cIm5vbmVcIixZLnNldChyLFwiZGlzcGxheVwiLG4pKSk7Zm9yKGM9MDtjPGY7YysrKW51bGwhPWxbY10mJihlW2NdLnN0eWxlLmRpc3BsYXk9bFtjXSk7cmV0dXJuIGV9Uy5mbi5leHRlbmQoe3Nob3c6ZnVuY3Rpb24oKXtyZXR1cm4gbGUodGhpcywhMCl9LGhpZGU6ZnVuY3Rpb24oKXtyZXR1cm4gbGUodGhpcyl9LHRvZ2dsZTpmdW5jdGlvbihlKXtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGU/ZT90aGlzLnNob3coKTp0aGlzLmhpZGUoKTp0aGlzLmVhY2goZnVuY3Rpb24oKXthZSh0aGlzKT9TKHRoaXMpLnNob3coKTpTKHRoaXMpLmhpZGUoKX0pfX0pO3ZhciBjZSxmZSxwZT0vXig/OmNoZWNrYm94fHJhZGlvKSQvaSxkZT0vPChbYS16XVteXFwvXFwwPlxceDIwXFx0XFxyXFxuXFxmXSopL2ksaGU9L14kfF5tb2R1bGUkfFxcLyg/OmphdmF8ZWNtYSlzY3JpcHQvaTtjZT1FLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKS5hcHBlbmRDaGlsZChFLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLChmZT1FLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSkuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwicmFkaW9cIiksZmUuc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLFwiY2hlY2tlZFwiKSxmZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJ0XCIpLGNlLmFwcGVuZENoaWxkKGZlKSx5LmNoZWNrQ2xvbmU9Y2UuY2xvbmVOb2RlKCEwKS5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5jaGVja2VkLGNlLmlubmVySFRNTD1cIjx0ZXh0YXJlYT54PC90ZXh0YXJlYT5cIix5Lm5vQ2xvbmVDaGVja2VkPSEhY2UuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuZGVmYXVsdFZhbHVlLGNlLmlubmVySFRNTD1cIjxvcHRpb24+PC9vcHRpb24+XCIseS5vcHRpb249ISFjZS5sYXN0Q2hpbGQ7dmFyIGdlPXt0aGVhZDpbMSxcIjx0YWJsZT5cIixcIjwvdGFibGU+XCJdLGNvbDpbMixcIjx0YWJsZT48Y29sZ3JvdXA+XCIsXCI8L2NvbGdyb3VwPjwvdGFibGU+XCJdLHRyOlsyLFwiPHRhYmxlPjx0Ym9keT5cIixcIjwvdGJvZHk+PC90YWJsZT5cIl0sdGQ6WzMsXCI8dGFibGU+PHRib2R5Pjx0cj5cIixcIjwvdHI+PC90Ym9keT48L3RhYmxlPlwiXSxfZGVmYXVsdDpbMCxcIlwiLFwiXCJdfTtmdW5jdGlvbiB2ZShlLHQpe3ZhciBuO3JldHVybiBuPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLmdldEVsZW1lbnRzQnlUYWdOYW1lP2UuZ2V0RWxlbWVudHNCeVRhZ05hbWUodHx8XCIqXCIpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLnF1ZXJ5U2VsZWN0b3JBbGw/ZS5xdWVyeVNlbGVjdG9yQWxsKHR8fFwiKlwiKTpbXSx2b2lkIDA9PT10fHx0JiZBKGUsdCk/Uy5tZXJnZShbZV0sbik6bn1mdW5jdGlvbiB5ZShlLHQpe2Zvcih2YXIgbj0wLHI9ZS5sZW5ndGg7bjxyO24rKylZLnNldChlW25dLFwiZ2xvYmFsRXZhbFwiLCF0fHxZLmdldCh0W25dLFwiZ2xvYmFsRXZhbFwiKSl9Z2UudGJvZHk9Z2UudGZvb3Q9Z2UuY29sZ3JvdXA9Z2UuY2FwdGlvbj1nZS50aGVhZCxnZS50aD1nZS50ZCx5Lm9wdGlvbnx8KGdlLm9wdGdyb3VwPWdlLm9wdGlvbj1bMSxcIjxzZWxlY3QgbXVsdGlwbGU9J211bHRpcGxlJz5cIixcIjwvc2VsZWN0PlwiXSk7dmFyIG1lPS88fCYjP1xcdys7LztmdW5jdGlvbiB4ZShlLHQsbixyLGkpe2Zvcih2YXIgbyxhLHMsdSxsLGMsZj10LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxwPVtdLGQ9MCxoPWUubGVuZ3RoO2Q8aDtkKyspaWYoKG89ZVtkXSl8fDA9PT1vKWlmKFwib2JqZWN0XCI9PT13KG8pKVMubWVyZ2UocCxvLm5vZGVUeXBlP1tvXTpvKTtlbHNlIGlmKG1lLnRlc3Qobykpe2E9YXx8Zi5hcHBlbmRDaGlsZCh0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLHM9KGRlLmV4ZWMobyl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpLHU9Z2Vbc118fGdlLl9kZWZhdWx0LGEuaW5uZXJIVE1MPXVbMV0rUy5odG1sUHJlZmlsdGVyKG8pK3VbMl0sYz11WzBdO3doaWxlKGMtLSlhPWEubGFzdENoaWxkO1MubWVyZ2UocCxhLmNoaWxkTm9kZXMpLChhPWYuZmlyc3RDaGlsZCkudGV4dENvbnRlbnQ9XCJcIn1lbHNlIHAucHVzaCh0LmNyZWF0ZVRleHROb2RlKG8pKTtmLnRleHRDb250ZW50PVwiXCIsZD0wO3doaWxlKG89cFtkKytdKWlmKHImJi0xPFMuaW5BcnJheShvLHIpKWkmJmkucHVzaChvKTtlbHNlIGlmKGw9aWUobyksYT12ZShmLmFwcGVuZENoaWxkKG8pLFwic2NyaXB0XCIpLGwmJnllKGEpLG4pe2M9MDt3aGlsZShvPWFbYysrXSloZS50ZXN0KG8udHlwZXx8XCJcIikmJm4ucHVzaChvKX1yZXR1cm4gZn12YXIgYmU9L15rZXkvLHdlPS9eKD86bW91c2V8cG9pbnRlcnxjb250ZXh0bWVudXxkcmFnfGRyb3ApfGNsaWNrLyxUZT0vXihbXi5dKikoPzpcXC4oLispfCkvO2Z1bmN0aW9uIENlKCl7cmV0dXJuITB9ZnVuY3Rpb24gRWUoKXtyZXR1cm4hMX1mdW5jdGlvbiBTZShlLHQpe3JldHVybiBlPT09ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIEUuYWN0aXZlRWxlbWVudH1jYXRjaChlKXt9fSgpPT0oXCJmb2N1c1wiPT09dCl9ZnVuY3Rpb24ga2UoZSx0LG4scixpLG8pe3ZhciBhLHM7aWYoXCJvYmplY3RcIj09dHlwZW9mIHQpe2ZvcihzIGluXCJzdHJpbmdcIiE9dHlwZW9mIG4mJihyPXJ8fG4sbj12b2lkIDApLHQpa2UoZSxzLG4scix0W3NdLG8pO3JldHVybiBlfWlmKG51bGw9PXImJm51bGw9PWk/KGk9bixyPW49dm9pZCAwKTpudWxsPT1pJiYoXCJzdHJpbmdcIj09dHlwZW9mIG4/KGk9cixyPXZvaWQgMCk6KGk9cixyPW4sbj12b2lkIDApKSwhMT09PWkpaT1FZTtlbHNlIGlmKCFpKXJldHVybiBlO3JldHVybiAxPT09byYmKGE9aSwoaT1mdW5jdGlvbihlKXtyZXR1cm4gUygpLm9mZihlKSxhLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0pLmd1aWQ9YS5ndWlkfHwoYS5ndWlkPVMuZ3VpZCsrKSksZS5lYWNoKGZ1bmN0aW9uKCl7Uy5ldmVudC5hZGQodGhpcyx0LGkscixuKX0pfWZ1bmN0aW9uIEFlKGUsaSxvKXtvPyhZLnNldChlLGksITEpLFMuZXZlbnQuYWRkKGUsaSx7bmFtZXNwYWNlOiExLGhhbmRsZXI6ZnVuY3Rpb24oZSl7dmFyIHQsbixyPVkuZ2V0KHRoaXMsaSk7aWYoMSZlLmlzVHJpZ2dlciYmdGhpc1tpXSl7aWYoci5sZW5ndGgpKFMuZXZlbnQuc3BlY2lhbFtpXXx8e30pLmRlbGVnYXRlVHlwZSYmZS5zdG9wUHJvcGFnYXRpb24oKTtlbHNlIGlmKHI9cy5jYWxsKGFyZ3VtZW50cyksWS5zZXQodGhpcyxpLHIpLHQ9byh0aGlzLGkpLHRoaXNbaV0oKSxyIT09KG49WS5nZXQodGhpcyxpKSl8fHQ/WS5zZXQodGhpcyxpLCExKTpuPXt9LHIhPT1uKXJldHVybiBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLGUucHJldmVudERlZmF1bHQoKSxuLnZhbHVlfWVsc2Ugci5sZW5ndGgmJihZLnNldCh0aGlzLGkse3ZhbHVlOlMuZXZlbnQudHJpZ2dlcihTLmV4dGVuZChyWzBdLFMuRXZlbnQucHJvdG90eXBlKSxyLnNsaWNlKDEpLHRoaXMpfSksZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSl9fSkpOnZvaWQgMD09PVkuZ2V0KGUsaSkmJlMuZXZlbnQuYWRkKGUsaSxDZSl9Uy5ldmVudD17Z2xvYmFsOnt9LGFkZDpmdW5jdGlvbih0LGUsbixyLGkpe3ZhciBvLGEscyx1LGwsYyxmLHAsZCxoLGcsdj1ZLmdldCh0KTtpZihWKHQpKXtuLmhhbmRsZXImJihuPShvPW4pLmhhbmRsZXIsaT1vLnNlbGVjdG9yKSxpJiZTLmZpbmQubWF0Y2hlc1NlbGVjdG9yKHJlLGkpLG4uZ3VpZHx8KG4uZ3VpZD1TLmd1aWQrKyksKHU9di5ldmVudHMpfHwodT12LmV2ZW50cz1PYmplY3QuY3JlYXRlKG51bGwpKSwoYT12LmhhbmRsZSl8fChhPXYuaGFuZGxlPWZ1bmN0aW9uKGUpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBTJiZTLmV2ZW50LnRyaWdnZXJlZCE9PWUudHlwZT9TLmV2ZW50LmRpc3BhdGNoLmFwcGx5KHQsYXJndW1lbnRzKTp2b2lkIDB9KSxsPShlPShlfHxcIlwiKS5tYXRjaChQKXx8W1wiXCJdKS5sZW5ndGg7d2hpbGUobC0tKWQ9Zz0ocz1UZS5leGVjKGVbbF0pfHxbXSlbMV0saD0oc1syXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxkJiYoZj1TLmV2ZW50LnNwZWNpYWxbZF18fHt9LGQ9KGk/Zi5kZWxlZ2F0ZVR5cGU6Zi5iaW5kVHlwZSl8fGQsZj1TLmV2ZW50LnNwZWNpYWxbZF18fHt9LGM9Uy5leHRlbmQoe3R5cGU6ZCxvcmlnVHlwZTpnLGRhdGE6cixoYW5kbGVyOm4sZ3VpZDpuLmd1aWQsc2VsZWN0b3I6aSxuZWVkc0NvbnRleHQ6aSYmUy5leHByLm1hdGNoLm5lZWRzQ29udGV4dC50ZXN0KGkpLG5hbWVzcGFjZTpoLmpvaW4oXCIuXCIpfSxvKSwocD11W2RdKXx8KChwPXVbZF09W10pLmRlbGVnYXRlQ291bnQ9MCxmLnNldHVwJiYhMSE9PWYuc2V0dXAuY2FsbCh0LHIsaCxhKXx8dC5hZGRFdmVudExpc3RlbmVyJiZ0LmFkZEV2ZW50TGlzdGVuZXIoZCxhKSksZi5hZGQmJihmLmFkZC5jYWxsKHQsYyksYy5oYW5kbGVyLmd1aWR8fChjLmhhbmRsZXIuZ3VpZD1uLmd1aWQpKSxpP3Auc3BsaWNlKHAuZGVsZWdhdGVDb3VudCsrLDAsYyk6cC5wdXNoKGMpLFMuZXZlbnQuZ2xvYmFsW2RdPSEwKX19LHJlbW92ZTpmdW5jdGlvbihlLHQsbixyLGkpe3ZhciBvLGEscyx1LGwsYyxmLHAsZCxoLGcsdj1ZLmhhc0RhdGEoZSkmJlkuZ2V0KGUpO2lmKHYmJih1PXYuZXZlbnRzKSl7bD0odD0odHx8XCJcIikubWF0Y2goUCl8fFtcIlwiXSkubGVuZ3RoO3doaWxlKGwtLSlpZihkPWc9KHM9VGUuZXhlYyh0W2xdKXx8W10pWzFdLGg9KHNbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksZCl7Zj1TLmV2ZW50LnNwZWNpYWxbZF18fHt9LHA9dVtkPShyP2YuZGVsZWdhdGVUeXBlOmYuYmluZFR5cGUpfHxkXXx8W10scz1zWzJdJiZuZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIraC5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIiksYT1vPXAubGVuZ3RoO3doaWxlKG8tLSljPXBbb10sIWkmJmchPT1jLm9yaWdUeXBlfHxuJiZuLmd1aWQhPT1jLmd1aWR8fHMmJiFzLnRlc3QoYy5uYW1lc3BhY2UpfHxyJiZyIT09Yy5zZWxlY3RvciYmKFwiKipcIiE9PXJ8fCFjLnNlbGVjdG9yKXx8KHAuc3BsaWNlKG8sMSksYy5zZWxlY3RvciYmcC5kZWxlZ2F0ZUNvdW50LS0sZi5yZW1vdmUmJmYucmVtb3ZlLmNhbGwoZSxjKSk7YSYmIXAubGVuZ3RoJiYoZi50ZWFyZG93biYmITEhPT1mLnRlYXJkb3duLmNhbGwoZSxoLHYuaGFuZGxlKXx8Uy5yZW1vdmVFdmVudChlLGQsdi5oYW5kbGUpLGRlbGV0ZSB1W2RdKX1lbHNlIGZvcihkIGluIHUpUy5ldmVudC5yZW1vdmUoZSxkK3RbbF0sbixyLCEwKTtTLmlzRW1wdHlPYmplY3QodSkmJlkucmVtb3ZlKGUsXCJoYW5kbGUgZXZlbnRzXCIpfX0sZGlzcGF0Y2g6ZnVuY3Rpb24oZSl7dmFyIHQsbixyLGksbyxhLHM9bmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpLHU9Uy5ldmVudC5maXgoZSksbD0oWS5nZXQodGhpcyxcImV2ZW50c1wiKXx8T2JqZWN0LmNyZWF0ZShudWxsKSlbdS50eXBlXXx8W10sYz1TLmV2ZW50LnNwZWNpYWxbdS50eXBlXXx8e307Zm9yKHNbMF09dSx0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKylzW3RdPWFyZ3VtZW50c1t0XTtpZih1LmRlbGVnYXRlVGFyZ2V0PXRoaXMsIWMucHJlRGlzcGF0Y2h8fCExIT09Yy5wcmVEaXNwYXRjaC5jYWxsKHRoaXMsdSkpe2E9Uy5ldmVudC5oYW5kbGVycy5jYWxsKHRoaXMsdSxsKSx0PTA7d2hpbGUoKGk9YVt0KytdKSYmIXUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSl7dS5jdXJyZW50VGFyZ2V0PWkuZWxlbSxuPTA7d2hpbGUoKG89aS5oYW5kbGVyc1tuKytdKSYmIXUuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKSl1LnJuYW1lc3BhY2UmJiExIT09by5uYW1lc3BhY2UmJiF1LnJuYW1lc3BhY2UudGVzdChvLm5hbWVzcGFjZSl8fCh1LmhhbmRsZU9iaj1vLHUuZGF0YT1vLmRhdGEsdm9pZCAwIT09KHI9KChTLmV2ZW50LnNwZWNpYWxbby5vcmlnVHlwZV18fHt9KS5oYW5kbGV8fG8uaGFuZGxlcikuYXBwbHkoaS5lbGVtLHMpKSYmITE9PT0odS5yZXN1bHQ9cikmJih1LnByZXZlbnREZWZhdWx0KCksdS5zdG9wUHJvcGFnYXRpb24oKSkpfXJldHVybiBjLnBvc3REaXNwYXRjaCYmYy5wb3N0RGlzcGF0Y2guY2FsbCh0aGlzLHUpLHUucmVzdWx0fX0saGFuZGxlcnM6ZnVuY3Rpb24oZSx0KXt2YXIgbixyLGksbyxhLHM9W10sdT10LmRlbGVnYXRlQ291bnQsbD1lLnRhcmdldDtpZih1JiZsLm5vZGVUeXBlJiYhKFwiY2xpY2tcIj09PWUudHlwZSYmMTw9ZS5idXR0b24pKWZvcig7bCE9PXRoaXM7bD1sLnBhcmVudE5vZGV8fHRoaXMpaWYoMT09PWwubm9kZVR5cGUmJihcImNsaWNrXCIhPT1lLnR5cGV8fCEwIT09bC5kaXNhYmxlZCkpe2ZvcihvPVtdLGE9e30sbj0wO248dTtuKyspdm9pZCAwPT09YVtpPShyPXRbbl0pLnNlbGVjdG9yK1wiIFwiXSYmKGFbaV09ci5uZWVkc0NvbnRleHQ/LTE8UyhpLHRoaXMpLmluZGV4KGwpOlMuZmluZChpLHRoaXMsbnVsbCxbbF0pLmxlbmd0aCksYVtpXSYmby5wdXNoKHIpO28ubGVuZ3RoJiZzLnB1c2goe2VsZW06bCxoYW5kbGVyczpvfSl9cmV0dXJuIGw9dGhpcyx1PHQubGVuZ3RoJiZzLnB1c2goe2VsZW06bCxoYW5kbGVyczp0LnNsaWNlKHUpfSksc30sYWRkUHJvcDpmdW5jdGlvbih0LGUpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShTLkV2ZW50LnByb3RvdHlwZSx0LHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxnZXQ6bShlKT9mdW5jdGlvbigpe2lmKHRoaXMub3JpZ2luYWxFdmVudClyZXR1cm4gZSh0aGlzLm9yaWdpbmFsRXZlbnQpfTpmdW5jdGlvbigpe2lmKHRoaXMub3JpZ2luYWxFdmVudClyZXR1cm4gdGhpcy5vcmlnaW5hbEV2ZW50W3RdfSxzZXQ6ZnVuY3Rpb24oZSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsdCx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6ZX0pfX0pfSxmaXg6ZnVuY3Rpb24oZSl7cmV0dXJuIGVbUy5leHBhbmRvXT9lOm5ldyBTLkV2ZW50KGUpfSxzcGVjaWFsOntsb2FkOntub0J1YmJsZTohMH0sY2xpY2s6e3NldHVwOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXN8fGU7cmV0dXJuIHBlLnRlc3QodC50eXBlKSYmdC5jbGljayYmQSh0LFwiaW5wdXRcIikmJkFlKHQsXCJjbGlja1wiLENlKSwhMX0sdHJpZ2dlcjpmdW5jdGlvbihlKXt2YXIgdD10aGlzfHxlO3JldHVybiBwZS50ZXN0KHQudHlwZSkmJnQuY2xpY2smJkEodCxcImlucHV0XCIpJiZBZSh0LFwiY2xpY2tcIiksITB9LF9kZWZhdWx0OmZ1bmN0aW9uKGUpe3ZhciB0PWUudGFyZ2V0O3JldHVybiBwZS50ZXN0KHQudHlwZSkmJnQuY2xpY2smJkEodCxcImlucHV0XCIpJiZZLmdldCh0LFwiY2xpY2tcIil8fEEodCxcImFcIil9fSxiZWZvcmV1bmxvYWQ6e3Bvc3REaXNwYXRjaDpmdW5jdGlvbihlKXt2b2lkIDAhPT1lLnJlc3VsdCYmZS5vcmlnaW5hbEV2ZW50JiYoZS5vcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlPWUucmVzdWx0KX19fX0sUy5yZW1vdmVFdmVudD1mdW5jdGlvbihlLHQsbil7ZS5yZW1vdmVFdmVudExpc3RlbmVyJiZlLnJlbW92ZUV2ZW50TGlzdGVuZXIodCxuKX0sUy5FdmVudD1mdW5jdGlvbihlLHQpe2lmKCEodGhpcyBpbnN0YW5jZW9mIFMuRXZlbnQpKXJldHVybiBuZXcgUy5FdmVudChlLHQpO2UmJmUudHlwZT8odGhpcy5vcmlnaW5hbEV2ZW50PWUsdGhpcy50eXBlPWUudHlwZSx0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1lLmRlZmF1bHRQcmV2ZW50ZWR8fHZvaWQgMD09PWUuZGVmYXVsdFByZXZlbnRlZCYmITE9PT1lLnJldHVyblZhbHVlP0NlOkVlLHRoaXMudGFyZ2V0PWUudGFyZ2V0JiYzPT09ZS50YXJnZXQubm9kZVR5cGU/ZS50YXJnZXQucGFyZW50Tm9kZTplLnRhcmdldCx0aGlzLmN1cnJlbnRUYXJnZXQ9ZS5jdXJyZW50VGFyZ2V0LHRoaXMucmVsYXRlZFRhcmdldD1lLnJlbGF0ZWRUYXJnZXQpOnRoaXMudHlwZT1lLHQmJlMuZXh0ZW5kKHRoaXMsdCksdGhpcy50aW1lU3RhbXA9ZSYmZS50aW1lU3RhbXB8fERhdGUubm93KCksdGhpc1tTLmV4cGFuZG9dPSEwfSxTLkV2ZW50LnByb3RvdHlwZT17Y29uc3RydWN0b3I6Uy5FdmVudCxpc0RlZmF1bHRQcmV2ZW50ZWQ6RWUsaXNQcm9wYWdhdGlvblN0b3BwZWQ6RWUsaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ6RWUsaXNTaW11bGF0ZWQ6ITEscHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9Q2UsZSYmIXRoaXMuaXNTaW11bGF0ZWQmJmUucHJldmVudERlZmF1bHQoKX0sc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9Q2UsZSYmIXRoaXMuaXNTaW11bGF0ZWQmJmUuc3RvcFByb3BhZ2F0aW9uKCl9LHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkPUNlLGUmJiF0aGlzLmlzU2ltdWxhdGVkJiZlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLHRoaXMuc3RvcFByb3BhZ2F0aW9uKCl9fSxTLmVhY2goe2FsdEtleTohMCxidWJibGVzOiEwLGNhbmNlbGFibGU6ITAsY2hhbmdlZFRvdWNoZXM6ITAsY3RybEtleTohMCxkZXRhaWw6ITAsZXZlbnRQaGFzZTohMCxtZXRhS2V5OiEwLHBhZ2VYOiEwLHBhZ2VZOiEwLHNoaWZ0S2V5OiEwLHZpZXc6ITAsXCJjaGFyXCI6ITAsY29kZTohMCxjaGFyQ29kZTohMCxrZXk6ITAsa2V5Q29kZTohMCxidXR0b246ITAsYnV0dG9uczohMCxjbGllbnRYOiEwLGNsaWVudFk6ITAsb2Zmc2V0WDohMCxvZmZzZXRZOiEwLHBvaW50ZXJJZDohMCxwb2ludGVyVHlwZTohMCxzY3JlZW5YOiEwLHNjcmVlblk6ITAsdGFyZ2V0VG91Y2hlczohMCx0b0VsZW1lbnQ6ITAsdG91Y2hlczohMCx3aGljaDpmdW5jdGlvbihlKXt2YXIgdD1lLmJ1dHRvbjtyZXR1cm4gbnVsbD09ZS53aGljaCYmYmUudGVzdChlLnR5cGUpP251bGwhPWUuY2hhckNvZGU/ZS5jaGFyQ29kZTplLmtleUNvZGU6IWUud2hpY2gmJnZvaWQgMCE9PXQmJndlLnRlc3QoZS50eXBlKT8xJnQ/MToyJnQ/Mzo0JnQ/MjowOmUud2hpY2h9fSxTLmV2ZW50LmFkZFByb3ApLFMuZWFjaCh7Zm9jdXM6XCJmb2N1c2luXCIsYmx1cjpcImZvY3Vzb3V0XCJ9LGZ1bmN0aW9uKGUsdCl7Uy5ldmVudC5zcGVjaWFsW2VdPXtzZXR1cDpmdW5jdGlvbigpe3JldHVybiBBZSh0aGlzLGUsU2UpLCExfSx0cmlnZ2VyOmZ1bmN0aW9uKCl7cmV0dXJuIEFlKHRoaXMsZSksITB9LGRlbGVnYXRlVHlwZTp0fX0pLFMuZWFjaCh7bW91c2VlbnRlcjpcIm1vdXNlb3ZlclwiLG1vdXNlbGVhdmU6XCJtb3VzZW91dFwiLHBvaW50ZXJlbnRlcjpcInBvaW50ZXJvdmVyXCIscG9pbnRlcmxlYXZlOlwicG9pbnRlcm91dFwifSxmdW5jdGlvbihlLGkpe1MuZXZlbnQuc3BlY2lhbFtlXT17ZGVsZWdhdGVUeXBlOmksYmluZFR5cGU6aSxoYW5kbGU6ZnVuY3Rpb24oZSl7dmFyIHQsbj1lLnJlbGF0ZWRUYXJnZXQscj1lLmhhbmRsZU9iajtyZXR1cm4gbiYmKG49PT10aGlzfHxTLmNvbnRhaW5zKHRoaXMsbikpfHwoZS50eXBlPXIub3JpZ1R5cGUsdD1yLmhhbmRsZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpLGUudHlwZT1pKSx0fX19KSxTLmZuLmV4dGVuZCh7b246ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIGtlKHRoaXMsZSx0LG4scil9LG9uZTpmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4ga2UodGhpcyxlLHQsbixyLDEpfSxvZmY6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGk7aWYoZSYmZS5wcmV2ZW50RGVmYXVsdCYmZS5oYW5kbGVPYmopcmV0dXJuIHI9ZS5oYW5kbGVPYmosUyhlLmRlbGVnYXRlVGFyZ2V0KS5vZmYoci5uYW1lc3BhY2U/ci5vcmlnVHlwZStcIi5cIityLm5hbWVzcGFjZTpyLm9yaWdUeXBlLHIuc2VsZWN0b3Isci5oYW5kbGVyKSx0aGlzO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBlKXtmb3IoaSBpbiBlKXRoaXMub2ZmKGksdCxlW2ldKTtyZXR1cm4gdGhpc31yZXR1cm4hMSE9PXQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHR8fChuPXQsdD12b2lkIDApLCExPT09biYmKG49RWUpLHRoaXMuZWFjaChmdW5jdGlvbigpe1MuZXZlbnQucmVtb3ZlKHRoaXMsZSxuLHQpfSl9fSk7dmFyIE5lPS88c2NyaXB0fDxzdHlsZXw8bGluay9pLERlPS9jaGVja2VkXFxzKig/OltePV18PVxccyouY2hlY2tlZC4pL2ksamU9L15cXHMqPCEoPzpcXFtDREFUQVxcW3wtLSl8KD86XFxdXFxdfC0tKT5cXHMqJC9nO2Z1bmN0aW9uIHFlKGUsdCl7cmV0dXJuIEEoZSxcInRhYmxlXCIpJiZBKDExIT09dC5ub2RlVHlwZT90OnQuZmlyc3RDaGlsZCxcInRyXCIpJiZTKGUpLmNoaWxkcmVuKFwidGJvZHlcIilbMF18fGV9ZnVuY3Rpb24gTGUoZSl7cmV0dXJuIGUudHlwZT0obnVsbCE9PWUuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSkrXCIvXCIrZS50eXBlLGV9ZnVuY3Rpb24gSGUoZSl7cmV0dXJuXCJ0cnVlL1wiPT09KGUudHlwZXx8XCJcIikuc2xpY2UoMCw1KT9lLnR5cGU9ZS50eXBlLnNsaWNlKDUpOmUucmVtb3ZlQXR0cmlidXRlKFwidHlwZVwiKSxlfWZ1bmN0aW9uIE9lKGUsdCl7dmFyIG4scixpLG8sYSxzO2lmKDE9PT10Lm5vZGVUeXBlKXtpZihZLmhhc0RhdGEoZSkmJihzPVkuZ2V0KGUpLmV2ZW50cykpZm9yKGkgaW4gWS5yZW1vdmUodCxcImhhbmRsZSBldmVudHNcIikscylmb3Iobj0wLHI9c1tpXS5sZW5ndGg7bjxyO24rKylTLmV2ZW50LmFkZCh0LGksc1tpXVtuXSk7US5oYXNEYXRhKGUpJiYobz1RLmFjY2VzcyhlKSxhPVMuZXh0ZW5kKHt9LG8pLFEuc2V0KHQsYSkpfX1mdW5jdGlvbiBQZShuLHIsaSxvKXtyPWcocik7dmFyIGUsdCxhLHMsdSxsLGM9MCxmPW4ubGVuZ3RoLHA9Zi0xLGQ9clswXSxoPW0oZCk7aWYoaHx8MTxmJiZcInN0cmluZ1wiPT10eXBlb2YgZCYmIXkuY2hlY2tDbG9uZSYmRGUudGVzdChkKSlyZXR1cm4gbi5lYWNoKGZ1bmN0aW9uKGUpe3ZhciB0PW4uZXEoZSk7aCYmKHJbMF09ZC5jYWxsKHRoaXMsZSx0Lmh0bWwoKSkpLFBlKHQscixpLG8pfSk7aWYoZiYmKHQ9KGU9eGUocixuWzBdLm93bmVyRG9jdW1lbnQsITEsbixvKSkuZmlyc3RDaGlsZCwxPT09ZS5jaGlsZE5vZGVzLmxlbmd0aCYmKGU9dCksdHx8bykpe2ZvcihzPShhPVMubWFwKHZlKGUsXCJzY3JpcHRcIiksTGUpKS5sZW5ndGg7YzxmO2MrKyl1PWUsYyE9PXAmJih1PVMuY2xvbmUodSwhMCwhMCkscyYmUy5tZXJnZShhLHZlKHUsXCJzY3JpcHRcIikpKSxpLmNhbGwobltjXSx1LGMpO2lmKHMpZm9yKGw9YVthLmxlbmd0aC0xXS5vd25lckRvY3VtZW50LFMubWFwKGEsSGUpLGM9MDtjPHM7YysrKXU9YVtjXSxoZS50ZXN0KHUudHlwZXx8XCJcIikmJiFZLmFjY2Vzcyh1LFwiZ2xvYmFsRXZhbFwiKSYmUy5jb250YWlucyhsLHUpJiYodS5zcmMmJlwibW9kdWxlXCIhPT0odS50eXBlfHxcIlwiKS50b0xvd2VyQ2FzZSgpP1MuX2V2YWxVcmwmJiF1Lm5vTW9kdWxlJiZTLl9ldmFsVXJsKHUuc3JjLHtub25jZTp1Lm5vbmNlfHx1LmdldEF0dHJpYnV0ZShcIm5vbmNlXCIpfSxsKTpiKHUudGV4dENvbnRlbnQucmVwbGFjZShqZSxcIlwiKSx1LGwpKX1yZXR1cm4gbn1mdW5jdGlvbiBSZShlLHQsbil7Zm9yKHZhciByLGk9dD9TLmZpbHRlcih0LGUpOmUsbz0wO251bGwhPShyPWlbb10pO28rKylufHwxIT09ci5ub2RlVHlwZXx8Uy5jbGVhbkRhdGEodmUocikpLHIucGFyZW50Tm9kZSYmKG4mJmllKHIpJiZ5ZSh2ZShyLFwic2NyaXB0XCIpKSxyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocikpO3JldHVybiBlfVMuZXh0ZW5kKHtodG1sUHJlZmlsdGVyOmZ1bmN0aW9uKGUpe3JldHVybiBlfSxjbG9uZTpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGEscyx1LGwsYz1lLmNsb25lTm9kZSghMCksZj1pZShlKTtpZighKHkubm9DbG9uZUNoZWNrZWR8fDEhPT1lLm5vZGVUeXBlJiYxMSE9PWUubm9kZVR5cGV8fFMuaXNYTUxEb2MoZSkpKWZvcihhPXZlKGMpLHI9MCxpPShvPXZlKGUpKS5sZW5ndGg7cjxpO3IrKylzPW9bcl0sdT1hW3JdLHZvaWQgMCxcImlucHV0XCI9PT0obD11Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpJiZwZS50ZXN0KHMudHlwZSk/dS5jaGVja2VkPXMuY2hlY2tlZDpcImlucHV0XCIhPT1sJiZcInRleHRhcmVhXCIhPT1sfHwodS5kZWZhdWx0VmFsdWU9cy5kZWZhdWx0VmFsdWUpO2lmKHQpaWYobilmb3Iobz1vfHx2ZShlKSxhPWF8fHZlKGMpLHI9MCxpPW8ubGVuZ3RoO3I8aTtyKyspT2Uob1tyXSxhW3JdKTtlbHNlIE9lKGUsYyk7cmV0dXJuIDA8KGE9dmUoYyxcInNjcmlwdFwiKSkubGVuZ3RoJiZ5ZShhLCFmJiZ2ZShlLFwic2NyaXB0XCIpKSxjfSxjbGVhbkRhdGE6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0LG4scixpPVMuZXZlbnQuc3BlY2lhbCxvPTA7dm9pZCAwIT09KG49ZVtvXSk7bysrKWlmKFYobikpe2lmKHQ9bltZLmV4cGFuZG9dKXtpZih0LmV2ZW50cylmb3IociBpbiB0LmV2ZW50cylpW3JdP1MuZXZlbnQucmVtb3ZlKG4scik6Uy5yZW1vdmVFdmVudChuLHIsdC5oYW5kbGUpO25bWS5leHBhbmRvXT12b2lkIDB9bltRLmV4cGFuZG9dJiYobltRLmV4cGFuZG9dPXZvaWQgMCl9fX0pLFMuZm4uZXh0ZW5kKHtkZXRhY2g6ZnVuY3Rpb24oZSl7cmV0dXJuIFJlKHRoaXMsZSwhMCl9LHJlbW92ZTpmdW5jdGlvbihlKXtyZXR1cm4gUmUodGhpcyxlKX0sdGV4dDpmdW5jdGlvbihlKXtyZXR1cm4gJCh0aGlzLGZ1bmN0aW9uKGUpe3JldHVybiB2b2lkIDA9PT1lP1MudGV4dCh0aGlzKTp0aGlzLmVtcHR5KCkuZWFjaChmdW5jdGlvbigpezEhPT10aGlzLm5vZGVUeXBlJiYxMSE9PXRoaXMubm9kZVR5cGUmJjkhPT10aGlzLm5vZGVUeXBlfHwodGhpcy50ZXh0Q29udGVudD1lKX0pfSxudWxsLGUsYXJndW1lbnRzLmxlbmd0aCl9LGFwcGVuZDpmdW5jdGlvbigpe3JldHVybiBQZSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihlKXsxIT09dGhpcy5ub2RlVHlwZSYmMTEhPT10aGlzLm5vZGVUeXBlJiY5IT09dGhpcy5ub2RlVHlwZXx8cWUodGhpcyxlKS5hcHBlbmRDaGlsZChlKX0pfSxwcmVwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIFBlKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGUpe2lmKDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKXt2YXIgdD1xZSh0aGlzLGUpO3QuaW5zZXJ0QmVmb3JlKGUsdC5maXJzdENoaWxkKX19KX0sYmVmb3JlOmZ1bmN0aW9uKCl7cmV0dXJuIFBlKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGUpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlLHRoaXMpfSl9LGFmdGVyOmZ1bmN0aW9uKCl7cmV0dXJuIFBlKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGUpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlLHRoaXMubmV4dFNpYmxpbmcpfSl9LGVtcHR5OmZ1bmN0aW9uKCl7Zm9yKHZhciBlLHQ9MDtudWxsIT0oZT10aGlzW3RdKTt0KyspMT09PWUubm9kZVR5cGUmJihTLmNsZWFuRGF0YSh2ZShlLCExKSksZS50ZXh0Q29udGVudD1cIlwiKTtyZXR1cm4gdGhpc30sY2xvbmU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZT1udWxsIT1lJiZlLHQ9bnVsbD09dD9lOnQsdGhpcy5tYXAoZnVuY3Rpb24oKXtyZXR1cm4gUy5jbG9uZSh0aGlzLGUsdCl9KX0saHRtbDpmdW5jdGlvbihlKXtyZXR1cm4gJCh0aGlzLGZ1bmN0aW9uKGUpe3ZhciB0PXRoaXNbMF18fHt9LG49MCxyPXRoaXMubGVuZ3RoO2lmKHZvaWQgMD09PWUmJjE9PT10Lm5vZGVUeXBlKXJldHVybiB0LmlubmVySFRNTDtpZihcInN0cmluZ1wiPT10eXBlb2YgZSYmIU5lLnRlc3QoZSkmJiFnZVsoZGUuZXhlYyhlKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCldKXtlPVMuaHRtbFByZWZpbHRlcihlKTt0cnl7Zm9yKDtuPHI7bisrKTE9PT0odD10aGlzW25dfHx7fSkubm9kZVR5cGUmJihTLmNsZWFuRGF0YSh2ZSh0LCExKSksdC5pbm5lckhUTUw9ZSk7dD0wfWNhdGNoKGUpe319dCYmdGhpcy5lbXB0eSgpLmFwcGVuZChlKX0sbnVsbCxlLGFyZ3VtZW50cy5sZW5ndGgpfSxyZXBsYWNlV2l0aDpmdW5jdGlvbigpe3ZhciBuPVtdO3JldHVybiBQZSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihlKXt2YXIgdD10aGlzLnBhcmVudE5vZGU7Uy5pbkFycmF5KHRoaXMsbik8MCYmKFMuY2xlYW5EYXRhKHZlKHRoaXMpKSx0JiZ0LnJlcGxhY2VDaGlsZChlLHRoaXMpKX0sbil9fSksUy5lYWNoKHthcHBlbmRUbzpcImFwcGVuZFwiLHByZXBlbmRUbzpcInByZXBlbmRcIixpbnNlcnRCZWZvcmU6XCJiZWZvcmVcIixpbnNlcnRBZnRlcjpcImFmdGVyXCIscmVwbGFjZUFsbDpcInJlcGxhY2VXaXRoXCJ9LGZ1bmN0aW9uKGUsYSl7Uy5mbltlXT1mdW5jdGlvbihlKXtmb3IodmFyIHQsbj1bXSxyPVMoZSksaT1yLmxlbmd0aC0xLG89MDtvPD1pO28rKyl0PW89PT1pP3RoaXM6dGhpcy5jbG9uZSghMCksUyhyW29dKVthXSh0KSx1LmFwcGx5KG4sdC5nZXQoKSk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKG4pfX0pO3ZhciBNZT1uZXcgUmVnRXhwKFwiXihcIitlZStcIikoPyFweClbYS16JV0rJFwiLFwiaVwiKSxJZT1mdW5jdGlvbihlKXt2YXIgdD1lLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7cmV0dXJuIHQmJnQub3BlbmVyfHwodD1DKSx0LmdldENvbXB1dGVkU3R5bGUoZSl9LFdlPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89e307Zm9yKGkgaW4gdClvW2ldPWUuc3R5bGVbaV0sZS5zdHlsZVtpXT10W2ldO2ZvcihpIGluIHI9bi5jYWxsKGUpLHQpZS5zdHlsZVtpXT1vW2ldO3JldHVybiByfSxGZT1uZXcgUmVnRXhwKG5lLmpvaW4oXCJ8XCIpLFwiaVwiKTtmdW5jdGlvbiBCZShlLHQsbil7dmFyIHIsaSxvLGEscz1lLnN0eWxlO3JldHVybihuPW58fEllKGUpKSYmKFwiXCIhPT0oYT1uLmdldFByb3BlcnR5VmFsdWUodCl8fG5bdF0pfHxpZShlKXx8KGE9Uy5zdHlsZShlLHQpKSwheS5waXhlbEJveFN0eWxlcygpJiZNZS50ZXN0KGEpJiZGZS50ZXN0KHQpJiYocj1zLndpZHRoLGk9cy5taW5XaWR0aCxvPXMubWF4V2lkdGgscy5taW5XaWR0aD1zLm1heFdpZHRoPXMud2lkdGg9YSxhPW4ud2lkdGgscy53aWR0aD1yLHMubWluV2lkdGg9aSxzLm1heFdpZHRoPW8pKSx2b2lkIDAhPT1hP2ErXCJcIjphfWZ1bmN0aW9uICRlKGUsdCl7cmV0dXJue2dldDpmdW5jdGlvbigpe2lmKCFlKCkpcmV0dXJuKHRoaXMuZ2V0PXQpLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtkZWxldGUgdGhpcy5nZXR9fX0hZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7aWYobCl7dS5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246YWJzb2x1dGU7bGVmdDotMTExMTFweDt3aWR0aDo2MHB4O21hcmdpbi10b3A6MXB4O3BhZGRpbmc6MDtib3JkZXI6MFwiLGwuc3R5bGUuY3NzVGV4dD1cInBvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94O292ZXJmbG93OnNjcm9sbDttYXJnaW46YXV0bztib3JkZXI6MXB4O3BhZGRpbmc6MXB4O3dpZHRoOjYwJTt0b3A6MSVcIixyZS5hcHBlbmRDaGlsZCh1KS5hcHBlbmRDaGlsZChsKTt2YXIgZT1DLmdldENvbXB1dGVkU3R5bGUobCk7bj1cIjElXCIhPT1lLnRvcCxzPTEyPT09dChlLm1hcmdpbkxlZnQpLGwuc3R5bGUucmlnaHQ9XCI2MCVcIixvPTM2PT09dChlLnJpZ2h0KSxyPTM2PT09dChlLndpZHRoKSxsLnN0eWxlLnBvc2l0aW9uPVwiYWJzb2x1dGVcIixpPTEyPT09dChsLm9mZnNldFdpZHRoLzMpLHJlLnJlbW92ZUNoaWxkKHUpLGw9bnVsbH19ZnVuY3Rpb24gdChlKXtyZXR1cm4gTWF0aC5yb3VuZChwYXJzZUZsb2F0KGUpKX12YXIgbixyLGksbyxhLHMsdT1FLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksbD1FLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7bC5zdHlsZSYmKGwuc3R5bGUuYmFja2dyb3VuZENsaXA9XCJjb250ZW50LWJveFwiLGwuY2xvbmVOb2RlKCEwKS5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cIlwiLHkuY2xlYXJDbG9uZVN0eWxlPVwiY29udGVudC1ib3hcIj09PWwuc3R5bGUuYmFja2dyb3VuZENsaXAsUy5leHRlbmQoeSx7Ym94U2l6aW5nUmVsaWFibGU6ZnVuY3Rpb24oKXtyZXR1cm4gZSgpLHJ9LHBpeGVsQm94U3R5bGVzOmZ1bmN0aW9uKCl7cmV0dXJuIGUoKSxvfSxwaXhlbFBvc2l0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuIGUoKSxufSxyZWxpYWJsZU1hcmdpbkxlZnQ6ZnVuY3Rpb24oKXtyZXR1cm4gZSgpLHN9LHNjcm9sbGJveFNpemU6ZnVuY3Rpb24oKXtyZXR1cm4gZSgpLGl9LHJlbGlhYmxlVHJEaW1lbnNpb25zOmZ1bmN0aW9uKCl7dmFyIGUsdCxuLHI7cmV0dXJuIG51bGw9PWEmJihlPUUuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpLHQ9RS5jcmVhdGVFbGVtZW50KFwidHJcIiksbj1FLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZS5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246YWJzb2x1dGU7bGVmdDotMTExMTFweFwiLHQuc3R5bGUuaGVpZ2h0PVwiMXB4XCIsbi5zdHlsZS5oZWlnaHQ9XCI5cHhcIixyZS5hcHBlbmRDaGlsZChlKS5hcHBlbmRDaGlsZCh0KS5hcHBlbmRDaGlsZChuKSxyPUMuZ2V0Q29tcHV0ZWRTdHlsZSh0KSxhPTM8cGFyc2VJbnQoci5oZWlnaHQpLHJlLnJlbW92ZUNoaWxkKGUpKSxhfX0pKX0oKTt2YXIgX2U9W1wiV2Via2l0XCIsXCJNb3pcIixcIm1zXCJdLHplPUUuY3JlYXRlRWxlbWVudChcImRpdlwiKS5zdHlsZSxVZT17fTtmdW5jdGlvbiBYZShlKXt2YXIgdD1TLmNzc1Byb3BzW2VdfHxVZVtlXTtyZXR1cm4gdHx8KGUgaW4gemU/ZTpVZVtlXT1mdW5jdGlvbihlKXt2YXIgdD1lWzBdLnRvVXBwZXJDYXNlKCkrZS5zbGljZSgxKSxuPV9lLmxlbmd0aDt3aGlsZShuLS0paWYoKGU9X2Vbbl0rdClpbiB6ZSlyZXR1cm4gZX0oZSl8fGUpfXZhciBWZT0vXihub25lfHRhYmxlKD8hLWNbZWFdKS4rKS8sR2U9L14tLS8sWWU9e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix2aXNpYmlsaXR5OlwiaGlkZGVuXCIsZGlzcGxheTpcImJsb2NrXCJ9LFFlPXtsZXR0ZXJTcGFjaW5nOlwiMFwiLGZvbnRXZWlnaHQ6XCI0MDBcIn07ZnVuY3Rpb24gSmUoZSx0LG4pe3ZhciByPXRlLmV4ZWModCk7cmV0dXJuIHI/TWF0aC5tYXgoMCxyWzJdLShufHwwKSkrKHJbM118fFwicHhcIik6dH1mdW5jdGlvbiBLZShlLHQsbixyLGksbyl7dmFyIGE9XCJ3aWR0aFwiPT09dD8xOjAscz0wLHU9MDtpZihuPT09KHI/XCJib3JkZXJcIjpcImNvbnRlbnRcIikpcmV0dXJuIDA7Zm9yKDthPDQ7YSs9MilcIm1hcmdpblwiPT09biYmKHUrPVMuY3NzKGUsbituZVthXSwhMCxpKSkscj8oXCJjb250ZW50XCI9PT1uJiYodS09Uy5jc3MoZSxcInBhZGRpbmdcIituZVthXSwhMCxpKSksXCJtYXJnaW5cIiE9PW4mJih1LT1TLmNzcyhlLFwiYm9yZGVyXCIrbmVbYV0rXCJXaWR0aFwiLCEwLGkpKSk6KHUrPVMuY3NzKGUsXCJwYWRkaW5nXCIrbmVbYV0sITAsaSksXCJwYWRkaW5nXCIhPT1uP3UrPVMuY3NzKGUsXCJib3JkZXJcIituZVthXStcIldpZHRoXCIsITAsaSk6cys9Uy5jc3MoZSxcImJvcmRlclwiK25lW2FdK1wiV2lkdGhcIiwhMCxpKSk7cmV0dXJuIXImJjA8PW8mJih1Kz1NYXRoLm1heCgwLE1hdGguY2VpbChlW1wib2Zmc2V0XCIrdFswXS50b1VwcGVyQ2FzZSgpK3Quc2xpY2UoMSldLW8tdS1zLS41KSl8fDApLHV9ZnVuY3Rpb24gWmUoZSx0LG4pe3ZhciByPUllKGUpLGk9KCF5LmJveFNpemluZ1JlbGlhYmxlKCl8fG4pJiZcImJvcmRlci1ib3hcIj09PVMuY3NzKGUsXCJib3hTaXppbmdcIiwhMSxyKSxvPWksYT1CZShlLHQscikscz1cIm9mZnNldFwiK3RbMF0udG9VcHBlckNhc2UoKSt0LnNsaWNlKDEpO2lmKE1lLnRlc3QoYSkpe2lmKCFuKXJldHVybiBhO2E9XCJhdXRvXCJ9cmV0dXJuKCF5LmJveFNpemluZ1JlbGlhYmxlKCkmJml8fCF5LnJlbGlhYmxlVHJEaW1lbnNpb25zKCkmJkEoZSxcInRyXCIpfHxcImF1dG9cIj09PWF8fCFwYXJzZUZsb2F0KGEpJiZcImlubGluZVwiPT09Uy5jc3MoZSxcImRpc3BsYXlcIiwhMSxyKSkmJmUuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgmJihpPVwiYm9yZGVyLWJveFwiPT09Uy5jc3MoZSxcImJveFNpemluZ1wiLCExLHIpLChvPXMgaW4gZSkmJihhPWVbc10pKSwoYT1wYXJzZUZsb2F0KGEpfHwwKStLZShlLHQsbnx8KGk/XCJib3JkZXJcIjpcImNvbnRlbnRcIiksbyxyLGEpK1wicHhcIn1mdW5jdGlvbiBldChlLHQsbixyLGkpe3JldHVybiBuZXcgZXQucHJvdG90eXBlLmluaXQoZSx0LG4scixpKX1TLmV4dGVuZCh7Y3NzSG9va3M6e29wYWNpdHk6e2dldDpmdW5jdGlvbihlLHQpe2lmKHQpe3ZhciBuPUJlKGUsXCJvcGFjaXR5XCIpO3JldHVyblwiXCI9PT1uP1wiMVwiOm59fX19LGNzc051bWJlcjp7YW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ITAsY29sdW1uQ291bnQ6ITAsZmlsbE9wYWNpdHk6ITAsZmxleEdyb3c6ITAsZmxleFNocmluazohMCxmb250V2VpZ2h0OiEwLGdyaWRBcmVhOiEwLGdyaWRDb2x1bW46ITAsZ3JpZENvbHVtbkVuZDohMCxncmlkQ29sdW1uU3RhcnQ6ITAsZ3JpZFJvdzohMCxncmlkUm93RW5kOiEwLGdyaWRSb3dTdGFydDohMCxsaW5lSGVpZ2h0OiEwLG9wYWNpdHk6ITAsb3JkZXI6ITAsb3JwaGFuczohMCx3aWRvd3M6ITAsekluZGV4OiEwLHpvb206ITB9LGNzc1Byb3BzOnt9LHN0eWxlOmZ1bmN0aW9uKGUsdCxuLHIpe2lmKGUmJjMhPT1lLm5vZGVUeXBlJiY4IT09ZS5ub2RlVHlwZSYmZS5zdHlsZSl7dmFyIGksbyxhLHM9WCh0KSx1PUdlLnRlc3QodCksbD1lLnN0eWxlO2lmKHV8fCh0PVhlKHMpKSxhPVMuY3NzSG9va3NbdF18fFMuY3NzSG9va3Nbc10sdm9pZCAwPT09bilyZXR1cm4gYSYmXCJnZXRcImluIGEmJnZvaWQgMCE9PShpPWEuZ2V0KGUsITEscikpP2k6bFt0XTtcInN0cmluZ1wiPT09KG89dHlwZW9mIG4pJiYoaT10ZS5leGVjKG4pKSYmaVsxXSYmKG49c2UoZSx0LGkpLG89XCJudW1iZXJcIiksbnVsbCE9biYmbj09biYmKFwibnVtYmVyXCIhPT1vfHx1fHwobis9aSYmaVszXXx8KFMuY3NzTnVtYmVyW3NdP1wiXCI6XCJweFwiKSkseS5jbGVhckNsb25lU3R5bGV8fFwiXCIhPT1ufHwwIT09dC5pbmRleE9mKFwiYmFja2dyb3VuZFwiKXx8KGxbdF09XCJpbmhlcml0XCIpLGEmJlwic2V0XCJpbiBhJiZ2b2lkIDA9PT0obj1hLnNldChlLG4scikpfHwodT9sLnNldFByb3BlcnR5KHQsbik6bFt0XT1uKSl9fSxjc3M6ZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbyxhLHM9WCh0KTtyZXR1cm4gR2UudGVzdCh0KXx8KHQ9WGUocykpLChhPVMuY3NzSG9va3NbdF18fFMuY3NzSG9va3Nbc10pJiZcImdldFwiaW4gYSYmKGk9YS5nZXQoZSwhMCxuKSksdm9pZCAwPT09aSYmKGk9QmUoZSx0LHIpKSxcIm5vcm1hbFwiPT09aSYmdCBpbiBRZSYmKGk9UWVbdF0pLFwiXCI9PT1ufHxuPyhvPXBhcnNlRmxvYXQoaSksITA9PT1ufHxpc0Zpbml0ZShvKT9vfHwwOmkpOml9fSksUy5lYWNoKFtcImhlaWdodFwiLFwid2lkdGhcIl0sZnVuY3Rpb24oZSx1KXtTLmNzc0hvb2tzW3VdPXtnZXQ6ZnVuY3Rpb24oZSx0LG4pe2lmKHQpcmV0dXJuIVZlLnRlc3QoUy5jc3MoZSxcImRpc3BsYXlcIikpfHxlLmdldENsaWVudFJlY3RzKCkubGVuZ3RoJiZlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoP1plKGUsdSxuKTpXZShlLFllLGZ1bmN0aW9uKCl7cmV0dXJuIFplKGUsdSxuKX0pfSxzZXQ6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGk9SWUoZSksbz0heS5zY3JvbGxib3hTaXplKCkmJlwiYWJzb2x1dGVcIj09PWkucG9zaXRpb24sYT0ob3x8bikmJlwiYm9yZGVyLWJveFwiPT09Uy5jc3MoZSxcImJveFNpemluZ1wiLCExLGkpLHM9bj9LZShlLHUsbixhLGkpOjA7cmV0dXJuIGEmJm8mJihzLT1NYXRoLmNlaWwoZVtcIm9mZnNldFwiK3VbMF0udG9VcHBlckNhc2UoKSt1LnNsaWNlKDEpXS1wYXJzZUZsb2F0KGlbdV0pLUtlKGUsdSxcImJvcmRlclwiLCExLGkpLS41KSkscyYmKHI9dGUuZXhlYyh0KSkmJlwicHhcIiE9PShyWzNdfHxcInB4XCIpJiYoZS5zdHlsZVt1XT10LHQ9Uy5jc3MoZSx1KSksSmUoMCx0LHMpfX19KSxTLmNzc0hvb2tzLm1hcmdpbkxlZnQ9JGUoeS5yZWxpYWJsZU1hcmdpbkxlZnQsZnVuY3Rpb24oZSx0KXtpZih0KXJldHVybihwYXJzZUZsb2F0KEJlKGUsXCJtYXJnaW5MZWZ0XCIpKXx8ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LVdlKGUse21hcmdpbkxlZnQ6MH0sZnVuY3Rpb24oKXtyZXR1cm4gZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0fSkpK1wicHhcIn0pLFMuZWFjaCh7bWFyZ2luOlwiXCIscGFkZGluZzpcIlwiLGJvcmRlcjpcIldpZHRoXCJ9LGZ1bmN0aW9uKGksbyl7Uy5jc3NIb29rc1tpK29dPXtleHBhbmQ6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTAsbj17fSxyPVwic3RyaW5nXCI9PXR5cGVvZiBlP2Uuc3BsaXQoXCIgXCIpOltlXTt0PDQ7dCsrKW5baStuZVt0XStvXT1yW3RdfHxyW3QtMl18fHJbMF07cmV0dXJuIG59fSxcIm1hcmdpblwiIT09aSYmKFMuY3NzSG9va3NbaStvXS5zZXQ9SmUpfSksUy5mbi5leHRlbmQoe2NzczpmdW5jdGlvbihlLHQpe3JldHVybiAkKHRoaXMsZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz17fSxhPTA7aWYoQXJyYXkuaXNBcnJheSh0KSl7Zm9yKHI9SWUoZSksaT10Lmxlbmd0aDthPGk7YSsrKW9bdFthXV09Uy5jc3MoZSx0W2FdLCExLHIpO3JldHVybiBvfXJldHVybiB2b2lkIDAhPT1uP1Muc3R5bGUoZSx0LG4pOlMuY3NzKGUsdCl9LGUsdCwxPGFyZ3VtZW50cy5sZW5ndGgpfX0pLCgoUy5Ud2Vlbj1ldCkucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpldCxpbml0OmZ1bmN0aW9uKGUsdCxuLHIsaSxvKXt0aGlzLmVsZW09ZSx0aGlzLnByb3A9bix0aGlzLmVhc2luZz1pfHxTLmVhc2luZy5fZGVmYXVsdCx0aGlzLm9wdGlvbnM9dCx0aGlzLnN0YXJ0PXRoaXMubm93PXRoaXMuY3VyKCksdGhpcy5lbmQ9cix0aGlzLnVuaXQ9b3x8KFMuY3NzTnVtYmVyW25dP1wiXCI6XCJweFwiKX0sY3VyOmZ1bmN0aW9uKCl7dmFyIGU9ZXQucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIGUmJmUuZ2V0P2UuZ2V0KHRoaXMpOmV0LnByb3BIb29rcy5fZGVmYXVsdC5nZXQodGhpcyl9LHJ1bjpmdW5jdGlvbihlKXt2YXIgdCxuPWV0LnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiB0aGlzLm9wdGlvbnMuZHVyYXRpb24/dGhpcy5wb3M9dD1TLmVhc2luZ1t0aGlzLmVhc2luZ10oZSx0aGlzLm9wdGlvbnMuZHVyYXRpb24qZSwwLDEsdGhpcy5vcHRpb25zLmR1cmF0aW9uKTp0aGlzLnBvcz10PWUsdGhpcy5ub3c9KHRoaXMuZW5kLXRoaXMuc3RhcnQpKnQrdGhpcy5zdGFydCx0aGlzLm9wdGlvbnMuc3RlcCYmdGhpcy5vcHRpb25zLnN0ZXAuY2FsbCh0aGlzLmVsZW0sdGhpcy5ub3csdGhpcyksbiYmbi5zZXQ/bi5zZXQodGhpcyk6ZXQucHJvcEhvb2tzLl9kZWZhdWx0LnNldCh0aGlzKSx0aGlzfX0pLmluaXQucHJvdG90eXBlPWV0LnByb3RvdHlwZSwoZXQucHJvcEhvb2tzPXtfZGVmYXVsdDp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0O3JldHVybiAxIT09ZS5lbGVtLm5vZGVUeXBlfHxudWxsIT1lLmVsZW1bZS5wcm9wXSYmbnVsbD09ZS5lbGVtLnN0eWxlW2UucHJvcF0/ZS5lbGVtW2UucHJvcF06KHQ9Uy5jc3MoZS5lbGVtLGUucHJvcCxcIlwiKSkmJlwiYXV0b1wiIT09dD90OjB9LHNldDpmdW5jdGlvbihlKXtTLmZ4LnN0ZXBbZS5wcm9wXT9TLmZ4LnN0ZXBbZS5wcm9wXShlKToxIT09ZS5lbGVtLm5vZGVUeXBlfHwhUy5jc3NIb29rc1tlLnByb3BdJiZudWxsPT1lLmVsZW0uc3R5bGVbWGUoZS5wcm9wKV0/ZS5lbGVtW2UucHJvcF09ZS5ub3c6Uy5zdHlsZShlLmVsZW0sZS5wcm9wLGUubm93K2UudW5pdCl9fX0pLnNjcm9sbFRvcD1ldC5wcm9wSG9va3Muc2Nyb2xsTGVmdD17c2V0OmZ1bmN0aW9uKGUpe2UuZWxlbS5ub2RlVHlwZSYmZS5lbGVtLnBhcmVudE5vZGUmJihlLmVsZW1bZS5wcm9wXT1lLm5vdyl9fSxTLmVhc2luZz17bGluZWFyOmZ1bmN0aW9uKGUpe3JldHVybiBlfSxzd2luZzpmdW5jdGlvbihlKXtyZXR1cm4uNS1NYXRoLmNvcyhlKk1hdGguUEkpLzJ9LF9kZWZhdWx0Olwic3dpbmdcIn0sUy5meD1ldC5wcm90b3R5cGUuaW5pdCxTLmZ4LnN0ZXA9e307dmFyIHR0LG50LHJ0LGl0LG90PS9eKD86dG9nZ2xlfHNob3d8aGlkZSkkLyxhdD0vcXVldWVIb29rcyQvO2Z1bmN0aW9uIHN0KCl7bnQmJighMT09PUUuaGlkZGVuJiZDLnJlcXVlc3RBbmltYXRpb25GcmFtZT9DLnJlcXVlc3RBbmltYXRpb25GcmFtZShzdCk6Qy5zZXRUaW1lb3V0KHN0LFMuZnguaW50ZXJ2YWwpLFMuZngudGljaygpKX1mdW5jdGlvbiB1dCgpe3JldHVybiBDLnNldFRpbWVvdXQoZnVuY3Rpb24oKXt0dD12b2lkIDB9KSx0dD1EYXRlLm5vdygpfWZ1bmN0aW9uIGx0KGUsdCl7dmFyIG4scj0wLGk9e2hlaWdodDplfTtmb3IodD10PzE6MDtyPDQ7cis9Mi10KWlbXCJtYXJnaW5cIisobj1uZVtyXSldPWlbXCJwYWRkaW5nXCIrbl09ZTtyZXR1cm4gdCYmKGkub3BhY2l0eT1pLndpZHRoPWUpLGl9ZnVuY3Rpb24gY3QoZSx0LG4pe2Zvcih2YXIgcixpPShmdC50d2VlbmVyc1t0XXx8W10pLmNvbmNhdChmdC50d2VlbmVyc1tcIipcIl0pLG89MCxhPWkubGVuZ3RoO288YTtvKyspaWYocj1pW29dLmNhbGwobix0LGUpKXJldHVybiByfWZ1bmN0aW9uIGZ0KG8sZSx0KXt2YXIgbixhLHI9MCxpPWZ0LnByZWZpbHRlcnMubGVuZ3RoLHM9Uy5EZWZlcnJlZCgpLmFsd2F5cyhmdW5jdGlvbigpe2RlbGV0ZSB1LmVsZW19KSx1PWZ1bmN0aW9uKCl7aWYoYSlyZXR1cm4hMTtmb3IodmFyIGU9dHR8fHV0KCksdD1NYXRoLm1heCgwLGwuc3RhcnRUaW1lK2wuZHVyYXRpb24tZSksbj0xLSh0L2wuZHVyYXRpb258fDApLHI9MCxpPWwudHdlZW5zLmxlbmd0aDtyPGk7cisrKWwudHdlZW5zW3JdLnJ1bihuKTtyZXR1cm4gcy5ub3RpZnlXaXRoKG8sW2wsbix0XSksbjwxJiZpP3Q6KGl8fHMubm90aWZ5V2l0aChvLFtsLDEsMF0pLHMucmVzb2x2ZVdpdGgobyxbbF0pLCExKX0sbD1zLnByb21pc2Uoe2VsZW06byxwcm9wczpTLmV4dGVuZCh7fSxlKSxvcHRzOlMuZXh0ZW5kKCEwLHtzcGVjaWFsRWFzaW5nOnt9LGVhc2luZzpTLmVhc2luZy5fZGVmYXVsdH0sdCksb3JpZ2luYWxQcm9wZXJ0aWVzOmUsb3JpZ2luYWxPcHRpb25zOnQsc3RhcnRUaW1lOnR0fHx1dCgpLGR1cmF0aW9uOnQuZHVyYXRpb24sdHdlZW5zOltdLGNyZWF0ZVR3ZWVuOmZ1bmN0aW9uKGUsdCl7dmFyIG49Uy5Ud2VlbihvLGwub3B0cyxlLHQsbC5vcHRzLnNwZWNpYWxFYXNpbmdbZV18fGwub3B0cy5lYXNpbmcpO3JldHVybiBsLnR3ZWVucy5wdXNoKG4pLG59LHN0b3A6ZnVuY3Rpb24oZSl7dmFyIHQ9MCxuPWU/bC50d2VlbnMubGVuZ3RoOjA7aWYoYSlyZXR1cm4gdGhpcztmb3IoYT0hMDt0PG47dCsrKWwudHdlZW5zW3RdLnJ1bigxKTtyZXR1cm4gZT8ocy5ub3RpZnlXaXRoKG8sW2wsMSwwXSkscy5yZXNvbHZlV2l0aChvLFtsLGVdKSk6cy5yZWplY3RXaXRoKG8sW2wsZV0pLHRoaXN9fSksYz1sLnByb3BzO2ZvcighZnVuY3Rpb24oZSx0KXt2YXIgbixyLGksbyxhO2ZvcihuIGluIGUpaWYoaT10W3I9WChuKV0sbz1lW25dLEFycmF5LmlzQXJyYXkobykmJihpPW9bMV0sbz1lW25dPW9bMF0pLG4hPT1yJiYoZVtyXT1vLGRlbGV0ZSBlW25dKSwoYT1TLmNzc0hvb2tzW3JdKSYmXCJleHBhbmRcImluIGEpZm9yKG4gaW4gbz1hLmV4cGFuZChvKSxkZWxldGUgZVtyXSxvKW4gaW4gZXx8KGVbbl09b1tuXSx0W25dPWkpO2Vsc2UgdFtyXT1pfShjLGwub3B0cy5zcGVjaWFsRWFzaW5nKTtyPGk7cisrKWlmKG49ZnQucHJlZmlsdGVyc1tyXS5jYWxsKGwsbyxjLGwub3B0cykpcmV0dXJuIG0obi5zdG9wKSYmKFMuX3F1ZXVlSG9va3MobC5lbGVtLGwub3B0cy5xdWV1ZSkuc3RvcD1uLnN0b3AuYmluZChuKSksbjtyZXR1cm4gUy5tYXAoYyxjdCxsKSxtKGwub3B0cy5zdGFydCkmJmwub3B0cy5zdGFydC5jYWxsKG8sbCksbC5wcm9ncmVzcyhsLm9wdHMucHJvZ3Jlc3MpLmRvbmUobC5vcHRzLmRvbmUsbC5vcHRzLmNvbXBsZXRlKS5mYWlsKGwub3B0cy5mYWlsKS5hbHdheXMobC5vcHRzLmFsd2F5cyksUy5meC50aW1lcihTLmV4dGVuZCh1LHtlbGVtOm8sYW5pbTpsLHF1ZXVlOmwub3B0cy5xdWV1ZX0pKSxsfVMuQW5pbWF0aW9uPVMuZXh0ZW5kKGZ0LHt0d2VlbmVyczp7XCIqXCI6W2Z1bmN0aW9uKGUsdCl7dmFyIG49dGhpcy5jcmVhdGVUd2VlbihlLHQpO3JldHVybiBzZShuLmVsZW0sZSx0ZS5leGVjKHQpLG4pLG59XX0sdHdlZW5lcjpmdW5jdGlvbihlLHQpe20oZSk/KHQ9ZSxlPVtcIipcIl0pOmU9ZS5tYXRjaChQKTtmb3IodmFyIG4scj0wLGk9ZS5sZW5ndGg7cjxpO3IrKyluPWVbcl0sZnQudHdlZW5lcnNbbl09ZnQudHdlZW5lcnNbbl18fFtdLGZ0LnR3ZWVuZXJzW25dLnVuc2hpZnQodCl9LHByZWZpbHRlcnM6W2Z1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYSxzLHUsbCxjLGY9XCJ3aWR0aFwiaW4gdHx8XCJoZWlnaHRcImluIHQscD10aGlzLGQ9e30saD1lLnN0eWxlLGc9ZS5ub2RlVHlwZSYmYWUoZSksdj1ZLmdldChlLFwiZnhzaG93XCIpO2ZvcihyIGluIG4ucXVldWV8fChudWxsPT0oYT1TLl9xdWV1ZUhvb2tzKGUsXCJmeFwiKSkudW5xdWV1ZWQmJihhLnVucXVldWVkPTAscz1hLmVtcHR5LmZpcmUsYS5lbXB0eS5maXJlPWZ1bmN0aW9uKCl7YS51bnF1ZXVlZHx8cygpfSksYS51bnF1ZXVlZCsrLHAuYWx3YXlzKGZ1bmN0aW9uKCl7cC5hbHdheXMoZnVuY3Rpb24oKXthLnVucXVldWVkLS0sUy5xdWV1ZShlLFwiZnhcIikubGVuZ3RofHxhLmVtcHR5LmZpcmUoKX0pfSkpLHQpaWYoaT10W3JdLG90LnRlc3QoaSkpe2lmKGRlbGV0ZSB0W3JdLG89b3x8XCJ0b2dnbGVcIj09PWksaT09PShnP1wiaGlkZVwiOlwic2hvd1wiKSl7aWYoXCJzaG93XCIhPT1pfHwhdnx8dm9pZCAwPT09dltyXSljb250aW51ZTtnPSEwfWRbcl09diYmdltyXXx8Uy5zdHlsZShlLHIpfWlmKCh1PSFTLmlzRW1wdHlPYmplY3QodCkpfHwhUy5pc0VtcHR5T2JqZWN0KGQpKWZvcihyIGluIGYmJjE9PT1lLm5vZGVUeXBlJiYobi5vdmVyZmxvdz1baC5vdmVyZmxvdyxoLm92ZXJmbG93WCxoLm92ZXJmbG93WV0sbnVsbD09KGw9diYmdi5kaXNwbGF5KSYmKGw9WS5nZXQoZSxcImRpc3BsYXlcIikpLFwibm9uZVwiPT09KGM9Uy5jc3MoZSxcImRpc3BsYXlcIikpJiYobD9jPWw6KGxlKFtlXSwhMCksbD1lLnN0eWxlLmRpc3BsYXl8fGwsYz1TLmNzcyhlLFwiZGlzcGxheVwiKSxsZShbZV0pKSksKFwiaW5saW5lXCI9PT1jfHxcImlubGluZS1ibG9ja1wiPT09YyYmbnVsbCE9bCkmJlwibm9uZVwiPT09Uy5jc3MoZSxcImZsb2F0XCIpJiYodXx8KHAuZG9uZShmdW5jdGlvbigpe2guZGlzcGxheT1sfSksbnVsbD09bCYmKGM9aC5kaXNwbGF5LGw9XCJub25lXCI9PT1jP1wiXCI6YykpLGguZGlzcGxheT1cImlubGluZS1ibG9ja1wiKSksbi5vdmVyZmxvdyYmKGgub3ZlcmZsb3c9XCJoaWRkZW5cIixwLmFsd2F5cyhmdW5jdGlvbigpe2gub3ZlcmZsb3c9bi5vdmVyZmxvd1swXSxoLm92ZXJmbG93WD1uLm92ZXJmbG93WzFdLGgub3ZlcmZsb3dZPW4ub3ZlcmZsb3dbMl19KSksdT0hMSxkKXV8fCh2P1wiaGlkZGVuXCJpbiB2JiYoZz12LmhpZGRlbik6dj1ZLmFjY2VzcyhlLFwiZnhzaG93XCIse2Rpc3BsYXk6bH0pLG8mJih2LmhpZGRlbj0hZyksZyYmbGUoW2VdLCEwKSxwLmRvbmUoZnVuY3Rpb24oKXtmb3IociBpbiBnfHxsZShbZV0pLFkucmVtb3ZlKGUsXCJmeHNob3dcIiksZClTLnN0eWxlKGUscixkW3JdKX0pKSx1PWN0KGc/dltyXTowLHIscCksciBpbiB2fHwodltyXT11LnN0YXJ0LGcmJih1LmVuZD11LnN0YXJ0LHUuc3RhcnQ9MCkpfV0scHJlZmlsdGVyOmZ1bmN0aW9uKGUsdCl7dD9mdC5wcmVmaWx0ZXJzLnVuc2hpZnQoZSk6ZnQucHJlZmlsdGVycy5wdXNoKGUpfX0pLFMuc3BlZWQ9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPWUmJlwib2JqZWN0XCI9PXR5cGVvZiBlP1MuZXh0ZW5kKHt9LGUpOntjb21wbGV0ZTpufHwhbiYmdHx8bShlKSYmZSxkdXJhdGlvbjplLGVhc2luZzpuJiZ0fHx0JiYhbSh0KSYmdH07cmV0dXJuIFMuZngub2ZmP3IuZHVyYXRpb249MDpcIm51bWJlclwiIT10eXBlb2Ygci5kdXJhdGlvbiYmKHIuZHVyYXRpb24gaW4gUy5meC5zcGVlZHM/ci5kdXJhdGlvbj1TLmZ4LnNwZWVkc1tyLmR1cmF0aW9uXTpyLmR1cmF0aW9uPVMuZnguc3BlZWRzLl9kZWZhdWx0KSxudWxsIT1yLnF1ZXVlJiYhMCE9PXIucXVldWV8fChyLnF1ZXVlPVwiZnhcIiksci5vbGQ9ci5jb21wbGV0ZSxyLmNvbXBsZXRlPWZ1bmN0aW9uKCl7bShyLm9sZCkmJnIub2xkLmNhbGwodGhpcyksci5xdWV1ZSYmUy5kZXF1ZXVlKHRoaXMsci5xdWV1ZSl9LHJ9LFMuZm4uZXh0ZW5kKHtmYWRlVG86ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIHRoaXMuZmlsdGVyKGFlKS5jc3MoXCJvcGFjaXR5XCIsMCkuc2hvdygpLmVuZCgpLmFuaW1hdGUoe29wYWNpdHk6dH0sZSxuLHIpfSxhbmltYXRlOmZ1bmN0aW9uKHQsZSxuLHIpe3ZhciBpPVMuaXNFbXB0eU9iamVjdCh0KSxvPVMuc3BlZWQoZSxuLHIpLGE9ZnVuY3Rpb24oKXt2YXIgZT1mdCh0aGlzLFMuZXh0ZW5kKHt9LHQpLG8pOyhpfHxZLmdldCh0aGlzLFwiZmluaXNoXCIpKSYmZS5zdG9wKCEwKX07cmV0dXJuIGEuZmluaXNoPWEsaXx8ITE9PT1vLnF1ZXVlP3RoaXMuZWFjaChhKTp0aGlzLnF1ZXVlKG8ucXVldWUsYSl9LHN0b3A6ZnVuY3Rpb24oaSxlLG8pe3ZhciBhPWZ1bmN0aW9uKGUpe3ZhciB0PWUuc3RvcDtkZWxldGUgZS5zdG9wLHQobyl9O3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBpJiYobz1lLGU9aSxpPXZvaWQgMCksZSYmdGhpcy5xdWV1ZShpfHxcImZ4XCIsW10pLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlPSEwLHQ9bnVsbCE9aSYmaStcInF1ZXVlSG9va3NcIixuPVMudGltZXJzLHI9WS5nZXQodGhpcyk7aWYodClyW3RdJiZyW3RdLnN0b3AmJmEoclt0XSk7ZWxzZSBmb3IodCBpbiByKXJbdF0mJnJbdF0uc3RvcCYmYXQudGVzdCh0KSYmYShyW3RdKTtmb3IodD1uLmxlbmd0aDt0LS07KW5bdF0uZWxlbSE9PXRoaXN8fG51bGwhPWkmJm5bdF0ucXVldWUhPT1pfHwoblt0XS5hbmltLnN0b3AobyksZT0hMSxuLnNwbGljZSh0LDEpKTshZSYmb3x8Uy5kZXF1ZXVlKHRoaXMsaSl9KX0sZmluaXNoOmZ1bmN0aW9uKGEpe3JldHVybiExIT09YSYmKGE9YXx8XCJmeFwiKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZSx0PVkuZ2V0KHRoaXMpLG49dFthK1wicXVldWVcIl0scj10W2ErXCJxdWV1ZUhvb2tzXCJdLGk9Uy50aW1lcnMsbz1uP24ubGVuZ3RoOjA7Zm9yKHQuZmluaXNoPSEwLFMucXVldWUodGhpcyxhLFtdKSxyJiZyLnN0b3AmJnIuc3RvcC5jYWxsKHRoaXMsITApLGU9aS5sZW5ndGg7ZS0tOylpW2VdLmVsZW09PT10aGlzJiZpW2VdLnF1ZXVlPT09YSYmKGlbZV0uYW5pbS5zdG9wKCEwKSxpLnNwbGljZShlLDEpKTtmb3IoZT0wO2U8bztlKyspbltlXSYmbltlXS5maW5pc2gmJm5bZV0uZmluaXNoLmNhbGwodGhpcyk7ZGVsZXRlIHQuZmluaXNofSl9fSksUy5lYWNoKFtcInRvZ2dsZVwiLFwic2hvd1wiLFwiaGlkZVwiXSxmdW5jdGlvbihlLHIpe3ZhciBpPVMuZm5bcl07Uy5mbltyXT1mdW5jdGlvbihlLHQsbil7cmV0dXJuIG51bGw9PWV8fFwiYm9vbGVhblwiPT10eXBlb2YgZT9pLmFwcGx5KHRoaXMsYXJndW1lbnRzKTp0aGlzLmFuaW1hdGUobHQociwhMCksZSx0LG4pfX0pLFMuZWFjaCh7c2xpZGVEb3duOmx0KFwic2hvd1wiKSxzbGlkZVVwOmx0KFwiaGlkZVwiKSxzbGlkZVRvZ2dsZTpsdChcInRvZ2dsZVwiKSxmYWRlSW46e29wYWNpdHk6XCJzaG93XCJ9LGZhZGVPdXQ6e29wYWNpdHk6XCJoaWRlXCJ9LGZhZGVUb2dnbGU6e29wYWNpdHk6XCJ0b2dnbGVcIn19LGZ1bmN0aW9uKGUscil7Uy5mbltlXT1mdW5jdGlvbihlLHQsbil7cmV0dXJuIHRoaXMuYW5pbWF0ZShyLGUsdCxuKX19KSxTLnRpbWVycz1bXSxTLmZ4LnRpY2s9ZnVuY3Rpb24oKXt2YXIgZSx0PTAsbj1TLnRpbWVycztmb3IodHQ9RGF0ZS5ub3coKTt0PG4ubGVuZ3RoO3QrKykoZT1uW3RdKSgpfHxuW3RdIT09ZXx8bi5zcGxpY2UodC0tLDEpO24ubGVuZ3RofHxTLmZ4LnN0b3AoKSx0dD12b2lkIDB9LFMuZngudGltZXI9ZnVuY3Rpb24oZSl7Uy50aW1lcnMucHVzaChlKSxTLmZ4LnN0YXJ0KCl9LFMuZnguaW50ZXJ2YWw9MTMsUy5meC5zdGFydD1mdW5jdGlvbigpe250fHwobnQ9ITAsc3QoKSl9LFMuZnguc3RvcD1mdW5jdGlvbigpe250PW51bGx9LFMuZnguc3BlZWRzPXtzbG93OjYwMCxmYXN0OjIwMCxfZGVmYXVsdDo0MDB9LFMuZm4uZGVsYXk9ZnVuY3Rpb24ocixlKXtyZXR1cm4gcj1TLmZ4JiZTLmZ4LnNwZWVkc1tyXXx8cixlPWV8fFwiZnhcIix0aGlzLnF1ZXVlKGUsZnVuY3Rpb24oZSx0KXt2YXIgbj1DLnNldFRpbWVvdXQoZSxyKTt0LnN0b3A9ZnVuY3Rpb24oKXtDLmNsZWFyVGltZW91dChuKX19KX0scnQ9RS5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksaXQ9RS5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpLmFwcGVuZENoaWxkKEUuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSkscnQudHlwZT1cImNoZWNrYm94XCIseS5jaGVja09uPVwiXCIhPT1ydC52YWx1ZSx5Lm9wdFNlbGVjdGVkPWl0LnNlbGVjdGVkLChydD1FLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSkudmFsdWU9XCJ0XCIscnQudHlwZT1cInJhZGlvXCIseS5yYWRpb1ZhbHVlPVwidFwiPT09cnQudmFsdWU7dmFyIHB0LGR0PVMuZXhwci5hdHRySGFuZGxlO1MuZm4uZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuICQodGhpcyxTLmF0dHIsZSx0LDE8YXJndW1lbnRzLmxlbmd0aCl9LHJlbW92ZUF0dHI6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1MucmVtb3ZlQXR0cih0aGlzLGUpfSl9fSksUy5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz1lLm5vZGVUeXBlO2lmKDMhPT1vJiY4IT09byYmMiE9PW8pcmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIGUuZ2V0QXR0cmlidXRlP1MucHJvcChlLHQsbik6KDE9PT1vJiZTLmlzWE1MRG9jKGUpfHwoaT1TLmF0dHJIb29rc1t0LnRvTG93ZXJDYXNlKCldfHwoUy5leHByLm1hdGNoLmJvb2wudGVzdCh0KT9wdDp2b2lkIDApKSx2b2lkIDAhPT1uP251bGw9PT1uP3ZvaWQgUy5yZW1vdmVBdHRyKGUsdCk6aSYmXCJzZXRcImluIGkmJnZvaWQgMCE9PShyPWkuc2V0KGUsbix0KSk/cjooZS5zZXRBdHRyaWJ1dGUodCxuK1wiXCIpLG4pOmkmJlwiZ2V0XCJpbiBpJiZudWxsIT09KHI9aS5nZXQoZSx0KSk/cjpudWxsPT0ocj1TLmZpbmQuYXR0cihlLHQpKT92b2lkIDA6cil9LGF0dHJIb29rczp7dHlwZTp7c2V0OmZ1bmN0aW9uKGUsdCl7aWYoIXkucmFkaW9WYWx1ZSYmXCJyYWRpb1wiPT09dCYmQShlLFwiaW5wdXRcIikpe3ZhciBuPWUudmFsdWU7cmV0dXJuIGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLHQpLG4mJihlLnZhbHVlPW4pLHR9fX19LHJlbW92ZUF0dHI6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPTAsaT10JiZ0Lm1hdGNoKFApO2lmKGkmJjE9PT1lLm5vZGVUeXBlKXdoaWxlKG49aVtyKytdKWUucmVtb3ZlQXR0cmlidXRlKG4pfX0pLHB0PXtzZXQ6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiExPT09dD9TLnJlbW92ZUF0dHIoZSxuKTplLnNldEF0dHJpYnV0ZShuLG4pLG59fSxTLmVhY2goUy5leHByLm1hdGNoLmJvb2wuc291cmNlLm1hdGNoKC9cXHcrL2cpLGZ1bmN0aW9uKGUsdCl7dmFyIGE9ZHRbdF18fFMuZmluZC5hdHRyO2R0W3RdPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89dC50b0xvd2VyQ2FzZSgpO3JldHVybiBufHwoaT1kdFtvXSxkdFtvXT1yLHI9bnVsbCE9YShlLHQsbik/bzpudWxsLGR0W29dPWkpLHJ9fSk7dmFyIGh0PS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksZ3Q9L14oPzphfGFyZWEpJC9pO2Z1bmN0aW9uIHZ0KGUpe3JldHVybihlLm1hdGNoKFApfHxbXSkuam9pbihcIiBcIil9ZnVuY3Rpb24geXQoZSl7cmV0dXJuIGUuZ2V0QXR0cmlidXRlJiZlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwifWZ1bmN0aW9uIG10KGUpe3JldHVybiBBcnJheS5pc0FycmF5KGUpP2U6XCJzdHJpbmdcIj09dHlwZW9mIGUmJmUubWF0Y2goUCl8fFtdfVMuZm4uZXh0ZW5kKHtwcm9wOmZ1bmN0aW9uKGUsdCl7cmV0dXJuICQodGhpcyxTLnByb3AsZSx0LDE8YXJndW1lbnRzLmxlbmd0aCl9LHJlbW92ZVByb3A6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe2RlbGV0ZSB0aGlzW1MucHJvcEZpeFtlXXx8ZV19KX19KSxTLmV4dGVuZCh7cHJvcDpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPWUubm9kZVR5cGU7aWYoMyE9PW8mJjghPT1vJiYyIT09bylyZXR1cm4gMT09PW8mJlMuaXNYTUxEb2MoZSl8fCh0PVMucHJvcEZpeFt0XXx8dCxpPVMucHJvcEhvb2tzW3RdKSx2b2lkIDAhPT1uP2kmJlwic2V0XCJpbiBpJiZ2b2lkIDAhPT0ocj1pLnNldChlLG4sdCkpP3I6ZVt0XT1uOmkmJlwiZ2V0XCJpbiBpJiZudWxsIT09KHI9aS5nZXQoZSx0KSk/cjplW3RdfSxwcm9wSG9va3M6e3RhYkluZGV4OntnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9Uy5maW5kLmF0dHIoZSxcInRhYmluZGV4XCIpO3JldHVybiB0P3BhcnNlSW50KHQsMTApOmh0LnRlc3QoZS5ub2RlTmFtZSl8fGd0LnRlc3QoZS5ub2RlTmFtZSkmJmUuaHJlZj8wOi0xfX19LHByb3BGaXg6e1wiZm9yXCI6XCJodG1sRm9yXCIsXCJjbGFzc1wiOlwiY2xhc3NOYW1lXCJ9fSkseS5vcHRTZWxlY3RlZHx8KFMucHJvcEhvb2tzLnNlbGVjdGVkPXtnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5wYXJlbnROb2RlO3JldHVybiB0JiZ0LnBhcmVudE5vZGUmJnQucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LG51bGx9LHNldDpmdW5jdGlvbihlKXt2YXIgdD1lLnBhcmVudE5vZGU7dCYmKHQuc2VsZWN0ZWRJbmRleCx0LnBhcmVudE5vZGUmJnQucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4KX19KSxTLmVhY2goW1widGFiSW5kZXhcIixcInJlYWRPbmx5XCIsXCJtYXhMZW5ndGhcIixcImNlbGxTcGFjaW5nXCIsXCJjZWxsUGFkZGluZ1wiLFwicm93U3BhblwiLFwiY29sU3BhblwiLFwidXNlTWFwXCIsXCJmcmFtZUJvcmRlclwiLFwiY29udGVudEVkaXRhYmxlXCJdLGZ1bmN0aW9uKCl7Uy5wcm9wRml4W3RoaXMudG9Mb3dlckNhc2UoKV09dGhpc30pLFMuZm4uZXh0ZW5kKHthZGRDbGFzczpmdW5jdGlvbih0KXt2YXIgZSxuLHIsaSxvLGEscyx1PTA7aWYobSh0KSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGUpe1ModGhpcykuYWRkQ2xhc3ModC5jYWxsKHRoaXMsZSx5dCh0aGlzKSkpfSk7aWYoKGU9bXQodCkpLmxlbmd0aCl3aGlsZShuPXRoaXNbdSsrXSlpZihpPXl0KG4pLHI9MT09PW4ubm9kZVR5cGUmJlwiIFwiK3Z0KGkpK1wiIFwiKXthPTA7d2hpbGUobz1lW2ErK10pci5pbmRleE9mKFwiIFwiK28rXCIgXCIpPDAmJihyKz1vK1wiIFwiKTtpIT09KHM9dnQocikpJiZuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIscyl9cmV0dXJuIHRoaXN9LHJlbW92ZUNsYXNzOmZ1bmN0aW9uKHQpe3ZhciBlLG4scixpLG8sYSxzLHU9MDtpZihtKHQpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oZSl7Uyh0aGlzKS5yZW1vdmVDbGFzcyh0LmNhbGwodGhpcyxlLHl0KHRoaXMpKSl9KTtpZighYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdGhpcy5hdHRyKFwiY2xhc3NcIixcIlwiKTtpZigoZT1tdCh0KSkubGVuZ3RoKXdoaWxlKG49dGhpc1t1KytdKWlmKGk9eXQobikscj0xPT09bi5ub2RlVHlwZSYmXCIgXCIrdnQoaSkrXCIgXCIpe2E9MDt3aGlsZShvPWVbYSsrXSl3aGlsZSgtMTxyLmluZGV4T2YoXCIgXCIrbytcIiBcIikpcj1yLnJlcGxhY2UoXCIgXCIrbytcIiBcIixcIiBcIik7aSE9PShzPXZ0KHIpKSYmbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLHMpfXJldHVybiB0aGlzfSx0b2dnbGVDbGFzczpmdW5jdGlvbihpLHQpe3ZhciBvPXR5cGVvZiBpLGE9XCJzdHJpbmdcIj09PW98fEFycmF5LmlzQXJyYXkoaSk7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiB0JiZhP3Q/dGhpcy5hZGRDbGFzcyhpKTp0aGlzLnJlbW92ZUNsYXNzKGkpOm0oaSk/dGhpcy5lYWNoKGZ1bmN0aW9uKGUpe1ModGhpcykudG9nZ2xlQ2xhc3MoaS5jYWxsKHRoaXMsZSx5dCh0aGlzKSx0KSx0KX0pOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlLHQsbixyO2lmKGEpe3Q9MCxuPVModGhpcykscj1tdChpKTt3aGlsZShlPXJbdCsrXSluLmhhc0NsYXNzKGUpP24ucmVtb3ZlQ2xhc3MoZSk6bi5hZGRDbGFzcyhlKX1lbHNlIHZvaWQgMCE9PWkmJlwiYm9vbGVhblwiIT09b3x8KChlPXl0KHRoaXMpKSYmWS5zZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIixlKSx0aGlzLnNldEF0dHJpYnV0ZSYmdGhpcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGV8fCExPT09aT9cIlwiOlkuZ2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIpfHxcIlwiKSl9KX0saGFzQ2xhc3M6ZnVuY3Rpb24oZSl7dmFyIHQsbixyPTA7dD1cIiBcIitlK1wiIFwiO3doaWxlKG49dGhpc1tyKytdKWlmKDE9PT1uLm5vZGVUeXBlJiYtMTwoXCIgXCIrdnQoeXQobikpK1wiIFwiKS5pbmRleE9mKHQpKXJldHVybiEwO3JldHVybiExfX0pO3ZhciB4dD0vXFxyL2c7Uy5mbi5leHRlbmQoe3ZhbDpmdW5jdGlvbihuKXt2YXIgcixlLGksdD10aGlzWzBdO3JldHVybiBhcmd1bWVudHMubGVuZ3RoPyhpPW0obiksdGhpcy5lYWNoKGZ1bmN0aW9uKGUpe3ZhciB0OzE9PT10aGlzLm5vZGVUeXBlJiYobnVsbD09KHQ9aT9uLmNhbGwodGhpcyxlLFModGhpcykudmFsKCkpOm4pP3Q9XCJcIjpcIm51bWJlclwiPT10eXBlb2YgdD90Kz1cIlwiOkFycmF5LmlzQXJyYXkodCkmJih0PVMubWFwKHQsZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/XCJcIjplK1wiXCJ9KSksKHI9Uy52YWxIb29rc1t0aGlzLnR5cGVdfHxTLnZhbEhvb2tzW3RoaXMubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0pJiZcInNldFwiaW4gciYmdm9pZCAwIT09ci5zZXQodGhpcyx0LFwidmFsdWVcIil8fCh0aGlzLnZhbHVlPXQpKX0pKTp0PyhyPVMudmFsSG9va3NbdC50eXBlXXx8Uy52YWxIb29rc1t0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldKSYmXCJnZXRcImluIHImJnZvaWQgMCE9PShlPXIuZ2V0KHQsXCJ2YWx1ZVwiKSk/ZTpcInN0cmluZ1wiPT10eXBlb2YoZT10LnZhbHVlKT9lLnJlcGxhY2UoeHQsXCJcIik6bnVsbD09ZT9cIlwiOmU6dm9pZCAwfX0pLFMuZXh0ZW5kKHt2YWxIb29rczp7b3B0aW9uOntnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9Uy5maW5kLmF0dHIoZSxcInZhbHVlXCIpO3JldHVybiBudWxsIT10P3Q6dnQoUy50ZXh0KGUpKX19LHNlbGVjdDp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0LG4scixpPWUub3B0aW9ucyxvPWUuc2VsZWN0ZWRJbmRleCxhPVwic2VsZWN0LW9uZVwiPT09ZS50eXBlLHM9YT9udWxsOltdLHU9YT9vKzE6aS5sZW5ndGg7Zm9yKHI9bzwwP3U6YT9vOjA7cjx1O3IrKylpZigoKG49aVtyXSkuc2VsZWN0ZWR8fHI9PT1vKSYmIW4uZGlzYWJsZWQmJighbi5wYXJlbnROb2RlLmRpc2FibGVkfHwhQShuLnBhcmVudE5vZGUsXCJvcHRncm91cFwiKSkpe2lmKHQ9UyhuKS52YWwoKSxhKXJldHVybiB0O3MucHVzaCh0KX1yZXR1cm4gc30sc2V0OmZ1bmN0aW9uKGUsdCl7dmFyIG4scixpPWUub3B0aW9ucyxvPVMubWFrZUFycmF5KHQpLGE9aS5sZW5ndGg7d2hpbGUoYS0tKSgocj1pW2FdKS5zZWxlY3RlZD0tMTxTLmluQXJyYXkoUy52YWxIb29rcy5vcHRpb24uZ2V0KHIpLG8pKSYmKG49ITApO3JldHVybiBufHwoZS5zZWxlY3RlZEluZGV4PS0xKSxvfX19fSksUy5lYWNoKFtcInJhZGlvXCIsXCJjaGVja2JveFwiXSxmdW5jdGlvbigpe1MudmFsSG9va3NbdGhpc109e3NldDpmdW5jdGlvbihlLHQpe2lmKEFycmF5LmlzQXJyYXkodCkpcmV0dXJuIGUuY2hlY2tlZD0tMTxTLmluQXJyYXkoUyhlKS52YWwoKSx0KX19LHkuY2hlY2tPbnx8KFMudmFsSG9va3NbdGhpc10uZ2V0PWZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT09ZS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKT9cIm9uXCI6ZS52YWx1ZX0pfSkseS5mb2N1c2luPVwib25mb2N1c2luXCJpbiBDO3ZhciBidD0vXig/OmZvY3VzaW5mb2N1c3xmb2N1c291dGJsdXIpJC8sd3Q9ZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24oKX07Uy5leHRlbmQoUy5ldmVudCx7dHJpZ2dlcjpmdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGEscyx1LGwsYyxmLHA9W258fEVdLGQ9di5jYWxsKGUsXCJ0eXBlXCIpP2UudHlwZTplLGg9di5jYWxsKGUsXCJuYW1lc3BhY2VcIik/ZS5uYW1lc3BhY2Uuc3BsaXQoXCIuXCIpOltdO2lmKG89Zj1hPW49bnx8RSwzIT09bi5ub2RlVHlwZSYmOCE9PW4ubm9kZVR5cGUmJiFidC50ZXN0KGQrUy5ldmVudC50cmlnZ2VyZWQpJiYoLTE8ZC5pbmRleE9mKFwiLlwiKSYmKGQ9KGg9ZC5zcGxpdChcIi5cIikpLnNoaWZ0KCksaC5zb3J0KCkpLHU9ZC5pbmRleE9mKFwiOlwiKTwwJiZcIm9uXCIrZCwoZT1lW1MuZXhwYW5kb10/ZTpuZXcgUy5FdmVudChkLFwib2JqZWN0XCI9PXR5cGVvZiBlJiZlKSkuaXNUcmlnZ2VyPXI/MjozLGUubmFtZXNwYWNlPWguam9pbihcIi5cIiksZS5ybmFtZXNwYWNlPWUubmFtZXNwYWNlP25ldyBSZWdFeHAoXCIoXnxcXFxcLilcIitoLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKTpudWxsLGUucmVzdWx0PXZvaWQgMCxlLnRhcmdldHx8KGUudGFyZ2V0PW4pLHQ9bnVsbD09dD9bZV06Uy5tYWtlQXJyYXkodCxbZV0pLGM9Uy5ldmVudC5zcGVjaWFsW2RdfHx7fSxyfHwhYy50cmlnZ2VyfHwhMSE9PWMudHJpZ2dlci5hcHBseShuLHQpKSl7aWYoIXImJiFjLm5vQnViYmxlJiYheChuKSl7Zm9yKHM9Yy5kZWxlZ2F0ZVR5cGV8fGQsYnQudGVzdChzK2QpfHwobz1vLnBhcmVudE5vZGUpO287bz1vLnBhcmVudE5vZGUpcC5wdXNoKG8pLGE9bzthPT09KG4ub3duZXJEb2N1bWVudHx8RSkmJnAucHVzaChhLmRlZmF1bHRWaWV3fHxhLnBhcmVudFdpbmRvd3x8Qyl9aT0wO3doaWxlKChvPXBbaSsrXSkmJiFlLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpZj1vLGUudHlwZT0xPGk/czpjLmJpbmRUeXBlfHxkLChsPShZLmdldChvLFwiZXZlbnRzXCIpfHxPYmplY3QuY3JlYXRlKG51bGwpKVtlLnR5cGVdJiZZLmdldChvLFwiaGFuZGxlXCIpKSYmbC5hcHBseShvLHQpLChsPXUmJm9bdV0pJiZsLmFwcGx5JiZWKG8pJiYoZS5yZXN1bHQ9bC5hcHBseShvLHQpLCExPT09ZS5yZXN1bHQmJmUucHJldmVudERlZmF1bHQoKSk7cmV0dXJuIGUudHlwZT1kLHJ8fGUuaXNEZWZhdWx0UHJldmVudGVkKCl8fGMuX2RlZmF1bHQmJiExIT09Yy5fZGVmYXVsdC5hcHBseShwLnBvcCgpLHQpfHwhVihuKXx8dSYmbShuW2RdKSYmIXgobikmJigoYT1uW3VdKSYmKG5bdV09bnVsbCksUy5ldmVudC50cmlnZ2VyZWQ9ZCxlLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkmJmYuYWRkRXZlbnRMaXN0ZW5lcihkLHd0KSxuW2RdKCksZS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpJiZmLnJlbW92ZUV2ZW50TGlzdGVuZXIoZCx3dCksUy5ldmVudC50cmlnZ2VyZWQ9dm9pZCAwLGEmJihuW3VdPWEpKSxlLnJlc3VsdH19LHNpbXVsYXRlOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1TLmV4dGVuZChuZXcgUy5FdmVudCxuLHt0eXBlOmUsaXNTaW11bGF0ZWQ6ITB9KTtTLmV2ZW50LnRyaWdnZXIocixudWxsLHQpfX0pLFMuZm4uZXh0ZW5kKHt0cmlnZ2VyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1MuZXZlbnQudHJpZ2dlcihlLHQsdGhpcyl9KX0sdHJpZ2dlckhhbmRsZXI6ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzWzBdO2lmKG4pcmV0dXJuIFMuZXZlbnQudHJpZ2dlcihlLHQsbiwhMCl9fSkseS5mb2N1c2lufHxTLmVhY2goe2ZvY3VzOlwiZm9jdXNpblwiLGJsdXI6XCJmb2N1c291dFwifSxmdW5jdGlvbihuLHIpe3ZhciBpPWZ1bmN0aW9uKGUpe1MuZXZlbnQuc2ltdWxhdGUocixlLnRhcmdldCxTLmV2ZW50LmZpeChlKSl9O1MuZXZlbnQuc3BlY2lhbFtyXT17c2V0dXA6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMuZG9jdW1lbnR8fHRoaXMsdD1ZLmFjY2VzcyhlLHIpO3R8fGUuYWRkRXZlbnRMaXN0ZW5lcihuLGksITApLFkuYWNjZXNzKGUsciwodHx8MCkrMSl9LHRlYXJkb3duOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLmRvY3VtZW50fHx0aGlzLHQ9WS5hY2Nlc3MoZSxyKS0xO3Q/WS5hY2Nlc3MoZSxyLHQpOihlLnJlbW92ZUV2ZW50TGlzdGVuZXIobixpLCEwKSxZLnJlbW92ZShlLHIpKX19fSk7dmFyIFR0PUMubG9jYXRpb24sQ3Q9e2d1aWQ6RGF0ZS5ub3coKX0sRXQ9L1xcPy87Uy5wYXJzZVhNTD1mdW5jdGlvbihlKXt2YXIgdDtpZighZXx8XCJzdHJpbmdcIiE9dHlwZW9mIGUpcmV0dXJuIG51bGw7dHJ5e3Q9KG5ldyBDLkRPTVBhcnNlcikucGFyc2VGcm9tU3RyaW5nKGUsXCJ0ZXh0L3htbFwiKX1jYXRjaChlKXt0PXZvaWQgMH1yZXR1cm4gdCYmIXQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwYXJzZXJlcnJvclwiKS5sZW5ndGh8fFMuZXJyb3IoXCJJbnZhbGlkIFhNTDogXCIrZSksdH07dmFyIFN0PS9cXFtcXF0kLyxrdD0vXFxyP1xcbi9nLEF0PS9eKD86c3VibWl0fGJ1dHRvbnxpbWFnZXxyZXNldHxmaWxlKSQvaSxOdD0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxrZXlnZW4pL2k7ZnVuY3Rpb24gRHQobixlLHIsaSl7dmFyIHQ7aWYoQXJyYXkuaXNBcnJheShlKSlTLmVhY2goZSxmdW5jdGlvbihlLHQpe3J8fFN0LnRlc3Qobik/aShuLHQpOkR0KG4rXCJbXCIrKFwib2JqZWN0XCI9PXR5cGVvZiB0JiZudWxsIT10P2U6XCJcIikrXCJdXCIsdCxyLGkpfSk7ZWxzZSBpZihyfHxcIm9iamVjdFwiIT09dyhlKSlpKG4sZSk7ZWxzZSBmb3IodCBpbiBlKUR0KG4rXCJbXCIrdCtcIl1cIixlW3RdLHIsaSl9Uy5wYXJhbT1mdW5jdGlvbihlLHQpe3ZhciBuLHI9W10saT1mdW5jdGlvbihlLHQpe3ZhciBuPW0odCk/dCgpOnQ7cltyLmxlbmd0aF09ZW5jb2RlVVJJQ29tcG9uZW50KGUpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudChudWxsPT1uP1wiXCI6bil9O2lmKG51bGw9PWUpcmV0dXJuXCJcIjtpZihBcnJheS5pc0FycmF5KGUpfHxlLmpxdWVyeSYmIVMuaXNQbGFpbk9iamVjdChlKSlTLmVhY2goZSxmdW5jdGlvbigpe2kodGhpcy5uYW1lLHRoaXMudmFsdWUpfSk7ZWxzZSBmb3IobiBpbiBlKUR0KG4sZVtuXSx0LGkpO3JldHVybiByLmpvaW4oXCImXCIpfSxTLmZuLmV4dGVuZCh7c2VyaWFsaXplOmZ1bmN0aW9uKCl7cmV0dXJuIFMucGFyYW0odGhpcy5zZXJpYWxpemVBcnJheSgpKX0sc2VyaWFsaXplQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgZT1TLnByb3AodGhpcyxcImVsZW1lbnRzXCIpO3JldHVybiBlP1MubWFrZUFycmF5KGUpOnRoaXN9KS5maWx0ZXIoZnVuY3Rpb24oKXt2YXIgZT10aGlzLnR5cGU7cmV0dXJuIHRoaXMubmFtZSYmIVModGhpcykuaXMoXCI6ZGlzYWJsZWRcIikmJk50LnRlc3QodGhpcy5ub2RlTmFtZSkmJiFBdC50ZXN0KGUpJiYodGhpcy5jaGVja2VkfHwhcGUudGVzdChlKSl9KS5tYXAoZnVuY3Rpb24oZSx0KXt2YXIgbj1TKHRoaXMpLnZhbCgpO3JldHVybiBudWxsPT1uP251bGw6QXJyYXkuaXNBcnJheShuKT9TLm1hcChuLGZ1bmN0aW9uKGUpe3JldHVybntuYW1lOnQubmFtZSx2YWx1ZTplLnJlcGxhY2Uoa3QsXCJcXHJcXG5cIil9fSk6e25hbWU6dC5uYW1lLHZhbHVlOm4ucmVwbGFjZShrdCxcIlxcclxcblwiKX19KS5nZXQoKX19KTt2YXIganQ9LyUyMC9nLHF0PS8jLiokLyxMdD0vKFs/Jl0pXz1bXiZdKi8sSHQ9L14oLio/KTpbIFxcdF0qKFteXFxyXFxuXSopJC9nbSxPdD0vXig/OkdFVHxIRUFEKSQvLFB0PS9eXFwvXFwvLyxSdD17fSxNdD17fSxJdD1cIiovXCIuY29uY2F0KFwiKlwiKSxXdD1FLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2Z1bmN0aW9uIEZ0KG8pe3JldHVybiBmdW5jdGlvbihlLHQpe1wic3RyaW5nXCIhPXR5cGVvZiBlJiYodD1lLGU9XCIqXCIpO3ZhciBuLHI9MCxpPWUudG9Mb3dlckNhc2UoKS5tYXRjaChQKXx8W107aWYobSh0KSl3aGlsZShuPWlbcisrXSlcIitcIj09PW5bMF0/KG49bi5zbGljZSgxKXx8XCIqXCIsKG9bbl09b1tuXXx8W10pLnVuc2hpZnQodCkpOihvW25dPW9bbl18fFtdKS5wdXNoKHQpfX1mdW5jdGlvbiBCdCh0LGksbyxhKXt2YXIgcz17fSx1PXQ9PT1NdDtmdW5jdGlvbiBsKGUpe3ZhciByO3JldHVybiBzW2VdPSEwLFMuZWFjaCh0W2VdfHxbXSxmdW5jdGlvbihlLHQpe3ZhciBuPXQoaSxvLGEpO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBufHx1fHxzW25dP3U/IShyPW4pOnZvaWQgMDooaS5kYXRhVHlwZXMudW5zaGlmdChuKSxsKG4pLCExKX0pLHJ9cmV0dXJuIGwoaS5kYXRhVHlwZXNbMF0pfHwhc1tcIipcIl0mJmwoXCIqXCIpfWZ1bmN0aW9uICR0KGUsdCl7dmFyIG4scixpPVMuYWpheFNldHRpbmdzLmZsYXRPcHRpb25zfHx7fTtmb3IobiBpbiB0KXZvaWQgMCE9PXRbbl0mJigoaVtuXT9lOnJ8fChyPXt9KSlbbl09dFtuXSk7cmV0dXJuIHImJlMuZXh0ZW5kKCEwLGUsciksZX1XdC5ocmVmPVR0LmhyZWYsUy5leHRlbmQoe2FjdGl2ZTowLGxhc3RNb2RpZmllZDp7fSxldGFnOnt9LGFqYXhTZXR0aW5nczp7dXJsOlR0LmhyZWYsdHlwZTpcIkdFVFwiLGlzTG9jYWw6L14oPzphYm91dHxhcHB8YXBwLXN0b3JhZ2V8ListZXh0ZW5zaW9ufGZpbGV8cmVzfHdpZGdldCk6JC8udGVzdChUdC5wcm90b2NvbCksZ2xvYmFsOiEwLHByb2Nlc3NEYXRhOiEwLGFzeW5jOiEwLGNvbnRlbnRUeXBlOlwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04XCIsYWNjZXB0czp7XCIqXCI6SXQsdGV4dDpcInRleHQvcGxhaW5cIixodG1sOlwidGV4dC9odG1sXCIseG1sOlwiYXBwbGljYXRpb24veG1sLCB0ZXh0L3htbFwiLGpzb246XCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHRcIn0sY29udGVudHM6e3htbDovXFxieG1sXFxiLyxodG1sOi9cXGJodG1sLyxqc29uOi9cXGJqc29uXFxiL30scmVzcG9uc2VGaWVsZHM6e3htbDpcInJlc3BvbnNlWE1MXCIsdGV4dDpcInJlc3BvbnNlVGV4dFwiLGpzb246XCJyZXNwb25zZUpTT05cIn0sY29udmVydGVyczp7XCIqIHRleHRcIjpTdHJpbmcsXCJ0ZXh0IGh0bWxcIjohMCxcInRleHQganNvblwiOkpTT04ucGFyc2UsXCJ0ZXh0IHhtbFwiOlMucGFyc2VYTUx9LGZsYXRPcHRpb25zOnt1cmw6ITAsY29udGV4dDohMH19LGFqYXhTZXR1cDpmdW5jdGlvbihlLHQpe3JldHVybiB0PyR0KCR0KGUsUy5hamF4U2V0dGluZ3MpLHQpOiR0KFMuYWpheFNldHRpbmdzLGUpfSxhamF4UHJlZmlsdGVyOkZ0KFJ0KSxhamF4VHJhbnNwb3J0OkZ0KE10KSxhamF4OmZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGUmJih0PWUsZT12b2lkIDApLHQ9dHx8e307dmFyIGMsZixwLG4sZCxyLGgsZyxpLG8sdj1TLmFqYXhTZXR1cCh7fSx0KSx5PXYuY29udGV4dHx8dixtPXYuY29udGV4dCYmKHkubm9kZVR5cGV8fHkuanF1ZXJ5KT9TKHkpOlMuZXZlbnQseD1TLkRlZmVycmVkKCksYj1TLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLHc9di5zdGF0dXNDb2RlfHx7fSxhPXt9LHM9e30sdT1cImNhbmNlbGVkXCIsVD17cmVhZHlTdGF0ZTowLGdldFJlc3BvbnNlSGVhZGVyOmZ1bmN0aW9uKGUpe3ZhciB0O2lmKGgpe2lmKCFuKXtuPXt9O3doaWxlKHQ9SHQuZXhlYyhwKSluW3RbMV0udG9Mb3dlckNhc2UoKStcIiBcIl09KG5bdFsxXS50b0xvd2VyQ2FzZSgpK1wiIFwiXXx8W10pLmNvbmNhdCh0WzJdKX10PW5bZS50b0xvd2VyQ2FzZSgpK1wiIFwiXX1yZXR1cm4gbnVsbD09dD9udWxsOnQuam9pbihcIiwgXCIpfSxnZXRBbGxSZXNwb25zZUhlYWRlcnM6ZnVuY3Rpb24oKXtyZXR1cm4gaD9wOm51bGx9LHNldFJlcXVlc3RIZWFkZXI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbnVsbD09aCYmKGU9c1tlLnRvTG93ZXJDYXNlKCldPXNbZS50b0xvd2VyQ2FzZSgpXXx8ZSxhW2VdPXQpLHRoaXN9LG92ZXJyaWRlTWltZVR5cGU6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWgmJih2Lm1pbWVUeXBlPWUpLHRoaXN9LHN0YXR1c0NvZGU6ZnVuY3Rpb24oZSl7dmFyIHQ7aWYoZSlpZihoKVQuYWx3YXlzKGVbVC5zdGF0dXNdKTtlbHNlIGZvcih0IGluIGUpd1t0XT1bd1t0XSxlW3RdXTtyZXR1cm4gdGhpc30sYWJvcnQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZXx8dTtyZXR1cm4gYyYmYy5hYm9ydCh0KSxsKDAsdCksdGhpc319O2lmKHgucHJvbWlzZShUKSx2LnVybD0oKGV8fHYudXJsfHxUdC5ocmVmKStcIlwiKS5yZXBsYWNlKFB0LFR0LnByb3RvY29sK1wiLy9cIiksdi50eXBlPXQubWV0aG9kfHx0LnR5cGV8fHYubWV0aG9kfHx2LnR5cGUsdi5kYXRhVHlwZXM9KHYuZGF0YVR5cGV8fFwiKlwiKS50b0xvd2VyQ2FzZSgpLm1hdGNoKFApfHxbXCJcIl0sbnVsbD09di5jcm9zc0RvbWFpbil7cj1FLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO3RyeXtyLmhyZWY9di51cmwsci5ocmVmPXIuaHJlZix2LmNyb3NzRG9tYWluPVd0LnByb3RvY29sK1wiLy9cIitXdC5ob3N0IT1yLnByb3RvY29sK1wiLy9cIityLmhvc3R9Y2F0Y2goZSl7di5jcm9zc0RvbWFpbj0hMH19aWYodi5kYXRhJiZ2LnByb2Nlc3NEYXRhJiZcInN0cmluZ1wiIT10eXBlb2Ygdi5kYXRhJiYodi5kYXRhPVMucGFyYW0odi5kYXRhLHYudHJhZGl0aW9uYWwpKSxCdChSdCx2LHQsVCksaClyZXR1cm4gVDtmb3IoaSBpbihnPVMuZXZlbnQmJnYuZ2xvYmFsKSYmMD09Uy5hY3RpdmUrKyYmUy5ldmVudC50cmlnZ2VyKFwiYWpheFN0YXJ0XCIpLHYudHlwZT12LnR5cGUudG9VcHBlckNhc2UoKSx2Lmhhc0NvbnRlbnQ9IU90LnRlc3Qodi50eXBlKSxmPXYudXJsLnJlcGxhY2UocXQsXCJcIiksdi5oYXNDb250ZW50P3YuZGF0YSYmdi5wcm9jZXNzRGF0YSYmMD09PSh2LmNvbnRlbnRUeXBlfHxcIlwiKS5pbmRleE9mKFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpJiYodi5kYXRhPXYuZGF0YS5yZXBsYWNlKGp0LFwiK1wiKSk6KG89di51cmwuc2xpY2UoZi5sZW5ndGgpLHYuZGF0YSYmKHYucHJvY2Vzc0RhdGF8fFwic3RyaW5nXCI9PXR5cGVvZiB2LmRhdGEpJiYoZis9KEV0LnRlc3QoZik/XCImXCI6XCI/XCIpK3YuZGF0YSxkZWxldGUgdi5kYXRhKSwhMT09PXYuY2FjaGUmJihmPWYucmVwbGFjZShMdCxcIiQxXCIpLG89KEV0LnRlc3QoZik/XCImXCI6XCI/XCIpK1wiXz1cIitDdC5ndWlkKysrbyksdi51cmw9ZitvKSx2LmlmTW9kaWZpZWQmJihTLmxhc3RNb2RpZmllZFtmXSYmVC5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTW9kaWZpZWQtU2luY2VcIixTLmxhc3RNb2RpZmllZFtmXSksUy5ldGFnW2ZdJiZULnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Ob25lLU1hdGNoXCIsUy5ldGFnW2ZdKSksKHYuZGF0YSYmdi5oYXNDb250ZW50JiYhMSE9PXYuY29udGVudFR5cGV8fHQuY29udGVudFR5cGUpJiZULnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIix2LmNvbnRlbnRUeXBlKSxULnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIix2LmRhdGFUeXBlc1swXSYmdi5hY2NlcHRzW3YuZGF0YVR5cGVzWzBdXT92LmFjY2VwdHNbdi5kYXRhVHlwZXNbMF1dKyhcIipcIiE9PXYuZGF0YVR5cGVzWzBdP1wiLCBcIitJdCtcIjsgcT0wLjAxXCI6XCJcIik6di5hY2NlcHRzW1wiKlwiXSksdi5oZWFkZXJzKVQuc2V0UmVxdWVzdEhlYWRlcihpLHYuaGVhZGVyc1tpXSk7aWYodi5iZWZvcmVTZW5kJiYoITE9PT12LmJlZm9yZVNlbmQuY2FsbCh5LFQsdil8fGgpKXJldHVybiBULmFib3J0KCk7aWYodT1cImFib3J0XCIsYi5hZGQodi5jb21wbGV0ZSksVC5kb25lKHYuc3VjY2VzcyksVC5mYWlsKHYuZXJyb3IpLGM9QnQoTXQsdix0LFQpKXtpZihULnJlYWR5U3RhdGU9MSxnJiZtLnRyaWdnZXIoXCJhamF4U2VuZFwiLFtULHZdKSxoKXJldHVybiBUO3YuYXN5bmMmJjA8di50aW1lb3V0JiYoZD1DLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtULmFib3J0KFwidGltZW91dFwiKX0sdi50aW1lb3V0KSk7dHJ5e2g9ITEsYy5zZW5kKGEsbCl9Y2F0Y2goZSl7aWYoaCl0aHJvdyBlO2woLTEsZSl9fWVsc2UgbCgtMSxcIk5vIFRyYW5zcG9ydFwiKTtmdW5jdGlvbiBsKGUsdCxuLHIpe3ZhciBpLG8sYSxzLHUsbD10O2h8fChoPSEwLGQmJkMuY2xlYXJUaW1lb3V0KGQpLGM9dm9pZCAwLHA9cnx8XCJcIixULnJlYWR5U3RhdGU9MDxlPzQ6MCxpPTIwMDw9ZSYmZTwzMDB8fDMwND09PWUsbiYmKHM9ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhLHM9ZS5jb250ZW50cyx1PWUuZGF0YVR5cGVzO3doaWxlKFwiKlwiPT09dVswXSl1LnNoaWZ0KCksdm9pZCAwPT09ciYmKHI9ZS5taW1lVHlwZXx8dC5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtVHlwZVwiKSk7aWYocilmb3IoaSBpbiBzKWlmKHNbaV0mJnNbaV0udGVzdChyKSl7dS51bnNoaWZ0KGkpO2JyZWFrfWlmKHVbMF1pbiBuKW89dVswXTtlbHNle2ZvcihpIGluIG4pe2lmKCF1WzBdfHxlLmNvbnZlcnRlcnNbaStcIiBcIit1WzBdXSl7bz1pO2JyZWFrfWF8fChhPWkpfW89b3x8YX1pZihvKXJldHVybiBvIT09dVswXSYmdS51bnNoaWZ0KG8pLG5bb119KHYsVCxuKSksIWkmJi0xPFMuaW5BcnJheShcInNjcmlwdFwiLHYuZGF0YVR5cGVzKSYmKHYuY29udmVydGVyc1tcInRleHQgc2NyaXB0XCJdPWZ1bmN0aW9uKCl7fSkscz1mdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGEscyx1LGw9e30sYz1lLmRhdGFUeXBlcy5zbGljZSgpO2lmKGNbMV0pZm9yKGEgaW4gZS5jb252ZXJ0ZXJzKWxbYS50b0xvd2VyQ2FzZSgpXT1lLmNvbnZlcnRlcnNbYV07bz1jLnNoaWZ0KCk7d2hpbGUobylpZihlLnJlc3BvbnNlRmllbGRzW29dJiYobltlLnJlc3BvbnNlRmllbGRzW29dXT10KSwhdSYmciYmZS5kYXRhRmlsdGVyJiYodD1lLmRhdGFGaWx0ZXIodCxlLmRhdGFUeXBlKSksdT1vLG89Yy5zaGlmdCgpKWlmKFwiKlwiPT09bylvPXU7ZWxzZSBpZihcIipcIiE9PXUmJnUhPT1vKXtpZighKGE9bFt1K1wiIFwiK29dfHxsW1wiKiBcIitvXSkpZm9yKGkgaW4gbClpZigocz1pLnNwbGl0KFwiIFwiKSlbMV09PT1vJiYoYT1sW3UrXCIgXCIrc1swXV18fGxbXCIqIFwiK3NbMF1dKSl7ITA9PT1hP2E9bFtpXTohMCE9PWxbaV0mJihvPXNbMF0sYy51bnNoaWZ0KHNbMV0pKTticmVha31pZighMCE9PWEpaWYoYSYmZVtcInRocm93c1wiXSl0PWEodCk7ZWxzZSB0cnl7dD1hKHQpfWNhdGNoKGUpe3JldHVybntzdGF0ZTpcInBhcnNlcmVycm9yXCIsZXJyb3I6YT9lOlwiTm8gY29udmVyc2lvbiBmcm9tIFwiK3UrXCIgdG8gXCIrb319fXJldHVybntzdGF0ZTpcInN1Y2Nlc3NcIixkYXRhOnR9fSh2LHMsVCxpKSxpPyh2LmlmTW9kaWZpZWQmJigodT1ULmdldFJlc3BvbnNlSGVhZGVyKFwiTGFzdC1Nb2RpZmllZFwiKSkmJihTLmxhc3RNb2RpZmllZFtmXT11KSwodT1ULmdldFJlc3BvbnNlSGVhZGVyKFwiZXRhZ1wiKSkmJihTLmV0YWdbZl09dSkpLDIwND09PWV8fFwiSEVBRFwiPT09di50eXBlP2w9XCJub2NvbnRlbnRcIjozMDQ9PT1lP2w9XCJub3Rtb2RpZmllZFwiOihsPXMuc3RhdGUsbz1zLmRhdGEsaT0hKGE9cy5lcnJvcikpKTooYT1sLCFlJiZsfHwobD1cImVycm9yXCIsZTwwJiYoZT0wKSkpLFQuc3RhdHVzPWUsVC5zdGF0dXNUZXh0PSh0fHxsKStcIlwiLGk/eC5yZXNvbHZlV2l0aCh5LFtvLGwsVF0pOngucmVqZWN0V2l0aCh5LFtULGwsYV0pLFQuc3RhdHVzQ29kZSh3KSx3PXZvaWQgMCxnJiZtLnRyaWdnZXIoaT9cImFqYXhTdWNjZXNzXCI6XCJhamF4RXJyb3JcIixbVCx2LGk/bzphXSksYi5maXJlV2l0aCh5LFtULGxdKSxnJiYobS50cmlnZ2VyKFwiYWpheENvbXBsZXRlXCIsW1Qsdl0pLC0tUy5hY3RpdmV8fFMuZXZlbnQudHJpZ2dlcihcImFqYXhTdG9wXCIpKSl9cmV0dXJuIFR9LGdldEpTT046ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBTLmdldChlLHQsbixcImpzb25cIil9LGdldFNjcmlwdDpmdW5jdGlvbihlLHQpe3JldHVybiBTLmdldChlLHZvaWQgMCx0LFwic2NyaXB0XCIpfX0pLFMuZWFjaChbXCJnZXRcIixcInBvc3RcIl0sZnVuY3Rpb24oZSxpKXtTW2ldPWZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiBtKHQpJiYocj1yfHxuLG49dCx0PXZvaWQgMCksUy5hamF4KFMuZXh0ZW5kKHt1cmw6ZSx0eXBlOmksZGF0YVR5cGU6cixkYXRhOnQsc3VjY2VzczpufSxTLmlzUGxhaW5PYmplY3QoZSkmJmUpKX19KSxTLmFqYXhQcmVmaWx0ZXIoZnVuY3Rpb24oZSl7dmFyIHQ7Zm9yKHQgaW4gZS5oZWFkZXJzKVwiY29udGVudC10eXBlXCI9PT10LnRvTG93ZXJDYXNlKCkmJihlLmNvbnRlbnRUeXBlPWUuaGVhZGVyc1t0XXx8XCJcIil9KSxTLl9ldmFsVXJsPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gUy5hamF4KHt1cmw6ZSx0eXBlOlwiR0VUXCIsZGF0YVR5cGU6XCJzY3JpcHRcIixjYWNoZTohMCxhc3luYzohMSxnbG9iYWw6ITEsY29udmVydGVyczp7XCJ0ZXh0IHNjcmlwdFwiOmZ1bmN0aW9uKCl7fX0sZGF0YUZpbHRlcjpmdW5jdGlvbihlKXtTLmdsb2JhbEV2YWwoZSx0LG4pfX0pfSxTLmZuLmV4dGVuZCh7d3JhcEFsbDpmdW5jdGlvbihlKXt2YXIgdDtyZXR1cm4gdGhpc1swXSYmKG0oZSkmJihlPWUuY2FsbCh0aGlzWzBdKSksdD1TKGUsdGhpc1swXS5vd25lckRvY3VtZW50KS5lcSgwKS5jbG9uZSghMCksdGhpc1swXS5wYXJlbnROb2RlJiZ0Lmluc2VydEJlZm9yZSh0aGlzWzBdKSx0Lm1hcChmdW5jdGlvbigpe3ZhciBlPXRoaXM7d2hpbGUoZS5maXJzdEVsZW1lbnRDaGlsZCllPWUuZmlyc3RFbGVtZW50Q2hpbGQ7cmV0dXJuIGV9KS5hcHBlbmQodGhpcykpLHRoaXN9LHdyYXBJbm5lcjpmdW5jdGlvbihuKXtyZXR1cm4gbShuKT90aGlzLmVhY2goZnVuY3Rpb24oZSl7Uyh0aGlzKS53cmFwSW5uZXIobi5jYWxsKHRoaXMsZSkpfSk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9Uyh0aGlzKSx0PWUuY29udGVudHMoKTt0Lmxlbmd0aD90LndyYXBBbGwobik6ZS5hcHBlbmQobil9KX0sd3JhcDpmdW5jdGlvbih0KXt2YXIgbj1tKHQpO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oZSl7Uyh0aGlzKS53cmFwQWxsKG4/dC5jYWxsKHRoaXMsZSk6dCl9KX0sdW53cmFwOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnBhcmVudChlKS5ub3QoXCJib2R5XCIpLmVhY2goZnVuY3Rpb24oKXtTKHRoaXMpLnJlcGxhY2VXaXRoKHRoaXMuY2hpbGROb2Rlcyl9KSx0aGlzfX0pLFMuZXhwci5wc2V1ZG9zLmhpZGRlbj1mdW5jdGlvbihlKXtyZXR1cm4hUy5leHByLnBzZXVkb3MudmlzaWJsZShlKX0sUy5leHByLnBzZXVkb3MudmlzaWJsZT1mdW5jdGlvbihlKXtyZXR1cm4hIShlLm9mZnNldFdpZHRofHxlLm9mZnNldEhlaWdodHx8ZS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCl9LFMuYWpheFNldHRpbmdzLnhocj1mdW5jdGlvbigpe3RyeXtyZXR1cm4gbmV3IEMuWE1MSHR0cFJlcXVlc3R9Y2F0Y2goZSl7fX07dmFyIF90PXswOjIwMCwxMjIzOjIwNH0senQ9Uy5hamF4U2V0dGluZ3MueGhyKCk7eS5jb3JzPSEhenQmJlwid2l0aENyZWRlbnRpYWxzXCJpbiB6dCx5LmFqYXg9enQ9ISF6dCxTLmFqYXhUcmFuc3BvcnQoZnVuY3Rpb24oaSl7dmFyIG8sYTtpZih5LmNvcnN8fHp0JiYhaS5jcm9zc0RvbWFpbilyZXR1cm57c2VuZDpmdW5jdGlvbihlLHQpe3ZhciBuLHI9aS54aHIoKTtpZihyLm9wZW4oaS50eXBlLGkudXJsLGkuYXN5bmMsaS51c2VybmFtZSxpLnBhc3N3b3JkKSxpLnhockZpZWxkcylmb3IobiBpbiBpLnhockZpZWxkcylyW25dPWkueGhyRmllbGRzW25dO2ZvcihuIGluIGkubWltZVR5cGUmJnIub3ZlcnJpZGVNaW1lVHlwZSYmci5vdmVycmlkZU1pbWVUeXBlKGkubWltZVR5cGUpLGkuY3Jvc3NEb21haW58fGVbXCJYLVJlcXVlc3RlZC1XaXRoXCJdfHwoZVtcIlgtUmVxdWVzdGVkLVdpdGhcIl09XCJYTUxIdHRwUmVxdWVzdFwiKSxlKXIuc2V0UmVxdWVzdEhlYWRlcihuLGVbbl0pO289ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKCl7byYmKG89YT1yLm9ubG9hZD1yLm9uZXJyb3I9ci5vbmFib3J0PXIub250aW1lb3V0PXIub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsXCJhYm9ydFwiPT09ZT9yLmFib3J0KCk6XCJlcnJvclwiPT09ZT9cIm51bWJlclwiIT10eXBlb2Ygci5zdGF0dXM/dCgwLFwiZXJyb3JcIik6dChyLnN0YXR1cyxyLnN0YXR1c1RleHQpOnQoX3Rbci5zdGF0dXNdfHxyLnN0YXR1cyxyLnN0YXR1c1RleHQsXCJ0ZXh0XCIhPT0oci5yZXNwb25zZVR5cGV8fFwidGV4dFwiKXx8XCJzdHJpbmdcIiE9dHlwZW9mIHIucmVzcG9uc2VUZXh0P3tiaW5hcnk6ci5yZXNwb25zZX06e3RleHQ6ci5yZXNwb25zZVRleHR9LHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpKX19LHIub25sb2FkPW8oKSxhPXIub25lcnJvcj1yLm9udGltZW91dD1vKFwiZXJyb3JcIiksdm9pZCAwIT09ci5vbmFib3J0P3Iub25hYm9ydD1hOnIub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7ND09PXIucmVhZHlTdGF0ZSYmQy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7byYmYSgpfSl9LG89byhcImFib3J0XCIpO3RyeXtyLnNlbmQoaS5oYXNDb250ZW50JiZpLmRhdGF8fG51bGwpfWNhdGNoKGUpe2lmKG8pdGhyb3cgZX19LGFib3J0OmZ1bmN0aW9uKCl7byYmbygpfX19KSxTLmFqYXhQcmVmaWx0ZXIoZnVuY3Rpb24oZSl7ZS5jcm9zc0RvbWFpbiYmKGUuY29udGVudHMuc2NyaXB0PSExKX0pLFMuYWpheFNldHVwKHthY2NlcHRzOntzY3JpcHQ6XCJ0ZXh0L2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2VjbWFzY3JpcHQsIGFwcGxpY2F0aW9uL3gtZWNtYXNjcmlwdFwifSxjb250ZW50czp7c2NyaXB0Oi9cXGIoPzpqYXZhfGVjbWEpc2NyaXB0XFxiL30sY29udmVydGVyczp7XCJ0ZXh0IHNjcmlwdFwiOmZ1bmN0aW9uKGUpe3JldHVybiBTLmdsb2JhbEV2YWwoZSksZX19fSksUy5hamF4UHJlZmlsdGVyKFwic2NyaXB0XCIsZnVuY3Rpb24oZSl7dm9pZCAwPT09ZS5jYWNoZSYmKGUuY2FjaGU9ITEpLGUuY3Jvc3NEb21haW4mJihlLnR5cGU9XCJHRVRcIil9KSxTLmFqYXhUcmFuc3BvcnQoXCJzY3JpcHRcIixmdW5jdGlvbihuKXt2YXIgcixpO2lmKG4uY3Jvc3NEb21haW58fG4uc2NyaXB0QXR0cnMpcmV0dXJue3NlbmQ6ZnVuY3Rpb24oZSx0KXtyPVMoXCI8c2NyaXB0PlwiKS5hdHRyKG4uc2NyaXB0QXR0cnN8fHt9KS5wcm9wKHtjaGFyc2V0Om4uc2NyaXB0Q2hhcnNldCxzcmM6bi51cmx9KS5vbihcImxvYWQgZXJyb3JcIixpPWZ1bmN0aW9uKGUpe3IucmVtb3ZlKCksaT1udWxsLGUmJnQoXCJlcnJvclwiPT09ZS50eXBlPzQwNDoyMDAsZS50eXBlKX0pLEUuaGVhZC5hcHBlbmRDaGlsZChyWzBdKX0sYWJvcnQ6ZnVuY3Rpb24oKXtpJiZpKCl9fX0pO3ZhciBVdCxYdD1bXSxWdD0vKD0pXFw/KD89JnwkKXxcXD9cXD8vO1MuYWpheFNldHVwKHtqc29ucDpcImNhbGxiYWNrXCIsanNvbnBDYWxsYmFjazpmdW5jdGlvbigpe3ZhciBlPVh0LnBvcCgpfHxTLmV4cGFuZG8rXCJfXCIrQ3QuZ3VpZCsrO3JldHVybiB0aGlzW2VdPSEwLGV9fSksUy5hamF4UHJlZmlsdGVyKFwianNvbiBqc29ucFwiLGZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYT0hMSE9PWUuanNvbnAmJihWdC50ZXN0KGUudXJsKT9cInVybFwiOlwic3RyaW5nXCI9PXR5cGVvZiBlLmRhdGEmJjA9PT0oZS5jb250ZW50VHlwZXx8XCJcIikuaW5kZXhPZihcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSYmVnQudGVzdChlLmRhdGEpJiZcImRhdGFcIik7aWYoYXx8XCJqc29ucFwiPT09ZS5kYXRhVHlwZXNbMF0pcmV0dXJuIHI9ZS5qc29ucENhbGxiYWNrPW0oZS5qc29ucENhbGxiYWNrKT9lLmpzb25wQ2FsbGJhY2soKTplLmpzb25wQ2FsbGJhY2ssYT9lW2FdPWVbYV0ucmVwbGFjZShWdCxcIiQxXCIrcik6ITEhPT1lLmpzb25wJiYoZS51cmwrPShFdC50ZXN0KGUudXJsKT9cIiZcIjpcIj9cIikrZS5qc29ucCtcIj1cIityKSxlLmNvbnZlcnRlcnNbXCJzY3JpcHQganNvblwiXT1mdW5jdGlvbigpe3JldHVybiBvfHxTLmVycm9yKHIrXCIgd2FzIG5vdCBjYWxsZWRcIiksb1swXX0sZS5kYXRhVHlwZXNbMF09XCJqc29uXCIsaT1DW3JdLENbcl09ZnVuY3Rpb24oKXtvPWFyZ3VtZW50c30sbi5hbHdheXMoZnVuY3Rpb24oKXt2b2lkIDA9PT1pP1MoQykucmVtb3ZlUHJvcChyKTpDW3JdPWksZVtyXSYmKGUuanNvbnBDYWxsYmFjaz10Lmpzb25wQ2FsbGJhY2ssWHQucHVzaChyKSksbyYmbShpKSYmaShvWzBdKSxvPWk9dm9pZCAwfSksXCJzY3JpcHRcIn0pLHkuY3JlYXRlSFRNTERvY3VtZW50PSgoVXQ9RS5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIikuYm9keSkuaW5uZXJIVE1MPVwiPGZvcm0+PC9mb3JtPjxmb3JtPjwvZm9ybT5cIiwyPT09VXQuY2hpbGROb2Rlcy5sZW5ndGgpLFMucGFyc2VIVE1MPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgZT9bXTooXCJib29sZWFuXCI9PXR5cGVvZiB0JiYobj10LHQ9ITEpLHR8fCh5LmNyZWF0ZUhUTUxEb2N1bWVudD8oKHI9KHQ9RS5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIikpLmNyZWF0ZUVsZW1lbnQoXCJiYXNlXCIpKS5ocmVmPUUubG9jYXRpb24uaHJlZix0LmhlYWQuYXBwZW5kQ2hpbGQocikpOnQ9RSksbz0hbiYmW10sKGk9Ti5leGVjKGUpKT9bdC5jcmVhdGVFbGVtZW50KGlbMV0pXTooaT14ZShbZV0sdCxvKSxvJiZvLmxlbmd0aCYmUyhvKS5yZW1vdmUoKSxTLm1lcmdlKFtdLGkuY2hpbGROb2RlcykpKTt2YXIgcixpLG99LFMuZm4ubG9hZD1mdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGE9dGhpcyxzPWUuaW5kZXhPZihcIiBcIik7cmV0dXJuLTE8cyYmKHI9dnQoZS5zbGljZShzKSksZT1lLnNsaWNlKDAscykpLG0odCk/KG49dCx0PXZvaWQgMCk6dCYmXCJvYmplY3RcIj09dHlwZW9mIHQmJihpPVwiUE9TVFwiKSwwPGEubGVuZ3RoJiZTLmFqYXgoe3VybDplLHR5cGU6aXx8XCJHRVRcIixkYXRhVHlwZTpcImh0bWxcIixkYXRhOnR9KS5kb25lKGZ1bmN0aW9uKGUpe289YXJndW1lbnRzLGEuaHRtbChyP1MoXCI8ZGl2PlwiKS5hcHBlbmQoUy5wYXJzZUhUTUwoZSkpLmZpbmQocik6ZSl9KS5hbHdheXMobiYmZnVuY3Rpb24oZSx0KXthLmVhY2goZnVuY3Rpb24oKXtuLmFwcGx5KHRoaXMsb3x8W2UucmVzcG9uc2VUZXh0LHQsZV0pfSl9KSx0aGlzfSxTLmV4cHIucHNldWRvcy5hbmltYXRlZD1mdW5jdGlvbih0KXtyZXR1cm4gUy5ncmVwKFMudGltZXJzLGZ1bmN0aW9uKGUpe3JldHVybiB0PT09ZS5lbGVtfSkubGVuZ3RofSxTLm9mZnNldD17c2V0T2Zmc2V0OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYSxzLHUsbD1TLmNzcyhlLFwicG9zaXRpb25cIiksYz1TKGUpLGY9e307XCJzdGF0aWNcIj09PWwmJihlLnN0eWxlLnBvc2l0aW9uPVwicmVsYXRpdmVcIikscz1jLm9mZnNldCgpLG89Uy5jc3MoZSxcInRvcFwiKSx1PVMuY3NzKGUsXCJsZWZ0XCIpLChcImFic29sdXRlXCI9PT1sfHxcImZpeGVkXCI9PT1sKSYmLTE8KG8rdSkuaW5kZXhPZihcImF1dG9cIik/KGE9KHI9Yy5wb3NpdGlvbigpKS50b3AsaT1yLmxlZnQpOihhPXBhcnNlRmxvYXQobyl8fDAsaT1wYXJzZUZsb2F0KHUpfHwwKSxtKHQpJiYodD10LmNhbGwoZSxuLFMuZXh0ZW5kKHt9LHMpKSksbnVsbCE9dC50b3AmJihmLnRvcD10LnRvcC1zLnRvcCthKSxudWxsIT10LmxlZnQmJihmLmxlZnQ9dC5sZWZ0LXMubGVmdCtpKSxcInVzaW5nXCJpbiB0P3QudXNpbmcuY2FsbChlLGYpOihcIm51bWJlclwiPT10eXBlb2YgZi50b3AmJihmLnRvcCs9XCJweFwiKSxcIm51bWJlclwiPT10eXBlb2YgZi5sZWZ0JiYoZi5sZWZ0Kz1cInB4XCIpLGMuY3NzKGYpKX19LFMuZm4uZXh0ZW5kKHtvZmZzZXQ6ZnVuY3Rpb24odCl7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdm9pZCAwPT09dD90aGlzOnRoaXMuZWFjaChmdW5jdGlvbihlKXtTLm9mZnNldC5zZXRPZmZzZXQodGhpcyx0LGUpfSk7dmFyIGUsbixyPXRoaXNbMF07cmV0dXJuIHI/ci5nZXRDbGllbnRSZWN0cygpLmxlbmd0aD8oZT1yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLG49ci5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LHt0b3A6ZS50b3Arbi5wYWdlWU9mZnNldCxsZWZ0OmUubGVmdCtuLnBhZ2VYT2Zmc2V0fSk6e3RvcDowLGxlZnQ6MH06dm9pZCAwfSxwb3NpdGlvbjpmdW5jdGlvbigpe2lmKHRoaXNbMF0pe3ZhciBlLHQsbixyPXRoaXNbMF0saT17dG9wOjAsbGVmdDowfTtpZihcImZpeGVkXCI9PT1TLmNzcyhyLFwicG9zaXRpb25cIikpdD1yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO2Vsc2V7dD10aGlzLm9mZnNldCgpLG49ci5vd25lckRvY3VtZW50LGU9ci5vZmZzZXRQYXJlbnR8fG4uZG9jdW1lbnRFbGVtZW50O3doaWxlKGUmJihlPT09bi5ib2R5fHxlPT09bi5kb2N1bWVudEVsZW1lbnQpJiZcInN0YXRpY1wiPT09Uy5jc3MoZSxcInBvc2l0aW9uXCIpKWU9ZS5wYXJlbnROb2RlO2UmJmUhPT1yJiYxPT09ZS5ub2RlVHlwZSYmKChpPVMoZSkub2Zmc2V0KCkpLnRvcCs9Uy5jc3MoZSxcImJvcmRlclRvcFdpZHRoXCIsITApLGkubGVmdCs9Uy5jc3MoZSxcImJvcmRlckxlZnRXaWR0aFwiLCEwKSl9cmV0dXJue3RvcDp0LnRvcC1pLnRvcC1TLmNzcyhyLFwibWFyZ2luVG9wXCIsITApLGxlZnQ6dC5sZWZ0LWkubGVmdC1TLmNzcyhyLFwibWFyZ2luTGVmdFwiLCEwKX19fSxvZmZzZXRQYXJlbnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgZT10aGlzLm9mZnNldFBhcmVudDt3aGlsZShlJiZcInN0YXRpY1wiPT09Uy5jc3MoZSxcInBvc2l0aW9uXCIpKWU9ZS5vZmZzZXRQYXJlbnQ7cmV0dXJuIGV8fHJlfSl9fSksUy5lYWNoKHtzY3JvbGxMZWZ0OlwicGFnZVhPZmZzZXRcIixzY3JvbGxUb3A6XCJwYWdlWU9mZnNldFwifSxmdW5jdGlvbih0LGkpe3ZhciBvPVwicGFnZVlPZmZzZXRcIj09PWk7Uy5mblt0XT1mdW5jdGlvbihlKXtyZXR1cm4gJCh0aGlzLGZ1bmN0aW9uKGUsdCxuKXt2YXIgcjtpZih4KGUpP3I9ZTo5PT09ZS5ub2RlVHlwZSYmKHI9ZS5kZWZhdWx0Vmlldyksdm9pZCAwPT09bilyZXR1cm4gcj9yW2ldOmVbdF07cj9yLnNjcm9sbFRvKG8/ci5wYWdlWE9mZnNldDpuLG8/bjpyLnBhZ2VZT2Zmc2V0KTplW3RdPW59LHQsZSxhcmd1bWVudHMubGVuZ3RoKX19KSxTLmVhY2goW1widG9wXCIsXCJsZWZ0XCJdLGZ1bmN0aW9uKGUsbil7Uy5jc3NIb29rc1tuXT0kZSh5LnBpeGVsUG9zaXRpb24sZnVuY3Rpb24oZSx0KXtpZih0KXJldHVybiB0PUJlKGUsbiksTWUudGVzdCh0KT9TKGUpLnBvc2l0aW9uKClbbl0rXCJweFwiOnR9KX0pLFMuZWFjaCh7SGVpZ2h0OlwiaGVpZ2h0XCIsV2lkdGg6XCJ3aWR0aFwifSxmdW5jdGlvbihhLHMpe1MuZWFjaCh7cGFkZGluZzpcImlubmVyXCIrYSxjb250ZW50OnMsXCJcIjpcIm91dGVyXCIrYX0sZnVuY3Rpb24ocixvKXtTLmZuW29dPWZ1bmN0aW9uKGUsdCl7dmFyIG49YXJndW1lbnRzLmxlbmd0aCYmKHJ8fFwiYm9vbGVhblwiIT10eXBlb2YgZSksaT1yfHwoITA9PT1lfHwhMD09PXQ/XCJtYXJnaW5cIjpcImJvcmRlclwiKTtyZXR1cm4gJCh0aGlzLGZ1bmN0aW9uKGUsdCxuKXt2YXIgcjtyZXR1cm4geChlKT8wPT09by5pbmRleE9mKFwib3V0ZXJcIik/ZVtcImlubmVyXCIrYV06ZS5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbXCJjbGllbnRcIithXTo5PT09ZS5ub2RlVHlwZT8ocj1lLmRvY3VtZW50RWxlbWVudCxNYXRoLm1heChlLmJvZHlbXCJzY3JvbGxcIithXSxyW1wic2Nyb2xsXCIrYV0sZS5ib2R5W1wib2Zmc2V0XCIrYV0scltcIm9mZnNldFwiK2FdLHJbXCJjbGllbnRcIithXSkpOnZvaWQgMD09PW4/Uy5jc3MoZSx0LGkpOlMuc3R5bGUoZSx0LG4saSl9LHMsbj9lOnZvaWQgMCxuKX19KX0pLFMuZWFjaChbXCJhamF4U3RhcnRcIixcImFqYXhTdG9wXCIsXCJhamF4Q29tcGxldGVcIixcImFqYXhFcnJvclwiLFwiYWpheFN1Y2Nlc3NcIixcImFqYXhTZW5kXCJdLGZ1bmN0aW9uKGUsdCl7Uy5mblt0XT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5vbih0LGUpfX0pLFMuZm4uZXh0ZW5kKHtiaW5kOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdGhpcy5vbihlLG51bGwsdCxuKX0sdW5iaW5kOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMub2ZmKGUsbnVsbCx0KX0sZGVsZWdhdGU6ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIHRoaXMub24odCxlLG4scil9LHVuZGVsZWdhdGU6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiAxPT09YXJndW1lbnRzLmxlbmd0aD90aGlzLm9mZihlLFwiKipcIik6dGhpcy5vZmYodCxlfHxcIioqXCIsbil9LGhvdmVyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMubW91c2VlbnRlcihlKS5tb3VzZWxlYXZlKHR8fGUpfX0pLFMuZWFjaChcImJsdXIgZm9jdXMgZm9jdXNpbiBmb2N1c291dCByZXNpemUgc2Nyb2xsIGNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZXVwIG1vdXNlbW92ZSBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlIGNoYW5nZSBzZWxlY3Qgc3VibWl0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgY29udGV4dG1lbnVcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oZSxuKXtTLmZuW25dPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIDA8YXJndW1lbnRzLmxlbmd0aD90aGlzLm9uKG4sbnVsbCxlLHQpOnRoaXMudHJpZ2dlcihuKX19KTt2YXIgR3Q9L15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nO1MucHJveHk9ZnVuY3Rpb24oZSx0KXt2YXIgbixyLGk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQmJihuPWVbdF0sdD1lLGU9biksbShlKSlyZXR1cm4gcj1zLmNhbGwoYXJndW1lbnRzLDIpLChpPWZ1bmN0aW9uKCl7cmV0dXJuIGUuYXBwbHkodHx8dGhpcyxyLmNvbmNhdChzLmNhbGwoYXJndW1lbnRzKSkpfSkuZ3VpZD1lLmd1aWQ9ZS5ndWlkfHxTLmd1aWQrKyxpfSxTLmhvbGRSZWFkeT1mdW5jdGlvbihlKXtlP1MucmVhZHlXYWl0Kys6Uy5yZWFkeSghMCl9LFMuaXNBcnJheT1BcnJheS5pc0FycmF5LFMucGFyc2VKU09OPUpTT04ucGFyc2UsUy5ub2RlTmFtZT1BLFMuaXNGdW5jdGlvbj1tLFMuaXNXaW5kb3c9eCxTLmNhbWVsQ2FzZT1YLFMudHlwZT13LFMubm93PURhdGUubm93LFMuaXNOdW1lcmljPWZ1bmN0aW9uKGUpe3ZhciB0PVMudHlwZShlKTtyZXR1cm4oXCJudW1iZXJcIj09PXR8fFwic3RyaW5nXCI9PT10KSYmIWlzTmFOKGUtcGFyc2VGbG9hdChlKSl9LFMudHJpbT1mdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT9cIlwiOihlK1wiXCIpLnJlcGxhY2UoR3QsXCJcIil9LFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZCYmZGVmaW5lKFwianF1ZXJ5XCIsW10sZnVuY3Rpb24oKXtyZXR1cm4gU30pO3ZhciBZdD1DLmpRdWVyeSxRdD1DLiQ7cmV0dXJuIFMubm9Db25mbGljdD1mdW5jdGlvbihlKXtyZXR1cm4gQy4kPT09UyYmKEMuJD1RdCksZSYmQy5qUXVlcnk9PT1TJiYoQy5qUXVlcnk9WXQpLFN9LFwidW5kZWZpbmVkXCI9PXR5cGVvZiBlJiYoQy5qUXVlcnk9Qy4kPVMpLFN9KTtcbi8vIERPTS5ldmVudC5tb3ZlXG4vL1xuLy8gMi4wLjBcbi8vXG4vLyBTdGVwaGVuIEJhbmRcbi8vXG4vLyBUcmlnZ2VycyAnbW92ZXN0YXJ0JywgJ21vdmUnIGFuZCAnbW92ZWVuZCcgZXZlbnRzIGFmdGVyXG4vLyBtb3VzZW1vdmVzIGZvbGxvd2luZyBhIG1vdXNlZG93biBjcm9zcyBhIGRpc3RhbmNlIHRocmVzaG9sZCxcbi8vIHNpbWlsYXIgdG8gdGhlIG5hdGl2ZSAnZHJhZ3N0YXJ0JywgJ2RyYWcnIGFuZCAnZHJhZ2VuZCcgZXZlbnRzLlxuLy8gTW92ZSBldmVudHMgYXJlIHRocm90dGxlZCB0byBhbmltYXRpb24gZnJhbWVzLiBNb3ZlIGV2ZW50IG9iamVjdHNcbi8vIGhhdmUgdGhlIHByb3BlcnRpZXM6XG4vL1xuLy8gcGFnZVg6XG4vLyBwYWdlWTogICAgIFBhZ2UgY29vcmRpbmF0ZXMgb2YgcG9pbnRlci5cbi8vIHN0YXJ0WDpcbi8vIHN0YXJ0WTogICAgUGFnZSBjb29yZGluYXRlcyBvZiBwb2ludGVyIGF0IG1vdmVzdGFydC5cbi8vIGRpc3RYOlxuLy8gZGlzdFk6ICAgICBEaXN0YW5jZSB0aGUgcG9pbnRlciBoYXMgbW92ZWQgc2luY2UgbW92ZXN0YXJ0LlxuLy8gZGVsdGFYOlxuLy8gZGVsdGFZOiAgICBEaXN0YW5jZSB0aGUgZmluZ2VyIGhhcyBtb3ZlZCBzaW5jZSBsYXN0IGV2ZW50LlxuLy8gdmVsb2NpdHlYOlxuLy8gdmVsb2NpdHlZOiBBdmVyYWdlIHZlbG9jaXR5IG92ZXIgbGFzdCBmZXcgZXZlbnRzLlxuXG5cbihmdW5jdGlvbihmbikge1xuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShbXSwgZm4pO1xuICAgIH0gZWxzZSBpZiAoKHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIgJiYgbW9kdWxlICE9PSBudWxsKSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZuO1xuXHR9IGVsc2Uge1xuXHRcdGZuKCk7XG5cdH1cbn0pKGZ1bmN0aW9uKCl7XG5cdHZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IHdpbmRvdy5qUXVlcnkgJiYgalF1ZXJ5LmV4dGVuZDtcblxuXHQvLyBOdW1iZXIgb2YgcGl4ZWxzIGEgcHJlc3NlZCBwb2ludGVyIHRyYXZlbHMgYmVmb3JlIG1vdmVzdGFydFxuXHQvLyBldmVudCBpcyBmaXJlZC5cblx0dmFyIHRocmVzaG9sZCA9IDg7XG5cblx0Ly8gU2hpbSBmb3IgcmVxdWVzdEFuaW1hdGlvbkZyYW1lLCBmYWxsaW5nIGJhY2sgdG8gdGltZXIuIFNlZTpcblx0Ly8gc2VlIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG5cdHZhciByZXF1ZXN0RnJhbWUgPSAoZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuXHRcdFx0d2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuXHRcdFx0d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuXHRcdFx0d2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcblx0XHRcdHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuXHRcdFx0ZnVuY3Rpb24oZm4sIGVsZW1lbnQpe1xuXHRcdFx0XHRyZXR1cm4gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRmbigpO1xuXHRcdFx0XHR9LCAyNSk7XG5cdFx0XHR9XG5cdFx0KTtcblx0fSkoKTtcblxuXHQvLyBTaGltIGZvciBjdXN0b21FdmVudFxuXHQvLyBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0N1c3RvbUV2ZW50L0N1c3RvbUV2ZW50I1BvbHlmaWxsXG5cdChmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKCB0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50ID09PSBcImZ1bmN0aW9uXCIgKSByZXR1cm4gZmFsc2U7XG5cdFx0ZnVuY3Rpb24gQ3VzdG9tRXZlbnQgKCBldmVudCwgcGFyYW1zICkge1xuXHRcdFx0cGFyYW1zID0gcGFyYW1zIHx8IHsgYnViYmxlczogZmFsc2UsIGNhbmNlbGFibGU6IGZhbHNlLCBkZXRhaWw6IHVuZGVmaW5lZCB9O1xuXHRcdFx0dmFyIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCAnQ3VzdG9tRXZlbnQnICk7XG5cdFx0XHRldnQuaW5pdEN1c3RvbUV2ZW50KCBldmVudCwgcGFyYW1zLmJ1YmJsZXMsIHBhcmFtcy5jYW5jZWxhYmxlLCBwYXJhbXMuZGV0YWlsICk7XG5cdFx0XHRyZXR1cm4gZXZ0O1xuXHRcdH1cblxuXHRcdEN1c3RvbUV2ZW50LnByb3RvdHlwZSA9IHdpbmRvdy5FdmVudC5wcm90b3R5cGU7XG5cdFx0d2luZG93LkN1c3RvbUV2ZW50ID0gQ3VzdG9tRXZlbnQ7XG5cdH0pKCk7XG5cblx0dmFyIGlnbm9yZVRhZ3MgPSB7XG5cdFx0XHR0ZXh0YXJlYTogdHJ1ZSxcblx0XHRcdGlucHV0OiB0cnVlLFxuXHRcdFx0c2VsZWN0OiB0cnVlLFxuXHRcdFx0YnV0dG9uOiB0cnVlXG5cdFx0fTtcblxuXHR2YXIgbW91c2VldmVudHMgPSB7XG5cdFx0bW92ZTogICAnbW91c2Vtb3ZlJyxcblx0XHRjYW5jZWw6ICdtb3VzZXVwIGRyYWdzdGFydCcsXG5cdFx0ZW5kOiAgICAnbW91c2V1cCdcblx0fTtcblxuXHR2YXIgdG91Y2hldmVudHMgPSB7XG5cdFx0bW92ZTogICAndG91Y2htb3ZlJyxcblx0XHRjYW5jZWw6ICd0b3VjaGVuZCcsXG5cdFx0ZW5kOiAgICAndG91Y2hlbmQnXG5cdH07XG5cblx0dmFyIHJzcGFjZXMgPSAvXFxzKy87XG5cblxuXHQvLyBET00gRXZlbnRzXG5cblx0dmFyIGV2ZW50T3B0aW9ucyA9IHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSB9O1xuXG5cdHZhciBldmVudHNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woJ2V2ZW50cycpIDoge307XG5cblx0ZnVuY3Rpb24gY3JlYXRlRXZlbnQodHlwZSkge1xuXHRcdHJldHVybiBuZXcgQ3VzdG9tRXZlbnQodHlwZSwgZXZlbnRPcHRpb25zKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldEV2ZW50cyhub2RlKSB7XG5cdFx0cmV0dXJuIG5vZGVbZXZlbnRzU3ltYm9sXSB8fCAobm9kZVtldmVudHNTeW1ib2xdID0ge30pO1xuXHR9XG5cblx0ZnVuY3Rpb24gb24obm9kZSwgdHlwZXMsIGZuLCBkYXRhLCBzZWxlY3Rvcikge1xuXHRcdHR5cGVzID0gdHlwZXMuc3BsaXQocnNwYWNlcyk7XG5cblx0XHR2YXIgZXZlbnRzID0gZ2V0RXZlbnRzKG5vZGUpO1xuXHRcdHZhciBpID0gdHlwZXMubGVuZ3RoO1xuXHRcdHZhciBoYW5kbGVycywgdHlwZTtcblxuXHRcdGZ1bmN0aW9uIGhhbmRsZXIoZSkgeyBmbihlLCBkYXRhKTsgfVxuXG5cdFx0d2hpbGUgKGktLSkge1xuXHRcdFx0dHlwZSA9IHR5cGVzW2ldO1xuXHRcdFx0aGFuZGxlcnMgPSBldmVudHNbdHlwZV0gfHwgKGV2ZW50c1t0eXBlXSA9IFtdKTtcblx0XHRcdGhhbmRsZXJzLnB1c2goW2ZuLCBoYW5kbGVyXSk7XG5cdFx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlcik7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gb2ZmKG5vZGUsIHR5cGVzLCBmbiwgc2VsZWN0b3IpIHtcblx0XHR0eXBlcyA9IHR5cGVzLnNwbGl0KHJzcGFjZXMpO1xuXG5cdFx0dmFyIGV2ZW50cyA9IGdldEV2ZW50cyhub2RlKTtcblx0XHR2YXIgaSA9IHR5cGVzLmxlbmd0aDtcblx0XHR2YXIgdHlwZSwgaGFuZGxlcnMsIGs7XG5cblx0XHRpZiAoIWV2ZW50cykgeyByZXR1cm47IH1cblxuXHRcdHdoaWxlIChpLS0pIHtcblx0XHRcdHR5cGUgPSB0eXBlc1tpXTtcblx0XHRcdGhhbmRsZXJzID0gZXZlbnRzW3R5cGVdO1xuXHRcdFx0aWYgKCFoYW5kbGVycykgeyBjb250aW51ZTsgfVxuXHRcdFx0ayA9IGhhbmRsZXJzLmxlbmd0aDtcblx0XHRcdHdoaWxlIChrLS0pIHtcblx0XHRcdFx0aWYgKGhhbmRsZXJzW2tdWzBdID09PSBmbikge1xuXHRcdFx0XHRcdG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyc1trXVsxXSk7XG5cdFx0XHRcdFx0aGFuZGxlcnMuc3BsaWNlKGssIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gdHJpZ2dlcihub2RlLCB0eXBlLCBwcm9wZXJ0aWVzKSB7XG5cdFx0Ly8gRG9uJ3QgY2FjaGUgZXZlbnRzLiBJdCBwcmV2ZW50cyB5b3UgZnJvbSB0cmlnZ2VyaW5nIGFuIGV2ZW50IG9mIGFcblx0XHQvLyBnaXZlbiB0eXBlIGZyb20gaW5zaWRlIHRoZSBoYW5kbGVyIG9mIGFub3RoZXIgZXZlbnQgb2YgdGhhdCB0eXBlLlxuXHRcdHZhciBldmVudCA9IGNyZWF0ZUV2ZW50KHR5cGUpO1xuXHRcdGlmIChwcm9wZXJ0aWVzKSB7IGFzc2lnbihldmVudCwgcHJvcGVydGllcyk7IH1cblx0XHRub2RlLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXHR9XG5cblxuXHQvLyBDb25zdHJ1Y3RvcnNcblxuXHRmdW5jdGlvbiBUaW1lcihmbil7XG5cdFx0dmFyIGNhbGxiYWNrID0gZm4sXG5cdFx0ICAgIGFjdGl2ZSA9IGZhbHNlLFxuXHRcdCAgICBydW5uaW5nID0gZmFsc2U7XG5cblx0XHRmdW5jdGlvbiB0cmlnZ2VyKHRpbWUpIHtcblx0XHRcdGlmIChhY3RpdmUpe1xuXHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0XHRyZXF1ZXN0RnJhbWUodHJpZ2dlcik7XG5cdFx0XHRcdHJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0XHRhY3RpdmUgPSBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRydW5uaW5nID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5raWNrID0gZnVuY3Rpb24oZm4pIHtcblx0XHRcdGFjdGl2ZSA9IHRydWU7XG5cdFx0XHRpZiAoIXJ1bm5pbmcpIHsgdHJpZ2dlcigpOyB9XG5cdFx0fTtcblxuXHRcdHRoaXMuZW5kID0gZnVuY3Rpb24oZm4pIHtcblx0XHRcdHZhciBjYiA9IGNhbGxiYWNrO1xuXG5cdFx0XHRpZiAoIWZuKSB7IHJldHVybjsgfVxuXG5cdFx0XHQvLyBJZiB0aGUgdGltZXIgaXMgbm90IHJ1bm5pbmcsIHNpbXBseSBjYWxsIHRoZSBlbmQgY2FsbGJhY2suXG5cdFx0XHRpZiAoIXJ1bm5pbmcpIHtcblx0XHRcdFx0Zm4oKTtcblx0XHRcdH1cblx0XHRcdC8vIElmIHRoZSB0aW1lciBpcyBydW5uaW5nLCBhbmQgaGFzIGJlZW4ga2lja2VkIGxhdGVseSwgdGhlblxuXHRcdFx0Ly8gcXVldWUgdXAgdGhlIGN1cnJlbnQgY2FsbGJhY2sgYW5kIHRoZSBlbmQgY2FsbGJhY2ssIG90aGVyd2lzZVxuXHRcdFx0Ly8ganVzdCB0aGUgZW5kIGNhbGxiYWNrLlxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGNhbGxiYWNrID0gYWN0aXZlID9cblx0XHRcdFx0XHRmdW5jdGlvbigpeyBjYigpOyBmbigpOyB9IDpcblx0XHRcdFx0XHRmbiA7XG5cblx0XHRcdFx0YWN0aXZlID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG5cblxuXHQvLyBGdW5jdGlvbnNcblxuXHRmdW5jdGlvbiBub29wKCkge31cblxuXHRmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gaXNJZ25vcmVUYWcoZSkge1xuXHRcdHJldHVybiAhIWlnbm9yZVRhZ3NbZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpXTtcblx0fVxuXG5cdGZ1bmN0aW9uIGlzUHJpbWFyeUJ1dHRvbihlKSB7XG5cdFx0Ly8gSWdub3JlIG1vdXNlZG93bnMgb24gYW55IGJ1dHRvbiBvdGhlciB0aGFuIHRoZSBsZWZ0IChvciBwcmltYXJ5KVxuXHRcdC8vIG1vdXNlIGJ1dHRvbiwgb3Igd2hlbiBhIG1vZGlmaWVyIGtleSBpcyBwcmVzc2VkLlxuXHRcdHJldHVybiAoZS53aGljaCA9PT0gMSAmJiAhZS5jdHJsS2V5ICYmICFlLmFsdEtleSk7XG5cdH1cblxuXHRmdW5jdGlvbiBpZGVudGlmaWVkVG91Y2godG91Y2hMaXN0LCBpZCkge1xuXHRcdHZhciBpLCBsO1xuXG5cdFx0aWYgKHRvdWNoTGlzdC5pZGVudGlmaWVkVG91Y2gpIHtcblx0XHRcdHJldHVybiB0b3VjaExpc3QuaWRlbnRpZmllZFRvdWNoKGlkKTtcblx0XHR9XG5cblx0XHQvLyB0b3VjaExpc3QuaWRlbnRpZmllZFRvdWNoKCkgZG9lcyBub3QgZXhpc3QgaW5cblx0XHQvLyB3ZWJraXQgeWV04oCmIHdlIG11c3QgZG8gdGhlIHNlYXJjaCBvdXJzZWx2ZXMuLi5cblxuXHRcdGkgPSAtMTtcblx0XHRsID0gdG91Y2hMaXN0Lmxlbmd0aDtcblxuXHRcdHdoaWxlICgrK2kgPCBsKSB7XG5cdFx0XHRpZiAodG91Y2hMaXN0W2ldLmlkZW50aWZpZXIgPT09IGlkKSB7XG5cdFx0XHRcdHJldHVybiB0b3VjaExpc3RbaV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gY2hhbmdlZFRvdWNoKGUsIGRhdGEpIHtcblx0XHR2YXIgdG91Y2ggPSBpZGVudGlmaWVkVG91Y2goZS5jaGFuZ2VkVG91Y2hlcywgZGF0YS5pZGVudGlmaWVyKTtcblxuXHRcdC8vIFRoaXMgaXNuJ3QgdGhlIHRvdWNoIHlvdSdyZSBsb29raW5nIGZvci5cblx0XHRpZiAoIXRvdWNoKSB7IHJldHVybjsgfVxuXG5cdFx0Ly8gQ2hyb21lIEFuZHJvaWQgKGF0IGxlYXN0KSBpbmNsdWRlcyB0b3VjaGVzIHRoYXQgaGF2ZSBub3Rcblx0XHQvLyBjaGFuZ2VkIGluIGUuY2hhbmdlZFRvdWNoZXMuIFRoYXQncyBhIGJpdCBhbm5veWluZy4gQ2hlY2tcblx0XHQvLyB0aGF0IHRoaXMgdG91Y2ggaGFzIGNoYW5nZWQuXG5cdFx0aWYgKHRvdWNoLnBhZ2VYID09PSBkYXRhLnBhZ2VYICYmIHRvdWNoLnBhZ2VZID09PSBkYXRhLnBhZ2VZKSB7IHJldHVybjsgfVxuXG5cdFx0cmV0dXJuIHRvdWNoO1xuXHR9XG5cblxuXHQvLyBIYW5kbGVycyB0aGF0IGRlY2lkZSB3aGVuIHRoZSBmaXJzdCBtb3Zlc3RhcnQgaXMgdHJpZ2dlcmVkXG5cblx0ZnVuY3Rpb24gbW91c2Vkb3duKGUpe1xuXHRcdC8vIElnbm9yZSBub24tcHJpbWFyeSBidXR0b25zXG5cdFx0aWYgKCFpc1ByaW1hcnlCdXR0b24oZSkpIHsgcmV0dXJuOyB9XG5cblx0XHQvLyBJZ25vcmUgZm9ybSBhbmQgaW50ZXJhY3RpdmUgZWxlbWVudHNcblx0XHRpZiAoaXNJZ25vcmVUYWcoZSkpIHsgcmV0dXJuOyB9XG5cblx0XHRvbihkb2N1bWVudCwgbW91c2VldmVudHMubW92ZSwgbW91c2Vtb3ZlLCBlKTtcblx0XHRvbihkb2N1bWVudCwgbW91c2VldmVudHMuY2FuY2VsLCBtb3VzZWVuZCwgZSk7XG5cdH1cblxuXHRmdW5jdGlvbiBtb3VzZW1vdmUoZSwgZGF0YSl7XG5cdFx0Y2hlY2tUaHJlc2hvbGQoZSwgZGF0YSwgZSwgcmVtb3ZlTW91c2UpO1xuXHR9XG5cblx0ZnVuY3Rpb24gbW91c2VlbmQoZSwgZGF0YSkge1xuXHRcdHJlbW92ZU1vdXNlKCk7XG5cdH1cblxuXHRmdW5jdGlvbiByZW1vdmVNb3VzZSgpIHtcblx0XHRvZmYoZG9jdW1lbnQsIG1vdXNlZXZlbnRzLm1vdmUsIG1vdXNlbW92ZSk7XG5cdFx0b2ZmKGRvY3VtZW50LCBtb3VzZWV2ZW50cy5jYW5jZWwsIG1vdXNlZW5kKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHRvdWNoc3RhcnQoZSkge1xuXHRcdC8vIERvbid0IGdldCBpbiB0aGUgd2F5IG9mIGludGVyYWN0aW9uIHdpdGggZm9ybSBlbGVtZW50c1xuXHRcdGlmIChpZ25vcmVUYWdzW2UudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKV0pIHsgcmV0dXJuOyB9XG5cblx0XHR2YXIgdG91Y2ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuXG5cdFx0Ly8gaU9TIGxpdmUgdXBkYXRlcyB0aGUgdG91Y2ggb2JqZWN0cyB3aGVyZWFzIEFuZHJvaWQgZ2l2ZXMgdXMgY29waWVzLlxuXHRcdC8vIFRoYXQgbWVhbnMgd2UgY2FuJ3QgdHJ1c3QgdGhlIHRvdWNoc3RhcnQgb2JqZWN0IHRvIHN0YXkgdGhlIHNhbWUsXG5cdFx0Ly8gc28gd2UgbXVzdCBjb3B5IHRoZSBkYXRhLiBUaGlzIG9iamVjdCBhY3RzIGFzIGEgdGVtcGxhdGUgZm9yXG5cdFx0Ly8gbW92ZXN0YXJ0LCBtb3ZlIGFuZCBtb3ZlZW5kIGV2ZW50IG9iamVjdHMuXG5cdFx0dmFyIGRhdGEgPSB7XG5cdFx0XHR0YXJnZXQ6ICAgICB0b3VjaC50YXJnZXQsXG5cdFx0XHRwYWdlWDogICAgICB0b3VjaC5wYWdlWCxcblx0XHRcdHBhZ2VZOiAgICAgIHRvdWNoLnBhZ2VZLFxuXHRcdFx0aWRlbnRpZmllcjogdG91Y2guaWRlbnRpZmllcixcblxuXHRcdFx0Ly8gVGhlIG9ubHkgd2F5IHRvIG1ha2UgaGFuZGxlcnMgaW5kaXZpZHVhbGx5IHVuYmluZGFibGUgaXMgYnlcblx0XHRcdC8vIG1ha2luZyB0aGVtIHVuaXF1ZS5cblx0XHRcdHRvdWNobW92ZTogIGZ1bmN0aW9uKGUsIGRhdGEpIHsgdG91Y2htb3ZlKGUsIGRhdGEpOyB9LFxuXHRcdFx0dG91Y2hlbmQ6ICAgZnVuY3Rpb24oZSwgZGF0YSkgeyB0b3VjaGVuZChlLCBkYXRhKTsgfVxuXHRcdH07XG5cblx0XHRvbihkb2N1bWVudCwgdG91Y2hldmVudHMubW92ZSwgZGF0YS50b3VjaG1vdmUsIGRhdGEpO1xuXHRcdG9uKGRvY3VtZW50LCB0b3VjaGV2ZW50cy5jYW5jZWwsIGRhdGEudG91Y2hlbmQsIGRhdGEpO1xuXHR9XG5cblx0ZnVuY3Rpb24gdG91Y2htb3ZlKGUsIGRhdGEpIHtcblx0XHR2YXIgdG91Y2ggPSBjaGFuZ2VkVG91Y2goZSwgZGF0YSk7XG5cdFx0aWYgKCF0b3VjaCkgeyByZXR1cm47IH1cblx0XHRjaGVja1RocmVzaG9sZChlLCBkYXRhLCB0b3VjaCwgcmVtb3ZlVG91Y2gpO1xuXHR9XG5cblx0ZnVuY3Rpb24gdG91Y2hlbmQoZSwgZGF0YSkge1xuXHRcdHZhciB0b3VjaCA9IGlkZW50aWZpZWRUb3VjaChlLmNoYW5nZWRUb3VjaGVzLCBkYXRhLmlkZW50aWZpZXIpO1xuXHRcdGlmICghdG91Y2gpIHsgcmV0dXJuOyB9XG5cdFx0cmVtb3ZlVG91Y2goZGF0YSk7XG5cdH1cblxuXHRmdW5jdGlvbiByZW1vdmVUb3VjaChkYXRhKSB7XG5cdFx0b2ZmKGRvY3VtZW50LCB0b3VjaGV2ZW50cy5tb3ZlLCBkYXRhLnRvdWNobW92ZSk7XG5cdFx0b2ZmKGRvY3VtZW50LCB0b3VjaGV2ZW50cy5jYW5jZWwsIGRhdGEudG91Y2hlbmQpO1xuXHR9XG5cblx0ZnVuY3Rpb24gY2hlY2tUaHJlc2hvbGQoZSwgZGF0YSwgdG91Y2gsIGZuKSB7XG5cdFx0dmFyIGRpc3RYID0gdG91Y2gucGFnZVggLSBkYXRhLnBhZ2VYO1xuXHRcdHZhciBkaXN0WSA9IHRvdWNoLnBhZ2VZIC0gZGF0YS5wYWdlWTtcblxuXHRcdC8vIERvIG5vdGhpbmcgaWYgdGhlIHRocmVzaG9sZCBoYXMgbm90IGJlZW4gY3Jvc3NlZC5cblx0XHRpZiAoKGRpc3RYICogZGlzdFgpICsgKGRpc3RZICogZGlzdFkpIDwgKHRocmVzaG9sZCAqIHRocmVzaG9sZCkpIHsgcmV0dXJuOyB9XG5cblx0XHR0cmlnZ2VyU3RhcnQoZSwgZGF0YSwgdG91Y2gsIGRpc3RYLCBkaXN0WSwgZm4pO1xuXHR9XG5cblx0ZnVuY3Rpb24gdHJpZ2dlclN0YXJ0KGUsIGRhdGEsIHRvdWNoLCBkaXN0WCwgZGlzdFksIGZuKSB7XG5cdFx0dmFyIHRvdWNoZXMgPSBlLnRhcmdldFRvdWNoZXM7XG5cdFx0dmFyIHRpbWUgPSBlLnRpbWVTdGFtcCAtIGRhdGEudGltZVN0YW1wO1xuXG5cdFx0Ly8gQ3JlYXRlIGEgbW92ZXN0YXJ0IG9iamVjdCB3aXRoIHNvbWUgc3BlY2lhbCBwcm9wZXJ0aWVzIHRoYXRcblx0XHQvLyBhcmUgcGFzc2VkIG9ubHkgdG8gdGhlIG1vdmVzdGFydCBoYW5kbGVycy5cblx0XHR2YXIgdGVtcGxhdGUgPSB7XG5cdFx0XHRhbHRLZXk6ICAgICBlLmFsdEtleSxcblx0XHRcdGN0cmxLZXk6ICAgIGUuY3RybEtleSxcblx0XHRcdHNoaWZ0S2V5OiAgIGUuc2hpZnRLZXksXG5cdFx0XHRzdGFydFg6ICAgICBkYXRhLnBhZ2VYLFxuXHRcdFx0c3RhcnRZOiAgICAgZGF0YS5wYWdlWSxcblx0XHRcdGRpc3RYOiAgICAgIGRpc3RYLFxuXHRcdFx0ZGlzdFk6ICAgICAgZGlzdFksXG5cdFx0XHRkZWx0YVg6ICAgICBkaXN0WCxcblx0XHRcdGRlbHRhWTogICAgIGRpc3RZLFxuXHRcdFx0cGFnZVg6ICAgICAgdG91Y2gucGFnZVgsXG5cdFx0XHRwYWdlWTogICAgICB0b3VjaC5wYWdlWSxcblx0XHRcdHZlbG9jaXR5WDogIGRpc3RYIC8gdGltZSxcblx0XHRcdHZlbG9jaXR5WTogIGRpc3RZIC8gdGltZSxcblx0XHRcdGlkZW50aWZpZXI6IGRhdGEuaWRlbnRpZmllcixcblx0XHRcdHRhcmdldFRvdWNoZXM6IHRvdWNoZXMsXG5cdFx0XHRmaW5nZXI6IHRvdWNoZXMgPyB0b3VjaGVzLmxlbmd0aCA6IDEsXG5cdFx0XHRlbmFibGVNb3ZlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0dGhpcy5tb3ZlRW5hYmxlZCA9IHRydWU7XG5cdFx0XHRcdHRoaXMuZW5hYmxlTW92ZSA9IG5vb3A7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Ly8gVHJpZ2dlciB0aGUgbW92ZXN0YXJ0IGV2ZW50LlxuXHRcdHRyaWdnZXIoZGF0YS50YXJnZXQsICdtb3Zlc3RhcnQnLCB0ZW1wbGF0ZSk7XG5cblx0XHQvLyBVbmJpbmQgaGFuZGxlcnMgdGhhdCB0cmFja2VkIHRoZSB0b3VjaCBvciBtb3VzZSB1cCB0aWxsIG5vdy5cblx0XHRmbihkYXRhKTtcblx0fVxuXG5cblx0Ly8gSGFuZGxlcnMgdGhhdCBjb250cm9sIHdoYXQgaGFwcGVucyBmb2xsb3dpbmcgYSBtb3Zlc3RhcnRcblxuXHRmdW5jdGlvbiBhY3RpdmVNb3VzZW1vdmUoZSwgZGF0YSkge1xuXHRcdHZhciB0aW1lciAgPSBkYXRhLnRpbWVyO1xuXG5cdFx0ZGF0YS50b3VjaCA9IGU7XG5cdFx0ZGF0YS50aW1lU3RhbXAgPSBlLnRpbWVTdGFtcDtcblx0XHR0aW1lci5raWNrKCk7XG5cdH1cblxuXHRmdW5jdGlvbiBhY3RpdmVNb3VzZWVuZChlLCBkYXRhKSB7XG5cdFx0dmFyIHRhcmdldCA9IGRhdGEudGFyZ2V0O1xuXHRcdHZhciBldmVudCAgPSBkYXRhLmV2ZW50O1xuXHRcdHZhciB0aW1lciAgPSBkYXRhLnRpbWVyO1xuXG5cdFx0cmVtb3ZlQWN0aXZlTW91c2UoKTtcblxuXHRcdGVuZEV2ZW50KHRhcmdldCwgZXZlbnQsIHRpbWVyLCBmdW5jdGlvbigpIHtcblx0XHRcdC8vIFVuYmluZCB0aGUgY2xpY2sgc3VwcHJlc3Nvciwgd2FpdGluZyB1bnRpbCBhZnRlciBtb3VzZXVwXG5cdFx0XHQvLyBoYXMgYmVlbiBoYW5kbGVkLlxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0XHRvZmYodGFyZ2V0LCAnY2xpY2snLCBwcmV2ZW50RGVmYXVsdCk7XG5cdFx0XHR9LCAwKTtcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbW92ZUFjdGl2ZU1vdXNlKCkge1xuXHRcdG9mZihkb2N1bWVudCwgbW91c2VldmVudHMubW92ZSwgYWN0aXZlTW91c2Vtb3ZlKTtcblx0XHRvZmYoZG9jdW1lbnQsIG1vdXNlZXZlbnRzLmVuZCwgYWN0aXZlTW91c2VlbmQpO1xuXHR9XG5cblx0ZnVuY3Rpb24gYWN0aXZlVG91Y2htb3ZlKGUsIGRhdGEpIHtcblx0XHR2YXIgZXZlbnQgPSBkYXRhLmV2ZW50O1xuXHRcdHZhciB0aW1lciA9IGRhdGEudGltZXI7XG5cdFx0dmFyIHRvdWNoID0gY2hhbmdlZFRvdWNoKGUsIGV2ZW50KTtcblxuXHRcdGlmICghdG91Y2gpIHsgcmV0dXJuOyB9XG5cblx0XHQvLyBTdG9wIHRoZSBpbnRlcmZhY2UgZnJvbSBnZXN0dXJpbmdcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRldmVudC50YXJnZXRUb3VjaGVzID0gZS50YXJnZXRUb3VjaGVzO1xuXHRcdGRhdGEudG91Y2ggPSB0b3VjaDtcblx0XHRkYXRhLnRpbWVTdGFtcCA9IGUudGltZVN0YW1wO1xuXG5cdFx0dGltZXIua2ljaygpO1xuXHR9XG5cblx0ZnVuY3Rpb24gYWN0aXZlVG91Y2hlbmQoZSwgZGF0YSkge1xuXHRcdHZhciB0YXJnZXQgPSBkYXRhLnRhcmdldDtcblx0XHR2YXIgZXZlbnQgID0gZGF0YS5ldmVudDtcblx0XHR2YXIgdGltZXIgID0gZGF0YS50aW1lcjtcblx0XHR2YXIgdG91Y2ggID0gaWRlbnRpZmllZFRvdWNoKGUuY2hhbmdlZFRvdWNoZXMsIGV2ZW50LmlkZW50aWZpZXIpO1xuXG5cdFx0Ly8gVGhpcyBpc24ndCB0aGUgdG91Y2ggeW91J3JlIGxvb2tpbmcgZm9yLlxuXHRcdGlmICghdG91Y2gpIHsgcmV0dXJuOyB9XG5cblx0XHRyZW1vdmVBY3RpdmVUb3VjaChkYXRhKTtcblx0XHRlbmRFdmVudCh0YXJnZXQsIGV2ZW50LCB0aW1lcik7XG5cdH1cblxuXHRmdW5jdGlvbiByZW1vdmVBY3RpdmVUb3VjaChkYXRhKSB7XG5cdFx0b2ZmKGRvY3VtZW50LCB0b3VjaGV2ZW50cy5tb3ZlLCBkYXRhLmFjdGl2ZVRvdWNobW92ZSk7XG5cdFx0b2ZmKGRvY3VtZW50LCB0b3VjaGV2ZW50cy5lbmQsIGRhdGEuYWN0aXZlVG91Y2hlbmQpO1xuXHR9XG5cblxuXHQvLyBMb2dpYyBmb3IgdHJpZ2dlcmluZyBtb3ZlIGFuZCBtb3ZlZW5kIGV2ZW50c1xuXG5cdGZ1bmN0aW9uIHVwZGF0ZUV2ZW50KGV2ZW50LCB0b3VjaCwgdGltZVN0YW1wKSB7XG5cdFx0dmFyIHRpbWUgPSB0aW1lU3RhbXAgLSBldmVudC50aW1lU3RhbXA7XG5cblx0XHRldmVudC5kaXN0WCA9ICB0b3VjaC5wYWdlWCAtIGV2ZW50LnN0YXJ0WDtcblx0XHRldmVudC5kaXN0WSA9ICB0b3VjaC5wYWdlWSAtIGV2ZW50LnN0YXJ0WTtcblx0XHRldmVudC5kZWx0YVggPSB0b3VjaC5wYWdlWCAtIGV2ZW50LnBhZ2VYO1xuXHRcdGV2ZW50LmRlbHRhWSA9IHRvdWNoLnBhZ2VZIC0gZXZlbnQucGFnZVk7XG5cblx0XHQvLyBBdmVyYWdlIHRoZSB2ZWxvY2l0eSBvZiB0aGUgbGFzdCBmZXcgZXZlbnRzIHVzaW5nIGEgZGVjYXlcblx0XHQvLyBjdXJ2ZSB0byBldmVuIG91dCBzcHVyaW91cyBqdW1wcyBpbiB2YWx1ZXMuXG5cdFx0ZXZlbnQudmVsb2NpdHlYID0gMC4zICogZXZlbnQudmVsb2NpdHlYICsgMC43ICogZXZlbnQuZGVsdGFYIC8gdGltZTtcblx0XHRldmVudC52ZWxvY2l0eVkgPSAwLjMgKiBldmVudC52ZWxvY2l0eVkgKyAwLjcgKiBldmVudC5kZWx0YVkgLyB0aW1lO1xuXHRcdGV2ZW50LnBhZ2VYID0gIHRvdWNoLnBhZ2VYO1xuXHRcdGV2ZW50LnBhZ2VZID0gIHRvdWNoLnBhZ2VZO1xuXHR9XG5cblx0ZnVuY3Rpb24gZW5kRXZlbnQodGFyZ2V0LCBldmVudCwgdGltZXIsIGZuKSB7XG5cdFx0dGltZXIuZW5kKGZ1bmN0aW9uKCl7XG5cdFx0XHR0cmlnZ2VyKHRhcmdldCwgJ21vdmVlbmQnLCBldmVudCk7XG5cdFx0XHRyZXR1cm4gZm4gJiYgZm4oKTtcblx0XHR9KTtcblx0fVxuXG5cblx0Ly8gU2V0IHVwIHRoZSBET01cblxuXHRmdW5jdGlvbiBtb3Zlc3RhcnQoZSkge1xuXHRcdGlmIChlLmRlZmF1bHRQcmV2ZW50ZWQpIHsgcmV0dXJuOyB9XG5cdFx0aWYgKCFlLm1vdmVFbmFibGVkKSB7IHJldHVybjsgfVxuXG5cdFx0dmFyIGV2ZW50ID0ge1xuXHRcdFx0c3RhcnRYOiAgICAgICAgZS5zdGFydFgsXG5cdFx0XHRzdGFydFk6ICAgICAgICBlLnN0YXJ0WSxcblx0XHRcdHBhZ2VYOiAgICAgICAgIGUucGFnZVgsXG5cdFx0XHRwYWdlWTogICAgICAgICBlLnBhZ2VZLFxuXHRcdFx0ZGlzdFg6ICAgICAgICAgZS5kaXN0WCxcblx0XHRcdGRpc3RZOiAgICAgICAgIGUuZGlzdFksXG5cdFx0XHRkZWx0YVg6ICAgICAgICBlLmRlbHRhWCxcblx0XHRcdGRlbHRhWTogICAgICAgIGUuZGVsdGFZLFxuXHRcdFx0dmVsb2NpdHlYOiAgICAgZS52ZWxvY2l0eVgsXG5cdFx0XHR2ZWxvY2l0eVk6ICAgICBlLnZlbG9jaXR5WSxcblx0XHRcdGlkZW50aWZpZXI6ICAgIGUuaWRlbnRpZmllcixcblx0XHRcdHRhcmdldFRvdWNoZXM6IGUudGFyZ2V0VG91Y2hlcyxcblx0XHRcdGZpbmdlcjogICAgICAgIGUuZmluZ2VyXG5cdFx0fTtcblxuXHRcdHZhciBkYXRhID0ge1xuXHRcdFx0dGFyZ2V0OiAgICBlLnRhcmdldCxcblx0XHRcdGV2ZW50OiAgICAgZXZlbnQsXG5cdFx0XHR0aW1lcjogICAgIG5ldyBUaW1lcih1cGRhdGUpLFxuXHRcdFx0dG91Y2g6ICAgICB1bmRlZmluZWQsXG5cdFx0XHR0aW1lU3RhbXA6IGUudGltZVN0YW1wXG5cdFx0fTtcblxuXHRcdGZ1bmN0aW9uIHVwZGF0ZSh0aW1lKSB7XG5cdFx0XHR1cGRhdGVFdmVudChldmVudCwgZGF0YS50b3VjaCwgZGF0YS50aW1lU3RhbXApO1xuXHRcdFx0dHJpZ2dlcihkYXRhLnRhcmdldCwgJ21vdmUnLCBldmVudCk7XG5cdFx0fVxuXG5cdFx0aWYgKGUuaWRlbnRpZmllciA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHQvLyBXZSdyZSBkZWFsaW5nIHdpdGggYSBtb3VzZSBldmVudC5cblx0XHRcdC8vIFN0b3AgY2xpY2tzIGZyb20gcHJvcGFnYXRpbmcgZHVyaW5nIGEgbW92ZVxuXHRcdFx0b24oZS50YXJnZXQsICdjbGljaycsIHByZXZlbnREZWZhdWx0KTtcblx0XHRcdG9uKGRvY3VtZW50LCBtb3VzZWV2ZW50cy5tb3ZlLCBhY3RpdmVNb3VzZW1vdmUsIGRhdGEpO1xuXHRcdFx0b24oZG9jdW1lbnQsIG1vdXNlZXZlbnRzLmVuZCwgYWN0aXZlTW91c2VlbmQsIGRhdGEpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdC8vIEluIG9yZGVyIHRvIHVuYmluZCBjb3JyZWN0IGhhbmRsZXJzIHRoZXkgaGF2ZSB0byBiZSB1bmlxdWVcblx0XHRcdGRhdGEuYWN0aXZlVG91Y2htb3ZlID0gZnVuY3Rpb24oZSwgZGF0YSkgeyBhY3RpdmVUb3VjaG1vdmUoZSwgZGF0YSk7IH07XG5cdFx0XHRkYXRhLmFjdGl2ZVRvdWNoZW5kID0gZnVuY3Rpb24oZSwgZGF0YSkgeyBhY3RpdmVUb3VjaGVuZChlLCBkYXRhKTsgfTtcblxuXHRcdFx0Ly8gV2UncmUgZGVhbGluZyB3aXRoIGEgdG91Y2guXG5cdFx0XHRvbihkb2N1bWVudCwgdG91Y2hldmVudHMubW92ZSwgZGF0YS5hY3RpdmVUb3VjaG1vdmUsIGRhdGEpO1xuXHRcdFx0b24oZG9jdW1lbnQsIHRvdWNoZXZlbnRzLmVuZCwgZGF0YS5hY3RpdmVUb3VjaGVuZCwgZGF0YSk7XG5cdFx0fVxuXHR9XG5cblx0b24oZG9jdW1lbnQsICdtb3VzZWRvd24nLCBtb3VzZWRvd24pO1xuXHRvbihkb2N1bWVudCwgJ3RvdWNoc3RhcnQnLCB0b3VjaHN0YXJ0KTtcblx0b24oZG9jdW1lbnQsICdtb3Zlc3RhcnQnLCBtb3Zlc3RhcnQpO1xuXG5cblx0Ly8galF1ZXJ5IHNwZWNpYWwgZXZlbnRzXG5cdC8vXG5cdC8vIGpRdWVyeSBldmVudCBvYmplY3RzIGFyZSBjb3BpZXMgb2YgRE9NIGV2ZW50IG9iamVjdHMuIFRoZXkgbmVlZFxuXHQvLyBhIGxpdHRsZSBoZWxwIGNvcHlpbmcgdGhlIG1vdmUgcHJvcGVydGllcyBhY3Jvc3MuXG5cblx0aWYgKCF3aW5kb3cualF1ZXJ5KSB7IHJldHVybjsgfVxuXG5cdHZhciBwcm9wZXJ0aWVzID0gKFwic3RhcnRYIHN0YXJ0WSBwYWdlWCBwYWdlWSBkaXN0WCBkaXN0WSBkZWx0YVggZGVsdGFZIHZlbG9jaXR5WCB2ZWxvY2l0eVlcIikuc3BsaXQoJyAnKTtcblxuXHRmdW5jdGlvbiBlbmFibGVNb3ZlMShlKSB7IGUuZW5hYmxlTW92ZSgpOyB9XG5cdGZ1bmN0aW9uIGVuYWJsZU1vdmUyKGUpIHsgZS5lbmFibGVNb3ZlKCk7IH1cblx0ZnVuY3Rpb24gZW5hYmxlTW92ZTMoZSkgeyBlLmVuYWJsZU1vdmUoKTsgfVxuXG5cdGZ1bmN0aW9uIGFkZChoYW5kbGVPYmopIHtcblx0XHR2YXIgaGFuZGxlciA9IGhhbmRsZU9iai5oYW5kbGVyO1xuXG5cdFx0aGFuZGxlT2JqLmhhbmRsZXIgPSBmdW5jdGlvbihlKSB7XG5cdFx0XHQvLyBDb3B5IG1vdmUgcHJvcGVydGllcyBhY3Jvc3MgZnJvbSBvcmlnaW5hbEV2ZW50XG5cdFx0XHR2YXIgaSA9IHByb3BlcnRpZXMubGVuZ3RoO1xuXHRcdFx0dmFyIHByb3BlcnR5O1xuXG5cdFx0XHR3aGlsZShpLS0pIHtcblx0XHRcdFx0cHJvcGVydHkgPSBwcm9wZXJ0aWVzW2ldO1xuXHRcdFx0XHRlW3Byb3BlcnR5XSA9IGUub3JpZ2luYWxFdmVudFtwcm9wZXJ0eV07XG5cdFx0XHR9XG5cblx0XHRcdGhhbmRsZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHR9O1xuXHR9XG5cblx0alF1ZXJ5LmV2ZW50LnNwZWNpYWwubW92ZXN0YXJ0ID0ge1xuXHRcdHNldHVwOiBmdW5jdGlvbigpIHtcblx0XHRcdC8vIE1vdmVzdGFydCBtdXN0IGJlIGVuYWJsZWQgdG8gYWxsb3cgb3RoZXIgbW92ZSBldmVudHNcblx0XHRcdG9uKHRoaXMsICdtb3Zlc3RhcnQnLCBlbmFibGVNb3ZlMSk7XG5cblx0XHRcdC8vIERvIGxpc3RlbiB0byBET00gZXZlbnRzXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblxuXHRcdHRlYXJkb3duOiBmdW5jdGlvbigpIHtcblx0XHRcdG9mZih0aGlzLCAnbW92ZXN0YXJ0JywgZW5hYmxlTW92ZTEpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0sXG5cblx0XHRhZGQ6IGFkZFxuXHR9O1xuXG5cdGpRdWVyeS5ldmVudC5zcGVjaWFsLm1vdmUgPSB7XG5cdFx0c2V0dXA6IGZ1bmN0aW9uKCkge1xuXHRcdFx0b24odGhpcywgJ21vdmVzdGFydCcsIGVuYWJsZU1vdmUyKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXG5cdFx0dGVhcmRvd246IGZ1bmN0aW9uKCkge1xuXHRcdFx0b2ZmKHRoaXMsICdtb3Zlc3RhcnQnLCBlbmFibGVNb3ZlMik7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblxuXHRcdGFkZDogYWRkXG5cdH07XG5cblx0alF1ZXJ5LmV2ZW50LnNwZWNpYWwubW92ZWVuZCA9IHtcblx0XHRzZXR1cDogZnVuY3Rpb24oKSB7XG5cdFx0XHRvbih0aGlzLCAnbW92ZXN0YXJ0JywgZW5hYmxlTW92ZTMpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0sXG5cblx0XHR0ZWFyZG93bjogZnVuY3Rpb24oKSB7XG5cdFx0XHRvZmYodGhpcywgJ21vdmVzdGFydCcsIGVuYWJsZU1vdmUzKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXG5cdFx0YWRkOiBhZGRcblx0fTtcbn0pO1xuXG4vLyBqUXVlcnkgTWFzayBQbHVnaW4gdjEuMTQuMTZcbi8vIGdpdGh1Yi5jb20vaWdvcmVzY29iYXIvalF1ZXJ5LU1hc2stUGx1Z2luXG4vLyB2YXIgJGpzY29tcD0kanNjb21wfHx7fTskanNjb21wLnNjb3BlPXt9OyRqc2NvbXAuZmluZEludGVybmFsPWZ1bmN0aW9uKGEsbixmKXthIGluc3RhbmNlb2YgU3RyaW5nJiYoYT1TdHJpbmcoYSkpO2Zvcih2YXIgcD1hLmxlbmd0aCxrPTA7azxwO2srKyl7dmFyIGI9YVtrXTtpZihuLmNhbGwoZixiLGssYSkpcmV0dXJue2k6ayx2OmJ9fXJldHVybntpOi0xLHY6dm9pZCAwfX07JGpzY29tcC5BU1NVTUVfRVM1PSExOyRqc2NvbXAuQVNTVU1FX05PX05BVElWRV9NQVA9ITE7JGpzY29tcC5BU1NVTUVfTk9fTkFUSVZFX1NFVD0hMTskanNjb21wLlNJTVBMRV9GUk9VTkRfUE9MWUZJTEw9ITE7XG4vLyAkanNjb21wLmRlZmluZVByb3BlcnR5PSRqc2NvbXAuQVNTVU1FX0VTNXx8XCJmdW5jdGlvblwiPT10eXBlb2YgT2JqZWN0LmRlZmluZVByb3BlcnRpZXM/T2JqZWN0LmRlZmluZVByb3BlcnR5OmZ1bmN0aW9uKGEsbixmKXthIT1BcnJheS5wcm90b3R5cGUmJmEhPU9iamVjdC5wcm90b3R5cGUmJihhW25dPWYudmFsdWUpfTskanNjb21wLmdldEdsb2JhbD1mdW5jdGlvbihhKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3c9PT1hP2E6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbCYmbnVsbCE9Z2xvYmFsP2dsb2JhbDphfTskanNjb21wLmdsb2JhbD0kanNjb21wLmdldEdsb2JhbCh0aGlzKTtcbi8vICRqc2NvbXAucG9seWZpbGw9ZnVuY3Rpb24oYSxuLGYscCl7aWYobil7Zj0kanNjb21wLmdsb2JhbDthPWEuc3BsaXQoXCIuXCIpO2ZvcihwPTA7cDxhLmxlbmd0aC0xO3ArKyl7dmFyIGs9YVtwXTtrIGluIGZ8fChmW2tdPXt9KTtmPWZba119YT1hW2EubGVuZ3RoLTFdO3A9ZlthXTtuPW4ocCk7biE9cCYmbnVsbCE9biYmJGpzY29tcC5kZWZpbmVQcm9wZXJ0eShmLGEse2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpufSl9fTskanNjb21wLnBvbHlmaWxsKFwiQXJyYXkucHJvdG90eXBlLmZpbmRcIixmdW5jdGlvbihhKXtyZXR1cm4gYT9hOmZ1bmN0aW9uKGEsZil7cmV0dXJuICRqc2NvbXAuZmluZEludGVybmFsKHRoaXMsYSxmKS52fX0sXCJlczZcIixcImVzM1wiKTtcbi8vIChmdW5jdGlvbihhLG4sZil7XCJmdW5jdGlvblwiPT09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wianF1ZXJ5XCJdLGEpOlwib2JqZWN0XCI9PT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBNZXRlb3I/bW9kdWxlLmV4cG9ydHM9YShyZXF1aXJlKFwianF1ZXJ5XCIpKTphKG58fGYpfSkoZnVuY3Rpb24oYSl7dmFyIG49ZnVuY3Rpb24oYixkLGUpe3ZhciBjPXtpbnZhbGlkOltdLGdldENhcmV0OmZ1bmN0aW9uKCl7dHJ5e3ZhciBhPTAscj1iLmdldCgwKSxoPWRvY3VtZW50LnNlbGVjdGlvbixkPXIuc2VsZWN0aW9uU3RhcnQ7aWYoaCYmLTE9PT1uYXZpZ2F0b3IuYXBwVmVyc2lvbi5pbmRleE9mKFwiTVNJRSAxMFwiKSl7dmFyIGU9aC5jcmVhdGVSYW5nZSgpO2UubW92ZVN0YXJ0KFwiY2hhcmFjdGVyXCIsLWMudmFsKCkubGVuZ3RoKTthPWUudGV4dC5sZW5ndGh9ZWxzZSBpZihkfHxcIjBcIj09PWQpYT1kO3JldHVybiBhfWNhdGNoKEMpe319LHNldENhcmV0OmZ1bmN0aW9uKGEpe3RyeXtpZihiLmlzKFwiOmZvY3VzXCIpKXt2YXIgYz1cbi8vIGIuZ2V0KDApO2lmKGMuc2V0U2VsZWN0aW9uUmFuZ2UpYy5zZXRTZWxlY3Rpb25SYW5nZShhLGEpO2Vsc2V7dmFyIGc9Yy5jcmVhdGVUZXh0UmFuZ2UoKTtnLmNvbGxhcHNlKCEwKTtnLm1vdmVFbmQoXCJjaGFyYWN0ZXJcIixhKTtnLm1vdmVTdGFydChcImNoYXJhY3RlclwiLGEpO2cuc2VsZWN0KCl9fX1jYXRjaChCKXt9fSxldmVudHM6ZnVuY3Rpb24oKXtiLm9uKFwia2V5ZG93bi5tYXNrXCIsZnVuY3Rpb24oYSl7Yi5kYXRhKFwibWFzay1rZXljb2RlXCIsYS5rZXlDb2RlfHxhLndoaWNoKTtiLmRhdGEoXCJtYXNrLXByZXZpdXMtdmFsdWVcIixiLnZhbCgpKTtiLmRhdGEoXCJtYXNrLXByZXZpdXMtY2FyZXQtcG9zXCIsYy5nZXRDYXJldCgpKTtjLm1hc2tEaWdpdFBvc01hcE9sZD1jLm1hc2tEaWdpdFBvc01hcH0pLm9uKGEuak1hc2tHbG9iYWxzLnVzZUlucHV0P1wiaW5wdXQubWFza1wiOlwia2V5dXAubWFza1wiLGMuYmVoYXZpb3VyKS5vbihcInBhc3RlLm1hc2sgZHJvcC5tYXNrXCIsZnVuY3Rpb24oKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Yi5rZXlkb3duKCkua2V5dXAoKX0sXG4vLyAxMDApfSkub24oXCJjaGFuZ2UubWFza1wiLGZ1bmN0aW9uKCl7Yi5kYXRhKFwiY2hhbmdlZFwiLCEwKX0pLm9uKFwiYmx1ci5tYXNrXCIsZnVuY3Rpb24oKXtmPT09Yy52YWwoKXx8Yi5kYXRhKFwiY2hhbmdlZFwiKXx8Yi50cmlnZ2VyKFwiY2hhbmdlXCIpO2IuZGF0YShcImNoYW5nZWRcIiwhMSl9KS5vbihcImJsdXIubWFza1wiLGZ1bmN0aW9uKCl7Zj1jLnZhbCgpfSkub24oXCJmb2N1cy5tYXNrXCIsZnVuY3Rpb24oYil7ITA9PT1lLnNlbGVjdE9uRm9jdXMmJmEoYi50YXJnZXQpLnNlbGVjdCgpfSkub24oXCJmb2N1c291dC5tYXNrXCIsZnVuY3Rpb24oKXtlLmNsZWFySWZOb3RNYXRjaCYmIWsudGVzdChjLnZhbCgpKSYmYy52YWwoXCJcIil9KX0sZ2V0UmVnZXhNYXNrOmZ1bmN0aW9uKCl7Zm9yKHZhciBhPVtdLGIsYyxlLHQsZj0wO2Y8ZC5sZW5ndGg7ZisrKShiPWwudHJhbnNsYXRpb25bZC5jaGFyQXQoZildKT8oYz1iLnBhdHRlcm4udG9TdHJpbmcoKS5yZXBsYWNlKC8uezF9JHxeLnsxfS9nLFwiXCIpLGU9Yi5vcHRpb25hbCxcbi8vIChiPWIucmVjdXJzaXZlKT8oYS5wdXNoKGQuY2hhckF0KGYpKSx0PXtkaWdpdDpkLmNoYXJBdChmKSxwYXR0ZXJuOmN9KTphLnB1c2goZXx8Yj9jK1wiP1wiOmMpKTphLnB1c2goZC5jaGFyQXQoZikucmVwbGFjZSgvWy1cXC9cXFxcXiQqKz8uKCl8W1xcXXt9XS9nLFwiXFxcXCQmXCIpKTthPWEuam9pbihcIlwiKTt0JiYoYT1hLnJlcGxhY2UobmV3IFJlZ0V4cChcIihcIit0LmRpZ2l0K1wiKC4qXCIrdC5kaWdpdCtcIik/KVwiKSxcIigkMSk/XCIpLnJlcGxhY2UobmV3IFJlZ0V4cCh0LmRpZ2l0LFwiZ1wiKSx0LnBhdHRlcm4pKTtyZXR1cm4gbmV3IFJlZ0V4cChhKX0sZGVzdHJveUV2ZW50czpmdW5jdGlvbigpe2Iub2ZmKFwiaW5wdXQga2V5ZG93biBrZXl1cCBwYXN0ZSBkcm9wIGJsdXIgZm9jdXNvdXQgXCIuc3BsaXQoXCIgXCIpLmpvaW4oXCIubWFzayBcIikpfSx2YWw6ZnVuY3Rpb24oYSl7dmFyIGM9Yi5pcyhcImlucHV0XCIpP1widmFsXCI6XCJ0ZXh0XCI7aWYoMDxhcmd1bWVudHMubGVuZ3RoKXtpZihiW2NdKCkhPT1hKWJbY10oYSk7XG4vLyBjPWJ9ZWxzZSBjPWJbY10oKTtyZXR1cm4gY30sY2FsY3VsYXRlQ2FyZXRQb3NpdGlvbjpmdW5jdGlvbihhKXt2YXIgZD1jLmdldE1hc2tlZCgpLGg9Yy5nZXRDYXJldCgpO2lmKGEhPT1kKXt2YXIgZT1iLmRhdGEoXCJtYXNrLXByZXZpdXMtY2FyZXQtcG9zXCIpfHwwO2Q9ZC5sZW5ndGg7dmFyIGc9YS5sZW5ndGgsZj1hPTAsbD0wLGs9MCxtO2ZvcihtPWg7bTxkJiZjLm1hc2tEaWdpdFBvc01hcFttXTttKyspZisrO2ZvcihtPWgtMTswPD1tJiZjLm1hc2tEaWdpdFBvc01hcFttXTttLS0pYSsrO2ZvcihtPWgtMTswPD1tO20tLSljLm1hc2tEaWdpdFBvc01hcFttXSYmbCsrO2ZvcihtPWUtMTswPD1tO20tLSljLm1hc2tEaWdpdFBvc01hcE9sZFttXSYmaysrO2g+Zz9oPTEwKmQ6ZT49aCYmZSE9PWc/Yy5tYXNrRGlnaXRQb3NNYXBPbGRbaF18fChlPWgsaD1oLShrLWwpLWEsYy5tYXNrRGlnaXRQb3NNYXBbaF0mJihoPWUpKTpoPmUmJihoPWgrKGwtaykrZil9cmV0dXJuIGh9LGJlaGF2aW91cjpmdW5jdGlvbihkKXtkPVxuLy8gZHx8d2luZG93LmV2ZW50O2MuaW52YWxpZD1bXTt2YXIgZT1iLmRhdGEoXCJtYXNrLWtleWNvZGVcIik7aWYoLTE9PT1hLmluQXJyYXkoZSxsLmJ5UGFzc0tleXMpKXtlPWMuZ2V0TWFza2VkKCk7dmFyIGg9Yy5nZXRDYXJldCgpLGc9Yi5kYXRhKFwibWFzay1wcmV2aXVzLXZhbHVlXCIpfHxcIlwiO3NldFRpbWVvdXQoZnVuY3Rpb24oKXtjLnNldENhcmV0KGMuY2FsY3VsYXRlQ2FyZXRQb3NpdGlvbihnKSl9LGEuak1hc2tHbG9iYWxzLmtleVN0cm9rZUNvbXBlbnNhdGlvbik7Yy52YWwoZSk7Yy5zZXRDYXJldChoKTtyZXR1cm4gYy5jYWxsYmFja3MoZCl9fSxnZXRNYXNrZWQ6ZnVuY3Rpb24oYSxiKXt2YXIgaD1bXSxmPXZvaWQgMD09PWI/Yy52YWwoKTpiK1wiXCIsZz0wLGs9ZC5sZW5ndGgsbj0wLHA9Zi5sZW5ndGgsbT0xLHI9XCJwdXNoXCIsdT0tMSx3PTA7Yj1bXTtpZihlLnJldmVyc2Upe3I9XCJ1bnNoaWZ0XCI7bT0tMTt2YXIgeD0wO2c9ay0xO249cC0xO3ZhciBBPWZ1bmN0aW9uKCl7cmV0dXJuLTE8XG4vLyBnJiYtMTxufX1lbHNlIHg9ay0xLEE9ZnVuY3Rpb24oKXtyZXR1cm4gZzxrJiZuPHB9O2Zvcih2YXIgejtBKCk7KXt2YXIgeT1kLmNoYXJBdChnKSx2PWYuY2hhckF0KG4pLHE9bC50cmFuc2xhdGlvblt5XTtpZihxKXYubWF0Y2gocS5wYXR0ZXJuKT8oaFtyXSh2KSxxLnJlY3Vyc2l2ZSYmKC0xPT09dT91PWc6Zz09PXgmJmchPT11JiYoZz11LW0pLHg9PT11JiYoZy09bSkpLGcrPW0pOnY9PT16Pyh3LS0sej12b2lkIDApOnEub3B0aW9uYWw/KGcrPW0sbi09bSk6cS5mYWxsYmFjaz8oaFtyXShxLmZhbGxiYWNrKSxnKz1tLG4tPW0pOmMuaW52YWxpZC5wdXNoKHtwOm4sdjp2LGU6cS5wYXR0ZXJufSksbis9bTtlbHNle2lmKCFhKWhbcl0oeSk7dj09PXk/KGIucHVzaChuKSxuKz1tKTooej15LGIucHVzaChuK3cpLHcrKyk7Zys9bX19YT1kLmNoYXJBdCh4KTtrIT09cCsxfHxsLnRyYW5zbGF0aW9uW2FdfHxoLnB1c2goYSk7aD1oLmpvaW4oXCJcIik7Yy5tYXBNYXNrZGlnaXRQb3NpdGlvbnMoaCxcbi8vIGIscCk7cmV0dXJuIGh9LG1hcE1hc2tkaWdpdFBvc2l0aW9uczpmdW5jdGlvbihhLGIsZCl7YT1lLnJldmVyc2U/YS5sZW5ndGgtZDowO2MubWFza0RpZ2l0UG9zTWFwPXt9O2ZvcihkPTA7ZDxiLmxlbmd0aDtkKyspYy5tYXNrRGlnaXRQb3NNYXBbYltkXSthXT0xfSxjYWxsYmFja3M6ZnVuY3Rpb24oYSl7dmFyIGc9Yy52YWwoKSxoPWchPT1mLGs9W2csYSxiLGVdLGw9ZnVuY3Rpb24oYSxiLGMpe1wiZnVuY3Rpb25cIj09PXR5cGVvZiBlW2FdJiZiJiZlW2FdLmFwcGx5KHRoaXMsYyl9O2woXCJvbkNoYW5nZVwiLCEwPT09aCxrKTtsKFwib25LZXlQcmVzc1wiLCEwPT09aCxrKTtsKFwib25Db21wbGV0ZVwiLGcubGVuZ3RoPT09ZC5sZW5ndGgsayk7bChcIm9uSW52YWxpZFwiLDA8Yy5pbnZhbGlkLmxlbmd0aCxbZyxhLGIsYy5pbnZhbGlkLGVdKX19O2I9YShiKTt2YXIgbD10aGlzLGY9Yy52YWwoKSxrO2Q9XCJmdW5jdGlvblwiPT09dHlwZW9mIGQ/ZChjLnZhbCgpLHZvaWQgMCxiLGUpOmQ7bC5tYXNrPVxuLy8gZDtsLm9wdGlvbnM9ZTtsLnJlbW92ZT1mdW5jdGlvbigpe3ZhciBhPWMuZ2V0Q2FyZXQoKTtsLm9wdGlvbnMucGxhY2Vob2xkZXImJmIucmVtb3ZlQXR0cihcInBsYWNlaG9sZGVyXCIpO2IuZGF0YShcIm1hc2stbWF4bGVuZ3RoXCIpJiZiLnJlbW92ZUF0dHIoXCJtYXhsZW5ndGhcIik7Yy5kZXN0cm95RXZlbnRzKCk7Yy52YWwobC5nZXRDbGVhblZhbCgpKTtjLnNldENhcmV0KGEpO3JldHVybiBifTtsLmdldENsZWFuVmFsPWZ1bmN0aW9uKCl7cmV0dXJuIGMuZ2V0TWFza2VkKCEwKX07bC5nZXRNYXNrZWRWYWw9ZnVuY3Rpb24oYSl7cmV0dXJuIGMuZ2V0TWFza2VkKCExLGEpfTtsLmluaXQ9ZnVuY3Rpb24oZyl7Zz1nfHwhMTtlPWV8fHt9O2wuY2xlYXJJZk5vdE1hdGNoPWEuak1hc2tHbG9iYWxzLmNsZWFySWZOb3RNYXRjaDtsLmJ5UGFzc0tleXM9YS5qTWFza0dsb2JhbHMuYnlQYXNzS2V5cztsLnRyYW5zbGF0aW9uPWEuZXh0ZW5kKHt9LGEuak1hc2tHbG9iYWxzLnRyYW5zbGF0aW9uLGUudHJhbnNsYXRpb24pO1xuLy8gbD1hLmV4dGVuZCghMCx7fSxsLGUpO2s9Yy5nZXRSZWdleE1hc2soKTtpZihnKWMuZXZlbnRzKCksYy52YWwoYy5nZXRNYXNrZWQoKSk7ZWxzZXtlLnBsYWNlaG9sZGVyJiZiLmF0dHIoXCJwbGFjZWhvbGRlclwiLGUucGxhY2Vob2xkZXIpO2IuZGF0YShcIm1hc2tcIikmJmIuYXR0cihcImF1dG9jb21wbGV0ZVwiLFwib2ZmXCIpO2c9MDtmb3IodmFyIGY9ITA7ZzxkLmxlbmd0aDtnKyspe3ZhciBoPWwudHJhbnNsYXRpb25bZC5jaGFyQXQoZyldO2lmKGgmJmgucmVjdXJzaXZlKXtmPSExO2JyZWFrfX1mJiZiLmF0dHIoXCJtYXhsZW5ndGhcIixkLmxlbmd0aCkuZGF0YShcIm1hc2stbWF4bGVuZ3RoXCIsITApO2MuZGVzdHJveUV2ZW50cygpO2MuZXZlbnRzKCk7Zz1jLmdldENhcmV0KCk7Yy52YWwoYy5nZXRNYXNrZWQoKSk7Yy5zZXRDYXJldChnKX19O2wuaW5pdCghYi5pcyhcImlucHV0XCIpKX07YS5tYXNrV2F0Y2hlcnM9e307dmFyIGY9ZnVuY3Rpb24oKXt2YXIgYj1hKHRoaXMpLGQ9e30sZT1iLmF0dHIoXCJkYXRhLW1hc2tcIik7XG4vLyBiLmF0dHIoXCJkYXRhLW1hc2stcmV2ZXJzZVwiKSYmKGQucmV2ZXJzZT0hMCk7Yi5hdHRyKFwiZGF0YS1tYXNrLWNsZWFyaWZub3RtYXRjaFwiKSYmKGQuY2xlYXJJZk5vdE1hdGNoPSEwKTtcInRydWVcIj09PWIuYXR0cihcImRhdGEtbWFzay1zZWxlY3RvbmZvY3VzXCIpJiYoZC5zZWxlY3RPbkZvY3VzPSEwKTtpZihwKGIsZSxkKSlyZXR1cm4gYi5kYXRhKFwibWFza1wiLG5ldyBuKHRoaXMsZSxkKSl9LHA9ZnVuY3Rpb24oYixkLGUpe2U9ZXx8e307dmFyIGM9YShiKS5kYXRhKFwibWFza1wiKSxmPUpTT04uc3RyaW5naWZ5O2I9YShiKS52YWwoKXx8YShiKS50ZXh0KCk7dHJ5e3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBkJiYoZD1kKGIpKSxcIm9iamVjdFwiIT09dHlwZW9mIGN8fGYoYy5vcHRpb25zKSE9PWYoZSl8fGMubWFzayE9PWR9Y2F0Y2godyl7fX0saz1mdW5jdGlvbihhKXt2YXIgYj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2E9XCJvblwiK2E7dmFyIGU9YSBpbiBiO2V8fChiLnNldEF0dHJpYnV0ZShhLFxuLy8gXCJyZXR1cm47XCIpLGU9XCJmdW5jdGlvblwiPT09dHlwZW9mIGJbYV0pO3JldHVybiBlfTthLmZuLm1hc2s9ZnVuY3Rpb24oYixkKXtkPWR8fHt9O3ZhciBlPXRoaXMuc2VsZWN0b3IsYz1hLmpNYXNrR2xvYmFscyxmPWMud2F0Y2hJbnRlcnZhbDtjPWQud2F0Y2hJbnB1dHN8fGMud2F0Y2hJbnB1dHM7dmFyIGs9ZnVuY3Rpb24oKXtpZihwKHRoaXMsYixkKSlyZXR1cm4gYSh0aGlzKS5kYXRhKFwibWFza1wiLG5ldyBuKHRoaXMsYixkKSl9O2EodGhpcykuZWFjaChrKTtlJiZcIlwiIT09ZSYmYyYmKGNsZWFySW50ZXJ2YWwoYS5tYXNrV2F0Y2hlcnNbZV0pLGEubWFza1dhdGNoZXJzW2VdPXNldEludGVydmFsKGZ1bmN0aW9uKCl7YShkb2N1bWVudCkuZmluZChlKS5lYWNoKGspfSxmKSk7cmV0dXJuIHRoaXN9O2EuZm4ubWFza2VkPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmRhdGEoXCJtYXNrXCIpLmdldE1hc2tlZFZhbChhKX07YS5mbi51bm1hc2s9ZnVuY3Rpb24oKXtjbGVhckludGVydmFsKGEubWFza1dhdGNoZXJzW3RoaXMuc2VsZWN0b3JdKTtcbi8vIGRlbGV0ZSBhLm1hc2tXYXRjaGVyc1t0aGlzLnNlbGVjdG9yXTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9YSh0aGlzKS5kYXRhKFwibWFza1wiKTtiJiZiLnJlbW92ZSgpLnJlbW92ZURhdGEoXCJtYXNrXCIpfSl9O2EuZm4uY2xlYW5WYWw9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kYXRhKFwibWFza1wiKS5nZXRDbGVhblZhbCgpfTthLmFwcGx5RGF0YU1hc2s9ZnVuY3Rpb24oYil7Yj1ifHxhLmpNYXNrR2xvYmFscy5tYXNrRWxlbWVudHM7KGIgaW5zdGFuY2VvZiBhP2I6YShiKSkuZmlsdGVyKGEuak1hc2tHbG9iYWxzLmRhdGFNYXNrQXR0cikuZWFjaChmKX07az17bWFza0VsZW1lbnRzOlwiaW5wdXQsdGQsc3BhbixkaXZcIixkYXRhTWFza0F0dHI6XCIqW2RhdGEtbWFza11cIixkYXRhTWFzazohMCx3YXRjaEludGVydmFsOjMwMCx3YXRjaElucHV0czohMCxrZXlTdHJva2VDb21wZW5zYXRpb246MTAsdXNlSW5wdXQ6IS9DaHJvbWVcXC9bMi00XVswLTldfFNhbXN1bmdCcm93c2VyLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSYmXG4vLyBrKFwiaW5wdXRcIiksd2F0Y2hEYXRhTWFzazohMSxieVBhc3NLZXlzOls5LDE2LDE3LDE4LDM2LDM3LDM4LDM5LDQwLDkxXSx0cmFuc2xhdGlvbjp7MDp7cGF0dGVybjovXFxkL30sOTp7cGF0dGVybjovXFxkLyxvcHRpb25hbDohMH0sXCIjXCI6e3BhdHRlcm46L1xcZC8scmVjdXJzaXZlOiEwfSxBOntwYXR0ZXJuOi9bYS16QS1aMC05XS99LFM6e3BhdHRlcm46L1thLXpBLVpdL319fTthLmpNYXNrR2xvYmFscz1hLmpNYXNrR2xvYmFsc3x8e307az1hLmpNYXNrR2xvYmFscz1hLmV4dGVuZCghMCx7fSxrLGEuak1hc2tHbG9iYWxzKTtrLmRhdGFNYXNrJiZhLmFwcGx5RGF0YU1hc2soKTtzZXRJbnRlcnZhbChmdW5jdGlvbigpe2Euak1hc2tHbG9iYWxzLndhdGNoRGF0YU1hc2smJmEuYXBwbHlEYXRhTWFzaygpfSxrLndhdGNoSW50ZXJ2YWwpfSx3aW5kb3cualF1ZXJ5LHdpbmRvdy5aZXB0byk7XG5cbi8qICBqUXVlcnkgTmljZSBTZWxlY3QgLSB2MS4xLjBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vaGVybmFuc2FydG9yaW8vanF1ZXJ5LW5pY2Utc2VsZWN0XG4gICAgTWFkZSBieSBIZXJuw6FuIFNhcnRvcmlvICAqL1xuXG4oZnVuY3Rpb24oJCkge1xuXG4gICQuZm4ubmljZVNlbGVjdCA9IGZ1bmN0aW9uKG1ldGhvZCkge1xuXG4gICAgLy8gTWV0aG9kc1xuICAgIGlmICh0eXBlb2YgbWV0aG9kID09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAobWV0aG9kID09ICd1cGRhdGUnKSB7XG4gICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgJHNlbGVjdCA9ICQodGhpcyk7XG4gICAgICAgICAgdmFyICRkcm9wZG93biA9ICQodGhpcykubmV4dCgnLm5pY2Utc2VsZWN0Jyk7XG4gICAgICAgICAgdmFyIG9wZW4gPSAkZHJvcGRvd24uaGFzQ2xhc3MoJ29wZW4nKTtcblxuICAgICAgICAgIGlmICgkZHJvcGRvd24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAkZHJvcGRvd24ucmVtb3ZlKCk7XG4gICAgICAgICAgICBjcmVhdGVfbmljZV9zZWxlY3QoJHNlbGVjdCk7XG5cbiAgICAgICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICAgICRzZWxlY3QubmV4dCgpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAobWV0aG9kID09ICdkZXN0cm95Jykge1xuICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyICRzZWxlY3QgPSAkKHRoaXMpO1xuICAgICAgICAgIHZhciAkZHJvcGRvd24gPSAkKHRoaXMpLm5leHQoJy5uaWNlLXNlbGVjdCcpO1xuXG4gICAgICAgICAgaWYgKCRkcm9wZG93bi5sZW5ndGgpIHtcbiAgICAgICAgICAgICRkcm9wZG93bi5yZW1vdmUoKTtcbiAgICAgICAgICAgICRzZWxlY3QuY3NzKCdkaXNwbGF5JywgJycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICgkKCcubmljZS1zZWxlY3QnKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICQoZG9jdW1lbnQpLm9mZignLm5pY2Vfc2VsZWN0Jyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdNZXRob2QgXCInICsgbWV0aG9kICsgJ1wiIGRvZXMgbm90IGV4aXN0LicpXG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBIaWRlIG5hdGl2ZSBzZWxlY3RcbiAgICB0aGlzLmhpZGUoKTtcblxuICAgIC8vIENyZWF0ZSBjdXN0b20gbWFya3VwXG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyICRzZWxlY3QgPSAkKHRoaXMpO1xuXG4gICAgICBpZiAoISRzZWxlY3QubmV4dCgpLmhhc0NsYXNzKCduaWNlLXNlbGVjdCcpKSB7XG4gICAgICAgIGNyZWF0ZV9uaWNlX3NlbGVjdCgkc2VsZWN0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZV9uaWNlX3NlbGVjdCgkc2VsZWN0KSB7XG4gICAgICAkc2VsZWN0LmFmdGVyKCQoJzxkaXY+PC9kaXY+JylcbiAgICAgICAgLmFkZENsYXNzKCduaWNlLXNlbGVjdCcpXG4gICAgICAgIC5hZGRDbGFzcygkc2VsZWN0LmF0dHIoJ2NsYXNzJykgfHwgJycpXG4gICAgICAgIC5hZGRDbGFzcygkc2VsZWN0LmF0dHIoJ2Rpc2FibGVkJykgPyAnZGlzYWJsZWQnIDogJycpXG4gICAgICAgIC5hdHRyKCd0YWJpbmRleCcsICRzZWxlY3QuYXR0cignZGlzYWJsZWQnKSA/IG51bGwgOiAnMCcpXG4gICAgICAgIC5odG1sKCc8c3BhbiBjbGFzcz1cImN1cnJlbnRcIj48L3NwYW4+PHVsIGNsYXNzPVwibGlzdFwiPjwvdWw+JylcbiAgICAgICk7XG5cbiAgICAgIHZhciAkZHJvcGRvd24gPSAkc2VsZWN0Lm5leHQoKTtcbiAgICAgIHZhciAkb3B0aW9ucyA9ICRzZWxlY3QuZmluZCgnb3B0aW9uJyk7XG4gICAgICB2YXIgJHNlbGVjdGVkID0gJHNlbGVjdC5maW5kKCdvcHRpb246c2VsZWN0ZWQnKTtcblxuICAgICAgJGRyb3Bkb3duLmZpbmQoJy5jdXJyZW50JykuaHRtbCgkc2VsZWN0ZWQuZGF0YSgnZGlzcGxheScpIHx8wqAkc2VsZWN0ZWQudGV4dCgpKTtcblxuICAgICAgJG9wdGlvbnMuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAgIHZhciAkb3B0aW9uID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIGRpc3BsYXkgPSAkb3B0aW9uLmRhdGEoJ2Rpc3BsYXknKTtcblxuICAgICAgICAkZHJvcGRvd24uZmluZCgndWwnKS5hcHBlbmQoJCgnPGxpPjwvbGk+JylcbiAgICAgICAgICAuYXR0cignZGF0YS12YWx1ZScsICRvcHRpb24udmFsKCkpXG4gICAgICAgICAgLmF0dHIoJ2RhdGEtZGlzcGxheScsIChkaXNwbGF5IHx8IG51bGwpKVxuICAgICAgICAgIC5hZGRDbGFzcygnb3B0aW9uJyArXG4gICAgICAgICAgICAoJG9wdGlvbi5pcygnOnNlbGVjdGVkJykgPyAnIHNlbGVjdGVkJyA6ICcnKSArXG4gICAgICAgICAgICAoJG9wdGlvbi5pcygnOmRpc2FibGVkJykgPyAnIGRpc2FibGVkJyA6ICcnKSlcbiAgICAgICAgICAuaHRtbCgkb3B0aW9uLnRleHQoKSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qIEV2ZW50IGxpc3RlbmVycyAqL1xuXG4gICAgLy8gVW5iaW5kIGV4aXN0aW5nIGV2ZW50cyBpbiBjYXNlIHRoYXQgdGhlIHBsdWdpbiBoYXMgYmVlbiBpbml0aWFsaXplZCBiZWZvcmVcbiAgICAkKGRvY3VtZW50KS5vZmYoJy5uaWNlX3NlbGVjdCcpO1xuXG4gICAgLy8gT3Blbi9jbG9zZVxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljay5uaWNlX3NlbGVjdCcsICcubmljZS1zZWxlY3QnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgdmFyICRkcm9wZG93biA9ICQodGhpcyk7XG5cbiAgICAgICQoJy5uaWNlLXNlbGVjdCcpLm5vdCgkZHJvcGRvd24pLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAkZHJvcGRvd24udG9nZ2xlQ2xhc3MoJ29wZW4nKTtcblxuICAgICAgaWYgKCRkcm9wZG93bi5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgICAgICRkcm9wZG93bi5maW5kKCcub3B0aW9uJyk7XG4gICAgICAgICRkcm9wZG93bi5maW5kKCcuZm9jdXMnKS5yZW1vdmVDbGFzcygnZm9jdXMnKTtcbiAgICAgICAgJGRyb3Bkb3duLmZpbmQoJy5zZWxlY3RlZCcpLmFkZENsYXNzKCdmb2N1cycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGRyb3Bkb3duLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBDbG9zZSB3aGVuIGNsaWNraW5nIG91dHNpZGVcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2submljZV9zZWxlY3QnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgaWYgKCQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCcubmljZS1zZWxlY3QnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgJCgnLm5pY2Utc2VsZWN0JykucmVtb3ZlQ2xhc3MoJ29wZW4nKS5maW5kKCcub3B0aW9uJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBPcHRpb24gY2xpY2tcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2submljZV9zZWxlY3QnLCAnLm5pY2Utc2VsZWN0IC5vcHRpb246bm90KC5kaXNhYmxlZCknLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgdmFyICRvcHRpb24gPSAkKHRoaXMpO1xuICAgICAgdmFyICRkcm9wZG93biA9ICRvcHRpb24uY2xvc2VzdCgnLm5pY2Utc2VsZWN0Jyk7XG5cbiAgICAgICRkcm9wZG93bi5maW5kKCcuc2VsZWN0ZWQnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgICRvcHRpb24uYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG5cbiAgICAgIHZhciB0ZXh0ID0gJG9wdGlvbi5kYXRhKCdkaXNwbGF5JykgfHwgJG9wdGlvbi50ZXh0KCk7XG4gICAgICAkZHJvcGRvd24uZmluZCgnLmN1cnJlbnQnKS50ZXh0KHRleHQpO1xuXG4gICAgICAkZHJvcGRvd24ucHJldignc2VsZWN0JykudmFsKCRvcHRpb24uZGF0YSgndmFsdWUnKSkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgfSk7XG5cbiAgICAvLyBLZXlib2FyZCBldmVudHNcbiAgICAkKGRvY3VtZW50KS5vbigna2V5ZG93bi5uaWNlX3NlbGVjdCcsICcubmljZS1zZWxlY3QnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgdmFyICRkcm9wZG93biA9ICQodGhpcyk7XG4gICAgICB2YXIgJGZvY3VzZWRfb3B0aW9uID0gJCgkZHJvcGRvd24uZmluZCgnLmZvY3VzJykgfHwgJGRyb3Bkb3duLmZpbmQoJy5saXN0IC5vcHRpb24uc2VsZWN0ZWQnKSk7XG5cbiAgICAgIC8vIFNwYWNlIG9yIEVudGVyXG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAzMiB8fCBldmVudC5rZXlDb2RlID09IDEzKSB7XG4gICAgICAgIGlmICgkZHJvcGRvd24uaGFzQ2xhc3MoJ29wZW4nKSkge1xuICAgICAgICAgICRmb2N1c2VkX29wdGlvbi50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRkcm9wZG93bi50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIC8vIERvd25cbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PSA0MCkge1xuICAgICAgICBpZiAoISRkcm9wZG93bi5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgICAgICAgJGRyb3Bkb3duLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyICRuZXh0ID0gJGZvY3VzZWRfb3B0aW9uLm5leHRBbGwoJy5vcHRpb246bm90KC5kaXNhYmxlZCknKS5maXJzdCgpO1xuICAgICAgICAgIGlmICgkbmV4dC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAkZHJvcGRvd24uZmluZCgnLmZvY3VzJykucmVtb3ZlQ2xhc3MoJ2ZvY3VzJyk7XG4gICAgICAgICAgICAkbmV4dC5hZGRDbGFzcygnZm9jdXMnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgLy8gVXBcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PSAzOCkge1xuICAgICAgICBpZiAoISRkcm9wZG93bi5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgICAgICAgJGRyb3Bkb3duLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyICRwcmV2ID0gJGZvY3VzZWRfb3B0aW9uLnByZXZBbGwoJy5vcHRpb246bm90KC5kaXNhYmxlZCknKS5maXJzdCgpO1xuICAgICAgICAgIGlmICgkcHJldi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAkZHJvcGRvd24uZmluZCgnLmZvY3VzJykucmVtb3ZlQ2xhc3MoJ2ZvY3VzJyk7XG4gICAgICAgICAgICAkcHJldi5hZGRDbGFzcygnZm9jdXMnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgLy8gRXNjXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT0gMjcpIHtcbiAgICAgICAgaWYgKCRkcm9wZG93bi5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgICAgICAgJGRyb3Bkb3duLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH1cbiAgICAgIC8vIFRhYlxuICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09IDkpIHtcbiAgICAgICAgaWYgKCRkcm9wZG93bi5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBEZXRlY3QgQ1NTIHBvaW50ZXItZXZlbnRzIHN1cHBvcnQsIGZvciBJRSA8PSAxMC4gRnJvbSBNb2Rlcm5penIuXG4gICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpLnN0eWxlO1xuICAgIHN0eWxlLmNzc1RleHQgPSAncG9pbnRlci1ldmVudHM6YXV0byc7XG4gICAgaWYgKHN0eWxlLnBvaW50ZXJFdmVudHMgIT09ICdhdXRvJykge1xuICAgICAgJCgnaHRtbCcpLmFkZENsYXNzKCduby1jc3Nwb2ludGVyZXZlbnRzJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfTtcblxufShqUXVlcnkpKTtcbihmdW5jdGlvbigkKXtcblxuICAkLmZuLnR3ZW50eXR3ZW50eSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICB2YXIgb3B0aW9ucyA9ICQuZXh0ZW5kKHtcbiAgICAgIGRlZmF1bHRfb2Zmc2V0X3BjdDogMC41LFxuICAgICAgb3JpZW50YXRpb246ICdob3Jpem9udGFsJyxcbiAgICAgIGJlZm9yZV9sYWJlbDogJ0JlZm9yZScsXG4gICAgICBhZnRlcl9sYWJlbDogJ0FmdGVyJyxcbiAgICAgIG5vX292ZXJsYXk6IGZhbHNlLFxuICAgICAgbW92ZV9zbGlkZXJfb25faG92ZXI6IGZhbHNlLFxuICAgICAgbW92ZV93aXRoX2hhbmRsZV9vbmx5OiB0cnVlLFxuICAgICAgY2xpY2tfdG9fbW92ZTogZmFsc2VcbiAgICB9LCBvcHRpb25zKTtcblxuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG5cbiAgICAgIHZhciBzbGlkZXJQY3QgPSBvcHRpb25zLmRlZmF1bHRfb2Zmc2V0X3BjdDtcbiAgICAgIHZhciBjb250YWluZXIgPSAkKHRoaXMpO1xuICAgICAgdmFyIHNsaWRlck9yaWVudGF0aW9uID0gb3B0aW9ucy5vcmllbnRhdGlvbjtcbiAgICAgIHZhciBiZWZvcmVEaXJlY3Rpb24gPSAoc2xpZGVyT3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpID8gJ2Rvd24nIDogJ2xlZnQnO1xuICAgICAgdmFyIGFmdGVyRGlyZWN0aW9uID0gKHNsaWRlck9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSA/ICd1cCcgOiAncmlnaHQnO1xuXG5cbiAgICAgIGNvbnRhaW5lci53cmFwKFwiPGRpdiBjbGFzcz0ndHdlbnR5dHdlbnR5LXdyYXBwZXIgdHdlbnR5dHdlbnR5LVwiICsgc2xpZGVyT3JpZW50YXRpb24gKyBcIic+PC9kaXY+XCIpO1xuICAgICAgaWYoIW9wdGlvbnMubm9fb3ZlcmxheSkge1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKFwiPGRpdiBjbGFzcz0ndHdlbnR5dHdlbnR5LW92ZXJsYXknPjwvZGl2PlwiKTtcbiAgICAgICAgdmFyIG92ZXJsYXkgPSBjb250YWluZXIuZmluZChcIi50d2VudHl0d2VudHktb3ZlcmxheVwiKTtcbiAgICAgICAgb3ZlcmxheS5hcHBlbmQoXCI8ZGl2IGNsYXNzPSd0d2VudHl0d2VudHktYmVmb3JlLWxhYmVsJyBkYXRhLWNvbnRlbnQ9J1wiK29wdGlvbnMuYmVmb3JlX2xhYmVsK1wiJz48L2Rpdj5cIik7XG4gICAgICAgIG92ZXJsYXkuYXBwZW5kKFwiPGRpdiBjbGFzcz0ndHdlbnR5dHdlbnR5LWFmdGVyLWxhYmVsJyBkYXRhLWNvbnRlbnQ9J1wiK29wdGlvbnMuYWZ0ZXJfbGFiZWwrXCInPjwvZGl2PlwiKTtcbiAgICAgIH1cbiAgICAgIHZhciBiZWZvcmVJbWcgPSBjb250YWluZXIuZmluZChcImltZzpmaXJzdFwiKTtcbiAgICAgIHZhciBhZnRlckltZyA9IGNvbnRhaW5lci5maW5kKFwiaW1nOmxhc3RcIik7XG4gICAgICBjb250YWluZXIuYXBwZW5kKFwiPGRpdiBjbGFzcz0ndHdlbnR5dHdlbnR5LWhhbmRsZSc+PC9kaXY+XCIpO1xuICAgICAgdmFyIHNsaWRlciA9IGNvbnRhaW5lci5maW5kKFwiLnR3ZW50eXR3ZW50eS1oYW5kbGVcIik7XG4gICAgICBzbGlkZXIuYXBwZW5kKFwiPHNwYW4gY2xhc3M9J3R3ZW50eXR3ZW50eS1cIiArIGJlZm9yZURpcmVjdGlvbiArIFwiLWFycm93Jz48L3NwYW4+XCIpO1xuICAgICAgc2xpZGVyLmFwcGVuZChcIjxzcGFuIGNsYXNzPSd0d2VudHl0d2VudHktXCIgKyBhZnRlckRpcmVjdGlvbiArIFwiLWFycm93Jz48L3NwYW4+XCIpO1xuICAgICAgY29udGFpbmVyLmFkZENsYXNzKFwidHdlbnR5dHdlbnR5LWNvbnRhaW5lclwiKTtcbiAgICAgIGJlZm9yZUltZy5hZGRDbGFzcyhcInR3ZW50eXR3ZW50eS1iZWZvcmVcIik7XG4gICAgICBhZnRlckltZy5hZGRDbGFzcyhcInR3ZW50eXR3ZW50eS1hZnRlclwiKTtcblxuICAgICAgdmFyIGNhbGNPZmZzZXQgPSBmdW5jdGlvbihkaW1lbnNpb25QY3QpIHtcbiAgICAgICAgdmFyIHcgPSBiZWZvcmVJbWcud2lkdGgoKTtcbiAgICAgICAgdmFyIGggPSBiZWZvcmVJbWcuaGVpZ2h0KCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdzogdytcInB4XCIsXG4gICAgICAgICAgaDogaCtcInB4XCIsXG4gICAgICAgICAgY3c6IChkaW1lbnNpb25QY3QqdykrXCJweFwiLFxuICAgICAgICAgIGNoOiAoZGltZW5zaW9uUGN0KmgpK1wicHhcIlxuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgdmFyIGFkanVzdENvbnRhaW5lciA9IGZ1bmN0aW9uKG9mZnNldCkge1xuICAgICAgXHRpZiAoc2xpZGVyT3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICBiZWZvcmVJbWcuY3NzKFwiY2xpcFwiLCBcInJlY3QoMCxcIitvZmZzZXQudytcIixcIitvZmZzZXQuY2grXCIsMClcIik7XG4gICAgICAgICAgYWZ0ZXJJbWcuY3NzKFwiY2xpcFwiLCBcInJlY3QoXCIrb2Zmc2V0LmNoK1wiLFwiK29mZnNldC53K1wiLFwiK29mZnNldC5oK1wiLDApXCIpO1xuICAgICAgXHR9XG4gICAgICBcdGVsc2Uge1xuICAgICAgICAgIGJlZm9yZUltZy5jc3MoXCJjbGlwXCIsIFwicmVjdCgwLFwiK29mZnNldC5jdytcIixcIitvZmZzZXQuaCtcIiwwKVwiKTtcbiAgICAgICAgICBhZnRlckltZy5jc3MoXCJjbGlwXCIsIFwicmVjdCgwLFwiK29mZnNldC53K1wiLFwiK29mZnNldC5oK1wiLFwiK29mZnNldC5jdytcIilcIik7XG4gICAgXHR9XG4gICAgICAgIGNvbnRhaW5lci5jc3MoXCJoZWlnaHRcIiwgb2Zmc2V0LmgpO1xuICAgICAgfTtcblxuICAgICAgdmFyIGFkanVzdFNsaWRlciA9IGZ1bmN0aW9uKHBjdCkge1xuICAgICAgICB2YXIgb2Zmc2V0ID0gY2FsY09mZnNldChwY3QpO1xuICAgICAgICBzbGlkZXIuY3NzKChzbGlkZXJPcmllbnRhdGlvbj09PVwidmVydGljYWxcIikgPyBcInRvcFwiIDogXCJsZWZ0XCIsIChzbGlkZXJPcmllbnRhdGlvbj09PVwidmVydGljYWxcIikgPyBvZmZzZXQuY2ggOiBvZmZzZXQuY3cpO1xuICAgICAgICBhZGp1c3RDb250YWluZXIob2Zmc2V0KTtcbiAgICAgIH07XG5cbiAgICAgIC8vIFJldHVybiB0aGUgbnVtYmVyIHNwZWNpZmllZCBvciB0aGUgbWluL21heCBudW1iZXIgaWYgaXQgb3V0c2lkZSB0aGUgcmFuZ2UgZ2l2ZW4uXG4gICAgICB2YXIgbWluTWF4TnVtYmVyID0gZnVuY3Rpb24obnVtLCBtaW4sIG1heCkge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIG51bSkpO1xuICAgICAgfTtcblxuICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBzbGlkZXIgcGVyY2VudGFnZSBiYXNlZCBvbiB0aGUgcG9zaXRpb24uXG4gICAgICB2YXIgZ2V0U2xpZGVyUGVyY2VudGFnZSA9IGZ1bmN0aW9uKHBvc2l0aW9uWCwgcG9zaXRpb25ZKSB7XG4gICAgICAgIHZhciBzbGlkZXJQZXJjZW50YWdlID0gKHNsaWRlck9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSA/XG4gICAgICAgICAgKHBvc2l0aW9uWS1vZmZzZXRZKS9pbWdIZWlnaHQgOlxuICAgICAgICAgIChwb3NpdGlvblgtb2Zmc2V0WCkvaW1nV2lkdGg7XG5cbiAgICAgICAgcmV0dXJuIG1pbk1heE51bWJlcihzbGlkZXJQZXJjZW50YWdlLCAwLCAxKTtcbiAgICAgIH07XG5cblxuICAgICAgJCh3aW5kb3cpLm9uKFwicmVzaXplLnR3ZW50eXR3ZW50eVwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGFkanVzdFNsaWRlcihzbGlkZXJQY3QpO1xuICAgICAgfSk7XG5cbiAgICAgIHZhciBvZmZzZXRYID0gMDtcbiAgICAgIHZhciBvZmZzZXRZID0gMDtcbiAgICAgIHZhciBpbWdXaWR0aCA9IDA7XG4gICAgICB2YXIgaW1nSGVpZ2h0ID0gMDtcbiAgICAgIHZhciBvbk1vdmVTdGFydCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKCgoZS5kaXN0WCA+IGUuZGlzdFkgJiYgZS5kaXN0WCA8IC1lLmRpc3RZKSB8fCAoZS5kaXN0WCA8IGUuZGlzdFkgJiYgZS5kaXN0WCA+IC1lLmRpc3RZKSkgJiYgc2xpZGVyT3JpZW50YXRpb24gIT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKChlLmRpc3RYIDwgZS5kaXN0WSAmJiBlLmRpc3RYIDwgLWUuZGlzdFkpIHx8IChlLmRpc3RYID4gZS5kaXN0WSAmJiBlLmRpc3RYID4gLWUuZGlzdFkpKSAmJiBzbGlkZXJPcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBjb250YWluZXIuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgIG9mZnNldFggPSBjb250YWluZXIub2Zmc2V0KCkubGVmdDtcbiAgICAgICAgb2Zmc2V0WSA9IGNvbnRhaW5lci5vZmZzZXQoKS50b3A7XG4gICAgICAgIGltZ1dpZHRoID0gYmVmb3JlSW1nLndpZHRoKCk7XG4gICAgICAgIGltZ0hlaWdodCA9IGJlZm9yZUltZy5oZWlnaHQoKTtcbiAgICAgIH07XG4gICAgICB2YXIgb25Nb3ZlID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoY29udGFpbmVyLmhhc0NsYXNzKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgICAgc2xpZGVyUGN0ID0gZ2V0U2xpZGVyUGVyY2VudGFnZShlLnBhZ2VYLCBlLnBhZ2VZKTtcbiAgICAgICAgICBhZGp1c3RTbGlkZXIoc2xpZGVyUGN0KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHZhciBvbk1vdmVFbmQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICB9O1xuXG4gICAgICB2YXIgbW92ZVRhcmdldCA9IG9wdGlvbnMubW92ZV93aXRoX2hhbmRsZV9vbmx5ID8gc2xpZGVyIDogY29udGFpbmVyO1xuICAgICAgbW92ZVRhcmdldC5vbihcIm1vdmVzdGFydFwiLG9uTW92ZVN0YXJ0KTtcbiAgICAgIG1vdmVUYXJnZXQub24oXCJtb3ZlXCIsb25Nb3ZlKTtcbiAgICAgIG1vdmVUYXJnZXQub24oXCJtb3ZlZW5kXCIsb25Nb3ZlRW5kKTtcblxuICAgICAgaWYgKG9wdGlvbnMubW92ZV9zbGlkZXJfb25faG92ZXIpIHtcbiAgICAgICAgY29udGFpbmVyLm9uKFwibW91c2VlbnRlclwiLCBvbk1vdmVTdGFydCk7XG4gICAgICAgIGNvbnRhaW5lci5vbihcIm1vdXNlbW92ZVwiLCBvbk1vdmUpO1xuICAgICAgICBjb250YWluZXIub24oXCJtb3VzZWxlYXZlXCIsIG9uTW92ZUVuZCk7XG4gICAgICB9XG5cbiAgICAgIHNsaWRlci5vbihcInRvdWNobW92ZVwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb250YWluZXIuZmluZChcImltZ1wiKS5vbihcIm1vdXNlZG93blwiLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChvcHRpb25zLmNsaWNrX3RvX21vdmUpIHtcbiAgICAgICAgY29udGFpbmVyLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICBvZmZzZXRYID0gY29udGFpbmVyLm9mZnNldCgpLmxlZnQ7XG4gICAgICAgICAgb2Zmc2V0WSA9IGNvbnRhaW5lci5vZmZzZXQoKS50b3A7XG4gICAgICAgICAgaW1nV2lkdGggPSBiZWZvcmVJbWcud2lkdGgoKTtcbiAgICAgICAgICBpbWdIZWlnaHQgPSBiZWZvcmVJbWcuaGVpZ2h0KCk7XG5cbiAgICAgICAgICBzbGlkZXJQY3QgPSBnZXRTbGlkZXJQZXJjZW50YWdlKGUucGFnZVgsIGUucGFnZVkpO1xuICAgICAgICAgIGFkanVzdFNsaWRlcihzbGlkZXJQY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoXCJyZXNpemUudHdlbnR5dHdlbnR5XCIpO1xuICAgIH0pO1xuICB9O1xuXG59KShqUXVlcnkpO1xuXG4vKiEgalF1ZXJ5IFZhbGlkYXRpb24gUGx1Z2luIC0gdjEuMTkuMSAtIDYvMTUvMjAxOVxuICogaHR0cHM6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy9cbiAqIENvcHlyaWdodCAoYykgMjAxOSBKw7ZybiBaYWVmZmVyZXI7IExpY2Vuc2VkIE1JVCAqL1xuIWZ1bmN0aW9uKGEpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wianF1ZXJ5XCJdLGEpOlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWEocmVxdWlyZShcImpxdWVyeVwiKSk6YShqUXVlcnkpfShmdW5jdGlvbihhKXthLmV4dGVuZChhLmZuLHt2YWxpZGF0ZTpmdW5jdGlvbihiKXtpZighdGhpcy5sZW5ndGgpcmV0dXJuIHZvaWQoYiYmYi5kZWJ1ZyYmd2luZG93LmNvbnNvbGUmJmNvbnNvbGUud2FybihcIk5vdGhpbmcgc2VsZWN0ZWQsIGNhbid0IHZhbGlkYXRlLCByZXR1cm5pbmcgbm90aGluZy5cIikpO3ZhciBjPWEuZGF0YSh0aGlzWzBdLFwidmFsaWRhdG9yXCIpO3JldHVybiBjP2M6KHRoaXMuYXR0cihcIm5vdmFsaWRhdGVcIixcIm5vdmFsaWRhdGVcIiksYz1uZXcgYS52YWxpZGF0b3IoYix0aGlzWzBdKSxhLmRhdGEodGhpc1swXSxcInZhbGlkYXRvclwiLGMpLGMuc2V0dGluZ3Mub25zdWJtaXQmJih0aGlzLm9uKFwiY2xpY2sudmFsaWRhdGVcIixcIjpzdWJtaXRcIixmdW5jdGlvbihiKXtjLnN1Ym1pdEJ1dHRvbj1iLmN1cnJlbnRUYXJnZXQsYSh0aGlzKS5oYXNDbGFzcyhcImNhbmNlbFwiKSYmKGMuY2FuY2VsU3VibWl0PSEwKSx2b2lkIDAhPT1hKHRoaXMpLmF0dHIoXCJmb3Jtbm92YWxpZGF0ZVwiKSYmKGMuY2FuY2VsU3VibWl0PSEwKX0pLHRoaXMub24oXCJzdWJtaXQudmFsaWRhdGVcIixmdW5jdGlvbihiKXtmdW5jdGlvbiBkKCl7dmFyIGQsZTtyZXR1cm4gYy5zdWJtaXRCdXR0b24mJihjLnNldHRpbmdzLnN1Ym1pdEhhbmRsZXJ8fGMuZm9ybVN1Ym1pdHRlZCkmJihkPWEoXCI8aW5wdXQgdHlwZT0naGlkZGVuJy8+XCIpLmF0dHIoXCJuYW1lXCIsYy5zdWJtaXRCdXR0b24ubmFtZSkudmFsKGEoYy5zdWJtaXRCdXR0b24pLnZhbCgpKS5hcHBlbmRUbyhjLmN1cnJlbnRGb3JtKSksIShjLnNldHRpbmdzLnN1Ym1pdEhhbmRsZXImJiFjLnNldHRpbmdzLmRlYnVnKXx8KGU9Yy5zZXR0aW5ncy5zdWJtaXRIYW5kbGVyLmNhbGwoYyxjLmN1cnJlbnRGb3JtLGIpLGQmJmQucmVtb3ZlKCksdm9pZCAwIT09ZSYmZSl9cmV0dXJuIGMuc2V0dGluZ3MuZGVidWcmJmIucHJldmVudERlZmF1bHQoKSxjLmNhbmNlbFN1Ym1pdD8oYy5jYW5jZWxTdWJtaXQ9ITEsZCgpKTpjLmZvcm0oKT9jLnBlbmRpbmdSZXF1ZXN0PyhjLmZvcm1TdWJtaXR0ZWQ9ITAsITEpOmQoKTooYy5mb2N1c0ludmFsaWQoKSwhMSl9KSksYyl9LHZhbGlkOmZ1bmN0aW9uKCl7dmFyIGIsYyxkO3JldHVybiBhKHRoaXNbMF0pLmlzKFwiZm9ybVwiKT9iPXRoaXMudmFsaWRhdGUoKS5mb3JtKCk6KGQ9W10sYj0hMCxjPWEodGhpc1swXS5mb3JtKS52YWxpZGF0ZSgpLHRoaXMuZWFjaChmdW5jdGlvbigpe2I9Yy5lbGVtZW50KHRoaXMpJiZiLGJ8fChkPWQuY29uY2F0KGMuZXJyb3JMaXN0KSl9KSxjLmVycm9yTGlzdD1kKSxifSxydWxlczpmdW5jdGlvbihiLGMpe3ZhciBkLGUsZixnLGgsaSxqPXRoaXNbMF0saz1cInVuZGVmaW5lZFwiIT10eXBlb2YgdGhpcy5hdHRyKFwiY29udGVudGVkaXRhYmxlXCIpJiZcImZhbHNlXCIhPT10aGlzLmF0dHIoXCJjb250ZW50ZWRpdGFibGVcIik7aWYobnVsbCE9aiYmKCFqLmZvcm0mJmsmJihqLmZvcm09dGhpcy5jbG9zZXN0KFwiZm9ybVwiKVswXSxqLm5hbWU9dGhpcy5hdHRyKFwibmFtZVwiKSksbnVsbCE9ai5mb3JtKSl7aWYoYilzd2l0Y2goZD1hLmRhdGEoai5mb3JtLFwidmFsaWRhdG9yXCIpLnNldHRpbmdzLGU9ZC5ydWxlcyxmPWEudmFsaWRhdG9yLnN0YXRpY1J1bGVzKGopLGIpe2Nhc2VcImFkZFwiOmEuZXh0ZW5kKGYsYS52YWxpZGF0b3Iubm9ybWFsaXplUnVsZShjKSksZGVsZXRlIGYubWVzc2FnZXMsZVtqLm5hbWVdPWYsYy5tZXNzYWdlcyYmKGQubWVzc2FnZXNbai5uYW1lXT1hLmV4dGVuZChkLm1lc3NhZ2VzW2oubmFtZV0sYy5tZXNzYWdlcykpO2JyZWFrO2Nhc2VcInJlbW92ZVwiOnJldHVybiBjPyhpPXt9LGEuZWFjaChjLnNwbGl0KC9cXHMvKSxmdW5jdGlvbihhLGIpe2lbYl09ZltiXSxkZWxldGUgZltiXX0pLGkpOihkZWxldGUgZVtqLm5hbWVdLGYpfXJldHVybiBnPWEudmFsaWRhdG9yLm5vcm1hbGl6ZVJ1bGVzKGEuZXh0ZW5kKHt9LGEudmFsaWRhdG9yLmNsYXNzUnVsZXMoaiksYS52YWxpZGF0b3IuYXR0cmlidXRlUnVsZXMoaiksYS52YWxpZGF0b3IuZGF0YVJ1bGVzKGopLGEudmFsaWRhdG9yLnN0YXRpY1J1bGVzKGopKSxqKSxnLnJlcXVpcmVkJiYoaD1nLnJlcXVpcmVkLGRlbGV0ZSBnLnJlcXVpcmVkLGc9YS5leHRlbmQoe3JlcXVpcmVkOmh9LGcpKSxnLnJlbW90ZSYmKGg9Zy5yZW1vdGUsZGVsZXRlIGcucmVtb3RlLGc9YS5leHRlbmQoZyx7cmVtb3RlOmh9KSksZ319fSksYS5leHRlbmQoYS5leHByLnBzZXVkb3N8fGEuZXhwcltcIjpcIl0se2JsYW5rOmZ1bmN0aW9uKGIpe3JldHVybiFhLnRyaW0oXCJcIithKGIpLnZhbCgpKX0sZmlsbGVkOmZ1bmN0aW9uKGIpe3ZhciBjPWEoYikudmFsKCk7cmV0dXJuIG51bGwhPT1jJiYhIWEudHJpbShcIlwiK2MpfSx1bmNoZWNrZWQ6ZnVuY3Rpb24oYil7cmV0dXJuIWEoYikucHJvcChcImNoZWNrZWRcIil9fSksYS52YWxpZGF0b3I9ZnVuY3Rpb24oYixjKXt0aGlzLnNldHRpbmdzPWEuZXh0ZW5kKCEwLHt9LGEudmFsaWRhdG9yLmRlZmF1bHRzLGIpLHRoaXMuY3VycmVudEZvcm09Yyx0aGlzLmluaXQoKX0sYS52YWxpZGF0b3IuZm9ybWF0PWZ1bmN0aW9uKGIsYyl7cmV0dXJuIDE9PT1hcmd1bWVudHMubGVuZ3RoP2Z1bmN0aW9uKCl7dmFyIGM9YS5tYWtlQXJyYXkoYXJndW1lbnRzKTtyZXR1cm4gYy51bnNoaWZ0KGIpLGEudmFsaWRhdG9yLmZvcm1hdC5hcHBseSh0aGlzLGMpfTp2b2lkIDA9PT1jP2I6KGFyZ3VtZW50cy5sZW5ndGg+MiYmYy5jb25zdHJ1Y3RvciE9PUFycmF5JiYoYz1hLm1ha2VBcnJheShhcmd1bWVudHMpLnNsaWNlKDEpKSxjLmNvbnN0cnVjdG9yIT09QXJyYXkmJihjPVtjXSksYS5lYWNoKGMsZnVuY3Rpb24oYSxjKXtiPWIucmVwbGFjZShuZXcgUmVnRXhwKFwiXFxcXHtcIithK1wiXFxcXH1cIixcImdcIiksZnVuY3Rpb24oKXtyZXR1cm4gY30pfSksYil9LGEuZXh0ZW5kKGEudmFsaWRhdG9yLHtkZWZhdWx0czp7bWVzc2FnZXM6e30sZ3JvdXBzOnt9LHJ1bGVzOnt9LGVycm9yQ2xhc3M6XCJlcnJvclwiLHBlbmRpbmdDbGFzczpcInBlbmRpbmdcIix2YWxpZENsYXNzOlwidmFsaWRcIixlcnJvckVsZW1lbnQ6XCJsYWJlbFwiLGZvY3VzQ2xlYW51cDohMSxmb2N1c0ludmFsaWQ6ITAsZXJyb3JDb250YWluZXI6YShbXSksZXJyb3JMYWJlbENvbnRhaW5lcjphKFtdKSxvbnN1Ym1pdDohMCxpZ25vcmU6XCI6aGlkZGVuXCIsaWdub3JlVGl0bGU6ITEsb25mb2N1c2luOmZ1bmN0aW9uKGEpe3RoaXMubGFzdEFjdGl2ZT1hLHRoaXMuc2V0dGluZ3MuZm9jdXNDbGVhbnVwJiYodGhpcy5zZXR0aW5ncy51bmhpZ2hsaWdodCYmdGhpcy5zZXR0aW5ncy51bmhpZ2hsaWdodC5jYWxsKHRoaXMsYSx0aGlzLnNldHRpbmdzLmVycm9yQ2xhc3MsdGhpcy5zZXR0aW5ncy52YWxpZENsYXNzKSx0aGlzLmhpZGVUaGVzZSh0aGlzLmVycm9yc0ZvcihhKSkpfSxvbmZvY3Vzb3V0OmZ1bmN0aW9uKGEpe3RoaXMuY2hlY2thYmxlKGEpfHwhKGEubmFtZSBpbiB0aGlzLnN1Ym1pdHRlZCkmJnRoaXMub3B0aW9uYWwoYSl8fHRoaXMuZWxlbWVudChhKX0sb25rZXl1cDpmdW5jdGlvbihiLGMpe3ZhciBkPVsxNiwxNywxOCwyMCwzNSwzNiwzNywzOCwzOSw0MCw0NSwxNDQsMjI1XTs5PT09Yy53aGljaCYmXCJcIj09PXRoaXMuZWxlbWVudFZhbHVlKGIpfHxhLmluQXJyYXkoYy5rZXlDb2RlLGQpIT09LTF8fChiLm5hbWUgaW4gdGhpcy5zdWJtaXR0ZWR8fGIubmFtZSBpbiB0aGlzLmludmFsaWQpJiZ0aGlzLmVsZW1lbnQoYil9LG9uY2xpY2s6ZnVuY3Rpb24oYSl7YS5uYW1lIGluIHRoaXMuc3VibWl0dGVkP3RoaXMuZWxlbWVudChhKTphLnBhcmVudE5vZGUubmFtZSBpbiB0aGlzLnN1Ym1pdHRlZCYmdGhpcy5lbGVtZW50KGEucGFyZW50Tm9kZSl9LGhpZ2hsaWdodDpmdW5jdGlvbihiLGMsZCl7XCJyYWRpb1wiPT09Yi50eXBlP3RoaXMuZmluZEJ5TmFtZShiLm5hbWUpLmFkZENsYXNzKGMpLnJlbW92ZUNsYXNzKGQpOmEoYikuYWRkQ2xhc3MoYykucmVtb3ZlQ2xhc3MoZCl9LHVuaGlnaGxpZ2h0OmZ1bmN0aW9uKGIsYyxkKXtcInJhZGlvXCI9PT1iLnR5cGU/dGhpcy5maW5kQnlOYW1lKGIubmFtZSkucmVtb3ZlQ2xhc3MoYykuYWRkQ2xhc3MoZCk6YShiKS5yZW1vdmVDbGFzcyhjKS5hZGRDbGFzcyhkKX19LHNldERlZmF1bHRzOmZ1bmN0aW9uKGIpe2EuZXh0ZW5kKGEudmFsaWRhdG9yLmRlZmF1bHRzLGIpfSxtZXNzYWdlczp7cmVxdWlyZWQ6XCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLlwiLHJlbW90ZTpcIlBsZWFzZSBmaXggdGhpcyBmaWVsZC5cIixlbWFpbDpcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuXCIsdXJsOlwiUGxlYXNlIGVudGVyIGEgdmFsaWQgVVJMLlwiLGRhdGU6XCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBkYXRlLlwiLGRhdGVJU086XCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBkYXRlIChJU08pLlwiLG51bWJlcjpcIlBsZWFzZSBlbnRlciBhIHZhbGlkIG51bWJlci5cIixkaWdpdHM6XCJQbGVhc2UgZW50ZXIgb25seSBkaWdpdHMuXCIsZXF1YWxUbzpcIlBsZWFzZSBlbnRlciB0aGUgc2FtZSB2YWx1ZSBhZ2Fpbi5cIixtYXhsZW5ndGg6YS52YWxpZGF0b3IuZm9ybWF0KFwiUGxlYXNlIGVudGVyIG5vIG1vcmUgdGhhbiB7MH0gY2hhcmFjdGVycy5cIiksbWlubGVuZ3RoOmEudmFsaWRhdG9yLmZvcm1hdChcIlBsZWFzZSBlbnRlciBhdCBsZWFzdCB7MH0gY2hhcmFjdGVycy5cIikscmFuZ2VsZW5ndGg6YS52YWxpZGF0b3IuZm9ybWF0KFwiUGxlYXNlIGVudGVyIGEgdmFsdWUgYmV0d2VlbiB7MH0gYW5kIHsxfSBjaGFyYWN0ZXJzIGxvbmcuXCIpLHJhbmdlOmEudmFsaWRhdG9yLmZvcm1hdChcIlBsZWFzZSBlbnRlciBhIHZhbHVlIGJldHdlZW4gezB9IGFuZCB7MX0uXCIpLG1heDphLnZhbGlkYXRvci5mb3JtYXQoXCJQbGVhc2UgZW50ZXIgYSB2YWx1ZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gezB9LlwiKSxtaW46YS52YWxpZGF0b3IuZm9ybWF0KFwiUGxlYXNlIGVudGVyIGEgdmFsdWUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIHswfS5cIiksc3RlcDphLnZhbGlkYXRvci5mb3JtYXQoXCJQbGVhc2UgZW50ZXIgYSBtdWx0aXBsZSBvZiB7MH0uXCIpfSxhdXRvQ3JlYXRlUmFuZ2VzOiExLHByb3RvdHlwZTp7aW5pdDpmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYil7dmFyIGM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEodGhpcykuYXR0cihcImNvbnRlbnRlZGl0YWJsZVwiKSYmXCJmYWxzZVwiIT09YSh0aGlzKS5hdHRyKFwiY29udGVudGVkaXRhYmxlXCIpO2lmKCF0aGlzLmZvcm0mJmMmJih0aGlzLmZvcm09YSh0aGlzKS5jbG9zZXN0KFwiZm9ybVwiKVswXSx0aGlzLm5hbWU9YSh0aGlzKS5hdHRyKFwibmFtZVwiKSksZD09PXRoaXMuZm9ybSl7dmFyIGU9YS5kYXRhKHRoaXMuZm9ybSxcInZhbGlkYXRvclwiKSxmPVwib25cIitiLnR5cGUucmVwbGFjZSgvXnZhbGlkYXRlLyxcIlwiKSxnPWUuc2V0dGluZ3M7Z1tmXSYmIWEodGhpcykuaXMoZy5pZ25vcmUpJiZnW2ZdLmNhbGwoZSx0aGlzLGIpfX10aGlzLmxhYmVsQ29udGFpbmVyPWEodGhpcy5zZXR0aW5ncy5lcnJvckxhYmVsQ29udGFpbmVyKSx0aGlzLmVycm9yQ29udGV4dD10aGlzLmxhYmVsQ29udGFpbmVyLmxlbmd0aCYmdGhpcy5sYWJlbENvbnRhaW5lcnx8YSh0aGlzLmN1cnJlbnRGb3JtKSx0aGlzLmNvbnRhaW5lcnM9YSh0aGlzLnNldHRpbmdzLmVycm9yQ29udGFpbmVyKS5hZGQodGhpcy5zZXR0aW5ncy5lcnJvckxhYmVsQ29udGFpbmVyKSx0aGlzLnN1Ym1pdHRlZD17fSx0aGlzLnZhbHVlQ2FjaGU9e30sdGhpcy5wZW5kaW5nUmVxdWVzdD0wLHRoaXMucGVuZGluZz17fSx0aGlzLmludmFsaWQ9e30sdGhpcy5yZXNldCgpO3ZhciBjLGQ9dGhpcy5jdXJyZW50Rm9ybSxlPXRoaXMuZ3JvdXBzPXt9O2EuZWFjaCh0aGlzLnNldHRpbmdzLmdyb3VwcyxmdW5jdGlvbihiLGMpe1wic3RyaW5nXCI9PXR5cGVvZiBjJiYoYz1jLnNwbGl0KC9cXHMvKSksYS5lYWNoKGMsZnVuY3Rpb24oYSxjKXtlW2NdPWJ9KX0pLGM9dGhpcy5zZXR0aW5ncy5ydWxlcyxhLmVhY2goYyxmdW5jdGlvbihiLGQpe2NbYl09YS52YWxpZGF0b3Iubm9ybWFsaXplUnVsZShkKX0pLGEodGhpcy5jdXJyZW50Rm9ybSkub24oXCJmb2N1c2luLnZhbGlkYXRlIGZvY3Vzb3V0LnZhbGlkYXRlIGtleXVwLnZhbGlkYXRlXCIsXCI6dGV4dCwgW3R5cGU9J3Bhc3N3b3JkJ10sIFt0eXBlPSdmaWxlJ10sIHNlbGVjdCwgdGV4dGFyZWEsIFt0eXBlPSdudW1iZXInXSwgW3R5cGU9J3NlYXJjaCddLCBbdHlwZT0ndGVsJ10sIFt0eXBlPSd1cmwnXSwgW3R5cGU9J2VtYWlsJ10sIFt0eXBlPSdkYXRldGltZSddLCBbdHlwZT0nZGF0ZSddLCBbdHlwZT0nbW9udGgnXSwgW3R5cGU9J3dlZWsnXSwgW3R5cGU9J3RpbWUnXSwgW3R5cGU9J2RhdGV0aW1lLWxvY2FsJ10sIFt0eXBlPSdyYW5nZSddLCBbdHlwZT0nY29sb3InXSwgW3R5cGU9J3JhZGlvJ10sIFt0eXBlPSdjaGVja2JveCddLCBbY29udGVudGVkaXRhYmxlXSwgW3R5cGU9J2J1dHRvbiddXCIsYikub24oXCJjbGljay52YWxpZGF0ZVwiLFwic2VsZWN0LCBvcHRpb24sIFt0eXBlPSdyYWRpbyddLCBbdHlwZT0nY2hlY2tib3gnXVwiLGIpLHRoaXMuc2V0dGluZ3MuaW52YWxpZEhhbmRsZXImJmEodGhpcy5jdXJyZW50Rm9ybSkub24oXCJpbnZhbGlkLWZvcm0udmFsaWRhdGVcIix0aGlzLnNldHRpbmdzLmludmFsaWRIYW5kbGVyKX0sZm9ybTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNoZWNrRm9ybSgpLGEuZXh0ZW5kKHRoaXMuc3VibWl0dGVkLHRoaXMuZXJyb3JNYXApLHRoaXMuaW52YWxpZD1hLmV4dGVuZCh7fSx0aGlzLmVycm9yTWFwKSx0aGlzLnZhbGlkKCl8fGEodGhpcy5jdXJyZW50Rm9ybSkudHJpZ2dlckhhbmRsZXIoXCJpbnZhbGlkLWZvcm1cIixbdGhpc10pLHRoaXMuc2hvd0Vycm9ycygpLHRoaXMudmFsaWQoKX0sY2hlY2tGb3JtOmZ1bmN0aW9uKCl7dGhpcy5wcmVwYXJlRm9ybSgpO2Zvcih2YXIgYT0wLGI9dGhpcy5jdXJyZW50RWxlbWVudHM9dGhpcy5lbGVtZW50cygpO2JbYV07YSsrKXRoaXMuY2hlY2soYlthXSk7cmV0dXJuIHRoaXMudmFsaWQoKX0sZWxlbWVudDpmdW5jdGlvbihiKXt2YXIgYyxkLGU9dGhpcy5jbGVhbihiKSxmPXRoaXMudmFsaWRhdGlvblRhcmdldEZvcihlKSxnPXRoaXMsaD0hMDtyZXR1cm4gdm9pZCAwPT09Zj9kZWxldGUgdGhpcy5pbnZhbGlkW2UubmFtZV06KHRoaXMucHJlcGFyZUVsZW1lbnQoZiksdGhpcy5jdXJyZW50RWxlbWVudHM9YShmKSxkPXRoaXMuZ3JvdXBzW2YubmFtZV0sZCYmYS5lYWNoKHRoaXMuZ3JvdXBzLGZ1bmN0aW9uKGEsYil7Yj09PWQmJmEhPT1mLm5hbWUmJihlPWcudmFsaWRhdGlvblRhcmdldEZvcihnLmNsZWFuKGcuZmluZEJ5TmFtZShhKSkpLGUmJmUubmFtZSBpbiBnLmludmFsaWQmJihnLmN1cnJlbnRFbGVtZW50cy5wdXNoKGUpLGg9Zy5jaGVjayhlKSYmaCkpfSksYz10aGlzLmNoZWNrKGYpIT09ITEsaD1oJiZjLGM/dGhpcy5pbnZhbGlkW2YubmFtZV09ITE6dGhpcy5pbnZhbGlkW2YubmFtZV09ITAsdGhpcy5udW1iZXJPZkludmFsaWRzKCl8fCh0aGlzLnRvSGlkZT10aGlzLnRvSGlkZS5hZGQodGhpcy5jb250YWluZXJzKSksdGhpcy5zaG93RXJyb3JzKCksYShiKS5hdHRyKFwiYXJpYS1pbnZhbGlkXCIsIWMpKSxofSxzaG93RXJyb3JzOmZ1bmN0aW9uKGIpe2lmKGIpe3ZhciBjPXRoaXM7YS5leHRlbmQodGhpcy5lcnJvck1hcCxiKSx0aGlzLmVycm9yTGlzdD1hLm1hcCh0aGlzLmVycm9yTWFwLGZ1bmN0aW9uKGEsYil7cmV0dXJue21lc3NhZ2U6YSxlbGVtZW50OmMuZmluZEJ5TmFtZShiKVswXX19KSx0aGlzLnN1Y2Nlc3NMaXN0PWEuZ3JlcCh0aGlzLnN1Y2Nlc3NMaXN0LGZ1bmN0aW9uKGEpe3JldHVybiEoYS5uYW1lIGluIGIpfSl9dGhpcy5zZXR0aW5ncy5zaG93RXJyb3JzP3RoaXMuc2V0dGluZ3Muc2hvd0Vycm9ycy5jYWxsKHRoaXMsdGhpcy5lcnJvck1hcCx0aGlzLmVycm9yTGlzdCk6dGhpcy5kZWZhdWx0U2hvd0Vycm9ycygpfSxyZXNldEZvcm06ZnVuY3Rpb24oKXthLmZuLnJlc2V0Rm9ybSYmYSh0aGlzLmN1cnJlbnRGb3JtKS5yZXNldEZvcm0oKSx0aGlzLmludmFsaWQ9e30sdGhpcy5zdWJtaXR0ZWQ9e30sdGhpcy5wcmVwYXJlRm9ybSgpLHRoaXMuaGlkZUVycm9ycygpO3ZhciBiPXRoaXMuZWxlbWVudHMoKS5yZW1vdmVEYXRhKFwicHJldmlvdXNWYWx1ZVwiKS5yZW1vdmVBdHRyKFwiYXJpYS1pbnZhbGlkXCIpO3RoaXMucmVzZXRFbGVtZW50cyhiKX0scmVzZXRFbGVtZW50czpmdW5jdGlvbihhKXt2YXIgYjtpZih0aGlzLnNldHRpbmdzLnVuaGlnaGxpZ2h0KWZvcihiPTA7YVtiXTtiKyspdGhpcy5zZXR0aW5ncy51bmhpZ2hsaWdodC5jYWxsKHRoaXMsYVtiXSx0aGlzLnNldHRpbmdzLmVycm9yQ2xhc3MsXCJcIiksdGhpcy5maW5kQnlOYW1lKGFbYl0ubmFtZSkucmVtb3ZlQ2xhc3ModGhpcy5zZXR0aW5ncy52YWxpZENsYXNzKTtlbHNlIGEucmVtb3ZlQ2xhc3ModGhpcy5zZXR0aW5ncy5lcnJvckNsYXNzKS5yZW1vdmVDbGFzcyh0aGlzLnNldHRpbmdzLnZhbGlkQ2xhc3MpfSxudW1iZXJPZkludmFsaWRzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMub2JqZWN0TGVuZ3RoKHRoaXMuaW52YWxpZCl9LG9iamVjdExlbmd0aDpmdW5jdGlvbihhKXt2YXIgYixjPTA7Zm9yKGIgaW4gYSl2b2lkIDAhPT1hW2JdJiZudWxsIT09YVtiXSYmYVtiXSE9PSExJiZjKys7cmV0dXJuIGN9LGhpZGVFcnJvcnM6ZnVuY3Rpb24oKXt0aGlzLmhpZGVUaGVzZSh0aGlzLnRvSGlkZSl9LGhpZGVUaGVzZTpmdW5jdGlvbihhKXthLm5vdCh0aGlzLmNvbnRhaW5lcnMpLnRleHQoXCJcIiksdGhpcy5hZGRXcmFwcGVyKGEpLmhpZGUoKX0sdmFsaWQ6ZnVuY3Rpb24oKXtyZXR1cm4gMD09PXRoaXMuc2l6ZSgpfSxzaXplOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXJyb3JMaXN0Lmxlbmd0aH0sZm9jdXNJbnZhbGlkOmZ1bmN0aW9uKCl7aWYodGhpcy5zZXR0aW5ncy5mb2N1c0ludmFsaWQpdHJ5e2EodGhpcy5maW5kTGFzdEFjdGl2ZSgpfHx0aGlzLmVycm9yTGlzdC5sZW5ndGgmJnRoaXMuZXJyb3JMaXN0WzBdLmVsZW1lbnR8fFtdKS5maWx0ZXIoXCI6dmlzaWJsZVwiKS50cmlnZ2VyKFwiZm9jdXNcIikudHJpZ2dlcihcImZvY3VzaW5cIil9Y2F0Y2goYil7fX0sZmluZExhc3RBY3RpdmU6ZnVuY3Rpb24oKXt2YXIgYj10aGlzLmxhc3RBY3RpdmU7cmV0dXJuIGImJjE9PT1hLmdyZXAodGhpcy5lcnJvckxpc3QsZnVuY3Rpb24oYSl7cmV0dXJuIGEuZWxlbWVudC5uYW1lPT09Yi5uYW1lfSkubGVuZ3RoJiZifSxlbGVtZW50czpmdW5jdGlvbigpe3ZhciBiPXRoaXMsYz17fTtyZXR1cm4gYSh0aGlzLmN1cnJlbnRGb3JtKS5maW5kKFwiaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEsIFtjb250ZW50ZWRpdGFibGVdXCIpLm5vdChcIjpzdWJtaXQsIDpyZXNldCwgOmltYWdlLCA6ZGlzYWJsZWRcIikubm90KHRoaXMuc2V0dGluZ3MuaWdub3JlKS5maWx0ZXIoZnVuY3Rpb24oKXt2YXIgZD10aGlzLm5hbWV8fGEodGhpcykuYXR0cihcIm5hbWVcIiksZT1cInVuZGVmaW5lZFwiIT10eXBlb2YgYSh0aGlzKS5hdHRyKFwiY29udGVudGVkaXRhYmxlXCIpJiZcImZhbHNlXCIhPT1hKHRoaXMpLmF0dHIoXCJjb250ZW50ZWRpdGFibGVcIik7cmV0dXJuIWQmJmIuc2V0dGluZ3MuZGVidWcmJndpbmRvdy5jb25zb2xlJiZjb25zb2xlLmVycm9yKFwiJW8gaGFzIG5vIG5hbWUgYXNzaWduZWRcIix0aGlzKSxlJiYodGhpcy5mb3JtPWEodGhpcykuY2xvc2VzdChcImZvcm1cIilbMF0sdGhpcy5uYW1lPWQpLHRoaXMuZm9ybT09PWIuY3VycmVudEZvcm0mJighKGQgaW4gY3x8IWIub2JqZWN0TGVuZ3RoKGEodGhpcykucnVsZXMoKSkpJiYoY1tkXT0hMCwhMCkpfSl9LGNsZWFuOmZ1bmN0aW9uKGIpe3JldHVybiBhKGIpWzBdfSxlcnJvcnM6ZnVuY3Rpb24oKXt2YXIgYj10aGlzLnNldHRpbmdzLmVycm9yQ2xhc3Muc3BsaXQoXCIgXCIpLmpvaW4oXCIuXCIpO3JldHVybiBhKHRoaXMuc2V0dGluZ3MuZXJyb3JFbGVtZW50K1wiLlwiK2IsdGhpcy5lcnJvckNvbnRleHQpfSxyZXNldEludGVybmFsczpmdW5jdGlvbigpe3RoaXMuc3VjY2Vzc0xpc3Q9W10sdGhpcy5lcnJvckxpc3Q9W10sdGhpcy5lcnJvck1hcD17fSx0aGlzLnRvU2hvdz1hKFtdKSx0aGlzLnRvSGlkZT1hKFtdKX0scmVzZXQ6ZnVuY3Rpb24oKXt0aGlzLnJlc2V0SW50ZXJuYWxzKCksdGhpcy5jdXJyZW50RWxlbWVudHM9YShbXSl9LHByZXBhcmVGb3JtOmZ1bmN0aW9uKCl7dGhpcy5yZXNldCgpLHRoaXMudG9IaWRlPXRoaXMuZXJyb3JzKCkuYWRkKHRoaXMuY29udGFpbmVycyl9LHByZXBhcmVFbGVtZW50OmZ1bmN0aW9uKGEpe3RoaXMucmVzZXQoKSx0aGlzLnRvSGlkZT10aGlzLmVycm9yc0ZvcihhKX0sZWxlbWVudFZhbHVlOmZ1bmN0aW9uKGIpe3ZhciBjLGQsZT1hKGIpLGY9Yi50eXBlLGc9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUuYXR0cihcImNvbnRlbnRlZGl0YWJsZVwiKSYmXCJmYWxzZVwiIT09ZS5hdHRyKFwiY29udGVudGVkaXRhYmxlXCIpO3JldHVyblwicmFkaW9cIj09PWZ8fFwiY2hlY2tib3hcIj09PWY/dGhpcy5maW5kQnlOYW1lKGIubmFtZSkuZmlsdGVyKFwiOmNoZWNrZWRcIikudmFsKCk6XCJudW1iZXJcIj09PWYmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLnZhbGlkaXR5P2IudmFsaWRpdHkuYmFkSW5wdXQ/XCJOYU5cIjplLnZhbCgpOihjPWc/ZS50ZXh0KCk6ZS52YWwoKSxcImZpbGVcIj09PWY/XCJDOlxcXFxmYWtlcGF0aFxcXFxcIj09PWMuc3Vic3RyKDAsMTIpP2Muc3Vic3RyKDEyKTooZD1jLmxhc3RJbmRleE9mKFwiL1wiKSxkPj0wP2Muc3Vic3RyKGQrMSk6KGQ9Yy5sYXN0SW5kZXhPZihcIlxcXFxcIiksZD49MD9jLnN1YnN0cihkKzEpOmMpKTpcInN0cmluZ1wiPT10eXBlb2YgYz9jLnJlcGxhY2UoL1xcci9nLFwiXCIpOmMpfSxjaGVjazpmdW5jdGlvbihiKXtiPXRoaXMudmFsaWRhdGlvblRhcmdldEZvcih0aGlzLmNsZWFuKGIpKTt2YXIgYyxkLGUsZixnPWEoYikucnVsZXMoKSxoPWEubWFwKGcsZnVuY3Rpb24oYSxiKXtyZXR1cm4gYn0pLmxlbmd0aCxpPSExLGo9dGhpcy5lbGVtZW50VmFsdWUoYik7XCJmdW5jdGlvblwiPT10eXBlb2YgZy5ub3JtYWxpemVyP2Y9Zy5ub3JtYWxpemVyOlwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMuc2V0dGluZ3Mubm9ybWFsaXplciYmKGY9dGhpcy5zZXR0aW5ncy5ub3JtYWxpemVyKSxmJiYoaj1mLmNhbGwoYixqKSxkZWxldGUgZy5ub3JtYWxpemVyKTtmb3IoZCBpbiBnKXtlPXttZXRob2Q6ZCxwYXJhbWV0ZXJzOmdbZF19O3RyeXtpZihjPWEudmFsaWRhdG9yLm1ldGhvZHNbZF0uY2FsbCh0aGlzLGosYixlLnBhcmFtZXRlcnMpLFwiZGVwZW5kZW5jeS1taXNtYXRjaFwiPT09YyYmMT09PWgpe2k9ITA7Y29udGludWV9aWYoaT0hMSxcInBlbmRpbmdcIj09PWMpcmV0dXJuIHZvaWQodGhpcy50b0hpZGU9dGhpcy50b0hpZGUubm90KHRoaXMuZXJyb3JzRm9yKGIpKSk7aWYoIWMpcmV0dXJuIHRoaXMuZm9ybWF0QW5kQWRkKGIsZSksITF9Y2F0Y2goayl7dGhyb3cgdGhpcy5zZXR0aW5ncy5kZWJ1ZyYmd2luZG93LmNvbnNvbGUmJmNvbnNvbGUubG9nKFwiRXhjZXB0aW9uIG9jY3VycmVkIHdoZW4gY2hlY2tpbmcgZWxlbWVudCBcIitiLmlkK1wiLCBjaGVjayB0aGUgJ1wiK2UubWV0aG9kK1wiJyBtZXRob2QuXCIsayksayBpbnN0YW5jZW9mIFR5cGVFcnJvciYmKGsubWVzc2FnZSs9XCIuICBFeGNlcHRpb24gb2NjdXJyZWQgd2hlbiBjaGVja2luZyBlbGVtZW50IFwiK2IuaWQrXCIsIGNoZWNrIHRoZSAnXCIrZS5tZXRob2QrXCInIG1ldGhvZC5cIiksa319aWYoIWkpcmV0dXJuIHRoaXMub2JqZWN0TGVuZ3RoKGcpJiZ0aGlzLnN1Y2Nlc3NMaXN0LnB1c2goYiksITB9LGN1c3RvbURhdGFNZXNzYWdlOmZ1bmN0aW9uKGIsYyl7cmV0dXJuIGEoYikuZGF0YShcIm1zZ1wiK2MuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrYy5zdWJzdHJpbmcoMSkudG9Mb3dlckNhc2UoKSl8fGEoYikuZGF0YShcIm1zZ1wiKX0sY3VzdG9tTWVzc2FnZTpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuc2V0dGluZ3MubWVzc2FnZXNbYV07cmV0dXJuIGMmJihjLmNvbnN0cnVjdG9yPT09U3RyaW5nP2M6Y1tiXSl9LGZpbmREZWZpbmVkOmZ1bmN0aW9uKCl7Zm9yKHZhciBhPTA7YTxhcmd1bWVudHMubGVuZ3RoO2ErKylpZih2b2lkIDAhPT1hcmd1bWVudHNbYV0pcmV0dXJuIGFyZ3VtZW50c1thXX0sZGVmYXVsdE1lc3NhZ2U6ZnVuY3Rpb24oYixjKXtcInN0cmluZ1wiPT10eXBlb2YgYyYmKGM9e21ldGhvZDpjfSk7dmFyIGQ9dGhpcy5maW5kRGVmaW5lZCh0aGlzLmN1c3RvbU1lc3NhZ2UoYi5uYW1lLGMubWV0aG9kKSx0aGlzLmN1c3RvbURhdGFNZXNzYWdlKGIsYy5tZXRob2QpLCF0aGlzLnNldHRpbmdzLmlnbm9yZVRpdGxlJiZiLnRpdGxlfHx2b2lkIDAsYS52YWxpZGF0b3IubWVzc2FnZXNbYy5tZXRob2RdLFwiPHN0cm9uZz5XYXJuaW5nOiBObyBtZXNzYWdlIGRlZmluZWQgZm9yIFwiK2IubmFtZStcIjwvc3Ryb25nPlwiKSxlPS9cXCQ/XFx7KFxcZCspXFx9L2c7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZD9kPWQuY2FsbCh0aGlzLGMucGFyYW1ldGVycyxiKTplLnRlc3QoZCkmJihkPWEudmFsaWRhdG9yLmZvcm1hdChkLnJlcGxhY2UoZSxcInskMX1cIiksYy5wYXJhbWV0ZXJzKSksZH0sZm9ybWF0QW5kQWRkOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5kZWZhdWx0TWVzc2FnZShhLGIpO3RoaXMuZXJyb3JMaXN0LnB1c2goe21lc3NhZ2U6YyxlbGVtZW50OmEsbWV0aG9kOmIubWV0aG9kfSksdGhpcy5lcnJvck1hcFthLm5hbWVdPWMsdGhpcy5zdWJtaXR0ZWRbYS5uYW1lXT1jfSxhZGRXcmFwcGVyOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnNldHRpbmdzLndyYXBwZXImJihhPWEuYWRkKGEucGFyZW50KHRoaXMuc2V0dGluZ3Mud3JhcHBlcikpKSxhfSxkZWZhdWx0U2hvd0Vycm9yczpmdW5jdGlvbigpe3ZhciBhLGIsYztmb3IoYT0wO3RoaXMuZXJyb3JMaXN0W2FdO2ErKyljPXRoaXMuZXJyb3JMaXN0W2FdLHRoaXMuc2V0dGluZ3MuaGlnaGxpZ2h0JiZ0aGlzLnNldHRpbmdzLmhpZ2hsaWdodC5jYWxsKHRoaXMsYy5lbGVtZW50LHRoaXMuc2V0dGluZ3MuZXJyb3JDbGFzcyx0aGlzLnNldHRpbmdzLnZhbGlkQ2xhc3MpLHRoaXMuc2hvd0xhYmVsKGMuZWxlbWVudCxjLm1lc3NhZ2UpO2lmKHRoaXMuZXJyb3JMaXN0Lmxlbmd0aCYmKHRoaXMudG9TaG93PXRoaXMudG9TaG93LmFkZCh0aGlzLmNvbnRhaW5lcnMpKSx0aGlzLnNldHRpbmdzLnN1Y2Nlc3MpZm9yKGE9MDt0aGlzLnN1Y2Nlc3NMaXN0W2FdO2ErKyl0aGlzLnNob3dMYWJlbCh0aGlzLnN1Y2Nlc3NMaXN0W2FdKTtpZih0aGlzLnNldHRpbmdzLnVuaGlnaGxpZ2h0KWZvcihhPTAsYj10aGlzLnZhbGlkRWxlbWVudHMoKTtiW2FdO2ErKyl0aGlzLnNldHRpbmdzLnVuaGlnaGxpZ2h0LmNhbGwodGhpcyxiW2FdLHRoaXMuc2V0dGluZ3MuZXJyb3JDbGFzcyx0aGlzLnNldHRpbmdzLnZhbGlkQ2xhc3MpO3RoaXMudG9IaWRlPXRoaXMudG9IaWRlLm5vdCh0aGlzLnRvU2hvdyksdGhpcy5oaWRlRXJyb3JzKCksdGhpcy5hZGRXcmFwcGVyKHRoaXMudG9TaG93KS5zaG93KCl9LHZhbGlkRWxlbWVudHM6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jdXJyZW50RWxlbWVudHMubm90KHRoaXMuaW52YWxpZEVsZW1lbnRzKCkpfSxpbnZhbGlkRWxlbWVudHM6ZnVuY3Rpb24oKXtyZXR1cm4gYSh0aGlzLmVycm9yTGlzdCkubWFwKGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWxlbWVudH0pfSxzaG93TGFiZWw6ZnVuY3Rpb24oYixjKXt2YXIgZCxlLGYsZyxoPXRoaXMuZXJyb3JzRm9yKGIpLGk9dGhpcy5pZE9yTmFtZShiKSxqPWEoYikuYXR0cihcImFyaWEtZGVzY3JpYmVkYnlcIik7aC5sZW5ndGg/KGgucmVtb3ZlQ2xhc3ModGhpcy5zZXR0aW5ncy52YWxpZENsYXNzKS5hZGRDbGFzcyh0aGlzLnNldHRpbmdzLmVycm9yQ2xhc3MpLGguaHRtbChjKSk6KGg9YShcIjxcIit0aGlzLnNldHRpbmdzLmVycm9yRWxlbWVudCtcIj5cIikuYXR0cihcImlkXCIsaStcIi1lcnJvclwiKS5hZGRDbGFzcyh0aGlzLnNldHRpbmdzLmVycm9yQ2xhc3MpLmh0bWwoY3x8XCJcIiksZD1oLHRoaXMuc2V0dGluZ3Mud3JhcHBlciYmKGQ9aC5oaWRlKCkuc2hvdygpLndyYXAoXCI8XCIrdGhpcy5zZXR0aW5ncy53cmFwcGVyK1wiLz5cIikucGFyZW50KCkpLHRoaXMubGFiZWxDb250YWluZXIubGVuZ3RoP3RoaXMubGFiZWxDb250YWluZXIuYXBwZW5kKGQpOnRoaXMuc2V0dGluZ3MuZXJyb3JQbGFjZW1lbnQ/dGhpcy5zZXR0aW5ncy5lcnJvclBsYWNlbWVudC5jYWxsKHRoaXMsZCxhKGIpKTpkLmluc2VydEFmdGVyKGIpLGguaXMoXCJsYWJlbFwiKT9oLmF0dHIoXCJmb3JcIixpKTowPT09aC5wYXJlbnRzKFwibGFiZWxbZm9yPSdcIit0aGlzLmVzY2FwZUNzc01ldGEoaSkrXCInXVwiKS5sZW5ndGgmJihmPWguYXR0cihcImlkXCIpLGo/ai5tYXRjaChuZXcgUmVnRXhwKFwiXFxcXGJcIit0aGlzLmVzY2FwZUNzc01ldGEoZikrXCJcXFxcYlwiKSl8fChqKz1cIiBcIitmKTpqPWYsYShiKS5hdHRyKFwiYXJpYS1kZXNjcmliZWRieVwiLGopLGU9dGhpcy5ncm91cHNbYi5uYW1lXSxlJiYoZz10aGlzLGEuZWFjaChnLmdyb3VwcyxmdW5jdGlvbihiLGMpe2M9PT1lJiZhKFwiW25hbWU9J1wiK2cuZXNjYXBlQ3NzTWV0YShiKStcIiddXCIsZy5jdXJyZW50Rm9ybSkuYXR0cihcImFyaWEtZGVzY3JpYmVkYnlcIixoLmF0dHIoXCJpZFwiKSl9KSkpKSwhYyYmdGhpcy5zZXR0aW5ncy5zdWNjZXNzJiYoaC50ZXh0KFwiXCIpLFwic3RyaW5nXCI9PXR5cGVvZiB0aGlzLnNldHRpbmdzLnN1Y2Nlc3M/aC5hZGRDbGFzcyh0aGlzLnNldHRpbmdzLnN1Y2Nlc3MpOnRoaXMuc2V0dGluZ3Muc3VjY2VzcyhoLGIpKSx0aGlzLnRvU2hvdz10aGlzLnRvU2hvdy5hZGQoaCl9LGVycm9yc0ZvcjpmdW5jdGlvbihiKXt2YXIgYz10aGlzLmVzY2FwZUNzc01ldGEodGhpcy5pZE9yTmFtZShiKSksZD1hKGIpLmF0dHIoXCJhcmlhLWRlc2NyaWJlZGJ5XCIpLGU9XCJsYWJlbFtmb3I9J1wiK2MrXCInXSwgbGFiZWxbZm9yPSdcIitjK1wiJ10gKlwiO3JldHVybiBkJiYoZT1lK1wiLCAjXCIrdGhpcy5lc2NhcGVDc3NNZXRhKGQpLnJlcGxhY2UoL1xccysvZyxcIiwgI1wiKSksdGhpcy5lcnJvcnMoKS5maWx0ZXIoZSl9LGVzY2FwZUNzc01ldGE6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZSgvKFtcXFxcIVwiIyQlJicoKSorLC5cXC86Ozw9Pj9AXFxbXFxdXmB7fH1+XSkvZyxcIlxcXFwkMVwiKX0saWRPck5hbWU6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZ3JvdXBzW2EubmFtZV18fCh0aGlzLmNoZWNrYWJsZShhKT9hLm5hbWU6YS5pZHx8YS5uYW1lKX0sdmFsaWRhdGlvblRhcmdldEZvcjpmdW5jdGlvbihiKXtyZXR1cm4gdGhpcy5jaGVja2FibGUoYikmJihiPXRoaXMuZmluZEJ5TmFtZShiLm5hbWUpKSxhKGIpLm5vdCh0aGlzLnNldHRpbmdzLmlnbm9yZSlbMF19LGNoZWNrYWJsZTpmdW5jdGlvbihhKXtyZXR1cm4vcmFkaW98Y2hlY2tib3gvaS50ZXN0KGEudHlwZSl9LGZpbmRCeU5hbWU6ZnVuY3Rpb24oYil7cmV0dXJuIGEodGhpcy5jdXJyZW50Rm9ybSkuZmluZChcIltuYW1lPSdcIit0aGlzLmVzY2FwZUNzc01ldGEoYikrXCInXVwiKX0sZ2V0TGVuZ3RoOmZ1bmN0aW9uKGIsYyl7c3dpdGNoKGMubm9kZU5hbWUudG9Mb3dlckNhc2UoKSl7Y2FzZVwic2VsZWN0XCI6cmV0dXJuIGEoXCJvcHRpb246c2VsZWN0ZWRcIixjKS5sZW5ndGg7Y2FzZVwiaW5wdXRcIjppZih0aGlzLmNoZWNrYWJsZShjKSlyZXR1cm4gdGhpcy5maW5kQnlOYW1lKGMubmFtZSkuZmlsdGVyKFwiOmNoZWNrZWRcIikubGVuZ3RofXJldHVybiBiLmxlbmd0aH0sZGVwZW5kOmZ1bmN0aW9uKGEsYil7cmV0dXJuIXRoaXMuZGVwZW5kVHlwZXNbdHlwZW9mIGFdfHx0aGlzLmRlcGVuZFR5cGVzW3R5cGVvZiBhXShhLGIpfSxkZXBlbmRUeXBlczp7XCJib29sZWFuXCI6ZnVuY3Rpb24oYSl7cmV0dXJuIGF9LHN0cmluZzpmdW5jdGlvbihiLGMpe3JldHVybiEhYShiLGMuZm9ybSkubGVuZ3RofSxcImZ1bmN0aW9uXCI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYShiKX19LG9wdGlvbmFsOmZ1bmN0aW9uKGIpe3ZhciBjPXRoaXMuZWxlbWVudFZhbHVlKGIpO3JldHVybiFhLnZhbGlkYXRvci5tZXRob2RzLnJlcXVpcmVkLmNhbGwodGhpcyxjLGIpJiZcImRlcGVuZGVuY3ktbWlzbWF0Y2hcIn0sc3RhcnRSZXF1ZXN0OmZ1bmN0aW9uKGIpe3RoaXMucGVuZGluZ1tiLm5hbWVdfHwodGhpcy5wZW5kaW5nUmVxdWVzdCsrLGEoYikuYWRkQ2xhc3ModGhpcy5zZXR0aW5ncy5wZW5kaW5nQ2xhc3MpLHRoaXMucGVuZGluZ1tiLm5hbWVdPSEwKX0sc3RvcFJlcXVlc3Q6ZnVuY3Rpb24oYixjKXt0aGlzLnBlbmRpbmdSZXF1ZXN0LS0sdGhpcy5wZW5kaW5nUmVxdWVzdDwwJiYodGhpcy5wZW5kaW5nUmVxdWVzdD0wKSxkZWxldGUgdGhpcy5wZW5kaW5nW2IubmFtZV0sYShiKS5yZW1vdmVDbGFzcyh0aGlzLnNldHRpbmdzLnBlbmRpbmdDbGFzcyksYyYmMD09PXRoaXMucGVuZGluZ1JlcXVlc3QmJnRoaXMuZm9ybVN1Ym1pdHRlZCYmdGhpcy5mb3JtKCk/KGEodGhpcy5jdXJyZW50Rm9ybSkuc3VibWl0KCksdGhpcy5zdWJtaXRCdXR0b24mJmEoXCJpbnB1dDpoaWRkZW5bbmFtZT0nXCIrdGhpcy5zdWJtaXRCdXR0b24ubmFtZStcIiddXCIsdGhpcy5jdXJyZW50Rm9ybSkucmVtb3ZlKCksdGhpcy5mb3JtU3VibWl0dGVkPSExKTohYyYmMD09PXRoaXMucGVuZGluZ1JlcXVlc3QmJnRoaXMuZm9ybVN1Ym1pdHRlZCYmKGEodGhpcy5jdXJyZW50Rm9ybSkudHJpZ2dlckhhbmRsZXIoXCJpbnZhbGlkLWZvcm1cIixbdGhpc10pLHRoaXMuZm9ybVN1Ym1pdHRlZD0hMSl9LHByZXZpb3VzVmFsdWU6ZnVuY3Rpb24oYixjKXtyZXR1cm4gYz1cInN0cmluZ1wiPT10eXBlb2YgYyYmY3x8XCJyZW1vdGVcIixhLmRhdGEoYixcInByZXZpb3VzVmFsdWVcIil8fGEuZGF0YShiLFwicHJldmlvdXNWYWx1ZVwiLHtvbGQ6bnVsbCx2YWxpZDohMCxtZXNzYWdlOnRoaXMuZGVmYXVsdE1lc3NhZ2UoYix7bWV0aG9kOmN9KX0pfSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5yZXNldEZvcm0oKSxhKHRoaXMuY3VycmVudEZvcm0pLm9mZihcIi52YWxpZGF0ZVwiKS5yZW1vdmVEYXRhKFwidmFsaWRhdG9yXCIpLmZpbmQoXCIudmFsaWRhdGUtZXF1YWxUby1ibHVyXCIpLm9mZihcIi52YWxpZGF0ZS1lcXVhbFRvXCIpLnJlbW92ZUNsYXNzKFwidmFsaWRhdGUtZXF1YWxUby1ibHVyXCIpLmZpbmQoXCIudmFsaWRhdGUtbGVzc1RoYW4tYmx1clwiKS5vZmYoXCIudmFsaWRhdGUtbGVzc1RoYW5cIikucmVtb3ZlQ2xhc3MoXCJ2YWxpZGF0ZS1sZXNzVGhhbi1ibHVyXCIpLmZpbmQoXCIudmFsaWRhdGUtbGVzc1RoYW5FcXVhbC1ibHVyXCIpLm9mZihcIi52YWxpZGF0ZS1sZXNzVGhhbkVxdWFsXCIpLnJlbW92ZUNsYXNzKFwidmFsaWRhdGUtbGVzc1RoYW5FcXVhbC1ibHVyXCIpLmZpbmQoXCIudmFsaWRhdGUtZ3JlYXRlclRoYW5FcXVhbC1ibHVyXCIpLm9mZihcIi52YWxpZGF0ZS1ncmVhdGVyVGhhbkVxdWFsXCIpLnJlbW92ZUNsYXNzKFwidmFsaWRhdGUtZ3JlYXRlclRoYW5FcXVhbC1ibHVyXCIpLmZpbmQoXCIudmFsaWRhdGUtZ3JlYXRlclRoYW4tYmx1clwiKS5vZmYoXCIudmFsaWRhdGUtZ3JlYXRlclRoYW5cIikucmVtb3ZlQ2xhc3MoXCJ2YWxpZGF0ZS1ncmVhdGVyVGhhbi1ibHVyXCIpfX0sY2xhc3NSdWxlU2V0dGluZ3M6e3JlcXVpcmVkOntyZXF1aXJlZDohMH0sZW1haWw6e2VtYWlsOiEwfSx1cmw6e3VybDohMH0sZGF0ZTp7ZGF0ZTohMH0sZGF0ZUlTTzp7ZGF0ZUlTTzohMH0sbnVtYmVyOntudW1iZXI6ITB9LGRpZ2l0czp7ZGlnaXRzOiEwfSxjcmVkaXRjYXJkOntjcmVkaXRjYXJkOiEwfX0sYWRkQ2xhc3NSdWxlczpmdW5jdGlvbihiLGMpe2IuY29uc3RydWN0b3I9PT1TdHJpbmc/dGhpcy5jbGFzc1J1bGVTZXR0aW5nc1tiXT1jOmEuZXh0ZW5kKHRoaXMuY2xhc3NSdWxlU2V0dGluZ3MsYil9LGNsYXNzUnVsZXM6ZnVuY3Rpb24oYil7dmFyIGM9e30sZD1hKGIpLmF0dHIoXCJjbGFzc1wiKTtyZXR1cm4gZCYmYS5lYWNoKGQuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKCl7dGhpcyBpbiBhLnZhbGlkYXRvci5jbGFzc1J1bGVTZXR0aW5ncyYmYS5leHRlbmQoYyxhLnZhbGlkYXRvci5jbGFzc1J1bGVTZXR0aW5nc1t0aGlzXSl9KSxjfSxub3JtYWxpemVBdHRyaWJ1dGVSdWxlOmZ1bmN0aW9uKGEsYixjLGQpey9taW58bWF4fHN0ZXAvLnRlc3QoYykmJihudWxsPT09Ynx8L251bWJlcnxyYW5nZXx0ZXh0Ly50ZXN0KGIpKSYmKGQ9TnVtYmVyKGQpLGlzTmFOKGQpJiYoZD12b2lkIDApKSxkfHwwPT09ZD9hW2NdPWQ6Yj09PWMmJlwicmFuZ2VcIiE9PWImJihhW2NdPSEwKX0sYXR0cmlidXRlUnVsZXM6ZnVuY3Rpb24oYil7dmFyIGMsZCxlPXt9LGY9YShiKSxnPWIuZ2V0QXR0cmlidXRlKFwidHlwZVwiKTtmb3IoYyBpbiBhLnZhbGlkYXRvci5tZXRob2RzKVwicmVxdWlyZWRcIj09PWM/KGQ9Yi5nZXRBdHRyaWJ1dGUoYyksXCJcIj09PWQmJihkPSEwKSxkPSEhZCk6ZD1mLmF0dHIoYyksdGhpcy5ub3JtYWxpemVBdHRyaWJ1dGVSdWxlKGUsZyxjLGQpO3JldHVybiBlLm1heGxlbmd0aCYmLy0xfDIxNDc0ODM2NDd8NTI0Mjg4Ly50ZXN0KGUubWF4bGVuZ3RoKSYmZGVsZXRlIGUubWF4bGVuZ3RoLGV9LGRhdGFSdWxlczpmdW5jdGlvbihiKXt2YXIgYyxkLGU9e30sZj1hKGIpLGc9Yi5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpO2ZvcihjIGluIGEudmFsaWRhdG9yLm1ldGhvZHMpZD1mLmRhdGEoXCJydWxlXCIrYy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStjLnN1YnN0cmluZygxKS50b0xvd2VyQ2FzZSgpKSxcIlwiPT09ZCYmKGQ9ITApLHRoaXMubm9ybWFsaXplQXR0cmlidXRlUnVsZShlLGcsYyxkKTtyZXR1cm4gZX0sc3RhdGljUnVsZXM6ZnVuY3Rpb24oYil7dmFyIGM9e30sZD1hLmRhdGEoYi5mb3JtLFwidmFsaWRhdG9yXCIpO3JldHVybiBkLnNldHRpbmdzLnJ1bGVzJiYoYz1hLnZhbGlkYXRvci5ub3JtYWxpemVSdWxlKGQuc2V0dGluZ3MucnVsZXNbYi5uYW1lXSl8fHt9KSxjfSxub3JtYWxpemVSdWxlczpmdW5jdGlvbihiLGMpe3JldHVybiBhLmVhY2goYixmdW5jdGlvbihkLGUpe2lmKGU9PT0hMSlyZXR1cm4gdm9pZCBkZWxldGUgYltkXTtpZihlLnBhcmFtfHxlLmRlcGVuZHMpe3ZhciBmPSEwO3N3aXRjaCh0eXBlb2YgZS5kZXBlbmRzKXtjYXNlXCJzdHJpbmdcIjpmPSEhYShlLmRlcGVuZHMsYy5mb3JtKS5sZW5ndGg7YnJlYWs7Y2FzZVwiZnVuY3Rpb25cIjpmPWUuZGVwZW5kcy5jYWxsKGMsYyl9Zj9iW2RdPXZvaWQgMD09PWUucGFyYW18fGUucGFyYW06KGEuZGF0YShjLmZvcm0sXCJ2YWxpZGF0b3JcIikucmVzZXRFbGVtZW50cyhhKGMpKSxkZWxldGUgYltkXSl9fSksYS5lYWNoKGIsZnVuY3Rpb24oZCxlKXtiW2RdPWEuaXNGdW5jdGlvbihlKSYmXCJub3JtYWxpemVyXCIhPT1kP2UoYyk6ZX0pLGEuZWFjaChbXCJtaW5sZW5ndGhcIixcIm1heGxlbmd0aFwiXSxmdW5jdGlvbigpe2JbdGhpc10mJihiW3RoaXNdPU51bWJlcihiW3RoaXNdKSl9KSxhLmVhY2goW1wicmFuZ2VsZW5ndGhcIixcInJhbmdlXCJdLGZ1bmN0aW9uKCl7dmFyIGM7Ylt0aGlzXSYmKGEuaXNBcnJheShiW3RoaXNdKT9iW3RoaXNdPVtOdW1iZXIoYlt0aGlzXVswXSksTnVtYmVyKGJbdGhpc11bMV0pXTpcInN0cmluZ1wiPT10eXBlb2YgYlt0aGlzXSYmKGM9Ylt0aGlzXS5yZXBsYWNlKC9bXFxbXFxdXS9nLFwiXCIpLnNwbGl0KC9bXFxzLF0rLyksYlt0aGlzXT1bTnVtYmVyKGNbMF0pLE51bWJlcihjWzFdKV0pKX0pLGEudmFsaWRhdG9yLmF1dG9DcmVhdGVSYW5nZXMmJihudWxsIT1iLm1pbiYmbnVsbCE9Yi5tYXgmJihiLnJhbmdlPVtiLm1pbixiLm1heF0sZGVsZXRlIGIubWluLGRlbGV0ZSBiLm1heCksbnVsbCE9Yi5taW5sZW5ndGgmJm51bGwhPWIubWF4bGVuZ3RoJiYoYi5yYW5nZWxlbmd0aD1bYi5taW5sZW5ndGgsYi5tYXhsZW5ndGhdLGRlbGV0ZSBiLm1pbmxlbmd0aCxkZWxldGUgYi5tYXhsZW5ndGgpKSxifSxub3JtYWxpemVSdWxlOmZ1bmN0aW9uKGIpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBiKXt2YXIgYz17fTthLmVhY2goYi5zcGxpdCgvXFxzLyksZnVuY3Rpb24oKXtjW3RoaXNdPSEwfSksYj1jfXJldHVybiBifSxhZGRNZXRob2Q6ZnVuY3Rpb24oYixjLGQpe2EudmFsaWRhdG9yLm1ldGhvZHNbYl09YyxhLnZhbGlkYXRvci5tZXNzYWdlc1tiXT12b2lkIDAhPT1kP2Q6YS52YWxpZGF0b3IubWVzc2FnZXNbYl0sYy5sZW5ndGg8MyYmYS52YWxpZGF0b3IuYWRkQ2xhc3NSdWxlcyhiLGEudmFsaWRhdG9yLm5vcm1hbGl6ZVJ1bGUoYikpfSxtZXRob2RzOntyZXF1aXJlZDpmdW5jdGlvbihiLGMsZCl7aWYoIXRoaXMuZGVwZW5kKGQsYykpcmV0dXJuXCJkZXBlbmRlbmN5LW1pc21hdGNoXCI7aWYoXCJzZWxlY3RcIj09PWMubm9kZU5hbWUudG9Mb3dlckNhc2UoKSl7dmFyIGU9YShjKS52YWwoKTtyZXR1cm4gZSYmZS5sZW5ndGg+MH1yZXR1cm4gdGhpcy5jaGVja2FibGUoYyk/dGhpcy5nZXRMZW5ndGgoYixjKT4wOnZvaWQgMCE9PWImJm51bGwhPT1iJiZiLmxlbmd0aD4wfSxlbWFpbDpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm9wdGlvbmFsKGIpfHwvXlthLXpBLVowLTkuISMkJSYnKitcXC89P15fYHt8fX4tXStAW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KD86XFwuW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KSokLy50ZXN0KGEpfSx1cmw6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5vcHRpb25hbChiKXx8L14oPzooPzooPzpodHRwcz98ZnRwKTopP1xcL1xcLykoPzpcXFMrKD86OlxcUyopP0ApPyg/Oig/ISg/OjEwfDEyNykoPzpcXC5cXGR7MSwzfSl7M30pKD8hKD86MTY5XFwuMjU0fDE5MlxcLjE2OCkoPzpcXC5cXGR7MSwzfSl7Mn0pKD8hMTcyXFwuKD86MVs2LTldfDJcXGR8M1swLTFdKSg/OlxcLlxcZHsxLDN9KXsyfSkoPzpbMS05XVxcZD98MVxcZFxcZHwyWzAxXVxcZHwyMlswLTNdKSg/OlxcLig/OjE/XFxkezEsMn18MlswLTRdXFxkfDI1WzAtNV0pKXsyfSg/OlxcLig/OlsxLTldXFxkP3wxXFxkXFxkfDJbMC00XVxcZHwyNVswLTRdKSl8KD86KD86W2EtelxcdTAwYTEtXFx1ZmZmZjAtOV0tKikqW2EtelxcdTAwYTEtXFx1ZmZmZjAtOV0rKSg/OlxcLig/OlthLXpcXHUwMGExLVxcdWZmZmYwLTldLSopKlthLXpcXHUwMGExLVxcdWZmZmYwLTldKykqKD86XFwuKD86W2EtelxcdTAwYTEtXFx1ZmZmZl17Mix9KSkuPykoPzo6XFxkezIsNX0pPyg/OltcXC8/I11cXFMqKT8kL2kudGVzdChhKX0sZGF0ZTpmdW5jdGlvbigpe3ZhciBhPSExO3JldHVybiBmdW5jdGlvbihiLGMpe3JldHVybiBhfHwoYT0hMCx0aGlzLnNldHRpbmdzLmRlYnVnJiZ3aW5kb3cuY29uc29sZSYmY29uc29sZS53YXJuKFwiVGhlIGBkYXRlYCBtZXRob2QgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHZlcnNpb24gJzIuMC4wJy5cXG5QbGVhc2UgZG9uJ3QgdXNlIGl0LCBzaW5jZSBpdCByZWxpZXMgb24gdGhlIERhdGUgY29uc3RydWN0b3IsIHdoaWNoXFxuYmVoYXZlcyB2ZXJ5IGRpZmZlcmVudGx5IGFjcm9zcyBicm93c2VycyBhbmQgbG9jYWxlcy4gVXNlIGBkYXRlSVNPYFxcbmluc3RlYWQgb3Igb25lIG9mIHRoZSBsb2NhbGUgc3BlY2lmaWMgbWV0aG9kcyBpbiBgbG9jYWxpemF0aW9ucy9gXFxuYW5kIGBhZGRpdGlvbmFsLW1ldGhvZHMuanNgLlwiKSksdGhpcy5vcHRpb25hbChjKXx8IS9JbnZhbGlkfE5hTi8udGVzdChuZXcgRGF0ZShiKS50b1N0cmluZygpKX19KCksZGF0ZUlTTzpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm9wdGlvbmFsKGIpfHwvXlxcZHs0fVtcXC9cXC1dKDA/WzEtOV18MVswMTJdKVtcXC9cXC1dKDA/WzEtOV18WzEyXVswLTldfDNbMDFdKSQvLnRlc3QoYSl9LG51bWJlcjpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm9wdGlvbmFsKGIpfHwvXig/Oi0/XFxkK3wtP1xcZHsxLDN9KD86LFxcZHszfSkrKT8oPzpcXC5cXGQrKT8kLy50ZXN0KGEpfSxkaWdpdHM6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5vcHRpb25hbChiKXx8L15cXGQrJC8udGVzdChhKX0sbWlubGVuZ3RoOmZ1bmN0aW9uKGIsYyxkKXt2YXIgZT1hLmlzQXJyYXkoYik/Yi5sZW5ndGg6dGhpcy5nZXRMZW5ndGgoYixjKTtyZXR1cm4gdGhpcy5vcHRpb25hbChjKXx8ZT49ZH0sbWF4bGVuZ3RoOmZ1bmN0aW9uKGIsYyxkKXt2YXIgZT1hLmlzQXJyYXkoYik/Yi5sZW5ndGg6dGhpcy5nZXRMZW5ndGgoYixjKTtyZXR1cm4gdGhpcy5vcHRpb25hbChjKXx8ZTw9ZH0scmFuZ2VsZW5ndGg6ZnVuY3Rpb24oYixjLGQpe3ZhciBlPWEuaXNBcnJheShiKT9iLmxlbmd0aDp0aGlzLmdldExlbmd0aChiLGMpO3JldHVybiB0aGlzLm9wdGlvbmFsKGMpfHxlPj1kWzBdJiZlPD1kWzFdfSxtaW46ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB0aGlzLm9wdGlvbmFsKGIpfHxhPj1jfSxtYXg6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB0aGlzLm9wdGlvbmFsKGIpfHxhPD1jfSxyYW5nZTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHRoaXMub3B0aW9uYWwoYil8fGE+PWNbMF0mJmE8PWNbMV19LHN0ZXA6ZnVuY3Rpb24oYixjLGQpe3ZhciBlLGY9YShjKS5hdHRyKFwidHlwZVwiKSxnPVwiU3RlcCBhdHRyaWJ1dGUgb24gaW5wdXQgdHlwZSBcIitmK1wiIGlzIG5vdCBzdXBwb3J0ZWQuXCIsaD1bXCJ0ZXh0XCIsXCJudW1iZXJcIixcInJhbmdlXCJdLGk9bmV3IFJlZ0V4cChcIlxcXFxiXCIrZitcIlxcXFxiXCIpLGo9ZiYmIWkudGVzdChoLmpvaW4oKSksaz1mdW5jdGlvbihhKXt2YXIgYj0oXCJcIithKS5tYXRjaCgvKD86XFwuKFxcZCspKT8kLyk7cmV0dXJuIGImJmJbMV0/YlsxXS5sZW5ndGg6MH0sbD1mdW5jdGlvbihhKXtyZXR1cm4gTWF0aC5yb3VuZChhKk1hdGgucG93KDEwLGUpKX0sbT0hMDtpZihqKXRocm93IG5ldyBFcnJvcihnKTtyZXR1cm4gZT1rKGQpLChrKGIpPmV8fGwoYiklbChkKSE9PTApJiYobT0hMSksdGhpcy5vcHRpb25hbChjKXx8bX0sZXF1YWxUbzpmdW5jdGlvbihiLGMsZCl7dmFyIGU9YShkKTtyZXR1cm4gdGhpcy5zZXR0aW5ncy5vbmZvY3Vzb3V0JiZlLm5vdChcIi52YWxpZGF0ZS1lcXVhbFRvLWJsdXJcIikubGVuZ3RoJiZlLmFkZENsYXNzKFwidmFsaWRhdGUtZXF1YWxUby1ibHVyXCIpLm9uKFwiYmx1ci52YWxpZGF0ZS1lcXVhbFRvXCIsZnVuY3Rpb24oKXthKGMpLnZhbGlkKCl9KSxiPT09ZS52YWwoKX0scmVtb3RlOmZ1bmN0aW9uKGIsYyxkLGUpe2lmKHRoaXMub3B0aW9uYWwoYykpcmV0dXJuXCJkZXBlbmRlbmN5LW1pc21hdGNoXCI7ZT1cInN0cmluZ1wiPT10eXBlb2YgZSYmZXx8XCJyZW1vdGVcIjt2YXIgZixnLGgsaT10aGlzLnByZXZpb3VzVmFsdWUoYyxlKTtyZXR1cm4gdGhpcy5zZXR0aW5ncy5tZXNzYWdlc1tjLm5hbWVdfHwodGhpcy5zZXR0aW5ncy5tZXNzYWdlc1tjLm5hbWVdPXt9KSxpLm9yaWdpbmFsTWVzc2FnZT1pLm9yaWdpbmFsTWVzc2FnZXx8dGhpcy5zZXR0aW5ncy5tZXNzYWdlc1tjLm5hbWVdW2VdLHRoaXMuc2V0dGluZ3MubWVzc2FnZXNbYy5uYW1lXVtlXT1pLm1lc3NhZ2UsZD1cInN0cmluZ1wiPT10eXBlb2YgZCYme3VybDpkfXx8ZCxoPWEucGFyYW0oYS5leHRlbmQoe2RhdGE6Yn0sZC5kYXRhKSksaS5vbGQ9PT1oP2kudmFsaWQ6KGkub2xkPWgsZj10aGlzLHRoaXMuc3RhcnRSZXF1ZXN0KGMpLGc9e30sZ1tjLm5hbWVdPWIsYS5hamF4KGEuZXh0ZW5kKCEwLHttb2RlOlwiYWJvcnRcIixwb3J0OlwidmFsaWRhdGVcIitjLm5hbWUsZGF0YVR5cGU6XCJqc29uXCIsZGF0YTpnLGNvbnRleHQ6Zi5jdXJyZW50Rm9ybSxzdWNjZXNzOmZ1bmN0aW9uKGEpe3ZhciBkLGcsaCxqPWE9PT0hMHx8XCJ0cnVlXCI9PT1hO2Yuc2V0dGluZ3MubWVzc2FnZXNbYy5uYW1lXVtlXT1pLm9yaWdpbmFsTWVzc2FnZSxqPyhoPWYuZm9ybVN1Ym1pdHRlZCxmLnJlc2V0SW50ZXJuYWxzKCksZi50b0hpZGU9Zi5lcnJvcnNGb3IoYyksZi5mb3JtU3VibWl0dGVkPWgsZi5zdWNjZXNzTGlzdC5wdXNoKGMpLGYuaW52YWxpZFtjLm5hbWVdPSExLGYuc2hvd0Vycm9ycygpKTooZD17fSxnPWF8fGYuZGVmYXVsdE1lc3NhZ2UoYyx7bWV0aG9kOmUscGFyYW1ldGVyczpifSksZFtjLm5hbWVdPWkubWVzc2FnZT1nLGYuaW52YWxpZFtjLm5hbWVdPSEwLGYuc2hvd0Vycm9ycyhkKSksaS52YWxpZD1qLGYuc3RvcFJlcXVlc3QoYyxqKX19LGQpKSxcInBlbmRpbmdcIil9fX0pO3ZhciBiLGM9e307cmV0dXJuIGEuYWpheFByZWZpbHRlcj9hLmFqYXhQcmVmaWx0ZXIoZnVuY3Rpb24oYSxiLGQpe3ZhciBlPWEucG9ydDtcImFib3J0XCI9PT1hLm1vZGUmJihjW2VdJiZjW2VdLmFib3J0KCksY1tlXT1kKX0pOihiPWEuYWpheCxhLmFqYXg9ZnVuY3Rpb24oZCl7dmFyIGU9KFwibW9kZVwiaW4gZD9kOmEuYWpheFNldHRpbmdzKS5tb2RlLGY9KFwicG9ydFwiaW4gZD9kOmEuYWpheFNldHRpbmdzKS5wb3J0O3JldHVyblwiYWJvcnRcIj09PWU/KGNbZl0mJmNbZl0uYWJvcnQoKSxjW2ZdPWIuYXBwbHkodGhpcyxhcmd1bWVudHMpLGNbZl0pOmIuYXBwbHkodGhpcyxhcmd1bWVudHMpfSksYX0pO1xuXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAkKCdzZWxlY3QnKS5uaWNlU2VsZWN0KCk7XG4gICAgJCgnW2Jhbm5lclNsaWRlcl9qc10nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIG5ldyBTd2lwZXIoJCh0aGlzKVswXSwge1xuICAgICAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgICAgc3BlZWQ6IDgwMCxcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgZmFkZUVmZmVjdDoge1xuICAgICAgICAgIGNyb3NzRmFkZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBhdXRvcGxheToge1xuICAgICAgICAgIGRlbGF5OiA0MDAwLFxuICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgIGVsOiAnLmJhbm5lcnMtc3dpcGVyX19wYWdpbmF0aW9uJyxcbiAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgfSk7XG4gICQoJ1twcm9kdWN0c1NsaWRlcl9qc10nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBuYXZpZ2F0aW9uUHJldiA9ICQodGhpcykucGFyZW50cygnLnNlY3Rpb24tcHJvZHVjdHMtc3dpcGVyJykuZmluZCgnLnN3aXBlcl9fbmF2aWdhdGlvbi1idG4tcHJldicpWzBdO1xuICAgIGNvbnN0IG5hdmlnYXRpb25OZXh0ID0gJCh0aGlzKS5wYXJlbnRzKCcuc2VjdGlvbi1wcm9kdWN0cy1zd2lwZXInKS5maW5kKCcuc3dpcGVyX19uYXZpZ2F0aW9uLWJ0bi1uZXh0JylbMF07XG4gICAgdmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJCh0aGlzKVswXSwge1xuICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLjc1LFxuICAgICAgc3BhY2VCZXR3ZWVuOiAxNixcbiAgICAgIHNwZWVkOiA3MDAsXG4gICAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgZWw6IFwiLnN3aXBlci1zY3JvbGxiYXJcIixcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICBoaWRlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogbmF2aWdhdGlvbk5leHQsXG4gICAgICAgIHByZXZFbDogbmF2aWdhdGlvblByZXYsXG4gICAgICB9LFxuICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgMDoge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEuNzUsXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNixcbiAgICAgICAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgNzY3OiB7XG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgICAgICAgIHNjcm9sbGJhcjoge1xuICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gICQoJ1tzZXJ0aWZpY2F0ZXNTd2lwZXJfSlNdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJCh0aGlzKVswXSwge1xuICAgICAgc3BlZWQ6IDcwMCxcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEuNixcbiAgICAgIHNwYWNlQmV0d2VlbjogMTYsXG4gICAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgZWw6IFwiLnN3aXBlci1zY3JvbGxiYXJcIixcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICBoaWRlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBicmVha3BvaW50czoge1xuICAgICAgICAwOiB7XG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMS42LFxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTYsXG4gICAgICAgICAgc2Nyb2xsYmFyOiB7XG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIDc2Nzoge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgICAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgfSlcbiAgfSlcbiAgJCgnW3Byb2R1Y3RHYWxsZXJ5U2xpZGVyX2pzXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCQodGhpcylbMF0sIHtcbiAgICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxuICAgICAgICBidWxsZXRzOiB0cnVlLFxuICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICB9LFxuICAgIH0pXG4gIH0pO1xuICAkKCdba25vbGVkZ2VTbGlkZXJfanNdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJCh0aGlzKVswXSwge1xuICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLjEsXG4gICAgICBzcGFjZUJldHdlZW46IDE2LFxuICAgICAgc2Nyb2xsYmFyOiB7XG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgIGVsOiBcIi5zd2lwZXItc2Nyb2xsYmFyXCIsXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgaGlkZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgMDoge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEuMSxcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDE2LFxuICAgICAgICAgIHNjcm9sbGJhcjoge1xuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICA3Njc6IHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgICAgICAgc2Nyb2xsYmFyOiB7XG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfVxuICAgIH0pXG4gIH0pO1xuICAkKCdbbmV3c1NsaWRlcl9qc10nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3dpcGVyID0gbmV3IFN3aXBlcigkKHRoaXMpWzBdLCB7XG4gICAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEuMSxcbiAgICAgIHNwYWNlQmV0d2VlbjogMTYsXG4gICAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgZWw6IFwiLnN3aXBlci1zY3JvbGxiYXJcIixcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICBoaWRlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBicmVha3BvaW50czoge1xuICAgICAgICAwOiB7XG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMS4xLFxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTYsXG4gICAgICAgICAgc2Nyb2xsYmFyOiB7XG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIDc2Nzoge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgICAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgfSlcbiAgfSk7XG4gICQoJ1tzZXJ0aWZpY2F0ZVNsaWRlcl9qc10nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3dpcGVyID0gbmV3IFN3aXBlcigkKHRoaXMpWzBdLCB7XG4gICAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICBzcGFjZUJldHdlZW46IDY0LFxuICAgICAgc3BlZWQ6IDcwMCxcbiAgICAgIHNjcm9sbGJhcjoge1xuICAgICAgICBlbDogXCIuc3dpcGVyLXNjcm9sbGJhclwiLFxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgIGhpZGU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIC8vIG5hdmlnYXRpb246IHtcbiAgICAgIC8vICAgbmV4dEVsOiAnLnNlY3Rpb24tc2VydGlmaWNhdGVzIC5zd2lwZXJfX25hdmlnYXRpb24tYnRuLW5leHQnLFxuICAgICAgLy8gICBwcmV2RWw6ICcuc2VjdGlvbi1zZXJ0aWZpY2F0ZXMgLnN3aXBlcl9fbmF2aWdhdGlvbi1idG4tcHJldicsXG4gICAgICAvLyB9LFxuICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgMDoge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICAgICAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgNzY3OiB7XG4gICAgICAgICAgZnJlZU1vZGU6IHRydWUsXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgICAgICAgc2Nyb2xsYmFyOiB7XG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICAxMjAwOiB7XG4gICAgICAgICAgZnJlZU1vZGU6IHRydWUsXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogNjQsXG4gICAgICAgICAgc2Nyb2xsYmFyOiB7XG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICB2YXIgc3dpcGVyTWFycXVlID0gbmV3IFN3aXBlcignLnNlY3Rpb24tcGFydG5lcnNfX3N3aXBlcicsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgIHNwYWNlQmV0d2VlbjogMCxcbiAgICBzcGVlZDogNDUwMCxcbiAgICBsb29wOiB0cnVlLFxuICAgIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSwgLy8g0LzQvtC20L3QviDQtdGJ0ZEg0L7RgtC60LvRjtGH0LjRgtGMINGB0LLQsNC50L9cbiAgICBhdXRvcGxheToge1xuICAgICAgZGVsYXk6IDAsXG4gICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UgLy8g0LjQu9C4INGB0LTQtdC70LDRgtGMINGC0LDQuiwg0YfRgtC+0LHRiyDQstC+0YHRgdGC0LDQvdCw0LLQu9C40LLQsNC70YHRjyBhdXRvcGxheSDQv9C+0YHQu9C1INCy0LfQsNC40LzQvtC00LXQudGB0YLQstC40Y9cbiAgICB9LFxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICA5OTI6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNSxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiA1LFxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLy8gZG9vb3JzIHN3aXBlcnNcbiAgZnVuY3Rpb24gZG9vcnNTd2lwZXJJbml0KGVsLCBpc1JldmVyc2UgPSBmYWxzZSwgc3BlZWQgPSA2NTAwLCBpbml0aWFsU2xpZGUgPSAwKSB7XG4gICAgdmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoZWwsIHtcbiAgICAgICAgZGlyZWN0aW9uOiAndmVydGljYWwnLFxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLjQsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgICAgIHNwZWVkOiBzcGVlZCxcbiAgICAgICAgaW5pdGlhbFNsaWRlOiBpbml0aWFsU2xpZGUsXG4gICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSwgLy8g0LzQvtC20L3QviDQtdGJ0ZEg0L7RgtC60LvRjtGH0LjRgtGMINGB0LLQsNC50L9cbiAgICAgICAgYXV0b3BsYXk6IHtcbiAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICByZXZlcnNlRGlyZWN0aW9uOiBpc1JldmVyc2UsXG4gICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlIC8vINC40LvQuCDRgdC00LXQu9Cw0YLRjCDRgtCw0LosINGH0YLQvtCx0Ysg0LLQvtGB0YHRgtCw0L3QsNCy0LvQuNCy0LDQu9GB0Y8gYXV0b3BsYXkg0L/QvtGB0LvQtSDQstC30LDQuNC80L7QtNC10LnRgdGC0LLQuNGPXG4gICAgICAgIH0sXG4gICAgICAgIC8vIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgIC8vICAgNzY3OiB7XG5cbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vIH1cbiAgICB9KTtcbiAgfVxuICB2YXIgZG9vcnNTd2lwZXJFbDEgPSAkKCcuc2VjdGlvbi1kb29yc19fc3dpcGVyXzEnKTtcbiAgdmFyIGRvb3JzU3dpcGVyRWwyID0gJCgnLnNlY3Rpb24tZG9vcnNfX3N3aXBlcl8yJyk7XG4gIHZhciBkb29yc1N3aXBlckVsMyA9ICQoJy5zZWN0aW9uLWRvb3JzX19zd2lwZXJfMycpO1xuICB2YXIgZG9vcnNTd2lwZXJFbDQgPSAkKCcuc2VjdGlvbi1kb29yc19fc3dpcGVyXzQnKTtcbiAgZG9vcnNTd2lwZXJJbml0KGRvb3JzU3dpcGVyRWwxWzBdKTtcbiAgZG9vcnNTd2lwZXJJbml0KGRvb3JzU3dpcGVyRWwyWzBdLCB0cnVlLCA4NTAwKTtcbiAgZG9vcnNTd2lwZXJJbml0KGRvb3JzU3dpcGVyRWwzWzBdLCBmYWxzZSwgNDgwMCk7XG4gIGRvb3JzU3dpcGVySW5pdChkb29yc1N3aXBlckVsNFswXSwgdHJ1ZSwgNjIwMCk7XG5cbiAgY29uc3QgZ2FsbGFyeV9fc3dpcGVyID0gbmV3IFN3aXBlcignLmdhbGxhcnlfX3N3aXBlcicsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgIHNwYWNlQmV0d2VlbjogJzElJyxcbiAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICAgIHNjcm9sbGJhcjoge1xuICAgICAgZWw6IFwiLnN3aXBlci1zY3JvbGxiYXJcIixcbiAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgIGhpZGU6IGZhbHNlLFxuICAgIH0sXG4gICAgYXV0b3BsYXk6IHtcbiAgICAgICAgZGVsYXk6IDI1MDAsXG4gICAgfSxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGVsOiBcIi5nYWxsYXJ5X193cmFwcGVyIC5zd2lwZXItcGFnaW5hdGlvblwiLFxuICAgIH0sXG4gICAgYnJlYWtwb2ludHM6e1xuICAgICAgMDp7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEuNSxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAnMSUnLFxuICAgICAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIDU3ODp7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAnMSUnLFxuICAgICAgc2Nyb2xsYmFyOiB7XG4gICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgfVxuICAgIH0sXG4gICAgICA3Njc6e1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAnMSUnLFxuICAgICAgICAgIHNjcm9sbGJhcjoge1xuICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgIH0sXG4gICAgICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgfVxuICAgICAgfSxcblxuXG4gICAgfVxufSk7XG5cbmlmKCQoJy5zaW5nbGUtcHJvZHVjdF9fZ2FsbGVyeS1zd2lwZXItdGh1bWJzJylbMF0pIHtcbiAgdmFyIGdhbGxlcnlUaHVtYnNTd2lwZXIgPSBuZXcgU3dpcGVyKCQoJy5zaW5nbGUtcHJvZHVjdF9fZ2FsbGVyeS1zd2lwZXItdGh1bWJzJylbMF0sIHtcbiAgICBkaXJlY3Rpb246ICd2ZXJ0aWNhbCcsXG4gICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICBzbGlkZXNQZXJWaWV3OiAzLjMsXG4gICAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6ICQoJy5zaW5nbGUtcHJvZHVjdF9fZ2FsbGVyeS1zd2lwZXItdGh1bWJzLXdyYXAnKS5maW5kKCcuc3dpcGVyX19uYXZpZ2F0aW9uLWJ0bi1uZXh0JylbMF0sXG4gICAgICBwcmV2RWw6ICQoJy5zaW5nbGUtcHJvZHVjdF9fZ2FsbGVyeS1zd2lwZXItdGh1bWJzLXdyYXAnKS5maW5kKCcuc3dpcGVyX19uYXZpZ2F0aW9uLWJ0bi1wcmV2JylbMF0sXG4gICAgfSxcbiAgICBicmVha3BvaW50czoge1xuICAgICAgMDoge1xuICAgICAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNC4zLFxuICAgICAgfSxcbiAgICAgIDc2ODoge1xuICAgICAgICBkaXJlY3Rpb246ICd2ZXJ0aWNhbCcsXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDMuMyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgcmVzaXplOiBmdW5jdGlvbiByZXNpemUoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICB2YXIgZ2FsbGVyeVN3aXBlciA9IG5ldyBTd2lwZXIoJCgnLnNpbmdsZS1wcm9kdWN0X19nYWxsZXJ5LXN3aXBlci1sYXJnZScpWzBdLCB7XG4gICAgZWZmZWN0OiAnZmFkZScsXG4gICAgZmFkZUVmZmVjdDoge1xuICAgICAgY3Jvc3NGYWRlOiB0cnVlXG4gICAgfSxcbiAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogJCgnLnNpbmdsZS1wcm9kdWN0X19nYWxsZXJ5LXN3aXBlci10aHVtYnMtd3JhcCcpLmZpbmQoJy5zd2lwZXJfX25hdmlnYXRpb24tYnRuLW5leHQnKVswXSxcbiAgICAgIHByZXZFbDogJCgnLnNpbmdsZS1wcm9kdWN0X19nYWxsZXJ5LXN3aXBlci10aHVtYnMtd3JhcCcpLmZpbmQoJy5zd2lwZXJfX25hdmlnYXRpb24tYnRuLXByZXYnKVswXSxcbiAgICB9LFxuICAgIHRodW1iczoge1xuICAgICAgc3dpcGVyOiBnYWxsZXJ5VGh1bWJzU3dpcGVyLFxuICAgIH0sXG4gICAgYnJlYWtwb2ludHM6IHtcbiAgICAgIDA6IHtcbiAgICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIDc2ODoge1xuICAgICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG59XG5cbiAgICAkKCcudGFicy1zbGlkZXInKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkY29udGFpbmVyID0gJCh0aGlzKS5maW5kKCcuc3dpcGVyLWNvbnRhaW5lcicpO1xuICAgICAgdmFyIHN3aXBlclRhYnMgPSBuZXcgU3dpcGVyKCRjb250YWluZXIsIHtcbiAgICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICAgIGZyZWVNb2RlOiB0cnVlLFxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgICAgIHRvdWNoU3RhcnRGb3JjZVByZXZlbnREZWZhdWx0OiB0cnVlLFxuICAgICAgfSkgO1xuICAgIH0pXG5cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1thZ3JlZW1lbnRDb250cm9sX0pTXScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcbiAgICAgICAgICAgICRmb3JtID0gJHRoaXMuY2xvc2VzdCgnZm9ybScpLFxuICAgICAgICAgICAgJGlucHV0ID0gJGZvcm0uZmluZCgnW2FncmVlbWVudENvbnRyb2xDaGVja2JveF9KU10nKSxcbiAgICAgICAgICAgICRidG4gPSAkZm9ybS5maW5kKCdbYWdyZWVtZW50Q29udHJvbEJ0bl9KU10nKTtcblxuICAgICAgICBpZiAoJHRoaXMuaGFzQ2xhc3MoJ2NoZWNrZWQnKSkge1xuICAgICAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MoJ2NoZWNrZWQnKTtcbiAgICAgICAgICAgICRpbnB1dC5yZW1vdmVBdHRyKCdjaGVja2VkJyk7XG4gICAgICAgICAgICAkYnRuLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgJGJ0bi5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ2NoZWNrZWQnKTtcbiAgICAgICAgICAgICRpbnB1dC5hdHRyKCdjaGVja2VkJywgJycpO1xuICAgICAgICAgICAgJGJ0bi5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICRidG4ucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbcmVhZE1vcmVCdG5fSlNdJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJGJ0biA9ICQodGhpcyksXG4gICAgICAgICAgICAkcGFyZW50ID0gJGJ0bi5jbG9zZXN0KCdbcmVhZE1vcmVDb250YWluZXJfSlNdJyk7XG5cbiAgICAgICAgJHBhcmVudC5hZGRDbGFzcygnb3BlbicpO1xuICAgIH0pO1xuXG4gICAgJChcIlt0b1RvcF9KU11cIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogMFxuICAgICAgICB9LCAwKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgJChcIlthbmNob3JMaW5rX0pTXVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcblxuICAgICAgICBpZiAoJCh3aW5kb3cpLmlubmVyV2lkdGgoKSA8IDc2OSkge1xuICAgICAgICAgICAgdmFyIGhlYWRlckhlaWdodCA9ICQod2luZG93KS5pbm5lcldpZHRoKCk7XG4gICAgICAgICAgICBoZWFkZXJIZWlnaHQgPSAoaGVhZGVySGVpZ2h0IC8gMTAwKSAqIDI5LjY4NzU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgaGVhZGVySGVpZ2h0ID0gJCh3aW5kb3cpLmlubmVyV2lkdGgoKTtcbiAgICAgICAgICAgIGhlYWRlckhlaWdodCA9IChoZWFkZXJIZWlnaHQgLyAxMDApICogNSwgMjU0ODYwNzQ2MTkwMjI1OTU5MDEyMDg2MTc5NzE2MjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkKGlkKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgdG9wID0gKCQoaWQpLm9mZnNldCgpLnRvcCkgLSBoZWFkZXJIZWlnaHQ7XG4gICAgICAgICAgICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IHRvcFxuICAgICAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZygxKTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJpbmRleC5odG1sXCIgKyBpZDtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcbiAgICBpZiAoaGFzaCAhPSBcIlwiKSB7XG5cbiAgICAgICAgaWYgKCQod2luZG93KS5pbm5lcldpZHRoKCkgPCA3NjkpIHtcbiAgICAgICAgICAgIHZhciBoZWFkZXJIZWlnaHQgPSAkKHdpbmRvdykuaW5uZXJXaWR0aCgpO1xuICAgICAgICAgICAgaGVhZGVySGVpZ2h0ID0gKGhlYWRlckhlaWdodCAvIDEwMCkgKiAyOS42ODc1O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGhlYWRlckhlaWdodCA9ICQod2luZG93KS5pbm5lcldpZHRoKCk7XG4gICAgICAgICAgICBoZWFkZXJIZWlnaHQgPSAoaGVhZGVySGVpZ2h0IC8gMTAwKSAqIDUsIDI1NDg2MDc0NjE5MDIyNTk1OTAxMjA4NjE3OTcxNjI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJChoYXNoKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gJChoYXNoKS5vZmZzZXQoKS50b3AgLSBoZWFkZXJIZWlnaHQ7XG4gICAgICAgICAgICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IG9mZnNldFxuICAgICAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG5cblxuICAkLnZhbGlkYXRvci5hZGRNZXRob2QoJ3BhdHRlcm4nLCBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCwgcGF0dGVybikge1xuICAgIC8vINCf0YDQvtCy0LXRgNGP0LXQvCwg0Y/QstC70Y/QtdGC0YHRjyDQu9C4INC30L3QsNGH0LXQvdC40LUg0L/Rg9GB0YLRi9C8ICjQtdGB0LvQuCDQv9C+0LvQtSDQvdC1INC+0LHRj9C30LDRgtC10LvRjNC90L4pINC40LvQuCDRgdC+0L7RgtCy0LXRgtGB0YLQstGD0LXRgiDRgNC10LPRg9C70Y/RgNC90L7QvNGDINCy0YvRgNCw0LbQtdC90LjRjlxuICAgIHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IHBhdHRlcm4udGVzdCh2YWx1ZSk7XG59LCAn0J/QvtC70LUg0YHQvtC00LXRgNC20LjRgiDQvdC10LrQvtGA0YDQtdC60YLQvdC+0LUg0LfQvdCw0YfQtdC90LjQtScpO1xuXG4gICAgJCgnW2Zvcm1WYWxpZGF0ZV9KU10nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGZvcm0gPSAkKHRoaXMpO1xuICAgICAgICAkKHRoaXMpLnZhbGlkYXRlKHtcbiAgICAgICAgICAgIGVycm9yQ2xhc3M6IFwidmFsaWRhdGVfZXJyb3JcIixcbiAgICAgICAgICAgIHJ1bGVzOiB7XG4gICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgcGF0dGVybjogL15bYS16QS1a0LAt0Y/QkC3Qr1xcc10rJC8sIC8vINCc0LXRgtC+0LQg0L/RgNC+0LLQtdGA0LrQuCDQsdGD0LrQsiDQuCDQv9GA0L7QsdC10LvQvtCyXG4gICAgICAgICAgICAgICAgICBtaW5sZW5ndGg6IDIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHBob25lOiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbWlubGVuZ3RoOiA3LCAvLyDQnNC10YLQvtC0INC/0YDQvtCy0LXRgNC60Lgg0L/QvtCy0YLQvtGA0Y/RjtGJ0LjRhdGB0Y8g0L/QvtC00YDRj9C0INGB0LjQvNCy0L7Qu9C+0LJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZW1haWw6IHtcbiAgICAgICAgICAgICAgICAgIHBhdHRlcm46IC9eKFthLXpBLVowLTlfListXSkrXFxAKChbYS16QS1aMC05LV0pK1xcLikrKFthLXpBLVowLTldezIsNH0pKyQvLCAvLyDQn9GA0L7QstC10YDQutCwINC60L7RgNGA0LXQutGC0L3QvtGB0YLQuCBlbWFpbFxuICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvclBsYWNlbWVudDogZnVuY3Rpb24gKGVycm9yLCBlbGVtZW50KSB7fSxcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAkKCdbaGVhZGVyQnRuX0pTXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICBtZW51Q2xvc2UoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbWVudU9wZW4oKTtcbiAgICB9KTtcblx0JCgnLmhlYWRlcl9fbW9iLXdyYXAgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCgnW2hlYWRlckJ0bl9KU10nKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgIG1lbnVDbG9zZSgpO1xuXHRcdH1cbiAgfSk7XG5cblxuXG4gIGZ1bmN0aW9uIHNsaWRlVG9nZ2xlU2VjdGlvbigpIHtcbiAgICAkKCdbdG9nZ2xlSXRlbV9KU10nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgJCh0aGlzKS5zaWJsaW5ncygpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgkKHdpbmRvdykub3V0ZXJXaWR0aCgpIDwgOTkyKSB7XG4gICAgICAgICAgJCh0aGlzKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICQodGhpcykucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYoJCh3aW5kb3cpLm91dGVyV2lkdGgoKSA8IDk5Mikge1xuICAgICAgJCgnLnByb2R1Y3QtY2FyZCBbdG9nZ2xlSXRlbV9KU10nKS5maXJzdCgpLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgICAkKCcucHJvZHVjdC1jYXJkIFt0b2dnbGVJdGVtX0pTXScpLmZpcnN0KCkuc2libGluZ3MoKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICAkKCdbdG9nZ2xlSXRlbV9KU10nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICQodGhpcykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoJCh3aW5kb3cpLm91dGVyV2lkdGgoKSA8IDk5Mikge1xuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICQodGhpcykuc2libGluZ3MoKS5zbGlkZVRvZ2dsZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgc2xpZGVUb2dnbGVTZWN0aW9uKCk7XG5cblxuXG4gIC8vIERyb3Bkb3duXG4gIGZ1bmN0aW9uIHJpZ2h0RHJvcGRvd24oKSB7XG4gICAgJCgnLm1lbnVfX2l0ZW0uZHJvcGRvd24nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkc3VibWVudSA9ICQodGhpcykuZmluZCgnLnN1Ym1lbnUnKTtcbiAgICAgIHZhciAkb2Zmc2V0VG9MZWZ0ID0gJHN1Ym1lbnUub2Zmc2V0KCkubGVmdCArICRzdWJtZW51Lm91dGVyV2lkdGgoKTtcbiAgICAgIGlmICgkKHdpbmRvdykub3V0ZXJXaWR0aCgpID4gOTkyKSB7XG4gICAgICAgIGlmKCRvZmZzZXRUb0xlZnQgPiAkKHdpbmRvdykub3V0ZXJXaWR0aCgpKSB7XG4gICAgICAgICAgJHN1Ym1lbnUuY3NzKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWCgtJHskb2Zmc2V0VG9MZWZ0IC0gJCh3aW5kb3cpLm91dGVyV2lkdGgoKSArIDMwfXB4KWApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkc3VibWVudS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJpZ2h0RHJvcGRvd24oKTtcblxuICBsZXQgd2luZG93V2lkdGggPSAkKHdpbmRvdykub3V0ZXJXaWR0aCgpO1xuICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKHdpbmRvdykub3V0ZXJXaWR0aCgpICE9PSB3aW5kb3dXaWR0aCkge1xuICAgICAgcmlnaHREcm9wZG93bigpO1xuICAgICAgc2xpZGVUb2dnbGVTZWN0aW9uKCk7XG4gICAgfVxuICB9KTtcblxuXG4gICAgJCgnLm1lbnVfX2l0ZW0uZHJvcGRvd24nKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICgkKHdpbmRvdykub3V0ZXJXaWR0aCgpID4gOTkyKSB7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAkKHRoaXMpLmZpbmQoJy5zdWJtZW51JykuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgfVxuICAgIH0pO1xuICAgICQoJy5tZW51X19pdGVtLmRyb3Bkb3duJykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoJCh3aW5kb3cpLm91dGVyV2lkdGgoKSA+IDk5Mikge1xuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgJCh0aGlzKS5maW5kKCcuc3VibWVudScpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJy5jYXRlZ29yaWVzLXNpZGVfX2l0ZW0nKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgaWYoJCh0aGlzKS5maW5kKCcuc3ViY2F0ZWdvcnktc2lkZScpKSB7XG4gICAgICAgICQodGhpcykuZmluZCgnLnN1YmNhdGVnb3J5LXNpZGUnKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgJCgnLmNhdGVnb3JpZXMtc2lkZV9faXRlbScpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgaWYoJCh0aGlzKS5maW5kKCcuc3ViY2F0ZWdvcnktc2lkZScpKSB7XG4gICAgICAgICAgJCh0aGlzKS5maW5kKCcuc3ViY2F0ZWdvcnktc2lkZScpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnLm1lbnVfX2Ryb3Bkb3duLWJ0bicpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICgkKHdpbmRvdykub3V0ZXJXaWR0aCgpIDw9IDk5Mikge1xuICAgICAgICAgIHZhciAkaXNPcGVuID0gJCh0aGlzKS5jbG9zZXN0KCcubWVudV9faXRlbS5kcm9wZG93bicpLmhhc0NsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICBpZigkaXNPcGVuKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5tZW51X19pdGVtLmRyb3Bkb3duJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLnN1Ym1lbnUnKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCcuc3VibWVudScpLnNsaWRlVXAoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcubWVudV9faXRlbS5kcm9wZG93bicpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJy5zdWJtZW51JykuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLnN1Ym1lbnUnKS5zbGlkZURvd24oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcblxuICAkKCcuY2F0YWxvZy1tb2Itc3VibWVudV9fbWVudScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgJCh0aGlzKS5jaGlsZHJlbignLm1lbnVfX2l0ZW0uZHJvcGRvd24nKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgJCh0aGlzKS5jaGlsZHJlbignLm1lbnVfX2l0ZW0uZHJvcGRvd24nKS5maW5kKCcuc3VibWVudScpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgfSlcblxuICAgICQoJ1tsb2FkTW9yZUJ0bl9KU10nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnW2xvYWRNb3JlQ29udGFpbmVyX0pTXScpLmFkZENsYXNzKCdtZC1hbGwtaXRlbXMtdmlzaWJsZScpO1xuICAgIH0pO1xuXG5mdW5jdGlvbiBtZW51T3BlbigpIHtcbiAgICAkKCdbaGVhZGVyQnRuX0pTXScpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAkKCdbaGVhZGVyQnRuX0pTXScpLmNsb3Nlc3QoJ2hlYWRlcicpLmZpbmQoJy5oZWFkZXJfX21vYi13cmFwJykuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAkKCdodG1sJykuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcbn1cbmZ1bmN0aW9uIG1lbnVDbG9zZSgpIHtcbiAgICAkKCdbaGVhZGVyQnRuX0pTXScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAkKCdbaGVhZGVyQnRuX0pTXScpLmNsb3Nlc3QoJ2hlYWRlcicpLmZpbmQoJy5oZWFkZXJfX21vYi13cmFwJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAkKCdodG1sJykucmVtb3ZlQXR0cignc3R5bGUnKTtcbn1cbmZ1bmN0aW9uIGNhdGFsb2dNZW51T3BlbigpIHtcbiAgJCgnLmNhdGFsb2ctbW9iLW1lbnUnKS5hZGRDbGFzcygnb3BlbicpO1xuICAkKCdodG1sJykuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcbn1cbmZ1bmN0aW9uIGNhdGFsb2dNZW51Q2xvc2UoKSB7XG4gICQoJy5jYXRhbG9nLW1vYi1tZW51JykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgJCgnaHRtbCcpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG59XG5cbiQoJ1toZWFkZXJDYXRhbG9nQnRuX0pTXScpLm9uKCdjbGljaycsIChlKSA9PiB7XG4gIGNhdGFsb2dNZW51T3BlbigpO1xufSk7XG4kKCdbaGVhZGVyQ2F0YWxvZ0Nsb3NlQnRuX0pTXScpLm9uKCdjbGljaycsIChlKSA9PiB7XG4gICQoJy5jYXRhbG9nLW1vYi1tZW51X19zdWJtZW51JykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gIH0pO1xuICBjYXRhbG9nTWVudUNsb3NlKCk7XG59KTtcbiQoJy5jYXRhbG9nLW1vYi1tZW51X19idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgJCh0aGlzKS5uZXh0KCcuY2F0YWxvZy1tb2Itc3VibWVudScpLmFkZENsYXNzKCdvcGVuJyk7XG59KTtcbiQoJy5jYXRhbG9nLW1vYi1tZW51X19iYWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICQodGhpcykucGFyZW50cygnLmNhdGFsb2ctbW9iLXN1Ym1lbnUnKS5yZW1vdmVDbGFzcygnb3BlbicpO1xufSk7XG4kKCcuc2VjdGlvbi1jYXRhbG9nX19maWx0ZXJzLW9wZW4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgJCgnLnNlY3Rpb24tY2F0YWxvZ19fZmlsdGVycy1tb2Itd3JhcCcpLmFkZENsYXNzKCdvcGVuJyk7XG4gICQoJ2h0bWwnKS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xufSk7XG4kKCcuc2VjdGlvbi1jYXRhbG9nX19maWx0ZXJzLW1vYi1iYWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICQoJy5zZWN0aW9uLWNhdGFsb2dfX2ZpbHRlcnMtbW9iLXdyYXAnKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAkKCdodG1sJykucmVtb3ZlQXR0cignc3R5bGUnKTtcbn0pO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbcG9wdXBPcGVuXScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcG9wdXBDbG9zZSgpO1xuICAgICAgICB2YXIgJGVsZW0gPSAkKHRoaXMpLFxuICAgICAgICAgICAgdGFyZ2V0ID0gJGVsZW0uYXR0cigncG9wdXBPcGVuJyk7XG5cbiAgICAgICAgaWYgKHRhcmdldCA9PSAncHJvbW90aW9uLXBvcHVwJyB8fCB0YXJnZXQgPT0gJ3NlcnZpY2UtcG9wdXAnIHx8IHRhcmdldCA9PSAncHJvZHVjdC1wb3B1cCcpIHtcbiAgICAgICAgICAgIHZhciBpZCA9ICRlbGVtLmF0dHIoJ2RhdGEtaGlkZGVuLWlkJyk7XG5cbiAgICAgICAgICAgICQoJ1twb3B1cElEPVwiJyArIHRhcmdldCArICdcIl0nKS5maW5kKCdbaGlkZGVuVmFsdWVfSlNdJykuYXR0cigndmFsdWUnLCBpZCk7XG4gICAgICAgIH1cblxuICAgICAgICBwb3B1cE9wZW4odGFyZ2V0KTtcbiAgICB9KTtcblxuXG5cbiAgICB2YXIgJGFncmVlbWVudENvbnRyb2wgPSAkKCdbYWdyZWVtZW50Q29udHJvbF9KU10nKSxcbiAgICAgICAgJGZvcm0gPSAkYWdyZWVtZW50Q29udHJvbC5jbG9zZXN0KCdmb3JtJyksXG4gICAgICAgICRpbnB1dCA9ICRmb3JtLmZpbmQoJ1thZ3JlZW1lbnRDb250cm9sQ2hlY2tib3hfSlNdJyksXG4gICAgICAgICRidG4gPSAkZm9ybS5maW5kKCdbYWdyZWVtZW50Q29udHJvbEJ0bl9KU10nKTtcbiAgICBpZiAoJGFncmVlbWVudENvbnRyb2wuaGFzQ2xhc3MoJ2NoZWNrZWQnKSkge1xuICAgICAgICAkYWdyZWVtZW50Q29udHJvbC5yZW1vdmVDbGFzcygnY2hlY2tlZCcpO1xuICAgICAgICAkaW5wdXQucmVtb3ZlQXR0cignY2hlY2tlZCcpO1xuICAgICAgICAkYnRuLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgICAkYnRuLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbcG9wdXBDbG9zZV9KU10nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHBvcHVwQ2xvc2UoKTtcbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJkb3dubG9hZC1wb3B1cC10cmlnZ2VyXCI+PC9kaXY+Jyk7XG5cbiAgICAkKCdib2R5IC5kb3dubG9hZC1wb3B1cC10cmlnZ2VyJykuaG92ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkb3dubG9hZFBvcHVwU3RhdGUnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgIHBvcHVwT3BlbignZG93bmxvYWQtcG9wdXAnKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Rvd25sb2FkUG9wdXBTdGF0ZScsICdmYWxzZScpO1xuICAgICAgfTtcbiAgICB9KTtcblxuXG5cbiQoJy5oZWFkZXJfX21hcmtldHBsYWNlLWxpbmtzLWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICQodGhpcykudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAkKCcubWFya2V0cGxhY2UtbGlua3Muc2VsZWN0ZWQnKS50b2dnbGVDbGFzcygnaXMtYWN0aXZlJyk7XG59KTtcblxuJCgnYm9keScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gIGlmKCQoJy5tYXJrZXRwbGFjZS1saW5rcy5zZWxlY3RlZCcpLmhhc0NsYXNzKCdpcy1hY3RpdmUnKSAmJiAhKCQoZS50YXJnZXQpLmNsb3Nlc3QoJCgnLmhlYWRlcl9fbWFya2V0cGxhY2UtbGlua3Mtd3JhcCcpKS5sZW5ndGgpKSB7XG4gICAgJCgnLm1hcmtldHBsYWNlLWxpbmtzLnNlbGVjdGVkJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICQoJy5oZWFkZXJfX21hcmtldHBsYWNlLWxpbmtzLWJ0bicpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgfVxufSk7XG5cbiQoJy5oZWFkZXJfX3NlYXJjaC1vcGVuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICQoJy5oZWFkZXJfX3NlYXJjaC13cmFwJykuYWRkQ2xhc3MoJ29wZW4nKTtcbn0pO1xuJCgnLmhlYWRlcl9fc2VhcmNoLWNsb3NlLWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAkKCcuaGVhZGVyX19zZWFyY2gtd3JhcCcpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICQodGhpcykucGFyZW50cygnLmhlYWRlcl9fc2VhcmNoLXdyYXAnKS5maW5kKCdpbnB1dCcpLnZhbCgnJyk7XG59KTtcblxuXG5jb25zdCBzYXZlZExhbmd1YWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlbGVjdGVkTGFuZ3VhZ2UnKTtcbmlmIChzYXZlZExhbmd1YWdlKSB7XG4gICQoJ3NlbGVjdC5oZWFkZXJfX2xhbmcnKS52YWwoYCR7c2F2ZWRMYW5ndWFnZX1gKS5jaGFuZ2UoKTtcbiAgJCgnLmhlYWRlcl9fbGFuZycpLnZhbChgJHtzYXZlZExhbmd1YWdlfWApLm5pY2VTZWxlY3QoJ3VwZGF0ZScpO1xuICAvLyDQo9GB0YLQsNC90LDQstC70LjQstCw0LXQvCDQstGL0LHRgNCw0L3QvdGL0Lkg0Y/Qt9GL0Log0LIg0YDQsNC00LjQvtC60L3QvtC/0LrQsNGFXG4gICQoYGlucHV0W25hbWU9XCJsYW5nLWNob29zZVwiXVt2YWx1ZT1cIiR7c2F2ZWRMYW5ndWFnZX1cIl1gKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICQoJy5oZWFkZXJfX2xhbmctbW9iJykuZGF0YSgnbGFuZycsIHNhdmVkTGFuZ3VhZ2UpO1xuICAkKCcuaGVhZGVyX19sYW5nLW1vYicpLnRleHQoc2F2ZWRMYW5ndWFnZSk7XG4gICQoJy5oZWFkZXJfX21hcmtldHBsYWNlLWxpbmtzJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICB9KTtcbiAgJChgLmhlYWRlcl9fbWFya2V0cGxhY2UtbGlua3NbZGF0YS1sYW5nPVwiJHtzYXZlZExhbmd1YWdlLnRvTG93ZXJDYXNlKCl9XCJdYCkuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICQoYC5oZWFkZXJfX21hcmtldHBsYWNlLWxpbmtzW2RhdGEtbGFuZz1cIiR7c2F2ZWRMYW5ndWFnZX1cIl1gKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbn0gZWxzZSB7XG4gIHBvcHVwT3BlbigncmVnaW9uJyk7XG4gICQoJy5yZWdpb24tcG9wdXBfX2J0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGxhbmcgPSAgJCgnLmxhbmctY2hvb3NlX19yYWRpby1idG4tbGFiZWwgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQnKS52YWwoKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2VsZWN0ZWRMYW5ndWFnZScsIGxhbmcpO1xuICAgICQoJ3NlbGVjdC5oZWFkZXJfX2xhbmcnKS52YWwoYCR7bGFuZ31gKS5jaGFuZ2UoKTtcbiAgICAkKCcuaGVhZGVyX19sYW5nJykudmFsKGAke2xhbmd9YCkubmljZVNlbGVjdCgndXBkYXRlJyk7XG4gICAgJChgaW5wdXRbbmFtZT1cImxhbmctY2hvb3NlXCJdW3ZhbHVlPVwiJHtsYW5nfVwiXWApLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgICAkKCcuaGVhZGVyX19sYW5nLW1vYicpLmRhdGEoJ2xhbmcnLCBsYW5nKTtcbiAgICAkKCcuaGVhZGVyX19sYW5nLW1vYicpLnRleHQobGFuZyk7XG4gICAgJCgnLmhlYWRlcl9fbWFya2V0cGxhY2UtbGlua3MnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICB9KTtcbiAgICAkKGAuaGVhZGVyX19tYXJrZXRwbGFjZS1saW5rc1tkYXRhLWxhbmc9XCIke2xhbmcudG9Mb3dlckNhc2UoKX1cIl1gKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgfSk7XG4gIGlmKCQod2luZG93KS5vdXRlcldpZHRoKCkgPj0gNzY3KSB7XG4gICAgJCgnaHRtbCcpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gIH1cbn1cblxuLy8g0KHQvtGF0YDQsNC90LXQvdC40LUg0LLRi9Cx0YDQsNC90L3QvtCz0L4g0Y/Qt9GL0LrQsCDQsiBsb2NhbFN0b3JhZ2Ug0L/RgNC4INC40LfQvNC10L3QtdC90LjQuCDRgdC10LvQtdC60YLQsFxuJCgnLmhlYWRlcl9fbGFuZycpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlbGVjdGVkTGFuZ3VhZ2UnLCAkKHRoaXMpLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLnZhbCgpKTtcbiAgY29uc3Qgc2F2ZWRMYW5ndWFnZSA9ICAkKHRoaXMpLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLnZhbCgpO1xuICAkKCcuaGVhZGVyX19tYXJrZXRwbGFjZS1saW5rcycpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcbiAgfSk7XG4gICQoYGlucHV0W25hbWU9XCJsYW5nLWNob29zZVwiXVt2YWx1ZT1cIiR7c2F2ZWRMYW5ndWFnZX1cIl1gKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICQoJy5oZWFkZXJfX2xhbmctbW9iJykuZGF0YSgnbGFuZycsIHNhdmVkTGFuZ3VhZ2UpO1xuICAkKCcuaGVhZGVyX19sYW5nLW1vYicpLnRleHQoc2F2ZWRMYW5ndWFnZSk7XG4gICQoYC5oZWFkZXJfX21hcmtldHBsYWNlLWxpbmtzW2RhdGEtbGFuZz1cIiR7JCgnLmhlYWRlcl9fbGFuZyBvcHRpb246c2VsZWN0ZWQnKS52YWwoKS50b0xvd2VyQ2FzZSgpfVwiXWApLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xufSk7XG4vLyDQntCx0YDQsNCx0L7RgtGH0LjQuiDQutC70LjQutCwINC00LvRjyDRgNCw0LTQuNC+0LrQvdC+0L/QvtC6XG4kKCcubGFuZy1jaG9vc2VfX3JhZGlvLWJ0bi1sYWJlbCBpbnB1dFt0eXBlPVwicmFkaW9cIl0nKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHNlbGVjdGVkTGFuZyA9ICQodGhpcykudmFsKCk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZWxlY3RlZExhbmd1YWdlJywgc2VsZWN0ZWRMYW5nKTsgLy8g0KHQvtGF0YDQsNC90Y/QtdC8INCy0YvQsdGA0LDQvdC90YvQuSDRj9C30YvQulxuICAkKCdzZWxlY3QuaGVhZGVyX19sYW5nJykudmFsKGAke3NlbGVjdGVkTGFuZ31gKS5jaGFuZ2UoKTtcbiAgJCgnLmhlYWRlcl9fbGFuZycpLnZhbChzZWxlY3RlZExhbmcpLm5pY2VTZWxlY3QoJ3VwZGF0ZScpOyAvLyDQntCx0L3QvtCy0LvRj9C10Lwg0YHQtdC70LXQutGC0L7RgFxuICAkKCcuaGVhZGVyX19tYXJrZXRwbGFjZS1saW5rcycpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcbiAgfSk7XG4gICQoJy5oZWFkZXJfX2xhbmctbW9iJykuZGF0YSgnbGFuZycsIHNlbGVjdGVkTGFuZyk7XG4gICQoJy5oZWFkZXJfX2xhbmctbW9iJykudGV4dChzZWxlY3RlZExhbmcpO1xuICAkKGAuaGVhZGVyX19tYXJrZXRwbGFjZS1saW5rc1tkYXRhLWxhbmc9XCIke3NlbGVjdGVkTGFuZy50b0xvd2VyQ2FzZSgpfVwiXWApLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICBwb3B1cENsb3NlKCk7XG59KTtcblxufSk7XG5cbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZG93bmxvYWRQb3B1cFN0YXRlJykgPT09IG51bGwpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZG93bmxvYWRQb3B1cFN0YXRlJywgJ3RydWUnKVxufVxuXG52YXIgZ2FsbGVyeVRodW1ic1N3aXBlciA9IG5ldyBTd2lwZXIoJy5wcm9kdWN0LXBvcHVwX19nYWxsZXJ5LXN3aXBlci10aHVtYnMnLCB7XG4gIC8vIGxvb3A6IHRydWUsXG4gIGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyxcbiAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgc2xpZGVzUGVyVmlldzogNCxcbiAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgc2Nyb2xsYmFyOiB7XG4gICAgZWw6IFwiLnN3aXBlci1zY3JvbGxiYXJcIixcbiAgICBoaWRlOiBmYWxzZSxcbiAgICBkcmFnZ2FibGU6IHRydWUsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgNzY3OiB7XG4gICAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICB9XG4gIH0sXG4gIG9uOiB7XG4gICAgcmVzaXplOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuICB9XG59KTtcbnZhciBnYWxsZXJ5U3dpcGVyID0gbmV3IFN3aXBlcignLnByb2R1Y3QtcG9wdXBfX2dhbGxlcnktc3dpcGVyLWxhcmdlJywge1xuICAvLyBsb29wOiB0cnVlLFxuICBzcGFjZUJldHdlZW46IDEwLFxuICB0aHVtYnM6IHtcbiAgICBzd2lwZXI6IGdhbGxlcnlUaHVtYnNTd2lwZXIsXG4gIH0sXG59KTtcblxuXG4kKCcuc2luZ2xlLXByb2R1Y3RfX2FjY29yZGlvbi1idG4nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAkKHRoaXMpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQodGhpcykubmV4dCgpLnNsaWRlVG9nZ2xlKCk7XG4gIH0pO1xufSk7XG5cbiQoJy5mYXEtYmxvY2tfX2xpc3QtYnRuJykuZWFjaChmdW5jdGlvbigpIHtcbiAgJCh0aGlzKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAkKHRoaXMpLm5leHQoKS5zbGlkZVRvZ2dsZSgpO1xuICB9KTtcbn0pO1xuXG5cbnZhciBwb3B1cENsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICQoJy5wb3B1cC5vcGVuJykuZmluZCgnaW5wdXQ6bm90KFtuYW1lPVwibGFuZy1jaG9vc2VcIl0pJykudmFsKCcnKTtcbiAgICAkKCcucG9wdXAub3BlbicpLmZpbmQoJ3RleHRhcmVhJykudmFsKCcnKTtcbiAgICAkKCcucG9wdXAub3BlbicpLmZpbmQoJy5mb3JtLWZpbGUnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB0ZXh0ID0gJCh0aGlzKS5hdHRyKCdkYXRhLXRleHQnKTtcblxuICAgICAgICAkKHRoaXMpLmZpbmQoJ2RpdiBwJykudGV4dCh0ZXh0KTtcbiAgICB9KTtcbiAgICAkKCcucG9wdXAub3BlbicpLmZpbmQoJy5mb3JtLXN0YXJzIGxhYmVsOmxhc3QtY2hpbGQnKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICQoJy5wb3B1cCAudmFsaWRhdGVfZXJyb3InKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygndmFsaWRhdGVfZXJyb3InKTtcbiAgICB9KTtcbiAgICAkKCdodG1sJykucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAkKCcucG9wdXAub3BlbicpLmFkZENsYXNzKCdmYWRlJyk7XG4gICAgJCgnLnBvcHVwLm9wZW4nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xufTtcblxudmFyIHBvcHVwT3BlbiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgcG9wdXBDbG9zZSgpO1xuICAgIHZhciB0YXJnZXQgPSBlO1xuICAgIHZhciB3aWR0aCA9ICQoJy5wYWdlJykud2lkdGgoKTtcblxuICAgICQoJ2h0bWwnKS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuICAgICQoJ1twb3B1cElEPVwiJyArIHRhcmdldCArICdcIl0nKS5hZGRDbGFzcygnb3BlbicpO1xuICAgICQoJ1twb3B1cElEPVwiJyArIHRhcmdldCArICdcIl0nKS5yZW1vdmVDbGFzcygnZmFkZScpO1xuICAgIGlmKCQoJ1twb3B1cElEPVwiJyArIHRhcmdldCArICdcIl0nKS5oYXNDbGFzcygncHJvZHVjdC1wb3B1cCcpKSB7XG4gICAgICAvLyBjbGVhclRpbWVvdXQoZ2FsbGVyeVRodW1ic1N3aXBlclVwZGF0ZVRpbWVvdXQpO1xuICAgICAgZ2FsbGVyeVRodW1ic1N3aXBlci51cGRhdGUoKTtcbiAgICAgIGlmKCQod2luZG93KS5vdXRlcldpZHRoKCkgPD0gNzY3KSB7XG4gICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGdhbGxlcnlUaHVtYnNTd2lwZXIudXBkYXRlKCk7XG4gICAgICAgIH0sIDEwKTtcbiAgICAgIH1cbiAgICB9XG59O1xuXG5mdW5jdGlvbiBmaXhlZEhlYWRlcigpIHtcbiAgdmFyIGhlaWdodCA9IGpRdWVyeSh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICB2YXIgaGVhZGVySGVpZ2h0ID0gJCgnLmhlYWRlcicpLmlubmVySGVpZ2h0KCk7XG5cdGlmICggaGVpZ2h0KSB7XG4gICAgJCgnYm9keScpLmF0dHIoJ3N0eWxlJywgYHBhZGRpbmctdG9wOiAke2hlYWRlckhlaWdodH1weDtgKTtcbiAgICBqUXVlcnkoJy5oZWFkZXInKS5hZGRDbGFzcygnZml4ZWQnKTtcbiAgfSBlbHNlIHtcbiAgICBqUXVlcnkoJy5oZWFkZXInKS5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAkKCdib2R5JykuYXR0cignc3R5bGUnLCBgcGFkZGluZy10b3A6IDA7YCk7XG4gIH1cbn1cblxuZml4ZWRIZWFkZXIoKTtcbmpRdWVyeSh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigkKSB7XG5cdGZpeGVkSGVhZGVyKCk7XG59KTtcbiQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24oKSB7XG4gIGZpeGVkSGVhZGVyKCk7XG59KTtcblxuJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcbiAgdmFyIHJhdGlvID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgLyAoKCQoZG9jdW1lbnQpLmhlaWdodCgpIC0gJCh3aW5kb3cpLmhlaWdodCgpKSAvIDEwMCk7XG4gICQoJy5oZWFkZXItcHJvZ3Jlc3MnKS53aWR0aChyYXRpbyArIFwiJVwiKTtcbn0pO1xuXG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgaWYgKHNjcm9sbCA+PSAgJChkb2N1bWVudCkuaGVpZ2h0KCkgLyAzKSB7XG4gICAgICAkKCdbdG9Ub3BfSlNdJykuYWRkQ2xhc3MoJ3Zpc2libGUnKTtcbiAgfSBlbHNlIHtcbiAgICAgICQoJ1t0b1RvcF9KU10nKS5yZW1vdmVDbGFzcygndmlzaWJsZScpO1xuICB9O1xuXG4gICQoJ1tvblNjcm9sbERpc3BsYXlfSlNdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICBpZiAoY29tZShlbCkpIHtcbiAgICAgICAgICBlbC5hZGRDbGFzcygndmlzaWJsZScpO1xuICAgICAgfTtcbiAgfSk7XG59KTtcblxuJCgnaW1nJykuZWFjaCggZnVuY3Rpb24oZSkge1xuICAkKHRoaXMpLmFkZENsYXNzKCdsYXp5Jyk7XG59KTtcbmxldCBsYXp5TG9hZEluc3RhbmNlID0gbmV3IExhenlMb2FkKCk7XG5cblxuXG5cblxuXG4iXSwiZmlsZSI6ImluZGV4LmpzIn0=
