const lantern = document.querySelector('.lantern');

// Dừng khi rê chuột vào
lantern.addEventListener('mouseenter', () => {
    lantern.style.animationPlayState = 'paused';
});

// Quay lại khi rê chuột ra
lantern.addEventListener('mouseleave', () => {
    lantern.style.animationPlayState = 'running';
});