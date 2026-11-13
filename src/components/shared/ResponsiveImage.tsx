import type { ImgHTMLAttributes } from "react";
import { imageVariants } from "@/lib/image-variants";
import { webpSrcSet } from "@/lib/images";

interface ResponsiveImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  /** Rendered width of the image, so the browser picks the right variant. */
  sizes: string;
}

/** Serves the generated WebP variants when they exist, with the original file as fallback. */
export const ResponsiveImage = ({ src, sizes, alt, ...img }: ResponsiveImageProps) => {
  const srcSet = webpSrcSet(src, imageVariants[src]);
  if (!srcSet) return <img src={src} alt={alt} {...img} />;
  return (
    <picture>
      <source type="image/webp" srcSet={srcSet} sizes={sizes} />
      <img src={src} alt={alt} {...img} />
    </picture>
  );
};
