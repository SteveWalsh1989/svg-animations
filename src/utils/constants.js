import WordSVG from '../components/WordSVG.vue';
import WordSVG2 from '../components/WordSVG2.vue';
import WordSVG3 from '../components/WordSVG3.vue';
import BoxGrow from '../components/BoxGrow.vue';
import LoadingDots from '../components/LoadingDots.vue';
import LoadingCircles from '../components/LoadingCircles.vue';
import PlantSVG from '../components/PlantSVG.vue';
import PlatonicShapes from '../components/PlatonicShapes.vue';
import DonutSvg from '../components/DonutSVG.vue';
import Icons from '../components/IconsSVG.vue';
import Cells from '../components/CellsSVG.vue';
import ProgressCircleSVG from '../components/ProgressCircleSVG.vue';

export const SVG_LIST = [
  {
    title: 'Progress circle SVG',
    description: 'Circular progress bar.',
    component: ProgressCircleSVG,
    infinite: false,
  },
  {
    title: 'Value comparison SVG',
    description:
      'Custom SVGs to compare values percentage based their percentage of combined total.',
    component: Cells,
    infinite: false,
  },
  {
    title: 'Icons SVG',
    description:
      'Small collection of icon svgs, some have interactive animations so try hovering or clicking on them',
    component: Icons,
    infinite: false,
  },
  {
    title: 'Donut Chart SVG',
    description:
      'Added a couple of small donut chart using plain CSS and SVGs to simulate some different styles for progress',
    component: DonutSvg,
    infinite: false,
  },
  {
    title: 'Custom SVG',
    description:
      'Added a couple of small animations to SVG, added some custom groups to help out here and there',
    component: PlantSVG,
    infinite: false,
  },
  {
    title: 'Loading circles',
    description:
      'A small section of different loading animations using circles',
    component: LoadingCircles,
    infinite: true,
  },
  {
    title: 'Loading dot',
    description: 'A small section of different loading animations using dots',
    component: LoadingDots,
    infinite: true,
  },
  {
    title: 'Growing box',
    description:
      'Css animation to make a box/card grow, could be something popping up with info on website as yoiu scroll or click to expand.',
    component: BoxGrow,
    infinite: false,
  },
  {
    title: 'Logo appearing SVG 1',
    description:
      "A simple SVG animation that animates a word. Each letter is a separate path with a delay to start the animation and a final fill animation is used after the final letter's animation has finished .",
    component: WordSVG,
    infinite: false,
  },
  {
    title: 'Logo appearing SVG 2',
    description:
      "A simple SVG animation that animates a word. Each letter is a separate path with a delay to start the animation and fill animation is used after the each individual letter's animation has finished.",
    component: WordSVG2,
    infinite: false,
  },
  {
    title: 'Scribble SVG',
    description:
      'A simple SVG animation that animates a word as if it is drawn poorly.',
    component: WordSVG3,
    infinite: false,
  },
  {
    title: 'Platonic Shapes svg',
    description: 'Just a small collection of basic shapes created using svg',
    component: PlatonicShapes,
    infinite: false,
  },
];
