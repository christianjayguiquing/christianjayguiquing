// Para i-toggle ang Search Bar at ilagay ang focus
function handleSearchClick() {
    const searchBar = document.getElementById('searchBar');
    const searchInput = document.getElementById('searchInput');
    
    if (searchBar.style.display === 'none' || searchBar.style.display === '') {
        searchBar.style.display = 'block'; // Ipakita ang search bar
        searchInput.focus(); // Ilagay ang cursor sa input
    } else {
        searchBar.style.display = 'none'; // Itago ang search bar
    }
}

// Para sa iba pang buttons (Cart at Login)
function handleCartClick() {
    alert('Clinic ang Cart!');
}

function handleLoginClick() {
    alert('Clinic ang Login!');
}

const carousel = document.getElementById('carousel-items');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentIndex = 0;
const itemsToShow = 3; // Adjust to match your layout
const itemWidth = 320; // Item width + margin

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < carousel.children.length - itemsToShow) {
        currentIndex++;
        updateCarousel();
    }
});


