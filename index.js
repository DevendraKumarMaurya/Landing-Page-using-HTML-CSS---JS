console.log("Welcome to TechFlow - Main Page Loaded Successfully");

// Contact Us function - opens contact information
function contactUs() {
  alert("Contact TechFlow:\n\n" + 
        "📧 Email: contact@techflow.com\n" + 
        "📞 Phone: +1 (555) 123-4567\n" + 
        "🌐 Website: www.techflow.com\n" + 
        "📍 Address: 123 Tech Street, Digital City\n\n" + 
        "We'd love to hear from you!");
}

// Optional: You can add more functionality here
document.addEventListener('DOMContentLoaded', function() {
  console.log("TechFlow platform is ready!");
  
  // Add click handlers for main hero buttons
  const primaryBtn = document.querySelector('.btn-primary');
  const secondaryBtn = document.querySelector('.btn-secondary');
  
  if (primaryBtn) {
    primaryBtn.addEventListener('click', function() {
      alert('Welcome! This would typically show more information about our services.');
    });
  }
  
  if (secondaryBtn) {
    secondaryBtn.addEventListener('click', function() {
      alert('This would typically show more information about our services.');
    });
  }
  
  // Add click handlers for service buttons
  const serviceButtons = document.querySelectorAll('.service-btn');
  serviceButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      alert('Service details would be displayed here in a real application.');
    });
  });
  
  // Add better navigation handling
  const navItems = document.querySelectorAll('.nav-right ul li');
  navItems.forEach(function(item) {
    item.addEventListener('click', function() {
      if (this.textContent.trim() !== 'Services') {
        alert(`Navigating to ${this.textContent.trim()} section...`);
      }
    });
  });
});
