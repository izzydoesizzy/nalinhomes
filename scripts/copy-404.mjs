import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const distDir = path.resolve("dist");
const indexPath = path.join(distDir, "index.html");
const notFoundPath = path.join(distDir, "404.html");

try {
  const html = await readFile(indexPath, "utf8");
  await writeFile(notFoundPath, html);
  console.log(`Copied ${indexPath} -> ${notFoundPath}`);
} catch (error) {
  console.error("Failed to create dist/404.html from dist/index.html.");
  console.error(error);
  process.exitCode = 1;
}
