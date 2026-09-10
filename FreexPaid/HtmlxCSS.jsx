import { useState } from "react";
import "../src/FreexPaid.css";

function HtmlCssCourse() {

  const topics = [
    { title: "Introduction", time: 0 },
    { title: "HTML Basics", time: 62 },
    { title: "CSS Basics", time: 1062 },
    { title: "Hovers, Transitions & Shadows", time: 2679 },
    { title: "Chrome DevTools & CSS Box Model", time: 3790 },
    { title: "Text Styles", time: 4650 },
    { title: "HTML Structure", time: 6738 },
    { title: "Images & Text Boxes", time: 7868 },
    { title: "CSS Display Property", time: 8742 },
    { title: "The div Element", time: 9298 },
    { title: "Nested Layouts Technique", time: 10015 },
    { title: "CSS Grid", time: 11818 },
    { title: "Flexbox", time: 13438 },
    { title: "Nested Flexbox", time: 15321 },
    { title: "CSS Position", time: 17076 },
    { title: "Position Absolute & Relative", time: 18434 },
    { title: "Finish the Project", time: 20029 },
    { title: "More CSS Features", time: 22066 }
  ];

  const [selectedTopic, setSelectedTopic] = useState(topics[0]);

  return (
    <main className="learning-page">

      <div className="learning-header">

        <h1>HTML & CSS for Beginners</h1>

        <p>
          Learn how to build and style websites from scratch.
        </p>

      </div>

      <div className="learning-container">

        <section className="video-section">

          <div className="video-container">

            <iframe
              src={`https://www.youtube.com/embed/G3e-cpL7ofc?start=${selectedTopic.time}`}
              title="HTML and CSS Full Course"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

          </div>

          <div className="video-info">

            <h2>{selectedTopic.title}</h2>

            <p>
              Continue learning HTML and CSS step by step.
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
                    {Math.floor(topic.time / 3600) > 0 &&
                      `${Math.floor(topic.time / 3600)}:`}

                    {(Math.floor(topic.time / 60) % 60)
                      .toString()
                      .padStart(2, "0")}

                    :

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

export default HtmlCssCourse;