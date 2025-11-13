import { createClient } from "@/utils/supabase/server";
import Link from 'next/link'

export default async function Page() {
  const supabase = await createClient();
  const { data: events } = await supabase.from("Event").select();
  //somehow get events based on the date
  let listItems: { id: any; date: any; host: string; name: string; }[] = [];

  events?.forEach(event => {
    listItems.push(
      {
        id: event.id,
        date: event.event_date,
        host: event.event_host,
        name: event.event_name
      }
    );
  });

  const list = listItems.map(event => (
    <div key={event.id} className="p-2">
      <div className="font-semibold">{event.name}</div>
      <div className="text-sm text-gray-600">Arrangør: {event.host}</div>
      <div className="text-sm text-gray-600">Dato: {event.date}</div>
    </div>
  ));

  return (
    <div className='flex flex-col items-center max-w-4xl mx-auto'>
      <nav className='navbar p-4 w-full'>
        <div className='container mx-auto flex justify-between item-center'>
          <div className='block'>
            <Link href='/' className='mr-4'>
              Forside
            </Link>
            <Link href='/events' className='mr-4'>
              Begivenhedsoversigt
            </Link>
          </div>
        </div>
      </nav>

      <div>
        {list}
      </div>


    </div>
  )



}

