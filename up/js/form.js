//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- Variables
// Newsletter
const newsletterForm = document.querySelector(".newsletter__form");
const newsletterSubmit = document.querySelector("#newsletter__submit");

// Register Form
const registerForm1 = document.querySelector(".register-form-1");

// First page
const slidePage = document.querySelector(".register__content--form__page");
const firstNextBtn = document.querySelector(".next-1");

// Second page
const firstPrevBtn = document.querySelector(".prev-1");
const secondNextBtn = document.querySelector(".next-2");

// Third page
const secondPrevBtn = document.querySelector(".prev-2");
const thirdNextBtn = document.querySelector(".next-3");

// Forth page
const thirdPrevBtn = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");

// Progress Step
const progressStep = document.querySelectorAll(".register__progress--step");

// Progress Number (The Span Element)
const progressNumber = document.querySelectorAll(
  ".register__progress--step span"
);

// Progress Tick Mark
const progressTick = document.querySelectorAll(".fa-check");

let max = 4;
let current = 1;

// The Next Button Event Listener Function
function tick() {
  progressStep[current - 1].classList.add("active");
  progressNumber[current - 1].classList.add("active");
  progressTick[current - 1].classList.add("active");
  current += 1;
}

// The Previous Button Event Listener Function
function untick() {
  progressStep[current - 2].classList.remove("active");
  progressNumber[current - 2].classList.remove("active");
  progressTick[current - 2].classList.remove("active");
  current -= 1;
}

//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- Next Btns Events

// First Next Button Event Listener
firstNextBtn.addEventListener("click", (e) => {
 let isFormValid = registerForm1.checkValidity();
    if(!isFormValid) {
        registerForm1.reportValidity();
  } else {
    e.preventDefault()
    slidePage.style.marginLeft = "-33%";
    tick();
});

// Second Next Button Event Listener
secondNextBtn.addEventListener("click", () => {
  slidePage.style.marginLeft = "-100%";
  tick();
});

// Third Next Button Event Listener
thirdNextBtn.addEventListener("click", () => {
  slidePage.style.marginLeft = "-200%";
  tick();
});

// Submit Button Event Listener
submitBtn.addEventListener("click", () => {
  tick();
  setTimeout(() => {
    alert("Your Form Has Been Successfully Submitted. Thank You My Friend");
    location.reload();
  }, 1000);
});

//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- Previous Btns Events

// First Previous Button Event Listener
firstPrevBtn.addEventListener("click", () => {
  slidePage.style.marginLeft = "0";
  untick();
});

// Second Previous Button Event Listener
secondPrevBtn.addEventListener("click", () => {
  slidePage.style.marginLeft = "-33%";
  untick();
});

// Third Previous Button Event Listener
thirdPrevBtn.addEventListener("click", () => {
  slidePage.style.marginLeft = "-100%";
  untick();
});

// Newsletter form
newsletterSubmit.addEventListener("click", (e) => {
    let isFormValid = newsletterForm.checkValidity();
    if(!isFormValid) {
        newsletterForm.reportValidity();
    } else {
      e.preventDefault()
      setTimeout(() => {
      alert("Thank you for subscribing to our newsletter.")
      newsletterForm.reset()
      }, 1000)
    }
})

// Newsletter form
newsletterSubmit.addEventListener("click", (e) => {
    let isFormValid = newsletterForm.checkValidity();
    if(!isFormValid) {
        newsletterForm.reportValidity();
    } else {
      e.preventDefault()
      setTimeout(() => {
      alert("Thank you for subscribing to our newsletter.")
      newsletterForm.reset()
      }, 1000)
    }
})
