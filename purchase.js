document.addEventListener("DOMContentLoaded", function() {
    let iconCart = document.querySelector('.fa-cart-shopping');
    let cart = document.querySelector('.cart');
    let close= document.querySelector('.close');

    iconCart.addEventListener('click', function(){
        if(cart.style.right === '-100%'){
            cart.style.right = '0';
        } else {
            cart.style.right = '-100%';
        }
    });
    close.addEventListener('click', function(){
        cart.style.right = '-100%';
    });
    

});
