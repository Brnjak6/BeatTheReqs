'use strict';
let priceTotal = document.getElementById('price-total')
const sumButton = document.querySelector('.button-sum-btn')
const selectAll = document.querySelectorAll('.selection__box')
const priceAll = document.querySelectorAll('.price')
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

selectAll.forEach(item => item.addEventListener('click', function(e) {
    const priceTarget = e.target.closest('.selection').querySelector('.price');
    priceTarget.textContent = this.selectedOptions[0].dataset.price;
}))

sumButton.addEventListener('click', function() {
    let total = 0;

    for (let i=0; i<priceAll.length; i++){
        if(priceAll[i].innerHTML == 0) {
            return priceTotal.innerHTML = 'Missing input'

        } else {
            total += parseInt(priceAll[i].innerHTML);
        }
      }
      return priceTotal.innerHTML = total;
})

