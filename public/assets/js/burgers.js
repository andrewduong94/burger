// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function(){
    $(".create-form").on("submit", function(event){
        event.preventDefault();
    
        var newBurger = {
            name: $("#burger").val().trim()
        };
    
        //Send Post request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function(){
                console.log("added burger")
                //reload page to update
                location.reload();
            }
        );
    });

    $(".changeDevour").on("click", function(event){
        var id = $(this).data("id")

        var updatedDev = {
            devoured: true
        };

        //Send PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: updatedDev
        
    }).then(
        function() {
            console.log("Devoured");
            //Reload page
            location.reload();
        }
    )
});

});



