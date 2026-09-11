import { useNavigate } from "react-router-dom";
import "./InstructorWelcome.css";

function InstructorWelcome() {

  const navigate = useNavigate();


  const handleCreate=() => {
        localStorage.setItem(
      "instructorWelcomeCompleted",
      "true"
    );
    navigate("/create-course");
  };


  return (

    <main className="instructor-welcome-page">

      <section className="instructor-welcome-card">

        <div className="welcome-icon">
          🎓
        </div>


        <p className="welcome-label">
          WELCOME TO LEARNHUB
        </p>


        <h1>
          Welcome, Instructor!
        </h1>


        <p className="welcome-description">
          Your instructor account has been created
          successfully. You can now create courses,
          manage your students, track their progress,
          and grow your teaching profile.
        </p>


        <div className="welcome-features">

          <div>
            <span>📚</span>

            <div>
              <strong>Create Courses</strong>

              <p>
                Build courses and share your knowledge.
              </p>
            </div>
          </div>


          <div>
            <span>👨‍🎓</span>

            <div>
              <strong>Manage Students</strong>

              <p>
                View your students and their progress.
              </p>
            </div>
          </div>


          <div>
            <span>💰</span>

            <div>
              <strong>Track Earnings</strong>

              <p>
                Keep track of your course earnings.
              </p>
            </div>
          </div>

        </div>
           <button
          className="create-course-btn"
          onClick={handleCreate}
        >
          + Create Course
        </button>

      </section>

    </main>
  );
}

export default InstructorWelcome;