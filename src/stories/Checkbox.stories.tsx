import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import Checkbox from '@/components/Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox
} as unknown as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isChecked: false,
  text: 'Sample Text'
};
