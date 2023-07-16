const ul = document.getElementById('categories')
const liEl = ul.querySelectorAll('.item')

console.log(`Number of categories: ${liEl.length}`)

liEl.forEach( (li) => {
    const liName = li.querySelector('h2').textContent;
    const liItems = li.querySelectorAll('ul li');

    console.log(`Category: ${liName}`);
    console.log(`Number of items: ${liItems.length}`);
});





