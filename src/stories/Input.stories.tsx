import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from '@/components/Input';

export default {
  title: 'Input',
  component: 'Input'
} as unknown as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  titleText: 'Sample Title Text',
  value: 'Hello World',
  placeholder: 'Sample Placeholder',
  isError: false
};
