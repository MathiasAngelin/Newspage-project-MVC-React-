import React from 'react';
import axios from 'axios';

export default function Images() {

    const [selectedFile, setSelectedFile] = React.useState(null);
  
    const handleSubmit = (event) => {
      event.preventDefault()
      const formData = new FormData();
      formData.append("selectedFile", selectedFile);
      try {
         axios({
          method: "post",
          url: "https://localhost:7208/api/images",
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        }).then(addmessage);
      } catch(error) {
        console.log(error)
      }
    }
  
    function addmessage() {

      let ptag = document.createElement("p");
      let successMessage = document.createTextNode("Uppladdning lyckades");
      ptag.appendChild(successMessage);
      ptag.setAttribute("id", "displayMessage")
      let element = document.getElementById("Messageshow");
      element.appendChild(ptag);
      setTimeout(hideElement, 3000)

    }

  function hideElement() {
    let ptag = document.getElementById("displayMessage")
    ptag.style.display = 'none'
  }
    const handleFileSelect = (event) => {
      setSelectedFile(event.target.files[0])
    }
  
    return (
      <div className="images">
          <h1>Bilder</h1>
          <button className="button" id="createimagebutton">Skapa</button>
          <div id="Messageshow"></div>
        <form onSubmit={handleSubmit}>
        <label for="chosefile">
        Label Name 
        <input type="file" name="chosefile" onChange={handleFileSelect}/>
         </label>
        <input className="button" type="submit" id="uploadImg" value="Ladda upp" />
      </form>
      </div>
    )
  };

