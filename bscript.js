// Show and hide login modal
// const loginBtn = document.getElementById('loginBtn');
// const loginModal = document.getElementById('loginModal');
// const closeModal = document.querySelector('.close');

// loginBtn.addEventListener('click', () => {
//     loginModal.style.display = 'flex';
// });

// closeModal.addEventListener('click', () => {
//     loginModal.style.display = 'none';
// });

// window.addEventListener('click', (event) => {
//     if (event.target === loginModal) {
//         loginModal.style.display = 'none';
//     }
// });
loginBtn.addEventListener('click', () => {
    window.location.href = 'login.html';
});


// Functions for explore, buy, sell buttons
function explore() {
    alert('Explore our wide range of books!');
}

function buyBook() {
    alert('Browse books available for purchase.');
}

function sellBook() {
    alert('Sell your used books here.');
}

// Image Slider Functionality
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlide(slideIndex);
}

// Auto slide every 3 seconds
setInterval(nextSlide, 3000);

// Initially show the first slide
showSlide(slideIndex);


loginBtn.addEventListener('click', () => {
    window.location.href = 'login.html';
});
