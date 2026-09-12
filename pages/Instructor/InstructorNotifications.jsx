import "./InstructorNotifications.css";


function InstructorNotifications() {

  const currentUser = JSON.parse(
    localStorage.getItem("currentUser") || "null"
  );


  const approvedCourses = JSON.parse(
    localStorage.getItem("approvedCourses") || "[]"
  );


  const rejectedCourses = JSON.parse(
    localStorage.getItem("rejectedCourses") || "[]"
  );


  /* =========================
     FIND THIS INSTRUCTOR'S
     APPROVED COURSES
  ========================= */

  const myApprovedCourses = approvedCourses.filter(
    (course) => {

      if (
        currentUser?.email &&
        course.instructorEmail
      ) {
        return (
          course.instructorEmail ===
          currentUser.email
        );
      }

      return (
        course.instructor ===
        currentUser?.name
      );

    }
  );


  /* =========================
     FIND THIS INSTRUCTOR'S
     REJECTED COURSES
  ========================= */

  const myRejectedCourses = rejectedCourses.filter(
    (course) => {

      if (
        currentUser?.email &&
        course.instructorEmail
      ) {
        return (
          course.instructorEmail ===
          currentUser.email
        );
      }

      return (
        course.instructor ===
        currentUser?.name
      );

    }
  );


  const totalNotifications =
    myApprovedCourses.length +
    myRejectedCourses.length;


  return (

    <main className="instructor-notifications-page">

      <div className="notifications-container">


        {/* =========================
            HEADER
        ========================= */}

        <div className="notifications-header">

          <span>INSTRUCTOR</span>

          <h1>Notifications</h1>

          <p>
            See updates about your submitted courses.
          </p>

        </div>


        {/* =========================
            EMPTY STATE
        ========================= */}

        {totalNotifications === 0 && (

          <div className="notifications-empty">

            <div className="empty-icon">
              ✓
            </div>

            <h2>No notifications yet</h2>

            <p>
              You will see an update here when an
              admin reviews one of your courses.
            </p>

          </div>

        )}


        {/* =========================
            APPROVED COURSES
        ========================= */}

        {myApprovedCourses.length > 0 && (

          <section className="notification-section">

            <h2>
              Approved Courses
            </h2>


            <div className="notification-list">

              {myApprovedCourses.map((course) => (

                <div
                  className="notification-card approved"
                  key={course.id}
                >

                  <div className="notification-icon">
                    ✓
                  </div>


                  <div className="notification-content">

                    <h3>
                      Course approved
                    </h3>

                    <p>
                      Your course{" "}
                      <strong>
                        {course.title}
                      </strong>{" "}
                      has been approved by the admin.
                    </p>

                    {course.approvedAt && (

                      <small>
                        Reviewed on{" "}
                        {new Date(
                          course.approvedAt
                        ).toLocaleDateString()}
                      </small>

                    )}

                  </div>

                </div>

              ))}

            </div>

          </section>

        )}


        {/* =========================
            REJECTED COURSES
        ========================= */}

        {myRejectedCourses.length > 0 && (

          <section className="notification-section">

            <h2>
              Rejected Courses
            </h2>


            <div className="notification-list">

              {myRejectedCourses.map((course) => (

                <div
                  className="notification-card rejected"
                  key={course.id}
                >

                  <div className="notification-icon">
                    !
                  </div>


                  <div className="notification-content">

                    <h3>
                      Course rejected
                    </h3>

                    <p>
                      Your course{" "}
                      <strong>
                        {course.title}
                      </strong>{" "}
                      was rejected by the admin.
                    </p>

                    {course.rejectedAt && (

                      <small>
                        Reviewed on{" "}
                        {new Date(
                          course.rejectedAt
                        ).toLocaleDateString()}
                      </small>

                    )}

                  </div>

                </div>

              ))}

            </div>

          </section>

        )}

      </div>

    </main>

  );
}


export default InstructorNotifications;