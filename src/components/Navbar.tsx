import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-darkGray text-lightText shadow-lg z-50">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <a href="#currentlyOngoingGames" className="hover:text-gold">
              Games ao vivo
            </a>
          </li>
          <li>
            <a href="#proPlayers" className="hover:text-gold">
              Pro Players
            </a>
          </li>
          <li>
            <a href="#teams" className="hover:text-gold">
              Pro Times
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

export default Navbar;
