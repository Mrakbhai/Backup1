import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  // Add a route to serve the index.html file for SEO enhancement
  app.get('/server/index.html', (req, res) => {
    const filePath = path.join(import.meta.dirname, 'index.html');
    if (fs.existsSync(filePath)) {
      res.sendFile(filePath);
    } else {
      res.status(404).send('Not found');
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
