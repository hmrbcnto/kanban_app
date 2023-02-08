import Button from '@/components/Button'
import Checkbox from '@/components/Checkbox'
import ThemeSwitch from '@/components/ThemeSwitch'
import ThemeContextWrapper from '@/context/theme'
import { Inter } from '@next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const checking = () => {
    setIsChecked(!isChecked);
  }
  return (
    <ThemeContextWrapper>
      <div className="flex align-center items-center justify-center">
        <div className="p-6 flex flex-col gap-6">
          <Button
            text="Hello World!"
            type="secondary"
          />
          <ThemeSwitch />
          <Checkbox
            isChecked={isChecked}
            onClick={() => checking()}
            text={'hehehe'}
          />
        </div>
      </div>
    </ThemeContextWrapper>
  )
}
