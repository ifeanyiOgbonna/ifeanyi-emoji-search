import React, { useState, useEffect } from "react";
import emojione from "emojione";
import EmojiData from "./Emoji.json";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const newData = EmojiData.filter((emoji) =>
      emoji.name.toLowerCase().includes(search.toLocaleLowerCase())
    );
    setData(newData);
  }, [search]);

  return (
    <div>
      <center>
        <h1>Emoji Search</h1>
        <input
          type="text"
          name="search"
          placeholder="Enter Anything"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </center>
      {data.map((emoji, index) => (
        <div key={index}>
          <div className="card">
            <div className="card-detail">
            <span
            dangerouslySetInnerHTML={{
              __html: emojione.shortnameToImage(emoji.shortname),
            }}
          />
          <span>{emoji.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
