let willingnessToTryNewClothes = 0;
let diviser = 0;
let factors = [];



// addFactor("Mood", 60, 3);
// addFactor("Weather", 15, 0.5);
// addFactor("Metro", 50, -2);

// addFactor("Self esteem", 80, 1);
// addFactor("Need to impress", 90, 2);
// addFactor("Stress", 30, -1);



for (let factor of factors) {
  willingnessToTryNewClothes += factor.value * factor.coef;

  if (factor.coef > 0) diviser += factor.coef;
}

function addFactor(name, amount, importance) {
  factors.push({
    name: name,
    value: amount,
    coef: importance
  });
}

willingnessToTryNewClothes /= diviser;
if( isNaN( willingnessToTryNewClothes ) ) willingnessToTryNewClothes = 0;
if( willingnessToTryNewClothes < 0 ) willingnessToTryNewClothes = 0;

let tableHeaders = ["name", "value", "coef"];
let HTMLTable = "<table><tr>";

for (let header of tableHeaders) {
  HTMLTable += "<th>" + header + "</th>";
}

HTMLTable += "</tr>";

for (let factor of factors) {
  HTMLTable += "<tr>";

  for (let header of tableHeaders) {
    HTMLTable += "<td>" + factor[header] + "</td>";
  }
  HTMLTable += "</tr>";
}

document.getElementById("factorsTable").innerHTML = HTMLTable;
document.getElementById("resultsPercent").innerHTML = Math.round(
  willingnessToTryNewClothes
);
