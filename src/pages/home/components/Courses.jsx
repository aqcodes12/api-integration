import React from "react";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Data Science",
      desc: "Learn the fundamentals of data science, including data analysis, machine learning, and statistical modeling.",
      action: "Enroll Now",
    },
    {
      id: 2,
      title: "Web Development",
      desc: "Master HTML, CSS, JavaScript, and modern frameworks like React to build responsive and dynamic websites.",
      action: "Start Learning",
    },
    {
      id: 3,
      title: "Mobile App Development",
      desc: "Build cross-platform mobile apps using Flutter or React Native with real-world projects and best practices.",
      action: "Join Course",
    },
    {
      id: 4,
      title: "Cloud Computing",
      desc: "Understand the core concepts of cloud infrastructure, DevOps, and deployment on AWS, Azure, and GCP.",
      action: "Explore Now",
    },
  ];

  return (
    <>
      <div>
        <h3 className="text-center text-3xl font-bold">Courses</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center mt-5 p-10 max-w-4xl mx-auto">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-[#5A0D8D] text-center text-white p-5 rounded-md h-[250px] w-[400px]"
            >
              <div className="relative">
                <div className="bg-white bg-opacity-20 max-w-sm mx-auto h-40 p-5">
                  <h4 className="text-xl font-semibold">{course.title}</h4>
                  <p className="text-gray-200 mt-2">{course.desc}</p>
                </div>
                <button className=" bg-white bg-opacity-20 px-8 py-2 relative -top-2">
                  {course.action}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
