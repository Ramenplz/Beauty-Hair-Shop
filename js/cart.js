// ระบบตะกร้าสินค้า
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// เพิ่มสินค้าในตะกร้า
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    updateCart();
    showAddToCartMessage(product.name);
}

// แสดงข้อความเมื่อเพิ่มสินค้าในตะกร้า
function showAddToCartMessage(productName) {
    const message = document.createElement('div');
    message.textContent = `เพิ่ม ${productName} ในตะกร้าแล้ว!`;
    message.style.position = 'fixed';
    message.style.bottom = '20px';
    message.style.right = '20px';
    message.style.backgroundColor = 'var(--accent-color)';
    message.style.color = 'white';
    message.style.padding = '10px 20px';
    message.style.borderRadius = '5px';
    message.style.boxShadow = '0 3px 10px rgba(0,0,0,0.2)';
    message.style.zIndex = '1000';
    message.style.animation = 'slideIn 0.3s, fadeOut 0.5s 2.5s forwards';
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 3000);
}

// อัพเดทตะกร้าสินค้า
function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    // ถ้าอยู่ในหน้าตะกร้า ให้อัพเดทรายการสินค้า
    if (window.location.pathname.includes('cart.html')) {
        displayCartItems();
    }
}

// อัพเดทจำนวนสินค้าในตะกร้าแสดงที่ไอคอน
function updateCartCount() {
    const cartCountElements = document.querySelectorAll('#cart-count');
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    
    cartCountElements.forEach(element => {
        element.textContent = totalItems;
    });
}

// แสดงสินค้าในตะกร้า
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalItemsElement = document.getElementById('total-items');
    const totalPriceElement = document.getElementById('total-price');
    
    if (!cartItemsContainer) return;
    
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">ตะกร้าสินค้าของคุณว่างเปล่า</p>';
        totalItemsElement.textContent = '0';
        totalPriceElement.textContent = '0';
        return;
    }
    
    let totalItems = 0;
    let totalPrice = 0;
    
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <div class="cart-item-price">${item.price} บาท</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn minus" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn plus" data-id="${item.id}">+</button>
                </div>
                <div class="remove-item" data-id="${item.id}">ลบออก</div>
            </div>
            <div class="cart-item-total">
                ${item.price * item.quantity} บาท
            </div>
        `;
        cartItemsContainer.appendChild(itemElement);
        
        totalItems += item.quantity;
        totalPrice += item.price * item.quantity;
    });
    
    totalItemsElement.textContent = totalItems;
    totalPriceElement.textContent = totalPrice;
    
    // เพิ่ม Event Listeners สำหรับปุ่ม +/-
    document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
        btn.addEventListener('click', function() {
            updateQuantity(parseInt(this.getAttribute('data-id')), -1);
        });
    });
    
    document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
        btn.addEventListener('click', function() {
            updateQuantity(parseInt(this.getAttribute('data-id')), 1);
        });
    });
    
    // เพิ่ม Event Listeners สำหรับปุ่มลบสินค้า
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', function() {
            removeFromCart(parseInt(this.getAttribute('data-id')));
        });
    });
}

// อัพเดทจำนวนสินค้า
function updateQuantity(productId, change) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    
    if (itemIndex !== -1) {
        cart[itemIndex].quantity += change;
        
        // ถ้าจำนวนน้อยกว่า 1 ให้ลบสินค้าออกจากตะกร้า
        if (cart[itemIndex].quantity < 1) {
            cart.splice(itemIndex, 1);
        }
        
        updateCart();
    }
}

// ลบสินค้าออกจากตะกร้า
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function setupCheckoutButton() {
    const checkoutBtn = document.getElementById('checkout-btn');
    
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length === 0) {
                alert('ตะกร้าสินค้าของคุณว่างเปล่า');
                return;
            }
            
            // ตรวจสอบว่าล็อกอินหรือไม่
            const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
            
            if (!isLoggedIn) {
                // บันทึก URL ปัจจุบันเพื่อกลับมาหน้าตะกร้าหลังล็อกอิน
                localStorage.setItem('redirectAfterLogin', 'cart.html');
                window.location.href = 'login.html';
            } else {
                // ไปหน้าชำระเงิน
                window.location.href = 'payment.html';
            }
        });
    }
}

// เรียกใช้ฟังก์ชันเมื่อหน้าเว็บโหลดเสร็จ
document.addEventListener('DOMContentLoaded', function() {
    displayCartItems();
    setupCheckoutButton();
    updateCartCount();
});