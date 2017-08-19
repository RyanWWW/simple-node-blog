/*--post header--*/
$('#markdownContainer h1').replaceWith(function(){
    return $('<div>',{html: $(this).html(),class:'ui large header'});
});

$('#markdownContainer h2').replaceWith(function(){
    return $('<div>',{html: $(this).html(),class:'ui medium header'});
});

$('#markdownContainer h3').replaceWith(function(){
    return $('<div>',{html: $(this).html(),class:'ui small header'});
});
$('#markdownContainer ul').replaceWith(function(){
    return $('<div>',{html: $(this).html(),class:'ui list'});
});
$('#markdownContainer li').replaceWith(function(){
    return $('<div>',{html: $(this).html(),class:'item'});
});




// var post_header=$('.markdownContainer h1').html()
// $('.markdownContainer h1').replaceWith('<div class="ui large header"></div>')
// $('.markdownContainer .large.header').html(post_header)

// post_header=$('.markdownContainer h2').html()
// $('.markdownContainer h2').replaceWith('<div class="ui medium header"></div>')
// $('.markdownContainer .medium.header').html(post_header)

// post_header=$('.markdownContainer h3').html()
// $('.markdownContainer h3').replaceWith('<div class="ui small header"></div>')
// $('.markdownContainer .small.header').html(post_header)

/*--post list--*/
