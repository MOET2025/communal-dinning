import Image from 'next/image'
import Link from 'next/link'
import faellesspisning from '../public/faellesspisning.png'

export default function Home() {

  return (
    <div  className='flex flex-col items-center max-w-4xl mx-auto'>
      <nav className='navbar p-4 w-full'>
        <div className='container mx-auto flex justify-between item-center'>
          <div className='block'>
            <Link href='/events' className='mr-4'>
              Forside
            </Link>
            <Link href='/' className='mr-4'>
              Om Fællesspisning
            </Link>
          </div>
        </div>
      </nav>

      <Image
        src={faellesspisning}
        width={900}
        height={900}
        alt="Picture of dinner" />

      <div className="font-mono text-2xl">
        <p>Fællesspisning</p>
      </div>

      <div>
        <p>
          Velkommen til Fællesspisning. Den her hjemmeside har til formål at give alle de dejlige mennesker i Aarhus et overblik over alle de nice, hyggelige og fede fællesspisninger i byen.
          Se overblikket på Forsiden.
        </p>

        <h2>Om os</h2>
        <p>
          Hvem er bag hjemmesiden? Vi hedder Lucas, Alfred og Mathilde, og vi elsker fællesspisninger, og synes det er et nice koncept, der gør spisning billigt og socialt, to ting der bare er maks nice. Vi vil gerne gøre fællesspisninger mere tilgængeligt ved at skabe et samlet overblik for gamle som unge, og samtidig tilbyde en platform for arrangører der gør at de nemmere kan skabe opmærksomhed omkring deres events. 
        </p>

        <h2>Retningslinjer</h2>
        <p>
          Vi har nogle retningslinjer:
          Absolut ingen diskrimination 
          Events skal være gratis, donations-baserede, eller have transparent pris.
        </p>
      </div>

    </div>
  );
}
