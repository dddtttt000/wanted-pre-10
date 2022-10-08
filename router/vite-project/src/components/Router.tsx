import React, { useEffect, useState } from "react";
import "../App.css";

const Router = ({ children }) => {
  const [pathName, setPathName] = useState("");

  // path name 에 맞는 컴포넌트를 보여준다.
  const curComponent = children.filter((el: any) => el.props.path === pathName);

  const path = window.location.pathname;
  useEffect(() => {
    setPathName(path);
  }, [pathName]);

  const push = () => {
    if (path === "/") {
      window.history.pushState("about", "about", "/about");
      setPathName("/about");
    } else {
      window.history.pushState("/", "/", "/");
      setPathName("/");
    }
  };
  return (
    <div className="App">
      {curComponent}
      <div className="card">
        <button onClick={() => push()}>
          {pathName === "/" ? "about" : "go main"}
        </button>
      </div>
    </div>
  );
};

export default Router;
