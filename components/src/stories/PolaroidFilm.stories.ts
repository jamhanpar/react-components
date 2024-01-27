import type { Meta, StoryObj } from '@storybook/react';
import PolaroidFilm from '../components/Polaroid/PolaroidFilm';
// import hawaii from './assets/darren-lawrence-rffyXd7-4yQ-unsplash.jpg';
import mockData from '../mock/data.json';

const { polaroidFilm } = mockData;

const meta = {
  title: 'Components/Polaroid Film',
  component: PolaroidFilm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    imageSrc: { control: 'select', options: [images['hawaii']] },
    imageAlt: { control: 'text' },
    description: { control: 'text' },
    direction: { control: 'select', options: ['left', 'right', 'up', 'down'] },
  },
} satisfies Meta<typeof PolaroidFilm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageSrc: polaroidFilm.imageSrc,
    imageAlt: polaroidFilm.imageAlt,
    description: polaroidFilm.description,
    direction: 'left',
  },
};
