const createImage = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", error => reject(error));
    image.setAttribute("crossOrigin", "anonymous");
    image.src = url;
  });

interface CropAreaPixels {
  width: number;
  height: number;
  x: number;
  y: number;
}

export async function getCroppedImg(
  imageSrc: string,
  pixelCrop: CropAreaPixels
): Promise<Blob> {
  const canvas = document.createElement("canvas");
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  const ctx = canvas.getContext("2d");
  const image = await createImage(imageSrc);

  ctx.drawImage(image, pixelCrop.x * -1, pixelCrop.y * -1);

  return new Promise(resolve => {
    canvas.toBlob(resolve, "image/jpeg");
  });
}
