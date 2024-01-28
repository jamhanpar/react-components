import type { Meta, StoryObj } from '@storybook/react';
import SpookyButton from '../components/Button/SpookyButton';

const meta = {
  title: 'Example/Button/Spooky',
  component: SpookyButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof SpookyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Spooky: Story = {
  args: {
    label: 'Spooky Button',
  },
};
