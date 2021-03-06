import React, { Component } from 'react';
import axios from 'axios';
import { updateUser } from '../../redux/reducers/userReducer';
import { connect } from 'react-redux';

import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

class Login extends Component {
	componentDidMount() {
		axios.get('/auth/user').then(res => {
			this.props.updateUser(res.data);
			this.props.history.push('/details');
		});
		this.props.id && this.props.history.push('/details');
	}
	render() {
		return (
			<div className='body' id='component-body'>
				<div className='register-form-body'>
					<RegisterForm />
				</div>
<br/>
				<div className='login-form-body'>
					<LoginForm />
				</div>
			</div>
		);
	}
}

// conditionally render register / login forms

function mapStateToProps(reduxState) {
	return reduxState;
}

export default connect(
	mapStateToProps,
	{ updateUser },
)(Login);
