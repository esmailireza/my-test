import { useEffect, useRef, useState } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [show, setShow] = useState(false);
  const [seconds, setSeconds] = useState("ثانیه۱۰");
  const [userId, setUserId] = useState("400");
  const refInput = useRef(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name, lastName, setSeconds, setUserId);
  };
  useEffect(() => {
    refInput.current.focus();
  }, []);
  return (
    <div className="container w-25">
      <form className="mt-5" onSubmit={submitHandler}>
        <div className="mb-3">
          <span htmlFor="exampleInputEmail1" className="form-label">
            نام
          </span>
          <input
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={name}
            onChange={(e) => setName(e.target.value)}
            ref={refInput}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            نام‌خانوادگی
          </label>
          <input
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            آیدی کاربر
          </label>
          <input
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={userId}
            disabled
          />
        </div>
        {/* <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div> */}
        <button
          type="submit"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#myModal"
          variant="primary"
          onClick={handleShow}
        >
          اجرا کنید
        </button>
      </form>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>مشخصات شما</Modal.Title>
        </Modal.Header>
        <Modal.Body>{`${name} - ${lastName} - ${seconds}`}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            تایید
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
