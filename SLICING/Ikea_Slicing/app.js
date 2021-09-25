document.addEventListener("DOMContentLoaded", function () {
    init()
});

let id = -1;
let products = [];
let productsFromLocalStorage = [];
let productsFromLocalStoragePrice = [];

const buttonLoadMore = document.querySelector('.page-load__button');
const container = document.querySelector('.grid-wrapper');
const basket = document.querySelector('.basket-counter');
const selectContainer = document.querySelector('.shopping-cart-left')
const totalPricee = document.querySelector('.js-totalPrice');

const init = () => {
    getProducts();
    bindEventListeners();
   
    if (window.location.pathname === '/index3.html') {
        getProductsFromLocalStorage();
        getProductsFromLocalStoragePrice();
       
    }
    if (localStorage.getItem('products') === null) {
        localStorage.setItem('products', JSON.stringify(products));
        products = JSON.parse(localStorage.getItem('products') || []);
    }
    else {
        products = JSON.parse(localStorage.getItem('products') || []);

    }
    // products = localStorage.getItem('productId');
    // products = products ? products.split(',') : [];
    getNumberOfProducts();
    totalPrice();
}

const bindEventListeners = () => {
    buttonLoadMore && buttonLoadMore.addEventListener('click', getProducts);
    container && container.addEventListener('click', findClosestCartButton);
    selectContainer && selectContainer.addEventListener('change',changeProductsSelect);
    selectContainer && selectContainer.addEventListener('change',getProductsFromLocalStoragePrice);
}

const fetchData = () => {
    return fetch(`./data/products${id}.json`)
        .then(response => response.json())
        .catch(error => console.log(error));
}

const handlebars = (templatee, wrapper, data) => {
    const source = document.querySelector(templatee).innerHTML;
    const cardWrapper = document.querySelector(wrapper);
    const template = Handlebars.compile(source);
    const output = template({ data });
    cardWrapper.innerHTML += output;
}

const getProducts = () => {
    id++;
    fetchData().then(data => handlebars('#articleTemplate', '.grid-wrapper', data.moreProducts.productWindow));
}

const findClosestCartButton = (event) => {
    const addToBasket = event.target.closest('.button-addToBasket');
    if (addToBasket) {
        // products.push(addToBasket.dataset.id);
        changeQuantiyOfProduct(addToBasket);
        saveToLocalStorage();
        getNumberOfProducts();
    }
}

const saveToLocalStorage = () => {
    // localStorage.setItem('productId', products);
    localStorage.setItem('products', JSON.stringify(products));
}

const changeQuantiyOfProduct = (productId) => {
    if (products.length === 0) {
        const productObject = {
            'id': productId.dataset.id,
            'quantity': '1'
        }
        products.push(productObject);
        localStorage.setItem('products', JSON.stringify(products));
    }
    else {
        if (products.some(object => object.id === productId.dataset.id)) {
            products.find(object => {
                if (object.id === productId.dataset.id) {
                    object.quantity = parseInt(object.quantity) + 1;
                }
            });
        }
        else {
            const productObject = {
                'id': productId.dataset.id,
                'quantity': '1'
            }
            products.push(productObject);
        }
    }
}

//ODABIROM IZ SELECTA (template-index.3) VRIJEDNOSTI U KOŠARICI SE MJENJA VRIJEDNOST
const changeProductsSelect = (event) => {
    const select = event.target.closest('.product-amount__select');
        products.find(product => {
            if (product.id === select.dataset.idnumber) {
                product.quantity = event.target.value;
                select.options[0].value = event.target.value;
                select.options[0].innerHTML = event.target.value;
                saveToLocalStorage();
                getNumberOfProducts()
            }
        })
}

const getNumberOfProducts = () => {
    // basket.dataset.count = products.length;
    // basket.innerHTML = basket.dataset.count;
    products = JSON.parse(localStorage.getItem('products'));
    let counter = 0;
    products.forEach(item => {
        counter = counter + parseInt(item.quantity);
    });
    basket.dataset.count = counter;
    basket.innerHTML = basket.dataset.count;
}
const fetchAllData = () => {
    return fetch(`./data/products_all.json`)
        .then(response => response.json())
        .catch(error => console.log(error));
}
const getProductsFromLocalStorage = () => {
    productsFromLocalStorage = [];
    products = JSON.parse(localStorage.getItem('products'));

    fetchAllData().then(data => {
        // data.moreProducts.productWindow.filter(filterById);
        filterById(data);
        handlebars('#productTemplate', '.shopping-cart-left', productsFromLocalStorage);
    });
}

const filterById = (product) => {
    // products.forEach(object => {
    //     if (object.id === product.itemNo) {
    //         const productObj = {
    //             itemNo: product.itemNo,
    //             mainImageUrl: product.mainImageUrl,
    //             name: product.name,
    //             price: product.price.wholeNumber,
    //             typeName: product.typeName,
    //             priceUnit: product.priceUnit,
    //             quantity: object.quantity
    //         }
    //         productsFromLocalStorage.push(productObj);
    //     }
    // });

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

        })
    }
}

//TEMPLATE TOTAL PRICE (index3.html) UKUPNA CIJENA PROIZVODA KOJI SU U KOŠARICI
const totalPrice = () => {
    let totalProductPrice = 0;
 
   for(let i = 0; i < productsFromLocalStoragePrice.length; i++) {
       totalProductPrice = totalProductPrice + (parseInt(productsFromLocalStoragePrice[i].price) * parseInt(productsFromLocalStoragePrice[i].quantity));
   }
   console.log(totalProductPrice)
   totalPricee.innerHTML = totalProductPrice + ' kn';
}
const getProductsFromLocalStoragePrice = () => {
    productsFromLocalStoragePrice = [];
    products = JSON.parse(localStorage.getItem('products'));
    fetchAllData().then(data => {
        // data.moreProducts.productWindow.filter(filterById);
        filterByIdPrice(data);
        console.log(productsFromLocalStorage[0]);
        totalPrice();
    });
}
const filterByIdPrice = (product) => {
    for (let i = 0; i < products.length; i++) {
        product.moreProducts.productWindow.forEach(data => {
            if (data.itemNo === products[i].id) {
                const productObj = {
                    itemNo: data.itemNo,
                    price: data.price.wholeNumber,
                    quantity: products[i].quantity
                }
                productsFromLocalStoragePrice.push(productObj);
                return;
            }
        });
    }
}





// const container = document.querySelector('.grid-wrapper');
// const buttonLoadMore = document.querySelector('.page-load__button');
// const addToBasket = document.querySelector('.button-addToBasket');
// let id = 0;
// function fetchData () {
//     return fetch(`./data/products${id}.json`)
//     .then(response => response.json())
//     .then(json => handlebars(json.moreProducts.productWindow))
//     .catch(error => console.log(error));
// }
// function handlebars (data) {
//     const source = document.querySelector('#articleTemplate').innerHTML;
//     const template = Handlebars.compile(source);
//     const output = template({data});
//     container.innerHTML += output;
// }
// fetchData();
// buttonLoadMore.addEventListener('click', () => {
//     id++;
//     if(id === 4) {
//         buttonLoadMore.style.display = 'none';
//     }
//     else {
//         fetchData();
//     }
// });
// container.addEventListener('click', addToCart);
// function addToCart (event) {
//     if(event.target.closest(".button-addToBasket")) {
//         let product = JSON.parse(localStorage.getItem('productId')) || [];
//         let productId = event.target.closest(".button-addToBasket").dataset.id;
//         product.push(productId);
//         localStorage.setItem('productId', JSON.stringify(product));

//         document.querySelector('.basket-counter').innerHTML = `${product.length}`;
//         console.log(event.target.closest(".button-addToBasket").dataset.id);
//     }
//     event.preventDefault();
// }