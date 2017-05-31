webpackJsonp([4],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/team_logo_03.jpg";

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_assets_js_cropper_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_assets_js_cropper_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_assets_js_cropper_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

__webpack_require__(6);
__webpack_require__(24);
__webpack_require__(27);

(function (mm, doc) {
    mm.init();
    mm.plusReady(function () {
        // 点击跳转
        mui('.tostartgame_box').on('tap', '.tostartgame_con', function () {
            mui.openWindow({
                url: "match_one.html",
                id: "match_one",
                preload: true
            });
        });
        //结束
        var settings = app.getSettings();

        document.querySelector('form').addEventListener('submit', function (e) {
            e.preventDefault(); // 阻止默认事件
        });

        /*照片相关函数*/
        mui(".face_con").on("tap", "#face_box", function (e) {
            if (mui.os.plus) {
                var a = [{
                    title: "拍照"
                }, {
                    title: "从手机相册选择"
                }];
                plus.nativeUI.actionSheet({
                    title: "修改头像",
                    cancel: "取消",
                    buttons: a
                }, function (b) {
                    switch (b.index) {
                        case 0:
                            break;
                        case 1:
                            getImage();
                            break;
                        case 2:
                            galleryImgs();
                            break;
                        default:
                            break;
                    }
                });
            }
        });

        //拍照
        function getImage() {
            var cmr = plus.camera.getCamera();
            cmr.captureImage(function (p) {
                plus.io.resolveLocalFileSystemURL(p, function (entry) {
                    var localurl = entry.toLocalURL();
                    $("#report").html('<img src="' + localurl + '">');
                    cutImg();
                });
            });
        }

        //相册选取
        function galleryImgs() {
            plus.gallery.pick(function (e) {
                $("#report").html('<img src="' + e.files[0] + '">');
                cutImg();
                /*mui('#face_box').popover('toggle');*/
            }, function (e) {
                //outSet( "取消选择图片" );
            }, { filter: "image", multiple: true });
        }

        function cutImg() {
            $("#showEdit").show();
            var $image = $('#report > img');
            $image.cropper({
                aspectRatio: 1 / 1,
                autoCropArea: 0.8
            });
        }

        mm(".mui-bar").on("tap", "#check_btn", function (e) {
            confirme();
        });

        mui(".mui-bar").on("tap", "#close_btn", function (e) {
            $("#showEdit").fadeOut();
        });

        function confirme() {
            $("#showEdit").fadeOut();
            var $image = $('#report > img');
            var dataURL = $image.cropper('getCroppedCanvas');
            var basecode = dataURL.toDataURL();
            $("#face_box").html(dataURL);
            /*plus.storage.face = dataURL;*/
            plus.storage.setItem('face', dataURL + "");

            /*localStorage.face = dataURL;*/
            /*是储存64还是直接存储canvas还需要再考虑*/
        }
    });
})(mui, document);

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! jQuery v1.11.2 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) {
  "object" == ( false ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
  } : b(a);
}("undefined" != typeof window ? window : this, function (a, b) {
  var c = [],
      d = c.slice,
      e = c.concat,
      f = c.push,
      g = c.indexOf,
      h = {},
      i = h.toString,
      j = h.hasOwnProperty,
      k = {},
      l = "1.11.2",
      m = function m(a, b) {
    return new m.fn.init(a, b);
  },
      n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      o = /^-ms-/,
      p = /-([\da-z])/gi,
      q = function q(a, b) {
    return b.toUpperCase();
  };m.fn = m.prototype = { jquery: l, constructor: m, selector: "", length: 0, toArray: function toArray() {
      return d.call(this);
    }, get: function get(a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
    }, pushStack: function pushStack(a) {
      var b = m.merge(this.constructor(), a);return b.prevObject = this, b.context = this.context, b;
    }, each: function each(a, b) {
      return m.each(this, a, b);
    }, map: function map(a) {
      return this.pushStack(m.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    }, slice: function slice() {
      return this.pushStack(d.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(a) {
      var b = this.length,
          c = +a + (0 > a ? b : 0);return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor(null);
    }, push: f, sort: c.sort, splice: c.splice }, m.extend = m.fn.extend = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
      if (null != (e = arguments[h])) for (d in e) {
        a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
      }
    }return g;
  }, m.extend({ expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
      throw new Error(a);
    }, noop: function noop() {}, isFunction: function isFunction(a) {
      return "function" === m.type(a);
    }, isArray: Array.isArray || function (a) {
      return "array" === m.type(a);
    }, isWindow: function isWindow(a) {
      return null != a && a == a.window;
    }, isNumeric: function isNumeric(a) {
      return !m.isArray(a) && a - parseFloat(a) + 1 >= 0;
    }, isEmptyObject: function isEmptyObject(a) {
      var b;for (b in a) {
        return !1;
      }return !0;
    }, isPlainObject: function isPlainObject(a) {
      var b;if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return !1;try {
        if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (c) {
        return !1;
      }if (k.ownLast) for (b in a) {
        return j.call(a, b);
      }for (b in a) {}return void 0 === b || j.call(a, b);
    }, type: function type(a) {
      return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? h[i.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
    }, globalEval: function globalEval(b) {
      b && m.trim(b) && (a.execScript || function (b) {
        a.eval.call(a, b);
      })(b);
    }, camelCase: function camelCase(a) {
      return a.replace(o, "ms-").replace(p, q);
    }, nodeName: function nodeName(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    }, each: function each(a, b, c) {
      var d,
          e = 0,
          f = a.length,
          g = r(a);if (c) {
        if (g) {
          for (; f > e; e++) {
            if (d = b.apply(a[e], c), d === !1) break;
          }
        } else for (e in a) {
          if (d = b.apply(a[e], c), d === !1) break;
        }
      } else if (g) {
        for (; f > e; e++) {
          if (d = b.call(a[e], e, a[e]), d === !1) break;
        }
      } else for (e in a) {
        if (d = b.call(a[e], e, a[e]), d === !1) break;
      }return a;
    }, trim: function trim(a) {
      return null == a ? "" : (a + "").replace(n, "");
    }, makeArray: function makeArray(a, b) {
      var c = b || [];return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c;
    }, inArray: function inArray(a, b, c) {
      var d;if (b) {
        if (g) return g.call(b, a, c);for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) {
          if (c in b && b[c] === a) return c;
        }
      }return -1;
    }, merge: function merge(a, b) {
      var c = +b.length,
          d = 0,
          e = a.length;while (c > d) {
        a[e++] = b[d++];
      }if (c !== c) while (void 0 !== b[d]) {
        a[e++] = b[d++];
      }return a.length = e, a;
    }, grep: function grep(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
        d = !b(a[f], f), d !== h && e.push(a[f]);
      }return e;
    }, map: function map(a, b, c) {
      var d,
          f = 0,
          g = a.length,
          h = r(a),
          i = [];if (h) for (; g > f; f++) {
        d = b(a[f], f, c), null != d && i.push(d);
      } else for (f in a) {
        d = b(a[f], f, c), null != d && i.push(d);
      }return e.apply([], i);
    }, guid: 1, proxy: function proxy(a, b) {
      var c, e, f;return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function e() {
        return a.apply(b || this, c.concat(d.call(arguments)));
      }, e.guid = a.guid = a.guid || m.guid++, e) : void 0;
    }, now: function now() {
      return +new Date();
    }, support: k }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
    h["[object " + b + "]"] = b.toLowerCase();
  });function r(a) {
    var b = a.length,
        c = m.type(a);return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
  }var s = function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = "sizzle" + 1 * new Date(),
        v = a.document,
        w = 0,
        x = 0,
        y = hb(),
        z = hb(),
        A = hb(),
        B = function B(a, b) {
      return a === b && (l = !0), 0;
    },
        C = 1 << 31,
        D = {}.hasOwnProperty,
        E = [],
        F = E.pop,
        G = E.push,
        H = E.push,
        I = E.slice,
        J = function J(a, b) {
      for (var c = 0, d = a.length; d > c; c++) {
        if (a[c] === b) return c;
      }return -1;
    },
        K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        L = "[\\x20\\t\\r\\n\\f]",
        M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        N = M.replace("w", "w#"),
        O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
        P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
        Q = new RegExp(L + "+", "g"),
        R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
        S = new RegExp("^" + L + "*," + L + "*"),
        T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
        U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
        V = new RegExp(P),
        W = new RegExp("^" + N + "$"),
        X = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M.replace("w", "w*") + ")"), ATTR: new RegExp("^" + O), PSEUDO: new RegExp("^" + P), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") },
        Y = /^(?:input|select|textarea|button)$/i,
        Z = /^h\d$/i,
        $ = /^[^{]+\{\s*\[native \w/,
        _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ab = /[+~]/,
        bb = /'|\\/g,
        cb = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
        db = function db(a, b, c) {
      var d = "0x" + b - 65536;return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    },
        eb = function eb() {
      m();
    };try {
      H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
    } catch (fb) {
      H = { apply: E.length ? function (a, b) {
          G.apply(a, I.call(b));
        } : function (a, b) {
          var c = a.length,
              d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
        } };
    }function gb(a, b, d, e) {
      var f, h, j, k, l, o, r, s, w, x;if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;if (!e && p) {
        if (11 !== k && (f = _.exec(a))) if (j = f[1]) {
          if (9 === k) {
            if (h = b.getElementById(j), !h || !h.parentNode) return d;if (h.id === j) return d.push(h), d;
          } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d;
        } else {
          if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d;
        }if (c.qsa && (!q || !q.test(a))) {
          if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
            o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;while (l--) {
              o[l] = s + rb(o[l]);
            }w = ab.test(a) && pb(b.parentNode) || b, x = o.join(",");
          }if (x) try {
            return H.apply(d, w.querySelectorAll(x)), d;
          } catch (y) {} finally {
            r || b.removeAttribute("id");
          }
        }
      }return i(a.replace(R, "$1"), b, d, e);
    }function hb() {
      var a = [];function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }return b;
    }function ib(a) {
      return a[u] = !0, a;
    }function jb(a) {
      var b = n.createElement("div");try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }function kb(a, b) {
      var c = a.split("|"),
          e = a.length;while (e--) {
        d.attrHandle[c[e]] = b;
      }
    }function lb(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);if (d) return d;if (c) while (c = c.nextSibling) {
        if (c === b) return -1;
      }return a ? 1 : -1;
    }function mb(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
      };
    }function nb(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
      };
    }function ob(a) {
      return ib(function (b) {
        return b = +b, ib(function (c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;while (g--) {
            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
          }
        });
      });
    }function pb(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }c = gb.support = {}, f = gb.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;return b ? "HTML" !== b.nodeName : !1;
    }, m = gb.setDocument = function (a) {
      var b,
          e,
          g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", eb, !1) : e.attachEvent && e.attachEvent("onunload", eb)), p = !f(g), c.attributes = jb(function (a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = jb(function (a) {
        return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = jb(function (a) {
        return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length;
      }), c.getById ? (d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);return c && c.parentNode ? [c] : [];
        }
      }, d.filter.ID = function (a) {
        var b = a.replace(cb, db);return function (a) {
          return a.getAttribute("id") === b;
        };
      }) : (delete d.find.ID, d.filter.ID = function (a) {
        var b = a.replace(cb, db);return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
        };
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
      } : function (a, b) {
        var c,
            d = [],
            e = 0,
            f = b.getElementsByTagName(a);if ("*" === a) {
          while (c = f[e++]) {
            1 === c.nodeType && d.push(c);
          }return d;
        }return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        return p ? b.getElementsByClassName(a) : void 0;
      }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (jb(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), jb(function (a) {
        var b = g.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && jb(function (a) {
        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P);
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) {
          if (b === a) return !0;
        }return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;var c,
            d = 0,
            e = a.parentNode,
            f = b.parentNode,
            h = [a],
            i = [b];if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;if (e === f) return lb(a, b);c = a;while (c = c.parentNode) {
          h.unshift(c);
        }c = b;while (c = c.parentNode) {
          i.unshift(c);
        }while (h[d] === i[d]) {
          d++;
        }return d ? lb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
      }, g) : n;
    }, gb.matches = function (a, b) {
      return gb(a, null, null, b);
    }, gb.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
        var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}return gb(b, n, null, [a]).length > 0;
    }, gb.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, gb.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, gb.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, gb.uniqueSort = function (a) {
      var b,
          d = [],
          e = 0,
          f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) {
          b === a[f] && (e = d.push(f));
        }while (e--) {
          a.splice(d[e], 1);
        }
      }return k = null, a;
    }, e = gb.getText = function (a) {
      var b,
          c = "",
          d = 0,
          f = a.nodeType;if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
            c += e(a);
          }
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) {
        c += e(b);
      }return c;
    }, d = gb.selectors = { cacheLength: 50, createPseudo: ib, match: X, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
          return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        }, CHILD: function CHILD(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || gb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && gb.error(a[0]), a;
        }, PSEUDO: function PSEUDO(a) {
          var b,
              c = !a[6] && a[2];return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        } }, filter: { TAG: function TAG(a) {
          var b = a.replace(cb, db).toLowerCase();return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        }, CLASS: function CLASS(a) {
          var b = y[a + " "];return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(a, b, c) {
          return function (d) {
            var e = gb.attr(d, a);return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
          };
        }, CHILD: function CHILD(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h;if (q) {
              if (f) {
                while (p) {
                  l = b;while (l = l[p]) {
                    if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                  }o = p = "only" === a && !o && "nextSibling";
                }return !0;
              }if (o = [g ? q.firstChild : q.lastChild], g && s) {
                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                  if (1 === l.nodeType && ++m && l === b) {
                    k[a] = [w, n, m];break;
                  }
                }
              } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;
              }return m -= e, m === d || m % d === 0 && m / d >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || gb.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ib(function (a, c) {
            var d,
                f = e(a, b),
                g = f.length;while (g--) {
              d = J(a, f[g]), a[d] = !(c[d] = f[g]);
            }
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        } }, pseudos: { not: ib(function (a) {
          var b = [],
              c = [],
              d = h(a.replace(R, "$1"));return d[u] ? ib(function (a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;while (h--) {
              (f = g[h]) && (a[h] = !(b[h] = f));
            }
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
          };
        }), has: ib(function (a) {
          return function (b) {
            return gb(a, b).length > 0;
          };
        }), contains: ib(function (a) {
          return a = a.replace(cb, db), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }), lang: ib(function (a) {
          return W.test(a || "") || gb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(), function (b) {
            var c;do {
              if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
            } while ((b = b.parentNode) && 1 === b.nodeType);return !1;
          };
        }), target: function target(b) {
          var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
        }, root: function root(a) {
          return a === o;
        }, focus: function focus(a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        }, enabled: function enabled(a) {
          return a.disabled === !1;
        }, disabled: function disabled(a) {
          return a.disabled === !0;
        }, checked: function checked(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
        }, selected: function selected(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        }, empty: function empty(a) {
          for (a = a.firstChild; a; a = a.nextSibling) {
            if (a.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(a) {
          return !d.pseudos.empty(a);
        }, header: function header(a) {
          return Z.test(a.nodeName);
        }, input: function input(a) {
          return Y.test(a.nodeName);
        }, button: function button(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
        }, text: function text(a) {
          var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        }, first: ob(function () {
          return [0];
        }), last: ob(function (a, b) {
          return [b - 1];
        }), eq: ob(function (a, b, c) {
          return [0 > c ? c + b : c];
        }), even: ob(function (a, b) {
          for (var c = 0; b > c; c += 2) {
            a.push(c);
          }return a;
        }), odd: ob(function (a, b) {
          for (var c = 1; b > c; c += 2) {
            a.push(c);
          }return a;
        }), lt: ob(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;) {
            a.push(d);
          }return a;
        }), gt: ob(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;) {
            a.push(d);
          }return a;
        }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      d.pseudos[b] = mb(b);
    }for (b in { submit: !0, reset: !0 }) {
      d.pseudos[b] = nb(b);
    }function qb() {}qb.prototype = d.filters = d.pseudos, d.setFilters = new qb(), g = gb.tokenize = function (a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
        (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(R, " ") }), h = h.slice(c.length));for (g in d.filter) {
          !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
        }if (!c) break;
      }return b ? h.length : h ? gb.error(a) : z(a, i).slice(0);
    };function rb(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) {
        d += a[b].value;
      }return d;
    }function sb(a, b, c) {
      var d = b.dir,
          e = c && "parentNode" === d,
          f = x++;return b.first ? function (b, c, f) {
        while (b = b[d]) {
          if (1 === b.nodeType || e) return a(b, c, f);
        }
      } : function (b, c, g) {
        var h,
            i,
            j = [w, f];if (g) {
          while (b = b[d]) {
            if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
          }
        } else while (b = b[d]) {
          if (1 === b.nodeType || e) {
            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];if (i[d] = j, j[2] = a(b, c, g)) return !0;
          }
        }
      };
    }function tb(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;while (e--) {
          if (!a[e](b, c, d)) return !1;
        }return !0;
      } : a[0];
    }function ub(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) {
        gb(a, b[d], c);
      }return c;
    }function vb(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
        (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      }return g;
    }function wb(a, b, c, d, e, f) {
      return d && !d[u] && (d = wb(d)), e && !e[u] && (e = wb(e, f)), ib(function (f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || ub(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : vb(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
          j = vb(r, n), d(j, [], h, i), k = j.length;while (k--) {
            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
        }if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;while (k--) {
                (l = r[k]) && j.push(q[k] = l);
              }e(null, r = [], j, i);
            }k = r.length;while (k--) {
              (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
            }
          }
        } else r = vb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
      });
    }function xb(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sb(function (a) {
        return a === b;
      }, h, !0), l = sb(function (a) {
        return J(b, a) > -1;
      }, h, !0), m = [function (a, c, d) {
        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
      }]; f > i; i++) {
        if (c = d.relative[a[i].type]) m = [sb(tb(m), c)];else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; f > e; e++) {
              if (d.relative[a[e].type]) break;
            }return wb(i > 1 && tb(m), i > 1 && rb(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(R, "$1"), c, e > i && xb(a.slice(i, e)), f > e && xb(a = a.slice(e)), f > e && rb(a));
          }m.push(c);
        }
      }return tb(m);
    }function yb(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function f(_f, g, h, i, k) {
        var l,
            m,
            o,
            p = 0,
            q = "0",
            r = _f && [],
            s = [],
            t = j,
            u = _f || e && d.find.TAG("*", k),
            v = w += null == t ? 1 : Math.random() || .1,
            x = u.length;for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
          if (e && l) {
            m = 0;while (o = a[m++]) {
              if (o(l, g, h)) {
                i.push(l);break;
              }
            }k && (w = v);
          }c && ((l = !o && l) && p--, _f && r.push(l));
        }if (p += q, c && q !== p) {
          m = 0;while (o = b[m++]) {
            o(r, s, g, h);
          }if (_f) {
            if (p > 0) while (q--) {
              r[q] || s[q] || (s[q] = F.call(i));
            }s = vb(s);
          }H.apply(i, s), k && !_f && s.length > 0 && p + b.length > 1 && gb.uniqueSort(i);
        }return k && (w = v, j = t), r;
      };return c ? ib(f) : f;
    }return h = gb.compile = function (a, b) {
      var c,
          d = [],
          e = [],
          f = A[a + " "];if (!f) {
        b || (b = g(a)), c = b.length;while (c--) {
          f = xb(b[c]), f[u] ? d.push(f) : e.push(f);
        }f = A(a, yb(e, d)), f.selector = a;
      }return f;
    }, i = gb.select = function (a, b, e, f) {
      var i,
          j,
          k,
          l,
          m,
          n = "function" == typeof a && a,
          o = !f && g(a = n.selector || a);if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b) return e;n && (b = b.parentNode), a = a.slice(j.shift().value.length);
        }i = X.needsContext.test(a) ? 0 : j.length;while (i--) {
          if (k = j[i], d.relative[l = k.type]) break;if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && pb(b.parentNode) || b))) {
            if (j.splice(i, 1), a = f.length && rb(j), !a) return H.apply(e, f), e;break;
          }
        }
      }return (n || h(a, o))(f, b, !p, e, ab.test(a) && pb(b.parentNode) || b), e;
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = jb(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"));
    }), jb(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || kb("type|href|height|width", function (a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && jb(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || kb("value", function (a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
    }), jb(function (a) {
      return null == a.getAttribute("disabled");
    }) || kb(K, function (a, b, c) {
      var d;return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), gb;
  }(a);m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;var t = m.expr.match.needsContext,
      u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      v = /^.[^:#\[\.,]*$/;function w(a, b, c) {
    if (m.isFunction(b)) return m.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    });if (b.nodeType) return m.grep(a, function (a) {
      return a === b !== c;
    });if ("string" == typeof b) {
      if (v.test(b)) return m.filter(b, a, c);b = m.filter(b, a);
    }return m.grep(a, function (a) {
      return m.inArray(a, b) >= 0 !== c;
    });
  }m.filter = function (a, b, c) {
    var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, m.fn.extend({ find: function find(a) {
      var b,
          c = [],
          d = this,
          e = d.length;if ("string" != typeof a) return this.pushStack(m(a).filter(function () {
        for (b = 0; e > b; b++) {
          if (m.contains(d[b], this)) return !0;
        }
      }));for (b = 0; e > b; b++) {
        m.find(a, d[b], c);
      }return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c;
    }, filter: function filter(a) {
      return this.pushStack(w(this, a || [], !1));
    }, not: function not(a) {
      return this.pushStack(w(this, a || [], !0));
    }, is: function is(a) {
      return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length;
    } });var x,
      y = a.document,
      z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      A = m.fn.init = function (a, b) {
    var c, d;if (!a) return this;if ("string" == typeof a) {
      if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);if (c[1]) {
        if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b)) for (c in b) {
          m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
        }return this;
      }if (d = y.getElementById(c[2]), d && d.parentNode) {
        if (d.id !== c[2]) return x.find(a);this.length = 1, this[0] = d;
      }return this.context = y, this.selector = a, this;
    }return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this));
  };A.prototype = m.fn, x = m(y);var B = /^(?:parents|prev(?:Until|All))/,
      C = { children: !0, contents: !0, next: !0, prev: !0 };m.extend({ dir: function dir(a, b, c) {
      var d = [],
          e = a[b];while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) {
        1 === e.nodeType && d.push(e), e = e[b];
      }return d;
    }, sibling: function sibling(a, b) {
      for (var c = []; a; a = a.nextSibling) {
        1 === a.nodeType && a !== b && c.push(a);
      }return c;
    } }), m.fn.extend({ has: function has(a) {
      var b,
          c = m(a, this),
          d = c.length;return this.filter(function () {
        for (b = 0; d > b; b++) {
          if (m.contains(this, c[b])) return !0;
        }
      });
    }, closest: function closest(a, b) {
      for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++) {
        for (c = this[d]; c && c !== b; c = c.parentNode) {
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
            f.push(c);break;
          }
        }
      }return this.pushStack(f.length > 1 ? m.unique(f) : f);
    }, index: function index(a) {
      return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(a, b) {
      return this.pushStack(m.unique(m.merge(this.get(), m(a, b))));
    }, addBack: function addBack(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    } });function D(a, b) {
    do {
      a = a[b];
    } while (a && 1 !== a.nodeType);return a;
  }m.each({ parent: function parent(a) {
      var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
    }, parents: function parents(a) {
      return m.dir(a, "parentNode");
    }, parentsUntil: function parentsUntil(a, b, c) {
      return m.dir(a, "parentNode", c);
    }, next: function next(a) {
      return D(a, "nextSibling");
    }, prev: function prev(a) {
      return D(a, "previousSibling");
    }, nextAll: function nextAll(a) {
      return m.dir(a, "nextSibling");
    }, prevAll: function prevAll(a) {
      return m.dir(a, "previousSibling");
    }, nextUntil: function nextUntil(a, b, c) {
      return m.dir(a, "nextSibling", c);
    }, prevUntil: function prevUntil(a, b, c) {
      return m.dir(a, "previousSibling", c);
    }, siblings: function siblings(a) {
      return m.sibling((a.parentNode || {}).firstChild, a);
    }, children: function children(a) {
      return m.sibling(a.firstChild);
    }, contents: function contents(a) {
      return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes);
    } }, function (a, b) {
    m.fn[a] = function (c, d) {
      var e = m.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e);
    };
  });var E = /\S+/g,
      F = {};function G(a) {
    var b = F[a] = {};return m.each(a.match(E) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }m.Callbacks = function (a) {
    a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);var b,
        c,
        d,
        e,
        f,
        g,
        h = [],
        i = !a.once && [],
        j = function j(l) {
      for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++) {
        if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
          c = !1;break;
        }
      }b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable());
    },
        k = { add: function add() {
        if (h) {
          var d = h.length;!function f(b) {
            m.each(b, function (b, c) {
              var d = m.type(c);"function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c);
            });
          }(arguments), b ? e = h.length : c && (g = d, j(c));
        }return this;
      }, remove: function remove() {
        return h && m.each(arguments, function (a, c) {
          var d;while ((d = m.inArray(c, h, d)) > -1) {
            h.splice(d, 1), b && (e >= d && e--, f >= d && f--);
          }
        }), this;
      }, has: function has(a) {
        return a ? m.inArray(a, h) > -1 : !(!h || !h.length);
      }, empty: function empty() {
        return h = [], e = 0, this;
      }, disable: function disable() {
        return h = i = c = void 0, this;
      }, disabled: function disabled() {
        return !h;
      }, lock: function lock() {
        return i = void 0, c || k.disable(), this;
      }, locked: function locked() {
        return !i;
      }, fireWith: function fireWith(a, c) {
        return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this;
      }, fire: function fire() {
        return k.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!d;
      } };return k;
  }, m.extend({ Deferred: function Deferred(a) {
      var b = [["resolve", "done", m.Callbacks("once memory"), "resolved"], ["reject", "fail", m.Callbacks("once memory"), "rejected"], ["notify", "progress", m.Callbacks("memory")]],
          c = "pending",
          d = { state: function state() {
          return c;
        }, always: function always() {
          return e.done(arguments).fail(arguments), this;
        }, then: function then() {
          var a = arguments;return m.Deferred(function (c) {
            m.each(b, function (b, f) {
              var g = m.isFunction(a[b]) && a[b];e[f[1]](function () {
                var a = g && g.apply(this, arguments);a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        }, promise: function promise(a) {
          return null != a ? m.extend(a, d) : d;
        } },
          e = {};return d.pipe = d.then, m.each(b, function (a, f) {
        var g = f[2],
            h = f[3];d[f[1]] = g.add, h && g.add(function () {
          c = h;
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
          return e[f[0] + "With"](this === e ? d : this, arguments), this;
        }, e[f[0] + "With"] = g.fireWith;
      }), d.promise(e), a && a.call(e, e), e;
    }, when: function when(a) {
      var b = 0,
          c = d.call(arguments),
          e = c.length,
          f = 1 !== e || a && m.isFunction(a.promise) ? e : 0,
          g = 1 === f ? a : m.Deferred(),
          h = function h(a, b, c) {
        return function (e) {
          b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
        };
      },
          i,
          j,
          k;if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) {
        c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
      }return f || g.resolveWith(k, c), g.promise();
    } });var H;m.fn.ready = function (a) {
    return m.ready.promise().done(a), this;
  }, m.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
      a ? m.readyWait++ : m.ready(!0);
    }, ready: function ready(a) {
      if (a === !0 ? ! --m.readyWait : !m.isReady) {
        if (!y.body) return setTimeout(m.ready);m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")));
      }
    } });function I() {
    y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J));
  }function J() {
    (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready());
  }m.ready.promise = function (b) {
    if (!H) if (H = m.Deferred(), "complete" === y.readyState) setTimeout(m.ready);else if (y.addEventListener) y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1);else {
      y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);var c = !1;try {
        c = null == a.frameElement && y.documentElement;
      } catch (d) {}c && c.doScroll && !function e() {
        if (!m.isReady) {
          try {
            c.doScroll("left");
          } catch (a) {
            return setTimeout(e, 50);
          }I(), m.ready();
        }
      }();
    }return H.promise(b);
  };var K = "undefined",
      L;for (L in m(k)) {
    break;
  }k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function () {
    var a, b, c, d;c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), _typeof(b.style.zoom) !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d));
  }), function () {
    var a = y.createElement("div");if (null == k.deleteExpando) {
      k.deleteExpando = !0;try {
        delete a.test;
      } catch (b) {
        k.deleteExpando = !1;
      }
    }a = null;
  }(), m.acceptData = function (a) {
    var b = m.noData[(a.nodeName + " ").toLowerCase()],
        c = +a.nodeType || 1;return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b;
  };var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      N = /([A-Z])/g;function O(a, b, c) {
    if (void 0 === c && 1 === a.nodeType) {
      var d = "data-" + b.replace(N, "-$1").toLowerCase();if (c = a.getAttribute(d), "string" == typeof c) {
        try {
          c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c;
        } catch (e) {}m.data(a, b, c);
      } else c = void 0;
    }return c;
  }function P(a) {
    var b;for (b in a) {
      if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
    }return !0;
  }function Q(a, b, d, e) {
    if (m.acceptData(a)) {
      var f,
          g,
          h = m.expando,
          i = a.nodeType,
          j = i ? m.cache : a,
          k = i ? a[h] : a[h] && h;if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : { toJSON: m.noop }), ("object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f;
    }
  }function R(a, b, c) {
    if (m.acceptData(a)) {
      var d,
          e,
          f = a.nodeType,
          g = f ? m.cache : a,
          h = f ? a[m.expando] : m.expando;if (g[h]) {
        if (b && (d = c ? g[h] : g[h].data)) {
          m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;while (e--) {
            delete d[b[e]];
          }if (c ? !P(d) : !m.isEmptyObject(d)) return;
        }(c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null);
      }
    }
  }m.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function hasData(a) {
      return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a);
    }, data: function data(a, b, c) {
      return Q(a, b, c);
    }, removeData: function removeData(a, b) {
      return R(a, b);
    }, _data: function _data(a, b, c) {
      return Q(a, b, c, !0);
    }, _removeData: function _removeData(a, b) {
      return R(a, b, !0);
    } }), m.fn.extend({ data: function data(a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;if (void 0 === a) {
        if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
          c = g.length;while (c--) {
            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
          }m._data(f, "parsedAttrs", !0);
        }return e;
      }return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
        m.data(this, a);
      }) : arguments.length > 1 ? this.each(function () {
        m.data(this, a, b);
      }) : f ? O(f, a, m.data(f, a)) : void 0;
    }, removeData: function removeData(a) {
      return this.each(function () {
        m.removeData(this, a);
      });
    } }), m.extend({ queue: function queue(a, b, c) {
      var d;return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0;
    }, dequeue: function dequeue(a, b) {
      b = b || "fx";var c = m.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = m._queueHooks(a, b),
          g = function g() {
        m.dequeue(a, b);
      };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    }, _queueHooks: function _queueHooks(a, b) {
      var c = b + "queueHooks";return m._data(a, c) || m._data(a, c, { empty: m.Callbacks("once memory").add(function () {
          m._removeData(a, b + "queue"), m._removeData(a, c);
        }) });
    } }), m.fn.extend({ queue: function queue(a, b) {
      var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = m.queue(this, a, b);m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a);
      });
    }, dequeue: function dequeue(a) {
      return this.each(function () {
        m.dequeue(this, a);
      });
    }, clearQueue: function clearQueue(a) {
      return this.queue(a || "fx", []);
    }, promise: function promise(a, b) {
      var c,
          d = 1,
          e = m.Deferred(),
          f = this,
          g = this.length,
          h = function h() {
        --d || e.resolveWith(f, [f]);
      };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
        c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      }return h(), e.promise(b);
    } });var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      T = ["Top", "Right", "Bottom", "Left"],
      U = function U(a, b) {
    return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a);
  },
      V = m.access = function (a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;if ("object" === m.type(c)) {
      e = !0;for (h in c) {
        m.access(a, b, h, c[h], !0, f, g);
      }
    } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b2, c) {
      return j.call(m(a), c);
    })), b)) for (; i > h; h++) {
      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  },
      W = /^(?:checkbox|radio)$/i;!function () {
    var a = y.createElement("input"),
        b = y.createElement("div"),
        c = y.createDocumentFragment();if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function () {
      k.noCloneEvent = !1;
    }), b.cloneNode(!0).click()), null == k.deleteExpando) {
      k.deleteExpando = !0;try {
        delete b.test;
      } catch (d) {
        k.deleteExpando = !1;
      }
    }
  }(), function () {
    var b,
        c,
        d = y.createElement("div");for (b in { submit: !0, change: !0, focusin: !0 }) {
      c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
    }d = null;
  }();var X = /^(?:input|select|textarea)$/i,
      Y = /^key/,
      Z = /^(?:mouse|pointer|contextmenu)|click/,
      $ = /^(?:focusinfocus|focusoutblur)$/,
      _ = /^([^.]*)(?:\.(.+)|)$/;function ab() {
    return !0;
  }function bb() {
    return !1;
  }function cb() {
    try {
      return y.activeElement;
    } catch (a) {}
  }m.event = { global: {}, add: function add(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          n,
          o,
          p,
          q,
          r = m._data(a);if (r) {
        c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
          return (typeof m === "undefined" ? "undefined" : _typeof(m)) === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments);
        }, k.elem = a), b = (b || "").match(E) || [""], h = b.length;while (h--) {
          f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && m.expr.match.needsContext.test(e), namespace: p.join(".") }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0);
        }a = null;
      }
    }, remove: function remove(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          n,
          o,
          p,
          q,
          r = m.hasData(a) && m._data(a);if (r && (k = r.events)) {
        b = (b || "").match(E) || [""], j = b.length;while (j--) {
          if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
            l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;while (f--) {
              g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
            }i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o]);
          } else for (o in k) {
            m.event.remove(a, o + b[j], c, d, !0);
          }
        }m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"));
      }
    }, trigger: function trigger(b, c, d, e) {
      var f,
          g,
          h,
          i,
          k,
          l,
          n,
          o = [d || y],
          p = j.call(b, "type") ? b.type : b,
          q = j.call(b, "namespace") ? b.namespace.split(".") : [];if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
        if (!e && !k.noBubble && !m.isWindow(d)) {
          for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) {
            o.push(h), l = h;
          }l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a);
        }n = 0;while ((h = o[n++]) && !b.isPropagationStopped()) {
          b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
        }if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
          l = d[g], l && (d[g] = null), m.event.triggered = p;try {
            d[p]();
          } catch (r) {}m.event.triggered = void 0, l && (d[g] = l);
        }return b.result;
      }
    }, dispatch: function dispatch(a) {
      a = m.event.fix(a);var b,
          c,
          e,
          f,
          g,
          h = [],
          i = d.call(arguments),
          j = (m._data(this, "events") || {})[a.type] || [],
          k = m.event.special[a.type] || {};if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = m.event.handlers.call(this, a, j), b = 0;while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, g = 0;while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped()) {
            (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()));
          }
        }return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    }, handlers: function handlers(a, b) {
      var c,
          d,
          e,
          f,
          g = [],
          h = b.delegateCount,
          i = a.target;if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i != this; i = i.parentNode || this) {
        if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
          for (e = [], f = 0; h > f; f++) {
            d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d);
          }e.length && g.push({ elem: i, handlers: e });
        }
      }return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    }, fix: function fix(a) {
      if (a[m.expando]) return a;var b,
          c,
          d,
          e = a.type,
          f = a,
          g = this.fixHooks[e];g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;while (b--) {
        c = d[b], a[c] = f[c];
      }return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a;
    }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
      } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(a, b) {
        var c,
            d,
            e,
            f = b.button,
            g = b.fromElement;return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
      } }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== cb() && this.focus) try {
            return this.focus(), !1;
          } catch (a) {}
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          return this === cb() && this.blur ? (this.blur(), !1) : void 0;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0;
        }, _default: function _default(a) {
          return m.nodeName(a.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        } } }, simulate: function simulate(a, b, c, d) {
      var e = m.extend(new m.Event(), c, { type: a, isSimulated: !0, originalEvent: {} });d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
    } }, m.removeEvent = y.removeEventListener ? function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, !1);
  } : function (a, b, c) {
    var d = "on" + b;a.detachEvent && (_typeof(a[d]) === K && (a[d] = null), a.detachEvent(d, c));
  }, m.Event = function (a, b) {
    return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ab : bb) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void (this[m.expando] = !0)) : new m.Event(a, b);
  }, m.Event.prototype = { isDefaultPrevented: bb, isPropagationStopped: bb, isImmediatePropagationStopped: bb, preventDefault: function preventDefault() {
      var a = this.originalEvent;this.isDefaultPrevented = ab, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
    }, stopPropagation: function stopPropagation() {
      var a = this.originalEvent;this.isPropagationStopped = ab, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0);
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var a = this.originalEvent;this.isImmediatePropagationStopped = ab, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
    } }, m.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
    m.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      } };
  }), k.submitBubbles || (m.event.special.submit = { setup: function setup() {
      return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function (a) {
        var b = a.target,
            c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function (a) {
          a._submit_bubble = !0;
        }), m._data(c, "submitBubbles", !0));
      });
    }, postDispatch: function postDispatch(a) {
      a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0));
    }, teardown: function teardown() {
      return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit");
    } }), k.changeBubbles || (m.event.special.change = { setup: function setup() {
      return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function (a) {
        "checked" === a.originalEvent.propertyName && (this._just_changed = !0);
      }), m.event.add(this, "click._change", function (a) {
        this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0);
      })), !1) : void m.event.add(this, "beforeactivate._change", function (a) {
        var b = a.target;X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function (a) {
          !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0);
        }), m._data(b, "changeBubbles", !0));
      });
    }, handle: function handle(a) {
      var b = a.target;return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0;
    }, teardown: function teardown() {
      return m.event.remove(this, "._change"), !X.test(this.nodeName);
    } }), k.focusinBubbles || m.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
    var c = function c(a) {
      m.event.simulate(b, a.target, m.event.fix(a), !0);
    };m.event.special[b] = { setup: function setup() {
        var d = this.ownerDocument || this,
            e = m._data(d, b);e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1);
      }, teardown: function teardown() {
        var d = this.ownerDocument || this,
            e = m._data(d, b) - 1;e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b));
      } };
  }), m.fn.extend({ on: function on(a, b, c, d, e) {
      var f, g;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
        "string" != typeof b && (c = c || b, b = void 0);for (f in a) {
          this.on(f, b, c, a[f], e);
        }return this;
      }if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = bb;else if (!d) return this;return 1 === e && (g = d, d = function d(a) {
        return m().off(a), g.apply(this, arguments);
      }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function () {
        m.event.add(this, a, d, c, b);
      });
    }, one: function one(a, b, c, d) {
      return this.on(a, b, c, d, 1);
    }, off: function off(a, b, c) {
      var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
        for (e in a) {
          this.off(e, b, a[e]);
        }return this;
      }return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = bb), this.each(function () {
        m.event.remove(this, a, c, b);
      });
    }, trigger: function trigger(a, b) {
      return this.each(function () {
        m.event.trigger(a, b, this);
      });
    }, triggerHandler: function triggerHandler(a, b) {
      var c = this[0];return c ? m.event.trigger(a, b, c, !0) : void 0;
    } });function db(a) {
    var b = eb.split("|"),
        c = a.createDocumentFragment();if (c.createElement) while (b.length) {
      c.createElement(b.pop());
    }return c;
  }var eb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      fb = / jQuery\d+="(?:null|\d+)"/g,
      gb = new RegExp("<(?:" + eb + ")[\\s/>]", "i"),
      hb = /^\s+/,
      ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      jb = /<([\w:]+)/,
      kb = /<tbody/i,
      lb = /<|&#?\w+;/,
      mb = /<(?:script|style|link)/i,
      nb = /checked\s*(?:[^=]|=\s*.checked.)/i,
      ob = /^$|\/(?:java|ecma)script/i,
      pb = /^true\/(.*)/,
      qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      rb = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] },
      sb = db(y),
      tb = sb.appendChild(y.createElement("div"));rb.optgroup = rb.option, rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead, rb.th = rb.td;function ub(a, b) {
    var c,
        d,
        e = 0,
        f = _typeof(a.getElementsByTagName) !== K ? a.getElementsByTagName(b || "*") : _typeof(a.querySelectorAll) !== K ? a.querySelectorAll(b || "*") : void 0;if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) {
      !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ub(d, b));
    }return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f;
  }function vb(a) {
    W.test(a.type) && (a.defaultChecked = a.checked);
  }function wb(a, b) {
    return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
  }function xb(a) {
    return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a;
  }function yb(a) {
    var b = pb.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }function zb(a, b) {
    for (var c, d = 0; null != (c = a[d]); d++) {
      m._data(c, "globalEval", !b || m._data(b[d], "globalEval"));
    }
  }function Ab(a, b) {
    if (1 === b.nodeType && m.hasData(a)) {
      var c,
          d,
          e,
          f = m._data(a),
          g = m._data(b, f),
          h = f.events;if (h) {
        delete g.handle, g.events = {};for (c in h) {
          for (d = 0, e = h[c].length; e > d; d++) {
            m.event.add(b, c, h[c][d]);
          }
        }
      }g.data && (g.data = m.extend({}, g.data));
    }
  }function Bb(a, b) {
    var c, d, e;if (1 === b.nodeType) {
      if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
        e = m._data(b);for (d in e.events) {
          m.removeEvent(b, d, e.handle);
        }b.removeAttribute(m.expando);
      }"script" === c && b.text !== a.text ? (xb(b).text = a.text, yb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
    }
  }m.extend({ clone: function clone(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i = m.contains(a.ownerDocument, a);if (k.html5Clone || m.isXMLDoc(a) || !gb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (tb.innerHTML = a.outerHTML, tb.removeChild(f = tb.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a))) for (d = ub(f), h = ub(a), g = 0; null != (e = h[g]); ++g) {
        d[g] && Bb(e, d[g]);
      }if (b) if (c) for (h = h || ub(a), d = d || ub(f), g = 0; null != (e = h[g]); g++) {
        Ab(e, d[g]);
      } else Ab(a, f);return d = ub(f, "script"), d.length > 0 && zb(d, !i && ub(a, "script")), d = h = e = null, f;
    }, buildFragment: function buildFragment(a, b, c, d) {
      for (var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0; n > q; q++) {
        if (f = a[q], f || 0 === f) if ("object" === m.type(f)) m.merge(p, f.nodeType ? [f] : f);else if (lb.test(f)) {
          h = h || o.appendChild(b.createElement("div")), i = (jb.exec(f) || ["", ""])[1].toLowerCase(), l = rb[i] || rb._default, h.innerHTML = l[1] + f.replace(ib, "<$1></$2>") + l[2], e = l[0];while (e--) {
            h = h.lastChild;
          }if (!k.leadingWhitespace && hb.test(f) && p.push(b.createTextNode(hb.exec(f)[0])), !k.tbody) {
            f = "table" !== i || kb.test(f) ? "<table>" !== l[1] || kb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;while (e--) {
              m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
            }
          }m.merge(p, h.childNodes), h.textContent = "";while (h.firstChild) {
            h.removeChild(h.firstChild);
          }h = o.lastChild;
        } else p.push(b.createTextNode(f));
      }h && o.removeChild(h), k.appendChecked || m.grep(ub(p, "input"), vb), q = 0;while (f = p[q++]) {
        if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ub(o.appendChild(f), "script"), g && zb(h), c)) {
          e = 0;while (f = h[e++]) {
            ob.test(f.type || "") && c.push(f);
          }
        }
      }return h = null, o;
    }, cleanData: function cleanData(a, b) {
      for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++) {
        if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
          if (g.events) for (e in g.events) {
            n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
          }j[f] && (delete j[f], l ? delete d[i] : _typeof(d.removeAttribute) !== K ? d.removeAttribute(i) : d[i] = null, c.push(f));
        }
      }
    } }), m.fn.extend({ text: function text(a) {
      return V(this, function (a) {
        return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a));
      }, null, a, arguments.length);
    }, append: function append() {
      return this.domManip(arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = wb(this, a);b.appendChild(a);
        }
      });
    }, prepend: function prepend() {
      return this.domManip(arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = wb(this, a);b.insertBefore(a, b.firstChild);
        }
      });
    }, before: function before() {
      return this.domManip(arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    }, after: function after() {
      return this.domManip(arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    }, remove: function remove(a, b) {
      for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++) {
        b || 1 !== c.nodeType || m.cleanData(ub(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && zb(ub(c, "script")), c.parentNode.removeChild(c));
      }return this;
    }, empty: function empty() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && m.cleanData(ub(a, !1));while (a.firstChild) {
          a.removeChild(a.firstChild);
        }a.options && m.nodeName(a, "select") && (a.options.length = 0);
      }return this;
    }, clone: function clone(a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
        return m.clone(this, a, b);
      });
    }, html: function html(a) {
      return V(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(fb, "") : void 0;if (!("string" != typeof a || mb.test(a) || !k.htmlSerialize && gb.test(a) || !k.leadingWhitespace && hb.test(a) || rb[(jb.exec(a) || ["", ""])[1].toLowerCase()])) {
          a = a.replace(ib, "<$1></$2>");try {
            for (; d > c; c++) {
              b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ub(b, !1)), b.innerHTML = a);
            }b = 0;
          } catch (e) {}
        }b && this.empty().append(a);
      }, null, a, arguments.length);
    }, replaceWith: function replaceWith() {
      var a = arguments[0];return this.domManip(arguments, function (b) {
        a = this.parentNode, m.cleanData(ub(this)), a && a.replaceChild(b, this);
      }), a && (a.length || a.nodeType) ? this : this.remove();
    }, detach: function detach(a) {
      return this.remove(a, !0);
    }, domManip: function domManip(a, b) {
      a = e.apply([], a);var c,
          d,
          f,
          g,
          h,
          i,
          j = 0,
          l = this.length,
          n = this,
          o = l - 1,
          p = a[0],
          q = m.isFunction(p);if (q || l > 1 && "string" == typeof p && !k.checkClone && nb.test(p)) return this.each(function (c) {
        var d = n.eq(c);q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
      });if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
        for (g = m.map(ub(i, "script"), xb), f = g.length; l > j; j++) {
          d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ub(d, "script"))), b.call(this[j], d, j);
        }if (f) for (h = g[g.length - 1].ownerDocument, m.map(g, yb), j = 0; f > j; j++) {
          d = g[j], ob.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qb, "")));
        }i = c = null;
      }return this;
    } }), m.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
    m.fn[a] = function (a) {
      for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) {
        c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get());
      }return this.pushStack(e);
    };
  });var Cb,
      Db = {};function Eb(b, c) {
    var d,
        e = m(c.createElement(b)).appendTo(c.body),
        f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");return e.detach(), f;
  }function Fb(a) {
    var b = y,
        c = Db[a];return c || (c = Eb(a, b), "none" !== c && c || (Cb = (Cb || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Cb[0].contentWindow || Cb[0].contentDocument).document, b.write(), b.close(), c = Eb(a, b), Cb.detach()), Db[a] = c), c;
  }!function () {
    var a;k.shrinkWrapBlocks = function () {
      if (null != a) return a;a = !1;var b, c, d;return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), _typeof(b.style.zoom) !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0;
    };
  }();var Gb = /^margin/,
      Hb = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
      Ib,
      Jb,
      Kb = /^(top|right|bottom|left)$/;a.getComputedStyle ? (Ib = function Ib(b) {
    return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
  }, Jb = function Jb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;return c = c || Ib(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Hb.test(g) && Gb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + "";
  }) : y.documentElement.currentStyle && (Ib = function Ib(a) {
    return a.currentStyle;
  }, Jb = function Jb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;return c = c || Ib(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Hb.test(g) && !Kb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto";
  });function Lb(a, b) {
    return { get: function get() {
        var c = a();if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments);
      } };
  }!function () {
    var b, c, d, e, f, g, h;if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
      var _i = function _i() {
        var b, c, d, i;c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || { width: "4px" }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight), b.removeChild(i)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d));
      };

      c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, { reliableHiddenOffsets: function reliableHiddenOffsets() {
          return null == g && _i(), g;
        }, boxSizingReliable: function boxSizingReliable() {
          return null == f && _i(), f;
        }, pixelPosition: function pixelPosition() {
          return null == e && _i(), e;
        }, reliableMarginRight: function reliableMarginRight() {
          return null == h && _i(), h;
        } });
    }
  }(), m.swap = function (a, b, c, d) {
    var e,
        f,
        g = {};for (f in b) {
      g[f] = a.style[f], a.style[f] = b[f];
    }e = c.apply(a, d || []);for (f in b) {
      a.style[f] = g[f];
    }return e;
  };var Mb = /alpha\([^)]*\)/i,
      Nb = /opacity\s*=\s*([^)]*)/,
      Ob = /^(none|table(?!-c[ea]).+)/,
      Pb = new RegExp("^(" + S + ")(.*)$", "i"),
      Qb = new RegExp("^([+-])=(" + S + ")", "i"),
      Rb = { position: "absolute", visibility: "hidden", display: "block" },
      Sb = { letterSpacing: "0", fontWeight: "400" },
      Tb = ["Webkit", "O", "Moz", "ms"];function Ub(a, b) {
    if (b in a) return b;var c = b.charAt(0).toUpperCase() + b.slice(1),
        d = b,
        e = Tb.length;while (e--) {
      if (b = Tb[e] + c, b in a) return b;
    }return d;
  }function Vb(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
      d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fb(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
    }for (g = 0; h > g; g++) {
      d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
    }return a;
  }function Wb(a, b, c) {
    var d = Pb.exec(b);return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }function Xb(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
      "margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
    }return g;
  }function Yb(a, b, c) {
    var d = !0,
        e = "width" === b ? a.offsetWidth : a.offsetHeight,
        f = Ib(a),
        g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);if (0 >= e || null == e) {
      if (e = Jb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Hb.test(e)) return e;d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
    }return e + Xb(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }m.extend({ cssHooks: { opacity: { get: function get(a, b) {
          if (b) {
            var c = Jb(a, "opacity");return "" === c ? "1" : c;
          }
        } } }, cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": k.cssFloat ? "cssFloat" : "styleFloat" }, style: function style(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
            f,
            g,
            h = m.camelCase(b),
            i = a.style;if (b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];if (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = Qb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
          i[b] = c;
        } catch (j) {}
      }
    }, css: function css(a, b, c, d) {
      var e,
          f,
          g,
          h = m.camelCase(b);return b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Jb(a, b, d)), "normal" === f && b in Sb && (f = Sb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f;
    } }), m.each(["height", "width"], function (a, b) {
    m.cssHooks[b] = { get: function get(a, c, d) {
        return c ? Ob.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Rb, function () {
          return Yb(a, b, d);
        }) : Yb(a, b, d) : void 0;
      }, set: function set(a, c, d) {
        var e = d && Ib(a);return Wb(a, c, d ? Xb(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0);
      } };
  }), k.opacity || (m.cssHooks.opacity = { get: function get(a, b) {
      return Nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "";
    }, set: function set(a, b) {
      var c = a.style,
          d = a.currentStyle,
          e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
          f = d && d.filter || c.filter || "";c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Mb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + " " + e);
    } }), m.cssHooks.marginRight = Lb(k.reliableMarginRight, function (a, b) {
    return b ? m.swap(a, { display: "inline-block" }, Jb, [a, "marginRight"]) : void 0;
  }), m.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
    m.cssHooks[a + b] = { expand: function expand(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
          e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
        }return e;
      } }, Gb.test(a) || (m.cssHooks[a + b].set = Wb);
  }), m.fn.extend({ css: function css(a, b) {
      return V(this, function (a, b, c) {
        var d,
            e,
            f = {},
            g = 0;if (m.isArray(b)) {
          for (d = Ib(a), e = b.length; e > g; g++) {
            f[b[g]] = m.css(a, b[g], !1, d);
          }return f;
        }return void 0 !== c ? m.style(a, b, c) : m.css(a, b);
      }, a, b, arguments.length > 1);
    }, show: function show() {
      return Vb(this, !0);
    }, hide: function hide() {
      return Vb(this);
    }, toggle: function toggle(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        U(this) ? m(this).show() : m(this).hide();
      });
    } });function Zb(a, b, c, d, e) {
    return new Zb.prototype.init(a, b, c, d, e);
  }m.Tween = Zb, Zb.prototype = { constructor: Zb, init: function init(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px");
    }, cur: function cur() {
      var a = Zb.propHooks[this.prop];return a && a.get ? a.get(this) : Zb.propHooks._default.get(this);
    }, run: function run(a) {
      var b,
          c = Zb.propHooks[this.prop];return this.pos = b = this.options.duration ? m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Zb.propHooks._default.set(this), this;
    } }, Zb.prototype.init.prototype = Zb.prototype, Zb.propHooks = { _default: { get: function get(a) {
        var b;return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop];
      }, set: function set(a) {
        m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
      } } }, Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = { set: function set(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    } }, m.easing = { linear: function linear(a) {
      return a;
    }, swing: function swing(a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    } }, m.fx = Zb.prototype.init, m.fx.step = {};var $b,
      _b,
      ac = /^(?:toggle|show|hide)$/,
      bc = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
      cc = /queueHooks$/,
      dc = [ic],
      ec = { "*": [function (a, b) {
      var c = this.createTween(a, b),
          d = c.cur(),
          e = bc.exec(b),
          f = e && e[3] || (m.cssNumber[a] ? "" : "px"),
          g = (m.cssNumber[a] || "px" !== f && +d) && bc.exec(m.css(c.elem, a)),
          h = 1,
          i = 20;if (g && g[3] !== f) {
        f = f || g[3], e = e || [], g = +d || 1;do {
          h = h || ".5", g /= h, m.style(c.elem, a, g + f);
        } while (h !== (h = c.cur() / d) && 1 !== h && --i);
      }return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c;
    }] };function fc() {
    return setTimeout(function () {
      $b = void 0;
    }), $b = m.now();
  }function gc(a, b) {
    var c,
        d = { height: a },
        e = 0;for (b = b ? 1 : 0; 4 > e; e += 2 - b) {
      c = T[e], d["margin" + c] = d["padding" + c] = a;
    }return b && (d.opacity = d.width = a), d;
  }function hc(a, b, c) {
    for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; g > f; f++) {
      if (d = e[f].call(c, b, a)) return d;
    }
  }function ic(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        l,
        n = this,
        o = {},
        p = a.style,
        q = a.nodeType && U(a),
        r = m._data(a, "fxshow");c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
      h.unqueued || i();
    }), h.unqueued++, n.always(function () {
      n.always(function () {
        h.unqueued--, m.queue(a, "fx").length || h.empty.fire();
      });
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fb(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fb(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function () {
      p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2];
    }));for (d in b) {
      if (e = b[d], ac.exec(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
          if ("show" !== e || !r || void 0 === r[d]) continue;q = !0;
        }o[d] = r && r[d] || m.style(a, d);
      } else j = void 0;
    }if (m.isEmptyObject(o)) "inline" === ("none" === j ? Fb(a.nodeName) : j) && (p.display = j);else {
      r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function () {
        m(a).hide();
      }), n.done(function () {
        var b;m._removeData(a, "fxshow");for (b in o) {
          m.style(a, b, o[b]);
        }
      });for (d in o) {
        g = hc(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
      }
    }
  }function jc(a, b) {
    var c, d, e, f, g;for (c in a) {
      if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];for (c in f) {
          c in a || (a[c] = f[c], b[c] = e);
        }
      } else b[d] = e;
    }
  }function kc(a, b, c) {
    var d,
        e,
        f = 0,
        g = dc.length,
        h = m.Deferred().always(function () {
      delete i.elem;
    }),
        i = function i() {
      if (e) return !1;for (var b = $b || fc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
        j.tweens[g].run(f);
      }return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
    },
        j = h.promise({ elem: a, props: m.extend({}, b), opts: m.extend(!0, { specialEasing: {} }, c), originalProperties: b, originalOptions: c, startTime: $b || fc(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
        var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
      }, stop: function stop(b) {
        var c = 0,
            d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; d > c; c++) {
          j.tweens[c].run(1);
        }return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
      } }),
        k = j.props;for (jc(k, j.opts.specialEasing); g > f; f++) {
      if (d = dc[f].call(j, a, k, j.opts)) return d;
    }return m.map(k, hc, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
  }m.Animation = m.extend(kc, { tweener: function tweener(a, b) {
      m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");for (var c, d = 0, e = a.length; e > d; d++) {
        c = a[d], ec[c] = ec[c] || [], ec[c].unshift(b);
      }
    }, prefilter: function prefilter(a, b) {
      b ? dc.unshift(a) : dc.push(a);
    } }), m.speed = function (a, b, c) {
    var d = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? m.extend({}, a) : { complete: c || !c && b || m.isFunction(a) && a, duration: a, easing: c && b || b && !m.isFunction(b) && b };return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
      m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue);
    }, d;
  }, m.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
      return this.filter(U).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
    }, animate: function animate(a, b, c, d) {
      var e = m.isEmptyObject(a),
          f = m.speed(b, c, d),
          g = function g() {
        var b = kc(this, m.extend({}, a), f);(e || m._data(this, "finish")) && b.stop(!0);
      };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    }, stop: function stop(a, b, c) {
      var d = function d(a) {
        var b = a.stop;delete a.stop, b(c);
      };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
            e = null != a && a + "queueHooks",
            f = m.timers,
            g = m._data(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
          g[e] && g[e].stop && cc.test(e) && d(g[e]);
        }for (e = f.length; e--;) {
          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        }(b || !c) && m.dequeue(this, a);
      });
    }, finish: function finish(a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b,
            c = m._data(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = m.timers,
            g = d ? d.length : 0;for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        }for (b = 0; g > b; b++) {
          d[b] && d[b].finish && d[b].finish.call(this);
        }delete c.finish;
      });
    } }), m.each(["toggle", "show", "hide"], function (a, b) {
    var c = m.fn[b];m.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gc(b, !0), a, d, e);
    };
  }), m.each({ slideDown: gc("show"), slideUp: gc("hide"), slideToggle: gc("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
    m.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), m.timers = [], m.fx.tick = function () {
    var a,
        b = m.timers,
        c = 0;for ($b = m.now(); c < b.length; c++) {
      a = b[c], a() || b[c] !== a || b.splice(c--, 1);
    }b.length || m.fx.stop(), $b = void 0;
  }, m.fx.timer = function (a) {
    m.timers.push(a), a() ? m.fx.start() : m.timers.pop();
  }, m.fx.interval = 13, m.fx.start = function () {
    _b || (_b = setInterval(m.fx.tick, m.fx.interval));
  }, m.fx.stop = function () {
    clearInterval(_b), _b = null;
  }, m.fx.speeds = { slow: 600, fast: 200, _default: 400 }, m.fn.delay = function (a, b) {
    return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
      var d = setTimeout(b, a);c.stop = function () {
        clearTimeout(d);
      };
    });
  }, function () {
    var a, b, c, d, e;b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value;
  }();var lc = /\r/g;m.fn.extend({ val: function val(a) {
      var b,
          c,
          d,
          e = this[0];{
        if (arguments.length) return d = m.isFunction(a), this.each(function (c) {
          var e;1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function (a) {
            return null == a ? "" : a + "";
          })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });if (e) return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lc, "") : null == c ? "" : c);
      }
    } }), m.extend({ valHooks: { option: { get: function get(a) {
          var b = m.find.attr(a, "value");return null != b ? b : m.trim(m.text(a));
        } }, select: { get: function get(a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
            if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
              if (b = m(c).val(), f) return b;g.push(b);
            }
          }return g;
        }, set: function set(a, b) {
          var c,
              d,
              e = a.options,
              f = m.makeArray(b),
              g = e.length;while (g--) {
            if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) try {
              d.selected = c = !0;
            } catch (h) {
              d.scrollHeight;
            } else d.selected = !1;
          }return c || (a.selectedIndex = -1), e;
        } } } }), m.each(["radio", "checkbox"], function () {
    m.valHooks[this] = { set: function set(a, b) {
        return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0;
      } }, k.checkOn || (m.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  });var mc,
      nc,
      oc = m.expr.attrHandle,
      pc = /^(?:checked|selected)$/i,
      qc = k.getSetAttribute,
      rc = k.input;m.fn.extend({ attr: function attr(a, b) {
      return V(this, m.attr, a, b, arguments.length > 1);
    }, removeAttr: function removeAttr(a) {
      return this.each(function () {
        m.removeAttr(this, a);
      });
    } }), m.extend({ attr: function attr(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (a && 3 !== f && 8 !== f && 2 !== f) return _typeof(a.getAttribute) === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b));
    }, removeAttr: function removeAttr(a, b) {
      var c,
          d,
          e = 0,
          f = b && b.match(E);if (f && 1 === a.nodeType) while (c = f[e++]) {
        d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rc && qc || !pc.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qc ? c : d);
      }
    }, attrHooks: { type: { set: function set(a, b) {
          if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
            var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
          }
        } } } }), nc = { set: function set(a, b, c) {
      return b === !1 ? m.removeAttr(a, c) : rc && qc || !pc.test(c) ? a.setAttribute(!qc && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c;
    } }, m.each(m.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = oc[b] || m.find.attr;oc[b] = rc && qc || !pc.test(b) ? function (a, b, d) {
      var e, f;return d || (f = oc[b], oc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, oc[b] = f), e;
    } : function (a, b, c) {
      return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null;
    };
  }), rc && qc || (m.attrHooks.value = { set: function set(a, b, c) {
      return m.nodeName(a, "input") ? void (a.defaultValue = b) : mc && mc.set(a, b, c);
    } }), qc || (mc = { set: function set(a, b, c) {
      var d = a.getAttributeNode(c);return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0;
    } }, oc.id = oc.name = oc.coords = function (a, b, c) {
    var d;return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null;
  }, m.valHooks.button = { get: function get(a, b) {
      var c = a.getAttributeNode(b);return c && c.specified ? c.value : void 0;
    }, set: mc.set }, m.attrHooks.contenteditable = { set: function set(a, b, c) {
      mc.set(a, "" === b ? !1 : b, c);
    } }, m.each(["width", "height"], function (a, b) {
    m.attrHooks[b] = { set: function set(a, c) {
        return "" === c ? (a.setAttribute(b, "auto"), c) : void 0;
      } };
  })), k.style || (m.attrHooks.style = { get: function get(a) {
      return a.style.cssText || void 0;
    }, set: function set(a, b) {
      return a.style.cssText = b + "";
    } });var sc = /^(?:input|select|textarea|button|object)$/i,
      tc = /^(?:a|area)$/i;m.fn.extend({ prop: function prop(a, b) {
      return V(this, m.prop, a, b, arguments.length > 1);
    }, removeProp: function removeProp(a) {
      return a = m.propFix[a] || a, this.each(function () {
        try {
          this[a] = void 0, delete this[a];
        } catch (b) {}
      });
    } }), m.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function prop(a, b, c) {
      var d,
          e,
          f,
          g = a.nodeType;if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    }, propHooks: { tabIndex: { get: function get(a) {
          var b = m.find.attr(a, "tabindex");return b ? parseInt(b, 10) : sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0 : -1;
        } } } }), k.hrefNormalized || m.each(["href", "src"], function (a, b) {
    m.propHooks[b] = { get: function get(a) {
        return a.getAttribute(b, 4);
      } };
  }), k.optSelected || (m.propHooks.selected = { get: function get(a) {
      var b = a.parentNode;return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null;
    } }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    m.propFix[this.toLowerCase()] = this;
  }), k.enctype || (m.propFix.enctype = "encoding");var uc = /[\t\r\n\f]/g;m.fn.extend({ addClass: function addClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h = 0,
          i = this.length,
          j = "string" == typeof a && a;if (m.isFunction(a)) return this.each(function (b) {
        m(this).addClass(a.call(this, b, this.className));
      });if (j) for (b = (a || "").match(E) || []; i > h; h++) {
        if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : " ")) {
          f = 0;while (e = b[f++]) {
            d.indexOf(" " + e + " ") < 0 && (d += e + " ");
          }g = m.trim(d), c.className !== g && (c.className = g);
        }
      }return this;
    }, removeClass: function removeClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h = 0,
          i = this.length,
          j = 0 === arguments.length || "string" == typeof a && a;if (m.isFunction(a)) return this.each(function (b) {
        m(this).removeClass(a.call(this, b, this.className));
      });if (j) for (b = (a || "").match(E) || []; i > h; h++) {
        if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : "")) {
          f = 0;while (e = b[f++]) {
            while (d.indexOf(" " + e + " ") >= 0) {
              d = d.replace(" " + e + " ", " ");
            }
          }g = a ? m.trim(d) : "", c.className !== g && (c.className = g);
        }
      }return this;
    }, toggleClass: function toggleClass(a, b) {
      var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function (c) {
        m(this).toggleClass(a.call(this, c, this.className, b), b);
      } : function () {
        if ("string" === c) {
          var b,
              d = 0,
              e = m(this),
              f = a.match(E) || [];while (b = f[d++]) {
            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
          }
        } else (c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "");
      });
    }, hasClass: function hasClass(a) {
      for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) {
        if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(uc, " ").indexOf(b) >= 0) return !0;
      }return !1;
    } }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
    m.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), m.fn.extend({ hover: function hover(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    }, bind: function bind(a, b, c) {
      return this.on(a, null, b, c);
    }, unbind: function unbind(a, b) {
      return this.off(a, null, b);
    }, delegate: function delegate(a, b, c, d) {
      return this.on(b, a, c, d);
    }, undelegate: function undelegate(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    } });var vc = m.now(),
      wc = /\?/,
      xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON = function (b) {
    if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");var c,
        d = null,
        e = m.trim(b + "");return e && !m.trim(e.replace(xc, function (a, b, e, f) {
      return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "");
    })) ? Function("return " + e)() : m.error("Invalid JSON: " + b);
  }, m.parseXML = function (b) {
    var c, d;if (!b || "string" != typeof b) return null;try {
      a.DOMParser ? (d = new DOMParser(), c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b));
    } catch (e) {
      c = void 0;
    }return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c;
  };var yc,
      zc,
      Ac = /#.*$/,
      Bc = /([?&])_=[^&]*/,
      Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Ec = /^(?:GET|HEAD)$/,
      Fc = /^\/\//,
      Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      Hc = {},
      Ic = {},
      Jc = "*/".concat("*");try {
    zc = location.href;
  } catch (Kc) {
    zc = y.createElement("a"), zc.href = "", zc = zc.href;
  }yc = Gc.exec(zc.toLowerCase()) || [];function Lc(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");var d,
          e = 0,
          f = b.toLowerCase().match(E) || [];if (m.isFunction(c)) while (d = f[e++]) {
        "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
      }
    };
  }function Mc(a, b, c, d) {
    var e = {},
        f = a === Ic;function g(h) {
      var i;return e[h] = !0, m.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }return g(b.dataTypes[0]) || !e["*"] && g("*");
  }function Nc(a, b) {
    var c,
        d,
        e = m.ajaxSettings.flatOptions || {};for (d in b) {
      void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
    }return c && m.extend(!0, a, c), a;
  }function Oc(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;while ("*" === i[0]) {
      i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
    }if (e) for (g in h) {
      if (h[g] && h[g].test(e)) {
        i.unshift(g);break;
      }
    }if (i[0] in c) f = i[0];else {
      for (g in c) {
        if (!i[0] || a.converters[g + " " + i[0]]) {
          f = g;break;
        }d || (d = g);
      }f = f || d;
    }return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }function Pc(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
      j[g.toLowerCase()] = a.converters[g];
    }f = k.shift();while (f) {
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
        if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
          }
        }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
          b = g(b);
        } catch (l) {
          return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
        }
      }
    }return { state: "success", data: b };
  }m.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: zc, type: "GET", isLocal: Dc.test(yc[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Jc, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": m.parseJSON, "text xml": m.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
      return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a);
    }, ajaxPrefilter: Lc(Hc), ajaxTransport: Lc(Ic), ajax: function ajax(a, b) {
      "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) && (b = a, a = void 0), b = b || {};var c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = m.ajaxSetup({}, b),
          l = k.context || k,
          n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event,
          o = m.Deferred(),
          p = m.Callbacks("once memory"),
          q = k.statusCode || {},
          r = {},
          s = {},
          t = 0,
          u = "canceled",
          v = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
          var b;if (2 === t) {
            if (!j) {
              j = {};while (b = Cc.exec(f)) {
                j[b[1].toLowerCase()] = b[2];
              }
            }b = j[a.toLowerCase()];
          }return null == b ? null : b;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return 2 === t ? f : null;
        }, setRequestHeader: function setRequestHeader(a, b) {
          var c = a.toLowerCase();return t || (a = s[c] = s[c] || a, r[a] = b), this;
        }, overrideMimeType: function overrideMimeType(a) {
          return t || (k.mimeType = a), this;
        }, statusCode: function statusCode(a) {
          var b;if (a) if (2 > t) for (b in a) {
            q[b] = [q[b], a[b]];
          } else v.always(a[v.status]);return this;
        }, abort: function abort(a) {
          var b = a || u;return i && i.abort(b), x(0, b), this;
        } };if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zc) + "").replace(Ac, "").replace(Fc, yc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yc[1] && c[2] === yc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yc[3] || ("http:" === yc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mc(Hc, k, b, v), 2 === t) return v;h = m.event && k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Ec.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bc.test(e) ? e.replace(Bc, "$1_=" + vc++) : e + (wc.test(e) ? "&" : "?") + "_=" + vc++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jc + "; q=0.01" : "") : k.accepts["*"]);for (d in k.headers) {
        v.setRequestHeader(d, k.headers[d]);
      }if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();u = "abort";for (d in { success: 1, error: 1, complete: 1 }) {
        v[d](k[d]);
      }if (i = Mc(Ic, k, b, v)) {
        v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
          v.abort("timeout");
        }, k.timeout));try {
          t = 1, i.send(r, x);
        } catch (w) {
          if (!(2 > t)) throw w;x(-1, w);
        }
      } else x(-1, "No Transport");function x(a, b, c, d) {
        var j,
            r,
            s,
            u,
            w,
            x = b;2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Oc(k, v, c)), u = Pc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")));
      }return v;
    }, getJSON: function getJSON(a, b, c) {
      return m.get(a, b, c, "json");
    }, getScript: function getScript(a, b) {
      return m.get(a, void 0, b, "script");
    } }), m.each(["get", "post"], function (a, b) {
    m[b] = function (a, c, d, e) {
      return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({ url: a, type: b, dataType: e, data: c, success: d });
    };
  }), m._evalUrl = function (a) {
    return m.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 });
  }, m.fn.extend({ wrapAll: function wrapAll(a) {
      if (m.isFunction(a)) return this.each(function (b) {
        m(this).wrapAll(a.call(this, b));
      });if (this[0]) {
        var b = m(a, this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
          var a = this;while (a.firstChild && 1 === a.firstChild.nodeType) {
            a = a.firstChild;
          }return a;
        }).append(this);
      }return this;
    }, wrapInner: function wrapInner(a) {
      return this.each(m.isFunction(a) ? function (b) {
        m(this).wrapInner(a.call(this, b));
      } : function () {
        var b = m(this),
            c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
      });
    }, wrap: function wrap(a) {
      var b = m.isFunction(a);return this.each(function (c) {
        m(this).wrapAll(b ? a.call(this, c) : a);
      });
    }, unwrap: function unwrap() {
      return this.parent().each(function () {
        m.nodeName(this, "body") || m(this).replaceWith(this.childNodes);
      }).end();
    } }), m.expr.filters.hidden = function (a) {
    return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"));
  }, m.expr.filters.visible = function (a) {
    return !m.expr.filters.hidden(a);
  };var Qc = /%20/g,
      Rc = /\[\]$/,
      Sc = /\r?\n/g,
      Tc = /^(?:submit|button|image|reset|file)$/i,
      Uc = /^(?:input|select|textarea|keygen)/i;function Vc(a, b, c, d) {
    var e;if (m.isArray(b)) m.each(b, function (b, e) {
      c || Rc.test(a) ? d(a, e) : Vc(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? b : "") + "]", e, c, d);
    });else if (c || "object" !== m.type(b)) d(a, b);else for (e in b) {
      Vc(a + "[" + e + "]", b[e], c, d);
    }
  }m.param = function (a, b) {
    var c,
        d = [],
        e = function e(a, b) {
      b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
    };if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) m.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) {
      Vc(c, a[c], b, e);
    }return d.join("&").replace(Qc, "+");
  }, m.fn.extend({ serialize: function serialize() {
      return m.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var a = m.prop(this, "elements");return a ? m.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;return this.name && !m(this).is(":disabled") && Uc.test(this.nodeName) && !Tc.test(a) && (this.checked || !W.test(a));
      }).map(function (a, b) {
        var c = m(this).val();return null == c ? null : m.isArray(c) ? m.map(c, function (a) {
          return { name: b.name, value: a.replace(Sc, "\r\n") };
        }) : { name: b.name, value: c.replace(Sc, "\r\n") };
      }).get();
    } }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
    return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zc() || $c();
  } : Zc;var Wc = 0,
      Xc = {},
      Yc = m.ajaxSettings.xhr();a.attachEvent && a.attachEvent("onunload", function () {
    for (var a in Xc) {
      Xc[a](void 0, !0);
    }
  }), k.cors = !!Yc && "withCredentials" in Yc, Yc = k.ajax = !!Yc, Yc && m.ajaxTransport(function (a) {
    if (!a.crossDomain || k.cors) {
      var _b3;return { send: function send(c, d) {
          var e,
              f = a.xhr(),
              g = ++Wc;if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) {
            f[e] = a.xhrFields[e];
          }a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");for (e in c) {
            void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
          }f.send(a.hasContent && a.data || null), _b3 = function b(c, e) {
            var h, i, j;if (_b3 && (e || 4 === f.readyState)) if (delete Xc[g], _b3 = void 0, f.onreadystatechange = m.noop, e) 4 !== f.readyState && f.abort();else {
              j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);try {
                i = f.statusText;
              } catch (k) {
                i = "";
              }h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404;
            }j && d(h, i, j, f.getAllResponseHeaders());
          }, a.async ? 4 === f.readyState ? setTimeout(_b3) : f.onreadystatechange = Xc[g] = _b3 : _b3();
        }, abort: function abort() {
          _b3 && _b3(void 0, !0);
        } };
    }
  });function Zc() {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  }function $c() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP");
    } catch (b) {}
  }m.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function textScript(a) {
        return m.globalEval(a), a;
      } } }), m.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1);
  }), m.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b,
          c = y.head || m("head")[0] || y.documentElement;return { send: function send(d, e) {
          b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
            (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"));
          }, c.insertBefore(b, c.firstChild);
        }, abort: function abort() {
          b && b.onload(void 0, !0);
        } };
    }
  });var _c = [],
      ad = /(=)\?(?=&|$)|\?\?/;m.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var a = _c.pop() || m.expando + "_" + vc++;return this[a] = !0, a;
    } }), m.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
        f,
        g,
        h = b.jsonp !== !1 && (ad.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ad.test(b.data) && "data");return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ad, "$1" + e) : b.jsonp !== !1 && (b.url += (wc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || m.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _c.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script") : void 0;
  }), m.parseHTML = function (a, b, c) {
    if (!a || "string" != typeof a) return null;"boolean" == typeof b && (c = b, b = !1), b = b || y;var d = u.exec(a),
        e = !c && [];return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes));
  };var bd = m.fn.load;m.fn.load = function (a, b, c) {
    if ("string" != typeof a && bd) return bd.apply(this, arguments);var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (f = "POST"), g.length > 0 && m.ajax({ url: a, type: f, dataType: "html", data: b }).done(function (a) {
      e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a);
    }).complete(c && function (a, b) {
      g.each(c, e || [a.responseText, b, a]);
    }), this;
  }, m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    m.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), m.expr.filters.animated = function (a) {
    return m.grep(m.timers, function (b) {
      return a === b.elem;
    }).length;
  };var cd = a.document.documentElement;function dd(a) {
    return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1;
  }m.offset = { setOffset: function setOffset(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = m.css(a, "position"),
          l = m(a),
          n = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n);
    } }, m.fn.extend({ offset: function offset(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        m.offset.setOffset(this, a, b);
      });var b,
          c,
          d = { top: 0, left: 0 },
          e = this[0],
          f = e && e.ownerDocument;if (f) return b = f.documentElement, m.contains(b, e) ? (_typeof(e.getBoundingClientRect) !== K && (d = e.getBoundingClientRect()), c = dd(f), { top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0), left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0) }) : d;
    }, position: function position() {
      if (this[0]) {
        var a,
            b,
            c = { top: 0, left: 0 },
            d = this[0];return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), { top: b.top - c.top - m.css(d, "marginTop", !0), left: b.left - c.left - m.css(d, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        var a = this.offsetParent || cd;while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position")) {
          a = a.offsetParent;
        }return a || cd;
      });
    } }), m.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
    var c = /Y/.test(b);m.fn[a] = function (d) {
      return V(this, function (a, d, e) {
        var f = dd(a);return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e);
      }, a, d, arguments.length, null);
    };
  }), m.each(["top", "left"], function (a, b) {
    m.cssHooks[b] = Lb(k.pixelPosition, function (a, c) {
      return c ? (c = Jb(a, b), Hb.test(c) ? m(a).position()[b] + "px" : c) : void 0;
    });
  }), m.each({ Height: "height", Width: "width" }, function (a, b) {
    m.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
      m.fn[d] = function (d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
            g = c || (d === !0 || e === !0 ? "margin" : "border");return V(this, function (b, c, d) {
          var e;return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g);
        }, b, f ? d : void 0, f, null);
      };
    });
  }), m.fn.size = function () {
    return this.length;
  }, m.fn.andSelf = m.fn.addBack, "function" == "function" && __webpack_require__(9) && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
    return m;
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var ed = a.jQuery,
      fd = a.$;return m.noConflict = function (b) {
    return a.$ === m && (a.$ = fd), b && a.jQuery === m && (a.jQuery = ed), m;
  }, (typeof b === "undefined" ? "undefined" : _typeof(b)) === K && (a.jQuery = a.$ = m), m;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)(module)))

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_vue__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__app_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_assets_css_mui_min_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_assets_css_mui_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_assets_css_mui_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_assets_css_icons_extra_css__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_assets_css_icons_extra_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_assets_css_icons_extra_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_assets_css_mui_imageviewer_css__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_assets_css_mui_imageviewer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_assets_css_mui_imageviewer_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_assets_css_public_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_assets_css_public_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_assets_css_public_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_assets_css_report_score_dota_css__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_assets_css_report_score_dota_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_assets_css_report_score_dota_css__);







__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
    el: '#app',
    render: function render(h) {
        return h(__WEBPACK_IMPORTED_MODULE_1__app_vue___default.a);
    }
});

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAABBCAYAAACAXrcqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA8BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ODA3YjdhOWQtNzQzYS1jNDRiLWJiNGItN2RlYWExZTNhZWJiIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjYxMzA2NkQ2RjdENzExRTY5NzYyODA0N0RFNjBCNkY1IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYxMzA2NkQ1RjdENzExRTY5NzYyODA0N0RFNjBCNkY1IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyY2Q0OTU4OC04ZjY2LTdlNDItYTU5Mi05NGM2ZWU2ZjYzNDIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODA3YjdhOWQtNzQzYS1jNDRiLWJiNGItN2RlYWExZTNhZWJiIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VGxUQQAABX1JREFUeNrkm1tsFVUUhs/U2lIthYKAFgiBNmhQi6gtNuCTMSWhwWjQpAgB0aD2oRqC4QGJ+qSJ0aDxCkGNIRbBREtaQBBQS6nhDipJsQWDto1aq1xSWm7jv5J/62I8px5OZ8+ZqSv5us9cutf+Z/aefZk1juu6sQBtNFgFvgXPgZ7APIvQgJgPutx/7HswNSj/QTgpBFuVwLXgS/6+CN4AQ6IsNAc8C7op6ih4TB1/R4lvB5XAiZrQ+0GLEvIBhXvPmwzq1HlNoCQKQqeAHargW0B5Ev9XBfar6rwajA2j0PFgDQspdgQsTiEfXZ3PghVgVBiEjgOrwDlVQClsZj/ynAg+UvmdAS+B4ekQOontTgv8kML9qiV3gE9U/qfAq6lW6Ss52WF726iqqMsqe5PFp/c08JnyJxe3Btzlt9ACsBQ0u5fbu+wjgxpwlHiqtNhhsIRlTEmotIeFYDM4rzL+mn3j4AAFehkDXgbfqHJd5KBkQaKy6c5dqshysAtc8Fy5j0FFGsUl4j6WTVsv2AaeYfXONkJf8DxUjEm7eARcG0KBXgaBR/n88FqPND15wNRibD8L7AINYDu5EIumZYNycDeZCtbK1dhJ5dMjcOeulHJq+zwDavN4JU7GBp79wXSoCM3hxtkBKNRoyhGhWdw4FxvAlhH7n5gIdQewaNMse0TcKW4MtuhQmkc1aAKnSRP3ZVn0O8gIjXFWL1Zm6RE/GhxwE9sBnmPD90z6qNN3NM/SnawDt/EOPkQ/efzdxGP17OitVt1Obgy34OhxJXImWK+q7nrukxHZZLDIgv9hTLtEaAc3Ciw4msN0heq8vR36a55z/TSjqV2EtqlVdL/tdqa1fZyzgekUC/5vYNohQlu5UZimLuBqpuct5G00tYrQFotC9zOd1cc5M5h+Z8H/jUyb5RGcpSbamT4/3quZbyPIj3M8X82eqn32natWER2z8wh3TvLZmczuDzJvWbmYzQLk8ncjjx0yKwE+Uqb8/r2UsoY756ZhwHDQ0oDB1KbXZduMb3czLbPQTto4y38a7FX793JfqXry+2klTPfJH4cvgovBIb6gLbb9SpapY9nPj2AcGC+/jVBx+gsYAcZYusJBCr2ZT3HpOov01MzlgliMw7KoWwXTL+JNvOuT6POiYvcyrTM7HBWsMYTVV2YR+eDPiFZdaZPHuNg3CvR676gc2MrflRG+m5VqDN2baM2ohunsCAst92hhPbq8k5Xh4K/saKdZmvUbs7lgfQJk6GPeOypLnu+pSXPU7AmmK8ElfcCJEzkmjfkoyGSHeyIiD6M7wR7QzXJ3/te67nGwjr+XWbjqO0GjhXyXqLvZ+e/LmzhGwUzdiiLwMmk6y9qdaILQ1z+/r0Lawi60nmV9MZUYBrkyp5lBRYhFLmIZO0BeqsEaS/XkNYRIsGQryzivP1EpmWrSvDqEQmtYts1+hN8UMw7A5fJHWES+zTJ1JRNklWymTzHT38CEEIgsZXkugQf8jByTgcU6Zr7Pr0DEFJEL/TPL8oqNELlrVBDTljSF5YxltJhYLbjKVtDjCPADHW3wDpwtcx1ooO8GXnir0Z0Sm/sTHX6aILLabwqUyMOpxOD3J4y13cTwgJEWRRapLk5EXh90YHKhipuXgtxiKTa/Sw1ahqUrAnskC2Ae9VU+ilypJuk1jPdLa0x9tuq8TaH68x3LrWwOLkNoF/vxmYif1axSVbNjKb4d0x8PtPi5nGOjn9vk+RxkRhL/96TqoyXI+C2+cQv9Bz4PgjYlWDr3e+Kct5BBxK4adZVG8ZOtZeCkEiJ3+2FO/75S+4+DOTYHIEGMaKRLeB78HufdaDOjvLNsl8MJ8PvRXDAXVPFt3Ztgo3dZ0pb9JcAALrAJdFz1owQAAAAASUVORK5CYII="

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Cropper v0.9.2
 * https://github.com/fengyuanchen/cropper
 *
 * Copyright (c) 2014-2015 Fengyuan Chen and contributors
 * Released under the MIT license
 *
 * Date: 2015-04-18T04:35:01.500Z
 */

(function (factory) {
    if (true) {
        // AMD. Register as anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(28)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
        // Node / CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals.
        factory(jQuery);
    }
})(function ($) {

    'use strict';

    var $window = $(window),
        $document = $(document),
        location = window.location,


    // Constants
    CROPPER_NAMESPACE = '.cropper',
        CROPPER_PREVIEW = 'preview' + CROPPER_NAMESPACE,


    // RegExps
    REGEXP_DRAG_TYPES = /^(e|n|w|s|ne|nw|sw|se|all|crop|move|zoom)$/,


    // Classes
    CLASS_MODAL = 'cropper-modal',
        CLASS_HIDE = 'cropper-hide',
        CLASS_HIDDEN = 'cropper-hidden',
        CLASS_INVISIBLE = 'cropper-invisible',
        CLASS_MOVE = 'cropper-move',
        CLASS_CROP = 'cropper-crop',
        CLASS_DISABLED = 'cropper-disabled',
        CLASS_BG = 'cropper-bg',


    // Events
    EVENT_MOUSE_DOWN = 'mousedown touchstart',
        EVENT_MOUSE_MOVE = 'mousemove touchmove',
        EVENT_MOUSE_UP = 'mouseup mouseleave touchend touchleave touchcancel',
        EVENT_WHEEL = 'wheel mousewheel DOMMouseScroll',
        EVENT_DBLCLICK = 'dblclick',
        EVENT_RESIZE = 'resize' + CROPPER_NAMESPACE,
        // Bind to window with namespace
    EVENT_BUILD = 'build' + CROPPER_NAMESPACE,
        EVENT_BUILT = 'built' + CROPPER_NAMESPACE,
        EVENT_DRAG_START = 'dragstart' + CROPPER_NAMESPACE,
        EVENT_DRAG_MOVE = 'dragmove' + CROPPER_NAMESPACE,
        EVENT_DRAG_END = 'dragend' + CROPPER_NAMESPACE,
        EVENT_ZOOM_IN = 'zoomin' + CROPPER_NAMESPACE,
        EVENT_ZOOM_OUT = 'zoomout' + CROPPER_NAMESPACE,


    // Supports
    SUPPORT_CANVAS = $.isFunction($('<canvas>')[0].getContext),


    // Others
    sqrt = Math.sqrt,
        min = Math.min,
        max = Math.max,
        abs = Math.abs,
        sin = Math.sin,
        cos = Math.cos,
        num = parseFloat,


    // Prototype
    prototype = {};

    function isNumber(n) {
        return typeof n === 'number';
    }

    function isUndefined(n) {
        return typeof n === 'undefined';
    }

    function toArray(obj, offset) {
        var args = [];

        if (isNumber(offset)) {
            // It's necessary for IE8
            args.push(offset);
        }

        return args.slice.apply(obj, args);
    }

    // Custom proxy to avoid jQuery's guid
    function proxy(fn, context) {
        var args = toArray(arguments, 2);

        return function () {
            return fn.apply(context, args.concat(toArray(arguments)));
        };
    }

    function isCrossOriginURL(url) {
        var parts = url.match(/^(https?:)\/\/([^\:\/\?#]+):?(\d*)/i);

        return parts && (parts[1] !== location.protocol || parts[2] !== location.hostname || parts[3] !== location.port);
    }

    function addTimestamp(url) {
        var timestamp = 'timestamp=' + new Date().getTime();

        return url + (url.indexOf('?') === -1 ? '?' : '&') + timestamp;
    }

    function inRange(source, target) {
        return target.left < 0 && source.width < target.left + target.width && target.top < 0 && source.height < target.top + target.height;
    }

    function getRotateValue(degree) {
        return degree ? 'rotate(' + degree + 'deg)' : 'none';
    }

    function getRotatedSizes(data, reverse) {
        var deg = abs(data.degree) % 180,
            arc = (deg > 90 ? 180 - deg : deg) * Math.PI / 180,
            sinArc = sin(arc),
            cosArc = cos(arc),
            width = data.width,
            height = data.height,
            aspectRatio = data.aspectRatio,
            newWidth,
            newHeight;

        if (!reverse) {
            newWidth = width * cosArc + height * sinArc;
            newHeight = width * sinArc + height * cosArc;
        } else {
            newWidth = width / (cosArc + sinArc / aspectRatio);
            newHeight = newWidth / aspectRatio;
        }

        return {
            width: newWidth,
            height: newHeight
        };
    }

    function getSourceCanvas(image, data) {
        var canvas = $('<canvas>')[0],
            context = canvas.getContext('2d'),
            width = data.naturalWidth,
            height = data.naturalHeight,
            rotate = data.rotate,
            rotated = getRotatedSizes({
            width: width,
            height: height,
            degree: rotate
        });

        if (rotate) {
            canvas.width = rotated.width;
            canvas.height = rotated.height;
            context.save();
            context.translate(rotated.width / 2, rotated.height / 2);
            context.rotate(rotate * Math.PI / 180);
            context.drawImage(image, -width / 2, -height / 2, width, height);
            context.restore();
        } else {
            canvas.width = width;
            canvas.height = height;
            context.drawImage(image, 0, 0, width, height);
        }

        return canvas;
    }

    function Cropper(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, Cropper.DEFAULTS, $.isPlainObject(options) && options);

        this.ready = false;
        this.built = false;
        this.rotated = false;
        this.cropped = false;
        this.disabled = false;
        this.canvas = null;
        this.cropBox = null;

        this.load();
    }

    prototype.load = function (url) {
        var options = this.options,
            $this = this.$element,
            crossOrigin,
            bustCacheUrl,
            buildEvent,
            $clone;

        if (!url) {
            if ($this.is('img')) {
                if (!$this.attr('src')) {
                    return;
                }

                url = $this.prop('src');
            } else if ($this.is('canvas') && SUPPORT_CANVAS) {
                url = $this[0].toDataURL();
            }
        }

        if (!url) {
            return;
        }

        buildEvent = $.Event(EVENT_BUILD);
        $this.one(EVENT_BUILD, options.build).trigger(buildEvent); // Only trigger once

        if (buildEvent.isDefaultPrevented()) {
            return;
        }

        if (options.checkImageOrigin && isCrossOriginURL(url)) {
            crossOrigin = 'anonymous';

            if (!$this.prop('crossOrigin')) {
                // Only when there was not a "crossOrigin" property
                bustCacheUrl = addTimestamp(url); // Bust cache (#148)
            }
        }

        this.$clone = $clone = $('<img>');

        $clone.one('load', $.proxy(function () {
            var naturalWidth = $clone.prop('naturalWidth') || $clone.width(),
                naturalHeight = $clone.prop('naturalHeight') || $clone.height();

            this.image = {
                naturalWidth: naturalWidth,
                naturalHeight: naturalHeight,
                aspectRatio: naturalWidth / naturalHeight,
                rotate: 0
            };

            this.url = url;
            this.ready = true;
            this.build();
        }, this)).one('error', function () {
            $clone.remove();
        }).attr({
            src: bustCacheUrl || url,
            crossOrigin: crossOrigin
        });

        // Hide and insert into the document
        $clone.addClass(CLASS_HIDE).insertAfter($this);
    };

    prototype.build = function () {
        var $this = this.$element,
            $clone = this.$clone,
            options = this.options,
            $cropper,
            $cropBox;

        if (!this.ready) {
            return;
        }

        if (this.built) {
            this.unbuild();
        }

        // Create cropper elements
        this.$cropper = $cropper = $(Cropper.TEMPLATE);

        // Hide the original image
        $this.addClass(CLASS_HIDDEN);

        // Show the clone iamge
        $clone.removeClass(CLASS_HIDE);

        this.$container = $this.parent().append($cropper);
        this.$canvas = $cropper.find('.cropper-canvas').append($clone);
        this.$dragBox = $cropper.find('.cropper-drag-box');
        this.$cropBox = $cropBox = $cropper.find('.cropper-crop-box');
        this.$viewBox = $cropper.find('.cropper-view-box');

        this.addListeners();
        this.initPreview();

        // Format aspect ratio
        options.aspectRatio = num(options.aspectRatio) || NaN; // 0 -> NaN

        if (options.autoCrop) {
            this.cropped = true;

            if (options.modal) {
                this.$dragBox.addClass(CLASS_MODAL);
            }
        } else {
            $cropBox.addClass(CLASS_HIDDEN);
        }

        if (options.background) {
            $cropper.addClass(CLASS_BG);
        }

        if (!options.highlight) {
            $cropBox.find('.cropper-face').addClass(CLASS_INVISIBLE);
        }

        if (!options.guides) {
            $cropBox.find('.cropper-dashed').addClass(CLASS_HIDDEN);
        }

        if (!options.movable) {
            $cropBox.find('.cropper-face').data('drag', 'move');
        }

        if (!options.resizable) {
            $cropBox.find('.cropper-line, .cropper-point').addClass(CLASS_HIDDEN);
        }

        this.setDragMode(options.dragCrop ? 'crop' : 'move');

        this.built = true;
        this.render();
        $this.one(EVENT_BUILT, options.built).trigger(EVENT_BUILT); // Only trigger once
    };

    prototype.unbuild = function () {
        if (!this.built) {
            return;
        }

        this.built = false;
        this.container = null;
        this.canvas = null;
        this.cropBox = null; // This is necessary when replace
        this.removeListeners();

        this.resetPreview();
        this.$preview = null;

        this.$viewBox = null;
        this.$cropBox = null;
        this.$dragBox = null;
        this.$canvas = null;
        this.$container = null;

        this.$cropper.remove();
        this.$cropper = null;
    };

    $.extend(prototype, {
        render: function render() {
            this.initContainer();
            this.initCanvas();
            this.initCropBox();

            this.renderCanvas();

            if (this.cropped) {
                this.renderCropBox();
            }
        },

        initContainer: function initContainer() {
            var $this = this.$element,
                $container = this.$container,
                $cropper = this.$cropper,
                options = this.options;

            $cropper.addClass(CLASS_HIDDEN);
            $this.removeClass(CLASS_HIDDEN);

            $cropper.css(this.container = {
                width: max($container.width(), num(options.minContainerWidth) || 200),
                height: max($container.height(), num(options.minContainerHeight) || 100)
            });

            $this.addClass(CLASS_HIDDEN);
            $cropper.removeClass(CLASS_HIDDEN);
        },

        // image box (wrapper)
        initCanvas: function initCanvas() {
            var container = this.container,
                containerWidth = container.width,
                containerHeight = container.height,
                image = this.image,
                aspectRatio = image.aspectRatio,
                canvas = {
                aspectRatio: aspectRatio,
                width: containerWidth,
                height: containerHeight
            };

            if (containerHeight * aspectRatio > containerWidth) {
                canvas.height = containerWidth / aspectRatio;
            } else {
                canvas.width = containerHeight * aspectRatio;
            }

            canvas.oldLeft = canvas.left = (containerWidth - canvas.width) / 2;
            canvas.oldTop = canvas.top = (containerHeight - canvas.height) / 2;

            this.canvas = canvas;
            this.limitCanvas(true, true);
            this.initialImage = $.extend({}, image);
            this.initialCanvas = $.extend({}, canvas);
        },

        limitCanvas: function limitCanvas(size, position) {
            var options = this.options,
                strict = options.strict,
                container = this.container,
                containerWidth = container.width,
                containerHeight = container.height,
                canvas = this.canvas,
                aspectRatio = canvas.aspectRatio,
                cropBox = this.cropBox,
                cropped = this.cropped && cropBox,
                minCanvasWidth,
                minCanvasHeight;

            if (size) {
                minCanvasWidth = num(options.minCanvasWidth) || 0;
                minCanvasHeight = num(options.minCanvasHeight) || 0;

                if (minCanvasWidth) {
                    if (strict) {
                        minCanvasWidth = max(cropped ? cropBox.width : containerWidth, minCanvasWidth);
                    }

                    minCanvasHeight = minCanvasWidth / aspectRatio;
                } else if (minCanvasHeight) {

                    if (strict) {
                        minCanvasHeight = max(cropped ? cropBox.height : containerHeight, minCanvasHeight);
                    }

                    minCanvasWidth = minCanvasHeight * aspectRatio;
                } else if (strict) {
                    if (cropped) {
                        minCanvasWidth = cropBox.width;
                        minCanvasHeight = cropBox.height;

                        if (minCanvasHeight * aspectRatio > minCanvasWidth) {
                            minCanvasWidth = minCanvasHeight * aspectRatio;
                        } else {
                            minCanvasHeight = minCanvasWidth / aspectRatio;
                        }
                    } else {
                        minCanvasWidth = containerWidth;
                        minCanvasHeight = containerHeight;

                        if (minCanvasHeight * aspectRatio > minCanvasWidth) {
                            minCanvasHeight = minCanvasWidth / aspectRatio;
                        } else {
                            minCanvasWidth = minCanvasHeight * aspectRatio;
                        }
                    }
                }

                $.extend(canvas, {
                    minWidth: minCanvasWidth,
                    minHeight: minCanvasHeight,
                    maxWidth: Infinity,
                    maxHeight: Infinity
                });
            }

            if (position) {
                if (strict) {
                    if (cropped) {
                        canvas.minLeft = min(cropBox.left, cropBox.left + cropBox.width - canvas.width);
                        canvas.minTop = min(cropBox.top, cropBox.top + cropBox.height - canvas.height);
                        canvas.maxLeft = cropBox.left;
                        canvas.maxTop = cropBox.top;
                    } else {
                        canvas.minLeft = min(0, containerWidth - canvas.width);
                        canvas.minTop = min(0, containerHeight - canvas.height);
                        canvas.maxLeft = max(0, containerWidth - canvas.width);
                        canvas.maxTop = max(0, containerHeight - canvas.height);
                    }
                } else {
                    canvas.minLeft = -canvas.width;
                    canvas.minTop = -canvas.height;
                    canvas.maxLeft = containerWidth;
                    canvas.maxTop = containerHeight;
                }
            }
        },

        renderCanvas: function renderCanvas(changed) {
            var options = this.options,
                canvas = this.canvas,
                image = this.image,
                aspectRatio,
                rotated;

            if (this.rotated) {
                this.rotated = false;

                // Computes rotatation sizes with image sizes
                rotated = getRotatedSizes({
                    width: image.width,
                    height: image.height,
                    degree: image.rotate
                });

                aspectRatio = rotated.width / rotated.height;

                if (aspectRatio !== canvas.aspectRatio) {
                    canvas.left -= (rotated.width - canvas.width) / 2;
                    canvas.top -= (rotated.height - canvas.height) / 2;
                    canvas.width = rotated.width;
                    canvas.height = rotated.height;
                    canvas.aspectRatio = aspectRatio;
                    this.limitCanvas(true, false);
                }
            }

            if (canvas.width > canvas.maxWidth || canvas.width < canvas.minWidth) {
                canvas.left = canvas.oldLeft;
            }

            if (canvas.height > canvas.maxHeight || canvas.height < canvas.minHeight) {
                canvas.top = canvas.oldTop;
            }

            canvas.width = min(max(canvas.width, canvas.minWidth), canvas.maxWidth);
            canvas.height = min(max(canvas.height, canvas.minHeight), canvas.maxHeight);

            this.limitCanvas(false, true);

            canvas.oldLeft = canvas.left = min(max(canvas.left, canvas.minLeft), canvas.maxLeft);
            canvas.oldTop = canvas.top = min(max(canvas.top, canvas.minTop), canvas.maxTop);

            this.$canvas.css({
                width: canvas.width,
                height: canvas.height,
                left: canvas.left,
                top: canvas.top
            });

            this.renderImage();

            if (this.cropped && options.strict && !inRange(this.container, canvas)) {
                this.limitCropBox(true, true);
            }

            if (changed) {
                this.output();
            }
        },

        renderImage: function renderImage() {
            var canvas = this.canvas,
                image = this.image,
                reversed;

            if (image.rotate) {
                reversed = getRotatedSizes({
                    width: canvas.width,
                    height: canvas.height,
                    degree: image.rotate,
                    aspectRatio: image.aspectRatio
                }, true);
            }

            $.extend(image, reversed ? {
                width: reversed.width,
                height: reversed.height,
                left: (canvas.width - reversed.width) / 2,
                top: (canvas.height - reversed.height) / 2
            } : {
                width: canvas.width,
                height: canvas.height,
                left: 0,
                top: 0
            });

            this.$clone.css({
                width: image.width,
                height: image.height,
                marginLeft: image.left,
                marginTop: image.top,
                transform: getRotateValue(image.rotate)
            });
        },

        initCropBox: function initCropBox() {
            var options = this.options,
                canvas = this.canvas,
                aspectRatio = options.aspectRatio,
                autoCropArea = num(options.autoCropArea) || 0.8,
                cropBox = {
                width: canvas.width,
                height: canvas.height
            };

            if (aspectRatio) {
                if (canvas.height * aspectRatio > canvas.width) {
                    cropBox.height = cropBox.width / aspectRatio;
                } else {
                    cropBox.width = cropBox.height * aspectRatio;
                }
            }

            this.cropBox = cropBox;
            this.limitCropBox(true, true);

            // Initialize auto crop area
            cropBox.width = min(max(cropBox.width, cropBox.minWidth), cropBox.maxWidth);
            cropBox.height = min(max(cropBox.height, cropBox.minHeight), cropBox.maxHeight);

            // The width of auto crop area must large than "minWidth", and the height too. (#164)
            cropBox.width = max(cropBox.minWidth, cropBox.width * autoCropArea);
            cropBox.height = max(cropBox.minHeight, cropBox.height * autoCropArea);
            cropBox.oldLeft = cropBox.left = canvas.left + (canvas.width - cropBox.width) / 2;
            cropBox.oldTop = cropBox.top = canvas.top + (canvas.height - cropBox.height) / 2;

            this.initialCropBox = $.extend({}, cropBox);
        },

        limitCropBox: function limitCropBox(size, position) {
            var options = this.options,
                strict = options.strict,
                container = this.container,
                containerWidth = container.width,
                containerHeight = container.height,
                canvas = this.canvas,
                cropBox = this.cropBox,
                aspectRatio = options.aspectRatio,
                minCropBoxWidth,
                minCropBoxHeight;

            if (size) {
                minCropBoxWidth = num(options.minCropBoxWidth) || 0;
                minCropBoxHeight = num(options.minCropBoxHeight) || 0;

                // min/maxCropBoxWidth/Height must less than conatiner width/height
                cropBox.minWidth = min(containerWidth, minCropBoxWidth);
                cropBox.minHeight = min(containerHeight, minCropBoxHeight);
                cropBox.maxWidth = min(containerWidth, strict ? canvas.width : containerWidth);
                cropBox.maxHeight = min(containerHeight, strict ? canvas.height : containerHeight);

                if (aspectRatio) {
                    // compare crop box size with container first
                    if (cropBox.maxHeight * aspectRatio > cropBox.maxWidth) {
                        cropBox.minHeight = cropBox.minWidth / aspectRatio;
                        cropBox.maxHeight = cropBox.maxWidth / aspectRatio;
                    } else {
                        cropBox.minWidth = cropBox.minHeight * aspectRatio;
                        cropBox.maxWidth = cropBox.maxHeight * aspectRatio;
                    }
                }

                // The "minWidth" must be less than "maxWidth", and the "minHeight" too.
                cropBox.minWidth = min(cropBox.maxWidth, cropBox.minWidth);
                cropBox.minHeight = min(cropBox.maxHeight, cropBox.minHeight);
            }

            if (position) {
                if (strict) {
                    cropBox.minLeft = max(0, canvas.left);
                    cropBox.minTop = max(0, canvas.top);
                    cropBox.maxLeft = min(containerWidth, canvas.left + canvas.width) - cropBox.width;
                    cropBox.maxTop = min(containerHeight, canvas.top + canvas.height) - cropBox.height;
                } else {
                    cropBox.minLeft = 0;
                    cropBox.minTop = 0;
                    cropBox.maxLeft = containerWidth - cropBox.width;
                    cropBox.maxTop = containerHeight - cropBox.height;
                }
            }
        },

        renderCropBox: function renderCropBox() {
            var options = this.options,
                container = this.container,
                containerWidth = container.width,
                containerHeight = container.height,
                $cropBox = this.$cropBox,
                cropBox = this.cropBox;

            if (cropBox.width > cropBox.maxWidth || cropBox.width < cropBox.minWidth) {
                cropBox.left = cropBox.oldLeft;
            }

            if (cropBox.height > cropBox.maxHeight || cropBox.height < cropBox.minHeight) {
                cropBox.top = cropBox.oldTop;
            }

            cropBox.width = min(max(cropBox.width, cropBox.minWidth), cropBox.maxWidth);
            cropBox.height = min(max(cropBox.height, cropBox.minHeight), cropBox.maxHeight);

            this.limitCropBox(false, true);

            cropBox.oldLeft = cropBox.left = min(max(cropBox.left, cropBox.minLeft), cropBox.maxLeft);
            cropBox.oldTop = cropBox.top = min(max(cropBox.top, cropBox.minTop), cropBox.maxTop);

            if (options.movable) {
                $cropBox.find('.cropper-face').data('drag', cropBox.width === containerWidth && cropBox.height === containerHeight ? 'move' : 'all');
            }

            $cropBox.css({
                width: cropBox.width,
                height: cropBox.height,
                left: cropBox.left,
                top: cropBox.top
            });

            if (this.cropped && options.strict && !inRange(container, this.canvas)) {
                this.limitCanvas(true, true);
            }

            if (!this.disabled) {
                this.output();
            }
        },

        output: function output() {
            var options = this.options;

            this.preview();

            if (options.crop) {
                options.crop.call(this.$element, this.getData());
            }
        }
    });

    prototype.initPreview = function () {
        var url = this.url;

        this.$preview = $(this.options.preview);
        this.$viewBox.html('<img src="' + url + '">');

        // Override img element styles
        // Add `display:block` to avoid margin top issue (Occur only when margin-top <= -height)
        this.$preview.each(function () {
            var $this = $(this);

            $this.data(CROPPER_PREVIEW, {
                width: $this.width(),
                height: $this.height(),
                original: $this.html()
            }).html('<img src="' + url + '" style="display:block;width:100%;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation: 0deg!important">');
        });
    };

    prototype.resetPreview = function () {
        this.$preview.each(function () {
            var $this = $(this);

            $this.html($this.data(CROPPER_PREVIEW).original).removeData(CROPPER_PREVIEW);
        });
    };

    prototype.preview = function () {
        var image = this.image,
            canvas = this.canvas,
            cropBox = this.cropBox,
            width = image.width,
            height = image.height,
            left = cropBox.left - canvas.left - image.left,
            top = cropBox.top - canvas.top - image.top,
            rotate = image.rotate;

        if (!this.cropped || this.disabled) {
            return;
        }

        this.$viewBox.find('img').css({
            width: width,
            height: height,
            marginLeft: -left,
            marginTop: -top,
            transform: getRotateValue(rotate)
        });

        this.$preview.each(function () {
            var $this = $(this),
                data = $this.data(CROPPER_PREVIEW),
                ratio = data.width / cropBox.width,
                newWidth = data.width,
                newHeight = cropBox.height * ratio;

            if (newHeight > data.height) {
                ratio = data.height / cropBox.height;
                newWidth = cropBox.width * ratio;
                newHeight = data.height;
            }

            $this.width(newWidth).height(newHeight).find('img').css({
                width: width * ratio,
                height: height * ratio,
                marginLeft: -left * ratio,
                marginTop: -top * ratio,
                transform: getRotateValue(rotate)
            });
        });
    };

    prototype.addListeners = function () {
        var options = this.options;

        this.$element.on(EVENT_DRAG_START, options.dragstart).on(EVENT_DRAG_MOVE, options.dragmove).on(EVENT_DRAG_END, options.dragend).on(EVENT_ZOOM_IN, options.zoomin).on(EVENT_ZOOM_OUT, options.zoomout);
        this.$cropper.on(EVENT_MOUSE_DOWN, $.proxy(this.dragstart, this)).on(EVENT_DBLCLICK, $.proxy(this.dblclick, this));

        if (options.zoomable && options.mouseWheelZoom) {
            this.$cropper.on(EVENT_WHEEL, $.proxy(this.wheel, this));
        }

        $document.on(EVENT_MOUSE_MOVE, this._dragmove = proxy(this.dragmove, this)).on(EVENT_MOUSE_UP, this._dragend = proxy(this.dragend, this));

        if (options.responsive) {
            $window.on(EVENT_RESIZE, this._resize = proxy(this.resize, this));
        }
    };

    prototype.removeListeners = function () {
        var options = this.options;

        this.$element.off(EVENT_DRAG_START, options.dragstart).off(EVENT_DRAG_MOVE, options.dragmove).off(EVENT_DRAG_END, options.dragend).off(EVENT_ZOOM_IN, options.zoomin).off(EVENT_ZOOM_OUT, options.zoomout);
        this.$cropper.off(EVENT_MOUSE_DOWN, this.dragstart).off(EVENT_DBLCLICK, this.dblclick);

        if (options.zoomable && options.mouseWheelZoom) {
            this.$cropper.off(EVENT_WHEEL, this.wheel);
        }

        $document.off(EVENT_MOUSE_MOVE, this._dragmove).off(EVENT_MOUSE_UP, this._dragend);

        if (options.responsive) {
            $window.off(EVENT_RESIZE, this._resize);
        }
    };

    $.extend(prototype, {
        resize: function resize() {
            var $container = this.$container,
                container = this.container,
                canvasData,
                cropBoxData,
                ratio;

            if (this.disabled) {
                return;
            }

            ratio = $container.width() / container.width;

            if (ratio !== 1 || $container.height() !== container.height) {
                canvasData = this.getCanvasData();
                cropBoxData = this.getCropBoxData();

                this.render();
                this.setCanvasData($.each(canvasData, function (i, n) {
                    canvasData[i] = n * ratio;
                }));
                this.setCropBoxData($.each(cropBoxData, function (i, n) {
                    cropBoxData[i] = n * ratio;
                }));
            }
        },

        dblclick: function dblclick() {
            if (this.disabled) {
                return;
            }

            if (this.$dragBox.hasClass(CLASS_CROP)) {
                this.setDragMode('move');
            } else {
                this.setDragMode('crop');
            }
        },

        wheel: function wheel(event) {
            var e = event.originalEvent,
                delta = 1;

            if (this.disabled) {
                return;
            }

            event.preventDefault();

            if (e.deltaY) {
                delta = e.deltaY > 0 ? 1 : -1;
            } else if (e.wheelDelta) {
                delta = -e.wheelDelta / 120;
            } else if (e.detail) {
                delta = e.detail > 0 ? 1 : -1;
            }

            this.zoom(-delta * 0.1);
        },

        dragstart: function dragstart(event) {
            var options = this.options,
                originalEvent = event.originalEvent,
                touches = originalEvent && originalEvent.touches,
                e = event,
                dragType,
                dragStartEvent,
                touchesLength;

            if (this.disabled) {
                return;
            }

            if (touches) {
                touchesLength = touches.length;

                if (touchesLength > 1) {
                    if (options.zoomable && options.touchDragZoom && touchesLength === 2) {
                        e = touches[1];
                        this.startX2 = e.pageX;
                        this.startY2 = e.pageY;
                        dragType = 'zoom';
                    } else {
                        return;
                    }
                }

                e = touches[0];
            }

            dragType = dragType || $(e.target).data('drag');

            if (REGEXP_DRAG_TYPES.test(dragType)) {
                event.preventDefault();

                dragStartEvent = $.Event(EVENT_DRAG_START, {
                    originalEvent: originalEvent,
                    dragType: dragType
                });

                this.$element.trigger(dragStartEvent);

                if (dragStartEvent.isDefaultPrevented()) {
                    return;
                }

                this.dragType = dragType;
                this.cropping = false;
                this.startX = e.pageX;
                this.startY = e.pageY;

                if (dragType === 'crop') {
                    this.cropping = true;
                    this.$dragBox.addClass(CLASS_MODAL);
                }
            }
        },

        dragmove: function dragmove(event) {
            var options = this.options,
                originalEvent = event.originalEvent,
                touches = originalEvent && originalEvent.touches,
                e = event,
                dragType = this.dragType,
                dragMoveEvent,
                touchesLength;

            if (this.disabled) {
                return;
            }

            if (touches) {
                touchesLength = touches.length;

                if (touchesLength > 1) {
                    if (options.zoomable && options.touchDragZoom && touchesLength === 2) {
                        e = touches[1];
                        this.endX2 = e.pageX;
                        this.endY2 = e.pageY;
                    } else {
                        return;
                    }
                }

                e = touches[0];
            }

            if (dragType) {
                event.preventDefault();

                dragMoveEvent = $.Event(EVENT_DRAG_MOVE, {
                    originalEvent: originalEvent,
                    dragType: dragType
                });

                this.$element.trigger(dragMoveEvent);

                if (dragMoveEvent.isDefaultPrevented()) {
                    return;
                }

                this.endX = e.pageX;
                this.endY = e.pageY;

                this.change();
            }
        },

        dragend: function dragend(event) {
            var dragType = this.dragType,
                dragEndEvent;

            if (this.disabled) {
                return;
            }

            if (dragType) {
                event.preventDefault();

                dragEndEvent = $.Event(EVENT_DRAG_END, {
                    originalEvent: event.originalEvent,
                    dragType: dragType
                });

                this.$element.trigger(dragEndEvent);

                if (dragEndEvent.isDefaultPrevented()) {
                    return;
                }

                if (this.cropping) {
                    this.cropping = false;
                    this.$dragBox.toggleClass(CLASS_MODAL, this.cropped && this.options.modal);
                }

                this.dragType = '';
            }
        }
    });

    $.extend(prototype, {
        reset: function reset() {
            if (!this.built || this.disabled) {
                return;
            }

            this.image = $.extend({}, this.initialImage);
            this.canvas = $.extend({}, this.initialCanvas);
            this.renderCanvas();

            if (this.cropped) {
                this.cropBox = $.extend({}, this.initialCropBox);
                this.renderCropBox();
            }
        },

        clear: function clear() {
            if (!this.cropped || this.disabled) {
                return;
            }

            $.extend(this.cropBox, {
                left: 0,
                top: 0,
                width: 0,
                height: 0
            });

            this.cropped = false;
            this.renderCropBox();

            this.limitCanvas();
            this.renderCanvas(); // Render canvas after render crop box

            this.$dragBox.removeClass(CLASS_MODAL);
            this.$cropBox.addClass(CLASS_HIDDEN);
        },

        destroy: function destroy() {
            var $this = this.$element;

            if (this.ready) {
                this.unbuild();
                $this.removeClass(CLASS_HIDDEN);
            } else {
                this.$clone.off('load').remove();
            }

            $this.removeData('cropper');
        },

        replace: function replace(url) {
            if (!this.disabled && url) {
                this.load(url);
            }
        },

        enable: function enable() {
            if (this.built) {
                this.disabled = false;
                this.$cropper.removeClass(CLASS_DISABLED);
            }
        },

        disable: function disable() {
            if (this.built) {
                this.disabled = true;
                this.$cropper.addClass(CLASS_DISABLED);
            }
        },

        move: function move(offsetX, offsetY) {
            var canvas = this.canvas;

            if (this.built && !this.disabled && isNumber(offsetX) && isNumber(offsetY)) {
                canvas.left += offsetX;
                canvas.top += offsetY;
                this.renderCanvas(true);
            }
        },

        zoom: function zoom(delta) {
            var canvas = this.canvas,
                zoomEvent,
                width,
                height;

            delta = num(delta);

            if (delta && this.built && !this.disabled && this.options.zoomable) {
                zoomEvent = delta > 0 ? $.Event(EVENT_ZOOM_IN) : $.Event(EVENT_ZOOM_OUT);
                this.$element.trigger(zoomEvent);

                if (zoomEvent.isDefaultPrevented()) {
                    return;
                }

                delta = delta <= -1 ? 1 / (1 - delta) : delta <= 1 ? 1 + delta : delta;
                width = canvas.width * delta;
                height = canvas.height * delta;
                canvas.left -= (width - canvas.width) / 2;
                canvas.top -= (height - canvas.height) / 2;
                canvas.width = width;
                canvas.height = height;
                this.renderCanvas(true);
                this.setDragMode('move');
            }
        },

        rotate: function rotate(degree) {
            var image = this.image;

            degree = num(degree);

            if (degree && this.built && !this.disabled && this.options.rotatable) {
                image.rotate = (image.rotate + degree) % 360;
                this.rotated = true;
                this.renderCanvas(true);
            }
        },

        getData: function getData() {
            var cropBox = this.cropBox,
                canvas = this.canvas,
                image = this.image,
                ratio,
                data;

            if (this.built && this.cropped) {
                data = {
                    x: cropBox.left - canvas.left,
                    y: cropBox.top - canvas.top,
                    width: cropBox.width,
                    height: cropBox.height
                };

                ratio = image.width / image.naturalWidth;

                $.each(data, function (i, n) {
                    n = n / ratio;
                    data[i] = n;
                });
            } else {
                data = {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                };
            }

            data.rotate = image.rotate;

            return data;
        },

        getContainerData: function getContainerData() {
            return this.built ? this.container : {};
        },

        getImageData: function getImageData() {
            return this.ready ? this.image : {};
        },

        getCanvasData: function getCanvasData() {
            var canvas = this.canvas,
                data;

            if (this.built) {
                data = {
                    left: canvas.left,
                    top: canvas.top,
                    width: canvas.width,
                    height: canvas.height
                };
            }

            return data || {};
        },

        setCanvasData: function setCanvasData(data) {
            var canvas = this.canvas,
                aspectRatio = canvas.aspectRatio;

            if (this.built && !this.disabled && $.isPlainObject(data)) {
                if (isNumber(data.left)) {
                    canvas.left = data.left;
                }

                if (isNumber(data.top)) {
                    canvas.top = data.top;
                }

                if (isNumber(data.width)) {
                    canvas.width = data.width;
                    canvas.height = data.width / aspectRatio;
                } else if (isNumber(data.height)) {
                    canvas.height = data.height;
                    canvas.width = data.height * aspectRatio;
                }

                this.renderCanvas(true);
            }
        },

        getCropBoxData: function getCropBoxData() {
            var cropBox = this.cropBox,
                data;

            if (this.built && this.cropped) {
                data = {
                    left: cropBox.left,
                    top: cropBox.top,
                    width: cropBox.width,
                    height: cropBox.height
                };
            }

            return data || {};
        },

        setCropBoxData: function setCropBoxData(data) {
            var cropBox = this.cropBox,
                aspectRatio = this.options.aspectRatio;

            if (this.built && this.cropped && !this.disabled && $.isPlainObject(data)) {

                if (isNumber(data.left)) {
                    cropBox.left = data.left;
                }

                if (isNumber(data.top)) {
                    cropBox.top = data.top;
                }

                if (aspectRatio) {
                    if (isNumber(data.width)) {
                        cropBox.width = data.width;
                        cropBox.height = cropBox.width / aspectRatio;
                    } else if (isNumber(data.height)) {
                        cropBox.height = data.height;
                        cropBox.width = cropBox.height * aspectRatio;
                    }
                } else {
                    if (isNumber(data.width)) {
                        cropBox.width = data.width;
                    }

                    if (isNumber(data.height)) {
                        cropBox.height = data.height;
                    }
                }

                this.renderCropBox();
            }
        },

        getCroppedCanvas: function getCroppedCanvas(options) {
            var originalWidth, originalHeight, canvasWidth, canvasHeight, scaledWidth, scaledHeight, scaledRatio, aspectRatio, canvas, context, data;

            if (!this.built || !this.cropped || !SUPPORT_CANVAS) {
                return;
            }

            if (!$.isPlainObject(options)) {
                options = {};
            }

            data = this.getData();
            originalWidth = data.width;
            originalHeight = data.height;
            aspectRatio = originalWidth / originalHeight;

            if ($.isPlainObject(options)) {
                scaledWidth = options.width;
                scaledHeight = options.height;

                if (scaledWidth) {
                    scaledHeight = scaledWidth / aspectRatio;
                    scaledRatio = scaledWidth / originalWidth;
                } else if (scaledHeight) {
                    scaledWidth = scaledHeight * aspectRatio;
                    scaledRatio = scaledHeight / originalHeight;
                }
            }

            canvasWidth = scaledWidth || originalWidth;
            canvasHeight = scaledHeight || originalHeight;

            canvas = $('<canvas>')[0];
            canvas.width = canvasWidth;
            canvas.height = canvasHeight;
            context = canvas.getContext('2d');

            if (options.fillColor) {
                context.fillStyle = options.fillColor;
                context.fillRect(0, 0, canvasWidth, canvasHeight);
            }

            // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D.drawImage
            context.drawImage.apply(context, function () {
                var source = getSourceCanvas(this.$clone[0], this.image),
                    sourceWidth = source.width,
                    sourceHeight = source.height,
                    args = [source],
                    srcX = data.x,
                    // source canvas
                srcY = data.y,
                    srcWidth,
                    srcHeight,
                    dstX,
                    // destination canvas
                dstY,
                    dstWidth,
                    dstHeight;

                if (srcX <= -originalWidth || srcX > sourceWidth) {
                    srcX = srcWidth = dstX = dstWidth = 0;
                } else if (srcX <= 0) {
                    dstX = -srcX;
                    srcX = 0;
                    srcWidth = dstWidth = min(sourceWidth, originalWidth + srcX);
                } else if (srcX <= sourceWidth) {
                    dstX = 0;
                    srcWidth = dstWidth = min(originalWidth, sourceWidth - srcX);
                }

                if (srcWidth <= 0 || srcY <= -originalHeight || srcY > sourceHeight) {
                    srcY = srcHeight = dstY = dstHeight = 0;
                } else if (srcY <= 0) {
                    dstY = -srcY;
                    srcY = 0;
                    srcHeight = dstHeight = min(sourceHeight, originalHeight + srcY);
                } else if (srcY <= sourceHeight) {
                    dstY = 0;
                    srcHeight = dstHeight = min(originalHeight, sourceHeight - srcY);
                }

                args.push(srcX, srcY, srcWidth, srcHeight);

                // Scale destination sizes
                if (scaledRatio) {
                    dstX *= scaledRatio;
                    dstY *= scaledRatio;
                    dstWidth *= scaledRatio;
                    dstHeight *= scaledRatio;
                }

                // Avoid "IndexSizeError" in IE and Firefox
                if (dstWidth > 0 && dstHeight > 0) {
                    args.push(dstX, dstY, dstWidth, dstHeight);
                }

                return args;
            }.call(this));

            return canvas;
        },

        setAspectRatio: function setAspectRatio(aspectRatio) {
            var options = this.options;

            if (!this.disabled && !isUndefined(aspectRatio)) {
                options.aspectRatio = num(aspectRatio) || NaN; // 0 -> NaN

                if (this.built) {
                    this.initCropBox();

                    if (this.cropped) {
                        this.renderCropBox();
                    }
                }
            }
        },

        setDragMode: function setDragMode(mode) {
            var $dragBox = this.$dragBox,
                cropable = false,
                movable = false;

            if (!this.ready || this.disabled) {
                return;
            }

            switch (mode) {
                case 'crop':
                    if (this.options.dragCrop) {
                        cropable = true;
                        $dragBox.data('drag', mode);
                    } else {
                        movable = true;
                    }

                    break;

                case 'move':
                    movable = true;
                    $dragBox.data('drag', mode);

                    break;

                default:
                    $dragBox.removeData('drag');
            }

            $dragBox.toggleClass(CLASS_CROP, cropable).toggleClass(CLASS_MOVE, movable);
        }
    });

    prototype.change = function () {
        var dragType = this.dragType,
            options = this.options,
            canvas = this.canvas,
            container = this.container,
            cropBox = this.cropBox,
            width = cropBox.width,
            height = cropBox.height,
            left = cropBox.left,
            top = cropBox.top,
            right = left + width,
            bottom = top + height,
            minLeft = 0,
            minTop = 0,
            maxWidth = container.width,
            maxHeight = container.height,
            renderable = true,
            aspectRatio = options.aspectRatio,
            range = {
            x: this.endX - this.startX,
            y: this.endY - this.startY
        },
            offset;

        if (options.strict) {
            minLeft = cropBox.minLeft;
            minTop = cropBox.minTop;
            maxWidth = minLeft + min(container.width, canvas.width);
            maxHeight = minTop + min(container.height, canvas.height);
        }

        if (aspectRatio) {
            range.X = range.y * aspectRatio;
            range.Y = range.x / aspectRatio;
        }

        switch (dragType) {
            // Move cropBox
            case 'all':
                left += range.x;
                top += range.y;
                break;

            // Resize cropBox
            case 'e':
                if (range.x >= 0 && (right >= maxWidth || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
                    renderable = false;
                    break;
                }

                width += range.x;

                if (aspectRatio) {
                    height = width / aspectRatio;
                    top -= range.Y / 2;
                }

                if (width < 0) {
                    dragType = 'w';
                    width = 0;
                }

                break;

            case 'n':
                if (range.y <= 0 && (top <= minTop || aspectRatio && (left <= minLeft || right >= maxWidth))) {
                    renderable = false;
                    break;
                }

                height -= range.y;
                top += range.y;

                if (aspectRatio) {
                    width = height * aspectRatio;
                    left += range.X / 2;
                }

                if (height < 0) {
                    dragType = 's';
                    height = 0;
                }

                break;

            case 'w':
                if (range.x <= 0 && (left <= minLeft || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
                    renderable = false;
                    break;
                }

                width -= range.x;
                left += range.x;

                if (aspectRatio) {
                    height = width / aspectRatio;
                    top += range.Y / 2;
                }

                if (width < 0) {
                    dragType = 'e';
                    width = 0;
                }

                break;

            case 's':
                if (range.y >= 0 && (bottom >= maxHeight || aspectRatio && (left <= minLeft || right >= maxWidth))) {
                    renderable = false;
                    break;
                }

                height += range.y;

                if (aspectRatio) {
                    width = height * aspectRatio;
                    left -= range.X / 2;
                }

                if (height < 0) {
                    dragType = 'n';
                    height = 0;
                }

                break;

            case 'ne':
                if (aspectRatio) {
                    if (range.y <= 0 && (top <= minTop || right >= maxWidth)) {
                        renderable = false;
                        break;
                    }

                    height -= range.y;
                    top += range.y;
                    width = height * aspectRatio;
                } else {
                    if (range.x >= 0) {
                        if (right < maxWidth) {
                            width += range.x;
                        } else if (range.y <= 0 && top <= minTop) {
                            renderable = false;
                        }
                    } else {
                        width += range.x;
                    }

                    if (range.y <= 0) {
                        if (top > 0) {
                            height -= range.y;
                            top += range.y;
                        }
                    } else {
                        height -= range.y;
                        top += range.y;
                    }
                }

                if (width < 0 && height < 0) {
                    dragType = 'sw';
                    height = 0;
                    width = 0;
                } else if (width < 0) {
                    dragType = 'nw';
                    width = 0;
                } else if (height < 0) {
                    dragType = 'se';
                    height = 0;
                }

                break;

            case 'nw':
                if (aspectRatio) {
                    if (range.y <= 0 && (top <= minTop || left <= minLeft)) {
                        renderable = false;
                        break;
                    }

                    height -= range.y;
                    top += range.y;
                    width = height * aspectRatio;
                    left += range.X;
                } else {
                    if (range.x <= 0) {
                        if (left > 0) {
                            width -= range.x;
                            left += range.x;
                        } else if (range.y <= 0 && top <= minTop) {
                            renderable = false;
                        }
                    } else {
                        width -= range.x;
                        left += range.x;
                    }

                    if (range.y <= 0) {
                        if (top > 0) {
                            height -= range.y;
                            top += range.y;
                        }
                    } else {
                        height -= range.y;
                        top += range.y;
                    }
                }

                if (width < 0 && height < 0) {
                    dragType = 'se';
                    height = 0;
                    width = 0;
                } else if (width < 0) {
                    dragType = 'ne';
                    width = 0;
                } else if (height < 0) {
                    dragType = 'sw';
                    height = 0;
                }

                break;

            case 'sw':
                if (aspectRatio) {
                    if (range.x <= 0 && (left <= minLeft || bottom >= maxHeight)) {
                        renderable = false;
                        break;
                    }

                    width -= range.x;
                    left += range.x;
                    height = width / aspectRatio;
                } else {
                    if (range.x <= 0) {
                        if (left > 0) {
                            width -= range.x;
                            left += range.x;
                        } else if (range.y >= 0 && bottom >= maxHeight) {
                            renderable = false;
                        }
                    } else {
                        width -= range.x;
                        left += range.x;
                    }

                    if (range.y >= 0) {
                        if (bottom < maxHeight) {
                            height += range.y;
                        }
                    } else {
                        height += range.y;
                    }
                }

                if (width < 0 && height < 0) {
                    dragType = 'ne';
                    height = 0;
                    width = 0;
                } else if (width < 0) {
                    dragType = 'se';
                    width = 0;
                } else if (height < 0) {
                    dragType = 'nw';
                    height = 0;
                }

                break;

            case 'se':
                if (aspectRatio) {
                    if (range.x >= 0 && (right >= maxWidth || bottom >= maxHeight)) {
                        renderable = false;
                        break;
                    }

                    width += range.x;
                    height = width / aspectRatio;
                } else {
                    if (range.x >= 0) {
                        if (right < maxWidth) {
                            width += range.x;
                        } else if (range.y >= 0 && bottom >= maxHeight) {
                            renderable = false;
                        }
                    } else {
                        width += range.x;
                    }

                    if (range.y >= 0) {
                        if (bottom < maxHeight) {
                            height += range.y;
                        }
                    } else {
                        height += range.y;
                    }
                }

                if (width < 0 && height < 0) {
                    dragType = 'nw';
                    height = 0;
                    width = 0;
                } else if (width < 0) {
                    dragType = 'sw';
                    width = 0;
                } else if (height < 0) {
                    dragType = 'ne';
                    height = 0;
                }

                break;

            // Move image
            case 'move':
                canvas.left += range.x;
                canvas.top += range.y;
                this.renderCanvas(true);
                renderable = false;
                break;

            // Scale image
            case 'zoom':
                this.zoom(function (x1, y1, x2, y2) {
                    var z1 = sqrt(x1 * x1 + y1 * y1),
                        z2 = sqrt(x2 * x2 + y2 * y2);

                    return (z2 - z1) / z1;
                }(abs(this.startX - this.startX2), abs(this.startY - this.startY2), abs(this.endX - this.endX2), abs(this.endY - this.endY2)));

                this.startX2 = this.endX2;
                this.startY2 = this.endY2;
                renderable = false;
                break;

            // Crop image
            case 'crop':
                if (range.x && range.y) {
                    offset = this.$cropper.offset();
                    left = this.startX - offset.left;
                    top = this.startY - offset.top;
                    width = cropBox.minWidth;
                    height = cropBox.minHeight;

                    if (range.x > 0) {
                        if (range.y > 0) {
                            dragType = 'se';
                        } else {
                            dragType = 'ne';
                            top -= height;
                        }
                    } else {
                        if (range.y > 0) {
                            dragType = 'sw';
                            left -= width;
                        } else {
                            dragType = 'nw';
                            left -= width;
                            top -= height;
                        }
                    }

                    // Show the cropBox if is hidden
                    if (!this.cropped) {
                        this.cropped = true;
                        this.$cropBox.removeClass(CLASS_HIDDEN);
                    }
                }

                break;

            // No default
        }

        if (renderable) {
            cropBox.width = width;
            cropBox.height = height;
            cropBox.left = left;
            cropBox.top = top;
            this.dragType = dragType;

            this.renderCropBox();
        }

        // Override
        this.startX = this.endX;
        this.startY = this.endY;
    };

    $.extend(Cropper.prototype, prototype);

    Cropper.DEFAULTS = {
        // Defines the aspect ratio of the crop box
        // Type: Number
        aspectRatio: NaN,

        // Defines the percentage of automatic cropping area when initializes
        // Type: Number (Must large than 0 and less than 1)
        autoCropArea: 0.8, // 80%

        // Outputs the cropping results.
        // Type: Function
        crop: null,

        // Add extra containers for previewing
        // Type: String (jQuery selector)
        preview: '',

        // Toggles
        strict: true, // strict mode, the image cannot zoom out less than the container
        responsive: true, // Rebuild when resize the window
        checkImageOrigin: true, // Check if the target image is cross origin

        modal: true, // Show the black modal
        guides: true, // Show the dashed lines for guiding
        highlight: true, // Show the white modal to highlight the crop box
        background: true, // Show the grid background

        autoCrop: true, // Enable to crop the image automatically when initialize
        dragCrop: true, // Enable to create new crop box by dragging over the image
        movable: true, // Enable to move the crop box
        resizable: true, // Enable to resize the crop box
        rotatable: true, // Enable to rotate the image
        zoomable: true, // Enable to zoom the image
        touchDragZoom: true, // Enable to zoom the image by wheeling mouse
        mouseWheelZoom: true, // Enable to zoom the image by dragging touch

        // Dimensions
        minCanvasWidth: 0,
        minCanvasHeight: 0,
        minCropBoxWidth: 0,
        minCropBoxHeight: 0,
        minContainerWidth: 200,
        minContainerHeight: 100,

        // Events
        build: null, // Function
        built: null, // Function
        dragstart: null, // Function
        dragmove: null, // Function
        dragend: null, // Function
        zoomin: null, // Function
        zoomout: null // Function
    };

    Cropper.setDefaults = function (options) {
        $.extend(Cropper.DEFAULTS, options);
    };

    // Use the string compressor: Strmin (https://github.com/fengyuanchen/strmin)
    Cropper.TEMPLATE = function (source, words) {
        words = words.split(',');
        return source.replace(/\d+/g, function (i) {
            return words[i];
        });
    }('<0 6="5-container"><0 6="5-canvas"></0><0 6="5-2-9" 3-2="move"></0><0 6="5-crop-9"><1 6="5-view-9"></1><1 6="5-8 8-h"></1><1 6="5-8 8-v"></1><1 6="5-face" 3-2="all"></1><1 6="5-7 7-e" 3-2="e"></1><1 6="5-7 7-n" 3-2="n"></1><1 6="5-7 7-w" 3-2="w"></1><1 6="5-7 7-s" 3-2="s"></1><1 6="5-4 4-e" 3-2="e"></1><1 6="5-4 4-n" 3-2="n"></1><1 6="5-4 4-w" 3-2="w"></1><1 6="5-4 4-s" 3-2="s"></1><1 6="5-4 4-ne" 3-2="ne"></1><1 6="5-4 4-nw" 3-2="nw"></1><1 6="5-4 4-sw" 3-2="sw"></1><1 6="5-4 4-se" 3-2="se"></1></0></0>', 'div,span,drag,data,point,cropper,class,line,dashed,box');

    /* Template source:
    <div class="cropper-container">
      <div class="cropper-canvas"></div>
      <div class="cropper-drag-box" data-drag="move"></div>
      <div class="cropper-crop-box">
        <span class="cropper-view-box"></span>
        <span class="cropper-dashed dashed-h"></span>
        <span class="cropper-dashed dashed-v"></span>
        <span class="cropper-face" data-drag="all"></span>
        <span class="cropper-line line-e" data-drag="e"></span>
        <span class="cropper-line line-n" data-drag="n"></span>
        <span class="cropper-line line-w" data-drag="w"></span>
        <span class="cropper-line line-s" data-drag="s"></span>
        <span class="cropper-point point-e" data-drag="e"></span>
        <span class="cropper-point point-n" data-drag="n"></span>
        <span class="cropper-point point-w" data-drag="w"></span>
        <span class="cropper-point point-s" data-drag="s"></span>
        <span class="cropper-point point-ne" data-drag="ne"></span>
        <span class="cropper-point point-nw" data-drag="nw"></span>
        <span class="cropper-point point-sw" data-drag="sw"></span>
        <span class="cropper-point point-se" data-drag="se"></span>
      </div>
    </div>
    */

    // Save the other cropper
    Cropper.other = $.fn.cropper;

    // Register as jQuery plugin
    $.fn.cropper = function (options) {
        var args = toArray(arguments, 1),
            result;

        this.each(function () {
            var $this = $(this),
                data = $this.data('cropper'),
                fn;

            if (!data) {
                $this.data('cropper', data = new Cropper(this, options));
            }

            if (typeof options === 'string' && $.isFunction(fn = data[options])) {
                result = fn.apply(data, args);
            }
        });

        return isUndefined(result) ? this : result;
    };

    $.fn.cropper.Constructor = Cropper;
    $.fn.cropper.setDefaults = Cropper.setDefaults;

    // No conflict
    $.fn.cropper.noConflict = function () {
        $.fn.cropper = Cropper.other;
        return this;
    };
});

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', [_c('header', {
    staticClass: "mui-bar mui-bar-nav"
  }, [_c('a', {
    staticClass: "mui-action-back mui-icon mui-icon-left-nav mui-pull-left"
  }), _vm._v(" "), _c('a', {
    staticClass: "mui-icon-extra mui-icon-extra-share mui-pull-right",
    staticStyle: {
      "margin-top": "10px",
      "margin-right": "10px"
    }
  }), _vm._v(" "), _c('h1', {
    staticClass: "mui-title"
  }, [_vm._v("比赛报名")])]), _vm._v(" "), _c('footer', {
    staticClass: "mui-bar mui-bar-footer",
    attrs: {
      "id": "join_btn"
    }
  }, [_c('button', {
    staticClass: "mui-btn mui-btn-hong-creat",
    attrs: {
      "type": "button"
    }
  }, [_c('div', {
    staticClass: "btn_title"
  }, [_vm._v("结果成绩提交")]), _vm._v(" "), _c('div', {
    staticClass: "ts"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(18)
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "inform"
  }, [_vm._v("\n\t\t\t请认真阅读比赛结果呈报说明\n\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "mui-content"
  }, [_c('div', {
    staticClass: "match_info"
  }, [_c('div', {
    staticClass: "show_title1"
  }, [_vm._v("\n\t\t\t\t请填报比赛结果：\n\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "match_information"
  }, [_c('div', {
    staticClass: "match_game"
  }, [_c('div', {
    staticClass: "game_name"
  }, [_vm._v("比赛项目：\n\t\t\t\t\t\t"), _c('span', [_vm._v("DOTA2")])])])]), _vm._v(" "), _c('div', {
    staticClass: "match_time"
  }, [_vm._v("\n\t\t\t\t16.02.12 18：00-21:00\n\t\t\t\t"), _c('br'), _vm._v(" 赛制：BO3\n\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "tostartgame_box"
  }, [_c('div', {
    staticClass: "tostartgame_con"
  }, [_c('div', {
    staticClass: "team_logo"
  }, [_c('div', {
    staticClass: "zhuke"
  }, [_vm._v("\n\t\t\t\t\t\t\t主队\n\t\t\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "team_logo_box"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(0)
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "team_name"
  }, [_vm._v("\n\t\t\t\t\t\t\tTE-NAME\n\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "team_vs"
  }, [_c('div', {
    staticClass: "vs"
  }, [_vm._v("vs")]), _vm._v(" "), _c('div', {
    staticClass: "game_time"
  }, [_vm._v("2.12 12：00")])]), _vm._v(" "), _c('div', {
    staticClass: "team_logo"
  }, [_c('div', {
    staticClass: "zhuke"
  }, [_vm._v("\n\t\t\t\t\t\t\t客队\n\t\t\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "team_logo_box"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(0)
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "team_name"
  }, [_vm._v("\n\t\t\t\t\t\t\tTE-NAME\n\t\t\t\t\t\t")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "match_con"
  }, [_c('form', {
    attrs: {
      "action": "#"
    }
  }, [_c('div', {
    staticClass: "match_num"
  }, [_vm._v("\n\t\t\t\t\t第\n\t\t\t\t\t"), _c('span', [_vm._v("一")]), _vm._v("局比赛:\n\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "match_infomain"
  }, [_c('div', {
    staticClass: "match_info_zy"
  }, [_c('select', {
    staticClass: "mui-btn mui-btn-block"
  }, [_c('option', {
    attrs: {
      "value": "item-1"
    }
  }, [_vm._v("天灾")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "item-2"
    }
  }, [_vm._v("夜魇")])]), _vm._v(" "), _c('span', [_vm._v("阵营")]), _vm._v(" "), _c('select', {
    staticClass: "mui-btn mui-btn-block"
  }, [_c('option', {
    attrs: {
      "value": "item-1"
    }
  }, [_vm._v("天灾")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "item-2"
    }
  }, [_vm._v("夜魇")])])]), _vm._v(" "), _c('div', {
    staticClass: "match_info_zy"
  }, [_c('select', {
    staticClass: "mui-btn mui-btn-block"
  }, [_c('option', {
    attrs: {
      "value": "item-1"
    }
  }, [_vm._v("胜")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "item-2"
    }
  }, [_vm._v("负")])]), _vm._v(" "), _c('span', [_vm._v("结果")]), _vm._v(" "), _c('select', {
    staticClass: "mui-btn mui-btn-block"
  }, [_c('option', {
    attrs: {
      "value": "item-1"
    }
  }, [_vm._v("负")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "item-2"
    }
  }, [_vm._v("胜")])])]), _vm._v(" "), _c('div', {
    staticClass: "match_info_zy"
  }, [_c('div', {
    staticClass: "match_info_inputstyle"
  }, [_c('span', [_vm._v("比赛时长")]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "text",
      "id": "match_info_time",
      "value": "请输入比赛时长"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "match_info_zy"
  }, [_c('div', {
    staticClass: "match_info_inputstyle"
  }, [_c('span', [_vm._v("游戏端ID")]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "text",
      "id": "match_info_id",
      "value": "请输入游戏端比赛ID"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "face_con"
  }, [_c('div', {
    attrs: {
      "id": "face_box"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t \n\t\t\t\t\t\t")])])])])])]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "showEdit"
    }
  }, [_c('header', {
    staticClass: "mui-bar mui-bar-nav mui-nav-bg"
  }, [_c('a', {
    staticClass: "mui-icon  mui-icon-close_btn mui-pull-left",
    attrs: {
      "id": "close_btn"
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(29)
    }
  })]), _vm._v(" "), _c('a', {
    staticClass: "mui-icon mui-icon-check_btn mui-pull-right",
    attrs: {
      "id": "check_btn"
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(30)
    }
  })])]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "report"
    }
  }, [_vm._v("\n\t\t\t \n\t\t")])])])
}]}

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["$"] = __webpack_require__(12);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["jQuery"] = __webpack_require__(12);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.2.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( ">tbody", elem )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with computed style
	var valueIsBorderBox,
		styles = getStyles( elem ),
		val = curCSS( elem, name, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Computed unit is not pixels. Stop here and return.
	if ( rnumnonpx.test( val ) ) {
		return val;
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = isBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ name ] );

	// Fall back to offsetWidth/Height when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	if ( val === "auto" ) {
		val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
	}

	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
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

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var doc, docElem, rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		doc = elem.ownerDocument;
		docElem = doc.documentElement;
		win = doc.defaultView;

		return {
			top: rect.top + win.pageYOffset - docElem.clientTop,
			left: rect.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( jQuery.isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/close.png";

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/open.png";

/***/ }),

/***/ 31:
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 56:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["mui"] = __webpack_require__(7);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * =====================================================
 * Mui v3.3.0 (http://dev.dcloud.net.cn/mui)
 * =====================================================
 */
/**
 * MUI核心JS
 * @type _L4.$|Function
 */
var mui = function (document, undefined) {
    var readyRE = /complete|loaded|interactive/;
    var idSelectorRE = /^#([\w-]+)$/;
    var classSelectorRE = /^\.([\w-]+)$/;
    var tagSelectorRE = /^[\w-]+$/;
    var translateRE = /translate(?:3d)?\((.+?)\)/;
    var translateMatrixRE = /matrix(3d)?\((.+?)\)/;

    var $ = function $(selector, context) {
        context = context || document;
        if (!selector) return wrap();
        if ((typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) === 'object') if ($.isArrayLike(selector)) {
            return wrap($.slice.call(selector), null);
        } else {
            return wrap([selector], null);
        }
        if (typeof selector === 'function') return $.ready(selector);
        if (typeof selector === 'string') {
            try {
                selector = selector.trim();
                if (idSelectorRE.test(selector)) {
                    var found = document.getElementById(RegExp.$1);
                    return wrap(found ? [found] : []);
                }
                return wrap($.qsa(selector, context), selector);
            } catch (e) {}
        }
        return wrap();
    };

    var wrap = function wrap(dom, selector) {
        dom = dom || [];
        Object.setPrototypeOf(dom, $.fn);
        dom.selector = selector || '';
        return dom;
    };

    $.uuid = 0;

    $.data = {};
    /**
     * extend(simple)
     * @param {type} target
     * @param {type} source
     * @param {type} deep
     * @returns {unresolved}
     */
    $.extend = function () {
        //from jquery2
        var options,
            name,
            src,
            copy,
            copyIsArray,
            clone,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;

        if (typeof target === "boolean") {
            deep = target;

            target = arguments[i] || {};
            i++;
        }

        if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== "object" && !$.isFunction(target)) {
            target = {};
        }

        if (i === length) {
            target = this;
            i--;
        }

        for (; i < length; i++) {
            if ((options = arguments[i]) != null) {
                for (name in options) {
                    src = target[name];
                    copy = options[name];

                    if (target === copy) {
                        continue;
                    }

                    if (deep && copy && ($.isPlainObject(copy) || (copyIsArray = $.isArray(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && $.isArray(src) ? src : [];
                        } else {
                            clone = src && $.isPlainObject(src) ? src : {};
                        }

                        target[name] = $.extend(deep, clone, copy);
                    } else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }

        return target;
    };
    /**
     * mui noop(function)
     */
    $.noop = function () {};
    /**
     * mui slice(array)
     */
    $.slice = [].slice;
    /**
     * mui filter(array)
     */
    $.filter = [].filter;

    $.type = function (obj) {
        return obj == null ? String(obj) : class2type[{}.toString.call(obj)] || "object";
    };
    /**
     * mui isArray
     */
    $.isArray = Array.isArray || function (object) {
        return object instanceof Array;
    };
    /**
     * mui isArrayLike 
     * @param {Object} obj
     */
    $.isArrayLike = function (obj) {
        var length = !!obj && "length" in obj && obj.length;
        var type = $.type(obj);
        if (type === "function" || $.isWindow(obj)) {
            return false;
        }
        return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
    };
    /**
     * mui isWindow(需考虑obj为undefined的情况)
     */
    $.isWindow = function (obj) {
        return obj != null && obj === obj.window;
    };
    /**
     * mui isObject
     */
    $.isObject = function (obj) {
        return $.type(obj) === "object";
    };
    /**
     * mui isPlainObject
     */
    $.isPlainObject = function (obj) {
        return $.isObject(obj) && !$.isWindow(obj) && Object.getPrototypeOf(obj) === Object.prototype;
    };
    /**
     * mui isEmptyObject
     * @param {Object} o
     */
    $.isEmptyObject = function (o) {
        for (var p in o) {
            if (p !== undefined) {
                return false;
            }
        }
        return true;
    };
    /**
     * mui isFunction
     */
    $.isFunction = function (value) {
        return $.type(value) === "function";
    };
    /**
     * mui querySelectorAll
     * @param {type} selector
     * @param {type} context
     * @returns {Array}
     */
    $.qsa = function (selector, context) {
        context = context || document;
        return $.slice.call(classSelectorRE.test(selector) ? context.getElementsByClassName(RegExp.$1) : tagSelectorRE.test(selector) ? context.getElementsByTagName(selector) : context.querySelectorAll(selector));
    };
    /**
     * ready(DOMContentLoaded)
     * @param {type} callback
     * @returns {_L6.$}
     */
    $.ready = function (callback) {
        if (readyRE.test(document.readyState)) {
            callback($);
        } else {
            document.addEventListener('DOMContentLoaded', function () {
                callback($);
            }, false);
        }
        return this;
    };
    /**
     * 将 fn 缓存一段时间后, 再被调用执行
     * 此方法为了避免在 ms 段时间内, 执行 fn 多次. 常用于 resize , scroll , mousemove 等连续性事件中;
     * 当 ms 设置为 -1, 表示立即执行 fn, 即和直接调用 fn 一样;
     * 调用返回函数的 stop 停止最后一次的 buffer 效果
     * @param {Object} fn
     * @param {Object} ms
     * @param {Object} context
     */
    $.buffer = function (fn, ms, context) {
        var timer;
        var lastStart = 0;
        var lastEnd = 0;
        var ms = ms || 150;

        function run() {
            if (timer) {
                timer.cancel();
                timer = 0;
            }
            lastStart = $.now();
            fn.apply(context || this, arguments);
            lastEnd = $.now();
        }

        return $.extend(function () {
            if (!lastStart || // 从未运行过
            lastEnd >= lastStart && $.now() - lastEnd > ms || // 上次运行成功后已经超过ms毫秒
            lastEnd < lastStart && $.now() - lastStart > ms * 8 // 上次运行或未完成，后8*ms毫秒
            ) {
                    run();
                } else {
                if (timer) {
                    timer.cancel();
                }
                timer = $.later(run, ms, null, arguments);
            }
        }, {
            stop: function stop() {
                if (timer) {
                    timer.cancel();
                    timer = 0;
                }
            }
        });
    };
    /**
     * each
     * @param {type} elements
     * @param {type} callback
     * @returns {_L8.$}
     */
    $.each = function (elements, callback, hasOwnProperty) {
        if (!elements) {
            return this;
        }
        if (typeof elements.length === 'number') {
            [].every.call(elements, function (el, idx) {
                return callback.call(el, idx, el) !== false;
            });
        } else {
            for (var key in elements) {
                if (hasOwnProperty) {
                    if (elements.hasOwnProperty(key)) {
                        if (callback.call(elements[key], key, elements[key]) === false) return elements;
                    }
                } else {
                    if (callback.call(elements[key], key, elements[key]) === false) return elements;
                }
            }
        }
        return this;
    };
    $.focus = function (element) {
        if ($.os.ios) {
            setTimeout(function () {
                element.focus();
            }, 10);
        } else {
            element.focus();
        }
    };
    /**
     * trigger event
     * @param {type} element
     * @param {type} eventType
     * @param {type} eventData
     * @returns {_L8.$}
     */
    $.trigger = function (element, eventType, eventData) {
        element.dispatchEvent(new CustomEvent(eventType, {
            detail: eventData,
            bubbles: true,
            cancelable: true
        }));
        return this;
    };
    /**
     * getStyles
     * @param {type} element
     * @param {type} property
     * @returns {styles}
     */
    $.getStyles = function (element, property) {
        var styles = element.ownerDocument.defaultView.getComputedStyle(element, null);
        if (property) {
            return styles.getPropertyValue(property) || styles[property];
        }
        return styles;
    };
    /**
     * parseTranslate
     * @param {type} translateString
     * @param {type} position
     * @returns {Object}
     */
    $.parseTranslate = function (translateString, position) {
        var result = translateString.match(translateRE || '');
        if (!result || !result[1]) {
            result = ['', '0,0,0'];
        }
        result = result[1].split(",");
        result = {
            x: parseFloat(result[0]),
            y: parseFloat(result[1]),
            z: parseFloat(result[2])
        };
        if (position && result.hasOwnProperty(position)) {
            return result[position];
        }
        return result;
    };
    /**
     * parseTranslateMatrix
     * @param {type} translateString
     * @param {type} position
     * @returns {Object}
     */
    $.parseTranslateMatrix = function (translateString, position) {
        var matrix = translateString.match(translateMatrixRE);
        var is3D = matrix && matrix[1];
        if (matrix) {
            matrix = matrix[2].split(",");
            if (is3D === "3d") matrix = matrix.slice(12, 15);else {
                matrix.push(0);
                matrix = matrix.slice(4, 7);
            }
        } else {
            matrix = [0, 0, 0];
        }
        var result = {
            x: parseFloat(matrix[0]),
            y: parseFloat(matrix[1]),
            z: parseFloat(matrix[2])
        };
        if (position && result.hasOwnProperty(position)) {
            return result[position];
        }
        return result;
    };
    $.hooks = {};
    $.addAction = function (type, hook) {
        var hooks = $.hooks[type];
        if (!hooks) {
            hooks = [];
        }
        hook.index = hook.index || 1000;
        hooks.push(hook);
        hooks.sort(function (a, b) {
            return a.index - b.index;
        });
        $.hooks[type] = hooks;
        return $.hooks[type];
    };
    $.doAction = function (type, callback) {
        if ($.isFunction(callback)) {
            //指定了callback
            $.each($.hooks[type], callback);
        } else {
            //未指定callback，直接执行
            $.each($.hooks[type], function (index, hook) {
                return !hook.handle();
            });
        }
    };
    /**
     * setTimeout封装
     * @param {Object} fn
     * @param {Object} when
     * @param {Object} context
     * @param {Object} data
     */
    $.later = function (fn, when, context, data) {
        when = when || 0;
        var m = fn;
        var d = data;
        var f;
        var r;

        if (typeof fn === 'string') {
            m = context[fn];
        }

        f = function f() {
            m.apply(context, $.isArray(d) ? d : [d]);
        };

        r = setTimeout(f, when);

        return {
            id: r,
            cancel: function cancel() {
                clearTimeout(r);
            }
        };
    };
    $.now = Date.now || function () {
        return +new Date();
    };
    var class2type = {};
    $.each(['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Object', 'Error'], function (i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
    });
    if (window.JSON) {
        $.parseJSON = JSON.parse;
    }
    /**
     * $.fn
     */
    $.fn = {
        each: function each(callback) {
            [].every.call(this, function (el, idx) {
                return callback.call(el, idx, el) !== false;
            });
            return this;
        }
    };

    /**
     * 兼容 AMD 模块
     **/
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return $;
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }

    return $;
}(document);
// window.mui = mui;
//'$' in window || (window.$ = mui);
/**
 * $.os
 * @param {type} $
 * @returns {undefined}
 */
(function ($, window) {
    function detect(ua) {
        this.os = {};
        var funcs = [function () {
            //wechat
            var wechat = ua.match(/(MicroMessenger)\/([\d\.]+)/i);
            if (wechat) {
                //wechat
                this.os.wechat = {
                    version: wechat[2].replace(/_/g, '.')
                };
            }
            return false;
        }, function () {
            //android
            var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            if (android) {
                this.os.android = true;
                this.os.version = android[2];

                this.os.isBadAndroid = !/Chrome\/\d/.test(window.navigator.appVersion);
            }
            return this.os.android === true;
        }, function () {
            //ios
            var iphone = ua.match(/(iPhone\sOS)\s([\d_]+)/);
            if (iphone) {
                //iphone
                this.os.ios = this.os.iphone = true;
                this.os.version = iphone[2].replace(/_/g, '.');
            } else {
                var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
                if (ipad) {
                    //ipad
                    this.os.ios = this.os.ipad = true;
                    this.os.version = ipad[2].replace(/_/g, '.');
                }
            }
            return this.os.ios === true;
        }];
        [].every.call(funcs, function (func) {
            return !func.call($);
        });
    }
    detect.call($, navigator.userAgent);
})(mui, window);
/**
 * $.os.plus
 * @param {type} $
 * @returns {undefined}
 */
(function ($, document) {
    function detect(ua) {
        this.os = this.os || {};
        var plus = ua.match(/Html5Plus/i); //TODO 5\+Browser?
        if (plus) {
            this.os.plus = true;
            $(function () {
                document.body.classList.add('mui-plus');
            });
            if (ua.match(/StreamApp/i)) {
                //TODO 最好有流应用自己的标识
                this.os.stream = true;
                $(function () {
                    document.body.classList.add('mui-plus-stream');
                });
            }
        }
    }
    detect.call($, navigator.userAgent);
})(mui, document);
/**
 * 仅提供简单的on，off(仅支持事件委托，不支持当前元素绑定，当前元素绑定请直接使用addEventListener,removeEventListener)
 * @param {Object} $
 */
(function ($) {
    if ('ontouchstart' in window) {
        $.isTouchable = true;
        $.EVENT_START = 'touchstart';
        $.EVENT_MOVE = 'touchmove';
        $.EVENT_END = 'touchend';
    } else {
        $.isTouchable = false;
        $.EVENT_START = 'mousedown';
        $.EVENT_MOVE = 'mousemove';
        $.EVENT_END = 'mouseup';
    }
    $.EVENT_CANCEL = 'touchcancel';
    $.EVENT_CLICK = 'click';

    var _mid = 1;
    var delegates = {};
    //需要wrap的函数
    var eventMethods = {
        preventDefault: 'isDefaultPrevented',
        stopImmediatePropagation: 'isImmediatePropagationStopped',
        stopPropagation: 'isPropagationStopped'
    };
    //默认true返回函数
    var returnTrue = function returnTrue() {
        return true;
    };
    //默认false返回函数
    var returnFalse = function returnFalse() {
        return false;
    };
    //wrap浏览器事件
    var compatible = function compatible(event, target) {
        if (!event.detail) {
            event.detail = {
                currentTarget: target
            };
        } else {
            event.detail.currentTarget = target;
        }
        $.each(eventMethods, function (name, predicate) {
            var sourceMethod = event[name];
            event[name] = function () {
                this[predicate] = returnTrue;
                return sourceMethod && sourceMethod.apply(event, arguments);
            };
            event[predicate] = returnFalse;
        }, true);
        return event;
    };
    //简单的wrap对象_mid
    var mid = function mid(obj) {
        return obj && (obj._mid || (obj._mid = _mid++));
    };
    //事件委托对象绑定的事件回调列表
    var delegateFns = {};
    //返回事件委托的wrap事件回调
    var delegateFn = function delegateFn(element, event, selector, callback) {
        return function (e) {
            //same event
            var callbackObjs = delegates[element._mid][event];
            var handlerQueue = [];
            var target = e.target;
            var selectorAlls = {};
            for (; target && target !== document; target = target.parentNode) {
                if (target === element) {
                    break;
                }
                if (~['click', 'tap', 'doubletap', 'longtap', 'hold'].indexOf(event) && (target.disabled || target.classList.contains('mui-disabled'))) {
                    break;
                }
                var matches = {};
                $.each(callbackObjs, function (selector, callbacks) {
                    //same selector
                    selectorAlls[selector] || (selectorAlls[selector] = $.qsa(selector, element));
                    if (selectorAlls[selector] && ~selectorAlls[selector].indexOf(target)) {
                        if (!matches[selector]) {
                            matches[selector] = callbacks;
                        }
                    }
                }, true);
                if (!$.isEmptyObject(matches)) {
                    handlerQueue.push({
                        element: target,
                        handlers: matches
                    });
                }
            }
            selectorAlls = null;
            e = compatible(e); //compatible event
            $.each(handlerQueue, function (index, handler) {
                target = handler.element;
                var tagName = target.tagName;
                if (event === 'tap' && tagName !== 'INPUT' && tagName !== 'TEXTAREA' && tagName !== 'SELECT') {
                    e.preventDefault();
                    e.detail && e.detail.gesture && e.detail.gesture.preventDefault();
                }
                $.each(handler.handlers, function (index, handler) {
                    $.each(handler, function (index, callback) {
                        if (callback.call(target, e) === false) {
                            e.preventDefault();
                            e.stopPropagation();
                        }
                    }, true);
                }, true);
                if (e.isPropagationStopped()) {
                    return false;
                }
            }, true);
        };
    };
    var findDelegateFn = function findDelegateFn(element, event) {
        var delegateCallbacks = delegateFns[mid(element)];
        var result = [];
        if (delegateCallbacks) {
            result = [];
            if (event) {
                var filterFn = function filterFn(fn) {
                    return fn.type === event;
                };
                return delegateCallbacks.filter(filterFn);
            } else {
                result = delegateCallbacks;
            }
        }
        return result;
    };
    var preventDefaultException = /^(INPUT|TEXTAREA|BUTTON|SELECT)$/;
    /**
     * mui delegate events
     * @param {type} event
     * @param {type} selector
     * @param {type} callback
     * @returns {undefined}
     */
    $.fn.on = function (event, selector, callback) {
        //仅支持简单的事件委托,主要是tap事件使用，类似mouse,focus之类暂不封装支持
        return this.each(function () {
            var element = this;
            mid(element);
            mid(callback);
            var isAddEventListener = false;
            var delegateEvents = delegates[element._mid] || (delegates[element._mid] = {});
            var delegateCallbackObjs = delegateEvents[event] || (delegateEvents[event] = {});
            if ($.isEmptyObject(delegateCallbackObjs)) {
                isAddEventListener = true;
            }
            var delegateCallbacks = delegateCallbackObjs[selector] || (delegateCallbackObjs[selector] = []);
            delegateCallbacks.push(callback);
            if (isAddEventListener) {
                var delegateFnArray = delegateFns[mid(element)];
                if (!delegateFnArray) {
                    delegateFnArray = [];
                }
                var delegateCallback = delegateFn(element, event, selector, callback);
                delegateFnArray.push(delegateCallback);
                delegateCallback.i = delegateFnArray.length - 1;
                delegateCallback.type = event;
                delegateFns[mid(element)] = delegateFnArray;
                element.addEventListener(event, delegateCallback);
                if (event === 'tap') {
                    //TODO 需要找个更好的解决方案
                    element.addEventListener('click', function (e) {
                        if (e.target) {
                            var tagName = e.target.tagName;
                            if (!preventDefaultException.test(tagName)) {
                                if (tagName === 'A') {
                                    var href = e.target.href;
                                    if (!(href && ~href.indexOf('tel:'))) {
                                        e.preventDefault();
                                    }
                                } else {
                                    e.preventDefault();
                                }
                            }
                        }
                    });
                }
            }
        });
    };
    $.fn.off = function (event, selector, callback) {
        return this.each(function () {
            var _mid = mid(this);
            if (!event) {
                //mui(selector).off();
                delegates[_mid] && delete delegates[_mid];
            } else if (!selector) {
                //mui(selector).off(event);
                delegates[_mid] && delete delegates[_mid][event];
            } else if (!callback) {
                //mui(selector).off(event,selector);
                delegates[_mid] && delegates[_mid][event] && delete delegates[_mid][event][selector];
            } else {
                //mui(selector).off(event,selector,callback);
                var delegateCallbacks = delegates[_mid] && delegates[_mid][event] && delegates[_mid][event][selector];
                $.each(delegateCallbacks, function (index, delegateCallback) {
                    if (mid(delegateCallback) === mid(callback)) {
                        delegateCallbacks.splice(index, 1);
                        return false;
                    }
                }, true);
            }
            if (delegates[_mid]) {
                //如果off掉了所有当前element的指定的event事件，则remove掉当前element的delegate回调
                if (!delegates[_mid][event] || $.isEmptyObject(delegates[_mid][event])) {
                    findDelegateFn(this, event).forEach(function (fn) {
                        this.removeEventListener(fn.type, fn);
                        delete delegateFns[_mid][fn.i];
                    }.bind(this));
                }
            } else {
                //如果delegates[_mid]已不存在，删除所有
                findDelegateFn(this).forEach(function (fn) {
                    this.removeEventListener(fn.type, fn);
                    delete delegateFns[_mid][fn.i];
                }.bind(this));
            }
        });
    };
})(mui);
/**
 * mui target(action>popover>modal>tab>toggle)
 */
(function ($, window, document) {
    /**
     * targets
     */
    $.targets = {};
    /**
     * target handles
     */
    $.targetHandles = [];
    /**
     * register target
     * @param {type} target
     * @returns {$.targets}
     */
    $.registerTarget = function (target) {

        target.index = target.index || 1000;

        $.targetHandles.push(target);

        $.targetHandles.sort(function (a, b) {
            return a.index - b.index;
        });

        return $.targetHandles;
    };
    window.addEventListener($.EVENT_START, function (event) {
        var target = event.target;
        var founds = {};
        for (; target && target !== document; target = target.parentNode) {
            var isFound = false;
            $.each($.targetHandles, function (index, targetHandle) {
                var name = targetHandle.name;
                if (!isFound && !founds[name] && targetHandle.hasOwnProperty('handle')) {
                    $.targets[name] = targetHandle.handle(event, target);
                    if ($.targets[name]) {
                        founds[name] = true;
                        if (targetHandle.isContinue !== true) {
                            isFound = true;
                        }
                    }
                } else {
                    if (!founds[name]) {
                        if (targetHandle.isReset !== false) $.targets[name] = false;
                    }
                }
            });
            if (isFound) {
                break;
            }
        }
    });
    window.addEventListener('click', function (event) {
        //解决touch与click的target不一致的问题(比如链接边缘点击时，touch的target为html，而click的target为A)
        var target = event.target;
        var isFound = false;
        for (; target && target !== document; target = target.parentNode) {
            if (target.tagName === 'A') {
                $.each($.targetHandles, function (index, targetHandle) {
                    var name = targetHandle.name;
                    if (targetHandle.hasOwnProperty('handle')) {
                        if (targetHandle.handle(event, target)) {
                            isFound = true;
                            event.preventDefault();
                            return false;
                        }
                    }
                });
                if (isFound) {
                    break;
                }
            }
        }
    });
})(mui, window, document);
/**
 * fixed trim
 * @param {type} undefined
 * @returns {undefined}
 */
(function (undefined) {
    if (String.prototype.trim === undefined) {
        // fix for iOS 3.2
        String.prototype.trim = function () {
            return this.replace(/^\s+|\s+$/g, '');
        };
    }
    Object.setPrototypeOf = Object.setPrototypeOf || function (obj, proto) {
        obj['__proto__'] = proto;
        return obj;
    };
})();
/**
 * fixed CustomEvent
 */
(function () {
    if (typeof window.CustomEvent === 'undefined') {
        var _CustomEvent = function _CustomEvent(event, params) {
            params = params || {
                bubbles: false,
                cancelable: false,
                detail: undefined
            };
            var evt = document.createEvent('Events');
            var bubbles = true;
            for (var name in params) {
                name === 'bubbles' ? bubbles = !!params[name] : evt[name] = params[name];
            }
            evt.initEvent(event, bubbles, true);
            return evt;
        };

        ;
        _CustomEvent.prototype = window.Event.prototype;
        window.CustomEvent = _CustomEvent;
    }
})();
/*
	A shim for non ES5 supporting browsers.
	Adds function bind to Function prototype, so that you can do partial application.
	Works even with the nasty thing, where the first word is the opposite of extranet, the second one is the profession of Columbus, and the version number is 9, flipped 180 degrees.
*/

Function.prototype.bind = Function.prototype.bind || function (to) {
    // Make an array of our arguments, starting from second argument
    var partial = Array.prototype.splice.call(arguments, 1),

    // We'll need the original function.
    fn = this;
    var bound = function bound() {
        // Join the already applied arguments to the now called ones (after converting to an array again).
        var args = partial.concat(Array.prototype.splice.call(arguments, 0));
        // If not being called as a constructor
        if (!(this instanceof bound)) {
            // return the result of the function called bound to target and partially applied.
            return fn.apply(to, args);
        }
        // If being called as a constructor, apply the function bound to self.
        fn.apply(this, args);
    };
    // Attach the prototype of the function to our newly created function.
    bound.prototype = fn.prototype;
    return bound;
};
/**
 * mui fixed classList
 * @param {type} document
 * @returns {undefined}
 */
(function (document) {
    if (!("classList" in document.documentElement) && Object.defineProperty && typeof HTMLElement !== 'undefined') {

        Object.defineProperty(HTMLElement.prototype, 'classList', {
            get: function get() {
                var self = this;

                function update(fn) {
                    return function (value) {
                        var classes = self.className.split(/\s+/),
                            index = classes.indexOf(value);

                        fn(classes, index, value);
                        self.className = classes.join(" ");
                    };
                }

                var ret = {
                    add: update(function (classes, index, value) {
                        ~index || classes.push(value);
                    }),
                    remove: update(function (classes, index) {
                        ~index && classes.splice(index, 1);
                    }),
                    toggle: update(function (classes, index, value) {
                        ~index ? classes.splice(index, 1) : classes.push(value);
                    }),
                    contains: function contains(value) {
                        return !!~self.className.split(/\s+/).indexOf(value);
                    },
                    item: function item(i) {
                        return self.className.split(/\s+/)[i] || null;
                    }
                };

                Object.defineProperty(ret, 'length', {
                    get: function get() {
                        return self.className.split(/\s+/).length;
                    }
                });

                return ret;
            }
        });
    }
})(document);

/**
 * mui fixed requestAnimationFrame
 * @param {type} window
 * @returns {undefined}
 */
(function (window) {
    if (!window.requestAnimationFrame) {
        var lastTime = 0;
        window.requestAnimationFrame = window.webkitRequestAnimationFrame || function (callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
            var id = window.setTimeout(function () {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
        window.cancelAnimationFrame = window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame || function (id) {
            clearTimeout(id);
        };
    };
})(window);
/**
 * fastclick(only for radio,checkbox)
 */
(function ($, window, name) {
    if (!$.os.android && !$.os.ios) {
        //目前仅识别android和ios
        return;
    }
    if (window.FastClick) {
        return;
    }

    var handle = function handle(event, target) {
        if (target.tagName === 'LABEL') {
            if (target.parentNode) {
                target = target.parentNode.querySelector('input');
            }
        }
        if (target && (target.type === 'radio' || target.type === 'checkbox')) {
            if (!target.disabled) {
                //disabled
                return target;
            }
        }
        return false;
    };

    $.registerTarget({
        name: name,
        index: 40,
        handle: handle,
        target: false
    });
    var dispatchEvent = function dispatchEvent(event) {
        var targetElement = $.targets.click;
        if (targetElement) {
            var clickEvent, touch;
            // On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect
            if (document.activeElement && document.activeElement !== targetElement) {
                document.activeElement.blur();
            }
            touch = event.detail.gesture.changedTouches[0];
            // Synthesise a click event, with an extra attribute so it can be tracked
            clickEvent = document.createEvent('MouseEvents');
            clickEvent.initMouseEvent('click', true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
            clickEvent.forwardedTouchEvent = true;
            targetElement.dispatchEvent(clickEvent);
            event.detail && event.detail.gesture.preventDefault();
        }
    };
    window.addEventListener('tap', dispatchEvent);
    window.addEventListener('doubletap', dispatchEvent);
    //捕获
    window.addEventListener('click', function (event) {
        if ($.targets.click) {
            if (!event.forwardedTouchEvent) {
                //stop click
                if (event.stopImmediatePropagation) {
                    event.stopImmediatePropagation();
                } else {
                    // Part of the hack for browsers that don't support Event#stopImmediatePropagation
                    event.propagationStopped = true;
                }
                event.stopPropagation();
                event.preventDefault();
                return false;
            }
        }
    }, true);
})(mui, window, 'click');
(function ($, document) {
    $(function () {
        if (!$.os.ios) {
            return;
        }
        var CLASS_FOCUSIN = 'mui-focusin';
        var CLASS_BAR_TAB = 'mui-bar-tab';
        var CLASS_BAR_FOOTER = 'mui-bar-footer';
        var CLASS_BAR_FOOTER_SECONDARY = 'mui-bar-footer-secondary';
        var CLASS_BAR_FOOTER_SECONDARY_TAB = 'mui-bar-footer-secondary-tab';
        // var content = document.querySelector('.' + CLASS_CONTENT);
        // if (content) {
        // 	document.body.insertBefore(content, document.body.firstElementChild);
        // }
        document.addEventListener('focusin', function (e) {
            if ($.os.plus) {
                //在父webview里边不fix
                if (window.plus) {
                    if (plus.webview.currentWebview().children().length > 0) {
                        return;
                    }
                }
            }
            var target = e.target;
            //TODO 需考虑所有键盘弹起的情况
            if (target.tagName && (target.tagName === 'TEXTAREA' || target.tagName === 'INPUT' && (target.type === 'text' || target.type === 'search' || target.type === 'number'))) {
                if (target.disabled || target.readOnly) {
                    return;
                }
                document.body.classList.add(CLASS_FOCUSIN);
                var isFooter = false;
                for (; target && target !== document; target = target.parentNode) {
                    var classList = target.classList;
                    if (classList && classList.contains(CLASS_BAR_TAB) || classList.contains(CLASS_BAR_FOOTER) || classList.contains(CLASS_BAR_FOOTER_SECONDARY) || classList.contains(CLASS_BAR_FOOTER_SECONDARY_TAB)) {
                        isFooter = true;
                        break;
                    }
                }
                if (isFooter) {
                    var scrollTop = document.body.scrollHeight;
                    var scrollLeft = document.body.scrollLeft;
                    setTimeout(function () {
                        window.scrollTo(scrollLeft, scrollTop);
                    }, 20);
                }
            }
        });
        document.addEventListener('focusout', function (e) {
            var classList = document.body.classList;
            if (classList.contains(CLASS_FOCUSIN)) {
                classList.remove(CLASS_FOCUSIN);
                setTimeout(function () {
                    window.scrollTo(document.body.scrollLeft, document.body.scrollTop);
                }, 20);
            }
        });
    });
})(mui, document);
/**
 * mui namespace(optimization)
 * @param {type} $
 * @returns {undefined}
 */
(function ($) {
    $.namespace = 'mui';
    $.classNamePrefix = $.namespace + '-';
    $.classSelectorPrefix = '.' + $.classNamePrefix;
    /**
     * 返回正确的className
     * @param {type} className
     * @returns {String}
     */
    $.className = function (className) {
        return $.classNamePrefix + className;
    };
    /**
     * 返回正确的classSelector
     * @param {type} classSelector
     * @returns {String}
     */
    $.classSelector = function (classSelector) {
        return classSelector.replace(/\./g, $.classSelectorPrefix);
    };
    /**
     * 返回正确的eventName
     * @param {type} event
     * @param {type} module
     * @returns {String}
     */
    $.eventName = function (event, module) {
        return event + ($.namespace ? '.' + $.namespace : '') + (module ? '.' + module : '');
    };
})(mui);

/**
 * mui gestures
 * @param {type} $
 * @param {type} window
 * @returns {undefined}
 */
(function ($, window) {
    $.gestures = {
        session: {}
    };
    /**
     * Gesture preventDefault
     * @param {type} e
     * @returns {undefined}
     */
    $.preventDefault = function (e) {
        e.preventDefault();
    };
    /**
     * Gesture stopPropagation
     * @param {type} e
     * @returns {undefined}
     */
    $.stopPropagation = function (e) {
        e.stopPropagation();
    };

    /**
     * register gesture
     * @param {type} gesture
     * @returns {$.gestures}
     */
    $.addGesture = function (gesture) {
        return $.addAction('gestures', gesture);
    };

    var round = Math.round;
    var abs = Math.abs;
    var sqrt = Math.sqrt;
    var atan = Math.atan;
    var atan2 = Math.atan2;
    /**
     * distance
     * @param {type} p1
     * @param {type} p2
     * @returns {Number}
     */
    var getDistance = function getDistance(p1, p2, props) {
        if (!props) {
            props = ['x', 'y'];
        }
        var x = p2[props[0]] - p1[props[0]];
        var y = p2[props[1]] - p1[props[1]];
        return sqrt(x * x + y * y);
    };
    /**
     * scale
     * @param {Object} starts
     * @param {Object} moves
     */
    var getScale = function getScale(starts, moves) {
        if (starts.length >= 2 && moves.length >= 2) {
            var props = ['pageX', 'pageY'];
            return getDistance(moves[1], moves[0], props) / getDistance(starts[1], starts[0], props);
        }
        return 1;
    };
    /**
     * angle
     * @param {type} p1
     * @param {type} p2
     * @returns {Number}
     */
    var getAngle = function getAngle(p1, p2, props) {
        if (!props) {
            props = ['x', 'y'];
        }
        var x = p2[props[0]] - p1[props[0]];
        var y = p2[props[1]] - p1[props[1]];
        return atan2(y, x) * 180 / Math.PI;
    };
    /**
     * direction
     * @param {Object} x
     * @param {Object} y
     */
    var getDirection = function getDirection(x, y) {
        if (x === y) {
            return '';
        }
        if (abs(x) >= abs(y)) {
            return x > 0 ? 'left' : 'right';
        }
        return y > 0 ? 'up' : 'down';
    };
    /**
     * rotation
     * @param {Object} start
     * @param {Object} end
     */
    var getRotation = function getRotation(start, end) {
        var props = ['pageX', 'pageY'];
        return getAngle(end[1], end[0], props) - getAngle(start[1], start[0], props);
    };
    /**
     * px per ms
     * @param {Object} deltaTime
     * @param {Object} x
     * @param {Object} y
     */
    var getVelocity = function getVelocity(deltaTime, x, y) {
        return {
            x: x / deltaTime || 0,
            y: y / deltaTime || 0
        };
    };
    /**
     * detect gestures
     * @param {type} event
     * @param {type} touch
     * @returns {undefined}
     */
    var detect = function detect(event, touch) {
        if ($.gestures.stoped) {
            return;
        }
        $.doAction('gestures', function (index, gesture) {
            if (!$.gestures.stoped) {
                if ($.options.gestureConfig[gesture.name] !== false) {
                    gesture.handle(event, touch);
                }
            }
        });
    };
    /**
     * 暂时无用
     * @param {Object} node
     * @param {Object} parent
     */
    var hasParent = function hasParent(node, parent) {
        while (node) {
            if (node == parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    };

    var uniqueArray = function uniqueArray(src, key, sort) {
        var results = [];
        var values = [];
        var i = 0;

        while (i < src.length) {
            var val = key ? src[i][key] : src[i];
            if (values.indexOf(val) < 0) {
                results.push(src[i]);
            }
            values[i] = val;
            i++;
        }

        if (sort) {
            if (!key) {
                results = results.sort();
            } else {
                results = results.sort(function sortUniqueArray(a, b) {
                    return a[key] > b[key];
                });
            }
        }

        return results;
    };
    var getMultiCenter = function getMultiCenter(touches) {
        var touchesLength = touches.length;
        if (touchesLength === 1) {
            return {
                x: round(touches[0].pageX),
                y: round(touches[0].pageY)
            };
        }

        var x = 0;
        var y = 0;
        var i = 0;
        while (i < touchesLength) {
            x += touches[i].pageX;
            y += touches[i].pageY;
            i++;
        }

        return {
            x: round(x / touchesLength),
            y: round(y / touchesLength)
        };
    };
    var multiTouch = function multiTouch() {
        return $.options.gestureConfig.pinch;
    };
    var copySimpleTouchData = function copySimpleTouchData(touch) {
        var touches = [];
        var i = 0;
        while (i < touch.touches.length) {
            touches[i] = {
                pageX: round(touch.touches[i].pageX),
                pageY: round(touch.touches[i].pageY)
            };
            i++;
        }
        return {
            timestamp: $.now(),
            gesture: touch.gesture,
            touches: touches,
            center: getMultiCenter(touch.touches),
            deltaX: touch.deltaX,
            deltaY: touch.deltaY
        };
    };

    var calDelta = function calDelta(touch) {
        var session = $.gestures.session;
        var center = touch.center;
        var offset = session.offsetDelta || {};
        var prevDelta = session.prevDelta || {};
        var prevTouch = session.prevTouch || {};

        if (touch.gesture.type === $.EVENT_START || touch.gesture.type === $.EVENT_END) {
            prevDelta = session.prevDelta = {
                x: prevTouch.deltaX || 0,
                y: prevTouch.deltaY || 0
            };

            offset = session.offsetDelta = {
                x: center.x,
                y: center.y
            };
        }
        touch.deltaX = prevDelta.x + (center.x - offset.x);
        touch.deltaY = prevDelta.y + (center.y - offset.y);
    };
    var calTouchData = function calTouchData(touch) {
        var session = $.gestures.session;
        var touches = touch.touches;
        var touchesLength = touches.length;

        if (!session.firstTouch) {
            session.firstTouch = copySimpleTouchData(touch);
        }

        if (multiTouch() && touchesLength > 1 && !session.firstMultiTouch) {
            session.firstMultiTouch = copySimpleTouchData(touch);
        } else if (touchesLength === 1) {
            session.firstMultiTouch = false;
        }

        var firstTouch = session.firstTouch;
        var firstMultiTouch = session.firstMultiTouch;
        var offsetCenter = firstMultiTouch ? firstMultiTouch.center : firstTouch.center;

        var center = touch.center = getMultiCenter(touches);
        touch.timestamp = $.now();
        touch.deltaTime = touch.timestamp - firstTouch.timestamp;

        touch.angle = getAngle(offsetCenter, center);
        touch.distance = getDistance(offsetCenter, center);

        calDelta(touch);

        touch.offsetDirection = getDirection(touch.deltaX, touch.deltaY);

        touch.scale = firstMultiTouch ? getScale(firstMultiTouch.touches, touches) : 1;
        touch.rotation = firstMultiTouch ? getRotation(firstMultiTouch.touches, touches) : 0;

        calIntervalTouchData(touch);
    };
    var CAL_INTERVAL = 25;
    var calIntervalTouchData = function calIntervalTouchData(touch) {
        var session = $.gestures.session;
        var last = session.lastInterval || touch;
        var deltaTime = touch.timestamp - last.timestamp;
        var velocity;
        var velocityX;
        var velocityY;
        var direction;

        if (touch.gesture.type != $.EVENT_CANCEL && (deltaTime > CAL_INTERVAL || last.velocity === undefined)) {
            var deltaX = last.deltaX - touch.deltaX;
            var deltaY = last.deltaY - touch.deltaY;

            var v = getVelocity(deltaTime, deltaX, deltaY);
            velocityX = v.x;
            velocityY = v.y;
            velocity = abs(v.x) > abs(v.y) ? v.x : v.y;
            direction = getDirection(deltaX, deltaY) || last.direction;

            session.lastInterval = touch;
        } else {
            velocity = last.velocity;
            velocityX = last.velocityX;
            velocityY = last.velocityY;
            direction = last.direction;
        }

        touch.velocity = velocity;
        touch.velocityX = velocityX;
        touch.velocityY = velocityY;
        touch.direction = direction;
    };
    var targetIds = {};
    var convertTouches = function convertTouches(touches) {
        for (var i = 0; i < touches.length; i++) {
            !touches['identifier'] && (touches['identifier'] = 0);
        }
        return touches;
    };
    var getTouches = function getTouches(event, touch) {
        var allTouches = convertTouches($.slice.call(event.touches || [event]));

        var type = event.type;

        var targetTouches = [];
        var changedTargetTouches = [];

        //当touchstart或touchmove且touches长度为1，直接获得all和changed
        if ((type === $.EVENT_START || type === $.EVENT_MOVE) && allTouches.length === 1) {
            targetIds[allTouches[0].identifier] = true;
            targetTouches = allTouches;
            changedTargetTouches = allTouches;
            touch.target = event.target;
        } else {
            var i = 0;
            var targetTouches = [];
            var changedTargetTouches = [];
            var changedTouches = convertTouches($.slice.call(event.changedTouches || [event]));

            touch.target = event.target;
            var sessionTarget = $.gestures.session.target || event.target;
            targetTouches = allTouches.filter(function (touch) {
                return hasParent(touch.target, sessionTarget);
            });

            if (type === $.EVENT_START) {
                i = 0;
                while (i < targetTouches.length) {
                    targetIds[targetTouches[i].identifier] = true;
                    i++;
                }
            }

            i = 0;
            while (i < changedTouches.length) {
                if (targetIds[changedTouches[i].identifier]) {
                    changedTargetTouches.push(changedTouches[i]);
                }
                if (type === $.EVENT_END || type === $.EVENT_CANCEL) {
                    delete targetIds[changedTouches[i].identifier];
                }
                i++;
            }

            if (!changedTargetTouches.length) {
                return false;
            }
        }
        targetTouches = uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true);
        var touchesLength = targetTouches.length;
        var changedTouchesLength = changedTargetTouches.length;
        if (type === $.EVENT_START && touchesLength - changedTouchesLength === 0) {
            //first
            touch.isFirst = true;
            $.gestures.touch = $.gestures.session = {
                target: event.target
            };
        }
        touch.isFinal = (type === $.EVENT_END || type === $.EVENT_CANCEL) && touchesLength - changedTouchesLength === 0;

        touch.touches = targetTouches;
        touch.changedTouches = changedTargetTouches;
        return true;
    };
    var handleTouchEvent = function handleTouchEvent(event) {
        var touch = {
            gesture: event
        };
        var touches = getTouches(event, touch);
        if (!touches) {
            return;
        }
        calTouchData(touch);
        detect(event, touch);
        $.gestures.session.prevTouch = touch;
        if (event.type === $.EVENT_END && !$.isTouchable) {
            $.gestures.touch = $.gestures.session = {};
        }
    };
    window.addEventListener($.EVENT_START, handleTouchEvent);
    window.addEventListener($.EVENT_MOVE, handleTouchEvent);
    window.addEventListener($.EVENT_END, handleTouchEvent);
    window.addEventListener($.EVENT_CANCEL, handleTouchEvent);
    //fixed hashchange(android)
    window.addEventListener($.EVENT_CLICK, function (e) {
        //TODO 应该判断当前target是不是在targets.popover内部，而不是非要相等
        if (($.os.android || $.os.ios) && ($.targets.popover && e.target === $.targets.popover || $.targets.tab || $.targets.offcanvas || $.targets.modal)) {
            e.preventDefault();
        }
    }, true);

    //增加原生滚动识别
    $.isScrolling = false;
    var scrollingTimeout = null;
    window.addEventListener('scroll', function () {
        $.isScrolling = true;
        scrollingTimeout && clearTimeout(scrollingTimeout);
        scrollingTimeout = setTimeout(function () {
            $.isScrolling = false;
        }, 250);
    });
})(mui, window);
/**
 * mui gesture flick[left|right|up|down]
 * @param {type} $
 * @param {type} name
 * @returns {undefined}
 */
(function ($, name) {
    var flickStartTime = 0;
    var handle = function handle(event, touch) {
        var session = $.gestures.session;
        var options = this.options;
        var now = $.now();
        switch (event.type) {
            case $.EVENT_MOVE:
                if (now - flickStartTime > 300) {
                    flickStartTime = now;
                    session.flickStart = touch.center;
                }
                break;
            case $.EVENT_END:
            case $.EVENT_CANCEL:
                touch.flick = false;
                if (session.flickStart && options.flickMaxTime > now - flickStartTime && touch.distance > options.flickMinDistince) {
                    touch.flick = true;
                    touch.flickTime = now - flickStartTime;
                    touch.flickDistanceX = touch.center.x - session.flickStart.x;
                    touch.flickDistanceY = touch.center.y - session.flickStart.y;
                    $.trigger(session.target, name, touch);
                    $.trigger(session.target, name + touch.direction, touch);
                }
                break;
        }
    };
    /**
     * mui gesture flick
     */
    $.addGesture({
        name: name,
        index: 5,
        handle: handle,
        options: {
            flickMaxTime: 200,
            flickMinDistince: 10
        }
    });
})(mui, 'flick');
/**
 * mui gesture swipe[left|right|up|down]
 * @param {type} $
 * @param {type} name
 * @returns {undefined}
 */
(function ($, name) {
    var handle = function handle(event, touch) {
        var session = $.gestures.session;
        if (event.type === $.EVENT_END || event.type === $.EVENT_CANCEL) {
            var options = this.options;
            touch.swipe = false;
            //TODO 后续根据velocity计算
            if (touch.direction && options.swipeMaxTime > touch.deltaTime && touch.distance > options.swipeMinDistince) {
                touch.swipe = true;
                $.trigger(session.target, name, touch);
                $.trigger(session.target, name + touch.direction, touch);
            }
        }
    };
    /**
     * mui gesture swipe
     */
    $.addGesture({
        name: name,
        index: 10,
        handle: handle,
        options: {
            swipeMaxTime: 300,
            swipeMinDistince: 18
        }
    });
})(mui, 'swipe');
/**
 * mui gesture drag[start|left|right|up|down|end]
 * @param {type} $
 * @param {type} name
 * @returns {undefined}
 */
(function ($, name) {
    var handle = function handle(event, touch) {
        var session = $.gestures.session;
        switch (event.type) {
            case $.EVENT_START:
                break;
            case $.EVENT_MOVE:
                if (!touch.direction || !session.target) {
                    return;
                }
                //修正direction,可在session期间自行锁定拖拽方向，方便开发scroll类不同方向拖拽插件嵌套
                if (session.lockDirection && session.startDirection) {
                    if (session.startDirection && session.startDirection !== touch.direction) {
                        if (session.startDirection === 'up' || session.startDirection === 'down') {
                            touch.direction = touch.deltaY < 0 ? 'up' : 'down';
                        } else {
                            touch.direction = touch.deltaX < 0 ? 'left' : 'right';
                        }
                    }
                }

                if (!session.drag) {
                    session.drag = true;
                    $.trigger(session.target, name + 'start', touch);
                }
                $.trigger(session.target, name, touch);
                $.trigger(session.target, name + touch.direction, touch);
                break;
            case $.EVENT_END:
            case $.EVENT_CANCEL:
                if (session.drag && touch.isFinal) {
                    $.trigger(session.target, name + 'end', touch);
                }
                break;
        }
    };
    /**
     * mui gesture drag
     */
    $.addGesture({
        name: name,
        index: 20,
        handle: handle,
        options: {
            fingers: 1
        }
    });
})(mui, 'drag');
/**
 * mui gesture tap and doubleTap
 * @param {type} $
 * @param {type} name
 * @returns {undefined}
 */
(function ($, name) {
    var lastTarget;
    var lastTapTime;
    var handle = function handle(event, touch) {
        var session = $.gestures.session;
        var options = this.options;
        switch (event.type) {
            case $.EVENT_END:
                if (!touch.isFinal) {
                    return;
                }
                var target = session.target;
                if (!target || target.disabled || target.classList && target.classList.contains('mui-disabled')) {
                    return;
                }
                if (touch.distance < options.tapMaxDistance && touch.deltaTime < options.tapMaxTime) {
                    if ($.options.gestureConfig.doubletap && lastTarget && lastTarget === target) {
                        //same target
                        if (lastTapTime && touch.timestamp - lastTapTime < options.tapMaxInterval) {
                            $.trigger(target, 'doubletap', touch);
                            lastTapTime = $.now();
                            lastTarget = target;
                            return;
                        }
                    }
                    $.trigger(target, name, touch);
                    lastTapTime = $.now();
                    lastTarget = target;
                }
                break;
        }
    };
    /**
     * mui gesture tap
     */
    $.addGesture({
        name: name,
        index: 30,
        handle: handle,
        options: {
            fingers: 1,
            tapMaxInterval: 300,
            tapMaxDistance: 5,
            tapMaxTime: 250
        }
    });
})(mui, 'tap');
/**
 * mui gesture longtap
 * @param {type} $
 * @param {type} name
 * @returns {undefined}
 */
(function ($, name) {
    var timer;
    var handle = function handle(event, touch) {
        var session = $.gestures.session;
        var options = this.options;
        switch (event.type) {
            case $.EVENT_START:
                clearTimeout(timer);
                timer = setTimeout(function () {
                    $.trigger(session.target, name, touch);
                }, options.holdTimeout);
                break;
            case $.EVENT_MOVE:
                if (touch.distance > options.holdThreshold) {
                    clearTimeout(timer);
                }
                break;
            case $.EVENT_END:
            case $.EVENT_CANCEL:
                clearTimeout(timer);
                break;
        }
    };
    /**
     * mui gesture longtap
     */
    $.addGesture({
        name: name,
        index: 10,
        handle: handle,
        options: {
            fingers: 1,
            holdTimeout: 500,
            holdThreshold: 2
        }
    });
})(mui, 'longtap');
/**
 * mui gesture hold
 * @param {type} $
 * @param {type} name
 * @returns {undefined}
 */
(function ($, name) {
    var timer;
    var handle = function handle(event, touch) {
        var session = $.gestures.session;
        var options = this.options;
        switch (event.type) {
            case $.EVENT_START:
                if ($.options.gestureConfig.hold) {
                    timer && clearTimeout(timer);
                    timer = setTimeout(function () {
                        touch.hold = true;
                        $.trigger(session.target, name, touch);
                    }, options.holdTimeout);
                }
                break;
            case $.EVENT_MOVE:
                break;
            case $.EVENT_END:
            case $.EVENT_CANCEL:
                if (timer) {
                    clearTimeout(timer) && (timer = null);
                    $.trigger(session.target, 'release', touch);
                }
                break;
        }
    };
    /**
     * mui gesture hold
     */
    $.addGesture({
        name: name,
        index: 10,
        handle: handle,
        options: {
            fingers: 1,
            holdTimeout: 0
        }
    });
})(mui, 'hold');
/**
 * mui gesture pinch
 * @param {type} $
 * @param {type} name
 * @returns {undefined}
 */
(function ($, name) {
    var handle = function handle(event, touch) {
        var options = this.options;
        var session = $.gestures.session;
        switch (event.type) {
            case $.EVENT_START:
                break;
            case $.EVENT_MOVE:
                if ($.options.gestureConfig.pinch) {
                    if (touch.touches.length < 2) {
                        return;
                    }
                    if (!session.pinch) {
                        //start
                        session.pinch = true;
                        $.trigger(session.target, name + 'start', touch);
                    }
                    $.trigger(session.target, name, touch);
                    var scale = touch.scale;
                    var rotation = touch.rotation;
                    var lastScale = typeof touch.lastScale === 'undefined' ? 1 : touch.lastScale;
                    var scaleDiff = 0.000000000001; //防止scale与lastScale相等，不触发事件的情况。
                    if (scale > lastScale) {
                        //out
                        lastScale = scale - scaleDiff;
                        $.trigger(session.target, name + 'out', touch);
                    } //in
                    else if (scale < lastScale) {
                            lastScale = scale + scaleDiff;
                            $.trigger(session.target, name + 'in', touch);
                        }
                    if (Math.abs(rotation) > options.minRotationAngle) {
                        $.trigger(session.target, 'rotate', touch);
                    }
                }
                break;
            case $.EVENT_END:
            case $.EVENT_CANCEL:
                if ($.options.gestureConfig.pinch && session.pinch && touch.touches.length === 2) {
                    session.pinch = false;
                    $.trigger(session.target, name + 'end', touch);
                }
                break;
        }
    };
    /**
     * mui gesture pinch
     */
    $.addGesture({
        name: name,
        index: 10,
        handle: handle,
        options: {
            minRotationAngle: 0
        }
    });
})(mui, 'pinch');
/**
 * mui.init
 * @param {type} $
 * @returns {undefined}
 */
(function ($) {
    $.global = $.options = {
        gestureConfig: {
            tap: true,
            doubletap: false,
            longtap: false,
            hold: false,
            flick: true,
            swipe: true,
            drag: true,
            pinch: false
        }
    };
    /**
     *
     * @param {type} options
     * @returns {undefined}
     */
    $.initGlobal = function (options) {
        $.options = $.extend(true, $.global, options);
        return this;
    };
    var inits = {};

    var isInitialized = false;
    //TODO 自动调用init?因为用户自己调用init的时机可能不确定，如果晚于自动init，则会有潜在问题
    //	$.ready(function() {
    //		setTimeout(function() {
    //			if (!isInitialized) {
    //				$.init();
    //			}
    //		}, 300);
    //	});
    /**
     * 单页配置 初始化
     * @param {object} options
     */
    $.init = function (options) {
        isInitialized = true;
        $.options = $.extend(true, $.global, options || {});
        $.ready(function () {
            $.doAction('inits', function (index, init) {
                var isInit = !!(!inits[init.name] || init.repeat);
                if (isInit) {
                    init.handle.call($);
                    inits[init.name] = true;
                }
            });
        });
        return this;
    };

    /**
     * 增加初始化执行流程
     * @param {function} init
     */
    $.addInit = function (init) {
        return $.addAction('inits', init);
    };
    /**
     * 处理html5版本subpages 
     */
    $.addInit({
        name: 'iframe',
        index: 100,
        handle: function handle() {
            var options = $.options;
            var subpages = options.subpages || [];
            if (!$.os.plus && subpages.length) {
                //暂时只处理单个subpage。后续可以考虑支持多个subpage
                createIframe(subpages[0]);
            }
        }
    });
    var createIframe = function createIframe(options) {
        var wrapper = document.createElement('div');
        wrapper.className = 'mui-iframe-wrapper';
        var styles = options.styles || {};
        if (typeof styles.top !== 'string') {
            styles.top = '0px';
        }
        if (typeof styles.bottom !== 'string') {
            styles.bottom = '0px';
        }
        wrapper.style.top = styles.top;
        wrapper.style.bottom = styles.bottom;
        var iframe = document.createElement('iframe');
        iframe.src = options.url;
        iframe.id = options.id || options.url;
        iframe.name = iframe.id;
        wrapper.appendChild(iframe);
        document.body.appendChild(wrapper);
        //目前仅处理微信
        $.os.wechat && handleScroll(wrapper, iframe);
    };

    function handleScroll(wrapper, iframe) {
        var key = 'MUI_SCROLL_POSITION_' + document.location.href + '_' + iframe.src;
        var scrollTop = parseFloat(localStorage.getItem(key)) || 0;
        if (scrollTop) {
            (function (y) {
                iframe.onload = function () {
                    window.scrollTo(0, y);
                };
            })(scrollTop);
        }
        setInterval(function () {
            var _scrollTop = window.scrollY;
            if (scrollTop !== _scrollTop) {
                localStorage.setItem(key, _scrollTop + '');
                scrollTop = _scrollTop;
            }
        }, 100);
    };
    $(function () {
        var classList = document.body.classList;
        var os = [];
        if ($.os.ios) {
            os.push({
                os: 'ios',
                version: $.os.version
            });
            classList.add('mui-ios');
        } else if ($.os.android) {
            os.push({
                os: 'android',
                version: $.os.version
            });
            classList.add('mui-android');
        }
        if ($.os.wechat) {
            os.push({
                os: 'wechat',
                version: $.os.wechat.version
            });
            classList.add('mui-wechat');
        }
        if (os.length) {
            $.each(os, function (index, osObj) {
                var version = '';
                var classArray = [];
                if (osObj.version) {
                    $.each(osObj.version.split('.'), function (i, v) {
                        version = version + (version ? '-' : '') + v;
                        classList.add($.className(osObj.os + '-' + version));
                    });
                }
            });
        }
    });
})(mui);
/**
 * mui.init 5+
 * @param {type} $
 * @returns {undefined}
 */
(function ($) {
    var defaultOptions = {
        swipeBack: false,
        preloadPages: [], //5+ lazyLoad webview
        preloadLimit: 10, //预加载窗口的数量限制(一旦超出，先进先出)
        keyEventBind: {
            backbutton: true,
            menubutton: true
        }
    };

    //默认页面动画
    var defaultShow = {
        autoShow: true,
        duration: $.os.ios ? 200 : 100,
        aniShow: 'slide-in-right'
    };
    //若执行了显示动画初始化操作，则要覆盖默认配置
    if ($.options.show) {
        defaultShow = $.extend(true, defaultShow, $.options.show);
    }

    $.currentWebview = null;
    $.isHomePage = false;

    $.extend(true, $.global, defaultOptions);
    $.extend(true, $.options, defaultOptions);
    /**
     * 等待动画配置
     * @param {type} options
     * @returns {Object}
     */
    $.waitingOptions = function (options) {
        return $.extend(true, {}, {
            autoShow: true,
            title: '',
            modal: false
        }, options);
    };
    /**
     * 窗口显示配置
     * @param {type} options
     * @returns {Object}
     */
    $.showOptions = function (options) {
        return $.extend(true, {}, defaultShow, options);
    };
    /**
     * 窗口默认配置
     * @param {type} options
     * @returns {Object}
     */
    $.windowOptions = function (options) {
        return $.extend({
            scalable: false,
            bounce: "" //vertical
        }, options);
    };
    /**
     * plusReady
     * @param {type} callback
     * @returns {_L6.$}
     */
    $.plusReady = function (callback) {
        if (window.plus) {
            setTimeout(function () {
                //解决callback与plusready事件的执行时机问题(典型案例:showWaiting,closeWaiting)
                callback();
            }, 0);
        } else {
            document.addEventListener("plusready", function () {
                callback();
            }, false);
        }
        return this;
    };
    /**
     * 5+ event(5+没提供之前我自己实现)
     * @param {type} webview
     * @param {type} eventType
     * @param {type} data
     * @returns {undefined}
     */
    $.receive = function (eventType, data) {
        if (eventType) {
            try {
                if (data) {
                    data = JSON.parse(data);
                }
            } catch (e) {}
            $.trigger(document, eventType, data);
        }
    };
    $.fire = function (webview, eventType, data) {
        if (webview) {
            if (data !== '') {
                data = data || {};
                if ($.isPlainObject(data)) {
                    data = JSON.stringify(data || {}).replace(/\'/g, '\\u0027').replace(/\\/g, '\\u005c');
                }
            }
            webview.evalJS("typeof mui!=='undefined'&&mui.receive('" + eventType + "','" + data + "')");
        }
    };
    /**
     * 5+ event(5+没提供之前我自己实现)
     * @param {type} eventType
     * @param {type} data
     * @returns {undefined}
     */

    var triggerPreload = function triggerPreload(webview) {
        if (!webview.preloaded) {
            $.fire(webview, 'preload');
            var list = webview.children();
            for (var i = 0; i < list.length; i++) {
                $.fire(list[i], 'preload');
            }
            webview.preloaded = true;
        }
    };
    var trigger = function trigger(webview, eventType, timeChecked) {
        if (timeChecked) {
            if (!webview[eventType + 'ed']) {
                $.fire(webview, eventType);
                var list = webview.children();
                for (var i = 0; i < list.length; i++) {
                    $.fire(list[i], eventType);
                }
                webview[eventType + 'ed'] = true;
            }
        } else {
            $.fire(webview, eventType);
            var list = webview.children();
            for (var i = 0; i < list.length; i++) {
                $.fire(list[i], eventType);
            }
        }
    };
    /**
     * 打开新窗口
     * @param {string} url 要打开的页面地址
     * @param {string} id 指定页面ID
     * @param {object} options 可选:参数,等待,窗口,显示配置{params:{},waiting:{},styles:{},show:{}}
     */
    $.openWindow = function (url, id, options) {
        if ((typeof url === 'undefined' ? 'undefined' : _typeof(url)) === 'object') {
            options = url;
            url = options.url;
            id = options.id || url;
        } else {
            if ((typeof id === 'undefined' ? 'undefined' : _typeof(id)) === 'object') {
                options = id;
                id = url;
            } else {
                id = id || url;
            }
        }
        if (!$.os.plus) {
            //TODO 先临时这么处理：手机上顶层跳，PC上parent跳
            if ($.os.ios || $.os.android) {
                window.top.location.href = url;
            } else {
                window.parent.location.href = url;
            }
            return;
        }
        if (!window.plus) {
            return;
        }

        options = options || {};
        var params = options.params || {};
        var webview = null,
            webviewCache = null,
            nShow,
            nWaiting;

        if ($.webviews[id]) {
            webviewCache = $.webviews[id];
            //webview真实存在，才能获取
            if (plus.webview.getWebviewById(id)) {
                webview = webviewCache.webview;
            }
        }

        if (webviewCache && webview) {
            //已缓存
            //每次show都需要传递动画参数；
            //预加载的动画参数优先级：openWindow配置>preloadPages配置>mui默认配置；
            nShow = webviewCache.show;
            nShow = options.show ? $.extend(nShow, options.show) : nShow;
            webview.show(nShow.aniShow, nShow.duration, function () {
                triggerPreload(webview);
                trigger(webview, 'pagebeforeshow', false);
            });

            webviewCache.afterShowMethodName && webview.evalJS(webviewCache.afterShowMethodName + '(\'' + JSON.stringify(params) + '\')');
            return webview;
        } else {
            //新窗口
            if (options.createNew !== true) {
                webview = plus.webview.getWebviewById(id);
                if (webview) {
                    //如果已存在
                    nShow = $.showOptions(options.show);
                    nShow.autoShow && webview.show(nShow.aniShow, nShow.duration, function () {
                        triggerPreload(webview);
                        trigger(webview, 'pagebeforeshow', false);
                    });
                    return webview;
                } else {
                    if (!url) {
                        throw new Error('webview[' + id + '] does not exist');
                    }
                }
            }
            //显示waiting
            var waitingConfig = $.waitingOptions(options.waiting);
            if (waitingConfig.autoShow) {
                nWaiting = plus.nativeUI.showWaiting(waitingConfig.title, waitingConfig.options);
            }
            //创建页面
            options = $.extend(options, {
                id: id,
                url: url
            });

            webview = $.createWindow(options);
            //显示
            nShow = $.showOptions(options.show);
            if (nShow.autoShow) {
                var showWebview = function showWebview() {
                    //关闭等待框
                    if (nWaiting) {
                        nWaiting.close();
                    }
                    //显示页面
                    webview.show(nShow.aniShow, nShow.duration, function () {
                        //titleUpdate事件发生较早，很多环境尚不具备
                        // triggerPreload(webview);
                        // trigger(webview, 'pagebeforeshow', false);
                    });
                    webview.showed = true;
                    options.afterShowMethodName && webview.evalJS(options.afterShowMethodName + '(\'' + JSON.stringify(params) + '\')');
                };
                //TODO 能走到这一步，应该不用判断url了吧？
                if (!url) {
                    showWebview();
                } else {
                    // webview.addEventListener("loaded", showWebview, false);
                    //titleUpdate触发时机早于loaded，更换为titleUpdate后，可以更早的显示webview
                    webview.addEventListener("titleUpdate", showWebview, false);
                    //loaded事件发生后，触发预加载和pagebeforeshow事件
                    webview.addEventListener("loaded", function () {
                        triggerPreload(webview);
                        trigger(webview, 'pagebeforeshow', false);
                    }, false);
                }
            }
        }
        return webview;
    };
    /**
     * 根据配置信息创建一个webview
     * @param {type} options
     * @param {type} isCreate
     * @returns {webview}
     */
    $.createWindow = function (options, isCreate) {
        if (!window.plus) {
            return;
        }
        var id = options.id || options.url;
        var webview;
        if (options.preload) {
            if ($.webviews[id] && $.webviews[id].webview.getURL()) {
                //已经cache
                webview = $.webviews[id].webview;
            } else {
                //新增预加载窗口
                //preload
                //判断是否携带createNew参数，默认为false
                if (options.createNew !== true) {
                    webview = plus.webview.getWebviewById(id);
                }

                //之前没有，那就新创建	
                if (!webview) {
                    webview = plus.webview.create(options.url, id, $.windowOptions(options.styles), $.extend({
                        preload: true
                    }, options.extras));
                    if (options.subpages) {
                        $.each(options.subpages, function (index, subpage) {
                            var subpageId = subpage.id || subpage.url;
                            if (subpageId) {
                                //过滤空对象
                                var subWebview = plus.webview.getWebviewById(subpageId);
                                if (!subWebview) {
                                    //如果该webview不存在，则创建
                                    subWebview = plus.webview.create(subpage.url, subpageId, $.windowOptions(subpage.styles), $.extend({
                                        preload: true
                                    }, subpage.extras));
                                }
                                webview.append(subWebview);
                            }
                        });
                    }
                }
            }

            //TODO 理论上，子webview也应该计算到预加载队列中，但这样就麻烦了，要退必须退整体，否则可能出现问题；
            $.webviews[id] = {
                webview: webview, //目前仅preload的缓存webview
                preload: true,
                show: $.showOptions(options.show),
                afterShowMethodName: options.afterShowMethodName //就不应该用evalJS。应该是通过事件消息通讯
            };
            //索引该预加载窗口
            var preloads = $.data.preloads;
            var index = preloads.indexOf(id);
            if (~index) {
                //删除已存在的(变相调整插入位置)
                preloads.splice(index, 1);
            }
            preloads.push(id);
            if (preloads.length > $.options.preloadLimit) {
                //先进先出
                var first = $.data.preloads.shift();
                var webviewCache = $.webviews[first];
                if (webviewCache && webviewCache.webview) {
                    //需要将自己打开的所有页面，全部close；
                    //关闭该预加载webview	
                    $.closeAll(webviewCache.webview);
                }
                //删除缓存
                delete $.webviews[first];
            }
        } else {
            if (isCreate !== false) {
                //直接创建非预加载窗口
                webview = plus.webview.create(options.url, id, $.windowOptions(options.styles), options.extras);
                if (options.subpages) {
                    $.each(options.subpages, function (index, subpage) {
                        var subpageId = subpage.id || subpage.url;
                        var subWebview = plus.webview.getWebviewById(subpageId);
                        if (!subWebview) {
                            subWebview = plus.webview.create(subpage.url, subpageId, $.windowOptions(subpage.styles), subpage.extras);
                        }
                        webview.append(subWebview);
                    });
                }
            }
        }
        return webview;
    };

    /**
     * 预加载
     */
    $.preload = function (options) {
        //调用预加载函数，不管是否传递preload参数，强制变为true
        if (!options.preload) {
            options.preload = true;
        }
        return $.createWindow(options);
    };

    /**
     *关闭当前webview打开的所有webview；
     */
    $.closeOpened = function (webview) {
        var opened = webview.opened();
        if (opened) {
            for (var i = 0, len = opened.length; i < len; i++) {
                var openedWebview = opened[i];
                var open_open = openedWebview.opened();
                if (open_open && open_open.length > 0) {
                    //关闭打开的webview
                    $.closeOpened(openedWebview);
                    //关闭自己
                    openedWebview.close("none");
                } else {
                    //如果直接孩子节点，就不用关闭了，因为父关闭的时候，会自动关闭子；
                    if (openedWebview.parent() !== webview) {
                        openedWebview.close('none');
                    }
                }
            }
        }
    };
    $.closeAll = function (webview, aniShow) {
        $.closeOpened(webview);
        if (aniShow) {
            webview.close(aniShow);
        } else {
            webview.close();
        }
    };

    /**
     * 批量创建webview
     * @param {type} options
     * @returns {undefined}
     */
    $.createWindows = function (options) {
        $.each(options, function (index, option) {
            //初始化预加载窗口(创建)和非预加载窗口(仅配置，不创建)
            $.createWindow(option, false);
        });
    };
    /**
     * 创建当前页面的子webview
     * @param {type} options
     * @returns {webview}
     */
    $.appendWebview = function (options) {
        if (!window.plus) {
            return;
        }
        var id = options.id || options.url;
        var webview;
        if (!$.webviews[id]) {
            //保证执行一遍
            //TODO 这里也有隐患，比如某个webview不是作为subpage创建的，而是作为target webview的话；
            if (!plus.webview.getWebviewById(id)) {
                webview = plus.webview.create(options.url, id, options.styles, options.extras);
            }
            //之前的实现方案：子窗口loaded之后再append到父窗口中；
            //问题：部分子窗口loaded事件发生较晚，此时执行父窗口的children方法会返回空，导致父子通讯失败；
            //     比如父页面执行完preload事件后，需触发子页面的preload事件，此时未append的话，就无法触发；
            //修改方式：不再监控loaded事件，直接append
            //by chb@20150521
            // webview.addEventListener('loaded', function() {
            plus.webview.currentWebview().append(webview);
            // });
            $.webviews[id] = options;
        }
        return webview;
    };

    //全局webviews
    $.webviews = {};
    //预加载窗口索引
    $.data.preloads = [];
    //$.currentWebview
    $.plusReady(function () {
        $.currentWebview = plus.webview.currentWebview();
    });
    $.addInit({
        name: '5+',
        index: 100,
        handle: function handle() {
            var options = $.options;
            var subpages = options.subpages || [];
            if ($.os.plus) {
                $.plusReady(function () {
                    //TODO  这里需要判断一下，最好等子窗口加载完毕后，再调用主窗口的show方法；
                    //或者：在openwindow方法中，监听实现；
                    $.each(subpages, function (index, subpage) {
                        $.appendWebview(subpage);
                    });
                    //判断是否首页
                    if (plus.webview.currentWebview() === plus.webview.getWebviewById(plus.runtime.appid)) {
                        $.isHomePage = true;
                        //首页需要自己激活预加载；
                        //timeout因为子页面loaded之后才append的，防止子页面尚未append、从而导致其preload未触发的问题；
                        setTimeout(function () {
                            triggerPreload(plus.webview.currentWebview());
                        }, 300);
                    }
                    //设置ios顶部状态栏颜色；
                    if ($.os.ios && $.options.statusBarBackground) {
                        plus.navigator.setStatusBarBackground($.options.statusBarBackground);
                    }
                    if ($.os.android && parseFloat($.os.version) < 4.4) {
                        //解决Android平台4.4版本以下，resume后，父窗体标题延迟渲染的问题；
                        if (plus.webview.currentWebview().parent() == null) {
                            document.addEventListener("resume", function () {
                                var body = document.body;
                                body.style.display = 'none';
                                setTimeout(function () {
                                    body.style.display = '';
                                }, 10);
                            });
                        }
                    }
                });
            } else {
                //已支持iframe嵌入
                //				if (subpages.length > 0) {
                //					var err = document.createElement('div');
                //					err.className = 'mui-error';
                //					//文字描述
                //					var span = document.createElement('span');
                //					span.innerHTML = '在该浏览器下，不支持创建子页面，具体参考';
                //					err.appendChild(span);
                //					var a = document.createElement('a');
                //					a.innerHTML = '"mui框架适用场景"';
                //					a.href = 'http://ask.dcloud.net.cn/article/113';
                //					err.appendChild(a);
                //					document.body.appendChild(err);
                //					console.log('在该浏览器下，不支持创建子页面');
                //				}

            }
        }
    });
    window.addEventListener('preload', function () {
        //处理预加载部分
        var webviews = $.options.preloadPages || [];
        $.plusReady(function () {
            $.each(webviews, function (index, webview) {
                $.createWindow($.extend(webview, {
                    preload: true
                }));
            });
        });
    });
    $.supportStatusbarOffset = function () {
        return $.os.plus && $.os.ios && parseFloat($.os.version) >= 7;
    };
    $.ready(function () {
        //标识当前环境支持statusbar
        if ($.supportStatusbarOffset()) {
            document.body.classList.add('mui-statusbar');
        }
    });
})(mui);
/**
 * mui back
 * @param {type} $
 * @param {type} window
 * @returns {undefined}
 */
(function ($, window) {
    /**
     * register back
     * @param {type} back
     * @returns {$.gestures}
     */
    $.addBack = function (back) {
        return $.addAction('backs', back);
    };
    /**
     * default
     */
    $.addBack({
        name: 'browser',
        index: 100,
        handle: function handle() {
            if (window.history.length > 1) {
                window.history.back();
                return true;
            }
            return false;
        }
    });
    /**
     * 后退
     */
    $.back = function () {
        if (typeof $.options.beforeback === 'function') {
            if ($.options.beforeback() === false) {
                return;
            }
        }
        $.doAction('backs');
    };
    window.addEventListener('tap', function (e) {
        var action = $.targets.action;
        if (action && action.classList.contains('mui-action-back')) {
            $.back();
            $.targets.action = false;
        }
    });
    window.addEventListener('swiperight', function (e) {
        var detail = e.detail;
        if ($.options.swipeBack === true && Math.abs(detail.angle) < 3) {
            $.back();
        }
    });
})(mui, window);
/**
 * mui back 5+
 * @param {type} $
 * @param {type} window
 * @returns {undefined}
 */
(function ($, window) {
    if ($.os.plus && $.os.android) {
        $.addBack({
            name: 'mui',
            index: 5,
            handle: function handle() {
                //后续重新设计此处，将back放到各个空间内部实现
                //popover
                if ($.targets._popover && $.targets._popover.classList.contains('mui-active')) {
                    $($.targets._popover).popover('hide');
                    return true;
                }
                //offcanvas
                var offCanvas = document.querySelector('.mui-off-canvas-wrap.mui-active');
                if (offCanvas) {
                    $(offCanvas).offCanvas('close');
                    return true;
                }
                var previewImage = $.isFunction($.getPreviewImage) && $.getPreviewImage();
                if (previewImage && previewImage.isShown()) {
                    previewImage.close();
                    return true;
                }
                //popup
                return $.closePopup();
            }
        });
    }
    //首次按下back按键的时间
    $.__back__first = null;
    /**
     * 5+ back
     */
    $.addBack({
        name: '5+',
        index: 10,
        handle: function handle() {
            if (!window.plus) {
                return false;
            }
            var wobj = plus.webview.currentWebview();
            var parent = wobj.parent();
            if (parent) {
                parent.evalJS('mui&&mui.back();');
            } else {
                wobj.canBack(function (e) {
                    //by chb 暂时注释，在碰到类似popover之类的锚点的时候，需多次点击才能返回；
                    if (e.canBack) {
                        //webview history back
                        window.history.back();
                    } else {
                        //webview close or hide
                        //fixed by fxy 此处不应该用opener判断，因为用户有可能自己close掉当前窗口的opener。这样的话。opener就为空了，导致不能执行close
                        if (wobj.id === plus.runtime.appid) {
                            //首页
                            //首页不存在opener的情况下，后退实际上应该是退出应用；
                            //首次按键，提示‘再按一次退出应用’
                            if (!$.__back__first) {
                                $.__back__first = new Date().getTime();
                                mui.toast('再按一次退出应用');
                                setTimeout(function () {
                                    $.__back__first = null;
                                }, 2000);
                            } else {
                                if (new Date().getTime() - $.__back__first < 2000) {
                                    plus.runtime.quit();
                                }
                            }
                        } else {
                            //其他页面，
                            if (wobj.preload) {
                                wobj.hide("auto");
                            } else {
                                //关闭页面时，需要将其打开的所有子页面全部关闭；
                                $.closeAll(wobj);
                            }
                        }
                    }
                });
            }
            return true;
        }
    });

    $.menu = function () {
        var menu = document.querySelector('.mui-action-menu');
        if (menu) {
            $.trigger(menu, $.EVENT_START); //临时处理menu无touchstart的话，找不到当前targets的问题
            $.trigger(menu, 'tap');
        } else {
            //执行父窗口的menu
            if (window.plus) {
                var wobj = $.currentWebview;
                var parent = wobj.parent();
                if (parent) {
                    //又得evalJS
                    parent.evalJS('mui&&mui.menu();');
                }
            }
        }
    };
    var __back = function __back() {
        $.back();
    };
    var __menu = function __menu() {
        $.menu();
    };
    //默认监听
    $.plusReady(function () {
        if ($.options.keyEventBind.backbutton) {
            plus.key.addEventListener('backbutton', __back, false);
        }
        if ($.options.keyEventBind.menubutton) {
            plus.key.addEventListener('menubutton', __menu, false);
        }
    });
    //处理按键监听事件
    $.addInit({
        name: 'keyEventBind',
        index: 1000,
        handle: function handle() {
            $.plusReady(function () {
                //如果不为true，则移除默认监听
                if (!$.options.keyEventBind.backbutton) {
                    plus.key.removeEventListener('backbutton', __back);
                }
                if (!$.options.keyEventBind.menubutton) {
                    plus.key.removeEventListener('menubutton', __menu);
                }
            });
        }
    });
})(mui, window);
/**
 * mui.init pulldownRefresh
 * @param {type} $
 * @returns {undefined}
 */
(function ($) {
    $.addInit({
        name: 'pullrefresh',
        index: 1000,
        handle: function handle() {
            var options = $.options;
            var pullRefreshOptions = options.pullRefresh || {};
            var hasPulldown = pullRefreshOptions.down && pullRefreshOptions.down.hasOwnProperty('callback');
            var hasPullup = pullRefreshOptions.up && pullRefreshOptions.up.hasOwnProperty('callback');
            if (hasPulldown || hasPullup) {
                var container = pullRefreshOptions.container;
                if (container) {
                    var $container = $(container);
                    if ($container.length === 1) {
                        if ($.os.plus && $.os.android) {
                            //android 5+
                            $.plusReady(function () {
                                var webview = plus.webview.currentWebview();
                                if (hasPullup) {
                                    //当前页面初始化pullup
                                    var upOptions = {};
                                    upOptions.up = pullRefreshOptions.up;
                                    upOptions.webviewId = webview.id || webview.getURL();
                                    $container.pullRefresh(upOptions);
                                }
                                if (hasPulldown) {
                                    var parent = webview.parent();
                                    var id = webview.id || webview.getURL();
                                    if (parent) {
                                        if (!hasPullup) {
                                            //如果没有上拉加载，需要手动初始化一个默认的pullRefresh，以便当前页面容器可以调用endPulldownToRefresh等方法
                                            $container.pullRefresh({
                                                webviewId: id
                                            });
                                        }
                                        var downOptions = {
                                            webviewId: id
                                        };
                                        downOptions.down = $.extend({}, pullRefreshOptions.down);
                                        downOptions.down.callback = '_CALLBACK';
                                        //父页面初始化pulldown
                                        parent.evalJS("mui&&mui(document.querySelector('.mui-content')).pullRefresh('" + JSON.stringify(downOptions) + "')");
                                    }
                                }
                            });
                        } else {
                            $container.pullRefresh(pullRefreshOptions);
                        }
                    }
                }
            }
        }
    });
})(mui);
/**
 * mui ajax
 * @param {type} $
 * @returns {undefined}
 */
(function ($, window, undefined) {

    var jsonType = 'application/json';
    var htmlType = 'text/html';
    var rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
    var scriptTypeRE = /^(?:text|application)\/javascript/i;
    var xmlTypeRE = /^(?:text|application)\/xml/i;
    var blankRE = /^\s*$/;

    $.ajaxSettings = {
        type: 'GET',
        beforeSend: $.noop,
        success: $.noop,
        error: $.noop,
        complete: $.noop,
        context: null,
        xhr: function xhr(protocol) {
            return new window.XMLHttpRequest();
        },
        accepts: {
            script: 'text/javascript, application/javascript, application/x-javascript',
            json: jsonType,
            xml: 'application/xml, text/xml',
            html: htmlType,
            text: 'text/plain'
        },
        timeout: 0,
        processData: true,
        cache: true
    };
    var ajaxBeforeSend = function ajaxBeforeSend(xhr, settings) {
        var context = settings.context;
        if (settings.beforeSend.call(context, xhr, settings) === false) {
            return false;
        }
    };
    var ajaxSuccess = function ajaxSuccess(data, xhr, settings) {
        settings.success.call(settings.context, data, 'success', xhr);
        ajaxComplete('success', xhr, settings);
    };
    // type: "timeout", "error", "abort", "parsererror"
    var ajaxError = function ajaxError(error, type, xhr, settings) {
        settings.error.call(settings.context, xhr, type, error);
        ajaxComplete(type, xhr, settings);
    };
    // status: "success", "notmodified", "error", "timeout", "abort", "parsererror"
    var ajaxComplete = function ajaxComplete(status, xhr, settings) {
        settings.complete.call(settings.context, xhr, status);
    };

    var serialize = function serialize(params, obj, traditional, scope) {
        var type,
            array = $.isArray(obj),
            hash = $.isPlainObject(obj);
        $.each(obj, function (key, value) {
            type = $.type(value);
            if (scope) {
                key = traditional ? scope : scope + '[' + (hash || type === 'object' || type === 'array' ? key : '') + ']';
            }
            // handle data in serializeArray() format
            if (!scope && array) {
                params.add(value.name, value.value);
            }
            // recurse into nested objects
            else if (type === "array" || !traditional && type === "object") {
                    serialize(params, value, traditional, key);
                } else {
                    params.add(key, value);
                }
        });
    };
    var serializeData = function serializeData(options) {
        if (options.processData && options.data && typeof options.data !== "string") {
            var contentType = options.contentType;
            if (!contentType && options.headers) {
                contentType = options.headers['Content-Type'];
            }
            if (contentType && ~contentType.indexOf(jsonType)) {
                //application/json
                options.data = JSON.stringify(options.data);
            } else {
                options.data = $.param(options.data, options.traditional);
            }
        }
        if (options.data && (!options.type || options.type.toUpperCase() === 'GET')) {
            options.url = appendQuery(options.url, options.data);
            options.data = undefined;
        }
    };
    var appendQuery = function appendQuery(url, query) {
        if (query === '') {
            return url;
        }
        return (url + '&' + query).replace(/[&?]{1,2}/, '?');
    };
    var mimeToDataType = function mimeToDataType(mime) {
        if (mime) {
            mime = mime.split(';', 2)[0];
        }
        return mime && (mime === htmlType ? 'html' : mime === jsonType ? 'json' : scriptTypeRE.test(mime) ? 'script' : xmlTypeRE.test(mime) && 'xml') || 'text';
    };
    var parseArguments = function parseArguments(url, data, success, dataType) {
        if ($.isFunction(data)) {
            dataType = success, success = data, data = undefined;
        }
        if (!$.isFunction(success)) {
            dataType = success, success = undefined;
        }
        return {
            url: url,
            data: data,
            success: success,
            dataType: dataType
        };
    };
    $.ajax = function (url, options) {
        if ((typeof url === 'undefined' ? 'undefined' : _typeof(url)) === "object") {
            options = url;
            url = undefined;
        }
        var settings = options || {};
        settings.url = url || settings.url;
        for (var key in $.ajaxSettings) {
            if (settings[key] === undefined) {
                settings[key] = $.ajaxSettings[key];
            }
        }
        serializeData(settings);
        var dataType = settings.dataType;

        if (settings.cache === false || (!options || options.cache !== true) && 'script' === dataType) {
            settings.url = appendQuery(settings.url, '_=' + $.now());
        }
        var mime = settings.accepts[dataType && dataType.toLowerCase()];
        var headers = {};
        var setHeader = function setHeader(name, value) {
            headers[name.toLowerCase()] = [name, value];
        };
        var protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol;
        var xhr = settings.xhr(settings);
        var nativeSetHeader = xhr.setRequestHeader;
        var abortTimeout;

        setHeader('X-Requested-With', 'XMLHttpRequest');
        setHeader('Accept', mime || '*/*');
        if (!!(mime = settings.mimeType || mime)) {
            if (mime.indexOf(',') > -1) {
                mime = mime.split(',', 2)[0];
            }
            xhr.overrideMimeType && xhr.overrideMimeType(mime);
        }
        if (settings.contentType || settings.contentType !== false && settings.data && settings.type.toUpperCase() !== 'GET') {
            setHeader('Content-Type', settings.contentType || 'application/x-www-form-urlencoded');
        }
        if (settings.headers) {
            for (var name in settings.headers) {
                setHeader(name, settings.headers[name]);
            }
        }
        xhr.setRequestHeader = setHeader;

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                xhr.onreadystatechange = $.noop;
                clearTimeout(abortTimeout);
                var result,
                    error = false;
                var isLocal = protocol === 'file:';
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304 || xhr.status === 0 && isLocal && xhr.responseText) {
                    dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader('content-type'));
                    result = xhr.responseText;
                    try {
                        // http://perfectionkills.com/global-eval-what-are-the-options/
                        if (dataType === 'script') {
                            (1, eval)(result);
                        } else if (dataType === 'xml') {
                            result = xhr.responseXML;
                        } else if (dataType === 'json') {
                            result = blankRE.test(result) ? null : $.parseJSON(result);
                        }
                    } catch (e) {
                        error = e;
                    }

                    if (error) {
                        ajaxError(error, 'parsererror', xhr, settings);
                    } else {
                        ajaxSuccess(result, xhr, settings);
                    }
                } else {
                    var status = xhr.status ? 'error' : 'abort';
                    var statusText = xhr.statusText || null;
                    if (isLocal) {
                        status = 'error';
                        statusText = '404';
                    }
                    ajaxError(statusText, status, xhr, settings);
                }
            }
        };
        if (ajaxBeforeSend(xhr, settings) === false) {
            xhr.abort();
            ajaxError(null, 'abort', xhr, settings);
            return xhr;
        }

        if (settings.xhrFields) {
            for (var name in settings.xhrFields) {
                xhr[name] = settings.xhrFields[name];
            }
        }

        var async = 'async' in settings ? settings.async : true;

        xhr.open(settings.type.toUpperCase(), settings.url, async, settings.username, settings.password);

        for (var name in headers) {
            if (headers.hasOwnProperty(name)) {
                nativeSetHeader.apply(xhr, headers[name]);
            }
        }
        if (settings.timeout > 0) {
            abortTimeout = setTimeout(function () {
                xhr.onreadystatechange = $.noop;
                xhr.abort();
                ajaxError(null, 'timeout', xhr, settings);
            }, settings.timeout);
        }
        xhr.send(settings.data ? settings.data : null);
        return xhr;
    };

    $.param = function (obj, traditional) {
        var params = [];
        params.add = function (k, v) {
            this.push(encodeURIComponent(k) + '=' + encodeURIComponent(v));
        };
        serialize(params, obj, traditional);
        return params.join('&').replace(/%20/g, '+');
    };
    $.get = function () /* url, data, success, dataType */{
        return $.ajax(parseArguments.apply(null, arguments));
    };

    $.post = function () /* url, data, success, dataType */{
        var options = parseArguments.apply(null, arguments);
        options.type = 'POST';
        return $.ajax(options);
    };

    $.getJSON = function () /* url, data, success */{
        var options = parseArguments.apply(null, arguments);
        options.dataType = 'json';
        return $.ajax(options);
    };

    $.fn.load = function (url, data, success) {
        if (!this.length) return this;
        var self = this,
            parts = url.split(/\s/),
            selector,
            options = parseArguments(url, data, success),
            callback = options.success;
        if (parts.length > 1) options.url = parts[0], selector = parts[1];
        options.success = function (response) {
            if (selector) {
                var div = document.createElement('div');
                div.innerHTML = response.replace(rscript, "");
                var selectorDiv = document.createElement('div');
                var childs = div.querySelectorAll(selector);
                if (childs && childs.length > 0) {
                    for (var i = 0, len = childs.length; i < len; i++) {
                        selectorDiv.appendChild(childs[i]);
                    }
                }
                self[0].innerHTML = selectorDiv.innerHTML;
            } else {
                self[0].innerHTML = response;
            }
            callback && callback.apply(self, arguments);
        };
        $.ajax(options);
        return this;
    };
})(mui, window);
/**
 * 5+ ajax
 */
(function ($) {
    var originAnchor = document.createElement('a');
    originAnchor.href = window.location.href;
    $.plusReady(function () {
        $.ajaxSettings = $.extend($.ajaxSettings, {
            xhr: function xhr(settings) {
                if (settings.crossDomain) {
                    //强制使用plus跨域
                    return new plus.net.XMLHttpRequest();
                }
                //仅在webview的url为远程文件，且ajax请求的资源不同源下使用plus.net.XMLHttpRequest
                if (originAnchor.protocol !== 'file:') {
                    var urlAnchor = document.createElement('a');
                    urlAnchor.href = settings.url;
                    urlAnchor.href = urlAnchor.href;
                    settings.crossDomain = originAnchor.protocol + '//' + originAnchor.host !== urlAnchor.protocol + '//' + urlAnchor.host;
                    if (settings.crossDomain) {
                        return new plus.net.XMLHttpRequest();
                    }
                }
                return new window.XMLHttpRequest();
            }
        });
    });
})(mui);
/**
 * mui layout(offset[,position,width,height...])
 * @param {type} $
 * @param {type} window
 * @param {type} undefined
 * @returns {undefined}
 */
(function ($, window, undefined) {
    $.offset = function (element) {
        var box = {
            top: 0,
            left: 0
        };
        if (_typeof(element.getBoundingClientRect) !== undefined) {
            box = element.getBoundingClientRect();
        }
        return {
            top: box.top + window.pageYOffset - element.clientTop,
            left: box.left + window.pageXOffset - element.clientLeft
        };
    };
})(mui, window);
/**
 * mui animation
 */
(function ($, window) {
    /**
     * scrollTo
     */
    $.scrollTo = function (scrollTop, duration, callback) {
        duration = duration || 1000;
        var scroll = function scroll(duration) {
            if (duration <= 0) {
                window.scrollTo(0, scrollTop);
                callback && callback();
                return;
            }
            var distaince = scrollTop - window.scrollY;
            setTimeout(function () {
                window.scrollTo(0, window.scrollY + distaince / duration * 10);
                scroll(duration - 10);
            }, 16.7);
        };
        scroll(duration);
    };
    $.animationFrame = function (cb) {
        var args, isQueued, context;
        return function () {
            args = arguments;
            context = this;
            if (!isQueued) {
                isQueued = true;
                requestAnimationFrame(function () {
                    cb.apply(context, args);
                    isQueued = false;
                });
            }
        };
    };
})(mui, window);
(function ($) {
    var initializing = false,
        fnTest = /xyz/.test(function () {
        xyz;
    }) ? /\b_super\b/ : /.*/;

    var Class = function Class() {};
    Class.extend = function (prop) {
        var _super = this.prototype;
        initializing = true;
        var prototype = new this();
        initializing = false;
        for (var name in prop) {
            prototype[name] = typeof prop[name] == "function" && typeof _super[name] == "function" && fnTest.test(prop[name]) ? function (name, fn) {
                return function () {
                    var tmp = this._super;

                    this._super = _super[name];

                    var ret = fn.apply(this, arguments);
                    this._super = tmp;

                    return ret;
                };
            }(name, prop[name]) : prop[name];
        }

        function Class() {
            if (!initializing && this.init) this.init.apply(this, arguments);
        }
        Class.prototype = prototype;
        Class.prototype.constructor = Class;
        Class.extend = arguments.callee;
        return Class;
    };
    $.Class = Class;
})(mui);
(function ($, document, undefined) {
    var CLASS_PULL_TOP_POCKET = 'mui-pull-top-pocket';
    var CLASS_PULL_BOTTOM_POCKET = 'mui-pull-bottom-pocket';
    var CLASS_PULL = 'mui-pull';
    var CLASS_PULL_LOADING = 'mui-pull-loading';
    var CLASS_PULL_CAPTION = 'mui-pull-caption';
    var CLASS_PULL_CAPTION_DOWN = 'mui-pull-caption-down';
    var CLASS_PULL_CAPTION_REFRESH = 'mui-pull-caption-refresh';
    var CLASS_PULL_CAPTION_NOMORE = 'mui-pull-caption-nomore';

    var CLASS_ICON = 'mui-icon';
    var CLASS_SPINNER = 'mui-spinner';
    var CLASS_ICON_PULLDOWN = 'mui-icon-pulldown';

    var CLASS_BLOCK = 'mui-block';
    var CLASS_HIDDEN = 'mui-hidden';
    var CLASS_VISIBILITY = 'mui-visibility';

    var CLASS_LOADING_UP = CLASS_PULL_LOADING + ' ' + CLASS_ICON + ' ' + CLASS_ICON_PULLDOWN;
    var CLASS_LOADING_DOWN = CLASS_PULL_LOADING + ' ' + CLASS_ICON + ' ' + CLASS_ICON_PULLDOWN;
    var CLASS_LOADING = CLASS_PULL_LOADING + ' ' + CLASS_ICON + ' ' + CLASS_SPINNER;

    var pocketHtml = ['<div class="' + CLASS_PULL + '">', '<div class="{icon}"></div>', '<div class="' + CLASS_PULL_CAPTION + '">{contentrefresh}</div>', '</div>'].join('');

    var PullRefresh = {
        init: function init(element, options) {
            this._super(element, $.extend(true, {
                scrollY: true,
                scrollX: false,
                indicators: true,
                deceleration: 0.003,
                down: {
                    height: 50,
                    contentinit: '下拉可以刷新',
                    contentdown: '下拉可以刷新',
                    contentover: '释放立即刷新',
                    contentrefresh: '正在刷新...'
                },
                up: {
                    height: 50,
                    auto: false,
                    contentinit: '上拉显示更多',
                    contentdown: '上拉显示更多',
                    contentrefresh: '正在加载...',
                    contentnomore: '没有更多数据了',
                    duration: 300
                }
            }, options));
        },
        _init: function _init() {
            this._super();
            this._initPocket();
        },
        _initPulldownRefresh: function _initPulldownRefresh() {
            this.pulldown = true;
            this.pullPocket = this.topPocket;
            this.pullPocket.classList.add(CLASS_BLOCK);
            this.pullPocket.classList.add(CLASS_VISIBILITY);
            this.pullCaption = this.topCaption;
            this.pullLoading = this.topLoading;
        },
        _initPullupRefresh: function _initPullupRefresh() {
            this.pulldown = false;
            this.pullPocket = this.bottomPocket;
            this.pullPocket.classList.add(CLASS_BLOCK);
            this.pullPocket.classList.add(CLASS_VISIBILITY);
            this.pullCaption = this.bottomCaption;
            this.pullLoading = this.bottomLoading;
        },
        _initPocket: function _initPocket() {
            var options = this.options;
            if (options.down && options.down.hasOwnProperty('callback')) {
                this.topPocket = this.scroller.querySelector('.' + CLASS_PULL_TOP_POCKET);
                if (!this.topPocket) {
                    this.topPocket = this._createPocket(CLASS_PULL_TOP_POCKET, options.down, CLASS_LOADING_DOWN);
                    this.wrapper.insertBefore(this.topPocket, this.wrapper.firstChild);
                }
                this.topLoading = this.topPocket.querySelector('.' + CLASS_PULL_LOADING);
                this.topCaption = this.topPocket.querySelector('.' + CLASS_PULL_CAPTION);
            }
            if (options.up && options.up.hasOwnProperty('callback')) {
                this.bottomPocket = this.scroller.querySelector('.' + CLASS_PULL_BOTTOM_POCKET);
                if (!this.bottomPocket) {
                    this.bottomPocket = this._createPocket(CLASS_PULL_BOTTOM_POCKET, options.up, CLASS_LOADING);
                    this.scroller.appendChild(this.bottomPocket);
                }
                this.bottomLoading = this.bottomPocket.querySelector('.' + CLASS_PULL_LOADING);
                this.bottomCaption = this.bottomPocket.querySelector('.' + CLASS_PULL_CAPTION);
                //TODO only for h5
                this.wrapper.addEventListener('scrollbottom', this);
            }
        },
        _createPocket: function _createPocket(clazz, options, iconClass) {
            var pocket = document.createElement('div');
            pocket.className = clazz;
            pocket.innerHTML = pocketHtml.replace('{contentrefresh}', options.contentinit).replace('{icon}', iconClass);
            return pocket;
        },
        _resetPullDownLoading: function _resetPullDownLoading() {
            var loading = this.pullLoading;
            if (loading) {
                this.pullCaption.innerHTML = this.options.down.contentdown;
                loading.style.webkitTransition = "";
                loading.style.webkitTransform = "";
                loading.style.webkitAnimation = "";
                loading.className = CLASS_LOADING_DOWN;
            }
        },
        _setCaptionClass: function _setCaptionClass(isPulldown, caption, title) {
            if (!isPulldown) {
                switch (title) {
                    case this.options.up.contentdown:
                        caption.className = CLASS_PULL_CAPTION + ' ' + CLASS_PULL_CAPTION_DOWN;
                        break;
                    case this.options.up.contentrefresh:
                        caption.className = CLASS_PULL_CAPTION + ' ' + CLASS_PULL_CAPTION_REFRESH;
                        break;
                    case this.options.up.contentnomore:
                        caption.className = CLASS_PULL_CAPTION + ' ' + CLASS_PULL_CAPTION_NOMORE;
                        break;
                }
            }
        },
        _setCaption: function _setCaption(title, reset) {
            if (this.loading) {
                return;
            }
            var options = this.options;
            var pocket = this.pullPocket;
            var caption = this.pullCaption;
            var loading = this.pullLoading;
            var isPulldown = this.pulldown;
            var self = this;
            if (pocket) {
                if (reset) {
                    setTimeout(function () {
                        caption.innerHTML = self.lastTitle = title;
                        if (isPulldown) {
                            loading.className = CLASS_LOADING_DOWN;
                        } else {
                            self._setCaptionClass(false, caption, title);
                            loading.className = CLASS_LOADING;
                        }
                        loading.style.webkitAnimation = "";
                        loading.style.webkitTransition = "";
                        loading.style.webkitTransform = "";
                    }, 100);
                } else {
                    if (title !== this.lastTitle) {
                        caption.innerHTML = title;
                        if (isPulldown) {
                            if (title === options.down.contentrefresh) {
                                loading.className = CLASS_LOADING;
                                loading.style.webkitAnimation = "spinner-spin 1s step-end infinite";
                            } else if (title === options.down.contentover) {
                                loading.className = CLASS_LOADING_UP;
                                loading.style.webkitTransition = "-webkit-transform 0.3s ease-in";
                                loading.style.webkitTransform = "rotate(180deg)";
                            } else if (title === options.down.contentdown) {
                                loading.className = CLASS_LOADING_DOWN;
                                loading.style.webkitTransition = "-webkit-transform 0.3s ease-in";
                                loading.style.webkitTransform = "rotate(0deg)";
                            }
                        } else {
                            if (title === options.up.contentrefresh) {
                                loading.className = CLASS_LOADING + ' ' + CLASS_VISIBILITY;
                            } else {
                                loading.className = CLASS_LOADING + ' ' + CLASS_HIDDEN;
                            }
                            self._setCaptionClass(false, caption, title);
                        }
                        this.lastTitle = title;
                    }
                }
            }
        }
    };
    $.PullRefresh = PullRefresh;
})(mui, document);
(function ($, window, document, undefined) {
    var CLASS_SCROLL = 'mui-scroll';
    var CLASS_SCROLLBAR = 'mui-scrollbar';
    var CLASS_INDICATOR = 'mui-scrollbar-indicator';
    var CLASS_SCROLLBAR_VERTICAL = CLASS_SCROLLBAR + '-vertical';
    var CLASS_SCROLLBAR_HORIZONTAL = CLASS_SCROLLBAR + '-horizontal';

    var CLASS_ACTIVE = 'mui-active';

    var ease = {
        quadratic: {
            style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            fn: function fn(k) {
                return k * (2 - k);
            }
        },
        circular: {
            style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',
            fn: function fn(k) {
                return Math.sqrt(1 - --k * k);
            }
        },
        outCirc: {
            style: 'cubic-bezier(0.075, 0.82, 0.165, 1)'
        },
        outCubic: {
            style: 'cubic-bezier(0.165, 0.84, 0.44, 1)'
        }
    };
    var Scroll = $.Class.extend({
        init: function init(element, options) {
            this.wrapper = this.element = element;
            this.scroller = this.wrapper.children[0];
            this.scrollerStyle = this.scroller && this.scroller.style;
            this.stopped = false;

            this.options = $.extend(true, {
                scrollY: true, //是否竖向滚动
                scrollX: false, //是否横向滚动
                startX: 0, //初始化时滚动至x
                startY: 0, //初始化时滚动至y

                indicators: true, //是否显示滚动条
                stopPropagation: false,
                hardwareAccelerated: true,
                fixedBadAndorid: false,
                preventDefaultException: {
                    tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|VIDEO)$/
                },
                momentum: true,

                snapX: 0.5, //横向切换距离(以当前容器宽度为基准)
                snap: false, //图片轮播，拖拽式选项卡

                bounce: true, //是否启用回弹
                bounceTime: 500, //回弹动画时间
                bounceEasing: ease.outCirc, //回弹动画曲线

                scrollTime: 500,
                scrollEasing: ease.outCubic, //轮播动画曲线

                directionLockThreshold: 5,

                parallaxElement: false, //视差元素
                parallaxRatio: 0.5
            }, options);

            this.x = 0;
            this.y = 0;
            this.translateZ = this.options.hardwareAccelerated ? ' translateZ(0)' : '';

            this._init();
            if (this.scroller) {
                this.refresh();
                //				if (this.options.startX !== 0 || this.options.startY !== 0) { //需要判断吗？后续根据实际情况再看看
                this.scrollTo(this.options.startX, this.options.startY);
                //				}
            }
        },
        _init: function _init() {
            this._initParallax();
            this._initIndicators();
            this._initEvent();
        },
        _initParallax: function _initParallax() {
            if (this.options.parallaxElement) {
                this.parallaxElement = document.querySelector(this.options.parallaxElement);
                this.parallaxStyle = this.parallaxElement.style;
                this.parallaxHeight = this.parallaxElement.offsetHeight;
                this.parallaxImgStyle = this.parallaxElement.querySelector('img').style;
            }
        },
        _initIndicators: function _initIndicators() {
            var self = this;
            self.indicators = [];
            if (!this.options.indicators) {
                return;
            }
            var indicators = [],
                indicator;

            // Vertical scrollbar
            if (self.options.scrollY) {
                indicator = {
                    el: this._createScrollBar(CLASS_SCROLLBAR_VERTICAL),
                    listenX: false
                };

                this.wrapper.appendChild(indicator.el);
                indicators.push(indicator);
            }

            // Horizontal scrollbar
            if (this.options.scrollX) {
                indicator = {
                    el: this._createScrollBar(CLASS_SCROLLBAR_HORIZONTAL),
                    listenY: false
                };

                this.wrapper.appendChild(indicator.el);
                indicators.push(indicator);
            }

            for (var i = indicators.length; i--;) {
                this.indicators.push(new Indicator(this, indicators[i]));
            }
        },
        _initSnap: function _initSnap() {
            this.currentPage = {};
            this.pages = [];
            var snaps = this.snaps;
            var length = snaps.length;
            var m = 0;
            var n = -1;
            var x = 0;
            var leftX = 0;
            var rightX = 0;
            var snapX = 0;
            for (var i = 0; i < length; i++) {
                var snap = snaps[i];
                var offsetLeft = snap.offsetLeft;
                var offsetWidth = snap.offsetWidth;
                if (i === 0 || offsetLeft <= snaps[i - 1].offsetLeft) {
                    m = 0;
                    n++;
                }
                if (!this.pages[m]) {
                    this.pages[m] = [];
                }
                x = this._getSnapX(offsetLeft);
                snapX = Math.round(offsetWidth * this.options.snapX);
                leftX = x - snapX;
                rightX = x - offsetWidth + snapX;
                this.pages[m][n] = {
                    x: x,
                    leftX: leftX,
                    rightX: rightX,
                    pageX: m,
                    element: snap
                };
                if (snap.classList.contains(CLASS_ACTIVE)) {
                    this.currentPage = this.pages[m][0];
                }
                if (x >= this.maxScrollX) {
                    m++;
                }
            }
            this.options.startX = this.currentPage.x || 0;
        },
        _getSnapX: function _getSnapX(offsetLeft) {
            return Math.max(Math.min(0, -offsetLeft + this.wrapperWidth / 2), this.maxScrollX);
        },
        _gotoPage: function _gotoPage(index) {
            this.currentPage = this.pages[Math.min(index, this.pages.length - 1)][0];
            for (var i = 0, len = this.snaps.length; i < len; i++) {
                if (i === index) {
                    this.snaps[i].classList.add(CLASS_ACTIVE);
                } else {
                    this.snaps[i].classList.remove(CLASS_ACTIVE);
                }
            }
            this.scrollTo(this.currentPage.x, 0, this.options.scrollTime);
        },
        _nearestSnap: function _nearestSnap(x) {
            if (!this.pages.length) {
                return {
                    x: 0,
                    pageX: 0
                };
            }
            var i = 0;
            var length = this.pages.length;
            if (x > 0) {
                x = 0;
            } else if (x < this.maxScrollX) {
                x = this.maxScrollX;
            }
            for (; i < length; i++) {
                var nearestX = this.direction === 'left' ? this.pages[i][0].leftX : this.pages[i][0].rightX;
                if (x >= nearestX) {
                    return this.pages[i][0];
                }
            }
            return {
                x: 0,
                pageX: 0
            };
        },
        _initEvent: function _initEvent(detach) {
            var action = detach ? 'removeEventListener' : 'addEventListener';
            window[action]('orientationchange', this);
            window[action]('resize', this);

            this.scroller[action]('webkitTransitionEnd', this);

            this.wrapper[action]($.EVENT_START, this);
            this.wrapper[action]($.EVENT_CANCEL, this);
            this.wrapper[action]($.EVENT_END, this);
            this.wrapper[action]('drag', this);
            this.wrapper[action]('dragend', this);
            this.wrapper[action]('flick', this);
            this.wrapper[action]('scrollend', this);
            if (this.options.scrollX) {
                this.wrapper[action]('swiperight', this);
            }
            var segmentedControl = this.wrapper.querySelector('.mui-segmented-control');
            if (segmentedControl) {
                //靠，这个bug排查了一下午，阻止hash跳转，一旦hash跳转会导致可拖拽选项卡的tab不见
                mui(segmentedControl)[detach ? 'off' : 'on']('click', 'a', $.preventDefault);
            }

            this.wrapper[action]('scrollstart', this);
            this.wrapper[action]('refresh', this);
        },
        _handleIndicatorScrollend: function _handleIndicatorScrollend() {
            this.indicators.map(function (indicator) {
                indicator.fade();
            });
        },
        _handleIndicatorScrollstart: function _handleIndicatorScrollstart() {
            this.indicators.map(function (indicator) {
                indicator.fade(1);
            });
        },
        _handleIndicatorRefresh: function _handleIndicatorRefresh() {
            this.indicators.map(function (indicator) {
                indicator.refresh();
            });
        },
        handleEvent: function handleEvent(e) {
            if (this.stopped) {
                this.resetPosition();
                return;
            }

            switch (e.type) {
                case $.EVENT_START:
                    this._start(e);
                    break;
                case 'drag':
                    this.options.stopPropagation && e.stopPropagation();
                    this._drag(e);
                    break;
                case 'dragend':
                case 'flick':
                    this.options.stopPropagation && e.stopPropagation();
                    this._flick(e);
                    break;
                case $.EVENT_CANCEL:
                case $.EVENT_END:
                    this._end(e);
                    break;
                case 'webkitTransitionEnd':
                    this.transitionTimer && this.transitionTimer.cancel();
                    this._transitionEnd(e);
                    break;
                case 'scrollstart':
                    this._handleIndicatorScrollstart(e);
                    break;
                case 'scrollend':
                    this._handleIndicatorScrollend(e);
                    this._scrollend(e);
                    e.stopPropagation();
                    break;
                case 'orientationchange':
                case 'resize':
                    this._resize();
                    break;
                case 'swiperight':
                    e.stopPropagation();
                    break;
                case 'refresh':
                    this._handleIndicatorRefresh(e);
                    break;

            }
        },
        _start: function _start(e) {
            this.moved = this.needReset = false;
            this._transitionTime();
            if (this.isInTransition) {
                this.needReset = true;
                this.isInTransition = false;
                var pos = $.parseTranslateMatrix($.getStyles(this.scroller, 'webkitTransform'));
                this.setTranslate(Math.round(pos.x), Math.round(pos.y));
                //				this.resetPosition(); //reset
                $.trigger(this.scroller, 'scrollend', this);
                //				e.stopPropagation();
                e.preventDefault();
            }
            this.reLayout();
            $.trigger(this.scroller, 'beforescrollstart', this);
        },
        _getDirectionByAngle: function _getDirectionByAngle(angle) {
            if (angle < -80 && angle > -100) {
                return 'up';
            } else if (angle >= 80 && angle < 100) {
                return 'down';
            } else if (angle >= 170 || angle <= -170) {
                return 'left';
            } else if (angle >= -35 && angle <= 10) {
                return 'right';
            }
            return null;
        },
        _drag: function _drag(e) {
            //			if (this.needReset) {
            //				e.stopPropagation(); //disable parent drag(nested scroller)
            //				return;
            //			}
            var detail = e.detail;
            if (this.options.scrollY || detail.direction === 'up' || detail.direction === 'down') {
                //如果是竖向滚动或手势方向是上或下
                //ios8 hack
                if ($.os.ios && parseFloat($.os.version) >= 8) {
                    //多webview时，离开当前webview会导致后续touch事件不触发
                    var clientY = detail.gesture.touches[0].clientY;
                    //下拉刷新 or 上拉加载
                    if (clientY + 10 > window.innerHeight || clientY < 10) {
                        this.resetPosition(this.options.bounceTime);
                        return;
                    }
                }
            }
            var isPreventDefault = isReturn = false;
            var direction = this._getDirectionByAngle(detail.angle);
            if (detail.direction === 'left' || detail.direction === 'right') {
                if (this.options.scrollX) {
                    isPreventDefault = true;
                    if (!this.moved) {
                        //识别角度(该角度导致轮播不灵敏)
                        //						if (direction !== 'left' && direction !== 'right') {
                        //							isReturn = true;
                        //						} else {
                        $.gestures.session.lockDirection = true; //锁定方向
                        $.gestures.session.startDirection = detail.direction;
                        //						}
                    }
                } else if (this.options.scrollY && !this.moved) {
                    isReturn = true;
                }
            } else if (detail.direction === 'up' || detail.direction === 'down') {
                if (this.options.scrollY) {
                    isPreventDefault = true;
                    //					if (!this.moved) { //识别角度,竖向滚动似乎没必要进行小角度验证
                    //						if (direction !== 'up' && direction !== 'down') {
                    //							isReturn = true;
                    //						}
                    //					}
                    if (!this.moved) {
                        $.gestures.session.lockDirection = true; //锁定方向
                        $.gestures.session.startDirection = detail.direction;
                    }
                } else if (this.options.scrollX && !this.moved) {
                    isReturn = true;
                }
            } else {
                isReturn = true;
            }
            if (this.moved || isPreventDefault) {
                e.stopPropagation(); //阻止冒泡(scroll类嵌套)
                detail.gesture && detail.gesture.preventDefault();
            }
            if (isReturn) {
                //禁止非法方向滚动
                return;
            }
            if (!this.moved) {
                $.trigger(this.scroller, 'scrollstart', this);
            } else {
                e.stopPropagation(); //move期间阻止冒泡(scroll嵌套)
            }
            var deltaX = 0;
            var deltaY = 0;
            if (!this.moved) {
                //start
                deltaX = detail.deltaX;
                deltaY = detail.deltaY;
            } else {
                //move
                deltaX = detail.deltaX - $.gestures.session.prevTouch.deltaX;
                deltaY = detail.deltaY - $.gestures.session.prevTouch.deltaY;
            }
            var absDeltaX = Math.abs(detail.deltaX);
            var absDeltaY = Math.abs(detail.deltaY);
            if (absDeltaX > absDeltaY + this.options.directionLockThreshold) {
                deltaY = 0;
            } else if (absDeltaY >= absDeltaX + this.options.directionLockThreshold) {
                deltaX = 0;
            }

            deltaX = this.hasHorizontalScroll ? deltaX : 0;
            deltaY = this.hasVerticalScroll ? deltaY : 0;
            var newX = this.x + deltaX;
            var newY = this.y + deltaY;
            // Slow down if outside of the boundaries
            if (newX > 0 || newX < this.maxScrollX) {
                newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
            }
            if (newY > 0 || newY < this.maxScrollY) {
                newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
            }

            if (!this.requestAnimationFrame) {
                this._updateTranslate();
            }
            this.direction = detail.deltaX > 0 ? 'right' : 'left';
            this.moved = true;
            this.x = newX;
            this.y = newY;
            $.trigger(this.scroller, 'scroll', this);
        },
        _flick: function _flick(e) {
            //			if (!this.moved || this.needReset) {
            //				return;
            //			}
            if (!this.moved) {
                return;
            }
            e.stopPropagation();
            var detail = e.detail;
            this._clearRequestAnimationFrame();
            if (e.type === 'dragend' && detail.flick) {
                //dragend
                return;
            }

            var newX = Math.round(this.x);
            var newY = Math.round(this.y);

            this.isInTransition = false;
            // reset if we are outside of the boundaries
            if (this.resetPosition(this.options.bounceTime)) {
                return;
            }

            this.scrollTo(newX, newY); // ensures that the last position is rounded

            if (e.type === 'dragend') {
                //dragend
                $.trigger(this.scroller, 'scrollend', this);
                return;
            }
            var time = 0;
            var easing = '';
            // start momentum animation if needed
            if (this.options.momentum && detail.flickTime < 300) {
                momentumX = this.hasHorizontalScroll ? this._momentum(this.x, detail.flickDistanceX, detail.flickTime, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                    destination: newX,
                    duration: 0
                };
                momentumY = this.hasVerticalScroll ? this._momentum(this.y, detail.flickDistanceY, detail.flickTime, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                    destination: newY,
                    duration: 0
                };
                newX = momentumX.destination;
                newY = momentumY.destination;
                time = Math.max(momentumX.duration, momentumY.duration);
                this.isInTransition = true;
            }

            if (newX != this.x || newY != this.y) {
                if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) {
                    easing = ease.quadratic;
                }
                this.scrollTo(newX, newY, time, easing);
                return;
            }

            $.trigger(this.scroller, 'scrollend', this);
            //			e.stopPropagation();
        },
        _end: function _end(e) {
            this.needReset = false;
            if (!this.moved && this.needReset || e.type === $.EVENT_CANCEL) {
                this.resetPosition();
            }
        },
        _transitionEnd: function _transitionEnd(e) {
            if (e.target != this.scroller || !this.isInTransition) {
                return;
            }
            this._transitionTime();
            if (!this.resetPosition(this.options.bounceTime)) {
                this.isInTransition = false;
                $.trigger(this.scroller, 'scrollend', this);
            }
        },
        _scrollend: function _scrollend(e) {
            if (this.y === 0 && this.maxScrollY === 0 || Math.abs(this.y) > 0 && this.y <= this.maxScrollY) {
                $.trigger(this.scroller, 'scrollbottom', this);
            }
        },
        _resize: function _resize() {
            var that = this;
            clearTimeout(that.resizeTimeout);
            that.resizeTimeout = setTimeout(function () {
                that.refresh();
            }, that.options.resizePolling);
        },
        _transitionTime: function _transitionTime(time) {
            time = time || 0;
            this.scrollerStyle['webkitTransitionDuration'] = time + 'ms';
            if (this.parallaxElement && this.options.scrollY) {
                //目前仅支持竖向视差效果
                this.parallaxStyle['webkitTransitionDuration'] = time + 'ms';
            }
            if (this.options.fixedBadAndorid && !time && $.os.isBadAndroid) {
                this.scrollerStyle['webkitTransitionDuration'] = '0.001s';
                if (this.parallaxElement && this.options.scrollY) {
                    //目前仅支持竖向视差效果
                    this.parallaxStyle['webkitTransitionDuration'] = '0.001s';
                }
            }
            if (this.indicators) {
                for (var i = this.indicators.length; i--;) {
                    this.indicators[i].transitionTime(time);
                }
            }
            if (time) {
                //自定义timer，保证webkitTransitionEnd始终触发
                this.transitionTimer && this.transitionTimer.cancel();
                this.transitionTimer = $.later(function () {
                    $.trigger(this.scroller, 'webkitTransitionEnd');
                }, time + 100, this);
            }
        },
        _transitionTimingFunction: function _transitionTimingFunction(easing) {
            this.scrollerStyle['webkitTransitionTimingFunction'] = easing;
            if (this.parallaxElement && this.options.scrollY) {
                //目前仅支持竖向视差效果
                this.parallaxStyle['webkitTransitionDuration'] = easing;
            }
            if (this.indicators) {
                for (var i = this.indicators.length; i--;) {
                    this.indicators[i].transitionTimingFunction(easing);
                }
            }
        },
        _translate: function _translate(x, y) {
            this.x = x;
            this.y = y;
        },
        _clearRequestAnimationFrame: function _clearRequestAnimationFrame() {
            if (this.requestAnimationFrame) {
                cancelAnimationFrame(this.requestAnimationFrame);
                this.requestAnimationFrame = null;
            }
        },
        _updateTranslate: function _updateTranslate() {
            var self = this;
            if (self.x !== self.lastX || self.y !== self.lastY) {
                self.setTranslate(self.x, self.y);
            }
            self.requestAnimationFrame = requestAnimationFrame(function () {
                self._updateTranslate();
            });
        },
        _createScrollBar: function _createScrollBar(clazz) {
            var scrollbar = document.createElement('div');
            var indicator = document.createElement('div');
            scrollbar.className = CLASS_SCROLLBAR + ' ' + clazz;
            indicator.className = CLASS_INDICATOR;
            scrollbar.appendChild(indicator);
            if (clazz === CLASS_SCROLLBAR_VERTICAL) {
                this.scrollbarY = scrollbar;
                this.scrollbarIndicatorY = indicator;
            } else if (clazz === CLASS_SCROLLBAR_HORIZONTAL) {
                this.scrollbarX = scrollbar;
                this.scrollbarIndicatorX = indicator;
            }
            this.wrapper.appendChild(scrollbar);
            return scrollbar;
        },
        _preventDefaultException: function _preventDefaultException(el, exceptions) {
            for (var i in exceptions) {
                if (exceptions[i].test(el[i])) {
                    return true;
                }
            }
            return false;
        },
        _reLayout: function _reLayout() {
            if (!this.hasHorizontalScroll) {
                this.maxScrollX = 0;
                this.scrollerWidth = this.wrapperWidth;
            }

            if (!this.hasVerticalScroll) {
                this.maxScrollY = 0;
                this.scrollerHeight = this.wrapperHeight;
            }

            this.indicators.map(function (indicator) {
                indicator.refresh();
            });

            //以防slider类嵌套使用
            if (this.options.snap && typeof this.options.snap === 'string') {
                var items = this.scroller.querySelectorAll(this.options.snap);
                this.itemLength = 0;
                this.snaps = [];
                for (var i = 0, len = items.length; i < len; i++) {
                    var item = items[i];
                    if (item.parentNode === this.scroller) {
                        this.itemLength++;
                        this.snaps.push(item);
                    }
                }
                this._initSnap(); //需要每次都_initSnap么。其实init的时候执行一次，后续resize的时候执行一次就行了吧.先这么做吧，如果影响性能，再调整
            }
        },
        _momentum: function _momentum(current, distance, time, lowerMargin, wrapperSize, deceleration) {
            var speed = parseFloat(Math.abs(distance) / time),
                destination,
                duration;

            deceleration = deceleration === undefined ? 0.0006 : deceleration;
            destination = current + speed * speed / (2 * deceleration) * (distance < 0 ? -1 : 1);
            duration = speed / deceleration;
            if (destination < lowerMargin) {
                destination = wrapperSize ? lowerMargin - wrapperSize / 2.5 * (speed / 8) : lowerMargin;
                distance = Math.abs(destination - current);
                duration = distance / speed;
            } else if (destination > 0) {
                destination = wrapperSize ? wrapperSize / 2.5 * (speed / 8) : 0;
                distance = Math.abs(current) + destination;
                duration = distance / speed;
            }

            return {
                destination: Math.round(destination),
                duration: duration
            };
        },
        _getTranslateStr: function _getTranslateStr(x, y) {
            if (this.options.hardwareAccelerated) {
                return 'translate3d(' + x + 'px,' + y + 'px,0px) ' + this.translateZ;
            }
            return 'translate(' + x + 'px,' + y + 'px) ';
        },
        //API
        setStopped: function setStopped(stopped) {
            this.stopped = !!stopped;
        },
        setTranslate: function setTranslate(x, y) {
            this.x = x;
            this.y = y;
            this.scrollerStyle['webkitTransform'] = this._getTranslateStr(x, y);
            if (this.parallaxElement && this.options.scrollY) {
                //目前仅支持竖向视差效果
                var parallaxY = y * this.options.parallaxRatio;
                var scale = 1 + parallaxY / ((this.parallaxHeight - parallaxY) / 2);
                if (scale > 1) {
                    this.parallaxImgStyle['opacity'] = 1 - parallaxY / 100 * this.options.parallaxRatio;
                    this.parallaxStyle['webkitTransform'] = this._getTranslateStr(0, -parallaxY) + ' scale(' + scale + ',' + scale + ')';
                } else {
                    this.parallaxImgStyle['opacity'] = 1;
                    this.parallaxStyle['webkitTransform'] = this._getTranslateStr(0, -1) + ' scale(1,1)';
                }
            }
            if (this.indicators) {
                for (var i = this.indicators.length; i--;) {
                    this.indicators[i].updatePosition();
                }
            }
            this.lastX = this.x;
            this.lastY = this.y;
            $.trigger(this.scroller, 'scroll', this);
        },
        reLayout: function reLayout() {
            this.wrapper.offsetHeight;

            var paddingLeft = parseFloat($.getStyles(this.wrapper, 'padding-left')) || 0;
            var paddingRight = parseFloat($.getStyles(this.wrapper, 'padding-right')) || 0;
            var paddingTop = parseFloat($.getStyles(this.wrapper, 'padding-top')) || 0;
            var paddingBottom = parseFloat($.getStyles(this.wrapper, 'padding-bottom')) || 0;

            var clientWidth = this.wrapper.clientWidth;
            var clientHeight = this.wrapper.clientHeight;

            this.scrollerWidth = this.scroller.offsetWidth;
            this.scrollerHeight = this.scroller.offsetHeight;

            this.wrapperWidth = clientWidth - paddingLeft - paddingRight;
            this.wrapperHeight = clientHeight - paddingTop - paddingBottom;

            this.maxScrollX = Math.min(this.wrapperWidth - this.scrollerWidth, 0);
            this.maxScrollY = Math.min(this.wrapperHeight - this.scrollerHeight, 0);
            this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
            this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;
            this._reLayout();
        },
        resetPosition: function resetPosition(time) {
            var x = this.x,
                y = this.y;

            time = time || 0;
            if (!this.hasHorizontalScroll || this.x > 0) {
                x = 0;
            } else if (this.x < this.maxScrollX) {
                x = this.maxScrollX;
            }

            if (!this.hasVerticalScroll || this.y > 0) {
                y = 0;
            } else if (this.y < this.maxScrollY) {
                y = this.maxScrollY;
            }

            if (x == this.x && y == this.y) {
                return false;
            }
            this.scrollTo(x, y, time, this.options.scrollEasing);

            return true;
        },
        _reInit: function _reInit() {
            var groups = this.wrapper.querySelectorAll('.' + CLASS_SCROLL);
            for (var i = 0, len = groups.length; i < len; i++) {
                if (groups[i].parentNode === this.wrapper) {
                    this.scroller = groups[i];
                    break;
                }
            }
            this.scrollerStyle = this.scroller && this.scroller.style;
        },
        refresh: function refresh() {
            this._reInit();
            this.reLayout();
            $.trigger(this.scroller, 'refresh', this);
            this.resetPosition();
        },
        scrollTo: function scrollTo(x, y, time, easing) {
            var easing = easing || ease.circular;
            //			this.isInTransition = time > 0 && (this.lastX != x || this.lastY != y);
            //暂不严格判断x,y，否则会导致部分版本上不正常触发轮播
            this.isInTransition = time > 0;
            if (this.isInTransition) {
                this._clearRequestAnimationFrame();
                this._transitionTimingFunction(easing.style);
                this._transitionTime(time);
                this.setTranslate(x, y);
            } else {
                this.setTranslate(x, y);
            }
        },
        scrollToBottom: function scrollToBottom(time, easing) {
            time = time || this.options.scrollTime;
            this.scrollTo(0, this.maxScrollY, time, easing);
        },
        gotoPage: function gotoPage(index) {
            this._gotoPage(index);
        },
        destroy: function destroy() {
            this._initEvent(true); //detach
            delete $.data[this.wrapper.getAttribute('data-scroll')];
            this.wrapper.setAttribute('data-scroll', '');
        }
    });
    //Indicator
    var Indicator = function Indicator(scroller, options) {
        this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
        this.wrapperStyle = this.wrapper.style;
        this.indicator = this.wrapper.children[0];
        this.indicatorStyle = this.indicator.style;
        this.scroller = scroller;

        this.options = $.extend({
            listenX: true,
            listenY: true,
            fade: false,
            speedRatioX: 0,
            speedRatioY: 0
        }, options);

        this.sizeRatioX = 1;
        this.sizeRatioY = 1;
        this.maxPosX = 0;
        this.maxPosY = 0;

        if (this.options.fade) {
            this.wrapperStyle['webkitTransform'] = this.scroller.translateZ;
            this.wrapperStyle['webkitTransitionDuration'] = this.options.fixedBadAndorid && $.os.isBadAndroid ? '0.001s' : '0ms';
            this.wrapperStyle.opacity = '0';
        }
    };
    Indicator.prototype = {
        handleEvent: function handleEvent(e) {},
        transitionTime: function transitionTime(time) {
            time = time || 0;
            this.indicatorStyle['webkitTransitionDuration'] = time + 'ms';
            if (this.scroller.options.fixedBadAndorid && !time && $.os.isBadAndroid) {
                this.indicatorStyle['webkitTransitionDuration'] = '0.001s';
            }
        },
        transitionTimingFunction: function transitionTimingFunction(easing) {
            this.indicatorStyle['webkitTransitionTimingFunction'] = easing;
        },
        refresh: function refresh() {
            this.transitionTime();

            if (this.options.listenX && !this.options.listenY) {
                this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none';
            } else if (this.options.listenY && !this.options.listenX) {
                this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none';
            } else {
                this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none';
            }

            this.wrapper.offsetHeight; // force refresh

            if (this.options.listenX) {
                this.wrapperWidth = this.wrapper.clientWidth;
                this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
                this.indicatorStyle.width = this.indicatorWidth + 'px';

                this.maxPosX = this.wrapperWidth - this.indicatorWidth;

                this.minBoundaryX = 0;
                this.maxBoundaryX = this.maxPosX;

                this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX;
            }

            if (this.options.listenY) {
                this.wrapperHeight = this.wrapper.clientHeight;
                this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
                this.indicatorStyle.height = this.indicatorHeight + 'px';

                this.maxPosY = this.wrapperHeight - this.indicatorHeight;

                this.minBoundaryY = 0;
                this.maxBoundaryY = this.maxPosY;

                this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY;
            }

            this.updatePosition();
        },

        updatePosition: function updatePosition() {
            var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
                y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;

            if (x < this.minBoundaryX) {
                this.width = Math.max(this.indicatorWidth + x, 8);
                this.indicatorStyle.width = this.width + 'px';
                x = this.minBoundaryX;
            } else if (x > this.maxBoundaryX) {
                this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
                this.indicatorStyle.width = this.width + 'px';
                x = this.maxPosX + this.indicatorWidth - this.width;
            } else if (this.width != this.indicatorWidth) {
                this.width = this.indicatorWidth;
                this.indicatorStyle.width = this.width + 'px';
            }

            if (y < this.minBoundaryY) {
                this.height = Math.max(this.indicatorHeight + y * 3, 8);
                this.indicatorStyle.height = this.height + 'px';
                y = this.minBoundaryY;
            } else if (y > this.maxBoundaryY) {
                this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
                this.indicatorStyle.height = this.height + 'px';
                y = this.maxPosY + this.indicatorHeight - this.height;
            } else if (this.height != this.indicatorHeight) {
                this.height = this.indicatorHeight;
                this.indicatorStyle.height = this.height + 'px';
            }

            this.x = x;
            this.y = y;

            this.indicatorStyle['webkitTransform'] = this.scroller._getTranslateStr(x, y);
        },
        fade: function fade(val, hold) {
            if (hold && !this.visible) {
                return;
            }

            clearTimeout(this.fadeTimeout);
            this.fadeTimeout = null;

            var time = val ? 250 : 500,
                delay = val ? 0 : 300;

            val = val ? '1' : '0';

            this.wrapperStyle['webkitTransitionDuration'] = time + 'ms';

            this.fadeTimeout = setTimeout(function (val) {
                this.wrapperStyle.opacity = val;
                this.visible = +val;
            }.bind(this, val), delay);
        }
    };

    $.Scroll = Scroll;

    $.fn.scroll = function (options) {
        var scrollApis = [];
        this.each(function () {
            var scrollApi = null;
            var self = this;
            var id = self.getAttribute('data-scroll');
            if (!id) {
                id = ++$.uuid;
                var _options = $.extend({}, options);
                if (self.classList.contains('mui-segmented-control')) {
                    _options = $.extend(_options, {
                        scrollY: false,
                        scrollX: true,
                        indicators: false,
                        snap: '.mui-control-item'
                    });
                }
                $.data[id] = scrollApi = new Scroll(self, _options);
                self.setAttribute('data-scroll', id);
            } else {
                scrollApi = $.data[id];
            }
            scrollApis.push(scrollApi);
        });
        return scrollApis.length === 1 ? scrollApis[0] : scrollApis;
    };
})(mui, window, document);
(function ($, window, document, undefined) {

    var CLASS_VISIBILITY = 'mui-visibility';
    var CLASS_HIDDEN = 'mui-hidden';

    var PullRefresh = $.Scroll.extend($.extend({
        handleEvent: function handleEvent(e) {
            this._super(e);
            if (e.type === 'scrollbottom') {
                if (e.target === this.scroller) {
                    this._scrollbottom();
                }
            }
        },
        _scrollbottom: function _scrollbottom() {
            if (!this.pulldown && !this.loading) {
                this.pulldown = false;
                this._initPullupRefresh();
                this.pullupLoading();
            }
        },
        _start: function _start(e) {
            //仅下拉刷新在start阻止默认事件
            if (e.touches && e.touches.length && e.touches[0].clientX > 30) {
                e.target && !this._preventDefaultException(e.target, this.options.preventDefaultException) && e.preventDefault();
            }
            if (!this.loading) {
                this.pulldown = this.pullPocket = this.pullCaption = this.pullLoading = false;
            }
            this._super(e);
        },
        _drag: function _drag(e) {
            this._super(e);
            if (!this.pulldown && !this.loading && this.topPocket && e.detail.direction === 'down' && this.y >= 0) {
                this._initPulldownRefresh();
            }
            if (this.pulldown) {
                this._setCaption(this.y > this.options.down.height ? this.options.down.contentover : this.options.down.contentdown);
            }
        },

        _reLayout: function _reLayout() {
            this.hasVerticalScroll = true;
            this._super();
        },
        //API
        resetPosition: function resetPosition(time) {
            if (this.pulldown) {
                if (this.y >= this.options.down.height) {
                    this.pulldownLoading(undefined, time || 0);
                    return true;
                } else {
                    !this.loading && this.topPocket.classList.remove(CLASS_VISIBILITY);
                }
            }
            return this._super(time);
        },
        pulldownLoading: function pulldownLoading(y, time) {
            typeof y === 'undefined' && (y = this.options.down.height); //默认高度
            this.scrollTo(0, y, time, this.options.bounceEasing);
            if (this.loading) {
                return;
            }
            //			if (!this.pulldown) {
            this._initPulldownRefresh();
            //			}
            this._setCaption(this.options.down.contentrefresh);
            this.loading = true;
            this.indicators.map(function (indicator) {
                indicator.fade(0);
            });
            var callback = this.options.down.callback;
            callback && callback.call(this);
        },
        endPulldownToRefresh: function endPulldownToRefresh() {
            var self = this;
            if (self.topPocket && self.loading && this.pulldown) {
                self.scrollTo(0, 0, self.options.bounceTime, self.options.bounceEasing);
                self.loading = false;
                self._setCaption(self.options.down.contentdown, true);
                setTimeout(function () {
                    self.loading || self.topPocket.classList.remove(CLASS_VISIBILITY);
                }, 350);
            }
        },
        pullupLoading: function pullupLoading(callback, x, time) {
            x = x || 0;
            this.scrollTo(x, this.maxScrollY, time, this.options.bounceEasing);
            if (this.loading) {
                return;
            }
            this._initPullupRefresh();
            this._setCaption(this.options.up.contentrefresh);
            this.indicators.map(function (indicator) {
                indicator.fade(0);
            });
            this.loading = true;
            callback = callback || this.options.up.callback;
            callback && callback.call(this);
        },
        endPullupToRefresh: function endPullupToRefresh(finished) {
            var self = this;
            if (self.bottomPocket) {
                // && self.loading && !this.pulldown
                self.loading = false;
                if (finished) {
                    this.finished = true;
                    self._setCaption(self.options.up.contentnomore);
                    //					self.bottomPocket.classList.remove(CLASS_VISIBILITY);
                    //					self.bottomPocket.classList.add(CLASS_HIDDEN);
                    self.wrapper.removeEventListener('scrollbottom', self);
                } else {
                    self._setCaption(self.options.up.contentdown);
                    //					setTimeout(function() {
                    self.loading || self.bottomPocket.classList.remove(CLASS_VISIBILITY);
                    //					}, 300);
                }
            }
        },
        disablePullupToRefresh: function disablePullupToRefresh() {
            this._initPullupRefresh();
            this.bottomPocket.className = 'mui-pull-bottom-pocket' + ' ' + CLASS_HIDDEN;
            this.wrapper.removeEventListener('scrollbottom', this);
        },
        enablePullupToRefresh: function enablePullupToRefresh() {
            this._initPullupRefresh();
            this.bottomPocket.classList.remove(CLASS_HIDDEN);
            this._setCaption(this.options.up.contentdown);
            this.wrapper.addEventListener('scrollbottom', this);
        },
        refresh: function refresh(isReset) {
            if (isReset && this.finished) {
                this.enablePullupToRefresh();
                this.finished = false;
            }
            this._super();
        }
    }, $.PullRefresh));
    $.fn.pullRefresh = function (options) {
        if (this.length === 1) {
            var self = this[0];
            var pullRefreshApi = null;
            options = options || {};
            var id = self.getAttribute('data-pullrefresh');
            if (!id) {
                id = ++$.uuid;
                $.data[id] = pullRefreshApi = new PullRefresh(self, options);
                self.setAttribute('data-pullrefresh', id);
            } else {
                pullRefreshApi = $.data[id];
            }
            if (options.down && options.down.auto) {
                //如果设置了auto，则自动下拉一次
                pullRefreshApi.pulldownLoading(options.down.autoY);
            } else if (options.up && options.up.auto) {
                //如果设置了auto，则自动上拉一次
                pullRefreshApi.pullupLoading();
            }
            //暂不提供这种调用方式吧			
            //			if (typeof options === 'string') {
            //				var methodValue = pullRefreshApi[options].apply(pullRefreshApi, $.slice.call(arguments, 1));
            //				if (methodValue !== undefined) {
            //					return methodValue;
            //				}
            //			}
            return pullRefreshApi;
        }
    };
})(mui, window, document);
/**
 * snap 重构
 * @param {Object} $
 * @param {Object} window
 */
(function ($, window) {
    var CLASS_SLIDER = 'mui-slider';
    var CLASS_SLIDER_GROUP = 'mui-slider-group';
    var CLASS_SLIDER_LOOP = 'mui-slider-loop';
    var CLASS_SLIDER_INDICATOR = 'mui-slider-indicator';
    var CLASS_ACTION_PREVIOUS = 'mui-action-previous';
    var CLASS_ACTION_NEXT = 'mui-action-next';
    var CLASS_SLIDER_ITEM = 'mui-slider-item';

    var CLASS_ACTIVE = 'mui-active';

    var SELECTOR_SLIDER_ITEM = '.' + CLASS_SLIDER_ITEM;
    var SELECTOR_SLIDER_INDICATOR = '.' + CLASS_SLIDER_INDICATOR;
    var SELECTOR_SLIDER_PROGRESS_BAR = '.mui-slider-progress-bar';

    var Slider = $.Slider = $.Scroll.extend({
        init: function init(element, options) {
            this._super(element, $.extend(true, {
                fingers: 1,
                interval: 0, //设置为0，则不定时轮播
                scrollY: false,
                scrollX: true,
                indicators: false,
                scrollTime: 1000,
                startX: false,
                slideTime: 0, //滑动动画时间
                snap: SELECTOR_SLIDER_ITEM
            }, options));
            if (this.options.startX) {
                //				$.trigger(this.wrapper, 'scrollend', this);
            }
        },
        _init: function _init() {
            this._reInit();
            if (this.scroller) {
                this.scrollerStyle = this.scroller.style;
                this.progressBar = this.wrapper.querySelector(SELECTOR_SLIDER_PROGRESS_BAR);
                if (this.progressBar) {
                    this.progressBarWidth = this.progressBar.offsetWidth;
                    this.progressBarStyle = this.progressBar.style;
                }
                //忘记这个代码是干什么的了？
                //				this.x = this._getScroll();
                //				if (this.options.startX === false) {
                //					this.options.startX = this.x;
                //				}
                //根据active修正startX

                this._super();
                this._initTimer();
            }
        },
        _triggerSlide: function _triggerSlide() {
            var self = this;
            self.isInTransition = false;
            var page = self.currentPage;
            self.slideNumber = self._fixedSlideNumber();
            if (self.loop) {
                if (self.slideNumber === 0) {
                    self.setTranslate(self.pages[1][0].x, 0);
                } else if (self.slideNumber === self.itemLength - 3) {
                    self.setTranslate(self.pages[self.itemLength - 2][0].x, 0);
                }
            }
            if (self.lastSlideNumber != self.slideNumber) {
                self.lastSlideNumber = self.slideNumber;
                self.lastPage = self.currentPage;
                $.trigger(self.wrapper, 'slide', {
                    slideNumber: self.slideNumber
                });
            }
            self._initTimer();
        },
        _handleSlide: function _handleSlide(e) {
            var self = this;
            if (e.target !== self.wrapper) {
                return;
            }
            var detail = e.detail;
            detail.slideNumber = detail.slideNumber || 0;
            var temps = self.scroller.querySelectorAll(SELECTOR_SLIDER_ITEM);
            var items = [];
            for (var i = 0, len = temps.length; i < len; i++) {
                var item = temps[i];
                if (item.parentNode === self.scroller) {
                    items.push(item);
                }
            }
            var _slideNumber = detail.slideNumber;
            if (self.loop) {
                _slideNumber += 1;
            }
            if (!self.wrapper.classList.contains('mui-segmented-control')) {
                for (var i = 0, len = items.length; i < len; i++) {
                    var item = items[i];
                    if (item.parentNode === self.scroller) {
                        if (i === _slideNumber) {
                            item.classList.add(CLASS_ACTIVE);
                        } else {
                            item.classList.remove(CLASS_ACTIVE);
                        }
                    }
                }
            }
            var indicatorWrap = self.wrapper.querySelector('.mui-slider-indicator');
            if (indicatorWrap) {
                if (indicatorWrap.getAttribute('data-scroll')) {
                    //scroll
                    $(indicatorWrap).scroll().gotoPage(detail.slideNumber);
                }
                var indicators = indicatorWrap.querySelectorAll('.mui-indicator');
                if (indicators.length > 0) {
                    //图片轮播
                    for (var i = 0, len = indicators.length; i < len; i++) {
                        indicators[i].classList[i === detail.slideNumber ? 'add' : 'remove'](CLASS_ACTIVE);
                    }
                } else {
                    var number = indicatorWrap.querySelector('.mui-number span');
                    if (number) {
                        //图文表格
                        number.innerText = detail.slideNumber + 1;
                    } else {
                        //segmented controls
                        var controlItems = indicatorWrap.querySelectorAll('.mui-control-item');
                        for (var i = 0, len = controlItems.length; i < len; i++) {
                            controlItems[i].classList[i === detail.slideNumber ? 'add' : 'remove'](CLASS_ACTIVE);
                        }
                    }
                }
            }
            e.stopPropagation();
        },
        _handleTabShow: function _handleTabShow(e) {
            var self = this;
            self.gotoItem(e.detail.tabNumber || 0, self.options.slideTime);
        },
        _handleIndicatorTap: function _handleIndicatorTap(event) {
            var self = this;
            var target = event.target;
            if (target.classList.contains(CLASS_ACTION_PREVIOUS) || target.classList.contains(CLASS_ACTION_NEXT)) {
                self[target.classList.contains(CLASS_ACTION_PREVIOUS) ? 'prevItem' : 'nextItem']();
                event.stopPropagation();
            }
        },
        _initEvent: function _initEvent(detach) {
            var self = this;
            self._super(detach);
            var action = detach ? 'removeEventListener' : 'addEventListener';
            self.wrapper[action]('slide', this);
            self.wrapper[action]($.eventName('shown', 'tab'), this);
        },
        handleEvent: function handleEvent(e) {
            this._super(e);
            switch (e.type) {
                case 'slide':
                    this._handleSlide(e);
                    break;
                case $.eventName('shown', 'tab'):
                    if (~this.snaps.indexOf(e.target)) {
                        //避免嵌套监听错误的tab show
                        this._handleTabShow(e);
                    }
                    break;
            }
        },
        _scrollend: function _scrollend(e) {
            this._super(e);
            this._triggerSlide(e);
        },
        _drag: function _drag(e) {
            this._super(e);
            var direction = e.detail.direction;
            if (direction === 'left' || direction === 'right') {
                //拖拽期间取消定时
                var slidershowTimer = this.wrapper.getAttribute('data-slidershowTimer');
                slidershowTimer && window.clearTimeout(slidershowTimer);

                e.stopPropagation();
            }
        },
        _initTimer: function _initTimer() {
            var self = this;
            var slider = self.wrapper;
            var interval = self.options.interval;
            var slidershowTimer = slider.getAttribute('data-slidershowTimer');
            slidershowTimer && window.clearTimeout(slidershowTimer);
            if (interval) {
                slidershowTimer = window.setTimeout(function () {
                    if (!slider) {
                        return;
                    }
                    //仅slider显示状态进行自动轮播
                    if (!!(slider.offsetWidth || slider.offsetHeight)) {
                        self.nextItem(true);
                        //下一个
                    }
                    self._initTimer();
                }, interval);
                slider.setAttribute('data-slidershowTimer', slidershowTimer);
            }
        },

        _fixedSlideNumber: function _fixedSlideNumber(page) {
            page = page || this.currentPage;
            var slideNumber = page.pageX;
            if (this.loop) {
                if (page.pageX === 0) {
                    slideNumber = this.itemLength - 3;
                } else if (page.pageX === this.itemLength - 1) {
                    slideNumber = 0;
                } else {
                    slideNumber = page.pageX - 1;
                }
            }
            return slideNumber;
        },
        _reLayout: function _reLayout() {
            this.hasHorizontalScroll = true;
            this.loop = this.scroller.classList.contains(CLASS_SLIDER_LOOP);
            this._super();
        },
        _getScroll: function _getScroll() {
            var result = $.parseTranslateMatrix($.getStyles(this.scroller, 'webkitTransform'));
            return result ? result.x : 0;
        },
        _transitionEnd: function _transitionEnd(e) {
            if (e.target !== this.scroller || !this.isInTransition) {
                return;
            }
            this._transitionTime();
            this.isInTransition = false;
            $.trigger(this.wrapper, 'scrollend', this);
        },
        _flick: function _flick(e) {
            if (!this.moved) {
                //无moved
                return;
            }
            var detail = e.detail;
            var direction = detail.direction;
            this._clearRequestAnimationFrame();
            this.isInTransition = true;
            //			if (direction === 'up' || direction === 'down') {
            //				this.resetPosition(this.options.bounceTime);
            //				return;
            //			}
            if (e.type === 'flick') {
                if (detail.deltaTime < 200) {
                    //flick，太容易触发，额外校验一下deltaTime
                    this.x = this._getPage(this.slideNumber + (direction === 'right' ? -1 : 1), true).x;
                }
                this.resetPosition(this.options.bounceTime);
            } else if (e.type === 'dragend' && !detail.flick) {
                this.resetPosition(this.options.bounceTime);
            }
            e.stopPropagation();
        },
        _initSnap: function _initSnap() {
            this.scrollerWidth = this.itemLength * this.scrollerWidth;
            this.maxScrollX = Math.min(this.wrapperWidth - this.scrollerWidth, 0);
            this._super();
            if (!this.currentPage.x) {
                //当slider处于隐藏状态时，导致snap计算是错误的，临时先这么判断一下，后续要考虑解决所有scroll在隐藏状态下初始化属性不正确的问题
                var currentPage = this.pages[this.loop ? 1 : 0];
                currentPage = currentPage || this.pages[0];
                if (!currentPage) {
                    return;
                }
                this.currentPage = currentPage[0];
                this.slideNumber = 0;
                this.lastSlideNumber = typeof this.lastSlideNumber === 'undefined' ? 0 : this.lastSlideNumber;
            } else {
                this.slideNumber = this._fixedSlideNumber();
                this.lastSlideNumber = typeof this.lastSlideNumber === 'undefined' ? this.slideNumber : this.lastSlideNumber;
            }
            this.options.startX = this.currentPage.x || 0;
        },
        _getSnapX: function _getSnapX(offsetLeft) {
            return Math.max(-offsetLeft, this.maxScrollX);
        },
        _getPage: function _getPage(slideNumber, isFlick) {
            if (this.loop) {
                if (slideNumber > this.itemLength - (isFlick ? 2 : 3)) {
                    slideNumber = 1;
                    time = 0;
                } else if (slideNumber < (isFlick ? -1 : 0)) {
                    slideNumber = this.itemLength - 2;
                    time = 0;
                } else {
                    slideNumber += 1;
                }
            } else {
                if (!isFlick) {
                    if (slideNumber > this.itemLength - 1) {
                        slideNumber = 0;
                        time = 0;
                    } else if (slideNumber < 0) {
                        slideNumber = this.itemLength - 1;
                        time = 0;
                    }
                }
                slideNumber = Math.min(Math.max(0, slideNumber), this.itemLength - 1);
            }
            return this.pages[slideNumber][0];
        },
        _gotoItem: function _gotoItem(slideNumber, time) {
            this.currentPage = this._getPage(slideNumber, true); //此处传true。可保证程序切换时，动画与人手操作一致(第一张，最后一张的切换动画)
            this.scrollTo(this.currentPage.x, 0, time, this.options.scrollEasing);
            if (time === 0) {
                $.trigger(this.wrapper, 'scrollend', this);
            }
        },
        //API
        setTranslate: function setTranslate(x, y) {
            this._super(x, y);
            var progressBar = this.progressBar;
            if (progressBar) {
                this.progressBarStyle.webkitTransform = this._getTranslateStr(-x * (this.progressBarWidth / this.wrapperWidth), 0);
            }
        },
        resetPosition: function resetPosition(time) {
            time = time || 0;
            if (this.x > 0) {
                this.x = 0;
            } else if (this.x < this.maxScrollX) {
                this.x = this.maxScrollX;
            }
            this.currentPage = this._nearestSnap(this.x);
            this.scrollTo(this.currentPage.x, 0, time, this.options.scrollEasing);
            return true;
        },
        gotoItem: function gotoItem(slideNumber, time) {
            this._gotoItem(slideNumber, typeof time === 'undefined' ? this.options.scrollTime : time);
        },
        nextItem: function nextItem() {
            this._gotoItem(this.slideNumber + 1, this.options.scrollTime);
        },
        prevItem: function prevItem() {
            this._gotoItem(this.slideNumber - 1, this.options.scrollTime);
        },
        getSlideNumber: function getSlideNumber() {
            return this.slideNumber || 0;
        },
        _reInit: function _reInit() {
            var groups = this.wrapper.querySelectorAll('.' + CLASS_SLIDER_GROUP);
            for (var i = 0, len = groups.length; i < len; i++) {
                if (groups[i].parentNode === this.wrapper) {
                    this.scroller = groups[i];
                    break;
                }
            }
            this.scrollerStyle = this.scroller && this.scroller.style;
            if (this.progressBar) {
                this.progressBarWidth = this.progressBar.offsetWidth;
                this.progressBarStyle = this.progressBar.style;
            }
        },
        refresh: function refresh(options) {
            if (options) {
                $.extend(this.options, options);
                this._super();
                this._initTimer();
            } else {
                this._super();
            }
        },
        destroy: function destroy() {
            this._initEvent(true); //detach
            delete $.data[this.wrapper.getAttribute('data-slider')];
            this.wrapper.setAttribute('data-slider', '');
        }
    });
    $.fn.slider = function (options) {
        var slider = null;
        this.each(function () {
            var sliderElement = this;
            if (!this.classList.contains(CLASS_SLIDER)) {
                sliderElement = this.querySelector('.' + CLASS_SLIDER);
            }
            if (sliderElement && sliderElement.querySelector(SELECTOR_SLIDER_ITEM)) {
                var id = sliderElement.getAttribute('data-slider');
                if (!id) {
                    id = ++$.uuid;
                    $.data[id] = slider = new Slider(sliderElement, options);
                    sliderElement.setAttribute('data-slider', id);
                } else {
                    slider = $.data[id];
                    if (slider && options) {
                        slider.refresh(options);
                    }
                }
            }
        });
        return slider;
    };
    $.ready(function () {
        //		setTimeout(function() {
        $('.mui-slider').slider();
        $('.mui-scroll-wrapper.mui-slider-indicator.mui-segmented-control').scroll({
            scrollY: false,
            scrollX: true,
            indicators: false,
            snap: '.mui-control-item'
        });
        //		}, 500); //临时处理slider宽度计算不正确的问题(初步确认是scrollbar导致的)
    });
})(mui, window);
/**
 * pullRefresh 5+
 * @param {type} $
 * @returns {undefined}
 */
(function ($, document) {
    if (!($.os.plus && $.os.android)) {
        //仅在android的5+版本使用
        return;
    }
    var CLASS_PLUS_PULLREFRESH = 'mui-plus-pullrefresh';
    var CLASS_VISIBILITY = 'mui-visibility';
    var CLASS_HIDDEN = 'mui-hidden';
    var CLASS_BLOCK = 'mui-block';

    var CLASS_PULL_CAPTION = 'mui-pull-caption';
    var CLASS_PULL_CAPTION_DOWN = 'mui-pull-caption-down';
    var CLASS_PULL_CAPTION_REFRESH = 'mui-pull-caption-refresh';
    var CLASS_PULL_CAPTION_NOMORE = 'mui-pull-caption-nomore';

    var PlusPullRefresh = $.Class.extend({
        init: function init(element, options) {
            this.element = element;
            this.options = options;
            this.wrapper = this.scroller = element;
            this._init();
            this._initPulldownRefreshEvent();
        },
        _init: function _init() {
            var self = this;
            //			document.addEventListener('plusscrollbottom', this);
            window.addEventListener('dragup', self);
            document.addEventListener("plusscrollbottom", self);
            self.scrollInterval = window.setInterval(function () {
                if (self.isScroll && !self.loading) {
                    if (window.pageYOffset + window.innerHeight + 10 >= document.documentElement.scrollHeight) {
                        self.isScroll = false; //放在这里是因为快速滚动的话，有可能检测时，还没到底，所以只要有滚动，没到底之前一直检测高度变化
                        if (self.bottomPocket) {
                            self.pullupLoading();
                        }
                    }
                }
            }, 100);
        },
        _initPulldownRefreshEvent: function _initPulldownRefreshEvent() {
            var self = this;
            if (self.topPocket && self.options.webviewId) {
                $.plusReady(function () {
                    var webview = plus.webview.getWebviewById(self.options.webviewId);
                    if (!webview) {
                        return;
                    }
                    self.options.webview = webview;
                    var downOptions = self.options.down;
                    var height = downOptions.height;
                    webview.addEventListener("dragBounce", function (e) {
                        if (!self.pulldown) {
                            self._initPulldownRefresh();
                        } else {
                            self.pullPocket.classList.add(CLASS_BLOCK);
                        }
                        switch (e.status) {
                            case "beforeChangeOffset":
                                //下拉可刷新状态
                                self._setCaption(downOptions.contentdown);
                                break;
                            case "afterChangeOffset":
                                //松开可刷新状态
                                self._setCaption(downOptions.contentover);
                                break;
                            case "dragEndAfterChangeOffset":
                                //正在刷新状态
                                //执行下拉刷新所在webview的回调函数
                                webview.evalJS("mui&&mui.options.pullRefresh.down.callback()");
                                self._setCaption(downOptions.contentrefresh);
                                break;
                            default:
                                break;
                        }
                    }, false);
                    webview.setBounce({
                        position: {
                            top: height * 2 + 'px'
                        },
                        changeoffset: {
                            top: height + 'px'
                        }
                    });
                });
            }
        },
        handleEvent: function handleEvent(e) {
            var self = this;
            if (self.stopped) {
                return;
            }
            //5+的plusscrollbottom当页面内容较少时，不触发
            //			if (e.type === 'plusscrollbottom') {
            //				if (this.bottomPocket) {
            //					this.pullupLoading();
            //				}
            //			}
            self.isScroll = false;
            if (e.type === 'dragup' || e.type === 'plusscrollbottom') {
                self.isScroll = true;
                setTimeout(function () {
                    self.isScroll = false;
                }, 1000);
            }
        }
    }).extend($.extend({
        setStopped: function setStopped(stopped) {
            //该方法是子页面调用的
            this.stopped = !!stopped;
            //TODO 此处需要设置当前webview的bounce为none,目前5+有BUG
            var webview = plus.webview.currentWebview();
            if (this.stopped) {
                webview.setStyle({
                    bounce: 'none'
                });
                webview.setBounce({
                    position: {
                        top: 'none'
                    }
                });
            } else {
                var height = this.options.down.height;
                webview.setStyle({
                    bounce: 'vertical'
                });
                webview.setBounce({
                    position: {
                        top: height * 2 + 'px'
                    },
                    changeoffset: {
                        top: height + 'px'
                    }
                });
            }
        },
        pulldownLoading: function pulldownLoading() {
            //该方法是子页面调用的
            $.plusReady(function () {
                plus.webview.currentWebview().setBounce({
                    offset: {
                        top: this.options.down.height + "px"
                    }
                });
            }.bind(this));
        },
        _pulldownLoading: function _pulldownLoading() {
            //该方法是父页面调用的
            var self = this;
            $.plusReady(function () {
                var childWebview = plus.webview.getWebviewById(self.options.webviewId);
                childWebview.setBounce({
                    offset: {
                        top: self.options.down.height + "px"
                    }
                });
            });
        },
        endPulldownToRefresh: function endPulldownToRefresh() {
            //该方法是子页面调用的
            var webview = plus.webview.currentWebview();
            webview.parent().evalJS("mui&&mui(document.querySelector('.mui-content')).pullRefresh('" + JSON.stringify({
                webviewId: webview.id
            }) + "')._endPulldownToRefresh()");
        },
        _endPulldownToRefresh: function _endPulldownToRefresh() {
            //该方法是父页面调用的
            var self = this;
            if (self.topPocket && self.options.webview) {
                self.options.webview.endPullToRefresh(); //下拉刷新所在webview回弹
                self.loading = false;
                self._setCaption(self.options.down.contentdown, true);
                setTimeout(function () {
                    self.loading || self.topPocket.classList.remove(CLASS_BLOCK);
                }, 350);
            }
        },
        pullupLoading: function pullupLoading(callback) {
            var self = this;
            if (self.isLoading) return;
            self.isLoading = true;
            if (self.pulldown !== false) {
                self._initPullupRefresh();
            } else {
                this.pullPocket.classList.add(CLASS_BLOCK);
            }
            setTimeout(function () {
                self.pullLoading.classList.add(CLASS_VISIBILITY);
                self.pullLoading.classList.remove(CLASS_HIDDEN);
                self.pullCaption.innerHTML = ''; //修正5+里边第一次加载时，文字显示的bug(还会显示出来个“多”,猜测应该是渲染问题导致的)
                self.pullCaption.className = CLASS_PULL_CAPTION + ' ' + CLASS_PULL_CAPTION_REFRESH;
                self.pullCaption.innerHTML = self.options.up.contentrefresh;
                callback = callback || self.options.up.callback;
                callback && callback.call(self);
            }, 300);
        },
        endPullupToRefresh: function endPullupToRefresh(finished) {
            var self = this;
            if (self.pullLoading) {
                self.pullLoading.classList.remove(CLASS_VISIBILITY);
                self.pullLoading.classList.add(CLASS_HIDDEN);
                self.isLoading = false;
                if (finished) {
                    self.finished = true;
                    self.pullCaption.className = CLASS_PULL_CAPTION + ' ' + CLASS_PULL_CAPTION_NOMORE;
                    self.pullCaption.innerHTML = self.options.up.contentnomore;
                    //					self.bottomPocket.classList.remove(CLASS_BLOCK);
                    //					self.bottomPocket.classList.add(CLASS_HIDDEN);
                    //取消5+的plusscrollbottom事件
                    document.removeEventListener('plusscrollbottom', self);
                    window.removeEventListener('dragup', self);
                } else {
                    //初始化时隐藏，后续不再隐藏
                    self.pullCaption.className = CLASS_PULL_CAPTION + ' ' + CLASS_PULL_CAPTION_DOWN;
                    self.pullCaption.innerHTML = self.options.up.contentdown;
                    //					setTimeout(function() {
                    //						self.loading || self.bottomPocket.classList.remove(CLASS_BLOCK);
                    //					}, 350);
                }
            }
        },
        disablePullupToRefresh: function disablePullupToRefresh() {
            this._initPullupRefresh();
            this.bottomPocket.className = 'mui-pull-bottom-pocket' + ' ' + CLASS_HIDDEN;
            window.removeEventListener('dragup', this);
        },
        enablePullupToRefresh: function enablePullupToRefresh() {
            this._initPullupRefresh();
            this.bottomPocket.classList.remove(CLASS_HIDDEN);
            this.pullCaption.className = CLASS_PULL_CAPTION + ' ' + CLASS_PULL_CAPTION_DOWN;
            this.pullCaption.innerHTML = this.options.up.contentdown;
            document.addEventListener("plusscrollbottom", this);
            window.addEventListener('dragup', this);
        },
        scrollTo: function scrollTo(x, y, time) {
            $.scrollTo(y, time);
        },
        scrollToBottom: function scrollToBottom(time) {
            $.scrollTo(document.documentElement.scrollHeight, time);
        },
        refresh: function refresh(isReset) {
            if (isReset && this.finished) {
                this.enablePullupToRefresh();
                this.finished = false;
            }
        }
    }, $.PullRefresh));

    //override h5 pullRefresh
    $.fn.pullRefresh = function (options) {
        var self;
        if (this.length === 0) {
            self = document.createElement('div');
            self.className = 'mui-content';
            document.body.appendChild(self);
        } else {
            self = this[0];
        }
        var args = options;
        //一个父需要支持多个子下拉刷新
        options = options || {};
        if (typeof options === 'string') {
            options = $.parseJSON(options);
        };
        !options.webviewId && (options.webviewId = plus.webview.currentWebview().id || plus.webview.currentWebview().getURL());
        var pullRefreshApi = null;
        var attrWebviewId = options.webviewId && options.webviewId.replace(/\//g, "_"); //替换所有"/"
        var id = self.getAttribute('data-pullrefresh-plus-' + attrWebviewId);
        if (!id && typeof args === 'undefined') {
            return false;
        }
        if (!id) {
            //避免重复初始化5+ pullrefresh
            id = ++$.uuid;
            self.setAttribute('data-pullrefresh-plus-' + attrWebviewId, id);
            document.body.classList.add(CLASS_PLUS_PULLREFRESH);
            $.data[id] = pullRefreshApi = new PlusPullRefresh(self, options);
        } else {
            pullRefreshApi = $.data[id];
        }
        if (options.down && options.down.auto) {
            //如果设置了auto，则自动下拉一次
            pullRefreshApi._pulldownLoading(); //parent webview
        } else if (options.up && options.up.auto) {
            //如果设置了auto，则自动上拉一次
            pullRefreshApi.pullupLoading();
        }
        return pullRefreshApi;
    };
})(mui, document);
/**
 * off-canvas
 * @param {type} $
 * @param {type} window
 * @param {type} document
 * @param {type} action
 * @returns {undefined}
 */
(function ($, window, document, name) {
    var CLASS_OFF_CANVAS_LEFT = 'mui-off-canvas-left';
    var CLASS_OFF_CANVAS_RIGHT = 'mui-off-canvas-right';
    var CLASS_ACTION_BACKDROP = 'mui-off-canvas-backdrop';
    var CLASS_OFF_CANVAS_WRAP = 'mui-off-canvas-wrap';

    var CLASS_SLIDE_IN = 'mui-slide-in';
    var CLASS_ACTIVE = 'mui-active';

    var CLASS_TRANSITIONING = 'mui-transitioning';

    var SELECTOR_INNER_WRAP = '.mui-inner-wrap';

    var OffCanvas = $.Class.extend({
        init: function init(element, options) {
            this.wrapper = this.element = element;
            this.scroller = this.wrapper.querySelector(SELECTOR_INNER_WRAP);
            this.classList = this.wrapper.classList;
            if (this.scroller) {
                this.options = $.extend(true, {
                    dragThresholdX: 10,
                    scale: 0.8,
                    opacity: 0.1,
                    preventDefaultException: {
                        tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|VIDEO)$/
                    }
                }, options);
                document.body.classList.add('mui-fullscreen'); //fullscreen
                this.refresh();
                this.initEvent();
            }
        },
        _preventDefaultException: function _preventDefaultException(el, exceptions) {
            for (var i in exceptions) {
                if (exceptions[i].test(el[i])) {
                    return true;
                }
            }
            return false;
        },
        refresh: function refresh(offCanvas) {
            //			offCanvas && !offCanvas.classList.contains(CLASS_ACTIVE) && this.classList.remove(CLASS_ACTIVE);
            this.slideIn = this.classList.contains(CLASS_SLIDE_IN);
            this.scalable = this.classList.contains('mui-scalable') && !this.slideIn;
            this.scroller = this.wrapper.querySelector(SELECTOR_INNER_WRAP);
            //			!offCanvas && this.scroller.classList.remove(CLASS_TRANSITIONING);
            //			!offCanvas && this.scroller.setAttribute('style', '');
            this.offCanvasLefts = this.wrapper.querySelectorAll('.' + CLASS_OFF_CANVAS_LEFT);
            this.offCanvasRights = this.wrapper.querySelectorAll('.' + CLASS_OFF_CANVAS_RIGHT);
            if (offCanvas) {
                if (offCanvas.classList.contains(CLASS_OFF_CANVAS_LEFT)) {
                    this.offCanvasLeft = offCanvas;
                } else if (offCanvas.classList.contains(CLASS_OFF_CANVAS_RIGHT)) {
                    this.offCanvasRight = offCanvas;
                }
            } else {
                this.offCanvasRight = this.wrapper.querySelector('.' + CLASS_OFF_CANVAS_RIGHT);
                this.offCanvasLeft = this.wrapper.querySelector('.' + CLASS_OFF_CANVAS_LEFT);
            }
            this.offCanvasRightWidth = this.offCanvasLeftWidth = 0;
            this.offCanvasLeftSlideIn = this.offCanvasRightSlideIn = false;
            if (this.offCanvasRight) {
                this.offCanvasRightWidth = this.offCanvasRight.offsetWidth;
                this.offCanvasRightSlideIn = this.slideIn && this.offCanvasRight.parentNode === this.wrapper;
                //				this.offCanvasRight.classList.remove(CLASS_TRANSITIONING);
                //				this.offCanvasRight.classList.remove(CLASS_ACTIVE);
                //				this.offCanvasRight.setAttribute('style', '');
            }
            if (this.offCanvasLeft) {
                this.offCanvasLeftWidth = this.offCanvasLeft.offsetWidth;
                this.offCanvasLeftSlideIn = this.slideIn && this.offCanvasLeft.parentNode === this.wrapper;
                //				this.offCanvasLeft.classList.remove(CLASS_TRANSITIONING);
                //				this.offCanvasLeft.classList.remove(CLASS_ACTIVE);
                //				this.offCanvasLeft.setAttribute('style', '');
            }
            this.backdrop = this.scroller.querySelector('.' + CLASS_ACTION_BACKDROP);

            this.options.dragThresholdX = this.options.dragThresholdX || 10;

            this.visible = false;
            this.startX = null;
            this.lastX = null;
            this.offsetX = null;
            this.lastTranslateX = null;
        },
        handleEvent: function handleEvent(e) {
            switch (e.type) {
                case $.EVENT_START:
                    e.target && !this._preventDefaultException(e.target, this.options.preventDefaultException) && e.preventDefault();
                    break;
                case 'webkitTransitionEnd':
                    //有个bug需要处理，需要考虑假设没有触发webkitTransitionEnd的情况
                    if (e.target === this.scroller) {
                        this._dispatchEvent();
                    }
                    break;
                case 'drag':
                    var detail = e.detail;
                    if (!this.startX) {
                        this.startX = detail.center.x;
                        this.lastX = this.startX;
                    } else {
                        this.lastX = detail.center.x;
                    }
                    if (!this.isDragging && Math.abs(this.lastX - this.startX) > this.options.dragThresholdX && (detail.direction === 'left' || detail.direction === 'right')) {
                        if (this.slideIn) {
                            this.scroller = this.wrapper.querySelector(SELECTOR_INNER_WRAP);
                            if (this.classList.contains(CLASS_ACTIVE)) {
                                if (this.offCanvasRight && this.offCanvasRight.classList.contains(CLASS_ACTIVE)) {
                                    this.offCanvas = this.offCanvasRight;
                                    this.offCanvasWidth = this.offCanvasRightWidth;
                                } else {
                                    this.offCanvas = this.offCanvasLeft;
                                    this.offCanvasWidth = this.offCanvasLeftWidth;
                                }
                            } else {
                                if (detail.direction === 'left' && this.offCanvasRight) {
                                    this.offCanvas = this.offCanvasRight;
                                    this.offCanvasWidth = this.offCanvasRightWidth;
                                } else if (detail.direction === 'right' && this.offCanvasLeft) {
                                    this.offCanvas = this.offCanvasLeft;
                                    this.offCanvasWidth = this.offCanvasLeftWidth;
                                } else {
                                    this.scroller = null;
                                }
                            }
                        } else {
                            if (this.classList.contains(CLASS_ACTIVE)) {
                                if (detail.direction === 'left') {
                                    this.offCanvas = this.offCanvasLeft;
                                    this.offCanvasWidth = this.offCanvasLeftWidth;
                                } else {
                                    this.offCanvas = this.offCanvasRight;
                                    this.offCanvasWidth = this.offCanvasRightWidth;
                                }
                            } else {
                                if (detail.direction === 'right') {
                                    this.offCanvas = this.offCanvasLeft;
                                    this.offCanvasWidth = this.offCanvasLeftWidth;
                                } else {
                                    this.offCanvas = this.offCanvasRight;
                                    this.offCanvasWidth = this.offCanvasRightWidth;
                                }
                            }
                        }
                        if (this.offCanvas && this.scroller) {
                            this.startX = this.lastX;
                            this.isDragging = true;

                            $.gestures.session.lockDirection = true; //锁定方向
                            $.gestures.session.startDirection = detail.direction;

                            this.offCanvas.classList.remove(CLASS_TRANSITIONING);
                            this.scroller.classList.remove(CLASS_TRANSITIONING);
                            this.offsetX = this.getTranslateX();
                            this._initOffCanvasVisible();
                        }
                    }
                    if (this.isDragging) {
                        this.updateTranslate(this.offsetX + (this.lastX - this.startX));
                        detail.gesture.preventDefault();
                        e.stopPropagation();
                    }
                    break;
                case 'dragend':
                    if (this.isDragging) {
                        var detail = e.detail;
                        var direction = detail.direction;
                        this.isDragging = false;
                        this.offCanvas.classList.add(CLASS_TRANSITIONING);
                        this.scroller.classList.add(CLASS_TRANSITIONING);
                        var ratio = 0;
                        var x = this.getTranslateX();
                        if (!this.slideIn) {
                            if (x >= 0) {
                                ratio = this.offCanvasLeftWidth && x / this.offCanvasLeftWidth || 0;
                            } else {
                                ratio = this.offCanvasRightWidth && x / this.offCanvasRightWidth || 0;
                            }
                            if (ratio === 0) {
                                this.openPercentage(0);
                                this._dispatchEvent(); //此处不触发webkitTransitionEnd,所以手动dispatch
                                return;
                            }
                            if (direction === 'right' && ratio >= 0 && (ratio >= 0.5 || detail.swipe)) {
                                //右滑打开
                                this.openPercentage(100);
                            } else if (direction === 'right' && ratio < 0 && (ratio > -0.5 || detail.swipe)) {
                                //右滑关闭
                                this.openPercentage(0);
                            } else if (direction === 'right' && ratio > 0 && ratio < 0.5) {
                                //右滑还原关闭
                                this.openPercentage(0);
                            } else if (direction === 'right' && ratio < 0.5) {
                                //右滑还原打开
                                this.openPercentage(-100);
                            } else if (direction === 'left' && ratio <= 0 && (ratio <= -0.5 || detail.swipe)) {
                                //左滑打开
                                this.openPercentage(-100);
                            } else if (direction === 'left' && ratio > 0 && (ratio <= 0.5 || detail.swipe)) {
                                //左滑关闭
                                this.openPercentage(0);
                            } else if (direction === 'left' && ratio < 0 && ratio >= -0.5) {
                                //左滑还原关闭
                                this.openPercentage(0);
                            } else if (direction === 'left' && ratio > 0.5) {
                                //左滑还原打开
                                this.openPercentage(100);
                            } else {
                                //默认关闭
                                this.openPercentage(0);
                            }
                            if (ratio === 1 || ratio === -1) {
                                //此处不触发webkitTransitionEnd,所以手动dispatch
                                this._dispatchEvent();
                            }
                        } else {
                            if (x >= 0) {
                                ratio = this.offCanvasRightWidth && x / this.offCanvasRightWidth || 0;
                            } else {
                                ratio = this.offCanvasLeftWidth && x / this.offCanvasLeftWidth || 0;
                            }
                            if (direction === 'right' && ratio <= 0 && (ratio >= -0.5 || detail.swipe)) {
                                //右滑打开
                                this.openPercentage(100);
                            } else if (direction === 'right' && ratio > 0 && (ratio >= 0.5 || detail.swipe)) {
                                //右滑关闭
                                this.openPercentage(0);
                            } else if (direction === 'right' && ratio <= -0.5) {
                                //右滑还原关闭
                                this.openPercentage(0);
                            } else if (direction === 'right' && ratio > 0 && ratio <= 0.5) {
                                //右滑还原打开
                                this.openPercentage(-100);
                            } else if (direction === 'left' && ratio >= 0 && (ratio <= 0.5 || detail.swipe)) {
                                //左滑打开
                                this.openPercentage(-100);
                            } else if (direction === 'left' && ratio < 0 && (ratio <= -0.5 || detail.swipe)) {
                                //左滑关闭
                                this.openPercentage(0);
                            } else if (direction === 'left' && ratio >= 0.5) {
                                //左滑还原关闭
                                this.openPercentage(0);
                            } else if (direction === 'left' && ratio >= -0.5 && ratio < 0) {
                                //左滑还原打开
                                this.openPercentage(100);
                            } else {
                                this.openPercentage(0);
                            }
                            if (ratio === 1 || ratio === -1 || ratio === 0) {
                                this._dispatchEvent();
                                return;
                            }
                        }
                    }
                    break;
            }
        },
        _dispatchEvent: function _dispatchEvent() {
            if (this.classList.contains(CLASS_ACTIVE)) {
                $.trigger(this.wrapper, 'shown', this);
            } else {
                $.trigger(this.wrapper, 'hidden', this);
            }
        },
        _initOffCanvasVisible: function _initOffCanvasVisible() {
            if (!this.visible) {
                this.visible = true;
                if (this.offCanvasLeft) {
                    this.offCanvasLeft.style.visibility = 'visible';
                }
                if (this.offCanvasRight) {
                    this.offCanvasRight.style.visibility = 'visible';
                }
            }
        },
        initEvent: function initEvent() {
            var self = this;
            if (self.backdrop) {
                self.backdrop.addEventListener('tap', function (e) {
                    self.close();
                    e.detail.gesture.preventDefault();
                });
            }
            if (this.classList.contains('mui-draggable')) {
                this.wrapper.addEventListener($.EVENT_START, this); //临时处理
                this.wrapper.addEventListener('drag', this);
                this.wrapper.addEventListener('dragend', this);
            }
            this.wrapper.addEventListener('webkitTransitionEnd', this);
        },
        openPercentage: function openPercentage(percentage) {
            var p = percentage / 100;
            if (!this.slideIn) {
                if (this.offCanvasLeft && percentage >= 0) {
                    this.updateTranslate(this.offCanvasLeftWidth * p);
                    this.offCanvasLeft.classList[p !== 0 ? 'add' : 'remove'](CLASS_ACTIVE);
                } else if (this.offCanvasRight && percentage <= 0) {
                    this.updateTranslate(this.offCanvasRightWidth * p);
                    this.offCanvasRight.classList[p !== 0 ? 'add' : 'remove'](CLASS_ACTIVE);
                }
                this.classList[p !== 0 ? 'add' : 'remove'](CLASS_ACTIVE);
            } else {
                if (this.offCanvasLeft && percentage >= 0) {
                    p = p === 0 ? -1 : 0;
                    this.updateTranslate(this.offCanvasLeftWidth * p);
                    this.offCanvasLeft.classList[percentage !== 0 ? 'add' : 'remove'](CLASS_ACTIVE);
                } else if (this.offCanvasRight && percentage <= 0) {
                    p = p === 0 ? 1 : 0;
                    this.updateTranslate(this.offCanvasRightWidth * p);
                    this.offCanvasRight.classList[percentage !== 0 ? 'add' : 'remove'](CLASS_ACTIVE);
                }
                this.classList[percentage !== 0 ? 'add' : 'remove'](CLASS_ACTIVE);
            }
        },
        updateTranslate: function updateTranslate(x) {
            if (x !== this.lastTranslateX) {
                if (!this.slideIn) {
                    if (!this.offCanvasLeft && x > 0 || !this.offCanvasRight && x < 0) {
                        this.setTranslateX(0);
                        return;
                    }
                    if (this.leftShowing && x > this.offCanvasLeftWidth) {
                        this.setTranslateX(this.offCanvasLeftWidth);
                        return;
                    }
                    if (this.rightShowing && x < -this.offCanvasRightWidth) {
                        this.setTranslateX(-this.offCanvasRightWidth);
                        return;
                    }
                    this.setTranslateX(x);
                    if (x >= 0) {
                        this.leftShowing = true;
                        this.rightShowing = false;
                        if (x > 0) {
                            if (this.offCanvasLeft) {
                                $.each(this.offCanvasLefts, function (index, offCanvas) {
                                    if (offCanvas === this.offCanvasLeft) {
                                        this.offCanvasLeft.style.zIndex = 0;
                                    } else {
                                        offCanvas.style.zIndex = -1;
                                    }
                                }.bind(this));
                            }
                            if (this.offCanvasRight) {
                                this.offCanvasRight.style.zIndex = -1;
                            }
                        }
                    } else {
                        this.rightShowing = true;
                        this.leftShowing = false;
                        if (this.offCanvasRight) {
                            $.each(this.offCanvasRights, function (index, offCanvas) {
                                if (offCanvas === this.offCanvasRight) {
                                    offCanvas.style.zIndex = 0;
                                } else {
                                    offCanvas.style.zIndex = -1;
                                }
                            }.bind(this));
                        }
                        if (this.offCanvasLeft) {
                            this.offCanvasLeft.style.zIndex = -1;
                        }
                    }
                } else {
                    if (this.offCanvas.classList.contains(CLASS_OFF_CANVAS_RIGHT)) {
                        if (x < 0) {
                            this.setTranslateX(0);
                            return;
                        }
                        if (x > this.offCanvasRightWidth) {
                            this.setTranslateX(this.offCanvasRightWidth);
                            return;
                        }
                    } else {
                        if (x > 0) {
                            this.setTranslateX(0);
                            return;
                        }
                        if (x < -this.offCanvasLeftWidth) {
                            this.setTranslateX(-this.offCanvasLeftWidth);
                            return;
                        }
                    }
                    this.setTranslateX(x);
                }
                this.lastTranslateX = x;
            }
        },
        setTranslateX: $.animationFrame(function (x) {
            if (this.scroller) {
                if (this.scalable && this.offCanvas.parentNode === this.wrapper) {
                    var percent = Math.abs(x) / this.offCanvasWidth;
                    var zoomOutScale = 1 - (1 - this.options.scale) * percent;
                    var zoomInScale = this.options.scale + (1 - this.options.scale) * percent;
                    var zoomOutOpacity = 1 - (1 - this.options.opacity) * percent;
                    var zoomInOpacity = this.options.opacity + (1 - this.options.opacity) * percent;
                    if (this.offCanvas.classList.contains(CLASS_OFF_CANVAS_LEFT)) {
                        this.offCanvas.style.webkitTransformOrigin = '-100%';
                        this.scroller.style.webkitTransformOrigin = 'left';
                    } else {
                        this.offCanvas.style.webkitTransformOrigin = '200%';
                        this.scroller.style.webkitTransformOrigin = 'right';
                    }
                    this.offCanvas.style.opacity = zoomInOpacity;
                    this.offCanvas.style.webkitTransform = 'translate3d(0,0,0) scale(' + zoomInScale + ')';
                    this.scroller.style.webkitTransform = 'translate3d(' + x + 'px,0,0) scale(' + zoomOutScale + ')';
                } else {
                    if (this.slideIn) {
                        this.offCanvas.style.webkitTransform = 'translate3d(' + x + 'px,0,0)';
                    } else {
                        this.scroller.style.webkitTransform = 'translate3d(' + x + 'px,0,0)';
                    }
                }
            }
        }),
        getTranslateX: function getTranslateX() {
            if (this.offCanvas) {
                var scroller = this.slideIn ? this.offCanvas : this.scroller;
                var result = $.parseTranslateMatrix($.getStyles(scroller, 'webkitTransform'));
                return result && result.x || 0;
            }
            return 0;
        },
        isShown: function isShown(direction) {
            var shown = false;
            if (!this.slideIn) {
                var x = this.getTranslateX();
                if (direction === 'right') {
                    shown = this.classList.contains(CLASS_ACTIVE) && x < 0;
                } else if (direction === 'left') {
                    shown = this.classList.contains(CLASS_ACTIVE) && x > 0;
                } else {
                    shown = this.classList.contains(CLASS_ACTIVE) && x !== 0;
                }
            } else {
                if (direction === 'left') {
                    shown = this.classList.contains(CLASS_ACTIVE) && this.wrapper.querySelector('.' + CLASS_OFF_CANVAS_LEFT + '.' + CLASS_ACTIVE);
                } else if (direction === 'right') {
                    shown = this.classList.contains(CLASS_ACTIVE) && this.wrapper.querySelector('.' + CLASS_OFF_CANVAS_RIGHT + '.' + CLASS_ACTIVE);
                } else {
                    shown = this.classList.contains(CLASS_ACTIVE) && (this.wrapper.querySelector('.' + CLASS_OFF_CANVAS_LEFT + '.' + CLASS_ACTIVE) || this.wrapper.querySelector('.' + CLASS_OFF_CANVAS_RIGHT + '.' + CLASS_ACTIVE));
                }
            }
            return shown;
        },
        close: function close() {
            this._initOffCanvasVisible();
            this.offCanvas = this.wrapper.querySelector('.' + CLASS_OFF_CANVAS_RIGHT + '.' + CLASS_ACTIVE) || this.wrapper.querySelector('.' + CLASS_OFF_CANVAS_LEFT + '.' + CLASS_ACTIVE);
            this.offCanvasWidth = this.offCanvas.offsetWidth;
            if (this.scroller) {
                this.offCanvas.offsetHeight;
                this.offCanvas.classList.add(CLASS_TRANSITIONING);
                this.scroller.classList.add(CLASS_TRANSITIONING);
                this.openPercentage(0);
            }
        },
        show: function show(direction) {
            this._initOffCanvasVisible();
            if (this.isShown(direction)) {
                return false;
            }
            if (!direction) {
                direction = this.wrapper.querySelector('.' + CLASS_OFF_CANVAS_RIGHT) ? 'right' : 'left';
            }
            if (direction === 'right') {
                this.offCanvas = this.offCanvasRight;
                this.offCanvasWidth = this.offCanvasRightWidth;
            } else {
                this.offCanvas = this.offCanvasLeft;
                this.offCanvasWidth = this.offCanvasLeftWidth;
            }
            if (this.scroller) {
                this.offCanvas.offsetHeight;
                this.offCanvas.classList.add(CLASS_TRANSITIONING);
                this.scroller.classList.add(CLASS_TRANSITIONING);
                this.openPercentage(direction === 'left' ? 100 : -100);
            }
            return true;
        },
        toggle: function toggle(directionOrOffCanvas) {
            var direction = directionOrOffCanvas;
            if (directionOrOffCanvas && directionOrOffCanvas.classList) {
                direction = directionOrOffCanvas.classList.contains(CLASS_OFF_CANVAS_LEFT) ? 'left' : 'right';
                this.refresh(directionOrOffCanvas);
            }
            if (!this.show(direction)) {
                this.close();
            }
        }
    });

    //hash to offcanvas
    var findOffCanvasContainer = function findOffCanvasContainer(target) {
        parentNode = target.parentNode;
        if (parentNode) {
            if (parentNode.classList.contains(CLASS_OFF_CANVAS_WRAP)) {
                return parentNode;
            } else {
                parentNode = parentNode.parentNode;
                if (parentNode.classList.contains(CLASS_OFF_CANVAS_WRAP)) {
                    return parentNode;
                }
            }
        }
    };
    var handle = function handle(event, target) {
        if (target.tagName === 'A' && target.hash) {
            var offcanvas = document.getElementById(target.hash.replace('#', ''));
            if (offcanvas) {
                var container = findOffCanvasContainer(offcanvas);
                if (container) {
                    $.targets._container = container;
                    return offcanvas;
                }
            }
        }
        return false;
    };

    $.registerTarget({
        name: name,
        index: 60,
        handle: handle,
        target: false,
        isReset: false,
        isContinue: true
    });

    window.addEventListener('tap', function (e) {
        if (!$.targets.offcanvas) {
            return;
        }
        //TODO 此处类型的代码后续考虑统一优化(target机制)，现在的实现费力不讨好
        var target = e.target;
        for (; target && target !== document; target = target.parentNode) {
            if (target.tagName === 'A' && target.hash && target.hash === '#' + $.targets.offcanvas.id) {
                e.detail && e.detail.gesture && e.detail.gesture.preventDefault(); //fixed hashchange
                $($.targets._container).offCanvas().toggle($.targets.offcanvas);
                $.targets.offcanvas = $.targets._container = null;
                break;
            }
        }
    });

    $.fn.offCanvas = function (options) {
        var offCanvasApis = [];
        this.each(function () {
            var offCanvasApi = null;
            var self = this;
            //hack old version
            if (!self.classList.contains(CLASS_OFF_CANVAS_WRAP)) {
                self = findOffCanvasContainer(self);
            }
            var id = self.getAttribute('data-offCanvas');
            if (!id) {
                id = ++$.uuid;
                $.data[id] = offCanvasApi = new OffCanvas(self, options);
                self.setAttribute('data-offCanvas', id);
            } else {
                offCanvasApi = $.data[id];
            }
            if (options === 'show' || options === 'close' || options === 'toggle') {
                offCanvasApi.toggle();
            }
            offCanvasApis.push(offCanvasApi);
        });
        return offCanvasApis.length === 1 ? offCanvasApis[0] : offCanvasApis;
    };
    $.ready(function () {
        $('.mui-off-canvas-wrap').offCanvas();
    });
})(mui, window, document, 'offcanvas');
/**
 * actions
 * @param {type} $
 * @param {type} name
 * @returns {undefined}
 */
(function ($, name) {
    var CLASS_ACTION = 'mui-action';

    var handle = function handle(event, target) {
        var className = target.className || '';
        if (typeof className !== 'string') {
            //svg className(SVGAnimatedString)
            className = '';
        }
        if (className && ~className.indexOf(CLASS_ACTION)) {
            if (target.classList.contains('mui-action-back')) {
                event.preventDefault();
            }
            return target;
        }
        return false;
    };

    $.registerTarget({
        name: name,
        index: 50,
        handle: handle,
        target: false,
        isContinue: true
    });
})(mui, 'action');
/**
 * Modals
 * @param {type} $
 * @param {type} window
 * @param {type} document
 * @param {type} name
 * @returns {undefined}
 */
(function ($, window, document, name) {
    var CLASS_MODAL = 'mui-modal';

    var handle = function handle(event, target) {
        if (target.tagName === 'A' && target.hash) {
            var modal = document.getElementById(target.hash.replace('#', ''));
            if (modal && modal.classList.contains(CLASS_MODAL)) {
                return modal;
            }
        }
        return false;
    };

    $.registerTarget({
        name: name,
        index: 50,
        handle: handle,
        target: false,
        isReset: false,
        isContinue: true
    });

    window.addEventListener('tap', function (event) {
        if ($.targets.modal) {
            event.detail.gesture.preventDefault(); //fixed hashchange
            $.targets.modal.classList.toggle('mui-active');
        }
    });
})(mui, window, document, 'modal');
/**
 * Popovers
 * @param {type} $
 * @param {type} window
 * @param {type} document
 * @param {type} name
 * @param {type} undefined
 * @returns {undefined}
 */
(function ($, window, document, name) {

    var CLASS_POPOVER = 'mui-popover';
    var CLASS_POPOVER_ARROW = 'mui-popover-arrow';
    var CLASS_ACTION_POPOVER = 'mui-popover-action';
    var CLASS_BACKDROP = 'mui-backdrop';
    var CLASS_BAR_POPOVER = 'mui-bar-popover';
    var CLASS_BAR_BACKDROP = 'mui-bar-backdrop';
    var CLASS_ACTION_BACKDROP = 'mui-backdrop-action';
    var CLASS_ACTIVE = 'mui-active';
    var CLASS_BOTTOM = 'mui-bottom';

    var handle = function handle(event, target) {
        if (target.tagName === 'A' && target.hash) {
            $.targets._popover = document.getElementById(target.hash.replace('#', ''));
            if ($.targets._popover && $.targets._popover.classList.contains(CLASS_POPOVER)) {
                return target;
            } else {
                $.targets._popover = null;
            }
        }
        return false;
    };

    $.registerTarget({
        name: name,
        index: 60,
        handle: handle,
        target: false,
        isReset: false,
        isContinue: true
    });

    var fixedPopoverScroll = function fixedPopoverScroll(isPopoverScroll) {
        //		if (isPopoverScroll) {
        //			document.body.setAttribute('style', 'overflow:hidden;');
        //		} else {
        //			document.body.setAttribute('style', '');
        //		}
    };
    var onPopoverShown = function onPopoverShown(e) {
        this.removeEventListener('webkitTransitionEnd', onPopoverShown);
        this.addEventListener($.EVENT_MOVE, $.preventDefault);
        $.trigger(this, 'shown', this);
    };
    var onPopoverHidden = function onPopoverHidden(e) {
        setStyle(this, 'none');
        this.removeEventListener('webkitTransitionEnd', onPopoverHidden);
        this.removeEventListener($.EVENT_MOVE, $.preventDefault);
        fixedPopoverScroll(false);
        $.trigger(this, 'hidden', this);
    };

    var backdrop = function () {
        var element = document.createElement('div');
        element.classList.add(CLASS_BACKDROP);
        element.addEventListener($.EVENT_MOVE, $.preventDefault);
        element.addEventListener('tap', function (e) {
            var popover = $.targets._popover;
            if (popover) {
                popover.addEventListener('webkitTransitionEnd', onPopoverHidden);
                popover.classList.remove(CLASS_ACTIVE);
                removeBackdrop(popover);
                document.body.setAttribute('style', ''); //webkitTransitionEnd有时候不触发？
            }
        });

        return element;
    }();
    var removeBackdropTimer;
    var removeBackdrop = function removeBackdrop(popover) {
        backdrop.setAttribute('style', 'opacity:0');
        $.targets.popover = $.targets._popover = null; //reset
        removeBackdropTimer = $.later(function () {
            if (!popover.classList.contains(CLASS_ACTIVE) && backdrop.parentNode && backdrop.parentNode === document.body) {
                document.body.removeChild(backdrop);
            }
        }, 350);
    };
    window.addEventListener('tap', function (e) {
        if (!$.targets.popover) {
            return;
        }
        var toggle = false;
        var target = e.target;
        for (; target && target !== document; target = target.parentNode) {
            if (target === $.targets.popover) {
                toggle = true;
            }
        }
        if (toggle) {
            e.detail.gesture.preventDefault(); //fixed hashchange
            togglePopover($.targets._popover, $.targets.popover);
        }
    });

    var togglePopover = function togglePopover(popover, anchor, state) {
        if (state === 'show' && popover.classList.contains(CLASS_ACTIVE) || state === 'hide' && !popover.classList.contains(CLASS_ACTIVE)) {
            return;
        }
        removeBackdropTimer && removeBackdropTimer.cancel(); //取消remove的timer
        //remove一遍，以免来回快速切换，导致webkitTransitionEnd不触发，无法remove
        popover.removeEventListener('webkitTransitionEnd', onPopoverShown);
        popover.removeEventListener('webkitTransitionEnd', onPopoverHidden);
        backdrop.classList.remove(CLASS_BAR_BACKDROP);
        backdrop.classList.remove(CLASS_ACTION_BACKDROP);
        var _popover = document.querySelector('.mui-popover.mui-active');
        if (_popover) {
            //			_popover.setAttribute('style', '');
            _popover.addEventListener('webkitTransitionEnd', onPopoverHidden);
            _popover.classList.remove(CLASS_ACTIVE);
            //			_popover.removeEventListener('webkitTransitionEnd', onPopoverHidden);
            //			fixedPopoverScroll(false);
            //同一个弹出则直接返回，解决同一个popover的toggle
            if (popover === _popover) {
                removeBackdrop(_popover);
                return;
            }
        }
        var isActionSheet = false;
        if (popover.classList.contains(CLASS_BAR_POPOVER) || popover.classList.contains(CLASS_ACTION_POPOVER)) {
            //navBar
            if (popover.classList.contains(CLASS_ACTION_POPOVER)) {
                //action sheet popover
                isActionSheet = true;
                backdrop.classList.add(CLASS_ACTION_BACKDROP);
            } else {
                //bar popover
                backdrop.classList.add(CLASS_BAR_BACKDROP);
                //				if (anchor) {
                //					if (anchor.parentNode) {
                //						var offsetWidth = anchor.offsetWidth;
                //						var offsetLeft = anchor.offsetLeft;
                //						var innerWidth = window.innerWidth;
                //						popover.style.left = (Math.min(Math.max(offsetLeft, defaultPadding), innerWidth - offsetWidth - defaultPadding)) + "px";
                //					} else {
                //						//TODO anchor is position:{left,top,bottom,right}
                //					}
                //				}
            }
        }
        setStyle(popover, 'block'); //actionsheet transform
        popover.offsetHeight;
        popover.classList.add(CLASS_ACTIVE);
        backdrop.setAttribute('style', '');
        document.body.appendChild(backdrop);
        fixedPopoverScroll(true);
        calPosition(popover, anchor, isActionSheet); //position
        backdrop.classList.add(CLASS_ACTIVE);
        popover.addEventListener('webkitTransitionEnd', onPopoverShown);
    };
    var setStyle = function setStyle(popover, display, top, left) {
        var style = popover.style;
        if (typeof display !== 'undefined') style.display = display;
        if (typeof top !== 'undefined') style.top = top + 'px';
        if (typeof left !== 'undefined') style.left = left + 'px';
    };
    var calPosition = function calPosition(popover, anchor, isActionSheet) {
        if (!popover || !anchor) {
            return;
        }

        if (isActionSheet) {
            //actionsheet
            setStyle(popover, 'block');
            return;
        }

        var wWidth = window.innerWidth;
        var wHeight = window.innerHeight;

        var pWidth = popover.offsetWidth;
        var pHeight = popover.offsetHeight;

        var aWidth = anchor.offsetWidth;
        var aHeight = anchor.offsetHeight;
        var offset = $.offset(anchor);

        var arrow = popover.querySelector('.' + CLASS_POPOVER_ARROW);
        if (!arrow) {
            arrow = document.createElement('div');
            arrow.className = CLASS_POPOVER_ARROW;
            popover.appendChild(arrow);
        }
        var arrowSize = arrow && arrow.offsetWidth / 2 || 0;

        var pTop = 0;
        var pLeft = 0;
        var diff = 0;
        var arrowLeft = 0;
        var defaultPadding = popover.classList.contains(CLASS_ACTION_POPOVER) ? 0 : 5;

        var position = 'top';
        if (pHeight + arrowSize < offset.top - window.pageYOffset) {
            //top
            pTop = offset.top - pHeight - arrowSize;
        } else if (pHeight + arrowSize < wHeight - (offset.top - window.pageYOffset) - aHeight) {
            //bottom
            position = 'bottom';
            pTop = offset.top + aHeight + arrowSize;
        } else {
            //middle
            position = 'middle';
            pTop = Math.max((wHeight - pHeight) / 2 + window.pageYOffset, 0);
            pLeft = Math.max((wWidth - pWidth) / 2 + window.pageXOffset, 0);
        }
        if (position === 'top' || position === 'bottom') {
            pLeft = aWidth / 2 + offset.left - pWidth / 2;
            diff = pLeft;
            if (pLeft < defaultPadding) pLeft = defaultPadding;
            if (pLeft + pWidth > wWidth) pLeft = wWidth - pWidth - defaultPadding;

            if (arrow) {
                if (position === 'top') {
                    arrow.classList.add(CLASS_BOTTOM);
                } else {
                    arrow.classList.remove(CLASS_BOTTOM);
                }
                diff = diff - pLeft;
                arrowLeft = pWidth / 2 - arrowSize / 2 + diff;
                arrowLeft = Math.max(Math.min(arrowLeft, pWidth - arrowSize * 2 - 6), 6);
                arrow.setAttribute('style', 'left:' + arrowLeft + 'px');
            }
        } else if (position === 'middle') {
            arrow.setAttribute('style', 'display:none');
        }
        setStyle(popover, 'block', pTop, pLeft);
    };

    $.createMask = function (callback) {
        var element = document.createElement('div');
        element.classList.add(CLASS_BACKDROP);
        element.addEventListener($.EVENT_MOVE, $.preventDefault);
        element.addEventListener('tap', function () {
            mask.close();
        });
        var mask = [element];
        mask._show = false;
        mask.show = function () {
            mask._show = true;
            element.setAttribute('style', 'opacity:1');
            document.body.appendChild(element);
            return mask;
        };
        mask._remove = function () {
            if (mask._show) {
                mask._show = false;
                element.setAttribute('style', 'opacity:0');
                $.later(function () {
                    var body = document.body;
                    element.parentNode === body && body.removeChild(element);
                }, 350);
            }
            return mask;
        };
        mask.close = function () {
            if (callback) {
                if (callback() !== false) {
                    mask._remove();
                }
            } else {
                mask._remove();
            }
        };
        return mask;
    };
    $.fn.popover = function () {
        var args = arguments;
        this.each(function () {
            $.targets._popover = this;
            if (args[0] === 'show' || args[0] === 'hide' || args[0] === 'toggle') {
                togglePopover(this, args[1], args[0]);
            }
        });
    };
})(mui, window, document, 'popover');
/**
 * segmented-controllers
 * @param {type} $
 * @param {type} window
 * @param {type} document
 * @param {type} undefined
 * @returns {undefined}
 */
(function ($, window, document, name, undefined) {

    var CLASS_CONTROL_ITEM = 'mui-control-item';
    var CLASS_SEGMENTED_CONTROL = 'mui-segmented-control';
    var CLASS_SEGMENTED_CONTROL_VERTICAL = 'mui-segmented-control-vertical';
    var CLASS_CONTROL_CONTENT = 'mui-control-content';
    var CLASS_TAB_BAR = 'mui-bar-tab';
    var CLASS_TAB_ITEM = 'mui-tab-item';
    var CLASS_SLIDER_ITEM = 'mui-slider-item';

    var handle = function handle(event, target) {
        if (target.classList && (target.classList.contains(CLASS_CONTROL_ITEM) || target.classList.contains(CLASS_TAB_ITEM))) {
            if (target.parentNode && target.parentNode.classList && target.parentNode.classList.contains(CLASS_SEGMENTED_CONTROL_VERTICAL)) {
                //vertical 如果preventDefault会导致无法滚动
            } else {
                event.preventDefault(); //stop hash change				
            }
            //			if (target.hash) {
            return target;
            //			}
        }
        return false;
    };

    $.registerTarget({
        name: name,
        index: 80,
        handle: handle,
        target: false
    });

    window.addEventListener('tap', function (e) {

        var targetTab = $.targets.tab;
        if (!targetTab) {
            return;
        }
        var activeTab;
        var activeBodies;
        var targetBody;
        var className = 'mui-active';
        var classSelector = '.' + className;
        var segmentedControl = targetTab.parentNode;

        for (; segmentedControl && segmentedControl !== document; segmentedControl = segmentedControl.parentNode) {
            if (segmentedControl.classList.contains(CLASS_SEGMENTED_CONTROL)) {
                activeTab = segmentedControl.querySelector(classSelector + '.' + CLASS_CONTROL_ITEM);
                break;
            } else if (segmentedControl.classList.contains(CLASS_TAB_BAR)) {
                activeTab = segmentedControl.querySelector(classSelector + '.' + CLASS_TAB_ITEM);
            }
        }

        if (activeTab) {
            activeTab.classList.remove(className);
        }

        var isLastActive = targetTab === activeTab;
        if (targetTab) {
            targetTab.classList.add(className);
        }

        if (!targetTab.hash) {
            return;
        }
        targetBody = document.getElementById(targetTab.hash.replace('#', ''));

        if (!targetBody) {
            return;
        }
        if (!targetBody.classList.contains(CLASS_CONTROL_CONTENT)) {
            //tab bar popover
            targetTab.classList[isLastActive ? 'remove' : 'add'](className);
            return;
        }
        if (isLastActive) {
            //same
            return;
        }
        var parentNode = targetBody.parentNode;
        activeBodies = parentNode.querySelectorAll('.' + CLASS_CONTROL_CONTENT + classSelector);
        for (var i = 0; i < activeBodies.length; i++) {
            var activeBody = activeBodies[i];
            activeBody.parentNode === parentNode && activeBody.classList.remove(className);
        }

        targetBody.classList.add(className);

        var contents = [];
        var _contents = parentNode.querySelectorAll('.' + CLASS_CONTROL_CONTENT);
        for (var i = 0; i < _contents.length; i++) {
            //查找直属子节点
            _contents[i].parentNode === parentNode && contents.push(_contents[i]);
        }
        $.trigger(targetBody, $.eventName('shown', name), {
            tabNumber: Array.prototype.indexOf.call(contents, targetBody)
        });
        e.detail && e.detail.gesture.preventDefault(); //fixed hashchange
    });
})(mui, window, document, 'tab');
/**
 * Toggles switch
 * @param {type} $
 * @param {type} window
 * @param {type} name
 * @returns {undefined}
 */
(function ($, window, name) {

    var CLASS_SWITCH = 'mui-switch';
    var CLASS_SWITCH_HANDLE = 'mui-switch-handle';
    var CLASS_ACTIVE = 'mui-active';
    var CLASS_DRAGGING = 'mui-dragging';

    var CLASS_DISABLED = 'mui-disabled';

    var SELECTOR_SWITCH_HANDLE = '.' + CLASS_SWITCH_HANDLE;

    var handle = function handle(event, target) {
        if (target.classList && target.classList.contains(CLASS_SWITCH)) {
            return target;
        }
        return false;
    };

    $.registerTarget({
        name: name,
        index: 100,
        handle: handle,
        target: false
    });

    var Toggle = function Toggle(element) {
        this.element = element;
        this.classList = this.element.classList;
        this.handle = this.element.querySelector(SELECTOR_SWITCH_HANDLE);
        this.init();
        this.initEvent();
    };
    Toggle.prototype.init = function () {
        this.toggleWidth = this.element.offsetWidth;
        this.handleWidth = this.handle.offsetWidth;
        this.handleX = this.toggleWidth - this.handleWidth - 3;
    };
    Toggle.prototype.initEvent = function () {
        this.element.addEventListener($.EVENT_START, this);
        this.element.addEventListener('drag', this);
        this.element.addEventListener('swiperight', this);
        this.element.addEventListener($.EVENT_END, this);
        this.element.addEventListener($.EVENT_CANCEL, this);
    };
    Toggle.prototype.handleEvent = function (e) {
        if (this.classList.contains(CLASS_DISABLED)) {
            return;
        }
        switch (e.type) {
            case $.EVENT_START:
                this.start(e);
                break;
            case 'drag':
                this.drag(e);
                break;
            case 'swiperight':
                this.swiperight();
                break;
            case $.EVENT_END:
            case $.EVENT_CANCEL:
                this.end(e);
                break;
        }
    };
    Toggle.prototype.start = function (e) {
        this.handle.style.webkitTransitionDuration = this.element.style.webkitTransitionDuration = '.2s';
        this.classList.add(CLASS_DRAGGING);
        if (this.toggleWidth === 0 || this.handleWidth === 0) {
            //当switch处于隐藏状态时，width为0，需要重新初始化
            this.init();
        }
    };
    Toggle.prototype.drag = function (e) {
        var detail = e.detail;
        if (!this.isDragging) {
            if (detail.direction === 'left' || detail.direction === 'right') {
                this.isDragging = true;
                this.lastChanged = undefined;
                this.initialState = this.classList.contains(CLASS_ACTIVE);
            }
        }
        if (this.isDragging) {
            this.setTranslateX(detail.deltaX);
            e.stopPropagation();
            detail.gesture.preventDefault();
        }
    };
    Toggle.prototype.swiperight = function (e) {
        if (this.isDragging) {
            e.stopPropagation();
        }
    };
    Toggle.prototype.end = function (e) {
        this.classList.remove(CLASS_DRAGGING);
        if (this.isDragging) {
            this.isDragging = false;
            e.stopPropagation();
            $.trigger(this.element, 'toggle', {
                isActive: this.classList.contains(CLASS_ACTIVE)
            });
        } else {
            this.toggle();
        }
    };
    Toggle.prototype.toggle = function (animate) {
        var classList = this.classList;
        if (animate === false) {
            this.handle.style.webkitTransitionDuration = this.element.style.webkitTransitionDuration = '0s';
        } else {
            this.handle.style.webkitTransitionDuration = this.element.style.webkitTransitionDuration = '.2s';
        }
        if (classList.contains(CLASS_ACTIVE)) {
            classList.remove(CLASS_ACTIVE);
            this.handle.style.webkitTransform = 'translate(0,0)';
        } else {
            classList.add(CLASS_ACTIVE);
            this.handle.style.webkitTransform = 'translate(' + this.handleX + 'px,0)';
        }
        $.trigger(this.element, 'toggle', {
            isActive: this.classList.contains(CLASS_ACTIVE)
        });
    };
    Toggle.prototype.setTranslateX = $.animationFrame(function (x) {
        if (!this.isDragging) {
            return;
        }
        var isChanged = false;
        if (this.initialState && -x > this.handleX / 2 || !this.initialState && x > this.handleX / 2) {
            isChanged = true;
        }
        if (this.lastChanged !== isChanged) {
            if (isChanged) {
                this.handle.style.webkitTransform = 'translate(' + (this.initialState ? 0 : this.handleX) + 'px,0)';
                this.classList[this.initialState ? 'remove' : 'add'](CLASS_ACTIVE);
            } else {
                this.handle.style.webkitTransform = 'translate(' + (this.initialState ? this.handleX : 0) + 'px,0)';
                this.classList[this.initialState ? 'add' : 'remove'](CLASS_ACTIVE);
            }
            this.lastChanged = isChanged;
        }
    });

    $.fn['switch'] = function (options) {
        var switchApis = [];
        this.each(function () {
            var switchApi = null;
            var id = this.getAttribute('data-switch');
            if (!id) {
                id = ++$.uuid;
                $.data[id] = new Toggle(this);
                this.setAttribute('data-switch', id);
            } else {
                switchApi = $.data[id];
            }
            switchApis.push(switchApi);
        });
        return switchApis.length > 1 ? switchApis : switchApis[0];
    };
    $.ready(function () {
        $('.' + CLASS_SWITCH)['switch']();
    });
})(mui, window, 'toggle');
/**
 * Tableviews
 * @param {type} $
 * @param {type} window
 * @param {type} document
 * @returns {undefined}
 */
(function ($, window, document) {

    var CLASS_ACTIVE = 'mui-active';
    var CLASS_SELECTED = 'mui-selected';
    var CLASS_GRID_VIEW = 'mui-grid-view';
    var CLASS_RADIO_VIEW = 'mui-table-view-radio';
    var CLASS_TABLE_VIEW_CELL = 'mui-table-view-cell';
    var CLASS_COLLAPSE_CONTENT = 'mui-collapse-content';
    var CLASS_DISABLED = 'mui-disabled';
    var CLASS_TOGGLE = 'mui-switch';
    var CLASS_BTN = 'mui-btn';

    var CLASS_SLIDER_HANDLE = 'mui-slider-handle';
    var CLASS_SLIDER_LEFT = 'mui-slider-left';
    var CLASS_SLIDER_RIGHT = 'mui-slider-right';
    var CLASS_TRANSITIONING = 'mui-transitioning';

    var SELECTOR_SLIDER_HANDLE = '.' + CLASS_SLIDER_HANDLE;
    var SELECTOR_SLIDER_LEFT = '.' + CLASS_SLIDER_LEFT;
    var SELECTOR_SLIDER_RIGHT = '.' + CLASS_SLIDER_RIGHT;
    var SELECTOR_SELECTED = '.' + CLASS_SELECTED;
    var SELECTOR_BUTTON = '.' + CLASS_BTN;
    var overFactor = 0.8;
    var cell, a;

    var isMoved = isOpened = openedActions = progress = false;
    var sliderHandle = sliderActionLeft = sliderActionRight = buttonsLeft = buttonsRight = sliderDirection = sliderRequestAnimationFrame = false;
    var timer = translateX = lastTranslateX = sliderActionLeftWidth = sliderActionRightWidth = 0;

    var toggleActive = function toggleActive(isActive) {
        if (isActive) {
            if (a) {
                a.classList.add(CLASS_ACTIVE);
            } else if (cell) {
                cell.classList.add(CLASS_ACTIVE);
            }
        } else {
            timer && timer.cancel();
            if (a) {
                a.classList.remove(CLASS_ACTIVE);
            } else if (cell) {
                cell.classList.remove(CLASS_ACTIVE);
            }
        }
    };

    var updateTranslate = function updateTranslate() {
        if (translateX !== lastTranslateX) {
            if (buttonsRight && buttonsRight.length > 0) {
                progress = translateX / sliderActionRightWidth;
                if (translateX < -sliderActionRightWidth) {
                    translateX = -sliderActionRightWidth - Math.pow(-translateX - sliderActionRightWidth, overFactor);
                }
                for (var i = 0, len = buttonsRight.length; i < len; i++) {
                    var buttonRight = buttonsRight[i];
                    if (typeof buttonRight._buttonOffset === 'undefined') {
                        buttonRight._buttonOffset = buttonRight.offsetLeft;
                    }
                    buttonOffset = buttonRight._buttonOffset;
                    setTranslate(buttonRight, translateX - buttonOffset * (1 + Math.max(progress, -1)));
                }
            }
            if (buttonsLeft && buttonsLeft.length > 0) {
                progress = translateX / sliderActionLeftWidth;
                if (translateX > sliderActionLeftWidth) {
                    translateX = sliderActionLeftWidth + Math.pow(translateX - sliderActionLeftWidth, overFactor);
                }
                for (var i = 0, len = buttonsLeft.length; i < len; i++) {
                    var buttonLeft = buttonsLeft[i];
                    if (typeof buttonLeft._buttonOffset === 'undefined') {
                        buttonLeft._buttonOffset = sliderActionLeftWidth - buttonLeft.offsetLeft - buttonLeft.offsetWidth;
                    }
                    buttonOffset = buttonLeft._buttonOffset;
                    if (buttonsLeft.length > 1) {
                        buttonLeft.style.zIndex = buttonsLeft.length - i;
                    }
                    setTranslate(buttonLeft, translateX + buttonOffset * (1 - Math.min(progress, 1)));
                }
            }
            setTranslate(sliderHandle, translateX);
            lastTranslateX = translateX;
        }
        sliderRequestAnimationFrame = requestAnimationFrame(function () {
            updateTranslate();
        });
    };
    var setTranslate = function setTranslate(element, x) {
        if (element) {
            element.style.webkitTransform = 'translate(' + x + 'px,0)';
        }
    };

    window.addEventListener($.EVENT_START, function (event) {
        if (cell) {
            toggleActive(false);
        }
        cell = a = false;
        isMoved = isOpened = openedActions = false;
        var target = event.target;
        var isDisabled = false;
        for (; target && target !== document; target = target.parentNode) {
            if (target.classList) {
                var classList = target.classList;
                if (target.tagName === 'INPUT' && target.type !== 'radio' && target.type !== 'checkbox' || target.tagName === 'BUTTON' || classList.contains(CLASS_TOGGLE) || classList.contains(CLASS_BTN) || classList.contains(CLASS_DISABLED)) {
                    isDisabled = true;
                }
                if (classList.contains(CLASS_COLLAPSE_CONTENT)) {
                    //collapse content
                    break;
                }
                if (classList.contains(CLASS_TABLE_VIEW_CELL)) {
                    cell = target;
                    //TODO swipe to delete close
                    var selected = cell.parentNode.querySelector(SELECTOR_SELECTED);
                    if (!cell.parentNode.classList.contains(CLASS_RADIO_VIEW) && selected && selected !== cell) {
                        $.swipeoutClose(selected);
                        cell = isDisabled = false;
                        return;
                    }
                    if (!cell.parentNode.classList.contains(CLASS_GRID_VIEW)) {
                        var link = cell.querySelector('a');
                        if (link && link.parentNode === cell) {
                            //li>a
                            a = link;
                        }
                    }
                    var handle = cell.querySelector(SELECTOR_SLIDER_HANDLE);
                    if (handle) {
                        toggleEvents(cell);
                        event.stopPropagation();
                    }
                    if (!isDisabled) {
                        if (handle) {
                            if (timer) {
                                timer.cancel();
                            }
                            timer = $.later(function () {
                                toggleActive(true);
                            }, 100);
                        } else {
                            toggleActive(true);
                        }
                    }
                    break;
                }
            }
        }
    });
    window.addEventListener($.EVENT_MOVE, function (event) {
        toggleActive(false);
    });

    var handleEvent = {
        handleEvent: function handleEvent(event) {
            switch (event.type) {
                case 'drag':
                    this.drag(event);
                    break;
                case 'dragend':
                    this.dragend(event);
                    break;
                case 'flick':
                    this.flick(event);
                    break;
                case 'swiperight':
                    this.swiperight(event);
                    break;
                case 'swipeleft':
                    this.swipeleft(event);
                    break;
            }
        },
        drag: function drag(event) {
            if (!cell) {
                return;
            }
            if (!isMoved) {
                //init
                sliderHandle = sliderActionLeft = sliderActionRight = buttonsLeft = buttonsRight = sliderDirection = sliderRequestAnimationFrame = false;
                sliderHandle = cell.querySelector(SELECTOR_SLIDER_HANDLE);
                if (sliderHandle) {
                    sliderActionLeft = cell.querySelector(SELECTOR_SLIDER_LEFT);
                    sliderActionRight = cell.querySelector(SELECTOR_SLIDER_RIGHT);
                    if (sliderActionLeft) {
                        sliderActionLeftWidth = sliderActionLeft.offsetWidth;
                        buttonsLeft = sliderActionLeft.querySelectorAll(SELECTOR_BUTTON);
                    }
                    if (sliderActionRight) {
                        sliderActionRightWidth = sliderActionRight.offsetWidth;
                        buttonsRight = sliderActionRight.querySelectorAll(SELECTOR_BUTTON);
                    }
                    cell.classList.remove(CLASS_TRANSITIONING);
                    isOpened = cell.classList.contains(CLASS_SELECTED);
                    if (isOpened) {
                        openedActions = cell.querySelector(SELECTOR_SLIDER_LEFT + SELECTOR_SELECTED) ? 'left' : 'right';
                    }
                }
            }
            var detail = event.detail;
            var direction = detail.direction;
            var angle = detail.angle;
            if (direction === 'left' && (angle > 150 || angle < -150)) {
                if (buttonsRight || buttonsLeft && isOpened) {
                    //存在右侧按钮或存在左侧按钮且是已打开状态
                    isMoved = true;
                }
            } else if (direction === 'right' && angle > -30 && angle < 30) {
                if (buttonsLeft || buttonsRight && isOpened) {
                    //存在左侧按钮或存在右侧按钮且是已打开状态
                    isMoved = true;
                }
            }
            if (isMoved) {
                event.stopPropagation();
                event.detail.gesture.preventDefault();
                var translate = event.detail.deltaX;
                if (isOpened) {
                    if (openedActions === 'right') {
                        translate = translate - sliderActionRightWidth;
                    } else {
                        translate = translate + sliderActionLeftWidth;
                    }
                }
                if (translate > 0 && !buttonsLeft || translate < 0 && !buttonsRight) {
                    if (!isOpened) {
                        return;
                    }
                    translate = 0;
                }
                if (translate < 0) {
                    sliderDirection = 'toLeft';
                } else if (translate > 0) {
                    sliderDirection = 'toRight';
                } else {
                    if (!sliderDirection) {
                        sliderDirection = 'toLeft';
                    }
                }
                if (!sliderRequestAnimationFrame) {
                    updateTranslate();
                }
                translateX = translate;
            }
        },
        flick: function flick(event) {
            if (isMoved) {
                event.stopPropagation();
            }
        },
        swipeleft: function swipeleft(event) {
            if (isMoved) {
                event.stopPropagation();
            }
        },
        swiperight: function swiperight(event) {
            if (isMoved) {
                event.stopPropagation();
            }
        },
        dragend: function dragend(event) {
            if (!isMoved) {
                return;
            }
            event.stopPropagation();
            if (sliderRequestAnimationFrame) {
                cancelAnimationFrame(sliderRequestAnimationFrame);
                sliderRequestAnimationFrame = null;
            }
            var detail = event.detail;
            isMoved = false;
            var action = 'close';
            var actionsWidth = sliderDirection === 'toLeft' ? sliderActionRightWidth : sliderActionLeftWidth;
            var isToggle = detail.swipe || Math.abs(translateX) > actionsWidth / 2;
            if (isToggle) {
                if (!isOpened) {
                    action = 'open';
                } else if (detail.direction === 'left' && openedActions === 'right') {
                    action = 'open';
                } else if (detail.direction === 'right' && openedActions === 'left') {
                    action = 'open';
                }
            }
            cell.classList.add(CLASS_TRANSITIONING);
            var buttons;
            if (action === 'open') {
                var newTranslate = sliderDirection === 'toLeft' ? -actionsWidth : actionsWidth;
                setTranslate(sliderHandle, newTranslate);
                buttons = sliderDirection === 'toLeft' ? buttonsRight : buttonsLeft;
                if (typeof buttons !== 'undefined') {
                    var button = null;
                    for (var i = 0; i < buttons.length; i++) {
                        button = buttons[i];
                        setTranslate(button, newTranslate);
                    }
                    button.parentNode.classList.add(CLASS_SELECTED);
                    cell.classList.add(CLASS_SELECTED);
                    if (!isOpened) {
                        $.trigger(cell, sliderDirection === 'toLeft' ? 'slideleft' : 'slideright');
                    }
                }
            } else {
                setTranslate(sliderHandle, 0);
                sliderActionLeft && sliderActionLeft.classList.remove(CLASS_SELECTED);
                sliderActionRight && sliderActionRight.classList.remove(CLASS_SELECTED);
                cell.classList.remove(CLASS_SELECTED);
            }
            var buttonOffset;
            if (buttonsLeft && buttonsLeft.length > 0 && buttonsLeft !== buttons) {
                for (var i = 0, len = buttonsLeft.length; i < len; i++) {
                    var buttonLeft = buttonsLeft[i];
                    buttonOffset = buttonLeft._buttonOffset;
                    if (typeof buttonOffset === 'undefined') {
                        buttonLeft._buttonOffset = sliderActionLeftWidth - buttonLeft.offsetLeft - buttonLeft.offsetWidth;
                    }
                    setTranslate(buttonLeft, buttonOffset);
                }
            }
            if (buttonsRight && buttonsRight.length > 0 && buttonsRight !== buttons) {
                for (var i = 0, len = buttonsRight.length; i < len; i++) {
                    var buttonRight = buttonsRight[i];
                    buttonOffset = buttonRight._buttonOffset;
                    if (typeof buttonOffset === 'undefined') {
                        buttonRight._buttonOffset = buttonRight.offsetLeft;
                    }
                    setTranslate(buttonRight, -buttonOffset);
                }
            }
        }
    };

    function toggleEvents(element, isRemove) {
        var method = !!isRemove ? 'removeEventListener' : 'addEventListener';
        element[method]('drag', handleEvent);
        element[method]('dragend', handleEvent);
        element[method]('swiperight', handleEvent);
        element[method]('swipeleft', handleEvent);
        element[method]('flick', handleEvent);
    };
    /**
     * 打开滑动菜单
     * @param {Object} el
     * @param {Object} direction
     */
    $.swipeoutOpen = function (el, direction) {
        if (!el) return;
        var classList = el.classList;
        if (classList.contains(CLASS_SELECTED)) return;
        if (!direction) {
            if (el.querySelector(SELECTOR_SLIDER_RIGHT)) {
                direction = 'right';
            } else {
                direction = 'left';
            }
        }
        var swipeoutAction = el.querySelector($.classSelector(".slider-" + direction));
        if (!swipeoutAction) return;
        swipeoutAction.classList.add(CLASS_SELECTED);
        classList.add(CLASS_SELECTED);
        classList.remove(CLASS_TRANSITIONING);
        var buttons = swipeoutAction.querySelectorAll(SELECTOR_BUTTON);
        var swipeoutWidth = swipeoutAction.offsetWidth;
        var translate = direction === 'right' ? -swipeoutWidth : swipeoutWidth;
        var length = buttons.length;
        var button;
        for (var i = 0; i < length; i++) {
            button = buttons[i];
            if (direction === 'right') {
                setTranslate(button, -button.offsetLeft);
            } else {
                setTranslate(button, swipeoutWidth - button.offsetWidth - button.offsetLeft);
            }
        }
        classList.add(CLASS_TRANSITIONING);
        for (var i = 0; i < length; i++) {
            setTranslate(buttons[i], translate);
        }
        setTranslate(el.querySelector(SELECTOR_SLIDER_HANDLE), translate);
    };
    /**
     * 关闭滑动菜单
     * @param {Object} el
     */
    $.swipeoutClose = function (el) {
        if (!el) return;
        var classList = el.classList;
        if (!classList.contains(CLASS_SELECTED)) return;
        var direction = el.querySelector(SELECTOR_SLIDER_RIGHT + SELECTOR_SELECTED) ? 'right' : 'left';
        var swipeoutAction = el.querySelector($.classSelector(".slider-" + direction));
        if (!swipeoutAction) return;
        swipeoutAction.classList.remove(CLASS_SELECTED);
        classList.remove(CLASS_SELECTED);
        classList.add(CLASS_TRANSITIONING);
        var buttons = swipeoutAction.querySelectorAll(SELECTOR_BUTTON);
        var swipeoutWidth = swipeoutAction.offsetWidth;
        var length = buttons.length;
        var button;
        setTranslate(el.querySelector(SELECTOR_SLIDER_HANDLE), 0);
        for (var i = 0; i < length; i++) {
            button = buttons[i];
            if (direction === 'right') {
                setTranslate(button, -button.offsetLeft);
            } else {
                setTranslate(button, swipeoutWidth - button.offsetWidth - button.offsetLeft);
            }
        }
    };

    window.addEventListener($.EVENT_END, function (event) {
        //使用touchend来取消高亮，避免一次点击既不触发tap，doubletap，longtap的事件
        if (!cell) {
            return;
        }
        toggleActive(false);
        sliderHandle && toggleEvents(cell, true);
    });
    window.addEventListener($.EVENT_CANCEL, function (event) {
        //使用touchcancel来取消高亮，避免一次点击既不触发tap，doubletap，longtap的事件
        if (!cell) {
            return;
        }
        toggleActive(false);
        sliderHandle && toggleEvents(cell, true);
    });
    var radioOrCheckboxClick = function radioOrCheckboxClick(event) {
        var type = event.target && event.target.type || '';
        if (type === 'radio' || type === 'checkbox') {
            return;
        }
        var classList = cell.classList;
        if (classList.contains('mui-radio')) {
            var input = cell.querySelector('input[type=radio]');
            if (input) {
                //				input.click();
                if (!input.disabled && !input.readOnly) {
                    input.checked = !input.checked;
                    $.trigger(input, 'change');
                }
            }
        } else if (classList.contains('mui-checkbox')) {
            var input = cell.querySelector('input[type=checkbox]');
            if (input) {
                //				input.click();
                if (!input.disabled && !input.readOnly) {
                    input.checked = !input.checked;
                    $.trigger(input, 'change');
                }
            }
        }
    };
    //fixed hashchange(android)
    window.addEventListener($.EVENT_CLICK, function (e) {
        if (cell && cell.classList.contains('mui-collapse')) {
            e.preventDefault();
        }
    });
    window.addEventListener('doubletap', function (event) {
        if (cell) {
            radioOrCheckboxClick(event);
        }
    });
    var preventDefaultException = /^(INPUT|TEXTAREA|BUTTON|SELECT)$/;
    window.addEventListener('tap', function (event) {
        if (!cell) {
            return;
        }
        var isExpand = false;
        var classList = cell.classList;
        var ul = cell.parentNode;
        if (ul && ul.classList.contains(CLASS_RADIO_VIEW)) {
            if (classList.contains(CLASS_SELECTED)) {
                return;
            }
            var selected = ul.querySelector('li' + SELECTOR_SELECTED);
            if (selected) {
                selected.classList.remove(CLASS_SELECTED);
            }
            classList.add(CLASS_SELECTED);
            $.trigger(cell, 'selected', {
                el: cell
            });
            return;
        }
        if (classList.contains('mui-collapse') && !cell.parentNode.classList.contains('mui-unfold')) {
            if (!preventDefaultException.test(event.target.tagName)) {
                event.detail.gesture.preventDefault();
            }

            if (!classList.contains(CLASS_ACTIVE)) {
                //展开时,需要收缩其他同类
                var collapse = cell.parentNode.querySelector('.mui-collapse.mui-active');
                if (collapse) {
                    collapse.classList.remove(CLASS_ACTIVE);
                }
                isExpand = true;
            }
            classList.toggle(CLASS_ACTIVE);
            if (isExpand) {
                //触发展开事件
                $.trigger(cell, 'expand');

                //scroll
                //暂不滚动
                // var offsetTop = $.offset(cell).top;
                // var scrollTop = document.body.scrollTop;
                // var height = window.innerHeight;
                // var offsetHeight = cell.offsetHeight;
                // var cellHeight = (offsetTop - scrollTop + offsetHeight);
                // if (offsetHeight > height) {
                // 	$.scrollTo(offsetTop, 300);
                // } else if (cellHeight > height) {
                // 	$.scrollTo(cellHeight - height + scrollTop, 300);
                // }
            }
        } else {
            radioOrCheckboxClick(event);
        }
    });
})(mui, window, document);
(function ($, window) {
    /**
     * 警告消息框
     */
    $.alert = function (message, title, btnValue, callback) {
        if ($.os.plus) {
            if (typeof message === 'undefined') {
                return;
            } else {
                if (typeof title === 'function') {
                    callback = title;
                    title = null;
                    btnValue = '确定';
                } else if (typeof btnValue === 'function') {
                    callback = btnValue;
                    btnValue = null;
                }
                $.plusReady(function () {
                    plus.nativeUI.alert(message, callback, title, btnValue);
                });
            }
        } else {
            //TODO H5版本
            window.alert(message);
        }
    };
})(mui, window);
(function ($, window) {
    /**
     * 确认消息框
     */
    $.confirm = function (message, title, btnArray, callback) {
        if ($.os.plus) {
            if (typeof message === 'undefined') {
                return;
            } else {
                if (typeof title === 'function') {
                    callback = title;
                    title = null;
                    btnArray = null;
                } else if (typeof btnArray === 'function') {
                    callback = btnArray;
                    btnArray = null;
                }
                $.plusReady(function () {
                    plus.nativeUI.confirm(message, callback, title, btnArray);
                });
            }
        } else {
            //H5版本，0为确认，1为取消
            if (window.confirm(message)) {
                callback({
                    index: 0
                });
            } else {
                callback({
                    index: 1
                });
            }
        }
    };
})(mui, window);
(function ($, window) {
    /**
     * 输入对话框
     */
    $.prompt = function (text, defaultText, title, btnArray, callback) {
        if ($.os.plus) {
            if (typeof message === 'undefined') {
                return;
            } else {

                if (typeof defaultText === 'function') {
                    callback = defaultText;
                    defaultText = null;
                    title = null;
                    btnArray = null;
                } else if (typeof title === 'function') {
                    callback = title;
                    title = null;
                    btnArray = null;
                } else if (typeof btnArray === 'function') {
                    callback = btnArray;
                    btnArray = null;
                }
                $.plusReady(function () {
                    plus.nativeUI.prompt(text, callback, title, defaultText, btnArray);
                });
            }
        } else {
            //H5版本(确认index为0，取消index为1)
            var result = window.prompt(text);
            if (result) {
                callback({
                    index: 0,
                    value: result
                });
            } else {
                callback({
                    index: 1,
                    value: ''
                });
            }
        }
    };
})(mui, window);
(function ($, window) {
    var CLASS_ACTIVE = 'mui-active';
    /**
     * 自动消失提示框
     */
    $.toast = function (message) {
        if ($.os.plus) {
            //默认显示在底部；
            $.plusReady(function () {
                plus.nativeUI.toast(message, {
                    verticalAlign: 'bottom'
                });
            });
        } else {
            var toast = document.createElement('div');
            toast.classList.add('mui-toast-container');
            toast.innerHTML = '<div class="' + 'mui-toast-message' + '">' + message + '</div>';
            toast.addEventListener('webkitTransitionEnd', function () {
                if (!toast.classList.contains(CLASS_ACTIVE)) {
                    toast.parentNode.removeChild(toast);
                }
            });
            document.body.appendChild(toast);
            toast.offsetHeight;
            toast.classList.add(CLASS_ACTIVE);
            setTimeout(function () {
                toast.classList.remove(CLASS_ACTIVE);
            }, 2000);
        }
    };
})(mui, window);
/**
 * Popup(alert,confirm,prompt)  
 * @param {Object} $
 * @param {Object} window
 * @param {Object} document
 */
(function ($, window, document) {
    var CLASS_POPUP = 'mui-popup';
    var CLASS_POPUP_BACKDROP = 'mui-popup-backdrop';
    var CLASS_POPUP_IN = 'mui-popup-in';
    var CLASS_POPUP_OUT = 'mui-popup-out';
    var CLASS_POPUP_INNER = 'mui-popup-inner';
    var CLASS_POPUP_TITLE = 'mui-popup-title';
    var CLASS_POPUP_TEXT = 'mui-popup-text';
    var CLASS_POPUP_INPUT = 'mui-popup-input';
    var CLASS_POPUP_BUTTONS = 'mui-popup-buttons';
    var CLASS_POPUP_BUTTON = 'mui-popup-button';
    var CLASS_POPUP_BUTTON_BOLD = 'mui-popup-button-bold';
    var CLASS_POPUP_BACKDROP = 'mui-popup-backdrop';
    var CLASS_ACTIVE = 'mui-active';

    var popupStack = [];
    var backdrop = function () {
        var element = document.createElement('div');
        element.classList.add(CLASS_POPUP_BACKDROP);
        element.addEventListener($.EVENT_MOVE, $.preventDefault);
        element.addEventListener('webkitTransitionEnd', function () {
            if (!this.classList.contains(CLASS_ACTIVE)) {
                element.parentNode && element.parentNode.removeChild(element);
            }
        });
        return element;
    }();

    var createInput = function createInput(placeholder) {
        return '<div class="' + CLASS_POPUP_INPUT + '"><input type="text" autofocus placeholder="' + (placeholder || '') + '"/></div>';
    };
    var createInner = function createInner(message, title, extra) {
        return '<div class="' + CLASS_POPUP_INNER + '"><div class="' + CLASS_POPUP_TITLE + '">' + title + '</div><div class="' + CLASS_POPUP_TEXT + '">' + message.replace(/\r\n/g, "<br/>").replace(/\n/g, "<br/>") + '</div>' + (extra || '') + '</div>';
    };
    var createButtons = function createButtons(btnArray) {
        var length = btnArray.length;
        var btns = [];
        for (var i = 0; i < length; i++) {
            btns.push('<span class="' + CLASS_POPUP_BUTTON + (i === length - 1 ? ' ' + CLASS_POPUP_BUTTON_BOLD : '') + '">' + btnArray[i] + '</span>');
        }
        return '<div class="' + CLASS_POPUP_BUTTONS + '">' + btns.join('') + '</div>';
    };

    var createPopup = function createPopup(html, callback) {
        var popupElement = document.createElement('div');
        popupElement.className = CLASS_POPUP;
        popupElement.innerHTML = html;
        var removePopupElement = function removePopupElement() {
            popupElement.parentNode && popupElement.parentNode.removeChild(popupElement);
            popupElement = null;
        };
        popupElement.addEventListener($.EVENT_MOVE, $.preventDefault);
        popupElement.addEventListener('webkitTransitionEnd', function (e) {
            if (popupElement && e.target === popupElement && popupElement.classList.contains(CLASS_POPUP_OUT)) {
                removePopupElement();
            }
        });
        popupElement.style.display = 'block';
        document.body.appendChild(popupElement);
        popupElement.offsetHeight;
        popupElement.classList.add(CLASS_POPUP_IN);

        if (!backdrop.classList.contains(CLASS_ACTIVE)) {
            backdrop.style.display = 'block';
            document.body.appendChild(backdrop);
            backdrop.offsetHeight;
            backdrop.classList.add(CLASS_ACTIVE);
        }
        var btns = $.qsa('.' + CLASS_POPUP_BUTTON, popupElement);
        var input = popupElement.querySelector('.' + CLASS_POPUP_INPUT + ' input');
        var popup = {
            element: popupElement,
            close: function close(index, animate) {
                if (popupElement) {
                    callback && callback({
                        index: index || 0,
                        value: input && input.value || ''
                    });
                    if (animate !== false) {
                        popupElement.classList.remove(CLASS_POPUP_IN);
                        popupElement.classList.add(CLASS_POPUP_OUT);
                    } else {
                        removePopupElement();
                    }
                    popupStack.pop();
                    //如果还有其他popup，则不remove backdrop
                    if (popupStack.length) {
                        popupStack[popupStack.length - 1]['show'](animate);
                    } else {
                        backdrop.classList.remove(CLASS_ACTIVE);
                    }
                }
            }
        };
        var handleEvent = function handleEvent(e) {
            popup.close(btns.indexOf(e.target));
        };
        $(popupElement).on('tap', '.' + CLASS_POPUP_BUTTON, handleEvent);
        if (popupStack.length) {
            popupStack[popupStack.length - 1]['hide']();
        }
        popupStack.push({
            close: popup.close,
            show: function show(animate) {
                popupElement.style.display = 'block';
                popupElement.offsetHeight;
                popupElement.classList.add(CLASS_POPUP_IN);
            },
            hide: function hide() {
                popupElement.style.display = 'none';
                popupElement.classList.remove(CLASS_POPUP_IN);
            }
        });
        return popup;
    };
    var createAlert = function createAlert(message, title, btnValue, callback, type) {
        if (typeof message === 'undefined') {
            return;
        } else {
            if (typeof title === 'function') {
                callback = title;
                type = btnValue;
                title = null;
                btnValue = null;
            } else if (typeof btnValue === 'function') {
                type = callback;
                callback = btnValue;
                btnValue = null;
            }
        }
        if (!$.os.plus || type === 'div') {
            return createPopup(createInner(message, title || '提示') + createButtons([btnValue || '确定']), callback);
        }
        return plus.nativeUI.alert(message, callback, title || '提示', btnValue || '确定');
    };
    var createConfirm = function createConfirm(message, title, btnArray, callback, type) {
        if (typeof message === 'undefined') {
            return;
        } else {
            if (typeof title === 'function') {
                callback = title;
                type = btnArray;
                title = null;
                btnArray = null;
            } else if (typeof btnArray === 'function') {
                type = callback;
                callback = btnArray;
                btnArray = null;
            }
        }
        if (!$.os.plus || type === 'div') {
            return createPopup(createInner(message, title || '提示') + createButtons(btnArray || ['取消', '确认']), callback);
        }
        return plus.nativeUI.confirm(message, callback, title, btnArray || ['取消', '确认']);
    };
    var createPrompt = function createPrompt(message, placeholder, title, btnArray, callback, type) {
        if (typeof message === 'undefined') {
            return;
        } else {
            if (typeof placeholder === 'function') {
                callback = placeholder;
                type = title;
                placeholder = null;
                title = null;
                btnArray = null;
            } else if (typeof title === 'function') {
                callback = title;
                type = btnArray;
                title = null;
                btnArray = null;
            } else if (typeof btnArray === 'function') {
                type = callback;
                callback = btnArray;
                btnArray = null;
            }
        }
        if (!$.os.plus || type === 'div') {
            return createPopup(createInner(message, title || '提示', createInput(placeholder)) + createButtons(btnArray || ['取消', '确认']), callback);
        }
        return plus.nativeUI.prompt(message, callback, title || '提示', placeholder, btnArray || ['取消', '确认']);
    };
    var closePopup = function closePopup() {
        if (popupStack.length) {
            popupStack[popupStack.length - 1]['close']();
            return true;
        } else {
            return false;
        }
    };
    var closePopups = function closePopups() {
        while (popupStack.length) {
            popupStack[popupStack.length - 1]['close']();
        }
    };

    $.closePopup = closePopup;
    $.closePopups = closePopups;
    $.alert = createAlert;
    $.confirm = createConfirm;
    $.prompt = createPrompt;
})(mui, window, document);
(function ($, document) {
    var CLASS_PROGRESSBAR = 'mui-progressbar';
    var CLASS_PROGRESSBAR_IN = 'mui-progressbar-in';
    var CLASS_PROGRESSBAR_OUT = 'mui-progressbar-out';
    var CLASS_PROGRESSBAR_INFINITE = 'mui-progressbar-infinite';

    var SELECTOR_PROGRESSBAR = '.mui-progressbar';

    var _findProgressbar = function _findProgressbar(container) {
        container = $(container || 'body');
        if (container.length === 0) return;
        container = container[0];
        if (container.classList.contains(CLASS_PROGRESSBAR)) {
            return container;
        }
        var progressbars = container.querySelectorAll(SELECTOR_PROGRESSBAR);
        if (progressbars) {
            for (var i = 0, len = progressbars.length; i < len; i++) {
                var progressbar = progressbars[i];
                if (progressbar.parentNode === container) {
                    return progressbar;
                }
            }
        }
    };
    /**
     * 创建并显示进度条 
     * @param {Object} container  可选，默认body，支持selector,DOM Node,mui wrapper
     * @param {Object} progress 可选，undefined表示循环，数字表示具体进度
     * @param {Object} color 可选，指定颜色样式(目前暂未提供实际样式，可暂时不暴露此参数)
     */
    var showProgressbar = function showProgressbar(container, progress, color) {
        if (typeof container === 'number') {
            color = progress;
            progress = container;
            container = 'body';
        }
        container = $(container || 'body');
        if (container.length === 0) return;
        container = container[0];
        var progressbar;
        if (container.classList.contains(CLASS_PROGRESSBAR)) {
            progressbar = container;
        } else {
            var progressbars = container.querySelectorAll(SELECTOR_PROGRESSBAR + ':not(.' + CLASS_PROGRESSBAR_OUT + ')');
            if (progressbars) {
                for (var i = 0, len = progressbars.length; i < len; i++) {
                    var _progressbar = progressbars[i];
                    if (_progressbar.parentNode === container) {
                        progressbar = _progressbar;
                        break;
                    }
                }
            }
            if (!progressbar) {
                progressbar = document.createElement('span');
                progressbar.className = CLASS_PROGRESSBAR + ' ' + CLASS_PROGRESSBAR_IN + (typeof progress !== 'undefined' ? '' : ' ' + CLASS_PROGRESSBAR_INFINITE) + (color ? ' ' + CLASS_PROGRESSBAR + '-' + color : '');
                if (typeof progress !== 'undefined') {
                    progressbar.innerHTML = '<span></span>';
                }
                container.appendChild(progressbar);
            } else {
                progressbar.classList.add(CLASS_PROGRESSBAR_IN);
            }
        }
        if (progress) setProgressbar(container, progress);
        return progressbar;
    };
    /**
     * 关闭进度条 
     * @param {Object} container 可选，默认body，支持selector,DOM Node,mui wrapper
     */
    var hideProgressbar = function hideProgressbar(container) {
        var progressbar = _findProgressbar(container);
        if (!progressbar) {
            return;
        }
        var classList = progressbar.classList;
        if (!classList.contains(CLASS_PROGRESSBAR_IN) || classList.contains(CLASS_PROGRESSBAR_OUT)) {
            return;
        }
        classList.remove(CLASS_PROGRESSBAR_IN);
        classList.add(CLASS_PROGRESSBAR_OUT);
        progressbar.addEventListener('webkitAnimationEnd', function () {
            progressbar.parentNode && progressbar.parentNode.removeChild(progressbar);
            progressbar = null;
        });
        return;
    };
    /**
     * 设置指定进度条进度 
     * @param {Object} container  可选，默认body，支持selector,DOM Node,mui wrapper
     * @param {Object} progress 可选，默认0 取值范围[0-100]
     * @param {Object} speed 进度条动画时间
     */
    var setProgressbar = function setProgressbar(container, progress, speed) {
        if (typeof container === 'number') {
            speed = progress;
            progress = container;
            container = false;
        }
        var progressbar = _findProgressbar(container);
        if (!progressbar || progressbar.classList.contains(CLASS_PROGRESSBAR_INFINITE)) {
            return;
        }
        if (progress) progress = Math.min(Math.max(progress, 0), 100);
        progressbar.offsetHeight;
        var span = progressbar.querySelector('span');
        if (span) {
            var style = span.style;
            style.webkitTransform = 'translate3d(' + (-100 + progress) + '%,0,0)';
            if (typeof speed !== 'undefined') {
                style.webkitTransitionDuration = speed + 'ms';
            } else {
                style.webkitTransitionDuration = '';
            }
        }
        return progressbar;
    };
    $.fn.progressbar = function (options) {
        var progressbarApis = [];
        options = options || {};
        this.each(function () {
            var self = this;
            var progressbarApi = self.mui_plugin_progressbar;
            if (!progressbarApi) {
                self.mui_plugin_progressbar = progressbarApi = {
                    options: options,
                    setOptions: function setOptions(options) {
                        this.options = options;
                    },
                    show: function show() {
                        return showProgressbar(self, this.options.progress, this.options.color);
                    },
                    setProgress: function setProgress(progress) {
                        return setProgressbar(self, progress);
                    },
                    hide: function hide() {
                        return hideProgressbar(self);
                    }
                };
            } else if (options) {
                progressbarApi.setOptions(options);
            }
            progressbarApis.push(progressbarApi);
        });
        return progressbarApis.length === 1 ? progressbarApis[0] : progressbarApis;
    };
    //	$.setProgressbar = setProgressbar;
    //	$.showProgressbar = showProgressbar;
    //	$.hideProgressbar = hideProgressbar;
})(mui, document);
/**
 * Input(TODO resize)
 * @param {type} $
 * @param {type} window
 * @param {type} document
 * @returns {undefined}
 */
(function ($, window, document) {
    var CLASS_ICON = 'mui-icon';
    var CLASS_ICON_CLEAR = 'mui-icon-clear';
    var CLASS_ICON_SPEECH = 'mui-icon-speech';
    var CLASS_ICON_SEARCH = 'mui-icon-search';
    var CLASS_ICON_PASSWORD = 'mui-icon-eye';
    var CLASS_INPUT_ROW = 'mui-input-row';
    var CLASS_PLACEHOLDER = 'mui-placeholder';
    var CLASS_TOOLTIP = 'mui-tooltip';
    var CLASS_HIDDEN = 'mui-hidden';
    var CLASS_FOCUSIN = 'mui-focusin';
    var SELECTOR_ICON_CLOSE = '.' + CLASS_ICON_CLEAR;
    var SELECTOR_ICON_SPEECH = '.' + CLASS_ICON_SPEECH;
    var SELECTOR_ICON_PASSWORD = '.' + CLASS_ICON_PASSWORD;
    var SELECTOR_PLACEHOLDER = '.' + CLASS_PLACEHOLDER;
    var SELECTOR_TOOLTIP = '.' + CLASS_TOOLTIP;

    var findRow = function findRow(target) {
        for (; target && target !== document; target = target.parentNode) {
            if (target.classList && target.classList.contains(CLASS_INPUT_ROW)) {
                return target;
            }
        }
        return null;
    };
    var Input = function Input(element, options) {
        this.element = element;
        this.options = options || {
            actions: 'clear'
        };
        if (~this.options.actions.indexOf('slider')) {
            //slider
            this.sliderActionClass = CLASS_TOOLTIP + ' ' + CLASS_HIDDEN;
            this.sliderActionSelector = SELECTOR_TOOLTIP;
        } else {
            //clear,speech,search
            if (~this.options.actions.indexOf('clear')) {
                this.clearActionClass = CLASS_ICON + ' ' + CLASS_ICON_CLEAR + ' ' + CLASS_HIDDEN;
                this.clearActionSelector = SELECTOR_ICON_CLOSE;
            }
            if (~this.options.actions.indexOf('speech')) {
                //only for 5+
                this.speechActionClass = CLASS_ICON + ' ' + CLASS_ICON_SPEECH;
                this.speechActionSelector = SELECTOR_ICON_SPEECH;
            }
            if (~this.options.actions.indexOf('search')) {
                this.searchActionClass = CLASS_PLACEHOLDER;
                this.searchActionSelector = SELECTOR_PLACEHOLDER;
            }
            if (~this.options.actions.indexOf('password')) {
                this.passwordActionClass = CLASS_ICON + ' ' + CLASS_ICON_PASSWORD;
                this.passwordActionSelector = SELECTOR_ICON_PASSWORD;
            }
        }
        this.init();
    };
    Input.prototype.init = function () {
        this.initAction();
        this.initElementEvent();
    };
    Input.prototype.initAction = function () {
        var self = this;

        var row = self.element.parentNode;
        if (row) {
            if (self.sliderActionClass) {
                self.sliderAction = self.createAction(row, self.sliderActionClass, self.sliderActionSelector);
            } else {
                if (self.searchActionClass) {
                    self.searchAction = self.createAction(row, self.searchActionClass, self.searchActionSelector);
                    self.searchAction.addEventListener('tap', function (e) {
                        $.focus(self.element);
                        e.stopPropagation();
                    });
                }
                if (self.speechActionClass) {
                    self.speechAction = self.createAction(row, self.speechActionClass, self.speechActionSelector);
                    self.speechAction.addEventListener('click', $.stopPropagation);
                    self.speechAction.addEventListener('tap', function (event) {
                        self.speechActionClick(event);
                    });
                }
                if (self.clearActionClass) {
                    self.clearAction = self.createAction(row, self.clearActionClass, self.clearActionSelector);
                    self.clearAction.addEventListener('tap', function (event) {
                        self.clearActionClick(event);
                    });
                }
                if (self.passwordActionClass) {
                    self.passwordAction = self.createAction(row, self.passwordActionClass, self.passwordActionSelector);
                    self.passwordAction.addEventListener('tap', function (event) {
                        self.passwordActionClick(event);
                    });
                }
            }
        }
    };
    Input.prototype.createAction = function (row, actionClass, actionSelector) {
        var action = row.querySelector(actionSelector);
        if (!action) {
            var action = document.createElement('span');
            action.className = actionClass;
            if (actionClass === this.searchActionClass) {
                action.innerHTML = '<span class="' + CLASS_ICON + ' ' + CLASS_ICON_SEARCH + '"></span><span>' + this.element.getAttribute('placeholder') + '</span>';
                this.element.setAttribute('placeholder', '');
                if (this.element.value.trim()) {
                    row.classList.add('mui-active');
                }
            }
            row.insertBefore(action, this.element.nextSibling);
        }
        return action;
    };
    Input.prototype.initElementEvent = function () {
        var element = this.element;

        if (this.sliderActionClass) {
            var tooltip = this.sliderAction;
            var timer = null;
            var showTip = function showTip() {
                //每次重新计算是因为控件可能被隐藏，初始化时计算是不正确的
                tooltip.classList.remove(CLASS_HIDDEN);
                var offsetLeft = element.offsetLeft;
                var width = element.offsetWidth - 28;
                var tooltipWidth = tooltip.offsetWidth;
                var distince = Math.abs(element.max - element.min);
                var scaleWidth = width / distince * Math.abs(element.value - element.min);
                tooltip.style.left = 14 + offsetLeft + scaleWidth - tooltipWidth / 2 + 'px';
                tooltip.innerText = element.value;
                if (timer) {
                    clearTimeout(timer);
                }
                timer = setTimeout(function () {
                    tooltip.classList.add(CLASS_HIDDEN);
                }, 1000);
            };
            element.addEventListener('input', showTip);
            element.addEventListener('tap', showTip);
            element.addEventListener($.EVENT_MOVE, function (e) {
                e.stopPropagation();
            });
        } else {
            if (this.clearActionClass) {
                var action = this.clearAction;
                if (!action) {
                    return;
                }
                $.each(['keyup', 'change', 'input', 'focus', 'cut', 'paste'], function (index, type) {
                    (function (type) {
                        element.addEventListener(type, function () {
                            action.classList[element.value.trim() ? 'remove' : 'add'](CLASS_HIDDEN);
                        });
                    })(type);
                });
                element.addEventListener('blur', function () {
                    action.classList.add(CLASS_HIDDEN);
                });
            }
            if (this.searchActionClass) {
                element.addEventListener('focus', function () {
                    element.parentNode.classList.add('mui-active');
                });
                element.addEventListener('blur', function () {
                    if (!element.value.trim()) {
                        element.parentNode.classList.remove('mui-active');
                    }
                });
            }
        }
    };
    Input.prototype.setPlaceholder = function (text) {
        if (this.searchActionClass) {
            var placeholder = this.element.parentNode.querySelector(SELECTOR_PLACEHOLDER);
            placeholder && (placeholder.getElementsByTagName('span')[1].innerText = text);
        } else {
            this.element.setAttribute('placeholder', text);
        }
    };
    Input.prototype.passwordActionClick = function (event) {
        if (this.element.type === 'text') {
            this.element.type = 'password';
        } else {
            this.element.type = 'text';
        }
        this.passwordAction.classList.toggle('mui-active');
        event.preventDefault();
    };
    Input.prototype.clearActionClick = function (event) {
        var self = this;
        self.element.value = '';
        $.focus(self.element);
        self.clearAction.classList.add(CLASS_HIDDEN);
        event.preventDefault();
    };
    Input.prototype.speechActionClick = function (event) {
        if (window.plus) {
            var self = this;
            var oldValue = self.element.value;
            self.element.value = '';
            document.body.classList.add(CLASS_FOCUSIN);
            plus.speech.startRecognize({
                engine: 'iFly'
            }, function (s) {
                self.element.value += s;
                $.focus(self.element);
                plus.speech.stopRecognize();
                $.trigger(self.element, 'recognized', {
                    value: self.element.value
                });
                if (oldValue !== self.element.value) {
                    $.trigger(self.element, 'change');
                    $.trigger(self.element, 'input');
                }
                // document.body.classList.remove(CLASS_FOCUSIN);
            }, function (e) {
                document.body.classList.remove(CLASS_FOCUSIN);
            });
        } else {
            alert('only for 5+');
        }
        event.preventDefault();
    };
    $.fn.input = function (options) {
        var inputApis = [];
        this.each(function () {
            var inputApi = null;
            var actions = [];
            var row = findRow(this.parentNode);
            if (this.type === 'range' && row.classList.contains('mui-input-range')) {
                actions.push('slider');
            } else {
                var classList = this.classList;
                if (classList.contains('mui-input-clear')) {
                    actions.push('clear');
                }
                if (!($.os.android && $.os.stream) && classList.contains('mui-input-speech')) {
                    actions.push('speech');
                }
                if (classList.contains('mui-input-password')) {
                    actions.push('password');
                }
                if (this.type === 'search' && row.classList.contains('mui-search')) {
                    actions.push('search');
                }
            }
            var id = this.getAttribute('data-input-' + actions[0]);
            if (!id) {
                id = ++$.uuid;
                inputApi = $.data[id] = new Input(this, {
                    actions: actions.join(',')
                });
                for (var i = 0, len = actions.length; i < len; i++) {
                    this.setAttribute('data-input-' + actions[i], id);
                }
            } else {
                inputApi = $.data[id];
            }
            inputApis.push(inputApi);
        });
        return inputApis.length === 1 ? inputApis[0] : inputApis;
    };
    $.ready(function () {
        $('.mui-input-row input').input();
    });
})(mui, window, document);
(function ($, window) {
    var rgbaRegex = /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/;
    var getColor = function getColor(colorStr) {
        var matches = colorStr.match(rgbaRegex);
        if (matches && matches.length === 5) {
            return [matches[1], matches[2], matches[3], matches[4]];
        }
        return [];
    };
    var Transparent = function Transparent(element, options) {
        this.element = element;
        this.options = $.extend({
            top: 0,
            offset: 150,
            duration: 16
        }, options || {});
        this._style = this.element.style;
        this._bgColor = this._style.backgroundColor;
        var color = getColor(mui.getStyles(this.element, 'backgroundColor'));
        if (color.length) {
            this._R = color[0];
            this._G = color[1];
            this._B = color[2];
            this._A = color[3];
            this._bufferFn = $.buffer(this.handleScroll, this.options.duration, this);
            this.initEvent();
        } else {
            throw new Error("元素背景颜色必须为RGBA");
        }
    };

    Transparent.prototype.initEvent = function () {
        window.addEventListener('scroll', this._bufferFn);
        window.addEventListener($.EVENT_MOVE, this._bufferFn);
    };
    Transparent.prototype.handleScroll = function () {
        this._style.backgroundColor = 'rgba(' + this._R + ',' + this._G + ',' + this._B + ',' + (window.scrollY - this.options.top) / this.options.offset + ')';
    };
    Transparent.prototype.destory = function () {
        window.removeEventListener('scroll', this._bufferFn);
        window.removeEventListener($.EVENT_MOVE, this._bufferFn);
        this.element.style.backgroundColor = this._bgColor;
        this.element.mui_plugin_transparent = null;
    };
    $.fn.transparent = function (options) {
        options = options || {};
        var transparentApis = [];
        this.each(function () {
            var transparentApi = this.mui_plugin_transparent;
            if (!transparentApi) {
                var top = this.getAttribute('data-top');
                var offset = this.getAttribute('data-offset');
                var duration = this.getAttribute('data-duration');
                if (top !== null && typeof options.top === 'undefined') {
                    options.top = top;
                }
                if (offset !== null && typeof options.offset === 'undefined') {
                    options.offset = offset;
                }
                if (duration !== null && typeof options.duration === 'undefined') {
                    options.duration = duration;
                }
                transparentApi = this.mui_plugin_transparent = new Transparent(this, options);
            }
            transparentApis.push(transparentApi);
        });
        return transparentApis.length === 1 ? transparentApis[0] : transparentApis;
    };
    $.ready(function () {
        $('.mui-bar-transparent').transparent();
    });
})(mui, window);
/**
 * 数字输入框
 * varstion 1.0.1
 * by Houfeng
 * Houfeng@DCloud.io
 */

(function ($) {

    var touchSupport = 'ontouchstart' in document;
    var tapEventName = touchSupport ? 'tap' : 'click';
    var changeEventName = 'change';
    var holderClassName = 'mui-numbox';
    var plusClassSelector = '.mui-btn-numbox-plus,.mui-numbox-btn-plus';
    var minusClassSelector = '.mui-btn-numbox-minus,.mui-numbox-btn-minus';
    var inputClassSelector = '.mui-input-numbox,.mui-numbox-input';

    var Numbox = $.Numbox = $.Class.extend({
        /**
         * 构造函数
         **/
        init: function init(holder, options) {
            var self = this;
            if (!holder) {
                throw "构造 numbox 时缺少容器元素";
            }
            self.holder = holder;
            options = options || {};
            options.step = parseInt(options.step || 1);
            self.options = options;
            self.input = $.qsa(inputClassSelector, self.holder)[0];
            self.plus = $.qsa(plusClassSelector, self.holder)[0];
            self.minus = $.qsa(minusClassSelector, self.holder)[0];
            self.checkValue();
            self.initEvent();
        },
        /**
         * 初始化事件绑定
         **/
        initEvent: function initEvent() {
            var self = this;
            self.plus.addEventListener(tapEventName, function (event) {
                var val = parseInt(self.input.value) + self.options.step;
                self.input.value = val.toString();
                $.trigger(self.input, changeEventName, null);
            });
            self.minus.addEventListener(tapEventName, function (event) {
                var val = parseInt(self.input.value) - self.options.step;
                self.input.value = val.toString();
                $.trigger(self.input, changeEventName, null);
            });
            self.input.addEventListener(changeEventName, function (event) {
                self.checkValue();
                var val = parseInt(self.input.value);
                //触发顶层容器
                $.trigger(self.holder, changeEventName, {
                    value: val
                });
            });
        },
        /**
         * 获取当前值
         **/
        getValue: function getValue() {
            var self = this;
            return parseInt(self.input.value);
        },
        /**
         * 验证当前值是法合法
         **/
        checkValue: function checkValue() {
            var self = this;
            var val = self.input.value;
            if (val == null || val == '' || isNaN(val)) {
                self.input.value = self.options.min || 0;
                self.minus.disabled = self.options.min != null;
            } else {
                var val = parseInt(val);
                if (self.options.max != null && !isNaN(self.options.max) && val >= parseInt(self.options.max)) {
                    val = self.options.max;
                    self.plus.disabled = true;
                } else {
                    self.plus.disabled = false;
                }
                if (self.options.min != null && !isNaN(self.options.min) && val <= parseInt(self.options.min)) {
                    val = self.options.min;
                    self.minus.disabled = true;
                } else {
                    self.minus.disabled = false;
                }
                self.input.value = val;
            }
        },
        /**
         * 更新选项
         **/
        setOption: function setOption(name, value) {
            var self = this;
            self.options[name] = value;
        }
    });

    $.fn.numbox = function (options) {
        var instanceArray = [];
        //遍历选择的元素
        this.each(function (i, element) {
            if (element.numbox) {
                return;
            }
            if (options) {
                element.numbox = new Numbox(element, options);
            } else {
                var optionsText = element.getAttribute('data-numbox-options');
                var options = optionsText ? JSON.parse(optionsText) : {};
                options.step = element.getAttribute('data-numbox-step') || options.step;
                options.min = element.getAttribute('data-numbox-min') || options.min;
                options.max = element.getAttribute('data-numbox-max') || options.max;
                element.numbox = new Numbox(element, options);
            }
        });
        return this[0] ? this[0].numbox : null;
    };

    //自动处理 class='mui-locker' 的 dom
    $.ready(function () {
        $('.' + holderClassName).numbox();
    });
})(mui);

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(185)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(116),
  /* template */
  __webpack_require__(233),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 9:
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ })

},[151]);
//# sourceMappingURL=report_score_dota.js.map