$(document).ready(function(){
    $('#image').html('<img src="assets/img/author.jpg" alt="author" width="350px" height="400px"/>');
    $('p').html('My name is Marija Vasić<br/><b>marija\.vasic\.25\.17@ict.edu.rs</b> <br/>and I am a student of ICT College in Belgrade<br/> (Internet Technologies).');
    $("p").hide();
    $(".hide").hide();
    $(".autor").click(function(){
        $('p').show(1000);
        $(".hide").show()
        $(".autor").hide();
        $(".hide").click(function(){
             $("p").hide(1000);
             $(".autor").show();
             $(".hide").hide();
        })
    });
})