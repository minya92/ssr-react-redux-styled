import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Page from '../layouts/Page'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

export default () => (
    <Page>
        <Title> Hello world!</Title>
        <p>
	        The example shows a server that serves the component living in pages/a.js when the route /b is requested and pages/b.js when the route /a is accessed. This is obviously a non-standard routing strategy. You can see how this custom routing is being made inside server.js.
        </p>
	    <p>
		    More info <a href="https://github.com/zeit/next.js/tree/master/examples/custom-server-express" target="_blank">here</a>
	    </p>
        <Link
            href={{pathname: "/posts", query: {id: "2"}}}
            as="/posts/2"
        >
            <a>post #2</a>
        </Link>
    </Page>
)
