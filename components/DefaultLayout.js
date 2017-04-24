import React from 'react'

const Layout = (props) => (
	<div>
		{props.children}
		<style jsx global>{`
			body{
				margin: 0; 
				padding: 0;
				background: #E1E1E1;
			}
		`}</style>
	</div>

)
export default Layout
