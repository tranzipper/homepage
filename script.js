const mobileNav = document.getElementById("main_nav");
const menuIcon = document.querySelector(".menu_icon");

menuIcon.addEventListener("click", () => {
    // console.log("I am clicked");
    mobileNav.classList.toggle("show_main_menu");
});


const handleSubmit = (event) => {
    event.preventDefault();
    const formRef = document.getElementById("form-section");
    const btnForm = document.querySelector("#form_btn");
    btnForm.innerText = "Loading...";
    btnForm.disabled = true

    const formData = new FormData(formRef);

    // Perform any additional actions or submit the form data to your server
    fetch("https://formsubmit.co/info@gochargeam.com", {
            method: "POST",
            body: formData,
        })
        .then((response) => {
            const res = response.json();

            console.log(res);
        })
        .then((data) => {
            // Handle the response from the server
            btnForm.disabled = false
            btnForm.innerText = "Submitted, We'll reply you shortly";
            formRef.reset();

            // console.log("Form submitted successfully:", data);
        })
        .catch((error) => {
            btnForm.disabled = false
            console.error("Error submitting form:", error);
        })
        .finally(() => {
            setTimeout(() => {
                btnForm.innerText = "Submit";
            }, 5000);
        });
};