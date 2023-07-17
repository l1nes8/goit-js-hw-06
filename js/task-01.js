const ulEl = document.querySelector('#categories')

console.log(`Number of categories: ${ulEl.children.length}`)

const ulElArray = [...ulEl.children]

ulElArray.forEach( (li) => {
    const liName = li.querySelector('h2').textContent;
    const liItems = li.querySelectorAll('ul li');

    console.log(`Category: ${liName}`);
    console.log(`Number of items: ${liItems.length}`);
});





