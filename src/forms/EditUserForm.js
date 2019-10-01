import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const EditUserForm = props => {
  EditUserForm.propTypes = {
    setEditing: PropTypes.func.isRequired,
    currentUser: PropTypes.object.isRequired,
    updateUser: PropTypes.func.isRequired,
  }

  const { setEditing, currentUser, updateUser } = props

  const [user, setUser] = useState(currentUser)

  useEffect(() => {
    setUser(props.currentUser)
  }, [props])

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  const onSubmit = event => {
    event.preventDefault()
    updateUser(user.id, user)
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />

      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />

      <button>Update user</button>

      <button onClick={() => setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm
