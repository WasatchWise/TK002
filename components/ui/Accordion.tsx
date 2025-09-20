
import React from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, defaultOpen = false }) => {
  return (
    <details className="bg-white border border-gray-200 rounded-lg mb-4 overflow-hidden" open={defaultOpen}>
      <summary className="font-heading text-xl font-bold text-slctrips-navy p-4 cursor-pointer hover:bg-gray-100 transition-colors flex justify-between items-center">
        {title}
        <svg className="w-5 h-5 transition-transform transform details-arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="p-4 border-t border-gray-200 text-slctrips-black">
        {children}
      </div>
      <style>{`
        details[open] .details-arrow {
            transform: rotate(180deg);
        }
      `}</style>
    </details>
  );
};

export default Accordion;
