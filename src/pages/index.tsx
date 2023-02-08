import Button from '@/components/Button'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex align-center items-center justify-center">
      <div className="p-6">
        <Button
          text="Hello World!"
        />
      </div>
    </div>
  )
}
