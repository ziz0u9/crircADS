document.addEventListener('DOMContentLoaded', () => {
    // Duplicate marquee items for infinite scroll seamlessly
    const marquee = document.querySelector('.marquee');
    if (marquee) {
        const clone = marquee.innerHTML;
        marquee.innerHTML += clone;
    }
});
