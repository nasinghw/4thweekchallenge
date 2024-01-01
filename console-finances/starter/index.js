var finances = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];
//The total number of months included in the dataset.
function countmonths(finances) {
  let months = new Set();
    finances.forEach(entry => {
    let [dateStr, value] = entry;
    let monthYear = dateStr.split('-');
    let month = monthYear[0];
    let year = monthYear[1];
    
    months.add(`${month}-${year}`);
  });
    return months.size;
}
let numberOfMonths = countmonths(finances);
console.log("Total Months:", numberOfMonths);

//The net total amount of Profit/Losses over the entire period.

function TotalProfitLoss(finances) {
  let netTotal = 0;
  for (let i = 0; i < finances.length; i++) {
    netTotal += finances[i][1];
  }
  return netTotal;
}
const netTotalAmount = TotalProfitLoss(finances);
console.log('Net Total Amount: £', netTotalAmount);

//The average of the changes in Profit/Losses over the entire period.

function AverageChange(data) {
  let totalChange = 0;

  // Loop through the array to calculate the differences
  for (let i = 1; i < data.length; i++) {
    let currentProfit = data[i][1];
    let previousProfit = data[i - 1][1];
    let difference = currentProfit - previousProfit;
    totalChange += difference;
  }

  // Calculate the average
  let averageChange = totalChange / (data.length - 1);
  return averageChange;
}

// Call the function with your 'finances' array
let averageProfitChange = AverageChange(finances);
console.log("Average change: £", averageProfitChange.toFixed(2));

//



// Initialize variables to hold total change and total months
let totalChange = 0;
let totalMonths = 0;

// Iterate through the finances array starting from the second element
for (let i = 1; i < finances.length; i++) {
  // Extract the profit/loss values of current and previous months
  let currentProfit = finances[i][1];
  let previousProfit = finances[i - 1][1];

  // Calculate the change between current and previous months
  let change = currentProfit - previousProfit;

  // Add the change to the total change
  totalChange += change;
  totalMonths++;
}

// Calculate the average change
let averageChange = totalChange / totalMonths;

// Display the average change rounded to 2 decimal places
console.log("Average Change: £", averageChange.toFixed(2));

//

function calculateGreatestIncrease(data) {
  let greatestIncrease = 0;
  let greatestIncreaseMonth = '';
  let previousValue = data[0][1];

  for (let i = 1; i < data.length; i++) {
    const currentValue = data[i][1];
    const difference = currentValue - previousValue;

    if (difference > greatestIncrease) {
      greatestIncrease = difference;
      greatestIncreaseMonth = data[i][0];
    }

    previousValue = currentValue;
  }

  return [greatestIncreaseMonth, greatestIncrease];
}

const result = calculateGreatestIncrease(finances);
console.log(`Greatest Increase in Profits/Losses: ${result[0]} with a difference of (£${result[1]})`);

//


function calculateGreatestDecrease(finances) {
  let greatestDecrease = 0;
  let decreaseDate = '';

  for (let i = 1; i < finances.length; i++) {
    const currentProfit = finances[i][1];
    const previousProfit = finances[i - 1][1];
    const difference = currentProfit - previousProfit;

    if (difference < greatestDecrease) {
      greatestDecrease = difference;
      decreaseDate = finances[i][0];
    }
  }

  return [decreaseDate, greatestDecrease];
}

const [date, amount] = calculateGreatestDecrease(finances);

console.log(`Greatest decrease in Profit/Losses: ${date} with a decrease of (£${amount})`);
