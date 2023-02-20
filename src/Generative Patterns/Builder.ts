// The main idea is to create class with chain objects, which will "build" complicated objects step by step.

enum ImageFormat {
  Png = 'png',
  Jpeg = 'jpeg'
}

interface IResolution {
  width: number;
  height: number;
}

interface IImageConversion extends IResolution {
  format: ImageFormat
}

class ImageBuilder {
  private formats: ImageFormat[] = [];
  private resolutions: IResolution[] = [];

  addPng() {
    if (this.formats.includes(ImageFormat.Png)) {
      return this;
    }
    this.formats.push(ImageFormat.Png);
    return this;
  }

  addJpeg() {
    if (this.formats.includes(ImageFormat.Jpeg)) {
      return this;
    }
    this.formats.push(ImageFormat.Jpeg);
    return this;
  }

  addResolution(width: number, height: number) {
    this.resolutions.push({width, height});
    return this;
  }

  build(): IImageConversion[] {
    let res: IImageConversion[] = [];

    for (const r of this.resolutions) {
      for (const f of this.formats) {
        res.push({
          format: f,
          width: r.width,
          height: r.height
        })
      }
    }

    return res;
  }
}

console.log("[Builder: ]", new ImageBuilder()
  .addJpeg()
  .addPng()
  .addResolution(100, 50)
  .addResolution(200, 100));
