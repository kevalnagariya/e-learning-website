import React, { useState } from 'react';
import Title from './Title';
import { faqItems } from '../constant/data';
import { RiAddLine } from '@remixicon/react';

const FaqSec = () => {
  const [openId, setOpenId] = useState(faqItems[0].id ?? null);

  const handleClick = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="section pb-[90px] lg:mb-[160px]">
      <div className="container">
        <div className="grid gap-10 p-5 lg:grid-cols-[0.7fr_1fr] items-start bg-white rounded-lg md:p-10">
          {/* Title */}
          <Title
            title="Frequently Asked Questions"
            text="Still have questions? Contact our team via support@skillbridge.com"
            link="See All FAQ’s"
          />

          {/* FAQ Wrapper */}
          <div className="border border-white-95 grid p-6 rounded-lg">
            {faqItems.map((item) => (
              <div className="space-y-3.5" key={item.id}>
                {/* Question Row */}
                <div className="flex items-center justify-between gap-4 border-b border-b-white-95 pb-3 md:px-5">
                  <h4 className="text-lg sm:text-xl flex-grow break-words">
                    {item.title}
                  </h4>
                  <button
                    className="w-10 h-10 bg-orange-75 flex items-center justify-center rounded-lg hover:bg-orange-75/80 transition-colors flex-shrink-0"
                    onClick={() => handleClick(item.id)}
                  >
                    <RiAddLine
                      className={`transition-transform duration-300 ${
                        openId === item.id ? 'rotate-45' : ''
                      }`}
                      size={24}
                    />
                  </button>
                </div>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openId === item.id ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-5 pb-3 text-gray-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSec;
