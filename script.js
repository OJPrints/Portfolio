
document.addEventListener("DOMContentLoaded", () => {
    const loader = document.querySelector(".loader");
    const servicesSection = document.querySelector(".services");
    
    setTimeout(() => {
        loader.style.display = "none";
        servicesSection.style.display = "block";
    }, 2000);

    const serviceCards = document.querySelectorAll(".service-card");
    
    serviceCards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.transform = "scale(1.05) rotate(1deg)";
            card.style.transition = "transform 0.4s ease-out";
        });
        card.addEventListener("mouseout", () => {
            card.style.transform = "scale(1) rotate(0deg)";
            card.style.transition = "transform 0.4s ease-in";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".scroll-element");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, { threshold: 0.2 });
    
    elements.forEach(element => {
        observer.observe(element);
    });
});



  // Scroll to Top Function
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show or Hide Scroll-Up Button on Scroll
const scrollUpBtn = document.getElementById("scrollUpBtn");

window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        scrollUpBtn.style.display = "block";
    } else {
        scrollUpBtn.style.display = "none";
    }
});

scrollUpBtn.addEventListener("click", scrollToTop);

// Hamburger Menu Toggle
// Select elements
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");

// Toggle menu on click
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close menu when a link is clicked
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});


function openPopup(type) {
    let title = "";
    let text = "";

    if (type === "education") {
        title = "Education";
        text = "I have a Bachelor's degree in Software Engineering with experience in full-stack development.";
    } else if (type === "experience") {
        title = "Experience";
        text = "Community Manager, Web Developer, Graphics Designer, Digital Marketer and Content Strategist with hands-on expertise.";
    } else if (type === "skills") {
        title = "Skills";
        text = "Proficient in HTML, CSS, JavaScript, React, and digital marketing.";
    }

    document.getElementById("popup-title").innerText = title;
    document.getElementById("popup-text").innerText = text;
    document.getElementById("popup").classList.add("active");
}

function closePopup() {
    document.getElementById("popup").classList.remove("active");
}

document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress");

    function checkScroll() {
        let triggerBottom = window.innerHeight * 0.85;

        progressBars.forEach((progress) => {
            const barTop = progress.getBoundingClientRect().top;
            if (barTop < triggerBottom) {
                let percentage = progress.getAttribute("data-percent");
                progress.style.width = percentage + "%";
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
});


document.addEventListener("DOMContentLoaded", function () {
    const viewButtons = document.querySelectorAll(".view-image-btn");
    const popup = document.querySelector(".image-popup");
    const popupImage = document.querySelector(".popup-image");
    const closePopup = document.querySelector(".close-popup");

    viewButtons.forEach(button => {
        button.addEventListener("click", function () {
            const imageSrc = this.getAttribute("data-img");
            popupImage.src = imageSrc;
            popup.style.display = "flex";
        });
    });

    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
    });

    popup.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Contact Form Submission
    document.getElementById("contactForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "re_gnJC6Fbr_KWQGnn9XPmWqGWGBuexp43u5" // Replace with a secure backend solution
            },
            body: JSON.stringify({
                from: "ojterry339@gmail.com", // Use a verified email
                to: "ojterry339@gmail.com", // Replace with recipient email
                subject: "New Contact Form Submission",
                html: `
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong> ${message}</p>
                `
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.id) {
                alert("Message sent successfully!");
                document.getElementById("contactForm").reset();
            } else {
                alert("Failed to send message. Please check your API settings.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Failed to send message. Try again.");
        });
    });

    // Buying Plan Form Submission
    document.getElementById("buyingForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const service = document.getElementById("service").value;
        const buyerEmail = document.getElementById("buyerEmail").value.trim();

        if (!service || !buyerEmail) {
            alert("Please select a service and enter your email.");
            return;
        }

        fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer YOUR_SECRET_API_KEY" // Use a secure backend
            },
            body: JSON.stringify({
                from: "ojterry339@gmail.com", // Use a verified email
                to: "ojterry339@gmail.com", // Replace with recipient email
                subject: "New Plan Purchase Request",
                html: `
                    <p><strong>Service:</strong> ${service}</p>
                    <p><strong>Buyer Email:</strong> ${buyerEmail}</p>
                `
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.id) {
                alert("Purchase request sent successfully!");
                document.getElementById("buyingForm").reset();
            } else {
                alert("Failed to send purchase request. Please check your API settings.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Failed to send purchase request. Try again.");
        });
    });
});





let currentIndex = 0;
const reviews = document.querySelectorAll(".review");
const totalReviews = reviews.length;

function showReview(index) {
    reviews.forEach((review, i) => {
        review.style.display = i === index ? "block" : "none";
    });
}

// Auto-change reviews every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalReviews;
    showReview(currentIndex);
}, 5000);

// Show first review by default
showReview(currentIndex);








