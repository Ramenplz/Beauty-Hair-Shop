document.addEventListener('DOMContentLoaded', function() {
    // แสดงรายการสินค้าและยอดรวม
    displayOrderSummary();
    
    // จัดการฟอร์มชำระเงิน
    const paymentForm = document.getElementById('payment-form');
    if (paymentForm) {
        paymentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            processPayment();
        });
    }
});

// แสดงสรุปคำสั่งซื้อ
function displayOrderSummary() {
    const orderItemsContainer = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total-price');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
        orderItemsContainer.innerHTML = '<p>ไม่มีสินค้าในตะกร้า</p>';
        orderTotalElement.textContent = '0';
        return;
    }
    
    let totalPrice = 0;
    orderItemsContainer.innerHTML = '';
    
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('order-item');
        itemElement.innerHTML = `
            <div class="order-item-name">${item.name} x ${item.quantity}</div>
            <div class="order-item-price">${item.price * item.quantity} บาท</div>
        `;
        orderItemsContainer.appendChild(itemElement);
        
        totalPrice += item.price * item.quantity;
    });
    
    orderTotalElement.textContent = totalPrice;
}

// ประมวลผลการชำระเงิน
function processPayment() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
        alert('ไม่มีสินค้าในตะกร้า');
        return;
    }
    
    const paymentData = {
        cardName: document.getElementById('card-name').value,
        cardNumber: document.getElementById('card-number').value,
        totalAmount: document.getElementById('order-total-price').textContent
    };
    
    // ล้างตะกร้าสินค้าหลังชำระเงินเสร็จสิ้น
    localStorage.removeItem('cart');
    updateCartCount();
    
    alert('การชำระเงินเสร็จสิ้น! ขอบคุณสำหรับการสั่งซื้อ');
    
    window.location.href = 'index.html';
}