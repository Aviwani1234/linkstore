import React, { useState } from "react";

function Main() {

    const [url, setUrl] = useState("");

    const updateURL = (e) =>{
        setUrl(e.target.value)
    }

  return (
    <div>
    <form>
      <input type="url" placeholder="Enter your link(URL)" value={url} onChange={updateURL} />
      <button onClick={updateURL} type="submit">Add</button>
    </form>

    <h1>{url}</h1>
    </div>
  );
}

export default Main;
