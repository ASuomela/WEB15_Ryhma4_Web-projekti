// Top-navin hakukentän toiminnallisuus ja top-navin nykyisen sivun alleviivaus
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('nav-searchBar').addEventListener('input', function() {
        const query = this.value.toLowerCase();
        const resultsList = document.getElementById('resultsList');
        resultsList.innerHTML = '';

        if (query) {
            const results = [
                // Etusivu
                { name: 'Suosituimmat elokuvat', id: 'top-films-title', url: '/pages/01-etusivu/etusivu.html' },
                { name: 'Ajankohtaista', id: 'news-title', url: '/pages/01-etusivu/etusivu.html' },
                // Elokuvat
                { name: 'Elokuvat ja näytökset', id: 'otsikko', url: '/pages/02-elokuvat/varaus.html' },
                { name: 'Leffaeväät', id: 'leffaevaat', url: '/pages/02-elokuvat/varaus.html' },
                // Elokuvawiki
                { name: 'Elokuvawiki', id: 'movie-searchbar-container', url: '/pages/03-elokuvawiki/elokuvawiki.html' },
                // Elokuvakerho
                { name: 'Elokuvakerho', id: 'kerho-container', url: '/pages/04-elokuvakerho/elokuvakerho.html' },
                { name: 'Elokuvaraati', id: 'elokuvaraati', url: '/pages/04-elokuvakerho/elokuvakerho.html' },
                // Tietoa meistä
                { name: 'Tietoa meistä', id: 'about-content', url: '/pages/05-tietoameista/tietoameista.html' },
                { name: 'Yhteystiedot', id: 'address', url: '/pages/05-tietoameista/tietoameista.html' },
                // Rekisteröidy
                { name: 'Rekisteröidy', id: 'register-container', url: '/pages/06-rekisteroityminen/rekisteroityminen.html' },
                /* Lisää omat sivut samaan tyyliin:
                Name: miltä hakutulos näyttää
                id: HTML koodista ID, mihin haluat että hakutulos vie
                url: millä sivulla kyseinen hakutulos on */
            ];

            const filteredResults = results.filter(result => result.name.toLowerCase().includes(query));

            filteredResults.forEach(result => {
                const li = document.createElement('li');
                li.textContent = result.name;
                li.addEventListener('click', function() {
                    if (result.url === window.location.pathname) {
                        // Scrollaa oikeaan kohtaan sivulla hakutuloksen mukaan
                        scrollToElement(result.id);
                    } else {
                        // Navigoi toiselle sivulle hakutuloksen mukaan
                        window.location.href = `${result.url}#${result.id}`;
                    }
                    resultsList.style.display = 'none';
                    document.getElementById('nav-searchBar').value = '';
                });
                resultsList.appendChild(li);
            });

            resultsList.style.display = 'block';
        } else {
            resultsList.style.display = 'none';
        }
    });

    // Tämä scrollaa hakutulokseen sivunvaihdon jälkeen
    window.addEventListener('load', () => {
        if (window.location.hash) {
            const elementId = window.location.hash.substring(1);
            scrollToElement(elementId);
        }
    });

    // Tämä scrollaa hakutulokseen siten, että tulos tulee kunnolla esiin
    function scrollToElement(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            const offset = 100; // Muuta arvoa tarpeen mukaan
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    }

    // Näyttää top-navin aktiivisen sivun alleviivauksena
    const navLinks = document.querySelectorAll('.top-nav');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) { // vertaa nykyistä sivua naviin
            link.classList.add('active'); // lisää CSS-muotoilun aktiiviselle top-navin linkille
        }
    });
});
