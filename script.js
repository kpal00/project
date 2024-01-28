var signUpModal = document.getElementById("mySignUpModal");

// Get the button that opens the Sign Up modal
var signUpBtn = document.getElementById("myBtn");

// Get the <span> element that closes the Sign Up modal
var signUpSpan = document.getElementsByClassName("close")[0];

// When the user clicks the button for Sign Up, open the modal 
signUpBtn.onclick = function(event) {
  event.preventDefault();
  signUpModal.style.display = "block";
}

// When the user clicks on <span> (x) for Sign Up, close the modal
signUpSpan.onclick = function() {
  signUpModal.style.display = "none";
}

// Get the modal for Sign In
var signInModal = document.getElementById("mySignInModal");

// Get the button that opens the Sign In modal
var signInBtn = document.getElementById("mySignInBtn");

// Get the <span> element that closes the Sign In modal
var signInSpan = document.getElementsByClassName("close")[1];

// When the user clicks the button for Sign In, open the modal 
signInBtn.onclick = function(event) {
  event.preventDefault();
  signInModal.style.display = "block";
}

// When the user clicks on <span> (x) for Sign In, close the modal
signInSpan.onclick = function() {
  signInModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal for Sign Up, close it
window.onclick = function(event) {
  if (event.target == signUpModal) {
    signUpModal.style.display = "none";
  }
}

// When the user clicks anywhere outside of the modal for Sign In, close it
window.onclick = function(event) {
  if (event.target == signInModal) {
    signInModal.style.display = "none";
  }
}

function openSignUpModal() {
    signUpModal.style.display = "block";
  }

   // Get the modal for Create Post
   var createPostModal = document.getElementById("createPostModal");

   // Function to open the Create Post modal
   function openCreatePostModal() {
     createPostModal.style.display = "block";
   }

   // Function to close the Create Post modal
   function closeCreatePostModal() {
     createPostModal.style.display = "none";
   }

   // Function to handle the "Create" button click in the Create Post modal (for demonstration purposes)
   function createPost() {
     alert("Post created!"); // You can replace this with your actual logic to handle post creation
     closeCreatePostModal(); // Close the modal after creating the post
   }

   // Function to redirect to "blog.html" when clicking "All Post"
   function redirectToBlog() {
     window.location.href = "blog.html";
   }