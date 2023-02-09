import Button from '@/components/Button'
import Checkbox from '@/components/Checkbox'
import Dropdown from '@/components/Dropdown'
import { DropdownItem } from '@/components/Dropdown/Dropdown.types'
import Input from '@/components/Input'
import ThemeSwitch from '@/components/ThemeSwitch'
import ThemeContextWrapper from '@/context/theme'
import { Inter } from '@next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] });

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

export default function Home() {
  const [value, setValue] = useState<string>('');
  return (
    <ThemeContextWrapper>
      <div className="flex align-center items-center justify-center">
        <div className="p-6 flex flex-col gap-6">
          <Button
            text="Hello World!"
            type="secondary"
          />
          <ThemeSwitch />
          <Input 
            value={value}
            onChange={setValue}
            placeholder={'Sample placeholder'}
            titleText="Sample"
          />
          <Dropdown
            id='2'
            key={2}
            dropdownItems={sampleItems}
            onChange={setValue}
            value={value}
            title="Sample Title"
          />
        </div>
      </div>
    </ThemeContextWrapper>
  )
}
