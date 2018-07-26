
import React from 'react';
import { connect } from 'react-redux';
import {addGun,removeGun,addGunAsync} from './index.redux'
class App extends React.Component{
	render(){
		return (
				<div>
					<h1>现在有机枪{this.props.num}把</h1>
					<button onClick = {this.props.addGun} >申请</button>
					<button onClick = {this.props.removeGun} >回收</button>
					<button onClick = {this.props.addGunAsync} >异步申请</button>
					
				</div>
			)
	}
}
const mapStatetoProps = (state)=>{
	return {num:state.counter}
}
const actionCreators = {addGun,removeGun,addGunAsync}
App = connect(mapStatetoProps,actionCreators)(App)
export default App