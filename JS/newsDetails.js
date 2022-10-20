//News Details Loading here ...

const loadNewsDetails = async (postId) => {
  try {
    const loadNewsDetailsData = await fetch(
      `https://openapi.programming-hero.com/api/news/${postId}`
    );
    const newsDetailsData = await loadNewsDetailsData.json();
    displayNewsData(newsDetailsData);
  } catch (err) {
    console.log(err);
  }
};

//Displaying News Details with Modal

const displayNewsData = (newsData) => {
  const getNews = newsData.data[0];
  const authorName = getNews.author.name
    ? getNews.author.name
    : "No Name Available";
  const publishDate = getNews.author.published_date
    ? getNews.author.published_date
    : "No Date Available";
  const authorPhoto = getNews.author.img
    ? getNews.author.img
    : "No Photo Available";
  const newsDetailsTitle = getNews.title ? getNews.title : "Title unavailable";
  const newsDetailsPara = getNews.details
    ? getNews.details
    : "No Data Available";
  const newsDetailsImage = getNews.image_url;
  const newsView = getNews.total_view ? getNews.total_view : "No View";

  const modalTitle = document.getElementById("ModalLabel");
  modalTitle.innerText = newsDetailsTitle;
  const modalImg = document.getElementById("news-image");
  modalImg.src = newsDetailsImage;
  const newsDetails = document.getElementById("news-details");
  newsDetails.innerText = newsDetailsPara;
  const newsAuthorImage = document.getElementById("author-img");
  newsAuthorImage.src = authorPhoto;
  const newsAuthorName = document.getElementById("author-name");
  newsAuthorName.innerText = authorName;
  const date = document.getElementById("publish-date");
  date.innerText = publishDate;
  const viewNews = document.getElementById("view-news");
  viewNews.innerText = newsView;
  spinner(false);
};
