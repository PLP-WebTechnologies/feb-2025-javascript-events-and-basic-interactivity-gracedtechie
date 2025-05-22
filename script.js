// 1. Event Handling 🎈

// Change button color and text on click
const colorButton = document.getElementById('colorButton');
colorButton.addEventListener('click', () => {
  const colors = ['#ff6666', '#66ff66', '#6666ff', '#ffcc66'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  colorButton.style.backgroundColor = randomColor;
  colorButton.textContent = 'Color changed!';
});

// Hover effect on paragraph
const hoverParagraph = document.getElementById('hoverParagraph');
hoverParagraph.addEventListener('mouseenter', () => {
  hoverParagraph.classList.add('hovered');
});
hoverParagraph.addEventListener('mouseleave', () => {
  hoverParagraph.classList.remove('hovered');
});

// Keypress detection
const keyInput = document.getElementById('keyInput');
const keyPressed = document.getElementById('keyPressed');
keyInput.addEventListener('keydown', (e) => {
  keyPressed.textContent = `You pressed: "${e.key}"`;
});

// Bonus: Secret action on double-click or long press
const secretBtn = document.getElementById('secretBtn');
const secretActionResult = document.getElementById('secretActionResult');
let longPressTimer;

secretBtn.addEventListener('dblclick', () => {
  secretActionResult.textContent = 'Double-click detected! 🎉';
  secretActionResult.style.color = 'green';
});

secretBtn.addEventListener('mousedown', () => {
  longPressTimer = setTimeout(() => {
    secretActionResult.textContent = 'Long press detected! 🤫';
    secretActionResult.style.color = 'purple';
  }, 1000); // 1 second long press
});

secretBtn.addEventListener('mouseup', () => {
  clearTimeout(longPressTimer);
});

// 2. Interactive Elements 🎮

// Slideshow images
const images = [
  'https://via.placeholder.com/400x200?text=Image+1',
  'https://via.placeholder.com/400x200?text=Image+2',
  'https://via.placeholder.com/400x200?text=Image+3',
];
let currentIndex = 0;
const slideImage = document.getElementById('slideImage');
const prevSlide = document.getElementById('prevSlide');
const nextSlide = document.getElementById('nextSlide');

function showSlide(index) {
  currentIndex = (index + images.length) % images.length;
  slideImage.src = images[currentIndex];

  // Animate image
  slideImage.classList.add('animate');
  setTimeout(() => {
    slideImage.classList.remove('animate');
  }, 500);
}

prevSlide.addEventListener('click', () => showSlide(currentIndex - 1));
nextSlide.addEventListener('click', () => showSlide(currentIndex + 1));

// Tabs functionality
const tablinks = document.querySelectorAll('.tablink');
const tabcontents = document.querySelectorAll('.tabcontent');

tablinks.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Remove active class from all
    tablinks.forEach(b => b.classList.remove('active'));
    tabcontents.forEach(tc => (tc.style.display = 'none'));

    // Activate clicked tab
    btn.classList.add('active');
    const tabId = btn.getAttribute('data-tab');
    document.getElementById(tabId).style.display = 'block';
  });
});

// 3. Form Validation 📋✅
const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const formMessage = document.getElementById('formMessage');

// Real-time validation helpers
function validateName() {
  if (!nameInput.value.trim()) {
    nameInput.classList.add('invalid');
    nameInput.classList.remove('valid');
    return false;
  } else {
    nameInput.classList.add('valid');
    nameInput.classList.remove('invalid');
    return true;
  }
}

function validateEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailInput.value.trim() || !emailRegex.test(emailInput.value)) {
    emailInput.classList.add('invalid');
    emailInput.classList.remove('valid');
    return false;
  } else {
    emailInput.classList.add('valid');
    emailInput.classList.remove('invalid');
    return true;
  }
}

function validatePassword() {
  if (passwordInput.value.length < 8) {
    passwordInput.classList.add('invalid');
    passwordInput.classList.remove('valid');
    return false;
  } else {
    passwordInput.classList.add('valid');
    passwordInput.classList.remove('invalid');
    return true;
  }
}

// Real-time feedback event listeners
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();

  if (isNameValid && isEmailValid && isPasswordValid) {
    formMessage.style.color = 'green';
    formMessage.textContent = 'Form submitted successfully! 🎉';
    form.reset();
    nameInput.classList.remove('valid');
    emailInput.classList.remove('valid');
    passwordInput.classList.remove('valid');
  } else {
    formMessage.style.color = 'red';
    formMessage.textContent = 'Please fix errors before submitting.';
  }
});
