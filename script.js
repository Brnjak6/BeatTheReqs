'use strict';
const cpuSelect = document.getElementById('cpu')
const gpuSelect = document.getElementById('gpu')
const ramSelect = document.getElementById('ram')
let priceTotal = document.getElementById('price-total')
const sumButton = document.querySelector('.button-sum')
const selectedComponents = document.querySelectorAll('.selection__box')
const prices = document.querySelectorAll('.price')

// First approach...
// cpuSelect.addEventListener('click', function() {
//    cpuPrice.innerHTML = cpuSelect.selectedOptions[0].dataset.price;
// })
// gpuSelect.addEventListener('click', function() {
//    gpuPrice.innerText = gpuSelect.selectedOptions[0].dataset.price
// })
// ramSelect.addEventListener('click', function() {
//    ramPrice.innerText = ramSelect.selectedOptions[0].dataset.price
// })

selectedComponents.forEach(item => item.addEventListener('click', function(e) {
    const price = e.target.closest('.selection').querySelector('.price')
    price.innerHTML = parseInt(this.selectedOptions[0].dataset.price);
}))

