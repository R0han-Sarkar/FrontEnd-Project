import { Card } from "react-bootstrap";
import "./AddProfilewithData.css";

export default function AddProfilewithData({ basic }: any) {
  // console.log(basic);
  return (
    <div>
      <Card style={{ width: "530px", height: "230px", borderRadius: "10px" }}>
        <Card.Body>
          {basic &&
            basic.map((item: any, index: number) => (
              <div className="add-profile-with-data" key={index}>
                <Card.Title className="user-name">{item?.name}</Card.Title>
                <div className="user-data">
                  <div className="email-phone">
                    <Card.Subtitle className="user-phone">
                      <img
                        src="\AddProfilePage_icons\phone.png"
                        alt=""
                        style={{ marginRight: "10px" }}
                      />
                      {item?.phone}
                    </Card.Subtitle>
                    <Card.Subtitle className="user-email">
                      <img
                        src="\AddProfilePage_icons\email.png"
                        alt=""
                        style={{ marginRight: "10px" }}
                      />
                      {item?.email}
                    </Card.Subtitle>
                  </div>
                  <div className="insta-youtube">
                    <Card.Subtitle className="user-instaURL">
                      <img
                        src="\AddProfilePage_icons\insta.png"
                        alt=""
                        style={{ marginRight: "10px" }}
                      />
                      {item?.instaURL}
                    </Card.Subtitle>
                    <Card.Subtitle className="user-youtubeURL">
                      <img
                        src="\AddProfilePage_icons\youtube.png"
                        alt=""
                        style={{ marginRight: "10px" }}
                      />
                      {item?.youtubeURL}
                    </Card.Subtitle>
                  </div>
                </div>
              </div>
            ))}
        </Card.Body>
      </Card>
    </div>
  );
}
