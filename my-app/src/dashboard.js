import React from 'react';
import { Route,Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import App from './app';
import { logout } from './auth.redux';


function Erying(){
    return <h2>二营</h2>
}
function Sanying(){
    return <h2>三营</h2>
}
@connect(
	state=>state.auth,
	{logout}
)
class Dashboard extends React.Component{
	render() {
		const redirectToLogin = <Redirect to='/login'></Redirect>
		const match = this.props.match;
		const app = (
			<div>
				<h1>even test</h1>
				{this.props.isAuth ? <button onClick={this.props.logout}>退出</button>: null}
				 <ul>
		            <li>
		                <Link to={`${match.url}/`}>一营</Link>
		            </li>
		            <li>
		                <Link to={`${match.url}/erying`}>二营</Link>
		            </li>
		            <li>
		                <Link to={`${match.url}/sanying`}>三营</Link>
		            </li>
		        </ul>
					<Route path={`${match.url}/`} exact component={App}></Route>
			        <Route path={`${match.url}/erying`} component={Erying}></Route>
			        <Route path={`${match.url}/sanying`} component={Sanying}></Route>
			</div>
		)
		return this.props.isAuth ? app: redirectToLogin
	}
}
export default Dashboard