const imageItem = document.querySelectorAll("#imageItem");
const imageProj = document.getElementById("imageProjector");
const ignProj = document.getElementById("ignProjector");
const name = document.getElementById("name");
const ign = document.getElementById("ign");
const relationship = document.getElementById("relationship");
const popup = document.getElementById("myPopup");

imageItem.forEach((itemImage) => {
  itemImage.addEventListener("mouseenter", () => {
    imageProj.setAttribute("src", itemImage.src);
    ignProj.textContent = itemImage.getAttribute("ign");
  });

  itemImage.addEventListener("mouseleave", () => {
    popup.classList.remove("show");
  });

  itemImage.addEventListener("click", () => {
    popup.classList.toggle("show");
    name.textContent = "Name: " + itemImage.getAttribute("name");
    ign.textContent = "IGN: " + itemImage.getAttribute("ign");
    relationship.textContent =
      "Relationship: " + itemImage.getAttribute("relationship");
  });
});
