document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("modal");
    var span = document.getElementsByClassName("close-button")[0];

    // Show the modal
    modal.style.display = "block";

    // Close the modal when the user clicks on <span> (x)
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Close the modal when the user clicks anywhere outside of the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
