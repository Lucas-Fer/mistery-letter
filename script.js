const btnGenerateLetter = document.querySelector('#criar-carta');
const inputText = document.querySelector('#carta-texto');
const paragraph = document.querySelector('#carta-gerada');
const letterCount = document.querySelector('#carta-contador');
function verifyInput() {
  const text = 'Por favor, digite o conteúdo da carta.';
  paragraph.innerText = text;
}

function countLetter() {
  const palavras = paragraph.children.length;
  letterCount.innerText = palavras;
}

function generateLetter() {
  btnGenerateLetter.addEventListener('click', () => {
    if (inputText.value === ' ' || inputText.value.length <= 0) {
      verifyInput();
    } else {
      const inputSplit = inputText.value.split(' ');
      paragraph.innerText = '';
      for (let i = 0; i < inputSplit.length; i += 1) {
        const span = document.createElement('span');
        span.appendChild(document.createTextNode(inputSplit[i]));
        paragraph.appendChild(span);
      }
      countLetter();
    }
  });
} generateLetter();

function generateStyles() {
  const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
  const heightGroup = ['medium', 'big', 'reallybig'];
  const rotationGroup = ['rotateleft', 'rotateright'];
  const inclinationGroup = ['skewnleft', 'skewnright'];
  const wordSpan = document.querySelector('#carta-gerada').children;
  btnGenerateLetter.addEventListener('click', () => {
    for (let i = 0; i < wordSpan.length; i += 1) {
      const randomStyleGroup = styleGroup[Math.floor(Math.random() * styleGroup.length)];
      const randomHeightGroup = heightGroup[Math.floor(Math.random() * heightGroup.length)];
      const randomRotationGroup = rotationGroup[Math.floor(Math.random() * rotationGroup.length)];
      const randomInclinate = inclinationGroup[Math.floor(Math.random() * inclinationGroup.length)];
      wordSpan[i].classList.add(randomStyleGroup);
      wordSpan[i].classList.add(randomHeightGroup);
      wordSpan[i].classList.add(randomRotationGroup);
      wordSpan[i].classList.add(randomInclinate);
    }
  });
} generateStyles();
/*
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const randomMonth = months[Math.floor(Math.random() * months.length)];
console.log("random month =>", randomMonth);
const ramdomNumber = Math.floor(Math.random() * 100);
console.log(ramdomNumber);
*/
