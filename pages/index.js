import React from "react";
const axios = require("axios").default;
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import Link from "next/link";

function Home({ heroes }) {
  return (
    <div className="container">
      <div>
        <MDBRow className="mt-3">
          {heroes.map((hero) => {
            return (
              <MDBCol md="4">
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
                    <MDBCardText>Reveal identity</MDBCardText>
                    <Link href={`${hero._id}`}>
                      <MDBBtn color="success" className="mx-3 text-black">
                        View Hero
                      </MDBBtn>
                    </Link>
                    <Link href={`${hero._id}/edit`}>
                      <MDBBtn color="warning" className="text-black">
                        Edit Hero
                      </MDBBtn>
                    </Link>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            );
          })}
        </MDBRow>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await axios("http://localhost:3000/api/hero");
  const { hero } = res.data;
  return {
    props: { heroes: hero },
  };
}

export default Home;
