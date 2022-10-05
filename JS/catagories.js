// Load Categories
const loadCatagories = async () => {
  const getCatagories = await fetch(
    `https://openapi.programming-hero.com/api/news/categories`
  );
  const newsCategory = await getCatagories.json();
  // console.log(newsCategory);
  displayCategoryName(newsCategory);
};
loadCatagories();

// Display Catagories
const displayCategoryName = (categories) => {
  const data = categories.data.news_category;
  const allCategories = document.getElementById("all-categories");
  // console.log(data);
  data.forEach(category => {
    const categoryName = category.category_name;
    const categoryId = category.category_id;
    // console.log(categoryId, categoryName);
    const categoryLi = document.createElement('li');
    categoryLi.classList.add("content-center");
    categoryLi.innerHTML = `
    <a id="${categoryId}">${categoryName}</a>
    `;
    allCategories.appendChild(categoryLi);
  });
};

displayCategoryName();
