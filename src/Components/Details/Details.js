import React, { Component } from 'react';
import axios from 'axios';

import { updateUser, clearUser } from '../../redux/reducers/userReducer';
import { connect } from 'react-redux';

class Details extends Component {
	componentDidMount() {
		axios
			.get('/auth/details')
			.then(res => {
				this.props.updateUser(res.data);
			})
			.catch(err => {
				this.props.history.push('/login');
			});
	}
	handleUserLogout = () => {
		axios.get('/auth/logout').then(res => {
			this.props.clearUser();
			this.props.history.push('/');
		});
	};
	render() {
		return (
			<div>
				<p>Details</p>
				{this.props.firstname && (
					<>
						<p>{this.props.firstname}</p>
						<p>${this.props.balance}</p>
						<button onClick={this.handleUserLogout}>Logout</button>?
					</>
				)}
			</div>
		);
	}
}

function mapStateToProips(reduxState) {
	return {
		firstname: reduxState.firstname,
		balance: reduxState.balance,
	};
}
const mapDispatchToProps = {
	updateUser,
	clearUser,
};

export default connect(
	mapStateToProips,
	mapDispatchToProps,
)(Details);
