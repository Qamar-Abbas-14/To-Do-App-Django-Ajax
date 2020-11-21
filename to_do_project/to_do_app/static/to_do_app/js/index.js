

$( document ).ready(function() {
    
    // $("#textbox-1").

    $( "#btn-2" ).click(function() {
        // function for getting caurrent value in text box
        // var value=$("#textbox-1").val();
        // var cardcontainer=$(".card-container");
        // var content="<p>Card Content</p>"
        // cardcontainer.append(content);
        // alert(value);
        console.log("Button Clicked");
        var textboxcontent=$('#textbox-1').val();
        var cardcontainer=$(".card-container");
        var content="<div class='card mb-1' id='task-card-id'><div class='card-body'>"
        content +="<p>"+textboxcontent+"</p>";
        content += "<button type='button' id='btn-3' class='close'><span aria-hidden='true'>&times;</span></button></div></div>";

        cardcontainer.append(content);
    });
    $( "#btn-3" ).click(function() {
        
        // function for getting caurrent value in text box
        var value=$(".card-body");
        console.log(value);
        console.log(value.text());
        var elem= $("#task-card-id")
        console.log(elem);
        elem.remove()
    });

    
 
});



