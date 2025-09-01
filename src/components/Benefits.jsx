import React from "react";
import Title from "./Title";
import { benefitItems } from "../constant/data";
import { RiArrowRightUpLine } from "@remixicon/react";

const Benefits = () => {
  return (
    <section className="section">
      <div className="container">
        {/* Title */}
        <Title
          title="Benefits"
          text="Discover the key advantages of learning with us. Gain practical skills, expert guidance, and flexible learning options to accelerate your growth and achieve your goals with confidence."
          link="View All"
        />


        {/* Card Wrapper */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12 lg:mt-16">
          {benefitItems.map((item) => (
            <article
              key={item.id}
              className="bg-white p-8 flex flex-col rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div className="bg-orange-75 w-24 h-24 flex items-center justify-center mx-auto rounded-xl mb-8">
                <img src={item.icon} alt={item.title} width={64} height={64} />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow text-center space-y-4">
                <h4 className="text-xl font-semibold">{item.title}</h4>
                <p className="text-gray-600">{item.text}</p>

                {/* Button */}
                <div className="mt-auto">
                  <button
                    aria-label={`Learn more about ${item.title}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2 border border-orange-50 text-orange-50 font-medium rounded-md hover:bg-orange-50 hover:text-white transition-all group"
                  >
                    Learn More
                    <RiArrowRightUpLine
                      size={20}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
