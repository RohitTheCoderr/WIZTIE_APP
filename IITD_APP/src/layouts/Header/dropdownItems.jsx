import React from "react";
import { NavLink } from "react-router-dom";

const DropdownMenu = ({ isOpen, items }) => {
    if (!isOpen) return null;
    return (
        <div className="absolute mt-2 bg-white shadow-md rounded-md z-10">
            {items.map((item, index) => (
                <NavLink
                    key={index}
                    to={item.to}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                >
                    {item.label}
                </NavLink>
            ))}
        </div>
    );
};

export default DropdownMenu;
