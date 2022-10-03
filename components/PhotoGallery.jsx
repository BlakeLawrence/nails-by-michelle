import React from "react";
import Image from "next/image";
import nails1 from "../public/1-nails.jpeg";

import nails3 from "../public/3-nails.jpeg";
import nails4 from "../public/4-nails.jpeg";
import nails5 from "../public/5-nails.jpeg";

const PhotoGallery = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 sm:pt-16 sm:pb-16 pb-8 pt-4 xl:pr-48 ml-8 sm:ml-0">
      <Image
        src={nails5}
        alt="photo of nails with polish"
        width={250}
        height={250}
      />
      <Image
        src={nails1}
        alt="photo of nails with polish"
        width={250}
        height={250}
      />

      <Image
        src={nails3}
        alt="photo of nails with polish"
        width={250}
        height={250}
      />
      <Image
        src={nails4}
        alt="photo of nails with polish"
        width={250}
        height={250}
      />
    </div>
  );
};

export default PhotoGallery;
