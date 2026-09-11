import { useState } from "react";
import profileImage from "../../src/assets/image.png";
import "./ContactInstructor.css";

function ContactInstructors() {

  const instructors = [
    {
      id: 1,
      name: "John Smith",
      expertise: "React & JavaScript",
      bio: "Frontend developer and React instructor."
    },

    {
      id: 2,
      name: "Sarah Johnson",
      expertise: "HTML & CSS",
      bio: "Web designer and HTML & CSS instructor."
    },

    {
      id: 3,
      name: "Michael Brown",
      expertise: "Node.js & Backend",
      bio: "Backend developer and Node.js instructor."
    },

    {
      id: 4,
      name: "Emma Davis",
      expertise: "React Native",
      bio: "Mobile developer and React Native instructor."
    },

    {
      id: 5,
      name: "David Wilson",
      expertise: "Git & GitHub",
      bio: "Developer and version control instructor."
    },

    {
      id: 6,
      name: "Olivia Taylor",
      expertise: "JavaScript",
      bio: "JavaScript developer and instructor."
    }
  ];


  // Stores the instructor currently being contacted

  const [selectedInstructor, setSelectedInstructor] =
    useState(null);


  // Stores the message typed by the user

  const [message, setMessage] = useState("");


  // Opens the contact popup

  const handleContact = (instructor) => {

    setSelectedInstructor(instructor);

    setMessage("");

  };


  // Closes the contact popup

  const closeContact = () => {

    setSelectedInstructor(null);

    setMessage("");

  };


  // Handles sending the message

  const handleSend = (event) => {

    event.preventDefault();


    if (message.trim() === "") {

      alert("Please write a message first.");

      return;

    }


    alert(
      `Message sent to ${selectedInstructor.name}!`
    );


    setMessage("");

    setSelectedInstructor(null);

  };


  return (

    <main className="contact-instructors-page">

      {/* =========================
          HEADER
      ========================= */}

      <section className="contact-instructors-header">

        <p>
          INSTRUCTOR COMMUNITY
        </p>

        <h1>
          Contact Instructors
        </h1>

        <span>
          Connect with other instructors and
          share knowledge with the LearnHub community.
        </span>

      </section>


      {/* =========================
          INSTRUCTOR CARDS
      ========================= */}

      <section className="instructors-grid">

        {instructors.map((instructor) => (

          <article
            className="instructor-contact-card"
            key={instructor.id}
          >

            {/* PROFILE IMAGE */}

            <div className="instructor-avatar">

              <img
                src={profileImage}
                alt={`${instructor.name} profile`}
              />

            </div>


            {/* INFORMATION */}

            <div className="instructor-contact-info">

              <h2>
                {instructor.name}
              </h2>

              <h3>
                {instructor.expertise}
              </h3>

              <p>
                {instructor.bio}
              </p>


              {/* CONTACT BUTTON */}

              <button
                className="contact-button"
                onClick={() =>
                  handleContact(instructor)
                }
              >
                Contact
              </button>

            </div>

          </article>

        ))}

      </section>


      {/* =========================
          CONTACT POPUP
      ========================= */}

      {selectedInstructor && (

        <div
          className="contact-overlay"
          onClick={closeContact}
        >

          <div
            className="contact-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* CLOSE BUTTON */}

            <button
              className="close-contact"
              onClick={closeContact}
            >
              ×
            </button>


            {/* PROFILE */}

            <img
              src={profileImage}
              alt="Instructor profile"
              className="modal-profile-image"
            />


            <h2>
              Contact {selectedInstructor.name}
            </h2>


            <p className="modal-expertise">
              {selectedInstructor.expertise}
            </p>


            {/* MESSAGE FORM */}

            <form onSubmit={handleSend}>

              <label>
                Your message
              </label>


              <textarea
                value={message}
                onChange={(event) =>
                  setMessage(event.target.value)
                }
                placeholder={`Write a message to ${selectedInstructor.name}...`}
                rows="6"
              ></textarea>


              <div className="modal-buttons">

                <button
                  type="button"
                  className="cancel-button"
                  onClick={closeContact}
                >
                  Cancel
                </button>


                <button
                  type="submit"
                  className="send-button"
                >
                  Send Message
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </main>
  );
}

export default ContactInstructors;