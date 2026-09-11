import "./ManageUsers.css";

function ManageUsers() {

  const users = [
    {
      id: 1,
      name: "John Student",
      email: "john@example.com",
      role: "Student"
    },
    {
      id: 2,
      name: "Sarah Student",
      email: "sarah@example.com",
      role: "Student"
    },
    {
      id: 3,
      name: "David Instructor",
      email: "david@example.com",
      role: "Instructor"
    }
  ];

  return (
    <main className="admin-page">

      <div className="admin-header">
        <span>ADMINISTRATION</span>
        <h1>Manage Users</h1>
        <p>View students and instructors.</p>
      </div>

      <div className="users-table">

        <div className="user-row user-header">
          <strong>Name</strong>
          <strong>Email</strong>
          <strong>Role</strong>
          <strong>Action</strong>
        </div>

        {users.map((user) => (

          <div className="user-row" key={user.id}>

            <span>{user.name}</span>

            <span>{user.email}</span>

            <span className="role-badge">
              {user.role}
            </span>

            <button
              onClick={() =>
                alert("User management will be connected to the backend later.")
              }
            >
              Manage
            </button>

          </div>

        ))}

      </div>

    </main>
  );
}

export default ManageUsers;