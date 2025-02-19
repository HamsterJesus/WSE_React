import "bootstrap/dist/css/bootstrap.min.css";
import Layout from '../components/layout';
import "../style/index.css";

export default function MyApp({ Component, pageProps }) {
  return(
    <Layout>
     <Component {...pageProps} />
     </Layout>
     )
}
