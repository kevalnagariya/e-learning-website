import React from 'react';
import Title from './Title';
import { testimonialsItems } from '../constant/data';
import { RiArrowLeftLine, RiArrowRightLine } from '@remixicon/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';

const Testimonials = () => {
    return (
        <section className="section">
            <div className="container">
                {/* Title */}
                <Title
                    title="Our Testimonials"
                    text="Hear what our learners have to say about their experience with us. Real stories, real success — see how our courses have helped thousands achieve their goals."
                    link="View All"
                />


                {/* Slider */}
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 1.5 },
                        1280: { slidesPerView: 2.5 },
                    }}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        pauseOnMouseEnter: true,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        prevEl: '.prev-btn',
                        nextEl: '.next-btn',
                    }}
                    className="mt-14 lg:mt-16"
                >
                    {testimonialsItems.map((item) => (
                        <SwiperSlide key={item.id} className="h-auto">
                            <div className="bg-white border border-white-95 p-8 lg:p-10 rounded-[10px] flex flex-col h-full min-h-[350px]">
                                {/* Testimonial text */}
                                <p className="text-gray-700 leading-relaxed flex-grow">{item.text}</p>

                                {/* Bottom section */}
                                <div className="pt-4 border-t border-t-orange-90 flex items-center justify-between gap-4 mt-auto">
                                    {/* Author */}
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={item.img}
                                            alt={item.author}
                                            width={50}
                                            height={50}
                                            className="rounded-full"
                                        />
                                        <p className="font-medium">{item.author}</p>
                                    </div>

                                    {/* Button */}
                                    <button className="secondary-btn whitespace-nowrap">
                                        Read Full Story
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation buttons */}
                <div className="flex items-center justify-center mt-12 gap-5">
                    <button className="bg-orange-70 w-12 h-12 flex items-center justify-center rounded-xl hover:bg-orange-75 transition-colors active:bg-orange-75/80 prev-btn">
                        <RiArrowLeftLine size={30} />
                    </button>
                    <button className="bg-orange-70 w-12 h-12 flex items-center justify-center rounded-xl hover:bg-orange-75 transition-colors active:bg-orange-75/80 next-btn">
                        <RiArrowRightLine size={30} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
