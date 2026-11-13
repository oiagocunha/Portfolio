/** `srcset` for the WebP variants written by scripts/optimize-images.py (`<name>-<width>.webp`). */
export function webpSrcSet(src: string, widths: number[] | undefined) {
  if (!widths || widths.length === 0) return undefined;
  const base = src.replace(/\.[^./]+$/, "");
  return widths.map((width) => `${base}-${width}.webp ${width}w`).join(", ");
}
