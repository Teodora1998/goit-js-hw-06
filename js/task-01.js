const categoriesList = document.getElementById("categories");
const categoryItems = categoriesList.getElementsByClassName("item");

const totalCategories = categoryItems.length;
console.log("Number of categories:", totalCategories);

for (let i = 0; i < categoryItems.length; i++) {
  const categoryItem = categoryItems[i];
  const titleElement = categoryItem.querySelector("h2");
  const title = titleElement.textContent.trim();
  const elements = categoryItem.querySelectorAll("li");

  console.log("\nCategory:", title);
  console.log("Elements:", elements.length);
}
