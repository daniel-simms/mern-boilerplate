import React from "react";

const Header = ({ title }) => {
  return (
    <header class="bg-white shadow">
      <div class="container mx-auto py-6">
        <h1 class="text-3xl font-bold leading-tight text-gray-900">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
