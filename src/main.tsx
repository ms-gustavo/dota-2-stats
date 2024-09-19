import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { HeroProvider } from "./context/HeroContext.tsx";
import { ProPlayerProvider } from "./context/ProPlayerContext.tsx";
import { TeamsProvider } from "./context/TeamsContext.tsx";
import { CurrentlyOnGoingGamesProvider } from "./context/CurrentlyOnGoingGamesContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HeroProvider>
      <ProPlayerProvider>
        <TeamsProvider>
          <CurrentlyOnGoingGamesProvider>
            <App />
          </CurrentlyOnGoingGamesProvider>
        </TeamsProvider>
      </ProPlayerProvider>
    </HeroProvider>
  </StrictMode>
);
