import * as React from "react";
import { Form } from "react-bootstrap";

interface CourseFormProps {}

const CourseForm: React.FC = () => {
  const [title, setTitle] = React.useState<string>("");
  const [tutor, setTutor] = React.useState<string>("");
  const [capacity, setCapacity] = React.useState<number>();
  const [isActive, setIsActive] = React.useState<boolean>(false);
  return (
    <Form>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="tutor">
        <Form.Label>Tutor</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter tutor"
          value={tutor}
          onChange={(e) => setTutor(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="capacity">
        <Form.Label>Capacity</Form.Label>
        <Form.Select
          aria-label="Default select example"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value as unknown as number)}
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
          onChange={(e) => setIsActive(e.target.checked)}
          checked={isActive}
        />
      </Form.Group>
    </Form>
  );
};

export default CourseForm;
