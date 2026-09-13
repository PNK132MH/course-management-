import { useState } from "react";
import "./Certificates.css";

function Certificates() {
  const currentUser = JSON.parse(
    localStorage.getItem("currentUser") || "{}"
  );

  const paidIds = JSON.parse(
    localStorage.getItem("paidCourses") || "[]"
  );

  // For now, this is the course whose certificate is displayed.
  // Later, this can come from the student's completed courses.
  const certificate = {
    courseId: 1,
    studentName: currentUser.name || "PHILI",
    courseName: "React for Beginners",
    completionDate: "September 13, 2026",
    certificateId: "LH-2026-001",
  };

  const isPaid = paidIds.includes(certificate.courseId);

  const [downloadMessage, setDownloadMessage] = useState("");

  const handleDownload = () => {
    if (!isPaid) {
      setDownloadMessage(
        "You must pay for this course before downloading the certificate."
      );
      return;
    }

    window.print();
  };

  return (
    <main className="certificates-page">

      <div className="certificate">

        <div className="certificate-header">

          <div className="learnhub-logo">
            <div className="cap-icon"></div>

            <div>
              <h2>LEARNHUB</h2>
              <p>LEARNING PLATFORM</p>
            </div>
          </div>

          <h1>CERTIFICATE OF COMPLETION</h1>

          <div className="gold-divider"></div>

        </div>

        <section className="certificate-content">

          <p className="presented-text">
            This certificate is proudly presented to
          </p>

          <h2 className="student-name">
            {certificate.studentName}
          </h2>

          <div className="name-line"></div>

          <p className="completion-text">
            for successfully completing the course
          </p>

          <h3 className="course-name">
            {certificate.courseName}
          </h3>

          <p className="description">
            demonstrating commitment and completion of the
            <br />
            required course material.
          </p>

          <div className="certificate-details">

            <div className="certificate-detail">
              <span>Date of Completion</span>
              <strong>{certificate.completionDate}</strong>
            </div>

            <div className="certificate-seal">
              <div className="seal-inner">
                <strong>LH</strong>
                <small>LEARNHUB</small>
              </div>
            </div>

            <div className="certificate-detail">
              <span>Certificate ID</span>
              <strong>{certificate.certificateId}</strong>
            </div>

          </div>

          <div className="certificate-signatures">

            <div className="signature">
              <div className="signature-line">
                <span>Signature</span>
              </div>

              <p>Course Instructor</p>
            </div>

            <div className="signature">
              <div className="signature-line">
                <span>Signature</span>
              </div>

              <p>Administrator</p>
            </div>

          </div>

          <div className="certificate-footer">
            LEARNHUB
          </div>

        </section>

      </div>

      {/* DOWNLOAD AREA */}

      <div className="certificate-download">

        {isPaid ? (
          <>
            <button
              className="download-certificate-btn"
              onClick={handleDownload}
            >
              Download Certificate
            </button>

            <p>
              Your certificate is available because this course is paid.
            </p>
          </>
        ) : (
          <>
            <button
              className="download-certificate-btn locked"
              onClick={handleDownload}
            >
              🔒 Download Certificate
            </button>

            <p className="certificate-warning">
              You must pay for this course before downloading the certificate.
            </p>
          </>
        )}

        {downloadMessage && (
          <p className="certificate-warning">
            {downloadMessage}
          </p>
        )}

      </div>

    </main>
  );
}

export default Certificates;