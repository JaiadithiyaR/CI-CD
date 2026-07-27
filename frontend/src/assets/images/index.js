import laptop from './laptop.svg';
import smartphone from './smartphone.svg';
import headphones from './headphones.svg';
import smartwatch from './smartwatch.svg';
import mouse from './mouse.svg';
import keyboard from './keyboard.svg';
import tablet from './tablet.svg';
import speaker from './speaker.svg';

const productImages = {
  'laptop.svg': laptop,
  'smartphone.svg': smartphone,
  'headphones.svg': headphones,
  'smartwatch.svg': smartwatch,
  'mouse.svg': mouse,
  'keyboard.svg': keyboard,
  'tablet.svg': tablet,
  'speaker.svg': speaker,
};

const defaultProductImage = laptop;

export function resolveProductImage(imageName) {
  return productImages[imageName] || defaultProductImage;
}

export { productImages };