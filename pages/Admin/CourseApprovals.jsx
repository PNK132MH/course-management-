import "./CourseApprovals.css";

function CourseApprovals() {

  const pendingCourses = [
    {
      id: 1,
      title: "React Advanced",
      instructor: "David Instructor"
    },
    {
      id: 2,
      title: "JavaScript Backend",
      instructor: "Michael Instructor"
    }
  ];

  const reviewCourse = (title) => {
    alert(`${title} is ready to be reviewed.`);
  };

  return (
    <main className="admin-page">

      <div className="admin-header">
        <span>ADMINISTRATION</span>
        <h1>Course Approvals</h1>
        <p>Review courses submitted by instructors.</p>
      </div>

      <div className="approval-list">

        {pendingCourses.map((course) => (

          <div className="approval-card" key={course.id}>

            <div>
              <h2>{course.title}</h2>
              <p>
                Instructor: {course.instructor}
              </p>
            </div>

            <button
              onClick={() => reviewCourse(course.title)}
            >
              Review
            </button>

          </div>

        ))}

      </div>

    </main>
  );
}

export default CourseApprovals;