const data = [
    { id: "PO20241110AGPGOA", price: 1 },
    { id: "MA20231215MIAMIA", price: 1 },
    { id: "MA20231127MIAMIA", price: 1 },
    { id: "MA20231201MIAMIA", price: 1 },
    { id: "MA20231211MIAMIA", price: 1 },
    { id: "DI20231214MIAMIA", price: 1 },
    { id: "DI20240301MIAMIA", price: 1 },
    { id: "MA20231204MIAMIA", price: 1 },
    { id: "DI20231127GOAMIA", price: 1 },
    { id: "MA20231029TARMIA", price: 1 },
    { id: "MA20231030TLNMIA", price: 1 },
    { id: "MA20231031GOAMIA", price: 1 },
    { id: "MA20231101CVVMIA", price: 1 },
    { id: "MA20231107FNCMIA", price: 1 },
    { id: "SE20231119CPVFD1", price: 1 },
    { id: "SE20231119CPVFDF", price: 1 },
    { id: "SH20231027MRSCPV", price: 1 },
    { id: "SH20231028GOACP1", price: 1 },
    { id: "SH20231028GOACPV", price: 1 },
    { id: "SH20231028GOAMIA", price: 1 },
    { id: "SH20231030BCNCPV", price: 1 },
    { id: "SH20231030BCNMIA", price: 1 },
    { id: "DI20231126MRSMIA", price: 1 },
    { id: "DI20231127GOAMIA", price: 1 },
    { id: "MA20231028VLCMIA", price: 1 },
    { id: "MA20231029TARMIA", price: 1 },
    { id: "MA20231030TLNMIA", price: 1 },
    { id: "MA20231031GOAMIA", price: 1 },
    { id: "MA20231101CVVMIA", price: 1 },
    { id: "MA20231107FNCMIA", price: 1 },
    { id: "SH20231022CVVCPV", price: 1 },
    { id: "SH20231027MRSCPV", price: 1 },
    { id: "SH20231028GOACP1", price: 1 },
    { id: "SH20231028GOACPV", price: 1 },
    { id: "SH20231028GOAMIA", price: 1 },
    { id: "SH20231029MRSMIA", price: 1 },
    { id: "SH20231030BCNCPV", price: 1 },
    { id: "SH20231030BCNMIA", price: 1 },
];
window.onload = function () {
    console.log("STAR RUNNING");
    const cards = document.getElementsByClassName("itinerary-card");
    for (let i = 0; i < cards.length; i++) {
        const cardItinerary = cards[i]
            .querySelector(".itinerary-slider__wrapper--active")
            .getAttribute("automation-cruise-id")
            .toUpperCase();
        const currentPriceBox = cards[i].querySelector(".itinerary-card-price__box");

        if (
            data.some((itineraryToModify) => itineraryToModify.id === cardItinerary)
        ) {
            const currentPriceContent = cards[i].querySelector(
                ".itinerary-card-price__price"
            );
            const currentPriceValue = parseInt(
                currentPriceContent.textContent.trim().match(/\d+/)[0]
            );
            const newPrice = data.find(
                (itineraryToModify) => itineraryToModify.id === cardItinerary
            ).price;
            if (newPrice < currentPriceValue) {
                const newPriceBox = currentPriceBox.cloneNode(true);
                newPriceBox.removeChild(
                    newPriceBox.querySelector(".button.itinerary-card-price__see-detail")
                );
                const wasText = newPriceBox.querySelector(
                    ".itinerary-card-price__starting-from"
                );
                wasText.textContent = "Was";
                wasText.className = ".itinerary-card-price__was";
                newPriceBox.querySelector(
                    ".itinerary-card-price__price"
                ).style.textDecoration = "line-through";
                newPriceBox.querySelector(
                    ".itinerary-card-price__price"
                ).style.textDecorationColor = "#ff690e";
                newPriceBox.style.gap = "0.5em";
                newPriceBox.style.display = "flex";
                newPriceBox.style.alignItems = "center";
                newPriceBox.style.transform = "scale(0.6)";
                const wrapperDiv = document.createElement("div");
                wrapperDiv.appendChild(newPriceBox);
                currentPriceBox.insertBefore(wrapperDiv, currentPriceBox.firstChild);
                currentPriceContent.textContent = `$ ${newPrice}`;
                newPriceBox.className = ".itinerary-card-price__box";
                const elementToMove = currentPriceBox.querySelector(
                    ".itinerary-card-price__starting-from"
                );
                elementToMove.style.verticalAlign = "super";
                const targetDiv = elementToMove.nextElementSibling;
                console.log("target", targetDiv);
                targetDiv.insertBefore(elementToMove, targetDiv.firstChild);
            }
        }
    }
    console.log("FINISHED RUNNING");
};

const data = [
    { id: "PO20241110AGPGOA", price: 1 },
    { id: "MA20231215MIAMIA", price: 1 },
    { id: "MA20231127MIAMIA", price: 1 },
    { id: "MA20231201MIAMIA", price: 1 },
    { id: "MA20231211MIAMIA", price: 1 },
    { id: "DI20231214MIAMIA", price: 1 },
    { id: "DI20240301MIAMIA", price: 1 },
    { id: "MA20231204MIAMIA", price: 1 },
    { id: "DI20231127GOAMIA", price: 1 },
    { id: "MA20231029TARMIA", price: 1 },
    { id: "MA20231030TLNMIA", price: 1 },
    { id: "MA20231031GOAMIA", price: 1 },
    { id: "MA20231101CVVMIA", price: 1 },
    { id: "MA20231107FNCMIA", price: 1 },
    { id: "SE20231119CPVFD1", price: 1 },
    { id: "SE20231119CPVFDF", price: 1 },
    { id: "SH20231027MRSCPV", price: 1 },
    { id: "SH20231028GOACP1", price: 1 },
    { id: "SH20231028GOACPV", price: 1 },
    { id: "SH20231028GOAMIA", price: 1 },
    { id: "SH20231030BCNCPV", price: 1 },
    { id: "SH20231030BCNMIA", price: 1 },
    { id: "DI20231126MRSMIA", price: 1 },
    { id: "DI20231127GOAMIA", price: 1 },
    { id: "MA20231028VLCMIA", price: 1 },
    { id: "MA20231029TARMIA", price: 1 },
    { id: "MA20231030TLNMIA", price: 1 },
    { id: "MA20231031GOAMIA", price: 1 },
    { id: "MA20231101CVVMIA", price: 1 },
    { id: "MA20231107FNCMIA", price: 1 },
    { id: "SH20231022CVVCPV", price: 1 },
    { id: "SH20231027MRSCPV", price: 1 },
    { id: "SH20231028GOACP1", price: 1 },
    { id: "SH20231028GOACPV", price: 1 },
    { id: "SH20231028GOAMIA", price: 1 },
    { id: "SH20231029MRSMIA", price: 1 },
    { id: "SH20231030BCNCPV", price: 1 },
    { id: "SH20231030BCNMIA", price: 1 },
];

let isLogged = false;

function updatePrices() {
    console.log("STAR RUNNING");
    const cards = document.getElementsByClassName("itinerary-card");
    for (let i = 0; i < cards.length; i++) {
        const cardItinerary = cards[i]
            .querySelector(".itinerary-slider__wrapper--active")
            .getAttribute("automation-cruise-id")
            .toUpperCase();
        const currentPriceBox = cards[i].querySelector(".itinerary-card-price__box");

        if (
            data.some((itineraryToModify) => itineraryToModify.id === cardItinerary)
        ) {
            const currentPriceContent = cards[i].querySelector(
                ".itinerary-card-price__price"
            );
            const currentPriceValue = parseInt(
                currentPriceContent.textContent.trim().match(/\d+/)[0]
            );
            const newPrice = data.find(
                (itineraryToModify) => itineraryToModify.id === cardItinerary
            ).price;
            if (newPrice < currentPriceValue) {
                const newPriceBox = currentPriceBox.cloneNode(true);
                newPriceBox.removeChild(
                    newPriceBox.querySelector(".button.itinerary-card-price__see-detail")
                );
                const wasText = newPriceBox.querySelector(
                    ".itinerary-card-price__starting-from"
                );
                wasText.textContent = "Was";
                wasText.className = ".itinerary-card-price__was";
                newPriceBox.querySelector(
                    ".itinerary-card-price__price"
                ).style.textDecoration = "line-through";
                newPriceBox.querySelector(
                    ".itinerary-card-price__price"
                ).style.textDecorationColor = "#ff690e";
                newPriceBox.style.gap = "0.5em";
                newPriceBox.style.display = "flex";
                newPriceBox.style.alignItems = "center";
                newPriceBox.style.transform = "scale(0.6)";
                const wrapperDiv = document.createElement("div");
                wrapperDiv.appendChild(newPriceBox);
                currentPriceBox.insertBefore(wrapperDiv, currentPriceBox.firstChild);
                currentPriceContent.textContent = `$ ${newPrice}`;
                newPriceBox.className = ".itinerary-card-price__box";
                const elementToMove = currentPriceBox.querySelector(
                    ".itinerary-card-price__starting-from"
                );
                elementToMove.style.verticalAlign = "super";
                const targetDiv = elementToMove.nextElementSibling;
                console.log("target", targetDiv);
                targetDiv.insertBefore(elementToMove, targetDiv.firstChild);
            }
        }
    }
    console.log("FINISHED RUNNING");
}


window.addEventListener('load', () => {

    updatePrices();
    const currentUrl = location.href;
    let previousUrl = '';

    document.body.addEventListener('click', (event) => {
        console.log("event", event.)
        const newUrl = location.href;
        if (currentUrl !== newUrl) {
            console.log('The URL has changed');
            isLogged = false
            const observer = new MutationObserver((mutationsList, observer) => {
                for (const mutation of mutationsList) {
                    if (mutation.type === 'childList') {
                        const element = document.querySelector('.itinerary-card__information-content');
                        console.log("isLogged?", isLogged)
                        if (element && !isLogged) {
                            updatePrices()
                            isLogged = true;
                        }
                    }
                }
            });

            observer.observe(document.body, { childList: true, subtree: true });
            previousUrl = currentUrl;
        } else {
            console.log("URL is the same")
        }
        currentUrl = newUrl;
    });
});


function clearLocalStorageForURL() {
    const currentURL = window.location.href;
    const urlKey = 'paginatorFound_' + currentURL;
    localStorage.removeItem(urlKey); // Remove the flag for the current URL
}

function mutationCallback(mutationsList, observer) {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            const paginator = document.querySelector('ul.pagination-wrp__list');
            const currentURL = window.location.href;
            const urlKey = 'paginatorFound_' + currentURL;
            const previousFlag = localStorage.getItem(urlKey);

            if (paginator && !previousFlag) {
                // If the element exists and the flag hasn't been set for this URL, log a message
                console.log('ul.pagination-wrp__list now exists.');
                localStorage.setItem(urlKey, 'true'); // Set the flag in localStorage for the current URL
            } else if (!paginator && previousFlag) {
                // If the element does not exist and a previous flag was set, remove the flag
                localStorage.removeItem(urlKey);
            }
        }
    }
}

window.onDOMContentLoaded = () => {
    console.log("LOADED")
}

window.onload = function () {
    updatePrices();
    const documentObserverOptions = { childList: true, subtree: true };
    const documentObserver = new MutationObserver(mutationCallback);
    // Start observing the entire document
    documentObserver.observe(document, documentObserverOptions);
};

