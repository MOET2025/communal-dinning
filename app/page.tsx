  const dinners = [{
    id: 0,
    host: 'UKH',
    event: 'Fællesspisning',
    date: '07-11-2025', //TODO turn into unix time
  },
  {
    id: 1,
    host: 'De Syv Munde',
    event: 'Fællesspisning',
    date: '10-11-2025',
  },
  {
    id: 2,
    host: 'FLOR',
    event: 'Fællesspisning',
    date: '20-11-2025',
  },
  {
    id: 3,
    host: 'UngK',
    event: 'Fællesspisning',
    date: '10-11-2025',
  }];

export default function Home() {
  const listItems = dinners.map(dinner => <li key={dinner.id}> {dinner.host} </li>);

  return (
    <div>
      <h2>Fællesspisning</h2>

      <ul>
        {listItems}
      </ul>
      
    </div>
  );
}
