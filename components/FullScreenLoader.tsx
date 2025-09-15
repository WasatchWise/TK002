
import React from 'react';
import LoadingSpinner from './LoadingSpinner';

const FullScreenLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center" style={{height: 'calc(100vh - 150px)'}}>
        <div>
            <img src="./assets/slctrips-logo.png" alt="Loading SLCTrips" className="h-16 w-auto mx-auto mb-4 animate-pulse" />
            <LoadingSpinner />
        </div>
    </div>
  );
};

export default FullScreenLoader;
