import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

interface ErrorPageProps {
  message: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ message }) => {
  return (
    <div className="error-container flex flex-col items-center justify-center h-screen text-center">
      <FaExclamationTriangle className="text-red-500 text-6xl mb-4" />
      <p className="text-xl text-lightText mb-2">{message}</p>
      <p className="text-lightText">
        Esta API pública tem limites de requisição minuto/dia que já deve ter
        sido atingida, por favor, tente novamente mais tarde.
      </p>
    </div>
  );
};

export default ErrorPage;
