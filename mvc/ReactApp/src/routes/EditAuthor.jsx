import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { GetAuthor } from "./Authors";

export function EditAuthor(){
 
    let params = useParams();
    let author = GetAuthor(params.AuthorId);
    
    // const [id , setId] = useState ("");
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [imageName, setauthorPic] = useState("");
    const [mail, setEmail] = useState("");
    const [twitterUserName, setTwitter] = useState("");

  

    let handleSubmit = async (e) => {
        e.preventDefault();
       
            const requestOptions ={
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: author.id,
                    firstName: firstName,
                    lastName: lastName,
                    imageName: imageName,
                    mail: mail,
                    twitterUserName: twitterUserName

                })
            }
            await fetch(`https://localhost:7208/api/Authors/${author.id}`, requestOptions)
            .then(alert("Journalist updated"))
            window.location.reload();


    };
    const [imagenames, setImageNames] = useState([]);

    useEffect(() => {
  
        axios.get('https://localhost:7208/api/images')
            .then((response) => {
                let imagenames = response.data;
                setImageNames(imagenames)
              
         
            });
    }, [])

    let select = document.getElementById("arr2");
    for (var i = 0; i < imagenames.length; i++){
        let optn2 = imagenames[i];
        let el2 = document.createElement("option");
        el2.textContent = optn2;
        el2.value = optn2;
        select.appendChild(el2)
    }
  

  return(
      <div className="createNewAuthor">
            
          <h3>Uppdatera {author.firstName} {author.lastName} nedan</h3>
          <form onSubmit={handleSubmit}>
                <label>
                    Förnamn
                    <input type="text" placeholder={author.firstName} name="firstName" value={firstName} onChange={(e) => setfirstName(e.target.value)} /> <br /> <br />
                </label>

                <label>
                    Efternamn
                    <input type="text" name="lastName"  placeholder={author.lastName} value={lastName} onChange={(e) => setlastName(e.target.value)} /> <br /> <br />
                </label>

                <label>
                    Författarbild
                    <select
                    id ="arr2"
                    name="AuthorPic"
                    value={imageName}  onChange={(e) => setauthorPic(e.target.value)} >
                       
                        </select>  <br /> <br />
                </label>

                <label>
                    E-mail
                    <input type="text" name="Email" value={mail} placeholder={author.mail} onChange={(e) => setEmail(e.target.value)} />  <br /> <br />
                </label>

                <label>
                    Twitter
                    <input type="text" name="Twitter" value={twitterUserName} placeholder={author.twitterUserName} onChange={(e) => setTwitter(e.target.value)} />  <br /> <br />
                </label>

                <input className="button" id="createAuthorbtn" type="submit" value="Spara författare" />
            </form>
        </div>

     
  )

}