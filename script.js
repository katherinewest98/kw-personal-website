function surpriseMessage() {
    alert("Oops - surprise not found! Please come back when Katherine has completed the Flatiron School boot camp to see the surprise! :-)")
}

let surpriseButton = document.querySelector("button");

surpriseButton.addEventListener("click", surpriseMessage);