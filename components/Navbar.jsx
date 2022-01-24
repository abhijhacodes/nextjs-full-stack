import Link from "next/link";
import {
  MDBBtn,
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";

function Navbar() {
  return (
    <>
      <MDBNavbar dark bgColor="danger" shadow="5">
        <MDBContainer>
          <MDBNavbarBrand>
            <Link href="/">
              <a className="navbar-brand text-light">SuperHero Identities</a>
            </Link>
          </MDBNavbarBrand>
          <Link href="/add">
            <MDBBtn color="light">Add new hero</MDBBtn>
          </Link>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

export default Navbar;
