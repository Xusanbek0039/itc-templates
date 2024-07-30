function t_onReady(func) {
    if (document.readyState != 'loading') {
        func();
    } else {
        document.addEventListener('DOMContentLoaded', func);
    }
}
function t_onFuncLoad(funcName, okFunc, time) {
    if (typeof window[funcName] === 'function') {
        okFunc();
    } else {
        setTimeout(function() {
            t_onFuncLoad(funcName, okFunc, time);
        }, (time || 100));
    }
}
function t396_initialScale(t) {
    t = document.getElementById("rec" + t);
    if (t) {
        t = t.querySelector(".t396__artboard");
        if (t) {
            var e, r = document.documentElement.clientWidth, a = [];
            if (l = t.getAttribute("data-artboard-screens"))
                for (var l = l.split(","), i = 0; i < l.length; i++)
                    a[i] = parseInt(l[i], 10);
            else
                a = [320, 480, 640, 960, 1200];
            for (i = 0; i < a.length; i++) {
                var o = a[i];
                o <= r && (e = o)
            }
            var n = "edit" === window.allrecords.getAttribute("data-tilda-mode")
              , d = "center" === t396_getFieldValue(t, "valign", e, a)
              , u = "grid" === t396_getFieldValue(t, "upscale", e, a)
              , c = t396_getFieldValue(t, "height_vh", e, a)
              , g = t396_getFieldValue(t, "height", e, a)
              , s = !!window.opr && !!window.opr.addons || !!window.opera || -1 !== navigator.userAgent.indexOf(" OPR/");
            if (!n && d && !u && !c && g && !s) {
                for (var _ = parseFloat((r / e).toFixed(3)), f = [t, t.querySelector(".t396__carrier"), t.querySelector(".t396__filter")], i = 0; i < f.length; i++)
                    f[i].style.height = Math.floor(parseInt(g, 10) * _) + "px";
                t396_scaleInitial__getElementsToScale(t).forEach(function(t) {
                    t.style.zoom = _
                })
            }
        }
    }
}
function t396_scaleInitial__getElementsToScale(t) {
    t = Array.prototype.slice.call(t.querySelectorAll(".t396__elem"));
    if (!t.length)
        return [];
    var e = [];
    return (t = t.filter(function(t) {
        t = t.closest('.t396__group[data-group-type-value="physical"]');
        return !t || (-1 === e.indexOf(t) && e.push(t),
        !1)
    })).concat(e)
}
function t396_getFieldValue(t, e, r, a) {
    var l = a[a.length - 1]
      , i = r === l ? t.getAttribute("data-artboard-" + e) : t.getAttribute("data-artboard-" + e + "-res-" + r);
    if (!i)
        for (var o = 0; o < a.length; o++) {
            var n = a[o];
            if (!(n <= r) && (i = n === l ? t.getAttribute("data-artboard-" + e) : t.getAttribute("data-artboard-" + e + "-res-" + n)))
                break
        }
    return i
}
if (navigator.userAgent.indexOf('Android') !== -1) {
    var l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = 'https://static.tildacdn.com/css/fonts-arial.css';
    l.media = 'all';
    document.getElementsByTagName('head')[0].appendChild(l);
}