const themebtn = document.querySelectorAll(".theme-toggle");
const iconbtn = document.querySelectorAll("#icon");
const optionbtn = document.querySelectorAll(".option__bar");
const mobile = document.querySelector(".mobile__option");
const mobileLinks = document.querySelectorAll("#mobile__links");

const theme = localStorage.getItem("theme");

theme && document.body.classList.add(theme);

themebtn.forEach((themeToogle) => {
  themeToogle.addEventListener("click", () => {
    document.body.classList.toggle("lightmode");
    document.body.classList.contains("lightmode")
      ? localStorage.setItem("theme", "lightmode")
      : localStorage.removeItem("theme");
  });
});

iconbtn.forEach((iconToogle) => {
  let iconEl = iconToogle.children[0].children[0];

  const icon = localStorage.getItem("href");
  icon && iconEl.setAttribute("href", icon);

  iconToogle.addEventListener("click", () => {
    if (document.body.classList.contains("lightmode")) {
      localStorage.setItem("href", "#moon");
      iconEl.setAttribute("href", "#moon");
    } else {
      localStorage.removeItem("href");
      iconEl.setAttribute("href", "#sun");
    }
  });
});

let isMobileNavOpen = false;

optionbtn.forEach((optionToogle) => {
  optionToogle.addEventListener("click", () => {
    if (!isMobileNavOpen) {
      isMobileNavOpen = true;
      mobile.classList.add("show");
      document.body.style.overflow = "hidden";
    } else {
      isMobileNavOpen = false;
      mobile.classList.remove("show");
      document.body.style.overflow = "auto";
    }
  });
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    isMobileNavOpen = false;
    mobile.classList.remove("show");
    document.body.style.overflow = "auto";
  });
});
