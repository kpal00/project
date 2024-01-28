document.getElementById('likeButton').addEventListener('click', function() {
    // Increment the like count
    var likeCountElement = document.getElementById('likeCount');
    var currentLikes = parseInt(likeCountElement.innerText);
    likeCountElement.innerText = currentLikes + 1;

    // Update the text based on the number of likes
    var likeText = (currentLikes + 1 === 1) ? ' person likes this!' : ' people like this!';
    document.getElementById('likeCountText').innerText = likeText;
  });

  document.getElementById('commentButton').addEventListener('click', function() {
    var commentInput = document.getElementById('commentInput');
    var newComment = commentInput.value.trim();

    if (newComment !== '') {
      var commentElement = document.createElement('div');
      commentElement.innerHTML = '<p>' + newComment + '</p>';

      var allComments = document.getElementById('allComments');
      allComments.insertBefore(commentElement, allComments.firstChild);

      commentInput.value = '';
    }
  });
  function toggleEdit() {
    // Get the post title and text elements
    var postTitle = document.getElementById('r1').getElementsByTagName('h4')[0];
    var postText = document.getElementById('r3').getElementsByTagName('div')[0];

    // Enable editing
    postTitle.contentEditable = true;
    postText.contentEditable = true;

    // Show the "Save" button and hide the "Edit" button
    document.getElementById('c1').getElementsByTagName('button')[0].style.display = 'none';
    document.getElementById('c1').getElementsByTagName('button')[1].style.display = 'inline-block';
  }

  function saveChanges() {
    // Get the post title and text elements
    var postTitle = document.getElementById('r1').getElementsByTagName('h4')[0];
    var postText = document.getElementById('r3').getElementsByTagName('div')[0];

    // Disable editing
    postTitle.contentEditable = false;
    postText.contentEditable = false;

    // Show the "Edit" button and hide the "Save" button
    document.getElementById('c1').getElementsByTagName('button')[0].style.display = 'inline-block';
    document.getElementById('c1').getElementsByTagName('button')[1].style.display = 'none';
  }