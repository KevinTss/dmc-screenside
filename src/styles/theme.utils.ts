enum ColorScale {
  Scale50 = 50,
  Scale100 = 100,
  Scale200 = 200,
  Scale300 = 300,
  Scale400 = 400,
  Scale500 = 500,
  Scale600 = 600,
  Scale700 = 700,
  Scale800 = 800,
  Scale900 = 900,
  Scale950 = 950,
}

const isHexColor = (string: string): boolean => {
  if (!string || typeof string !== 'string') return false;

  const hexRegex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;

  return hexRegex.test(string);
};

const hexToRgb = (hex: string) => {
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return { r, g, b };
};

const rgbToHex = (r: number, g: number, b: number) => {
  const toHex = (n: number) => {
    const hex = n.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return '#' + toHex(r) + toHex(g) + toHex(b);
};

export const getColorScale = (
  color: string,
  scale: ColorScale = ColorScale.Scale500
) => {
  if (!isHexColor(color)) throw Error('Not valid hexadecimal color');

  const baseColor = color.substring(1);
  const baseColorRgb = hexToRgb(baseColor);
  const scaleDiff = Math.abs(scale - 500);
  const brightnessDiff = (scaleDiff / 100) * 16;

  const calculateScale = (value: number) => {
    if (scale < 500) {
      return Math.max(value - brightnessDiff, 0);
    } else {
      return Math.min(value + brightnessDiff, 255);
    }
  };

  const scaleColor = {
    r: calculateScale(baseColorRgb.r),
    g: calculateScale(baseColorRgb.g),
    b: calculateScale(baseColorRgb.b),
  };

  const scaleColorHex = rgbToHex(scaleColor.r, scaleColor.g, scaleColor.b);

  return scaleColorHex;
};
