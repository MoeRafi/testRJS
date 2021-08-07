import React, {Component} from 'react'

const heading = <h1>Heading</h1>
const show = true
export class App extends Component {
	constructor () {
		super()
	}

	render () {
    	return(
    		<div>
				{show ? 
					<React.Fragment>
						{heading}
						<p>lorem</p>
					</React.Fragment> : ''}
				<p>The result of 2 * 2 is : {2 * 2}</p>
				<h2>Welcome to class component</h2>
			</div>
    	)
	}
}

export default App

let h1 = document.createElement('h1')
h1.innerHTML = "Welcome to Codethunder"
document.getElementById('root')