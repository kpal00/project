function confirmDelete(columnId) {
    var result = confirm("Are you sure you want to delete this column?");
    if (result) {
        // User clicked "Yes," delete the column
        var column = document.getElementById(columnId);
        column.remove();
    }
    // If "No" is clicked, do nothing
}
function redirectToPost(page) {
    window.location.href ="post.html";
}