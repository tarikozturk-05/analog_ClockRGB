const saat =document.querySelector(".hour")
const saniye =document.querySelector(".second")
const dakika =document.querySelector(".minute")

function tictok() {
    let second =new Date().getSeconds();
    let hour =new Date().getHours();
    let minute =new Date().getMinutes();



    saniye.style.transform = `rotate(${second * 6}deg)`;
    dakika.style.transform = `rotate(${ minute * 6}deg)`;
    saat.style.transform = `rotate(${hour * 30}deg)`;
}
setInterval(tictok, 1000);