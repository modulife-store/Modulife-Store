// 1. Products Data
const products = [
  { name: "Vitamin C Serum 30ml", cat: "beauty", price: 2500, old: 3125, rating: 4.6, badge: "-20%", label: "VITAMIN C", img: "./images/Vitamin C Serum 30ml.jpg" },
  { name: "URAPRA Glycolic Acid 7% Toner", cat: "beauty", price: 1500, old: 2000, rating: 4.8, badge: "-25%", label: "GLYCOLIC TONER", new: true, img:"./images/Toner URAPRA Glycolic Acid 7% Toner.jpg" },
  { name: "Hyaluronic Acid Moisturizer", cat: "beauty", price: 1800, old: 2118, rating: 4.9, badge: "-15%", label: "HYDRATION", img: "./images/Hyaluronic Acid Moisturizer.jpeg" },
  { name: "Niacinamide Face Wash", cat: "beauty", price: 800, old: null, rating: 4.7, badge: "BEST", label: "FACE WASH", img: "./images/Niacinamide Face Wash.jpg" },
  { name: "SPF 50+ Sunscreen", cat: "beauty", price: 1200, old: 1333, rating: 4.5, badge: "-10%", label: "SPF 50+", img: "./images/SPF 50+ Sunscreen.jpg" },
  { name: "Retinol Night Cream", cat: "beauty", price: 2800, old: null, rating: 4.4, badge: "NEW", label: "NIGHT CREAM", new: true, img: "./images/Retinol Night Cream.jpg" },
  { name: "Charcoal Face Mask", cat: "beauty", price: 600, old: 857, rating: 4.6, badge: "-30%", label: "CHARCOAL", img: "./images/Charcoal Face Mask.jpg" },
  { name: "Lip Balm Trio Set", cat: "beauty", price: 500, old: null, rating: 4.8, badge: "", label: "LIP BALM", img: "./images/Lip Balm Trio Set.jpg" },
  { name: "Seamless Bra Pack of 2", cat: "women", price: 1000, old: 1333, rating: 4.7, badge: "-25%", label: "SEAMLESS", img: "./images/Seamless Bra Pack of 2.jpg" },
  { name: "Premium Padded Bra", cat: "women", price: 1200, old: null, rating: 4.6, badge: "NEW", label: "PREMIUM", new: true, img: "./images/Premium Padded Bra.jpeg" },
  { name: "Strapless Bra", cat: "women", price: 1100, old: 1375, rating: 4.5, badge: "-20%", label: "STRAPLESS", img: "./images/Strapless Bra.jpg" },
  { name: "Cotton Comfort Bra", cat: "women", price: 800, old: null, rating: 4.8, badge: "BEST", label: "COMFORT", img: "./images/Cotton Comfort Bra.jpg" },
  { name: "Women's Premium T-Shirt", cat: "women", price: 1500, old: 1765, rating: 4.4, badge: "-15%", label: "T-SHIRT", img: "./images/Women's Premium T-Shirt.jpg" },
  { name: "Casual Women's Shorts", cat: "women", price: 1800, old: 2000, rating: 4.3, badge: "-10%", label: "SHORTS", img: "./images/Casual Women's Shorts.png" },
  { name: "Premium Cotton T-Shirt", cat: "men", price: 1300, old: 1625, rating: 4.6, badge: "-20%", label: "COTTON TEE", img: "./images/Premium Cotton T-Shirt.jpg" },
  { name: "Casual Button-Up Shirt", cat: "men", price: 2200, old: 2444, rating: 4.5, badge: "-10%", label: "SHIRT", img: "./images/Casual Button-Up Shirt.jpg" },
  { name: "Slim-Fit Jeans", cat: "men", price: 2500, old: null, rating: 4.4, badge: "", label: "DENIM", img: "./images/Slim-Fit Jeans.jpg" },
  { name: "Premium Hoodie", cat: "men", price: 2000, old: null, rating: 4.7, badge: "NEW", label: "HOODIE", new: true, img: "./images/Premium Hoodie.jpg" },
  { name: "Crew-Neck Tee Pack of 3", cat: "men", price: 2400, old: 2824, rating: 4.8, badge: "-15%", label: "3 PACK", img: "./images/Crew-Neck Tee Pack of 3.jpg" },
  { name: "Leather Wallet", cat: "accessories", price: 999, old: 1249, rating: 4.6, badge: "-20%", label: "WALLET", img: "./images/Leather Wallet.jpg" },
  { name: "Crossbody Bag", cat: "accessories", price: 3500, old: 3889, rating: 4.5, badge: "-10%", label: "CROSSBODY", img: "./images/Crossbody Bag.jpg" },
  { name: "Premium Sunglasses", cat: "accessories", price: 2200, old: null, rating: 4.4, badge: "", label: "SUNGLASSES", img: "./images/Premium Sunglasses.jpg" },
  { name: "Silk Scarf", cat: "accessories", price: 1500, old: 1765, rating: 4.7, badge: "-15%", label: "SILK SCARF", img: "./images/Silk Scarf.jpeg" },
  { name: "Organic Shampoo 250ml", cat: "personal", price: 450, old: 600, rating: 4.8, badge: "-25%", label: "SHAMPOO", img: "./images/Organic Shampoo 250ml.jpg" },
  { name: "Deodorant Pack of 2", cat: "personal", price: 600, old: null, rating: 4.5, badge: "", label: "DEODORANT", img: "./images/Deodorant Pack of 2.jpg" }
];

let cart = JSON.parse(localStorage.getItem("modulifeCart") || "[]");
const money = n => "Rs. " + Number(n).toLocaleString("en-PK");

// 3. Card Template Generator
function card(p, i) {
  return `<article class="product-card">
    ${p.badge ? `<span class="badge ${p.badge.includes("%") ? "sale" : ""}">${p.badge}</span>` : ""}
    <button class="wish" onclick="toggleWish('${p.name.replaceAll("'", "\\'")}')">♡</button>
    <div class="product-img" style="--product-bg: url(${JSON.stringify(p.img)})">
      <img src="${p.img}" alt="${p.name}" loading="lazy" decoding="async">
    </div>
    <div class="product-info">
      <h3>${p.name}</h3>
      <div class="rating">★★★★★ <span>${p.rating}</span></div>
      <div class="price">${money(p.price)} ${p.old ? `<span class="old">${money(p.old)}</span>` : ""}</div>
      <div class="product-actions">
        <button class="add" onclick="addToCart(${i})">ADD TO CART</button>
        <button class="quick" onclick="quickView(${i})">↗</button>
      </div>
    </div>
  </article>`;
}

// 4. Product Display & Filtering
function renderProducts() {
  const catEl = document.getElementById("categoryFilter");
  const priceEl = document.getElementById("priceFilter");
  const ratingEl = document.getElementById("ratingFilter");
  const sortEl = document.getElementById("sortSelect");

  if (!catEl || !priceEl || !ratingEl || !sortEl) return;

  const cat = catEl.value;
  const max = +priceEl.value;
  const minR = +ratingEl.value;
  const sort = sortEl.value;

  let arr = products.filter(p => (cat === "all" || p.cat === cat) && p.price <= max && p.rating >= minR);

  if (sort === "low") arr.sort((a, b) => a.price - b.price);
  if (sort === "high") arr.sort((a, b) => b.price - a.price);
  if (sort === "rating") arr.sort((a, b) => b.rating - a.rating);
  if (sort === "newest") arr.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));

  const resultLabel = document.getElementById("resultLabel");
  const productGrid = document.getElementById("productGrid");

  if (resultLabel) resultLabel.textContent = arr.length + " products";
  if (productGrid) {
    productGrid.innerHTML = arr.length
      ? arr.map(p => card(p, products.indexOf(p))).join("")
      : `<div class="empty">No products match your filters.</div>`;
  }
}

function filterProducts(cat) {
  setTimeout(() => {
    const catEl = document.getElementById("categoryFilter");
    if (catEl) {
      catEl.value = cat;
      renderProducts();
    }
  }, 30);
}

function renderMini(id, cat, count = 4) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = products
    .filter(p => p.cat === cat)
    .slice(0, count)
    .map(p => card(p, products.indexOf(p)))
    .join("");
}

function renderNewArrivals(id, count = 4) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = products
    .filter(p => p.new === true)
    .slice(0, count)
    .map(p => card(p, products.indexOf(p)))
    .join("");
}

// 5. Cart Functions
function addToCart(i) {
  const p = products[i];
  const found = cart.find(x => x.name === p.name);
  found ? found.qty++ : cart.push({ name: p.name, price: p.price, label: p.label, qty: 1 });
  saveCart();
  toast("Added to cart");
}

function saveCart() {
  localStorage.setItem("modulifeCart", JSON.stringify(cart));
  const cartCountEl = document.getElementById("cartCount");
  if (cartCountEl) {
    cartCountEl.textContent = cart.reduce((a, x) => a + x.qty, 0);
  }
}

function openModal(content) {
  const modal = document.getElementById("modal");
  const overlay = document.getElementById("overlay");
  if (modal && overlay) {
    modal.innerHTML = content;
    overlay.classList.add("open");
  }
}

function closeModal(e) {
  if (!e || e.target.id === "overlay") {
    const overlay = document.getElementById("overlay");
    if (overlay) overlay.classList.remove("open");
  }
}

function openCart() {
  let total = cart.reduce((a, x) => a + x.price * x.qty, 0);
  openModal(`
    <button class="modal-close" onclick="document.getElementById('overlay').classList.remove('open')">×</button>
    <h2>Your Cart</h2>
    ${cart.length
      ? cart.map((x, i) => `
        <div class="cart-row">
          <div class="cart-thumb">${x.label}</div>
          <div>
            <b>${x.name}</b>
            <div class="qty">
              <button onclick="changeQty(${i},-1)">−</button>
              ${x.qty}
              <button onclick="changeQty(${i},1)">+</button>
            </div>
          </div>
          <strong>${money(x.price * x.qty)}</strong>
        </div>`).join("")
      : `<div class="empty">Your cart is empty.<br><br><a class="btn primary" href="#shop" onclick="document.getElementById('overlay').classList.remove('open')">EXPLORE COLLECTION</a></div>`
    }
    ${cart.length
      ? `<h3 style="text-align:right;margin-top:22px">Total: ${money(total)}</h3>
         <div class="modal-actions">
           <button class="btn primary" onclick="checkout()">CHECKOUT</button>
           <button class="btn outline" onclick="orderCartWhatsApp()">ORDER ON WHATSAPP</button>
         </div>`
      : ""
    }
  `);
}

function changeQty(i, d) {
  cart[i].qty += d;
  if (cart[i].qty <= 0) cart.splice(i, 1);
  saveCart();
  openCart();
}

// 6. Checkout Form Modal
function checkout() {
  if (cart.length === 0) {
    toast("Your cart is empty!");
    return;
  }
  openModal(`
    <button class="modal-close" onclick="document.getElementById('overlay').classList.remove('open')">×</button>
    <h2>Order Details</h2>
    <p style="color:#777">Your order details will be sent directly to our WhatsApp. No account or online payment is required.</p>
    <form class="checkout-form" id="checkoutForm" onsubmit="placeOrder(event)">
      <input required name="client_name" placeholder="Full Name *">
      <input required name="client_phone" placeholder="Phone Number *">
      <input type="email" name="client_email" placeholder="Email">
      <input required name="city" placeholder="City *">
      <input required name="delivery_address" class="full" placeholder="Complete Address *">
      <select required name="province">
        <option value="">Province *</option>
        <option>Punjab</option>
        <option>Sindh</option>
        <option>Khyber Pakhtunkhwa</option>
        <option>Balochistan</option>
        <option>Islamabad Capital Territory</option>
        <option>Gilgit-Baltistan</option>
        <option>Azad Jammu & Kashmir</option>
      </select>
      <input name="postal_code" placeholder="Postal Code">
      <textarea name="order_notes" class="full" placeholder="Order Notes (Optional)"></textarea>
      <label class="full"><input type="radio" checked> Cash on Delivery</label>
      <label class="full"><input type="checkbox" required> I agree to Terms & Conditions</label>
      <button type="submit" id="submitOrderBtn" class="btn primary full">PLACE ORDER ON WHATSAPP</button>
    </form>
  `);
}

// 7. Order Placement via WhatsApp
function placeOrder(e) {
  e.preventDefault();

  if (!cart || cart.length === 0) {
    alert("Aapka cart khali hai!");
    return;
  }

  const form = e.target;
  const submitBtn = document.getElementById("submitOrderBtn");

  if (submitBtn) {
    submitBtn.innerText = "Opening WhatsApp...";
    submitBtn.disabled = true;
  }

  // Generate a simple order number locally — no database/backend required.
  const today = new Date();
  const datePart = today.toISOString().slice(0, 10).replaceAll("-", "");
  const randomPart = String(Math.floor(Math.random() * 9000) + 1000);
  const orderNo = `MOD-${datePart}-${randomPart}`;

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.qty),
    0
  );

  const clientName = form.querySelector('[name="client_name"]')?.value.trim() || "";
  const clientPhone = form.querySelector('[name="client_phone"]')?.value.trim() || "";
  const clientEmail = form.querySelector('[name="client_email"]')?.value.trim() || "N/A";
  const city = form.querySelector('[name="city"]')?.value.trim() || "";
  const address = form.querySelector('[name="delivery_address"]')?.value.trim() || "";
  const province = form.querySelector('[name="province"]')?.value.trim() || "";
  const postal = form.querySelector('[name="postal_code"]')?.value.trim() || "N/A";
  const notes = form.querySelector('[name="order_notes"]')?.value.trim() || "None";

  const itemsList = cart.map((item, index) => {
    const lineTotal = Number(item.price) * Number(item.qty);
    return `${index + 1}. ${item.name}\n   Qty: ${item.qty} × ${money(item.price)} = ${money(lineTotal)}`;
  }).join("\n");

  const message =
`🛍️ *NEW MODULIFE STORE ORDER*

📦 *Order No:* ${orderNo}

👤 *Customer Details*
Name: ${clientName}
Phone: ${clientPhone}
Email: ${clientEmail}

📍 *Delivery Details*
Address: ${address}
City: ${city}
Province: ${province}
Postal Code: ${postal}

🛒 *Product Details*
${itemsList}

💰 *Total: ${money(total)}*
💵 Payment: Cash on Delivery

📝 *Order Notes:* ${notes}

Please confirm my order. Thank you!`;

  // Direct WhatsApp checkout. No EmailJS, database, or backend is used.
  const whatsappNumber = "923044637523";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank");

  // Keep the cart until WhatsApp opens so the customer can retry if needed.
  setTimeout(() => {
    if (submitBtn) {
      submitBtn.innerText = "PLACE ORDER ON WHATSAPP";
      submitBtn.disabled = false;
    }

    openModal(`
      <button class="modal-close"
        onclick="document.getElementById('overlay').classList.remove('open')">×</button>
      <h2>✓ Order Ready!</h2>
      <p>Your order details have been prepared in WhatsApp.</p>
      <p><b>Order No:</b> ${orderNo}</p>
      <p style="color:#777">Please send the pre-filled WhatsApp message to complete your order.</p>
      <div class="modal-actions">
        <button class="btn primary"
          onclick="window.open('${whatsappUrl.replace(/'/g, "\\'")}', '_blank')">
          OPEN WHATSAPP
        </button>
        <button class="btn outline"
          onclick="document.getElementById('overlay').classList.remove('open')">
          CLOSE
        </button>
      </div>
    `);
  }, 500);
}

// 8. Utility Modals & Actions
function quickView(i) {
  const p = products[i];
  openModal(`
    <button class="modal-close" onclick="document.getElementById('overlay').classList.remove('open')">×</button>
    <div class="product-img" style="height:260px"><img src="${p.img}" alt="${p.name}"></div>
    <p class="eyebrow">${p.cat}</p><h2>${p.name}</h2><div class="rating">★★★★★ ${p.rating}</div><h3>${money(p.price)}</h3>
    <p style="line-height:1.8;color:#666">A carefully selected Modulife essential designed for everyday use.</p>
    <div class="modal-actions">
      <button class="btn primary" onclick="addToCart(${i});document.getElementById('overlay').classList.remove('open')">ADD TO CART</button>
      <button class="btn outline" onclick="openWhatsApp('${p.name}')">ORDER ON WHATSAPP</button>
    </div>
  `);
}

function showAccount() {
  openModal(`
    <button class="modal-close" onclick="document.getElementById('overlay').classList.remove('open')">×</button>
    <h2>My Account</h2>
    <p style="color:#777">Create an account to view orders, wishlist and saved addresses.</p>
    <div class="checkout-form">
      <input placeholder="Email or Phone">
      <input placeholder="Password" type="password">
      <button class="btn primary full">LOGIN</button>
      <button class="btn outline full">CREATE ACCOUNT</button>
    </div>
  `);
}

function showWishlist() {
  openModal(`
    <button class="modal-close" onclick="document.getElementById('overlay').classList.remove('open')">×</button>
    <h2>♡ My Wishlist</h2>
    <p style="color:#777">Save your favorite products here.</p>
  `);
}

function openSearch() {
  openModal(`
    <button class="modal-close" onclick="document.getElementById('overlay').classList.remove('open')">×</button>
    <h2>Search Modulife</h2>
    <input id="searchInput" style="width:100%;padding:14px;border:1px solid #ddd" placeholder="Search products..." oninput="searchProducts(this.value)">
    <div id="searchResults" style="margin-top:18px"></div>
  `);
}

function searchProducts(q) {
  const a = products.filter(p => p.name.toLowerCase().includes(q.toLowerCase()));
  const container = document.getElementById("searchResults");
  if (container) {
    container.innerHTML = q
      ? a.map(p => `<div style="padding:10px 0;border-bottom:1px solid #eee"><b>${p.name}</b><span style="float:right">${money(p.price)}</span></div>`).join("")
      : "Type a product name to search.";
  }
}

function openWhatsApp(product = "") {
  let msg = product
    ? `Hello Modulife Store! I'm interested in: ${product}. Can you provide more details?`
    : `Hello Modulife Store! I'd like to know more about your products.`;
  window.open("https://wa.me/923044637523?text=" + encodeURIComponent(msg), "_blank");
}

function orderCartWhatsApp() {
  const list = cart.map(x => `${x.name} x${x.qty} (${money(x.price)})`).join(", ");
  window.open("https://wa.me/923044637523?text=" + encodeURIComponent("Hi Modulife! I'd like to place an order: " + list), "_blank");
}

function subscribe(e) {
  e.preventDefault();
  toast("Thanks! You're on the Modulife list.");
}

function toast(t) {
  const x = document.createElement("div");
  x.textContent = t;
  x.style.cssText = "position:fixed;left:50%;bottom:25px;transform:translateX(-50%);background:#1a2332;color:#fff;padding:12px 18px;z-index:200;font-size:12px;box-shadow:0 8px 20px #0003;border-radius:4px;";
  document.body.appendChild(x);
  setTimeout(() => x.remove(), 2200);
}

function toggleMenu() {
  const el = document.getElementById("mobileNav");
  if (!el) return;
  el.classList.toggle("open");
  document.body.classList.toggle("menu-open", el.classList.contains("open"));
}

function closeMobileMenu() {
  const el = document.getElementById("mobileNav");
  if (!el) return;
  el.classList.remove("open");
  document.body.classList.remove("menu-open");
}

function toggleFilters() {
  const el = document.getElementById("filters");
  if (el) el.classList.toggle("open");
}

function toggleWish(name) {
  toast("Saved to wishlist");
}

function startCountdown() {
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minsEl = document.getElementById("mins");
  const secsEl = document.getElementById("secs");

  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

  let end = Date.now() + 3 * 24 * 60 * 60 * 1000;
  setInterval(() => {
    let s = Math.max(0, Math.floor((end - Date.now()) / 1000));
    daysEl.textContent = String(Math.floor(s / 86400)).padStart(2, "0");
    hoursEl.textContent = String(Math.floor((s % 86400) / 3600)).padStart(2, "0");
    minsEl.textContent = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
    secsEl.textContent = String(Math.floor(s % 60)).padStart(2, "0");
  }, 1000);
}

// Initializations
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  renderMini("beautyProducts", "beauty", 4);
  renderMini("womenProducts", "women", 4);
  renderMini("menProducts", "men", 4);
  renderMini("personalProducts", "personal", 4);
  renderMini("accessoryProducts", "accessories", 4);
  renderNewArrivals("newProducts", 4);
  saveCart();
  startCountdown();

  // Keep broken product images from creating ugly empty/overflowing cards.
  document.addEventListener("error", (event) => {
    const img = event.target;
    if (!(img instanceof HTMLImageElement)) return;
    if (img.closest(".product-img")) {
      img.style.visibility = "hidden";
    }
  }, true);
});
