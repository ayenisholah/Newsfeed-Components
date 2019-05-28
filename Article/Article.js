class Article {
  constructor(article) {
    this.article = article;
    this.expandbutton = article.querySelector('.expandButton');
    this.expandbutton.textContent = "expand";
    this.expandbutton.addEventListener('click', () => this.expandArticle());
  }

  expandArticle() {
    this.article.classList.toggle('article-open');
  }
}
let articles = document.querySelectorAll('.article');
articles.forEach(article => new Article(article));
console.log(articles);