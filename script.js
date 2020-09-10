// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   let inputNames = [document.querySelector("input[name=pilotName]"), document.querySelector("input[name=copilotName]")];
   let inputNumbers = [document.querySelector("input[name=fuelLevel]"), document.querySelector("input[name=cargoMass]")];
   
   form.addEventListener("submit", function(event) {
      for(i = 0; i < inputNames.length; i++) {
         if(inputNames[i].value === "") {
            alert("All fields required");
            event.preventDefault();
         } else if (typeof inputNames[i].value !== string) {
            alert("Invalid input. Please provide valid input.");
            event.preventDefault();
         }
      }

      for(i = 0; i < inputNumbers.length; i++) {
         if(inputNumbers[i].value === "") {
            alert("All fields required");
            event.preventDefault();
         } else if (typeof Number(inputNumbers[i].value) !== number) {
            alert("Invalid input. Please provide valid input.");
            event.preventDefaul();
         }
      }

      })
   });