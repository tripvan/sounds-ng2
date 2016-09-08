webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(479);
	var platform_browser_dynamic_1 = __webpack_require__(396);
	var app_module_1 = __webpack_require__(590);
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
	

/***/ },

/***/ 29:
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var globalScope;
	if (typeof window === 'undefined') {
	    if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
	        // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
	        globalScope = self;
	    }
	    else {
	        globalScope = global;
	    }
	}
	else {
	    globalScope = window;
	}
	function scheduleMicroTask(fn) {
	    Zone.current.scheduleMicroTask('scheduleMicrotask', fn);
	}
	exports.scheduleMicroTask = scheduleMicroTask;
	// Need to declare a new variable for global here since TypeScript
	// exports the original value of the symbol.
	var _global = globalScope;
	exports.global = _global;
	/**
	 * Runtime representation a type that a Component or other object is instances of.
	 *
	 * An example of a `Type` is `MyCustomComponent` class, which in JavaScript is be represented by
	 * the `MyCustomComponent` constructor function.
	 *
	 * @stable
	 */
	exports.Type = Function;
	function getTypeNameForDebugging(type) {
	    if (type['name']) {
	        return type['name'];
	    }
	    return typeof type;
	}
	exports.getTypeNameForDebugging = getTypeNameForDebugging;
	exports.Math = _global.Math;
	exports.Date = _global.Date;
	// TODO: remove calls to assert in production environment
	// Note: Can't just export this and import in in other files
	// as `assert` is a reserved keyword in Dart
	_global.assert = function assert(condition) {
	    // TODO: to be fixed properly via #2830, noop for now
	};
	function isPresent(obj) {
	    return obj !== undefined && obj !== null;
	}
	exports.isPresent = isPresent;
	function isBlank(obj) {
	    return obj === undefined || obj === null;
	}
	exports.isBlank = isBlank;
	function isBoolean(obj) {
	    return typeof obj === 'boolean';
	}
	exports.isBoolean = isBoolean;
	function isNumber(obj) {
	    return typeof obj === 'number';
	}
	exports.isNumber = isNumber;
	function isString(obj) {
	    return typeof obj === 'string';
	}
	exports.isString = isString;
	function isFunction(obj) {
	    return typeof obj === 'function';
	}
	exports.isFunction = isFunction;
	function isType(obj) {
	    return isFunction(obj);
	}
	exports.isType = isType;
	function isStringMap(obj) {
	    return typeof obj === 'object' && obj !== null;
	}
	exports.isStringMap = isStringMap;
	var STRING_MAP_PROTO = Object.getPrototypeOf({});
	function isStrictStringMap(obj) {
	    return isStringMap(obj) && Object.getPrototypeOf(obj) === STRING_MAP_PROTO;
	}
	exports.isStrictStringMap = isStrictStringMap;
	function isPromise(obj) {
	    // allow any Promise/A+ compliant thenable.
	    // It's up to the caller to ensure that obj.then conforms to the spec
	    return isPresent(obj) && isFunction(obj.then);
	}
	exports.isPromise = isPromise;
	function isArray(obj) {
	    return Array.isArray(obj);
	}
	exports.isArray = isArray;
	function isDate(obj) {
	    return obj instanceof exports.Date && !isNaN(obj.valueOf());
	}
	exports.isDate = isDate;
	function noop() { }
	exports.noop = noop;
	function stringify(token) {
	    if (typeof token === 'string') {
	        return token;
	    }
	    if (token === undefined || token === null) {
	        return '' + token;
	    }
	    if (token.overriddenName) {
	        return token.overriddenName;
	    }
	    if (token.name) {
	        return token.name;
	    }
	    var res = token.toString();
	    var newLineIndex = res.indexOf('\n');
	    return (newLineIndex === -1) ? res : res.substring(0, newLineIndex);
	}
	exports.stringify = stringify;
	// serialize / deserialize enum exist only for consistency with dart API
	// enums in typescript don't need to be serialized
	function serializeEnum(val) {
	    return val;
	}
	exports.serializeEnum = serializeEnum;
	function deserializeEnum(val, values) {
	    return val;
	}
	exports.deserializeEnum = deserializeEnum;
	function resolveEnumToken(enumValue, val) {
	    return enumValue[val];
	}
	exports.resolveEnumToken = resolveEnumToken;
	var StringWrapper = (function () {
	    function StringWrapper() {
	    }
	    StringWrapper.fromCharCode = function (code) { return String.fromCharCode(code); };
	    StringWrapper.charCodeAt = function (s, index) { return s.charCodeAt(index); };
	    StringWrapper.split = function (s, regExp) { return s.split(regExp); };
	    StringWrapper.equals = function (s, s2) { return s === s2; };
	    StringWrapper.stripLeft = function (s, charVal) {
	        if (s && s.length) {
	            var pos = 0;
	            for (var i = 0; i < s.length; i++) {
	                if (s[i] != charVal)
	                    break;
	                pos++;
	            }
	            s = s.substring(pos);
	        }
	        return s;
	    };
	    StringWrapper.stripRight = function (s, charVal) {
	        if (s && s.length) {
	            var pos = s.length;
	            for (var i = s.length - 1; i >= 0; i--) {
	                if (s[i] != charVal)
	                    break;
	                pos--;
	            }
	            s = s.substring(0, pos);
	        }
	        return s;
	    };
	    StringWrapper.replace = function (s, from, replace) {
	        return s.replace(from, replace);
	    };
	    StringWrapper.replaceAll = function (s, from, replace) {
	        return s.replace(from, replace);
	    };
	    StringWrapper.slice = function (s, from, to) {
	        if (from === void 0) { from = 0; }
	        if (to === void 0) { to = null; }
	        return s.slice(from, to === null ? undefined : to);
	    };
	    StringWrapper.replaceAllMapped = function (s, from, cb) {
	        return s.replace(from, function () {
	            var matches = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                matches[_i - 0] = arguments[_i];
	            }
	            // Remove offset & string from the result array
	            matches.splice(-2, 2);
	            // The callback receives match, p1, ..., pn
	            return cb(matches);
	        });
	    };
	    StringWrapper.contains = function (s, substr) { return s.indexOf(substr) != -1; };
	    StringWrapper.compare = function (a, b) {
	        if (a < b) {
	            return -1;
	        }
	        else if (a > b) {
	            return 1;
	        }
	        else {
	            return 0;
	        }
	    };
	    return StringWrapper;
	}());
	exports.StringWrapper = StringWrapper;
	var StringJoiner = (function () {
	    function StringJoiner(parts) {
	        if (parts === void 0) { parts = []; }
	        this.parts = parts;
	    }
	    StringJoiner.prototype.add = function (part) { this.parts.push(part); };
	    StringJoiner.prototype.toString = function () { return this.parts.join(''); };
	    return StringJoiner;
	}());
	exports.StringJoiner = StringJoiner;
	var NumberParseError = (function (_super) {
	    __extends(NumberParseError, _super);
	    function NumberParseError(message) {
	        _super.call(this);
	        this.message = message;
	    }
	    NumberParseError.prototype.toString = function () { return this.message; };
	    return NumberParseError;
	}(Error));
	exports.NumberParseError = NumberParseError;
	var NumberWrapper = (function () {
	    function NumberWrapper() {
	    }
	    NumberWrapper.toFixed = function (n, fractionDigits) { return n.toFixed(fractionDigits); };
	    NumberWrapper.equal = function (a, b) { return a === b; };
	    NumberWrapper.parseIntAutoRadix = function (text) {
	        var result = parseInt(text);
	        if (isNaN(result)) {
	            throw new NumberParseError('Invalid integer literal when parsing ' + text);
	        }
	        return result;
	    };
	    NumberWrapper.parseInt = function (text, radix) {
	        if (radix == 10) {
	            if (/^(\-|\+)?[0-9]+$/.test(text)) {
	                return parseInt(text, radix);
	            }
	        }
	        else if (radix == 16) {
	            if (/^(\-|\+)?[0-9ABCDEFabcdef]+$/.test(text)) {
	                return parseInt(text, radix);
	            }
	        }
	        else {
	            var result = parseInt(text, radix);
	            if (!isNaN(result)) {
	                return result;
	            }
	        }
	        throw new NumberParseError('Invalid integer literal when parsing ' + text + ' in base ' + radix);
	    };
	    // TODO: NaN is a valid literal but is returned by parseFloat to indicate an error.
	    NumberWrapper.parseFloat = function (text) { return parseFloat(text); };
	    Object.defineProperty(NumberWrapper, "NaN", {
	        get: function () { return NaN; },
	        enumerable: true,
	        configurable: true
	    });
	    NumberWrapper.isNumeric = function (value) { return !isNaN(value - parseFloat(value)); };
	    NumberWrapper.isNaN = function (value) { return isNaN(value); };
	    NumberWrapper.isInteger = function (value) { return Number.isInteger(value); };
	    return NumberWrapper;
	}());
	exports.NumberWrapper = NumberWrapper;
	exports.RegExp = _global.RegExp;
	var FunctionWrapper = (function () {
	    function FunctionWrapper() {
	    }
	    FunctionWrapper.apply = function (fn, posArgs) { return fn.apply(null, posArgs); };
	    FunctionWrapper.bind = function (fn, scope) { return fn.bind(scope); };
	    return FunctionWrapper;
	}());
	exports.FunctionWrapper = FunctionWrapper;
	// JS has NaN !== NaN
	function looseIdentical(a, b) {
	    return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
	}
	exports.looseIdentical = looseIdentical;
	// JS considers NaN is the same as NaN for map Key (while NaN !== NaN otherwise)
	// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
	function getMapKey(value) {
	    return value;
	}
	exports.getMapKey = getMapKey;
	function normalizeBlank(obj) {
	    return isBlank(obj) ? null : obj;
	}
	exports.normalizeBlank = normalizeBlank;
	function normalizeBool(obj) {
	    return isBlank(obj) ? false : obj;
	}
	exports.normalizeBool = normalizeBool;
	function isJsObject(o) {
	    return o !== null && (typeof o === 'function' || typeof o === 'object');
	}
	exports.isJsObject = isJsObject;
	function print(obj) {
	    console.log(obj);
	}
	exports.print = print;
	function warn(obj) {
	    console.warn(obj);
	}
	exports.warn = warn;
	// Can't be all uppercase as our transpiler would think it is a special directive...
	var Json = (function () {
	    function Json() {
	    }
	    Json.parse = function (s) { return _global.JSON.parse(s); };
	    Json.stringify = function (data) {
	        // Dart doesn't take 3 arguments
	        return _global.JSON.stringify(data, null, 2);
	    };
	    return Json;
	}());
	exports.Json = Json;
	var DateWrapper = (function () {
	    function DateWrapper() {
	    }
	    DateWrapper.create = function (year, month, day, hour, minutes, seconds, milliseconds) {
	        if (month === void 0) { month = 1; }
	        if (day === void 0) { day = 1; }
	        if (hour === void 0) { hour = 0; }
	        if (minutes === void 0) { minutes = 0; }
	        if (seconds === void 0) { seconds = 0; }
	        if (milliseconds === void 0) { milliseconds = 0; }
	        return new exports.Date(year, month - 1, day, hour, minutes, seconds, milliseconds);
	    };
	    DateWrapper.fromISOString = function (str) { return new exports.Date(str); };
	    DateWrapper.fromMillis = function (ms) { return new exports.Date(ms); };
	    DateWrapper.toMillis = function (date) { return date.getTime(); };
	    DateWrapper.now = function () { return new exports.Date(); };
	    DateWrapper.toJson = function (date) { return date.toJSON(); };
	    return DateWrapper;
	}());
	exports.DateWrapper = DateWrapper;
	function setValueOnPath(global, path, value) {
	    var parts = path.split('.');
	    var obj = global;
	    while (parts.length > 1) {
	        var name = parts.shift();
	        if (obj.hasOwnProperty(name) && isPresent(obj[name])) {
	            obj = obj[name];
	        }
	        else {
	            obj = obj[name] = {};
	        }
	    }
	    if (obj === undefined || obj === null) {
	        obj = {};
	    }
	    obj[parts.shift()] = value;
	}
	exports.setValueOnPath = setValueOnPath;
	var _symbolIterator = null;
	function getSymbolIterator() {
	    if (isBlank(_symbolIterator)) {
	        if (isPresent(globalScope.Symbol) && isPresent(Symbol.iterator)) {
	            _symbolIterator = Symbol.iterator;
	        }
	        else {
	            // es6-shim specific logic
	            var keys = Object.getOwnPropertyNames(Map.prototype);
	            for (var i = 0; i < keys.length; ++i) {
	                var key = keys[i];
	                if (key !== 'entries' && key !== 'size' &&
	                    Map.prototype[key] === Map.prototype['entries']) {
	                    _symbolIterator = key;
	                }
	            }
	        }
	    }
	    return _symbolIterator;
	}
	exports.getSymbolIterator = getSymbolIterator;
	function evalExpression(sourceUrl, expr, declarations, vars) {
	    var fnBody = declarations + "\nreturn " + expr + "\n//# sourceURL=" + sourceUrl;
	    var fnArgNames = [];
	    var fnArgValues = [];
	    for (var argName in vars) {
	        fnArgNames.push(argName);
	        fnArgValues.push(vars[argName]);
	    }
	    return new (Function.bind.apply(Function, [void 0].concat(fnArgNames.concat(fnBody))))().apply(void 0, fnArgValues);
	}
	exports.evalExpression = evalExpression;
	function isPrimitive(obj) {
	    return !isJsObject(obj);
	}
	exports.isPrimitive = isPrimitive;
	function hasConstructor(value, type) {
	    return value.constructor === type;
	}
	exports.hasConstructor = hasConstructor;
	function escape(s) {
	    return _global.encodeURI(s);
	}
	exports.escape = escape;
	function escapeRegExp(s) {
	    return s.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
	}
	exports.escapeRegExp = escapeRegExp;
	//# sourceMappingURL=lang.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 46:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var lang_1 = __webpack_require__(29);
	exports.Map = lang_1.global.Map;
	exports.Set = lang_1.global.Set;
	// Safari and Internet Explorer do not support the iterable parameter to the
	// Map constructor.  We work around that by manually adding the items.
	var createMapFromPairs = (function () {
	    try {
	        if (new exports.Map([[1, 2]]).size === 1) {
	            return function createMapFromPairs(pairs) { return new exports.Map(pairs); };
	        }
	    }
	    catch (e) {
	    }
	    return function createMapAndPopulateFromPairs(pairs) {
	        var map = new exports.Map();
	        for (var i = 0; i < pairs.length; i++) {
	            var pair = pairs[i];
	            map.set(pair[0], pair[1]);
	        }
	        return map;
	    };
	})();
	var createMapFromMap = (function () {
	    try {
	        if (new exports.Map(new exports.Map())) {
	            return function createMapFromMap(m) { return new exports.Map(m); };
	        }
	    }
	    catch (e) {
	    }
	    return function createMapAndPopulateFromMap(m) {
	        var map = new exports.Map();
	        m.forEach(function (v, k) { map.set(k, v); });
	        return map;
	    };
	})();
	var _clearValues = (function () {
	    if ((new exports.Map()).keys().next) {
	        return function _clearValues(m) {
	            var keyIterator = m.keys();
	            var k;
	            while (!((k = keyIterator.next()).done)) {
	                m.set(k.value, null);
	            }
	        };
	    }
	    else {
	        return function _clearValuesWithForeEach(m) {
	            m.forEach(function (v, k) { m.set(k, null); });
	        };
	    }
	})();
	// Safari doesn't implement MapIterator.next(), which is used is Traceur's polyfill of Array.from
	// TODO(mlaval): remove the work around once we have a working polyfill of Array.from
	var _arrayFromMap = (function () {
	    try {
	        if ((new exports.Map()).values().next) {
	            return function createArrayFromMap(m, getValues) {
	                return getValues ? Array.from(m.values()) : Array.from(m.keys());
	            };
	        }
	    }
	    catch (e) {
	    }
	    return function createArrayFromMapWithForeach(m, getValues) {
	        var res = ListWrapper.createFixedSize(m.size), i = 0;
	        m.forEach(function (v, k) {
	            res[i] = getValues ? v : k;
	            i++;
	        });
	        return res;
	    };
	})();
	var MapWrapper = (function () {
	    function MapWrapper() {
	    }
	    MapWrapper.clone = function (m) { return createMapFromMap(m); };
	    MapWrapper.createFromStringMap = function (stringMap) {
	        var result = new exports.Map();
	        for (var prop in stringMap) {
	            result.set(prop, stringMap[prop]);
	        }
	        return result;
	    };
	    MapWrapper.toStringMap = function (m) {
	        var r = {};
	        m.forEach(function (v, k) { return r[k] = v; });
	        return r;
	    };
	    MapWrapper.createFromPairs = function (pairs) { return createMapFromPairs(pairs); };
	    MapWrapper.clearValues = function (m) { _clearValues(m); };
	    MapWrapper.iterable = function (m) { return m; };
	    MapWrapper.keys = function (m) { return _arrayFromMap(m, false); };
	    MapWrapper.values = function (m) { return _arrayFromMap(m, true); };
	    return MapWrapper;
	}());
	exports.MapWrapper = MapWrapper;
	/**
	 * Wraps Javascript Objects
	 */
	var StringMapWrapper = (function () {
	    function StringMapWrapper() {
	    }
	    StringMapWrapper.create = function () {
	        // Note: We are not using Object.create(null) here due to
	        // performance!
	        // http://jsperf.com/ng2-object-create-null
	        return {};
	    };
	    StringMapWrapper.contains = function (map, key) {
	        return map.hasOwnProperty(key);
	    };
	    StringMapWrapper.get = function (map, key) {
	        return map.hasOwnProperty(key) ? map[key] : undefined;
	    };
	    StringMapWrapper.set = function (map, key, value) { map[key] = value; };
	    StringMapWrapper.keys = function (map) { return Object.keys(map); };
	    StringMapWrapper.values = function (map) {
	        return Object.keys(map).map(function (k) { return map[k]; });
	    };
	    StringMapWrapper.isEmpty = function (map) {
	        for (var prop in map) {
	            return false;
	        }
	        return true;
	    };
	    StringMapWrapper.delete = function (map, key) { delete map[key]; };
	    StringMapWrapper.forEach = function (map, callback) {
	        for (var _i = 0, _a = Object.keys(map); _i < _a.length; _i++) {
	            var k = _a[_i];
	            callback(map[k], k);
	        }
	    };
	    StringMapWrapper.merge = function (m1, m2) {
	        var m = {};
	        for (var _i = 0, _a = Object.keys(m1); _i < _a.length; _i++) {
	            var k = _a[_i];
	            m[k] = m1[k];
	        }
	        for (var _b = 0, _c = Object.keys(m2); _b < _c.length; _b++) {
	            var k = _c[_b];
	            m[k] = m2[k];
	        }
	        return m;
	    };
	    StringMapWrapper.equals = function (m1, m2) {
	        var k1 = Object.keys(m1);
	        var k2 = Object.keys(m2);
	        if (k1.length != k2.length) {
	            return false;
	        }
	        var key;
	        for (var i = 0; i < k1.length; i++) {
	            key = k1[i];
	            if (m1[key] !== m2[key]) {
	                return false;
	            }
	        }
	        return true;
	    };
	    return StringMapWrapper;
	}());
	exports.StringMapWrapper = StringMapWrapper;
	var ListWrapper = (function () {
	    function ListWrapper() {
	    }
	    // JS has no way to express a statically fixed size list, but dart does so we
	    // keep both methods.
	    ListWrapper.createFixedSize = function (size) { return new Array(size); };
	    ListWrapper.createGrowableSize = function (size) { return new Array(size); };
	    ListWrapper.clone = function (array) { return array.slice(0); };
	    ListWrapper.forEachWithIndex = function (array, fn) {
	        for (var i = 0; i < array.length; i++) {
	            fn(array[i], i);
	        }
	    };
	    ListWrapper.first = function (array) {
	        if (!array)
	            return null;
	        return array[0];
	    };
	    ListWrapper.last = function (array) {
	        if (!array || array.length == 0)
	            return null;
	        return array[array.length - 1];
	    };
	    ListWrapper.indexOf = function (array, value, startIndex) {
	        if (startIndex === void 0) { startIndex = 0; }
	        return array.indexOf(value, startIndex);
	    };
	    ListWrapper.contains = function (list, el) { return list.indexOf(el) !== -1; };
	    ListWrapper.reversed = function (array) {
	        var a = ListWrapper.clone(array);
	        return a.reverse();
	    };
	    ListWrapper.concat = function (a, b) { return a.concat(b); };
	    ListWrapper.insert = function (list, index, value) { list.splice(index, 0, value); };
	    ListWrapper.removeAt = function (list, index) {
	        var res = list[index];
	        list.splice(index, 1);
	        return res;
	    };
	    ListWrapper.removeAll = function (list, items) {
	        for (var i = 0; i < items.length; ++i) {
	            var index = list.indexOf(items[i]);
	            list.splice(index, 1);
	        }
	    };
	    ListWrapper.remove = function (list, el) {
	        var index = list.indexOf(el);
	        if (index > -1) {
	            list.splice(index, 1);
	            return true;
	        }
	        return false;
	    };
	    ListWrapper.clear = function (list) { list.length = 0; };
	    ListWrapper.isEmpty = function (list) { return list.length == 0; };
	    ListWrapper.fill = function (list, value, start, end) {
	        if (start === void 0) { start = 0; }
	        if (end === void 0) { end = null; }
	        list.fill(value, start, end === null ? list.length : end);
	    };
	    ListWrapper.equals = function (a, b) {
	        if (a.length != b.length)
	            return false;
	        for (var i = 0; i < a.length; ++i) {
	            if (a[i] !== b[i])
	                return false;
	        }
	        return true;
	    };
	    ListWrapper.slice = function (l, from, to) {
	        if (from === void 0) { from = 0; }
	        if (to === void 0) { to = null; }
	        return l.slice(from, to === null ? undefined : to);
	    };
	    ListWrapper.splice = function (l, from, length) { return l.splice(from, length); };
	    ListWrapper.sort = function (l, compareFn) {
	        if (lang_1.isPresent(compareFn)) {
	            l.sort(compareFn);
	        }
	        else {
	            l.sort();
	        }
	    };
	    ListWrapper.toString = function (l) { return l.toString(); };
	    ListWrapper.toJSON = function (l) { return JSON.stringify(l); };
	    ListWrapper.maximum = function (list, predicate) {
	        if (list.length == 0) {
	            return null;
	        }
	        var solution = null;
	        var maxValue = -Infinity;
	        for (var index = 0; index < list.length; index++) {
	            var candidate = list[index];
	            if (lang_1.isBlank(candidate)) {
	                continue;
	            }
	            var candidateValue = predicate(candidate);
	            if (candidateValue > maxValue) {
	                solution = candidate;
	                maxValue = candidateValue;
	            }
	        }
	        return solution;
	    };
	    ListWrapper.flatten = function (list) {
	        var target = [];
	        _flattenArray(list, target);
	        return target;
	    };
	    ListWrapper.addAll = function (list, source) {
	        for (var i = 0; i < source.length; i++) {
	            list.push(source[i]);
	        }
	    };
	    return ListWrapper;
	}());
	exports.ListWrapper = ListWrapper;
	function _flattenArray(source, target) {
	    if (lang_1.isPresent(source)) {
	        for (var i = 0; i < source.length; i++) {
	            var item = source[i];
	            if (lang_1.isArray(item)) {
	                _flattenArray(item, target);
	            }
	            else {
	                target.push(item);
	            }
	        }
	    }
	    return target;
	}
	function isListLikeIterable(obj) {
	    if (!lang_1.isJsObject(obj))
	        return false;
	    return lang_1.isArray(obj) ||
	        (!(obj instanceof exports.Map) &&
	            lang_1.getSymbolIterator() in obj); // JS Iterable have a Symbol.iterator prop
	}
	exports.isListLikeIterable = isListLikeIterable;
	function areIterablesEqual(a, b, comparator) {
	    var iterator1 = a[lang_1.getSymbolIterator()]();
	    var iterator2 = b[lang_1.getSymbolIterator()]();
	    while (true) {
	        var item1 = iterator1.next();
	        var item2 = iterator2.next();
	        if (item1.done && item2.done)
	            return true;
	        if (item1.done || item2.done)
	            return false;
	        if (!comparator(item1.value, item2.value))
	            return false;
	    }
	}
	exports.areIterablesEqual = areIterablesEqual;
	function iterateListLike(obj, fn) {
	    if (lang_1.isArray(obj)) {
	        for (var i = 0; i < obj.length; i++) {
	            fn(obj[i]);
	        }
	    }
	    else {
	        var iterator = obj[lang_1.getSymbolIterator()]();
	        var item;
	        while (!((item = iterator.next()).done)) {
	            fn(item.value);
	        }
	    }
	}
	exports.iterateListLike = iterateListLike;
	// Safari and Internet Explorer do not support the iterable parameter to the
	// Set constructor.  We work around that by manually adding the items.
	var createSetFromList = (function () {
	    var test = new exports.Set([1, 2, 3]);
	    if (test.size === 3) {
	        return function createSetFromList(lst) { return new exports.Set(lst); };
	    }
	    else {
	        return function createSetAndPopulateFromList(lst) {
	            var res = new exports.Set(lst);
	            if (res.size !== lst.length) {
	                for (var i = 0; i < lst.length; i++) {
	                    res.add(lst[i]);
	                }
	            }
	            return res;
	        };
	    }
	})();
	var SetWrapper = (function () {
	    function SetWrapper() {
	    }
	    SetWrapper.createFromList = function (lst) { return createSetFromList(lst); };
	    SetWrapper.has = function (s, key) { return s.has(key); };
	    SetWrapper.delete = function (m, k) { m.delete(k); };
	    return SetWrapper;
	}());
	exports.SetWrapper = SetWrapper;
	//# sourceMappingURL=collection.js.map

/***/ },

/***/ 51:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	/**
	 * Used to provide a {@link ControlValueAccessor} for form controls.
	 *
	 * See {@link DefaultValueAccessor} for how to implement one.
	 * @experimental
	 */
	exports.NG_VALUE_ACCESSOR = new core_1.OpaqueToken('NgValueAccessor');
	//# sourceMappingURL=control_value_accessor.js.map

/***/ },

/***/ 52:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	var toPromise_1 = __webpack_require__(301);
	var collection_1 = __webpack_require__(46);
	var lang_1 = __webpack_require__(29);
	/**
	 * Providers for validators to be used for {@link FormControl}s in a form.
	 *
	 * Provide this using `multi: true` to add validators.
	 *
	 * ### Example
	 *
	 * {@example core/forms/ts/ng_validators/ng_validators.ts region='ng_validators'}
	 * @experimental
	 */
	exports.NG_VALIDATORS = new core_1.OpaqueToken('NgValidators');
	/**
	 * Providers for asynchronous validators to be used for {@link FormControl}s
	 * in a form.
	 *
	 * Provide this using `multi: true` to add validators.
	 *
	 * See {@link NG_VALIDATORS} for more details.
	 *
	 * @experimental
	 */
	exports.NG_ASYNC_VALIDATORS = new core_1.OpaqueToken('NgAsyncValidators');
	/**
	 * Provides a set of validators used by form controls.
	 *
	 * A validator is a function that processes a {@link FormControl} or collection of
	 * controls and returns a map of errors. A null map means that validation has passed.
	 *
	 * ### Example
	 *
	 * ```typescript
	 * var loginControl = new FormControl("", Validators.required)
	 * ```
	 *
	 * @experimental
	 */
	var Validators = (function () {
	    function Validators() {
	    }
	    /**
	     * Validator that requires controls to have a non-empty value.
	     */
	    Validators.required = function (control) {
	        return lang_1.isBlank(control.value) || (lang_1.isString(control.value) && control.value == '') ?
	            { 'required': true } :
	            null;
	    };
	    /**
	     * Validator that requires controls to have a value of a minimum length.
	     */
	    Validators.minLength = function (minLength) {
	        return function (control) {
	            if (lang_1.isPresent(Validators.required(control)))
	                return null;
	            var v = control.value;
	            return v.length < minLength ?
	                { 'minlength': { 'requiredLength': minLength, 'actualLength': v.length } } :
	                null;
	        };
	    };
	    /**
	     * Validator that requires controls to have a value of a maximum length.
	     */
	    Validators.maxLength = function (maxLength) {
	        return function (control) {
	            if (lang_1.isPresent(Validators.required(control)))
	                return null;
	            var v = control.value;
	            return v.length > maxLength ?
	                { 'maxlength': { 'requiredLength': maxLength, 'actualLength': v.length } } :
	                null;
	        };
	    };
	    /**
	     * Validator that requires a control to match a regex to its value.
	     */
	    Validators.pattern = function (pattern) {
	        return function (control) {
	            if (lang_1.isPresent(Validators.required(control)))
	                return null;
	            var regex = new RegExp("^" + pattern + "$");
	            var v = control.value;
	            return regex.test(v) ? null :
	                { 'pattern': { 'requiredPattern': "^" + pattern + "$", 'actualValue': v } };
	        };
	    };
	    /**
	     * No-op validator.
	     */
	    Validators.nullValidator = function (c) { return null; };
	    /**
	     * Compose multiple validators into a single function that returns the union
	     * of the individual error maps.
	     */
	    Validators.compose = function (validators) {
	        if (lang_1.isBlank(validators))
	            return null;
	        var presentValidators = validators.filter(lang_1.isPresent);
	        if (presentValidators.length == 0)
	            return null;
	        return function (control) {
	            return _mergeErrors(_executeValidators(control, presentValidators));
	        };
	    };
	    Validators.composeAsync = function (validators) {
	        if (lang_1.isBlank(validators))
	            return null;
	        var presentValidators = validators.filter(lang_1.isPresent);
	        if (presentValidators.length == 0)
	            return null;
	        return function (control) {
	            var promises = _executeAsyncValidators(control, presentValidators).map(_convertToPromise);
	            return Promise.all(promises).then(_mergeErrors);
	        };
	    };
	    return Validators;
	}());
	exports.Validators = Validators;
	function _convertToPromise(obj) {
	    return lang_1.isPromise(obj) ? obj : toPromise_1.toPromise.call(obj);
	}
	function _executeValidators(control, validators) {
	    return validators.map(function (v) { return v(control); });
	}
	function _executeAsyncValidators(control, validators) {
	    return validators.map(function (v) { return v(control); });
	}
	function _mergeErrors(arrayOfErrors) {
	    var res = arrayOfErrors.reduce(function (res, errors) {
	        return lang_1.isPresent(errors) ? collection_1.StringMapWrapper.merge(res, errors) : res;
	    }, {});
	    return collection_1.StringMapWrapper.isEmpty(res) ? null : res;
	}
	//# sourceMappingURL=validators.js.map

/***/ },

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_control_directive_1 = __webpack_require__(255);
	/**
	 * A directive that contains multiple {@link NgControl}s.
	 *
	 * Only used by the forms module.
	 *
	 * @experimental
	 */
	var ControlContainer = (function (_super) {
	    __extends(ControlContainer, _super);
	    function ControlContainer() {
	        _super.apply(this, arguments);
	    }
	    Object.defineProperty(ControlContainer.prototype, "formDirective", {
	        /**
	         * Get the form to which this container belongs.
	         */
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ControlContainer.prototype, "path", {
	        /**
	         * Get the path to this container.
	         */
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    return ControlContainer;
	}(abstract_control_directive_1.AbstractControlDirective));
	exports.ControlContainer = ControlContainer;
	//# sourceMappingURL=control_container.js.map

/***/ },

/***/ 70:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var collection_1 = __webpack_require__(46);
	var exceptions_1 = __webpack_require__(88);
	var lang_1 = __webpack_require__(29);
	var validators_1 = __webpack_require__(52);
	var checkbox_value_accessor_1 = __webpack_require__(166);
	var default_value_accessor_1 = __webpack_require__(167);
	var normalize_validator_1 = __webpack_require__(544);
	var number_value_accessor_1 = __webpack_require__(258);
	var radio_control_value_accessor_1 = __webpack_require__(169);
	var select_control_value_accessor_1 = __webpack_require__(170);
	var select_multiple_control_value_accessor_1 = __webpack_require__(171);
	function controlPath(name, parent) {
	    var p = collection_1.ListWrapper.clone(parent.path);
	    p.push(name);
	    return p;
	}
	exports.controlPath = controlPath;
	function setUpControl(control, dir) {
	    if (lang_1.isBlank(control))
	        _throwError(dir, 'Cannot find control with');
	    if (lang_1.isBlank(dir.valueAccessor))
	        _throwError(dir, 'No value accessor for form control with');
	    control.validator = validators_1.Validators.compose([control.validator, dir.validator]);
	    control.asyncValidator = validators_1.Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
	    dir.valueAccessor.writeValue(control.value);
	    // view -> model
	    dir.valueAccessor.registerOnChange(function (newValue) {
	        dir.viewToModelUpdate(newValue);
	        control.markAsDirty();
	        control.setValue(newValue, { emitModelToViewChange: false });
	    });
	    control.registerOnChange(function (newValue, emitModelEvent) {
	        // control -> view
	        dir.valueAccessor.writeValue(newValue);
	        // control -> ngModel
	        if (emitModelEvent)
	            dir.viewToModelUpdate(newValue);
	    });
	    // touched
	    dir.valueAccessor.registerOnTouched(function () { return control.markAsTouched(); });
	}
	exports.setUpControl = setUpControl;
	function setUpFormContainer(control, dir) {
	    if (lang_1.isBlank(control))
	        _throwError(dir, 'Cannot find control with');
	    control.validator = validators_1.Validators.compose([control.validator, dir.validator]);
	    control.asyncValidator = validators_1.Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
	}
	exports.setUpFormContainer = setUpFormContainer;
	function _throwError(dir, message) {
	    var messageEnd;
	    if (dir.path.length > 1) {
	        messageEnd = "path: '" + dir.path.join(' -> ') + "'";
	    }
	    else if (dir.path[0]) {
	        messageEnd = "name: '" + dir.path + "'";
	    }
	    else {
	        messageEnd = 'unspecified name attribute';
	    }
	    throw new exceptions_1.BaseException(message + " " + messageEnd);
	}
	function composeValidators(validators) {
	    return lang_1.isPresent(validators) ? validators_1.Validators.compose(validators.map(normalize_validator_1.normalizeValidator)) : null;
	}
	exports.composeValidators = composeValidators;
	function composeAsyncValidators(validators) {
	    return lang_1.isPresent(validators) ? validators_1.Validators.composeAsync(validators.map(normalize_validator_1.normalizeAsyncValidator)) :
	        null;
	}
	exports.composeAsyncValidators = composeAsyncValidators;
	function isPropertyUpdated(changes, viewModel) {
	    if (!collection_1.StringMapWrapper.contains(changes, 'model'))
	        return false;
	    var change = changes['model'];
	    if (change.isFirstChange())
	        return true;
	    return !lang_1.looseIdentical(viewModel, change.currentValue);
	}
	exports.isPropertyUpdated = isPropertyUpdated;
	// TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented
	function selectValueAccessor(dir, valueAccessors) {
	    if (lang_1.isBlank(valueAccessors))
	        return null;
	    var defaultAccessor;
	    var builtinAccessor;
	    var customAccessor;
	    valueAccessors.forEach(function (v) {
	        if (lang_1.hasConstructor(v, default_value_accessor_1.DefaultValueAccessor)) {
	            defaultAccessor = v;
	        }
	        else if (lang_1.hasConstructor(v, checkbox_value_accessor_1.CheckboxControlValueAccessor) || lang_1.hasConstructor(v, number_value_accessor_1.NumberValueAccessor) ||
	            lang_1.hasConstructor(v, select_control_value_accessor_1.SelectControlValueAccessor) ||
	            lang_1.hasConstructor(v, select_multiple_control_value_accessor_1.SelectMultipleControlValueAccessor) ||
	            lang_1.hasConstructor(v, radio_control_value_accessor_1.RadioControlValueAccessor)) {
	            if (lang_1.isPresent(builtinAccessor))
	                _throwError(dir, 'More than one built-in value accessor matches form control with');
	            builtinAccessor = v;
	        }
	        else {
	            if (lang_1.isPresent(customAccessor))
	                _throwError(dir, 'More than one custom value accessor matches form control with');
	            customAccessor = v;
	        }
	    });
	    if (lang_1.isPresent(customAccessor))
	        return customAccessor;
	    if (lang_1.isPresent(builtinAccessor))
	        return builtinAccessor;
	    if (lang_1.isPresent(defaultAccessor))
	        return defaultAccessor;
	    _throwError(dir, 'No valid value accessor for form control with');
	    return null;
	}
	exports.selectValueAccessor = selectValueAccessor;
	//# sourceMappingURL=shared.js.map

/***/ },

/***/ 87:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var exceptions_1 = __webpack_require__(88);
	var abstract_control_directive_1 = __webpack_require__(255);
	/**
	 * A base class that all control directive extend.
	 * It binds a {@link Control} object to a DOM element.
	 *
	 * Used internally by Angular forms.
	 *
	 * @experimental
	 */
	var NgControl = (function (_super) {
	    __extends(NgControl, _super);
	    function NgControl() {
	        _super.apply(this, arguments);
	        this.name = null;
	        this.valueAccessor = null;
	    }
	    Object.defineProperty(NgControl.prototype, "validator", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControl.prototype, "asyncValidator", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    return NgControl;
	}(abstract_control_directive_1.AbstractControlDirective));
	exports.NgControl = NgControl;
	//# sourceMappingURL=ng_control.js.map

/***/ },

/***/ 88:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var base_wrapped_exception_1 = __webpack_require__(385);
	var exception_handler_1 = __webpack_require__(386);
	var exception_handler_2 = __webpack_require__(386);
	exports.ExceptionHandler = exception_handler_2.ExceptionHandler;
	/**
	 * @stable
	 */
	var BaseException = (function (_super) {
	    __extends(BaseException, _super);
	    function BaseException(message) {
	        if (message === void 0) { message = '--'; }
	        _super.call(this, message);
	        this.message = message;
	        this.stack = (new Error(message)).stack;
	    }
	    BaseException.prototype.toString = function () { return this.message; };
	    return BaseException;
	}(Error));
	exports.BaseException = BaseException;
	/**
	 * Wraps an exception and provides additional context or information.
	 * @stable
	 */
	var WrappedException = (function (_super) {
	    __extends(WrappedException, _super);
	    function WrappedException(_wrapperMessage, _originalException /** TODO #9100 */, _originalStack /** TODO #9100 */, _context /** TODO #9100 */) {
	        _super.call(this, _wrapperMessage);
	        this._wrapperMessage = _wrapperMessage;
	        this._originalException = _originalException;
	        this._originalStack = _originalStack;
	        this._context = _context;
	        this._wrapperStack = (new Error(_wrapperMessage)).stack;
	    }
	    Object.defineProperty(WrappedException.prototype, "wrapperMessage", {
	        get: function () { return this._wrapperMessage; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "wrapperStack", {
	        get: function () { return this._wrapperStack; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "originalException", {
	        get: function () { return this._originalException; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "originalStack", {
	        get: function () { return this._originalStack; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "context", {
	        get: function () { return this._context; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "message", {
	        get: function () { return exception_handler_1.ExceptionHandler.exceptionToString(this); },
	        enumerable: true,
	        configurable: true
	    });
	    WrappedException.prototype.toString = function () { return this.message; };
	    return WrappedException;
	}(base_wrapped_exception_1.BaseWrappedException));
	exports.WrappedException = WrappedException;
	function makeTypeError(message) {
	    return new TypeError(message);
	}
	exports.makeTypeError = makeTypeError;
	function unimplemented() {
	    throw new BaseException('unimplemented');
	}
	exports.unimplemented = unimplemented;
	//# sourceMappingURL=exceptions.js.map

/***/ },

/***/ 108:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(17);
	var Observable_1 = __webpack_require__(2);
	exports.Observable = Observable_1.Observable;
	var Subject_2 = __webpack_require__(17);
	exports.Subject = Subject_2.Subject;
	/**
	 * Use by directives and components to emit custom Events.
	 *
	 * ### Examples
	 *
	 * In the following example, `Zippy` alternatively emits `open` and `close` events when its
	 * title gets clicked:
	 *
	 * ```
	 * @Component({
	 *   selector: 'zippy',
	 *   template: `
	 *   <div class="zippy">
	 *     <div (click)="toggle()">Toggle</div>
	 *     <div [hidden]="!visible">
	 *       <ng-content></ng-content>
	 *     </div>
	 *  </div>`})
	 * export class Zippy {
	 *   visible: boolean = true;
	 *   @Output() open: EventEmitter<any> = new EventEmitter();
	 *   @Output() close: EventEmitter<any> = new EventEmitter();
	 *
	 *   toggle() {
	 *     this.visible = !this.visible;
	 *     if (this.visible) {
	 *       this.open.emit(null);
	 *     } else {
	 *       this.close.emit(null);
	 *     }
	 *   }
	 * }
	 * ```
	 *
	 * The events payload can be accessed by the parameter `$event` on the components output event
	 * handler:
	 *
	 * ```
	 * <zippy (open)="onOpen($event)" (close)="onClose($event)"></zippy>
	 * ```
	 *
	 * Uses Rx.Observable but provides an adapter to make it work as specified here:
	 * https://github.com/jhusain/observable-spec
	 *
	 * Once a reference implementation of the spec is available, switch to it.
	 * @stable
	 */
	var EventEmitter = (function (_super) {
	    __extends(EventEmitter, _super);
	    /**
	     * Creates an instance of [EventEmitter], which depending on [isAsync],
	     * delivers events synchronously or asynchronously.
	     */
	    function EventEmitter(isAsync) {
	        if (isAsync === void 0) { isAsync = false; }
	        _super.call(this);
	        this.__isAsync = isAsync;
	    }
	    EventEmitter.prototype.emit = function (value) { _super.prototype.next.call(this, value); };
	    /**
	     * @deprecated - use .emit(value) instead
	     */
	    EventEmitter.prototype.next = function (value) { _super.prototype.next.call(this, value); };
	    EventEmitter.prototype.subscribe = function (generatorOrNext, error, complete) {
	        var schedulerFn;
	        var errorFn = function (err) { return null; };
	        var completeFn = function () { return null; };
	        if (generatorOrNext && typeof generatorOrNext === 'object') {
	            schedulerFn = this.__isAsync ? function (value /** TODO #9100 */) {
	                setTimeout(function () { return generatorOrNext.next(value); });
	            } : function (value /** TODO #9100 */) { generatorOrNext.next(value); };
	            if (generatorOrNext.error) {
	                errorFn = this.__isAsync ? function (err) { setTimeout(function () { return generatorOrNext.error(err); }); } :
	                    function (err) { generatorOrNext.error(err); };
	            }
	            if (generatorOrNext.complete) {
	                completeFn = this.__isAsync ? function () { setTimeout(function () { return generatorOrNext.complete(); }); } :
	                    function () { generatorOrNext.complete(); };
	            }
	        }
	        else {
	            schedulerFn = this.__isAsync ? function (value /** TODO #9100 */) {
	                setTimeout(function () { return generatorOrNext(value); });
	            } : function (value /** TODO #9100 */) { generatorOrNext(value); };
	            if (error) {
	                errorFn =
	                    this.__isAsync ? function (err) { setTimeout(function () { return error(err); }); } : function (err) { error(err); };
	            }
	            if (complete) {
	                completeFn =
	                    this.__isAsync ? function () { setTimeout(function () { return complete(); }); } : function () { complete(); };
	            }
	        }
	        return _super.prototype.subscribe.call(this, schedulerFn, errorFn, completeFn);
	    };
	    return EventEmitter;
	}(Subject_1.Subject));
	exports.EventEmitter = EventEmitter;
	//# sourceMappingURL=async.js.map

/***/ },

/***/ 109:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(173);
	var Observable_1 = __webpack_require__(2);
	__webpack_require__(201);
	__webpack_require__(200);
	__webpack_require__(295);
	__webpack_require__(455);
	var QuantoneService = (function () {
	    function QuantoneService(http) {
	        this.http = http;
	    }
	    QuantoneService.prototype.getArtist = function (artistId) {
	        return this.http.get("http://qt-api.tristanchanning.com:8070/api/artist/" + artistId)
	            .map(this.extractData)
	            .catch(this.handleError);
	    };
	    QuantoneService.prototype.getArtists = function (artistIds) {
	        var _this = this;
	        return Observable_1.Observable.from(artistIds)
	            .map(function (artistId) {
	            return _this.http.get("http://qt-api.tristanchanning.com:8070/api/artist/" + artistId)
	                .map(_this.extractData)
	                .catch(_this.handleError);
	        }).concatAll();
	    };
	    QuantoneService.prototype.getAlbum = function (id) {
	        return this.http.get("http://qt-api.tristanchanning.com:8070/api/albumbyid/" + id)
	            .map(this.extractData)
	            .catch(this.handleError);
	    };
	    QuantoneService.prototype.extractData = function (response) {
	        var body = response.json();
	        return body.Data || {};
	    };
	    QuantoneService.prototype.handleError = function (error) {
	        var errMsg = (error.message) ? error.message :
	            error.status ? error.status + " - $(error.statusText)" : "Server error";
	        console.log(errMsg);
	        return Observable_1.Observable.throw(errMsg);
	    };
	    QuantoneService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], QuantoneService);
	    return QuantoneService;
	}());
	exports.QuantoneService = QuantoneService;
	

/***/ },

/***/ 110:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(173);
	var platform_browser_1 = __webpack_require__(89);
	var Observable_1 = __webpack_require__(2);
	var artist_1 = __webpack_require__(596);
	var spotifyAlbum_1 = __webpack_require__(417);
	var spotifyAlbums_1 = __webpack_require__(598);
	var track_1 = __webpack_require__(599);
	var SpotifyService = (function () {
	    function SpotifyService(http, sanitiser) {
	        this.http = http;
	        this.sanitiser = sanitiser;
	        this.spotifyUrl = "https://api.spotify.com/v1/";
	        this.spotifyAlbums = new spotifyAlbums_1.SpotifyAlbums(0, []);
	        this.perPage = 20;
	    }
	    SpotifyService.prototype.getTotal = function () {
	        return this.spotifyAlbums.total;
	    };
	    SpotifyService.prototype.getAlbums = function (query) {
	        var _this = this;
	        if (query.offset === 0) {
	            this.spotifyAlbums = new spotifyAlbums_1.SpotifyAlbums(0, []);
	        }
	        return this.getAlbumIds(query)
	            .map(function (albumIds) {
	            _this.spotifyAlbums.total = albumIds.total;
	            if (albumIds.total === 0) {
	                return Observable_1.Observable.of(new Array());
	            }
	            return _this.getAlbumsByIds(albumIds.albums.map(function (album) { return album.id; }))
	                .map(function (albums) {
	                if (albums.length > 0) {
	                    albums.forEach(function (album) {
	                        var tracks = [];
	                        album.tracks.items.forEach(function (track) {
	                            tracks.push(new track_1.Track(track.id, track.name, track.uri, "", "", "", "", ""));
	                        });
	                        _this.spotifyAlbums.albums.push(new spotifyAlbum_1.SpotifyAlbum(album.id, album.name, tracks, album.artists, album.release_date, album.images, album.copyrights, album.popularity, _this.getUnsanitisedUrl(album.uri)));
	                    });
	                    return _this.spotifyAlbums.albums;
	                }
	            });
	        })
	            .concatAll();
	    };
	    SpotifyService.prototype.getAlbumIds = function (query) {
	        var label = query.label;
	        if (!!label && label.length > 2) {
	            label = " label:\"" + label + "\"";
	        }
	        else {
	            label = "";
	        }
	        var year = query.year;
	        if (!!year && year.length > 2) {
	            year = " year:" + year;
	        }
	        else {
	            year = "";
	        }
	        var fullQuery = "?q=" + query.query + label + year + "&type=album&offset=" + query.offset + "&limit=" + this.perPage + "&market=GB";
	        return this.http.get(this.spotifyUrl + "search" + fullQuery)
	            .map(this.extractAlbumIdData)
	            .catch(this.handleError);
	    };
	    SpotifyService.prototype.getArtistAlbumIds = function (query) {
	        return this.http.get(this.spotifyUrl + "artists/" + query.id + '/albums?album_type=album,single&limit=' + this.perPage + '&offset=' + query.offset + '&market=GB')
	            .map(this.extractArtistAlbumIdData)
	            .catch(this.handleError);
	    };
	    SpotifyService.prototype.extractArtistAlbumIdData = function (response) {
	        var body = response.json();
	        return new spotifyAlbums_1.SpotifyAlbums(body.total, body.items) || {};
	    };
	    SpotifyService.prototype.handleAlbumIdError = function (error) {
	        var errMsg = (error.message) ? error.message :
	            error.status ? error.status + " - $(error.statusText)" : "Server error";
	        return Observable_1.Observable.throw(errMsg);
	    };
	    SpotifyService.prototype.extractAlbumIdData = function (response) {
	        var body = response.json();
	        return new spotifyAlbums_1.SpotifyAlbums(body.albums.total, body.albums.items) || {};
	    };
	    SpotifyService.prototype.getAlbumsByIds = function (albumIds) {
	        var params = new http_1.URLSearchParams();
	        params.set("ids", albumIds.join(","));
	        return this.http.get(this.spotifyUrl + "albums", { search: params })
	            .map(this.extractAlbumData)
	            .catch(this.handleError);
	    };
	    SpotifyService.prototype.extractAlbumData = function (response) {
	        var body = response.json();
	        return body.albums || {};
	    };
	    SpotifyService.prototype.handleError = function (error) {
	        var errMsg = (error.message) ? error.message :
	            error.status ? error.status + " - $(error.statusText)" : "Server error";
	        console.log(errMsg);
	        return Observable_1.Observable.throw(errMsg);
	    };
	    SpotifyService.prototype.getArtistAlbums = function (query) {
	        var _this = this;
	        if (query.offset === 0) {
	            this.spotifyAlbums = new spotifyAlbums_1.SpotifyAlbums(0, []);
	        }
	        return this.getArtistAlbumIds(query)
	            .map(function (albumIds) {
	            _this.spotifyAlbums.total = albumIds.total;
	            if (albumIds.total === 0) {
	                return Observable_1.Observable.of(new Array());
	            }
	            return _this.getAlbumsByIds(albumIds.albums.map(function (album) { return album.id; }))
	                .map(function (albums) {
	                if (albums.length > 0) {
	                    albums.forEach(function (album) {
	                        var tracks = [];
	                        album.tracks.items.forEach(function (track) {
	                            tracks.push(new track_1.Track(track.id, track.name, track.uri, "", "", "", "", ""));
	                        });
	                        _this.spotifyAlbums.albums.push(new spotifyAlbum_1.SpotifyAlbum(album.id, album.name, tracks, album.artists, album.release_date, album.images, album.copyrights, album.popularity, _this.getUnsanitisedUrl(album.uri)));
	                    });
	                    return _this.spotifyAlbums.albums.sort(function (a, b) {
	                        return +b.popularity - +a.popularity;
	                    });
	                }
	            });
	        })
	            .concatAll();
	    };
	    // private _neverGonnaGiveYouUp() {
	    //     return new SpotifyAlbums(0, [new SpotifyAlbum("6Cgd6xYLzcC6wdtuuMlyiS", null, [], [], null, [], [], null, null)]);
	    // }
	    SpotifyService.prototype.updateAlbum = function (spotifyAlbum, albumResult) {
	        spotifyAlbum.tracksLoaded = true;
	        if (albumResult && albumResult.length > 0) {
	            var tracks_1 = albumResult[0].Tracks;
	            spotifyAlbum.recordings.forEach(function (spotifyTrack) {
	                tracks_1.forEach(function (track) {
	                    if (track.SpotifyId === spotifyTrack.Id || track.Title.toLowerCase() === spotifyTrack.Title.toLowerCase()) {
	                        spotifyTrack.Bpm = track.Bpm;
	                        spotifyTrack.Duration = track.Duration;
	                    }
	                });
	            });
	        }
	    };
	    SpotifyService.prototype.getArtist = function (id) {
	        return this.http.get(this.spotifyUrl + "artists/" + id)
	            .map(this.extractArtistData)
	            .catch(this.handleError);
	    };
	    SpotifyService.prototype.extractArtistData = function (response) {
	        var artist = response.json();
	        if (!!artist) {
	            var newArtist = new artist_1.Artist(artist.id, artist.name, '', artist.images);
	            return newArtist;
	        }
	        return {};
	    };
	    SpotifyService.prototype.getUnsanitisedUrl = function (url) {
	        return this.sanitiser.bypassSecurityTrustUrl(url);
	    };
	    SpotifyService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http, platform_browser_1.DomSanitizationService])
	    ], SpotifyService);
	    return SpotifyService;
	}());
	exports.SpotifyService = SpotifyService;
	

/***/ },

/***/ 119:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var control_container_1 = __webpack_require__(69);
	var shared_1 = __webpack_require__(70);
	/**
	 * This is a base class for code shared between {@link NgModelGroup} and {@link FormGroupName}.
	 *
	 * @experimental
	 */
	var AbstractFormGroupDirective = (function (_super) {
	    __extends(AbstractFormGroupDirective, _super);
	    function AbstractFormGroupDirective() {
	        _super.apply(this, arguments);
	    }
	    AbstractFormGroupDirective.prototype.ngOnInit = function () {
	        this._checkParentType();
	        this.formDirective.addFormGroup(this);
	    };
	    AbstractFormGroupDirective.prototype.ngOnDestroy = function () { this.formDirective.removeFormGroup(this); };
	    Object.defineProperty(AbstractFormGroupDirective.prototype, "control", {
	        /**
	         * Get the {@link FormGroup} backing this binding.
	         */
	        get: function () { return this.formDirective.getFormGroup(this); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractFormGroupDirective.prototype, "path", {
	        /**
	         * Get the path to this control group.
	         */
	        get: function () { return shared_1.controlPath(this.name, this._parent); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractFormGroupDirective.prototype, "formDirective", {
	        /**
	         * Get the {@link Form} to which this group belongs.
	         */
	        get: function () { return this._parent.formDirective; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractFormGroupDirective.prototype, "validator", {
	        get: function () { return shared_1.composeValidators(this._validators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractFormGroupDirective.prototype, "asyncValidator", {
	        get: function () { return shared_1.composeAsyncValidators(this._asyncValidators); },
	        enumerable: true,
	        configurable: true
	    });
	    /** @internal */
	    AbstractFormGroupDirective.prototype._checkParentType = function () { };
	    return AbstractFormGroupDirective;
	}(control_container_1.ControlContainer));
	exports.AbstractFormGroupDirective = AbstractFormGroupDirective;
	//# sourceMappingURL=abstract_form_group_directive.js.map

/***/ },

/***/ 120:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(1);
	var async_1 = __webpack_require__(108);
	var collection_1 = __webpack_require__(46);
	var lang_1 = __webpack_require__(29);
	var model_1 = __webpack_require__(172);
	var validators_1 = __webpack_require__(52);
	var control_container_1 = __webpack_require__(69);
	var shared_1 = __webpack_require__(70);
	exports.formDirectiveProvider = {
	    provide: control_container_1.ControlContainer,
	    useExisting: core_1.forwardRef(function () { return NgForm; })
	};
	var resolvedPromise = Promise.resolve(null);
	var NgForm = (function (_super) {
	    __extends(NgForm, _super);
	    function NgForm(validators, asyncValidators) {
	        _super.call(this);
	        this._submitted = false;
	        this.ngSubmit = new async_1.EventEmitter();
	        this.form = new model_1.FormGroup({}, null, shared_1.composeValidators(validators), shared_1.composeAsyncValidators(asyncValidators));
	    }
	    Object.defineProperty(NgForm.prototype, "submitted", {
	        get: function () { return this._submitted; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgForm.prototype, "formDirective", {
	        get: function () { return this; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgForm.prototype, "control", {
	        get: function () { return this.form; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgForm.prototype, "path", {
	        get: function () { return []; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgForm.prototype, "controls", {
	        get: function () { return this.form.controls; },
	        enumerable: true,
	        configurable: true
	    });
	    NgForm.prototype.addControl = function (dir) {
	        var _this = this;
	        resolvedPromise.then(function () {
	            var container = _this._findContainer(dir.path);
	            dir._control = container.registerControl(dir.name, dir.control);
	            shared_1.setUpControl(dir.control, dir);
	            dir.control.updateValueAndValidity({ emitEvent: false });
	        });
	    };
	    NgForm.prototype.getControl = function (dir) { return this.form.get(dir.path); };
	    NgForm.prototype.removeControl = function (dir) {
	        var _this = this;
	        resolvedPromise.then(function () {
	            var container = _this._findContainer(dir.path);
	            if (lang_1.isPresent(container)) {
	                container.removeControl(dir.name);
	            }
	        });
	    };
	    NgForm.prototype.addFormGroup = function (dir) {
	        var _this = this;
	        resolvedPromise.then(function () {
	            var container = _this._findContainer(dir.path);
	            var group = new model_1.FormGroup({});
	            shared_1.setUpFormContainer(group, dir);
	            container.registerControl(dir.name, group);
	            group.updateValueAndValidity({ emitEvent: false });
	        });
	    };
	    NgForm.prototype.removeFormGroup = function (dir) {
	        var _this = this;
	        resolvedPromise.then(function () {
	            var container = _this._findContainer(dir.path);
	            if (lang_1.isPresent(container)) {
	                container.removeControl(dir.name);
	            }
	        });
	    };
	    NgForm.prototype.getFormGroup = function (dir) { return this.form.get(dir.path); };
	    NgForm.prototype.updateModel = function (dir, value) {
	        var _this = this;
	        resolvedPromise.then(function () {
	            var ctrl = _this.form.get(dir.path);
	            ctrl.setValue(value);
	        });
	    };
	    NgForm.prototype.setValue = function (value) { this.control.setValue(value); };
	    NgForm.prototype.onSubmit = function () {
	        this._submitted = true;
	        this.ngSubmit.emit(null);
	        return false;
	    };
	    NgForm.prototype.onReset = function () { this.form.reset(); };
	    /** @internal */
	    NgForm.prototype._findContainer = function (path) {
	        path.pop();
	        return collection_1.ListWrapper.isEmpty(path) ? this.form : this.form.get(path);
	    };
	    /** @nocollapse */
	    NgForm.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]',
	                    providers: [exports.formDirectiveProvider],
	                    host: { '(submit)': 'onSubmit()', '(reset)': 'onReset()' },
	                    outputs: ['ngSubmit'],
	                    exportAs: 'ngForm'
	                },] },
	    ];
	    /** @nocollapse */
	    NgForm.ctorParameters = [
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	    ];
	    return NgForm;
	}(control_container_1.ControlContainer));
	exports.NgForm = NgForm;
	//# sourceMappingURL=ng_form.js.map

/***/ },

/***/ 121:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(1);
	var async_1 = __webpack_require__(108);
	var collection_1 = __webpack_require__(46);
	var lang_1 = __webpack_require__(29);
	var validators_1 = __webpack_require__(52);
	var control_container_1 = __webpack_require__(69);
	var reactive_errors_1 = __webpack_require__(261);
	var shared_1 = __webpack_require__(70);
	exports.formDirectiveProvider = {
	    provide: control_container_1.ControlContainer,
	    useExisting: core_1.forwardRef(function () { return FormGroupDirective; })
	};
	var FormGroupDirective = (function (_super) {
	    __extends(FormGroupDirective, _super);
	    function FormGroupDirective(_validators, _asyncValidators) {
	        _super.call(this);
	        this._validators = _validators;
	        this._asyncValidators = _asyncValidators;
	        this._submitted = false;
	        this.directives = [];
	        this.form = null;
	        this.ngSubmit = new async_1.EventEmitter();
	    }
	    FormGroupDirective.prototype.ngOnChanges = function (changes) {
	        this._checkFormPresent();
	        if (collection_1.StringMapWrapper.contains(changes, 'form')) {
	            var sync = shared_1.composeValidators(this._validators);
	            this.form.validator = validators_1.Validators.compose([this.form.validator, sync]);
	            var async = shared_1.composeAsyncValidators(this._asyncValidators);
	            this.form.asyncValidator = validators_1.Validators.composeAsync([this.form.asyncValidator, async]);
	            this.form.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        }
	        this._updateDomValue();
	    };
	    Object.defineProperty(FormGroupDirective.prototype, "submitted", {
	        get: function () { return this._submitted; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormGroupDirective.prototype, "formDirective", {
	        get: function () { return this; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormGroupDirective.prototype, "control", {
	        get: function () { return this.form; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormGroupDirective.prototype, "path", {
	        get: function () { return []; },
	        enumerable: true,
	        configurable: true
	    });
	    FormGroupDirective.prototype.addControl = function (dir) {
	        var ctrl = this.form.get(dir.path);
	        shared_1.setUpControl(ctrl, dir);
	        ctrl.updateValueAndValidity({ emitEvent: false });
	        this.directives.push(dir);
	    };
	    FormGroupDirective.prototype.getControl = function (dir) { return this.form.get(dir.path); };
	    FormGroupDirective.prototype.removeControl = function (dir) { collection_1.ListWrapper.remove(this.directives, dir); };
	    FormGroupDirective.prototype.addFormGroup = function (dir) {
	        var ctrl = this.form.get(dir.path);
	        shared_1.setUpFormContainer(ctrl, dir);
	        ctrl.updateValueAndValidity({ emitEvent: false });
	    };
	    FormGroupDirective.prototype.removeFormGroup = function (dir) { };
	    FormGroupDirective.prototype.getFormGroup = function (dir) { return this.form.get(dir.path); };
	    FormGroupDirective.prototype.addFormArray = function (dir) {
	        var ctrl = this.form.get(dir.path);
	        shared_1.setUpFormContainer(ctrl, dir);
	        ctrl.updateValueAndValidity({ emitEvent: false });
	    };
	    FormGroupDirective.prototype.removeFormArray = function (dir) { };
	    FormGroupDirective.prototype.getFormArray = function (dir) { return this.form.get(dir.path); };
	    FormGroupDirective.prototype.updateModel = function (dir, value) {
	        var ctrl = this.form.get(dir.path);
	        ctrl.setValue(value);
	    };
	    FormGroupDirective.prototype.onSubmit = function () {
	        this._submitted = true;
	        this.ngSubmit.emit(null);
	        return false;
	    };
	    FormGroupDirective.prototype.onReset = function () { this.form.reset(); };
	    /** @internal */
	    FormGroupDirective.prototype._updateDomValue = function () {
	        var _this = this;
	        this.directives.forEach(function (dir) {
	            var ctrl = _this.form.get(dir.path);
	            dir.valueAccessor.writeValue(ctrl.value);
	        });
	    };
	    FormGroupDirective.prototype._checkFormPresent = function () {
	        if (lang_1.isBlank(this.form)) {
	            reactive_errors_1.ReactiveErrors.missingFormException();
	        }
	    };
	    /** @nocollapse */
	    FormGroupDirective.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[formGroup]',
	                    providers: [exports.formDirectiveProvider],
	                    host: { '(submit)': 'onSubmit()', '(reset)': 'onReset()' },
	                    exportAs: 'ngForm'
	                },] },
	    ];
	    /** @nocollapse */
	    FormGroupDirective.ctorParameters = [
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	    ];
	    /** @nocollapse */
	    FormGroupDirective.propDecorators = {
	        'form': [{ type: core_1.Input, args: ['formGroup',] },],
	        'ngSubmit': [{ type: core_1.Output },],
	    };
	    return FormGroupDirective;
	}(control_container_1.ControlContainer));
	exports.FormGroupDirective = FormGroupDirective;
	//# sourceMappingURL=form_group_directive.js.map

/***/ },

/***/ 122:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(1);
	var validators_1 = __webpack_require__(52);
	var abstract_form_group_directive_1 = __webpack_require__(119);
	var control_container_1 = __webpack_require__(69);
	var reactive_errors_1 = __webpack_require__(261);
	var shared_1 = __webpack_require__(70);
	var form_group_directive_1 = __webpack_require__(121);
	exports.formGroupNameProvider = {
	    provide: control_container_1.ControlContainer,
	    useExisting: core_1.forwardRef(function () { return FormGroupName; })
	};
	var FormGroupName = (function (_super) {
	    __extends(FormGroupName, _super);
	    function FormGroupName(parent, validators, asyncValidators) {
	        _super.call(this);
	        this._parent = parent;
	        this._validators = validators;
	        this._asyncValidators = asyncValidators;
	    }
	    /** @internal */
	    FormGroupName.prototype._checkParentType = function () {
	        if (_hasInvalidParent(this._parent)) {
	            reactive_errors_1.ReactiveErrors.groupParentException();
	        }
	    };
	    /** @nocollapse */
	    FormGroupName.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[formGroupName]', providers: [exports.formGroupNameProvider] },] },
	    ];
	    /** @nocollapse */
	    FormGroupName.ctorParameters = [
	        { type: control_container_1.ControlContainer, decorators: [{ type: core_1.Optional }, { type: core_1.Host }, { type: core_1.SkipSelf },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	    ];
	    /** @nocollapse */
	    FormGroupName.propDecorators = {
	        'name': [{ type: core_1.Input, args: ['formGroupName',] },],
	    };
	    return FormGroupName;
	}(abstract_form_group_directive_1.AbstractFormGroupDirective));
	exports.FormGroupName = FormGroupName;
	exports.formArrayNameProvider = {
	    provide: control_container_1.ControlContainer,
	    useExisting: core_1.forwardRef(function () { return FormArrayName; })
	};
	var FormArrayName = (function (_super) {
	    __extends(FormArrayName, _super);
	    function FormArrayName(parent, validators, asyncValidators) {
	        _super.call(this);
	        this._parent = parent;
	        this._validators = validators;
	        this._asyncValidators = asyncValidators;
	    }
	    FormArrayName.prototype.ngOnInit = function () {
	        this._checkParentType();
	        this.formDirective.addFormArray(this);
	    };
	    FormArrayName.prototype.ngOnDestroy = function () { this.formDirective.removeFormArray(this); };
	    Object.defineProperty(FormArrayName.prototype, "control", {
	        get: function () { return this.formDirective.getFormArray(this); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormArrayName.prototype, "formDirective", {
	        get: function () { return this._parent.formDirective; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormArrayName.prototype, "path", {
	        get: function () { return shared_1.controlPath(this.name, this._parent); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormArrayName.prototype, "validator", {
	        get: function () { return shared_1.composeValidators(this._validators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormArrayName.prototype, "asyncValidator", {
	        get: function () { return shared_1.composeAsyncValidators(this._asyncValidators); },
	        enumerable: true,
	        configurable: true
	    });
	    FormArrayName.prototype._checkParentType = function () {
	        if (_hasInvalidParent(this._parent)) {
	            reactive_errors_1.ReactiveErrors.arrayParentException();
	        }
	    };
	    /** @nocollapse */
	    FormArrayName.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[formArrayName]', providers: [exports.formArrayNameProvider] },] },
	    ];
	    /** @nocollapse */
	    FormArrayName.ctorParameters = [
	        { type: control_container_1.ControlContainer, decorators: [{ type: core_1.Optional }, { type: core_1.Host }, { type: core_1.SkipSelf },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	    ];
	    /** @nocollapse */
	    FormArrayName.propDecorators = {
	        'name': [{ type: core_1.Input, args: ['formArrayName',] },],
	    };
	    return FormArrayName;
	}(control_container_1.ControlContainer));
	exports.FormArrayName = FormArrayName;
	function _hasInvalidParent(parent) {
	    return !(parent instanceof FormGroupName) && !(parent instanceof form_group_directive_1.FormGroupDirective) &&
	        !(parent instanceof FormArrayName);
	}
	//# sourceMappingURL=form_group_name.js.map

/***/ },

/***/ 166:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	var control_value_accessor_1 = __webpack_require__(51);
	exports.CHECKBOX_VALUE_ACCESSOR = {
	    provide: control_value_accessor_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return CheckboxControlValueAccessor; }),
	    multi: true
	};
	var CheckboxControlValueAccessor = (function () {
	    function CheckboxControlValueAccessor(_renderer, _elementRef) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	    }
	    CheckboxControlValueAccessor.prototype.writeValue = function (value) {
	        this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', value);
	    };
	    CheckboxControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	    CheckboxControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    /** @nocollapse */
	    CheckboxControlValueAccessor.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
	                    host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
	                    providers: [exports.CHECKBOX_VALUE_ACCESSOR]
	                },] },
	    ];
	    /** @nocollapse */
	    CheckboxControlValueAccessor.ctorParameters = [
	        { type: core_1.Renderer, },
	        { type: core_1.ElementRef, },
	    ];
	    return CheckboxControlValueAccessor;
	}());
	exports.CheckboxControlValueAccessor = CheckboxControlValueAccessor;
	//# sourceMappingURL=checkbox_value_accessor.js.map

/***/ },

/***/ 167:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	var lang_1 = __webpack_require__(29);
	var control_value_accessor_1 = __webpack_require__(51);
	exports.DEFAULT_VALUE_ACCESSOR = {
	    provide: control_value_accessor_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return DefaultValueAccessor; }),
	    multi: true
	};
	var DefaultValueAccessor = (function () {
	    function DefaultValueAccessor(_renderer, _elementRef) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	    }
	    DefaultValueAccessor.prototype.writeValue = function (value) {
	        var normalizedValue = lang_1.isBlank(value) ? '' : value;
	        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
	    };
	    DefaultValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	    DefaultValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    /** @nocollapse */
	    DefaultValueAccessor.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
	                    // TODO: vsavkin replace the above selector with the one below it once
	                    // https://github.com/angular/angular/issues/3011 is implemented
	                    // selector: '[ngControl],[ngModel],[ngFormControl]',
	                    host: { '(input)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	                    providers: [exports.DEFAULT_VALUE_ACCESSOR]
	                },] },
	    ];
	    /** @nocollapse */
	    DefaultValueAccessor.ctorParameters = [
	        { type: core_1.Renderer, },
	        { type: core_1.ElementRef, },
	    ];
	    return DefaultValueAccessor;
	}());
	exports.DefaultValueAccessor = DefaultValueAccessor;
	//# sourceMappingURL=default_value_accessor.js.map

/***/ },

/***/ 168:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(1);
	var validators_1 = __webpack_require__(52);
	var abstract_form_group_directive_1 = __webpack_require__(119);
	var control_container_1 = __webpack_require__(69);
	var ng_form_1 = __webpack_require__(120);
	var template_driven_errors_1 = __webpack_require__(384);
	exports.modelGroupProvider = {
	    provide: control_container_1.ControlContainer,
	    useExisting: core_1.forwardRef(function () { return NgModelGroup; })
	};
	var NgModelGroup = (function (_super) {
	    __extends(NgModelGroup, _super);
	    function NgModelGroup(parent, validators, asyncValidators) {
	        _super.call(this);
	        this._parent = parent;
	        this._validators = validators;
	        this._asyncValidators = asyncValidators;
	    }
	    /** @internal */
	    NgModelGroup.prototype._checkParentType = function () {
	        if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof ng_form_1.NgForm)) {
	            template_driven_errors_1.TemplateDrivenErrors.modelGroupParentException();
	        }
	    };
	    /** @nocollapse */
	    NgModelGroup.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[ngModelGroup]', providers: [exports.modelGroupProvider], exportAs: 'ngModelGroup' },] },
	    ];
	    /** @nocollapse */
	    NgModelGroup.ctorParameters = [
	        { type: control_container_1.ControlContainer, decorators: [{ type: core_1.Host }, { type: core_1.SkipSelf },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	    ];
	    /** @nocollapse */
	    NgModelGroup.propDecorators = {
	        'name': [{ type: core_1.Input, args: ['ngModelGroup',] },],
	    };
	    return NgModelGroup;
	}(abstract_form_group_directive_1.AbstractFormGroupDirective));
	exports.NgModelGroup = NgModelGroup;
	//# sourceMappingURL=ng_model_group.js.map

/***/ },

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	var collection_1 = __webpack_require__(46);
	var exceptions_1 = __webpack_require__(88);
	var lang_1 = __webpack_require__(29);
	var control_value_accessor_1 = __webpack_require__(51);
	var ng_control_1 = __webpack_require__(87);
	exports.RADIO_VALUE_ACCESSOR = {
	    provide: control_value_accessor_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return RadioControlValueAccessor; }),
	    multi: true
	};
	var RadioControlRegistry = (function () {
	    function RadioControlRegistry() {
	        this._accessors = [];
	    }
	    RadioControlRegistry.prototype.add = function (control, accessor) {
	        this._accessors.push([control, accessor]);
	    };
	    RadioControlRegistry.prototype.remove = function (accessor) {
	        var indexToRemove = -1;
	        for (var i = 0; i < this._accessors.length; ++i) {
	            if (this._accessors[i][1] === accessor) {
	                indexToRemove = i;
	            }
	        }
	        collection_1.ListWrapper.removeAt(this._accessors, indexToRemove);
	    };
	    RadioControlRegistry.prototype.select = function (accessor) {
	        var _this = this;
	        this._accessors.forEach(function (c) {
	            if (_this._isSameGroup(c, accessor) && c[1] !== accessor) {
	                c[1].fireUncheck(accessor.value);
	            }
	        });
	    };
	    RadioControlRegistry.prototype._isSameGroup = function (controlPair, accessor) {
	        if (!controlPair[0].control)
	            return false;
	        return controlPair[0].control.root === accessor._control.control.root &&
	            controlPair[1].name === accessor.name;
	    };
	    /** @nocollapse */
	    RadioControlRegistry.decorators = [
	        { type: core_1.Injectable },
	    ];
	    return RadioControlRegistry;
	}());
	exports.RadioControlRegistry = RadioControlRegistry;
	var RadioControlValueAccessor = (function () {
	    function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        this._registry = _registry;
	        this._injector = _injector;
	        this.onChange = function () { };
	        this.onTouched = function () { };
	    }
	    RadioControlValueAccessor.prototype.ngOnInit = function () {
	        this._control = this._injector.get(ng_control_1.NgControl);
	        this._checkName();
	        this._registry.add(this._control, this);
	    };
	    RadioControlValueAccessor.prototype.ngOnDestroy = function () { this._registry.remove(this); };
	    RadioControlValueAccessor.prototype.writeValue = function (value) {
	        this._state = value === this.value;
	        if (lang_1.isPresent(value)) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', this._state);
	        }
	    };
	    RadioControlValueAccessor.prototype.registerOnChange = function (fn) {
	        var _this = this;
	        this._fn = fn;
	        this.onChange = function () {
	            fn(_this.value);
	            _this._registry.select(_this);
	        };
	    };
	    RadioControlValueAccessor.prototype.fireUncheck = function (value) { this.writeValue(value); };
	    RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    RadioControlValueAccessor.prototype._checkName = function () {
	        if (this.name && this.formControlName && this.name !== this.formControlName) {
	            this._throwNameError();
	        }
	        if (!this.name && this.formControlName)
	            this.name = this.formControlName;
	    };
	    RadioControlValueAccessor.prototype._throwNameError = function () {
	        throw new exceptions_1.BaseException("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
	    };
	    /** @nocollapse */
	    RadioControlValueAccessor.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
	                    host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
	                    providers: [exports.RADIO_VALUE_ACCESSOR]
	                },] },
	    ];
	    /** @nocollapse */
	    RadioControlValueAccessor.ctorParameters = [
	        { type: core_1.Renderer, },
	        { type: core_1.ElementRef, },
	        { type: RadioControlRegistry, },
	        { type: core_1.Injector, },
	    ];
	    /** @nocollapse */
	    RadioControlValueAccessor.propDecorators = {
	        'name': [{ type: core_1.Input },],
	        'formControlName': [{ type: core_1.Input },],
	        'value': [{ type: core_1.Input },],
	    };
	    return RadioControlValueAccessor;
	}());
	exports.RadioControlValueAccessor = RadioControlValueAccessor;
	//# sourceMappingURL=radio_control_value_accessor.js.map

/***/ },

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	var collection_1 = __webpack_require__(46);
	var lang_1 = __webpack_require__(29);
	var control_value_accessor_1 = __webpack_require__(51);
	exports.SELECT_VALUE_ACCESSOR = {
	    provide: control_value_accessor_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return SelectControlValueAccessor; }),
	    multi: true
	};
	function _buildValueString(id, value) {
	    if (lang_1.isBlank(id))
	        return "" + value;
	    if (!lang_1.isPrimitive(value))
	        value = 'Object';
	    return lang_1.StringWrapper.slice(id + ": " + value, 0, 50);
	}
	function _extractId(valueString) {
	    return valueString.split(':')[0];
	}
	var SelectControlValueAccessor = (function () {
	    function SelectControlValueAccessor(_renderer, _elementRef) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        /** @internal */
	        this._optionMap = new Map();
	        /** @internal */
	        this._idCounter = 0;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	    }
	    SelectControlValueAccessor.prototype.writeValue = function (value) {
	        this.value = value;
	        var valueString = _buildValueString(this._getOptionId(value), value);
	        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', valueString);
	    };
	    SelectControlValueAccessor.prototype.registerOnChange = function (fn) {
	        var _this = this;
	        this.onChange = function (valueString) {
	            _this.value = valueString;
	            fn(_this._getOptionValue(valueString));
	        };
	    };
	    SelectControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    /** @internal */
	    SelectControlValueAccessor.prototype._registerOption = function () { return (this._idCounter++).toString(); };
	    /** @internal */
	    SelectControlValueAccessor.prototype._getOptionId = function (value) {
	        for (var _i = 0, _a = collection_1.MapWrapper.keys(this._optionMap); _i < _a.length; _i++) {
	            var id = _a[_i];
	            if (lang_1.looseIdentical(this._optionMap.get(id), value))
	                return id;
	        }
	        return null;
	    };
	    /** @internal */
	    SelectControlValueAccessor.prototype._getOptionValue = function (valueString) {
	        var value = this._optionMap.get(_extractId(valueString));
	        return lang_1.isPresent(value) ? value : valueString;
	    };
	    /** @nocollapse */
	    SelectControlValueAccessor.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
	                    host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	                    providers: [exports.SELECT_VALUE_ACCESSOR]
	                },] },
	    ];
	    /** @nocollapse */
	    SelectControlValueAccessor.ctorParameters = [
	        { type: core_1.Renderer, },
	        { type: core_1.ElementRef, },
	    ];
	    return SelectControlValueAccessor;
	}());
	exports.SelectControlValueAccessor = SelectControlValueAccessor;
	var NgSelectOption = (function () {
	    function NgSelectOption(_element, _renderer, _select) {
	        this._element = _element;
	        this._renderer = _renderer;
	        this._select = _select;
	        if (lang_1.isPresent(this._select))
	            this.id = this._select._registerOption();
	    }
	    Object.defineProperty(NgSelectOption.prototype, "ngValue", {
	        set: function (value) {
	            if (this._select == null)
	                return;
	            this._select._optionMap.set(this.id, value);
	            this._setElementValue(_buildValueString(this.id, value));
	            this._select.writeValue(this._select.value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgSelectOption.prototype, "value", {
	        set: function (value) {
	            this._setElementValue(value);
	            if (lang_1.isPresent(this._select))
	                this._select.writeValue(this._select.value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /** @internal */
	    NgSelectOption.prototype._setElementValue = function (value) {
	        this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
	    };
	    NgSelectOption.prototype.ngOnDestroy = function () {
	        if (lang_1.isPresent(this._select)) {
	            this._select._optionMap.delete(this.id);
	            this._select.writeValue(this._select.value);
	        }
	    };
	    /** @nocollapse */
	    NgSelectOption.decorators = [
	        { type: core_1.Directive, args: [{ selector: 'option' },] },
	    ];
	    /** @nocollapse */
	    NgSelectOption.ctorParameters = [
	        { type: core_1.ElementRef, },
	        { type: core_1.Renderer, },
	        { type: SelectControlValueAccessor, decorators: [{ type: core_1.Optional }, { type: core_1.Host },] },
	    ];
	    /** @nocollapse */
	    NgSelectOption.propDecorators = {
	        'ngValue': [{ type: core_1.Input, args: ['ngValue',] },],
	        'value': [{ type: core_1.Input, args: ['value',] },],
	    };
	    return NgSelectOption;
	}());
	exports.NgSelectOption = NgSelectOption;
	//# sourceMappingURL=select_control_value_accessor.js.map

/***/ },

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	var collection_1 = __webpack_require__(46);
	var lang_1 = __webpack_require__(29);
	var control_value_accessor_1 = __webpack_require__(51);
	exports.SELECT_MULTIPLE_VALUE_ACCESSOR = {
	    provide: control_value_accessor_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return SelectMultipleControlValueAccessor; }),
	    multi: true
	};
	function _buildValueString(id, value) {
	    if (lang_1.isBlank(id))
	        return "" + value;
	    if (lang_1.isString(value))
	        value = "'" + value + "'";
	    if (!lang_1.isPrimitive(value))
	        value = 'Object';
	    return lang_1.StringWrapper.slice(id + ": " + value, 0, 50);
	}
	function _extractId(valueString) {
	    return valueString.split(':')[0];
	}
	/** Mock interface for HTMLCollection */
	var HTMLCollection = (function () {
	    function HTMLCollection() {
	    }
	    return HTMLCollection;
	}());
	var SelectMultipleControlValueAccessor = (function () {
	    function SelectMultipleControlValueAccessor() {
	        /** @internal */
	        this._optionMap = new Map();
	        /** @internal */
	        this._idCounter = 0;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	    }
	    SelectMultipleControlValueAccessor.prototype.writeValue = function (value) {
	        var _this = this;
	        this.value = value;
	        if (value == null)
	            return;
	        var values = value;
	        // convert values to ids
	        var ids = values.map(function (v) { return _this._getOptionId(v); });
	        this._optionMap.forEach(function (opt, o) { opt._setSelected(ids.indexOf(o.toString()) > -1); });
	    };
	    SelectMultipleControlValueAccessor.prototype.registerOnChange = function (fn) {
	        var _this = this;
	        this.onChange = function (_) {
	            var selected = [];
	            if (_.hasOwnProperty('selectedOptions')) {
	                var options = _.selectedOptions;
	                for (var i = 0; i < options.length; i++) {
	                    var opt = options.item(i);
	                    var val = _this._getOptionValue(opt.value);
	                    selected.push(val);
	                }
	            }
	            else {
	                var options = _.options;
	                for (var i = 0; i < options.length; i++) {
	                    var opt = options.item(i);
	                    if (opt.selected) {
	                        var val = _this._getOptionValue(opt.value);
	                        selected.push(val);
	                    }
	                }
	            }
	            fn(selected);
	        };
	    };
	    SelectMultipleControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    /** @internal */
	    SelectMultipleControlValueAccessor.prototype._registerOption = function (value) {
	        var id = (this._idCounter++).toString();
	        this._optionMap.set(id, value);
	        return id;
	    };
	    /** @internal */
	    SelectMultipleControlValueAccessor.prototype._getOptionId = function (value) {
	        for (var _i = 0, _a = collection_1.MapWrapper.keys(this._optionMap); _i < _a.length; _i++) {
	            var id = _a[_i];
	            if (lang_1.looseIdentical(this._optionMap.get(id)._value, value))
	                return id;
	        }
	        return null;
	    };
	    /** @internal */
	    SelectMultipleControlValueAccessor.prototype._getOptionValue = function (valueString) {
	        var opt = this._optionMap.get(_extractId(valueString));
	        return lang_1.isPresent(opt) ? opt._value : valueString;
	    };
	    /** @nocollapse */
	    SelectMultipleControlValueAccessor.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
	                    host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
	                    providers: [exports.SELECT_MULTIPLE_VALUE_ACCESSOR]
	                },] },
	    ];
	    /** @nocollapse */
	    SelectMultipleControlValueAccessor.ctorParameters = [];
	    return SelectMultipleControlValueAccessor;
	}());
	exports.SelectMultipleControlValueAccessor = SelectMultipleControlValueAccessor;
	var NgSelectMultipleOption = (function () {
	    function NgSelectMultipleOption(_element, _renderer, _select) {
	        this._element = _element;
	        this._renderer = _renderer;
	        this._select = _select;
	        if (lang_1.isPresent(this._select)) {
	            this.id = this._select._registerOption(this);
	        }
	    }
	    Object.defineProperty(NgSelectMultipleOption.prototype, "ngValue", {
	        set: function (value) {
	            if (this._select == null)
	                return;
	            this._value = value;
	            this._setElementValue(_buildValueString(this.id, value));
	            this._select.writeValue(this._select.value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgSelectMultipleOption.prototype, "value", {
	        set: function (value) {
	            if (lang_1.isPresent(this._select)) {
	                this._value = value;
	                this._setElementValue(_buildValueString(this.id, value));
	                this._select.writeValue(this._select.value);
	            }
	            else {
	                this._setElementValue(value);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /** @internal */
	    NgSelectMultipleOption.prototype._setElementValue = function (value) {
	        this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
	    };
	    /** @internal */
	    NgSelectMultipleOption.prototype._setSelected = function (selected) {
	        this._renderer.setElementProperty(this._element.nativeElement, 'selected', selected);
	    };
	    NgSelectMultipleOption.prototype.ngOnDestroy = function () {
	        if (lang_1.isPresent(this._select)) {
	            this._select._optionMap.delete(this.id);
	            this._select.writeValue(this._select.value);
	        }
	    };
	    /** @nocollapse */
	    NgSelectMultipleOption.decorators = [
	        { type: core_1.Directive, args: [{ selector: 'option' },] },
	    ];
	    /** @nocollapse */
	    NgSelectMultipleOption.ctorParameters = [
	        { type: core_1.ElementRef, },
	        { type: core_1.Renderer, },
	        { type: SelectMultipleControlValueAccessor, decorators: [{ type: core_1.Optional }, { type: core_1.Host },] },
	    ];
	    /** @nocollapse */
	    NgSelectMultipleOption.propDecorators = {
	        'ngValue': [{ type: core_1.Input, args: ['ngValue',] },],
	        'value': [{ type: core_1.Input, args: ['value',] },],
	    };
	    return NgSelectMultipleOption;
	}());
	exports.NgSelectMultipleOption = NgSelectMultipleOption;
	exports.SELECT_DIRECTIVES = [SelectMultipleControlValueAccessor, NgSelectMultipleOption];
	//# sourceMappingURL=select_multiple_control_value_accessor.js.map

/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var PromiseObservable_1 = __webpack_require__(202);
	var shared_1 = __webpack_require__(70);
	var async_1 = __webpack_require__(108);
	var collection_1 = __webpack_require__(46);
	var exceptions_1 = __webpack_require__(88);
	var lang_1 = __webpack_require__(29);
	/**
	 * Indicates that a FormControl is valid, i.e. that no errors exist in the input value.
	 */
	exports.VALID = 'VALID';
	/**
	 * Indicates that a FormControl is invalid, i.e. that an error exists in the input value.
	 */
	exports.INVALID = 'INVALID';
	/**
	 * Indicates that a FormControl is pending, i.e. that async validation is occurring and
	 * errors are not yet available for the input value.
	 */
	exports.PENDING = 'PENDING';
	function isControl(control) {
	    return control instanceof AbstractControl;
	}
	exports.isControl = isControl;
	function _find(control, path, delimiter) {
	    if (lang_1.isBlank(path))
	        return null;
	    if (!(path instanceof Array)) {
	        path = path.split(delimiter);
	    }
	    if (path instanceof Array && collection_1.ListWrapper.isEmpty(path))
	        return null;
	    return path.reduce(function (v, name) {
	        if (v instanceof FormGroup) {
	            return lang_1.isPresent(v.controls[name]) ? v.controls[name] : null;
	        }
	        else if (v instanceof FormArray) {
	            var index = name;
	            return lang_1.isPresent(v.at(index)) ? v.at(index) : null;
	        }
	        else {
	            return null;
	        }
	    }, control);
	}
	function toObservable(r) {
	    return lang_1.isPromise(r) ? PromiseObservable_1.PromiseObservable.create(r) : r;
	}
	function coerceToValidator(validator) {
	    return Array.isArray(validator) ? shared_1.composeValidators(validator) : validator;
	}
	function coerceToAsyncValidator(asyncValidator) {
	    return Array.isArray(asyncValidator) ? shared_1.composeAsyncValidators(asyncValidator) : asyncValidator;
	}
	/**
	 * @experimental
	 */
	var AbstractControl = (function () {
	    function AbstractControl(validator, asyncValidator) {
	        this.validator = validator;
	        this.asyncValidator = asyncValidator;
	        this._pristine = true;
	        this._touched = false;
	    }
	    Object.defineProperty(AbstractControl.prototype, "value", {
	        get: function () { return this._value; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "status", {
	        get: function () { return this._status; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "valid", {
	        get: function () { return this._status === exports.VALID; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "invalid", {
	        get: function () { return this._status === exports.INVALID; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "errors", {
	        /**
	         * Returns the errors of this control.
	         */
	        get: function () { return this._errors; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "pristine", {
	        get: function () { return this._pristine; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "dirty", {
	        get: function () { return !this.pristine; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "touched", {
	        get: function () { return this._touched; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "untouched", {
	        get: function () { return !this._touched; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "valueChanges", {
	        get: function () { return this._valueChanges; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "statusChanges", {
	        get: function () { return this._statusChanges; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "pending", {
	        get: function () { return this._status == exports.PENDING; },
	        enumerable: true,
	        configurable: true
	    });
	    AbstractControl.prototype.setAsyncValidators = function (newValidator) {
	        this.asyncValidator = coerceToAsyncValidator(newValidator);
	    };
	    AbstractControl.prototype.clearAsyncValidators = function () { this.asyncValidator = null; };
	    AbstractControl.prototype.setValidators = function (newValidator) {
	        this.validator = coerceToValidator(newValidator);
	    };
	    AbstractControl.prototype.clearValidators = function () { this.validator = null; };
	    AbstractControl.prototype.markAsTouched = function (_a) {
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        onlySelf = lang_1.normalizeBool(onlySelf);
	        this._touched = true;
	        if (lang_1.isPresent(this._parent) && !onlySelf) {
	            this._parent.markAsTouched({ onlySelf: onlySelf });
	        }
	    };
	    AbstractControl.prototype.markAsDirty = function (_a) {
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        onlySelf = lang_1.normalizeBool(onlySelf);
	        this._pristine = false;
	        if (lang_1.isPresent(this._parent) && !onlySelf) {
	            this._parent.markAsDirty({ onlySelf: onlySelf });
	        }
	    };
	    AbstractControl.prototype.markAsPristine = function (_a) {
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this._pristine = true;
	        this._forEachChild(function (control) { control.markAsPristine({ onlySelf: true }); });
	        if (lang_1.isPresent(this._parent) && !onlySelf) {
	            this._parent._updatePristine({ onlySelf: onlySelf });
	        }
	    };
	    AbstractControl.prototype.markAsUntouched = function (_a) {
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this._touched = false;
	        this._forEachChild(function (control) { control.markAsUntouched({ onlySelf: true }); });
	        if (lang_1.isPresent(this._parent) && !onlySelf) {
	            this._parent._updateTouched({ onlySelf: onlySelf });
	        }
	    };
	    AbstractControl.prototype.markAsPending = function (_a) {
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        onlySelf = lang_1.normalizeBool(onlySelf);
	        this._status = exports.PENDING;
	        if (lang_1.isPresent(this._parent) && !onlySelf) {
	            this._parent.markAsPending({ onlySelf: onlySelf });
	        }
	    };
	    AbstractControl.prototype.setParent = function (parent) { this._parent = parent; };
	    AbstractControl.prototype.updateValueAndValidity = function (_a) {
	        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	        onlySelf = lang_1.normalizeBool(onlySelf);
	        emitEvent = lang_1.isPresent(emitEvent) ? emitEvent : true;
	        this._updateValue();
	        this._errors = this._runValidator();
	        this._status = this._calculateStatus();
	        if (this._status == exports.VALID || this._status == exports.PENDING) {
	            this._runAsyncValidator(emitEvent);
	        }
	        if (emitEvent) {
	            this._valueChanges.emit(this._value);
	            this._statusChanges.emit(this._status);
	        }
	        if (lang_1.isPresent(this._parent) && !onlySelf) {
	            this._parent.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        }
	    };
	    AbstractControl.prototype._runValidator = function () {
	        return lang_1.isPresent(this.validator) ? this.validator(this) : null;
	    };
	    AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
	        var _this = this;
	        if (lang_1.isPresent(this.asyncValidator)) {
	            this._status = exports.PENDING;
	            this._cancelExistingSubscription();
	            var obs = toObservable(this.asyncValidator(this));
	            this._asyncValidationSubscription = obs.subscribe({ next: function (res) { return _this.setErrors(res, { emitEvent: emitEvent }); } });
	        }
	    };
	    AbstractControl.prototype._cancelExistingSubscription = function () {
	        if (lang_1.isPresent(this._asyncValidationSubscription)) {
	            this._asyncValidationSubscription.unsubscribe();
	        }
	    };
	    /**
	     * Sets errors on a form control.
	     *
	     * This is used when validations are run not automatically, but manually by the user.
	     *
	     * Calling `setErrors` will also update the validity of the parent control.
	     *
	     * ## Usage
	     *
	     * ```
	     * var login = new FormControl("someLogin");
	     * login.setErrors({
	     *   "notUnique": true
	     * });
	     *
	     * expect(login.valid).toEqual(false);
	     * expect(login.errors).toEqual({"notUnique": true});
	     *
	     * login.updateValue("someOtherLogin");
	     *
	     * expect(login.valid).toEqual(true);
	     * ```
	     */
	    AbstractControl.prototype.setErrors = function (errors, _a) {
	        var emitEvent = (_a === void 0 ? {} : _a).emitEvent;
	        emitEvent = lang_1.isPresent(emitEvent) ? emitEvent : true;
	        this._errors = errors;
	        this._updateControlsErrors(emitEvent);
	    };
	    /**
	     * @deprecated - use get() instead
	     */
	    AbstractControl.prototype.find = function (path) { return _find(this, path, '/'); };
	    AbstractControl.prototype.get = function (path) { return _find(this, path, '.'); };
	    AbstractControl.prototype.getError = function (errorCode, path) {
	        if (path === void 0) { path = null; }
	        var control = lang_1.isPresent(path) && !collection_1.ListWrapper.isEmpty(path) ? this.find(path) : this;
	        if (lang_1.isPresent(control) && lang_1.isPresent(control._errors)) {
	            return collection_1.StringMapWrapper.get(control._errors, errorCode);
	        }
	        else {
	            return null;
	        }
	    };
	    AbstractControl.prototype.hasError = function (errorCode, path) {
	        if (path === void 0) { path = null; }
	        return lang_1.isPresent(this.getError(errorCode, path));
	    };
	    Object.defineProperty(AbstractControl.prototype, "root", {
	        get: function () {
	            var x = this;
	            while (lang_1.isPresent(x._parent)) {
	                x = x._parent;
	            }
	            return x;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /** @internal */
	    AbstractControl.prototype._updateControlsErrors = function (emitEvent) {
	        this._status = this._calculateStatus();
	        if (emitEvent) {
	            this._statusChanges.emit(this._status);
	        }
	        if (lang_1.isPresent(this._parent)) {
	            this._parent._updateControlsErrors(emitEvent);
	        }
	    };
	    /** @internal */
	    AbstractControl.prototype._initObservables = function () {
	        this._valueChanges = new async_1.EventEmitter();
	        this._statusChanges = new async_1.EventEmitter();
	    };
	    AbstractControl.prototype._calculateStatus = function () {
	        if (lang_1.isPresent(this._errors))
	            return exports.INVALID;
	        if (this._anyControlsHaveStatus(exports.PENDING))
	            return exports.PENDING;
	        if (this._anyControlsHaveStatus(exports.INVALID))
	            return exports.INVALID;
	        return exports.VALID;
	    };
	    /** @internal */
	    AbstractControl.prototype._anyControlsHaveStatus = function (status) {
	        return this._anyControls(function (control) { return control.status == status; });
	    };
	    /** @internal */
	    AbstractControl.prototype._anyControlsDirty = function () {
	        return this._anyControls(function (control) { return control.dirty; });
	    };
	    /** @internal */
	    AbstractControl.prototype._anyControlsTouched = function () {
	        return this._anyControls(function (control) { return control.touched; });
	    };
	    /** @internal */
	    AbstractControl.prototype._updatePristine = function (_a) {
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this._pristine = !this._anyControlsDirty();
	        if (lang_1.isPresent(this._parent) && !onlySelf) {
	            this._parent._updatePristine({ onlySelf: onlySelf });
	        }
	    };
	    /** @internal */
	    AbstractControl.prototype._updateTouched = function (_a) {
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this._touched = this._anyControlsTouched();
	        if (lang_1.isPresent(this._parent) && !onlySelf) {
	            this._parent._updateTouched({ onlySelf: onlySelf });
	        }
	    };
	    return AbstractControl;
	}());
	exports.AbstractControl = AbstractControl;
	/**
	 * Defines a part of a form that cannot be divided into other controls. `FormControl`s have values
	 * and
	 * validation state, which is determined by an optional validation function.
	 *
	 * `FormControl` is one of the three fundamental building blocks used to define forms in Angular,
	 * along
	 * with {@link FormGroup} and {@link FormArray}.
	 *
	 * ## Usage
	 *
	 * By default, a `FormControl` is created for every `<input>` or other form component.
	 * With {@link FormControlDirective} or {@link FormGroupDirective} an existing {@link FormControl}
	 * can be bound to a DOM element instead. This `FormControl` can be configured with a custom
	 * validation function.
	 *
	 * @experimental
	 */
	var FormControl = (function (_super) {
	    __extends(FormControl, _super);
	    function FormControl(value, validator, asyncValidator) {
	        if (value === void 0) { value = null; }
	        if (validator === void 0) { validator = null; }
	        if (asyncValidator === void 0) { asyncValidator = null; }
	        _super.call(this, coerceToValidator(validator), coerceToAsyncValidator(asyncValidator));
	        /** @internal */
	        this._onChange = [];
	        this._value = value;
	        this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        this._initObservables();
	    }
	    /**
	     * Set the value of the form control to `value`.
	     *
	     * If `onlySelf` is `true`, this change will only affect the validation of this `FormControl`
	     * and not its parent component. If `emitEvent` is `true`, this change will cause a
	     * `valueChanges` event on the `FormControl` to be emitted. Both of these options default to
	     * `false`.
	     *
	     * If `emitModelToViewChange` is `true`, the view will be notified about the new value
	     * via an `onChange` event. This is the default behavior if `emitModelToViewChange` is not
	     * specified.
	     *
	     * If `emitViewToModelChange` is `true`, an ngModelChange event will be fired to update the
	     * model.  This is the default behavior if `emitViewToModelChange` is not specified.
	     */
	    FormControl.prototype.setValue = function (value, _a) {
	        var _this = this;
	        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent, emitModelToViewChange = _b.emitModelToViewChange, emitViewToModelChange = _b.emitViewToModelChange;
	        emitModelToViewChange = lang_1.isPresent(emitModelToViewChange) ? emitModelToViewChange : true;
	        emitViewToModelChange = lang_1.isPresent(emitViewToModelChange) ? emitViewToModelChange : true;
	        this._value = value;
	        if (this._onChange.length && emitModelToViewChange) {
	            this._onChange.forEach(function (changeFn) { return changeFn(_this._value, emitViewToModelChange); });
	        }
	        this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	    };
	    /**
	     * This function is functionally the same as updateValue() at this level.  It exists for
	     * symmetry with patchValue() on FormGroups and FormArrays, where it does behave differently.
	     */
	    FormControl.prototype.patchValue = function (value, options) {
	        if (options === void 0) { options = {}; }
	        this.setValue(value, options);
	    };
	    /**
	     * @deprecated Please use setValue() instead.
	     */
	    FormControl.prototype.updateValue = function (value, options) {
	        if (options === void 0) { options = {}; }
	        this.setValue(value, options);
	    };
	    FormControl.prototype.reset = function (value, _a) {
	        if (value === void 0) { value = null; }
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this.markAsPristine({ onlySelf: onlySelf });
	        this.markAsUntouched({ onlySelf: onlySelf });
	        this.setValue(value, { onlySelf: onlySelf });
	    };
	    /**
	     * @internal
	     */
	    FormControl.prototype._updateValue = function () { };
	    /**
	     * @internal
	     */
	    FormControl.prototype._anyControls = function (condition) { return false; };
	    /**
	     * Register a listener for change events.
	     */
	    FormControl.prototype.registerOnChange = function (fn) { this._onChange.push(fn); };
	    /**
	     * @internal
	     */
	    FormControl.prototype._forEachChild = function (cb) { };
	    return FormControl;
	}(AbstractControl));
	exports.FormControl = FormControl;
	/**
	 * Defines a part of a form, of fixed length, that can contain other controls.
	 *
	 * A `FormGroup` aggregates the values of each {@link FormControl} in the group.
	 * The status of a `FormGroup` depends on the status of its children.
	 * If one of the controls in a group is invalid, the entire group is invalid.
	 * Similarly, if a control changes its value, the entire group changes as well.
	 *
	 * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
	 * along with {@link FormControl} and {@link FormArray}. {@link FormArray} can also contain other
	 * controls, but is of variable length.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/23DESOpbNnBpBHZt1BR4?p=preview))
	 *
	 * @experimental
	 */
	var FormGroup = (function (_super) {
	    __extends(FormGroup, _super);
	    function FormGroup(controls, optionals, validator, asyncValidator) {
	        if (optionals === void 0) { optionals = null; }
	        if (validator === void 0) { validator = null; }
	        if (asyncValidator === void 0) { asyncValidator = null; }
	        _super.call(this, validator, asyncValidator);
	        this.controls = controls;
	        this._optionals = lang_1.isPresent(optionals) ? optionals : {};
	        this._initObservables();
	        this._setParentForControls();
	        this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	    }
	    /**
	     * Register a control with the group's list of controls.
	     */
	    FormGroup.prototype.registerControl = function (name, control) {
	        if (this.controls[name])
	            return this.controls[name];
	        this.controls[name] = control;
	        control.setParent(this);
	        return control;
	    };
	    /**
	     * Add a control to this group.
	     */
	    FormGroup.prototype.addControl = function (name, control) {
	        this.registerControl(name, control);
	        this.updateValueAndValidity();
	    };
	    /**
	     * Remove a control from this group.
	     */
	    FormGroup.prototype.removeControl = function (name) {
	        collection_1.StringMapWrapper.delete(this.controls, name);
	        this.updateValueAndValidity();
	    };
	    /**
	     * Mark the named control as non-optional.
	     */
	    FormGroup.prototype.include = function (controlName) {
	        collection_1.StringMapWrapper.set(this._optionals, controlName, true);
	        this.updateValueAndValidity();
	    };
	    /**
	     * Mark the named control as optional.
	     */
	    FormGroup.prototype.exclude = function (controlName) {
	        collection_1.StringMapWrapper.set(this._optionals, controlName, false);
	        this.updateValueAndValidity();
	    };
	    /**
	     * Check whether there is a control with the given name in the group.
	     */
	    FormGroup.prototype.contains = function (controlName) {
	        var c = collection_1.StringMapWrapper.contains(this.controls, controlName);
	        return c && this._included(controlName);
	    };
	    FormGroup.prototype.setValue = function (value, _a) {
	        var _this = this;
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this._checkAllValuesPresent(value);
	        collection_1.StringMapWrapper.forEach(value, function (newValue, name) {
	            _this._throwIfControlMissing(name);
	            _this.controls[name].setValue(newValue, { onlySelf: true });
	        });
	        this.updateValueAndValidity({ onlySelf: onlySelf });
	    };
	    FormGroup.prototype.patchValue = function (value, _a) {
	        var _this = this;
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        collection_1.StringMapWrapper.forEach(value, function (newValue, name) {
	            if (_this.controls[name]) {
	                _this.controls[name].patchValue(newValue, { onlySelf: true });
	            }
	        });
	        this.updateValueAndValidity({ onlySelf: onlySelf });
	    };
	    FormGroup.prototype.reset = function (value, _a) {
	        if (value === void 0) { value = {}; }
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this._forEachChild(function (control, name) {
	            control.reset(value[name], { onlySelf: true });
	        });
	        this.updateValueAndValidity({ onlySelf: onlySelf });
	        this._updatePristine({ onlySelf: onlySelf });
	        this._updateTouched({ onlySelf: onlySelf });
	    };
	    /** @internal */
	    FormGroup.prototype._throwIfControlMissing = function (name) {
	        if (!Object.keys(this.controls).length) {
	            throw new exceptions_1.BaseException("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
	        }
	        if (!this.controls[name]) {
	            throw new exceptions_1.BaseException("Cannot find form control with name: " + name + ".");
	        }
	    };
	    /** @internal */
	    FormGroup.prototype._forEachChild = function (cb) {
	        collection_1.StringMapWrapper.forEach(this.controls, cb);
	    };
	    /** @internal */
	    FormGroup.prototype._setParentForControls = function () {
	        var _this = this;
	        this._forEachChild(function (control, name) { control.setParent(_this); });
	    };
	    /** @internal */
	    FormGroup.prototype._updateValue = function () { this._value = this._reduceValue(); };
	    /** @internal */
	    FormGroup.prototype._anyControls = function (condition) {
	        var _this = this;
	        var res = false;
	        this._forEachChild(function (control, name) {
	            res = res || (_this.contains(name) && condition(control));
	        });
	        return res;
	    };
	    /** @internal */
	    FormGroup.prototype._reduceValue = function () {
	        return this._reduceChildren({}, function (acc, control, name) {
	            acc[name] = control.value;
	            return acc;
	        });
	    };
	    /** @internal */
	    FormGroup.prototype._reduceChildren = function (initValue, fn) {
	        var _this = this;
	        var res = initValue;
	        this._forEachChild(function (control, name) {
	            if (_this._included(name)) {
	                res = fn(res, control, name);
	            }
	        });
	        return res;
	    };
	    /** @internal */
	    FormGroup.prototype._included = function (controlName) {
	        var isOptional = collection_1.StringMapWrapper.contains(this._optionals, controlName);
	        return !isOptional || collection_1.StringMapWrapper.get(this._optionals, controlName);
	    };
	    /** @internal */
	    FormGroup.prototype._checkAllValuesPresent = function (value) {
	        this._forEachChild(function (control, name) {
	            if (value[name] === undefined) {
	                throw new exceptions_1.BaseException("Must supply a value for form control with name: '" + name + "'.");
	            }
	        });
	    };
	    return FormGroup;
	}(AbstractControl));
	exports.FormGroup = FormGroup;
	/**
	 * Defines a part of a form, of variable length, that can contain other controls.
	 *
	 * A `FormArray` aggregates the values of each {@link FormControl} in the group.
	 * The status of a `FormArray` depends on the status of its children.
	 * If one of the controls in a group is invalid, the entire array is invalid.
	 * Similarly, if a control changes its value, the entire array changes as well.
	 *
	 * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
	 * along with {@link FormControl} and {@link FormGroup}. {@link FormGroup} can also contain
	 * other controls, but is of fixed length.
	 *
	 * ## Adding or removing controls
	 *
	 * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
	 * in `FormArray` itself. These methods ensure the controls are properly tracked in the
	 * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
	 * the `FormArray` directly, as that will result in strange and unexpected behavior such
	 * as broken change detection.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/23DESOpbNnBpBHZt1BR4?p=preview))
	 *
	 * @experimental
	 */
	var FormArray = (function (_super) {
	    __extends(FormArray, _super);
	    function FormArray(controls, validator, asyncValidator) {
	        if (validator === void 0) { validator = null; }
	        if (asyncValidator === void 0) { asyncValidator = null; }
	        _super.call(this, validator, asyncValidator);
	        this.controls = controls;
	        this._initObservables();
	        this._setParentForControls();
	        this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	    }
	    /**
	     * Get the {@link AbstractControl} at the given `index` in the array.
	     */
	    FormArray.prototype.at = function (index) { return this.controls[index]; };
	    /**
	     * Insert a new {@link AbstractControl} at the end of the array.
	     */
	    FormArray.prototype.push = function (control) {
	        this.controls.push(control);
	        control.setParent(this);
	        this.updateValueAndValidity();
	    };
	    /**
	     * Insert a new {@link AbstractControl} at the given `index` in the array.
	     */
	    FormArray.prototype.insert = function (index, control) {
	        collection_1.ListWrapper.insert(this.controls, index, control);
	        control.setParent(this);
	        this.updateValueAndValidity();
	    };
	    /**
	     * Remove the control at the given `index` in the array.
	     */
	    FormArray.prototype.removeAt = function (index) {
	        collection_1.ListWrapper.removeAt(this.controls, index);
	        this.updateValueAndValidity();
	    };
	    Object.defineProperty(FormArray.prototype, "length", {
	        /**
	         * Length of the control array.
	         */
	        get: function () { return this.controls.length; },
	        enumerable: true,
	        configurable: true
	    });
	    FormArray.prototype.setValue = function (value, _a) {
	        var _this = this;
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this._checkAllValuesPresent(value);
	        value.forEach(function (newValue, index) {
	            _this._throwIfControlMissing(index);
	            _this.at(index).setValue(newValue, { onlySelf: true });
	        });
	        this.updateValueAndValidity({ onlySelf: onlySelf });
	    };
	    FormArray.prototype.patchValue = function (value, _a) {
	        var _this = this;
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        value.forEach(function (newValue, index) {
	            if (_this.at(index)) {
	                _this.at(index).patchValue(newValue, { onlySelf: true });
	            }
	        });
	        this.updateValueAndValidity({ onlySelf: onlySelf });
	    };
	    FormArray.prototype.reset = function (value, _a) {
	        if (value === void 0) { value = []; }
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this._forEachChild(function (control, index) {
	            control.reset(value[index], { onlySelf: true });
	        });
	        this.updateValueAndValidity({ onlySelf: onlySelf });
	        this._updatePristine({ onlySelf: onlySelf });
	        this._updateTouched({ onlySelf: onlySelf });
	    };
	    /** @internal */
	    FormArray.prototype._throwIfControlMissing = function (index) {
	        if (!this.controls.length) {
	            throw new exceptions_1.BaseException("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
	        }
	        if (!this.at(index)) {
	            throw new exceptions_1.BaseException("Cannot find form control at index " + index);
	        }
	    };
	    /** @internal */
	    FormArray.prototype._forEachChild = function (cb) {
	        this.controls.forEach(function (control, index) { cb(control, index); });
	    };
	    /** @internal */
	    FormArray.prototype._updateValue = function () { this._value = this.controls.map(function (control) { return control.value; }); };
	    /** @internal */
	    FormArray.prototype._anyControls = function (condition) {
	        return this.controls.some(function (control) { return condition(control); });
	    };
	    /** @internal */
	    FormArray.prototype._setParentForControls = function () {
	        var _this = this;
	        this._forEachChild(function (control) { control.setParent(_this); });
	    };
	    /** @internal */
	    FormArray.prototype._checkAllValuesPresent = function (value) {
	        this._forEachChild(function (control, i) {
	            if (value[i] === undefined) {
	                throw new exceptions_1.BaseException("Must supply a value for form control at index: " + i + ".");
	            }
	        });
	    };
	    return FormArray;
	}(AbstractControl));
	exports.FormArray = FormArray;
	//# sourceMappingURL=model.js.map

/***/ },

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var common_1 = __webpack_require__(44);
	var router_1 = __webpack_require__(62);
	var infinite_scroll_component_1 = __webpack_require__(601);
	var album_component_1 = __webpack_require__(600);
	var SharedModule = (function () {
	    function SharedModule() {
	    }
	    SharedModule.forRoot = function () {
	        return {
	            ngModule: SharedModule,
	        };
	    };
	    SharedModule = __decorate([
	        core_1.NgModule({
	            imports: [common_1.CommonModule, router_1.RouterModule],
	            declarations: [infinite_scroll_component_1.InfiniteScrollComponent, album_component_1.AlbumComponent],
	            exports: [common_1.CommonModule, router_1.RouterModule, infinite_scroll_component_1.InfiniteScrollComponent, album_component_1.AlbumComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], SharedModule);
	    return SharedModule;
	}());
	exports.SharedModule = SharedModule;
	

/***/ },

/***/ 255:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var exceptions_1 = __webpack_require__(88);
	var lang_1 = __webpack_require__(29);
	/**
	 * Base class for control directives.
	 *
	 * Only used internally in the forms module.
	 *
	 * @experimental
	 */
	var AbstractControlDirective = (function () {
	    function AbstractControlDirective() {
	    }
	    Object.defineProperty(AbstractControlDirective.prototype, "control", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "value", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.value : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "valid", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.valid : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "invalid", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.invalid : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "pending", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.pending : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "errors", {
	        get: function () {
	            return lang_1.isPresent(this.control) ? this.control.errors : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.pristine : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.dirty : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "touched", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.touched : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.untouched : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "statusChanges", {
	        get: function () {
	            return lang_1.isPresent(this.control) ? this.control.statusChanges : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "valueChanges", {
	        get: function () {
	            return lang_1.isPresent(this.control) ? this.control.valueChanges : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "path", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    AbstractControlDirective.prototype.reset = function (value) {
	        if (value === void 0) { value = undefined; }
	        if (lang_1.isPresent(this.control))
	            this.control.reset(value);
	    };
	    return AbstractControlDirective;
	}());
	exports.AbstractControlDirective = AbstractControlDirective;
	//# sourceMappingURL=abstract_control_directive.js.map

/***/ },

/***/ 256:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	var lang_1 = __webpack_require__(29);
	var ng_control_1 = __webpack_require__(87);
	var NgControlStatus = (function () {
	    function NgControlStatus(cd) {
	        this._cd = cd;
	    }
	    Object.defineProperty(NgControlStatus.prototype, "ngClassUntouched", {
	        get: function () {
	            return lang_1.isPresent(this._cd.control) ? this._cd.control.untouched : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlStatus.prototype, "ngClassTouched", {
	        get: function () {
	            return lang_1.isPresent(this._cd.control) ? this._cd.control.touched : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlStatus.prototype, "ngClassPristine", {
	        get: function () {
	            return lang_1.isPresent(this._cd.control) ? this._cd.control.pristine : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlStatus.prototype, "ngClassDirty", {
	        get: function () {
	            return lang_1.isPresent(this._cd.control) ? this._cd.control.dirty : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlStatus.prototype, "ngClassValid", {
	        get: function () {
	            return lang_1.isPresent(this._cd.control) ? this._cd.control.valid : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlStatus.prototype, "ngClassInvalid", {
	        get: function () {
	            return lang_1.isPresent(this._cd.control) ? !this._cd.control.valid : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /** @nocollapse */
	    NgControlStatus.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[formControlName],[ngModel],[formControl]',
	                    host: {
	                        '[class.ng-untouched]': 'ngClassUntouched',
	                        '[class.ng-touched]': 'ngClassTouched',
	                        '[class.ng-pristine]': 'ngClassPristine',
	                        '[class.ng-dirty]': 'ngClassDirty',
	                        '[class.ng-valid]': 'ngClassValid',
	                        '[class.ng-invalid]': 'ngClassInvalid'
	                    }
	                },] },
	    ];
	    /** @nocollapse */
	    NgControlStatus.ctorParameters = [
	        { type: ng_control_1.NgControl, decorators: [{ type: core_1.Self },] },
	    ];
	    return NgControlStatus;
	}());
	exports.NgControlStatus = NgControlStatus;
	//# sourceMappingURL=ng_control_status.js.map

/***/ },

/***/ 257:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(1);
	var async_1 = __webpack_require__(108);
	var model_1 = __webpack_require__(172);
	var validators_1 = __webpack_require__(52);
	var abstract_form_group_directive_1 = __webpack_require__(119);
	var control_container_1 = __webpack_require__(69);
	var control_value_accessor_1 = __webpack_require__(51);
	var ng_control_1 = __webpack_require__(87);
	var ng_form_1 = __webpack_require__(120);
	var ng_model_group_1 = __webpack_require__(168);
	var shared_1 = __webpack_require__(70);
	var template_driven_errors_1 = __webpack_require__(384);
	exports.formControlBinding = {
	    provide: ng_control_1.NgControl,
	    useExisting: core_1.forwardRef(function () { return NgModel; })
	};
	var resolvedPromise = Promise.resolve(null);
	var NgModel = (function (_super) {
	    __extends(NgModel, _super);
	    function NgModel(_parent, _validators, _asyncValidators, valueAccessors) {
	        _super.call(this);
	        this._parent = _parent;
	        this._validators = _validators;
	        this._asyncValidators = _asyncValidators;
	        /** @internal */
	        this._control = new model_1.FormControl();
	        /** @internal */
	        this._registered = false;
	        this.update = new async_1.EventEmitter();
	        this.valueAccessor = shared_1.selectValueAccessor(this, valueAccessors);
	    }
	    NgModel.prototype.ngOnChanges = function (changes) {
	        this._checkForErrors();
	        if (!this._registered)
	            this._setUpControl();
	        if (shared_1.isPropertyUpdated(changes, this.viewModel)) {
	            this._updateValue(this.model);
	            this.viewModel = this.model;
	        }
	    };
	    NgModel.prototype.ngOnDestroy = function () { this.formDirective && this.formDirective.removeControl(this); };
	    Object.defineProperty(NgModel.prototype, "control", {
	        get: function () { return this._control; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgModel.prototype, "path", {
	        get: function () {
	            return this._parent ? shared_1.controlPath(this.name, this._parent) : [this.name];
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgModel.prototype, "formDirective", {
	        get: function () { return this._parent ? this._parent.formDirective : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgModel.prototype, "validator", {
	        get: function () { return shared_1.composeValidators(this._validators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgModel.prototype, "asyncValidator", {
	        get: function () {
	            return shared_1.composeAsyncValidators(this._asyncValidators);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    NgModel.prototype.viewToModelUpdate = function (newValue) {
	        this.viewModel = newValue;
	        this.update.emit(newValue);
	    };
	    NgModel.prototype._setUpControl = function () {
	        this._isStandalone() ? this._setUpStandalone() :
	            this.formDirective.addControl(this);
	        this._registered = true;
	    };
	    NgModel.prototype._isStandalone = function () {
	        return !this._parent || (this.options && this.options.standalone);
	    };
	    NgModel.prototype._setUpStandalone = function () {
	        shared_1.setUpControl(this._control, this);
	        this._control.updateValueAndValidity({ emitEvent: false });
	    };
	    NgModel.prototype._checkForErrors = function () {
	        if (!this._isStandalone()) {
	            this._checkParentType();
	        }
	        this._checkName();
	    };
	    NgModel.prototype._checkParentType = function () {
	        if (!(this._parent instanceof ng_model_group_1.NgModelGroup) &&
	            this._parent instanceof abstract_form_group_directive_1.AbstractFormGroupDirective) {
	            template_driven_errors_1.TemplateDrivenErrors.formGroupNameException();
	        }
	        else if (!(this._parent instanceof ng_model_group_1.NgModelGroup) && !(this._parent instanceof ng_form_1.NgForm)) {
	            template_driven_errors_1.TemplateDrivenErrors.modelParentException();
	        }
	    };
	    NgModel.prototype._checkName = function () {
	        if (this.options && this.options.name)
	            this.name = this.options.name;
	        if (!this._isStandalone() && !this.name) {
	            template_driven_errors_1.TemplateDrivenErrors.missingNameException();
	        }
	    };
	    NgModel.prototype._updateValue = function (value) {
	        var _this = this;
	        resolvedPromise.then(function () { _this.control.setValue(value, { emitViewToModelChange: false }); });
	    };
	    /** @nocollapse */
	    NgModel.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[ngModel]:not([formControlName]):not([formControl])',
	                    providers: [exports.formControlBinding],
	                    exportAs: 'ngModel'
	                },] },
	    ];
	    /** @nocollapse */
	    NgModel.ctorParameters = [
	        { type: control_container_1.ControlContainer, decorators: [{ type: core_1.Optional }, { type: core_1.Host },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [control_value_accessor_1.NG_VALUE_ACCESSOR,] },] },
	    ];
	    /** @nocollapse */
	    NgModel.propDecorators = {
	        'model': [{ type: core_1.Input, args: ['ngModel',] },],
	        'name': [{ type: core_1.Input },],
	        'options': [{ type: core_1.Input, args: ['ngModelOptions',] },],
	        'update': [{ type: core_1.Output, args: ['ngModelChange',] },],
	    };
	    return NgModel;
	}(ng_control_1.NgControl));
	exports.NgModel = NgModel;
	//# sourceMappingURL=ng_model.js.map

/***/ },

/***/ 258:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	var lang_1 = __webpack_require__(29);
	var control_value_accessor_1 = __webpack_require__(51);
	exports.NUMBER_VALUE_ACCESSOR = {
	    provide: control_value_accessor_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return NumberValueAccessor; }),
	    multi: true
	};
	var NumberValueAccessor = (function () {
	    function NumberValueAccessor(_renderer, _elementRef) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	    }
	    NumberValueAccessor.prototype.writeValue = function (value) {
	        // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
	        var normalizedValue = lang_1.isBlank(value) ? '' : value;
	        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
	    };
	    NumberValueAccessor.prototype.registerOnChange = function (fn) {
	        this.onChange = function (value) { fn(value == '' ? null : lang_1.NumberWrapper.parseFloat(value)); };
	    };
	    NumberValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    /** @nocollapse */
	    NumberValueAccessor.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
	                    host: {
	                        '(change)': 'onChange($event.target.value)',
	                        '(input)': 'onChange($event.target.value)',
	                        '(blur)': 'onTouched()'
	                    },
	                    providers: [exports.NUMBER_VALUE_ACCESSOR]
	                },] },
	    ];
	    /** @nocollapse */
	    NumberValueAccessor.ctorParameters = [
	        { type: core_1.Renderer, },
	        { type: core_1.ElementRef, },
	    ];
	    return NumberValueAccessor;
	}());
	exports.NumberValueAccessor = NumberValueAccessor;
	//# sourceMappingURL=number_value_accessor.js.map

/***/ },

/***/ 259:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(1);
	var async_1 = __webpack_require__(108);
	var collection_1 = __webpack_require__(46);
	var validators_1 = __webpack_require__(52);
	var control_value_accessor_1 = __webpack_require__(51);
	var ng_control_1 = __webpack_require__(87);
	var shared_1 = __webpack_require__(70);
	exports.formControlBinding = {
	    provide: ng_control_1.NgControl,
	    useExisting: core_1.forwardRef(function () { return FormControlDirective; })
	};
	var FormControlDirective = (function (_super) {
	    __extends(FormControlDirective, _super);
	    function FormControlDirective(_validators, _asyncValidators, valueAccessors) {
	        _super.call(this);
	        this._validators = _validators;
	        this._asyncValidators = _asyncValidators;
	        this.update = new async_1.EventEmitter();
	        this.valueAccessor = shared_1.selectValueAccessor(this, valueAccessors);
	    }
	    FormControlDirective.prototype.ngOnChanges = function (changes) {
	        if (this._isControlChanged(changes)) {
	            shared_1.setUpControl(this.form, this);
	            this.form.updateValueAndValidity({ emitEvent: false });
	        }
	        if (shared_1.isPropertyUpdated(changes, this.viewModel)) {
	            this.form.setValue(this.model);
	            this.viewModel = this.model;
	        }
	    };
	    Object.defineProperty(FormControlDirective.prototype, "path", {
	        get: function () { return []; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlDirective.prototype, "validator", {
	        get: function () { return shared_1.composeValidators(this._validators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlDirective.prototype, "asyncValidator", {
	        get: function () {
	            return shared_1.composeAsyncValidators(this._asyncValidators);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlDirective.prototype, "control", {
	        get: function () { return this.form; },
	        enumerable: true,
	        configurable: true
	    });
	    FormControlDirective.prototype.viewToModelUpdate = function (newValue) {
	        this.viewModel = newValue;
	        this.update.emit(newValue);
	    };
	    FormControlDirective.prototype._isControlChanged = function (changes) {
	        return collection_1.StringMapWrapper.contains(changes, 'form');
	    };
	    /** @nocollapse */
	    FormControlDirective.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[formControl]', providers: [exports.formControlBinding], exportAs: 'ngForm' },] },
	    ];
	    /** @nocollapse */
	    FormControlDirective.ctorParameters = [
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [control_value_accessor_1.NG_VALUE_ACCESSOR,] },] },
	    ];
	    /** @nocollapse */
	    FormControlDirective.propDecorators = {
	        'form': [{ type: core_1.Input, args: ['formControl',] },],
	        'model': [{ type: core_1.Input, args: ['ngModel',] },],
	        'update': [{ type: core_1.Output, args: ['ngModelChange',] },],
	    };
	    return FormControlDirective;
	}(ng_control_1.NgControl));
	exports.FormControlDirective = FormControlDirective;
	//# sourceMappingURL=form_control_directive.js.map

/***/ },

/***/ 260:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(1);
	var async_1 = __webpack_require__(108);
	var validators_1 = __webpack_require__(52);
	var abstract_form_group_directive_1 = __webpack_require__(119);
	var control_container_1 = __webpack_require__(69);
	var control_value_accessor_1 = __webpack_require__(51);
	var ng_control_1 = __webpack_require__(87);
	var reactive_errors_1 = __webpack_require__(261);
	var shared_1 = __webpack_require__(70);
	var form_group_directive_1 = __webpack_require__(121);
	var form_group_name_1 = __webpack_require__(122);
	exports.controlNameBinding = {
	    provide: ng_control_1.NgControl,
	    useExisting: core_1.forwardRef(function () { return FormControlName; })
	};
	var FormControlName = (function (_super) {
	    __extends(FormControlName, _super);
	    function FormControlName(_parent, _validators, _asyncValidators, valueAccessors) {
	        _super.call(this);
	        this._parent = _parent;
	        this._validators = _validators;
	        this._asyncValidators = _asyncValidators;
	        this._added = false;
	        this.update = new async_1.EventEmitter();
	        this.valueAccessor = shared_1.selectValueAccessor(this, valueAccessors);
	    }
	    FormControlName.prototype.ngOnChanges = function (changes) {
	        if (!this._added) {
	            this._checkParentType();
	            this.formDirective.addControl(this);
	            this._added = true;
	        }
	        if (shared_1.isPropertyUpdated(changes, this.viewModel)) {
	            this.viewModel = this.model;
	            this.formDirective.updateModel(this, this.model);
	        }
	    };
	    FormControlName.prototype.ngOnDestroy = function () { this.formDirective.removeControl(this); };
	    FormControlName.prototype.viewToModelUpdate = function (newValue) {
	        this.viewModel = newValue;
	        this.update.emit(newValue);
	    };
	    Object.defineProperty(FormControlName.prototype, "path", {
	        get: function () { return shared_1.controlPath(this.name, this._parent); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlName.prototype, "formDirective", {
	        get: function () { return this._parent.formDirective; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlName.prototype, "validator", {
	        get: function () { return shared_1.composeValidators(this._validators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlName.prototype, "asyncValidator", {
	        get: function () {
	            return shared_1.composeAsyncValidators(this._asyncValidators);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlName.prototype, "control", {
	        get: function () { return this.formDirective.getControl(this); },
	        enumerable: true,
	        configurable: true
	    });
	    FormControlName.prototype._checkParentType = function () {
	        if (!(this._parent instanceof form_group_name_1.FormGroupName) &&
	            this._parent instanceof abstract_form_group_directive_1.AbstractFormGroupDirective) {
	            reactive_errors_1.ReactiveErrors.ngModelGroupException();
	        }
	        else if (!(this._parent instanceof form_group_name_1.FormGroupName) &&
	            !(this._parent instanceof form_group_directive_1.FormGroupDirective) &&
	            !(this._parent instanceof form_group_name_1.FormArrayName)) {
	            reactive_errors_1.ReactiveErrors.controlParentException();
	        }
	    };
	    /** @nocollapse */
	    FormControlName.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[formControlName]', providers: [exports.controlNameBinding] },] },
	    ];
	    /** @nocollapse */
	    FormControlName.ctorParameters = [
	        { type: control_container_1.ControlContainer, decorators: [{ type: core_1.Optional }, { type: core_1.Host }, { type: core_1.SkipSelf },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [control_value_accessor_1.NG_VALUE_ACCESSOR,] },] },
	    ];
	    /** @nocollapse */
	    FormControlName.propDecorators = {
	        'name': [{ type: core_1.Input, args: ['formControlName',] },],
	        'model': [{ type: core_1.Input, args: ['ngModel',] },],
	        'update': [{ type: core_1.Output, args: ['ngModelChange',] },],
	    };
	    return FormControlName;
	}(ng_control_1.NgControl));
	exports.FormControlName = FormControlName;
	//# sourceMappingURL=form_control_name.js.map

/***/ },

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var exceptions_1 = __webpack_require__(88);
	var error_examples_1 = __webpack_require__(383);
	var ReactiveErrors = (function () {
	    function ReactiveErrors() {
	    }
	    ReactiveErrors.controlParentException = function () {
	        throw new exceptions_1.BaseException("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + error_examples_1.FormErrorExamples.formControlName);
	    };
	    ReactiveErrors.ngModelGroupException = function () {
	        throw new exceptions_1.BaseException("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        " + error_examples_1.FormErrorExamples.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + error_examples_1.FormErrorExamples.ngModelGroup);
	    };
	    ReactiveErrors.missingFormException = function () {
	        throw new exceptions_1.BaseException("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + error_examples_1.FormErrorExamples.formControlName);
	    };
	    ReactiveErrors.groupParentException = function () {
	        throw new exceptions_1.BaseException("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + error_examples_1.FormErrorExamples.formGroupName);
	    };
	    ReactiveErrors.arrayParentException = function () {
	        throw new exceptions_1.BaseException("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + error_examples_1.FormErrorExamples.formArrayName);
	    };
	    return ReactiveErrors;
	}());
	exports.ReactiveErrors = ReactiveErrors;
	//# sourceMappingURL=reactive_errors.js.map

/***/ },

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	var lang_1 = __webpack_require__(29);
	var validators_1 = __webpack_require__(52);
	exports.REQUIRED = validators_1.Validators.required;
	exports.REQUIRED_VALIDATOR = {
	    provide: validators_1.NG_VALIDATORS,
	    useValue: exports.REQUIRED,
	    multi: true
	};
	var RequiredValidator = (function () {
	    function RequiredValidator() {
	    }
	    /** @nocollapse */
	    RequiredValidator.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[required][formControlName],[required][formControl],[required][ngModel]',
	                    providers: [exports.REQUIRED_VALIDATOR]
	                },] },
	    ];
	    return RequiredValidator;
	}());
	exports.RequiredValidator = RequiredValidator;
	/**
	 * Provider which adds {@link MinLengthValidator} to {@link NG_VALIDATORS}.
	 *
	 * ## Example:
	 *
	 * {@example common/forms/ts/validators/validators.ts region='min'}
	 */
	exports.MIN_LENGTH_VALIDATOR = {
	    provide: validators_1.NG_VALIDATORS,
	    useExisting: core_1.forwardRef(function () { return MinLengthValidator; }),
	    multi: true
	};
	var MinLengthValidator = (function () {
	    function MinLengthValidator(minLength) {
	        this._validator = validators_1.Validators.minLength(lang_1.NumberWrapper.parseInt(minLength, 10));
	    }
	    MinLengthValidator.prototype.validate = function (c) { return this._validator(c); };
	    /** @nocollapse */
	    MinLengthValidator.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
	                    providers: [exports.MIN_LENGTH_VALIDATOR]
	                },] },
	    ];
	    /** @nocollapse */
	    MinLengthValidator.ctorParameters = [
	        { type: undefined, decorators: [{ type: core_1.Attribute, args: ['minlength',] },] },
	    ];
	    return MinLengthValidator;
	}());
	exports.MinLengthValidator = MinLengthValidator;
	/**
	 * Provider which adds {@link MaxLengthValidator} to {@link NG_VALIDATORS}.
	 *
	 * ## Example:
	 *
	 * {@example common/forms/ts/validators/validators.ts region='max'}
	 */
	exports.MAX_LENGTH_VALIDATOR = {
	    provide: validators_1.NG_VALIDATORS,
	    useExisting: core_1.forwardRef(function () { return MaxLengthValidator; }),
	    multi: true
	};
	var MaxLengthValidator = (function () {
	    function MaxLengthValidator(maxLength) {
	        this._validator = validators_1.Validators.maxLength(lang_1.NumberWrapper.parseInt(maxLength, 10));
	    }
	    MaxLengthValidator.prototype.validate = function (c) { return this._validator(c); };
	    /** @nocollapse */
	    MaxLengthValidator.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
	                    providers: [exports.MAX_LENGTH_VALIDATOR]
	                },] },
	    ];
	    /** @nocollapse */
	    MaxLengthValidator.ctorParameters = [
	        { type: undefined, decorators: [{ type: core_1.Attribute, args: ['maxlength',] },] },
	    ];
	    return MaxLengthValidator;
	}());
	exports.MaxLengthValidator = MaxLengthValidator;
	exports.PATTERN_VALIDATOR = {
	    provide: validators_1.NG_VALIDATORS,
	    useExisting: core_1.forwardRef(function () { return PatternValidator; }),
	    multi: true
	};
	var PatternValidator = (function () {
	    function PatternValidator(pattern) {
	        this._validator = validators_1.Validators.pattern(pattern);
	    }
	    PatternValidator.prototype.validate = function (c) { return this._validator(c); };
	    /** @nocollapse */
	    PatternValidator.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
	                    providers: [exports.PATTERN_VALIDATOR]
	                },] },
	    ];
	    /** @nocollapse */
	    PatternValidator.ctorParameters = [
	        { type: undefined, decorators: [{ type: core_1.Attribute, args: ['pattern',] },] },
	    ];
	    return PatternValidator;
	}());
	exports.PatternValidator = PatternValidator;
	//# sourceMappingURL=validators.js.map

/***/ },

/***/ 382:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	var checkbox_value_accessor_1 = __webpack_require__(166);
	var default_value_accessor_1 = __webpack_require__(167);
	var ng_control_status_1 = __webpack_require__(256);
	var ng_form_1 = __webpack_require__(120);
	var ng_model_1 = __webpack_require__(257);
	var ng_model_group_1 = __webpack_require__(168);
	var number_value_accessor_1 = __webpack_require__(258);
	var radio_control_value_accessor_1 = __webpack_require__(169);
	var form_control_directive_1 = __webpack_require__(259);
	var form_control_name_1 = __webpack_require__(260);
	var form_group_directive_1 = __webpack_require__(121);
	var form_group_name_1 = __webpack_require__(122);
	var select_control_value_accessor_1 = __webpack_require__(170);
	var select_multiple_control_value_accessor_1 = __webpack_require__(171);
	var validators_1 = __webpack_require__(262);
	var checkbox_value_accessor_2 = __webpack_require__(166);
	exports.CheckboxControlValueAccessor = checkbox_value_accessor_2.CheckboxControlValueAccessor;
	var default_value_accessor_2 = __webpack_require__(167);
	exports.DefaultValueAccessor = default_value_accessor_2.DefaultValueAccessor;
	var ng_control_1 = __webpack_require__(87);
	exports.NgControl = ng_control_1.NgControl;
	var ng_control_status_2 = __webpack_require__(256);
	exports.NgControlStatus = ng_control_status_2.NgControlStatus;
	var ng_form_2 = __webpack_require__(120);
	exports.NgForm = ng_form_2.NgForm;
	var ng_model_2 = __webpack_require__(257);
	exports.NgModel = ng_model_2.NgModel;
	var ng_model_group_2 = __webpack_require__(168);
	exports.NgModelGroup = ng_model_group_2.NgModelGroup;
	var number_value_accessor_2 = __webpack_require__(258);
	exports.NumberValueAccessor = number_value_accessor_2.NumberValueAccessor;
	var radio_control_value_accessor_2 = __webpack_require__(169);
	exports.RadioControlValueAccessor = radio_control_value_accessor_2.RadioControlValueAccessor;
	var form_control_directive_2 = __webpack_require__(259);
	exports.FormControlDirective = form_control_directive_2.FormControlDirective;
	var form_control_name_2 = __webpack_require__(260);
	exports.FormControlName = form_control_name_2.FormControlName;
	var form_group_directive_2 = __webpack_require__(121);
	exports.FormGroupDirective = form_group_directive_2.FormGroupDirective;
	var form_group_name_2 = __webpack_require__(122);
	exports.FormArrayName = form_group_name_2.FormArrayName;
	exports.FormGroupName = form_group_name_2.FormGroupName;
	var select_control_value_accessor_2 = __webpack_require__(170);
	exports.NgSelectOption = select_control_value_accessor_2.NgSelectOption;
	exports.SelectControlValueAccessor = select_control_value_accessor_2.SelectControlValueAccessor;
	var select_multiple_control_value_accessor_2 = __webpack_require__(171);
	exports.NgSelectMultipleOption = select_multiple_control_value_accessor_2.NgSelectMultipleOption;
	exports.SelectMultipleControlValueAccessor = select_multiple_control_value_accessor_2.SelectMultipleControlValueAccessor;
	var validators_2 = __webpack_require__(262);
	exports.MaxLengthValidator = validators_2.MaxLengthValidator;
	exports.MinLengthValidator = validators_2.MinLengthValidator;
	exports.PatternValidator = validators_2.PatternValidator;
	exports.RequiredValidator = validators_2.RequiredValidator;
	exports.SHARED_FORM_DIRECTIVES = [
	    select_control_value_accessor_1.NgSelectOption, select_multiple_control_value_accessor_1.NgSelectMultipleOption, default_value_accessor_1.DefaultValueAccessor, number_value_accessor_1.NumberValueAccessor,
	    checkbox_value_accessor_1.CheckboxControlValueAccessor, select_control_value_accessor_1.SelectControlValueAccessor, select_multiple_control_value_accessor_1.SelectMultipleControlValueAccessor,
	    radio_control_value_accessor_1.RadioControlValueAccessor, ng_control_status_1.NgControlStatus, validators_1.RequiredValidator, validators_1.MinLengthValidator,
	    validators_1.MaxLengthValidator, validators_1.PatternValidator
	];
	exports.TEMPLATE_DRIVEN_DIRECTIVES = [ng_model_1.NgModel, ng_model_group_1.NgModelGroup, ng_form_1.NgForm];
	exports.REACTIVE_DRIVEN_DIRECTIVES = [form_control_directive_1.FormControlDirective, form_group_directive_1.FormGroupDirective, form_control_name_1.FormControlName, form_group_name_1.FormGroupName, form_group_name_1.FormArrayName];
	/**
	 *
	 * A list of all the form directives used as part of a `@Component` annotation.
	 *
	 *  This is a shorthand for importing them each individually.
	 *
	 * ### Example
	 *
	 * ```typescript
	 * @Component({
	 *   selector: 'my-app',
	 *   directives: [FORM_DIRECTIVES]
	 * })
	 * class MyApp {}
	 * ```
	 * @experimental
	 */
	exports.FORM_DIRECTIVES = [exports.TEMPLATE_DRIVEN_DIRECTIVES, exports.SHARED_FORM_DIRECTIVES];
	/**
	 * @experimental
	 */
	exports.REACTIVE_FORM_DIRECTIVES = [exports.REACTIVE_DRIVEN_DIRECTIVES, exports.SHARED_FORM_DIRECTIVES];
	var InternalFormsSharedModule = (function () {
	    function InternalFormsSharedModule() {
	    }
	    /** @nocollapse */
	    InternalFormsSharedModule.decorators = [
	        { type: core_1.NgModule, args: [{ declarations: exports.SHARED_FORM_DIRECTIVES, exports: exports.SHARED_FORM_DIRECTIVES },] },
	    ];
	    return InternalFormsSharedModule;
	}());
	exports.InternalFormsSharedModule = InternalFormsSharedModule;
	//# sourceMappingURL=directives.js.map

/***/ },

/***/ 383:
/***/ function(module, exports) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	exports.FormErrorExamples = {
	    formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
	    formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
	    formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; let i=index\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
	    ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
	    ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
	};
	//# sourceMappingURL=error_examples.js.map

/***/ },

/***/ 384:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var exceptions_1 = __webpack_require__(88);
	var error_examples_1 = __webpack_require__(383);
	var TemplateDrivenErrors = (function () {
	    function TemplateDrivenErrors() {
	    }
	    TemplateDrivenErrors.modelParentException = function () {
	        throw new exceptions_1.BaseException("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      " + error_examples_1.FormErrorExamples.formControlName + "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      " + error_examples_1.FormErrorExamples.ngModelWithFormGroup);
	    };
	    TemplateDrivenErrors.formGroupNameException = function () {
	        throw new exceptions_1.BaseException("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + error_examples_1.FormErrorExamples.formGroupName + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + error_examples_1.FormErrorExamples.ngModelGroup);
	    };
	    TemplateDrivenErrors.missingNameException = function () {
	        throw new exceptions_1.BaseException("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
	    };
	    TemplateDrivenErrors.modelGroupParentException = function () {
	        throw new exceptions_1.BaseException("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + error_examples_1.FormErrorExamples.formGroupName + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + error_examples_1.FormErrorExamples.ngModelGroup);
	    };
	    return TemplateDrivenErrors;
	}());
	exports.TemplateDrivenErrors = TemplateDrivenErrors;
	//# sourceMappingURL=template_driven_errors.js.map

/***/ },

/***/ 385:
/***/ function(module, exports) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * A base class for the WrappedException that can be used to identify
	 * a WrappedException from ExceptionHandler without adding circular
	 * dependency.
	 */
	var BaseWrappedException = (function (_super) {
	    __extends(BaseWrappedException, _super);
	    function BaseWrappedException(message) {
	        _super.call(this, message);
	    }
	    Object.defineProperty(BaseWrappedException.prototype, "wrapperMessage", {
	        get: function () { return ''; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "wrapperStack", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "originalException", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "originalStack", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "context", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "message", {
	        get: function () { return ''; },
	        enumerable: true,
	        configurable: true
	    });
	    return BaseWrappedException;
	}(Error));
	exports.BaseWrappedException = BaseWrappedException;
	//# sourceMappingURL=base_wrapped_exception.js.map

/***/ },

/***/ 386:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var base_wrapped_exception_1 = __webpack_require__(385);
	var collection_1 = __webpack_require__(46);
	var lang_1 = __webpack_require__(29);
	var _ArrayLogger = (function () {
	    function _ArrayLogger() {
	        this.res = [];
	    }
	    _ArrayLogger.prototype.log = function (s) { this.res.push(s); };
	    _ArrayLogger.prototype.logError = function (s) { this.res.push(s); };
	    _ArrayLogger.prototype.logGroup = function (s) { this.res.push(s); };
	    _ArrayLogger.prototype.logGroupEnd = function () { };
	    ;
	    return _ArrayLogger;
	}());
	/**
	 * Provides a hook for centralized exception handling.
	 *
	 * The default implementation of `ExceptionHandler` prints error messages to the `Console`. To
	 * intercept error handling,
	 * write a custom exception handler that replaces this default as appropriate for your app.
	 *
	 * ### Example
	 *
	 * ```javascript
	 *
	 * class MyExceptionHandler implements ExceptionHandler {
	 *   call(error, stackTrace = null, reason = null) {
	 *     // do something with the exception
	 *   }
	 * }
	 *
	 * bootstrap(MyApp, [{provide: ExceptionHandler, useClass: MyExceptionHandler}])
	 *
	 * ```
	 * @stable
	 */
	var ExceptionHandler = (function () {
	    function ExceptionHandler(_logger, _rethrowException) {
	        if (_rethrowException === void 0) { _rethrowException = true; }
	        this._logger = _logger;
	        this._rethrowException = _rethrowException;
	    }
	    ExceptionHandler.exceptionToString = function (exception, stackTrace, reason) {
	        if (stackTrace === void 0) { stackTrace = null; }
	        if (reason === void 0) { reason = null; }
	        var l = new _ArrayLogger();
	        var e = new ExceptionHandler(l, false);
	        e.call(exception, stackTrace, reason);
	        return l.res.join('\n');
	    };
	    ExceptionHandler.prototype.call = function (exception, stackTrace, reason) {
	        if (stackTrace === void 0) { stackTrace = null; }
	        if (reason === void 0) { reason = null; }
	        var originalException = this._findOriginalException(exception);
	        var originalStack = this._findOriginalStack(exception);
	        var context = this._findContext(exception);
	        this._logger.logGroup("EXCEPTION: " + this._extractMessage(exception));
	        if (lang_1.isPresent(stackTrace) && lang_1.isBlank(originalStack)) {
	            this._logger.logError('STACKTRACE:');
	            this._logger.logError(this._longStackTrace(stackTrace));
	        }
	        if (lang_1.isPresent(reason)) {
	            this._logger.logError("REASON: " + reason);
	        }
	        if (lang_1.isPresent(originalException)) {
	            this._logger.logError("ORIGINAL EXCEPTION: " + this._extractMessage(originalException));
	        }
	        if (lang_1.isPresent(originalStack)) {
	            this._logger.logError('ORIGINAL STACKTRACE:');
	            this._logger.logError(this._longStackTrace(originalStack));
	        }
	        if (lang_1.isPresent(context)) {
	            this._logger.logError('ERROR CONTEXT:');
	            this._logger.logError(context);
	        }
	        this._logger.logGroupEnd();
	        // We rethrow exceptions, so operations like 'bootstrap' will result in an error
	        // when an exception happens. If we do not rethrow, bootstrap will always succeed.
	        if (this._rethrowException)
	            throw exception;
	    };
	    /** @internal */
	    ExceptionHandler.prototype._extractMessage = function (exception) {
	        return exception instanceof base_wrapped_exception_1.BaseWrappedException ? exception.wrapperMessage :
	            exception.toString();
	    };
	    /** @internal */
	    ExceptionHandler.prototype._longStackTrace = function (stackTrace) {
	        return collection_1.isListLikeIterable(stackTrace) ? stackTrace.join('\n\n-----async gap-----\n') :
	            stackTrace.toString();
	    };
	    /** @internal */
	    ExceptionHandler.prototype._findContext = function (exception) {
	        try {
	            if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
	                return null;
	            return lang_1.isPresent(exception.context) ? exception.context :
	                this._findContext(exception.originalException);
	        }
	        catch (e) {
	            // exception.context can throw an exception. if it happens, we ignore the context.
	            return null;
	        }
	    };
	    /** @internal */
	    ExceptionHandler.prototype._findOriginalException = function (exception) {
	        if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
	            return null;
	        var e = exception.originalException;
	        while (e instanceof base_wrapped_exception_1.BaseWrappedException && lang_1.isPresent(e.originalException)) {
	            e = e.originalException;
	        }
	        return e;
	    };
	    /** @internal */
	    ExceptionHandler.prototype._findOriginalStack = function (exception) {
	        if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
	            return null;
	        var e = exception;
	        var stack = exception.originalStack;
	        while (e instanceof base_wrapped_exception_1.BaseWrappedException && lang_1.isPresent(e.originalException)) {
	            e = e.originalException;
	            if (e instanceof base_wrapped_exception_1.BaseWrappedException && lang_1.isPresent(e.originalException)) {
	                stack = e.originalStack;
	            }
	        }
	        return stack;
	    };
	    return ExceptionHandler;
	}());
	exports.ExceptionHandler = ExceptionHandler;
	//# sourceMappingURL=exception_handler.js.map

/***/ },

/***/ 387:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	var collection_1 = __webpack_require__(46);
	var lang_1 = __webpack_require__(29);
	var model_1 = __webpack_require__(172);
	var FormBuilder = (function () {
	    function FormBuilder() {
	    }
	    /**
	     * Construct a new {@link FormGroup} with the given map of configuration.
	     * Valid keys for the `extra` parameter map are `optionals` and `validator`.
	     *
	     * See the {@link FormGroup} constructor for more details.
	     */
	    FormBuilder.prototype.group = function (controlsConfig, extra) {
	        if (extra === void 0) { extra = null; }
	        var controls = this._reduceControls(controlsConfig);
	        var optionals = (lang_1.isPresent(extra) ? collection_1.StringMapWrapper.get(extra, 'optionals') : null);
	        var validator = lang_1.isPresent(extra) ? collection_1.StringMapWrapper.get(extra, 'validator') : null;
	        var asyncValidator = lang_1.isPresent(extra) ? collection_1.StringMapWrapper.get(extra, 'asyncValidator') : null;
	        return new model_1.FormGroup(controls, optionals, validator, asyncValidator);
	    };
	    /**
	     * Construct a new {@link FormControl} with the given `value`,`validator`, and `asyncValidator`.
	     */
	    FormBuilder.prototype.control = function (value, validator, asyncValidator) {
	        if (validator === void 0) { validator = null; }
	        if (asyncValidator === void 0) { asyncValidator = null; }
	        return new model_1.FormControl(value, validator, asyncValidator);
	    };
	    /**
	     * Construct an array of {@link FormControl}s from the given `controlsConfig` array of
	     * configuration, with the given optional `validator` and `asyncValidator`.
	     */
	    FormBuilder.prototype.array = function (controlsConfig, validator, asyncValidator) {
	        var _this = this;
	        if (validator === void 0) { validator = null; }
	        if (asyncValidator === void 0) { asyncValidator = null; }
	        var controls = controlsConfig.map(function (c) { return _this._createControl(c); });
	        return new model_1.FormArray(controls, validator, asyncValidator);
	    };
	    /** @internal */
	    FormBuilder.prototype._reduceControls = function (controlsConfig) {
	        var _this = this;
	        var controls = {};
	        collection_1.StringMapWrapper.forEach(controlsConfig, function (controlConfig, controlName) {
	            controls[controlName] = _this._createControl(controlConfig);
	        });
	        return controls;
	    };
	    /** @internal */
	    FormBuilder.prototype._createControl = function (controlConfig) {
	        if (controlConfig instanceof model_1.FormControl || controlConfig instanceof model_1.FormGroup ||
	            controlConfig instanceof model_1.FormArray) {
	            return controlConfig;
	        }
	        else if (lang_1.isArray(controlConfig)) {
	            var value = controlConfig[0];
	            var validator = controlConfig.length > 1 ? controlConfig[1] : null;
	            var asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
	            return this.control(value, validator, asyncValidator);
	        }
	        else {
	            return this.control(controlConfig);
	        }
	    };
	    /** @nocollapse */
	    FormBuilder.decorators = [
	        { type: core_1.Injectable },
	    ];
	    return FormBuilder;
	}());
	exports.FormBuilder = FormBuilder;
	//# sourceMappingURL=form_builder.js.map

/***/ },

/***/ 413:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(62);
	var Observable_1 = __webpack_require__(2);
	var BehaviorSubject_1 = __webpack_require__(100);
	var searchQuery_1 = __webpack_require__(416);
	var quantone_service_1 = __webpack_require__(109);
	var spotify_service_1 = __webpack_require__(110);
	var AlbumsComponent = (function () {
	    function AlbumsComponent(router, route, spotifyService, quantoneService) {
	        this.router = router;
	        this.route = route;
	        this.spotifyService = spotifyService;
	        this.quantoneService = quantoneService;
	        this.state = 'inactive';
	        this.noResultsState = 'inactive';
	    }
	    AlbumsComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.sub = this
	            .router
	            .routerState
	            .queryParams
	            .subscribe(function (params) {
	            _this.state = 'inactive';
	            _this.noResultsState = 'inactive';
	            _this.query = _this._getSearchQueryFromParams(params);
	            if (!_this.query.isValid()) {
	                return;
	            }
	            if (_this._noSearchQueryStream()) {
	                _this._initSearchQueryStream();
	            }
	            else {
	                _this.searchQueryStream.next(_this.query);
	            }
	        }, function (error) { return console.log(error); });
	    };
	    AlbumsComponent.prototype._getSearchQueryFromParams = function (params) {
	        return new searchQuery_1.SearchQuery(this._getParam(params['query']), this._getParam(params['label']), this._getParam(params['year']), 0);
	    };
	    AlbumsComponent.prototype._getParam = function (param) {
	        if (!!param && param !== 'true') {
	            return param;
	        }
	        return ' ';
	    };
	    AlbumsComponent.prototype._noSearchQueryStream = function () {
	        return !!this.searchQueryStream === false;
	    };
	    AlbumsComponent.prototype._initSearchQueryStream = function () {
	        var _this = this;
	        this.searchQueryStream = new BehaviorSubject_1.BehaviorSubject(this.query);
	        this.albums = this.searchQueryStream
	            .filter(function (search) { return !!search && (search.query.length > 2 || search.label.length > 2); })
	            .concatMap(function (query) {
	            if (_this.query.scrolling === false) {
	                _this.state = 'inactive';
	            }
	            return _this.spotifyService.getAlbums(query)
	                .map(function (albums) {
	                _this.state = 'active';
	                _this.query.scrolling = false;
	                if (albums.length === 0) {
	                    var timer = Observable_1.Observable.timer(3000);
	                    timer.subscribe(function () { return _this.noResultsState = 'active'; });
	                }
	                return albums;
	            });
	        });
	    };
	    AlbumsComponent.prototype.onScroll = function () {
	        this.query.offset += this.spotifyService.perPage;
	        if (this.query.offset >= this.spotifyService.getTotal()) {
	            console.log('no more results');
	            return;
	        }
	        this.query.scrolling = true;
	        this.searchQueryStream.next(this.query);
	    };
	    AlbumsComponent.prototype.ngOnDestroy = function () {
	        this.sub.unsubscribe();
	    };
	    AlbumsComponent.prototype.recordsHaveEnded = function () {
	        return this.spotifyService.getTotal() < this.query.offset;
	    };
	    AlbumsComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(765),
	            animations: [
	                core_1.trigger('albumState', [
	                    core_1.state('inactive', core_1.style({
	                        opacity: 0
	                    })),
	                    core_1.state('active', core_1.style({
	                        opacity: 1
	                    })),
	                    core_1.transition('inactive => active', core_1.animate('20ms ease-in')),
	                    core_1.transition('active => inactive', core_1.animate(10))
	                ]),
	                core_1.trigger('noResultsState', [
	                    core_1.state('inactive', core_1.style({
	                        opacity: 0
	                    })),
	                    core_1.state('active', core_1.style({
	                        opacity: 1
	                    })),
	                    core_1.transition('inactive => active', core_1.animate('500ms ease-in')),
	                    core_1.transition('active => inactive', core_1.animate(0))
	                ])
	            ]
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, spotify_service_1.SpotifyService, quantone_service_1.QuantoneService])
	    ], AlbumsComponent);
	    return AlbumsComponent;
	}());
	exports.AlbumsComponent = AlbumsComponent;
	

/***/ },

/***/ 414:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(62);
	var BehaviorSubject_1 = __webpack_require__(100);
	var artistSearchQuery_1 = __webpack_require__(597);
	var quantone_service_1 = __webpack_require__(109);
	var spotify_service_1 = __webpack_require__(110);
	var ArtistAlbumsComponent = (function () {
	    function ArtistAlbumsComponent(router, route, spotifyService, quantoneService) {
	        this.router = router;
	        this.route = route;
	        this.spotifyService = spotifyService;
	        this.quantoneService = quantoneService;
	        this.albumsLoaded = false;
	        this.canShowAlbums = false;
	        this.state = 'inactive';
	        this.noResultsState = 'active';
	    }
	    ArtistAlbumsComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.sub = this
	            .route
	            .params
	            .subscribe(function (params) {
	            var query = new artistSearchQuery_1.ArtistSearchQuery(_this._getParam(params["id"]), 0);
	            _this.query = query;
	            if (!!_this.searchQueryStream === false) {
	                _this.searchQueryStream = new BehaviorSubject_1.BehaviorSubject(_this.query);
	                _this.albums = _this.searchQueryStream
	                    .concatMap(function (query) {
	                    if (_this.query.scrolling == false) {
	                        _this.state = 'inactive';
	                    }
	                    return _this.spotifyService.getArtistAlbums(query)
	                        .map(function (albums) {
	                        _this.albumsLoaded = true;
	                        if (_this.canShowAlbums) {
	                            _this.showAlbums();
	                        }
	                        _this.query.scrolling = false;
	                        return albums;
	                    });
	                });
	            }
	            else {
	                _this.searchQueryStream.next(_this.query);
	            }
	        }, function (error) { return console.log(error); });
	    };
	    ArtistAlbumsComponent.prototype._getParam = function (param) {
	        if (!!param && param !== "true") {
	            return param;
	        }
	        return " ";
	    };
	    ArtistAlbumsComponent.prototype.showAlbums = function () {
	        this.canShowAlbums = true;
	        if (this.albumsLoaded) {
	            this.state = 'active';
	        }
	    };
	    ArtistAlbumsComponent.prototype.onScroll = function () {
	        this.query.scrolling = true;
	        this.query.offset += this.spotifyService.perPage;
	        if (this.query.offset >= this.spotifyService.getTotal()) {
	            console.log("no more results");
	            return;
	        }
	        this.searchQueryStream.next(this.query);
	    };
	    ArtistAlbumsComponent.prototype.ngOnDestroy = function () {
	        this.sub.unsubscribe();
	    };
	    ArtistAlbumsComponent.prototype.showTracks = function (album) {
	        var _this = this;
	        if (!album.showTracks && !album.tracksLoaded) {
	            this.quantoneService.getAlbum(album.id)
	                .subscribe(function (albumResult) { return _this.spotifyService.updateAlbum(album, albumResult); }, function (error) { return _this.errorMessage = error; });
	        }
	        album.showTracks = !album.showTracks;
	    };
	    ArtistAlbumsComponent.prototype.showChevron = function (album) {
	        album.isUpChevronHidden = !album.showTracks;
	        album.isDownChevronHidden = album.showTracks;
	        album.isCopyrightHidden = true;
	    };
	    ArtistAlbumsComponent.prototype.showCopyright = function (album) {
	        album.isUpChevronHidden = true;
	        album.isDownChevronHidden = true;
	        album.isCopyrightHidden = false;
	    };
	    ArtistAlbumsComponent.prototype.recordsHaveEnded = function () {
	        return this.spotifyService.getTotal() < this.query.offset;
	    };
	    ArtistAlbumsComponent = __decorate([
	        core_1.Component({
	            selector: "tc-artist-albums",
	            template: __webpack_require__(767),
	            animations: [
	                core_1.trigger('albumState', [
	                    core_1.state('inactive', core_1.style({
	                        opacity: 0
	                    })),
	                    core_1.state('active', core_1.style({
	                        opacity: 1
	                    })),
	                    core_1.transition('inactive => active', core_1.animate('100ms 100ms ease-in'))
	                ]),
	                core_1.trigger('noResultsState', [
	                    core_1.state('inactive', core_1.style({
	                        opacity: 0
	                    })),
	                    core_1.state('active', core_1.style({
	                        opacity: 1
	                    })),
	                    core_1.transition('inactive => active', core_1.animate('500ms ease-in')),
	                    core_1.transition('active => inactive', core_1.animate(10))
	                ])
	            ]
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, spotify_service_1.SpotifyService, quantone_service_1.QuantoneService])
	    ], ArtistAlbumsComponent);
	    return ArtistAlbumsComponent;
	}());
	exports.ArtistAlbumsComponent = ArtistAlbumsComponent;
	

/***/ },

/***/ 415:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(62);
	var BehaviorSubject_1 = __webpack_require__(100);
	var spotify_service_1 = __webpack_require__(110);
	var quantone_service_1 = __webpack_require__(109);
	var artist_albums_component_1 = __webpack_require__(414);
	var ArtistComponent = (function () {
	    function ArtistComponent(route, spotifyService, quantoneService) {
	        this.route = route;
	        this.spotifyService = spotifyService;
	        this.quantoneService = quantoneService;
	        this.canShowAlbums = false;
	        this.bioState = 'inactive';
	        this.imageState = 'inactive';
	    }
	    ArtistComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        var self = this;
	        this.sub = this
	            .route
	            .params
	            .subscribe(function (params) {
	            var paramId = params['id'];
	            self.artistId = paramId;
	            if (!!self.searchQueryStream === false) {
	                self.searchQueryStream = new BehaviorSubject_1.BehaviorSubject(self.artistId);
	                self.searchQueryStream
	                    .concatMap(function (id) {
	                    return self.spotifyService.getArtist(id)
	                        .concatMap(function (artist) {
	                        self.artist = artist;
	                        _this.imageState = 'active';
	                        return _this.quantoneService
	                            .getArtist(artist.Id)
	                            .map(function (quantoneArtist) {
	                            if (!!quantoneArtist && quantoneArtist.length > 0)
	                                artist.Bio = quantoneArtist[0].Bio;
	                            _this.bioState = 'active';
	                            _this.artistAlbumsComponent.showAlbums();
	                            return artist;
	                        });
	                    });
	                })
	                    .subscribe(function (artist) {
	                    self.artist = artist;
	                });
	            }
	            else {
	                self.searchQueryStream.next(self.artistId);
	            }
	        }, function (error) { return console.log(error); });
	    };
	    ArtistComponent.prototype._getParam = function (param) {
	        if (!!param && param !== "true") {
	            return param;
	        }
	        return " ";
	    };
	    __decorate([
	        core_1.ViewChild(artist_albums_component_1.ArtistAlbumsComponent), 
	        __metadata('design:type', artist_albums_component_1.ArtistAlbumsComponent)
	    ], ArtistComponent.prototype, "artistAlbumsComponent", void 0);
	    ArtistComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(768),
	            styles: [__webpack_require__(980)],
	            animations: [
	                core_1.trigger('artistState', [
	                    core_1.state('inactive', core_1.style({
	                        opacity: 0
	                    })),
	                    core_1.state('active', core_1.style({
	                        opacity: 1
	                    })),
	                    core_1.transition('inactive => active', [
	                        core_1.style({ height: 0 }),
	                        core_1.animate('100ms ease-out', core_1.style({ height: '*' }))
	                    ])
	                ])
	            ]
	        }), 
	        __metadata('design:paramtypes', [router_1.ActivatedRoute, spotify_service_1.SpotifyService, quantone_service_1.QuantoneService])
	    ], ArtistComponent);
	    return ArtistComponent;
	}());
	exports.ArtistComponent = ArtistComponent;
	

/***/ },

/***/ 416:
/***/ function(module, exports) {

	"use strict";
	var SearchQuery = (function () {
	    function SearchQuery(query, label, year, offset) {
	        this.query = query;
	        this.label = label;
	        this.year = year;
	        this.offset = offset;
	        if (!this.query)
	            this.query = '';
	        if (!this.label)
	            this.label = '';
	    }
	    SearchQuery.prototype.isValid = function () {
	        return this.query.trim().length > 0 || this.label.trim().length > 0;
	    };
	    return SearchQuery;
	}());
	exports.SearchQuery = SearchQuery;
	

/***/ },

/***/ 417:
/***/ function(module, exports) {

	"use strict";
	var SpotifyAlbum = (function () {
	    function SpotifyAlbum(id, name, recordings, artists, release_date, images, copyrights, popularity, trustedUri) {
	        this.id = id;
	        this.name = name;
	        this.recordings = recordings;
	        this.artists = artists;
	        this.release_date = release_date;
	        this.images = images;
	        this.copyrights = copyrights;
	        this.popularity = popularity;
	        this.trustedUri = trustedUri;
	        this.isDownChevronHidden = true;
	        this.isUpChevronHidden = true;
	        this.popularity = String((+this.popularity / 10));
	        this.image = images[images.length - 1];
	        this.copyright = copyrights && copyrights.length > 0 ? copyrights[0] : null;
	    }
	    return SpotifyAlbum;
	}());
	exports.SpotifyAlbum = SpotifyAlbum;
	

/***/ },

/***/ 418:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var YearsService = (function () {
	    function YearsService() {
	    }
	    YearsService.prototype.getYears = function () {
	        var years = [];
	        var currentYear = new Date().getFullYear();
	        for (var year = currentYear; year > currentYear - 7; year--) {
	            years.push(year);
	        }
	        return years;
	    };
	    YearsService.prototype.getYearsRange = function () {
	        var years = [];
	        var currentYear = new Date().getFullYear();
	        currentYear = currentYear + 10;
	        while (currentYear > 1940) {
	            var decade = Math.floor(currentYear / 10) * 10;
	            var fromDecade = decade - 10;
	            years.push(fromDecade + "-" + decade);
	            currentYear = currentYear - 10;
	        }
	        return years;
	    };
	    YearsService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], YearsService);
	    return YearsService;
	}());
	exports.YearsService = YearsService;
	

/***/ },

/***/ 543:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(546));
	//# sourceMappingURL=index.js.map

/***/ },

/***/ 544:
/***/ function(module, exports) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	function normalizeValidator(validator) {
	    if (validator.validate !== undefined) {
	        return function (c) { return validator.validate(c); };
	    }
	    else {
	        return validator;
	    }
	}
	exports.normalizeValidator = normalizeValidator;
	function normalizeAsyncValidator(validator) {
	    if (validator.validate !== undefined) {
	        return function (c) { return validator.validate(c); };
	    }
	    else {
	        return validator;
	    }
	}
	exports.normalizeAsyncValidator = normalizeAsyncValidator;
	//# sourceMappingURL=normalize_validator.js.map

/***/ },

/***/ 545:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	var directives_1 = __webpack_require__(382);
	var radio_control_value_accessor_1 = __webpack_require__(169);
	var form_builder_1 = __webpack_require__(387);
	/**
	 * Shorthand set of providers used for building Angular forms.
	 * @experimental
	 */
	exports.FORM_PROVIDERS = [radio_control_value_accessor_1.RadioControlRegistry];
	/**
	 * Shorthand set of providers used for building reactive Angular forms.
	 * @experimental
	 */
	exports.REACTIVE_FORM_PROVIDERS = [form_builder_1.FormBuilder, radio_control_value_accessor_1.RadioControlRegistry];
	var FormsModule = (function () {
	    function FormsModule() {
	    }
	    /** @nocollapse */
	    FormsModule.decorators = [
	        { type: core_1.NgModule, args: [{
	                    declarations: directives_1.TEMPLATE_DRIVEN_DIRECTIVES,
	                    providers: [exports.FORM_PROVIDERS],
	                    exports: [directives_1.InternalFormsSharedModule, directives_1.TEMPLATE_DRIVEN_DIRECTIVES]
	                },] },
	    ];
	    return FormsModule;
	}());
	exports.FormsModule = FormsModule;
	var ReactiveFormsModule = (function () {
	    function ReactiveFormsModule() {
	    }
	    /** @nocollapse */
	    ReactiveFormsModule.decorators = [
	        { type: core_1.NgModule, args: [{
	                    declarations: [directives_1.REACTIVE_DRIVEN_DIRECTIVES],
	                    providers: [exports.REACTIVE_FORM_PROVIDERS],
	                    exports: [directives_1.InternalFormsSharedModule, directives_1.REACTIVE_DRIVEN_DIRECTIVES]
	                },] },
	    ];
	    return ReactiveFormsModule;
	}());
	exports.ReactiveFormsModule = ReactiveFormsModule;
	/**
	 * @deprecated
	 */
	function disableDeprecatedForms() {
	    return [];
	}
	exports.disableDeprecatedForms = disableDeprecatedForms;
	/**
	 * @deprecated
	 */
	function provideForms() {
	    return [
	        { provide: core_1.PLATFORM_DIRECTIVES, useValue: directives_1.FORM_DIRECTIVES, multi: true }, exports.REACTIVE_FORM_PROVIDERS
	    ];
	}
	exports.provideForms = provideForms;
	//# sourceMappingURL=form_providers.js.map

/***/ },

/***/ 546:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/**
	 * @module
	 * @description
	 * This module is used for handling user input, by defining and building a {@link FormGroup} that
	 * consists of
	 * {@link FormControl} objects, and mapping them onto the DOM. {@link FormControl} objects can then
	 * be used
	 * to read information
	 * from the form DOM elements.
	 *
	 * Forms providers are not included in default providers; you must import these providers
	 * explicitly.
	 */
	var directives_1 = __webpack_require__(382);
	exports.FORM_DIRECTIVES = directives_1.FORM_DIRECTIVES;
	exports.REACTIVE_FORM_DIRECTIVES = directives_1.REACTIVE_FORM_DIRECTIVES;
	var abstract_control_directive_1 = __webpack_require__(255);
	exports.AbstractControlDirective = abstract_control_directive_1.AbstractControlDirective;
	var abstract_form_group_directive_1 = __webpack_require__(119);
	exports.AbstractFormGroupDirective = abstract_form_group_directive_1.AbstractFormGroupDirective;
	var checkbox_value_accessor_1 = __webpack_require__(166);
	exports.CheckboxControlValueAccessor = checkbox_value_accessor_1.CheckboxControlValueAccessor;
	var control_container_1 = __webpack_require__(69);
	exports.ControlContainer = control_container_1.ControlContainer;
	var control_value_accessor_1 = __webpack_require__(51);
	exports.NG_VALUE_ACCESSOR = control_value_accessor_1.NG_VALUE_ACCESSOR;
	var default_value_accessor_1 = __webpack_require__(167);
	exports.DefaultValueAccessor = default_value_accessor_1.DefaultValueAccessor;
	var ng_control_1 = __webpack_require__(87);
	exports.NgControl = ng_control_1.NgControl;
	var ng_control_status_1 = __webpack_require__(256);
	exports.NgControlStatus = ng_control_status_1.NgControlStatus;
	var ng_form_1 = __webpack_require__(120);
	exports.NgForm = ng_form_1.NgForm;
	var ng_model_1 = __webpack_require__(257);
	exports.NgModel = ng_model_1.NgModel;
	var ng_model_group_1 = __webpack_require__(168);
	exports.NgModelGroup = ng_model_group_1.NgModelGroup;
	var form_control_directive_1 = __webpack_require__(259);
	exports.FormControlDirective = form_control_directive_1.FormControlDirective;
	var form_control_name_1 = __webpack_require__(260);
	exports.FormControlName = form_control_name_1.FormControlName;
	var form_group_directive_1 = __webpack_require__(121);
	exports.FormGroupDirective = form_group_directive_1.FormGroupDirective;
	var form_group_name_1 = __webpack_require__(122);
	exports.FormArrayName = form_group_name_1.FormArrayName;
	var form_group_name_2 = __webpack_require__(122);
	exports.FormGroupName = form_group_name_2.FormGroupName;
	var select_control_value_accessor_1 = __webpack_require__(170);
	exports.NgSelectOption = select_control_value_accessor_1.NgSelectOption;
	exports.SelectControlValueAccessor = select_control_value_accessor_1.SelectControlValueAccessor;
	var select_multiple_control_value_accessor_1 = __webpack_require__(171);
	exports.SelectMultipleControlValueAccessor = select_multiple_control_value_accessor_1.SelectMultipleControlValueAccessor;
	var validators_1 = __webpack_require__(262);
	exports.MaxLengthValidator = validators_1.MaxLengthValidator;
	exports.MinLengthValidator = validators_1.MinLengthValidator;
	exports.PatternValidator = validators_1.PatternValidator;
	exports.RequiredValidator = validators_1.RequiredValidator;
	var form_builder_1 = __webpack_require__(387);
	exports.FormBuilder = form_builder_1.FormBuilder;
	var model_1 = __webpack_require__(172);
	exports.AbstractControl = model_1.AbstractControl;
	exports.FormArray = model_1.FormArray;
	exports.FormControl = model_1.FormControl;
	exports.FormGroup = model_1.FormGroup;
	var validators_2 = __webpack_require__(52);
	exports.NG_ASYNC_VALIDATORS = validators_2.NG_ASYNC_VALIDATORS;
	exports.NG_VALIDATORS = validators_2.NG_VALIDATORS;
	exports.Validators = validators_2.Validators;
	__export(__webpack_require__(545));
	//# sourceMappingURL=forms.js.map

/***/ },

/***/ 587:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var shared_module_1 = __webpack_require__(186);
	var albums_component_1 = __webpack_require__(413);
	var spotify_service_1 = __webpack_require__(110);
	var quantone_service_1 = __webpack_require__(109);
	var albums_routing_1 = __webpack_require__(588);
	var AlbumsModule = (function () {
	    function AlbumsModule() {
	    }
	    AlbumsModule = __decorate([
	        core_1.NgModule({
	            imports: [shared_module_1.SharedModule, albums_routing_1.routing],
	            declarations: [albums_component_1.AlbumsComponent],
	            providers: [quantone_service_1.QuantoneService, spotify_service_1.SpotifyService]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AlbumsModule);
	    return AlbumsModule;
	}());
	exports.AlbumsModule = AlbumsModule;
	

/***/ },

/***/ 588:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var router_1 = __webpack_require__(62);
	var albums_component_1 = __webpack_require__(413);
	exports.routing = router_1.RouterModule.forChild([
	    { path: 'search', component: albums_component_1.AlbumsComponent }
	]);
	

/***/ },

/***/ 589:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: "my-app",
	            template: __webpack_require__(766),
	            styles: [__webpack_require__(979)],
	            encapsulation: core_1.ViewEncapsulation.None // allow styles to be applied outside this component
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;
	

/***/ },

/***/ 590:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var platform_browser_1 = __webpack_require__(89);
	var http_1 = __webpack_require__(173);
	var app_component_1 = __webpack_require__(589);
	var app_routing_1 = __webpack_require__(591);
	var shared_module_1 = __webpack_require__(186);
	var header_module_1 = __webpack_require__(595);
	var artist_module_1 = __webpack_require__(592);
	var albums_module_1 = __webpack_require__(587);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    AppModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                platform_browser_1.BrowserModule,
	                app_routing_1.routing,
	                shared_module_1.SharedModule.forRoot(),
	                header_module_1.HeaderModule,
	                artist_module_1.ArtistModule,
	                albums_module_1.AlbumsModule],
	            declarations: [app_component_1.AppComponent],
	            providers: [http_1.HTTP_PROVIDERS],
	            bootstrap: [app_component_1.AppComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppModule);
	    return AppModule;
	}());
	exports.AppModule = AppModule;
	

/***/ },

/***/ 591:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var router_1 = __webpack_require__(62);
	exports.routes = [
	    { path: '', pathMatch: 'full', redirectTo: 'search' }
	];
	exports.routing = router_1.RouterModule.forRoot(exports.routes);
	

/***/ },

/***/ 592:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var shared_module_1 = __webpack_require__(186);
	var artist_component_1 = __webpack_require__(415);
	var artist_albums_component_1 = __webpack_require__(414);
	var spotify_service_1 = __webpack_require__(110);
	var quantone_service_1 = __webpack_require__(109);
	var artist_routing_1 = __webpack_require__(593);
	var ArtistModule = (function () {
	    function ArtistModule() {
	    }
	    ArtistModule = __decorate([
	        core_1.NgModule({
	            imports: [shared_module_1.SharedModule, artist_routing_1.routing],
	            declarations: [artist_component_1.ArtistComponent, artist_albums_component_1.ArtistAlbumsComponent],
	            providers: [spotify_service_1.SpotifyService, quantone_service_1.QuantoneService]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ArtistModule);
	    return ArtistModule;
	}());
	exports.ArtistModule = ArtistModule;
	

/***/ },

/***/ 593:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var router_1 = __webpack_require__(62);
	var artist_component_1 = __webpack_require__(415);
	exports.routing = router_1.RouterModule.forChild([
	    { path: 'artist/:id', component: artist_component_1.ArtistComponent }
	]);
	

/***/ },

/***/ 594:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(62);
	var Subject_1 = __webpack_require__(17);
	var searchQuery_1 = __webpack_require__(416);
	var years_service_1 = __webpack_require__(418);
	var HeaderComponent = (function () {
	    function HeaderComponent(router, activatedRoute, yearsService) {
	        this.router = router;
	        this.activatedRoute = activatedRoute;
	        this.yearsService = yearsService;
	        this.searchQueryStream = new Subject_1.Subject();
	        this.showYears = false;
	        this.selectedYear = "";
	        this.debounceTime = 800;
	        this.sliderItemsState = '';
	        this.searchQuery = this.searchQueryStream
	            .debounceTime(this.debounceTime)
	            .distinctUntilChanged();
	    }
	    HeaderComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.searchQuery.subscribe(function (query) {
	            _this._navigateToAlbums(query);
	        });
	        this.years = this.yearsService.getYears();
	        this.yearsRange = this.yearsService.getYearsRange();
	        this.sub = this.router
	            .routerState
	            .queryParams
	            .subscribe(function (params) {
	            _this.label = _this._getParam(params["label"]);
	            _this.query = _this._getParam(params["query"]);
	        });
	    };
	    HeaderComponent.prototype._getParam = function (param) {
	        if (param === undefined) {
	            return '';
	        }
	        var result = param;
	        if (result != "true") {
	            return decodeURI(result);
	        }
	        return '';
	    };
	    HeaderComponent.prototype._navigateToAlbums = function (search) {
	        this.router.navigate(["/search"], { queryParams: { query: search.query, label: search.label, year: search.year } });
	    };
	    HeaderComponent.prototype.search = function () {
	        this.searchQueryStream.next(new searchQuery_1.SearchQuery(this.query, this.label, this.selectedYear, 0));
	    };
	    HeaderComponent.prototype.searchByTerm = function (term) {
	        this.query = term;
	        this.search();
	    };
	    HeaderComponent.prototype.searchByLabel = function (label) {
	        this.label = label;
	        this.search();
	    };
	    HeaderComponent.prototype.searchByYear = function (year) {
	        if (this.selectedYear === year)
	            year = ""; // deselect when selected
	        this.selectedYear = year;
	        this.search();
	    };
	    HeaderComponent.prototype.toggleYears = function () {
	        this.showYears = !this.showYears;
	    };
	    HeaderComponent.prototype.moveSliderLeft = function (sliderItems) {
	        this.moveSlider(true, sliderItems);
	    };
	    HeaderComponent.prototype.moveSliderRight = function (sliderItems) {
	        this.moveSlider(false, sliderItems);
	    };
	    HeaderComponent.prototype.moveSlider = function (left, sliderItems) {
	        console.log(left);
	        console.log(sliderItems);
	    };
	    HeaderComponent = __decorate([
	        core_1.Component({
	            selector: 'tc-header',
	            template: __webpack_require__(769),
	            styles: [__webpack_require__(981)],
	            animations: [
	                core_1.trigger('sliderItemsState', [
	                    core_1.state('inactive', core_1.style({
	                        opacity: 0
	                    })),
	                    core_1.state('active', core_1.style({
	                        opacity: 1
	                    })),
	                    core_1.transition('inactive => active', core_1.animate('20ms ease-in')),
	                    core_1.transition('active => inactive', core_1.animate(10))
	                ])
	            ]
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, years_service_1.YearsService])
	    ], HeaderComponent);
	    return HeaderComponent;
	}());
	exports.HeaderComponent = HeaderComponent;
	

/***/ },

/***/ 595:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var forms_1 = __webpack_require__(543);
	var shared_module_1 = __webpack_require__(186);
	var header_component_1 = __webpack_require__(594);
	var years_service_1 = __webpack_require__(418);
	var HeaderModule = (function () {
	    function HeaderModule() {
	    }
	    HeaderModule = __decorate([
	        core_1.NgModule({
	            imports: [shared_module_1.SharedModule, forms_1.FormsModule],
	            declarations: [header_component_1.HeaderComponent],
	            exports: [header_component_1.HeaderComponent],
	            providers: [years_service_1.YearsService]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], HeaderModule);
	    return HeaderModule;
	}());
	exports.HeaderModule = HeaderModule;
	

/***/ },

/***/ 596:
/***/ function(module, exports) {

	"use strict";
	var Artist = (function () {
	    function Artist(Id, Name, Bio, Images) {
	        this.Id = Id;
	        this.Name = Name;
	        this.Bio = Bio;
	        this.Images = Images;
	        this.ImageUrl = this.getImageUrl();
	    }
	    Artist.prototype.getImageUrl = function () {
	        var imageUrl = '';
	        var currentHeight = 0;
	        if (!!this.Images && this.Images.length > 0) {
	            // let filteredImages = this.Images.filter(image => {
	            //     // if(image.height > currentHeight && image.height - 160 )
	            //     return image.width < 700;
	            // });
	            // return filteredImages[0].url;
	            return this.Images[0].url;
	        }
	        return '';
	    };
	    return Artist;
	}());
	exports.Artist = Artist;
	

/***/ },

/***/ 597:
/***/ function(module, exports) {

	"use strict";
	var ArtistSearchQuery = (function () {
	    function ArtistSearchQuery(id, offset) {
	        this.id = id;
	        this.offset = offset;
	    }
	    return ArtistSearchQuery;
	}());
	exports.ArtistSearchQuery = ArtistSearchQuery;
	

/***/ },

/***/ 598:
/***/ function(module, exports) {

	"use strict";
	var SpotifyAlbums = (function () {
	    function SpotifyAlbums(total, albums) {
	        this.total = total;
	        this.albums = albums;
	    }
	    return SpotifyAlbums;
	}());
	exports.SpotifyAlbums = SpotifyAlbums;
	

/***/ },

/***/ 599:
/***/ function(module, exports) {

	"use strict";
	var Track = (function () {
	    function Track(Id, Name, Uri, Popularity, SpotifyId, Bpm, Duration, Title) {
	        this.Id = Id;
	        this.Name = Name;
	        this.Uri = Uri;
	        this.Popularity = Popularity;
	        this.SpotifyId = SpotifyId;
	        this.Bpm = Bpm;
	        this.Duration = Duration;
	        this.Title = Title;
	    }
	    return Track;
	}());
	exports.Track = Track;
	

/***/ },

/***/ 600:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var spotify_service_1 = __webpack_require__(110);
	var quantone_service_1 = __webpack_require__(109);
	var spotifyAlbum_1 = __webpack_require__(417);
	var AlbumComponent = (function () {
	    function AlbumComponent(spotifyService, quantoneService) {
	        this.spotifyService = spotifyService;
	        this.quantoneService = quantoneService;
	    }
	    AlbumComponent.prototype.showTracks = function (album) {
	        var _this = this;
	        if (!album.showTracks && !album.tracksLoaded) {
	            this.quantoneService.getAlbum(album.id)
	                .subscribe(function (albumResult) { return _this.spotifyService.updateAlbum(album, albumResult); }, function (error) { return console.log(error); });
	        }
	        album.showTracks = !album.showTracks;
	    };
	    AlbumComponent.prototype.showChevron = function (album) {
	        album.isUpChevronHidden = !album.showTracks;
	        album.isDownChevronHidden = album.showTracks;
	        album.isCopyrightHidden = true;
	    };
	    AlbumComponent.prototype.showCopyright = function (album) {
	        album.isUpChevronHidden = true;
	        album.isDownChevronHidden = true;
	        album.isCopyrightHidden = false;
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', spotifyAlbum_1.SpotifyAlbum)
	    ], AlbumComponent.prototype, "album", void 0);
	    AlbumComponent = __decorate([
	        core_1.Component({
	            selector: 'tc-album',
	            template: __webpack_require__(770),
	            styles: [__webpack_require__(982)]
	        }), 
	        __metadata('design:paramtypes', [spotify_service_1.SpotifyService, quantone_service_1.QuantoneService])
	    ], AlbumComponent);
	    return AlbumComponent;
	}());
	exports.AlbumComponent = AlbumComponent;
	

/***/ },

/***/ 601:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var Subject_1 = __webpack_require__(17);
	var distanceFromBottomThreshold = 500;
	var minDistanceFromBottom = 120;
	var InfiniteScrollComponent = (function () {
	    function InfiniteScrollComponent() {
	        var _this = this;
	        this.scrollStream = new Subject_1.Subject();
	        this.lowestDistanceFromBottom = distanceFromBottomThreshold;
	        this.scrollObservable = this.scrollStream
	            .debounceTime(200)
	            .subscribe(function () {
	            var distanceFromBottom = Math.max(document.body.offsetHeight - (window.pageYOffset + window.innerHeight), 0);
	            if (distanceFromBottom >= distanceFromBottomThreshold) {
	                _this.lowestDistanceFromBottom = distanceFromBottom;
	                return;
	            }
	            if (distanceFromBottom <= _this.lowestDistanceFromBottom) {
	                _this.lowestDistanceFromBottom = Math.max(distanceFromBottom, minDistanceFromBottom);
	                _this.scroll.emit({});
	            }
	        });
	        this.scroll = new core_1.EventEmitter();
	    }
	    InfiniteScrollComponent.prototype.onScrolled = function (event) {
	        this.scrollStream.next({});
	    };
	    InfiniteScrollComponent.prototype.ngOnInit = function () {
	    };
	    InfiniteScrollComponent.prototype.ngOnDestroy = function () {
	    };
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], InfiniteScrollComponent.prototype, "scroll", void 0);
	    __decorate([
	        core_1.HostListener("window:scroll", ["$event"]), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', [Object]), 
	        __metadata('design:returntype', void 0)
	    ], InfiniteScrollComponent.prototype, "onScrolled", null);
	    InfiniteScrollComponent = __decorate([
	        core_1.Directive({
	            selector: "[infinite-scroll]",
	        }), 
	        __metadata('design:paramtypes', [])
	    ], InfiniteScrollComponent);
	    return InfiniteScrollComponent;
	}());
	exports.InfiniteScrollComponent = InfiniteScrollComponent;
	

/***/ },

/***/ 765:
/***/ function(module, exports) {

	module.exports = "<div infinite-scroll (scroll)=\"onScroll()\" [@albumState]=\"state\">\r\n    <tc-album *ngFor=\"let album of albums | async\" \r\n            [@albumState]=\"album.state\" [album]=\"album\">\r\n    </tc-album>\r\n    <div [@noResultsState]=\"noResultsState\">Your search for <span *ngIf=\"query.query.trim().length > 0\">\"{{query.query}}\"</span> \r\n        <span *ngIf=\"query.query.trim().length > 0 && query.label.trim().length > 0\"> on the label </span> \r\n        <span *ngIf=\"query.label.trim().length > 0\">\"{{query.label}}\"</span>\r\n         did not return any records. Keep digging the crates.\r\n    </div>\r\n    <div *ngIf=\"recordsHaveEnded()\">The record has stopped</div>\r\n</div>"

/***/ },

/***/ 766:
/***/ function(module, exports) {

	module.exports = "<div class=\"layout-container-dark\">\r\n    <tc-header></tc-header>\r\n</div>\r\n<div class=\"layout-container\">\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ },

/***/ 767:
/***/ function(module, exports) {

	module.exports = "<div infinite-scroll (scroll)=\"onScroll()\" [@albumState]=\"state\">\r\n    <tc-album *ngFor=\"let album of albums | async\" \r\n            [@albumState]=\"album.state\" [album]=\"album\">\r\n    </tc-album>\r\n    <div *ngIf=\"recordsHaveEnded()\">The record has stopped</div>\r\n</div>"

/***/ },

/***/ 768:
/***/ function(module, exports) {

	module.exports = "<h1 class=\"name\">{{artist?.Name}}</h1>\r\n<div class=\"image\" [@artistState]=\"imageState\" [ngStyle]=\"{'background-image': 'url(' + artist?.ImageUrl + ')'}\" ></div>\r\n<div class=\"bio\" [@artistState]=\"bioState\">{{artist?.Bio}}</div>\r\n<tc-artist-albums></tc-artist-albums>"

/***/ },

/***/ 769:
/***/ function(module, exports) {

	module.exports = "<ul class=\"layout-constrained\">\r\n<li class=\"headeritem headeritem-light\">\r\n    <label class=\"glyphicon glyphicon-search\" for=\"query\"></label>\r\n    <input id=\"query\" [ngModel]=\"query\" (ngModelChange)=\"searchByTerm($event)\" placeholder=\"Search...\"/>\r\n</li>\r\n<li class=\"headeritem headeritem-light\">\r\n    <label class=\"glyphicon glyphicon-search\" for=\"label\"></label>\r\n    <input id=\"label\" [ngModel]=\"label\" (ngModelChange)=\"searchByLabel($event)\" placeholder=\"Record Label...\"/>\r\n</li>\r\n<li class=\"headeritem headeritem-reveal\" (click)=\"toggleYears()\">Years<i class=\"glyphicon glyphicon-chevron-down\" *ngIf=\"!showYears\"></i><i class=\"glyphicon glyphicon-chevron-up\" *ngIf=\"showYears\"></i>\r\n</li>\r\n</ul>\r\n<div *ngIf=\"showYears\">\r\n    <!--<span class=\"slider-button glyphicon glyphicon-chevron-left\" (click)=\"moveSliderRight(sliderItems)\"></span>-->\r\n    <ul class=\"layout-constrained headeritem-margin\">\r\n        <li class=\"headeritem headeritem-light headeritem-no-margin headeritem-reveal\">\r\n            <input id=\"year\" [ngModel]=\"year\" (ngModelChange)=\"searchByYear($event)\" placeholder=\"Year...\"/>\r\n        </li>\r\n        <li class=\"headeritem headeritem-reveal\" [class.headeritem-selected]=\"year === selectedYear\" *ngFor=\"let year of years\" (click)=\"searchByYear(year)\">{{year}}</li>\r\n    </ul>\r\n    <!--<span class=\"slider-button  glyphicon glyphicon-chevron-right\" (click)=\"moveSliderRight(sliderItems)\"></span>-->\r\n</div>\r\n<ul class=\"layout-constrained headeritem-margin\" *ngIf=\"showYears\">\r\n    <li class=\"headeritem headeritem-reveal\" [class.headeritem-selected]=\"year === selectedYear\" *ngFor=\"let year of yearsRange\" (click)=\"searchByYear(year)\">{{year}}</li>\r\n</ul>"

/***/ },

/***/ 770:
/***/ function(module, exports) {

	module.exports = "<div class=\"listitem row\">\r\n    <div class=\"listitem-image\"><img [src]=\"album.image.url\" /></div>\r\n    <span class=\"circle\">{{album.popularity}}</span>\r\n    <a [href]=\"album.trustedUri\" class=\"listitem-large\">{{album.name}}</a>\r\n    <span class=\"listitem-small\" *ngFor=\"let artist of album.artists; let last=last\">\r\n        <a routerLink=\"/artist/{{artist.id}}\">{{artist.name}}</a>\r\n        <span *ngIf=\"!last\">|</span>\r\n        <br *ngIf=\"last\" />\r\n    </span>\r\n    <span class=\"listitem-smaller\">{{album.release_date}}</span>\r\n</div>\r\n<div role=\"button\" class=\"listitemsmall text-center relative\" (click)=\"showTracks(album)\" (mouseover)=\"showChevron(album)\" (mouseout)=\"showCopyright(album)\">\r\n    <span class=\"listitem-subdued absolute-left\" [hidden]=\"album.isCopyrightHidden\">{{album.copyright?.text}}</span>\r\n    <i [hidden]=\"album.isDownChevronHidden\" class=\"glyphicon glyphicon-menu-down\"></i>\r\n    <i [hidden]=\"album.isUpChevronHidden\" class=\"glyphicon glyphicon-menu-up\"></i> \r\n</div>\r\n<template [ngIf]=\"album.recordings && album.showTracks\">\r\n    <div class=\"listitemsmall listitemsmall-link\" *ngFor=\"let recording of album.recordings; let i=index\">\r\n        <a>{{(i+ 1) + '. ' + recording?.Name}}</a>\r\n        {{recording?.Bpm}} <span *ngIf=\"!!recording?.Bpm\">BPM</span> {{recording?.Duration}} <i *ngIf=\"!!recording?.Duration\" class=\"glyphicon glyphicon-time\"></i>\r\n    </div>\r\n</template>"

/***/ },

/***/ 979:
/***/ function(module, exports) {

	module.exports = "body {\r\n    margin: 0;\r\n    background-color: #292C2C;\r\n    color: #79DADA;\r\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    font-size: 14px;\r\n    line-height: 1.42857143;\r\n    margin: 0;\r\n}\r\n\r\n[hidden] {\r\n   visibility: hidden !important;\r\n}\r\n\r\na {\r\n    color: #35C0E0;\r\n}\r\na:hover {\r\n    color: #35C0E0;\r\n}\r\na:visited {\r\n    color: #35C0E0;\r\n}\r\n    \r\nul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\nul li {\r\n    display: inline-block;\r\n}\r\n.layout-container {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding: 15px;\r\n    max-width: 1000px;\r\n}\r\n\r\n.layout-container-dark {\r\n    padding: 2px 0;\r\n    background-color: #222;\r\n    z-index: 1000;\r\n    width: 100%;\r\n}\r\n\r\n.layout-constrained {\r\n    margin: 0 auto;\r\n    max-width: 1000px;\r\n    padding: 0;\r\n    padding-left: 15px;\r\n}\r\n\r\n.row {\r\n    margin: 0;\r\n}\r\n\r\n.circle\r\n{\r\n    display: inline-flex;\r\n    border-radius: 50%;\r\n    border: solid 2px;\r\n    padding: 3px;\r\n    justify-content: center;\r\n    min-width: 2em;\r\n    float: left;\r\n    margin: 5px;\r\n    margin-right: 16px;\r\n    margin-left: 12px;\r\n}\r\n\r\n"

/***/ },

/***/ 980:
/***/ function(module, exports) {

	module.exports = ".name {\r\n    margin: 0;\r\n    margin-bottom: 4px;\r\n    color: #51c5c5;\r\n    text-align: center;\r\n    font-size: 4em;\r\n}\r\n\r\n.image {\r\n    height: 400px; \r\n    background-color: #343535; \r\n    background-size: contain; \r\n    background-repeat: no-repeat; \r\n    background-position: center;\r\n    border-bottom: solid 1px #2EC7C7;\r\n    border-top: solid 1px #2EC7C7;\r\n}\r\n\r\n.bio {\r\n    font-size: 1.2em;\r\n    margin: 10px 0;\r\n    color: #75bbbb;\r\n}"

/***/ },

/***/ 981:
/***/ function(module, exports) {

	module.exports = "\r\n.headeritem {\r\n    background-color:  #343535;\r\n    display: inline-block;\r\n    min-width: 100px;\r\n    text-align: center;\r\n    font-weight: 600;\r\n}\r\n\r\n.headeritem a {\r\n    padding: 14px;\r\n    display: block;\r\n    text-decoration: none;\r\n}\r\n\r\n.headeritem a:hover {\r\n    background-color: #3F4747;\r\n}\r\n\r\n.headeritem-reveal {\r\n    margin: 2px 0;\r\n    padding: 14px;\r\n    color: #35C0E0;\r\n}\r\n\r\n.headeritem-reveal i {\r\n    margin-left: 10px;\r\n}\r\n\r\n.headeritem-reveal:hover {\r\n    background-color: #3F4747;\r\n    cursor: pointer;\r\n}\r\n.headeritem-selected {\r\n    background-color:#3F4747;\r\n}\r\n\r\n.headeritem-margin li.headeritem-no-margin {\r\n    margin-right: 0;\r\n}\r\n\r\n.headeritem-margin li {\r\n    margin-right: 4px;\r\n}\r\n\r\n.headeritem-hidden {\r\n    overflow: hidden;\r\n}\r\n\r\n.glyphicon {\r\n    color: #79DADA;\r\n    padding-right: 10px;\r\n}\r\n\r\n.headeritem-light {\r\n    padding: 14px;\r\n    background-color: #3F4747;\r\n    font-weight: normal;\r\n}\r\n\r\ninput {\r\n    color: white;\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: #3F4747;\r\n    border: none;\r\n}\r\n\r\ninput:focus {\r\n    outline: none;\r\n}\r\n"

/***/ },

/***/ 982:
/***/ function(module, exports) {

	module.exports = ".listitem {\r\n    padding: 12px;\r\n    padding-bottom: 2px;\r\n    padding-left: 16px;\r\n    background-color: #3F4747;\r\n    border-top: solid 1px #2EC7C7;\r\n    height: 88px;\r\n}\r\n\r\n.listitem-bottomborder {\r\n    margin-bottom: 20px;\r\n    border-bottom: solid 1px #2EC7C7;\r\n}\r\n    \r\n.listitem-image {\r\n    width: 84px;\r\n    float: left;\r\n}\r\n\r\n.listitem-large {\r\n    display: block;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n}\r\n\r\n.listitem-small {\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    display: inline;\r\n}\r\n\r\n.listitem-subdued {\r\n    color: #609090;\r\n}\r\n\r\n.listitem-smaller {\r\n    font-size: 10px;\r\n    font-weight: normal;\r\n    display: inline;\r\n}\r\n\r\n.listitemsmall {\r\n    background-color: #343535;\r\n    border-bottom: solid 1px #292C2C;\r\n    font-size: 12px;\r\n    padding-left: 10px;\r\n    white-space: nowrap;\r\n    vertical-align: middle;\r\n    line-height: 26px;\r\n}\r\n\r\n.listitemsmall:first-child {\r\n    border-top: solid 1px #292C2C;\r\n}\r\n\r\n.listitemsmall:last-child {\r\n    margin-bottom: 20px;\r\n    border-bottom: solid 1px #2EC7C7;\r\n}\r\n\r\n.listitemsmall-link:hover {\r\n    background-color: #3F4747;\r\n    cursor: pointer;\r\n}\r\n\r\n.listitem-constrained {\r\n    background-color: #3F4747;\r\n    display: inline-block;\r\n    border-top: solid 1px #2EC7C7;\r\n    \r\n    margin: 0 10px 20px 0;\r\n}\r\n\r\n.listitem-constrained-image {\r\n    display: block;\r\n}\r\n\r\n.listitemsmall-constrained {\r\n    background-color: #343535;\r\n    border-bottom: solid 1px #2EC7C7;\r\n    font-size: 12px;\r\n    padding: 0 10px;\r\n    white-space: nowrap;\r\n    vertical-align: middle;\r\n    line-height: 26px;\r\n}\r\n\r\n.listitem-constrained-name {\r\n    font-size: 12px;\r\n}\r\n\r\n.relative {\r\n    position: relative;\r\n}\r\n\r\n.absolute-left {\r\n    position: absolute;\r\n    left: 16px;\r\n}\r\n\r\n.hover-hide:hover {\r\n    display: none;\r\n}\r\n\r\n.hover-show:hover {\r\n    display: initial;\r\n}"

/***/ }

});
//# sourceMappingURL=main.map