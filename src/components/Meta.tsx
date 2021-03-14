import React from 'react';
import Head from 'next/head';

type MetaProps = {
	title?: string;
	description?: string;
};

export default function Meta({ title, description }: MetaProps) {
	return (
		<Head>
			<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
			<meta name="description" content={description || 'Description'} />
			<title>{title || 'Title'}</title>
		</Head>
	);
}
