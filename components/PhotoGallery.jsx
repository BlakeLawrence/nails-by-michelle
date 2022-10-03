import React from "react";
import Image from "next/image";
import nails1 from "../public/1-nails.jpeg";

import nails3 from "../public/3-nails.jpeg";
import nails4 from "../public/4-nails.jpeg";
import nails5 from "../public/5-nails.jpeg";

const PhotoGallery = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-16 pb-16 sm:pt-0 xl:pr-48">
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
