import { Link } from "react-router-dom";
import "./InstructorDashboard.css";

function InstructorDashboard() {

  const courses = [
    {
      title: "React for Beginners",
      students: 24,
      progress: 68
    },
    {
      title: "JavaScript Basics",
      students: 15,
      progress: 45
    },
    {
      title: "HTML & CSS for Beginners",
      students: 32,
      progress: 82
    }
  ];

  return (
    <main className="instructor-dashboard">

      <div className="instructor-header">

        <div>
          <h1>Instructor Dashboard</h1>

          <p>
            Welcome back! Manage your courses and students.
          </p>
        </div>

        <Link
          to="/create-course"
          className="create-course-btn"
        >
          + Create Course
        </Link>

      </div>


      {/* STATISTICS */}

      <section className="instructor-stats">

        <div className="instructor-stat-card">
          <span>📚</span>

          <div>
            <h2>3</h2>
            <p>My Courses</p>
          </div>
        </div>


        <div className="instructor-stat-card">
          <span>👨‍🎓</span>

          <div>
            <h2>71</h2>
            <p>Total Students</p>
          </div>
        </div>


        <div className="instructor-stat-card">
          <span>📈</span>

          <div>
            <h2>65%</h2>
            <p>Average Progress</p>
          </div>
        </div>


        <div className="instructor-stat-card">
          <span>💰</span>

          <div>
            <h2>$120</h2>
            <p>Total Earnings</p>
          </div>
        </div>

      </section>


      {/* MY COURSES */}

      <section className="instructor-courses">

        <div className="section-title">

          <h2>My Courses</h2>

          <Link to="/courses">
            View All
          </Link>

        </div>


        <div className="instructor-course-list">

          {courses.map((course, index) => (

            <div
              className="instructor-course-card"
              key={index}
            >

              <div className="course-card-info">

                <h3>{course.title}</h3>

                <p>
                  👨‍🎓 {course.students} students
                </p>

              </div>


              <div className="course-progress">

                <div className="course-progress-info">

                  <span>Student Progress</span>

                  <strong>
                    {course.progress}%
                  </strong>

                </div>


                <div className="progress-bar">

                  <div
                    className="progress-fill"
                    style={{
                      width: `${course.progress}%`
                    }}
                  ></div>

                </div>

              </div>


              <Link
                to="/edit-courses"
                className="edit-course-btn"
              >
                Edit
              </Link>

            </div>

          ))}

        </div>

      </section>


      {/* QUICK ACTIONS */}

      <section className="quick-actions">

        <h2>Quick Actions</h2>

        <div className="quick-action-grid">

          <Link
            to="/create-course"
            className="quick-action"
          >
            <span>➕</span>

            <div>
              <h3>Create Course</h3>
              <p>Create a new course for students.</p>
            </div>
          </Link>


          <Link
            to="/students"
            className="quick-action"
          >
            <span>👨‍🎓</span>

            <div>
              <h3>Students</h3>
              <p>View students enrolled in your courses.</p>
            </div>
          </Link>


          <Link
            to="/student-progress"
            className="quick-action"
          >
            <span>📈</span>

            <div>
              <h3>Student Progress</h3>
              <p>See how your students are progressing.</p>
            </div>
          </Link>


          <Link
            to="/earnings"
            className="quick-action"
          >
            <span>💰</span>

            <div>
              <h3>Earnings</h3>
              <p>View your course earnings.</p>
            </div>
          </Link>

        </div>

      </section>

    </main>
  );
}

export default InstructorDashboard;