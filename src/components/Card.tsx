import React from "react";
import { CardProps } from "../types/interfaces";

const Card: React.FC<CardProps> = ({ title, children, className = "" }) => {
  return (
    <div
      className={`bg-darkGray border border-gold rounded-lg p-6 shadow-lg ${className}`}
    >
      <h2 className="hidden lg:block text-2xl font-cinzel text-gold mb-4 border-b border-gold pb-2">
        {title}
      </h2>
      <div>{children}</div>
    </div>
  );
};

export default Card;
