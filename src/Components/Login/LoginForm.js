import React, { Component } from 'react';
import axios from 'axios';

import { withRouter } from 'react-router-dom';

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
		};
	}

	handleLoginInfoUpdate = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	handleUserLogin = e => {
		e.preventDefault();
		const { username, password } = this.state;
		axios
			.post('/auth/login', { username, password })
			.then(res => {
				this.props.history.push('/details');
			})
			.catch(err => {
				console.log(err);
			});
		e.target.username.value = '';
		e.target.password.value = '';
	};
	render() {
		return (
			// <>
			// 	<p>Login</p>
			// 	<form onSubmit={this.handleUserLogin}>
			// 		<input
			// 			type='text'
			// 			name='username'
			// 			placeholder='username'
			// 			onChange={this.handleLoginInfoUpdate}
			// 		/>
			// 		<input
			// 			type='password'
			// 			name='password'
			// 			placeholder='password'
			// 			onChange={this.handleLoginInfoUpdate}
			// 		/>
			// 		<button>Log In</button>
			// 	</form>
			// </>
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
		);
	}
}

export default withRouter(LoginForm);
