'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var classnames = {exports: {}};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
}(classnames));

var classNames = classnames.exports;

var CalendarColumn = function (_a) {
    var className = _a.className, date = _a.date, label = _a.label;
    var handleColumnClick = function (date) {
    };
    return (jsxRuntime.jsx("button", __assign({ className: classNames("ra-calendar-column", className), onClick: function () { return handleColumnClick(); } }, { children: label }), date.format("YYYY-MM-DDTHH:mm:ssZ")));
};

var CalendarBody = function (_a) {
    _a.appointments; var dateRange = _a.dateRange;
    return (jsxRuntime.jsx("div", __assign({ className: "ra-calendar-body" }, { children: dateRange.items.map(function (column) { return (jsxRuntime.jsx(CalendarColumn, __assign({}, column), column.key)); }) })));
};

var dayjs_min = {exports: {}};

(function (module, exports) {
!function(t,e){module.exports=e();}(commonjsGlobal,(function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return "["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return -t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return +(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return {M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p=function(t){return t instanceof _},S=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else {var a=e.name;D[a]=e,i=a;}return !r&&i&&(g=i),i||!r&&g},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=v;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t);}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init();},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},m.$utils=function(){return O},m.isValid=function(){return !(this.$d.toString()===l)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),l=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(h){case c:return r?l(1,0):l(31,11);case f:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),l=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d;}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,l=this;r=Number(r);var $=O.p(h),y=function(t){var e=w(l);return O.w(e.date(e.date()+Math.round(t*r)),l)};if($===f)return this.set(f,this.$M+r);if($===c)return this.set(c,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||$[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,v=this-M,g=O.m(this,M);return g=($={},$[c]=g/12,$[f]=g,$[h]=g/3,$[o]=(v-m)/6048e5,$[a]=(v-m)/864e5,$[u]=v/n,$[s]=v/e,$[i]=v/t,$)[y]||v,l?g:O.a(g)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),T=_.prototype;return w.prototype=T,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){T[t[1]]=function(e){return this.$g(e,t[0],t[1])};})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=D[g],w.Ls=D,w.p={},w}));
}(dayjs_min));

var dayjs = dayjs_min.exports;

var CalendarHeader = function (_a) {
    var dateRange = _a.dateRange, rangeType = _a.rangeType;
    return (jsxRuntime.jsxs("header", __assign({ className: "ra-calendar-header" }, { children: [rangeType !== "month" ? (jsxRuntime.jsx("div", { className: "ra-calendar-header__item ra-calendar-header__item--blank" })) : null, dateRange.headers.map(function (item) { return (jsxRuntime.jsxs("div", __assign({ className: classNames("ra-calendar-header__item", { "ra-calendar-header__item--current": dayjs().format("DD MM YY") === item.date.format("DD MM YY") }) }, { children: [jsxRuntime.jsx("p", __assign({ className: "ra-calendar-header__primary-label" }, { children: item.primaryLabel })), item.secondaryLabel ? (jsxRuntime.jsx("p", __assign({ className: "ra-calendar-header__secondary-label" }, { children: item.secondaryLabel }))) : null] }), item.primaryLabel + item.secondaryLabel)); })] })));
};

var Calendar = function (_a) {
    var appointments = _a.appointments, dateRange = _a.dateRange, rangeType = _a.rangeType, times = _a.times;
    return (jsxRuntime.jsxs("div", __assign({ className: classNames("ra-calendar", "ra-calendar--".concat(rangeType)) }, { children: [jsxRuntime.jsx(CalendarHeader, { dateRange: dateRange, rangeType: rangeType }), jsxRuntime.jsx(CalendarBody, { appointments: appointments, dateRange: dateRange, rangeType: rangeType, times: times })] })));
};

var generateTimedColumns = function (headers, times, rangeType) {
    var items = [];
    var endTime = dayjs().startOf("day").add(times.end, "hour");
    var tempTime = dayjs().startOf("day").add(times.start, "hour");
    var _loop_1 = function () {
        var columns = [{
                className: "ra-calendar-column--time",
                date: tempTime,
                key: tempTime.format("YYYYMMDDHH:mm") + "-label",
                label: tempTime.format("HH:mm a"),
            }];
        if (rangeType === "week") {
            headers.forEach(function (header) {
                var newTime = header.date.add(tempTime.get("hour"), "hour").add(tempTime.get("minute"), "minute");
                columns.push({
                    date: newTime,
                    key: newTime.format("YYYYMMDDHH:mm"),
                });
            });
            items = items.concat(columns);
        }
        else {
            columns.push({
                date: tempTime,
                key: tempTime.format("YYYYMMDDHHmm"),
            });
            items = items.concat(columns);
        }
        tempTime = tempTime.add(times.intervals.value, times.intervals.unit);
    };
    while (tempTime.isBefore(endTime) || tempTime.isSame(endTime)) {
        _loop_1();
    }
    return items;
};
var getDay = function (day, times, rangeType) {
    if (day === void 0) { day = dayjs(); }
    var dayRange = {
        headers: [],
        items: [],
    };
    dayRange.headers = [{
            primaryLabel: day.format("DD"),
            secondaryLabel: day.format("ddd"),
            date: day,
        }];
    dayRange.items = generateTimedColumns(dayRange.headers, times, rangeType);
    return dayRange;
};
var getWeekRange = function (times, rangeType, startDate, endDate) {
    if (startDate === void 0) { startDate = dayjs().startOf("week"); }
    if (endDate === void 0) { endDate = dayjs().endOf("week"); }
    var week = {
        headers: [],
        items: [],
    };
    var tempDate = startDate;
    while (tempDate.isBefore(endDate) || tempDate.isSame(endDate)) {
        week.headers.push({
            primaryLabel: tempDate.format("DD"),
            secondaryLabel: tempDate.format("ddd"),
            date: tempDate,
        });
        tempDate = tempDate.add(1, "day");
    }
    week.items = generateTimedColumns(week.headers, times, rangeType);
    return week;
};
var getMonthRange = function (startDate, endDate) {
    if (startDate === void 0) { startDate = dayjs().startOf("month"); }
    if (endDate === void 0) { endDate = dayjs().endOf("month"); }
    var month = {
        headers: [],
        items: [],
    };
    startDate = startDate.startOf("month");
    endDate = endDate.endOf("month");
    var tempStartDate = startDate.startOf("month");
    var tempEndDate = endDate.endOf("month");
    var tempDate = startDate.startOf("month");
    if (tempDate.day() < 1) {
        tempDate = tempDate.add(1, "day");
    }
    else if (tempDate.day() > 1) {
        tempDate = tempDate.subtract(tempDate.day(), "day").add(1, "day");
    }
    if (tempEndDate.day() < 1) {
        tempEndDate = tempEndDate.add(1, "day");
    }
    else if (tempEndDate.day()) {
        tempEndDate = tempEndDate.endOf("week").add(1, "day");
    }
    var _loop_2 = function () {
        var formattedDay = tempDate.format("ddd");
        if (!month.headers.find(function (item) { return item.primaryLabel === formattedDay; })) {
            month.headers.push({ primaryLabel: formattedDay, date: tempDate });
        }
        var column = {
            date: tempDate,
            key: tempDate.format("YYYY-MM-DD HH:mm"),
            label: tempDate.format("DD"),
        };
        if (tempDate.isBefore(tempStartDate) || tempDate.isAfter(endDate)) {
            column.className = "ra-calendar-column--blur";
        }
        else if (tempDate.isSame(dayjs())) {
            column.className = "ra-calendar-column--blur";
        }
        month.items.push(column);
        tempDate = tempDate.add(1, "day");
    };
    while (tempDate.isBefore(tempEndDate) || tempDate.isSame(tempEndDate)) {
        _loop_2();
    }
    return month;
};
var getRange = function (rangeType, times, startDate, endDate) {
    if (startDate === void 0) { startDate = dayjs().startOf("week"); }
    if (endDate === void 0) { endDate = dayjs().endOf("week"); }
    if (rangeType === "day")
        return getDay(dayjs(), times, rangeType);
    if (rangeType === "week")
        return getWeekRange(times, rangeType, startDate, endDate);
    return getMonthRange(startDate, endDate);
};

var optionLabels = ["Day", "Week", "Month"];
var Header = function (_a) {
    var handleRangeChange = _a.handleRangeChange, rangeType = _a.rangeType;
    return (jsxRuntime.jsxs("header", __assign({ className: "ra-header" }, { children: [jsxRuntime.jsx("div", __assign({ className: "ra-header__range" }, { children: jsxRuntime.jsx("p", { children: "< 11 - 17 FEBRUARY 2023 >" }) })), jsxRuntime.jsx("div", __assign({ className: "ra-header__options" }, { children: optionLabels.map(function (label) { return (jsxRuntime.jsx("button", __assign({ className: classNames("ra-header__option", { "ra-header__option--active": label.toLowerCase() === rangeType }), onClick: function () { return handleRangeChange(label.toLowerCase()); } }, { children: label }), label)); }) }))] })));
};

var ReactAppoint = function (_a) {
    var appointments = _a.appointments, _b = _a.defaultViewType, defaultViewType = _b === void 0 ? "month" : _b, _c = _a.times, times = _c === void 0 ? {
        start: 9,
        end: 17,
        intervals: {
            unit: "h",
            value: 1,
        },
    } : _c;
    var _d = react.useState(defaultViewType), rangeType = _d[0], setRangeType = _d[1];
    var dateRange = react.useMemo(function () {
        return getRange(rangeType, times);
    }, [rangeType]);
    return (jsxRuntime.jsxs("div", __assign({ className: "ra-container" }, { children: [jsxRuntime.jsx(Header, { rangeType: rangeType, handleRangeChange: setRangeType }), jsxRuntime.jsx(Calendar, { appointments: appointments, rangeType: rangeType, dateRange: dateRange, times: times })] })));
};

exports.ReactAppoint = ReactAppoint;
//# sourceMappingURL=index.js.map
