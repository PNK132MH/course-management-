import { useState } from "react";
import "./InstructorProfile.css";
import instructorImage from "../../src/assets/image.png";

function InstructorProfile() {

  const [name, setName] = useState("Instructor Name");
  const [email, setEmail] = useState("instructor@example.com");
  const [bio, setBio] = useState(
    "Frontend developer and instructor."
  );
  const [expertise, setExpertise] = useState(
    "React, JavaScript, HTML & CSS"
  );

  const [photo, setPhoto] = useState(instructorImage);

  const handlePhotoChange = (event) => {

    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const imageUrl = URL.createObjectURL(file);

    setPhoto(imageUrl);
  };

  const handleSave = (event) => {

    event.preventDefault();

    alert("Profile updated!");
  };

  return (
    <main className="instructor-profile-page">

      <div className="instructor-profile-container">

        <h1>Instructor Profile</h1>

        <p>
          Manage your instructor information.
        </p>


        {/* PHOTO */}

        <section className="instructor-photo-section">

          <div className="instructor-photo">

            {photo ? (

              <img
                src={photo}
                alt="Instructor"
              />

            ) : (

              <span>👤</span>

            )}

          </div>


          <div>

            <h2>Profile Photo</h2>

            <label className="photo-button">

              Choose Photo

              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
              />

            </label>

          </div>

        </section>


        {/* PROFILE FORM */}

        <form
          className="instructor-profile-form"
          onSubmit={handleSave}
        >

          <label>Name</label>

          <input
            type="text"
            value={name}
            onChange={(event) =>
              setName(event.target.value)
            }
          />


          <label>Email</label>

          <input
            type="email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
          />


          <label>Instructor Bio</label>

          <textarea
            value={bio}
            onChange={(event) =>
              setBio(event.target.value)
            }
          ></textarea>


          <label>Expertise</label>

          <input
            type="text"
            value={expertise}
            onChange={(event) =>
              setExpertise(event.target.value)
            }
          />


          <button type="submit">
            Save Changes
          </button>

        </form>

      </div>

    </main>
  );
}

export default InstructorProfile;