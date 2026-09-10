import { useState } from "react";
import "../src/FreexPaid.css";

function ReactNativeCourse() {

  const topics = [
    { title: "Introduction", time: 0 },
    { title: "Start Here", time: 68 },
    { title: "Build an App", time: 1307 },
    { title: "Navigation", time: 2586 },
    { title: "List Views", time: 4645 },
    { title: "CRUD App", time: 7547 },
    { title: "Data Storage", time: 9760 },
    { title: "Dynamic Routing", time: 12020 },
    { title: "EAS Development Builds", time: 14554 }
  ];

  const [selectedTopic, setSelectedTopic] = useState(topics[0]);

  return (
    <main className="learning-page">

      <div className="learning-header">

        <h1>React Native for Beginners</h1>

        <p>
          Learn how to build mobile apps with React Native.
        </p>

      </div>

      <div className="learning-container">

        <section className="video-section">

          <div className="video-container">

            <iframe
              src={`https://www.youtube.com/embed/sm5Y7Vtuihg?start=${selectedTopic.time}`}
              title="React Native Full Course"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

          </div>

          <div className="video-info">

            <h2>{selectedTopic.title}</h2>

            <p>
              Continue learning React Native step by step.
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

export default ReactNativeCourse;