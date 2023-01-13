import React from "react";
import { Link } from "react-router-dom";
import { FaEarlybirds } from "react-icons/fa";

export default function Nav() {
  return (
    <div>
      <nav className="flex justify-between p-4 border-b-2 border-gray-200">
        <div className="flex flex-row items-center gap-2">
          <FaEarlybirds />
          <h1 className="font-bold">Company</h1>
        </div>
        <ul className="flex gap-4">
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="test">Test</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
