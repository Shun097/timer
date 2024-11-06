
{
  const timer = document.getElementById('timer')
  const start = document.getElementById('start')
  const stop =  document.getElementById('stop')
  const reset = document.getElementById('reset')

  let startTime;
  let timeoutId;

  function countUp(){
    const d = new Date(Date.now() - startTime);
    const h = String(d.getUTCHours()).padStart(2, '0');
    const m = String(d.getMinutes()).padStart(2, '0');
    const s = String(d.getSeconds()).padStart(2, '0');
    const ms = String(d.getMilliseconds()).padStart(3, '0');
    timer.textContent = `${h}:${m}:${s}.${ms}`;

    timeoutId = setTimeout(() => {
        countUp();
    },10);
  }

  function setButtonStateInitial(){
   start.disabled = false;
   stop.disabled = true;
   reset.disabled = true;
   
  }
  function setButtonStateRunning(){
   start.disabled = true;
   stop.disabled = false;
   reset.disabled = true;

  }
  function setButtonStateStopped(){
   start.disabled = true;
   stop.disabled = true;
   reset.disabled = false;
  }


  setButtonStateInitial();



  start.addEventListener('click',()=>{
   setButtonStateRunning();
    startTime = Date.now();
    countUp();
  });

  stop.addEventListener('click',()=>{
   setButtonStateStopped();
    clearTimeout(timeoutId);
  });

  reset.addEventListener('click',()=>{
   setButtonStateInitial();
    timer.textContent = '00:00:00:00';
  });



}