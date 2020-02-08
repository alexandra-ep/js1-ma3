// Question 1: Convert the function below to an arrow function
/*function(a, b) {
    return a - b;
}*/
    const sum = (a, b) => a - b;


/* Question 2: Make a call to the URL below, pass the JSON it returns to a function and inside that function loop through the results and log each game's name.
In the catch method of your code, redirect to error.html if there is an error.*/
    const theUrl = `https://api.rawg.io/api/games?genres=sports`;

    fetch(theUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            namesFunction(json);
        })
        .catch(function(error) {
            document.location.href = `error.html`;
        });
        
        function namesFunction(json) {
            const results = json.results;

            for(i = 0; i < results.length; i++) {
                console.log(results[i].name);
            }
        }
        

// Question 3: Replace the word cats with the word giraffes in the following sentence
    let theSentence = "These cats are outrageous.";

    let updateSentence = "";

    updateSentence = theSentence.replace("cats", "giraffes");

    console.log(updateSentence);


/* Question 4: Given the URL below, write code that checks if there is a userId parameter in the query string. If there is no userID parameter, redirect the browser to third.html. 
If there is a userID parameter and its value is less than 10, redirect to first.html. 
If there is a userID parameter and its value is 10 or greater, redirect to second.html.*/
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);

    let userID = 7;

    if (params.has("userID")) {
        userID = params.get("userID");
    }

    if (userID < 10) {
        document.location.href = `first.html`;
    } else if (userID >= 10) {
        document.location.href = `second.html`;
    } else {
        document.location.href = `third.html`;
    }


// Question 5: Write code that removes the button, and only the button, from its parent element in the HTML below:
    const container = document.querySelector(".container");

    const button = document.querySelector(".btn");
    container.removeChild(button);


// Question 6: Create an li element with a text value of Parrots and a class of parrots. Add the new item as the second item in the ul below (add it after Cows).
    const list = document.querySelector(".animals");

    const listParrots = document.createElement("li");

    listParrots.className = "parrots";
    const listParrotsContent = document.createTextNode("Parrots");
    listParrots.appendChild(listParrotsContent);
    list.appendChild(listParrots);
    
    const listCows = document.querySelector(".cows");

    listCows.after(listParrots);


/* Question 7: Make a call to the URL below and pass the JSON it returns to a function. 
Inside that function select the div from the HTML below and assign the rating property from the JSON object as it's text value. 
In the catch method, log the error that may be returned. */
    const anotherUrl = `https://api.rawg.io/api/games/3801`;

    fetch(anotherUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
        theFunction(json);   
        })
        .catch(function(error) {
            console.log(error);
        });

    function theFunction(json) {
        const theDiv = document.querySelector(".rating");
        const ratingProperty = json.rating;

        theDiv.innerText = ratingProperty;
    }    