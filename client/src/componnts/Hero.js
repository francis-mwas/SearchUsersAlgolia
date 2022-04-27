import React, { useEffect } from 'react';
import axios from 'axios';
// import { UserStateContext } from '../store';
// import { useUserStateDispatch } from '../hooks';
// import { getAllUsers } from '../actions';

const Hero = () => {
  // const usersList = useContext(UserStateContext);
  const [users, setUsers] = React.useState();
  // const dispatch = useUserStateDispatch();
  console.log('Users list is here: ', users);
  const getUserData = async () => {
    const API_URL = 'http://localhost:5000/api/v1/';
    const { data } = await axios.get(`${API_URL}users/`);
    setUsers(data);
  };
  useEffect(() => {
    // getAllUsers(dispatch);
    getUserData();
  }, []);
  return (
    <div className="container-lg">
      <h1>
        The number of registered users so is:{' '}
        {users ? users.userData.length : 0}
      </h1>
      {users
        ? users.userData.map((user) => (
            <div className="card my-3" key={user._id}>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">FirstName: {user.firstName}</li>
                <li className="list-group-item">LAstName: {user.lastName}</li>
                <li className="list-group-item">UserName: {user.userName}</li>
                <li className="list-group-item">Email: {user.email}</li>
              </ul>
            </div>
          ))
        : 0}
    </div>
  );
};

export default Hero;
