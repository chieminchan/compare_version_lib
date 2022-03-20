(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.index = global.index || {}, global.index.umd = global.index.umd || {}, global.index.umd.js = {})));
})(this, (function (exports) { 'use strict';

    /*
     * compare version
     * 比较版本号，版本号规则x.y.z，xyz均为大于等于0的整数
     * 0: 相等
     * 1: 大于
     * -1: 小于
     */
    const COMPARE_RESULT_MAP = {
        BIGGER: 1,
        SMALLER: -1,
        SAME: 0
    };
    function versionCompare(version1, version2) {
        const version1Arr = version1.split('.');
        const version2Arr = version2.split('.');
        const maxLength = Math.max(version1Arr.length, version2Arr.length);
        for (let i = 0; i < maxLength; i++) {
            const num1 = +version1Arr[i] || 0;
            const num2 = +version2Arr[i] || 0;
            if (num1 !== num2) {
                return num1 > num2 ? COMPARE_RESULT_MAP.BIGGER : COMPARE_RESULT_MAP.SMALLER;
            }
        }
        return COMPARE_RESULT_MAP.SAME;
    }

    exports.versionCompare = versionCompare;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
