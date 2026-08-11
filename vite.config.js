import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("workbookData.js")) return "workbook-data";
          if (id.includes("meetingData.js")) return "meeting-data";
          if (id.includes("node_modules")) return "vendor";
          return undefined;
        },
      },
    },
  },
});
