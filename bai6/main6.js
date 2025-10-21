function ketqua() {
    let x = document.getElementById('inputNumber').value;
    x2 = x * x;
    document.getElementById('ket qua').innerHTML = x2;
}
function ketqua1() {
    let x = document.getElementById('inputNumber1').value;
    let y = 0;
    for (i = 0; i < x; i++) {
        y += i
    }
    document.getElementById('ket qua1').innerHTML = y;

}