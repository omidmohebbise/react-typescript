import React, { useEffect, useState } from "react";
import "./course.css";
import CourseList from "./coursList";
import CourseForm from "./corseForm";

interface Course {
  id: number;
  title: string;
  rate: number;
  tutor: string;
  isActive: boolean;
}

const Course = () => {
  const [courseList, setCourseList] = useState<Course[]>([]);
  const [addModal, setAddModal] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/courses");
        const result = await response.json();
        setCourseList(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="course-bg">
        <h1>Courses</h1>
        <div className="d-flex flex-column my-3">
          <div className="d-flex justify-content-between align-items-center">
            <input
              className="form-control w-50"
              placeholder="search course ..."
            />
            <button
              onClick={() => setAddModal(true)}
              className="btn btn-primary"
              data-bs-toggle="modal"
            >
              Add Course
            </button>
          </div>
          <CourseList courses={courseList} />
        </div>
      </div>
      {addModal && <CourseForm />}
    </>
  );
};

export default Course;