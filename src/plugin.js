import { baseKeymap } from "prosemirror-commands";
import { keymap } from "prosemirror-keymap";

import placeholder from "./modules/editor/plugins/placeholder";

const initPlugins = () => {
  return [keymap(baseKeymap), placeholder()];
};

export default initPlugins;
