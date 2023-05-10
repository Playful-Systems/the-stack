import type { Headers } from "./index.js";

export const transformHeadersForMarkdown = (headers: typeof Headers) => {
  return headers.map(({ name }) => name);
};
