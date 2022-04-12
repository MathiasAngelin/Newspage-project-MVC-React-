
import { useParams } from "react-router-dom"
import { GetAuthor } from "./Authors";

export function EditAuthor(){
 
    let params = useParams();
    let author = GetAuthor(params.AuthorId);
    

  return(
      <div>

          <h1>EDIT BELOW!</h1>

          <p>FirstName: {author.firstName}</p>
          <p>Lastname: {author.lastName}</p>
          <p>ImageName: {author.imageName}</p>
          <p>Mail: {author.mail}</p>
          <p>Twitter: {author.twitterUserName}</p>

      </div>
  )

}