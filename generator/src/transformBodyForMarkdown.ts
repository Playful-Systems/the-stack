import type { Tools } from "./readToolsJson.js";
import type { Headers } from "./index.js";

export const transformBodyForMarkdown = (headers: typeof Headers, tools: Tools) => {
  return tools.map((tool) => {
    return headers.map((header) => {

      if (tool[header.value] === undefined) {
        return "";
      }

      if (header.type === "string") {
        return tool[header.value];
      }

      if (header.type === "link") {
        const value = tool[header.value];
        if (value === undefined) return "";
        return `[${value.title}](${value.url})`;
      }

      throw new Error(`Unknown header type: ${header}`);

    });
  });
};
