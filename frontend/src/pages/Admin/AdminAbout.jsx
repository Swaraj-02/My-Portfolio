import { Form, Input, message } from "antd";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";

import axios from "axios";

const AdminAbout = () => {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());

      const response = await axios.post(
        "http://localhost:8000/api/portfolio/update-about",
        {
          ...values,
          _id: portfolioData.About._id,
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
        initialValues={portfolioData.About}
      >
        <Form.Item label="My Picture :-">
          <Input placeholder="image" className="all-input" />
        </Form.Item>
        <Form.Item name="description1" label="Description 1 :- ">
          <Input.TextArea
            rows={4}
            cols={4}
            placeholder="Description"
            className="all-input"
          />
        </Form.Item>
        <Form.Item name="description2" label="Description 2 :- ">
          <Input.TextArea
            rows={4}
            cols={4}
            placeholder="Description"
            className="all-input"
          />
        </Form.Item>

        <div className="flex gap-10 justify-center w-full">
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

export default AdminAbout;
