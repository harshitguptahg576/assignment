const offersContainer = document.querySelectorAll(".offer");
const totalPriceElement = document.getElementById("totalPrice");

const selectedOffer = 3;
let totalPrice = "$36.00";

const onSelectOffer = (name) => {
  const offerNumber = name?.slice(-1);
  offersContainer.forEach((offer, index) => {
    if (index == offerNumber - 1) offer.classList.add("detailed");
    else offer.classList.remove("detailed");

    totalPriceElement.innerHTML = document.getElementById(
      `price${offerNumber}`
    ).innerHTML;
    totalPrice = document.getElementById(`price${offerNumber}`).innerHTML;
  });
};

const onSubmit = () => {
  alert(`Congrats!
You have selected offer ${selectedOffer}
Total Price: ${totalPrice} USD
        `);
};
