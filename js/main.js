// ข้อมูลสินค้า
const products = [
    {
        id: 1,
        name: "ชุดเดรสดอกไม้สีชมพู",
        price: 890,
        category: "dress",
        image: "https://down-th.img.susercontent.com/file/th-11134207-7ra0p-mbryzha2oo0s8f.webp",
        description: "ชุดเดรสสีชมพูพร้อมลวดลายดอกไม้ สวมใส่สบายเหมาะสำหรับทุกโอกาส"
    },
    {
        id: 2,
        name: "เสื้อเชิ้ตสีขาว",
        price: 590,
        category: "top",
        image: "https://down-th.img.susercontent.com/file/th-11134207-7ras8-m2npldvlb2a486.webp",
        description: "เสื้อเชิ้ตสีขาวเนื้อผ้าเบาสบาย ใส่ได้ทั้งแบบทางการและไม่เป็นทางการ"
    },
    {
        id: 3,
        name: "กระโปรงพลีทสีดำ",
        price: 690,
        category: "bottom",
        image: "https://www.ladyissue.com/wp-content/uploads/2017/10/06-1.jpg",
        description: "กระโปรงพลีทสีดำยาวถึงเข่า เนื้อผ้าไม่ยับง่าย"
    },
    {
        id: 4,
        name: "สร้อยคอทองคำสีโรสโกลด์",
        price: 1290,
        category: "accessory",
        image: "https://down-th.img.susercontent.com/file/th-11134207-7rasl-m3urm9c1q5pj2d.webp",
        description: "สร้อยคอทองคำสีโรสโกลด์แบบบางเบา ดีไซน์เรียบหรู"
    },
    {
        id: 5,
        name: "ชุดเดรสลายจุด",
        price: 990,
        category: "dress",
        image: "https://down-th.img.susercontent.com/file/sg-11134201-7rd4w-m79ha3yu9f3ge9.webp",
        description: "ชุดเดรสลายจุด เนื้อผ้าระบายอากาศดี เหมาะสำหรับฤดูร้อน"
    },
    {
        id: 6,
        name: "เสื้อกล้ามสีขาว",
        price: 390,
        category: "top",
        image: "https://down-th.img.susercontent.com/file/th-11134207-7r991-lx9rahq57xkg33.webp",
        description: "เสื้อกล้ามสีขาวเนื้อผ้าฝ้าย ใส่สบายเหมาะสำหรับวันสบายๆ"
    },
    {
        id: 7,
        name: "กางเกงยีนส์สีน้ำเงิน",
        price: 1190,
        category: "bottom",
        image: "https://down-th.img.susercontent.com/file/cn-11134207-7ras8-mb3m359ua9k1c6.webp",
        description: "กางเกงยีนส์สีน้ำเงินแบบสกินนี่ ใส่กระชับพอดีตัว"
    },
    {
        id: 8,
        name: "กำไลเงินลายเรขาคณิต",
        price: 890,
        category: "accessory",
        image: "https://down-th.img.susercontent.com/file/sg-11134201-7rdxn-mchm5mqd26k7f2.webp",
        description: "กำไลเงินลายเรขาคณิต ดีไซน์ทันสมัย ใส่คู่กับชุดไหนก็ดูดี"
    }
];

// แสดงสินค้าในหน้าหลัก
function displayFeaturedProducts() {
    const featuredContainer = document.getElementById('featured-products');
    
    if (featuredContainer) {
        const featuredProducts = products.slice(0, 4);
        
        featuredProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product-card');
            productElement.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <div class="product-price">${product.price} บาท</div>
                    <button class="add-to-cart" data-id="${product.id}">เพิ่มในตะกร้า</button>
                </div>
            `;
            featuredContainer.appendChild(productElement);
        });
    }
}

// แสดงสินค้าทั้งหมดในหน้ารายการสินค้า
function displayAllProducts() {
    const productsContainer = document.getElementById('all-products');
    
    if (productsContainer) {
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product-card');
            productElement.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <div class="product-price">${product.price} บาท</div>
                    <button class="add-to-cart" data-id="${product.id}">เพิ่มในตะกร้า</button>
                </div>
            `;
            productsContainer.appendChild(productElement);
        });
    }
}

// ฟังก์ชันกรองสินค้า
function setupFilters() {
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    
    if (categoryFilter && priceFilter) {
        categoryFilter.addEventListener('change', filterProducts);
        priceFilter.addEventListener('change', filterProducts);
    }
}

function filterProducts() {
    const categoryValue = document.getElementById('category-filter').value;
    const priceValue = document.getElementById('price-filter').value;
    const productsContainer = document.getElementById('all-products');
    
    if (!productsContainer) return;
    
    // ล้างสินค้าที่แสดงอยู่
    productsContainer.innerHTML = '';
    
    // กรองสินค้าตามเงื่อนไข
    const filteredProducts = products.filter(product => {
        // กรองตามหมวดหมู่
        if (categoryValue !== 'all' && product.category !== categoryValue) {
            return false;
        }
        
        // กรองตามราคา
        if (priceValue !== 'all') {
            const [min, max] = priceValue.split('-').map(Number);
            
            if (max) {
                return product.price >= min && product.price <= max;
            } else {
                return product.price >= min;
            }
        }
        
        return true;
    });
    
    // แสดงสินค้าที่กรองแล้ว
    filteredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product-card');
        productElement.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-price">${product.price} บาท</div>
                <button class="add-to-cart" data-id="${product.id}">เพิ่มในตะกร้า</button>
            </div>
        `;
        productsContainer.appendChild(productElement);
    });
}

// ฟังก์ชันติดตั้ง Event Listeners
function setupEventListeners() {
    // ฟังก์ชันสำหรับปุ่มเพิ่มในตะกร้า
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            addToCart(productId);
        }
    });
    
    // ฟังก์ชันสำหรับฟอร์มติดต่อ
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('ขอบคุณสำหรับข้อความของคุณ! เราจะติดต่อกลับไปในเร็วๆนี้');
            contactForm.reset();
        });
    }
}

// เรียกใช้ฟังก์ชันเมื่อหน้าเว็บโหลดเสร็จ
document.addEventListener('DOMContentLoaded', function() {
    displayFeaturedProducts();
    displayAllProducts();
    setupFilters();
    setupEventListeners();
    updateCartCount();
});