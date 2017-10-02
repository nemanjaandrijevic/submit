// $('#btn-submit').click(function(e){
//     e.preventDefault();
//     console.log('btn clicked');
// });

// console.log('test');
$(document).ready(function() {
    // console.log('document is ready');
    $('form').submit(function(e) {
        e.preventDefault();
        // console.log('someone tried to submit the form');

        $('.well p').removeClass('invisible');

        // Nacin 1: nadji sve inpute pojedinacno
        var n = $('#Name').val();
        // console.log('ime koje je neko upias', name);
        $('#result_name').text(n);

        // init variable and asign a value of
        // find an element (input) with id ...
        // get value of that input
        var surname = $('#surname').val();
        console.log('prezime koje je neko upias', surname);
        $('#result_surname').text(surname);
        // find el. with id "result_surname"

        var birth = $('#birth').val();
        console.log('ime koje je neko upias', birth);
        $('#result_birth').text(birth);

        var mob = $('#mob').val();
        if (validateMob(mob)) {
            $('#mob').parents('.form-group').removeClass('has-error')
            $('#result_mob').text(mob);
        }else {
            $('#mob').parents('.form-group').addClass('has-error')
        }
        console.log('ime koje je neko upias', mob);

        var email = $('#email').val();
        // 1. is empty
        // 2. is email address
        if (validateEmail(email)) {
            $('#email').parents('.form-group').removeClass('has-error')
            $('#result_email').text(email);
        } else {
            $('#email').parents('.form-group').addClass('has-error')
        }
        console.log('ime koje je neko upias', email);


        var opis = $('#opis').val();
        console.log('ime koje je neko upias', opis);
        $('#result_opis').html(opis);

        var pol = $('input[name="pol"]:checked').val();
        console.log('ime koje je neko upias', pol);
        $('#result_pol').text(pol);

        var pusac = $('input[name="pusac"]:checked').val();
        console.log('ime koje je neko upias', pusac);
        $('#result_pusac').text(pusac);

        var ocena = $('#ocena option:selected').val();
        console.log('ime koje je neko upias', ocena);
        $('#result_ocena').text(ocena);
    })
});

function validateMob(mob) {
    return true;
    // var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(mob);
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
