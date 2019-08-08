console.log('elo');
const name = 'Maria Siedlik';
const age = '33';

// console.log('Nazywam się ' + $name + ' mam ' + $age + ' lata.');
console.log(`Nazywam się ${name}  mam ${age} lata.`);

const heading = document.querySelector('.header__heading');

console.log(heading);

const paragraphs = document.querySelectorAll('p');

console.log(paragraphs);

//wypisz w konsoli zawartość nagłówka z kalsą heading

console.log(heading.innerHTML);

// zmień zawartość nagłówka z klasą heading

heading.innerHTML = 'WTF Co ten FrontEnd';

// jeszcze raz wypisz zawartość nagłówka z klasą heading

console.log(heading.innerHTML);

const emptyParagraph = document.querySelector('.empty-paragraph');
emptyParagraph.innerHTML = 'HALO! JEST TU KTOŚ? zminiłam zawartość tego elementu aaa';

//LOGIKA JAVA SCRIPT
const myAge = 40;

switch (myAge) {
   case 20:
      console.log('masz 20 lat');
      break;
   case 30:
      console.log('masz 30 lat');
      break;
   case 40:
      console.log('Masz 40 lat');
      break;
   default:
      console.log('ddd');
}
