import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { CollapsibleContainerProps } from "../types/interfaces";

const CollapsibleContainer: React.FC<CollapsibleContainerProps> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="lg:hidden border rounded-lg shadow-lg mb-4">
        <div
          className="bg-darkGray border-gold p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
          onClick={toggleOpen}
        >
          <h2 className="text-lg font-semibold">{title}</h2>
          {isOpen ? <FiMinus /> : <FiPlus />}
        </div>
        {isOpen && <div className="p-4">{children}</div>}
      </div>
      <div className="hidden lg:block">
        <div className="p-4">{children}</div>
      </div>
    </>
  );
};

export default CollapsibleContainer;
