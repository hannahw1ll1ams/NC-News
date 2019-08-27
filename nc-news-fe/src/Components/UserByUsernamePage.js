import React, { Component } from 'react';
import * as api from './api';

class UserByUsernamePage extends Component {
  state = {
    user: null,
    username: null
  }

  componentDidMount() {
    this.fetchUserbyUsername();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('updateeeeeee!!')
    if (prevProps.user !== this.props.user) {
      this.fetchArticles();
    }
  }

  fetchUserbyUsername = () => {
    const { username } = this.props;
    console.log(username)
    api.getUser(username).then((user) => {
      this.setState({ user, isLoading: false })
    })
  }
  render() {
    return (
      <div>

      </div>
    );
  }
}

export default UserByUsernamePage;



// const Invoices = props => (
//   <div>
//     {/* ... */}

//     <form
//       onSubmit={event => {
//         event.preventDefault()
//         const id = event.target.elements[0].value
//         event.target.reset()

//         // pretend like we saved a record to the DB here
//         // and then we navigate imperatively
//         navigate(`/invoices/${id}`)
//       }}
//     >
//       <p>
//         <label>
//           New Invoice ID: <input type="text" />
//         </label>
//         <button type="submit">create</button>
//       </p>
//     </form>

//     {props.children}
//   </div>
// )
// navigate(`/invoices/${id}`)
// // becomes
// props.navigate(id)
