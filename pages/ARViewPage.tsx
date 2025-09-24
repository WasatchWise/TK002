
import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { destinations } from '../data/destinations';
import { Destination } from '../types';

const ARViewPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [destination, setDestination] = useState<Destination | null>(null);
  const [error, setError] = useState<string>('');
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    const dest = destinations.find(d => d.id === id);
    if (!dest || !dest.ar_data) {
      navigate('/');
      return;
    }
    setDestination(dest);

    const startCamera = async () => {
      try {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
        }
        const stream = await navigator.mediaDevices.getUserMedia({ 
            video: { facingMode: 'environment' } 
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        streamRef.current = stream;
      } catch (err) {
        console.error("Camera access error:", err);
        setError("Camera permission denied. Please enable camera access in your browser settings to use this feature.");
      }
    };

    startCamera();

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, [id, navigate]);

  if (error) {
    return (
      <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center p-4 text-center">
        <h2 className="font-heading text-2xl text-slctrips-red mb-4">Camera Error</h2>
        <p className="mb-6">{error}</p>
        <button onClick={() => navigate(-1)} className="bg-slctrips-gold text-slctrips-navy font-bold py-2 px-6 rounded-full">
          Go Back
        </button>
      </div>
    );
  }

  if (!destination) {
    return null; // or a loading spinner
  }

  return (
    <div className="fixed inset-0 bg-black" aria-modal="true" role="dialog">
      <video ref={videoRef} autoPlay playsInline muted className="absolute w-full h-full object-cover" />
      
      <div className="absolute inset-0 z-10 p-4 flex flex-col justify-between pointer-events-none">
        {/* Header */}
        <div className="w-full flex justify-between items-start">
          <button 
            onClick={() => navigate(-1)} 
            className="bg-black/50 text-white font-bold py-2 px-4 rounded-full pointer-events-auto hover:bg-black/80 transition-colors"
            aria-label="Close AR View"
          >
            &times; Close
          </button>
          <div className="bg-black/50 p-3 rounded-lg text-right max-w-xs">
            <h1 className="font-heading text-xl text-slctrips-gold">{destination.ar_data?.title}</h1>
          </div>
        </div>

        {/* Overlay */}
        <div className="flex-grow flex items-center justify-center">
            <img src={destination.ar_data?.overlayImageUrl} alt="AR Viewfinder" className="w-full h-full object-contain max-w-full max-h-full opacity-80" />
        </div>

        {/* Footer */}
        <div className="w-full flex justify-center">
            <div className="bg-black/50 p-3 rounded-lg text-center max-w-md">
                <p className="text-sm">{destination.ar_data?.instructions}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ARViewPage;
