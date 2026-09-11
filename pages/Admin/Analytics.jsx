import "./Analytics.css";

function Analytics() {

  return (
    <main className="admin-page">

      <div className="admin-header">
        <span>ADMINISTRATION</span>
        <h1>Analytics</h1>
        <p>Simple statistics about LearnHub.</p>
      </div>

      <div className="analytics-grid">

        <div className="analytics-card">
          <h3>Total Users</h3>
          <strong>128</strong>
        </div>

        <div className="analytics-card">
          <h3>Students</h3>
          <strong>105</strong>
        </div>

        <div className="analytics-card">
          <h3>Instructors</h3>
          <strong>23</strong>
        </div>

        <div className="analytics-card">
          <h3>Courses</h3>
          <strong>24</strong>
        </div>

      </div>

      <div className="analytics-info">

        <h2>Platform Overview</h2>

        <p>
          LearnHub currently has more students than instructors
          and offers courses in different development categories.
        </p>

      </div>

    </main>
  );
}

export default Analytics;