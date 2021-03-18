let Roll = document.getElementById('btn');
let txtNumber = document.getElementById('ba');
let randomNumbe = getRandomNumber();
let count = 0;
function getRandomNumber() {
    randomNumber = Number(Math.floor(Math.random() * 10) + 1);
    return randomNumber;
}
function checkInputNumber() {
    let number = txtNumber.value;
    while (true) {
        if (number === "") {
            alert('Vui lòng nhập số');
            break;
        } else if (isNaN(number)) {
            alert('Vui lòng nhập số!');
            break;
        } else if (number < 1 || number > 10) {
            alert('Số nhập cần nằm trong khoảng 0-10');
            break;
        } else {
            count++;
            return number;
        }
    }
}
Roll.addEventListener('click', () => {
    let number = checkInputNumber();
    if (number == randomNumber) {
        alert('Chúc mừng, bạn đã đoán đúng số may mắn!');
        count = 0;
    }
    if (!isNaN(number) && (number <= 10 && number >= 1)) {
        alert(`Sai! Còn lại ${3 - count} lần thử`);
    }
    if (count == 3) {
        alert(`Bạn đã thất bại! Con số may mắn là:  ${randomNumber}`);
        alert("Chơi lại nào!!!")
        window.location.assign("B.html");
    }
});