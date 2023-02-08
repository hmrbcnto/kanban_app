import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from '@/components/Button';

export default {
  title: 'Button',
  component: 'Button'
} as unknown as ComponentMeta<typeof Button>;


export const Primary: ComponentStory<typeof Button> = () => (
  <div className="parent_story_div">
    <div className="child_story_div">
      <Button 
        text="Primary Large"
      />
      <Button 
        type="secondary"
        text="Secondary Large"
      />
      <Button 
        type="destructive"
        text="Destructive Large"
      />
    </div>
    <div className="child_story_div">
      <Button 
        text="Primary Small"
        size="small"
      />
      <Button 
        type="secondary"
        text="Secondary Small"
        size="small"
      />
      <Button 
        type="destructive"
        text="Destructive Small"
        size="small"
      /> 
    </div>
  </div>
)
