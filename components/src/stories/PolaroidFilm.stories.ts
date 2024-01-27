import type { Meta, StoryObj } from '@storybook/react';
import PolaroidFilm from '../components/Polaroid/PolaroidFilm';
import hawaii from './assets/darren-lawrence-rffyXd7-4yQ-unsplash.jpg';

const meta = {
  title: 'Components/Polaroid Film',
  component: PolaroidFilm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    imageSrc: { control: 'text' },
    imageAlt: { control: 'text' },
    description: { control: 'text' },
    direction: { control: 'select', options: ['left', 'right', 'up', 'down'] },
  },
} satisfies Meta<typeof PolaroidFilm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageSrc: hawaii,
    imageAlt: 'Button',
    description: "April 2023 Ho'omaluhia Botanical Garden",
    direction: 'left',
  },
};
