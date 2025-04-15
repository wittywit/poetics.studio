document.addEventListener("DOMContentLoaded", function() {
  const mailchimpForm = document.getElementById("mc-embedded-subscribe-form");
  
  if (mailchimpForm) {
    // Set the correct Mailchimp action URL
    mailchimpForm.action = "https://studio.us7.list-manage.com/subscribe/post?u=0bad0ecde19c26e773298754f&id=5f4c822fc8&f_id=001a1be1f0";
    
    mailchimpForm.addEventListener("submit", function(event) {
      const email = document.getElementById("mce-EMAIL").value.trim();
      const firstName = document.getElementById("mce-FNAME").value.trim();
      const phone = document.getElementById("mce-MMERGE7").value.trim();
      
      // Basic validation
      if (!email) {
        event.preventDefault();
        alert("Please enter your email address to subscribe.");
        document.getElementById("mce-EMAIL").focus();
        return;
      }
      
      // Validate email format
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        event.preventDefault();
        alert("Please enter a valid email address.");
        document.getElementById("mce-EMAIL").focus();
        return;
      }
      
      // Optional: Phone validation (if you want to require phone)
      // if (!phone) {
      //   event.preventDefault();
      //   alert("Please enter your phone number.");
      //   document.getElementById("mce-MMERGE7").focus();
      //   return;
      // }
      
      console.log("Submitting to Mailchimp:", { 
        firstName: firstName,
        email: email, 
        phone: phone 
      });
    });
    
    // Enhanced Mailchimp response handling
    const successResponse = document.getElementById("mce-success-response");
    const errorResponse = document.getElementById("mce-error-response");
    
    // Success handler
    if (successResponse) {
      new MutationObserver(function() {
        if (successResponse.style.display !== "none") {
          const name = document.getElementById("mce-FNAME").value || "there";
          
          // Custom success message
          const successMessage = phone 
            ? `Thanks ${name}! We'll contact you at ${phone} shortly.`
            : `Thank you ${name}! You've been successfully subscribed.`;
          
          alert(successMessage);
          mailchimpForm.reset();
          
          // Optional: Redirect after success
          // window.location.href = "/thank-you.html";
        }
      }).observe(successResponse, { attributes: true });
    }
    
    // Error handler
    if (errorResponse) {
      new MutationObserver(function() {
        if (errorResponse.style.display !== "none") {
          // Improve Mailchimp's default error messages
          const errorText = errorResponse.textContent.toLowerCase();
          let friendlyError = "Subscription failed. Please try again.";
          
          if (errorText.includes("already subscribed")) {
            friendlyError = "This email is already subscribed. Thank you!";
          } else if (errorText.includes("invalid email")) {
            friendlyError = "Please enter a valid email address.";
          }
          
          alert(friendlyError);
        }
      }).observe(errorResponse, { attributes: true });
    }
  }
});
