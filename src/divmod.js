/**
 * @description 以两个整数为参数，在作整数除法时，返回商和余数。实现参照Python语言同名函数
 * @param {number} a 被除数，必须为整数
 * @param {number} b 除数，必须为整数且不为0
 * @returns 商和余数的元组，左商右余数。 [商, 余数]
 */
export default function divmod (a, b) {
    // 类型检查
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Two params must all be number!');
    }

    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new TypeError('Two params shoule all be int!')
    }

    // 除数不能为0
    if (!b) {
        throw new Error('The second param cannot be 0!');
    }

    return [Math.floor(a / b), a % b];
}