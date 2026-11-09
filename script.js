document.addEventListener('DOMContentLoaded', () => {
    const badges = document.querySelectorAll('.song-badge');

    badges.forEach((badge, index) => {
        badge.addEventListener('click', () => {
            badge.style.transform = 'scale(0.95)';
            setTimeout(() => {
                badge.style.transform = 'scale(1)';
            }, 150);
            
            console.log(`Reproduciendo vibra número ${index + 1}`);
        });
    });
});