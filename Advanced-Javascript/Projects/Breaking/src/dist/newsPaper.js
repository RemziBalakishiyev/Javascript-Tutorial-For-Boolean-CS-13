const API_KEY_1 = "5ff34cba1f4f4f66a6322ee8be3bff7f";
const API_KEY_2 = "23873cd65c074a5a894af05cc5deaf2a";
const BASE_URL = "https://newsapi.org/v2/";
const newsCardBody = document.getElementById("dailyCard");
const viewMore = document.getElementById("viewMore");
const trendinNews = document.getElementById("trendingNews");
let currentContent = "sports";
const getNews = async function (isTrend = false, query = "IT", page, pageSize) {
  try {
    const request = await fetch(
      `${BASE_URL}${
        isTrend ? "top-headlines" : "everything"
      }?q=${query}&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY_2}`
    );
    const response = await request.json();
    const { articles } = response;

    if (isTrend) {
      const [trending] = articles;
      return trending;
    }
    return articles;
  } catch (error) {
    throw Error(error.message);
  }
};

const displayNews = function (...articles) {
  articles.forEach((article) => {
    let { urlToImage, title, description, author, publishedAt } = article;

    let newsHtml = `<div class="news--card">
                        <div class="card--head">
                            <img src="${urlToImage}" alt="">
                        </div>
                        <div class="card--body" id="cardBody">
                            <h4>
                                ${title}
                            </h4>
                            <p>
                                ${description}
                            </p>
                            </div>
                        <div class="card--author">
                            ${author} | ${publishedAt}
                        </div>
                    </div>`;
    newsCardBody.insertAdjacentHTML("beforeend", newsHtml);
  });
};

const displayTrendingNews = function ({
  urlToImage,
  title,
  description,
  author,
  publishedAt,
}) {
  let trendHtml = ` <img src="${urlToImage}" alt="">

                        <div class="header--content">
                            <div class="trending--icons">
                                <span>Trending</span>
                            </div>
                            <h3 class="title">
                                ${title}
                            </h3>
                            <p class="description">
                                ${description}
                            </p>
                            <div class="author">
                               ${author} | ${publishedAt}
                            </div>
                    </div>`;
  trendinNews.innerHTML = trendHtml;
};

const getAllNews = (query, page, pageSize) => {
  getNews(false, query, page, pageSize)
    .then((articles) => displayNews(...articles))
    .catch((errorMessage) => console.error(errorMessage));

  getNews(true, query, 1, 1)
    .then((article) => displayTrendingNews(article))
    .catch((errorMessage) => console.error(errorMessage));
};

let pageSize = 10;
viewMore.addEventListener("click", function () {
  if (pageSize !== 100) {
    pageSize += 10;
  }
  getAllNews(currentContent, 1, pageSize);
});

if ((pageSize = 10)) {
  getAllNews(currentContent, 1, pageSize);
}

document.querySelector(".menu--list").addEventListener("click", function (e) {
  e.preventDefault();
  console.log();
  if (e.target.classList.contains("menu-item")) {
    currentContent = e.target.innerHTML;
    newsCardBody.innerHTML = "";
    getAllNews(currentContent.toLowerCase(), 1, pageSize);
  }
});

document
  .querySelector(".news--daily--header")
  .addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("daily-item")) {
      currentContent = e.target.innerHTML;
      newsCardBody.innerHTML = "";
      getAllNews(currentContent.toLowerCase(), 1, pageSize);
      Array.from(e.target.parentElement.parentElement.children).forEach(
        (li) => {
          if (li.classList.contains("active")) {
            li.classList.remove("active");
          }
        }
      );
      e.target.parentElement.classList.add("active");
    }
  });
