
const count1 = document.getElementById('count1');
const count2 = document.getElementById('count2');
const count3 = document.getElementById('count3');

let clicks1 = 0;
let clicks2 = 0;
let clicks3 = 0;

function countClick(button_num) {
    
  if (button_num === 'count1') {
    clicks1 += 1;
    count1.textContent = clicks1;
  } else if (button_num === 'count2') {
    clicks2 += 1;
    count2.textContent = clicks2;
  } else if (button_num === 'count3') {
    clicks3 += 1;
    count3.textContent = clicks3;
  }
}
