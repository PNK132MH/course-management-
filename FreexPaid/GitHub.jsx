import { useState } from "react";
import "../src/FreexPaid.css";

function GitHubCourse() {

  const topics = [
    { title: "Introduction", time: 0 },
    { title: "What is Git and GitHub?", time: 25 },
    { title: "Why Use Git and GitHub?", time: 225 },
    { title: "Downloading Git", time: 315 },
    { title: "Tutorial Structure", time: 360 },
    { title: "Basic Linux Commands", time: 378 },
    { title: "Initialize a Git Repository", time: 502 },
    { title: "Making the First Change", time: 588 },
    { title: "Staging Changes", time: 823 },
    { title: "Committing Changes", time: 880 },
    { title: "Adding Data", time: 972 },
    { title: "Removing Changes from Stage", time: 1044 },
    { title: "Viewing Project History", time: 1094 },
    { title: "Making More Commits", time: 1132 },
    { title: "Removing a Commit", time: 1171 },
    { title: "Stashing Changes", time: 1295 },
    { title: "Popping Stash", time: 1465 },
    { title: "Clearing Stash", time: 1500 },
    { title: "Starting GitHub", time: 1526 },
    { title: "Creating a GitHub Repository", time: 1570 },
    { title: "Connecting Remote Repository", time: 1600 },
    { title: "Pushing Changes", time: 1685 },
    { title: "Git Branches", time: 1723 },
    { title: "Using Branches", time: 1870 },
    { title: "Creating a New Branch", time: 1962 },
    { title: "Merging Branches", time: 2068 },
    { title: "Working With Existing Projects", time: 2230 },
    { title: "Forking a Project", time: 2258 },
    { title: "Cloning a Fork", time: 2340 },
    { title: "Upstream", time: 2410 },
    { title: "Pull Requests", time: 2460 },
    { title: "Creating a Pull Request", time: 2728 },
    { title: "Merging a Pull Request", time: 3176 },
    { title: "Keeping Fork in Sync", time: 3208 },
    { title: "Practice Instructions", time: 3586 },
    { title: "Squashing Commits", time: 3620 },
    { title: "Rebase", time: 3719 },
    { title: "Git Reset", time: 3875 },
    { title: "Merge Conflicts", time: 3911 },
    { title: "What to Do Next", time: 4260 }
  ];

  const [selectedTopic, setSelectedTopic] = useState(topics[0]);

  return (
    <main className="learning-page">

      <div className="learning-header">

        <h1>Git & GitHub for Beginners</h1>

        <p>
          Learn Git, GitHub, branches, pull requests and collaboration.
        </p>

      </div>

      <div className="learning-container">

        <section className="video-section">

          <div className="video-container">

            <iframe
              src={`https://www.youtube.com/embed/apGV9Kg7ics?start=${selectedTopic.time}`}
              title="Complete Git and GitHub Tutorial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

          </div>

          <div className="video-info">

            <h2>{selectedTopic.title}</h2>

            <p>
              Continue learning Git and GitHub step by step.
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

export default GitHubCourse;