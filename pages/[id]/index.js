const axios = require("axios").default;
import { useRouter } from "next/router";
import Head from "next/head";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";

function UniqueHero({ hero }) {
  const router = useRouter();
  const heroId = router.query.id;

  const deleteHero = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/api/hero/${heroId}`
      );
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Head>
        <title>{hero.superHero}</title>
      </Head>
      <div className="container mt-4">
        <MDBTypography variant="h1" className="mt-5">
          Details of Hero
        </MDBTypography>
        <MDBCard
          background="secondary"
          border="danger"
          shadow="5"
          className="text-white border-2 my-3 hover-shadow"
          style={{ maxWidth: "22rem" }}
          alignment="center"
        >
          <MDBCardBody>
            <MDBCardTitle>{hero.superHero}</MDBCardTitle>
            <MDBCardText>{hero.realName}</MDBCardText>
            <MDBBtn color="danger" className="text-white" onClick={deleteHero}>
              Delete Hero
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
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

export default UniqueHero;
