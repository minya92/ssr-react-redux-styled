import Head from 'next/head'
import ActiveLink from '../components/ActiveLink'

export default ({ children, title = 'Site title' }) => (
	<div>
		<Head>
			<title>{ title }</title>
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>
		<header>
			<nav>
				<ActiveLink href="/">Home</ActiveLink> |
				<ActiveLink href="/b" as="/a">A page</ActiveLink> |
				<ActiveLink href="/a" as="/b">B page</ActiveLink> |
				<ActiveLink href="/counter">Counter</ActiveLink> |
				<ActiveLink href="/clock">Clock</ActiveLink> |
				<ActiveLink href="/posts">Posts</ActiveLink>
			</nav>
		</header>

		{ children }
	</div>
)