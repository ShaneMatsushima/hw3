$(document).ready(function(){
    $('#to-show1').hide();
    $('#to-show2').hide();

    //click function for submit
    $('#submit').click(function(){
        var notes = $('textarea').val();
        if(~notes.indexOf('vegan')){    
            alert("Cheesecake contains dairy.")
        } else {

            $('#to-hide').hide();
            $('.user-input').hide();

            var topping = $("input[name='radio-tpg']:checked").val();
            var quantity = $('#quantity:selected').val();

            $('#to-show1').show();
            $('to-show2').show();
            $('.quantity-val').html(quantity);
            $('.topping-val').html(topping);
            $('.note-val').html(notes);       
        }
    });

    //dropdown 
    $('#month option[value=Jan]').attr('selected', 'selected');

});