import '../styles/index.css';
import '../styles/tailwind.css';
import { Header } from 'components/header';
import { Footer } from 'components/footer';

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <Component {...pageProps} />

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
