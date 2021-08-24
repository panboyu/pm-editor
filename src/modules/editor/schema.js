export const nodes = {
  doc: {
    content: "block+",
  },

  p: {
    content: "inline*",
    group: "block",
    toDOM() {
      return ["p", { style: "min-height: 20px" }, 0];
    },
  },

  text: {
    group: "inline",
    toDOM(node) {
      return node.text.replace(/ {2}/g, "\xa0 ");
    },
  },
};
