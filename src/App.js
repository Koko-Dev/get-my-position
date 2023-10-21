import { useState } from 'react';


function getGeolocation() {
  
}

export default function App() {
  const [ isLoading, setIsLoading ] = useState( false );
  const [ countCicks, setCountClicks ] = useState( 0 );
  const [ position, setPosition ] = useState( {} );
  const [ error, setError ] = useState( null );
  
  const { lat, lng } = position;
  
  function getPosition() {
    setCountClicks( ( count ) => count + 1 );
    if ( !navigator.geolocation ) return setError( 'Your browser dow not support geolocation' );
    
    setIsLoading( true );
    
    navigator.geolocation.getCurrentPosition( ( pos ) => {
      setPosition( {lat: pos.coords.latitude, lng: pos.coords.longitude} );
      setIsLoading( false );
      },
                                              ( error ) => {
      setError( error.message );
      setIsLoading( false );
    } );
    
    /*
    
      function success( pos ) {
         setPosition( { lat: pos.coords.latitude, lng: pos.coords.longitude } );
         setIsLoading( false );
       }
     
     function error( err ) {
       setError( err.message );
       setIsLoading( false );
     }
     
     navigator.geolocation.getCurrentPosition( success, error );
     
     */
    
  }
  
  return (
      <div>
        <button onClick={ getPosition } disabled={ isLoading }>
          Get my position
        </button>
        
        { isLoading && <p>Loading position...</p> }
        { error && <p>{ error }</p> }
        { !isLoading && !error && lat && lng && (
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
      </div> );
}
