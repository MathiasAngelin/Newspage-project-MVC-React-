// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

export function CreateArticle() {

        return (
            <div className="createNewArticle">
                <h1> Skriv artikel </h1>
                <form>
                    <label>
                        Titel
                        <input type="text" name="Titel" /> <br/> <br/>
                    </label>
                    <label>
                        Författare
                        <select type="dropdown" name="Author" />  <br/> <br/>
                    </label>
                    <label>
                        Artikelbild 
                        <select type="dropdown" name="Articlepic" />  <br/> <br/>
                    </label>

                    <label>
                        Ingress
                        <textarea type="text" name="Ingress" />  <br/> <br/>
                    </label>
                    <label>
                        Fäst artikel
                        <input type="checkbox" name="pinned" />  <br/> <br/>
                    </label>

                    <p>Blocks</p>
                    <label>
                        Paragraf
                        <textarea type="text" name="paragraph" />  <br/> <br/>
                    </label>

                    <label>
                        Citat
                        <textarea type="text" name="quote" />  <br/> <br/>
                    </label>

                    <label>
                        bild
                        <input type="text" name="quote" />  <br/> <br/>
                    </label>


                    <input className="button" type="submit" value="Spara" />
                </form>
            </div>
        )
}

