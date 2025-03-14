// Monitoring Plant growth in a area which is circle in shape with radius 5m

let radius = 5;
const PI = 3.14;
const area =  PI * radius *radius;
const startCount = 20 , plantArea = 0.8;
let noOfweeks = 3;
let plantCount = 20;

let maxNoOfPlantsPerArea = area / plantArea;
let emptyArea,percentOfAreaCovered;

if(noOfweeks == 1){
    console.log(`${startCount} plants in the area`);
}

if (noOfweeks > 0){
    switch(noOfweeks){
        case 1:     percentOfAreaCovered = plantCount * plantArea;
                    emptyArea = area - percentOfAreaCovered;
                    break;
        case 2:     plantCount *= 2;
                    percentOfAreaCovered = plantCount * plantArea;
                    emptyArea = area - percentOfAreaCovered;
                    break;
        case 3:     plantCount *= 2*2;
                    percentOfAreaCovered = plantCount * plantArea;
                    emptyArea = area - percentOfAreaCovered;
                    break;
        
        default:    console.log("Default")
    }
}

console.log(`${emptyArea} is empty and ${percentOfAreaCovered} is covered`);