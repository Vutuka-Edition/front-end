import React, { useState } from 'react';

import { faquestions } from '../../Constants/Faquestions';
import FAQItem from '../../Components/FAQItem';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col space-y-6 md:space-y-8">
      {faquestions.map((item) => (
        <FAQItem
          key={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === item.id}
          toggle={() => toggleItem(item.id)}
        />
      ))}
    </div>
  );
};

export default FAQ;
