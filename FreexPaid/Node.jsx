import { useState } from "react";
import "../src/FreexPaid.css";

function NodeCourse() {

  const topics = [
    { title: "Introduction", time: 0 },
    { title: "Start Here", time: 58 },
    { title: "Read and Write Files", time: 1046 },
    { title: "NPM Modules", time: 2717 },
    { title: "Event Emitter", time: 4100 },
    { title: "Build a Web Server", time: 5006 },
    { title: "Express JS Framework", time: 7333 },
    { title: "Middleware", time: 10714 },
    { title: "Routing", time: 12116 },
    { title: "MVC REST API", time: 12230 },
    { title: "Authentication", time: 13429 },
    { title: "JWT Authentication", time: 14983 },
    { title: "User Roles & Authorization", time: 18561 },
    { title: "MongoDB & Mongoose", time: 20278 },
    { title: "Mongoose Data Models", time: 21272 },
    { title: "Async CRUD Operations", time: 22527 }
  ];

  const [selectedTopic, setSelectedTopic] = useState(topics[0]);

  return (
    <main className="learning-page">

      <div className="learning-header">
        <h1>Node.js Backend Development</h1>
        <p>Learn Node.js, Express and backend development.</p>
      </div>

      <div className="learning-container">

        <section className="video-section">

          <div className="video-container">

            <iframe
              src={`https://www.youtube.com/embed/f2EqECiTBL8?start=${selectedTopic.time}`}
              title="Node.js Full Course"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

          </div>

          <div className="video-info">

            <h2>{selectedTopic.title}</h2>

            <p>
              Learn Node.js step by step.
            </p>

          </div>

        </section>

        <aside className="topics-sidebar">

          <h2>Course Topics</h2>

          <div className="topics-list">

            {topics.map((topic, index) => (

              <button
                key={index}
                className={
                  selectedTopic.title === topic.title
                    ? "topic active"
                    : "topic"
                }
                onClick={() => setSelectedTopic(topic)}
              >

                <span>▶</span>

                <div>
                  <strong>{topic.title}</strong>

                  <small>
                    {Math.floor(topic.time / 60)}:
                    {(topic.time % 60)
                      .toString()
                      .padStart(2, "0")}
                  </small>
                </div>

              </button>

            ))}

          </div>

        </aside>

      </div>

    </main>
  );
}

export default NodeCourse;