// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

export function CreateAuthor() {

        return (
            <div className="createNewAuthor">
                <h1> Skapa författare </h1>
                <form>
                    <label>
                        Förnamn
                        <input type="text" name="firstName" /> <br/> <br/>
                    </label>

                   <label>
                        Efternamn
                        <input type="text" name="lastName" /> <br/> <br/>
                    </label>

                    <label>
                       Bild
                        <select type="dropdown" name="AuthorPic" />  <br/> <br/>
                    </label>

                    <label>
                        E-mail
                        <input type="text" name="Email" />  <br/> <br/>
                    </label>

                    <label>
                        Twitter
                        <input type="text" name="Twitter" />  <br/> <br/>
                    </label>
                    
                    <input className="button" type="submit" value="Spara" />
                </form>
            </div>
        )
   
}