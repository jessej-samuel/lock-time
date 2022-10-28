import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import TodoApi from "../../api/TodoApi";
import { withRouter } from "next/router";

function New({ router }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    deadline: "",
  });
  const formRef = useRef(null);
  const submissionRef = useRef(null);

  // Handle form submit on input click
  const submit = (e) => {
    if (formRef.current.checkValidity()) {
      // window.location.href = "/app";
      // submissionRef.current.click();
      TodoApi.post("/tasks/new", formData);
      router.push("/app", "");
    } else {
      formRef.current.reportValidity();
    }
  };

  return (
    <div className="bg-primary/75 p-4 rounded text-primaryText max-w-xl m-auto">
      <h1 className="my-4 font-semibold capitalize text-lg">Create new task</h1>
      <form
        ref={formRef}
        className="flex flex-col gap-4 text-primaryText/75 text-sm"
        method="POST"
        onSubmit={(e) => submit(e)}
      >
        <label htmlFor="title" className="grid grid-cols-3  h-10 items-center">
          Title{" "}
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            className="col-span-2 text-black h-full rounded focus-visible:border-2 focus-visible:border-primary outline-none p-1 caret-primary"
            required
            maxLength={50}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </label>
        <label
          htmlFor="description"
          className="grid grid-cols-3  h-10 items-center"
        >
          Description{" "}
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            className="col-span-2 text-black h-full rounded focus-visible:border-2 focus-visible:border-primary outline-none p-1 caret-primary"
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </label>
        <label
          htmlFor="deadline"
          className="grid grid-cols-3  h-10 items-center"
        >
          Deadline{" "}
          <input
            type="datetime-local"
            id="deadline"
            name="deadline"
            value={formData.deadline}
            className="col-span-2 text-black h-full rounded focus-visible:border-2 focus-visible:border-primary outline-none p-1 caret-primary"
            required
            onChange={(e) =>
              setFormData({ ...formData, deadline: e.target.value })
            }
          />
        </label>

        <input
          type="submit"
          ref={submissionRef}
          className="block w-fit mx-auto bg-secondary hover:shadow-xl px-4 py-2 rounded"
          value={"Create"}
          onClick={() => console.log("Input clicked")}
        />
      </form>
    </div>
  );
}

export default withRouter(New);
