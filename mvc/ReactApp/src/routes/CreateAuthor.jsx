import axios from "axios";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

export function CreateAuthor() {

    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [imageName, setauthorPic] = useState("");
    const [mail, setEmail] = useState("");
    const [twitterUserName, setTwitter] = useState("");


    let handleSubmit = async (e) => {
        e.preventDefault();
       
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName: firstName,
                    lastName: lastName,
                    imageName: imageName,
                    mail: mail,
                    twitterUserName: twitterUserName
                })
            }
            await fetch("https://localhost:7208/api/Authors", requestOptions)
            .then(alert("Journalist created, go back to journalist-page to view"))


    };
    const [imagenames, setImageNames] = useState([]);

    useEffect(() => {
  
        axios.get('https://localhost:7208/api/images')
            .then((response) => {
                let imagenames = response.data;
                setImageNames(imagenames)
              
         
            });
    }, [])

    var select = document.getElementById("arr");
    for (var i = 0; i < imagenames.length; i++){
        var optn = imagenames[i];
        var el = document.createElement("option");
        el.textContent = optn;
        el.value = optn;
        select.appendChild(el)
    }
  

    return (
        <div className="createNewAuthor">
            <h1> Skapa författare </h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Förnamn
                    <input type="text" name="firstName" value={firstName} onChange={(e) => setfirstName(e.target.value)} /> <br /> <br />
                </label>

                <label>
                    Efternamn
                    <input type="text" name="lastName" value={lastName} onChange={(e) => setlastName(e.target.value)} /> <br /> <br />
                </label>

                <label>
                    Författarbild
                    <select
                    id ="arr"
                    name="AuthorPic"
                    value={imageName} onChange={(e) => setauthorPic(e.target.value)} >
                       
                        </select>  <br /> <br />
                </label>

                <label>
                    E-mail
                    <input type="text" name="Email" value={mail} onChange={(e) => setEmail(e.target.value)} />  <br /> <br />
                </label>

                <label>
                    Twitter
                    <input type="text" name="Twitter" value={twitterUserName} onChange={(e) => setTwitter(e.target.value)} />  <br /> <br />
                </label>

                <input className="button" id="createAuthorbtn" type="submit" value="Spara" />
            </form>
        </div>
    )

}