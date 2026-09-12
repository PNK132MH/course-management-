import { useNavigate } from "react-router-dom";

function CourseCard({ course, onRemove, continueCourse }) {
  const navigate = useNavigate();

  const courseRoutes = {
    1: "/courses/react",
    2: "/courses/javascript",
    3: "/courses/node",
    4: "/courses/html-css",
    5: "/courses/react-native",
    6: "/courses/github",
  };

  const handleCourseButton = () => {
    if (continueCourse) {
      navigate(courseRoutes[course.id]);
    } else {
      navigate(`/course/${course.id}`);
    }
  };

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

        <h3>{course.title}</h3>

        <p className="instructor">
          {course.instructor}
        </p>

        <div className="rating">
          <strong>{course.rating}</strong>
          <span>⭐</span>
          <span>({course.students.toLocaleString()})</span>
        </div>

        <div className="course-bottom">
          <strong className="price">
            ${course.price}
          </strong>

          <button onClick={handleCourseButton}>
            {continueCourse ? "Continue Course" : "View Details"}
          </button>
        </div>

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