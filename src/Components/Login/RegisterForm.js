import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class RegisterForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			firstname: '',
			lastname: '',
			email: '',
		};
	}
	handleUserRegister = e => {
		e.preventDefault();
		const { firstname, lastname, email, username, password } = this.state;
		axios
			.post('/auth/register', {
				firstname,
				lastname,
				email,
				username,
				password,
			})
			.then(res => {
				this.props.history.push('/details');
			})
			.catch(err => {
				console.log(err);
			});
		e.target.firstname.value = '';
		e.target.lastname.value = '';
		e.target.email.value = '';
		e.target.password.value = '';
		e.target.username.value = '';
	};
	handleRegisterInfoUpdate = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	render() {
		return (
			<>
				<p>Sign Up</p>
				<form onSubmit={this.handleUserRegister}>
					<input
						type='text'
						placeholder='first name'
						name='firstname'
						onChange={this.handleRegisterInfoUpdate}
					/>
					<input
						type='text'
						placeholder='last name'
						name='lastname'
						onChange={this.handleRegisterInfoUpdate}
					/>
					<input
						type='text'
						placeholder='email'
						name='email'
						onChange={this.handleRegisterInfoUpdate}
					/>
					<input
						type='text'
						placeholder='username'
						name='username'
						onChange={this.handleRegisterInfoUpdate}
					/>
					<input
						type='password'
						placeholder='password'
						name='password'
						onChange={this.handleRegisterInfoUpdate}
					/>
					<button>Register</button>
				</form>
			</>
		);
	}
}

export default withRouter(RegisterForm);

{/* <label>
<div class='form-group'>
	<label for='exampleInputEmail1'>Email address</label>
	<input
		type='email'
		class='form-control'
		id='exampleInputEmail1'
		aria-describedby='emailHelp'
		placeholder='Enter email'
	/>
	<small id='emailHelp' class='form-text text-muted'>
		We'll never share your email with anyone else.
	</small>
</div>
<div class='form-group'>
	<label for='exampleInputPassword1'>Password</label>
	<input
		type='password'
		class='form-control'
		id='exampleInputPassword1'
		placeholder='Password'
	/>
</div>
<button type='submit' class='btn btn-primary'>
	Submit
</button>
</label> */}
