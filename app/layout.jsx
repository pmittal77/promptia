import '@styles/global.css';
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  'title': 'Promptia',
  'description': 'Discover and share best AI prompts'
}
const RootLayout = ({ children }) => {
  return (
    <html lang='en' >
      <body>
        <Provider>

          <div className='main' >
            <div className='gradient' > </div>
          </div>
          < main className='app' >
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
    // <div>layout</div>
  );
}

export default RootLayout;