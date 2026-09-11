import { useState } from "react";
import "../src/FreexPaid.css";

function HtmlCssCourse() {
  const topics = [
    { title: "Introduction", time: 0 },
    { title: "HTML Basics", time: 215 },
    { title: "Hyperlinks", time: 667 },
    { title: "Images", time: 915 },
    { title: "Audio", time: 1609 },
    { title: "Video", time: 2119 },
    { title: "Text Formatting", time: 2290 },
    { title: "Span & Div", time: 2557 },
    { title: "Lists", time: 2997 },
    { title: "Tables", time: 3311 },
    { title: "Buttons", time: 3253 },
    { title: "Forms", time: 3568 },
    { title: "Headers & Footers", time: 4642 },

    { title: "Introduction to CSS", time: 4990 },
    { title: "Colors", time: 5470 },
    { title: "Fonts", time: 5722 },
    { title: "Borders", time: 6162 },
    { title: "Shadows", time: 6429 },
    { title: "Margins", time: 6557 },
    { title: "Float", time: 6901 },
    { title: "Display", time: 7411 },
    { title: "Height & Width", time: 7663 },
    { title: "Position", time: 7957 },
    { title: "Pseudo-classes", time: 8952 },
    { title: "Flexbox", time: 12503 }
  ];

  const [selectedTopic, setSelectedTopic] = useState(topics[0]);

  return (
    <main className="learning-page">

      {/* HEADER */}
      <div className="learning-header">

        <h1>HTML & CSS for Beginners</h1>

        <p>
          Learn how to build and style websites from scratch.
        </p>

      </div>


      {/* COURSE CONTENT */}
      <div className="learning-container">

        {/* VIDEO */}
        <section className="video-section">

          <div className="video-container">

            <iframe
              src={`https://www.youtube.com/embed/ZOx2g9NqtPQ?start=${selectedTopic.time}`}
              title="HTML and CSS Full Course"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

          </div>


          {/* VIDEO INFORMATION */}
          <div className="video-info">

            <h2>
              {selectedTopic.title}
            </h2>

            <p>
              Continue learning HTML and CSS step by step.
            </p>

          </div>

        </section>


        {/* TOPICS */}
        <aside className="topics-sidebar">

          <h2>
            Course Topics
          </h2>


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

                <span>
                  ▶
                </span>


                <div>

                  <strong>
                    {topic.title}
                  </strong>


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