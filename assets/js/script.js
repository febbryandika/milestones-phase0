const imageHero = ["anomali-senopati-hero.jpg", "awal-mula-hero.jpg", "dailydose-hero.jpg", "daruma-hero.jpg", "kopi-seru-summer-hills-hero.jpg", "old-ben_s-setiabudi-hero.jpg", "soekapi-hero.jpg", "sequoia-hero.jpg"]

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
        const distance = calculateDistance(lat1, lng1, lat2, lng2);

        document.getElementById(`distance-${id}`).innerHTML = `${distance.toFixed(2)}km`;
        document.getElementById(id).removeAttribute('hidden');
        document.body.style.overflow = "hidden";
    });
}

function closeDynamic(id) {
    document.getElementById(id).setAttribute('hidden', true);
    document.body.style.overflow = "auto";
}