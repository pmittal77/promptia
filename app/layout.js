import '../styles/global.css';

export const metadata = {
  'title': 'Promptia',
  'description': 'Discover and share best AI prompts'
}
const RootLayout = ({ children }) => {
  return (
    <html lang='en' >
      <body>
        <div className='main' >
          <div className='gradient' > </div>
        </div>
        < main className='app' >
          {children}
        </main>
      </body>
    </html>
    // <div>layout</div>
  );
}

export default RootLayout;