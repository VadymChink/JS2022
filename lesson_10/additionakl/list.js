let clear = document.createElement('button');
clear.innerText = 'clear';
document.body.appendChild(clear);

clear.onclick = () => {
    localStorage.clear();
    document.body.remove();
}

let products = JSON.parse(localStorage.getItem('products'));

for (let i = 0; i < products.length; i++) {
    let product = products[i];

    let productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
<h3>${product.name}</h3>
<p>${product.count}</p>
<p>${product.price}</p>
<img src = ${product.picture} alt="product picture">
`;

    let btn = document.createElement('button');
    btn.innerText = 'delete';

    productDiv.appendChild(btn);
    document.body.appendChild(productDiv);

    btn.onclick = () => {
        products.splice(products.indexOf(product), 1);
        document.body.removeChild(productDiv);
        localStorage.setItem('products', JSON.stringify(products));r
    }
}
