

$( document ).ready(function() {
    
    // $("#textbox-1").

    $( "#btn-2" ).click(function() {
        // function for getting caurrent value in text box
        var value=$("#textbox-1").val();
        alert(value);
    });
    $( "#btn-3" ).click(function() {
        console.log("Button Clicked");
        
        // function for getting caurrent value in text box
        var value=$(".card-body");
        console.log(value);
        console.log(value.text());
        var elem= $("#task-card-id")
        console.log(elem);
        elem.remove();
    });

    
 
});



