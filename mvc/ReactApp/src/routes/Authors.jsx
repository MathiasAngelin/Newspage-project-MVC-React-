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
          <div className="Authorlist">
          <p>{author.firstName} {author.lastName}</p>

          <Link
            to={`/Authors/${author.firstName}`}
            key={author.id}
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