let x = 100;
if(x<50){
    console.log("ნაკლებია 50-ზე");
} else if (x>20){
    console.log("მეტია 20-ზე");
} else {
    console.log("შეცდომა");
}
    

let userName = "Mariam";

if(userName == "Mariam"){
    console.log(true);
} else {
    console.log(false);
}


switch(userName){
    case "Mariam":
        console.log("TRUE");
        break;
    default:
        console.log("FALSE");
}