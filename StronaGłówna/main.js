let section = [...document.querySelectorAll('section')];
const btn = document.querySelector('button');
let i=0;
const start = () => {
    console.log('działa');
   
    if(i<section.length){
        let random = Math.floor(Math.random()* 255);
        let random1 = Math.floor(Math.random()* 255);
        let random2 = Math.floor(Math.random()* 255);
        section[i].style.backgroundColor = `rgb(${random},${random1},${random2})`;
        i++;
    } else {
        i=0;
    }
}

const changeColor = () => {
    window.setInterval(start,2000)
}


window.setInterval(start,2000)
