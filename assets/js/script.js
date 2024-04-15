const imageHero = ["anomali-senopati-hero.jpg", "awal-mula-hero.jpg", "dailydose-hero.jpg", "daruma-hero.jpg", "kopi-seru-summer-hills-hero.jpg", "old-ben_s-setiabudi-hero.jpg", "soekapi-hero.jpg", "sequoia-hero.jpg"]

function changeHero() {
    const hero = document.getElementById('hero');
    console.log(hero.src);
    const url = hero.src;
    const filename = url.substring(url.lastIndexOf('/') + 1);
    console.log(filename);
    console.log((imageHero.indexOf(filename) + 1) % imageHero.length);
    hero.src = "./assets/img/" + imageHero[(imageHero.indexOf(filename) + 1) % imageHero.length];
    console.log(hero.src);
}