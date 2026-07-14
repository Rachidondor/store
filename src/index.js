import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
console.log('اهلا بك في حسوب')
import '@fortawesome/fontawesome-free/js/all.js';
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
document.querySelectorAll(".add-to-cart-btn").forEach(item => {
    item.addEventListener('click', () => {
        alert('تم الإضافة إلى عربة الشراء')
    })
})

document.querySelectorAll('.size-option input[type="radio"]').forEach(item => {
    item.addEventListener('change', () => {
      document.querySelectorAll('.size-option').forEach(i => {
        i.classList.remove('active')
      })
      item.parentNode.parentNode.classList.add('active')  
    })
})
document.querySelectorAll('.color-option input[type="radio"]').forEach(item => {
    item.addEventListener('change', () => {
      document.querySelectorAll('.color-option').forEach(i => {
        i.classList.remove('active')
      })
      item.parentNode.parentNode.classList.add('active')  
    })
})
// حساب سعر اجمالي المنتج
document.querySelectorAll('.quantity').forEach(item => {
  item.addEventListener('change', () => {
    const newQuantity = item.value;
    const parent = item.closest('[data-product-info]');
    const pricePerUnit = parent.getAttribute('data-product-price');
    const totalPriceForProduct = newQuantity * pricePerUnit
    parent.querySelector('.total-price-for-product').innerHTML = totalPriceForProduct + "$";
     calculateTotalPrice()
  })
})
document.querySelectorAll('[data-remove-from-card]').forEach(item => {
  item.addEventListener('click', () => {
    item.closest('[data-product-info]').remove()
    calculateTotalPrice() 
  })
})
function calculateTotalPrice() {
  let totalPriceForAllProduct = 0;
    document.querySelectorAll('[data-product-info]').forEach(product =>{
      const pricePerUnit = product.getAttribute('data-product-price');
      const quantity = product.querySelector('.quantity').value
      const totalPriceForProduct = pricePerUnit * quantity
      totalPriceForAllProduct = totalPriceForAllProduct + totalPriceForProduct;
    })
    document.getElementById('total-price-for-all-product').innerHTML = totalPriceForAllProduct
}

document.getElementById('copyright').innerHTML = "جميع الحقوق محفوظة للمتجر سنة " + new Date().getFullYear();