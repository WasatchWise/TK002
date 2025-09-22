
import React from 'react';

interface GearItemProps {
  name: string;
  description: string;
  icon: string;
}

const GearItem: React.FC<GearItemProps> = ({ name, description, icon }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-start space-x-4">
    <div className="text-3xl">{icon}</div>
    <div>
      <h4 className="font-bold text-slctrips-navy">{name}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

interface GearCategoryProps {
    title: string;
    description: string;
    children: React.ReactNode;
}

const GearCategory: React.FC<GearCategoryProps> = ({ title, description, children }) => (
    <section className="mb-12 bg-white p-6 rounded-lg shadow-md border-t-4 border-slctrips-red">
        <h2 className="font-heading text-3xl font-bold text-slctrips-navy mb-2">{title}</h2>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {children}
        </div>
    </section>
)

const FieldKitPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="font-heading text-5xl font-bold text-slctrips-navy mb-4">Investigator's Field Kit</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Proper preparation is key to any successful field investigation. Here is a list of recommended gear to document, explore, and research safely and effectively.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <GearCategory title="Documentation & Evidence Gathering" description="The tools you need to record your on-site observations and build your case file.">
            <GearItem name="All-Weather Notebook" icon="📓" description="A 'Rite in the Rain' or similar waterproof notebook to protect your field notes from the elements." />
            <GearItem name="High-Quality Camera" icon="📷" description="For capturing photographic evidence. A good low-light lens is recommended for dusk or indoor shots." />
            <GearItem name="Digital Voice Recorder" icon="🎙️" description="Ideal for verbal notes, capturing ambient sounds, or conducting 'witness' interviews." />
            <GearItem name="Portable Power Bank" icon="🔋" description="Keep your phone and other electronic devices charged during long days in the field." />
        </GearCategory>

        <GearCategory title="On-Site Essentials" description="Gear for staying safe, comfortable, and respectful while visiting locations, especially remote ones.">
            <GearItem name="Reliable Flashlight" icon="🔦" description="A powerful LED flashlight or headlamp is crucial for investigating sites with poor lighting or at night." />
            <GearItem name="First-Aid Kit" icon="⚕️" description="A compact kit for minor injuries. Essential for any travel, especially to rural or abandoned sites." />
            <GearItem name="Appropriate Footwear" icon="🥾" description="Sturdy, comfortable hiking boots for navigating rough terrain at remote locations." />
            <GearItem name="Water & Rations" icon="💧" description="Always carry sufficient water and snacks, as many of these sites are far from amenities." />
        </GearCategory>

        <GearCategory title="Further Research & Context" description="Resources to deepen your understanding of the cases before, during, and after your visit.">
            <GearItem name="True Crime Books" icon="📚" description="In-depth books on the cases you're investigating provide invaluable context. Check the dossier Media Archives for suggestions." />
            <GearItem name="Podcast Subscriptions" icon="🎧" description="Download relevant podcast episodes for the drive to the location to immerse yourself in the narrative." />
            <GearItem name="Offline Maps" icon="🗺️" description="Use an app like Google Maps or Gaia GPS to download maps for areas with no cell service." />
            <GearItem name="Binoculars" icon="🔭" description="Useful for observing locations from a respectful distance, especially private residences." />
        </GearCategory>
        
        <div className="text-center text-sm text-gray-500 mt-12 p-4 bg-gray-100 rounded-lg">
            <p><strong className="font-bold text-slctrips-navy">Disclaimer:</strong> This is a curated list of recommendations. In a fully-deployed app, some of these recommendations may contain affiliate links, which help support the project at no extra cost to you. Always prioritize safety and respect for the locations you visit.</p>
        </div>
      </div>
    </div>
  );
};

export default FieldKitPage;
