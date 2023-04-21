function surpriseMessage() {
    alert("404: Surprise not found. Please come back when Katherine has completed the Flatiron School boot camp to see the surprise!")
}

let surpriseButton = document.querySelector("button");

surpriseButton.addEventListener("click", surpriseMessage);