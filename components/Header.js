import React from 'react';
import Link from 'next/link';  // Importação do Link para navegação no Next.js

const Header = () => {
  return (
    <header className="bg-blue-500 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo ou Título */}
        <div className="text-white font-bold text-2xl">
          <Link href="/">
            <a>Desaparecidas</a>
          </Link>
        </div>

        {/* Navegação */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                <a className="text-white hover:text-gray-200">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="text-white hover:text-gray-200">Sobre</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="text-white hover:text-gray-200">Contato</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
