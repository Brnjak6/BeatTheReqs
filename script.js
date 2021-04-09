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
const selectionContainer = document.querySelector('.selection')
const questions = document.querySelectorAll('.question')
const question = document.querySelector('.question')
const wrongs = document.querySelectorAll('.wrong')


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

      submitMessage.textContent = `Great! Your system is ${total < 750 ? 'good office machine with some, little bit, outdated components' : 'definitely above average!'}. Now 3 questions are ready for you.`

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

accessFieldBtn.addEventListener('click', function() {
    accessField.classList.add('hidden');

    questions.forEach(q => q.classList.remove('hidden'))
})

questions.forEach(q => q.addEventListener('click', function(e) {
    const clickedBox = e.target.closest('.question')
    const correct = clickedBox.querySelector('.correct');
    if (e.target == correct) {
        this.textContent = 'Correct!'
        this.style.opacity = 0;
        setTimeout(() => {
            this.style.display = 'none'
        }, 1000);
    }
}))

wrongs.forEach(wrong => wrong.addEventListener('click', function() {
    wrong.textContent = 'false'
    wrong.style.opacity = '0.3'
}))
