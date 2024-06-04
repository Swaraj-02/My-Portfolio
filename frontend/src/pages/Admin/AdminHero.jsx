import { Form, Input, Upload, message } from "antd";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";

const AdminHero = () => {
  // const baseUrl = process.env.REACT_APP_API_BASE_URL;

  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);

  const initialHeroVal = portfolioData.Hero
    ? {
        ...portfolioData.Hero,
        caption: portfolioData.Hero.caption
          .map((caption) => caption.name)
          .join(", "),
      }
    : {};

  // console.log(portfolioData.Hero.caption);

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());

      // Convert the hero string to an array of objects
      const heroCaptionArray = values.caption
        .split(",")
        .map((caption) => ({ name: caption.trim() }));

      // console.log(heroCaptionArray);

      const response = await axios.post(
        `http://localhost:8000/api/portfolio/update-hero`,
        {
          ...values,
          caption: heroCaptionArray,
          _id: portfolioData.Hero._id,
        }
      );

      dispatch(HideLoading());

      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error("Somthing went wrong");
      }
    } catch (error) {
      dispatch(HideLoading());

      message.error("Somthing wrong in data fetching");
    }
  };

  return (
    <>
      <Form
        className="flex flex-col gap-8"
        layout="vertical"
        onFinish={onFinish}
        initialValues={initialHeroVal}
      >
        <Form.Item name="welcomeText" label="Welcome Text :- ">
          <Input placeholder="Welcome Text" className="all-input" />
        </Form.Item>
        <Form.Item name="firstName" label="First Name :- ">
          <Input placeholder="First Name" className="all-input" />
        </Form.Item>
        <Form.Item name="lastName" label="Last Name :- ">
          <Input placeholder="Last Name" className="all-input" />
        </Form.Item>

        <Form.Item name="caption" label="Caption :- ">
          <Input
            placeholder="Caption (comma separated...)"
            className="all-input"
          />
        </Form.Item>
        <Form.Item name="description" label="Description :- ">
          <Input.TextArea
            rows={3}
            cols={3}
            placeholder="Description"
            className="all-input"
          />
        </Form.Item>
        <Form.Item name="resume" label="Upload Resume">
          <Upload
            // onChange={handleFileChange}
            accept=".pdf,.doc,.docx"
            beforeUpload={() => false} // Prevent default upload behavior
          >
            <Button>Upload</Button>
          </Upload>
        </Form.Item>
        <div className="flex gap-10 justify-center w-full">
          {/* <Button title={"Save"} styleClass={"buttonTwo primary-btn"} /> */}
          <Button
            type="submit"
            title={"Update"}
            styleClass={"buttonTwo primary-btn"}
          />
        </div>
      </Form>
    </>
  );
};

export default AdminHero;
