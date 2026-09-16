const mainContenaire = document.querySelector('.main_contenaire') 
async function renderOrders(){
    let orders= await fetch('http://127.0.0.1:5500/data/orders.json');
    let ordersResult = await orders.json();
    // console.log(result)
}

async function renderCustomers(){
    let customer = await fetch('http://127.0.0.1:5500/data/customers.json')
    let customerResult = await customer.json();
    // console.log(result);
}
async function renderProduct(){
    let product = await fetch('http://127.0.0.1:5500/data/products.json');
    let productResult = await product.json();
    console.log(productResult);
}
function buildINdex(){
    let infoTable = 
}
