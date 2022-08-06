import WordSVG from '../components/WordSVG.vue';
import WordSVG2 from '../components/WordSVG2.vue';
import WordSVG3 from '../components/WordSVG3.vue';
import BoxGrow from '../components/BoxGrow.vue';
import Loading from '../components/Loading.vue';

export const SVG_LIST = [
  {
    title: 'Loading animations',
    description: 'A small section of different loading animations',
    component: Loading,
  },
  {
    title: 'Growing box animation',
    description:
      'Css animation to make a box/card grow, could be something popping up with info on website as yoiu scroll or click to expand.',
    component: BoxGrow,
  },
  {
    title: 'Logo appearing SVG 1',
    description:
      "A simple SVG animation that animates a word. Each letter is a separate path with a delay to start the animation and a final fill animation is used after the final letter's animation has finished .",
    component: WordSVG,
  },
  {
    title: 'Logo appearing SVG 2',
    description:
      "A simple SVG animation that animates a word. Each letter is a separate path with a delay to start the animation and fill animation is used after the each individual letter's animation has finished.",
    component: WordSVG2,
  },
  {
    title: 'Handwritting SVG',
    description:
      'A simple SVG animation that animates a word as if it is hand drawn.',
    component: WordSVG3,
  },
];
