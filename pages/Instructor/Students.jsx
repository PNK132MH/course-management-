import "./Students.css";

function Students() {

  const students = [
    {
      name: "John",
      email: "john@example.com",
      course: "React for Beginners",
      progress: 80
    },
    {
      name: "Sarah",
      email: "sarah@example.com",
      course: "JavaScript Basics",
      progress: 55
    },
    {
      name: "Mike",
      email: "mike@example.com",
      course: "HTML & CSS for Beginners",
      progress: 35
    },
    {
      name: "David",
      email: "david@example.com",
      course: "React for Beginners",
      progress: 70
    }
  ];

  return (
    <main className="students-page">

      <div className="students-container">

        <h1>My Students</h1>

        <p>
          View students enrolled in your courses.
        </p>


        <div className="students-table-container">

          <table>

            <thead>

              <tr>
                <th>Student</th>
                <th>Email</th>
                <th>Course</th>
                <th>Progress</th>
              </tr>

            </thead>


            <tbody>

              {students.map((student, index) => (

                <tr key={index}>

                  <td>
                    <strong>
                      {student.name}
                    </strong>
                  </td>

                  <td>
                    {student.email}
                  </td>

                  <td>
                    {student.course}
                  </td>

                  <td>
                    {student.progress}%
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </main>
  );
}

export default Students;