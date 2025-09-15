import React from 'react';
import { BuddyLink } from '../types';

interface BuddyLinksProps {
  links?: BuddyLink[];
}

const BuddyLinks: React.FC<BuddyLinksProps> = ({ links }) => {
  if (!links || links.length === 0) {
    return null;
  }

  const groupedLinks = links.reduce((acc, link) => {
    (acc[link.category] = acc[link.category] || []).push(link);
    return acc;
  }, {} as Record<string, BuddyLink[]>);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="font-heading font-bold text-slctrips-navy border-b border-slctrips-mid pb-2 mb-4">A Buddy's Advice</h3>
      <div className="space-y-4">
        {Object.entries(groupedLinks).map(([category, categoryLinks]) => (
          <div key={category}>
            <h4 className="font-bold text-sm text-slctrips-orange mb-2">{category}</h4>
            <ul className="space-y-2 text-sm">
              {categoryLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slctrips-blue hover:underline hover:text-slctrips-navy transition-colors"
                    aria-label={`Link to ${link.text}`}
                  >
                    {link.text} &rarr;
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuddyLinks;