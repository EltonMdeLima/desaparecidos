// components/Footer.js

import Link from 'next/link'; // Para navegação entre páginas no Next.js

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Desaparecidos. Todos os direitos reservados.</p>

        <div className="mt-2">
          <Link href="/sobre">
            <a className="text-gray-400 hover:text-white mx-2">Sobre</a>
          </Link>
          <Link href="/contato">
            <a className="text-gray-400 hover:text-white mx-2">Contato</a>
          </Link>
          <Link href="/privacidade">
            <a className="text-gray-400 hover:text-white mx-2">Política de Privacidade</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
