import type { Meta, StoryObj } from '@storybook/react';
import Text from '../components/Text/Text';

const meta = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    content: { control: 'text' },
    linkLabel: { control: 'text' },
    color: { control: 'color' },
    linkHoverColor: { control: 'color' },
    link: { control: 'text' },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'Special thanks to',
    linkLabel: 'James Park',
    color: '#666666',
    linkHoverColor: '#0297f5',
    link: 'www.google.com',
  },
};
