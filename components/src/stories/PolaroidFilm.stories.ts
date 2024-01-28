import type { Meta, StoryObj } from '@storybook/react';
import PolaroidFilm from '../components/Polaroid/PolaroidFilm';
import mockData from '../mock/data.json';

const { polaroidFilm, polaroidFilm2, polaroidFilm3 } = mockData;

const meta = {
  title: 'Components/Polaroid Film',
  component: PolaroidFilm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    imageSrc: {
      control: 'select',
      options: [
        polaroidFilm.imageSrc,
        polaroidFilm2.imageSrc,
        polaroidFilm3.imageSrc,
      ],
    },
    imageAlt: {
      control: 'select',
      options: [
        polaroidFilm.imageAlt,
        polaroidFilm2.imageAlt,
        polaroidFilm3.imageAlt,
      ],
    },
    description: {
      control: 'select',
      options: [
        polaroidFilm.description,
        polaroidFilm2.description,
        polaroidFilm3.description,
      ],
    },
    direction: { control: 'select', options: ['left', 'right'] },
    rotationAngle: { control: 'number' },
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
