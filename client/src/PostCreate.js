import { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post("http://localhost:4000/posts", { title });
    if (response.data) {
      console.log("");
      setTitle("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            className="form-control"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
