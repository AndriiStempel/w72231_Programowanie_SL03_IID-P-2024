function zmienTekst() {
    document.getElementById("tekst").innerHTML = "Witaj na mojej stronie!";
    alert("Tekst został zmieniony!");
}


for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log("Liczba parzysta:", i);
    }
}

const liczba1 = parseInt(prompt("Podaj pierwszą liczbę całkowitą:"));
const liczba2 = parseInt(prompt("Podaj drugą liczbę całkowitą:"));

if (!isNaN(liczba1) && !isNaN(liczba2)) {
    const suma = liczba1 + liczba2;
    document.write("<h2>Wynik dodawania: " + suma + "</h2>");
}


function pokazCzas() {
    const teraz = new Date();
    const czas = teraz.toLocaleTimeString();
    const miejsce = document.getElementById("czas");
    if (miejsce) {
        miejsce.textContent = "Aktualny czas: " + czas;
    }
}
setInterval(pokazCzas, 1000);


const wylosowanaLiczba = Math.floor(Math.random() * 101);
let licznikProb = 0;

function sprawdzLiczbe() {
    const input = document.getElementById("propozycja");
    const wynik = document.getElementById("wynik");
    const propozycja = parseInt(input.value);
    licznikProb++;

    if (isNaN(propozycja)) {
        wynik.textContent = "Wprowadź poprawną liczbę!";
        return;
    }

    if (propozycja < wylosowanaLiczba) {
        wynik.textContent = "Za mało!";
    } else if (propozycja > wylosowanaLiczba) {
        wynik.textContent = "Za dużo!";
    } else {
        alert(`Brawo! Zgadłeś liczbę ${wylosowanaLiczba} w ${licznikProb} próbach.`);
        location.reload();
    }
}