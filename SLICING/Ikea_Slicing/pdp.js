document.addEventListener("DOMContentLoaded", function () {
    init()
});

const init = () =>{
    bindEventListeners();
}

const containerInfoProduct = document.querySelector('.info-product');
const infoAboutProduct = document.querySelector('.js-infoAboutProduct');
const overlay = document.querySelector('.overlay');
const packagingProduct = document.querySelector('.packaging-product');
const addToCartButton = document.querySelector('.basket');
const addedToCart = document.querySelector('.added-to-cart');



//za slider!!
const leftSliderButton = document.querySelector('.slider-left');
const rightSliderButton = document.querySelector('.slider-right');
const sliderContainer = document.querySelector('.js-slider');

const bindEventListeners = () => {
    containerInfoProduct.addEventListener('click', openInfoAboutProduct);
    infoAboutProduct.addEventListener('click', closeInfoAboutProduct);
    infoAboutProduct.addEventListener('click', openPackagingButton);
    overlay.addEventListener('click', closeInfoAboutProduct);
    addToCartButton.addEventListener('click', openAddedToCart);
    addedToCart.addEventListener('click', closeAddedToCart);
    overlay.addEventListener('click',closeAddedToCart);

    //za slider!!
    leftSliderButton.addEventListener('click', previousProduct);
    rightSliderButton.addEventListener('click', nextProduct);
}

const openInfoAboutProduct = (event) => {

    if(event.target.closest('.js-infoProductButton')){

        infoAboutProduct.classList.remove('is-active');
        overlay.classList.remove('hidden');
    }
    event.preventDefault();
}

const closeInfoAboutProduct = (event) => {

    if(event.target.closest('.js-closeButton') || event.target.closest('.overlay')){

        infoAboutProduct.classList.add('is-active');
        overlay.classList.add('hidden');

    }
    event.preventDefault();
}

const openPackagingButton = (event) => {

    if(event.target.closest('.js-packagingButton')){
        
        packagingProduct.classList.toggle('hidden');
    }
    event.preventDefault();
}

const openAddedToCart = () =>{

    addedToCart.classList.remove('is-active');
    overlay.classList.remove('hidden');

}

const closeAddedToCart = (event) =>{
    
    if(event.target.closest('.js-closeAddedToCart') || event.target.closest('.overlay')){
        addedToCart.classList.add("is-active");
        overlay.classList.add('hidden');
    }
    event.preventDefault();
}

//za slider!!
const previousProduct = () => {
    sliderContainer.scrollLeft -= 70;
}

const nextProduct = () =>{
    sliderContainer.scrollLeft += 70;
}