// Class 15: Step 1: This file is running
console.log("script.js is running");    

// Class 15: Step 2: Put this year in the footer
const yearSpan = document.querySelector("#year");

// Lab 15: Task 2: Make each piece stand on its own
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
};

// Class 15: Step 3: A button that changes the page
const themeButton = document.querySelector("#theme-toggle");

// Lab 15: Task 2: Make each piece stand on its own
if (themeButton) {
    // Lab 15: Task 4: Use the saved choice on arrival
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark");
            themeButton.textContent = "Light";
        }

    // Lab 15: Task 3 and 4: The label swaps, and the choice is remembered
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark");

        // Lab 15: Task 3: The button says what it will do
        if (document.body.classList.contains("dark")) {
        themeButton.textContent = "Light";
        // Lab 15: Task 4: Make the choice stick
        localStorage.setItem("theme", "dark");
        } else {
        themeButton.textContent = "Dark";
        // Lab 15: Task 4: Make the choice stick
        localStorage.setItem("theme", "light");
        }
    });
};

const backToTopButton = document.querySelector("#back-to-top");

if (backToTopButton) {
    backToTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
};

// Class 16: Step 4: Handle the submit
const contactForm = document.querySelector("#contact-form");

// Class 16: Step 4: Handle the submit
if (contactForm) {
    const formStatus = document.querySelector("#form-status");

    // Lab 16: Task 1: My own check before accepting it
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.querySelector("#name").value;
        const messageInput = document.querySelector("#message");
        const message = messageInput.value;

        if (message.length < 10) {
            formStatus.textContent = "Please write at least 10 characters in your message.";
            formStatus.classList.add("error");
            return;
        }
    
        // Lab 16: Task 4: A rule of my own
        // Hardcoding the max characters to 500
        const maxCharacters = 500;
        
        if (message.length > maxCharacters) {
            formStatus.textContent = "Your message is too long. Please keep it under " + maxCharacters + " characters.";
            formStatus.classList.add("error");
            return;
        }

        formStatus.classList.remove("error");
        formStatus.textContent = "Thanks, " + name + "! Your message has been sent.";
        contactForm.reset();

        const currentCount = document.querySelector("#current-count");
        if (currentCount) {
            currentCount.textContent = "0";
        }
    });

    // Lab 16: Task 2: Clear the error once they start fixing it
    contactForm.addEventListener("input", function() {
        if (formStatus.classList.contains("error")) {
            formStatus.textContent = "";
            formStatus.classList.remove("error");
        }
    });
}

const message = document.querySelector("#message");
const currentCount = document.querySelector("#current-count");

if (message && currentCount) {
    currentCount.textContent = message.value.length;

    message.addEventListener("input", function() {
        currentCount.textContent = message.value.length;
    });
}