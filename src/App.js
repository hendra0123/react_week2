import React, { useState } from "react";
import "./App.css";
import foto from "./foto.jpg";

const App = () => {
  const [isCircular, setIsCircular] = useState(false);

  const imageStyle = {
    width: "100%",
    borderRadius: isCircular ? "50%" : "0%"
  };

  const toggleCircular = () => {
    setIsCircular(!isCircular);
  };

  const atas = React.createElement(
    "div",
    { className: "atas" },
    React.createElement(
      "div",
      { className: "bagian-kiri" },
      React.createElement(
        "div",
        { className: "foto-profile" },
        React.createElement("img", {
          src: foto,
          className: "foto-atur",
          style: imageStyle,
          alt: "foto"
        })
      )
    ),
    React.createElement(
      "div",
      { className: "bagian-kanan" },
      React.createElement(
        "div",
        { className: "nama" },
        React.createElement("h1", null, "Hendra Oktarizal Couwandy")
      )
    )
  );

  const tengahKiri = React.createElement(
    "div",
    { className: "tengah-kiri" },
    React.createElement("h2", { style: { marginLeft: "2%" } }, "Informasi Pribadi"),
    React.createElement("p", { className: "stylep" }, "Laki-laki"),
    React.createElement("p", { className: "stylep" }, "Mahasiswa")
  );

  const tengahKanan = React.createElement(
    "div",
    { className: "tengah-kanan" },
    React.createElement("p", { className: "stylep" }, "Gen 1"),
    React.createElement("p", { className: "stylep" }, "Informatika"),
    React.createElement("p", { className: "stylep" }, "Family Business"),
    React.createElement("p", { className: "stylep" }, "Main Game")
  );

  const bawah = React.createElement(
    "div",
    { className: "bawah" },
    React.createElement("h2", { style: { marginLeft: "2%" } }, "Riwayat Organisasi"),
    React.createElement(
      "p",
      { className: "stylep" },
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet quam tellus. Sed ligula sem, sodales viverra risus rhoncus, vulputate efficitur orci. Nullam feugiat vel ex vel imperdiet. Curabitur in leo sem. Duis sagittis dui sed arcu eleifend, ut varius nulla vestibulum. Mauris consequat facilisis dui. Vivamus venenatis eros vitae dui laoreet bibendum. Donec rhoncus, neque eu hendrerit rhoncus, enim turpis fermentum lorem, et feugiat neque lacus ut risus. Integer ipsum lacus, rutrum ac egestas ac, lacinia a mi. Vivamus bibendum est sem, quis finibus mauris vestibulum vitae. Vivamus pellentesque vel turpis sit amet suscipit. Morbi fringilla consequat convallis."
    ),
    React.createElement(
      "div",
      { className: "buton" },
      React.createElement("button", { onClick: toggleCircular }, "Ubah Lingkaran Foto")
    )
  );

  return React.createElement(
    "div",
    { className: "container-full" },
    atas,
    React.createElement(
      "div",
      { className: "tengah" },
      tengahKiri,
      tengahKanan
    ),
    bawah
  );
};

export default App;
