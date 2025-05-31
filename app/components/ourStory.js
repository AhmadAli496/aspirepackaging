import React from "react";
import Image from "next/image";
import { ourStory } from "@/app/data";
import { StatsSection } from "@/app/components/index";

const OurStory = () => {
  return (
    <div className={"py-12 bg-gray-800 text-white"}>
      <div className="container">
        <h2 className="h2 text-center font-bold">Our Story</h2>
        <div className=" h-1 w-20 bg-blue-600 mx-auto"></div>
        <div className={"overflow-hidden mt-12"}>
          {ourStory.map((story) => (
            <div key={story.id} className={" overflow-hidden"}>
              <p
                className={`text-center md:w-[70%] mx-auto text-xl lg:font-serif text-gray-200`}
              >
                {story.description}
              </p>
              <div className="flex flex-col-reverse lg:flex-row justify-center items-center">
                <div className={"w-full md:w-1/2 md:h-[560px]"}>
                  <Image
                    className={"h-full w-full object-cover rounded-xl"}
                    src={story.image}
                    alt={story.description}
                    width={500}
                    height={700}
                  />
                </div>
                <div className="stats w-full lg:w-1/2">
                  <StatsSection stats={story.stats} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurStory;
