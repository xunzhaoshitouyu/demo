window.onload = function() {
    var stugrade = [
            [{
                name: '松松',
                xh: 7799,
                yw: 56,
                yy: 78,
                sx: 85
            }],
            [{
                name: '兔兔',
                xh: 7791,
                yw: 36,
                yy: 86,
                sx: 85
            }],
            [{
                name: '婷婷',
                xh: 7794,
                yw: 65,
                yy: 73,
                sx: 98
            }],
            [{
                name: '源源',
                xh: 7779,
                yw: 51,
                yy: 91,
                sx: 88
            }],
            [{
                name: '吵吵',
                xh: 7772,
                yw: 18,
                yy: 59,
                sx: 72
            }],
            [{
                name: '亮亮',
                xh: 7788,
                yw: 63,
                yy: 80,
                sx: 86
            }]
        ]
        // console.log(stugrade.length);
    for (i = 0; i < stugrade.length; i++) {

    }
    var oTab = document.getElementById('tab1');
    var oTheadTd = document.getElementsByTagName('thead')[0].getElementsByTagName('td');
    var oTbodyTr = document.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    var btn1 = document.getElementsByTagName('button')[0];
    var inp = document.getElementById('inp');
    var thead = document.getElementById('thead');
    var del = document.getElementById('delete');
    var tbd = document.getElementsByTagName('tbody')[0];
    var i = 0;
    var grade = [];

    // 向tbody插入节点
    for (i = 0; i < stugrade.length; i++) {
        var tr = document.createElement("tr");
        tbd.appendChild(tr);
        for (j = 0; j < 7; j++) {
            var td = document.createElement('td');
            tr.appendChild(td);
        }
        oTab.tBodies[0].rows[i].cells[0].innerHTML = stugrade[i][0].name;
        oTab.tBodies[0].rows[i].cells[1].innerHTML = stugrade[i][0].xh;
        oTab.tBodies[0].rows[i].cells[2].innerHTML = stugrade[i][0].yw;
        oTab.tBodies[0].rows[i].cells[3].innerHTML = stugrade[i][0].yy;
        oTab.tBodies[0].rows[i].cells[4].innerHTML = stugrade[i][0].sx;
    }

    //查询按钮点击事件
    btn1.onclick = function() {
        // console.log(1);
        for (i = 0; i < oTab.tBodies[0].rows.length; i++) {
            var str1 = oTab.tBodies[0].rows[i].cells[0].innerHTML;
            var str2 = inp.value;
            if (str1 == str2) {
                oTab.tBodies[0].rows[i].style.background = 'red';
            } else {
                oTab.tBodies[0].rows[i].style.background = '';
            }

            if (str1.search(str2) != -1) {
                oTab.tBodies[0].rows[i].style.background = 'red';
            } else {
                oTab.tBodies[0].rows[i].style.background = '';
            }
            var arr = str2.split(' ');
            // console.log(arr);
            for (j = 0; j < arr.length; j++) {
                if (str1.search(arr[j]) != -1) {
                    oTab.tBodies[0].rows[i].style.background = 'red';
                }
            }

        }

    }

    //删除按钮点击事件
    del.onclick = function() {
        if (oTbodyTr.length >= 1) {
            tbd.removeChild(oTbodyTr[oTbodyTr.length - 1]);
        }
    }

    for (i = 0; i < oTab.tBodies[0].rows.length; i++) {

        for (var j = 0; j < oTab.tBodies[0].rows[0].cells.length; j++) {

            grade[i] = oTab.tBodies[0].rows[i].cells[5].innerHTML = parseInt(oTab.tBodies[0].rows[i].cells[2].innerHTML) +
                parseInt(oTab.tBodies[0].rows[i].cells[3].innerHTML) + parseInt(oTab.tBodies[0].rows[i].cells[4].innerHTML);
        }
    }
    var t = oTab.tBodies[0].rows.length;
    for (i = 0; i < oTab.tBodies[0].rows.length; i++) {
        for (var j = 0; j < oTab.tBodies[0].rows.length; j++) {

            if (grade[i] > grade[j]) {
                t--;
            }
            if (j == oTab.tBodies[0].rows.length - 1) {
                oTab.tBodies[0].rows[i].cells[6].innerHTML = t;
                t = oTab.tBodies[0].rows.length;
            }
        }

    }

    //事件委托
    var iColor = '';
    for (i = 0; i < oTheadTd.length; i++) {
        oTheadTd[i].index = i;
        oTheadTd[i].style.cursor = " pointer";
        oTheadTd[i].flag = true;
        oTheadTd[i].style.background = "#ccc";
        thead.onclick = function(ev) {
            var even = ev || window.event;
            var tar = even.target || even.srcElement;
            var arr = [];
            // 转换为数组
            var n = tar.index;
            // 将变量的下标传给n 函数调用;
            for (var j = 0; j < oTab.tBodies[0].rows.length; j++) {
                arr[j] = oTab.tBodies[0].rows[j];
            }
            // 数组排序
            arr.sort(function(tr1, tr2) {
                if (oTheadTd[n].flag) {
                    return parseInt(tr1.cells[n].innerHTML) - parseInt(tr2.cells[n].innerHTML);
                } else {
                    return parseInt(tr2.cells[n].innerHTML) - parseInt(tr1.cells[n].innerHTML);
                }
            });
            // 重新插入
            for (var j = 0; j < arr.length; j++) {
                oTab.tBodies[0].appendChild(arr[j]);
            }

            oTheadTd[n].flag = !oTheadTd[n].flag;
        }
        thead.onmouseover = function(ev) {
            var even = ev || window.event;
            var tar = even.target || even.srcElement;
            iColor = tar.style.background;
            tar.style.background = 'red';
        }
        thead.onmouseout = function(ev) {
            var even = ev || window.event;
            var tar = even.target || even.srcElement;
            tar.style.background = iColor;
        }
    }
}