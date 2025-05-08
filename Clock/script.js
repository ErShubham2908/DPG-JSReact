let head = document.getElementsByTagName('span');
let btn = document.getElementsByTagName('button')

let intervalId = false ;
// console.log(date);

function showTime(){
        let date = new Date();

        if(date.getHours() >= 12){
            head[0].textContent = `${date.getHours() - 12}`;
            head[3].innerHTML = ` PM`
        }else if(date.getHours() < 10){
            head[0].textContent = `0${date.getHours()}`;
        }else{
            head[0].textContent = `${date.getHours()}`;
            head[3].innerHTML = ` AM`
        }
        head[1].innerHTML = ` : ${date.getMinutes()}`;
        head[2].innerHTML = ` : ${date.getSeconds()}`;
}

// start clock
btn[0].addEventListener('click', () => {
    if(!intervalId){
      intervalId = setInterval(() => {
        showTime()
      }, 1000);
    }
})

// stop clock
btn[1].addEventListener('mouseout', () => {
    clearInterval(intervalId);
    intervalId = null;
})