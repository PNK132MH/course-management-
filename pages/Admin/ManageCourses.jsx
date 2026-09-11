import courses from "../../data/courseData";
import "./ManageCourses.css";

function ManageCourses() {

  return (
    <main className="admin-page">

      <div className="admin-header">
        <span>ADMINISTRATION</span>
        <h1>Manage Courses</h1>
        <p>View courses available on LearnHub.</p>
      </div>

      <div className="admin-course-grid">

        {courses.map((course) => (

          <div className="admin-course-card" key={course.id}>

            <h2>{course.title}</h2>

            <p>{course.category}</p>

            <strong>
              ${course.price}
            </strong>

            <button
              onClick={() =>
                alert("Course management will be connected to the backend later.")
              }
            >
              Manage Course
            </button>

          </div>

        ))}

      </div>

    </main>
  );
}

export default ManageCourses;