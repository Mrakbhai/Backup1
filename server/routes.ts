import express, { type Express } from "express";
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

  // Serve static files
  app.use(express.static(path.join(import.meta.dirname, '../dist/public')));

  // Handle client-side routing
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) {
      return next();
    }
    res.sendFile(path.join(import.meta.dirname, '../dist/public/index.html'));
  });

  const httpServer = createServer(app);

  return httpServer;
}
