import type { Meta, StoryObj } from '@storybook/react';
import Text from '../components/Text/Text';

const meta = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: '#666666',
    content: 'Special thanks to',
    link: 'www.google.com',
    linkLabel: 'James Park',
  },
};
