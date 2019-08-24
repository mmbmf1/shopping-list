//add new items to the list
$(function() {

    $('#js-shopping-list-form').submit(function (event) { //listen for the form submit

        event.preventDefault(); //remove defafult submit action

        const addListItem = $('input').val(); //store the new item as a constant

        $('input').val(' '); //clear the input in the form

        $('.shopping-list').append( //add the new item in the DOM
            `<li>
            <span class="shopping-item">${addListItem}</span> 
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`);
    });
//delete items from list
    $('.shopping-list').on('click', '.shopping-item-delete', function (event) {
        $(this).closest('li').remove();
    });
// toggle strike thru
    $('.shopping-list').on('click', '.shopping-item-toggle', function (event) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');       
    });
});
