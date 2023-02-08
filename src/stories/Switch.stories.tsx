import React from 'react';

import { Meta, ComponentMeta, ComponentStory, Story } from '@storybook/react';
import Switch from '@/components/Switch';

export default {
  title: 'Switch',
  component: 'Switch',
  argTypes: {
    checked: {
      options: [true, false],
      control: { type: 'radio' }
    }
  }
} as unknown as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  checked: true,
  onColor: '#635FC7',
  offColor: '#A8A4FF',
  leftIcon: 'Hello',
  rightIcon: 'World'
}