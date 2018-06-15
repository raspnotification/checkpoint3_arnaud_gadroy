import React from "react";
import styles from "../styles/cardModel.css";
import { Card, CardTitle, CardBody, CardFooter, Button } from "reactstrap";

const CardModel = ({ id, title, description, image, selected, select }) => {
  return (
    <div className={styles.card}>
      <Card className="cardModel card" style={{}}>
        <div
          className="wrapper text-center"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          <div className="data">
            <CardBody className="content">
              <CardTitle
                className="title"
                style={{
                  fontWeight: "500",
                  marginTop: "10px"
                }}
              >
                <p
                  style={{
                    color: "#FFF"
                  }}
                >
                  {title}
                </p>
              </CardTitle>
              <Button
                onClick={() => {
                  select({ title });
                  console.log({ title });
                }}
                style={{
                  display: "block",
                  margin: "2em auto 1em",
                  textAlign: "center",
                  fontSize: "12px",
                  color: "#fff",
                  lineHeight: "1",
                  position: "relative",
                  fontWeight: "700",
                  marginBottom: "40px",
                  padding: "10px 20px"
                }}
              >
                Kill the superhero
              </Button>
            </CardBody>
            <CardFooter
              style={{
                backgroundColor: "rgba(136,136,136, 0.5)"
              }}
            >
              <h1
                className="text"
                style={{
                  height: "70px",
                  margin: "0"
                }}
              >
                {description}
              </h1>
            </CardFooter>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CardModel;
