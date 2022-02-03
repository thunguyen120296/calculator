const months = ['Chọn mức vay', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const loans = [
    'Chọn tháng trả',
    1000000,
    2000000,
    3000000,
    4000000,
    5000000,
    6000000,
    7000000,
    8000000,
    9000000,
    10000000
]
const mucvay = document.getElementById('mucvay');
const thangvay = document.getElementById('thang');
const sotien = document.getElementById('sotien');
window.addEventListener('load', function () {
    showTienVay();
})

function showTienVay() {
    mucvay.innerHTML = loans.map((item) => {
        return `<option value=${item} class="loan-item">${item}</option>`
    }).join('');

    thangvay.innerHTML = months.map((item) => {
        return `<option value="${item}" class="thangvay-item">${item}</option>`;
    }).join('');
}

function getItem() {
    const vaytien = mucvay.value;
    const thang = thangvay.value;
    const total = (vaytien / thang) * 1.15;
    sotien.innerHTML = `${total.toFixed(2)}đ`;
}