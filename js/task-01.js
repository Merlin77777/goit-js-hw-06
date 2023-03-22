const categories = document.querySelector("#categories");
console.log("Number of categories: ", categories.children.length);
const category = [...categories.children].forEach(item => {
    console.log("\nCategory: ", item.querySelector("h2").textContent);
    console.log("Elements: ", item.querySelector("ul").children.length); }
)