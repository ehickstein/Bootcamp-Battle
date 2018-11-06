$(document).ready(function() {

    $("#startButton").on("click", function() {
        const localUserId = localStorage.getItem("userId");

        if(localUserId === null) {
            $.ajax({
                method: "POST",
                url: "/game"
            }).then(function(result){
                console.log(result);
                localStorage.setItem("userId", result.userId);
            });
        }

        else {
            $.ajax({
                method: "GET",
                url: "/game",
                data: {userId: localUserId}
            }).then(result => {
                console.log(result);
            });
        };

    })

});
