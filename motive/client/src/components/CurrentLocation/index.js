import React, { useEffect } from 'react';

export const CurrentLocation = () => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords);
    });
  }, []);
  return;
};
