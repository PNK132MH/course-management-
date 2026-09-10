import { useState } from "react";
import "./EditCourses.css";

function EditCourses() {

  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "React for Beginners",
      description: "Learn React step by step.",
      price: 4
    },
    {
      id: 2,
      title: "JavaScript Basics",
      description: "Learn the basics of JavaScript.",
      price: 5
    },
    {
      id: 3,
      title: "HTML & CSS for Beginners",
      description: "Learn how to build websites.",
      price: 3
    }
  ]);

  const [editingCourse, setEditingCourse] = useState(null);

  const handleEdit = (course) => {
    setEditingCourse(course);
  };

  const handleSave = () => {

    setCourses(
      courses.map((course) =>
        course.id === editingCourse.id
          ? editingCourse
          : course
      )
    );

    setEditingCourse(null);

    alert("Course updated!");
  };

  return (
    <main className="edit-courses-page">

      <div className="edit-courses-container">

        <h1>Edit Courses</h1>

        <p>
          Manage your existing courses.
        </p>


        <div className="edit-course-list">

          {courses.map((course) => (

            <div
              className="edit-course-card"
              key={course.id}
            >

              <div>
                <h2>{course.title}</h2>

                <p>
                  {course.description}
                </p>

                <strong>
                  ${course.price}
                </strong>
              </div>


              <button
                onClick={() => handleEdit(course)}
              >
                Edit
              </button>

            </div>

          ))}

        </div>


        {editingCourse && (

          <div className="edit-form">

            <h2>Edit Course</h2>


            <label>Course Title</label>

            <input
              value={editingCourse.title}
              onChange={(event) =>
                setEditingCourse({
                  ...editingCourse,
                  title: event.target.value
                })
              }
            />


            <label>Description</label>

            <textarea
              value={editingCourse.description}
              onChange={(event) =>
                setEditingCourse({
                  ...editingCourse,
                  description: event.target.value
                })
              }
            ></textarea>


            <label>Price</label>

            <input
              type="number"
              value={editingCourse.price}
              onChange={(event) =>
                setEditingCourse({
                  ...editingCourse,
                  price: event.target.value
                })
              }
            />


            <div className="edit-buttons">

              <button
                onClick={handleSave}
              >
                Save Changes
              </button>

              <button
                onClick={() => setEditingCourse(null)}
              >
                Cancel
              </button>

            </div>

          </div>

        )}

      </div>

    </main>
  );
}

export default EditCourses;