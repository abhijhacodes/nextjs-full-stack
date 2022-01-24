import { useRouter } from "next/router";
const axios = require("axios").default;
import Head from "next/head";
import {
  MDBInput,
  MDBBtn,
  MDBTypography,
  MDBContainer,
} from "mdb-react-ui-kit";
import { useState } from "react";

function editHero({ hero }) {
  const router = useRouter();
  const heroId = router.query.id;

  const [form, setForm] = useState({
    superHero: hero.superHero,
    realName: hero.realName,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios(`http://localhost:3000/api/hero/${heroId}`, {
        method: "PUT",
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
    <>
      <Head>
        <title>{hero.superHero}</title>
      </Head>
      <div className="container text-center">
        <MDBTypography variant="h1" className="mt-5">
          Update Hero Details
        </MDBTypography>
        <MDBContainer style={{ maxWidth: "45rem" }}>
          <form onSubmit={handleForm}>
            <MDBInput
              value={form.superHero}
              autocomplete="off"
              className="my-5"
              onChange={handleChange}
              label="superHero"
              type="text"
              name="superHero"
            />
            <MDBInput
              value={form.realName}
              autocomplete="off"
              className="my-5"
              onChange={handleChange}
              label="realName"
              type="text"
              name="realName"
            />
            <MDBBtn type="submit">Update Hero</MDBBtn>
          </form>
        </MDBContainer>
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const id = params.id;
  const res = await axios(`http://localhost:3000/api/hero/${id}`);
  const { hero } = res.data;
  return {
    props: { hero: hero },
  };
}

export default editHero;
