// Ported directly from the website's data/courseData.js.
// Later this can be swapped for a real API call without touching
// any screen — screens only import `courses` from this file.

const courses = [
  {
    id: 1,
    title: "React for Beginners",
    instructor: "Phili Academy",
    category: "Web Development",
    price: 29.99,
    rating: 4.8,
    students: 1250,
    lessons: 42,
    duration: "8 hours",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
    description:
      "Learn how to build modern and interactive web applications with React. You'll learn components, props, state, events, hooks, and reusable UI patterns.",
  },
  {
    id: 2,
    title: "JavaScript Mastery",
    instructor: "Phili Academy",
    category: "Web Development",
    price: 24.99,
    rating: 4.7,
    students: 980,
    lessons: 55,
    duration: "10 hours",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=800&q=80",
    description:
      "Master JavaScript from the fundamentals to modern concepts. Learn variables, functions, arrays, objects, DOM manipulation, events, and more.",
  },
  {
    id: 3,
    title: "Node.js Backend Development",
    instructor: "Phili Academy",
    category: "Backend Development",
    price: 34.99,
    rating: 4.9,
    students: 750,
    lessons: 48,
    duration: "9 hours",
    level: "Intermediate",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    description:
      "Learn how to build powerful backend applications and APIs using Node.js and Express. Build servers, routes, APIs, and real-world backend applications.",
  },
  {
    id: 4,
    title: "HTML & CSS Complete Course",
    instructor: "Phili Academy",
    category: "Web Development",
    price: 19.99,
    rating: 4.6,
    students: 2100,
    lessons: 38,
    duration: "7 hours",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    description:
      "Learn HTML and CSS from scratch and build beautiful, responsive websites.",
  },
  {
    id: 5,
    title: "React Native App Development",
    instructor: "Phili Academy",
    category: "Mobile Development",
    price: 39.99,
    rating: 4.8,
    students: 620,
    lessons: 50,
    duration: "11 hours",
    level: "Intermediate",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    description:
      "Build mobile applications for Android and iOS using React Native and Expo.",
  },
  {
    id: 6,
    title: "Git & GitHub for Developers",
    instructor: "Phili Academy",
    category: "Development Tools",
    price: 14.99,
    rating: 4.7,
    students: 1800,
    lessons: 30,
    duration: "5 hours",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=800&q=80",
    description:
      "Learn Git and GitHub and understand how developers manage and collaborate on code.",
  },
];

export default courses;

export const categories = [
  "All",
  "Web Development",
  "Backend Development",
  "Mobile Development",
  "Development Tools",
];
