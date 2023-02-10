import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import TextArea from '@/components/TextArea';

export default {
  title: 'TextArea',
  component: 'TextArea'
} as unknown as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  titleText: 'Sample Title Text',
  value: 'Hello World',
  placeholder: 'Sample Placeholder',
  isError: false,
  rows: 4
};
