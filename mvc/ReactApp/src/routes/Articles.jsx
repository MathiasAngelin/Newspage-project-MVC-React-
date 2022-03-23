import axios from "axios";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

export function Articles() {
const [articles, setAricles] = useState([]);

useEffect(() => {
  axios.get('https://localhost:7208/api/Articles')
  .then((response) => {
    let articles = response.data;
    setAricles(articles)
  });
}, [])


  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        
        {articles.map((article) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/Articles/${article.title}`}
            key={article.id}
          >
            {article.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}