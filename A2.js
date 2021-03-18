var string1 = prompt("Nhập vào chuỗi 1: ");
var string2 = prompt("Nhập vào chuỗi 2: ");
function merge2String(string1, string2) {
    let res = "";
    let arr1 = [...string1];
    let arr2 = [...string2];
    let lengthArr1 = arr1.length;
    let lengthArr2 = arr2.length;
    let max = lengthArr1 > lengthArr2 ? lengthArr1 : lengthArr2;
    for (let i = 0; i < max; i++) {
        if (arr1[i] != null) {
            res += arr1[i];
        }
        if (arr2[i] != null) {
            res += arr2[i];
        }
    }
    return res;
}
alert(merge2String(string1, string2));