import { Link } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
  return (
    <main className="admin-page">

      <div className="admin-header">
        <span>ADMINISTRATION</span>
        <h1>Admin Dashboard</h1>
        <p>Manage LearnHub from one place.</p>
      </div>

      {/* STATISTICS */}

      <div className="admin-stats">

        <div className="admin-card">
          <h3>Total Users</h3>
          <strong>128</strong>
        </div>

        <div className="admin-card">
          <h3>Total Courses</h3>
          <strong>24</strong>
        </div>

        <div className="admin-card">
          <h3>Students</h3>
          <strong>105</strong>
        </div>

        <div className="admin-card">
          <h3>Instructors</h3>
          <strong>23</strong>
        </div>

      </div>

      {/* QUICK ACTIONS */}

      <section className="admin-section">

        <h2>Admin Tools</h2>

        <div className="admin-tools">

          <Link to="/admin/users" className="admin-tool">
            <span>👥</span>
            <div>
              <h3>Manage Users</h3>
              <p>View and manage students and instructors.</p>
            </div>
          </Link>

          <Link to="/admin/courses" className="admin-tool">
            <span>📚</span>
            <div>
              <h3>Manage Courses</h3>
              <p>View and manage courses on LearnHub.</p>
            </div>
          </Link>

          <Link to="/admin/approvals" className="admin-tool">
            <span>📝</span>
            <div>
              <h3>Course Approvals</h3>
              <p>Review courses submitted by instructors.</p>
            </div>
          </Link>

          <Link to="/admin/analytics" className="admin-tool">
            <span>📊</span>
            <div>
              <h3>Analytics</h3>
              <p>See simple platform statistics.</p>
            </div>
          </Link>

        </div>

      </section>

      {/* RECENT ACTIVITY */}

      <section className="admin-section">

        <h2>Recent Activity</h2>

        <div className="activity-list">

          <div className="activity">
            <span>👤</span>
            <p>New student registered</p>
          </div>

          <div className="activity">
            <span>👨‍🏫</span>
            <p>New instructor registered</p>
          </div>

          <div className="activity">
            <span>📚</span>
            <p>New course submitted</p>
          </div>

        </div>

      </section>

    </main>
  );
}

export default AdminDashboard;