

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
        
        if ((response.data !=='Task Already Exists') && (textboxcontent)){

            var id_in_db=response.data
            var cardcontainer=$(".card-container");
            var content="<div class='card mb-1' id='task-card-"+id_in_db+"'><div class='card-body' id ='card-body-" +id_in_db+"'>"
            content +="<p>"+textboxcontent+"</p>";
            content += "<button type='button' id='Cardbtn-"+id_in_db+ "' class='close'><span aria-hidden='true'>&times;</span></button></div></div>";

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
     $(document).on("click","button[id^='Cardbtn-']",function(event){
        // event.stopPropagation()
        console.log("Hi");
        console.log(this.id);
        
        var id_card=this.id;
        temp_lst=id_card.split('-')
        alert(temp_lst[1])

        $.ajax({
            url:'',
            data:{task_id:temp_lst[1]},
            success:function(response_del){
                // alert("Respnse form backend"+ response_del.data_del)
                elem='#task-card-'+temp_lst[1];
                // alert(elem)
                var get_elem = $(elem)
                // alert(get_elem.length)
                get_elem.remove()

            }

        }

        )

        

        
        
      });

      $('div.card').click(function(event) {
        
        // console.log(event.target);
        // console.log($(event.target));
        if ($(event.target).is('span')){
            // alert("Cross btn")
            event.preventDefault();
            return;
        }
        var status = $(this).attr('id');
        var id=status.split('-')[2]
        console.log(id)
        console.log(Number(id))
        console.log(Number.isInteger(Number(id)))
        // alert(status);
        let a="'#"+status+"'";
        if (Number.isInteger(Number(id))){

        //How to access child tags with Jquery $("p").css("background-color");
        console.log($(this).children("div").children("p").text())
        var content_name=$(this).children("div").children("p").text()
        var confrim=confirm("Do you want to change status of '"+ content_name +"' to be completed ?")
        var chld_p = $(this).children("div").children("p")

        if (confrim){
            $.ajax({
                url:'',
                data:{'id_of_done_task':[content_name, id]},
                success: function(){
                    chld_p.css("text-decoration","line-through")
    
                }
    
            })
        }

        }
       
    });

    
 
});



