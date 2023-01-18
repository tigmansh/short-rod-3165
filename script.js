import Mobiles from "./data/mobiles.js";
import Furniture from "./data/furniture.js";
import Electronics from "./data/electronics.js";
import Home_Appliances from "./data/home_appliances.js";
import Kids from "./data/kids_&_toys.js";
import Sports from "./data/sports_fashion.js";


function renderSubMenu(id,data){
    let temp = document.getElementById(id)
function TempFunc(){
   return data.map(el =>{
        let list = ""; 
        list = el.data.map(element => `<p>${element}</p>`).join(" ")    
       return `
        <div class="column">
            <h4>${el.heading}</h4>
            ${list}
        </div>
       `
    }).join("")
}
    temp.innerHTML = TempFunc()
}


renderSubMenu("mobiles",Mobiles)
renderSubMenu("furniture",Furniture)
renderSubMenu("electronics",Electronics)
renderSubMenu("home_appliances",Home_Appliances)
renderSubMenu("kids_toys",Kids)
renderSubMenu("sports_fashion",Sports)
