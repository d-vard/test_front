const products = document.querySelectorAll('.product_block');

products.forEach(function (product) {
    product.addEventListener('click', function (e) {
        if (this.classList.contains('disabled')) {
            return '';
        }
        const textBox = this.children[1]
        const text = textBox.dataset.selecttext
        console.log(text);
        if (this.classList.contains('selected')) {
            textBox.innerHTML = 'Чего сидишь? Порадуй котэ, <button class="product_btn">купи</button>.';
        } else {
            textBox.innerHTML = text;
        }
        this.classList.toggle('selected');

    })
})
