
import { useLocation } from "react-router-dom";

const AboutPage = () => {
  const location = useLocation();
  const u = location.state;



  return (
    <div>
      <h1>This is About Page</h1>

      <div
        style={{
          width: 400,
          backgroundColor: "black",
          color: "white",
          borderRadius: "5px",
          marginTop: 10,
          padding: 15,
        }}
      >
        <h2>ID: {u.id}</h2>
        <h2>Name: {u.name}</h2>
        <h3>Username: {u.username}</h3>
        <h3>Email: {u.email}</h3>
        <h3>Phone: {u.phone}</h3>
        <h3>Website: {u.website}</h3>

        <hr />

        <h2>Address</h2>
        <p>Street: {u.address.street}</p>
        <p>Suite: {u.address.suite}</p>
        <p>City: {u.address.city}</p>
        <p>Zipcode: {u.address.zipcode}</p>

        <hr />

        <h2>Company: {u.company.name}</h2>
      </div>
    </div>
  );
};

export default AboutPage;
