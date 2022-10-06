// Category Details Loading here ....

const loadCategoryDetails = async (category_id, categoryNameDisplay) => {
  const getDetails = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`
  );
  const categoryDetails = await getDetails.json();
  //   console.log(categoryDetails);
  displayNews(categoryDetails, categoryNameDisplay);
};

loadCategoryDetails('08');

// Display News in the News-Container
const displayNews = (detailsData, categoryNameDisplay) => {
  const details = detailsData.data;
  //   console.log(details);
  const newsContainer = document.getElementById("news-container");
  newsContainer.innerHTML = "";

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
        <div class="card lg:card-side bg-base-100 shadow-xl my-5 lg:h-64">
          <figure>
            <img class="object-fill lg:h-64 lg:w-96" src="${postImage}" alt="Movie" />
          </figure>
        <div class="card-body">
            <h2 class="card-title">${postTitle}</h2>
            <p>${detailsPostShort}</p>
            
            <div class="flex justify-between items-center">
            <div class="flex items-center">
                <div class="author">
                    <img class="author-img" src="${authorImg}" alt="" />
                </div>
            <div class="mx-2">
                <h6 class="m-0">${authorName}</h6>
                <small class="m-0">${publishDate}</small>
            </div>
        </div>
    <h6><span class="pr-2"><i class="fa-regular fa-eye"></i></span><span>${totalView}</span></h6>
    <div class="flex pr-3">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
        <i class="fa-regular fa-star"></i>
    </div>
    
    <button class=""><i class="fa-solid fa-arrow-right"></i></button>
    
    </div>
  </div>
</div>
`;
    newsContainer.appendChild(newsContainerBody);
  });
};
