import "./LoginPage.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Card } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

export const LoginPage = () => {
  const [userName, setUserName] = useState("mor_2314");
  const [userPass, setUserPass] = useState("83r5^_");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const requestBody = {
    username: userName, //mor_2314
    password: userPass, //"83r5^_"
  };

  const handleClick = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (userName === "" || userPass === "") {
      setError(true);
    } else {
      setError(false);

      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let raw = JSON.stringify(requestBody);

      let requestOptions: any = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };

      fetch("https://fakestoreapi.com/auth/login", requestOptions)
        .then((res) => {
          if (res.status == 200) {
            return res.json();
          } else {
            alert("Username and Password is incorrect");
          }
        })
        .then((data) => {
          sessionStorage.setItem("token", data.token);
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };

  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
          // marginLeft: "18%",
        }}
      >
        <p style={{ color: "#B10F2E" }}>
          <b style={{ fontStyle: "italic" }}>Warning: </b>
          <i>Please enter all the fields.</i>
        </p>
      </div>
    );
  };

  return (
    <>
      <section className="full-page">
        <div className="l-side">
          <div className="Logo">LOGO</div>
          <div className="Board">Board.</div>
          <div className="Icons-container">
            <div className="icon">
              <GitHubIcon style={{ color: "white", fontSize: "2rem" }} />
            </div>
            <div className="icon">
              <TwitterIcon style={{ color: "white", fontSize: "2rem" }} />
            </div>
            <div className="icon">
              <LinkedInIcon style={{ color: "white", fontSize: "2rem" }} />
            </div>
            <div className="icon">
              <i
                className=" icon bi bi-discord"
                style={{ color: "white", fontSize: "2rem" }}
              ></i>
            </div>
          </div>
        </div>
        <div className="r-side">
          <div className="SIGN-IN">
            <div className="sign-in">Sign In</div>
            <div className="sign-in-ac">Sign in to your acccount</div>
            <div className="Sign-in-options mt-4">
              <div className="Sign-in-G" style={{ marginLeft: "10px" }}>
                <img
                  width="16"
                  height="16"
                  src="https://img.icons8.com/color/48/google-logo.png"
                  alt="google-logo"
                  style={{ marginRight: "10px", marginBottom: "2px" }}
                />
                Sign in with Google
              </div>
              <div className="Sign-in-A">
                <img
                  width="16"
                  height="16"
                  src="https://img.icons8.com/deco/16/mac-os.png"
                  alt="mac-os"
                  style={{ marginRight: "10px", marginBottom: "2px" }}
                />
                Sign in with Apple
              </div>
            </div>
            <div className="login-form mt-4">
              <Card style={{ width: "423px", height: "348px", border: "none" }}>
                <Card.Body>
                  <form>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="login-form-label"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        defaultValue="mor_2314"
                        onChange={(e) => setUserName(e.target.value)}
                        style={{ borderRadius: "10px" }}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="login-form-label"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        defaultValue="83r5^_"
                        onChange={(e) => setUserPass(e.target.value)}
                        style={{ borderRadius: "10px" }}
                      />
                    </div>
                    <div className="messages">{errorMessage()}</div>
                    <div className="mb-3">
                      <NavLink to={"#"}>Forgot Password?</NavLink>
                    </div>

                    <button
                      type="submit"
                      className="form-control btn btn-primary"
                      onClick={handleClick}
                      style={{ borderRadius: "10px" }}
                    >
                      Sign In
                    </button>
                    <div
                      id="emailHelp"
                      className="form-text mt-4"
                      style={{ textAlign: "center" }}
                    >
                      Don't have an account?{" "}
                      <NavLink to={"#"}>Register Here.</NavLink>
                    </div>
                  </form>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
