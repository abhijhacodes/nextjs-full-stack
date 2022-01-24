import { useRouter } from "next/router";
const axios = require("axios").default;
import {
  MDBInput,
  MDBBtn,
  MDBTypography,
  MDBContainer,
} from "mdb-react-ui-kit";
import { useState } from "react";

function addNewHero() {
  const [form, setForm] = useState({
    superHero: "",
    realName: "",
  });
  const router = useRouter();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios("http://localhost:3000/api/hero", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(form),
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container text-center">
      <MDBTypography variant="h1" className="mt-5">
        Add New Hero
      </MDBTypography>
      <MDBContainer style={{ maxWidth: "45rem" }}>
        <form onSubmit={handleForm}>
          <MDBInput
            autocomplete="off"
            className="my-5"
            onChange={handleChange}
            label="superHero"
            type="text"
            name="superHero"
          />
          <MDBInput
            autocomplete="off"
            className="my-5"
            onChange={handleChange}
            label="realName"
            type="text"
            name="realName"
          />
          <MDBBtn type="submit">Add new Hero</MDBBtn>
        </form>
      </MDBContainer>
    </div>
  );
}

export default addNewHero;
