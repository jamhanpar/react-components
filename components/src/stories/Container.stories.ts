import React, { ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Container from '../components/Container/Container';

const meta = {
  title: 'Layouts/Container',
  component: Container,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    classname: { control: 'text' },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Article: Story = {
  args: {
    classname: 'container',
  },
};

export const Navigation: Story = {
  args: {
    classname: 'container',
  },
};
