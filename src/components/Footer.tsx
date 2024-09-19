import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-4 bg-darkGray text-center text-lightText">
      <p>
        Todos os dados exibidos nesta aplicação são obtidos da API pública do{" "}
        <a
          href="https://docs.opendota.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          OpenDota
        </a>
        .
      </p>
      <p>Esta aplicação não é afiliada com a Valve Corporation ou Dota 2.</p>
    </footer>
  );
};

export default Footer;
