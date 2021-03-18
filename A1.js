var n = Number(prompt("Nhập vào số n:"));
var InputNumber = Number(prompt("Nhập số cần tìm số đối diện:"));
function findOppositeNumber (n, InputNumber) {
    if (n % 2 == 1) return;
    else return (InputNumber + n / 2) % n;
}
alert("Số đối diện của " + InputNumber + " là: " + findOppositeNumber(n, InputNumber));
