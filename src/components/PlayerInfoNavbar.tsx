import React from "react";

const PlayerInfoNavbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-darkGray text-lightText shadow-lg z-50">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:text-gold">
              Home
            </a>
          </li>
          <li>
            <a href="#playerInfoCard" className="hover:text-gold">
              Informações do Jogador
            </a>
          </li>
          <li>
            <a href="#recentMatches" className="hover:text-gold">
              Jogos Recentes
            </a>
          </li>
          <li>
            <a href="#heroStats" className="hover:text-gold">
              Estatísticas dos Heróis
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default PlayerInfoNavbar;
