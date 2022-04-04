export default function Images() {
  return (
    <div className="images">
      <h1>Bilder</h1>
      <button className="button" id="createimagebutton">Skapa</button>
      
      <div id="imgRow1">
      <label >
        Label Name 
        <input type="file" name="name" />
      </label>
      <button className="button" id="searchImg">Bläddra</button>
      </div>

      <button className="button" id="uploadImg">Ladda upp</button>

    </div>
  );
}