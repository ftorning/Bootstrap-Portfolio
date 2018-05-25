$( document ).ready(function() {
    console.log("Ayyyoooo");
   
    $("#submit").click( function() {
        var cname = $("#name").val();
        var cemail = $("#email").val();
        var cmsg = $("#message").val();
        alert("Can't send an email\n\n" + "\nName = " + cname + "\nEmail = " + cemail + "\nMessage = " + cmsg);
        $("#name").val("");
        $("#email").val("");
        $("#message").val("");
    });
});

