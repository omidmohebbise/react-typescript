import * as React from "react";
import { Form } from "react-bootstrap";
import { CourseState } from "./course";

interface CourseFormProps {
  course: CourseState;
  updateCourse: (course: CourseState) => void;
}

const CourseForm: React.FC<CourseFormProps> = ({ course, updateCourse }) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          value={course.title}
          onChange={(e) => updateCourse({ ...course, title: e.target.value })}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="tutor">
        <Form.Label>Tutor</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter tutor"
          value={course.tutor}
          onChange={(e) => updateCourse({ ...course, tutor: e.target.value })}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="capacity">
        <Form.Label>Capacity</Form.Label>
        <Form.Select
          aria-label="Default select example"
          value={course.capacity}
          onChange={(e) =>
            updateCourse({
              ...course,
              capacity: e.target.value as unknown as number,
            })
          }
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="isActive">
        <Form.Check
          type="checkbox"
          label="Activate this course"
          onChange={(e) =>
            updateCourse({ ...course, isActive: e.target.checked })
          }
          checked={course.isActive}
        />
      </Form.Group>
    </Form>
  );
};

export default CourseForm;
