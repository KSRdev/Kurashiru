/*=============== SHOW/HIDE CATEGORY===============*/
const categoryButton = document.getElementById('categories-button')
const category = document.getElementById("h_categories")
const openCategory = 'categories'
const iconCategory = 'uil-arrow-down'

const selectedcategory = localStorage.getItem('selected-category')
const selectedCat = localStorage.getItem('selected-cat')

const getCurrentcategory = () => category.classList.contains(openCategory) ? 'open' : 'close'
const getCurrentCat = () => categoryButton.classList.contains(iconCategory) ? 'uil-arrow-right' : 'uil-arrow-down'

if (selectedCat) {
    category.classList[selectedcategory === 'open' ? 'add' : 'remove'](openCategory)
    categoryButton.classList[selectedCat === 'uil-arrow-right' ? 'add' : 'remove'](iconCategory)
}

categoryButton.addEventListener('click', () => {
    category.classList.toggle(openCategory)
    categoryButton.classList.toggle(iconCategory)
    localStorage.setItem('selected-category', getCurrentcategory())
    localStorage.setItem('selected-cat', getCurrentCat())
})


/*=============== ACTIVE CATEGORY ===============*/
const linkWork = document.querySelectorAll('.recipe__item')

function activeWork() {
    linkWork.forEach(L => L.classList.remove('active-recipe'))
    this.classList.add('active-recipe')
}
linkWork.forEach(L => L.addEventListener('click', activeWork))



/*=============== HIDE RECIPE DOPO TRE DIV ===============*/
$(document).ready(function() {
    $(".recipe__card").slice(0, 6).show();
    if ($(".recipe__card:hidden").length != 0) {
        $("#loadRecipe").show();
    }
    $("#loadRecipe").on("click", function(e) {
        e.preventDefault();
        $(".recipe__card:hidden").slice(0, 3).slideDown();
        if ($(".recipe__card:hidden").length == 0) {
            $("#loadRecipe").text("No More")
        }
    });
})

$('.recipe__card').hide();
$('#search').on("keyup", function() {
    var searchVal = $('#search').val().toUpperCase();
    var searchVal1 = $('#search').val().toLowerCase();

    if (searchVal == "" || searchVal1 == "") {
        $(".recipe__card").slice(0, 6).show();
    } else {
        $('.recipe__card').show();
        $('.recipe__card:not(:contains("' + searchVal + '"))').hide();
    }
});



/*=============== SORT RECIPE FROM A TO Z ===============*/
$('.recipe__card').sort(function(a, b) {
    if (a.textContent.toLowerCase() < b.textContent.toLowerCase()) {
        return -1;
    } else {
        return 1;
    }
}).appendTo('.recipe__container');

/*=============== MIX RECIPE ON CATEGORY ===============*/
let mixerPortfolio = mixitup('.recipe__container', {
    selectors: {
        target: '.recipe__card'
    },
    animation: {
        duration: 300
    }
});