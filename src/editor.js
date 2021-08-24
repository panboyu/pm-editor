import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";

import initSchema from "./schema";
import initPlugins from "./plugin";

import "prosemirror-view/style/prosemirror.css";

class Editor {
  options;
  plugins = initPlugins();
  schema = initSchema();
  view;
  constructor(options) {
    this.options = options;
    this.view = this.initView(options);
  }

  initView(options) {
    const { schema, plugins } = this;
    const editorOptions = {
      state: EditorState.create({
        schema,
        plugins,
      }),
    };
    return new EditorView(options?.root, editorOptions);
  }

  execCommand() {}

  queryCommandValue() {}
}

export default Editor;
