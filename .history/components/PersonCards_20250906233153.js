// components/PersonCard.js

import Image from 'next/image';
import Link from 'next/link';

export default function PersonCard({ person }) {
  // Verifique se a URL da imagem existe e é válida
  const imageUrl = person.photoUrl || '/path/to/placeholder.jpg';

  return (
    <Link href={`/detalhes/${person.uuid}`}>
      <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl transition-shadow">
        <Image
          src={imageUrl}
          alt={`Foto de ${person.name}`}
          width={200}
          height={200}
          className="rounded-full mx-auto"
        />
        <h2 className="text-xl font-semibold text-center mt-4">{person.name}</h2>
        <p className="text-center">Status: {person.status}</p>
      </div>
    </Link>
  );
}