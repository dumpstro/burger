$(document).ready(function() {
    //add burger
    $("#addBtn").click(function(event) {
        event.preventDefault();
        console.log("I've been clicked")
        var burger = {
            burger_name: $("#burger_name").val().trim(),
            devoured: false
        }

        $.ajax("/api/burgers", {
            type: "POST",
            data: burger
        }).then(
            function() {
                console.log("Created new burger");
                location.reload();
            }
        )
    });

    //update devoured state
    $("#devourIt").click(function(event) {
        event.preventDefault();
        console.log("Devoured has been clicked")
        
        var burgerId = $(this).data("id");
        console.log("Button Id clicked: " + burgerId)
        var consumed = {
            devoured: true
        }

        $.ajax("api/burgers/" + burgerId, {
            type: "PUT",
            data: consumed
        }).then(
            function() {
                console.log("Burger Eaten Yum!");
                location.reload();
            }
        )
    });
});