const home = document.getElementById("home");
const services = document.getElementById("services");
const contact = document.getElementById("contact");
const about = document.getElementById("about");

const homeSection = document.getElementById("homeSection");
const serviceSection = document.getElementById("serviceSection");
const contactSection = document.getElementById("contactSection");
const aboutSection = document.getElementById("aboutSection");

const section = (ele) => {
  homeSection.style.display = "none";
  serviceSection.style.display = "none";
  contactSection.style.display = "none";
  aboutSection.style.display = "none";

  ele.style.display = "block";
};

home.addEventListener("click", () => section(homeSection));
services.addEventListener("click", () => section(serviceSection));
contact.addEventListener("click", () => section(contactSection));
about.addEventListener("click", () => section(aboutSection));
