(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/backend"],{

/***/ "./node_modules/@coreui/coreui/dist/js/coreui.js":
/*!*******************************************************!*\
  !*** ./node_modules/@coreui/coreui/dist/js/coreui.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*!
  * CoreUI v2.1.16 (https://coreui.io)
  * Copyright 2019 Łukasz Holeczek
  * Licensed under MIT (https://coreui.io)
  */
(function (global, factory) {
   true ? factory(exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js")) :
  undefined;
}(this, (function (exports, $, PerfectScrollbar) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  PerfectScrollbar = PerfectScrollbar && PerfectScrollbar.hasOwnProperty('default') ? PerfectScrollbar['default'] : PerfectScrollbar;

  var fails = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  // Thank's IE8 for his funny defineProperty
  var descriptors = !fails(function () {
    return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
  });

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var check = function (it) {
    return it && it.Math == Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global_1 =
    // eslint-disable-next-line no-undef
    check(typeof globalThis == 'object' && globalThis) ||
    check(typeof window == 'object' && window) ||
    check(typeof self == 'object' && self) ||
    check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
    // eslint-disable-next-line no-new-func
    Function('return this')();

  var isObject = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  var document$1 = global_1.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS = isObject(document$1) && isObject(document$1.createElement);

  var documentCreateElement = function (it) {
    return EXISTS ? document$1.createElement(it) : {};
  };

  // Thank's IE8 for his funny defineProperty
  var ie8DomDefine = !descriptors && !fails(function () {
    return Object.defineProperty(documentCreateElement('div'), 'a', {
      get: function () { return 7; }
    }).a != 7;
  });

  var anObject = function (it) {
    if (!isObject(it)) {
      throw TypeError(String(it) + ' is not an object');
    } return it;
  };

  // `ToPrimitive` abstract operation
  // https://tc39.github.io/ecma262/#sec-toprimitive
  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  var toPrimitive = function (input, PREFERRED_STRING) {
    if (!isObject(input)) return input;
    var fn, val;
    if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
    if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
    if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var nativeDefineProperty = Object.defineProperty;

  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  var f = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPrimitive(P, true);
    anObject(Attributes);
    if (ie8DomDefine) try {
      return nativeDefineProperty(O, P, Attributes);
    } catch (error) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var objectDefineProperty = {
  	f: f
  };

  var createPropertyDescriptor = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var createNonEnumerableProperty = descriptors ? function (object, key, value) {
    return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var setGlobal = function (key, value) {
    try {
      createNonEnumerableProperty(global_1, key, value);
    } catch (error) {
      global_1[key] = value;
    } return value;
  };

  var SHARED = '__core-js_shared__';
  var store = global_1[SHARED] || setGlobal(SHARED, {});

  var sharedStore = store;

  var shared = createCommonjsModule(function (module) {
  (module.exports = function (key, value) {
    return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.3.4',
    mode:  'global',
    copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
  });
  });

  var hasOwnProperty = {}.hasOwnProperty;

  var has = function (it, key) {
    return hasOwnProperty.call(it, key);
  };

  var functionToString = shared('native-function-to-string', Function.toString);

  var WeakMap = global_1.WeakMap;

  var nativeWeakMap = typeof WeakMap === 'function' && /native code/.test(functionToString.call(WeakMap));

  var id = 0;
  var postfix = Math.random();

  var uid = function (key) {
    return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
  };

  var keys = shared('keys');

  var sharedKey = function (key) {
    return keys[key] || (keys[key] = uid(key));
  };

  var hiddenKeys = {};

  var WeakMap$1 = global_1.WeakMap;
  var set, get, has$1;

  var enforce = function (it) {
    return has$1(it) ? get(it) : set(it, {});
  };

  var getterFor = function (TYPE) {
    return function (it) {
      var state;
      if (!isObject(it) || (state = get(it)).type !== TYPE) {
        throw TypeError('Incompatible receiver, ' + TYPE + ' required');
      } return state;
    };
  };

  if (nativeWeakMap) {
    var store$1 = new WeakMap$1();
    var wmget = store$1.get;
    var wmhas = store$1.has;
    var wmset = store$1.set;
    set = function (it, metadata) {
      wmset.call(store$1, it, metadata);
      return metadata;
    };
    get = function (it) {
      return wmget.call(store$1, it) || {};
    };
    has$1 = function (it) {
      return wmhas.call(store$1, it);
    };
  } else {
    var STATE = sharedKey('state');
    hiddenKeys[STATE] = true;
    set = function (it, metadata) {
      createNonEnumerableProperty(it, STATE, metadata);
      return metadata;
    };
    get = function (it) {
      return has(it, STATE) ? it[STATE] : {};
    };
    has$1 = function (it) {
      return has(it, STATE);
    };
  }

  var internalState = {
    set: set,
    get: get,
    has: has$1,
    enforce: enforce,
    getterFor: getterFor
  };

  var redefine = createCommonjsModule(function (module) {
  var getInternalState = internalState.get;
  var enforceInternalState = internalState.enforce;
  var TEMPLATE = String(functionToString).split('toString');

  shared('inspectSource', function (it) {
    return functionToString.call(it);
  });

  (module.exports = function (O, key, value, options) {
    var unsafe = options ? !!options.unsafe : false;
    var simple = options ? !!options.enumerable : false;
    var noTargetGet = options ? !!options.noTargetGet : false;
    if (typeof value == 'function') {
      if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
      enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
    if (O === global_1) {
      if (simple) O[key] = value;
      else setGlobal(key, value);
      return;
    } else if (!unsafe) {
      delete O[key];
    } else if (!noTargetGet && O[key]) {
      simple = true;
    }
    if (simple) O[key] = value;
    else createNonEnumerableProperty(O, key, value);
  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, 'toString', function toString() {
    return typeof this == 'function' && getInternalState(this).source || functionToString.call(this);
  });
  });

  var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
    // Chrome 38 Symbol has incorrect toString conversion
    // eslint-disable-next-line no-undef
    return !String(Symbol());
  });

  var Symbol$1 = global_1.Symbol;
  var store$2 = shared('wks');

  var wellKnownSymbol = function (name) {
    return store$2[name] || (store$2[name] = nativeSymbol && Symbol$1[name]
      || (nativeSymbol ? Symbol$1 : uid)('Symbol.' + name));
  };

  // `RegExp.prototype.flags` getter implementation
  // https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
  var regexpFlags = function () {
    var that = anObject(this);
    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.dotAll) result += 's';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  };

  var nativeExec = RegExp.prototype.exec;
  // This always refers to the native implementation, because the
  // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
  // which loads this file before patching the method.
  var nativeReplace = String.prototype.replace;

  var patchedExec = nativeExec;

  var UPDATES_LAST_INDEX_WRONG = (function () {
    var re1 = /a/;
    var re2 = /b*/g;
    nativeExec.call(re1, 'a');
    nativeExec.call(re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  })();

  // nonparticipating capturing group, copied from es5-shim's String#split patch.
  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

  if (PATCH) {
    patchedExec = function exec(str) {
      var re = this;
      var lastIndex, reCopy, match, i;

      if (NPCG_INCLUDED) {
        reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
      }
      if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

      match = nativeExec.call(re, str);

      if (UPDATES_LAST_INDEX_WRONG && match) {
        re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
      }
      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
        nativeReplace.call(match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }

      return match;
    };
  }

  var regexpExec = patchedExec;

  var SPECIES = wellKnownSymbol('species');

  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
    // #replace needs built-in support for named groups.
    // #match works fine because it just return the exec results, even if it has
    // a "grops" property.
    var re = /./;
    re.exec = function () {
      var result = [];
      result.groups = { a: '7' };
      return result;
    };
    return ''.replace(re, '$<a>') !== '7';
  });

  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  // Weex JS has frozen built-in prototypes, so use try / catch wrapper
  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
    var re = /(?:)/;
    var originalExec = re.exec;
    re.exec = function () { return originalExec.apply(this, arguments); };
    var result = 'ab'.split(re);
    return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
  });

  var fixRegexpWellKnownSymbolLogic = function (KEY, length, exec, sham) {
    var SYMBOL = wellKnownSymbol(KEY);

    var DELEGATES_TO_SYMBOL = !fails(function () {
      // String methods call symbol-named RegEp methods
      var O = {};
      O[SYMBOL] = function () { return 7; };
      return ''[KEY](O) != 7;
    });

    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
      // Symbol-named RegExp methods call .exec
      var execCalled = false;
      var re = /a/;

      if (KEY === 'split') {
        // We can't use real regex here since it causes deoptimization
        // and serious performance degradation in V8
        // https://github.com/zloirock/core-js/issues/306
        re = {};
        // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.
        re.constructor = {};
        re.constructor[SPECIES] = function () { return re; };
        re.flags = '';
        re[SYMBOL] = /./[SYMBOL];
      }

      re.exec = function () { execCalled = true; return null; };

      re[SYMBOL]('');
      return !execCalled;
    });

    if (
      !DELEGATES_TO_SYMBOL ||
      !DELEGATES_TO_EXEC ||
      (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
      (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
    ) {
      var nativeRegExpMethod = /./[SYMBOL];
      var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      });
      var stringMethod = methods[0];
      var regexMethod = methods[1];

      redefine(String.prototype, KEY, stringMethod);
      redefine(RegExp.prototype, SYMBOL, length == 2
        // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
        // 21.2.5.11 RegExp.prototype[@@split](string, limit)
        ? function (string, arg) { return regexMethod.call(string, this, arg); }
        // 21.2.5.6 RegExp.prototype[@@match](string)
        // 21.2.5.9 RegExp.prototype[@@search](string)
        : function (string) { return regexMethod.call(string, this); }
      );
      if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
    }
  };

  var toString = {}.toString;

  var classofRaw = function (it) {
    return toString.call(it).slice(8, -1);
  };

  var MATCH = wellKnownSymbol('match');

  // `IsRegExp` abstract operation
  // https://tc39.github.io/ecma262/#sec-isregexp
  var isRegexp = function (it) {
    var isRegExp;
    return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
  };

  // `RequireObjectCoercible` abstract operation
  // https://tc39.github.io/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible = function (it) {
    if (it == undefined) throw TypeError("Can't call method on " + it);
    return it;
  };

  var aFunction = function (it) {
    if (typeof it != 'function') {
      throw TypeError(String(it) + ' is not a function');
    } return it;
  };

  var SPECIES$1 = wellKnownSymbol('species');

  // `SpeciesConstructor` abstract operation
  // https://tc39.github.io/ecma262/#sec-speciesconstructor
  var speciesConstructor = function (O, defaultConstructor) {
    var C = anObject(O).constructor;
    var S;
    return C === undefined || (S = anObject(C)[SPECIES$1]) == undefined ? defaultConstructor : aFunction(S);
  };

  var ceil = Math.ceil;
  var floor = Math.floor;

  // `ToInteger` abstract operation
  // https://tc39.github.io/ecma262/#sec-tointeger
  var toInteger = function (argument) {
    return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
  };

  // `String.prototype.{ codePointAt, at }` methods implementation
  var createMethod = function (CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = String(requireObjectCoercible($this));
      var position = toInteger(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = S.charCodeAt(position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size
        || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
          ? CONVERT_TO_STRING ? S.charAt(position) : first
          : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
  };

  var stringMultibyte = {
    // `String.prototype.codePointAt` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod(true)
  };

  var charAt = stringMultibyte.charAt;

  // `AdvanceStringIndex` abstract operation
  // https://tc39.github.io/ecma262/#sec-advancestringindex
  var advanceStringIndex = function (S, index, unicode) {
    return index + (unicode ? charAt(S, index).length : 1);
  };

  var min = Math.min;

  // `ToLength` abstract operation
  // https://tc39.github.io/ecma262/#sec-tolength
  var toLength = function (argument) {
    return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  // `RegExpExec` abstract operation
  // https://tc39.github.io/ecma262/#sec-regexpexec
  var regexpExecAbstract = function (R, S) {
    var exec = R.exec;
    if (typeof exec === 'function') {
      var result = exec.call(R, S);
      if (typeof result !== 'object') {
        throw TypeError('RegExp exec method returned something other than an Object or null');
      }
      return result;
    }

    if (classofRaw(R) !== 'RegExp') {
      throw TypeError('RegExp#exec called on incompatible receiver');
    }

    return regexpExec.call(R, S);
  };

  var arrayPush = [].push;
  var min$1 = Math.min;
  var MAX_UINT32 = 0xFFFFFFFF;

  // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
  var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

  // @@split logic
  fixRegexpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
    var internalSplit;
    if (
      'abbc'.split(/(b)*/)[1] == 'c' ||
      'test'.split(/(?:)/, -1).length != 4 ||
      'ab'.split(/(?:ab)*/).length != 2 ||
      '.'.split(/(.?)(.?)/).length != 4 ||
      '.'.split(/()()/).length > 1 ||
      ''.split(/.?/).length
    ) {
      // based on es5-shim implementation, need to rework it
      internalSplit = function (separator, limit) {
        var string = String(requireObjectCoercible(this));
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (separator === undefined) return [string];
        // If `separator` is not a regex, use native split
        if (!isRegexp(separator)) {
          return nativeSplit.call(string, separator, lim);
        }
        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') +
                    (separator.multiline ? 'm' : '') +
                    (separator.unicode ? 'u' : '') +
                    (separator.sticky ? 'y' : '');
        var lastLastIndex = 0;
        // Make `global` and avoid `lastIndex` issues by working with a copy
        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var match, lastIndex, lastLength;
        while (match = regexpExec.call(separatorCopy, string)) {
          lastIndex = separatorCopy.lastIndex;
          if (lastIndex > lastLastIndex) {
            output.push(string.slice(lastLastIndex, match.index));
            if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
            lastLength = match[0].length;
            lastLastIndex = lastIndex;
            if (output.length >= lim) break;
          }
          if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
        }
        if (lastLastIndex === string.length) {
          if (lastLength || !separatorCopy.test('')) output.push('');
        } else output.push(string.slice(lastLastIndex));
        return output.length > lim ? output.slice(0, lim) : output;
      };
    // Chakra, V8
    } else if ('0'.split(undefined, 0).length) {
      internalSplit = function (separator, limit) {
        return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
      };
    } else internalSplit = nativeSplit;

    return [
      // `String.prototype.split` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.split
      function split(separator, limit) {
        var O = requireObjectCoercible(this);
        var splitter = separator == undefined ? undefined : separator[SPLIT];
        return splitter !== undefined
          ? splitter.call(separator, O, limit)
          : internalSplit.call(String(O), separator, limit);
      },
      // `RegExp.prototype[@@split]` method
      // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
      //
      // NOTE: This cannot be properly polyfilled in engines that don't support
      // the 'y' flag.
      function (regexp, limit) {
        var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
        if (res.done) return res.value;

        var rx = anObject(regexp);
        var S = String(this);
        var C = speciesConstructor(rx, RegExp);

        var unicodeMatching = rx.unicode;
        var flags = (rx.ignoreCase ? 'i' : '') +
                    (rx.multiline ? 'm' : '') +
                    (rx.unicode ? 'u' : '') +
                    (SUPPORTS_Y ? 'y' : 'g');

        // ^(? + rx + ) is needed, in combination with some S slicing, to
        // simulate the 'y' flag.
        var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (S.length === 0) return regexpExecAbstract(splitter, S) === null ? [S] : [];
        var p = 0;
        var q = 0;
        var A = [];
        while (q < S.length) {
          splitter.lastIndex = SUPPORTS_Y ? q : 0;
          var z = regexpExecAbstract(splitter, SUPPORTS_Y ? S : S.slice(q));
          var e;
          if (
            z === null ||
            (e = min$1(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
          ) {
            q = advanceStringIndex(S, q, unicodeMatching);
          } else {
            A.push(S.slice(p, q));
            if (A.length === lim) return A;
            for (var i = 1; i <= z.length - 1; i++) {
              A.push(z[i]);
              if (A.length === lim) return A;
            }
            q = p = e;
          }
        }
        A.push(S.slice(p));
        return A;
      }
    ];
  }, !SUPPORTS_Y);

  var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
  var f$1 = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
  } : nativePropertyIsEnumerable;

  var objectPropertyIsEnumerable = {
  	f: f$1
  };

  var split = ''.split;

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins
    return !Object('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
  } : Object;

  // toObject with fallback for non-array-like ES3 strings



  var toIndexedObject = function (it) {
    return indexedObject(requireObjectCoercible(it));
  };

  var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
  var f$2 = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPrimitive(P, true);
    if (ie8DomDefine) try {
      return nativeGetOwnPropertyDescriptor(O, P);
    } catch (error) { /* empty */ }
    if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
  };

  var objectGetOwnPropertyDescriptor = {
  	f: f$2
  };

  var path = global_1;

  var aFunction$1 = function (variable) {
    return typeof variable == 'function' ? variable : undefined;
  };

  var getBuiltIn = function (namespace, method) {
    return arguments.length < 2 ? aFunction$1(path[namespace]) || aFunction$1(global_1[namespace])
      : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
  };

  var max = Math.max;
  var min$2 = Math.min;

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
  var toAbsoluteIndex = function (index, length) {
    var integer = toInteger(index);
    return integer < 0 ? max(integer + length, 0) : min$2(integer, length);
  };

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod$1 = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject($this);
      var length = toLength(O.length);
      var index = toAbsoluteIndex(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare
        if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
      } else for (;length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

  var arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.includes
    includes: createMethod$1(true),
    // `Array.prototype.indexOf` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod$1(false)
  };

  var indexOf = arrayIncludes.indexOf;


  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (has(O, key = names[i++])) {
      ~indexOf(result, key) || result.push(key);
    }
    return result;
  };

  // IE8- don't enum bug keys
  var enumBugKeys = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
  ];

  var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype');

  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return objectKeysInternal(O, hiddenKeys$1);
  };

  var objectGetOwnPropertyNames = {
  	f: f$3
  };

  var f$4 = Object.getOwnPropertySymbols;

  var objectGetOwnPropertySymbols = {
  	f: f$4
  };

  // all object keys, includes non-enumerable and symbols
  var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = objectGetOwnPropertyNames.f(anObject(it));
    var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
    return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
  };

  var copyConstructorProperties = function (target, source) {
    var keys = ownKeys(source);
    var defineProperty = objectDefineProperty.f;
    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  };

  var replacement = /#|\.prototype\./;

  var isForced = function (feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true
      : value == NATIVE ? false
      : typeof detection == 'function' ? fails(detection)
      : !!detection;
  };

  var normalize = isForced.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data = isForced.data = {};
  var NATIVE = isForced.NATIVE = 'N';
  var POLYFILL = isForced.POLYFILL = 'P';

  var isForced_1 = isForced;

  var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;






  /*
    options.target      - name of the target object
    options.global      - target is the global object
    options.stat        - export as static methods of target
    options.proto       - export as prototype methods of target
    options.real        - real prototype method for the `pure` version
    options.forced      - export even if the native feature is available
    options.bind        - bind methods to the target, required for the `pure` version
    options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe      - use the simple assignment of property instead of delete + defineProperty
    options.sham        - add a flag to not completely full polyfills
    options.enumerable  - export as enumerable property
    options.noTargetGet - prevent calling a getter on target
  */
  var _export = function (options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) {
      target = global_1;
    } else if (STATIC) {
      target = global_1[TARGET] || setGlobal(TARGET, {});
    } else {
      target = (global_1[TARGET] || {}).prototype;
    }
    if (target) for (key in source) {
      sourceProperty = source[key];
      if (options.noTargetGet) {
        descriptor = getOwnPropertyDescriptor$1(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];
      FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
      // contained in target
      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty === typeof targetProperty) continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      }
      // add a flag to not completely full polyfills
      if (options.sham || (targetProperty && targetProperty.sham)) {
        createNonEnumerableProperty(sourceProperty, 'sham', true);
      }
      // extend global
      redefine(target, key, sourceProperty, options);
    }
  };

  // optional / simple context binding
  var bindContext = function (fn, that, length) {
    aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 0: return function () {
        return fn.call(that);
      };
      case 1: return function (a) {
        return fn.call(that, a);
      };
      case 2: return function (a, b) {
        return fn.call(that, a, b);
      };
      case 3: return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
    }
    return function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  // `ToObject` abstract operation
  // https://tc39.github.io/ecma262/#sec-toobject
  var toObject = function (argument) {
    return Object(requireObjectCoercible(argument));
  };

  // call something on iterator step with safe closing on error
  var callWithSafeIterationClosing = function (iterator, fn, value, ENTRIES) {
    try {
      return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
    // 7.4.6 IteratorClose(iterator, completion)
    } catch (error) {
      var returnMethod = iterator['return'];
      if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
      throw error;
    }
  };

  var iterators = {};

  var ITERATOR = wellKnownSymbol('iterator');
  var ArrayPrototype = Array.prototype;

  // check on default Array iterator
  var isArrayIteratorMethod = function (it) {
    return it !== undefined && (iterators.Array === it || ArrayPrototype[ITERATOR] === it);
  };

  var createProperty = function (object, key, value) {
    var propertyKey = toPrimitive(key);
    if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));
    else object[propertyKey] = value;
  };

  var TO_STRING_TAG = wellKnownSymbol('toStringTag');
  // ES3 wrong here
  var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (error) { /* empty */ }
  };

  // getting tag from ES6+ `Object.prototype.toString`
  var classof = function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
      // builtinTag case
      : CORRECT_ARGUMENTS ? classofRaw(O)
      // ES3 arguments fallback
      : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
  };

  var ITERATOR$1 = wellKnownSymbol('iterator');

  var getIteratorMethod = function (it) {
    if (it != undefined) return it[ITERATOR$1]
      || it['@@iterator']
      || iterators[classof(it)];
  };

  // `Array.from` method implementation
  // https://tc39.github.io/ecma262/#sec-array.from
  var arrayFrom = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iteratorMethod = getIteratorMethod(O);
    var length, result, step, iterator, next;
    if (mapping) mapfn = bindContext(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
    // if the target is not iterable or it's an array with the default iterator - use a simple case
    if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
      iterator = iteratorMethod.call(O);
      next = iterator.next;
      result = new C();
      for (;!(step = next.call(iterator)).done; index++) {
        createProperty(result, index, mapping
          ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true)
          : step.value
        );
      }
    } else {
      length = toLength(O.length);
      result = new C(length);
      for (;length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  };

  var ITERATOR$2 = wellKnownSymbol('iterator');
  var SAFE_CLOSING = false;

  try {
    var called = 0;
    var iteratorWithReturn = {
      next: function () {
        return { done: !!called++ };
      },
      'return': function () {
        SAFE_CLOSING = true;
      }
    };
    iteratorWithReturn[ITERATOR$2] = function () {
      return this;
    };
    // eslint-disable-next-line no-throw-literal
    Array.from(iteratorWithReturn, function () { throw 2; });
  } catch (error) { /* empty */ }

  var checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
    var ITERATION_SUPPORT = false;
    try {
      var object = {};
      object[ITERATOR$2] = function () {
        return {
          next: function () {
            return { done: ITERATION_SUPPORT = true };
          }
        };
      };
      exec(object);
    } catch (error) { /* empty */ }
    return ITERATION_SUPPORT;
  };

  var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
    Array.from(iterable);
  });

  // `Array.from` method
  // https://tc39.github.io/ecma262/#sec-array.from
  _export({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
    from: arrayFrom
  });

  // `IsArray` abstract operation
  // https://tc39.github.io/ecma262/#sec-isarray
  var isArray = Array.isArray || function isArray(arg) {
    return classofRaw(arg) == 'Array';
  };

  var SPECIES$2 = wellKnownSymbol('species');

  // `ArraySpeciesCreate` abstract operation
  // https://tc39.github.io/ecma262/#sec-arrayspeciescreate
  var arraySpeciesCreate = function (originalArray, length) {
    var C;
    if (isArray(originalArray)) {
      C = originalArray.constructor;
      // cross-realm fallback
      if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
      else if (isObject(C)) {
        C = C[SPECIES$2];
        if (C === null) C = undefined;
      }
    } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
  };

  var push = [].push;

  // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
  var createMethod$2 = function (TYPE) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function ($this, callbackfn, that, specificCreate) {
      var O = toObject($this);
      var self = indexedObject(O);
      var boundFunction = bindContext(callbackfn, that, 3);
      var length = toLength(self.length);
      var index = 0;
      var create = specificCreate || arraySpeciesCreate;
      var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
      var value, result;
      for (;length > index; index++) if (NO_HOLES || index in self) {
        value = self[index];
        result = boundFunction(value, index, O);
        if (TYPE) {
          if (IS_MAP) target[index] = result; // map
          else if (result) switch (TYPE) {
            case 3: return true;              // some
            case 5: return value;             // find
            case 6: return index;             // findIndex
            case 2: push.call(target, value); // filter
          } else if (IS_EVERY) return false;  // every
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
  };

  var arrayIteration = {
    // `Array.prototype.forEach` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
    forEach: createMethod$2(0),
    // `Array.prototype.map` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.map
    map: createMethod$2(1),
    // `Array.prototype.filter` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.filter
    filter: createMethod$2(2),
    // `Array.prototype.some` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.some
    some: createMethod$2(3),
    // `Array.prototype.every` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.every
    every: createMethod$2(4),
    // `Array.prototype.find` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.find
    find: createMethod$2(5),
    // `Array.prototype.findIndex` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod$2(6)
  };

  var userAgent = getBuiltIn('navigator', 'userAgent') || '';

  var process = global_1.process;
  var versions = process && process.versions;
  var v8 = versions && versions.v8;
  var match, version;

  if (v8) {
    match = v8.split('.');
    version = match[0] + match[1];
  } else if (userAgent) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }

  var v8Version = version && +version;

  var SPECIES$3 = wellKnownSymbol('species');

  var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return v8Version >= 51 || !fails(function () {
      var array = [];
      var constructor = array.constructor = {};
      constructor[SPECIES$3] = function () {
        return { foo: 1 };
      };
      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };

  var $map = arrayIteration.map;


  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  // with adding support of @@species
  _export({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('map') }, {
    map: function map(callbackfn /* , thisArg */) {
      return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // `Object.keys` method
  // https://tc39.github.io/ecma262/#sec-object.keys
  var objectKeys = Object.keys || function keys(O) {
    return objectKeysInternal(O, enumBugKeys);
  };

  var nativeAssign = Object.assign;

  // `Object.assign` method
  // https://tc39.github.io/ecma262/#sec-object.assign
  // should work with symbols and should have deterministic property order (V8 bug)
  var objectAssign = !nativeAssign || fails(function () {
    var A = {};
    var B = {};
    // eslint-disable-next-line no-undef
    var symbol = Symbol();
    var alphabet = 'abcdefghijklmnopqrst';
    A[symbol] = 7;
    alphabet.split('').forEach(function (chr) { B[chr] = chr; });
    return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
  }) ? function assign(target, source) { // eslint-disable-line no-unused-vars
    var T = toObject(target);
    var argumentsLength = arguments.length;
    var index = 1;
    var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
    var propertyIsEnumerable = objectPropertyIsEnumerable.f;
    while (argumentsLength > index) {
      var S = indexedObject(arguments[index++]);
      var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
      var length = keys.length;
      var j = 0;
      var key;
      while (length > j) {
        key = keys[j++];
        if (!descriptors || propertyIsEnumerable.call(S, key)) T[key] = S[key];
      }
    } return T;
  } : nativeAssign;

  // `Object.assign` method
  // https://tc39.github.io/ecma262/#sec-object.assign
  _export({ target: 'Object', stat: true, forced: Object.assign !== objectAssign }, {
    assign: objectAssign
  });

  var correctPrototypeGetter = !fails(function () {
    function F() { /* empty */ }
    F.prototype.constructor = null;
    return Object.getPrototypeOf(new F()) !== F.prototype;
  });

  var IE_PROTO = sharedKey('IE_PROTO');
  var ObjectPrototype = Object.prototype;

  // `Object.getPrototypeOf` method
  // https://tc39.github.io/ecma262/#sec-object.getprototypeof
  var objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function (O) {
    O = toObject(O);
    if (has(O, IE_PROTO)) return O[IE_PROTO];
    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    } return O instanceof Object ? ObjectPrototype : null;
  };

  var ITERATOR$3 = wellKnownSymbol('iterator');
  var BUGGY_SAFARI_ITERATORS = false;

  var returnThis = function () { return this; };

  // `%IteratorPrototype%` object
  // https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
  var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

  if ([].keys) {
    arrayIterator = [].keys();
    // Safari 8 has buggy iterators w/o `next`
    if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
    else {
      PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
      if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
    }
  }

  if (IteratorPrototype == undefined) IteratorPrototype = {};

  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
  if ( !has(IteratorPrototype, ITERATOR$3)) {
    createNonEnumerableProperty(IteratorPrototype, ITERATOR$3, returnThis);
  }

  var iteratorsCore = {
    IteratorPrototype: IteratorPrototype,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
  };

  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var keys = objectKeys(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) objectDefineProperty.f(O, key = keys[index++], Properties[key]);
    return O;
  };

  var html = getBuiltIn('document', 'documentElement');

  var IE_PROTO$1 = sharedKey('IE_PROTO');

  var PROTOTYPE = 'prototype';
  var Empty = function () { /* empty */ };

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var createDict = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement('iframe');
    var length = enumBugKeys.length;
    var lt = '<';
    var script = 'script';
    var gt = '>';
    var js = 'java' + script + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html.appendChild(iframe);
    iframe.src = String(js);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
    iframeDocument.close();
    createDict = iframeDocument.F;
    while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
    return createDict();
  };

  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  var objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      Empty[PROTOTYPE] = anObject(O);
      result = new Empty();
      Empty[PROTOTYPE] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO$1] = O;
    } else result = createDict();
    return Properties === undefined ? result : objectDefineProperties(result, Properties);
  };

  hiddenKeys[IE_PROTO$1] = true;

  var defineProperty = objectDefineProperty.f;



  var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');

  var setToStringTag = function (it, TAG, STATIC) {
    if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG$1)) {
      defineProperty(it, TO_STRING_TAG$1, { configurable: true, value: TAG });
    }
  };

  var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;





  var returnThis$1 = function () { return this; };

  var createIteratorConstructor = function (IteratorConstructor, NAME, next) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, { next: createPropertyDescriptor(1, next) });
    setToStringTag(IteratorConstructor, TO_STRING_TAG, false);
    iterators[TO_STRING_TAG] = returnThis$1;
    return IteratorConstructor;
  };

  var aPossiblePrototype = function (it) {
    if (!isObject(it) && it !== null) {
      throw TypeError("Can't set " + String(it) + ' as a prototype');
    } return it;
  };

  // `Object.setPrototypeOf` method
  // https://tc39.github.io/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  /* eslint-disable no-proto */
  var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;
    try {
      setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
      setter.call(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) { /* empty */ }
    return function setPrototypeOf(O, proto) {
      anObject(O);
      aPossiblePrototype(proto);
      if (CORRECT_SETTER) setter.call(O, proto);
      else O.__proto__ = proto;
      return O;
    };
  }() : undefined);

  var IteratorPrototype$2 = iteratorsCore.IteratorPrototype;
  var BUGGY_SAFARI_ITERATORS$1 = iteratorsCore.BUGGY_SAFARI_ITERATORS;
  var ITERATOR$4 = wellKnownSymbol('iterator');
  var KEYS = 'keys';
  var VALUES = 'values';
  var ENTRIES = 'entries';

  var returnThis$2 = function () { return this; };

  var defineIterator = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor(IteratorConstructor, NAME, next);

    var getIterationMethod = function (KIND) {
      if (KIND === DEFAULT && defaultIterator) return defaultIterator;
      if (!BUGGY_SAFARI_ITERATORS$1 && KIND in IterablePrototype) return IterablePrototype[KIND];
      switch (KIND) {
        case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
        case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
        case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
      } return function () { return new IteratorConstructor(this); };
    };

    var TO_STRING_TAG = NAME + ' Iterator';
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR$4]
      || IterablePrototype['@@iterator']
      || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS$1 && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY;

    // fix native
    if (anyNativeIterator) {
      CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));
      if (IteratorPrototype$2 !== Object.prototype && CurrentIteratorPrototype.next) {
        if ( objectGetPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype$2) {
          if (objectSetPrototypeOf) {
            objectSetPrototypeOf(CurrentIteratorPrototype, IteratorPrototype$2);
          } else if (typeof CurrentIteratorPrototype[ITERATOR$4] != 'function') {
            createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR$4, returnThis$2);
          }
        }
        // Set @@toStringTag to native iterators
        setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
      }
    }

    // fix Array#{values, @@iterator}.name in V8 / FF
    if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return nativeIterator.call(this); };
    }

    // define iterator
    if ( IterablePrototype[ITERATOR$4] !== defaultIterator) {
      createNonEnumerableProperty(IterablePrototype, ITERATOR$4, defaultIterator);
    }
    iterators[NAME] = defaultIterator;

    // export additional methods
    if (DEFAULT) {
      methods = {
        values: getIterationMethod(VALUES),
        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
        entries: getIterationMethod(ENTRIES)
      };
      if (FORCED) for (KEY in methods) {
        if (BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
          redefine(IterablePrototype, KEY, methods[KEY]);
        }
      } else _export({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME }, methods);
    }

    return methods;
  };

  var charAt$1 = stringMultibyte.charAt;



  var STRING_ITERATOR = 'String Iterator';
  var setInternalState = internalState.set;
  var getInternalState = internalState.getterFor(STRING_ITERATOR);

  // `String.prototype[@@iterator]` method
  // https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
  defineIterator(String, 'String', function (iterated) {
    setInternalState(this, {
      type: STRING_ITERATOR,
      string: String(iterated),
      index: 0
    });
  // `%StringIteratorPrototype%.next` method
  // https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
  }, function next() {
    var state = getInternalState(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return { value: undefined, done: true };
    point = charAt$1(string, index);
    state.index += point.length;
    return { value: point, done: false };
  });

  var max$1 = Math.max;
  var min$3 = Math.min;
  var floor$1 = Math.floor;
  var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

  var maybeToString = function (it) {
    return it === undefined ? it : String(it);
  };

  // @@replace logic
  fixRegexpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative) {
    return [
      // `String.prototype.replace` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.replace
      function replace(searchValue, replaceValue) {
        var O = requireObjectCoercible(this);
        var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
        return replacer !== undefined
          ? replacer.call(searchValue, O, replaceValue)
          : nativeReplace.call(String(O), searchValue, replaceValue);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
      function (regexp, replaceValue) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;

        var rx = anObject(regexp);
        var S = String(this);

        var functionalReplace = typeof replaceValue === 'function';
        if (!functionalReplace) replaceValue = String(replaceValue);

        var global = rx.global;
        if (global) {
          var fullUnicode = rx.unicode;
          rx.lastIndex = 0;
        }
        var results = [];
        while (true) {
          var result = regexpExecAbstract(rx, S);
          if (result === null) break;

          results.push(result);
          if (!global) break;

          var matchStr = String(result[0]);
          if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        }

        var accumulatedResult = '';
        var nextSourcePosition = 0;
        for (var i = 0; i < results.length; i++) {
          result = results[i];

          var matched = String(result[0]);
          var position = max$1(min$3(toInteger(result.index), S.length), 0);
          var captures = [];
          // NOTE: This is equivalent to
          //   captures = result.slice(1).map(maybeToString)
          // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
          // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
          // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
          for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
          var namedCaptures = result.groups;
          if (functionalReplace) {
            var replacerArgs = [matched].concat(captures, position, S);
            if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
            var replacement = String(replaceValue.apply(undefined, replacerArgs));
          } else {
            replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
          }
          if (position >= nextSourcePosition) {
            accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
            nextSourcePosition = position + matched.length;
          }
        }
        return accumulatedResult + S.slice(nextSourcePosition);
      }
    ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
    function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
      var tailPos = position + matched.length;
      var m = captures.length;
      var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
      if (namedCaptures !== undefined) {
        namedCaptures = toObject(namedCaptures);
        symbols = SUBSTITUTION_SYMBOLS;
      }
      return nativeReplace.call(replacement, symbols, function (match, ch) {
        var capture;
        switch (ch.charAt(0)) {
          case '$': return '$';
          case '&': return matched;
          case '`': return str.slice(0, position);
          case "'": return str.slice(tailPos);
          case '<':
            capture = namedCaptures[ch.slice(1, -1)];
            break;
          default: // \d\d?
            var n = +ch;
            if (n === 0) return match;
            if (n > m) {
              var f = floor$1(n / 10);
              if (f === 0) return match;
              if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
              return match;
            }
            capture = captures[n - 1];
        }
        return capture === undefined ? '' : capture;
      });
    }
  });

  // iterable DOM collections
  // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
  var domIterables = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };

  var sloppyArrayMethod = function (METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !method || !fails(function () {
      // eslint-disable-next-line no-useless-call,no-throw-literal
      method.call(null, argument || function () { throw 1; }, 1);
    });
  };

  var $forEach = arrayIteration.forEach;


  // `Array.prototype.forEach` method implementation
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  var arrayForEach = sloppyArrayMethod('forEach') ? function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  } : [].forEach;

  for (var COLLECTION_NAME in domIterables) {
    var Collection = global_1[COLLECTION_NAME];
    var CollectionPrototype = Collection && Collection.prototype;
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype && CollectionPrototype.forEach !== arrayForEach) try {
      createNonEnumerableProperty(CollectionPrototype, 'forEach', arrayForEach);
    } catch (error) {
      CollectionPrototype.forEach = arrayForEach;
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v2.1.16): ajax-load.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  var AjaxLoad = function ($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'ajaxLoad';
    var VERSION = '2.1.16';
    var DATA_KEY = 'coreui.ajaxLoad';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var ClassName = {
      ACTIVE: 'active',
      NAV_PILLS: 'nav-pills',
      NAV_TABS: 'nav-tabs',
      OPEN: 'open',
      VIEW_SCRIPT: 'view-script'
    };
    var Event = {
      CLICK: 'click'
    };
    var Selector = {
      HEAD: 'head',
      NAV_DROPDOWN: '.sidebar-nav .nav-dropdown',
      NAV_LINK: '.sidebar-nav .nav-link',
      NAV_ITEM: '.sidebar-nav .nav-item',
      VIEW_SCRIPT: '.view-script'
    };
    var Default = {
      defaultPage: 'main.html',
      errorPage: '404.html',
      subpagesDirectory: 'views/'
    };

    var AjaxLoad =
    /*#__PURE__*/
    function () {
      function AjaxLoad(element, config) {
        this._config = this._getConfig(config);
        this._element = element;
        var url = location.hash.replace(/^#/, '');

        if (url !== '') {
          this.setUpUrl(url);
        } else {
          this.setUpUrl(this._config.defaultPage);
        }

        this._removeEventListeners();

        this._addEventListeners();
      } // Getters


      var _proto = AjaxLoad.prototype;

      // Public
      _proto.loadPage = function loadPage(url) {
        var element = this._element;
        var config = this._config;

        var loadScripts = function loadScripts(src, element) {
          if (element === void 0) {
            element = 0;
          }

          var script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = src[element];
          script.className = ClassName.VIEW_SCRIPT; // eslint-disable-next-line no-multi-assign

          script.onload = script.onreadystatechange = function () {
            if (!this.readyState || this.readyState === 'complete') {
              if (src.length > element + 1) {
                loadScripts(src, element + 1);
              }
            }
          };

          var body = document.getElementsByTagName('body')[0];
          body.appendChild(script);
        };

        $.ajax({
          type: 'GET',
          url: config.subpagesDirectory + url,
          dataType: 'html',
          beforeSend: function beforeSend() {
            $(Selector.VIEW_SCRIPT).remove();
          },
          success: function success(result) {
            var wrapper = document.createElement('div');
            wrapper.innerHTML = result;
            var scripts = Array.from(wrapper.querySelectorAll('script')).map(function (script) {
              return script.attributes.getNamedItem('src').nodeValue;
            });
            wrapper.querySelectorAll('script').forEach(function (script) {
              return script.parentNode.removeChild(script);
            });
            $('body').animate({
              scrollTop: 0
            }, 0);
            $(element).html(wrapper);

            if (scripts.length) {
              loadScripts(scripts);
            }

            window.location.hash = url;
          },
          error: function error() {
            window.location.href = config.errorPage;
          }
        });
      };

      _proto.setUpUrl = function setUpUrl(url) {
        $(Selector.NAV_LINK).removeClass(ClassName.ACTIVE);
        $(Selector.NAV_DROPDOWN).removeClass(ClassName.OPEN);
        $(Selector.NAV_DROPDOWN + ":has(a[href=\"" + url.replace(/^\//, '').split('?')[0] + "\"])").addClass(ClassName.OPEN);
        $(Selector.NAV_ITEM + " a[href=\"" + url.replace(/^\//, '').split('?')[0] + "\"]").addClass(ClassName.ACTIVE);
        this.loadPage(url);
      };

      _proto.loadBlank = function loadBlank(url) {
        window.open(url);
      };

      _proto.loadTop = function loadTop(url) {
        window.location = url;
      } // Private
      ;

      _proto._getConfig = function _getConfig(config) {
        config = Object.assign({}, Default, {}, config);
        return config;
      };

      _proto._addEventListeners = function _addEventListeners() {
        var _this = this;

        $(document).on(Event.CLICK, Selector.NAV_LINK + "[href!=\"#\"]", function (event) {
          event.preventDefault();
          event.stopPropagation();

          if (event.currentTarget.target === '_top') {
            _this.loadTop(event.currentTarget.href);
          } else if (event.currentTarget.target === '_blank') {
            _this.loadBlank(event.currentTarget.href);
          } else {
            _this.setUpUrl(event.currentTarget.getAttribute('href'));
          }
        });
      };

      _proto._removeEventListeners = function _removeEventListeners() {
        $(document).off(Event.CLICK, Selector.NAV_LINK + "[href!=\"#\"]");
      } // Static
      ;

      AjaxLoad._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _config = typeof config === 'object' && config;

          if (!data) {
            data = new AjaxLoad(this, _config);
            $(this).data(DATA_KEY, data);
          }
        });
      };

      _createClass(AjaxLoad, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }]);

      return AjaxLoad;
    }();
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */


    $.fn[NAME] = AjaxLoad._jQueryInterface;
    $.fn[NAME].Constructor = AjaxLoad;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return AjaxLoad._jQueryInterface;
    };

    return AjaxLoad;
  }($);

  var SPECIES$4 = wellKnownSymbol('species');
  var nativeSlice = [].slice;
  var max$2 = Math.max;

  // `Array.prototype.slice` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.slice
  // fallback for not array-like ES3 strings and DOM objects
  _export({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('slice') }, {
    slice: function slice(start, end) {
      var O = toIndexedObject(this);
      var length = toLength(O.length);
      var k = toAbsoluteIndex(start, length);
      var fin = toAbsoluteIndex(end === undefined ? length : end, length);
      // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
      var Constructor, result, n;
      if (isArray(O)) {
        Constructor = O.constructor;
        // cross-realm fallback
        if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
          Constructor = undefined;
        } else if (isObject(Constructor)) {
          Constructor = Constructor[SPECIES$4];
          if (Constructor === null) Constructor = undefined;
        }
        if (Constructor === Array || Constructor === undefined) {
          return nativeSlice.call(O, k, fin);
        }
      }
      result = new (Constructor === undefined ? Array : Constructor)(max$2(fin - k, 0));
      for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
      result.length = n;
      return result;
    }
  });

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v2.1.16): toggle-classes.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */
  var removeClasses = function removeClasses(classNames) {
    return classNames.map(function (className) {
      return document.body.classList.contains(className);
    }).indexOf(true) !== -1;
  };

  var toggleClasses = function toggleClasses(toggleClass, classNames) {
    var breakpoint = classNames.indexOf(toggleClass);
    var newClassNames = classNames.slice(0, breakpoint + 1);

    if (removeClasses(newClassNames)) {
      newClassNames.map(function (className) {
        return document.body.classList.remove(className);
      });
    } else {
      document.body.classList.add(toggleClass);
    }
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v2.1.16): aside-menu.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  var AsideMenu = function ($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'aside-menu';
    var VERSION = '2.1.16';
    var DATA_KEY = 'coreui.aside-menu';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Event = {
      CLICK: 'click',
      LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY,
      TOGGLE: 'toggle'
    };
    var Selector = {
      BODY: 'body',
      ASIDE_MENU: '.aside-menu',
      ASIDE_MENU_TOGGLER: '.aside-menu-toggler'
    };
    var ShowClassNames = ['aside-menu-show', 'aside-menu-sm-show', 'aside-menu-md-show', 'aside-menu-lg-show', 'aside-menu-xl-show'];
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var AsideMenu =
    /*#__PURE__*/
    function () {
      function AsideMenu(element) {
        this._element = element;

        this._removeEventListeners();

        this._addEventListeners();
      } // Getters


      var _proto = AsideMenu.prototype;

      // Private
      _proto._addEventListeners = function _addEventListeners() {
        $(document).on(Event.CLICK, Selector.ASIDE_MENU_TOGGLER, function (event) {
          event.preventDefault();
          event.stopPropagation();
          var toggle = event.currentTarget.dataset ? event.currentTarget.dataset.toggle : $(event.currentTarget).data('toggle');
          toggleClasses(toggle, ShowClassNames);
        });
      };

      _proto._removeEventListeners = function _removeEventListeners() {
        $(document).off(Event.CLICK, Selector.ASIDE_MENU_TOGGLER);
      } // Static
      ;

      AsideMenu._jQueryInterface = function _jQueryInterface() {
        return this.each(function () {
          var $element = $(this);
          var data = $element.data(DATA_KEY);

          if (!data) {
            data = new AsideMenu(this);
            $element.data(DATA_KEY, data);
          }
        });
      };

      _createClass(AsideMenu, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);

      return AsideMenu;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $(window).one(Event.LOAD_DATA_API, function () {
      var asideMenu = $(Selector.ASIDE_MENU);

      AsideMenu._jQueryInterface.call(asideMenu);
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = AsideMenu._jQueryInterface;
    $.fn[NAME].Constructor = AsideMenu;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return AsideMenu._jQueryInterface;
    };

    return AsideMenu;
  }($);

  var UNSCOPABLES = wellKnownSymbol('unscopables');
  var ArrayPrototype$1 = Array.prototype;

  // Array.prototype[@@unscopables]
  // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
  if (ArrayPrototype$1[UNSCOPABLES] == undefined) {
    createNonEnumerableProperty(ArrayPrototype$1, UNSCOPABLES, objectCreate(null));
  }

  // add a key to Array.prototype[@@unscopables]
  var addToUnscopables = function (key) {
    ArrayPrototype$1[UNSCOPABLES][key] = true;
  };

  var $find = arrayIteration.find;


  var FIND = 'find';
  var SKIPS_HOLES = true;

  // Shouldn't skip holes
  if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  _export({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
    find: function find(callbackfn /* , that = undefined */) {
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables(FIND);

  // @@match logic
  fixRegexpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
    return [
      // `String.prototype.match` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.match
      function match(regexp) {
        var O = requireObjectCoercible(this);
        var matcher = regexp == undefined ? undefined : regexp[MATCH];
        return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
      },
      // `RegExp.prototype[@@match]` method
      // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
      function (regexp) {
        var res = maybeCallNative(nativeMatch, regexp, this);
        if (res.done) return res.value;

        var rx = anObject(regexp);
        var S = String(this);

        if (!rx.global) return regexpExecAbstract(rx, S);

        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
        var A = [];
        var n = 0;
        var result;
        while ((result = regexpExecAbstract(rx, S)) !== null) {
          var matchStr = String(result[0]);
          A[n] = matchStr;
          if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
          n++;
        }
        return n === 0 ? null : A;
      }
    ];
  });

  // a string of all valid unicode whitespaces
  // eslint-disable-next-line max-len
  var whitespaces = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  var whitespace = '[' + whitespaces + ']';
  var ltrim = RegExp('^' + whitespace + whitespace + '*');
  var rtrim = RegExp(whitespace + whitespace + '*$');

  // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
  var createMethod$3 = function (TYPE) {
    return function ($this) {
      var string = String(requireObjectCoercible($this));
      if (TYPE & 1) string = string.replace(ltrim, '');
      if (TYPE & 2) string = string.replace(rtrim, '');
      return string;
    };
  };

  var stringTrim = {
    // `String.prototype.{ trimLeft, trimStart }` methods
    // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
    start: createMethod$3(1),
    // `String.prototype.{ trimRight, trimEnd }` methods
    // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
    end: createMethod$3(2),
    // `String.prototype.trim` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.trim
    trim: createMethod$3(3)
  };

  var non = '\u200B\u0085\u180E';

  // check that a method works with the correct list
  // of whitespaces and has a correct name
  var forcedStringTrimMethod = function (METHOD_NAME) {
    return fails(function () {
      return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
    });
  };

  var $trim = stringTrim.trim;


  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  _export({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
    trim: function trim() {
      return $trim(this);
    }
  });

  /**
   * --------------------------------------------------------------------------
   * CoreUI Utilities (v2.1.16): get-css-custom-properties.js
   * Licensed under MIT (https://coreui.io/license)
   * @returns {string} css custom property name
   * --------------------------------------------------------------------------
   */
  var getCssCustomProperties = function getCssCustomProperties() {
    var cssCustomProperties = {};
    var sheets = document.styleSheets;
    var cssText = '';

    for (var i = sheets.length - 1; i > -1; i--) {
      var rules = sheets[i].cssRules;

      for (var j = rules.length - 1; j > -1; j--) {
        if (rules[j].selectorText === '.ie-custom-properties') {
          cssText = rules[j].cssText;
          break;
        }
      }

      if (cssText) {
        break;
      }
    }

    cssText = cssText.substring(cssText.lastIndexOf('{') + 1, cssText.lastIndexOf('}'));
    cssText.split(';').forEach(function (property) {
      if (property) {
        var name = property.split(': ')[0];
        var value = property.split(': ')[1];

        if (name && value) {
          cssCustomProperties["--" + name.trim()] = value.trim();
        }
      }
    });
    return cssCustomProperties;
  };

  var minIEVersion = 10;

  var isIE1x = function isIE1x() {
    return Boolean(document.documentMode) && document.documentMode >= minIEVersion;
  };

  var isCustomProperty = function isCustomProperty(property) {
    return property.match(/^--.*/i);
  };

  var getStyle = function getStyle(property, element) {
    if (element === void 0) {
      element = document.body;
    }

    var style;

    if (isCustomProperty(property) && isIE1x()) {
      var cssCustomProperties = getCssCustomProperties();
      style = cssCustomProperties[property];
    } else {
      style = window.getComputedStyle(element, null).getPropertyValue(property).replace(/^\s/, '');
    }

    return style;
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v2.1.16): sidebar.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  var Sidebar = function ($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'sidebar';
    var VERSION = '2.1.16';
    var DATA_KEY = 'coreui.sidebar';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Default = {
      transition: 400
    };
    var ClassName = {
      ACTIVE: 'active',
      BRAND_MINIMIZED: 'brand-minimized',
      NAV_DROPDOWN_TOGGLE: 'nav-dropdown-toggle',
      NAV_LINK_QUERIED: 'nav-link-queried',
      OPEN: 'open',
      SIDEBAR_FIXED: 'sidebar-fixed',
      SIDEBAR_MINIMIZED: 'sidebar-minimized',
      SIDEBAR_OFF_CANVAS: 'sidebar-off-canvas'
    };
    var Event = {
      CLICK: 'click',
      DESTROY: 'destroy',
      INIT: 'init',
      LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY,
      TOGGLE: 'toggle',
      UPDATE: 'update'
    };
    var Selector = {
      BODY: 'body',
      BRAND_MINIMIZER: '.brand-minimizer',
      NAV_DROPDOWN_TOGGLE: '.nav-dropdown-toggle',
      NAV_DROPDOWN_ITEMS: '.nav-dropdown-items',
      NAV_ITEM: '.nav-item',
      NAV_LINK: '.nav-link',
      NAV_LINK_QUERIED: '.nav-link-queried',
      NAVIGATION_CONTAINER: '.sidebar-nav',
      NAVIGATION: '.sidebar-nav > .nav',
      SIDEBAR: '.sidebar',
      SIDEBAR_MINIMIZER: '.sidebar-minimizer',
      SIDEBAR_TOGGLER: '.sidebar-toggler',
      SIDEBAR_SCROLL: '.sidebar-scroll'
    };
    var ShowClassNames = ['sidebar-show', 'sidebar-sm-show', 'sidebar-md-show', 'sidebar-lg-show', 'sidebar-xl-show'];
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Sidebar =
    /*#__PURE__*/
    function () {
      function Sidebar(element) {
        this._element = element;
        this.mobile = false;
        this.ps = null;
        this.perfectScrollbar(Event.INIT);
        this.setActiveLink();
        this._breakpointTest = this._breakpointTest.bind(this);
        this._clickOutListener = this._clickOutListener.bind(this);

        this._removeEventListeners();

        this._addEventListeners();

        this._addMediaQuery();
      } // Getters


      var _proto = Sidebar.prototype;

      // Public
      _proto.perfectScrollbar = function perfectScrollbar(event) {
        var _this = this;

        if (typeof PerfectScrollbar !== 'undefined') {
          var classList = document.body.classList;

          if (event === Event.INIT && !classList.contains(ClassName.SIDEBAR_MINIMIZED)) {
            this.ps = this.makeScrollbar();
          }

          if (event === Event.DESTROY) {
            this.destroyScrollbar();
          }

          if (event === Event.TOGGLE) {
            if (classList.contains(ClassName.SIDEBAR_MINIMIZED)) {
              this.destroyScrollbar();
            } else {
              this.destroyScrollbar();
              this.ps = this.makeScrollbar();
            }
          }

          if (event === Event.UPDATE && !classList.contains(ClassName.SIDEBAR_MINIMIZED)) {
            // ToDo: Add smooth transition
            setTimeout(function () {
              _this.destroyScrollbar();

              _this.ps = _this.makeScrollbar();
            }, Default.transition);
          }
        }
      };

      _proto.makeScrollbar = function makeScrollbar() {
        var container = Selector.SIDEBAR_SCROLL;

        if (document.querySelector(container) === null) {
          container = Selector.NAVIGATION_CONTAINER;

          if (document.querySelector(container) === null) {
            return null;
          }
        }

        var ps = new PerfectScrollbar(document.querySelector(container), {
          suppressScrollX: true
        }); // ToDo: find real fix for ps rtl

        ps.isRtl = false;
        return ps;
      };

      _proto.destroyScrollbar = function destroyScrollbar() {
        if (this.ps) {
          this.ps.destroy();
          this.ps = null;
        }
      };

      _proto.setActiveLink = function setActiveLink() {
        $(Selector.NAVIGATION).find(Selector.NAV_LINK).each(function (key, value) {
          var link = value;
          var cUrl;

          if (link.classList.contains(ClassName.NAV_LINK_QUERIED)) {
            cUrl = String(window.location);
          } else {
            cUrl = String(window.location).split('?')[0];
          }

          if (cUrl.substr(cUrl.length - 1) === '#') {
            cUrl = cUrl.slice(0, -1);
          }

          if ($($(link))[0].href === cUrl) {
            $(link).addClass(ClassName.ACTIVE).parents(Selector.NAV_DROPDOWN_ITEMS).add(link).each(function (key, value) {
              link = value;
              $(link).parent().addClass(ClassName.OPEN);
            });
          }
        });
      } // Private
      ;

      _proto._addMediaQuery = function _addMediaQuery() {
        var sm = getStyle('--breakpoint-sm');

        if (!sm) {
          return;
        }

        var smVal = parseInt(sm, 10) - 1;
        var mediaQueryList = window.matchMedia("(max-width: " + smVal + "px)");

        this._breakpointTest(mediaQueryList);

        mediaQueryList.addListener(this._breakpointTest);
      };

      _proto._breakpointTest = function _breakpointTest(e) {
        this.mobile = Boolean(e.matches);

        this._toggleClickOut();
      };

      _proto._clickOutListener = function _clickOutListener(event) {
        if (!this._element.contains(event.target)) {
          // or use: event.target.closest(Selector.SIDEBAR) === null
          event.preventDefault();
          event.stopPropagation();

          this._removeClickOut();

          document.body.classList.remove('sidebar-show');
        }
      };

      _proto._addClickOut = function _addClickOut() {
        document.addEventListener(Event.CLICK, this._clickOutListener, true);
      };

      _proto._removeClickOut = function _removeClickOut() {
        document.removeEventListener(Event.CLICK, this._clickOutListener, true);
      };

      _proto._toggleClickOut = function _toggleClickOut() {
        if (this.mobile && document.body.classList.contains('sidebar-show')) {
          document.body.classList.remove('aside-menu-show');

          this._addClickOut();
        } else {
          this._removeClickOut();
        }
      };

      _proto._addEventListeners = function _addEventListeners() {
        var _this2 = this;

        $(document).on(Event.CLICK, Selector.BRAND_MINIMIZER, function (event) {
          event.preventDefault();
          event.stopPropagation();
          $(Selector.BODY).toggleClass(ClassName.BRAND_MINIMIZED);
        });
        $(document).on(Event.CLICK, Selector.NAV_DROPDOWN_TOGGLE, function (event) {
          event.preventDefault();
          event.stopPropagation();
          var dropdown = event.target;
          $(dropdown).parent().toggleClass(ClassName.OPEN);

          _this2.perfectScrollbar(Event.UPDATE);
        });
        $(document).on(Event.CLICK, Selector.SIDEBAR_MINIMIZER, function (event) {
          event.preventDefault();
          event.stopPropagation();
          $(Selector.BODY).toggleClass(ClassName.SIDEBAR_MINIMIZED);

          _this2.perfectScrollbar(Event.TOGGLE);
        });
        $(document).on(Event.CLICK, Selector.SIDEBAR_TOGGLER, function (event) {
          event.preventDefault();
          event.stopPropagation();
          var toggle = event.currentTarget.dataset ? event.currentTarget.dataset.toggle : $(event.currentTarget).data('toggle');
          toggleClasses(toggle, ShowClassNames);

          _this2._toggleClickOut();
        });
        $(Selector.NAVIGATION + " > " + Selector.NAV_ITEM + " " + Selector.NAV_LINK + ":not(" + Selector.NAV_DROPDOWN_TOGGLE + ")").on(Event.CLICK, function () {
          _this2._removeClickOut();

          document.body.classList.remove('sidebar-show');
        });
      };

      _proto._removeEventListeners = function _removeEventListeners() {
        $(document).off(Event.CLICK, Selector.BRAND_MINIMIZER);
        $(document).off(Event.CLICK, Selector.NAV_DROPDOWN_TOGGLE);
        $(document).off(Event.CLICK, Selector.SIDEBAR_MINIMIZER);
        $(document).off(Event.CLICK, Selector.SIDEBAR_TOGGLER);
        $(Selector.NAVIGATION + " > " + Selector.NAV_ITEM + " " + Selector.NAV_LINK + ":not(" + Selector.NAV_DROPDOWN_TOGGLE + ")").off(Event.CLICK);
      } // Static
      ;

      Sidebar._jQueryInterface = function _jQueryInterface() {
        return this.each(function () {
          var $element = $(this);
          var data = $element.data(DATA_KEY);

          if (!data) {
            data = new Sidebar(this);
            $element.data(DATA_KEY, data);
          }
        });
      };

      _createClass(Sidebar, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);

      return Sidebar;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $(window).one(Event.LOAD_DATA_API, function () {
      var sidebar = $(Selector.SIDEBAR);

      Sidebar._jQueryInterface.call(sidebar);
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Sidebar._jQueryInterface;
    $.fn[NAME].Constructor = Sidebar;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Sidebar._jQueryInterface;
    };

    return Sidebar;
  }($);

  /**
   * --------------------------------------------------------------------------
   * CoreUI Utilities (v2.1.16): hex-to-rgb.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  /* eslint-disable no-magic-numbers */
  var hexToRgb = function hexToRgb(color) {
    if (typeof color === 'undefined') {
      throw new Error('Hex color is not defined');
    }

    var hex = color.match(/^#(?:[0-9a-f]{3}){1,2}$/i);

    if (!hex) {
      throw new Error(color + " is not a valid hex color");
    }

    var r;
    var g;
    var b;

    if (color.length === 7) {
      r = parseInt(color.substring(1, 3), 16);
      g = parseInt(color.substring(3, 5), 16);
      b = parseInt(color.substring(5, 7), 16);
    } else {
      r = parseInt(color.substring(1, 2), 16);
      g = parseInt(color.substring(2, 3), 16);
      b = parseInt(color.substring(3, 5), 16);
    }

    return "rgba(" + r + ", " + g + ", " + b + ")";
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI Utilities (v2.1.16): hex-to-rgba.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  /* eslint-disable no-magic-numbers */
  var hexToRgba = function hexToRgba(color, opacity) {
    if (opacity === void 0) {
      opacity = 100;
    }

    if (typeof color === 'undefined') {
      throw new Error('Hex color is not defined');
    }

    var hex = color.match(/^#(?:[0-9a-f]{3}){1,2}$/i);

    if (!hex) {
      throw new Error(color + " is not a valid hex color");
    }

    var r;
    var g;
    var b;

    if (color.length === 7) {
      r = parseInt(color.substring(1, 3), 16);
      g = parseInt(color.substring(3, 5), 16);
      b = parseInt(color.substring(5, 7), 16);
    } else {
      r = parseInt(color.substring(1, 2), 16);
      g = parseInt(color.substring(2, 3), 16);
      b = parseInt(color.substring(3, 5), 16);
    }

    return "rgba(" + r + ", " + g + ", " + b + ", " + opacity / 100 + ")";
  };

  var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');
  var test = {};

  test[TO_STRING_TAG$2] = 'z';

  // `Object.prototype.toString` method implementation
  // https://tc39.github.io/ecma262/#sec-object.prototype.tostring
  var objectToString = String(test) !== '[object z]' ? function toString() {
    return '[object ' + classof(this) + ']';
  } : test.toString;

  var ObjectPrototype$1 = Object.prototype;

  // `Object.prototype.toString` method
  // https://tc39.github.io/ecma262/#sec-object.prototype.tostring
  if (objectToString !== ObjectPrototype$1.toString) {
    redefine(ObjectPrototype$1, 'toString', objectToString, { unsafe: true });
  }

  var TO_STRING = 'toString';
  var RegExpPrototype = RegExp.prototype;
  var nativeToString = RegExpPrototype[TO_STRING];

  var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
  // FF44- RegExp#toString has a wrong name
  var INCORRECT_NAME = nativeToString.name != TO_STRING;

  // `RegExp.prototype.toString` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
  if (NOT_GENERIC || INCORRECT_NAME) {
    redefine(RegExp.prototype, TO_STRING, function toString() {
      var R = anObject(this);
      var p = String(R.source);
      var rf = R.flags;
      var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? regexpFlags.call(R) : rf);
      return '/' + p + '/' + f;
    }, { unsafe: true });
  }

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v2.1.16): rgb-to-hex.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  /* eslint-disable no-magic-numbers */
  var rgbToHex = function rgbToHex(color) {
    if (typeof color === 'undefined') {
      throw new Error('Hex color is not defined');
    }

    if (color === 'transparent') {
      return '#00000000';
    }

    var rgb = color.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);

    if (!rgb) {
      throw new Error(color + " is not a valid rgb color");
    }

    var r = "0" + parseInt(rgb[1], 10).toString(16);
    var g = "0" + parseInt(rgb[2], 10).toString(16);
    var b = "0" + parseInt(rgb[3], 10).toString(16);
    return "#" + r.slice(-2) + g.slice(-2) + b.slice(-2);
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v2.1.16): index.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  (function ($) {
    if (typeof $ === 'undefined') {
      throw new TypeError('CoreUI\'s JavaScript requires jQuery. jQuery must be included before CoreUI\'s JavaScript.');
    }

    var version = $.fn.jquery.split(' ')[0].split('.');
    var minMajor = 1;
    var ltMajor = 2;
    var minMinor = 9;
    var minPatch = 1;
    var maxMajor = 4;

    if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
      throw new Error('CoreUI\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
    }
  })($);
  window.getStyle = getStyle;
  window.hexToRgb = hexToRgb;
  window.hexToRgba = hexToRgba;
  window.rgbToHex = rgbToHex;

  exports.AjaxLoad = AjaxLoad;
  exports.AsideMenu = AsideMenu;
  exports.Sidebar = Sidebar;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=coreui.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/bootstrap-switch/dist/js/bootstrap-switch.js":
/*!*******************************************************************!*\
  !*** ./node_modules/bootstrap-switch/dist/js/bootstrap-switch.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
  * bootstrap-switch - Turn checkboxes and radio buttons into toggle switches.
  *
  * @version v3.4.0
  * @homepage https://bttstrp.github.io/bootstrap-switch
  * @author Mattia Larentis <mattia@larentis.eu> (http://larentis.eu)
  * @license MIT
  */

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var $ = _jquery2.default || window.jQuery || window.$;

  function getClasses(options, id) {
    var state = options.state,
        size = options.size,
        disabled = options.disabled,
        readonly = options.readonly,
        indeterminate = options.indeterminate,
        inverse = options.inverse;

    return [state ? 'on' : 'off', size, disabled ? 'disabled' : undefined, readonly ? 'readonly' : undefined, indeterminate ? 'indeterminate' : undefined, inverse ? 'inverse' : undefined, id ? 'id-' + id : undefined].filter(function (v) {
      return v == null;
    });
  }

  function prvgetElementOptions() {
    return {
      state: this.$element.is(':checked'),
      size: this.$element.data('size'),
      animate: this.$element.data('animate'),
      disabled: this.$element.is(':disabled'),
      readonly: this.$element.is('[readonly]'),
      indeterminate: this.$element.data('indeterminate'),
      inverse: this.$element.data('inverse'),
      radioAllOff: this.$element.data('radio-all-off'),
      onColor: this.$element.data('on-color'),
      offColor: this.$element.data('off-color'),
      onText: this.$element.data('on-text'),
      offText: this.$element.data('off-text'),
      labelText: this.$element.data('label-text'),
      handleWidth: this.$element.data('handle-width'),
      labelWidth: this.$element.data('label-width'),
      baseClass: this.$element.data('base-class'),
      wrapperClass: this.$element.data('wrapper-class')
    };
  }

  function prvwidth() {
    var _this = this;

    var $handles = this.$on.add(this.$off).add(this.$label).css('width', '');
    var handleWidth = this.options.handleWidth === 'auto' ? Math.round(Math.max(this.$on.width(), this.$off.width())) : this.options.handleWidth;
    $handles.width(handleWidth);
    this.$label.width(function (index, width) {
      if (_this.options.labelWidth !== 'auto') {
        return _this.options.labelWidth;
      }
      if (width < handleWidth) {
        return handleWidth;
      }
      return width;
    });
    this.privateHandleWidth = this.$on.outerWidth();
    this.privateLabelWidth = this.$label.outerWidth();
    this.$container.width(this.privateHandleWidth * 2 + this.privateLabelWidth);
    return this.$wrapper.width(this.privateHandleWidth + this.privateLabelWidth);
  }

  function prvcontainerPosition() {
    var _this2 = this;

    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.ope;

    this.$container.css('margin-left', function () {
      var values = [0, '-' + _this2.privateHandleWidth + 'px'];
      if (_this2.options.indeterminate) {
        return '-' + _this2.privateHandleWidth / 2 + 'px';
      }
      if (state) {
        if (_this2.options.inverse) {
          return values[1];
        }
        return values[0];
      }
      if (_this2.options.inverse) {
        return values[0];
      }
      return values[1];
    });
  }

  function prvgetClass(name) {
    return this.options.baseClass + '-' + name;
  }

  function prvinit() {
    var _this3 = this;

    var init = function init() {
      _this3.setPrevOptions();
      prvwidth.call(_this3);
      prvcontainerPosition.call(_this3);
      setTimeout(function () {
        return _this3.options.animate && _this3.$wrapper.addClass(prvgetClass.call(_this3, 'animate'));
      }, 50);
    };
    if (this.$wrapper.is(':visible')) {
      init();
      return;
    }
    var initInterval = window.setInterval(function () {
      return _this3.$wrapper.is(':visible') && (init() || true) && window.clearInterval(initInterval);
    }, 50);
  }

  function prvelementHandlers() {
    var _this4 = this;

    return this.$element.on({
      'setPreviousOptions.bootstrapSwitch': function setPreviousOptionsBootstrapSwitch() {
        return _this4.setPrevOptions();
      },

      'previousState.bootstrapSwitch': function previousStateBootstrapSwitch() {
        _this4.options = _this4.prevOptions;
        if (_this4.options.indeterminate) {
          _this4.$wrapper.addClass(prvgetClass.call(_this4, 'indeterminate'));
        }
        _this4.$element.prop('checked', _this4.options.state).trigger('change.bootstrapSwitch', true);
      },

      'change.bootstrapSwitch': function changeBootstrapSwitch(event, skip) {
        event.preventDefault();
        event.stopImmediatePropagation();
        var state = _this4.$element.is(':checked');
        prvcontainerPosition.call(_this4, state);
        if (state === _this4.options.state) {
          return;
        }
        _this4.options.state = state;
        _this4.$wrapper.toggleClass(prvgetClass.call(_this4, 'off')).toggleClass(prvgetClass.call(_this4, 'on'));
        if (!skip) {
          if (_this4.$element.is(':radio')) {
            $('[name="' + _this4.$element.attr('name') + '"]').not(_this4.$element).prop('checked', false).trigger('change.bootstrapSwitch', true);
          }
          _this4.$element.trigger('switchChange.bootstrapSwitch', [state]);
        }
      },

      'focus.bootstrapSwitch': function focusBootstrapSwitch(event) {
        event.preventDefault();
        _this4.$wrapper.addClass(prvgetClass.call(_this4, 'focused'));
      },

      'blur.bootstrapSwitch': function blurBootstrapSwitch(event) {
        event.preventDefault();
        _this4.$wrapper.removeClass(prvgetClass.call(_this4, 'focused'));
      },

      'keydown.bootstrapSwitch': function keydownBootstrapSwitch(event) {
        if (!event.which || _this4.options.disabled || _this4.options.readonly) {
          return;
        }
        if (event.which === 37 || event.which === 39) {
          event.preventDefault();
          event.stopImmediatePropagation();
          _this4.state(event.which === 39);
        }
      }
    });
  }

  function prvhandleHandlers() {
    var _this5 = this;

    this.$on.on('click.bootstrapSwitch', function (event) {
      event.preventDefault();
      event.stopPropagation();
      _this5.state(false);
      return _this5.$element.trigger('focus.bootstrapSwitch');
    });
    return this.$off.on('click.bootstrapSwitch', function (event) {
      event.preventDefault();
      event.stopPropagation();
      _this5.state(true);
      return _this5.$element.trigger('focus.bootstrapSwitch');
    });
  }

  function prvlabelHandlers() {
    var _this6 = this;

    var dragStart = void 0;
    var dragEnd = void 0;
    var handlers = {
      click: function click(event) {
        event.stopPropagation();
      },


      'mousedown.bootstrapSwitch touchstart.bootstrapSwitch': function mousedownBootstrapSwitchTouchstartBootstrapSwitch(event) {
        if (dragStart || _this6.options.disabled || _this6.options.readonly) {
          return;
        }
        event.preventDefault();
        event.stopPropagation();
        dragStart = (event.pageX || event.originalEvent.touches[0].pageX) - parseInt(_this6.$container.css('margin-left'), 10);
        if (_this6.options.animate) {
          _this6.$wrapper.removeClass(prvgetClass.call(_this6, 'animate'));
        }
        _this6.$element.trigger('focus.bootstrapSwitch');
      },

      'mousemove.bootstrapSwitch touchmove.bootstrapSwitch': function mousemoveBootstrapSwitchTouchmoveBootstrapSwitch(event) {
        if (dragStart == null) {
          return;
        }
        var difference = (event.pageX || event.originalEvent.touches[0].pageX) - dragStart;
        event.preventDefault();
        if (difference < -_this6.privateHandleWidth || difference > 0) {
          return;
        }
        dragEnd = difference;
        _this6.$container.css('margin-left', dragEnd + 'px');
      },

      'mouseup.bootstrapSwitch touchend.bootstrapSwitch': function mouseupBootstrapSwitchTouchendBootstrapSwitch(event) {
        if (!dragStart) {
          return;
        }
        event.preventDefault();
        if (_this6.options.animate) {
          _this6.$wrapper.addClass(prvgetClass.call(_this6, 'animate'));
        }
        if (dragEnd) {
          var state = dragEnd > -(_this6.privateHandleWidth / 2);
          dragEnd = false;
          _this6.state(_this6.options.inverse ? !state : state);
        } else {
          _this6.state(!_this6.options.state);
        }
        dragStart = false;
      },

      'mouseleave.bootstrapSwitch': function mouseleaveBootstrapSwitch() {
        _this6.$label.trigger('mouseup.bootstrapSwitch');
      }
    };
    this.$label.on(handlers);
  }

  function prvexternalLabelHandler() {
    var _this7 = this;

    var $externalLabel = this.$element.closest('label');
    $externalLabel.on('click', function (event) {
      event.preventDefault();
      event.stopImmediatePropagation();
      if (event.target === $externalLabel[0]) {
        _this7.toggleState();
      }
    });
  }

  function prvformHandler() {
    function isBootstrapSwitch() {
      return $(this).data('bootstrap-switch');
    }

    function performReset() {
      return $(this).bootstrapSwitch('state', this.checked);
    }

    var $form = this.$element.closest('form');
    if ($form.data('bootstrap-switch')) {
      return;
    }
    $form.on('reset.bootstrapSwitch', function () {
      window.setTimeout(function () {
        $form.find('input').filter(isBootstrapSwitch).each(performReset);
      }, 1);
    }).data('bootstrap-switch', true);
  }

  function prvgetClasses(classes) {
    var _this8 = this;

    if (!$.isArray(classes)) {
      return [prvgetClass.call(this, classes)];
    }
    return classes.map(function (v) {
      return prvgetClass.call(_this8, v);
    });
  }

  var BootstrapSwitch = function () {
    function BootstrapSwitch(element) {
      var _this9 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, BootstrapSwitch);

      this.$element = $(element);
      this.options = $.extend({}, $.fn.bootstrapSwitch.defaults, prvgetElementOptions.call(this), options);
      this.prevOptions = {};
      this.$wrapper = $('<div>', {
        class: function _class() {
          return getClasses(_this9.options, _this9.$element.attr('id')).map(function (v) {
            return prvgetClass.call(_this9, v);
          }).concat([_this9.options.baseClass], prvgetClasses.call(_this9, _this9.options.wrapperClass)).join(' ');
        }
      });
      this.$container = $('<div>', { class: prvgetClass.call(this, 'container') });
      this.$on = $('<span>', {
        html: this.options.onText,
        class: prvgetClass.call(this, 'handle-on') + ' ' + prvgetClass.call(this, this.options.onColor)
      });
      this.$off = $('<span>', {
        html: this.options.offText,
        class: prvgetClass.call(this, 'handle-off') + ' ' + prvgetClass.call(this, this.options.offColor)
      });
      this.$label = $('<span>', {
        html: this.options.labelText,
        class: prvgetClass.call(this, 'label')
      });

      this.$element.on('init.bootstrapSwitch', function () {
        return _this9.options.onInit(element);
      });
      this.$element.on('switchChange.bootstrapSwitch', function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var changeState = _this9.options.onSwitchChange.apply(element, args);
        if (changeState === false) {
          if (_this9.$element.is(':radio')) {
            $('[name="' + _this9.$element.attr('name') + '"]').trigger('previousState.bootstrapSwitch', true);
          } else {
            _this9.$element.trigger('previousState.bootstrapSwitch', true);
          }
        }
      });

      this.$container = this.$element.wrap(this.$container).parent();
      this.$wrapper = this.$container.wrap(this.$wrapper).parent();
      this.$element.before(this.options.inverse ? this.$off : this.$on).before(this.$label).before(this.options.inverse ? this.$on : this.$off);

      if (this.options.indeterminate) {
        this.$element.prop('indeterminate', true);
      }

      prvinit.call(this);
      prvelementHandlers.call(this);
      prvhandleHandlers.call(this);
      prvlabelHandlers.call(this);
      prvformHandler.call(this);
      prvexternalLabelHandler.call(this);
      this.$element.trigger('init.bootstrapSwitch', this.options.state);
    }

    _createClass(BootstrapSwitch, [{
      key: 'setPrevOptions',
      value: function setPrevOptions() {
        this.prevOptions = _extends({}, this.options);
      }
    }, {
      key: 'state',
      value: function state(value, skip) {
        if (typeof value === 'undefined') {
          return this.options.state;
        }
        if (this.options.disabled || this.options.readonly || this.options.state && !this.options.radioAllOff && this.$element.is(':radio')) {
          return this.$element;
        }
        if (this.$element.is(':radio')) {
          $('[name="' + this.$element.attr('name') + '"]').trigger('setPreviousOptions.bootstrapSwitch');
        } else {
          this.$element.trigger('setPreviousOptions.bootstrapSwitch');
        }
        if (this.options.indeterminate) {
          this.indeterminate(false);
        }
        this.$element.prop('checked', Boolean(value)).trigger('change.bootstrapSwitch', skip);
        return this.$element;
      }
    }, {
      key: 'toggleState',
      value: function toggleState(skip) {
        if (this.options.disabled || this.options.readonly) {
          return this.$element;
        }
        if (this.options.indeterminate) {
          this.indeterminate(false);
          return this.state(true);
        }
        return this.$element.prop('checked', !this.options.state).trigger('change.bootstrapSwitch', skip);
      }
    }, {
      key: 'size',
      value: function size(value) {
        if (typeof value === 'undefined') {
          return this.options.size;
        }
        if (this.options.size != null) {
          this.$wrapper.removeClass(prvgetClass.call(this, this.options.size));
        }
        if (value) {
          this.$wrapper.addClass(prvgetClass.call(this, value));
        }
        prvwidth.call(this);
        prvcontainerPosition.call(this);
        this.options.size = value;
        return this.$element;
      }
    }, {
      key: 'animate',
      value: function animate(value) {
        if (typeof value === 'undefined') {
          return this.options.animate;
        }
        if (this.options.animate === Boolean(value)) {
          return this.$element;
        }
        return this.toggleAnimate();
      }
    }, {
      key: 'toggleAnimate',
      value: function toggleAnimate() {
        this.options.animate = !this.options.animate;
        this.$wrapper.toggleClass(prvgetClass.call(this, 'animate'));
        return this.$element;
      }
    }, {
      key: 'disabled',
      value: function disabled(value) {
        if (typeof value === 'undefined') {
          return this.options.disabled;
        }
        if (this.options.disabled === Boolean(value)) {
          return this.$element;
        }
        return this.toggleDisabled();
      }
    }, {
      key: 'toggleDisabled',
      value: function toggleDisabled() {
        this.options.disabled = !this.options.disabled;
        this.$element.prop('disabled', this.options.disabled);
        this.$wrapper.toggleClass(prvgetClass.call(this, 'disabled'));
        return this.$element;
      }
    }, {
      key: 'readonly',
      value: function readonly(value) {
        if (typeof value === 'undefined') {
          return this.options.readonly;
        }
        if (this.options.readonly === Boolean(value)) {
          return this.$element;
        }
        return this.toggleReadonly();
      }
    }, {
      key: 'toggleReadonly',
      value: function toggleReadonly() {
        this.options.readonly = !this.options.readonly;
        this.$element.prop('readonly', this.options.readonly);
        this.$wrapper.toggleClass(prvgetClass.call(this, 'readonly'));
        return this.$element;
      }
    }, {
      key: 'indeterminate',
      value: function indeterminate(value) {
        if (typeof value === 'undefined') {
          return this.options.indeterminate;
        }
        if (this.options.indeterminate === Boolean(value)) {
          return this.$element;
        }
        return this.toggleIndeterminate();
      }
    }, {
      key: 'toggleIndeterminate',
      value: function toggleIndeterminate() {
        this.options.indeterminate = !this.options.indeterminate;
        this.$element.prop('indeterminate', this.options.indeterminate);
        this.$wrapper.toggleClass(prvgetClass.call(this, 'indeterminate'));
        prvcontainerPosition.call(this);
        return this.$element;
      }
    }, {
      key: 'inverse',
      value: function inverse(value) {
        if (typeof value === 'undefined') {
          return this.options.inverse;
        }
        if (this.options.inverse === Boolean(value)) {
          return this.$element;
        }
        return this.toggleInverse();
      }
    }, {
      key: 'toggleInverse',
      value: function toggleInverse() {
        this.$wrapper.toggleClass(prvgetClass.call(this, 'inverse'));
        var $on = this.$on.clone(true);
        var $off = this.$off.clone(true);
        this.$on.replaceWith($off);
        this.$off.replaceWith($on);
        this.$on = $off;
        this.$off = $on;
        this.options.inverse = !this.options.inverse;
        return this.$element;
      }
    }, {
      key: 'onColor',
      value: function onColor(value) {
        if (typeof value === 'undefined') {
          return this.options.onColor;
        }
        if (this.options.onColor) {
          this.$on.removeClass(prvgetClass.call(this, this.options.onColor));
        }
        this.$on.addClass(prvgetClass.call(this, value));
        this.options.onColor = value;
        return this.$element;
      }
    }, {
      key: 'offColor',
      value: function offColor(value) {
        if (typeof value === 'undefined') {
          return this.options.offColor;
        }
        if (this.options.offColor) {
          this.$off.removeClass(prvgetClass.call(this, this.options.offColor));
        }
        this.$off.addClass(prvgetClass.call(this, value));
        this.options.offColor = value;
        return this.$element;
      }
    }, {
      key: 'onText',
      value: function onText(value) {
        if (typeof value === 'undefined') {
          return this.options.onText;
        }
        this.$on.html(value);
        prvwidth.call(this);
        prvcontainerPosition.call(this);
        this.options.onText = value;
        return this.$element;
      }
    }, {
      key: 'offText',
      value: function offText(value) {
        if (typeof value === 'undefined') {
          return this.options.offText;
        }
        this.$off.html(value);
        prvwidth.call(this);
        prvcontainerPosition.call(this);
        this.options.offText = value;
        return this.$element;
      }
    }, {
      key: 'labelText',
      value: function labelText(value) {
        if (typeof value === 'undefined') {
          return this.options.labelText;
        }
        this.$label.html(value);
        prvwidth.call(this);
        this.options.labelText = value;
        return this.$element;
      }
    }, {
      key: 'handleWidth',
      value: function handleWidth(value) {
        if (typeof value === 'undefined') {
          return this.options.handleWidth;
        }
        this.options.handleWidth = value;
        prvwidth.call(this);
        prvcontainerPosition.call(this);
        return this.$element;
      }
    }, {
      key: 'labelWidth',
      value: function labelWidth(value) {
        if (typeof value === 'undefined') {
          return this.options.labelWidth;
        }
        this.options.labelWidth = value;
        prvwidth.call(this);
        prvcontainerPosition.call(this);
        return this.$element;
      }
    }, {
      key: 'baseClass',
      value: function baseClass() {
        return this.options.baseClass;
      }
    }, {
      key: 'wrapperClass',
      value: function wrapperClass(value) {
        if (typeof value === 'undefined') {
          return this.options.wrapperClass;
        }
        var wrapperClass = value || $.fn.bootstrapSwitch.defaults.wrapperClass;
        this.$wrapper.removeClass(prvgetClasses.call(this, this.options.wrapperClass).join(' '));
        this.$wrapper.addClass(prvgetClasses.call(this, wrapperClass).join(' '));
        this.options.wrapperClass = wrapperClass;
        return this.$element;
      }
    }, {
      key: 'radioAllOff',
      value: function radioAllOff(value) {
        if (typeof value === 'undefined') {
          return this.options.radioAllOff;
        }
        var val = Boolean(value);
        if (this.options.radioAllOff === val) {
          return this.$element;
        }
        this.options.radioAllOff = val;
        return this.$element;
      }
    }, {
      key: 'onInit',
      value: function onInit(value) {
        if (typeof value === 'undefined') {
          return this.options.onInit;
        }
        this.options.onInit = value || $.fn.bootstrapSwitch.defaults.onInit;
        return this.$element;
      }
    }, {
      key: 'onSwitchChange',
      value: function onSwitchChange(value) {
        if (typeof value === 'undefined') {
          return this.options.onSwitchChange;
        }
        this.options.onSwitchChange = value || $.fn.bootstrapSwitch.defaults.onSwitchChange;
        return this.$element;
      }
    }, {
      key: 'destroy',
      value: function destroy() {
        var $form = this.$element.closest('form');
        if ($form.length) {
          $form.off('reset.bootstrapSwitch').removeData('bootstrap-switch');
        }
        this.$container.children().not(this.$element).remove();
        this.$element.unwrap().unwrap().off('.bootstrapSwitch').removeData('bootstrap-switch');
        return this.$element;
      }
    }]);

    return BootstrapSwitch;
  }();

  function bootstrapSwitch(option) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    function reducer(ret, next) {
      var $this = $(next);
      var existingData = $this.data('bootstrap-switch');
      var data = existingData || new BootstrapSwitch(next, option);
      if (!existingData) {
        $this.data('bootstrap-switch', data);
      }
      if (typeof option === 'string') {
        return data[option].apply(data, args);
      }
      return ret;
    }
    return Array.prototype.reduce.call(this, reducer, this);
  }

  $.fn.bootstrapSwitch = bootstrapSwitch;
  $.fn.bootstrapSwitch.Constructor = BootstrapSwitch;
  $.fn.bootstrapSwitch.defaults = {
    state: true,
    size: null,
    animate: true,
    disabled: false,
    readonly: false,
    indeterminate: false,
    inverse: false,
    radioAllOff: false,
    onColor: 'primary',
    offColor: 'default',
    onText: 'ON',
    offText: 'OFF',
    labelText: '&nbsp',
    handleWidth: 'auto',
    labelWidth: 'auto',
    baseClass: 'bootstrap-switch',
    wrapperClass: 'wrapper',
    onInit: function onInit() {},
    onSwitchChange: function onSwitchChange() {}
  };
});


/***/ }),

/***/ "./node_modules/pace/pace.js":
/*!***********************************!*\
  !*** ./node_modules/pace/pace.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function() {
  var AjaxMonitor, Bar, DocumentMonitor, ElementMonitor, ElementTracker, EventLagMonitor, Evented, Events, NoTargetError, Pace, RequestIntercept, SOURCE_KEYS, Scaler, SocketRequestTracker, XHRRequestTracker, animation, avgAmplitude, bar, cancelAnimation, cancelAnimationFrame, defaultOptions, extend, extendNative, getFromDOM, getIntercept, handlePushState, ignoreStack, init, now, options, requestAnimationFrame, result, runAnimation, scalers, shouldIgnoreURL, shouldTrack, source, sources, uniScaler, _WebSocket, _XDomainRequest, _XMLHttpRequest, _i, _intercept, _len, _pushState, _ref, _ref1, _replaceState,
    __slice = [].slice,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  defaultOptions = {
    catchupTime: 100,
    initialRate: .03,
    minTime: 250,
    ghostTime: 100,
    maxProgressPerFrame: 20,
    easeFactor: 1.25,
    startOnPageLoad: true,
    restartOnPushState: true,
    restartOnRequestAfter: 500,
    target: 'body',
    elements: {
      checkInterval: 100,
      selectors: ['body']
    },
    eventLag: {
      minSamples: 10,
      sampleCount: 3,
      lagThreshold: 3
    },
    ajax: {
      trackMethods: ['GET'],
      trackWebSockets: true,
      ignoreURLs: []
    }
  };

  now = function() {
    var _ref;
    return (_ref = typeof performance !== "undefined" && performance !== null ? typeof performance.now === "function" ? performance.now() : void 0 : void 0) != null ? _ref : +(new Date);
  };

  requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

  cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

  if (requestAnimationFrame == null) {
    requestAnimationFrame = function(fn) {
      return setTimeout(fn, 50);
    };
    cancelAnimationFrame = function(id) {
      return clearTimeout(id);
    };
  }

  runAnimation = function(fn) {
    var last, tick;
    last = now();
    tick = function() {
      var diff;
      diff = now() - last;
      if (diff >= 33) {
        last = now();
        return fn(diff, function() {
          return requestAnimationFrame(tick);
        });
      } else {
        return setTimeout(tick, 33 - diff);
      }
    };
    return tick();
  };

  result = function() {
    var args, key, obj;
    obj = arguments[0], key = arguments[1], args = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
    if (typeof obj[key] === 'function') {
      return obj[key].apply(obj, args);
    } else {
      return obj[key];
    }
  };

  extend = function() {
    var key, out, source, sources, val, _i, _len;
    out = arguments[0], sources = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    for (_i = 0, _len = sources.length; _i < _len; _i++) {
      source = sources[_i];
      if (source) {
        for (key in source) {
          if (!__hasProp.call(source, key)) continue;
          val = source[key];
          if ((out[key] != null) && typeof out[key] === 'object' && (val != null) && typeof val === 'object') {
            extend(out[key], val);
          } else {
            out[key] = val;
          }
        }
      }
    }
    return out;
  };

  avgAmplitude = function(arr) {
    var count, sum, v, _i, _len;
    sum = count = 0;
    for (_i = 0, _len = arr.length; _i < _len; _i++) {
      v = arr[_i];
      sum += Math.abs(v);
      count++;
    }
    return sum / count;
  };

  getFromDOM = function(key, json) {
    var data, e, el;
    if (key == null) {
      key = 'options';
    }
    if (json == null) {
      json = true;
    }
    el = document.querySelector("[data-pace-" + key + "]");
    if (!el) {
      return;
    }
    data = el.getAttribute("data-pace-" + key);
    if (!json) {
      return data;
    }
    try {
      return JSON.parse(data);
    } catch (_error) {
      e = _error;
      return typeof console !== "undefined" && console !== null ? console.error("Error parsing inline pace options", e) : void 0;
    }
  };

  Evented = (function() {
    function Evented() {}

    Evented.prototype.on = function(event, handler, ctx, once) {
      var _base;
      if (once == null) {
        once = false;
      }
      if (this.bindings == null) {
        this.bindings = {};
      }
      if ((_base = this.bindings)[event] == null) {
        _base[event] = [];
      }
      return this.bindings[event].push({
        handler: handler,
        ctx: ctx,
        once: once
      });
    };

    Evented.prototype.once = function(event, handler, ctx) {
      return this.on(event, handler, ctx, true);
    };

    Evented.prototype.off = function(event, handler) {
      var i, _ref, _results;
      if (((_ref = this.bindings) != null ? _ref[event] : void 0) == null) {
        return;
      }
      if (handler == null) {
        return delete this.bindings[event];
      } else {
        i = 0;
        _results = [];
        while (i < this.bindings[event].length) {
          if (this.bindings[event][i].handler === handler) {
            _results.push(this.bindings[event].splice(i, 1));
          } else {
            _results.push(i++);
          }
        }
        return _results;
      }
    };

    Evented.prototype.trigger = function() {
      var args, ctx, event, handler, i, once, _ref, _ref1, _results;
      event = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if ((_ref = this.bindings) != null ? _ref[event] : void 0) {
        i = 0;
        _results = [];
        while (i < this.bindings[event].length) {
          _ref1 = this.bindings[event][i], handler = _ref1.handler, ctx = _ref1.ctx, once = _ref1.once;
          handler.apply(ctx != null ? ctx : this, args);
          if (once) {
            _results.push(this.bindings[event].splice(i, 1));
          } else {
            _results.push(i++);
          }
        }
        return _results;
      }
    };

    return Evented;

  })();

  Pace = window.Pace || {};

  window.Pace = Pace;

  extend(Pace, Evented.prototype);

  options = Pace.options = extend({}, defaultOptions, window.paceOptions, getFromDOM());

  _ref = ['ajax', 'document', 'eventLag', 'elements'];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    source = _ref[_i];
    if (options[source] === true) {
      options[source] = defaultOptions[source];
    }
  }

  NoTargetError = (function(_super) {
    __extends(NoTargetError, _super);

    function NoTargetError() {
      _ref1 = NoTargetError.__super__.constructor.apply(this, arguments);
      return _ref1;
    }

    return NoTargetError;

  })(Error);

  Bar = (function() {
    function Bar() {
      this.progress = 0;
    }

    Bar.prototype.getElement = function() {
      var targetElement;
      if (this.el == null) {
        targetElement = document.querySelector(options.target);
        if (!targetElement) {
          throw new NoTargetError;
        }
        this.el = document.createElement('div');
        this.el.className = "pace pace-active";
        document.body.className = document.body.className.replace(/pace-done/g, '');
        document.body.className += ' pace-running';
        this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>';
        if (targetElement.firstChild != null) {
          targetElement.insertBefore(this.el, targetElement.firstChild);
        } else {
          targetElement.appendChild(this.el);
        }
      }
      return this.el;
    };

    Bar.prototype.finish = function() {
      var el;
      el = this.getElement();
      el.className = el.className.replace('pace-active', '');
      el.className += ' pace-inactive';
      document.body.className = document.body.className.replace('pace-running', '');
      return document.body.className += ' pace-done';
    };

    Bar.prototype.update = function(prog) {
      this.progress = prog;
      return this.render();
    };

    Bar.prototype.destroy = function() {
      try {
        this.getElement().parentNode.removeChild(this.getElement());
      } catch (_error) {
        NoTargetError = _error;
      }
      return this.el = void 0;
    };

    Bar.prototype.render = function() {
      var el, key, progressStr, transform, _j, _len1, _ref2;
      if (document.querySelector(options.target) == null) {
        return false;
      }
      el = this.getElement();
      transform = "translate3d(" + this.progress + "%, 0, 0)";
      _ref2 = ['webkitTransform', 'msTransform', 'transform'];
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        key = _ref2[_j];
        el.children[0].style[key] = transform;
      }
      if (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) {
        el.children[0].setAttribute('data-progress-text', "" + (this.progress | 0) + "%");
        if (this.progress >= 100) {
          progressStr = '99';
        } else {
          progressStr = this.progress < 10 ? "0" : "";
          progressStr += this.progress | 0;
        }
        el.children[0].setAttribute('data-progress', "" + progressStr);
      }
      return this.lastRenderedProgress = this.progress;
    };

    Bar.prototype.done = function() {
      return this.progress >= 100;
    };

    return Bar;

  })();

  Events = (function() {
    function Events() {
      this.bindings = {};
    }

    Events.prototype.trigger = function(name, val) {
      var binding, _j, _len1, _ref2, _results;
      if (this.bindings[name] != null) {
        _ref2 = this.bindings[name];
        _results = [];
        for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
          binding = _ref2[_j];
          _results.push(binding.call(this, val));
        }
        return _results;
      }
    };

    Events.prototype.on = function(name, fn) {
      var _base;
      if ((_base = this.bindings)[name] == null) {
        _base[name] = [];
      }
      return this.bindings[name].push(fn);
    };

    return Events;

  })();

  _XMLHttpRequest = window.XMLHttpRequest;

  _XDomainRequest = window.XDomainRequest;

  _WebSocket = window.WebSocket;

  extendNative = function(to, from) {
    var e, key, _results;
    _results = [];
    for (key in from.prototype) {
      try {
        if ((to[key] == null) && typeof from[key] !== 'function') {
          if (typeof Object.defineProperty === 'function') {
            _results.push(Object.defineProperty(to, key, {
              get: function() {
                return from.prototype[key];
              },
              configurable: true,
              enumerable: true
            }));
          } else {
            _results.push(to[key] = from.prototype[key]);
          }
        } else {
          _results.push(void 0);
        }
      } catch (_error) {
        e = _error;
      }
    }
    return _results;
  };

  ignoreStack = [];

  Pace.ignore = function() {
    var args, fn, ret;
    fn = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    ignoreStack.unshift('ignore');
    ret = fn.apply(null, args);
    ignoreStack.shift();
    return ret;
  };

  Pace.track = function() {
    var args, fn, ret;
    fn = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    ignoreStack.unshift('track');
    ret = fn.apply(null, args);
    ignoreStack.shift();
    return ret;
  };

  shouldTrack = function(method) {
    var _ref2;
    if (method == null) {
      method = 'GET';
    }
    if (ignoreStack[0] === 'track') {
      return 'force';
    }
    if (!ignoreStack.length && options.ajax) {
      if (method === 'socket' && options.ajax.trackWebSockets) {
        return true;
      } else if (_ref2 = method.toUpperCase(), __indexOf.call(options.ajax.trackMethods, _ref2) >= 0) {
        return true;
      }
    }
    return false;
  };

  RequestIntercept = (function(_super) {
    __extends(RequestIntercept, _super);

    function RequestIntercept() {
      var monitorXHR,
        _this = this;
      RequestIntercept.__super__.constructor.apply(this, arguments);
      monitorXHR = function(req) {
        var _open;
        _open = req.open;
        return req.open = function(type, url, async) {
          if (shouldTrack(type)) {
            _this.trigger('request', {
              type: type,
              url: url,
              request: req
            });
          }
          return _open.apply(req, arguments);
        };
      };
      window.XMLHttpRequest = function(flags) {
        var req;
        req = new _XMLHttpRequest(flags);
        monitorXHR(req);
        return req;
      };
      try {
        extendNative(window.XMLHttpRequest, _XMLHttpRequest);
      } catch (_error) {}
      if (_XDomainRequest != null) {
        window.XDomainRequest = function() {
          var req;
          req = new _XDomainRequest;
          monitorXHR(req);
          return req;
        };
        try {
          extendNative(window.XDomainRequest, _XDomainRequest);
        } catch (_error) {}
      }
      if ((_WebSocket != null) && options.ajax.trackWebSockets) {
        window.WebSocket = function(url, protocols) {
          var req;
          if (protocols != null) {
            req = new _WebSocket(url, protocols);
          } else {
            req = new _WebSocket(url);
          }
          if (shouldTrack('socket')) {
            _this.trigger('request', {
              type: 'socket',
              url: url,
              protocols: protocols,
              request: req
            });
          }
          return req;
        };
        try {
          extendNative(window.WebSocket, _WebSocket);
        } catch (_error) {}
      }
    }

    return RequestIntercept;

  })(Events);

  _intercept = null;

  getIntercept = function() {
    if (_intercept == null) {
      _intercept = new RequestIntercept;
    }
    return _intercept;
  };

  shouldIgnoreURL = function(url) {
    var pattern, _j, _len1, _ref2;
    _ref2 = options.ajax.ignoreURLs;
    for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
      pattern = _ref2[_j];
      if (typeof pattern === 'string') {
        if (url.indexOf(pattern) !== -1) {
          return true;
        }
      } else {
        if (pattern.test(url)) {
          return true;
        }
      }
    }
    return false;
  };

  getIntercept().on('request', function(_arg) {
    var after, args, request, type, url;
    type = _arg.type, request = _arg.request, url = _arg.url;
    if (shouldIgnoreURL(url)) {
      return;
    }
    if (!Pace.running && (options.restartOnRequestAfter !== false || shouldTrack(type) === 'force')) {
      args = arguments;
      after = options.restartOnRequestAfter || 0;
      if (typeof after === 'boolean') {
        after = 0;
      }
      return setTimeout(function() {
        var stillActive, _j, _len1, _ref2, _ref3, _results;
        if (type === 'socket') {
          stillActive = request.readyState < 2;
        } else {
          stillActive = (0 < (_ref2 = request.readyState) && _ref2 < 4);
        }
        if (stillActive) {
          Pace.restart();
          _ref3 = Pace.sources;
          _results = [];
          for (_j = 0, _len1 = _ref3.length; _j < _len1; _j++) {
            source = _ref3[_j];
            if (source instanceof AjaxMonitor) {
              source.watch.apply(source, args);
              break;
            } else {
              _results.push(void 0);
            }
          }
          return _results;
        }
      }, after);
    }
  });

  AjaxMonitor = (function() {
    function AjaxMonitor() {
      var _this = this;
      this.elements = [];
      getIntercept().on('request', function() {
        return _this.watch.apply(_this, arguments);
      });
    }

    AjaxMonitor.prototype.watch = function(_arg) {
      var request, tracker, type, url;
      type = _arg.type, request = _arg.request, url = _arg.url;
      if (shouldIgnoreURL(url)) {
        return;
      }
      if (type === 'socket') {
        tracker = new SocketRequestTracker(request);
      } else {
        tracker = new XHRRequestTracker(request);
      }
      return this.elements.push(tracker);
    };

    return AjaxMonitor;

  })();

  XHRRequestTracker = (function() {
    function XHRRequestTracker(request) {
      var event, size, _j, _len1, _onreadystatechange, _ref2,
        _this = this;
      this.progress = 0;
      if (window.ProgressEvent != null) {
        size = null;
        request.addEventListener('progress', function(evt) {
          if (evt.lengthComputable) {
            return _this.progress = 100 * evt.loaded / evt.total;
          } else {
            return _this.progress = _this.progress + (100 - _this.progress) / 2;
          }
        }, false);
        _ref2 = ['load', 'abort', 'timeout', 'error'];
        for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
          event = _ref2[_j];
          request.addEventListener(event, function() {
            return _this.progress = 100;
          }, false);
        }
      } else {
        _onreadystatechange = request.onreadystatechange;
        request.onreadystatechange = function() {
          var _ref3;
          if ((_ref3 = request.readyState) === 0 || _ref3 === 4) {
            _this.progress = 100;
          } else if (request.readyState === 3) {
            _this.progress = 50;
          }
          return typeof _onreadystatechange === "function" ? _onreadystatechange.apply(null, arguments) : void 0;
        };
      }
    }

    return XHRRequestTracker;

  })();

  SocketRequestTracker = (function() {
    function SocketRequestTracker(request) {
      var event, _j, _len1, _ref2,
        _this = this;
      this.progress = 0;
      _ref2 = ['error', 'open'];
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        event = _ref2[_j];
        request.addEventListener(event, function() {
          return _this.progress = 100;
        }, false);
      }
    }

    return SocketRequestTracker;

  })();

  ElementMonitor = (function() {
    function ElementMonitor(options) {
      var selector, _j, _len1, _ref2;
      if (options == null) {
        options = {};
      }
      this.elements = [];
      if (options.selectors == null) {
        options.selectors = [];
      }
      _ref2 = options.selectors;
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        selector = _ref2[_j];
        this.elements.push(new ElementTracker(selector));
      }
    }

    return ElementMonitor;

  })();

  ElementTracker = (function() {
    function ElementTracker(selector) {
      this.selector = selector;
      this.progress = 0;
      this.check();
    }

    ElementTracker.prototype.check = function() {
      var _this = this;
      if (document.querySelector(this.selector)) {
        return this.done();
      } else {
        return setTimeout((function() {
          return _this.check();
        }), options.elements.checkInterval);
      }
    };

    ElementTracker.prototype.done = function() {
      return this.progress = 100;
    };

    return ElementTracker;

  })();

  DocumentMonitor = (function() {
    DocumentMonitor.prototype.states = {
      loading: 0,
      interactive: 50,
      complete: 100
    };

    function DocumentMonitor() {
      var _onreadystatechange, _ref2,
        _this = this;
      this.progress = (_ref2 = this.states[document.readyState]) != null ? _ref2 : 100;
      _onreadystatechange = document.onreadystatechange;
      document.onreadystatechange = function() {
        if (_this.states[document.readyState] != null) {
          _this.progress = _this.states[document.readyState];
        }
        return typeof _onreadystatechange === "function" ? _onreadystatechange.apply(null, arguments) : void 0;
      };
    }

    return DocumentMonitor;

  })();

  EventLagMonitor = (function() {
    function EventLagMonitor() {
      var avg, interval, last, points, samples,
        _this = this;
      this.progress = 0;
      avg = 0;
      samples = [];
      points = 0;
      last = now();
      interval = setInterval(function() {
        var diff;
        diff = now() - last - 50;
        last = now();
        samples.push(diff);
        if (samples.length > options.eventLag.sampleCount) {
          samples.shift();
        }
        avg = avgAmplitude(samples);
        if (++points >= options.eventLag.minSamples && avg < options.eventLag.lagThreshold) {
          _this.progress = 100;
          return clearInterval(interval);
        } else {
          return _this.progress = 100 * (3 / (avg + 3));
        }
      }, 50);
    }

    return EventLagMonitor;

  })();

  Scaler = (function() {
    function Scaler(source) {
      this.source = source;
      this.last = this.sinceLastUpdate = 0;
      this.rate = options.initialRate;
      this.catchup = 0;
      this.progress = this.lastProgress = 0;
      if (this.source != null) {
        this.progress = result(this.source, 'progress');
      }
    }

    Scaler.prototype.tick = function(frameTime, val) {
      var scaling;
      if (val == null) {
        val = result(this.source, 'progress');
      }
      if (val >= 100) {
        this.done = true;
      }
      if (val === this.last) {
        this.sinceLastUpdate += frameTime;
      } else {
        if (this.sinceLastUpdate) {
          this.rate = (val - this.last) / this.sinceLastUpdate;
        }
        this.catchup = (val - this.progress) / options.catchupTime;
        this.sinceLastUpdate = 0;
        this.last = val;
      }
      if (val > this.progress) {
        this.progress += this.catchup * frameTime;
      }
      scaling = 1 - Math.pow(this.progress / 100, options.easeFactor);
      this.progress += scaling * this.rate * frameTime;
      this.progress = Math.min(this.lastProgress + options.maxProgressPerFrame, this.progress);
      this.progress = Math.max(0, this.progress);
      this.progress = Math.min(100, this.progress);
      this.lastProgress = this.progress;
      return this.progress;
    };

    return Scaler;

  })();

  sources = null;

  scalers = null;

  bar = null;

  uniScaler = null;

  animation = null;

  cancelAnimation = null;

  Pace.running = false;

  handlePushState = function() {
    if (options.restartOnPushState) {
      return Pace.restart();
    }
  };

  if (window.history.pushState != null) {
    _pushState = window.history.pushState;
    window.history.pushState = function() {
      handlePushState();
      return _pushState.apply(window.history, arguments);
    };
  }

  if (window.history.replaceState != null) {
    _replaceState = window.history.replaceState;
    window.history.replaceState = function() {
      handlePushState();
      return _replaceState.apply(window.history, arguments);
    };
  }

  SOURCE_KEYS = {
    ajax: AjaxMonitor,
    elements: ElementMonitor,
    document: DocumentMonitor,
    eventLag: EventLagMonitor
  };

  (init = function() {
    var type, _j, _k, _len1, _len2, _ref2, _ref3, _ref4;
    Pace.sources = sources = [];
    _ref2 = ['ajax', 'elements', 'document', 'eventLag'];
    for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
      type = _ref2[_j];
      if (options[type] !== false) {
        sources.push(new SOURCE_KEYS[type](options[type]));
      }
    }
    _ref4 = (_ref3 = options.extraSources) != null ? _ref3 : [];
    for (_k = 0, _len2 = _ref4.length; _k < _len2; _k++) {
      source = _ref4[_k];
      sources.push(new source(options));
    }
    Pace.bar = bar = new Bar;
    scalers = [];
    return uniScaler = new Scaler;
  })();

  Pace.stop = function() {
    Pace.trigger('stop');
    Pace.running = false;
    bar.destroy();
    cancelAnimation = true;
    if (animation != null) {
      if (typeof cancelAnimationFrame === "function") {
        cancelAnimationFrame(animation);
      }
      animation = null;
    }
    return init();
  };

  Pace.restart = function() {
    Pace.trigger('restart');
    Pace.stop();
    return Pace.start();
  };

  Pace.go = function() {
    var start;
    Pace.running = true;
    bar.render();
    start = now();
    cancelAnimation = false;
    return animation = runAnimation(function(frameTime, enqueueNextFrame) {
      var avg, count, done, element, elements, i, j, remaining, scaler, scalerList, sum, _j, _k, _len1, _len2, _ref2;
      remaining = 100 - bar.progress;
      count = sum = 0;
      done = true;
      for (i = _j = 0, _len1 = sources.length; _j < _len1; i = ++_j) {
        source = sources[i];
        scalerList = scalers[i] != null ? scalers[i] : scalers[i] = [];
        elements = (_ref2 = source.elements) != null ? _ref2 : [source];
        for (j = _k = 0, _len2 = elements.length; _k < _len2; j = ++_k) {
          element = elements[j];
          scaler = scalerList[j] != null ? scalerList[j] : scalerList[j] = new Scaler(element);
          done &= scaler.done;
          if (scaler.done) {
            continue;
          }
          count++;
          sum += scaler.tick(frameTime);
        }
      }
      avg = sum / count;
      bar.update(uniScaler.tick(frameTime, avg));
      if (bar.done() || done || cancelAnimation) {
        bar.update(100);
        Pace.trigger('done');
        return setTimeout(function() {
          bar.finish();
          Pace.running = false;
          return Pace.trigger('hide');
        }, Math.max(options.ghostTime, Math.max(options.minTime - (now() - start), 0)));
      } else {
        return enqueueNextFrame();
      }
    });
  };

  Pace.start = function(_options) {
    extend(options, _options);
    Pace.running = true;
    try {
      bar.render();
    } catch (_error) {
      NoTargetError = _error;
    }
    if (!document.querySelector('.pace')) {
      return setTimeout(Pace.start, 50);
    } else {
      Pace.trigger('start');
      return Pace.go();
    }
  };

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! pace */ "./node_modules/pace/pace.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return Pace;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}).call(this);


/***/ }),

/***/ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * perfect-scrollbar v1.5.0
 * Copyright 2020 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */

function get(element) {
  return getComputedStyle(element);
}

function set(element, obj) {
  for (var key in obj) {
    var val = obj[key];
    if (typeof val === 'number') {
      val = val + "px";
    }
    element.style[key] = val;
  }
  return element;
}

function div(className) {
  var div = document.createElement('div');
  div.className = className;
  return div;
}

var elMatches =
  typeof Element !== 'undefined' &&
  (Element.prototype.matches ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector);

function matches(element, query) {
  if (!elMatches) {
    throw new Error('No element matching method supported');
  }

  return elMatches.call(element, query);
}

function remove(element) {
  if (element.remove) {
    element.remove();
  } else {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
}

function queryChildren(element, selector) {
  return Array.prototype.filter.call(element.children, function (child) { return matches(child, selector); }
  );
}

var cls = {
  main: 'ps',
  rtl: 'ps__rtl',
  element: {
    thumb: function (x) { return ("ps__thumb-" + x); },
    rail: function (x) { return ("ps__rail-" + x); },
    consuming: 'ps__child--consume',
  },
  state: {
    focus: 'ps--focus',
    clicking: 'ps--clicking',
    active: function (x) { return ("ps--active-" + x); },
    scrolling: function (x) { return ("ps--scrolling-" + x); },
  },
};

/*
 * Helper methods
 */
var scrollingClassTimeout = { x: null, y: null };

function addScrollingClass(i, x) {
  var classList = i.element.classList;
  var className = cls.state.scrolling(x);

  if (classList.contains(className)) {
    clearTimeout(scrollingClassTimeout[x]);
  } else {
    classList.add(className);
  }
}

function removeScrollingClass(i, x) {
  scrollingClassTimeout[x] = setTimeout(
    function () { return i.isAlive && i.element.classList.remove(cls.state.scrolling(x)); },
    i.settings.scrollingThreshold
  );
}

function setScrollingClassInstantly(i, x) {
  addScrollingClass(i, x);
  removeScrollingClass(i, x);
}

var EventElement = function EventElement(element) {
  this.element = element;
  this.handlers = {};
};

var prototypeAccessors = { isEmpty: { configurable: true } };

EventElement.prototype.bind = function bind (eventName, handler) {
  if (typeof this.handlers[eventName] === 'undefined') {
    this.handlers[eventName] = [];
  }
  this.handlers[eventName].push(handler);
  this.element.addEventListener(eventName, handler, false);
};

EventElement.prototype.unbind = function unbind (eventName, target) {
    var this$1 = this;

  this.handlers[eventName] = this.handlers[eventName].filter(function (handler) {
    if (target && handler !== target) {
      return true;
    }
    this$1.element.removeEventListener(eventName, handler, false);
    return false;
  });
};

EventElement.prototype.unbindAll = function unbindAll () {
  for (var name in this.handlers) {
    this.unbind(name);
  }
};

prototypeAccessors.isEmpty.get = function () {
    var this$1 = this;

  return Object.keys(this.handlers).every(
    function (key) { return this$1.handlers[key].length === 0; }
  );
};

Object.defineProperties( EventElement.prototype, prototypeAccessors );

var EventManager = function EventManager() {
  this.eventElements = [];
};

EventManager.prototype.eventElement = function eventElement (element) {
  var ee = this.eventElements.filter(function (ee) { return ee.element === element; })[0];
  if (!ee) {
    ee = new EventElement(element);
    this.eventElements.push(ee);
  }
  return ee;
};

EventManager.prototype.bind = function bind (element, eventName, handler) {
  this.eventElement(element).bind(eventName, handler);
};

EventManager.prototype.unbind = function unbind (element, eventName, handler) {
  var ee = this.eventElement(element);
  ee.unbind(eventName, handler);

  if (ee.isEmpty) {
    // remove
    this.eventElements.splice(this.eventElements.indexOf(ee), 1);
  }
};

EventManager.prototype.unbindAll = function unbindAll () {
  this.eventElements.forEach(function (e) { return e.unbindAll(); });
  this.eventElements = [];
};

EventManager.prototype.once = function once (element, eventName, handler) {
  var ee = this.eventElement(element);
  var onceHandler = function (evt) {
    ee.unbind(eventName, onceHandler);
    handler(evt);
  };
  ee.bind(eventName, onceHandler);
};

function createEvent(name) {
  if (typeof window.CustomEvent === 'function') {
    return new CustomEvent(name);
  } else {
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(name, false, false, undefined);
    return evt;
  }
}

function processScrollDiff(
  i,
  axis,
  diff,
  useScrollingClass,
  forceFireReachEvent
) {
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var fields;
  if (axis === 'top') {
    fields = [
      'contentHeight',
      'containerHeight',
      'scrollTop',
      'y',
      'up',
      'down' ];
  } else if (axis === 'left') {
    fields = [
      'contentWidth',
      'containerWidth',
      'scrollLeft',
      'x',
      'left',
      'right' ];
  } else {
    throw new Error('A proper axis should be provided');
  }

  processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent);
}

function processScrollDiff$1(
  i,
  diff,
  ref,
  useScrollingClass,
  forceFireReachEvent
) {
  var contentHeight = ref[0];
  var containerHeight = ref[1];
  var scrollTop = ref[2];
  var y = ref[3];
  var up = ref[4];
  var down = ref[5];
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var element = i.element;

  // reset reach
  i.reach[y] = null;

  // 1 for subpixel rounding
  if (element[scrollTop] < 1) {
    i.reach[y] = 'start';
  }

  // 1 for subpixel rounding
  if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
    i.reach[y] = 'end';
  }

  if (diff) {
    element.dispatchEvent(createEvent(("ps-scroll-" + y)));

    if (diff < 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + up)));
    } else if (diff > 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + down)));
    }

    if (useScrollingClass) {
      setScrollingClassInstantly(i, y);
    }
  }

  if (i.reach[y] && (diff || forceFireReachEvent)) {
    element.dispatchEvent(createEvent(("ps-" + y + "-reach-" + (i.reach[y]))));
  }
}

function toInt(x) {
  return parseInt(x, 10) || 0;
}

function isEditable(el) {
  return (
    matches(el, 'input,[contenteditable]') ||
    matches(el, 'select,[contenteditable]') ||
    matches(el, 'textarea,[contenteditable]') ||
    matches(el, 'button,[contenteditable]')
  );
}

function outerWidth(element) {
  var styles = get(element);
  return (
    toInt(styles.width) +
    toInt(styles.paddingLeft) +
    toInt(styles.paddingRight) +
    toInt(styles.borderLeftWidth) +
    toInt(styles.borderRightWidth)
  );
}

var env = {
  isWebKit:
    typeof document !== 'undefined' &&
    'WebkitAppearance' in document.documentElement.style,
  supportsTouch:
    typeof window !== 'undefined' &&
    ('ontouchstart' in window ||
      ('maxTouchPoints' in window.navigator &&
        window.navigator.maxTouchPoints > 0) ||
      (window.DocumentTouch && document instanceof window.DocumentTouch)),
  supportsIePointer:
    typeof navigator !== 'undefined' && navigator.msMaxTouchPoints,
  isChrome:
    typeof navigator !== 'undefined' &&
    /Chrome/i.test(navigator && navigator.userAgent),
};

function updateGeometry(i) {
  var element = i.element;
  var roundedScrollTop = Math.floor(element.scrollTop);
  var rect = element.getBoundingClientRect();

  i.containerWidth = Math.ceil(rect.width);
  i.containerHeight = Math.ceil(rect.height);
  i.contentWidth = element.scrollWidth;
  i.contentHeight = element.scrollHeight;

  if (!element.contains(i.scrollbarXRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('x')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarXRail);
  }
  if (!element.contains(i.scrollbarYRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('y')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarYRail);
  }

  if (
    !i.settings.suppressScrollX &&
    i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth
  ) {
    i.scrollbarXActive = true;
    i.railXWidth = i.containerWidth - i.railXMarginWidth;
    i.railXRatio = i.containerWidth / i.railXWidth;
    i.scrollbarXWidth = getThumbSize(
      i,
      toInt((i.railXWidth * i.containerWidth) / i.contentWidth)
    );
    i.scrollbarXLeft = toInt(
      ((i.negativeScrollAdjustment + element.scrollLeft) *
        (i.railXWidth - i.scrollbarXWidth)) /
        (i.contentWidth - i.containerWidth)
    );
  } else {
    i.scrollbarXActive = false;
  }

  if (
    !i.settings.suppressScrollY &&
    i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight
  ) {
    i.scrollbarYActive = true;
    i.railYHeight = i.containerHeight - i.railYMarginHeight;
    i.railYRatio = i.containerHeight / i.railYHeight;
    i.scrollbarYHeight = getThumbSize(
      i,
      toInt((i.railYHeight * i.containerHeight) / i.contentHeight)
    );
    i.scrollbarYTop = toInt(
      (roundedScrollTop * (i.railYHeight - i.scrollbarYHeight)) /
        (i.contentHeight - i.containerHeight)
    );
  } else {
    i.scrollbarYActive = false;
  }

  if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
    i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
  }
  if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
    i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
  }

  updateCss(element, i);

  if (i.scrollbarXActive) {
    element.classList.add(cls.state.active('x'));
  } else {
    element.classList.remove(cls.state.active('x'));
    i.scrollbarXWidth = 0;
    i.scrollbarXLeft = 0;
    element.scrollLeft = i.isRtl === true ? i.contentWidth : 0;
  }
  if (i.scrollbarYActive) {
    element.classList.add(cls.state.active('y'));
  } else {
    element.classList.remove(cls.state.active('y'));
    i.scrollbarYHeight = 0;
    i.scrollbarYTop = 0;
    element.scrollTop = 0;
  }
}

function getThumbSize(i, thumbSize) {
  if (i.settings.minScrollbarLength) {
    thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
  }
  if (i.settings.maxScrollbarLength) {
    thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
  }
  return thumbSize;
}

function updateCss(element, i) {
  var xRailOffset = { width: i.railXWidth };
  var roundedScrollTop = Math.floor(element.scrollTop);

  if (i.isRtl) {
    xRailOffset.left =
      i.negativeScrollAdjustment +
      element.scrollLeft +
      i.containerWidth -
      i.contentWidth;
  } else {
    xRailOffset.left = element.scrollLeft;
  }
  if (i.isScrollbarXUsingBottom) {
    xRailOffset.bottom = i.scrollbarXBottom - roundedScrollTop;
  } else {
    xRailOffset.top = i.scrollbarXTop + roundedScrollTop;
  }
  set(i.scrollbarXRail, xRailOffset);

  var yRailOffset = { top: roundedScrollTop, height: i.railYHeight };
  if (i.isScrollbarYUsingRight) {
    if (i.isRtl) {
      yRailOffset.right =
        i.contentWidth -
        (i.negativeScrollAdjustment + element.scrollLeft) -
        i.scrollbarYRight -
        i.scrollbarYOuterWidth -
        9;
    } else {
      yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
    }
  } else {
    if (i.isRtl) {
      yRailOffset.left =
        i.negativeScrollAdjustment +
        element.scrollLeft +
        i.containerWidth * 2 -
        i.contentWidth -
        i.scrollbarYLeft -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
    }
  }
  set(i.scrollbarYRail, yRailOffset);

  set(i.scrollbarX, {
    left: i.scrollbarXLeft,
    width: i.scrollbarXWidth - i.railBorderXWidth,
  });
  set(i.scrollbarY, {
    top: i.scrollbarYTop,
    height: i.scrollbarYHeight - i.railBorderYWidth,
  });
}

function clickRail(i) {
  var element = i.element;

  i.event.bind(i.scrollbarY, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarYRail, 'mousedown', function (e) {
    var positionTop =
      e.pageY -
      window.pageYOffset -
      i.scrollbarYRail.getBoundingClientRect().top;
    var direction = positionTop > i.scrollbarYTop ? 1 : -1;

    i.element.scrollTop += direction * i.containerHeight;
    updateGeometry(i);

    e.stopPropagation();
  });

  i.event.bind(i.scrollbarX, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarXRail, 'mousedown', function (e) {
    var positionLeft =
      e.pageX -
      window.pageXOffset -
      i.scrollbarXRail.getBoundingClientRect().left;
    var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;

    i.element.scrollLeft += direction * i.containerWidth;
    updateGeometry(i);

    e.stopPropagation();
  });
}

function dragThumb(i) {
  bindMouseScrollHandler(i, [
    'containerWidth',
    'contentWidth',
    'pageX',
    'railXWidth',
    'scrollbarX',
    'scrollbarXWidth',
    'scrollLeft',
    'x',
    'scrollbarXRail' ]);
  bindMouseScrollHandler(i, [
    'containerHeight',
    'contentHeight',
    'pageY',
    'railYHeight',
    'scrollbarY',
    'scrollbarYHeight',
    'scrollTop',
    'y',
    'scrollbarYRail' ]);
}

function bindMouseScrollHandler(
  i,
  ref
) {
  var containerHeight = ref[0];
  var contentHeight = ref[1];
  var pageY = ref[2];
  var railYHeight = ref[3];
  var scrollbarY = ref[4];
  var scrollbarYHeight = ref[5];
  var scrollTop = ref[6];
  var y = ref[7];
  var scrollbarYRail = ref[8];

  var element = i.element;

  var startingScrollTop = null;
  var startingMousePageY = null;
  var scrollBy = null;

  function mouseMoveHandler(e) {
    if (e.touches && e.touches[0]) {
      e[pageY] = e.touches[0].pageY;
    }
    element[scrollTop] =
      startingScrollTop + scrollBy * (e[pageY] - startingMousePageY);
    addScrollingClass(i, y);
    updateGeometry(i);

    e.stopPropagation();
    e.preventDefault();
  }

  function mouseUpHandler() {
    removeScrollingClass(i, y);
    i[scrollbarYRail].classList.remove(cls.state.clicking);
    i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
  }

  function bindMoves(e, touchMode) {
    startingScrollTop = element[scrollTop];
    if (touchMode && e.touches) {
      e[pageY] = e.touches[0].pageY;
    }
    startingMousePageY = e[pageY];
    scrollBy =
      (i[contentHeight] - i[containerHeight]) /
      (i[railYHeight] - i[scrollbarYHeight]);
    if (!touchMode) {
      i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
      i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);
      e.preventDefault();
    } else {
      i.event.bind(i.ownerDocument, 'touchmove', mouseMoveHandler);
    }

    i[scrollbarYRail].classList.add(cls.state.clicking);

    e.stopPropagation();
  }

  i.event.bind(i[scrollbarY], 'mousedown', function (e) {
    bindMoves(e);
  });
  i.event.bind(i[scrollbarY], 'touchstart', function (e) {
    bindMoves(e, true);
  });
}

function keyboard(i) {
  var element = i.element;

  var elementHovered = function () { return matches(element, ':hover'); };
  var scrollbarFocused = function () { return matches(i.scrollbarX, ':focus') || matches(i.scrollbarY, ':focus'); };

  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    if (deltaX === 0) {
      if (!i.scrollbarYActive) {
        return false;
      }
      if (
        (scrollTop === 0 && deltaY > 0) ||
        (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }

    var scrollLeft = element.scrollLeft;
    if (deltaY === 0) {
      if (!i.scrollbarXActive) {
        return false;
      }
      if (
        (scrollLeft === 0 && deltaX < 0) ||
        (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }
    return true;
  }

  i.event.bind(i.ownerDocument, 'keydown', function (e) {
    if (
      (e.isDefaultPrevented && e.isDefaultPrevented()) ||
      e.defaultPrevented
    ) {
      return;
    }

    if (!elementHovered() && !scrollbarFocused()) {
      return;
    }

    var activeElement = document.activeElement
      ? document.activeElement
      : i.ownerDocument.activeElement;
    if (activeElement) {
      if (activeElement.tagName === 'IFRAME') {
        activeElement = activeElement.contentDocument.activeElement;
      } else {
        // go deeper if element is a webcomponent
        while (activeElement.shadowRoot) {
          activeElement = activeElement.shadowRoot.activeElement;
        }
      }
      if (isEditable(activeElement)) {
        return;
      }
    }

    var deltaX = 0;
    var deltaY = 0;

    switch (e.which) {
      case 37: // left
        if (e.metaKey) {
          deltaX = -i.contentWidth;
        } else if (e.altKey) {
          deltaX = -i.containerWidth;
        } else {
          deltaX = -30;
        }
        break;
      case 38: // up
        if (e.metaKey) {
          deltaY = i.contentHeight;
        } else if (e.altKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = 30;
        }
        break;
      case 39: // right
        if (e.metaKey) {
          deltaX = i.contentWidth;
        } else if (e.altKey) {
          deltaX = i.containerWidth;
        } else {
          deltaX = 30;
        }
        break;
      case 40: // down
        if (e.metaKey) {
          deltaY = -i.contentHeight;
        } else if (e.altKey) {
          deltaY = -i.containerHeight;
        } else {
          deltaY = -30;
        }
        break;
      case 32: // space bar
        if (e.shiftKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = -i.containerHeight;
        }
        break;
      case 33: // page up
        deltaY = i.containerHeight;
        break;
      case 34: // page down
        deltaY = -i.containerHeight;
        break;
      case 36: // home
        deltaY = i.contentHeight;
        break;
      case 35: // end
        deltaY = -i.contentHeight;
        break;
      default:
        return;
    }

    if (i.settings.suppressScrollX && deltaX !== 0) {
      return;
    }
    if (i.settings.suppressScrollY && deltaY !== 0) {
      return;
    }

    element.scrollTop -= deltaY;
    element.scrollLeft += deltaX;
    updateGeometry(i);

    if (shouldPreventDefault(deltaX, deltaY)) {
      e.preventDefault();
    }
  });
}

function wheel(i) {
  var element = i.element;

  function shouldPreventDefault(deltaX, deltaY) {
    var roundedScrollTop = Math.floor(element.scrollTop);
    var isTop = element.scrollTop === 0;
    var isBottom =
      roundedScrollTop + element.offsetHeight === element.scrollHeight;
    var isLeft = element.scrollLeft === 0;
    var isRight =
      element.scrollLeft + element.offsetWidth === element.scrollWidth;

    var hitsBound;

    // pick axis with primary direction
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      hitsBound = isTop || isBottom;
    } else {
      hitsBound = isLeft || isRight;
    }

    return hitsBound ? !i.settings.wheelPropagation : true;
  }

  function getDeltaFromEvent(e) {
    var deltaX = e.deltaX;
    var deltaY = -1 * e.deltaY;

    if (typeof deltaX === 'undefined' || typeof deltaY === 'undefined') {
      // OS X Safari
      deltaX = (-1 * e.wheelDeltaX) / 6;
      deltaY = e.wheelDeltaY / 6;
    }

    if (e.deltaMode && e.deltaMode === 1) {
      // Firefox in deltaMode 1: Line scrolling
      deltaX *= 10;
      deltaY *= 10;
    }

    if (deltaX !== deltaX && deltaY !== deltaY /* NaN checks */) {
      // IE in some mouse drivers
      deltaX = 0;
      deltaY = e.wheelDelta;
    }

    if (e.shiftKey) {
      // reverse axis with shift key
      return [-deltaY, -deltaX];
    }
    return [deltaX, deltaY];
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    // FIXME: this is a workaround for <select> issue in FF and IE #571
    if (!env.isWebKit && element.querySelector('select:focus')) {
      return true;
    }

    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);

      // if deltaY && vertical scrollable
      if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            (cursor.scrollTop > 0 && deltaY < 0) ||
            (cursor.scrollTop < maxScrollTop && deltaY > 0)
          ) {
            return true;
          }
        }
      }
      // if deltaX && horizontal scrollable
      if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            (cursor.scrollLeft > 0 && deltaX < 0) ||
            (cursor.scrollLeft < maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function mousewheelHandler(e) {
    var ref = getDeltaFromEvent(e);
    var deltaX = ref[0];
    var deltaY = ref[1];

    if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
      return;
    }

    var shouldPrevent = false;
    if (!i.settings.useBothWheelAxes) {
      // deltaX will only be used for horizontal scrolling and deltaY will
      // only be used for vertical scrolling - this is the default
      element.scrollTop -= deltaY * i.settings.wheelSpeed;
      element.scrollLeft += deltaX * i.settings.wheelSpeed;
    } else if (i.scrollbarYActive && !i.scrollbarXActive) {
      // only vertical scrollbar is active and useBothWheelAxes option is
      // active, so let's scroll vertical bar using both mouse wheel axes
      if (deltaY) {
        element.scrollTop -= deltaY * i.settings.wheelSpeed;
      } else {
        element.scrollTop += deltaX * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    } else if (i.scrollbarXActive && !i.scrollbarYActive) {
      // useBothWheelAxes and only horizontal bar is active, so use both
      // wheel axes for horizontal bar
      if (deltaX) {
        element.scrollLeft += deltaX * i.settings.wheelSpeed;
      } else {
        element.scrollLeft -= deltaY * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    }

    updateGeometry(i);

    shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);
    if (shouldPrevent && !e.ctrlKey) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  if (typeof window.onwheel !== 'undefined') {
    i.event.bind(element, 'wheel', mousewheelHandler);
  } else if (typeof window.onmousewheel !== 'undefined') {
    i.event.bind(element, 'mousewheel', mousewheelHandler);
  }
}

function touch(i) {
  if (!env.supportsTouch && !env.supportsIePointer) {
    return;
  }

  var element = i.element;

  function shouldPrevent(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    var scrollLeft = element.scrollLeft;
    var magnitudeX = Math.abs(deltaX);
    var magnitudeY = Math.abs(deltaY);

    if (magnitudeY > magnitudeX) {
      // user is perhaps trying to swipe up/down the page

      if (
        (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight) ||
        (deltaY > 0 && scrollTop === 0)
      ) {
        // set prevent for mobile Chrome refresh
        return window.scrollY === 0 && deltaY > 0 && env.isChrome;
      }
    } else if (magnitudeX > magnitudeY) {
      // user is perhaps trying to swipe left/right across the page

      if (
        (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth) ||
        (deltaX > 0 && scrollLeft === 0)
      ) {
        return true;
      }
    }

    return true;
  }

  function applyTouchMove(differenceX, differenceY) {
    element.scrollTop -= differenceY;
    element.scrollLeft -= differenceX;

    updateGeometry(i);
  }

  var startOffset = {};
  var startTime = 0;
  var speed = {};
  var easingLoop = null;

  function getTouch(e) {
    if (e.targetTouches) {
      return e.targetTouches[0];
    } else {
      // Maybe IE pointer
      return e;
    }
  }

  function shouldHandle(e) {
    if (e.pointerType && e.pointerType === 'pen' && e.buttons === 0) {
      return false;
    }
    if (e.targetTouches && e.targetTouches.length === 1) {
      return true;
    }
    if (
      e.pointerType &&
      e.pointerType !== 'mouse' &&
      e.pointerType !== e.MSPOINTER_TYPE_MOUSE
    ) {
      return true;
    }
    return false;
  }

  function touchStart(e) {
    if (!shouldHandle(e)) {
      return;
    }

    var touch = getTouch(e);

    startOffset.pageX = touch.pageX;
    startOffset.pageY = touch.pageY;

    startTime = new Date().getTime();

    if (easingLoop !== null) {
      clearInterval(easingLoop);
    }
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);

      // if deltaY && vertical scrollable
      if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            (cursor.scrollTop > 0 && deltaY < 0) ||
            (cursor.scrollTop < maxScrollTop && deltaY > 0)
          ) {
            return true;
          }
        }
      }
      // if deltaX && horizontal scrollable
      if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            (cursor.scrollLeft > 0 && deltaX < 0) ||
            (cursor.scrollLeft < maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function touchMove(e) {
    if (shouldHandle(e)) {
      var touch = getTouch(e);

      var currentOffset = { pageX: touch.pageX, pageY: touch.pageY };

      var differenceX = currentOffset.pageX - startOffset.pageX;
      var differenceY = currentOffset.pageY - startOffset.pageY;

      if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {
        return;
      }

      applyTouchMove(differenceX, differenceY);
      startOffset = currentOffset;

      var currentTime = new Date().getTime();

      var timeGap = currentTime - startTime;
      if (timeGap > 0) {
        speed.x = differenceX / timeGap;
        speed.y = differenceY / timeGap;
        startTime = currentTime;
      }

      if (shouldPrevent(differenceX, differenceY)) {
        e.preventDefault();
      }
    }
  }
  function touchEnd() {
    if (i.settings.swipeEasing) {
      clearInterval(easingLoop);
      easingLoop = setInterval(function() {
        if (i.isInitialized) {
          clearInterval(easingLoop);
          return;
        }

        if (!speed.x && !speed.y) {
          clearInterval(easingLoop);
          return;
        }

        if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
          clearInterval(easingLoop);
          return;
        }

        applyTouchMove(speed.x * 30, speed.y * 30);

        speed.x *= 0.8;
        speed.y *= 0.8;
      }, 10);
    }
  }

  if (env.supportsTouch) {
    i.event.bind(element, 'touchstart', touchStart);
    i.event.bind(element, 'touchmove', touchMove);
    i.event.bind(element, 'touchend', touchEnd);
  } else if (env.supportsIePointer) {
    if (window.PointerEvent) {
      i.event.bind(element, 'pointerdown', touchStart);
      i.event.bind(element, 'pointermove', touchMove);
      i.event.bind(element, 'pointerup', touchEnd);
    } else if (window.MSPointerEvent) {
      i.event.bind(element, 'MSPointerDown', touchStart);
      i.event.bind(element, 'MSPointerMove', touchMove);
      i.event.bind(element, 'MSPointerUp', touchEnd);
    }
  }
}

var defaultSettings = function () { return ({
  handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
  maxScrollbarLength: null,
  minScrollbarLength: null,
  scrollingThreshold: 1000,
  scrollXMarginOffset: 0,
  scrollYMarginOffset: 0,
  suppressScrollX: false,
  suppressScrollY: false,
  swipeEasing: true,
  useBothWheelAxes: false,
  wheelPropagation: true,
  wheelSpeed: 1,
}); };

var handlers = {
  'click-rail': clickRail,
  'drag-thumb': dragThumb,
  keyboard: keyboard,
  wheel: wheel,
  touch: touch,
};

var PerfectScrollbar = function PerfectScrollbar(element, userSettings) {
  var this$1 = this;
  if ( userSettings === void 0 ) userSettings = {};

  if (typeof element === 'string') {
    element = document.querySelector(element);
  }

  if (!element || !element.nodeName) {
    throw new Error('no element is specified to initialize PerfectScrollbar');
  }

  this.element = element;

  element.classList.add(cls.main);

  this.settings = defaultSettings();
  for (var key in userSettings) {
    this.settings[key] = userSettings[key];
  }

  this.containerWidth = null;
  this.containerHeight = null;
  this.contentWidth = null;
  this.contentHeight = null;

  var focus = function () { return element.classList.add(cls.state.focus); };
  var blur = function () { return element.classList.remove(cls.state.focus); };

  this.isRtl = get(element).direction === 'rtl';
  if (this.isRtl === true) {
    element.classList.add(cls.rtl);
  }
  this.isNegativeScroll = (function () {
    var originalScrollLeft = element.scrollLeft;
    var result = null;
    element.scrollLeft = -1;
    result = element.scrollLeft < 0;
    element.scrollLeft = originalScrollLeft;
    return result;
  })();
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? element.scrollWidth - element.clientWidth
    : 0;
  this.event = new EventManager();
  this.ownerDocument = element.ownerDocument || document;

  this.scrollbarXRail = div(cls.element.rail('x'));
  element.appendChild(this.scrollbarXRail);
  this.scrollbarX = div(cls.element.thumb('x'));
  this.scrollbarXRail.appendChild(this.scrollbarX);
  this.scrollbarX.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarX, 'focus', focus);
  this.event.bind(this.scrollbarX, 'blur', blur);
  this.scrollbarXActive = null;
  this.scrollbarXWidth = null;
  this.scrollbarXLeft = null;
  var railXStyle = get(this.scrollbarXRail);
  this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);
  if (isNaN(this.scrollbarXBottom)) {
    this.isScrollbarXUsingBottom = false;
    this.scrollbarXTop = toInt(railXStyle.top);
  } else {
    this.isScrollbarXUsingBottom = true;
  }
  this.railBorderXWidth =
    toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth);
  // Set rail to display:block to calculate margins
  set(this.scrollbarXRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
  set(this.scrollbarXRail, { display: '' });
  this.railXWidth = null;
  this.railXRatio = null;

  this.scrollbarYRail = div(cls.element.rail('y'));
  element.appendChild(this.scrollbarYRail);
  this.scrollbarY = div(cls.element.thumb('y'));
  this.scrollbarYRail.appendChild(this.scrollbarY);
  this.scrollbarY.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarY, 'focus', focus);
  this.event.bind(this.scrollbarY, 'blur', blur);
  this.scrollbarYActive = null;
  this.scrollbarYHeight = null;
  this.scrollbarYTop = null;
  var railYStyle = get(this.scrollbarYRail);
  this.scrollbarYRight = parseInt(railYStyle.right, 10);
  if (isNaN(this.scrollbarYRight)) {
    this.isScrollbarYUsingRight = false;
    this.scrollbarYLeft = toInt(railYStyle.left);
  } else {
    this.isScrollbarYUsingRight = true;
  }
  this.scrollbarYOuterWidth = this.isRtl ? outerWidth(this.scrollbarY) : null;
  this.railBorderYWidth =
    toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
  set(this.scrollbarYRail, { display: 'block' });
  this.railYMarginHeight =
    toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
  set(this.scrollbarYRail, { display: '' });
  this.railYHeight = null;
  this.railYRatio = null;

  this.reach = {
    x:
      element.scrollLeft <= 0
        ? 'start'
        : element.scrollLeft >= this.contentWidth - this.containerWidth
        ? 'end'
        : null,
    y:
      element.scrollTop <= 0
        ? 'start'
        : element.scrollTop >= this.contentHeight - this.containerHeight
        ? 'end'
        : null,
  };

  this.isAlive = true;

  this.settings.handlers.forEach(function (handlerName) { return handlers[handlerName](this$1); });

  this.lastScrollTop = Math.floor(element.scrollTop); // for onScroll only
  this.lastScrollLeft = element.scrollLeft; // for onScroll only
  this.event.bind(this.element, 'scroll', function (e) { return this$1.onScroll(e); });
  updateGeometry(this);
};

PerfectScrollbar.prototype.update = function update () {
  if (!this.isAlive) {
    return;
  }

  // Recalcuate negative scrollLeft adjustment
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? this.element.scrollWidth - this.element.clientWidth
    : 0;

  // Recalculate rail margins
  set(this.scrollbarXRail, { display: 'block' });
  set(this.scrollbarYRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(get(this.scrollbarXRail).marginLeft) +
    toInt(get(this.scrollbarXRail).marginRight);
  this.railYMarginHeight =
    toInt(get(this.scrollbarYRail).marginTop) +
    toInt(get(this.scrollbarYRail).marginBottom);

  // Hide scrollbars not to affect scrollWidth and scrollHeight
  set(this.scrollbarXRail, { display: 'none' });
  set(this.scrollbarYRail, { display: 'none' });

  updateGeometry(this);

  processScrollDiff(this, 'top', 0, false, true);
  processScrollDiff(this, 'left', 0, false, true);

  set(this.scrollbarXRail, { display: '' });
  set(this.scrollbarYRail, { display: '' });
};

PerfectScrollbar.prototype.onScroll = function onScroll (e) {
  if (!this.isAlive) {
    return;
  }

  updateGeometry(this);
  processScrollDiff(this, 'top', this.element.scrollTop - this.lastScrollTop);
  processScrollDiff(
    this,
    'left',
    this.element.scrollLeft - this.lastScrollLeft
  );

  this.lastScrollTop = Math.floor(this.element.scrollTop);
  this.lastScrollLeft = this.element.scrollLeft;
};

PerfectScrollbar.prototype.destroy = function destroy () {
  if (!this.isAlive) {
    return;
  }

  this.event.unbindAll();
  remove(this.scrollbarX);
  remove(this.scrollbarY);
  remove(this.scrollbarXRail);
  remove(this.scrollbarYRail);
  this.removePsClasses();

  // unset elements
  this.element = null;
  this.scrollbarX = null;
  this.scrollbarY = null;
  this.scrollbarXRail = null;
  this.scrollbarYRail = null;

  this.isAlive = false;
};

PerfectScrollbar.prototype.removePsClasses = function removePsClasses () {
  this.element.className = this.element.className
    .split(' ')
    .filter(function (name) { return !name.match(/^ps([-_].+|)$/); })
    .join(' ');
};

/* harmony default export */ __webpack_exports__["default"] = (PerfectScrollbar);
//# sourceMappingURL=perfect-scrollbar.esm.js.map


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
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

/***/ "./resources/js/backend/after.js":
/*!***************************************!*\
  !*** ./resources/js/backend/after.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Loaded after CoreUI app.js

/***/ }),

/***/ "./resources/js/backend/app.js":
/*!*************************************!*\
  !*** ./resources/js/backend/app.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coreui_coreui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/coreui */ "./node_modules/@coreui/coreui/dist/js/coreui.js");
/* harmony import */ var _coreui_coreui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui__WEBPACK_IMPORTED_MODULE_0__);

$(".modal").on("show.bs.modal", function (event) {
  var button = $(event.relatedTarget);
  var action = button.attr('href');
  var modal = $(this);

  if (typeof action !== 'undefined' && action !== '') {
    modal.find(".modal-content").load(action);
  }
});

/***/ }),

/***/ "./resources/js/backend/before.js":
/*!****************************************!*\
  !*** ./resources/js/backend/before.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bootstrap */ "./resources/js/bootstrap.js");
/* harmony import */ var pace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pace */ "./node_modules/pace/pace.js");
/* harmony import */ var pace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pace__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../plugins */ "./resources/js/plugins.js");
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_plugins__WEBPACK_IMPORTED_MODULE_2__);
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
// Loaded before CoreUI app.js




/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bootstrap_switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap-switch */ "./node_modules/bootstrap-switch/dist/js/bootstrap-switch.js");
/* harmony import */ var bootstrap_switch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_switch__WEBPACK_IMPORTED_MODULE_6__);
/**
 * This bootstrap file is used for both frontend and backend
 */




 // Required for BS4



/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

window.$ = window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_3___default.a;
window.Swal = sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a;
window._ = lodash__WEBPACK_IMPORTED_MODULE_0___default.a; // Lodash

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

/***/ }),

/***/ "./resources/js/plugins.js":
/*!*********************************!*\
  !*** ./resources/js/plugins.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Allows you to add data-method="METHOD to links to automatically inject a form
 * with the method on click
 *
 * Example: <a href="{{route('customers.destroy', $customer->id)}}"
 * data-method="delete" name="delete_item">Delete</a>
 *
 * Injects a form with that's fired on click of the link with a DELETE request.
 * Good because you don't have to dirty your HTML with delete forms everywhere.
 */
function addDeleteForms() {
  $('[data-method]').append(function () {
    if (!$(this).find('form').length > 0) {
      return "\n<form action='" + $(this).attr('href') + "' method='POST' name='delete_item' style='display:none'>\n" + "<input type='hidden' name='_method' value='" + $(this).attr('data-method') + "'>\n" + "<input type='hidden' name='_token' value='" + $('meta[name="csrf-token"]').attr('content') + "'>\n" + '</form>\n';
    } else {
      return '';
    }
  }).attr('href', '#').attr('style', 'cursor:pointer;').attr('onclick', '$(this).find("form").submit();');
}
/**
 * Place any jQuery/helper plugins in here.
 */


$(function () {
  /**
   * Add the data-method="delete" forms to all delete links
   */
  addDeleteForms();
  /**
   * Disable all submit buttons once clicked
   */

  $('.form_disabled_submit').submit(function () {
    $(this).find('input[type="submit"]').attr('disabled', true);
    $(this).find('button[type="submit"]').attr('disabled', true);
    return true;
  });
  /**
   * Generic confirm form delete using Sweet Alert
   */

  $('body').on('submit', 'form[name=delete_item]', function (e) {
    e.preventDefault();
    var form = this;
    var link = $('a[data-method="delete"]');
    var cancel = link.attr('data-trans-button-cancel') ? link.attr('data-trans-button-cancel') : 'Cancel';
    var confirm = link.attr('data-trans-button-confirm') ? link.attr('data-trans-button-confirm') : 'Yes, delete';
    var title = link.attr('data-trans-title') ? link.attr('data-trans-title') : 'Are you sure you want to delete this item?';
    Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger mr-2'
      },
      buttonsStyling: false
    }).fire({
      title: title,
      showCancelButton: true,
      confirmButtonText: confirm,
      cancelButtonText: cancel,
      icon: 'warning',
      reverseButtons: true
    }).then(function (result) {
      result.value && form.submit();
    });
  }).on('click', 'a[name=confirm_item]', function (e) {
    /**
     * Generic 'are you sure' confirm box
     */
    e.preventDefault();
    var link = $(this);
    var title = link.attr('data-trans-title') ? link.attr('data-trans-title') : 'Are you sure you want to do this?';
    var text = link.attr('data-trans-title') ? link.attr('data-trans-text') : '';
    var cancel = link.attr('data-trans-button-cancel') ? link.attr('data-trans-button-cancel') : 'Cancel';
    var confirm = link.attr('data-trans-button-confirm') ? link.attr('data-trans-button-confirm') : 'Continue';
    Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger mr-2'
      },
      buttonsStyling: false
    }).fire({
      title: title,
      text: text,
      showCancelButton: true,
      confirmButtonText: confirm,
      cancelButtonText: cancel,
      icon: 'info',
      reverseButtons: true
    }).then(function (result) {
      result.value && window.location.assign(link.attr('href'));
    });
  }).on('submit', 'form[name=confirm_item]', function (e) {
    e.preventDefault();
    var form = this;
    var link = $('button[name="confirm"]');
    var cancel = link.attr('data-trans-button-cancel') ? link.attr('data-trans-button-cancel') : 'Cancel';
    var confirm = link.attr('data-trans-button-confirm') ? link.attr('data-trans-button-confirm') : 'Yes, delete';
    var title = link.attr('data-trans-title') ? link.attr('data-trans-title') : 'Are you sure you want to delete this item?';
    Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger mr-2'
      },
      buttonsStyling: false
    }).fire({
      title: title,
      showCancelButton: true,
      confirmButtonText: confirm,
      cancelButtonText: cancel,
      icon: 'info',
      reverseButtons: true
    }).then(function (result) {
      result.value && form.submit();
    });
  });
  $('[data-toggle="tooltip"]').tooltip();
});

/***/ }),

/***/ 1:
/*!************************************************************************************************************!*\
  !*** multi ./resources/js/backend/before.js ./resources/js/backend/app.js ./resources/js/backend/after.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Applications/MAMP/htdocs/bluesky/resources/js/backend/before.js */"./resources/js/backend/before.js");
__webpack_require__(/*! /Applications/MAMP/htdocs/bluesky/resources/js/backend/app.js */"./resources/js/backend/app.js");
module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/bluesky/resources/js/backend/after.js */"./resources/js/backend/after.js");


/***/ })

},[[1,"/js/manifest","/js/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGNvcmV1aS9jb3JldWkvZGlzdC9qcy9jb3JldWkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zd2l0Y2gvZGlzdC9qcy9ib290c3RyYXAtc3dpdGNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wYWNlL3BhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BlcmZlY3Qtc2Nyb2xsYmFyL2Rpc3QvcGVyZmVjdC1zY3JvbGxiYXIuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2FmdGVyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9iZWZvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGx1Z2lucy5qcyJdLCJuYW1lcyI6WyIkIiwib24iLCJldmVudCIsImJ1dHRvbiIsInJlbGF0ZWRUYXJnZXQiLCJhY3Rpb24iLCJhdHRyIiwibW9kYWwiLCJmaW5kIiwibG9hZCIsIndpbmRvdyIsImpRdWVyeSIsIlN3YWwiLCJfIiwiYXhpb3MiLCJyZXF1aXJlIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiYWRkRGVsZXRlRm9ybXMiLCJhcHBlbmQiLCJsZW5ndGgiLCJzdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtIiwibGluayIsImNhbmNlbCIsImNvbmZpcm0iLCJ0aXRsZSIsIm1peGluIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJmaXJlIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsImljb24iLCJyZXZlcnNlQnV0dG9ucyIsInRoZW4iLCJyZXN1bHQiLCJ2YWx1ZSIsInRleHQiLCJsb2NhdGlvbiIsImFzc2lnbiIsInRvb2x0aXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBNEQsb0JBQW9CLG1CQUFPLENBQUMsb0RBQVEsR0FBRyxtQkFBTyxDQUFDLHlGQUFtQjtBQUNoSSxFQUFFLFNBQzhGO0FBQ2hHLENBQUMsaURBQWlEOztBQUVsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyxRQUFRLG1CQUFtQixVQUFVLEVBQUUsRUFBRTtBQUM1RSxHQUFHOztBQUVIOztBQUVBO0FBQ0Esb0JBQW9CLFlBQVksRUFBRTtBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixVQUFVO0FBQ2xDLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssZ0JBQWdCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixrQkFBa0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUVBQXlFO0FBQ3pFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXVDLGlDQUFpQyxFQUFFOztBQUUxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsMkJBQTJCLG1CQUFtQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUgscUNBQXFDO0FBQ3JDOztBQUVBO0FBQ0Esa0ZBQWtGLE9BQU87O0FBRXpGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRzs7QUFFSDs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssZ0JBQWdCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLG9CQUFvQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sWUFBWSxlQUFlO0FBQ2xDO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsdURBQXVEO0FBQ3ZELEtBQUs7QUFDTCxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrREFBa0Qsa0JBQWtCLEVBQUU7O0FBRXRFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxnQkFBZ0I7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFFQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBLFlBQVk7QUFDWixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsb0JBQW9CO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsbUJBQW1CO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsU0FBUyxFQUFFO0FBQzVELEtBQUs7QUFDTDs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0EsT0FBTzs7O0FBR1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbURBQW1EOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxpQ0FBaUMsYUFBYTtBQUM5QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVywrRUFBK0U7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTLEVBQUU7O0FBRVg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUNBQXlDLEVBQUUsRUFBRSxJQUFJOztBQUVqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHlDQUF5QyxFQUFFLEVBQUUsSUFBSTs7QUFFakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxlQUFlO0FBQzVFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUMsNkJBQTZCLDBCQUEwQixZQUFZLEVBQUU7QUFDNUc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEdBQUcsZUFBZTtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdEQUFnRCxjQUFjOztBQUU5RCxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNodUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLElBQTBDO0FBQ2hELElBQUksaUNBQU8sQ0FBQyx5RUFBUSxDQUFDLG9DQUFFLE9BQU87QUFBQTtBQUFBO0FBQUEsb0dBQUM7QUFDL0IsR0FBRyxNQUFNLFlBUU47QUFDSCxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUCxvQ0FBb0MsNkNBQTZDO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsdUVBQXVFLGFBQWE7QUFDcEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLDBGQUEwRixlQUFlO0FBQ3pHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUM5dkJEO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQix5Q0FBeUMsMEJBQTBCLDJEQUEyRCxFQUFFLGtCQUFrQiwwQkFBMEIsRUFBRSxtQ0FBbUMsOEJBQThCLG9DQUFvQyxjQUFjLEVBQUU7QUFDblMsOENBQThDLGlDQUFpQyxPQUFPLE9BQU8sNkNBQTZDLEVBQUUsV0FBVzs7QUFFdko7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsV0FBVztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsV0FBVztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVB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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSwwQ0FBMEMsWUFBWTtBQUN0RDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsWUFBWTtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsWUFBWTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxZQUFZO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxZQUFZO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLFlBQVk7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFlBQVk7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLElBQTBDO0FBQ2hELElBQUksaUNBQU8sQ0FBQyw4REFBTSxDQUFDLG1DQUFFO0FBQ3JCO0FBQ0EsS0FBSztBQUFBLG9HQUFDO0FBQ04sR0FBRyxNQUFNLEVBTU47O0FBRUgsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3Q2QkQ7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUVBQXlFLGlDQUFpQztBQUMxRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDJCQUEyQixFQUFFO0FBQ3RELHdCQUF3QiwwQkFBMEIsRUFBRTtBQUNwRDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNEJBQTRCLEVBQUU7QUFDeEQsNkJBQTZCLCtCQUErQixFQUFFO0FBQzlELEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7O0FBRTdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLHdFQUF3RSxFQUFFO0FBQzNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsV0FBVyxxQkFBcUI7O0FBRTFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQiwwQ0FBMEM7QUFDOUQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvREFBb0QsK0JBQStCLEVBQUU7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJDQUEyQyxzQkFBc0IsRUFBRTtBQUNuRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlFQUF5RSxtQkFBbUI7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RSxtQkFBbUI7QUFDNUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUEsd0RBQXdELDRCQUE0QixFQUFFO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSCx3REFBd0QsNEJBQTRCLEVBQUU7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBLG9DQUFvQyxtQ0FBbUM7QUFDdkUsc0NBQXNDLDJFQUEyRTs7QUFFakg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7O0FBRTNCO0FBQ0E7O0FBRUE7QUFDQTtB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LEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7Ozs7OztBQ3ZMdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7Ozs7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QkFBYyxFQUFFO0FBTFQsS0FBWCxFQU1HQyxJQU5ILENBTVE7QUFDSk4sV0FBSyxFQUFFQSxLQURIO0FBRUpPLHNCQUFnQixFQUFFLElBRmQ7QUFHSkMsdUJBQWlCLEVBQUVULE9BSGY7QUFJSlUsc0JBQWdCLEVBQUVYLE1BSmQ7QUFLSlksVUFBSSxFQUFFLE1BTEY7QUFNSkMsb0JBQWMsRUFBRTtBQU5aLEtBTlIsRUFhR0MsSUFiSCxDQWFRLFVBQUNDLE1BQUQsRUFBWTtBQUNoQkEsWUFBTSxDQUFDQyxLQUFQLElBQWdCbEIsSUFBSSxDQUFDSCxNQUFMLEVBQWhCO0FBQ0gsS0FmRDtBQWlCSCxHQWhGRDtBQWtGQXRCLEdBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCK0MsT0FBN0I7QUFDSCxDQXJHQSxDQUFELEMiLCJmaWxlIjoiL2pzL2JhY2tlbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAgKiBDb3JlVUkgdjIuMS4xNiAoaHR0cHM6Ly9jb3JldWkuaW8pXG4gICogQ29weXJpZ2h0IDIwMTkgxYF1a2FzeiBIb2xlY3pla1xuICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9jb3JldWkuaW8pXG4gICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KGV4cG9ydHMsIHJlcXVpcmUoJ2pxdWVyeScpLCByZXF1aXJlKCdwZXJmZWN0LXNjcm9sbGJhcicpKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ2V4cG9ydHMnLCAnanF1ZXJ5JywgJ3BlcmZlY3Qtc2Nyb2xsYmFyJ10sIGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IGdsb2JhbCB8fCBzZWxmLCBmYWN0b3J5KGdsb2JhbC5jb3JldWkgPSB7fSwgZ2xvYmFsLmpRdWVyeSwgZ2xvYmFsLlBlcmZlY3RTY3JvbGxiYXIpKTtcbn0odGhpcywgKGZ1bmN0aW9uIChleHBvcnRzLCAkLCBQZXJmZWN0U2Nyb2xsYmFyKSB7ICd1c2Ugc3RyaWN0JztcblxuICAkID0gJCAmJiAkLmhhc093blByb3BlcnR5KCdkZWZhdWx0JykgPyAkWydkZWZhdWx0J10gOiAkO1xuICBQZXJmZWN0U2Nyb2xsYmFyID0gUGVyZmVjdFNjcm9sbGJhciAmJiBQZXJmZWN0U2Nyb2xsYmFyLmhhc093blByb3BlcnR5KCdkZWZhdWx0JykgPyBQZXJmZWN0U2Nyb2xsYmFyWydkZWZhdWx0J10gOiBQZXJmZWN0U2Nyb2xsYmFyO1xuXG4gIHZhciBmYWlscyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9O1xuXG4gIC8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbiAgdmFyIGRlc2NyaXB0b3JzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbiAgfSk7XG5cbiAgdmFyIGNvbW1vbmpzR2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyA6IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDoge307XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ29tbW9uanNNb2R1bGUoZm4sIG1vZHVsZSkge1xuICBcdHJldHVybiBtb2R1bGUgPSB7IGV4cG9ydHM6IHt9IH0sIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcbiAgfVxuXG4gIHZhciBjaGVjayA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBpdCAmJiBpdC5NYXRoID09IE1hdGggJiYgaXQ7XG4gIH07XG5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbiAgdmFyIGdsb2JhbF8xID1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICAgIGNoZWNrKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93KSB8fFxuICAgIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gICAgY2hlY2sodHlwZW9mIGNvbW1vbmpzR2xvYmFsID09ICdvYmplY3QnICYmIGNvbW1vbmpzR2xvYmFsKSB8fFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgIEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbiAgdmFyIGlzT2JqZWN0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbiAgfTtcblxuICB2YXIgZG9jdW1lbnQkMSA9IGdsb2JhbF8xLmRvY3VtZW50O1xuICAvLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbiAgdmFyIEVYSVNUUyA9IGlzT2JqZWN0KGRvY3VtZW50JDEpICYmIGlzT2JqZWN0KGRvY3VtZW50JDEuY3JlYXRlRWxlbWVudCk7XG5cbiAgdmFyIGRvY3VtZW50Q3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBFWElTVFMgPyBkb2N1bWVudCQxLmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG4gIH07XG5cbiAgLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxuICB2YXIgaWU4RG9tRGVmaW5lID0gIWRlc2NyaXB0b3JzICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkb2N1bWVudENyZWF0ZUVsZW1lbnQoJ2RpdicpLCAnYScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICAgIH0pLmEgIT0gNztcbiAgfSk7XG5cbiAgdmFyIGFuT2JqZWN0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgaWYgKCFpc09iamVjdChpdCkpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcihTdHJpbmcoaXQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG4gICAgfSByZXR1cm4gaXQ7XG4gIH07XG5cbiAgLy8gYFRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9wcmltaXRpdmVcbiAgLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2VcbiAgLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbiAgdmFyIHRvUHJpbWl0aXZlID0gZnVuY3Rpb24gKGlucHV0LCBQUkVGRVJSRURfU1RSSU5HKSB7XG4gICAgaWYgKCFpc09iamVjdChpbnB1dCkpIHJldHVybiBpbnB1dDtcbiAgICB2YXIgZm4sIHZhbDtcbiAgICBpZiAoUFJFRkVSUkVEX1NUUklORyAmJiB0eXBlb2YgKGZuID0gaW5wdXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgICBpZiAodHlwZW9mIChmbiA9IGlucHV0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgICBpZiAoIVBSRUZFUlJFRF9TVFJJTkcgJiYgdHlwZW9mIChmbiA9IGlucHV0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGlucHV0KSkpIHJldHVybiB2YWw7XG4gICAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xuICB9O1xuXG4gIHZhciBuYXRpdmVEZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuICAvLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XG4gIHZhciBmID0gZGVzY3JpcHRvcnMgPyBuYXRpdmVEZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgICBhbk9iamVjdChPKTtcbiAgICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gICAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gICAgaWYgKGllOERvbURlZmluZSkgdHJ5IHtcbiAgICAgIHJldHVybiBuYXRpdmVEZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gICAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCcpO1xuICAgIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICAgIHJldHVybiBPO1xuICB9O1xuXG4gIHZhciBvYmplY3REZWZpbmVQcm9wZXJ0eSA9IHtcbiAgXHRmOiBmXG4gIH07XG5cbiAgdmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICAgIHZhbHVlOiB2YWx1ZVxuICAgIH07XG4gIH07XG5cbiAgdmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IGRlc2NyaXB0b3JzID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiBvYmplY3REZWZpbmVQcm9wZXJ0eS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgdmFsdWUpKTtcbiAgfSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICAgIHJldHVybiBvYmplY3Q7XG4gIH07XG5cbiAgdmFyIHNldEdsb2JhbCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShnbG9iYWxfMSwga2V5LCB2YWx1ZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGdsb2JhbF8xW2tleV0gPSB2YWx1ZTtcbiAgICB9IHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICB2YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG4gIHZhciBzdG9yZSA9IGdsb2JhbF8xW1NIQVJFRF0gfHwgc2V0R2xvYmFsKFNIQVJFRCwge30pO1xuXG4gIHZhciBzaGFyZWRTdG9yZSA9IHN0b3JlO1xuXG4gIHZhciBzaGFyZWQgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlKSB7XG4gIChtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIHNoYXJlZFN0b3JlW2tleV0gfHwgKHNoYXJlZFN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG4gIH0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgICB2ZXJzaW9uOiAnMy4zLjQnLFxuICAgIG1vZGU6ICAnZ2xvYmFsJyxcbiAgICBjb3B5cmlnaHQ6ICfCqSAyMDE5IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xuICB9KTtcbiAgfSk7XG5cbiAgdmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5cbiAgdmFyIGhhcyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gICAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG4gIH07XG5cbiAgdmFyIGZ1bmN0aW9uVG9TdHJpbmcgPSBzaGFyZWQoJ25hdGl2ZS1mdW5jdGlvbi10by1zdHJpbmcnLCBGdW5jdGlvbi50b1N0cmluZyk7XG5cbiAgdmFyIFdlYWtNYXAgPSBnbG9iYWxfMS5XZWFrTWFwO1xuXG4gIHZhciBuYXRpdmVXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KGZ1bmN0aW9uVG9TdHJpbmcuY2FsbChXZWFrTWFwKSk7XG5cbiAgdmFyIGlkID0gMDtcbiAgdmFyIHBvc3RmaXggPSBNYXRoLnJhbmRvbSgpO1xuXG4gIHZhciB1aWQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuICdTeW1ib2woJyArIFN0cmluZyhrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5KSArICcpXycgKyAoKytpZCArIHBvc3RmaXgpLnRvU3RyaW5nKDM2KTtcbiAgfTtcblxuICB2YXIga2V5cyA9IHNoYXJlZCgna2V5cycpO1xuXG4gIHZhciBzaGFyZWRLZXkgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGtleXNba2V5XSB8fCAoa2V5c1trZXldID0gdWlkKGtleSkpO1xuICB9O1xuXG4gIHZhciBoaWRkZW5LZXlzID0ge307XG5cbiAgdmFyIFdlYWtNYXAkMSA9IGdsb2JhbF8xLldlYWtNYXA7XG4gIHZhciBzZXQsIGdldCwgaGFzJDE7XG5cbiAgdmFyIGVuZm9yY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzJDEoaXQpID8gZ2V0KGl0KSA6IHNldChpdCwge30pO1xuICB9O1xuXG4gIHZhciBnZXR0ZXJGb3IgPSBmdW5jdGlvbiAoVFlQRSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICAgIHZhciBzdGF0ZTtcbiAgICAgIGlmICghaXNPYmplY3QoaXQpIHx8IChzdGF0ZSA9IGdldChpdCkpLnR5cGUgIT09IFRZUEUpIHtcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCcpO1xuICAgICAgfSByZXR1cm4gc3RhdGU7XG4gICAgfTtcbiAgfTtcblxuICBpZiAobmF0aXZlV2Vha01hcCkge1xuICAgIHZhciBzdG9yZSQxID0gbmV3IFdlYWtNYXAkMSgpO1xuICAgIHZhciB3bWdldCA9IHN0b3JlJDEuZ2V0O1xuICAgIHZhciB3bWhhcyA9IHN0b3JlJDEuaGFzO1xuICAgIHZhciB3bXNldCA9IHN0b3JlJDEuc2V0O1xuICAgIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICAgIHdtc2V0LmNhbGwoc3RvcmUkMSwgaXQsIG1ldGFkYXRhKTtcbiAgICAgIHJldHVybiBtZXRhZGF0YTtcbiAgICB9O1xuICAgIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgICAgcmV0dXJuIHdtZ2V0LmNhbGwoc3RvcmUkMSwgaXQpIHx8IHt9O1xuICAgIH07XG4gICAgaGFzJDEgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICAgIHJldHVybiB3bWhhcy5jYWxsKHN0b3JlJDEsIGl0KTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHZhciBTVEFURSA9IHNoYXJlZEtleSgnc3RhdGUnKTtcbiAgICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gICAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KGl0LCBTVEFURSwgbWV0YWRhdGEpO1xuICAgICAgcmV0dXJuIG1ldGFkYXRhO1xuICAgIH07XG4gICAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgICByZXR1cm4gaGFzKGl0LCBTVEFURSkgPyBpdFtTVEFURV0gOiB7fTtcbiAgICB9O1xuICAgIGhhcyQxID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgICByZXR1cm4gaGFzKGl0LCBTVEFURSk7XG4gICAgfTtcbiAgfVxuXG4gIHZhciBpbnRlcm5hbFN0YXRlID0ge1xuICAgIHNldDogc2V0LFxuICAgIGdldDogZ2V0LFxuICAgIGhhczogaGFzJDEsXG4gICAgZW5mb3JjZTogZW5mb3JjZSxcbiAgICBnZXR0ZXJGb3I6IGdldHRlckZvclxuICB9O1xuXG4gIHZhciByZWRlZmluZSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgdmFyIGdldEludGVybmFsU3RhdGUgPSBpbnRlcm5hbFN0YXRlLmdldDtcbiAgdmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gaW50ZXJuYWxTdGF0ZS5lbmZvcmNlO1xuICB2YXIgVEVNUExBVEUgPSBTdHJpbmcoZnVuY3Rpb25Ub1N0cmluZykuc3BsaXQoJ3RvU3RyaW5nJyk7XG5cbiAgc2hhcmVkKCdpbnNwZWN0U291cmNlJywgZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uVG9TdHJpbmcuY2FsbChpdCk7XG4gIH0pO1xuXG4gIChtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgdmFyIHVuc2FmZSA9IG9wdGlvbnMgPyAhIW9wdGlvbnMudW5zYWZlIDogZmFsc2U7XG4gICAgdmFyIHNpbXBsZSA9IG9wdGlvbnMgPyAhIW9wdGlvbnMuZW51bWVyYWJsZSA6IGZhbHNlO1xuICAgIHZhciBub1RhcmdldEdldCA9IG9wdGlvbnMgPyAhIW9wdGlvbnMubm9UYXJnZXRHZXQgOiBmYWxzZTtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Yga2V5ID09ICdzdHJpbmcnICYmICFoYXModmFsdWUsICduYW1lJykpIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSh2YWx1ZSwgJ25hbWUnLCBrZXkpO1xuICAgICAgZW5mb3JjZUludGVybmFsU3RhdGUodmFsdWUpLnNvdXJjZSA9IFRFTVBMQVRFLmpvaW4odHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/IGtleSA6ICcnKTtcbiAgICB9XG4gICAgaWYgKE8gPT09IGdsb2JhbF8xKSB7XG4gICAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICAgIGVsc2Ugc2V0R2xvYmFsKGtleSwgdmFsdWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoIXVuc2FmZSkge1xuICAgICAgZGVsZXRlIE9ba2V5XTtcbiAgICB9IGVsc2UgaWYgKCFub1RhcmdldEdldCAmJiBPW2tleV0pIHtcbiAgICAgIHNpbXBsZSA9IHRydWU7XG4gICAgfVxuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KE8sIGtleSwgdmFsdWUpO1xuICAvLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbiAgfSkoRnVuY3Rpb24ucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBmdW5jdGlvblRvU3RyaW5nLmNhbGwodGhpcyk7XG4gIH0pO1xuICB9KTtcblxuICB2YXIgbmF0aXZlU3ltYm9sID0gISFPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gQ2hyb21lIDM4IFN5bWJvbCBoYXMgaW5jb3JyZWN0IHRvU3RyaW5nIGNvbnZlcnNpb25cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICByZXR1cm4gIVN0cmluZyhTeW1ib2woKSk7XG4gIH0pO1xuXG4gIHZhciBTeW1ib2wkMSA9IGdsb2JhbF8xLlN5bWJvbDtcbiAgdmFyIHN0b3JlJDIgPSBzaGFyZWQoJ3drcycpO1xuXG4gIHZhciB3ZWxsS25vd25TeW1ib2wgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiBzdG9yZSQyW25hbWVdIHx8IChzdG9yZSQyW25hbWVdID0gbmF0aXZlU3ltYm9sICYmIFN5bWJvbCQxW25hbWVdXG4gICAgICB8fCAobmF0aXZlU3ltYm9sID8gU3ltYm9sJDEgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbiAgfTtcblxuICAvLyBgUmVnRXhwLnByb3RvdHlwZS5mbGFnc2AgZ2V0dGVyIGltcGxlbWVudGF0aW9uXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWdldC1yZWdleHAucHJvdG90eXBlLmZsYWdzXG4gIHZhciByZWdleHBGbGFncyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGhhdCA9IGFuT2JqZWN0KHRoaXMpO1xuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICBpZiAodGhhdC5nbG9iYWwpIHJlc3VsdCArPSAnZyc7XG4gICAgaWYgKHRoYXQuaWdub3JlQ2FzZSkgcmVzdWx0ICs9ICdpJztcbiAgICBpZiAodGhhdC5tdWx0aWxpbmUpIHJlc3VsdCArPSAnbSc7XG4gICAgaWYgKHRoYXQuZG90QWxsKSByZXN1bHQgKz0gJ3MnO1xuICAgIGlmICh0aGF0LnVuaWNvZGUpIHJlc3VsdCArPSAndSc7XG4gICAgaWYgKHRoYXQuc3RpY2t5KSByZXN1bHQgKz0gJ3knO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgdmFyIG5hdGl2ZUV4ZWMgPSBSZWdFeHAucHJvdG90eXBlLmV4ZWM7XG4gIC8vIFRoaXMgYWx3YXlzIHJlZmVycyB0byB0aGUgbmF0aXZlIGltcGxlbWVudGF0aW9uLCBiZWNhdXNlIHRoZVxuICAvLyBTdHJpbmcjcmVwbGFjZSBwb2x5ZmlsbCB1c2VzIC4vZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYy5qcyxcbiAgLy8gd2hpY2ggbG9hZHMgdGhpcyBmaWxlIGJlZm9yZSBwYXRjaGluZyB0aGUgbWV0aG9kLlxuICB2YXIgbmF0aXZlUmVwbGFjZSA9IFN0cmluZy5wcm90b3R5cGUucmVwbGFjZTtcblxuICB2YXIgcGF0Y2hlZEV4ZWMgPSBuYXRpdmVFeGVjO1xuXG4gIHZhciBVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciByZTEgPSAvYS87XG4gICAgdmFyIHJlMiA9IC9iKi9nO1xuICAgIG5hdGl2ZUV4ZWMuY2FsbChyZTEsICdhJyk7XG4gICAgbmF0aXZlRXhlYy5jYWxsKHJlMiwgJ2EnKTtcbiAgICByZXR1cm4gcmUxLmxhc3RJbmRleCAhPT0gMCB8fCByZTIubGFzdEluZGV4ICE9PSAwO1xuICB9KSgpO1xuXG4gIC8vIG5vbnBhcnRpY2lwYXRpbmcgY2FwdHVyaW5nIGdyb3VwLCBjb3BpZWQgZnJvbSBlczUtc2hpbSdzIFN0cmluZyNzcGxpdCBwYXRjaC5cbiAgdmFyIE5QQ0dfSU5DTFVERUQgPSAvKCk/Py8uZXhlYygnJylbMV0gIT09IHVuZGVmaW5lZDtcblxuICB2YXIgUEFUQ0ggPSBVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgfHwgTlBDR19JTkNMVURFRDtcblxuICBpZiAoUEFUQ0gpIHtcbiAgICBwYXRjaGVkRXhlYyA9IGZ1bmN0aW9uIGV4ZWMoc3RyKSB7XG4gICAgICB2YXIgcmUgPSB0aGlzO1xuICAgICAgdmFyIGxhc3RJbmRleCwgcmVDb3B5LCBtYXRjaCwgaTtcblxuICAgICAgaWYgKE5QQ0dfSU5DTFVERUQpIHtcbiAgICAgICAgcmVDb3B5ID0gbmV3IFJlZ0V4cCgnXicgKyByZS5zb3VyY2UgKyAnJCg/IVxcXFxzKScsIHJlZ2V4cEZsYWdzLmNhbGwocmUpKTtcbiAgICAgIH1cbiAgICAgIGlmIChVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcpIGxhc3RJbmRleCA9IHJlLmxhc3RJbmRleDtcblxuICAgICAgbWF0Y2ggPSBuYXRpdmVFeGVjLmNhbGwocmUsIHN0cik7XG5cbiAgICAgIGlmIChVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgJiYgbWF0Y2gpIHtcbiAgICAgICAgcmUubGFzdEluZGV4ID0gcmUuZ2xvYmFsID8gbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGggOiBsYXN0SW5kZXg7XG4gICAgICB9XG4gICAgICBpZiAoTlBDR19JTkNMVURFRCAmJiBtYXRjaCAmJiBtYXRjaC5sZW5ndGggPiAxKSB7XG4gICAgICAgIC8vIEZpeCBicm93c2VycyB3aG9zZSBgZXhlY2AgbWV0aG9kcyBkb24ndCBjb25zaXN0ZW50bHkgcmV0dXJuIGB1bmRlZmluZWRgXG4gICAgICAgIC8vIGZvciBOUENHLCBsaWtlIElFOC4gTk9URTogVGhpcyBkb2Vzbicgd29yayBmb3IgLyguPyk/L1xuICAgICAgICBuYXRpdmVSZXBsYWNlLmNhbGwobWF0Y2hbMF0sIHJlQ29weSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGZvciAoaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoIC0gMjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzW2ldID09PSB1bmRlZmluZWQpIG1hdGNoW2ldID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtYXRjaDtcbiAgICB9O1xuICB9XG5cbiAgdmFyIHJlZ2V4cEV4ZWMgPSBwYXRjaGVkRXhlYztcblxuICB2YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG4gIHZhciBSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gI3JlcGxhY2UgbmVlZHMgYnVpbHQtaW4gc3VwcG9ydCBmb3IgbmFtZWQgZ3JvdXBzLlxuICAgIC8vICNtYXRjaCB3b3JrcyBmaW5lIGJlY2F1c2UgaXQganVzdCByZXR1cm4gdGhlIGV4ZWMgcmVzdWx0cywgZXZlbiBpZiBpdCBoYXNcbiAgICAvLyBhIFwiZ3JvcHNcIiBwcm9wZXJ0eS5cbiAgICB2YXIgcmUgPSAvLi87XG4gICAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgIHJlc3VsdC5ncm91cHMgPSB7IGE6ICc3JyB9O1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHJldHVybiAnJy5yZXBsYWNlKHJlLCAnJDxhPicpICE9PSAnNyc7XG4gIH0pO1xuXG4gIC8vIENocm9tZSA1MSBoYXMgYSBidWdneSBcInNwbGl0XCIgaW1wbGVtZW50YXRpb24gd2hlbiBSZWdFeHAjZXhlYyAhPT0gbmF0aXZlRXhlY1xuICAvLyBXZWV4IEpTIGhhcyBmcm96ZW4gYnVpbHQtaW4gcHJvdG90eXBlcywgc28gdXNlIHRyeSAvIGNhdGNoIHdyYXBwZXJcbiAgdmFyIFNQTElUX1dPUktTX1dJVEhfT1ZFUldSSVRURU5fRVhFQyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlID0gLyg/OikvO1xuICAgIHZhciBvcmlnaW5hbEV4ZWMgPSByZS5leGVjO1xuICAgIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBvcmlnaW5hbEV4ZWMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgICB2YXIgcmVzdWx0ID0gJ2FiJy5zcGxpdChyZSk7XG4gICAgcmV0dXJuIHJlc3VsdC5sZW5ndGggIT09IDIgfHwgcmVzdWx0WzBdICE9PSAnYScgfHwgcmVzdWx0WzFdICE9PSAnYic7XG4gIH0pO1xuXG4gIHZhciBmaXhSZWdleHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IGZ1bmN0aW9uIChLRVksIGxlbmd0aCwgZXhlYywgc2hhbSkge1xuICAgIHZhciBTWU1CT0wgPSB3ZWxsS25vd25TeW1ib2woS0VZKTtcblxuICAgIHZhciBERUxFR0FURVNfVE9fU1lNQk9MID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFN0cmluZyBtZXRob2RzIGNhbGwgc3ltYm9sLW5hbWVkIFJlZ0VwIG1ldGhvZHNcbiAgICAgIHZhciBPID0ge307XG4gICAgICBPW1NZTUJPTF0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9O1xuICAgICAgcmV0dXJuICcnW0tFWV0oTykgIT0gNztcbiAgICB9KTtcblxuICAgIHZhciBERUxFR0FURVNfVE9fRVhFQyA9IERFTEVHQVRFU19UT19TWU1CT0wgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFN5bWJvbC1uYW1lZCBSZWdFeHAgbWV0aG9kcyBjYWxsIC5leGVjXG4gICAgICB2YXIgZXhlY0NhbGxlZCA9IGZhbHNlO1xuICAgICAgdmFyIHJlID0gL2EvO1xuXG4gICAgICBpZiAoS0VZID09PSAnc3BsaXQnKSB7XG4gICAgICAgIC8vIFdlIGNhbid0IHVzZSByZWFsIHJlZ2V4IGhlcmUgc2luY2UgaXQgY2F1c2VzIGRlb3B0aW1pemF0aW9uXG4gICAgICAgIC8vIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uIGluIFY4XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8zMDZcbiAgICAgICAgcmUgPSB7fTtcbiAgICAgICAgLy8gUmVnRXhwW0BAc3BsaXRdIGRvZXNuJ3QgY2FsbCB0aGUgcmVnZXgncyBleGVjIG1ldGhvZCwgYnV0IGZpcnN0IGNyZWF0ZXNcbiAgICAgICAgLy8gYSBuZXcgb25lLiBXZSBuZWVkIHRvIHJldHVybiB0aGUgcGF0Y2hlZCByZWdleCB3aGVuIGNyZWF0aW5nIHRoZSBuZXcgb25lLlxuICAgICAgICByZS5jb25zdHJ1Y3RvciA9IHt9O1xuICAgICAgICByZS5jb25zdHJ1Y3RvcltTUEVDSUVTXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlOyB9O1xuICAgICAgICByZS5mbGFncyA9ICcnO1xuICAgICAgICByZVtTWU1CT0xdID0gLy4vW1NZTUJPTF07XG4gICAgICB9XG5cbiAgICAgIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7IGV4ZWNDYWxsZWQgPSB0cnVlOyByZXR1cm4gbnVsbDsgfTtcblxuICAgICAgcmVbU1lNQk9MXSgnJyk7XG4gICAgICByZXR1cm4gIWV4ZWNDYWxsZWQ7XG4gICAgfSk7XG5cbiAgICBpZiAoXG4gICAgICAhREVMRUdBVEVTX1RPX1NZTUJPTCB8fFxuICAgICAgIURFTEVHQVRFU19UT19FWEVDIHx8XG4gICAgICAoS0VZID09PSAncmVwbGFjZScgJiYgIVJFUExBQ0VfU1VQUE9SVFNfTkFNRURfR1JPVVBTKSB8fFxuICAgICAgKEtFWSA9PT0gJ3NwbGl0JyAmJiAhU1BMSVRfV09SS1NfV0lUSF9PVkVSV1JJVFRFTl9FWEVDKVxuICAgICkge1xuICAgICAgdmFyIG5hdGl2ZVJlZ0V4cE1ldGhvZCA9IC8uL1tTWU1CT0xdO1xuICAgICAgdmFyIG1ldGhvZHMgPSBleGVjKFNZTUJPTCwgJydbS0VZXSwgZnVuY3Rpb24gKG5hdGl2ZU1ldGhvZCwgcmVnZXhwLCBzdHIsIGFyZzIsIGZvcmNlU3RyaW5nTWV0aG9kKSB7XG4gICAgICAgIGlmIChyZWdleHAuZXhlYyA9PT0gcmVnZXhwRXhlYykge1xuICAgICAgICAgIGlmIChERUxFR0FURVNfVE9fU1lNQk9MICYmICFmb3JjZVN0cmluZ01ldGhvZCkge1xuICAgICAgICAgICAgLy8gVGhlIG5hdGl2ZSBTdHJpbmcgbWV0aG9kIGFscmVhZHkgZGVsZWdhdGVzIHRvIEBAbWV0aG9kICh0aGlzXG4gICAgICAgICAgICAvLyBwb2x5ZmlsbGVkIGZ1bmN0aW9uKSwgbGVhc2luZyB0byBpbmZpbml0ZSByZWN1cnNpb24uXG4gICAgICAgICAgICAvLyBXZSBhdm9pZCBpdCBieSBkaXJlY3RseSBjYWxsaW5nIHRoZSBuYXRpdmUgQEBtZXRob2QgbWV0aG9kLlxuICAgICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IG5hdGl2ZVJlZ0V4cE1ldGhvZC5jYWxsKHJlZ2V4cCwgc3RyLCBhcmcyKSB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogbmF0aXZlTWV0aG9kLmNhbGwoc3RyLCByZWdleHAsIGFyZzIpIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgZG9uZTogZmFsc2UgfTtcbiAgICAgIH0pO1xuICAgICAgdmFyIHN0cmluZ01ldGhvZCA9IG1ldGhvZHNbMF07XG4gICAgICB2YXIgcmVnZXhNZXRob2QgPSBtZXRob2RzWzFdO1xuXG4gICAgICByZWRlZmluZShTdHJpbmcucHJvdG90eXBlLCBLRVksIHN0cmluZ01ldGhvZCk7XG4gICAgICByZWRlZmluZShSZWdFeHAucHJvdG90eXBlLCBTWU1CT0wsIGxlbmd0aCA9PSAyXG4gICAgICAgIC8vIDIxLjIuNS44IFJlZ0V4cC5wcm90b3R5cGVbQEByZXBsYWNlXShzdHJpbmcsIHJlcGxhY2VWYWx1ZSlcbiAgICAgICAgLy8gMjEuMi41LjExIFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF0oc3RyaW5nLCBsaW1pdClcbiAgICAgICAgPyBmdW5jdGlvbiAoc3RyaW5nLCBhcmcpIHsgcmV0dXJuIHJlZ2V4TWV0aG9kLmNhbGwoc3RyaW5nLCB0aGlzLCBhcmcpOyB9XG4gICAgICAgIC8vIDIxLjIuNS42IFJlZ0V4cC5wcm90b3R5cGVbQEBtYXRjaF0oc3RyaW5nKVxuICAgICAgICAvLyAyMS4yLjUuOSBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXShzdHJpbmcpXG4gICAgICAgIDogZnVuY3Rpb24gKHN0cmluZykgeyByZXR1cm4gcmVnZXhNZXRob2QuY2FsbChzdHJpbmcsIHRoaXMpOyB9XG4gICAgICApO1xuICAgICAgaWYgKHNoYW0pIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShSZWdFeHAucHJvdG90eXBlW1NZTUJPTF0sICdzaGFtJywgdHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG4gIHZhciBjbGFzc29mUmF3ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbiAgfTtcblxuICB2YXIgTUFUQ0ggPSB3ZWxsS25vd25TeW1ib2woJ21hdGNoJyk7XG5cbiAgLy8gYElzUmVnRXhwYCBhYnN0cmFjdCBvcGVyYXRpb25cbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtaXNyZWdleHBcbiAgdmFyIGlzUmVnZXhwID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIGlzUmVnRXhwO1xuICAgIHJldHVybiBpc09iamVjdChpdCkgJiYgKChpc1JlZ0V4cCA9IGl0W01BVENIXSkgIT09IHVuZGVmaW5lZCA/ICEhaXNSZWdFeHAgOiBjbGFzc29mUmF3KGl0KSA9PSAnUmVnRXhwJyk7XG4gIH07XG5cbiAgLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG4gIHZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gXCIgKyBpdCk7XG4gICAgcmV0dXJuIGl0O1xuICB9O1xuXG4gIHZhciBhRnVuY3Rpb24gPSBmdW5jdGlvbiAoaXQpIHtcbiAgICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcihTdHJpbmcoaXQpICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICAgIH0gcmV0dXJuIGl0O1xuICB9O1xuXG4gIHZhciBTUEVDSUVTJDEgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxuICAvLyBgU3BlY2llc0NvbnN0cnVjdG9yYCBhYnN0cmFjdCBvcGVyYXRpb25cbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3BlY2llc2NvbnN0cnVjdG9yXG4gIHZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSBmdW5jdGlvbiAoTywgZGVmYXVsdENvbnN0cnVjdG9yKSB7XG4gICAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgUztcbiAgICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFUyQxXSkgPT0gdW5kZWZpbmVkID8gZGVmYXVsdENvbnN0cnVjdG9yIDogYUZ1bmN0aW9uKFMpO1xuICB9O1xuXG4gIHZhciBjZWlsID0gTWF0aC5jZWlsO1xuICB2YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4gIC8vIGBUb0ludGVnZXJgIGFic3RyYWN0IG9wZXJhdGlvblxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b2ludGVnZXJcbiAgdmFyIHRvSW50ZWdlciA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICAgIHJldHVybiBpc05hTihhcmd1bWVudCA9ICthcmd1bWVudCkgPyAwIDogKGFyZ3VtZW50ID4gMCA/IGZsb29yIDogY2VpbCkoYXJndW1lbnQpO1xuICB9O1xuXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgY29kZVBvaW50QXQsIGF0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbiAgdmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChDT05WRVJUX1RPX1NUUklORykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIHBvcykge1xuICAgICAgdmFyIFMgPSBTdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSgkdGhpcykpO1xuICAgICAgdmFyIHBvc2l0aW9uID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgICB2YXIgc2l6ZSA9IFMubGVuZ3RoO1xuICAgICAgdmFyIGZpcnN0LCBzZWNvbmQ7XG4gICAgICBpZiAocG9zaXRpb24gPCAwIHx8IHBvc2l0aW9uID49IHNpemUpIHJldHVybiBDT05WRVJUX1RPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgICAgZmlyc3QgPSBTLmNoYXJDb2RlQXQocG9zaXRpb24pO1xuICAgICAgcmV0dXJuIGZpcnN0IDwgMHhEODAwIHx8IGZpcnN0ID4gMHhEQkZGIHx8IHBvc2l0aW9uICsgMSA9PT0gc2l6ZVxuICAgICAgICB8fCAoc2Vjb25kID0gUy5jaGFyQ29kZUF0KHBvc2l0aW9uICsgMSkpIDwgMHhEQzAwIHx8IHNlY29uZCA+IDB4REZGRlxuICAgICAgICAgID8gQ09OVkVSVF9UT19TVFJJTkcgPyBTLmNoYXJBdChwb3NpdGlvbikgOiBmaXJzdFxuICAgICAgICAgIDogQ09OVkVSVF9UT19TVFJJTkcgPyBTLnNsaWNlKHBvc2l0aW9uLCBwb3NpdGlvbiArIDIpIDogKGZpcnN0IC0gMHhEODAwIDw8IDEwKSArIChzZWNvbmQgLSAweERDMDApICsgMHgxMDAwMDtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBzdHJpbmdNdWx0aWJ5dGUgPSB7XG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuY29kZVBvaW50QXRgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuY29kZXBvaW50YXRcbiAgICBjb2RlQXQ6IGNyZWF0ZU1ldGhvZChmYWxzZSksXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuYXRgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRoaWFzYnluZW5zL1N0cmluZy5wcm90b3R5cGUuYXRcbiAgICBjaGFyQXQ6IGNyZWF0ZU1ldGhvZCh0cnVlKVxuICB9O1xuXG4gIHZhciBjaGFyQXQgPSBzdHJpbmdNdWx0aWJ5dGUuY2hhckF0O1xuXG4gIC8vIGBBZHZhbmNlU3RyaW5nSW5kZXhgIGFic3RyYWN0IG9wZXJhdGlvblxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hZHZhbmNlc3RyaW5naW5kZXhcbiAgdmFyIGFkdmFuY2VTdHJpbmdJbmRleCA9IGZ1bmN0aW9uIChTLCBpbmRleCwgdW5pY29kZSkge1xuICAgIHJldHVybiBpbmRleCArICh1bmljb2RlID8gY2hhckF0KFMsIGluZGV4KS5sZW5ndGggOiAxKTtcbiAgfTtcblxuICB2YXIgbWluID0gTWF0aC5taW47XG5cbiAgLy8gYFRvTGVuZ3RoYCBhYnN0cmFjdCBvcGVyYXRpb25cbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9sZW5ndGhcbiAgdmFyIHRvTGVuZ3RoID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50ID4gMCA/IG1pbih0b0ludGVnZXIoYXJndW1lbnQpLCAweDFGRkZGRkZGRkZGRkZGKSA6IDA7IC8vIDIgKiogNTMgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbiAgfTtcblxuICAvLyBgUmVnRXhwRXhlY2AgYWJzdHJhY3Qgb3BlcmF0aW9uXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cGV4ZWNcbiAgdmFyIHJlZ2V4cEV4ZWNBYnN0cmFjdCA9IGZ1bmN0aW9uIChSLCBTKSB7XG4gICAgdmFyIGV4ZWMgPSBSLmV4ZWM7XG4gICAgaWYgKHR5cGVvZiBleGVjID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gZXhlYy5jYWxsKFIsIFMpO1xuICAgICAgaWYgKHR5cGVvZiByZXN1bHQgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignUmVnRXhwIGV4ZWMgbWV0aG9kIHJldHVybmVkIHNvbWV0aGluZyBvdGhlciB0aGFuIGFuIE9iamVjdCBvciBudWxsJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGlmIChjbGFzc29mUmF3KFIpICE9PSAnUmVnRXhwJykge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdSZWdFeHAjZXhlYyBjYWxsZWQgb24gaW5jb21wYXRpYmxlIHJlY2VpdmVyJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZ2V4cEV4ZWMuY2FsbChSLCBTKTtcbiAgfTtcblxuICB2YXIgYXJyYXlQdXNoID0gW10ucHVzaDtcbiAgdmFyIG1pbiQxID0gTWF0aC5taW47XG4gIHZhciBNQVhfVUlOVDMyID0gMHhGRkZGRkZGRjtcblxuICAvLyBiYWJlbC1taW5pZnkgdHJhbnNwaWxlcyBSZWdFeHAoJ3gnLCAneScpIC0+IC94L3kgYW5kIGl0IGNhdXNlcyBTeW50YXhFcnJvclxuICB2YXIgU1VQUE9SVFNfWSA9ICFmYWlscyhmdW5jdGlvbiAoKSB7IHJldHVybiAhUmVnRXhwKE1BWF9VSU5UMzIsICd5Jyk7IH0pO1xuXG4gIC8vIEBAc3BsaXQgbG9naWNcbiAgZml4UmVnZXhwV2VsbEtub3duU3ltYm9sTG9naWMoJ3NwbGl0JywgMiwgZnVuY3Rpb24gKFNQTElULCBuYXRpdmVTcGxpdCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gICAgdmFyIGludGVybmFsU3BsaXQ7XG4gICAgaWYgKFxuICAgICAgJ2FiYmMnLnNwbGl0KC8oYikqLylbMV0gPT0gJ2MnIHx8XG4gICAgICAndGVzdCcuc3BsaXQoLyg/OikvLCAtMSkubGVuZ3RoICE9IDQgfHxcbiAgICAgICdhYicuc3BsaXQoLyg/OmFiKSovKS5sZW5ndGggIT0gMiB8fFxuICAgICAgJy4nLnNwbGl0KC8oLj8pKC4/KS8pLmxlbmd0aCAhPSA0IHx8XG4gICAgICAnLicuc3BsaXQoLygpKCkvKS5sZW5ndGggPiAxIHx8XG4gICAgICAnJy5zcGxpdCgvLj8vKS5sZW5ndGhcbiAgICApIHtcbiAgICAgIC8vIGJhc2VkIG9uIGVzNS1zaGltIGltcGxlbWVudGF0aW9uLCBuZWVkIHRvIHJld29yayBpdFxuICAgICAgaW50ZXJuYWxTcGxpdCA9IGZ1bmN0aW9uIChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICAgIHZhciBzdHJpbmcgPSBTdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKSk7XG4gICAgICAgIHZhciBsaW0gPSBsaW1pdCA9PT0gdW5kZWZpbmVkID8gTUFYX1VJTlQzMiA6IGxpbWl0ID4+PiAwO1xuICAgICAgICBpZiAobGltID09PSAwKSByZXR1cm4gW107XG4gICAgICAgIGlmIChzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCkgcmV0dXJuIFtzdHJpbmddO1xuICAgICAgICAvLyBJZiBgc2VwYXJhdG9yYCBpcyBub3QgYSByZWdleCwgdXNlIG5hdGl2ZSBzcGxpdFxuICAgICAgICBpZiAoIWlzUmVnZXhwKHNlcGFyYXRvcikpIHtcbiAgICAgICAgICByZXR1cm4gbmF0aXZlU3BsaXQuY2FsbChzdHJpbmcsIHNlcGFyYXRvciwgbGltKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3V0cHV0ID0gW107XG4gICAgICAgIHZhciBmbGFncyA9IChzZXBhcmF0b3IuaWdub3JlQ2FzZSA/ICdpJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IubXVsdGlsaW5lID8gJ20nIDogJycpICtcbiAgICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci51bmljb2RlID8gJ3UnIDogJycpICtcbiAgICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci5zdGlja3kgPyAneScgOiAnJyk7XG4gICAgICAgIHZhciBsYXN0TGFzdEluZGV4ID0gMDtcbiAgICAgICAgLy8gTWFrZSBgZ2xvYmFsYCBhbmQgYXZvaWQgYGxhc3RJbmRleGAgaXNzdWVzIGJ5IHdvcmtpbmcgd2l0aCBhIGNvcHlcbiAgICAgICAgdmFyIHNlcGFyYXRvckNvcHkgPSBuZXcgUmVnRXhwKHNlcGFyYXRvci5zb3VyY2UsIGZsYWdzICsgJ2cnKTtcbiAgICAgICAgdmFyIG1hdGNoLCBsYXN0SW5kZXgsIGxhc3RMZW5ndGg7XG4gICAgICAgIHdoaWxlIChtYXRjaCA9IHJlZ2V4cEV4ZWMuY2FsbChzZXBhcmF0b3JDb3B5LCBzdHJpbmcpKSB7XG4gICAgICAgICAgbGFzdEluZGV4ID0gc2VwYXJhdG9yQ29weS5sYXN0SW5kZXg7XG4gICAgICAgICAgaWYgKGxhc3RJbmRleCA+IGxhc3RMYXN0SW5kZXgpIHtcbiAgICAgICAgICAgIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4LCBtYXRjaC5pbmRleCkpO1xuICAgICAgICAgICAgaWYgKG1hdGNoLmxlbmd0aCA+IDEgJiYgbWF0Y2guaW5kZXggPCBzdHJpbmcubGVuZ3RoKSBhcnJheVB1c2guYXBwbHkob3V0cHV0LCBtYXRjaC5zbGljZSgxKSk7XG4gICAgICAgICAgICBsYXN0TGVuZ3RoID0gbWF0Y2hbMF0ubGVuZ3RoO1xuICAgICAgICAgICAgbGFzdExhc3RJbmRleCA9IGxhc3RJbmRleDtcbiAgICAgICAgICAgIGlmIChvdXRwdXQubGVuZ3RoID49IGxpbSkgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzZXBhcmF0b3JDb3B5Lmxhc3RJbmRleCA9PT0gbWF0Y2guaW5kZXgpIHNlcGFyYXRvckNvcHkubGFzdEluZGV4Kys7IC8vIEF2b2lkIGFuIGluZmluaXRlIGxvb3BcbiAgICAgICAgfVxuICAgICAgICBpZiAobGFzdExhc3RJbmRleCA9PT0gc3RyaW5nLmxlbmd0aCkge1xuICAgICAgICAgIGlmIChsYXN0TGVuZ3RoIHx8ICFzZXBhcmF0b3JDb3B5LnRlc3QoJycpKSBvdXRwdXQucHVzaCgnJyk7XG4gICAgICAgIH0gZWxzZSBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCkpO1xuICAgICAgICByZXR1cm4gb3V0cHV0Lmxlbmd0aCA+IGxpbSA/IG91dHB1dC5zbGljZSgwLCBsaW0pIDogb3V0cHV0O1xuICAgICAgfTtcbiAgICAvLyBDaGFrcmEsIFY4XG4gICAgfSBlbHNlIGlmICgnMCcuc3BsaXQodW5kZWZpbmVkLCAwKS5sZW5ndGgpIHtcbiAgICAgIGludGVybmFsU3BsaXQgPSBmdW5jdGlvbiAoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgICByZXR1cm4gc2VwYXJhdG9yID09PSB1bmRlZmluZWQgJiYgbGltaXQgPT09IDAgPyBbXSA6IG5hdGl2ZVNwbGl0LmNhbGwodGhpcywgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgICB9O1xuICAgIH0gZWxzZSBpbnRlcm5hbFNwbGl0ID0gbmF0aXZlU3BsaXQ7XG5cbiAgICByZXR1cm4gW1xuICAgICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc3BsaXRgIG1ldGhvZFxuICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zcGxpdFxuICAgICAgZnVuY3Rpb24gc3BsaXQoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICAgIHZhciBzcGxpdHRlciA9IHNlcGFyYXRvciA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZXBhcmF0b3JbU1BMSVRdO1xuICAgICAgICByZXR1cm4gc3BsaXR0ZXIgIT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gc3BsaXR0ZXIuY2FsbChzZXBhcmF0b3IsIE8sIGxpbWl0KVxuICAgICAgICAgIDogaW50ZXJuYWxTcGxpdC5jYWxsKFN0cmluZyhPKSwgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgICB9LFxuICAgICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF1gIG1ldGhvZFxuICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNwbGl0XG4gICAgICAvL1xuICAgICAgLy8gTk9URTogVGhpcyBjYW5ub3QgYmUgcHJvcGVybHkgcG9seWZpbGxlZCBpbiBlbmdpbmVzIHRoYXQgZG9uJ3Qgc3VwcG9ydFxuICAgICAgLy8gdGhlICd5JyBmbGFnLlxuICAgICAgZnVuY3Rpb24gKHJlZ2V4cCwgbGltaXQpIHtcbiAgICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShpbnRlcm5hbFNwbGl0LCByZWdleHAsIHRoaXMsIGxpbWl0LCBpbnRlcm5hbFNwbGl0ICE9PSBuYXRpdmVTcGxpdCk7XG4gICAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgICB2YXIgcnggPSBhbk9iamVjdChyZWdleHApO1xuICAgICAgICB2YXIgUyA9IFN0cmluZyh0aGlzKTtcbiAgICAgICAgdmFyIEMgPSBzcGVjaWVzQ29uc3RydWN0b3IocngsIFJlZ0V4cCk7XG5cbiAgICAgICAgdmFyIHVuaWNvZGVNYXRjaGluZyA9IHJ4LnVuaWNvZGU7XG4gICAgICAgIHZhciBmbGFncyA9IChyeC5pZ25vcmVDYXNlID8gJ2knIDogJycpICtcbiAgICAgICAgICAgICAgICAgICAgKHJ4Lm11bHRpbGluZSA/ICdtJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAgIChyeC51bmljb2RlID8gJ3UnIDogJycpICtcbiAgICAgICAgICAgICAgICAgICAgKFNVUFBPUlRTX1kgPyAneScgOiAnZycpO1xuXG4gICAgICAgIC8vIF4oPyArIHJ4ICsgKSBpcyBuZWVkZWQsIGluIGNvbWJpbmF0aW9uIHdpdGggc29tZSBTIHNsaWNpbmcsIHRvXG4gICAgICAgIC8vIHNpbXVsYXRlIHRoZSAneScgZmxhZy5cbiAgICAgICAgdmFyIHNwbGl0dGVyID0gbmV3IEMoU1VQUE9SVFNfWSA/IHJ4IDogJ14oPzonICsgcnguc291cmNlICsgJyknLCBmbGFncyk7XG4gICAgICAgIHZhciBsaW0gPSBsaW1pdCA9PT0gdW5kZWZpbmVkID8gTUFYX1VJTlQzMiA6IGxpbWl0ID4+PiAwO1xuICAgICAgICBpZiAobGltID09PSAwKSByZXR1cm4gW107XG4gICAgICAgIGlmIChTLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJlZ2V4cEV4ZWNBYnN0cmFjdChzcGxpdHRlciwgUykgPT09IG51bGwgPyBbU10gOiBbXTtcbiAgICAgICAgdmFyIHAgPSAwO1xuICAgICAgICB2YXIgcSA9IDA7XG4gICAgICAgIHZhciBBID0gW107XG4gICAgICAgIHdoaWxlIChxIDwgUy5sZW5ndGgpIHtcbiAgICAgICAgICBzcGxpdHRlci5sYXN0SW5kZXggPSBTVVBQT1JUU19ZID8gcSA6IDA7XG4gICAgICAgICAgdmFyIHogPSByZWdleHBFeGVjQWJzdHJhY3Qoc3BsaXR0ZXIsIFNVUFBPUlRTX1kgPyBTIDogUy5zbGljZShxKSk7XG4gICAgICAgICAgdmFyIGU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgeiA9PT0gbnVsbCB8fFxuICAgICAgICAgICAgKGUgPSBtaW4kMSh0b0xlbmd0aChzcGxpdHRlci5sYXN0SW5kZXggKyAoU1VQUE9SVFNfWSA/IDAgOiBxKSksIFMubGVuZ3RoKSkgPT09IHBcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHEgPSBhZHZhbmNlU3RyaW5nSW5kZXgoUywgcSwgdW5pY29kZU1hdGNoaW5nKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgQS5wdXNoKFMuc2xpY2UocCwgcSkpO1xuICAgICAgICAgICAgaWYgKEEubGVuZ3RoID09PSBsaW0pIHJldHVybiBBO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gei5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgQS5wdXNoKHpbaV0pO1xuICAgICAgICAgICAgICBpZiAoQS5sZW5ndGggPT09IGxpbSkgcmV0dXJuIEE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBxID0gcCA9IGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEEucHVzaChTLnNsaWNlKHApKTtcbiAgICAgICAgcmV0dXJuIEE7XG4gICAgICB9XG4gICAgXTtcbiAgfSwgIVNVUFBPUlRTX1kpO1xuXG4gIHZhciBuYXRpdmVQcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICAvLyBOYXNob3JuIH4gSkRLOCBidWdcbiAgdmFyIE5BU0hPUk5fQlVHID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmICFuYXRpdmVQcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuICAvLyBgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZWAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUucHJvcGVydHlpc2VudW1lcmFibGVcbiAgdmFyIGYkMSA9IE5BU0hPUk5fQlVHID8gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoVikge1xuICAgIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMsIFYpO1xuICAgIHJldHVybiAhIWRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xuICB9IDogbmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGU7XG5cbiAgdmFyIG9iamVjdFByb3BlcnR5SXNFbnVtZXJhYmxlID0ge1xuICBcdGY6IGYkMVxuICB9O1xuXG4gIHZhciBzcGxpdCA9ICcnLnNwbGl0O1xuXG4gIC8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG4gIHZhciBpbmRleGVkT2JqZWN0ID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIHRocm93cyBhbiBlcnJvciBpbiByaGlubywgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3JoaW5vL2lzc3Vlcy8zNDZcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gICAgcmV0dXJuICFPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbiAgfSkgPyBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gY2xhc3NvZlJhdyhpdCkgPT0gJ1N0cmluZycgPyBzcGxpdC5jYWxsKGl0LCAnJykgOiBPYmplY3QoaXQpO1xuICB9IDogT2JqZWN0O1xuXG4gIC8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG5cblxuXG4gIHZhciB0b0luZGV4ZWRPYmplY3QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaW5kZXhlZE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGl0KSk7XG4gIH07XG5cbiAgdmFyIG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yXG4gIHZhciBmJDIgPSBkZXNjcmlwdG9ycyA/IG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gICAgTyA9IHRvSW5kZXhlZE9iamVjdChPKTtcbiAgICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gICAgaWYgKGllOERvbURlZmluZSkgdHJ5IHtcbiAgICAgIHJldHVybiBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICAgIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoIW9iamVjdFByb3BlcnR5SXNFbnVtZXJhYmxlLmYuY2FsbChPLCBQKSwgT1tQXSk7XG4gIH07XG5cbiAgdmFyIG9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHtcbiAgXHRmOiBmJDJcbiAgfTtcblxuICB2YXIgcGF0aCA9IGdsb2JhbF8xO1xuXG4gIHZhciBhRnVuY3Rpb24kMSA9IGZ1bmN0aW9uICh2YXJpYWJsZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFyaWFibGUgPT0gJ2Z1bmN0aW9uJyA/IHZhcmlhYmxlIDogdW5kZWZpbmVkO1xuICB9O1xuXG4gIHZhciBnZXRCdWlsdEluID0gZnVuY3Rpb24gKG5hbWVzcGFjZSwgbWV0aG9kKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gYUZ1bmN0aW9uJDEocGF0aFtuYW1lc3BhY2VdKSB8fCBhRnVuY3Rpb24kMShnbG9iYWxfMVtuYW1lc3BhY2VdKVxuICAgICAgOiBwYXRoW25hbWVzcGFjZV0gJiYgcGF0aFtuYW1lc3BhY2VdW21ldGhvZF0gfHwgZ2xvYmFsXzFbbmFtZXNwYWNlXSAmJiBnbG9iYWxfMVtuYW1lc3BhY2VdW21ldGhvZF07XG4gIH07XG5cbiAgdmFyIG1heCA9IE1hdGgubWF4O1xuICB2YXIgbWluJDIgPSBNYXRoLm1pbjtcblxuICAvLyBIZWxwZXIgZm9yIGEgcG9wdWxhciByZXBlYXRpbmcgY2FzZSBvZiB0aGUgc3BlYzpcbiAgLy8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuICAvLyBJZiBpbnRlZ2VyIDwgMCwgbGV0IHJlc3VsdCBiZSBtYXgoKGxlbmd0aCArIGludGVnZXIpLCAwKTsgZWxzZSBsZXQgcmVzdWx0IGJlIG1pbihsZW5ndGgsIGxlbmd0aCkuXG4gIHZhciB0b0Fic29sdXRlSW5kZXggPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICAgIHZhciBpbnRlZ2VyID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgICByZXR1cm4gaW50ZWdlciA8IDAgPyBtYXgoaW50ZWdlciArIGxlbmd0aCwgMCkgOiBtaW4kMihpbnRlZ2VyLCBsZW5ndGgpO1xuICB9O1xuXG4gIC8vIGBBcnJheS5wcm90b3R5cGUueyBpbmRleE9mLCBpbmNsdWRlcyB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG4gIHZhciBjcmVhdGVNZXRob2QkMSA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KCR0aGlzKTtcbiAgICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgICAgdmFyIHZhbHVlO1xuICAgICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgaWYgKChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSAmJiBPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGFycmF5SW5jbHVkZXMgPSB7XG4gICAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG4gICAgaW5jbHVkZXM6IGNyZWF0ZU1ldGhvZCQxKHRydWUpLFxuICAgIC8vIGBBcnJheS5wcm90b3R5cGUuaW5kZXhPZmAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiAgICBpbmRleE9mOiBjcmVhdGVNZXRob2QkMShmYWxzZSlcbiAgfTtcblxuICB2YXIgaW5kZXhPZiA9IGFycmF5SW5jbHVkZXMuaW5kZXhPZjtcblxuXG4gIHZhciBvYmplY3RLZXlzSW50ZXJuYWwgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KG9iamVjdCk7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5O1xuICAgIGZvciAoa2V5IGluIE8pICFoYXMoaGlkZGVuS2V5cywga2V5KSAmJiBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAgIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgICAgfmluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gSUU4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG4gIHZhciBlbnVtQnVnS2V5cyA9IFtcbiAgICAnY29uc3RydWN0b3InLFxuICAgICdoYXNPd25Qcm9wZXJ0eScsXG4gICAgJ2lzUHJvdG90eXBlT2YnLFxuICAgICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG4gICAgJ3RvTG9jYWxlU3RyaW5nJyxcbiAgICAndG9TdHJpbmcnLFxuICAgICd2YWx1ZU9mJ1xuICBdO1xuXG4gIHZhciBoaWRkZW5LZXlzJDEgPSBlbnVtQnVnS2V5cy5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuICAvLyBgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHluYW1lc1xuICB2YXIgZiQzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gICAgcmV0dXJuIG9iamVjdEtleXNJbnRlcm5hbChPLCBoaWRkZW5LZXlzJDEpO1xuICB9O1xuXG4gIHZhciBvYmplY3RHZXRPd25Qcm9wZXJ0eU5hbWVzID0ge1xuICBcdGY6IGYkM1xuICB9O1xuXG4gIHZhciBmJDQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIHZhciBvYmplY3RHZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSB7XG4gIFx0ZjogZiQ0XG4gIH07XG5cbiAgLy8gYWxsIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBub24tZW51bWVyYWJsZSBhbmQgc3ltYm9sc1xuICB2YXIgb3duS2V5cyA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnb3duS2V5cycpIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpIHtcbiAgICB2YXIga2V5cyA9IG9iamVjdEdldE93blByb3BlcnR5TmFtZXMuZihhbk9iamVjdChpdCkpO1xuICAgIHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBvYmplY3RHZXRPd25Qcm9wZXJ0eVN5bWJvbHMuZjtcbiAgICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSkgOiBrZXlzO1xuICB9O1xuXG4gIHZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG4gICAgdmFyIGtleXMgPSBvd25LZXlzKHNvdXJjZSk7XG4gICAgdmFyIGRlZmluZVByb3BlcnR5ID0gb2JqZWN0RGVmaW5lUHJvcGVydHkuZjtcbiAgICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gb2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLmY7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgIGlmICghaGFzKHRhcmdldCwga2V5KSkgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgcmVwbGFjZW1lbnQgPSAvI3xcXC5wcm90b3R5cGVcXC4vO1xuXG4gIHZhciBpc0ZvcmNlZCA9IGZ1bmN0aW9uIChmZWF0dXJlLCBkZXRlY3Rpb24pIHtcbiAgICB2YXIgdmFsdWUgPSBkYXRhW25vcm1hbGl6ZShmZWF0dXJlKV07XG4gICAgcmV0dXJuIHZhbHVlID09IFBPTFlGSUxMID8gdHJ1ZVxuICAgICAgOiB2YWx1ZSA9PSBOQVRJVkUgPyBmYWxzZVxuICAgICAgOiB0eXBlb2YgZGV0ZWN0aW9uID09ICdmdW5jdGlvbicgPyBmYWlscyhkZXRlY3Rpb24pXG4gICAgICA6ICEhZGV0ZWN0aW9uO1xuICB9O1xuXG4gIHZhciBub3JtYWxpemUgPSBpc0ZvcmNlZC5ub3JtYWxpemUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVwbGFjZW1lbnQsICcuJykudG9Mb3dlckNhc2UoKTtcbiAgfTtcblxuICB2YXIgZGF0YSA9IGlzRm9yY2VkLmRhdGEgPSB7fTtcbiAgdmFyIE5BVElWRSA9IGlzRm9yY2VkLk5BVElWRSA9ICdOJztcbiAgdmFyIFBPTFlGSUxMID0gaXNGb3JjZWQuUE9MWUZJTEwgPSAnUCc7XG5cbiAgdmFyIGlzRm9yY2VkXzEgPSBpc0ZvcmNlZDtcblxuICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJDEgPSBvYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IuZjtcblxuXG5cblxuXG5cbiAgLypcbiAgICBvcHRpb25zLnRhcmdldCAgICAgIC0gbmFtZSBvZiB0aGUgdGFyZ2V0IG9iamVjdFxuICAgIG9wdGlvbnMuZ2xvYmFsICAgICAgLSB0YXJnZXQgaXMgdGhlIGdsb2JhbCBvYmplY3RcbiAgICBvcHRpb25zLnN0YXQgICAgICAgIC0gZXhwb3J0IGFzIHN0YXRpYyBtZXRob2RzIG9mIHRhcmdldFxuICAgIG9wdGlvbnMucHJvdG8gICAgICAgLSBleHBvcnQgYXMgcHJvdG90eXBlIG1ldGhvZHMgb2YgdGFyZ2V0XG4gICAgb3B0aW9ucy5yZWFsICAgICAgICAtIHJlYWwgcHJvdG90eXBlIG1ldGhvZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gICAgb3B0aW9ucy5mb3JjZWQgICAgICAtIGV4cG9ydCBldmVuIGlmIHRoZSBuYXRpdmUgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgICBvcHRpb25zLmJpbmQgICAgICAgIC0gYmluZCBtZXRob2RzIHRvIHRoZSB0YXJnZXQsIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgICBvcHRpb25zLndyYXAgICAgICAgIC0gd3JhcCBjb25zdHJ1Y3RvcnMgdG8gcHJldmVudGluZyBnbG9iYWwgcG9sbHV0aW9uLCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gICAgb3B0aW9ucy51bnNhZmUgICAgICAtIHVzZSB0aGUgc2ltcGxlIGFzc2lnbm1lbnQgb2YgcHJvcGVydHkgaW5zdGVhZCBvZiBkZWxldGUgKyBkZWZpbmVQcm9wZXJ0eVxuICAgIG9wdGlvbnMuc2hhbSAgICAgICAgLSBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gICAgb3B0aW9ucy5lbnVtZXJhYmxlICAtIGV4cG9ydCBhcyBlbnVtZXJhYmxlIHByb3BlcnR5XG4gICAgb3B0aW9ucy5ub1RhcmdldEdldCAtIHByZXZlbnQgY2FsbGluZyBhIGdldHRlciBvbiB0YXJnZXRcbiAgKi9cbiAgdmFyIF9leHBvcnQgPSBmdW5jdGlvbiAob3B0aW9ucywgc291cmNlKSB7XG4gICAgdmFyIFRBUkdFVCA9IG9wdGlvbnMudGFyZ2V0O1xuICAgIHZhciBHTE9CQUwgPSBvcHRpb25zLmdsb2JhbDtcbiAgICB2YXIgU1RBVElDID0gb3B0aW9ucy5zdGF0O1xuICAgIHZhciBGT1JDRUQsIHRhcmdldCwga2V5LCB0YXJnZXRQcm9wZXJ0eSwgc291cmNlUHJvcGVydHksIGRlc2NyaXB0b3I7XG4gICAgaWYgKEdMT0JBTCkge1xuICAgICAgdGFyZ2V0ID0gZ2xvYmFsXzE7XG4gICAgfSBlbHNlIGlmIChTVEFUSUMpIHtcbiAgICAgIHRhcmdldCA9IGdsb2JhbF8xW1RBUkdFVF0gfHwgc2V0R2xvYmFsKFRBUkdFVCwge30pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXQgPSAoZ2xvYmFsXzFbVEFSR0VUXSB8fCB7fSkucHJvdG90eXBlO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0KSBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIHNvdXJjZVByb3BlcnR5ID0gc291cmNlW2tleV07XG4gICAgICBpZiAob3B0aW9ucy5ub1RhcmdldEdldCkge1xuICAgICAgICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJDEodGFyZ2V0LCBrZXkpO1xuICAgICAgICB0YXJnZXRQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZTtcbiAgICAgIH0gZWxzZSB0YXJnZXRQcm9wZXJ0eSA9IHRhcmdldFtrZXldO1xuICAgICAgRk9SQ0VEID0gaXNGb3JjZWRfMShHTE9CQUwgPyBrZXkgOiBUQVJHRVQgKyAoU1RBVElDID8gJy4nIDogJyMnKSArIGtleSwgb3B0aW9ucy5mb3JjZWQpO1xuICAgICAgLy8gY29udGFpbmVkIGluIHRhcmdldFxuICAgICAgaWYgKCFGT1JDRUQgJiYgdGFyZ2V0UHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAodHlwZW9mIHNvdXJjZVByb3BlcnR5ID09PSB0eXBlb2YgdGFyZ2V0UHJvcGVydHkpIGNvbnRpbnVlO1xuICAgICAgICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKHNvdXJjZVByb3BlcnR5LCB0YXJnZXRQcm9wZXJ0eSk7XG4gICAgICB9XG4gICAgICAvLyBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gICAgICBpZiAob3B0aW9ucy5zaGFtIHx8ICh0YXJnZXRQcm9wZXJ0eSAmJiB0YXJnZXRQcm9wZXJ0eS5zaGFtKSkge1xuICAgICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoc291cmNlUHJvcGVydHksICdzaGFtJywgdHJ1ZSk7XG4gICAgICB9XG4gICAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgICByZWRlZmluZSh0YXJnZXQsIGtleSwgc291cmNlUHJvcGVydHksIG9wdGlvbnMpO1xuICAgIH1cbiAgfTtcblxuICAvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbiAgdmFyIGJpbmRDb250ZXh0ID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgICBhRnVuY3Rpb24oZm4pO1xuICAgIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgICAgY2FzZSAwOiByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGF0KTtcbiAgICAgIH07XG4gICAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICAgIH07XG4gICAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICAgIH07XG4gICAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfTtcblxuICAvLyBgVG9PYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b29iamVjdFxuICB2YXIgdG9PYmplY3QgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgICByZXR1cm4gT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpKTtcbiAgfTtcblxuICAvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG4gIHZhciBjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIEVOVFJJRVMpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIEVOVFJJRVMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB2YXIgcmV0dXJuTWV0aG9kID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgICAgaWYgKHJldHVybk1ldGhvZCAhPT0gdW5kZWZpbmVkKSBhbk9iamVjdChyZXR1cm5NZXRob2QuY2FsbChpdGVyYXRvcikpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9O1xuXG4gIHZhciBpdGVyYXRvcnMgPSB7fTtcblxuICB2YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG4gIHZhciBBcnJheVByb3RvdHlwZSA9IEFycmF5LnByb3RvdHlwZTtcblxuICAvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG4gIHZhciBpc0FycmF5SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoaXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvdHlwZVtJVEVSQVRPUl0gPT09IGl0KTtcbiAgfTtcblxuICB2YXIgY3JlYXRlUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gICAgdmFyIHByb3BlcnR5S2V5ID0gdG9QcmltaXRpdmUoa2V5KTtcbiAgICBpZiAocHJvcGVydHlLZXkgaW4gb2JqZWN0KSBvYmplY3REZWZpbmVQcm9wZXJ0eS5mKG9iamVjdCwgcHJvcGVydHlLZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigwLCB2YWx1ZSkpO1xuICAgIGVsc2Ugb2JqZWN0W3Byb3BlcnR5S2V5XSA9IHZhbHVlO1xuICB9O1xuXG4gIHZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xuICAvLyBFUzMgd3JvbmcgaGVyZVxuICB2YXIgQ09SUkVDVF9BUkdVTUVOVFMgPSBjbGFzc29mUmF3KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuICAvLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxuICB2YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGl0W2tleV07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICB9O1xuXG4gIC8vIGdldHRpbmcgdGFnIGZyb20gRVM2KyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2BcbiAgdmFyIGNsYXNzb2YgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgTywgdGFnLCByZXN1bHQ7XG4gICAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICAgIDogdHlwZW9mICh0YWcgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRPX1NUUklOR19UQUcpKSA9PSAnc3RyaW5nJyA/IHRhZ1xuICAgICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgICA6IENPUlJFQ1RfQVJHVU1FTlRTID8gY2xhc3NvZlJhdyhPKVxuICAgICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgICAgOiAocmVzdWx0ID0gY2xhc3NvZlJhdyhPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IHJlc3VsdDtcbiAgfTtcblxuICB2YXIgSVRFUkFUT1IkMSA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcblxuICB2YXIgZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1IkMV1cbiAgICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICAgIHx8IGl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG4gIH07XG5cbiAgLy8gYEFycmF5LmZyb21gIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5mcm9tXG4gIHZhciBhcnJheUZyb20gPSBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZSAvKiAsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkICovKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdChhcnJheUxpa2UpO1xuICAgIHZhciBDID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheTtcbiAgICB2YXIgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB2YXIgbWFwZm4gPSBhcmd1bWVudHNMZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgIHZhciBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZDtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGdldEl0ZXJhdG9yTWV0aG9kKE8pO1xuICAgIHZhciBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3IsIG5leHQ7XG4gICAgaWYgKG1hcHBpbmcpIG1hcGZuID0gYmluZENvbnRleHQobWFwZm4sIGFyZ3VtZW50c0xlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAgIC8vIGlmIHRoZSB0YXJnZXQgaXMgbm90IGl0ZXJhYmxlIG9yIGl0J3MgYW4gYXJyYXkgd2l0aCB0aGUgZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBhIHNpbXBsZSBjYXNlXG4gICAgaWYgKGl0ZXJhdG9yTWV0aG9kICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgaXNBcnJheUl0ZXJhdG9yTWV0aG9kKGl0ZXJhdG9yTWV0aG9kKSkpIHtcbiAgICAgIGl0ZXJhdG9yID0gaXRlcmF0b3JNZXRob2QuY2FsbChPKTtcbiAgICAgIG5leHQgPSBpdGVyYXRvci5uZXh0O1xuICAgICAgcmVzdWx0ID0gbmV3IEMoKTtcbiAgICAgIGZvciAoOyEoc3RlcCA9IG5leHQuY2FsbChpdGVyYXRvcikpLmRvbmU7IGluZGV4KyspIHtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZ1xuICAgICAgICAgID8gY2FsbFdpdGhTYWZlSXRlcmF0aW9uQ2xvc2luZyhpdGVyYXRvciwgbWFwZm4sIFtzdGVwLnZhbHVlLCBpbmRleF0sIHRydWUpXG4gICAgICAgICAgOiBzdGVwLnZhbHVlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICAgIHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7XG4gICAgICBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgdmFyIElURVJBVE9SJDIgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG4gIHZhciBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxuICB0cnkge1xuICAgIHZhciBjYWxsZWQgPSAwO1xuICAgIHZhciBpdGVyYXRvcldpdGhSZXR1cm4gPSB7XG4gICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7IGRvbmU6ICEhY2FsbGVkKysgfTtcbiAgICAgIH0sXG4gICAgICAncmV0dXJuJzogZnVuY3Rpb24gKCkge1xuICAgICAgICBTQUZFX0NMT1NJTkcgPSB0cnVlO1xuICAgICAgfVxuICAgIH07XG4gICAgaXRlcmF0b3JXaXRoUmV0dXJuW0lURVJBVE9SJDJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICAgIEFycmF5LmZyb20oaXRlcmF0b3JXaXRoUmV0dXJuLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG5cbiAgdmFyIGNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbiA9IGZ1bmN0aW9uIChleGVjLCBTS0lQX0NMT1NJTkcpIHtcbiAgICBpZiAoIVNLSVBfQ0xPU0lORyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIElURVJBVElPTl9TVVBQT1JUID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBvYmplY3QgPSB7fTtcbiAgICAgIG9iamVjdFtJVEVSQVRPUiQyXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4geyBkb25lOiBJVEVSQVRJT05fU1VQUE9SVCA9IHRydWUgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgICAgZXhlYyhvYmplY3QpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgICByZXR1cm4gSVRFUkFUSU9OX1NVUFBPUlQ7XG4gIH07XG5cbiAgdmFyIElOQ09SUkVDVF9JVEVSQVRJT04gPSAhY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uKGZ1bmN0aW9uIChpdGVyYWJsZSkge1xuICAgIEFycmF5LmZyb20oaXRlcmFibGUpO1xuICB9KTtcblxuICAvLyBgQXJyYXkuZnJvbWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LmZyb21cbiAgX2V4cG9ydCh7IHRhcmdldDogJ0FycmF5Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBJTkNPUlJFQ1RfSVRFUkFUSU9OIH0sIHtcbiAgICBmcm9tOiBhcnJheUZyb21cbiAgfSk7XG5cbiAgLy8gYElzQXJyYXlgIGFic3RyYWN0IG9wZXJhdGlvblxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1pc2FycmF5XG4gIHZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICAgIHJldHVybiBjbGFzc29mUmF3KGFyZykgPT0gJ0FycmF5JztcbiAgfTtcblxuICB2YXIgU1BFQ0lFUyQyID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbiAgLy8gYEFycmF5U3BlY2llc0NyZWF0ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5c3BlY2llc2NyZWF0ZVxuICB2YXIgYXJyYXlTcGVjaWVzQ3JlYXRlID0gZnVuY3Rpb24gKG9yaWdpbmFsQXJyYXksIGxlbmd0aCkge1xuICAgIHZhciBDO1xuICAgIGlmIChpc0FycmF5KG9yaWdpbmFsQXJyYXkpKSB7XG4gICAgICBDID0gb3JpZ2luYWxBcnJheS5jb25zdHJ1Y3RvcjtcbiAgICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgICBpZiAodHlwZW9mIEMgPT0gJ2Z1bmN0aW9uJyAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKSBDID0gdW5kZWZpbmVkO1xuICAgICAgZWxzZSBpZiAoaXNPYmplY3QoQykpIHtcbiAgICAgICAgQyA9IENbU1BFQ0lFUyQyXTtcbiAgICAgICAgaWYgKEMgPT09IG51bGwpIEMgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSByZXR1cm4gbmV3IChDID09PSB1bmRlZmluZWQgPyBBcnJheSA6IEMpKGxlbmd0aCA9PT0gMCA/IDAgOiBsZW5ndGgpO1xuICB9O1xuXG4gIHZhciBwdXNoID0gW10ucHVzaDtcblxuICAvLyBgQXJyYXkucHJvdG90eXBlLnsgZm9yRWFjaCwgbWFwLCBmaWx0ZXIsIHNvbWUsIGV2ZXJ5LCBmaW5kLCBmaW5kSW5kZXggfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxuICB2YXIgY3JlYXRlTWV0aG9kJDIgPSBmdW5jdGlvbiAoVFlQRSkge1xuICAgIHZhciBJU19NQVAgPSBUWVBFID09IDE7XG4gICAgdmFyIElTX0ZJTFRFUiA9IFRZUEUgPT0gMjtcbiAgICB2YXIgSVNfU09NRSA9IFRZUEUgPT0gMztcbiAgICB2YXIgSVNfRVZFUlkgPSBUWVBFID09IDQ7XG4gICAgdmFyIElTX0ZJTkRfSU5ERVggPSBUWVBFID09IDY7XG4gICAgdmFyIE5PX0hPTEVTID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVg7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCwgc3BlY2lmaWNDcmVhdGUpIHtcbiAgICAgIHZhciBPID0gdG9PYmplY3QoJHRoaXMpO1xuICAgICAgdmFyIHNlbGYgPSBpbmRleGVkT2JqZWN0KE8pO1xuICAgICAgdmFyIGJvdW5kRnVuY3Rpb24gPSBiaW5kQ29udGV4dChjYWxsYmFja2ZuLCB0aGF0LCAzKTtcbiAgICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChzZWxmLmxlbmd0aCk7XG4gICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgdmFyIGNyZWF0ZSA9IHNwZWNpZmljQ3JlYXRlIHx8IGFycmF5U3BlY2llc0NyZWF0ZTtcbiAgICAgIHZhciB0YXJnZXQgPSBJU19NQVAgPyBjcmVhdGUoJHRoaXMsIGxlbmd0aCkgOiBJU19GSUxURVIgPyBjcmVhdGUoJHRoaXMsIDApIDogdW5kZWZpbmVkO1xuICAgICAgdmFyIHZhbHVlLCByZXN1bHQ7XG4gICAgICBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpIHtcbiAgICAgICAgdmFsdWUgPSBzZWxmW2luZGV4XTtcbiAgICAgICAgcmVzdWx0ID0gYm91bmRGdW5jdGlvbih2YWx1ZSwgaW5kZXgsIE8pO1xuICAgICAgICBpZiAoVFlQRSkge1xuICAgICAgICAgIGlmIChJU19NQVApIHRhcmdldFtpbmRleF0gPSByZXN1bHQ7IC8vIG1hcFxuICAgICAgICAgIGVsc2UgaWYgKHJlc3VsdCkgc3dpdGNoIChUWVBFKSB7XG4gICAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAgLy8gc29tZVxuICAgICAgICAgICAgY2FzZSA1OiByZXR1cm4gdmFsdWU7ICAgICAgICAgICAgIC8vIGZpbmRcbiAgICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGluZGV4OyAgICAgICAgICAgICAvLyBmaW5kSW5kZXhcbiAgICAgICAgICAgIGNhc2UgMjogcHVzaC5jYWxsKHRhcmdldCwgdmFsdWUpOyAvLyBmaWx0ZXJcbiAgICAgICAgICB9IGVsc2UgaWYgKElTX0VWRVJZKSByZXR1cm4gZmFsc2U7ICAvLyBldmVyeVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gSVNfRklORF9JTkRFWCA/IC0xIDogSVNfU09NRSB8fCBJU19FVkVSWSA/IElTX0VWRVJZIDogdGFyZ2V0O1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGFycmF5SXRlcmF0aW9uID0ge1xuICAgIC8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbiAgICBmb3JFYWNoOiBjcmVhdGVNZXRob2QkMigwKSxcbiAgICAvLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxuICAgIG1hcDogY3JlYXRlTWV0aG9kJDIoMSksXG4gICAgLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICBmaWx0ZXI6IGNyZWF0ZU1ldGhvZCQyKDIpLFxuICAgIC8vIGBBcnJheS5wcm90b3R5cGUuc29tZWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnNvbWVcbiAgICBzb21lOiBjcmVhdGVNZXRob2QkMigzKSxcbiAgICAvLyBgQXJyYXkucHJvdG90eXBlLmV2ZXJ5YCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZXZlcnlcbiAgICBldmVyeTogY3JlYXRlTWV0aG9kJDIoNCksXG4gICAgLy8gYEFycmF5LnByb3RvdHlwZS5maW5kYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZFxuICAgIGZpbmQ6IGNyZWF0ZU1ldGhvZCQyKDUpLFxuICAgIC8vIGBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4YCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZEluZGV4XG4gICAgZmluZEluZGV4OiBjcmVhdGVNZXRob2QkMig2KVxuICB9O1xuXG4gIHZhciB1c2VyQWdlbnQgPSBnZXRCdWlsdEluKCduYXZpZ2F0b3InLCAndXNlckFnZW50JykgfHwgJyc7XG5cbiAgdmFyIHByb2Nlc3MgPSBnbG9iYWxfMS5wcm9jZXNzO1xuICB2YXIgdmVyc2lvbnMgPSBwcm9jZXNzICYmIHByb2Nlc3MudmVyc2lvbnM7XG4gIHZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4O1xuICB2YXIgbWF0Y2gsIHZlcnNpb247XG5cbiAgaWYgKHY4KSB7XG4gICAgbWF0Y2ggPSB2OC5zcGxpdCgnLicpO1xuICAgIHZlcnNpb24gPSBtYXRjaFswXSArIG1hdGNoWzFdO1xuICB9IGVsc2UgaWYgKHVzZXJBZ2VudCkge1xuICAgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICBpZiAobWF0Y2gpIHZlcnNpb24gPSBtYXRjaFsxXTtcbiAgfVxuXG4gIHZhciB2OFZlcnNpb24gPSB2ZXJzaW9uICYmICt2ZXJzaW9uO1xuXG4gIHZhciBTUEVDSUVTJDMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxuICB2YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICAgIC8vIFdlIGNhbid0IHVzZSB0aGlzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuICAgIC8vIGRlb3B0aW1pemF0aW9uIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3N1xuICAgIHJldHVybiB2OFZlcnNpb24gPj0gNTEgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBhcnJheSA9IFtdO1xuICAgICAgdmFyIGNvbnN0cnVjdG9yID0gYXJyYXkuY29uc3RydWN0b3IgPSB7fTtcbiAgICAgIGNvbnN0cnVjdG9yW1NQRUNJRVMkM10gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7IGZvbzogMSB9O1xuICAgICAgfTtcbiAgICAgIHJldHVybiBhcnJheVtNRVRIT0RfTkFNRV0oQm9vbGVhbikuZm9vICE9PSAxO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciAkbWFwID0gYXJyYXlJdGVyYXRpb24ubWFwO1xuXG5cbiAgLy8gYEFycmF5LnByb3RvdHlwZS5tYXBgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUubWFwXG4gIC8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4gIF9leHBvcnQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdtYXAnKSB9LCB7XG4gICAgbWFwOiBmdW5jdGlvbiBtYXAoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICAgIHJldHVybiAkbWFwKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIGBPYmplY3Qua2V5c2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5rZXlzXG4gIHZhciBvYmplY3RLZXlzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gICAgcmV0dXJuIG9iamVjdEtleXNJbnRlcm5hbChPLCBlbnVtQnVnS2V5cyk7XG4gIH07XG5cbiAgdmFyIG5hdGl2ZUFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG5cbiAgLy8gYE9iamVjdC5hc3NpZ25gIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuYXNzaWduXG4gIC8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxuICB2YXIgb2JqZWN0QXNzaWduID0gIW5hdGl2ZUFzc2lnbiB8fCBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIEEgPSB7fTtcbiAgICB2YXIgQiA9IHt9O1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBzeW1ib2wgPSBTeW1ib2woKTtcbiAgICB2YXIgYWxwaGFiZXQgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICAgIEFbc3ltYm9sXSA9IDc7XG4gICAgYWxwaGFiZXQuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGNocikgeyBCW2Nocl0gPSBjaHI7IH0pO1xuICAgIHJldHVybiBuYXRpdmVBc3NpZ24oe30sIEEpW3N5bWJvbF0gIT0gNyB8fCBvYmplY3RLZXlzKG5hdGl2ZUFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IGFscGhhYmV0O1xuICB9KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgdmFyIFQgPSB0b09iamVjdCh0YXJnZXQpO1xuICAgIHZhciBhcmd1bWVudHNMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciBpbmRleCA9IDE7XG4gICAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IG9iamVjdEdldE93blByb3BlcnR5U3ltYm9scy5mO1xuICAgIHZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3BlcnR5SXNFbnVtZXJhYmxlLmY7XG4gICAgd2hpbGUgKGFyZ3VtZW50c0xlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YXIgUyA9IGluZGV4ZWRPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKTtcbiAgICAgIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8gb2JqZWN0S2V5cyhTKS5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKFMpKSA6IG9iamVjdEtleXMoUyk7XG4gICAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgICB2YXIgaiA9IDA7XG4gICAgICB2YXIga2V5O1xuICAgICAgd2hpbGUgKGxlbmd0aCA+IGopIHtcbiAgICAgICAga2V5ID0ga2V5c1tqKytdO1xuICAgICAgICBpZiAoIWRlc2NyaXB0b3JzIHx8IHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoUywga2V5KSkgVFtrZXldID0gU1trZXldO1xuICAgICAgfVxuICAgIH0gcmV0dXJuIFQ7XG4gIH0gOiBuYXRpdmVBc3NpZ247XG5cbiAgLy8gYE9iamVjdC5hc3NpZ25gIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuYXNzaWduXG4gIF9leHBvcnQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IE9iamVjdC5hc3NpZ24gIT09IG9iamVjdEFzc2lnbiB9LCB7XG4gICAgYXNzaWduOiBvYmplY3RBc3NpZ25cbiAgfSk7XG5cbiAgdmFyIGNvcnJlY3RQcm90b3R5cGVHZXR0ZXIgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEYoKSB7IC8qIGVtcHR5ICovIH1cbiAgICBGLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG51bGw7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZihuZXcgRigpKSAhPT0gRi5wcm90b3R5cGU7XG4gIH0pO1xuXG4gIHZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcbiAgdmFyIE9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG5cbiAgLy8gYE9iamVjdC5nZXRQcm90b3R5cGVPZmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRwcm90b3R5cGVvZlxuICB2YXIgb2JqZWN0R2V0UHJvdG90eXBlT2YgPSBjb3JyZWN0UHJvdG90eXBlR2V0dGVyID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gKE8pIHtcbiAgICBPID0gdG9PYmplY3QoTyk7XG4gICAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICAgIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90b3R5cGUgOiBudWxsO1xuICB9O1xuXG4gIHZhciBJVEVSQVRPUiQzID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xuICB2YXIgQlVHR1lfU0FGQVJJX0lURVJBVE9SUyA9IGZhbHNlO1xuXG4gIHZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxuICAvLyBgJUl0ZXJhdG9yUHJvdG90eXBlJWAgb2JqZWN0XG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLSVpdGVyYXRvcnByb3RvdHlwZSUtb2JqZWN0XG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSwgUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlLCBhcnJheUl0ZXJhdG9yO1xuXG4gIGlmIChbXS5rZXlzKSB7XG4gICAgYXJyYXlJdGVyYXRvciA9IFtdLmtleXMoKTtcbiAgICAvLyBTYWZhcmkgOCBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgICBpZiAoISgnbmV4dCcgaW4gYXJyYXlJdGVyYXRvcikpIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSB0cnVlO1xuICAgIGVsc2Uge1xuICAgICAgUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlID0gb2JqZWN0R2V0UHJvdG90eXBlT2Yob2JqZWN0R2V0UHJvdG90eXBlT2YoYXJyYXlJdGVyYXRvcikpO1xuICAgICAgaWYgKFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSkgSXRlcmF0b3JQcm90b3R5cGUgPSBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGU7XG4gICAgfVxuICB9XG5cbiAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlID09IHVuZGVmaW5lZCkgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuICAvLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxuICBpZiAoICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SJDMpKSB7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiQzLCByZXR1cm5UaGlzKTtcbiAgfVxuXG4gIHZhciBpdGVyYXRvcnNDb3JlID0ge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlOiBJdGVyYXRvclByb3RvdHlwZSxcbiAgICBCVUdHWV9TQUZBUklfSVRFUkFUT1JTOiBCVUdHWV9TQUZBUklfSVRFUkFUT1JTXG4gIH07XG5cbiAgLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnRpZXNcbiAgdmFyIG9iamVjdERlZmluZVByb3BlcnRpZXMgPSBkZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gICAgYW5PYmplY3QoTyk7XG4gICAgdmFyIGtleXMgPSBvYmplY3RLZXlzKFByb3BlcnRpZXMpO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSBvYmplY3REZWZpbmVQcm9wZXJ0eS5mKE8sIGtleSA9IGtleXNbaW5kZXgrK10sIFByb3BlcnRpZXNba2V5XSk7XG4gICAgcmV0dXJuIE87XG4gIH07XG5cbiAgdmFyIGh0bWwgPSBnZXRCdWlsdEluKCdkb2N1bWVudCcsICdkb2N1bWVudEVsZW1lbnQnKTtcblxuICB2YXIgSUVfUFJPVE8kMSA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcblxuICB2YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG4gIHZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcblxuICAvLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG4gIHZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gICAgdmFyIGlmcmFtZSA9IGRvY3VtZW50Q3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgdmFyIGxlbmd0aCA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgICB2YXIgbHQgPSAnPCc7XG4gICAgdmFyIHNjcmlwdCA9ICdzY3JpcHQnO1xuICAgIHZhciBndCA9ICc+JztcbiAgICB2YXIganMgPSAnamF2YScgKyBzY3JpcHQgKyAnOic7XG4gICAgdmFyIGlmcmFtZURvY3VtZW50O1xuICAgIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGh0bWwuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgICBpZnJhbWUuc3JjID0gU3RyaW5nKGpzKTtcbiAgICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICAgIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArIHNjcmlwdCArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy8nICsgc2NyaXB0ICsgZ3QpO1xuICAgIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gICAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gICAgd2hpbGUgKGxlbmd0aC0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2xlbmd0aF1dO1xuICAgIHJldHVybiBjcmVhdGVEaWN0KCk7XG4gIH07XG5cbiAgLy8gYE9iamVjdC5jcmVhdGVgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuY3JlYXRlXG4gIHZhciBvYmplY3RDcmVhdGUgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gICAgdmFyIHJlc3VsdDtcbiAgICBpZiAoTyAhPT0gbnVsbCkge1xuICAgICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICAgIHJlc3VsdFtJRV9QUk9UTyQxXSA9IE87XG4gICAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogb2JqZWN0RGVmaW5lUHJvcGVydGllcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xuICB9O1xuXG4gIGhpZGRlbktleXNbSUVfUFJPVE8kMV0gPSB0cnVlO1xuXG4gIHZhciBkZWZpbmVQcm9wZXJ0eSA9IG9iamVjdERlZmluZVByb3BlcnR5LmY7XG5cblxuXG4gIHZhciBUT19TVFJJTkdfVEFHJDEgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG5cbiAgdmFyIHNldFRvU3RyaW5nVGFnID0gZnVuY3Rpb24gKGl0LCBUQUcsIFNUQVRJQykge1xuICAgIGlmIChpdCAmJiAhaGFzKGl0ID0gU1RBVElDID8gaXQgOiBpdC5wcm90b3R5cGUsIFRPX1NUUklOR19UQUckMSkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KGl0LCBUT19TVFJJTkdfVEFHJDEsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogVEFHIH0pO1xuICAgIH1cbiAgfTtcblxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUkMSA9IGl0ZXJhdG9yc0NvcmUuSXRlcmF0b3JQcm90b3R5cGU7XG5cblxuXG5cblxuICB2YXIgcmV0dXJuVGhpcyQxID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxuICB2YXIgY3JlYXRlSXRlcmF0b3JDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uIChJdGVyYXRvckNvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gICAgdmFyIFRPX1NUUklOR19UQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gICAgSXRlcmF0b3JDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBvYmplY3RDcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUkMSwgeyBuZXh0OiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JDb25zdHJ1Y3RvciwgVE9fU1RSSU5HX1RBRywgZmFsc2UpO1xuICAgIGl0ZXJhdG9yc1tUT19TVFJJTkdfVEFHXSA9IHJldHVyblRoaXMkMTtcbiAgICByZXR1cm4gSXRlcmF0b3JDb25zdHJ1Y3RvcjtcbiAgfTtcblxuICB2YXIgYVBvc3NpYmxlUHJvdG90eXBlID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgaWYgKCFpc09iamVjdChpdCkgJiYgaXQgIT09IG51bGwpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcihcIkNhbid0IHNldCBcIiArIFN0cmluZyhpdCkgKyAnIGFzIGEgcHJvdG90eXBlJyk7XG4gICAgfSByZXR1cm4gaXQ7XG4gIH07XG5cbiAgLy8gYE9iamVjdC5zZXRQcm90b3R5cGVPZmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5zZXRwcm90b3R5cGVvZlxuICAvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbiAgLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbiAgdmFyIG9iamVjdFNldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgQ09SUkVDVF9TRVRURVIgPSBmYWxzZTtcbiAgICB2YXIgdGVzdCA9IHt9O1xuICAgIHZhciBzZXR0ZXI7XG4gICAgdHJ5IHtcbiAgICAgIHNldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldDtcbiAgICAgIHNldHRlci5jYWxsKHRlc3QsIFtdKTtcbiAgICAgIENPUlJFQ1RfU0VUVEVSID0gdGVzdCBpbnN0YW5jZW9mIEFycmF5O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICAgIGFuT2JqZWN0KE8pO1xuICAgICAgYVBvc3NpYmxlUHJvdG90eXBlKHByb3RvKTtcbiAgICAgIGlmIChDT1JSRUNUX1NFVFRFUikgc2V0dGVyLmNhbGwoTywgcHJvdG8pO1xuICAgICAgZWxzZSBPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgcmV0dXJuIE87XG4gICAgfTtcbiAgfSgpIDogdW5kZWZpbmVkKTtcblxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUkMiA9IGl0ZXJhdG9yc0NvcmUuSXRlcmF0b3JQcm90b3R5cGU7XG4gIHZhciBCVUdHWV9TQUZBUklfSVRFUkFUT1JTJDEgPSBpdGVyYXRvcnNDb3JlLkJVR0dZX1NBRkFSSV9JVEVSQVRPUlM7XG4gIHZhciBJVEVSQVRPUiQ0ID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xuICB2YXIgS0VZUyA9ICdrZXlzJztcbiAgdmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuICB2YXIgRU5UUklFUyA9ICdlbnRyaWVzJztcblxuICB2YXIgcmV0dXJuVGhpcyQyID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxuICB2YXIgZGVmaW5lSXRlcmF0b3IgPSBmdW5jdGlvbiAoSXRlcmFibGUsIE5BTUUsIEl0ZXJhdG9yQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICAgY3JlYXRlSXRlcmF0b3JDb25zdHJ1Y3RvcihJdGVyYXRvckNvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcblxuICAgIHZhciBnZXRJdGVyYXRpb25NZXRob2QgPSBmdW5jdGlvbiAoS0lORCkge1xuICAgICAgaWYgKEtJTkQgPT09IERFRkFVTFQgJiYgZGVmYXVsdEl0ZXJhdG9yKSByZXR1cm4gZGVmYXVsdEl0ZXJhdG9yO1xuICAgICAgaWYgKCFCVUdHWV9TQUZBUklfSVRFUkFUT1JTJDEgJiYgS0lORCBpbiBJdGVyYWJsZVByb3RvdHlwZSkgcmV0dXJuIEl0ZXJhYmxlUHJvdG90eXBlW0tJTkRdO1xuICAgICAgc3dpdGNoIChLSU5EKSB7XG4gICAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzLCBLSU5EKTsgfTtcbiAgICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzLCBLSU5EKTsgfTtcbiAgICAgICAgY2FzZSBFTlRSSUVTOiByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMsIEtJTkQpOyB9O1xuICAgICAgfSByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IEl0ZXJhdG9yQ29uc3RydWN0b3IodGhpcyk7IH07XG4gICAgfTtcblxuICAgIHZhciBUT19TVFJJTkdfVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICAgIHZhciBJTkNPUlJFQ1RfVkFMVUVTX05BTUUgPSBmYWxzZTtcbiAgICB2YXIgSXRlcmFibGVQcm90b3R5cGUgPSBJdGVyYWJsZS5wcm90b3R5cGU7XG4gICAgdmFyIG5hdGl2ZUl0ZXJhdG9yID0gSXRlcmFibGVQcm90b3R5cGVbSVRFUkFUT1IkNF1cbiAgICAgIHx8IEl0ZXJhYmxlUHJvdG90eXBlWydAQGl0ZXJhdG9yJ11cbiAgICAgIHx8IERFRkFVTFQgJiYgSXRlcmFibGVQcm90b3R5cGVbREVGQVVMVF07XG4gICAgdmFyIGRlZmF1bHRJdGVyYXRvciA9ICFCVUdHWV9TQUZBUklfSVRFUkFUT1JTJDEgJiYgbmF0aXZlSXRlcmF0b3IgfHwgZ2V0SXRlcmF0aW9uTWV0aG9kKERFRkFVTFQpO1xuICAgIHZhciBhbnlOYXRpdmVJdGVyYXRvciA9IE5BTUUgPT0gJ0FycmF5JyA/IEl0ZXJhYmxlUHJvdG90eXBlLmVudHJpZXMgfHwgbmF0aXZlSXRlcmF0b3IgOiBuYXRpdmVJdGVyYXRvcjtcbiAgICB2YXIgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLCBtZXRob2RzLCBLRVk7XG5cbiAgICAvLyBmaXggbmF0aXZlXG4gICAgaWYgKGFueU5hdGl2ZUl0ZXJhdG9yKSB7XG4gICAgICBDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUgPSBvYmplY3RHZXRQcm90b3R5cGVPZihhbnlOYXRpdmVJdGVyYXRvci5jYWxsKG5ldyBJdGVyYWJsZSgpKSk7XG4gICAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUkMiAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgICBpZiAoIG9iamVjdEdldFByb3RvdHlwZU9mKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSkgIT09IEl0ZXJhdG9yUHJvdG90eXBlJDIpIHtcbiAgICAgICAgICBpZiAob2JqZWN0U2V0UHJvdG90eXBlT2YpIHtcbiAgICAgICAgICAgIG9iamVjdFNldFByb3RvdHlwZU9mKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgSXRlcmF0b3JQcm90b3R5cGUkMik7XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SJDRdICE9ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SJDQsIHJldHVyblRoaXMkMik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgICAgc2V0VG9TdHJpbmdUYWcoQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLCBUT19TVFJJTkdfVEFHLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gICAgaWYgKERFRkFVTFQgPT0gVkFMVUVTICYmIG5hdGl2ZUl0ZXJhdG9yICYmIG5hdGl2ZUl0ZXJhdG9yLm5hbWUgIT09IFZBTFVFUykge1xuICAgICAgSU5DT1JSRUNUX1ZBTFVFU19OQU1FID0gdHJ1ZTtcbiAgICAgIGRlZmF1bHRJdGVyYXRvciA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5hdGl2ZUl0ZXJhdG9yLmNhbGwodGhpcyk7IH07XG4gICAgfVxuXG4gICAgLy8gZGVmaW5lIGl0ZXJhdG9yXG4gICAgaWYgKCBJdGVyYWJsZVByb3RvdHlwZVtJVEVSQVRPUiQ0XSAhPT0gZGVmYXVsdEl0ZXJhdG9yKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoSXRlcmFibGVQcm90b3R5cGUsIElURVJBVE9SJDQsIGRlZmF1bHRJdGVyYXRvcik7XG4gICAgfVxuICAgIGl0ZXJhdG9yc1tOQU1FXSA9IGRlZmF1bHRJdGVyYXRvcjtcblxuICAgIC8vIGV4cG9ydCBhZGRpdGlvbmFsIG1ldGhvZHNcbiAgICBpZiAoREVGQVVMVCkge1xuICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgdmFsdWVzOiBnZXRJdGVyYXRpb25NZXRob2QoVkFMVUVTKSxcbiAgICAgICAga2V5czogSVNfU0VUID8gZGVmYXVsdEl0ZXJhdG9yIDogZ2V0SXRlcmF0aW9uTWV0aG9kKEtFWVMpLFxuICAgICAgICBlbnRyaWVzOiBnZXRJdGVyYXRpb25NZXRob2QoRU5UUklFUylcbiAgICAgIH07XG4gICAgICBpZiAoRk9SQ0VEKSBmb3IgKEtFWSBpbiBtZXRob2RzKSB7XG4gICAgICAgIGlmIChCVUdHWV9TQUZBUklfSVRFUkFUT1JTJDEgfHwgSU5DT1JSRUNUX1ZBTFVFU19OQU1FIHx8ICEoS0VZIGluIEl0ZXJhYmxlUHJvdG90eXBlKSkge1xuICAgICAgICAgIHJlZGVmaW5lKEl0ZXJhYmxlUHJvdG90eXBlLCBLRVksIG1ldGhvZHNbS0VZXSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBfZXhwb3J0KHsgdGFyZ2V0OiBOQU1FLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBCVUdHWV9TQUZBUklfSVRFUkFUT1JTJDEgfHwgSU5DT1JSRUNUX1ZBTFVFU19OQU1FIH0sIG1ldGhvZHMpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRob2RzO1xuICB9O1xuXG4gIHZhciBjaGFyQXQkMSA9IHN0cmluZ011bHRpYnl0ZS5jaGFyQXQ7XG5cblxuXG4gIHZhciBTVFJJTkdfSVRFUkFUT1IgPSAnU3RyaW5nIEl0ZXJhdG9yJztcbiAgdmFyIHNldEludGVybmFsU3RhdGUgPSBpbnRlcm5hbFN0YXRlLnNldDtcbiAgdmFyIGdldEludGVybmFsU3RhdGUgPSBpbnRlcm5hbFN0YXRlLmdldHRlckZvcihTVFJJTkdfSVRFUkFUT1IpO1xuXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS1AQGl0ZXJhdG9yXG4gIGRlZmluZUl0ZXJhdG9yKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICAgIHNldEludGVybmFsU3RhdGUodGhpcywge1xuICAgICAgdHlwZTogU1RSSU5HX0lURVJBVE9SLFxuICAgICAgc3RyaW5nOiBTdHJpbmcoaXRlcmF0ZWQpLFxuICAgICAgaW5kZXg6IDBcbiAgICB9KTtcbiAgLy8gYCVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLSVzdHJpbmdpdGVyYXRvcnByb3RvdHlwZSUubmV4dFxuICB9LCBmdW5jdGlvbiBuZXh0KCkge1xuICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhpcyk7XG4gICAgdmFyIHN0cmluZyA9IHN0YXRlLnN0cmluZztcbiAgICB2YXIgaW5kZXggPSBzdGF0ZS5pbmRleDtcbiAgICB2YXIgcG9pbnQ7XG4gICAgaWYgKGluZGV4ID49IHN0cmluZy5sZW5ndGgpIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgICBwb2ludCA9IGNoYXJBdCQxKHN0cmluZywgaW5kZXgpO1xuICAgIHN0YXRlLmluZGV4ICs9IHBvaW50Lmxlbmd0aDtcbiAgICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG4gIH0pO1xuXG4gIHZhciBtYXgkMSA9IE1hdGgubWF4O1xuICB2YXIgbWluJDMgPSBNYXRoLm1pbjtcbiAgdmFyIGZsb29yJDEgPSBNYXRoLmZsb29yO1xuICB2YXIgU1VCU1RJVFVUSU9OX1NZTUJPTFMgPSAvXFwkKFskJidgXXxcXGRcXGQ/fDxbXj5dKj4pL2c7XG4gIHZhciBTVUJTVElUVVRJT05fU1lNQk9MU19OT19OQU1FRCA9IC9cXCQoWyQmJ2BdfFxcZFxcZD8pL2c7XG5cbiAgdmFyIG1heWJlVG9TdHJpbmcgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/IGl0IDogU3RyaW5nKGl0KTtcbiAgfTtcblxuICAvLyBAQHJlcGxhY2UgbG9naWNcbiAgZml4UmVnZXhwV2VsbEtub3duU3ltYm9sTG9naWMoJ3JlcGxhY2UnLCAyLCBmdW5jdGlvbiAoUkVQTEFDRSwgbmF0aXZlUmVwbGFjZSwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2VgIG1ldGhvZFxuICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlXG4gICAgICBmdW5jdGlvbiByZXBsYWNlKHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpIHtcbiAgICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgICB2YXIgcmVwbGFjZXIgPSBzZWFyY2hWYWx1ZSA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZWFyY2hWYWx1ZVtSRVBMQUNFXTtcbiAgICAgICAgcmV0dXJuIHJlcGxhY2VyICE9PSB1bmRlZmluZWRcbiAgICAgICAgICA/IHJlcGxhY2VyLmNhbGwoc2VhcmNoVmFsdWUsIE8sIHJlcGxhY2VWYWx1ZSlcbiAgICAgICAgICA6IG5hdGl2ZVJlcGxhY2UuY2FsbChTdHJpbmcoTyksIHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpO1xuICAgICAgfSxcbiAgICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAcmVwbGFjZV1gIG1ldGhvZFxuICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHJlcGxhY2VcbiAgICAgIGZ1bmN0aW9uIChyZWdleHAsIHJlcGxhY2VWYWx1ZSkge1xuICAgICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZVJlcGxhY2UsIHJlZ2V4cCwgdGhpcywgcmVwbGFjZVZhbHVlKTtcbiAgICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICAgIHZhciByeCA9IGFuT2JqZWN0KHJlZ2V4cCk7XG4gICAgICAgIHZhciBTID0gU3RyaW5nKHRoaXMpO1xuXG4gICAgICAgIHZhciBmdW5jdGlvbmFsUmVwbGFjZSA9IHR5cGVvZiByZXBsYWNlVmFsdWUgPT09ICdmdW5jdGlvbic7XG4gICAgICAgIGlmICghZnVuY3Rpb25hbFJlcGxhY2UpIHJlcGxhY2VWYWx1ZSA9IFN0cmluZyhyZXBsYWNlVmFsdWUpO1xuXG4gICAgICAgIHZhciBnbG9iYWwgPSByeC5nbG9iYWw7XG4gICAgICAgIGlmIChnbG9iYWwpIHtcbiAgICAgICAgICB2YXIgZnVsbFVuaWNvZGUgPSByeC51bmljb2RlO1xuICAgICAgICAgIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVnZXhwRXhlY0Fic3RyYWN0KHJ4LCBTKTtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsKSBicmVhaztcblxuICAgICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgICAgICAgIGlmICghZ2xvYmFsKSBicmVhaztcblxuICAgICAgICAgIHZhciBtYXRjaFN0ciA9IFN0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICAgIGlmIChtYXRjaFN0ciA9PT0gJycpIHJ4Lmxhc3RJbmRleCA9IGFkdmFuY2VTdHJpbmdJbmRleChTLCB0b0xlbmd0aChyeC5sYXN0SW5kZXgpLCBmdWxsVW5pY29kZSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYWNjdW11bGF0ZWRSZXN1bHQgPSAnJztcbiAgICAgICAgdmFyIG5leHRTb3VyY2VQb3NpdGlvbiA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdHNbaV07XG5cbiAgICAgICAgICB2YXIgbWF0Y2hlZCA9IFN0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICAgIHZhciBwb3NpdGlvbiA9IG1heCQxKG1pbiQzKHRvSW50ZWdlcihyZXN1bHQuaW5kZXgpLCBTLmxlbmd0aCksIDApO1xuICAgICAgICAgIHZhciBjYXB0dXJlcyA9IFtdO1xuICAgICAgICAgIC8vIE5PVEU6IFRoaXMgaXMgZXF1aXZhbGVudCB0b1xuICAgICAgICAgIC8vICAgY2FwdHVyZXMgPSByZXN1bHQuc2xpY2UoMSkubWFwKG1heWJlVG9TdHJpbmcpXG4gICAgICAgICAgLy8gYnV0IGZvciBzb21lIHJlYXNvbiBgbmF0aXZlU2xpY2UuY2FsbChyZXN1bHQsIDEsIHJlc3VsdC5sZW5ndGgpYCAoY2FsbGVkIGluXG4gICAgICAgICAgLy8gdGhlIHNsaWNlIHBvbHlmaWxsIHdoZW4gc2xpY2luZyBuYXRpdmUgYXJyYXlzKSBcImRvZXNuJ3Qgd29ya1wiIGluIHNhZmFyaSA5IGFuZFxuICAgICAgICAgIC8vIGNhdXNlcyBhIGNyYXNoIChodHRwczovL3Bhc3RlYmluLmNvbS9OMjFRemVRQSkgd2hlbiB0cnlpbmcgdG8gZGVidWcgaXQuXG4gICAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCByZXN1bHQubGVuZ3RoOyBqKyspIGNhcHR1cmVzLnB1c2gobWF5YmVUb1N0cmluZyhyZXN1bHRbal0pKTtcbiAgICAgICAgICB2YXIgbmFtZWRDYXB0dXJlcyA9IHJlc3VsdC5ncm91cHM7XG4gICAgICAgICAgaWYgKGZ1bmN0aW9uYWxSZXBsYWNlKSB7XG4gICAgICAgICAgICB2YXIgcmVwbGFjZXJBcmdzID0gW21hdGNoZWRdLmNvbmNhdChjYXB0dXJlcywgcG9zaXRpb24sIFMpO1xuICAgICAgICAgICAgaWYgKG5hbWVkQ2FwdHVyZXMgIT09IHVuZGVmaW5lZCkgcmVwbGFjZXJBcmdzLnB1c2gobmFtZWRDYXB0dXJlcyk7XG4gICAgICAgICAgICB2YXIgcmVwbGFjZW1lbnQgPSBTdHJpbmcocmVwbGFjZVZhbHVlLmFwcGx5KHVuZGVmaW5lZCwgcmVwbGFjZXJBcmdzKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlcGxhY2VtZW50ID0gZ2V0U3Vic3RpdHV0aW9uKG1hdGNoZWQsIFMsIHBvc2l0aW9uLCBjYXB0dXJlcywgbmFtZWRDYXB0dXJlcywgcmVwbGFjZVZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHBvc2l0aW9uID49IG5leHRTb3VyY2VQb3NpdGlvbikge1xuICAgICAgICAgICAgYWNjdW11bGF0ZWRSZXN1bHQgKz0gUy5zbGljZShuZXh0U291cmNlUG9zaXRpb24sIHBvc2l0aW9uKSArIHJlcGxhY2VtZW50O1xuICAgICAgICAgICAgbmV4dFNvdXJjZVBvc2l0aW9uID0gcG9zaXRpb24gKyBtYXRjaGVkLmxlbmd0aDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjY3VtdWxhdGVkUmVzdWx0ICsgUy5zbGljZShuZXh0U291cmNlUG9zaXRpb24pO1xuICAgICAgfVxuICAgIF07XG5cbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1nZXRzdWJzdGl0dXRpb25cbiAgICBmdW5jdGlvbiBnZXRTdWJzdGl0dXRpb24obWF0Y2hlZCwgc3RyLCBwb3NpdGlvbiwgY2FwdHVyZXMsIG5hbWVkQ2FwdHVyZXMsIHJlcGxhY2VtZW50KSB7XG4gICAgICB2YXIgdGFpbFBvcyA9IHBvc2l0aW9uICsgbWF0Y2hlZC5sZW5ndGg7XG4gICAgICB2YXIgbSA9IGNhcHR1cmVzLmxlbmd0aDtcbiAgICAgIHZhciBzeW1ib2xzID0gU1VCU1RJVFVUSU9OX1NZTUJPTFNfTk9fTkFNRUQ7XG4gICAgICBpZiAobmFtZWRDYXB0dXJlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG5hbWVkQ2FwdHVyZXMgPSB0b09iamVjdChuYW1lZENhcHR1cmVzKTtcbiAgICAgICAgc3ltYm9scyA9IFNVQlNUSVRVVElPTl9TWU1CT0xTO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5hdGl2ZVJlcGxhY2UuY2FsbChyZXBsYWNlbWVudCwgc3ltYm9scywgZnVuY3Rpb24gKG1hdGNoLCBjaCkge1xuICAgICAgICB2YXIgY2FwdHVyZTtcbiAgICAgICAgc3dpdGNoIChjaC5jaGFyQXQoMCkpIHtcbiAgICAgICAgICBjYXNlICckJzogcmV0dXJuICckJztcbiAgICAgICAgICBjYXNlICcmJzogcmV0dXJuIG1hdGNoZWQ7XG4gICAgICAgICAgY2FzZSAnYCc6IHJldHVybiBzdHIuc2xpY2UoMCwgcG9zaXRpb24pO1xuICAgICAgICAgIGNhc2UgXCInXCI6IHJldHVybiBzdHIuc2xpY2UodGFpbFBvcyk7XG4gICAgICAgICAgY2FzZSAnPCc6XG4gICAgICAgICAgICBjYXB0dXJlID0gbmFtZWRDYXB0dXJlc1tjaC5zbGljZSgxLCAtMSldO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDogLy8gXFxkXFxkP1xuICAgICAgICAgICAgdmFyIG4gPSArY2g7XG4gICAgICAgICAgICBpZiAobiA9PT0gMCkgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgICAgaWYgKG4gPiBtKSB7XG4gICAgICAgICAgICAgIHZhciBmID0gZmxvb3IkMShuIC8gMTApO1xuICAgICAgICAgICAgICBpZiAoZiA9PT0gMCkgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgICAgICBpZiAoZiA8PSBtKSByZXR1cm4gY2FwdHVyZXNbZiAtIDFdID09PSB1bmRlZmluZWQgPyBjaC5jaGFyQXQoMSkgOiBjYXB0dXJlc1tmIC0gMV0gKyBjaC5jaGFyQXQoMSk7XG4gICAgICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhcHR1cmUgPSBjYXB0dXJlc1tuIC0gMV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhcHR1cmUgPT09IHVuZGVmaW5lZCA/ICcnIDogY2FwdHVyZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gaXRlcmFibGUgRE9NIGNvbGxlY3Rpb25zXG4gIC8vIGZsYWcgLSBgaXRlcmFibGVgIGludGVyZmFjZSAtICdlbnRyaWVzJywgJ2tleXMnLCAndmFsdWVzJywgJ2ZvckVhY2gnIG1ldGhvZHNcbiAgdmFyIGRvbUl0ZXJhYmxlcyA9IHtcbiAgICBDU1NSdWxlTGlzdDogMCxcbiAgICBDU1NTdHlsZURlY2xhcmF0aW9uOiAwLFxuICAgIENTU1ZhbHVlTGlzdDogMCxcbiAgICBDbGllbnRSZWN0TGlzdDogMCxcbiAgICBET01SZWN0TGlzdDogMCxcbiAgICBET01TdHJpbmdMaXN0OiAwLFxuICAgIERPTVRva2VuTGlzdDogMSxcbiAgICBEYXRhVHJhbnNmZXJJdGVtTGlzdDogMCxcbiAgICBGaWxlTGlzdDogMCxcbiAgICBIVE1MQWxsQ29sbGVjdGlvbjogMCxcbiAgICBIVE1MQ29sbGVjdGlvbjogMCxcbiAgICBIVE1MRm9ybUVsZW1lbnQ6IDAsXG4gICAgSFRNTFNlbGVjdEVsZW1lbnQ6IDAsXG4gICAgTWVkaWFMaXN0OiAwLFxuICAgIE1pbWVUeXBlQXJyYXk6IDAsXG4gICAgTmFtZWROb2RlTWFwOiAwLFxuICAgIE5vZGVMaXN0OiAxLFxuICAgIFBhaW50UmVxdWVzdExpc3Q6IDAsXG4gICAgUGx1Z2luOiAwLFxuICAgIFBsdWdpbkFycmF5OiAwLFxuICAgIFNWR0xlbmd0aExpc3Q6IDAsXG4gICAgU1ZHTnVtYmVyTGlzdDogMCxcbiAgICBTVkdQYXRoU2VnTGlzdDogMCxcbiAgICBTVkdQb2ludExpc3Q6IDAsXG4gICAgU1ZHU3RyaW5nTGlzdDogMCxcbiAgICBTVkdUcmFuc2Zvcm1MaXN0OiAwLFxuICAgIFNvdXJjZUJ1ZmZlckxpc3Q6IDAsXG4gICAgU3R5bGVTaGVldExpc3Q6IDAsXG4gICAgVGV4dFRyYWNrQ3VlTGlzdDogMCxcbiAgICBUZXh0VHJhY2tMaXN0OiAwLFxuICAgIFRvdWNoTGlzdDogMFxuICB9O1xuXG4gIHZhciBzbG9wcHlBcnJheU1ldGhvZCA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSwgYXJndW1lbnQpIHtcbiAgICB2YXIgbWV0aG9kID0gW11bTUVUSE9EX05BTUVdO1xuICAgIHJldHVybiAhbWV0aG9kIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1jYWxsLG5vLXRocm93LWxpdGVyYWxcbiAgICAgIG1ldGhvZC5jYWxsKG51bGwsIGFyZ3VtZW50IHx8IGZ1bmN0aW9uICgpIHsgdGhyb3cgMTsgfSwgMSk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyICRmb3JFYWNoID0gYXJyYXlJdGVyYXRpb24uZm9yRWFjaDtcblxuXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG4gIHZhciBhcnJheUZvckVhY2ggPSBzbG9wcHlBcnJheU1ldGhvZCgnZm9yRWFjaCcpID8gZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkZm9yRWFjaCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH0gOiBbXS5mb3JFYWNoO1xuXG4gIGZvciAodmFyIENPTExFQ1RJT05fTkFNRSBpbiBkb21JdGVyYWJsZXMpIHtcbiAgICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbF8xW0NPTExFQ1RJT05fTkFNRV07XG4gICAgdmFyIENvbGxlY3Rpb25Qcm90b3R5cGUgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICAgIC8vIHNvbWUgQ2hyb21lIHZlcnNpb25zIGhhdmUgbm9uLWNvbmZpZ3VyYWJsZSBtZXRob2RzIG9uIERPTVRva2VuTGlzdFxuICAgIGlmIChDb2xsZWN0aW9uUHJvdG90eXBlICYmIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCAhPT0gYXJyYXlGb3JFYWNoKSB0cnkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KENvbGxlY3Rpb25Qcm90b3R5cGUsICdmb3JFYWNoJywgYXJyYXlGb3JFYWNoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoID0gYXJyYXlGb3JFYWNoO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIC8qKlxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICogQ29yZVVJICh2Mi4xLjE2KTogYWpheC1sb2FkLmpzXHJcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2NvcmV1aS5pby9saWNlbnNlKVxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICovXG5cbiAgdmFyIEFqYXhMb2FkID0gZnVuY3Rpb24gKCQpIHtcbiAgICAvKipcclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICogQ29uc3RhbnRzXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqL1xuICAgIHZhciBOQU1FID0gJ2FqYXhMb2FkJztcbiAgICB2YXIgVkVSU0lPTiA9ICcyLjEuMTYnO1xuICAgIHZhciBEQVRBX0tFWSA9ICdjb3JldWkuYWpheExvYWQnO1xuICAgIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdO1xuICAgIHZhciBDbGFzc05hbWUgPSB7XG4gICAgICBBQ1RJVkU6ICdhY3RpdmUnLFxuICAgICAgTkFWX1BJTExTOiAnbmF2LXBpbGxzJyxcbiAgICAgIE5BVl9UQUJTOiAnbmF2LXRhYnMnLFxuICAgICAgT1BFTjogJ29wZW4nLFxuICAgICAgVklFV19TQ1JJUFQ6ICd2aWV3LXNjcmlwdCdcbiAgICB9O1xuICAgIHZhciBFdmVudCA9IHtcbiAgICAgIENMSUNLOiAnY2xpY2snXG4gICAgfTtcbiAgICB2YXIgU2VsZWN0b3IgPSB7XG4gICAgICBIRUFEOiAnaGVhZCcsXG4gICAgICBOQVZfRFJPUERPV046ICcuc2lkZWJhci1uYXYgLm5hdi1kcm9wZG93bicsXG4gICAgICBOQVZfTElOSzogJy5zaWRlYmFyLW5hdiAubmF2LWxpbmsnLFxuICAgICAgTkFWX0lURU06ICcuc2lkZWJhci1uYXYgLm5hdi1pdGVtJyxcbiAgICAgIFZJRVdfU0NSSVBUOiAnLnZpZXctc2NyaXB0J1xuICAgIH07XG4gICAgdmFyIERlZmF1bHQgPSB7XG4gICAgICBkZWZhdWx0UGFnZTogJ21haW4uaHRtbCcsXG4gICAgICBlcnJvclBhZ2U6ICc0MDQuaHRtbCcsXG4gICAgICBzdWJwYWdlc0RpcmVjdG9yeTogJ3ZpZXdzLydcbiAgICB9O1xuXG4gICAgdmFyIEFqYXhMb2FkID1cbiAgICAvKiNfX1BVUkVfXyovXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgZnVuY3Rpb24gQWpheExvYWQoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpO1xuICAgICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdmFyIHVybCA9IGxvY2F0aW9uLmhhc2gucmVwbGFjZSgvXiMvLCAnJyk7XG5cbiAgICAgICAgaWYgKHVybCAhPT0gJycpIHtcbiAgICAgICAgICB0aGlzLnNldFVwVXJsKHVybCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRVcFVybCh0aGlzLl9jb25maWcuZGVmYXVsdFBhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgICAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpO1xuICAgICAgfSAvLyBHZXR0ZXJzXG5cblxuICAgICAgdmFyIF9wcm90byA9IEFqYXhMb2FkLnByb3RvdHlwZTtcblxuICAgICAgLy8gUHVibGljXG4gICAgICBfcHJvdG8ubG9hZFBhZ2UgPSBmdW5jdGlvbiBsb2FkUGFnZSh1cmwpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuICAgICAgICB2YXIgY29uZmlnID0gdGhpcy5fY29uZmlnO1xuXG4gICAgICAgIHZhciBsb2FkU2NyaXB0cyA9IGZ1bmN0aW9uIGxvYWRTY3JpcHRzKHNyYywgZWxlbWVudCkge1xuICAgICAgICAgIGlmIChlbGVtZW50ID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGVsZW1lbnQgPSAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgICAgIHNjcmlwdC5zcmMgPSBzcmNbZWxlbWVudF07XG4gICAgICAgICAgc2NyaXB0LmNsYXNzTmFtZSA9IENsYXNzTmFtZS5WSUVXX1NDUklQVDsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW11bHRpLWFzc2lnblxuXG4gICAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucmVhZHlTdGF0ZSB8fCB0aGlzLnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgICAgICAgaWYgKHNyYy5sZW5ndGggPiBlbGVtZW50ICsgMSkge1xuICAgICAgICAgICAgICAgIGxvYWRTY3JpcHRzKHNyYywgZWxlbWVudCArIDEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcbiAgICAgICAgICBib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICB0eXBlOiAnR0VUJyxcbiAgICAgICAgICB1cmw6IGNvbmZpZy5zdWJwYWdlc0RpcmVjdG9yeSArIHVybCxcbiAgICAgICAgICBkYXRhVHlwZTogJ2h0bWwnLFxuICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uIGJlZm9yZVNlbmQoKSB7XG4gICAgICAgICAgICAkKFNlbGVjdG9yLlZJRVdfU0NSSVBUKS5yZW1vdmUoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MocmVzdWx0KSB7XG4gICAgICAgICAgICB2YXIgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgd3JhcHBlci5pbm5lckhUTUwgPSByZXN1bHQ7XG4gICAgICAgICAgICB2YXIgc2NyaXB0cyA9IEFycmF5LmZyb20od3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHQnKSkubWFwKGZ1bmN0aW9uIChzY3JpcHQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNjcmlwdC5hdHRyaWJ1dGVzLmdldE5hbWVkSXRlbSgnc3JjJykubm9kZVZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdCcpLmZvckVhY2goZnVuY3Rpb24gKHNjcmlwdCkge1xuICAgICAgICAgICAgICByZXR1cm4gc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJCgnYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICBzY3JvbGxUb3A6IDBcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgJChlbGVtZW50KS5odG1sKHdyYXBwZXIpO1xuXG4gICAgICAgICAgICBpZiAoc2NyaXB0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgbG9hZFNjcmlwdHMoc2NyaXB0cyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gdXJsO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIGVycm9yKCkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBjb25maWcuZXJyb3JQYWdlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uc2V0VXBVcmwgPSBmdW5jdGlvbiBzZXRVcFVybCh1cmwpIHtcbiAgICAgICAgJChTZWxlY3Rvci5OQVZfTElOSykucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSk7XG4gICAgICAgICQoU2VsZWN0b3IuTkFWX0RST1BET1dOKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuT1BFTik7XG4gICAgICAgICQoU2VsZWN0b3IuTkFWX0RST1BET1dOICsgXCI6aGFzKGFbaHJlZj1cXFwiXCIgKyB1cmwucmVwbGFjZSgvXlxcLy8sICcnKS5zcGxpdCgnPycpWzBdICsgXCJcXFwiXSlcIikuYWRkQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pO1xuICAgICAgICAkKFNlbGVjdG9yLk5BVl9JVEVNICsgXCIgYVtocmVmPVxcXCJcIiArIHVybC5yZXBsYWNlKC9eXFwvLywgJycpLnNwbGl0KCc/JylbMF0gKyBcIlxcXCJdXCIpLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpO1xuICAgICAgICB0aGlzLmxvYWRQYWdlKHVybCk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8ubG9hZEJsYW5rID0gZnVuY3Rpb24gbG9hZEJsYW5rKHVybCkge1xuICAgICAgICB3aW5kb3cub3Blbih1cmwpO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLmxvYWRUb3AgPSBmdW5jdGlvbiBsb2FkVG9wKHVybCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSB1cmw7XG4gICAgICB9IC8vIFByaXZhdGVcbiAgICAgIDtcblxuICAgICAgX3Byb3RvLl9nZXRDb25maWcgPSBmdW5jdGlvbiBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgICBjb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBEZWZhdWx0LCB7fSwgY29uZmlnKTtcbiAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5fYWRkRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oRXZlbnQuQ0xJQ0ssIFNlbGVjdG9yLk5BVl9MSU5LICsgXCJbaHJlZiE9XFxcIiNcXFwiXVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQudGFyZ2V0ID09PSAnX3RvcCcpIHtcbiAgICAgICAgICAgIF90aGlzLmxvYWRUb3AoZXZlbnQuY3VycmVudFRhcmdldC5ocmVmKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQudGFyZ2V0ID09PSAnX2JsYW5rJykge1xuICAgICAgICAgICAgX3RoaXMubG9hZEJsYW5rKGV2ZW50LmN1cnJlbnRUYXJnZXQuaHJlZik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLnNldFVwVXJsKGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uX3JlbW92ZUV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gX3JlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICAkKGRvY3VtZW50KS5vZmYoRXZlbnQuQ0xJQ0ssIFNlbGVjdG9yLk5BVl9MSU5LICsgXCJbaHJlZiE9XFxcIiNcXFwiXVwiKTtcbiAgICAgIH0gLy8gU3RhdGljXG4gICAgICA7XG5cbiAgICAgIEFqYXhMb2FkLl9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSk7XG5cbiAgICAgICAgICB2YXIgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZztcblxuICAgICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgZGF0YSA9IG5ldyBBamF4TG9hZCh0aGlzLCBfY29uZmlnKTtcbiAgICAgICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIF9jcmVhdGVDbGFzcyhBamF4TG9hZCwgbnVsbCwgW3tcbiAgICAgICAga2V5OiBcIlZFUlNJT05cIixcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIFZFUlNJT047XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiBcIkRlZmF1bHRcIixcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIERlZmF1bHQ7XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIEFqYXhMb2FkO1xuICAgIH0oKTtcbiAgICAvKipcclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICogalF1ZXJ5XHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqL1xuXG5cbiAgICAkLmZuW05BTUVdID0gQWpheExvYWQuX2pRdWVyeUludGVyZmFjZTtcbiAgICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gQWpheExvYWQ7XG5cbiAgICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUO1xuICAgICAgcmV0dXJuIEFqYXhMb2FkLl9qUXVlcnlJbnRlcmZhY2U7XG4gICAgfTtcblxuICAgIHJldHVybiBBamF4TG9hZDtcbiAgfSgkKTtcblxuICB2YXIgU1BFQ0lFUyQ0ID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG4gIHZhciBuYXRpdmVTbGljZSA9IFtdLnNsaWNlO1xuICB2YXIgbWF4JDIgPSBNYXRoLm1heDtcblxuICAvLyBgQXJyYXkucHJvdG90eXBlLnNsaWNlYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnNsaWNlXG4gIC8vIGZhbGxiYWNrIGZvciBub3QgYXJyYXktbGlrZSBFUzMgc3RyaW5ncyBhbmQgRE9NIG9iamVjdHNcbiAgX2V4cG9ydCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIWFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ3NsaWNlJykgfSwge1xuICAgIHNsaWNlOiBmdW5jdGlvbiBzbGljZShzdGFydCwgZW5kKSB7XG4gICAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdCh0aGlzKTtcbiAgICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICB2YXIgayA9IHRvQWJzb2x1dGVJbmRleChzdGFydCwgbGVuZ3RoKTtcbiAgICAgIHZhciBmaW4gPSB0b0Fic29sdXRlSW5kZXgoZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiBlbmQsIGxlbmd0aCk7XG4gICAgICAvLyBpbmxpbmUgYEFycmF5U3BlY2llc0NyZWF0ZWAgZm9yIHVzYWdlIG5hdGl2ZSBgQXJyYXkjc2xpY2VgIHdoZXJlIGl0J3MgcG9zc2libGVcbiAgICAgIHZhciBDb25zdHJ1Y3RvciwgcmVzdWx0LCBuO1xuICAgICAgaWYgKGlzQXJyYXkoTykpIHtcbiAgICAgICAgQ29uc3RydWN0b3IgPSBPLmNvbnN0cnVjdG9yO1xuICAgICAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgICAgICBpZiAodHlwZW9mIENvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgKENvbnN0cnVjdG9yID09PSBBcnJheSB8fCBpc0FycmF5KENvbnN0cnVjdG9yLnByb3RvdHlwZSkpKSB7XG4gICAgICAgICAgQ29uc3RydWN0b3IgPSB1bmRlZmluZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QoQ29uc3RydWN0b3IpKSB7XG4gICAgICAgICAgQ29uc3RydWN0b3IgPSBDb25zdHJ1Y3RvcltTUEVDSUVTJDRdO1xuICAgICAgICAgIGlmIChDb25zdHJ1Y3RvciA9PT0gbnVsbCkgQ29uc3RydWN0b3IgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKENvbnN0cnVjdG9yID09PSBBcnJheSB8fCBDb25zdHJ1Y3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIG5hdGl2ZVNsaWNlLmNhbGwoTywgaywgZmluKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVzdWx0ID0gbmV3IChDb25zdHJ1Y3RvciA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDb25zdHJ1Y3RvcikobWF4JDIoZmluIC0gaywgMCkpO1xuICAgICAgZm9yIChuID0gMDsgayA8IGZpbjsgaysrLCBuKyspIGlmIChrIGluIE8pIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgbiwgT1trXSk7XG4gICAgICByZXN1bHQubGVuZ3RoID0gbjtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9KTtcblxuICAvKipcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqIENvcmVVSSAodjIuMS4xNik6IHRvZ2dsZS1jbGFzc2VzLmpzXHJcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2NvcmV1aS5pby9saWNlbnNlKVxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICovXG4gIHZhciByZW1vdmVDbGFzc2VzID0gZnVuY3Rpb24gcmVtb3ZlQ2xhc3NlcyhjbGFzc05hbWVzKSB7XG4gICAgcmV0dXJuIGNsYXNzTmFtZXMubWFwKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xuICAgIH0pLmluZGV4T2YodHJ1ZSkgIT09IC0xO1xuICB9O1xuXG4gIHZhciB0b2dnbGVDbGFzc2VzID0gZnVuY3Rpb24gdG9nZ2xlQ2xhc3Nlcyh0b2dnbGVDbGFzcywgY2xhc3NOYW1lcykge1xuICAgIHZhciBicmVha3BvaW50ID0gY2xhc3NOYW1lcy5pbmRleE9mKHRvZ2dsZUNsYXNzKTtcbiAgICB2YXIgbmV3Q2xhc3NOYW1lcyA9IGNsYXNzTmFtZXMuc2xpY2UoMCwgYnJlYWtwb2ludCArIDEpO1xuXG4gICAgaWYgKHJlbW92ZUNsYXNzZXMobmV3Q2xhc3NOYW1lcykpIHtcbiAgICAgIG5ld0NsYXNzTmFtZXMubWFwKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCh0b2dnbGVDbGFzcyk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICogQ29yZVVJICh2Mi4xLjE2KTogYXNpZGUtbWVudS5qc1xyXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9jb3JldWkuaW8vbGljZW5zZSlcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqL1xuXG4gIHZhciBBc2lkZU1lbnUgPSBmdW5jdGlvbiAoJCkge1xuICAgIC8qKlxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKiBDb25zdGFudHNcclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICovXG4gICAgdmFyIE5BTUUgPSAnYXNpZGUtbWVudSc7XG4gICAgdmFyIFZFUlNJT04gPSAnMi4xLjE2JztcbiAgICB2YXIgREFUQV9LRVkgPSAnY29yZXVpLmFzaWRlLW1lbnUnO1xuICAgIHZhciBFVkVOVF9LRVkgPSBcIi5cIiArIERBVEFfS0VZO1xuICAgIHZhciBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJztcbiAgICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXTtcbiAgICB2YXIgRXZlbnQgPSB7XG4gICAgICBDTElDSzogJ2NsaWNrJyxcbiAgICAgIExPQURfREFUQV9BUEk6IFwibG9hZFwiICsgRVZFTlRfS0VZICsgREFUQV9BUElfS0VZLFxuICAgICAgVE9HR0xFOiAndG9nZ2xlJ1xuICAgIH07XG4gICAgdmFyIFNlbGVjdG9yID0ge1xuICAgICAgQk9EWTogJ2JvZHknLFxuICAgICAgQVNJREVfTUVOVTogJy5hc2lkZS1tZW51JyxcbiAgICAgIEFTSURFX01FTlVfVE9HR0xFUjogJy5hc2lkZS1tZW51LXRvZ2dsZXInXG4gICAgfTtcbiAgICB2YXIgU2hvd0NsYXNzTmFtZXMgPSBbJ2FzaWRlLW1lbnUtc2hvdycsICdhc2lkZS1tZW51LXNtLXNob3cnLCAnYXNpZGUtbWVudS1tZC1zaG93JywgJ2FzaWRlLW1lbnUtbGctc2hvdycsICdhc2lkZS1tZW51LXhsLXNob3cnXTtcbiAgICAvKipcclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICogQ2xhc3MgRGVmaW5pdGlvblxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKi9cblxuICAgIHZhciBBc2lkZU1lbnUgPVxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICBmdW5jdGlvbiBBc2lkZU1lbnUoZWxlbWVudCkge1xuICAgICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcblxuICAgICAgICB0aGlzLl9yZW1vdmVFdmVudExpc3RlbmVycygpO1xuXG4gICAgICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICB9IC8vIEdldHRlcnNcblxuXG4gICAgICB2YXIgX3Byb3RvID0gQXNpZGVNZW51LnByb3RvdHlwZTtcblxuICAgICAgLy8gUHJpdmF0ZVxuICAgICAgX3Byb3RvLl9hZGRFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgJChkb2N1bWVudCkub24oRXZlbnQuQ0xJQ0ssIFNlbGVjdG9yLkFTSURFX01FTlVfVE9HR0xFUiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB2YXIgdG9nZ2xlID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0ID8gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnRvZ2dsZSA6ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgndG9nZ2xlJyk7XG4gICAgICAgICAgdG9nZ2xlQ2xhc3Nlcyh0b2dnbGUsIFNob3dDbGFzc05hbWVzKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uX3JlbW92ZUV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gX3JlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICAkKGRvY3VtZW50KS5vZmYoRXZlbnQuQ0xJQ0ssIFNlbGVjdG9yLkFTSURFX01FTlVfVE9HR0xFUik7XG4gICAgICB9IC8vIFN0YXRpY1xuICAgICAgO1xuXG4gICAgICBBc2lkZU1lbnUuX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciAkZWxlbWVudCA9ICQodGhpcyk7XG4gICAgICAgICAgdmFyIGRhdGEgPSAkZWxlbWVudC5kYXRhKERBVEFfS0VZKTtcblxuICAgICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgZGF0YSA9IG5ldyBBc2lkZU1lbnUodGhpcyk7XG4gICAgICAgICAgICAkZWxlbWVudC5kYXRhKERBVEFfS0VZLCBkYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgX2NyZWF0ZUNsYXNzKEFzaWRlTWVudSwgbnVsbCwgW3tcbiAgICAgICAga2V5OiBcIlZFUlNJT05cIixcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIFZFUlNJT047XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIEFzaWRlTWVudTtcbiAgICB9KCk7XG4gICAgLyoqXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqL1xuXG5cbiAgICAkKHdpbmRvdykub25lKEV2ZW50LkxPQURfREFUQV9BUEksIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBhc2lkZU1lbnUgPSAkKFNlbGVjdG9yLkFTSURFX01FTlUpO1xuXG4gICAgICBBc2lkZU1lbnUuX2pRdWVyeUludGVyZmFjZS5jYWxsKGFzaWRlTWVudSk7XG4gICAgfSk7XG4gICAgLyoqXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqIGpRdWVyeVxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKi9cblxuICAgICQuZm5bTkFNRV0gPSBBc2lkZU1lbnUuX2pRdWVyeUludGVyZmFjZTtcbiAgICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gQXNpZGVNZW51O1xuXG4gICAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVDtcbiAgICAgIHJldHVybiBBc2lkZU1lbnUuX2pRdWVyeUludGVyZmFjZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEFzaWRlTWVudTtcbiAgfSgkKTtcblxuICB2YXIgVU5TQ09QQUJMRVMgPSB3ZWxsS25vd25TeW1ib2woJ3Vuc2NvcGFibGVzJyk7XG4gIHZhciBBcnJheVByb3RvdHlwZSQxID0gQXJyYXkucHJvdG90eXBlO1xuXG4gIC8vIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuICBpZiAoQXJyYXlQcm90b3R5cGUkMVtVTlNDT1BBQkxFU10gPT0gdW5kZWZpbmVkKSB7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KEFycmF5UHJvdG90eXBlJDEsIFVOU0NPUEFCTEVTLCBvYmplY3RDcmVhdGUobnVsbCkpO1xuICB9XG5cbiAgLy8gYWRkIGEga2V5IHRvIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxuICB2YXIgYWRkVG9VbnNjb3BhYmxlcyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICBBcnJheVByb3RvdHlwZSQxW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbiAgfTtcblxuICB2YXIgJGZpbmQgPSBhcnJheUl0ZXJhdGlvbi5maW5kO1xuXG5cbiAgdmFyIEZJTkQgPSAnZmluZCc7XG4gIHZhciBTS0lQU19IT0xFUyA9IHRydWU7XG5cbiAgLy8gU2hvdWxkbid0IHNraXAgaG9sZXNcbiAgaWYgKEZJTkQgaW4gW10pIEFycmF5KDEpW0ZJTkRdKGZ1bmN0aW9uICgpIHsgU0tJUFNfSE9MRVMgPSBmYWxzZTsgfSk7XG5cbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maW5kYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRcbiAgX2V4cG9ydCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogU0tJUFNfSE9MRVMgfSwge1xuICAgIGZpbmQ6IGZ1bmN0aW9uIGZpbmQoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuICBhZGRUb1Vuc2NvcGFibGVzKEZJTkQpO1xuXG4gIC8vIEBAbWF0Y2ggbG9naWNcbiAgZml4UmVnZXhwV2VsbEtub3duU3ltYm9sTG9naWMoJ21hdGNoJywgMSwgZnVuY3Rpb24gKE1BVENILCBuYXRpdmVNYXRjaCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLm1hdGNoYCBtZXRob2RcbiAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUubWF0Y2hcbiAgICAgIGZ1bmN0aW9uIG1hdGNoKHJlZ2V4cCkge1xuICAgICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICAgIHZhciBtYXRjaGVyID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHJlZ2V4cFtNQVRDSF07XG4gICAgICAgIHJldHVybiBtYXRjaGVyICE9PSB1bmRlZmluZWQgPyBtYXRjaGVyLmNhbGwocmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtNQVRDSF0oU3RyaW5nKE8pKTtcbiAgICAgIH0sXG4gICAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQG1hdGNoXWAgbWV0aG9kXG4gICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAbWF0Y2hcbiAgICAgIGZ1bmN0aW9uIChyZWdleHApIHtcbiAgICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVNYXRjaCwgcmVnZXhwLCB0aGlzKTtcbiAgICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICAgIHZhciByeCA9IGFuT2JqZWN0KHJlZ2V4cCk7XG4gICAgICAgIHZhciBTID0gU3RyaW5nKHRoaXMpO1xuXG4gICAgICAgIGlmICghcnguZ2xvYmFsKSByZXR1cm4gcmVnZXhwRXhlY0Fic3RyYWN0KHJ4LCBTKTtcblxuICAgICAgICB2YXIgZnVsbFVuaWNvZGUgPSByeC51bmljb2RlO1xuICAgICAgICByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgICB2YXIgQSA9IFtdO1xuICAgICAgICB2YXIgbiA9IDA7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHdoaWxlICgocmVzdWx0ID0gcmVnZXhwRXhlY0Fic3RyYWN0KHJ4LCBTKSkgIT09IG51bGwpIHtcbiAgICAgICAgICB2YXIgbWF0Y2hTdHIgPSBTdHJpbmcocmVzdWx0WzBdKTtcbiAgICAgICAgICBBW25dID0gbWF0Y2hTdHI7XG4gICAgICAgICAgaWYgKG1hdGNoU3RyID09PSAnJykgcngubGFzdEluZGV4ID0gYWR2YW5jZVN0cmluZ0luZGV4KFMsIHRvTGVuZ3RoKHJ4Lmxhc3RJbmRleCksIGZ1bGxVbmljb2RlKTtcbiAgICAgICAgICBuKys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG4gPT09IDAgPyBudWxsIDogQTtcbiAgICAgIH1cbiAgICBdO1xuICB9KTtcblxuICAvLyBhIHN0cmluZyBvZiBhbGwgdmFsaWQgdW5pY29kZSB3aGl0ZXNwYWNlc1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICB2YXIgd2hpdGVzcGFjZXMgPSAnXFx1MDAwOVxcdTAwMEFcXHUwMDBCXFx1MDAwQ1xcdTAwMERcXHUwMDIwXFx1MDBBMFxcdTE2ODBcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjhcXHUyMDI5XFx1RkVGRic7XG5cbiAgdmFyIHdoaXRlc3BhY2UgPSAnWycgKyB3aGl0ZXNwYWNlcyArICddJztcbiAgdmFyIGx0cmltID0gUmVnRXhwKCdeJyArIHdoaXRlc3BhY2UgKyB3aGl0ZXNwYWNlICsgJyonKTtcbiAgdmFyIHJ0cmltID0gUmVnRXhwKHdoaXRlc3BhY2UgKyB3aGl0ZXNwYWNlICsgJyokJyk7XG5cbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltLCB0cmltU3RhcnQsIHRyaW1FbmQsIHRyaW1MZWZ0LCB0cmltUmlnaHQgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxuICB2YXIgY3JlYXRlTWV0aG9kJDMgPSBmdW5jdGlvbiAoVFlQRSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoJHRoaXMpIHtcbiAgICAgIHZhciBzdHJpbmcgPSBTdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSgkdGhpcykpO1xuICAgICAgaWYgKFRZUEUgJiAxKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShsdHJpbSwgJycpO1xuICAgICAgaWYgKFRZUEUgJiAyKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShydHJpbSwgJycpO1xuICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9O1xuICB9O1xuXG4gIHZhciBzdHJpbmdUcmltID0ge1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbUxlZnQsIHRyaW1TdGFydCB9YCBtZXRob2RzXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltc3RhcnRcbiAgICBzdGFydDogY3JlYXRlTWV0aG9kJDMoMSksXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltUmlnaHQsIHRyaW1FbmQgfWAgbWV0aG9kc1xuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbWVuZFxuICAgIGVuZDogY3JlYXRlTWV0aG9kJDMoMiksXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUudHJpbWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltXG4gICAgdHJpbTogY3JlYXRlTWV0aG9kJDMoMylcbiAgfTtcblxuICB2YXIgbm9uID0gJ1xcdTIwMEJcXHUwMDg1XFx1MTgwRSc7XG5cbiAgLy8gY2hlY2sgdGhhdCBhIG1ldGhvZCB3b3JrcyB3aXRoIHRoZSBjb3JyZWN0IGxpc3RcbiAgLy8gb2Ygd2hpdGVzcGFjZXMgYW5kIGhhcyBhIGNvcnJlY3QgbmFtZVxuICB2YXIgZm9yY2VkU3RyaW5nVHJpbU1ldGhvZCA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICAgIHJldHVybiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gISF3aGl0ZXNwYWNlc1tNRVRIT0RfTkFNRV0oKSB8fCBub25bTUVUSE9EX05BTUVdKCkgIT0gbm9uIHx8IHdoaXRlc3BhY2VzW01FVEhPRF9OQU1FXS5uYW1lICE9PSBNRVRIT0RfTkFNRTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgJHRyaW0gPSBzdHJpbmdUcmltLnRyaW07XG5cblxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS50cmltYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltXG4gIF9leHBvcnQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBmb3JjZWRTdHJpbmdUcmltTWV0aG9kKCd0cmltJykgfSwge1xuICAgIHRyaW06IGZ1bmN0aW9uIHRyaW0oKSB7XG4gICAgICByZXR1cm4gJHRyaW0odGhpcyk7XG4gICAgfVxuICB9KTtcblxuICAvKipcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqIENvcmVVSSBVdGlsaXRpZXMgKHYyLjEuMTYpOiBnZXQtY3NzLWN1c3RvbS1wcm9wZXJ0aWVzLmpzXHJcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2NvcmV1aS5pby9saWNlbnNlKVxyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IGNzcyBjdXN0b20gcHJvcGVydHkgbmFtZVxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICovXG4gIHZhciBnZXRDc3NDdXN0b21Qcm9wZXJ0aWVzID0gZnVuY3Rpb24gZ2V0Q3NzQ3VzdG9tUHJvcGVydGllcygpIHtcbiAgICB2YXIgY3NzQ3VzdG9tUHJvcGVydGllcyA9IHt9O1xuICAgIHZhciBzaGVldHMgPSBkb2N1bWVudC5zdHlsZVNoZWV0cztcbiAgICB2YXIgY3NzVGV4dCA9ICcnO1xuXG4gICAgZm9yICh2YXIgaSA9IHNoZWV0cy5sZW5ndGggLSAxOyBpID4gLTE7IGktLSkge1xuICAgICAgdmFyIHJ1bGVzID0gc2hlZXRzW2ldLmNzc1J1bGVzO1xuXG4gICAgICBmb3IgKHZhciBqID0gcnVsZXMubGVuZ3RoIC0gMTsgaiA+IC0xOyBqLS0pIHtcbiAgICAgICAgaWYgKHJ1bGVzW2pdLnNlbGVjdG9yVGV4dCA9PT0gJy5pZS1jdXN0b20tcHJvcGVydGllcycpIHtcbiAgICAgICAgICBjc3NUZXh0ID0gcnVsZXNbal0uY3NzVGV4dDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY3NzVGV4dCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjc3NUZXh0ID0gY3NzVGV4dC5zdWJzdHJpbmcoY3NzVGV4dC5sYXN0SW5kZXhPZigneycpICsgMSwgY3NzVGV4dC5sYXN0SW5kZXhPZignfScpKTtcbiAgICBjc3NUZXh0LnNwbGl0KCc7JykuZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICAgIGlmIChwcm9wZXJ0eSkge1xuICAgICAgICB2YXIgbmFtZSA9IHByb3BlcnR5LnNwbGl0KCc6ICcpWzBdO1xuICAgICAgICB2YXIgdmFsdWUgPSBwcm9wZXJ0eS5zcGxpdCgnOiAnKVsxXTtcblxuICAgICAgICBpZiAobmFtZSAmJiB2YWx1ZSkge1xuICAgICAgICAgIGNzc0N1c3RvbVByb3BlcnRpZXNbXCItLVwiICsgbmFtZS50cmltKCldID0gdmFsdWUudHJpbSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGNzc0N1c3RvbVByb3BlcnRpZXM7XG4gIH07XG5cbiAgdmFyIG1pbklFVmVyc2lvbiA9IDEwO1xuXG4gIHZhciBpc0lFMXggPSBmdW5jdGlvbiBpc0lFMXgoKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4oZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSAmJiBkb2N1bWVudC5kb2N1bWVudE1vZGUgPj0gbWluSUVWZXJzaW9uO1xuICB9O1xuXG4gIHZhciBpc0N1c3RvbVByb3BlcnR5ID0gZnVuY3Rpb24gaXNDdXN0b21Qcm9wZXJ0eShwcm9wZXJ0eSkge1xuICAgIHJldHVybiBwcm9wZXJ0eS5tYXRjaCgvXi0tLiovaSk7XG4gIH07XG5cbiAgdmFyIGdldFN0eWxlID0gZnVuY3Rpb24gZ2V0U3R5bGUocHJvcGVydHksIGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCA9PT0gdm9pZCAwKSB7XG4gICAgICBlbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcbiAgICB9XG5cbiAgICB2YXIgc3R5bGU7XG5cbiAgICBpZiAoaXNDdXN0b21Qcm9wZXJ0eShwcm9wZXJ0eSkgJiYgaXNJRTF4KCkpIHtcbiAgICAgIHZhciBjc3NDdXN0b21Qcm9wZXJ0aWVzID0gZ2V0Q3NzQ3VzdG9tUHJvcGVydGllcygpO1xuICAgICAgc3R5bGUgPSBjc3NDdXN0b21Qcm9wZXJ0aWVzW3Byb3BlcnR5XTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5KS5yZXBsYWNlKC9eXFxzLywgJycpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZTtcbiAgfTtcblxuICAvKipcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqIENvcmVVSSAodjIuMS4xNik6IHNpZGViYXIuanNcclxuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vY29yZXVpLmlvL2xpY2Vuc2UpXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKi9cblxuICB2YXIgU2lkZWJhciA9IGZ1bmN0aW9uICgkKSB7XG4gICAgLyoqXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqIENvbnN0YW50c1xyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKi9cbiAgICB2YXIgTkFNRSA9ICdzaWRlYmFyJztcbiAgICB2YXIgVkVSU0lPTiA9ICcyLjEuMTYnO1xuICAgIHZhciBEQVRBX0tFWSA9ICdjb3JldWkuc2lkZWJhcic7XG4gICAgdmFyIEVWRU5UX0tFWSA9IFwiLlwiICsgREFUQV9LRVk7XG4gICAgdmFyIERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknO1xuICAgIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdO1xuICAgIHZhciBEZWZhdWx0ID0ge1xuICAgICAgdHJhbnNpdGlvbjogNDAwXG4gICAgfTtcbiAgICB2YXIgQ2xhc3NOYW1lID0ge1xuICAgICAgQUNUSVZFOiAnYWN0aXZlJyxcbiAgICAgIEJSQU5EX01JTklNSVpFRDogJ2JyYW5kLW1pbmltaXplZCcsXG4gICAgICBOQVZfRFJPUERPV05fVE9HR0xFOiAnbmF2LWRyb3Bkb3duLXRvZ2dsZScsXG4gICAgICBOQVZfTElOS19RVUVSSUVEOiAnbmF2LWxpbmstcXVlcmllZCcsXG4gICAgICBPUEVOOiAnb3BlbicsXG4gICAgICBTSURFQkFSX0ZJWEVEOiAnc2lkZWJhci1maXhlZCcsXG4gICAgICBTSURFQkFSX01JTklNSVpFRDogJ3NpZGViYXItbWluaW1pemVkJyxcbiAgICAgIFNJREVCQVJfT0ZGX0NBTlZBUzogJ3NpZGViYXItb2ZmLWNhbnZhcydcbiAgICB9O1xuICAgIHZhciBFdmVudCA9IHtcbiAgICAgIENMSUNLOiAnY2xpY2snLFxuICAgICAgREVTVFJPWTogJ2Rlc3Ryb3knLFxuICAgICAgSU5JVDogJ2luaXQnLFxuICAgICAgTE9BRF9EQVRBX0FQSTogXCJsb2FkXCIgKyBFVkVOVF9LRVkgKyBEQVRBX0FQSV9LRVksXG4gICAgICBUT0dHTEU6ICd0b2dnbGUnLFxuICAgICAgVVBEQVRFOiAndXBkYXRlJ1xuICAgIH07XG4gICAgdmFyIFNlbGVjdG9yID0ge1xuICAgICAgQk9EWTogJ2JvZHknLFxuICAgICAgQlJBTkRfTUlOSU1JWkVSOiAnLmJyYW5kLW1pbmltaXplcicsXG4gICAgICBOQVZfRFJPUERPV05fVE9HR0xFOiAnLm5hdi1kcm9wZG93bi10b2dnbGUnLFxuICAgICAgTkFWX0RST1BET1dOX0lURU1TOiAnLm5hdi1kcm9wZG93bi1pdGVtcycsXG4gICAgICBOQVZfSVRFTTogJy5uYXYtaXRlbScsXG4gICAgICBOQVZfTElOSzogJy5uYXYtbGluaycsXG4gICAgICBOQVZfTElOS19RVUVSSUVEOiAnLm5hdi1saW5rLXF1ZXJpZWQnLFxuICAgICAgTkFWSUdBVElPTl9DT05UQUlORVI6ICcuc2lkZWJhci1uYXYnLFxuICAgICAgTkFWSUdBVElPTjogJy5zaWRlYmFyLW5hdiA+IC5uYXYnLFxuICAgICAgU0lERUJBUjogJy5zaWRlYmFyJyxcbiAgICAgIFNJREVCQVJfTUlOSU1JWkVSOiAnLnNpZGViYXItbWluaW1pemVyJyxcbiAgICAgIFNJREVCQVJfVE9HR0xFUjogJy5zaWRlYmFyLXRvZ2dsZXInLFxuICAgICAgU0lERUJBUl9TQ1JPTEw6ICcuc2lkZWJhci1zY3JvbGwnXG4gICAgfTtcbiAgICB2YXIgU2hvd0NsYXNzTmFtZXMgPSBbJ3NpZGViYXItc2hvdycsICdzaWRlYmFyLXNtLXNob3cnLCAnc2lkZWJhci1tZC1zaG93JywgJ3NpZGViYXItbGctc2hvdycsICdzaWRlYmFyLXhsLXNob3cnXTtcbiAgICAvKipcclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICogQ2xhc3MgRGVmaW5pdGlvblxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKi9cblxuICAgIHZhciBTaWRlYmFyID1cbiAgICAvKiNfX1BVUkVfXyovXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgZnVuY3Rpb24gU2lkZWJhcihlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLm1vYmlsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBzID0gbnVsbDtcbiAgICAgICAgdGhpcy5wZXJmZWN0U2Nyb2xsYmFyKEV2ZW50LklOSVQpO1xuICAgICAgICB0aGlzLnNldEFjdGl2ZUxpbmsoKTtcbiAgICAgICAgdGhpcy5fYnJlYWtwb2ludFRlc3QgPSB0aGlzLl9icmVha3BvaW50VGVzdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9jbGlja091dExpc3RlbmVyID0gdGhpcy5fY2xpY2tPdXRMaXN0ZW5lci5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX3JlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICAgICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgICAgICB0aGlzLl9hZGRNZWRpYVF1ZXJ5KCk7XG4gICAgICB9IC8vIEdldHRlcnNcblxuXG4gICAgICB2YXIgX3Byb3RvID0gU2lkZWJhci5wcm90b3R5cGU7XG5cbiAgICAgIC8vIFB1YmxpY1xuICAgICAgX3Byb3RvLnBlcmZlY3RTY3JvbGxiYXIgPSBmdW5jdGlvbiBwZXJmZWN0U2Nyb2xsYmFyKGV2ZW50KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBQZXJmZWN0U2Nyb2xsYmFyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHZhciBjbGFzc0xpc3QgPSBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdDtcblxuICAgICAgICAgIGlmIChldmVudCA9PT0gRXZlbnQuSU5JVCAmJiAhY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzTmFtZS5TSURFQkFSX01JTklNSVpFRCkpIHtcbiAgICAgICAgICAgIHRoaXMucHMgPSB0aGlzLm1ha2VTY3JvbGxiYXIoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZXZlbnQgPT09IEV2ZW50LkRFU1RST1kpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveVNjcm9sbGJhcigpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChldmVudCA9PT0gRXZlbnQuVE9HR0xFKSB7XG4gICAgICAgICAgICBpZiAoY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzTmFtZS5TSURFQkFSX01JTklNSVpFRCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5kZXN0cm95U2Nyb2xsYmFyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lTY3JvbGxiYXIoKTtcbiAgICAgICAgICAgICAgdGhpcy5wcyA9IHRoaXMubWFrZVNjcm9sbGJhcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChldmVudCA9PT0gRXZlbnQuVVBEQVRFICYmICFjbGFzc0xpc3QuY29udGFpbnMoQ2xhc3NOYW1lLlNJREVCQVJfTUlOSU1JWkVEKSkge1xuICAgICAgICAgICAgLy8gVG9EbzogQWRkIHNtb290aCB0cmFuc2l0aW9uXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgX3RoaXMuZGVzdHJveVNjcm9sbGJhcigpO1xuXG4gICAgICAgICAgICAgIF90aGlzLnBzID0gX3RoaXMubWFrZVNjcm9sbGJhcigpO1xuICAgICAgICAgICAgfSwgRGVmYXVsdC50cmFuc2l0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5tYWtlU2Nyb2xsYmFyID0gZnVuY3Rpb24gbWFrZVNjcm9sbGJhcigpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IFNlbGVjdG9yLlNJREVCQVJfU0NST0xMO1xuXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lcikgPT09IG51bGwpIHtcbiAgICAgICAgICBjb250YWluZXIgPSBTZWxlY3Rvci5OQVZJR0FUSU9OX0NPTlRBSU5FUjtcblxuICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lcikgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwcyA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyKSwge1xuICAgICAgICAgIHN1cHByZXNzU2Nyb2xsWDogdHJ1ZVxuICAgICAgICB9KTsgLy8gVG9EbzogZmluZCByZWFsIGZpeCBmb3IgcHMgcnRsXG5cbiAgICAgICAgcHMuaXNSdGwgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHBzO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLmRlc3Ryb3lTY3JvbGxiYXIgPSBmdW5jdGlvbiBkZXN0cm95U2Nyb2xsYmFyKCkge1xuICAgICAgICBpZiAodGhpcy5wcykge1xuICAgICAgICAgIHRoaXMucHMuZGVzdHJveSgpO1xuICAgICAgICAgIHRoaXMucHMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uc2V0QWN0aXZlTGluayA9IGZ1bmN0aW9uIHNldEFjdGl2ZUxpbmsoKSB7XG4gICAgICAgICQoU2VsZWN0b3IuTkFWSUdBVElPTikuZmluZChTZWxlY3Rvci5OQVZfTElOSykuZWFjaChmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgIHZhciBsaW5rID0gdmFsdWU7XG4gICAgICAgICAgdmFyIGNVcmw7XG5cbiAgICAgICAgICBpZiAobGluay5jbGFzc0xpc3QuY29udGFpbnMoQ2xhc3NOYW1lLk5BVl9MSU5LX1FVRVJJRUQpKSB7XG4gICAgICAgICAgICBjVXJsID0gU3RyaW5nKHdpbmRvdy5sb2NhdGlvbik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNVcmwgPSBTdHJpbmcod2luZG93LmxvY2F0aW9uKS5zcGxpdCgnPycpWzBdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjVXJsLnN1YnN0cihjVXJsLmxlbmd0aCAtIDEpID09PSAnIycpIHtcbiAgICAgICAgICAgIGNVcmwgPSBjVXJsLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoJCgkKGxpbmspKVswXS5ocmVmID09PSBjVXJsKSB7XG4gICAgICAgICAgICAkKGxpbmspLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpLnBhcmVudHMoU2VsZWN0b3IuTkFWX0RST1BET1dOX0lURU1TKS5hZGQobGluaykuZWFjaChmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICBsaW5rID0gdmFsdWU7XG4gICAgICAgICAgICAgICQobGluaykucGFyZW50KCkuYWRkQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gLy8gUHJpdmF0ZVxuICAgICAgO1xuXG4gICAgICBfcHJvdG8uX2FkZE1lZGlhUXVlcnkgPSBmdW5jdGlvbiBfYWRkTWVkaWFRdWVyeSgpIHtcbiAgICAgICAgdmFyIHNtID0gZ2V0U3R5bGUoJy0tYnJlYWtwb2ludC1zbScpO1xuXG4gICAgICAgIGlmICghc20pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc21WYWwgPSBwYXJzZUludChzbSwgMTApIC0gMTtcbiAgICAgICAgdmFyIG1lZGlhUXVlcnlMaXN0ID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiBcIiArIHNtVmFsICsgXCJweClcIik7XG5cbiAgICAgICAgdGhpcy5fYnJlYWtwb2ludFRlc3QobWVkaWFRdWVyeUxpc3QpO1xuXG4gICAgICAgIG1lZGlhUXVlcnlMaXN0LmFkZExpc3RlbmVyKHRoaXMuX2JyZWFrcG9pbnRUZXN0KTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5fYnJlYWtwb2ludFRlc3QgPSBmdW5jdGlvbiBfYnJlYWtwb2ludFRlc3QoZSkge1xuICAgICAgICB0aGlzLm1vYmlsZSA9IEJvb2xlYW4oZS5tYXRjaGVzKTtcblxuICAgICAgICB0aGlzLl90b2dnbGVDbGlja091dCgpO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLl9jbGlja091dExpc3RlbmVyID0gZnVuY3Rpb24gX2NsaWNrT3V0TGlzdGVuZXIoZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9lbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAvLyBvciB1c2U6IGV2ZW50LnRhcmdldC5jbG9zZXN0KFNlbGVjdG9yLlNJREVCQVIpID09PSBudWxsXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgIHRoaXMuX3JlbW92ZUNsaWNrT3V0KCk7XG5cbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGViYXItc2hvdycpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uX2FkZENsaWNrT3V0ID0gZnVuY3Rpb24gX2FkZENsaWNrT3V0KCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKEV2ZW50LkNMSUNLLCB0aGlzLl9jbGlja091dExpc3RlbmVyLCB0cnVlKTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5fcmVtb3ZlQ2xpY2tPdXQgPSBmdW5jdGlvbiBfcmVtb3ZlQ2xpY2tPdXQoKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoRXZlbnQuQ0xJQ0ssIHRoaXMuX2NsaWNrT3V0TGlzdGVuZXIsIHRydWUpO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLl90b2dnbGVDbGlja091dCA9IGZ1bmN0aW9uIF90b2dnbGVDbGlja091dCgpIHtcbiAgICAgICAgaWYgKHRoaXMubW9iaWxlICYmIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlYmFyLXNob3cnKSkge1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnYXNpZGUtbWVudS1zaG93Jyk7XG5cbiAgICAgICAgICB0aGlzLl9hZGRDbGlja091dCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3JlbW92ZUNsaWNrT3V0KCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5fYWRkRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKEV2ZW50LkNMSUNLLCBTZWxlY3Rvci5CUkFORF9NSU5JTUlaRVIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgJChTZWxlY3Rvci5CT0RZKS50b2dnbGVDbGFzcyhDbGFzc05hbWUuQlJBTkRfTUlOSU1JWkVEKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKEV2ZW50LkNMSUNLLCBTZWxlY3Rvci5OQVZfRFJPUERPV05fVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIHZhciBkcm9wZG93biA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAkKGRyb3Bkb3duKS5wYXJlbnQoKS50b2dnbGVDbGFzcyhDbGFzc05hbWUuT1BFTik7XG5cbiAgICAgICAgICBfdGhpczIucGVyZmVjdFNjcm9sbGJhcihFdmVudC5VUERBVEUpO1xuICAgICAgICB9KTtcbiAgICAgICAgJChkb2N1bWVudCkub24oRXZlbnQuQ0xJQ0ssIFNlbGVjdG9yLlNJREVCQVJfTUlOSU1JWkVSLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICQoU2VsZWN0b3IuQk9EWSkudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lLlNJREVCQVJfTUlOSU1JWkVEKTtcblxuICAgICAgICAgIF90aGlzMi5wZXJmZWN0U2Nyb2xsYmFyKEV2ZW50LlRPR0dMRSk7XG4gICAgICAgIH0pO1xuICAgICAgICAkKGRvY3VtZW50KS5vbihFdmVudC5DTElDSywgU2VsZWN0b3IuU0lERUJBUl9UT0dHTEVSLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIHZhciB0b2dnbGUgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQgPyBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudG9nZ2xlIDogJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCd0b2dnbGUnKTtcbiAgICAgICAgICB0b2dnbGVDbGFzc2VzKHRvZ2dsZSwgU2hvd0NsYXNzTmFtZXMpO1xuXG4gICAgICAgICAgX3RoaXMyLl90b2dnbGVDbGlja091dCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgJChTZWxlY3Rvci5OQVZJR0FUSU9OICsgXCIgPiBcIiArIFNlbGVjdG9yLk5BVl9JVEVNICsgXCIgXCIgKyBTZWxlY3Rvci5OQVZfTElOSyArIFwiOm5vdChcIiArIFNlbGVjdG9yLk5BVl9EUk9QRE9XTl9UT0dHTEUgKyBcIilcIikub24oRXZlbnQuQ0xJQ0ssIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczIuX3JlbW92ZUNsaWNrT3V0KCk7XG5cbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGViYXItc2hvdycpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5fcmVtb3ZlRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiBfcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZihFdmVudC5DTElDSywgU2VsZWN0b3IuQlJBTkRfTUlOSU1JWkVSKTtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKEV2ZW50LkNMSUNLLCBTZWxlY3Rvci5OQVZfRFJPUERPV05fVE9HR0xFKTtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKEV2ZW50LkNMSUNLLCBTZWxlY3Rvci5TSURFQkFSX01JTklNSVpFUik7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZihFdmVudC5DTElDSywgU2VsZWN0b3IuU0lERUJBUl9UT0dHTEVSKTtcbiAgICAgICAgJChTZWxlY3Rvci5OQVZJR0FUSU9OICsgXCIgPiBcIiArIFNlbGVjdG9yLk5BVl9JVEVNICsgXCIgXCIgKyBTZWxlY3Rvci5OQVZfTElOSyArIFwiOm5vdChcIiArIFNlbGVjdG9yLk5BVl9EUk9QRE9XTl9UT0dHTEUgKyBcIilcIikub2ZmKEV2ZW50LkNMSUNLKTtcbiAgICAgIH0gLy8gU3RhdGljXG4gICAgICA7XG5cbiAgICAgIFNpZGViYXIuX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciAkZWxlbWVudCA9ICQodGhpcyk7XG4gICAgICAgICAgdmFyIGRhdGEgPSAkZWxlbWVudC5kYXRhKERBVEFfS0VZKTtcblxuICAgICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgZGF0YSA9IG5ldyBTaWRlYmFyKHRoaXMpO1xuICAgICAgICAgICAgJGVsZW1lbnQuZGF0YShEQVRBX0tFWSwgZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIF9jcmVhdGVDbGFzcyhTaWRlYmFyLCBudWxsLCBbe1xuICAgICAgICBrZXk6IFwiVkVSU0lPTlwiLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gVkVSU0lPTjtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gU2lkZWJhcjtcbiAgICB9KCk7XG4gICAgLyoqXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqL1xuXG5cbiAgICAkKHdpbmRvdykub25lKEV2ZW50LkxPQURfREFUQV9BUEksIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzaWRlYmFyID0gJChTZWxlY3Rvci5TSURFQkFSKTtcblxuICAgICAgU2lkZWJhci5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoc2lkZWJhcik7XG4gICAgfSk7XG4gICAgLyoqXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqIGpRdWVyeVxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKi9cblxuICAgICQuZm5bTkFNRV0gPSBTaWRlYmFyLl9qUXVlcnlJbnRlcmZhY2U7XG4gICAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IFNpZGViYXI7XG5cbiAgICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUO1xuICAgICAgcmV0dXJuIFNpZGViYXIuX2pRdWVyeUludGVyZmFjZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFNpZGViYXI7XG4gIH0oJCk7XG5cbiAgLyoqXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKiBDb3JlVUkgVXRpbGl0aWVzICh2Mi4xLjE2KTogaGV4LXRvLXJnYi5qc1xyXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9jb3JldWkuaW8vbGljZW5zZSlcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqL1xuXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLW1hZ2ljLW51bWJlcnMgKi9cbiAgdmFyIGhleFRvUmdiID0gZnVuY3Rpb24gaGV4VG9SZ2IoY29sb3IpIHtcbiAgICBpZiAodHlwZW9mIGNvbG9yID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdIZXggY29sb3IgaXMgbm90IGRlZmluZWQnKTtcbiAgICB9XG5cbiAgICB2YXIgaGV4ID0gY29sb3IubWF0Y2goL14jKD86WzAtOWEtZl17M30pezEsMn0kL2kpO1xuXG4gICAgaWYgKCFoZXgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihjb2xvciArIFwiIGlzIG5vdCBhIHZhbGlkIGhleCBjb2xvclwiKTtcbiAgICB9XG5cbiAgICB2YXIgcjtcbiAgICB2YXIgZztcbiAgICB2YXIgYjtcblxuICAgIGlmIChjb2xvci5sZW5ndGggPT09IDcpIHtcbiAgICAgIHIgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMSwgMyksIDE2KTtcbiAgICAgIGcgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMywgNSksIDE2KTtcbiAgICAgIGIgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoNSwgNyksIDE2KTtcbiAgICB9IGVsc2Uge1xuICAgICAgciA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZygxLCAyKSwgMTYpO1xuICAgICAgZyA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZygyLCAzKSwgMTYpO1xuICAgICAgYiA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZygzLCA1KSwgMTYpO1xuICAgIH1cblxuICAgIHJldHVybiBcInJnYmEoXCIgKyByICsgXCIsIFwiICsgZyArIFwiLCBcIiArIGIgKyBcIilcIjtcbiAgfTtcblxuICAvKipcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqIENvcmVVSSBVdGlsaXRpZXMgKHYyLjEuMTYpOiBoZXgtdG8tcmdiYS5qc1xyXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9jb3JldWkuaW8vbGljZW5zZSlcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqL1xuXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLW1hZ2ljLW51bWJlcnMgKi9cbiAgdmFyIGhleFRvUmdiYSA9IGZ1bmN0aW9uIGhleFRvUmdiYShjb2xvciwgb3BhY2l0eSkge1xuICAgIGlmIChvcGFjaXR5ID09PSB2b2lkIDApIHtcbiAgICAgIG9wYWNpdHkgPSAxMDA7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb2xvciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSGV4IGNvbG9yIGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgfVxuXG4gICAgdmFyIGhleCA9IGNvbG9yLm1hdGNoKC9eIyg/OlswLTlhLWZdezN9KXsxLDJ9JC9pKTtcblxuICAgIGlmICghaGV4KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoY29sb3IgKyBcIiBpcyBub3QgYSB2YWxpZCBoZXggY29sb3JcIik7XG4gICAgfVxuXG4gICAgdmFyIHI7XG4gICAgdmFyIGc7XG4gICAgdmFyIGI7XG5cbiAgICBpZiAoY29sb3IubGVuZ3RoID09PSA3KSB7XG4gICAgICByID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDEsIDMpLCAxNik7XG4gICAgICBnID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDMsIDUpLCAxNik7XG4gICAgICBiID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDUsIDcpLCAxNik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHIgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMSwgMiksIDE2KTtcbiAgICAgIGcgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMiwgMyksIDE2KTtcbiAgICAgIGIgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMywgNSksIDE2KTtcbiAgICB9XG5cbiAgICByZXR1cm4gXCJyZ2JhKFwiICsgciArIFwiLCBcIiArIGcgKyBcIiwgXCIgKyBiICsgXCIsIFwiICsgb3BhY2l0eSAvIDEwMCArIFwiKVwiO1xuICB9O1xuXG4gIHZhciBUT19TVFJJTkdfVEFHJDIgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG4gIHZhciB0ZXN0ID0ge307XG5cbiAgdGVzdFtUT19TVFJJTkdfVEFHJDJdID0gJ3onO1xuXG4gIC8vIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZ1xuICB2YXIgb2JqZWN0VG9TdHJpbmcgPSBTdHJpbmcodGVzdCkgIT09ICdbb2JqZWN0IHpdJyA/IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAnW29iamVjdCAnICsgY2xhc3NvZih0aGlzKSArICddJztcbiAgfSA6IHRlc3QudG9TdHJpbmc7XG5cbiAgdmFyIE9iamVjdFByb3RvdHlwZSQxID0gT2JqZWN0LnByb3RvdHlwZTtcblxuICAvLyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmdcbiAgaWYgKG9iamVjdFRvU3RyaW5nICE9PSBPYmplY3RQcm90b3R5cGUkMS50b1N0cmluZykge1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvdHlwZSQxLCAndG9TdHJpbmcnLCBvYmplY3RUb1N0cmluZywgeyB1bnNhZmU6IHRydWUgfSk7XG4gIH1cblxuICB2YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbiAgdmFyIFJlZ0V4cFByb3RvdHlwZSA9IFJlZ0V4cC5wcm90b3R5cGU7XG4gIHZhciBuYXRpdmVUb1N0cmluZyA9IFJlZ0V4cFByb3RvdHlwZVtUT19TVFJJTkddO1xuXG4gIHZhciBOT1RfR0VORVJJQyA9IGZhaWxzKGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5hdGl2ZVRvU3RyaW5nLmNhbGwoeyBzb3VyY2U6ICdhJywgZmxhZ3M6ICdiJyB9KSAhPSAnL2EvYic7IH0pO1xuICAvLyBGRjQ0LSBSZWdFeHAjdG9TdHJpbmcgaGFzIGEgd3JvbmcgbmFtZVxuICB2YXIgSU5DT1JSRUNUX05BTUUgPSBuYXRpdmVUb1N0cmluZy5uYW1lICE9IFRPX1NUUklORztcblxuICAvLyBgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZ2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUudG9zdHJpbmdcbiAgaWYgKE5PVF9HRU5FUklDIHx8IElOQ09SUkVDVF9OQU1FKSB7XG4gICAgcmVkZWZpbmUoUmVnRXhwLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHZhciBSID0gYW5PYmplY3QodGhpcyk7XG4gICAgICB2YXIgcCA9IFN0cmluZyhSLnNvdXJjZSk7XG4gICAgICB2YXIgcmYgPSBSLmZsYWdzO1xuICAgICAgdmFyIGYgPSBTdHJpbmcocmYgPT09IHVuZGVmaW5lZCAmJiBSIGluc3RhbmNlb2YgUmVnRXhwICYmICEoJ2ZsYWdzJyBpbiBSZWdFeHBQcm90b3R5cGUpID8gcmVnZXhwRmxhZ3MuY2FsbChSKSA6IHJmKTtcbiAgICAgIHJldHVybiAnLycgKyBwICsgJy8nICsgZjtcbiAgICB9LCB7IHVuc2FmZTogdHJ1ZSB9KTtcbiAgfVxuXG4gIC8qKlxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICogQ29yZVVJICh2Mi4xLjE2KTogcmdiLXRvLWhleC5qc1xyXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9jb3JldWkuaW8vbGljZW5zZSlcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqL1xuXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLW1hZ2ljLW51bWJlcnMgKi9cbiAgdmFyIHJnYlRvSGV4ID0gZnVuY3Rpb24gcmdiVG9IZXgoY29sb3IpIHtcbiAgICBpZiAodHlwZW9mIGNvbG9yID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdIZXggY29sb3IgaXMgbm90IGRlZmluZWQnKTtcbiAgICB9XG5cbiAgICBpZiAoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHtcbiAgICAgIHJldHVybiAnIzAwMDAwMDAwJztcbiAgICB9XG5cbiAgICB2YXIgcmdiID0gY29sb3IubWF0Y2goL15yZ2JhP1tcXHMrXT9cXChbXFxzK10/KFxcZCspW1xccytdPyxbXFxzK10/KFxcZCspW1xccytdPyxbXFxzK10/KFxcZCspW1xccytdPy9pKTtcblxuICAgIGlmICghcmdiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoY29sb3IgKyBcIiBpcyBub3QgYSB2YWxpZCByZ2IgY29sb3JcIik7XG4gICAgfVxuXG4gICAgdmFyIHIgPSBcIjBcIiArIHBhcnNlSW50KHJnYlsxXSwgMTApLnRvU3RyaW5nKDE2KTtcbiAgICB2YXIgZyA9IFwiMFwiICsgcGFyc2VJbnQocmdiWzJdLCAxMCkudG9TdHJpbmcoMTYpO1xuICAgIHZhciBiID0gXCIwXCIgKyBwYXJzZUludChyZ2JbM10sIDEwKS50b1N0cmluZygxNik7XG4gICAgcmV0dXJuIFwiI1wiICsgci5zbGljZSgtMikgKyBnLnNsaWNlKC0yKSArIGIuc2xpY2UoLTIpO1xuICB9O1xuXG4gIC8qKlxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICogQ29yZVVJICh2Mi4xLjE2KTogaW5kZXguanNcclxuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vY29yZXVpLmlvL2xpY2Vuc2UpXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKi9cblxuICAoZnVuY3Rpb24gKCQpIHtcbiAgICBpZiAodHlwZW9mICQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDb3JlVUlcXCdzIEphdmFTY3JpcHQgcmVxdWlyZXMgalF1ZXJ5LiBqUXVlcnkgbXVzdCBiZSBpbmNsdWRlZCBiZWZvcmUgQ29yZVVJXFwncyBKYXZhU2NyaXB0LicpO1xuICAgIH1cblxuICAgIHZhciB2ZXJzaW9uID0gJC5mbi5qcXVlcnkuc3BsaXQoJyAnKVswXS5zcGxpdCgnLicpO1xuICAgIHZhciBtaW5NYWpvciA9IDE7XG4gICAgdmFyIGx0TWFqb3IgPSAyO1xuICAgIHZhciBtaW5NaW5vciA9IDk7XG4gICAgdmFyIG1pblBhdGNoID0gMTtcbiAgICB2YXIgbWF4TWFqb3IgPSA0O1xuXG4gICAgaWYgKHZlcnNpb25bMF0gPCBsdE1ham9yICYmIHZlcnNpb25bMV0gPCBtaW5NaW5vciB8fCB2ZXJzaW9uWzBdID09PSBtaW5NYWpvciAmJiB2ZXJzaW9uWzFdID09PSBtaW5NaW5vciAmJiB2ZXJzaW9uWzJdIDwgbWluUGF0Y2ggfHwgdmVyc2lvblswXSA+PSBtYXhNYWpvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3JlVUlcXCdzIEphdmFTY3JpcHQgcmVxdWlyZXMgYXQgbGVhc3QgalF1ZXJ5IHYxLjkuMSBidXQgbGVzcyB0aGFuIHY0LjAuMCcpO1xuICAgIH1cbiAgfSkoJCk7XG4gIHdpbmRvdy5nZXRTdHlsZSA9IGdldFN0eWxlO1xuICB3aW5kb3cuaGV4VG9SZ2IgPSBoZXhUb1JnYjtcbiAgd2luZG93LmhleFRvUmdiYSA9IGhleFRvUmdiYTtcbiAgd2luZG93LnJnYlRvSGV4ID0gcmdiVG9IZXg7XG5cbiAgZXhwb3J0cy5BamF4TG9hZCA9IEFqYXhMb2FkO1xuICBleHBvcnRzLkFzaWRlTWVudSA9IEFzaWRlTWVudTtcbiAgZXhwb3J0cy5TaWRlYmFyID0gU2lkZWJhcjtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG59KSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29yZXVpLmpzLm1hcFxuIiwiLyoqXG4gICogYm9vdHN0cmFwLXN3aXRjaCAtIFR1cm4gY2hlY2tib3hlcyBhbmQgcmFkaW8gYnV0dG9ucyBpbnRvIHRvZ2dsZSBzd2l0Y2hlcy5cbiAgKlxuICAqIEB2ZXJzaW9uIHYzLjQuMFxuICAqIEBob21lcGFnZSBodHRwczovL2J0dHN0cnAuZ2l0aHViLmlvL2Jvb3RzdHJhcC1zd2l0Y2hcbiAgKiBAYXV0aG9yIE1hdHRpYSBMYXJlbnRpcyA8bWF0dGlhQGxhcmVudGlzLmV1PiAoaHR0cDovL2xhcmVudGlzLmV1KVxuICAqIEBsaWNlbnNlIE1JVFxuICAqL1xuXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkoZ2xvYmFsLmpxdWVyeSk7XG4gICAgZ2xvYmFsLmJvb3RzdHJhcFN3aXRjaCA9IG1vZC5leHBvcnRzO1xuICB9XG59KSh0aGlzLCBmdW5jdGlvbiAoX2pxdWVyeSkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIF9qcXVlcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfanF1ZXJ5KTtcblxuICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICB9XG5cbiAgdmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICAgIH07XG4gIH0oKTtcblxuICB2YXIgJCA9IF9qcXVlcnkyLmRlZmF1bHQgfHwgd2luZG93LmpRdWVyeSB8fCB3aW5kb3cuJDtcblxuICBmdW5jdGlvbiBnZXRDbGFzc2VzKG9wdGlvbnMsIGlkKSB7XG4gICAgdmFyIHN0YXRlID0gb3B0aW9ucy5zdGF0ZSxcbiAgICAgICAgc2l6ZSA9IG9wdGlvbnMuc2l6ZSxcbiAgICAgICAgZGlzYWJsZWQgPSBvcHRpb25zLmRpc2FibGVkLFxuICAgICAgICByZWFkb25seSA9IG9wdGlvbnMucmVhZG9ubHksXG4gICAgICAgIGluZGV0ZXJtaW5hdGUgPSBvcHRpb25zLmluZGV0ZXJtaW5hdGUsXG4gICAgICAgIGludmVyc2UgPSBvcHRpb25zLmludmVyc2U7XG5cbiAgICByZXR1cm4gW3N0YXRlID8gJ29uJyA6ICdvZmYnLCBzaXplLCBkaXNhYmxlZCA/ICdkaXNhYmxlZCcgOiB1bmRlZmluZWQsIHJlYWRvbmx5ID8gJ3JlYWRvbmx5JyA6IHVuZGVmaW5lZCwgaW5kZXRlcm1pbmF0ZSA/ICdpbmRldGVybWluYXRlJyA6IHVuZGVmaW5lZCwgaW52ZXJzZSA/ICdpbnZlcnNlJyA6IHVuZGVmaW5lZCwgaWQgPyAnaWQtJyArIGlkIDogdW5kZWZpbmVkXS5maWx0ZXIoZnVuY3Rpb24gKHYpIHtcbiAgICAgIHJldHVybiB2ID09IG51bGw7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcnZnZXRFbGVtZW50T3B0aW9ucygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGU6IHRoaXMuJGVsZW1lbnQuaXMoJzpjaGVja2VkJyksXG4gICAgICBzaXplOiB0aGlzLiRlbGVtZW50LmRhdGEoJ3NpemUnKSxcbiAgICAgIGFuaW1hdGU6IHRoaXMuJGVsZW1lbnQuZGF0YSgnYW5pbWF0ZScpLFxuICAgICAgZGlzYWJsZWQ6IHRoaXMuJGVsZW1lbnQuaXMoJzpkaXNhYmxlZCcpLFxuICAgICAgcmVhZG9ubHk6IHRoaXMuJGVsZW1lbnQuaXMoJ1tyZWFkb25seV0nKSxcbiAgICAgIGluZGV0ZXJtaW5hdGU6IHRoaXMuJGVsZW1lbnQuZGF0YSgnaW5kZXRlcm1pbmF0ZScpLFxuICAgICAgaW52ZXJzZTogdGhpcy4kZWxlbWVudC5kYXRhKCdpbnZlcnNlJyksXG4gICAgICByYWRpb0FsbE9mZjogdGhpcy4kZWxlbWVudC5kYXRhKCdyYWRpby1hbGwtb2ZmJyksXG4gICAgICBvbkNvbG9yOiB0aGlzLiRlbGVtZW50LmRhdGEoJ29uLWNvbG9yJyksXG4gICAgICBvZmZDb2xvcjogdGhpcy4kZWxlbWVudC5kYXRhKCdvZmYtY29sb3InKSxcbiAgICAgIG9uVGV4dDogdGhpcy4kZWxlbWVudC5kYXRhKCdvbi10ZXh0JyksXG4gICAgICBvZmZUZXh0OiB0aGlzLiRlbGVtZW50LmRhdGEoJ29mZi10ZXh0JyksXG4gICAgICBsYWJlbFRleHQ6IHRoaXMuJGVsZW1lbnQuZGF0YSgnbGFiZWwtdGV4dCcpLFxuICAgICAgaGFuZGxlV2lkdGg6IHRoaXMuJGVsZW1lbnQuZGF0YSgnaGFuZGxlLXdpZHRoJyksXG4gICAgICBsYWJlbFdpZHRoOiB0aGlzLiRlbGVtZW50LmRhdGEoJ2xhYmVsLXdpZHRoJyksXG4gICAgICBiYXNlQ2xhc3M6IHRoaXMuJGVsZW1lbnQuZGF0YSgnYmFzZS1jbGFzcycpLFxuICAgICAgd3JhcHBlckNsYXNzOiB0aGlzLiRlbGVtZW50LmRhdGEoJ3dyYXBwZXItY2xhc3MnKVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBwcnZ3aWR0aCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyICRoYW5kbGVzID0gdGhpcy4kb24uYWRkKHRoaXMuJG9mZikuYWRkKHRoaXMuJGxhYmVsKS5jc3MoJ3dpZHRoJywgJycpO1xuICAgIHZhciBoYW5kbGVXaWR0aCA9IHRoaXMub3B0aW9ucy5oYW5kbGVXaWR0aCA9PT0gJ2F1dG8nID8gTWF0aC5yb3VuZChNYXRoLm1heCh0aGlzLiRvbi53aWR0aCgpLCB0aGlzLiRvZmYud2lkdGgoKSkpIDogdGhpcy5vcHRpb25zLmhhbmRsZVdpZHRoO1xuICAgICRoYW5kbGVzLndpZHRoKGhhbmRsZVdpZHRoKTtcbiAgICB0aGlzLiRsYWJlbC53aWR0aChmdW5jdGlvbiAoaW5kZXgsIHdpZHRoKSB7XG4gICAgICBpZiAoX3RoaXMub3B0aW9ucy5sYWJlbFdpZHRoICE9PSAnYXV0bycpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLm9wdGlvbnMubGFiZWxXaWR0aDtcbiAgICAgIH1cbiAgICAgIGlmICh3aWR0aCA8IGhhbmRsZVdpZHRoKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVXaWR0aDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB3aWR0aDtcbiAgICB9KTtcbiAgICB0aGlzLnByaXZhdGVIYW5kbGVXaWR0aCA9IHRoaXMuJG9uLm91dGVyV2lkdGgoKTtcbiAgICB0aGlzLnByaXZhdGVMYWJlbFdpZHRoID0gdGhpcy4kbGFiZWwub3V0ZXJXaWR0aCgpO1xuICAgIHRoaXMuJGNvbnRhaW5lci53aWR0aCh0aGlzLnByaXZhdGVIYW5kbGVXaWR0aCAqIDIgKyB0aGlzLnByaXZhdGVMYWJlbFdpZHRoKTtcbiAgICByZXR1cm4gdGhpcy4kd3JhcHBlci53aWR0aCh0aGlzLnByaXZhdGVIYW5kbGVXaWR0aCArIHRoaXMucHJpdmF0ZUxhYmVsV2lkdGgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJ2Y29udGFpbmVyUG9zaXRpb24oKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgc3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHRoaXMub3BlO1xuXG4gICAgdGhpcy4kY29udGFpbmVyLmNzcygnbWFyZ2luLWxlZnQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdmFsdWVzID0gWzAsICctJyArIF90aGlzMi5wcml2YXRlSGFuZGxlV2lkdGggKyAncHgnXTtcbiAgICAgIGlmIChfdGhpczIub3B0aW9ucy5pbmRldGVybWluYXRlKSB7XG4gICAgICAgIHJldHVybiAnLScgKyBfdGhpczIucHJpdmF0ZUhhbmRsZVdpZHRoIC8gMiArICdweCc7XG4gICAgICB9XG4gICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgaWYgKF90aGlzMi5vcHRpb25zLmludmVyc2UpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWVzWzFdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZXNbMF07XG4gICAgICB9XG4gICAgICBpZiAoX3RoaXMyLm9wdGlvbnMuaW52ZXJzZSkge1xuICAgICAgICByZXR1cm4gdmFsdWVzWzBdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlc1sxXTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBydmdldENsYXNzKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmJhc2VDbGFzcyArICctJyArIG5hbWU7XG4gIH1cblxuICBmdW5jdGlvbiBwcnZpbml0KCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgX3RoaXMzLnNldFByZXZPcHRpb25zKCk7XG4gICAgICBwcnZ3aWR0aC5jYWxsKF90aGlzMyk7XG4gICAgICBwcnZjb250YWluZXJQb3NpdGlvbi5jYWxsKF90aGlzMyk7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMy5vcHRpb25zLmFuaW1hdGUgJiYgX3RoaXMzLiR3cmFwcGVyLmFkZENsYXNzKHBydmdldENsYXNzLmNhbGwoX3RoaXMzLCAnYW5pbWF0ZScpKTtcbiAgICAgIH0sIDUwKTtcbiAgICB9O1xuICAgIGlmICh0aGlzLiR3cmFwcGVyLmlzKCc6dmlzaWJsZScpKSB7XG4gICAgICBpbml0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBpbml0SW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzMy4kd3JhcHBlci5pcygnOnZpc2libGUnKSAmJiAoaW5pdCgpIHx8IHRydWUpICYmIHdpbmRvdy5jbGVhckludGVydmFsKGluaXRJbnRlcnZhbCk7XG4gICAgfSwgNTApO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJ2ZWxlbWVudEhhbmRsZXJzKCkge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgcmV0dXJuIHRoaXMuJGVsZW1lbnQub24oe1xuICAgICAgJ3NldFByZXZpb3VzT3B0aW9ucy5ib290c3RyYXBTd2l0Y2gnOiBmdW5jdGlvbiBzZXRQcmV2aW91c09wdGlvbnNCb290c3RyYXBTd2l0Y2goKSB7XG4gICAgICAgIHJldHVybiBfdGhpczQuc2V0UHJldk9wdGlvbnMoKTtcbiAgICAgIH0sXG5cbiAgICAgICdwcmV2aW91c1N0YXRlLmJvb3RzdHJhcFN3aXRjaCc6IGZ1bmN0aW9uIHByZXZpb3VzU3RhdGVCb290c3RyYXBTd2l0Y2goKSB7XG4gICAgICAgIF90aGlzNC5vcHRpb25zID0gX3RoaXM0LnByZXZPcHRpb25zO1xuICAgICAgICBpZiAoX3RoaXM0Lm9wdGlvbnMuaW5kZXRlcm1pbmF0ZSkge1xuICAgICAgICAgIF90aGlzNC4kd3JhcHBlci5hZGRDbGFzcyhwcnZnZXRDbGFzcy5jYWxsKF90aGlzNCwgJ2luZGV0ZXJtaW5hdGUnKSk7XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXM0LiRlbGVtZW50LnByb3AoJ2NoZWNrZWQnLCBfdGhpczQub3B0aW9ucy5zdGF0ZSkudHJpZ2dlcignY2hhbmdlLmJvb3RzdHJhcFN3aXRjaCcsIHRydWUpO1xuICAgICAgfSxcblxuICAgICAgJ2NoYW5nZS5ib290c3RyYXBTd2l0Y2gnOiBmdW5jdGlvbiBjaGFuZ2VCb290c3RyYXBTd2l0Y2goZXZlbnQsIHNraXApIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHZhciBzdGF0ZSA9IF90aGlzNC4kZWxlbWVudC5pcygnOmNoZWNrZWQnKTtcbiAgICAgICAgcHJ2Y29udGFpbmVyUG9zaXRpb24uY2FsbChfdGhpczQsIHN0YXRlKTtcbiAgICAgICAgaWYgKHN0YXRlID09PSBfdGhpczQub3B0aW9ucy5zdGF0ZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBfdGhpczQub3B0aW9ucy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICBfdGhpczQuJHdyYXBwZXIudG9nZ2xlQ2xhc3MocHJ2Z2V0Q2xhc3MuY2FsbChfdGhpczQsICdvZmYnKSkudG9nZ2xlQ2xhc3MocHJ2Z2V0Q2xhc3MuY2FsbChfdGhpczQsICdvbicpKTtcbiAgICAgICAgaWYgKCFza2lwKSB7XG4gICAgICAgICAgaWYgKF90aGlzNC4kZWxlbWVudC5pcygnOnJhZGlvJykpIHtcbiAgICAgICAgICAgICQoJ1tuYW1lPVwiJyArIF90aGlzNC4kZWxlbWVudC5hdHRyKCduYW1lJykgKyAnXCJdJykubm90KF90aGlzNC4kZWxlbWVudCkucHJvcCgnY2hlY2tlZCcsIGZhbHNlKS50cmlnZ2VyKCdjaGFuZ2UuYm9vdHN0cmFwU3dpdGNoJywgdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIF90aGlzNC4kZWxlbWVudC50cmlnZ2VyKCdzd2l0Y2hDaGFuZ2UuYm9vdHN0cmFwU3dpdGNoJywgW3N0YXRlXSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgICdmb2N1cy5ib290c3RyYXBTd2l0Y2gnOiBmdW5jdGlvbiBmb2N1c0Jvb3RzdHJhcFN3aXRjaChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdGhpczQuJHdyYXBwZXIuYWRkQ2xhc3MocHJ2Z2V0Q2xhc3MuY2FsbChfdGhpczQsICdmb2N1c2VkJykpO1xuICAgICAgfSxcblxuICAgICAgJ2JsdXIuYm9vdHN0cmFwU3dpdGNoJzogZnVuY3Rpb24gYmx1ckJvb3RzdHJhcFN3aXRjaChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdGhpczQuJHdyYXBwZXIucmVtb3ZlQ2xhc3MocHJ2Z2V0Q2xhc3MuY2FsbChfdGhpczQsICdmb2N1c2VkJykpO1xuICAgICAgfSxcblxuICAgICAgJ2tleWRvd24uYm9vdHN0cmFwU3dpdGNoJzogZnVuY3Rpb24ga2V5ZG93bkJvb3RzdHJhcFN3aXRjaChldmVudCkge1xuICAgICAgICBpZiAoIWV2ZW50LndoaWNoIHx8IF90aGlzNC5vcHRpb25zLmRpc2FibGVkIHx8IF90aGlzNC5vcHRpb25zLnJlYWRvbmx5KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMzcgfHwgZXZlbnQud2hpY2ggPT09IDM5KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICBfdGhpczQuc3RhdGUoZXZlbnQud2hpY2ggPT09IDM5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJ2aGFuZGxlSGFuZGxlcnMoKSB7XG4gICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICB0aGlzLiRvbi5vbignY2xpY2suYm9vdHN0cmFwU3dpdGNoJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBfdGhpczUuc3RhdGUoZmFsc2UpO1xuICAgICAgcmV0dXJuIF90aGlzNS4kZWxlbWVudC50cmlnZ2VyKCdmb2N1cy5ib290c3RyYXBTd2l0Y2gnKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy4kb2ZmLm9uKCdjbGljay5ib290c3RyYXBTd2l0Y2gnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIF90aGlzNS5zdGF0ZSh0cnVlKTtcbiAgICAgIHJldHVybiBfdGhpczUuJGVsZW1lbnQudHJpZ2dlcignZm9jdXMuYm9vdHN0cmFwU3dpdGNoJyk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcnZsYWJlbEhhbmRsZXJzKCkge1xuICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgdmFyIGRyYWdTdGFydCA9IHZvaWQgMDtcbiAgICB2YXIgZHJhZ0VuZCA9IHZvaWQgMDtcbiAgICB2YXIgaGFuZGxlcnMgPSB7XG4gICAgICBjbGljazogZnVuY3Rpb24gY2xpY2soZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9LFxuXG5cbiAgICAgICdtb3VzZWRvd24uYm9vdHN0cmFwU3dpdGNoIHRvdWNoc3RhcnQuYm9vdHN0cmFwU3dpdGNoJzogZnVuY3Rpb24gbW91c2Vkb3duQm9vdHN0cmFwU3dpdGNoVG91Y2hzdGFydEJvb3RzdHJhcFN3aXRjaChldmVudCkge1xuICAgICAgICBpZiAoZHJhZ1N0YXJ0IHx8IF90aGlzNi5vcHRpb25zLmRpc2FibGVkIHx8IF90aGlzNi5vcHRpb25zLnJlYWRvbmx5KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBkcmFnU3RhcnQgPSAoZXZlbnQucGFnZVggfHwgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdLnBhZ2VYKSAtIHBhcnNlSW50KF90aGlzNi4kY29udGFpbmVyLmNzcygnbWFyZ2luLWxlZnQnKSwgMTApO1xuICAgICAgICBpZiAoX3RoaXM2Lm9wdGlvbnMuYW5pbWF0ZSkge1xuICAgICAgICAgIF90aGlzNi4kd3JhcHBlci5yZW1vdmVDbGFzcyhwcnZnZXRDbGFzcy5jYWxsKF90aGlzNiwgJ2FuaW1hdGUnKSk7XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXM2LiRlbGVtZW50LnRyaWdnZXIoJ2ZvY3VzLmJvb3RzdHJhcFN3aXRjaCcpO1xuICAgICAgfSxcblxuICAgICAgJ21vdXNlbW92ZS5ib290c3RyYXBTd2l0Y2ggdG91Y2htb3ZlLmJvb3RzdHJhcFN3aXRjaCc6IGZ1bmN0aW9uIG1vdXNlbW92ZUJvb3RzdHJhcFN3aXRjaFRvdWNobW92ZUJvb3RzdHJhcFN3aXRjaChldmVudCkge1xuICAgICAgICBpZiAoZHJhZ1N0YXJ0ID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRpZmZlcmVuY2UgPSAoZXZlbnQucGFnZVggfHwgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdLnBhZ2VYKSAtIGRyYWdTdGFydDtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGRpZmZlcmVuY2UgPCAtX3RoaXM2LnByaXZhdGVIYW5kbGVXaWR0aCB8fCBkaWZmZXJlbmNlID4gMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBkcmFnRW5kID0gZGlmZmVyZW5jZTtcbiAgICAgICAgX3RoaXM2LiRjb250YWluZXIuY3NzKCdtYXJnaW4tbGVmdCcsIGRyYWdFbmQgKyAncHgnKTtcbiAgICAgIH0sXG5cbiAgICAgICdtb3VzZXVwLmJvb3RzdHJhcFN3aXRjaCB0b3VjaGVuZC5ib290c3RyYXBTd2l0Y2gnOiBmdW5jdGlvbiBtb3VzZXVwQm9vdHN0cmFwU3dpdGNoVG91Y2hlbmRCb290c3RyYXBTd2l0Y2goZXZlbnQpIHtcbiAgICAgICAgaWYgKCFkcmFnU3RhcnQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKF90aGlzNi5vcHRpb25zLmFuaW1hdGUpIHtcbiAgICAgICAgICBfdGhpczYuJHdyYXBwZXIuYWRkQ2xhc3MocHJ2Z2V0Q2xhc3MuY2FsbChfdGhpczYsICdhbmltYXRlJykpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkcmFnRW5kKSB7XG4gICAgICAgICAgdmFyIHN0YXRlID0gZHJhZ0VuZCA+IC0oX3RoaXM2LnByaXZhdGVIYW5kbGVXaWR0aCAvIDIpO1xuICAgICAgICAgIGRyYWdFbmQgPSBmYWxzZTtcbiAgICAgICAgICBfdGhpczYuc3RhdGUoX3RoaXM2Lm9wdGlvbnMuaW52ZXJzZSA/ICFzdGF0ZSA6IHN0YXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpczYuc3RhdGUoIV90aGlzNi5vcHRpb25zLnN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBkcmFnU3RhcnQgPSBmYWxzZTtcbiAgICAgIH0sXG5cbiAgICAgICdtb3VzZWxlYXZlLmJvb3RzdHJhcFN3aXRjaCc6IGZ1bmN0aW9uIG1vdXNlbGVhdmVCb290c3RyYXBTd2l0Y2goKSB7XG4gICAgICAgIF90aGlzNi4kbGFiZWwudHJpZ2dlcignbW91c2V1cC5ib290c3RyYXBTd2l0Y2gnKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuJGxhYmVsLm9uKGhhbmRsZXJzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBydmV4dGVybmFsTGFiZWxIYW5kbGVyKCkge1xuICAgIHZhciBfdGhpczcgPSB0aGlzO1xuXG4gICAgdmFyICRleHRlcm5hbExhYmVsID0gdGhpcy4kZWxlbWVudC5jbG9zZXN0KCdsYWJlbCcpO1xuICAgICRleHRlcm5hbExhYmVsLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gJGV4dGVybmFsTGFiZWxbMF0pIHtcbiAgICAgICAgX3RoaXM3LnRvZ2dsZVN0YXRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcnZmb3JtSGFuZGxlcigpIHtcbiAgICBmdW5jdGlvbiBpc0Jvb3RzdHJhcFN3aXRjaCgpIHtcbiAgICAgIHJldHVybiAkKHRoaXMpLmRhdGEoJ2Jvb3RzdHJhcC1zd2l0Y2gnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwZXJmb3JtUmVzZXQoKSB7XG4gICAgICByZXR1cm4gJCh0aGlzKS5ib290c3RyYXBTd2l0Y2goJ3N0YXRlJywgdGhpcy5jaGVja2VkKTtcbiAgICB9XG5cbiAgICB2YXIgJGZvcm0gPSB0aGlzLiRlbGVtZW50LmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICBpZiAoJGZvcm0uZGF0YSgnYm9vdHN0cmFwLXN3aXRjaCcpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgICRmb3JtLm9uKCdyZXNldC5ib290c3RyYXBTd2l0Y2gnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICRmb3JtLmZpbmQoJ2lucHV0JykuZmlsdGVyKGlzQm9vdHN0cmFwU3dpdGNoKS5lYWNoKHBlcmZvcm1SZXNldCk7XG4gICAgICB9LCAxKTtcbiAgICB9KS5kYXRhKCdib290c3RyYXAtc3dpdGNoJywgdHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcnZnZXRDbGFzc2VzKGNsYXNzZXMpIHtcbiAgICB2YXIgX3RoaXM4ID0gdGhpcztcblxuICAgIGlmICghJC5pc0FycmF5KGNsYXNzZXMpKSB7XG4gICAgICByZXR1cm4gW3BydmdldENsYXNzLmNhbGwodGhpcywgY2xhc3NlcyldO1xuICAgIH1cbiAgICByZXR1cm4gY2xhc3Nlcy5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICAgIHJldHVybiBwcnZnZXRDbGFzcy5jYWxsKF90aGlzOCwgdik7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgQm9vdHN0cmFwU3dpdGNoID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJvb3RzdHJhcFN3aXRjaChlbGVtZW50KSB7XG4gICAgICB2YXIgX3RoaXM5ID0gdGhpcztcblxuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQm9vdHN0cmFwU3dpdGNoKTtcblxuICAgICAgdGhpcy4kZWxlbWVudCA9ICQoZWxlbWVudCk7XG4gICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgJC5mbi5ib290c3RyYXBTd2l0Y2guZGVmYXVsdHMsIHBydmdldEVsZW1lbnRPcHRpb25zLmNhbGwodGhpcyksIG9wdGlvbnMpO1xuICAgICAgdGhpcy5wcmV2T3B0aW9ucyA9IHt9O1xuICAgICAgdGhpcy4kd3JhcHBlciA9ICQoJzxkaXY+Jywge1xuICAgICAgICBjbGFzczogZnVuY3Rpb24gX2NsYXNzKCkge1xuICAgICAgICAgIHJldHVybiBnZXRDbGFzc2VzKF90aGlzOS5vcHRpb25zLCBfdGhpczkuJGVsZW1lbnQuYXR0cignaWQnKSkubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJ2Z2V0Q2xhc3MuY2FsbChfdGhpczksIHYpO1xuICAgICAgICAgIH0pLmNvbmNhdChbX3RoaXM5Lm9wdGlvbnMuYmFzZUNsYXNzXSwgcHJ2Z2V0Q2xhc3Nlcy5jYWxsKF90aGlzOSwgX3RoaXM5Lm9wdGlvbnMud3JhcHBlckNsYXNzKSkuam9pbignICcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuJGNvbnRhaW5lciA9ICQoJzxkaXY+JywgeyBjbGFzczogcHJ2Z2V0Q2xhc3MuY2FsbCh0aGlzLCAnY29udGFpbmVyJykgfSk7XG4gICAgICB0aGlzLiRvbiA9ICQoJzxzcGFuPicsIHtcbiAgICAgICAgaHRtbDogdGhpcy5vcHRpb25zLm9uVGV4dCxcbiAgICAgICAgY2xhc3M6IHBydmdldENsYXNzLmNhbGwodGhpcywgJ2hhbmRsZS1vbicpICsgJyAnICsgcHJ2Z2V0Q2xhc3MuY2FsbCh0aGlzLCB0aGlzLm9wdGlvbnMub25Db2xvcilcbiAgICAgIH0pO1xuICAgICAgdGhpcy4kb2ZmID0gJCgnPHNwYW4+Jywge1xuICAgICAgICBodG1sOiB0aGlzLm9wdGlvbnMub2ZmVGV4dCxcbiAgICAgICAgY2xhc3M6IHBydmdldENsYXNzLmNhbGwodGhpcywgJ2hhbmRsZS1vZmYnKSArICcgJyArIHBydmdldENsYXNzLmNhbGwodGhpcywgdGhpcy5vcHRpb25zLm9mZkNvbG9yKVxuICAgICAgfSk7XG4gICAgICB0aGlzLiRsYWJlbCA9ICQoJzxzcGFuPicsIHtcbiAgICAgICAgaHRtbDogdGhpcy5vcHRpb25zLmxhYmVsVGV4dCxcbiAgICAgICAgY2xhc3M6IHBydmdldENsYXNzLmNhbGwodGhpcywgJ2xhYmVsJylcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLiRlbGVtZW50Lm9uKCdpbml0LmJvb3RzdHJhcFN3aXRjaCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzOS5vcHRpb25zLm9uSW5pdChlbGVtZW50KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy4kZWxlbWVudC5vbignc3dpdGNoQ2hhbmdlLmJvb3RzdHJhcFN3aXRjaCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNoYW5nZVN0YXRlID0gX3RoaXM5Lm9wdGlvbnMub25Td2l0Y2hDaGFuZ2UuYXBwbHkoZWxlbWVudCwgYXJncyk7XG4gICAgICAgIGlmIChjaGFuZ2VTdGF0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBpZiAoX3RoaXM5LiRlbGVtZW50LmlzKCc6cmFkaW8nKSkge1xuICAgICAgICAgICAgJCgnW25hbWU9XCInICsgX3RoaXM5LiRlbGVtZW50LmF0dHIoJ25hbWUnKSArICdcIl0nKS50cmlnZ2VyKCdwcmV2aW91c1N0YXRlLmJvb3RzdHJhcFN3aXRjaCcsIHRydWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpczkuJGVsZW1lbnQudHJpZ2dlcigncHJldmlvdXNTdGF0ZS5ib290c3RyYXBTd2l0Y2gnLCB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLiRjb250YWluZXIgPSB0aGlzLiRlbGVtZW50LndyYXAodGhpcy4kY29udGFpbmVyKS5wYXJlbnQoKTtcbiAgICAgIHRoaXMuJHdyYXBwZXIgPSB0aGlzLiRjb250YWluZXIud3JhcCh0aGlzLiR3cmFwcGVyKS5wYXJlbnQoKTtcbiAgICAgIHRoaXMuJGVsZW1lbnQuYmVmb3JlKHRoaXMub3B0aW9ucy5pbnZlcnNlID8gdGhpcy4kb2ZmIDogdGhpcy4kb24pLmJlZm9yZSh0aGlzLiRsYWJlbCkuYmVmb3JlKHRoaXMub3B0aW9ucy5pbnZlcnNlID8gdGhpcy4kb24gOiB0aGlzLiRvZmYpO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmluZGV0ZXJtaW5hdGUpIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5wcm9wKCdpbmRldGVybWluYXRlJywgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIHBydmluaXQuY2FsbCh0aGlzKTtcbiAgICAgIHBydmVsZW1lbnRIYW5kbGVycy5jYWxsKHRoaXMpO1xuICAgICAgcHJ2aGFuZGxlSGFuZGxlcnMuY2FsbCh0aGlzKTtcbiAgICAgIHBydmxhYmVsSGFuZGxlcnMuY2FsbCh0aGlzKTtcbiAgICAgIHBydmZvcm1IYW5kbGVyLmNhbGwodGhpcyk7XG4gICAgICBwcnZleHRlcm5hbExhYmVsSGFuZGxlci5jYWxsKHRoaXMpO1xuICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdpbml0LmJvb3RzdHJhcFN3aXRjaCcsIHRoaXMub3B0aW9ucy5zdGF0ZSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEJvb3RzdHJhcFN3aXRjaCwgW3tcbiAgICAgIGtleTogJ3NldFByZXZPcHRpb25zJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQcmV2T3B0aW9ucygpIHtcbiAgICAgICAgdGhpcy5wcmV2T3B0aW9ucyA9IF9leHRlbmRzKHt9LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3N0YXRlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdGF0ZSh2YWx1ZSwgc2tpcCkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc3RhdGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kaXNhYmxlZCB8fCB0aGlzLm9wdGlvbnMucmVhZG9ubHkgfHwgdGhpcy5vcHRpb25zLnN0YXRlICYmICF0aGlzLm9wdGlvbnMucmFkaW9BbGxPZmYgJiYgdGhpcy4kZWxlbWVudC5pcygnOnJhZGlvJykpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy4kZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy4kZWxlbWVudC5pcygnOnJhZGlvJykpIHtcbiAgICAgICAgICAkKCdbbmFtZT1cIicgKyB0aGlzLiRlbGVtZW50LmF0dHIoJ25hbWUnKSArICdcIl0nKS50cmlnZ2VyKCdzZXRQcmV2aW91c09wdGlvbnMuYm9vdHN0cmFwU3dpdGNoJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdzZXRQcmV2aW91c09wdGlvbnMuYm9vdHN0cmFwU3dpdGNoJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pbmRldGVybWluYXRlKSB7XG4gICAgICAgICAgdGhpcy5pbmRldGVybWluYXRlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRlbGVtZW50LnByb3AoJ2NoZWNrZWQnLCBCb29sZWFuKHZhbHVlKSkudHJpZ2dlcignY2hhbmdlLmJvb3RzdHJhcFN3aXRjaCcsIHNraXApO1xuICAgICAgICByZXR1cm4gdGhpcy4kZWxlbWVudDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICd0b2dnbGVTdGF0ZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdG9nZ2xlU3RhdGUoc2tpcCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmRpc2FibGVkIHx8IHRoaXMub3B0aW9ucy5yZWFkb25seSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLiRlbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaW5kZXRlcm1pbmF0ZSkge1xuICAgICAgICAgIHRoaXMuaW5kZXRlcm1pbmF0ZShmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuJGVsZW1lbnQucHJvcCgnY2hlY2tlZCcsICF0aGlzLm9wdGlvbnMuc3RhdGUpLnRyaWdnZXIoJ2NoYW5nZS5ib290c3RyYXBTd2l0Y2gnLCBza2lwKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdzaXplJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzaXplKHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zaXplO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2l6ZSAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy4kd3JhcHBlci5yZW1vdmVDbGFzcyhwcnZnZXRDbGFzcy5jYWxsKHRoaXMsIHRoaXMub3B0aW9ucy5zaXplKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgdGhpcy4kd3JhcHBlci5hZGRDbGFzcyhwcnZnZXRDbGFzcy5jYWxsKHRoaXMsIHZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJ2d2lkdGguY2FsbCh0aGlzKTtcbiAgICAgICAgcHJ2Y29udGFpbmVyUG9zaXRpb24uY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5vcHRpb25zLnNpemUgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGVsZW1lbnQ7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnYW5pbWF0ZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYW5pbWF0ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuYW5pbWF0ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFuaW1hdGUgPT09IEJvb2xlYW4odmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuJGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudG9nZ2xlQW5pbWF0ZSgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3RvZ2dsZUFuaW1hdGUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRvZ2dsZUFuaW1hdGUoKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5hbmltYXRlID0gIXRoaXMub3B0aW9ucy5hbmltYXRlO1xuICAgICAgICB0aGlzLiR3cmFwcGVyLnRvZ2dsZUNsYXNzKHBydmdldENsYXNzLmNhbGwodGhpcywgJ2FuaW1hdGUnKSk7XG4gICAgICAgIHJldHVybiB0aGlzLiRlbGVtZW50O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2Rpc2FibGVkJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNhYmxlZCh2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZGlzYWJsZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kaXNhYmxlZCA9PT0gQm9vbGVhbih2YWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy4kZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50b2dnbGVEaXNhYmxlZCgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3RvZ2dsZURpc2FibGVkJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB0b2dnbGVEaXNhYmxlZCgpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmRpc2FibGVkID0gIXRoaXMub3B0aW9ucy5kaXNhYmxlZDtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5wcm9wKCdkaXNhYmxlZCcsIHRoaXMub3B0aW9ucy5kaXNhYmxlZCk7XG4gICAgICAgIHRoaXMuJHdyYXBwZXIudG9nZ2xlQ2xhc3MocHJ2Z2V0Q2xhc3MuY2FsbCh0aGlzLCAnZGlzYWJsZWQnKSk7XG4gICAgICAgIHJldHVybiB0aGlzLiRlbGVtZW50O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3JlYWRvbmx5JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWFkb25seSh2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMucmVhZG9ubHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZWFkb25seSA9PT0gQm9vbGVhbih2YWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy4kZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50b2dnbGVSZWFkb25seSgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3RvZ2dsZVJlYWRvbmx5JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB0b2dnbGVSZWFkb25seSgpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLnJlYWRvbmx5ID0gIXRoaXMub3B0aW9ucy5yZWFkb25seTtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5wcm9wKCdyZWFkb25seScsIHRoaXMub3B0aW9ucy5yZWFkb25seSk7XG4gICAgICAgIHRoaXMuJHdyYXBwZXIudG9nZ2xlQ2xhc3MocHJ2Z2V0Q2xhc3MuY2FsbCh0aGlzLCAncmVhZG9ubHknKSk7XG4gICAgICAgIHJldHVybiB0aGlzLiRlbGVtZW50O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2luZGV0ZXJtaW5hdGUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluZGV0ZXJtaW5hdGUodmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmluZGV0ZXJtaW5hdGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pbmRldGVybWluYXRlID09PSBCb29sZWFuKHZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLiRlbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRvZ2dsZUluZGV0ZXJtaW5hdGUoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICd0b2dnbGVJbmRldGVybWluYXRlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB0b2dnbGVJbmRldGVybWluYXRlKCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuaW5kZXRlcm1pbmF0ZSA9ICF0aGlzLm9wdGlvbnMuaW5kZXRlcm1pbmF0ZTtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5wcm9wKCdpbmRldGVybWluYXRlJywgdGhpcy5vcHRpb25zLmluZGV0ZXJtaW5hdGUpO1xuICAgICAgICB0aGlzLiR3cmFwcGVyLnRvZ2dsZUNsYXNzKHBydmdldENsYXNzLmNhbGwodGhpcywgJ2luZGV0ZXJtaW5hdGUnKSk7XG4gICAgICAgIHBydmNvbnRhaW5lclBvc2l0aW9uLmNhbGwodGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzLiRlbGVtZW50O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2ludmVyc2UnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGludmVyc2UodmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmludmVyc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pbnZlcnNlID09PSBCb29sZWFuKHZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLiRlbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRvZ2dsZUludmVyc2UoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICd0b2dnbGVJbnZlcnNlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB0b2dnbGVJbnZlcnNlKCkge1xuICAgICAgICB0aGlzLiR3cmFwcGVyLnRvZ2dsZUNsYXNzKHBydmdldENsYXNzLmNhbGwodGhpcywgJ2ludmVyc2UnKSk7XG4gICAgICAgIHZhciAkb24gPSB0aGlzLiRvbi5jbG9uZSh0cnVlKTtcbiAgICAgICAgdmFyICRvZmYgPSB0aGlzLiRvZmYuY2xvbmUodHJ1ZSk7XG4gICAgICAgIHRoaXMuJG9uLnJlcGxhY2VXaXRoKCRvZmYpO1xuICAgICAgICB0aGlzLiRvZmYucmVwbGFjZVdpdGgoJG9uKTtcbiAgICAgICAgdGhpcy4kb24gPSAkb2ZmO1xuICAgICAgICB0aGlzLiRvZmYgPSAkb247XG4gICAgICAgIHRoaXMub3B0aW9ucy5pbnZlcnNlID0gIXRoaXMub3B0aW9ucy5pbnZlcnNlO1xuICAgICAgICByZXR1cm4gdGhpcy4kZWxlbWVudDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdvbkNvbG9yJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNvbG9yKHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5vbkNvbG9yO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMub25Db2xvcikge1xuICAgICAgICAgIHRoaXMuJG9uLnJlbW92ZUNsYXNzKHBydmdldENsYXNzLmNhbGwodGhpcywgdGhpcy5vcHRpb25zLm9uQ29sb3IpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRvbi5hZGRDbGFzcyhwcnZnZXRDbGFzcy5jYWxsKHRoaXMsIHZhbHVlKSk7XG4gICAgICAgIHRoaXMub3B0aW9ucy5vbkNvbG9yID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzLiRlbGVtZW50O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ29mZkNvbG9yJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBvZmZDb2xvcih2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMub2ZmQ29sb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5vZmZDb2xvcikge1xuICAgICAgICAgIHRoaXMuJG9mZi5yZW1vdmVDbGFzcyhwcnZnZXRDbGFzcy5jYWxsKHRoaXMsIHRoaXMub3B0aW9ucy5vZmZDb2xvcikpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuJG9mZi5hZGRDbGFzcyhwcnZnZXRDbGFzcy5jYWxsKHRoaXMsIHZhbHVlKSk7XG4gICAgICAgIHRoaXMub3B0aW9ucy5vZmZDb2xvciA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcy4kZWxlbWVudDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdvblRleHQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uVGV4dCh2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMub25UZXh0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuJG9uLmh0bWwodmFsdWUpO1xuICAgICAgICBwcnZ3aWR0aC5jYWxsKHRoaXMpO1xuICAgICAgICBwcnZjb250YWluZXJQb3NpdGlvbi5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLm9wdGlvbnMub25UZXh0ID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzLiRlbGVtZW50O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ29mZlRleHQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9mZlRleHQodmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLm9mZlRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kb2ZmLmh0bWwodmFsdWUpO1xuICAgICAgICBwcnZ3aWR0aC5jYWxsKHRoaXMpO1xuICAgICAgICBwcnZjb250YWluZXJQb3NpdGlvbi5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLm9wdGlvbnMub2ZmVGV4dCA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcy4kZWxlbWVudDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdsYWJlbFRleHQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxhYmVsVGV4dCh2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMubGFiZWxUZXh0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuJGxhYmVsLmh0bWwodmFsdWUpO1xuICAgICAgICBwcnZ3aWR0aC5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLm9wdGlvbnMubGFiZWxUZXh0ID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzLiRlbGVtZW50O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2hhbmRsZVdpZHRoJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVXaWR0aCh2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaGFuZGxlV2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRpb25zLmhhbmRsZVdpZHRoID0gdmFsdWU7XG4gICAgICAgIHBydndpZHRoLmNhbGwodGhpcyk7XG4gICAgICAgIHBydmNvbnRhaW5lclBvc2l0aW9uLmNhbGwodGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzLiRlbGVtZW50O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2xhYmVsV2lkdGgnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxhYmVsV2lkdGgodmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmxhYmVsV2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRpb25zLmxhYmVsV2lkdGggPSB2YWx1ZTtcbiAgICAgICAgcHJ2d2lkdGguY2FsbCh0aGlzKTtcbiAgICAgICAgcHJ2Y29udGFpbmVyUG9zaXRpb24uY2FsbCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGVsZW1lbnQ7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnYmFzZUNsYXNzJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBiYXNlQ2xhc3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuYmFzZUNsYXNzO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3dyYXBwZXJDbGFzcycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gd3JhcHBlckNsYXNzKHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy53cmFwcGVyQ2xhc3M7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHdyYXBwZXJDbGFzcyA9IHZhbHVlIHx8ICQuZm4uYm9vdHN0cmFwU3dpdGNoLmRlZmF1bHRzLndyYXBwZXJDbGFzcztcbiAgICAgICAgdGhpcy4kd3JhcHBlci5yZW1vdmVDbGFzcyhwcnZnZXRDbGFzc2VzLmNhbGwodGhpcywgdGhpcy5vcHRpb25zLndyYXBwZXJDbGFzcykuam9pbignICcpKTtcbiAgICAgICAgdGhpcy4kd3JhcHBlci5hZGRDbGFzcyhwcnZnZXRDbGFzc2VzLmNhbGwodGhpcywgd3JhcHBlckNsYXNzKS5qb2luKCcgJykpO1xuICAgICAgICB0aGlzLm9wdGlvbnMud3JhcHBlckNsYXNzID0gd3JhcHBlckNsYXNzO1xuICAgICAgICByZXR1cm4gdGhpcy4kZWxlbWVudDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdyYWRpb0FsbE9mZicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmFkaW9BbGxPZmYodmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnJhZGlvQWxsT2ZmO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWwgPSBCb29sZWFuKHZhbHVlKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYWRpb0FsbE9mZiA9PT0gdmFsKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuJGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRpb25zLnJhZGlvQWxsT2ZmID0gdmFsO1xuICAgICAgICByZXR1cm4gdGhpcy4kZWxlbWVudDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdvbkluaXQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uSW5pdCh2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMub25Jbml0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0aW9ucy5vbkluaXQgPSB2YWx1ZSB8fCAkLmZuLmJvb3RzdHJhcFN3aXRjaC5kZWZhdWx0cy5vbkluaXQ7XG4gICAgICAgIHJldHVybiB0aGlzLiRlbGVtZW50O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ29uU3dpdGNoQ2hhbmdlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBvblN3aXRjaENoYW5nZSh2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMub25Td2l0Y2hDaGFuZ2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRpb25zLm9uU3dpdGNoQ2hhbmdlID0gdmFsdWUgfHwgJC5mbi5ib290c3RyYXBTd2l0Y2guZGVmYXVsdHMub25Td2l0Y2hDaGFuZ2U7XG4gICAgICAgIHJldHVybiB0aGlzLiRlbGVtZW50O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2Rlc3Ryb3knLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIHZhciAkZm9ybSA9IHRoaXMuJGVsZW1lbnQuY2xvc2VzdCgnZm9ybScpO1xuICAgICAgICBpZiAoJGZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgJGZvcm0ub2ZmKCdyZXNldC5ib290c3RyYXBTd2l0Y2gnKS5yZW1vdmVEYXRhKCdib290c3RyYXAtc3dpdGNoJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kY29udGFpbmVyLmNoaWxkcmVuKCkubm90KHRoaXMuJGVsZW1lbnQpLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLiRlbGVtZW50LnVud3JhcCgpLnVud3JhcCgpLm9mZignLmJvb3RzdHJhcFN3aXRjaCcpLnJlbW92ZURhdGEoJ2Jvb3RzdHJhcC1zd2l0Y2gnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGVsZW1lbnQ7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEJvb3RzdHJhcFN3aXRjaDtcbiAgfSgpO1xuXG4gIGZ1bmN0aW9uIGJvb3RzdHJhcFN3aXRjaChvcHRpb24pIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZHVjZXIocmV0LCBuZXh0KSB7XG4gICAgICB2YXIgJHRoaXMgPSAkKG5leHQpO1xuICAgICAgdmFyIGV4aXN0aW5nRGF0YSA9ICR0aGlzLmRhdGEoJ2Jvb3RzdHJhcC1zd2l0Y2gnKTtcbiAgICAgIHZhciBkYXRhID0gZXhpc3RpbmdEYXRhIHx8IG5ldyBCb290c3RyYXBTd2l0Y2gobmV4dCwgb3B0aW9uKTtcbiAgICAgIGlmICghZXhpc3RpbmdEYXRhKSB7XG4gICAgICAgICR0aGlzLmRhdGEoJ2Jvb3RzdHJhcC1zd2l0Y2gnLCBkYXRhKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gZGF0YVtvcHRpb25dLmFwcGx5KGRhdGEsIGFyZ3MpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5yZWR1Y2UuY2FsbCh0aGlzLCByZWR1Y2VyLCB0aGlzKTtcbiAgfVxuXG4gICQuZm4uYm9vdHN0cmFwU3dpdGNoID0gYm9vdHN0cmFwU3dpdGNoO1xuICAkLmZuLmJvb3RzdHJhcFN3aXRjaC5Db25zdHJ1Y3RvciA9IEJvb3RzdHJhcFN3aXRjaDtcbiAgJC5mbi5ib290c3RyYXBTd2l0Y2guZGVmYXVsdHMgPSB7XG4gICAgc3RhdGU6IHRydWUsXG4gICAgc2l6ZTogbnVsbCxcbiAgICBhbmltYXRlOiB0cnVlLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICByZWFkb25seTogZmFsc2UsXG4gICAgaW5kZXRlcm1pbmF0ZTogZmFsc2UsXG4gICAgaW52ZXJzZTogZmFsc2UsXG4gICAgcmFkaW9BbGxPZmY6IGZhbHNlLFxuICAgIG9uQ29sb3I6ICdwcmltYXJ5JyxcbiAgICBvZmZDb2xvcjogJ2RlZmF1bHQnLFxuICAgIG9uVGV4dDogJ09OJyxcbiAgICBvZmZUZXh0OiAnT0ZGJyxcbiAgICBsYWJlbFRleHQ6ICcmbmJzcCcsXG4gICAgaGFuZGxlV2lkdGg6ICdhdXRvJyxcbiAgICBsYWJlbFdpZHRoOiAnYXV0bycsXG4gICAgYmFzZUNsYXNzOiAnYm9vdHN0cmFwLXN3aXRjaCcsXG4gICAgd3JhcHBlckNsYXNzOiAnd3JhcHBlcicsXG4gICAgb25Jbml0OiBmdW5jdGlvbiBvbkluaXQoKSB7fSxcbiAgICBvblN3aXRjaENoYW5nZTogZnVuY3Rpb24gb25Td2l0Y2hDaGFuZ2UoKSB7fVxuICB9O1xufSk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gIHZhciBBamF4TW9uaXRvciwgQmFyLCBEb2N1bWVudE1vbml0b3IsIEVsZW1lbnRNb25pdG9yLCBFbGVtZW50VHJhY2tlciwgRXZlbnRMYWdNb25pdG9yLCBFdmVudGVkLCBFdmVudHMsIE5vVGFyZ2V0RXJyb3IsIFBhY2UsIFJlcXVlc3RJbnRlcmNlcHQsIFNPVVJDRV9LRVlTLCBTY2FsZXIsIFNvY2tldFJlcXVlc3RUcmFja2VyLCBYSFJSZXF1ZXN0VHJhY2tlciwgYW5pbWF0aW9uLCBhdmdBbXBsaXR1ZGUsIGJhciwgY2FuY2VsQW5pbWF0aW9uLCBjYW5jZWxBbmltYXRpb25GcmFtZSwgZGVmYXVsdE9wdGlvbnMsIGV4dGVuZCwgZXh0ZW5kTmF0aXZlLCBnZXRGcm9tRE9NLCBnZXRJbnRlcmNlcHQsIGhhbmRsZVB1c2hTdGF0ZSwgaWdub3JlU3RhY2ssIGluaXQsIG5vdywgb3B0aW9ucywgcmVxdWVzdEFuaW1hdGlvbkZyYW1lLCByZXN1bHQsIHJ1bkFuaW1hdGlvbiwgc2NhbGVycywgc2hvdWxkSWdub3JlVVJMLCBzaG91bGRUcmFjaywgc291cmNlLCBzb3VyY2VzLCB1bmlTY2FsZXIsIF9XZWJTb2NrZXQsIF9YRG9tYWluUmVxdWVzdCwgX1hNTEh0dHBSZXF1ZXN0LCBfaSwgX2ludGVyY2VwdCwgX2xlbiwgX3B1c2hTdGF0ZSwgX3JlZiwgX3JlZjEsIF9yZXBsYWNlU3RhdGUsXG4gICAgX19zbGljZSA9IFtdLnNsaWNlLFxuICAgIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICAgIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICAgIF9faW5kZXhPZiA9IFtdLmluZGV4T2YgfHwgZnVuY3Rpb24oaXRlbSkgeyBmb3IgKHZhciBpID0gMCwgbCA9IHRoaXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7IGlmIChpIGluIHRoaXMgJiYgdGhpc1tpXSA9PT0gaXRlbSkgcmV0dXJuIGk7IH0gcmV0dXJuIC0xOyB9O1xuXG4gIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIGNhdGNodXBUaW1lOiAxMDAsXG4gICAgaW5pdGlhbFJhdGU6IC4wMyxcbiAgICBtaW5UaW1lOiAyNTAsXG4gICAgZ2hvc3RUaW1lOiAxMDAsXG4gICAgbWF4UHJvZ3Jlc3NQZXJGcmFtZTogMjAsXG4gICAgZWFzZUZhY3RvcjogMS4yNSxcbiAgICBzdGFydE9uUGFnZUxvYWQ6IHRydWUsXG4gICAgcmVzdGFydE9uUHVzaFN0YXRlOiB0cnVlLFxuICAgIHJlc3RhcnRPblJlcXVlc3RBZnRlcjogNTAwLFxuICAgIHRhcmdldDogJ2JvZHknLFxuICAgIGVsZW1lbnRzOiB7XG4gICAgICBjaGVja0ludGVydmFsOiAxMDAsXG4gICAgICBzZWxlY3RvcnM6IFsnYm9keSddXG4gICAgfSxcbiAgICBldmVudExhZzoge1xuICAgICAgbWluU2FtcGxlczogMTAsXG4gICAgICBzYW1wbGVDb3VudDogMyxcbiAgICAgIGxhZ1RocmVzaG9sZDogM1xuICAgIH0sXG4gICAgYWpheDoge1xuICAgICAgdHJhY2tNZXRob2RzOiBbJ0dFVCddLFxuICAgICAgdHJhY2tXZWJTb2NrZXRzOiB0cnVlLFxuICAgICAgaWdub3JlVVJMczogW11cbiAgICB9XG4gIH07XG5cbiAgbm93ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIF9yZWY7XG4gICAgcmV0dXJuIChfcmVmID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSBcInVuZGVmaW5lZFwiICYmIHBlcmZvcm1hbmNlICE9PSBudWxsID8gdHlwZW9mIHBlcmZvcm1hbmNlLm5vdyA9PT0gXCJmdW5jdGlvblwiID8gcGVyZm9ybWFuY2Uubm93KCkgOiB2b2lkIDAgOiB2b2lkIDApICE9IG51bGwgPyBfcmVmIDogKyhuZXcgRGF0ZSk7XG4gIH07XG5cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXG4gIGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZTtcblxuICBpZiAocmVxdWVzdEFuaW1hdGlvbkZyYW1lID09IG51bGwpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihmbikge1xuICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZm4sIDUwKTtcbiAgICB9O1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oaWQpIHtcbiAgICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xuICAgIH07XG4gIH1cblxuICBydW5BbmltYXRpb24gPSBmdW5jdGlvbihmbikge1xuICAgIHZhciBsYXN0LCB0aWNrO1xuICAgIGxhc3QgPSBub3coKTtcbiAgICB0aWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZGlmZjtcbiAgICAgIGRpZmYgPSBub3coKSAtIGxhc3Q7XG4gICAgICBpZiAoZGlmZiA+PSAzMykge1xuICAgICAgICBsYXN0ID0gbm93KCk7XG4gICAgICAgIHJldHVybiBmbihkaWZmLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KHRpY2ssIDMzIC0gZGlmZik7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gdGljaygpO1xuICB9O1xuXG4gIHJlc3VsdCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzLCBrZXksIG9iajtcbiAgICBvYmogPSBhcmd1bWVudHNbMF0sIGtleSA9IGFyZ3VtZW50c1sxXSwgYXJncyA9IDMgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpIDogW107XG4gICAgaWYgKHR5cGVvZiBvYmpba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIG9ialtrZXldLmFwcGx5KG9iaiwgYXJncyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvYmpba2V5XTtcbiAgICB9XG4gIH07XG5cbiAgZXh0ZW5kID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGtleSwgb3V0LCBzb3VyY2UsIHNvdXJjZXMsIHZhbCwgX2ksIF9sZW47XG4gICAgb3V0ID0gYXJndW1lbnRzWzBdLCBzb3VyY2VzID0gMiA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkgOiBbXTtcbiAgICBmb3IgKF9pID0gMCwgX2xlbiA9IHNvdXJjZXMubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgIHNvdXJjZSA9IHNvdXJjZXNbX2ldO1xuICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICBpZiAoIV9faGFzUHJvcC5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICAgICAgdmFsID0gc291cmNlW2tleV07XG4gICAgICAgICAgaWYgKChvdXRba2V5XSAhPSBudWxsKSAmJiB0eXBlb2Ygb3V0W2tleV0gPT09ICdvYmplY3QnICYmICh2YWwgIT0gbnVsbCkgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGV4dGVuZChvdXRba2V5XSwgdmFsKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3V0W2tleV0gPSB2YWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH07XG5cbiAgYXZnQW1wbGl0dWRlID0gZnVuY3Rpb24oYXJyKSB7XG4gICAgdmFyIGNvdW50LCBzdW0sIHYsIF9pLCBfbGVuO1xuICAgIHN1bSA9IGNvdW50ID0gMDtcbiAgICBmb3IgKF9pID0gMCwgX2xlbiA9IGFyci5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgdiA9IGFycltfaV07XG4gICAgICBzdW0gKz0gTWF0aC5hYnModik7XG4gICAgICBjb3VudCsrO1xuICAgIH1cbiAgICByZXR1cm4gc3VtIC8gY291bnQ7XG4gIH07XG5cbiAgZ2V0RnJvbURPTSA9IGZ1bmN0aW9uKGtleSwganNvbikge1xuICAgIHZhciBkYXRhLCBlLCBlbDtcbiAgICBpZiAoa2V5ID09IG51bGwpIHtcbiAgICAgIGtleSA9ICdvcHRpb25zJztcbiAgICB9XG4gICAgaWYgKGpzb24gPT0gbnVsbCkge1xuICAgICAganNvbiA9IHRydWU7XG4gICAgfVxuICAgIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXBhY2UtXCIgKyBrZXkgKyBcIl1cIik7XG4gICAgaWYgKCFlbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkYXRhID0gZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1wYWNlLVwiICsga2V5KTtcbiAgICBpZiAoIWpzb24pIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XG4gICAgfSBjYXRjaCAoX2Vycm9yKSB7XG4gICAgICBlID0gX2Vycm9yO1xuICAgICAgcmV0dXJuIHR5cGVvZiBjb25zb2xlICE9PSBcInVuZGVmaW5lZFwiICYmIGNvbnNvbGUgIT09IG51bGwgPyBjb25zb2xlLmVycm9yKFwiRXJyb3IgcGFyc2luZyBpbmxpbmUgcGFjZSBvcHRpb25zXCIsIGUpIDogdm9pZCAwO1xuICAgIH1cbiAgfTtcblxuICBFdmVudGVkID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIEV2ZW50ZWQoKSB7fVxuXG4gICAgRXZlbnRlZC5wcm90b3R5cGUub24gPSBmdW5jdGlvbihldmVudCwgaGFuZGxlciwgY3R4LCBvbmNlKSB7XG4gICAgICB2YXIgX2Jhc2U7XG4gICAgICBpZiAob25jZSA9PSBudWxsKSB7XG4gICAgICAgIG9uY2UgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmJpbmRpbmdzID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5iaW5kaW5ncyA9IHt9O1xuICAgICAgfVxuICAgICAgaWYgKChfYmFzZSA9IHRoaXMuYmluZGluZ3MpW2V2ZW50XSA9PSBudWxsKSB7XG4gICAgICAgIF9iYXNlW2V2ZW50XSA9IFtdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuYmluZGluZ3NbZXZlbnRdLnB1c2goe1xuICAgICAgICBoYW5kbGVyOiBoYW5kbGVyLFxuICAgICAgICBjdHg6IGN0eCxcbiAgICAgICAgb25jZTogb25jZVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIEV2ZW50ZWQucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbihldmVudCwgaGFuZGxlciwgY3R4KSB7XG4gICAgICByZXR1cm4gdGhpcy5vbihldmVudCwgaGFuZGxlciwgY3R4LCB0cnVlKTtcbiAgICB9O1xuXG4gICAgRXZlbnRlZC5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24oZXZlbnQsIGhhbmRsZXIpIHtcbiAgICAgIHZhciBpLCBfcmVmLCBfcmVzdWx0cztcbiAgICAgIGlmICgoKF9yZWYgPSB0aGlzLmJpbmRpbmdzKSAhPSBudWxsID8gX3JlZltldmVudF0gOiB2b2lkIDApID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGhhbmRsZXIgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZGVsZXRlIHRoaXMuYmluZGluZ3NbZXZlbnRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaSA9IDA7XG4gICAgICAgIF9yZXN1bHRzID0gW107XG4gICAgICAgIHdoaWxlIChpIDwgdGhpcy5iaW5kaW5nc1tldmVudF0ubGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuYmluZGluZ3NbZXZlbnRdW2ldLmhhbmRsZXIgPT09IGhhbmRsZXIpIHtcbiAgICAgICAgICAgIF9yZXN1bHRzLnB1c2godGhpcy5iaW5kaW5nc1tldmVudF0uc3BsaWNlKGksIDEpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3Jlc3VsdHMucHVzaChpKyspO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3Jlc3VsdHM7XG4gICAgICB9XG4gICAgfTtcblxuICAgIEV2ZW50ZWQucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBhcmdzLCBjdHgsIGV2ZW50LCBoYW5kbGVyLCBpLCBvbmNlLCBfcmVmLCBfcmVmMSwgX3Jlc3VsdHM7XG4gICAgICBldmVudCA9IGFyZ3VtZW50c1swXSwgYXJncyA9IDIgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpIDogW107XG4gICAgICBpZiAoKF9yZWYgPSB0aGlzLmJpbmRpbmdzKSAhPSBudWxsID8gX3JlZltldmVudF0gOiB2b2lkIDApIHtcbiAgICAgICAgaSA9IDA7XG4gICAgICAgIF9yZXN1bHRzID0gW107XG4gICAgICAgIHdoaWxlIChpIDwgdGhpcy5iaW5kaW5nc1tldmVudF0ubGVuZ3RoKSB7XG4gICAgICAgICAgX3JlZjEgPSB0aGlzLmJpbmRpbmdzW2V2ZW50XVtpXSwgaGFuZGxlciA9IF9yZWYxLmhhbmRsZXIsIGN0eCA9IF9yZWYxLmN0eCwgb25jZSA9IF9yZWYxLm9uY2U7XG4gICAgICAgICAgaGFuZGxlci5hcHBseShjdHggIT0gbnVsbCA/IGN0eCA6IHRoaXMsIGFyZ3MpO1xuICAgICAgICAgIGlmIChvbmNlKSB7XG4gICAgICAgICAgICBfcmVzdWx0cy5wdXNoKHRoaXMuYmluZGluZ3NbZXZlbnRdLnNwbGljZShpLCAxKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9yZXN1bHRzLnB1c2goaSsrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9yZXN1bHRzO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gRXZlbnRlZDtcblxuICB9KSgpO1xuXG4gIFBhY2UgPSB3aW5kb3cuUGFjZSB8fCB7fTtcblxuICB3aW5kb3cuUGFjZSA9IFBhY2U7XG5cbiAgZXh0ZW5kKFBhY2UsIEV2ZW50ZWQucHJvdG90eXBlKTtcblxuICBvcHRpb25zID0gUGFjZS5vcHRpb25zID0gZXh0ZW5kKHt9LCBkZWZhdWx0T3B0aW9ucywgd2luZG93LnBhY2VPcHRpb25zLCBnZXRGcm9tRE9NKCkpO1xuXG4gIF9yZWYgPSBbJ2FqYXgnLCAnZG9jdW1lbnQnLCAnZXZlbnRMYWcnLCAnZWxlbWVudHMnXTtcbiAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgc291cmNlID0gX3JlZltfaV07XG4gICAgaWYgKG9wdGlvbnNbc291cmNlXSA9PT0gdHJ1ZSkge1xuICAgICAgb3B0aW9uc1tzb3VyY2VdID0gZGVmYXVsdE9wdGlvbnNbc291cmNlXTtcbiAgICB9XG4gIH1cblxuICBOb1RhcmdldEVycm9yID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhOb1RhcmdldEVycm9yLCBfc3VwZXIpO1xuXG4gICAgZnVuY3Rpb24gTm9UYXJnZXRFcnJvcigpIHtcbiAgICAgIF9yZWYxID0gTm9UYXJnZXRFcnJvci5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIHJldHVybiBfcmVmMTtcbiAgICB9XG5cbiAgICByZXR1cm4gTm9UYXJnZXRFcnJvcjtcblxuICB9KShFcnJvcik7XG5cbiAgQmFyID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIEJhcigpIHtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgIH1cblxuICAgIEJhci5wcm90b3R5cGUuZ2V0RWxlbWVudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHRhcmdldEVsZW1lbnQ7XG4gICAgICBpZiAodGhpcy5lbCA9PSBudWxsKSB7XG4gICAgICAgIHRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMudGFyZ2V0KTtcbiAgICAgICAgaWYgKCF0YXJnZXRFbGVtZW50KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IE5vVGFyZ2V0RXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTmFtZSA9IFwicGFjZSBwYWNlLWFjdGl2ZVwiO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lLnJlcGxhY2UoL3BhY2UtZG9uZS9nLCAnJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lICs9ICcgcGFjZS1ydW5uaW5nJztcbiAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cInBhY2UtcHJvZ3Jlc3NcIj5cXG4gIDxkaXYgY2xhc3M9XCJwYWNlLXByb2dyZXNzLWlubmVyXCI+PC9kaXY+XFxuPC9kaXY+XFxuPGRpdiBjbGFzcz1cInBhY2UtYWN0aXZpdHlcIj48L2Rpdj4nO1xuICAgICAgICBpZiAodGFyZ2V0RWxlbWVudC5maXJzdENoaWxkICE9IG51bGwpIHtcbiAgICAgICAgICB0YXJnZXRFbGVtZW50Lmluc2VydEJlZm9yZSh0aGlzLmVsLCB0YXJnZXRFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmVsO1xuICAgIH07XG5cbiAgICBCYXIucHJvdG90eXBlLmZpbmlzaCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGVsO1xuICAgICAgZWwgPSB0aGlzLmdldEVsZW1lbnQoKTtcbiAgICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKCdwYWNlLWFjdGl2ZScsICcnKTtcbiAgICAgIGVsLmNsYXNzTmFtZSArPSAnIHBhY2UtaW5hY3RpdmUnO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZS5yZXBsYWNlKCdwYWNlLXJ1bm5pbmcnLCAnJyk7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgKz0gJyBwYWNlLWRvbmUnO1xuICAgIH07XG5cbiAgICBCYXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKHByb2cpIHtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSBwcm9nO1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKCk7XG4gICAgfTtcblxuICAgIEJhci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5nZXRFbGVtZW50KCkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmdldEVsZW1lbnQoKSk7XG4gICAgICB9IGNhdGNoIChfZXJyb3IpIHtcbiAgICAgICAgTm9UYXJnZXRFcnJvciA9IF9lcnJvcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmVsID0gdm9pZCAwO1xuICAgIH07XG5cbiAgICBCYXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGVsLCBrZXksIHByb2dyZXNzU3RyLCB0cmFuc2Zvcm0sIF9qLCBfbGVuMSwgX3JlZjI7XG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLnRhcmdldCkgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBlbCA9IHRoaXMuZ2V0RWxlbWVudCgpO1xuICAgICAgdHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUzZChcIiArIHRoaXMucHJvZ3Jlc3MgKyBcIiUsIDAsIDApXCI7XG4gICAgICBfcmVmMiA9IFsnd2Via2l0VHJhbnNmb3JtJywgJ21zVHJhbnNmb3JtJywgJ3RyYW5zZm9ybSddO1xuICAgICAgZm9yIChfaiA9IDAsIF9sZW4xID0gX3JlZjIubGVuZ3RoOyBfaiA8IF9sZW4xOyBfaisrKSB7XG4gICAgICAgIGtleSA9IF9yZWYyW19qXTtcbiAgICAgICAgZWwuY2hpbGRyZW5bMF0uc3R5bGVba2V5XSA9IHRyYW5zZm9ybTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5sYXN0UmVuZGVyZWRQcm9ncmVzcyB8fCB0aGlzLmxhc3RSZW5kZXJlZFByb2dyZXNzIHwgMCAhPT0gdGhpcy5wcm9ncmVzcyB8IDApIHtcbiAgICAgICAgZWwuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKCdkYXRhLXByb2dyZXNzLXRleHQnLCBcIlwiICsgKHRoaXMucHJvZ3Jlc3MgfCAwKSArIFwiJVwiKTtcbiAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3MgPj0gMTAwKSB7XG4gICAgICAgICAgcHJvZ3Jlc3NTdHIgPSAnOTknO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb2dyZXNzU3RyID0gdGhpcy5wcm9ncmVzcyA8IDEwID8gXCIwXCIgOiBcIlwiO1xuICAgICAgICAgIHByb2dyZXNzU3RyICs9IHRoaXMucHJvZ3Jlc3MgfCAwO1xuICAgICAgICB9XG4gICAgICAgIGVsLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9ncmVzcycsIFwiXCIgKyBwcm9ncmVzc1N0cik7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5sYXN0UmVuZGVyZWRQcm9ncmVzcyA9IHRoaXMucHJvZ3Jlc3M7XG4gICAgfTtcblxuICAgIEJhci5wcm90b3R5cGUuZG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvZ3Jlc3MgPj0gMTAwO1xuICAgIH07XG5cbiAgICByZXR1cm4gQmFyO1xuXG4gIH0pKCk7XG5cbiAgRXZlbnRzID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIEV2ZW50cygpIHtcbiAgICAgIHRoaXMuYmluZGluZ3MgPSB7fTtcbiAgICB9XG5cbiAgICBFdmVudHMucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbihuYW1lLCB2YWwpIHtcbiAgICAgIHZhciBiaW5kaW5nLCBfaiwgX2xlbjEsIF9yZWYyLCBfcmVzdWx0cztcbiAgICAgIGlmICh0aGlzLmJpbmRpbmdzW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgX3JlZjIgPSB0aGlzLmJpbmRpbmdzW25hbWVdO1xuICAgICAgICBfcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKF9qID0gMCwgX2xlbjEgPSBfcmVmMi5sZW5ndGg7IF9qIDwgX2xlbjE7IF9qKyspIHtcbiAgICAgICAgICBiaW5kaW5nID0gX3JlZjJbX2pdO1xuICAgICAgICAgIF9yZXN1bHRzLnB1c2goYmluZGluZy5jYWxsKHRoaXMsIHZhbCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfcmVzdWx0cztcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgRXZlbnRzLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgICB2YXIgX2Jhc2U7XG4gICAgICBpZiAoKF9iYXNlID0gdGhpcy5iaW5kaW5ncylbbmFtZV0gPT0gbnVsbCkge1xuICAgICAgICBfYmFzZVtuYW1lXSA9IFtdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuYmluZGluZ3NbbmFtZV0ucHVzaChmbik7XG4gICAgfTtcblxuICAgIHJldHVybiBFdmVudHM7XG5cbiAgfSkoKTtcblxuICBfWE1MSHR0cFJlcXVlc3QgPSB3aW5kb3cuWE1MSHR0cFJlcXVlc3Q7XG5cbiAgX1hEb21haW5SZXF1ZXN0ID0gd2luZG93LlhEb21haW5SZXF1ZXN0O1xuXG4gIF9XZWJTb2NrZXQgPSB3aW5kb3cuV2ViU29ja2V0O1xuXG4gIGV4dGVuZE5hdGl2ZSA9IGZ1bmN0aW9uKHRvLCBmcm9tKSB7XG4gICAgdmFyIGUsIGtleSwgX3Jlc3VsdHM7XG4gICAgX3Jlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGtleSBpbiBmcm9tLnByb3RvdHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCh0b1trZXldID09IG51bGwpICYmIHR5cGVvZiBmcm9tW2tleV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgX3Jlc3VsdHMucHVzaChPYmplY3QuZGVmaW5lUHJvcGVydHkodG8sIGtleSwge1xuICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmcm9tLnByb3RvdHlwZVtrZXldO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3Jlc3VsdHMucHVzaCh0b1trZXldID0gZnJvbS5wcm90b3R5cGVba2V5XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF9yZXN1bHRzLnB1c2godm9pZCAwKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoX2Vycm9yKSB7XG4gICAgICAgIGUgPSBfZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBfcmVzdWx0cztcbiAgfTtcblxuICBpZ25vcmVTdGFjayA9IFtdO1xuXG4gIFBhY2UuaWdub3JlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MsIGZuLCByZXQ7XG4gICAgZm4gPSBhcmd1bWVudHNbMF0sIGFyZ3MgPSAyIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSA6IFtdO1xuICAgIGlnbm9yZVN0YWNrLnVuc2hpZnQoJ2lnbm9yZScpO1xuICAgIHJldCA9IGZuLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIGlnbm9yZVN0YWNrLnNoaWZ0KCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfTtcblxuICBQYWNlLnRyYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MsIGZuLCByZXQ7XG4gICAgZm4gPSBhcmd1bWVudHNbMF0sIGFyZ3MgPSAyIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSA6IFtdO1xuICAgIGlnbm9yZVN0YWNrLnVuc2hpZnQoJ3RyYWNrJyk7XG4gICAgcmV0ID0gZm4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgaWdub3JlU3RhY2suc2hpZnQoKTtcbiAgICByZXR1cm4gcmV0O1xuICB9O1xuXG4gIHNob3VsZFRyYWNrID0gZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgdmFyIF9yZWYyO1xuICAgIGlmIChtZXRob2QgPT0gbnVsbCkge1xuICAgICAgbWV0aG9kID0gJ0dFVCc7XG4gICAgfVxuICAgIGlmIChpZ25vcmVTdGFja1swXSA9PT0gJ3RyYWNrJykge1xuICAgICAgcmV0dXJuICdmb3JjZSc7XG4gICAgfVxuICAgIGlmICghaWdub3JlU3RhY2subGVuZ3RoICYmIG9wdGlvbnMuYWpheCkge1xuICAgICAgaWYgKG1ldGhvZCA9PT0gJ3NvY2tldCcgJiYgb3B0aW9ucy5hamF4LnRyYWNrV2ViU29ja2V0cykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoX3JlZjIgPSBtZXRob2QudG9VcHBlckNhc2UoKSwgX19pbmRleE9mLmNhbGwob3B0aW9ucy5hamF4LnRyYWNrTWV0aG9kcywgX3JlZjIpID49IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBSZXF1ZXN0SW50ZXJjZXB0ID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhSZXF1ZXN0SW50ZXJjZXB0LCBfc3VwZXIpO1xuXG4gICAgZnVuY3Rpb24gUmVxdWVzdEludGVyY2VwdCgpIHtcbiAgICAgIHZhciBtb25pdG9yWEhSLFxuICAgICAgICBfdGhpcyA9IHRoaXM7XG4gICAgICBSZXF1ZXN0SW50ZXJjZXB0Ll9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgbW9uaXRvclhIUiA9IGZ1bmN0aW9uKHJlcSkge1xuICAgICAgICB2YXIgX29wZW47XG4gICAgICAgIF9vcGVuID0gcmVxLm9wZW47XG4gICAgICAgIHJldHVybiByZXEub3BlbiA9IGZ1bmN0aW9uKHR5cGUsIHVybCwgYXN5bmMpIHtcbiAgICAgICAgICBpZiAoc2hvdWxkVHJhY2sodHlwZSkpIHtcbiAgICAgICAgICAgIF90aGlzLnRyaWdnZXIoJ3JlcXVlc3QnLCB7XG4gICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgICByZXF1ZXN0OiByZXFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gX29wZW4uYXBwbHkocmVxLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICAgIHdpbmRvdy5YTUxIdHRwUmVxdWVzdCA9IGZ1bmN0aW9uKGZsYWdzKSB7XG4gICAgICAgIHZhciByZXE7XG4gICAgICAgIHJlcSA9IG5ldyBfWE1MSHR0cFJlcXVlc3QoZmxhZ3MpO1xuICAgICAgICBtb25pdG9yWEhSKHJlcSk7XG4gICAgICAgIHJldHVybiByZXE7XG4gICAgICB9O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZXh0ZW5kTmF0aXZlKHdpbmRvdy5YTUxIdHRwUmVxdWVzdCwgX1hNTEh0dHBSZXF1ZXN0KTtcbiAgICAgIH0gY2F0Y2ggKF9lcnJvcikge31cbiAgICAgIGlmIChfWERvbWFpblJlcXVlc3QgIT0gbnVsbCkge1xuICAgICAgICB3aW5kb3cuWERvbWFpblJlcXVlc3QgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgcmVxO1xuICAgICAgICAgIHJlcSA9IG5ldyBfWERvbWFpblJlcXVlc3Q7XG4gICAgICAgICAgbW9uaXRvclhIUihyZXEpO1xuICAgICAgICAgIHJldHVybiByZXE7XG4gICAgICAgIH07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZXh0ZW5kTmF0aXZlKHdpbmRvdy5YRG9tYWluUmVxdWVzdCwgX1hEb21haW5SZXF1ZXN0KTtcbiAgICAgICAgfSBjYXRjaCAoX2Vycm9yKSB7fVxuICAgICAgfVxuICAgICAgaWYgKChfV2ViU29ja2V0ICE9IG51bGwpICYmIG9wdGlvbnMuYWpheC50cmFja1dlYlNvY2tldHMpIHtcbiAgICAgICAgd2luZG93LldlYlNvY2tldCA9IGZ1bmN0aW9uKHVybCwgcHJvdG9jb2xzKSB7XG4gICAgICAgICAgdmFyIHJlcTtcbiAgICAgICAgICBpZiAocHJvdG9jb2xzICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJlcSA9IG5ldyBfV2ViU29ja2V0KHVybCwgcHJvdG9jb2xzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVxID0gbmV3IF9XZWJTb2NrZXQodXJsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHNob3VsZFRyYWNrKCdzb2NrZXQnKSkge1xuICAgICAgICAgICAgX3RoaXMudHJpZ2dlcigncmVxdWVzdCcsIHtcbiAgICAgICAgICAgICAgdHlwZTogJ3NvY2tldCcsXG4gICAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgICBwcm90b2NvbHM6IHByb3RvY29scyxcbiAgICAgICAgICAgICAgcmVxdWVzdDogcmVxXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcTtcbiAgICAgICAgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBleHRlbmROYXRpdmUod2luZG93LldlYlNvY2tldCwgX1dlYlNvY2tldCk7XG4gICAgICAgIH0gY2F0Y2ggKF9lcnJvcikge31cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVxdWVzdEludGVyY2VwdDtcblxuICB9KShFdmVudHMpO1xuXG4gIF9pbnRlcmNlcHQgPSBudWxsO1xuXG4gIGdldEludGVyY2VwdCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChfaW50ZXJjZXB0ID09IG51bGwpIHtcbiAgICAgIF9pbnRlcmNlcHQgPSBuZXcgUmVxdWVzdEludGVyY2VwdDtcbiAgICB9XG4gICAgcmV0dXJuIF9pbnRlcmNlcHQ7XG4gIH07XG5cbiAgc2hvdWxkSWdub3JlVVJMID0gZnVuY3Rpb24odXJsKSB7XG4gICAgdmFyIHBhdHRlcm4sIF9qLCBfbGVuMSwgX3JlZjI7XG4gICAgX3JlZjIgPSBvcHRpb25zLmFqYXguaWdub3JlVVJMcztcbiAgICBmb3IgKF9qID0gMCwgX2xlbjEgPSBfcmVmMi5sZW5ndGg7IF9qIDwgX2xlbjE7IF9qKyspIHtcbiAgICAgIHBhdHRlcm4gPSBfcmVmMltfal07XG4gICAgICBpZiAodHlwZW9mIHBhdHRlcm4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh1cmwuaW5kZXhPZihwYXR0ZXJuKSAhPT0gLTEpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHBhdHRlcm4udGVzdCh1cmwpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGdldEludGVyY2VwdCgpLm9uKCdyZXF1ZXN0JywgZnVuY3Rpb24oX2FyZykge1xuICAgIHZhciBhZnRlciwgYXJncywgcmVxdWVzdCwgdHlwZSwgdXJsO1xuICAgIHR5cGUgPSBfYXJnLnR5cGUsIHJlcXVlc3QgPSBfYXJnLnJlcXVlc3QsIHVybCA9IF9hcmcudXJsO1xuICAgIGlmIChzaG91bGRJZ25vcmVVUkwodXJsKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIVBhY2UucnVubmluZyAmJiAob3B0aW9ucy5yZXN0YXJ0T25SZXF1ZXN0QWZ0ZXIgIT09IGZhbHNlIHx8IHNob3VsZFRyYWNrKHR5cGUpID09PSAnZm9yY2UnKSkge1xuICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIGFmdGVyID0gb3B0aW9ucy5yZXN0YXJ0T25SZXF1ZXN0QWZ0ZXIgfHwgMDtcbiAgICAgIGlmICh0eXBlb2YgYWZ0ZXIgPT09ICdib29sZWFuJykge1xuICAgICAgICBhZnRlciA9IDA7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHN0aWxsQWN0aXZlLCBfaiwgX2xlbjEsIF9yZWYyLCBfcmVmMywgX3Jlc3VsdHM7XG4gICAgICAgIGlmICh0eXBlID09PSAnc29ja2V0Jykge1xuICAgICAgICAgIHN0aWxsQWN0aXZlID0gcmVxdWVzdC5yZWFkeVN0YXRlIDwgMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGlsbEFjdGl2ZSA9ICgwIDwgKF9yZWYyID0gcmVxdWVzdC5yZWFkeVN0YXRlKSAmJiBfcmVmMiA8IDQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGlsbEFjdGl2ZSkge1xuICAgICAgICAgIFBhY2UucmVzdGFydCgpO1xuICAgICAgICAgIF9yZWYzID0gUGFjZS5zb3VyY2VzO1xuICAgICAgICAgIF9yZXN1bHRzID0gW107XG4gICAgICAgICAgZm9yIChfaiA9IDAsIF9sZW4xID0gX3JlZjMubGVuZ3RoOyBfaiA8IF9sZW4xOyBfaisrKSB7XG4gICAgICAgICAgICBzb3VyY2UgPSBfcmVmM1tfal07XG4gICAgICAgICAgICBpZiAoc291cmNlIGluc3RhbmNlb2YgQWpheE1vbml0b3IpIHtcbiAgICAgICAgICAgICAgc291cmNlLndhdGNoLmFwcGx5KHNvdXJjZSwgYXJncyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgX3Jlc3VsdHMucHVzaCh2b2lkIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gX3Jlc3VsdHM7XG4gICAgICAgIH1cbiAgICAgIH0sIGFmdGVyKTtcbiAgICB9XG4gIH0pO1xuXG4gIEFqYXhNb25pdG9yID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIEFqYXhNb25pdG9yKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIHRoaXMuZWxlbWVudHMgPSBbXTtcbiAgICAgIGdldEludGVyY2VwdCgpLm9uKCdyZXF1ZXN0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy53YXRjaC5hcHBseShfdGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIEFqYXhNb25pdG9yLnByb3RvdHlwZS53YXRjaCA9IGZ1bmN0aW9uKF9hcmcpIHtcbiAgICAgIHZhciByZXF1ZXN0LCB0cmFja2VyLCB0eXBlLCB1cmw7XG4gICAgICB0eXBlID0gX2FyZy50eXBlLCByZXF1ZXN0ID0gX2FyZy5yZXF1ZXN0LCB1cmwgPSBfYXJnLnVybDtcbiAgICAgIGlmIChzaG91bGRJZ25vcmVVUkwodXJsKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodHlwZSA9PT0gJ3NvY2tldCcpIHtcbiAgICAgICAgdHJhY2tlciA9IG5ldyBTb2NrZXRSZXF1ZXN0VHJhY2tlcihyZXF1ZXN0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYWNrZXIgPSBuZXcgWEhSUmVxdWVzdFRyYWNrZXIocmVxdWVzdCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5lbGVtZW50cy5wdXNoKHRyYWNrZXIpO1xuICAgIH07XG5cbiAgICByZXR1cm4gQWpheE1vbml0b3I7XG5cbiAgfSkoKTtcblxuICBYSFJSZXF1ZXN0VHJhY2tlciA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBYSFJSZXF1ZXN0VHJhY2tlcihyZXF1ZXN0KSB7XG4gICAgICB2YXIgZXZlbnQsIHNpemUsIF9qLCBfbGVuMSwgX29ucmVhZHlzdGF0ZWNoYW5nZSwgX3JlZjIsXG4gICAgICAgIF90aGlzID0gdGhpcztcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgICAgaWYgKHdpbmRvdy5Qcm9ncmVzc0V2ZW50ICE9IG51bGwpIHtcbiAgICAgICAgc2l6ZSA9IG51bGw7XG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICBpZiAoZXZ0Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5wcm9ncmVzcyA9IDEwMCAqIGV2dC5sb2FkZWQgLyBldnQudG90YWw7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5wcm9ncmVzcyA9IF90aGlzLnByb2dyZXNzICsgKDEwMCAtIF90aGlzLnByb2dyZXNzKSAvIDI7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIF9yZWYyID0gWydsb2FkJywgJ2Fib3J0JywgJ3RpbWVvdXQnLCAnZXJyb3InXTtcbiAgICAgICAgZm9yIChfaiA9IDAsIF9sZW4xID0gX3JlZjIubGVuZ3RoOyBfaiA8IF9sZW4xOyBfaisrKSB7XG4gICAgICAgICAgZXZlbnQgPSBfcmVmMltfal07XG4gICAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5wcm9ncmVzcyA9IDEwMDtcbiAgICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9vbnJlYWR5c3RhdGVjaGFuZ2UgPSByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZTtcbiAgICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgX3JlZjM7XG4gICAgICAgICAgaWYgKChfcmVmMyA9IHJlcXVlc3QucmVhZHlTdGF0ZSkgPT09IDAgfHwgX3JlZjMgPT09IDQpIHtcbiAgICAgICAgICAgIF90aGlzLnByb2dyZXNzID0gMTAwO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09PSAzKSB7XG4gICAgICAgICAgICBfdGhpcy5wcm9ncmVzcyA9IDUwO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHlwZW9mIF9vbnJlYWR5c3RhdGVjaGFuZ2UgPT09IFwiZnVuY3Rpb25cIiA/IF9vbnJlYWR5c3RhdGVjaGFuZ2UuYXBwbHkobnVsbCwgYXJndW1lbnRzKSA6IHZvaWQgMDtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gWEhSUmVxdWVzdFRyYWNrZXI7XG5cbiAgfSkoKTtcblxuICBTb2NrZXRSZXF1ZXN0VHJhY2tlciA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBTb2NrZXRSZXF1ZXN0VHJhY2tlcihyZXF1ZXN0KSB7XG4gICAgICB2YXIgZXZlbnQsIF9qLCBfbGVuMSwgX3JlZjIsXG4gICAgICAgIF90aGlzID0gdGhpcztcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgICAgX3JlZjIgPSBbJ2Vycm9yJywgJ29wZW4nXTtcbiAgICAgIGZvciAoX2ogPSAwLCBfbGVuMSA9IF9yZWYyLmxlbmd0aDsgX2ogPCBfbGVuMTsgX2orKykge1xuICAgICAgICBldmVudCA9IF9yZWYyW19qXTtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMucHJvZ3Jlc3MgPSAxMDA7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gU29ja2V0UmVxdWVzdFRyYWNrZXI7XG5cbiAgfSkoKTtcblxuICBFbGVtZW50TW9uaXRvciA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBFbGVtZW50TW9uaXRvcihvcHRpb25zKSB7XG4gICAgICB2YXIgc2VsZWN0b3IsIF9qLCBfbGVuMSwgX3JlZjI7XG4gICAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZWxlbWVudHMgPSBbXTtcbiAgICAgIGlmIChvcHRpb25zLnNlbGVjdG9ycyA9PSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnMuc2VsZWN0b3JzID0gW107XG4gICAgICB9XG4gICAgICBfcmVmMiA9IG9wdGlvbnMuc2VsZWN0b3JzO1xuICAgICAgZm9yIChfaiA9IDAsIF9sZW4xID0gX3JlZjIubGVuZ3RoOyBfaiA8IF9sZW4xOyBfaisrKSB7XG4gICAgICAgIHNlbGVjdG9yID0gX3JlZjJbX2pdO1xuICAgICAgICB0aGlzLmVsZW1lbnRzLnB1c2gobmV3IEVsZW1lbnRUcmFja2VyKHNlbGVjdG9yKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIEVsZW1lbnRNb25pdG9yO1xuXG4gIH0pKCk7XG5cbiAgRWxlbWVudFRyYWNrZXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gRWxlbWVudFRyYWNrZXIoc2VsZWN0b3IpIHtcbiAgICAgIHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvcjtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgICAgdGhpcy5jaGVjaygpO1xuICAgIH1cblxuICAgIEVsZW1lbnRUcmFja2VyLnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvbmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KChmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuY2hlY2soKTtcbiAgICAgICAgfSksIG9wdGlvbnMuZWxlbWVudHMuY2hlY2tJbnRlcnZhbCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIEVsZW1lbnRUcmFja2VyLnByb3RvdHlwZS5kb25lID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9ncmVzcyA9IDEwMDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEVsZW1lbnRUcmFja2VyO1xuXG4gIH0pKCk7XG5cbiAgRG9jdW1lbnRNb25pdG9yID0gKGZ1bmN0aW9uKCkge1xuICAgIERvY3VtZW50TW9uaXRvci5wcm90b3R5cGUuc3RhdGVzID0ge1xuICAgICAgbG9hZGluZzogMCxcbiAgICAgIGludGVyYWN0aXZlOiA1MCxcbiAgICAgIGNvbXBsZXRlOiAxMDBcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gRG9jdW1lbnRNb25pdG9yKCkge1xuICAgICAgdmFyIF9vbnJlYWR5c3RhdGVjaGFuZ2UsIF9yZWYyLFxuICAgICAgICBfdGhpcyA9IHRoaXM7XG4gICAgICB0aGlzLnByb2dyZXNzID0gKF9yZWYyID0gdGhpcy5zdGF0ZXNbZG9jdW1lbnQucmVhZHlTdGF0ZV0pICE9IG51bGwgPyBfcmVmMiA6IDEwMDtcbiAgICAgIF9vbnJlYWR5c3RhdGVjaGFuZ2UgPSBkb2N1bWVudC5vbnJlYWR5c3RhdGVjaGFuZ2U7XG4gICAgICBkb2N1bWVudC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKF90aGlzLnN0YXRlc1tkb2N1bWVudC5yZWFkeVN0YXRlXSAhPSBudWxsKSB7XG4gICAgICAgICAgX3RoaXMucHJvZ3Jlc3MgPSBfdGhpcy5zdGF0ZXNbZG9jdW1lbnQucmVhZHlTdGF0ZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHR5cGVvZiBfb25yZWFkeXN0YXRlY2hhbmdlID09PSBcImZ1bmN0aW9uXCIgPyBfb25yZWFkeXN0YXRlY2hhbmdlLmFwcGx5KG51bGwsIGFyZ3VtZW50cykgOiB2b2lkIDA7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBEb2N1bWVudE1vbml0b3I7XG5cbiAgfSkoKTtcblxuICBFdmVudExhZ01vbml0b3IgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gRXZlbnRMYWdNb25pdG9yKCkge1xuICAgICAgdmFyIGF2ZywgaW50ZXJ2YWwsIGxhc3QsIHBvaW50cywgc2FtcGxlcyxcbiAgICAgICAgX3RoaXMgPSB0aGlzO1xuICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgICBhdmcgPSAwO1xuICAgICAgc2FtcGxlcyA9IFtdO1xuICAgICAgcG9pbnRzID0gMDtcbiAgICAgIGxhc3QgPSBub3coKTtcbiAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkaWZmO1xuICAgICAgICBkaWZmID0gbm93KCkgLSBsYXN0IC0gNTA7XG4gICAgICAgIGxhc3QgPSBub3coKTtcbiAgICAgICAgc2FtcGxlcy5wdXNoKGRpZmYpO1xuICAgICAgICBpZiAoc2FtcGxlcy5sZW5ndGggPiBvcHRpb25zLmV2ZW50TGFnLnNhbXBsZUNvdW50KSB7XG4gICAgICAgICAgc2FtcGxlcy5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgICAgIGF2ZyA9IGF2Z0FtcGxpdHVkZShzYW1wbGVzKTtcbiAgICAgICAgaWYgKCsrcG9pbnRzID49IG9wdGlvbnMuZXZlbnRMYWcubWluU2FtcGxlcyAmJiBhdmcgPCBvcHRpb25zLmV2ZW50TGFnLmxhZ1RocmVzaG9sZCkge1xuICAgICAgICAgIF90aGlzLnByb2dyZXNzID0gMTAwO1xuICAgICAgICAgIHJldHVybiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMucHJvZ3Jlc3MgPSAxMDAgKiAoMyAvIChhdmcgKyAzKSk7XG4gICAgICAgIH1cbiAgICAgIH0sIDUwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gRXZlbnRMYWdNb25pdG9yO1xuXG4gIH0pKCk7XG5cbiAgU2NhbGVyID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIFNjYWxlcihzb3VyY2UpIHtcbiAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgdGhpcy5sYXN0ID0gdGhpcy5zaW5jZUxhc3RVcGRhdGUgPSAwO1xuICAgICAgdGhpcy5yYXRlID0gb3B0aW9ucy5pbml0aWFsUmF0ZTtcbiAgICAgIHRoaXMuY2F0Y2h1cCA9IDA7XG4gICAgICB0aGlzLnByb2dyZXNzID0gdGhpcy5sYXN0UHJvZ3Jlc3MgPSAwO1xuICAgICAgaWYgKHRoaXMuc291cmNlICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IHJlc3VsdCh0aGlzLnNvdXJjZSwgJ3Byb2dyZXNzJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgU2NhbGVyLnByb3RvdHlwZS50aWNrID0gZnVuY3Rpb24oZnJhbWVUaW1lLCB2YWwpIHtcbiAgICAgIHZhciBzY2FsaW5nO1xuICAgICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICAgIHZhbCA9IHJlc3VsdCh0aGlzLnNvdXJjZSwgJ3Byb2dyZXNzJyk7XG4gICAgICB9XG4gICAgICBpZiAodmFsID49IDEwMCkge1xuICAgICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHZhbCA9PT0gdGhpcy5sYXN0KSB7XG4gICAgICAgIHRoaXMuc2luY2VMYXN0VXBkYXRlICs9IGZyYW1lVGltZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLnNpbmNlTGFzdFVwZGF0ZSkge1xuICAgICAgICAgIHRoaXMucmF0ZSA9ICh2YWwgLSB0aGlzLmxhc3QpIC8gdGhpcy5zaW5jZUxhc3RVcGRhdGU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYXRjaHVwID0gKHZhbCAtIHRoaXMucHJvZ3Jlc3MpIC8gb3B0aW9ucy5jYXRjaHVwVGltZTtcbiAgICAgICAgdGhpcy5zaW5jZUxhc3RVcGRhdGUgPSAwO1xuICAgICAgICB0aGlzLmxhc3QgPSB2YWw7XG4gICAgICB9XG4gICAgICBpZiAodmFsID4gdGhpcy5wcm9ncmVzcykge1xuICAgICAgICB0aGlzLnByb2dyZXNzICs9IHRoaXMuY2F0Y2h1cCAqIGZyYW1lVGltZTtcbiAgICAgIH1cbiAgICAgIHNjYWxpbmcgPSAxIC0gTWF0aC5wb3codGhpcy5wcm9ncmVzcyAvIDEwMCwgb3B0aW9ucy5lYXNlRmFjdG9yKTtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgKz0gc2NhbGluZyAqIHRoaXMucmF0ZSAqIGZyYW1lVGltZTtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSBNYXRoLm1pbih0aGlzLmxhc3RQcm9ncmVzcyArIG9wdGlvbnMubWF4UHJvZ3Jlc3NQZXJGcmFtZSwgdGhpcy5wcm9ncmVzcyk7XG4gICAgICB0aGlzLnByb2dyZXNzID0gTWF0aC5tYXgoMCwgdGhpcy5wcm9ncmVzcyk7XG4gICAgICB0aGlzLnByb2dyZXNzID0gTWF0aC5taW4oMTAwLCB0aGlzLnByb2dyZXNzKTtcbiAgICAgIHRoaXMubGFzdFByb2dyZXNzID0gdGhpcy5wcm9ncmVzcztcbiAgICAgIHJldHVybiB0aGlzLnByb2dyZXNzO1xuICAgIH07XG5cbiAgICByZXR1cm4gU2NhbGVyO1xuXG4gIH0pKCk7XG5cbiAgc291cmNlcyA9IG51bGw7XG5cbiAgc2NhbGVycyA9IG51bGw7XG5cbiAgYmFyID0gbnVsbDtcblxuICB1bmlTY2FsZXIgPSBudWxsO1xuXG4gIGFuaW1hdGlvbiA9IG51bGw7XG5cbiAgY2FuY2VsQW5pbWF0aW9uID0gbnVsbDtcblxuICBQYWNlLnJ1bm5pbmcgPSBmYWxzZTtcblxuICBoYW5kbGVQdXNoU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAob3B0aW9ucy5yZXN0YXJ0T25QdXNoU3RhdGUpIHtcbiAgICAgIHJldHVybiBQYWNlLnJlc3RhcnQoKTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSAhPSBudWxsKSB7XG4gICAgX3B1c2hTdGF0ZSA9IHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZTtcbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGhhbmRsZVB1c2hTdGF0ZSgpO1xuICAgICAgcmV0dXJuIF9wdXNoU3RhdGUuYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxuXG4gIGlmICh3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUgIT0gbnVsbCkge1xuICAgIF9yZXBsYWNlU3RhdGUgPSB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGU7XG4gICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICBoYW5kbGVQdXNoU3RhdGUoKTtcbiAgICAgIHJldHVybiBfcmVwbGFjZVN0YXRlLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cblxuICBTT1VSQ0VfS0VZUyA9IHtcbiAgICBhamF4OiBBamF4TW9uaXRvcixcbiAgICBlbGVtZW50czogRWxlbWVudE1vbml0b3IsXG4gICAgZG9jdW1lbnQ6IERvY3VtZW50TW9uaXRvcixcbiAgICBldmVudExhZzogRXZlbnRMYWdNb25pdG9yXG4gIH07XG5cbiAgKGluaXQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdHlwZSwgX2osIF9rLCBfbGVuMSwgX2xlbjIsIF9yZWYyLCBfcmVmMywgX3JlZjQ7XG4gICAgUGFjZS5zb3VyY2VzID0gc291cmNlcyA9IFtdO1xuICAgIF9yZWYyID0gWydhamF4JywgJ2VsZW1lbnRzJywgJ2RvY3VtZW50JywgJ2V2ZW50TGFnJ107XG4gICAgZm9yIChfaiA9IDAsIF9sZW4xID0gX3JlZjIubGVuZ3RoOyBfaiA8IF9sZW4xOyBfaisrKSB7XG4gICAgICB0eXBlID0gX3JlZjJbX2pdO1xuICAgICAgaWYgKG9wdGlvbnNbdHlwZV0gIT09IGZhbHNlKSB7XG4gICAgICAgIHNvdXJjZXMucHVzaChuZXcgU09VUkNFX0tFWVNbdHlwZV0ob3B0aW9uc1t0eXBlXSkpO1xuICAgICAgfVxuICAgIH1cbiAgICBfcmVmNCA9IChfcmVmMyA9IG9wdGlvbnMuZXh0cmFTb3VyY2VzKSAhPSBudWxsID8gX3JlZjMgOiBbXTtcbiAgICBmb3IgKF9rID0gMCwgX2xlbjIgPSBfcmVmNC5sZW5ndGg7IF9rIDwgX2xlbjI7IF9rKyspIHtcbiAgICAgIHNvdXJjZSA9IF9yZWY0W19rXTtcbiAgICAgIHNvdXJjZXMucHVzaChuZXcgc291cmNlKG9wdGlvbnMpKTtcbiAgICB9XG4gICAgUGFjZS5iYXIgPSBiYXIgPSBuZXcgQmFyO1xuICAgIHNjYWxlcnMgPSBbXTtcbiAgICByZXR1cm4gdW5pU2NhbGVyID0gbmV3IFNjYWxlcjtcbiAgfSkoKTtcblxuICBQYWNlLnN0b3AgPSBmdW5jdGlvbigpIHtcbiAgICBQYWNlLnRyaWdnZXIoJ3N0b3AnKTtcbiAgICBQYWNlLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICBiYXIuZGVzdHJveSgpO1xuICAgIGNhbmNlbEFuaW1hdGlvbiA9IHRydWU7XG4gICAgaWYgKGFuaW1hdGlvbiAhPSBudWxsKSB7XG4gICAgICBpZiAodHlwZW9mIGNhbmNlbEFuaW1hdGlvbkZyYW1lID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICAgIH1cbiAgICAgIGFuaW1hdGlvbiA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBpbml0KCk7XG4gIH07XG5cbiAgUGFjZS5yZXN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgUGFjZS50cmlnZ2VyKCdyZXN0YXJ0Jyk7XG4gICAgUGFjZS5zdG9wKCk7XG4gICAgcmV0dXJuIFBhY2Uuc3RhcnQoKTtcbiAgfTtcblxuICBQYWNlLmdvID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0YXJ0O1xuICAgIFBhY2UucnVubmluZyA9IHRydWU7XG4gICAgYmFyLnJlbmRlcigpO1xuICAgIHN0YXJ0ID0gbm93KCk7XG4gICAgY2FuY2VsQW5pbWF0aW9uID0gZmFsc2U7XG4gICAgcmV0dXJuIGFuaW1hdGlvbiA9IHJ1bkFuaW1hdGlvbihmdW5jdGlvbihmcmFtZVRpbWUsIGVucXVldWVOZXh0RnJhbWUpIHtcbiAgICAgIHZhciBhdmcsIGNvdW50LCBkb25lLCBlbGVtZW50LCBlbGVtZW50cywgaSwgaiwgcmVtYWluaW5nLCBzY2FsZXIsIHNjYWxlckxpc3QsIHN1bSwgX2osIF9rLCBfbGVuMSwgX2xlbjIsIF9yZWYyO1xuICAgICAgcmVtYWluaW5nID0gMTAwIC0gYmFyLnByb2dyZXNzO1xuICAgICAgY291bnQgPSBzdW0gPSAwO1xuICAgICAgZG9uZSA9IHRydWU7XG4gICAgICBmb3IgKGkgPSBfaiA9IDAsIF9sZW4xID0gc291cmNlcy5sZW5ndGg7IF9qIDwgX2xlbjE7IGkgPSArK19qKSB7XG4gICAgICAgIHNvdXJjZSA9IHNvdXJjZXNbaV07XG4gICAgICAgIHNjYWxlckxpc3QgPSBzY2FsZXJzW2ldICE9IG51bGwgPyBzY2FsZXJzW2ldIDogc2NhbGVyc1tpXSA9IFtdO1xuICAgICAgICBlbGVtZW50cyA9IChfcmVmMiA9IHNvdXJjZS5lbGVtZW50cykgIT0gbnVsbCA/IF9yZWYyIDogW3NvdXJjZV07XG4gICAgICAgIGZvciAoaiA9IF9rID0gMCwgX2xlbjIgPSBlbGVtZW50cy5sZW5ndGg7IF9rIDwgX2xlbjI7IGogPSArK19rKSB7XG4gICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRzW2pdO1xuICAgICAgICAgIHNjYWxlciA9IHNjYWxlckxpc3Rbal0gIT0gbnVsbCA/IHNjYWxlckxpc3Rbal0gOiBzY2FsZXJMaXN0W2pdID0gbmV3IFNjYWxlcihlbGVtZW50KTtcbiAgICAgICAgICBkb25lICY9IHNjYWxlci5kb25lO1xuICAgICAgICAgIGlmIChzY2FsZXIuZG9uZSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgc3VtICs9IHNjYWxlci50aWNrKGZyYW1lVGltZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGF2ZyA9IHN1bSAvIGNvdW50O1xuICAgICAgYmFyLnVwZGF0ZSh1bmlTY2FsZXIudGljayhmcmFtZVRpbWUsIGF2ZykpO1xuICAgICAgaWYgKGJhci5kb25lKCkgfHwgZG9uZSB8fCBjYW5jZWxBbmltYXRpb24pIHtcbiAgICAgICAgYmFyLnVwZGF0ZSgxMDApO1xuICAgICAgICBQYWNlLnRyaWdnZXIoJ2RvbmUnKTtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgYmFyLmZpbmlzaCgpO1xuICAgICAgICAgIFBhY2UucnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBQYWNlLnRyaWdnZXIoJ2hpZGUnKTtcbiAgICAgICAgfSwgTWF0aC5tYXgob3B0aW9ucy5naG9zdFRpbWUsIE1hdGgubWF4KG9wdGlvbnMubWluVGltZSAtIChub3coKSAtIHN0YXJ0KSwgMCkpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBlbnF1ZXVlTmV4dEZyYW1lKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgUGFjZS5zdGFydCA9IGZ1bmN0aW9uKF9vcHRpb25zKSB7XG4gICAgZXh0ZW5kKG9wdGlvbnMsIF9vcHRpb25zKTtcbiAgICBQYWNlLnJ1bm5pbmcgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICBiYXIucmVuZGVyKCk7XG4gICAgfSBjYXRjaCAoX2Vycm9yKSB7XG4gICAgICBOb1RhcmdldEVycm9yID0gX2Vycm9yO1xuICAgIH1cbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWNlJykpIHtcbiAgICAgIHJldHVybiBzZXRUaW1lb3V0KFBhY2Uuc3RhcnQsIDUwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUGFjZS50cmlnZ2VyKCdzdGFydCcpO1xuICAgICAgcmV0dXJuIFBhY2UuZ28oKTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbJ3BhY2UnXSwgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gUGFjZTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IFBhY2U7XG4gIH0gZWxzZSB7XG4gICAgaWYgKG9wdGlvbnMuc3RhcnRPblBhZ2VMb2FkKSB7XG4gICAgICBQYWNlLnN0YXJ0KCk7XG4gICAgfVxuICB9XG5cbn0pLmNhbGwodGhpcyk7XG4iLCIvKiFcbiAqIHBlcmZlY3Qtc2Nyb2xsYmFyIHYxLjUuMFxuICogQ29weXJpZ2h0IDIwMjAgSHl1bmplIEp1biwgTURCb290c3RyYXAgYW5kIENvbnRyaWJ1dG9yc1xuICogTGljZW5zZWQgdW5kZXIgTUlUXG4gKi9cblxuZnVuY3Rpb24gZ2V0KGVsZW1lbnQpIHtcbiAgcmV0dXJuIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIHNldChlbGVtZW50LCBvYmopIHtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIHZhciB2YWwgPSBvYmpba2V5XTtcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHZhbCA9IHZhbCArIFwicHhcIjtcbiAgICB9XG4gICAgZWxlbWVudC5zdHlsZVtrZXldID0gdmFsO1xuICB9XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBkaXYoY2xhc3NOYW1lKSB7XG4gIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgcmV0dXJuIGRpdjtcbn1cblxudmFyIGVsTWF0Y2hlcyA9XG4gIHR5cGVvZiBFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAoRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyB8fFxuICAgIEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fFxuICAgIEVsZW1lbnQucHJvdG90eXBlLm1vek1hdGNoZXNTZWxlY3RvciB8fFxuICAgIEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yKTtcblxuZnVuY3Rpb24gbWF0Y2hlcyhlbGVtZW50LCBxdWVyeSkge1xuICBpZiAoIWVsTWF0Y2hlcykge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gZWxlbWVudCBtYXRjaGluZyBtZXRob2Qgc3VwcG9ydGVkJyk7XG4gIH1cblxuICByZXR1cm4gZWxNYXRjaGVzLmNhbGwoZWxlbWVudCwgcXVlcnkpO1xufVxuXG5mdW5jdGlvbiByZW1vdmUoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudC5yZW1vdmUpIHtcbiAgICBlbGVtZW50LnJlbW92ZSgpO1xuICB9IGVsc2Uge1xuICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcXVlcnlDaGlsZHJlbihlbGVtZW50LCBzZWxlY3Rvcikge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKGVsZW1lbnQuY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gbWF0Y2hlcyhjaGlsZCwgc2VsZWN0b3IpOyB9XG4gICk7XG59XG5cbnZhciBjbHMgPSB7XG4gIG1haW46ICdwcycsXG4gIHJ0bDogJ3BzX19ydGwnLFxuICBlbGVtZW50OiB7XG4gICAgdGh1bWI6IGZ1bmN0aW9uICh4KSB7IHJldHVybiAoXCJwc19fdGh1bWItXCIgKyB4KTsgfSxcbiAgICByYWlsOiBmdW5jdGlvbiAoeCkgeyByZXR1cm4gKFwicHNfX3JhaWwtXCIgKyB4KTsgfSxcbiAgICBjb25zdW1pbmc6ICdwc19fY2hpbGQtLWNvbnN1bWUnLFxuICB9LFxuICBzdGF0ZToge1xuICAgIGZvY3VzOiAncHMtLWZvY3VzJyxcbiAgICBjbGlja2luZzogJ3BzLS1jbGlja2luZycsXG4gICAgYWN0aXZlOiBmdW5jdGlvbiAoeCkgeyByZXR1cm4gKFwicHMtLWFjdGl2ZS1cIiArIHgpOyB9LFxuICAgIHNjcm9sbGluZzogZnVuY3Rpb24gKHgpIHsgcmV0dXJuIChcInBzLS1zY3JvbGxpbmctXCIgKyB4KTsgfSxcbiAgfSxcbn07XG5cbi8qXG4gKiBIZWxwZXIgbWV0aG9kc1xuICovXG52YXIgc2Nyb2xsaW5nQ2xhc3NUaW1lb3V0ID0geyB4OiBudWxsLCB5OiBudWxsIH07XG5cbmZ1bmN0aW9uIGFkZFNjcm9sbGluZ0NsYXNzKGksIHgpIHtcbiAgdmFyIGNsYXNzTGlzdCA9IGkuZWxlbWVudC5jbGFzc0xpc3Q7XG4gIHZhciBjbGFzc05hbWUgPSBjbHMuc3RhdGUuc2Nyb2xsaW5nKHgpO1xuXG4gIGlmIChjbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkge1xuICAgIGNsZWFyVGltZW91dChzY3JvbGxpbmdDbGFzc1RpbWVvdXRbeF0pO1xuICB9IGVsc2Uge1xuICAgIGNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVTY3JvbGxpbmdDbGFzcyhpLCB4KSB7XG4gIHNjcm9sbGluZ0NsYXNzVGltZW91dFt4XSA9IHNldFRpbWVvdXQoXG4gICAgZnVuY3Rpb24gKCkgeyByZXR1cm4gaS5pc0FsaXZlICYmIGkuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNscy5zdGF0ZS5zY3JvbGxpbmcoeCkpOyB9LFxuICAgIGkuc2V0dGluZ3Muc2Nyb2xsaW5nVGhyZXNob2xkXG4gICk7XG59XG5cbmZ1bmN0aW9uIHNldFNjcm9sbGluZ0NsYXNzSW5zdGFudGx5KGksIHgpIHtcbiAgYWRkU2Nyb2xsaW5nQ2xhc3MoaSwgeCk7XG4gIHJlbW92ZVNjcm9sbGluZ0NsYXNzKGksIHgpO1xufVxuXG52YXIgRXZlbnRFbGVtZW50ID0gZnVuY3Rpb24gRXZlbnRFbGVtZW50KGVsZW1lbnQpIHtcbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgdGhpcy5oYW5kbGVycyA9IHt9O1xufTtcblxudmFyIHByb3RvdHlwZUFjY2Vzc29ycyA9IHsgaXNFbXB0eTogeyBjb25maWd1cmFibGU6IHRydWUgfSB9O1xuXG5FdmVudEVsZW1lbnQucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiBiaW5kIChldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgaWYgKHR5cGVvZiB0aGlzLmhhbmRsZXJzW2V2ZW50TmFtZV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tldmVudE5hbWVdID0gW107XG4gIH1cbiAgdGhpcy5oYW5kbGVyc1tldmVudE5hbWVdLnB1c2goaGFuZGxlcik7XG4gIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlciwgZmFsc2UpO1xufTtcblxuRXZlbnRFbGVtZW50LnByb3RvdHlwZS51bmJpbmQgPSBmdW5jdGlvbiB1bmJpbmQgKGV2ZW50TmFtZSwgdGFyZ2V0KSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgdGhpcy5oYW5kbGVyc1tldmVudE5hbWVdID0gdGhpcy5oYW5kbGVyc1tldmVudE5hbWVdLmZpbHRlcihmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgIGlmICh0YXJnZXQgJiYgaGFuZGxlciAhPT0gdGFyZ2V0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcyQxLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIGZhbHNlKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xufTtcblxuRXZlbnRFbGVtZW50LnByb3RvdHlwZS51bmJpbmRBbGwgPSBmdW5jdGlvbiB1bmJpbmRBbGwgKCkge1xuICBmb3IgKHZhciBuYW1lIGluIHRoaXMuaGFuZGxlcnMpIHtcbiAgICB0aGlzLnVuYmluZChuYW1lKTtcbiAgfVxufTtcblxucHJvdG90eXBlQWNjZXNzb3JzLmlzRW1wdHkuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmhhbmRsZXJzKS5ldmVyeShcbiAgICBmdW5jdGlvbiAoa2V5KSB7IHJldHVybiB0aGlzJDEuaGFuZGxlcnNba2V5XS5sZW5ndGggPT09IDA7IH1cbiAgKTtcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBFdmVudEVsZW1lbnQucHJvdG90eXBlLCBwcm90b3R5cGVBY2Nlc3NvcnMgKTtcblxudmFyIEV2ZW50TWFuYWdlciA9IGZ1bmN0aW9uIEV2ZW50TWFuYWdlcigpIHtcbiAgdGhpcy5ldmVudEVsZW1lbnRzID0gW107XG59O1xuXG5FdmVudE1hbmFnZXIucHJvdG90eXBlLmV2ZW50RWxlbWVudCA9IGZ1bmN0aW9uIGV2ZW50RWxlbWVudCAoZWxlbWVudCkge1xuICB2YXIgZWUgPSB0aGlzLmV2ZW50RWxlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChlZSkgeyByZXR1cm4gZWUuZWxlbWVudCA9PT0gZWxlbWVudDsgfSlbMF07XG4gIGlmICghZWUpIHtcbiAgICBlZSA9IG5ldyBFdmVudEVsZW1lbnQoZWxlbWVudCk7XG4gICAgdGhpcy5ldmVudEVsZW1lbnRzLnB1c2goZWUpO1xuICB9XG4gIHJldHVybiBlZTtcbn07XG5cbkV2ZW50TWFuYWdlci5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIGJpbmQgKGVsZW1lbnQsIGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICB0aGlzLmV2ZW50RWxlbWVudChlbGVtZW50KS5iaW5kKGV2ZW50TmFtZSwgaGFuZGxlcik7XG59O1xuXG5FdmVudE1hbmFnZXIucHJvdG90eXBlLnVuYmluZCA9IGZ1bmN0aW9uIHVuYmluZCAoZWxlbWVudCwgZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gIHZhciBlZSA9IHRoaXMuZXZlbnRFbGVtZW50KGVsZW1lbnQpO1xuICBlZS51bmJpbmQoZXZlbnROYW1lLCBoYW5kbGVyKTtcblxuICBpZiAoZWUuaXNFbXB0eSkge1xuICAgIC8vIHJlbW92ZVxuICAgIHRoaXMuZXZlbnRFbGVtZW50cy5zcGxpY2UodGhpcy5ldmVudEVsZW1lbnRzLmluZGV4T2YoZWUpLCAxKTtcbiAgfVxufTtcblxuRXZlbnRNYW5hZ2VyLnByb3RvdHlwZS51bmJpbmRBbGwgPSBmdW5jdGlvbiB1bmJpbmRBbGwgKCkge1xuICB0aGlzLmV2ZW50RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS51bmJpbmRBbGwoKTsgfSk7XG4gIHRoaXMuZXZlbnRFbGVtZW50cyA9IFtdO1xufTtcblxuRXZlbnRNYW5hZ2VyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSAoZWxlbWVudCwgZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gIHZhciBlZSA9IHRoaXMuZXZlbnRFbGVtZW50KGVsZW1lbnQpO1xuICB2YXIgb25jZUhhbmRsZXIgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgZWUudW5iaW5kKGV2ZW50TmFtZSwgb25jZUhhbmRsZXIpO1xuICAgIGhhbmRsZXIoZXZ0KTtcbiAgfTtcbiAgZWUuYmluZChldmVudE5hbWUsIG9uY2VIYW5kbGVyKTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50KG5hbWUpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbmV3IEN1c3RvbUV2ZW50KG5hbWUpO1xuICB9IGVsc2Uge1xuICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICBldnQuaW5pdEN1c3RvbUV2ZW50KG5hbWUsIGZhbHNlLCBmYWxzZSwgdW5kZWZpbmVkKTtcbiAgICByZXR1cm4gZXZ0O1xuICB9XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NTY3JvbGxEaWZmKFxuICBpLFxuICBheGlzLFxuICBkaWZmLFxuICB1c2VTY3JvbGxpbmdDbGFzcyxcbiAgZm9yY2VGaXJlUmVhY2hFdmVudFxuKSB7XG4gIGlmICggdXNlU2Nyb2xsaW5nQ2xhc3MgPT09IHZvaWQgMCApIHVzZVNjcm9sbGluZ0NsYXNzID0gdHJ1ZTtcbiAgaWYgKCBmb3JjZUZpcmVSZWFjaEV2ZW50ID09PSB2b2lkIDAgKSBmb3JjZUZpcmVSZWFjaEV2ZW50ID0gZmFsc2U7XG5cbiAgdmFyIGZpZWxkcztcbiAgaWYgKGF4aXMgPT09ICd0b3AnKSB7XG4gICAgZmllbGRzID0gW1xuICAgICAgJ2NvbnRlbnRIZWlnaHQnLFxuICAgICAgJ2NvbnRhaW5lckhlaWdodCcsXG4gICAgICAnc2Nyb2xsVG9wJyxcbiAgICAgICd5JyxcbiAgICAgICd1cCcsXG4gICAgICAnZG93bicgXTtcbiAgfSBlbHNlIGlmIChheGlzID09PSAnbGVmdCcpIHtcbiAgICBmaWVsZHMgPSBbXG4gICAgICAnY29udGVudFdpZHRoJyxcbiAgICAgICdjb250YWluZXJXaWR0aCcsXG4gICAgICAnc2Nyb2xsTGVmdCcsXG4gICAgICAneCcsXG4gICAgICAnbGVmdCcsXG4gICAgICAncmlnaHQnIF07XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdBIHByb3BlciBheGlzIHNob3VsZCBiZSBwcm92aWRlZCcpO1xuICB9XG5cbiAgcHJvY2Vzc1Njcm9sbERpZmYkMShpLCBkaWZmLCBmaWVsZHMsIHVzZVNjcm9sbGluZ0NsYXNzLCBmb3JjZUZpcmVSZWFjaEV2ZW50KTtcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc1Njcm9sbERpZmYkMShcbiAgaSxcbiAgZGlmZixcbiAgcmVmLFxuICB1c2VTY3JvbGxpbmdDbGFzcyxcbiAgZm9yY2VGaXJlUmVhY2hFdmVudFxuKSB7XG4gIHZhciBjb250ZW50SGVpZ2h0ID0gcmVmWzBdO1xuICB2YXIgY29udGFpbmVySGVpZ2h0ID0gcmVmWzFdO1xuICB2YXIgc2Nyb2xsVG9wID0gcmVmWzJdO1xuICB2YXIgeSA9IHJlZlszXTtcbiAgdmFyIHVwID0gcmVmWzRdO1xuICB2YXIgZG93biA9IHJlZls1XTtcbiAgaWYgKCB1c2VTY3JvbGxpbmdDbGFzcyA9PT0gdm9pZCAwICkgdXNlU2Nyb2xsaW5nQ2xhc3MgPSB0cnVlO1xuICBpZiAoIGZvcmNlRmlyZVJlYWNoRXZlbnQgPT09IHZvaWQgMCApIGZvcmNlRmlyZVJlYWNoRXZlbnQgPSBmYWxzZTtcblxuICB2YXIgZWxlbWVudCA9IGkuZWxlbWVudDtcblxuICAvLyByZXNldCByZWFjaFxuICBpLnJlYWNoW3ldID0gbnVsbDtcblxuICAvLyAxIGZvciBzdWJwaXhlbCByb3VuZGluZ1xuICBpZiAoZWxlbWVudFtzY3JvbGxUb3BdIDwgMSkge1xuICAgIGkucmVhY2hbeV0gPSAnc3RhcnQnO1xuICB9XG5cbiAgLy8gMSBmb3Igc3VicGl4ZWwgcm91bmRpbmdcbiAgaWYgKGVsZW1lbnRbc2Nyb2xsVG9wXSA+IGlbY29udGVudEhlaWdodF0gLSBpW2NvbnRhaW5lckhlaWdodF0gLSAxKSB7XG4gICAgaS5yZWFjaFt5XSA9ICdlbmQnO1xuICB9XG5cbiAgaWYgKGRpZmYpIHtcbiAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlRXZlbnQoKFwicHMtc2Nyb2xsLVwiICsgeSkpKTtcblxuICAgIGlmIChkaWZmIDwgMCkge1xuICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGNyZWF0ZUV2ZW50KChcInBzLXNjcm9sbC1cIiArIHVwKSkpO1xuICAgIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChjcmVhdGVFdmVudCgoXCJwcy1zY3JvbGwtXCIgKyBkb3duKSkpO1xuICAgIH1cblxuICAgIGlmICh1c2VTY3JvbGxpbmdDbGFzcykge1xuICAgICAgc2V0U2Nyb2xsaW5nQ2xhc3NJbnN0YW50bHkoaSwgeSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGkucmVhY2hbeV0gJiYgKGRpZmYgfHwgZm9yY2VGaXJlUmVhY2hFdmVudCkpIHtcbiAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlRXZlbnQoKFwicHMtXCIgKyB5ICsgXCItcmVhY2gtXCIgKyAoaS5yZWFjaFt5XSkpKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9JbnQoeCkge1xuICByZXR1cm4gcGFyc2VJbnQoeCwgMTApIHx8IDA7XG59XG5cbmZ1bmN0aW9uIGlzRWRpdGFibGUoZWwpIHtcbiAgcmV0dXJuIChcbiAgICBtYXRjaGVzKGVsLCAnaW5wdXQsW2NvbnRlbnRlZGl0YWJsZV0nKSB8fFxuICAgIG1hdGNoZXMoZWwsICdzZWxlY3QsW2NvbnRlbnRlZGl0YWJsZV0nKSB8fFxuICAgIG1hdGNoZXMoZWwsICd0ZXh0YXJlYSxbY29udGVudGVkaXRhYmxlXScpIHx8XG4gICAgbWF0Y2hlcyhlbCwgJ2J1dHRvbixbY29udGVudGVkaXRhYmxlXScpXG4gICk7XG59XG5cbmZ1bmN0aW9uIG91dGVyV2lkdGgoZWxlbWVudCkge1xuICB2YXIgc3R5bGVzID0gZ2V0KGVsZW1lbnQpO1xuICByZXR1cm4gKFxuICAgIHRvSW50KHN0eWxlcy53aWR0aCkgK1xuICAgIHRvSW50KHN0eWxlcy5wYWRkaW5nTGVmdCkgK1xuICAgIHRvSW50KHN0eWxlcy5wYWRkaW5nUmlnaHQpICtcbiAgICB0b0ludChzdHlsZXMuYm9yZGVyTGVmdFdpZHRoKSArXG4gICAgdG9JbnQoc3R5bGVzLmJvcmRlclJpZ2h0V2lkdGgpXG4gICk7XG59XG5cbnZhciBlbnYgPSB7XG4gIGlzV2ViS2l0OlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAnV2Via2l0QXBwZWFyYW5jZScgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLFxuICBzdXBwb3J0c1RvdWNoOlxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fFxuICAgICAgKCdtYXhUb3VjaFBvaW50cycgaW4gd2luZG93Lm5hdmlnYXRvciAmJlxuICAgICAgICB3aW5kb3cubmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMCkgfHxcbiAgICAgICh3aW5kb3cuRG9jdW1lbnRUb3VjaCAmJiBkb2N1bWVudCBpbnN0YW5jZW9mIHdpbmRvdy5Eb2N1bWVudFRvdWNoKSksXG4gIHN1cHBvcnRzSWVQb2ludGVyOlxuICAgIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzLFxuICBpc0Nocm9tZTpcbiAgICB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIC9DaHJvbWUvaS50ZXN0KG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50KSxcbn07XG5cbmZ1bmN0aW9uIHVwZGF0ZUdlb21ldHJ5KGkpIHtcbiAgdmFyIGVsZW1lbnQgPSBpLmVsZW1lbnQ7XG4gIHZhciByb3VuZGVkU2Nyb2xsVG9wID0gTWF0aC5mbG9vcihlbGVtZW50LnNjcm9sbFRvcCk7XG4gIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICBpLmNvbnRhaW5lcldpZHRoID0gTWF0aC5jZWlsKHJlY3Qud2lkdGgpO1xuICBpLmNvbnRhaW5lckhlaWdodCA9IE1hdGguY2VpbChyZWN0LmhlaWdodCk7XG4gIGkuY29udGVudFdpZHRoID0gZWxlbWVudC5zY3JvbGxXaWR0aDtcbiAgaS5jb250ZW50SGVpZ2h0ID0gZWxlbWVudC5zY3JvbGxIZWlnaHQ7XG5cbiAgaWYgKCFlbGVtZW50LmNvbnRhaW5zKGkuc2Nyb2xsYmFyWFJhaWwpKSB7XG4gICAgLy8gY2xlYW4gdXAgYW5kIGFwcGVuZFxuICAgIHF1ZXJ5Q2hpbGRyZW4oZWxlbWVudCwgY2xzLmVsZW1lbnQucmFpbCgneCcpKS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gcmVtb3ZlKGVsKTsgfVxuICAgICk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChpLnNjcm9sbGJhclhSYWlsKTtcbiAgfVxuICBpZiAoIWVsZW1lbnQuY29udGFpbnMoaS5zY3JvbGxiYXJZUmFpbCkpIHtcbiAgICAvLyBjbGVhbiB1cCBhbmQgYXBwZW5kXG4gICAgcXVlcnlDaGlsZHJlbihlbGVtZW50LCBjbHMuZWxlbWVudC5yYWlsKCd5JykpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7IHJldHVybiByZW1vdmUoZWwpOyB9XG4gICAgKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGkuc2Nyb2xsYmFyWVJhaWwpO1xuICB9XG5cbiAgaWYgKFxuICAgICFpLnNldHRpbmdzLnN1cHByZXNzU2Nyb2xsWCAmJlxuICAgIGkuY29udGFpbmVyV2lkdGggKyBpLnNldHRpbmdzLnNjcm9sbFhNYXJnaW5PZmZzZXQgPCBpLmNvbnRlbnRXaWR0aFxuICApIHtcbiAgICBpLnNjcm9sbGJhclhBY3RpdmUgPSB0cnVlO1xuICAgIGkucmFpbFhXaWR0aCA9IGkuY29udGFpbmVyV2lkdGggLSBpLnJhaWxYTWFyZ2luV2lkdGg7XG4gICAgaS5yYWlsWFJhdGlvID0gaS5jb250YWluZXJXaWR0aCAvIGkucmFpbFhXaWR0aDtcbiAgICBpLnNjcm9sbGJhclhXaWR0aCA9IGdldFRodW1iU2l6ZShcbiAgICAgIGksXG4gICAgICB0b0ludCgoaS5yYWlsWFdpZHRoICogaS5jb250YWluZXJXaWR0aCkgLyBpLmNvbnRlbnRXaWR0aClcbiAgICApO1xuICAgIGkuc2Nyb2xsYmFyWExlZnQgPSB0b0ludChcbiAgICAgICgoaS5uZWdhdGl2ZVNjcm9sbEFkanVzdG1lbnQgKyBlbGVtZW50LnNjcm9sbExlZnQpICpcbiAgICAgICAgKGkucmFpbFhXaWR0aCAtIGkuc2Nyb2xsYmFyWFdpZHRoKSkgL1xuICAgICAgICAoaS5jb250ZW50V2lkdGggLSBpLmNvbnRhaW5lcldpZHRoKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgaS5zY3JvbGxiYXJYQWN0aXZlID0gZmFsc2U7XG4gIH1cblxuICBpZiAoXG4gICAgIWkuc2V0dGluZ3Muc3VwcHJlc3NTY3JvbGxZICYmXG4gICAgaS5jb250YWluZXJIZWlnaHQgKyBpLnNldHRpbmdzLnNjcm9sbFlNYXJnaW5PZmZzZXQgPCBpLmNvbnRlbnRIZWlnaHRcbiAgKSB7XG4gICAgaS5zY3JvbGxiYXJZQWN0aXZlID0gdHJ1ZTtcbiAgICBpLnJhaWxZSGVpZ2h0ID0gaS5jb250YWluZXJIZWlnaHQgLSBpLnJhaWxZTWFyZ2luSGVpZ2h0O1xuICAgIGkucmFpbFlSYXRpbyA9IGkuY29udGFpbmVySGVpZ2h0IC8gaS5yYWlsWUhlaWdodDtcbiAgICBpLnNjcm9sbGJhcllIZWlnaHQgPSBnZXRUaHVtYlNpemUoXG4gICAgICBpLFxuICAgICAgdG9JbnQoKGkucmFpbFlIZWlnaHQgKiBpLmNvbnRhaW5lckhlaWdodCkgLyBpLmNvbnRlbnRIZWlnaHQpXG4gICAgKTtcbiAgICBpLnNjcm9sbGJhcllUb3AgPSB0b0ludChcbiAgICAgIChyb3VuZGVkU2Nyb2xsVG9wICogKGkucmFpbFlIZWlnaHQgLSBpLnNjcm9sbGJhcllIZWlnaHQpKSAvXG4gICAgICAgIChpLmNvbnRlbnRIZWlnaHQgLSBpLmNvbnRhaW5lckhlaWdodClcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGkuc2Nyb2xsYmFyWUFjdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKGkuc2Nyb2xsYmFyWExlZnQgPj0gaS5yYWlsWFdpZHRoIC0gaS5zY3JvbGxiYXJYV2lkdGgpIHtcbiAgICBpLnNjcm9sbGJhclhMZWZ0ID0gaS5yYWlsWFdpZHRoIC0gaS5zY3JvbGxiYXJYV2lkdGg7XG4gIH1cbiAgaWYgKGkuc2Nyb2xsYmFyWVRvcCA+PSBpLnJhaWxZSGVpZ2h0IC0gaS5zY3JvbGxiYXJZSGVpZ2h0KSB7XG4gICAgaS5zY3JvbGxiYXJZVG9wID0gaS5yYWlsWUhlaWdodCAtIGkuc2Nyb2xsYmFyWUhlaWdodDtcbiAgfVxuXG4gIHVwZGF0ZUNzcyhlbGVtZW50LCBpKTtcblxuICBpZiAoaS5zY3JvbGxiYXJYQWN0aXZlKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNscy5zdGF0ZS5hY3RpdmUoJ3gnKSk7XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNscy5zdGF0ZS5hY3RpdmUoJ3gnKSk7XG4gICAgaS5zY3JvbGxiYXJYV2lkdGggPSAwO1xuICAgIGkuc2Nyb2xsYmFyWExlZnQgPSAwO1xuICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IGkuaXNSdGwgPT09IHRydWUgPyBpLmNvbnRlbnRXaWR0aCA6IDA7XG4gIH1cbiAgaWYgKGkuc2Nyb2xsYmFyWUFjdGl2ZSkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbHMuc3RhdGUuYWN0aXZlKCd5JykpO1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbHMuc3RhdGUuYWN0aXZlKCd5JykpO1xuICAgIGkuc2Nyb2xsYmFyWUhlaWdodCA9IDA7XG4gICAgaS5zY3JvbGxiYXJZVG9wID0gMDtcbiAgICBlbGVtZW50LnNjcm9sbFRvcCA9IDA7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VGh1bWJTaXplKGksIHRodW1iU2l6ZSkge1xuICBpZiAoaS5zZXR0aW5ncy5taW5TY3JvbGxiYXJMZW5ndGgpIHtcbiAgICB0aHVtYlNpemUgPSBNYXRoLm1heCh0aHVtYlNpemUsIGkuc2V0dGluZ3MubWluU2Nyb2xsYmFyTGVuZ3RoKTtcbiAgfVxuICBpZiAoaS5zZXR0aW5ncy5tYXhTY3JvbGxiYXJMZW5ndGgpIHtcbiAgICB0aHVtYlNpemUgPSBNYXRoLm1pbih0aHVtYlNpemUsIGkuc2V0dGluZ3MubWF4U2Nyb2xsYmFyTGVuZ3RoKTtcbiAgfVxuICByZXR1cm4gdGh1bWJTaXplO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDc3MoZWxlbWVudCwgaSkge1xuICB2YXIgeFJhaWxPZmZzZXQgPSB7IHdpZHRoOiBpLnJhaWxYV2lkdGggfTtcbiAgdmFyIHJvdW5kZWRTY3JvbGxUb3AgPSBNYXRoLmZsb29yKGVsZW1lbnQuc2Nyb2xsVG9wKTtcblxuICBpZiAoaS5pc1J0bCkge1xuICAgIHhSYWlsT2Zmc2V0LmxlZnQgPVxuICAgICAgaS5uZWdhdGl2ZVNjcm9sbEFkanVzdG1lbnQgK1xuICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ICtcbiAgICAgIGkuY29udGFpbmVyV2lkdGggLVxuICAgICAgaS5jb250ZW50V2lkdGg7XG4gIH0gZWxzZSB7XG4gICAgeFJhaWxPZmZzZXQubGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgfVxuICBpZiAoaS5pc1Njcm9sbGJhclhVc2luZ0JvdHRvbSkge1xuICAgIHhSYWlsT2Zmc2V0LmJvdHRvbSA9IGkuc2Nyb2xsYmFyWEJvdHRvbSAtIHJvdW5kZWRTY3JvbGxUb3A7XG4gIH0gZWxzZSB7XG4gICAgeFJhaWxPZmZzZXQudG9wID0gaS5zY3JvbGxiYXJYVG9wICsgcm91bmRlZFNjcm9sbFRvcDtcbiAgfVxuICBzZXQoaS5zY3JvbGxiYXJYUmFpbCwgeFJhaWxPZmZzZXQpO1xuXG4gIHZhciB5UmFpbE9mZnNldCA9IHsgdG9wOiByb3VuZGVkU2Nyb2xsVG9wLCBoZWlnaHQ6IGkucmFpbFlIZWlnaHQgfTtcbiAgaWYgKGkuaXNTY3JvbGxiYXJZVXNpbmdSaWdodCkge1xuICAgIGlmIChpLmlzUnRsKSB7XG4gICAgICB5UmFpbE9mZnNldC5yaWdodCA9XG4gICAgICAgIGkuY29udGVudFdpZHRoIC1cbiAgICAgICAgKGkubmVnYXRpdmVTY3JvbGxBZGp1c3RtZW50ICsgZWxlbWVudC5zY3JvbGxMZWZ0KSAtXG4gICAgICAgIGkuc2Nyb2xsYmFyWVJpZ2h0IC1cbiAgICAgICAgaS5zY3JvbGxiYXJZT3V0ZXJXaWR0aCAtXG4gICAgICAgIDk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHlSYWlsT2Zmc2V0LnJpZ2h0ID0gaS5zY3JvbGxiYXJZUmlnaHQgLSBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChpLmlzUnRsKSB7XG4gICAgICB5UmFpbE9mZnNldC5sZWZ0ID1cbiAgICAgICAgaS5uZWdhdGl2ZVNjcm9sbEFkanVzdG1lbnQgK1xuICAgICAgICBlbGVtZW50LnNjcm9sbExlZnQgK1xuICAgICAgICBpLmNvbnRhaW5lcldpZHRoICogMiAtXG4gICAgICAgIGkuY29udGVudFdpZHRoIC1cbiAgICAgICAgaS5zY3JvbGxiYXJZTGVmdCAtXG4gICAgICAgIGkuc2Nyb2xsYmFyWU91dGVyV2lkdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHlSYWlsT2Zmc2V0LmxlZnQgPSBpLnNjcm9sbGJhcllMZWZ0ICsgZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgIH1cbiAgfVxuICBzZXQoaS5zY3JvbGxiYXJZUmFpbCwgeVJhaWxPZmZzZXQpO1xuXG4gIHNldChpLnNjcm9sbGJhclgsIHtcbiAgICBsZWZ0OiBpLnNjcm9sbGJhclhMZWZ0LFxuICAgIHdpZHRoOiBpLnNjcm9sbGJhclhXaWR0aCAtIGkucmFpbEJvcmRlclhXaWR0aCxcbiAgfSk7XG4gIHNldChpLnNjcm9sbGJhclksIHtcbiAgICB0b3A6IGkuc2Nyb2xsYmFyWVRvcCxcbiAgICBoZWlnaHQ6IGkuc2Nyb2xsYmFyWUhlaWdodCAtIGkucmFpbEJvcmRlcllXaWR0aCxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNsaWNrUmFpbChpKSB7XG4gIHZhciBlbGVtZW50ID0gaS5lbGVtZW50O1xuXG4gIGkuZXZlbnQuYmluZChpLnNjcm9sbGJhclksICdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS5zdG9wUHJvcGFnYXRpb24oKTsgfSk7XG4gIGkuZXZlbnQuYmluZChpLnNjcm9sbGJhcllSYWlsLCAnbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgcG9zaXRpb25Ub3AgPVxuICAgICAgZS5wYWdlWSAtXG4gICAgICB3aW5kb3cucGFnZVlPZmZzZXQgLVxuICAgICAgaS5zY3JvbGxiYXJZUmFpbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgdmFyIGRpcmVjdGlvbiA9IHBvc2l0aW9uVG9wID4gaS5zY3JvbGxiYXJZVG9wID8gMSA6IC0xO1xuXG4gICAgaS5lbGVtZW50LnNjcm9sbFRvcCArPSBkaXJlY3Rpb24gKiBpLmNvbnRhaW5lckhlaWdodDtcbiAgICB1cGRhdGVHZW9tZXRyeShpKTtcblxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0pO1xuXG4gIGkuZXZlbnQuYmluZChpLnNjcm9sbGJhclgsICdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS5zdG9wUHJvcGFnYXRpb24oKTsgfSk7XG4gIGkuZXZlbnQuYmluZChpLnNjcm9sbGJhclhSYWlsLCAnbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgcG9zaXRpb25MZWZ0ID1cbiAgICAgIGUucGFnZVggLVxuICAgICAgd2luZG93LnBhZ2VYT2Zmc2V0IC1cbiAgICAgIGkuc2Nyb2xsYmFyWFJhaWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICB2YXIgZGlyZWN0aW9uID0gcG9zaXRpb25MZWZ0ID4gaS5zY3JvbGxiYXJYTGVmdCA/IDEgOiAtMTtcblxuICAgIGkuZWxlbWVudC5zY3JvbGxMZWZ0ICs9IGRpcmVjdGlvbiAqIGkuY29udGFpbmVyV2lkdGg7XG4gICAgdXBkYXRlR2VvbWV0cnkoaSk7XG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZHJhZ1RodW1iKGkpIHtcbiAgYmluZE1vdXNlU2Nyb2xsSGFuZGxlcihpLCBbXG4gICAgJ2NvbnRhaW5lcldpZHRoJyxcbiAgICAnY29udGVudFdpZHRoJyxcbiAgICAncGFnZVgnLFxuICAgICdyYWlsWFdpZHRoJyxcbiAgICAnc2Nyb2xsYmFyWCcsXG4gICAgJ3Njcm9sbGJhclhXaWR0aCcsXG4gICAgJ3Njcm9sbExlZnQnLFxuICAgICd4JyxcbiAgICAnc2Nyb2xsYmFyWFJhaWwnIF0pO1xuICBiaW5kTW91c2VTY3JvbGxIYW5kbGVyKGksIFtcbiAgICAnY29udGFpbmVySGVpZ2h0JyxcbiAgICAnY29udGVudEhlaWdodCcsXG4gICAgJ3BhZ2VZJyxcbiAgICAncmFpbFlIZWlnaHQnLFxuICAgICdzY3JvbGxiYXJZJyxcbiAgICAnc2Nyb2xsYmFyWUhlaWdodCcsXG4gICAgJ3Njcm9sbFRvcCcsXG4gICAgJ3knLFxuICAgICdzY3JvbGxiYXJZUmFpbCcgXSk7XG59XG5cbmZ1bmN0aW9uIGJpbmRNb3VzZVNjcm9sbEhhbmRsZXIoXG4gIGksXG4gIHJlZlxuKSB7XG4gIHZhciBjb250YWluZXJIZWlnaHQgPSByZWZbMF07XG4gIHZhciBjb250ZW50SGVpZ2h0ID0gcmVmWzFdO1xuICB2YXIgcGFnZVkgPSByZWZbMl07XG4gIHZhciByYWlsWUhlaWdodCA9IHJlZlszXTtcbiAgdmFyIHNjcm9sbGJhclkgPSByZWZbNF07XG4gIHZhciBzY3JvbGxiYXJZSGVpZ2h0ID0gcmVmWzVdO1xuICB2YXIgc2Nyb2xsVG9wID0gcmVmWzZdO1xuICB2YXIgeSA9IHJlZls3XTtcbiAgdmFyIHNjcm9sbGJhcllSYWlsID0gcmVmWzhdO1xuXG4gIHZhciBlbGVtZW50ID0gaS5lbGVtZW50O1xuXG4gIHZhciBzdGFydGluZ1Njcm9sbFRvcCA9IG51bGw7XG4gIHZhciBzdGFydGluZ01vdXNlUGFnZVkgPSBudWxsO1xuICB2YXIgc2Nyb2xsQnkgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIG1vdXNlTW92ZUhhbmRsZXIoZSkge1xuICAgIGlmIChlLnRvdWNoZXMgJiYgZS50b3VjaGVzWzBdKSB7XG4gICAgICBlW3BhZ2VZXSA9IGUudG91Y2hlc1swXS5wYWdlWTtcbiAgICB9XG4gICAgZWxlbWVudFtzY3JvbGxUb3BdID1cbiAgICAgIHN0YXJ0aW5nU2Nyb2xsVG9wICsgc2Nyb2xsQnkgKiAoZVtwYWdlWV0gLSBzdGFydGluZ01vdXNlUGFnZVkpO1xuICAgIGFkZFNjcm9sbGluZ0NsYXNzKGksIHkpO1xuICAgIHVwZGF0ZUdlb21ldHJ5KGkpO1xuXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBtb3VzZVVwSGFuZGxlcigpIHtcbiAgICByZW1vdmVTY3JvbGxpbmdDbGFzcyhpLCB5KTtcbiAgICBpW3Njcm9sbGJhcllSYWlsXS5jbGFzc0xpc3QucmVtb3ZlKGNscy5zdGF0ZS5jbGlja2luZyk7XG4gICAgaS5ldmVudC51bmJpbmQoaS5vd25lckRvY3VtZW50LCAnbW91c2Vtb3ZlJywgbW91c2VNb3ZlSGFuZGxlcik7XG4gIH1cblxuICBmdW5jdGlvbiBiaW5kTW92ZXMoZSwgdG91Y2hNb2RlKSB7XG4gICAgc3RhcnRpbmdTY3JvbGxUb3AgPSBlbGVtZW50W3Njcm9sbFRvcF07XG4gICAgaWYgKHRvdWNoTW9kZSAmJiBlLnRvdWNoZXMpIHtcbiAgICAgIGVbcGFnZVldID0gZS50b3VjaGVzWzBdLnBhZ2VZO1xuICAgIH1cbiAgICBzdGFydGluZ01vdXNlUGFnZVkgPSBlW3BhZ2VZXTtcbiAgICBzY3JvbGxCeSA9XG4gICAgICAoaVtjb250ZW50SGVpZ2h0XSAtIGlbY29udGFpbmVySGVpZ2h0XSkgL1xuICAgICAgKGlbcmFpbFlIZWlnaHRdIC0gaVtzY3JvbGxiYXJZSGVpZ2h0XSk7XG4gICAgaWYgKCF0b3VjaE1vZGUpIHtcbiAgICAgIGkuZXZlbnQuYmluZChpLm93bmVyRG9jdW1lbnQsICdtb3VzZW1vdmUnLCBtb3VzZU1vdmVIYW5kbGVyKTtcbiAgICAgIGkuZXZlbnQub25jZShpLm93bmVyRG9jdW1lbnQsICdtb3VzZXVwJywgbW91c2VVcEhhbmRsZXIpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpLmV2ZW50LmJpbmQoaS5vd25lckRvY3VtZW50LCAndG91Y2htb3ZlJywgbW91c2VNb3ZlSGFuZGxlcik7XG4gICAgfVxuXG4gICAgaVtzY3JvbGxiYXJZUmFpbF0uY2xhc3NMaXN0LmFkZChjbHMuc3RhdGUuY2xpY2tpbmcpO1xuXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGkuZXZlbnQuYmluZChpW3Njcm9sbGJhclldLCAnbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICBiaW5kTW92ZXMoZSk7XG4gIH0pO1xuICBpLmV2ZW50LmJpbmQoaVtzY3JvbGxiYXJZXSwgJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbiAoZSkge1xuICAgIGJpbmRNb3ZlcyhlLCB0cnVlKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGtleWJvYXJkKGkpIHtcbiAgdmFyIGVsZW1lbnQgPSBpLmVsZW1lbnQ7XG5cbiAgdmFyIGVsZW1lbnRIb3ZlcmVkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbWF0Y2hlcyhlbGVtZW50LCAnOmhvdmVyJyk7IH07XG4gIHZhciBzY3JvbGxiYXJGb2N1c2VkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbWF0Y2hlcyhpLnNjcm9sbGJhclgsICc6Zm9jdXMnKSB8fCBtYXRjaGVzKGkuc2Nyb2xsYmFyWSwgJzpmb2N1cycpOyB9O1xuXG4gIGZ1bmN0aW9uIHNob3VsZFByZXZlbnREZWZhdWx0KGRlbHRhWCwgZGVsdGFZKSB7XG4gICAgdmFyIHNjcm9sbFRvcCA9IE1hdGguZmxvb3IoZWxlbWVudC5zY3JvbGxUb3ApO1xuICAgIGlmIChkZWx0YVggPT09IDApIHtcbiAgICAgIGlmICghaS5zY3JvbGxiYXJZQWN0aXZlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgKHNjcm9sbFRvcCA9PT0gMCAmJiBkZWx0YVkgPiAwKSB8fFxuICAgICAgICAoc2Nyb2xsVG9wID49IGkuY29udGVudEhlaWdodCAtIGkuY29udGFpbmVySGVpZ2h0ICYmIGRlbHRhWSA8IDApXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuICFpLnNldHRpbmdzLndoZWVsUHJvcGFnYXRpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHNjcm9sbExlZnQgPSBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgaWYgKGRlbHRhWSA9PT0gMCkge1xuICAgICAgaWYgKCFpLnNjcm9sbGJhclhBY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAoc2Nyb2xsTGVmdCA9PT0gMCAmJiBkZWx0YVggPCAwKSB8fFxuICAgICAgICAoc2Nyb2xsTGVmdCA+PSBpLmNvbnRlbnRXaWR0aCAtIGkuY29udGFpbmVyV2lkdGggJiYgZGVsdGFYID4gMClcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gIWkuc2V0dGluZ3Mud2hlZWxQcm9wYWdhdGlvbjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpLmV2ZW50LmJpbmQoaS5vd25lckRvY3VtZW50LCAna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKFxuICAgICAgKGUuaXNEZWZhdWx0UHJldmVudGVkICYmIGUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHx8XG4gICAgICBlLmRlZmF1bHRQcmV2ZW50ZWRcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWVsZW1lbnRIb3ZlcmVkKCkgJiYgIXNjcm9sbGJhckZvY3VzZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxuICAgICAgPyBkb2N1bWVudC5hY3RpdmVFbGVtZW50XG4gICAgICA6IGkub3duZXJEb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIGlmIChhY3RpdmVFbGVtZW50KSB7XG4gICAgICBpZiAoYWN0aXZlRWxlbWVudC50YWdOYW1lID09PSAnSUZSQU1FJykge1xuICAgICAgICBhY3RpdmVFbGVtZW50ID0gYWN0aXZlRWxlbWVudC5jb250ZW50RG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGdvIGRlZXBlciBpZiBlbGVtZW50IGlzIGEgd2ViY29tcG9uZW50XG4gICAgICAgIHdoaWxlIChhY3RpdmVFbGVtZW50LnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgICBhY3RpdmVFbGVtZW50ID0gYWN0aXZlRWxlbWVudC5zaGFkb3dSb290LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpc0VkaXRhYmxlKGFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZGVsdGFYID0gMDtcbiAgICB2YXIgZGVsdGFZID0gMDtcblxuICAgIHN3aXRjaCAoZS53aGljaCkge1xuICAgICAgY2FzZSAzNzogLy8gbGVmdFxuICAgICAgICBpZiAoZS5tZXRhS2V5KSB7XG4gICAgICAgICAgZGVsdGFYID0gLWkuY29udGVudFdpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKGUuYWx0S2V5KSB7XG4gICAgICAgICAgZGVsdGFYID0gLWkuY29udGFpbmVyV2lkdGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVsdGFYID0gLTMwO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzODogLy8gdXBcbiAgICAgICAgaWYgKGUubWV0YUtleSkge1xuICAgICAgICAgIGRlbHRhWSA9IGkuY29udGVudEhlaWdodDtcbiAgICAgICAgfSBlbHNlIGlmIChlLmFsdEtleSkge1xuICAgICAgICAgIGRlbHRhWSA9IGkuY29udGFpbmVySGVpZ2h0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlbHRhWSA9IDMwO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOTogLy8gcmlnaHRcbiAgICAgICAgaWYgKGUubWV0YUtleSkge1xuICAgICAgICAgIGRlbHRhWCA9IGkuY29udGVudFdpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKGUuYWx0S2V5KSB7XG4gICAgICAgICAgZGVsdGFYID0gaS5jb250YWluZXJXaWR0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWx0YVggPSAzMDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDA6IC8vIGRvd25cbiAgICAgICAgaWYgKGUubWV0YUtleSkge1xuICAgICAgICAgIGRlbHRhWSA9IC1pLmNvbnRlbnRIZWlnaHQ7XG4gICAgICAgIH0gZWxzZSBpZiAoZS5hbHRLZXkpIHtcbiAgICAgICAgICBkZWx0YVkgPSAtaS5jb250YWluZXJIZWlnaHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVsdGFZID0gLTMwO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzMjogLy8gc3BhY2UgYmFyXG4gICAgICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgZGVsdGFZID0gaS5jb250YWluZXJIZWlnaHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVsdGFZID0gLWkuY29udGFpbmVySGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzMzogLy8gcGFnZSB1cFxuICAgICAgICBkZWx0YVkgPSBpLmNvbnRhaW5lckhlaWdodDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM0OiAvLyBwYWdlIGRvd25cbiAgICAgICAgZGVsdGFZID0gLWkuY29udGFpbmVySGVpZ2h0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzY6IC8vIGhvbWVcbiAgICAgICAgZGVsdGFZID0gaS5jb250ZW50SGVpZ2h0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzU6IC8vIGVuZFxuICAgICAgICBkZWx0YVkgPSAtaS5jb250ZW50SGVpZ2h0O1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaS5zZXR0aW5ncy5zdXBwcmVzc1Njcm9sbFggJiYgZGVsdGFYICE9PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpLnNldHRpbmdzLnN1cHByZXNzU2Nyb2xsWSAmJiBkZWx0YVkgIT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50LnNjcm9sbFRvcCAtPSBkZWx0YVk7XG4gICAgZWxlbWVudC5zY3JvbGxMZWZ0ICs9IGRlbHRhWDtcbiAgICB1cGRhdGVHZW9tZXRyeShpKTtcblxuICAgIGlmIChzaG91bGRQcmV2ZW50RGVmYXVsdChkZWx0YVgsIGRlbHRhWSkpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB3aGVlbChpKSB7XG4gIHZhciBlbGVtZW50ID0gaS5lbGVtZW50O1xuXG4gIGZ1bmN0aW9uIHNob3VsZFByZXZlbnREZWZhdWx0KGRlbHRhWCwgZGVsdGFZKSB7XG4gICAgdmFyIHJvdW5kZWRTY3JvbGxUb3AgPSBNYXRoLmZsb29yKGVsZW1lbnQuc2Nyb2xsVG9wKTtcbiAgICB2YXIgaXNUb3AgPSBlbGVtZW50LnNjcm9sbFRvcCA9PT0gMDtcbiAgICB2YXIgaXNCb3R0b20gPVxuICAgICAgcm91bmRlZFNjcm9sbFRvcCArIGVsZW1lbnQub2Zmc2V0SGVpZ2h0ID09PSBlbGVtZW50LnNjcm9sbEhlaWdodDtcbiAgICB2YXIgaXNMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0ID09PSAwO1xuICAgIHZhciBpc1JpZ2h0ID1cbiAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCArIGVsZW1lbnQub2Zmc2V0V2lkdGggPT09IGVsZW1lbnQuc2Nyb2xsV2lkdGg7XG5cbiAgICB2YXIgaGl0c0JvdW5kO1xuXG4gICAgLy8gcGljayBheGlzIHdpdGggcHJpbWFyeSBkaXJlY3Rpb25cbiAgICBpZiAoTWF0aC5hYnMoZGVsdGFZKSA+IE1hdGguYWJzKGRlbHRhWCkpIHtcbiAgICAgIGhpdHNCb3VuZCA9IGlzVG9wIHx8IGlzQm90dG9tO1xuICAgIH0gZWxzZSB7XG4gICAgICBoaXRzQm91bmQgPSBpc0xlZnQgfHwgaXNSaWdodDtcbiAgICB9XG5cbiAgICByZXR1cm4gaGl0c0JvdW5kID8gIWkuc2V0dGluZ3Mud2hlZWxQcm9wYWdhdGlvbiA6IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXREZWx0YUZyb21FdmVudChlKSB7XG4gICAgdmFyIGRlbHRhWCA9IGUuZGVsdGFYO1xuICAgIHZhciBkZWx0YVkgPSAtMSAqIGUuZGVsdGFZO1xuXG4gICAgaWYgKHR5cGVvZiBkZWx0YVggPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBkZWx0YVkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBPUyBYIFNhZmFyaVxuICAgICAgZGVsdGFYID0gKC0xICogZS53aGVlbERlbHRhWCkgLyA2O1xuICAgICAgZGVsdGFZID0gZS53aGVlbERlbHRhWSAvIDY7XG4gICAgfVxuXG4gICAgaWYgKGUuZGVsdGFNb2RlICYmIGUuZGVsdGFNb2RlID09PSAxKSB7XG4gICAgICAvLyBGaXJlZm94IGluIGRlbHRhTW9kZSAxOiBMaW5lIHNjcm9sbGluZ1xuICAgICAgZGVsdGFYICo9IDEwO1xuICAgICAgZGVsdGFZICo9IDEwO1xuICAgIH1cblxuICAgIGlmIChkZWx0YVggIT09IGRlbHRhWCAmJiBkZWx0YVkgIT09IGRlbHRhWSAvKiBOYU4gY2hlY2tzICovKSB7XG4gICAgICAvLyBJRSBpbiBzb21lIG1vdXNlIGRyaXZlcnNcbiAgICAgIGRlbHRhWCA9IDA7XG4gICAgICBkZWx0YVkgPSBlLndoZWVsRGVsdGE7XG4gICAgfVxuXG4gICAgaWYgKGUuc2hpZnRLZXkpIHtcbiAgICAgIC8vIHJldmVyc2UgYXhpcyB3aXRoIHNoaWZ0IGtleVxuICAgICAgcmV0dXJuIFstZGVsdGFZLCAtZGVsdGFYXTtcbiAgICB9XG4gICAgcmV0dXJuIFtkZWx0YVgsIGRlbHRhWV07XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRCZUNvbnN1bWVkQnlDaGlsZCh0YXJnZXQsIGRlbHRhWCwgZGVsdGFZKSB7XG4gICAgLy8gRklYTUU6IHRoaXMgaXMgYSB3b3JrYXJvdW5kIGZvciA8c2VsZWN0PiBpc3N1ZSBpbiBGRiBhbmQgSUUgIzU3MVxuICAgIGlmICghZW52LmlzV2ViS2l0ICYmIGVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0OmZvY3VzJykpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICghZWxlbWVudC5jb250YWlucyh0YXJnZXQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGN1cnNvciA9IHRhcmdldDtcblxuICAgIHdoaWxlIChjdXJzb3IgJiYgY3Vyc29yICE9PSBlbGVtZW50KSB7XG4gICAgICBpZiAoY3Vyc29yLmNsYXNzTGlzdC5jb250YWlucyhjbHMuZWxlbWVudC5jb25zdW1pbmcpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3R5bGUgPSBnZXQoY3Vyc29yKTtcblxuICAgICAgLy8gaWYgZGVsdGFZICYmIHZlcnRpY2FsIHNjcm9sbGFibGVcbiAgICAgIGlmIChkZWx0YVkgJiYgc3R5bGUub3ZlcmZsb3dZLm1hdGNoKC8oc2Nyb2xsfGF1dG8pLykpIHtcbiAgICAgICAgdmFyIG1heFNjcm9sbFRvcCA9IGN1cnNvci5zY3JvbGxIZWlnaHQgLSBjdXJzb3IuY2xpZW50SGVpZ2h0O1xuICAgICAgICBpZiAobWF4U2Nyb2xsVG9wID4gMCkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIChjdXJzb3Iuc2Nyb2xsVG9wID4gMCAmJiBkZWx0YVkgPCAwKSB8fFxuICAgICAgICAgICAgKGN1cnNvci5zY3JvbGxUb3AgPCBtYXhTY3JvbGxUb3AgJiYgZGVsdGFZID4gMClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gaWYgZGVsdGFYICYmIGhvcml6b250YWwgc2Nyb2xsYWJsZVxuICAgICAgaWYgKGRlbHRhWCAmJiBzdHlsZS5vdmVyZmxvd1gubWF0Y2goLyhzY3JvbGx8YXV0bykvKSkge1xuICAgICAgICB2YXIgbWF4U2Nyb2xsTGVmdCA9IGN1cnNvci5zY3JvbGxXaWR0aCAtIGN1cnNvci5jbGllbnRXaWR0aDtcbiAgICAgICAgaWYgKG1heFNjcm9sbExlZnQgPiAwKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgKGN1cnNvci5zY3JvbGxMZWZ0ID4gMCAmJiBkZWx0YVggPCAwKSB8fFxuICAgICAgICAgICAgKGN1cnNvci5zY3JvbGxMZWZ0IDwgbWF4U2Nyb2xsTGVmdCAmJiBkZWx0YVggPiAwKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGN1cnNvciA9IGN1cnNvci5wYXJlbnROb2RlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdXNld2hlZWxIYW5kbGVyKGUpIHtcbiAgICB2YXIgcmVmID0gZ2V0RGVsdGFGcm9tRXZlbnQoZSk7XG4gICAgdmFyIGRlbHRhWCA9IHJlZlswXTtcbiAgICB2YXIgZGVsdGFZID0gcmVmWzFdO1xuXG4gICAgaWYgKHNob3VsZEJlQ29uc3VtZWRCeUNoaWxkKGUudGFyZ2V0LCBkZWx0YVgsIGRlbHRhWSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgc2hvdWxkUHJldmVudCA9IGZhbHNlO1xuICAgIGlmICghaS5zZXR0aW5ncy51c2VCb3RoV2hlZWxBeGVzKSB7XG4gICAgICAvLyBkZWx0YVggd2lsbCBvbmx5IGJlIHVzZWQgZm9yIGhvcml6b250YWwgc2Nyb2xsaW5nIGFuZCBkZWx0YVkgd2lsbFxuICAgICAgLy8gb25seSBiZSB1c2VkIGZvciB2ZXJ0aWNhbCBzY3JvbGxpbmcgLSB0aGlzIGlzIHRoZSBkZWZhdWx0XG4gICAgICBlbGVtZW50LnNjcm9sbFRvcCAtPSBkZWx0YVkgKiBpLnNldHRpbmdzLndoZWVsU3BlZWQ7XG4gICAgICBlbGVtZW50LnNjcm9sbExlZnQgKz0gZGVsdGFYICogaS5zZXR0aW5ncy53aGVlbFNwZWVkO1xuICAgIH0gZWxzZSBpZiAoaS5zY3JvbGxiYXJZQWN0aXZlICYmICFpLnNjcm9sbGJhclhBY3RpdmUpIHtcbiAgICAgIC8vIG9ubHkgdmVydGljYWwgc2Nyb2xsYmFyIGlzIGFjdGl2ZSBhbmQgdXNlQm90aFdoZWVsQXhlcyBvcHRpb24gaXNcbiAgICAgIC8vIGFjdGl2ZSwgc28gbGV0J3Mgc2Nyb2xsIHZlcnRpY2FsIGJhciB1c2luZyBib3RoIG1vdXNlIHdoZWVsIGF4ZXNcbiAgICAgIGlmIChkZWx0YVkpIHtcbiAgICAgICAgZWxlbWVudC5zY3JvbGxUb3AgLT0gZGVsdGFZICogaS5zZXR0aW5ncy53aGVlbFNwZWVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zY3JvbGxUb3AgKz0gZGVsdGFYICogaS5zZXR0aW5ncy53aGVlbFNwZWVkO1xuICAgICAgfVxuICAgICAgc2hvdWxkUHJldmVudCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChpLnNjcm9sbGJhclhBY3RpdmUgJiYgIWkuc2Nyb2xsYmFyWUFjdGl2ZSkge1xuICAgICAgLy8gdXNlQm90aFdoZWVsQXhlcyBhbmQgb25seSBob3Jpem9udGFsIGJhciBpcyBhY3RpdmUsIHNvIHVzZSBib3RoXG4gICAgICAvLyB3aGVlbCBheGVzIGZvciBob3Jpem9udGFsIGJhclxuICAgICAgaWYgKGRlbHRhWCkge1xuICAgICAgICBlbGVtZW50LnNjcm9sbExlZnQgKz0gZGVsdGFYICogaS5zZXR0aW5ncy53aGVlbFNwZWVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0IC09IGRlbHRhWSAqIGkuc2V0dGluZ3Mud2hlZWxTcGVlZDtcbiAgICAgIH1cbiAgICAgIHNob3VsZFByZXZlbnQgPSB0cnVlO1xuICAgIH1cblxuICAgIHVwZGF0ZUdlb21ldHJ5KGkpO1xuXG4gICAgc2hvdWxkUHJldmVudCA9IHNob3VsZFByZXZlbnQgfHwgc2hvdWxkUHJldmVudERlZmF1bHQoZGVsdGFYLCBkZWx0YVkpO1xuICAgIGlmIChzaG91bGRQcmV2ZW50ICYmICFlLmN0cmxLZXkpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cub253aGVlbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ3doZWVsJywgbW91c2V3aGVlbEhhbmRsZXIpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cub25tb3VzZXdoZWVsICE9PSAndW5kZWZpbmVkJykge1xuICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAnbW91c2V3aGVlbCcsIG1vdXNld2hlZWxIYW5kbGVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0b3VjaChpKSB7XG4gIGlmICghZW52LnN1cHBvcnRzVG91Y2ggJiYgIWVudi5zdXBwb3J0c0llUG9pbnRlcikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBlbGVtZW50ID0gaS5lbGVtZW50O1xuXG4gIGZ1bmN0aW9uIHNob3VsZFByZXZlbnQoZGVsdGFYLCBkZWx0YVkpIHtcbiAgICB2YXIgc2Nyb2xsVG9wID0gTWF0aC5mbG9vcihlbGVtZW50LnNjcm9sbFRvcCk7XG4gICAgdmFyIHNjcm9sbExlZnQgPSBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgdmFyIG1hZ25pdHVkZVggPSBNYXRoLmFicyhkZWx0YVgpO1xuICAgIHZhciBtYWduaXR1ZGVZID0gTWF0aC5hYnMoZGVsdGFZKTtcblxuICAgIGlmIChtYWduaXR1ZGVZID4gbWFnbml0dWRlWCkge1xuICAgICAgLy8gdXNlciBpcyBwZXJoYXBzIHRyeWluZyB0byBzd2lwZSB1cC9kb3duIHRoZSBwYWdlXG5cbiAgICAgIGlmIChcbiAgICAgICAgKGRlbHRhWSA8IDAgJiYgc2Nyb2xsVG9wID09PSBpLmNvbnRlbnRIZWlnaHQgLSBpLmNvbnRhaW5lckhlaWdodCkgfHxcbiAgICAgICAgKGRlbHRhWSA+IDAgJiYgc2Nyb2xsVG9wID09PSAwKVxuICAgICAgKSB7XG4gICAgICAgIC8vIHNldCBwcmV2ZW50IGZvciBtb2JpbGUgQ2hyb21lIHJlZnJlc2hcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5zY3JvbGxZID09PSAwICYmIGRlbHRhWSA+IDAgJiYgZW52LmlzQ2hyb21lO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobWFnbml0dWRlWCA+IG1hZ25pdHVkZVkpIHtcbiAgICAgIC8vIHVzZXIgaXMgcGVyaGFwcyB0cnlpbmcgdG8gc3dpcGUgbGVmdC9yaWdodCBhY3Jvc3MgdGhlIHBhZ2VcblxuICAgICAgaWYgKFxuICAgICAgICAoZGVsdGFYIDwgMCAmJiBzY3JvbGxMZWZ0ID09PSBpLmNvbnRlbnRXaWR0aCAtIGkuY29udGFpbmVyV2lkdGgpIHx8XG4gICAgICAgIChkZWx0YVggPiAwICYmIHNjcm9sbExlZnQgPT09IDApXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBhcHBseVRvdWNoTW92ZShkaWZmZXJlbmNlWCwgZGlmZmVyZW5jZVkpIHtcbiAgICBlbGVtZW50LnNjcm9sbFRvcCAtPSBkaWZmZXJlbmNlWTtcbiAgICBlbGVtZW50LnNjcm9sbExlZnQgLT0gZGlmZmVyZW5jZVg7XG5cbiAgICB1cGRhdGVHZW9tZXRyeShpKTtcbiAgfVxuXG4gIHZhciBzdGFydE9mZnNldCA9IHt9O1xuICB2YXIgc3RhcnRUaW1lID0gMDtcbiAgdmFyIHNwZWVkID0ge307XG4gIHZhciBlYXNpbmdMb29wID0gbnVsbDtcblxuICBmdW5jdGlvbiBnZXRUb3VjaChlKSB7XG4gICAgaWYgKGUudGFyZ2V0VG91Y2hlcykge1xuICAgICAgcmV0dXJuIGUudGFyZ2V0VG91Y2hlc1swXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTWF5YmUgSUUgcG9pbnRlclxuICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkSGFuZGxlKGUpIHtcbiAgICBpZiAoZS5wb2ludGVyVHlwZSAmJiBlLnBvaW50ZXJUeXBlID09PSAncGVuJyAmJiBlLmJ1dHRvbnMgPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGUudGFyZ2V0VG91Y2hlcyAmJiBlLnRhcmdldFRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgZS5wb2ludGVyVHlwZSAmJlxuICAgICAgZS5wb2ludGVyVHlwZSAhPT0gJ21vdXNlJyAmJlxuICAgICAgZS5wb2ludGVyVHlwZSAhPT0gZS5NU1BPSU5URVJfVFlQRV9NT1VTRVxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvdWNoU3RhcnQoZSkge1xuICAgIGlmICghc2hvdWxkSGFuZGxlKGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHRvdWNoID0gZ2V0VG91Y2goZSk7XG5cbiAgICBzdGFydE9mZnNldC5wYWdlWCA9IHRvdWNoLnBhZ2VYO1xuICAgIHN0YXJ0T2Zmc2V0LnBhZ2VZID0gdG91Y2gucGFnZVk7XG5cbiAgICBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgIGlmIChlYXNpbmdMb29wICE9PSBudWxsKSB7XG4gICAgICBjbGVhckludGVydmFsKGVhc2luZ0xvb3ApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEJlQ29uc3VtZWRCeUNoaWxkKHRhcmdldCwgZGVsdGFYLCBkZWx0YVkpIHtcbiAgICBpZiAoIWVsZW1lbnQuY29udGFpbnModGFyZ2V0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBjdXJzb3IgPSB0YXJnZXQ7XG5cbiAgICB3aGlsZSAoY3Vyc29yICYmIGN1cnNvciAhPT0gZWxlbWVudCkge1xuICAgICAgaWYgKGN1cnNvci5jbGFzc0xpc3QuY29udGFpbnMoY2xzLmVsZW1lbnQuY29uc3VtaW5nKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0eWxlID0gZ2V0KGN1cnNvcik7XG5cbiAgICAgIC8vIGlmIGRlbHRhWSAmJiB2ZXJ0aWNhbCBzY3JvbGxhYmxlXG4gICAgICBpZiAoZGVsdGFZICYmIHN0eWxlLm92ZXJmbG93WS5tYXRjaCgvKHNjcm9sbHxhdXRvKS8pKSB7XG4gICAgICAgIHZhciBtYXhTY3JvbGxUb3AgPSBjdXJzb3Iuc2Nyb2xsSGVpZ2h0IC0gY3Vyc29yLmNsaWVudEhlaWdodDtcbiAgICAgICAgaWYgKG1heFNjcm9sbFRvcCA+IDApIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAoY3Vyc29yLnNjcm9sbFRvcCA+IDAgJiYgZGVsdGFZIDwgMCkgfHxcbiAgICAgICAgICAgIChjdXJzb3Iuc2Nyb2xsVG9wIDwgbWF4U2Nyb2xsVG9wICYmIGRlbHRhWSA+IDApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIGlmIGRlbHRhWCAmJiBob3Jpem9udGFsIHNjcm9sbGFibGVcbiAgICAgIGlmIChkZWx0YVggJiYgc3R5bGUub3ZlcmZsb3dYLm1hdGNoKC8oc2Nyb2xsfGF1dG8pLykpIHtcbiAgICAgICAgdmFyIG1heFNjcm9sbExlZnQgPSBjdXJzb3Iuc2Nyb2xsV2lkdGggLSBjdXJzb3IuY2xpZW50V2lkdGg7XG4gICAgICAgIGlmIChtYXhTY3JvbGxMZWZ0ID4gMCkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIChjdXJzb3Iuc2Nyb2xsTGVmdCA+IDAgJiYgZGVsdGFYIDwgMCkgfHxcbiAgICAgICAgICAgIChjdXJzb3Iuc2Nyb2xsTGVmdCA8IG1heFNjcm9sbExlZnQgJiYgZGVsdGFYID4gMClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjdXJzb3IgPSBjdXJzb3IucGFyZW50Tm9kZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiB0b3VjaE1vdmUoZSkge1xuICAgIGlmIChzaG91bGRIYW5kbGUoZSkpIHtcbiAgICAgIHZhciB0b3VjaCA9IGdldFRvdWNoKGUpO1xuXG4gICAgICB2YXIgY3VycmVudE9mZnNldCA9IHsgcGFnZVg6IHRvdWNoLnBhZ2VYLCBwYWdlWTogdG91Y2gucGFnZVkgfTtcblxuICAgICAgdmFyIGRpZmZlcmVuY2VYID0gY3VycmVudE9mZnNldC5wYWdlWCAtIHN0YXJ0T2Zmc2V0LnBhZ2VYO1xuICAgICAgdmFyIGRpZmZlcmVuY2VZID0gY3VycmVudE9mZnNldC5wYWdlWSAtIHN0YXJ0T2Zmc2V0LnBhZ2VZO1xuXG4gICAgICBpZiAoc2hvdWxkQmVDb25zdW1lZEJ5Q2hpbGQoZS50YXJnZXQsIGRpZmZlcmVuY2VYLCBkaWZmZXJlbmNlWSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcHBseVRvdWNoTW92ZShkaWZmZXJlbmNlWCwgZGlmZmVyZW5jZVkpO1xuICAgICAgc3RhcnRPZmZzZXQgPSBjdXJyZW50T2Zmc2V0O1xuXG4gICAgICB2YXIgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgICAgdmFyIHRpbWVHYXAgPSBjdXJyZW50VGltZSAtIHN0YXJ0VGltZTtcbiAgICAgIGlmICh0aW1lR2FwID4gMCkge1xuICAgICAgICBzcGVlZC54ID0gZGlmZmVyZW5jZVggLyB0aW1lR2FwO1xuICAgICAgICBzcGVlZC55ID0gZGlmZmVyZW5jZVkgLyB0aW1lR2FwO1xuICAgICAgICBzdGFydFRpbWUgPSBjdXJyZW50VGltZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNob3VsZFByZXZlbnQoZGlmZmVyZW5jZVgsIGRpZmZlcmVuY2VZKSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHRvdWNoRW5kKCkge1xuICAgIGlmIChpLnNldHRpbmdzLnN3aXBlRWFzaW5nKSB7XG4gICAgICBjbGVhckludGVydmFsKGVhc2luZ0xvb3ApO1xuICAgICAgZWFzaW5nTG9vcCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoaS5pc0luaXRpYWxpemVkKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChlYXNpbmdMb29wKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNwZWVkLnggJiYgIXNwZWVkLnkpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKGVhc2luZ0xvb3ApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChNYXRoLmFicyhzcGVlZC54KSA8IDAuMDEgJiYgTWF0aC5hYnMoc3BlZWQueSkgPCAwLjAxKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChlYXNpbmdMb29wKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBhcHBseVRvdWNoTW92ZShzcGVlZC54ICogMzAsIHNwZWVkLnkgKiAzMCk7XG5cbiAgICAgICAgc3BlZWQueCAqPSAwLjg7XG4gICAgICAgIHNwZWVkLnkgKj0gMC44O1xuICAgICAgfSwgMTApO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbnYuc3VwcG9ydHNUb3VjaCkge1xuICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAndG91Y2hzdGFydCcsIHRvdWNoU3RhcnQpO1xuICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAndG91Y2htb3ZlJywgdG91Y2hNb3ZlKTtcbiAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ3RvdWNoZW5kJywgdG91Y2hFbmQpO1xuICB9IGVsc2UgaWYgKGVudi5zdXBwb3J0c0llUG9pbnRlcikge1xuICAgIGlmICh3aW5kb3cuUG9pbnRlckV2ZW50KSB7XG4gICAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ3BvaW50ZXJkb3duJywgdG91Y2hTdGFydCk7XG4gICAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ3BvaW50ZXJtb3ZlJywgdG91Y2hNb3ZlKTtcbiAgICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAncG9pbnRlcnVwJywgdG91Y2hFbmQpO1xuICAgIH0gZWxzZSBpZiAod2luZG93Lk1TUG9pbnRlckV2ZW50KSB7XG4gICAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ01TUG9pbnRlckRvd24nLCB0b3VjaFN0YXJ0KTtcbiAgICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAnTVNQb2ludGVyTW92ZScsIHRvdWNoTW92ZSk7XG4gICAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ01TUG9pbnRlclVwJywgdG91Y2hFbmQpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgZGVmYXVsdFNldHRpbmdzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKHtcbiAgaGFuZGxlcnM6IFsnY2xpY2stcmFpbCcsICdkcmFnLXRodW1iJywgJ2tleWJvYXJkJywgJ3doZWVsJywgJ3RvdWNoJ10sXG4gIG1heFNjcm9sbGJhckxlbmd0aDogbnVsbCxcbiAgbWluU2Nyb2xsYmFyTGVuZ3RoOiBudWxsLFxuICBzY3JvbGxpbmdUaHJlc2hvbGQ6IDEwMDAsXG4gIHNjcm9sbFhNYXJnaW5PZmZzZXQ6IDAsXG4gIHNjcm9sbFlNYXJnaW5PZmZzZXQ6IDAsXG4gIHN1cHByZXNzU2Nyb2xsWDogZmFsc2UsXG4gIHN1cHByZXNzU2Nyb2xsWTogZmFsc2UsXG4gIHN3aXBlRWFzaW5nOiB0cnVlLFxuICB1c2VCb3RoV2hlZWxBeGVzOiBmYWxzZSxcbiAgd2hlZWxQcm9wYWdhdGlvbjogdHJ1ZSxcbiAgd2hlZWxTcGVlZDogMSxcbn0pOyB9O1xuXG52YXIgaGFuZGxlcnMgPSB7XG4gICdjbGljay1yYWlsJzogY2xpY2tSYWlsLFxuICAnZHJhZy10aHVtYic6IGRyYWdUaHVtYixcbiAga2V5Ym9hcmQ6IGtleWJvYXJkLFxuICB3aGVlbDogd2hlZWwsXG4gIHRvdWNoOiB0b3VjaCxcbn07XG5cbnZhciBQZXJmZWN0U2Nyb2xsYmFyID0gZnVuY3Rpb24gUGVyZmVjdFNjcm9sbGJhcihlbGVtZW50LCB1c2VyU2V0dGluZ3MpIHtcbiAgdmFyIHRoaXMkMSA9IHRoaXM7XG4gIGlmICggdXNlclNldHRpbmdzID09PSB2b2lkIDAgKSB1c2VyU2V0dGluZ3MgPSB7fTtcblxuICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCk7XG4gIH1cblxuICBpZiAoIWVsZW1lbnQgfHwgIWVsZW1lbnQubm9kZU5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGVsZW1lbnQgaXMgc3BlY2lmaWVkIHRvIGluaXRpYWxpemUgUGVyZmVjdFNjcm9sbGJhcicpO1xuICB9XG5cbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xzLm1haW4pO1xuXG4gIHRoaXMuc2V0dGluZ3MgPSBkZWZhdWx0U2V0dGluZ3MoKTtcbiAgZm9yICh2YXIga2V5IGluIHVzZXJTZXR0aW5ncykge1xuICAgIHRoaXMuc2V0dGluZ3Nba2V5XSA9IHVzZXJTZXR0aW5nc1trZXldO1xuICB9XG5cbiAgdGhpcy5jb250YWluZXJXaWR0aCA9IG51bGw7XG4gIHRoaXMuY29udGFpbmVySGVpZ2h0ID0gbnVsbDtcbiAgdGhpcy5jb250ZW50V2lkdGggPSBudWxsO1xuICB0aGlzLmNvbnRlbnRIZWlnaHQgPSBudWxsO1xuXG4gIHZhciBmb2N1cyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbHMuc3RhdGUuZm9jdXMpOyB9O1xuICB2YXIgYmx1ciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbHMuc3RhdGUuZm9jdXMpOyB9O1xuXG4gIHRoaXMuaXNSdGwgPSBnZXQoZWxlbWVudCkuZGlyZWN0aW9uID09PSAncnRsJztcbiAgaWYgKHRoaXMuaXNSdGwgPT09IHRydWUpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xzLnJ0bCk7XG4gIH1cbiAgdGhpcy5pc05lZ2F0aXZlU2Nyb2xsID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3JpZ2luYWxTY3JvbGxMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgIHZhciByZXN1bHQgPSBudWxsO1xuICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IC0xO1xuICAgIHJlc3VsdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdCA8IDA7XG4gICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gb3JpZ2luYWxTY3JvbGxMZWZ0O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0pKCk7XG4gIHRoaXMubmVnYXRpdmVTY3JvbGxBZGp1c3RtZW50ID0gdGhpcy5pc05lZ2F0aXZlU2Nyb2xsXG4gICAgPyBlbGVtZW50LnNjcm9sbFdpZHRoIC0gZWxlbWVudC5jbGllbnRXaWR0aFxuICAgIDogMDtcbiAgdGhpcy5ldmVudCA9IG5ldyBFdmVudE1hbmFnZXIoKTtcbiAgdGhpcy5vd25lckRvY3VtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50O1xuXG4gIHRoaXMuc2Nyb2xsYmFyWFJhaWwgPSBkaXYoY2xzLmVsZW1lbnQucmFpbCgneCcpKTtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnNjcm9sbGJhclhSYWlsKTtcbiAgdGhpcy5zY3JvbGxiYXJYID0gZGl2KGNscy5lbGVtZW50LnRodW1iKCd4JykpO1xuICB0aGlzLnNjcm9sbGJhclhSYWlsLmFwcGVuZENoaWxkKHRoaXMuc2Nyb2xsYmFyWCk7XG4gIHRoaXMuc2Nyb2xsYmFyWC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgMCk7XG4gIHRoaXMuZXZlbnQuYmluZCh0aGlzLnNjcm9sbGJhclgsICdmb2N1cycsIGZvY3VzKTtcbiAgdGhpcy5ldmVudC5iaW5kKHRoaXMuc2Nyb2xsYmFyWCwgJ2JsdXInLCBibHVyKTtcbiAgdGhpcy5zY3JvbGxiYXJYQWN0aXZlID0gbnVsbDtcbiAgdGhpcy5zY3JvbGxiYXJYV2lkdGggPSBudWxsO1xuICB0aGlzLnNjcm9sbGJhclhMZWZ0ID0gbnVsbDtcbiAgdmFyIHJhaWxYU3R5bGUgPSBnZXQodGhpcy5zY3JvbGxiYXJYUmFpbCk7XG4gIHRoaXMuc2Nyb2xsYmFyWEJvdHRvbSA9IHBhcnNlSW50KHJhaWxYU3R5bGUuYm90dG9tLCAxMCk7XG4gIGlmIChpc05hTih0aGlzLnNjcm9sbGJhclhCb3R0b20pKSB7XG4gICAgdGhpcy5pc1Njcm9sbGJhclhVc2luZ0JvdHRvbSA9IGZhbHNlO1xuICAgIHRoaXMuc2Nyb2xsYmFyWFRvcCA9IHRvSW50KHJhaWxYU3R5bGUudG9wKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmlzU2Nyb2xsYmFyWFVzaW5nQm90dG9tID0gdHJ1ZTtcbiAgfVxuICB0aGlzLnJhaWxCb3JkZXJYV2lkdGggPVxuICAgIHRvSW50KHJhaWxYU3R5bGUuYm9yZGVyTGVmdFdpZHRoKSArIHRvSW50KHJhaWxYU3R5bGUuYm9yZGVyUmlnaHRXaWR0aCk7XG4gIC8vIFNldCByYWlsIHRvIGRpc3BsYXk6YmxvY2sgdG8gY2FsY3VsYXRlIG1hcmdpbnNcbiAgc2V0KHRoaXMuc2Nyb2xsYmFyWFJhaWwsIHsgZGlzcGxheTogJ2Jsb2NrJyB9KTtcbiAgdGhpcy5yYWlsWE1hcmdpbldpZHRoID1cbiAgICB0b0ludChyYWlsWFN0eWxlLm1hcmdpbkxlZnQpICsgdG9JbnQocmFpbFhTdHlsZS5tYXJnaW5SaWdodCk7XG4gIHNldCh0aGlzLnNjcm9sbGJhclhSYWlsLCB7IGRpc3BsYXk6ICcnIH0pO1xuICB0aGlzLnJhaWxYV2lkdGggPSBudWxsO1xuICB0aGlzLnJhaWxYUmF0aW8gPSBudWxsO1xuXG4gIHRoaXMuc2Nyb2xsYmFyWVJhaWwgPSBkaXYoY2xzLmVsZW1lbnQucmFpbCgneScpKTtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnNjcm9sbGJhcllSYWlsKTtcbiAgdGhpcy5zY3JvbGxiYXJZID0gZGl2KGNscy5lbGVtZW50LnRodW1iKCd5JykpO1xuICB0aGlzLnNjcm9sbGJhcllSYWlsLmFwcGVuZENoaWxkKHRoaXMuc2Nyb2xsYmFyWSk7XG4gIHRoaXMuc2Nyb2xsYmFyWS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgMCk7XG4gIHRoaXMuZXZlbnQuYmluZCh0aGlzLnNjcm9sbGJhclksICdmb2N1cycsIGZvY3VzKTtcbiAgdGhpcy5ldmVudC5iaW5kKHRoaXMuc2Nyb2xsYmFyWSwgJ2JsdXInLCBibHVyKTtcbiAgdGhpcy5zY3JvbGxiYXJZQWN0aXZlID0gbnVsbDtcbiAgdGhpcy5zY3JvbGxiYXJZSGVpZ2h0ID0gbnVsbDtcbiAgdGhpcy5zY3JvbGxiYXJZVG9wID0gbnVsbDtcbiAgdmFyIHJhaWxZU3R5bGUgPSBnZXQodGhpcy5zY3JvbGxiYXJZUmFpbCk7XG4gIHRoaXMuc2Nyb2xsYmFyWVJpZ2h0ID0gcGFyc2VJbnQocmFpbFlTdHlsZS5yaWdodCwgMTApO1xuICBpZiAoaXNOYU4odGhpcy5zY3JvbGxiYXJZUmlnaHQpKSB7XG4gICAgdGhpcy5pc1Njcm9sbGJhcllVc2luZ1JpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5zY3JvbGxiYXJZTGVmdCA9IHRvSW50KHJhaWxZU3R5bGUubGVmdCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5pc1Njcm9sbGJhcllVc2luZ1JpZ2h0ID0gdHJ1ZTtcbiAgfVxuICB0aGlzLnNjcm9sbGJhcllPdXRlcldpZHRoID0gdGhpcy5pc1J0bCA/IG91dGVyV2lkdGgodGhpcy5zY3JvbGxiYXJZKSA6IG51bGw7XG4gIHRoaXMucmFpbEJvcmRlcllXaWR0aCA9XG4gICAgdG9JbnQocmFpbFlTdHlsZS5ib3JkZXJUb3BXaWR0aCkgKyB0b0ludChyYWlsWVN0eWxlLmJvcmRlckJvdHRvbVdpZHRoKTtcbiAgc2V0KHRoaXMuc2Nyb2xsYmFyWVJhaWwsIHsgZGlzcGxheTogJ2Jsb2NrJyB9KTtcbiAgdGhpcy5yYWlsWU1hcmdpbkhlaWdodCA9XG4gICAgdG9JbnQocmFpbFlTdHlsZS5tYXJnaW5Ub3ApICsgdG9JbnQocmFpbFlTdHlsZS5tYXJnaW5Cb3R0b20pO1xuICBzZXQodGhpcy5zY3JvbGxiYXJZUmFpbCwgeyBkaXNwbGF5OiAnJyB9KTtcbiAgdGhpcy5yYWlsWUhlaWdodCA9IG51bGw7XG4gIHRoaXMucmFpbFlSYXRpbyA9IG51bGw7XG5cbiAgdGhpcy5yZWFjaCA9IHtcbiAgICB4OlxuICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0IDw9IDBcbiAgICAgICAgPyAnc3RhcnQnXG4gICAgICAgIDogZWxlbWVudC5zY3JvbGxMZWZ0ID49IHRoaXMuY29udGVudFdpZHRoIC0gdGhpcy5jb250YWluZXJXaWR0aFxuICAgICAgICA/ICdlbmQnXG4gICAgICAgIDogbnVsbCxcbiAgICB5OlxuICAgICAgZWxlbWVudC5zY3JvbGxUb3AgPD0gMFxuICAgICAgICA/ICdzdGFydCdcbiAgICAgICAgOiBlbGVtZW50LnNjcm9sbFRvcCA+PSB0aGlzLmNvbnRlbnRIZWlnaHQgLSB0aGlzLmNvbnRhaW5lckhlaWdodFxuICAgICAgICA/ICdlbmQnXG4gICAgICAgIDogbnVsbCxcbiAgfTtcblxuICB0aGlzLmlzQWxpdmUgPSB0cnVlO1xuXG4gIHRoaXMuc2V0dGluZ3MuaGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlck5hbWUpIHsgcmV0dXJuIGhhbmRsZXJzW2hhbmRsZXJOYW1lXSh0aGlzJDEpOyB9KTtcblxuICB0aGlzLmxhc3RTY3JvbGxUb3AgPSBNYXRoLmZsb29yKGVsZW1lbnQuc2Nyb2xsVG9wKTsgLy8gZm9yIG9uU2Nyb2xsIG9ubHlcbiAgdGhpcy5sYXN0U2Nyb2xsTGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDsgLy8gZm9yIG9uU2Nyb2xsIG9ubHlcbiAgdGhpcy5ldmVudC5iaW5kKHRoaXMuZWxlbWVudCwgJ3Njcm9sbCcsIGZ1bmN0aW9uIChlKSB7IHJldHVybiB0aGlzJDEub25TY3JvbGwoZSk7IH0pO1xuICB1cGRhdGVHZW9tZXRyeSh0aGlzKTtcbn07XG5cblBlcmZlY3RTY3JvbGxiYXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSAoKSB7XG4gIGlmICghdGhpcy5pc0FsaXZlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gUmVjYWxjdWF0ZSBuZWdhdGl2ZSBzY3JvbGxMZWZ0IGFkanVzdG1lbnRcbiAgdGhpcy5uZWdhdGl2ZVNjcm9sbEFkanVzdG1lbnQgPSB0aGlzLmlzTmVnYXRpdmVTY3JvbGxcbiAgICA/IHRoaXMuZWxlbWVudC5zY3JvbGxXaWR0aCAtIHRoaXMuZWxlbWVudC5jbGllbnRXaWR0aFxuICAgIDogMDtcblxuICAvLyBSZWNhbGN1bGF0ZSByYWlsIG1hcmdpbnNcbiAgc2V0KHRoaXMuc2Nyb2xsYmFyWFJhaWwsIHsgZGlzcGxheTogJ2Jsb2NrJyB9KTtcbiAgc2V0KHRoaXMuc2Nyb2xsYmFyWVJhaWwsIHsgZGlzcGxheTogJ2Jsb2NrJyB9KTtcbiAgdGhpcy5yYWlsWE1hcmdpbldpZHRoID1cbiAgICB0b0ludChnZXQodGhpcy5zY3JvbGxiYXJYUmFpbCkubWFyZ2luTGVmdCkgK1xuICAgIHRvSW50KGdldCh0aGlzLnNjcm9sbGJhclhSYWlsKS5tYXJnaW5SaWdodCk7XG4gIHRoaXMucmFpbFlNYXJnaW5IZWlnaHQgPVxuICAgIHRvSW50KGdldCh0aGlzLnNjcm9sbGJhcllSYWlsKS5tYXJnaW5Ub3ApICtcbiAgICB0b0ludChnZXQodGhpcy5zY3JvbGxiYXJZUmFpbCkubWFyZ2luQm90dG9tKTtcblxuICAvLyBIaWRlIHNjcm9sbGJhcnMgbm90IHRvIGFmZmVjdCBzY3JvbGxXaWR0aCBhbmQgc2Nyb2xsSGVpZ2h0XG4gIHNldCh0aGlzLnNjcm9sbGJhclhSYWlsLCB7IGRpc3BsYXk6ICdub25lJyB9KTtcbiAgc2V0KHRoaXMuc2Nyb2xsYmFyWVJhaWwsIHsgZGlzcGxheTogJ25vbmUnIH0pO1xuXG4gIHVwZGF0ZUdlb21ldHJ5KHRoaXMpO1xuXG4gIHByb2Nlc3NTY3JvbGxEaWZmKHRoaXMsICd0b3AnLCAwLCBmYWxzZSwgdHJ1ZSk7XG4gIHByb2Nlc3NTY3JvbGxEaWZmKHRoaXMsICdsZWZ0JywgMCwgZmFsc2UsIHRydWUpO1xuXG4gIHNldCh0aGlzLnNjcm9sbGJhclhSYWlsLCB7IGRpc3BsYXk6ICcnIH0pO1xuICBzZXQodGhpcy5zY3JvbGxiYXJZUmFpbCwgeyBkaXNwbGF5OiAnJyB9KTtcbn07XG5cblBlcmZlY3RTY3JvbGxiYXIucHJvdG90eXBlLm9uU2Nyb2xsID0gZnVuY3Rpb24gb25TY3JvbGwgKGUpIHtcbiAgaWYgKCF0aGlzLmlzQWxpdmUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB1cGRhdGVHZW9tZXRyeSh0aGlzKTtcbiAgcHJvY2Vzc1Njcm9sbERpZmYodGhpcywgJ3RvcCcsIHRoaXMuZWxlbWVudC5zY3JvbGxUb3AgLSB0aGlzLmxhc3RTY3JvbGxUb3ApO1xuICBwcm9jZXNzU2Nyb2xsRGlmZihcbiAgICB0aGlzLFxuICAgICdsZWZ0JyxcbiAgICB0aGlzLmVsZW1lbnQuc2Nyb2xsTGVmdCAtIHRoaXMubGFzdFNjcm9sbExlZnRcbiAgKTtcblxuICB0aGlzLmxhc3RTY3JvbGxUb3AgPSBNYXRoLmZsb29yKHRoaXMuZWxlbWVudC5zY3JvbGxUb3ApO1xuICB0aGlzLmxhc3RTY3JvbGxMZWZ0ID0gdGhpcy5lbGVtZW50LnNjcm9sbExlZnQ7XG59O1xuXG5QZXJmZWN0U2Nyb2xsYmFyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSAoKSB7XG4gIGlmICghdGhpcy5pc0FsaXZlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5ldmVudC51bmJpbmRBbGwoKTtcbiAgcmVtb3ZlKHRoaXMuc2Nyb2xsYmFyWCk7XG4gIHJlbW92ZSh0aGlzLnNjcm9sbGJhclkpO1xuICByZW1vdmUodGhpcy5zY3JvbGxiYXJYUmFpbCk7XG4gIHJlbW92ZSh0aGlzLnNjcm9sbGJhcllSYWlsKTtcbiAgdGhpcy5yZW1vdmVQc0NsYXNzZXMoKTtcblxuICAvLyB1bnNldCBlbGVtZW50c1xuICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICB0aGlzLnNjcm9sbGJhclggPSBudWxsO1xuICB0aGlzLnNjcm9sbGJhclkgPSBudWxsO1xuICB0aGlzLnNjcm9sbGJhclhSYWlsID0gbnVsbDtcbiAgdGhpcy5zY3JvbGxiYXJZUmFpbCA9IG51bGw7XG5cbiAgdGhpcy5pc0FsaXZlID0gZmFsc2U7XG59O1xuXG5QZXJmZWN0U2Nyb2xsYmFyLnByb3RvdHlwZS5yZW1vdmVQc0NsYXNzZXMgPSBmdW5jdGlvbiByZW1vdmVQc0NsYXNzZXMgKCkge1xuICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gdGhpcy5lbGVtZW50LmNsYXNzTmFtZVxuICAgIC5zcGxpdCgnICcpXG4gICAgLmZpbHRlcihmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gIW5hbWUubWF0Y2goL15wcyhbLV9dLit8KSQvKTsgfSlcbiAgICAuam9pbignICcpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGVyZmVjdFNjcm9sbGJhcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBlcmZlY3Qtc2Nyb2xsYmFyLmVzbS5qcy5tYXBcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCIvLyBMb2FkZWQgYWZ0ZXIgQ29yZVVJIGFwcC5qcyIsImltcG9ydCAnQGNvcmV1aS9jb3JldWknXG4kKFwiLm1vZGFsXCIpLm9uKFwic2hvdy5icy5tb2RhbFwiLCBmdW5jdGlvbihldmVudCl7XG4gICAgdmFyIGJ1dHRvbiA9ICQoZXZlbnQucmVsYXRlZFRhcmdldCk7XG4gICAgdmFyIGFjdGlvbiA9IGJ1dHRvbi5hdHRyKCdocmVmJyk7XG4gICAgdmFyIG1vZGFsICA9ICQodGhpcyk7XG4gICAgaWYgKHR5cGVvZiBhY3Rpb24gIT09ICd1bmRlZmluZWQnICYmIGFjdGlvbiAhPT0gJycpe1xuICAgICAgICBtb2RhbC5maW5kKFwiLm1vZGFsLWNvbnRlbnRcIikubG9hZChhY3Rpb24pO1xuICAgIH1cbn0pOyIsIi8qKlxuICogRmlyc3Qgd2Ugd2lsbCBsb2FkIGFsbCBvZiB0aGlzIHByb2plY3QncyBKYXZhU2NyaXB0IGRlcGVuZGVuY2llcyB3aGljaFxuICogaW5jbHVkZXMgVnVlIGFuZCBvdGhlciBsaWJyYXJpZXMuIEl0IGlzIGEgZ3JlYXQgc3RhcnRpbmcgcG9pbnQgd2hlblxuICogYnVpbGRpbmcgcm9idXN0LCBwb3dlcmZ1bCB3ZWIgYXBwbGljYXRpb25zIHVzaW5nIFZ1ZSBhbmQgTGFyYXZlbC5cbiAqL1xuXG4vLyBMb2FkZWQgYmVmb3JlIENvcmVVSSBhcHAuanNcbmltcG9ydCAnLi4vYm9vdHN0cmFwJztcbmltcG9ydCAncGFjZSc7XG5pbXBvcnQgJy4uL3BsdWdpbnMnO1xuIiwiLyoqXG4gKiBUaGlzIGJvb3RzdHJhcCBmaWxlIGlzIHVzZWQgZm9yIGJvdGggZnJvbnRlbmQgYW5kIGJhY2tlbmRcbiAqL1xuXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICdwb3BwZXIuanMnOyAvLyBSZXF1aXJlZCBmb3IgQlM0XG5pbXBvcnQgJ2Jvb3RzdHJhcCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC1zd2l0Y2gnO1xuXG4vKipcbiAqIFdlJ2xsIGxvYWQgalF1ZXJ5IGFuZCB0aGUgQm9vdHN0cmFwIGpRdWVyeSBwbHVnaW4gd2hpY2ggcHJvdmlkZXMgc3VwcG9ydFxuICogZm9yIEphdmFTY3JpcHQgYmFzZWQgQm9vdHN0cmFwIGZlYXR1cmVzIHN1Y2ggYXMgbW9kYWxzIGFuZCB0YWJzLiBUaGlzXG4gKiBjb2RlIG1heSBiZSBtb2RpZmllZCB0byBmaXQgdGhlIHNwZWNpZmljIG5lZWRzIG9mIHlvdXIgYXBwbGljYXRpb24uXG4gKi9cblxud2luZG93LiQgPSB3aW5kb3cualF1ZXJ5ID0gJDtcbndpbmRvdy5Td2FsID0gU3dhbDtcbndpbmRvdy5fID0gXzsgLy8gTG9kYXNoXG5cbi8qKlxuICogV2UnbGwgbG9hZCB0aGUgYXhpb3MgSFRUUCBsaWJyYXJ5IHdoaWNoIGFsbG93cyB1cyB0byBlYXNpbHkgaXNzdWUgcmVxdWVzdHNcbiAqIHRvIG91ciBMYXJhdmVsIGJhY2stZW5kLiBUaGlzIGxpYnJhcnkgYXV0b21hdGljYWxseSBoYW5kbGVzIHNlbmRpbmcgdGhlXG4gKiBDU1JGIHRva2VuIGFzIGEgaGVhZGVyIGJhc2VkIG9uIHRoZSB2YWx1ZSBvZiB0aGUgXCJYU1JGXCIgdG9rZW4gY29va2llLlxuICovXG5cbndpbmRvdy5heGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG5cbndpbmRvdy5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1SZXF1ZXN0ZWQtV2l0aCddID0gJ1hNTEh0dHBSZXF1ZXN0JztcblxuLyoqXG4gKiBFY2hvIGV4cG9zZXMgYW4gZXhwcmVzc2l2ZSBBUEkgZm9yIHN1YnNjcmliaW5nIHRvIGNoYW5uZWxzIGFuZCBsaXN0ZW5pbmdcbiAqIGZvciBldmVudHMgdGhhdCBhcmUgYnJvYWRjYXN0IGJ5IExhcmF2ZWwuIEVjaG8gYW5kIGV2ZW50IGJyb2FkY2FzdGluZ1xuICogYWxsb3dzIHlvdXIgdGVhbSB0byBlYXNpbHkgYnVpbGQgcm9idXN0IHJlYWwtdGltZSB3ZWIgYXBwbGljYXRpb25zLlxuICovXG5cbi8vIGltcG9ydCBFY2hvIGZyb20gJ2xhcmF2ZWwtZWNobyc7XG5cbi8vIHdpbmRvdy5QdXNoZXIgPSByZXF1aXJlKCdwdXNoZXItanMnKTtcblxuLy8gd2luZG93LkVjaG8gPSBuZXcgRWNobyh7XG4vLyAgICAgYnJvYWRjYXN0ZXI6ICdwdXNoZXInLFxuLy8gICAgIGtleTogcHJvY2Vzcy5lbnYuTUlYX1BVU0hFUl9BUFBfS0VZLFxuLy8gICAgIGNsdXN0ZXI6IHByb2Nlc3MuZW52Lk1JWF9QVVNIRVJfQVBQX0NMVVNURVIsXG4vLyAgICAgZm9yY2VUTFM6IHRydWVcbi8vIH0pO1xuIiwiLyoqXG4gKiBBbGxvd3MgeW91IHRvIGFkZCBkYXRhLW1ldGhvZD1cIk1FVEhPRCB0byBsaW5rcyB0byBhdXRvbWF0aWNhbGx5IGluamVjdCBhIGZvcm1cbiAqIHdpdGggdGhlIG1ldGhvZCBvbiBjbGlja1xuICpcbiAqIEV4YW1wbGU6IDxhIGhyZWY9XCJ7e3JvdXRlKCdjdXN0b21lcnMuZGVzdHJveScsICRjdXN0b21lci0+aWQpfX1cIlxuICogZGF0YS1tZXRob2Q9XCJkZWxldGVcIiBuYW1lPVwiZGVsZXRlX2l0ZW1cIj5EZWxldGU8L2E+XG4gKlxuICogSW5qZWN0cyBhIGZvcm0gd2l0aCB0aGF0J3MgZmlyZWQgb24gY2xpY2sgb2YgdGhlIGxpbmsgd2l0aCBhIERFTEVURSByZXF1ZXN0LlxuICogR29vZCBiZWNhdXNlIHlvdSBkb24ndCBoYXZlIHRvIGRpcnR5IHlvdXIgSFRNTCB3aXRoIGRlbGV0ZSBmb3JtcyBldmVyeXdoZXJlLlxuICovXG5mdW5jdGlvbiBhZGREZWxldGVGb3JtcygpIHtcbiAgICAkKCdbZGF0YS1tZXRob2RdJykuYXBwZW5kKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCEkKHRoaXMpLmZpbmQoJ2Zvcm0nKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcXG48Zm9ybSBhY3Rpb249J1wiICsgJCh0aGlzKS5hdHRyKCdocmVmJykgKyBcIicgbWV0aG9kPSdQT1NUJyBuYW1lPSdkZWxldGVfaXRlbScgc3R5bGU9J2Rpc3BsYXk6bm9uZSc+XFxuXCIgK1xuICAgICAgICAgICAgICAgIFwiPGlucHV0IHR5cGU9J2hpZGRlbicgbmFtZT0nX21ldGhvZCcgdmFsdWU9J1wiICsgJCh0aGlzKS5hdHRyKCdkYXRhLW1ldGhvZCcpICsgXCInPlxcblwiICtcbiAgICAgICAgICAgICAgICBcIjxpbnB1dCB0eXBlPSdoaWRkZW4nIG5hbWU9J190b2tlbicgdmFsdWU9J1wiICsgJCgnbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpLmF0dHIoJ2NvbnRlbnQnKSArIFwiJz5cXG5cIiArXG4gICAgICAgICAgICAgICAgJzwvZm9ybT5cXG4nO1xuICAgICAgICB9IGVsc2UgeyByZXR1cm4gJycgfVxuICAgIH0pXG4gICAgICAgIC5hdHRyKCdocmVmJywgJyMnKVxuICAgICAgICAuYXR0cignc3R5bGUnLCAnY3Vyc29yOnBvaW50ZXI7JylcbiAgICAgICAgLmF0dHIoJ29uY2xpY2snLCAnJCh0aGlzKS5maW5kKFwiZm9ybVwiKS5zdWJtaXQoKTsnKTtcbn1cblxuLyoqXG4gKiBQbGFjZSBhbnkgalF1ZXJ5L2hlbHBlciBwbHVnaW5zIGluIGhlcmUuXG4gKi9cbiQoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIEFkZCB0aGUgZGF0YS1tZXRob2Q9XCJkZWxldGVcIiBmb3JtcyB0byBhbGwgZGVsZXRlIGxpbmtzXG4gICAgICovXG4gICAgYWRkRGVsZXRlRm9ybXMoKTtcblxuICAgIC8qKlxuICAgICAqIERpc2FibGUgYWxsIHN1Ym1pdCBidXR0b25zIG9uY2UgY2xpY2tlZFxuICAgICAqL1xuICAgICQoJy5mb3JtX2Rpc2FibGVkX3N1Ym1pdCcpLnN1Ym1pdChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuZmluZCgnaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICQodGhpcykuZmluZCgnYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEdlbmVyaWMgY29uZmlybSBmb3JtIGRlbGV0ZSB1c2luZyBTd2VldCBBbGVydFxuICAgICAqL1xuICAgICQoJ2JvZHknKS5vbignc3VibWl0JywgJ2Zvcm1bbmFtZT1kZWxldGVfaXRlbV0nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgZm9ybSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGxpbmsgPSAkKCdhW2RhdGEtbWV0aG9kPVwiZGVsZXRlXCJdJyk7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IChsaW5rLmF0dHIoJ2RhdGEtdHJhbnMtYnV0dG9uLWNhbmNlbCcpKSA/IGxpbmsuYXR0cignZGF0YS10cmFucy1idXR0b24tY2FuY2VsJykgOiAnQ2FuY2VsJztcbiAgICAgICAgY29uc3QgY29uZmlybSA9IChsaW5rLmF0dHIoJ2RhdGEtdHJhbnMtYnV0dG9uLWNvbmZpcm0nKSkgPyBsaW5rLmF0dHIoJ2RhdGEtdHJhbnMtYnV0dG9uLWNvbmZpcm0nKSA6ICdZZXMsIGRlbGV0ZSc7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gKGxpbmsuYXR0cignZGF0YS10cmFucy10aXRsZScpKSA/IGxpbmsuYXR0cignZGF0YS10cmFucy10aXRsZScpIDogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBpdGVtPyc7XG5cbiAgICAgICAgU3dhbC5taXhpbih7XG4gICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXN1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tZGFuZ2VyIG1yLTInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgIH0pLmZpcmUoe1xuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBjb25maXJtLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogY2FuY2VsLFxuICAgICAgICAgICAgaWNvbjogJ3dhcm5pbmcnLFxuICAgICAgICAgICAgcmV2ZXJzZUJ1dHRvbnM6IHRydWVcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICByZXN1bHQudmFsdWUgJiYgZm9ybS5zdWJtaXQoKTtcbiAgICAgICAgfSk7XG4gICAgfSkub24oJ2NsaWNrJywgJ2FbbmFtZT1jb25maXJtX2l0ZW1dJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdlbmVyaWMgJ2FyZSB5b3Ugc3VyZScgY29uZmlybSBib3hcbiAgICAgICAgICovXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBsaW5rICAgID0gJCh0aGlzKTtcbiAgICAgICAgY29uc3QgdGl0bGUgICA9IChsaW5rLmF0dHIoJ2RhdGEtdHJhbnMtdGl0bGUnKSkgPyBsaW5rLmF0dHIoJ2RhdGEtdHJhbnMtdGl0bGUnKSA6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZG8gdGhpcz8nO1xuICAgICAgICBjb25zdCB0ZXh0ICAgID0gKGxpbmsuYXR0cignZGF0YS10cmFucy10aXRsZScpKSA/IGxpbmsuYXR0cignZGF0YS10cmFucy10ZXh0JykgOiAnJztcbiAgICAgICAgY29uc3QgY2FuY2VsICA9IChsaW5rLmF0dHIoJ2RhdGEtdHJhbnMtYnV0dG9uLWNhbmNlbCcpKSA/IGxpbmsuYXR0cignZGF0YS10cmFucy1idXR0b24tY2FuY2VsJykgOiAnQ2FuY2VsJztcbiAgICAgICAgY29uc3QgY29uZmlybSA9IChsaW5rLmF0dHIoJ2RhdGEtdHJhbnMtYnV0dG9uLWNvbmZpcm0nKSkgPyBsaW5rLmF0dHIoJ2RhdGEtdHJhbnMtYnV0dG9uLWNvbmZpcm0nKSA6ICdDb250aW51ZSc7XG5cbiAgICAgICAgU3dhbC5taXhpbih7XG4gICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXN1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tZGFuZ2VyIG1yLTInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgIH0pLmZpcmUoe1xuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgdGV4dDogdGV4dCxcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogY29uZmlybSxcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IGNhbmNlbCxcbiAgICAgICAgICAgIGljb246ICdpbmZvJyxcbiAgICAgICAgICAgIHJldmVyc2VCdXR0b25zOiB0cnVlXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgcmVzdWx0LnZhbHVlICYmIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24obGluay5hdHRyKCdocmVmJykpO1xuICAgICAgICB9KTtcbiAgICB9KS5vbignc3VibWl0JywgJ2Zvcm1bbmFtZT1jb25maXJtX2l0ZW1dJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IGZvcm0gPSB0aGlzO1xuICAgICAgICBjb25zdCBsaW5rID0gJCgnYnV0dG9uW25hbWU9XCJjb25maXJtXCJdJyk7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IChsaW5rLmF0dHIoJ2RhdGEtdHJhbnMtYnV0dG9uLWNhbmNlbCcpKSA/IGxpbmsuYXR0cignZGF0YS10cmFucy1idXR0b24tY2FuY2VsJykgOiAnQ2FuY2VsJztcbiAgICAgICAgY29uc3QgY29uZmlybSA9IChsaW5rLmF0dHIoJ2RhdGEtdHJhbnMtYnV0dG9uLWNvbmZpcm0nKSkgPyBsaW5rLmF0dHIoJ2RhdGEtdHJhbnMtYnV0dG9uLWNvbmZpcm0nKSA6ICdZZXMsIGRlbGV0ZSc7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gKGxpbmsuYXR0cignZGF0YS10cmFucy10aXRsZScpKSA/IGxpbmsuYXR0cignZGF0YS10cmFucy10aXRsZScpIDogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBpdGVtPyc7XG5cbiAgICAgICAgU3dhbC5taXhpbih7XG4gICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXN1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tZGFuZ2VyIG1yLTInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgIH0pLmZpcmUoe1xuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBjb25maXJtLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogY2FuY2VsLFxuICAgICAgICAgICAgaWNvbjogJ2luZm8nLFxuICAgICAgICAgICAgcmV2ZXJzZUJ1dHRvbnM6IHRydWVcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICByZXN1bHQudmFsdWUgJiYgZm9ybS5zdWJtaXQoKTtcbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxuICAgICQoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKCk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=