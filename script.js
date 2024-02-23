const count1 = document.getElementById('count1');
let clicks = 0;


function countClick() {
    clicks += 1
    count1.textContent = clicks;
    console.log(clicks)
}