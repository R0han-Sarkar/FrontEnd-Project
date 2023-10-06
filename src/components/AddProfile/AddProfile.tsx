import "./AddProfile.css";
import { Button, Card,  Modal } from "react-bootstrap";
import { useState } from "react";
import { FormikHelpers } from "formik/dist/types";
import AddProfilewithData from "../AddProfilewithData/AddProfilewithData";
import FormikStepper, { InputField } from "formik-stepper";
import FormikStep from "formik-stepper/dist/fromikForm/FormikStep";

const profileValues = {
  name: "",
  email: "",
  phone: "",
  instaURL: "",
  youtubeURL: "",
};

export const AddProfile = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [basicData, setBasicData] = useState<any[]>([]);

  const onSubmit = async (values: any, {}: FormikHelpers<any>) => {
    setBasicData((prv: any[]) => [...prv, values]);
    console.log(values);
  };

  return (
    <>
      {basicData?.length ? (
        <AddProfilewithData basic={basicData} />
      ) : (
        <Card style={{ width: "530px", height: "230px", borderRadius: "10px" }}>
          <Card.Body>
            <div className="add-profile">
              <Button variant="none" onClick={handleShow}>
                <Card.Title>
                  <i className="bi bi-plus-circle plus-circle text-muted"></i>
                </Card.Title>
                <Card.Subtitle className="add-profile-tag text-muted">
                  Add Profile
                </Card.Subtitle>
              </Button>

              <Modal
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show}
                onHide={handleClose}
              >
                <Modal.Header>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Add New Profile
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <FormikStepper
                    /// Accept all Formik props
                    onSubmit={onSubmit} /// onSubmit Function
                    initialValues={profileValues}
                    // validationSchema={validationSchema}
                    withStepperLine /// false as default and If it is false, it hides stepper line
                    nextButton={{ label: "Next" }}
                    prevButton={{ label: "Back" }}
                    submitButton={{
                      label: "Done",
                      style: { background: "#65AFFF" },
                    }}
                  >
                    {/*  First Step */}
                    <FormikStep label="Basic">
                      <div style={{ width: "100%", height: "250px" }}>
                        <InputField
                          name="name"
                          label="Enter Name"
                          floating
                          type="text"
                          placeholder="Eg. John Doe"
                        />
                        <InputField
                          name="email"
                          label="Enter Email"
                          floating
                          type="email"
                          placeholder="Eg. johndoe@abc.com"
                        />
                        <InputField
                          name="phone"
                          label="Enter Phone"
                          floating
                          type="text"
                          placeholder="Eg. 0987654321"
                          style={{ marginBottom: "20px" }}
                        />
                      </div>
                    </FormikStep>
                    {/* Second Step */}

                    <FormikStep label="Social">
                      <div
                        style={{ marginTop: "1.5rem", marginBottom: "2rem" }}
                      >
                        <InputField
                          name="instaURL"
                          label="Instagram Link (Optional)"
                          floating
                          type="text"
                          placeholder="Eg. ..instagram.com/username"
                        />
                      </div>
                      <div>
                        <InputField
                          name="youtubeURL"
                          label="Youtube Link (Optional)"
                          floating
                          type="text"
                          placeholder="Eg. ..youtebe/username"
                          style={{ marginBottom: "4.8rem" }}
                        />
                      </div>
                    </FormikStep>
                  </FormikStepper>
                </Modal.Body>
              </Modal>
            </div>
          </Card.Body>
        </Card>
      )}
    </>
  );
};
