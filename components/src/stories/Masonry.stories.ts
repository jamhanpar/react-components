import type { Meta, StoryObj } from '@storybook/react';
import Masonry from '../layouts/Masonry';

const meta = {
  title: 'Layouts/Masonry',
  component: Masonry,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Masonry>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {args: {},};
