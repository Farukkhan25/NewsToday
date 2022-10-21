// Category Details Loading here ....

const loadCategoryDetails = async (category_id, categoryNameDisplay) => {
  try {
    const getDetails = await fetch(
      `https://openapi.programming-hero.com/api/news/category/${category_id}`
    );
    const categoryDetails = await getDetails.json();
    displayNews(categoryDetails, categoryNameDisplay);
  } catch (error) {
    console.log(error);
  }
};

loadCategoryDetails("08");

// Display News in the News-Container

const displayNews = (detailsData, categoryNameDisplay) => {
  const details = detailsData.data;
  const newsContainer = document.getElementById("news-container");
  newsContainer.innerHTML = "";
  const detailsNumberOfNews = details.length;
  const numberOfNews = document.getElementById("item-list");
  numberOfNews.innerText = detailsNumberOfNews;
  const placeCategoryName = document.getElementById("category-name");
  placeCategoryName.innerText = categoryNameDisplay
    ? categoryNameDisplay
    : "All News";
  if (detailsNumberOfNews === 0) {
    numberOfNews.innerText = "No";
    const notFound = document.createElement("div");
    notFound.innerHTML = `
            <h4 class="text-center text-orange-800 font-semibold">No News Found !!! <br/> Please Visit Another Category</h4>
        `;
    newsContainer.appendChild(notFound);
    spinner(false);
  }

  details.sort((a, b) => {
    return b.total_view - a.total_view;
  });

  // <---Loading News Data--->
  details.forEach((detailsNews) => {
    const authorName = detailsNews.author.name
      ? detailsNews.author.name
      : "Public Author";
    const publishDate = detailsNews.author.published_date
      ? detailsNews.author.published_date
      : "Unknown";
    const authorImg = detailsNews.author.img
      ? detailsNews.author.img
      : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fvector-images%2Fno-image-available.html&psig=AOvVaw3Ud2-jJmIhCLeURuUnNUqC&ust=1665076667607000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLD434_MyfoCFQAAAAAdAAAAABAD";
    const detailsPost = detailsNews.details;
    const detailsPostShort =
      detailsPost.length > 345
        ? detailsPost.slice(0, 345) + "..."
        : detailsPost;
    const postImage = detailsNews.image_url;
    const postTitle = detailsNews.title;
    const totalView = detailsNews.total_view ? detailsNews.total_view : "0";
    const isToDaysPick = detailsNews.others_info.is_todays_pick;
    const isTrending = detailsNews.others_info.is_trending;
    const postId = detailsNews._id;

    // <---Showing All News--->
    const newsContainerBody = document.createElement("div");

    newsContainerBody.innerHTML = `
        <div class="card lg:card-side bg-base-100 shadow-xl shadow-cyan-500/20 my-16 lg:h-72 bg-indigo-800">
          <figure>
            <img class="object-fill lg:h-full lg:w-96" src="${postImage}" alt="Movie" />
          </figure>
        <div class="card-body ">
            <h2 class="card-title font-bold font-sans sm:text-2xl md:text-3xl text-white pb-3">${postTitle}</h2>
            <p class="text-justify text-slate-300">${detailsPostShort}</p>
            
            <div class="flex justify-between items-center">
            <div class="flex items-center">
                <div class="author">
                    <img class="author-img" src="${authorImg}" alt="" />
                </div>
            <div class="mx-2">
                <h6 class="m-0 text-yellow-50">${authorName}</h6>
                <small class="m-0 text-yellow-50">${publishDate}</small>
            </div>
        </div>
    <h6><span class="pr-2 text-yellow-50"><i class="fa-regular fa-eye"></i></span><span class="text-yellow-50">${totalView}</span></h6>
    <div class="flex pr-3">
        <i class="fa-solid fa-star text-yellow-50"></i>
        <i class="fa-solid fa-star text-yellow-50"></i>
        <i class="fa-solid fa-star text-yellow-50"></i>
        <i class="fa-solid fa-star-half-stroke text-yellow-50"></i>
        <i class="fa-regular fa-star text-yellow-50"></i>
    </div>    

    <label for="my-modal-3" id="${postId}" class="btn modal-button bg-red-700 border-lime-300"><i class="fa-solid fa-arrow-right text-yellow-50"></i></label>
    
    </div>
  </div>
</div>
`;
    newsContainer.appendChild(newsContainerBody);

    // Show News Details.....
    document.getElementById(`${postId}`).addEventListener("click", function () {
      loadNewsDetails(`${postId}`);
      spinner(true);
    });
  });
  spinner(false);
};

// Most-Views

document.getElementById('most-views').addEventListener("click", function () {
  loadCategoryDetails("08");
})

// Today's Pick
document.getElementById("today's-pick").addEventListener("click", function () {
  loadCategoryDetails("01");
});