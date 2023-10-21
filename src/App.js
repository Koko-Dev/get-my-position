import { useState } from 'react';
import { useGeolocation } from './useGeolocation';

export default function App() {
  const {
    isLoading, position: { lat, lng }, error, getPosition
  } = useGeolocation();
  
  const [ countClicks, setCountClicks ] = useState( 0 );
  
  /*
  function getPosition() {
    setCountClicks( ( count ) => count + 1 );
    if ( !navigator.geolocation ) return setError( 'Your browser does not support geolocation' );
    
    setIsLoading( true );
    
    navigator.geolocation.getCurrentPosition( ( pos ) => {
      setPosition( { lat: pos.coords.latitude, lng: pos.coords.longitude } );
      setIsLoading( false );
    }, ( error ) => {
      setError( error.message );
      setIsLoading( false );
    } );
    
    /!*  Note:  By the book
     function success( pos ) {
     setPosition( { lat: pos.coords.latitude, lng: pos.coords.longitude } );
     setIsLoading( false );
     }
     
     function error( err ) {
     setError( err.message );
     setIsLoading( false );
     }
     
     navigator.geolocation.getCurrentPosition( success, error );
     *!/
  }
   */
  
  function handleClick() {
    setCountClicks( ( prevState ) => prevState + 1 );
    getPosition();
  }
  
  return (
      <div>
        <button onClick={ handleClick } disabled={ isLoading }>
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
        
        <p>You requested position { countClicks } times</p>
      </div> );
}
