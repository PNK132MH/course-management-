import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import courses from "../data/courseData";
import "./Payment.css";

function Payment() {

  const { id } = useParams();
  const navigate = useNavigate();

  const course = courses.find(
    (course) => course.id === Number(id)
  );

  const [paymentMethod, setPaymentMethod] = useState("");

  if (!course) {
    return (
      <main className="payment-page">
        <h1>Course not found</h1>
      </main>
    );
  }

  const openCourse = () => {

    if (course.title === "React for Beginners") {
      navigate("/courses/react");
    }

    else if (course.title === "JavaScript Mastery") {
      navigate("/courses/javascript");
    }

    else if (course.title === "HTML & CSS Complete Course") {
      navigate("/courses/html-css");
    }

    else if (course.title === "Node.js Backend Development") {
      navigate("/courses/node");
    }

    else if (course.title === "React Native App Development") {
      navigate("/courses/react-native");
    }

    else if (course.title === "Git & GitHub for Developers") {
      navigate("/courses/github");
    }
  };

  const handlePayment = () => {

    if (!paymentMethod) {
      alert("Please choose a payment method.");
      return;
    }

    const paidCourses = JSON.parse(
      localStorage.getItem("paidCourses") || "[]"
    );

    if (!paidCourses.includes(course.id)) {
      paidCourses.push(course.id);
    }

    localStorage.setItem(
      "paidCourses",
      JSON.stringify(paidCourses)
    );

    const enrolledCourses = JSON.parse(
      localStorage.getItem("enrolledCourses") || "[]"
    );

    if (!enrolledCourses.includes(course.id)) {
      enrolledCourses.push(course.id);
    }

    localStorage.setItem(
      "enrolledCourses",
      JSON.stringify(enrolledCourses)
    );

    alert("Your payment is successful!");

    openCourse();
  };

  return (
    <main className="payment-page">

      <div className="payment-container">

        <h1>
          Complete Your Payment
        </h1>

        <div className="payment-course">

          <img
            src={course.image}
            alt={course.title}
          />

          <div>

            <h2>
              {course.title}
            </h2>

            <p>
              {course.description}
            </p>

            <h3>
              ${course.price}
            </h3>

          </div>

        </div>

        <h2>
          Choose Payment Method
        </h2>

        <div className="payment-methods">

          <label>
            <input
              type="radio"
              name="payment"
              value="telebirr"
              checked={paymentMethod === "telebirr"}
              onChange={(e) =>
                setPaymentMethod(e.target.value)
              }
            />
            Telebirr
          </label>

          <label>
            <input
              type="radio"
              name="payment"
              value="cbe"
              checked={paymentMethod === "cbe"}
              onChange={(e) =>
                setPaymentMethod(e.target.value)
              }
            />
            Commercial Bank of Ethiopia
          </label>

          <label>
            <input
              type="radio"
              name="payment"
              value="awash"
              checked={paymentMethod === "awash"}
              onChange={(e) =>
                setPaymentMethod(e.target.value)
              }
            />
            Awash Bank
          </label>

          <label>
            <input
              type="radio"
              name="payment"
              value="card"
              checked={paymentMethod === "card"}
              onChange={(e) =>
                setPaymentMethod(e.target.value)
              }
            />
            Visa / Mastercard
          </label>

        </div>

        <div className="payment-total">

          <span>
            Total
          </span>

          <strong>
            ${course.price}
          </strong>

        </div>

        <button
          className="pay-button"
          onClick={handlePayment}
        >
          Pay ${course.price}
        </button>

        <button
          className="back-button"
          onClick={() => navigate(`/course/${course.id}`)}
        >
          Back to Course
        </button>

        <p className="payment-note">
          This is a demonstration payment system.
        </p>

      </div>

    </main>
  );
}

export default Payment;