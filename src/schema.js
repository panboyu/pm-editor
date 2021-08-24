import { Schema } from "prosemirror-model";

import * as editor from "./modules/editor/schema";
import * as textformat from "./modules/textformat/schema";

const initSchema = () => {
  return new Schema({
    nodes: {
      ...editor.nodes,
    },
    marks: {
      ...textformat.marks,
    },
  });
};

export default initSchema;
