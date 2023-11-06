/**
 * base64 encoded utf8 string
 *
 * @param str - base64 encoded string
 * @returns utf8 string
 */
export function base64Decode(str) {
    return Buffer.from(str, 'base64').toString('utf8');
}
export function getAppstate(EState) {
    return JSON.parse(base64Decode(EState));
}
