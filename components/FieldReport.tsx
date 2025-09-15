import React, { useState, useCallback, useRef, useEffect } from 'react';

interface FieldReportProps {
  onPinEvidence: (item: { note: string; photo?: string }) => void;
}

const FieldReport: React.FC<FieldReportProps> = ({ onPinEvidence }) => {
  const [note, setNote] = useState('');
  const [photo, setPhoto] = useState<string | undefined>(undefined);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState('');

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const stopCamera = useCallback(() => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  }, [stream]);

  useEffect(() => {
    return () => { stopCamera(); };
  }, [stopCamera]);

  const handleOpenCamera = async () => {
    stopCamera();
    setError('');
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
      setStream(mediaStream);
    } catch (err) {
      console.error("Camera access denied:", err);
      setError("Camera access is needed. Please enable camera permissions.");
    }
  };

  const handleSnapPhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');
    if(context){
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
        setPhoto(dataUrl);
    }
    stopCamera();
  };

  const handlePin = () => {
    if (!note && !photo) {
      setError("Add a note or photo to pin some evidence.");
      return;
    }
    onPinEvidence({ note, photo });
    setNote('');
    setPhoto(undefined);
    setError('');
  };

  const hasDataToPin = note.trim() !== '' || !!photo;

  return (
    <div className="bg-white p-6 rounded-lg mb-8 shadow-md border-t-4 border-slctrips-orange">
      <h2 className="font-heading text-3xl font-bold text-slctrips-navy mb-2">Field Data Entry</h2>
      <p className="text-gray-600 mb-6">You're the investigator. Capture your findings here to add them to your evidence board.</p>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-slctrips-navy mb-1">Evidence Photo</label>
          <div className="p-2 border border-gray-300 rounded-md bg-slctrips-light min-h-[100px] flex justify-center items-center">
            {photo ? (
              <div className="text-center">
                <img src={photo} alt="Captured evidence" className="max-h-48 rounded-md mx-auto"/>
                <button onClick={() => setPhoto(undefined)} className="text-xs text-red-600 hover:text-red-800 mt-2">Clear Photo</button>
              </div>
            ) : stream ? (
               <div className="w-full space-y-2">
                  <video ref={videoRef} autoPlay playsInline className="w-full rounded-lg bg-black"></video>
                  <canvas ref={canvasRef} className="hidden"></canvas>
                  <div className="flex gap-2">
                      <button onClick={handleSnapPhoto} className="flex-grow bg-slctrips-blue text-white font-bold py-2 px-4 rounded-lg hover:bg-slctrips-navy">Snap Photo</button>
                      <button onClick={stopCamera} className="bg-gray-200 text-slctrips-navy font-bold py-2 px-4 rounded-lg hover:bg-gray-300">Close</button>
                  </div>
              </div>
            ) : (
              <button onClick={handleOpenCamera} className="bg-white text-slctrips-navy font-bold py-2 px-4 rounded-lg hover:bg-gray-100 border border-gray-300">
                📷 Open Camera
              </button>
            )}
          </div>
        </div>
        
        <div>
            <label htmlFor="field-notes" className="block text-sm font-bold text-slctrips-navy mb-1">Field Notes</label>
            <textarea
                id="field-notes"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Log your observations, feelings, and any strange occurrences..."
                className="w-full h-24 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-slctrips-gold focus:border-slctrips-gold"
                aria-label="Field Notes"
            />
        </div>
        
        {error && <p className="text-red-600 text-sm">{error}</p>}
        
        <button
            onClick={handlePin}
            disabled={!hasDataToPin}
            className="w-full mt-4 bg-slctrips-orange text-white font-bold py-3 px-6 rounded-lg hover:bg-slctrips-red disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors duration-300"
            aria-label="Pin Evidence to Board"
        >
            📌 Pin Evidence to Board
        </button>
      </div>
    </div>
  );
};

export default FieldReport;