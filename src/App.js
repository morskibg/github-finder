import { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";

import axios from "axios";
import Users from "./components/users/Users";
import Search from "./components/users/Search";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   // axios
  //   //   .get("https://api.github.com/users")
  //   //   .then((res) => console.log(res.data));
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: res.data, loading: false });
  //   // using fetch
  //   // fetch("https://api.github.com/users")
  //   //   .then((res) => res.json())
  //   //   .then((data) => this.setState({ users: data }))
  //   //   .catch((e) => console.log(e));
  //   // try {
  //   //   const res = await fetch("https://api.github.com/users");
  //   //   const users = await res.json();
  //   //   this.setState({ users: users });
  //   // } catch (error) {
  //   //   console.log(error);
  //   // }
  // }
  searchUsers = async (text) => {
    this.setState({ loading: true });

    const filteredUsers = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: filteredUsers.data.items, loading: false });
  };
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };
  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={this.state.users.length > 0}
          />
          <Users users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
