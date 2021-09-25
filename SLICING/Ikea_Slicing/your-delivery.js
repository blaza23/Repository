document.addEventListener("DOMContentLoaded", function () {
    i();
});
const i = () => {
    if (window.location.pathname === '/index4.html') {
        getProductsFromLocalStorageImage();
    }
    bindEventListener();
}
const next = document.querySelector('.js-nextButton');
const deliveryAssumption = document.querySelector('.delivery-collection');
let getProductsFromLocalStorage = [];

const bindEventListener = () =>{
    next.addEventListener('click',openNextStep);
    deliveryAssumption.addEventListener('click', changeDeliveryAssumption);
}

const handlebars = (templatee, wrapper, data) => {
    const source = document.querySelector(templatee).innerHTML;
    const cardWrapper = document.querySelector(wrapper);
    const template = Handlebars.compile(source);
    const output = template({ data });
    cardWrapper.innerHTML += output;
}
const fetchAllData = () => {
    return fetch(`./data/products_all.json`)
        .then(response => response.json())
        .catch(error => console.log(error));
}
const getProductsFromLocalStorageImage = () => {
    productsFromLocalStorage = [];
    products = JSON.parse(localStorage.getItem('products'));
    fetchAllData().then(data => {
        filterById(data);
        handlebars('#imageTemplate','.your-order-images', productsFromLocalStorage);
    });
}
const filterById = (product) => {
    for (let i = 0; i < products.length; i++) {
        product.moreProducts.productWindow.forEach(data => {
            if (data.itemNo === products[i].id) {
                const productObj = {
                    itemNo: data.itemNo,
                    mainImageUrl: data.mainImageUrl,
                    name: data.name,
                    price: data.price.wholeNumber,
                    typeName: data.typeName,
                    priceUnit: data.priceUnit,
                    quantity: products[i].quantity
                }
                productsFromLocalStorage.push(productObj);
                return;
            }
        });
    }
}

// zatvaranje 1.sadržaja i otvaranje novig 2.
const openNextStep = () => {
    const firstStep = document.querySelector('.js-firstStep');
    const firstStepFinish = document.querySelector('.information-about-delivery');
    const secondStepOpen = document.querySelector('.js-secondStep');
    const secondStep = document.querySelector('.send-order');
    firstStep.classList.add('hidden'); 
    firstStepFinish.classList.remove('hidden'); 
    secondStepOpen.classList.add('hidden');
    secondStep.classList.remove('hidden');
}

//izmjena izmedu dostave i preuzimanja
const changeDeliveryAssumption = (event) => {
    if(event.target.closest('.js-delivery')) {
       document.querySelector('.js-delivery').classList.toggle('activeButton');
       document.querySelector('.js-assumption').classList.toggle('activeButton');
    }
    else if (event.target.closest('.js-assumption')) {
        document.querySelector('.js-delivery').classList.toggle('activeButton');
       document.querySelector('.js-assumption').classList.toggle('activeButton');
    }
}
