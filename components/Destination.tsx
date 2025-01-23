"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Title from "./Title";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination } from "swiper/modules";

const destinationUrls = {
  "Gunung Pesagi": "https://maps.app.goo.gl/hqkhsezTKkdpBuwD7",
  "Gigi Hiu": "https://maps.app.goo.gl/db7neJa6haotiP9b7",
  "Pahawang": "https://maps.app.goo.gl/51QLSiFrSxGHCh5B7",
  "Taman Nasional Way Kambas": "https://maps.app.goo.gl/ftPgbCgBpznKRt219",
  "Air Terjun Putri Malu": "https://maps.app.goo.gl/mnuM2iAnpMMjowMw9",
};

const Destination = () => {
  return (
    <section
      id="destination-section"
      className="relative max-container padding-container flex flex-col gap-16 py-15 pt-4"
    >
      <Image
        className="absolute xs:bottom-[65%] xs:right-[5%] md:bottom-[70%] xl:right-0"
        src="/yellowx.png"
        alt="yellow object"
        width={100}
        height={100}
      />

      <div className="top">
        <Title title="" subtitle="TUJUAN UTAMA KAMI" />
      </div>

      <div className="bottom flex items-center justify-between">
        <Swiper
          slidesPerView={3}
          spaceBetween={60}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            "@1.15": {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            "@1.60": {
              slidesPerView: 3,
              spaceBetween: 60,
            },
          }}
        >
          <SwiperSlide className="pb-12">
            <DestinationCard
              img="/gunung-pesagi.jpg"
              place="Gunung Pesagi"
              country="Lampung Barat"
              price="Rp. 100.000"
              rating="4.8"
              url={destinationUrls["Gunung Pesagi"]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <DestinationCard
              img="/gigi.jpg"
              place="Gigi Hiu"
              country="Kelumbayan, Tanggamus"
              price="Rp. 80.000"
              rating="4.9"
              url={destinationUrls["Gigi Hiu"]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <DestinationCard
              img="/pulau-pahawang.jpg"
              place="Pulau Pahawang"
              country="Pulau Pahawang"
              price="Rp. 300.000"
              rating="5.0"
              url={destinationUrls["Pahawang"]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <DestinationCard
              img="/waykambas.jpg"
              place="Taman Nasional Way Kambas"
              country="Lampung Timur, Lampung"
              price="Rp. 150.000"
              rating="4.7"
              url={destinationUrls["Taman Nasional Way Kambas"]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <DestinationCard
              img="/terjun.avif"
              place="Air Terjun Putri Malu"
              country="Banjit, Kabupaten Way Kanan, Lampung"
              price="Rp. 20.000"
              rating="4.2"
              url={destinationUrls["Air Terjun Putri Malu"]}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

interface DestinationCardProps {
  img: string;
  place: string;
  country: string;
  price: string;
  rating: string;
  url: string;
}

const DestinationCard = ({
  img,
  place,
  country,
  price,
  rating,
  url,
}: DestinationCardProps) => {
  const router = useRouter();

  const handleOrderClick = () => {
    router.push(
      `/pesan?place=${encodeURIComponent(place)}&country=${encodeURIComponent(
        country
      )}&price=${encodeURIComponent(price)}&rating=${encodeURIComponent(rating)}`
    );
  };

  return (
    <div className="bg-white/5 h-[600px] w-[340px] pb-4 rounded-3xl shadow-2 flex flex-col gap-4">
      <a href={url} className="h-2/3 rounded-t-3xl cursor-pointer">
        <Image
          className="h-full w-full rounded-t-3xl"
          src={img}
          alt={`Foto ${place}`}
          width={340}
          height={200}
        />
      </a>

      <div className="h-1/3 px-6 flex flex-col justify-between">
        <div>
          <div className="place-price flex justify-between">
            <p className="font-bold text-lg w-1/2">{place}</p>
            <p className="font-bold text-lg md:flex hidden">{price}</p>
          </div>
          <p className="mt-3">{country}</p>
          <div className="mt-6 flex gap-1 items-center">
            <p className="text_orange font-bold">{rating}</p>
            <Image
              className="h-full"
              src="/star.png"
              alt="Bintang"
              width={20}
              height={20}
            />
          </div>
        </div>
        <button
          onClick={handleOrderClick}
          className="mt-4 bg-orange-500 hover:bg-orange-600 text-white text-center py-2 px-4 rounded-lg"
        >
          Memesan
        </button>
      </div>
    </div>
  );
};

export default Destination;
