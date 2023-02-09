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
        isDisabled={true}
        text="Disabled Primary Large"
      />
      <Button
        isDisabled={true} 
        type="secondary"
        text="Disabled Secondary Large"
      />
      <Button 
        isDisabled={true}
        type="destructive"
        text="Disabled Destructive Large"
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
    <div className="child_story_div">
      <Button 
        isDisabled={true}
        text="Disabled Primary Small"
        size="small"
      />
      <Button 
        isDisabled={true}
        type="secondary"
        text="Disabled Secondary Small"
        size="small"
      />
      <Button 
        isDisabled={true}
        type="destructive"
        text="Disabled Destructive Small"
        size="small"
      /> 
    </div>
  </div>
)
