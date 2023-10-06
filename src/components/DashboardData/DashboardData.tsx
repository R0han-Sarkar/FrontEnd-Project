import "./DashboardData.css";
import { Card } from "react-bootstrap";
import { useEffect } from "react";
import items from "../../Data/Dashboard_FirstLayout.json";
import { useNavigate } from "react-router-dom";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar, Doughnut } from "react-chartjs-2";
import { AddProfile } from "../AddProfile/AddProfile";

ChartJS.register(
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export const DashboardData = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("token") == null) {
      navigate("/login");
    }
  }, []);

  //------------------------bar chart-----------------------------
  const data = {
    labels: ["Week1", "Week2", "Week3", "Week4"],
    datasets: [
      {
        label: "Guest",
        data: [500, 350, 200, 400],
        backgroundColor: "#E9A0A0",
      },
      {
        label: "User",
        data: [400, 450, 300, 350],
        backgroundColor: "#9BDD7C",
      },
    ],
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 100,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    categoryPercentage: 0.5,
    barPercentage: 0.8,
    borderRadius: 5,
  };
  //--------------------------------------------------------------

  //------------------------doughnut chart------------------------

  const data1 = {
    labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
    datasets: [
      {
        data: [55, 31, 14],
        backgroundColor: ["#98D89E", "#F6DC7D", "#EE8484"],
      },
    ],
  };
  const options1 = {
    responsive: true,
    maintainAspectRatio: true,
    cutout: 50,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  //--------------------------------------------------------------

  return (
    <>
      <div className="dashBoard-data">
        <div className="firstDataLayout">
          {items.map((item, index) => (
            <Card
              key={index}
              style={{
                width: "238px",
                height: "120px",
                marginTop: "25px",
                borderRadius: "10px",
              }}
            >
              <Card.Body>
                <Card.Title
                  style={{
                    backgroundColor: `${item.color}`,
                    height: "26.5px",
                    width: "26.5px",
                    borderRadius: "50%",
                    position: "relative",
                  }}
                >
                  <img
                    src={item.imageUrl}
                    alt=""
                    style={{
                      position: "absolute",
                      left: "4px",
                      top: "4px",
                      right: "1px",
                    }}
                  />
                </Card.Title>
                <Card.Subtitle className="card-Title mb-2">
                  {item.name}
                </Card.Subtitle>
                <Card.Text
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="quantity">{item.quantity}</div>
                  <div className="plus">{item.plus}</div>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
        <div className="secondDataLayout boxLayout">
          <Card style={{ height: "330px", borderRadius: "10px" }}>
            <Card.Body>
              <Card.Title className="card-Title2 mb-3">Activities</Card.Title>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Card.Subtitle
                  className="card-Subtitle2 text-muted mb-2"
                  style={{ padding: "0px 0px" }}
                >
                  May - June 2021
                </Card.Subtitle>
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <Card.Subtitle className="card-Subtitle2">
                    <div
                      className="dot red"
                      style={{
                        background: "#E9A0A0",
                      }}
                    ></div>
                    <div>Guest</div>
                  </Card.Subtitle>
                  <Card.Subtitle className="card-Subtitle2">
                    <div
                      className="dot green"
                      style={{
                        background: "#9BDD7C",
                      }}
                    ></div>
                    <div>User</div>
                  </Card.Subtitle>
                </div>
              </div>
              <Card.Text className="bar-data">
                <div>
                  <Bar
                    data={data}
                    options={options}
                    style={{ height: "250px", width: "100%" }}
                  />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="thirdDataLayout">
          <div>
            <Card
              style={{ width: "530px", height: "230px", borderRadius: "10px" }}
            >
              <Card.Body>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Card.Title
                    style={{
                      color: "black",
                      fontSize: "18px",
                      fontFamily: "Montserrat",
                      fontWeight: "700",
                      wordWrap: "break-word",
                    }}
                  >
                    Top Products
                  </Card.Title>
                  <Card.Title
                    className="text-muted"
                    style={{
                      color: "#858585",
                      fontSize: "12px",
                      fontFamily: "Montserrat",
                      fontWeight: "400",
                      wordWrap: "break-word",
                      marginTop: "5px",
                    }}
                  >
                    May-June 2021
                  </Card.Title>
                </div>
                <div
                  style={{
                    width: "90%",
                    height: "80%",
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Doughnut data={data1} options={options1} />
                  <div
                    className="doughnute-data"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: "35px",
                      marginLeft: "40px",
                    }}
                  >
                    <div style={{ display: "flex", marginBottom: "10px" }}>
                      <div
                        className="doughnut-data-label-dots"
                        style={{ background: "#98d89e" }}
                      ></div>
                      <div className="doughnut-data-label">
                        Basic Tees (55%)
                      </div>
                    </div>
                    <div style={{ display: "flex", marginBottom: "10px" }}>
                      <div
                        className="doughnut-data-label-dots"
                        style={{ background: "#F6DC7D" }}
                      ></div>
                      <div className="doughnut-data-label">
                        Custom Short Pantss (31%)
                      </div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <div
                        className="doughnut-data-label-dots"
                        style={{ background: "#EE8484" }}
                      ></div>
                      <div className="doughnut-data-label">
                        Super Hoodies (14%)
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div>
            {/* <div style={{ background: "red", width: "530px", height: "230px" }}>
            <Outlet />
             </div> */}

            <AddProfile />
          </div>
        </div>
      </div>
    </>
  );
};
