import React from "react";
import Entry from "./Entry"
import emojipedia from "../emojipedia";


function crateEmoji(emoj){
  return <Entry emoji={emoj.emoji} name={emoj.name} mean={emoj.meaning} />;
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      {emojipedia.map(crateEmoji)}
</div>
        );
}

export default App;
