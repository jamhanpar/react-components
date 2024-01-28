import type { Meta, StoryObj } from '@storybook/react';
import IconInput from '../components/Input/IconInput';

const meta = {
  title: 'Components/Icon Input',
  component: IconInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: ['search', 'at-sign', 'chevron-down'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
    placeholder: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof IconInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Search…',
    label: 'Search',
    icon: 'search',
    size: 'small',
  },
};
