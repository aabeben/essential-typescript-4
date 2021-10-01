let hatPrice = 100
console.log(`Hat price ${hatPrice}`)
let bootsPrice = "100"
console.log(`Boots price ${bootsPrice}`)
function sumPrices(...numbers) {
	return numbers.reduce((total, val)=>{
		return total+val;
	},0);
}
let totalPrices = sumPrices(hatPrice, bootsPrice);
console.log(`Total: ${totalPrices} ${typeof totalPrices}`);
totalPrices = sumPrices(100, 200, 300)
console.log(`Total: ${totalPrices} ${typeof totalPrices}`)

totalPrices = sumPrices(100,200)
console.log(`Total: ${totalPrices} ${typeof totalPrices}`)
totalPrices = sumPrices(100);
console.log(`Total: ${totalPrices} ${typeof totalPrices}`);



if (hatPrice === bootsPrice) {
	console.log("Price are the same")
} else {
	console.log("Prices are diffrent")
}
//let totalPrice = Number(hatPrice) + Number(bootsPrice)
//console.log(`Total price: ${totalPrice}`);


let myVariable = "Adam"
console.log(`Type: ${typeof myVariable}`);
myVariable = 100
console.log(`Type: ${typeof myVariable}`);



let firstCity;
let secondCity = firstCity || "London"
//console.log(`City: ${secondCity}`)
console.log(`City: ${firstCity || "London"}`)


let taxRate; // no tax rate has been defined
console.log(`Tax rate: ${taxRate ?? 10}%`)
taxRate = 0
console.log(`Tax rate: ${taxRate ?? 10}%`)