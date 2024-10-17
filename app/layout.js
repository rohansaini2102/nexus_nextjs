// app/layout.js
import './globals.css';

export const metadata = {
  title: 'Nexus Tools',
  description: 'Empowering professionals with cutting-edge tools.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
