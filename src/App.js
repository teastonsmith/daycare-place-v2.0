import React from 'react';
import router from './router';
import './Reset.css';
import './App.css';
import { HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './Components/Navbar/Navbar';

const App = () => (
	<HashRouter>
		<Navbar />
		{router}
	</HashRouter>
);

function mapStateToProps(state) {
	return {
		key: state.store,
	};
}

export default connect(mapStateToProps)(App);
