'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface DataType {
  id: number;
  name: string;
  desc: string;
}

const testi_data: DataType[] = [
  {
    id: 1,
    name: 'Arshnoor Kaur',
    desc: 'Microsoft certifications have been a game-changer for my career. This program from DMLearning provided me with the in-depth knowledge and practical skills I needed to land my dream job in IT.',
  },
  {
    id: 2,
    name: 'Harshwardhan Singh',
    desc: 'I was struggling to advance in my current role. Earning Microsoft certifications through DMLearning has significantly boosted my confidence and opened doors to new opportunities within my company.',
  },
  {
    id: 3,
    name: 'Neha Malik',
    desc: 'This program from DMLearning equipped me with the latest industry-recognized skills in Microsoft technologies. It has been invaluable in helping me stay ahead of the curve in this rapidly evolving field.',
  },
  {
    id: 4,
    name: 'Arun Dev Sharma',
    desc: 'I highly recommend this program from DMLearning to anyone looking to enhance their career prospects in IT.',
  },
];

const setting = {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.testimonial-button-next',
    prevEl: '.testimonial-button-prev',
  },
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
};

const Testimonial = () => {
  return (
    <section className="bg-black py-[100px] max-[1024px]:py-[60px]">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="pb-[70px] text-center max-[767px]:pb-[30px]">
          <h2 className="text-white">Don&apos;t Just take our Word</h2>
          <p className="text-white">See what students have to say about our certification program</p>
        </div>

        <Swiper
          {...setting}
          modules={[Navigation, Autoplay, Pagination]}
          className="[&_.swiper-wrapper]:pb-10 [&_.swiper-pagination-bullet]:bg-[#bdbbd7] [&_.swiper-pagination-bullet-active]:bg-white"
        >
          {testi_data.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="relative mx-auto flex max-w-[1200px] rounded-[20px] border border-white p-[60px] text-center max-[991px]:flex-col max-[991px]:gap-2.5 max-[991px]:p-[30px]">
                <div className="mx-auto max-w-[800px]">
                  <p className="pb-10 text-lg text-white">{testimonial.desc}</p>
                  <p className="text-xl font-bold text-white">~ {testimonial.name}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination" />
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
