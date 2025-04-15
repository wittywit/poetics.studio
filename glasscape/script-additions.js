// Add event listener for form submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("mc-embedded-subscribe-form")

  if (form) {
    form.addEventListener("submit", (event) => {
      // Mailchimp form action URL from the embedded code
      const mailchimpUrl = "https://studio.us7.list-manage.com/subscribe/post?u=0bad0ecde19c26e773298754f&amp;id=5f4c822fc8&amp;f_id=001a1be1f0"

      // For now, we'll just prevent the default form submission for demonstration
      if (!form.action || form.action === "javascript:void(0)" || form.action === "#") {
        event.preventDefault()

        // Get form values - updated to match the actual field names from Mailchimp
        const name = document.getElementById("mce-FNAME").value
        const email = document.getElementById("mce-EMAIL").value
        const phone = document.getElementById("mce-MMERGE7").value

        // Simple validation
        if (email) {  // Email is the only required field based on the form
          alert(`Thanks for subscribing, ${name || 'there'}! We'll be in touch soon.`)
          form.reset()
        } else {
          alert("Please enter your email address.")
        }
      }
    })
  }
})
