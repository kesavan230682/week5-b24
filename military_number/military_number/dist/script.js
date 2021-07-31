function translateMilitary(timeStr){
  
  if (timeStr.charAt(8) == "A"){
    if(timeStr.substring(0,2) == "12"){
      return "00" + timeStr.substring(2,8);
      
    }
    
    else{
      return timeStr.substring(0,8);
    }
  }
  
  else{
    if(timeStr.substring(0,2) == "12"){
      return timeStr.substring(0,8);
      
    }
    
    else {
      return (parseInt (timeStr.substring(0,2))+12) + timeStr.substring(2,8)
      
    }
    
  }
}

console.log(translateMilitary("07:45:45AM"))
console.log(translateMilitary("07:45:45PM"))
console.log(translateMilitary("12:45:45AM"))
console.log(translateMilitary("12:45:45PM"))