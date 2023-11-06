const data = [
    { id: "MA20231124MIAMIA", price: 2 },
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

const newPriceBoxStyles = {
    gap: '0.5em',
    display: 'flex',
    alignItems: 'center',
    transform: 'scale(0.6)',
}

const strikethroughStyles = {
    textDecoration: 'line-through',
    textDecorationColor: '#ff690e',
}

function updateCardPrice(selectedCard) {
    const dateCard = selectedCard.querySelector('.itinerary-slider__wrapper.itinerary-slider__wrapper--active')
    const selectedDatePrice = dateCard.querySelector('.itinerary-slider__price span:nth-child(2)').textContent;
    const cardItinerary = selectedCard
        .querySelector(".itinerary-slider__wrapper--active")
        .getAttribute("automation-cruise-id")
        .toUpperCase();
    const currentPriceBox = selectedCard.querySelector(".itinerary-card-price__box");
    let totalDivs = []
    const strikethroughText = selectedCard.querySelector(".was-text")

    if (
        data.some((itineraryToModify) => itineraryToModify.id === cardItinerary)
    ) {
        totalDivs = currentPriceBox.querySelectorAll("div")
        const newPrice = data.find(
            (itineraryToModify) => itineraryToModify.id === cardItinerary
        ).price;
        const currentPriceContent = selectedCard.querySelector(
            ".itinerary-card-price__price"
        );
        const currentPriceValue = parseInt(
            currentPriceContent.textContent.trim().match(/\d+/)[0]
        );
        if (parseInt(selectedDatePrice) === currentPriceValue) {
            return
        } else if (newPrice < selectedDatePrice) {
            if (strikethroughText) {
                totalDivs[2].style.minWidth = "max-content"
                const strikethroughPrice = totalDivs[2].querySelector("span")
                strikethroughPrice.textContent = `$ ${selectedDatePrice}`
                totalDivs[5].style.minWidth = "max-content"
                const newPriceDiv = totalDivs[5].querySelector(".itinerary-card-price__price")
                newPriceDiv.textContent = `$ ${newPrice}`
            } else {
                const newPriceBox = currentPriceBox.cloneNode(true);
                newPriceBox.removeChild(
                    newPriceBox.querySelector(".button.itinerary-card-price__see-detail")
                );
                const wasText = newPriceBox.querySelector(".itinerary-card-price__starting-from");
                wasText.textContent = "Was";
                wasText.className = "was-text";
                newPriceBox.querySelector(".itinerary-card-price__price").style.minWidth = "max-content"
                newPriceBox.querySelector(".itinerary-card-price__price").textContent = `$ ${selectedDatePrice}`;
                Object.assign(newPriceBox.style, newPriceBoxStyles);
                const newPriceText = newPriceBox.querySelector(".itinerary-card-price__price")
                Object.assign(newPriceText.style, strikethroughStyles);
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
                targetDiv.insertBefore(elementToMove, targetDiv.firstChild);
            }
            totalDivs[2].style.minWidth = "max-content"
            const strikethroughPrice = totalDivs[2].querySelector(".itinerary-card-price__price span")
            strikethroughPrice.textContent = `$ ${selectedDatePrice}`
            totalDivs[5].style.minWidth = "max-content"
            const newPriceDiv = totalDivs[5].querySelector(".itinerary-card-price__price")
            newPriceDiv.textContent = `$ ${newPrice}`
        } else {
            totalDivs[2].style.minWidth = "max-content"
            const strikethroughPrice = totalDivs[2].querySelector(".itinerary-card-price__price span")
            strikethroughPrice.textContent = `$ ${selectedDatePrice}`
        }
    } else {
        totalDivs = currentPriceBox.querySelectorAll("div")
        let spanElements = []
        if (totalDivs.length > 3) {
            currentPriceBox.removeChild(currentPriceBox.querySelector("div"))
            const firstSpan = currentPriceBox.querySelector("span")
            const parentDiv = firstSpan.parentElement
            parentDiv.parentElement.insertBefore(firstSpan, parentDiv)
            spanElements = currentPriceBox.querySelectorAll("span")
            spanElements[1].style.minWidth = "max-content"
            spanElements[1].textContent = `$ ${selectedDatePrice}`
        } else {
            spanElements = currentPriceBox.querySelectorAll("span")
            spanElements[1].style.minWidth = "max-content"
            spanElements[1].textContent = `$ ${selectedDatePrice}`
        }
    }
}

function updatePricesOnLoading() {
    const cards = document.getElementsByClassName("itinerary-card");
    Array.from(cards).forEach(card => {
        card.addEventListener("click", function (event) {
            const clickedCard = event.target;
            const selectedCard = getParentCard(clickedCard)
            updateCardPrice(selectedCard)
        });
    });
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
                const wasText = newPriceBox.querySelector(".itinerary-card-price__starting-from");
                wasText.textContent = "Was";
                wasText.className = "was-text";
                Object.assign(newPriceBox.style, newPriceBoxStyles);
                const newPriceText = newPriceBox.querySelector(".itinerary-card-price__price")
                Object.assign(newPriceText.style, strikethroughStyles);
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
                targetDiv.insertBefore(elementToMove, targetDiv.firstChild);
            }
        }
    }
}

function getParentCard(childElement) {
    let parentElement = childElement.parentNode;

    while (parentElement !== null) {
        if (parentElement.className === 'itinerary-card tile tile--result-search') {
            return parentElement;
        } else {
            parentElement = parentElement.parentNode;
        }
    }
    return null;
}

window.addEventListener('load', () => {
    updatePricesOnLoading();
    const currentUrl = location.href;
    let previousUrl = '';

    document.body.addEventListener('click', (event) => {
        const newUrl = location.href;
        if (currentUrl !== newUrl) {
            isLogged = false
            const observer = new MutationObserver((mutationsList, observer) => {
                for (const mutation of mutationsList) {
                    if (mutation.type === 'childList') {
                        const element = document.querySelector('.itinerary-card__information-content');
                        if (element && !isLogged) {
                            updatePricesOnLoading()
                            isLogged = true;
                        }
                    }
                }
            });

            observer.observe(document.body, { childList: true, subtree: true });
            previousUrl = currentUrl;
        }
        currentUrl = newUrl;
    });
});
