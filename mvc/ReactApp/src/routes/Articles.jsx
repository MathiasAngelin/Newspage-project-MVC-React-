import { Link } from "react-router-dom";

function getArticles() {
  fetch('https://localhost:7208/api/Articles')
  .then((res) =>  res.json())
  .then(output => {
      let articles = output;
      console.log(articles)
  return articles;
})
}

export default function Articles() {
  let articles = getArticles();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        
        {articles?.map((article) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/articles/${article.title}`}
            key={article.title}
          >
            {article.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}