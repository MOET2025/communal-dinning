import { createClient } from "@/utils/supabase/server";
import Link from 'next/link'

export default async function Page() {
  const supabase = await createClient();
  //TODO - get initial events based on current month and date (only display events from today and forward).
  //TODO - somewhere else it should be possible to get events based on future months
  const { data: events } = await supabase.from("Event").select();
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

  //TODO move this into own class to ensure only running on server
  let date = new Date();
  //lol
  const monthNames = [
    'Januar',
    'Februar',
    'Marts',
    'April',
    'Maj',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'December'
  ];

  const list = listItems.map(event => (
    <div key={event.id} className="border-t-1 border-solid p-2">
      <div className="font-semibold">{event.host}</div>
      <div className="text-sm text-gray-600">{event.date}</div>
      <div className="text-sm text-gray-600">{event.name}</div>
      <div className="text-sm text-gray-600"> <Link href='#'>Se mere</Link></div>
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

      <div className="p-2">
        <h1 className="p-2">Fællesspisninger</h1>
        <h1 className="p-2"> &#8592; {monthNames[date.getMonth()]} {date.getFullYear()}  &#8594; </h1>
        <div>
          {list}
        </div>
      </div>



    </div>
  )



}

