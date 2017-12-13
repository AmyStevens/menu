
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { isAuthenticated } from '../Fakeauth';
import { Segment, Header } from 'semantic-ui-react';
import axios from 'axios';

class Dashboard extends Component {
state = { products: [] };

componentDidMount() {
  axios.get('/api/products')
    .then( res => {
      console.log(res);
    })
    .catch( err => {

      console.log(err);
  });
}

render() {
  if(isAuthenticated())
    return(
      <Segment basic>
        <Header as='h3'>You are logged in!</Header>
      </Segment>
    )
  else
    return(<Redirect to='/login' />);
}
}

export default Dashboard;
