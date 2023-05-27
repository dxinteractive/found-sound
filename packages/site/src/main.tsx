import React from "react";
import ReactDOM from "react-dom/client";
import { FileLoader } from "found-sound-file-loader";

import "./css/base.css";
import "./main.css";
import classes from "./main.module.css";

const fileLoader = new FileLoader();

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

function Main() {
  const handleClick = async () => {
    await fileLoader.selectDirectory();
  };

  return (
    <div className={classes.main} onClick={handleClick}>
      <ListHeader>found-sound</ListHeader>
    </div>
  );
}

type ListHeaderProps = {
  children: React.ReactNode;
};

function ListHeader(props: ListHeaderProps) {
  return (
    <header className={classes.listHeader}>
      <div className={classes.listHeaderTitle}>{props.children}</div>
    </header>
  );
}
