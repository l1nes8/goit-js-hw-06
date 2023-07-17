const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatoes",
    "Herbs",
    "Condiments",
  ];
  
  const ul = document.getElementById("ingredients");
  
  const arrayEl = []

  ingredients.forEach((ingredient) => {
    const newItemEl = document.createElement("li");
    newItemEl.textContent = ingredient;
    newItemEl.classList.add("item");
    arrayEl.push(newItemEl)
  });

  ul.append(...arrayEl)