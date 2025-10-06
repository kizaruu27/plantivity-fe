import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { HeadProvider, Meta, Title } from "react-head";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HeadProvider>
      <Title>Plantivity - Grow Your Productivity</Title>
      <Meta
        name="description"
        content="Plantivity is a cozy productivity app that helps you organize tasks, stay focused, and grow good habits in a calm, nature-inspired space."
      />
      <Meta property="og:title" content="Plantivity – Grow Your Productivity" />
      <Meta
        property="og:description"
        content="Stay productive in a peaceful, nature-inspired world. Organize tasks and grow good habits with Plantivity."
      />
      <Meta
        name="keywords"
        content="Plantivity, productivity app, pixel art, task manager, focus, cozy, habit tracker, nature inspired"
      />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HeadProvider>
  </StrictMode>
);
