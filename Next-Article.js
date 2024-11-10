function getArticleGenerator(articles) {
  let index = 0;
  return function () {
    if (index < articles.length) {
      // Create a new article element
      const articleElement = document.createElement("article");
      articleElement.innerText = articles[index];

      // Append the article element to the content div
      document.getElementById("content").appendChild(articleElement);

      // Move to the next article
      index++;
    }
  };
}
