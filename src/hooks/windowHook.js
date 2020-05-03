import { useState, useEffect } from 'react';
import debouce from 'lodash.debounce';

export function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    let handleResize = () => setWidth(window.innerWidth);
    handleResize = debouce(handleResize, 300);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return width;
}

export function useWindowHeight() {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    let handleResize = () => setHeight(window.innerHeight);
    handleResize = debouce(handleResize, 300);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return height;
}
