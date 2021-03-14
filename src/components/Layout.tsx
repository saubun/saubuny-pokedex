import Meta from './Meta';

export default function Layout({ children }: any) {
	return (
		<div className="main">
			<Meta />
			<div className="container">
				<main>{children}</main>
			</div>
		</div>
	);
}
