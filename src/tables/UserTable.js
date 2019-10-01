import React from 'react'
import PropTypes from 'prop-types'

const UserTable = props => {
  UserTable.propTypes = {
    users: PropTypes.object.isRequired,
    editRow: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired,
  }

  const { users, editRow, deleteUser } = props

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <button
                  onClick={() => editRow(user)}
                  className="button muted-button"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="button muted-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default UserTable
