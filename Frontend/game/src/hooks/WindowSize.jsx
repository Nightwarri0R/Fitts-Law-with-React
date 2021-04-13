import {useEffect, useState} from 'react'
/**
 * Function that gets the window size and reeturns it.
 * @returns 
 */

function getWindowSize() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

/**
 * 
 * @returns 
 */
export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return windowSize;
}