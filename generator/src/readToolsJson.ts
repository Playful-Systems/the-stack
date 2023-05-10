import fs from "fs/promises"
import { z } from "zod"

const link = z.object({
  title: z.string(),
  url: z.string().url(),
})

const schema = z.array(
  z.object({
    name: z.string(),
    docs: link,
    intro: link,
    tutorial: link,
  })
)

export const readToolsJson = async (filePath = "../tools.json") => {
  const fileString = await fs.readFile(filePath, "utf-8");
  return schema.parse(JSON.parse(fileString));
}

export type Tools = Awaited<ReturnType<typeof readToolsJson>>