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
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        
        {authors.map((author) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
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