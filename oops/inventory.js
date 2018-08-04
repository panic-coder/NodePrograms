/**
 * Purpose   : Reading a json file with inventory details and adding the total values of the elements in the inventory.
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 30-07-2018
 */
var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('./json/inventory.json', 'utf8'));
for(var i=0;i<obj.length;i++){
    console.log(obj[i].price);
}
 
var totalPrice = 0;
var totalWeight = 0;

obj.forEach(element => {
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

