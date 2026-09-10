import "./StudentProgress.css";

function StudentProgress() {

  const students = [
    {
      name: "John",
      course: "React for Beginners",
      progress: 80,
      completed: 19,
      total: 24
    },
    {
      name: "Sarah",
      course: "JavaScript Basics",
      progress: 55,
      completed: 74,
      total: 134
    },
    {
      name: "Mike",
      course: "HTML & CSS for Beginners",
      progress: 35,
      completed: 6,
      total: 18
    },
    {
      name: "David",
      course: "React for Beginners",
      progress: 70,
      completed: 17,
      total: 24
    }
  ];

  return (
    <main className="student-progress-page">

      <div className="student-progress-container">

        <h1>Student Progress</h1>

        <p>
          Track how your students are progressing
          through your courses.
        </p>


        <div className="average-progress">

          <h2>Average Student Progress</h2>

          <strong>60%</strong>

          <div className="student-progress-bar">

            <div
              className="student-progress-fill"
              style={{ width: "60%" }}
            ></div>

          </div>

        </div>


        <div className="student-progress-list">

          {students.map((student, index) => (

            <div
              className="student-progress-card"
              key={index}
            >

              <div className="student-info">

                <h2>{student.name}</h2>

                <p>{student.course}</p>

                <small>
                  {student.completed} of{" "}
                  {student.total} lessons completed
                </small>

              </div>


              <div className="student-progress-right">

                <strong>
                  {student.progress}%
                </strong>

                <div className="student-progress-bar">

                  <div
                    className="student-progress-fill"
                    style={{
                      width: `${student.progress}%`
                    }}
                  ></div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}

export default StudentProgress;