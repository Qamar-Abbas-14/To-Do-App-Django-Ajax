

$( document ).ready(function() {
    
    // $("#textbox-1").

    $( "#create-btn" ).click(function() {
        // function for getting caurrent value in text box
        // var value=$("#textbox-1").val();
        // var cardcontainer=$(".card-container");
        // var content="<p>Card Content</p>"
        // cardcontainer.append(content);
        // alert(value);
        
        var textboxcontent=$('#textbox-1').val();
        $.ajax({
            url:'',
            data: { 
                content: textboxcontent
        },
        success: function (response){
        
        if ((response.data !=='Task Already Exists') & (textboxcontent)){
            var cardcontainer=$(".card-container");
            var content="<div class='card mb-1' id='task-card-id'><div class='card-body'>"
            content +="<p>"+textboxcontent+"</p>";
            content += "<button type='button' id='btnn-3' class='close'><span aria-hidden='true'>&times;</span></button></div></div>";

            cardcontainer.append(content);
            var elem=$('#textbox-1');
            console.log("hi")
            console.log(response.data)
            
            

        }
        var elem=$('#textbox-1');
        elem.val(""); //Clears the content of text-box
        
        
        }}

        )});
        



    // $( "#btn-3" ).click(function() {
        
    //     // function for getting caurrent value in text box
    //     var value=$(".card-body");
    //     console.log(value);
    //     console.log(value.text());
    //     var elem= $("#task-card-id")
    //     console.log(elem);
    //     elem.remove()
    // });
    // $('button[id^="btn-"]').on('click', function() {  
    //     alert("nnnn");
    //  });
     $(document).on("click","button[id^='btnn-']",function(){
        alert(this.id);
        var id_card=this.id;
        $('.'+'card-body'+id_card).remove();
        
      });

    
 
});



