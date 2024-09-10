import 'normalize.css';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
  return (
    <html>
      {/*Todo*/}
      {/*<head>*/}
      {/*  <title>Nadia Piquer Martin</title>*/}
      {/*  <link rel='icon' href='/favicon.ico' sizes='any' />*/}
      {/*  <link*/}
      {/*    rel='icon'*/}
      {/*    href='/icon?<generated>'*/}
      {/*    type='image/<generated>'*/}
      {/*    sizes='<generated>'*/}
      {/*  />*/}
      {/*  <link*/}
      {/*    rel='apple-touch-icon'*/}
      {/*    href='/apple-icon?<generated>'*/}
      {/*    type='image/<generated>'*/}
      {/*    sizes='<generated>'*/}
      {/*  />*/}
      {/*</head>*/}
      <body>{children}</body>
    </html>
  );
}
