document.addEventListener("DOMContentLoaded", function() {
  const mailchimpForm = document.getElementById("mc-embedded-subscribe-form");
  
  if (mailchimpForm) {
    // Set the correct Mailchimp action URL (from your embedded code)
    mailchimpForm.action = "https://studio.us7.list-manage.com/subscribe/post?u=0bad0ecde19c26e773298754f&id=5f4c822fc8&f_id=001a1be1f0";
    
    mailchimpForm.addEventListener("submit", function(event) {
      const email = document.getElementById("mce-EMAIL").value;
      const firstName = document.getElementById("mce-FNAME").value;
      
      // Basic validation - only email is required in your Mailchimp form
      if (!email) {
        event.preventDefault();
        alert("Please enter your email address to subscribe.");
        document.getElementById("mce-EMAIL").focus();
        return;
      }
      
      // If validation passes, allow form to submit to Mailchimp
      console.log("Submitting to Mailchimp:", { email, firstName });
      
      // Optional: Track submission in your analytics
      // gtag('event', 'mailchimp_submit', { email: email });
    });
    
    // Listen for Mailchimp's response messages
    const successResponse = document.getElementById("mce-success-response");
    const errorResponse = document.getElementById("mce-error-response");
    
    // Success handler
    if (successResponse) {
      new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          if (mutation.attributeName === "style" && 
              successResponse.style.display !== "none") {
            const name = document.getElementById("mce-FNAME").value || "there";
            alert(`Thank you ${name}! You've been successfully subscribed.`);
            mailchimpForm.reset();
          }
        });
      }).observe(successResponse, { attributes: true });
    }
    
    // Error handler
    if (errorResponse) {
      new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          if (mutation.attributeName === "style" && 
              errorResponse.style.display !== "none") {
            console.error("Mailchimp error:", errorResponse.textContent);
            // Optional: You could show a custom error message here
          }
        });
      }).observe(errorResponse, { attributes: true });
    }
  }
  
  // Initialize Mailchimp's validation script (from your embedded code)
  if (typeof window.Mailchimp !== 'undefined') {
    window.Mailchimp.init();
  }
});
