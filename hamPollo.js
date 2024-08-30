const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const num = document.querySelector('.num');

let i = 0;

plus.addEventListener("click", () => {
    i++;
    num.innerHTML = i;
    console.log(i);
   
});

minus.addEventListener("click", () => {
    if(parseInt(num.innerHTML) > 0) {
        i--;
        num.innerHTML = i
    }
});