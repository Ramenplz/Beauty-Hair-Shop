const categories = [
    "shampoo",       // แชมพู
    "conditioner",   // ครีมนวด
    "treatment",     // ทรีตเมนต์
    "styling",       // สไตลิ่ง
    "tool"           // เครื่องมือจัดแต่งผม
];
// ข้อมูลสินค้า
const products = [
    // หมวด shampoo (10 รายการ)
    { id: 1, name: "PAÑPURI Nourishing Shampoo (Jasmine)", price: 850, category: "shampoo", image: "https://panpuri.com/wp-content/uploads/2023/11/Bath_Body-06_HairCare-Shampoo330ml-PFA02011_330MLE_SiameseWaterNourishingConditioner_330ml-SiameseWaterNourishingConditioner_330ml-1050x1050-1.jpg", description: "แชมพู sulfate‑free หอมมะลิ คืนความชุ่มชื้นและอ่อนโยน" },
    { id: 2, name: "Thai Chamanard Shampoo", price: 550, category: "shampoo", image: "https://essentials.banyantree.com/cdn/shop/files/BanyanTreeEssentialsThaiChamanardShampoo100ml16-01921packshot1G.jpg?v=1697586354&width=500", description: "แชมพู sulfate‑free ออร์แกนิก อาร์แกนออยล์ ซ่อมแซมปลายชี้ฟู" },  
    { id: 3, name: "Boots Ingredients Argan & Jojoba Shampoo", price: 250, category: "shampoo", image: "https://s3.konvy.com/static/team/2025/0325/17428997116403.jpg", description: "แชมพูอาร์แกนและโจโจบา บำรุงผมให้เรียบลื่น" },  
    { id: 4, name: "Naturals by Watsons Argan Shampoo", price: 320, category: "shampoo", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHfBTAzJv3NimX2Kx12aU4wFZPckDgshG6gA&s", description: "แชมพูอาร์แกน บำรุงเส้นผม และแก้ผมเสีย" },  
    { id: 5, name: "Nature's Series Ginger Shampoo", price: 320, category: "shampoo", image: "https://img.lazcdn.com/g/p/47ae6af3c0606566b6409de39cacc538.jpg_720x720q80.jpg", description: "แชมพูขิงออร์แกนิก บำรุงหนังศีรษะ" },  
    { id: 6, name: "Khaokho Talaypu Leech Lime & Centella Shampoo", price: 84, category: "shampoo", image: "https://khaokhotalaypu.com/cdn/shop/products/Leech_Lime_Centella_Herbal_Shampoo_Front_Gray_2853ab22-4243-4625-8e60-d4bc60817490.jpg?v=1636829875", description: "แชมพูสมุนไพรลดผมร่วง สูตรมะกรูดใบบัวบก" },  
    { id: 7, name: "Khaokho Talaypu Butterfly Pea Shampoo", price: 39, category: "shampoo", image: "https://medias.watsons.co.th/publishing/WTCTH-300909-side-zoom.jpg?version=1725563410", description: "แชมพูอัญชัน เสริมความหนาและเงางาม" },  
    { id: 8, name: "Sabunnga Butterfly Pea Shampoo & Conditioner", price: 500, category: "shampoo", image: "https://www.cosmenet.in.th/upload/iblock/ba8/Butterfly-Pea-Sunflower-01.jpg", description: "แชมพู – ครีมนวด คู่สูตรอัญชัน บำรุงผมให้ดำเงา" },  
    { id: 9, name: "Sabunnga Lime & Soapberry Shampoo & Conditioner", price: 500, category: "shampoo", image: "https://www.cosmenet.in.th/upload/iblock/e69/Soapberry-Kaffir-Lime-Conditioner-01.jpg", description: "แชมพูผสมน้ำมะเฟืองและสบู่ไทย ทำความสะอาดล้ำลึก" },  
    { id: 10, name: "Sabunnga Aloe Vera & Sesame Shampoo & Conditioner", price: 500, category: "shampoo", image: "https://kupithai.ru/image/catalog/proisvoditeli/ae2d1a223b3527d77db90a07478ac822.jpg", description: "แชมพูอโลเวราและงาดำ เพิ่มความชุ่มชื้นและป้องกันผมเสีย" },  

    // หมวด conditioner (10 รายการ)
    { id: 11, name: "Watsons OGX Biotin & Collagen Conditioner", price: 184, category: "conditioner", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziJ5KwWaG4Thuq4Xk2f196nTzZHWzN8w24A&s", description: "ครีมนวดบำรุงผมหนาด้วยไบโอตินและคอลลาเจน" },  
    { id: 12, name: "Watsons Tsubaki Premium Moist Repair Conditioner", price: 328, category: "conditioner", image: "https://medias.watsons.co.th/publishing/WTCTH-316628-side-zoom.jpg?version=1741203045", description: "ครีมนวดสูตรญี่ปุ่น ซึมซาบทำให้ผมนุ่มลื่น" },  
    { id: 13, name: "LUSH Candy Rain Conditioner", price: 695, category: "conditioner", image: "https://media.self.com/photos/5dcdb14d392a8000083b4597/master/pass/lush.jpg", description: "ครีมนวด Lush กลิ่น Candy Rain ให้ความชุ่มชื้นสูง" },  
    { id: 14, name: "LUSH Banana Conditioner", price: 995, category: "conditioner", image: "https://unicorn.lush.com/media/file_upload/BANCON-cover_5d6c7efb.jpg", description: "ครีมนวดกล้วย ช่วยปรับสีผมบลอนด์ให้เงางาม" },  
    { id: 15, name: "LUSH Violet Cream Conditioner", price: 475, category: "conditioner", image: "https://lush.com.ph/cdn/shop/files/violet_cream_conditioner_240g_2023_201_1200x1200.png?v=1706601635", description: "ครีมนวดสำหรับผมบลอนด์ ลดโทนอุ่นทอง" },  
    { id: 16, name: "LUSH Power Repair Conditioner", price: 795, category: "conditioner", image: "https://down-th.img.susercontent.com/file/515cc9cdae8a1f2b423a7af2941a8b91", description: "ครีมนวดสูตรซ่อมแซมผมเสียลึก" },  
    { id: 17, name: "LUSH Super Milk Spray", price: 895, category: "conditioner", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWNXh3nUcl5V300q6dwzNwIKELkDDCiXrARQ&s", description: "ครีมสเปรย์น้ำหนักเบา ให้ความชุ่มชื้นปกป้องผม" },  
    { id: 18, name: "Khaokho Talaypu Leech Lime & Centella Conditioner", price: 84, category: "conditioner", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0nuaJBDVWnyyYcS6ktrlwqMFvT_A9YUDilQ&s", description: "ครีมนวดสมุนไพรสูตรมะกรูดใบบัวบก" },  
    { id: 19, name: "Khaokho Talaypu Butterfly Pea Conditioner", price: 84, category: "conditioner", image: "https://th-test-11.slatic.net/p/0781d6a221b078a143045f3aee54b04a.jpg", description: "ครีมนวดอัญชัน เพิ่มความแข็งแรงและเงางาม" },     
    { id: 20, name: "Banyan Tree Essentials Chamanard Conditioner", price: 450, category: "conditioner", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyzAJWKbvFuFjFrzyjnPkeBlQlhB4MHH0LZNsQw0tKUkcEc1oq-o3SUSt-P03g3G2tmuc&usqp=CAU", description: "ครีมนวดออร์แกนิก Argan Oil ฟื้นฟูโครงสร้างเส้นผม" },  // :contentReference[oaicite:18]{index=18}
    
    { id: 21, name: "Hair System by Watsons Rose Water Premium 7‑IN‑1 Hair Treatment", price: 199, category: "treatment", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUIyFtDvAEhK-C4viwav7MbD5O4rzRFg-gDQAMgb99m3gbTX7FidOvcHv5NM0T7D38FGw&usqp=CAU", description: "เอสเซนส์เข้มข้น 7‑IN‑1 ผสาน Rose Water เพื่อบำรุงล้ำลึก" },
    { id: 22, name: "Bualuang Intence Repair Hair Treatment Keratin Smooth & Sericin Protein", price: 280, category: "treatment", image: "https://medias.watsons.co.th/publishing/WTCTH-BP_303113-front-zoom.jpg", description: "ทรีตเมนต์เคราตินและ Sericin ฟื้นฟูผมแห้งเสีย" },
    { id: 23, name: "Watsons Treatment Wax Yoghurt for Rough or Curly Hair", price: 350, category: "treatment", image: "https://medias.watsons.co.th/publishing/WTCTH-BP_297164-front-zoom.jpg", description: "แว็กซ์สูตร Yoghurt และ Biotin เพิ่มความแข็งแรงให้ผม" },
    { id: 24, name: "Go Hair Extra Milk Treatment Hair", price: 240, category: "treatment", image: "https://www.konvy.com/static/team/2024/0926/17273405949935_600x600.jpg", description: "ทรีตเมนต์เนื้อน้ำนมสำหรับผมแห้ง แตกปลาย" },
    { id: 25, name: "Lucido‑L Argan Rich Oil Repair Hair Treatment", price: 320, category: "treatment", image: "https://s2.konvy.com/static/team/2024/0424/2024042413274770641.jpg", description: "เซรั่มอาร์แกนออยล์ น้ำหนักเบา ซ่อมผมแห้งเสีย"},
    { id: 26, name: "AloEx Hair Natura Hair Mask", price: 420, category: "treatment", image: "https://aloexhair.com/wp-content/uploads/2023/08/hairmask-sq.jpg", description: "มาสก์สมุนไพรผสมโสม-อัญชัน-สาหร่าย เสริมความแข็งแรง"},
    { id: 27, name: "Mise‑en‑scène Perfect Serum Original 3‑Min Salon Mask Pack", price: 250, category: "treatment", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNrwe7-GB6UboAY_-qN88Sfr-R0QjSeZlY3A&s", description: "มาสก์ซาลอนใน 3 นาที ผสมน้ำมัน 7 ชนิด บำรุงล้ำ" },
    { id: 28, name: "Dema Hair Growth Serum", price: 370, category: "treatment", image: "https://m.media-amazon.com/images/I/61xZUn5-JjL._UF1000,1000_QL80_.jpg", description: "เซรั่มกระตุ้นผมยาว บำรุงรากผมด้วยวิตามินและสมุนไพร" },
    { id: 29, name: "Yoko Gold Argan Oil Hair Shine Leave On", price: 300, category: "treatment", image: "https://happythaistore.com/958-medium_default/yoko-gold-argan-oil-hair-shine-leave-on-100-ml.jpg", description: "โลชั่นบำรุงปลายผมด้วยอาร์แกนออยล์และโปรตีน" },
    { id: 30, name: "Inecto Naturals Hydration Hair Treatment Coconut", price: 400, category: "treatment", image: "https://m.media-amazon.com/images/I/61jlxllsp8L._UF894,1000_QL80_.jpg", description: "ทรีตเมนต์น้ำมันมะพร้าวออร์แกนิก เพิ่มความชุ่มชื้น" },
    
    { id: 31, name: "Gatsby Meta Rubber Clay Flex 65 g", price: 290, category: "styling", image: "https://s3.konvy.com/static/team/2024/0726/17219655879010.jpg", description: "แว็กซ์ Clay Flex สำหรับจัดทรงเท่แบบวอลลุ่ม" },
    { id: 32, name: "Gatsby Sea Salt Spray Volume Mat 145 ml", price: 189, category: "styling", image: "https://s3.konvy.com/static/team/2025/0430/17459852099880.jpg", description: "สเปรย์เกลือทะเล เพิ่มวอลลุ่มและลุควินเทจ" },
    { id: 33, name: "Gatsby Moving Lock Spray Extra Hard 170 ml", price: 245, category: "styling", image: "https://s3.konvy.com/static/team/2018/0718/15318964524347.jpg", description: "สเปรย์จัดทรงพลังล็อกขั้นสุด" },
    { id: 34, name: "Gatsby Styling Pomade Classy Dry 75 g", price: 230, category: "styling", image: "https://cdn.thebeautrium.com/image-product/B0040738.png", description: "โปเมดลุคคลาสสิก ฟินิชแห้ง ไม่มัน" },
    { id: 35, name: "Taft V12 Styling Gel Gentle On Scalp 150 ml", price: 109, category: "styling", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYBcYNd1o2OGqzNXHGEI773hH3i6PNO7D8Gg&s", description: "เจลใสจัดทรงอ่อนโยนต่อหนังศีรษะ" },
    { id: 36, name: "GOT2B Blasting Freeze Spray 300 ml", price: 285, category: "styling", image: "https://www.konvy.com/static/team/2024/0513/17155875061828_600x600.jpg", description: "สเปรย์จัดทรงสุดแกร่ง ล็อกแน่นแม้เผชิญความชื้น" },
    { id: 37, name: "Hair It Heat Sun Protection Shiny Spray 100 g", price: 197, category: "styling", image: "https://medias.watsons.co.th/publishing/WTCTH-317799-side-zoom.jpg?version=1745435439", description: "สเปรย์ป้องกันความร้อน พร้อมเพิ่มความเงางาม" },
    { id: 38, name: "SMOUSSE Silky Hair Leave-In Foam Peachy Pop 100 ml", price: 349, category: "styling", image: "https://s3.konvy.com/static/team/2025/0418/17449722207225.jpg", description: "โฟมปล่อยใน ผิวนุ่มลื่น กลิ่นพีช" },
    { id: 39, name: "Gatsby Meta Rubber Wax Hard 65 g", price: 290, category: "styling", image: "https://s3.konvy.com/static/team/2024/0726/17219655235251.jpg", description: "แว็กซ์แข็งจัดทรงแน่น ล็อกตัวยาวนาน" },
    { id: 40, name: "TAFT Power Hairspray Hold 5 250 ml", price: 259, category: "styling", image: "https://s3.konvy.com/static/team/2024/0523/17164483319636_600x600.jpg", description: "แฮร์สเปรย์ล็อกสายตลอดวัน ระดับ 5" },

    // หมวด tool (10 รายการ)
    { id: 41, name: "Le Sasha Airmax Smart Hair Dryer 2000 W (LS1553)", price: 1290, category: "tool", image: "https://www.konvy.com/static/team/2021/1109/16364323406117_600x600.jpg", description: "ไดร์เป่าผมพลังสูง ปรับอุณหภูมิแม่นยำ" },
    { id: 42, name: "Le Sasha Auto Twist Hair Curler Lavender (LS1556)", price: 2500, category: "tool", image: "https://www.lesasha.com/storage/2dE3zwzszQ.png", description: "เครื่องม้วนผมออโต้ ลาเวนเดอร์ สวย ลอนเด้ง" },
    { id: 43, name: "Le Sasha Straight Curl Hair Crimper Mint (LS1555)", price: 1160, category: "tool", image: "https://medias.watsons.co.th/publishing/WTCTH-BP_301750-front-zoom.jpg", description: "เครื่องหนีบผมลอนตรง ผิวเคลือบ มินต์" },
    { id: 44, name: "Le Sasha Wavy Hair Crimper Rose (LS1554)", price: 1160, category: "tool", image: "https://medias.watsons.co.th/publishing/WTCTH-301748-side-zoom.jpg", description: "เครื่องหนีบผมหยักศก สีชมพูสุดชิค" },
    { id: 45, name: "Le Sasha Extra Long Hair Straightener (LS0911)", price: 690, category: "tool", image: "https://www.konvy.com/static/team/2021/1220/16399724631717_600x600.jpg", description: "เครื่องหนีบผมตรงแบบยาวพิเศษ สำหรับผมยาว" },
    { id: 46, name: "Le Sasha Wonder 3‑in‑1 Hot Air Styler (LS1249)", price: 999, category: "tool", image: "https://www.lesasha.com/storage/HVlkrp3LEV.png", description: "อุปกรณ์จัดผม 3‑in‑1 แปรง+ไดร์+ลอน" },
    { id: 47, name: "Le Sasha Crimper Smart Hair (LS1694)", price: 640, category: "tool", image: "https://down-th.img.susercontent.com/file/th-11134207-7r98o-lz31s7osj2y1fb", description: "เครื่องม้วนลอนชาร์ป แบบกะทัดรัด" },
    { id: 48, name: "Hair It Flexi Relax Hairbrush Peach", price: 365, category: "tool", image: "https://medias.watsons.co.th/publishing/WTCTH-309882-swatch-zoom.jpg?version=1713565225", description: "หวีแปรงยืดหยุ่น สีพีช ช่วยลดผมขาด" },
    { id: 49, name: "Wet Brush Disney Princess Aurora Mini", price: 345, category: "tool", image: "https://medias.watsons.co.th/publishing/WTCTH-298266-side-zoom.jpg", description: "หวีมินิ ลายเจ้าหญิง Aurora ถนอมเส้นผม" },
    { id: 50, name: "Goody Ouchless mini Hair Bands Black (10 pcs)", price: 95, category: "tool", image: "https://s3.konvy.com/static/team/2023/1123/17007196109796.jpg", description: "ยางรัดผมแบบไม่ทำให้ผมขาด สีดำ แพ็ค10ชิ้น" }
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
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            addToCart(productId);
        }
    });

    // ฟังก์ชันสำหรับฟอร์มติดต่อ
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('ขอบคุณสำหรับข้อความของคุณ! เราจะติดต่อกลับไปในเร็วๆนี้');
            contactForm.reset();
        });
    }
}

// เรียกใช้ฟังก์ชันเมื่อหน้าเว็บโหลดเสร็จ
document.addEventListener('DOMContentLoaded', function () {
    displayFeaturedProducts();
    displayAllProducts();
    setupFilters();
    setupEventListeners();
    updateCartCount();
});