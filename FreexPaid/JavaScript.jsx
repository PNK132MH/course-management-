import { useState } from "react";
import "../src/FreexPaid.css";

function JavaScriptCourse() {

  const topics = [

    { title: "Introduction", time: "0:00:00" },

    // =========================
    // PART 1 - BASIC JAVASCRIPT
    // =========================

    { title: "Running JavaScript", time: "0:01:24" },
    { title: "Comment Your JavaScript Code", time: "0:04:23" },
    { title: "Declare JavaScript Variables", time: "0:05:56" },
    { title: "Storing Values with the Assignment Operator", time: "0:06:15" },
    { title: "Initializing Variables with the Assignment Operator", time: "0:11:31" },
    { title: "Understanding Uninitialized Variables", time: "0:11:58" },
    { title: "Understanding Case Sensitivity in Variables", time: "0:12:40" },

    { title: "Add Two Numbers with JavaScript", time: "0:14:05" },
    { title: "Subtract One Number from Another", time: "0:14:34" },
    { title: "Multiply Two Numbers", time: "0:14:52" },
    { title: "Divide One Number by Another", time: "0:15:12" },
    { title: "Increment a Number", time: "0:15:30" },
    { title: "Decrement a Number", time: "0:15:58" },

    { title: "Create Decimal Numbers", time: "0:16:22" },
    { title: "Multiply Two Decimals", time: "0:16:48" },
    { title: "Divide One Decimal by Another", time: "0:17:18" },
    { title: "Finding a Remainder", time: "0:17:33" },

    { title: "Augmented Addition", time: "0:18:22" },
    { title: "Augmented Subtraction", time: "0:19:22" },
    { title: "Augmented Multiplication", time: "0:20:18" },
    { title: "Augmented Division", time: "0:20:51" },

    { title: "Declare String Variables", time: "0:21:19" },
    { title: "Escaping Literal Quotes", time: "0:22:01" },
    { title: "Quoting Strings with Single Quotes", time: "0:23:44" },
    { title: "Escape Sequences in Strings", time: "0:25:18" },
    { title: "Concatenating Strings with Plus", time: "0:26:46" },
    { title: "Concatenating with Plus Equals", time: "0:27:49" },
    { title: "Constructing Strings with Variables", time: "0:29:01" },
    { title: "Appending Variables to Strings", time: "0:30:14" },
    { title: "Find the Length of a String", time: "0:31:11" },
    { title: "Bracket Notation - First Character", time: "0:32:01" },
    { title: "String Immutability", time: "0:33:27" },
    { title: "Bracket Notation - Nth Character", time: "0:34:23" },
    { title: "Bracket Notation - Last Character", time: "0:34:51" },
    { title: "Bracket Notation - Nth-to-Last Character", time: "0:35:48" },
    { title: "Word Blanks", time: "0:36:28" },

    { title: "JavaScript Arrays", time: "0:40:44" },
    { title: "Nest One Array within Another", time: "0:41:43" },
    { title: "Access Array Data with Indexes", time: "0:42:33" },
    { title: "Modify Array Data with Indexes", time: "0:43:34" },
    { title: "Multi-Dimensional Arrays", time: "0:44:48" },
    { title: "Manipulate Arrays with push()", time: "0:46:30" },
    { title: "Manipulate Arrays with pop()", time: "0:47:29" },
    { title: "Manipulate Arrays with shift()", time: "0:48:33" },
    { title: "Manipulate Arrays with unshift()", time: "0:49:23" },
    { title: "Shopping List", time: "0:50:36" },

    { title: "Reusable JavaScript Functions", time: "0:51:41" },
    { title: "Function Arguments", time: "0:53:41" },
    { title: "Global Scope and Functions", time: "0:55:43" },
    { title: "Local Scope and Functions", time: "0:59:31" },
    { title: "Global vs Local Scope", time: "1:00:46" },
    { title: "Return a Value from a Function", time: "1:02:40" },
    { title: "Understanding Undefined", time: "1:03:55" },
    { title: "Assignment with a Returned Value", time: "1:04:52" },
    { title: "Stand in Line", time: "1:05:52" },

    { title: "Boolean Values", time: "1:08:41" },
    { title: "If Statements", time: "1:09:24" },
    { title: "Equality Operator", time: "1:11:51" },
    { title: "Strict Equality Operator", time: "1:13:18" },
    { title: "Comparing Different Values", time: "1:14:43" },
    { title: "Inequality Operator", time: "1:15:38" },
    { title: "Strict Inequality Operator", time: "1:16:20" },
    { title: "Greater Than Operator", time: "1:17:05" },
    { title: "Greater Than or Equal", time: "1:17:39" },
    { title: "Less Than Operator", time: "1:18:09" },
    { title: "Less Than or Equal", time: "1:18:44" },
    { title: "Logical AND Operator", time: "1:19:17" },
    { title: "Logical OR Operator", time: "1:20:41" },

    { title: "Else Statements", time: "1:21:37" },
    { title: "Else If Statements", time: "1:22:27" },
    { title: "Logical Order in If Else", time: "1:23:30" },
    { title: "Chaining If Else Statements", time: "1:24:45" },
    { title: "Golf Code", time: "1:27:45" },

    { title: "Switch Statements", time: "1:32:15" },
    { title: "Default Option in Switch", time: "1:35:46" },
    { title: "Multiple Identical Switch Options", time: "1:37:23" },
    { title: "Replacing If Else with Switch", time: "1:39:20" },

    { title: "Returning Boolean Values", time: "1:41:11" },
    { title: "Return Early Pattern", time: "1:42:20" },
    { title: "Counting Cards", time: "1:43:38" },

    { title: "Build JavaScript Objects", time: "1:49:11" },
    { title: "Object Properties with Dot Notation", time: "1:50:46" },
    { title: "Object Properties with Bracket Notation", time: "1:51:33" },
    { title: "Object Properties with Variables", time: "1:52:47" },
    { title: "Updating Object Properties", time: "1:53:34" },
    { title: "Add New Object Properties", time: "1:54:30" },
    { title: "Delete Object Properties", time: "1:55:19" },
    { title: "Objects for Lookups", time: "1:55:54" },
    { title: "Testing Objects for Properties", time: "1:57:43" },
    { title: "Manipulating Complex Objects", time: "1:59:15" },
    { title: "Nested Objects", time: "2:01:00" },
    { title: "Nested Arrays", time: "2:01:53" },
    { title: "Record Collection", time: "2:03:06" },

    { title: "While Loops", time: "2:10:15" },
    { title: "For Loops", time: "2:11:35" },
    { title: "Odd Numbers with a For Loop", time: "2:13:56" },
    { title: "Count Backwards with a For Loop", time: "2:15:28" },
    { title: "Iterate Through an Array", time: "2:17:08" },
    { title: "Nesting For Loops", time: "2:19:43" },
    { title: "Do While Loops", time: "2:22:45" },

    { title: "Profile Lookup", time: "2:24:12" },
    { title: "Random Fractions", time: "2:28:18" },
    { title: "Random Whole Numbers", time: "2:28:54" },
    { title: "Random Numbers within a Range", time: "2:30:21" },
    { title: "parseInt Function", time: "2:31:46" },
    { title: "parseInt with a Radix", time: "2:32:36" },
    { title: "Conditional Ternary Operator", time: "2:33:29" },
    { title: "Multiple Ternary Operators", time: "2:34:57" },


    // =========================
    // PART 2 - ES6
    // =========================

    { title: "var vs let", time: "2:36:57" },
    { title: "Scopes of var and let", time: "2:39:02" },
    { title: "const Keyword", time: "2:41:32" },
    { title: "Mutate an Array with const", time: "2:43:40" },
    { title: "Prevent Object Mutation", time: "2:44:52" },

    { title: "Arrow Functions", time: "2:47:17" },

    /*
      The original published list contains 2:28:24 here.
      That is clearly out of order.
      The surrounding chapters are 2:47:17 and 2:49:27,
      so this timestamp is corrected to 2:48:24.
    */
    { title: "Arrow Functions with Parameters", time: "2:48:24" },

    { title: "Higher Order Arrow Functions", time: "2:49:27" },
    { title: "Default Parameters", time: "2:53:04" },
    { title: "Rest Operator", time: "2:54:00" },
    { title: "Spread Operator", time: "2:55:31" },

    { title: "Destructuring Objects", time: "2:57:18" },
    { title: "Destructuring Nested Objects", time: "3:00:18" },
    { title: "Destructuring Arrays", time: "3:01:55" },
    { title: "Destructuring with Rest", time: "3:03:40" },
    { title: "Destructuring Function Arguments", time: "3:05:05" },

    { title: "Template Literals", time: "3:06:39" },
    { title: "Simple Fields", time: "3:10:43" },
    { title: "Declarative Functions", time: "3:12:24" },
    { title: "class Syntax", time: "3:12:56" },
    { title: "Getters and Setters", time: "3:15:11" },

    { title: "import vs require", time: "3:20:25" },
    { title: "export", time: "3:22:33" },
    { title: "Import Everything with *", time: "3:23:40" },
    { title: "export default", time: "3:24:50" },
    { title: "Import a Default Export", time: "3:25:26" }
  ];


  // Convert 0:00:00 / 1:23:45 / 3:25:26
  // into seconds for YouTube's ?start= parameter.
  function timestampToSeconds(timestamp) {

    const parts = timestamp.split(":").map(Number);

    const hours = parts[0];
    const minutes = parts[1];
    const seconds = parts[2];

    return (hours * 3600) + (minutes * 60) + seconds;
  }


  const [selectedTopic, setSelectedTopic] = useState(topics[0]);


  function selectTopic(topic) {

    setSelectedTopic(topic);

  }


  return (
    <main className="learning-page">

      <div className="learning-header">

        <h1>JavaScript for Beginners</h1>

        <p>
          Learn JavaScript from the basics to ES6 step by step.
        </p>

      </div>


      <div className="learning-container">


        {/* =========================
            VIDEO
        ========================= */}

        <section className="video-section">

          <div className="video-container">

            <iframe
              key={selectedTopic.time}
              src={`https://www.youtube.com/embed/PkZNo7MFNFg?start=${timestampToSeconds(selectedTopic.time)}`}
              title="JavaScript Full Course for Beginners"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

          </div>


          <div className="video-info">

            <h2>
              {selectedTopic.title}
            </h2>

            <p>
              Continue learning JavaScript step by step.
            </p>

          </div>

        </section>


        {/* =========================
            TOPICS
        ========================= */}

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
                onClick={() => selectTopic(topic)}
              >

                <span>
                  ▶
                </span>


                <div>

                  <strong>
                    {topic.title}
                  </strong>


                  <small>
                    {topic.time}
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

export default JavaScriptCourse;