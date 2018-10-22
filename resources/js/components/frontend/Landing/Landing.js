import React, { Component } from 'react'

// import classes from './Landing.css'

class Landing extends Component {
	render() {
		return (
			<div className="content">
				<div className="title m-b-md">
					Laravel
				</div>

				<div className="links">
					<a href="https://laravel.com/docs">Documentation</a>
					<a href="https://laracasts.com">Laracasts</a>
					<a href="https://laravel-news.com">News</a>
					<a href="https://nova.laravel.com">Nova</a>
					<a href="https://forge.laravel.com">Forge</a>
					<a href="https://github.com/laravel/laravel">GitHub</a>
				</div>
			</div>
		)
	}
}

export default Landing