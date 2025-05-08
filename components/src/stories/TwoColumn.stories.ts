import type { Meta, StoryObj } from '@storybook/react';
import TwoColumnLayout from '../layouts/TwoColumn';

const meta = {
  title: 'Layouts/Two Column',
  component: TwoColumnLayout,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    children: { control: false },
  },
} satisfies Meta<typeof TwoColumnLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: ['Left Content', 'Right Content'],
  },
};
