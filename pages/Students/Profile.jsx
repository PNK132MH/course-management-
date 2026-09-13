import { useState } from "react";
import "../Instructor/InstructorProfile.css";

function Profile() {

  const [name, setName] = useState("Student Name");
  const [email, setEmail] = useState("Student@example.com");
  const [bio, setBio] = useState("Passionate Student.");

  const [photo, setPhoto] = useState(null);

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

        <h1>Student Profile</h1>

        <p>
          Manage your Information.
        </p>

        {/* PHOTO */}

        <section className="instructor-photo-section">

          <div className="instructor-photo">

            {photo ? (
              <img
                src={photo}
                alt="Student"
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

          <label>Student Bio</label>

          <textarea
            value={bio}
            onChange={(event) =>
              setBio(event.target.value)
            }
          ></textarea>

          <button type="submit">
            Save Changes
          </button>

        </form>

      </div>

    </main>
  );
}

export default Profile;