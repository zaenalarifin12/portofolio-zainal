import '../public/antd.css';

import { createGlobalStyle, ThemeProvider } from 'styled-components'

const theme = {
  // colors: {
  //   primary: '#0070f3',
  // },
}

function MyApp({ Component, pageProps }) {
  return (<>
    {/*<GlobalStyle />*/}
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>)
}

export default MyApp
