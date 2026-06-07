window.onload = () => {
console.log("Stealme Designs Website Loaded Successfully");
};
const form = document.getElementById("contactForm");
const toast = document.getElementById("toast");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const formData = new FormData(form);

    try {

        const response = await fetch(
            "https://formsubmit.co/ajax/stealmedesigns15@gmail.com",
            {
                method: "POST",
                body: formData
            }
        );

        if (response.ok) {

            toast.classList.add("show");

            setTimeout(() => {
                toast.classList.remove("show");
            }, 3000);

            form.reset();

        }

    } catch (err) {

        console.error(err);

    }

});
