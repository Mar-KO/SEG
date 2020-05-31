// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		price: 10.00
	},
	{
		name: "tuna",
		vegetarian: false,
		glutenFree: true,
		price: 13.00
	},
	{
		name: "rice",
		vegetarian: true,
		glutenFree: false,
		price: 0.99
	},
	{
		name: "cheese",
		vegetarian: true,
		glutenFree: true,
		price: 5.00
	},
	{
		name: "tomato",
		vegetarian: true,
		glutenFree: true,
		price: 0.50
	},
	{
		name: "lettuce",
		vegetarian: true,
		glutenFree: true,
		price: 3.00
	},
	{
		name: "sirloin steak",
		vegetarian: false,
		glutenFree: true,
		price: 20.00
	},
	{
		name: "fried chicken",
		vegetarian: false,
		glutenFree: false,
		price: 10.00
	},
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);

		}else if ((restriction == "Vegetarian&&GlutenFree") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}