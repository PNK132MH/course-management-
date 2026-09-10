import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateCourse.css";

function CreateCourse() {

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (event) => {

    event.preventDefault();

    if (!title || !description || !category || !price) {
      alert("Please fill in all fields.");
      return;
    }

    alert("Course created successfully!");

    navigate("/instructor-dashboard");
  };

  return (
    <main className="create-course-page">

      <div className="create-course-container">

        <h1>Create a Course</h1>

        <p>
          Create a new course for your students.
        </p>


        <form onSubmit={handleSubmit}>

          <label>Course Title</label>

          <input
            type="text"
            placeholder="Enter course title"
            value={title}
            onChange={(event) =>
              setTitle(event.target.value)
            }
          />


          <label>Description</label>

          <textarea
            placeholder="Describe your course"
            value={description}
            onChange={(event) =>
              setDescription(event.target.value)
            }
          ></textarea>


          <label>Category</label>

          <select
            value={category}
            onChange={(event) =>
              setCategory(event.target.value)
            }
          >
            <option value="">
              Select a category
            </option>

            <option value="Web Development">
              Web Development
            </option>

            <option value="Backend Development">
              Backend Development
            </option>

            <option value="Mobile Development">
              Mobile Development
            </option>

            <option value="Development Tools">
              Development Tools
            </option>

          </select>


          <label>Price</label>

          <input
            type="number"
            placeholder="Enter price"
            value={price}
            onChange={(event) =>
              setPrice(event.target.value)
            }
          />


          <button type="submit">
            Create Course
          </button>

        </form>

      </div>

    </main>
  );
}

export default CreateCourse;