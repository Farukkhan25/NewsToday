//News Details Loading here ...

const loadNewsDetails = async (news_Id) => {
    const loadNewsDetailsData = await fetch(
      `https://openapi.programming-hero.com/api/news/${news_id}`
    );
    const newsDetailsData = await loadNewsDetailsData.json();
    console.log(newsDetailsData);
}
