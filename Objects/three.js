let product = {
    name: "Ram",
    price: 95000,
    color: 'red',
    discount:'No discount',
    available:"hello everyone"
}
for (prop in product) {
    //console.log(product.prop)
    console.log(product[prop])
}