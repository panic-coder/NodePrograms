var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('./json/inventory.json', 'utf8'));
for(var i=0;i<obj.length;i++){
    console.log(obj[i].price);
}
//console.log(Array.isArray(obj));
 
var totalPrice = 0;
var totalWeight = 0;

obj.forEach(element => {
   //console.log(element.name);
   totalPrice = totalPrice + element.price;
   totalWeight = totalWeight + element.weight;
});
console.log('Total Price : ',totalPrice);
console.log('Total Weight : ',totalWeight);
var str
var json = JSON.stringify({"Total_Price":totalPrice,"Total_Weight":totalWeight});
fs.writeFile('./json/inventory_output.json', json,  function(err) {
    if (err) throw err;
    console.log('complete');
    });

