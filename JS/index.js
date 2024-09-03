    document.getElementById('sorting').addEventListener('click', function () {
        const category = document.getElementById('data-category').value;
        const color = document.getElementById('data-color').value;
        const name = document.getElementById('name').value.toLowerCase();
        const minPrice = parseFloat(document.getElementById('data-price-min').value) || 0;
        const maxPrice = parseFloat(document.getElementById('data-price-max').value) || Infinity;

        const items = document.querySelectorAll('.list .item');

        let count = 0;

        items.forEach(function (item) {
            const itemCategory = item.getAttribute('data-category');
            const itemColor = item.getAttribute('data-color');
            const itemName = item.querySelector('.name').textContent.toLowerCase();
            const itemPrice = parseFloat(item.getAttribute('data-price'));

            let isVisible = true;

            if (category && category !== itemCategory) {
                isVisible = false;
            }

            if (color && color !== itemColor) {
                isVisible = false;
            }

            if (name && !itemName.includes(name)) {
                isVisible = false;
            }

            if (itemPrice < minPrice || itemPrice > maxPrice) {
                isVisible = false;
            }

            if (isVisible) {
                item.style.display = 'block';
                count++;
            } else {
                item.style.display = 'none';
            }
        });

        document.getElementById('count').textContent = count;
    });

