// // Write your JavaScript code here!

// /* This block of code shows how to format the HTML once you fetch some planetary JSON!
// <h2>Mission Destination</h2>
// <ol>
//    <li>Name: ${}</li>
//    <li>Diameter: ${}</li>
//    <li>Star: ${}</li>
//    <li>Distance from Earth: ${}</li>
//    <li>Number of Moons: ${}</li>
// </ol>
// <img src="${}">
// */
window.addEventListener("load", function (event) {
    // let submitButton = document.getElementById("formSubmit")
    let form = document.querySelector("form");
    let validAlert = "Please provide valid input in all fields. First AND last name for name fields. A valid ineger for mass and fuel level.";

    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
            response.json().then(function (json) {
                let planet = json[5];
                missionTarget.innerHTML = `<h2>Mission Destination</h2>
                                            <ol>
                                               <li>Name: ${planet.name}</li>
                                               <li>Diameter: ${planet.diameter}</li>
                                               <li>Star: ${planet.star}</li>
                                               <li>Distance from Earth: ${planet.distance}</li>
                                               <li>Number of Moons: ${planet.moons}</li>
                                            </ol>
                                            <img src="${planet.image}">`
            });

    form.addEventListener("submit", function (event) {
        let inputs = [
            document.querySelector("input[name=pilotName]").value,
            document.querySelector("input[name=copilotName]").value,
            document.querySelector("input[name=fuelLevel]").value,
            document.querySelector("input[name=cargoMass]").value
        ];
        let faultyItems = document.getElementById("faultyItems");
        let launchStatus = document.getElementById("launchStatus");
        let fuelStatus = document.getElementById("fuelStatus");
        let cargoStatus = document.getElementById("cargoStatus");
        let missionTarget = document.getElementById("missionTarget");

        for (i = 0; i < inputs.length; i++) {
            event.preventDefault();
            if (i === 0 || i === 1) {
                if (!/\s*[a-z]+\s+[a-z]+\s*/i.test(inputs[i])) {
                    alert(validAlert);
                    event.preventDefault();
                    break;
                }
            } else if (i === 2 || i === 3) {
                if (!/\s*\d+\s*/i.test(inputs[i])) {
                    alert(validAlert);
                    event.preventDefault();
                    break;
                }
            }
        }

        document.getElementById("pilotStatus").innerHTML = `${inputs[0]} Ready`;
        document.getElementById("copilotStatus").innerHTML = `${inputs[1]} Ready`;

        if (inputs[2] < 10000) {
            faultyItems.style.visibility = "visible";
            fuelStatus.innerHTML = "Fuel level not high enough for the journey.";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
        }

        if (inputs[3] > 10000) {
            faultyItems.style.visibility = "visible";
            cargoStatus.innerHTML = "Cargo mass too high for launch";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
        }

        if (inputs[2] > 10000 && inputs[3] < 10000) {
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = "green";
        }

        })

    });




});



// // BELOW IS AN ATTEMPT WITH FOR LOOPS
//    // let inputNames = [document.querySelector("input[name=pilotName]"), document.querySelector("input[name=copilotName]")];
//    // let inputNumbers = [document.querySelector("input[name=fuelLevel]"), document.querySelector("input[name=cargoMass]")];

//    // form.addEventListener("submit", function(event) {
//    //    for(i = 0; i < inputNames.length; i++) {
//    //       if(inputNames[i].value === "") {
//    //          alert("All fields required");
//    //          event.preventDefault();
//    //       } else if (typeof inputNames[i].value !== string) {
//    //          alert("Invalid input. Please provide valid input.");
//    //          event.preventDefault();
//    //       }
//    //    }

//    //    for(i = 0; i < inputNumbers.length; i++) {
//    //       if(inputNumbers[i].value === "") {
//    //          alert("All fields required");
//    //          event.preventDefault();
//    //       } else if (typeof Number(inputNumbers[i].value) !== number) {
//    //          alert("Invalid input. Please provide valid input.");
//    //          event.preventDefaul();
//    //       }
//    //    }

//    //    })