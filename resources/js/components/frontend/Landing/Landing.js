import React, { Component } from 'react'

import classes from './Landing.css'

class Landing extends Component {
	render () {
		return (
			<div className="flex-center position-ref full-height">
				{/* @if (Route::has('login'))
					<div className="top-right links">
						@auth
							<a href="{{ url('/home') }}">Home</a>
						@else
							<a href="{{ route('login') }}">Login</a>

							@if (Route::has('register'))
								<a href="{{ route('register') }}">Register</a>
							@endif
						@endauth
					</div>
				@endif */}

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
			</div>
		)
	}
}

export default Landing