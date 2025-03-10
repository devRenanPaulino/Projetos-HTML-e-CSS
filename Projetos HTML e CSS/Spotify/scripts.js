document.addEventListener('DOMContentLoaded', () => {
    const artistsData = [
        { name: 'Kendrick Lamar', image: './img/K-dot.jpg' },
        { name: 'Tyler, The Creator', image: './img/tyler.jpg' },
        { name: 'BK', image: './img/bk.jpg' },
        { name: 'Tems', image: './img/tems.jpg' },
        { name: 'Emicida', image: './img/emicida.jpg' },
        { name: 'Doechii', image: './img/doechii.jpg' }
    ];

    const albumsData = [
        { name: 'Eu Ainda Tenho Coração', artist: 'Leall', image: './img/album-leal.jpg' },
        { name: 'Chromakopia', artist: 'Tyler, The Creator', image: './img/album-tyler.jpg' },
        { name: 'Nada como um dia após o outro', artist: 'Racionais', image: './img/album-racionais.jpg' },
        { name: 'GNX', artist: 'Kendrick Lamar', image: './img/album-kendrick2.jpg' },
        { name: 'CAJU', artist: 'Liniker', image: './img/album-caju.jpg' },
        { name: 'Alligator Bites Never Heal', artist: 'Doechii', image: './img/album-doechii.jpg' }
    ];

    const artistGrid = document.querySelector('.artists-grid');
    const albumGrid = document.querySelector('.album-grid');

    artistsData.forEach(artist => {
        const artistCard = document.createElement('div');
        artistCard.classList.add('artist-card');

        artistCard.innerHTML = `
            <img src="${artist.image}" alt="${artist.name}">
            <h3>${artist.name}</h3>
            <p>artista</p>
        `;

        artistGrid.appendChild(artistCard);
    });

    albumsData.forEach(album => {
        const albumCard = document.createElement('div');
        albumCard.classList.add('album-card');

        albumCard.innerHTML = `
            <img src="${album.image}" alt="${album.name}">
            <h3>${album.name}</h3>
            <p>${album.artist}</p>
        `;

        albumGrid.appendChild(albumCard);
    });
});