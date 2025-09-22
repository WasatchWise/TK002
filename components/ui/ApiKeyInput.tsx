
import React, { useState, useEffect } from 'react';

interface ApiKeyInputProps {
  serviceName: string;
  storageKey: string;
  description: string;
  placeholder: string;
}

const ApiKeyInput: React.FC<ApiKeyInputProps> = ({ serviceName, storageKey, description, placeholder }) => {
  const [key, setKey] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    // In a real app, you would not do this. Keys are handled server-side or via build-time env vars.
    // This is for demonstration purposes only to simulate having keys available.
    const storedKey = localStorage.getItem(storageKey);
    if (storedKey) {
      setKey(storedKey);
    }
  }, [storageKey]);

  const handleSave = () => {
    localStorage.setItem(storageKey, key);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000); // Reset saved state after 2 seconds
  };
  
  const handleKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKey(e.target.value);
    if (isSaved) {
        setIsSaved(false);
    }
  }

  return (
    <div className="border-b border-gray-200 pb-6">
      <h3 className="font-heading text-2xl font-bold text-slctrips-navy">{serviceName}</h3>
      <p className="text-gray-600 mt-1 mb-4 text-sm">{description}</p>
      <div className="flex flex-col sm:flex-row gap-2 items-center">
        <div className="relative flex-grow w-full">
            <input
                type={isVisible ? 'text' : 'password'}
                value={key}
                onChange={handleKeyChange}
                placeholder={placeholder}
                className="w-full p-3 pr-10 border border-gray-300 rounded-md shadow-sm focus:ring-slctrips-gold focus:border-slctrips-gold"
                aria-label={`${serviceName} input`}
            />
            <button
                onClick={() => setIsVisible(!isVisible)}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-slctrips-navy"
                aria-label={isVisible ? 'Hide API Key' : 'Show API Key'}
            >
                {isVisible ? '🙈' : '👁️'}
            </button>
        </div>
        <button
          onClick={handleSave}
          disabled={isSaved}
          className={`w-full sm:w-auto px-6 py-3 font-bold text-white rounded-md transition-colors duration-300 ${
            isSaved 
            ? 'bg-slctrips-green cursor-not-allowed' 
            : 'bg-slctrips-sky hover:bg-slctrips-navy'
          }`}
        >
          {isSaved ? 'Saved ✓' : 'Save'}
        </button>
      </div>
    </div>
  );
};

export default ApiKeyInput;
