import 'tailwindcss/tailwind.css';
import Layout from '../components/layout';

function Zmyslo({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default Zmyslo;
