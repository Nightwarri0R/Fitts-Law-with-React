import {useEffect, useState} from 'react'
/**
 * Get function that retrun the window size on load of the page.
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
 * Based on the window size it used for resizing the grid
 * @returns 
 */
export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.resizeTo('resize', handleResize);
  }, []);


  return windowSize;
}