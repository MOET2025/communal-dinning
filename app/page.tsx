import Image from 'next/image'
import faellesspisning from '../public/faellesspisning.png'

export default function Home() {

  return (
    <div  className='flex flex-col items-center'>
      <Image
       
        src={faellesspisning}
        width={900}
        height={900}
        alt="Picture of dinner" />

      <div className="font-mono text-2xl">
        <p>Fællesspisning</p>
      </div>

    </div>
  );
}
