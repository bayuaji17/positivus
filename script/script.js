const openButton = document.getElementById("open-button");
const closeButton = document.getElementById("close-button");
const mobileNav = document.getElementById("mobile-nav");
const navbar = document.getElementById("navbar");
const accordionItems = document.querySelectorAll(".accordion-item");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar.classList.add("bg-green", "border-black", "border-2");
  } else {
    navbar.classList.remove("bg-green", "border-black", "border-2");
  }
});

openButton.addEventListener("click", () => {
  mobileNav.classList.remove("translate-x-full");
  mobileNav.classList.add("translate-x-0");
});
closeButton.addEventListener("click", () => {
  mobileNav.classList.remove("translate-x-0");
  mobileNav.classList.add("translate-x-full");
});

accordionItems.forEach((item) => {
  const toggle = item.querySelector(".accordion-toggle");
  const content = item.querySelector(".accordion-content");
  const icon = item.querySelector(".accordion-icon");
  const iconPath = item.querySelector(".accordion-icon path");

  toggle.addEventListener("click", () => {
    const isOpen = content.classList.contains("open");

    accordionItems.forEach((otherItem) => {
      const otherContent = otherItem.querySelector(".accordion-content");
      const otherIcon = otherItem.querySelector(".accordion-icon");
      const otherIconPath = otherItem.querySelector(".accordion-icon path");

      otherContent.classList.remove("open");
      otherContent.style.maxHeight = "0";
      otherIcon.classList.remove("rotate");
      otherItem.classList.remove("bg-green");
      otherItem.classList.add("bg-gray");
      otherIconPath.setAttribute(
        "d",
        "M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z", // Plus
      );
    });

    if (!isOpen) {
      content.classList.add("open");
      content.style.maxHeight = content.scrollHeight + "px";
      icon.classList.add("rotate");
      item.classList.remove("bg-gray");
      item.classList.add("bg-green");
      iconPath.setAttribute("d", "M19 11H5V13H19V11Z"); // Minus
    }
  });
});
