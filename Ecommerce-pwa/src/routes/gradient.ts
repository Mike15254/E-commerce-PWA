export const paint = (context: CanvasRenderingContext2D, t: number): void => {
	const { width, height } = context.canvas;
	const imageData: ImageData = context.getImageData(0, 0, width, height);
  
	for (let p = 0; p < imageData.data.length; p += 4) {
	  const i: number = p / 4;
	  const x: number = i % width;
	  const y: number = (i / width) >>> 0;
  
	  const red: number = 64 + (128 * x) / width + 64 * Math.sin(t / 1000);
	  const green: number = 64 + (128 * y) / height + 64 * Math.cos(t / 1000);
	  const blue: number = 128;
  
	  imageData.data[p + 0] = red;
	  imageData.data[p + 1] = green;
	  imageData.data[p + 2] = blue;
	  imageData.data[p + 3] = 255;
	}
  
	context.putImageData(imageData, 0, 0);
  };
  