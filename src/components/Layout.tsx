import Meta from './Meta';
import TopNavBar from './TopNavBar';

export default function Layout({ children }: any) {
	return (
		<div>
			<Meta />
			<TopNavBar />
			<div>{children}</div>
		</div>
	);
}
