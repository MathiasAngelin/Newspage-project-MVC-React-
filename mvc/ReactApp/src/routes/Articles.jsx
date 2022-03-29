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
    <div className="articles">
      <nav>
        <h1>Artiklar</h1>
        <button className="button" id="createarticlebutton">Skapa</button>
        {articles.map((article) => (
          <Link
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