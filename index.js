console.log("Welcome to TechFlow - Main Page Loaded Successfully");

// Contact Us function - opens contact information
function logOut() {
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
  
  // Add click handlers for buttons if needed
  const primaryBtn = document.querySelector('.btn-primary');
  const secondaryBtn = document.querySelector('.btn-secondary');
  
  if (primaryBtn) {
    primaryBtn.addEventListener('click', function() {
      alert('Welcome! This would typically redirect to registration or getting started page.');
    });
  }
  
  if (secondaryBtn) {
    secondaryBtn.addEventListener('click', function() {
      alert('This would typically show more information about our services.');
    });
  }
});
