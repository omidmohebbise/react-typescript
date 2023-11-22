import React, { useEffect, useState } from "react";
import "./course.css";
import CourseList from "./coursList";
import CourseForm from "./coruseForm";
import { Button } from "react-bootstrap";
import AnyModal from "../utils/modal/modal";

export interface CourseState {
  id: number;
  title: string;
  tutor: string;
  isActive: boolean;
  capacity: number;
}

const Course = () => {
  const [courseList, setCourseList] = useState<CourseState[]>([]);
  const [addModal, setAddModal] = useState<boolean>(false);
  const [course, setCourse] = useState<CourseState>({} as CourseState);

  const onSave: () => void = () => {
    console.log(course);
  };

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
            <Button
              onClick={() => setAddModal(true)}
              className="btn btn-primary"
            >
              Add Course
            </Button>
          </div>
          <CourseList courses={courseList} />
        </div>
      </div>

      {addModal && (
        <AnyModal
          headerTitle="Add Course"
          body={<CourseForm course={course} updateCourse={setCourse} />}
          show={addModal}
          onSave={onSave}
          handleClose={() => setAddModal(false)}
        />
      )}
    </>
  );
};

export default Course;
