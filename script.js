const button = document.querySelector("button");

const canvas = document.querySelector("canvas");

const jsConfetti = new JSConfetti();

button.addEventListener("click", () => {
    jsConfetti.addConfetti({
        confettiColors: [
          '#FE8F40', '#8881E0', '#FE5E71', '#5B9D2B', '#01A1FE', '#F46DBF',
        ],
      })
});