
// Zadanie 1
const book = {
    title: "Przykładowy tytul",
    author: "Przykładowy autor",
    year: 1890
  };
  
  function BookInfo(element) {
    return `${book.title} - ${book.author} (${book.year})`;
  }
  
console.log(BookInfo(book))

// Zadanie 2

const student = {
  name : "test",
  surname : 'test',
  albumNumber : 'w12345',
  grades : {
    math : 5,
    it : 4,
    pe : 4
  }
}

console.log((student.grades.math + student.grades.it + student.grades.pe)/3);
console.log( Object.values(student.grades).reduce(a,b) = (a+b) /Object.keys(student.grades).length);

// Zadanie 3

function Car(markIn, model, productionYear, color, speed) {
  this.mark = markIn;
  this.model = model;
  this.productionYear = productionYear;
  this.color = color;
  this.speed = speed;
  this.increaseSpeed = (value) => this.speed += value;
  this.decreaseSpeed = function(value) {
    this.speed -= value;
   } 
   this.getAge = () => {
    const date = new Date();
    return date.getFullYear() - this.productionYear;
   }
}

const car = new Car('test', 'test', 1111, 'rd', 10);
car.increaseSpeed(10);
console.log(car.speed);


class Car2 {
  constructor(markIn, model, productionYear, color, speed) {
    this.mark = markIn;
    this.model = model;
    this.productionYear = productionYear;
    this.color = color;
    this.speed = speed;
  }
  increaseSpeed(value) {
    this.speed += value
  };
}


//Zadanie 5
function Rectangle(a,b) {
  this.a = a;
  this.b = b;
  this.calcPerimetr = () => 2*a + 2*b;
  this.calcArea = () => a*b;
  this.isSquare = () => a === b;
}

const aInput = document.getElementById('a')
const bInput = document.getElementById('b')
const resultElm = document.getElementById('result')

// Zadanie 6
function obliczProstokat() {
  const a = parseFloat(document.getElementById("bokA").value);
  const b = parseFloat(document.getElementById("bokB").value);
  const wynikDiv = document.getElementById("wynik");

  if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
      wynikDiv.textContent = "Wprowadź poprawne długości boków!";
      return;
  }

  const prostokat = new Prostokat(a, b);
  const wynik = `
      Pole: ${prostokat.pole()}<br>
      Obwód: ${prostokat.obwod()}<br>
      ${prostokat.czyKwadrat() ? "To jest kwadrat." : "To nie jest kwadrat."}
  `;
  wynikDiv.innerHTML = wynik;


}






