import React from 'react';
import ApiKeyInput from '../components/ui/ApiKeyInput';

const ApiKeysPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
            <h1 className="font-heading text-5xl font-bold text-slctrips-navy mb-4">API Key Management</h1>
            <p className="text-gray-600 text-lg">
                This application is designed to work with various external APIs to provide dynamic features. In a production environment like Vercel, these keys are stored securely as environment variables. This page demonstrates where those keys would be configured.
            </p>
        </div>
        
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-200 space-y-12">
            
            {/* AI Services */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-slctrips-red pb-2 border-b-2 border-slctrips-red/30 mb-6">AI & Machine Learning</h2>
              <div className="space-y-8">
                <ApiKeyInput
                    serviceName="Gemini API"
                    storageKey="API_KEY"
                    description="Powers all AI-driven features, including case briefings, investigation planning, and evidence analysis. This is the core API for the app."
                    placeholder="Enter your Gemini API Key"
                />
                <ApiKeyInput
                    serviceName="Google Vertex AI"
                    storageKey="VERTEX_AI_CONFIG"
                    description="For more advanced, custom AI models and MLOps. Often configured via a service account JSON file path rather than a single API key."
                    placeholder="Enter your Vertex AI Project ID or Service Account path"
                />
                <ApiKeyInput
                    serviceName="OpenAI API"
                    storageKey="OPENAI_API_KEY"
                    description="Alternative AI provider for generating text, summaries, or other creative content within the application."
                    placeholder="Enter your OpenAI API Key"
                />
              </div>
            </div>

            {/* Google Services */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-slctrips-red pb-2 border-b-2 border-slctrips-red/30 mb-6">Google Cloud & Maps Platform</h2>
              <div className="space-y-8">
                 <ApiKeyInput
                    serviceName="Google Client ID"
                    storageKey="GOOGLE_CLIENT_ID"
                    description="Used for Google Sign-In (OAuth 2.0) to allow user authentication and personalization features."
                    placeholder="Enter your Google Client ID"
                />
                <ApiKeyInput
                    serviceName="Google Maps API"
                    storageKey="GOOGLE_MAPS_API_KEY"
                    description="Used for displaying interactive maps on location pages. Requires the 'Maps JavaScript API' to be enabled."
                    placeholder="Enter your Google Maps API Key"
                />
                <ApiKeyInput
                    serviceName="Google Places API"
                    storageKey="GOOGLE_PLACES_API_KEY"
                    description="Allows searching for points of interest near a crime location, such as cafes, hotels, or police stations."
                    placeholder="Enter your Google Places API Key"
                />
                 <ApiKeyInput
                    serviceName="Google Geocoding API"
                    storageKey="GOOGLE_GEOCODING_API_KEY"
                    description="Converts addresses into geographic coordinates (latitude and longitude) to place markers on the map accurately."
                    placeholder="Enter your Google Geocoding API Key"
                />
                 <ApiKeyInput
                    serviceName="Google Directions API"
                    storageKey="GOOGLE_DIRECTIONS_API_KEY"
                    description="Provides routing and turn-by-turn directions from a user's location to a crime scene."
                    placeholder="Enter your Google Directions API Key"
                />
                 <ApiKeyInput
                    serviceName="Google Photo Library API"
                    storageKey="GOOGLE_PHOTOS_API_KEY"
                    description="Could enable users to save their on-site evidence photos directly to their personal Google Photos account."
                    placeholder="Enter your Google Photos API Key"
                />
              </div>
            </div>

            {/* Cloud & Backend */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-slctrips-red pb-2 border-b-2 border-slctrips-red/30 mb-6">Cloud & Infrastructure</h2>
               <div className="space-y-8">
                <ApiKeyInput
                    serviceName="Supabase"
                    storageKey="SUPABASE_ANON_KEY"
                    description="Provides backend-as-a-service features like database storage, user authentication, and serverless functions."
                    placeholder="Enter your Supabase Anon Key"
                />
                 <ApiKeyInput
                    serviceName="Cloudflare"
                    storageKey="CLOUDFLARE_API_TOKEN"
                    description="Manages DNS, provides security (WAF), and can be used for serverless functions (Workers) or image hosting (Images)."
                    placeholder="Enter your Cloudflare API Token"
                />
               </div>
            </div>

            {/* Business & Content */}
             <div>
              <h2 className="font-heading text-3xl font-bold text-slctrips-red pb-2 border-b-2 border-slctrips-red/30 mb-6">Business & Content APIs</h2>
               <div className="space-y-8">
                 <ApiKeyInput
                    serviceName="Stripe"
                    storageKey="STRIPE_PUBLISHABLE_KEY"
                    description="Handles payment processing for app upgrades and subscriptions securely on the frontend."
                    placeholder="Enter your Stripe Publishable Key"
                />
                 <ApiKeyInput
                    serviceName="SendGrid"
                    storageKey="SENDGRID_API_KEY"
                    description="Manages transactional emails, such as user registration confirmations or password resets."
                    placeholder="Enter your SendGrid API Key"
                />
                  <ApiKeyInput
                    serviceName="Unsplash API"
                    storageKey="UNSPLASH_ACCESS_KEY"
                    description="Provides access to a large library of high-quality, royalty-free images for use as background visuals or case file illustrations."
                    placeholder="Enter your Unsplash Access Key"
                />
                <ApiKeyInput
                    serviceName="Notion API"
                    storageKey="NOTION_API_KEY"
                    description="Could be used to sync case files or user notes with a Notion workspace, acting as a powerful content management system."
                    placeholder="Enter your Notion API Key"
                />
                <ApiKeyInput
                    serviceName="Awin API"
                    storageKey="AWIN_API_KEY"
                    description="For managing affiliate marketing links, perhaps for recommending true crime books or documentaries."
                    placeholder="Enter your Awin Advertiser API Key"
                />
                <ApiKeyInput
                    serviceName="OpenWeatherMap API"
                    storageKey="OPENWEATHER_API_KEY"
                    description="Could be used to provide real-time weather conditions for on-site investigations, adding another layer of immersion."
                    placeholder="Enter your OpenWeatherMap API Key"
                />
                <ApiKeyInput
                    serviceName="NewsAPI"
                    storageKey="NEWS_API_KEY"
                    description="Could power a feature to pull in historical news articles or recent developments related to a specific case file."
                    placeholder="Enter your NewsAPI Key"
                />
               </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default ApiKeysPage;