// Monitoring Plant growth in a area which is circle in shape with radius 5m

const radius = 5;
const PI = 3.1415;
const area =  PI * radius *radius;
const plantCount = 20 , plantArea = 0.8;
const maxNoOfPlantsPerArea = area / plantArea;
let noOfweeks = 3;

let emptyArea , sugguestion;

const plantsAreaCovered = plantCount * plantArea  * ( 2 ** noOfweeks);

const percentOfAreaCovered = plantsAreaCovered / area * 100;

sugguestion = (percentOfAreaCovered >= 80) ? ("PRUNED") : ((percentOfAreaCovered >=50)?("MONITERED"):("PLANTED"))

console.log(`${percentOfAreaCovered}% is covered, need to be ${sugguestion}`);

// if (percentOfAreaCovered >= 80)
//     console.log(`${percentOfAreaCovered}% is covered, need to be PRUNED`);
// else if(percentOfAreaCovered >=50)
//     console.log(`${percentOfAreaCovered}% is covered, need to be MONITERED`);
// else    
//     console.log(`${percentOfAreaCovered}% is covered, need to be PLANTED`);

let extraAreaFor100Plants = 100*0.8 - area;
console.log(`${extraAreaFor100Plants} extra area is required to grow 100 plants`)
// if (noOfweeks > 0){
//     switch(noOfweeks){
//         case 1:     plantsAreaCovered = plantCount * plantArea;
//                     emptyArea = area - plantsAreaCovered;
//                     break;
//         case 2:     plantCount *= 2;
//                     plantsAreaCovered = plantCount * plantArea;
//                     emptyArea = area - plantsAreaCovered;
//                     break;
//         case 3:     plantCount *= 2*2;
//                     plantsAreaCovered = plantCount * plantArea;
//                     emptyArea = area - plantsAreaCovered;
//                     break;
        
//         default:    console.log("Default")
//     }
// }

// console.log(`${emptyArea} is empty and ${plantsAreaCovered} is covered`);

// percentOfAreaCovered = (plantsAreaCovered / area ) * 100;

// if(percentOfAreaCovered < 50){
//     console.log("PLANTED");
// }else if(percentOfAreaCovered > 50 && percentOfAreaCovered < 80){
//     console.log("MONITERED");
// }else if(percentOfAreaCovered>80){
//     console.log("PRUNED")
// }