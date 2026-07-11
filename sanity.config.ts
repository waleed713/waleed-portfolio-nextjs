"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schema } from "./sanity/schemas";
import { apiVersion, dataset, projectId } from "./lib/sanity/env";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool(),
    // Vision lets you run GROQ queries live inside the Studio — handy for debugging.
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
