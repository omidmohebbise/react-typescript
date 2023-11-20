import * as React from "react";
import { CourseState } from "./course";

interface CourseListProps {
  courses: CourseState[];
}

const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  return (
    <div className="d-flex flex-wrap my-5">
      {courses.map((course) => (
        <div
          key={course.id}
          className="card course-card m-3 d-flex flex-column justify-content-between"
        >
          <h4>{course.title}</h4>
          <h6>{"Tutor :   " + course.tutor}</h6>
          {course.isActive ? (
            <div style={{ color: "green" }}>Active</div>
          ) : (
            <div style={{ color: "red" }}>DeActive</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CourseList;
