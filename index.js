// async function renderData() {
//   let orders = await fetch("http://127.0.0.1:5500/data/orders.json");
//   let ordersResult = await orders.json();
//   let customer = await fetch("http://127.0.0.1:5500/data/customers.json");
//   let customerResult = await customer.json();
//   let product = await fetch("http://127.0.0.1:5500/data/products.json");
//   let productResult = await product.json();
//   return [ordersResult, customerResult, productResult];
// }
// async function readRendredData(){
// }
// async function buildINdex() {
//   const allData = await renderData();
//   const mainContenaire = document.querySelector(".main_contenaire");
//   let infoTable = document.createElement("table");
//   let tableHeading = document.createElement("th");
//   let tableTD = document.createElement("td");
//   let mainTable = mainContenaire.appendChild(infoTable);
//   for (let i = 0; i < allData.length; i++) {
//     let tableHeadingTr = document.createElement("tr");
//     infoTable.appendChild(tableHeadingTr);

//   }
//   console.log(allData);
// }
// buildINdex();
async function renderProduct() {
  let product = await fetch("http://127.0.0.1:5500/data/products.json");
  let productResult = await product.json();
  const mainContenaire = document.querySelector(".main_contenaire");
  const searchBar = document.createElement("input");
  searchBar.setAttribute("type", "search");
  searchBar.setAttribute("classe", "searchBar");
  mainContenaire.appendChild(searchBar);
  let infoTable = document.createElement("table");
  //   let tableHeader = document.createElement('thead');
  productResult.forEach((element) => {
    let tableHeading = document.createElement("tr");
    // tableHeading.textContent = element.name;
    infoTable.appendChild(tableHeading);
    const elemntArray = Object.values(element);
    const variableString = elemntArray.map((el) => `<td>${el}</td>`);
    tableHeading.innerHTML = variableString.join("");

    searchBar.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase();
      const filtredProduct = productResult.filter((element) => {
        const elementValues = Object.values(element);
        return elementValues.some((value) => {
          String(value).toLowerCase().includes(query);
        });
      });
    });
    // renderProduct(filtredProduct);
  });
  mainContenaire.appendChild(infoTable);
}

renderProduct();
