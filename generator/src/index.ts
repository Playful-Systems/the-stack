import { markdownTable } from "markdown-table";
import { readToolsJson } from "./readToolsJson.js";
import { transformBodyForMarkdown } from "./transformBodyForMarkdown.js";
import { transformHeadersForMarkdown } from "./transformHeadersForMarkdown.js";
import fs from "fs/promises"

export const Headers = [
  {
    name: "Name",
    value: "name",
    type: "string",
  },
  {
    name: "Docs",
    value: "docs",
    type: "link",
  },
  {
    name: "Intro",
    value: "intro",
    type: "link",
  },
  {
    name: "Tutorial",
    value: "tutorial",
    type: "link",
  }
] as const 

const main = async () => {

  const tools = await readToolsJson("../tools.json");
  const headers = transformHeadersForMarkdown(Headers)
  const body = transformBodyForMarkdown(Headers, tools)
  const content = [headers, ...body]
  const markdown = markdownTable(content)

  await fs.writeFile("../README.md", `# The-Stack
2023 modern web development tech stack
${markdown}`)

};

main()

