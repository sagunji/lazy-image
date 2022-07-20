import { useIntersection } from "./useIntersection";
import React, { useState, useRef } from "react";

interface ILazyThumbnailProps {
  src: string;
  [key: string]: any;
}

const LazyThumbnail: React.FC<ILazyThumbnailProps> = ({ src, ...props }) => {
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();
  useIntersection(imgRef, () => {
    setIsInView(true);
  });

  return (
    <img
      // @ts-ignore
      ref={imgRef}
      className={"img__wrapper"}
      // @ts-ignore
      src={isInView ? src : null}
      {...props}
    />
  );
};

export default LazyThumbnail;
