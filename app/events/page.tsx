import { createClient } from "@/utils/supabase/server";
import Link from 'next/link'

export async function getData() {
  const supabase = await createClient();
  const {data: events} = await supabase.from("Event").select();
  
  return events;
}

export async function Events() {
  const data = await getData();

  if(data !== null) {
    //display data in list!!!!!!
    if(data.length > 0) {
      return (
        <p></p>

      )
    }

  } else {
    return <p>no events yet!</p>
  }
}

export default function Page() {
  Events();
  return (
          <nav className='navbar p-4'>
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
  )
}

