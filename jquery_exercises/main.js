$( document ).ready(function(e) {
    $('html').keydown(function(e) {
        console.log('e', e);
        // console.log('e.keyCode', e.keyCode);
        // console.log('e.key', e.key);
        // console.log('e.originalEvent.code', e.originalEvent.code);
    });
});