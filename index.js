// Object {}
// create object with 10 element
const farming = {
    farmerName: "sunday",
    farmLand: "1 plot",
    location:  "Nsukka",
    cropType: "rice",
    livestock: "chicken",
    Workers: 10,
    season: "rainy",
    annualyeild: "120 bags",
    investment: "$20,000",
    isOrganic: true,
} 
//console.log(farming);

// Delete two element
delete farming.investment;
delete farming.isOrganic;
 console.log(farming);

// Add three element
farming. equipment = "tractor";
farming. harvestTime = "6 months";
farming. market = "local market";
console.log(farming);

// print elements & length
  const element = {
  farmerName: 'sunday',
  farmLand: '1 plot',
  location: 'Nsukka',
  cropType: 'rice',
  livestock: 'chicken',
  Workers: 10,
  season: 'rainy',
  annualyeild: '120 bags',
  equipment: 'tractor',
  harvestTime: '6 months',
  market: 'local market'
};
console.log("Total Elements:", Object.keys(farming).length);
//Total Elements: 11


// Array []
//create an array of 10 different numbers
 array4 = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
 console.log(array4);

 // Delete the last two
  array4 = [10,15,20,25,30,35,40,45,50,55];
 array4.pop();
  console.log(array4)

 array4.pop();
 console.log(array4);

 //change into an array of animals
  array4 = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

  array4[0] = "cat";
  array4[1] = "cow";
  array4[2] = "dog";
  array4[3] = "goat";
  array4[4] = "hen";
  array4[5] = "lion";
  array4[6] = "horse";
  array4[7] = "bird";
  array4[8] = "elephant";
  array4[9] = "monkey";
console.log(array4);
 
//condition with if, else statement with creative  reasonsoning conditios
array4 = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

//if , else if , else  statement with creative reasoning conditions
if (array4 => 5){
    console.log("Enter");
}else if (array4 < 5){
    console.log("Display Error");
}else{
    console.log("Try again");
}