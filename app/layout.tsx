
import './globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>For Context</title>
      </head>
      <body>      
        {children}
      </body>
    </html>
  );
}
