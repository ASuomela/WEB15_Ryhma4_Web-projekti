
// Top-navin hakukentän toiminnallisuus

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
                // Elokuvawiki
                { name: 'Elokuvawiki', id: 'movie-searchbar-container', url: '/pages/03-elokuvawiki/elokuvawiki.html' },
                /* tähän lisätään muut sivut samaan tyyliin, eli "Name: hakutuloksen nimi,
                 id: hakutuloksen ID HTML-koodissa, url: sivu jolla hakutulos on." */
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
});
