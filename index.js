function distanceFromHqInBlocks(location){
    if(location < 42){
        return (42-location);
    }else{
        return (location-42);
    }
}

function distanceFromHqInFeet(blocksNumber){
    const distance = distanceFromHqInBlocks(blocksNumber);
    return (264*distance);
    
}

function distanceTravelledInFeet(start,destination ){
    if(start<destination){
        return ((destination-start)*264);
    }else{
        return ((start-destination)*264);
    }

}

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const distance =distanceTravelledInFeet(start, destination);
    if(distance == 264){ 
        return 0;
    }else if(distance >= 400 && distance <= 2000){
        return ((distance-400) * 0.02);
    }else if(distance>=2000 &&distance<=2500){
        return 25;
    }else{
        return "cannot travel that far";
    }
}