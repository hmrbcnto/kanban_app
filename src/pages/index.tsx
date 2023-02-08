import Button from '@/components/Button'
import ThemeSwitch from '@/components/ThemeSwitch'
import ThemeContextWrapper from '@/context/theme'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ThemeContextWrapper>
      <div className="flex align-center items-center justify-center">
        <div className="p-6 flex flex-col gap-6">
          <Button
            text="Hello World!"
            type="secondary"
          />
          <ThemeSwitch />
        </div>
      </div>
    </ThemeContextWrapper>
  )
}
