document.addEventListener("DOMContentLoaded", function () {
    // Sélectionne tous les éléments nécessaires
    const cartItems = document.querySelectorAll(".cart-item");
    const totalPriceElement = document.getElementById("total-price");
  
    // Fonction pour mettre à jour le prix total
    function updateTotalPrice() {
      let total = 0;
      cartItems.forEach(item => {
        const price = parseFloat(item.querySelector(".price").textContent);
        const quantity = parseInt(item.querySelector(".quantity-input").value, 10); 
        total += price * quantity;
      });
      totalPriceElement.textContent = `${total}Dt`;
    }
  
    // Gestion des boutons de quantité
    cartItems.forEach(item => {
      const plusButton = item.querySelector(".plus-btn");
      const minusButton = item.querySelector(".minus-btn");
      const quantityInput = item.querySelector(".quantity-input");
  
      // Augmenter la quantité
      plusButton.addEventListener("click", () => {
        quantityInput.value = parseInt(quantityInput.value, 10) + 1;
        updateTotalPrice();
      });
  
      // Diminuer la quantité
      minusButton.addEventListener("click", () => {
        if (quantityInput.value > 0) {
          quantityInput.value = parseInt(quantityInput.value, 10) - 1;
          updateTotalPrice();
        }
      });
  
      // Supprimer un article
      const deleteButton = item.querySelector(".delete-btn");
      deleteButton.addEventListener("click", () => {
        item.remove();
        updateTotalPrice();
      });
      
  
      // Aimer un article
      const heartButton = item.querySelector(".heart-btn");
      heartButton.addEventListener("click", () => {
        heartButton.classList.toggle("liked");
      });
    });
  
    // Calcul initial du prix total
    updateTotalPrice();
  });
  