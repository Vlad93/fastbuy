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

  if ($('.section-catalog__categories-swiper')[0]) {
    var catalogCategoriesSwiper = new Swiper($('.section-catalog__categories-swiper')[0], {
      spaceBetween: 8,
      slidesPerView: 2.1,
      breakpoints: {
        0: {
          spaceBetween: 8,
          slidesPerView: 2.2
        },
        768: {
          spaceBetween: 20,
          slidesPerView: 5.5
        }
      },
      on: {
        resize: function resize() {
          this.update();
        }
      }
    });
  }

  $('.tabs-slider').each(function () {
    var swiperTabs = new Swiper($(this)[0], {
      direction: 'horizontal',
      slidesPerView: 'auto',
      spaceBetween: 8,
      touchStartForcePreventDefault: true,
      breakpoints: {
        0: {
          spaceBetween: 8
        },
        767: {
          spaceBetween: 20
        }
      }
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
  $('.header__lang-btn').on('click', function (e) {
    $(this).toggleClass('is-active');
    $('.header__lang-dropdown-content').toggleClass('is-active');
  });
  $('body').on('click', function (e) {
    if ($('.header__lang-dropdown-content').hasClass('is-active') && !$(e.target).closest($('.header__lang')).length) {
      console.log($(e.target));
      $('.header__lang-dropdown-content').removeClass('is-active');
      $('.header__lang-btn').removeClass('is-active');
    }
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
    $(".header__lang input[name=\"lang\"][value=\"".concat(savedLanguage, "\"]")).prop('checked', true);
    $('.header__lang-btn').text("".concat(savedLanguage)); // $('.header__lang').val(`${savedLanguage}`).niceSelect('update');
    // Устанавливаем выбранный язык в радиокнопках

    $("input[name=\"lang-choose\"][value=\"".concat(savedLanguage, "\"]")).prop('checked', true);
    $('.header__lang-mob').data('lang', savedLanguage);
    $('.header__lang-mob').text(savedLanguage);
    $('.header__marketplace-links').each(function () {
      $(this).removeClass('selected');
    });
    $(".header__marketplace-links[data-lang=\"".concat(savedLanguage.toLowerCase(), "\"]")).addClass('selected');
    $(".header__marketplace-links[data-lang=\"".concat(savedLanguage, "\"]")).addClass('selected');
    $('.section-where-online__marketplaces-list').each(function () {
      $(this).hide();
    });
    $(".section-where-online__marketplaces-list[data-lang=\"".concat(savedLanguage, "\"]")).fadeIn();
    $(".section-where-online__marketplaces-list[data-lang=\"".concat(savedLanguage.toLowerCase(), "\"]")).fadeIn();
  } else {
    popupOpen('region');
    $('.region-popup__btn').on('click', function () {
      var lang = $('.lang-choose__radio-btn-label input[type="radio"]:checked').val();
      localStorage.setItem('selectedLanguage', lang);
      $(".header__lang input[name=\"lang\"][value=\"".concat(lang, "\"]")).prop('checked', true);
      $('.header__lang-btn').text("".concat(lang)); // $('select.header__lang').val(`${lang}`).change();
      // $('.header__lang').val(`${lang}`).niceSelect('update');

      $("input[name=\"lang-choose\"][value=\"".concat(lang, "\"]")).prop('checked', true);
      $('.header__lang-mob').data('lang', lang);
      $('.header__lang-mob').text(lang);
      $('.header__marketplace-links').each(function () {
        $(this).removeClass('selected');
      });
      $(".header__marketplace-links[data-lang=\"".concat(lang, "\"]")).addClass('selected');
      $(".header__marketplace-links[data-lang=\"".concat(lang.toLowerCase(), "\"]")).addClass('selected');
      $('.section-where-online__marketplaces-list').each(function () {
        $(this).hide();
      });
      $(".section-where-online__marketplaces-list[data-lang=\"".concat(lang, "\"]")).fadeIn();
      $(".section-where-online__marketplaces-list[data-lang=\"".concat(lang.toLowerCase(), "\"]")).fadeIn();
    });

    if ($(window).outerWidth() >= 767) {
      $('html').removeAttr('style');
    }
  } // Сохранение выбранного языка в localStorage при изменении селекта


  $(".header__lang input[name=\"lang\"]").on('change', function () {
    var selectedLang = $(this).val();
    localStorage.setItem('selectedLanguage', selectedLang);
    $('.header__lang-btn').text("".concat(selectedLang));
    $('.header__lang-dropdown-content').removeClass('is-active');
    $('.header__lang-btn').removeClass('is-active');
    $('.header__marketplace-links').each(function () {
      $(this).removeClass('selected');
    });
    $("input[name=\"lang-choose\"][value=\"".concat(selectedLang, "\"]")).prop('checked', true);
    $('.header__lang-mob').data('lang', selectedLang);
    $('.header__lang-mob').text(selectedLang);
    $(".header__marketplace-links[data-lang=\"".concat(selectedLang, "\"]")).addClass('selected');
    $(".header__marketplace-links[data-lang=\"".concat(selectedLang.toLowerCase(), "\"]")).addClass('selected');
    $('.section-where-online__marketplaces-list').each(function () {
      $(this).hide();
    });
    $(".section-where-online__marketplaces-list[data-lang=\"".concat(selectedLang, "\"]")).fadeIn();
    $(".section-where-online__marketplaces-list[data-lang=\"".concat(selectedLang.toLowerCase(), "\"]")).fadeIn();
  }); // Обработчик клика для радиокнопок

  $('.lang-choose__radio-btn-label input[type="radio"]').on('change', function () {
    var selectedLang = $(this).val();
    localStorage.setItem('selectedLanguage', selectedLang); // Сохраняем выбранный язык

    $(".header__lang input[name=\"lang\"][value=\"".concat(selectedLang, "\"]")).prop('checked', true);
    $('.header__lang-btn').text("".concat(selectedLang)); // $('select.header__lang').val(`${selectedLang}`).change();
    // $('.header__lang').val(selectedLang).niceSelect('update'); // Обновляем селектор

    $('.header__marketplace-links').each(function () {
      $(this).removeClass('selected');
    });
    $('.section-where-online__marketplaces-list').each(function () {
      $(this).hide();
    });
    $(".section-where-online__marketplaces-list[data-lang=\"".concat(selectedLang, "\"]")).fadeIn();
    $(".section-where-online__marketplaces-list[data-lang=\"".concat(selectedLang.toLowerCase(), "\"]")).fadeIn();
    $('.header__lang-mob').data('lang', selectedLang);
    $('.header__lang-mob').text(selectedLang);
    $(".header__marketplace-links[data-lang=\"".concat(selectedLang, "\"]")).addClass('selected');
    $(".header__marketplace-links[data-lang=\"".concat(selectedLang.toLowerCase(), "\"]")).addClass('selected');
    popupClose();
  });
  $('.section-where-offline-tab').each(function () {
    $(this).on('click', function () {
      $('.section-where-offline-tab').each(function () {
        $(this).removeClass('active');
      });
      $('.where-offline-tabs__item').each(function () {
        $(this).removeClass('active');
        $(this).hide();
      });
      var $path = $(this).attr('data-path');
      $(this).addClass('active');
      var $curTabContent = $(".where-offline-tabs__item[data-target=".concat($path, "]"));
      $curTabContent.fadeIn();
      $('html, body').animate({
        scrollTop: $curTabContent.offset().top - $('.header').outerHeight() - $(this).outerHeight()
      }, 300);
    });
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
    $(this).next().slideToggle(); // if($(this).parents('.faq-block__list-item').find('.section-sertificates__swiper')) {
    //   let sertificateSwiper = $(this).parents('.faq-block__list-item').find('.section-sertificates__swiper')[0].swiper;
    //   setTimeout(function() {
    //     sertificateSwiper.update();
    //   }, 300);
    // }
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImUiLCJ0IiwibW9kdWxlIiwiZXhwb3J0cyIsImRvY3VtZW50IiwiRXJyb3IiLCJ3aW5kb3ciLCJDIiwiciIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwicyIsInNsaWNlIiwiZyIsImZsYXQiLCJjYWxsIiwiY29uY2F0IiwiYXBwbHkiLCJ1IiwicHVzaCIsImkiLCJpbmRleE9mIiwibiIsIm8iLCJ0b1N0cmluZyIsInYiLCJoYXNPd25Qcm9wZXJ0eSIsImEiLCJsIiwieSIsIm0iLCJub2RlVHlwZSIsIngiLCJFIiwiYyIsInR5cGUiLCJzcmMiLCJub25jZSIsIm5vTW9kdWxlIiwiYiIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0IiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiaGVhZCIsImFwcGVuZENoaWxkIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwidyIsImYiLCJTIiwiZm4iLCJpbml0IiwicCIsImxlbmd0aCIsInByb3RvdHlwZSIsImpxdWVyeSIsImNvbnN0cnVjdG9yIiwidG9BcnJheSIsImdldCIsInB1c2hTdGFjayIsIm1lcmdlIiwicHJldk9iamVjdCIsImVhY2giLCJtYXAiLCJhcmd1bWVudHMiLCJmaXJzdCIsImVxIiwibGFzdCIsImV2ZW4iLCJncmVwIiwib2RkIiwiZW5kIiwic29ydCIsInNwbGljZSIsImV4dGVuZCIsImlzUGxhaW5PYmplY3QiLCJBcnJheSIsImlzQXJyYXkiLCJleHBhbmRvIiwiTWF0aCIsInJhbmRvbSIsInJlcGxhY2UiLCJpc1JlYWR5IiwiZXJyb3IiLCJub29wIiwiaXNFbXB0eU9iamVjdCIsImdsb2JhbEV2YWwiLCJtYWtlQXJyYXkiLCJpbkFycmF5IiwiZ3VpZCIsInN1cHBvcnQiLCJTeW1ib2wiLCJpdGVyYXRvciIsInNwbGl0IiwidG9Mb3dlckNhc2UiLCJkIiwiaCIsIlQiLCJEYXRlIiwiayIsInVlIiwiQSIsIk4iLCJEIiwiaiIsInEiLCJwb3AiLCJMIiwiSCIsIk8iLCJQIiwiUiIsIk0iLCJJIiwiVyIsIkYiLCJCIiwiUmVnRXhwIiwiJCIsIl8iLCJ6IiwiVSIsIlgiLCJWIiwiRyIsIklEIiwiQ0xBU1MiLCJUQUciLCJBVFRSIiwiUFNFVURPIiwiQ0hJTEQiLCJib29sIiwibmVlZHNDb250ZXh0IiwiWSIsIlEiLCJKIiwiSyIsIloiLCJlZSIsInRlIiwibmUiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJyZSIsImllIiwiY2hhckNvZGVBdCIsIm9lIiwiYWUiLCJiZSIsImRpc2FibGVkIiwibm9kZU5hbWUiLCJkaXIiLCJuZXh0IiwiY2hpbGROb2RlcyIsInNlIiwib3duZXJEb2N1bWVudCIsImV4ZWMiLCJnZXRFbGVtZW50QnlJZCIsImlkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwicXNhIiwidGVzdCIsInllIiwic2NvcGUiLCJ4ZSIsImpvaW4iLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVtb3ZlQXR0cmlidXRlIiwiY2FjaGVMZW5ndGgiLCJzaGlmdCIsImxlIiwiY2UiLCJmZSIsImF0dHJIYW5kbGUiLCJwZSIsInNvdXJjZUluZGV4IiwibmV4dFNpYmxpbmciLCJkZSIsImhlIiwiZ2UiLCJpc0Rpc2FibGVkIiwidmUiLCJpc1hNTCIsIm5hbWVzcGFjZVVSSSIsImRvY3VtZW50RWxlbWVudCIsInNldERvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJ0b3AiLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJhdHRyaWJ1dGVzIiwiY2xhc3NOYW1lIiwiY3JlYXRlQ29tbWVudCIsImdldEJ5SWQiLCJnZXRFbGVtZW50c0J5TmFtZSIsImZpbHRlciIsImZpbmQiLCJnZXRBdHRyaWJ1dGVOb2RlIiwidmFsdWUiLCJpbm5lckhUTUwiLCJtYXRjaGVzU2VsZWN0b3IiLCJtYXRjaGVzIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwibW96TWF0Y2hlc1NlbGVjdG9yIiwib01hdGNoZXNTZWxlY3RvciIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwiZGlzY29ubmVjdGVkTWF0Y2giLCJjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiIsImNvbnRhaW5zIiwic29ydERldGFjaGVkIiwidW5zaGlmdCIsImF0dHIiLCJzcGVjaWZpZWQiLCJlc2NhcGUiLCJ1bmlxdWVTb3J0IiwiZGV0ZWN0RHVwbGljYXRlcyIsInNvcnRTdGFibGUiLCJnZXRUZXh0IiwidGV4dENvbnRlbnQiLCJmaXJzdENoaWxkIiwibm9kZVZhbHVlIiwic2VsZWN0b3JzIiwiY3JlYXRlUHNldWRvIiwibWF0Y2giLCJyZWxhdGl2ZSIsInByZUZpbHRlciIsImxhc3RDaGlsZCIsInVuaXF1ZUlEIiwicHNldWRvcyIsInNldEZpbHRlcnMiLCJub3QiLCJoYXMiLCJsYW5nIiwidGFyZ2V0IiwibG9jYXRpb24iLCJoYXNoIiwicm9vdCIsImZvY3VzIiwiYWN0aXZlRWxlbWVudCIsImhhc0ZvY3VzIiwiaHJlZiIsInRhYkluZGV4IiwiZW5hYmxlZCIsImNoZWNrZWQiLCJzZWxlY3RlZCIsInNlbGVjdGVkSW5kZXgiLCJlbXB0eSIsInBhcmVudCIsImhlYWRlciIsImlucHV0IiwiYnV0dG9uIiwibHQiLCJndCIsIm50aCIsInJhZGlvIiwiY2hlY2tib3giLCJmaWxlIiwicGFzc3dvcmQiLCJpbWFnZSIsInN1Ym1pdCIsInJlc2V0IiwibWUiLCJ3ZSIsIlRlIiwiQ2UiLCJFZSIsImZpbHRlcnMiLCJ0b2tlbml6ZSIsImNvbXBpbGUiLCJzZWxlY3RvciIsInNlbGVjdCIsImRlZmF1bHRWYWx1ZSIsImV4cHIiLCJ1bmlxdWUiLCJpc1hNTERvYyIsImVzY2FwZVNlbGVjdG9yIiwiaXMiLCJwYXJzZUhUTUwiLCJyZWFkeSIsImNoaWxkcmVuIiwiY29udGVudHMiLCJwcmV2IiwiY2xvc2VzdCIsImluZGV4IiwicHJldkFsbCIsImFkZCIsImFkZEJhY2siLCJwYXJlbnRzIiwicGFyZW50c1VudGlsIiwibmV4dEFsbCIsIm5leHRVbnRpbCIsInByZXZVbnRpbCIsInNpYmxpbmdzIiwiY29udGVudERvY3VtZW50IiwiY29udGVudCIsInJldmVyc2UiLCJwcm9taXNlIiwiZG9uZSIsImZhaWwiLCJ0aGVuIiwiQ2FsbGJhY2tzIiwib25jZSIsInN0b3BPbkZhbHNlIiwibWVtb3J5IiwicmVtb3ZlIiwiZGlzYWJsZSIsImxvY2siLCJsb2NrZWQiLCJmaXJlV2l0aCIsImZpcmUiLCJmaXJlZCIsIkRlZmVycmVkIiwic3RhdGUiLCJhbHdheXMiLCJwaXBlIiwicHJvZ3Jlc3MiLCJub3RpZnkiLCJyZXNvbHZlIiwicmVqZWN0IiwiVHlwZUVycm9yIiwibm90aWZ5V2l0aCIsInJlc29sdmVXaXRoIiwiZXhjZXB0aW9uSG9vayIsInN0YWNrVHJhY2UiLCJyZWplY3RXaXRoIiwiZ2V0U3RhY2tIb29rIiwic2V0VGltZW91dCIsIndoZW4iLCJjb25zb2xlIiwid2FybiIsIm5hbWUiLCJtZXNzYWdlIiwic3RhY2siLCJyZWFkeUV4Y2VwdGlvbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZWFkeVdhaXQiLCJyZWFkeVN0YXRlIiwiZG9TY3JvbGwiLCJ0b1VwcGVyQ2FzZSIsInVpZCIsImNhY2hlIiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJzZXQiLCJhY2Nlc3MiLCJoYXNEYXRhIiwiSlNPTiIsInBhcnNlIiwiZGF0YSIsInJlbW92ZURhdGEiLCJfZGF0YSIsIl9yZW1vdmVEYXRhIiwicXVldWUiLCJkZXF1ZXVlIiwiX3F1ZXVlSG9va3MiLCJzdG9wIiwiY2xlYXJRdWV1ZSIsInNvdXJjZSIsImNvbXBvc2VkIiwiZ2V0Um9vdE5vZGUiLCJzdHlsZSIsImRpc3BsYXkiLCJjc3MiLCJjdXIiLCJjc3NOdW1iZXIiLCJ1bml0Iiwic3RhcnQiLCJib2R5Iiwic2hvdyIsImhpZGUiLCJ0b2dnbGUiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiY2hlY2tDbG9uZSIsImNsb25lTm9kZSIsIm5vQ2xvbmVDaGVja2VkIiwib3B0aW9uIiwidGhlYWQiLCJjb2wiLCJ0ciIsInRkIiwiX2RlZmF1bHQiLCJ0Ym9keSIsInRmb290IiwiY29sZ3JvdXAiLCJjYXB0aW9uIiwidGgiLCJvcHRncm91cCIsImh0bWxQcmVmaWx0ZXIiLCJjcmVhdGVUZXh0Tm9kZSIsIlNlIiwia2UiLCJvZmYiLCJldmVudCIsIkFlIiwibmFtZXNwYWNlIiwiaGFuZGxlciIsImlzVHJpZ2dlciIsInNwZWNpYWwiLCJkZWxlZ2F0ZVR5cGUiLCJzdG9wUHJvcGFnYXRpb24iLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsInRyaWdnZXIiLCJFdmVudCIsImdsb2JhbCIsImV2ZW50cyIsImNyZWF0ZSIsImhhbmRsZSIsInRyaWdnZXJlZCIsImRpc3BhdGNoIiwiYmluZFR5cGUiLCJvcmlnVHlwZSIsImRlbGVnYXRlQ291bnQiLCJzZXR1cCIsInRlYXJkb3duIiwicmVtb3ZlRXZlbnQiLCJmaXgiLCJkZWxlZ2F0ZVRhcmdldCIsInByZURpc3BhdGNoIiwiaGFuZGxlcnMiLCJpc1Byb3BhZ2F0aW9uU3RvcHBlZCIsImN1cnJlbnRUYXJnZXQiLCJlbGVtIiwiaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQiLCJybmFtZXNwYWNlIiwiaGFuZGxlT2JqIiwicmVzdWx0IiwicG9zdERpc3BhdGNoIiwiYWRkUHJvcCIsImVudW1lcmFibGUiLCJvcmlnaW5hbEV2ZW50Iiwid3JpdGFibGUiLCJsb2FkIiwibm9CdWJibGUiLCJjbGljayIsImJlZm9yZXVubG9hZCIsInJldHVyblZhbHVlIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiZGVmYXVsdFByZXZlbnRlZCIsInJlbGF0ZWRUYXJnZXQiLCJ0aW1lU3RhbXAiLCJub3ciLCJpc1NpbXVsYXRlZCIsImFsdEtleSIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiY2hhbmdlZFRvdWNoZXMiLCJjdHJsS2V5IiwiZGV0YWlsIiwiZXZlbnRQaGFzZSIsIm1ldGFLZXkiLCJwYWdlWCIsInBhZ2VZIiwic2hpZnRLZXkiLCJ2aWV3IiwiY29kZSIsImNoYXJDb2RlIiwia2V5Iiwia2V5Q29kZSIsImJ1dHRvbnMiLCJjbGllbnRYIiwiY2xpZW50WSIsIm9mZnNldFgiLCJvZmZzZXRZIiwicG9pbnRlcklkIiwicG9pbnRlclR5cGUiLCJzY3JlZW5YIiwic2NyZWVuWSIsInRhcmdldFRvdWNoZXMiLCJ0b0VsZW1lbnQiLCJ0b3VjaGVzIiwid2hpY2giLCJibHVyIiwibW91c2VlbnRlciIsIm1vdXNlbGVhdmUiLCJwb2ludGVyZW50ZXIiLCJwb2ludGVybGVhdmUiLCJvbiIsIm9uZSIsIk5lIiwiRGUiLCJqZSIsInFlIiwiTGUiLCJIZSIsIk9lIiwiUGUiLCJodG1sIiwiY2xvbmUiLCJfZXZhbFVybCIsIlJlIiwiY2xlYW5EYXRhIiwiZGV0YWNoIiwiYXBwZW5kIiwicHJlcGVuZCIsImluc2VydEJlZm9yZSIsImJlZm9yZSIsImFmdGVyIiwicmVwbGFjZVdpdGgiLCJyZXBsYWNlQ2hpbGQiLCJhcHBlbmRUbyIsInByZXBlbmRUbyIsImluc2VydEFmdGVyIiwicmVwbGFjZUFsbCIsIk1lIiwiSWUiLCJvcGVuZXIiLCJnZXRDb21wdXRlZFN0eWxlIiwiV2UiLCJGZSIsIkJlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInBpeGVsQm94U3R5bGVzIiwid2lkdGgiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwiJGUiLCJjc3NUZXh0IiwibWFyZ2luTGVmdCIsInJpZ2h0IiwicG9zaXRpb24iLCJvZmZzZXRXaWR0aCIsInJvdW5kIiwicGFyc2VGbG9hdCIsImJhY2tncm91bmRDbGlwIiwiY2xlYXJDbG9uZVN0eWxlIiwiYm94U2l6aW5nUmVsaWFibGUiLCJwaXhlbFBvc2l0aW9uIiwicmVsaWFibGVNYXJnaW5MZWZ0Iiwic2Nyb2xsYm94U2l6ZSIsInJlbGlhYmxlVHJEaW1lbnNpb25zIiwiaGVpZ2h0IiwicGFyc2VJbnQiLCJfZSIsInplIiwiVWUiLCJYZSIsImNzc1Byb3BzIiwiVmUiLCJHZSIsIlllIiwidmlzaWJpbGl0eSIsIlFlIiwibGV0dGVyU3BhY2luZyIsImZvbnRXZWlnaHQiLCJKZSIsIm1heCIsIktlIiwiY2VpbCIsIlplIiwiZ2V0Q2xpZW50UmVjdHMiLCJldCIsImNzc0hvb2tzIiwib3BhY2l0eSIsImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50IiwiY29sdW1uQ291bnQiLCJmaWxsT3BhY2l0eSIsImZsZXhHcm93IiwiZmxleFNocmluayIsImdyaWRBcmVhIiwiZ3JpZENvbHVtbiIsImdyaWRDb2x1bW5FbmQiLCJncmlkQ29sdW1uU3RhcnQiLCJncmlkUm93IiwiZ3JpZFJvd0VuZCIsImdyaWRSb3dTdGFydCIsImxpbmVIZWlnaHQiLCJvcmRlciIsIm9ycGhhbnMiLCJ3aWRvd3MiLCJ6SW5kZXgiLCJ6b29tIiwic2V0UHJvcGVydHkiLCJpc0Zpbml0ZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm9yZGVyIiwiZXhwYW5kIiwiVHdlZW4iLCJwcm9wIiwiZWFzaW5nIiwib3B0aW9ucyIsInByb3BIb29rcyIsInJ1biIsImR1cmF0aW9uIiwicG9zIiwic3RlcCIsImZ4Iiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImxpbmVhciIsInN3aW5nIiwiY29zIiwiUEkiLCJ0dCIsIm50IiwicnQiLCJpdCIsIm90IiwiYXQiLCJzdCIsImhpZGRlbiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImludGVydmFsIiwidGljayIsInV0IiwiY3QiLCJmdCIsInR3ZWVuZXJzIiwicHJlZmlsdGVycyIsInN0YXJ0VGltZSIsInR3ZWVucyIsInByb3BzIiwib3B0cyIsInNwZWNpYWxFYXNpbmciLCJvcmlnaW5hbFByb3BlcnRpZXMiLCJvcmlnaW5hbE9wdGlvbnMiLCJjcmVhdGVUd2VlbiIsImJpbmQiLCJjb21wbGV0ZSIsInRpbWVyIiwiYW5pbSIsIkFuaW1hdGlvbiIsInR3ZWVuZXIiLCJ1bnF1ZXVlZCIsIm92ZXJmbG93Iiwib3ZlcmZsb3dYIiwib3ZlcmZsb3dZIiwicHJlZmlsdGVyIiwic3BlZWQiLCJzcGVlZHMiLCJvbGQiLCJmYWRlVG8iLCJhbmltYXRlIiwiZmluaXNoIiwidGltZXJzIiwic2xpZGVEb3duIiwic2xpZGVVcCIsInNsaWRlVG9nZ2xlIiwiZmFkZUluIiwiZmFkZU91dCIsImZhZGVUb2dnbGUiLCJzbG93IiwiZmFzdCIsImRlbGF5IiwiY2xlYXJUaW1lb3V0IiwiY2hlY2tPbiIsIm9wdFNlbGVjdGVkIiwicmFkaW9WYWx1ZSIsInB0IiwiZHQiLCJyZW1vdmVBdHRyIiwiYXR0ckhvb2tzIiwiaHQiLCJ2dCIsInl0IiwibXQiLCJyZW1vdmVQcm9wIiwicHJvcEZpeCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ0b2dnbGVDbGFzcyIsImhhc0NsYXNzIiwieHQiLCJ2YWwiLCJ2YWxIb29rcyIsImZvY3VzaW4iLCJidCIsInd0IiwicGFyZW50V2luZG93Iiwic2ltdWxhdGUiLCJ0cmlnZ2VySGFuZGxlciIsIlR0IiwiQ3QiLCJFdCIsInBhcnNlWE1MIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwiU3QiLCJrdCIsIkF0IiwiTnQiLCJEdCIsInBhcmFtIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2VyaWFsaXplIiwic2VyaWFsaXplQXJyYXkiLCJqdCIsInF0IiwiTHQiLCJIdCIsIk90IiwiUHQiLCJSdCIsIk10IiwiSXQiLCJXdCIsIkZ0IiwiQnQiLCJkYXRhVHlwZXMiLCIkdCIsImFqYXhTZXR0aW5ncyIsImZsYXRPcHRpb25zIiwiYWN0aXZlIiwibGFzdE1vZGlmaWVkIiwiZXRhZyIsInVybCIsImlzTG9jYWwiLCJwcm90b2NvbCIsInByb2Nlc3NEYXRhIiwiYXN5bmMiLCJjb250ZW50VHlwZSIsImFjY2VwdHMiLCJ4bWwiLCJqc29uIiwicmVzcG9uc2VGaWVsZHMiLCJjb252ZXJ0ZXJzIiwiY29udGV4dCIsImFqYXhTZXR1cCIsImFqYXhQcmVmaWx0ZXIiLCJhamF4VHJhbnNwb3J0IiwiYWpheCIsInN0YXR1c0NvZGUiLCJnZXRSZXNwb25zZUhlYWRlciIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsInNldFJlcXVlc3RIZWFkZXIiLCJvdmVycmlkZU1pbWVUeXBlIiwibWltZVR5cGUiLCJzdGF0dXMiLCJhYm9ydCIsIm1ldGhvZCIsImRhdGFUeXBlIiwiY3Jvc3NEb21haW4iLCJob3N0IiwidHJhZGl0aW9uYWwiLCJoYXNDb250ZW50IiwiaWZNb2RpZmllZCIsImhlYWRlcnMiLCJiZWZvcmVTZW5kIiwic3VjY2VzcyIsInRpbWVvdXQiLCJzZW5kIiwiZGF0YUZpbHRlciIsInN0YXR1c1RleHQiLCJnZXRKU09OIiwiZ2V0U2NyaXB0Iiwid3JhcEFsbCIsImZpcnN0RWxlbWVudENoaWxkIiwid3JhcElubmVyIiwid3JhcCIsInVud3JhcCIsInZpc2libGUiLCJvZmZzZXRIZWlnaHQiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIl90IiwienQiLCJjb3JzIiwib3BlbiIsInVzZXJuYW1lIiwieGhyRmllbGRzIiwib25sb2FkIiwib25lcnJvciIsIm9uYWJvcnQiLCJvbnRpbWVvdXQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZXNwb25zZVR5cGUiLCJyZXNwb25zZVRleHQiLCJiaW5hcnkiLCJyZXNwb25zZSIsInNjcmlwdCIsInNjcmlwdEF0dHJzIiwiY2hhcnNldCIsInNjcmlwdENoYXJzZXQiLCJVdCIsIlh0IiwiVnQiLCJqc29ucCIsImpzb25wQ2FsbGJhY2siLCJjcmVhdGVIVE1MRG9jdW1lbnQiLCJpbXBsZW1lbnRhdGlvbiIsImFuaW1hdGVkIiwib2Zmc2V0Iiwic2V0T2Zmc2V0IiwidXNpbmciLCJwYWdlWU9mZnNldCIsInBhZ2VYT2Zmc2V0Iiwib2Zmc2V0UGFyZW50Iiwic2Nyb2xsVG8iLCJIZWlnaHQiLCJXaWR0aCIsInVuYmluZCIsImRlbGVnYXRlIiwidW5kZWxlZ2F0ZSIsImhvdmVyIiwiR3QiLCJwcm94eSIsImhvbGRSZWFkeSIsInBhcnNlSlNPTiIsImlzRnVuY3Rpb24iLCJpc1dpbmRvdyIsImNhbWVsQ2FzZSIsImlzTnVtZXJpYyIsImlzTmFOIiwidHJpbSIsImRlZmluZSIsImFtZCIsIll0IiwialF1ZXJ5IiwiUXQiLCJub0NvbmZsaWN0IiwiYXNzaWduIiwidGhyZXNob2xkIiwicmVxdWVzdEZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib1JlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZWxlbWVudCIsIkN1c3RvbUV2ZW50IiwicGFyYW1zIiwidW5kZWZpbmVkIiwiZXZ0IiwiY3JlYXRlRXZlbnQiLCJpbml0Q3VzdG9tRXZlbnQiLCJpZ25vcmVUYWdzIiwidGV4dGFyZWEiLCJtb3VzZWV2ZW50cyIsIm1vdmUiLCJjYW5jZWwiLCJ0b3VjaGV2ZW50cyIsInJzcGFjZXMiLCJldmVudE9wdGlvbnMiLCJldmVudHNTeW1ib2wiLCJnZXRFdmVudHMiLCJub2RlIiwidHlwZXMiLCJwcm9wZXJ0aWVzIiwiZGlzcGF0Y2hFdmVudCIsIlRpbWVyIiwiY2FsbGJhY2siLCJydW5uaW5nIiwidGltZSIsImtpY2siLCJjYiIsImlzSWdub3JlVGFnIiwidGFnTmFtZSIsImlzUHJpbWFyeUJ1dHRvbiIsImlkZW50aWZpZWRUb3VjaCIsInRvdWNoTGlzdCIsImlkZW50aWZpZXIiLCJjaGFuZ2VkVG91Y2giLCJ0b3VjaCIsIm1vdXNlZG93biIsIm1vdXNlbW92ZSIsIm1vdXNlZW5kIiwiY2hlY2tUaHJlc2hvbGQiLCJyZW1vdmVNb3VzZSIsInRvdWNoc3RhcnQiLCJ0b3VjaG1vdmUiLCJ0b3VjaGVuZCIsInJlbW92ZVRvdWNoIiwiZGlzdFgiLCJkaXN0WSIsInRyaWdnZXJTdGFydCIsInRlbXBsYXRlIiwic3RhcnRYIiwic3RhcnRZIiwiZGVsdGFYIiwiZGVsdGFZIiwidmVsb2NpdHlYIiwidmVsb2NpdHlZIiwiZmluZ2VyIiwiZW5hYmxlTW92ZSIsIm1vdmVFbmFibGVkIiwiYWN0aXZlTW91c2Vtb3ZlIiwiYWN0aXZlTW91c2VlbmQiLCJyZW1vdmVBY3RpdmVNb3VzZSIsImVuZEV2ZW50IiwiYWN0aXZlVG91Y2htb3ZlIiwiYWN0aXZlVG91Y2hlbmQiLCJyZW1vdmVBY3RpdmVUb3VjaCIsInVwZGF0ZUV2ZW50IiwibW92ZXN0YXJ0IiwidXBkYXRlIiwiZW5hYmxlTW92ZTEiLCJlbmFibGVNb3ZlMiIsImVuYWJsZU1vdmUzIiwicHJvcGVydHkiLCJtb3ZlZW5kIiwibmljZVNlbGVjdCIsIiRzZWxlY3QiLCIkZHJvcGRvd24iLCJjcmVhdGVfbmljZV9zZWxlY3QiLCIkb3B0aW9ucyIsIiRzZWxlY3RlZCIsIiRvcHRpb24iLCIkZm9jdXNlZF9vcHRpb24iLCIkbmV4dCIsIiRwcmV2IiwicG9pbnRlckV2ZW50cyIsInR3ZW50eXR3ZW50eSIsImRlZmF1bHRfb2Zmc2V0X3BjdCIsIm9yaWVudGF0aW9uIiwiYmVmb3JlX2xhYmVsIiwiYWZ0ZXJfbGFiZWwiLCJub19vdmVybGF5IiwibW92ZV9zbGlkZXJfb25faG92ZXIiLCJtb3ZlX3dpdGhfaGFuZGxlX29ubHkiLCJjbGlja190b19tb3ZlIiwic2xpZGVyUGN0IiwiY29udGFpbmVyIiwic2xpZGVyT3JpZW50YXRpb24iLCJiZWZvcmVEaXJlY3Rpb24iLCJhZnRlckRpcmVjdGlvbiIsIm92ZXJsYXkiLCJiZWZvcmVJbWciLCJhZnRlckltZyIsInNsaWRlciIsImNhbGNPZmZzZXQiLCJkaW1lbnNpb25QY3QiLCJjdyIsImNoIiwiYWRqdXN0Q29udGFpbmVyIiwiYWRqdXN0U2xpZGVyIiwicGN0IiwibWluTWF4TnVtYmVyIiwibnVtIiwibWluIiwiZ2V0U2xpZGVyUGVyY2VudGFnZSIsInBvc2l0aW9uWCIsInBvc2l0aW9uWSIsInNsaWRlclBlcmNlbnRhZ2UiLCJpbWdIZWlnaHQiLCJpbWdXaWR0aCIsIm9uTW92ZVN0YXJ0Iiwib25Nb3ZlIiwib25Nb3ZlRW5kIiwibW92ZVRhcmdldCIsInJlcXVpcmUiLCJ2YWxpZGF0ZSIsImRlYnVnIiwidmFsaWRhdG9yIiwic2V0dGluZ3MiLCJvbnN1Ym1pdCIsInN1Ym1pdEJ1dHRvbiIsImNhbmNlbFN1Ym1pdCIsInN1Ym1pdEhhbmRsZXIiLCJmb3JtU3VibWl0dGVkIiwiY3VycmVudEZvcm0iLCJmb3JtIiwicGVuZGluZ1JlcXVlc3QiLCJmb2N1c0ludmFsaWQiLCJ2YWxpZCIsImVycm9yTGlzdCIsInJ1bGVzIiwic3RhdGljUnVsZXMiLCJub3JtYWxpemVSdWxlIiwibWVzc2FnZXMiLCJub3JtYWxpemVSdWxlcyIsImNsYXNzUnVsZXMiLCJhdHRyaWJ1dGVSdWxlcyIsImRhdGFSdWxlcyIsInJlcXVpcmVkIiwicmVtb3RlIiwiYmxhbmsiLCJmaWxsZWQiLCJ1bmNoZWNrZWQiLCJkZWZhdWx0cyIsImZvcm1hdCIsImdyb3VwcyIsImVycm9yQ2xhc3MiLCJwZW5kaW5nQ2xhc3MiLCJ2YWxpZENsYXNzIiwiZXJyb3JFbGVtZW50IiwiZm9jdXNDbGVhbnVwIiwiZXJyb3JDb250YWluZXIiLCJlcnJvckxhYmVsQ29udGFpbmVyIiwiaWdub3JlIiwiaWdub3JlVGl0bGUiLCJvbmZvY3VzaW4iLCJsYXN0QWN0aXZlIiwidW5oaWdobGlnaHQiLCJoaWRlVGhlc2UiLCJlcnJvcnNGb3IiLCJvbmZvY3Vzb3V0IiwiY2hlY2thYmxlIiwic3VibWl0dGVkIiwib3B0aW9uYWwiLCJvbmtleXVwIiwiZWxlbWVudFZhbHVlIiwiaW52YWxpZCIsIm9uY2xpY2siLCJoaWdobGlnaHQiLCJmaW5kQnlOYW1lIiwic2V0RGVmYXVsdHMiLCJlbWFpbCIsImRhdGUiLCJkYXRlSVNPIiwibnVtYmVyIiwiZGlnaXRzIiwiZXF1YWxUbyIsIm1heGxlbmd0aCIsIm1pbmxlbmd0aCIsInJhbmdlbGVuZ3RoIiwicmFuZ2UiLCJhdXRvQ3JlYXRlUmFuZ2VzIiwibGFiZWxDb250YWluZXIiLCJlcnJvckNvbnRleHQiLCJjb250YWluZXJzIiwidmFsdWVDYWNoZSIsInBlbmRpbmciLCJpbnZhbGlkSGFuZGxlciIsImNoZWNrRm9ybSIsImVycm9yTWFwIiwic2hvd0Vycm9ycyIsInByZXBhcmVGb3JtIiwiY3VycmVudEVsZW1lbnRzIiwiZWxlbWVudHMiLCJjaGVjayIsImNsZWFuIiwidmFsaWRhdGlvblRhcmdldEZvciIsInByZXBhcmVFbGVtZW50IiwibnVtYmVyT2ZJbnZhbGlkcyIsInRvSGlkZSIsInN1Y2Nlc3NMaXN0IiwiZGVmYXVsdFNob3dFcnJvcnMiLCJyZXNldEZvcm0iLCJoaWRlRXJyb3JzIiwicmVzZXRFbGVtZW50cyIsIm9iamVjdExlbmd0aCIsImFkZFdyYXBwZXIiLCJzaXplIiwiZmluZExhc3RBY3RpdmUiLCJlcnJvcnMiLCJyZXNldEludGVybmFscyIsInRvU2hvdyIsInZhbGlkaXR5IiwiYmFkSW5wdXQiLCJzdWJzdHIiLCJsYXN0SW5kZXhPZiIsIm5vcm1hbGl6ZXIiLCJwYXJhbWV0ZXJzIiwibWV0aG9kcyIsImZvcm1hdEFuZEFkZCIsImxvZyIsImN1c3RvbURhdGFNZXNzYWdlIiwiY2hhckF0Iiwic3Vic3RyaW5nIiwiY3VzdG9tTWVzc2FnZSIsImZpbmREZWZpbmVkIiwiZGVmYXVsdE1lc3NhZ2UiLCJ0aXRsZSIsIndyYXBwZXIiLCJzaG93TGFiZWwiLCJ2YWxpZEVsZW1lbnRzIiwiaW52YWxpZEVsZW1lbnRzIiwiaWRPck5hbWUiLCJlcnJvclBsYWNlbWVudCIsImVzY2FwZUNzc01ldGEiLCJnZXRMZW5ndGgiLCJkZXBlbmQiLCJkZXBlbmRUeXBlcyIsInN0cmluZyIsInN0YXJ0UmVxdWVzdCIsInN0b3BSZXF1ZXN0IiwicHJldmlvdXNWYWx1ZSIsImRlc3Ryb3kiLCJjbGFzc1J1bGVTZXR0aW5ncyIsImNyZWRpdGNhcmQiLCJhZGRDbGFzc1J1bGVzIiwibm9ybWFsaXplQXR0cmlidXRlUnVsZSIsIk51bWJlciIsImRlcGVuZHMiLCJhZGRNZXRob2QiLCJwb3ciLCJvcmlnaW5hbE1lc3NhZ2UiLCJtb2RlIiwicG9ydCIsIlN3aXBlciIsImRpcmVjdGlvbiIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJsb29wIiwiZmFkZUVmZmVjdCIsImNyb3NzRmFkZSIsImF1dG9wbGF5IiwiZGlzYWJsZU9uSW50ZXJhY3Rpb24iLCJwYWdpbmF0aW9uIiwiZWwiLCJjbGlja2FibGUiLCJuYXZpZ2F0aW9uUHJldiIsIm5hdmlnYXRpb25OZXh0Iiwic3dpcGVyIiwic2Nyb2xsYmFyIiwiZHJhZ2dhYmxlIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImJyZWFrcG9pbnRzIiwiYnVsbGV0cyIsImZyZWVNb2RlIiwic3dpcGVyTWFycXVlIiwiYWxsb3dUb3VjaE1vdmUiLCJkb29yc1N3aXBlckluaXQiLCJpc1JldmVyc2UiLCJpbml0aWFsU2xpZGUiLCJyZXZlcnNlRGlyZWN0aW9uIiwiZG9vcnNTd2lwZXJFbDEiLCJkb29yc1N3aXBlckVsMiIsImRvb3JzU3dpcGVyRWwzIiwiZG9vcnNTd2lwZXJFbDQiLCJnYWxsYXJ5X19zd2lwZXIiLCJ3YXRjaFNsaWRlc1Byb2dyZXNzIiwiZ2FsbGVyeVRodW1ic1N3aXBlciIsInJlc2l6ZSIsImdhbGxlcnlTd2lwZXIiLCJlZmZlY3QiLCJ0aHVtYnMiLCJjYXRhbG9nQ2F0ZWdvcmllc1N3aXBlciIsInN3aXBlclRhYnMiLCJ0b3VjaFN0YXJ0Rm9yY2VQcmV2ZW50RGVmYXVsdCIsIiR0aGlzIiwiJGZvcm0iLCIkaW5wdXQiLCIkYnRuIiwiJHBhcmVudCIsImlubmVyV2lkdGgiLCJoZWFkZXJIZWlnaHQiLCJwYXR0ZXJuIiwicGhvbmUiLCJtZW51Q2xvc2UiLCJtZW51T3BlbiIsInNsaWRlVG9nZ2xlU2VjdGlvbiIsIm91dGVyV2lkdGgiLCJyaWdodERyb3Bkb3duIiwiJHN1Ym1lbnUiLCIkb2Zmc2V0VG9MZWZ0Iiwid2luZG93V2lkdGgiLCIkaXNPcGVuIiwiY2F0YWxvZ01lbnVPcGVuIiwiY2F0YWxvZ01lbnVDbG9zZSIsInBvcHVwQ2xvc2UiLCIkZWxlbSIsInBvcHVwT3BlbiIsIiRhZ3JlZW1lbnRDb250cm9sIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJzYXZlZExhbmd1YWdlIiwic2VsZWN0ZWRMYW5nIiwiJHBhdGgiLCIkY3VyVGFiQ29udGVudCIsIm91dGVySGVpZ2h0IiwiZml4ZWRIZWFkZXIiLCJpbm5lckhlaWdodCIsInNjcm9sbCIsInJhdGlvIiwiY29tZSIsImxhenlMb2FkSW5zdGFuY2UiLCJMYXp5TG9hZCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0EsQ0FBQyxVQUFTQSxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDOztBQUFhLHNCQUFpQkMsTUFBakIseUNBQWlCQSxNQUFqQixNQUF5QixvQkFBaUJBLE1BQU0sQ0FBQ0MsT0FBeEIsQ0FBekIsR0FBeURELE1BQU0sQ0FBQ0MsT0FBUCxHQUFlSCxDQUFDLENBQUNJLFFBQUYsR0FBV0gsQ0FBQyxDQUFDRCxDQUFELEVBQUcsQ0FBQyxDQUFKLENBQVosR0FBbUIsVUFBU0EsQ0FBVCxFQUFXO0FBQUMsUUFBRyxDQUFDQSxDQUFDLENBQUNJLFFBQU4sRUFBZSxNQUFNLElBQUlDLEtBQUosQ0FBVSwwQ0FBVixDQUFOO0FBQTRELFdBQU9KLENBQUMsQ0FBQ0QsQ0FBRCxDQUFSO0FBQVksR0FBOUwsR0FBK0xDLENBQUMsQ0FBQ0QsQ0FBRCxDQUFoTTtBQUFvTSxDQUEvTixDQUFnTyxlQUFhLE9BQU9NLE1BQXBCLEdBQTJCQSxNQUEzQixTQUFoTyxFQUF1USxVQUFTQyxDQUFULEVBQVdQLENBQVgsRUFBYTtBQUFDOztBQUFhLE1BQUlDLENBQUMsR0FBQyxFQUFOO0FBQUEsTUFBU08sQ0FBQyxHQUFDQyxNQUFNLENBQUNDLGNBQWxCO0FBQUEsTUFBaUNDLENBQUMsR0FBQ1YsQ0FBQyxDQUFDVyxLQUFyQztBQUFBLE1BQTJDQyxDQUFDLEdBQUNaLENBQUMsQ0FBQ2EsSUFBRixHQUFPLFVBQVNkLENBQVQsRUFBVztBQUFDLFdBQU9DLENBQUMsQ0FBQ2EsSUFBRixDQUFPQyxJQUFQLENBQVlmLENBQVosQ0FBUDtBQUFzQixHQUF6QyxHQUEwQyxVQUFTQSxDQUFULEVBQVc7QUFBQyxXQUFPQyxDQUFDLENBQUNlLE1BQUYsQ0FBU0MsS0FBVCxDQUFlLEVBQWYsRUFBa0JqQixDQUFsQixDQUFQO0FB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RCxDQUFELENBQVUwa0IsU0FBVixFQUFiOztBQUNBLE1BQUl3akIsTUFBTSxJQUFLamhDLENBQUMsQ0FBQ25ILFFBQUQsQ0FBRCxDQUFZaWhCLE1BQVosS0FBdUIsQ0FBdEMsRUFBeUM7QUFDckM5WixJQUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCZ2lCLFFBQWhCLENBQXlCLFNBQXpCO0FBQ0gsR0FGRCxNQUVPO0FBQ0hoaUIsSUFBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQmlpQixXQUFoQixDQUE0QixTQUE1QjtBQUNIOztBQUFBO0FBRURqaUIsRUFBQUEsQ0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJ4RCxJQUExQixDQUErQixZQUFZO0FBQ3ZDLFFBQUlzZ0MsRUFBRSxHQUFHOThCLENBQUMsQ0FBQyxJQUFELENBQVY7O0FBRUEsUUFBSW1oQyxJQUFJLENBQUNyRSxFQUFELENBQVIsRUFBYztBQUNWQSxNQUFBQSxFQUFFLENBQUM5YSxRQUFILENBQVksU0FBWjtBQUNIOztBQUFBO0FBQ0osR0FORDtBQU9ELENBZkQ7QUFpQkFoaUIsQ0FBQyxDQUFDLEtBQUQsQ0FBRCxDQUFTeEQsSUFBVCxDQUFlLFVBQVMvRCxDQUFULEVBQVk7QUFDekJ1SCxFQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFnaUIsUUFBUixDQUFpQixNQUFqQjtBQUNELENBRkQ7QUFHQSxJQUFJb2YsZ0JBQWdCLEdBQUcsSUFBSUMsUUFBSixFQUF2QiIsInNvdXJjZXNDb250ZW50IjpbIi8qISBqUXVlcnkgdjMuNS4xIHwgKGMpIEpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyB8IGpxdWVyeS5vcmcvbGljZW5zZSAqL1xuIWZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWUuZG9jdW1lbnQ/dChlLCEwKTpmdW5jdGlvbihlKXtpZighZS5kb2N1bWVudCl0aHJvdyBuZXcgRXJyb3IoXCJqUXVlcnkgcmVxdWlyZXMgYSB3aW5kb3cgd2l0aCBhIGRvY3VtZW50XCIpO3JldHVybiB0KGUpfTp0KGUpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp0aGlzLGZ1bmN0aW9uKEMsZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9W10scj1PYmplY3QuZ2V0UHJvdG90eXBlT2Yscz10LnNsaWNlLGc9dC5mbGF0P2Z1bmN0aW9uKGUpe3JldHVybiB0LmZsYXQuY2FsbChlKX06ZnVuY3Rpb24oZSl7cmV0dXJuIHQuY29uY2F0LmFwcGx5KFtdLGUpfSx1PXQucHVzaCxpPXQuaW5kZXhPZixuPXt9LG89bi50b1N0cmluZyx2PW4uaGFzT3duUHJvcGVydHksYT12LnRvU3RyaW5nLGw9YS5jYWxsKE9iamVjdCkseT17fSxtPWZ1bmN0aW9uKGUpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJlwibnVtYmVyXCIhPXR5cGVvZiBlLm5vZGVUeXBlfSx4PWZ1bmN0aW9uKGUpe3JldHVybiBudWxsIT1lJiZlPT09ZS53aW5kb3d9LEU9Qy5kb2N1bWVudCxjPXt0eXBlOiEwLHNyYzohMCxub25jZTohMCxub01vZHVsZTohMH07ZnVuY3Rpb24gYihlLHQsbil7dmFyIHIsaSxvPShuPW58fEUpLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7aWYoby50ZXh0PWUsdClmb3IociBpbiBjKShpPXRbcl18fHQuZ2V0QXR0cmlidXRlJiZ0LmdldEF0dHJpYnV0ZShyKSkmJm8uc2V0QXR0cmlidXRlKHIsaSk7bi5oZWFkLmFwcGVuZENoaWxkKG8pLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobyl9ZnVuY3Rpb24gdyhlKXtyZXR1cm4gbnVsbD09ZT9lK1wiXCI6XCJvYmplY3RcIj09dHlwZW9mIGV8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGU/bltvLmNhbGwoZSldfHxcIm9iamVjdFwiOnR5cGVvZiBlfXZhciBmPVwiMy41LjFcIixTPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIG5ldyBTLmZuLmluaXQoZSx0KX07ZnVuY3Rpb24gcChlKXt2YXIgdD0hIWUmJlwibGVuZ3RoXCJpbiBlJiZlLmxlbmd0aCxuPXcoZSk7cmV0dXJuIW0oZSkmJiF4KGUpJiYoXCJhcnJheVwiPT09bnx8MD09PXR8fFwibnVtYmVyXCI9PXR5cGVvZiB0JiYwPHQmJnQtMSBpbiBlKX1TLmZuPVMucHJvdG90eXBlPXtqcXVlcnk6Zixjb25zdHJ1Y3RvcjpTLGxlbmd0aDowLHRvQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gcy5jYWxsKHRoaXMpfSxnZXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/cy5jYWxsKHRoaXMpOmU8MD90aGlzW2UrdGhpcy5sZW5ndGhdOnRoaXNbZV19LHB1c2hTdGFjazpmdW5jdGlvbihlKXt2YXIgdD1TLm1lcmdlKHRoaXMuY29uc3RydWN0b3IoKSxlKTtyZXR1cm4gdC5wcmV2T2JqZWN0PXRoaXMsdH0sZWFjaDpmdW5jdGlvbihlKXtyZXR1cm4gUy5lYWNoKHRoaXMsZSl9LG1hcDpmdW5jdGlvbihuKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soUy5tYXAodGhpcyxmdW5jdGlvbihlLHQpe3JldHVybiBuLmNhbGwoZSx0LGUpfSkpfSxzbGljZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnB1c2hTdGFjayhzLmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9LGZpcnN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoMCl9LGxhc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgtMSl9LGV2ZW46ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soUy5ncmVwKHRoaXMsZnVuY3Rpb24oZSx0KXtyZXR1cm4odCsxKSUyfSkpfSxvZGQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soUy5ncmVwKHRoaXMsZnVuY3Rpb24oZSx0KXtyZXR1cm4gdCUyfSkpfSxlcTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLmxlbmd0aCxuPStlKyhlPDA/dDowKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2soMDw9biYmbjx0P1t0aGlzW25dXTpbXSl9LGVuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnByZXZPYmplY3R8fHRoaXMuY29uc3RydWN0b3IoKX0scHVzaDp1LHNvcnQ6dC5zb3J0LHNwbGljZTp0LnNwbGljZX0sUy5leHRlbmQ9Uy5mbi5leHRlbmQ9ZnVuY3Rpb24oKXt2YXIgZSx0LG4scixpLG8sYT1hcmd1bWVudHNbMF18fHt9LHM9MSx1PWFyZ3VtZW50cy5sZW5ndGgsbD0hMTtmb3IoXCJib29sZWFuXCI9PXR5cGVvZiBhJiYobD1hLGE9YXJndW1lbnRzW3NdfHx7fSxzKyspLFwib2JqZWN0XCI9PXR5cGVvZiBhfHxtKGEpfHwoYT17fSkscz09PXUmJihhPXRoaXMscy0tKTtzPHU7cysrKWlmKG51bGwhPShlPWFyZ3VtZW50c1tzXSkpZm9yKHQgaW4gZSlyPWVbdF0sXCJfX3Byb3RvX19cIiE9PXQmJmEhPT1yJiYobCYmciYmKFMuaXNQbGFpbk9iamVjdChyKXx8KGk9QXJyYXkuaXNBcnJheShyKSkpPyhuPWFbdF0sbz1pJiYhQXJyYXkuaXNBcnJheShuKT9bXTppfHxTLmlzUGxhaW5PYmplY3Qobik/bjp7fSxpPSExLGFbdF09Uy5leHRlbmQobCxvLHIpKTp2b2lkIDAhPT1yJiYoYVt0XT1yKSk7cmV0dXJuIGF9LFMuZXh0ZW5kKHtleHBhbmRvOlwialF1ZXJ5XCIrKGYrTWF0aC5yYW5kb20oKSkucmVwbGFjZSgvXFxEL2csXCJcIiksaXNSZWFkeTohMCxlcnJvcjpmdW5jdGlvbihlKXt0aHJvdyBuZXcgRXJyb3IoZSl9LG5vb3A6ZnVuY3Rpb24oKXt9LGlzUGxhaW5PYmplY3Q6ZnVuY3Rpb24oZSl7dmFyIHQsbjtyZXR1cm4hKCFlfHxcIltvYmplY3QgT2JqZWN0XVwiIT09by5jYWxsKGUpKSYmKCEodD1yKGUpKXx8XCJmdW5jdGlvblwiPT10eXBlb2Yobj12LmNhbGwodCxcImNvbnN0cnVjdG9yXCIpJiZ0LmNvbnN0cnVjdG9yKSYmYS5jYWxsKG4pPT09bCl9LGlzRW1wdHlPYmplY3Q6ZnVuY3Rpb24oZSl7dmFyIHQ7Zm9yKHQgaW4gZSlyZXR1cm4hMTtyZXR1cm4hMH0sZ2xvYmFsRXZhbDpmdW5jdGlvbihlLHQsbil7YihlLHtub25jZTp0JiZ0Lm5vbmNlfSxuKX0sZWFjaDpmdW5jdGlvbihlLHQpe3ZhciBuLHI9MDtpZihwKGUpKXtmb3Iobj1lLmxlbmd0aDtyPG47cisrKWlmKCExPT09dC5jYWxsKGVbcl0scixlW3JdKSlicmVha31lbHNlIGZvcihyIGluIGUpaWYoITE9PT10LmNhbGwoZVtyXSxyLGVbcl0pKWJyZWFrO3JldHVybiBlfSxtYWtlQXJyYXk6ZnVuY3Rpb24oZSx0KXt2YXIgbj10fHxbXTtyZXR1cm4gbnVsbCE9ZSYmKHAoT2JqZWN0KGUpKT9TLm1lcmdlKG4sXCJzdHJpbmdcIj09dHlwZW9mIGU/W2VdOmUpOnUuY2FsbChuLGUpKSxufSxpbkFycmF5OmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gbnVsbD09dD8tMTppLmNhbGwodCxlLG4pfSxtZXJnZTpmdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0rdC5sZW5ndGgscj0wLGk9ZS5sZW5ndGg7cjxuO3IrKyllW2krK109dFtyXTtyZXR1cm4gZS5sZW5ndGg9aSxlfSxncmVwOmZ1bmN0aW9uKGUsdCxuKXtmb3IodmFyIHI9W10saT0wLG89ZS5sZW5ndGgsYT0hbjtpPG87aSsrKSF0KGVbaV0saSkhPT1hJiZyLnB1c2goZVtpXSk7cmV0dXJuIHJ9LG1hcDpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPTAsYT1bXTtpZihwKGUpKWZvcihyPWUubGVuZ3RoO288cjtvKyspbnVsbCE9KGk9dChlW29dLG8sbikpJiZhLnB1c2goaSk7ZWxzZSBmb3IobyBpbiBlKW51bGwhPShpPXQoZVtvXSxvLG4pKSYmYS5wdXNoKGkpO3JldHVybiBnKGEpfSxndWlkOjEsc3VwcG9ydDp5fSksXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiYoUy5mbltTeW1ib2wuaXRlcmF0b3JdPXRbU3ltYm9sLml0ZXJhdG9yXSksUy5lYWNoKFwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvciBTeW1ib2xcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oZSx0KXtuW1wiW29iamVjdCBcIit0K1wiXVwiXT10LnRvTG93ZXJDYXNlKCl9KTt2YXIgZD1mdW5jdGlvbihuKXt2YXIgZSxkLGIsbyxpLGgsZixnLHcsdSxsLFQsQyxhLEUsdixzLGMseSxTPVwic2l6emxlXCIrMSpuZXcgRGF0ZSxwPW4uZG9jdW1lbnQsaz0wLHI9MCxtPXVlKCkseD11ZSgpLEE9dWUoKSxOPXVlKCksRD1mdW5jdGlvbihlLHQpe3JldHVybiBlPT09dCYmKGw9ITApLDB9LGo9e30uaGFzT3duUHJvcGVydHksdD1bXSxxPXQucG9wLEw9dC5wdXNoLEg9dC5wdXNoLE89dC5zbGljZSxQPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPTAscj1lLmxlbmd0aDtuPHI7bisrKWlmKGVbbl09PT10KXJldHVybiBuO3JldHVybi0xfSxSPVwiY2hlY2tlZHxzZWxlY3RlZHxhc3luY3xhdXRvZm9jdXN8YXV0b3BsYXl8Y29udHJvbHN8ZGVmZXJ8ZGlzYWJsZWR8aGlkZGVufGlzbWFwfGxvb3B8bXVsdGlwbGV8b3BlbnxyZWFkb25seXxyZXF1aXJlZHxzY29wZWRcIixNPVwiW1xcXFx4MjBcXFxcdFxcXFxyXFxcXG5cXFxcZl1cIixJPVwiKD86XFxcXFxcXFxbXFxcXGRhLWZBLUZdezEsNn1cIitNK1wiP3xcXFxcXFxcXFteXFxcXHJcXFxcblxcXFxmXXxbXFxcXHctXXxbXlxcMC1cXFxceDdmXSkrXCIsVz1cIlxcXFxbXCIrTStcIiooXCIrSStcIikoPzpcIitNK1wiKihbKl4kfCF+XT89KVwiK00rXCIqKD86JygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwifChcIitJK1wiKSl8KVwiK00rXCIqXFxcXF1cIixGPVwiOihcIitJK1wiKSg/OlxcXFwoKCgnKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCIpfCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpW1xcXFxdXXxcIitXK1wiKSopfC4qKVxcXFwpfClcIixCPW5ldyBSZWdFeHAoTStcIitcIixcImdcIiksJD1uZXcgUmVnRXhwKFwiXlwiK00rXCIrfCgoPzpefFteXFxcXFxcXFxdKSg/OlxcXFxcXFxcLikqKVwiK00rXCIrJFwiLFwiZ1wiKSxfPW5ldyBSZWdFeHAoXCJeXCIrTStcIiosXCIrTStcIipcIiksej1uZXcgUmVnRXhwKFwiXlwiK00rXCIqKFs+K35dfFwiK00rXCIpXCIrTStcIipcIiksVT1uZXcgUmVnRXhwKE0rXCJ8PlwiKSxYPW5ldyBSZWdFeHAoRiksVj1uZXcgUmVnRXhwKFwiXlwiK0krXCIkXCIpLEc9e0lEOm5ldyBSZWdFeHAoXCJeIyhcIitJK1wiKVwiKSxDTEFTUzpuZXcgUmVnRXhwKFwiXlxcXFwuKFwiK0krXCIpXCIpLFRBRzpuZXcgUmVnRXhwKFwiXihcIitJK1wifFsqXSlcIiksQVRUUjpuZXcgUmVnRXhwKFwiXlwiK1cpLFBTRVVETzpuZXcgUmVnRXhwKFwiXlwiK0YpLENISUxEOm5ldyBSZWdFeHAoXCJeOihvbmx5fGZpcnN0fGxhc3R8bnRofG50aC1sYXN0KS0oY2hpbGR8b2YtdHlwZSkoPzpcXFxcKFwiK00rXCIqKGV2ZW58b2RkfCgoWystXXwpKFxcXFxkKilufClcIitNK1wiKig/OihbKy1dfClcIitNK1wiKihcXFxcZCspfCkpXCIrTStcIipcXFxcKXwpXCIsXCJpXCIpLGJvb2w6bmV3IFJlZ0V4cChcIl4oPzpcIitSK1wiKSRcIixcImlcIiksbmVlZHNDb250ZXh0Om5ldyBSZWdFeHAoXCJeXCIrTStcIipbPit+XXw6KGV2ZW58b2RkfGVxfGd0fGx0fG50aHxmaXJzdHxsYXN0KSg/OlxcXFwoXCIrTStcIiooKD86LVxcXFxkKT9cXFxcZCopXCIrTStcIipcXFxcKXwpKD89W14tXXwkKVwiLFwiaVwiKX0sWT0vSFRNTCQvaSxRPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksSj0vXmhcXGQkL2ksSz0vXltee10rXFx7XFxzKlxcW25hdGl2ZSBcXHcvLFo9L14oPzojKFtcXHctXSspfChcXHcrKXxcXC4oW1xcdy1dKykpJC8sZWU9L1srfl0vLHRlPW5ldyBSZWdFeHAoXCJcXFxcXFxcXFtcXFxcZGEtZkEtRl17MSw2fVwiK00rXCI/fFxcXFxcXFxcKFteXFxcXHJcXFxcblxcXFxmXSlcIixcImdcIiksbmU9ZnVuY3Rpb24oZSx0KXt2YXIgbj1cIjB4XCIrZS5zbGljZSgxKS02NTUzNjtyZXR1cm4gdHx8KG48MD9TdHJpbmcuZnJvbUNoYXJDb2RlKG4rNjU1MzYpOlN0cmluZy5mcm9tQ2hhckNvZGUobj4+MTB8NTUyOTYsMTAyMyZufDU2MzIwKSl9LHJlPS8oW1xcMC1cXHgxZlxceDdmXXxeLT9cXGQpfF4tJHxbXlxcMC1cXHgxZlxceDdmLVxcdUZGRkZcXHctXS9nLGllPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQ/XCJcXDBcIj09PWU/XCJcXHVmZmZkXCI6ZS5zbGljZSgwLC0xKStcIlxcXFxcIitlLmNoYXJDb2RlQXQoZS5sZW5ndGgtMSkudG9TdHJpbmcoMTYpK1wiIFwiOlwiXFxcXFwiK2V9LG9lPWZ1bmN0aW9uKCl7VCgpfSxhZT1iZShmdW5jdGlvbihlKXtyZXR1cm4hMD09PWUuZGlzYWJsZWQmJlwiZmllbGRzZXRcIj09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKX0se2RpcjpcInBhcmVudE5vZGVcIixuZXh0OlwibGVnZW5kXCJ9KTt0cnl7SC5hcHBseSh0PU8uY2FsbChwLmNoaWxkTm9kZXMpLHAuY2hpbGROb2RlcyksdFtwLmNoaWxkTm9kZXMubGVuZ3RoXS5ub2RlVHlwZX1jYXRjaChlKXtIPXthcHBseTp0Lmxlbmd0aD9mdW5jdGlvbihlLHQpe0wuYXBwbHkoZSxPLmNhbGwodCkpfTpmdW5jdGlvbihlLHQpe3ZhciBuPWUubGVuZ3RoLHI9MDt3aGlsZShlW24rK109dFtyKytdKTtlLmxlbmd0aD1uLTF9fX1mdW5jdGlvbiBzZSh0LGUsbixyKXt2YXIgaSxvLGEscyx1LGwsYyxmPWUmJmUub3duZXJEb2N1bWVudCxwPWU/ZS5ub2RlVHlwZTo5O2lmKG49bnx8W10sXCJzdHJpbmdcIiE9dHlwZW9mIHR8fCF0fHwxIT09cCYmOSE9PXAmJjExIT09cClyZXR1cm4gbjtpZighciYmKFQoZSksZT1lfHxDLEUpKXtpZigxMSE9PXAmJih1PVouZXhlYyh0KSkpaWYoaT11WzFdKXtpZig5PT09cCl7aWYoIShhPWUuZ2V0RWxlbWVudEJ5SWQoaSkpKXJldHVybiBuO2lmKGEuaWQ9PT1pKXJldHVybiBuLnB1c2goYSksbn1lbHNlIGlmKGYmJihhPWYuZ2V0RWxlbWVudEJ5SWQoaSkpJiZ5KGUsYSkmJmEuaWQ9PT1pKXJldHVybiBuLnB1c2goYSksbn1lbHNle2lmKHVbMl0pcmV0dXJuIEguYXBwbHkobixlLmdldEVsZW1lbnRzQnlUYWdOYW1lKHQpKSxuO2lmKChpPXVbM10pJiZkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSlyZXR1cm4gSC5hcHBseShuLGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShpKSksbn1pZihkLnFzYSYmIU5bdCtcIiBcIl0mJighdnx8IXYudGVzdCh0KSkmJigxIT09cHx8XCJvYmplY3RcIiE9PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkpe2lmKGM9dCxmPWUsMT09PXAmJihVLnRlc3QodCl8fHoudGVzdCh0KSkpeyhmPWVlLnRlc3QodCkmJnllKGUucGFyZW50Tm9kZSl8fGUpPT09ZSYmZC5zY29wZXx8KChzPWUuZ2V0QXR0cmlidXRlKFwiaWRcIikpP3M9cy5yZXBsYWNlKHJlLGllKTplLnNldEF0dHJpYnV0ZShcImlkXCIscz1TKSksbz0obD1oKHQpKS5sZW5ndGg7d2hpbGUoby0tKWxbb109KHM/XCIjXCIrczpcIjpzY29wZVwiKStcIiBcIit4ZShsW29dKTtjPWwuam9pbihcIixcIil9dHJ5e3JldHVybiBILmFwcGx5KG4sZi5xdWVyeVNlbGVjdG9yQWxsKGMpKSxufWNhdGNoKGUpe04odCwhMCl9ZmluYWxseXtzPT09UyYmZS5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKX19fXJldHVybiBnKHQucmVwbGFjZSgkLFwiJDFcIiksZSxuLHIpfWZ1bmN0aW9uIHVlKCl7dmFyIHI9W107cmV0dXJuIGZ1bmN0aW9uIGUodCxuKXtyZXR1cm4gci5wdXNoKHQrXCIgXCIpPmIuY2FjaGVMZW5ndGgmJmRlbGV0ZSBlW3Iuc2hpZnQoKV0sZVt0K1wiIFwiXT1ufX1mdW5jdGlvbiBsZShlKXtyZXR1cm4gZVtTXT0hMCxlfWZ1bmN0aW9uIGNlKGUpe3ZhciB0PUMuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO3RyeXtyZXR1cm4hIWUodCl9Y2F0Y2goZSl7cmV0dXJuITF9ZmluYWxseXt0LnBhcmVudE5vZGUmJnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0KSx0PW51bGx9fWZ1bmN0aW9uIGZlKGUsdCl7dmFyIG49ZS5zcGxpdChcInxcIikscj1uLmxlbmd0aDt3aGlsZShyLS0pYi5hdHRySGFuZGxlW25bcl1dPXR9ZnVuY3Rpb24gcGUoZSx0KXt2YXIgbj10JiZlLHI9biYmMT09PWUubm9kZVR5cGUmJjE9PT10Lm5vZGVUeXBlJiZlLnNvdXJjZUluZGV4LXQuc291cmNlSW5kZXg7aWYocilyZXR1cm4gcjtpZihuKXdoaWxlKG49bi5uZXh0U2libGluZylpZihuPT09dClyZXR1cm4tMTtyZXR1cm4gZT8xOi0xfWZ1bmN0aW9uIGRlKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm5cImlucHV0XCI9PT1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkmJmUudHlwZT09PXR9fWZ1bmN0aW9uIGhlKG4pe3JldHVybiBmdW5jdGlvbihlKXt2YXIgdD1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuKFwiaW5wdXRcIj09PXR8fFwiYnV0dG9uXCI9PT10KSYmZS50eXBlPT09bn19ZnVuY3Rpb24gZ2UodCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVyblwiZm9ybVwiaW4gZT9lLnBhcmVudE5vZGUmJiExPT09ZS5kaXNhYmxlZD9cImxhYmVsXCJpbiBlP1wibGFiZWxcImluIGUucGFyZW50Tm9kZT9lLnBhcmVudE5vZGUuZGlzYWJsZWQ9PT10OmUuZGlzYWJsZWQ9PT10OmUuaXNEaXNhYmxlZD09PXR8fGUuaXNEaXNhYmxlZCE9PSF0JiZhZShlKT09PXQ6ZS5kaXNhYmxlZD09PXQ6XCJsYWJlbFwiaW4gZSYmZS5kaXNhYmxlZD09PXR9fWZ1bmN0aW9uIHZlKGEpe3JldHVybiBsZShmdW5jdGlvbihvKXtyZXR1cm4gbz0rbyxsZShmdW5jdGlvbihlLHQpe3ZhciBuLHI9YShbXSxlLmxlbmd0aCxvKSxpPXIubGVuZ3RoO3doaWxlKGktLSllW249cltpXV0mJihlW25dPSEodFtuXT1lW25dKSl9KX0pfWZ1bmN0aW9uIHllKGUpe3JldHVybiBlJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgZS5nZXRFbGVtZW50c0J5VGFnTmFtZSYmZX1mb3IoZSBpbiBkPXNlLnN1cHBvcnQ9e30saT1zZS5pc1hNTD1mdW5jdGlvbihlKXt2YXIgdD1lLm5hbWVzcGFjZVVSSSxuPShlLm93bmVyRG9jdW1lbnR8fGUpLmRvY3VtZW50RWxlbWVudDtyZXR1cm4hWS50ZXN0KHR8fG4mJm4ubm9kZU5hbWV8fFwiSFRNTFwiKX0sVD1zZS5zZXREb2N1bWVudD1mdW5jdGlvbihlKXt2YXIgdCxuLHI9ZT9lLm93bmVyRG9jdW1lbnR8fGU6cDtyZXR1cm4gciE9QyYmOT09PXIubm9kZVR5cGUmJnIuZG9jdW1lbnRFbGVtZW50JiYoYT0oQz1yKS5kb2N1bWVudEVsZW1lbnQsRT0haShDKSxwIT1DJiYobj1DLmRlZmF1bHRWaWV3KSYmbi50b3AhPT1uJiYobi5hZGRFdmVudExpc3RlbmVyP24uYWRkRXZlbnRMaXN0ZW5lcihcInVubG9hZFwiLG9lLCExKTpuLmF0dGFjaEV2ZW50JiZuLmF0dGFjaEV2ZW50KFwib251bmxvYWRcIixvZSkpLGQuc2NvcGU9Y2UoZnVuY3Rpb24oZSl7cmV0dXJuIGEuYXBwZW5kQ2hpbGQoZSkuYXBwZW5kQ2hpbGQoQy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxcInVuZGVmaW5lZFwiIT10eXBlb2YgZS5xdWVyeVNlbGVjdG9yQWxsJiYhZS5xdWVyeVNlbGVjdG9yQWxsKFwiOnNjb3BlIGZpZWxkc2V0IGRpdlwiKS5sZW5ndGh9KSxkLmF0dHJpYnV0ZXM9Y2UoZnVuY3Rpb24oZSl7cmV0dXJuIGUuY2xhc3NOYW1lPVwiaVwiLCFlLmdldEF0dHJpYnV0ZShcImNsYXNzTmFtZVwiKX0pLGQuZ2V0RWxlbWVudHNCeVRhZ05hbWU9Y2UoZnVuY3Rpb24oZSl7cmV0dXJuIGUuYXBwZW5kQ2hpbGQoQy5jcmVhdGVDb21tZW50KFwiXCIpKSwhZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIikubGVuZ3RofSksZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lPUsudGVzdChDLmdldEVsZW1lbnRzQnlDbGFzc05hbWUpLGQuZ2V0QnlJZD1jZShmdW5jdGlvbihlKXtyZXR1cm4gYS5hcHBlbmRDaGlsZChlKS5pZD1TLCFDLmdldEVsZW1lbnRzQnlOYW1lfHwhQy5nZXRFbGVtZW50c0J5TmFtZShTKS5sZW5ndGh9KSxkLmdldEJ5SWQ/KGIuZmlsdGVyLklEPWZ1bmN0aW9uKGUpe3ZhciB0PWUucmVwbGFjZSh0ZSxuZSk7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlLmdldEF0dHJpYnV0ZShcImlkXCIpPT09dH19LGIuZmluZC5JRD1mdW5jdGlvbihlLHQpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB0LmdldEVsZW1lbnRCeUlkJiZFKXt2YXIgbj10LmdldEVsZW1lbnRCeUlkKGUpO3JldHVybiBuP1tuXTpbXX19KTooYi5maWx0ZXIuSUQ9ZnVuY3Rpb24oZSl7dmFyIG49ZS5yZXBsYWNlKHRlLG5lKTtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUuZ2V0QXR0cmlidXRlTm9kZSYmZS5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIik7cmV0dXJuIHQmJnQudmFsdWU9PT1ufX0sYi5maW5kLklEPWZ1bmN0aW9uKGUsdCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQuZ2V0RWxlbWVudEJ5SWQmJkUpe3ZhciBuLHIsaSxvPXQuZ2V0RWxlbWVudEJ5SWQoZSk7aWYobyl7aWYoKG49by5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIikpJiZuLnZhbHVlPT09ZSlyZXR1cm5bb107aT10LmdldEVsZW1lbnRzQnlOYW1lKGUpLHI9MDt3aGlsZShvPWlbcisrXSlpZigobj1vLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKSkmJm4udmFsdWU9PT1lKXJldHVybltvXX1yZXR1cm5bXX19KSxiLmZpbmQuVEFHPWQuZ2V0RWxlbWVudHNCeVRhZ05hbWU/ZnVuY3Rpb24oZSx0KXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgdC5nZXRFbGVtZW50c0J5VGFnTmFtZT90LmdldEVsZW1lbnRzQnlUYWdOYW1lKGUpOmQucXNhP3QucXVlcnlTZWxlY3RvckFsbChlKTp2b2lkIDB9OmZ1bmN0aW9uKGUsdCl7dmFyIG4scj1bXSxpPTAsbz10LmdldEVsZW1lbnRzQnlUYWdOYW1lKGUpO2lmKFwiKlwiPT09ZSl7d2hpbGUobj1vW2krK10pMT09PW4ubm9kZVR5cGUmJnIucHVzaChuKTtyZXR1cm4gcn1yZXR1cm4gb30sYi5maW5kLkNMQVNTPWQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmZnVuY3Rpb24oZSx0KXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZFKXJldHVybiB0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZSl9LHM9W10sdj1bXSwoZC5xc2E9Sy50ZXN0KEMucXVlcnlTZWxlY3RvckFsbCkpJiYoY2UoZnVuY3Rpb24oZSl7dmFyIHQ7YS5hcHBlbmRDaGlsZChlKS5pbm5lckhUTUw9XCI8YSBpZD0nXCIrUytcIic+PC9hPjxzZWxlY3QgaWQ9J1wiK1MrXCItXFxyXFxcXCcgbXNhbGxvd2NhcHR1cmU9Jyc+PG9wdGlvbiBzZWxlY3RlZD0nJz48L29wdGlvbj48L3NlbGVjdD5cIixlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbXNhbGxvd2NhcHR1cmVePScnXVwiKS5sZW5ndGgmJnYucHVzaChcIlsqXiRdPVwiK00rXCIqKD86Jyd8XFxcIlxcXCIpXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIltzZWxlY3RlZF1cIikubGVuZ3RofHx2LnB1c2goXCJcXFxcW1wiK00rXCIqKD86dmFsdWV8XCIrUitcIilcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiW2lkfj1cIitTK1wiLV1cIikubGVuZ3RofHx2LnB1c2goXCJ+PVwiKSwodD1DLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSkuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwiXCIpLGUuYXBwZW5kQ2hpbGQodCksZS5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9JyddXCIpLmxlbmd0aHx8di5wdXNoKFwiXFxcXFtcIitNK1wiKm5hbWVcIitNK1wiKj1cIitNK1wiKig/OicnfFxcXCJcXFwiKVwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6Y2hlY2tlZFwiKS5sZW5ndGh8fHYucHVzaChcIjpjaGVja2VkXCIpLGUucXVlcnlTZWxlY3RvckFsbChcImEjXCIrUytcIisqXCIpLmxlbmd0aHx8di5wdXNoKFwiLiMuK1srfl1cIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiXFxcXFxcZlwiKSx2LnB1c2goXCJbXFxcXHJcXFxcblxcXFxmXVwiKX0pLGNlKGZ1bmN0aW9uKGUpe2UuaW5uZXJIVE1MPVwiPGEgaHJlZj0nJyBkaXNhYmxlZD0nZGlzYWJsZWQnPjwvYT48c2VsZWN0IGRpc2FibGVkPSdkaXNhYmxlZCc+PG9wdGlvbi8+PC9zZWxlY3Q+XCI7dmFyIHQ9Qy5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJoaWRkZW5cIiksZS5hcHBlbmRDaGlsZCh0KS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJEXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIltuYW1lPWRdXCIpLmxlbmd0aCYmdi5wdXNoKFwibmFtZVwiK00rXCIqWypeJHwhfl0/PVwiKSwyIT09ZS5xdWVyeVNlbGVjdG9yQWxsKFwiOmVuYWJsZWRcIikubGVuZ3RoJiZ2LnB1c2goXCI6ZW5hYmxlZFwiLFwiOmRpc2FibGVkXCIpLGEuYXBwZW5kQ2hpbGQoZSkuZGlzYWJsZWQ9ITAsMiE9PWUucXVlcnlTZWxlY3RvckFsbChcIjpkaXNhYmxlZFwiKS5sZW5ndGgmJnYucHVzaChcIjplbmFibGVkXCIsXCI6ZGlzYWJsZWRcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiKiw6eFwiKSx2LnB1c2goXCIsLio6XCIpfSkpLChkLm1hdGNoZXNTZWxlY3Rvcj1LLnRlc3QoYz1hLm1hdGNoZXN8fGEud2Via2l0TWF0Y2hlc1NlbGVjdG9yfHxhLm1vek1hdGNoZXNTZWxlY3Rvcnx8YS5vTWF0Y2hlc1NlbGVjdG9yfHxhLm1zTWF0Y2hlc1NlbGVjdG9yKSkmJmNlKGZ1bmN0aW9uKGUpe2QuZGlzY29ubmVjdGVkTWF0Y2g9Yy5jYWxsKGUsXCIqXCIpLGMuY2FsbChlLFwiW3MhPScnXTp4XCIpLHMucHVzaChcIiE9XCIsRil9KSx2PXYubGVuZ3RoJiZuZXcgUmVnRXhwKHYuam9pbihcInxcIikpLHM9cy5sZW5ndGgmJm5ldyBSZWdFeHAocy5qb2luKFwifFwiKSksdD1LLnRlc3QoYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbikseT10fHxLLnRlc3QoYS5jb250YWlucyk/ZnVuY3Rpb24oZSx0KXt2YXIgbj05PT09ZS5ub2RlVHlwZT9lLmRvY3VtZW50RWxlbWVudDplLHI9dCYmdC5wYXJlbnROb2RlO3JldHVybiBlPT09cnx8ISghcnx8MSE9PXIubm9kZVR5cGV8fCEobi5jb250YWlucz9uLmNvbnRhaW5zKHIpOmUuY29tcGFyZURvY3VtZW50UG9zaXRpb24mJjE2JmUuY29tcGFyZURvY3VtZW50UG9zaXRpb24ocikpKX06ZnVuY3Rpb24oZSx0KXtpZih0KXdoaWxlKHQ9dC5wYXJlbnROb2RlKWlmKHQ9PT1lKXJldHVybiEwO3JldHVybiExfSxEPXQ/ZnVuY3Rpb24oZSx0KXtpZihlPT09dClyZXR1cm4gbD0hMCwwO3ZhciBuPSFlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uLSF0LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uO3JldHVybiBufHwoMSYobj0oZS5vd25lckRvY3VtZW50fHxlKT09KHQub3duZXJEb2N1bWVudHx8dCk/ZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbih0KToxKXx8IWQuc29ydERldGFjaGVkJiZ0LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGUpPT09bj9lPT1DfHxlLm93bmVyRG9jdW1lbnQ9PXAmJnkocCxlKT8tMTp0PT1DfHx0Lm93bmVyRG9jdW1lbnQ9PXAmJnkocCx0KT8xOnU/UCh1LGUpLVAodSx0KTowOjQmbj8tMToxKX06ZnVuY3Rpb24oZSx0KXtpZihlPT09dClyZXR1cm4gbD0hMCwwO3ZhciBuLHI9MCxpPWUucGFyZW50Tm9kZSxvPXQucGFyZW50Tm9kZSxhPVtlXSxzPVt0XTtpZighaXx8IW8pcmV0dXJuIGU9PUM/LTE6dD09Qz8xOmk/LTE6bz8xOnU/UCh1LGUpLVAodSx0KTowO2lmKGk9PT1vKXJldHVybiBwZShlLHQpO249ZTt3aGlsZShuPW4ucGFyZW50Tm9kZSlhLnVuc2hpZnQobik7bj10O3doaWxlKG49bi5wYXJlbnROb2RlKXMudW5zaGlmdChuKTt3aGlsZShhW3JdPT09c1tyXSlyKys7cmV0dXJuIHI/cGUoYVtyXSxzW3JdKTphW3JdPT1wPy0xOnNbcl09PXA/MTowfSksQ30sc2UubWF0Y2hlcz1mdW5jdGlvbihlLHQpe3JldHVybiBzZShlLG51bGwsbnVsbCx0KX0sc2UubWF0Y2hlc1NlbGVjdG9yPWZ1bmN0aW9uKGUsdCl7aWYoVChlKSxkLm1hdGNoZXNTZWxlY3RvciYmRSYmIU5bdCtcIiBcIl0mJighc3x8IXMudGVzdCh0KSkmJighdnx8IXYudGVzdCh0KSkpdHJ5e3ZhciBuPWMuY2FsbChlLHQpO2lmKG58fGQuZGlzY29ubmVjdGVkTWF0Y2h8fGUuZG9jdW1lbnQmJjExIT09ZS5kb2N1bWVudC5ub2RlVHlwZSlyZXR1cm4gbn1jYXRjaChlKXtOKHQsITApfXJldHVybiAwPHNlKHQsQyxudWxsLFtlXSkubGVuZ3RofSxzZS5jb250YWlucz1mdW5jdGlvbihlLHQpe3JldHVybihlLm93bmVyRG9jdW1lbnR8fGUpIT1DJiZUKGUpLHkoZSx0KX0sc2UuYXR0cj1mdW5jdGlvbihlLHQpeyhlLm93bmVyRG9jdW1lbnR8fGUpIT1DJiZUKGUpO3ZhciBuPWIuYXR0ckhhbmRsZVt0LnRvTG93ZXJDYXNlKCldLHI9biYmai5jYWxsKGIuYXR0ckhhbmRsZSx0LnRvTG93ZXJDYXNlKCkpP24oZSx0LCFFKTp2b2lkIDA7cmV0dXJuIHZvaWQgMCE9PXI/cjpkLmF0dHJpYnV0ZXN8fCFFP2UuZ2V0QXR0cmlidXRlKHQpOihyPWUuZ2V0QXR0cmlidXRlTm9kZSh0KSkmJnIuc3BlY2lmaWVkP3IudmFsdWU6bnVsbH0sc2UuZXNjYXBlPWZ1bmN0aW9uKGUpe3JldHVybihlK1wiXCIpLnJlcGxhY2UocmUsaWUpfSxzZS5lcnJvcj1mdW5jdGlvbihlKXt0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IsIHVucmVjb2duaXplZCBleHByZXNzaW9uOiBcIitlKX0sc2UudW5pcXVlU29ydD1mdW5jdGlvbihlKXt2YXIgdCxuPVtdLHI9MCxpPTA7aWYobD0hZC5kZXRlY3REdXBsaWNhdGVzLHU9IWQuc29ydFN0YWJsZSYmZS5zbGljZSgwKSxlLnNvcnQoRCksbCl7d2hpbGUodD1lW2krK10pdD09PWVbaV0mJihyPW4ucHVzaChpKSk7d2hpbGUoci0tKWUuc3BsaWNlKG5bcl0sMSl9cmV0dXJuIHU9bnVsbCxlfSxvPXNlLmdldFRleHQ9ZnVuY3Rpb24oZSl7dmFyIHQsbj1cIlwiLHI9MCxpPWUubm9kZVR5cGU7aWYoaSl7aWYoMT09PWl8fDk9PT1pfHwxMT09PWkpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlLnRleHRDb250ZW50KXJldHVybiBlLnRleHRDb250ZW50O2ZvcihlPWUuZmlyc3RDaGlsZDtlO2U9ZS5uZXh0U2libGluZyluKz1vKGUpfWVsc2UgaWYoMz09PWl8fDQ9PT1pKXJldHVybiBlLm5vZGVWYWx1ZX1lbHNlIHdoaWxlKHQ9ZVtyKytdKW4rPW8odCk7cmV0dXJuIG59LChiPXNlLnNlbGVjdG9ycz17Y2FjaGVMZW5ndGg6NTAsY3JlYXRlUHNldWRvOmxlLG1hdGNoOkcsYXR0ckhhbmRsZTp7fSxmaW5kOnt9LHJlbGF0aXZlOntcIj5cIjp7ZGlyOlwicGFyZW50Tm9kZVwiLGZpcnN0OiEwfSxcIiBcIjp7ZGlyOlwicGFyZW50Tm9kZVwifSxcIitcIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCIsZmlyc3Q6ITB9LFwiflwiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIn19LHByZUZpbHRlcjp7QVRUUjpmdW5jdGlvbihlKXtyZXR1cm4gZVsxXT1lWzFdLnJlcGxhY2UodGUsbmUpLGVbM109KGVbM118fGVbNF18fGVbNV18fFwiXCIpLnJlcGxhY2UodGUsbmUpLFwifj1cIj09PWVbMl0mJihlWzNdPVwiIFwiK2VbM10rXCIgXCIpLGUuc2xpY2UoMCw0KX0sQ0hJTEQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGVbMV09ZVsxXS50b0xvd2VyQ2FzZSgpLFwibnRoXCI9PT1lWzFdLnNsaWNlKDAsMyk/KGVbM118fHNlLmVycm9yKGVbMF0pLGVbNF09KyhlWzRdP2VbNV0rKGVbNl18fDEpOjIqKFwiZXZlblwiPT09ZVszXXx8XCJvZGRcIj09PWVbM10pKSxlWzVdPSsoZVs3XStlWzhdfHxcIm9kZFwiPT09ZVszXSkpOmVbM10mJnNlLmVycm9yKGVbMF0pLGV9LFBTRVVETzpmdW5jdGlvbihlKXt2YXIgdCxuPSFlWzZdJiZlWzJdO3JldHVybiBHLkNISUxELnRlc3QoZVswXSk/bnVsbDooZVszXT9lWzJdPWVbNF18fGVbNV18fFwiXCI6biYmWC50ZXN0KG4pJiYodD1oKG4sITApKSYmKHQ9bi5pbmRleE9mKFwiKVwiLG4ubGVuZ3RoLXQpLW4ubGVuZ3RoKSYmKGVbMF09ZVswXS5zbGljZSgwLHQpLGVbMl09bi5zbGljZSgwLHQpKSxlLnNsaWNlKDAsMykpfX0sZmlsdGVyOntUQUc6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5yZXBsYWNlKHRlLG5lKS50b0xvd2VyQ2FzZSgpO3JldHVyblwiKlwiPT09ZT9mdW5jdGlvbigpe3JldHVybiEwfTpmdW5jdGlvbihlKXtyZXR1cm4gZS5ub2RlTmFtZSYmZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09dH19LENMQVNTOmZ1bmN0aW9uKGUpe3ZhciB0PW1bZStcIiBcIl07cmV0dXJuIHR8fCh0PW5ldyBSZWdFeHAoXCIoXnxcIitNK1wiKVwiK2UrXCIoXCIrTStcInwkKVwiKSkmJm0oZSxmdW5jdGlvbihlKXtyZXR1cm4gdC50ZXN0KFwic3RyaW5nXCI9PXR5cGVvZiBlLmNsYXNzTmFtZSYmZS5jbGFzc05hbWV8fFwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLmdldEF0dHJpYnV0ZSYmZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIil9KX0sQVRUUjpmdW5jdGlvbihuLHIsaSl7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciB0PXNlLmF0dHIoZSxuKTtyZXR1cm4gbnVsbD09dD9cIiE9XCI9PT1yOiFyfHwodCs9XCJcIixcIj1cIj09PXI/dD09PWk6XCIhPVwiPT09cj90IT09aTpcIl49XCI9PT1yP2kmJjA9PT10LmluZGV4T2YoaSk6XCIqPVwiPT09cj9pJiYtMTx0LmluZGV4T2YoaSk6XCIkPVwiPT09cj9pJiZ0LnNsaWNlKC1pLmxlbmd0aCk9PT1pOlwifj1cIj09PXI/LTE8KFwiIFwiK3QucmVwbGFjZShCLFwiIFwiKStcIiBcIikuaW5kZXhPZihpKTpcInw9XCI9PT1yJiYodD09PWl8fHQuc2xpY2UoMCxpLmxlbmd0aCsxKT09PWkrXCItXCIpKX19LENISUxEOmZ1bmN0aW9uKGgsZSx0LGcsdil7dmFyIHk9XCJudGhcIiE9PWguc2xpY2UoMCwzKSxtPVwibGFzdFwiIT09aC5zbGljZSgtNCkseD1cIm9mLXR5cGVcIj09PWU7cmV0dXJuIDE9PT1nJiYwPT09dj9mdW5jdGlvbihlKXtyZXR1cm4hIWUucGFyZW50Tm9kZX06ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhLHMsdSxsPXkhPT1tP1wibmV4dFNpYmxpbmdcIjpcInByZXZpb3VzU2libGluZ1wiLGM9ZS5wYXJlbnROb2RlLGY9eCYmZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLHA9IW4mJiF4LGQ9ITE7aWYoYyl7aWYoeSl7d2hpbGUobCl7YT1lO3doaWxlKGE9YVtsXSlpZih4P2Eubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWY6MT09PWEubm9kZVR5cGUpcmV0dXJuITE7dT1sPVwib25seVwiPT09aCYmIXUmJlwibmV4dFNpYmxpbmdcIn1yZXR1cm4hMH1pZih1PVttP2MuZmlyc3RDaGlsZDpjLmxhc3RDaGlsZF0sbSYmcCl7ZD0ocz0ocj0oaT0obz0oYT1jKVtTXXx8KGFbU109e30pKVthLnVuaXF1ZUlEXXx8KG9bYS51bmlxdWVJRF09e30pKVtoXXx8W10pWzBdPT09ayYmclsxXSkmJnJbMl0sYT1zJiZjLmNoaWxkTm9kZXNbc107d2hpbGUoYT0rK3MmJmEmJmFbbF18fChkPXM9MCl8fHUucG9wKCkpaWYoMT09PWEubm9kZVR5cGUmJisrZCYmYT09PWUpe2lbaF09W2sscyxkXTticmVha319ZWxzZSBpZihwJiYoZD1zPShyPShpPShvPShhPWUpW1NdfHwoYVtTXT17fSkpW2EudW5pcXVlSURdfHwob1thLnVuaXF1ZUlEXT17fSkpW2hdfHxbXSlbMF09PT1rJiZyWzFdKSwhMT09PWQpd2hpbGUoYT0rK3MmJmEmJmFbbF18fChkPXM9MCl8fHUucG9wKCkpaWYoKHg/YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09ZjoxPT09YS5ub2RlVHlwZSkmJisrZCYmKHAmJigoaT0obz1hW1NdfHwoYVtTXT17fSkpW2EudW5pcXVlSURdfHwob1thLnVuaXF1ZUlEXT17fSkpW2hdPVtrLGRdKSxhPT09ZSkpYnJlYWs7cmV0dXJuKGQtPXYpPT09Z3x8ZCVnPT0wJiYwPD1kL2d9fX0sUFNFVURPOmZ1bmN0aW9uKGUsbyl7dmFyIHQsYT1iLnBzZXVkb3NbZV18fGIuc2V0RmlsdGVyc1tlLnRvTG93ZXJDYXNlKCldfHxzZS5lcnJvcihcInVuc3VwcG9ydGVkIHBzZXVkbzogXCIrZSk7cmV0dXJuIGFbU10/YShvKToxPGEubGVuZ3RoPyh0PVtlLGUsXCJcIixvXSxiLnNldEZpbHRlcnMuaGFzT3duUHJvcGVydHkoZS50b0xvd2VyQ2FzZSgpKT9sZShmdW5jdGlvbihlLHQpe3ZhciBuLHI9YShlLG8pLGk9ci5sZW5ndGg7d2hpbGUoaS0tKWVbbj1QKGUscltpXSldPSEodFtuXT1yW2ldKX0pOmZ1bmN0aW9uKGUpe3JldHVybiBhKGUsMCx0KX0pOmF9fSxwc2V1ZG9zOntub3Q6bGUoZnVuY3Rpb24oZSl7dmFyIHI9W10saT1bXSxzPWYoZS5yZXBsYWNlKCQsXCIkMVwiKSk7cmV0dXJuIHNbU10/bGUoZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbz1zKGUsbnVsbCxyLFtdKSxhPWUubGVuZ3RoO3doaWxlKGEtLSkoaT1vW2FdKSYmKGVbYV09ISh0W2FdPWkpKX0pOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gclswXT1lLHMocixudWxsLG4saSksclswXT1udWxsLCFpLnBvcCgpfX0pLGhhczpsZShmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIDA8c2UodCxlKS5sZW5ndGh9fSksY29udGFpbnM6bGUoZnVuY3Rpb24odCl7cmV0dXJuIHQ9dC5yZXBsYWNlKHRlLG5lKSxmdW5jdGlvbihlKXtyZXR1cm4tMTwoZS50ZXh0Q29udGVudHx8byhlKSkuaW5kZXhPZih0KX19KSxsYW5nOmxlKGZ1bmN0aW9uKG4pe3JldHVybiBWLnRlc3Qobnx8XCJcIil8fHNlLmVycm9yKFwidW5zdXBwb3J0ZWQgbGFuZzogXCIrbiksbj1uLnJlcGxhY2UodGUsbmUpLnRvTG93ZXJDYXNlKCksZnVuY3Rpb24oZSl7dmFyIHQ7ZG97aWYodD1FP2UubGFuZzplLmdldEF0dHJpYnV0ZShcInhtbDpsYW5nXCIpfHxlLmdldEF0dHJpYnV0ZShcImxhbmdcIikpcmV0dXJuKHQ9dC50b0xvd2VyQ2FzZSgpKT09PW58fDA9PT10LmluZGV4T2YobitcIi1cIil9d2hpbGUoKGU9ZS5wYXJlbnROb2RlKSYmMT09PWUubm9kZVR5cGUpO3JldHVybiExfX0pLHRhcmdldDpmdW5jdGlvbihlKXt2YXIgdD1uLmxvY2F0aW9uJiZuLmxvY2F0aW9uLmhhc2g7cmV0dXJuIHQmJnQuc2xpY2UoMSk9PT1lLmlkfSxyb290OmZ1bmN0aW9uKGUpe3JldHVybiBlPT09YX0sZm9jdXM6ZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1DLmFjdGl2ZUVsZW1lbnQmJighQy5oYXNGb2N1c3x8Qy5oYXNGb2N1cygpKSYmISEoZS50eXBlfHxlLmhyZWZ8fH5lLnRhYkluZGV4KX0sZW5hYmxlZDpnZSghMSksZGlzYWJsZWQ6Z2UoITApLGNoZWNrZWQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PXQmJiEhZS5jaGVja2VkfHxcIm9wdGlvblwiPT09dCYmISFlLnNlbGVjdGVkfSxzZWxlY3RlZDpmdW5jdGlvbihlKXtyZXR1cm4gZS5wYXJlbnROb2RlJiZlLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCwhMD09PWUuc2VsZWN0ZWR9LGVtcHR5OmZ1bmN0aW9uKGUpe2ZvcihlPWUuZmlyc3RDaGlsZDtlO2U9ZS5uZXh0U2libGluZylpZihlLm5vZGVUeXBlPDYpcmV0dXJuITE7cmV0dXJuITB9LHBhcmVudDpmdW5jdGlvbihlKXtyZXR1cm4hYi5wc2V1ZG9zLmVtcHR5KGUpfSxoZWFkZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIEoudGVzdChlLm5vZGVOYW1lKX0saW5wdXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIFEudGVzdChlLm5vZGVOYW1lKX0sYnV0dG9uOmZ1bmN0aW9uKGUpe3ZhciB0PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT10JiZcImJ1dHRvblwiPT09ZS50eXBlfHxcImJ1dHRvblwiPT09dH0sdGV4dDpmdW5jdGlvbihlKXt2YXIgdDtyZXR1cm5cImlucHV0XCI9PT1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkmJlwidGV4dFwiPT09ZS50eXBlJiYobnVsbD09KHQ9ZS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKXx8XCJ0ZXh0XCI9PT10LnRvTG93ZXJDYXNlKCkpfSxmaXJzdDp2ZShmdW5jdGlvbigpe3JldHVyblswXX0pLGxhc3Q6dmUoZnVuY3Rpb24oZSx0KXtyZXR1cm5bdC0xXX0pLGVxOnZlKGZ1bmN0aW9uKGUsdCxuKXtyZXR1cm5bbjwwP24rdDpuXX0pLGV2ZW46dmUoZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49MDtuPHQ7bis9MillLnB1c2gobik7cmV0dXJuIGV9KSxvZGQ6dmUoZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49MTtuPHQ7bis9MillLnB1c2gobik7cmV0dXJuIGV9KSxsdDp2ZShmdW5jdGlvbihlLHQsbil7Zm9yKHZhciByPW48MD9uK3Q6dDxuP3Q6bjswPD0tLXI7KWUucHVzaChyKTtyZXR1cm4gZX0pLGd0OnZlKGZ1bmN0aW9uKGUsdCxuKXtmb3IodmFyIHI9bjwwP24rdDpuOysrcjx0OyllLnB1c2gocik7cmV0dXJuIGV9KX19KS5wc2V1ZG9zLm50aD1iLnBzZXVkb3MuZXEse3JhZGlvOiEwLGNoZWNrYm94OiEwLGZpbGU6ITAscGFzc3dvcmQ6ITAsaW1hZ2U6ITB9KWIucHNldWRvc1tlXT1kZShlKTtmb3IoZSBpbntzdWJtaXQ6ITAscmVzZXQ6ITB9KWIucHNldWRvc1tlXT1oZShlKTtmdW5jdGlvbiBtZSgpe31mdW5jdGlvbiB4ZShlKXtmb3IodmFyIHQ9MCxuPWUubGVuZ3RoLHI9XCJcIjt0PG47dCsrKXIrPWVbdF0udmFsdWU7cmV0dXJuIHJ9ZnVuY3Rpb24gYmUocyxlLHQpe3ZhciB1PWUuZGlyLGw9ZS5uZXh0LGM9bHx8dSxmPXQmJlwicGFyZW50Tm9kZVwiPT09YyxwPXIrKztyZXR1cm4gZS5maXJzdD9mdW5jdGlvbihlLHQsbil7d2hpbGUoZT1lW3VdKWlmKDE9PT1lLm5vZGVUeXBlfHxmKXJldHVybiBzKGUsdCxuKTtyZXR1cm4hMX06ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhPVtrLHBdO2lmKG4pe3doaWxlKGU9ZVt1XSlpZigoMT09PWUubm9kZVR5cGV8fGYpJiZzKGUsdCxuKSlyZXR1cm4hMH1lbHNlIHdoaWxlKGU9ZVt1XSlpZigxPT09ZS5ub2RlVHlwZXx8ZilpZihpPShvPWVbU118fChlW1NdPXt9KSlbZS51bmlxdWVJRF18fChvW2UudW5pcXVlSURdPXt9KSxsJiZsPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKWU9ZVt1XXx8ZTtlbHNle2lmKChyPWlbY10pJiZyWzBdPT09ayYmclsxXT09PXApcmV0dXJuIGFbMl09clsyXTtpZigoaVtjXT1hKVsyXT1zKGUsdCxuKSlyZXR1cm4hMH1yZXR1cm4hMX19ZnVuY3Rpb24gd2UoaSl7cmV0dXJuIDE8aS5sZW5ndGg/ZnVuY3Rpb24oZSx0LG4pe3ZhciByPWkubGVuZ3RoO3doaWxlKHItLSlpZighaVtyXShlLHQsbikpcmV0dXJuITE7cmV0dXJuITB9OmlbMF19ZnVuY3Rpb24gVGUoZSx0LG4scixpKXtmb3IodmFyIG8sYT1bXSxzPTAsdT1lLmxlbmd0aCxsPW51bGwhPXQ7czx1O3MrKykobz1lW3NdKSYmKG4mJiFuKG8scixpKXx8KGEucHVzaChvKSxsJiZ0LnB1c2gocykpKTtyZXR1cm4gYX1mdW5jdGlvbiBDZShkLGgsZyx2LHksZSl7cmV0dXJuIHYmJiF2W1NdJiYodj1DZSh2KSkseSYmIXlbU10mJih5PUNlKHksZSkpLGxlKGZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG8sYSxzPVtdLHU9W10sbD10Lmxlbmd0aCxjPWV8fGZ1bmN0aW9uKGUsdCxuKXtmb3IodmFyIHI9MCxpPXQubGVuZ3RoO3I8aTtyKyspc2UoZSx0W3JdLG4pO3JldHVybiBufShofHxcIipcIixuLm5vZGVUeXBlP1tuXTpuLFtdKSxmPSFkfHwhZSYmaD9jOlRlKGMscyxkLG4scikscD1nP3l8fChlP2Q6bHx8dik/W106dDpmO2lmKGcmJmcoZixwLG4sciksdil7aT1UZShwLHUpLHYoaSxbXSxuLHIpLG89aS5sZW5ndGg7d2hpbGUoby0tKShhPWlbb10pJiYocFt1W29dXT0hKGZbdVtvXV09YSkpfWlmKGUpe2lmKHl8fGQpe2lmKHkpe2k9W10sbz1wLmxlbmd0aDt3aGlsZShvLS0pKGE9cFtvXSkmJmkucHVzaChmW29dPWEpO3kobnVsbCxwPVtdLGkscil9bz1wLmxlbmd0aDt3aGlsZShvLS0pKGE9cFtvXSkmJi0xPChpPXk/UChlLGEpOnNbb10pJiYoZVtpXT0hKHRbaV09YSkpfX1lbHNlIHA9VGUocD09PXQ/cC5zcGxpY2UobCxwLmxlbmd0aCk6cCkseT95KG51bGwsdCxwLHIpOkguYXBwbHkodCxwKX0pfWZ1bmN0aW9uIEVlKGUpe2Zvcih2YXIgaSx0LG4scj1lLmxlbmd0aCxvPWIucmVsYXRpdmVbZVswXS50eXBlXSxhPW98fGIucmVsYXRpdmVbXCIgXCJdLHM9bz8xOjAsdT1iZShmdW5jdGlvbihlKXtyZXR1cm4gZT09PWl9LGEsITApLGw9YmUoZnVuY3Rpb24oZSl7cmV0dXJuLTE8UChpLGUpfSxhLCEwKSxjPVtmdW5jdGlvbihlLHQsbil7dmFyIHI9IW8mJihufHx0IT09dyl8fCgoaT10KS5ub2RlVHlwZT91KGUsdCxuKTpsKGUsdCxuKSk7cmV0dXJuIGk9bnVsbCxyfV07czxyO3MrKylpZih0PWIucmVsYXRpdmVbZVtzXS50eXBlXSljPVtiZSh3ZShjKSx0KV07ZWxzZXtpZigodD1iLmZpbHRlcltlW3NdLnR5cGVdLmFwcGx5KG51bGwsZVtzXS5tYXRjaGVzKSlbU10pe2ZvcihuPSsrcztuPHI7bisrKWlmKGIucmVsYXRpdmVbZVtuXS50eXBlXSlicmVhaztyZXR1cm4gQ2UoMTxzJiZ3ZShjKSwxPHMmJnhlKGUuc2xpY2UoMCxzLTEpLmNvbmNhdCh7dmFsdWU6XCIgXCI9PT1lW3MtMl0udHlwZT9cIipcIjpcIlwifSkpLnJlcGxhY2UoJCxcIiQxXCIpLHQsczxuJiZFZShlLnNsaWNlKHMsbikpLG48ciYmRWUoZT1lLnNsaWNlKG4pKSxuPHImJnhlKGUpKX1jLnB1c2godCl9cmV0dXJuIHdlKGMpfXJldHVybiBtZS5wcm90b3R5cGU9Yi5maWx0ZXJzPWIucHNldWRvcyxiLnNldEZpbHRlcnM9bmV3IG1lLGg9c2UudG9rZW5pemU9ZnVuY3Rpb24oZSx0KXt2YXIgbixyLGksbyxhLHMsdSxsPXhbZStcIiBcIl07aWYobClyZXR1cm4gdD8wOmwuc2xpY2UoMCk7YT1lLHM9W10sdT1iLnByZUZpbHRlcjt3aGlsZShhKXtmb3IobyBpbiBuJiYhKHI9Xy5leGVjKGEpKXx8KHImJihhPWEuc2xpY2UoclswXS5sZW5ndGgpfHxhKSxzLnB1c2goaT1bXSkpLG49ITEsKHI9ei5leGVjKGEpKSYmKG49ci5zaGlmdCgpLGkucHVzaCh7dmFsdWU6bix0eXBlOnJbMF0ucmVwbGFjZSgkLFwiIFwiKX0pLGE9YS5zbGljZShuLmxlbmd0aCkpLGIuZmlsdGVyKSEocj1HW29dLmV4ZWMoYSkpfHx1W29dJiYhKHI9dVtvXShyKSl8fChuPXIuc2hpZnQoKSxpLnB1c2goe3ZhbHVlOm4sdHlwZTpvLG1hdGNoZXM6cn0pLGE9YS5zbGljZShuLmxlbmd0aCkpO2lmKCFuKWJyZWFrfXJldHVybiB0P2EubGVuZ3RoOmE/c2UuZXJyb3IoZSk6eChlLHMpLnNsaWNlKDApfSxmPXNlLmNvbXBpbGU9ZnVuY3Rpb24oZSx0KXt2YXIgbix2LHksbSx4LHIsaT1bXSxvPVtdLGE9QVtlK1wiIFwiXTtpZighYSl7dHx8KHQ9aChlKSksbj10Lmxlbmd0aDt3aGlsZShuLS0pKGE9RWUodFtuXSkpW1NdP2kucHVzaChhKTpvLnB1c2goYSk7KGE9QShlLCh2PW8sbT0wPCh5PWkpLmxlbmd0aCx4PTA8di5sZW5ndGgscj1mdW5jdGlvbihlLHQsbixyLGkpe3ZhciBvLGEscyx1PTAsbD1cIjBcIixjPWUmJltdLGY9W10scD13LGQ9ZXx8eCYmYi5maW5kLlRBRyhcIipcIixpKSxoPWsrPW51bGw9PXA/MTpNYXRoLnJhbmRvbSgpfHwuMSxnPWQubGVuZ3RoO2ZvcihpJiYodz10PT1DfHx0fHxpKTtsIT09ZyYmbnVsbCE9KG89ZFtsXSk7bCsrKXtpZih4JiZvKXthPTAsdHx8by5vd25lckRvY3VtZW50PT1DfHwoVChvKSxuPSFFKTt3aGlsZShzPXZbYSsrXSlpZihzKG8sdHx8QyxuKSl7ci5wdXNoKG8pO2JyZWFrfWkmJihrPWgpfW0mJigobz0hcyYmbykmJnUtLSxlJiZjLnB1c2gobykpfWlmKHUrPWwsbSYmbCE9PXUpe2E9MDt3aGlsZShzPXlbYSsrXSlzKGMsZix0LG4pO2lmKGUpe2lmKDA8dSl3aGlsZShsLS0pY1tsXXx8ZltsXXx8KGZbbF09cS5jYWxsKHIpKTtmPVRlKGYpfUguYXBwbHkocixmKSxpJiYhZSYmMDxmLmxlbmd0aCYmMTx1K3kubGVuZ3RoJiZzZS51bmlxdWVTb3J0KHIpfXJldHVybiBpJiYoaz1oLHc9cCksY30sbT9sZShyKTpyKSkpLnNlbGVjdG9yPWV9cmV0dXJuIGF9LGc9c2Uuc2VsZWN0PWZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG8sYSxzLHUsbD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlLGM9IXImJmgoZT1sLnNlbGVjdG9yfHxlKTtpZihuPW58fFtdLDE9PT1jLmxlbmd0aCl7aWYoMjwobz1jWzBdPWNbMF0uc2xpY2UoMCkpLmxlbmd0aCYmXCJJRFwiPT09KGE9b1swXSkudHlwZSYmOT09PXQubm9kZVR5cGUmJkUmJmIucmVsYXRpdmVbb1sxXS50eXBlXSl7aWYoISh0PShiLmZpbmQuSUQoYS5tYXRjaGVzWzBdLnJlcGxhY2UodGUsbmUpLHQpfHxbXSlbMF0pKXJldHVybiBuO2wmJih0PXQucGFyZW50Tm9kZSksZT1lLnNsaWNlKG8uc2hpZnQoKS52YWx1ZS5sZW5ndGgpfWk9Ry5uZWVkc0NvbnRleHQudGVzdChlKT8wOm8ubGVuZ3RoO3doaWxlKGktLSl7aWYoYT1vW2ldLGIucmVsYXRpdmVbcz1hLnR5cGVdKWJyZWFrO2lmKCh1PWIuZmluZFtzXSkmJihyPXUoYS5tYXRjaGVzWzBdLnJlcGxhY2UodGUsbmUpLGVlLnRlc3Qob1swXS50eXBlKSYmeWUodC5wYXJlbnROb2RlKXx8dCkpKXtpZihvLnNwbGljZShpLDEpLCEoZT1yLmxlbmd0aCYmeGUobykpKXJldHVybiBILmFwcGx5KG4sciksbjticmVha319fXJldHVybihsfHxmKGUsYykpKHIsdCwhRSxuLCF0fHxlZS50ZXN0KGUpJiZ5ZSh0LnBhcmVudE5vZGUpfHx0KSxufSxkLnNvcnRTdGFibGU9Uy5zcGxpdChcIlwiKS5zb3J0KEQpLmpvaW4oXCJcIik9PT1TLGQuZGV0ZWN0RHVwbGljYXRlcz0hIWwsVCgpLGQuc29ydERldGFjaGVkPWNlKGZ1bmN0aW9uKGUpe3JldHVybiAxJmUuY29tcGFyZURvY3VtZW50UG9zaXRpb24oQy5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIikpfSksY2UoZnVuY3Rpb24oZSl7cmV0dXJuIGUuaW5uZXJIVE1MPVwiPGEgaHJlZj0nIyc+PC9hPlwiLFwiI1wiPT09ZS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcImhyZWZcIil9KXx8ZmUoXCJ0eXBlfGhyZWZ8aGVpZ2h0fHdpZHRoXCIsZnVuY3Rpb24oZSx0LG4pe2lmKCFuKXJldHVybiBlLmdldEF0dHJpYnV0ZSh0LFwidHlwZVwiPT09dC50b0xvd2VyQ2FzZSgpPzE6Mil9KSxkLmF0dHJpYnV0ZXMmJmNlKGZ1bmN0aW9uKGUpe3JldHVybiBlLmlubmVySFRNTD1cIjxpbnB1dC8+XCIsZS5maXJzdENoaWxkLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCJcIiksXCJcIj09PWUuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKX0pfHxmZShcInZhbHVlXCIsZnVuY3Rpb24oZSx0LG4pe2lmKCFuJiZcImlucHV0XCI9PT1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpcmV0dXJuIGUuZGVmYXVsdFZhbHVlfSksY2UoZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWUuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIil9KXx8ZmUoUixmdW5jdGlvbihlLHQsbil7dmFyIHI7aWYoIW4pcmV0dXJuITA9PT1lW3RdP3QudG9Mb3dlckNhc2UoKToocj1lLmdldEF0dHJpYnV0ZU5vZGUodCkpJiZyLnNwZWNpZmllZD9yLnZhbHVlOm51bGx9KSxzZX0oQyk7Uy5maW5kPWQsUy5leHByPWQuc2VsZWN0b3JzLFMuZXhwcltcIjpcIl09Uy5leHByLnBzZXVkb3MsUy51bmlxdWVTb3J0PVMudW5pcXVlPWQudW5pcXVlU29ydCxTLnRleHQ9ZC5nZXRUZXh0LFMuaXNYTUxEb2M9ZC5pc1hNTCxTLmNvbnRhaW5zPWQuY29udGFpbnMsUy5lc2NhcGVTZWxlY3Rvcj1kLmVzY2FwZTt2YXIgaD1mdW5jdGlvbihlLHQsbil7dmFyIHI9W10saT12b2lkIDAhPT1uO3doaWxlKChlPWVbdF0pJiY5IT09ZS5ub2RlVHlwZSlpZigxPT09ZS5ub2RlVHlwZSl7aWYoaSYmUyhlKS5pcyhuKSlicmVhaztyLnB1c2goZSl9cmV0dXJuIHJ9LFQ9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49W107ZTtlPWUubmV4dFNpYmxpbmcpMT09PWUubm9kZVR5cGUmJmUhPT10JiZuLnB1c2goZSk7cmV0dXJuIG59LGs9Uy5leHByLm1hdGNoLm5lZWRzQ29udGV4dDtmdW5jdGlvbiBBKGUsdCl7cmV0dXJuIGUubm9kZU5hbWUmJmUubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXQudG9Mb3dlckNhc2UoKX12YXIgTj0vXjwoW2Etel1bXlxcL1xcMD46XFx4MjBcXHRcXHJcXG5cXGZdKilbXFx4MjBcXHRcXHJcXG5cXGZdKlxcLz8+KD86PFxcL1xcMT58KSQvaTtmdW5jdGlvbiBEKGUsbixyKXtyZXR1cm4gbShuKT9TLmdyZXAoZSxmdW5jdGlvbihlLHQpe3JldHVybiEhbi5jYWxsKGUsdCxlKSE9PXJ9KTpuLm5vZGVUeXBlP1MuZ3JlcChlLGZ1bmN0aW9uKGUpe3JldHVybiBlPT09biE9PXJ9KTpcInN0cmluZ1wiIT10eXBlb2Ygbj9TLmdyZXAoZSxmdW5jdGlvbihlKXtyZXR1cm4tMTxpLmNhbGwobixlKSE9PXJ9KTpTLmZpbHRlcihuLGUscil9Uy5maWx0ZXI9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPXRbMF07cmV0dXJuIG4mJihlPVwiOm5vdChcIitlK1wiKVwiKSwxPT09dC5sZW5ndGgmJjE9PT1yLm5vZGVUeXBlP1MuZmluZC5tYXRjaGVzU2VsZWN0b3IocixlKT9bcl06W106Uy5maW5kLm1hdGNoZXMoZSxTLmdyZXAodCxmdW5jdGlvbihlKXtyZXR1cm4gMT09PWUubm9kZVR5cGV9KSl9LFMuZm4uZXh0ZW5kKHtmaW5kOmZ1bmN0aW9uKGUpe3ZhciB0LG4scj10aGlzLmxlbmd0aCxpPXRoaXM7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUpcmV0dXJuIHRoaXMucHVzaFN0YWNrKFMoZSkuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKHQ9MDt0PHI7dCsrKWlmKFMuY29udGFpbnMoaVt0XSx0aGlzKSlyZXR1cm4hMH0pKTtmb3Iobj10aGlzLnB1c2hTdGFjayhbXSksdD0wO3Q8cjt0KyspUy5maW5kKGUsaVt0XSxuKTtyZXR1cm4gMTxyP1MudW5pcXVlU29ydChuKTpufSxmaWx0ZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKEQodGhpcyxlfHxbXSwhMSkpfSxub3Q6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKEQodGhpcyxlfHxbXSwhMCkpfSxpczpmdW5jdGlvbihlKXtyZXR1cm4hIUQodGhpcyxcInN0cmluZ1wiPT10eXBlb2YgZSYmay50ZXN0KGUpP1MoZSk6ZXx8W10sITEpLmxlbmd0aH19KTt2YXIgaixxPS9eKD86XFxzKig8W1xcd1xcV10rPilbXj5dKnwjKFtcXHctXSspKSQvOyhTLmZuLmluaXQ9ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGk7aWYoIWUpcmV0dXJuIHRoaXM7aWYobj1ufHxqLFwic3RyaW5nXCI9PXR5cGVvZiBlKXtpZighKHI9XCI8XCI9PT1lWzBdJiZcIj5cIj09PWVbZS5sZW5ndGgtMV0mJjM8PWUubGVuZ3RoP1tudWxsLGUsbnVsbF06cS5leGVjKGUpKXx8IXJbMV0mJnQpcmV0dXJuIXR8fHQuanF1ZXJ5Pyh0fHxuKS5maW5kKGUpOnRoaXMuY29uc3RydWN0b3IodCkuZmluZChlKTtpZihyWzFdKXtpZih0PXQgaW5zdGFuY2VvZiBTP3RbMF06dCxTLm1lcmdlKHRoaXMsUy5wYXJzZUhUTUwoclsxXSx0JiZ0Lm5vZGVUeXBlP3Qub3duZXJEb2N1bWVudHx8dDpFLCEwKSksTi50ZXN0KHJbMV0pJiZTLmlzUGxhaW5PYmplY3QodCkpZm9yKHIgaW4gdCltKHRoaXNbcl0pP3RoaXNbcl0odFtyXSk6dGhpcy5hdHRyKHIsdFtyXSk7cmV0dXJuIHRoaXN9cmV0dXJuKGk9RS5nZXRFbGVtZW50QnlJZChyWzJdKSkmJih0aGlzWzBdPWksdGhpcy5sZW5ndGg9MSksdGhpc31yZXR1cm4gZS5ub2RlVHlwZT8odGhpc1swXT1lLHRoaXMubGVuZ3RoPTEsdGhpcyk6bShlKT92b2lkIDAhPT1uLnJlYWR5P24ucmVhZHkoZSk6ZShTKTpTLm1ha2VBcnJheShlLHRoaXMpfSkucHJvdG90eXBlPVMuZm4saj1TKEUpO3ZhciBMPS9eKD86cGFyZW50c3xwcmV2KD86VW50aWx8QWxsKSkvLEg9e2NoaWxkcmVuOiEwLGNvbnRlbnRzOiEwLG5leHQ6ITAscHJldjohMH07ZnVuY3Rpb24gTyhlLHQpe3doaWxlKChlPWVbdF0pJiYxIT09ZS5ub2RlVHlwZSk7cmV0dXJuIGV9Uy5mbi5leHRlbmQoe2hhczpmdW5jdGlvbihlKXt2YXIgdD1TKGUsdGhpcyksbj10Lmxlbmd0aDtyZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24oKXtmb3IodmFyIGU9MDtlPG47ZSsrKWlmKFMuY29udGFpbnModGhpcyx0W2VdKSlyZXR1cm4hMH0pfSxjbG9zZXN0OmZ1bmN0aW9uKGUsdCl7dmFyIG4scj0wLGk9dGhpcy5sZW5ndGgsbz1bXSxhPVwic3RyaW5nXCIhPXR5cGVvZiBlJiZTKGUpO2lmKCFrLnRlc3QoZSkpZm9yKDtyPGk7cisrKWZvcihuPXRoaXNbcl07biYmbiE9PXQ7bj1uLnBhcmVudE5vZGUpaWYobi5ub2RlVHlwZTwxMSYmKGE/LTE8YS5pbmRleChuKToxPT09bi5ub2RlVHlwZSYmUy5maW5kLm1hdGNoZXNTZWxlY3RvcihuLGUpKSl7by5wdXNoKG4pO2JyZWFrfXJldHVybiB0aGlzLnB1c2hTdGFjaygxPG8ubGVuZ3RoP1MudW5pcXVlU29ydChvKTpvKX0saW5kZXg6ZnVuY3Rpb24oZSl7cmV0dXJuIGU/XCJzdHJpbmdcIj09dHlwZW9mIGU/aS5jYWxsKFMoZSksdGhpc1swXSk6aS5jYWxsKHRoaXMsZS5qcXVlcnk/ZVswXTplKTp0aGlzWzBdJiZ0aGlzWzBdLnBhcmVudE5vZGU/dGhpcy5maXJzdCgpLnByZXZBbGwoKS5sZW5ndGg6LTF9LGFkZDpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLnB1c2hTdGFjayhTLnVuaXF1ZVNvcnQoUy5tZXJnZSh0aGlzLmdldCgpLFMoZSx0KSkpKX0sYWRkQmFjazpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5hZGQobnVsbD09ZT90aGlzLnByZXZPYmplY3Q6dGhpcy5wcmV2T2JqZWN0LmZpbHRlcihlKSl9fSksUy5lYWNoKHtwYXJlbnQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5wYXJlbnROb2RlO3JldHVybiB0JiYxMSE9PXQubm9kZVR5cGU/dDpudWxsfSxwYXJlbnRzOmZ1bmN0aW9uKGUpe3JldHVybiBoKGUsXCJwYXJlbnROb2RlXCIpfSxwYXJlbnRzVW50aWw6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBoKGUsXCJwYXJlbnROb2RlXCIsbil9LG5leHQ6ZnVuY3Rpb24oZSl7cmV0dXJuIE8oZSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2OmZ1bmN0aW9uKGUpe3JldHVybiBPKGUsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRBbGw6ZnVuY3Rpb24oZSl7cmV0dXJuIGgoZSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2QWxsOmZ1bmN0aW9uKGUpe3JldHVybiBoKGUsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRVbnRpbDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIGgoZSxcIm5leHRTaWJsaW5nXCIsbil9LHByZXZVbnRpbDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIGgoZSxcInByZXZpb3VzU2libGluZ1wiLG4pfSxzaWJsaW5nczpmdW5jdGlvbihlKXtyZXR1cm4gVCgoZS5wYXJlbnROb2RlfHx7fSkuZmlyc3RDaGlsZCxlKX0sY2hpbGRyZW46ZnVuY3Rpb24oZSl7cmV0dXJuIFQoZS5maXJzdENoaWxkKX0sY29udGVudHM6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGwhPWUuY29udGVudERvY3VtZW50JiZyKGUuY29udGVudERvY3VtZW50KT9lLmNvbnRlbnREb2N1bWVudDooQShlLFwidGVtcGxhdGVcIikmJihlPWUuY29udGVudHx8ZSksUy5tZXJnZShbXSxlLmNoaWxkTm9kZXMpKX19LGZ1bmN0aW9uKHIsaSl7Uy5mbltyXT1mdW5jdGlvbihlLHQpe3ZhciBuPVMubWFwKHRoaXMsaSxlKTtyZXR1cm5cIlVudGlsXCIhPT1yLnNsaWNlKC01KSYmKHQ9ZSksdCYmXCJzdHJpbmdcIj09dHlwZW9mIHQmJihuPVMuZmlsdGVyKHQsbikpLDE8dGhpcy5sZW5ndGgmJihIW3JdfHxTLnVuaXF1ZVNvcnQobiksTC50ZXN0KHIpJiZuLnJldmVyc2UoKSksdGhpcy5wdXNoU3RhY2sobil9fSk7dmFyIFA9L1teXFx4MjBcXHRcXHJcXG5cXGZdKy9nO2Z1bmN0aW9uIFIoZSl7cmV0dXJuIGV9ZnVuY3Rpb24gTShlKXt0aHJvdyBlfWZ1bmN0aW9uIEkoZSx0LG4scil7dmFyIGk7dHJ5e2UmJm0oaT1lLnByb21pc2UpP2kuY2FsbChlKS5kb25lKHQpLmZhaWwobik6ZSYmbShpPWUudGhlbik/aS5jYWxsKGUsdCxuKTp0LmFwcGx5KHZvaWQgMCxbZV0uc2xpY2UocikpfWNhdGNoKGUpe24uYXBwbHkodm9pZCAwLFtlXSl9fVMuQ2FsbGJhY2tzPWZ1bmN0aW9uKHIpe3ZhciBlLG47cj1cInN0cmluZ1wiPT10eXBlb2Ygcj8oZT1yLG49e30sUy5lYWNoKGUubWF0Y2goUCl8fFtdLGZ1bmN0aW9uKGUsdCl7blt0XT0hMH0pLG4pOlMuZXh0ZW5kKHt9LHIpO3ZhciBpLHQsbyxhLHM9W10sdT1bXSxsPS0xLGM9ZnVuY3Rpb24oKXtmb3IoYT1hfHxyLm9uY2Usbz1pPSEwO3UubGVuZ3RoO2w9LTEpe3Q9dS5zaGlmdCgpO3doaWxlKCsrbDxzLmxlbmd0aCkhMT09PXNbbF0uYXBwbHkodFswXSx0WzFdKSYmci5zdG9wT25GYWxzZSYmKGw9cy5sZW5ndGgsdD0hMSl9ci5tZW1vcnl8fCh0PSExKSxpPSExLGEmJihzPXQ/W106XCJcIil9LGY9e2FkZDpmdW5jdGlvbigpe3JldHVybiBzJiYodCYmIWkmJihsPXMubGVuZ3RoLTEsdS5wdXNoKHQpKSxmdW5jdGlvbiBuKGUpe1MuZWFjaChlLGZ1bmN0aW9uKGUsdCl7bSh0KT9yLnVuaXF1ZSYmZi5oYXModCl8fHMucHVzaCh0KTp0JiZ0Lmxlbmd0aCYmXCJzdHJpbmdcIiE9PXcodCkmJm4odCl9KX0oYXJndW1lbnRzKSx0JiYhaSYmYygpKSx0aGlzfSxyZW1vdmU6ZnVuY3Rpb24oKXtyZXR1cm4gUy5lYWNoKGFyZ3VtZW50cyxmdW5jdGlvbihlLHQpe3ZhciBuO3doaWxlKC0xPChuPVMuaW5BcnJheSh0LHMsbikpKXMuc3BsaWNlKG4sMSksbjw9bCYmbC0tfSksdGhpc30saGFzOmZ1bmN0aW9uKGUpe3JldHVybiBlPy0xPFMuaW5BcnJheShlLHMpOjA8cy5sZW5ndGh9LGVtcHR5OmZ1bmN0aW9uKCl7cmV0dXJuIHMmJihzPVtdKSx0aGlzfSxkaXNhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIGE9dT1bXSxzPXQ9XCJcIix0aGlzfSxkaXNhYmxlZDpmdW5jdGlvbigpe3JldHVybiFzfSxsb2NrOmZ1bmN0aW9uKCl7cmV0dXJuIGE9dT1bXSx0fHxpfHwocz10PVwiXCIpLHRoaXN9LGxvY2tlZDpmdW5jdGlvbigpe3JldHVybiEhYX0sZmlyZVdpdGg6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gYXx8KHQ9W2UsKHQ9dHx8W10pLnNsaWNlP3Quc2xpY2UoKTp0XSx1LnB1c2godCksaXx8YygpKSx0aGlzfSxmaXJlOmZ1bmN0aW9uKCl7cmV0dXJuIGYuZmlyZVdpdGgodGhpcyxhcmd1bWVudHMpLHRoaXN9LGZpcmVkOmZ1bmN0aW9uKCl7cmV0dXJuISFvfX07cmV0dXJuIGZ9LFMuZXh0ZW5kKHtEZWZlcnJlZDpmdW5jdGlvbihlKXt2YXIgbz1bW1wibm90aWZ5XCIsXCJwcm9ncmVzc1wiLFMuQ2FsbGJhY2tzKFwibWVtb3J5XCIpLFMuQ2FsbGJhY2tzKFwibWVtb3J5XCIpLDJdLFtcInJlc29sdmVcIixcImRvbmVcIixTLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLFMuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksMCxcInJlc29sdmVkXCJdLFtcInJlamVjdFwiLFwiZmFpbFwiLFMuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksUy5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSwxLFwicmVqZWN0ZWRcIl1dLGk9XCJwZW5kaW5nXCIsYT17c3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gaX0sYWx3YXlzOmZ1bmN0aW9uKCl7cmV0dXJuIHMuZG9uZShhcmd1bWVudHMpLmZhaWwoYXJndW1lbnRzKSx0aGlzfSxcImNhdGNoXCI6ZnVuY3Rpb24oZSl7cmV0dXJuIGEudGhlbihudWxsLGUpfSxwaXBlOmZ1bmN0aW9uKCl7dmFyIGk9YXJndW1lbnRzO3JldHVybiBTLkRlZmVycmVkKGZ1bmN0aW9uKHIpe1MuZWFjaChvLGZ1bmN0aW9uKGUsdCl7dmFyIG49bShpW3RbNF1dKSYmaVt0WzRdXTtzW3RbMV1dKGZ1bmN0aW9uKCl7dmFyIGU9biYmbi5hcHBseSh0aGlzLGFyZ3VtZW50cyk7ZSYmbShlLnByb21pc2UpP2UucHJvbWlzZSgpLnByb2dyZXNzKHIubm90aWZ5KS5kb25lKHIucmVzb2x2ZSkuZmFpbChyLnJlamVjdCk6clt0WzBdK1wiV2l0aFwiXSh0aGlzLG4/W2VdOmFyZ3VtZW50cyl9KX0pLGk9bnVsbH0pLnByb21pc2UoKX0sdGhlbjpmdW5jdGlvbih0LG4scil7dmFyIHU9MDtmdW5jdGlvbiBsKGksbyxhLHMpe3JldHVybiBmdW5jdGlvbigpe3ZhciBuPXRoaXMscj1hcmd1bWVudHMsZT1mdW5jdGlvbigpe3ZhciBlLHQ7aWYoIShpPHUpKXtpZigoZT1hLmFwcGx5KG4scikpPT09by5wcm9taXNlKCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZW5hYmxlIHNlbGYtcmVzb2x1dGlvblwiKTt0PWUmJihcIm9iamVjdFwiPT10eXBlb2YgZXx8XCJmdW5jdGlvblwiPT10eXBlb2YgZSkmJmUudGhlbixtKHQpP3M/dC5jYWxsKGUsbCh1LG8sUixzKSxsKHUsbyxNLHMpKToodSsrLHQuY2FsbChlLGwodSxvLFIscyksbCh1LG8sTSxzKSxsKHUsbyxSLG8ubm90aWZ5V2l0aCkpKTooYSE9PVImJihuPXZvaWQgMCxyPVtlXSksKHN8fG8ucmVzb2x2ZVdpdGgpKG4scikpfX0sdD1zP2U6ZnVuY3Rpb24oKXt0cnl7ZSgpfWNhdGNoKGUpe1MuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayYmUy5EZWZlcnJlZC5leGNlcHRpb25Ib29rKGUsdC5zdGFja1RyYWNlKSx1PD1pKzEmJihhIT09TSYmKG49dm9pZCAwLHI9W2VdKSxvLnJlamVjdFdpdGgobixyKSl9fTtpP3QoKTooUy5EZWZlcnJlZC5nZXRTdGFja0hvb2smJih0LnN0YWNrVHJhY2U9Uy5EZWZlcnJlZC5nZXRTdGFja0hvb2soKSksQy5zZXRUaW1lb3V0KHQpKX19cmV0dXJuIFMuRGVmZXJyZWQoZnVuY3Rpb24oZSl7b1swXVszXS5hZGQobCgwLGUsbShyKT9yOlIsZS5ub3RpZnlXaXRoKSksb1sxXVszXS5hZGQobCgwLGUsbSh0KT90OlIpKSxvWzJdWzNdLmFkZChsKDAsZSxtKG4pP246TSkpfSkucHJvbWlzZSgpfSxwcm9taXNlOmZ1bmN0aW9uKGUpe3JldHVybiBudWxsIT1lP1MuZXh0ZW5kKGUsYSk6YX19LHM9e307cmV0dXJuIFMuZWFjaChvLGZ1bmN0aW9uKGUsdCl7dmFyIG49dFsyXSxyPXRbNV07YVt0WzFdXT1uLmFkZCxyJiZuLmFkZChmdW5jdGlvbigpe2k9cn0sb1szLWVdWzJdLmRpc2FibGUsb1szLWVdWzNdLmRpc2FibGUsb1swXVsyXS5sb2NrLG9bMF1bM10ubG9jayksbi5hZGQodFszXS5maXJlKSxzW3RbMF1dPWZ1bmN0aW9uKCl7cmV0dXJuIHNbdFswXStcIldpdGhcIl0odGhpcz09PXM/dm9pZCAwOnRoaXMsYXJndW1lbnRzKSx0aGlzfSxzW3RbMF0rXCJXaXRoXCJdPW4uZmlyZVdpdGh9KSxhLnByb21pc2UocyksZSYmZS5jYWxsKHMscyksc30sd2hlbjpmdW5jdGlvbihlKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoLHQ9bixyPUFycmF5KHQpLGk9cy5jYWxsKGFyZ3VtZW50cyksbz1TLkRlZmVycmVkKCksYT1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7clt0XT10aGlzLGlbdF09MTxhcmd1bWVudHMubGVuZ3RoP3MuY2FsbChhcmd1bWVudHMpOmUsLS1ufHxvLnJlc29sdmVXaXRoKHIsaSl9fTtpZihuPD0xJiYoSShlLG8uZG9uZShhKHQpKS5yZXNvbHZlLG8ucmVqZWN0LCFuKSxcInBlbmRpbmdcIj09PW8uc3RhdGUoKXx8bShpW3RdJiZpW3RdLnRoZW4pKSlyZXR1cm4gby50aGVuKCk7d2hpbGUodC0tKUkoaVt0XSxhKHQpLG8ucmVqZWN0KTtyZXR1cm4gby5wcm9taXNlKCl9fSk7dmFyIFc9L14oRXZhbHxJbnRlcm5hbHxSYW5nZXxSZWZlcmVuY2V8U3ludGF4fFR5cGV8VVJJKUVycm9yJC87Uy5EZWZlcnJlZC5leGNlcHRpb25Ib29rPWZ1bmN0aW9uKGUsdCl7Qy5jb25zb2xlJiZDLmNvbnNvbGUud2FybiYmZSYmVy50ZXN0KGUubmFtZSkmJkMuY29uc29sZS53YXJuKFwialF1ZXJ5LkRlZmVycmVkIGV4Y2VwdGlvbjogXCIrZS5tZXNzYWdlLGUuc3RhY2ssdCl9LFMucmVhZHlFeGNlcHRpb249ZnVuY3Rpb24oZSl7Qy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgZX0pfTt2YXIgRj1TLkRlZmVycmVkKCk7ZnVuY3Rpb24gQigpe0UucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixCKSxDLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsQiksUy5yZWFkeSgpfVMuZm4ucmVhZHk9ZnVuY3Rpb24oZSl7cmV0dXJuIEYudGhlbihlKVtcImNhdGNoXCJdKGZ1bmN0aW9uKGUpe1MucmVhZHlFeGNlcHRpb24oZSl9KSx0aGlzfSxTLmV4dGVuZCh7aXNSZWFkeTohMSxyZWFkeVdhaXQ6MSxyZWFkeTpmdW5jdGlvbihlKXsoITA9PT1lPy0tUy5yZWFkeVdhaXQ6Uy5pc1JlYWR5KXx8KFMuaXNSZWFkeT0hMCkhPT1lJiYwPC0tUy5yZWFkeVdhaXR8fEYucmVzb2x2ZVdpdGgoRSxbU10pfX0pLFMucmVhZHkudGhlbj1GLnRoZW4sXCJjb21wbGV0ZVwiPT09RS5yZWFkeVN0YXRlfHxcImxvYWRpbmdcIiE9PUUucmVhZHlTdGF0ZSYmIUUuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsP0Muc2V0VGltZW91dChTLnJlYWR5KTooRS5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLEIpLEMuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixCKSk7dmFyICQ9ZnVuY3Rpb24oZSx0LG4scixpLG8sYSl7dmFyIHM9MCx1PWUubGVuZ3RoLGw9bnVsbD09bjtpZihcIm9iamVjdFwiPT09dyhuKSlmb3IocyBpbiBpPSEwLG4pJChlLHQscyxuW3NdLCEwLG8sYSk7ZWxzZSBpZih2b2lkIDAhPT1yJiYoaT0hMCxtKHIpfHwoYT0hMCksbCYmKGE/KHQuY2FsbChlLHIpLHQ9bnVsbCk6KGw9dCx0PWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gbC5jYWxsKFMoZSksbil9KSksdCkpZm9yKDtzPHU7cysrKXQoZVtzXSxuLGE/cjpyLmNhbGwoZVtzXSxzLHQoZVtzXSxuKSkpO3JldHVybiBpP2U6bD90LmNhbGwoZSk6dT90KGVbMF0sbik6b30sXz0vXi1tcy0vLHo9Ly0oW2Etel0pL2c7ZnVuY3Rpb24gVShlLHQpe3JldHVybiB0LnRvVXBwZXJDYXNlKCl9ZnVuY3Rpb24gWChlKXtyZXR1cm4gZS5yZXBsYWNlKF8sXCJtcy1cIikucmVwbGFjZSh6LFUpfXZhciBWPWZ1bmN0aW9uKGUpe3JldHVybiAxPT09ZS5ub2RlVHlwZXx8OT09PWUubm9kZVR5cGV8fCErZS5ub2RlVHlwZX07ZnVuY3Rpb24gRygpe3RoaXMuZXhwYW5kbz1TLmV4cGFuZG8rRy51aWQrK31HLnVpZD0xLEcucHJvdG90eXBlPXtjYWNoZTpmdW5jdGlvbihlKXt2YXIgdD1lW3RoaXMuZXhwYW5kb107cmV0dXJuIHR8fCh0PXt9LFYoZSkmJihlLm5vZGVUeXBlP2VbdGhpcy5leHBhbmRvXT10Ok9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHRoaXMuZXhwYW5kbyx7dmFsdWU6dCxjb25maWd1cmFibGU6ITB9KSkpLHR9LHNldDpmdW5jdGlvbihlLHQsbil7dmFyIHIsaT10aGlzLmNhY2hlKGUpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KWlbWCh0KV09bjtlbHNlIGZvcihyIGluIHQpaVtYKHIpXT10W3JdO3JldHVybiBpfSxnZXQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdm9pZCAwPT09dD90aGlzLmNhY2hlKGUpOmVbdGhpcy5leHBhbmRvXSYmZVt0aGlzLmV4cGFuZG9dW1godCldfSxhY2Nlc3M6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiB2b2lkIDA9PT10fHx0JiZcInN0cmluZ1wiPT10eXBlb2YgdCYmdm9pZCAwPT09bj90aGlzLmdldChlLHQpOih0aGlzLnNldChlLHQsbiksdm9pZCAwIT09bj9uOnQpfSxyZW1vdmU6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPWVbdGhpcy5leHBhbmRvXTtpZih2b2lkIDAhPT1yKXtpZih2b2lkIDAhPT10KXtuPSh0PUFycmF5LmlzQXJyYXkodCk/dC5tYXAoWCk6KHQ9WCh0KSlpbiByP1t0XTp0Lm1hdGNoKFApfHxbXSkubGVuZ3RoO3doaWxlKG4tLSlkZWxldGUgclt0W25dXX0odm9pZCAwPT09dHx8Uy5pc0VtcHR5T2JqZWN0KHIpKSYmKGUubm9kZVR5cGU/ZVt0aGlzLmV4cGFuZG9dPXZvaWQgMDpkZWxldGUgZVt0aGlzLmV4cGFuZG9dKX19LGhhc0RhdGE6ZnVuY3Rpb24oZSl7dmFyIHQ9ZVt0aGlzLmV4cGFuZG9dO3JldHVybiB2b2lkIDAhPT10JiYhUy5pc0VtcHR5T2JqZWN0KHQpfX07dmFyIFk9bmV3IEcsUT1uZXcgRyxKPS9eKD86XFx7W1xcd1xcV10qXFx9fFxcW1tcXHdcXFddKlxcXSkkLyxLPS9bQS1aXS9nO2Z1bmN0aW9uIFooZSx0LG4pe3ZhciByLGk7aWYodm9pZCAwPT09biYmMT09PWUubm9kZVR5cGUpaWYocj1cImRhdGEtXCIrdC5yZXBsYWNlKEssXCItJCZcIikudG9Mb3dlckNhc2UoKSxcInN0cmluZ1wiPT10eXBlb2Yobj1lLmdldEF0dHJpYnV0ZShyKSkpe3RyeXtuPVwidHJ1ZVwiPT09KGk9bil8fFwiZmFsc2VcIiE9PWkmJihcIm51bGxcIj09PWk/bnVsbDppPT09K2krXCJcIj8raTpKLnRlc3QoaSk/SlNPTi5wYXJzZShpKTppKX1jYXRjaChlKXt9US5zZXQoZSx0LG4pfWVsc2Ugbj12b2lkIDA7cmV0dXJuIG59Uy5leHRlbmQoe2hhc0RhdGE6ZnVuY3Rpb24oZSl7cmV0dXJuIFEuaGFzRGF0YShlKXx8WS5oYXNEYXRhKGUpfSxkYXRhOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gUS5hY2Nlc3MoZSx0LG4pfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGUsdCl7US5yZW1vdmUoZSx0KX0sX2RhdGE6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBZLmFjY2VzcyhlLHQsbil9LF9yZW1vdmVEYXRhOmZ1bmN0aW9uKGUsdCl7WS5yZW1vdmUoZSx0KX19KSxTLmZuLmV4dGVuZCh7ZGF0YTpmdW5jdGlvbihuLGUpe3ZhciB0LHIsaSxvPXRoaXNbMF0sYT1vJiZvLmF0dHJpYnV0ZXM7aWYodm9pZCAwPT09bil7aWYodGhpcy5sZW5ndGgmJihpPVEuZ2V0KG8pLDE9PT1vLm5vZGVUeXBlJiYhWS5nZXQobyxcImhhc0RhdGFBdHRyc1wiKSkpe3Q9YS5sZW5ndGg7d2hpbGUodC0tKWFbdF0mJjA9PT0ocj1hW3RdLm5hbWUpLmluZGV4T2YoXCJkYXRhLVwiKSYmKHI9WChyLnNsaWNlKDUpKSxaKG8scixpW3JdKSk7WS5zZXQobyxcImhhc0RhdGFBdHRyc1wiLCEwKX1yZXR1cm4gaX1yZXR1cm5cIm9iamVjdFwiPT10eXBlb2Ygbj90aGlzLmVhY2goZnVuY3Rpb24oKXtRLnNldCh0aGlzLG4pfSk6JCh0aGlzLGZ1bmN0aW9uKGUpe3ZhciB0O2lmKG8mJnZvaWQgMD09PWUpcmV0dXJuIHZvaWQgMCE9PSh0PVEuZ2V0KG8sbikpP3Q6dm9pZCAwIT09KHQ9WihvLG4pKT90OnZvaWQgMDt0aGlzLmVhY2goZnVuY3Rpb24oKXtRLnNldCh0aGlzLG4sZSl9KX0sbnVsbCxlLDE8YXJndW1lbnRzLmxlbmd0aCxudWxsLCEwKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7US5yZW1vdmUodGhpcyxlKX0pfX0pLFMuZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbihlLHQsbil7dmFyIHI7aWYoZSlyZXR1cm4gdD0odHx8XCJmeFwiKStcInF1ZXVlXCIscj1ZLmdldChlLHQpLG4mJighcnx8QXJyYXkuaXNBcnJheShuKT9yPVkuYWNjZXNzKGUsdCxTLm1ha2VBcnJheShuKSk6ci5wdXNoKG4pKSxyfHxbXX0sZGVxdWV1ZTpmdW5jdGlvbihlLHQpe3Q9dHx8XCJmeFwiO3ZhciBuPVMucXVldWUoZSx0KSxyPW4ubGVuZ3RoLGk9bi5zaGlmdCgpLG89Uy5fcXVldWVIb29rcyhlLHQpO1wiaW5wcm9ncmVzc1wiPT09aSYmKGk9bi5zaGlmdCgpLHItLSksaSYmKFwiZnhcIj09PXQmJm4udW5zaGlmdChcImlucHJvZ3Jlc3NcIiksZGVsZXRlIG8uc3RvcCxpLmNhbGwoZSxmdW5jdGlvbigpe1MuZGVxdWV1ZShlLHQpfSxvKSksIXImJm8mJm8uZW1wdHkuZmlyZSgpfSxfcXVldWVIb29rczpmdW5jdGlvbihlLHQpe3ZhciBuPXQrXCJxdWV1ZUhvb2tzXCI7cmV0dXJuIFkuZ2V0KGUsbil8fFkuYWNjZXNzKGUsbix7ZW1wdHk6Uy5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKS5hZGQoZnVuY3Rpb24oKXtZLnJlbW92ZShlLFt0K1wicXVldWVcIixuXSl9KX0pfX0pLFMuZm4uZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbih0LG4pe3ZhciBlPTI7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIHQmJihuPXQsdD1cImZ4XCIsZS0tKSxhcmd1bWVudHMubGVuZ3RoPGU/Uy5xdWV1ZSh0aGlzWzBdLHQpOnZvaWQgMD09PW4/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZT1TLnF1ZXVlKHRoaXMsdCxuKTtTLl9xdWV1ZUhvb2tzKHRoaXMsdCksXCJmeFwiPT09dCYmXCJpbnByb2dyZXNzXCIhPT1lWzBdJiZTLmRlcXVldWUodGhpcyx0KX0pfSxkZXF1ZXVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtTLmRlcXVldWUodGhpcyxlKX0pfSxjbGVhclF1ZXVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnF1ZXVlKGV8fFwiZnhcIixbXSl9LHByb21pc2U6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPTEsaT1TLkRlZmVycmVkKCksbz10aGlzLGE9dGhpcy5sZW5ndGgscz1mdW5jdGlvbigpey0tcnx8aS5yZXNvbHZlV2l0aChvLFtvXSl9O1wic3RyaW5nXCIhPXR5cGVvZiBlJiYodD1lLGU9dm9pZCAwKSxlPWV8fFwiZnhcIjt3aGlsZShhLS0pKG49WS5nZXQob1thXSxlK1wicXVldWVIb29rc1wiKSkmJm4uZW1wdHkmJihyKyssbi5lbXB0eS5hZGQocykpO3JldHVybiBzKCksaS5wcm9taXNlKHQpfX0pO3ZhciBlZT0vWystXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVsrLV0/XFxkK3wpLy5zb3VyY2UsdGU9bmV3IFJlZ0V4cChcIl4oPzooWystXSk9fCkoXCIrZWUrXCIpKFthLXolXSopJFwiLFwiaVwiKSxuZT1bXCJUb3BcIixcIlJpZ2h0XCIsXCJCb3R0b21cIixcIkxlZnRcIl0scmU9RS5kb2N1bWVudEVsZW1lbnQsaWU9ZnVuY3Rpb24oZSl7cmV0dXJuIFMuY29udGFpbnMoZS5vd25lckRvY3VtZW50LGUpfSxvZT17Y29tcG9zZWQ6ITB9O3JlLmdldFJvb3ROb2RlJiYoaWU9ZnVuY3Rpb24oZSl7cmV0dXJuIFMuY29udGFpbnMoZS5vd25lckRvY3VtZW50LGUpfHxlLmdldFJvb3ROb2RlKG9lKT09PWUub3duZXJEb2N1bWVudH0pO3ZhciBhZT1mdW5jdGlvbihlLHQpe3JldHVyblwibm9uZVwiPT09KGU9dHx8ZSkuc3R5bGUuZGlzcGxheXx8XCJcIj09PWUuc3R5bGUuZGlzcGxheSYmaWUoZSkmJlwibm9uZVwiPT09Uy5jc3MoZSxcImRpc3BsYXlcIil9O2Z1bmN0aW9uIHNlKGUsdCxuLHIpe3ZhciBpLG8sYT0yMCxzPXI/ZnVuY3Rpb24oKXtyZXR1cm4gci5jdXIoKX06ZnVuY3Rpb24oKXtyZXR1cm4gUy5jc3MoZSx0LFwiXCIpfSx1PXMoKSxsPW4mJm5bM118fChTLmNzc051bWJlclt0XT9cIlwiOlwicHhcIiksYz1lLm5vZGVUeXBlJiYoUy5jc3NOdW1iZXJbdF18fFwicHhcIiE9PWwmJit1KSYmdGUuZXhlYyhTLmNzcyhlLHQpKTtpZihjJiZjWzNdIT09bCl7dS89MixsPWx8fGNbM10sYz0rdXx8MTt3aGlsZShhLS0pUy5zdHlsZShlLHQsYytsKSwoMS1vKSooMS0obz1zKCkvdXx8LjUpKTw9MCYmKGE9MCksYy89bztjKj0yLFMuc3R5bGUoZSx0LGMrbCksbj1ufHxbXX1yZXR1cm4gbiYmKGM9K2N8fCt1fHwwLGk9blsxXT9jKyhuWzFdKzEpKm5bMl06K25bMl0sciYmKHIudW5pdD1sLHIuc3RhcnQ9YyxyLmVuZD1pKSksaX12YXIgdWU9e307ZnVuY3Rpb24gbGUoZSx0KXtmb3IodmFyIG4scixpLG8sYSxzLHUsbD1bXSxjPTAsZj1lLmxlbmd0aDtjPGY7YysrKShyPWVbY10pLnN0eWxlJiYobj1yLnN0eWxlLmRpc3BsYXksdD8oXCJub25lXCI9PT1uJiYobFtjXT1ZLmdldChyLFwiZGlzcGxheVwiKXx8bnVsbCxsW2NdfHwoci5zdHlsZS5kaXNwbGF5PVwiXCIpKSxcIlwiPT09ci5zdHlsZS5kaXNwbGF5JiZhZShyKSYmKGxbY109KHU9YT1vPXZvaWQgMCxhPShpPXIpLm93bmVyRG9jdW1lbnQscz1pLm5vZGVOYW1lLCh1PXVlW3NdKXx8KG89YS5ib2R5LmFwcGVuZENoaWxkKGEuY3JlYXRlRWxlbWVudChzKSksdT1TLmNzcyhvLFwiZGlzcGxheVwiKSxvLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobyksXCJub25lXCI9PT11JiYodT1cImJsb2NrXCIpLHVlW3NdPXUpKSkpOlwibm9uZVwiIT09biYmKGxbY109XCJub25lXCIsWS5zZXQocixcImRpc3BsYXlcIixuKSkpO2ZvcihjPTA7YzxmO2MrKyludWxsIT1sW2NdJiYoZVtjXS5zdHlsZS5kaXNwbGF5PWxbY10pO3JldHVybiBlfVMuZm4uZXh0ZW5kKHtzaG93OmZ1bmN0aW9uKCl7cmV0dXJuIGxlKHRoaXMsITApfSxoaWRlOmZ1bmN0aW9uKCl7cmV0dXJuIGxlKHRoaXMpfSx0b2dnbGU6ZnVuY3Rpb24oZSl7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiBlP2U/dGhpcy5zaG93KCk6dGhpcy5oaWRlKCk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7YWUodGhpcyk/Uyh0aGlzKS5zaG93KCk6Uyh0aGlzKS5oaWRlKCl9KX19KTt2YXIgY2UsZmUscGU9L14oPzpjaGVja2JveHxyYWRpbykkL2ksZGU9LzwoW2Etel1bXlxcL1xcMD5cXHgyMFxcdFxcclxcblxcZl0qKS9pLGhlPS9eJHxebW9kdWxlJHxcXC8oPzpqYXZhfGVjbWEpc2NyaXB0L2k7Y2U9RS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkuYXBwZW5kQ2hpbGQoRS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSwoZmU9RS5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIikpLnNldEF0dHJpYnV0ZShcInR5cGVcIixcInJhZGlvXCIpLGZlLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIixcImNoZWNrZWRcIiksZmUuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwidFwiKSxjZS5hcHBlbmRDaGlsZChmZSkseS5jaGVja0Nsb25lPWNlLmNsb25lTm9kZSghMCkuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuY2hlY2tlZCxjZS5pbm5lckhUTUw9XCI8dGV4dGFyZWE+eDwvdGV4dGFyZWE+XCIseS5ub0Nsb25lQ2hlY2tlZD0hIWNlLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmRlZmF1bHRWYWx1ZSxjZS5pbm5lckhUTUw9XCI8b3B0aW9uPjwvb3B0aW9uPlwiLHkub3B0aW9uPSEhY2UubGFzdENoaWxkO3ZhciBnZT17dGhlYWQ6WzEsXCI8dGFibGU+XCIsXCI8L3RhYmxlPlwiXSxjb2w6WzIsXCI8dGFibGU+PGNvbGdyb3VwPlwiLFwiPC9jb2xncm91cD48L3RhYmxlPlwiXSx0cjpbMixcIjx0YWJsZT48dGJvZHk+XCIsXCI8L3Rib2R5PjwvdGFibGU+XCJdLHRkOlszLFwiPHRhYmxlPjx0Ym9keT48dHI+XCIsXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIl0sX2RlZmF1bHQ6WzAsXCJcIixcIlwiXX07ZnVuY3Rpb24gdmUoZSx0KXt2YXIgbjtyZXR1cm4gbj1cInVuZGVmaW5lZFwiIT10eXBlb2YgZS5nZXRFbGVtZW50c0J5VGFnTmFtZT9lLmdldEVsZW1lbnRzQnlUYWdOYW1lKHR8fFwiKlwiKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgZS5xdWVyeVNlbGVjdG9yQWxsP2UucXVlcnlTZWxlY3RvckFsbCh0fHxcIipcIik6W10sdm9pZCAwPT09dHx8dCYmQShlLHQpP1MubWVyZ2UoW2VdLG4pOm59ZnVuY3Rpb24geWUoZSx0KXtmb3IodmFyIG49MCxyPWUubGVuZ3RoO248cjtuKyspWS5zZXQoZVtuXSxcImdsb2JhbEV2YWxcIiwhdHx8WS5nZXQodFtuXSxcImdsb2JhbEV2YWxcIikpfWdlLnRib2R5PWdlLnRmb290PWdlLmNvbGdyb3VwPWdlLmNhcHRpb249Z2UudGhlYWQsZ2UudGg9Z2UudGQseS5vcHRpb258fChnZS5vcHRncm91cD1nZS5vcHRpb249WzEsXCI8c2VsZWN0IG11bHRpcGxlPSdtdWx0aXBsZSc+XCIsXCI8L3NlbGVjdD5cIl0pO3ZhciBtZT0vPHwmIz9cXHcrOy87ZnVuY3Rpb24geGUoZSx0LG4scixpKXtmb3IodmFyIG8sYSxzLHUsbCxjLGY9dC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkscD1bXSxkPTAsaD1lLmxlbmd0aDtkPGg7ZCsrKWlmKChvPWVbZF0pfHwwPT09bylpZihcIm9iamVjdFwiPT09dyhvKSlTLm1lcmdlKHAsby5ub2RlVHlwZT9bb106byk7ZWxzZSBpZihtZS50ZXN0KG8pKXthPWF8fGYuYXBwZW5kQ2hpbGQodC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxzPShkZS5leGVjKG8pfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKSx1PWdlW3NdfHxnZS5fZGVmYXVsdCxhLmlubmVySFRNTD11WzFdK1MuaHRtbFByZWZpbHRlcihvKSt1WzJdLGM9dVswXTt3aGlsZShjLS0pYT1hLmxhc3RDaGlsZDtTLm1lcmdlKHAsYS5jaGlsZE5vZGVzKSwoYT1mLmZpcnN0Q2hpbGQpLnRleHRDb250ZW50PVwiXCJ9ZWxzZSBwLnB1c2godC5jcmVhdGVUZXh0Tm9kZShvKSk7Zi50ZXh0Q29udGVudD1cIlwiLGQ9MDt3aGlsZShvPXBbZCsrXSlpZihyJiYtMTxTLmluQXJyYXkobyxyKSlpJiZpLnB1c2gobyk7ZWxzZSBpZihsPWllKG8pLGE9dmUoZi5hcHBlbmRDaGlsZChvKSxcInNjcmlwdFwiKSxsJiZ5ZShhKSxuKXtjPTA7d2hpbGUobz1hW2MrK10paGUudGVzdChvLnR5cGV8fFwiXCIpJiZuLnB1c2gobyl9cmV0dXJuIGZ9dmFyIGJlPS9ea2V5Lyx3ZT0vXig/Om1vdXNlfHBvaW50ZXJ8Y29udGV4dG1lbnV8ZHJhZ3xkcm9wKXxjbGljay8sVGU9L14oW14uXSopKD86XFwuKC4rKXwpLztmdW5jdGlvbiBDZSgpe3JldHVybiEwfWZ1bmN0aW9uIEVlKCl7cmV0dXJuITF9ZnVuY3Rpb24gU2UoZSx0KXtyZXR1cm4gZT09PWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBFLmFjdGl2ZUVsZW1lbnR9Y2F0Y2goZSl7fX0oKT09KFwiZm9jdXNcIj09PXQpfWZ1bmN0aW9uIGtlKGUsdCxuLHIsaSxvKXt2YXIgYSxzO2lmKFwib2JqZWN0XCI9PXR5cGVvZiB0KXtmb3IocyBpblwic3RyaW5nXCIhPXR5cGVvZiBuJiYocj1yfHxuLG49dm9pZCAwKSx0KWtlKGUscyxuLHIsdFtzXSxvKTtyZXR1cm4gZX1pZihudWxsPT1yJiZudWxsPT1pPyhpPW4scj1uPXZvaWQgMCk6bnVsbD09aSYmKFwic3RyaW5nXCI9PXR5cGVvZiBuPyhpPXIscj12b2lkIDApOihpPXIscj1uLG49dm9pZCAwKSksITE9PT1pKWk9RWU7ZWxzZSBpZighaSlyZXR1cm4gZTtyZXR1cm4gMT09PW8mJihhPWksKGk9ZnVuY3Rpb24oZSl7cmV0dXJuIFMoKS5vZmYoZSksYS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9KS5ndWlkPWEuZ3VpZHx8KGEuZ3VpZD1TLmd1aWQrKykpLGUuZWFjaChmdW5jdGlvbigpe1MuZXZlbnQuYWRkKHRoaXMsdCxpLHIsbil9KX1mdW5jdGlvbiBBZShlLGksbyl7bz8oWS5zZXQoZSxpLCExKSxTLmV2ZW50LmFkZChlLGkse25hbWVzcGFjZTohMSxoYW5kbGVyOmZ1bmN0aW9uKGUpe3ZhciB0LG4scj1ZLmdldCh0aGlzLGkpO2lmKDEmZS5pc1RyaWdnZXImJnRoaXNbaV0pe2lmKHIubGVuZ3RoKShTLmV2ZW50LnNwZWNpYWxbaV18fHt9KS5kZWxlZ2F0ZVR5cGUmJmUuc3RvcFByb3BhZ2F0aW9uKCk7ZWxzZSBpZihyPXMuY2FsbChhcmd1bWVudHMpLFkuc2V0KHRoaXMsaSxyKSx0PW8odGhpcyxpKSx0aGlzW2ldKCksciE9PShuPVkuZ2V0KHRoaXMsaSkpfHx0P1kuc2V0KHRoaXMsaSwhMSk6bj17fSxyIT09bilyZXR1cm4gZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSxlLnByZXZlbnREZWZhdWx0KCksbi52YWx1ZX1lbHNlIHIubGVuZ3RoJiYoWS5zZXQodGhpcyxpLHt2YWx1ZTpTLmV2ZW50LnRyaWdnZXIoUy5leHRlbmQoclswXSxTLkV2ZW50LnByb3RvdHlwZSksci5zbGljZSgxKSx0aGlzKX0pLGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCkpfX0pKTp2b2lkIDA9PT1ZLmdldChlLGkpJiZTLmV2ZW50LmFkZChlLGksQ2UpfVMuZXZlbnQ9e2dsb2JhbDp7fSxhZGQ6ZnVuY3Rpb24odCxlLG4scixpKXt2YXIgbyxhLHMsdSxsLGMsZixwLGQsaCxnLHY9WS5nZXQodCk7aWYoVih0KSl7bi5oYW5kbGVyJiYobj0obz1uKS5oYW5kbGVyLGk9by5zZWxlY3RvciksaSYmUy5maW5kLm1hdGNoZXNTZWxlY3RvcihyZSxpKSxuLmd1aWR8fChuLmd1aWQ9Uy5ndWlkKyspLCh1PXYuZXZlbnRzKXx8KHU9di5ldmVudHM9T2JqZWN0LmNyZWF0ZShudWxsKSksKGE9di5oYW5kbGUpfHwoYT12LmhhbmRsZT1mdW5jdGlvbihlKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgUyYmUy5ldmVudC50cmlnZ2VyZWQhPT1lLnR5cGU/Uy5ldmVudC5kaXNwYXRjaC5hcHBseSh0LGFyZ3VtZW50cyk6dm9pZCAwfSksbD0oZT0oZXx8XCJcIikubWF0Y2goUCl8fFtcIlwiXSkubGVuZ3RoO3doaWxlKGwtLSlkPWc9KHM9VGUuZXhlYyhlW2xdKXx8W10pWzFdLGg9KHNbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksZCYmKGY9Uy5ldmVudC5zcGVjaWFsW2RdfHx7fSxkPShpP2YuZGVsZWdhdGVUeXBlOmYuYmluZFR5cGUpfHxkLGY9Uy5ldmVudC5zcGVjaWFsW2RdfHx7fSxjPVMuZXh0ZW5kKHt0eXBlOmQsb3JpZ1R5cGU6ZyxkYXRhOnIsaGFuZGxlcjpuLGd1aWQ6bi5ndWlkLHNlbGVjdG9yOmksbmVlZHNDb250ZXh0OmkmJlMuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQudGVzdChpKSxuYW1lc3BhY2U6aC5qb2luKFwiLlwiKX0sbyksKHA9dVtkXSl8fCgocD11W2RdPVtdKS5kZWxlZ2F0ZUNvdW50PTAsZi5zZXR1cCYmITEhPT1mLnNldHVwLmNhbGwodCxyLGgsYSl8fHQuYWRkRXZlbnRMaXN0ZW5lciYmdC5hZGRFdmVudExpc3RlbmVyKGQsYSkpLGYuYWRkJiYoZi5hZGQuY2FsbCh0LGMpLGMuaGFuZGxlci5ndWlkfHwoYy5oYW5kbGVyLmd1aWQ9bi5ndWlkKSksaT9wLnNwbGljZShwLmRlbGVnYXRlQ291bnQrKywwLGMpOnAucHVzaChjKSxTLmV2ZW50Lmdsb2JhbFtkXT0hMCl9fSxyZW1vdmU6ZnVuY3Rpb24oZSx0LG4scixpKXt2YXIgbyxhLHMsdSxsLGMsZixwLGQsaCxnLHY9WS5oYXNEYXRhKGUpJiZZLmdldChlKTtpZih2JiYodT12LmV2ZW50cykpe2w9KHQ9KHR8fFwiXCIpLm1hdGNoKFApfHxbXCJcIl0pLmxlbmd0aDt3aGlsZShsLS0paWYoZD1nPShzPVRlLmV4ZWModFtsXSl8fFtdKVsxXSxoPShzWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLGQpe2Y9Uy5ldmVudC5zcGVjaWFsW2RdfHx7fSxwPXVbZD0ocj9mLmRlbGVnYXRlVHlwZTpmLmJpbmRUeXBlKXx8ZF18fFtdLHM9c1syXSYmbmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK2guam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpLGE9bz1wLmxlbmd0aDt3aGlsZShvLS0pYz1wW29dLCFpJiZnIT09Yy5vcmlnVHlwZXx8biYmbi5ndWlkIT09Yy5ndWlkfHxzJiYhcy50ZXN0KGMubmFtZXNwYWNlKXx8ciYmciE9PWMuc2VsZWN0b3ImJihcIioqXCIhPT1yfHwhYy5zZWxlY3Rvcil8fChwLnNwbGljZShvLDEpLGMuc2VsZWN0b3ImJnAuZGVsZWdhdGVDb3VudC0tLGYucmVtb3ZlJiZmLnJlbW92ZS5jYWxsKGUsYykpO2EmJiFwLmxlbmd0aCYmKGYudGVhcmRvd24mJiExIT09Zi50ZWFyZG93bi5jYWxsKGUsaCx2LmhhbmRsZSl8fFMucmVtb3ZlRXZlbnQoZSxkLHYuaGFuZGxlKSxkZWxldGUgdVtkXSl9ZWxzZSBmb3IoZCBpbiB1KVMuZXZlbnQucmVtb3ZlKGUsZCt0W2xdLG4sciwhMCk7Uy5pc0VtcHR5T2JqZWN0KHUpJiZZLnJlbW92ZShlLFwiaGFuZGxlIGV2ZW50c1wiKX19LGRpc3BhdGNoOmZ1bmN0aW9uKGUpe3ZhciB0LG4scixpLG8sYSxzPW5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKSx1PVMuZXZlbnQuZml4KGUpLGw9KFkuZ2V0KHRoaXMsXCJldmVudHNcIil8fE9iamVjdC5jcmVhdGUobnVsbCkpW3UudHlwZV18fFtdLGM9Uy5ldmVudC5zcGVjaWFsW3UudHlwZV18fHt9O2ZvcihzWzBdPXUsdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspc1t0XT1hcmd1bWVudHNbdF07aWYodS5kZWxlZ2F0ZVRhcmdldD10aGlzLCFjLnByZURpc3BhdGNofHwhMSE9PWMucHJlRGlzcGF0Y2guY2FsbCh0aGlzLHUpKXthPVMuZXZlbnQuaGFuZGxlcnMuY2FsbCh0aGlzLHUsbCksdD0wO3doaWxlKChpPWFbdCsrXSkmJiF1LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpe3UuY3VycmVudFRhcmdldD1pLmVsZW0sbj0wO3doaWxlKChvPWkuaGFuZGxlcnNbbisrXSkmJiF1LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCkpdS5ybmFtZXNwYWNlJiYhMSE9PW8ubmFtZXNwYWNlJiYhdS5ybmFtZXNwYWNlLnRlc3Qoby5uYW1lc3BhY2UpfHwodS5oYW5kbGVPYmo9byx1LmRhdGE9by5kYXRhLHZvaWQgMCE9PShyPSgoUy5ldmVudC5zcGVjaWFsW28ub3JpZ1R5cGVdfHx7fSkuaGFuZGxlfHxvLmhhbmRsZXIpLmFwcGx5KGkuZWxlbSxzKSkmJiExPT09KHUucmVzdWx0PXIpJiYodS5wcmV2ZW50RGVmYXVsdCgpLHUuc3RvcFByb3BhZ2F0aW9uKCkpKX1yZXR1cm4gYy5wb3N0RGlzcGF0Y2gmJmMucG9zdERpc3BhdGNoLmNhbGwodGhpcyx1KSx1LnJlc3VsdH19LGhhbmRsZXJzOmZ1bmN0aW9uKGUsdCl7dmFyIG4scixpLG8sYSxzPVtdLHU9dC5kZWxlZ2F0ZUNvdW50LGw9ZS50YXJnZXQ7aWYodSYmbC5ub2RlVHlwZSYmIShcImNsaWNrXCI9PT1lLnR5cGUmJjE8PWUuYnV0dG9uKSlmb3IoO2whPT10aGlzO2w9bC5wYXJlbnROb2RlfHx0aGlzKWlmKDE9PT1sLm5vZGVUeXBlJiYoXCJjbGlja1wiIT09ZS50eXBlfHwhMCE9PWwuZGlzYWJsZWQpKXtmb3Iobz1bXSxhPXt9LG49MDtuPHU7bisrKXZvaWQgMD09PWFbaT0ocj10W25dKS5zZWxlY3RvcitcIiBcIl0mJihhW2ldPXIubmVlZHNDb250ZXh0Py0xPFMoaSx0aGlzKS5pbmRleChsKTpTLmZpbmQoaSx0aGlzLG51bGwsW2xdKS5sZW5ndGgpLGFbaV0mJm8ucHVzaChyKTtvLmxlbmd0aCYmcy5wdXNoKHtlbGVtOmwsaGFuZGxlcnM6b30pfXJldHVybiBsPXRoaXMsdTx0Lmxlbmd0aCYmcy5wdXNoKHtlbGVtOmwsaGFuZGxlcnM6dC5zbGljZSh1KX0pLHN9LGFkZFByb3A6ZnVuY3Rpb24odCxlKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoUy5FdmVudC5wcm90b3R5cGUsdCx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsZ2V0Om0oZSk/ZnVuY3Rpb24oKXtpZih0aGlzLm9yaWdpbmFsRXZlbnQpcmV0dXJuIGUodGhpcy5vcmlnaW5hbEV2ZW50KX06ZnVuY3Rpb24oKXtpZih0aGlzLm9yaWdpbmFsRXZlbnQpcmV0dXJuIHRoaXMub3JpZ2luYWxFdmVudFt0XX0sc2V0OmZ1bmN0aW9uKGUpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLHQse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOmV9KX19KX0sZml4OmZ1bmN0aW9uKGUpe3JldHVybiBlW1MuZXhwYW5kb10/ZTpuZXcgUy5FdmVudChlKX0sc3BlY2lhbDp7bG9hZDp7bm9CdWJibGU6ITB9LGNsaWNrOntzZXR1cDpmdW5jdGlvbihlKXt2YXIgdD10aGlzfHxlO3JldHVybiBwZS50ZXN0KHQudHlwZSkmJnQuY2xpY2smJkEodCxcImlucHV0XCIpJiZBZSh0LFwiY2xpY2tcIixDZSksITF9LHRyaWdnZXI6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpc3x8ZTtyZXR1cm4gcGUudGVzdCh0LnR5cGUpJiZ0LmNsaWNrJiZBKHQsXCJpbnB1dFwiKSYmQWUodCxcImNsaWNrXCIpLCEwfSxfZGVmYXVsdDpmdW5jdGlvbihlKXt2YXIgdD1lLnRhcmdldDtyZXR1cm4gcGUudGVzdCh0LnR5cGUpJiZ0LmNsaWNrJiZBKHQsXCJpbnB1dFwiKSYmWS5nZXQodCxcImNsaWNrXCIpfHxBKHQsXCJhXCIpfX0sYmVmb3JldW5sb2FkOntwb3N0RGlzcGF0Y2g6ZnVuY3Rpb24oZSl7dm9pZCAwIT09ZS5yZXN1bHQmJmUub3JpZ2luYWxFdmVudCYmKGUub3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZT1lLnJlc3VsdCl9fX19LFMucmVtb3ZlRXZlbnQ9ZnVuY3Rpb24oZSx0LG4pe2UucmVtb3ZlRXZlbnRMaXN0ZW5lciYmZS5yZW1vdmVFdmVudExpc3RlbmVyKHQsbil9LFMuRXZlbnQ9ZnVuY3Rpb24oZSx0KXtpZighKHRoaXMgaW5zdGFuY2VvZiBTLkV2ZW50KSlyZXR1cm4gbmV3IFMuRXZlbnQoZSx0KTtlJiZlLnR5cGU/KHRoaXMub3JpZ2luYWxFdmVudD1lLHRoaXMudHlwZT1lLnR5cGUsdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9ZS5kZWZhdWx0UHJldmVudGVkfHx2b2lkIDA9PT1lLmRlZmF1bHRQcmV2ZW50ZWQmJiExPT09ZS5yZXR1cm5WYWx1ZT9DZTpFZSx0aGlzLnRhcmdldD1lLnRhcmdldCYmMz09PWUudGFyZ2V0Lm5vZGVUeXBlP2UudGFyZ2V0LnBhcmVudE5vZGU6ZS50YXJnZXQsdGhpcy5jdXJyZW50VGFyZ2V0PWUuY3VycmVudFRhcmdldCx0aGlzLnJlbGF0ZWRUYXJnZXQ9ZS5yZWxhdGVkVGFyZ2V0KTp0aGlzLnR5cGU9ZSx0JiZTLmV4dGVuZCh0aGlzLHQpLHRoaXMudGltZVN0YW1wPWUmJmUudGltZVN0YW1wfHxEYXRlLm5vdygpLHRoaXNbUy5leHBhbmRvXT0hMH0sUy5FdmVudC5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOlMuRXZlbnQsaXNEZWZhdWx0UHJldmVudGVkOkVlLGlzUHJvcGFnYXRpb25TdG9wcGVkOkVlLGlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkOkVlLGlzU2ltdWxhdGVkOiExLHByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNEZWZhdWx0UHJldmVudGVkPUNlLGUmJiF0aGlzLmlzU2ltdWxhdGVkJiZlLnByZXZlbnREZWZhdWx0KCl9LHN0b3BQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPUNlLGUmJiF0aGlzLmlzU2ltdWxhdGVkJiZlLnN0b3BQcm9wYWdhdGlvbigpfSxzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZD1DZSxlJiYhdGhpcy5pc1NpbXVsYXRlZCYmZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSx0aGlzLnN0b3BQcm9wYWdhdGlvbigpfX0sUy5lYWNoKHthbHRLZXk6ITAsYnViYmxlczohMCxjYW5jZWxhYmxlOiEwLGNoYW5nZWRUb3VjaGVzOiEwLGN0cmxLZXk6ITAsZGV0YWlsOiEwLGV2ZW50UGhhc2U6ITAsbWV0YUtleTohMCxwYWdlWDohMCxwYWdlWTohMCxzaGlmdEtleTohMCx2aWV3OiEwLFwiY2hhclwiOiEwLGNvZGU6ITAsY2hhckNvZGU6ITAsa2V5OiEwLGtleUNvZGU6ITAsYnV0dG9uOiEwLGJ1dHRvbnM6ITAsY2xpZW50WDohMCxjbGllbnRZOiEwLG9mZnNldFg6ITAsb2Zmc2V0WTohMCxwb2ludGVySWQ6ITAscG9pbnRlclR5cGU6ITAsc2NyZWVuWDohMCxzY3JlZW5ZOiEwLHRhcmdldFRvdWNoZXM6ITAsdG9FbGVtZW50OiEwLHRvdWNoZXM6ITAsd2hpY2g6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5idXR0b247cmV0dXJuIG51bGw9PWUud2hpY2gmJmJlLnRlc3QoZS50eXBlKT9udWxsIT1lLmNoYXJDb2RlP2UuY2hhckNvZGU6ZS5rZXlDb2RlOiFlLndoaWNoJiZ2b2lkIDAhPT10JiZ3ZS50ZXN0KGUudHlwZSk/MSZ0PzE6MiZ0PzM6NCZ0PzI6MDplLndoaWNofX0sUy5ldmVudC5hZGRQcm9wKSxTLmVhY2goe2ZvY3VzOlwiZm9jdXNpblwiLGJsdXI6XCJmb2N1c291dFwifSxmdW5jdGlvbihlLHQpe1MuZXZlbnQuc3BlY2lhbFtlXT17c2V0dXA6ZnVuY3Rpb24oKXtyZXR1cm4gQWUodGhpcyxlLFNlKSwhMX0sdHJpZ2dlcjpmdW5jdGlvbigpe3JldHVybiBBZSh0aGlzLGUpLCEwfSxkZWxlZ2F0ZVR5cGU6dH19KSxTLmVhY2goe21vdXNlZW50ZXI6XCJtb3VzZW92ZXJcIixtb3VzZWxlYXZlOlwibW91c2VvdXRcIixwb2ludGVyZW50ZXI6XCJwb2ludGVyb3ZlclwiLHBvaW50ZXJsZWF2ZTpcInBvaW50ZXJvdXRcIn0sZnVuY3Rpb24oZSxpKXtTLmV2ZW50LnNwZWNpYWxbZV09e2RlbGVnYXRlVHlwZTppLGJpbmRUeXBlOmksaGFuZGxlOmZ1bmN0aW9uKGUpe3ZhciB0LG49ZS5yZWxhdGVkVGFyZ2V0LHI9ZS5oYW5kbGVPYmo7cmV0dXJuIG4mJihuPT09dGhpc3x8Uy5jb250YWlucyh0aGlzLG4pKXx8KGUudHlwZT1yLm9yaWdUeXBlLHQ9ci5oYW5kbGVyLmFwcGx5KHRoaXMsYXJndW1lbnRzKSxlLnR5cGU9aSksdH19fSksUy5mbi5leHRlbmQoe29uOmZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiBrZSh0aGlzLGUsdCxuLHIpfSxvbmU6ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIGtlKHRoaXMsZSx0LG4sciwxKX0sb2ZmOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpO2lmKGUmJmUucHJldmVudERlZmF1bHQmJmUuaGFuZGxlT2JqKXJldHVybiByPWUuaGFuZGxlT2JqLFMoZS5kZWxlZ2F0ZVRhcmdldCkub2ZmKHIubmFtZXNwYWNlP3Iub3JpZ1R5cGUrXCIuXCIrci5uYW1lc3BhY2U6ci5vcmlnVHlwZSxyLnNlbGVjdG9yLHIuaGFuZGxlciksdGhpcztpZihcIm9iamVjdFwiPT10eXBlb2YgZSl7Zm9yKGkgaW4gZSl0aGlzLm9mZihpLHQsZVtpXSk7cmV0dXJuIHRoaXN9cmV0dXJuITEhPT10JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0fHwobj10LHQ9dm9pZCAwKSwhMT09PW4mJihuPUVlKSx0aGlzLmVhY2goZnVuY3Rpb24oKXtTLmV2ZW50LnJlbW92ZSh0aGlzLGUsbix0KX0pfX0pO3ZhciBOZT0vPHNjcmlwdHw8c3R5bGV8PGxpbmsvaSxEZT0vY2hlY2tlZFxccyooPzpbXj1dfD1cXHMqLmNoZWNrZWQuKS9pLGplPS9eXFxzKjwhKD86XFxbQ0RBVEFcXFt8LS0pfCg/OlxcXVxcXXwtLSk+XFxzKiQvZztmdW5jdGlvbiBxZShlLHQpe3JldHVybiBBKGUsXCJ0YWJsZVwiKSYmQSgxMSE9PXQubm9kZVR5cGU/dDp0LmZpcnN0Q2hpbGQsXCJ0clwiKSYmUyhlKS5jaGlsZHJlbihcInRib2R5XCIpWzBdfHxlfWZ1bmN0aW9uIExlKGUpe3JldHVybiBlLnR5cGU9KG51bGwhPT1lLmdldEF0dHJpYnV0ZShcInR5cGVcIikpK1wiL1wiK2UudHlwZSxlfWZ1bmN0aW9uIEhlKGUpe3JldHVyblwidHJ1ZS9cIj09PShlLnR5cGV8fFwiXCIpLnNsaWNlKDAsNSk/ZS50eXBlPWUudHlwZS5zbGljZSg1KTplLnJlbW92ZUF0dHJpYnV0ZShcInR5cGVcIiksZX1mdW5jdGlvbiBPZShlLHQpe3ZhciBuLHIsaSxvLGEscztpZigxPT09dC5ub2RlVHlwZSl7aWYoWS5oYXNEYXRhKGUpJiYocz1ZLmdldChlKS5ldmVudHMpKWZvcihpIGluIFkucmVtb3ZlKHQsXCJoYW5kbGUgZXZlbnRzXCIpLHMpZm9yKG49MCxyPXNbaV0ubGVuZ3RoO248cjtuKyspUy5ldmVudC5hZGQodCxpLHNbaV1bbl0pO1EuaGFzRGF0YShlKSYmKG89US5hY2Nlc3MoZSksYT1TLmV4dGVuZCh7fSxvKSxRLnNldCh0LGEpKX19ZnVuY3Rpb24gUGUobixyLGksbyl7cj1nKHIpO3ZhciBlLHQsYSxzLHUsbCxjPTAsZj1uLmxlbmd0aCxwPWYtMSxkPXJbMF0saD1tKGQpO2lmKGh8fDE8ZiYmXCJzdHJpbmdcIj09dHlwZW9mIGQmJiF5LmNoZWNrQ2xvbmUmJkRlLnRlc3QoZCkpcmV0dXJuIG4uZWFjaChmdW5jdGlvbihlKXt2YXIgdD1uLmVxKGUpO2gmJihyWzBdPWQuY2FsbCh0aGlzLGUsdC5odG1sKCkpKSxQZSh0LHIsaSxvKX0pO2lmKGYmJih0PShlPXhlKHIsblswXS5vd25lckRvY3VtZW50LCExLG4sbykpLmZpcnN0Q2hpbGQsMT09PWUuY2hpbGROb2Rlcy5sZW5ndGgmJihlPXQpLHR8fG8pKXtmb3Iocz0oYT1TLm1hcCh2ZShlLFwic2NyaXB0XCIpLExlKSkubGVuZ3RoO2M8ZjtjKyspdT1lLGMhPT1wJiYodT1TLmNsb25lKHUsITAsITApLHMmJlMubWVyZ2UoYSx2ZSh1LFwic2NyaXB0XCIpKSksaS5jYWxsKG5bY10sdSxjKTtpZihzKWZvcihsPWFbYS5sZW5ndGgtMV0ub3duZXJEb2N1bWVudCxTLm1hcChhLEhlKSxjPTA7YzxzO2MrKyl1PWFbY10saGUudGVzdCh1LnR5cGV8fFwiXCIpJiYhWS5hY2Nlc3ModSxcImdsb2JhbEV2YWxcIikmJlMuY29udGFpbnMobCx1KSYmKHUuc3JjJiZcIm1vZHVsZVwiIT09KHUudHlwZXx8XCJcIikudG9Mb3dlckNhc2UoKT9TLl9ldmFsVXJsJiYhdS5ub01vZHVsZSYmUy5fZXZhbFVybCh1LnNyYyx7bm9uY2U6dS5ub25jZXx8dS5nZXRBdHRyaWJ1dGUoXCJub25jZVwiKX0sbCk6Yih1LnRleHRDb250ZW50LnJlcGxhY2UoamUsXCJcIiksdSxsKSl9cmV0dXJuIG59ZnVuY3Rpb24gUmUoZSx0LG4pe2Zvcih2YXIgcixpPXQ/Uy5maWx0ZXIodCxlKTplLG89MDtudWxsIT0ocj1pW29dKTtvKyspbnx8MSE9PXIubm9kZVR5cGV8fFMuY2xlYW5EYXRhKHZlKHIpKSxyLnBhcmVudE5vZGUmJihuJiZpZShyKSYmeWUodmUocixcInNjcmlwdFwiKSksci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHIpKTtyZXR1cm4gZX1TLmV4dGVuZCh7aHRtbFByZWZpbHRlcjpmdW5jdGlvbihlKXtyZXR1cm4gZX0sY2xvbmU6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhLHMsdSxsLGM9ZS5jbG9uZU5vZGUoITApLGY9aWUoZSk7aWYoISh5Lm5vQ2xvbmVDaGVja2VkfHwxIT09ZS5ub2RlVHlwZSYmMTEhPT1lLm5vZGVUeXBlfHxTLmlzWE1MRG9jKGUpKSlmb3IoYT12ZShjKSxyPTAsaT0obz12ZShlKSkubGVuZ3RoO3I8aTtyKyspcz1vW3JdLHU9YVtyXSx2b2lkIDAsXCJpbnB1dFwiPT09KGw9dS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSYmcGUudGVzdChzLnR5cGUpP3UuY2hlY2tlZD1zLmNoZWNrZWQ6XCJpbnB1dFwiIT09bCYmXCJ0ZXh0YXJlYVwiIT09bHx8KHUuZGVmYXVsdFZhbHVlPXMuZGVmYXVsdFZhbHVlKTtpZih0KWlmKG4pZm9yKG89b3x8dmUoZSksYT1hfHx2ZShjKSxyPTAsaT1vLmxlbmd0aDtyPGk7cisrKU9lKG9bcl0sYVtyXSk7ZWxzZSBPZShlLGMpO3JldHVybiAwPChhPXZlKGMsXCJzY3JpcHRcIikpLmxlbmd0aCYmeWUoYSwhZiYmdmUoZSxcInNjcmlwdFwiKSksY30sY2xlYW5EYXRhOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdCxuLHIsaT1TLmV2ZW50LnNwZWNpYWwsbz0wO3ZvaWQgMCE9PShuPWVbb10pO28rKylpZihWKG4pKXtpZih0PW5bWS5leHBhbmRvXSl7aWYodC5ldmVudHMpZm9yKHIgaW4gdC5ldmVudHMpaVtyXT9TLmV2ZW50LnJlbW92ZShuLHIpOlMucmVtb3ZlRXZlbnQobixyLHQuaGFuZGxlKTtuW1kuZXhwYW5kb109dm9pZCAwfW5bUS5leHBhbmRvXSYmKG5bUS5leHBhbmRvXT12b2lkIDApfX19KSxTLmZuLmV4dGVuZCh7ZGV0YWNoOmZ1bmN0aW9uKGUpe3JldHVybiBSZSh0aGlzLGUsITApfSxyZW1vdmU6ZnVuY3Rpb24oZSl7cmV0dXJuIFJlKHRoaXMsZSl9LHRleHQ6ZnVuY3Rpb24oZSl7cmV0dXJuICQodGhpcyxmdW5jdGlvbihlKXtyZXR1cm4gdm9pZCAwPT09ZT9TLnRleHQodGhpcyk6dGhpcy5lbXB0eSgpLmVhY2goZnVuY3Rpb24oKXsxIT09dGhpcy5ub2RlVHlwZSYmMTEhPT10aGlzLm5vZGVUeXBlJiY5IT09dGhpcy5ub2RlVHlwZXx8KHRoaXMudGV4dENvbnRlbnQ9ZSl9KX0sbnVsbCxlLGFyZ3VtZW50cy5sZW5ndGgpfSxhcHBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gUGUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7MSE9PXRoaXMubm9kZVR5cGUmJjExIT09dGhpcy5ub2RlVHlwZSYmOSE9PXRoaXMubm9kZVR5cGV8fHFlKHRoaXMsZSkuYXBwZW5kQ2hpbGQoZSl9KX0scHJlcGVuZDpmdW5jdGlvbigpe3JldHVybiBQZSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihlKXtpZigxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSl7dmFyIHQ9cWUodGhpcyxlKTt0Lmluc2VydEJlZm9yZShlLHQuZmlyc3RDaGlsZCl9fSl9LGJlZm9yZTpmdW5jdGlvbigpe3JldHVybiBQZSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihlKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSx0aGlzKX0pfSxhZnRlcjpmdW5jdGlvbigpe3JldHVybiBQZSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihlKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSx0aGlzLm5leHRTaWJsaW5nKX0pfSxlbXB0eTpmdW5jdGlvbigpe2Zvcih2YXIgZSx0PTA7bnVsbCE9KGU9dGhpc1t0XSk7dCsrKTE9PT1lLm5vZGVUeXBlJiYoUy5jbGVhbkRhdGEodmUoZSwhMSkpLGUudGV4dENvbnRlbnQ9XCJcIik7cmV0dXJuIHRoaXN9LGNsb25lOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU9bnVsbCE9ZSYmZSx0PW51bGw9PXQ/ZTp0LHRoaXMubWFwKGZ1bmN0aW9uKCl7cmV0dXJuIFMuY2xvbmUodGhpcyxlLHQpfSl9LGh0bWw6ZnVuY3Rpb24oZSl7cmV0dXJuICQodGhpcyxmdW5jdGlvbihlKXt2YXIgdD10aGlzWzBdfHx7fSxuPTAscj10aGlzLmxlbmd0aDtpZih2b2lkIDA9PT1lJiYxPT09dC5ub2RlVHlwZSlyZXR1cm4gdC5pbm5lckhUTUw7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUmJiFOZS50ZXN0KGUpJiYhZ2VbKGRlLmV4ZWMoZSl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpXSl7ZT1TLmh0bWxQcmVmaWx0ZXIoZSk7dHJ5e2Zvcig7bjxyO24rKykxPT09KHQ9dGhpc1tuXXx8e30pLm5vZGVUeXBlJiYoUy5jbGVhbkRhdGEodmUodCwhMSkpLHQuaW5uZXJIVE1MPWUpO3Q9MH1jYXRjaChlKXt9fXQmJnRoaXMuZW1wdHkoKS5hcHBlbmQoZSl9LG51bGwsZSxhcmd1bWVudHMubGVuZ3RoKX0scmVwbGFjZVdpdGg6ZnVuY3Rpb24oKXt2YXIgbj1bXTtyZXR1cm4gUGUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5wYXJlbnROb2RlO1MuaW5BcnJheSh0aGlzLG4pPDAmJihTLmNsZWFuRGF0YSh2ZSh0aGlzKSksdCYmdC5yZXBsYWNlQ2hpbGQoZSx0aGlzKSl9LG4pfX0pLFMuZWFjaCh7YXBwZW5kVG86XCJhcHBlbmRcIixwcmVwZW5kVG86XCJwcmVwZW5kXCIsaW5zZXJ0QmVmb3JlOlwiYmVmb3JlXCIsaW5zZXJ0QWZ0ZXI6XCJhZnRlclwiLHJlcGxhY2VBbGw6XCJyZXBsYWNlV2l0aFwifSxmdW5jdGlvbihlLGEpe1MuZm5bZV09ZnVuY3Rpb24oZSl7Zm9yKHZhciB0LG49W10scj1TKGUpLGk9ci5sZW5ndGgtMSxvPTA7bzw9aTtvKyspdD1vPT09aT90aGlzOnRoaXMuY2xvbmUoITApLFMocltvXSlbYV0odCksdS5hcHBseShuLHQuZ2V0KCkpO3JldHVybiB0aGlzLnB1c2hTdGFjayhuKX19KTt2YXIgTWU9bmV3IFJlZ0V4cChcIl4oXCIrZWUrXCIpKD8hcHgpW2EteiVdKyRcIixcImlcIiksSWU9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O3JldHVybiB0JiZ0Lm9wZW5lcnx8KHQ9QyksdC5nZXRDb21wdXRlZFN0eWxlKGUpfSxXZT1mdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPXt9O2ZvcihpIGluIHQpb1tpXT1lLnN0eWxlW2ldLGUuc3R5bGVbaV09dFtpXTtmb3IoaSBpbiByPW4uY2FsbChlKSx0KWUuc3R5bGVbaV09b1tpXTtyZXR1cm4gcn0sRmU9bmV3IFJlZ0V4cChuZS5qb2luKFwifFwiKSxcImlcIik7ZnVuY3Rpb24gQmUoZSx0LG4pe3ZhciByLGksbyxhLHM9ZS5zdHlsZTtyZXR1cm4obj1ufHxJZShlKSkmJihcIlwiIT09KGE9bi5nZXRQcm9wZXJ0eVZhbHVlKHQpfHxuW3RdKXx8aWUoZSl8fChhPVMuc3R5bGUoZSx0KSksIXkucGl4ZWxCb3hTdHlsZXMoKSYmTWUudGVzdChhKSYmRmUudGVzdCh0KSYmKHI9cy53aWR0aCxpPXMubWluV2lkdGgsbz1zLm1heFdpZHRoLHMubWluV2lkdGg9cy5tYXhXaWR0aD1zLndpZHRoPWEsYT1uLndpZHRoLHMud2lkdGg9cixzLm1pbldpZHRoPWkscy5tYXhXaWR0aD1vKSksdm9pZCAwIT09YT9hK1wiXCI6YX1mdW5jdGlvbiAkZShlLHQpe3JldHVybntnZXQ6ZnVuY3Rpb24oKXtpZighZSgpKXJldHVybih0aGlzLmdldD10KS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7ZGVsZXRlIHRoaXMuZ2V0fX19IWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe2lmKGwpe3Uuc3R5bGUuY3NzVGV4dD1cInBvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTExMTExcHg7d2lkdGg6NjBweDttYXJnaW4tdG9wOjFweDtwYWRkaW5nOjA7Ym9yZGVyOjBcIixsLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveDtvdmVyZmxvdzpzY3JvbGw7bWFyZ2luOmF1dG87Ym9yZGVyOjFweDtwYWRkaW5nOjFweDt3aWR0aDo2MCU7dG9wOjElXCIscmUuYXBwZW5kQ2hpbGQodSkuYXBwZW5kQ2hpbGQobCk7dmFyIGU9Qy5nZXRDb21wdXRlZFN0eWxlKGwpO249XCIxJVwiIT09ZS50b3Ascz0xMj09PXQoZS5tYXJnaW5MZWZ0KSxsLnN0eWxlLnJpZ2h0PVwiNjAlXCIsbz0zNj09PXQoZS5yaWdodCkscj0zNj09PXQoZS53aWR0aCksbC5zdHlsZS5wb3NpdGlvbj1cImFic29sdXRlXCIsaT0xMj09PXQobC5vZmZzZXRXaWR0aC8zKSxyZS5yZW1vdmVDaGlsZCh1KSxsPW51bGx9fWZ1bmN0aW9uIHQoZSl7cmV0dXJuIE1hdGgucm91bmQocGFyc2VGbG9hdChlKSl9dmFyIG4scixpLG8sYSxzLHU9RS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGw9RS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2wuc3R5bGUmJihsLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiY29udGVudC1ib3hcIixsLmNsb25lTm9kZSghMCkuc3R5bGUuYmFja2dyb3VuZENsaXA9XCJcIix5LmNsZWFyQ2xvbmVTdHlsZT1cImNvbnRlbnQtYm94XCI9PT1sLnN0eWxlLmJhY2tncm91bmRDbGlwLFMuZXh0ZW5kKHkse2JveFNpemluZ1JlbGlhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIGUoKSxyfSxwaXhlbEJveFN0eWxlczpmdW5jdGlvbigpe3JldHVybiBlKCksb30scGl4ZWxQb3NpdGlvbjpmdW5jdGlvbigpe3JldHVybiBlKCksbn0scmVsaWFibGVNYXJnaW5MZWZ0OmZ1bmN0aW9uKCl7cmV0dXJuIGUoKSxzfSxzY3JvbGxib3hTaXplOmZ1bmN0aW9uKCl7cmV0dXJuIGUoKSxpfSxyZWxpYWJsZVRyRGltZW5zaW9uczpmdW5jdGlvbigpe3ZhciBlLHQsbixyO3JldHVybiBudWxsPT1hJiYoZT1FLmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKSx0PUUuY3JlYXRlRWxlbWVudChcInRyXCIpLG49RS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGUuc3R5bGUuY3NzVGV4dD1cInBvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTExMTExcHhcIix0LnN0eWxlLmhlaWdodD1cIjFweFwiLG4uc3R5bGUuaGVpZ2h0PVwiOXB4XCIscmUuYXBwZW5kQ2hpbGQoZSkuYXBwZW5kQ2hpbGQodCkuYXBwZW5kQ2hpbGQobikscj1DLmdldENvbXB1dGVkU3R5bGUodCksYT0zPHBhcnNlSW50KHIuaGVpZ2h0KSxyZS5yZW1vdmVDaGlsZChlKSksYX19KSl9KCk7dmFyIF9lPVtcIldlYmtpdFwiLFwiTW96XCIsXCJtc1wiXSx6ZT1FLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikuc3R5bGUsVWU9e307ZnVuY3Rpb24gWGUoZSl7dmFyIHQ9Uy5jc3NQcm9wc1tlXXx8VWVbZV07cmV0dXJuIHR8fChlIGluIHplP2U6VWVbZV09ZnVuY3Rpb24oZSl7dmFyIHQ9ZVswXS50b1VwcGVyQ2FzZSgpK2Uuc2xpY2UoMSksbj1fZS5sZW5ndGg7d2hpbGUobi0tKWlmKChlPV9lW25dK3QpaW4gemUpcmV0dXJuIGV9KGUpfHxlKX12YXIgVmU9L14obm9uZXx0YWJsZSg/IS1jW2VhXSkuKykvLEdlPS9eLS0vLFllPXtwb3NpdGlvbjpcImFic29sdXRlXCIsdmlzaWJpbGl0eTpcImhpZGRlblwiLGRpc3BsYXk6XCJibG9ja1wifSxRZT17bGV0dGVyU3BhY2luZzpcIjBcIixmb250V2VpZ2h0OlwiNDAwXCJ9O2Z1bmN0aW9uIEplKGUsdCxuKXt2YXIgcj10ZS5leGVjKHQpO3JldHVybiByP01hdGgubWF4KDAsclsyXS0obnx8MCkpKyhyWzNdfHxcInB4XCIpOnR9ZnVuY3Rpb24gS2UoZSx0LG4scixpLG8pe3ZhciBhPVwid2lkdGhcIj09PXQ/MTowLHM9MCx1PTA7aWYobj09PShyP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpKXJldHVybiAwO2Zvcig7YTw0O2ErPTIpXCJtYXJnaW5cIj09PW4mJih1Kz1TLmNzcyhlLG4rbmVbYV0sITAsaSkpLHI/KFwiY29udGVudFwiPT09biYmKHUtPVMuY3NzKGUsXCJwYWRkaW5nXCIrbmVbYV0sITAsaSkpLFwibWFyZ2luXCIhPT1uJiYodS09Uy5jc3MoZSxcImJvcmRlclwiK25lW2FdK1wiV2lkdGhcIiwhMCxpKSkpOih1Kz1TLmNzcyhlLFwicGFkZGluZ1wiK25lW2FdLCEwLGkpLFwicGFkZGluZ1wiIT09bj91Kz1TLmNzcyhlLFwiYm9yZGVyXCIrbmVbYV0rXCJXaWR0aFwiLCEwLGkpOnMrPVMuY3NzKGUsXCJib3JkZXJcIituZVthXStcIldpZHRoXCIsITAsaSkpO3JldHVybiFyJiYwPD1vJiYodSs9TWF0aC5tYXgoMCxNYXRoLmNlaWwoZVtcIm9mZnNldFwiK3RbMF0udG9VcHBlckNhc2UoKSt0LnNsaWNlKDEpXS1vLXUtcy0uNSkpfHwwKSx1fWZ1bmN0aW9uIFplKGUsdCxuKXt2YXIgcj1JZShlKSxpPSgheS5ib3hTaXppbmdSZWxpYWJsZSgpfHxuKSYmXCJib3JkZXItYm94XCI9PT1TLmNzcyhlLFwiYm94U2l6aW5nXCIsITEsciksbz1pLGE9QmUoZSx0LHIpLHM9XCJvZmZzZXRcIit0WzBdLnRvVXBwZXJDYXNlKCkrdC5zbGljZSgxKTtpZihNZS50ZXN0KGEpKXtpZighbilyZXR1cm4gYTthPVwiYXV0b1wifXJldHVybigheS5ib3hTaXppbmdSZWxpYWJsZSgpJiZpfHwheS5yZWxpYWJsZVRyRGltZW5zaW9ucygpJiZBKGUsXCJ0clwiKXx8XCJhdXRvXCI9PT1hfHwhcGFyc2VGbG9hdChhKSYmXCJpbmxpbmVcIj09PVMuY3NzKGUsXCJkaXNwbGF5XCIsITEscikpJiZlLmdldENsaWVudFJlY3RzKCkubGVuZ3RoJiYoaT1cImJvcmRlci1ib3hcIj09PVMuY3NzKGUsXCJib3hTaXppbmdcIiwhMSxyKSwobz1zIGluIGUpJiYoYT1lW3NdKSksKGE9cGFyc2VGbG9hdChhKXx8MCkrS2UoZSx0LG58fChpP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpLG8scixhKStcInB4XCJ9ZnVuY3Rpb24gZXQoZSx0LG4scixpKXtyZXR1cm4gbmV3IGV0LnByb3RvdHlwZS5pbml0KGUsdCxuLHIsaSl9Uy5leHRlbmQoe2Nzc0hvb2tzOntvcGFjaXR5OntnZXQ6ZnVuY3Rpb24oZSx0KXtpZih0KXt2YXIgbj1CZShlLFwib3BhY2l0eVwiKTtyZXR1cm5cIlwiPT09bj9cIjFcIjpufX19fSxjc3NOdW1iZXI6e2FuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiEwLGNvbHVtbkNvdW50OiEwLGZpbGxPcGFjaXR5OiEwLGZsZXhHcm93OiEwLGZsZXhTaHJpbms6ITAsZm9udFdlaWdodDohMCxncmlkQXJlYTohMCxncmlkQ29sdW1uOiEwLGdyaWRDb2x1bW5FbmQ6ITAsZ3JpZENvbHVtblN0YXJ0OiEwLGdyaWRSb3c6ITAsZ3JpZFJvd0VuZDohMCxncmlkUm93U3RhcnQ6ITAsbGluZUhlaWdodDohMCxvcGFjaXR5OiEwLG9yZGVyOiEwLG9ycGhhbnM6ITAsd2lkb3dzOiEwLHpJbmRleDohMCx6b29tOiEwfSxjc3NQcm9wczp7fSxzdHlsZTpmdW5jdGlvbihlLHQsbixyKXtpZihlJiYzIT09ZS5ub2RlVHlwZSYmOCE9PWUubm9kZVR5cGUmJmUuc3R5bGUpe3ZhciBpLG8sYSxzPVgodCksdT1HZS50ZXN0KHQpLGw9ZS5zdHlsZTtpZih1fHwodD1YZShzKSksYT1TLmNzc0hvb2tzW3RdfHxTLmNzc0hvb2tzW3NdLHZvaWQgMD09PW4pcmV0dXJuIGEmJlwiZ2V0XCJpbiBhJiZ2b2lkIDAhPT0oaT1hLmdldChlLCExLHIpKT9pOmxbdF07XCJzdHJpbmdcIj09PShvPXR5cGVvZiBuKSYmKGk9dGUuZXhlYyhuKSkmJmlbMV0mJihuPXNlKGUsdCxpKSxvPVwibnVtYmVyXCIpLG51bGwhPW4mJm49PW4mJihcIm51bWJlclwiIT09b3x8dXx8KG4rPWkmJmlbM118fChTLmNzc051bWJlcltzXT9cIlwiOlwicHhcIikpLHkuY2xlYXJDbG9uZVN0eWxlfHxcIlwiIT09bnx8MCE9PXQuaW5kZXhPZihcImJhY2tncm91bmRcIil8fChsW3RdPVwiaW5oZXJpdFwiKSxhJiZcInNldFwiaW4gYSYmdm9pZCAwPT09KG49YS5zZXQoZSxuLHIpKXx8KHU/bC5zZXRQcm9wZXJ0eSh0LG4pOmxbdF09bikpfX0sY3NzOmZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG8sYSxzPVgodCk7cmV0dXJuIEdlLnRlc3QodCl8fCh0PVhlKHMpKSwoYT1TLmNzc0hvb2tzW3RdfHxTLmNzc0hvb2tzW3NdKSYmXCJnZXRcImluIGEmJihpPWEuZ2V0KGUsITAsbikpLHZvaWQgMD09PWkmJihpPUJlKGUsdCxyKSksXCJub3JtYWxcIj09PWkmJnQgaW4gUWUmJihpPVFlW3RdKSxcIlwiPT09bnx8bj8obz1wYXJzZUZsb2F0KGkpLCEwPT09bnx8aXNGaW5pdGUobyk/b3x8MDppKTppfX0pLFMuZWFjaChbXCJoZWlnaHRcIixcIndpZHRoXCJdLGZ1bmN0aW9uKGUsdSl7Uy5jc3NIb29rc1t1XT17Z2V0OmZ1bmN0aW9uKGUsdCxuKXtpZih0KXJldHVybiFWZS50ZXN0KFMuY3NzKGUsXCJkaXNwbGF5XCIpKXx8ZS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCYmZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aD9aZShlLHUsbik6V2UoZSxZZSxmdW5jdGlvbigpe3JldHVybiBaZShlLHUsbil9KX0sc2V0OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpPUllKGUpLG89IXkuc2Nyb2xsYm94U2l6ZSgpJiZcImFic29sdXRlXCI9PT1pLnBvc2l0aW9uLGE9KG98fG4pJiZcImJvcmRlci1ib3hcIj09PVMuY3NzKGUsXCJib3hTaXppbmdcIiwhMSxpKSxzPW4/S2UoZSx1LG4sYSxpKTowO3JldHVybiBhJiZvJiYocy09TWF0aC5jZWlsKGVbXCJvZmZzZXRcIit1WzBdLnRvVXBwZXJDYXNlKCkrdS5zbGljZSgxKV0tcGFyc2VGbG9hdChpW3VdKS1LZShlLHUsXCJib3JkZXJcIiwhMSxpKS0uNSkpLHMmJihyPXRlLmV4ZWModCkpJiZcInB4XCIhPT0oclszXXx8XCJweFwiKSYmKGUuc3R5bGVbdV09dCx0PVMuY3NzKGUsdSkpLEplKDAsdCxzKX19fSksUy5jc3NIb29rcy5tYXJnaW5MZWZ0PSRlKHkucmVsaWFibGVNYXJnaW5MZWZ0LGZ1bmN0aW9uKGUsdCl7aWYodClyZXR1cm4ocGFyc2VGbG9hdChCZShlLFwibWFyZ2luTGVmdFwiKSl8fGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdC1XZShlLHttYXJnaW5MZWZ0OjB9LGZ1bmN0aW9uKCl7cmV0dXJuIGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdH0pKStcInB4XCJ9KSxTLmVhY2goe21hcmdpbjpcIlwiLHBhZGRpbmc6XCJcIixib3JkZXI6XCJXaWR0aFwifSxmdW5jdGlvbihpLG8pe1MuY3NzSG9va3NbaStvXT17ZXhwYW5kOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0wLG49e30scj1cInN0cmluZ1wiPT10eXBlb2YgZT9lLnNwbGl0KFwiIFwiKTpbZV07dDw0O3QrKyluW2krbmVbdF0rb109clt0XXx8clt0LTJdfHxyWzBdO3JldHVybiBufX0sXCJtYXJnaW5cIiE9PWkmJihTLmNzc0hvb2tzW2krb10uc2V0PUplKX0pLFMuZm4uZXh0ZW5kKHtjc3M6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gJCh0aGlzLGZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89e30sYT0wO2lmKEFycmF5LmlzQXJyYXkodCkpe2ZvcihyPUllKGUpLGk9dC5sZW5ndGg7YTxpO2ErKylvW3RbYV1dPVMuY3NzKGUsdFthXSwhMSxyKTtyZXR1cm4gb31yZXR1cm4gdm9pZCAwIT09bj9TLnN0eWxlKGUsdCxuKTpTLmNzcyhlLHQpfSxlLHQsMTxhcmd1bWVudHMubGVuZ3RoKX19KSwoKFMuVHdlZW49ZXQpLnByb3RvdHlwZT17Y29uc3RydWN0b3I6ZXQsaW5pdDpmdW5jdGlvbihlLHQsbixyLGksbyl7dGhpcy5lbGVtPWUsdGhpcy5wcm9wPW4sdGhpcy5lYXNpbmc9aXx8Uy5lYXNpbmcuX2RlZmF1bHQsdGhpcy5vcHRpb25zPXQsdGhpcy5zdGFydD10aGlzLm5vdz10aGlzLmN1cigpLHRoaXMuZW5kPXIsdGhpcy51bml0PW98fChTLmNzc051bWJlcltuXT9cIlwiOlwicHhcIil9LGN1cjpmdW5jdGlvbigpe3ZhciBlPWV0LnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiBlJiZlLmdldD9lLmdldCh0aGlzKTpldC5wcm9wSG9va3MuX2RlZmF1bHQuZ2V0KHRoaXMpfSxydW46ZnVuY3Rpb24oZSl7dmFyIHQsbj1ldC5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gdGhpcy5vcHRpb25zLmR1cmF0aW9uP3RoaXMucG9zPXQ9Uy5lYXNpbmdbdGhpcy5lYXNpbmddKGUsdGhpcy5vcHRpb25zLmR1cmF0aW9uKmUsMCwxLHRoaXMub3B0aW9ucy5kdXJhdGlvbik6dGhpcy5wb3M9dD1lLHRoaXMubm93PSh0aGlzLmVuZC10aGlzLnN0YXJ0KSp0K3RoaXMuc3RhcnQsdGhpcy5vcHRpb25zLnN0ZXAmJnRoaXMub3B0aW9ucy5zdGVwLmNhbGwodGhpcy5lbGVtLHRoaXMubm93LHRoaXMpLG4mJm4uc2V0P24uc2V0KHRoaXMpOmV0LnByb3BIb29rcy5fZGVmYXVsdC5zZXQodGhpcyksdGhpc319KS5pbml0LnByb3RvdHlwZT1ldC5wcm90b3R5cGUsKGV0LnByb3BIb29rcz17X2RlZmF1bHQ6e2dldDpmdW5jdGlvbihlKXt2YXIgdDtyZXR1cm4gMSE9PWUuZWxlbS5ub2RlVHlwZXx8bnVsbCE9ZS5lbGVtW2UucHJvcF0mJm51bGw9PWUuZWxlbS5zdHlsZVtlLnByb3BdP2UuZWxlbVtlLnByb3BdOih0PVMuY3NzKGUuZWxlbSxlLnByb3AsXCJcIikpJiZcImF1dG9cIiE9PXQ/dDowfSxzZXQ6ZnVuY3Rpb24oZSl7Uy5meC5zdGVwW2UucHJvcF0/Uy5meC5zdGVwW2UucHJvcF0oZSk6MSE9PWUuZWxlbS5ub2RlVHlwZXx8IVMuY3NzSG9va3NbZS5wcm9wXSYmbnVsbD09ZS5lbGVtLnN0eWxlW1hlKGUucHJvcCldP2UuZWxlbVtlLnByb3BdPWUubm93OlMuc3R5bGUoZS5lbGVtLGUucHJvcCxlLm5vdytlLnVuaXQpfX19KS5zY3JvbGxUb3A9ZXQucHJvcEhvb2tzLnNjcm9sbExlZnQ9e3NldDpmdW5jdGlvbihlKXtlLmVsZW0ubm9kZVR5cGUmJmUuZWxlbS5wYXJlbnROb2RlJiYoZS5lbGVtW2UucHJvcF09ZS5ub3cpfX0sUy5lYXNpbmc9e2xpbmVhcjpmdW5jdGlvbihlKXtyZXR1cm4gZX0sc3dpbmc6ZnVuY3Rpb24oZSl7cmV0dXJuLjUtTWF0aC5jb3MoZSpNYXRoLlBJKS8yfSxfZGVmYXVsdDpcInN3aW5nXCJ9LFMuZng9ZXQucHJvdG90eXBlLmluaXQsUy5meC5zdGVwPXt9O3ZhciB0dCxudCxydCxpdCxvdD0vXig/OnRvZ2dsZXxzaG93fGhpZGUpJC8sYXQ9L3F1ZXVlSG9va3MkLztmdW5jdGlvbiBzdCgpe250JiYoITE9PT1FLmhpZGRlbiYmQy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU/Qy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3QpOkMuc2V0VGltZW91dChzdCxTLmZ4LmludGVydmFsKSxTLmZ4LnRpY2soKSl9ZnVuY3Rpb24gdXQoKXtyZXR1cm4gQy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dHQ9dm9pZCAwfSksdHQ9RGF0ZS5ub3coKX1mdW5jdGlvbiBsdChlLHQpe3ZhciBuLHI9MCxpPXtoZWlnaHQ6ZX07Zm9yKHQ9dD8xOjA7cjw0O3IrPTItdClpW1wibWFyZ2luXCIrKG49bmVbcl0pXT1pW1wicGFkZGluZ1wiK25dPWU7cmV0dXJuIHQmJihpLm9wYWNpdHk9aS53aWR0aD1lKSxpfWZ1bmN0aW9uIGN0KGUsdCxuKXtmb3IodmFyIHIsaT0oZnQudHdlZW5lcnNbdF18fFtdKS5jb25jYXQoZnQudHdlZW5lcnNbXCIqXCJdKSxvPTAsYT1pLmxlbmd0aDtvPGE7bysrKWlmKHI9aVtvXS5jYWxsKG4sdCxlKSlyZXR1cm4gcn1mdW5jdGlvbiBmdChvLGUsdCl7dmFyIG4sYSxyPTAsaT1mdC5wcmVmaWx0ZXJzLmxlbmd0aCxzPVMuRGVmZXJyZWQoKS5hbHdheXMoZnVuY3Rpb24oKXtkZWxldGUgdS5lbGVtfSksdT1mdW5jdGlvbigpe2lmKGEpcmV0dXJuITE7Zm9yKHZhciBlPXR0fHx1dCgpLHQ9TWF0aC5tYXgoMCxsLnN0YXJ0VGltZStsLmR1cmF0aW9uLWUpLG49MS0odC9sLmR1cmF0aW9ufHwwKSxyPTAsaT1sLnR3ZWVucy5sZW5ndGg7cjxpO3IrKylsLnR3ZWVuc1tyXS5ydW4obik7cmV0dXJuIHMubm90aWZ5V2l0aChvLFtsLG4sdF0pLG48MSYmaT90OihpfHxzLm5vdGlmeVdpdGgobyxbbCwxLDBdKSxzLnJlc29sdmVXaXRoKG8sW2xdKSwhMSl9LGw9cy5wcm9taXNlKHtlbGVtOm8scHJvcHM6Uy5leHRlbmQoe30sZSksb3B0czpTLmV4dGVuZCghMCx7c3BlY2lhbEVhc2luZzp7fSxlYXNpbmc6Uy5lYXNpbmcuX2RlZmF1bHR9LHQpLG9yaWdpbmFsUHJvcGVydGllczplLG9yaWdpbmFsT3B0aW9uczp0LHN0YXJ0VGltZTp0dHx8dXQoKSxkdXJhdGlvbjp0LmR1cmF0aW9uLHR3ZWVuczpbXSxjcmVhdGVUd2VlbjpmdW5jdGlvbihlLHQpe3ZhciBuPVMuVHdlZW4obyxsLm9wdHMsZSx0LGwub3B0cy5zcGVjaWFsRWFzaW5nW2VdfHxsLm9wdHMuZWFzaW5nKTtyZXR1cm4gbC50d2VlbnMucHVzaChuKSxufSxzdG9wOmZ1bmN0aW9uKGUpe3ZhciB0PTAsbj1lP2wudHdlZW5zLmxlbmd0aDowO2lmKGEpcmV0dXJuIHRoaXM7Zm9yKGE9ITA7dDxuO3QrKylsLnR3ZWVuc1t0XS5ydW4oMSk7cmV0dXJuIGU/KHMubm90aWZ5V2l0aChvLFtsLDEsMF0pLHMucmVzb2x2ZVdpdGgobyxbbCxlXSkpOnMucmVqZWN0V2l0aChvLFtsLGVdKSx0aGlzfX0pLGM9bC5wcm9wcztmb3IoIWZ1bmN0aW9uKGUsdCl7dmFyIG4scixpLG8sYTtmb3IobiBpbiBlKWlmKGk9dFtyPVgobildLG89ZVtuXSxBcnJheS5pc0FycmF5KG8pJiYoaT1vWzFdLG89ZVtuXT1vWzBdKSxuIT09ciYmKGVbcl09byxkZWxldGUgZVtuXSksKGE9Uy5jc3NIb29rc1tyXSkmJlwiZXhwYW5kXCJpbiBhKWZvcihuIGluIG89YS5leHBhbmQobyksZGVsZXRlIGVbcl0sbyluIGluIGV8fChlW25dPW9bbl0sdFtuXT1pKTtlbHNlIHRbcl09aX0oYyxsLm9wdHMuc3BlY2lhbEVhc2luZyk7cjxpO3IrKylpZihuPWZ0LnByZWZpbHRlcnNbcl0uY2FsbChsLG8sYyxsLm9wdHMpKXJldHVybiBtKG4uc3RvcCkmJihTLl9xdWV1ZUhvb2tzKGwuZWxlbSxsLm9wdHMucXVldWUpLnN0b3A9bi5zdG9wLmJpbmQobikpLG47cmV0dXJuIFMubWFwKGMsY3QsbCksbShsLm9wdHMuc3RhcnQpJiZsLm9wdHMuc3RhcnQuY2FsbChvLGwpLGwucHJvZ3Jlc3MobC5vcHRzLnByb2dyZXNzKS5kb25lKGwub3B0cy5kb25lLGwub3B0cy5jb21wbGV0ZSkuZmFpbChsLm9wdHMuZmFpbCkuYWx3YXlzKGwub3B0cy5hbHdheXMpLFMuZngudGltZXIoUy5leHRlbmQodSx7ZWxlbTpvLGFuaW06bCxxdWV1ZTpsLm9wdHMucXVldWV9KSksbH1TLkFuaW1hdGlvbj1TLmV4dGVuZChmdCx7dHdlZW5lcnM6e1wiKlwiOltmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXMuY3JlYXRlVHdlZW4oZSx0KTtyZXR1cm4gc2Uobi5lbGVtLGUsdGUuZXhlYyh0KSxuKSxufV19LHR3ZWVuZXI6ZnVuY3Rpb24oZSx0KXttKGUpPyh0PWUsZT1bXCIqXCJdKTplPWUubWF0Y2goUCk7Zm9yKHZhciBuLHI9MCxpPWUubGVuZ3RoO3I8aTtyKyspbj1lW3JdLGZ0LnR3ZWVuZXJzW25dPWZ0LnR3ZWVuZXJzW25dfHxbXSxmdC50d2VlbmVyc1tuXS51bnNoaWZ0KHQpfSxwcmVmaWx0ZXJzOltmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGEscyx1LGwsYyxmPVwid2lkdGhcImluIHR8fFwiaGVpZ2h0XCJpbiB0LHA9dGhpcyxkPXt9LGg9ZS5zdHlsZSxnPWUubm9kZVR5cGUmJmFlKGUpLHY9WS5nZXQoZSxcImZ4c2hvd1wiKTtmb3IociBpbiBuLnF1ZXVlfHwobnVsbD09KGE9Uy5fcXVldWVIb29rcyhlLFwiZnhcIikpLnVucXVldWVkJiYoYS51bnF1ZXVlZD0wLHM9YS5lbXB0eS5maXJlLGEuZW1wdHkuZmlyZT1mdW5jdGlvbigpe2EudW5xdWV1ZWR8fHMoKX0pLGEudW5xdWV1ZWQrKyxwLmFsd2F5cyhmdW5jdGlvbigpe3AuYWx3YXlzKGZ1bmN0aW9uKCl7YS51bnF1ZXVlZC0tLFMucXVldWUoZSxcImZ4XCIpLmxlbmd0aHx8YS5lbXB0eS5maXJlKCl9KX0pKSx0KWlmKGk9dFtyXSxvdC50ZXN0KGkpKXtpZihkZWxldGUgdFtyXSxvPW98fFwidG9nZ2xlXCI9PT1pLGk9PT0oZz9cImhpZGVcIjpcInNob3dcIikpe2lmKFwic2hvd1wiIT09aXx8IXZ8fHZvaWQgMD09PXZbcl0pY29udGludWU7Zz0hMH1kW3JdPXYmJnZbcl18fFMuc3R5bGUoZSxyKX1pZigodT0hUy5pc0VtcHR5T2JqZWN0KHQpKXx8IVMuaXNFbXB0eU9iamVjdChkKSlmb3IociBpbiBmJiYxPT09ZS5ub2RlVHlwZSYmKG4ub3ZlcmZsb3c9W2gub3ZlcmZsb3csaC5vdmVyZmxvd1gsaC5vdmVyZmxvd1ldLG51bGw9PShsPXYmJnYuZGlzcGxheSkmJihsPVkuZ2V0KGUsXCJkaXNwbGF5XCIpKSxcIm5vbmVcIj09PShjPVMuY3NzKGUsXCJkaXNwbGF5XCIpKSYmKGw/Yz1sOihsZShbZV0sITApLGw9ZS5zdHlsZS5kaXNwbGF5fHxsLGM9Uy5jc3MoZSxcImRpc3BsYXlcIiksbGUoW2VdKSkpLChcImlubGluZVwiPT09Y3x8XCJpbmxpbmUtYmxvY2tcIj09PWMmJm51bGwhPWwpJiZcIm5vbmVcIj09PVMuY3NzKGUsXCJmbG9hdFwiKSYmKHV8fChwLmRvbmUoZnVuY3Rpb24oKXtoLmRpc3BsYXk9bH0pLG51bGw9PWwmJihjPWguZGlzcGxheSxsPVwibm9uZVwiPT09Yz9cIlwiOmMpKSxoLmRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIikpLG4ub3ZlcmZsb3cmJihoLm92ZXJmbG93PVwiaGlkZGVuXCIscC5hbHdheXMoZnVuY3Rpb24oKXtoLm92ZXJmbG93PW4ub3ZlcmZsb3dbMF0saC5vdmVyZmxvd1g9bi5vdmVyZmxvd1sxXSxoLm92ZXJmbG93WT1uLm92ZXJmbG93WzJdfSkpLHU9ITEsZCl1fHwodj9cImhpZGRlblwiaW4gdiYmKGc9di5oaWRkZW4pOnY9WS5hY2Nlc3MoZSxcImZ4c2hvd1wiLHtkaXNwbGF5Omx9KSxvJiYodi5oaWRkZW49IWcpLGcmJmxlKFtlXSwhMCkscC5kb25lKGZ1bmN0aW9uKCl7Zm9yKHIgaW4gZ3x8bGUoW2VdKSxZLnJlbW92ZShlLFwiZnhzaG93XCIpLGQpUy5zdHlsZShlLHIsZFtyXSl9KSksdT1jdChnP3Zbcl06MCxyLHApLHIgaW4gdnx8KHZbcl09dS5zdGFydCxnJiYodS5lbmQ9dS5zdGFydCx1LnN0YXJ0PTApKX1dLHByZWZpbHRlcjpmdW5jdGlvbihlLHQpe3Q/ZnQucHJlZmlsdGVycy51bnNoaWZ0KGUpOmZ0LnByZWZpbHRlcnMucHVzaChlKX19KSxTLnNwZWVkPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1lJiZcIm9iamVjdFwiPT10eXBlb2YgZT9TLmV4dGVuZCh7fSxlKTp7Y29tcGxldGU6bnx8IW4mJnR8fG0oZSkmJmUsZHVyYXRpb246ZSxlYXNpbmc6biYmdHx8dCYmIW0odCkmJnR9O3JldHVybiBTLmZ4Lm9mZj9yLmR1cmF0aW9uPTA6XCJudW1iZXJcIiE9dHlwZW9mIHIuZHVyYXRpb24mJihyLmR1cmF0aW9uIGluIFMuZnguc3BlZWRzP3IuZHVyYXRpb249Uy5meC5zcGVlZHNbci5kdXJhdGlvbl06ci5kdXJhdGlvbj1TLmZ4LnNwZWVkcy5fZGVmYXVsdCksbnVsbCE9ci5xdWV1ZSYmITAhPT1yLnF1ZXVlfHwoci5xdWV1ZT1cImZ4XCIpLHIub2xkPXIuY29tcGxldGUsci5jb21wbGV0ZT1mdW5jdGlvbigpe20oci5vbGQpJiZyLm9sZC5jYWxsKHRoaXMpLHIucXVldWUmJlMuZGVxdWV1ZSh0aGlzLHIucXVldWUpfSxyfSxTLmZuLmV4dGVuZCh7ZmFkZVRvOmZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiB0aGlzLmZpbHRlcihhZSkuY3NzKFwib3BhY2l0eVwiLDApLnNob3coKS5lbmQoKS5hbmltYXRlKHtvcGFjaXR5OnR9LGUsbixyKX0sYW5pbWF0ZTpmdW5jdGlvbih0LGUsbixyKXt2YXIgaT1TLmlzRW1wdHlPYmplY3QodCksbz1TLnNwZWVkKGUsbixyKSxhPWZ1bmN0aW9uKCl7dmFyIGU9ZnQodGhpcyxTLmV4dGVuZCh7fSx0KSxvKTsoaXx8WS5nZXQodGhpcyxcImZpbmlzaFwiKSkmJmUuc3RvcCghMCl9O3JldHVybiBhLmZpbmlzaD1hLGl8fCExPT09by5xdWV1ZT90aGlzLmVhY2goYSk6dGhpcy5xdWV1ZShvLnF1ZXVlLGEpfSxzdG9wOmZ1bmN0aW9uKGksZSxvKXt2YXIgYT1mdW5jdGlvbihlKXt2YXIgdD1lLnN0b3A7ZGVsZXRlIGUuc3RvcCx0KG8pfTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgaSYmKG89ZSxlPWksaT12b2lkIDApLGUmJnRoaXMucXVldWUoaXx8XCJmeFwiLFtdKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZT0hMCx0PW51bGwhPWkmJmkrXCJxdWV1ZUhvb2tzXCIsbj1TLnRpbWVycyxyPVkuZ2V0KHRoaXMpO2lmKHQpclt0XSYmclt0XS5zdG9wJiZhKHJbdF0pO2Vsc2UgZm9yKHQgaW4gcilyW3RdJiZyW3RdLnN0b3AmJmF0LnRlc3QodCkmJmEoclt0XSk7Zm9yKHQ9bi5sZW5ndGg7dC0tOyluW3RdLmVsZW0hPT10aGlzfHxudWxsIT1pJiZuW3RdLnF1ZXVlIT09aXx8KG5bdF0uYW5pbS5zdG9wKG8pLGU9ITEsbi5zcGxpY2UodCwxKSk7IWUmJm98fFMuZGVxdWV1ZSh0aGlzLGkpfSl9LGZpbmlzaDpmdW5jdGlvbihhKXtyZXR1cm4hMSE9PWEmJihhPWF8fFwiZnhcIiksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGUsdD1ZLmdldCh0aGlzKSxuPXRbYStcInF1ZXVlXCJdLHI9dFthK1wicXVldWVIb29rc1wiXSxpPVMudGltZXJzLG89bj9uLmxlbmd0aDowO2Zvcih0LmZpbmlzaD0hMCxTLnF1ZXVlKHRoaXMsYSxbXSksciYmci5zdG9wJiZyLnN0b3AuY2FsbCh0aGlzLCEwKSxlPWkubGVuZ3RoO2UtLTspaVtlXS5lbGVtPT09dGhpcyYmaVtlXS5xdWV1ZT09PWEmJihpW2VdLmFuaW0uc3RvcCghMCksaS5zcGxpY2UoZSwxKSk7Zm9yKGU9MDtlPG87ZSsrKW5bZV0mJm5bZV0uZmluaXNoJiZuW2VdLmZpbmlzaC5jYWxsKHRoaXMpO2RlbGV0ZSB0LmZpbmlzaH0pfX0pLFMuZWFjaChbXCJ0b2dnbGVcIixcInNob3dcIixcImhpZGVcIl0sZnVuY3Rpb24oZSxyKXt2YXIgaT1TLmZuW3JdO1MuZm5bcl09ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBudWxsPT1lfHxcImJvb2xlYW5cIj09dHlwZW9mIGU/aS5hcHBseSh0aGlzLGFyZ3VtZW50cyk6dGhpcy5hbmltYXRlKGx0KHIsITApLGUsdCxuKX19KSxTLmVhY2goe3NsaWRlRG93bjpsdChcInNob3dcIiksc2xpZGVVcDpsdChcImhpZGVcIiksc2xpZGVUb2dnbGU6bHQoXCJ0b2dnbGVcIiksZmFkZUluOntvcGFjaXR5Olwic2hvd1wifSxmYWRlT3V0OntvcGFjaXR5OlwiaGlkZVwifSxmYWRlVG9nZ2xlOntvcGFjaXR5OlwidG9nZ2xlXCJ9fSxmdW5jdGlvbihlLHIpe1MuZm5bZV09ZnVuY3Rpb24oZSx0LG4pe3JldHVybiB0aGlzLmFuaW1hdGUocixlLHQsbil9fSksUy50aW1lcnM9W10sUy5meC50aWNrPWZ1bmN0aW9uKCl7dmFyIGUsdD0wLG49Uy50aW1lcnM7Zm9yKHR0PURhdGUubm93KCk7dDxuLmxlbmd0aDt0KyspKGU9blt0XSkoKXx8blt0XSE9PWV8fG4uc3BsaWNlKHQtLSwxKTtuLmxlbmd0aHx8Uy5meC5zdG9wKCksdHQ9dm9pZCAwfSxTLmZ4LnRpbWVyPWZ1bmN0aW9uKGUpe1MudGltZXJzLnB1c2goZSksUy5meC5zdGFydCgpfSxTLmZ4LmludGVydmFsPTEzLFMuZnguc3RhcnQ9ZnVuY3Rpb24oKXtudHx8KG50PSEwLHN0KCkpfSxTLmZ4LnN0b3A9ZnVuY3Rpb24oKXtudD1udWxsfSxTLmZ4LnNwZWVkcz17c2xvdzo2MDAsZmFzdDoyMDAsX2RlZmF1bHQ6NDAwfSxTLmZuLmRlbGF5PWZ1bmN0aW9uKHIsZSl7cmV0dXJuIHI9Uy5meCYmUy5meC5zcGVlZHNbcl18fHIsZT1lfHxcImZ4XCIsdGhpcy5xdWV1ZShlLGZ1bmN0aW9uKGUsdCl7dmFyIG49Qy5zZXRUaW1lb3V0KGUscik7dC5zdG9wPWZ1bmN0aW9uKCl7Qy5jbGVhclRpbWVvdXQobil9fSl9LHJ0PUUuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGl0PUUuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKS5hcHBlbmRDaGlsZChFLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIikpLHJ0LnR5cGU9XCJjaGVja2JveFwiLHkuY2hlY2tPbj1cIlwiIT09cnQudmFsdWUseS5vcHRTZWxlY3RlZD1pdC5zZWxlY3RlZCwocnQ9RS5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIikpLnZhbHVlPVwidFwiLHJ0LnR5cGU9XCJyYWRpb1wiLHkucmFkaW9WYWx1ZT1cInRcIj09PXJ0LnZhbHVlO3ZhciBwdCxkdD1TLmV4cHIuYXR0ckhhbmRsZTtTLmZuLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihlLHQpe3JldHVybiAkKHRoaXMsUy5hdHRyLGUsdCwxPGFyZ3VtZW50cy5sZW5ndGgpfSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtTLnJlbW92ZUF0dHIodGhpcyxlKX0pfX0pLFMuZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89ZS5ub2RlVHlwZTtpZigzIT09byYmOCE9PW8mJjIhPT1vKXJldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBlLmdldEF0dHJpYnV0ZT9TLnByb3AoZSx0LG4pOigxPT09byYmUy5pc1hNTERvYyhlKXx8KGk9Uy5hdHRySG9va3NbdC50b0xvd2VyQ2FzZSgpXXx8KFMuZXhwci5tYXRjaC5ib29sLnRlc3QodCk/cHQ6dm9pZCAwKSksdm9pZCAwIT09bj9udWxsPT09bj92b2lkIFMucmVtb3ZlQXR0cihlLHQpOmkmJlwic2V0XCJpbiBpJiZ2b2lkIDAhPT0ocj1pLnNldChlLG4sdCkpP3I6KGUuc2V0QXR0cmlidXRlKHQsbitcIlwiKSxuKTppJiZcImdldFwiaW4gaSYmbnVsbCE9PShyPWkuZ2V0KGUsdCkpP3I6bnVsbD09KHI9Uy5maW5kLmF0dHIoZSx0KSk/dm9pZCAwOnIpfSxhdHRySG9va3M6e3R5cGU6e3NldDpmdW5jdGlvbihlLHQpe2lmKCF5LnJhZGlvVmFsdWUmJlwicmFkaW9cIj09PXQmJkEoZSxcImlucHV0XCIpKXt2YXIgbj1lLnZhbHVlO3JldHVybiBlLnNldEF0dHJpYnV0ZShcInR5cGVcIix0KSxuJiYoZS52YWx1ZT1uKSx0fX19fSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj0wLGk9dCYmdC5tYXRjaChQKTtpZihpJiYxPT09ZS5ub2RlVHlwZSl3aGlsZShuPWlbcisrXSllLnJlbW92ZUF0dHJpYnV0ZShuKX19KSxwdD17c2V0OmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4hMT09PXQ/Uy5yZW1vdmVBdHRyKGUsbik6ZS5zZXRBdHRyaWJ1dGUobixuKSxufX0sUy5lYWNoKFMuZXhwci5tYXRjaC5ib29sLnNvdXJjZS5tYXRjaCgvXFx3Ky9nKSxmdW5jdGlvbihlLHQpe3ZhciBhPWR0W3RdfHxTLmZpbmQuYXR0cjtkdFt0XT1mdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPXQudG9Mb3dlckNhc2UoKTtyZXR1cm4gbnx8KGk9ZHRbb10sZHRbb109cixyPW51bGwhPWEoZSx0LG4pP286bnVsbCxkdFtvXT1pKSxyfX0pO3ZhciBodD0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLGd0PS9eKD86YXxhcmVhKSQvaTtmdW5jdGlvbiB2dChlKXtyZXR1cm4oZS5tYXRjaChQKXx8W10pLmpvaW4oXCIgXCIpfWZ1bmN0aW9uIHl0KGUpe3JldHVybiBlLmdldEF0dHJpYnV0ZSYmZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIn1mdW5jdGlvbiBtdChlKXtyZXR1cm4gQXJyYXkuaXNBcnJheShlKT9lOlwic3RyaW5nXCI9PXR5cGVvZiBlJiZlLm1hdGNoKFApfHxbXX1TLmZuLmV4dGVuZCh7cHJvcDpmdW5jdGlvbihlLHQpe3JldHVybiAkKHRoaXMsUy5wcm9wLGUsdCwxPGFyZ3VtZW50cy5sZW5ndGgpfSxyZW1vdmVQcm9wOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtkZWxldGUgdGhpc1tTLnByb3BGaXhbZV18fGVdfSl9fSksUy5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz1lLm5vZGVUeXBlO2lmKDMhPT1vJiY4IT09byYmMiE9PW8pcmV0dXJuIDE9PT1vJiZTLmlzWE1MRG9jKGUpfHwodD1TLnByb3BGaXhbdF18fHQsaT1TLnByb3BIb29rc1t0XSksdm9pZCAwIT09bj9pJiZcInNldFwiaW4gaSYmdm9pZCAwIT09KHI9aS5zZXQoZSxuLHQpKT9yOmVbdF09bjppJiZcImdldFwiaW4gaSYmbnVsbCE9PShyPWkuZ2V0KGUsdCkpP3I6ZVt0XX0scHJvcEhvb2tzOnt0YWJJbmRleDp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0PVMuZmluZC5hdHRyKGUsXCJ0YWJpbmRleFwiKTtyZXR1cm4gdD9wYXJzZUludCh0LDEwKTpodC50ZXN0KGUubm9kZU5hbWUpfHxndC50ZXN0KGUubm9kZU5hbWUpJiZlLmhyZWY/MDotMX19fSxwcm9wRml4OntcImZvclwiOlwiaHRtbEZvclwiLFwiY2xhc3NcIjpcImNsYXNzTmFtZVwifX0pLHkub3B0U2VsZWN0ZWR8fChTLnByb3BIb29rcy5zZWxlY3RlZD17Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0PWUucGFyZW50Tm9kZTtyZXR1cm4gdCYmdC5wYXJlbnROb2RlJiZ0LnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCxudWxsfSxzZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5wYXJlbnROb2RlO3QmJih0LnNlbGVjdGVkSW5kZXgsdC5wYXJlbnROb2RlJiZ0LnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCl9fSksUy5lYWNoKFtcInRhYkluZGV4XCIsXCJyZWFkT25seVwiLFwibWF4TGVuZ3RoXCIsXCJjZWxsU3BhY2luZ1wiLFwiY2VsbFBhZGRpbmdcIixcInJvd1NwYW5cIixcImNvbFNwYW5cIixcInVzZU1hcFwiLFwiZnJhbWVCb3JkZXJcIixcImNvbnRlbnRFZGl0YWJsZVwiXSxmdW5jdGlvbigpe1MucHJvcEZpeFt0aGlzLnRvTG93ZXJDYXNlKCldPXRoaXN9KSxTLmZuLmV4dGVuZCh7YWRkQ2xhc3M6ZnVuY3Rpb24odCl7dmFyIGUsbixyLGksbyxhLHMsdT0wO2lmKG0odCkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihlKXtTKHRoaXMpLmFkZENsYXNzKHQuY2FsbCh0aGlzLGUseXQodGhpcykpKX0pO2lmKChlPW10KHQpKS5sZW5ndGgpd2hpbGUobj10aGlzW3UrK10paWYoaT15dChuKSxyPTE9PT1uLm5vZGVUeXBlJiZcIiBcIit2dChpKStcIiBcIil7YT0wO3doaWxlKG89ZVthKytdKXIuaW5kZXhPZihcIiBcIitvK1wiIFwiKTwwJiYocis9bytcIiBcIik7aSE9PShzPXZ0KHIpKSYmbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLHMpfXJldHVybiB0aGlzfSxyZW1vdmVDbGFzczpmdW5jdGlvbih0KXt2YXIgZSxuLHIsaSxvLGEscyx1PTA7aWYobSh0KSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGUpe1ModGhpcykucmVtb3ZlQ2xhc3ModC5jYWxsKHRoaXMsZSx5dCh0aGlzKSkpfSk7aWYoIWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHRoaXMuYXR0cihcImNsYXNzXCIsXCJcIik7aWYoKGU9bXQodCkpLmxlbmd0aCl3aGlsZShuPXRoaXNbdSsrXSlpZihpPXl0KG4pLHI9MT09PW4ubm9kZVR5cGUmJlwiIFwiK3Z0KGkpK1wiIFwiKXthPTA7d2hpbGUobz1lW2ErK10pd2hpbGUoLTE8ci5pbmRleE9mKFwiIFwiK28rXCIgXCIpKXI9ci5yZXBsYWNlKFwiIFwiK28rXCIgXCIsXCIgXCIpO2khPT0ocz12dChyKSkmJm4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIixzKX1yZXR1cm4gdGhpc30sdG9nZ2xlQ2xhc3M6ZnVuY3Rpb24oaSx0KXt2YXIgbz10eXBlb2YgaSxhPVwic3RyaW5nXCI9PT1vfHxBcnJheS5pc0FycmF5KGkpO3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgdCYmYT90P3RoaXMuYWRkQ2xhc3MoaSk6dGhpcy5yZW1vdmVDbGFzcyhpKTptKGkpP3RoaXMuZWFjaChmdW5jdGlvbihlKXtTKHRoaXMpLnRvZ2dsZUNsYXNzKGkuY2FsbCh0aGlzLGUseXQodGhpcyksdCksdCl9KTp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZSx0LG4scjtpZihhKXt0PTAsbj1TKHRoaXMpLHI9bXQoaSk7d2hpbGUoZT1yW3QrK10pbi5oYXNDbGFzcyhlKT9uLnJlbW92ZUNsYXNzKGUpOm4uYWRkQ2xhc3MoZSl9ZWxzZSB2b2lkIDAhPT1pJiZcImJvb2xlYW5cIiE9PW98fCgoZT15dCh0aGlzKSkmJlkuc2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIsZSksdGhpcy5zZXRBdHRyaWJ1dGUmJnRoaXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixlfHwhMT09PWk/XCJcIjpZLmdldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiKXx8XCJcIikpfSl9LGhhc0NsYXNzOmZ1bmN0aW9uKGUpe3ZhciB0LG4scj0wO3Q9XCIgXCIrZStcIiBcIjt3aGlsZShuPXRoaXNbcisrXSlpZigxPT09bi5ub2RlVHlwZSYmLTE8KFwiIFwiK3Z0KHl0KG4pKStcIiBcIikuaW5kZXhPZih0KSlyZXR1cm4hMDtyZXR1cm4hMX19KTt2YXIgeHQ9L1xcci9nO1MuZm4uZXh0ZW5kKHt2YWw6ZnVuY3Rpb24obil7dmFyIHIsZSxpLHQ9dGhpc1swXTtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD8oaT1tKG4pLHRoaXMuZWFjaChmdW5jdGlvbihlKXt2YXIgdDsxPT09dGhpcy5ub2RlVHlwZSYmKG51bGw9PSh0PWk/bi5jYWxsKHRoaXMsZSxTKHRoaXMpLnZhbCgpKTpuKT90PVwiXCI6XCJudW1iZXJcIj09dHlwZW9mIHQ/dCs9XCJcIjpBcnJheS5pc0FycmF5KHQpJiYodD1TLm1hcCh0LGZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP1wiXCI6ZStcIlwifSkpLChyPVMudmFsSG9va3NbdGhpcy50eXBlXXx8Uy52YWxIb29rc1t0aGlzLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldKSYmXCJzZXRcImluIHImJnZvaWQgMCE9PXIuc2V0KHRoaXMsdCxcInZhbHVlXCIpfHwodGhpcy52YWx1ZT10KSl9KSk6dD8ocj1TLnZhbEhvb2tzW3QudHlwZV18fFMudmFsSG9va3NbdC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSkmJlwiZ2V0XCJpbiByJiZ2b2lkIDAhPT0oZT1yLmdldCh0LFwidmFsdWVcIikpP2U6XCJzdHJpbmdcIj09dHlwZW9mKGU9dC52YWx1ZSk/ZS5yZXBsYWNlKHh0LFwiXCIpOm51bGw9PWU/XCJcIjplOnZvaWQgMH19KSxTLmV4dGVuZCh7dmFsSG9va3M6e29wdGlvbjp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0PVMuZmluZC5hdHRyKGUsXCJ2YWx1ZVwiKTtyZXR1cm4gbnVsbCE9dD90OnZ0KFMudGV4dChlKSl9fSxzZWxlY3Q6e2dldDpmdW5jdGlvbihlKXt2YXIgdCxuLHIsaT1lLm9wdGlvbnMsbz1lLnNlbGVjdGVkSW5kZXgsYT1cInNlbGVjdC1vbmVcIj09PWUudHlwZSxzPWE/bnVsbDpbXSx1PWE/bysxOmkubGVuZ3RoO2ZvcihyPW88MD91OmE/bzowO3I8dTtyKyspaWYoKChuPWlbcl0pLnNlbGVjdGVkfHxyPT09bykmJiFuLmRpc2FibGVkJiYoIW4ucGFyZW50Tm9kZS5kaXNhYmxlZHx8IUEobi5wYXJlbnROb2RlLFwib3B0Z3JvdXBcIikpKXtpZih0PVMobikudmFsKCksYSlyZXR1cm4gdDtzLnB1c2godCl9cmV0dXJuIHN9LHNldDpmdW5jdGlvbihlLHQpe3ZhciBuLHIsaT1lLm9wdGlvbnMsbz1TLm1ha2VBcnJheSh0KSxhPWkubGVuZ3RoO3doaWxlKGEtLSkoKHI9aVthXSkuc2VsZWN0ZWQ9LTE8Uy5pbkFycmF5KFMudmFsSG9va3Mub3B0aW9uLmdldChyKSxvKSkmJihuPSEwKTtyZXR1cm4gbnx8KGUuc2VsZWN0ZWRJbmRleD0tMSksb319fX0pLFMuZWFjaChbXCJyYWRpb1wiLFwiY2hlY2tib3hcIl0sZnVuY3Rpb24oKXtTLnZhbEhvb2tzW3RoaXNdPXtzZXQ6ZnVuY3Rpb24oZSx0KXtpZihBcnJheS5pc0FycmF5KHQpKXJldHVybiBlLmNoZWNrZWQ9LTE8Uy5pbkFycmF5KFMoZSkudmFsKCksdCl9fSx5LmNoZWNrT258fChTLnZhbEhvb2tzW3RoaXNdLmdldD1mdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09PWUuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik/XCJvblwiOmUudmFsdWV9KX0pLHkuZm9jdXNpbj1cIm9uZm9jdXNpblwiaW4gQzt2YXIgYnQ9L14oPzpmb2N1c2luZm9jdXN8Zm9jdXNvdXRibHVyKSQvLHd0PWZ1bmN0aW9uKGUpe2Uuc3RvcFByb3BhZ2F0aW9uKCl9O1MuZXh0ZW5kKFMuZXZlbnQse3RyaWdnZXI6ZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbyxhLHMsdSxsLGMsZixwPVtufHxFXSxkPXYuY2FsbChlLFwidHlwZVwiKT9lLnR5cGU6ZSxoPXYuY2FsbChlLFwibmFtZXNwYWNlXCIpP2UubmFtZXNwYWNlLnNwbGl0KFwiLlwiKTpbXTtpZihvPWY9YT1uPW58fEUsMyE9PW4ubm9kZVR5cGUmJjghPT1uLm5vZGVUeXBlJiYhYnQudGVzdChkK1MuZXZlbnQudHJpZ2dlcmVkKSYmKC0xPGQuaW5kZXhPZihcIi5cIikmJihkPShoPWQuc3BsaXQoXCIuXCIpKS5zaGlmdCgpLGguc29ydCgpKSx1PWQuaW5kZXhPZihcIjpcIik8MCYmXCJvblwiK2QsKGU9ZVtTLmV4cGFuZG9dP2U6bmV3IFMuRXZlbnQoZCxcIm9iamVjdFwiPT10eXBlb2YgZSYmZSkpLmlzVHJpZ2dlcj1yPzI6MyxlLm5hbWVzcGFjZT1oLmpvaW4oXCIuXCIpLGUucm5hbWVzcGFjZT1lLm5hbWVzcGFjZT9uZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIraC5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIik6bnVsbCxlLnJlc3VsdD12b2lkIDAsZS50YXJnZXR8fChlLnRhcmdldD1uKSx0PW51bGw9PXQ/W2VdOlMubWFrZUFycmF5KHQsW2VdKSxjPVMuZXZlbnQuc3BlY2lhbFtkXXx8e30scnx8IWMudHJpZ2dlcnx8ITEhPT1jLnRyaWdnZXIuYXBwbHkobix0KSkpe2lmKCFyJiYhYy5ub0J1YmJsZSYmIXgobikpe2ZvcihzPWMuZGVsZWdhdGVUeXBlfHxkLGJ0LnRlc3QocytkKXx8KG89by5wYXJlbnROb2RlKTtvO289by5wYXJlbnROb2RlKXAucHVzaChvKSxhPW87YT09PShuLm93bmVyRG9jdW1lbnR8fEUpJiZwLnB1c2goYS5kZWZhdWx0Vmlld3x8YS5wYXJlbnRXaW5kb3d8fEMpfWk9MDt3aGlsZSgobz1wW2krK10pJiYhZS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKWY9byxlLnR5cGU9MTxpP3M6Yy5iaW5kVHlwZXx8ZCwobD0oWS5nZXQobyxcImV2ZW50c1wiKXx8T2JqZWN0LmNyZWF0ZShudWxsKSlbZS50eXBlXSYmWS5nZXQobyxcImhhbmRsZVwiKSkmJmwuYXBwbHkobyx0KSwobD11JiZvW3VdKSYmbC5hcHBseSYmVihvKSYmKGUucmVzdWx0PWwuYXBwbHkobyx0KSwhMT09PWUucmVzdWx0JiZlLnByZXZlbnREZWZhdWx0KCkpO3JldHVybiBlLnR5cGU9ZCxyfHxlLmlzRGVmYXVsdFByZXZlbnRlZCgpfHxjLl9kZWZhdWx0JiYhMSE9PWMuX2RlZmF1bHQuYXBwbHkocC5wb3AoKSx0KXx8IVYobil8fHUmJm0obltkXSkmJiF4KG4pJiYoKGE9blt1XSkmJihuW3VdPW51bGwpLFMuZXZlbnQudHJpZ2dlcmVkPWQsZS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpJiZmLmFkZEV2ZW50TGlzdGVuZXIoZCx3dCksbltkXSgpLGUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSYmZi5yZW1vdmVFdmVudExpc3RlbmVyKGQsd3QpLFMuZXZlbnQudHJpZ2dlcmVkPXZvaWQgMCxhJiYoblt1XT1hKSksZS5yZXN1bHR9fSxzaW11bGF0ZTpmdW5jdGlvbihlLHQsbil7dmFyIHI9Uy5leHRlbmQobmV3IFMuRXZlbnQsbix7dHlwZTplLGlzU2ltdWxhdGVkOiEwfSk7Uy5ldmVudC50cmlnZ2VyKHIsbnVsbCx0KX19KSxTLmZuLmV4dGVuZCh7dHJpZ2dlcjpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtTLmV2ZW50LnRyaWdnZXIoZSx0LHRoaXMpfSl9LHRyaWdnZXJIYW5kbGVyOmZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpc1swXTtpZihuKXJldHVybiBTLmV2ZW50LnRyaWdnZXIoZSx0LG4sITApfX0pLHkuZm9jdXNpbnx8Uy5lYWNoKHtmb2N1czpcImZvY3VzaW5cIixibHVyOlwiZm9jdXNvdXRcIn0sZnVuY3Rpb24obixyKXt2YXIgaT1mdW5jdGlvbihlKXtTLmV2ZW50LnNpbXVsYXRlKHIsZS50YXJnZXQsUy5ldmVudC5maXgoZSkpfTtTLmV2ZW50LnNwZWNpYWxbcl09e3NldHVwOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLmRvY3VtZW50fHx0aGlzLHQ9WS5hY2Nlc3MoZSxyKTt0fHxlLmFkZEV2ZW50TGlzdGVuZXIobixpLCEwKSxZLmFjY2VzcyhlLHIsKHR8fDApKzEpfSx0ZWFyZG93bjpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcy5kb2N1bWVudHx8dGhpcyx0PVkuYWNjZXNzKGUsciktMTt0P1kuYWNjZXNzKGUscix0KTooZS5yZW1vdmVFdmVudExpc3RlbmVyKG4saSwhMCksWS5yZW1vdmUoZSxyKSl9fX0pO3ZhciBUdD1DLmxvY2F0aW9uLEN0PXtndWlkOkRhdGUubm93KCl9LEV0PS9cXD8vO1MucGFyc2VYTUw9ZnVuY3Rpb24oZSl7dmFyIHQ7aWYoIWV8fFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybiBudWxsO3RyeXt0PShuZXcgQy5ET01QYXJzZXIpLnBhcnNlRnJvbVN0cmluZyhlLFwidGV4dC94bWxcIil9Y2F0Y2goZSl7dD12b2lkIDB9cmV0dXJuIHQmJiF0LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicGFyc2VyZXJyb3JcIikubGVuZ3RofHxTLmVycm9yKFwiSW52YWxpZCBYTUw6IFwiK2UpLHR9O3ZhciBTdD0vXFxbXFxdJC8sa3Q9L1xccj9cXG4vZyxBdD0vXig/OnN1Ym1pdHxidXR0b258aW1hZ2V8cmVzZXR8ZmlsZSkkL2ksTnQ9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8a2V5Z2VuKS9pO2Z1bmN0aW9uIER0KG4sZSxyLGkpe3ZhciB0O2lmKEFycmF5LmlzQXJyYXkoZSkpUy5lYWNoKGUsZnVuY3Rpb24oZSx0KXtyfHxTdC50ZXN0KG4pP2kobix0KTpEdChuK1wiW1wiKyhcIm9iamVjdFwiPT10eXBlb2YgdCYmbnVsbCE9dD9lOlwiXCIpK1wiXVwiLHQscixpKX0pO2Vsc2UgaWYocnx8XCJvYmplY3RcIiE9PXcoZSkpaShuLGUpO2Vsc2UgZm9yKHQgaW4gZSlEdChuK1wiW1wiK3QrXCJdXCIsZVt0XSxyLGkpfVMucGFyYW09ZnVuY3Rpb24oZSx0KXt2YXIgbixyPVtdLGk9ZnVuY3Rpb24oZSx0KXt2YXIgbj1tKHQpP3QoKTp0O3Jbci5sZW5ndGhdPWVuY29kZVVSSUNvbXBvbmVudChlKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQobnVsbD09bj9cIlwiOm4pfTtpZihudWxsPT1lKXJldHVyblwiXCI7aWYoQXJyYXkuaXNBcnJheShlKXx8ZS5qcXVlcnkmJiFTLmlzUGxhaW5PYmplY3QoZSkpUy5lYWNoKGUsZnVuY3Rpb24oKXtpKHRoaXMubmFtZSx0aGlzLnZhbHVlKX0pO2Vsc2UgZm9yKG4gaW4gZSlEdChuLGVbbl0sdCxpKTtyZXR1cm4gci5qb2luKFwiJlwiKX0sUy5mbi5leHRlbmQoe3NlcmlhbGl6ZTpmdW5jdGlvbigpe3JldHVybiBTLnBhcmFtKHRoaXMuc2VyaWFsaXplQXJyYXkoKSl9LHNlcmlhbGl6ZUFycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGU9Uy5wcm9wKHRoaXMsXCJlbGVtZW50c1wiKTtyZXR1cm4gZT9TLm1ha2VBcnJheShlKTp0aGlzfSkuZmlsdGVyKGZ1bmN0aW9uKCl7dmFyIGU9dGhpcy50eXBlO3JldHVybiB0aGlzLm5hbWUmJiFTKHRoaXMpLmlzKFwiOmRpc2FibGVkXCIpJiZOdC50ZXN0KHRoaXMubm9kZU5hbWUpJiYhQXQudGVzdChlKSYmKHRoaXMuY2hlY2tlZHx8IXBlLnRlc3QoZSkpfSkubWFwKGZ1bmN0aW9uKGUsdCl7dmFyIG49Uyh0aGlzKS52YWwoKTtyZXR1cm4gbnVsbD09bj9udWxsOkFycmF5LmlzQXJyYXkobik/Uy5tYXAobixmdW5jdGlvbihlKXtyZXR1cm57bmFtZTp0Lm5hbWUsdmFsdWU6ZS5yZXBsYWNlKGt0LFwiXFxyXFxuXCIpfX0pOntuYW1lOnQubmFtZSx2YWx1ZTpuLnJlcGxhY2Uoa3QsXCJcXHJcXG5cIil9fSkuZ2V0KCl9fSk7dmFyIGp0PS8lMjAvZyxxdD0vIy4qJC8sTHQ9LyhbPyZdKV89W14mXSovLEh0PS9eKC4qPyk6WyBcXHRdKihbXlxcclxcbl0qKSQvZ20sT3Q9L14oPzpHRVR8SEVBRCkkLyxQdD0vXlxcL1xcLy8sUnQ9e30sTXQ9e30sSXQ9XCIqL1wiLmNvbmNhdChcIipcIiksV3Q9RS5jcmVhdGVFbGVtZW50KFwiYVwiKTtmdW5jdGlvbiBGdChvKXtyZXR1cm4gZnVuY3Rpb24oZSx0KXtcInN0cmluZ1wiIT10eXBlb2YgZSYmKHQ9ZSxlPVwiKlwiKTt2YXIgbixyPTAsaT1lLnRvTG93ZXJDYXNlKCkubWF0Y2goUCl8fFtdO2lmKG0odCkpd2hpbGUobj1pW3IrK10pXCIrXCI9PT1uWzBdPyhuPW4uc2xpY2UoMSl8fFwiKlwiLChvW25dPW9bbl18fFtdKS51bnNoaWZ0KHQpKToob1tuXT1vW25dfHxbXSkucHVzaCh0KX19ZnVuY3Rpb24gQnQodCxpLG8sYSl7dmFyIHM9e30sdT10PT09TXQ7ZnVuY3Rpb24gbChlKXt2YXIgcjtyZXR1cm4gc1tlXT0hMCxTLmVhY2godFtlXXx8W10sZnVuY3Rpb24oZSx0KXt2YXIgbj10KGksbyxhKTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2Ygbnx8dXx8c1tuXT91PyEocj1uKTp2b2lkIDA6KGkuZGF0YVR5cGVzLnVuc2hpZnQobiksbChuKSwhMSl9KSxyfXJldHVybiBsKGkuZGF0YVR5cGVzWzBdKXx8IXNbXCIqXCJdJiZsKFwiKlwiKX1mdW5jdGlvbiAkdChlLHQpe3ZhciBuLHIsaT1TLmFqYXhTZXR0aW5ncy5mbGF0T3B0aW9uc3x8e307Zm9yKG4gaW4gdCl2b2lkIDAhPT10W25dJiYoKGlbbl0/ZTpyfHwocj17fSkpW25dPXRbbl0pO3JldHVybiByJiZTLmV4dGVuZCghMCxlLHIpLGV9V3QuaHJlZj1UdC5ocmVmLFMuZXh0ZW5kKHthY3RpdmU6MCxsYXN0TW9kaWZpZWQ6e30sZXRhZzp7fSxhamF4U2V0dGluZ3M6e3VybDpUdC5ocmVmLHR5cGU6XCJHRVRcIixpc0xvY2FsOi9eKD86YWJvdXR8YXBwfGFwcC1zdG9yYWdlfC4rLWV4dGVuc2lvbnxmaWxlfHJlc3x3aWRnZXQpOiQvLnRlc3QoVHQucHJvdG9jb2wpLGdsb2JhbDohMCxwcm9jZXNzRGF0YTohMCxhc3luYzohMCxjb250ZW50VHlwZTpcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOFwiLGFjY2VwdHM6e1wiKlwiOkl0LHRleHQ6XCJ0ZXh0L3BsYWluXCIsaHRtbDpcInRleHQvaHRtbFwiLHhtbDpcImFwcGxpY2F0aW9uL3htbCwgdGV4dC94bWxcIixqc29uOlwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0XCJ9LGNvbnRlbnRzOnt4bWw6L1xcYnhtbFxcYi8saHRtbDovXFxiaHRtbC8sanNvbjovXFxianNvblxcYi99LHJlc3BvbnNlRmllbGRzOnt4bWw6XCJyZXNwb25zZVhNTFwiLHRleHQ6XCJyZXNwb25zZVRleHRcIixqc29uOlwicmVzcG9uc2VKU09OXCJ9LGNvbnZlcnRlcnM6e1wiKiB0ZXh0XCI6U3RyaW5nLFwidGV4dCBodG1sXCI6ITAsXCJ0ZXh0IGpzb25cIjpKU09OLnBhcnNlLFwidGV4dCB4bWxcIjpTLnBhcnNlWE1MfSxmbGF0T3B0aW9uczp7dXJsOiEwLGNvbnRleHQ6ITB9fSxhamF4U2V0dXA6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdD8kdCgkdChlLFMuYWpheFNldHRpbmdzKSx0KTokdChTLmFqYXhTZXR0aW5ncyxlKX0sYWpheFByZWZpbHRlcjpGdChSdCksYWpheFRyYW5zcG9ydDpGdChNdCksYWpheDpmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBlJiYodD1lLGU9dm9pZCAwKSx0PXR8fHt9O3ZhciBjLGYscCxuLGQscixoLGcsaSxvLHY9Uy5hamF4U2V0dXAoe30sdCkseT12LmNvbnRleHR8fHYsbT12LmNvbnRleHQmJih5Lm5vZGVUeXBlfHx5LmpxdWVyeSk/Uyh5KTpTLmV2ZW50LHg9Uy5EZWZlcnJlZCgpLGI9Uy5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSx3PXYuc3RhdHVzQ29kZXx8e30sYT17fSxzPXt9LHU9XCJjYW5jZWxlZFwiLFQ9e3JlYWR5U3RhdGU6MCxnZXRSZXNwb25zZUhlYWRlcjpmdW5jdGlvbihlKXt2YXIgdDtpZihoKXtpZighbil7bj17fTt3aGlsZSh0PUh0LmV4ZWMocCkpblt0WzFdLnRvTG93ZXJDYXNlKCkrXCIgXCJdPShuW3RbMV0udG9Mb3dlckNhc2UoKStcIiBcIl18fFtdKS5jb25jYXQodFsyXSl9dD1uW2UudG9Mb3dlckNhc2UoKStcIiBcIl19cmV0dXJuIG51bGw9PXQ/bnVsbDp0LmpvaW4oXCIsIFwiKX0sZ2V0QWxsUmVzcG9uc2VIZWFkZXJzOmZ1bmN0aW9uKCl7cmV0dXJuIGg/cDpudWxsfSxzZXRSZXF1ZXN0SGVhZGVyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIG51bGw9PWgmJihlPXNbZS50b0xvd2VyQ2FzZSgpXT1zW2UudG9Mb3dlckNhc2UoKV18fGUsYVtlXT10KSx0aGlzfSxvdmVycmlkZU1pbWVUeXBlOmZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1oJiYodi5taW1lVHlwZT1lKSx0aGlzfSxzdGF0dXNDb2RlOmZ1bmN0aW9uKGUpe3ZhciB0O2lmKGUpaWYoaClULmFsd2F5cyhlW1Quc3RhdHVzXSk7ZWxzZSBmb3IodCBpbiBlKXdbdF09W3dbdF0sZVt0XV07cmV0dXJuIHRoaXN9LGFib3J0OmZ1bmN0aW9uKGUpe3ZhciB0PWV8fHU7cmV0dXJuIGMmJmMuYWJvcnQodCksbCgwLHQpLHRoaXN9fTtpZih4LnByb21pc2UoVCksdi51cmw9KChlfHx2LnVybHx8VHQuaHJlZikrXCJcIikucmVwbGFjZShQdCxUdC5wcm90b2NvbCtcIi8vXCIpLHYudHlwZT10Lm1ldGhvZHx8dC50eXBlfHx2Lm1ldGhvZHx8di50eXBlLHYuZGF0YVR5cGVzPSh2LmRhdGFUeXBlfHxcIipcIikudG9Mb3dlckNhc2UoKS5tYXRjaChQKXx8W1wiXCJdLG51bGw9PXYuY3Jvc3NEb21haW4pe3I9RS5jcmVhdGVFbGVtZW50KFwiYVwiKTt0cnl7ci5ocmVmPXYudXJsLHIuaHJlZj1yLmhyZWYsdi5jcm9zc0RvbWFpbj1XdC5wcm90b2NvbCtcIi8vXCIrV3QuaG9zdCE9ci5wcm90b2NvbCtcIi8vXCIrci5ob3N0fWNhdGNoKGUpe3YuY3Jvc3NEb21haW49ITB9fWlmKHYuZGF0YSYmdi5wcm9jZXNzRGF0YSYmXCJzdHJpbmdcIiE9dHlwZW9mIHYuZGF0YSYmKHYuZGF0YT1TLnBhcmFtKHYuZGF0YSx2LnRyYWRpdGlvbmFsKSksQnQoUnQsdix0LFQpLGgpcmV0dXJuIFQ7Zm9yKGkgaW4oZz1TLmV2ZW50JiZ2Lmdsb2JhbCkmJjA9PVMuYWN0aXZlKysmJlMuZXZlbnQudHJpZ2dlcihcImFqYXhTdGFydFwiKSx2LnR5cGU9di50eXBlLnRvVXBwZXJDYXNlKCksdi5oYXNDb250ZW50PSFPdC50ZXN0KHYudHlwZSksZj12LnVybC5yZXBsYWNlKHF0LFwiXCIpLHYuaGFzQ29udGVudD92LmRhdGEmJnYucHJvY2Vzc0RhdGEmJjA9PT0odi5jb250ZW50VHlwZXx8XCJcIikuaW5kZXhPZihcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSYmKHYuZGF0YT12LmRhdGEucmVwbGFjZShqdCxcIitcIikpOihvPXYudXJsLnNsaWNlKGYubGVuZ3RoKSx2LmRhdGEmJih2LnByb2Nlc3NEYXRhfHxcInN0cmluZ1wiPT10eXBlb2Ygdi5kYXRhKSYmKGYrPShFdC50ZXN0KGYpP1wiJlwiOlwiP1wiKSt2LmRhdGEsZGVsZXRlIHYuZGF0YSksITE9PT12LmNhY2hlJiYoZj1mLnJlcGxhY2UoTHQsXCIkMVwiKSxvPShFdC50ZXN0KGYpP1wiJlwiOlwiP1wiKStcIl89XCIrQ3QuZ3VpZCsrK28pLHYudXJsPWYrbyksdi5pZk1vZGlmaWVkJiYoUy5sYXN0TW9kaWZpZWRbZl0mJlQuc2V0UmVxdWVzdEhlYWRlcihcIklmLU1vZGlmaWVkLVNpbmNlXCIsUy5sYXN0TW9kaWZpZWRbZl0pLFMuZXRhZ1tmXSYmVC5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTm9uZS1NYXRjaFwiLFMuZXRhZ1tmXSkpLCh2LmRhdGEmJnYuaGFzQ29udGVudCYmITEhPT12LmNvbnRlbnRUeXBlfHx0LmNvbnRlbnRUeXBlKSYmVC5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsdi5jb250ZW50VHlwZSksVC5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsdi5kYXRhVHlwZXNbMF0mJnYuYWNjZXB0c1t2LmRhdGFUeXBlc1swXV0/di5hY2NlcHRzW3YuZGF0YVR5cGVzWzBdXSsoXCIqXCIhPT12LmRhdGFUeXBlc1swXT9cIiwgXCIrSXQrXCI7IHE9MC4wMVwiOlwiXCIpOnYuYWNjZXB0c1tcIipcIl0pLHYuaGVhZGVycylULnNldFJlcXVlc3RIZWFkZXIoaSx2LmhlYWRlcnNbaV0pO2lmKHYuYmVmb3JlU2VuZCYmKCExPT09di5iZWZvcmVTZW5kLmNhbGwoeSxULHYpfHxoKSlyZXR1cm4gVC5hYm9ydCgpO2lmKHU9XCJhYm9ydFwiLGIuYWRkKHYuY29tcGxldGUpLFQuZG9uZSh2LnN1Y2Nlc3MpLFQuZmFpbCh2LmVycm9yKSxjPUJ0KE10LHYsdCxUKSl7aWYoVC5yZWFkeVN0YXRlPTEsZyYmbS50cmlnZ2VyKFwiYWpheFNlbmRcIixbVCx2XSksaClyZXR1cm4gVDt2LmFzeW5jJiYwPHYudGltZW91dCYmKGQ9Qy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7VC5hYm9ydChcInRpbWVvdXRcIil9LHYudGltZW91dCkpO3RyeXtoPSExLGMuc2VuZChhLGwpfWNhdGNoKGUpe2lmKGgpdGhyb3cgZTtsKC0xLGUpfX1lbHNlIGwoLTEsXCJObyBUcmFuc3BvcnRcIik7ZnVuY3Rpb24gbChlLHQsbixyKXt2YXIgaSxvLGEscyx1LGw9dDtofHwoaD0hMCxkJiZDLmNsZWFyVGltZW91dChkKSxjPXZvaWQgMCxwPXJ8fFwiXCIsVC5yZWFkeVN0YXRlPTA8ZT80OjAsaT0yMDA8PWUmJmU8MzAwfHwzMDQ9PT1lLG4mJihzPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYSxzPWUuY29udGVudHMsdT1lLmRhdGFUeXBlczt3aGlsZShcIipcIj09PXVbMF0pdS5zaGlmdCgpLHZvaWQgMD09PXImJihyPWUubWltZVR5cGV8fHQuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIikpO2lmKHIpZm9yKGkgaW4gcylpZihzW2ldJiZzW2ldLnRlc3Qocikpe3UudW5zaGlmdChpKTticmVha31pZih1WzBdaW4gbilvPXVbMF07ZWxzZXtmb3IoaSBpbiBuKXtpZighdVswXXx8ZS5jb252ZXJ0ZXJzW2krXCIgXCIrdVswXV0pe289aTticmVha31hfHwoYT1pKX1vPW98fGF9aWYobylyZXR1cm4gbyE9PXVbMF0mJnUudW5zaGlmdChvKSxuW29dfSh2LFQsbikpLCFpJiYtMTxTLmluQXJyYXkoXCJzY3JpcHRcIix2LmRhdGFUeXBlcykmJih2LmNvbnZlcnRlcnNbXCJ0ZXh0IHNjcmlwdFwiXT1mdW5jdGlvbigpe30pLHM9ZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbyxhLHMsdSxsPXt9LGM9ZS5kYXRhVHlwZXMuc2xpY2UoKTtpZihjWzFdKWZvcihhIGluIGUuY29udmVydGVycylsW2EudG9Mb3dlckNhc2UoKV09ZS5jb252ZXJ0ZXJzW2FdO289Yy5zaGlmdCgpO3doaWxlKG8paWYoZS5yZXNwb25zZUZpZWxkc1tvXSYmKG5bZS5yZXNwb25zZUZpZWxkc1tvXV09dCksIXUmJnImJmUuZGF0YUZpbHRlciYmKHQ9ZS5kYXRhRmlsdGVyKHQsZS5kYXRhVHlwZSkpLHU9byxvPWMuc2hpZnQoKSlpZihcIipcIj09PW8pbz11O2Vsc2UgaWYoXCIqXCIhPT11JiZ1IT09byl7aWYoIShhPWxbdStcIiBcIitvXXx8bFtcIiogXCIrb10pKWZvcihpIGluIGwpaWYoKHM9aS5zcGxpdChcIiBcIikpWzFdPT09byYmKGE9bFt1K1wiIFwiK3NbMF1dfHxsW1wiKiBcIitzWzBdXSkpeyEwPT09YT9hPWxbaV06ITAhPT1sW2ldJiYobz1zWzBdLGMudW5zaGlmdChzWzFdKSk7YnJlYWt9aWYoITAhPT1hKWlmKGEmJmVbXCJ0aHJvd3NcIl0pdD1hKHQpO2Vsc2UgdHJ5e3Q9YSh0KX1jYXRjaChlKXtyZXR1cm57c3RhdGU6XCJwYXJzZXJlcnJvclwiLGVycm9yOmE/ZTpcIk5vIGNvbnZlcnNpb24gZnJvbSBcIit1K1wiIHRvIFwiK299fX1yZXR1cm57c3RhdGU6XCJzdWNjZXNzXCIsZGF0YTp0fX0odixzLFQsaSksaT8odi5pZk1vZGlmaWVkJiYoKHU9VC5nZXRSZXNwb25zZUhlYWRlcihcIkxhc3QtTW9kaWZpZWRcIikpJiYoUy5sYXN0TW9kaWZpZWRbZl09dSksKHU9VC5nZXRSZXNwb25zZUhlYWRlcihcImV0YWdcIikpJiYoUy5ldGFnW2ZdPXUpKSwyMDQ9PT1lfHxcIkhFQURcIj09PXYudHlwZT9sPVwibm9jb250ZW50XCI6MzA0PT09ZT9sPVwibm90bW9kaWZpZWRcIjoobD1zLnN0YXRlLG89cy5kYXRhLGk9IShhPXMuZXJyb3IpKSk6KGE9bCwhZSYmbHx8KGw9XCJlcnJvclwiLGU8MCYmKGU9MCkpKSxULnN0YXR1cz1lLFQuc3RhdHVzVGV4dD0odHx8bCkrXCJcIixpP3gucmVzb2x2ZVdpdGgoeSxbbyxsLFRdKTp4LnJlamVjdFdpdGgoeSxbVCxsLGFdKSxULnN0YXR1c0NvZGUodyksdz12b2lkIDAsZyYmbS50cmlnZ2VyKGk/XCJhamF4U3VjY2Vzc1wiOlwiYWpheEVycm9yXCIsW1QsdixpP286YV0pLGIuZmlyZVdpdGgoeSxbVCxsXSksZyYmKG0udHJpZ2dlcihcImFqYXhDb21wbGV0ZVwiLFtULHZdKSwtLVMuYWN0aXZlfHxTLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RvcFwiKSkpfXJldHVybiBUfSxnZXRKU09OOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gUy5nZXQoZSx0LG4sXCJqc29uXCIpfSxnZXRTY3JpcHQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gUy5nZXQoZSx2b2lkIDAsdCxcInNjcmlwdFwiKX19KSxTLmVhY2goW1wiZ2V0XCIsXCJwb3N0XCJdLGZ1bmN0aW9uKGUsaSl7U1tpXT1mdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gbSh0KSYmKHI9cnx8bixuPXQsdD12b2lkIDApLFMuYWpheChTLmV4dGVuZCh7dXJsOmUsdHlwZTppLGRhdGFUeXBlOnIsZGF0YTp0LHN1Y2Nlc3M6bn0sUy5pc1BsYWluT2JqZWN0KGUpJiZlKSl9fSksUy5hamF4UHJlZmlsdGVyKGZ1bmN0aW9uKGUpe3ZhciB0O2Zvcih0IGluIGUuaGVhZGVycylcImNvbnRlbnQtdHlwZVwiPT09dC50b0xvd2VyQ2FzZSgpJiYoZS5jb250ZW50VHlwZT1lLmhlYWRlcnNbdF18fFwiXCIpfSksUy5fZXZhbFVybD1mdW5jdGlvbihlLHQsbil7cmV0dXJuIFMuYWpheCh7dXJsOmUsdHlwZTpcIkdFVFwiLGRhdGFUeXBlOlwic2NyaXB0XCIsY2FjaGU6ITAsYXN5bmM6ITEsZ2xvYmFsOiExLGNvbnZlcnRlcnM6e1widGV4dCBzY3JpcHRcIjpmdW5jdGlvbigpe319LGRhdGFGaWx0ZXI6ZnVuY3Rpb24oZSl7Uy5nbG9iYWxFdmFsKGUsdCxuKX19KX0sUy5mbi5leHRlbmQoe3dyYXBBbGw6ZnVuY3Rpb24oZSl7dmFyIHQ7cmV0dXJuIHRoaXNbMF0mJihtKGUpJiYoZT1lLmNhbGwodGhpc1swXSkpLHQ9UyhlLHRoaXNbMF0ub3duZXJEb2N1bWVudCkuZXEoMCkuY2xvbmUoITApLHRoaXNbMF0ucGFyZW50Tm9kZSYmdC5pbnNlcnRCZWZvcmUodGhpc1swXSksdC5tYXAoZnVuY3Rpb24oKXt2YXIgZT10aGlzO3doaWxlKGUuZmlyc3RFbGVtZW50Q2hpbGQpZT1lLmZpcnN0RWxlbWVudENoaWxkO3JldHVybiBlfSkuYXBwZW5kKHRoaXMpKSx0aGlzfSx3cmFwSW5uZXI6ZnVuY3Rpb24obil7cmV0dXJuIG0obik/dGhpcy5lYWNoKGZ1bmN0aW9uKGUpe1ModGhpcykud3JhcElubmVyKG4uY2FsbCh0aGlzLGUpKX0pOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlPVModGhpcyksdD1lLmNvbnRlbnRzKCk7dC5sZW5ndGg/dC53cmFwQWxsKG4pOmUuYXBwZW5kKG4pfSl9LHdyYXA6ZnVuY3Rpb24odCl7dmFyIG49bSh0KTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGUpe1ModGhpcykud3JhcEFsbChuP3QuY2FsbCh0aGlzLGUpOnQpfSl9LHVud3JhcDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5wYXJlbnQoZSkubm90KFwiYm9keVwiKS5lYWNoKGZ1bmN0aW9uKCl7Uyh0aGlzKS5yZXBsYWNlV2l0aCh0aGlzLmNoaWxkTm9kZXMpfSksdGhpc319KSxTLmV4cHIucHNldWRvcy5oaWRkZW49ZnVuY3Rpb24oZSl7cmV0dXJuIVMuZXhwci5wc2V1ZG9zLnZpc2libGUoZSl9LFMuZXhwci5wc2V1ZG9zLnZpc2libGU9ZnVuY3Rpb24oZSl7cmV0dXJuISEoZS5vZmZzZXRXaWR0aHx8ZS5vZmZzZXRIZWlnaHR8fGUuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpfSxTLmFqYXhTZXR0aW5ncy54aHI9ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIG5ldyBDLlhNTEh0dHBSZXF1ZXN0fWNhdGNoKGUpe319O3ZhciBfdD17MDoyMDAsMTIyMzoyMDR9LHp0PVMuYWpheFNldHRpbmdzLnhocigpO3kuY29ycz0hIXp0JiZcIndpdGhDcmVkZW50aWFsc1wiaW4genQseS5hamF4PXp0PSEhenQsUy5hamF4VHJhbnNwb3J0KGZ1bmN0aW9uKGkpe3ZhciBvLGE7aWYoeS5jb3JzfHx6dCYmIWkuY3Jvc3NEb21haW4pcmV0dXJue3NlbmQ6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPWkueGhyKCk7aWYoci5vcGVuKGkudHlwZSxpLnVybCxpLmFzeW5jLGkudXNlcm5hbWUsaS5wYXNzd29yZCksaS54aHJGaWVsZHMpZm9yKG4gaW4gaS54aHJGaWVsZHMpcltuXT1pLnhockZpZWxkc1tuXTtmb3IobiBpbiBpLm1pbWVUeXBlJiZyLm92ZXJyaWRlTWltZVR5cGUmJnIub3ZlcnJpZGVNaW1lVHlwZShpLm1pbWVUeXBlKSxpLmNyb3NzRG9tYWlufHxlW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXXx8KGVbXCJYLVJlcXVlc3RlZC1XaXRoXCJdPVwiWE1MSHR0cFJlcXVlc3RcIiksZSlyLnNldFJlcXVlc3RIZWFkZXIobixlW25dKTtvPWZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbigpe28mJihvPWE9ci5vbmxvYWQ9ci5vbmVycm9yPXIub25hYm9ydD1yLm9udGltZW91dD1yLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLFwiYWJvcnRcIj09PWU/ci5hYm9ydCgpOlwiZXJyb3JcIj09PWU/XCJudW1iZXJcIiE9dHlwZW9mIHIuc3RhdHVzP3QoMCxcImVycm9yXCIpOnQoci5zdGF0dXMsci5zdGF0dXNUZXh0KTp0KF90W3Iuc3RhdHVzXXx8ci5zdGF0dXMsci5zdGF0dXNUZXh0LFwidGV4dFwiIT09KHIucmVzcG9uc2VUeXBlfHxcInRleHRcIil8fFwic3RyaW5nXCIhPXR5cGVvZiByLnJlc3BvbnNlVGV4dD97YmluYXJ5OnIucmVzcG9uc2V9Ont0ZXh0OnIucmVzcG9uc2VUZXh0fSxyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSl9fSxyLm9ubG9hZD1vKCksYT1yLm9uZXJyb3I9ci5vbnRpbWVvdXQ9byhcImVycm9yXCIpLHZvaWQgMCE9PXIub25hYm9ydD9yLm9uYWJvcnQ9YTpyLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpezQ9PT1yLnJlYWR5U3RhdGUmJkMuc2V0VGltZW91dChmdW5jdGlvbigpe28mJmEoKX0pfSxvPW8oXCJhYm9ydFwiKTt0cnl7ci5zZW5kKGkuaGFzQ29udGVudCYmaS5kYXRhfHxudWxsKX1jYXRjaChlKXtpZihvKXRocm93IGV9fSxhYm9ydDpmdW5jdGlvbigpe28mJm8oKX19fSksUy5hamF4UHJlZmlsdGVyKGZ1bmN0aW9uKGUpe2UuY3Jvc3NEb21haW4mJihlLmNvbnRlbnRzLnNjcmlwdD0hMSl9KSxTLmFqYXhTZXR1cCh7YWNjZXB0czp7c2NyaXB0OlwidGV4dC9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9lY21hc2NyaXB0LCBhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHRcIn0sY29udGVudHM6e3NjcmlwdDovXFxiKD86amF2YXxlY21hKXNjcmlwdFxcYi99LGNvbnZlcnRlcnM6e1widGV4dCBzY3JpcHRcIjpmdW5jdGlvbihlKXtyZXR1cm4gUy5nbG9iYWxFdmFsKGUpLGV9fX0pLFMuYWpheFByZWZpbHRlcihcInNjcmlwdFwiLGZ1bmN0aW9uKGUpe3ZvaWQgMD09PWUuY2FjaGUmJihlLmNhY2hlPSExKSxlLmNyb3NzRG9tYWluJiYoZS50eXBlPVwiR0VUXCIpfSksUy5hamF4VHJhbnNwb3J0KFwic2NyaXB0XCIsZnVuY3Rpb24obil7dmFyIHIsaTtpZihuLmNyb3NzRG9tYWlufHxuLnNjcmlwdEF0dHJzKXJldHVybntzZW5kOmZ1bmN0aW9uKGUsdCl7cj1TKFwiPHNjcmlwdD5cIikuYXR0cihuLnNjcmlwdEF0dHJzfHx7fSkucHJvcCh7Y2hhcnNldDpuLnNjcmlwdENoYXJzZXQsc3JjOm4udXJsfSkub24oXCJsb2FkIGVycm9yXCIsaT1mdW5jdGlvbihlKXtyLnJlbW92ZSgpLGk9bnVsbCxlJiZ0KFwiZXJyb3JcIj09PWUudHlwZT80MDQ6MjAwLGUudHlwZSl9KSxFLmhlYWQuYXBwZW5kQ2hpbGQoclswXSl9LGFib3J0OmZ1bmN0aW9uKCl7aSYmaSgpfX19KTt2YXIgVXQsWHQ9W10sVnQ9Lyg9KVxcPyg/PSZ8JCl8XFw/XFw/LztTLmFqYXhTZXR1cCh7anNvbnA6XCJjYWxsYmFja1wiLGpzb25wQ2FsbGJhY2s6ZnVuY3Rpb24oKXt2YXIgZT1YdC5wb3AoKXx8Uy5leHBhbmRvK1wiX1wiK0N0Lmd1aWQrKztyZXR1cm4gdGhpc1tlXT0hMCxlfX0pLFMuYWpheFByZWZpbHRlcihcImpzb24ganNvbnBcIixmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGE9ITEhPT1lLmpzb25wJiYoVnQudGVzdChlLnVybCk/XCJ1cmxcIjpcInN0cmluZ1wiPT10eXBlb2YgZS5kYXRhJiYwPT09KGUuY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJlZ0LnRlc3QoZS5kYXRhKSYmXCJkYXRhXCIpO2lmKGF8fFwianNvbnBcIj09PWUuZGF0YVR5cGVzWzBdKXJldHVybiByPWUuanNvbnBDYWxsYmFjaz1tKGUuanNvbnBDYWxsYmFjayk/ZS5qc29ucENhbGxiYWNrKCk6ZS5qc29ucENhbGxiYWNrLGE/ZVthXT1lW2FdLnJlcGxhY2UoVnQsXCIkMVwiK3IpOiExIT09ZS5qc29ucCYmKGUudXJsKz0oRXQudGVzdChlLnVybCk/XCImXCI6XCI/XCIpK2UuanNvbnArXCI9XCIrciksZS5jb252ZXJ0ZXJzW1wic2NyaXB0IGpzb25cIl09ZnVuY3Rpb24oKXtyZXR1cm4gb3x8Uy5lcnJvcihyK1wiIHdhcyBub3QgY2FsbGVkXCIpLG9bMF19LGUuZGF0YVR5cGVzWzBdPVwianNvblwiLGk9Q1tyXSxDW3JdPWZ1bmN0aW9uKCl7bz1hcmd1bWVudHN9LG4uYWx3YXlzKGZ1bmN0aW9uKCl7dm9pZCAwPT09aT9TKEMpLnJlbW92ZVByb3Aocik6Q1tyXT1pLGVbcl0mJihlLmpzb25wQ2FsbGJhY2s9dC5qc29ucENhbGxiYWNrLFh0LnB1c2gocikpLG8mJm0oaSkmJmkob1swXSksbz1pPXZvaWQgMH0pLFwic2NyaXB0XCJ9KSx5LmNyZWF0ZUhUTUxEb2N1bWVudD0oKFV0PUUuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpLmJvZHkpLmlubmVySFRNTD1cIjxmb3JtPjwvZm9ybT48Zm9ybT48L2Zvcm0+XCIsMj09PVV0LmNoaWxkTm9kZXMubGVuZ3RoKSxTLnBhcnNlSFRNTD1mdW5jdGlvbihlLHQsbil7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGU/W106KFwiYm9vbGVhblwiPT10eXBlb2YgdCYmKG49dCx0PSExKSx0fHwoeS5jcmVhdGVIVE1MRG9jdW1lbnQ/KChyPSh0PUUuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpKS5jcmVhdGVFbGVtZW50KFwiYmFzZVwiKSkuaHJlZj1FLmxvY2F0aW9uLmhyZWYsdC5oZWFkLmFwcGVuZENoaWxkKHIpKTp0PUUpLG89IW4mJltdLChpPU4uZXhlYyhlKSk/W3QuY3JlYXRlRWxlbWVudChpWzFdKV06KGk9eGUoW2VdLHQsbyksbyYmby5sZW5ndGgmJlMobykucmVtb3ZlKCksUy5tZXJnZShbXSxpLmNoaWxkTm9kZXMpKSk7dmFyIHIsaSxvfSxTLmZuLmxvYWQ9ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhPXRoaXMscz1lLmluZGV4T2YoXCIgXCIpO3JldHVybi0xPHMmJihyPXZ0KGUuc2xpY2UocykpLGU9ZS5zbGljZSgwLHMpKSxtKHQpPyhuPXQsdD12b2lkIDApOnQmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiYoaT1cIlBPU1RcIiksMDxhLmxlbmd0aCYmUy5hamF4KHt1cmw6ZSx0eXBlOml8fFwiR0VUXCIsZGF0YVR5cGU6XCJodG1sXCIsZGF0YTp0fSkuZG9uZShmdW5jdGlvbihlKXtvPWFyZ3VtZW50cyxhLmh0bWwocj9TKFwiPGRpdj5cIikuYXBwZW5kKFMucGFyc2VIVE1MKGUpKS5maW5kKHIpOmUpfSkuYWx3YXlzKG4mJmZ1bmN0aW9uKGUsdCl7YS5lYWNoKGZ1bmN0aW9uKCl7bi5hcHBseSh0aGlzLG98fFtlLnJlc3BvbnNlVGV4dCx0LGVdKX0pfSksdGhpc30sUy5leHByLnBzZXVkb3MuYW5pbWF0ZWQ9ZnVuY3Rpb24odCl7cmV0dXJuIFMuZ3JlcChTLnRpbWVycyxmdW5jdGlvbihlKXtyZXR1cm4gdD09PWUuZWxlbX0pLmxlbmd0aH0sUy5vZmZzZXQ9e3NldE9mZnNldDpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGEscyx1LGw9Uy5jc3MoZSxcInBvc2l0aW9uXCIpLGM9UyhlKSxmPXt9O1wic3RhdGljXCI9PT1sJiYoZS5zdHlsZS5wb3NpdGlvbj1cInJlbGF0aXZlXCIpLHM9Yy5vZmZzZXQoKSxvPVMuY3NzKGUsXCJ0b3BcIiksdT1TLmNzcyhlLFwibGVmdFwiKSwoXCJhYnNvbHV0ZVwiPT09bHx8XCJmaXhlZFwiPT09bCkmJi0xPChvK3UpLmluZGV4T2YoXCJhdXRvXCIpPyhhPShyPWMucG9zaXRpb24oKSkudG9wLGk9ci5sZWZ0KTooYT1wYXJzZUZsb2F0KG8pfHwwLGk9cGFyc2VGbG9hdCh1KXx8MCksbSh0KSYmKHQ9dC5jYWxsKGUsbixTLmV4dGVuZCh7fSxzKSkpLG51bGwhPXQudG9wJiYoZi50b3A9dC50b3Atcy50b3ArYSksbnVsbCE9dC5sZWZ0JiYoZi5sZWZ0PXQubGVmdC1zLmxlZnQraSksXCJ1c2luZ1wiaW4gdD90LnVzaW5nLmNhbGwoZSxmKTooXCJudW1iZXJcIj09dHlwZW9mIGYudG9wJiYoZi50b3ArPVwicHhcIiksXCJudW1iZXJcIj09dHlwZW9mIGYubGVmdCYmKGYubGVmdCs9XCJweFwiKSxjLmNzcyhmKSl9fSxTLmZuLmV4dGVuZCh7b2Zmc2V0OmZ1bmN0aW9uKHQpe2lmKGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHZvaWQgMD09PXQ/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oZSl7Uy5vZmZzZXQuc2V0T2Zmc2V0KHRoaXMsdCxlKX0pO3ZhciBlLG4scj10aGlzWzBdO3JldHVybiByP3IuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGg/KGU9ci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxuPXIub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldyx7dG9wOmUudG9wK24ucGFnZVlPZmZzZXQsbGVmdDplLmxlZnQrbi5wYWdlWE9mZnNldH0pOnt0b3A6MCxsZWZ0OjB9OnZvaWQgMH0scG9zaXRpb246ZnVuY3Rpb24oKXtpZih0aGlzWzBdKXt2YXIgZSx0LG4scj10aGlzWzBdLGk9e3RvcDowLGxlZnQ6MH07aWYoXCJmaXhlZFwiPT09Uy5jc3MocixcInBvc2l0aW9uXCIpKXQ9ci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtlbHNle3Q9dGhpcy5vZmZzZXQoKSxuPXIub3duZXJEb2N1bWVudCxlPXIub2Zmc2V0UGFyZW50fHxuLmRvY3VtZW50RWxlbWVudDt3aGlsZShlJiYoZT09PW4uYm9keXx8ZT09PW4uZG9jdW1lbnRFbGVtZW50KSYmXCJzdGF0aWNcIj09PVMuY3NzKGUsXCJwb3NpdGlvblwiKSllPWUucGFyZW50Tm9kZTtlJiZlIT09ciYmMT09PWUubm9kZVR5cGUmJigoaT1TKGUpLm9mZnNldCgpKS50b3ArPVMuY3NzKGUsXCJib3JkZXJUb3BXaWR0aFwiLCEwKSxpLmxlZnQrPVMuY3NzKGUsXCJib3JkZXJMZWZ0V2lkdGhcIiwhMCkpfXJldHVybnt0b3A6dC50b3AtaS50b3AtUy5jc3MocixcIm1hcmdpblRvcFwiLCEwKSxsZWZ0OnQubGVmdC1pLmxlZnQtUy5jc3MocixcIm1hcmdpbkxlZnRcIiwhMCl9fX0sb2Zmc2V0UGFyZW50OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vZmZzZXRQYXJlbnQ7d2hpbGUoZSYmXCJzdGF0aWNcIj09PVMuY3NzKGUsXCJwb3NpdGlvblwiKSllPWUub2Zmc2V0UGFyZW50O3JldHVybiBlfHxyZX0pfX0pLFMuZWFjaCh7c2Nyb2xsTGVmdDpcInBhZ2VYT2Zmc2V0XCIsc2Nyb2xsVG9wOlwicGFnZVlPZmZzZXRcIn0sZnVuY3Rpb24odCxpKXt2YXIgbz1cInBhZ2VZT2Zmc2V0XCI9PT1pO1MuZm5bdF09ZnVuY3Rpb24oZSl7cmV0dXJuICQodGhpcyxmdW5jdGlvbihlLHQsbil7dmFyIHI7aWYoeChlKT9yPWU6OT09PWUubm9kZVR5cGUmJihyPWUuZGVmYXVsdFZpZXcpLHZvaWQgMD09PW4pcmV0dXJuIHI/cltpXTplW3RdO3I/ci5zY3JvbGxUbyhvP3IucGFnZVhPZmZzZXQ6bixvP246ci5wYWdlWU9mZnNldCk6ZVt0XT1ufSx0LGUsYXJndW1lbnRzLmxlbmd0aCl9fSksUy5lYWNoKFtcInRvcFwiLFwibGVmdFwiXSxmdW5jdGlvbihlLG4pe1MuY3NzSG9va3Nbbl09JGUoeS5waXhlbFBvc2l0aW9uLGZ1bmN0aW9uKGUsdCl7aWYodClyZXR1cm4gdD1CZShlLG4pLE1lLnRlc3QodCk/UyhlKS5wb3NpdGlvbigpW25dK1wicHhcIjp0fSl9KSxTLmVhY2goe0hlaWdodDpcImhlaWdodFwiLFdpZHRoOlwid2lkdGhcIn0sZnVuY3Rpb24oYSxzKXtTLmVhY2goe3BhZGRpbmc6XCJpbm5lclwiK2EsY29udGVudDpzLFwiXCI6XCJvdXRlclwiK2F9LGZ1bmN0aW9uKHIsbyl7Uy5mbltvXT1mdW5jdGlvbihlLHQpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGgmJihyfHxcImJvb2xlYW5cIiE9dHlwZW9mIGUpLGk9cnx8KCEwPT09ZXx8ITA9PT10P1wibWFyZ2luXCI6XCJib3JkZXJcIik7cmV0dXJuICQodGhpcyxmdW5jdGlvbihlLHQsbil7dmFyIHI7cmV0dXJuIHgoZSk/MD09PW8uaW5kZXhPZihcIm91dGVyXCIpP2VbXCJpbm5lclwiK2FdOmUuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W1wiY2xpZW50XCIrYV06OT09PWUubm9kZVR5cGU/KHI9ZS5kb2N1bWVudEVsZW1lbnQsTWF0aC5tYXgoZS5ib2R5W1wic2Nyb2xsXCIrYV0scltcInNjcm9sbFwiK2FdLGUuYm9keVtcIm9mZnNldFwiK2FdLHJbXCJvZmZzZXRcIithXSxyW1wiY2xpZW50XCIrYV0pKTp2b2lkIDA9PT1uP1MuY3NzKGUsdCxpKTpTLnN0eWxlKGUsdCxuLGkpfSxzLG4/ZTp2b2lkIDAsbil9fSl9KSxTLmVhY2goW1wiYWpheFN0YXJ0XCIsXCJhamF4U3RvcFwiLFwiYWpheENvbXBsZXRlXCIsXCJhamF4RXJyb3JcIixcImFqYXhTdWNjZXNzXCIsXCJhamF4U2VuZFwiXSxmdW5jdGlvbihlLHQpe1MuZm5bdF09ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMub24odCxlKX19KSxTLmZuLmV4dGVuZCh7YmluZDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIHRoaXMub24oZSxudWxsLHQsbil9LHVuYmluZDpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLm9mZihlLG51bGwsdCl9LGRlbGVnYXRlOmZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiB0aGlzLm9uKHQsZSxuLHIpfSx1bmRlbGVnYXRlOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gMT09PWFyZ3VtZW50cy5sZW5ndGg/dGhpcy5vZmYoZSxcIioqXCIpOnRoaXMub2ZmKHQsZXx8XCIqKlwiLG4pfSxob3ZlcjpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLm1vdXNlZW50ZXIoZSkubW91c2VsZWF2ZSh0fHxlKX19KSxTLmVhY2goXCJibHVyIGZvY3VzIGZvY3VzaW4gZm9jdXNvdXQgcmVzaXplIHNjcm9sbCBjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2V1cCBtb3VzZW1vdmUgbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBjaGFuZ2Ugc2VsZWN0IHN1Ym1pdCBrZXlkb3duIGtleXByZXNzIGtleXVwIGNvbnRleHRtZW51XCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGUsbil7Uy5mbltuXT1mdW5jdGlvbihlLHQpe3JldHVybiAwPGFyZ3VtZW50cy5sZW5ndGg/dGhpcy5vbihuLG51bGwsZSx0KTp0aGlzLnRyaWdnZXIobil9fSk7dmFyIEd0PS9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZztTLnByb3h5PWZ1bmN0aW9uKGUsdCl7dmFyIG4scixpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0JiYobj1lW3RdLHQ9ZSxlPW4pLG0oZSkpcmV0dXJuIHI9cy5jYWxsKGFyZ3VtZW50cywyKSwoaT1mdW5jdGlvbigpe3JldHVybiBlLmFwcGx5KHR8fHRoaXMsci5jb25jYXQocy5jYWxsKGFyZ3VtZW50cykpKX0pLmd1aWQ9ZS5ndWlkPWUuZ3VpZHx8Uy5ndWlkKyssaX0sUy5ob2xkUmVhZHk9ZnVuY3Rpb24oZSl7ZT9TLnJlYWR5V2FpdCsrOlMucmVhZHkoITApfSxTLmlzQXJyYXk9QXJyYXkuaXNBcnJheSxTLnBhcnNlSlNPTj1KU09OLnBhcnNlLFMubm9kZU5hbWU9QSxTLmlzRnVuY3Rpb249bSxTLmlzV2luZG93PXgsUy5jYW1lbENhc2U9WCxTLnR5cGU9dyxTLm5vdz1EYXRlLm5vdyxTLmlzTnVtZXJpYz1mdW5jdGlvbihlKXt2YXIgdD1TLnR5cGUoZSk7cmV0dXJuKFwibnVtYmVyXCI9PT10fHxcInN0cmluZ1wiPT09dCkmJiFpc05hTihlLXBhcnNlRmxvYXQoZSkpfSxTLnRyaW09ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/XCJcIjooZStcIlwiKS5yZXBsYWNlKEd0LFwiXCIpfSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQmJmRlZmluZShcImpxdWVyeVwiLFtdLGZ1bmN0aW9uKCl7cmV0dXJuIFN9KTt2YXIgWXQ9Qy5qUXVlcnksUXQ9Qy4kO3JldHVybiBTLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oZSl7cmV0dXJuIEMuJD09PVMmJihDLiQ9UXQpLGUmJkMualF1ZXJ5PT09UyYmKEMualF1ZXJ5PVl0KSxTfSxcInVuZGVmaW5lZFwiPT10eXBlb2YgZSYmKEMualF1ZXJ5PUMuJD1TKSxTfSk7XG4vLyBET00uZXZlbnQubW92ZVxuLy9cbi8vIDIuMC4wXG4vL1xuLy8gU3RlcGhlbiBCYW5kXG4vL1xuLy8gVHJpZ2dlcnMgJ21vdmVzdGFydCcsICdtb3ZlJyBhbmQgJ21vdmVlbmQnIGV2ZW50cyBhZnRlclxuLy8gbW91c2Vtb3ZlcyBmb2xsb3dpbmcgYSBtb3VzZWRvd24gY3Jvc3MgYSBkaXN0YW5jZSB0aHJlc2hvbGQsXG4vLyBzaW1pbGFyIHRvIHRoZSBuYXRpdmUgJ2RyYWdzdGFydCcsICdkcmFnJyBhbmQgJ2RyYWdlbmQnIGV2ZW50cy5cbi8vIE1vdmUgZXZlbnRzIGFyZSB0aHJvdHRsZWQgdG8gYW5pbWF0aW9uIGZyYW1lcy4gTW92ZSBldmVudCBvYmplY3RzXG4vLyBoYXZlIHRoZSBwcm9wZXJ0aWVzOlxuLy9cbi8vIHBhZ2VYOlxuLy8gcGFnZVk6ICAgICBQYWdlIGNvb3JkaW5hdGVzIG9mIHBvaW50ZXIuXG4vLyBzdGFydFg6XG4vLyBzdGFydFk6ICAgIFBhZ2UgY29vcmRpbmF0ZXMgb2YgcG9pbnRlciBhdCBtb3Zlc3RhcnQuXG4vLyBkaXN0WDpcbi8vIGRpc3RZOiAgICAgRGlzdGFuY2UgdGhlIHBvaW50ZXIgaGFzIG1vdmVkIHNpbmNlIG1vdmVzdGFydC5cbi8vIGRlbHRhWDpcbi8vIGRlbHRhWTogICAgRGlzdGFuY2UgdGhlIGZpbmdlciBoYXMgbW92ZWQgc2luY2UgbGFzdCBldmVudC5cbi8vIHZlbG9jaXR5WDpcbi8vIHZlbG9jaXR5WTogQXZlcmFnZSB2ZWxvY2l0eSBvdmVyIGxhc3QgZmV3IGV2ZW50cy5cblxuXG4oZnVuY3Rpb24oZm4pIHtcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoW10sIGZuKTtcbiAgICB9IGVsc2UgaWYgKCh0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiICYmIG1vZHVsZSAhPT0gbnVsbCkgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmbjtcblx0fSBlbHNlIHtcblx0XHRmbigpO1xuXHR9XG59KShmdW5jdGlvbigpe1xuXHR2YXIgYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCB3aW5kb3cualF1ZXJ5ICYmIGpRdWVyeS5leHRlbmQ7XG5cblx0Ly8gTnVtYmVyIG9mIHBpeGVscyBhIHByZXNzZWQgcG9pbnRlciB0cmF2ZWxzIGJlZm9yZSBtb3Zlc3RhcnRcblx0Ly8gZXZlbnQgaXMgZmlyZWQuXG5cdHZhciB0aHJlc2hvbGQgPSA4O1xuXG5cdC8vIFNoaW0gZm9yIHJlcXVlc3RBbmltYXRpb25GcmFtZSwgZmFsbGluZyBiYWNrIHRvIHRpbWVyLiBTZWU6XG5cdC8vIHNlZSBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuXHR2YXIgcmVxdWVzdEZyYW1lID0gKGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcblx0XHRcdHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcblx0XHRcdHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcblx0XHRcdHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0XHR3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcblx0XHRcdGZ1bmN0aW9uKGZuLCBlbGVtZW50KXtcblx0XHRcdFx0cmV0dXJuIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0Zm4oKTtcblx0XHRcdFx0fSwgMjUpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH0pKCk7XG5cblx0Ly8gU2hpbSBmb3IgY3VzdG9tRXZlbnRcblx0Ly8gc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DdXN0b21FdmVudC9DdXN0b21FdmVudCNQb2x5ZmlsbFxuXHQoZnVuY3Rpb24gKCkge1xuXHRcdGlmICggdHlwZW9mIHdpbmRvdy5DdXN0b21FdmVudCA9PT0gXCJmdW5jdGlvblwiICkgcmV0dXJuIGZhbHNlO1xuXHRcdGZ1bmN0aW9uIEN1c3RvbUV2ZW50ICggZXZlbnQsIHBhcmFtcyApIHtcblx0XHRcdHBhcmFtcyA9IHBhcmFtcyB8fCB7IGJ1YmJsZXM6IGZhbHNlLCBjYW5jZWxhYmxlOiBmYWxzZSwgZGV0YWlsOiB1bmRlZmluZWQgfTtcblx0XHRcdHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCggJ0N1c3RvbUV2ZW50JyApO1xuXHRcdFx0ZXZ0LmluaXRDdXN0b21FdmVudCggZXZlbnQsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSwgcGFyYW1zLmRldGFpbCApO1xuXHRcdFx0cmV0dXJuIGV2dDtcblx0XHR9XG5cblx0XHRDdXN0b21FdmVudC5wcm90b3R5cGUgPSB3aW5kb3cuRXZlbnQucHJvdG90eXBlO1xuXHRcdHdpbmRvdy5DdXN0b21FdmVudCA9IEN1c3RvbUV2ZW50O1xuXHR9KSgpO1xuXG5cdHZhciBpZ25vcmVUYWdzID0ge1xuXHRcdFx0dGV4dGFyZWE6IHRydWUsXG5cdFx0XHRpbnB1dDogdHJ1ZSxcblx0XHRcdHNlbGVjdDogdHJ1ZSxcblx0XHRcdGJ1dHRvbjogdHJ1ZVxuXHRcdH07XG5cblx0dmFyIG1vdXNlZXZlbnRzID0ge1xuXHRcdG1vdmU6ICAgJ21vdXNlbW92ZScsXG5cdFx0Y2FuY2VsOiAnbW91c2V1cCBkcmFnc3RhcnQnLFxuXHRcdGVuZDogICAgJ21vdXNldXAnXG5cdH07XG5cblx0dmFyIHRvdWNoZXZlbnRzID0ge1xuXHRcdG1vdmU6ICAgJ3RvdWNobW92ZScsXG5cdFx0Y2FuY2VsOiAndG91Y2hlbmQnLFxuXHRcdGVuZDogICAgJ3RvdWNoZW5kJ1xuXHR9O1xuXG5cdHZhciByc3BhY2VzID0gL1xccysvO1xuXG5cblx0Ly8gRE9NIEV2ZW50c1xuXG5cdHZhciBldmVudE9wdGlvbnMgPSB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUgfTtcblxuXHR2YXIgZXZlbnRzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKCdldmVudHMnKSA6IHt9O1xuXG5cdGZ1bmN0aW9uIGNyZWF0ZUV2ZW50KHR5cGUpIHtcblx0XHRyZXR1cm4gbmV3IEN1c3RvbUV2ZW50KHR5cGUsIGV2ZW50T3B0aW9ucyk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRFdmVudHMobm9kZSkge1xuXHRcdHJldHVybiBub2RlW2V2ZW50c1N5bWJvbF0gfHwgKG5vZGVbZXZlbnRzU3ltYm9sXSA9IHt9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIG9uKG5vZGUsIHR5cGVzLCBmbiwgZGF0YSwgc2VsZWN0b3IpIHtcblx0XHR0eXBlcyA9IHR5cGVzLnNwbGl0KHJzcGFjZXMpO1xuXG5cdFx0dmFyIGV2ZW50cyA9IGdldEV2ZW50cyhub2RlKTtcblx0XHR2YXIgaSA9IHR5cGVzLmxlbmd0aDtcblx0XHR2YXIgaGFuZGxlcnMsIHR5cGU7XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVyKGUpIHsgZm4oZSwgZGF0YSk7IH1cblxuXHRcdHdoaWxlIChpLS0pIHtcblx0XHRcdHR5cGUgPSB0eXBlc1tpXTtcblx0XHRcdGhhbmRsZXJzID0gZXZlbnRzW3R5cGVdIHx8IChldmVudHNbdHlwZV0gPSBbXSk7XG5cdFx0XHRoYW5kbGVycy5wdXNoKFtmbiwgaGFuZGxlcl0pO1xuXHRcdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIG9mZihub2RlLCB0eXBlcywgZm4sIHNlbGVjdG9yKSB7XG5cdFx0dHlwZXMgPSB0eXBlcy5zcGxpdChyc3BhY2VzKTtcblxuXHRcdHZhciBldmVudHMgPSBnZXRFdmVudHMobm9kZSk7XG5cdFx0dmFyIGkgPSB0eXBlcy5sZW5ndGg7XG5cdFx0dmFyIHR5cGUsIGhhbmRsZXJzLCBrO1xuXG5cdFx0aWYgKCFldmVudHMpIHsgcmV0dXJuOyB9XG5cblx0XHR3aGlsZSAoaS0tKSB7XG5cdFx0XHR0eXBlID0gdHlwZXNbaV07XG5cdFx0XHRoYW5kbGVycyA9IGV2ZW50c1t0eXBlXTtcblx0XHRcdGlmICghaGFuZGxlcnMpIHsgY29udGludWU7IH1cblx0XHRcdGsgPSBoYW5kbGVycy5sZW5ndGg7XG5cdFx0XHR3aGlsZSAoay0tKSB7XG5cdFx0XHRcdGlmIChoYW5kbGVyc1trXVswXSA9PT0gZm4pIHtcblx0XHRcdFx0XHRub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlcnNba11bMV0pO1xuXHRcdFx0XHRcdGhhbmRsZXJzLnNwbGljZShrLCAxKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHRyaWdnZXIobm9kZSwgdHlwZSwgcHJvcGVydGllcykge1xuXHRcdC8vIERvbid0IGNhY2hlIGV2ZW50cy4gSXQgcHJldmVudHMgeW91IGZyb20gdHJpZ2dlcmluZyBhbiBldmVudCBvZiBhXG5cdFx0Ly8gZ2l2ZW4gdHlwZSBmcm9tIGluc2lkZSB0aGUgaGFuZGxlciBvZiBhbm90aGVyIGV2ZW50IG9mIHRoYXQgdHlwZS5cblx0XHR2YXIgZXZlbnQgPSBjcmVhdGVFdmVudCh0eXBlKTtcblx0XHRpZiAocHJvcGVydGllcykgeyBhc3NpZ24oZXZlbnQsIHByb3BlcnRpZXMpOyB9XG5cdFx0bm9kZS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblx0fVxuXG5cblx0Ly8gQ29uc3RydWN0b3JzXG5cblx0ZnVuY3Rpb24gVGltZXIoZm4pe1xuXHRcdHZhciBjYWxsYmFjayA9IGZuLFxuXHRcdCAgICBhY3RpdmUgPSBmYWxzZSxcblx0XHQgICAgcnVubmluZyA9IGZhbHNlO1xuXG5cdFx0ZnVuY3Rpb24gdHJpZ2dlcih0aW1lKSB7XG5cdFx0XHRpZiAoYWN0aXZlKXtcblx0XHRcdFx0Y2FsbGJhY2soKTtcblx0XHRcdFx0cmVxdWVzdEZyYW1lKHRyaWdnZXIpO1xuXHRcdFx0XHRydW5uaW5nID0gdHJ1ZTtcblx0XHRcdFx0YWN0aXZlID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0cnVubmluZyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMua2ljayA9IGZ1bmN0aW9uKGZuKSB7XG5cdFx0XHRhY3RpdmUgPSB0cnVlO1xuXHRcdFx0aWYgKCFydW5uaW5nKSB7IHRyaWdnZXIoKTsgfVxuXHRcdH07XG5cblx0XHR0aGlzLmVuZCA9IGZ1bmN0aW9uKGZuKSB7XG5cdFx0XHR2YXIgY2IgPSBjYWxsYmFjaztcblxuXHRcdFx0aWYgKCFmbikgeyByZXR1cm47IH1cblxuXHRcdFx0Ly8gSWYgdGhlIHRpbWVyIGlzIG5vdCBydW5uaW5nLCBzaW1wbHkgY2FsbCB0aGUgZW5kIGNhbGxiYWNrLlxuXHRcdFx0aWYgKCFydW5uaW5nKSB7XG5cdFx0XHRcdGZuKCk7XG5cdFx0XHR9XG5cdFx0XHQvLyBJZiB0aGUgdGltZXIgaXMgcnVubmluZywgYW5kIGhhcyBiZWVuIGtpY2tlZCBsYXRlbHksIHRoZW5cblx0XHRcdC8vIHF1ZXVlIHVwIHRoZSBjdXJyZW50IGNhbGxiYWNrIGFuZCB0aGUgZW5kIGNhbGxiYWNrLCBvdGhlcndpc2Vcblx0XHRcdC8vIGp1c3QgdGhlIGVuZCBjYWxsYmFjay5cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRjYWxsYmFjayA9IGFjdGl2ZSA/XG5cdFx0XHRcdFx0ZnVuY3Rpb24oKXsgY2IoKTsgZm4oKTsgfSA6XG5cdFx0XHRcdFx0Zm4gO1xuXG5cdFx0XHRcdGFjdGl2ZSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXG5cblx0Ly8gRnVuY3Rpb25zXG5cblx0ZnVuY3Rpb24gbm9vcCgpIHt9XG5cblx0ZnVuY3Rpb24gcHJldmVudERlZmF1bHQoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGlzSWdub3JlVGFnKGUpIHtcblx0XHRyZXR1cm4gISFpZ25vcmVUYWdzW2UudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKV07XG5cdH1cblxuXHRmdW5jdGlvbiBpc1ByaW1hcnlCdXR0b24oZSkge1xuXHRcdC8vIElnbm9yZSBtb3VzZWRvd25zIG9uIGFueSBidXR0b24gb3RoZXIgdGhhbiB0aGUgbGVmdCAob3IgcHJpbWFyeSlcblx0XHQvLyBtb3VzZSBidXR0b24sIG9yIHdoZW4gYSBtb2RpZmllciBrZXkgaXMgcHJlc3NlZC5cblx0XHRyZXR1cm4gKGUud2hpY2ggPT09IDEgJiYgIWUuY3RybEtleSAmJiAhZS5hbHRLZXkpO1xuXHR9XG5cblx0ZnVuY3Rpb24gaWRlbnRpZmllZFRvdWNoKHRvdWNoTGlzdCwgaWQpIHtcblx0XHR2YXIgaSwgbDtcblxuXHRcdGlmICh0b3VjaExpc3QuaWRlbnRpZmllZFRvdWNoKSB7XG5cdFx0XHRyZXR1cm4gdG91Y2hMaXN0LmlkZW50aWZpZWRUb3VjaChpZCk7XG5cdFx0fVxuXG5cdFx0Ly8gdG91Y2hMaXN0LmlkZW50aWZpZWRUb3VjaCgpIGRvZXMgbm90IGV4aXN0IGluXG5cdFx0Ly8gd2Via2l0IHlldOKApiB3ZSBtdXN0IGRvIHRoZSBzZWFyY2ggb3Vyc2VsdmVzLi4uXG5cblx0XHRpID0gLTE7XG5cdFx0bCA9IHRvdWNoTGlzdC5sZW5ndGg7XG5cblx0XHR3aGlsZSAoKytpIDwgbCkge1xuXHRcdFx0aWYgKHRvdWNoTGlzdFtpXS5pZGVudGlmaWVyID09PSBpZCkge1xuXHRcdFx0XHRyZXR1cm4gdG91Y2hMaXN0W2ldO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGNoYW5nZWRUb3VjaChlLCBkYXRhKSB7XG5cdFx0dmFyIHRvdWNoID0gaWRlbnRpZmllZFRvdWNoKGUuY2hhbmdlZFRvdWNoZXMsIGRhdGEuaWRlbnRpZmllcik7XG5cblx0XHQvLyBUaGlzIGlzbid0IHRoZSB0b3VjaCB5b3UncmUgbG9va2luZyBmb3IuXG5cdFx0aWYgKCF0b3VjaCkgeyByZXR1cm47IH1cblxuXHRcdC8vIENocm9tZSBBbmRyb2lkIChhdCBsZWFzdCkgaW5jbHVkZXMgdG91Y2hlcyB0aGF0IGhhdmUgbm90XG5cdFx0Ly8gY2hhbmdlZCBpbiBlLmNoYW5nZWRUb3VjaGVzLiBUaGF0J3MgYSBiaXQgYW5ub3lpbmcuIENoZWNrXG5cdFx0Ly8gdGhhdCB0aGlzIHRvdWNoIGhhcyBjaGFuZ2VkLlxuXHRcdGlmICh0b3VjaC5wYWdlWCA9PT0gZGF0YS5wYWdlWCAmJiB0b3VjaC5wYWdlWSA9PT0gZGF0YS5wYWdlWSkgeyByZXR1cm47IH1cblxuXHRcdHJldHVybiB0b3VjaDtcblx0fVxuXG5cblx0Ly8gSGFuZGxlcnMgdGhhdCBkZWNpZGUgd2hlbiB0aGUgZmlyc3QgbW92ZXN0YXJ0IGlzIHRyaWdnZXJlZFxuXG5cdGZ1bmN0aW9uIG1vdXNlZG93bihlKXtcblx0XHQvLyBJZ25vcmUgbm9uLXByaW1hcnkgYnV0dG9uc1xuXHRcdGlmICghaXNQcmltYXJ5QnV0dG9uKGUpKSB7IHJldHVybjsgfVxuXG5cdFx0Ly8gSWdub3JlIGZvcm0gYW5kIGludGVyYWN0aXZlIGVsZW1lbnRzXG5cdFx0aWYgKGlzSWdub3JlVGFnKGUpKSB7IHJldHVybjsgfVxuXG5cdFx0b24oZG9jdW1lbnQsIG1vdXNlZXZlbnRzLm1vdmUsIG1vdXNlbW92ZSwgZSk7XG5cdFx0b24oZG9jdW1lbnQsIG1vdXNlZXZlbnRzLmNhbmNlbCwgbW91c2VlbmQsIGUpO1xuXHR9XG5cblx0ZnVuY3Rpb24gbW91c2Vtb3ZlKGUsIGRhdGEpe1xuXHRcdGNoZWNrVGhyZXNob2xkKGUsIGRhdGEsIGUsIHJlbW92ZU1vdXNlKTtcblx0fVxuXG5cdGZ1bmN0aW9uIG1vdXNlZW5kKGUsIGRhdGEpIHtcblx0XHRyZW1vdmVNb3VzZSgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVtb3ZlTW91c2UoKSB7XG5cdFx0b2ZmKGRvY3VtZW50LCBtb3VzZWV2ZW50cy5tb3ZlLCBtb3VzZW1vdmUpO1xuXHRcdG9mZihkb2N1bWVudCwgbW91c2VldmVudHMuY2FuY2VsLCBtb3VzZWVuZCk7XG5cdH1cblxuXHRmdW5jdGlvbiB0b3VjaHN0YXJ0KGUpIHtcblx0XHQvLyBEb24ndCBnZXQgaW4gdGhlIHdheSBvZiBpbnRlcmFjdGlvbiB3aXRoIGZvcm0gZWxlbWVudHNcblx0XHRpZiAoaWdub3JlVGFnc1tlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCldKSB7IHJldHVybjsgfVxuXG5cdFx0dmFyIHRvdWNoID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcblxuXHRcdC8vIGlPUyBsaXZlIHVwZGF0ZXMgdGhlIHRvdWNoIG9iamVjdHMgd2hlcmVhcyBBbmRyb2lkIGdpdmVzIHVzIGNvcGllcy5cblx0XHQvLyBUaGF0IG1lYW5zIHdlIGNhbid0IHRydXN0IHRoZSB0b3VjaHN0YXJ0IG9iamVjdCB0byBzdGF5IHRoZSBzYW1lLFxuXHRcdC8vIHNvIHdlIG11c3QgY29weSB0aGUgZGF0YS4gVGhpcyBvYmplY3QgYWN0cyBhcyBhIHRlbXBsYXRlIGZvclxuXHRcdC8vIG1vdmVzdGFydCwgbW92ZSBhbmQgbW92ZWVuZCBldmVudCBvYmplY3RzLlxuXHRcdHZhciBkYXRhID0ge1xuXHRcdFx0dGFyZ2V0OiAgICAgdG91Y2gudGFyZ2V0LFxuXHRcdFx0cGFnZVg6ICAgICAgdG91Y2gucGFnZVgsXG5cdFx0XHRwYWdlWTogICAgICB0b3VjaC5wYWdlWSxcblx0XHRcdGlkZW50aWZpZXI6IHRvdWNoLmlkZW50aWZpZXIsXG5cblx0XHRcdC8vIFRoZSBvbmx5IHdheSB0byBtYWtlIGhhbmRsZXJzIGluZGl2aWR1YWxseSB1bmJpbmRhYmxlIGlzIGJ5XG5cdFx0XHQvLyBtYWtpbmcgdGhlbSB1bmlxdWUuXG5cdFx0XHR0b3VjaG1vdmU6ICBmdW5jdGlvbihlLCBkYXRhKSB7IHRvdWNobW92ZShlLCBkYXRhKTsgfSxcblx0XHRcdHRvdWNoZW5kOiAgIGZ1bmN0aW9uKGUsIGRhdGEpIHsgdG91Y2hlbmQoZSwgZGF0YSk7IH1cblx0XHR9O1xuXG5cdFx0b24oZG9jdW1lbnQsIHRvdWNoZXZlbnRzLm1vdmUsIGRhdGEudG91Y2htb3ZlLCBkYXRhKTtcblx0XHRvbihkb2N1bWVudCwgdG91Y2hldmVudHMuY2FuY2VsLCBkYXRhLnRvdWNoZW5kLCBkYXRhKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHRvdWNobW92ZShlLCBkYXRhKSB7XG5cdFx0dmFyIHRvdWNoID0gY2hhbmdlZFRvdWNoKGUsIGRhdGEpO1xuXHRcdGlmICghdG91Y2gpIHsgcmV0dXJuOyB9XG5cdFx0Y2hlY2tUaHJlc2hvbGQoZSwgZGF0YSwgdG91Y2gsIHJlbW92ZVRvdWNoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHRvdWNoZW5kKGUsIGRhdGEpIHtcblx0XHR2YXIgdG91Y2ggPSBpZGVudGlmaWVkVG91Y2goZS5jaGFuZ2VkVG91Y2hlcywgZGF0YS5pZGVudGlmaWVyKTtcblx0XHRpZiAoIXRvdWNoKSB7IHJldHVybjsgfVxuXHRcdHJlbW92ZVRvdWNoKGRhdGEpO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVtb3ZlVG91Y2goZGF0YSkge1xuXHRcdG9mZihkb2N1bWVudCwgdG91Y2hldmVudHMubW92ZSwgZGF0YS50b3VjaG1vdmUpO1xuXHRcdG9mZihkb2N1bWVudCwgdG91Y2hldmVudHMuY2FuY2VsLCBkYXRhLnRvdWNoZW5kKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNoZWNrVGhyZXNob2xkKGUsIGRhdGEsIHRvdWNoLCBmbikge1xuXHRcdHZhciBkaXN0WCA9IHRvdWNoLnBhZ2VYIC0gZGF0YS5wYWdlWDtcblx0XHR2YXIgZGlzdFkgPSB0b3VjaC5wYWdlWSAtIGRhdGEucGFnZVk7XG5cblx0XHQvLyBEbyBub3RoaW5nIGlmIHRoZSB0aHJlc2hvbGQgaGFzIG5vdCBiZWVuIGNyb3NzZWQuXG5cdFx0aWYgKChkaXN0WCAqIGRpc3RYKSArIChkaXN0WSAqIGRpc3RZKSA8ICh0aHJlc2hvbGQgKiB0aHJlc2hvbGQpKSB7IHJldHVybjsgfVxuXG5cdFx0dHJpZ2dlclN0YXJ0KGUsIGRhdGEsIHRvdWNoLCBkaXN0WCwgZGlzdFksIGZuKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHRyaWdnZXJTdGFydChlLCBkYXRhLCB0b3VjaCwgZGlzdFgsIGRpc3RZLCBmbikge1xuXHRcdHZhciB0b3VjaGVzID0gZS50YXJnZXRUb3VjaGVzO1xuXHRcdHZhciB0aW1lID0gZS50aW1lU3RhbXAgLSBkYXRhLnRpbWVTdGFtcDtcblxuXHRcdC8vIENyZWF0ZSBhIG1vdmVzdGFydCBvYmplY3Qgd2l0aCBzb21lIHNwZWNpYWwgcHJvcGVydGllcyB0aGF0XG5cdFx0Ly8gYXJlIHBhc3NlZCBvbmx5IHRvIHRoZSBtb3Zlc3RhcnQgaGFuZGxlcnMuXG5cdFx0dmFyIHRlbXBsYXRlID0ge1xuXHRcdFx0YWx0S2V5OiAgICAgZS5hbHRLZXksXG5cdFx0XHRjdHJsS2V5OiAgICBlLmN0cmxLZXksXG5cdFx0XHRzaGlmdEtleTogICBlLnNoaWZ0S2V5LFxuXHRcdFx0c3RhcnRYOiAgICAgZGF0YS5wYWdlWCxcblx0XHRcdHN0YXJ0WTogICAgIGRhdGEucGFnZVksXG5cdFx0XHRkaXN0WDogICAgICBkaXN0WCxcblx0XHRcdGRpc3RZOiAgICAgIGRpc3RZLFxuXHRcdFx0ZGVsdGFYOiAgICAgZGlzdFgsXG5cdFx0XHRkZWx0YVk6ICAgICBkaXN0WSxcblx0XHRcdHBhZ2VYOiAgICAgIHRvdWNoLnBhZ2VYLFxuXHRcdFx0cGFnZVk6ICAgICAgdG91Y2gucGFnZVksXG5cdFx0XHR2ZWxvY2l0eVg6ICBkaXN0WCAvIHRpbWUsXG5cdFx0XHR2ZWxvY2l0eVk6ICBkaXN0WSAvIHRpbWUsXG5cdFx0XHRpZGVudGlmaWVyOiBkYXRhLmlkZW50aWZpZXIsXG5cdFx0XHR0YXJnZXRUb3VjaGVzOiB0b3VjaGVzLFxuXHRcdFx0ZmluZ2VyOiB0b3VjaGVzID8gdG91Y2hlcy5sZW5ndGggOiAxLFxuXHRcdFx0ZW5hYmxlTW92ZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHRoaXMubW92ZUVuYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLmVuYWJsZU1vdmUgPSBub29wO1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8vIFRyaWdnZXIgdGhlIG1vdmVzdGFydCBldmVudC5cblx0XHR0cmlnZ2VyKGRhdGEudGFyZ2V0LCAnbW92ZXN0YXJ0JywgdGVtcGxhdGUpO1xuXG5cdFx0Ly8gVW5iaW5kIGhhbmRsZXJzIHRoYXQgdHJhY2tlZCB0aGUgdG91Y2ggb3IgbW91c2UgdXAgdGlsbCBub3cuXG5cdFx0Zm4oZGF0YSk7XG5cdH1cblxuXG5cdC8vIEhhbmRsZXJzIHRoYXQgY29udHJvbCB3aGF0IGhhcHBlbnMgZm9sbG93aW5nIGEgbW92ZXN0YXJ0XG5cblx0ZnVuY3Rpb24gYWN0aXZlTW91c2Vtb3ZlKGUsIGRhdGEpIHtcblx0XHR2YXIgdGltZXIgID0gZGF0YS50aW1lcjtcblxuXHRcdGRhdGEudG91Y2ggPSBlO1xuXHRcdGRhdGEudGltZVN0YW1wID0gZS50aW1lU3RhbXA7XG5cdFx0dGltZXIua2ljaygpO1xuXHR9XG5cblx0ZnVuY3Rpb24gYWN0aXZlTW91c2VlbmQoZSwgZGF0YSkge1xuXHRcdHZhciB0YXJnZXQgPSBkYXRhLnRhcmdldDtcblx0XHR2YXIgZXZlbnQgID0gZGF0YS5ldmVudDtcblx0XHR2YXIgdGltZXIgID0gZGF0YS50aW1lcjtcblxuXHRcdHJlbW92ZUFjdGl2ZU1vdXNlKCk7XG5cblx0XHRlbmRFdmVudCh0YXJnZXQsIGV2ZW50LCB0aW1lciwgZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyBVbmJpbmQgdGhlIGNsaWNrIHN1cHByZXNzb3IsIHdhaXRpbmcgdW50aWwgYWZ0ZXIgbW91c2V1cFxuXHRcdFx0Ly8gaGFzIGJlZW4gaGFuZGxlZC5cblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdFx0b2ZmKHRhcmdldCwgJ2NsaWNrJywgcHJldmVudERlZmF1bHQpO1xuXHRcdFx0fSwgMCk7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiByZW1vdmVBY3RpdmVNb3VzZSgpIHtcblx0XHRvZmYoZG9jdW1lbnQsIG1vdXNlZXZlbnRzLm1vdmUsIGFjdGl2ZU1vdXNlbW92ZSk7XG5cdFx0b2ZmKGRvY3VtZW50LCBtb3VzZWV2ZW50cy5lbmQsIGFjdGl2ZU1vdXNlZW5kKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFjdGl2ZVRvdWNobW92ZShlLCBkYXRhKSB7XG5cdFx0dmFyIGV2ZW50ID0gZGF0YS5ldmVudDtcblx0XHR2YXIgdGltZXIgPSBkYXRhLnRpbWVyO1xuXHRcdHZhciB0b3VjaCA9IGNoYW5nZWRUb3VjaChlLCBldmVudCk7XG5cblx0XHRpZiAoIXRvdWNoKSB7IHJldHVybjsgfVxuXG5cdFx0Ly8gU3RvcCB0aGUgaW50ZXJmYWNlIGZyb20gZ2VzdHVyaW5nXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0ZXZlbnQudGFyZ2V0VG91Y2hlcyA9IGUudGFyZ2V0VG91Y2hlcztcblx0XHRkYXRhLnRvdWNoID0gdG91Y2g7XG5cdFx0ZGF0YS50aW1lU3RhbXAgPSBlLnRpbWVTdGFtcDtcblxuXHRcdHRpbWVyLmtpY2soKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFjdGl2ZVRvdWNoZW5kKGUsIGRhdGEpIHtcblx0XHR2YXIgdGFyZ2V0ID0gZGF0YS50YXJnZXQ7XG5cdFx0dmFyIGV2ZW50ICA9IGRhdGEuZXZlbnQ7XG5cdFx0dmFyIHRpbWVyICA9IGRhdGEudGltZXI7XG5cdFx0dmFyIHRvdWNoICA9IGlkZW50aWZpZWRUb3VjaChlLmNoYW5nZWRUb3VjaGVzLCBldmVudC5pZGVudGlmaWVyKTtcblxuXHRcdC8vIFRoaXMgaXNuJ3QgdGhlIHRvdWNoIHlvdSdyZSBsb29raW5nIGZvci5cblx0XHRpZiAoIXRvdWNoKSB7IHJldHVybjsgfVxuXG5cdFx0cmVtb3ZlQWN0aXZlVG91Y2goZGF0YSk7XG5cdFx0ZW5kRXZlbnQodGFyZ2V0LCBldmVudCwgdGltZXIpO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVtb3ZlQWN0aXZlVG91Y2goZGF0YSkge1xuXHRcdG9mZihkb2N1bWVudCwgdG91Y2hldmVudHMubW92ZSwgZGF0YS5hY3RpdmVUb3VjaG1vdmUpO1xuXHRcdG9mZihkb2N1bWVudCwgdG91Y2hldmVudHMuZW5kLCBkYXRhLmFjdGl2ZVRvdWNoZW5kKTtcblx0fVxuXG5cblx0Ly8gTG9naWMgZm9yIHRyaWdnZXJpbmcgbW92ZSBhbmQgbW92ZWVuZCBldmVudHNcblxuXHRmdW5jdGlvbiB1cGRhdGVFdmVudChldmVudCwgdG91Y2gsIHRpbWVTdGFtcCkge1xuXHRcdHZhciB0aW1lID0gdGltZVN0YW1wIC0gZXZlbnQudGltZVN0YW1wO1xuXG5cdFx0ZXZlbnQuZGlzdFggPSAgdG91Y2gucGFnZVggLSBldmVudC5zdGFydFg7XG5cdFx0ZXZlbnQuZGlzdFkgPSAgdG91Y2gucGFnZVkgLSBldmVudC5zdGFydFk7XG5cdFx0ZXZlbnQuZGVsdGFYID0gdG91Y2gucGFnZVggLSBldmVudC5wYWdlWDtcblx0XHRldmVudC5kZWx0YVkgPSB0b3VjaC5wYWdlWSAtIGV2ZW50LnBhZ2VZO1xuXG5cdFx0Ly8gQXZlcmFnZSB0aGUgdmVsb2NpdHkgb2YgdGhlIGxhc3QgZmV3IGV2ZW50cyB1c2luZyBhIGRlY2F5XG5cdFx0Ly8gY3VydmUgdG8gZXZlbiBvdXQgc3B1cmlvdXMganVtcHMgaW4gdmFsdWVzLlxuXHRcdGV2ZW50LnZlbG9jaXR5WCA9IDAuMyAqIGV2ZW50LnZlbG9jaXR5WCArIDAuNyAqIGV2ZW50LmRlbHRhWCAvIHRpbWU7XG5cdFx0ZXZlbnQudmVsb2NpdHlZID0gMC4zICogZXZlbnQudmVsb2NpdHlZICsgMC43ICogZXZlbnQuZGVsdGFZIC8gdGltZTtcblx0XHRldmVudC5wYWdlWCA9ICB0b3VjaC5wYWdlWDtcblx0XHRldmVudC5wYWdlWSA9ICB0b3VjaC5wYWdlWTtcblx0fVxuXG5cdGZ1bmN0aW9uIGVuZEV2ZW50KHRhcmdldCwgZXZlbnQsIHRpbWVyLCBmbikge1xuXHRcdHRpbWVyLmVuZChmdW5jdGlvbigpe1xuXHRcdFx0dHJpZ2dlcih0YXJnZXQsICdtb3ZlZW5kJywgZXZlbnQpO1xuXHRcdFx0cmV0dXJuIGZuICYmIGZuKCk7XG5cdFx0fSk7XG5cdH1cblxuXG5cdC8vIFNldCB1cCB0aGUgRE9NXG5cblx0ZnVuY3Rpb24gbW92ZXN0YXJ0KGUpIHtcblx0XHRpZiAoZS5kZWZhdWx0UHJldmVudGVkKSB7IHJldHVybjsgfVxuXHRcdGlmICghZS5tb3ZlRW5hYmxlZCkgeyByZXR1cm47IH1cblxuXHRcdHZhciBldmVudCA9IHtcblx0XHRcdHN0YXJ0WDogICAgICAgIGUuc3RhcnRYLFxuXHRcdFx0c3RhcnRZOiAgICAgICAgZS5zdGFydFksXG5cdFx0XHRwYWdlWDogICAgICAgICBlLnBhZ2VYLFxuXHRcdFx0cGFnZVk6ICAgICAgICAgZS5wYWdlWSxcblx0XHRcdGRpc3RYOiAgICAgICAgIGUuZGlzdFgsXG5cdFx0XHRkaXN0WTogICAgICAgICBlLmRpc3RZLFxuXHRcdFx0ZGVsdGFYOiAgICAgICAgZS5kZWx0YVgsXG5cdFx0XHRkZWx0YVk6ICAgICAgICBlLmRlbHRhWSxcblx0XHRcdHZlbG9jaXR5WDogICAgIGUudmVsb2NpdHlYLFxuXHRcdFx0dmVsb2NpdHlZOiAgICAgZS52ZWxvY2l0eVksXG5cdFx0XHRpZGVudGlmaWVyOiAgICBlLmlkZW50aWZpZXIsXG5cdFx0XHR0YXJnZXRUb3VjaGVzOiBlLnRhcmdldFRvdWNoZXMsXG5cdFx0XHRmaW5nZXI6ICAgICAgICBlLmZpbmdlclxuXHRcdH07XG5cblx0XHR2YXIgZGF0YSA9IHtcblx0XHRcdHRhcmdldDogICAgZS50YXJnZXQsXG5cdFx0XHRldmVudDogICAgIGV2ZW50LFxuXHRcdFx0dGltZXI6ICAgICBuZXcgVGltZXIodXBkYXRlKSxcblx0XHRcdHRvdWNoOiAgICAgdW5kZWZpbmVkLFxuXHRcdFx0dGltZVN0YW1wOiBlLnRpbWVTdGFtcFxuXHRcdH07XG5cblx0XHRmdW5jdGlvbiB1cGRhdGUodGltZSkge1xuXHRcdFx0dXBkYXRlRXZlbnQoZXZlbnQsIGRhdGEudG91Y2gsIGRhdGEudGltZVN0YW1wKTtcblx0XHRcdHRyaWdnZXIoZGF0YS50YXJnZXQsICdtb3ZlJywgZXZlbnQpO1xuXHRcdH1cblxuXHRcdGlmIChlLmlkZW50aWZpZXIgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Ly8gV2UncmUgZGVhbGluZyB3aXRoIGEgbW91c2UgZXZlbnQuXG5cdFx0XHQvLyBTdG9wIGNsaWNrcyBmcm9tIHByb3BhZ2F0aW5nIGR1cmluZyBhIG1vdmVcblx0XHRcdG9uKGUudGFyZ2V0LCAnY2xpY2snLCBwcmV2ZW50RGVmYXVsdCk7XG5cdFx0XHRvbihkb2N1bWVudCwgbW91c2VldmVudHMubW92ZSwgYWN0aXZlTW91c2Vtb3ZlLCBkYXRhKTtcblx0XHRcdG9uKGRvY3VtZW50LCBtb3VzZWV2ZW50cy5lbmQsIGFjdGl2ZU1vdXNlZW5kLCBkYXRhKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHQvLyBJbiBvcmRlciB0byB1bmJpbmQgY29ycmVjdCBoYW5kbGVycyB0aGV5IGhhdmUgdG8gYmUgdW5pcXVlXG5cdFx0XHRkYXRhLmFjdGl2ZVRvdWNobW92ZSA9IGZ1bmN0aW9uKGUsIGRhdGEpIHsgYWN0aXZlVG91Y2htb3ZlKGUsIGRhdGEpOyB9O1xuXHRcdFx0ZGF0YS5hY3RpdmVUb3VjaGVuZCA9IGZ1bmN0aW9uKGUsIGRhdGEpIHsgYWN0aXZlVG91Y2hlbmQoZSwgZGF0YSk7IH07XG5cblx0XHRcdC8vIFdlJ3JlIGRlYWxpbmcgd2l0aCBhIHRvdWNoLlxuXHRcdFx0b24oZG9jdW1lbnQsIHRvdWNoZXZlbnRzLm1vdmUsIGRhdGEuYWN0aXZlVG91Y2htb3ZlLCBkYXRhKTtcblx0XHRcdG9uKGRvY3VtZW50LCB0b3VjaGV2ZW50cy5lbmQsIGRhdGEuYWN0aXZlVG91Y2hlbmQsIGRhdGEpO1xuXHRcdH1cblx0fVxuXG5cdG9uKGRvY3VtZW50LCAnbW91c2Vkb3duJywgbW91c2Vkb3duKTtcblx0b24oZG9jdW1lbnQsICd0b3VjaHN0YXJ0JywgdG91Y2hzdGFydCk7XG5cdG9uKGRvY3VtZW50LCAnbW92ZXN0YXJ0JywgbW92ZXN0YXJ0KTtcblxuXG5cdC8vIGpRdWVyeSBzcGVjaWFsIGV2ZW50c1xuXHQvL1xuXHQvLyBqUXVlcnkgZXZlbnQgb2JqZWN0cyBhcmUgY29waWVzIG9mIERPTSBldmVudCBvYmplY3RzLiBUaGV5IG5lZWRcblx0Ly8gYSBsaXR0bGUgaGVscCBjb3B5aW5nIHRoZSBtb3ZlIHByb3BlcnRpZXMgYWNyb3NzLlxuXG5cdGlmICghd2luZG93LmpRdWVyeSkgeyByZXR1cm47IH1cblxuXHR2YXIgcHJvcGVydGllcyA9IChcInN0YXJ0WCBzdGFydFkgcGFnZVggcGFnZVkgZGlzdFggZGlzdFkgZGVsdGFYIGRlbHRhWSB2ZWxvY2l0eVggdmVsb2NpdHlZXCIpLnNwbGl0KCcgJyk7XG5cblx0ZnVuY3Rpb24gZW5hYmxlTW92ZTEoZSkgeyBlLmVuYWJsZU1vdmUoKTsgfVxuXHRmdW5jdGlvbiBlbmFibGVNb3ZlMihlKSB7IGUuZW5hYmxlTW92ZSgpOyB9XG5cdGZ1bmN0aW9uIGVuYWJsZU1vdmUzKGUpIHsgZS5lbmFibGVNb3ZlKCk7IH1cblxuXHRmdW5jdGlvbiBhZGQoaGFuZGxlT2JqKSB7XG5cdFx0dmFyIGhhbmRsZXIgPSBoYW5kbGVPYmouaGFuZGxlcjtcblxuXHRcdGhhbmRsZU9iai5oYW5kbGVyID0gZnVuY3Rpb24oZSkge1xuXHRcdFx0Ly8gQ29weSBtb3ZlIHByb3BlcnRpZXMgYWNyb3NzIGZyb20gb3JpZ2luYWxFdmVudFxuXHRcdFx0dmFyIGkgPSBwcm9wZXJ0aWVzLmxlbmd0aDtcblx0XHRcdHZhciBwcm9wZXJ0eTtcblxuXHRcdFx0d2hpbGUoaS0tKSB7XG5cdFx0XHRcdHByb3BlcnR5ID0gcHJvcGVydGllc1tpXTtcblx0XHRcdFx0ZVtwcm9wZXJ0eV0gPSBlLm9yaWdpbmFsRXZlbnRbcHJvcGVydHldO1xuXHRcdFx0fVxuXG5cdFx0XHRoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0fTtcblx0fVxuXG5cdGpRdWVyeS5ldmVudC5zcGVjaWFsLm1vdmVzdGFydCA9IHtcblx0XHRzZXR1cDogZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyBNb3Zlc3RhcnQgbXVzdCBiZSBlbmFibGVkIHRvIGFsbG93IG90aGVyIG1vdmUgZXZlbnRzXG5cdFx0XHRvbih0aGlzLCAnbW92ZXN0YXJ0JywgZW5hYmxlTW92ZTEpO1xuXG5cdFx0XHQvLyBEbyBsaXN0ZW4gdG8gRE9NIGV2ZW50c1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0sXG5cblx0XHR0ZWFyZG93bjogZnVuY3Rpb24oKSB7XG5cdFx0XHRvZmYodGhpcywgJ21vdmVzdGFydCcsIGVuYWJsZU1vdmUxKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXG5cdFx0YWRkOiBhZGRcblx0fTtcblxuXHRqUXVlcnkuZXZlbnQuc3BlY2lhbC5tb3ZlID0ge1xuXHRcdHNldHVwOiBmdW5jdGlvbigpIHtcblx0XHRcdG9uKHRoaXMsICdtb3Zlc3RhcnQnLCBlbmFibGVNb3ZlMik7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblxuXHRcdHRlYXJkb3duOiBmdW5jdGlvbigpIHtcblx0XHRcdG9mZih0aGlzLCAnbW92ZXN0YXJ0JywgZW5hYmxlTW92ZTIpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0sXG5cblx0XHRhZGQ6IGFkZFxuXHR9O1xuXG5cdGpRdWVyeS5ldmVudC5zcGVjaWFsLm1vdmVlbmQgPSB7XG5cdFx0c2V0dXA6IGZ1bmN0aW9uKCkge1xuXHRcdFx0b24odGhpcywgJ21vdmVzdGFydCcsIGVuYWJsZU1vdmUzKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXG5cdFx0dGVhcmRvd246IGZ1bmN0aW9uKCkge1xuXHRcdFx0b2ZmKHRoaXMsICdtb3Zlc3RhcnQnLCBlbmFibGVNb3ZlMyk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblxuXHRcdGFkZDogYWRkXG5cdH07XG59KTtcblxuLy8galF1ZXJ5IE1hc2sgUGx1Z2luIHYxLjE0LjE2XG4vLyBnaXRodWIuY29tL2lnb3Jlc2NvYmFyL2pRdWVyeS1NYXNrLVBsdWdpblxuLy8gdmFyICRqc2NvbXA9JGpzY29tcHx8e307JGpzY29tcC5zY29wZT17fTskanNjb21wLmZpbmRJbnRlcm5hbD1mdW5jdGlvbihhLG4sZil7YSBpbnN0YW5jZW9mIFN0cmluZyYmKGE9U3RyaW5nKGEpKTtmb3IodmFyIHA9YS5sZW5ndGgsaz0wO2s8cDtrKyspe3ZhciBiPWFba107aWYobi5jYWxsKGYsYixrLGEpKXJldHVybntpOmssdjpifX1yZXR1cm57aTotMSx2OnZvaWQgMH19OyRqc2NvbXAuQVNTVU1FX0VTNT0hMTskanNjb21wLkFTU1VNRV9OT19OQVRJVkVfTUFQPSExOyRqc2NvbXAuQVNTVU1FX05PX05BVElWRV9TRVQ9ITE7JGpzY29tcC5TSU1QTEVfRlJPVU5EX1BPTFlGSUxMPSExO1xuLy8gJGpzY29tcC5kZWZpbmVQcm9wZXJ0eT0kanNjb21wLkFTU1VNRV9FUzV8fFwiZnVuY3Rpb25cIj09dHlwZW9mIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzP09iamVjdC5kZWZpbmVQcm9wZXJ0eTpmdW5jdGlvbihhLG4sZil7YSE9QXJyYXkucHJvdG90eXBlJiZhIT1PYmplY3QucHJvdG90eXBlJiYoYVtuXT1mLnZhbHVlKX07JGpzY29tcC5nZXRHbG9iYWw9ZnVuY3Rpb24oYSl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93PT09YT9hOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWwmJm51bGwhPWdsb2JhbD9nbG9iYWw6YX07JGpzY29tcC5nbG9iYWw9JGpzY29tcC5nZXRHbG9iYWwodGhpcyk7XG4vLyAkanNjb21wLnBvbHlmaWxsPWZ1bmN0aW9uKGEsbixmLHApe2lmKG4pe2Y9JGpzY29tcC5nbG9iYWw7YT1hLnNwbGl0KFwiLlwiKTtmb3IocD0wO3A8YS5sZW5ndGgtMTtwKyspe3ZhciBrPWFbcF07ayBpbiBmfHwoZltrXT17fSk7Zj1mW2tdfWE9YVthLmxlbmd0aC0xXTtwPWZbYV07bj1uKHApO24hPXAmJm51bGwhPW4mJiRqc2NvbXAuZGVmaW5lUHJvcGVydHkoZixhLHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6bn0pfX07JGpzY29tcC5wb2x5ZmlsbChcIkFycmF5LnByb3RvdHlwZS5maW5kXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGE/YTpmdW5jdGlvbihhLGYpe3JldHVybiAkanNjb21wLmZpbmRJbnRlcm5hbCh0aGlzLGEsZikudn19LFwiZXM2XCIsXCJlczNcIik7XG4vLyAoZnVuY3Rpb24oYSxuLGYpe1wiZnVuY3Rpb25cIj09PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImpxdWVyeVwiXSxhKTpcIm9iamVjdFwiPT09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCI9PT10eXBlb2YgTWV0ZW9yP21vZHVsZS5leHBvcnRzPWEocmVxdWlyZShcImpxdWVyeVwiKSk6YShufHxmKX0pKGZ1bmN0aW9uKGEpe3ZhciBuPWZ1bmN0aW9uKGIsZCxlKXt2YXIgYz17aW52YWxpZDpbXSxnZXRDYXJldDpmdW5jdGlvbigpe3RyeXt2YXIgYT0wLHI9Yi5nZXQoMCksaD1kb2N1bWVudC5zZWxlY3Rpb24sZD1yLnNlbGVjdGlvblN0YXJ0O2lmKGgmJi0xPT09bmF2aWdhdG9yLmFwcFZlcnNpb24uaW5kZXhPZihcIk1TSUUgMTBcIikpe3ZhciBlPWguY3JlYXRlUmFuZ2UoKTtlLm1vdmVTdGFydChcImNoYXJhY3RlclwiLC1jLnZhbCgpLmxlbmd0aCk7YT1lLnRleHQubGVuZ3RofWVsc2UgaWYoZHx8XCIwXCI9PT1kKWE9ZDtyZXR1cm4gYX1jYXRjaChDKXt9fSxzZXRDYXJldDpmdW5jdGlvbihhKXt0cnl7aWYoYi5pcyhcIjpmb2N1c1wiKSl7dmFyIGM9XG4vLyBiLmdldCgwKTtpZihjLnNldFNlbGVjdGlvblJhbmdlKWMuc2V0U2VsZWN0aW9uUmFuZ2UoYSxhKTtlbHNle3ZhciBnPWMuY3JlYXRlVGV4dFJhbmdlKCk7Zy5jb2xsYXBzZSghMCk7Zy5tb3ZlRW5kKFwiY2hhcmFjdGVyXCIsYSk7Zy5tb3ZlU3RhcnQoXCJjaGFyYWN0ZXJcIixhKTtnLnNlbGVjdCgpfX19Y2F0Y2goQil7fX0sZXZlbnRzOmZ1bmN0aW9uKCl7Yi5vbihcImtleWRvd24ubWFza1wiLGZ1bmN0aW9uKGEpe2IuZGF0YShcIm1hc2sta2V5Y29kZVwiLGEua2V5Q29kZXx8YS53aGljaCk7Yi5kYXRhKFwibWFzay1wcmV2aXVzLXZhbHVlXCIsYi52YWwoKSk7Yi5kYXRhKFwibWFzay1wcmV2aXVzLWNhcmV0LXBvc1wiLGMuZ2V0Q2FyZXQoKSk7Yy5tYXNrRGlnaXRQb3NNYXBPbGQ9Yy5tYXNrRGlnaXRQb3NNYXB9KS5vbihhLmpNYXNrR2xvYmFscy51c2VJbnB1dD9cImlucHV0Lm1hc2tcIjpcImtleXVwLm1hc2tcIixjLmJlaGF2aW91cikub24oXCJwYXN0ZS5tYXNrIGRyb3AubWFza1wiLGZ1bmN0aW9uKCl7c2V0VGltZW91dChmdW5jdGlvbigpe2Iua2V5ZG93bigpLmtleXVwKCl9LFxuLy8gMTAwKX0pLm9uKFwiY2hhbmdlLm1hc2tcIixmdW5jdGlvbigpe2IuZGF0YShcImNoYW5nZWRcIiwhMCl9KS5vbihcImJsdXIubWFza1wiLGZ1bmN0aW9uKCl7Zj09PWMudmFsKCl8fGIuZGF0YShcImNoYW5nZWRcIil8fGIudHJpZ2dlcihcImNoYW5nZVwiKTtiLmRhdGEoXCJjaGFuZ2VkXCIsITEpfSkub24oXCJibHVyLm1hc2tcIixmdW5jdGlvbigpe2Y9Yy52YWwoKX0pLm9uKFwiZm9jdXMubWFza1wiLGZ1bmN0aW9uKGIpeyEwPT09ZS5zZWxlY3RPbkZvY3VzJiZhKGIudGFyZ2V0KS5zZWxlY3QoKX0pLm9uKFwiZm9jdXNvdXQubWFza1wiLGZ1bmN0aW9uKCl7ZS5jbGVhcklmTm90TWF0Y2gmJiFrLnRlc3QoYy52YWwoKSkmJmMudmFsKFwiXCIpfSl9LGdldFJlZ2V4TWFzazpmdW5jdGlvbigpe2Zvcih2YXIgYT1bXSxiLGMsZSx0LGY9MDtmPGQubGVuZ3RoO2YrKykoYj1sLnRyYW5zbGF0aW9uW2QuY2hhckF0KGYpXSk/KGM9Yi5wYXR0ZXJuLnRvU3RyaW5nKCkucmVwbGFjZSgvLnsxfSR8Xi57MX0vZyxcIlwiKSxlPWIub3B0aW9uYWwsXG4vLyAoYj1iLnJlY3Vyc2l2ZSk/KGEucHVzaChkLmNoYXJBdChmKSksdD17ZGlnaXQ6ZC5jaGFyQXQoZikscGF0dGVybjpjfSk6YS5wdXNoKGV8fGI/YytcIj9cIjpjKSk6YS5wdXNoKGQuY2hhckF0KGYpLnJlcGxhY2UoL1stXFwvXFxcXF4kKis/LigpfFtcXF17fV0vZyxcIlxcXFwkJlwiKSk7YT1hLmpvaW4oXCJcIik7dCYmKGE9YS5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoXCIrdC5kaWdpdCtcIiguKlwiK3QuZGlnaXQrXCIpPylcIiksXCIoJDEpP1wiKS5yZXBsYWNlKG5ldyBSZWdFeHAodC5kaWdpdCxcImdcIiksdC5wYXR0ZXJuKSk7cmV0dXJuIG5ldyBSZWdFeHAoYSl9LGRlc3Ryb3lFdmVudHM6ZnVuY3Rpb24oKXtiLm9mZihcImlucHV0IGtleWRvd24ga2V5dXAgcGFzdGUgZHJvcCBibHVyIGZvY3Vzb3V0IFwiLnNwbGl0KFwiIFwiKS5qb2luKFwiLm1hc2sgXCIpKX0sdmFsOmZ1bmN0aW9uKGEpe3ZhciBjPWIuaXMoXCJpbnB1dFwiKT9cInZhbFwiOlwidGV4dFwiO2lmKDA8YXJndW1lbnRzLmxlbmd0aCl7aWYoYltjXSgpIT09YSliW2NdKGEpO1xuLy8gYz1ifWVsc2UgYz1iW2NdKCk7cmV0dXJuIGN9LGNhbGN1bGF0ZUNhcmV0UG9zaXRpb246ZnVuY3Rpb24oYSl7dmFyIGQ9Yy5nZXRNYXNrZWQoKSxoPWMuZ2V0Q2FyZXQoKTtpZihhIT09ZCl7dmFyIGU9Yi5kYXRhKFwibWFzay1wcmV2aXVzLWNhcmV0LXBvc1wiKXx8MDtkPWQubGVuZ3RoO3ZhciBnPWEubGVuZ3RoLGY9YT0wLGw9MCxrPTAsbTtmb3IobT1oO208ZCYmYy5tYXNrRGlnaXRQb3NNYXBbbV07bSsrKWYrKztmb3IobT1oLTE7MDw9bSYmYy5tYXNrRGlnaXRQb3NNYXBbbV07bS0tKWErKztmb3IobT1oLTE7MDw9bTttLS0pYy5tYXNrRGlnaXRQb3NNYXBbbV0mJmwrKztmb3IobT1lLTE7MDw9bTttLS0pYy5tYXNrRGlnaXRQb3NNYXBPbGRbbV0mJmsrKztoPmc/aD0xMCpkOmU+PWgmJmUhPT1nP2MubWFza0RpZ2l0UG9zTWFwT2xkW2hdfHwoZT1oLGg9aC0oay1sKS1hLGMubWFza0RpZ2l0UG9zTWFwW2hdJiYoaD1lKSk6aD5lJiYoaD1oKyhsLWspK2YpfXJldHVybiBofSxiZWhhdmlvdXI6ZnVuY3Rpb24oZCl7ZD1cbi8vIGR8fHdpbmRvdy5ldmVudDtjLmludmFsaWQ9W107dmFyIGU9Yi5kYXRhKFwibWFzay1rZXljb2RlXCIpO2lmKC0xPT09YS5pbkFycmF5KGUsbC5ieVBhc3NLZXlzKSl7ZT1jLmdldE1hc2tlZCgpO3ZhciBoPWMuZ2V0Q2FyZXQoKSxnPWIuZGF0YShcIm1hc2stcHJldml1cy12YWx1ZVwiKXx8XCJcIjtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Yy5zZXRDYXJldChjLmNhbGN1bGF0ZUNhcmV0UG9zaXRpb24oZykpfSxhLmpNYXNrR2xvYmFscy5rZXlTdHJva2VDb21wZW5zYXRpb24pO2MudmFsKGUpO2Muc2V0Q2FyZXQoaCk7cmV0dXJuIGMuY2FsbGJhY2tzKGQpfX0sZ2V0TWFza2VkOmZ1bmN0aW9uKGEsYil7dmFyIGg9W10sZj12b2lkIDA9PT1iP2MudmFsKCk6YitcIlwiLGc9MCxrPWQubGVuZ3RoLG49MCxwPWYubGVuZ3RoLG09MSxyPVwicHVzaFwiLHU9LTEsdz0wO2I9W107aWYoZS5yZXZlcnNlKXtyPVwidW5zaGlmdFwiO209LTE7dmFyIHg9MDtnPWstMTtuPXAtMTt2YXIgQT1mdW5jdGlvbigpe3JldHVybi0xPFxuLy8gZyYmLTE8bn19ZWxzZSB4PWstMSxBPWZ1bmN0aW9uKCl7cmV0dXJuIGc8ayYmbjxwfTtmb3IodmFyIHo7QSgpOyl7dmFyIHk9ZC5jaGFyQXQoZyksdj1mLmNoYXJBdChuKSxxPWwudHJhbnNsYXRpb25beV07aWYocSl2Lm1hdGNoKHEucGF0dGVybik/KGhbcl0odikscS5yZWN1cnNpdmUmJigtMT09PXU/dT1nOmc9PT14JiZnIT09dSYmKGc9dS1tKSx4PT09dSYmKGctPW0pKSxnKz1tKTp2PT09ej8ody0tLHo9dm9pZCAwKTpxLm9wdGlvbmFsPyhnKz1tLG4tPW0pOnEuZmFsbGJhY2s/KGhbcl0ocS5mYWxsYmFjayksZys9bSxuLT1tKTpjLmludmFsaWQucHVzaCh7cDpuLHY6dixlOnEucGF0dGVybn0pLG4rPW07ZWxzZXtpZighYSloW3JdKHkpO3Y9PT15PyhiLnB1c2gobiksbis9bSk6KHo9eSxiLnB1c2gobit3KSx3KyspO2crPW19fWE9ZC5jaGFyQXQoeCk7ayE9PXArMXx8bC50cmFuc2xhdGlvblthXXx8aC5wdXNoKGEpO2g9aC5qb2luKFwiXCIpO2MubWFwTWFza2RpZ2l0UG9zaXRpb25zKGgsXG4vLyBiLHApO3JldHVybiBofSxtYXBNYXNrZGlnaXRQb3NpdGlvbnM6ZnVuY3Rpb24oYSxiLGQpe2E9ZS5yZXZlcnNlP2EubGVuZ3RoLWQ6MDtjLm1hc2tEaWdpdFBvc01hcD17fTtmb3IoZD0wO2Q8Yi5sZW5ndGg7ZCsrKWMubWFza0RpZ2l0UG9zTWFwW2JbZF0rYV09MX0sY2FsbGJhY2tzOmZ1bmN0aW9uKGEpe3ZhciBnPWMudmFsKCksaD1nIT09ZixrPVtnLGEsYixlXSxsPWZ1bmN0aW9uKGEsYixjKXtcImZ1bmN0aW9uXCI9PT10eXBlb2YgZVthXSYmYiYmZVthXS5hcHBseSh0aGlzLGMpfTtsKFwib25DaGFuZ2VcIiwhMD09PWgsayk7bChcIm9uS2V5UHJlc3NcIiwhMD09PWgsayk7bChcIm9uQ29tcGxldGVcIixnLmxlbmd0aD09PWQubGVuZ3RoLGspO2woXCJvbkludmFsaWRcIiwwPGMuaW52YWxpZC5sZW5ndGgsW2csYSxiLGMuaW52YWxpZCxlXSl9fTtiPWEoYik7dmFyIGw9dGhpcyxmPWMudmFsKCksaztkPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBkP2QoYy52YWwoKSx2b2lkIDAsYixlKTpkO2wubWFzaz1cbi8vIGQ7bC5vcHRpb25zPWU7bC5yZW1vdmU9ZnVuY3Rpb24oKXt2YXIgYT1jLmdldENhcmV0KCk7bC5vcHRpb25zLnBsYWNlaG9sZGVyJiZiLnJlbW92ZUF0dHIoXCJwbGFjZWhvbGRlclwiKTtiLmRhdGEoXCJtYXNrLW1heGxlbmd0aFwiKSYmYi5yZW1vdmVBdHRyKFwibWF4bGVuZ3RoXCIpO2MuZGVzdHJveUV2ZW50cygpO2MudmFsKGwuZ2V0Q2xlYW5WYWwoKSk7Yy5zZXRDYXJldChhKTtyZXR1cm4gYn07bC5nZXRDbGVhblZhbD1mdW5jdGlvbigpe3JldHVybiBjLmdldE1hc2tlZCghMCl9O2wuZ2V0TWFza2VkVmFsPWZ1bmN0aW9uKGEpe3JldHVybiBjLmdldE1hc2tlZCghMSxhKX07bC5pbml0PWZ1bmN0aW9uKGcpe2c9Z3x8ITE7ZT1lfHx7fTtsLmNsZWFySWZOb3RNYXRjaD1hLmpNYXNrR2xvYmFscy5jbGVhcklmTm90TWF0Y2g7bC5ieVBhc3NLZXlzPWEuak1hc2tHbG9iYWxzLmJ5UGFzc0tleXM7bC50cmFuc2xhdGlvbj1hLmV4dGVuZCh7fSxhLmpNYXNrR2xvYmFscy50cmFuc2xhdGlvbixlLnRyYW5zbGF0aW9uKTtcbi8vIGw9YS5leHRlbmQoITAse30sbCxlKTtrPWMuZ2V0UmVnZXhNYXNrKCk7aWYoZyljLmV2ZW50cygpLGMudmFsKGMuZ2V0TWFza2VkKCkpO2Vsc2V7ZS5wbGFjZWhvbGRlciYmYi5hdHRyKFwicGxhY2Vob2xkZXJcIixlLnBsYWNlaG9sZGVyKTtiLmRhdGEoXCJtYXNrXCIpJiZiLmF0dHIoXCJhdXRvY29tcGxldGVcIixcIm9mZlwiKTtnPTA7Zm9yKHZhciBmPSEwO2c8ZC5sZW5ndGg7ZysrKXt2YXIgaD1sLnRyYW5zbGF0aW9uW2QuY2hhckF0KGcpXTtpZihoJiZoLnJlY3Vyc2l2ZSl7Zj0hMTticmVha319ZiYmYi5hdHRyKFwibWF4bGVuZ3RoXCIsZC5sZW5ndGgpLmRhdGEoXCJtYXNrLW1heGxlbmd0aFwiLCEwKTtjLmRlc3Ryb3lFdmVudHMoKTtjLmV2ZW50cygpO2c9Yy5nZXRDYXJldCgpO2MudmFsKGMuZ2V0TWFza2VkKCkpO2Muc2V0Q2FyZXQoZyl9fTtsLmluaXQoIWIuaXMoXCJpbnB1dFwiKSl9O2EubWFza1dhdGNoZXJzPXt9O3ZhciBmPWZ1bmN0aW9uKCl7dmFyIGI9YSh0aGlzKSxkPXt9LGU9Yi5hdHRyKFwiZGF0YS1tYXNrXCIpO1xuLy8gYi5hdHRyKFwiZGF0YS1tYXNrLXJldmVyc2VcIikmJihkLnJldmVyc2U9ITApO2IuYXR0cihcImRhdGEtbWFzay1jbGVhcmlmbm90bWF0Y2hcIikmJihkLmNsZWFySWZOb3RNYXRjaD0hMCk7XCJ0cnVlXCI9PT1iLmF0dHIoXCJkYXRhLW1hc2stc2VsZWN0b25mb2N1c1wiKSYmKGQuc2VsZWN0T25Gb2N1cz0hMCk7aWYocChiLGUsZCkpcmV0dXJuIGIuZGF0YShcIm1hc2tcIixuZXcgbih0aGlzLGUsZCkpfSxwPWZ1bmN0aW9uKGIsZCxlKXtlPWV8fHt9O3ZhciBjPWEoYikuZGF0YShcIm1hc2tcIiksZj1KU09OLnN0cmluZ2lmeTtiPWEoYikudmFsKCl8fGEoYikudGV4dCgpO3RyeXtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgZCYmKGQ9ZChiKSksXCJvYmplY3RcIiE9PXR5cGVvZiBjfHxmKGMub3B0aW9ucykhPT1mKGUpfHxjLm1hc2shPT1kfWNhdGNoKHcpe319LGs9ZnVuY3Rpb24oYSl7dmFyIGI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTthPVwib25cIithO3ZhciBlPWEgaW4gYjtlfHwoYi5zZXRBdHRyaWJ1dGUoYSxcbi8vIFwicmV0dXJuO1wiKSxlPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBiW2FdKTtyZXR1cm4gZX07YS5mbi5tYXNrPWZ1bmN0aW9uKGIsZCl7ZD1kfHx7fTt2YXIgZT10aGlzLnNlbGVjdG9yLGM9YS5qTWFza0dsb2JhbHMsZj1jLndhdGNoSW50ZXJ2YWw7Yz1kLndhdGNoSW5wdXRzfHxjLndhdGNoSW5wdXRzO3ZhciBrPWZ1bmN0aW9uKCl7aWYocCh0aGlzLGIsZCkpcmV0dXJuIGEodGhpcykuZGF0YShcIm1hc2tcIixuZXcgbih0aGlzLGIsZCkpfTthKHRoaXMpLmVhY2goayk7ZSYmXCJcIiE9PWUmJmMmJihjbGVhckludGVydmFsKGEubWFza1dhdGNoZXJzW2VdKSxhLm1hc2tXYXRjaGVyc1tlXT1zZXRJbnRlcnZhbChmdW5jdGlvbigpe2EoZG9jdW1lbnQpLmZpbmQoZSkuZWFjaChrKX0sZikpO3JldHVybiB0aGlzfTthLmZuLm1hc2tlZD1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5kYXRhKFwibWFza1wiKS5nZXRNYXNrZWRWYWwoYSl9O2EuZm4udW5tYXNrPWZ1bmN0aW9uKCl7Y2xlYXJJbnRlcnZhbChhLm1hc2tXYXRjaGVyc1t0aGlzLnNlbGVjdG9yXSk7XG4vLyBkZWxldGUgYS5tYXNrV2F0Y2hlcnNbdGhpcy5zZWxlY3Rvcl07cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiPWEodGhpcykuZGF0YShcIm1hc2tcIik7YiYmYi5yZW1vdmUoKS5yZW1vdmVEYXRhKFwibWFza1wiKX0pfTthLmZuLmNsZWFuVmFsPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZGF0YShcIm1hc2tcIikuZ2V0Q2xlYW5WYWwoKX07YS5hcHBseURhdGFNYXNrPWZ1bmN0aW9uKGIpe2I9Ynx8YS5qTWFza0dsb2JhbHMubWFza0VsZW1lbnRzOyhiIGluc3RhbmNlb2YgYT9iOmEoYikpLmZpbHRlcihhLmpNYXNrR2xvYmFscy5kYXRhTWFza0F0dHIpLmVhY2goZil9O2s9e21hc2tFbGVtZW50czpcImlucHV0LHRkLHNwYW4sZGl2XCIsZGF0YU1hc2tBdHRyOlwiKltkYXRhLW1hc2tdXCIsZGF0YU1hc2s6ITAsd2F0Y2hJbnRlcnZhbDozMDAsd2F0Y2hJbnB1dHM6ITAsa2V5U3Ryb2tlQ29tcGVuc2F0aW9uOjEwLHVzZUlucHV0OiEvQ2hyb21lXFwvWzItNF1bMC05XXxTYW1zdW5nQnJvd3Nlci8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkmJlxuLy8gayhcImlucHV0XCIpLHdhdGNoRGF0YU1hc2s6ITEsYnlQYXNzS2V5czpbOSwxNiwxNywxOCwzNiwzNywzOCwzOSw0MCw5MV0sdHJhbnNsYXRpb246ezA6e3BhdHRlcm46L1xcZC99LDk6e3BhdHRlcm46L1xcZC8sb3B0aW9uYWw6ITB9LFwiI1wiOntwYXR0ZXJuOi9cXGQvLHJlY3Vyc2l2ZTohMH0sQTp7cGF0dGVybjovW2EtekEtWjAtOV0vfSxTOntwYXR0ZXJuOi9bYS16QS1aXS99fX07YS5qTWFza0dsb2JhbHM9YS5qTWFza0dsb2JhbHN8fHt9O2s9YS5qTWFza0dsb2JhbHM9YS5leHRlbmQoITAse30sayxhLmpNYXNrR2xvYmFscyk7ay5kYXRhTWFzayYmYS5hcHBseURhdGFNYXNrKCk7c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXthLmpNYXNrR2xvYmFscy53YXRjaERhdGFNYXNrJiZhLmFwcGx5RGF0YU1hc2soKX0say53YXRjaEludGVydmFsKX0sd2luZG93LmpRdWVyeSx3aW5kb3cuWmVwdG8pO1xuXG4vKiAgalF1ZXJ5IE5pY2UgU2VsZWN0IC0gdjEuMS4wXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2hlcm5hbnNhcnRvcmlvL2pxdWVyeS1uaWNlLXNlbGVjdFxuICAgIE1hZGUgYnkgSGVybsOhbiBTYXJ0b3JpbyAgKi9cblxuKGZ1bmN0aW9uKCQpIHtcblxuICAkLmZuLm5pY2VTZWxlY3QgPSBmdW5jdGlvbihtZXRob2QpIHtcblxuICAgIC8vIE1ldGhvZHNcbiAgICBpZiAodHlwZW9mIG1ldGhvZCA9PSAnc3RyaW5nJykge1xuICAgICAgaWYgKG1ldGhvZCA9PSAndXBkYXRlJykge1xuICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyICRzZWxlY3QgPSAkKHRoaXMpO1xuICAgICAgICAgIHZhciAkZHJvcGRvd24gPSAkKHRoaXMpLm5leHQoJy5uaWNlLXNlbGVjdCcpO1xuICAgICAgICAgIHZhciBvcGVuID0gJGRyb3Bkb3duLmhhc0NsYXNzKCdvcGVuJyk7XG5cbiAgICAgICAgICBpZiAoJGRyb3Bkb3duLmxlbmd0aCkge1xuICAgICAgICAgICAgJGRyb3Bkb3duLnJlbW92ZSgpO1xuICAgICAgICAgICAgY3JlYXRlX25pY2Vfc2VsZWN0KCRzZWxlY3QpO1xuXG4gICAgICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgICAkc2VsZWN0Lm5leHQoKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PSAnZGVzdHJveScpIHtcbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciAkc2VsZWN0ID0gJCh0aGlzKTtcbiAgICAgICAgICB2YXIgJGRyb3Bkb3duID0gJCh0aGlzKS5uZXh0KCcubmljZS1zZWxlY3QnKTtcblxuICAgICAgICAgIGlmICgkZHJvcGRvd24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAkZHJvcGRvd24ucmVtb3ZlKCk7XG4gICAgICAgICAgICAkc2VsZWN0LmNzcygnZGlzcGxheScsICcnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoJCgnLm5pY2Utc2VsZWN0JykubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAkKGRvY3VtZW50KS5vZmYoJy5uaWNlX3NlbGVjdCcpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnTWV0aG9kIFwiJyArIG1ldGhvZCArICdcIiBkb2VzIG5vdCBleGlzdC4nKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gSGlkZSBuYXRpdmUgc2VsZWN0XG4gICAgdGhpcy5oaWRlKCk7XG5cbiAgICAvLyBDcmVhdGUgY3VzdG9tIG1hcmt1cFxuICAgIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIHZhciAkc2VsZWN0ID0gJCh0aGlzKTtcblxuICAgICAgaWYgKCEkc2VsZWN0Lm5leHQoKS5oYXNDbGFzcygnbmljZS1zZWxlY3QnKSkge1xuICAgICAgICBjcmVhdGVfbmljZV9zZWxlY3QoJHNlbGVjdCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVfbmljZV9zZWxlY3QoJHNlbGVjdCkge1xuICAgICAgJHNlbGVjdC5hZnRlcigkKCc8ZGl2PjwvZGl2PicpXG4gICAgICAgIC5hZGRDbGFzcygnbmljZS1zZWxlY3QnKVxuICAgICAgICAuYWRkQ2xhc3MoJHNlbGVjdC5hdHRyKCdjbGFzcycpIHx8ICcnKVxuICAgICAgICAuYWRkQ2xhc3MoJHNlbGVjdC5hdHRyKCdkaXNhYmxlZCcpID8gJ2Rpc2FibGVkJyA6ICcnKVxuICAgICAgICAuYXR0cigndGFiaW5kZXgnLCAkc2VsZWN0LmF0dHIoJ2Rpc2FibGVkJykgPyBudWxsIDogJzAnKVxuICAgICAgICAuaHRtbCgnPHNwYW4gY2xhc3M9XCJjdXJyZW50XCI+PC9zcGFuPjx1bCBjbGFzcz1cImxpc3RcIj48L3VsPicpXG4gICAgICApO1xuXG4gICAgICB2YXIgJGRyb3Bkb3duID0gJHNlbGVjdC5uZXh0KCk7XG4gICAgICB2YXIgJG9wdGlvbnMgPSAkc2VsZWN0LmZpbmQoJ29wdGlvbicpO1xuICAgICAgdmFyICRzZWxlY3RlZCA9ICRzZWxlY3QuZmluZCgnb3B0aW9uOnNlbGVjdGVkJyk7XG5cbiAgICAgICRkcm9wZG93bi5maW5kKCcuY3VycmVudCcpLmh0bWwoJHNlbGVjdGVkLmRhdGEoJ2Rpc3BsYXknKSB8fMKgJHNlbGVjdGVkLnRleHQoKSk7XG5cbiAgICAgICRvcHRpb25zLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgICB2YXIgJG9wdGlvbiA9ICQodGhpcyk7XG4gICAgICAgIHZhciBkaXNwbGF5ID0gJG9wdGlvbi5kYXRhKCdkaXNwbGF5Jyk7XG5cbiAgICAgICAgJGRyb3Bkb3duLmZpbmQoJ3VsJykuYXBwZW5kKCQoJzxsaT48L2xpPicpXG4gICAgICAgICAgLmF0dHIoJ2RhdGEtdmFsdWUnLCAkb3B0aW9uLnZhbCgpKVxuICAgICAgICAgIC5hdHRyKCdkYXRhLWRpc3BsYXknLCAoZGlzcGxheSB8fCBudWxsKSlcbiAgICAgICAgICAuYWRkQ2xhc3MoJ29wdGlvbicgK1xuICAgICAgICAgICAgKCRvcHRpb24uaXMoJzpzZWxlY3RlZCcpID8gJyBzZWxlY3RlZCcgOiAnJykgK1xuICAgICAgICAgICAgKCRvcHRpb24uaXMoJzpkaXNhYmxlZCcpID8gJyBkaXNhYmxlZCcgOiAnJykpXG4gICAgICAgICAgLmh0bWwoJG9wdGlvbi50ZXh0KCkpXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKiBFdmVudCBsaXN0ZW5lcnMgKi9cblxuICAgIC8vIFVuYmluZCBleGlzdGluZyBldmVudHMgaW4gY2FzZSB0aGF0IHRoZSBwbHVnaW4gaGFzIGJlZW4gaW5pdGlhbGl6ZWQgYmVmb3JlXG4gICAgJChkb2N1bWVudCkub2ZmKCcubmljZV9zZWxlY3QnKTtcblxuICAgIC8vIE9wZW4vY2xvc2VcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2submljZV9zZWxlY3QnLCAnLm5pY2Utc2VsZWN0JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIHZhciAkZHJvcGRvd24gPSAkKHRoaXMpO1xuXG4gICAgICAkKCcubmljZS1zZWxlY3QnKS5ub3QoJGRyb3Bkb3duKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgJGRyb3Bkb3duLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG5cbiAgICAgIGlmICgkZHJvcGRvd24uaGFzQ2xhc3MoJ29wZW4nKSkge1xuICAgICAgICAkZHJvcGRvd24uZmluZCgnLm9wdGlvbicpO1xuICAgICAgICAkZHJvcGRvd24uZmluZCgnLmZvY3VzJykucmVtb3ZlQ2xhc3MoJ2ZvY3VzJyk7XG4gICAgICAgICRkcm9wZG93bi5maW5kKCcuc2VsZWN0ZWQnKS5hZGRDbGFzcygnZm9jdXMnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRkcm9wZG93bi5mb2N1cygpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gQ2xvc2Ugd2hlbiBjbGlja2luZyBvdXRzaWRlXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrLm5pY2Vfc2VsZWN0JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGlmICgkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnLm5pY2Utc2VsZWN0JykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICQoJy5uaWNlLXNlbGVjdCcpLnJlbW92ZUNsYXNzKCdvcGVuJykuZmluZCgnLm9wdGlvbicpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gT3B0aW9uIGNsaWNrXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrLm5pY2Vfc2VsZWN0JywgJy5uaWNlLXNlbGVjdCAub3B0aW9uOm5vdCguZGlzYWJsZWQpJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIHZhciAkb3B0aW9uID0gJCh0aGlzKTtcbiAgICAgIHZhciAkZHJvcGRvd24gPSAkb3B0aW9uLmNsb3Nlc3QoJy5uaWNlLXNlbGVjdCcpO1xuXG4gICAgICAkZHJvcGRvd24uZmluZCgnLnNlbGVjdGVkJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAkb3B0aW9uLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuXG4gICAgICB2YXIgdGV4dCA9ICRvcHRpb24uZGF0YSgnZGlzcGxheScpIHx8ICRvcHRpb24udGV4dCgpO1xuICAgICAgJGRyb3Bkb3duLmZpbmQoJy5jdXJyZW50JykudGV4dCh0ZXh0KTtcblxuICAgICAgJGRyb3Bkb3duLnByZXYoJ3NlbGVjdCcpLnZhbCgkb3B0aW9uLmRhdGEoJ3ZhbHVlJykpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgIH0pO1xuXG4gICAgLy8gS2V5Ym9hcmQgZXZlbnRzXG4gICAgJChkb2N1bWVudCkub24oJ2tleWRvd24ubmljZV9zZWxlY3QnLCAnLm5pY2Utc2VsZWN0JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIHZhciAkZHJvcGRvd24gPSAkKHRoaXMpO1xuICAgICAgdmFyICRmb2N1c2VkX29wdGlvbiA9ICQoJGRyb3Bkb3duLmZpbmQoJy5mb2N1cycpIHx8ICRkcm9wZG93bi5maW5kKCcubGlzdCAub3B0aW9uLnNlbGVjdGVkJykpO1xuXG4gICAgICAvLyBTcGFjZSBvciBFbnRlclxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMzIgfHwgZXZlbnQua2V5Q29kZSA9PSAxMykge1xuICAgICAgICBpZiAoJGRyb3Bkb3duLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICAgICAkZm9jdXNlZF9vcHRpb24udHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkZHJvcGRvd24udHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAvLyBEb3duXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT0gNDApIHtcbiAgICAgICAgaWYgKCEkZHJvcGRvd24uaGFzQ2xhc3MoJ29wZW4nKSkge1xuICAgICAgICAgICRkcm9wZG93bi50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciAkbmV4dCA9ICRmb2N1c2VkX29wdGlvbi5uZXh0QWxsKCcub3B0aW9uOm5vdCguZGlzYWJsZWQpJykuZmlyc3QoKTtcbiAgICAgICAgICBpZiAoJG5leHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgJGRyb3Bkb3duLmZpbmQoJy5mb2N1cycpLnJlbW92ZUNsYXNzKCdmb2N1cycpO1xuICAgICAgICAgICAgJG5leHQuYWRkQ2xhc3MoJ2ZvY3VzJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIC8vIFVwXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT0gMzgpIHtcbiAgICAgICAgaWYgKCEkZHJvcGRvd24uaGFzQ2xhc3MoJ29wZW4nKSkge1xuICAgICAgICAgICRkcm9wZG93bi50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciAkcHJldiA9ICRmb2N1c2VkX29wdGlvbi5wcmV2QWxsKCcub3B0aW9uOm5vdCguZGlzYWJsZWQpJykuZmlyc3QoKTtcbiAgICAgICAgICBpZiAoJHByZXYubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgJGRyb3Bkb3duLmZpbmQoJy5mb2N1cycpLnJlbW92ZUNsYXNzKCdmb2N1cycpO1xuICAgICAgICAgICAgJHByZXYuYWRkQ2xhc3MoJ2ZvY3VzJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIC8vIEVzY1xuICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09IDI3KSB7XG4gICAgICAgIGlmICgkZHJvcGRvd24uaGFzQ2xhc3MoJ29wZW4nKSkge1xuICAgICAgICAgICRkcm9wZG93bi50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9XG4gICAgICAvLyBUYWJcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PSA5KSB7XG4gICAgICAgIGlmICgkZHJvcGRvd24uaGFzQ2xhc3MoJ29wZW4nKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gRGV0ZWN0IENTUyBwb2ludGVyLWV2ZW50cyBzdXBwb3J0LCBmb3IgSUUgPD0gMTAuIEZyb20gTW9kZXJuaXpyLlxuICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKS5zdHlsZTtcbiAgICBzdHlsZS5jc3NUZXh0ID0gJ3BvaW50ZXItZXZlbnRzOmF1dG8nO1xuICAgIGlmIChzdHlsZS5wb2ludGVyRXZlbnRzICE9PSAnYXV0bycpIHtcbiAgICAgICQoJ2h0bWwnKS5hZGRDbGFzcygnbm8tY3NzcG9pbnRlcmV2ZW50cycpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuXG4gIH07XG5cbn0oalF1ZXJ5KSk7XG4oZnVuY3Rpb24oJCl7XG5cbiAgJC5mbi50d2VudHl0d2VudHkgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgdmFyIG9wdGlvbnMgPSAkLmV4dGVuZCh7XG4gICAgICBkZWZhdWx0X29mZnNldF9wY3Q6IDAuNSxcbiAgICAgIG9yaWVudGF0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICBiZWZvcmVfbGFiZWw6ICdCZWZvcmUnLFxuICAgICAgYWZ0ZXJfbGFiZWw6ICdBZnRlcicsXG4gICAgICBub19vdmVybGF5OiBmYWxzZSxcbiAgICAgIG1vdmVfc2xpZGVyX29uX2hvdmVyOiBmYWxzZSxcbiAgICAgIG1vdmVfd2l0aF9oYW5kbGVfb25seTogdHJ1ZSxcbiAgICAgIGNsaWNrX3RvX21vdmU6IGZhbHNlXG4gICAgfSwgb3B0aW9ucyk7XG5cbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuXG4gICAgICB2YXIgc2xpZGVyUGN0ID0gb3B0aW9ucy5kZWZhdWx0X29mZnNldF9wY3Q7XG4gICAgICB2YXIgY29udGFpbmVyID0gJCh0aGlzKTtcbiAgICAgIHZhciBzbGlkZXJPcmllbnRhdGlvbiA9IG9wdGlvbnMub3JpZW50YXRpb247XG4gICAgICB2YXIgYmVmb3JlRGlyZWN0aW9uID0gKHNsaWRlck9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSA/ICdkb3duJyA6ICdsZWZ0JztcbiAgICAgIHZhciBhZnRlckRpcmVjdGlvbiA9IChzbGlkZXJPcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykgPyAndXAnIDogJ3JpZ2h0JztcblxuXG4gICAgICBjb250YWluZXIud3JhcChcIjxkaXYgY2xhc3M9J3R3ZW50eXR3ZW50eS13cmFwcGVyIHR3ZW50eXR3ZW50eS1cIiArIHNsaWRlck9yaWVudGF0aW9uICsgXCInPjwvZGl2PlwiKTtcbiAgICAgIGlmKCFvcHRpb25zLm5vX292ZXJsYXkpIHtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChcIjxkaXYgY2xhc3M9J3R3ZW50eXR3ZW50eS1vdmVybGF5Jz48L2Rpdj5cIik7XG4gICAgICAgIHZhciBvdmVybGF5ID0gY29udGFpbmVyLmZpbmQoXCIudHdlbnR5dHdlbnR5LW92ZXJsYXlcIik7XG4gICAgICAgIG92ZXJsYXkuYXBwZW5kKFwiPGRpdiBjbGFzcz0ndHdlbnR5dHdlbnR5LWJlZm9yZS1sYWJlbCcgZGF0YS1jb250ZW50PSdcIitvcHRpb25zLmJlZm9yZV9sYWJlbCtcIic+PC9kaXY+XCIpO1xuICAgICAgICBvdmVybGF5LmFwcGVuZChcIjxkaXYgY2xhc3M9J3R3ZW50eXR3ZW50eS1hZnRlci1sYWJlbCcgZGF0YS1jb250ZW50PSdcIitvcHRpb25zLmFmdGVyX2xhYmVsK1wiJz48L2Rpdj5cIik7XG4gICAgICB9XG4gICAgICB2YXIgYmVmb3JlSW1nID0gY29udGFpbmVyLmZpbmQoXCJpbWc6Zmlyc3RcIik7XG4gICAgICB2YXIgYWZ0ZXJJbWcgPSBjb250YWluZXIuZmluZChcImltZzpsYXN0XCIpO1xuICAgICAgY29udGFpbmVyLmFwcGVuZChcIjxkaXYgY2xhc3M9J3R3ZW50eXR3ZW50eS1oYW5kbGUnPjwvZGl2PlwiKTtcbiAgICAgIHZhciBzbGlkZXIgPSBjb250YWluZXIuZmluZChcIi50d2VudHl0d2VudHktaGFuZGxlXCIpO1xuICAgICAgc2xpZGVyLmFwcGVuZChcIjxzcGFuIGNsYXNzPSd0d2VudHl0d2VudHktXCIgKyBiZWZvcmVEaXJlY3Rpb24gKyBcIi1hcnJvdyc+PC9zcGFuPlwiKTtcbiAgICAgIHNsaWRlci5hcHBlbmQoXCI8c3BhbiBjbGFzcz0ndHdlbnR5dHdlbnR5LVwiICsgYWZ0ZXJEaXJlY3Rpb24gKyBcIi1hcnJvdyc+PC9zcGFuPlwiKTtcbiAgICAgIGNvbnRhaW5lci5hZGRDbGFzcyhcInR3ZW50eXR3ZW50eS1jb250YWluZXJcIik7XG4gICAgICBiZWZvcmVJbWcuYWRkQ2xhc3MoXCJ0d2VudHl0d2VudHktYmVmb3JlXCIpO1xuICAgICAgYWZ0ZXJJbWcuYWRkQ2xhc3MoXCJ0d2VudHl0d2VudHktYWZ0ZXJcIik7XG5cbiAgICAgIHZhciBjYWxjT2Zmc2V0ID0gZnVuY3Rpb24oZGltZW5zaW9uUGN0KSB7XG4gICAgICAgIHZhciB3ID0gYmVmb3JlSW1nLndpZHRoKCk7XG4gICAgICAgIHZhciBoID0gYmVmb3JlSW1nLmhlaWdodCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHc6IHcrXCJweFwiLFxuICAgICAgICAgIGg6IGgrXCJweFwiLFxuICAgICAgICAgIGN3OiAoZGltZW5zaW9uUGN0KncpK1wicHhcIixcbiAgICAgICAgICBjaDogKGRpbWVuc2lvblBjdCpoKStcInB4XCJcbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBhZGp1c3RDb250YWluZXIgPSBmdW5jdGlvbihvZmZzZXQpIHtcbiAgICAgIFx0aWYgKHNsaWRlck9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgYmVmb3JlSW1nLmNzcyhcImNsaXBcIiwgXCJyZWN0KDAsXCIrb2Zmc2V0LncrXCIsXCIrb2Zmc2V0LmNoK1wiLDApXCIpO1xuICAgICAgICAgIGFmdGVySW1nLmNzcyhcImNsaXBcIiwgXCJyZWN0KFwiK29mZnNldC5jaCtcIixcIitvZmZzZXQudytcIixcIitvZmZzZXQuaCtcIiwwKVwiKTtcbiAgICAgIFx0fVxuICAgICAgXHRlbHNlIHtcbiAgICAgICAgICBiZWZvcmVJbWcuY3NzKFwiY2xpcFwiLCBcInJlY3QoMCxcIitvZmZzZXQuY3crXCIsXCIrb2Zmc2V0LmgrXCIsMClcIik7XG4gICAgICAgICAgYWZ0ZXJJbWcuY3NzKFwiY2xpcFwiLCBcInJlY3QoMCxcIitvZmZzZXQudytcIixcIitvZmZzZXQuaCtcIixcIitvZmZzZXQuY3crXCIpXCIpO1xuICAgIFx0fVxuICAgICAgICBjb250YWluZXIuY3NzKFwiaGVpZ2h0XCIsIG9mZnNldC5oKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBhZGp1c3RTbGlkZXIgPSBmdW5jdGlvbihwY3QpIHtcbiAgICAgICAgdmFyIG9mZnNldCA9IGNhbGNPZmZzZXQocGN0KTtcbiAgICAgICAgc2xpZGVyLmNzcygoc2xpZGVyT3JpZW50YXRpb249PT1cInZlcnRpY2FsXCIpID8gXCJ0b3BcIiA6IFwibGVmdFwiLCAoc2xpZGVyT3JpZW50YXRpb249PT1cInZlcnRpY2FsXCIpID8gb2Zmc2V0LmNoIDogb2Zmc2V0LmN3KTtcbiAgICAgICAgYWRqdXN0Q29udGFpbmVyKG9mZnNldCk7XG4gICAgICB9O1xuXG4gICAgICAvLyBSZXR1cm4gdGhlIG51bWJlciBzcGVjaWZpZWQgb3IgdGhlIG1pbi9tYXggbnVtYmVyIGlmIGl0IG91dHNpZGUgdGhlIHJhbmdlIGdpdmVuLlxuICAgICAgdmFyIG1pbk1heE51bWJlciA9IGZ1bmN0aW9uKG51bSwgbWluLCBtYXgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCBudW0pKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgc2xpZGVyIHBlcmNlbnRhZ2UgYmFzZWQgb24gdGhlIHBvc2l0aW9uLlxuICAgICAgdmFyIGdldFNsaWRlclBlcmNlbnRhZ2UgPSBmdW5jdGlvbihwb3NpdGlvblgsIHBvc2l0aW9uWSkge1xuICAgICAgICB2YXIgc2xpZGVyUGVyY2VudGFnZSA9IChzbGlkZXJPcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykgP1xuICAgICAgICAgIChwb3NpdGlvblktb2Zmc2V0WSkvaW1nSGVpZ2h0IDpcbiAgICAgICAgICAocG9zaXRpb25YLW9mZnNldFgpL2ltZ1dpZHRoO1xuXG4gICAgICAgIHJldHVybiBtaW5NYXhOdW1iZXIoc2xpZGVyUGVyY2VudGFnZSwgMCwgMSk7XG4gICAgICB9O1xuXG5cbiAgICAgICQod2luZG93KS5vbihcInJlc2l6ZS50d2VudHl0d2VudHlcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBhZGp1c3RTbGlkZXIoc2xpZGVyUGN0KTtcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgb2Zmc2V0WCA9IDA7XG4gICAgICB2YXIgb2Zmc2V0WSA9IDA7XG4gICAgICB2YXIgaW1nV2lkdGggPSAwO1xuICAgICAgdmFyIGltZ0hlaWdodCA9IDA7XG4gICAgICB2YXIgb25Nb3ZlU3RhcnQgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmICgoKGUuZGlzdFggPiBlLmRpc3RZICYmIGUuZGlzdFggPCAtZS5kaXN0WSkgfHwgKGUuZGlzdFggPCBlLmRpc3RZICYmIGUuZGlzdFggPiAtZS5kaXN0WSkpICYmIHNsaWRlck9yaWVudGF0aW9uICE9PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCgoZS5kaXN0WCA8IGUuZGlzdFkgJiYgZS5kaXN0WCA8IC1lLmRpc3RZKSB8fCAoZS5kaXN0WCA+IGUuZGlzdFkgJiYgZS5kaXN0WCA+IC1lLmRpc3RZKSkgJiYgc2xpZGVyT3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGFpbmVyLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICBvZmZzZXRYID0gY29udGFpbmVyLm9mZnNldCgpLmxlZnQ7XG4gICAgICAgIG9mZnNldFkgPSBjb250YWluZXIub2Zmc2V0KCkudG9wO1xuICAgICAgICBpbWdXaWR0aCA9IGJlZm9yZUltZy53aWR0aCgpO1xuICAgICAgICBpbWdIZWlnaHQgPSBiZWZvcmVJbWcuaGVpZ2h0KCk7XG4gICAgICB9O1xuICAgICAgdmFyIG9uTW92ZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKGNvbnRhaW5lci5oYXNDbGFzcyhcImFjdGl2ZVwiKSkge1xuICAgICAgICAgIHNsaWRlclBjdCA9IGdldFNsaWRlclBlcmNlbnRhZ2UoZS5wYWdlWCwgZS5wYWdlWSk7XG4gICAgICAgICAgYWRqdXN0U2xpZGVyKHNsaWRlclBjdCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB2YXIgb25Nb3ZlRW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgfTtcblxuICAgICAgdmFyIG1vdmVUYXJnZXQgPSBvcHRpb25zLm1vdmVfd2l0aF9oYW5kbGVfb25seSA/IHNsaWRlciA6IGNvbnRhaW5lcjtcbiAgICAgIG1vdmVUYXJnZXQub24oXCJtb3Zlc3RhcnRcIixvbk1vdmVTdGFydCk7XG4gICAgICBtb3ZlVGFyZ2V0Lm9uKFwibW92ZVwiLG9uTW92ZSk7XG4gICAgICBtb3ZlVGFyZ2V0Lm9uKFwibW92ZWVuZFwiLG9uTW92ZUVuZCk7XG5cbiAgICAgIGlmIChvcHRpb25zLm1vdmVfc2xpZGVyX29uX2hvdmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci5vbihcIm1vdXNlZW50ZXJcIiwgb25Nb3ZlU3RhcnQpO1xuICAgICAgICBjb250YWluZXIub24oXCJtb3VzZW1vdmVcIiwgb25Nb3ZlKTtcbiAgICAgICAgY29udGFpbmVyLm9uKFwibW91c2VsZWF2ZVwiLCBvbk1vdmVFbmQpO1xuICAgICAgfVxuXG4gICAgICBzbGlkZXIub24oXCJ0b3VjaG1vdmVcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9KTtcblxuICAgICAgY29udGFpbmVyLmZpbmQoXCJpbWdcIikub24oXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAob3B0aW9ucy5jbGlja190b19tb3ZlKSB7XG4gICAgICAgIGNvbnRhaW5lci5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgb2Zmc2V0WCA9IGNvbnRhaW5lci5vZmZzZXQoKS5sZWZ0O1xuICAgICAgICAgIG9mZnNldFkgPSBjb250YWluZXIub2Zmc2V0KCkudG9wO1xuICAgICAgICAgIGltZ1dpZHRoID0gYmVmb3JlSW1nLndpZHRoKCk7XG4gICAgICAgICAgaW1nSGVpZ2h0ID0gYmVmb3JlSW1nLmhlaWdodCgpO1xuXG4gICAgICAgICAgc2xpZGVyUGN0ID0gZ2V0U2xpZGVyUGVyY2VudGFnZShlLnBhZ2VYLCBlLnBhZ2VZKTtcbiAgICAgICAgICBhZGp1c3RTbGlkZXIoc2xpZGVyUGN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgICQod2luZG93KS50cmlnZ2VyKFwicmVzaXplLnR3ZW50eXR3ZW50eVwiKTtcbiAgICB9KTtcbiAgfTtcblxufSkoalF1ZXJ5KTtcblxuLyohIGpRdWVyeSBWYWxpZGF0aW9uIFBsdWdpbiAtIHYxLjE5LjEgLSA2LzE1LzIwMTlcbiAqIGh0dHBzOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTkgSsO2cm4gWmFlZmZlcmVyOyBMaWNlbnNlZCBNSVQgKi9cbiFmdW5jdGlvbihhKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImpxdWVyeVwiXSxhKTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1hKHJlcXVpcmUoXCJqcXVlcnlcIikpOmEoalF1ZXJ5KX0oZnVuY3Rpb24oYSl7YS5leHRlbmQoYS5mbix7dmFsaWRhdGU6ZnVuY3Rpb24oYil7aWYoIXRoaXMubGVuZ3RoKXJldHVybiB2b2lkKGImJmIuZGVidWcmJndpbmRvdy5jb25zb2xlJiZjb25zb2xlLndhcm4oXCJOb3RoaW5nIHNlbGVjdGVkLCBjYW4ndCB2YWxpZGF0ZSwgcmV0dXJuaW5nIG5vdGhpbmcuXCIpKTt2YXIgYz1hLmRhdGEodGhpc1swXSxcInZhbGlkYXRvclwiKTtyZXR1cm4gYz9jOih0aGlzLmF0dHIoXCJub3ZhbGlkYXRlXCIsXCJub3ZhbGlkYXRlXCIpLGM9bmV3IGEudmFsaWRhdG9yKGIsdGhpc1swXSksYS5kYXRhKHRoaXNbMF0sXCJ2YWxpZGF0b3JcIixjKSxjLnNldHRpbmdzLm9uc3VibWl0JiYodGhpcy5vbihcImNsaWNrLnZhbGlkYXRlXCIsXCI6c3VibWl0XCIsZnVuY3Rpb24oYil7Yy5zdWJtaXRCdXR0b249Yi5jdXJyZW50VGFyZ2V0LGEodGhpcykuaGFzQ2xhc3MoXCJjYW5jZWxcIikmJihjLmNhbmNlbFN1Ym1pdD0hMCksdm9pZCAwIT09YSh0aGlzKS5hdHRyKFwiZm9ybW5vdmFsaWRhdGVcIikmJihjLmNhbmNlbFN1Ym1pdD0hMCl9KSx0aGlzLm9uKFwic3VibWl0LnZhbGlkYXRlXCIsZnVuY3Rpb24oYil7ZnVuY3Rpb24gZCgpe3ZhciBkLGU7cmV0dXJuIGMuc3VibWl0QnV0dG9uJiYoYy5zZXR0aW5ncy5zdWJtaXRIYW5kbGVyfHxjLmZvcm1TdWJtaXR0ZWQpJiYoZD1hKFwiPGlucHV0IHR5cGU9J2hpZGRlbicvPlwiKS5hdHRyKFwibmFtZVwiLGMuc3VibWl0QnV0dG9uLm5hbWUpLnZhbChhKGMuc3VibWl0QnV0dG9uKS52YWwoKSkuYXBwZW5kVG8oYy5jdXJyZW50Rm9ybSkpLCEoYy5zZXR0aW5ncy5zdWJtaXRIYW5kbGVyJiYhYy5zZXR0aW5ncy5kZWJ1Zyl8fChlPWMuc2V0dGluZ3Muc3VibWl0SGFuZGxlci5jYWxsKGMsYy5jdXJyZW50Rm9ybSxiKSxkJiZkLnJlbW92ZSgpLHZvaWQgMCE9PWUmJmUpfXJldHVybiBjLnNldHRpbmdzLmRlYnVnJiZiLnByZXZlbnREZWZhdWx0KCksYy5jYW5jZWxTdWJtaXQ/KGMuY2FuY2VsU3VibWl0PSExLGQoKSk6Yy5mb3JtKCk/Yy5wZW5kaW5nUmVxdWVzdD8oYy5mb3JtU3VibWl0dGVkPSEwLCExKTpkKCk6KGMuZm9jdXNJbnZhbGlkKCksITEpfSkpLGMpfSx2YWxpZDpmdW5jdGlvbigpe3ZhciBiLGMsZDtyZXR1cm4gYSh0aGlzWzBdKS5pcyhcImZvcm1cIik/Yj10aGlzLnZhbGlkYXRlKCkuZm9ybSgpOihkPVtdLGI9ITAsYz1hKHRoaXNbMF0uZm9ybSkudmFsaWRhdGUoKSx0aGlzLmVhY2goZnVuY3Rpb24oKXtiPWMuZWxlbWVudCh0aGlzKSYmYixifHwoZD1kLmNvbmNhdChjLmVycm9yTGlzdCkpfSksYy5lcnJvckxpc3Q9ZCksYn0scnVsZXM6ZnVuY3Rpb24oYixjKXt2YXIgZCxlLGYsZyxoLGksaj10aGlzWzBdLGs9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHRoaXMuYXR0cihcImNvbnRlbnRlZGl0YWJsZVwiKSYmXCJmYWxzZVwiIT09dGhpcy5hdHRyKFwiY29udGVudGVkaXRhYmxlXCIpO2lmKG51bGwhPWomJighai5mb3JtJiZrJiYoai5mb3JtPXRoaXMuY2xvc2VzdChcImZvcm1cIilbMF0sai5uYW1lPXRoaXMuYXR0cihcIm5hbWVcIikpLG51bGwhPWouZm9ybSkpe2lmKGIpc3dpdGNoKGQ9YS5kYXRhKGouZm9ybSxcInZhbGlkYXRvclwiKS5zZXR0aW5ncyxlPWQucnVsZXMsZj1hLnZhbGlkYXRvci5zdGF0aWNSdWxlcyhqKSxiKXtjYXNlXCJhZGRcIjphLmV4dGVuZChmLGEudmFsaWRhdG9yLm5vcm1hbGl6ZVJ1bGUoYykpLGRlbGV0ZSBmLm1lc3NhZ2VzLGVbai5uYW1lXT1mLGMubWVzc2FnZXMmJihkLm1lc3NhZ2VzW2oubmFtZV09YS5leHRlbmQoZC5tZXNzYWdlc1tqLm5hbWVdLGMubWVzc2FnZXMpKTticmVhaztjYXNlXCJyZW1vdmVcIjpyZXR1cm4gYz8oaT17fSxhLmVhY2goYy5zcGxpdCgvXFxzLyksZnVuY3Rpb24oYSxiKXtpW2JdPWZbYl0sZGVsZXRlIGZbYl19KSxpKTooZGVsZXRlIGVbai5uYW1lXSxmKX1yZXR1cm4gZz1hLnZhbGlkYXRvci5ub3JtYWxpemVSdWxlcyhhLmV4dGVuZCh7fSxhLnZhbGlkYXRvci5jbGFzc1J1bGVzKGopLGEudmFsaWRhdG9yLmF0dHJpYnV0ZVJ1bGVzKGopLGEudmFsaWRhdG9yLmRhdGFSdWxlcyhqKSxhLnZhbGlkYXRvci5zdGF0aWNSdWxlcyhqKSksaiksZy5yZXF1aXJlZCYmKGg9Zy5yZXF1aXJlZCxkZWxldGUgZy5yZXF1aXJlZCxnPWEuZXh0ZW5kKHtyZXF1aXJlZDpofSxnKSksZy5yZW1vdGUmJihoPWcucmVtb3RlLGRlbGV0ZSBnLnJlbW90ZSxnPWEuZXh0ZW5kKGcse3JlbW90ZTpofSkpLGd9fX0pLGEuZXh0ZW5kKGEuZXhwci5wc2V1ZG9zfHxhLmV4cHJbXCI6XCJdLHtibGFuazpmdW5jdGlvbihiKXtyZXR1cm4hYS50cmltKFwiXCIrYShiKS52YWwoKSl9LGZpbGxlZDpmdW5jdGlvbihiKXt2YXIgYz1hKGIpLnZhbCgpO3JldHVybiBudWxsIT09YyYmISFhLnRyaW0oXCJcIitjKX0sdW5jaGVja2VkOmZ1bmN0aW9uKGIpe3JldHVybiFhKGIpLnByb3AoXCJjaGVja2VkXCIpfX0pLGEudmFsaWRhdG9yPWZ1bmN0aW9uKGIsYyl7dGhpcy5zZXR0aW5ncz1hLmV4dGVuZCghMCx7fSxhLnZhbGlkYXRvci5kZWZhdWx0cyxiKSx0aGlzLmN1cnJlbnRGb3JtPWMsdGhpcy5pbml0KCl9LGEudmFsaWRhdG9yLmZvcm1hdD1mdW5jdGlvbihiLGMpe3JldHVybiAxPT09YXJndW1lbnRzLmxlbmd0aD9mdW5jdGlvbigpe3ZhciBjPWEubWFrZUFycmF5KGFyZ3VtZW50cyk7cmV0dXJuIGMudW5zaGlmdChiKSxhLnZhbGlkYXRvci5mb3JtYXQuYXBwbHkodGhpcyxjKX06dm9pZCAwPT09Yz9iOihhcmd1bWVudHMubGVuZ3RoPjImJmMuY29uc3RydWN0b3IhPT1BcnJheSYmKGM9YS5tYWtlQXJyYXkoYXJndW1lbnRzKS5zbGljZSgxKSksYy5jb25zdHJ1Y3RvciE9PUFycmF5JiYoYz1bY10pLGEuZWFjaChjLGZ1bmN0aW9uKGEsYyl7Yj1iLnJlcGxhY2UobmV3IFJlZ0V4cChcIlxcXFx7XCIrYStcIlxcXFx9XCIsXCJnXCIpLGZ1bmN0aW9uKCl7cmV0dXJuIGN9KX0pLGIpfSxhLmV4dGVuZChhLnZhbGlkYXRvcix7ZGVmYXVsdHM6e21lc3NhZ2VzOnt9LGdyb3Vwczp7fSxydWxlczp7fSxlcnJvckNsYXNzOlwiZXJyb3JcIixwZW5kaW5nQ2xhc3M6XCJwZW5kaW5nXCIsdmFsaWRDbGFzczpcInZhbGlkXCIsZXJyb3JFbGVtZW50OlwibGFiZWxcIixmb2N1c0NsZWFudXA6ITEsZm9jdXNJbnZhbGlkOiEwLGVycm9yQ29udGFpbmVyOmEoW10pLGVycm9yTGFiZWxDb250YWluZXI6YShbXSksb25zdWJtaXQ6ITAsaWdub3JlOlwiOmhpZGRlblwiLGlnbm9yZVRpdGxlOiExLG9uZm9jdXNpbjpmdW5jdGlvbihhKXt0aGlzLmxhc3RBY3RpdmU9YSx0aGlzLnNldHRpbmdzLmZvY3VzQ2xlYW51cCYmKHRoaXMuc2V0dGluZ3MudW5oaWdobGlnaHQmJnRoaXMuc2V0dGluZ3MudW5oaWdobGlnaHQuY2FsbCh0aGlzLGEsdGhpcy5zZXR0aW5ncy5lcnJvckNsYXNzLHRoaXMuc2V0dGluZ3MudmFsaWRDbGFzcyksdGhpcy5oaWRlVGhlc2UodGhpcy5lcnJvcnNGb3IoYSkpKX0sb25mb2N1c291dDpmdW5jdGlvbihhKXt0aGlzLmNoZWNrYWJsZShhKXx8IShhLm5hbWUgaW4gdGhpcy5zdWJtaXR0ZWQpJiZ0aGlzLm9wdGlvbmFsKGEpfHx0aGlzLmVsZW1lbnQoYSl9LG9ua2V5dXA6ZnVuY3Rpb24oYixjKXt2YXIgZD1bMTYsMTcsMTgsMjAsMzUsMzYsMzcsMzgsMzksNDAsNDUsMTQ0LDIyNV07OT09PWMud2hpY2gmJlwiXCI9PT10aGlzLmVsZW1lbnRWYWx1ZShiKXx8YS5pbkFycmF5KGMua2V5Q29kZSxkKSE9PS0xfHwoYi5uYW1lIGluIHRoaXMuc3VibWl0dGVkfHxiLm5hbWUgaW4gdGhpcy5pbnZhbGlkKSYmdGhpcy5lbGVtZW50KGIpfSxvbmNsaWNrOmZ1bmN0aW9uKGEpe2EubmFtZSBpbiB0aGlzLnN1Ym1pdHRlZD90aGlzLmVsZW1lbnQoYSk6YS5wYXJlbnROb2RlLm5hbWUgaW4gdGhpcy5zdWJtaXR0ZWQmJnRoaXMuZWxlbWVudChhLnBhcmVudE5vZGUpfSxoaWdobGlnaHQ6ZnVuY3Rpb24oYixjLGQpe1wicmFkaW9cIj09PWIudHlwZT90aGlzLmZpbmRCeU5hbWUoYi5uYW1lKS5hZGRDbGFzcyhjKS5yZW1vdmVDbGFzcyhkKTphKGIpLmFkZENsYXNzKGMpLnJlbW92ZUNsYXNzKGQpfSx1bmhpZ2hsaWdodDpmdW5jdGlvbihiLGMsZCl7XCJyYWRpb1wiPT09Yi50eXBlP3RoaXMuZmluZEJ5TmFtZShiLm5hbWUpLnJlbW92ZUNsYXNzKGMpLmFkZENsYXNzKGQpOmEoYikucmVtb3ZlQ2xhc3MoYykuYWRkQ2xhc3MoZCl9fSxzZXREZWZhdWx0czpmdW5jdGlvbihiKXthLmV4dGVuZChhLnZhbGlkYXRvci5kZWZhdWx0cyxiKX0sbWVzc2FnZXM6e3JlcXVpcmVkOlwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZC5cIixyZW1vdGU6XCJQbGVhc2UgZml4IHRoaXMgZmllbGQuXCIsZW1haWw6XCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzLlwiLHVybDpcIlBsZWFzZSBlbnRlciBhIHZhbGlkIFVSTC5cIixkYXRlOlwiUGxlYXNlIGVudGVyIGEgdmFsaWQgZGF0ZS5cIixkYXRlSVNPOlwiUGxlYXNlIGVudGVyIGEgdmFsaWQgZGF0ZSAoSVNPKS5cIixudW1iZXI6XCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBudW1iZXIuXCIsZGlnaXRzOlwiUGxlYXNlIGVudGVyIG9ubHkgZGlnaXRzLlwiLGVxdWFsVG86XCJQbGVhc2UgZW50ZXIgdGhlIHNhbWUgdmFsdWUgYWdhaW4uXCIsbWF4bGVuZ3RoOmEudmFsaWRhdG9yLmZvcm1hdChcIlBsZWFzZSBlbnRlciBubyBtb3JlIHRoYW4gezB9IGNoYXJhY3RlcnMuXCIpLG1pbmxlbmd0aDphLnZhbGlkYXRvci5mb3JtYXQoXCJQbGVhc2UgZW50ZXIgYXQgbGVhc3QgezB9IGNoYXJhY3RlcnMuXCIpLHJhbmdlbGVuZ3RoOmEudmFsaWRhdG9yLmZvcm1hdChcIlBsZWFzZSBlbnRlciBhIHZhbHVlIGJldHdlZW4gezB9IGFuZCB7MX0gY2hhcmFjdGVycyBsb25nLlwiKSxyYW5nZTphLnZhbGlkYXRvci5mb3JtYXQoXCJQbGVhc2UgZW50ZXIgYSB2YWx1ZSBiZXR3ZWVuIHswfSBhbmQgezF9LlwiKSxtYXg6YS52YWxpZGF0b3IuZm9ybWF0KFwiUGxlYXNlIGVudGVyIGEgdmFsdWUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIHswfS5cIiksbWluOmEudmFsaWRhdG9yLmZvcm1hdChcIlBsZWFzZSBlbnRlciBhIHZhbHVlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB7MH0uXCIpLHN0ZXA6YS52YWxpZGF0b3IuZm9ybWF0KFwiUGxlYXNlIGVudGVyIGEgbXVsdGlwbGUgb2YgezB9LlwiKX0sYXV0b0NyZWF0ZVJhbmdlczohMSxwcm90b3R5cGU6e2luaXQ6ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIpe3ZhciBjPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBhKHRoaXMpLmF0dHIoXCJjb250ZW50ZWRpdGFibGVcIikmJlwiZmFsc2VcIiE9PWEodGhpcykuYXR0cihcImNvbnRlbnRlZGl0YWJsZVwiKTtpZighdGhpcy5mb3JtJiZjJiYodGhpcy5mb3JtPWEodGhpcykuY2xvc2VzdChcImZvcm1cIilbMF0sdGhpcy5uYW1lPWEodGhpcykuYXR0cihcIm5hbWVcIikpLGQ9PT10aGlzLmZvcm0pe3ZhciBlPWEuZGF0YSh0aGlzLmZvcm0sXCJ2YWxpZGF0b3JcIiksZj1cIm9uXCIrYi50eXBlLnJlcGxhY2UoL152YWxpZGF0ZS8sXCJcIiksZz1lLnNldHRpbmdzO2dbZl0mJiFhKHRoaXMpLmlzKGcuaWdub3JlKSYmZ1tmXS5jYWxsKGUsdGhpcyxiKX19dGhpcy5sYWJlbENvbnRhaW5lcj1hKHRoaXMuc2V0dGluZ3MuZXJyb3JMYWJlbENvbnRhaW5lciksdGhpcy5lcnJvckNvbnRleHQ9dGhpcy5sYWJlbENvbnRhaW5lci5sZW5ndGgmJnRoaXMubGFiZWxDb250YWluZXJ8fGEodGhpcy5jdXJyZW50Rm9ybSksdGhpcy5jb250YWluZXJzPWEodGhpcy5zZXR0aW5ncy5lcnJvckNvbnRhaW5lcikuYWRkKHRoaXMuc2V0dGluZ3MuZXJyb3JMYWJlbENvbnRhaW5lciksdGhpcy5zdWJtaXR0ZWQ9e30sdGhpcy52YWx1ZUNhY2hlPXt9LHRoaXMucGVuZGluZ1JlcXVlc3Q9MCx0aGlzLnBlbmRpbmc9e30sdGhpcy5pbnZhbGlkPXt9LHRoaXMucmVzZXQoKTt2YXIgYyxkPXRoaXMuY3VycmVudEZvcm0sZT10aGlzLmdyb3Vwcz17fTthLmVhY2godGhpcy5zZXR0aW5ncy5ncm91cHMsZnVuY3Rpb24oYixjKXtcInN0cmluZ1wiPT10eXBlb2YgYyYmKGM9Yy5zcGxpdCgvXFxzLykpLGEuZWFjaChjLGZ1bmN0aW9uKGEsYyl7ZVtjXT1ifSl9KSxjPXRoaXMuc2V0dGluZ3MucnVsZXMsYS5lYWNoKGMsZnVuY3Rpb24oYixkKXtjW2JdPWEudmFsaWRhdG9yLm5vcm1hbGl6ZVJ1bGUoZCl9KSxhKHRoaXMuY3VycmVudEZvcm0pLm9uKFwiZm9jdXNpbi52YWxpZGF0ZSBmb2N1c291dC52YWxpZGF0ZSBrZXl1cC52YWxpZGF0ZVwiLFwiOnRleHQsIFt0eXBlPSdwYXNzd29yZCddLCBbdHlwZT0nZmlsZSddLCBzZWxlY3QsIHRleHRhcmVhLCBbdHlwZT0nbnVtYmVyJ10sIFt0eXBlPSdzZWFyY2gnXSwgW3R5cGU9J3RlbCddLCBbdHlwZT0ndXJsJ10sIFt0eXBlPSdlbWFpbCddLCBbdHlwZT0nZGF0ZXRpbWUnXSwgW3R5cGU9J2RhdGUnXSwgW3R5cGU9J21vbnRoJ10sIFt0eXBlPSd3ZWVrJ10sIFt0eXBlPSd0aW1lJ10sIFt0eXBlPSdkYXRldGltZS1sb2NhbCddLCBbdHlwZT0ncmFuZ2UnXSwgW3R5cGU9J2NvbG9yJ10sIFt0eXBlPSdyYWRpbyddLCBbdHlwZT0nY2hlY2tib3gnXSwgW2NvbnRlbnRlZGl0YWJsZV0sIFt0eXBlPSdidXR0b24nXVwiLGIpLm9uKFwiY2xpY2sudmFsaWRhdGVcIixcInNlbGVjdCwgb3B0aW9uLCBbdHlwZT0ncmFkaW8nXSwgW3R5cGU9J2NoZWNrYm94J11cIixiKSx0aGlzLnNldHRpbmdzLmludmFsaWRIYW5kbGVyJiZhKHRoaXMuY3VycmVudEZvcm0pLm9uKFwiaW52YWxpZC1mb3JtLnZhbGlkYXRlXCIsdGhpcy5zZXR0aW5ncy5pbnZhbGlkSGFuZGxlcil9LGZvcm06ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jaGVja0Zvcm0oKSxhLmV4dGVuZCh0aGlzLnN1Ym1pdHRlZCx0aGlzLmVycm9yTWFwKSx0aGlzLmludmFsaWQ9YS5leHRlbmQoe30sdGhpcy5lcnJvck1hcCksdGhpcy52YWxpZCgpfHxhKHRoaXMuY3VycmVudEZvcm0pLnRyaWdnZXJIYW5kbGVyKFwiaW52YWxpZC1mb3JtXCIsW3RoaXNdKSx0aGlzLnNob3dFcnJvcnMoKSx0aGlzLnZhbGlkKCl9LGNoZWNrRm9ybTpmdW5jdGlvbigpe3RoaXMucHJlcGFyZUZvcm0oKTtmb3IodmFyIGE9MCxiPXRoaXMuY3VycmVudEVsZW1lbnRzPXRoaXMuZWxlbWVudHMoKTtiW2FdO2ErKyl0aGlzLmNoZWNrKGJbYV0pO3JldHVybiB0aGlzLnZhbGlkKCl9LGVsZW1lbnQ6ZnVuY3Rpb24oYil7dmFyIGMsZCxlPXRoaXMuY2xlYW4oYiksZj10aGlzLnZhbGlkYXRpb25UYXJnZXRGb3IoZSksZz10aGlzLGg9ITA7cmV0dXJuIHZvaWQgMD09PWY/ZGVsZXRlIHRoaXMuaW52YWxpZFtlLm5hbWVdOih0aGlzLnByZXBhcmVFbGVtZW50KGYpLHRoaXMuY3VycmVudEVsZW1lbnRzPWEoZiksZD10aGlzLmdyb3Vwc1tmLm5hbWVdLGQmJmEuZWFjaCh0aGlzLmdyb3VwcyxmdW5jdGlvbihhLGIpe2I9PT1kJiZhIT09Zi5uYW1lJiYoZT1nLnZhbGlkYXRpb25UYXJnZXRGb3IoZy5jbGVhbihnLmZpbmRCeU5hbWUoYSkpKSxlJiZlLm5hbWUgaW4gZy5pbnZhbGlkJiYoZy5jdXJyZW50RWxlbWVudHMucHVzaChlKSxoPWcuY2hlY2soZSkmJmgpKX0pLGM9dGhpcy5jaGVjayhmKSE9PSExLGg9aCYmYyxjP3RoaXMuaW52YWxpZFtmLm5hbWVdPSExOnRoaXMuaW52YWxpZFtmLm5hbWVdPSEwLHRoaXMubnVtYmVyT2ZJbnZhbGlkcygpfHwodGhpcy50b0hpZGU9dGhpcy50b0hpZGUuYWRkKHRoaXMuY29udGFpbmVycykpLHRoaXMuc2hvd0Vycm9ycygpLGEoYikuYXR0cihcImFyaWEtaW52YWxpZFwiLCFjKSksaH0sc2hvd0Vycm9yczpmdW5jdGlvbihiKXtpZihiKXt2YXIgYz10aGlzO2EuZXh0ZW5kKHRoaXMuZXJyb3JNYXAsYiksdGhpcy5lcnJvckxpc3Q9YS5tYXAodGhpcy5lcnJvck1hcCxmdW5jdGlvbihhLGIpe3JldHVybnttZXNzYWdlOmEsZWxlbWVudDpjLmZpbmRCeU5hbWUoYilbMF19fSksdGhpcy5zdWNjZXNzTGlzdD1hLmdyZXAodGhpcy5zdWNjZXNzTGlzdCxmdW5jdGlvbihhKXtyZXR1cm4hKGEubmFtZSBpbiBiKX0pfXRoaXMuc2V0dGluZ3Muc2hvd0Vycm9ycz90aGlzLnNldHRpbmdzLnNob3dFcnJvcnMuY2FsbCh0aGlzLHRoaXMuZXJyb3JNYXAsdGhpcy5lcnJvckxpc3QpOnRoaXMuZGVmYXVsdFNob3dFcnJvcnMoKX0scmVzZXRGb3JtOmZ1bmN0aW9uKCl7YS5mbi5yZXNldEZvcm0mJmEodGhpcy5jdXJyZW50Rm9ybSkucmVzZXRGb3JtKCksdGhpcy5pbnZhbGlkPXt9LHRoaXMuc3VibWl0dGVkPXt9LHRoaXMucHJlcGFyZUZvcm0oKSx0aGlzLmhpZGVFcnJvcnMoKTt2YXIgYj10aGlzLmVsZW1lbnRzKCkucmVtb3ZlRGF0YShcInByZXZpb3VzVmFsdWVcIikucmVtb3ZlQXR0cihcImFyaWEtaW52YWxpZFwiKTt0aGlzLnJlc2V0RWxlbWVudHMoYil9LHJlc2V0RWxlbWVudHM6ZnVuY3Rpb24oYSl7dmFyIGI7aWYodGhpcy5zZXR0aW5ncy51bmhpZ2hsaWdodClmb3IoYj0wO2FbYl07YisrKXRoaXMuc2V0dGluZ3MudW5oaWdobGlnaHQuY2FsbCh0aGlzLGFbYl0sdGhpcy5zZXR0aW5ncy5lcnJvckNsYXNzLFwiXCIpLHRoaXMuZmluZEJ5TmFtZShhW2JdLm5hbWUpLnJlbW92ZUNsYXNzKHRoaXMuc2V0dGluZ3MudmFsaWRDbGFzcyk7ZWxzZSBhLnJlbW92ZUNsYXNzKHRoaXMuc2V0dGluZ3MuZXJyb3JDbGFzcykucmVtb3ZlQ2xhc3ModGhpcy5zZXR0aW5ncy52YWxpZENsYXNzKX0sbnVtYmVyT2ZJbnZhbGlkczpmdW5jdGlvbigpe3JldHVybiB0aGlzLm9iamVjdExlbmd0aCh0aGlzLmludmFsaWQpfSxvYmplY3RMZW5ndGg6ZnVuY3Rpb24oYSl7dmFyIGIsYz0wO2ZvcihiIGluIGEpdm9pZCAwIT09YVtiXSYmbnVsbCE9PWFbYl0mJmFbYl0hPT0hMSYmYysrO3JldHVybiBjfSxoaWRlRXJyb3JzOmZ1bmN0aW9uKCl7dGhpcy5oaWRlVGhlc2UodGhpcy50b0hpZGUpfSxoaWRlVGhlc2U6ZnVuY3Rpb24oYSl7YS5ub3QodGhpcy5jb250YWluZXJzKS50ZXh0KFwiXCIpLHRoaXMuYWRkV3JhcHBlcihhKS5oaWRlKCl9LHZhbGlkOmZ1bmN0aW9uKCl7cmV0dXJuIDA9PT10aGlzLnNpemUoKX0sc2l6ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVycm9yTGlzdC5sZW5ndGh9LGZvY3VzSW52YWxpZDpmdW5jdGlvbigpe2lmKHRoaXMuc2V0dGluZ3MuZm9jdXNJbnZhbGlkKXRyeXthKHRoaXMuZmluZExhc3RBY3RpdmUoKXx8dGhpcy5lcnJvckxpc3QubGVuZ3RoJiZ0aGlzLmVycm9yTGlzdFswXS5lbGVtZW50fHxbXSkuZmlsdGVyKFwiOnZpc2libGVcIikudHJpZ2dlcihcImZvY3VzXCIpLnRyaWdnZXIoXCJmb2N1c2luXCIpfWNhdGNoKGIpe319LGZpbmRMYXN0QWN0aXZlOmZ1bmN0aW9uKCl7dmFyIGI9dGhpcy5sYXN0QWN0aXZlO3JldHVybiBiJiYxPT09YS5ncmVwKHRoaXMuZXJyb3JMaXN0LGZ1bmN0aW9uKGEpe3JldHVybiBhLmVsZW1lbnQubmFtZT09PWIubmFtZX0pLmxlbmd0aCYmYn0sZWxlbWVudHM6ZnVuY3Rpb24oKXt2YXIgYj10aGlzLGM9e307cmV0dXJuIGEodGhpcy5jdXJyZW50Rm9ybSkuZmluZChcImlucHV0LCBzZWxlY3QsIHRleHRhcmVhLCBbY29udGVudGVkaXRhYmxlXVwiKS5ub3QoXCI6c3VibWl0LCA6cmVzZXQsIDppbWFnZSwgOmRpc2FibGVkXCIpLm5vdCh0aGlzLnNldHRpbmdzLmlnbm9yZSkuZmlsdGVyKGZ1bmN0aW9uKCl7dmFyIGQ9dGhpcy5uYW1lfHxhKHRoaXMpLmF0dHIoXCJuYW1lXCIpLGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEodGhpcykuYXR0cihcImNvbnRlbnRlZGl0YWJsZVwiKSYmXCJmYWxzZVwiIT09YSh0aGlzKS5hdHRyKFwiY29udGVudGVkaXRhYmxlXCIpO3JldHVybiFkJiZiLnNldHRpbmdzLmRlYnVnJiZ3aW5kb3cuY29uc29sZSYmY29uc29sZS5lcnJvcihcIiVvIGhhcyBubyBuYW1lIGFzc2lnbmVkXCIsdGhpcyksZSYmKHRoaXMuZm9ybT1hKHRoaXMpLmNsb3Nlc3QoXCJmb3JtXCIpWzBdLHRoaXMubmFtZT1kKSx0aGlzLmZvcm09PT1iLmN1cnJlbnRGb3JtJiYoIShkIGluIGN8fCFiLm9iamVjdExlbmd0aChhKHRoaXMpLnJ1bGVzKCkpKSYmKGNbZF09ITAsITApKX0pfSxjbGVhbjpmdW5jdGlvbihiKXtyZXR1cm4gYShiKVswXX0sZXJyb3JzOmZ1bmN0aW9uKCl7dmFyIGI9dGhpcy5zZXR0aW5ncy5lcnJvckNsYXNzLnNwbGl0KFwiIFwiKS5qb2luKFwiLlwiKTtyZXR1cm4gYSh0aGlzLnNldHRpbmdzLmVycm9yRWxlbWVudCtcIi5cIitiLHRoaXMuZXJyb3JDb250ZXh0KX0scmVzZXRJbnRlcm5hbHM6ZnVuY3Rpb24oKXt0aGlzLnN1Y2Nlc3NMaXN0PVtdLHRoaXMuZXJyb3JMaXN0PVtdLHRoaXMuZXJyb3JNYXA9e30sdGhpcy50b1Nob3c9YShbXSksdGhpcy50b0hpZGU9YShbXSl9LHJlc2V0OmZ1bmN0aW9uKCl7dGhpcy5yZXNldEludGVybmFscygpLHRoaXMuY3VycmVudEVsZW1lbnRzPWEoW10pfSxwcmVwYXJlRm9ybTpmdW5jdGlvbigpe3RoaXMucmVzZXQoKSx0aGlzLnRvSGlkZT10aGlzLmVycm9ycygpLmFkZCh0aGlzLmNvbnRhaW5lcnMpfSxwcmVwYXJlRWxlbWVudDpmdW5jdGlvbihhKXt0aGlzLnJlc2V0KCksdGhpcy50b0hpZGU9dGhpcy5lcnJvcnNGb3IoYSl9LGVsZW1lbnRWYWx1ZTpmdW5jdGlvbihiKXt2YXIgYyxkLGU9YShiKSxmPWIudHlwZSxnPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLmF0dHIoXCJjb250ZW50ZWRpdGFibGVcIikmJlwiZmFsc2VcIiE9PWUuYXR0cihcImNvbnRlbnRlZGl0YWJsZVwiKTtyZXR1cm5cInJhZGlvXCI9PT1mfHxcImNoZWNrYm94XCI9PT1mP3RoaXMuZmluZEJ5TmFtZShiLm5hbWUpLmZpbHRlcihcIjpjaGVja2VkXCIpLnZhbCgpOlwibnVtYmVyXCI9PT1mJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgYi52YWxpZGl0eT9iLnZhbGlkaXR5LmJhZElucHV0P1wiTmFOXCI6ZS52YWwoKTooYz1nP2UudGV4dCgpOmUudmFsKCksXCJmaWxlXCI9PT1mP1wiQzpcXFxcZmFrZXBhdGhcXFxcXCI9PT1jLnN1YnN0cigwLDEyKT9jLnN1YnN0cigxMik6KGQ9Yy5sYXN0SW5kZXhPZihcIi9cIiksZD49MD9jLnN1YnN0cihkKzEpOihkPWMubGFzdEluZGV4T2YoXCJcXFxcXCIpLGQ+PTA/Yy5zdWJzdHIoZCsxKTpjKSk6XCJzdHJpbmdcIj09dHlwZW9mIGM/Yy5yZXBsYWNlKC9cXHIvZyxcIlwiKTpjKX0sY2hlY2s6ZnVuY3Rpb24oYil7Yj10aGlzLnZhbGlkYXRpb25UYXJnZXRGb3IodGhpcy5jbGVhbihiKSk7dmFyIGMsZCxlLGYsZz1hKGIpLnJ1bGVzKCksaD1hLm1hcChnLGZ1bmN0aW9uKGEsYil7cmV0dXJuIGJ9KS5sZW5ndGgsaT0hMSxqPXRoaXMuZWxlbWVudFZhbHVlKGIpO1wiZnVuY3Rpb25cIj09dHlwZW9mIGcubm9ybWFsaXplcj9mPWcubm9ybWFsaXplcjpcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLnNldHRpbmdzLm5vcm1hbGl6ZXImJihmPXRoaXMuc2V0dGluZ3Mubm9ybWFsaXplciksZiYmKGo9Zi5jYWxsKGIsaiksZGVsZXRlIGcubm9ybWFsaXplcik7Zm9yKGQgaW4gZyl7ZT17bWV0aG9kOmQscGFyYW1ldGVyczpnW2RdfTt0cnl7aWYoYz1hLnZhbGlkYXRvci5tZXRob2RzW2RdLmNhbGwodGhpcyxqLGIsZS5wYXJhbWV0ZXJzKSxcImRlcGVuZGVuY3ktbWlzbWF0Y2hcIj09PWMmJjE9PT1oKXtpPSEwO2NvbnRpbnVlfWlmKGk9ITEsXCJwZW5kaW5nXCI9PT1jKXJldHVybiB2b2lkKHRoaXMudG9IaWRlPXRoaXMudG9IaWRlLm5vdCh0aGlzLmVycm9yc0ZvcihiKSkpO2lmKCFjKXJldHVybiB0aGlzLmZvcm1hdEFuZEFkZChiLGUpLCExfWNhdGNoKGspe3Rocm93IHRoaXMuc2V0dGluZ3MuZGVidWcmJndpbmRvdy5jb25zb2xlJiZjb25zb2xlLmxvZyhcIkV4Y2VwdGlvbiBvY2N1cnJlZCB3aGVuIGNoZWNraW5nIGVsZW1lbnQgXCIrYi5pZCtcIiwgY2hlY2sgdGhlICdcIitlLm1ldGhvZCtcIicgbWV0aG9kLlwiLGspLGsgaW5zdGFuY2VvZiBUeXBlRXJyb3ImJihrLm1lc3NhZ2UrPVwiLiAgRXhjZXB0aW9uIG9jY3VycmVkIHdoZW4gY2hlY2tpbmcgZWxlbWVudCBcIitiLmlkK1wiLCBjaGVjayB0aGUgJ1wiK2UubWV0aG9kK1wiJyBtZXRob2QuXCIpLGt9fWlmKCFpKXJldHVybiB0aGlzLm9iamVjdExlbmd0aChnKSYmdGhpcy5zdWNjZXNzTGlzdC5wdXNoKGIpLCEwfSxjdXN0b21EYXRhTWVzc2FnZTpmdW5jdGlvbihiLGMpe3JldHVybiBhKGIpLmRhdGEoXCJtc2dcIitjLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Muc3Vic3RyaW5nKDEpLnRvTG93ZXJDYXNlKCkpfHxhKGIpLmRhdGEoXCJtc2dcIil9LGN1c3RvbU1lc3NhZ2U6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLnNldHRpbmdzLm1lc3NhZ2VzW2FdO3JldHVybiBjJiYoYy5jb25zdHJ1Y3Rvcj09PVN0cmluZz9jOmNbYl0pfSxmaW5kRGVmaW5lZDpmdW5jdGlvbigpe2Zvcih2YXIgYT0wO2E8YXJndW1lbnRzLmxlbmd0aDthKyspaWYodm9pZCAwIT09YXJndW1lbnRzW2FdKXJldHVybiBhcmd1bWVudHNbYV19LGRlZmF1bHRNZXNzYWdlOmZ1bmN0aW9uKGIsYyl7XCJzdHJpbmdcIj09dHlwZW9mIGMmJihjPXttZXRob2Q6Y30pO3ZhciBkPXRoaXMuZmluZERlZmluZWQodGhpcy5jdXN0b21NZXNzYWdlKGIubmFtZSxjLm1ldGhvZCksdGhpcy5jdXN0b21EYXRhTWVzc2FnZShiLGMubWV0aG9kKSwhdGhpcy5zZXR0aW5ncy5pZ25vcmVUaXRsZSYmYi50aXRsZXx8dm9pZCAwLGEudmFsaWRhdG9yLm1lc3NhZ2VzW2MubWV0aG9kXSxcIjxzdHJvbmc+V2FybmluZzogTm8gbWVzc2FnZSBkZWZpbmVkIGZvciBcIitiLm5hbWUrXCI8L3N0cm9uZz5cIiksZT0vXFwkP1xceyhcXGQrKVxcfS9nO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGQ/ZD1kLmNhbGwodGhpcyxjLnBhcmFtZXRlcnMsYik6ZS50ZXN0KGQpJiYoZD1hLnZhbGlkYXRvci5mb3JtYXQoZC5yZXBsYWNlKGUsXCJ7JDF9XCIpLGMucGFyYW1ldGVycykpLGR9LGZvcm1hdEFuZEFkZDpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuZGVmYXVsdE1lc3NhZ2UoYSxiKTt0aGlzLmVycm9yTGlzdC5wdXNoKHttZXNzYWdlOmMsZWxlbWVudDphLG1ldGhvZDpiLm1ldGhvZH0pLHRoaXMuZXJyb3JNYXBbYS5uYW1lXT1jLHRoaXMuc3VibWl0dGVkW2EubmFtZV09Y30sYWRkV3JhcHBlcjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5zZXR0aW5ncy53cmFwcGVyJiYoYT1hLmFkZChhLnBhcmVudCh0aGlzLnNldHRpbmdzLndyYXBwZXIpKSksYX0sZGVmYXVsdFNob3dFcnJvcnM6ZnVuY3Rpb24oKXt2YXIgYSxiLGM7Zm9yKGE9MDt0aGlzLmVycm9yTGlzdFthXTthKyspYz10aGlzLmVycm9yTGlzdFthXSx0aGlzLnNldHRpbmdzLmhpZ2hsaWdodCYmdGhpcy5zZXR0aW5ncy5oaWdobGlnaHQuY2FsbCh0aGlzLGMuZWxlbWVudCx0aGlzLnNldHRpbmdzLmVycm9yQ2xhc3MsdGhpcy5zZXR0aW5ncy52YWxpZENsYXNzKSx0aGlzLnNob3dMYWJlbChjLmVsZW1lbnQsYy5tZXNzYWdlKTtpZih0aGlzLmVycm9yTGlzdC5sZW5ndGgmJih0aGlzLnRvU2hvdz10aGlzLnRvU2hvdy5hZGQodGhpcy5jb250YWluZXJzKSksdGhpcy5zZXR0aW5ncy5zdWNjZXNzKWZvcihhPTA7dGhpcy5zdWNjZXNzTGlzdFthXTthKyspdGhpcy5zaG93TGFiZWwodGhpcy5zdWNjZXNzTGlzdFthXSk7aWYodGhpcy5zZXR0aW5ncy51bmhpZ2hsaWdodClmb3IoYT0wLGI9dGhpcy52YWxpZEVsZW1lbnRzKCk7YlthXTthKyspdGhpcy5zZXR0aW5ncy51bmhpZ2hsaWdodC5jYWxsKHRoaXMsYlthXSx0aGlzLnNldHRpbmdzLmVycm9yQ2xhc3MsdGhpcy5zZXR0aW5ncy52YWxpZENsYXNzKTt0aGlzLnRvSGlkZT10aGlzLnRvSGlkZS5ub3QodGhpcy50b1Nob3cpLHRoaXMuaGlkZUVycm9ycygpLHRoaXMuYWRkV3JhcHBlcih0aGlzLnRvU2hvdykuc2hvdygpfSx2YWxpZEVsZW1lbnRzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY3VycmVudEVsZW1lbnRzLm5vdCh0aGlzLmludmFsaWRFbGVtZW50cygpKX0saW52YWxpZEVsZW1lbnRzOmZ1bmN0aW9uKCl7cmV0dXJuIGEodGhpcy5lcnJvckxpc3QpLm1hcChmdW5jdGlvbigpe3JldHVybiB0aGlzLmVsZW1lbnR9KX0sc2hvd0xhYmVsOmZ1bmN0aW9uKGIsYyl7dmFyIGQsZSxmLGcsaD10aGlzLmVycm9yc0ZvcihiKSxpPXRoaXMuaWRPck5hbWUoYiksaj1hKGIpLmF0dHIoXCJhcmlhLWRlc2NyaWJlZGJ5XCIpO2gubGVuZ3RoPyhoLnJlbW92ZUNsYXNzKHRoaXMuc2V0dGluZ3MudmFsaWRDbGFzcykuYWRkQ2xhc3ModGhpcy5zZXR0aW5ncy5lcnJvckNsYXNzKSxoLmh0bWwoYykpOihoPWEoXCI8XCIrdGhpcy5zZXR0aW5ncy5lcnJvckVsZW1lbnQrXCI+XCIpLmF0dHIoXCJpZFwiLGkrXCItZXJyb3JcIikuYWRkQ2xhc3ModGhpcy5zZXR0aW5ncy5lcnJvckNsYXNzKS5odG1sKGN8fFwiXCIpLGQ9aCx0aGlzLnNldHRpbmdzLndyYXBwZXImJihkPWguaGlkZSgpLnNob3coKS53cmFwKFwiPFwiK3RoaXMuc2V0dGluZ3Mud3JhcHBlcitcIi8+XCIpLnBhcmVudCgpKSx0aGlzLmxhYmVsQ29udGFpbmVyLmxlbmd0aD90aGlzLmxhYmVsQ29udGFpbmVyLmFwcGVuZChkKTp0aGlzLnNldHRpbmdzLmVycm9yUGxhY2VtZW50P3RoaXMuc2V0dGluZ3MuZXJyb3JQbGFjZW1lbnQuY2FsbCh0aGlzLGQsYShiKSk6ZC5pbnNlcnRBZnRlcihiKSxoLmlzKFwibGFiZWxcIik/aC5hdHRyKFwiZm9yXCIsaSk6MD09PWgucGFyZW50cyhcImxhYmVsW2Zvcj0nXCIrdGhpcy5lc2NhcGVDc3NNZXRhKGkpK1wiJ11cIikubGVuZ3RoJiYoZj1oLmF0dHIoXCJpZFwiKSxqP2oubWF0Y2gobmV3IFJlZ0V4cChcIlxcXFxiXCIrdGhpcy5lc2NhcGVDc3NNZXRhKGYpK1wiXFxcXGJcIikpfHwoais9XCIgXCIrZik6aj1mLGEoYikuYXR0cihcImFyaWEtZGVzY3JpYmVkYnlcIixqKSxlPXRoaXMuZ3JvdXBzW2IubmFtZV0sZSYmKGc9dGhpcyxhLmVhY2goZy5ncm91cHMsZnVuY3Rpb24oYixjKXtjPT09ZSYmYShcIltuYW1lPSdcIitnLmVzY2FwZUNzc01ldGEoYikrXCInXVwiLGcuY3VycmVudEZvcm0pLmF0dHIoXCJhcmlhLWRlc2NyaWJlZGJ5XCIsaC5hdHRyKFwiaWRcIikpfSkpKSksIWMmJnRoaXMuc2V0dGluZ3Muc3VjY2VzcyYmKGgudGV4dChcIlwiKSxcInN0cmluZ1wiPT10eXBlb2YgdGhpcy5zZXR0aW5ncy5zdWNjZXNzP2guYWRkQ2xhc3ModGhpcy5zZXR0aW5ncy5zdWNjZXNzKTp0aGlzLnNldHRpbmdzLnN1Y2Nlc3MoaCxiKSksdGhpcy50b1Nob3c9dGhpcy50b1Nob3cuYWRkKGgpfSxlcnJvcnNGb3I6ZnVuY3Rpb24oYil7dmFyIGM9dGhpcy5lc2NhcGVDc3NNZXRhKHRoaXMuaWRPck5hbWUoYikpLGQ9YShiKS5hdHRyKFwiYXJpYS1kZXNjcmliZWRieVwiKSxlPVwibGFiZWxbZm9yPSdcIitjK1wiJ10sIGxhYmVsW2Zvcj0nXCIrYytcIiddICpcIjtyZXR1cm4gZCYmKGU9ZStcIiwgI1wiK3RoaXMuZXNjYXBlQ3NzTWV0YShkKS5yZXBsYWNlKC9cXHMrL2csXCIsICNcIikpLHRoaXMuZXJyb3JzKCkuZmlsdGVyKGUpfSxlc2NhcGVDc3NNZXRhOmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UoLyhbXFxcXCFcIiMkJSYnKCkqKywuXFwvOjs8PT4/QFxcW1xcXV5ge3x9fl0pL2csXCJcXFxcJDFcIil9LGlkT3JOYW1lOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmdyb3Vwc1thLm5hbWVdfHwodGhpcy5jaGVja2FibGUoYSk/YS5uYW1lOmEuaWR8fGEubmFtZSl9LHZhbGlkYXRpb25UYXJnZXRGb3I6ZnVuY3Rpb24oYil7cmV0dXJuIHRoaXMuY2hlY2thYmxlKGIpJiYoYj10aGlzLmZpbmRCeU5hbWUoYi5uYW1lKSksYShiKS5ub3QodGhpcy5zZXR0aW5ncy5pZ25vcmUpWzBdfSxjaGVja2FibGU6ZnVuY3Rpb24oYSl7cmV0dXJuL3JhZGlvfGNoZWNrYm94L2kudGVzdChhLnR5cGUpfSxmaW5kQnlOYW1lOmZ1bmN0aW9uKGIpe3JldHVybiBhKHRoaXMuY3VycmVudEZvcm0pLmZpbmQoXCJbbmFtZT0nXCIrdGhpcy5lc2NhcGVDc3NNZXRhKGIpK1wiJ11cIil9LGdldExlbmd0aDpmdW5jdGlvbihiLGMpe3N3aXRjaChjLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpe2Nhc2VcInNlbGVjdFwiOnJldHVybiBhKFwib3B0aW9uOnNlbGVjdGVkXCIsYykubGVuZ3RoO2Nhc2VcImlucHV0XCI6aWYodGhpcy5jaGVja2FibGUoYykpcmV0dXJuIHRoaXMuZmluZEJ5TmFtZShjLm5hbWUpLmZpbHRlcihcIjpjaGVja2VkXCIpLmxlbmd0aH1yZXR1cm4gYi5sZW5ndGh9LGRlcGVuZDpmdW5jdGlvbihhLGIpe3JldHVybiF0aGlzLmRlcGVuZFR5cGVzW3R5cGVvZiBhXXx8dGhpcy5kZXBlbmRUeXBlc1t0eXBlb2YgYV0oYSxiKX0sZGVwZW5kVHlwZXM6e1wiYm9vbGVhblwiOmZ1bmN0aW9uKGEpe3JldHVybiBhfSxzdHJpbmc6ZnVuY3Rpb24oYixjKXtyZXR1cm4hIWEoYixjLmZvcm0pLmxlbmd0aH0sXCJmdW5jdGlvblwiOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGEoYil9fSxvcHRpb25hbDpmdW5jdGlvbihiKXt2YXIgYz10aGlzLmVsZW1lbnRWYWx1ZShiKTtyZXR1cm4hYS52YWxpZGF0b3IubWV0aG9kcy5yZXF1aXJlZC5jYWxsKHRoaXMsYyxiKSYmXCJkZXBlbmRlbmN5LW1pc21hdGNoXCJ9LHN0YXJ0UmVxdWVzdDpmdW5jdGlvbihiKXt0aGlzLnBlbmRpbmdbYi5uYW1lXXx8KHRoaXMucGVuZGluZ1JlcXVlc3QrKyxhKGIpLmFkZENsYXNzKHRoaXMuc2V0dGluZ3MucGVuZGluZ0NsYXNzKSx0aGlzLnBlbmRpbmdbYi5uYW1lXT0hMCl9LHN0b3BSZXF1ZXN0OmZ1bmN0aW9uKGIsYyl7dGhpcy5wZW5kaW5nUmVxdWVzdC0tLHRoaXMucGVuZGluZ1JlcXVlc3Q8MCYmKHRoaXMucGVuZGluZ1JlcXVlc3Q9MCksZGVsZXRlIHRoaXMucGVuZGluZ1tiLm5hbWVdLGEoYikucmVtb3ZlQ2xhc3ModGhpcy5zZXR0aW5ncy5wZW5kaW5nQ2xhc3MpLGMmJjA9PT10aGlzLnBlbmRpbmdSZXF1ZXN0JiZ0aGlzLmZvcm1TdWJtaXR0ZWQmJnRoaXMuZm9ybSgpPyhhKHRoaXMuY3VycmVudEZvcm0pLnN1Ym1pdCgpLHRoaXMuc3VibWl0QnV0dG9uJiZhKFwiaW5wdXQ6aGlkZGVuW25hbWU9J1wiK3RoaXMuc3VibWl0QnV0dG9uLm5hbWUrXCInXVwiLHRoaXMuY3VycmVudEZvcm0pLnJlbW92ZSgpLHRoaXMuZm9ybVN1Ym1pdHRlZD0hMSk6IWMmJjA9PT10aGlzLnBlbmRpbmdSZXF1ZXN0JiZ0aGlzLmZvcm1TdWJtaXR0ZWQmJihhKHRoaXMuY3VycmVudEZvcm0pLnRyaWdnZXJIYW5kbGVyKFwiaW52YWxpZC1mb3JtXCIsW3RoaXNdKSx0aGlzLmZvcm1TdWJtaXR0ZWQ9ITEpfSxwcmV2aW91c1ZhbHVlOmZ1bmN0aW9uKGIsYyl7cmV0dXJuIGM9XCJzdHJpbmdcIj09dHlwZW9mIGMmJmN8fFwicmVtb3RlXCIsYS5kYXRhKGIsXCJwcmV2aW91c1ZhbHVlXCIpfHxhLmRhdGEoYixcInByZXZpb3VzVmFsdWVcIix7b2xkOm51bGwsdmFsaWQ6ITAsbWVzc2FnZTp0aGlzLmRlZmF1bHRNZXNzYWdlKGIse21ldGhvZDpjfSl9KX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMucmVzZXRGb3JtKCksYSh0aGlzLmN1cnJlbnRGb3JtKS5vZmYoXCIudmFsaWRhdGVcIikucmVtb3ZlRGF0YShcInZhbGlkYXRvclwiKS5maW5kKFwiLnZhbGlkYXRlLWVxdWFsVG8tYmx1clwiKS5vZmYoXCIudmFsaWRhdGUtZXF1YWxUb1wiKS5yZW1vdmVDbGFzcyhcInZhbGlkYXRlLWVxdWFsVG8tYmx1clwiKS5maW5kKFwiLnZhbGlkYXRlLWxlc3NUaGFuLWJsdXJcIikub2ZmKFwiLnZhbGlkYXRlLWxlc3NUaGFuXCIpLnJlbW92ZUNsYXNzKFwidmFsaWRhdGUtbGVzc1RoYW4tYmx1clwiKS5maW5kKFwiLnZhbGlkYXRlLWxlc3NUaGFuRXF1YWwtYmx1clwiKS5vZmYoXCIudmFsaWRhdGUtbGVzc1RoYW5FcXVhbFwiKS5yZW1vdmVDbGFzcyhcInZhbGlkYXRlLWxlc3NUaGFuRXF1YWwtYmx1clwiKS5maW5kKFwiLnZhbGlkYXRlLWdyZWF0ZXJUaGFuRXF1YWwtYmx1clwiKS5vZmYoXCIudmFsaWRhdGUtZ3JlYXRlclRoYW5FcXVhbFwiKS5yZW1vdmVDbGFzcyhcInZhbGlkYXRlLWdyZWF0ZXJUaGFuRXF1YWwtYmx1clwiKS5maW5kKFwiLnZhbGlkYXRlLWdyZWF0ZXJUaGFuLWJsdXJcIikub2ZmKFwiLnZhbGlkYXRlLWdyZWF0ZXJUaGFuXCIpLnJlbW92ZUNsYXNzKFwidmFsaWRhdGUtZ3JlYXRlclRoYW4tYmx1clwiKX19LGNsYXNzUnVsZVNldHRpbmdzOntyZXF1aXJlZDp7cmVxdWlyZWQ6ITB9LGVtYWlsOntlbWFpbDohMH0sdXJsOnt1cmw6ITB9LGRhdGU6e2RhdGU6ITB9LGRhdGVJU086e2RhdGVJU086ITB9LG51bWJlcjp7bnVtYmVyOiEwfSxkaWdpdHM6e2RpZ2l0czohMH0sY3JlZGl0Y2FyZDp7Y3JlZGl0Y2FyZDohMH19LGFkZENsYXNzUnVsZXM6ZnVuY3Rpb24oYixjKXtiLmNvbnN0cnVjdG9yPT09U3RyaW5nP3RoaXMuY2xhc3NSdWxlU2V0dGluZ3NbYl09YzphLmV4dGVuZCh0aGlzLmNsYXNzUnVsZVNldHRpbmdzLGIpfSxjbGFzc1J1bGVzOmZ1bmN0aW9uKGIpe3ZhciBjPXt9LGQ9YShiKS5hdHRyKFwiY2xhc3NcIik7cmV0dXJuIGQmJmEuZWFjaChkLnNwbGl0KFwiIFwiKSxmdW5jdGlvbigpe3RoaXMgaW4gYS52YWxpZGF0b3IuY2xhc3NSdWxlU2V0dGluZ3MmJmEuZXh0ZW5kKGMsYS52YWxpZGF0b3IuY2xhc3NSdWxlU2V0dGluZ3NbdGhpc10pfSksY30sbm9ybWFsaXplQXR0cmlidXRlUnVsZTpmdW5jdGlvbihhLGIsYyxkKXsvbWlufG1heHxzdGVwLy50ZXN0KGMpJiYobnVsbD09PWJ8fC9udW1iZXJ8cmFuZ2V8dGV4dC8udGVzdChiKSkmJihkPU51bWJlcihkKSxpc05hTihkKSYmKGQ9dm9pZCAwKSksZHx8MD09PWQ/YVtjXT1kOmI9PT1jJiZcInJhbmdlXCIhPT1iJiYoYVtjXT0hMCl9LGF0dHJpYnV0ZVJ1bGVzOmZ1bmN0aW9uKGIpe3ZhciBjLGQsZT17fSxmPWEoYiksZz1iLmdldEF0dHJpYnV0ZShcInR5cGVcIik7Zm9yKGMgaW4gYS52YWxpZGF0b3IubWV0aG9kcylcInJlcXVpcmVkXCI9PT1jPyhkPWIuZ2V0QXR0cmlidXRlKGMpLFwiXCI9PT1kJiYoZD0hMCksZD0hIWQpOmQ9Zi5hdHRyKGMpLHRoaXMubm9ybWFsaXplQXR0cmlidXRlUnVsZShlLGcsYyxkKTtyZXR1cm4gZS5tYXhsZW5ndGgmJi8tMXwyMTQ3NDgzNjQ3fDUyNDI4OC8udGVzdChlLm1heGxlbmd0aCkmJmRlbGV0ZSBlLm1heGxlbmd0aCxlfSxkYXRhUnVsZXM6ZnVuY3Rpb24oYil7dmFyIGMsZCxlPXt9LGY9YShiKSxnPWIuZ2V0QXR0cmlidXRlKFwidHlwZVwiKTtmb3IoYyBpbiBhLnZhbGlkYXRvci5tZXRob2RzKWQ9Zi5kYXRhKFwicnVsZVwiK2MuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrYy5zdWJzdHJpbmcoMSkudG9Mb3dlckNhc2UoKSksXCJcIj09PWQmJihkPSEwKSx0aGlzLm5vcm1hbGl6ZUF0dHJpYnV0ZVJ1bGUoZSxnLGMsZCk7cmV0dXJuIGV9LHN0YXRpY1J1bGVzOmZ1bmN0aW9uKGIpe3ZhciBjPXt9LGQ9YS5kYXRhKGIuZm9ybSxcInZhbGlkYXRvclwiKTtyZXR1cm4gZC5zZXR0aW5ncy5ydWxlcyYmKGM9YS52YWxpZGF0b3Iubm9ybWFsaXplUnVsZShkLnNldHRpbmdzLnJ1bGVzW2IubmFtZV0pfHx7fSksY30sbm9ybWFsaXplUnVsZXM6ZnVuY3Rpb24oYixjKXtyZXR1cm4gYS5lYWNoKGIsZnVuY3Rpb24oZCxlKXtpZihlPT09ITEpcmV0dXJuIHZvaWQgZGVsZXRlIGJbZF07aWYoZS5wYXJhbXx8ZS5kZXBlbmRzKXt2YXIgZj0hMDtzd2l0Y2godHlwZW9mIGUuZGVwZW5kcyl7Y2FzZVwic3RyaW5nXCI6Zj0hIWEoZS5kZXBlbmRzLGMuZm9ybSkubGVuZ3RoO2JyZWFrO2Nhc2VcImZ1bmN0aW9uXCI6Zj1lLmRlcGVuZHMuY2FsbChjLGMpfWY/YltkXT12b2lkIDA9PT1lLnBhcmFtfHxlLnBhcmFtOihhLmRhdGEoYy5mb3JtLFwidmFsaWRhdG9yXCIpLnJlc2V0RWxlbWVudHMoYShjKSksZGVsZXRlIGJbZF0pfX0pLGEuZWFjaChiLGZ1bmN0aW9uKGQsZSl7YltkXT1hLmlzRnVuY3Rpb24oZSkmJlwibm9ybWFsaXplclwiIT09ZD9lKGMpOmV9KSxhLmVhY2goW1wibWlubGVuZ3RoXCIsXCJtYXhsZW5ndGhcIl0sZnVuY3Rpb24oKXtiW3RoaXNdJiYoYlt0aGlzXT1OdW1iZXIoYlt0aGlzXSkpfSksYS5lYWNoKFtcInJhbmdlbGVuZ3RoXCIsXCJyYW5nZVwiXSxmdW5jdGlvbigpe3ZhciBjO2JbdGhpc10mJihhLmlzQXJyYXkoYlt0aGlzXSk/Ylt0aGlzXT1bTnVtYmVyKGJbdGhpc11bMF0pLE51bWJlcihiW3RoaXNdWzFdKV06XCJzdHJpbmdcIj09dHlwZW9mIGJbdGhpc10mJihjPWJbdGhpc10ucmVwbGFjZSgvW1xcW1xcXV0vZyxcIlwiKS5zcGxpdCgvW1xccyxdKy8pLGJbdGhpc109W051bWJlcihjWzBdKSxOdW1iZXIoY1sxXSldKSl9KSxhLnZhbGlkYXRvci5hdXRvQ3JlYXRlUmFuZ2VzJiYobnVsbCE9Yi5taW4mJm51bGwhPWIubWF4JiYoYi5yYW5nZT1bYi5taW4sYi5tYXhdLGRlbGV0ZSBiLm1pbixkZWxldGUgYi5tYXgpLG51bGwhPWIubWlubGVuZ3RoJiZudWxsIT1iLm1heGxlbmd0aCYmKGIucmFuZ2VsZW5ndGg9W2IubWlubGVuZ3RoLGIubWF4bGVuZ3RoXSxkZWxldGUgYi5taW5sZW5ndGgsZGVsZXRlIGIubWF4bGVuZ3RoKSksYn0sbm9ybWFsaXplUnVsZTpmdW5jdGlvbihiKXtpZihcInN0cmluZ1wiPT10eXBlb2YgYil7dmFyIGM9e307YS5lYWNoKGIuc3BsaXQoL1xccy8pLGZ1bmN0aW9uKCl7Y1t0aGlzXT0hMH0pLGI9Y31yZXR1cm4gYn0sYWRkTWV0aG9kOmZ1bmN0aW9uKGIsYyxkKXthLnZhbGlkYXRvci5tZXRob2RzW2JdPWMsYS52YWxpZGF0b3IubWVzc2FnZXNbYl09dm9pZCAwIT09ZD9kOmEudmFsaWRhdG9yLm1lc3NhZ2VzW2JdLGMubGVuZ3RoPDMmJmEudmFsaWRhdG9yLmFkZENsYXNzUnVsZXMoYixhLnZhbGlkYXRvci5ub3JtYWxpemVSdWxlKGIpKX0sbWV0aG9kczp7cmVxdWlyZWQ6ZnVuY3Rpb24oYixjLGQpe2lmKCF0aGlzLmRlcGVuZChkLGMpKXJldHVyblwiZGVwZW5kZW5jeS1taXNtYXRjaFwiO2lmKFwic2VsZWN0XCI9PT1jLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpe3ZhciBlPWEoYykudmFsKCk7cmV0dXJuIGUmJmUubGVuZ3RoPjB9cmV0dXJuIHRoaXMuY2hlY2thYmxlKGMpP3RoaXMuZ2V0TGVuZ3RoKGIsYyk+MDp2b2lkIDAhPT1iJiZudWxsIT09YiYmYi5sZW5ndGg+MH0sZW1haWw6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5vcHRpb25hbChiKXx8L15bYS16QS1aMC05LiEjJCUmJyorXFwvPT9eX2B7fH1+LV0rQFthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPyg/OlxcLlthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPykqJC8udGVzdChhKX0sdXJsOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMub3B0aW9uYWwoYil8fC9eKD86KD86KD86aHR0cHM/fGZ0cCk6KT9cXC9cXC8pKD86XFxTKyg/OjpcXFMqKT9AKT8oPzooPyEoPzoxMHwxMjcpKD86XFwuXFxkezEsM30pezN9KSg/ISg/OjE2OVxcLjI1NHwxOTJcXC4xNjgpKD86XFwuXFxkezEsM30pezJ9KSg/ITE3MlxcLig/OjFbNi05XXwyXFxkfDNbMC0xXSkoPzpcXC5cXGR7MSwzfSl7Mn0pKD86WzEtOV1cXGQ/fDFcXGRcXGR8MlswMV1cXGR8MjJbMC0zXSkoPzpcXC4oPzoxP1xcZHsxLDJ9fDJbMC00XVxcZHwyNVswLTVdKSl7Mn0oPzpcXC4oPzpbMS05XVxcZD98MVxcZFxcZHwyWzAtNF1cXGR8MjVbMC00XSkpfCg/Oig/OlthLXpcXHUwMGExLVxcdWZmZmYwLTldLSopKlthLXpcXHUwMGExLVxcdWZmZmYwLTldKykoPzpcXC4oPzpbYS16XFx1MDBhMS1cXHVmZmZmMC05XS0qKSpbYS16XFx1MDBhMS1cXHVmZmZmMC05XSspKig/OlxcLig/OlthLXpcXHUwMGExLVxcdWZmZmZdezIsfSkpLj8pKD86OlxcZHsyLDV9KT8oPzpbXFwvPyNdXFxTKik/JC9pLnRlc3QoYSl9LGRhdGU6ZnVuY3Rpb24oKXt2YXIgYT0hMTtyZXR1cm4gZnVuY3Rpb24oYixjKXtyZXR1cm4gYXx8KGE9ITAsdGhpcy5zZXR0aW5ncy5kZWJ1ZyYmd2luZG93LmNvbnNvbGUmJmNvbnNvbGUud2FybihcIlRoZSBgZGF0ZWAgbWV0aG9kIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB2ZXJzaW9uICcyLjAuMCcuXFxuUGxlYXNlIGRvbid0IHVzZSBpdCwgc2luY2UgaXQgcmVsaWVzIG9uIHRoZSBEYXRlIGNvbnN0cnVjdG9yLCB3aGljaFxcbmJlaGF2ZXMgdmVyeSBkaWZmZXJlbnRseSBhY3Jvc3MgYnJvd3NlcnMgYW5kIGxvY2FsZXMuIFVzZSBgZGF0ZUlTT2BcXG5pbnN0ZWFkIG9yIG9uZSBvZiB0aGUgbG9jYWxlIHNwZWNpZmljIG1ldGhvZHMgaW4gYGxvY2FsaXphdGlvbnMvYFxcbmFuZCBgYWRkaXRpb25hbC1tZXRob2RzLmpzYC5cIikpLHRoaXMub3B0aW9uYWwoYyl8fCEvSW52YWxpZHxOYU4vLnRlc3QobmV3IERhdGUoYikudG9TdHJpbmcoKSl9fSgpLGRhdGVJU086ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5vcHRpb25hbChiKXx8L15cXGR7NH1bXFwvXFwtXSgwP1sxLTldfDFbMDEyXSlbXFwvXFwtXSgwP1sxLTldfFsxMl1bMC05XXwzWzAxXSkkLy50ZXN0KGEpfSxudW1iZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5vcHRpb25hbChiKXx8L14oPzotP1xcZCt8LT9cXGR7MSwzfSg/OixcXGR7M30pKyk/KD86XFwuXFxkKyk/JC8udGVzdChhKX0sZGlnaXRzOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMub3B0aW9uYWwoYil8fC9eXFxkKyQvLnRlc3QoYSl9LG1pbmxlbmd0aDpmdW5jdGlvbihiLGMsZCl7dmFyIGU9YS5pc0FycmF5KGIpP2IubGVuZ3RoOnRoaXMuZ2V0TGVuZ3RoKGIsYyk7cmV0dXJuIHRoaXMub3B0aW9uYWwoYyl8fGU+PWR9LG1heGxlbmd0aDpmdW5jdGlvbihiLGMsZCl7dmFyIGU9YS5pc0FycmF5KGIpP2IubGVuZ3RoOnRoaXMuZ2V0TGVuZ3RoKGIsYyk7cmV0dXJuIHRoaXMub3B0aW9uYWwoYyl8fGU8PWR9LHJhbmdlbGVuZ3RoOmZ1bmN0aW9uKGIsYyxkKXt2YXIgZT1hLmlzQXJyYXkoYik/Yi5sZW5ndGg6dGhpcy5nZXRMZW5ndGgoYixjKTtyZXR1cm4gdGhpcy5vcHRpb25hbChjKXx8ZT49ZFswXSYmZTw9ZFsxXX0sbWluOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdGhpcy5vcHRpb25hbChiKXx8YT49Y30sbWF4OmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdGhpcy5vcHRpb25hbChiKXx8YTw9Y30scmFuZ2U6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB0aGlzLm9wdGlvbmFsKGIpfHxhPj1jWzBdJiZhPD1jWzFdfSxzdGVwOmZ1bmN0aW9uKGIsYyxkKXt2YXIgZSxmPWEoYykuYXR0cihcInR5cGVcIiksZz1cIlN0ZXAgYXR0cmlidXRlIG9uIGlucHV0IHR5cGUgXCIrZitcIiBpcyBub3Qgc3VwcG9ydGVkLlwiLGg9W1widGV4dFwiLFwibnVtYmVyXCIsXCJyYW5nZVwiXSxpPW5ldyBSZWdFeHAoXCJcXFxcYlwiK2YrXCJcXFxcYlwiKSxqPWYmJiFpLnRlc3QoaC5qb2luKCkpLGs9ZnVuY3Rpb24oYSl7dmFyIGI9KFwiXCIrYSkubWF0Y2goLyg/OlxcLihcXGQrKSk/JC8pO3JldHVybiBiJiZiWzFdP2JbMV0ubGVuZ3RoOjB9LGw9ZnVuY3Rpb24oYSl7cmV0dXJuIE1hdGgucm91bmQoYSpNYXRoLnBvdygxMCxlKSl9LG09ITA7aWYoail0aHJvdyBuZXcgRXJyb3IoZyk7cmV0dXJuIGU9ayhkKSwoayhiKT5lfHxsKGIpJWwoZCkhPT0wKSYmKG09ITEpLHRoaXMub3B0aW9uYWwoYyl8fG19LGVxdWFsVG86ZnVuY3Rpb24oYixjLGQpe3ZhciBlPWEoZCk7cmV0dXJuIHRoaXMuc2V0dGluZ3Mub25mb2N1c291dCYmZS5ub3QoXCIudmFsaWRhdGUtZXF1YWxUby1ibHVyXCIpLmxlbmd0aCYmZS5hZGRDbGFzcyhcInZhbGlkYXRlLWVxdWFsVG8tYmx1clwiKS5vbihcImJsdXIudmFsaWRhdGUtZXF1YWxUb1wiLGZ1bmN0aW9uKCl7YShjKS52YWxpZCgpfSksYj09PWUudmFsKCl9LHJlbW90ZTpmdW5jdGlvbihiLGMsZCxlKXtpZih0aGlzLm9wdGlvbmFsKGMpKXJldHVyblwiZGVwZW5kZW5jeS1taXNtYXRjaFwiO2U9XCJzdHJpbmdcIj09dHlwZW9mIGUmJmV8fFwicmVtb3RlXCI7dmFyIGYsZyxoLGk9dGhpcy5wcmV2aW91c1ZhbHVlKGMsZSk7cmV0dXJuIHRoaXMuc2V0dGluZ3MubWVzc2FnZXNbYy5uYW1lXXx8KHRoaXMuc2V0dGluZ3MubWVzc2FnZXNbYy5uYW1lXT17fSksaS5vcmlnaW5hbE1lc3NhZ2U9aS5vcmlnaW5hbE1lc3NhZ2V8fHRoaXMuc2V0dGluZ3MubWVzc2FnZXNbYy5uYW1lXVtlXSx0aGlzLnNldHRpbmdzLm1lc3NhZ2VzW2MubmFtZV1bZV09aS5tZXNzYWdlLGQ9XCJzdHJpbmdcIj09dHlwZW9mIGQmJnt1cmw6ZH18fGQsaD1hLnBhcmFtKGEuZXh0ZW5kKHtkYXRhOmJ9LGQuZGF0YSkpLGkub2xkPT09aD9pLnZhbGlkOihpLm9sZD1oLGY9dGhpcyx0aGlzLnN0YXJ0UmVxdWVzdChjKSxnPXt9LGdbYy5uYW1lXT1iLGEuYWpheChhLmV4dGVuZCghMCx7bW9kZTpcImFib3J0XCIscG9ydDpcInZhbGlkYXRlXCIrYy5uYW1lLGRhdGFUeXBlOlwianNvblwiLGRhdGE6Zyxjb250ZXh0OmYuY3VycmVudEZvcm0sc3VjY2VzczpmdW5jdGlvbihhKXt2YXIgZCxnLGgsaj1hPT09ITB8fFwidHJ1ZVwiPT09YTtmLnNldHRpbmdzLm1lc3NhZ2VzW2MubmFtZV1bZV09aS5vcmlnaW5hbE1lc3NhZ2Usaj8oaD1mLmZvcm1TdWJtaXR0ZWQsZi5yZXNldEludGVybmFscygpLGYudG9IaWRlPWYuZXJyb3JzRm9yKGMpLGYuZm9ybVN1Ym1pdHRlZD1oLGYuc3VjY2Vzc0xpc3QucHVzaChjKSxmLmludmFsaWRbYy5uYW1lXT0hMSxmLnNob3dFcnJvcnMoKSk6KGQ9e30sZz1hfHxmLmRlZmF1bHRNZXNzYWdlKGMse21ldGhvZDplLHBhcmFtZXRlcnM6Yn0pLGRbYy5uYW1lXT1pLm1lc3NhZ2U9ZyxmLmludmFsaWRbYy5uYW1lXT0hMCxmLnNob3dFcnJvcnMoZCkpLGkudmFsaWQ9aixmLnN0b3BSZXF1ZXN0KGMsail9fSxkKSksXCJwZW5kaW5nXCIpfX19KTt2YXIgYixjPXt9O3JldHVybiBhLmFqYXhQcmVmaWx0ZXI/YS5hamF4UHJlZmlsdGVyKGZ1bmN0aW9uKGEsYixkKXt2YXIgZT1hLnBvcnQ7XCJhYm9ydFwiPT09YS5tb2RlJiYoY1tlXSYmY1tlXS5hYm9ydCgpLGNbZV09ZCl9KTooYj1hLmFqYXgsYS5hamF4PWZ1bmN0aW9uKGQpe3ZhciBlPShcIm1vZGVcImluIGQ/ZDphLmFqYXhTZXR0aW5ncykubW9kZSxmPShcInBvcnRcImluIGQ/ZDphLmFqYXhTZXR0aW5ncykucG9ydDtyZXR1cm5cImFib3J0XCI9PT1lPyhjW2ZdJiZjW2ZdLmFib3J0KCksY1tmXT1iLmFwcGx5KHRoaXMsYXJndW1lbnRzKSxjW2ZdKTpiLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0pLGF9KTtcblxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgJCgnc2VsZWN0JykubmljZVNlbGVjdCgpO1xuICAgICQoJ1tiYW5uZXJTbGlkZXJfanNdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBuZXcgU3dpcGVyKCQodGhpcylbMF0sIHtcbiAgICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgICAgIHNwZWVkOiA4MDAsXG4gICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIGZhZGVFZmZlY3Q6IHtcbiAgICAgICAgICBjcm9zc0ZhZGU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgYXV0b3BsYXk6IHtcbiAgICAgICAgICBkZWxheTogNDAwMCxcbiAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICBlbDogJy5iYW5uZXJzLXN3aXBlcl9fcGFnaW5hdGlvbicsXG4gICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gIH0pO1xuICAkKCdbcHJvZHVjdHNTbGlkZXJfanNdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbmF2aWdhdGlvblByZXYgPSAkKHRoaXMpLnBhcmVudHMoJy5zZWN0aW9uLXByb2R1Y3RzLXN3aXBlcicpLmZpbmQoJy5zd2lwZXJfX25hdmlnYXRpb24tYnRuLXByZXYnKVswXTtcbiAgICBjb25zdCBuYXZpZ2F0aW9uTmV4dCA9ICQodGhpcykucGFyZW50cygnLnNlY3Rpb24tcHJvZHVjdHMtc3dpcGVyJykuZmluZCgnLnN3aXBlcl9fbmF2aWdhdGlvbi1idG4tbmV4dCcpWzBdO1xuICAgIHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCQodGhpcylbMF0sIHtcbiAgICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICAgICAgc2xpZGVzUGVyVmlldzogMS43NSxcbiAgICAgIHNwYWNlQmV0d2VlbjogMTYsXG4gICAgICBzcGVlZDogNzAwLFxuICAgICAgc2Nyb2xsYmFyOiB7XG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgIGVsOiBcIi5zd2lwZXItc2Nyb2xsYmFyXCIsXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgaGlkZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICBuZXh0RWw6IG5hdmlnYXRpb25OZXh0LFxuICAgICAgICBwcmV2RWw6IG5hdmlnYXRpb25QcmV2LFxuICAgICAgfSxcbiAgICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgIDA6IHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLjc1LFxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTYsXG4gICAgICAgICAgc2Nyb2xsYmFyOiB7XG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIDc2Nzoge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgICAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICAkKCdbc2VydGlmaWNhdGVzU3dpcGVyX0pTXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCQodGhpcylbMF0sIHtcbiAgICAgIHNwZWVkOiA3MDAsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLjYsXG4gICAgICBzcGFjZUJldHdlZW46IDE2LFxuICAgICAgc2Nyb2xsYmFyOiB7XG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgIGVsOiBcIi5zd2lwZXItc2Nyb2xsYmFyXCIsXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgaGlkZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgMDoge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEuNixcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDE2LFxuICAgICAgICAgIHNjcm9sbGJhcjoge1xuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICA3Njc6IHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgICAgICAgc2Nyb2xsYmFyOiB7XG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfVxuICAgIH0pO1xuICB9KVxuICAkKCdbcHJvZHVjdEdhbGxlcnlTbGlkZXJfanNdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJCh0aGlzKVswXSwge1xuICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgICAgIGJ1bGxldHM6IHRydWUsXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSlcbiAgfSk7XG4gICQoJ1trbm9sZWRnZVNsaWRlcl9qc10nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3dpcGVyID0gbmV3IFN3aXBlcigkKHRoaXMpWzBdLCB7XG4gICAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEuMSxcbiAgICAgIHNwYWNlQmV0d2VlbjogMTYsXG4gICAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgZWw6IFwiLnN3aXBlci1zY3JvbGxiYXJcIixcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICBoaWRlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBicmVha3BvaW50czoge1xuICAgICAgICAwOiB7XG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMS4xLFxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTYsXG4gICAgICAgICAgc2Nyb2xsYmFyOiB7XG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIDc2Nzoge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgICAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgfSlcbiAgfSk7XG4gICQoJ1tuZXdzU2xpZGVyX2pzXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCQodGhpcylbMF0sIHtcbiAgICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICAgICAgc2xpZGVzUGVyVmlldzogMS4xLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAxNixcbiAgICAgIHNjcm9sbGJhcjoge1xuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICBlbDogXCIuc3dpcGVyLXNjcm9sbGJhclwiLFxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgIGhpZGU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgIDA6IHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLjEsXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNixcbiAgICAgICAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgNzY3OiB7XG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgICAgICAgIHNjcm9sbGJhcjoge1xuICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICB9KVxuICB9KTtcbiAgJCgnW3NlcnRpZmljYXRlU2xpZGVyX2pzXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCQodGhpcylbMF0sIHtcbiAgICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgIHNwYWNlQmV0d2VlbjogNjQsXG4gICAgICBzcGVlZDogNzAwLFxuICAgICAgc2Nyb2xsYmFyOiB7XG4gICAgICAgIGVsOiBcIi5zd2lwZXItc2Nyb2xsYmFyXCIsXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgaGlkZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgLy8gbmF2aWdhdGlvbjoge1xuICAgICAgLy8gICBuZXh0RWw6ICcuc2VjdGlvbi1zZXJ0aWZpY2F0ZXMgLnN3aXBlcl9fbmF2aWdhdGlvbi1idG4tbmV4dCcsXG4gICAgICAvLyAgIHByZXZFbDogJy5zZWN0aW9uLXNlcnRpZmljYXRlcyAuc3dpcGVyX19uYXZpZ2F0aW9uLWJ0bi1wcmV2JyxcbiAgICAgIC8vIH0sXG4gICAgICBicmVha3BvaW50czoge1xuICAgICAgICAwOiB7XG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgICAgICAgIHNjcm9sbGJhcjoge1xuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICA3Njc6IHtcbiAgICAgICAgICBmcmVlTW9kZTogdHJ1ZSxcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICAgICAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIDEyMDA6IHtcbiAgICAgICAgICBmcmVlTW9kZTogdHJ1ZSxcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiA2NCxcbiAgICAgICAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIHZhciBzd2lwZXJNYXJxdWUgPSBuZXcgU3dpcGVyKCcuc2VjdGlvbi1wYXJ0bmVyc19fc3dpcGVyJywge1xuICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgc3BhY2VCZXR3ZWVuOiAwLFxuICAgIHNwZWVkOiA0NTAwLFxuICAgIGxvb3A6IHRydWUsXG4gICAgYWxsb3dUb3VjaE1vdmU6IGZhbHNlLCAvLyDQvNC+0LbQvdC+INC10YnRkSDQvtGC0LrQu9GO0YfQuNGC0Ywg0YHQstCw0LnQv1xuICAgIGF1dG9wbGF5OiB7XG4gICAgICBkZWxheTogMCxcbiAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSAvLyDQuNC70Lgg0YHQtNC10LvQsNGC0Ywg0YLQsNC6LCDRh9GC0L7QsdGLINCy0L7RgdGB0YLQsNC90LDQstC70LjQstCw0LvRgdGPIGF1dG9wbGF5INC/0L7RgdC70LUg0LLQt9Cw0LjQvNC+0LTQtdC50YHRgtCy0LjRj1xuICAgIH0sXG4gICAgYnJlYWtwb2ludHM6IHtcbiAgICAgIDk5Mjoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiA1LFxuICAgICAgICBzcGFjZUJldHdlZW46IDUsXG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvLyBkb29vcnMgc3dpcGVyc1xuICBmdW5jdGlvbiBkb29yc1N3aXBlckluaXQoZWwsIGlzUmV2ZXJzZSA9IGZhbHNlLCBzcGVlZCA9IDY1MDAsIGluaXRpYWxTbGlkZSA9IDApIHtcbiAgICB2YXIgc3dpcGVyID0gbmV3IFN3aXBlcihlbCwge1xuICAgICAgICBkaXJlY3Rpb246ICd2ZXJ0aWNhbCcsXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEuNCxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICAgICAgc3BlZWQ6IHNwZWVkLFxuICAgICAgICBpbml0aWFsU2xpZGU6IGluaXRpYWxTbGlkZSxcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgYWxsb3dUb3VjaE1vdmU6IGZhbHNlLCAvLyDQvNC+0LbQvdC+INC10YnRkSDQvtGC0LrQu9GO0YfQuNGC0Ywg0YHQstCw0LnQv1xuICAgICAgICBhdXRvcGxheToge1xuICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgIHJldmVyc2VEaXJlY3Rpb246IGlzUmV2ZXJzZSxcbiAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UgLy8g0LjQu9C4INGB0LTQtdC70LDRgtGMINGC0LDQuiwg0YfRgtC+0LHRiyDQstC+0YHRgdGC0LDQvdCw0LLQu9C40LLQsNC70YHRjyBhdXRvcGxheSDQv9C+0YHQu9C1INCy0LfQsNC40LzQvtC00LXQudGB0YLQstC40Y9cbiAgICAgICAgfSxcbiAgICAgICAgLy8gYnJlYWtwb2ludHM6IHtcbiAgICAgICAgLy8gICA3Njc6IHtcblxuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy8gfVxuICAgIH0pO1xuICB9XG4gIHZhciBkb29yc1N3aXBlckVsMSA9ICQoJy5zZWN0aW9uLWRvb3JzX19zd2lwZXJfMScpO1xuICB2YXIgZG9vcnNTd2lwZXJFbDIgPSAkKCcuc2VjdGlvbi1kb29yc19fc3dpcGVyXzInKTtcbiAgdmFyIGRvb3JzU3dpcGVyRWwzID0gJCgnLnNlY3Rpb24tZG9vcnNfX3N3aXBlcl8zJyk7XG4gIHZhciBkb29yc1N3aXBlckVsNCA9ICQoJy5zZWN0aW9uLWRvb3JzX19zd2lwZXJfNCcpO1xuICBkb29yc1N3aXBlckluaXQoZG9vcnNTd2lwZXJFbDFbMF0pO1xuICBkb29yc1N3aXBlckluaXQoZG9vcnNTd2lwZXJFbDJbMF0sIHRydWUsIDg1MDApO1xuICBkb29yc1N3aXBlckluaXQoZG9vcnNTd2lwZXJFbDNbMF0sIGZhbHNlLCA0ODAwKTtcbiAgZG9vcnNTd2lwZXJJbml0KGRvb3JzU3dpcGVyRWw0WzBdLCB0cnVlLCA2MjAwKTtcblxuICBjb25zdCBnYWxsYXJ5X19zd2lwZXIgPSBuZXcgU3dpcGVyKCcuZ2FsbGFyeV9fc3dpcGVyJywge1xuICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgc3BhY2VCZXR3ZWVuOiAnMSUnLFxuICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gICAgc2Nyb2xsYmFyOiB7XG4gICAgICBlbDogXCIuc3dpcGVyLXNjcm9sbGJhclwiLFxuICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgaGlkZTogZmFsc2UsXG4gICAgfSxcbiAgICBhdXRvcGxheToge1xuICAgICAgICBkZWxheTogMjUwMCxcbiAgICB9LFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgZWw6IFwiLmdhbGxhcnlfX3dyYXBwZXIgLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgfSxcbiAgICBicmVha3BvaW50czp7XG4gICAgICAwOntcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMS41LFxuICAgICAgICBzcGFjZUJldHdlZW46ICcxJScsXG4gICAgICAgIHNjcm9sbGJhcjoge1xuICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgNTc4OntcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzcGFjZUJldHdlZW46ICcxJScsXG4gICAgICBzY3JvbGxiYXI6IHtcbiAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICB9XG4gICAgfSxcbiAgICAgIDc2Nzp7XG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICAgICAgICBzcGFjZUJldHdlZW46ICcxJScsXG4gICAgICAgICAgc2Nyb2xsYmFyOiB7XG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgfSxcbiAgICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICB9XG4gICAgICB9LFxuICAgIH1cbn0pO1xuXG5pZigkKCcuc2luZ2xlLXByb2R1Y3RfX2dhbGxlcnktc3dpcGVyLXRodW1icycpWzBdKSB7XG4gIHZhciBnYWxsZXJ5VGh1bWJzU3dpcGVyID0gbmV3IFN3aXBlcigkKCcuc2luZ2xlLXByb2R1Y3RfX2dhbGxlcnktc3dpcGVyLXRodW1icycpWzBdLCB7XG4gICAgZGlyZWN0aW9uOiAndmVydGljYWwnLFxuICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgc2xpZGVzUGVyVmlldzogMy4zLFxuICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiAkKCcuc2luZ2xlLXByb2R1Y3RfX2dhbGxlcnktc3dpcGVyLXRodW1icy13cmFwJykuZmluZCgnLnN3aXBlcl9fbmF2aWdhdGlvbi1idG4tbmV4dCcpWzBdLFxuICAgICAgcHJldkVsOiAkKCcuc2luZ2xlLXByb2R1Y3RfX2dhbGxlcnktc3dpcGVyLXRodW1icy13cmFwJykuZmluZCgnLnN3aXBlcl9fbmF2aWdhdGlvbi1idG4tcHJldicpWzBdLFxuICAgIH0sXG4gICAgYnJlYWtwb2ludHM6IHtcbiAgICAgIDA6IHtcbiAgICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDQuMyxcbiAgICAgIH0sXG4gICAgICA3Njg6IHtcbiAgICAgICAgZGlyZWN0aW9uOiAndmVydGljYWwnLFxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLjMsXG4gICAgICB9LFxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIHJlc2l6ZTogZnVuY3Rpb24gcmVzaXplKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgdmFyIGdhbGxlcnlTd2lwZXIgPSBuZXcgU3dpcGVyKCQoJy5zaW5nbGUtcHJvZHVjdF9fZ2FsbGVyeS1zd2lwZXItbGFyZ2UnKVswXSwge1xuICAgIGVmZmVjdDogJ2ZhZGUnLFxuICAgIGZhZGVFZmZlY3Q6IHtcbiAgICAgIGNyb3NzRmFkZTogdHJ1ZVxuICAgIH0sXG4gICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6ICQoJy5zaW5nbGUtcHJvZHVjdF9fZ2FsbGVyeS1zd2lwZXItdGh1bWJzLXdyYXAnKS5maW5kKCcuc3dpcGVyX19uYXZpZ2F0aW9uLWJ0bi1uZXh0JylbMF0sXG4gICAgICBwcmV2RWw6ICQoJy5zaW5nbGUtcHJvZHVjdF9fZ2FsbGVyeS1zd2lwZXItdGh1bWJzLXdyYXAnKS5maW5kKCcuc3dpcGVyX19uYXZpZ2F0aW9uLWJ0bi1wcmV2JylbMF0sXG4gICAgfSxcbiAgICB0aHVtYnM6IHtcbiAgICAgIHN3aXBlcjogZ2FsbGVyeVRodW1ic1N3aXBlcixcbiAgICB9LFxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAwOiB7XG4gICAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICA3Njg6IHtcbiAgICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xufVxuXG5pZigkKCcuc2VjdGlvbi1jYXRhbG9nX19jYXRlZ29yaWVzLXN3aXBlcicpWzBdKSB7XG4gIHZhciBjYXRhbG9nQ2F0ZWdvcmllc1N3aXBlciA9IG5ldyBTd2lwZXIoJCgnLnNlY3Rpb24tY2F0YWxvZ19fY2F0ZWdvcmllcy1zd2lwZXInKVswXSwge1xuICAgIHNwYWNlQmV0d2VlbjogOCxcbiAgICBzbGlkZXNQZXJWaWV3OiAyLjEsXG4gICAgYnJlYWtwb2ludHM6IHtcbiAgICAgIDA6IHtcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiA4LFxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLjIsXG4gICAgICB9LFxuICAgICAgNzY4OiB7XG4gICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDUuNSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgcmVzaXplOiBmdW5jdGlvbiByZXNpemUoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuJCgnLnRhYnMtc2xpZGVyJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gIHZhciBzd2lwZXJUYWJzID0gbmV3IFN3aXBlcigkKHRoaXMpWzBdLCB7XG4gICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxuICAgIHNwYWNlQmV0d2VlbjogOCxcbiAgICB0b3VjaFN0YXJ0Rm9yY2VQcmV2ZW50RGVmYXVsdDogdHJ1ZSxcbiAgICBicmVha3BvaW50czoge1xuICAgICAgMDoge1xuICAgICAgICBzcGFjZUJldHdlZW46IDgsXG4gICAgICB9LFxuICAgICAgNzY3OiB7XG4gICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pIDtcbn0pO1xuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbYWdyZWVtZW50Q29udHJvbF9KU10nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXG4gICAgICAgICAgICAkZm9ybSA9ICR0aGlzLmNsb3Nlc3QoJ2Zvcm0nKSxcbiAgICAgICAgICAgICRpbnB1dCA9ICRmb3JtLmZpbmQoJ1thZ3JlZW1lbnRDb250cm9sQ2hlY2tib3hfSlNdJyksXG4gICAgICAgICAgICAkYnRuID0gJGZvcm0uZmluZCgnW2FncmVlbWVudENvbnRyb2xCdG5fSlNdJyk7XG5cbiAgICAgICAgaWYgKCR0aGlzLmhhc0NsYXNzKCdjaGVja2VkJykpIHtcbiAgICAgICAgICAgICR0aGlzLnJlbW92ZUNsYXNzKCdjaGVja2VkJyk7XG4gICAgICAgICAgICAkaW5wdXQucmVtb3ZlQXR0cignY2hlY2tlZCcpO1xuICAgICAgICAgICAgJGJ0bi5hZGRDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICRidG4uYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKCdjaGVja2VkJyk7XG4gICAgICAgICAgICAkaW5wdXQuYXR0cignY2hlY2tlZCcsICcnKTtcbiAgICAgICAgICAgICRidG4ucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAkYnRuLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW3JlYWRNb3JlQnRuX0pTXScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICRidG4gPSAkKHRoaXMpLFxuICAgICAgICAgICAgJHBhcmVudCA9ICRidG4uY2xvc2VzdCgnW3JlYWRNb3JlQ29udGFpbmVyX0pTXScpO1xuXG4gICAgICAgICRwYXJlbnQuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICB9KTtcblxuICAgICQoXCJbdG9Ub3BfSlNdXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6IDBcbiAgICAgICAgfSwgMCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgICQoXCJbYW5jaG9yTGlua19KU11cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XG5cbiAgICAgICAgaWYgKCQod2luZG93KS5pbm5lcldpZHRoKCkgPCA3NjkpIHtcbiAgICAgICAgICAgIHZhciBoZWFkZXJIZWlnaHQgPSAkKHdpbmRvdykuaW5uZXJXaWR0aCgpO1xuICAgICAgICAgICAgaGVhZGVySGVpZ2h0ID0gKGhlYWRlckhlaWdodCAvIDEwMCkgKiAyOS42ODc1O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGhlYWRlckhlaWdodCA9ICQod2luZG93KS5pbm5lcldpZHRoKCk7XG4gICAgICAgICAgICBoZWFkZXJIZWlnaHQgPSAoaGVhZGVySGVpZ2h0IC8gMTAwKSAqIDUsIDI1NDg2MDc0NjE5MDIyNTk1OTAxMjA4NjE3OTcxNjI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJChpZCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFyIHRvcCA9ICgkKGlkKS5vZmZzZXQoKS50b3ApIC0gaGVhZGVySGVpZ2h0O1xuICAgICAgICAgICAgJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiB0b3BcbiAgICAgICAgICAgIH0sIDE1MDApO1xuICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coMSk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaW5kZXguaHRtbFwiICsgaWQ7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG4gICAgaWYgKGhhc2ggIT0gXCJcIikge1xuXG4gICAgICAgIGlmICgkKHdpbmRvdykuaW5uZXJXaWR0aCgpIDwgNzY5KSB7XG4gICAgICAgICAgICB2YXIgaGVhZGVySGVpZ2h0ID0gJCh3aW5kb3cpLmlubmVyV2lkdGgoKTtcbiAgICAgICAgICAgIGhlYWRlckhlaWdodCA9IChoZWFkZXJIZWlnaHQgLyAxMDApICogMjkuNjg3NTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBoZWFkZXJIZWlnaHQgPSAkKHdpbmRvdykuaW5uZXJXaWR0aCgpO1xuICAgICAgICAgICAgaGVhZGVySGVpZ2h0ID0gKGhlYWRlckhlaWdodCAvIDEwMCkgKiA1LCAyNTQ4NjA3NDYxOTAyMjU5NTkwMTIwODYxNzk3MTYyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCQoaGFzaCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFyIG9mZnNldCA9ICQoaGFzaCkub2Zmc2V0KCkudG9wIC0gaGVhZGVySGVpZ2h0O1xuICAgICAgICAgICAgJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiBvZmZzZXRcbiAgICAgICAgICAgIH0sIDE1MDApO1xuICAgICAgICB9XG4gICAgfTtcblxuXG5cbiAgJC52YWxpZGF0b3IuYWRkTWV0aG9kKCdwYXR0ZXJuJywgZnVuY3Rpb24odmFsdWUsIGVsZW1lbnQsIHBhdHRlcm4pIHtcbiAgICAvLyDQn9GA0L7QstC10YDRj9C10LwsINGP0LLQu9GP0LXRgtGB0Y8g0LvQuCDQt9C90LDRh9C10L3QuNC1INC/0YPRgdGC0YvQvCAo0LXRgdC70Lgg0L/QvtC70LUg0L3QtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+KSDQuNC70Lgg0YHQvtC+0YLQstC10YLRgdGC0LLRg9C10YIg0YDQtdCz0YPQu9GP0YDQvdC+0LzRgyDQstGL0YDQsNC20LXQvdC40Y5cbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbChlbGVtZW50KSB8fCBwYXR0ZXJuLnRlc3QodmFsdWUpO1xufSwgJ9Cf0L7Qu9C1INGB0L7QtNC10YDQttC40YIg0L3QtdC60L7RgNGA0LXQutGC0L3QvtC1INC30L3QsNGH0LXQvdC40LUnKTtcblxuICAgICQoJ1tmb3JtVmFsaWRhdGVfSlNdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBmb3JtID0gJCh0aGlzKTtcbiAgICAgICAgJCh0aGlzKS52YWxpZGF0ZSh7XG4gICAgICAgICAgICBlcnJvckNsYXNzOiBcInZhbGlkYXRlX2Vycm9yXCIsXG4gICAgICAgICAgICBydWxlczoge1xuICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHBhdHRlcm46IC9eW2EtekEtWtCwLdGP0JAt0K9cXHNdKyQvLCAvLyDQnNC10YLQvtC0INC/0YDQvtCy0LXRgNC60Lgg0LHRg9C60LIg0Lgg0L/RgNC+0LHQtdC70L7QslxuICAgICAgICAgICAgICAgICAgbWlubGVuZ3RoOiAyLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBwaG9uZToge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1pbmxlbmd0aDogNywgLy8g0JzQtdGC0L7QtCDQv9GA0L7QstC10YDQutC4INC/0L7QstGC0L7RgNGP0Y7RidC40YXRgdGPINC/0L7QtNGA0Y/QtCDRgdC40LzQstC+0LvQvtCyXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGVtYWlsOiB7XG4gICAgICAgICAgICAgICAgICBwYXR0ZXJuOiAvXihbYS16QS1aMC05Xy4rLV0pK1xcQCgoW2EtekEtWjAtOS1dKStcXC4pKyhbYS16QS1aMC05XXsyLDR9KSskLywgLy8g0J/RgNC+0LLQtdGA0LrQsCDQutC+0YDRgNC10LrRgtC90L7RgdGC0LggZW1haWxcbiAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3JQbGFjZW1lbnQ6IGZ1bmN0aW9uIChlcnJvciwgZWxlbWVudCkge30sXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgJCgnW2hlYWRlckJ0bl9KU10nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgbWVudUNsb3NlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIG1lbnVPcGVuKCk7XG4gICAgfSk7XG5cdCQoJy5oZWFkZXJfX21vYi13cmFwIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQoJ1toZWFkZXJCdG5fSlNdJykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICBtZW51Q2xvc2UoKTtcblx0XHR9XG4gIH0pO1xuXG5cblxuICBmdW5jdGlvbiBzbGlkZVRvZ2dsZVNlY3Rpb24oKSB7XG4gICAgJCgnW3RvZ2dsZUl0ZW1fSlNdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICQodGhpcykuc2libGluZ3MoKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJCh3aW5kb3cpLm91dGVyV2lkdGgoKSA8IDk5Mikge1xuICAgICAgICAgICQodGhpcykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkKHRoaXMpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmKCQod2luZG93KS5vdXRlcldpZHRoKCkgPCA5OTIpIHtcbiAgICAgICQoJy5wcm9kdWN0LWNhcmQgW3RvZ2dsZUl0ZW1fSlNdJykuZmlyc3QoKS5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgJCgnLnByb2R1Y3QtY2FyZCBbdG9nZ2xlSXRlbV9KU10nKS5maXJzdCgpLnNpYmxpbmdzKCkucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgJCgnW3RvZ2dsZUl0ZW1fSlNdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAkKHRoaXMpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCQod2luZG93KS5vdXRlcldpZHRoKCkgPCA5OTIpIHtcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCkuc2xpZGVUb2dnbGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIHNsaWRlVG9nZ2xlU2VjdGlvbigpO1xuXG5cblxuICAvLyBEcm9wZG93blxuICBmdW5jdGlvbiByaWdodERyb3Bkb3duKCkge1xuICAgICQoJy5tZW51X19pdGVtLmRyb3Bkb3duJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHN1Ym1lbnUgPSAkKHRoaXMpLmZpbmQoJy5zdWJtZW51Jyk7XG4gICAgICB2YXIgJG9mZnNldFRvTGVmdCA9ICRzdWJtZW51Lm9mZnNldCgpLmxlZnQgKyAkc3VibWVudS5vdXRlcldpZHRoKCk7XG4gICAgICBpZiAoJCh3aW5kb3cpLm91dGVyV2lkdGgoKSA+IDk5Mikge1xuICAgICAgICBpZigkb2Zmc2V0VG9MZWZ0ID4gJCh3aW5kb3cpLm91dGVyV2lkdGgoKSkge1xuICAgICAgICAgICRzdWJtZW51LmNzcygndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVgoLSR7JG9mZnNldFRvTGVmdCAtICQod2luZG93KS5vdXRlcldpZHRoKCkgKyAzMH1weClgKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJHN1Ym1lbnUucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByaWdodERyb3Bkb3duKCk7XG5cbiAgbGV0IHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLm91dGVyV2lkdGgoKTtcbiAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJCh3aW5kb3cpLm91dGVyV2lkdGgoKSAhPT0gd2luZG93V2lkdGgpIHtcbiAgICAgIHJpZ2h0RHJvcGRvd24oKTtcbiAgICAgIHNsaWRlVG9nZ2xlU2VjdGlvbigpO1xuICAgIH1cbiAgfSk7XG5cblxuICAgICQoJy5tZW51X19pdGVtLmRyb3Bkb3duJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoJCh3aW5kb3cpLm91dGVyV2lkdGgoKSA+IDk5Mikge1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgJCh0aGlzKS5maW5kKCcuc3VibWVudScpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAkKCcubWVudV9faXRlbS5kcm9wZG93bicpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCQod2luZG93KS5vdXRlcldpZHRoKCkgPiA5OTIpIHtcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICQodGhpcykuZmluZCgnLnN1Ym1lbnUnKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcuY2F0ZWdvcmllcy1zaWRlX19pdGVtJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgIGlmKCQodGhpcykuZmluZCgnLnN1YmNhdGVnb3J5LXNpZGUnKSkge1xuICAgICAgICAkKHRoaXMpLmZpbmQoJy5zdWJjYXRlZ29yeS1zaWRlJykuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgfVxuICAgIH0pO1xuICAgICQoJy5jYXRlZ29yaWVzLXNpZGVfX2l0ZW0nKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIGlmKCQodGhpcykuZmluZCgnLnN1YmNhdGVnb3J5LXNpZGUnKSkge1xuICAgICAgICAgICQodGhpcykuZmluZCgnLnN1YmNhdGVnb3J5LXNpZGUnKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJy5tZW51X19kcm9wZG93bi1idG4nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgJCh0aGlzKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoJCh3aW5kb3cpLm91dGVyV2lkdGgoKSA8PSA5OTIpIHtcbiAgICAgICAgICB2YXIgJGlzT3BlbiA9ICQodGhpcykuY2xvc2VzdCgnLm1lbnVfX2l0ZW0uZHJvcGRvd24nKS5oYXNDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgaWYoJGlzT3Blbikge1xuICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcubWVudV9faXRlbS5kcm9wZG93bicpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJy5zdWJtZW51JykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLnN1Ym1lbnUnKS5zbGlkZVVwKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnLm1lbnVfX2l0ZW0uZHJvcGRvd24nKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCcuc3VibWVudScpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJy5zdWJtZW51Jykuc2xpZGVEb3duKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgJCgnLmNhdGFsb2ctbW9iLXN1Ym1lbnVfX21lbnUnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICQodGhpcykuY2hpbGRyZW4oJy5tZW51X19pdGVtLmRyb3Bkb3duJykuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICQodGhpcykuY2hpbGRyZW4oJy5tZW51X19pdGVtLmRyb3Bkb3duJykuZmluZCgnLnN1Ym1lbnUnKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gIH0pXG5cbiAgICAkKCdbbG9hZE1vcmVCdG5fSlNdJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ1tsb2FkTW9yZUNvbnRhaW5lcl9KU10nKS5hZGRDbGFzcygnbWQtYWxsLWl0ZW1zLXZpc2libGUnKTtcbiAgICB9KTtcblxuZnVuY3Rpb24gbWVudU9wZW4oKSB7XG4gICAgJCgnW2hlYWRlckJ0bl9KU10nKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgJCgnW2hlYWRlckJ0bl9KU10nKS5jbG9zZXN0KCdoZWFkZXInKS5maW5kKCcuaGVhZGVyX19tb2Itd3JhcCcpLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgJCgnaHRtbCcpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG59XG5mdW5jdGlvbiBtZW51Q2xvc2UoKSB7XG4gICAgJCgnW2hlYWRlckJ0bl9KU10nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgJCgnW2hlYWRlckJ0bl9KU10nKS5jbG9zZXN0KCdoZWFkZXInKS5maW5kKCcuaGVhZGVyX19tb2Itd3JhcCcpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgJCgnaHRtbCcpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG59XG5mdW5jdGlvbiBjYXRhbG9nTWVudU9wZW4oKSB7XG4gICQoJy5jYXRhbG9nLW1vYi1tZW51JykuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgJCgnaHRtbCcpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG59XG5mdW5jdGlvbiBjYXRhbG9nTWVudUNsb3NlKCkge1xuICAkKCcuY2F0YWxvZy1tb2ItbWVudScpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICQoJ2h0bWwnKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xufVxuXG4kKCdbaGVhZGVyQ2F0YWxvZ0J0bl9KU10nKS5vbignY2xpY2snLCAoZSkgPT4ge1xuICBjYXRhbG9nTWVudU9wZW4oKTtcbn0pO1xuJCgnW2hlYWRlckNhdGFsb2dDbG9zZUJ0bl9KU10nKS5vbignY2xpY2snLCAoZSkgPT4ge1xuICAkKCcuY2F0YWxvZy1tb2ItbWVudV9fc3VibWVudScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICB9KTtcbiAgY2F0YWxvZ01lbnVDbG9zZSgpO1xufSk7XG4kKCcuY2F0YWxvZy1tb2ItbWVudV9fYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICQodGhpcykubmV4dCgnLmNhdGFsb2ctbW9iLXN1Ym1lbnUnKS5hZGRDbGFzcygnb3BlbicpO1xufSk7XG4kKCcuY2F0YWxvZy1tb2ItbWVudV9fYmFjaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAkKHRoaXMpLnBhcmVudHMoJy5jYXRhbG9nLW1vYi1zdWJtZW51JykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbn0pO1xuJCgnLnNlY3Rpb24tY2F0YWxvZ19fZmlsdGVycy1vcGVuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICQoJy5zZWN0aW9uLWNhdGFsb2dfX2ZpbHRlcnMtbW9iLXdyYXAnKS5hZGRDbGFzcygnb3BlbicpO1xuICAkKCdodG1sJykuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcbn0pO1xuJCgnLnNlY3Rpb24tY2F0YWxvZ19fZmlsdGVycy1tb2ItYmFjaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAkKCcuc2VjdGlvbi1jYXRhbG9nX19maWx0ZXJzLW1vYi13cmFwJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgJCgnaHRtbCcpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG59KTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW3BvcHVwT3Blbl0nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHBvcHVwQ2xvc2UoKTtcbiAgICAgICAgdmFyICRlbGVtID0gJCh0aGlzKSxcbiAgICAgICAgICAgIHRhcmdldCA9ICRlbGVtLmF0dHIoJ3BvcHVwT3BlbicpO1xuXG4gICAgICAgIGlmICh0YXJnZXQgPT0gJ3Byb21vdGlvbi1wb3B1cCcgfHwgdGFyZ2V0ID09ICdzZXJ2aWNlLXBvcHVwJyB8fCB0YXJnZXQgPT0gJ3Byb2R1Y3QtcG9wdXAnKSB7XG4gICAgICAgICAgICB2YXIgaWQgPSAkZWxlbS5hdHRyKCdkYXRhLWhpZGRlbi1pZCcpO1xuXG4gICAgICAgICAgICAkKCdbcG9wdXBJRD1cIicgKyB0YXJnZXQgKyAnXCJdJykuZmluZCgnW2hpZGRlblZhbHVlX0pTXScpLmF0dHIoJ3ZhbHVlJywgaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcG9wdXBPcGVuKHRhcmdldCk7XG4gICAgfSk7XG5cblxuXG4gICAgdmFyICRhZ3JlZW1lbnRDb250cm9sID0gJCgnW2FncmVlbWVudENvbnRyb2xfSlNdJyksXG4gICAgICAgICRmb3JtID0gJGFncmVlbWVudENvbnRyb2wuY2xvc2VzdCgnZm9ybScpLFxuICAgICAgICAkaW5wdXQgPSAkZm9ybS5maW5kKCdbYWdyZWVtZW50Q29udHJvbENoZWNrYm94X0pTXScpLFxuICAgICAgICAkYnRuID0gJGZvcm0uZmluZCgnW2FncmVlbWVudENvbnRyb2xCdG5fSlNdJyk7XG4gICAgaWYgKCRhZ3JlZW1lbnRDb250cm9sLmhhc0NsYXNzKCdjaGVja2VkJykpIHtcbiAgICAgICAgJGFncmVlbWVudENvbnRyb2wucmVtb3ZlQ2xhc3MoJ2NoZWNrZWQnKTtcbiAgICAgICAgJGlucHV0LnJlbW92ZUF0dHIoJ2NoZWNrZWQnKTtcbiAgICAgICAgJGJ0bi5hZGRDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgICAgJGJ0bi5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgIH1cblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW3BvcHVwQ2xvc2VfSlNdJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBwb3B1cENsb3NlKCk7XG4gICAgfSk7XG5cbiAgICAkKCdib2R5JykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZG93bmxvYWQtcG9wdXAtdHJpZ2dlclwiPjwvZGl2PicpO1xuXG4gICAgJCgnYm9keSAuZG93bmxvYWQtcG9wdXAtdHJpZ2dlcicpLmhvdmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZG93bmxvYWRQb3B1cFN0YXRlJykgPT09ICd0cnVlJykge1xuICAgICAgICBwb3B1cE9wZW4oJ2Rvd25sb2FkLXBvcHVwJyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkb3dubG9hZFBvcHVwU3RhdGUnLCAnZmFsc2UnKTtcbiAgICAgIH07XG4gICAgfSk7XG5cblxuXG4kKCcuaGVhZGVyX19tYXJrZXRwbGFjZS1saW5rcy1idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgJCgnLm1hcmtldHBsYWNlLWxpbmtzLnNlbGVjdGVkJykudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xufSk7XG5cbiQoJy5oZWFkZXJfX2xhbmctYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgJCh0aGlzKS50b2dnbGVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICQoJy5oZWFkZXJfX2xhbmctZHJvcGRvd24tY29udGVudCcpLnRvZ2dsZUNsYXNzKCdpcy1hY3RpdmUnKTtcbn0pO1xuXG4kKCdib2R5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgaWYoJCgnLmhlYWRlcl9fbGFuZy1kcm9wZG93bi1jb250ZW50JykuaGFzQ2xhc3MoJ2lzLWFjdGl2ZScpICYmICEoJChlLnRhcmdldCkuY2xvc2VzdCgkKCcuaGVhZGVyX19sYW5nJykpLmxlbmd0aCkpIHtcbiAgICBjb25zb2xlLmxvZygkKGUudGFyZ2V0KSlcbiAgICAkKCcuaGVhZGVyX19sYW5nLWRyb3Bkb3duLWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgJCgnLmhlYWRlcl9fbGFuZy1idG4nKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gIH1cbn0pO1xuXG4kKCdib2R5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgaWYoJCgnLm1hcmtldHBsYWNlLWxpbmtzLnNlbGVjdGVkJykuaGFzQ2xhc3MoJ2lzLWFjdGl2ZScpICYmICEoJChlLnRhcmdldCkuY2xvc2VzdCgkKCcuaGVhZGVyX19tYXJrZXRwbGFjZS1saW5rcy13cmFwJykpLmxlbmd0aCkpIHtcbiAgICAkKCcubWFya2V0cGxhY2UtbGlua3Muc2VsZWN0ZWQnKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgJCgnLmhlYWRlcl9fbWFya2V0cGxhY2UtbGlua3MtYnRuJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICB9XG59KTtcblxuJCgnLmhlYWRlcl9fc2VhcmNoLW9wZW4nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgJCgnLmhlYWRlcl9fc2VhcmNoLXdyYXAnKS5hZGRDbGFzcygnb3BlbicpO1xufSk7XG4kKCcuaGVhZGVyX19zZWFyY2gtY2xvc2UtYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICQoJy5oZWFkZXJfX3NlYXJjaC13cmFwJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgJCh0aGlzKS5wYXJlbnRzKCcuaGVhZGVyX19zZWFyY2gtd3JhcCcpLmZpbmQoJ2lucHV0JykudmFsKCcnKTtcbn0pO1xuXG5cbmNvbnN0IHNhdmVkTGFuZ3VhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VsZWN0ZWRMYW5ndWFnZScpO1xuaWYgKHNhdmVkTGFuZ3VhZ2UpIHtcbiAgJChgLmhlYWRlcl9fbGFuZyBpbnB1dFtuYW1lPVwibGFuZ1wiXVt2YWx1ZT1cIiR7c2F2ZWRMYW5ndWFnZX1cIl1gKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICQoJy5oZWFkZXJfX2xhbmctYnRuJykudGV4dChgJHtzYXZlZExhbmd1YWdlfWApO1xuICAvLyAkKCcuaGVhZGVyX19sYW5nJykudmFsKGAke3NhdmVkTGFuZ3VhZ2V9YCkubmljZVNlbGVjdCgndXBkYXRlJyk7XG4gIC8vINCj0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INCy0YvQsdGA0LDQvdC90YvQuSDRj9C30YvQuiDQsiDRgNCw0LTQuNC+0LrQvdC+0L/QutCw0YVcbiAgJChgaW5wdXRbbmFtZT1cImxhbmctY2hvb3NlXCJdW3ZhbHVlPVwiJHtzYXZlZExhbmd1YWdlfVwiXWApLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgJCgnLmhlYWRlcl9fbGFuZy1tb2InKS5kYXRhKCdsYW5nJywgc2F2ZWRMYW5ndWFnZSk7XG4gICQoJy5oZWFkZXJfX2xhbmctbW9iJykudGV4dChzYXZlZExhbmd1YWdlKTtcbiAgJCgnLmhlYWRlcl9fbWFya2V0cGxhY2UtbGlua3MnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gIH0pO1xuICAkKGAuaGVhZGVyX19tYXJrZXRwbGFjZS1saW5rc1tkYXRhLWxhbmc9XCIke3NhdmVkTGFuZ3VhZ2UudG9Mb3dlckNhc2UoKX1cIl1gKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgJChgLmhlYWRlcl9fbWFya2V0cGxhY2UtbGlua3NbZGF0YS1sYW5nPVwiJHtzYXZlZExhbmd1YWdlfVwiXWApLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICAkKCcuc2VjdGlvbi13aGVyZS1vbmxpbmVfX21hcmtldHBsYWNlcy1saXN0JykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAkKHRoaXMpLmhpZGUoKTtcbiAgfSk7XG4gICQoYC5zZWN0aW9uLXdoZXJlLW9ubGluZV9fbWFya2V0cGxhY2VzLWxpc3RbZGF0YS1sYW5nPVwiJHtzYXZlZExhbmd1YWdlfVwiXWApLmZhZGVJbigpO1xuICAkKGAuc2VjdGlvbi13aGVyZS1vbmxpbmVfX21hcmtldHBsYWNlcy1saXN0W2RhdGEtbGFuZz1cIiR7c2F2ZWRMYW5ndWFnZS50b0xvd2VyQ2FzZSgpfVwiXWApLmZhZGVJbigpO1xufSBlbHNlIHtcbiAgcG9wdXBPcGVuKCdyZWdpb24nKTtcbiAgJCgnLnJlZ2lvbi1wb3B1cF9fYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbGFuZyA9ICAkKCcubGFuZy1jaG9vc2VfX3JhZGlvLWJ0bi1sYWJlbCBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCcpLnZhbCgpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZWxlY3RlZExhbmd1YWdlJywgbGFuZyk7XG4gICAgJChgLmhlYWRlcl9fbGFuZyBpbnB1dFtuYW1lPVwibGFuZ1wiXVt2YWx1ZT1cIiR7bGFuZ31cIl1gKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgJCgnLmhlYWRlcl9fbGFuZy1idG4nKS50ZXh0KGAke2xhbmd9YCk7XG4gICAgLy8gJCgnc2VsZWN0LmhlYWRlcl9fbGFuZycpLnZhbChgJHtsYW5nfWApLmNoYW5nZSgpO1xuICAgIC8vICQoJy5oZWFkZXJfX2xhbmcnKS52YWwoYCR7bGFuZ31gKS5uaWNlU2VsZWN0KCd1cGRhdGUnKTtcbiAgICAkKGBpbnB1dFtuYW1lPVwibGFuZy1jaG9vc2VcIl1bdmFsdWU9XCIke2xhbmd9XCJdYCkucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuICAgICQoJy5oZWFkZXJfX2xhbmctbW9iJykuZGF0YSgnbGFuZycsIGxhbmcpO1xuICAgICQoJy5oZWFkZXJfX2xhbmctbW9iJykudGV4dChsYW5nKTtcbiAgICAkKCcuaGVhZGVyX19tYXJrZXRwbGFjZS1saW5rcycpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgIH0pO1xuICAgICQoYC5oZWFkZXJfX21hcmtldHBsYWNlLWxpbmtzW2RhdGEtbGFuZz1cIiR7bGFuZ31cIl1gKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAkKGAuaGVhZGVyX19tYXJrZXRwbGFjZS1saW5rc1tkYXRhLWxhbmc9XCIke2xhbmcudG9Mb3dlckNhc2UoKX1cIl1gKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAkKCcuc2VjdGlvbi13aGVyZS1vbmxpbmVfX21hcmtldHBsYWNlcy1saXN0JykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICQodGhpcykuaGlkZSgpO1xuICAgIH0pO1xuICAgICQoYC5zZWN0aW9uLXdoZXJlLW9ubGluZV9fbWFya2V0cGxhY2VzLWxpc3RbZGF0YS1sYW5nPVwiJHtsYW5nfVwiXWApLmZhZGVJbigpO1xuICAgICQoYC5zZWN0aW9uLXdoZXJlLW9ubGluZV9fbWFya2V0cGxhY2VzLWxpc3RbZGF0YS1sYW5nPVwiJHtsYW5nLnRvTG93ZXJDYXNlKCl9XCJdYCkuZmFkZUluKCk7XG4gIH0pO1xuICBpZigkKHdpbmRvdykub3V0ZXJXaWR0aCgpID49IDc2Nykge1xuICAgICQoJ2h0bWwnKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICB9XG59XG5cbi8vINCh0L7RhdGA0LDQvdC10L3QuNC1INCy0YvQsdGA0LDQvdC90L7Qs9C+INGP0LfRi9C60LAg0LIgbG9jYWxTdG9yYWdlINC/0YDQuCDQuNC30LzQtdC90LXQvdC40Lgg0YHQtdC70LXQutGC0LBcbiQoYC5oZWFkZXJfX2xhbmcgaW5wdXRbbmFtZT1cImxhbmdcIl1gKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHNlbGVjdGVkTGFuZyA9ICQodGhpcykudmFsKCk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZWxlY3RlZExhbmd1YWdlJywgc2VsZWN0ZWRMYW5nKTtcbiAgJCgnLmhlYWRlcl9fbGFuZy1idG4nKS50ZXh0KGAke3NlbGVjdGVkTGFuZ31gKTtcbiAgJCgnLmhlYWRlcl9fbGFuZy1kcm9wZG93bi1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAkKCcuaGVhZGVyX19sYW5nLWJ0bicpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgJCgnLmhlYWRlcl9fbWFya2V0cGxhY2UtbGlua3MnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gIH0pO1xuICAkKGBpbnB1dFtuYW1lPVwibGFuZy1jaG9vc2VcIl1bdmFsdWU9XCIke3NlbGVjdGVkTGFuZ31cIl1gKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICQoJy5oZWFkZXJfX2xhbmctbW9iJykuZGF0YSgnbGFuZycsIHNlbGVjdGVkTGFuZyk7XG4gICQoJy5oZWFkZXJfX2xhbmctbW9iJykudGV4dChzZWxlY3RlZExhbmcpO1xuICAkKGAuaGVhZGVyX19tYXJrZXRwbGFjZS1saW5rc1tkYXRhLWxhbmc9XCIke3NlbGVjdGVkTGFuZ31cIl1gKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgJChgLmhlYWRlcl9fbWFya2V0cGxhY2UtbGlua3NbZGF0YS1sYW5nPVwiJHtzZWxlY3RlZExhbmcudG9Mb3dlckNhc2UoKX1cIl1gKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgJCgnLnNlY3Rpb24td2hlcmUtb25saW5lX19tYXJrZXRwbGFjZXMtbGlzdCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgJCh0aGlzKS5oaWRlKCk7XG4gIH0pO1xuICAkKGAuc2VjdGlvbi13aGVyZS1vbmxpbmVfX21hcmtldHBsYWNlcy1saXN0W2RhdGEtbGFuZz1cIiR7c2VsZWN0ZWRMYW5nfVwiXWApLmZhZGVJbigpO1xuICAkKGAuc2VjdGlvbi13aGVyZS1vbmxpbmVfX21hcmtldHBsYWNlcy1saXN0W2RhdGEtbGFuZz1cIiR7c2VsZWN0ZWRMYW5nLnRvTG93ZXJDYXNlKCl9XCJdYCkuZmFkZUluKCk7XG59KTtcbi8vINCe0LHRgNCw0LHQvtGC0YfQuNC6INC60LvQuNC60LAg0LTQu9GPINGA0LDQtNC40L7QutC90L7Qv9C+0LpcbiQoJy5sYW5nLWNob29zZV9fcmFkaW8tYnRuLWxhYmVsIGlucHV0W3R5cGU9XCJyYWRpb1wiXScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgY29uc3Qgc2VsZWN0ZWRMYW5nID0gJCh0aGlzKS52YWwoKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlbGVjdGVkTGFuZ3VhZ2UnLCBzZWxlY3RlZExhbmcpOyAvLyDQodC+0YXRgNCw0L3Rj9C10Lwg0LLRi9Cx0YDQsNC90L3Ri9C5INGP0LfRi9C6XG4gICQoYC5oZWFkZXJfX2xhbmcgaW5wdXRbbmFtZT1cImxhbmdcIl1bdmFsdWU9XCIke3NlbGVjdGVkTGFuZ31cIl1gKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICQoJy5oZWFkZXJfX2xhbmctYnRuJykudGV4dChgJHtzZWxlY3RlZExhbmd9YCk7XG4gIC8vICQoJ3NlbGVjdC5oZWFkZXJfX2xhbmcnKS52YWwoYCR7c2VsZWN0ZWRMYW5nfWApLmNoYW5nZSgpO1xuICAvLyAkKCcuaGVhZGVyX19sYW5nJykudmFsKHNlbGVjdGVkTGFuZykubmljZVNlbGVjdCgndXBkYXRlJyk7IC8vINCe0LHQvdC+0LLQu9GP0LXQvCDRgdC10LvQtdC60YLQvtGAXG4gICQoJy5oZWFkZXJfX21hcmtldHBsYWNlLWxpbmtzJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICB9KTtcbiAgJCgnLnNlY3Rpb24td2hlcmUtb25saW5lX19tYXJrZXRwbGFjZXMtbGlzdCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgJCh0aGlzKS5oaWRlKCk7XG4gIH0pO1xuICAkKGAuc2VjdGlvbi13aGVyZS1vbmxpbmVfX21hcmtldHBsYWNlcy1saXN0W2RhdGEtbGFuZz1cIiR7c2VsZWN0ZWRMYW5nfVwiXWApLmZhZGVJbigpO1xuICAkKGAuc2VjdGlvbi13aGVyZS1vbmxpbmVfX21hcmtldHBsYWNlcy1saXN0W2RhdGEtbGFuZz1cIiR7c2VsZWN0ZWRMYW5nLnRvTG93ZXJDYXNlKCl9XCJdYCkuZmFkZUluKCk7XG4gICQoJy5oZWFkZXJfX2xhbmctbW9iJykuZGF0YSgnbGFuZycsIHNlbGVjdGVkTGFuZyk7XG4gICQoJy5oZWFkZXJfX2xhbmctbW9iJykudGV4dChzZWxlY3RlZExhbmcpO1xuICAkKGAuaGVhZGVyX19tYXJrZXRwbGFjZS1saW5rc1tkYXRhLWxhbmc9XCIke3NlbGVjdGVkTGFuZ31cIl1gKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgJChgLmhlYWRlcl9fbWFya2V0cGxhY2UtbGlua3NbZGF0YS1sYW5nPVwiJHtzZWxlY3RlZExhbmcudG9Mb3dlckNhc2UoKX1cIl1gKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgcG9wdXBDbG9zZSgpO1xufSk7XG5cblxuJCgnLnNlY3Rpb24td2hlcmUtb2ZmbGluZS10YWInKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgJCh0aGlzKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAkKCcuc2VjdGlvbi13aGVyZS1vZmZsaW5lLXRhYicpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgfSk7XG4gICAgJCgnLndoZXJlLW9mZmxpbmUtdGFic19faXRlbScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKHRoaXMpLmhpZGUoKTtcbiAgICB9KTtcbiAgICB2YXIgJHBhdGggPSAkKHRoaXMpLmF0dHIoJ2RhdGEtcGF0aCcpO1xuICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIHZhciAkY3VyVGFiQ29udGVudCA9ICQoYC53aGVyZS1vZmZsaW5lLXRhYnNfX2l0ZW1bZGF0YS10YXJnZXQ9JHskcGF0aH1dYCk7XG4gICAgJGN1clRhYkNvbnRlbnQuZmFkZUluKCk7XG4gICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgc2Nyb2xsVG9wOiAkY3VyVGFiQ29udGVudC5vZmZzZXQoKS50b3AgLSAkKCcuaGVhZGVyJykub3V0ZXJIZWlnaHQoKSAtICQodGhpcykub3V0ZXJIZWlnaHQoKVxuICAgIH0sIDMwMCk7XG4gIH0pXG59KTtcblxufSk7XG5cbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZG93bmxvYWRQb3B1cFN0YXRlJykgPT09IG51bGwpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZG93bmxvYWRQb3B1cFN0YXRlJywgJ3RydWUnKVxufVxuXG52YXIgZ2FsbGVyeVRodW1ic1N3aXBlciA9IG5ldyBTd2lwZXIoJy5wcm9kdWN0LXBvcHVwX19nYWxsZXJ5LXN3aXBlci10aHVtYnMnLCB7XG4gIC8vIGxvb3A6IHRydWUsXG4gIGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyxcbiAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgc2xpZGVzUGVyVmlldzogNCxcbiAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgc2Nyb2xsYmFyOiB7XG4gICAgZWw6IFwiLnN3aXBlci1zY3JvbGxiYXJcIixcbiAgICBoaWRlOiBmYWxzZSxcbiAgICBkcmFnZ2FibGU6IHRydWUsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgNzY3OiB7XG4gICAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICB9XG4gIH0sXG4gIG9uOiB7XG4gICAgcmVzaXplOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuICB9XG59KTtcbnZhciBnYWxsZXJ5U3dpcGVyID0gbmV3IFN3aXBlcignLnByb2R1Y3QtcG9wdXBfX2dhbGxlcnktc3dpcGVyLWxhcmdlJywge1xuICAvLyBsb29wOiB0cnVlLFxuICBzcGFjZUJldHdlZW46IDEwLFxuICB0aHVtYnM6IHtcbiAgICBzd2lwZXI6IGdhbGxlcnlUaHVtYnNTd2lwZXIsXG4gIH0sXG59KTtcblxuXG4kKCcuc2luZ2xlLXByb2R1Y3RfX2FjY29yZGlvbi1idG4nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAkKHRoaXMpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQodGhpcykubmV4dCgpLnNsaWRlVG9nZ2xlKCk7XG4gIH0pO1xufSk7XG5cbiQoJy5mYXEtYmxvY2tfX2xpc3QtYnRuJykuZWFjaChmdW5jdGlvbigpIHtcbiAgJCh0aGlzKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAkKHRoaXMpLm5leHQoKS5zbGlkZVRvZ2dsZSgpO1xuICAgIC8vIGlmKCQodGhpcykucGFyZW50cygnLmZhcS1ibG9ja19fbGlzdC1pdGVtJykuZmluZCgnLnNlY3Rpb24tc2VydGlmaWNhdGVzX19zd2lwZXInKSkge1xuICAgIC8vICAgbGV0IHNlcnRpZmljYXRlU3dpcGVyID0gJCh0aGlzKS5wYXJlbnRzKCcuZmFxLWJsb2NrX19saXN0LWl0ZW0nKS5maW5kKCcuc2VjdGlvbi1zZXJ0aWZpY2F0ZXNfX3N3aXBlcicpWzBdLnN3aXBlcjtcbiAgICAvLyAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgIHNlcnRpZmljYXRlU3dpcGVyLnVwZGF0ZSgpO1xuICAgIC8vICAgfSwgMzAwKTtcbiAgICAvLyB9XG4gIH0pO1xufSk7XG5cblxuXG52YXIgcG9wdXBDbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAkKCcucG9wdXAub3BlbicpLmZpbmQoJ2lucHV0Om5vdChbbmFtZT1cImxhbmctY2hvb3NlXCJdKScpLnZhbCgnJyk7XG4gICAgJCgnLnBvcHVwLm9wZW4nKS5maW5kKCd0ZXh0YXJlYScpLnZhbCgnJyk7XG4gICAgJCgnLnBvcHVwLm9wZW4nKS5maW5kKCcuZm9ybS1maWxlJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICB2YXIgdGV4dCA9ICQodGhpcykuYXR0cignZGF0YS10ZXh0Jyk7XG5cbiAgICAgICAgJCh0aGlzKS5maW5kKCdkaXYgcCcpLnRleHQodGV4dCk7XG4gICAgfSk7XG4gICAgJCgnLnBvcHVwLm9wZW4nKS5maW5kKCcuZm9ybS1zdGFycyBsYWJlbDpsYXN0LWNoaWxkJykudHJpZ2dlcignY2xpY2snKTtcbiAgICAkKCcucG9wdXAgLnZhbGlkYXRlX2Vycm9yJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3ZhbGlkYXRlX2Vycm9yJyk7XG4gICAgfSk7XG4gICAgJCgnaHRtbCcpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgJCgnLnBvcHVwLm9wZW4nKS5hZGRDbGFzcygnZmFkZScpO1xuICAgICQoJy5wb3B1cC5vcGVuJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbn07XG5cbnZhciBwb3B1cE9wZW4gPSBmdW5jdGlvbiAoZSkge1xuICAgIHBvcHVwQ2xvc2UoKTtcbiAgICB2YXIgdGFyZ2V0ID0gZTtcbiAgICB2YXIgd2lkdGggPSAkKCcucGFnZScpLndpZHRoKCk7XG5cbiAgICAkKCdodG1sJykuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcbiAgICAkKCdbcG9wdXBJRD1cIicgKyB0YXJnZXQgKyAnXCJdJykuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAkKCdbcG9wdXBJRD1cIicgKyB0YXJnZXQgKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ2ZhZGUnKTtcbiAgICBpZigkKCdbcG9wdXBJRD1cIicgKyB0YXJnZXQgKyAnXCJdJykuaGFzQ2xhc3MoJ3Byb2R1Y3QtcG9wdXAnKSkge1xuICAgICAgLy8gY2xlYXJUaW1lb3V0KGdhbGxlcnlUaHVtYnNTd2lwZXJVcGRhdGVUaW1lb3V0KTtcbiAgICAgIGdhbGxlcnlUaHVtYnNTd2lwZXIudXBkYXRlKCk7XG4gICAgICBpZigkKHdpbmRvdykub3V0ZXJXaWR0aCgpIDw9IDc2Nykge1xuICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBnYWxsZXJ5VGh1bWJzU3dpcGVyLnVwZGF0ZSgpO1xuICAgICAgICB9LCAxMCk7XG4gICAgICB9XG4gICAgfVxufTtcblxuXG5cbmZ1bmN0aW9uIGZpeGVkSGVhZGVyKCkge1xuICB2YXIgaGVpZ2h0ID0galF1ZXJ5KHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gIHZhciBoZWFkZXJIZWlnaHQgPSAkKCcuaGVhZGVyJykuaW5uZXJIZWlnaHQoKTtcblx0aWYgKCBoZWlnaHQpIHtcbiAgICAkKCdib2R5JykuYXR0cignc3R5bGUnLCBgcGFkZGluZy10b3A6ICR7aGVhZGVySGVpZ2h0fXB4O2ApO1xuICAgIGpRdWVyeSgnLmhlYWRlcicpLmFkZENsYXNzKCdmaXhlZCcpO1xuICB9IGVsc2Uge1xuICAgIGpRdWVyeSgnLmhlYWRlcicpLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgICQoJ2JvZHknKS5hdHRyKCdzdHlsZScsIGBwYWRkaW5nLXRvcDogMDtgKTtcbiAgfVxufVxuXG5maXhlZEhlYWRlcigpO1xualF1ZXJ5KHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCQpIHtcblx0Zml4ZWRIZWFkZXIoKTtcbn0pO1xuJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcbiAgZml4ZWRIZWFkZXIoKTtcbn0pO1xuXG4kKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xuICB2YXIgcmF0aW8gPSAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSAvICgoJChkb2N1bWVudCkuaGVpZ2h0KCkgLSAkKHdpbmRvdykuaGVpZ2h0KCkpIC8gMTAwKTtcbiAgJCgnLmhlYWRlci1wcm9ncmVzcycpLndpZHRoKHJhdGlvICsgXCIlXCIpO1xufSk7XG5cbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICB2YXIgc2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICBpZiAoc2Nyb2xsID49ICAkKGRvY3VtZW50KS5oZWlnaHQoKSAvIDMpIHtcbiAgICAgICQoJ1t0b1RvcF9KU10nKS5hZGRDbGFzcygndmlzaWJsZScpO1xuICB9IGVsc2Uge1xuICAgICAgJCgnW3RvVG9wX0pTXScpLnJlbW92ZUNsYXNzKCd2aXNpYmxlJyk7XG4gIH07XG5cbiAgJCgnW29uU2Nyb2xsRGlzcGxheV9KU10nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgIGlmIChjb21lKGVsKSkge1xuICAgICAgICAgIGVsLmFkZENsYXNzKCd2aXNpYmxlJyk7XG4gICAgICB9O1xuICB9KTtcbn0pO1xuXG4kKCdpbWcnKS5lYWNoKCBmdW5jdGlvbihlKSB7XG4gICQodGhpcykuYWRkQ2xhc3MoJ2xhenknKTtcbn0pO1xubGV0IGxhenlMb2FkSW5zdGFuY2UgPSBuZXcgTGF6eUxvYWQoKTtcblxuXG5cblxuXG5cbiJdLCJmaWxlIjoiaW5kZXguanMifQ==
