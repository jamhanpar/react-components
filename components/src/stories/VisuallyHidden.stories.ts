import type { Meta, StoryObj } from '@storybook/react';
import VisuallyHidden from '../components/VisuallyHidden/VisuallyHidden';

const meta = {
  title: 'Example/VisuallyHidden',
  component: VisuallyHidden,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof VisuallyHidden>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Button',
  },
};
