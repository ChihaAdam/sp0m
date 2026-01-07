import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const loadJson = (dir) => {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  let result = {};
  files.forEach((dirent) => {
    const fullPath = path.join(dir, dirent.name);
    if (dirent.isDirectory()) {
      // Recursive merge for subdirectories? Or just ignore/specific handling?
      // Our structure is depth 1 for schemas, depth 2 for paths (category/file)
      const subResult = loadJson(fullPath);
      result = { ...result, ...subResult };
    } else if (dirent.name.endsWith(".json")) {
      const content = JSON.parse(fs.readFileSync(fullPath, "utf8"));
      if (dir.includes("schemas")) {
        const name = path.basename(dirent.name, ".json");
        result[name] = content;
      } else {
        // For paths, content is { "/path": { ... } }
        result = { ...result, ...content };
      }
    }
  });
  return result;
};

const baseDoc = {
  openapi: "3.0.0",
  info: {
    title: "Sp0m API",
    version: "1.0.0",
    description:
      "Full API documentation for the Sp0m phishing platform backend.",
  },
  servers: [
    {
      url: "http://localhost:3000/api/v1",
      description: "Local Development Server",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
        description: "Enter your access token",
      },
      cookieAuth: {
        type: "apiKey",
        in: "cookie",
        name: "refreshToken",
      },
    },
    schemas: {},
  },
  paths: {},
};

export const swaggerDocs = () => {
  // Load Schemas
  const schemas = loadJson(path.join(__dirname, "schemas"));
  baseDoc.components.schemas = schemas;

  // Load Paths
  const paths = loadJson(path.join(__dirname, "paths"));
  baseDoc.paths = paths;

  return baseDoc;
};
