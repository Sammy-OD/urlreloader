const iframe = document.getElementById('iframe');
const rate = document.getElementById('rate').innerText;
const exit = document.getElementById('exit');

let interval = null;
let counter = rate;

if (iframe.src != ('' || undefined || null)) {
  interval = setInterval('updateCount()', 1000);
}

exit.addEventListener('click', () => {
  document.getElementById('count').innerText = '__';
  clearInterval(interval);
  setTimeout(() => {
    clearTimeout(setTimer);
  });
});

const updateCount = () => {
  counter --;
  document.getElementById('count').innerText = counter;
  if (counter == 0) {
    clearInterval(interval);
  }
}

const reload = () => {
  clearInterval(interval);
  window.location.reload(true);
}

let setTimer = setTimeout(reload, rate*1001);