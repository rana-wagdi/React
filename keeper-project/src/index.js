import React from "react";
import ReactDom from "react-dom";
import Header from './component/Header';
import Note from './component/Note';
import Footer from './component/Footer';
import notes from './notes';



ReactDom.render(
  <div>
    <Header />
    {notes.map((noteItem) => (
      <Note title={noteItem.title} content={noteItem.content} />
    ))}
    <Footer />
  </div>,

  document.getElementById("root")
);
