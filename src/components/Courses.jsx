import React from 'react';
import Title from './Title';
import { coursesSecItems } from '../constant/data';

const Courses = () => {
    return (
        <section className="section">
            <div className="container">
                {/* Title */}
                <Title
                    title="Our Courses"
                    text="Explore a wide range of expertly designed courses tailored to help you master in-demand skills. Learn at your own pace with hands-on projects, real-world examples, and guidance from industry professionals."
                    link="View All"
                />


                {/* Card Wrapper */}
                <div className="grid gap-6 lg:grid-cols-2 mt-8 lg:mt-16">
                    {coursesSecItems.map((item) => (
                        // Card
                        <div
                            className="bg-white p-7 lg:p-10 rounded-[10px] flex flex-col h-full shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                            key={item.id}
                        >
                            {/* Image */}
                            <div>
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    width={560}
                                    height={266}
                                    className="w-full h-[250px] object-cover rounded-[10px]"
                                />
                            </div>

                            {/* Content */}
                            <div className="mt-6 flex flex-col flex-grow">
                                {/* Tags and Instructor */}
                                <div className="flex items-center justify-between flex-wrap gap-2.5">
                                    <div className="flex flex-wrap gap-2">
                                        {item.tags.map((tag, index) => (
                                            <span
                                                className="border border-orange-75 px-3 py-1 rounded-md bg-orange-97 text-sm"
                                                key={index}
                                            >
                                                {tag.tag}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="font-medium text-gray-700">{item.instructor}</p>
                                </div>

                                {/* Meta data */}
                                <div className="my-6 space-y-2">
                                    <h4 className="text-lg font-semibold">{item.title}</h4>
                                    <p className="text-gray-600">{item.text}</p>
                                </div>

                                {/* Button aligned bottom */}
                                <div className="mt-auto">
                                    <button className="w-full bg-white-97 p-3.5 rounded-md border border-white-97 hover:border-orange-50 hover:text-orange-50 transition font-medium">
                                        Get it now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;
