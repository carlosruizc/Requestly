document.addEventListener("DOMContentLoaded", () => {
    const itinerariesResult=document.querySelectorAll(".itinerary-card__wrapper")
    console.log(itinerariesResult)
})

function handleElementsExistence() {
    // Your code to run when the elements exist
    console.log("Elements exist!");
  }

const targetElement=document.querySelector(".itinerary-card__wrapper")

if (targetElement) {
    // If the element already exists, trigger the function immediately
    handleElementsExistence();
  } else {
    // Create a MutationObserver to watch for the target element
    const observer = new MutationObserver(function(mutationsList, observer) {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
          // Check if the target element now exists
          if (document.getElementById("yourTargetElementId")) {
            // Disconnect the observer to stop watching
            observer.disconnect();
  
            // Run your code
            handleElementsExistence();
            break;
          }
        }
      }
    });
  
    // Start observing changes in the DOM
    observer.observe(document, { childList: true, subtree: true });
  }