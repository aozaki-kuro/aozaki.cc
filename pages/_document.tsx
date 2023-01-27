import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="dotback2 box-border bg-night-blue tracking-tight antialiased selection:bg-sky-600/20 md:tracking-normal">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
