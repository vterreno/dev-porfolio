// app/api/projects/route.ts
import fs from "fs/promises";
import path from "path";

export async function GET() {
  // Construye la ruta completa al archivo data.json
  const filePath = path.join(process.cwd(), "public", "data.json");
  const fileContents = await fs.readFile(filePath, "utf-8");
  const projects = JSON.parse(fileContents);

  return new Response(JSON.stringify(projects), {
    headers: { "Content-Type": "application/json" },
  });
}
