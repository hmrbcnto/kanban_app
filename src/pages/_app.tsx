import BoardContextWrapper from '@/context/board';
import ModalContextWrapper from '@/context/modal';
import ThemeContextWrapper from '@/context/theme';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeContextWrapper>
      <BoardContextWrapper>
        <ModalContextWrapper>
          <Component {...pageProps} />
        </ModalContextWrapper>
      </BoardContextWrapper>
    </ThemeContextWrapper>
  )
}

export default App;
