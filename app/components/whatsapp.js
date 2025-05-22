import React from "react";
import Image from "next/image";


const Whatsapp = () => {
  return (
    <a
      href="https://wa.me/923072262269?text=%F0%9F%91%8B%20Hi,%20how%20can%20I%20get%20help?%20URL:%20https://aspirepackaging.pk"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center  justify-center gap-2 fixed bottom-4 right-2 lg:bottom-8 lg:right-8 bg-green-500 text-white px-3 py-3  rounded-full hover:bg-green-600 transition"
    >
        <Image src={'/whatsapp.png'} className="invert" alt="Whatsapp Logo" width={22} height={22} priority />
        <span className="text-[15px] lg:text-lg">
      Hi, How can I help?
        </span>
    </a>
  );
};

export default Whatsapp
