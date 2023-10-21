import { useState } from 'react';


function getGeolocation() {
  
}

export default function App() {
  const [ isLoading, setIsLoading ] = useState( false );
  const [ countCicks, setCountClicks ] = useState( 0 );
  const [ position, setPosition ] = useState( {} );
  const [ error, setError ] = useState( null );
  
  const { lat, lng } = position;
  
  
  return (
      <div>
        <div>
          <button
              disabled={ isLoading }
          >Get my position
          </button>
          
          { isLoading && <p>Loading position... </p> }
          { error && <p>(error) </p> }
          { isLoading && !error && lat && lng && (
              <p>
                Your GPS position:{ ' ' }
                <a
                    target='_blank'
                    rel='noreferrer'
                    href={ `https://www.openstreetmap.org/#map=16/${ lat }/${ lng }` }
                >
                  { lat }, { lng }
                </a>
              </p> ) }
          
          <p>You requested position { countCicks } times</p>
        </div>
      </div> );
}
