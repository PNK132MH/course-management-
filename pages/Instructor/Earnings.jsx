import "./Earnings.css";

function Earnings() {

  const earnings = [
    {
      course: "React for Beginners",
      students: 24,
      earnings: 48
    },
    {
      course: "JavaScript Basics",
      students: 15,
      earnings: 45
    },
    {
      course: "HTML & CSS for Beginners",
      students: 32,
      earnings: 27
    }
  ];

  return (
    <main className="earnings-page">

      <div className="earnings-container">

        <h1>Earnings</h1>

        <p>
          View your course earnings.
        </p>


        <section className="earnings-summary">

          <div className="earning-card">

            <span>💰</span>

            <h2>$120</h2>

            <p>Total Earnings</p>

          </div>


          <div className="earning-card">

            <span>📅</span>

            <h2>$65</h2>

            <p>This Month</p>

          </div>


          <div className="earning-card">

            <span>👨‍🎓</span>

            <h2>71</h2>

            <p>Paying Students</p>

          </div>

        </section>


        <section className="earnings-courses">

          <h2>Course Earnings</h2>

          {earnings.map((course, index) => (

            <div
              className="earning-course"
              key={index}
            >

              <div>

                <h3>{course.course}</h3>

                <p>
                  {course.students} students
                </p>

              </div>

              <strong>
                ${course.earnings}
              </strong>

            </div>

          ))}

        </section>

      </div>

    </main>
  );
}

export default Earnings;