const JVZOO_CHECKOUT_URL = "https://www.jvzoo.com/b/p/455685/0?c=TP-70aPXlmeYMNepRLYn167";

function goToCheckout(event) {
  if (JVZOO_CHECKOUT_URL === "#") {
    event.preventDefault();
    
    alert(
      "The JVZoo checkout link will be connected here after your product is created."
    );
    
    return;
  }
  
  event.currentTarget.href = JVZOO_CHECKOUT_URL;
}

const buyButton = document.getElementById("buyButton");
const pricingBuyButton = document.getElementById("pricingBuyButton");

if (buyButton) {
  buyButton.addEventListener("click", goToCheckout);
}

if (pricingBuyButton) {
  pricingBuyButton.addEventListener("click", goToCheckout);
}


/* Simple scroll animation */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
      
    });
  },
  {
    threshold: 0.1
  }
);

sections.forEach((section) => {
  observer.observe(section);
});