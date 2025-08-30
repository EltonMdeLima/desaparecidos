import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  // Estado para controlar a visibilidade do menu em telas pequenas
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      {/* Logo ou título */}
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">
            <a>Desaparecidas</a>
          </Link>
        </div>
        {/* Botão de menu para mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Links de navegação */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } lg:flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6 mt-4 lg:mt-0`}
      >
        <Link href="/">
          <a className="hover:text-gray-400">Início</a>
        </Link>
        <Link href="/sobre">
          <a className="hover:text-gray-400">Sobre</a>
        </Link>
        <Link href="/contato">
          <a className="hover:text-gray-400">Contato</a>
        </Link>
        {/* Adicione mais links conforme necessário */}
      </div>
    </nav>
  );
};

export default Navbar;
