// 1. Récupérer les select
const productType = document.getElementById("product-type");
const productName = document.getElementById("product-name");

// 2. Définir les produits
const products = {
    fruits: ["Apple", "Banana", "Strawberry"],
    vegetables: ["Carrot", "Spinach", "Tomato"]
};

// 3. Quand on change le type
productType.addEventListener("change", function() {
    // Vider le select des produits
    productName.innerHTML = '<option value="">-- Select a product --</option>';
    
    const type = this.value;
    
    if(type && products[type]){
        products[type].forEach(function(item){
            const option = document.createElement("option");
            option.value = item.toLowerCase(); // valeur en minuscule
            option.text = item; // texte affiché
            productName.appendChild(option);
        });
    }
});
