document.addEventListener('DOMContentLoaded', () => {
    const laptopList = document.getElementById('laptop-list');
    const sortBySelect = document.getElementById('sort-by');
    const loadingMessage = document.getElementById('loading-message');

    // Dummy Laptop Data (simulating an API response)
    // In a real application, you would fetch this from a backend API.
    const laptops = [
        {
            id: 1,
            name: "Dell XPS 15",
            price: 1899.99,
            specs: "Intel i7, 16GB RAM, 512GB SSD, NVIDIA RTX 3050",
            image: "https://i.dell.com/is/image/DellIns/xps-15-9530-laptop-gallery-1?fmt=png-alpha&wid=400&hei=300",
            description: "A powerful and sleek laptop perfect for creative professionals."
        },
        {
            id: 2,
            name: "MacBook Air M2",
            price: 1199.00,
            specs: "Apple M2 chip, 8GB RAM, 256GB SSD",
            image: "https://images.unsplash.com/photo-1658422474495-2601726a57c5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Ultra-portable and efficient, ideal for everyday tasks and students."
        },
        {
            id: 3,
            name: "HP Spectre x360 14",
            price: 1499.50,
            specs: "Intel i7, 16GB RAM, 1TB SSD, Iris Xe Graphics",
            image: "https://i.gadgets360cdn.com/products/laptops/hp-spectre-x360-14-630x300-1673359679.jpg",
            description: "Versatile 2-in-1 laptop with a stunning display and premium design."
        },
        {
            id: 4,
            name: "Lenovo ThinkPad X1 Carbon Gen 10",
            price: 1750.00,
            specs: "Intel i7, 16GB RAM, 512GB SSD",
            image: "https://p1-ofp.static.pub/fes/cms/2022/01/24/76174a7a-6415-4670-b4f0-46654b0362c9.png",
            description: "Business-class laptop known for its durability and excellent keyboard."
        },
        {
            id: 5,
            name: "ASUS ROG Zephyrus G14",
            price: 1599.99,
            specs: "AMD Ryzen 9, 16GB RAM, 1TB SSD, NVIDIA RTX 3060",
            image: "https://rog.asus.com/media/rog_products/rog-zephyrus-g14-2024/rog-zephyrus-g14-2024-ga403-kv-img-01.png",
            description: "Compact gaming laptop offering powerful performance on the go."
        },
        {
            id: 6,
            name: "Microsoft Surface Laptop 5",
            price: 1299.00,
            specs: "Intel i5, 8GB RAM, 256GB SSD",
            image: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWL1qN?ver=8683&q=90&m=6&h=300&w=400&bgr=FFFFFFFF&f=jpg",
            description: "Sleek design and touch screen, great for productivity and everyday use."
        },
        {
            id: 7,
            name: "Acer Predator Helios 300",
            price: 1350.00,
            specs: "Intel i7, 16GB RAM, 512GB SSD, NVIDIA RTX 3060",
            image: "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/v/g/e/-original-imagp7y42jyzf67e.jpeg?q=70",
            description: "High-performance gaming laptop with excellent cooling."
        },
        {
            id: 8,
            name: "Razer Blade 15",
            price: 2199.99,
            specs: "Intel i7, 16GB RAM, 1TB SSD, NVIDIA RTX 3070",
            image: "https://assets.razerzone.com/eeimages/razer_blade_15_2023_laptop_gallery_1.png",
            description: "Premium gaming laptop with a minimalist design and powerful specs."
        },
        {
            id: 9,
            name: "Chromebook Flip C434",
            price: 569.00,
            specs: "Intel Core m3, 8GB RAM, 64GB eMMC",
            image: "https://www.asus.com/media/global/products/f9x730d1v61a457d/P_setting_000_1_90_end_800.png",
            description: "Lightweight and versatile Chromebook for cloud-based tasks."
        },
        {
            id: 10,
            name: "Alienware m18",
            price: 2899.00,
            specs: "Intel i9, 32GB RAM, 2TB SSD, NVIDIA RTX 4080",
            image: "https://i.dell.com/is/image/DellIns/alienware-m18-r2-laptop-gallery-1?fmt=png-alpha&wid=400&hei=300",
            description: "Ultimate gaming beast with a massive screen and top-tier performance."
        }
    ];

    let currentLaptops = [...laptops]; // Create a mutable copy

    // Function to display laptops
    function displayLaptops(laptopsToDisplay) {
        laptopList.innerHTML = ''; // Clear previous listings
        loadingMessage.style.display = 'none'; // Hide loading message

        if (laptopsToDisplay.length === 0) {
            laptopList.innerHTML = '<div class="col-span-full text-center py-10 text-gray-500 text-lg">No laptops found.</div>';
            return;
        }

        laptopsToDisplay.forEach(laptop => {
            const laptopCard = document.createElement('div');
            laptopCard.className = 'bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200';
            laptopCard.innerHTML = `
                <img src="${laptop.image}" alt="${laptop.name}" class="w-full h-48 object-cover rounded-t-xl border-b border-gray-200" onerror="this.onerror=null;this.src='https://placehold.co/400x300/e0f2f7/2a6a99?text=Image+Not+Found';">
                <div class="p-5">
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">${laptop.name}</h3>
                    <p class="text-gray-700 text-lg font-bold mb-3">$${laptop.price.toFixed(2)}</p>
                    <p class="text-gray-600 text-sm mb-3">${laptop.specs}</p>
                    <p class="text-gray-500 text-sm mb-4">${laptop.description}</p>
                    <button class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 shadow-md hover:shadow-lg">
                        View Details
                    </button>
                </div>
            `;
            laptopList.appendChild(laptopCard);
        });
    }

    // Function to sort laptops
    function sortLaptops(criteria) {
        if (criteria === 'price-asc') {
            currentLaptops.sort((a, b) => a.price - b.price);
        } else if (criteria === 'price-desc') {
            currentLaptops.sort((a, b) => b.price - a.price);
        } else {
            // Default: Reset to original order (or by ID if we had one)
            currentLaptops = [...laptops]; // Reset to initial order
        }
        displayLaptops(currentLaptops);
    }

    // Event listener for sorting
    sortBySelect.addEventListener('change', (event) => {
        sortLaptops(event.target.value);
    });

    // Initial display of laptops
    displayLaptops(currentLaptops);
});
