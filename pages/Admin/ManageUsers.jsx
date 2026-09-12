import { useState } from "react";
import "./ManageUsers.css";

const defaultUsers = [
  {
    id: 1,
    name: "John Student",
    email: "john@example.com",
    role: "Student",
    status: "Active"
  },
  {
    id: 2,
    name: "Sarah Student",
    email: "sarah@example.com",
    role: "Student",
    status: "Active"
  },
  {
    id: 3,
    name: "David Instructor",
    email: "david@example.com",
    role: "Instructor",
    status: "Active"
  }
];

function ManageUsers() {
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem(
      "adminUsers"
    );

    return savedUsers
      ? JSON.parse(savedUsers)
      : defaultUsers;
  });

  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [selectedUser, setSelectedUser] =
    useState(null);

  function saveUsers(updatedUsers) {
    setUsers(updatedUsers);

    localStorage.setItem(
      "adminUsers",
      JSON.stringify(updatedUsers)
    );
  }

  function toggleStatus(userId) {
    const updatedUsers = users.map((user) => {
      if (user.id !== userId) {
        return user;
      }

      return {
        ...user,
        status:
          user.status === "Active"
            ? "Disabled"
            : "Active"
      };
    });

    saveUsers(updatedUsers);

    setSelectedUser(null);
  }

  function deleteUser(userId) {
    const confirmed = window.confirm(
      "Are you sure you want to remove this user?"
    );

    if (!confirmed) return;

    const updatedUsers = users.filter(
      (user) => user.id !== userId
    );

    saveUsers(updatedUsers);

    setSelectedUser(null);
  }

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      user.email
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesRole =
      roleFilter === "All" ||
      user.role === roleFilter;

    return matchesSearch && matchesRole;
  });

  return (
    <main className="admin-page">

      <div className="admin-header">
        <span>ADMINISTRATION</span>

        <h1>Manage Users</h1>

        <p>
          View and manage LearnHub users.
        </p>
      </div>


      <div className="users-controls">

        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
        />

        <select
          value={roleFilter}
          onChange={(event) =>
            setRoleFilter(event.target.value)
          }
        >
          <option>All</option>
          <option>Student</option>
          <option>Instructor</option>
        </select>

      </div>


      <div className="users-table">

        <div className="user-row user-header">

          <strong>Name</strong>

          <strong>Email</strong>

          <strong>Role</strong>

          <strong>Status</strong>

          <strong>Action</strong>

        </div>


        {filteredUsers.length > 0 ? (

          filteredUsers.map((user) => (

            <div
              className="user-row"
              key={user.id}
            >

              <span>
                {user.name}
              </span>

              <span>
                {user.email}
              </span>

              <span className="role-badge">
                {user.role}
              </span>

              <span
                className={
                  user.status === "Active"
                    ? "status-badge active"
                    : "status-badge disabled"
                }
              >
                {user.status}
              </span>

              <button
                className="manage-user-btn"
                onClick={() =>
                  setSelectedUser(user)
                }
              >
                Manage
              </button>

            </div>

          ))

        ) : (

          <div className="no-users">
            No users found.
          </div>

        )}

      </div>


      {selectedUser && (

        <div
          className="user-modal-overlay"
          onClick={() =>
            setSelectedUser(null)
          }
        >

          <div
            className="user-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              className="user-modal-close"
              onClick={() =>
                setSelectedUser(null)
              }
            >
              ×
            </button>

            <h2>
              {selectedUser.name}
            </h2>

            <p className="user-email">
              {selectedUser.email}
            </p>


            <div className="user-details">

              <div>
                <strong>Role</strong>
                <span>
                  {selectedUser.role}
                </span>
              </div>

              <div>
                <strong>Status</strong>
                <span>
                  {selectedUser.status}
                </span>
              </div>

            </div>


            <div className="user-modal-actions">

              <button
                className="status-button"
                onClick={() =>
                  toggleStatus(selectedUser.id)
                }
              >
                {selectedUser.status === "Active"
                  ? "Disable User"
                  : "Enable User"}
              </button>

              <button
                className="delete-user-button"
                onClick={() =>
                  deleteUser(selectedUser.id)
                }
              >
                Remove User
              </button>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}

export default ManageUsers;