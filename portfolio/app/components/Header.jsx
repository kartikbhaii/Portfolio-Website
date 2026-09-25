import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center  mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image
          src={assets.profile_img}
          alt="my-image"
          className="w-35 h-35 rounded-full object-cover"
        />
      </div>

      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo">
        Hi! I&apos;m Kartikey Singh{" "}
        <Image src={assets.hand_icon} alt="my-image" className="w-6" />{" "}
      </h3>

      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-ovo">
        full stack web developer based in India.
      </h1>

      <p>
        I am a Full Stack developer from Bangalore, Karnataka with 1 year of
        experience with multiple companies.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          Contact me
          <Image
            src={assets.right_arrow_white}
            alt="my-image"
            className="w-4"
          />
        </a>
        <a
          href="/sample-resume.pdf"
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          My Resume
          <Image src={assets.download_icon} alt="my-image" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
