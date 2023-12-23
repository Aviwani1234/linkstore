import React, { useState } from "react";

function Input() {
  const [url, setUrl] = useState("");
  var [link, setLink] = useState("");

  function changeURL(event) {
    setUrl(event.target.value);
  }

  function handleSubmit(event) {
    setLink(url);
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter your URL"
          type="url"
          onChange={changeURL}
          value={url}
        />
        <button type="submit">Add</button>
      </form>
      <a href={link}>link</a>
    </div>
  );
}

export default Input;

// 1. display link after submit --- done
// 2. convert it into <a></a> tag --- done
//       2.a onsubmit add link
//       2.b give one more fild to add name of link
//       2.c add style
// 3. make array of anchor tag
// 4. display array of anchor tag
//       4.a add style
// 5. host on vercel/netlify
