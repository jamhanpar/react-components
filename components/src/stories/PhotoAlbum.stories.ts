import type { Meta, StoryObj } from '@storybook/react';
import PhotoAlbum from '../pages/PhotoAlbum';

const meta = {
  title: 'Pages/PhotoAlbum',
  component: PhotoAlbum,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PhotoAlbum>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
