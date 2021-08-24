import { useEffect, useRef } from "react";

import Editor from "./editor";
import Toolbar from "./components/Toolbar";
import "./App.scss";

const App = () => {
  const editorRef = useRef();
  useEffect(() => {
    window.view = new Editor({ root: editorRef.current });
  }, []);
  return (
    <div className="App">
      <Toolbar></Toolbar>
      <div id="editor" ref={editorRef}></div>
    </div>
  );
};

export default App;
