import axios from "axios";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

export function CreateArticle() {

   
    /*--------------AUTHOR--------------*/
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        axios.get('https://localhost:7208/api/Authors')
            .then((response) => {
                let authors = response.data;
                setAuthors(authors)
            });
    }, [])

    var select2 = document.getElementById("arr4");
    for (let i = 0; i < authors.length; i++) {
        let optn4 = authors[i];
        let el4 = document.createElement("option");
        el4.textContent = optn4.id;
        el4.value = optn4;
        select2.appendChild(el4)
    }

     /*--------------END AUTHOR--------------*/

     /*--------------IMAGE--------------*/
    const [imagenames, setImageNames] = useState([]);

    /*#region image*/
    const [imageName, setArticlePic] = useState("");
    useEffect(() => {

        axios.get('https://localhost:7208/api/images')
            .then((response) => {
                let imagenames = response.data;
                setImageNames(imagenames)


            });
    }, [])

    var select = document.getElementById("arr3");
    for (let i = 0; i < imagenames.length; i++) {
        let optn3 = imagenames[i];
        let el3 = document.createElement("option");
        el3.textContent = optn3;
        el3.value = optn3;
        select.appendChild(el3)
    }
    /*--------------END IMAGE--------------*/


    return (
        <div className="createNewAuthor">
            <h1> Skriv artikel </h1>
            <form>
                <label>
                    Titel
                    <input type="text" name="Titel" /> <br /> <br />
                </label>
                <label>
                    Författare
                    <select
                        id="arr4"
                        name="AuthorChoice"
                        value={authors} onChange={(e) => setArticlePic(e.target.value)} />


                </label>
                <label>
                    Artikelbild
                    <select
                        id="arr3"
                        name="ArticlePic"
                        value={imageName} onChange={(e) => setArticlePic(e.target.value)} />
                </label>

                <label>
                    Ingress
                    <textarea type="text" name="Ingress" />  <br /> <br />
                </label>
                <label>
                    Fäst artikel
                    <input id="pinned" type="checkbox" name="pinned" />  <br /> <br />
                </label>

                <h3 id="blocks">Blocks</h3>
                <label>
                    Paragraf
                    <textarea type="text" name="paragraph" />  <br /> <br />
                </label>

                <label>
                    Citat
                    <textarea type="text" name="quote" />  <br /> <br />
                </label>

                <label>
                    Bild
                    <input type="text" name="quote" />  <br /> <br />
                </label>


                <input className="button" type="submit" value="Spara" />
            </form>
        </div>
    )
}

