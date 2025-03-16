// Monitoring Plant growth in a area which is circle in shape with radius 5m

const radius = 5;
const PI = 3.1415;
const area =  PI * radius *radius;
const plantCount = 20 ;
let noOfweeks = 3;

const plantArea = 0.8
let finalPlantCount = plantCount * (2 ** noOfweeks);
const plantsAreaCovered = finalPlantCount * plantArea ;
const percentOfAreaCovered = plantsAreaCovered / area * 100;
const maxNoOfPlantsPerArea = area / plantArea;
let  sugguestion;

// Part 1 
console.log("\tpart 1");
console.log("--------------------------------------------");
try{
     if(percentOfAreaCovered > 100)
        throw  ("Space wont be available to plant more");
    sugguestion = (percentOfAreaCovered >= 80) ? ("PRUNED") : 
                    ((percentOfAreaCovered >=50)?("MONITERED"):("PLANTED"));

    console.log(`${percentOfAreaCovered}% is covered, need to be ${sugguestion}`);
}catch(err){
    console.error(err);
    
}

//  Part 2
console.log("\tpart 2");
console.log("--------------------------------------------");
const extraPlants = 100;

let expandedGardenRadius, extendedWeeks=10;

const additionalSpaceWithExtendedWeeks = extraPlants * plantArea * (2 ** extendedWeeks);

expandedGardenRadius = Math.sqrt( additionalSpaceWithExtendedWeeks / PI);

console.log(`To plant 100  plants, ${additionalSpaceWithExtendedWeeks} area with radius ${expandedGardenRadius} is required`);


// Part 3
console.log("\tpart 3");
console.log("--------------------------------------------");
let startingPlantsChanged = 100;
finalPlantCount = startingPlantsChanged * (2 ** noOfweeks);
const finalPlantArea = finalPlantCount * plantArea;
console.log(finalPlantArea+" total plants ", finalPlantCount)
try{
    if(finalPlantArea > area){
        throw (`${finalPlantArea} area is overcrowded and cannot be accomedated`);
    }
    console.log(`${finalPlantArea} area can be accomedated in this area`);
}catch(err){
    console.error(err);
}



// console.log(`${extraAreaFor100Plants} extra area is required to grow 100 plants`);



// if (percentOfAreaCovered >= 80)
//     console.log(`${percentOfAreaCovered}% is covered, need to be PRUNED`);
// else if(percentOfAreaCovered >=50)
//     console.log(`${percentOfAreaCovered}% is covered, need to be MONITERED`);
// else    
//     console.log(`${percentOfAreaCovered}% is covered, need to be PLANTED`);

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