// import { Form, Input, message } from "antd";
// import Button from "../../components/Button";
// import { useDispatch, useSelector } from "react-redux";
// import { ShowLoading, HideLoading } from "../../redux/rootSlice";
// import axios from "axios";

// export default function AdminSkill() {
//   const dispatch = useDispatch();
//   const { portfolioData } = useSelector((state) => state.root);

//   console.log(portfolioData.Skills[0]);

//   const onFinish = async (values) => {
//     try {
//       dispatch(ShowLoading());

//       const response = await axios.post(
//         "http://localhost:8000/api/portfolio/update-skill",
//         {
//           ...values,
//           _id: portfolioData.Skills[0]._id,
//         }
//       );

//       dispatch(HideLoading());
//       if (response.data.success) {
//         message.success(response.data.message);
//       } else {
//         message.error("Somthing went wrong");
//       }
//     } catch (error) {
//       dispatch(HideLoading());

//       message.error("Somthing wrong in data fetching");
//     }
//   };

//   //   Working on array in schema that not giving expected output and also try to add upload through admin - -------

//   return (
//     <>
//       <Form
//         className="flex flex-col gap-8"
//         layout="vertical"
//         onFinish={onFinish}
//         initialValues={portfolioData.Skills[0]}
//       >
//         <Form.Item name="description" label="Description :- ">
//           <Input.TextArea
//             rows={4}
//             cols={4}
//             placeholder="Description"
//             className="all-input"
//           />
//         </Form.Item>

//         <Form.Item name="skills" label="My Skills :-">
//           <Input placeholder="Skills..." className="all-input" />
//         </Form.Item>

//         <div className="flex gap-10 justify-center w-full">
//           <Button
//             type="submit"
//             title={"Update"}
//             styleClass={"buttonTwo primary-btn"}
//           />
//         </div>
//       </Form>
//     </>
//   );
// }

import { Form, Input, message } from "antd";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";

export default function AdminSkill() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);

  const initialSkills = portfolioData.Skills[0]
    ? {
        ...portfolioData.Skills[0],
        skills: portfolioData.Skills[0].skills
          .map((skill) => skill.name)
          .join(", "),
      }
    : {};

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());

      // Convert the skills string to an array of objects
      const skillsArray = values.skills
        .split(",")
        .map((skill) => ({ name: skill.trim() }));

      const response = await axios.post(
        "http://localhost:8000/api/portfolio/update-skill",
        {
          ...values,
          skills: skillsArray,
          _id: portfolioData.Skills[0]._id,
        }
      );

      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error("Something went wrong");
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error("Something went wrong in data fetching");
    }
  };

  return (
    <>
      <Form
        className="flex flex-col gap-8"
        layout="vertical"
        onFinish={onFinish}
        initialValues={initialSkills}
      >
        <Form.Item name="description" label="Description :- ">
          <Input.TextArea
            rows={4}
            cols={4}
            placeholder="Description"
            className="all-input"
          />
        </Form.Item>

        <Form.Item name="skills" label="My Skills :-">
          <Input
            placeholder="Skills (comma separated)..."
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
}
