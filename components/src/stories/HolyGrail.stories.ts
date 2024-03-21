import type { Meta, StoryObj } from '@storybook/react';
import HolyGrailLayout from '../layouts/HolyGrail';

const meta = {
  title: 'Layouts/Holy Grail',
  component: HolyGrailLayout,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    children: { control: 'array' },
  },
} satisfies Meta<typeof HolyGrailLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Company Name',
    children: ['Main Content'],
  },
};
