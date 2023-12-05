// Get references to DOM elements
const body = document.querySelector("body"),
hourHand = document.querySelector(".hour"),
mintueHand = document.querySelector(".minute"),
secondHand = document.querySelector(".second"),
modeSwitch= document.querySelector(".mode-switch");

//check if the mode is already set to dark mode in localstroage
if(localStorage.getItem("mode")=== "Dark Mode"){
    //add "dark" class to body and set  modeSwitch text to "light mode"
    body.classList.add("dark");
    modeSwitch.textContent = "Light Mode";
}

modeSwitch.addEventListener("click", () =>{
    //toggle the "dark classs on the body elemnt"
    body.classList.toggle("dark");
    //check if the "dark" class is currently present on the body element
    const isDarkMode = body.classList.contains("dark");
    //set moseSwitch text based on "dark" class presence
    modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
    // set localStorage "mode" item based on "dark" class presence
    localStorage.setItem("mode",isDarkMode ? "Light Mode":"Dark Mode")
});
const updateTime = () => {
    // console.log("time");
    //Get current time  and calculate degrees for clock hands
    let date = new Date(),
    secToDeg =(date.getSeconds() / 60) * 360;
    minToDeg =(date.getMinutes() / 60) * 360;
    hrToDeg =(date.getHours() / 12) * 360;



    //Rotate the clock hands nto the appropriate degree based on the current time 
    secondHand.style.transform =`rotate(${secToDeg}deg)`;
    mintueHand .style.transform =`rotate(${minToDeg}deg)`;
    hourHand.style.transform =`rotate(${hrToDeg}deg)`;
}


//call updatedTime to set clock hands every second
setInterval(updateTime, 1000);

//call updateTime function on page load
updateTime();