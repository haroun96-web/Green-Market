// 1. الحصول على عناصر select
const productType = document.getElementById("product-type");
const productName = document.getElementById("product-name");

// 2. تعريف المنتجات
const products = {
    fruits: ["Apple", "Banana", "Strawberry"],
    vegetables: ["Carrot", "Spinach", "Tomato"],
    homemade: ["Organic Honey", "Olive Oil", "Homemade Bread"],
    eco: ["Reusable Bag", "Wooden Cutlery Set", "Bamboo Toothbrush"]
};

// 3. عند تغيير نوع المنتج
productType.addEventListener("change", function() {
    // تفريغ قائمة المنتجات القديمة
    productName.innerHTML = '<option value="">-- Select a product --</option>';
    
    const type = this.value;
    
    if(type && products[type]){
        products[type].forEach(function(item){
            const option = document.createElement("option");
            option.value = item.toLowerCase(); // قيمة صغيرة للحقل
            option.text = item; // النص المعروض
            productName.appendChild(option);
        });
    }
});
