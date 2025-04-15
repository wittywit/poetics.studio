// Add event listener for form submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("mc-embedded-subscribe-form")

  if (form) {
    form.addEventListener("submit", (event) => {
      // Replace this URL with your actual Mailchimp form action URL when you have it
      const mailchimpUrl = "https://studio.us7.list-manage.com/subscribe/post?u=0bad0ecde19c26e773298754f&amp;id=5f4c822fc8&amp;f_id=001a1be1f0"

      // For now, we'll just prevent the default form submission for demonstration
      if (!form.action || form.action === "javascript:void(0)" || form.action === "#") {
        event.preventDefault()

        // Get form values
        const name = document.getElementById("mce-NAME").value
        const email = document.getElementById("mce-EMAIL").value
        const phone = document.getElementById("mce-PHONE").value

        // Simple validation
        if (name && email) {
          alert(`Thanks for joining our waitlist, ${name}! We'll be in touch soon.`)
          form.reset()
        } else {
          alert("Please enter your name and email address.")
        }
      }
    })
  }
})
