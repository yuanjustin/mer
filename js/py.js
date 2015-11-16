(function () {
    var c = (new Date()).getTime();

    function k(t) {
        return document.getElementById(t)
    }

    function n(t) {
        return document.createElement(t)
    }

    function p(v, u, t) {
        if (window.attachEvent) {
            v.attachEvent("on" + u, t)
        } else {
            if (window.addEventListener) {
                v.addEventListener(u, t, false)
            }
        }
    }

    function l(v, u, t) {
        if (window.attachEvent) {
            v.detachEvent("on" + u, t)
        } else {
            if (window.addEventListener) {
                v.removeEventListener(u, t, false)
            }
        }
    }

    function o(t) {
        t.style.display = "block"
    }

    function d(t) {
        t.style.display = "none"
    }

    function f(u, t) {
        t = t.replace(/\-(\w)/g, function (v, w) {
            return w.toUpperCase()
        });
        if (g.isIE) {
            return u.currentStyle[t]
        } else {
            return document.defaultView.getComputedStyle(u, null)[t]
        }
    }

    function e(u, t, v) {
        u.style[t] = v
    }

    function i(t) {
        return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r\n|\r|\n/g, "<br>").replace(/\s/g, "&nbsp;")
    }

    function s(v, z) {
        var A;
        if (!z) {
            A = document
        } else {
            A = z.document
        }
        var t = A.documentElement, u = A.body;
        var y = 0;
        var x = 0;
        if (v.getBoundingClientRect) {
            var w = v.getBoundingClientRect();
            y = w.left + Math.max(t.scrollLeft, u.scrollLeft);
            x = w.top + Math.max(t.scrollTop, u.scrollTop);
            y -= t.clientLeft;
            x -= t.clientTop
        } else {
            while (v.offsetParent) {
                y += v.offsetLeft;
                x += v.offsetTop;
                v = v.offsetParent
            }
        }
        return {x: y, y: x}
    }

    function h() {
        var y = navigator;
        if (y.plugins && y.mimeTypes.length) {
            var v = y.plugins["Shockwave Flash"];
            if (v && v.description) {
                return v.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".") + ".0"
            }
        } else {
            if (window.ActiveXObject && !window.opera) {
                for (var u = 10; u >= 2; u--) {
                    try {
                        var x = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + u);
                        if (x) {
                            var t = x.GetVariable("\x24version");
                            return t.replace(/WIN/g, "").replace(/,/g, ".")
                        }
                    } catch (w) {
                    }
                }
            }
        }
    }

    function r(u, t, w, y, x) {
        var v = window["BD_PS_C" + (new Date()).getTime()] = new Image();
        v.src = "http://nsclick.baidu.com/v.gif?pid=201&pj=ui_py&time=" + u + "&on=" + t + "&ch=" + w + "&bc=" + y + "&pt=" + x
    }

    var q = {
        create: function () {
            return function () {
                this.initialize.apply(this, arguments)
            }
        }
    };
    var m = navigator.userAgent;
    var g = {
        status: {enable: 0, ch: 1, bc: 1, pt: 1, on: 1},
        option: {tRight: 50, tBottom: 30, panelH: 59},
        domain: "",
        usr: "",
        inputs: [],
        isClose: false,
        isIE: (/msie (\d+)/i.test(m) && !window.opera) ? parseInt(RegExp.$1) : 0,
        isFirefox: /firefox/i.test(m),
        isOpera: /opera/i.test(m) && window.opera,
        isStrict: document.compatMode == "CSS1Compat",
        shownum: 5,
        curSelectNum: 1,
        iptTargets: [],
        iptCurTarget: null,
        inputsource: "",
        tempsource: "",
        inputselected: "",
        isBlur: true,
        needIptBack: false,
        selectLock: true,
        pageT: null,
        pageTimes: 0,
        isSubAddr: false,
        cursorHtml: "<span id='bdime_cursor'></span>",
        feedbackLink: "<a href='http://tieba.baidu.com/f?kw=%E7%99%BE%E5%BA%A6%E5%9C%A8%E7%BA%BF%E8%BE%93%E5%85%A5%E6%B3%95&ie=utf-8' target='_blank'>\u53cd\u9988</a>",
        hasSug: false,
        panelShow: function () {
        },
        panelHide: function () {
        }
    };
    var a = [];
    a[32] = [" ", "\u3000", " ", " ", " ", " "];
    a[48] = ["0", "0", "\uff10", ")", "\uff09", "\uff09"];
    a[49] = ["1", "1", "\uff11", "!", "\uff01", "\uff01"];
    a[50] = ["2", "2", "\uff12", "@", "\uff20", "@"];
    a[51] = ["3", "3", "\uff13", "#", "\uff03", "#"];
    a[52] = ["4", "4", "\uff14", "$", "\uff04", "\uffe5"];
    a[53] = ["5", "5", "\uff15", "%", "\uff05", "\uff05"];
    a[54] = ["6", "6", "\uff16", "^", "\uff3e", "\u2026\u2026"];
    a[55] = ["7", "7", "\uff17", "&", "\uff06", "&"];
    a[56] = ["8", "8", "\uff18", "*", "\uff0a", "*"];
    a[57] = ["9", "9", "\uff19", "(", "\uff08", "\uff08"];
    a[65] = ["a", "\uff41", "\uff41", "A", "\uff21", "\uff21"];
    a[66] = ["b", "\uff42", "\uff42", "B", "\uff22", "\uff22"];
    a[67] = ["c", "\uff43", "\uff43", "C", "\uff23", "\uff23"];
    a[68] = ["d", "\uff44", "\uff44", "D", "\uff24", "\uff24"];
    a[69] = ["e", "\uff45", "\uff45", "E", "\uff25", "\uff25"];
    a[70] = ["f", "\uff46", "\uff46", "F", "\uff26", "\uff26"];
    a[71] = ["g", "\uff47", "\uff47", "G", "\uff27", "\uff27"];
    a[72] = ["h", "\uff48", "\uff48", "H", "\uff28", "\uff28"];
    a[73] = ["i", "\uff49", "\uff49", "I", "\uff29", "\uff29"];
    a[74] = ["j", "\uff4a", "\uff4a", "J", "\uff2a", "\uff2a"];
    a[75] = ["k", "\uff4b", "\uff4b", "K", "\uff2b", "\uff2b"];
    a[76] = ["l", "\uff4c", "\uff4c", "L", "\uff2c", "\uff2c"];
    a[77] = ["m", "\uff4d", "\uff4d", "M", "\uff2d", "\uff2d"];
    a[78] = ["n", "\uff4e", "\uff4e", "N", "\uff2e", "\uff2e"];
    a[79] = ["o", "\uff4f", "\uff4f", "O", "\uff2f", "\uff2f"];
    a[80] = ["p", "\uff50", "\uff50", "P", "\uff30", "\uff30"];
    a[81] = ["q", "\uff51", "\uff51", "Q", "\uff31", "\uff31"];
    a[82] = ["r", "\uff52", "\uff52", "R", "\uff32", "\uff32"];
    a[83] = ["s", "\uff53", "\uff53", "S", "\uff33", "\uff33"];
    a[84] = ["t", "\uff54", "\uff54", "T", "\uff34", "\uff34"];
    a[85] = ["u", "\uff55", "\uff55", "U", "\uff35", "\uff35"];
    a[86] = ["v", "\uff56", "\uff56", "V", "\uff36", "\uff36"];
    a[87] = ["w", "\uff57", "\uff57", "W", "\uff37", "\uff37"];
    a[88] = ["x", "\uff58", "\uff58", "X", "\uff38", "\uff38"];
    a[89] = ["y", "\uff59", "\uff59", "Y", "\uff39", "\uff39"];
    a[90] = ["z", "\uff5a", "\uff5a", "Z", "\uff3a", "\uff3a"];
    a[96] = ["0", "0", "\uff10", ")", "\uff09", "\uff09"];
    a[97] = ["1", "1", "\uff11", "!", "\uff01", "\uff01"];
    a[98] = ["2", "2", "\uff12", "@", "\uff20", "@"];
    a[99] = ["3", "3", "\uff13", "#", "\uff03", "#"];
    a[100] = ["4", "4", "\uff14", "$", "\uff04", "\uffe5"];
    a[101] = ["5", "5", "\uff15", "%", "\uff05", "\uff05"];
    a[102] = ["6", "6", "\uff16", "^", "\uff3e", "\u2026\u2026"];
    a[103] = ["7", "7", "\uff17", "&", "\uff06", "&"];
    a[104] = ["8", "8", "\uff18", "*", "\uff0a", "*"];
    a[105] = ["9", "9", "\uff19", "(", "\uff08", "\uff08"];
    a[106] = ["*", "\uff0a", "*", "*", "\uff0a", "*"];
    a[107] = ["+", "\uff0b", "+", "+", "\uff0b", "+"];
    a[109] = ["-", "\uff0d", "-", "-", "\uff0d", "-"];
    a[110] = [".", "\uff0e", ".", ".", "\uff0e", "."];
    a[111] = ["/", "\uff0f", "/", "/", "\uff0f", "/"];
    a[186] = [";", "\uff1b", "\uff1b", ":", "\uff1a", "\uff1a"];
    a[187] = ["=", "\uff1d", "=", "+", "\uff0b", "+"];
    a[188] = [",", "\uff0c", "\uff0c", "<", "\uff1c", "\u300a"];
    a[189] = ["-", "\uff0d", "-", "_", "\uff3f", "\u2014\u2014"];
    a[190] = [".", "\uff0e", "\u3002", ">", "\uff1e", "\u300b"];
    a[191] = ["/", "\uff0f", "\u3001", "?", "\uff1f", "\uff1f"];
    a[192] = ["`", "\uff40", "\u00b7", "~", "\uff5e", "\uff5e"];
    a[219] = ["[", "\uff3b", "\u3010", "{", "\uff5b", "{"];
    a[220] = ["\\", "\uff3c", "\u3001", "|", "\uff5c", "|"];
    a[221] = ["]", "\uff3d", "\u3011", "}", "\uff5d", "}"];
    a[222] = ["'", "\uff07", "\u2018", "\u2019", '"', "\uff02", "\u201c", "\u201d"];
    g.build = (function () {
        function v(A) {
            if (g.isIE) {
                var B = document.createStyleSheet();
                B.cssText = A
            } else {
                var z = n("style");
                z.type = "text/css";
                z.appendChild(document.createTextNode(A));
                document.getElementsByTagName("HEAD")[0].appendChild(z)
            }
            if (g.isIE == 6) {
                y()
            }
        }

        function y() {
            var A = " url(about:blank) fixed";
            var z = document.documentElement, B = document.body;
            if (z.currentStyle.backgroundImage == "none") {
                z.style.background = z.currentStyle.backgroundColor + A
            } else {
                if (B.currentStyle.backgroundImage == "none") {
                    B.style.background = B.currentStyle.backgroundColor + A
                }
            }
        }

        function t() {
            var z = [];
            z.push("#bdime_tools{height:26px;font-size:12px;color:#000;position:absolute;z-index:99999;-moz-user-select:none;display:none}");
            z.push("#bdime_tools_on{width:140px;height:26px;background:url(http://www.baidu.com/olime/ime_bg.gif);position:absolute;right:0}");
            z.push("#bdime_tools_on span{width:23px;height:26px;display:inline-block;background:url(http://www.baidu.com/olime/ime_bg.gif);cursor:pointer}");
            z.push("span#bdime_tools_drag{width:36px;background:none;cursor:move}");
            z.push("#bdime_tools_on .close_default{width:35px;background:none}");
            z.push("#bdime_tools_on .close_hover{width:35px;background-position:-105px -27px}");
            z.push("#bdime_tools_on .ch_a_default{background-position:-36px 0}");
            z.push("#bdime_tools_on .ch_a_hover{background-position:-36px -27px}");
            z.push("#bdime_tools_on .ch_b_default{background-position:-36px -54px}");
            z.push("#bdime_tools_on .ch_b_hover{background-position:-36px -81px}");
            z.push("#bdime_tools_on .bc_a_default{background-position:-59px 0}");
            z.push("#bdime_tools_on .bc_a_hover{background-position:-59px -27px}");
            z.push("#bdime_tools_on .bc_b_default{background-position:-59px -54px}");
            z.push("#bdime_tools_on .bc_b_hover{background-position:-59px -81px}");
            z.push("#bdime_tools_on .pt_a_default{background-position:-81px 0}");
            z.push("#bdime_tools_on .pt_a_hover{background-position:-81px -27px}");
            z.push("#bdime_tools_on .pt_b_default{background-position:-81px -54px}");
            z.push("#bdime_tools_on .pt_b_hover{background-position:-81px -81px}");
            z.push("#bdime_tools_off{width:38px;height:26px;display:none;position:absolute;right:0}");
            z.push("#bdime_tools_off span{width:29px;height:26px;display:inline-block;background:url(http://www.baidu.com/olime/ime_bg.gif) 0 -108px;cursor:pointer}");
            z.push("#bdime_tools_off .off_logo_default{background-position:-52px -108px}");
            z.push("#bdime_tools_off .off_logo_hover{background-position:-9px -108px}");
            z.push("span#bdime_tools_off_drag{width:9px;cursor:move}");
            z.push("#bdime_panel{position:absolute;z-index:99999;display:none}");
            z.push("#bdime_panel table{width:350px;border:0}");
            z.push("#bdime_panel td{font:14px arial;color:#000;height:59px;text-align:left;vertical-align:top;white-space:nowrap;-moz-user-select:none}");
            z.push(".panel_l{width:14px;background:url(http://www.baidu.com/olime/ime_bg.gif) no-repeat 0 -135px}");
            z.push(".panel_c{background:url(http://www.baidu.com/olime/ime_bg.gif) repeat-x 0 -195px}");
            z.push(".panel_r{width:38px;background:url(http://www.baidu.com/olime/ime_bg.gif) no-repeat right -135px}");
            z.push(".panel_m{height:24px;cursor:move}");
            z.push(".panel_l div{width:14px}");
            z.push(".panel_r div{width:38px}");
            z.push(".panel_c a{font-size:12px;color:#366F9B;position:absolute;right:38px;top:7px;text-decoration:underline}");
            z.push("#bdime_cursor{width:1px;height:16px;background:#EB4F04;overflow:hidden}");
            z.push("#bdime_input_holder{font:bold 16px/24px arial;color:#369;padding-right:100px}");
            z.push("#bdime_input span{display:inline-block}");
            z.push("#bdime_selector{font:16px 'simsun';padding-top:8px;cursor:default}");
            z.push("#bdime_selector span{cursor:pointer}");
            z.push(".bdime_selected{color:#eb4f03}");
            z.push(".bdime_page{width:9px;height:9px;overflow:hidden;position:absolute;top:38px;background:url(http://www.baidu.com/olime/ime_bg.gif)}");
            z.push(".bdime_sel_pre_on{right:27px;background-position:-85px -110px;cursor:pointer}");
            z.push(".bdime_sel_pre_off{right:27px;background-position:-104px -173px}");
            z.push(".bdime_sel_nxt_on{right:12px;background-position:-96px -110px;cursor:pointer}");
            z.push(".bdime_sel_nxt_off{right:12px;background-position:-119px -173px}");
            z.push("#bdime_msg_off{width:125px;left:60px;top:-50px}");
            z.push("#bdime_msg_off p{text-align:left}");
            z.push("#bdime_msg_on{width:118px;right:-40px;top:-32px}");
            z.push("#bdime_msg_ch{width:120px;right:32px;top:-32px}");
            z.push("#bdime_msg_bc{width:150px;right:-10px;top:-32px}");
            z.push("#bdime_msg_pt{width:135px;right:-28px;top:-32px}");
            z.push(".bdime_msg{font:12px arial;position:absolute;z-index:99999;display:none}");
            z.push(".bdime_msg p{border:1px solid #a1c2f2;background:#dbe9f9;margin:0;padding:3px 6px;line-height:18px;text-align:center}");
            z.push(".bdime_msg div{height:7px;overflow:hidden;background:url(http://www.baidu.com/olime/ime_bg.gif) center -256px;position:relative;top:-1px}");
            z.push(".bdime_msg b{width:2px;height:2px;float:left;overflow:hidden;background:url(http://www.baidu.com/olime/ime_bg.gif) -85px -121px}");
            z.push(".bdime_msg .r1{_margin-right:-2px}");
            z.push(".bdime_msg .r2{float:right;background-position:-87px -121px}");
            z.push(".bdime_msg .r3{background-position:-85px -123px;margin-top:-2px}");
            z.push(".bdime_msg .r4{float:right;background-position:-87px -123px;margin-top:-2px}");
            z.push("#bdime_menu{width:105px;height:54px;margin:0;padding:7px 0 0;list-style:none;position:absolute;z-index:99999;left:0;top:-61px;background:url(http://www.baidu.com/olime/ime_bg.gif) no-repeat 0 -265px;display:none}");
            z.push("#bdime_menu li a{width:101px;height:25px;line-height:25px;color:#000;display:block;text-decoration:none;text-align:left;text-indent:20px;margin:0 auto}");
            z.push("#bdime_menu li a:hover{color:#fff;background:#457cd8}");
            v(z.join(""))
        }

        function x() {
            var B = k("bdime_tools") ? k("bdime_tools") : n("DIV");
            B.id = "bdime_tools";
            var A = '<div id="bdime_tools_off"><div><div id="bdime_msg_on" class="bdime_msg"><b class="r1"></b><b class="r2"></b><p>\u5f00\u542f\u5728\u7ebf\u8f93\u5165\u6cd5</p><b class="r3"></b><b class="r4"></b><div></div></div></div><span id="bdime_tools_off_drag"></span><span id="bdime_tools_off_logo" class="off_logo_default"></span></div><div id="bdime_tools_on"><div><ul id="bdime_menu"><li><a href="http://tieba.baidu.com/f?kw=%E7%99%BE%E5%BA%A6%E5%9C%A8%E7%BA%BF%E8%BE%93%E5%85%A5%E6%B3%95&ie=utf-8" class="bdime_link" target="_blank">\u53cd\u9988\u5efa\u8bae</a></li><li><a href="http://www.baidu.com/search/ime/help.html#n2" class="bdime_link" target="_blank">\u5e2e\u52a9</a></li></ul><div id="bdime_msg_ch" class="bdime_msg"><b class="r1"></b><b class="r2"></b><p>\u5207\u6362\u4e2d/\u82f1\u6587(Shift)</p><b class="r3"></b><b class="r4"></b><div></div></div><div id="bdime_msg_bc" class="bdime_msg"><b class="r1"></b><b class="r2"></b><p>\u5168/\u534a\u89d2(Shift + Space)</p><b class="r3"></b><b class="r4"></b><div></div></div><div id="bdime_msg_pt" class="bdime_msg"><b class="r1"></b><b class="r2"></b><p>\u4e2d/\u82f1\u6587\u6807\u70b9(Ctrl + .)</p><b class="r3"></b><b class="r4"></b><div></div></div><div id="bdime_msg_off" class="bdime_msg"><b class="r1"></b><b class="r2"></b><p>\u70b9\u51fb\u201c\u5173\u95ed\u201d\uff0c\u5728\u7ebf\u8f93\u5165\u6cd5\u6682\u505c\u4f7f\u7528\u3002</p><b class="r3"></b><b class="r4"></b><div></div></div></div><span id="bdime_tools_drag"></span><span id="bdime_tools_ch" class="ch_a_default"></span><span id="bdime_tools_bc" class="bc_b_default"></span><span id="bdime_tools_pt" class="pt_a_default"></span><span id="bdime_tools_close" class="close_default"></span></div>';
            B.innerHTML = A;
            document.body.appendChild(B);
            var z = k("bdime_panel") ? k("bdime_panel") : n("DIV");
            z.id = "bdime_panel";
            var A = '<table cellpadding="0" cellspacing="0" onselectstart="return false;"><tr><td class="panel_l"><div class="panel_m"></div></td><td class="panel_c">' + g.feedbackLink + '<div id="bdime_input_holder" class="panel_m"><span id="bdime_input"></span></div><div id="bdime_selector"></div></td><td class="panel_r"><div class="panel_m"></div><span id="bdime_sel_pre" class="bdime_page bdime_sel_pre_off"></span><span id="bdime_sel_nxt" class="bdime_page bdime_sel_nxt_off"></span></td></tr></table>';
            z.innerHTML = A;
            document.body.appendChild(z);
            k("bdime_input").innerHTML = g.cursorHtml
        }

        function u() {
            var C = k("bdime_tools");
            var D = C.getElementsByTagName("*");
            var z = k("bdime_panel");
            var A = z.getElementsByTagName("*");
            C.setAttribute("unselectable", "on");
            z.setAttribute("unselectable", "on");
            for (var B = 0; B < D.length; B++) {
                D[B].setAttribute("unselectable", "on")
            }
            for (var B = 0; B < A.length; B++) {
                A[B].setAttribute("unselectable", "on")
            }
        }

        function w() {
            t();
            x();
            u();
            g.tools = k("bdime_tools");
            g.tools_on = k("bdime_tools_on");
            g.tools_drag = k("bdime_tools_drag");
            g.tools_ch = k("bdime_tools_ch");
            g.tools_bc = k("bdime_tools_bc");
            g.tools_pt = k("bdime_tools_pt");
            g.tools_close = k("bdime_tools_close");
            g.tools_off = k("bdime_tools_off");
            g.tools_off_drag = k("bdime_tools_off_drag");
            g.tools_off_logo = k("bdime_tools_off_logo");
            g.panel = k("bdime_panel");
            g.panel_pre = k("bdime_sel_pre");
            g.panel_nxt = k("bdime_sel_nxt");
            g.panel_input = k("bdime_input");
            g.panel_selector = k("bdime_selector");
            g.bdime_msg_on = k("bdime_msg_on");
            g.bdime_msg_ch = k("bdime_msg_ch");
            g.bdime_msg_bc = k("bdime_msg_bc");
            g.bdime_msg_pt = k("bdime_msg_pt");
            g.bdime_msg_off = k("bdime_msg_off");
            g.bdime_menu = k("bdime_menu")
        }

        return {init: w}
    })();
    g.toolbar = (function () {
        var x = false;

        function E() {
            var M = g.tools;
            var H = document.documentElement, J = document.body;
            var I = g.isStrict ? H.clientHeight : J.clientHeight;
            var N = g.isStrict ? H.clientWidth : J.clientWidth;
            var L = N - M.offsetWidth - g.option.tRight;
            var K = I - M.offsetHeight - g.option.tBottom;
            if (g.isIE == 6) {
                M.style.position = "absolute";
                M.style.setExpression("left", "eval((document.documentElement.scrollLeft || document.body.scrollLeft) + " + L + ") + 'px'");
                M.style.setExpression("top", "eval((document.documentElement.scrollTop || document.body.scrollTop) + " + K + ") + 'px'")
            } else {
                M.style.position = "fixed";
                M.style.left = L + "px";
                M.style.top = K + "px"
            }
        }

        function B() {
            var H = g.tools;
            if (H.style.display != "block") {
                o(H)
            }
            E();
            d(H)
        }

        function z() {
            if (g.domain && navigator.cookieEnabled && /\bbdime=(\d+)(;|$)/i.test(document.cookie)) {
                var H = RegExp.$1;
                g.status.enable = parseInt(H.substr(0, 1));
                if (H.length == 5) {
                    g.status.ch = parseInt(H.substr(1, 1));
                    g.status.bc = parseInt(H.substr(2, 1));
                    g.status.pt = parseInt(H.substr(3, 1));
                    g.status.on = parseInt(H.substr(4, 1))
                }
            }
            D()
        }

        function D() {
            var I = g.toolbar;
            var H = g.tools_ch;
            if (g.status.ch) {
                I.setModeOn(H)
            } else {
                I.setModeOff(H)
            }
            var K = g.tools_bc;
            if (g.status.bc) {
                I.setModeOn(K)
            } else {
                I.setModeOff(K)
            }
            var J = g.tools_pt;
            if (g.status.pt) {
                I.setModeOn(J)
            } else {
                I.setModeOff(J)
            }
        }

        function F() {
            o(g.tools);
            g.toolbar.isShow = true
        }

        function A() {
            if (g.isBlur) {
                d(g.tools);
                g.inputpanel.hide();
                g.toolbar.isShow = false
            }
        }

        function u() {
            setTimeout(function () {
                o(g.tools_on);
                d(g.tools_off);
                o(g.bdime_msg_off);
                d(g.bdime_msg_off)
            }, 10)
        }

        function C() {
            o(g.bdime_msg_on);
            d(g.bdime_msg_on);
            d(g.bdime_menu);
            d(g.tools_on);
            o(g.tools_off)
        }

        function y(H) {
            H.className = H.className.replace(/_default/, "_hover")
        }

        function w(H) {
            H.className = H.className.replace(/_hover/, "_default")
        }

        function v(H) {
            H.className = H.className.replace(/_b_/, "_a_")
        }

        function t(H) {
            H.className = H.className.replace(/_a_/, "_b_")
        }

        function G() {
            B();
            z();
            p(window, "scroll", E);
            var L = g.tools_off_logo;
            p(L, "mouseover", function () {
                y(L);
                o(g.bdime_msg_on)
            });
            p(L, "mouseout", function () {
                w(L);
                d(g.bdime_msg_on)
            });
            p(L, "click", function () {
                o(g.bdime_msg_off)
            });
            var K = g.tools_close;
            p(K, "mouseover", function () {
                y(K);
                o(g.bdime_msg_off)
            });
            p(K, "mouseout", function () {
                w(K);
                d(g.bdime_msg_off)
            });
            p(K, "click", function () {
                y(L);
                o(g.bdime_msg_on);
                d(g.bdime_menu)
            });
            var H = g.tools_ch;
            p(H, "mouseover", function () {
                y(H);
                o(g.bdime_msg_ch)
            });
            p(H, "mouseout", function () {
                w(H);
                d(g.bdime_msg_ch)
            });
            var J = g.tools_bc;
            p(J, "mouseover", function () {
                y(J);
                o(g.bdime_msg_bc)
            });
            p(J, "mouseout", function () {
                w(J);
                d(g.bdime_msg_bc)
            });
            var I = g.tools_pt;
            p(I, "mouseover", function () {
                y(I);
                o(g.bdime_msg_pt)
            });
            p(I, "mouseout", function () {
                w(I);
                d(g.bdime_msg_pt)
            });
            p(g.tools_on, "contextmenu", function (N) {
                var M = N.target || N.srcElement;
                if (M.id != "bdime_tools_close") {
                    o(g.bdime_menu)
                }
                window.event ? N.returnValue = false : N.preventDefault()
            })
        }

        return {
            show: F,
            hide: A,
            toolsOnShow: u,
            toolsOnHide: C,
            setModeOn: v,
            setModeOff: t,
            setPosition: E,
            resetStatus: D,
            isShow: x,
            init: G
        }
    })();
    g.inputpanel = (function () {
        var A = false;

        function F() {
            var K = k("bdime_temp");
            if (K) {
                document.body.removeChild(K)
            }
        }

        function x(L) {
            F();
            var R = L.ownerDocument.defaultView;
            var P = s(L, R);
            var M = n("div");
            M.id = "bdime_temp";
            M.style.width = L.clientWidth - 1 + "px";
            M.style.height = L.clientHeight + "px";
            M.style.visibility = "hidden";
            M.style.position = "absolute";
            M.style.wordWrap = "break-word";
            M.style.textAlign = "left";
            M.style.left = P.x + "px";
            M.style.top = P.y + "px";
            document.body.appendChild(M);
            var N = L.value;
            var O = N.substring(0, L.selectionStart);
            M.innerHTML = i(O);
            var Q = k("bdime_cursor_temp");
            if (Q) {
                M.removeChild(Q)
            } else {
                Q = n("span");
                Q.id = "bdime_cursor_temp";
                Q.innerHTML = "&nbsp;";
                M.appendChild(Q)
            }
            var T = ["font", "fontFamily", "fontSize", "fontWeight", "fontVariant", "fontStyle", "letterSpacing", "wordSpacing", "lineHeight", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "borderWidth", "borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth", "borderStyle", "borderTopStyle", "borderRightStyle", "borderBottomStyle", "borderLeftStyle", "overflowX", "overflowY"];
            for (var K = 0; K < T.length; K++) {
                var S = f(L, T[K]);
                if (S) {
                    e(M, T[K], S)
                }
            }
            return Q
        }

        function I(M) {
            var K = 0, O = 0;
            var L = M.ownerDocument.selection.createRange();
            if (M.tp == "text") {
                var N = s(M);
                K = N.x + L.offsetLeft + 10;
                O = L.boundingTop + L.boundingHeight
            } else {
                var N = s(M);
                K = L.offsetLeft + 10;
                O = L.offsetTop + 10
            }
            return {x: K, y: O}
        }

        function J(L) {
            var K;
            if (g.isIE) {
                K = L.ownerDocument.parentWindow
            } else {
                K = L.ownerDocument.defaultView
            }
            return K
        }

        function y(P) {
            var M = 0, R = 0;
            var L = B(P);
            var O = J(P);
            var Q = s(P, O);
            M += Q.x;
            R += Q.y;
            var K = O.document.documentElement;
            var N = O.document.body;
            M -= K.scrollLeft || N.scrollLeft;
            R -= K.scrollTop || N.scrollTop;
            return {x: M, y: R}
        }

        function B(K) {
            if (document.documentMode == 9) {
                b = K.ownerDocument.body.innerHTML != window.document.body.innerHTML
            } else {
                b = K.ownerDocument != window.document
            }
            return b
        }

        function E(P) {
            var M = 0, R = 0;
            var Q;
            var L = B(P);
            while (L) {
                var O = J(P);
                Q = s(P, O);
                P = O.frameElement;
                M += Q.x;
                R += Q.y;
                var K = O.document.documentElement;
                var N = O.document.body;
                M -= K.scrollLeft || N.scrollLeft;
                R -= K.scrollTop || N.scrollTop;
                L = B(P)
            }
            Q = s(P);
            M += Q.x;
            R += Q.y;
            return {x: M, y: R}
        }

        function w(K) {
            return {x: E(K).x - y(K).x, y: E(K).y - y(K).y}
        }

        function D(K) {
            return {
                x: K.document.documentElement.scrollLeft || K.document.body.scrollLeft,
                y: K.document.documentElement.scrollTop || K.document.body.scrollTop
            }
        }

        function H() {
            var ac = g.iptCurTarget;
            if (!(ac || A)) {
                return
            }
            var L = 0, T = 0;
            var O;
            if (ac.tp == "textarea") {
                var K = w(ac);
                if (g.isIE) {
                    O = I(ac);
                    if (document.documentMode >= 8) {
                        L = O.x
                    } else {
                        L = K.x + O.x
                    }
                    T = K.y + O.y + 5
                } else {
                    var R = x(ac);
                    var W = D(ac.ownerDocument.defaultView);
                    var U = R.offsetHeight;
                    O = s(R);
                    L = K.x + O.x - W.x - ac.scrollLeft + 10;
                    T = K.y + O.y - W.y + U - ac.scrollTop
                }
            } else {
                if (ac.tp == "iframe" || ac.tp == "div") {
                    var Z = 20, X = 40;
                    if (ac.tp == "div") {
                        Z = 10;
                        X = 20
                    }
                    var K = w(ac);
                    if (g.isIE) {
                        var N = ac.ownerDocument.parentWindow;
                        var W = D(N);
                        var Q = "<span id='bdime_cursor_temp'>&nbsp;</span>";
                        if (ac.contentWindow) {
                            var ad = ac.contentWindow.document
                        } else {
                            var ad = ac.ownerDocument
                        }
                        var S = ad.selection.createRange();
                        S.collapse();
                        S.pasteHTML(Q);
                        S = null;
                        var aa;
                        if (ac.tp == "iframe") {
                            aa = ac.contentWindow.document
                        } else {
                            aa = ac.ownerDocument
                        }
                        var V = aa.getElementById("bdime_cursor_temp");
                        O = s(V, N);
                        V.parentNode.removeChild(V);
                        V = null
                    } else {
                        var N = ac.ownerDocument.defaultView;
                        var W = D(N);
                        var P;
                        if (ac.tp == "iframe") {
                            P = ac.contentWindow
                        } else {
                            P = N
                        }
                        var V = P.document.createElement("span");
                        var S = P.getSelection().getRangeAt(0);
                        V.id = "bdime_cursor_temp";
                        try {
                            S.insertNode(V);
                            O = s(V, P);
                            V.parentNode.removeChild(V)
                        } catch (Y) {
                            O = E(ac)
                        }
                        S = null;
                        V = null
                    }
                    if (ac.tp == "iframe") {
                        var P = ac.contentWindow;
                        if (!B(ac)) {
                            L = E(ac).x + O.x + 10;
                            T = E(ac).y + O.y + 10;
                            if (g.isIE) {
                                T -= D(window).y
                            }
                        } else {
                            L = K.x + O.x - D(P).x - W.x + Z;
                            T = K.y + O.y - D(P).y - W.y + X
                        }
                        if (g.isIE) {
                            T += 10
                        }
                    } else {
                        L = K.x + O.x - W.x + Z;
                        T = K.y + O.y - W.y + X
                    }
                } else {
                    var O = E(ac);
                    L = O.x + 20;
                    T = O.y + ac.offsetHeight
                }
            }
            var ab = document.body.offsetHeight;
            var M = ac.offsetHeight;
            if (ab > T && T + g.option.panelH > ab) {
                T = T - g.option.panelH - M
            }
            g.panel.style.left = L + "px";
            g.panel.style.top = T + "px"
        }

        function G() {
            o(g.panel);
            g.inputpanel.isShow = true;
            H(g.iptCurTarget);
            g.panelShow()
        }

        function C() {
            d(g.panel);
            g.inputpanel.isShow = false;
            F();
            g.inputsource = "";
            g.inputselected = "";
            g.pageTimes = 0;
            g.isSubAddr = false;
            g.panel_input.innerHTML = g.cursorHtml;
            g.panel_selector.innerHTML = "";
            g.curSelectNum = 1;
            g.data.resetGroup();
            g.panelHide()
        }

        function u() {
            if (!g.data.db.data) {
                return false
            }
            t();
            z();
            v();
            if (g.needIptBack) {
                g.control.setInput()
            }
            l(document, "mouseup", g.control.stopAutoPage);
            p(document, "mouseup", g.control.stopAutoPage)
        }

        function t() {
            var M = "";
            var O = (g.data.db.curpage - 1) * g.shownum;
            var N = O + g.shownum;
            if (N > g.data.db.totalnum) {
                N = g.data.db.totalnum
            }
            for (var L = O; L < N; L++) {
                var K = L - O + 1;
                M += "<span id='bdime_selector_" + K + "'";
                if (K == 1) {
                    M += " class='bdime_selected'"
                }
                M += " onclick='bdime.control.clkSelResult(this)' sn='" + g.data.db.data[L][1] + "' unselectable='on'>" + K + "." + g.data.db.data[L][0] + "</span>&nbsp;&nbsp;"
            }
            g.panel_selector.innerHTML = M;
            g.selectLock = false
        }

        function z() {
            var K = g.panel_pre;
            if (g.data.db.curpage > 1) {
                K.className = "bdime_page bdime_sel_pre_on";
                l(K, "mousedown", g.control.autoPagePre);
                p(K, "mousedown", g.control.autoPagePre)
            } else {
                K.className = "bdime_page bdime_sel_pre_off";
                l(K, "mousedown", g.control.autoPagePre)
            }
        }

        function v() {
            var K = g.panel_nxt;
            if (g.data.db.totalpage > 1 && g.data.db.curpage < g.data.db.totalpage) {
                K.className = "bdime_page bdime_sel_nxt_on";
                l(K, "mousedown", g.control.autoPageNxt);
                p(K, "mousedown", g.control.autoPageNxt)
            } else {
                K.className = "bdime_page bdime_sel_nxt_off";
                l(K, "mousedown", g.control.autoPageNxt)
            }
        }

        return {setPosition: H, isShow: A, show: G, hide: C, setResults: u}
    })();
    g.control = (function () {
        function I() {
            if (!g.domain) {
                return
            }
            if (navigator.cookieEnabled) {
                var ab = new Date();
                ab.setTime(ab.getTime() + 365 * 24 * 3600 * 1000);
                var aa = g.status.enable + "" + g.status.ch + "" + g.status.bc + "" + g.status.pt + "" + g.status.on;
                document.cookie = "bdime=" + aa + ";domain=" + g.domain + ";path=/;expires=" + ab.toGMTString()
            }
        }

        function T(aa) {
            g.status.on = 1;
            g.toolbar.toolsOnShow();
            g.keywatcher.on();
            g.inputwatcher.on();
            if (aa) {
                v(null, true);
                I()
            }
        }

        function C(aa) {
            g.status.on = 0;
            g.toolbar.toolsOnHide();
            g.inputpanel.hide();
            g.keywatcher.off();
            g.inputwatcher.off();
            A(null, true);
            if (aa) {
                I()
            }
        }

        function J() {
            g.isClose = false;
            g.status.enable = 2;
            g.status.ch = 1;
            g.status.bc = 1;
            g.status.pt = 1;
            g.toolbar.resetStatus();
            T(1);
            g.runner.startAutoFocus()
        }

        function D() {
            g.status.enable = 0;
            C(1);
            g.isClose = true;
            g.toolbar.hide();
            g.runner.stopAutoFocus()
        }

        function R(aa) {
            if (aa && (aa.tp == "input" || aa.tp == "textarea")) {
                return true
            }
            return false
        }

        function A(ae, ab) {
            var aa = [];
            if (ab) {
                aa = g.iptTargets
            } else {
                aa.push(ae)
            }
            for (var ac = 0; ac < aa.length; ac++) {
                var ad = aa[ac];
                if (ad.tp == "input" || ad.tp == "textarea") {
                    if (ad == g.iptCurTarget) {
                        ad.blur()
                    }
                    ad.style.imeMode = "auto";
                    if (g.hasSug) {
                        ad.setAttribute("autocomplete", "off")
                    } else {
                        ad.setAttribute("autocomplete", "on")
                    }
                    if (ad == g.iptCurTarget) {
                        ad.focus()
                    }
                }
            }
        }

        function v(af, ab) {
            var aa = [];
            if (ab) {
                aa = g.iptTargets
            } else {
                aa.push(af)
            }
            for (var ad = 0; ad < aa.length; ad++) {
                var ae = aa[ad];
                if (ae.tp == "input" || ae.tp == "textarea") {
                    var ac = false;
                    if (ae == document.activeElement) {
                        ac = true
                    }
                    if (ac) {
                        ae.blur()
                    }
                    ae.style.imeMode = "disabled";
                    ae.setAttribute("autocomplete", "off");
                    if (ac) {
                        ae.focus()
                    }
                }
            }
        }

        function V() {
            var ab = g.tools_ch;
            var aa = g.tools_pt;
            g.control.enterInput();
            if (g.status.ch) {
                g.status.ch = 0;
                g.status.pt = 0;
                g.toolbar.setModeOff(ab);
                g.toolbar.setModeOff(aa);
                g.inputpanel.hide()
            } else {
                g.status.ch = 1;
                g.status.pt = 1;
                g.toolbar.setModeOn(ab);
                g.toolbar.setModeOn(aa)
            }
            I()
        }

        function L() {
            var aa = g.tools_bc;
            if (g.status.bc) {
                g.status.bc = 0;
                g.toolbar.setModeOff(aa)
            } else {
                g.status.bc = 1;
                g.toolbar.setModeOn(aa)
            }
            I()
        }

        function u() {
            var aa = g.tools_pt;
            if (g.status.pt) {
                g.status.pt = 0;
                g.toolbar.setModeOff(aa)
            } else {
                g.status.pt = 1;
                g.toolbar.setModeOn(aa)
            }
            I()
        }

        function H() {
            z();
            g.pageT = setInterval(z, 300)
        }

        function z() {
            g.data.db.curpage--;
            if (g.data.db.curpage < 1) {
                g.data.db.curpage = 1;
                clearInterval(g.pageT)
            }
            g.needIptBack = false;
            g.inputpanel.setResults()
        }

        function x() {
            O();
            g.pageT = setInterval(O, 300)
        }

        function O() {
            g.data.db.curpage++;
            var ab = g.data.db.curpage;
            var aa = g.data.db.totalpage;
            if (ab >= aa) {
                g.data.db.curpage = aa;
                clearInterval(g.pageT)
            }
            if (g.data.db.enableGetData && ab == aa - 1) {
                g.data.param.bg += (4 * g.shownum);
                g.data.param.ed += (4 * g.shownum);
                g.tempsource = "";
                g.xpc.send();
                g.needIptBack = false
            } else {
                g.needIptBack = false;
                g.inputpanel.setResults()
            }
        }

        function N() {
            clearInterval(g.pageT)
        }

        function y(ad) {
            var ab = "";
            var ac = g.inputselected;
            for (var aa = 0; aa < ac.length; aa++) {
                ab += "<span class='bdime_ch'>" + ac.charAt(aa) + "</span>"
            }
            for (var aa = 0; aa < ad.length; aa++) {
                ab += "<span class='bdime_en'>" + ad.charAt(aa) + "</span>"
            }
            ab += g.cursorHtml;
            return ab
        }

        function G(aa) {
            return aa.replace(/<\/?[^>]+>/gi, "")
        }

        function Q() {
            var ab = g.panel_selector.getElementsByTagName("span");
            for (var aa = 0; aa < ab.length; aa++) {
                ab[aa].className = ""
            }
        }

        function S(aa, af) {
            if (af) {
                g.inputpanel.hide()
            }
            if (/^\w+\'+/.test(g.inputsource)) {
                aa = aa.replace(/\'/g, "");
                aa = U(aa)
            }
            var ad = g.iptCurTarget;
            if (ad.tp == "iframe") {
                var ah = ad.contentWindow.document;
                if (g.isIE) {
                    ad.contentWindow.focus();
                    var ac = ah.selection.createRange();
                    if (af) {
                        ac.pasteHTML(aa);
                        ac.collapse()
                    } else {
                        ac.select()
                    }
                } else {
                    ad.contentWindow.focus();
                    if (af) {
                        ah.execCommand("insertHTML", false, aa)
                    }
                }
            } else {
                if (ad.tp == "div" && !g.isIE) {
                    var ah = ad.ownerDocument;
                    if (aa != "") {
                        ah.execCommand("insertHTML", false, aa)
                    }
                }
                if (document.selection && !g.isOpera) {
                    ad.focus();
                    var ah = ad.ownerDocument;
                    var ac = ah.selection.createRange();
                    if (af) {
                        ac.text = aa;
                        ac.collapse()
                    }
                    ac.select()
                } else {
                    if (ad.selectionStart || ad.selectionStart > -1) {
                        ad.focus();
                        var ag = ad.scrollTop;
                        var ae = ad.selectionStart;
                        var ab = ad.selectionEnd;
                        if (af) {
                            var ai = ad.value;
                            ad.value = ai.substring(0, ae) + aa + ai.substring(ab, ai.length);
                            ad.selectionStart = ae + aa.length;
                            ad.selectionEnd = ae + aa.length
                        }
                        ad.scrollTop = ag
                    } else {
                        ad.focus();
                        ad.value += aa
                    }
                }
            }
        }

        function U(aa) {
            return aa.replace(/^\d\./, "")
        }

        function X() {
            if (g.needIptBack) {
                setTimeout(function () {
                    var aa = g.data.db.inputback;
                    if (aa != "") {
                        g.data.db.inputback = ""
                    }
                    g.panel_input.innerHTML = y(aa)
                }, 5)
            } else {
                g.panel_input.innerHTML = y(g.inputsource)
            }
        }

        function Y(ad) {
            g.pageTimes = 0;
            g.isSubAddr = false;
            if (g.selectLock) {
                return
            }
            g.selectLock = true;
            var aa = ad.getAttribute("sn");
            var af = "";
            if (aa > 0) {
                af = G(ad.innerHTML);
                af = U(af);
                g.inputselected += af
            }
            var ac = g.inputsource.replace(/\'/g, "");
            g.data.group.count++;
            if (aa < ac.length) {
                var ah = ac.substr(0, aa);
                g.data.group.en.push(ah);
                g.data.group.ch.push(af);
                var ab = ac.substr(aa, ac.length - 1);
                g.inputsource = ab;
                g.data.restData();
                g.needIptBack = true
            } else {
                g.data.group.en.push(g.inputsource);
                g.data.group.ch.push(af);
                if (g.keywatcher.checkSpecialStr(".")) {
                    g.data.group.count = 0
                }
                if (g.data.group.count > 1) {
                    g.data.setGroup(0, 0)
                } else {
                    var ae = ad.id;
                    var ag = ae.substr(ae.length - 1, 1);
                    g.data.sendGroupLog(g.data.db.curpage, ag)
                }
                g.inputsource = "";
                S(g.inputselected, true);
                g.inputselected = ""
            }
        }

        function w(ab) {
            var aa = k("bdime_selector_" + ab);
            if (aa) {
                Y(aa)
            }
        }

        function F(ab) {
            if (ab == "pre") {
                g.curSelectNum--;
                if (g.data.db.curpage == 1) {
                    if (g.curSelectNum == 0) {
                        g.curSelectNum = 1
                    }
                } else {
                    if (g.curSelectNum == 0) {
                        g.curSelectNum = g.shownum;
                        z()
                    }
                }
            } else {
                if (ab == "nxt") {
                    g.curSelectNum++;
                    if (g.data.db.curpage == g.data.db.totalpage) {
                        var aa = g.data.db.totalnum - (g.data.db.curpage - 1) * g.shownum;
                        if (g.curSelectNum > aa) {
                            g.curSelectNum = aa
                        }
                    } else {
                        if (g.curSelectNum > g.shownum) {
                            g.curSelectNum = 1;
                            O()
                        }
                    }
                }
            }
            Q();
            k("bdime_selector_" + g.curSelectNum).className = "bdime_selected"
        }

        function P(aa) {
            if (aa) {
                Y(aa)
            }
        }

        function K() {
            var aa = k("bdime_selector_" + g.curSelectNum);
            if (aa) {
                Y(aa)
            }
        }

        function B() {
            var aa = G(g.panel_input.innerHTML);
            if (aa != "") {
                g.data.group.en.push(aa);
                g.data.group.ch.push(aa);
                g.data.group.count = 0;
                g.data.sendGroupLog(0, 0);
                S(aa, true)
            }
        }

        function Z(ac) {
            g.pageTimes = 0;
            g.isSubAddr = false;
            var aa = false;
            var ae = g.inputsource;
            if (!/\'$/.test(ae)) {
                g.selectLock = true
            }
            var ad = k("bdime_cursor");
            var af = ad.previousSibling;
            var ab = ad.nextSibling;
            if (ac == "left") {
                if (af) {
                    if (af.innerHTML == "'" || af.className == "bdime_ch") {
                        aa = true;
                        g.selectLock = false
                    }
                    g.panel_input.removeChild(af)
                } else {
                    return
                }
            } else {
                if (ac == "right") {
                    if (ab) {
                        if (ab.innerHTML == "'" || ab.className == "bdime_ch") {
                            aa = true;
                            g.selectLock = false
                        }
                        g.panel_input.removeChild(ab)
                    } else {
                        return
                    }
                }
            }
            af = null;
            ab = null;
            E();
            g.needIptBack = false;
            if (g.inputsource == "") {
                if (g.inputselected == "") {
                    S("", true);
                    g.inputpanel.hide()
                } else {
                    aa = true;
                    g.selectLock = false;
                    g.data.setSpecialData()
                }
            }
            if (!(aa || /\'$/.test(ae))) {
                g.data.restData()
            }
        }

        function W(ai, ah) {
            g.pageTimes = 0;
            g.isSubAddr = false;
            var ac = k("bdime_cursor");
            var ag = ac.previousSibling;
            var ab = ac.nextSibling;
            if (ab && ab.className == "bdime_ch") {
                return
            }
            if (ai != "'") {
                g.selectLock = true
            } else {
                if (ab && ab.className == "bdime_en") {
                    return
                }
            }
            var aa = G(g.panel_input.innerHTML);
            if (aa.length >= 80) {
                g.selectLock = false;
                return
            }
            if (ah) {
                var ae = k("bdime_selector_" + g.curSelectNum);
                if (ae) {
                    ai = g.inputselected + U(G(ae.innerHTML)) + ai
                }
                S(ai, true)
            } else {
                if (g.status.on && !g.inputpanel.isShow) {
                    g.inputpanel.show()
                }
                for (var af = 0; af < ai.length; af++) {
                    var ad = n("span");
                    ad.innerHTML = ai.substr(af, 1);
                    ad.className = "bdime_en";
                    g.panel_input.insertBefore(ad, ac);
                    ad = null
                }
                E();
                g.needIptBack = false;
                if (ai != "'") {
                    g.data.restData()
                }
            }
        }

        function E() {
            var ad = "", aa = "";
            var ac = g.panel_input.getElementsByTagName("span");
            for (var ab = 0; ab < ac.length; ab++) {
                var ae = ac[ab];
                if (ae.className == "bdime_ch") {
                    ad += ae.innerHTML
                } else {
                    if (ae.className == "bdime_en") {
                        aa += ae.innerHTML
                    }
                }
            }
            g.inputselected = ad;
            g.inputsource = aa
        }

        function t(ab) {
            var ad = k("bdime_cursor");
            switch (ab) {
                case"left":
                    var ae = ad.previousSibling;
                    if (ae) {
                        g.panel_input.insertBefore(ad, ae)
                    }
                    ae = null;
                    break;
                case"right":
                    var aa = ad.nextSibling;
                    if (aa) {
                        g.panel_input.insertBefore(aa, ad)
                    }
                    aa = null;
                    break;
                case"home":
                    var ae = ad.previousSibling;
                    var ac = g.panel_input.childNodes[0];
                    if (ae && ac) {
                        g.panel_input.insertBefore(ad, ac)
                    }
                    ae = null;
                    break;
                case"end":
                    var aa = ad.nextSibling;
                    if (aa) {
                        g.panel_input.appendChild(ad)
                    }
                    aa = null;
                    break
            }
        }

        function M() {
            p(g.tools_close, "click", function () {
                C(1);
                r(0, 0, 0, 0, 0)
            });
            p(g.tools_off_logo, "click", function () {
                T(1);
                r(0, 1, 0, 0, 0)
            });
            p(g.tools_ch, "click", V);
            p(g.tools_bc, "click", L);
            p(g.tools_pt, "click", u);
            p(document, "mousedown", function (ad) {
                var ad = ad || window.event;
                var ac = ad.target || ad.srcElement;
                if (ac && ac.className == "bdime_link") {
                    setTimeout(function () {
                        d(g.bdime_menu)
                    }, 500)
                } else {
                    d(g.bdime_menu)
                }
                if (ac != g.iptCurTarget) {
                    g.runner.end()
                }
            });
            var aa = g.tools;
            p(aa, "mousedown", function () {
                setTimeout(function () {
                    S("", false)
                }, 10)
            });
            p(aa, "mouseover", function () {
                g.isBlur = false
            });
            p(aa, "mouseout", function () {
                g.isBlur = true
            });
            var ab = g.panel;
            p(ab, "mousedown", function () {
                setTimeout(function () {
                    S("", false)
                }, 10)
            });
            p(ab, "mouseover", function () {
                g.isBlur = false
            });
            p(ab, "mouseout", function () {
                g.isBlur = true
            });
            p(window, "resize", function () {
                g.inputpanel.setPosition();
                g.toolbar.setPosition()
            });
            if (g.status.on) {
                T(0)
            } else {
                C(0)
            }
        }

        return {
            init: M,
            modeCH: V,
            modeBC: L,
            modePT: u,
            inputLetter: W,
            setPagePre: z,
            setPageNxt: O,
            autoPagePre: H,
            autoPageNxt: x,
            stopAutoPage: N,
            setInput: X,
            arrSelResult: F,
            numSelResult: w,
            clkSelResult: P,
            spaSelResult: K,
            delLetter: Z,
            enterInput: B,
            toolsOff: C,
            openIme: J,
            closeIme: D,
            disableTargetIme: v,
            moveCursor: t
        }
    })();
    g.drag = (function () {
        var v = null;
        var x = null;
        var w = null;

        function y(F, E) {
            var E = E || window.event;
            var D = s(F);
            var C = z(E);
            return {x: C.x - D.x, y: C.y - D.y}
        }

        function z(E) {
            var C = document.documentElement, D = document.body;
            return {
                x: E.pageX || (E.clientX + C.scrollLeft || D.scrollLeft),
                y: E.pageY || (E.clientY + C.scrollTop || D.scrollTop)
            }
        }

        function A(F) {
            if (!v) {
                return false
            }
            var F = F || window.event;
            var M = z(F);
            var C = M.x - w.x;
            var J = M.y - w.y;
            var N = document.documentElement, O = document.body;
            var G = N.scrollLeft || O.scrollLeft;
            var L = N.scrollTop || O.scrollTop;
            var L = N.scrollTop || O.scrollTop;
            var D = N.clientWidth;
            var H = N.clientHeight;
            var I = v.offsetWidth;
            var E = v.offsetHeight;
            if (v == g.tools) {
                I = x == g.tools_off_drag ? 38 : 140;
                if (C < I) {
                    C = I
                }
                if (C > G + D - 50) {
                    C = G + D - 50
                }
                if (g.isIE == 6) {
                    if (J < L) {
                        J = L
                    } else {
                        if (J > L + H - E - 8) {
                            J = L + H - E - 8
                        }
                    }
                } else {
                    C -= G;
                    J -= L;
                    if (J < 0) {
                        J = 0
                    }
                    if (J > H - E - 8) {
                        J = H - E - 8
                    }
                }
            }
            if (v == g.panel) {
                var K = M.x;
                if (K < 5 || K > D - 5) {
                    return
                }
                if (J < L) {
                    J = L
                } else {
                    if (J > L + H - E) {
                        J = L + H - E
                    }
                }
            }
            v.style.left = C + "px";
            v.style.top = J + "px"
        }

        function B() {
            p(g.tools_drag, "mousedown", function (C) {
                v = g.tools;
                x = g.tools_drag;
                t(C)
            });
            p(g.tools_off_drag, "mousedown", function (C) {
                v = g.tools;
                x = g.tools_off_drag;
                t(C)
            });
            p(g.panel, "mousedown", function (C) {
                v = g.panel;
                x = g.panel;
                t(C)
            });
            p(document, "mouseup", u)
        }

        function t(C) {
            p(document, "mousemove", A);
            document.onselectstart = function (D) {
                return false
            };
            if (g.isFirefox) {
                document.body.style.MozUserSelect = "none"
            }
            if (v.setCapture) {
                v.setCapture()
            }
            w = y(v, C)
        }

        function u() {
            l(document, "mousemove", A);
            document.onselectstart = null;
            if (g.isFirefox) {
                document.body.style.MozUserSelect = ""
            }
            if (!v) {
                return false
            }
            if (v.releaseCapture) {
                v.releaseCapture()
            }
            v = null
        }

        return {init: B}
    })();
    g.inputwatcher = (function () {
        var z = false;
        var w = "";
        var v = "";
        var y = null;
        var u = null;

        function x() {
            v = g.inputsource.replace(/\'/g, "");
            if (w != v) {
                w = v;
                g.xpc.send()
            }
        }

        function t() {
            if (!z) {
                u = setInterval(x, 10);
                z = true
            }
        }

        function A() {
            if (z) {
                clearInterval(u);
                z = false
            }
        }

        return {on: t, off: A}
    })();
    g.keywatcher = (function () {
        var G = false;
        var M = false;
        var B = false;
        var w = false;
        var D = false;
        var x = false;
        var t = true;
        var y = true;
        var I = false;
        var P = false;
        var J = false;

        function O(T) {
            var T = T || window.event;
            var S = T.which ? T.which : T.keyCode;
            B = T.shiftKey || (S == 16);
            w = T.ctrlKey || (S == 17);
            D = T.altKey || (S == 18);
            x = T.metaKey || (S == 91);
            I = S == 16;
            if (w || D || x) {
                return
            }
            G = false;
            if (S >= 65 && S <= 90) {
                G = true
            }
            M = false;
            if (g.isFirefox) {
                S = N(S)
            }
            if (g.isOpera) {
                S = v(S);
                J = false
            }
            if ((S >= 65 && S <= 90) || (S >= 48 && S <= 57) || (S >= 96 && S <= 105) || S == 192 || S == 189 || S == 187 || S == 219 || S == 221 || S == 220 || S == 186 || S == 222 || S == 188 || S == 190 || S == 191 || S == 109 || S == 107 || S == 110 || S == 111 || S == 106 || S == 59 || S == 32) {
                M = true
            }
            var V = "";
            var U = false;
            if (M) {
                if (!G) {
                    E(T);
                    if (S >= 48 && S <= 57) {
                        if (g.inputpanel.isShow) {
                            if (B) {
                                V = g.status.pt ? a[S][5] : a[S][3];
                                U = true
                            } else {
                                if (g.keywatcher.checkAddr()) {
                                    V = a[S][0]
                                } else {
                                    g.control.numSelResult(String.fromCharCode(S));
                                    return false
                                }
                            }
                        } else {
                            if (B) {
                                var R = g.status.pt ? 5 : 3;
                                if (g.status.ch) {
                                    V = a[S][R]
                                } else {
                                    V = g.status.bc ? a[S][R] : a[S][4]
                                }
                            } else {
                                V = g.status.bc ? a[S][0] : a[S][2]
                            }
                            U = true
                        }
                    }
                    if (S >= 96 && S <= 105) {
                        V = g.status.bc ? a[S][0] : a[S][2];
                        U = true
                    }
                    switch (S) {
                        case 32:
                            if (B) {
                                return
                            }
                            if (g.inputpanel.isShow) {
                                g.control.spaSelResult();
                                return false
                            } else {
                                var R = g.status.pt ? 2 : 0;
                                V = g.status.bc ? a[S][R] : a[S][1];
                                U = true
                            }
                            break;
                        case 187:
                            if (B) {
                                var R = g.status.pt ? 5 : 3;
                                if (g.status.ch) {
                                    V = a[S][R]
                                } else {
                                    V = g.status.bc ? a[S][R] : a[S][4]
                                }
                                U = true
                            } else {
                                if (g.inputpanel.isShow) {
                                    g.control.stopAutoPage();
                                    g.control.setPageNxt();
                                    return false
                                } else {
                                    var R = g.status.pt ? 2 : 0;
                                    if (g.status.ch) {
                                        V = a[S][R]
                                    } else {
                                        V = g.status.bc ? a[S][R] : a[S][1]
                                    }
                                    U = true
                                }
                            }
                            break;
                        case 190:
                            if (B) {
                                var R = g.status.pt ? 5 : 3;
                                if (g.status.ch) {
                                    V = a[S][R]
                                } else {
                                    V = g.status.bc ? a[S][R] : a[S][4]
                                }
                                U = true
                            } else {
                                if (g.inputpanel.isShow) {
                                    if (H(".")) {
                                        V = a[S][0]
                                    } else {
                                        g.isSubAddr = g.pageTimes > 0 ? false : true;
                                        g.pageTimes++;
                                        g.control.stopAutoPage();
                                        g.control.setPageNxt();
                                        return false
                                    }
                                } else {
                                    var R = g.status.pt ? 2 : 0;
                                    if (g.status.ch) {
                                        V = a[S][R]
                                    } else {
                                        V = g.status.bc ? a[S][R] : a[S][1]
                                    }
                                    U = true
                                }
                            }
                            break;
                        case 189:
                        case 188:
                            if (B) {
                                var R = g.status.pt ? 5 : 3;
                                if (g.status.ch) {
                                    V = a[S][R]
                                } else {
                                    V = g.status.bc ? a[S][R] : a[S][4]
                                }
                                U = true
                            } else {
                                if (g.inputpanel.isShow) {
                                    if (S == 189 && H("-")) {
                                        V = a[S][0]
                                    } else {
                                        g.control.stopAutoPage();
                                        g.control.setPagePre();
                                        return false
                                    }
                                } else {
                                    var R = g.status.pt ? 2 : 0;
                                    if (g.status.ch) {
                                        V = a[S][R]
                                    } else {
                                        V = g.status.bc ? a[S][R] : a[S][1]
                                    }
                                    U = true
                                }
                            }
                            break;
                        case 106:
                        case 107:
                        case 109:
                        case 110:
                        case 111:
                            V = g.status.bc ? a[S][0] : a[S][1];
                            U = true;
                            break;
                        case 186:
                        case 191:
                        case 192:
                        case 219:
                        case 220:
                        case 221:
                            if (B) {
                                if (S == 186 && H(":")) {
                                    V = a[S][3];
                                    break
                                }
                                var R = g.status.pt ? 5 : 3;
                                if (g.status.ch) {
                                    V = a[S][R]
                                } else {
                                    V = g.status.bc ? a[S][R] : a[S][4]
                                }
                            } else {
                                if (S == 191 && H("/")) {
                                    V = a[S][0];
                                    break
                                }
                                var R = g.status.pt ? 2 : 0;
                                if (g.status.ch) {
                                    V = a[S][R]
                                } else {
                                    V = g.status.bc ? a[S][R] : a[S][1]
                                }
                            }
                            U = true;
                            break;
                        case 222:
                            if (B) {
                                var R = y ? 6 : 7;
                                V = g.status.pt ? a[S][R] : (g.status.bc ? a[S][4] : a[S][5]);
                                if (g.status.pt) {
                                    y = y ? false : true
                                }
                                U = true
                            } else {
                                if (g.inputpanel.isShow) {
                                    V = a[S][0]
                                } else {
                                    var R = t ? 2 : 3;
                                    V = g.status.pt ? a[S][R] : (g.status.bc ? a[S][0] : a[S][1]);
                                    if (g.status.pt) {
                                        t = t ? false : true
                                    }
                                    U = true
                                }
                            }
                            break
                    }
                    g.control.inputLetter(V, U)
                }
            } else {
                if (g.inputpanel.isShow) {
                    if (S == 8) {
                        if (!g.isOpera) {
                            E(T);
                            g.control.delLetter("left")
                        }
                    }
                    if (S == 13) {
                        if (g.inputpanel.isShow) {
                            P = true
                        }
                        E(T);
                        g.control.enterInput()
                    }
                    if (S == 27) {
                        E(T);
                        g.inputpanel.hide()
                    }
                    if (S == 33) {
                        E(T);
                        g.control.stopAutoPage();
                        g.control.setPagePre()
                    }
                    if (S == 34) {
                        E(T);
                        g.control.stopAutoPage();
                        g.control.setPageNxt()
                    }
                    if (S == 38) {
                        if (!g.isOpera) {
                            E(T);
                            g.control.arrSelResult("pre")
                        }
                    }
                    if (S == 40) {
                        if (!g.isOpera) {
                            E(T);
                            g.control.arrSelResult("nxt")
                        }
                    }
                    if (S == 37) {
                        if (!g.isOpera) {
                            E(T);
                            g.control.moveCursor("left")
                        }
                    }
                    if (S == 39) {
                        if (!g.isOpera) {
                            E(T);
                            g.control.moveCursor("right")
                        }
                    }
                    if (S == 36) {
                        E(T);
                        g.control.moveCursor("home")
                    }
                    if (S == 35) {
                        E(T);
                        g.control.moveCursor("end")
                    }
                    if (S == 46) {
                        if (g.isOpera) {
                            J = true
                        } else {
                            E(T);
                            g.control.delLetter("right")
                        }
                    }
                }
            }
        }

        function H(T) {
            var R = false;
            var S = g.inputsource;
            if (g.inputpanel.isShow) {
                switch (T) {
                    case"-":
                    case".":
                        R = /^(((https?|ftp)\:\/{2}[a-z0-9])|w{3})|\./i.test(S);
                        break;
                    case":":
                        R = /^(https?|ftp)(?!\:)/i.test(S);
                        break;
                    case"/":
                        R = /^(https?|ftp)\:\/?/i.test(S);
                        break
                }
            }
            return R
        }

        function L() {
            return /(((https?|ftp)\:)|w{3}\.|\.)/i.test(g.inputsource)
        }

        function K(S) {
            var S = S || window.event;
            var R = S.which ? S.which : S.keyCode;
            if (B && R == 32) {
                g.control.modeBC();
                I = false
            }
            if (I && R == 16 && !(S.ctrlKey || S.altKey)) {
                g.control.modeCH()
            }
            if ((w && B) || (D && B) || (w && R == 32)) {
                g.control.toolsOff(1);
                r(0, 0, 0, 0, 0)
            }
            if (w && R == 190) {
                g.control.modePT()
            }
        }

        function z(S) {
            var S = S || window.event;
            var R = S.which ? S.which : S.keyCode;
            var U = "";
            var T = false;
            if (G && !(w || D || x)) {
                if ((R >= 97 && R <= 122)) {
                    if (g.status.ch) {
                        U = a[R - 32][0];
                        if (g.isSubAddr && g.inputsource != "") {
                            if (!/\'$/.test(g.inputsource)) {
                                U = "." + U
                            }
                            g.isSubAddr = false
                        }
                    } else {
                        U = g.status.bc ? a[R - 32][0] : a[R - 32][1];
                        T = true
                    }
                } else {
                    U = g.status.bc ? a[R][3] : a[R][4];
                    T = true
                }
                E(S);
                g.control.inputLetter(U, T)
            }
            if (g.isOpera) {
                if (M && !G) {
                    E(S)
                }
                if (P && R == 13) {
                    P = false;
                    E(S)
                }
                if (g.inputpanel.isShow) {
                    if (R == 8) {
                        E(S);
                        g.control.delLetter("left")
                    }
                    if (R == 38) {
                        E(S);
                        g.control.arrSelResult("pre")
                    }
                    if (R == 40) {
                        E(S);
                        g.control.arrSelResult("nxt")
                    }
                    if (R == 37) {
                        E(S);
                        g.control.moveCursor("left")
                    }
                    if (R == 39) {
                        E(S);
                        g.control.moveCursor("right")
                    }
                    if (R == 46 && J) {
                        E(S);
                        g.control.delLetter("right")
                    }
                }
            }
        }

        function N(S) {
            var R = S;
            if (S == 59) {
                R = 186
            } else {
                if (S == 107) {
                    R = 187
                } else {
                    if (S == 109) {
                        R = 189
                    }
                }
            }
            return R
        }

        function v(S) {
            var R = S;
            if (S == 42) {
                R = 106
            } else {
                if (S == 43) {
                    R = 107
                } else {
                    if (S == 45) {
                        R = 109
                    } else {
                        if (S == 59) {
                            R = 186
                        } else {
                            if (S == 61) {
                                R = 187
                            } else {
                                if (S == 109) {
                                    R = 189
                                }
                            }
                        }
                    }
                }
            }
            return R
        }

        function E(R) {
            g.isIE ? R.returnValue = false : R.preventDefault()
        }

        function A(R) {
            l(R, "keydown", O);
            l(R, "keyup", K);
            l(R, "keypress", z)
        }

        function F(R) {
            p(R, "keydown", g.keywatcher.keydownhandler);
            p(R, "keyup", g.keywatcher.keyuphandler);
            p(R, "keypress", g.keywatcher.keypresshandler)
        }

        function u(R) {
            if (R.contentDocument && !g.isIE) {
                R = R.contentWindow
            } else {
                if (R.contentWindow.document) {
                    R = R.contentWindow.document
                }
            }
            return R
        }

        function C() {
            Q();
            var R = g.iptCurTarget;
            if (R) {
                if (R.tp == "iframe") {
                    R = u(R)
                }
                F(R)
            }
        }

        function Q() {
            var R = g.iptCurTarget;
            if (R) {
                if (R.tp == "iframe") {
                    R = u(R)
                }
                A(R)
            }
        }

        return {
            on: C,
            off: Q,
            keydownhandler: O,
            keypresshandler: z,
            keyuphandler: K,
            addKeyEvent: F,
            rmKeyEvent: A,
            checkAddr: L,
            checkSpecialStr: H
        }
    })();
    g.data = (function () {
        var u = "http://olime.baidu.com/py";
        var E = "http://olime.baidu.com/userlog";
        var z = {
            input: "",
            inputtype: "py",
            bg: 0,
            ed: (4 * g.shownum),
            result: "hanzi",
            resultcoding: "unicode",
            ch_en: 0,
            clientinfo: "web",
            version: 1
        };
        var K = {totalnum: 0, totalpage: 1, curpage: 1, data: [], enableGetData: true, inputback: ""};
        var B = {count: 0, en: [], ch: []};
        var H = [];
        var v = [];

        function L() {
            B.count = 0;
            B.en = [];
            B.ch = []
        }

        function F(T, O) {
            var N = g.data.group.en.join("");
            N = N.replace(/\'/g, "");
            var M = g.data.group.ch.join("");
            var R = N.length;
            var Q = [N, M, R];
            var U = H.length;
            var S = false;
            if (U >= 20) {
                H.shift()
            }
            if (U == 0) {
                H.push(Q)
            } else {
                for (var P = 0; P < H.length; P++) {
                    if (H[P][0] == Q[0]) {
                        H[P][1] = Q[1];
                        S = true;
                        break
                    }
                }
                if (!S) {
                    H.push(Q)
                }
            }
            C(T, O)
        }

        function C(M, N) {
        }

        function G(M) {
            if (M == "") {
                return ""
            }
            for (var N = 0; N < H.length; N++) {
                if (H[N][0] == M) {
                    return [H[N][1], H[N][2]]
                }
            }
        }

        function y(P) {
            var M = [];
            for (var O in P) {
                M.push(O + "=" + encodeURIComponent(P[O]))
            }
            var N = u + "?" + M.join("&");
            if (g.usr) {
                N += "&usr=" + encodeURIComponent(g.usr)
            }
            return N
        }

        function x(Q) {
            if (!Q || (Q.status == "F") || (Q.errno != "0")) {
                return false
            }
            Q.result && (Q = Q.result);
            if (!Q[0]) {
                Q[0] = [];
                Q[1] = ""
            }
            if (Q[0].length == 0) {
                K.enableGetData = false;
                if (K.totalnum == 0) {
                    Q[0].push([g.inputsource, g.inputsource.length]);
                    Q[1] = g.inputsource
                }
            }
            if (g.keywatcher.checkAddr()) {
                Q[0].length = 1
            }
            var P = g.inputsource;
            var O = Q[1];
            P = P.replace(/\'/g, "");
            O = O.replace(/\'/g, "");
            if (O != P) {
            }
            if (!K.data[0]) {
                v = [];
                Q[0] = I(Q[0]);
                var R = G(P);
                if (R) {
                    var N = Q[0];
                    if (!N) {
                        N.unshift(R)
                    } else {
                        var S = -1;
                        for (var M = 0; M < N.length; M++) {
                            if (N[M][0] == R[0]) {
                                S = M;
                                break
                            }
                        }
                        if (S >= 0) {
                            N.splice(M, 1)
                        }
                        N.unshift(R)
                    }
                    Q[0] = N
                }
            }
            K.totalnum += Q[0].length;
            K.totalpage = Math.ceil(K.totalnum / g.shownum);
            K.data = K.data.concat(Q[0]);
            K.inputback = Q[1];
            g.inputpanel.setResults()
        }

        function J() {
            K.curpage = 1;
            K.totalnum = 1;
            K.totalpage = 1;
            K.data = [[g.inputselected, 0], ""];
            g.inputpanel.setResults()
        }

        function I(M) {
            for (var N = 0; N < M.length; N++) {
                if (!t(M[N])) {
                    v.push(M[N])
                }
            }
            return v
        }

        function t(N) {
            for (var M = 0; M < v.length; M++) {
                if (v[M][0] == N[0]) {
                    return true
                }
            }
            return false
        }

        function A() {
            z.bg = 0;
            z.ed = (4 * g.shownum);
            K.totalnum = 0;
            K.totalpage = 1;
            K.curpage = 1;
            K.data = [];
            K.enableGetData = true;
            g.curSelectNum = 1
        }

        function D() {
            var M = g.inputsource.replace(/\'/g, "");
            if (g.tempsource == M) {
                return
            } else {
                g.tempsource = M
            }
            var N = g.inputsource;
            N = N.replace(/(\')+/g, "$1");
            if (g.inputselected != "") {
                N = N.replace(/\'/g, "")
            }
            N = N.replace(/\'$/g, "");
            z.input = N;
            if (z.input != "") {
                return y(z)
            } else {
                return ""
            }
        }

        function w(N) {
            var M = {};
            try {
                M = (new Function("return " + N))()
            } catch (O) {
            }
            g.data.setData(M)
        }

        return {
            getData: D,
            setData: x,
            restData: A,
            setTempData: w,
            setSpecialData: J,
            db: K,
            param: z,
            group: B,
            setGroup: F,
            resetGroup: L,
            sendGroupLog: C
        }
    })();
    var j = q.create();
    j.prototype = {
        initialize: function () {
            this.swfUrl = "http://www.baidu.com/olime/ime.swf";
            try {
                if (/(\d+\.\d)/.test(external.max_version)) {
                    this.swfUrl += "?t=" + new Date().getTime()
                }
            } catch (t) {
            }
            if (window.postMessage) {
                this.url = "http://olime.baidu.com/bdime.html";
                this.guid = "bdime_py";
                this.domain = this.getDomain();
                this.initFrame()
            } else {
                this.supportFlash = h();
                if (this.supportFlash) {
                    this.swf = null;
                    this.initFlash()
                } else {
                    this.ready()
                }
            }
        }, getDomain: function () {
            var t = n("A");
            t.href = this.url;
            var u = t.protocol.replace(":", "") + "://" + t.hostname.replace(/\:\d+/, "") + (t.port == "" || t.port == 0 || (parseInt(t.port) == 80) ? "" : ":" + t.port);
            return u
        }, initFrame: function () {
            if (document.body) {
                this.win = this.createIframe(this.url, this, this.init)
            } else {
                var t = this;
                p(window, "load", function () {
                    t.win = t.createIframe(t.url, t, t.init)
                })
            }
        }, initFlash: function () {
            var v = document.createElement("div");
            document.body.appendChild(v);
            v.style.position = "absolute";
            v.style.bottom = 0;
            v.innerHTML = '<object width="1" height="1" id="IME_flash" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"><param value="' + this.swfUrl + '" name="movie"><param name="allowScriptAccess" value="always"><embed width="1" height="1" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" name="IME_flash"  allowScriptAccess="always" src="' + this.swfUrl + '"></object>';
            var t = this;
            var u = setInterval(function () {
                var w = document.IME_flash || k("IME_flash");
                if (w && w.flashReady && w.flashReady()) {
                    t.swf = w;
                    t.ready();
                    clearInterval(u)
                }
            }, 10)
        }, createIframe: function (t, v, u) {
            ifr = n("IFRAME");
            ifr.src = t + "?prd=" + document.domain;
            ifr.id = v.guid;
            ifr.name = v.guid;
            ifr.style.display = "none";
            document.body.appendChild(ifr);
            p(ifr, "load", function () {
                u.call(v)
            });
            return ifr.contentWindow
        }, init: function (u) {
            var t = this;
            if (window.postMessage) {
                p(window, "message", function (v) {
                    t.onMessage(v)
                })
            }
            t.ready()
        }, ready: function () {
            var t = "bdime_xpc_loaded";
            this.send(t)
        }, send: function (w) {
            var t = w ? w : g.data.getData();
            if (!t) {
                return
            }
            if (window.postMessage) {
                this.win.postMessage(t, this.domain)
            } else {
                if (w == "bdime_xpc_loaded") {
                    g.runner.begin()
                } else {
                    if (this.supportFlash) {
                        this.swf.abortAll();
                        this.swf.getURL(t, "", "bdime.data.setTempData")
                    } else {
                        var u = "bdime_data_script";
                        if (k(u)) {
                            document.body.removeChild(k(u))
                        }
                        var v = document.createElement("SCRIPT");
                        v.setAttribute("id", u);
                        v.src = t + "&callback=bdime.data.setData";
                        document.body.appendChild(v)
                    }
                }
            }
        }, onMessage: function (u) {
            u = u || window.event;
            if (u.origin == this.domain) {
                var t = u.data;
                if (u.data == "bdime_xpc_loaded") {
                    g.runner.begin()
                } else {
                    g.data.setTempData(u.data)
                }
            }
        }
    };
    g.runner = (function () {
        var G = null, J = null;

        function y(M) {
            if (g.isClose) {
                return
            }
            var M = M || window.event;
            var L = M.target || M.srcElement;
            if (typeof(L.tagName) == "undefined") {
                g.iptCurTarget = L.frameElement
            } else {
                g.iptCurTarget = L
            }
            if (g.isIE && L.tp == "iframe") {
                L = L.contentWindow.document
            }
            if (g.status.on) {
                g.keywatcher.rmKeyEvent(L);
                g.keywatcher.addKeyEvent(L)
            }
            g.toolbar.show()
        }

        function z(M) {
            if (g.isClose) {
                return
            }
            var M = M || window.event;
            var L = M.target || M.srcElement;
            if (g.isIE && L.tp == "iframe") {
                L = L.contentWindow.document
            }
            g.keywatcher.rmKeyEvent(L);
            g.toolbar.hide()
        }

        function E(M) {
            if (g.inputs.length > 0) {
                var L = g.inputs;
                for (var N = 0; N < L.length; N++) {
                    var O;
                    if (typeof L[N] == "string") {
                        O = k(L[N])
                    } else {
                        if (typeof L[N] == "object") {
                            O = L[N]
                        } else {
                            break
                        }
                    }
                    if (O && O.tagName && O.tagName.toLowerCase() == "input" && (O.type == "text" || O.type == "search") && C(O)) {
                        t(O, "input")
                    } else {
                        if (O && O.tagName && O.tagName.toLowerCase() == "textarea" && C(O)) {
                            t(O, "textarea")
                        } else {
                            if (O && O.tagName && O.tagName.toLowerCase() == "div" && O.contentEditable.toString() == "true" && typeof(O.ex) == "undefined") {
                                t(O, "div")
                            } else {
                                if (O && O.tagName && O.tagName.toLowerCase() == "iframe" && typeof(O.ex) == "undefined") {
                                    setTimeout(function () {
                                        try {
                                            var R, Q;
                                            if (O.contentDocument && !g.isIE) {
                                                R = O.contentDocument;
                                                Q = O.contentWindow
                                            } else {
                                                if (O.contentWindow.document) {
                                                    R = O.contentWindow.document;
                                                    Q = O
                                                }
                                            }
                                            if (R) {
                                                if (R.designMode.toLowerCase() == "on" || R.body.contentEditable.toString() == "true") {
                                                    g.iptTargets.push(O);
                                                    O.tp = "iframe";
                                                    O.ex = true;
                                                    p(Q, "focus", y);
                                                    p(Q, "blur", z)
                                                }
                                            }
                                        } catch (P) {
                                        }
                                    }, 10)
                                }
                            }
                        }
                    }
                }
            } else {
                w(M);
                if (g.isIE) {
                    p(M, "activate", function () {
                        w(M)
                    })
                } else {
                    p(M, "DOMNodeInserted", function () {
                        w(M)
                    })
                }
            }
        }

        function t(M, L) {
            g.iptTargets.push(M);
            M.tp = L;
            M.ex = true;
            if (g.status.on) {
                g.control.disableTargetIme(M, false)
            }
            p(M, "focus", y);
            p(M, "blur", z)
        }

        function w(L) {
            if (g.isClose) {
                return
            }
            G = setTimeout(function () {
                if (!g.inputpanel.isShow) {
                    I(L);
                    B(L);
                    setTimeout(function () {
                        A(L)
                    }, 200);
                    u(L)
                }
            }, 20)
        }

        function C(L) {
            if (typeof(L.ex) == "undefined" && f(L, "ime-mode") != "disabled" && !L.readOnly && !L.disabled) {
                return true
            }
            return false
        }

        function I(M) {
            var L = M.getElementsByTagName("input");
            for (var N = 0; N < L.length; N++) {
                var O = L[N];
                if ((O.type == "text" || O.type == "search") && C(O)) {
                    t(O, "input")
                }
            }
        }

        function B(M) {
            var L = M.getElementsByTagName("textarea");
            for (var N = 0; N < L.length; N++) {
                var O = L[N];
                if (C(O)) {
                    t(O, "textarea")
                }
            }
        }

        function A(M) {
            var L = M.getElementsByTagName("iframe");
            for (var N = 0; N < L.length; N++) {
                var P = L[N];
                if (P.id == "bdime_py" || (typeof(P.ex) != "undefined")) {
                    continue
                }
                try {
                    var R, Q;
                    if (P.contentDocument && !g.isIE) {
                        R = P.contentDocument;
                        Q = P.contentWindow
                    } else {
                        if (P.contentWindow.document) {
                            R = P.contentWindow.document;
                            Q = P
                        }
                    }
                    if (R) {
                        if (R.designMode.toLowerCase() == "on" || R.body.contentEditable.toString() == "true") {
                            g.iptTargets.push(P);
                            P.tp = "iframe";
                            P.ex = true;
                            p(Q, "focus", y);
                            p(Q, "blur", z)
                        } else {
                            E(R)
                        }
                    }
                } catch (O) {
                }
            }
        }

        function u(M) {
            var L = M.getElementsByTagName("div");
            for (var N = 0; N < L.length; N++) {
                var O = L[N];
                if (O.id == "bdime_py" || (typeof(O.ex) != "undefined")) {
                    continue
                }
                if (O.contentEditable.toString() == "true") {
                    g.iptTargets.push(O);
                    O.tp = "div";
                    O.ex = true;
                    p(O, "focus", y);
                    p(O, "blur", z)
                }
            }
        }

        function K() {
            if (J) {
                return
            }
            J = setInterval(D, 50)
        }

        function v() {
            if (!J) {
                return
            }
            clearInterval(J);
            J = null
        }

        function D() {
            if (g.isClose) {
                return
            }
            var O = document.activeElement;
            if (g.toolbar.isShow) {
                return
            }
            if (O && O.tagName) {
                var L = O.tagName.toLowerCase();
                if ((L == "input" && (O.type == "text" || O.type == "search") || L == "textarea") && !O.readOnly && !O.disabled && typeof(O.ex) != "undefined") {
                    g.iptCurTarget = O;
                    if (g.status.on) {
                        g.keywatcher.rmKeyEvent(O);
                        g.keywatcher.addKeyEvent(O)
                    }
                    g.toolbar.show()
                } else {
                    if (L == "iframe") {
                        var N, M;
                        if (O.contentDocument && !g.isIE) {
                            N = O.contentDocument;
                            M = O.contentWindow
                        } else {
                            if (O.contentWindow.document) {
                                N = O.contentWindow.document;
                                M = N
                            }
                        }
                        if (N && (N.designMode.toLowerCase() == "on" || N.body.contentEditable.toString() == "true")) {
                            g.iptCurTarget = O;
                            if (g.status.on) {
                                g.keywatcher.addKeyEvent(M)
                            }
                            g.toolbar.show()
                        }
                    }
                }
            }
        }

        function H() {
            E(document);
            g.build.init();
            g.toolbar.init();
            g.drag.init();
            g.control.init();
            K();
            var L = (new Date()).getTime();
            r(L - c, g.status.on, g.status.ch, g.status.bc, g.status.pt)
        }

        function x(M) {
            if (M) {
                var M = M || window.event;
                var L = M.target || M.srcElement;
                if (L == g.iptCurTarget) {
                    return false
                }
            }
            if (g.isBlur) {
                setTimeout(function () {
                    if (g.inputpanel.isShow) {
                        g.inputpanel.hide()
                    }
                }, 50)
            }
        }

        function F() {
            if (typeof bdime_option == "object") {
                var P = bdime_option;
                var S = P.on, L = P.ch, R = P.bc, V = P.pt, N = P.domain, O = P.username, Q = P.targets, T = P.links, U = P.calls, M = P.hasSug;
                if (S === true || S === false) {
                    g.status.on = S === true ? 1 : 0
                }
                if (L === true || L === false) {
                    g.status.ch = L === true ? 1 : 0
                }
                if (R === true || R === false) {
                    g.status.bc = R === true ? 1 : 0
                }
                if (V === true || V === false) {
                    g.status.pt = V === true ? 1 : 0
                }
                if (N) {
                    g.domain = N
                }
                if (O) {
                    g.usr = O
                }
                if (typeof Q == "object") {
                    g.inputs = Q
                }
                if (T && T.feedback) {
                    g.feedbackLink = T.feedback
                }
                if (U) {
                    if (U.panelShow) {
                        g.panelShow = U.panelShow
                    }
                    if (U.panelHide) {
                        g.panelHide = U.panelHide
                    }
                }
                if (M) {
                    g.hasSug = M
                }
            }
            g.xpc = new j();
            p(window, "unload", function () {
                for (var W in g) {
                    delete g[W]
                }
                window.bdime = null
            })
        }

        return {init: F, startAutoFocus: K, stopAutoFocus: v, begin: H, end: x}
    })();
    g.runner.init();
    window.bdime = g;
    window.bdime.data.setTempData = g.data.setTempData;
    g.open = g.control.openIme;
    g.close = g.control.closeIme
})();