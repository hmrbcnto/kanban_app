import ModalContextWrapper from '@/context/modal';
import ThemeContextWrapper from '@/context/theme';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeContextWrapper>
      <ModalContextWrapper>
        <Component {...pageProps} />
      </ModalContextWrapper>
    </ThemeContextWrapper>
  )
}

export default App;
