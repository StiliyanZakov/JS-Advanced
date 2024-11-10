function result(message) {
    const notification = document.getElementById('notification');
    
    // Set the message text
    notification.textContent = message;
    
    // Make the notification visible
    notification.style.display = 'block';
  
    // Hide the notification when clicked
    notification.addEventListener('click', function() {
      notification.style.display = 'none';
    });
  }    