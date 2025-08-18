import React from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggle }) => (
  <div className="border-b border-gray-300">
    <button
      onClick={toggle}
      className="w-full text-left p-2 flex justify-between items-center
        text-lg text-black-second font-medium"
    >
      <span>{question}</span>
      <span className="text-3xl">{isOpen ? '-' : '+'}</span>
    </button>
    {isOpen && <div className="py-4 px-10 text-black-accent">{answer}</div>}
  </div>
);

export default FAQItem;
