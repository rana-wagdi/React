import React from "react";
import ReactDom from "react-dom";
import Header from './component/Header';
import Note from './component/Note';
import Footer from './component/Footer';

ReactDom.render(
  <div>
    <Header />
    <Note />
    <Footer />
  </div>,

  document.getElementById("root")
);
