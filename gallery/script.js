const projects = [
    { title: 'Project 1', description: 'Description of Project 1', image: 'image1.jpg' },
    { title: 'Project 2', description: 'Description of Project 2', image: 'image2.jpg' },
    { title: 'Project 3', description: 'Description of Project 3', image: 'image3.jpg' },
    // Add more projects as needed
];

const placeholders = 6; // Number of placeholders to display
const adminPassword = 'admin123'; // Set your admin password here

function createGallery() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; // Clear existing gallery

    // Create project items
    projects.forEach(project => {
        const item = document.createElement('div');
        item.className = 'item';
        item.onclick = () => openModal(project.title, project.description, project.image);
        
        const img = document.createElement('img');
        img.src = project.image;
        img.alt = project.title;

        item.appendChild(img);
        gallery.appendChild(item);
    });

    // Create placeholders
    for (let i = 0; i < placeholders; i++) {
        const placeholder = document.createElement('div');
        placeholder.className = 'placeholder';
        placeholder.innerText = 'Placeholder';
        placeholder.style.gridColumn = 'span 1';
        placeholder.style.gridRow = 'span 1';
        
        // Randomly assign span sizes for variety
        if (Math.random() > 0.5) {
            placeholder.style.gridColumn = 'span 2';
            placeholder.style.gridRow = 'span 2';
        }

        gallery.appendChild(placeholder);
    }
}

function openModal(title, description, image) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerText = description;
    document.getElementById('modal-image').src = image;
    document.getElementById('modal').style.display = "block";
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}

function toggleAdminLogin() {
    const loginModal = document.getElementById('login-modal');
    loginModal.style.display = loginModal.style.display === "block" ? "none" : "block";
}

function closeLoginModal() {
    document.getElementById('login-modal').style.display = "none";
}

function login() {
    const password = document.getElementById('admin-password').value;
    if (password === adminPassword) {
        document.getElementById('admin-panel').style.display = "block";
        closeLoginModal();
        createGallery(); // Refresh gallery after login
    } else {
        alert('Incorrect password. Please try again.');
    }
}

function logout() {
    document.getElementById('admin-panel').style.display = "none";
}

function addImage() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').value;

    if (title && description && image) {
        projects.push({ title, description, image });
        createGallery(); // Refresh gallery with new image
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
        document.getElementById('image').value = '';
    } else {
        alert('Please fill in all fields.');
    }
}

// Initialize the gallery on page load
createGallery();

