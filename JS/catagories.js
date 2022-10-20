// Load Categories
const loadCatagories = async () => {
  try {
    const getCatagories = await fetch(
      `https://openapi.programming-hero.com/api/news/categories`
    );
    const newsCategory = await getCatagories.json();
    // console.log(newsCategory);
    displayCategoryName(newsCategory);
  } catch (error) {
    console.log(error);
  }
};
loadCatagories();

// Display Catagories
const displayCategoryName = (categories) => {
  try {
    const data = categories.data.news_category;
    const allCategories = document.getElementById("all-categories");
    // console.log(data);
    data.forEach((category) => {
      const categoryName = category.category_name;
      const categoryId = category.category_id;
      // console.log(categoryId, categoryName);
      const categoryLi = document.createElement("li");
      categoryLi.classList.add("content-center");
      categoryLi.innerHTML = `
    <a id="${categoryId}" class="hover:bg-sky-600 hover:text-white">${categoryName}</a>
    `;
      allCategories.appendChild(categoryLi);
      const loadCate = document.getElementById(`${categoryId}`);
      loadCate.addEventListener("click", function () {
        loadCategoryDetails(`${categoryId}`, categoryName);
        // loadCate.classList.add("active");
        spinner(true);
      });
    });
  } catch (err) {
    console.log(err);
  }
};
