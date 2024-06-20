window.onload =function(){
 let minutes = 0;
 let second = 0;
 let tens = 0;   
 let appendMinutes = document.querySelector('#minutes')
 let appendtens = document.querySelector('#tens')
 let appendsecond = document.querySelector('#second')
 let startBtn = document.querySelector('#start')
 let stopBtn = document.querySelector('#stop')
 let resetBtn = document.querySelector('#reset')
 let interval

  const starttimer = () =>{
    tens++
    if(tens <= 9){
        appendtens.innerHTML ='0' + tens
    
    }
    if(tens > 9){
        appendtens.innerHTML = tens
  }
  if(tens > 99){
    second++
    appendsecond.innerHTML ='0' + second
    tens = 0
        appendtens.innerHTML ='0' + 0;
  }
  if(second > 9){
    appendsecond.innerHTML = second
  }
  if(second > 59){
    minutes++
    appendMinutes.innerHTML ='0' + minutes
    second = 0
        appendsecond.innerHTML ='0' + 0;
  }
  
};



startBtn.Onclick = () => {
    clearInterval(interval);
    interval = setInterval(starttimer,10);
};

stopBtn.Onclick = () => {
  clearInterval(interval)
}

resetBtn.Onclick = () =>{
  clearInterval(interval)
  tens = '00'
  second = '00'
  minutes = '00'
  appendtens.innerHTML = tens
  appendsecond.innerHTML = second
  appendMinutes.innerHTML = minutes
};
};