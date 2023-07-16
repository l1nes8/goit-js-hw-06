const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatoes",
    "Herbs",
    "Condiments",
  ];
  
  const ul = document.getElementById("ingredients");
  
  ingredients.forEach((ingredient) => {
    const newItemEl = document.createElement("li");
    newItemEl.textContent = ingredient;
    newItemEl.classList.add("item");
    ul.appendChild(newItemEl);
  });