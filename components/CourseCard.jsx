import { useNavigate } from "react-router-dom";

function CourseCard({ course, onRemove }) {

  const navigate = useNavigate();


  return (
    <div className="course-card">


      <img
        src={course.image}
        alt={course.title}
        className="course-image"
      />


      <div className="course-content">


        <span className="course-category">
          {course.category}
        </span>


        <h3>
          {course.title}
        </h3>


        <p className="instructor">
          {course.instructor}
        </p>


        <div className="rating">

          <strong>
            {course.rating}
          </strong>

          <span>
            ⭐
          </span>

          <span>
            ({course.students.toLocaleString()})
          </span>

        </div>


        <div className="course-bottom">


          <strong className="price">
            ${course.price}
          </strong>


          <button
            onClick={() =>
              navigate(`/course/${course.id}`)
            }
          >
            View Details
          </button>


        </div>


        {/* =========================
            REMOVE COURSE
        ========================= */}

        {onRemove && (

          <button
            className="remove-course-btn"
            onClick={() => onRemove(course.id)}
          >
            Remove Course
          </button>

        )}

      </div>

    </div>
  );
}

export default CourseCard;