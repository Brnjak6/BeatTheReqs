'use strict';
let priceTotal = document.getElementById('price-total')
const sumButtonBox = document.querySelector('.button__sum')
const sumButton = document.querySelector('.button-sum-btn')
const selectAll = document.querySelectorAll('.selection__box')
const priceAll = document.querySelectorAll('.price')
const cpu = document.getElementById('cpu')
const motherboard = document.getElementById('mobo')
const gpu = document.getElementById('gpu')
const ram = document.getElementById('ram')
const price = document.querySelector('.price')
const submitMessage = document.querySelector('.submit__message')
const accessField = document.querySelector('.access')
const accessFieldBtn = document.querySelector('.access-btn')


let total = 0;

selectAll.forEach(choice => choice.addEventListener('click', function(e) {
    const priceTarget = e.target.closest('.selection').querySelector('.price');
    priceTarget.textContent = this.selectedOptions[0].dataset.price;
}))

sumButton.addEventListener('click', function(e) {
    for (let i=0; i<priceAll.length; i++){
        if(priceAll[i].innerHTML == 0) {
            return priceTotal.innerHTML = 'Input missing...';
        } else {
            total += parseInt(priceAll[i].innerHTML);
        }
      }

      if(cpu.value === motherboard.value) {
        sumButtonBox.classList.add('hidden');
        submitMessage.classList.remove('hidden');
        accessField.classList.remove('hidden');
        priceTotal.innerHTML = total;
        cpu.style.border = 'none';
        motherboard.style.border = 'none'
        priceTotal.style.color = '#000'
      } else {
        total = 0;
        priceTotal.textContent = 'Invalid combination'
        priceTotal.style.color = 'red'
        cpu.style.border = '4px solid red';
        motherboard.style.border = '4px solid red';
      }
   
})


