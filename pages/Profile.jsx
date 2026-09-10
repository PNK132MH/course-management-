import { useEffect, useRef, useState } from "react";
import "./Profile.css";

function Profile() {

  // =========================
  // USER INFORMATION
  // =========================

  const currentUser = JSON.parse(
    localStorage.getItem("currentUser") || "{}"
  );

  const savedName = currentUser.name || "";

  const nameParts = savedName.split(" ");

  const [firstName, setFirstName] = useState(
    nameParts[0] || ""
  );

  const [lastName, setLastName] = useState(
    nameParts.slice(1).join(" ") || ""
  );

  const [headline, setHeadline] = useState("");

  const [biography, setBiography] = useState("");

  const [language, setLanguage] = useState("English (US)");

  const [saved, setSaved] = useState(false);


  // =========================
  // PROFILE PHOTO
  // =========================

  const [photo, setPhoto] = useState(
    localStorage.getItem("profilePhoto") || ""
  );

  const [showPhotoOptions, setShowPhotoOptions] = useState(false);

  const [cameraOpen, setCameraOpen] = useState(false);

  const videoRef = useRef(null);

  const streamRef = useRef(null);

  const fileInputRef = useRef(null);


  // =========================
  // CAMERA
  // =========================

  async function startCamera() {

    try {

      const stream =
        await navigator.mediaDevices.getUserMedia({
          video: true
        });

      streamRef.current = stream;

      setCameraOpen(true);

    } catch (error) {

      alert(
        "Could not access the camera. Please check your browser permissions."
      );

    }
  }


  // Put camera stream inside video
  useEffect(() => {

    if (cameraOpen && videoRef.current && streamRef.current) {

      videoRef.current.srcObject =
        streamRef.current;

    }

  }, [cameraOpen]);


  // =========================
  // STOP CAMERA
  // =========================

  function stopCamera() {

    if (streamRef.current) {

      streamRef.current
        .getTracks()
        .forEach((track) => track.stop());

      streamRef.current = null;

    }

    setCameraOpen(false);

  }


  // =========================
  // TAKE PHOTO
  // =========================

  function takePhoto() {

    const video = videoRef.current;

    if (!video) return;

    const canvas = document.createElement("canvas");

    canvas.width = video.videoWidth;

    canvas.height = video.videoHeight;

    const context = canvas.getContext("2d");

    context.drawImage(
      video,
      0,
      0,
      canvas.width,
      canvas.height
    );

    const image = canvas.toDataURL("image/jpeg");

    setPhoto(image);

    localStorage.setItem(
      "profilePhoto",
      image
    );

    stopCamera();

  }


  // =========================
  // CHOOSE PHOTO FROM DEVICE
  // =========================

  function choosePhoto(event) {

    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function () {

      setPhoto(reader.result);

      localStorage.setItem(
        "profilePhoto",
        reader.result
      );

    };

    reader.readAsDataURL(file);

  }


  // =========================
  // SAVE PROFILE
  // =========================

  function handleSave(event) {

    event.preventDefault();

    const updatedUser = {

      ...currentUser,

      name: `${firstName} ${lastName}`.trim()

    };

    localStorage.setItem(
      "currentUser",
      JSON.stringify(updatedUser)
    );

    setSaved(true);

    setTimeout(() => {

      setSaved(false);

    }, 3000);

  }


  // =========================
  // CLEAN CAMERA
  // =========================

  useEffect(() => {

    return () => {

      if (streamRef.current) {

        streamRef.current
          .getTracks()
          .forEach((track) => track.stop());

      }

    };

  }, []);


  return (

    <main className="profile-page">


      {/* ==================================
          LEFT PROFILE SIDEBAR
      ================================== */}

      <aside className="profile-sidebar">


        <div className="profile-user">


          {/* PROFILE PHOTO */}

          <button
            className="profile-avatar-button"
            onClick={() =>
              setShowPhotoOptions(true)
            }
          >

            {photo ? (

              <img
                src={photo}
                alt="Profile"
                className="profile-avatar-image"
              />

            ) : (

              <div className="profile-avatar">

                {firstName
                  ? firstName
                      .charAt(0)
                      .toUpperCase()
                  : "U"}

              </div>

            )}

          </button>


          <h2>

            {firstName || "Your Name"}

          </h2>


        </div>


        {/* SIDEBAR OPTIONS */}

        <nav className="profile-menu">


          <button
            className="profile-menu-item active"
          >
            Profile
          </button>


          <button
            className="profile-menu-item"
            onClick={() =>
              setShowPhotoOptions(true)
            }
          >
            Photo
          </button>


          <button
            className="profile-menu-item"
            onClick={() =>
              alert(
                "Payment Methods section coming soon."
              )
            }
          >
            Payment methods
          </button>


        </nav>


      </aside>


      {/* ==================================
          RIGHT SIDE
      ================================== */}

      <section className="profile-content">


        {/* HEADER */}

        <div className="profile-heading">

          <h1>
            Public profile
          </h1>

          <p>
            Add information about yourself
          </p>

        </div>


        {/* PROFILE FORM */}

        <form
          className="profile-form"
          onSubmit={handleSave}
        >


          {/* =========================
              BASICS
          ========================= */}

          <div className="form-section">

            <h3>
              Basics:
            </h3>


            {/* FIRST NAME */}

            <div className="input-group">

              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(event) =>
                  setFirstName(
                    event.target.value
                  )
                }
              />

            </div>


            {/* LAST NAME */}

            <div className="input-group">

              <input
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(event) =>
                  setLastName(
                    event.target.value
                  )
                }
              />

            </div>


            {/* HEADLINE */}

            <div className="input-group headline-input">

              <input
                type="text"
                placeholder="Headline"
                maxLength="60"
                value={headline}
                onChange={(event) =>
                  setHeadline(
                    event.target.value
                  )
                }
              />


              <span>
                {60 - headline.length}
              </span>

            </div>


            <p className="helper-text">

              Add a short headline about yourself.

            </p>

          </div>


          {/* =========================
              BIOGRAPHY
          ========================= */}

          <div className="form-section">

            <h3>
              Biography
            </h3>


            <div className="bio-box">


              <div className="bio-toolbar">

                <button
                  type="button"
                  className="bold-button"
                >
                  B
                </button>


                <button
                  type="button"
                  className="italic-button"
                >
                  I
                </button>

              </div>


              <textarea
                placeholder="Biography"
                value={biography}
                onChange={(event) =>
                  setBiography(
                    event.target.value
                  )
                }
              ></textarea>


            </div>


            <p className="helper-text">

              Tell people a little about yourself.

            </p>

          </div>


          {/* =========================
              LANGUAGE
          ========================= */}

          <div className="form-section language-section">

            <label>
              Language
            </label>


            <select
              value={language}
              onChange={(event) =>
                setLanguage(
                  event.target.value
                )
              }
            >

              <option>
                English (US)
              </option>

              <option>
                English (UK)
              </option>

              <option>
                French
              </option>

              <option>
                Spanish
              </option>

              <option>
                Italian
              </option>

            </select>

          </div>


          {/* =========================
              SAVE
          ========================= */}

          <div className="save-section">


            {saved && (

              <p className="saved-message">

                Profile saved successfully!

              </p>

            )}


            <button
              type="submit"
              className="save-profile-button"
            >
              Save
            </button>


          </div>


        </form>


      </section>


      {/* ==================================
          PHOTO OPTIONS MODAL
      ================================== */}

      {showPhotoOptions && (

        <div
          className="photo-modal-overlay"
          onClick={() =>
            setShowPhotoOptions(false)
          }
        >


          <div
            className="photo-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >


            <button
              className="close-photo-modal"
              onClick={() =>
                setShowPhotoOptions(false)
              }
            >
              ×
            </button>


            <h2>
              Choose Profile Photo
            </h2>


            <p>
              Choose how you want to add your photo.
            </p>


            {/* TAKE PHOTO */}

            <button
              className="photo-option-button"
              onClick={() => {

                setShowPhotoOptions(false);

                startCamera();

              }}
            >

              <span>
                📷
              </span>

              Take a photo

            </button>


            {/* CHOOSE FROM DEVICE */}

            <button
              className="photo-option-button"
              onClick={() => {

                fileInputRef.current.click();

                setShowPhotoOptions(false);

              }}
            >

              <span>
                🖼️
              </span>

              Choose from device

            </button>


            {/* HIDDEN FILE INPUT */}

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={choosePhoto}
              style={{ display: "none" }}
            />


          </div>

        </div>

      )}


      {/* ==================================
          CAMERA MODAL
      ================================== */}

      {cameraOpen && (

        <div className="camera-overlay">


          <div className="camera-box">


            <h2>
              Take a photo
            </h2>


            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="camera-video"
            ></video>


            <div className="camera-buttons">


              <button
                className="take-photo-button"
                onClick={takePhoto}
              >
                📷 Take Photo
              </button>


              <button
                className="cancel-camera-button"
                onClick={stopCamera}
              >
                Cancel
              </button>


            </div>


          </div>

        </div>

      )}

    </main>
  );
}

export default Profile;