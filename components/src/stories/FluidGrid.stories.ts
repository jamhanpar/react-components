import type { Meta, StoryObj } from '@storybook/react';
import FluidGrid from '../layouts/FluidGrid';

const meta = {
  title: 'Layouts/Fluid Grid',
  component: FluidGrid,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    gap: { control: 'number' },
    columnMinWidth: { control: 'number' },
    children: { control: false },
  },
} satisfies Meta<typeof FluidGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    gap: 10,
    columnMinWidth: 200,
  },
};
