import React from "react";
import Image from "next/image";

import nails1 from "../public/1-nails.jpg";
import nails3 from "../public/3-nails.jpg";
import nails4 from "../public/4-nails.jpg";
import nails5 from "../public/5-nails.jpg";

const PhotoGallery = () => {
  return (
    <div className="w-full sm:w-10/12 md:w-1/2 grid grid-cols-2 md:grid-cols-2 gap-1.5 sm:gap-3 sm:pt-2 sm:pb-24 pb-8 lg:pr-24 xl:pr-60 md:pl-0  sm:ml-14 md:ml-0  sm:p-0">
      <Image
        src={nails5}
        alt="Gel extensions done by nails by michelle,nail salon in cheddar"
        width="250px"
        height="250px"
        sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
        className="rounded-md"
        priority
      />
      <Image
        src={nails1}
        alt="fresh Manicure done by nails by michelle,nail salon in cheddar"
        width="250px"
        height="250px"
        sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
        className="rounded-md"
        priority
      />

      <Image
        src={nails3}
        alt="Gel polish nail treatment done by nails by michelle,nail salon in cheddar"
        width="250px"
        height="250px"
        sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
        className="rounded-md"
        priority
      />
      <Image
        src={nails4}
        alt="Pink gel polish done by nails by michelle,nail salon in cheddar"
        width="250px"
        height="250px"
        sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
        className="rounded-md"
        priority
      />
    </div>
  );
};

export default PhotoGallery;
