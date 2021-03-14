import { AppProps } from 'next/app';
import 'bootswatch/dist/cosmo/bootstrap.min.css';
import Layout from '../components/Layout';
import '../styles/global.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
