window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector('.landing-text').classList.add('appear');
    }, 3000); // Pieni viive ilmestymisen pehmentämiseksi
});

document.getElementById('toggle-music-btn').addEventListener('click', function() {
    const music = document.getElementById('background-music');
    if (music.muted) {
        music.muted = false; // Musiikin unmute
        this.textContent = 'Mykistä musiikki'; // Päivitä napin teksti
    } else {
        music.muted = true; // Musiikin mute
        this.textContent = 'Poista mykistys'; // Päivitä napin teksti
    }
});
