var onf = document.getElementById('onefl'); //获取一楼
var twf = document.getElementById('twofl'); //获取二楼
var thf = document.getElementById('thrfl'); //获取三楼
var fof = document.getElementById('foufl'); //获取四楼
var fif = document.getElementById('fivfl'); //获取五楼
var sif = document.getElementById('sixfl'); //获取六楼
var sef = document.getElementById('sevfl'); //获取七楼
var eif = document.getElementById('eigfl'); //获取八楼
var nif = document.getElementById('ninfl'); //获取九楼
var tef = document.getElementById('tenfl'); //获取十楼
var elf = document.getElementById('elefl'); //获取十一楼
var twef = document.getElementById('twefl'); //获取十二楼
var twefb = document.getElementById('twefb'); //获取十二楼最底部的div
var lbfix = document.getElementById('lbfix'); //获取左侧导航栏
var lbfcs = lbfix.children; //获取左侧导航栏下面的子元素
var floorn = ['服饰', '美妆', '手机', '家电', '数码', '运动', '居家', '母婴', '食品', '图书', '车品', '服务'] //将左侧导航栏的每层楼名存到数组中
var flnums = document.getElementsByClassName('flnum');
//鼠标移入左侧导航栏触发事件
for (var i = 0; i < lbfcs.length; i++) {
    lbfcs[i].onmouseover = function() {
        for (i = 0; i < lbfcs.length; i++) {
            if (lbfcs[i] == this) {
                lbfcs[i].innerHTML = floorn[i];
                lbfcs[i].style.fontSize = '12px';
                lbfcs[i].style.fontFamily = '宋体';
            } else if (lbfcs[i].className == 'lbfseled') {
                lbfcs[i].innerHTML = floorn[i];
            } else {
                lbfcs[i].innerHTML = i + 1 + 'F';
            }
        }
    }
    lbfcs[i].onmouseout = function() {
        for (i = 0; i < lbfcs.length; i++) {
            if (lbfcs[i].className == 'lbfseled') {
                lbfcs[i].innerHTML = floorn[i];
            } else {
                lbfcs[i].innerHTML = i + 1 + 'F';
                lbfcs[i].style.fontSize = '';
                lbfcs[i].style.fontFamily = '';
            }
        }
    }
}

//滚动条移动触发左侧导航栏事件
window.onscroll = window.onload = function() {
        var sct = document.documentElement.scrollTop || document.body.scrollTop; //获取滚动条距顶部的距离
        var sch = document.documentElement.clientHeight || document.body.clientHeight; //获取屏幕高度
        if (sct + sch >= onf.offsetTop && twf.offsetTop - sct > +sch / 2) {
            lbfix.style.display = 'block';
            lbfix.style.top = (sch - lbfix.offsetHeight) / 2 + 'px';
            for (i = 0; i < lbfcs.length; i++) {
                lbfcs[i].innerHTML = i + 1 + 'F';
                lbfcs[i].className = '';
            }
            lbfcs[0].innerHTML = floorn[0];
            lbfcs[0].className = 'lbfseled';
        } else if (twf.offsetTop - sct <= sch / 2 && thf.offsetTop - sct > sch / 2) {
            lbfix.style.display = 'block';
            lbfix.style.top = (sch - lbfix.offsetHeight) / 2 + 'px';
            for (i = 0; i < lbfcs.length; i++) {
                lbfcs[i].innerHTML = i + 1 + 'F';
                lbfcs[i].className = '';

            }
            lbfcs[1].innerHTML = floorn[1];
            lbfcs[1].className = 'lbfseled';
        } else if (thf.offsetTop - sct <= sch / 2 && fof.offsetTop - sct > sch / 2) {
            lbfix.style.display = 'block';
            lbfix.style.top = (sch - lbfix.offsetHeight) / 2 + 'px';
            for (i = 0; i < lbfcs.length; i++) {
                lbfcs[i].innerHTML = i + 1 + 'F';
                lbfcs[i].className = '';

            }
            lbfcs[2].innerHTML = floorn[2];
            lbfcs[2].className = 'lbfseled';
        } else if (fof.offsetTop - sct <= sch / 2 && fif.offsetTop - sct > sch / 2) {
            lbfix.style.display = 'block';
            lbfix.style.top = (sch - lbfix.offsetHeight) / 2 + 'px';
            for (i = 0; i < lbfcs.length; i++) {
                lbfcs[i].innerHTML = i + 1 + 'F';
                lbfcs[i].className = '';

            }
            lbfcs[3].innerHTML = floorn[3];
            lbfcs[3].className = 'lbfseled';
        } else if (fif.offsetTop - sct <= sch / 2 && sif.offsetTop - sct > sch / 2) {
            lbfix.style.display = 'block';
            lbfix.style.top = (sch - lbfix.offsetHeight) / 2 + 'px';
            for (i = 0; i < lbfcs.length; i++) {
                lbfcs[i].innerHTML = i + 1 + 'F';
                lbfcs[i].className = '';

            }
            lbfcs[4].innerHTML = floorn[4];
            lbfcs[4].className = 'lbfseled';
        } else if (sif.offsetTop - sct <= sch / 2 && sef.offsetTop - sct > sch / 2) {
            lbfix.style.display = 'block';
            lbfix.style.top = (sch - lbfix.offsetHeight) / 2 + 'px';
            for (i = 0; i < lbfcs.length; i++) {
                lbfcs[i].innerHTML = i + 1 + 'F';
                lbfcs[i].className = '';

            }
            lbfcs[5].innerHTML = floorn[5];
            lbfcs[5].className = 'lbfseled';
        } else if (sef.offsetTop - sct <= sch / 2 && eif.offsetTop - sct > sch / 2) {
            lbfix.style.display = 'block';
            lbfix.style.top = (sch - lbfix.offsetHeight) / 2 + 'px';
            for (i = 0; i < lbfcs.length; i++) {
                lbfcs[i].innerHTML = i + 1 + 'F';
                lbfcs[i].className = '';

            }
            lbfcs[6].innerHTML = floorn[6];
            lbfcs[6].className = 'lbfseled';
        } else if (eif.offsetTop - sct <= sch / 2 && nif.offsetTop - sct > sch / 2) {
            lbfix.style.display = 'block';
            lbfix.style.top = (sch - lbfix.offsetHeight) / 2 + 'px';
            for (i = 0; i < lbfcs.length; i++) {
                lbfcs[i].innerHTML = i + 1 + 'F';
                lbfcs[i].className = '';

            }
            lbfcs[7].innerHTML = floorn[7];
            lbfcs[7].className = 'lbfseled';
        } else if (nif.offsetTop - sct <= sch / 2 && tef.offsetTop - sct > sch / 2) {
            lbfix.style.display = 'block';
            lbfix.style.top = (sch - lbfix.offsetHeight) / 2 + 'px';
            for (i = 0; i < lbfcs.length; i++) {
                lbfcs[i].innerHTML = i + 1 + 'F';
                lbfcs[i].className = '';

            }
            lbfcs[8].innerHTML = floorn[8];
            lbfcs[8].className = 'lbfseled';
        } else if (tef.offsetTop - sct <= sch / 2 && elf.offsetTop - sct > sch / 2) {
            lbfix.style.display = 'block';
            lbfix.style.top = (sch - lbfix.offsetHeight) / 2 + 'px';
            for (i = 0; i < lbfcs.length; i++) {
                lbfcs[i].innerHTML = i + 1 + 'F';
                lbfcs[i].className = '';

            }
            lbfcs[9].innerHTML = floorn[9];
            lbfcs[9].className = 'lbfseled';
        } else if (elf.offsetTop - sct <= sch / 2 && twef.offsetTop - sct > sch / 2) {
            lbfix.style.display = 'block';
            lbfix.style.top = (sch - lbfix.offsetHeight) / 2 + 'px';
            for (i = 0; i < lbfcs.length; i++) {
                lbfcs[i].innerHTML = i + 1 + 'F';
                lbfcs[i].className = '';

            }
            lbfcs[10].innerHTML = floorn[10];
            lbfcs[10].className = 'lbfseled';
        } else if (twef.offsetTop - sct <= sch / 2 && twefb.offsetTop - sct > -66) {
            lbfix.style.display = 'block';
            lbfix.style.top = (sch - lbfix.offsetHeight) / 2 + 'px';
            for (i = 0; i < lbfcs.length; i++) {
                lbfcs[i].innerHTML = i + 1 + 'F';
                lbfcs[i].className = '';

            }
            lbfcs[11].innerHTML = floorn[11];
            lbfcs[11].className = 'lbfseled';
        } else {
            lbfix.style.display = '';
            lbfix.style.top = '';
            for (i = 0; i < lbfcs.length; i++) {
                lbfcs[i].innerHTML = '';
                lbfcs[i].className = '';
                lbfcs[i].style = '';
            }
        }
    }
    //调整浏览器大小的时候固定导航栏高度变化
window.onresize = function() {
    var sch = document.documentElement.clientHeight || document.body.clientHeight; //获取屏幕高度
    if (lbfix.style.display == 'block') {
        lbfix.style.top = (sch - lbfix.offsetHeight) / 2 + 'px';
    }
}

//点击楼层按钮时，滚动条滑动到点击楼层
for (i = 0; i < lbfcs.length; i++) {
    lbfcs[i].onclick = function() {
        var lbtim = null;
        var sct = document.documentElement.scrollTop || document.body.scrollTop;
        for (i = 0; i < lbfcs.length; i++) {
            if (lbfcs[i] == this) {
                var dis = flnums[i].offsetTop - sct;
                var maxStep = 20;
                var everyStep = dis / maxStep;
                var step = 0;
                lbtim = setInterval(function() {
                    step++;
                    document.documentElement.scrollTop = Tween.Cubic.easeOut(step, sct, dis, maxStep);
                    document.body.scrollTop = Tween.Cubic.easeOut(step, sct, dis, maxStep);
                    if (step == maxStep) {
                        clearInterval(lbtim);
                    }
                }, 50)
            }
        }
    }
}


//tween算法
/*
 * Tween.js
 * t: current time（当前时间）
 * b: beginning value（初始值）
 * c: change in value（变化量）
 * d: duration（持续时间）
 */
var Tween = {
    Linear: function(t, b, c, d) {
        return c * t / d + b;
    },
    Quad: {
        easeIn: function(t, b, c, d) {
            return c * (t /= d) * t + b;
        },
        easeOut: function(t, b, c, d) {
            return -c * (t /= d) * (t - 2) + b;
        },
        easeInOut: function(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t + b;
            return -c / 2 * ((--t) * (t - 2) - 1) + b;
        }
    },
    Cubic: {
        easeIn: function(t, b, c, d) {
            return c * (t /= d) * t * t + b;
        },
        easeOut: function(t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b;
        },
        easeInOut: function(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t + 2) + b;
        }
    },
    Quart: {
        easeIn: function(t, b, c, d) {
            return c * (t /= d) * t * t * t + b;
        },
        easeOut: function(t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
        },
        easeInOut: function(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
        }
    },
    Quint: {
        easeIn: function(t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b;
        },
        easeOut: function(t, b, c, d) {
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        },
        easeInOut: function(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
        }
    },
    Sine: {
        easeIn: function(t, b, c, d) {
            return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
        },
        easeOut: function(t, b, c, d) {
            return c * Math.sin(t / d * (Math.PI / 2)) + b;
        },
        easeInOut: function(t, b, c, d) {
            return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
        }
    },
    Expo: {
        easeIn: function(t, b, c, d) {
            return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
        },
        easeOut: function(t, b, c, d) {
            return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
        },
        easeInOut: function(t, b, c, d) {
            if (t == 0) return b;
            if (t == d) return b + c;
            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
    },
    Circ: {
        easeIn: function(t, b, c, d) {
            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
        },
        easeOut: function(t, b, c, d) {
            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
        },
        easeInOut: function(t, b, c, d) {
            if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        }
    },
    Elastic: {
        easeIn: function(t, b, c, d, a, p) {
            var s;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (typeof p == "undefined") p = d * .3;
            if (!a || a < Math.abs(c)) {
                s = p / 4;
                a = c;
            } else {
                s = p / (2 * Math.PI) * Math.asin(c / a);
            }
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        },
        easeOut: function(t, b, c, d, a, p) {
            var s;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (typeof p == "undefined") p = d * .3;
            if (!a || a < Math.abs(c)) {
                a = c;
                s = p / 4;
            } else {
                s = p / (2 * Math.PI) * Math.asin(c / a);
            }
            return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b);
        },
        easeInOut: function(t, b, c, d, a, p) {
            var s;
            if (t == 0) return b;
            if ((t /= d / 2) == 2) return b + c;
            if (typeof p == "undefined") p = d * (.3 * 1.5);
            if (!a || a < Math.abs(c)) {
                a = c;
                s = p / 4;
            } else {
                s = p / (2 * Math.PI) * Math.asin(c / a);
            }
            if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
        }
    },
    Back: {
        easeIn: function(t, b, c, d, s) {
            if (typeof s == "undefined") s = 1.70158;
            return c * (t /= d) * t * ((s + 1) * t - s) + b;
        },
        easeOut: function(t, b, c, d, s) {
            if (typeof s == "undefined") s = 1.70158;
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
        },
        easeInOut: function(t, b, c, d, s) {
            if (typeof s == "undefined") s = 1.70158;
            if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
            return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
        }
    },
    Bounce: {
        easeIn: function(t, b, c, d) {
            return c - Tween.Bounce.easeOut(d - t, 0, c, d) + b;
        },
        easeOut: function(t, b, c, d) {
            if ((t /= d) < (1 / 2.75)) {
                return c * (7.5625 * t * t) + b;
            } else if (t < (2 / 2.75)) {
                return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
            } else if (t < (2.5 / 2.75)) {
                return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
            } else {
                return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
            }
        },
        easeInOut: function(t, b, c, d) {
            if (t < d / 2) {
                return Tween.Bounce.easeIn(t * 2, 0, c, d) * .5 + b;
            } else {
                return Tween.Bounce.easeOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
            }
        }
    }
}
Math.tween = Tween;