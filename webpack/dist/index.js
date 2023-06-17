(() => {
  var t = {
      10: (t, r, e) => {
        const o = e(198);
        t.exports = o;
      },
      198: (t, r, e) => {
        const o = e(944);
        t.exports = function t(r) {
          const e = o(r);
          if ("object" !== e && "array" !== e) return r;
          let n;
          if ("object" === e) {
            n = {};
            for (let e in r) r.hasOwnProperty(e) && (n[e] = t(r[e]));
          } else {
            n = [];
            for (let e = 0; e < r.length; e++) n[e] = t(r[e]);
          }
          return n;
        };
      },
      944: (t) => {
        t.exports = function (t) {
          return Object.prototype.toString.call(t).slice(8, -1).toLowerCase();
        };
      },
    },
    r = {};
  !(function e(o) {
    var n = r[o];
    if (void 0 !== n) return n.exports;
    var s = (r[o] = { exports: {} });
    return t[o](s, s.exports, e), s.exports;
  })(10);
})();
