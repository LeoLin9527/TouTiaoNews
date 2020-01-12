function t(n, t) {
    var r = (65535 & n) + (65535 & t)
        , e = (n >> 16) + (t >> 16) + (r >> 16);
    return e << 16 | 65535 & r
}

function r(n, t) {
    return n << t | n >>> 32 - t
}

function e(n, e, u, o, c, f) {
    return t(r(t(t(e, n), t(o, f)), c), u)
}

function u(n, t, r, u, o, c, f) {
    return e(t & r | ~t & u, n, t, o, c, f)
}

function o(n, t, r, u, o, c, f) {
    return e(t & u | r & ~u, n, t, o, c, f)
}

function c(n, t, r, u, o, c, f) {
    return e(t ^ r ^ u, n, t, o, c, f)
}

function f(n, t, r, u, o, c, f) {
    return e(r ^ (t | ~u), n, t, o, c, f)
}

function i(n, r) {
    n[r >> 5] |= 128 << r % 32,
        n[(r + 64 >>> 9 << 4) + 14] = r;
    var e, i, a, d, h, l = 1732584193, g = -271733879, m = -1732584194, s = 271733878;
    for (e = 0; e < n.length; e += 16)
        i = l,
            a = g,
            d = m,
            h = s,
            l = u(l, g, m, s, n[e], 7, -680876936),
            s = u(s, l, g, m, n[e + 1], 12, -389564586),
            m = u(m, s, l, g, n[e + 2], 17, 606105819),
            g = u(g, m, s, l, n[e + 3], 22, -1044525330),
            l = u(l, g, m, s, n[e + 4], 7, -176418897),
            s = u(s, l, g, m, n[e + 5], 12, 1200080426),
            m = u(m, s, l, g, n[e + 6], 17, -1473231341),
            g = u(g, m, s, l, n[e + 7], 22, -45705983),
            l = u(l, g, m, s, n[e + 8], 7, 1770035416),
            s = u(s, l, g, m, n[e + 9], 12, -1958414417),
            m = u(m, s, l, g, n[e + 10], 17, -42063),
            g = u(g, m, s, l, n[e + 11], 22, -1990404162),
            l = u(l, g, m, s, n[e + 12], 7, 1804603682),
            s = u(s, l, g, m, n[e + 13], 12, -40341101),
            m = u(m, s, l, g, n[e + 14], 17, -1502002290),
            g = u(g, m, s, l, n[e + 15], 22, 1236535329),
            l = o(l, g, m, s, n[e + 1], 5, -165796510),
            s = o(s, l, g, m, n[e + 6], 9, -1069501632),
            m = o(m, s, l, g, n[e + 11], 14, 643717713),
            g = o(g, m, s, l, n[e], 20, -373897302),
            l = o(l, g, m, s, n[e + 5], 5, -701558691),
            s = o(s, l, g, m, n[e + 10], 9, 38016083),
            m = o(m, s, l, g, n[e + 15], 14, -660478335),
            g = o(g, m, s, l, n[e + 4], 20, -405537848),
            l = o(l, g, m, s, n[e + 9], 5, 568446438),
            s = o(s, l, g, m, n[e + 14], 9, -1019803690),
            m = o(m, s, l, g, n[e + 3], 14, -187363961),
            g = o(g, m, s, l, n[e + 8], 20, 1163531501),
            l = o(l, g, m, s, n[e + 13], 5, -1444681467),
            s = o(s, l, g, m, n[e + 2], 9, -51403784),
            m = o(m, s, l, g, n[e + 7], 14, 1735328473),
            g = o(g, m, s, l, n[e + 12], 20, -1926607734),
            l = c(l, g, m, s, n[e + 5], 4, -378558),
            s = c(s, l, g, m, n[e + 8], 11, -2022574463),
            m = c(m, s, l, g, n[e + 11], 16, 1839030562),
            g = c(g, m, s, l, n[e + 14], 23, -35309556),
            l = c(l, g, m, s, n[e + 1], 4, -1530992060),
            s = c(s, l, g, m, n[e + 4], 11, 1272893353),
            m = c(m, s, l, g, n[e + 7], 16, -155497632),
            g = c(g, m, s, l, n[e + 10], 23, -1094730640),
            l = c(l, g, m, s, n[e + 13], 4, 681279174),
            s = c(s, l, g, m, n[e], 11, -358537222),
            m = c(m, s, l, g, n[e + 3], 16, -722521979),
            g = c(g, m, s, l, n[e + 6], 23, 76029189),
            l = c(l, g, m, s, n[e + 9], 4, -640364487),
            s = c(s, l, g, m, n[e + 12], 11, -421815835),
            m = c(m, s, l, g, n[e + 15], 16, 530742520),
            g = c(g, m, s, l, n[e + 2], 23, -995338651),
            l = f(l, g, m, s, n[e], 6, -198630844),
            s = f(s, l, g, m, n[e + 7], 10, 1126891415),
            m = f(m, s, l, g, n[e + 14], 15, -1416354905),
            g = f(g, m, s, l, n[e + 5], 21, -57434055),
            l = f(l, g, m, s, n[e + 12], 6, 1700485571),
            s = f(s, l, g, m, n[e + 3], 10, -1894986606),
            m = f(m, s, l, g, n[e + 10], 15, -1051523),
            g = f(g, m, s, l, n[e + 1], 21, -2054922799),
            l = f(l, g, m, s, n[e + 8], 6, 1873313359),
            s = f(s, l, g, m, n[e + 15], 10, -30611744),
            m = f(m, s, l, g, n[e + 6], 15, -1560198380),
            g = f(g, m, s, l, n[e + 13], 21, 1309151649),
            l = f(l, g, m, s, n[e + 4], 6, -145523070),
            s = f(s, l, g, m, n[e + 11], 10, -1120210379),
            m = f(m, s, l, g, n[e + 2], 15, 718787259),
            g = f(g, m, s, l, n[e + 9], 21, -343485551),
            l = t(l, i),
            g = t(g, a),
            m = t(m, d),
            s = t(s, h);
    return [l, g, m, s]
}

function a(n) {
    var t, r = "";
    for (t = 0; t < 32 * n.length; t += 8)
        r += String.fromCharCode(n[t >> 5] >>> t % 32 & 255);
    return r
}

function d(n) {
    var t, r = [];
    for (r[(n.length >> 2) - 1] = void 0,
             t = 0; t < r.length; t += 1)
        r[t] = 0;
    for (t = 0; t < 8 * n.length; t += 8)
        r[t >> 5] |= (255 & n.charCodeAt(t / 8)) << t % 32;
    return r
}

function h(n) {
    return a(i(d(n), 8 * n.length))
}

function l(n, t) {
    var r, e, u = d(n), o = [], c = [];
    for (o[15] = c[15] = void 0,
         u.length > 16 && (u = i(u, 8 * n.length)),
             r = 0; 16 > r; r += 1)
        o[r] = 909522486 ^ u[r],
            c[r] = 1549556828 ^ u[r];
    return e = i(o.concat(d(t)), 512 + 8 * t.length),
        a(i(c.concat(e), 640))
}

function g(n) {
    var t, r, e = "0123456789abcdef", u = "";
    for (r = 0; r < n.length; r += 1)
        t = n.charCodeAt(r),
            u += e.charAt(t >>> 4 & 15) + e.charAt(15 & t);
    return u
}

function m(n) {
    return unescape(encodeURIComponent(n))
}

function s(n) {
    return h(m(n))
}

function v(n) {
    return g(s(n))
}

function p(n, t) {
    return l(m(n), m(t))
}

function C(n, t) {
    return g(p(n, t))
}

function md5(n, t, r) {
    return t ? r ? p(t, n) : C(t, n) : r ? s(n) : v(n)
}

function getHoney() {
    var t = Math.floor((new Date).getTime() / 1e3)
        , e = t.toString(16).toUpperCase()
        , i = md5(t).toString().toUpperCase();
    if (8 != e.length)
        return {
            as: "479BB4B7254C150",
            cp: "7E0AC8874BB0985"
        };
    for (var n = i.slice(0, 5), s = i.slice(-5), o = "", a = 0; 5 > a; a++)
        o += n[a] + e[a];
    for (var r = "", l = 0; 5 > l; l++)
        r += e[l + 3] + s[l];

    return {
        as: "A1" + o + e.slice(-3),
        cp: e.slice(0, 3) + r + "E1"
    }
};

///////////////////
module.exports = {
    getHoney
};

console.log(getHoney());

// A1A59E71F8D2C4D
// 5E1832CCE4BD0E1

// A1059E31E8A2C81
// 5E18E21C9891EE1