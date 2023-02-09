import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import Dropdown from '@/components/Dropdown';
import { DropdownItem } from '@/components/Dropdown/Dropdown.types';

export default {
  title: 'Dropdown',
  component: 'Dropdown'
} as unknown as ComponentMeta<typeof Dropdown>;


const sampleItems: DropdownItem[] = [
  {
   id: 1,
   key: 1,
   value: 'Hello',
   display: 'World' 
  },
  {
    id: 2,
    key: 2,
    value: 'Another',
    display: 'One'
  }
];

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: 'Sample ID',
  key: 'Sample Key',
  dropdownItems: sampleItems,
  onChange: () => {},
  value: 'Sample Value',
  title: 'Sample Title'
};
