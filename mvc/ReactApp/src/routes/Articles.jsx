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
          
           <div className="Articlelist">
            <p> {article.title}</p>
          <Link
            to={`/Articles/${article.title}`}
            key={article.id}
          >
           <button className="editbutton"><i className="fa-solid fa-pen"></i></button>
            
            </Link>
            <button className="deletebutton"><i className="fa-regular fa-trash-can"></i></button> 
            </div>
          
        ))}
      </nav>
    </div>
  );
}