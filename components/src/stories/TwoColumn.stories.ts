import type { Meta, StoryObj } from '@storybook/react';
import TwoColumnLayout from '../layouts/TwoColumn';

const meta = {
  title: 'Layouts/TwoColumn',
  component: TwoColumnLayout,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof TwoColumnLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
