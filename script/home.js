const btn = document.querySelectorAll('.btn');
const btnStart = document.querySelector('.btn.btn1');
const btn2 = document.querySelector('.btn.btn2');
const btn3 = document.querySelector('.btn.btn3');
const btn4 = document.querySelector('.btn.btn4');

/* Slides */

const s1 = document.querySelector('.section.section-1');
const s2 = document.querySelector('.section.section-2');
const s3 = document.querySelector('.section.section-3');
const s4 = document.querySelector('.section.section-4');

let state = '';

btnStart.classList.add('active');

btn.forEach(button => {
  button.onclick = (e) => {
    btn.forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
  }
});

function switchSlide() {
  switch(state) {
    case 's1':
      s1.style.display = 'grid';

      s2.style.display = 'none';
      s3.style.display = 'none';
      s4.style.display = 'none';
      break;
    
    case 's2':
      s2.style.display = 'grid';

      s1.style.display = 'none';
      s3.style.display = 'none';
      s4.style.display = 'none';
      break;

    case 's3':
      s3.style.display = 'flex';

      s1.style.display = 'none';
      s2.style.display = 'none';
      s4.style.display = 'none';
      break;

    case 's4':
      s4.style.display = 'flex';

      s1.style.display = 'none';
      s3.style.display = 'none';
      s3.style.display = 'none';
      break;
  }
}

btnStart.addEventListener('click', () => {
  state = 's1';
  switchSlide();
})

btn2.addEventListener('click', () => {
  state = 's2';
  switchSlide();

/* delay appear */

  nd2.classList.remove('active-nd');
  nd3.classList.remove('active-nd');

  nd1.style.animation = 'highlight 1s';
  nd1.classList.add('active-nd');

  nd1.addEventListener('animationend', () => {
    index = 0;
    switchContent();
  }, {once: true})
})

btn3.addEventListener('click', () => {
  state = 's3';
  switchSlide();
})

btn4.addEventListener('click', () => {
  state = 's4';
  switchSlide();
})

/* content for silde 2 */

const nd1 = document.querySelector('.nd.nd-1');
const nd2 = document.querySelector('.nd.nd-2');
const nd3 = document.querySelector('.nd.nd-3'); 

let index = 0;

function switchContent() {
  switch(index) {
    case 0: 
    nd1.classList.add('active-nd');

    nd2.classList.remove('active-nd');
    nd3.classList.remove('active-nd');
    break;

  case 1: 
    nd2.classList.add('active-nd');

    nd1.classList.remove('active-nd');
    nd3.classList.remove('active-nd');
    break;

  case 2: 
    nd3.classList.add('active-nd');

    nd1.classList.remove('active-nd');
    nd2.classList.remove('active-nd');
    break;
  }
}

window.addEventListener('keydown', function(e) {
  if (state === 's2' && e.key === 'ArrowRight') {
    if (index < 2) {
      index++;
      switchContent();
    }
  }
  else if (state === 's2' && e.key === 'ArrowLeft') {
    if (index > 0) {
      index--;
      switchContent();
    }
  }
  console.log(index);
})