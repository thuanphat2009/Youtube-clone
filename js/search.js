


const btnFilter = $(".content__right-search-filter-heading-content");
const tableFilter = $(".content__right-search-filter-content");
const iconFilter = $(".fa-filter");



// Click Icon Filter
btnFilter.onclick = function(){
    tableFilter.classList.toggle('active')
    if($('.content__right-search-filter-content.active'))
    {
        $('.content__right-search-filter-heading-text').style.color = '#030303'
        iconFilter.classList.remove('fal')
        iconFilter.classList.add('fas')
    }
    else{
        $('.content__right-search-filter-heading-text').style.color = '#606060'
        iconFilter.classList.remove('fas')
        iconFilter.classList.add('fal')
    }
}


