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

function deleteAuthor(id){
  fetch(`https://localhost:7208/api/Authors/${id}`, {
    method:'DELETE'
  }).then(alert("Author deleted, please refresh page")) 
  
}

  return (
    <div className="authors">
      <nav>
      <h1>Journalister</h1>
      <button className="button" id="createauthorbutton"><Link to="/CreateAuthor">Skapa</Link></button>
        {authors.map((author) => (
          <div className="Authorlist">
          <p>{author.firstName} {author.lastName}</p>

          <Link
            to={`/Authors/${author.firstName}`}
            key={author.id}
          >
            <button className="editbutton button"><i className="fa-solid fa-pen"></i></button>
            
          </Link>
          <button className="deletebutton button" onClick={() => deleteAuthor(author.id)}><i className="fa-regular fa-trash-can"></i></button> 
          </div>

        ))}
        
      </nav>
      
    </div>
  );
}