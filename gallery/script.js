const images = [
    { id: 1, url: 'https://www.krill0w.garden/assets/images/constructionCat.jpg', description: 'Image 1' },
    { id: 2, url: 'images/image2.jpg', description: 'Image 2' },
    { id: 3, url: 'images/image3.jpg', description: 'Image 3' },
    { id: 4, url: 'images/image4.jpg', description: 'Image 4' },
    { id: 5, url: 'images/image5.jpg', description: 'Image 5' },
    { id: 6, url: 'images/image6.jpg', description: 'Image 6' },
];

const imageGrid = document.getElementById('imageGrid');

images.forEach(image => {
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';
    gridItem.innerHTML = `<img src="${image.url}" alt="${image.description}">`;
    imageGrid.appendChild(gridItem);
});
