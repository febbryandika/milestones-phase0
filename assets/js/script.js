const imageHero = ["anomali-senopati-hero.jpg", "awal-mula-hero.jpg", "dailydose-hero.jpg", "daruma-hero.jpg", "kopi-seru-summer-hills-hero.jpg", "old-ben_s-setiabudi-hero.jpg", "soekapi-hero.jpg", "sequoia-hero.jpg"]
let isDetailOpen = false;

function changeHero() {
    const hero = document.getElementById('hero');
    const url = hero.src;
    const filename = url.substring(url.lastIndexOf('/') + 1);

    hero.src = "./assets/img/hero/" + imageHero[(imageHero.indexOf(filename) + 1) % imageHero.length];
}

function toRad(value) {
    return (value * Math.PI) / 180;
}

function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lng2 - lng1);
    const l1 = toRad(lat1);
    const l2 = toRad(lat2);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(l1) * Math.cos(l2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return d;
}

function displayDetail(lat2, lng2, id) {
    navigator.geolocation.getCurrentPosition((position) => {
        const lat1 = position.coords.latitude;
        const lng1 = position.coords.longitude;
        console.log("Koordinat device: ", lat1, lng1);
        const distance = calculateDistance(lat1, lng1, lat2, lng2);
        console.log(`Jarak: ${distance.toFixed(2)}km`);
        console.log(id);

        document.getElementById(`distance-${id}`).innerHTML = `${distance.toFixed(2)}km`;
        document.getElementById(id).removeAttribute('hidden');

        if (!isDetailOpen) {
            document.body.style.overflow = "hidden";
            isDetailOpen = true;
        }
    });
}

function closeDynamic(id) {
    document.getElementById(id).setAttribute('hidden', true);
    
    if (!document.querySelector(".detail:not([hidden])")) {
        document.body.style.overflow = "auto";
        isDetailOpen = false;
    }
}