import { useState } from 'react';


export default function App() {
  const [ isLoading, setIsLoading ] = useState( false );
  const [ countCicks, setCountClicks ] = useState( 0 );
  const [ position, setPosition ] = useState( {} );
  const [ error, setError ] = useState( null );
  
  return (
      <div>
        <h1>App</h1>
      </div> );
}
