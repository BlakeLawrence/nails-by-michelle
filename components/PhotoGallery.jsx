import React from "react";
import Image from "next/image";

import nails1 from "../public/1-nails.jpeg";
import nails3 from "../public/3-nails.jpeg";
import nails4 from "../public/4-nails.jpeg";
import nails5 from "../public/5-nails.jpeg";

const PhotoGallery = () => {
  return (
    <div className="w-full sm:w-1/2 grid grid-cols-4 sm:grid-cols-2 gap-1.5 sm:gap-3 sm:pt-2 sm:pb-24 pb-8 lg:pr-24 xl:pr-60 sm:pl-12  sm:ml-0  sm:p-0">
      <Image
        src={nails5}
        alt="Gel extensions done by nails by michelle,nail salon in cheddar"
        width={250}
        height={250}
        className="rounded-md"
      />
      <Image
        src={nails1}
        alt="fresh Manicure done by nails by michelle,nail salon in cheddar"
        width={250}
        height={250}
        className="rounded-md"
      />

      <Image
        src={nails3}
        alt="Gel polish nail treatment done by nails by michelle,nail salon in cheddar"
        width={250}
        height={250}
        className="rounded-md"
      />
      <Image
        src={nails4}
        alt="Pink gel polish done by nails by michelle,nail salon in cheddar"
        width={250}
        height={250}
        className="rounded-md"
      />
    </div>
  );
};

export default PhotoGallery;
