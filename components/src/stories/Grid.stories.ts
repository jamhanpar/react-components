import type { Meta, StoryObj } from '@storybook/react';
import Grid from '../layouts/Grid';

const meta = {
  title: 'Layouts/Grid',
  component: Grid,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    autoFlow: { control: 'text' },
    columns: { control: 'number' },
    colSpecs: { control: 'text' },
    rowSpecs: { control: 'text' },
    rowSpacing: { control: 'text' },
    colSpacing: { control: 'text' },
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    autoFlow: 'row',
    columns: 2,
    colSpecs: '',
    rowSpecs: '',
    rowSpacing: '',
    colSpacing: '',
  },
};
