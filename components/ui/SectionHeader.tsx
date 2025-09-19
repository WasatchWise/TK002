
import React from 'react';

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div className="pb-2 border-b-2 border-slctrips-red/30">
      <h2 className="font-heading text-3xl font-bold text-slctrips-red">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
