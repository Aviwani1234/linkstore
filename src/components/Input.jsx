import React, { useState } from "react";
import "./Input.css"


function Input() {
  const [data, setData] = useState({
    name: "",
    url: "",
  });

  const [showAnchor, setShowAnchor] = useState(false);

  function handleChange(event) {
    const inputData = event.target.value;
    const inputName = event.target.name;

    setData((prevValue) => {
      if (inputName === "url") {
        return {
          url: inputData,
          name: prevValue.name,
        };
      } else if (inputName === "name") {
        return {
          url: prevValue.url,
          name: inputData,
        };
      }
    });
  }

  function handleSubmit(event) {
    setShowAnchor(true);
    event.preventDefault();
  }

  return (
    <div className="ipt">
      <form className="create-url" onSubmit={handleSubmit}>
        <input
          placeholder="Enter your URL"
          type="url"
          onChange={handleChange}
          value={data.url}
          name="url"
        />
        <input
          placeholder="Enter your URL name"
          type="text"
          onChange={handleChange}
          value={data.name}
          name="name"
        />
        <button type="submit">Add</button>
      </form>

      {showAnchor && <a href={data.url}>{data.name}</a>}

    </div>
  );
}

export default Input;

// 1. display link after submit --- done
// 2. convert it into <a></a> tag --- done
//       2.a onsubmit add link --- done
//       2.b give one more fild to add name of link  --- done
//       2.c add style --- done
// 3. make array of anchor tag
// 4. display array of anchor tag
//       4.a add style
// 5. host on vercel/netlify
