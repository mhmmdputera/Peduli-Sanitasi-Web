var currentIndex = 0;
var delayInSeconds = 3;

function changeFact() {
    fetch("../Template/funFactsData.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var currentFact = data[currentIndex];
            var factText = currentFact.fact;
            var sourceText = currentFact.source;

            document.getElementById("funFact").innerHTML = factText + "<br><br><span>" + sourceText + "</span>";
            currentIndex = (currentIndex + 1) % data.length;
        })
        .catch(function (error) {
            console.log("Error fetching fun facts:", error);
        });
}

changeFact();

setInterval(changeFact, delayInSeconds * 1000);