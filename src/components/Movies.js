import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Badge } from 'reactstrap';

class Post extends Component {

  state = { post: [] }

  componentDidMount() {
    axios.get('http://s4.zserg.net:8089/api/v1/movies')
      .then(response => this.setState({ post: response.data }));
  }

  render() {
    return (
      <Fragment>
        { this.state.post && <div className="position-relative">

          <span className="d-block pb-2 mb-0 h6 text-uppercase text-info font-weight-bold">
            Editor's Pick (Movies)
            <Badge pill color="success" className="text-uppercase px-2 py-1 ml-3 mb-1 align-middle" style={{ fontSize: '0.75rem' }}>New</Badge>
          </span>

          <span className="d-block pb-4 h2 text-dark border-bottom border-gray">Getting Started with React !!!</span>

          <article className="pt-5 text-secondary text-justify" style={{ fontSize: '0.9rem', whiteSpace: 'pre-line' }}>
             {this.state.post.map(movie => <div>{movie.title}</div>)}
          </article>

        </div> }
      </Fragment>
    );
  }

}

export default Post;

