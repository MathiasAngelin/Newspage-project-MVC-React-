import axios from "axios";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

export function Authors() {
const [authors, setAuthors] = useState([]);

useEffect(() => {
  axios.get('https://localhost:7208/api/Authors')
  .then((response) => {
    let authors = response.data;
    setAuthors(authors)
  });
}, [])


  return (
    <div className="authors">
      <nav>
      <h1>Journalister</h1>
      <button className="button" id="createauthorbutton">Skapa</button>
        {authors.map((author) => (
          
          <Link
            to={`/Authors/${author.firstName}`}
            key={author.id}
          >
            {author.firstName} {author.lastName}
          </Link>
        ))}
      </nav>
    </div>
  );
}