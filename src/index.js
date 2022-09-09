let willingnessToTryNewClothes = 0;
let diviser = 0;
let factors = [];

// Factors that influence our decision:
// name, value, multiplier (how important it is in your decision making)

addFactor("happiness", 80, 3);
addFactor("self esteem", 80, 1);
addFactor("need to impress", 90, 2);
addFactor("metro", 20, -2);
addFactor("stress", 30, -1);

for (let factor of factors) {
  willingnessToTryNewClothes += factor.amount * factor.importance;

  if (factor.importance > 0) diviser += factor.importance;
}

function addFactor(name, amount, importance) {
  factors.push({
    name: name,
    amount: amount,
    importance: importance
  });
}

willingnessToTryNewClothes /= diviser;
// if( willingnessToTryNewClothes > 100 ) willingnessToTryNewClothes = 100;
// if( willingnessToTryNewClothes < 0 ) willingnessToTryNewClothes = 0;

let tableHeaders = ["name", "amount", "importance"];
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
