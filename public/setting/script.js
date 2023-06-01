const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

dropdownToggles.forEach((toggle) => {
  const dropdownMenu = toggle.nextElementSibling;
  toggle.addEventListener("click", () => {
    dropdownMenu.classList.toggle("show");
  });

  const options = dropdownMenu.querySelectorAll("li");
  options.forEach((option) => {
    option.addEventListener("click", () => {
      const selectedValue = option.getAttribute("data-value");
      toggle.textContent = option.textContent;
      dropdownMenu.classList.remove("show");
    });
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.matches(".dropdown-toggle")) {
    const dropdownMenus = document.querySelectorAll(".dropdown-menu");
    dropdownMenus.forEach((menu) => {
      if (menu.classList.contains("show")) {
        menu.classList.remove("show");
      }
    });
  }
});