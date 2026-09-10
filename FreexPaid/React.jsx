import { useState } from "react";
import "../src/FreexPaid.css";

function ReactCourse() {

  const topics = [
    { title: "Introduction", time: 0 },
    { title: "Start Here", time: 48 },
    { title: "App & JSX", time: 836 },
    { title: "Functional Components", time: 1528 },
    { title: "Applying CSS Styles", time: 2161 },
    { title: "Click Events", time: 2591 },
    { title: "useState Hook", time: 3115 },
    { title: "Lists & Keys", time: 3803 },
    { title: "Props & Prop Drilling", time: 5750 },
    { title: "Controlled Component Inputs", time: 7279 },
    { title: "Project Challenge", time: 9505 },
    { title: "useEffect Hook", time: 11024 },
    { title: "JSON Server", time: 11708 },
    { title: "Fetch API Data", time: 12083 },
    { title: "CRUD Operations", time: 13477 },
    { title: "Fetch Data Challenge", time: 14673 },
    { title: "React Router", time: 16990 },
    { title: "Router Hooks & Links", time: 18178 },
    { title: "Flexbox Components", time: 21088 },
    { title: "Axios API Requests", time: 21754 },
    { title: "Custom Hooks", time: 24047 },
    { title: "Context API & useContext", time: 26224 },
    { title: "Redux", time: 28570 },
    { title: "Build & Deploy", time: 30819 }
  ];

  const [selectedTopic, setSelectedTopic] = useState(topics[0]);

  function selectTopic(topic) {
    setSelectedTopic(topic);
  }

  return (
    <main className="learning-page">

      <div className="learning-header">
        <h1>React for Beginners</h1>
        <p>Learn React step by step.</p>
      </div>

      <div className="learning-container">

        <section className="video-section">

          <div className="video-container">

            <iframe
              src={`https://www.youtube.com/embed/RVFAyFWO4go?start=${selectedTopic.time}`}
              title="React JS Full Course"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

          </div>

          <div className="video-info">

            <h2>{selectedTopic.title}</h2>

            <p>
              Continue learning React by following the course topics.
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
                onClick={() => selectTopic(topic)}
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

export default ReactCourse;