import React, { Component } from 'react';
import './index';
import Preloader from './Preloader';

class App extends Component {
	render() {
		return (
			<div className="container">
        {/* <Preloader /> */}
        <header>
          <div  className="header-section section-title">
            <h2>HEADER</h2>
          </div>
        </header>
        <main>
          <div className="row">
            <div className="col">
              <div className="track-box">
                <div className="title"><a href="#">Title</a></div>
                <img src="https://colorlib.com/preview/theme/thegazette/img/blog-img/17.jpg" alt="" />
              </div>
            </div>
            <div className="col">
              <div className="track-box">
                <div className="title"><a href="#">Title</a></div>
                <img src="https://colorlib.com/preview/theme/thegazette/img/blog-img/16.jpg" alt="" />
              </div>
            </div>
            <div className="col">
              <div className="track-box">
                <div className="title"><a href="#">Title</a></div>
                <img src="https://colorlib.com/preview/theme/thegazette/img/blog-img/13.jpg" alt="" />
              </div>
            </div>
          </div>
        </main>
        <footer>
          <div className="footer-section section-title"> 
            <h2>Last fm</h2>
          </div>
        </footer>
      </div>
		);
	}
}

export default App;
