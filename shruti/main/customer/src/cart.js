import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

var shoppingCart = (function () {
    

    var cart = [];
    console.log(cart,"caart data");

    function Item(name, price, count,total) {
        this.name = name;
        this.price = price;
        this.count = count; 
        this.total = total
    }
  

    // Save cart
    function saveCart() {
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
    }

    // Load cart
    function loadCart() {
        cart = JSON.parse(localStorage.getItem('shoppingCart'));
    }
    if (localStorage.getItem("shoppingCart") != null) {
        loadCart();
    }


    var obj = {};

    // Add to cart
    obj.addItemToCart = function (name, price, count,total=10) {
        for (var item in cart) {
            if (cart[item].name === name) {
                cart[item].count++;
                saveCart();
                return;
            }
        }
        item = new Item(name, price, count,total);
        cart.push(item);
        saveCart();
    }
    // Set count from item
    obj.setCountForItem = function (name, count) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count = count;
                break;
            }
        }
    };

    // Remove item from cart
    obj.removeItemFromCart = function (name) {
        for (var item in cart) {
            if (cart[item].name === name) {
                cart[item].count--;
                if (cart[item].count === 0) {
                    cart.splice(item, 1);
                }
                break;
            }
        }
        saveCart();
    }

    // Remove all items from cart
    obj.removeItemFromCartAll = function (name) {
        for (var item in cart) {
            if (cart[item].name === name) {
                cart.splice(item, 1);
                break;
            }
        }
        saveCart();
    }

    // Clear cart
    obj.clearCart = function () {
        cart = [];
        saveCart();
    }

    // Count cart 
    obj.totalCount = function () {
        var totalCount = 0;
        for (var item in cart) {
            totalCount += cart[item].count;
        }
        return totalCount;
    }

    // Total cart
    obj.totalCart = function () {
        var totalCart = 0;
        for (var item in cart) {
            totalCart += cart[item].price * cart[item].count;
        }
        return Number(totalCart.toFixed(2));
    }

    // List cart
    obj.listCart = function () {
        var cartCopy = [];
        for (var i in cart) {
            var item = cart[i];
            var itemCopy = {};
            for (var p in item) {
                itemCopy[p] = item[p];
            }   
            itemCopy.total = Number(item.price * item.count).toFixed(2);
            console.log(itemCopy);
            cartCopy.push(itemCopy)

        }
        return cartCopy;
    }
    return obj;
})();

// Add item
$(document).on("click",'.add2cart',function (event) {
    // alert('working');
    event.preventDefault();
    console.log('cccccccccccccaaaaaaaaaaaaaaaaaaarrrrrrrrrrrrrrrrrrrttttttttttttttttt');
    var name = $(this).data('bs-name');
    var price = Number($(this).data('bs-price'));
    shoppingCart.addItemToCart(name, price, 1);
    displayCart();
    localStorage.setItem('items',shoppingCart.cart) //setState
});



fetch('/api/data/cart', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(["Hello",1,2,3])
})
.then(response => response.json())
        .then(data => console.log(data))

        .catch(error => console.error(error));




// Clear items
$(document).on("click",'.clear-cart',function () {
    shoppingCart.clearCart();
    displayCart();
});

// window.count= $('.total-count').html(shoppingCart.totalCount());
// console.log(window.count);
function displayCart() {
    var cartArray = shoppingCart.listCart();
    var output = "";
    for (var i in cartArray) {
        output += "<tr>"
            + "<td>" + cartArray[i].name + "</td>"
            + "<td>(" + cartArray[i].price + ")</td>"
            + "<td><div class='input-group'>"
            + "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
            + "</div></td>"
            + "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
            + " = "
            + "<td>" + cartArray[i].total + "</td>"
            + "</tr>";
    }
    
    $('#show-table').html(output);
    $('.total-cart').html(shoppingCart.totalCart());
    $('.total-count').html(shoppingCart.totalCount());
}

// Delete item button id='btn-delete-item' '#show-table'

$(document).on('click', '.delete-item', function (event) {
    var name = $(this).data('name')
    shoppingCart.removeItemFromCartAll(name);
    displayCart();
})

// Item count input '#show-table'
$(document).on("change", ".item-count", function (event) {
    var name = $(this).data('name');
    var count = Number($(this).val());
    shoppingCart.setCountForItem(name, count);
    displayCart();
});
displayCart();

//////// ui script start /////////
// Tabs Single Page
$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
$('.tab ul.tabs li a').on('click', function (g) {
    var tab = $(this).closest('.tab'),
        index = $(this).closest('li').index();
    tab.find('ul.tabs > li').removeClass('current');
    $(this).closest('li').addClass('current');
    tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
    tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
    g.preventDefault();
});

// search function
$('#search_field').on('keyup', function () {
    var value = $(this).val();
    var patt = new RegExp(value, "i");

    $('.tab_content').find('.col-lg-3').each(function () {
        var $table = $(this);

        if (!($table.find('.featured-item').text().search(patt) >= 0)) {
            $table.not('.featured-item').hide();
        }
        if (($table.find('.col-lg-3').text().search(patt) >= 0)) {
            $(this).show();
            document.getElementById('not_found').style.display = 'none';
        } else {
            document.getElementById("not_found").innerHTML = " Product not found..";
            document.getElementById('not_found').style.display = 'block';
        }

    });

});
export default shoppingCart;