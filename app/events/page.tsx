import { createClient } from "@/utils/supabase/server";

export async function getData() {
  const supabase = await createClient();
  const {data: events} = await supabase.from("Event").select();
  
  return events;
}

export default async function Events() {
  const data = await getData();

  if(data !== null) {
    //display data in list!!!!!!
    if(data.length > 0) {
      return (
        <div key={data.id}>
          <h2> event host: {data.event_host}</h2>
          <h2> event name: {data.event_name}</h2>
          <h2> date: {data.event_date}</h2>
        </div>

        
      )
    }

  } else {
    return <p>no events yet!</p>
  }
}

