document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById('background-sound');
    audio.play().catch(error => {
        console.log('Autoplay was prevented:', error);
        document.body.addEventListener('click', () => {
            audio.play();
        }, { once: true });
    });

    const elements = [
        document.querySelector('.text-1'),
        document.querySelector('.naina-1'),
        document.querySelector('.text-2'),
        document.querySelector('.naina-2'),
        document.querySelector('.text-3'),
        document.querySelector('.naina-3')
    ];

    let delay = 1500; // Initial delay

    elements.forEach((el, index) => {
        if (el) {
            setTimeout(() => {
                el.style.opacity = 1;
                el.classList.add('slide-in');
            }, delay * index);
        }
    });
});
