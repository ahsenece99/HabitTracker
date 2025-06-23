import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useTodoStore } from "../store/todoStore";
import type { Todo } from "../store/todoStore";
import { useNavigate } from "react-router-dom";
import "../css/AddTask.css";

function AddTask() {
  const addTodo = useTodoStore((state) => state.addTodo);
  const navigate = useNavigate();

  return (
    <div className="add-task-container">
      <h2>Add a New Task</h2>

      <Formik
        initialValues={{ title: "", date: "" }}
        validationSchema={Yup.object({
          title: Yup.string().required("Task title is required"),
          date: Yup.string().required("Date is required"),
        })}
        onSubmit={(values, { resetForm }) => {
          const newTask: Todo = {
            id: crypto.randomUUID(),
            title: values.title,
            completed: false,
            date: values.date,
          };
          addTodo(newTask);
          resetForm();
          navigate("/tasks");
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-inputs">
              <div className="form-group">
                <label htmlFor="title">Task Title</label>
                <Field name="title" type="text" placeholder="Enter task description" />
                <div className="error-wrapper">
                  <ErrorMessage name="title" component="div" className="error-message" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="date">Due Date</label>
                <Field name="date" type="date" />
                <div className="error-wrapper">
                  <ErrorMessage name="date" component="div" className="error-message" />
                </div>
              </div>
            </div>

            <div className="form-submit-area">
              <button type="submit" className="submit-btn">
                {isSubmitting ? "Adding..." : "Add Task"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddTask;
